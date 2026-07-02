/**
 * guardian.js
 *
 * Process manager for the Pixel Scan Dashboard.
 * Spawns two processes in parallel:
 *   1. Express API server  (server/index.ts  → port 3001)
 *   2. TanStack Start SSR  (dist/server/ → port 3000)  — production only
 *
 * In development (npm run dev:all) only the API is spawned here;
 * the Vite dev server is handled by concurrently separately.
 *
 * Usage:
 *   Development:  npx concurrently "npm run dev" "node guardian.js"
 *   Production:   node guardian.js
 */

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_DIR = __dirname;
const IS_PROD = process.env.NODE_ENV === 'production';

// ── Paths ─────────────────────────────────────────────────────────────────────
const BACKEND_SRC = resolve(APP_DIR, 'server', 'index.ts');
const FRONTEND_DIST = resolve(APP_DIR, 'dist', 'server', 'assets', 'worker-entry-*.js');
// Node listener that imports the built Web-Fetch handler (dist/server/server.js)
// and binds it to PORT. Created because TanStack Start's build is runtime-agnostic.
const SSR_ENTRY = resolve(APP_DIR, 'server', 'ssr-node.mjs');
const SSR_BUILD = resolve(APP_DIR, 'dist', 'server', 'server.js');

/**
 * Returns true for structured HTTP access log lines.
 * Shape: { timestamp, method, path, status, duration_ms, ip, ua }
 */
function isHttpAccessLog(line) {
  try {
    const obj = JSON.parse(line.trim());
    return (
      typeof obj.timestamp === 'string' &&
      typeof obj.method === 'string' &&
      typeof obj.path === 'string' &&
      typeof obj.status === 'number'
    );
  } catch {
    return false;
  }
}

/**
 * Spawn a child process and wire stdout/stderr with a [label] prefix.
 * Returns the ChildProcess handle.
 */
function spawnProcess(label, cmd, args, opts = {}) {
  const child = spawn(cmd, args, {
    cwd: APP_DIR,
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
    env: { ...process.env },
    ...opts,
  });

  child.stdout.on('data', (chunk) => {
    const filtered = chunk
      .toString()
      .split('\n')
      .filter((line) => !isHttpAccessLog(line))
      .join('\n');
    if (filtered.trim().length > 0) {
      process.stdout.write(`[${label}] ${filtered.trimEnd()}\n`);
    }
  });

  child.stderr.on('data', (chunk) => {
    process.stderr.write(`[${label}] ${chunk.toString().trimEnd()}\n`);
  });

  child.on('error', (err) => {
    console.error(`[guardian] Failed to spawn ${label}: ${err.message}`);
    process.exit(1);
  });

  child.on('close', (code) => {
    console.log(`[guardian] ${label} exited with code ${code}.`);
    // If either critical process dies, shut everything down
    process.exit(code ?? 0);
  });

  return child;
}

// ── Spawn Express API server (always) ─────────────────────────────────────────
const api = spawnProcess('api', 'npx', ['tsx', BACKEND_SRC]);

// ── Spawn SSR frontend in production mode ────────────────────────────────────
// In development, the Vite dev server is started separately by `npm run dev`.
if (IS_PROD && existsSync(SSR_BUILD)) {
  spawnProcess('ssr', 'node', [SSR_ENTRY], {
    env: {
      ...process.env,
      PORT: process.env.SSR_PORT || '3000',
    },
  });
} else if (IS_PROD) {
  console.warn(`[guardian] Production mode but ${SSR_BUILD} not found.`);
  console.warn('[guardian] Run `npm run build` before starting in production.');
}

// ── Graceful shutdown: forward signals to children ──────────────────────────
function shutdown(signal) {
  console.log(`[guardian] Received ${signal}, shutting down…`);
  api.kill(signal);
  process.exit(0);
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));