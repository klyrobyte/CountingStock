/**
 * guardian.js
 *
 * Placed outside the main app directory intentionally.
 * Responsible for spawning the backend process.
 * This file never modifies any backend files.
 *
 * Usage:
 *   node ../guardian.js
 */

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

const APP_DIR = __dirname;
const BACKEND = resolve(APP_DIR, 'server', 'index.ts');

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

const child = spawn('npx', ['tsx', BACKEND], {
  cwd: APP_DIR,
  stdio: ['inherit', 'pipe', 'pipe'],
  shell: true,
  env: { ...process.env },
});

child.stdout.on('data', (chunk) => {
  const filtered = chunk
    .toString()
    .split('\n')
    .filter((line) => !isHttpAccessLog(line))
    .join('\n');

  if (filtered.trim().length > 0) {
    process.stdout.write(filtered);
  }
});

child.stderr.on('data', (chunk) => {
  process.stderr.write(chunk);
});

child.on('close', (code) => {
  process.exit(code ?? 0);
});

child.on('error', (err) => {
  console.error(`[guardian] Failed to spawn backend: ${err.message}`);
  process.exit(1);
});