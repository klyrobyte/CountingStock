/**
 * karakuri_gate_esp32.ino  ─  v3 (Zero-Touch WebSerial Provisioning)
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT CHANGED vs v2:
 *   - No WiFi AP, no Captive Portal, no AsyncWebServer.
 *   - Setup mode reads JSON configuration purely from Serial (USB).
 *   - NVS stores an array of `listen_qrs` instead of single token.
 *   - Operates by connecting to WiFi, then TCP server, sending array of QRs.
 *
 * HARDWARE CONSTANTS (compile-time — same for all units):
 *   RELAY_PIN = 26, LED_PIN = 2, FACTORY_RESET_PIN = 0
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

// ════════════════════════════════════════════════════════════════════════════
// TIMING CONSTANTS
// ════════════════════════════════════════════════════════════════════════════
#define HEARTBEAT_INTERVAL_MS  30000UL
#define RECONNECT_BASE_MS       5000UL
#define RECONNECT_MAX_MS       60000UL

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

void ledBlink(int times, int onMs = 150, int offMs = 150) {
  for (int i = 0; i < times; i++) {
    digitalWrite(LED_PIN, HIGH); delay(onMs);
    digitalWrite(LED_PIN, LOW);  delay(offMs);
  }
}

// ════════════════════════════════════════════════════════════════════════════
// NVS HELPERS
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
  
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
  pinMode(FACTORY_RESET_PIN, INPUT_PULLUP);

  Serial.println("\n=============================================");
  Serial.println("  🚪 RISKI Gate v3 (Zero-Touch Serial)");
  Serial.println("=============================================");
  
  // Check if button is held during boot to factory reset immediately
  if (digitalRead(FACTORY_RESET_PIN) == LOW) {
    delay(2000);
    if (digitalRead(FACTORY_RESET_PIN) == LOW) {
      factoryReset();
    }
  }

  isConfigured = loadConfig();

  // ─── SETUP MODE ───────────────────────────────────────────────────────────
  if (!isConfigured) {
    Serial.println("\n[SETUP] No configuration found in NVS.");
    Serial.println("[SETUP] Waiting for JSON config over Serial (WebSerial)...");

    while (true) {
      // Allow factory reset even in setup mode
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
          // Support ArduinoJson 6 & 7
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

  // ─── OPERATIONAL MODE ─────────────────────────────────────────────────────
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
  // Check FACTORY RESET
  if (digitalRead(FACTORY_RESET_PIN) == LOW) {
    unsigned long startPress = millis();
    while (digitalRead(FACTORY_RESET_PIN) == LOW) {
      if (millis() - startPress > 5000) factoryReset();
      delay(100);
    }
  }

  // ─── 1. Manage WiFi Connection ────────────────────────────────────────────
  if (WiFi.status() != WL_CONNECTED) {
    digitalWrite(LED_PIN, LOW);
    Serial.println("[WIFI] Reconnecting...");
    WiFi.disconnect();
    WiFi.begin(WIFI_SSID_CFG.c_str(), WIFI_PASS_CFG.c_str());
    
    unsigned long waitStart = millis();
    while (WiFi.status() != WL_CONNECTED && millis() - waitStart < 10000) {
      if (digitalRead(FACTORY_RESET_PIN) == LOW) return; // Allow early exit
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

  // ─── 2. Manage Gate Server TCP Connection ───────────────────────────────────
  if (!gateClient.connected()) {
    handshakeCompleted = false;
    digitalWrite(LED_PIN, LOW);
    
    Serial.printf("[TCP] Connecting to %s:%d...\n", SERVER_IP.c_str(), SERVER_PORT);
    if (gateClient.connect(SERVER_IP.c_str(), SERVER_PORT)) {
      Serial.println("[TCP] Connected! Sending handshake...");
      
      // We parse the LISTEN_QRS_STR string back into a JsonArray to send in handshake
      DynamicJsonDocument rxDoc(2048);
      deserializeJson(rxDoc, LISTEN_QRS_STR);
      
      // MAC address as device ID
      String mac = WiFi.macAddress();
      mac.replace(":", "");
      
      DynamicJsonDocument txDoc(2048);
      txDoc["type"] = "register";
      txDoc["mac"] = mac;
      txDoc["qrs"] = rxDoc; // copy array

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

  // ─── 3. Handle Incoming TCP Data ────────────────────────────────────────────
  while (gateClient.available()) {
    char c = gateClient.read();
    if (c == '\n') {
      processServerMessage(incomingBuffer);
      incomingBuffer = "";
    } else if (c != '\r') {
      incomingBuffer += c;
    }
  }

  // ─── 4. Heartbeat (Ping) ──────────────────────────────────────────────────
  if (handshakeCompleted && millis() - lastHeartbeatMs > HEARTBEAT_INTERVAL_MS) {
    gateClient.println("{\"type\":\"ping\"}");
    lastHeartbeatMs = millis();
    Serial.println("[TCP] -> ping");
  }

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

  if (type == "handshake_ok") {
    Serial.println("[TCP] Handshake accepted! System ready.");
    handshakeCompleted = true;
    lastHeartbeatMs = millis();
    digitalWrite(LED_PIN, HIGH);
  } 
  else if (type == "error") {
    Serial.println("[TCP] Handshake error: " + doc["message"].as<String>());
    gateClient.stop();
  }
  else if (type == "pong") {
    // Normal keep-alive
  }
  else if (cmd == "OPEN_GATE") {
    Serial.println("\n[COMMAND] >>> OPEN GATE <<<");
    String reqId = doc["request_id"].as<String>();
    
    digitalWrite(RELAY_PIN, HIGH);
    delay(GATE_OPEN_DURATION_MS);
    digitalWrite(RELAY_PIN, LOW);
    
    if (reqId != "null" && reqId.length() > 0) {
      DynamicJsonDocument ack(512);
      ack["type"] = "ack";
      ack["request_id"] = reqId;
      ack["status"] = "success";
      String ackStr;
      serializeJson(ack, ackStr);
      gateClient.println(ackStr);
      Serial.println("[TCP] -> ACK sent");
    }
  } 
  else {
    Serial.println("[TCP] Unknown payload: " + msg);
  }
}
