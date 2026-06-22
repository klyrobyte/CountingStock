# Docker Build & Runtime Fix Report

**Date:** 2026-06-22
**Branch:** `beta-ver`
**Goal:** Get `docker compose up` to serve the frontend on `http://localhost:3000` with all client assets loading correctly.

---

## Symptom Timeline

1. `docker compose build` → runtime crash: `guardian.js` not found.
2. After fix → `[guardian] ssr exited with code 0` (silent exit, no listener).
3. After entry-path fix → still `[guardian] ssr exited with code 0`.
4. After Node-listener fix → server up on port 3000, but browser shows **blank white screen** with `Failed to load module script ... MIME type "text/html"` errors for every `/assets/*.js`.
5. After static-file fix → site loads.

---

## Root Cause Chain

| Layer | Problem | Why it happened |
|-------|---------|-----------------|
| Image | `guardian.js` absent in runner stage | `Dockerfile` never `COPY`-ed it; only `server/`, `dist/`, `tsx` were copied. |
| Build target | Vite emitted a Cloudflare Worker module (`export default { fetch }`) | `vite.config.ts` always added `@cloudflare/vite-plugin` on `command === "build"`. |
| Entry path | Guardian pointed at `dist/server/index.js` | TanStack Start actually emits `dist/server/server.js`. |
| Runtime | Even with the right path, `node dist/server/server.js` exits with code 0 | The file is a runtime-agnostic handler module — ESM evaluates, no `server.listen()`, process ends. |
| Assets | Once the listener was alive, browser got `text/html` for `.js` requests | The TanStack Start handler renders SSR HTML for unknown routes; static client files in `dist/client/` were never served. |

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

**Cloudflare deploy path (unchanged in behavior, opt-in now):**
```bash
BUILD_TARGET=cloudflare npm run build
```

---

### 3. `guardian.js` — point at the real entry + use a real Node listener

```diff
- // TanStack Start SSR entry point from the production build
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
    ...
  }
```

The build-existence check (`SSR_BUILD`) is split from the launched script (`SSR_ENTRY`) so the warning still points at the missing artifact, not the wrapper.

---

### 4. `server/ssr-node.mjs` — NEW file

A minimal Node HTTP server that:

1. **Dynamically imports** `dist/server/server.js` and grabs `default.fetch`.
2. **Serves static files** from `dist/client/` first (correct MIME types, immutable cache for `/assets/`).
3. **Falls through to the handler** for everything else — converts Node `IncomingMessage` ⇄ Web `Request`/`Response` using `Readable.toWeb` / `Readable.fromWeb`.
4. **Listens** on `process.env.PORT || 3000`, `HOST=0.0.0.0`.
5. **Graceful shutdown** on SIGTERM/SIGINT.

Key MIME map includes `.js`, `.mjs`, `.css`, `.svg`, `.png`, `.woff2`, `.ico`, etc. Path normalization prevents directory traversal.

---

## Verification

```bash
docker compose up -d --build
docker compose logs -f app
```

Expected log lines:
```
[api]  …Express server listening on 3001
[ssr]  listening on http://0.0.0.0:3000
```

Browser: `http://localhost:3000` renders the dashboard. DevTools Network → all `/assets/*.js` return `200` with `Content-Type: application/javascript`.

---

## Ports

| Service | Container | Host (default) | Override |
|---------|-----------|----------------|----------|
| Frontend SSR | 3000 | 3000 | `APP_PORT` |
| Express API | 3001 | 3001 | `API_PORT` |
| MySQL | 3306 | 3306 | `DB_EXPOSE_PORT` |

---

## Files Touched

- `Dockerfile`
- `vite.config.ts`
- `guardian.js`
- `server/ssr-node.mjs` *(new)*

## Files NOT Touched (intentionally)

- `docker-compose.yml` — port mapping and env wiring already correct.
- `server/index.ts` — Express API was never broken.
- `package.json` — no new deps needed; listener uses Node built-ins only.
