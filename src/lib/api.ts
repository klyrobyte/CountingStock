import { getAuthToken, getStationToken } from "./auth";

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

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || "Sebuah error terjadi, lapor jika error berkelanjutan.");
  }

  return data.data;
}
