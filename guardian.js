/**DO NOT TOUCH THIS FILES
 * guardian.js 
 *
 * Placed OUTSIDE the main app directory intentionally.
 * spawning the backend. It NEVER modifies any backend files.
 *
 * Usage:
 *   node ../guardian.js
 */

import { createHash } from 'crypto';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

// -- Config ------------------------------------------------------------------
const APP_DIR = __dirname;
const SIG_FILE = resolve(APP_DIR, 'public', 'ascii-signature.js');
const KNOWN_HASH = '4f944ac5a2cbaa80effa0eb4b24c9e19be33975505cec87b3e6c8b6c542f5f1d';
const BACKEND = resolve(APP_DIR, 'server', 'index.ts');

// -- Banner (plain ASCII, no colors, no special chars) ----------------------
console.log('');
console.log('  @RizkyDaffy -- kbyte v1.0');
console.log('  Checking integrity of ascii-signature.js...');
console.log('');

// -- Integrity check ---------------------------------------------------------
if (!existsSync(SIG_FILE)) {
  console.error('[SATPAM KODE] FATAL: Signature file not found at:');
  console.error('  ' + SIG_FILE);
  console.error('[SATPAM KODE] Backend startup REFUSED.');
  process.exit(1);
}

const raw = readFileSync(SIG_FILE, 'utf8');
const content = raw.replace(/^\/\*[^\n]*\*\/\r?\n/, '');
const actualHash = createHash('sha256').update(content).digest('hex');

if (actualHash !== KNOWN_HASH) {
  console.error('[SATPAM KODE] WARNING: INTEGRITY MISMATCH DETECTED!');
  console.error('  Actual   : ' + actualHash);
  console.error('[SATPAM KODE] ascii-signature.js has been tampered with.');
  console.error('[SATPAM KODE] Backend startup REFUSED.');
  process.exit(1);
}

console.log('[SATPAM KODE] OK - Signature integrity verified.');
console.log('[SATPAM KODE] Hash: ' + actualHash);
console.log('[SATPAM KODE] Spawning backend...');
console.log('');

// -- Spawn backend (never modifies it) ----------------------------------------
const child = spawn(
  'npx',
  ['tsx', BACKEND],
  {
    cwd: APP_DIR,
    stdio: 'inherit',
    shell: true,
    env: { ...process.env },
  }
);

child.on('close', (code) => {
  console.log('[SATPAM KODE] Backend exited with code ' + code + '.');
  process.exit(code ?? 0);
});

child.on('error', (err) => {
  console.error('[SATPAM KODE] Failed to spawn backend: ' + err.message);
  process.exit(1);
});
