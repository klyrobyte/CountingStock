import express from "express";
import dotenv from "dotenv";
// file route management, imported from ./routes 
import qrRoutes from "./routes/qr.js";
import stockRoutes from "./routes/stock.js";
import taskRoutes from "./routes/tasks.js";
import deviceRoutes from "./routes/devices.js";
import scanRoutes from "./routes/scan.js";
import masterPartsRoutes from "./routes/masterParts.js";
import mesinRoutes from "./routes/mesin.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import categoriesRoutes from "./routes/categories.js";
import modelsRoutes from "./routes/models.js";
import customersRoutes from "./routes/customers.js";
import factoriesRoutes from "./routes/factories.js";
import privilegesRoutes from "./routes/privileges.js";
import stockAnalyticsRoutes from "./routes/stockAnalytics.js";
import teiteiRoutes from "./routes/teitei.js";
// ── @betogate admin routes (additive) ───────────────────────────────────
import esp32Routes from "../services/gate/routes/admin.js";
import { requireAuth } from "./middleware/authMiddleware.js";
// ── Additive security layer ─────────────────────────────────────────────────
import { configuredCors, securityHeaders } from "./middleware/securityMiddleware.js";
import { loginRateLimiter } from "./middleware/rateLimiter.js";
import { requestLogger } from "./middleware/logger.js";
import { notFoundHandler, globalErrorHandler } from "./middleware/errorHandler.js";
import pool from "./db.js";


dotenv.config();

const app = express();
const PORT = Number(process.env.API_PORT) || 3001; //Deploy: #3001 change the port based on deploy enviroment 

// Security headers must be first - sets all protective HTTP headers
app.use(securityHeaders);
// Configured CORS - replaces open cors() with env-controlled allowlist
app.use(configuredCors);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
// Structured JSON request logger
app.use(requestLogger);

// Apply global auth middleware
app.use(requireAuth);

// ── Rate limiting on login endpoints (BEFORE route handlers) ─────────────────
app.use("/api/auth/login", loginRateLimiter);
app.use("/api/devices/station-login", loginRateLimiter);


// Health check - enhanced with DB connectivity probe (additive)
app.get("/api/health", async (_req, res) => {
  let dbStatus = "ok";
  let dbLatencyMs = 0;
  try {
    const t0 = Date.now();
    await pool.query("SELECT 1");
    dbLatencyMs = Date.now() - t0;
  } catch {
    dbStatus = "error";
  }
  res.json({
    status: "Sehat Wal'afiat",
    creator: "di rancang oleh @RizkyDaffy",
    time: new Date().toISOString(),
    db: dbStatus,
    db_latency_ms: dbLatencyMs,
    uptime_s: Math.floor(process.uptime()),
  });
});

// Routes
app.use("/api/qr", qrRoutes);           //API: QR Handler
app.use("/api/stock", stockRoutes);     //API: Stock Handler
app.use("/api/tasks", taskRoutes);      //API: Task Handler
app.use("/api/devices", deviceRoutes);  //API: Device Handler
app.use("/api/scans", scanRoutes);      //API: Scan Handler
app.use("/api/master-parts", masterPartsRoutes); //API: Master Parts Handler
app.use("/api/mesin", mesinRoutes);     //API: Mesin Handler
app.use("/api/auth", authRoutes);       //API: Auth Handler
app.use("/api/users", usersRoutes);     //API: Users Handler
app.use("/api/categories", categoriesRoutes);
app.use("/api/models", modelsRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/factories", factoriesRoutes);
app.use("/api/privileges", privilegesRoutes); //API: QR Privilege Handler (internal-key protected)
app.use("/api/stock-analytics", stockAnalyticsRoutes);
app.use("/api/teitei", teiteiRoutes);
app.use("/api/esp32", esp32Routes);   // @betogate: ESP32 device management & privilege admin

// ── 404 fallthrough - must be AFTER all route handlers ───────────────────────
app.use(notFoundHandler);

// ── Global error handler - must be LAST ──────────────────────────────────────
app.use(globalErrorHandler);

// ── Graceful shutdown ─────────────────────────────────────────────────────────
// Allows in-flight requests to complete before the process exits.
// Triggered by: pm2 restart, docker stop, kubernetes rolling update, CTRL+C.
const server = app.listen(PORT, () => {
  console.log(`🚀 API server berajalan di http://localhost:${PORT}`); //deploy: #localhost adjust with deploy inviroment 
  console.log(`   check kesehata nyah: http://localhost:${PORT}/api/health`); //deploy: #localhost
});

function gracefulShutdown(signal: string) {
  console.log(JSON.stringify({ timestamp: new Date().toISOString(), event: "shutdown", signal }));
  server.close(async () => {
    try {
      await pool.end();
      console.log(JSON.stringify({ timestamp: new Date().toISOString(), event: "shutdown_complete" }));
    } catch { /* pool already closed */ }
    process.exit(0);
  });
  // Force exit after 10s if connections don't drain
  setTimeout(() => process.exit(1), 10_000).unref();
}

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));
