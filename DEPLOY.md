# 🚀 DEPLOY.md — Pixel Scan Dashboard
### Server Engineer Deployment Guide

> **Stack**: React 19 + TanStack Router (SSR via `@tanstack/react-start`) + Express 5 API + MySQL 8  
> **Build tool**: Vite 7 via `@lovable.dev/vite-tanstack-config`  
> **Process manager**: PM2 (recommended)  
> **Reverse proxy**: Nginx (recommended)

---

## Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Clone & Install](#2-clone--install)
3. [Environment Variables](#3-environment-variables)
4. [Database Setup](#4-database-setup)
5. [Build the Frontend](#5-build-the-frontend)
6. [Start the API Server](#6-start-the-api-server)
7. [Nginx Reverse Proxy](#7-nginx-reverse-proxy)
8. [PM2 Process Management](#8-pm2-process-management)
9. [TanStack-Specific Notes](#9-tanstack-specific-notes---read-this)
10. [Health Check](#10-health-check)
11. [Troubleshooting](#11-troubleshooting)

---

## 1. Prerequisites

| Tool | Minimum version | Notes |
|------|----------------|-------|
| Node.js | **v20 LTS** or v22 LTS | LTS only — TanStack Start requires ≥ 18, v20+ recommended |
| npm | **v10+** | Ships with Node 20 |
| MySQL | **8.0+** | MariaDB 10.6+ also works |
| PM2 | latest | `npm install -g pm2` |
| Nginx | 1.18+ | For reverse proxy & static file serving |

> **Bun users**: The project has a `bun.lockb`. If you prefer bun on the server, replace every `npm install` with `bun install`. The scripts work with both runtimes. The `tsx` runner used for the API server works with Node; if using Bun as the runtime for the API use `bun server/index.ts` instead of `npm run server`.

---

## 2. Clone & Install

```bash
git clone <your-repo-url> /var/www/pixel-scan-dashboard
cd /var/www/pixel-scan-dashboard

# Install all dependencies (including devDependencies — needed for the build step)
npm install
```

> ⚠️ Do **NOT** run `npm install --production` before building. The Vite/TanStack build pipeline lives in `devDependencies` and must be present during `npm run build`.  
> After building you may run `npm prune --production` to trim devDeps from production if disk space is a concern — but only **after** the build completes successfully.

---

## 3. Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
nano .env
```

### Full `.env` reference

```dotenv
# ─── Database ────────────────────────────────────────────────────────────────
DB_HOST=localhost          # or your MySQL server IP
DB_PORT=3306
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=outindb            # must match the database name you create below

# ─── Express API ─────────────────────────────────────────────────────────────
API_PORT=3001              # internal port; Nginx proxies /api → this port

# ─── JWT Secret ──────────────────────────────────────────────────────────────
# Generate: node -e "console.log(require('crypto').randomBytes(40).toString('hex'))"
JWT_SECRET=<64-char random hex string>

# ─── Public API base URL (embedded in generated QR codes) ────────────────────
API_BASE_URL=https://yourdomain.com   # MUST be the public-facing domain

# ─── Internal API Key (protects /api/privileges/* endpoints) ─────────────────
# Generate: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
INTERNAL_API_KEY=<64-char random hex string>
VITE_INTERNAL_API_KEY=<same value as above>   # client-side build-time injection

# ─── CORS allowed origins ────────────────────────────────────────────────────
# Comma-separated list of origins that may call the API.
# In production set this to your actual domain(s).
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# ─── Node environment ────────────────────────────────────────────────────────
NODE_ENV=production
```

> **Critical**: `VITE_INTERNAL_API_KEY` must equal `INTERNAL_API_KEY` — it gets baked into the frontend bundle at build time. If they differ, the QR privileges page will fail with 403 errors in production even though it works locally.

---

## 4. Database Setup

### Option A — Automated migration (recommended)

The project ships with a migration script that creates the database, all tables, and seeds demo data in one step:

```bash
npm run migrate
```

This runs `tsx server/migrate.ts` which:
- Creates the database if it doesn't exist (using `DB_NAME` from `.env`)
- Creates all tables with `CREATE TABLE IF NOT EXISTS` (safe to re-run)
- Seeds initial demo data only if tables are empty

### Option B — SQL dump

If you prefer to import the SQL directly:

```bash
mysql -u your_db_user -p < database.sql
```

> The `database.sql` file targets the database name `outindb`. If you set `DB_NAME` to something different in `.env`, edit the first two lines of `database.sql` before importing, or run `npm run migrate` instead (it reads `DB_NAME` from `.env` automatically).

### Incremental migrations (schema updates)

Run in order for a fresh install — these add columns and tables added after the initial release:

```bash
npm run migrate:big-update   # large schema update (additional columns)
npm run migrate:v2           # v2 schema additions
```

> Each script is idempotent (uses `IF NOT EXISTS` / `IF NOT EXISTS column`). Safe to run multiple times.

---

## 5. Build the Frontend

```bash
npm run build
```

This runs `vite build` via the `@lovable.dev/vite-tanstack-config` wrapper which internally:
1. Runs the TanStack Router code-generator to refresh `src/routeTree.gen.ts`
2. Compiles TypeScript
3. Bundles with Vite into `.output/` (TanStack Start SSR output — **not** `dist/`)

> **Important — TanStack Start output directory**:  
> This app uses `@tanstack/react-start` which outputs to **`.output/`** not `dist/`.  
> Do **not** configure Nginx to serve from `dist/`. Point static file serving and the SSR entry at `.output/`.

### What's in `.output/`

```
.output/
├── public/          ← static assets (CSS, JS chunks, fonts, images)
│   └── _build/
└── server/
    └── index.mjs    ← SSR Node.js server entry (serves HTML)
```

---

## 6. Start the API Server

The Express API server runs separately from the SSR frontend server.

### Development (local only)

```bash
npm run server          # starts server/index.ts via tsx on API_PORT (default 3001)
```

### Production via PM2

See [Section 8 — PM2](#8-pm2-process-management) for the full PM2 ecosystem config.

---

## 7. Nginx Reverse Proxy

This is the recommended production layout:

```
Browser
  ↓  HTTPS :443
Nginx
  ├─ /api/*        → proxy_pass http://127.0.0.1:3001   (Express API)
  └─ /*            → proxy_pass http://127.0.0.1:3000   (TanStack SSR server)
```

### Sample Nginx config

Save to `/etc/nginx/sites-available/pixel-scan`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    # Redirect HTTP → HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # --- SSL (use certbot / Let's Encrypt) ---
    ssl_certificate     /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    # --- Gzip ---
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;

    # --- API: forward /api/* to Express ---
    location /api/ {
        proxy_pass         http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;

        # Body size limit — matches Express (10mb)
        client_max_body_size 10m;
    }

    # --- Static assets — served directly by Nginx (fastest) ---
    location /_build/ {
        alias /var/www/pixel-scan-dashboard/.output/public/_build/;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    location /public/ {
        alias /var/www/pixel-scan-dashboard/public/;
        expires 7d;
        add_header Cache-Control "public";
        access_log off;
    }

    # --- Everything else → TanStack SSR server ---
    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade           $http_upgrade;
        proxy_set_header   Connection        "upgrade";
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

Enable and reload:

```bash
ln -s /etc/nginx/sites-available/pixel-scan /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

---

## 8. PM2 Process Management

Create `ecosystem.config.cjs` in the project root:

```js
module.exports = {
  apps: [
    // ── TanStack SSR frontend server ────────────────────────────────
    {
      name: "pixel-scan-frontend",
      script: ".output/server/index.mjs",
      interpreter: "node",
      cwd: "/var/www/pixel-scan-dashboard",
      instances: 1,              // SSR is stateful — keep at 1 unless you add shared session store
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,              // TanStack Start SSR listens on this port
      },
      env_file: ".env",
      restart_delay: 3000,
      max_restarts: 10,
      log_file: "logs/frontend.log",
      error_file: "logs/frontend-error.log",
      merge_logs: true,
    },

    // ── Express API server ──────────────────────────────────────────
    {
      name: "pixel-scan-api",
      script: "server/index.ts",
      interpreter: "node",
      interpreter_args: "--import tsx/esm",   // tsx ESM loader for TypeScript
      cwd: "/var/www/pixel-scan-dashboard",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
      },
      env_file: ".env",
      restart_delay: 3000,
      max_restarts: 10,
      log_file: "logs/api.log",
      error_file: "logs/api-error.log",
      merge_logs: true,
    },
  ],
};
```

```bash
# Create logs directory
mkdir -p logs

# Start both processes
pm2 start ecosystem.config.cjs

# Save process list so it survives reboots
pm2 save

# Register PM2 to auto-start on system boot
pm2 startup
# (run the command it prints as root)
```

### Common PM2 commands

```bash
pm2 status                        # view running processes
pm2 logs pixel-scan-api           # stream API logs
pm2 logs pixel-scan-frontend      # stream frontend logs
pm2 restart pixel-scan-api        # restart API (e.g. after .env change)
pm2 restart pixel-scan-frontend   # restart frontend (e.g. after new build)
pm2 reload ecosystem.config.cjs   # zero-downtime reload (if using cluster mode)
```

---

## 9. TanStack-Specific Notes — READ THIS

This section covers the most common deployment pitfalls specific to TanStack Start.

### 9.1 — The Vite config wrapper (`@lovable.dev/vite-tanstack-config`)

The `vite.config.ts` uses a custom wrapper that bundles the following plugins internally:

- `@tanstack/router-plugin` (auto code-generation for `routeTree.gen.ts`)
- `@vitejs/plugin-react`
- `@tailwindcss/vite`
- `vite-tsconfig-paths`
- `@cloudflare/vite-plugin` (build-only)

**Do NOT add these plugins manually** in `vite.config.ts` — the wrapper already includes them and duplicating will cause build failures (duplicate plugin registration errors).

The proxy block in `vite.config.ts` is **dev-only**:

```ts
// This ONLY applies during `npm run dev` (local development).
// In production, Nginx handles /api → Express routing.
server: {
    proxy: {
        "/api": { target: "http://localhost:3001" }
    }
}
```

This means: in production, Nginx **must** proxy `/api/*` to the Express server. Without this the frontend will send API calls to port 3000 (SSR server) which doesn't handle them.

### 9.2 — Route code generation (`routeTree.gen.ts`)

TanStack Router auto-generates `src/routeTree.gen.ts` during `npm run build`. If you modify route files (add/remove/rename a file under `src/routes/`) you must run a fresh build.

> You do **not** need to run a separate generate step — `npm run build` handles it automatically via the router plugin.

### 9.3 — SSR hydration & `AuthGuard`

The `AuthGuard` component in `__root.tsx` includes a guard for SSR:

```tsx
if (typeof window === "undefined") {
    return <>{children}</>;
}
```

This prevents hydration mismatch. **Do not remove this guard** — removing it will break SSR with React hydration errors in the browser console.

### 9.4 — `VITE_INTERNAL_API_KEY` must be set before building

`VITE_*` variables are **baked into the JS bundle** at build time (not read at runtime). If `.env` is missing `VITE_INTERNAL_API_KEY` when `npm run build` runs, the QR privileges feature will silently fail in production even though the API key is correctly set in `.env` for the server side.

**Correct workflow:**
1. Set all `VITE_*` variables in `.env`
2. **Then** run `npm run build`
3. If you change `VITE_*` vars later, rebuild.

### 9.5 — `.output/` is gitignored; rebuild on every deploy

`.output/` is in `.gitignore`. You must run `npm run build` on the server (or in CI) on every deployment. Never copy a local build to the server — local builds may contain localhost-specific VITE_ variables baked in.

### 9.6 — `.tanstack/` directory

The `.tanstack/tmp/` directory is a build cache created by the router plugin. It's gitignored and will be recreated automatically on the next build. If you see router-related build errors, delete this directory and rebuild:

```bash
rm -rf .tanstack
npm run build
```

---

## 10. Health Check

Once everything is running, verify:

```bash
# API server health (DB connectivity + uptime)
curl https://yourdomain.com/api/health

# Expected response:
{
  "status": "Sehat Wal'afiat",
  "creator": "di rancang oleh @RizkyDaffy",
  "time": "2026-06-22T...",
  "db": "ok",
  "db_latency_ms": 2,
  "uptime_s": 42
}
```

If `db` is `"error"`, check MySQL credentials in `.env` and that the MySQL server is reachable from the app server.

---

## 11. Troubleshooting

### ❌ `Cannot find module '@tanstack/react-start'` or TanStack errors on build

**Cause**: Running `npm install --production` or `npm prune --production` before building.  
**Fix**: Run `npm install` (with devDeps) → `npm run build` → then optionally prune.

---

### ❌ White screen / blank page in production (no error in console)

**Cause A**: Nginx is not proxying `/api/*` to Express — all API calls are failing silently.  
**Fix**: Add the `/api/` location block to your Nginx config (see Section 7).

**Cause B**: `VITE_INTERNAL_API_KEY` was not set before building.  
**Fix**: Set the variable, run `npm run build` again, restart the frontend process.

---

### ❌ CORS errors in browser (calls to `/api/` are blocked)

**Cause**: `ALLOWED_ORIGINS` in `.env` does not include your production domain.  
**Fix**: Set `ALLOWED_ORIGINS=https://yourdomain.com` and restart the API process (`pm2 restart pixel-scan-api`).

---

### ❌ 401 on every API call despite correct login

**Cause**: `JWT_SECRET` differs between server restarts (e.g., `.env` not loaded, or the file changed).  
**Fix**: Verify `.env` has a consistent `JWT_SECRET` and that PM2 is loading it (`pm2 env pixel-scan-api` shows current env vars).

---

### ❌ API works but frontend routes 404 (`/dashboard`, `/scan`, etc.)

**Cause**: Nginx is not forwarding unknown paths to the TanStack SSR server; they're being handled as file-not-found.  
**Fix**: Ensure the `location /` block proxy-passes to port 3000 (the SSR server). Do **not** use `try_files` or serve from a static directory for non-`/_build/` paths.

---

### ❌ `routeTree.gen.ts` is stale / routes missing

**Cause**: Route files were added/removed but the build wasn't re-run.  
**Fix**: `npm run build` (the TanStack router plugin regenerates the tree automatically).

---

### ❌ Rate limiter blocking legitimate users

The in-memory rate limiter resets on server restart. If a restart coincides with a lockout window, the lockout will clear automatically.  
Max attempts: **5 failed logins per IP** → **60 second lockout**.  
This is configured in `server/middleware/rateLimiter.ts` (`MAX_ATTEMPTS`, `LOCKOUT_MS`).

---

## Quick Reference — Deployment Checklist

```
[ ] Node 20 LTS installed
[ ] MySQL 8 running, user created, grant permissions
[ ] npm install (with devDeps)
[ ] .env file created from .env.example, all values filled
[ ] VITE_INTERNAL_API_KEY = INTERNAL_API_KEY (same value in .env)
[ ] npm run migrate (creates DB + tables + seeds)
[ ] npm run build (.output/ created)
[ ] ecosystem.config.cjs created
[ ] pm2 start ecosystem.config.cjs
[ ] pm2 save && pm2 startup
[ ] Nginx config installed and reloaded
[ ] SSL cert installed (Let's Encrypt / certbot)
[ ] curl https://yourdomain.com/api/health → db: "ok"
[ ] Open browser → login page loads
[ ] Login with an admin account → dashboard loads
[ ] /scan route → camera permission requested ✓
```

---

*Generated for pixel-scan-dashboard — @RizkyDaffy*
