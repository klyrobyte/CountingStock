// ── Auth token helpers (localStorage, no framework dependency) ───────────────

const AUTH_TOKEN_KEY = "sugity-auth-token";
const AUTH_USER_KEY = "sugity-auth-user";

export type AuthUser = {
  id: number;
  username: string;
  role: string;
  tvFactory?: string;
  tvShift?: string;
  tvTheme?: string;
};

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

/**
 * Decode JWT payload using built-in atob - no external library.
 * Returns the `exp` field as milliseconds, or null if not present.
 */
function decodeTokenExpiry(token: string): number | null {
  try {
    const part = token.split(".")[1];
    if (!part) return null;
    // Handle URL-safe base64 variants
    const payload = JSON.parse(atob(part.replace(/-/g, "+").replace(/_/g, "/")));
    return typeof payload.exp === "number" ? payload.exp * 1000 : null;
  } catch {
    return null;
  }
}

/**
 * Returns true only if a token exists AND has not expired.
 * Auto-evicts the stale token from storage on expiry - keeps state clean.
 */
export function isTokenValid(): boolean {
  const token = getAuthToken();
  if (!token) return false;
  const expiry = decodeTokenExpiry(token);
  if (expiry !== null && Date.now() >= expiry) {
    clearAuth(); // auto-evict expired session - user is redirected by AuthGuard
    return false;
  }
  return true;
}

/** @deprecated Use isTokenValid() which also validates expiry. */
export function isAuthenticated(): boolean {
  return isTokenValid();
}

export function setAuth(token: string, user: AuthUser): void {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
}

export function getAuthUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  // Return null if session is expired (token was cleared by isTokenValid)
  if (!isTokenValid()) return null;
  const raw = localStorage.getItem(AUTH_USER_KEY);
  try { return raw ? (JSON.parse(raw) as AuthUser) : null; }
  catch { return null; }
}

export function clearAuth(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
}

// ─── Route access ─────────────────────────────────────────────────────────────
// ONLY /login is publicly accessible - every other route requires a valid token.
export const PUBLIC_PATHS = ["/login"];

// ─── Station session (SEPARATE from user auth) ────────────────────────────────
// Uses completely different localStorage keys - cannot interfere with user auth.

const STATION_TOKEN_KEY = "sugity-station-token";
const STATION_DEVICE_KEY = "sugity-station-device";

export type StationDevice = {
  id: number;
  device_code: string;
  name: string;
  device_role: "IN" | "OUT";
  location: string;
};

export function setStationAuth(token: string, device: StationDevice): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STATION_TOKEN_KEY, token);
  localStorage.setItem(STATION_DEVICE_KEY, JSON.stringify(device));
}

export function clearStationAuth(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STATION_TOKEN_KEY);
  localStorage.removeItem(STATION_DEVICE_KEY);
}

export function getStationToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STATION_TOKEN_KEY);
}

export function getStationDevice(): StationDevice | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STATION_DEVICE_KEY);
  try { return raw ? (JSON.parse(raw) as StationDevice) : null; }
  catch { return null; }
}

export function isStationTokenValid(): boolean {
  const token = getStationToken();
  if (!token) return false;
  // Reuse the same expiry-decode logic from the main token validator
  try {
    const part = token.split(".")[1];
    if (!part) return false;
    const payload = JSON.parse(atob(part.replace(/-/g, "+").replace(/_/g, "/")));
    if (typeof payload.exp === "number" && Date.now() >= payload.exp * 1000) {
      clearStationAuth();
      return false;
    }
    // Must be a station type token, not a user token
    return payload.type === "station";
  } catch {
    return false;
  }
}

