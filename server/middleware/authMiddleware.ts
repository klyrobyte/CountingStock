import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

const SECRET_KEY = config.JWT_SECRET;

// Decoded JWT payload shape attached to every authenticated request
interface JwtPayload {
  id: number;
  username: string;
  role: string;
  iat?: number;
  exp?: number;
  [key: string]: unknown;
}

// Extend Express Request type to include the decoded user info
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  // We want to skip auth for some public routes
  const publicPaths = [
    "/api/auth/login",
    "/api/devices/station-login",
    "/api/health",
    "/api/qr/info", // Need this for public hardware scanning
    "/iot",         // ESP32 HTTP polling — no auth token available on hardware
  ];

  if (publicPaths.some(path => req.path.startsWith(path))) {
    return next();
  }

  // Expect token in the form: "Bearer <token>"
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, error: "Unauthorized: Token missing or invalid format" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach decoded payload to request
    next();
  } catch (err) {
    return res.status(403).json({ success: false, error: "Forbidden: Invalid or expired token" });
  }
}
