# Docker Build & Deployment Fix Report

**Date:** 2026-06-22 → 2026-06-23
**Branch:** `beta-ver`
**Goal:** Ship the Counting Stock app via Docker on a VM, served behind nginx, talking to an existing MySQL container (`henkaten-db`) on another compose project's network.

---

## Symptom Timeline

1. `docker compose build` ok → runtime crash: `guardian.js` not found.
2. After Dockerfile fix → `[guardian] ssr exited with code 0` (silent exit, no listener).
3. After entry-path fix → still `[guardian] ssr exited with code 0`.
4. After Node-listener fix → server up on port 3000, but browser shows **blank white screen** with `Failed to load module script ... MIME type "text/html"` errors for every `/assets/*.js`.
5. After static-file fix → site loads, but **login hits port 3000 instead of 4000 // sesuaikan port ini #deployment**.
6. After API-proxy fix → login reaches API but → `CORS: Origin http://172.19.82.34:3000 not allowed`.
7. After Origin-strip fix → CORS passes, but → `getaddrinfo EAI_AGAIN henkaten-db` on the VM.
8. After external-network attach → DB resolves, login works end-to-end.

---

## Root Cause Chain

| # | Layer | Problem | Why it happened |
|---|-------|---------|-----------------|
| 1 | Image | `guardian.js` absent in runner stage | `Dockerfile` never `COPY`-ed it; only `server/`, `dist/`, `tsx` were copied. |
| 2 | Build target | Vite emitted a Cloudflare Worker module (`export default { fetch }`) | `vite.config.ts` always added `@cloudflare/vite-plugin` on `command === "build"`. |
| 3 | Entry path | Guardian pointed at `dist/server/index.js` | TanStack Start actually emits `dist/server/server.js`. |
| 4 | Runtime | Even with the right path, `node dist/server/server.js` exits with code 0 | The file is a runtime-agnostic handler module — ESM evaluates, no `server.listen()`, process ends. |
| 5 | Static assets | Once the listener was alive, browser got `text/html` for `.js` requests | The TanStack Start handler renders SSR HTML for unknown routes; static client files in `dist/client/` were never served. |
| 6 | API routing | Login POST went to `http://host:3000/api/auth/login` | Frontend uses `/api/*` relative (matches Vite dev proxy); production SSR server doesn't proxy. |
| 7 | CORS | `Origin http://172.19.82.34:3000 not allowed` | Proxy forwarded the browser's Origin header; Express CORS allow-list doesn't include the LAN IP. |
| 8 | DNS | `EAI_AGAIN henkaten-db` | App container not joined to the network where `henkaten-db` lives (different compose project). |

---

## Changes

### 1. `Dockerfile` — copy the process manager into the runner stage

Added before `EXPOSE`:

```dockerfile
# Copy the process manager that boots both servers
COPY guardian.js ./guardian.js
```

Without this, `CMD ["node", "guardian.js"]` failed immediately.

---

### 2. `vite.config.ts` — make the Cloudflare adapter opt-in

**Before:** the CF plugin was always loaded during `vite build`, producing a Worker-only artifact.

**After:** gated behind an env var so Docker (and any plain `npm run build`) produce a Node SSR build by default:

```ts
...(command === "build" && process.env.BUILD_TARGET === "cloudflare"
  ? [
      (async () => {
        const { cloudflare } = await import("@cloudflare/vite-plugin");
        return cloudflare({ viteEnvironment: { name: "ssr" } });
      })(),
    ]
  : []),
```

**Cloudflare deploy path (still available, opt-in):**
```bash
BUILD_TARGET=cloudflare npm run build
```

---

### 3. `guardian.js` — point at the real entry + spawn the Node wrapper

```diff
- const SSR_ENTRY = resolve(APP_DIR, 'dist', 'server', 'index.js');
+ // Node listener that imports the built Web-Fetch handler (dist/server/server.js)
+ // and binds it to PORT. Created because TanStack Start's build is runtime-agnostic.
+ const SSR_ENTRY = resolve(APP_DIR, 'server', 'ssr-node.mjs');
+ const SSR_BUILD = resolve(APP_DIR, 'dist', 'server', 'server.js');
```

```diff
- if (IS_PROD && existsSync(SSR_ENTRY)) {
+ if (IS_PROD && existsSync(SSR_BUILD)) {
    spawnProcess('ssr', 'node', [SSR_ENTRY], { ... });
  } else if (IS_PROD) {
-   console.warn('[guardian] Production mode but dist/server/index.js not found.');
+   console.warn(`[guardian] Production mode but ${SSR_BUILD} not found.`);
  }
```

The build-existence check (`SSR_BUILD`) is split from the launched script (`SSR_ENTRY`) so the warning still points at the missing build artifact, not the wrapper script.

---

### 4. `server/ssr-node.mjs` — NEW file

Minimal Node HTTP server that ties everything together. Order of resolution per request:

1. **API proxy** — if path starts with `/api`, forward to `http://127.0.0.1:4000 //ganti endpoint ini saat deployment` (Express). Strips `Origin` and `Referer` so the API sees a server-to-server call and falls into the `!origin` allow branch of the CORS middleware. Configurable via `API_PROXY_HOST` / `API_PORT`.
2. **Static files** — serves `dist/client/**` with correct MIME types and `Cache-Control: public, max-age=31536000, immutable` for `/assets/`. Path normalization prevents directory traversal.
3. **SSR fallback** — dynamically imports `dist/server/server.js`, grabs `default.fetch`, converts Node `IncomingMessage` ↔ Web `Request`/`Response` using `Readable.toWeb` / `Readable.fromWeb`.
4. **Listens** on `process.env.PORT || 3000`, `HOST=0.0.0.0`.
5. **Graceful shutdown** on SIGTERM / SIGINT.

Uses Node built-ins only — no new npm deps.

---

### 5. `docker-compose.yml` — wire app to the existing MySQL container's network

```yaml
services:
  counting-stock:
    image: counting-stock
    container_name: counting-stock
    environment:
      DB_HOST: ${DB_HOST:-127.0.0.1}     # set to "henkaten-db" in .env
      # ...
    networks:
      - app-network
      - nginx-public

# Local MySQL service kept commented for local-only dev fallback.

networks:
  nginx-public:
    external: true
    name: nginx-public
  app-network:
    external: true
    name: henkaten-db_app-network        # join the henkaten-db compose net
```

**Why external `app-network`:** the MySQL container (`henkaten-db`) lives in a different compose project. Docker compose service-name DNS only resolves within shared networks, so the app container must join `henkaten-db_app-network`.

**Why `nginx-public`:** reverse-proxied externally; allows the public nginx to reach `counting-stock:3000` without exposing ports on the host.

Local `db` service and `db-data` volume are commented out (kept for reference / local-only dev).

---

### 6. `.env` (runtime, on VM)

Must point at the external DB container:

```env
DB_HOST=henkaten-db
DB_PORT=3306
DB_USER=...
DB_PASSWORD=...
DB_NAME=...
JWT_SECRET=...
INTERNAL_API_KEY=...
VITE_INTERNAL_API_KEY=...
```

---

## Verification

```bash
docker compose up -d --build
docker compose logs -f counting-stock
docker compose exec counting-stock getent hosts henkaten-db   # should print an IP
```

Expected log lines:
```
[api]  …Express server listening on 4000 // sesuaikan port ini #deployment
[ssr]  listening on http://0.0.0.0:3000
```

Browser:
- `http://<host>:3000` renders dashboard, no MIME errors in DevTools.
- POST `/api/auth/login` returns 200 from any LAN IP / hostname (Origin no longer matters because the proxy strips it).

---

## Ports

| Service | Container | Host (default) | Override |
|---------|-----------|----------------|----------|
| Frontend SSR | 3000 | 3000 | `APP_PORT` |
| Express API | 4000 // sesuaikan port ini #deployment | 4000 // sesuaikan port ini #deployment | `API_PORT` |
| MySQL | — | external (`henkaten-db` container) | n/a |

---

## Files Touched

- `Dockerfile`
- `vite.config.ts`
- `guardian.js`
- `docker-compose.yml`
- `.env` *(VM only — not committed)*
- `server/ssr-node.mjs` *(new)*

## Files Intentionally NOT Touched

- `server/index.ts` — Express API was never broken.
- `server/middleware/securityMiddleware.ts` — CORS allow-list left untouched; proxy strips Origin instead, so any LAN host works without env churn.
- `src/lib/api.ts` — frontend keeps relative `/api/*`; proxy handles routing in both dev (Vite) and prod (ssr-node).
- `package.json` — no new deps; everything uses Node built-ins.

---

## Deploy Cheat Sheet (VM)

```bash
# First time: ensure henkaten-db stack is up so its network exists
docker network ls | grep henkaten-db_app-network

# Build + start
docker compose up -d --build

# Run migrations once
docker compose exec counting-stock npm run migrate

# Logs
docker compose logs -f counting-stock

# Restart only the app (no rebuild)
docker compose restart counting-stock
```
