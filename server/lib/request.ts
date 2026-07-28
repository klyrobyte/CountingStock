/**
 * server/lib/request.ts — shared HTTP request utilities.
 * Extracted from logger.ts and rateLimiter.ts (they had identical implementations).
 */
import type { Request } from "express";

/**
 * Returns the real client IP, respecting X-Forwarded-For from reverse proxies.
 * Used by both logger and rate limiter.
 */
export function getClientIp(req: Request): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) return String(forwarded).split(",")[0].trim();
  return req.ip || req.socket?.remoteAddress || "unknown";
}
