/**
 * @betogate — Gate Open Dispatcher (post-scan hook)
 * ─────────────────────────────────────────────────────────────────────────────
 * Call this AFTER the existing /api/qr/process success response is sent.
 * This is a fire-and-forget function: it NEVER throws, NEVER blocks, and
 * NEVER alters the scan result sent to the client.
 *
 * Usage (in qr.ts, AFTER res.json() is called):
 *   dispatchToGateService({ qr_code_id: string });       // v3 flat dispatch (kept for backward compat)
 *   triggerMachineWebhook({ machine_code, qr_code_id }); // v4 primary path
 *
 * ADDITIVE ONLY — imported from qr.ts as a side-effect hook.
 */

import http from "http";

const GATE_HTTP_PORT = Number(process.env.GATE_HTTP_PORT) || 4001;
const GATE_HOST = process.env.GATE_HOST || "127.0.0.1";
const GATE_TIMEOUT_MS = 2000; // 2s timeout — well within the ≤500ms target for local loopback



/**
 * Fire-and-forget: sends gate-open request to the gate service.
 * All outcomes (success, rejection, error, timeout) are logged internally.
 * Never throws — safe to call without await in any context.
 */
export function dispatchToGateService(params: { qr_code_id: string }): void {
  const body = JSON.stringify({
    qr_code_id: params.qr_code_id,
    timestamp: new Date().toISOString(),
  });

  const options: http.RequestOptions = {
    hostname: GATE_HOST,
    port: GATE_HTTP_PORT,
    path: "/internal/gate/open",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body),
    },
    timeout: GATE_TIMEOUT_MS,
  };

  // Fire async, do not await — non-blocking by design
  setImmediate(() => {
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (c) => { data += c; });
      res.on("end", () => {
        console.log(JSON.stringify({
          ts: new Date().toISOString(),
          event: "gate_hook_response",
          status: res.statusCode,
          ...params,
          response: (() => { try { return JSON.parse(data); } catch { return data.slice(0, 128); } })(),
        }));
      });
    });

    req.on("timeout", () => {
      console.log(JSON.stringify({
        ts: new Date().toISOString(),
        event: "gate_hook_timeout",
        ...params,
        note: "Gate service did not respond within timeout. Gate may be offline.",
      }));
      req.destroy();
    });

    req.on("error", (err) => {
      // Expected when gate service is not running — log and ignore
      console.log(JSON.stringify({
        ts: new Date().toISOString(),
        event: "gate_hook_error",
        ...params,
        err: err.message,
        note: "Gate service unavailable. Scan result was already sent to user.",
      }));
    });

    req.write(body);
    req.end();
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// v4 ADD — @machinewebhook trigger
// Routes the gate-open signal through the machine/QR-scoped webhook endpoint.
// This is the NEW primary dispatch path for provisioned ESP32 units.
//
// Resolution order (handled server-side in @betogate):
//   1. QR-scoped:    POST /webhook/{machine_code}/{qr_code_id}  ← recommended
//   2. Machine-level fallback handled on server if QR-scoped path has no socket
//
// Fire-and-forget: never throws, never blocks.
// ─────────────────────────────────────────────────────────────────────────────
export function triggerMachineWebhook(params: {
  machine_code: string;
  qr_code_id: string;
}): void {
  // Normalize: lowercase, strip dashes for path safety per spec
  const mc = params.machine_code.toLowerCase().replace(/[^a-z0-9]/g, "");
  const qr = encodeURIComponent(params.qr_code_id);

  const body = JSON.stringify({
    qr_code_id: params.qr_code_id,
    machine_code: params.machine_code,
    timestamp: new Date().toISOString(),
  });

  // Primary path: QR-scoped route (spec: recommended shape)
  const webhookPath = `/webhook/${mc}/${qr}`;

  const options: http.RequestOptions = {
    hostname: GATE_HOST,
    port: GATE_HTTP_PORT,
    path: webhookPath,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body),
    },
    timeout: GATE_TIMEOUT_MS,
  };

  // Fire async, do not await — non-blocking by design
  setImmediate(() => {
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (c) => { data += c; });
      res.on("end", () => {
        console.log(JSON.stringify({
          ts: new Date().toISOString(),
          event: "machine_webhook_response",
          webhookPath,
          status: res.statusCode,
          ...params,
          response: (() => { try { return JSON.parse(data); } catch { return data.slice(0, 128); } })(),
        }));
      });
    });

    req.on("timeout", () => {
      console.log(JSON.stringify({
        ts: new Date().toISOString(),
        event: "machine_webhook_timeout",
        webhookPath,
        ...params,
        note: "Gate service did not respond within timeout.",
      }));
      req.destroy();
    });

    req.on("error", (err) => {
      console.log(JSON.stringify({
        ts: new Date().toISOString(),
        event: "machine_webhook_error",
        webhookPath,
        ...params,
        err: err.message,
        note: "Gate service unavailable. Scan result was already sent to user.",
      }));
    });

    req.write(body);
    req.end();
  });
}
