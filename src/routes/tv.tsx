import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useTvDashboard } from "@/hooks/use-tv-dashboard";
import type { TvMachine } from "@/hooks/use-tv-dashboard";
import { MinimumStockGrid } from "@/components/mesin/MinimumStockGrid";
import "./tv.css";

// ─── PRIORITY LOGIC (plan.md) ──────────────────────────────────────────────
// Single source of truth for status derivation — never read raw status strings.
// Thresholds: < 3.0 → critical | 3.0–3.99 → warning | ≥ 4.0 → safe
function getStatus(jam: number): "critical" | "warning" | "safe" {
  if (jam < 3.0) return "critical";
  if (jam < 4.0) return "warning";
  return "safe";
}

// Bug #1 fix: compute the true minimum JAM per machine by excluding JAM === 0
// (which means "no data / not started"). Falls back to 0 only if ALL parts are 0.
function computeMinJam(partRows: TvMachine["partRows"]): number {
  const active = partRows.filter((r) => r.jam !== 0);
  if (active.length === 0) return 0;
  return Math.min(...active.map((r) => r.jam));
}

// Rewrite each machine's stokJam + cardStatus using the corrected minJAM logic.
function fixMachineStatuses(machines: TvMachine[]): TvMachine[] {
  return machines.map((m) => {
    if (!m.isActive) return m; // inactive machines keep their "none" card status
    const minJam = computeMinJam(m.partRows ?? []);
    const cardStatus = getStatus(minJam);
    return { ...m, stokJam: minJam, stockJam: minJam, cardStatus };
  });
}

const searchSchema = z.object({
  fac: z.string().optional().catch(""),
  shift: z.enum(["A", "B"]).optional().catch("A"),
  theme: z.enum(["default", "dark", "white"]).optional().catch("default"),
});

export const Route = createFileRoute("/tv")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "STOCK MONITORING — TV" },
      { name: "description", content: "Factory stock monitoring display" },
    ],
  }),
  component: TvPage,
});

function resolveTheme(
  themeParam: string
): "dark" | "light" {
  if (themeParam === "white") return "light";
  if (themeParam === "dark") return "dark";
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "dark";
}

function TvPage() {
  const { fac = "", shift = "A", theme = "default" } = Route.useSearch();
  const [clock, setClock] = useState("");
  // Change #3: expand/collapse state for safe rows in PRIORITY PRODUCTION
  const [isExpanded, setIsExpanded] = useState(false);
  const visualTheme = resolveTheme(theme);

  const { data, isLoading } = useTvDashboard(fac, shift, !!fac);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(
        now.toLocaleString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) + " WIB"
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const gaugeArc = useMemo(() => {
    // Determine the percentage based on the number of non-critical machines over total active machines
    const machines = data?.machines ?? [];
    const activeMachines = machines.filter(m => m.isActive);
    let pct = 0;
    
    if (activeMachines.length > 0) {
      // Fix #1 guarantees that cardStatus reflects the real minimum JAM for each machine
      // and getStatus() has set it properly. So we just count safe/warning vs critical.
      // Availability = percentage of active machines that are NOT critical.
      // (Using the newly fixed fixMachineStatuses function logic)
      const fixedMachines = fixMachineStatuses(machines);
      const nonCriticalCount = fixedMachines.filter(
        m => m.isActive && m.cardStatus !== "critical"
      ).length;
      
      pct = Math.round((nonCriticalCount / activeMachines.length) * 100);
    }
    
    // Normalize percentage (clamp 0-100)
    pct = Math.min(100, Math.max(0, pct));
    
    const circumference = 339.3;
    const offset = circumference - (pct / 100) * circumference;
    return { offset, pct };
  }, [data?.machines]);

  const chartPoints = useMemo(() => {
    if (!data) return [];
    return data.chartLabels.map((label, i) => ({
      label,
      value: data.chartData[i] ?? 0,
    }));
  }, [data]);

  const yMax = useMemo(() => {
    const max = Math.max(...(data?.chartData ?? [0]), 4);
    return Math.ceil(max / 4) * 4 || 16;
  }, [data?.chartData]);

  // KPI counts: derived from every individual PRIORITY PRODUCTION row.
  // Each row's ST is computed via getStatus(row.stokJam) — never from the
  // raw status string. Safe rows and JAM=0 rows are all included.
  const counts = useMemo(() => {
    const priorities = data?.priorities ?? [];
    if (priorities.length === 0) return { critical: 0, warning: 0, safe: 0 };

    let critical = 0, warning = 0, safe = 0;
    for (const p of priorities) {
      const st = getStatus(p.stokJam);
      if (st === "critical")     critical++;
      else if (st === "warning") warning++;
      else                       safe++;
    }

    return { critical, warning, safe };
  }, [data?.priorities]);

  return (
    <div
      className="tv-page"
      data-theme={visualTheme === "dark" ? "dark" : "light"}
    >
      <div className="tv-shell">
        <header className="tv-header">
          <div className="tv-header-title">STOCK MONITORING</div>
          <div className="tv-header-time">{clock}</div>
          <div className="tv-header-right">
            {fac && (
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {fac} · Shift {shift}
              </span>
            )}
            <div className="tv-live-badge">
              <div className="tv-live-dot" />
              LIVE
            </div>
            <button
              type="button"
              className="tv-btn"
              onClick={() => document.documentElement.requestFullscreen()}
            >
              TV MODE
            </button>
          </div>
        </header>

        <main className="tv-main">
          <div className="tv-left">
            <section className="tv-top-row">
              <div className="tv-gauge-wrap">
                <svg viewBox="0 0 140 140" width="140" height="140">
                  <circle
                    cx="70"
                    cy="70"
                    r="54"
                    stroke="var(--color-bg-border)"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="70"
                    cy="70"
                    r="54"
                    stroke="var(--color-safe)"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="339.3"
                    strokeDashoffset={gaugeArc.offset}
                    strokeLinecap="round"
                    transform="rotate(-90 70 70)"
                    style={{ transition: "stroke-dashoffset 800ms ease" }}
                  />
                </svg>
                <div className="tv-gauge-text">
                  <div className="tv-gauge-val">
                    {isLoading ? "—" : `${gaugeArc.pct}%`}
                  </div>
                  <div className="tv-gauge-label">AVAILABILITY</div>
                </div>
              </div>

              <div className="tv-kpi-row">
                <div className="tv-kpi-card critical">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--color-critical)",
                      textTransform: "uppercase",
                    }}
                  >
                    Critical{" "}
                    <span style={{ color: "var(--color-critical-text)" }}>
                      &lt; 3JAM
                    </span>
                  </div>
                  <div className="tv-kpi-number">{counts.critical}</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    PARTS
                  </div>
                </div>
                <div className="tv-kpi-card warning">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--color-warning)",
                      textTransform: "uppercase",
                    }}
                  >
                    Warning{" "}
                    <span style={{ color: "var(--color-warning-text)" }}>
                      3–4JAM
                    </span>
                  </div>
                  <div className="tv-kpi-number">{counts.warning}</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    PARTS
                  </div>
                </div>
                <div className="tv-kpi-card safe">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--color-safe)",
                      textTransform: "uppercase",
                    }}
                  >
                    Safe{" "}
                    <span style={{ color: "var(--color-safe-text)" }}>
                      &gt; 4JAM
                    </span>
                  </div>
                  <div className="tv-kpi-number">{counts.safe}</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    PARTS
                  </div>
                </div>
              </div>
            </section>

            <div className="tv-section-label">Minimum Stock / Machine</div>
            {isLoading && !data ? (
              <p style={{ color: "var(--color-text-muted)", fontSize: 13 }}>
                Loading…
              </p>
            ) : (
              <MinimumStockGrid
                // Bug #1 fix: pass machines with corrected stokJam + cardStatus
                machines={fixMachineStatuses(data?.machines ?? [])}
                showPartTable
              />
            )}

            <div className="tv-section-label" style={{ marginTop: 4 }}>
              Ratio Stock Part by Part
            </div>
            <section className="tv-chart-wrap">
              {chartPoints.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartPoints}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="var(--chart-grid)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="label"
                      tick={{ fill: "var(--color-text-muted)", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      domain={[0, yMax]}
                      tick={{ fill: "var(--color-text-muted)", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                      tickCount={5}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "var(--color-bg-surface)",
                        border: "1px solid var(--color-bg-border)",
                        borderRadius: 8,
                        fontSize: 12,
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={false}
                      fill="url(#tvGradient)"
                    />
                    <defs>
                      <linearGradient id="tvGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: 13,
                    padding: 16,
                  }}
                >
                  No stock data for this factory.
                </p>
              )}
            </section>
          </div>

          <aside className="tv-right">
            <div className="tv-panel-header">
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--color-text-secondary)",
                  letterSpacing: "0.1em",
                }}
              >
                PRIORITY PRODUCTION
              </span>
              <span
                style={{
                  background: "var(--color-warning-bg)",
                  border: "1px solid var(--color-warning-dim)",
                  borderRadius: 4,
                  padding: "3px 8px",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "var(--color-warning)",
                }}
              >
                &lt; 4H
              </span>
            </div>

            {(data?.priorities?.length ?? 0) > 0 ? (
              <table className="tv-priority-table">
                <thead>
                  <tr>
                    <th>Machine</th>
                    <th>Part</th>
                    <th>PN</th>
                    <th>JAM</th>
                    <th>St</th>
                  </tr>
                </thead>
                <tbody>
                  {data!.priorities.map((p, i) => {
                    // Bug #2 fix: derive ST status from JAM value via getStatus();
                    // never use the raw p.status string from the server.
                    const rowStatus = getStatus(p.stokJam);
                    const stColor =
                      rowStatus === "critical"
                        ? "var(--color-critical)"
                        : rowStatus === "warning"
                        ? "var(--color-warning)"
                        : "var(--color-safe)";
                    // Change #2: tag safe rows; hide them when not expanded
                    const isSafeRow = rowStatus === "safe";
                    return (
                      <tr
                        key={`${p.machine}-${i}`}
                        className={isSafeRow ? "tv-row-safe" : undefined}
                        style={isSafeRow && !isExpanded ? { display: "none" } : undefined}
                      >
                        <td>{p.machine}</td>
                        <td>{p.partName}</td>
                        <td>{p.partNumber}</td>
                        <td>{p.stokJam.toFixed(1)}</td>
                        <td
                          style={{
                            color: stColor,
                            fontWeight: 700,
                            textTransform: "uppercase",
                          }}
                        >
                          {rowStatus}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="tv-empty">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-bg-border)"
                  strokeWidth="1.5"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                </svg>
                <div>No active priorities</div>
              </div>
            )}

            {/* Change #3: Show All / Show Less toggle — only toggles safe row visibility */}
            {(data?.priorities?.length ?? 0) > 0 && (
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "5px 0",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  background: "transparent",
                  border: "1px solid var(--color-bg-border)",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                {isExpanded ? "Show Less" : "Show All"}
              </button>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
}
