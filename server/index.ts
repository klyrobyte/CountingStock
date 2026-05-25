import express from "express";
import cors from "cors";
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
import shikakeRoutes from "./routes/shikake.js";
import { requireAuth } from "./middleware/authMiddleware.js";


dotenv.config();

const app = express();
const PORT = Number(process.env.API_PORT) || 3001; //Deploy: #3001 change the port based on deploy enviroment 

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Apply global auth middleware
app.use(requireAuth);


// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "Sehat Wal'afiat", creator: "di rancang oleh @RizkyDaffy", time: new Date().toISOString() });
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
app.use("/api/shikake", shikakeRoutes);


app.listen(PORT, () => {
  console.log(`🚀 API server berajalan di http://localhost:${PORT}`); //deploy: #localhost adjust with deploy inviroment 
  console.log(`   check kesehata nyah: http://localhost:${PORT}/api/health`); //deploy: #localhost
});
