# R.I.S.K.I — IoT Gate Control System: AI Coding Agent Specification Prompt
### Version 2 — Adds: Zero-Touch Captive Portal Provisioning + NetworkError Fix + QR Device Registration

---

## 🧠 Agent Role

You are a **Senior IoT Architect & Full-Stack Developer (Tier-1 Industry Level)** with deep expertise in:
- Embedded C++ (ESP32/Arduino ecosystem)
- Scalable real-time backend architecture (TCP/IP persistent connections, WebSocket, MQTT)
- RBAC system design for physical access control
- Hardware-software integration (relay modules, solenoid locks, ESP32 GPIO)

You will analyze the full system flow described below, then implement **only the missing or incomplete pieces** as surgical, additive changes. You must **never overwrite, delete, or restructure any existing stable business logic**.

---

## ⚠️ CRITICAL CONSTRAINT RULES (Read Before Every Edit)

> These are hard rules. Violating any of them is not acceptable.

| # | Rule |
|---|------|
| 1 | **DO NOT TOUCH** `/station/login` authentication logic (`@rbacstation` QR Privileges — already stable) |
| 2 | **DO NOT TOUCH** the main Backend's database logic, RBAC handler, or API routes between App Server ↔ Backend |
| 3 | **DO NOT TOUCH** `@gatelogic` — the existing stock counting / pallet validation flow (scan-in/scan-out trigger logic is stable) |
| 4 | **DO NOT TOUCH** existing QR scan and stock counting flows on `/station/scan` |
| 5 | All changes are **additive only** — new files, new services, new fields, new endpoints. Never modify a working function body unless you are strictly appending to it (e.g., adding a post-success hook) |
| 6 | If a decision point is ambiguous, **add a comment and stop**. Never make an assumption that alters business logic |
| 7 | **DO NOT use `fetch()` or any async JS on the ESP32 captive portal setup page** — use only plain HTML `<form method="POST">`. This is the root fix for the `NetworkError when attempting to fetch resource` bug. All ESP32-hosted pages must be pure form-based HTML. |
| 8 | The captive portal firmware section is **additive firmware only** — it does not replace or restructure the existing gate command handling logic in `karakuri_gate_esp32.ino`. The provisioning mode and operational mode are separated by a boot-time config check. |

---

## 📐 System Architecture Overview

Below is the complete system flow as it currently stands and as it will be extended.

```
[User Device / Scanner]
        │
        ▼
[/station/login — @rbacstation]  ← DO NOT TOUCH (auth already stable)
        │
        ▼
[K.I.S.K.I API Layer (App Server)]
        │
        ├──────────────────────► [web (FE)] — Frontend Web App
        │
        ├──────────────────────► [API] ──► [Backend (DB + RBAC)] ──► [Database]
        │                                                   │
        │                                                   ▼
        │                                        [QR RBAC: QR ↔ Station Account mapping]
        │                                        [IN MC — Karakuri Gate (IN side)]
        │                                        [OUT MC — Karakuri Gate (OUT side)]
        │
        └──────────────────────► [gate service] ◄──── @betogate (TO BE BUILT)
                                        │
                                        ▼
                               [TCP/IP Persistent Layer]
                                        │
                          ┌─────────────┴─────────────┐
                          ▼                           ▼
                     [ESP32 #1]                  [ESP32 #N]   ← @esp32id (TO BE BUILT)
                      @karakurigate                @karakurigate
                          │                           │
                     [5V Relay Module]          [5V Relay Module]
                          │                           │
                [Electric Solenoid Lock 12V]  [Electric Solenoid Lock 12V]
                   (needs 12V power supply/converter)
```

---

## 🔩 Physical Hardware Reference (@karakurigate)

The gate hardware that exists in the real world at each Machine Controller (MC) station:

| Component | Spec | Notes |
|-----------|------|-------|
| **Microcontroller** | ESP32 ESP-32 DevKit V1 Board — 30 Pin, DOIT, Type-C | WiFi + Bluetooth, connects via TCP/IP |
| **Relay** | 5V Relay Module (single channel) | Receives GPIO HIGH/LOW signal from ESP32 |
| **Door Lock** | Electric Solenoid Door Lock 12V | Controlled by relay output (NO/NC) |
| **Power** | DC-DC Converter / Power Supply (5V → 12V) | Required to power solenoid from 5V USB supply (TO BE ADDED) |

**Physical wiring flow:**
```
ESP32 GPIO Pin ──► Relay IN pin
Relay COM + NO  ──► Solenoid Lock + 12V Power
GND (shared)    ──► Solenoid Lock GND
```

> See hardware photo: ESP32 DevKit V1 on breakout board + blue 5V relay module + solenoid door lock, currently wired for prototype testing.

---

## 📖 Reference Definitions (@ Tags)

All `@` references used in this document are defined here. Each task must respect these definitions exactly.

### `@gatelogic` — Existing Gate Trigger Logic ✅ STABLE
The user-facing scan flow that already works:
1. User logs in with their account (IN or OUT type) via `/station/login`
2. User scans QR code on `/station/scan`
3. System validates pallet count matches QR master data (e.g., QR configured for 15 pallets → supervisor must load 15 pallets before scan)
4. If validation passes → success response triggers gate open signal
5. Same logic applies for OUT scan (pallet empty → scan OUT → gate opens)

**What is missing**: After step 4 success, the system does NOT yet forward this signal to `@betogate`. That forwarding hook is the Main Challenge.

---

### `@rbacstation` — Station RBAC ✅ STABLE (do not touch)
- `/station/login` processes user authentication based on account type (IN or OUT role)
- Each station account is pre-configured with QR privileges (which QR codes they can scan)
- **Existing**: QR Privileges — an account can only process QR codes registered to their account
- **To be added** (Challenge 2): ESP32 RBAC — each ESP32 is registered to a specific machine, and only users with matching privileges can trigger that ESP32

---

### `@betogate` — Backend-to-Gate Integration Service 🔴 TO BE BUILT
This is the primary missing layer. It sits between the main Backend API and the physical ESP32 devices.

**Responsibilities:**
1. Receive a gate-open request from Backend API (triggered after `@gatelogic` success)
2. Look up which ESP32 device corresponds to the station where the user scanned (by station/MC location)
3. Validate RBAC: confirm the scanning user's account has privilege to trigger that specific ESP32
4. Send a command to the correct ESP32 over the persistent TCP/IP connection
5. Receive acknowledgment from ESP32 and relay status back to the main API

**Input payload expected from Backend:**
```json
{
  "user_id": "string",
  "station_id": "string",
  "machine_id": "string",
  "action": "open_gate",
  "direction": "in | out",
  "qr_code_id": "string",
  "timestamp": "ISO8601"
}
```

**Output (to ESP32):**
```json
{
  "esp32_device_id": "string",
  "command": "OPEN_GATE",
  "duration_ms": 3000,
  "request_id": "string"
}
```

---

### `@esp32id` — ESP32 Device Registry & Identity System 🔴 TO BE BUILT
Each physical ESP32 unit must have a unique, registered identity so `@betogate` can route commands correctly and reject unauthorized requests.

**Registry fields per device:**
```
esp32_device_id   : globally unique string (e.g., "ESP-MC6-IN-001")
machine_id        : FK → which machine/MC this device controls
location_label    : human-readable (e.g., "MC6 - IN Gate")
direction         : "in" | "out"
linked_station_id : FK → which station account is authorized to trigger this device
allowed_user_ids  : array of user IDs with access (from QR privileges)
connection_status : "online" | "offline" | "reconnecting"
last_seen         : timestamp
auth_token        : pre-shared secret or HMAC key for device authentication
```

**Authentication flow:**
1. ESP32 boots → connects to `@betogate` TCP/IP server
2. ESP32 sends handshake: `{ "device_id": "ESP-MC6-IN-001", "auth_token": "sha256-hmac" }`
3. `@betogate` validates device_id exists in registry + token matches
4. If valid: connection is registered as active, device_id stored in connection map
5. If invalid: connection is rejected and closed immediately

---

### `@karakurigate` — Physical ESP32 + Relay + Solenoid System 🟡 PROTOTYPE
The physical gate assembly at each Machine Controller:
- ESP32 listens for `OPEN_GATE` command via TCP
- On valid command: pulls GPIO pin HIGH → activates relay → solenoid unlocks (gate opens)
- After `duration_ms`: pulls GPIO pin LOW → relay deactivates → solenoid re-locks (gate closes)
- Sends acknowledgment: `{ "status": "gate_opened", "device_id": "...", "request_id": "..." }`

---

### `@devportal` — Zero-Touch Captive Portal Provisioning System 🔴 TO BE BUILT (NEW v2)

This is the device onboarding layer. Its purpose is to make registering any new ESP32 device a plug-and-configure operation that takes under 2 minutes with zero hardcoded values per device.

**Problem it solves:**
- Previously, each device needed a unique `.ino` file with hardcoded `DEVICE_ID`, `AUTH_TOKEN`, `WIFI_SSID`, etc. — error-prone and not scalable.
- The `NetworkError when attempting to fetch resource` error on the login/setup page occurs because the ESP32 AsyncWebServer does not return CORS headers, and `fetch()` calls from the browser are blocked by the browser's same-origin policy when the page is served from `192.168.4.1`. **Fix: replace all `fetch()` with plain HTML `<form method="POST" action="/save">` — no CORS needed, zero network errors.**

**How it works:**
1. Flash the **same single `.ino` firmware** to every ESP32 — no per-device customization needed at flash time
2. First boot (no config saved) → ESP32 automatically enters **Setup Mode**
3. In Setup Mode: ESP32 creates a WiFi hotspot → user's laptop/phone connects → browser auto-opens setup page (captive portal pattern)
4. Setup page shows all required fields (pre-filled where possible from MAC address)
5. Admin can also scan a **Provisioning QR** generated from the admin panel to auto-fill all fields in one scan
6. On form submit → ESP32 saves config to NVS (non-volatile flash storage) → reboots into **Operational Mode**
7. In Operational Mode: ESP32 connects to WiFi → TCP connects to `@betogate` → sends self-registration handshake → shows up as "online" in admin panel

**Factory reset / re-provisioning:**
- Hold BOOT button on ESP32 for 5 seconds → clears NVS config → reboots into Setup Mode
- Works identically for all future devices

---

## 🎯 Tasks to Implement

---

### Main Challenge — Wire `@betogate` Into Existing `@gatelogic` Success Hook

**Context:** The existing scan flow on `/station/scan` already returns a success response when pallet count is valid and QR is authenticated. What is missing is: after that success, the system must call `@betogate` to physically open the gate at the user's real-world station.

**What to build:**
1. In the existing Backend API success handler (after scan validation passes), **add a post-success hook** (do not alter the validation logic itself) that dispatches an async call to `@betogate`
2. The hook must pass: `user_id`, `station_id`, `machine_id`, `direction` (in/out), `qr_code_id`
3. The gate open result (success/fail/timeout) must be logged but **must NOT block or fail the existing API response** — fire-and-dispatch pattern (non-blocking)
4. `@betogate` must resolve the correct ESP32 device ID from its registry, validate RBAC, then dispatch `OPEN_GATE` command to the device

**Implementation pattern (pseudocode — adapt to your stack):**
```
// Existing code (DO NOT MODIFY THIS BLOCK):
if (scanValidationPassed) {
  return ApiResponse.success({ message: "Scan berhasil" })
  // ← ADD HOOK BELOW THIS LINE ONLY
}

// NEW — additive only:
dispatchGateOpen({
  user_id, station_id, machine_id, direction, qr_code_id
}) // fire-and-forget, non-blocking, logs internally
```

---

---

### Challenge 0 — Zero-Touch Provisioning: Captive Portal + Auto-Setup (`@devportal`) 🔴 NEW

> **This challenge must be implemented before Challenge 1.** The provisioning system is what makes Challenge 1 scalable — without it, each ESP32 needs a unique firmware flash per unit.

---

#### 0A — Root Cause Fix: `NetworkError when attempting to fetch resource`

**Diagnosis:** The setup/login page hosted on the ESP32's local web server at `http://192.168.4.1` uses `fetch()` (JavaScript) to POST data. Browsers block this via CORS policy because the ESP32 doesn't return `Access-Control-Allow-Origin` headers. Additionally, if the device running the browser is on HTTPS, loading content from an HTTP-only ESP32 triggers mixed-content blocking.

**Fix (mandatory — apply to ALL ESP32-hosted HTML pages):**

```
Rule: ESP32-hosted HTML pages must NEVER use fetch(), XMLHttpRequest, or axios.
Rule: All user input must be submitted via <form method="POST" action="/endpoint">.
Rule: ESP32 HTTP server must add these headers to EVERY response:
      Access-Control-Allow-Origin: *
      Access-Control-Allow-Methods: GET, POST, OPTIONS
      Access-Control-Allow-Headers: Content-Type
```

**Correct HTML form pattern (use this everywhere on ESP32-hosted pages):**
```html
<!-- ✅ CORRECT — No fetch(), no CORS issue, works on all browsers -->
<form method="POST" action="/save">
  <input type="text" name="wifi_ssid" placeholder="WiFi SSID" required>
  <input type="password" name="wifi_pass" placeholder="WiFi Password">
  <input type="text" name="device_id" placeholder="Device ID">
  <input type="text" name="server_ip" placeholder="Gate Server IP">
  <input type="number" name="server_port" value="4000">
  <input type="text" name="auth_token" placeholder="Auth Token">
  <select name="direction">
    <option value="in">IN Gate</option>
    <option value="out">OUT Gate</option>
  </select>
  <input type="text" name="location_label" placeholder="e.g. MC6 - IN Gate">
  <button type="submit">Save & Connect</button>
</form>

<!-- ❌ WRONG — Will cause NetworkError -->
<script>
  fetch('/save', { method: 'POST', body: JSON.stringify(data) }) // DO NOT USE
</script>
```

---

#### 0B — ESP32 Captive Portal Firmware Addition

**This is additive firmware code.** It must be added to `karakuri_gate_esp32.ino` as a separate boot-mode block — it does not replace or change the existing gate command handling logic.

**Required Arduino Libraries (install via Library Manager):**
- `ESPAsyncWebServer` by Me-No-Dev (search: "ESP Async WebServer")
- `AsyncTCP` by Me-No-Dev (dependency of above)
- `DNSServer.h` (built-in with ESP32 Arduino core)
- `Preferences.h` (built-in — for NVS storage)
- `ArduinoJson.h` ≥ v6 (already required from Challenge 1)

**Firmware structure (two-mode architecture):**

```cpp
// ─────────────────────────────────────────────────────
// MODE DETECTION (runs at boot — do not modify existing gate logic below)
// ─────────────────────────────────────────────────────

#include <Preferences.h>
#include <DNSServer.h>
#include <ESPAsyncWebServer.h>
#include <WiFi.h>
#include <ArduinoJson.h>

Preferences prefs;
DNSServer dnsServer;
AsyncWebServer portalServer(80);

// Loaded from NVS at boot:
String DEVICE_ID      = "";
String AUTH_TOKEN     = "";
String SERVER_IP      = "";
int    SERVER_PORT    = 4000;
String WIFI_SSID_CFG  = "";
String WIFI_PASS_CFG  = "";
String DIRECTION      = "";
String LOCATION_LABEL = "";

#define RELAY_PIN          26
#define FACTORY_RESET_PIN   0   // BOOT button on DevKit V1
#define GATE_OPEN_DURATION_MS 3000

bool isConfigured = false;

void setup() {
  Serial.begin(115200);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
  pinMode(FACTORY_RESET_PIN, INPUT_PULLUP);

  // ── Factory reset check (hold BOOT button 5s at power-on) ──
  if (digitalRead(FACTORY_RESET_PIN) == LOW) {
    delay(5000);
    if (digitalRead(FACTORY_RESET_PIN) == LOW) {
      clearConfig();
      ESP.restart();
    }
  }

  // ── Load config from NVS ──
  isConfigured = loadConfig();

  if (!isConfigured) {
    startProvisioningMode();   // ← NEW: captive portal
  } else {
    startOperationalMode();    // ← EXISTING gate logic (unchanged)
  }
}

void loop() {
  if (!isConfigured) {
    dnsServer.processNextRequest();  // keeps captive portal DNS alive
  } else {
    operationalLoop();               // existing reconnect + heartbeat loop
  }
}
```

**`loadConfig()` — reads saved settings from NVS:**
```cpp
bool loadConfig() {
  prefs.begin("riski-cfg", true); // read-only
  DEVICE_ID      = prefs.getString("device_id", "");
  AUTH_TOKEN     = prefs.getString("auth_token", "");
  SERVER_IP      = prefs.getString("server_ip", "");
  SERVER_PORT    = prefs.getInt("server_port", 4000);
  WIFI_SSID_CFG  = prefs.getString("wifi_ssid", "");
  WIFI_PASS_CFG  = prefs.getString("wifi_pass", "");
  DIRECTION      = prefs.getString("direction", "");
  LOCATION_LABEL = prefs.getString("location", "");
  prefs.end();
  return (DEVICE_ID.length() > 0 && AUTH_TOKEN.length() > 0 &&
          SERVER_IP.length() > 0 && WIFI_SSID_CFG.length() > 0);
}
```

**`saveConfig()` — called after form submit:**
```cpp
void saveConfig(String device_id, String auth_token, String server_ip,
                int server_port, String wifi_ssid, String wifi_pass,
                String direction, String location) {
  prefs.begin("riski-cfg", false); // read-write
  prefs.putString("device_id",   device_id);
  prefs.putString("auth_token",  auth_token);
  prefs.putString("server_ip",   server_ip);
  prefs.putInt("server_port",    server_port);
  prefs.putString("wifi_ssid",   wifi_ssid);
  prefs.putString("wifi_pass",   wifi_pass);
  prefs.putString("direction",   direction);
  prefs.putString("location",    location);
  prefs.end();
}

void clearConfig() {
  prefs.begin("riski-cfg", false);
  prefs.clear();
  prefs.end();
  Serial.println("[RESET] Config cleared. Rebooting to Setup Mode.");
}
```

**`startProvisioningMode()` — captive portal setup:**
```cpp
void startProvisioningMode() {
  // Generate a unique AP name from MAC address
  uint8_t mac[6];
  WiFi.macAddress(mac);
  String apName = "RISKI-Gate-Setup-" +
                  String(mac[4], HEX) + String(mac[5], HEX);
  apName.toUpperCase();

  WiFi.mode(WIFI_AP);
  WiFi.softAP(apName.c_str());
  IPAddress apIP(192, 168, 4, 1);

  // DNS: redirect ALL domains to 192.168.4.1 (captive portal trick)
  dnsServer.start(53, "*", apIP);

  Serial.println("[SETUP] AP started: " + apName);
  Serial.println("[SETUP] Connect to this WiFi, then open any website.");

  // ── Serve the setup HTML page ──
  portalServer.on("/", HTTP_GET, [apName](AsyncWebServerRequest *req) {
    // Pre-suggest device ID from MAC
    uint8_t m[6]; WiFi.macAddress(m);
    String suggestedId = "ESP-MC-" + String(m[4], HEX) + String(m[5], HEX);
    suggestedId.toUpperCase();

    // IMPORTANT: Pure HTML form — NO fetch(), NO JS async calls
    String html = R"rawhtml(
<!DOCTYPE html><html><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>RISKI Gate Setup</title>
<style>
  body { font-family: sans-serif; background: #0f0f0f; color: #eee;
         max-width: 480px; margin: 40px auto; padding: 20px; }
  h2   { color: #4fc3f7; margin-bottom: 4px; }
  p    { color: #888; font-size: 13px; margin-top: 0; }
  label { display: block; margin-top: 14px; font-size: 13px; color: #aaa; }
  input, select { width: 100%; padding: 10px; margin-top: 4px;
                  background: #1e1e1e; border: 1px solid #333;
                  border-radius: 6px; color: #fff; box-sizing: border-box; }
  .section { border: 1px solid #222; border-radius: 8px;
             padding: 16px; margin-top: 20px; }
  .section-title { color: #4fc3f7; font-size: 12px; font-weight: bold;
                   text-transform: uppercase; letter-spacing: 1px; }
  button { width: 100%; padding: 14px; margin-top: 24px;
           background: #4fc3f7; color: #000; border: none;
           border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; }
  .qr-hint { background: #1a2a1a; border: 1px solid #2a4a2a;
              border-radius: 6px; padding: 12px; margin-top: 20px;
              font-size: 12px; color: #8bc34a; }
  .device-badge { background: #1e1e1e; border: 1px solid #333; border-radius: 6px;
                  padding: 8px 12px; font-family: monospace; color: #4fc3f7; }
</style>
</head><body>
<h2>⚙️ RISKI Gate Setup</h2>
<p>Detected device: <span class="device-badge">)rawhtml" + apName + R"rawhtml(</span></p>

<div class="qr-hint">
  💡 <strong>Shortcut:</strong> Scan the Provisioning QR from the Admin Panel to auto-fill all fields below.
  <br><br>
  <input type="text" id="qr_input" placeholder="Paste QR payload here (riski://provision?...)"
         oninput="parseQR(this.value)" style="margin-top:8px;">
</div>

<!-- Pure HTML form — no fetch() — this is what fixes the NetworkError -->
<form method="POST" action="/save">

  <div class="section">
    <div class="section-title">📶 WiFi Network</div>
    <label>WiFi SSID</label>
    <input type="text" name="wifi_ssid" id="wifi_ssid" placeholder="Your factory WiFi name" required>
    <label>WiFi Password</label>
    <input type="password" name="wifi_pass" id="wifi_pass" placeholder="WiFi Password">
  </div>

  <div class="section">
    <div class="section-title">🖥️ Gate Server</div>
    <label>Server IP Address</label>
    <input type="text" name="server_ip" id="server_ip" placeholder="e.g. 192.168.1.100" required>
    <label>Server Port</label>
    <input type="number" name="server_port" id="server_port" value="4000" required>
  </div>

  <div class="section">
    <div class="section-title">🔌 Device Identity</div>
    <label>Device ID (unique per unit)</label>
    <input type="text" name="device_id" id="device_id"
           value=")rawhtml" + suggestedId + R"rawhtml(" placeholder="e.g. ESP-MC6-IN-001" required>
    <label>Auth Token (from Admin Panel)</label>
    <input type="text" name="auth_token" id="auth_token" placeholder="Paste token from admin" required>
    <label>Gate Direction</label>
    <select name="direction" id="direction">
      <option value="in">IN Gate</option>
      <option value="out">OUT Gate</option>
    </select>
    <label>Location Label</label>
    <input type="text" name="location_label" id="location_label"
           placeholder="e.g. MC6 - IN Gate">
  </div>

  <button type="submit">💾 Save & Connect</button>
</form>

<script>
// QR payload parser — fills form fields from provisioning QR
// Format: riski://provision?server=IP&port=PORT&device_id=X&token=Y&direction=in&label=Z
function parseQR(val) {
  try {
    var url = val.replace('riski://provision?', 'https://x.x/?');
    var p = new URL(url).searchParams;
    if (p.get('server'))    document.getElementById('server_ip').value    = p.get('server');
    if (p.get('port'))      document.getElementById('server_port').value   = p.get('port');
    if (p.get('device_id')) document.getElementById('device_id').value     = p.get('device_id');
    if (p.get('token'))     document.getElementById('auth_token').value    = p.get('token');
    if (p.get('direction')) document.getElementById('direction').value     = p.get('direction');
    if (p.get('label'))     document.getElementById('location_label').value= p.get('label');
    if (p.get('ssid'))      document.getElementById('wifi_ssid').value     = p.get('ssid');
  } catch(e) {}
}
</script>
</body></html>
)rawhtml";
    req->send(200, "text/html", html);
  });

  // ── Handle form POST /save ── (pure form submit, no fetch)
  portalServer.on("/save", HTTP_POST, [](AsyncWebServerRequest *req) {
    String device_id     = req->getParam("device_id",     true)->value();
    String auth_token    = req->getParam("auth_token",    true)->value();
    String server_ip     = req->getParam("server_ip",     true)->value();
    int    server_port   = req->getParam("server_port",   true)->value().toInt();
    String wifi_ssid     = req->getParam("wifi_ssid",     true)->value();
    String wifi_pass     = req->hasParam("wifi_pass", true)
                           ? req->getParam("wifi_pass", true)->value() : "";
    String direction     = req->getParam("direction",     true)->value();
    String location      = req->hasParam("location_label", true)
                           ? req->getParam("location_label", true)->value() : "";

    saveConfig(device_id, auth_token, server_ip, server_port,
               wifi_ssid, wifi_pass, direction, location);

    // Success page → auto-reboots after 3s
    req->send(200, "text/html",
      "<html><body style='font-family:sans-serif;background:#0f0f0f;color:#eee;"
      "text-align:center;padding:60px'>"
      "<h2 style='color:#8bc34a'>✅ Config Saved!</h2>"
      "<p>Device will now connect to <strong>" + wifi_ssid + "</strong></p>"
      "<p style='color:#888'>Rebooting in 3 seconds...</p>"
      "<script>setTimeout(function(){}, 3000);</script>"
      "</body></html>");

    delay(3000);
    ESP.restart();
  });

  // Redirect all unknown paths to setup page (captive portal catch-all)
  portalServer.onNotFound([](AsyncWebServerRequest *req) {
    req->redirect("http://192.168.4.1/");
  });

  portalServer.begin();
}
```

---

#### 0C — Admin Panel: Provisioning QR Generator (Additive — new page only)

Add a new admin page at `/admin/esp32-devices/provision` (new route, do not modify existing admin routes):

**What it does:** Admin fills in the device config in the admin panel, clicks Generate → gets a QR code. They bring their laptop to the new ESP32, connect to its WiFi hotspot, open the setup page, scan/paste the QR → all fields auto-fill in one step.

**Provisioning QR URL format:**
```
riski://provision?server=192.168.1.100&port=4000&device_id=ESP-MC6-IN-001&token=HMAC_TOKEN_HERE&direction=in&label=MC6+-+IN+Gate&ssid=FactoryWiFi
```

**Backend endpoint to generate provisioning payload (new route only):**
```
POST /admin/esp32-devices/generate-provision-qr

Request body:
{
  "machine_id": 6,
  "direction": "in",
  "location_label": "MC6 - IN Gate",
  "wifi_ssid": "FactoryWiFi"     // optional pre-fill
}

Response:
{
  "device_id": "ESP-MC6-IN-001",    // auto-generated from machine + direction
  "auth_token": "generated-hmac",   // server generates this, stores in esp32_devices
  "qr_payload": "riski://provision?server=...",
  "qr_image_base64": "data:image/png;base64,..."  // ready to display in UI
}
```

**Logic:**
1. Server auto-generates a unique `device_id` from `ESP-MC{machine_id}-{direction}-{sequence}`
2. Server generates a cryptographically random `auth_token` (32 bytes, hex-encoded)
3. Inserts a **pending** record into `esp32_devices` with `connection_status = 'pending_provision'`
4. Returns the provisioning QR payload and a scannable QR image
5. When the ESP32 later connects and sends handshake, the record is updated to `online`

---

#### 0D — Updated Boot Flow Diagram

```
[Power On]
      │
      ▼
[Load NVS Config]
      │
      ├── Config missing or incomplete?
      │         │
      │         ▼  YES
      │   [SETUP MODE — Captive Portal]
      │   • ESP32 creates WiFi AP: "RISKI-Gate-Setup-XXXX"
      │   • DNS server redirects all requests → 192.168.4.1
      │   • User connects laptop to that WiFi
      │   • Browser auto-opens OR navigate to 192.168.4.1
      │   • Admin scans Provisioning QR OR fills form manually
      │   • Form POSTs to /save (pure HTML — no fetch, no NetworkError)
      │   • Config saved to NVS → ESP32 reboots
      │
      └── Config complete?
                │
                ▼  YES
          [OPERATIONAL MODE]
          • Connect to WiFi (WIFI_SSID_CFG / WIFI_PASS_CFG)
          • TCP connect to @betogate (SERVER_IP:SERVER_PORT)
          • Send auth handshake with DEVICE_ID + AUTH_TOKEN
          • Wait for OPEN_GATE commands
          • Send heartbeat every 30s
          • Auto-reconnect on drop (exponential backoff, max 60s)
```

---

#### 0E — Re-Provisioning & Error Recovery

| Scenario | Recovery Action |
|----------|-----------------|
| Wrong WiFi password saved | Hold BOOT button 5s → clears NVS → enters Setup Mode |
| Wrong server IP saved | Hold BOOT button 5s → enters Setup Mode |
| Auth token revoked by admin | Admin regenerates token → sends new Provisioning QR → factory reset device |
| New device, same location (replacement) | Admin generates new QR with same `device_id` → new token → flash + provision |
| Device moved to different MC | Hold BOOT button 5s → reprovision with new QR for new machine_id |

---

### Challenge 1 — Scalable ESP32 ↔ Backend TCP/IP Integration

**Goal:** Design and implement a highly scalable, persistent connection strategy allowing `@betogate` to maintain connections to hundreds of ESP32 devices simultaneously, with device authentication, reconnection logic, and efficient command routing.

#### 1A — Backend Gate Service (`@betogate` TCP Server)

Build a standalone microservice (Node.js/Go/Python — match your existing stack) that:

- Opens a TCP server on a dedicated port (e.g., `:4000`)
- Maintains an in-memory connection map: `device_id → socket`
- On new connection: waits for handshake JSON, validates against `@esp32id` registry
- On valid handshake: registers device as online in DB, stores socket in map
- On disconnect: marks device offline, removes from map, logs timestamp
- Exposes an internal HTTP API endpoint for the main Backend to call:
  - `POST /internal/gate/open` — receives gate-open payload, looks up device socket, sends command
- Handles ACK from ESP32 and logs result
- Must handle: reconnection floods, duplicate device_id attempts, stale connections (heartbeat/ping every 30s)

**Scalability requirements:**
- Must support 100–500 concurrent ESP32 connections without degradation
- Use async I/O (event loop, not thread-per-connection)
- Connection map must be queryable (status check endpoint: `GET /internal/devices/status`)

#### 1B — ESP32 Firmware (C++ / Arduino IDE)

Write complete, production-ready Arduino sketch for the ESP32 DevKit V1:

```
File: karakuri_gate_esp32/karakuri_gate_esp32.ino
```

> **v2 Note (Challenge 0 integration):** After Challenge 0 is implemented, there is **NO per-unit CONFIG SECTION to manually edit at flash time**. All values (`DEVICE_ID`, `AUTH_TOKEN`, `SERVER_IP`, `WIFI_SSID`, etc.) are loaded from NVS at boot after the captive portal provisioning step. The same compiled binary can be flashed to every ESP32 unit. Only `RELAY_PIN` and `GATE_OPEN_DURATION_MS` remain as compile-time constants since they are hardware-fixed across all units.

```cpp
// ─── HARDWARE CONSTANTS (same for all units — do not remove) ───
#define RELAY_PIN             26    // GPIO pin wired to relay IN
#define GATE_OPEN_DURATION_MS 3000  // How long gate stays open (ms)
#define FACTORY_RESET_PIN     0     // BOOT button for factory reset
// All other config (WiFi, server IP, device ID, auth token) loaded from NVS
// via loadConfig() in Challenge 0 — not hardcoded here
```

**Required functions (Operational Mode — these are called only when `isConfigured == true`):**
1. `startOperationalMode()` — entry point: calls `connectWiFi()` then `connectGateServer()`
2. `operationalLoop()` — called from `loop()`: polls TCP for incoming data, sends heartbeat on timer
3. `connectWiFi()` — connect using NVS values, retry with LED blink on attempt
4. `connectGateServer()` — TCP connect to `SERVER_IP:SERVER_PORT`, send handshake JSON, wait for ACK
5. `sendHeartbeat()` — sends `{"type":"ping","device_id":"..."}` every 30s to keep connection alive
6. `handleIncomingCommand(String payload)` — parse JSON command, validate `request_id`, call `openGate()`
7. `openGate(int duration_ms)` — pulls RELAY_PIN HIGH for `duration_ms`, then LOW, sends ACK
8. `sendAck(String request_id, String status)` — sends result back to server
9. `reconnectLoop()` — if TCP connection drops, reconnect every 5s with exponential backoff (max 60s)

**Command JSON the firmware must parse (from `@betogate`):**
```json
{
  "command": "OPEN_GATE",
  "duration_ms": 3000,
  "request_id": "uuid-string"
}
```

**ACK JSON the firmware must send back:**
```json
{
  "type": "ack",
  "device_id": "ESP-MC6-IN-001",
  "request_id": "uuid-string",
  "status": "gate_opened",
  "timestamp": 1234567890
}
```

**Heartbeat JSON:**
```json
{ "type": "ping", "device_id": "ESP-MC6-IN-001" }
```

**Arduino Libraries required:**
- `WiFi.h` (built-in ESP32 core)
- `WiFiClient.h` (built-in)
- `ArduinoJson.h` (install via Library Manager: ArduinoJson by Benoit Blanchon ≥ v6)

---

### Challenge 2 — ESP32 Machine Controller RBAC (`@esp32id` + `@betogate` Validation)

**Context:** Currently QR Privileges already restrict which QR codes a station account can scan (existing, do not touch). The new RBAC layer adds a second enforcement point: even if a QR scan succeeds, the gate command must be validated against which ESP32 the user is allowed to trigger.

**What to build:**

#### 2A — ESP32 Device Registry (Database Schema — additive migration only)

Add new tables (do not modify existing tables):

```sql
-- New table: esp32 device registry
CREATE TABLE esp32_devices (
  id            VARCHAR(64) PRIMARY KEY,   -- e.g. "ESP-MC6-IN-001"
  machine_id    INT NOT NULL,              -- FK to existing machines table
  station_id    INT NOT NULL,              -- FK to existing stations table
  direction     ENUM('in','out') NOT NULL,
  location_label VARCHAR(128),
  auth_token    VARCHAR(256) NOT NULL,     -- HMAC pre-shared key
  is_active     BOOLEAN DEFAULT TRUE,
  last_seen     TIMESTAMP NULL,
  connection_status ENUM('online','offline','reconnecting') DEFAULT 'offline',
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- New table: maps which user accounts can trigger which ESP32 devices
CREATE TABLE esp32_user_privileges (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  esp32_device_id VARCHAR(64) NOT NULL,   -- FK → esp32_devices.id
  user_id       INT NOT NULL,             -- FK → existing users table
  granted_by    INT NOT NULL,             -- FK → admin user who granted this
  granted_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_device_user (esp32_device_id, user_id)
);
```

#### 2B — RBAC Validation Logic in `@betogate`

When `@betogate` receives a `POST /internal/gate/open` request, before dispatching to ESP32:

```
1. Look up esp32_devices WHERE machine_id = req.machine_id AND direction = req.direction
2. If no device found → return error "No ESP32 registered for this machine/direction"
3. If device found but connection_status != "online" → return error "Device offline"
4. Query esp32_user_privileges WHERE esp32_device_id = device.id AND user_id = req.user_id
5. If no privilege record → REJECT with 403 "User not authorized for this gate"
6. If privilege exists → proceed to dispatch OPEN_GATE command to device socket
7. Log all outcomes (success, rejected, device-offline) with full request context
```

#### 2C — Admin Management Endpoints (additive, new routes only)

Add to `@betogate` or expose via main Backend API (whichever fits your existing route structure):

```
GET  /admin/esp32-devices              — List all registered devices with status
POST /admin/esp32-devices              — Register new ESP32 device
PUT  /admin/esp32-devices/:id          — Update device config
GET  /admin/esp32-devices/:id/privileges — List users authorized for a device
POST /admin/esp32-devices/:id/privileges — Grant a user access to a device
DELETE /admin/esp32-devices/:id/privileges/:user_id — Revoke access
GET  /admin/esp32-devices/:id/status   — Real-time connection status
```

---

## 🔄 Complete End-to-End Flow (After Implementation)

```
1. User scans QR on /station/scan (@gatelogic — existing, stable)
      │
      ▼
2. Backend validates: pallet count ✓, QR privileges ✓ (existing, stable)
      │
      ▼
3. Backend returns success response to user (existing, stable — UNCHANGED)
      │  [non-blocking, parallel]
      ▼
4. Backend fires async hook → POST /internal/gate/open to @betogate
   payload: { user_id, station_id, machine_id, direction, qr_code_id }
      │
      ▼
5. @betogate resolves: which ESP32 device handles this machine + direction?
      │
      ▼
6. @betogate validates: does user_id have privilege for this esp32_device_id?
      │
      ├── NO → Log 403 rejection, do not trigger gate
      │
      └── YES ▼
7. @betogate sends OPEN_GATE command to ESP32 via persistent TCP socket
   { "command": "OPEN_GATE", "duration_ms": 3000, "request_id": "uuid" }
      │
      ▼
8. ESP32 (@karakurigate) receives command
   → validates command structure
   → pulls GPIO26 HIGH (relay activates)
   → Relay closes circuit → 12V Solenoid Lock opens (gate unlocks)
   → waits duration_ms (3000ms = 3 seconds)
   → pulls GPIO26 LOW (relay deactivates)
   → Solenoid re-locks (gate closes)
      │
      ▼
9. ESP32 sends ACK: { "status": "gate_opened", "device_id": "...", "request_id": "..." }
      │
      ▼
10. @betogate logs result, updates device last_seen timestamp
```

---

## 📦 Expected Deliverables

| # | Challenge | Deliverable | File / Location |
|---|-----------|-------------|-----------------|
| 0 | **NetworkError Fix** | Remove all `fetch()` from ESP32-hosted HTML; replace with `<form POST>` | Apply to any existing ESP32 web server code |
| 1 | **Challenge 0** | ESP32 captive portal firmware addition (NVS + setup mode + form handler) | `firmware/karakuri_gate_esp32/karakuri_gate_esp32.ino` (additive) |
| 2 | **Challenge 0** | Admin provisioning QR generator endpoint | `routes/admin/esp32-provision.[ext]` (new route only) |
| 3 | **Challenge 0** | `esp32_devices` table pending_provision status support | `migrations/XXXX_add_esp32_devices.sql` |
| 4 | **Challenge 1** | Gate service TCP server | `services/gate/server.[ts/js/go/py]` |
| 5 | **Challenge 1** | Gate service internal HTTP API | `services/gate/api.[ts/js/go/py]` |
| 6 | **Main Challenge** | Post-success hook in existing Backend | **Additive only** — append to existing scan success handler |
| 7 | **Challenge 2** | Database migration (new tables only) | `migrations/XXXX_add_esp32_devices.sql` |
| 8 | **Challenge 2** | RBAC validation logic in gate service | `services/gate/rbac.[ts/js/go/py]` |
| 9 | **Challenge 2** | Admin management API routes | `services/gate/routes/admin.[ts/js/go/py]` |

---

## ✅ Acceptance Criteria

**Zero-Touch Provisioning (Challenge 0):**
- [ ] Flashing the same `.ino` binary to any ESP32 unit produces a working device — no per-unit code changes at flash time
- [ ] On first boot with no config, ESP32 creates WiFi AP named `RISKI-Gate-Setup-XXXX` within 5 seconds
- [ ] Connecting to that AP and opening any URL (or navigating to `192.168.4.1`) shows the setup page
- [ ] The setup page uses **zero `fetch()` calls** — all interactions are pure HTML form POSTs — **no NetworkError occurs**
- [ ] Scanning/pasting a Provisioning QR auto-fills all form fields correctly
- [ ] After form submit, device reboots and connects to configured WiFi + gate server within 30 seconds
- [ ] Holding BOOT button 5 seconds clears config and returns device to setup mode
- [ ] Admin panel Provisioning QR generator creates a pending `esp32_devices` record and returns scannable QR image

**Operational Mode (Challenges 1 + Main):**
- [ ] Existing `/station/login`, `/station/scan`, pallet counting, and QR privilege logic are untouched
- [ ] After a successful QR scan, a gate-open command reaches the correct ESP32 in ≤ 500ms
- [ ] `@betogate` correctly maintains 100+ simultaneous ESP32 connections without dropping
- [ ] ESP32 firmware auto-reconnects within 60s if TCP connection to `@betogate` drops
- [ ] All gate commands and outcomes are logged with `user_id`, `device_id`, `request_id`, `timestamp`, `result`

**RBAC (Challenge 2):**
- [ ] An unauthorized user (not in `esp32_user_privileges`) cannot trigger any gate, even if their QR scan succeeds
- [ ] Unregistered ESP32 devices (no matching `auth_token`) are rejected at TCP handshake stage
- [ ] Gate stays open for exactly `duration_ms` then re-locks automatically (no manual re-lock required)

---

## 🔑 Key Design Decisions to Preserve

1. **Non-blocking gate dispatch**: The gate open call must never block or slow down the user-facing API response. Use fire-and-forget with internal logging.
2. **Additive schema only**: Never ALTER or DROP existing tables. New tables only.
3. **Direction awareness**: Every gate command must carry `direction: "in" | "out"` so `@betogate` picks the right ESP32 (IN gate vs OUT gate at the same MC are different physical devices).
4. **Station-to-ESP32 location resolution**: The mapping `station_id + direction → esp32_device_id` is the core routing key in `@betogate`. This must be looked up from the database, never hardcoded.
5. **Prototype-first on firmware**: The C++ firmware is a single `.ino` file importable directly into Arduino IDE. After Challenge 0, it requires zero edits before flashing — provisioning handles all per-device config.
6. **No `fetch()` on ESP32-hosted pages**: All ESP32 web server pages must use plain HTML `<form method="POST">` — no JavaScript async calls. This is the permanent fix for `NetworkError when attempting to fetch resource`.
7. **NVS over hardcoded values**: All device-specific config lives in NVS (ESP32 non-volatile storage). The firmware binary is identical for all units. Per-unit identity is set via captive portal or Provisioning QR, not at compile time.
8. **Factory reset is always possible**: Holding BOOT button 5s must always clear NVS and return to setup mode, regardless of current operational state. This makes device replacement and reassignment trivial.