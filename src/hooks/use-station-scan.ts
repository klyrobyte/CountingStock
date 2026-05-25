/**
 * Station scan hook — wraps /api/qr/process using the STATION JWT.
 * Completely separate from useProcessQr which uses the main user session.
 * The station token is sent as a Bearer token in the Authorization header.
 */
import { useMutation } from "@tanstack/react-query";
import { getStationToken } from "@/lib/auth";
import type { ProcessQrResult } from "@/hooks/use-qr-process";

const API_BASE = "/api";

async function fetchStationApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getStationToken();
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const data = await response.json();
  if (!data.success) throw new Error(data.error || "Terjadi kesalahan.");
  return data.data;
}

export function useStationScan() {
  return useMutation({
    mutationFn: ({
      token,
      forceAction,
      partstats,
    }: {
      token: string;
      forceAction: "SCAN_IN" | "SCAN_OUT";
      partstats?: "reguler" | "bcp";
    }) =>
      fetchStationApi<ProcessQrResult>("/qr/process", {
        method: "POST",
        body: JSON.stringify({ token, forceAction, partstats }),
      }),
  });
}
