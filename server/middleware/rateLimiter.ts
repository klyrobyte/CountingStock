import { Request, Response, NextFunction } from "express";

// ── In-memory login rate limiter ──────────────────────────────────────────────
// Tracks failed login attempts per IP address.
// After MAX_ATTEMPTS consecutive 401 responses, blocks further attempts for
// LOCKOUT_MS (default 60 seconds).
//
// Uses res.on("finish") to hook into the response without touching any handler.
// This is purely additive - route handlers are completely untouched.

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 60_000; // 60 seconds

interface AttemptRecord {
  count: number;
  lockedUntil: number | null;
}

// Global in-memory store; resets on server restart (acceptable for single-node)
const ipAttempts = new Map<string, AttemptRecord>();

// Periodic cleanup - prevent unbounded memory growth (every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of ipAttempts.entries()) {
    // Remove entries that are no longer locked and have zero count
    if (record.count === 0 && (record.lockedUntil === null || now >= record.lockedUntil)) {
      ipAttempts.delete(ip);
    }
  }
}, 5 * 60 * 1000);

function getClientIp(req: Request): string {
  // Trust X-Forwarded-For when behind a reverse proxy (nginx, cloudflare)
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) {
    return String(forwarded).split(",")[0].trim();
  }
  return req.ip || req.socket?.remoteAddress || "unknown";
}

/**
 * loginRateLimiter - apply this middleware BEFORE login route handlers.
 *
 * Behavior:
 *  - If IP is locked out → immediately return 429 with Retry-After header.
 *  - Otherwise, pass to next(), then hook into response finish:
 *      • 401 response → increment failure counter; lock if ≥ MAX_ATTEMPTS.
 *      • 200 response → reset counter (successful login clears penalty).
 */
export function loginRateLimiter(req: Request, res: Response, next: NextFunction) {
  const ip = getClientIp(req);
  const now = Date.now();

  // Fetch or initialize record
  const record = ipAttempts.get(ip) ?? { count: 0, lockedUntil: null };

  // If lockout expired → reset record
  if (record.lockedUntil !== null && now >= record.lockedUntil) {
    record.count = 0;
    record.lockedUntil = null;
  }

  // If currently locked → reject immediately
  if (record.lockedUntil !== null && now < record.lockedUntil) {
    const retryAfterSec = Math.ceil((record.lockedUntil - now) / 1000);
    res.setHeader("Retry-After", String(retryAfterSec));
    return res.status(429).json({
      success: false,
      error: `Terlalu banyak percobaan login. Coba lagi dalam ${retryAfterSec} detik.`,
    });
  }

  // Save the (possibly reset) record before passing to handler
  ipAttempts.set(ip, record);

  // Hook into response finish - detect outcome without touching the handler
  res.on("finish", () => {
    if (res.statusCode === 401) {
      // Failed attempt - increment counter
      record.count++;
      if (record.count >= MAX_ATTEMPTS) {
        record.lockedUntil = Date.now() + LOCKOUT_MS;
        console.warn(
          `[RateLimiter] IP ${ip} locked out after ${MAX_ATTEMPTS} failed login attempts`
        );
      }
      ipAttempts.set(ip, record);
    } else if (res.statusCode === 200) {
      // Successful login - clear penalty
      record.count = 0;
      record.lockedUntil = null;
      ipAttempts.set(ip, record);
    }
  });

  next();
}
