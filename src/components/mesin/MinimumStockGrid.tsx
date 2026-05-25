import type { TvMachine } from "@/hooks/use-tv-dashboard";

function statusIcon(status: TvMachine["cardStatus"]): string {
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

type Props = {
  machines: TvMachine[];
  compact?: boolean;
};

export function MinimumStockGrid({ machines, compact }: Props) {
  if (machines.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-4">
        Tidak ada mesin untuk factory ini.
      </p>
    );
  }

  return (
    <div
      className={
        compact
          ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
          : "tv-machine-grid"
      }
    >
      {machines.map((m) => {
        const inactive = !m.isActive;
        const icon = statusIcon(m.cardStatus);
        const val = inactive
          ? "N/A"
          : m.stokJam.toFixed(1);
        const sub = inactive ? "Running / Reset" : undefined;

        return (
          <div
            key={m.id}
            className={`tv-mc-card tv-mc-${m.cardStatus}${compact ? " tv-mc-compact" : ""}`}
          >
            <div className="tv-mc-id">{m.machineCode}</div>
            <div className="tv-mc-icon">{icon}</div>
            <div className="tv-mc-val">
              {val}
              {sub && <span className="tv-mc-sub">{sub}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
