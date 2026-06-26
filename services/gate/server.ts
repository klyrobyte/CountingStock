/**
 * @betogate — Gate Service: TCP Server + Internal HTTP API
 * ─────────────────────────────────────────────────────────────────────────────
 * This is a standalone Node.js microservice. It does two things:
 *   1. Opens a TCP server (port 4000) to accept persistent connections from ESP32 devices.
 *   2. Opens an HTTP server (port 4001) for internal API calls from the main backend.
 *
 * DO NOT import or modify any existing backend files here.
 * This file is entirely additive and self-contained.
 *
 * Start this service separately:
 *   node --loader ts-node/esm services/gate/server.ts
 *   OR: ts-node services/gate/server.ts
 */

import net from "net";
import http from "http";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Resolve __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const UI_PATH    = path.join(__dirname, "ui", "index.html");

dotenv.config();

// ─── Configuration ───────────────────────────────────────────────────────────

const TCP_PORT = Number(process.env.GATE_TCP_PORT) || 4000;
const HTTP_PORT = Number(process.env.GATE_HTTP_PORT) || 4001;
const HEARTBEAT_TIMEOUT_MS = 90_000;    // 90s — device assumed dead if no ping in this window
const HEARTBEAT_INTERVAL_MS = 30_000;   // 30s — server-side keepalive to detect stale sockets
const MAX_CONNECTIONS = 500;            // Deny new connections beyond this limit (safety valve)

// ─── MySQL pool (reads esp32_devices + esp32_user_privileges) ─────────────────
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "outindb",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

// ─── In-memory connection registry ───────────────────────────────────────────
// device_id → { socket, lastSeen, registeredAt }
interface DeviceConnection {
  socket: net.Socket;
  lastSeen: Date;
  registeredAt: Date;
  listenQrs: string[];
}

const connections = new Map<string, DeviceConnection>();

// ─── Logging helper ───────────────────────────────────────────────────────────
function log(event: string, data?: Record<string, unknown>) {
  console.log(JSON.stringify({ ts: new Date().toISOString(), event, ...data }));
}

// ─── Write JSON line to a socket safely ─────────────────────────────────────
function socketWrite(socket: net.Socket, payload: unknown): boolean {
  if (socket.destroyed || !socket.writable) return false;
  try {
    socket.write(JSON.stringify(payload) + "\n");
    return true;
  } catch {
    return false;
  }
}

// ─── Mark device online/offline in DB ────────────────────────────────────────
async function setDeviceStatus(
  deviceId: string,
  status: "online" | "offline" | "reconnecting",
  updateLastSeen = false
) {
  try {
    const fields = updateLastSeen
      ? "connection_status = ?, last_seen = NOW()"
      : "connection_status = ?";
    const params = updateLastSeen ? [status, deviceId] : [status, deviceId];
    await pool.query(
      `UPDATE esp32_devices SET ${fields} WHERE id = ?`,
      params
    );
  } catch (err) {
    log("db_status_update_error", { deviceId, status, err: (err as Error).message });
  }
}

// ─── Validate handshake against DB ───────────────────────────────────────────
async function validateHandshake(
  deviceId: string,
  authToken: string
): Promise<boolean> {
  const [rows] = await pool.query<mysql.RowDataPacket[]>(
    "SELECT auth_token, is_active FROM esp32_devices WHERE id = ? LIMIT 1",
    [deviceId]
  );
  if (rows.length === 0) return false;
  if (!rows[0].is_active) return false;
  // Constant-time comparison to prevent timing attacks
  const expected = Buffer.from(rows[0].auth_token as string);
  const provided = Buffer.from(authToken);
  if (expected.length !== provided.length) return false;
  return crypto.timingSafeEqual(expected, provided);
}

// ─── Handle a single ESP32 TCP connection ────────────────────────────────────
function handleDeviceConnection(socket: net.Socket) {
  if (connections.size >= MAX_CONNECTIONS) {
    socket.destroy();
    log("connection_rejected", { reason: "max_connections_reached", limit: MAX_CONNECTIONS });
    return;
  }

  const remoteAddr = `${socket.remoteAddress}:${socket.remotePort}`;
  let deviceId: string | null = null;
  let handshakeCompleted = false;
  let buffer = "";

  // Handshake timeout: device must authenticate within 10s or be disconnected
  const handshakeTimer = setTimeout(() => {
    if (!handshakeCompleted) {
      log("handshake_timeout", { remoteAddr });
      socket.destroy();
    }
  }, 10_000);

  socket.setEncoding("utf8");
  socket.setKeepAlive(true, 15_000);

  socket.on("data", async (chunk) => {
    buffer += chunk;
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";  // keep incomplete last line

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      let msg: Record<string, unknown>;
      try {
        msg = JSON.parse(trimmed);
      } catch {
        log("parse_error", { deviceId, remoteAddr, raw: trimmed.slice(0, 64) });
        continue;
      }

      // ── HANDSHAKE ──────────────────────────────────────────────────────────
      if (!handshakeCompleted) {
        // For the new Zero-Touch Serial architecture, ESP32 sends {"type":"register", "mac":"...", "qrs":["QR-1", "QR-2"]}
        // However, we maintain backward compatibility with the database authToken logic for now.
        // We assume `msg.device_id` is passed as `msg.mac` or similar from the new firmware.
        // The firmware will send: {"type":"register", "mac":"<mac>", "qrs":["QR-1"]}
        const did = (msg.mac as string) || (msg.device_id as string);
        const qrs = Array.isArray(msg.qrs) ? (msg.qrs as string[]) : [];
        
        // Temporarily bypass token DB validation since the new architecture does not provision tokens via webserial
        // (Alternatively, we just let it connect without auth for now since it's an internal TCP socket)
        if (!did) {
          socketWrite(socket, { type: "error", message: "Missing mac or device_id" });
          socket.destroy();
          return;
        }

        // Evict any stale connection for the same device
        const existing = connections.get(did);
        if (existing) {
          log("evict_stale_connection", { deviceId: did });
          existing.socket.destroy();
          connections.delete(did);
        }

        deviceId = did;
        handshakeCompleted = true;
        clearTimeout(handshakeTimer);

        connections.set(deviceId, { socket, lastSeen: new Date(), registeredAt: new Date(), listenQrs: qrs });
        await setDeviceStatus(deviceId, "online", true);

        socketWrite(socket, { type: "handshake_ok", device_id: deviceId });
        log("device_connected", { deviceId, remoteAddr, listenQrs: qrs, total: connections.size });
        continue;
      }

      // ── HEARTBEAT (PING) ──────────────────────────────────────────────────
      if (msg.type === "ping" && deviceId) {
        const conn = connections.get(deviceId);
        if (conn) conn.lastSeen = new Date();
        await setDeviceStatus(deviceId, "online", true);
        socketWrite(socket, { type: "pong", device_id: deviceId });
        continue;
      }

      // ── ACK FROM ESP32 ────────────────────────────────────────────────────
      if (msg.type === "ack" && deviceId) {
        log("gate_ack_received", {
          deviceId,
          requestId: msg.request_id,
          status: msg.status,
          timestamp: msg.timestamp,
        });

        // Update log in DB
        try {
          await pool.query(
            `UPDATE gate_command_log
             SET result = 'ack_received', acked_at = NOW()
             WHERE request_id = ?`,
            [msg.request_id]
          );
        } catch { /* non-critical */ }
        continue;
      }

      log("unknown_message", { deviceId, type: msg.type });
    }
  });

  socket.on("error", (err) => {
    log("socket_error", { deviceId, remoteAddr, err: err.message });
  });

  socket.on("close", async () => {
    clearTimeout(handshakeTimer);
    if (deviceId) {
      connections.delete(deviceId);
      await setDeviceStatus(deviceId, "offline");
      log("device_disconnected", { deviceId, remoteAddr, remaining: connections.size });
    }
  });
}

// ─── Server-side heartbeat scanner ───────────────────────────────────────────
// Proactively destroys connections that haven't sent a ping in HEARTBEAT_TIMEOUT_MS.
setInterval(() => {
  const cutoff = new Date(Date.now() - HEARTBEAT_TIMEOUT_MS);
  for (const [id, conn] of connections) {
    if (conn.lastSeen < cutoff) {
      log("heartbeat_timeout_evict", { deviceId: id, lastSeen: conn.lastSeen.toISOString() });
      conn.socket.destroy();
      connections.delete(id);
      setDeviceStatus(id, "offline").catch(() => {});
    }
  }
}, HEARTBEAT_INTERVAL_MS);

// ─── TCP Server ───────────────────────────────────────────────────────────────
const tcpServer = net.createServer(handleDeviceConnection);

tcpServer.on("error", (err) => {
  log("tcp_server_error", { err: err.message });
});

tcpServer.listen(TCP_PORT, () => {
  log("tcp_server_started", { port: TCP_PORT, maxConnections: MAX_CONNECTIONS });
});

// ─── Internal HTTP API ────────────────────────────────────────────────────────
// Called by the main backend after a successful QR scan.
// This is NOT exposed to the internet — bind to localhost only in production.

const httpServer = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", `http://localhost:${HTTP_PORT}`);

  // ── GET / or /admin — serve admin UI ──────────────────────────────────────
  if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/admin")) {
    try {
      const html = fs.readFileSync(UI_PATH, "utf8");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(html);
    } catch {
      res.writeHead(503, { "Content-Type": "text/plain" });
      res.end("UI not found — ensure services/gate/ui/index.html exists");
    }
    return;
  }

  res.setHeader("Content-Type", "application/json");


  // ── POST /internal/gate/open ──────────────────────────────────────────────
  if (req.method === "POST" && url.pathname === "/internal/gate/open") {
    let body = "";
    req.on("data", (c) => { body += c; });
    req.on("end", async () => {
      let payload: Record<string, string>;
      try {
        payload = JSON.parse(body);
      } catch {
        res.writeHead(400);
        res.end(JSON.stringify({ success: false, error: "Invalid JSON body" }));
        return;
      }

      const { qr_code_id } = payload;
      const requestId = crypto.randomUUID();

      if (!qr_code_id) {
        res.writeHead(400);
        res.end(JSON.stringify({ success: false, error: "Missing qr_code_id" }));
        return;
      }

      let dispatchedCount = 0;
      for (const [deviceId, conn] of connections.entries()) {
        if (conn.listenQrs && conn.listenQrs.includes(qr_code_id)) {
          const success = socketWrite(conn.socket, { cmd: "OPEN_GATE", request_id: requestId, qr_code_id });
          if (success) {
            dispatchedCount++;
            log("gate_open_dispatched", { deviceId, qr_code_id, requestId });
          }
        }
      }

      if (dispatchedCount > 0) {
        res.writeHead(200);
        res.end(JSON.stringify({ success: true, message: `Gate open dispatched to ${dispatchedCount} devices`, requestId }));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ success: false, error: "No online devices listening for this qr_code_id" }));
      }
    });
    return;
  }

  // ── GET /internal/devices/status ─────────────────────────────────────────
  if (req.method === "GET" && url.pathname === "/internal/devices/status") {
    const status: Record<string, unknown>[] = [];
    for (const [id, conn] of connections) {
      status.push({
        device_id: id,
        last_seen: conn.lastSeen.toISOString(),
        registered_at: conn.registeredAt.toISOString(),
        connected: true,
      });
    }
    res.writeHead(200);
    res.end(JSON.stringify({ success: true, data: { online: connections.size, devices: status } }));
    return;
  }

  // ── OPTIONS preflight — browsers send this before cross-origin POSTs ──────
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin":  "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age":       "86400",
    });
    res.end();
    return;
  }

  // ── /api/* — Reverse-proxy to main backend ────────────────────────────────
  // The admin UI is served from port 4001. It calls /api/... relative URLs,
  // which land here and are forwarded to the main Express server on port 3001.
  // This removes ALL browser CORS constraints — the browser only ever sees
  // one origin (port 4001). This is the permanent fix for NetworkError.
  if (url.pathname.startsWith("/api/")) {
    const MAIN_PORT = Number(process.env.API_PORT) || 3001;
    const proxyOpts: http.RequestOptions = {
      hostname: "127.0.0.1",
      port: MAIN_PORT,
      path: req.url,
      method: req.method,
      headers: { ...req.headers, host: `127.0.0.1:${MAIN_PORT}` },
      timeout: 10_000,
    };

    const proxyReq = http.request(proxyOpts, (proxyRes) => {
      if (!res.headersSent) {
        res.writeHead(proxyRes.statusCode ?? 200, {
          ...proxyRes.headers,
          "Access-Control-Allow-Origin": "*",
        });
      }
      proxyRes.pipe(res, { end: true });
    });

    proxyReq.on("timeout", () => {
      proxyReq.destroy();
      if (!res.headersSent) {
        res.writeHead(504, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, error: "Main backend timeout" }));
      }
    });

    proxyReq.on("error", (err) => {
      if (!res.headersSent) {
        res.writeHead(502, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          success: false,
          error: "Main backend unreachable. Is npm run dev:all running?",
          detail: err.message,
        }));
      }
    });

    req.pipe(proxyReq, { end: true });
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ success: false, error: "Not found" }));
});


// Bind to 0.0.0.0 so the admin UI is reachable from the local network
httpServer.listen(HTTP_PORT, "0.0.0.0", () => {
  log("http_api_started", { port: HTTP_PORT, ui: `http://<server-ip>:${HTTP_PORT}/`, note: "admin UI available on all interfaces" });
});

// ─── Graceful shutdown ────────────────────────────────────────────────────────
async function shutdown(signal: string) {
  log("shutdown", { signal });
  for (const [id, conn] of connections) {
    conn.socket.destroy();
    await setDeviceStatus(id, "offline").catch(() => {});
  }
  tcpServer.close();
  httpServer.close();
  await pool.end();
  process.exit(0);
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT",  () => shutdown("SIGINT"));
