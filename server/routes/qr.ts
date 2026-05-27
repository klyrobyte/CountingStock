import { Router } from "express";
import jwt from "jsonwebtoken";
import QRCode from "qrcode";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import { syncStockAnalyticsOnScan } from "../lib/stockAnalyticsService.js";

const router = Router();

// ─── In-memory session cache (replaces Redis) ───────────────────────────────
// batchId → { metadata, scannedInAt }
const sessionCache = new Map<string, { metadata: Record<string, unknown>; scannedInAt: Date }>();

const SECRET_KEY = process.env.JWT_SECRET || "pixel-scan-secret-key-2026"; //change with sha1 encrypt
const BASE_URL = process.env.API_BASE_URL || "http://localhost:3001"; //Deploy: change with domain without ports 

// ─── Helper: next sequential QR ID ───────────────────────────────────────────
async function nextQrId(): Promise<string> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT MAX(CAST(SUBSTRING(qr_id, 4) AS UNSIGNED)) AS max_num FROM qr_codes"
  );
  const maxNum = rows[0]?.max_num ?? 1000;
  return `QR-${Number(maxNum) + 1}`;
}

// ─── Helper: next sequential Task ID ─────────────────────────────────────────
async function nextTaskId(): Promise<string> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT MAX(CAST(SUBSTRING(task_id, 3) AS UNSIGNED)) AS max_num FROM tasks"
  );
  const maxNum = rows[0]?.max_num ?? 1000;
  return `T-${Number(maxNum) + 1}`;
}

// ─── Helper: update stock after a scan ───────────────────────────────────────
async function updateStock(
  batchId: string,
  action: "SCAN_IN" | "SCAN_OUT",
  unitValue: number
): Promise<void> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT id, current_stock, unit_value FROM stock WHERE batch_id = ?",
    [batchId]
  );
  if (rows.length === 0) return; // no stock row — skip (seed data doesn't have stock rows)

  const currentStock = Number(rows[0].current_stock);
  const uv = Number(rows[0].unit_value);

  let newStock: number;
  let trend: "up" | "down";

  if (action === "SCAN_IN") {
    newStock = currentStock + unitValue;
    trend = "up";
  } else {
    // Caller already checked stock > 0 before calling this — just subtract
    newStock = Math.max(0, currentStock - unitValue);
    trend = newStock === 0 ? "down" : "down";
  }

  const percentage = uv > 0 ? Math.min(100, parseFloat(((newStock / uv) * 100).toFixed(2))) : 0;

  await pool.query(
    "UPDATE stock SET current_stock = ?, trend = ?, percentage = ? WHERE batch_id = ?",
    [newStock, trend, percentage, batchId]
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// [1] GET /api/qr — list all QR codes
// ═══════════════════════════════════════════════════════════════════════════
router.get("/", async (req, res) => {
  try {
    const search = (req.query.search as string) || "";
    let query = "SELECT * FROM qr_codes";
    const params: string[] = [];

    if (search) {
      query += " WHERE part_name LIKE ? OR qr_id LIKE ?";
      params.push(`%${search}%`, `%${search}%`);
    }

    query += " ORDER BY created_at DESC";

    const [rows] = await pool.query<RowDataPacket[]>(query, params);
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [2] POST /api/qr/generate — create a new QR code with JWT token
// Body: { partName, factoryOrigin, value }
// Also inserts a row into the stock table with current_stock = 0
// ═══════════════════════════════════════════════════════════════════════════
router.post("/generate", async (req, res) => {
  try {
    const { partName, factoryOrigin, value, machineOrigin } = req.body;

    if (!partName || !factoryOrigin || value === undefined) {
      return res.status(400).json({
        success: false,
        error: "Butuh fields terisi: partName, factoryOrigin, value",
      });
    }

    const batchId = `BATCH-${Date.now()}`;
    const qrId = await nextQrId();
    const unitValue = Number(value);

    // Sign JWT token (no expiry — static QR principle)
    const token = jwt.sign(
      { batchId, partName, factoryOrigin, value: unitValue, machineOrigin: machineOrigin ?? "" },
      SECRET_KEY
    );

    // QR image points to /api/qr/info?token=... so any scanner opens it
    const qrContentUrl = `${BASE_URL}/api/qr/info?token=${token}`;

    // Generate QR code as base64 PNG
    const qrImageBase64 = await QRCode.toDataURL(qrContentUrl, {
      width: 400,
      margin: 2,
      color: { dark: "#000000", light: "#ffffff" },
    });

    // Save to qr_codes
    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO qr_codes (qr_id, batch_id, part_name, factory, material, qr_value, units, token, qr_image_base64, status)
       VALUES (?, ?, ?, ?, '', ?, ?, ?, ?, 'out')`,
      [qrId, batchId, partName, factoryOrigin, String(unitValue), unitValue, token, qrImageBase64]
    );

    // ── Save to stock with current_stock = 0 (starts empty) ──────────────────
    await pool.query(
      `INSERT INTO stock (batch_id, qr_id, part_name, factory, unit_value, current_stock, trend, percentage)
       VALUES (?, ?, ?, ?, ?, 0, 'none', 0.00)`,
      [batchId, qrId, partName, factoryOrigin, unitValue]
    );

    // Log task
    const taskId = await nextTaskId();
    await pool.query(
      "INSERT INTO tasks (task_id, title, type, status, user) VALUES (?, ?, 'QR Created', 'completed', 'System')",
      [taskId, `QR for ${partName} (×${unitValue})`]
    );

    const [newRow] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM qr_codes WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json({
      success: true,
      message: "QR Code berhasil dibuat",
      data: {
        batchId,
        qrId,
        qrContentUrl,
        qrImageBase64,
        partName,
        factoryOrigin,
        value: unitValue,
        status: "out",
        row: newRow[0],
      },
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [3] GET /api/qr/info?token=... — show QR info and current status
// ═══════════════════════════════════════════════════════════════════════════
router.get("/info", (req, res) => {
  try {
    const { token } = req.query as { token: string };

    if (!token) {
      return res.status(400).json({ success: false, error: "Hmmm... Token hilang nih" });
    }

    const decoded = jwt.verify(token, SECRET_KEY) as {
      batchId: string;
      partName: string;
      factoryOrigin: string;
      value: number;
    };

    const { batchId, partName, factoryOrigin, value } = decoded;
    const isIn = sessionCache.has(batchId);
    const currentStatus = isIn ? "in" : "out";
    const nextAction = isIn ? "SCAN_OUT" : "SCAN_IN";

    res.json({
      success: true,
      data: {
        batchId,
        partName,
        factoryOrigin,
        value,
        currentStatus,
        nextAction,
        message: isIn
          ? `${partName} is currently IN (active). Scanning will mark it OUT.`
          : `${partName} is currently OUT (idle). Scanning will mark it IN.`,
        token,
      },
    });
  } catch (err: unknown) {
    res.status(401).json({ success: false, error: "Invalid or tampered QR token" });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [4] POST /api/qr/process — toggle SCAN IN / SCAN OUT
// Body: { token, forceAction? }
//   forceAction: "SCAN_IN" | "SCAN_OUT" | undefined
//   - undefined → auto-toggle (original behavior, untouched)
//   - "SCAN_IN"  → always mark IN regardless of current state
//   - "SCAN_OUT" → always mark OUT (blocked if current_stock = 0)
// ═══════════════════════════════════════════════════════════════════════════
router.post("/process", async (req, res) => {
  try {
    const { token, forceAction, partstats = "reguler" } = req.body as {
      token: string;
      forceAction?: "SCAN_IN" | "SCAN_OUT";
      partstats?: "reguler" | "bcp";
    };

    if (!token) {
      return res.status(400).json({ success: false, error: "Token required" });
    }

    const decoded = jwt.verify(token, SECRET_KEY) as {
      batchId: string;
      partName: string;
      factoryOrigin: string;
      value: number;
    };

    const { batchId, partName, factoryOrigin, value } = decoded;

    // ── QR Privilege Validation (NEW — do not modify code below this block) ───
    // Only applies to requests from station devices (JWT payload has device_id).
    // Logic:
    //   - No privilege rows for this station → open access, continue normally.
    //   - Has privilege rows → restricted; reject if this QR is not in the list.
    const requestUser = req.user as
      | { device_id?: number; type?: string; username?: string }
      | undefined;
    if (requestUser?.type === "station" && requestUser?.device_id) {
      const deviceId = requestUser.device_id;

      // Count privilege rows for this station (indexed query, O(1) with idx_station_id)
      const [countRows] = await pool.query<RowDataPacket[]>(
        "SELECT COUNT(*) as cnt FROM station_qr_privileges WHERE station_id = ?",
        [deviceId]
      );
      const totalPrivileges = Number(countRows[0]?.cnt ?? 0);

      // If station is in restricted mode, validate this specific QR
      if (totalPrivileges > 0) {
        // Look up the integer PK of this QR from batch_id
        const [qrLookup] = await pool.query<RowDataPacket[]>(
          "SELECT id FROM qr_codes WHERE batch_id = ? LIMIT 1",
          [batchId]
        );

        if (qrLookup.length > 0) {
          const qrDbId = qrLookup[0].id;
          const [allowedRows] = await pool.query<RowDataPacket[]>(
            "SELECT id FROM station_qr_privileges WHERE station_id = ? AND qr_id = ? LIMIT 1",
            [deviceId, qrDbId]
          );

          if (allowedRows.length === 0) {
            return res.status(403).json({
              success: false,
              error: "QR_NOT_ALLOWED",
            });
          }
        }
        // If QR not found in DB, allow the existing error handling to deal with it
      }
    }
    // ── End of Privilege Validation ───────────────────────────────────────────

    let action: "SCAN_IN" | "SCAN_OUT";
    let newStatus: "in" | "out";
    let message: string;

    if (forceAction === "SCAN_IN") {
      // ── Force IN: always mark IN ───────────────────────────────────────────
      sessionCache.set(batchId, {
        metadata: { batchId, partName, factoryOrigin, value },
        scannedInAt: new Date(),
      });
      action = "SCAN_IN";
      newStatus = "in";
      message = `${partName} Berhasil di SCAN IN (${value} unit).`;

    } else if (forceAction === "SCAN_OUT") {
      // ── Force OUT: blocked if stock = 0 ───────────────────────────────────
      // Check stock first
      const [stockRows] = await pool.query<RowDataPacket[]>(
        "SELECT current_stock FROM stock WHERE batch_id = ?",
        [batchId]
      );
      const currentStock = stockRows.length > 0 ? Number(stockRows[0].current_stock) : null;

      if (currentStock !== null && currentStock === 0) {
        return res.status(409).json({
          success: false,
          error: `Tidak bisa SCAN OUT — stok ${partName} sudah 0 unit.`,
        });
      }

      sessionCache.delete(batchId);
      action = "SCAN_OUT";
      newStatus = "out";
      message = `${partName} Berhasil di SCAN OUT (${value} unit).`;

    } else {
      // ── AUTO-TOGGLE (original logic — do not modify) ───────────────────────
      if (sessionCache.has(batchId)) {
        // Check stock before allowing OUT
        const [stockRows] = await pool.query<RowDataPacket[]>(
          "SELECT current_stock FROM stock WHERE batch_id = ?",
          [batchId]
        );
        const currentStock = stockRows.length > 0 ? Number(stockRows[0].current_stock) : null;

        if (currentStock !== null && currentStock === 0) {
          return res.status(409).json({
            success: false,
            error: `Tidak bisa SCAN OUT — stok ${partName} sudah 0 unit.`,
          });
        }

        // Currently IN → toggle to OUT (do not delete this shi, it's the fisrt prototype code that i build on the api, just make it unvisible do not overwrite or remove or else i'll under yo bed and slime yo shi ✌️ )
        sessionCache.delete(batchId);
        action = "SCAN_OUT";
        newStatus = "out";
        message = `${partName} sejumlah ${value} unit berhasil di SCAN OUT.`;
      } else {
        // Currently OUT → toggle to IN
        sessionCache.set(batchId, {
          metadata: { batchId, partName, factoryOrigin, value },
          scannedInAt: new Date(),
        });
        action = "SCAN_IN";
        newStatus = "in";
        message = `${partName} sejumlah ${value} unit masuk proses (SCAN IN).`;
      }
    }

    // Get matching qr_id from DB for record-keeping
    const [qrRows] = await pool.query<RowDataPacket[]>(
      "SELECT qr_id FROM qr_codes WHERE batch_id = ? LIMIT 1",
      [batchId]
    );
    const qrId = qrRows.length > 0 ? qrRows[0].qr_id : batchId;

    // Update qr_codes status in DB
    await pool.query("UPDATE qr_codes SET status = ? WHERE batch_id = ?", [newStatus, batchId]);

    // ── Update stock table ────────────────────────────────────────────────────
    await updateStock(batchId, action, value);

    const scannerUsername =
      requestUser?.username?.trim() ||
      (requestUser?.type === "station" ? "Scanner" : "unknown");

    await syncStockAnalyticsOnScan(partName, scannerUsername, batchId);

    // Log scan record
    await pool.query(
      "INSERT INTO scan_records (batch_id, qr_id, label, factory, action, scanned_by, partstats) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [batchId, qrId, partName, factoryOrigin, action, scannerUsername, partstats]
    );

    // Log task
    const taskId = await nextTaskId();
    const taskType = action === "SCAN_IN" ? "Scan In" : "Scan Out";
    await pool.query(
      "INSERT INTO tasks (task_id, title, type, status, user) VALUES (?, ?, ?, 'completed', ?)",
      [
        taskId,
        `${action === "SCAN_IN" ? "IN" : "OUT"}: ${partName} (×${value})`,
        taskType,
        scannerUsername,
      ]
    );

    res.json({
      success: true,
      data: {
        action,
        newStatus,
        message,
        batchId,
        partName,
        factoryOrigin,
        value,
      },
    });
  } catch (err: unknown) {
    if ((err as Error).name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, error: "Token QR Manipulasi / Invalid" });
    }
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [5] GET /api/qr/history — all scan events for monitoring
// ═══════════════════════════════════════════════════════════════════════════
router.get("/history", async (_req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT id, batch_id, qr_id, label, factory, action, scanned_by, created_at
       FROM scan_records
       ORDER BY created_at DESC
       LIMIT 100`
    );
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [6] GET /api/qr/stock — all stock rows with live data
// ═══════════════════════════════════════════════════════════════════════════
router.get("/stock", async (req, res) => {
  try {
    const search = (req.query.search as string) || "";
    const factory = (req.query.factory as string) || "";

    let query = "SELECT * FROM stock WHERE 1=1";
    const params: string[] = [];

    if (search) {
      query += " AND (part_name LIKE ? OR qr_id LIKE ?)";
      params.push(`%${search}%`, `%${search}%`);
    }
    if (factory && factory !== "All") {
      query += " AND factory = ?";
      params.push(factory);
    }

    query += " ORDER BY updated_at DESC";

    const [rows] = await pool.query<RowDataPacket[]>(query, params);
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [7] GET /api/qr/stock/stats — summary stats for the stock dashboard
// ═══════════════════════════════════════════════════════════════════════════
router.get("/stock/stats", async (_req, res) => {
  try {
    const [totalRow] = await pool.query<RowDataPacket[]>(
      "SELECT SUM(current_stock) as totalUnits, COUNT(*) as skuCount FROM stock"
    );
    const [emptyRow] = await pool.query<RowDataPacket[]>(
      "SELECT COUNT(*) as emptyCount FROM stock WHERE current_stock = 0 AND trend != 'none'"
    );
    res.json({
      success: true,
      data: {
        totalUnits: totalRow[0]?.totalUnits ?? 0,
        skuCount: totalRow[0]?.skuCount ?? 0,
        emptyStock: emptyRow[0]?.emptyCount ?? 0,
      },
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [8] GET /api/qr/stock/factories — distinct factories for filter dropdown
// ═══════════════════════════════════════════════════════════════════════════
router.get("/stock/factories", async (_req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT DISTINCT factory FROM stock ORDER BY factory"
    );
    res.json({ success: true, data: rows.map((r) => r.factory) });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [9] DELETE /api/qr/:id — Delete a QR code
// ═══════════════════════════════════════════════════════════════════════════
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if the QR has associated stock and delete it if current_stock == 0 or ignore if it has stock?
    // The prompt says just "delete qr". Let's just delete the qr_codes and stock rows for safety.
    const [qrRows] = await pool.query<RowDataPacket[]>("SELECT batch_id FROM qr_codes WHERE id = ?", [id]);
    
    if (qrRows.length > 0) {
      const batchId = qrRows[0].batch_id;
      // Delete from stock and scan_records and tasks? Let's just delete from qr_codes for now, cascading might be needed or we just delete it from qr_codes table.
      await pool.query("DELETE FROM qr_codes WHERE id = ?", [id]);
      await pool.query("DELETE FROM stock WHERE batch_id = ?", [batchId]);
    } else {
      await pool.query("DELETE FROM qr_codes WHERE id = ?", [id]);
    }

    res.json({ success: true, message: "QR Code berhasil dihapus" });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
