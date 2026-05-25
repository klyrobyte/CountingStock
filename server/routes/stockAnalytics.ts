import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import {
  computeStockAnalytics,
  classifyStokJam,
} from "../lib/stockAnalyticsCalc.js";

const router = Router();

function rowToPayload(row: RowDataPacket) {
  const computed = computeStockAnalytics({
    qtyPerDay: Number(row.qty_per_day),
    stockActual: Number(row.stock_actual),
    shikake: Number(row.shikake) || 1,
    minPlaceholder: Number(row.min_val),
  });

  return {
    id: row.id,
    machine: row.machine,
    model: row.model,
    partNumber: row.part_number,
    partName: row.part_name,
    qtyPerDay: Number(row.qty_per_day),
    stockActual: Number(row.stock_actual),
    stokJam: computed.stokJam,
    judge: computed.judge,
    problem: row.problem,
    shikake: Number(row.shikake),
    qtyPerHour: computed.qtyPerHour,
    min: computed.min,
    max: computed.max,
    jamUpdate: row.jam_update,
    pic: row.pic,
    keterangan: row.keterangan,
    factory: row.factory,
  };
}

async function upsertComputedFields(id: number) {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM stock_analytics WHERE id = ?",
    [id]
  );
  if (!rows.length) return;
  const row = rows[0];
  const computed = computeStockAnalytics({
    qtyPerDay: Number(row.qty_per_day),
    stockActual: Number(row.stock_actual),
    shikake: Number(row.shikake) || 1,
    minPlaceholder: Number(row.min_val),
  });
  await pool.query(
    `UPDATE stock_analytics SET stok_jam = ?, judge = ?, qty_per_hour = ?, max_val = ?, jam_update = NOW() WHERE id = ?`,
    [computed.stokJam, computed.judge, computed.qtyPerHour, computed.max, id]
  );
}

// GET /api/stock-analytics
router.get("/", async (req, res) => {
  try {
    const factory = (req.query.factory as string) || "";
    let query = "SELECT * FROM stock_analytics WHERE 1=1";
    const params: string[] = [];
    if (factory) {
      query += " AND factory = ?";
      params.push(factory);
    }
    query += " ORDER BY machine ASC";
    const [rows] = await pool.query<RowDataPacket[]>(query, params);
    res.json({ success: true, data: rows.map(rowToPayload) });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// GET /api/stock-analytics/tv — aggregated TV dashboard payload
router.get("/tv", async (req, res) => {
  try {
    const factory = (req.query.factory as string) || "";
    const shift = (req.query.shift as string) || "";

    let mesinQuery = "SELECT * FROM mesin WHERE 1=1";
    const mesinParams: string[] = [];
    if (factory) {
      mesinQuery += " AND factory = ?";
      mesinParams.push(factory);
    }
    mesinQuery += " ORDER BY machine_code ASC";
    const [mesinRows] = await pool.query<RowDataPacket[]>(
      mesinQuery,
      mesinParams
    );

    let analyticsQuery = "SELECT * FROM stock_analytics WHERE 1=1";
    const analyticsParams: string[] = [];
    if (factory) {
      analyticsQuery += " AND factory = ?";
      analyticsParams.push(factory);
    }
    const [analyticsRows] = await pool.query<RowDataPacket[]>(
      analyticsQuery,
      analyticsParams
    );
    const analyticsByMachine = new Map<string, RowDataPacket>();
    for (const a of analyticsRows) {
      analyticsByMachine.set(String(a.machine).toUpperCase(), a);
    }

    let stockQuery = "SELECT * FROM stock WHERE 1=1";
    const stockParams: string[] = [];
    if (factory) {
      stockQuery += " AND factory = ?";
      stockParams.push(factory);
    }
    stockQuery += " ORDER BY part_name ASC";
    const [stockRows] = await pool.query<RowDataPacket[]>(
      stockQuery,
      stockParams
    );

    const machines = mesinRows.map((m) => {
      const isActive = m.status === "active";
      const analytics = analyticsByMachine.get(
        String(m.machine_code).toUpperCase()
      );
      let stokJam = 0;
      let partName = "";
      let partNumber = "";

      if (analytics) {
        const computed = computeStockAnalytics({
          qtyPerDay: Number(analytics.qty_per_day),
          stockActual: Number(analytics.stock_actual),
          shikake: Number(analytics.shikake) || 1,
          minPlaceholder: Number(analytics.min_val),
        });
        stokJam = computed.stokJam;
        partName = analytics.part_name || "";
        partNumber = analytics.part_number || "";
      }

      const cardStatus = classifyStokJam(stokJam, isActive);

      return {
        id: m.id,
        machineCode: m.machine_code,
        machineName: m.machine_name,
        status: m.status,
        isActive,
        stokJam,
        cardStatus,
        partName,
        partNumber,
      };
    });

    const activeWithStock = machines.filter((m) => m.isActive);
    const critical = activeWithStock.filter((m) => m.cardStatus === "critical").length;
    const warning = activeWithStock.filter((m) => m.cardStatus === "warning").length;
    const safe = activeWithStock.filter((m) => m.cardStatus === "safe").length;

    const gaugePercent =
      activeWithStock.length > 0
        ? Math.round((safe / activeWithStock.length) * 1000) / 10
        : 0;

    const chartLabels = stockRows.map((s) => s.part_name as string);
    const chartData = stockRows.map((s) => Number(s.current_stock ?? s.units ?? 0));

    const priorityOrder = { critical: 0, warning: 1, safe: 2, none: 3 };
    const priorities = [...machines]
      .filter((m) => m.isActive && m.cardStatus !== "safe" && m.cardStatus !== "none")
      .sort(
        (a, b) =>
          priorityOrder[a.cardStatus] - priorityOrder[b.cardStatus] ||
          a.stokJam - b.stokJam
      )
      .map((m) => ({
        machine: m.machineCode,
        partName: m.partName || "—",
        partNumber: m.partNumber || "—",
        stokJam: m.stokJam,
        status: m.cardStatus,
      }));

    res.json({
      success: true,
      data: {
        factory,
        shift,
        counts: { critical, warning, safe },
        gaugePercent,
        machines,
        chartLabels,
        chartData,
        priorities,
      },
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// POST /api/stock-analytics
router.post("/", async (req, res) => {
  try {
    const {
      machine,
      model = "",
      partNumber = "",
      partName = "",
      qtyPerDay = 0,
      stockActual = 0,
      problem = "",
      shikake = 1,
      minVal = 0,
      pic = "",
      keterangan = "",
      factory = "",
    } = req.body;

    if (!machine) {
      return res.status(400).json({ success: false, error: "Machine wajib diisi." });
    }

    const computed = computeStockAnalytics({
      qtyPerDay: Number(qtyPerDay),
      stockActual: Number(stockActual),
      shikake: Number(shikake) || 1,
      minPlaceholder: Number(minVal),
    });

    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO stock_analytics
        (machine, model, part_number, part_name, qty_per_day, stock_actual, stok_jam, judge,
         problem, shikake, qty_per_hour, min_val, max_val, jam_update, pic, keterangan, factory)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?, ?)`,
      [
        String(machine).trim().toUpperCase(),
        model,
        partNumber,
        partName,
        qtyPerDay,
        stockActual,
        computed.stokJam,
        computed.judge,
        problem,
        shikake,
        computed.qtyPerHour,
        computed.min,
        computed.max,
        pic,
        keterangan,
        factory,
      ]
    );

    const [newRow] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM stock_analytics WHERE id = ?",
      [result.insertId]
    );
    res.status(201).json({ success: true, data: rowToPayload(newRow[0]) });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// PUT /api/stock-analytics/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      machine,
      model = "",
      partNumber = "",
      partName = "",
      qtyPerDay = 0,
      stockActual = 0,
      problem = "",
      shikake = 1,
      minVal = 0,
      pic = "",
      keterangan = "",
      factory = "",
    } = req.body;

    const computed = computeStockAnalytics({
      qtyPerDay: Number(qtyPerDay),
      stockActual: Number(stockActual),
      shikake: Number(shikake) || 1,
      minPlaceholder: Number(minVal),
    });

    await pool.query(
      `UPDATE stock_analytics SET
        machine = ?, model = ?, part_number = ?, part_name = ?,
        qty_per_day = ?, stock_actual = ?, stok_jam = ?, judge = ?,
        problem = ?, shikake = ?, qty_per_hour = ?, min_val = ?, max_val = ?,
        jam_update = NOW(), pic = ?, keterangan = ?, factory = ?
       WHERE id = ?`,
      [
        String(machine).trim().toUpperCase(),
        model,
        partNumber,
        partName,
        qtyPerDay,
        stockActual,
        computed.stokJam,
        computed.judge,
        problem,
        shikake,
        computed.qtyPerHour,
        computed.min,
        computed.max,
        pic,
        keterangan,
        factory,
        id,
      ]
    );

    await upsertComputedFields(Number(id));
    const [row] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM stock_analytics WHERE id = ?",
      [id]
    );
    res.json({ success: true, data: rowToPayload(row[0]) });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// DELETE /api/stock-analytics/:id
router.delete("/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM stock_analytics WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Deleted" });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
