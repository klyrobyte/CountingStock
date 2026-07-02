# R.I.S.K.I — IoT Gate Control System: AI Coding Agent Specification Prompt
### Version 4 — Webhook-per-Machine Routing + Machine-Grouped QR Provisioning + Gate.ino Additive Network Trigger

> **Migration note (v3 → v4):** v3's `@betogate` used a flat `qr_code_id → socket` map and a flat QR list in the provisioning UI. v4 replaces this with a **hierarchical webhook system**: every machine gets an auto-generated webhook route, the provisioning portal groups QR selection **by machine**, and each ESP32 is provisioned against a specific webhook path (ideally one QR per ESP32). Gate.ino's actual gate/lock/session logic is **completely unchanged** — the only new thing is a network trigger that calls the exact same `handleScan()` function a physical scan already calls.

---

## 🧠 Agent Role

You are a **Senior IoT Architect & Full-Stack Developer (Tier-1 Industry Level)** with deep expertise in:
- Embedded C++ (ESP32/Arduino ecosystem)
- WebSerial API integration for Next.js/React frontends
- Scalable real-time backend architecture (TCP/IP persistent connections + HTTP webhook routing)
- Hardware-software integration (relay modules, solenoid locks, ESP32 GPIO)

You will analyze the full system flow described below, then implement **only the missing or incomplete pieces** as surgical, additive changes. You must **never overwrite, delete, or restructure any existing stable business logic**.

---

## ⚠️ CRITICAL CONSTRAINT RULES (Read Before Every Edit)

> These are hard rules. Violating any of them is not acceptable.

| # | Rule |
|---|------|
| 1 | **DO NOT TOUCH** `/station/login` authentication logic or existing QR Privileges. |
| 2 | **DO NOT TOUCH** the main Backend's database logic, RBAC handler, machine/factory master data schema, or API routes between App Server ↔ Backend. The webhook system only **reads** existing machine/QR registries — it never creates or alters their schema. |
| 3 | **DO NOT TOUCH** `@gatelogic` — the existing stock counting / pallet validation flow on `http://localhost:5173/station/dashboard` is strictly off-limits. |
| 4 | All changes are **additive only** — new files, new services, new fields, new endpoints. Never modify a working function body unless strictly appending to it (e.g., adding a post-success hook). |
| 5 | The provisioning flow must strictly use **USB/Serial (WebSerial) communication** on the provisioning portal (`:4001` / `/station/provisioning`). No Captive Portals, no ESP32-hosted web servers. |
| 6 | **DO NOT TOUCH** any existing state-machine logic in `Gate.ino` — `enum SystemState`, timing constants, `setRelay()`, `enterState()`, `handleConfirmedLsChange()`, `handleScan()`, or the Serial `"scan"` command path must remain **100% byte-for-byte identical**. The webhook integration is a pure addition: new includes, new globals, new functions, plus **at most one appended line each** at the very end of `setup()` and the very end of `loop()`. |
| 7 | If a decision point is ambiguous, **add a comment and stop**. Never make an assumption that alters business logic. |

---

## 📐 System Architecture Overview

```
[PROVISIONING FLOW — Port 4001 or /station/provisioning (same UI, two routes)]
        │
   (USB-C Cable)
        ▼
   [ESP32 Unit] ◄── WebSerial writes: WiFi + Machine + QR(s) + generated webhook_path
        │
        ▼
   [NVS Flash] — config persists across reboot
=============================================================================
        │
[OPERATIONAL FLOW]
        │
[User Device / Scanner]
        │
        ▼
[http://localhost:5173/station/dashboard] ← DO NOT TOUCH (Scanning logic, @gatelogic)
        │
        ▼
[R.I.S.K.I API Layer (:3001)] ─► Validation Success!
        │
        └──────────────────────► [Auto-Generated Machine Webhook] ◄── @machinewebhook (NEW)
                                   POST /webhook/{machine_code}/{qr_id}
                                   e.g. POST /webhook/mc0203/qr-1003
                                        │
                                        ▼
                               [@betogate — TCP Persistent Layer :4000]
                             (resolves webhook_path → registered ESP32 socket)
                                        │
                          ┌─────────────┴─────────────┐
                          ▼                           ▼
                    [ESP32 #1 · Gate.ino]        [ESP32 #N · Gate.ino]
              listening on mc0203/qr-1003      listening on mc0107/qr-2210
                          │                           │
             maintainGateNetwork() → handleScan()  (same, 100% untouched state machine)
                          │
                    [5V Relay Module] (GPIO 18, untouched logic)
                          │
                [Electric Solenoid Lock]
```

---

## 🔤 Machine Code & Webhook Naming Convention

Every physical machine already exists in the (untouched) machine registry as a **line code + factory/station code**, e.g. line `MC2`, factory/station `03`. The webhook module normalizes this into a single lowercase, dash-free path segment:

| Concept | Example |
|---|---|
| Raw machine identity | line `MC2` + factory `03` |
| Normalized `machine_code` (display) | `MC0203` |
| Webhook path segment (lowercase) | `mc0203` |
| Machine-level webhook (all QRs on this machine) | `POST /webhook/mc0203` |
| QR-scoped webhook (recommended — one ESP32, one QR) | `POST /webhook/mc0203/qr-1003` |

**Rule:** if an ESP32 is provisioned against exactly **one** QR, the portal generates the QR-scoped path (`/webhook/{machine_code}/{qr_id}`) — this is the **designed, recommended** shape. If an ESP32 is provisioned against **multiple** QRs (supported, but not the primary design target), the portal falls back to the machine-level path (`/webhook/{machine_code}`), and `@betogate` includes the triggering `qr_code_id` inside the `OPEN_GATE` payload for logging/debugging purposes — Gate.ino does not need to inspect it, since routing to the correct socket already happened server-side.

---

## 📖 Reference Definitions (@ Tags)

### `@gatelogic` — Existing Gate Trigger Logic ✅ STABLE

The user-facing scan flow that already works, unchanged:
1. User scans QR code on `http://localhost:5173/station/dashboard`.
2. System validates the scan (pallet count, privileges).
3. If validation passes → success response is returned to the frontend.

**What changes (additively):** the existing post-success hook (already present since v3) now calls the new webhook resolver instead of the old flat `dispatchToGateService(qr)`:

```javascript
// Existing code... (validation logic itself is UNTOUCHED)
if (scanValidationPassed) {
  // ADDITIVE HOOK (updated in v4 to route through @machinewebhook / @betogate)
  triggerMachineWebhook({ machine_code: scannedMachineCode, qr_code_id: scannedQrCode });

  return res.status(200).json({ message: "Scan berhasil" });
}
```

---

### `@devportal` — Machine-Grouped USB Zero-Touch Provisioning (`:4001` / `/station/provisioning`) 🔴 UPDATED (v4)

Both `http://localhost:4001` and `/station/provisioning` serve the **same** provisioning dashboard.

**The Setup Flow Goal:**
1. Plug new ESP32 into laptop via **USB-C**.
2. Open the provisioning dashboard (`:4001` or `/station/provisioning`).
3. User clicks **"Connect ESP32"** — triggers `navigator.serial.requestPort()`.
4. User fills **WiFi SSID / Password** and **IP Server Gate** (defaults to `localhost`, the machine running `@betogate`'s TCP server on port 4000) — unchanged from v3.
5. **NEW — "Pilih Machine":** portal fetches the machine list from `GET /api/machines` (read-only, existing registry) and renders it as a selectable grid/list of `machine_code` values (e.g. `MC0203`).
6. **UPDATED — "Pilih QR Codes (Multi-select)":** this section is now **scoped to the selected machine**. Selecting a machine triggers `GET /api/qr?machine_code=MC0203`, replacing the old flat QR list with only the QRs registered under that machine. The multi-select UI pattern itself (search box, cards, checkbox/selected state) mirrors the existing `qr-privileges` UI, same as v3.
7. Multi-select is still supported, but the UI should nudge toward the recommended design: *"Direkomendasikan: 1 QR per ESP32 untuk performa & isolasi terbaik."*
8. A live preview shows the webhook path that will be generated, e.g. `Webhook aktif: /webhook/mc0203/qr-1003`.
9. User clicks **"Simpan & Hubungkan"** → port 4001 sends a JSON payload over WebSerial to the ESP32. ESP32 saves this to NVS flash memory, reboots, and comes online within 30 seconds.

**Provisioning Payload Example (sent over WebSerial):**
```json
{
  "cmd": "config",
  "wifi_ssid": "FactoryNet",
  "wifi_pass": "secret",
  "server_ip": "192.168.1.100",
  "port": 4000,
  "machine_code": "mc0203",
  "listen_qrs": ["qr-1003"],
  "webhook_path": "/webhook/mc0203/qr-1003"
}
```

---

### `@machinewebhook` — Auto-Provisioned Machine Webhooks 🔴 NEW (v4)

An additive backend module, separate from the RBAC/DB core (rule #2), responsible for:
1. **Route generation:** whenever a machine exists in the (untouched, read-only) machine registry, this module exposes:
   - `POST /webhook/{machine_code}` — machine-level trigger.
   - `POST /webhook/{machine_code}/{qr_id}` — QR-scoped trigger (recommended shape).
2. **Resolution order:** when `triggerMachineWebhook({ machine_code, qr_code_id })` fires, it first checks if a QR-scoped route (`/webhook/{machine_code}/{qr_code_id}`) has a registered ESP32 socket; if not, it falls back to the machine-level route (`/webhook/{machine_code}`).
3. **Forwarding:** on a hit, it calls into `@betogate` to send `OPEN_GATE` down the matched TCP socket.

This module does not own any new database tables of record — it can keep its route↔socket mapping in-memory (same pattern as `@betogate`'s original socket map), sourcing machine/QR *names* from the existing read-only APIs only.

---

### `@betogate` — Backend-to-Gate TCP Integration Service 🔴 UPDATED (v4)

The persistent TCP layer connecting the backend to the physical ESP32s. Protocol is **newline-delimited JSON** in both directions (one JSON object per line).

1. **Connection Registration:** when an ESP32 connects to `@betogate` via TCP (port 4000), it sends a handshake:
   ```json
   {"type":"register","mac":"AA:BB:CC:11:22:33","machine_code":"mc0203","webhook_path":"/webhook/mc0203/qr-1003"}
   ```
2. **In-Memory Mapping:** `@betogate` stores an active socket map keyed by `webhook_path` (not raw `qr_code_id` anymore):
   `webhookPath -> Socket`, e.g. `"/webhook/mc0203/qr-1003" -> Socket(ESP_MAC_1)`.
3. **Trigger Event:** `@machinewebhook` calls `@betogate` with the resolved `webhook_path` (and, for logging, the original `qr_code_id`).
4. **Action:** `@betogate` finds the TCP socket linked to that `webhook_path` and sends:
   ```json
   {"cmd":"OPEN_GATE","qr_code_id":"QR-1003"}
   ```

---

### `@karakurigate` — Physical ESP32 + Relay Firmware (Gate.ino) 🟡 ADDITIVE INTEGRATION ONLY

`Gate.ino` (currently at v6.1, "Inverted LS Fix") already contains the **complete, working** gate/session state machine — pallet detection, relay control, alarm handling, and a Serial `"scan"` command used for local/manual testing. **None of that logic changes in v4.**

What gets added, purely additively, on top of the untouched file:

* **Boot Phase (appended to the end of `setup()`):** load config from NVS. If NVS is empty, block and wait for a provisioning JSON payload over Serial (same shape as `@devportal`'s payload above); on receipt, write to NVS and `ESP.restart()`. If NVS already has config, proceed to connect.
* **Network Phase (new functions, called by ONE appended line at the end of `loop()`):** maintain WiFi connection, maintain a TCP connection to `@betogate`, send the `register` handshake once connected, and continuously read for `{"cmd":"OPEN_GATE"}` on that socket.
* **Trigger Phase:** when `OPEN_GATE` is received over the network, the new code calls the **existing, untouched** `handleScan()` function directly — this is functionally identical to a human typing `"scan"` over Serial. The old Serial `"scan"` path is **left in place, untouched**, for local bench testing; it simply stops being the primary trigger source once the ESP32 is deployed and networked.

*Note: still no web server or captive portal libraries — only a WiFi station connection and a TCP client socket back to `@betogate`.*

A concrete additive patch implementing exactly this (`Gate.ino` v6.2) is provided alongside this spec — see `Gate_v6.2_webhook_integration.ino`. Every line that existed in v6.1 is reproduced unmodified; all new code is clearly marked with `// v6.2 ADD` comments and lives in new functions plus the two permitted single-line appends.

---

## 🎯 Tasks to Implement

### Challenge 1 — Provisioning Portal Update (`:4001` / `/station/provisioning`)

1. Keep the existing "Connect ESP32" WebSerial flow and WiFi/IP fields (unchanged from v3).
2. Add a **"Pilih Machine"** selector, populated from `GET /api/machines`.
3. Change **"Pilih QR Codes (Multi-select)"** to be scoped by the selected machine (`GET /api/qr?machine_code=...`), reusing the existing `qr-privileges` card/search UI pattern.
4. Show a live webhook-path preview based on current selection (single QR → `/webhook/{mc}/{qr}`; multi QR → `/webhook/{mc}`).
5. On **"Simpan & Hubungkan"**, serialize the full payload (WiFi + `machine_code` + `listen_qrs` + `webhook_path`) and write it to the active Serial port.

### Challenge 2 — `@machinewebhook` Route Generator (New, Additive Backend Module)

1. Expose `POST /webhook/{machine_code}` and `POST /webhook/{machine_code}/{qr_id}`.
2. Implement `triggerMachineWebhook({ machine_code, qr_code_id })`: resolve QR-scoped path first, fall back to machine-level path, then forward to `@betogate`.
3. Read machine/QR display data only from existing, untouched read-only endpoints — do not add new DB tables of record.

### Challenge 3 — `@betogate` TCP Server Update

1. Update the socket map to be keyed by `webhook_path` instead of raw `qr_code_id`.
2. Update the handshake parser to read `machine_code` + `webhook_path` from the ESP32's `register` message.
3. Implement the forwarding function used by `@machinewebhook` to send `{"cmd":"OPEN_GATE","qr_code_id": "..."}` down the matched socket.

### Challenge 4 — `@gatelogic` Hook Update (Still Additive Only)

Update the existing post-success hook (do not touch the validation logic around it) to call `triggerMachineWebhook(...)` instead of the old flat dispatcher, per the code snippet under `@gatelogic` above.

### Challenge 5 — ESP32 Firmware Additive Patch (`Gate.ino` v6.2)

Implement exactly what's described under `@karakurigate` above: NVS-based provisioning, WiFi + TCP client to `@betogate`, and a network trigger that calls the existing `handleScan()`. Deliver as a patch that preserves v6.1 byte-for-byte, plus new functions, plus one appended line each in `setup()` and `loop()`.

---

## ✅ Acceptance Criteria

1. **Setup Flow:** connecting an ESP32 via USB-C to the laptop and using the `:4001` / `/station/provisioning` dashboard — including selecting a machine and its QR(s) — successfully writes config to the ESP32 without flashing new code.
2. **Webhook Routing:** a machine registered in the existing registry automatically gets a working `/webhook/{machine_code}` route with no manual backend configuration; assigning a QR to an ESP32 automatically makes `/webhook/{machine_code}/{qr_id}` resolve to that ESP32's socket.
3. **Operational Flow:** when a user successfully scans a QR on `http://localhost:5173/station/dashboard`, the specific ESP32 provisioned for that machine/QR combination activates its relay — via the network trigger calling `handleScan()`, not via someone typing `"scan"` over Serial.
4. **Isolation:** the core scanning logic, existing DB schemas, machine/QR master data, and the entire `Gate.ino` state machine (including the Serial `"scan"` path) remain byte-for-byte untouched. The webhook/network layer acts purely as an additional trigger source alongside the existing one.