import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

// GET /api/shikake — list with master part info
router.get("/", async (_req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT s.id, s.master_part_id, s.shikake_value, s.created_at, s.updated_at,
              mp.part_number, mp.part_name, mp.model, mp.factory_origin
       FROM shikake_settings s
       LEFT JOIN master_parts mp ON mp.id = s.master_part_id
       ORDER BY mp.part_number ASC`
    );
    res.json({
      success: true,
      data: rows.map((r) => ({
        id: r.id,
        masterPartId: r.master_part_id,
        shikakeValue: Number(r.shikake_value),
        partNumber: r.part_number,
        partName: r.part_name,
        model: r.model,
        factoryOrigin: r.factory_origin,
        createdAt: r.created_at,
        updatedAt: r.updated_at,
      })),
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// GET /api/shikake/parts — master parts without shikake (for add dropdown)
router.get("/parts", async (_req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT mp.id, mp.part_number, mp.part_name, mp.model, mp.factory_origin
       FROM master_parts mp
       WHERE mp.status = 'active'
       ORDER BY mp.part_number ASC`
    );
    res.json({
      success: true,
      data: rows.map((r) => ({
        id: r.id,
        partNumber: r.part_number,
        partName: r.part_name,
        model: r.model,
        factoryOrigin: r.factory_origin,
      })),
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// POST /api/shikake
router.post("/", async (req, res) => {
  try {
    const { masterPartId, shikakeValue } = req.body;
    if (!masterPartId || shikakeValue == null) {
      return res.status(400).json({
        success: false,
        error: "Master part dan nilai shikake wajib diisi.",
      });
    }

    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO shikake_settings (master_part_id, shikake_value) VALUES (?, ?)",
      [masterPartId, Number(shikakeValue)]
    );

    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT s.id, s.master_part_id, s.shikake_value, mp.part_number, mp.part_name
       FROM shikake_settings s
       LEFT JOIN master_parts mp ON mp.id = s.master_part_id
       WHERE s.id = ?`,
      [result.insertId]
    );

    res.status(201).json({ success: true, data: rows[0] });
  } catch (err: unknown) {
    const msg = (err as Error).message || "";
    if (msg.includes("Duplicate")) {
      return res.status(409).json({
        success: false,
        error: "Shikake untuk part ini sudah ada.",
      });
    }
    res.status(500).json({ success: false, error: msg });
  }
});

// PUT /api/shikake/:id
router.put("/:id", async (req, res) => {
  try {
    const { shikakeValue } = req.body;
    await pool.query(
      "UPDATE shikake_settings SET shikake_value = ? WHERE id = ?",
      [Number(shikakeValue), req.params.id]
    );
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT s.id, s.master_part_id, s.shikake_value, mp.part_number, mp.part_name
       FROM shikake_settings s
       LEFT JOIN master_parts mp ON mp.id = s.master_part_id
       WHERE s.id = ?`,
      [req.params.id]
    );
    res.json({ success: true, data: rows[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// DELETE /api/shikake/:id
router.delete("/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM shikake_settings WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Shikake dihapus." });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
