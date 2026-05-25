/** Stock analytics calculated fields (spec §13). */

export type StockAnalyticsInput = {
  qtyPerDay: number;
  stockActual: number;
  shikake: number;
  minPlaceholder?: number;
};

export type StockAnalyticsComputed = {
  stokJam: number;
  judge: "OK" | "NG / ✖";
  qtyPerHour: number;
  min: number;
  max: number;
};

export function computeStockAnalytics(
  input: StockAnalyticsInput
): StockAnalyticsComputed {
  const qtyPerDay = Math.max(input.qtyPerDay, 0);
  const stockActual = Math.max(input.stockActual, 0);
  const shikake = Math.max(input.shikake, 0.0001);

  const qtyPerHour = qtyPerDay > 0 ? qtyPerDay / 8 : 0;

  // G — Stok Jam = Stock Actual / Qty Per Day * 8 (smallest value when multiple)
  const stokJam =
    qtyPerDay > 0 ? Math.min((stockActual / qtyPerDay) * 8, stockActual) : 0;

  // H — Judge
  const judge: "OK" | "NG / ✖" = stokJam < 4 ? "NG / ✖" : "OK";

  // L — Min (configurable placeholder)
  const min = input.minPlaceholder ?? 0;

  // M — Max = (Qty Per Day / Shikake / Qty Per Hour) + Min + 2
  const max =
    qtyPerHour > 0
      ? qtyPerDay / shikake / qtyPerHour + min + 2
      : min + 2;

  return { stokJam, judge, qtyPerHour, min, max };
}

export type StockHourStatus = "none" | "critical" | "warning" | "safe";

/** Classify Stok Jam for TV / mc-card (spec §7–8). */
export function classifyStokJam(
  stokJam: number,
  isActive: boolean
): StockHourStatus {
  if (!isActive) return "none";
  if (stokJam <= 2) return "critical";
  if (stokJam <= 4) return "warning";
  return "safe";
}

export function statusIcon(status: StockHourStatus): string {
  switch (status) {
    case "critical":
      return "💔";
    case "warning":
      return "⚠️";
    case "safe":
      return "💚";
    default:
      return "—";
  }
}
