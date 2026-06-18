import { getAuthToken, getStationToken, clearAuth, clearStationAuth } from "./auth";

// Use a relative path so requests go through Vite's proxy.
// This means the server works whether accessed via localhost OR ngrok/LAN.
const API_BASE = "/api";

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE}${endpoint}`;

  // Use station token if it's a station route, otherwise user token
  const token = endpoint.startsWith("/qr/scan/") ? getStationToken() : getAuthToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options.headers as Record<string, string>,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  // ── Global 401 interceptor (additive) ───────────────────────────────────
  // If the server returns 401, the session has expired or the token is invalid.
  // Clear both user and station tokens then redirect to the appropriate login page.
  if (response.status === 401 && typeof window !== "undefined") {
    clearAuth();
    clearStationAuth();
    const isStationRoute = window.location.pathname.startsWith("/station");
    window.location.replace(isStationRoute ? "/station/login" : "/login");
    // Throw so the caller's .catch() / onError handler is notified
    throw new Error("Session expired. Redirecting to login.");
  }
  // ─────────────────────────────────────────────────────────────────────

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || "Sebuah error terjadi, lapor jika error berkelanjutan.");
  }

  return data.data;
}
