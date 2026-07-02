import { Request, Response, NextFunction } from "express";
import cors from "cors";

// ── CORS - restrict to known origins ──────────────────────────────────────────
// In production set ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
// In development defaults to localhost Vite ports.
const rawOrigins = process.env.ALLOWED_ORIGINS || "";
const allowedOrigins: string[] = rawOrigins
  ? rawOrigins.split(",").map((o) => o.trim()).filter(Boolean)
  : [
    "http://localhost:5173",
    "http://localhost:4173",
    "http://localhost:3000",
    "http://localhost:8080",   // Vite dev server (current port)
    "http://127.0.0.1:5173",
    "http://127.0.0.1:8080",
    "http://172.19.82.34:3000", // this for prevent cors blocked on production change with subdomain if you have it yah 
    "http://172.19.82.34:3001",
    "http://172.19.82.34:8080",
    "http://172.19.82.34:5173",
    "http://172.19.82.34:4173",
    //this section are for local development, you should add port 3000,3001,8080,5173,4173,...
    //
    "http://192.168.31.152:5173",
    "http://192.168.31.152:3001",
    "http://192.168.31.152:3000",
    "http://192.168.31.152:4001",
    "http://192.168.31.152:8080",
    "http://counting-stock.sugity.co.id",
  ];

export const configuredCors = cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, same-origin server calls)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`CORS: Origin ${origin} not allowed`));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-internal-key"],
  credentials: true,
  optionsSuccessStatus: 200,
});

// ── Security headers middleware ───────────────────────────────────────────────
// Applied globally - does not touch any route logic.
// Adds OWASP-recommended HTTP security headers to every response.
export function securityHeaders(req: Request, res: Response, next: NextFunction) {
  // Prevent MIME-type sniffing
  res.setHeader("X-Content-Type-Options", "nosniff");

  // Prevent clickjacking
  res.setHeader("X-Frame-Options", "DENY");

  // Force HTTPS in production (browsers will refuse HTTP for 1 year after first visit)
  if (process.env.NODE_ENV === "production") {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }

  // Limit referer information leakage
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  // Disable browser features not needed by this API
  res.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=()");

  // Content Security Policy - strict for API-only responses
  // Allows nothing (API returns JSON, not HTML) except self-originated scripts
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; frame-ancestors 'none';"
  );

  // Remove "X-Powered-By: Express" fingerprint (Express sets it by default)
  res.removeHeader("X-Powered-By");

  next();
}
