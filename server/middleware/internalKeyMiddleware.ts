import { Request, Response, NextFunction } from "express";

/**
 * Internal API Key Middleware
 * ─────────────────────────────────────────────────────────────────────────────
 * Protects /api/privileges/* endpoints from external access.
 *
 * Usage: All requests must include the header:
 *   x-internal-key: <INTERNAL_API_KEY>
 *
 * If the key is missing or incorrect → 401 Unauthorized.
 * No data is ever leaked in the rejection response.
 *
 * Security rationale:
 *  - These endpoints are only called by the admin dashboard (already JWT-protected).
 *  - Station clients (/station/dashboard) NEVER call these endpoints directly.
 *    Privilege validation for stations happens server-side in /api/qr/process.
 *  - This dual-layer protection (JWT user auth + internal key) prevents:
 *      1. Unauthenticated access
 *      2. Authenticated users calling endpoints via curl/Postman without the key
 */
const INTERNAL_KEY = process.env.INTERNAL_API_KEY || "";

export function requireInternalKey(req: Request, res: Response, next: NextFunction) {
  if (!INTERNAL_KEY) {
    // Fail safe: if key is not configured, deny all requests
    return res.status(503).json({
      success: false,
      error: "Service temporarily unavailable",
    });
  }

  const providedKey = req.headers["x-internal-key"];

  if (!providedKey || providedKey !== INTERNAL_KEY) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized",
    });
  }

  next();
}
