import { Request, Response, NextFunction } from "express";

// ── Structured JSON request logger ────────────────────────────────────────────
// Applied globally as the first middleware in server/index.ts.
// Logs one JSON line per completed request with: method, path, status, duration,
// ip, and timestamp. No PII (no request bodies, no auth tokens) is ever logged.
//
// Output goes to stdout - pipe to a log aggregator (datadog, papertrail, etc.)
// in production or read with `pm2 logs` / `docker logs`.

function getClientIp(req: Request): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) return String(forwarded).split(",")[0].trim();
  return req.ip || req.socket?.remoteAddress || "unknown";
}

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const startMs = Date.now();
  const ip = getClientIp(req);

  // Log after response is finished so we capture the final status code
  res.on("finish", () => {
    const durationMs = Date.now() - startMs;
    const logEntry = {
      timestamp: new Date().toISOString(),
      method: req.method,
      path: req.path,
      status: res.statusCode,
      duration_ms: durationMs,
      ip,
      // user_agent included for debugging but no PII
      ua: req.headers["user-agent"]?.slice(0, 100) ?? "",
    };

    // Structured JSON log - one line per request
    // Use stderr for 5xx errors so they can be filtered separately
    if (res.statusCode >= 500) {
      console.error(JSON.stringify(logEntry));
    } else {
      console.log(JSON.stringify(logEntry));
    }
  });

  next();
}
