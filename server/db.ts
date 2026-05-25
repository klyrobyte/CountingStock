import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost", //deploy: #localhost (change all creds based on environment)
  port: Number(process.env.DB_PORT) || 3306, //deploy: #port
  user: process.env.DB_USER || "root", //deploy: #user
  password: process.env.DB_PASSWORD || "", //deploy: #password
  database: process.env.DB_NAME || "pixel_scan_dashboard", //deploy: #database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
