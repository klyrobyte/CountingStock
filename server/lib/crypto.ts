/**
 * server/lib/crypto.ts — password/PIN hashing.
 * Uses bcrypt (work factor 12). Provides a SHA-256 migration bridge:
 * on first login with a legacy hash, silently re-hashes with bcrypt.
 * ponytail: bridge ceiling = all users logged in once after deploy; upgrade path = drop verifyLegacy after.
 */
import bcrypt from "bcryptjs";
import crypto from "crypto";

const BCRYPT_ROUNDS = 12;

/** Hash a plain text password with bcrypt. */
export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, BCRYPT_ROUNDS);
}

/** Hash a plain text PIN with bcrypt. */
export const hashPin = hashPassword;

/**
 * Verify a plain text value against a stored hash.
 * Detects bcrypt ($2b/$2a prefix) vs legacy SHA-256 (64-char hex).
 * Returns { valid, needsRehash } — caller should rehash when needsRehash=true.
 */
export async function verifyHash(
  plain: string,
  stored: string
): Promise<{ valid: boolean; needsRehash: boolean }> {
  if (stored.startsWith("$2")) {
    // bcrypt hash
    const valid = await bcrypt.compare(plain, stored);
    return { valid, needsRehash: false };
  }
  // Legacy SHA-256 hex
  const legacyHash = crypto.createHash("sha256").update(plain).digest("hex");
  const valid = legacyHash === stored;
  return { valid, needsRehash: valid }; // rehash on successful legacy verify
}
