/**
 * karakuri_gate_esp32.ino  ─  v3.1 (Alarm Flow Testing)
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT CHANGED vs v3:
 *   [NEW] Alarm logic: IF (NOT Scanned) AND (Pulled) THEN → Serial "ALARM!"
 *   [NEW] -S1 pallet limit switch on GPIO 27 (NO contact, wired to GND). atau ake sistem yg kemarin kabel satu untuk sebagai trigger nya
 *   [NEW] OPEN_GATE now arms a 30-second isScanned window instead of
 *         immediately driving the relay. Pull -S1 within the window → SUCCESS.
 *         Pull -S1 without scanning first → ALARM, ALARM, SCAN IT FIRST!
 *   [NEW] isScanned auto-expires after SCAN_TIMEOUT_MS.
 *   [RELAY DISABLED] All relay digitalWrite/pinMode calls are commented out
 *         for the testing phase. Marked with [RELAY DISABLED] — do not delete,
 *         uncomment to restore production behaviour.
 *
 * UNCHANGED: WiFi, TCP, handshake, register, heartbeat, NVS, factory-reset
 *            flows, and all business logic on http://localhost:5173/.
 *
 * HARDWARE FOR THIS TEST BUILD:
 *   ESP32          ← you have this
 *   Relay module   ← you have this, disabled below
 *   NO Limit Switch (-S1) → GPIO 27 ↔ GND   ← add this for pallet detection
 *
 * Libraries required:
 *   ✅ WiFi.h
 *   ✅ WiFiClient.h
 *   ✅ Preferences.h
 *   📦 ArduinoJson (v6 or v7)
 */

#include <WiFi.h>
#include <WiFiClient.h>
#include <Preferences.h>
#include <ArduinoJson.h>

// ════════════════════════════════════════════════════════════════════════════
// HARDWARE CONSTANTS
// ════════════════════════════════════════════════════════════════════════════
#define RELAY_PIN              26    // GPIO → relay IN pin
#define LED_PIN                 2    // built-in LED
#define FACTORY_RESET_PIN       0    // BOOT button
#define GATE_OPEN_DURATION_MS 3000   // default ms gate stays open

// [NEW] -S1 Pallet Limit Switch (Normally Open → wired between GPIO 27 and GND)
//   Default  (pallet present / not pulled) : switch OPEN  → GPIO reads HIGH (INPUT_PULLUP)
//   Triggered (pallet pulled)              : switch CLOSES → GPIO reads LOW
#define S1_PALLET_PIN          27

// ════════════════════════════════════════════════════════════════════════════
// TIMING CONSTANTS
// ════════════════════════════════════════════════════════════════════════════
#define HEARTBEAT_INTERVAL_MS  30000UL
#define RECONNECT_BASE_MS       5000UL
#define RECONNECT_MAX_MS       60000UL

// [NEW] How long after a valid QR scan the gate stays "armed" (pull window)
#define SCAN_TIMEOUT_MS        30000UL   // 30 seconds

// [NEW] Simple software debounce for -S1
#define S1_DEBOUNCE_MS            50UL

// ════════════════════════════════════════════════════════════════════════════
// GLOBAL STATE
// ════════════════════════════════════════════════════════════════════════════
String WIFI_SSID_CFG  = "";
String WIFI_PASS_CFG  = "";
String SERVER_IP      = "";
int    SERVER_PORT    = 4000;
String LISTEN_QRS_STR = "";

bool isConfigured = false;

Preferences    prefs;
WiFiClient     gateClient;
unsigned long  lastHeartbeatMs  = 0;
unsigned long  reconnectDelayMs = RECONNECT_BASE_MS;
bool           handshakeCompleted = false;
String         incomingBuffer     = "";

// [NEW] Alarm-flow state ────────────────────────────────────────────────────
//   isScanned      : set to true when OPEN_GATE received (QR scanned on web)
//   scanTimestamp  : millis() at the moment isScanned was armed
//   s1LastState    : previous GPIO reading for edge detection
bool          isScanned     = false;
unsigned long scanTimestamp = 0;
bool          s1LastState   = HIGH;   // NO switch default = open circuit = HIGH
// ───────────────────────────────────────────────────────────────────────────

void ledBlink(int times, int onMs = 150, int offMs = 150) {
  for (int i = 0; i < times; i++) {
    digitalWrite(LED_PIN, HIGH); delay(onMs);
    digitalWrite(LED_PIN, LOW);  delay(offMs);
  }
}

// ════════════════════════════════════════════════════════════════════════════
// NVS HELPERS   ← UNCHANGED
// ════════════════════════════════════════════════════════════════════════════
bool loadConfig() {
  prefs.begin("riski-cfg", true); // read-only
  WIFI_SSID_CFG  = prefs.getString("ssid",  "");
  WIFI_PASS_CFG  = prefs.getString("pass",  "");
  SERVER_IP      = prefs.getString("ip",    "");
  SERVER_PORT    = prefs.getInt("port",     4000);
  LISTEN_QRS_STR = prefs.getString("qrs",   "");
  prefs.end();

  if (WIFI_SSID_CFG == "" || SERVER_IP == "" || LISTEN_QRS_STR == "") {
    return false;
  }
  return true;
}

void factoryReset() {
  Serial.println("\n[NVS] CLEARING CONFIGURATION...");
  prefs.begin("riski-cfg", false);
  prefs.clear();
  prefs.end();
  Serial.println("[NVS] Configuration cleared. Rebooting...");
  ledBlink(10, 50, 50);
  ESP.restart();
}

// ════════════════════════════════════════════════════════════════════════════
// SETUP ROUTINE
// ════════════════════════════════════════════════════════════════════════════
void setup() {
  Serial.begin(115200);
  delay(1000);

  // [RELAY DISABLED FOR TESTING] ── comment back in for production ──────────
  // pinMode(RELAY_PIN, OUTPUT);
  // digitalWrite(RELAY_PIN, LOW);
  // ─────────────────────────────────────────────────────────────────────────

  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
  pinMode(FACTORY_RESET_PIN, INPUT_PULLUP);

  // [NEW] -S1 pallet limit switch — NO contact, uses internal pull-up
  pinMode(S1_PALLET_PIN, INPUT_PULLUP);
  s1LastState = digitalRead(S1_PALLET_PIN);

  Serial.println("\n=============================================");
  Serial.println("  🚪 RISKI Gate v3.1 (Alarm Flow Testing)");
  Serial.println("=============================================");
  Serial.println("  -S1 Pallet Switch: GPIO " + String(S1_PALLET_PIN));
  Serial.println("  Scan timeout:      " + String(SCAN_TIMEOUT_MS / 1000) + "s");
  Serial.println("  Relay:             DISABLED (testing mode)");
  Serial.println("=============================================");

  // Check if button is held during boot to factory reset immediately
  if (digitalRead(FACTORY_RESET_PIN) == LOW) {
    delay(2000);
    if (digitalRead(FACTORY_RESET_PIN) == LOW) {
      factoryReset();
    }
  }

  isConfigured = loadConfig();

  // ─── SETUP MODE   ← UNCHANGED ────────────────────────────────────────────
  if (!isConfigured) {
    Serial.println("\n[SETUP] No configuration found in NVS.");
    Serial.println("[SETUP] Waiting for JSON config over Serial (WebSerial)...");

    while (true) {
      if (digitalRead(FACTORY_RESET_PIN) == LOW) {
        delay(2000);
        if (digitalRead(FACTORY_RESET_PIN) == LOW) {
          ESP.restart();
        }
      }

      if (Serial.available()) {
        String input = Serial.readStringUntil('\n');
        input.trim();
        if (input.length() > 0) {
          DynamicJsonDocument doc(2048);
          DeserializationError err = deserializeJson(doc, input);

          if (!err && doc["cmd"] == "config") {
            prefs.begin("riski-cfg", false);
            prefs.putString("ssid", doc["wifi_ssid"].as<String>());
            prefs.putString("pass", doc["wifi_pass"].as<String>());
            prefs.putString("ip", doc["server_ip"].as<String>());

            if (doc["port"].is<int>()) {
               prefs.putInt("port", doc["port"].as<int>());
            }

            String qrsStr;
            serializeJson(doc["listen_qrs"], qrsStr);
            prefs.putString("qrs", qrsStr);

            prefs.end();

            Serial.println("\n[SETUP] Configuration saved to NVS!");
            Serial.println("[SETUP] Rebooting in 2 seconds...");
            ledBlink(3, 200, 200);
            delay(2000);
            ESP.restart();
          } else {
            Serial.println("[SETUP] ERROR: Invalid JSON or not a config command.");
          }
        }
      }
      delay(10);
    }
  }

  // ─── OPERATIONAL MODE   ← UNCHANGED ──────────────────────────────────────
  Serial.println("\n[BOOT] Configuration loaded from NVS.");
  Serial.print("[BOOT] Connecting to WiFi SSID: ");
  Serial.println(WIFI_SSID_CFG);

  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID_CFG.c_str(), WIFI_PASS_CFG.c_str());
}

// ════════════════════════════════════════════════════════════════════════════
// MAIN LOOP
// ════════════════════════════════════════════════════════════════════════════
void loop() {
  // Check FACTORY RESET   ← UNCHANGED
  if (digitalRead(FACTORY_RESET_PIN) == LOW) {
    unsigned long startPress = millis();
    while (digitalRead(FACTORY_RESET_PIN) == LOW) {
      if (millis() - startPress > 5000) factoryReset();
      delay(100);
    }
  }

  // ─── 1. Manage WiFi Connection   ← UNCHANGED ────────────────────────────
  if (WiFi.status() != WL_CONNECTED) {
    digitalWrite(LED_PIN, LOW);
    Serial.println("[WIFI] Reconnecting...");
    WiFi.disconnect();
    WiFi.begin(WIFI_SSID_CFG.c_str(), WIFI_PASS_CFG.c_str());

    unsigned long waitStart = millis();
    while (WiFi.status() != WL_CONNECTED && millis() - waitStart < 10000) {
      if (digitalRead(FACTORY_RESET_PIN) == LOW) return;
      delay(500);
      Serial.print(".");
    }
    if (WiFi.status() == WL_CONNECTED) {
      Serial.println("\n[WIFI] Connected! IP: " + WiFi.localIP().toString());
    } else {
      Serial.println("\n[WIFI] Connect failed. Waiting before retry...");
      delay(5000);
      return;
    }
  }

  // ─── 2. Manage Gate Server TCP Connection   ← UNCHANGED ─────────────────
  if (!gateClient.connected()) {
    handshakeCompleted = false;
    digitalWrite(LED_PIN, LOW);

    Serial.printf("[TCP] Connecting to %s:%d...\n", SERVER_IP.c_str(), SERVER_PORT);
    if (gateClient.connect(SERVER_IP.c_str(), SERVER_PORT)) {
      Serial.println("[TCP] Connected! Sending handshake...");

      DynamicJsonDocument rxDoc(2048);
      deserializeJson(rxDoc, LISTEN_QRS_STR);

      String mac = WiFi.macAddress();
      mac.replace(":", "");

      DynamicJsonDocument txDoc(2048);
      txDoc["type"] = "register";
      txDoc["mac"]  = mac;
      txDoc["qrs"]  = rxDoc;

      String payload;
      serializeJson(txDoc, payload);
      gateClient.println(payload);

      reconnectDelayMs = RECONNECT_BASE_MS;
    } else {
      Serial.println("[TCP] Connection failed.");
      delay(reconnectDelayMs);
      reconnectDelayMs = min(reconnectDelayMs * 2, (unsigned long)RECONNECT_MAX_MS);
      return;
    }
  }

  // ─── 3. Handle Incoming TCP Data   ← UNCHANGED ──────────────────────────
  while (gateClient.available()) {
    char c = gateClient.read();
    if (c == '\n') {
      processServerMessage(incomingBuffer);
      incomingBuffer = "";
    } else if (c != '\r') {
      incomingBuffer += c;
    }
  }

  // ─── 4. Heartbeat (Ping)   ← UNCHANGED ───────────────────────────────────
  if (handshakeCompleted && millis() - lastHeartbeatMs > HEARTBEAT_INTERVAL_MS) {
    gateClient.println("{\"type\":\"ping\"}");
    lastHeartbeatMs = millis();
    Serial.println("[TCP] -> ping");
  }

  // ─── 5. [NEW] Scan window auto-expire ─────────────────────────────────────
  //   If the user scanned (isScanned=true) but never pulled within the timeout,
  //   automatically re-arm the alarm so the next pull without a fresh scan
  //   still triggers correctly.
  if (isScanned && (millis() - scanTimestamp >= SCAN_TIMEOUT_MS)) {
    isScanned = false;
    Serial.println("[GATE] ⚠  Scan window expired. System re-armed.");
  }

  // ─── 6. [NEW] -S1 Pallet Alarm Logic ──────────────────────────────────────
  //
  //   FLOW: IF (NOT Scanned) AND (Pallet Pulled) → ALARM
  //         IF (Scanned)     AND (Pallet Pulled) → SUCCESS
  //
  //   -S1 wiring: NO switch between GPIO 27 and GND, INPUT_PULLUP enabled.
  //     Idle (pallet present) : GPIO = HIGH  (internal pull-up, switch open)
  //     Pulled               : GPIO = LOW   (switch closes, pulls pin to GND)
  //   We detect the HIGH→LOW falling edge as the "pallet pulled" event.
  // ─────────────────────────────────────────────────────────────────────────
  bool s1Now = digitalRead(S1_PALLET_PIN);

  if (s1LastState == HIGH && s1Now == LOW) {
    // Falling edge detected — debounce confirm
    delay(S1_DEBOUNCE_MS);
    if (digitalRead(S1_PALLET_PIN) == LOW) {

      // Re-check scan validity (guard against edge-case where timeout fires
      // in the same millisecond as the switch press)
      bool scanValid = isScanned && ((millis() - scanTimestamp) < SCAN_TIMEOUT_MS);

      if (scanValid) {
        // ── Valid extraction ───────────────────────────────────────────────
        Serial.println("\n================================================");
        Serial.println("  ✅  SUCCESS");
        Serial.println("  Valid scan detected. Extraction authorized.");
        Serial.println("================================================\n");
        isScanned = false; // consume the scan token — one scan = one pull

        // [RELAY DISABLED FOR TESTING] ─ uncomment for production ──────────
        // digitalWrite(RELAY_PIN, HIGH);
        // delay(GATE_OPEN_DURATION_MS);
        // digitalWrite(RELAY_PIN, LOW);
        // ───────────────────────────────────────────────────────────────────

      } else {
        // ── Violation / theft attempt ──────────────────────────────────────
        Serial.println("\n================================================");
        Serial.println("  🚨  ALARM!  ALARM!  SCAN IT FIRST!");
        Serial.println("================================================\n");

        // [RELAY DISABLED FOR TESTING] ─ uncomment to drive alarm relay ────
        // (wire alarm relay to a separate pin / alarm buzzer in production)
        // ───────────────────────────────────────────────────────────────────
      }
    }
  }

  s1LastState = s1Now;

  delay(10);
}

// ════════════════════════════════════════════════════════════════════════════
// TCP MESSAGE HANDLER
// ════════════════════════════════════════════════════════════════════════════
void processServerMessage(String msg) {
  msg.trim();
  if (msg.length() == 0) return;

  DynamicJsonDocument doc(2048);
  DeserializationError error = deserializeJson(doc, msg);

  if (error) {
    Serial.println("[TCP] JSON parse failed: " + msg);
    return;
  }

  String type = doc["type"].as<String>();
  String cmd  = doc["cmd"].as<String>();

  // ─── handshake_ok   ← UNCHANGED ──────────────────────────────────────────
  if (type == "handshake_ok") {
    Serial.println("[TCP] Handshake accepted! System ready.");
    handshakeCompleted = true;
    lastHeartbeatMs = millis();
    digitalWrite(LED_PIN, HIGH);
  }
  // ─── error   ← UNCHANGED ──────────────────────────────────────────────────
  else if (type == "error") {
    Serial.println("[TCP] Handshake error: " + doc["message"].as<String>());
    gateClient.stop();
  }
  // ─── pong   ← UNCHANGED ───────────────────────────────────────────────────
  else if (type == "pong") {
    // Normal keep-alive
  }
  // ─── OPEN_GATE   ← FLOW UPDATED (relay removed, scan flag armed instead) ──
  //
  //   Original: drove relay immediately when QR was scanned.
  //   New flow: arms isScanned for SCAN_TIMEOUT_MS.
  //             The relay (or SUCCESS log) only fires when -S1 is subsequently
  //             pulled — completing the IF (Scanned) AND (Pulled) condition.
  // ─────────────────────────────────────────────────────────────────────────
  else if (cmd == "OPEN_GATE") {
    Serial.println("\n[COMMAND] >>> QR SCANNED — Gate Armed <<<");
    String reqId = doc["request_id"].as<String>();

    // [NEW] Arm the scan window
    isScanned     = true;
    scanTimestamp = millis();
    Serial.println("[GATE] Scan armed. Pull pallet (-S1) within "
                   + String(SCAN_TIMEOUT_MS / 1000) + "s to authorize extraction.");

    // [RELAY DISABLED FOR TESTING] ─ original direct-open, uncomment for v4 ─
    // digitalWrite(RELAY_PIN, HIGH);
    // delay(GATE_OPEN_DURATION_MS);
    // digitalWrite(RELAY_PIN, LOW);
    // ─────────────────────────────────────────────────────────────────────────

    if (reqId != "null" && reqId.length() > 0) {
      DynamicJsonDocument ack(512);
      ack["type"]       = "ack";
      ack["request_id"] = reqId;
      ack["status"]     = "success";
      String ackStr;
      serializeJson(ack, ackStr);
      gateClient.println(ackStr);
      Serial.println("[TCP] -> ACK sent");
    }
  }
  // ─── unknown   ← UNCHANGED ────────────────────────────────────────────────
  else {
    Serial.println("[TCP] Unknown payload: " + msg);
  }
}
