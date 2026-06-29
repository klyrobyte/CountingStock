import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Search, Loader2, CheckCircle2, AlertCircle, Usb, Cpu, Save, Wifi, Server } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { fetchApi } from "@/lib/api";

export const Route = createFileRoute("/station/provisioning")({
  head: () => ({
    meta: [
      { title: "USB Provisioning - Sugity Integrated Systems" },
      { name: "description", content: "Zero-Touch WebSerial Provisioning untuk ESP32." },
    ],
  }),
  component: ProvisioningPage,
});

type QRItem = {
  id: number;
  qr_id: string;
  part_name: string;
  factory: string;
};

// ─── Toast Notification ──────────────────────────────────────────────────
function Toast({ msg, type, onClose }: { msg: string; type: "success" | "error" | "info"; onClose: () => void }) {
  const bg = type === "success" ? "bg-emerald-500" : type === "error" ? "bg-red-500" : "bg-blue-500";
  return (
    <div
      className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-2xl px-5 py-3.5 shadow-2xl text-sm font-semibold text-white animate-in slide-in-from-bottom-4 duration-300 ${bg}`}
    >
      {type === "success" ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
      {msg}
      <button onClick={onClose} className="ml-2 opacity-80 hover:opacity-100">
        X
      </button>
    </div>
  );
}

function ProvisioningPage() {
  const [qrs, setQrs] = useState<QRItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedQrs, setSelectedQrs] = useState<Set<string>>(new Set());

  // WebSerial state
  const [serialPort, setSerialPort] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [serialLog, setSerialLog] = useState<string>("");

  // Config Form
  const [ssid, setSsid] = useState("");
  const [pass, setPass] = useState("");
  const [serverIp, setServerIp] = useState("");

  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" | "info" } | null>(null);
  const [isPushing, setIsPushing] = useState(false);

  const showToast = (msg: string, type: "success" | "error" | "info") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  useEffect(() => {
    loadQrs();
    if (typeof window !== "undefined") {
      setServerIp(window.location.hostname);
    }
  }, []);

  const loadQrs = async () => {
    setIsLoading(true);
    try {
      const data = await fetchApi<QRItem[]>("/qr");
      setQrs(data || []);
    } catch (err: any) {
      showToast("Gagal memuat QR: " + err.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  // ─── WebSerial ──────────────────────────────────────────────────────────
  const connectSerial = async () => {
    if (!("serial" in navigator)) {
      showToast("Browser Anda tidak mendukung WebSerial. Gunakan Chrome atau Edge.", "error");
      return;
    }
    try {
      // @ts-ignore
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 115200 });
      setSerialPort(port);
      setIsConnected(true);
      showToast("ESP32 berhasil terhubung!", "success");
      readSerialLoop(port);
    } catch (err: any) {
      console.error(err);
      showToast("Gagal terhubung ke ESP32", "error");
    }
  };

  const readSerialLoop = async (port: any) => {
    const textDecoder = new TextDecoderStream();
    const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();

    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          setSerialLog((prev) => prev + value);
        }
      }
    } catch (err) {
      console.error("Serial read error", err);
    } finally {
      reader.releaseLock();
    }
  };

  const pushConfig = async () => {
    if (!serialPort) {
      showToast("Serial belum terhubung!", "error");
      return;
    }
    if (selectedQrs.size === 0) {
      showToast("Pilih minimal 1 QR!", "error");
      return;
    }
    if (!ssid || !pass || !serverIp) {
      showToast("WiFi SSID, Password, dan IP harus diisi!", "error");
      return;
    }

    setIsPushing(true);

    const payload = {
      cmd: "config",
      wifi_ssid: ssid,
      wifi_pass: pass,
      server_ip: serverIp,
      port: 4000,
      listen_qrs: Array.from(selectedQrs),
    };

    const jsonStr = JSON.stringify(payload) + "\n";

    try {
      const textEncoder = new TextEncoderStream();
      const writableStreamClosed = textEncoder.readable.pipeTo(serialPort.writable);
      const writer = textEncoder.writable.getWriter();
      await writer.write(jsonStr);
      writer.releaseLock();
      showToast("Konfigurasi berhasil dikirim ke ESP32!", "success");
    } catch (err) {
      console.error("Write error", err);
      showToast("Gagal mengirim konfigurasi", "error");
    } finally {
      setIsPushing(false);
    }
  };

  const toggleQr = (qrId: string) => {
    const next = new Set(selectedQrs);
    if (next.has(qrId)) {
      next.delete(qrId);
    } else {
      next.add(qrId);
    }
    setSelectedQrs(next);
  };

  const filteredQrs = qrs.filter(
    (q) => !search || q.part_name.toLowerCase().includes(search.toLowerCase()) || q.qr_id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Sistem Hardware</span>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl flex items-center gap-3">
            <Usb className="h-7 w-7 text-[#C05C30]" />
            ESP32 USB Provisioning
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Zero-Touch Serial Setup: Sambungkan ESP32 via USB untuk mengirimkan konfigurasi WiFi dan target QR Code secara langsung tanpa flashing ulang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* Left Column: QR Selection */}
          <div className="flex flex-col gap-4 h-[calc(100vh-220px)] min-h-[500px]">
            <div className="rounded-2xl border border-border-surface bg-surface-section p-5 flex-1 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#C05C30]" />
                  Pilih QR Codes (Multi-select)
                </h2>
                <span className="text-xs font-bold px-2 py-1 bg-surface-elevated rounded-md">{selectedQrs.size} terpilih</span>
              </div>

              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari QR..."
                  className="w-full rounded-lg border border-border-surface bg-card-elevated pl-8 pr-3 py-2 text-sm outline-none focus:border-[#C05C30]"
                />
              </div>

              <div className="flex-1 overflow-y-auto space-y-1.5 scrollbar-thin pr-1">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full gap-2 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span className="text-sm">Memuat daftar QR...</span>
                  </div>
                ) : filteredQrs.length === 0 ? (
                  <div className="text-center text-sm text-muted-foreground py-8">Tidak ada QR ditemukan.</div>
                ) : (
                  filteredQrs.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => toggleQr(q.qr_id)}
                      className={`w-full text-left rounded-xl px-4 py-3 text-sm transition-smooth border ${
                        selectedQrs.has(q.qr_id)
                          ? "bg-[#C05C30]/20 border-[#C05C30]/50"
                          : "bg-card hover:bg-card-elevated border-border-surface"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-semibold text-foreground block">{q.part_name}</span>
                          <span className="text-xs text-muted-foreground">{q.qr_id} &middot; {q.factory}</span>
                        </div>
                        {selectedQrs.has(q.qr_id) && <CheckCircle2 className="h-4 w-4 text-[#C05C30]" />}
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Serial Settings */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border-surface bg-surface-section p-5">
              <h2 className="text-sm font-semibold flex items-center gap-2 mb-4">
                <Cpu className="h-4 w-4 text-[#C05C30]" />
                Koneksi Serial
              </h2>
              
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={connectSerial}
                  disabled={isConnected}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-smooth ${
                    isConnected ? "bg-emerald-500/20 text-emerald-400 cursor-not-allowed" : "bg-[#C05C30] text-white hover:bg-[#A04A26]"
                  }`}
                >
                  {isConnected ? "Terhubung" : "Connect ESP32"}
                </button>
              </div>
              
              {isConnected && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-medium flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Serial port aktif. Siap menerima konfigurasi.
                </div>
              )}

              <div className="space-y-4 border-t border-border-surface pt-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider flex items-center gap-1">
                    <Wifi className="w-3 h-3" /> WiFi SSID
                  </label>
                  <input
                    value={ssid}
                    onChange={(e) => setSsid(e.target.value)}
                    placeholder="Nama WiFi Pabrik"
                    className="w-full rounded-lg border border-border-surface bg-card-elevated px-3 py-2 text-sm outline-none focus:border-[#C05C30]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> WiFi Password
                  </label>
                  <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="Password WiFi"
                    className="w-full rounded-lg border border-border-surface bg-card-elevated px-3 py-2 text-sm outline-none focus:border-[#C05C30]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider flex items-center gap-1">
                    <Server className="w-3 h-3" /> IP Server Gate
                  </label>
                  <input
                    value={serverIp}
                    onChange={(e) => setServerIp(e.target.value)}
                    placeholder="192.168.1.100"
                    className="w-full rounded-lg border border-border-surface bg-card-elevated px-3 py-2 text-sm outline-none focus:border-[#C05C30]"
                  />
                  <p className="text-[10px] text-muted-foreground mt-1">IP komputer ini yang menjalankan @betogate TCP Server (port 4000).</p>
                </div>

                <button
                  onClick={pushConfig}
                  disabled={!isConnected || isPushing}
                  className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-surface-elevated border border-[#C05C30] py-3 text-sm font-semibold text-[#C05C30] transition-smooth hover:bg-[#C05C30] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPushing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  Push Config
                </button>
              </div>
            </div>

            {/* Serial Log Terminal */}
            <div className="rounded-2xl border border-border-surface bg-[#0a0d14] p-4 flex-1 flex flex-col min-h-[200px]">
              <div className="text-xs font-semibold text-muted-foreground mb-2 flex items-center justify-between">
                <span>SERIAL TERMINAL</span>
                <button onClick={() => setSerialLog("")} className="hover:text-foreground">Clear</button>
              </div>
              <div className="flex-1 overflow-y-auto font-mono text-[11px] text-emerald-400 whitespace-pre-wrap">
                {serialLog || "Menunggu data dari ESP32..."}
              </div>
            </div>
          </div>
        </div>
      </div>
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
    </DashboardLayout>
  );
}
