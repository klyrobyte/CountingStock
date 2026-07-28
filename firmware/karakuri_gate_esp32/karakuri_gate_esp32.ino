// ==========================================
// Gate.ino | R.I.S.K.I Gate v6.1 (Inverted LS Fix)
//
// Changes vs v6.0:
//   - ONLY FIXED: Flipped LS_PRESSED and LS_UNPRESSED definitions to match
//     your physical wiring direction. All other code remains 100% untouched.
// ==========================================

// ==========================================
// v6.2 ADD — PATCH NOTES (webhook/network integration)
//   - Everything from v6.1 above and below this note is BYTE-FOR-BYTE
//     untouched: no state, timing, relay, or LS logic was modified.
//   - This patch ONLY adds: NVS-based provisioning, a WiFi + TCP client to
//     @betogate, and a network trigger that calls the EXISTING handleScan()
//     function — exactly as if "scan" had been typed over Serial.
//   - The Serial "scan" command path in loop() is left fully intact for
//     local/bench testing; it is simply no longer the only trigger source.
//   - Integration points (search for "v6.2 ADD" comments below):
//       1) New #includes
//       2) New globals (network/provisioning config)
//       3) New helper functions (network layer only)
//       4) ONE appended line at the end of setup()
//       5) ONE appended line at the end of loop()
// ==========================================
#include <Preferences.h>
#include <WiFi.h>
#include <ArduinoJson.h>

enum SystemState {
  STATE_STANDBY,       // Pallet is in place, waiting for scan/pull
  STATE_AUTHORIZED,    // Flow A: Scanned, safe to pull anytime
  STATE_ALARM,         // Flow B: Pulled without scan, alarm active
  STATE_EMPTY          // Pallet pulled safely, waiting for return
};

// ==========================================
// --- HARDWARE CONFIGURATION ---
// ==========================================
const int RELAY_PIN = 18;
const int LS_PIN = 19; 

#define RELAY_ACTIVE LOW
#define RELAY_RELEASE HIGH

// Hardware Logic Definitions (Flipped to fix physical inversion)
#define LS_PRESSED HIGH     // Pallet di dalam (Flipped)
#define LS_UNPRESSED LOW    // Pallet ditarik keluar (Flipped)

// ==========================================
// --- TIMING CONFIGURATION ---
// ==========================================
const unsigned long DEBOUNCE_DELAY = 50;
const unsigned long PULL_CONFIRM_MS = 300;
const unsigned long POST_RELAY_IGNORE_MS = 400;

// ==========================================
// --- GLOBAL STATE ---
// ==========================================
SystemState currentState = STATE_STANDBY;
unsigned long sessionId = 0;

int lastLsState = HIGH;
int currentLsState = HIGH;
unsigned long lastDebounceTime = 0;

bool candidatePending = false;
int candidateState = HIGH;
unsigned long candidateSince = 0;

unsigned long ignoreLsUntil = 0;
int relayPhysicalState = RELAY_ACTIVE;

// ==========================================
// --- v6.2 ADD: WEBHOOK / NETWORK CONFIG (NVS-backed) ---
// v6.3 UPDATE: cfgServerPort now targets the @betogate HTTP port (4001)
//              instead of the TCP port (4000). Re-provision ESP32 if needed.
// ==========================================
Preferences gatePrefs;

String cfgWifiSsid;
String cfgWifiPass;
String cfgServerIp;
int    cfgServerPort = 4000;  // v6.3: Express backend directly
String cfgMachineCode;        // e.g. "mc0203"
String cfgWebhookPath;        // e.g. "/webhook/mc0203/qr-1003"
bool   gateConfigLoaded = false;

unsigned long lastWifiAttempt = 0;
const unsigned long NET_RETRY_MS = 5000;
bool wifiConnectInProgress = false;
const unsigned long WIFI_CONNECT_TIMEOUT_MS = 15000;

// v6.3 ADD: HTTP polling state
unsigned long lastHttpPollMs    = 0;
const unsigned long HTTP_POLL_INTERVAL_MS = 500;  // poll every 500 ms
bool lastScannedState = false;  // rising-edge detection (false→true triggers handleScan)

// ==========================================
// --- HELPERS ---
// ==========================================
void setRelay(int state, const char* reason) {
  if (state != relayPhysicalState) {
    digitalWrite(RELAY_PIN, state);
    relayPhysicalState = state;
    ignoreLsUntil = millis() + POST_RELAY_IGNORE_MS;
  }
}

void enterState(SystemState newState, const char* msg) {
  currentState = newState;
  sessionId++;
  Serial.print("[SESSION #");
  Serial.print(sessionId);
  Serial.print("] ");
  Serial.println(msg);
}

// ==========================================
// --- v6.2 ADD: HELPERS (network layer only — does not call into
//     or alter any state-machine function except handleScan()) ---
// ==========================================
bool loadGateWebhookConfig() {
  gatePrefs.begin("gatecfg", true);
  cfgWifiSsid    = gatePrefs.getString("ssid", "");
  cfgWifiPass    = gatePrefs.getString("pass", "");
  cfgServerIp    = gatePrefs.getString("srvip", "");
  cfgServerPort  = gatePrefs.getInt("srvport", 4000);
  cfgMachineCode = gatePrefs.getString("mc", "");
  cfgWebhookPath = gatePrefs.getString("hook", "");
  gatePrefs.end();
  return cfgWifiSsid.length() > 0 && cfgServerIp.length() > 0;
}

// Blocks ONLY when no config exists yet (fresh/unprovisioned board).
// Mirrors @devportal's WebSerial payload: {"cmd":"config", ...}
void runSerialProvisioningIfNeeded() {
  if (loadGateWebhookConfig()) {
    gateConfigLoaded = true;
    WiFi.mode(WIFI_STA);   // set once here, never again per-attempt
    Serial.print("[PROVISION] Existing config loaded. Webhook: ");
    Serial.println(cfgWebhookPath);
    return;
  }

  Serial.println("[PROVISION] No NVS config found. Waiting for JSON over Serial (:4001 / /station/provisioning)...");
  while (true) {
    if (Serial.available() > 0) {
      String line = Serial.readStringUntil('\n');
      line.trim();
      if (line.length() == 0) continue;

      StaticJsonDocument<512> doc;
      DeserializationError err = deserializeJson(doc, line);
      if (err || strcmp(doc["cmd"] | "", "config") != 0) {
        Serial.println("[PROVISION] Invalid payload, ignoring.");
        continue;
      }

      gatePrefs.begin("gatecfg", false);
      gatePrefs.putString("ssid",    doc["wifi_ssid"]    | "");
      gatePrefs.putString("pass",    doc["wifi_pass"]    | "");
      gatePrefs.putString("srvip",   doc["server_ip"]    | "");
      gatePrefs.putInt("srvport",    doc["port"]          | 4000);
      gatePrefs.putString("mc",      doc["machine_code"] | "");
      gatePrefs.putString("hook",    doc["webhook_path"] | "");
      gatePrefs.end();

      Serial.println("[PROVISION] Config saved. Rebooting...");
      delay(300);
      ESP.restart();
    }
  }
}

void connectWiFiIfNeeded() {
  if (WiFi.status() == WL_CONNECTED) {
    wifiConnectInProgress = false;
    return;
  }

  // A begin() is already resolving — do NOT call begin() again yet.
  // Calling it mid-handshake is what causes:
  //   E (...) wifi:sta is connecting, cannot set config
  if (wifiConnectInProgress) {
    if (millis() - lastWifiAttempt < WIFI_CONNECT_TIMEOUT_MS) return;
    // Attempt timed out — cleanly reset before allowing a fresh begin()
    WiFi.disconnect(true, true);
    wifiConnectInProgress = false;
  }

  if (millis() - lastWifiAttempt < NET_RETRY_MS) return;

  lastWifiAttempt = millis();
  wifiConnectInProgress = true;
  Serial.print("[WIFI] Attempting to connect to SSID: ");
  Serial.println(cfgWifiSsid);
  WiFi.begin(cfgWifiSsid.c_str(), cfgWifiPass.c_str());
}

// ==========================================
// --- v6.3 ADD: HTTP POLLING LAYER ---
// Polls GET /iot/{mc}/{qr} on the Express backend (port 4000).
// On rising edge (false→true) calls handleScan(), then resets via POST /reset.
// The webhook path stored in NVS ("/webhook/mc2/QR-1003") is parsed to extract
// mc and qr segments — no NVS schema change needed.
// ==========================================

/**
 * Extract /mc and /qr segments from cfgWebhookPath.
 * e.g. "/webhook/mc2/QR-1003" → parts[1]="mc2", parts[2]="QR-1003"
 */
String iotPollPath() {
  // Strip leading slash, split by '/'
  String p = cfgWebhookPath;            // e.g. "/webhook/mc2/QR-1003"
  if (p.startsWith("/")) p = p.substring(1);  // "webhook/mc2/QR-1003"
  int first  = p.indexOf('/');
  int second = p.indexOf('/', first + 1);
  if (first < 0 || second < 0) return "/iot/unknown/unknown";
  String mc = p.substring(first + 1, second);  // "mc2"
  String qr = p.substring(second + 1);         // "QR-1003"
  return "/iot/" + mc + "/" + qr;              // "/iot/mc2/QR-1003"
}

/**
 * Minimal HTTP/1.0 GET helper.
 */
bool httpGet(const String& path, String& responseBody) {
  WiFiClient hc;
  if (!hc.connect(cfgServerIp.c_str(), cfgServerPort)) return false;
  hc.printf("GET %s HTTP/1.0\r\nHost: %s\r\nConnection: close\r\n\r\n",
            path.c_str(), cfgServerIp.c_str());
  unsigned long t0 = millis();
  while (!hc.available()) {
    if (millis() - t0 > 2000) { hc.stop(); return false; }
    delay(5);
  }
  bool inBody = false;
  responseBody = "";
  while (hc.available() || hc.connected()) {
    String line = hc.readStringUntil('\n');
    if (!inBody) {
      if (line == "\r" || line.length() <= 1) inBody = true;
    } else {
      responseBody += line;
    }
  }
  hc.stop();
  responseBody.trim();
  return responseBody.length() > 0;
}

/**
 * Minimal HTTP/1.0 POST helper (no body).
 */
void httpPost(const String& path) {
  WiFiClient hc;
  if (!hc.connect(cfgServerIp.c_str(), cfgServerPort)) return;
  hc.printf("POST %s HTTP/1.0\r\nHost: %s\r\nContent-Length: 0\r\nConnection: close\r\n\r\n",
            path.c_str(), cfgServerIp.c_str());
  unsigned long t0 = millis();
  while (!hc.available()) {
    if (millis() - t0 > 2000) break;
    delay(5);
  }
  hc.stop();
}

/**
 * Core HTTP polling — called from maintainGateNetwork() every loop().
 * Detects rising edge on server scanned flag and calls the existing handleScan().
 * Resets state immediately before calling handleScan() to prevent double-trigger.
 * v6.3.1: Added verbose debug logging to diagnose connectivity issues.
 */
unsigned long lastDebugPrintMs = 0;
const unsigned long DEBUG_PRINT_INTERVAL_MS = 10000;  // print status every 10s

void pollWebhookHttp() {
  if (WiFi.status() != WL_CONNECTED) {
    unsigned long now2 = millis();
    if (now2 - lastDebugPrintMs > DEBUG_PRINT_INTERVAL_MS) {
      lastDebugPrintMs = now2;
      Serial.println("[HTTP] WiFi NOT connected. Waiting...");
    }
    return;
  }

  unsigned long now = millis();
  if (now - lastHttpPollMs < HTTP_POLL_INTERVAL_MS) return;
  lastHttpPollMs = now;

  String pollPath = iotPollPath();   // "/iot/mc2/QR-1002"

  // Periodic status print (not every poll, just every 10s)
  if (now - lastDebugPrintMs > DEBUG_PRINT_INTERVAL_MS) {
    lastDebugPrintMs = now;
    Serial.print("[HTTP] Polling: ");
    Serial.print(cfgServerIp);
    Serial.print(":");
    Serial.print(cfgServerPort);
    Serial.println(pollPath);
  }

  String body;
  if (!httpGet(pollPath, body)) {
    // Only log connection failures periodically to avoid spam
    if (now - lastDebugPrintMs > DEBUG_PRINT_INTERVAL_MS) {
      Serial.print("[HTTP] FAILED to connect to ");
      Serial.print(cfgServerIp);
      Serial.print(":");
      Serial.println(cfgServerPort);
    }
    return;
  }

  StaticJsonDocument<256> doc;
  DeserializationError jsonErr = deserializeJson(doc, body);
  if (jsonErr) {
    Serial.print("[HTTP] JSON parse error: ");
    Serial.println(jsonErr.c_str());
    Serial.print("[HTTP] Raw body: ");
    Serial.println(body.substring(0, 200));
    return;
  }

  bool scanned = doc["scanned"] | false;

  if (scanned && !lastScannedState) {
    Serial.print("[HTTP] >>> SCAN SIGNAL DETECTED on ");
    Serial.println(pollPath);
    httpPost(pollPath + "/reset");   // reset FIRST to avoid double-trigger
    Serial.println("[HTTP] State reset sent.");
    handleScan();                     // untouched state-machine handler
  }

  lastScannedState = scanned;
}

void maintainGateNetwork() {
  if (!gateConfigLoaded) return;
  connectWiFiIfNeeded();
  pollWebhookHttp();
}

// ==========================================
// --- SETUP ---
// ==========================================
void setup() {
  Serial.begin(115200);
  delay(1000);

  pinMode(RELAY_PIN, OUTPUT_OPEN_DRAIN);
  digitalWrite(RELAY_PIN, RELAY_ACTIVE);
  relayPhysicalState = RELAY_ACTIVE;

  pinMode(LS_PIN, INPUT_PULLUP);
  lastLsState = digitalRead(LS_PIN);
  currentLsState = lastLsState;
  candidateState = lastLsState;

  Serial.println("\n=============================================");
  Serial.println("  RISKI Gate v6.3 (HTTP Polling Mode)       ");
  Serial.println("=============================================");

  if (lastLsState == LS_PRESSED) {
    currentState = STATE_STANDBY;
    Serial.println("[STATUS] Ready: Pallet terdeteksi di posisi stand-by.");
  } else {
    currentState = STATE_EMPTY;
    Serial.println("[STATUS] Ready: Pallet sedang di luar.");
  }

  // v6.2 ADD — appended only, nothing above this line was changed
  runSerialProvisioningIfNeeded();
}

// ==========================================
// --- MAIN LOOP ---
// ==========================================
void loop() {
  unsigned long now = millis();

  // ---------- LS: electrical debounce (fast) ----------
  int reading = digitalRead(LS_PIN);
  if (reading != lastLsState) {
    lastDebounceTime = now;
  }
  if ((now - lastDebounceTime) > DEBOUNCE_DELAY) {
    if (reading != currentLsState) {
      currentLsState = reading;
      candidateState = reading;
      candidateSince = now;
      candidatePending = true;
    }
  }
  lastLsState = reading;

  // ---------- LS: intent confirmation (slow) ----------
  if (candidatePending) {
    bool ignoringNow = now < ignoreLsUntil;
    if (ignoringNow) {
      candidateSince = now; 
    } else if (now - candidateSince >= PULL_CONFIRM_MS) {
      candidatePending = false;
      handleConfirmedLsChange(candidateState);
    }
  }

  // ---------- SERIAL COMMANDS (Scanners + Re-provisioning) ----------
  if (Serial.available() > 0) {
    String input = Serial.readStringUntil('\n');
    input.trim();
    if (input == "scan") {
      handleScan();
    } else if (input.startsWith("{") && input.indexOf("\"cmd\":\"config\"") > 0) {
      // Intercept re-provisioning payload from WebSerial
      StaticJsonDocument<512> doc;
      DeserializationError err = deserializeJson(doc, input);
      if (!err && strcmp(doc["cmd"] | "", "config") == 0) {
        gatePrefs.begin("gatecfg", false);
        gatePrefs.putString("ssid",    doc["wifi_ssid"]    | "");
        gatePrefs.putString("pass",    doc["wifi_pass"]    | "");
        gatePrefs.putString("srvip",   doc["server_ip"]    | "");
        gatePrefs.putInt("srvport",    doc["port"]          | 4000);
        gatePrefs.putString("mc",      doc["machine_code"] | "");
        gatePrefs.putString("hook",    doc["webhook_path"] | "");
        gatePrefs.end();
        Serial.println("[PROVISION] New config saved on-the-fly. Rebooting...");
        delay(300);
        ESP.restart();
      }
    } else {
      Serial.println("[WARN] Sistem otomatis. Gunakan Scanner QR/RFID.");
    }
  }

  // v6.2 ADD — appended only, nothing above this line was changed
  maintainGateNetwork();
}

// ==========================================
// --- CONFIRMED PHYSICAL EVENT HANDLER ---
// ==========================================
void handleConfirmedLsChange(int state) {
  if (state == LS_UNPRESSED) {
    // === PALLET DITARIK KELUAR ===
    if (currentState == STATE_STANDBY) {
      setRelay(RELAY_ACTIVE, "unauthorized pull");
      enterState(STATE_ALARM, "[WARN] ALARM: SCAN FIRST! Pallet ditarik tanpa scan - waiting for scan.");
    } 
    else if (currentState == STATE_AUTHORIZED) {
      setRelay(RELAY_ACTIVE, "authorized pull complete");
      enterState(STATE_EMPTY, "[SUCCESS] PASS: Pallet ditarik dengan aman. Session closed.");
    }
  } 
  else if (state == LS_PRESSED) {
    // === PALLET DIKEMBALIKAN KE DALAM ===
    if (currentState == STATE_ALARM) {
      Serial.println("[INFO] Pallet dikembalikan (LS tertekan). ALARM TETAP AKTIF: Harus SCAN untuk menutup sesi!");
    } 
    else if (currentState == STATE_EMPTY) {
      setRelay(RELAY_ACTIVE, "pallet returned");
      enterState(STATE_STANDBY, "[INFO] Pallet/Kereta dikembalikan ke posisi semula (LS tertekan). Sesi baru siap.");
    }
  }
}

// ==========================================
// --- SCANNER HANDLER ---
// ==========================================
void handleScan() {
  if (currentState == STATE_STANDBY) {
    setRelay(RELAY_RELEASE, "scan authorized");
    enterState(STATE_AUTHORIZED, "[EVENT] QR Scanned. Access granted - silahkan tarik pallet.");
  } 
  else if (currentState == STATE_ALARM) {
    if (currentLsState == LS_UNPRESSED) {
      setRelay(RELAY_ACTIVE, "late scan verified (outside)");
      enterState(STATE_EMPTY, "[SUCCESS] PASS: Late scan verified. Alarm mati. Pallet aman di luar.");
    } else {
      setRelay(RELAY_ACTIVE, "late scan verified (inside)");
      enterState(STATE_STANDBY, "[SUCCESS] PASS: Late scan verified. Alarm mati. Sesi direset ke awal.");
    }
  } 
  else if (currentState == STATE_AUTHORIZED) {
    Serial.println("[INFO] Sesi sudah aktif. Silahkan tarik pallet.");
  }
  else if (currentState == STATE_EMPTY) {
    Serial.println("[INFO] Pallet sedang di luar. Kembalikan ke posisi semula (LS tertekan) untuk memulai.");
  }
}
