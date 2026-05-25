import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

export type QrItem = {
  id: number;
  qr_id: string;
  batch_id: string | null;
  part_name: string;
  factory: string;
  material: string;
  qr_value: string;
  units: number;
  token: string | null;
  qr_image_base64: string | null;
  status: "in" | "out";
  created_at: string;
  updated_at: string;
};

export type GenerateQrPayload = {
  partName: string;
  factoryOrigin: string;
  value: number;
  machineOrigin?: string; // [NEW] additive — machine that produced this batch
};

export type GenerateQrResult = {
  batchId: string;
  qrId: string;
  qrContentUrl: string;
  qrImageBase64: string;
  partName: string;
  factoryOrigin: string;
  value: number;
  machineOrigin?: string; // [NEW] additive
  status: "in" | "out";
  row: QrItem;
};

export function useQrCodes(search = "") {
  return useQuery({
    queryKey: ["qr-codes", search],
    queryFn: () => fetchApi<QrItem[]>(`/qr${search ? `?search=${encodeURIComponent(search)}` : ""}`),
  });
}

export function useGenerateQrCode() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: GenerateQrPayload) =>
      fetchApi<GenerateQrResult>("/qr/generate", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qr-codes"] });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

// Keep for backward compatibility
export function useCreateQrCode() {
  return useGenerateQrCode();
}

export function useDeleteQrCode() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      fetchApi<{ success: true; message: string }>(`/qr/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qr-codes"] });
    },
  });
}

