-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: add_esp32_provisioning (additive patch for existing installations)
-- Run this ONLY if you already ran add_esp32_devices.sql before v2.
-- New installs can skip this — add_esp32_devices.sql already includes these.
-- ─────────────────────────────────────────────────────────────────────────────

USE `outindb`;

-- Add pending_provision to the connection_status ENUM
ALTER TABLE esp32_devices
  MODIFY connection_status
    ENUM('online','offline','reconnecting','pending_provision')
    NOT NULL DEFAULT 'offline';

-- Allow station_id = 0 during provisioning (before a station account is linked)
-- station_id = 0 means "pending assignment" — update via PUT /api/esp32/devices/:id
-- We convert to nullable instead of dropping the NOT NULL constraint so FK checks
-- can still be enforced once a station is assigned.
ALTER TABLE esp32_devices
  MODIFY station_id INT NOT NULL DEFAULT 0;

-- Add env-configurable gate server IP column (optional; used by provision QR generator)
ALTER TABLE esp32_devices
  ADD COLUMN IF NOT EXISTS gate_server_ip VARCHAR(64) DEFAULT NULL
  COMMENT 'IP stored at provision time for reference only';
