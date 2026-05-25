import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

export type ShikakeItem = {
  id: number;
  masterPartId: number;
  shikakeValue: number;
  partNumber?: string;
  partName?: string;
  model?: string;
  factoryOrigin?: string;
};

export type MasterPartOption = {
  id: number;
  partNumber: string;
  partName: string;
  model: string;
  factoryOrigin: string;
};

export function useShikakeList() {
  return useQuery({
    queryKey: ["shikake"],
    queryFn: () => fetchApi<ShikakeItem[]>("/shikake"),
  });
}

export function useShikakeParts() {
  return useQuery({
    queryKey: ["shikake-parts"],
    queryFn: () => fetchApi<MasterPartOption[]>("/shikake/parts"),
  });
}

export function useCreateShikake() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: { masterPartId: number; shikakeValue: number }) =>
      fetchApi("/shikake", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["shikake"] });
      qc.invalidateQueries({ queryKey: ["shikake-parts"] });
    },
  });
}

export function useUpdateShikake() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      shikakeValue,
    }: {
      id: number;
      shikakeValue: number;
    }) =>
      fetchApi(`/shikake/${id}`, {
        method: "PUT",
        body: JSON.stringify({ shikakeValue }),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["shikake"] }),
  });
}

export function useDeleteShikake() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      fetchApi(`/shikake/${id}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["shikake"] }),
  });
}
