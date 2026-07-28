/**
 * IoT Gate State — Lightweight in-memory scan-signal store
 * ─────────────────────────────────────────────────────────────────────────────
 * Replaces the @betogate TCP dependency for the retrospective scan flow.
 * The ESP32 polls GET /iot/:mc/:qr every 500 ms.
 * When a station scan succeeds, qr.ts calls setIotScanned() directly
 * (same process — no HTTP hop needed).
 *
 * Endpoints (public — no auth, ESP32 devices cannot carry tokens):
 *   GET  /iot/:mc/:qr        → { scanned: bool, webhookPath, ts }
 *   POST /iot/:mc/:qr/reset  → { success: true, scanned: false }
 *
 * The /api/qr/process success hook calls setIotScanned() exported below.
 * ADDITIVE ONLY — no existing routes or DB schemas are touched.
 */

import { Router } from "express";
import { requireInternalKey } from "../middleware/internalKeyMiddleware.js";

const router = Router();

// ── In-memory state (lives for the lifetime of the Node process) ──────────────
interface IotEntry {
  scanned: boolean;
  ts: number;
  resetTimer?: ReturnType<typeof setTimeout>;
}
const iotMap = new Map<string, IotEntry>();
const STATE_TTL_MS = 60_000; // safety-net: auto-reset if ESP32 never pulls

/** Called by qr.ts after a successful station scan. */
export function setIotScanned(webhookPath: string): void {
  const prev = iotMap.get(webhookPath);
  if (prev?.resetTimer) clearTimeout(prev.resetTimer);

  const resetTimer = setTimeout(() => {
    const e = iotMap.get(webhookPath);
    if (e?.scanned) {
      iotMap.set(webhookPath, { scanned: false, ts: Date.now() });
      console.log(JSON.stringify({ ts: new Date().toISOString(), event: "iot_state_ttl_reset", webhookPath }));
    }
  }, STATE_TTL_MS);

  iotMap.set(webhookPath, { scanned: true, ts: Date.now(), resetTimer });
  console.log(JSON.stringify({ ts: new Date().toISOString(), event: "iot_state_set_scanned", webhookPath }));
}

/** Called by the /reset endpoint and optionally by qr.ts on explicit reset. */
export function resetIotScanned(webhookPath: string): void {
  const prev = iotMap.get(webhookPath);
  if (prev?.resetTimer) clearTimeout(prev.resetTimer);
  iotMap.set(webhookPath, { scanned: false, ts: Date.now() });
  console.log(JSON.stringify({ ts: new Date().toISOString(), event: "iot_state_reset", webhookPath }));
}

// ── Build canonical webhook path from :mc + :qr params ───────────────────────
function toPath(mc: string, qr: string): string {
  return `/webhook/${mc}/${qr}`;
}

// ── GET /iot/debug — shows all current IoT state entries ─────────────────────
// Open /iot/debug in a browser to see all states
// MUST be before /:mc/:qr to avoid Express matching "debug" as a :mc param
router.get("/debug", requireInternalKey, (_req, res) => {
  const entries: Record<string, { scanned: boolean; ts: string | null }> = {};
  for (const [key, val] of iotMap.entries()) {
    entries[key] = {
      scanned: val.scanned,
      ts: val.ts ? new Date(val.ts).toISOString() : null,
    };
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({
    totalEntries: iotMap.size,
    entries,
    note: "Open /iot/{mc}/{qr} to see what the ESP32 sees. Keys should match the ESP32's webhook_path.",
  });
});

// ── POST /iot/set/:mc/:qr — manually set scanned=true for testing ────────────
// curl -X POST /iot/set/mc2/QR-1002
router.post("/set/:mc/:qr", requireInternalKey, (req, res) => {
  const path = toPath(req.params.mc, req.params.qr);
  setIotScanned(path);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ success: true, scanned: true, webhookPath: path, note: "Manually triggered for testing" });
});

// ── GET /iot/:mc/:qr — ESP32 polls this every ~500 ms ────────────────────────
router.get("/:mc/:qr", (req, res) => {
  const path = toPath(req.params.mc, req.params.qr);
  const entry = iotMap.get(path);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({
    scanned: entry?.scanned ?? false,
    webhookPath: path,
    ts: entry?.ts ? new Date(entry.ts).toISOString() : null,
  });
});

// ── POST /iot/:mc/:qr/reset — ESP32 calls this after consuming the signal ────
router.post("/:mc/:qr/reset", (req, res) => {
  const path = toPath(req.params.mc, req.params.qr);
  resetIotScanned(path);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ success: true, scanned: false, webhookPath: path });
});

export default router;
