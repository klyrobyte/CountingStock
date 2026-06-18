/**
 * use-privileges.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * React Query hooks for the QR Privilege Management system.
 * All calls include x-internal-key header (from Vite env, only available in
 * the admin dashboard which is already JWT-protected - never reaches stations).
 */
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAuthToken } from "@/lib/auth";

const API_BASE = "/api";
const INTERNAL_KEY = import.meta.env.VITE_INTERNAL_API_KEY || "";

// ── Station privilege info ─────────────────────────────────────────────────
export type StationPrivilegeInfo = {
  id: number;
  device_code: string;
  name: string;
  location: string;
  device_role: "IN" | "OUT";
  active_status: string;
  privilege_mode: "open" | "restricted";
  privilege_count: number;
};

// ── QR item (in the privilege list context) ────────────────────────────────
export type PrivilegeQrItem = {
  id: number;
  qr_id: string;
  part_name: string;
  factory: string;
  status: string;
  is_allowed: boolean;
};

export type StationPrivilegeDetail = {
  station_id: number;
  privilege_mode: "open" | "restricted";
  allowed_count: number;
  qr_list: PrivilegeQrItem[];
};

// ── Internal fetch helper ──────────────────────────────────────────────────
async function fetchPrivilegeApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAuthToken();

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-internal-key": INTERNAL_KEY,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers as Record<string, string>),
    },
  });

  const data = await response.json();
  if (!data.success) throw new Error(data.error || "Terjadi kesalahan.");
  return data.data;
}

// ═══════════════════════════════════════════════════════════════════════════
// [1] usePrivilegeStations - list all stations with privilege status
// ═══════════════════════════════════════════════════════════════════════════
export function usePrivilegeStations() {
  return useQuery<StationPrivilegeInfo[]>({
    queryKey: ["privilege-stations"],
    queryFn: () => fetchPrivilegeApi<StationPrivilegeInfo[]>("/privileges/stations"),
    staleTime: 30_000, // 30s - stations don't change often
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// [2] useStationPrivilegeDetail - QR list for a specific station
// ═══════════════════════════════════════════════════════════════════════════
export function useStationPrivilegeDetail(stationId: number | null) {
  return useQuery<StationPrivilegeDetail>({
    queryKey: ["privilege-station-detail", stationId],
    queryFn: () =>
      fetchPrivilegeApi<StationPrivilegeDetail>(`/privileges/station/${stationId}`),
    enabled: stationId !== null,
    staleTime: 10_000,
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// [3] useSetStationPrivileges - save/replace privileges for a station
// Supports multiple QR IDs per station
// ═══════════════════════════════════════════════════════════════════════════
export function useSetStationPrivileges() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ stationId, qrIds }: { stationId: number; qrIds: number[] }) =>
      fetchPrivilegeApi<{ station_id: number; allowed_count: number }>(
        `/privileges/station/${stationId}`,
        {
          method: "POST",
          body: JSON.stringify({ qr_ids: qrIds }),
        }
      ),
    onSuccess: (_data, vars) => {
      // Invalidate both the list and the specific station detail
      qc.invalidateQueries({ queryKey: ["privilege-stations"] });
      qc.invalidateQueries({ queryKey: ["privilege-station-detail", vars.stationId] });
    },
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// [4] useResetStationPrivileges - reset station to open access
// ═══════════════════════════════════════════════════════════════════════════
export function useResetStationPrivileges() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (stationId: number) =>
      fetchPrivilegeApi<{ station_id: number }>(
        `/privileges/station/${stationId}`,
        { method: "DELETE" }
      ),
    onSuccess: (_data, stationId) => {
      qc.invalidateQueries({ queryKey: ["privilege-stations"] });
      qc.invalidateQueries({ queryKey: ["privilege-station-detail", stationId] });
    },
  });
}
