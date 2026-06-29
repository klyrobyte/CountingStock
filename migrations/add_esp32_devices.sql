-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: add_esp32_devices
-- Additive ONLY — no existing tables are altered or dropped.
-- Run this after the main schema is already in place.
-- ─────────────────────────────────────────────────────────────────────────────

USE `outindb`;

-- [Table 1] esp32_devices
-- Registers every physical ESP32 unit in the system.
-- Each row maps one ESP32 to the machine/direction it controls.
-- auth_token is a pre-shared HMAC secret: never stored in plain text beyond initial provisioning.
CREATE TABLE IF NOT EXISTS esp32_devices (
  id                VARCHAR(64)  PRIMARY KEY,         -- e.g. "ESP-MC6-IN-001"
  machine_id        INT          NOT NULL,             -- FK → mesin.id (or machines table equivalent)
  station_id        INT          NOT NULL,             -- FK → devices.id (station account)
  direction         ENUM('in','out') NOT NULL,
  location_label    VARCHAR(128) DEFAULT '',           -- human-readable: "MC6 - IN Gate"
  auth_token        VARCHAR(256) NOT NULL,             -- pre-shared HMAC key for handshake validation
  is_active         TINYINT(1)   NOT NULL DEFAULT 1,
  last_seen         TIMESTAMP    NULL DEFAULT NULL,
  connection_status ENUM('online','offline','reconnecting') NOT NULL DEFAULT 'offline',
  created_at        TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at        TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  -- Ensures one device per direction per machine (physical uniqueness)
  UNIQUE KEY uq_machine_direction (machine_id, direction),

  KEY idx_station_id  (station_id),
  KEY idx_direction   (direction),
  KEY idx_conn_status (connection_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- [Table 2] esp32_user_privileges
-- Maps which users (from the `users` table) are allowed to trigger which ESP32 device.
-- If NO rows exist for a given esp32_device_id → no user can trigger it (deny-by-default).
CREATE TABLE IF NOT EXISTS esp32_user_privileges (
  id              INT          AUTO_INCREMENT PRIMARY KEY,
  esp32_device_id VARCHAR(64)  NOT NULL,               -- FK → esp32_devices.id
  user_id         INT          NOT NULL,               -- FK → users.id (or devices.id for station accounts)
  granted_by      INT          NOT NULL,               -- FK → users.id of the admin who granted this
  granted_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,

  UNIQUE KEY uq_device_user (esp32_device_id, user_id),
  KEY idx_esp32_device_id   (esp32_device_id),
  KEY idx_user_id           (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- [Table 3] gate_command_log
-- Immutable audit log of every gate-open attempt (success, rejected, timeout).
-- Never truncate this table; archive old rows if needed.
CREATE TABLE IF NOT EXISTS gate_command_log (
  id              INT          AUTO_INCREMENT PRIMARY KEY,
  request_id      VARCHAR(64)  NOT NULL UNIQUE,        -- UUID generated per gate-open attempt
  user_id         INT          NOT NULL,               -- who triggered the scan
  station_id      INT          NOT NULL,               -- which station device
  machine_id      INT          NOT NULL,               -- which machine
  direction       ENUM('in','out') NOT NULL,
  qr_code_id      VARCHAR(64)  DEFAULT NULL,           -- batch_id or qr_id of the scanned QR
  esp32_device_id VARCHAR(64)  DEFAULT NULL,           -- which ESP32 was targeted (NULL if not resolved)
  result          ENUM('sent','ack_received','rejected_rbac','device_offline','device_not_found','error') NOT NULL,
  result_detail   VARCHAR(512) DEFAULT NULL,           -- extra info (error message, reject reason)
  dispatched_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  acked_at        TIMESTAMP    NULL DEFAULT NULL,

  KEY idx_request_id      (request_id),
  KEY idx_user_id         (user_id),
  KEY idx_esp32_device_id (esp32_device_id),
  KEY idx_dispatched_at   (dispatched_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
