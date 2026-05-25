hey there if you read this, that means my contract has been completed, sorry. btw im leaving this project i hope you can maintain it well - Rizky Daffy

Factory Inventory QR System — API Documentation (PROTOTYPE INFRASTUCTURES)

HOW IT WORKS?
there 2 main logic from this system, where just made it once (1 qr) and keep it forever, there's no need to update qr over and over again just make it one times and qr data will automaticly registered and connected with "in & out" system , sistem in&out adalah sistem logika sederhana dimana pengguna akan scan qr nya dan buat status nya: status:in dan status ini akan terganti jadi out ketika user mengscan lagi qr nya kedua kali nya dengan syarat qr harus dalam status:in dan bukan out dan begitu seterus nya untuk in lagi user harus scan lagi qr nya, jadi qr nya static namun isi dari qr nya dinamis jadi cukup buat 1x sudah terinclude di @SCANLOGIC,


Technical FLOW :
[1] Generate QR (with data inputed from "/" and click Create QR Code)  →  [2] Tampilkan Info QR (when it succes, show on "QR Code Created" section on "/")  →  [3] Buka Scanner (on /scan)   →  [4] Proses Scan (@SCANLOGIC)  →  [5] Monitor History (Will be dosplayed at /task-history)


Daftar Route :
[1] Route: /api/qr/generate, Method: POST,  Fungsi: Generate QR Code baru untuk sebuah batch part
[2] Route: /api/qr/info?token=..., Method: GET,  Fungsi: Tampilkan info & status QR (akses via browser/HP)
[3] Route: /api/qr/process, Method: POST,  Fungsi: processProses toggle SCAN IN / SCAN OUT
[4] Route: /api/qr/history, Method: GET/JSON,  Fungsi: monitoring semua batch & status real-time

WARN:
DO NOT TOUCH GUARDIAN HASH IN guardian.js 

for refences:
// ==========================================
// C. ENDPOINT: PROSES SCAN (UNTUK APLIKASI CUSTOM)
// Aplikasi kamu akan memanggil ini via Method POST
// ==========================================
app.post('/api/qr/process', (req, res) => {
    const { token } = req.body;

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const { batchId, partName, value } = decoded;

        // LOGIKA SESSION CACHE (IN vs OUT)
        if (redis_session_cache.has(batchId)) {
            // JIKA ADA DI CACHE -> ARTINYA INI PROSES SCAN OUT
            redis_session_cache.delete(batchId); // Hapus dari cache
            
            // Catat ke Database Utama (Soft append log)
            db_history.push({ batchId, action: 'SCAN_OUT', time: new Date() });

            return res.json({
                success: true,
                action: "OUT",
                message: `${partName} sejumlah ${value} unit berhasil di SCAN OUT.`
            });

        } else {
            // JIKA TIDAK ADA DI CACHE -> ARTINYA INI PROSES SCAN IN
            // Masukkan ke cache
            redis_session_cache.set(batchId, {
                metadata: decoded,
                scannedInAt: new Date()
            });

            // Catat ke Database Utama
            db_history.push({ batchId, action: 'SCAN_IN', time: new Date() });

            return res.json({
                success: true,
                action: "IN",
                message: `${partName} sejumlah ${value} unit masuk proses (SCAN IN).`
            });
        }

    } catch (error) {
        res.status(401).json({ success: false, message: "Token QR Manipulasi / Invalid" });
    }
});


