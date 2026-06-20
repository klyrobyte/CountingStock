This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.env.example
.gitignore
.prettierignore
.prettierrc
BACAGWE.md
bunfig.toml
check-click.js
components.json
database.sql
docs/.gitignore
docs/blog/2019-05-28-first-blog-post.mdx
docs/blog/2019-05-29-long-blog-post.mdx
docs/blog/2021-08-01-mdx-blog-post.mdx
docs/blog/2021-08-26-welcome/docusaurus-plushie-banner.jpeg
docs/blog/2021-08-26-welcome/index.mdx
docs/blog/authors.yml
docs/blog/tags.yml
docs/docs/intro.mdx
docs/docs/tutorial-basics/_category_.json
docs/docs/tutorial-basics/congratulations.mdx
docs/docs/tutorial-basics/create-a-blog-post.mdx
docs/docs/tutorial-basics/create-a-document.mdx
docs/docs/tutorial-basics/create-a-page.mdx
docs/docs/tutorial-basics/deploy-your-site.mdx
docs/docs/tutorial-basics/markdown-features.mdx
docs/docs/tutorial-extras/_category_.json
docs/docs/tutorial-extras/img/docsVersionDropdown.png
docs/docs/tutorial-extras/img/localeDropdown.png
docs/docs/tutorial-extras/manage-docs-versions.mdx
docs/docs/tutorial-extras/translate-your-site.mdx
docs/docusaurus.config.ts
docs/package.json
docs/README.md
docs/sidebars.ts
docs/src/components/HomepageFeatures/index.tsx
docs/src/components/HomepageFeatures/styles.module.css
docs/src/css/custom.css
docs/src/pages/index.module.css
docs/src/pages/index.tsx
docs/src/pages/markdown-page.mdx
docs/static/.nojekyll
docs/static/img/docusaurus-social-card.jpg
docs/static/img/docusaurus.png
docs/static/img/favicon.ico
docs/static/img/logo.svg
docs/static/img/undraw_docusaurus_mountain.svg
docs/static/img/undraw_docusaurus_react.svg
docs/static/img/undraw_docusaurus_tree.svg
docs/tsconfig.json
eslint.config.js
guardian.js
package.json
PREDEPLOY_CHECK.md
public/ascii-signature.js
server/db.ts
server/index.ts
server/lib/stockAnalyticsCalc.ts
server/lib/stockAnalyticsService.ts
server/middleware/authMiddleware.ts
server/middleware/internalKeyMiddleware.ts
server/migrate-big-update.ts
server/migrate-devices.ts
server/migrate-scan-records-partstats.ts
server/migrate-v2.ts
server/migrate-v3-qty-per-day.ts
server/migrate-v3.ts
server/migrate-v4-short-token.ts
server/migrate-v4.ts
server/migrate-v5.ts
server/migrate.ts
server/routes/auth.ts
server/routes/categories.ts
server/routes/customers.ts
server/routes/devices.ts
server/routes/factories.ts
server/routes/masterParts.ts
server/routes/mesin.ts
server/routes/models.ts
server/routes/privileges.ts
server/routes/qr.ts
server/routes/scan.ts
server/routes/stock.ts
server/routes/stockAnalytics.ts
server/routes/tasks.ts
server/routes/teitei.ts
server/routes/users.ts
server/temp_migrate.ts
server/tsconfig.json
src/components/dashboard/DashboardLayout.tsx
src/components/dashboard/MasterDataManagement.tsx
src/components/dashboard/PageSkeleton.tsx
src/components/dashboard/PageTransition.tsx
src/components/dashboard/Placeholder.tsx
src/components/dashboard/Sidebar.tsx
src/components/dashboard/WorkspaceSwitcher.tsx
src/components/mesin/MinimumStockGrid.tsx
src/components/ui/accordion-content.tsx
src/components/ui/accordion-item.tsx
src/components/ui/accordion-trigger.tsx
src/components/ui/accordion.tsx
src/components/ui/alert-description.tsx
src/components/ui/alert-dialog.tsx
src/components/ui/alert-title.tsx
src/components/ui/alert.tsx
src/components/ui/aspect-ratio.tsx
src/components/ui/avatar.tsx
src/components/ui/badge.tsx
src/components/ui/breadcrumb.tsx
src/components/ui/button.tsx
src/components/ui/calendar.tsx
src/components/ui/card.tsx
src/components/ui/carousel.tsx
src/components/ui/chart.tsx
src/components/ui/checkbox.tsx
src/components/ui/collapsible.tsx
src/components/ui/command.tsx
src/components/ui/context-menu.tsx
src/components/ui/dialog.tsx
src/components/ui/drawer.tsx
src/components/ui/dropdown-menu.tsx
src/components/ui/form.tsx
src/components/ui/hover-card.tsx
src/components/ui/input-otp-group.tsx
src/components/ui/input-otp-separator.tsx
src/components/ui/input-otp-slot.tsx
src/components/ui/input-otp.tsx
src/components/ui/input.tsx
src/components/ui/label.tsx
src/components/ui/menubar.tsx
src/components/ui/navigation-menu.tsx
src/components/ui/pagination.tsx
src/components/ui/popover.tsx
src/components/ui/progress.tsx
src/components/ui/radio-group.tsx
src/components/ui/resizable.tsx
src/components/ui/scroll-area.tsx
src/components/ui/select.tsx
src/components/ui/separator.tsx
src/components/ui/sheet.tsx
src/components/ui/sidebar.tsx
src/components/ui/skeleton.tsx
src/components/ui/slider.tsx
src/components/ui/sonner.tsx
src/components/ui/switch.tsx
src/components/ui/table.tsx
src/components/ui/tabs.tsx
src/components/ui/textarea.tsx
src/components/ui/toggle-group.tsx
src/components/ui/toggle.tsx
src/components/ui/tooltip.tsx
src/hooks/use-auth.ts
src/hooks/use-devices.ts
src/hooks/use-master-data.ts
src/hooks/use-master-parts.ts
src/hooks/use-mesin.ts
src/hooks/use-mobile.tsx
src/hooks/use-privileges.ts
src/hooks/use-qr-codes.ts
src/hooks/use-qr-process.ts
src/hooks/use-scan-sound.ts
src/hooks/use-scans.ts
src/hooks/use-station-scan.ts
src/hooks/use-stock.ts
src/hooks/use-tasks.ts
src/hooks/use-teitei.ts
src/hooks/use-theme.tsx
src/hooks/use-tv-dashboard.ts
src/hooks/use-users.ts
src/lib/api.ts
src/lib/auth.ts
src/lib/utils.ts
src/router.tsx
src/routes/__root.tsx
src/routes/all-qr.tsx
src/routes/category.tsx
src/routes/customer.tsx
src/routes/dashboard.tsx
src/routes/devices.tsx
src/routes/factory.tsx
src/routes/index.tsx
src/routes/login.tsx
src/routes/master-data/create.tsx
src/routes/master-data/index.tsx
src/routes/mesin/create.tsx
src/routes/mesin/index.tsx
src/routes/model.tsx
src/routes/qr-privileges.tsx
src/routes/qr-viewer.tsx
src/routes/scan.tsx
src/routes/station/dashboard.tsx
src/routes/station/login.tsx
src/routes/task-history.tsx
src/routes/teitei.tsx
src/routes/tv.css
src/routes/tv.tsx
src/routes/users/create.tsx
src/routes/users/index.tsx
src/routes/view-stock.tsx
src/routeTree.gen.ts
src/styles.css
stock_tv.html
tsconfig.json
vite.config.ts
wrangler.jsonc
```

# Files

## File: .env.example
`````
# ─── Required Environment Variables ─────────────────────────────────────────
# Copy this file to .env and fill in your values before starting the server.
# NEVER commit .env to version control use .gitignore, once it get pushed i'll come and slime over yo house.

# ─── Database (MySQL / phpMyAdmin) ───────────────────────────────────────────
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_database_password
DB_NAME=outindb

# ─── Express API Server ───────────────────────────────────────────────────────
# Port the API server listens on. The Vite proxy forwards /api/* to this port.
API_PORT=3001

# ─── JWT Secret ───────────────────────────────────────────────────────────────
# Used to sign and verify auth tokens. Use a long, random string in production.
# Generate one: node -e "console.log(require('crypto').randomBytes(40).toString('hex'))"
JWT_SECRET=your-super-secret-jwt-key-minimum-32-chars #for more safety requirement it must get encrpyted using sha-1 or 256

# ─── QR Code Base URL ─────────────────────────────────────────────────────────
# The public-facing URL of your API, embedded in generated QR codes.
# Update this to your production domain or server IP for phone-based scanning.
API_BASE_URL=https://yourdomain.com

# ─── Internal API Key (QR Privilege System) ──────────────────────────────────
# Protects /api/privileges/* endpoints from external access.
# Must be the SAME value on both server and Vite (VITE_ prefix for client build).
# Generate: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
INTERNAL_API_KEY=your-internal-api-key-here
VITE_INTERNAL_API_KEY=your-internal-api-key-here
`````

## File: .prettierignore
`````
node_modules
dist
.output
.vinxi
pnpm-lock.yaml
package-lock.json
routeTree.gen.ts
`````

## File: .prettierrc
`````
{
  "printWidth": 100,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all"
}
`````

## File: BACAGWE.md
`````markdown
hey there if you read this, that means my contract has been completed, sorry. btw im leaving this project i hope you can maintain it well - Rizky Daffy

Factory Inventory QR System - API Documentation (PROTOTYPE INFRASTUCTURES)

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
`````

## File: bunfig.toml
`````toml
[install]
saveTextLockfile = false
`````

## File: check-click.js
`````javascript
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/login', { waitUntil: 'networkidle2' });

  const btn = await page.$('#btn-ayo-masuk');
  if (btn) {
    const isIntersecting = await btn.isIntersectingViewport();
    const box = await btn.boundingBox();
    console.log('Button found!', { isIntersecting, box });
    
    // get element at center of button
    const elementAtPoint = await page.evaluate((x, y) => {
        const el = document.elementFromPoint(x, y);
        return el ? { tagName: el.tagName, id: el.id, className: el.className } : null;
    }, box.x + box.width / 2, box.y + box.height / 2);
    
    console.log('Element at point:', elementAtPoint);
    
    // Click the button
    try {
        await btn.click();
        console.log('Clicked successfully!');
    } catch(err) {
        console.error('Click failed:', err.message);
    }
  } else {
    console.log('Button not found!');
  }

  await browser.close();
})();
`````

## File: components.json
`````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "css": "src/styles.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
`````

## File: database.sql
`````sql
-- Create the Database
CREATE DATABASE IF NOT EXISTS `outindb`;
USE `outindb`;

-- Table structure for qr_codes
CREATE TABLE IF NOT EXISTS qr_codes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  qr_id VARCHAR(20) NOT NULL UNIQUE,
  batch_id VARCHAR(60) UNIQUE,
  part_name VARCHAR(255) NOT NULL,
  factory VARCHAR(255) NOT NULL,
  material VARCHAR(255) DEFAULT '',
  qr_value VARCHAR(255) NOT NULL,
  units INT NOT NULL DEFAULT 0,
  token TEXT,
  qr_image_base64 MEDIUMTEXT,
  status ENUM('in', 'out') DEFAULT 'in',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for stock
-- Linked to qr_codes via batch_id (one stock row per QR created)
-- current_stock starts at 0; +units on SCAN_IN, -units on SCAN_OUT
-- percentage = current_stock / unit_value * 100
-- trend: 'up' after SCAN_IN, 'down' after SCAN_OUT, 'none' = initial / empty
CREATE TABLE IF NOT EXISTS stock (
  id INT AUTO_INCREMENT PRIMARY KEY,
  batch_id VARCHAR(60) NOT NULL UNIQUE,
  qr_id VARCHAR(20) NOT NULL,
  part_name VARCHAR(255) NOT NULL,
  factory VARCHAR(255) NOT NULL,
  unit_value INT NOT NULL DEFAULT 0,      -- declared units per QR (from generate)
  current_stock INT NOT NULL DEFAULT 0,   -- live running total
  trend ENUM('up', 'down', 'none') DEFAULT 'none',
  percentage DECIMAL(5,2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for tasks
CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task_id VARCHAR(20) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  type ENUM('Scan In', 'Scan Out', 'QR Created', 'Audit') NOT NULL,
  status ENUM('completed', 'pending', 'failed') DEFAULT 'pending',
  user VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for devices
CREATE TABLE IF NOT EXISTS devices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  type ENUM('phone', 'tablet') DEFAULT 'phone',
  status ENUM('online', 'offline') DEFAULT 'offline',
  battery INT DEFAULT 0,
  location VARCHAR(255) DEFAULT '',
  last_sync TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for scan_records
CREATE TABLE IF NOT EXISTS scan_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  batch_id VARCHAR(60),
  qr_id VARCHAR(20) NOT NULL,
  label VARCHAR(255) NOT NULL,
  factory VARCHAR(255) NOT NULL,
  action ENUM('SCAN_IN', 'SCAN_OUT') DEFAULT 'SCAN_IN',
  scanned_by VARCHAR(100) DEFAULT 'System',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Data for qr_codes
INSERT IGNORE INTO qr_codes (qr_id, part_name, factory, material, qr_value, units, created_at) VALUES
('QR-1042', 'Resin Cap', 'Factory Seizo', 'Plastic Resin', '120', 120, '2026-04-17 09:24:00'),
('QR-1041', 'Bracket M-22', 'Factory Aichi', 'Aluminum Sheet', '60', 60, '2026-04-16 08:52:00'),
('QR-1040', 'Coil Spring', 'Factory Karawang', 'Copper Coil', '200', 200, '2026-04-15 10:00:00'),
('QR-1039', 'Hinge B-04', 'Factory Aichi', 'Steel Plate', '40', 40, '2026-04-14 14:30:00'),
('QR-1038', 'Gasket R-9', 'Factory Karawang', 'Plastic Resin', '90', 90, '2026-04-13 11:15:00'),
('QR-1037', 'Lorem Ipsum A', 'Factory Seizo', 'Steel Plate', '10', 10, '2026-04-12 16:00:00'),
('QR-1036', 'Plate X-11', 'Factory Seizo', 'Steel Plate', '320', 320, '2026-04-11 09:00:00'),
('QR-1035', 'Clip Z-3', 'Factory Aichi', 'Aluminum Sheet', '150', 150, '2026-04-10 13:45:00');

-- Seed Data for stock
INSERT IGNORE INTO stock (part_name, factory, material, units, trend, delta) VALUES
('Lorem Ipsum A', 'Factory Seizo', 'Steel Plate', 1240, 'up', 12),
('Bracket M-22', 'Factory Aichi', 'Aluminum Sheet', 860, 'down', 4),
('Coil Spring', 'Factory Karawang', 'Copper Coil', 432, 'up', 6),
('Resin Cap', 'Factory Seizo', 'Plastic Resin', 2120, 'up', 18),
('Hinge B-04', 'Factory Aichi', 'Steel Plate', 78, 'down', 22),
('Gasket R-9', 'Factory Karawang', 'Plastic Resin', 540, 'up', 3);

-- Seed Data for tasks
INSERT IGNORE INTO tasks (task_id, title, type, status, user, created_at) VALUES
('T-1042', 'Inbound batch SZ-2026-04-17', 'Scan In', 'completed', 'Hana', '2026-04-17 09:24:00'),
('T-1041', 'QR for Resin Cap (×120)', 'QR Created', 'completed', 'Bima', '2026-04-17 08:52:00'),
('T-1040', 'Outbound to Aichi line 3', 'Scan Out', 'pending', 'Rama', '2026-04-17 08:10:00'),
('T-1039', 'Quarterly audit Karawang', 'Audit', 'completed', 'Sari', '2026-04-16 17:45:00'),
('T-1038', 'QR for Bracket M-22 (×60)', 'QR Created', 'failed', 'Bima', '2026-04-16 16:02:00'),
('T-1037', 'Inbound batch AC-2026-04-16', 'Scan In', 'completed', 'Hana', '2026-04-16 11:30:00');

-- Seed Data for devices
INSERT IGNORE INTO devices (name, model, type, status, battery, location, last_sync) VALUES
('Scanner A-01', 'Pixel 8', 'phone', 'online', 86, 'Factory Seizo · Line 1', NOW()),
('Scanner A-02', 'Pixel 8', 'phone', 'online', 42, 'Factory Seizo · Line 2', DATE_SUB(NOW(), INTERVAL 2 MINUTE)),
('Audit Tab T-01', 'Pixel Tablet', 'tablet', 'online', 67, 'Factory Aichi · QC', DATE_SUB(NOW(), INTERVAL 5 MINUTE)),
('Scanner B-04', 'Pixel 7a', 'phone', 'offline', 12, 'Factory Karawang · Dock', DATE_SUB(NOW(), INTERVAL 3 HOUR)),
('Audit Tab T-02', 'Pixel Tablet', 'tablet', 'offline', 0, 'Factory Aichi · Storage', DATE_SUB(NOW(), INTERVAL 1 DAY));

-- Seed Data for scan_records
INSERT IGNORE INTO scan_records (qr_id, label, factory, action, scanned_by, created_at) VALUES
('QR-1042', 'Resin Cap', 'Factory Seizo', 'SCAN_IN', 'Hana', DATE_SUB(NOW(), INTERVAL 2 MINUTE)),
('QR-1041', 'Bracket M-22', 'Factory Aichi', 'SCAN_OUT', 'Bima', DATE_SUB(NOW(), INTERVAL 14 MINUTE)),
('QR-1040', 'Coil Spring', 'Factory Karawang', 'SCAN_IN', 'Rama', DATE_SUB(NOW(), INTERVAL 1 HOUR));

-- ─── QR Privilege System ─────────────────────────────────────────────────────
-- Tabel ini menyimpan konfigurasi privilege QR per akun station.
-- Logika:
--   - Jika TIDAK ADA baris untuk station_id tertentu → station mode DEFAULT (open access, bisa scan semua QR)
--   - Jika ADA baris untuk station_id tertentu → mode RESTRICTED (hanya bisa scan QR yang terdaftar di sini)
--   - Satu station bisa punya BANYAK baris (banyak QR yang diizinkan)
CREATE TABLE IF NOT EXISTS station_qr_privileges (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  station_id    INT NOT NULL,         -- FK ke devices.id (akun station)
  qr_id         INT NOT NULL,         -- FK ke qr_codes.id (QR yang diizinkan)
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_station_qr (station_id, qr_id),
  KEY idx_station_id (station_id),
  KEY idx_qr_id (qr_id)
);
`````

## File: docs/.gitignore
`````
# Dependencies
/node_modules

# Production
/build

# Generated files
.docusaurus
.cache-loader

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`````

## File: docs/blog/2019-05-28-first-blog-post.mdx
`````markdown
---
slug: first-blog-post
title: First Blog Post
authors: [slorber, yangshun]
tags: [hola, docusaurus]
---

Lorem ipsum dolor sit amet...

{/* truncate */}

...consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
`````

## File: docs/blog/2019-05-29-long-blog-post.mdx
`````markdown
---
slug: long-blog-post
title: Long Blog Post
authors: yangshun
tags: [hello, docusaurus]
---

This is the summary of a very long blog post,

Use a `{/*` `truncate` `*/}` comment to limit blog post size in the list view.

{/* truncate */}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
`````

## File: docs/blog/2021-08-01-mdx-blog-post.mdx
`````markdown
---
slug: mdx-blog-post
title: MDX Blog Post
authors: [slorber]
tags: [docusaurus]
---

Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).

:::tip

Use the power of React to create interactive blog posts.

:::

{/* truncate */}

For example, use JSX to create an interactive button:

```js
<button onClick={() => alert('button clicked!')}>Click me!</button>
```

<button onClick={() => alert('button clicked!')}>Click me!</button>
`````

## File: docs/blog/2021-08-26-welcome/index.mdx
`````markdown
---
slug: welcome
title: Welcome
authors: [slorber, yangshun]
tags: [facebook, hello, docusaurus]
---

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Here are a few tips you might find useful.

{/* truncate */}

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config.
`````

## File: docs/blog/authors.yml
`````yaml
yangshun:
  name: Yangshun Tay
  title: Ex-Meta Staff Engineer, Co-founder GreatFrontEnd
  url: https://linkedin.com/in/yangshun
  image_url: https://github.com/yangshun.png
  page: true
  socials:
    x: yangshunz
    linkedin: yangshun
    github: yangshun
    newsletter: https://www.greatfrontend.com

slorber:
  name: Sébastien Lorber
  title: Docusaurus maintainer
  url: https://sebastienlorber.com
  image_url: https://github.com/slorber.png
  page:
    # customize the url of the author page at /blog/authors/<permalink>
    permalink: '/all-sebastien-lorber-articles'
  socials:
    x: sebastienlorber
    linkedin: sebastienlorber
    github: slorber
    newsletter: https://thisweekinreact.com
`````

## File: docs/blog/tags.yml
`````yaml
facebook:
  label: Facebook
  permalink: /facebook
  description: Facebook tag description

hello:
  label: Hello
  permalink: /hello
  description: Hello tag description

docusaurus:
  label: Docusaurus
  permalink: /docusaurus
  description: Docusaurus tag description

hola:
  label: Hola
  permalink: /hola
  description: Hola tag description
`````

## File: docs/docs/intro.mdx
`````markdown
---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 20.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
`````

## File: docs/docs/tutorial-basics/_category_.json
`````json
{
  "label": "Tutorial - Basics",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "5 minutes to learn the most important Docusaurus concepts."
  }
}
`````

## File: docs/docs/tutorial-basics/congratulations.mdx
`````markdown
---
sidebar_position: 6
---

# Congratulations!

You have just learned the **basics of Docusaurus** and made some changes to the **initial template**.

Docusaurus has **much more to offer**!

Have **5 more minutes**? Take a look at **[versioning](../tutorial-extras/manage-docs-versions.mdx)** and **[i18n](../tutorial-extras/translate-your-site.mdx)**.

Anything **unclear** or **buggy** in this tutorial? [Please report it!](https://github.com/facebook/docusaurus/discussions/4610)

## What's next?

- Read the [official documentation](https://docusaurus.io/)
- Modify your site configuration with [`docusaurus.config.js`](https://docusaurus.io/docs/api/docusaurus-config)
- Add navbar and footer items with [`themeConfig`](https://docusaurus.io/docs/api/themes/configuration)
- Add a custom [Design and Layout](https://docusaurus.io/docs/styling-layout)
- Add a [search bar](https://docusaurus.io/docs/search)
- Find inspirations in the [Docusaurus showcase](https://docusaurus.io/showcase)
- Get involved in the [Docusaurus Community](https://docusaurus.io/community/support)
`````

## File: docs/docs/tutorial-basics/create-a-blog-post.mdx
`````markdown
---
sidebar_position: 3
---

# Create a Blog Post

Docusaurus creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...

## Create your first Post

Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much as you like.
```

A new blog post is now available at [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
`````

## File: docs/docs/tutorial-basics/create-a-document.mdx
`````markdown
---
sidebar_position: 2
---

# Create a Document

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
`````

## File: docs/docs/tutorial-basics/create-a-page.mdx
`````markdown
---
sidebar_position: 1
---

# Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
`````

## File: docs/docs/tutorial-basics/deploy-your-site.mdx
`````markdown
---
sidebar_position: 5
---

# Deploy your site

Docusaurus is a **static-site-generator** (also called **[Jamstack](https://jamstack.org/)**).

It builds your site as simple **static HTML, JavaScript and CSS files**.

## Build your site

Build your site **for production**:

```bash
npm run build
```

The static files are generated in the `build` folder.

## Deploy your site

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at [http://localhost:3000/](http://localhost:3000/).

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).
`````

## File: docs/docs/tutorial-basics/markdown-features.mdx
`````markdown
---
sidebar_position: 4
---

# Markdown Features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

## Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

Markdown content
```

## Headings {/* #my-heading-id */}

Markdown headings are supported using the standard “#” syntax and are automatically added to the table of contents. The number of `#` corresponds to the heading level.

```md
## Headings

My text
```

### Heading Ids {/* #my-custom-id */}

Add `{/* #my-custom-id */}` after the heading text to assign it an explicit anchor id, used for linking.

```md
### Heading Ids {/_ #my-custom-id _/}
```

## Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page](/create-a-page).
```

```md
Let's see how to [Create a page](./create-a-page.mdx).
```

**Result:** Let's see how to [Create a page](./create-a-page.mdx).

## Images

Regular Markdown images are supported.

You can use absolute paths to reference images in the static directory (`static/img/docusaurus.png`):

```md
![Docusaurus logo](/img/docusaurus.png)
```

![Docusaurus logo](/img/docusaurus.png)

You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:

```md
![Docusaurus logo](./img/docusaurus.png)
```

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

````md
```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```
````

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

```md
:::tip[My tip]

Use this awesome feature option

:::

:::danger[Take care]

This action is dangerous

:::
```

:::tip[My tip]

Use this awesome feature option

:::

:::danger[Take care]

This action is dangerous

:::

## MDX and React Components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
`````

## File: docs/docs/tutorial-extras/_category_.json
`````json
{
  "label": "Tutorial - Extras",
  "position": 3,
  "link": {
    "type": "generated-index"
  }
}
`````

## File: docs/docs/tutorial-extras/manage-docs-versions.mdx
`````markdown
---
sidebar_position: 1
---

# Manage Docs Versions

Docusaurus can manage multiple versions of your docs.

## Create a docs version

Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## Add a Version Dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
`````

## File: docs/docs/tutorial-extras/translate-your-site.mdx
`````markdown
---
sidebar_position: 2
---

# Translate your site

Let's translate `docs/intro.md` to French.

## Configure i18n

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Translate a doc

Copy the `docs/intro.md` file to the `i18n/fr` folder:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.

## Start your localized site

Start your site on the French locale:

```bash
npm run start -- --locale fr
```

Your localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a time.

:::

## Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```
`````

## File: docs/docusaurus.config.ts
`````typescript
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
`````

## File: docs/package.json
`````json
{
  "name": "docs",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
    "typecheck": "tsc"
  },
  "dependencies": {
    "@docusaurus/core": "3.10.1",
    "@docusaurus/faster": "3.10.1",
    "@docusaurus/preset-classic": "3.10.1",
    "@mdx-js/react": "^3.0.0",
    "clsx": "^2.0.0",
    "prism-react-renderer": "^2.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "3.10.1",
    "@docusaurus/tsconfig": "3.10.1",
    "@docusaurus/types": "3.10.1",
    "@types/react": "^19.0.0",
    "typescript": "~6.0.2"
  },
  "browserslist": {
    "production": [
      ">0.5%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 3 chrome version",
      "last 3 firefox version",
      "last 5 safari version"
    ]
  },
  "engines": {
    "node": ">=20.0"
  }
}
`````

## File: docs/README.md
`````markdown
# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
`````

## File: docs/sidebars.ts
`````typescript
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
`````

## File: docs/src/components/HomepageFeatures/index.tsx
`````typescript
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
`````

## File: docs/src/components/HomepageFeatures/styles.module.css
`````css
.features {
  display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
}

.featureSvg {
  height: 200px;
  width: 200px;
}
`````

## File: docs/src/css/custom.css
`````css
/**
 * Any CSS included here will be global. The classic template
 * bundles Infima by default. Infima is a CSS framework designed to
 * work well for content-centric websites.
 */

/* You can override the default Infima variables here. */
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
  --ifm-color-primary-darkest: #205d3b;
  --ifm-color-primary-light: #33925d;
  --ifm-color-primary-lighter: #359962;
  --ifm-color-primary-lightest: #3cad6e;
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

/* For readability concerns, you should choose a lighter palette in dark mode. */
[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}
`````

## File: docs/src/pages/index.module.css
`````css
/**
 * CSS files with the .module.css suffix will be treated as CSS modules
 * and scoped locally.
 */

.heroBanner {
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

@media screen and (max-width: 996px) {
  .heroBanner {
    padding: 2rem;
  }
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}
`````

## File: docs/src/pages/index.tsx
`````typescript
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
`````

## File: docs/src/pages/markdown-page.mdx
`````markdown
---
title: Markdown page example
---

# Markdown page example

You don't need React to write simple standalone pages.
`````

## File: docs/static/.nojekyll
`````

`````

## File: docs/static/img/logo.svg
`````xml
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M99 52h84v34H99z"/><path d="M23 163c-7.398 0-13.843-4.027-17.303-10A19.886 19.886 0 0 0 3 163c0 11.046 8.954 20 20 20h20v-20H23z" fill="#3ECC5F"/><path d="M112.98 57.376L183 53V43c0-11.046-8.954-20-20-20H73l-2.5-4.33c-1.112-1.925-3.889-1.925-5 0L63 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L53 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L43 23c-.022 0-.042.003-.065.003l-4.142-4.141c-1.57-1.571-4.252-.853-4.828 1.294l-1.369 5.104-5.192-1.392c-2.148-.575-4.111 1.389-3.535 3.536l1.39 5.193-5.102 1.367c-2.148.576-2.867 3.259-1.296 4.83l4.142 4.142c0 .021-.003.042-.003.064l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 53l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 63l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 73l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 83l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 93l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 103l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 113l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 123l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 133l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 143l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 153l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 163c0 11.046 8.954 20 20 20h120c11.046 0 20-8.954 20-20V83l-70.02-4.376A10.645 10.645 0 0 1 103 68c0-5.621 4.37-10.273 9.98-10.624" fill="#3ECC5F"/><path fill="#3ECC5F" d="M143 183h30v-40h-30z"/><path d="M193 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 0 0 190.32 148a4.96 4.96 0 0 0-3.016 1.036 26.531 26.531 0 0 0-.335-.336 4.955 4.955 0 0 0 1.011-2.987 5 5 0 0 0-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 0 0-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 0 0 5-5 5 5 0 0 0-5-5" fill="#44D860"/><path fill="#3ECC5F" d="M153 123h30v-20h-30z"/><path d="M193 115.5a2.5 2.5 0 1 0 0-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 0 0-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 0 0-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 0 0-4.8-.979A9.987 9.987 0 0 0 183 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 0 0 4.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 0 0 .963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032" fill="#44D860"/><path d="M63 55.5a2.5 2.5 0 0 1-2.5-2.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5a2.5 2.5 0 1 1-5 0c0-6.893 5.607-12.5 12.5-12.5S65.5 46.107 65.5 53a2.5 2.5 0 0 1-2.5 2.5" fill="#000"/><path d="M103 183h60c11.046 0 20-8.954 20-20V93h-60c-11.046 0-20 8.954-20 20v70z" fill="#FFFF50"/><path d="M168.02 124h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0-49.814h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 19.814h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2M183 61.611c-.012 0-.022-.006-.034-.005-3.09.105-4.552 3.196-5.842 5.923-1.346 2.85-2.387 4.703-4.093 4.647-1.889-.068-2.969-2.202-4.113-4.46-1.314-2.594-2.814-5.536-5.963-5.426-3.046.104-4.513 2.794-5.807 5.167-1.377 2.528-2.314 4.065-4.121 3.994-1.927-.07-2.951-1.805-4.136-3.813-1.321-2.236-2.848-4.75-5.936-4.664-2.994.103-4.465 2.385-5.763 4.4-1.373 2.13-2.335 3.428-4.165 3.351-1.973-.07-2.992-1.51-4.171-3.177-1.324-1.873-2.816-3.993-5.895-3.89-2.928.1-4.399 1.97-5.696 3.618-1.232 1.564-2.194 2.802-4.229 2.724a1 1 0 0 0-.072 2c3.017.101 4.545-1.8 5.872-3.487 1.177-1.496 2.193-2.787 4.193-2.855 1.926-.082 2.829 1.115 4.195 3.045 1.297 1.834 2.769 3.914 5.731 4.021 3.103.104 4.596-2.215 5.918-4.267 1.182-1.834 2.202-3.417 4.15-3.484 1.793-.067 2.769 1.35 4.145 3.681 1.297 2.197 2.766 4.686 5.787 4.796 3.125.108 4.634-2.62 5.949-5.035 1.139-2.088 2.214-4.06 4.119-4.126 1.793-.042 2.728 1.595 4.111 4.33 1.292 2.553 2.757 5.445 5.825 5.556l.169.003c3.064 0 4.518-3.075 5.805-5.794 1.139-2.41 2.217-4.68 4.067-4.773v-2z" fill="#000"/><path fill="#3ECC5F" d="M83 183h40v-40H83z"/><path d="M143 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 0 0 140.32 148a4.96 4.96 0 0 0-3.016 1.036 26.531 26.531 0 0 0-.335-.336 4.955 4.955 0 0 0 1.011-2.987 5 5 0 0 0-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 0 0-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 0 0 5-5 5 5 0 0 0-5-5" fill="#44D860"/><path fill="#3ECC5F" d="M83 123h40v-20H83z"/><path d="M133 115.5a2.5 2.5 0 1 0 0-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 0 0-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 0 0-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 0 0-4.8-.979A9.987 9.987 0 0 0 123 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 0 0 4.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 0 0 .963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032" fill="#44D860"/><path d="M143 41.75c-.16 0-.33-.02-.49-.05a2.52 2.52 0 0 1-.47-.14c-.15-.06-.29-.14-.431-.23-.13-.09-.259-.2-.38-.31-.109-.12-.219-.24-.309-.38s-.17-.28-.231-.43a2.619 2.619 0 0 1-.189-.96c0-.16.02-.33.05-.49.03-.16.08-.31.139-.47.061-.15.141-.29.231-.43.09-.13.2-.26.309-.38.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.65-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.11.12.22.25.31.38.09.14.17.28.23.43.06.16.11.31.14.47.029.16.05.33.05.49 0 .66-.271 1.31-.73 1.77-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 0 1-.96.19m20-1.25c-.66 0-1.3-.27-1.771-.73a3.802 3.802 0 0 1-.309-.38c-.09-.14-.17-.28-.231-.43a2.619 2.619 0 0 1-.189-.96c0-.66.27-1.3.729-1.77.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.66-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.459.47.73 1.11.73 1.77 0 .16-.021.33-.05.49-.03.16-.08.32-.14.47-.07.15-.14.29-.23.43-.09.13-.2.26-.31.38-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 0 1-.96.19" fill="#000"/></g></svg>
`````

## File: docs/static/img/undraw_docusaurus_mountain.svg
`````xml
<svg xmlns="http://www.w3.org/2000/svg" width="1088" height="687.962" viewBox="0 0 1088 687.962">
  <title>Easy to Use</title>
  <g id="Group_12" data-name="Group 12" transform="translate(-57 -56)">
    <g id="Group_11" data-name="Group 11" transform="translate(57 56)">
      <path id="Path_83" data-name="Path 83" d="M1017.81,560.461c-5.27,45.15-16.22,81.4-31.25,110.31-20,38.52-54.21,54.04-84.77,70.28a193.275,193.275,0,0,1-27.46,11.94c-55.61,19.3-117.85,14.18-166.74,3.99a657.282,657.282,0,0,0-104.09-13.16q-14.97-.675-29.97-.67c-15.42.02-293.07,5.29-360.67-131.57-16.69-33.76-28.13-75-32.24-125.27-11.63-142.12,52.29-235.46,134.74-296.47,155.97-115.41,369.76-110.57,523.43,7.88C941.15,276.621,1036.99,396.031,1017.81,560.461Z" transform="translate(-56 -106.019)" fill="#3f3d56"/>
      <path id="Path_84" data-name="Path 84" d="M986.56,670.771c-20,38.52-47.21,64.04-77.77,80.28a193.272,193.272,0,0,1-27.46,11.94c-55.61,19.3-117.85,14.18-166.74,3.99a657.3,657.3,0,0,0-104.09-13.16q-14.97-.675-29.97-.67-23.13.03-46.25,1.72c-100.17,7.36-253.82-6.43-321.42-143.29L382,283.981,444.95,445.6l20.09,51.59,55.37-75.98L549,381.981l130.2,149.27,36.8-81.27L970.78,657.9l14.21,11.59Z" transform="translate(-56 -106.019)" fill="#f2f2f2"/>
      <path id="Path_85" data-name="Path 85" d="M302,282.962l26-57,36,83-31-60Z" opacity="0.1"/>
      <path id="Path_86" data-name="Path 86" d="M610.5,753.821q-14.97-.675-29.97-.67L465.04,497.191Z" transform="translate(-56 -106.019)" opacity="0.1"/>
      <path id="Path_87" data-name="Path 87" d="M464.411,315.191,493,292.962l130,150-132-128Z" opacity="0.1"/>
      <path id="Path_88" data-name="Path 88" d="M908.79,751.051a193.265,193.265,0,0,1-27.46,11.94L679.2,531.251Z" transform="translate(-56 -106.019)" opacity="0.1"/>
      <circle id="Ellipse_11" data-name="Ellipse 11" cx="3" cy="3" r="3" transform="translate(479 98.962)" fill="#f2f2f2"/>
      <circle id="Ellipse_12" data-name="Ellipse 12" cx="3" cy="3" r="3" transform="translate(396 201.962)" fill="#f2f2f2"/>
      <circle id="Ellipse_13" data-name="Ellipse 13" cx="2" cy="2" r="2" transform="translate(600 220.962)" fill="#f2f2f2"/>
      <circle id="Ellipse_14" data-name="Ellipse 14" cx="2" cy="2" r="2" transform="translate(180 265.962)" fill="#f2f2f2"/>
      <circle id="Ellipse_15" data-name="Ellipse 15" cx="2" cy="2" r="2" transform="translate(612 96.962)" fill="#f2f2f2"/>
      <circle id="Ellipse_16" data-name="Ellipse 16" cx="2" cy="2" r="2" transform="translate(736 192.962)" fill="#f2f2f2"/>
      <circle id="Ellipse_17" data-name="Ellipse 17" cx="2" cy="2" r="2" transform="translate(858 344.962)" fill="#f2f2f2"/>
      <path id="Path_89" data-name="Path 89" d="M306,121.222h-2.76v-2.76h-1.48v2.76H299V122.7h2.76v2.759h1.48V122.7H306Z" fill="#f2f2f2"/>
      <path id="Path_90" data-name="Path 90" d="M848,424.222h-2.76v-2.76h-1.48v2.76H841V425.7h2.76v2.759h1.48V425.7H848Z" fill="#f2f2f2"/>
      <path id="Path_91" data-name="Path 91" d="M1144,719.981c0,16.569-243.557,74-544,74s-544-57.431-544-74,243.557,14,544,14S1144,703.413,1144,719.981Z" transform="translate(-56 -106.019)" fill="#3f3d56"/>
      <path id="Path_92" data-name="Path 92" d="M1144,719.981c0,16.569-243.557,74-544,74s-544-57.431-544-74,243.557,14,544,14S1144,703.413,1144,719.981Z" transform="translate(-56 -106.019)" opacity="0.1"/>
      <ellipse id="Ellipse_18" data-name="Ellipse 18" cx="544" cy="30" rx="544" ry="30" transform="translate(0 583.962)" fill="#3f3d56"/>
      <path id="Path_93" data-name="Path 93" d="M624,677.981c0,33.137-14.775,24-33,24s-33,9.137-33-24,33-96,33-96S624,644.844,624,677.981Z" transform="translate(-56 -106.019)" fill="#ff6584"/>
      <path id="Path_94" data-name="Path 94" d="M606,690.66c0,15.062-6.716,10.909-15,10.909s-15,4.153-15-10.909,15-43.636,15-43.636S606,675.6,606,690.66Z" transform="translate(-56 -106.019)" opacity="0.1"/>
      <rect id="Rectangle_97" data-name="Rectangle 97" width="92" height="18" rx="9" transform="translate(489 604.962)" fill="#2f2e41"/>
      <rect id="Rectangle_98" data-name="Rectangle 98" width="92" height="18" rx="9" transform="translate(489 586.962)" fill="#2f2e41"/>
      <path id="Path_95" data-name="Path 95" d="M193,596.547c0,55.343,34.719,100.126,77.626,100.126" transform="translate(-56 -106.019)" fill="#3f3d56"/>
      <path id="Path_96" data-name="Path 96" d="M270.626,696.673c0-55.965,38.745-101.251,86.626-101.251" transform="translate(-56 -106.019)" fill="#6c63ff"/>
      <path id="Path_97" data-name="Path 97" d="M221.125,601.564c0,52.57,22.14,95.109,49.5,95.109" transform="translate(-56 -106.019)" fill="#6c63ff"/>
      <path id="Path_98" data-name="Path 98" d="M270.626,696.673c0-71.511,44.783-129.377,100.126-129.377" transform="translate(-56 -106.019)" fill="#3f3d56"/>
      <path id="Path_99" data-name="Path 99" d="M254.3,697.379s11.009-.339,14.326-2.7,16.934-5.183,17.757-1.395,16.544,18.844,4.115,18.945-28.879-1.936-32.19-3.953S254.3,697.379,254.3,697.379Z" transform="translate(-56 -106.019)" fill="#a8a8a8"/>
      <path id="Path_100" data-name="Path 100" d="M290.716,710.909c-12.429.1-28.879-1.936-32.19-3.953-2.522-1.536-3.527-7.048-3.863-9.591l-.368.014s.7,8.879,4.009,10.9,19.761,4.053,32.19,3.953c3.588-.029,4.827-1.305,4.759-3.2C294.755,710.174,293.386,710.887,290.716,710.909Z" transform="translate(-56 -106.019)" opacity="0.2"/>
      <path id="Path_101" data-name="Path 101" d="M777.429,633.081c0,38.029,23.857,68.8,53.341,68.8" transform="translate(-56 -106.019)" fill="#3f3d56"/>
      <path id="Path_102" data-name="Path 102" d="M830.769,701.882c0-38.456,26.623-69.575,59.525-69.575" transform="translate(-56 -106.019)" fill="#6c63ff"/>
      <path id="Path_103" data-name="Path 103" d="M796.755,636.528c0,36.124,15.213,65.354,34.014,65.354" transform="translate(-56 -106.019)" fill="#6c63ff"/>
      <path id="Path_104" data-name="Path 104" d="M830.769,701.882c0-49.139,30.773-88.9,68.8-88.9" transform="translate(-56 -106.019)" fill="#3f3d56"/>
      <path id="Path_105" data-name="Path 105" d="M819.548,702.367s7.565-.233,9.844-1.856,11.636-3.562,12.2-.958,11.368,12.949,2.828,13.018-19.844-1.33-22.119-2.716S819.548,702.367,819.548,702.367Z" transform="translate(-56 -106.019)" fill="#a8a8a8"/>
      <path id="Path_106" data-name="Path 106" d="M844.574,711.664c-8.54.069-19.844-1.33-22.119-2.716-1.733-1.056-2.423-4.843-2.654-6.59l-.253.01s.479,6.1,2.755,7.487,13.579,2.785,22.119,2.716c2.465-.02,3.317-.9,3.27-2.2C847.349,711.159,846.409,711.649,844.574,711.664Z" transform="translate(-56 -106.019)" opacity="0.2"/>
      <path id="Path_107" data-name="Path 107" d="M949.813,724.718s11.36-1.729,14.5-4.591,16.89-7.488,18.217-3.667,19.494,17.447,6.633,19.107-30.153,1.609-33.835-.065S949.813,724.718,949.813,724.718Z" transform="translate(-56 -106.019)" fill="#a8a8a8"/>
      <path id="Path_108" data-name="Path 108" d="M989.228,734.173c-12.86,1.659-30.153,1.609-33.835-.065-2.8-1.275-4.535-6.858-5.2-9.45l-.379.061s1.833,9.109,5.516,10.783,20.975,1.725,33.835.065c3.712-.479,4.836-1.956,4.529-3.906C993.319,732.907,991.991,733.817,989.228,734.173Z" transform="translate(-56 -106.019)" opacity="0.2"/>
      <path id="Path_109" data-name="Path 109" d="M670.26,723.9s9.587-1.459,12.237-3.875,14.255-6.32,15.374-3.095,16.452,14.725,5.6,16.125-25.448,1.358-28.555-.055S670.26,723.9,670.26,723.9Z" transform="translate(-56 -106.019)" fill="#a8a8a8"/>
      <path id="Path_110" data-name="Path 110" d="M703.524,731.875c-10.853,1.4-25.448,1.358-28.555-.055-2.367-1.076-3.827-5.788-4.39-7.976l-.32.051s1.547,7.687,4.655,9.1,17.7,1.456,28.555.055c3.133-.4,4.081-1.651,3.822-3.3C706.977,730.807,705.856,731.575,703.524,731.875Z" transform="translate(-56 -106.019)" opacity="0.2"/>
      <path id="Path_111" data-name="Path 111" d="M178.389,719.109s7.463-1.136,9.527-3.016,11.1-4.92,11.969-2.409,12.808,11.463,4.358,12.553-19.811,1.057-22.23-.043S178.389,719.109,178.389,719.109Z" transform="translate(-56 -106.019)" fill="#a8a8a8"/>
      <path id="Path_112" data-name="Path 112" d="M204.285,725.321c-8.449,1.09-19.811,1.057-22.23-.043-1.842-.838-2.979-4.506-3.417-6.209l-.249.04s1.2,5.984,3.624,7.085,13.781,1.133,22.23.043c2.439-.315,3.177-1.285,2.976-2.566C206.973,724.489,206.1,725.087,204.285,725.321Z" transform="translate(-56 -106.019)" opacity="0.2"/>
      <path id="Path_113" data-name="Path 113" d="M439.7,707.337c0,30.22-42.124,20.873-93.7,20.873s-93.074,9.347-93.074-20.873,42.118-36.793,93.694-36.793S439.7,677.117,439.7,707.337Z" transform="translate(-56 -106.019)" opacity="0.1"/>
      <path id="Path_114" data-name="Path 114" d="M439.7,699.9c0,30.22-42.124,20.873-93.7,20.873s-93.074,9.347-93.074-20.873S295.04,663.1,346.616,663.1,439.7,669.676,439.7,699.9Z" transform="translate(-56 -106.019)" fill="#3f3d56"/>
    </g>
    <g id="docusaurus_keytar" transform="translate(312.271 493.733)">
      <path id="Path_40" data-name="Path 40" d="M99,52h91.791V89.153H99Z" transform="translate(5.904 -14.001)" fill="#fff" fill-rule="evenodd"/>
      <path id="Path_41" data-name="Path 41" d="M24.855,163.927A21.828,21.828,0,0,1,5.947,153a21.829,21.829,0,0,0,18.908,32.782H46.71V163.927Z" transform="translate(-3 -4.634)" fill="#3ecc5f" fill-rule="evenodd"/>
      <path id="Path_42" data-name="Path 42" d="M121.861,61.1l76.514-4.782V45.39A21.854,21.854,0,0,0,176.52,23.535H78.173L75.441,18.8a3.154,3.154,0,0,0-5.464,0l-2.732,4.732L64.513,18.8a3.154,3.154,0,0,0-5.464,0l-2.732,4.732L53.586,18.8a3.154,3.154,0,0,0-5.464,0L45.39,23.535c-.024,0-.046,0-.071,0l-4.526-4.525a3.153,3.153,0,0,0-5.276,1.414l-1.5,5.577-5.674-1.521a3.154,3.154,0,0,0-3.863,3.864L26,34.023l-5.575,1.494a3.155,3.155,0,0,0-1.416,5.278l4.526,4.526c0,.023,0,.046,0,.07L18.8,48.122a3.154,3.154,0,0,0,0,5.464l4.732,2.732L18.8,59.05a3.154,3.154,0,0,0,0,5.464l4.732,2.732L18.8,69.977a3.154,3.154,0,0,0,0,5.464l4.732,2.732L18.8,80.9a3.154,3.154,0,0,0,0,5.464L23.535,89.1,18.8,91.832a3.154,3.154,0,0,0,0,5.464l4.732,2.732L18.8,102.76a3.154,3.154,0,0,0,0,5.464l4.732,2.732L18.8,113.687a3.154,3.154,0,0,0,0,5.464l4.732,2.732L18.8,124.615a3.154,3.154,0,0,0,0,5.464l4.732,2.732L18.8,135.542a3.154,3.154,0,0,0,0,5.464l4.732,2.732L18.8,146.469a3.154,3.154,0,0,0,0,5.464l4.732,2.732L18.8,157.4a3.154,3.154,0,0,0,0,5.464l4.732,2.732L18.8,168.324a3.154,3.154,0,0,0,0,5.464l4.732,2.732A21.854,21.854,0,0,0,45.39,198.375H176.52a21.854,21.854,0,0,0,21.855-21.855V89.1l-76.514-4.782a11.632,11.632,0,0,1,0-23.219" transform="translate(-1.681 -17.226)" fill="#3ecc5f" fill-rule="evenodd"/>
      <path id="Path_43" data-name="Path 43" d="M143,186.71h32.782V143H143Z" transform="translate(9.984 -5.561)" fill="#3ecc5f" fill-rule="evenodd"/>
      <path id="Path_44" data-name="Path 44" d="M196.71,159.855a5.438,5.438,0,0,0-.7.07c-.042-.164-.081-.329-.127-.493a5.457,5.457,0,1,0-5.4-9.372q-.181-.185-.366-.367a5.454,5.454,0,1,0-9.384-5.4c-.162-.046-.325-.084-.486-.126a5.467,5.467,0,1,0-10.788,0c-.162.042-.325.08-.486.126a5.457,5.457,0,1,0-9.384,5.4,21.843,21.843,0,1,0,36.421,21.02,5.452,5.452,0,1,0,.7-10.858" transform="translate(10.912 -6.025)" fill="#44d860" fill-rule="evenodd"/>
      <path id="Path_45" data-name="Path 45" d="M153,124.855h32.782V103H153Z" transform="translate(10.912 -9.271)" fill="#3ecc5f" fill-rule="evenodd"/>
      <path id="Path_46" data-name="Path 46" d="M194.855,116.765a2.732,2.732,0,1,0,0-5.464,2.811,2.811,0,0,0-.349.035c-.022-.082-.04-.164-.063-.246a2.733,2.733,0,0,0-1.052-5.253,2.7,2.7,0,0,0-1.648.566q-.09-.093-.184-.184a2.7,2.7,0,0,0,.553-1.633,2.732,2.732,0,0,0-5.245-1.07,10.928,10.928,0,1,0,0,21.031,2.732,2.732,0,0,0,5.245-1.07,2.7,2.7,0,0,0-.553-1.633q.093-.09.184-.184a2.7,2.7,0,0,0,1.648.566,2.732,2.732,0,0,0,1.052-5.253c.023-.081.042-.164.063-.246a2.814,2.814,0,0,0,.349.035" transform="translate(12.767 -9.377)" fill="#44d860" fill-rule="evenodd"/>
      <path id="Path_47" data-name="Path 47" d="M65.087,56.891a2.732,2.732,0,0,1-2.732-2.732,8.2,8.2,0,0,0-16.391,0,2.732,2.732,0,0,1-5.464,0,13.659,13.659,0,0,1,27.319,0,2.732,2.732,0,0,1-2.732,2.732" transform="translate(0.478 -15.068)" fill-rule="evenodd"/>
      <path id="Path_48" data-name="Path 48" d="M103,191.347h65.565a21.854,21.854,0,0,0,21.855-21.855V93H124.855A21.854,21.854,0,0,0,103,114.855Z" transform="translate(6.275 -10.199)" fill="#ffff50" fill-rule="evenodd"/>
      <path id="Path_49" data-name="Path 49" d="M173.216,129.787H118.535a1.093,1.093,0,1,1,0-2.185h54.681a1.093,1.093,0,0,1,0,2.185m0,21.855H118.535a1.093,1.093,0,1,1,0-2.186h54.681a1.093,1.093,0,0,1,0,2.186m0,21.855H118.535a1.093,1.093,0,1,1,0-2.185h54.681a1.093,1.093,0,0,1,0,2.185m0-54.434H118.535a1.093,1.093,0,1,1,0-2.185h54.681a1.093,1.093,0,0,1,0,2.185m0,21.652H118.535a1.093,1.093,0,1,1,0-2.186h54.681a1.093,1.093,0,0,1,0,2.186m0,21.855H118.535a1.093,1.093,0,1,1,0-2.186h54.681a1.093,1.093,0,0,1,0,2.186M189.585,61.611c-.013,0-.024-.007-.037-.005-3.377.115-4.974,3.492-6.384,6.472-1.471,3.114-2.608,5.139-4.473,5.078-2.064-.074-3.244-2.406-4.494-4.874-1.436-2.835-3.075-6.049-6.516-5.929-3.329.114-4.932,3.053-6.346,5.646-1.5,2.762-2.529,4.442-4.5,4.364-2.106-.076-3.225-1.972-4.52-4.167-1.444-2.443-3.112-5.191-6.487-5.1-3.272.113-4.879,2.606-6.3,4.808-1.5,2.328-2.552,3.746-4.551,3.662-2.156-.076-3.27-1.65-4.558-3.472-1.447-2.047-3.077-4.363-6.442-4.251-3.2.109-4.807,2.153-6.224,3.954-1.346,1.709-2.4,3.062-4.621,2.977a1.093,1.093,0,0,0-.079,2.186c3.3.11,4.967-1.967,6.417-3.81,1.286-1.635,2.4-3.045,4.582-3.12,2.1-.09,3.091,1.218,4.584,3.327,1.417,2,3.026,4.277,6.263,4.394,3.391.114,5.022-2.42,6.467-4.663,1.292-2,2.406-3.734,4.535-3.807,1.959-.073,3.026,1.475,4.529,4.022,1.417,2.4,3.023,5.121,6.324,5.241,3.415.118,5.064-2.863,6.5-5.5,1.245-2.282,2.419-4.437,4.5-4.509,1.959-.046,2.981,1.743,4.492,4.732,1.412,2.79,3.013,5.95,6.365,6.071l.185,0c3.348,0,4.937-3.36,6.343-6.331,1.245-2.634,2.423-5.114,4.444-5.216Z" transform="translate(7.109 -13.11)" fill-rule="evenodd"/>
      <path id="Path_50" data-name="Path 50" d="M83,186.71h43.71V143H83Z" transform="translate(4.42 -5.561)" fill="#3ecc5f" fill-rule="evenodd"/>
      <g id="Group_8" data-name="Group 8" transform="matrix(0.966, -0.259, 0.259, 0.966, 109.327, 91.085)">
        <rect id="Rectangle_3" data-name="Rectangle 3" width="92.361" height="36.462" rx="2" transform="translate(0 0)" fill="#d8d8d8"/>
        <g id="Group_2" data-name="Group 2" transform="translate(1.531 23.03)">
          <rect id="Rectangle_4" data-name="Rectangle 4" width="5.336" height="5.336" rx="1" transform="translate(16.797 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_5" data-name="Rectangle 5" width="5.336" height="5.336" rx="1" transform="translate(23.12 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_6" data-name="Rectangle 6" width="5.336" height="5.336" rx="1" transform="translate(29.444 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_7" data-name="Rectangle 7" width="5.336" height="5.336" rx="1" transform="translate(35.768 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_8" data-name="Rectangle 8" width="5.336" height="5.336" rx="1" transform="translate(42.091 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_9" data-name="Rectangle 9" width="5.336" height="5.336" rx="1" transform="translate(48.415 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_10" data-name="Rectangle 10" width="5.336" height="5.336" rx="1" transform="translate(54.739 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_11" data-name="Rectangle 11" width="5.336" height="5.336" rx="1" transform="translate(61.063 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_12" data-name="Rectangle 12" width="5.336" height="5.336" rx="1" transform="translate(67.386 0)" fill="#4a4a4a"/>
          <path id="Path_51" data-name="Path 51" d="M1.093,0H14.518a1.093,1.093,0,0,1,1.093,1.093V4.243a1.093,1.093,0,0,1-1.093,1.093H1.093A1.093,1.093,0,0,1,0,4.243V1.093A1.093,1.093,0,0,1,1.093,0ZM75,0H88.426a1.093,1.093,0,0,1,1.093,1.093V4.243a1.093,1.093,0,0,1-1.093,1.093H75a1.093,1.093,0,0,1-1.093-1.093V1.093A1.093,1.093,0,0,1,75,0Z" transform="translate(0 0)" fill="#4a4a4a" fill-rule="evenodd"/>
        </g>
        <g id="Group_3" data-name="Group 3" transform="translate(1.531 10.261)">
          <path id="Path_52" data-name="Path 52" d="M1.093,0H6.218A1.093,1.093,0,0,1,7.31,1.093V4.242A1.093,1.093,0,0,1,6.218,5.335H1.093A1.093,1.093,0,0,1,0,4.242V1.093A1.093,1.093,0,0,1,1.093,0Z" transform="translate(0 0)" fill="#4a4a4a" fill-rule="evenodd"/>
          <rect id="Rectangle_13" data-name="Rectangle 13" width="5.336" height="5.336" rx="1" transform="translate(8.299 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_14" data-name="Rectangle 14" width="5.336" height="5.336" rx="1" transform="translate(14.623 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_15" data-name="Rectangle 15" width="5.336" height="5.336" rx="1" transform="translate(20.947 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_16" data-name="Rectangle 16" width="5.336" height="5.336" rx="1" transform="translate(27.271 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_17" data-name="Rectangle 17" width="5.336" height="5.336" rx="1" transform="translate(33.594 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_18" data-name="Rectangle 18" width="5.336" height="5.336" rx="1" transform="translate(39.918 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_19" data-name="Rectangle 19" width="5.336" height="5.336" rx="1" transform="translate(46.242 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_20" data-name="Rectangle 20" width="5.336" height="5.336" rx="1" transform="translate(52.565 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_21" data-name="Rectangle 21" width="5.336" height="5.336" rx="1" transform="translate(58.888 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_22" data-name="Rectangle 22" width="5.336" height="5.336" rx="1" transform="translate(65.212 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_23" data-name="Rectangle 23" width="5.336" height="5.336" rx="1" transform="translate(71.536 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_24" data-name="Rectangle 24" width="5.336" height="5.336" rx="1" transform="translate(77.859 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_25" data-name="Rectangle 25" width="5.336" height="5.336" rx="1" transform="translate(84.183 0)" fill="#4a4a4a"/>
        </g>
        <g id="Group_4" data-name="Group 4" transform="translate(91.05 9.546) rotate(180)">
          <path id="Path_53" data-name="Path 53" d="M1.093,0H6.219A1.093,1.093,0,0,1,7.312,1.093v3.15A1.093,1.093,0,0,1,6.219,5.336H1.093A1.093,1.093,0,0,1,0,4.243V1.093A1.093,1.093,0,0,1,1.093,0Z" transform="translate(0 0)" fill="#4a4a4a" fill-rule="evenodd"/>
          <rect id="Rectangle_26" data-name="Rectangle 26" width="5.336" height="5.336" rx="1" transform="translate(8.299 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_27" data-name="Rectangle 27" width="5.336" height="5.336" rx="1" transform="translate(14.623 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_28" data-name="Rectangle 28" width="5.336" height="5.336" rx="1" transform="translate(20.947 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_29" data-name="Rectangle 29" width="5.336" height="5.336" rx="1" transform="translate(27.271 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_30" data-name="Rectangle 30" width="5.336" height="5.336" rx="1" transform="translate(33.594 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_31" data-name="Rectangle 31" width="5.336" height="5.336" rx="1" transform="translate(39.918 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_32" data-name="Rectangle 32" width="5.336" height="5.336" rx="1" transform="translate(46.242 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_33" data-name="Rectangle 33" width="5.336" height="5.336" rx="1" transform="translate(52.565 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_34" data-name="Rectangle 34" width="5.336" height="5.336" rx="1" transform="translate(58.889 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_35" data-name="Rectangle 35" width="5.336" height="5.336" rx="1" transform="translate(65.213 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_36" data-name="Rectangle 36" width="5.336" height="5.336" rx="1" transform="translate(71.537 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_37" data-name="Rectangle 37" width="5.336" height="5.336" rx="1" transform="translate(77.86 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_38" data-name="Rectangle 38" width="5.336" height="5.336" rx="1" transform="translate(84.183 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_39" data-name="Rectangle 39" width="5.336" height="5.336" rx="1" transform="translate(8.299 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_40" data-name="Rectangle 40" width="5.336" height="5.336" rx="1" transform="translate(14.623 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_41" data-name="Rectangle 41" width="5.336" height="5.336" rx="1" transform="translate(20.947 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_42" data-name="Rectangle 42" width="5.336" height="5.336" rx="1" transform="translate(27.271 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_43" data-name="Rectangle 43" width="5.336" height="5.336" rx="1" transform="translate(33.594 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_44" data-name="Rectangle 44" width="5.336" height="5.336" rx="1" transform="translate(39.918 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_45" data-name="Rectangle 45" width="5.336" height="5.336" rx="1" transform="translate(46.242 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_46" data-name="Rectangle 46" width="5.336" height="5.336" rx="1" transform="translate(52.565 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_47" data-name="Rectangle 47" width="5.336" height="5.336" rx="1" transform="translate(58.889 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_48" data-name="Rectangle 48" width="5.336" height="5.336" rx="1" transform="translate(65.213 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_49" data-name="Rectangle 49" width="5.336" height="5.336" rx="1" transform="translate(71.537 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_50" data-name="Rectangle 50" width="5.336" height="5.336" rx="1" transform="translate(77.86 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_51" data-name="Rectangle 51" width="5.336" height="5.336" rx="1" transform="translate(84.183 0)" fill="#4a4a4a"/>
        </g>
        <g id="Group_6" data-name="Group 6" transform="translate(1.531 16.584)">
          <path id="Path_54" data-name="Path 54" d="M1.093,0h7.3A1.093,1.093,0,0,1,9.485,1.093v3.15A1.093,1.093,0,0,1,8.392,5.336h-7.3A1.093,1.093,0,0,1,0,4.243V1.094A1.093,1.093,0,0,1,1.093,0Z" transform="translate(0 0)" fill="#4a4a4a" fill-rule="evenodd"/>
          <g id="Group_5" data-name="Group 5" transform="translate(10.671 0)">
            <rect id="Rectangle_52" data-name="Rectangle 52" width="5.336" height="5.336" rx="1" fill="#4a4a4a"/>
            <rect id="Rectangle_53" data-name="Rectangle 53" width="5.336" height="5.336" rx="1" transform="translate(6.324 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_54" data-name="Rectangle 54" width="5.336" height="5.336" rx="1" transform="translate(12.647 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_55" data-name="Rectangle 55" width="5.336" height="5.336" rx="1" transform="translate(18.971 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_56" data-name="Rectangle 56" width="5.336" height="5.336" rx="1" transform="translate(25.295 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_57" data-name="Rectangle 57" width="5.336" height="5.336" rx="1" transform="translate(31.619 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_58" data-name="Rectangle 58" width="5.336" height="5.336" rx="1" transform="translate(37.942 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_59" data-name="Rectangle 59" width="5.336" height="5.336" rx="1" transform="translate(44.265 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_60" data-name="Rectangle 60" width="5.336" height="5.336" rx="1" transform="translate(50.589 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_61" data-name="Rectangle 61" width="5.336" height="5.336" rx="1" transform="translate(56.912 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_62" data-name="Rectangle 62" width="5.336" height="5.336" rx="1" transform="translate(63.236 0)" fill="#4a4a4a"/>
          </g>
          <path id="Path_55" data-name="Path 55" d="M1.094,0H8A1.093,1.093,0,0,1,9.091,1.093v3.15A1.093,1.093,0,0,1,8,5.336H1.093A1.093,1.093,0,0,1,0,4.243V1.094A1.093,1.093,0,0,1,1.093,0Z" transform="translate(80.428 0)" fill="#4a4a4a" fill-rule="evenodd"/>
        </g>
        <g id="Group_7" data-name="Group 7" transform="translate(1.531 29.627)">
          <rect id="Rectangle_63" data-name="Rectangle 63" width="5.336" height="5.336" rx="1" transform="translate(0 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_64" data-name="Rectangle 64" width="5.336" height="5.336" rx="1" transform="translate(6.324 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_65" data-name="Rectangle 65" width="5.336" height="5.336" rx="1" transform="translate(12.647 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_66" data-name="Rectangle 66" width="5.336" height="5.336" rx="1" transform="translate(18.971 0)" fill="#4a4a4a"/>
          <path id="Path_56" data-name="Path 56" d="M1.093,0H31.515a1.093,1.093,0,0,1,1.093,1.093V4.244a1.093,1.093,0,0,1-1.093,1.093H1.093A1.093,1.093,0,0,1,0,4.244V1.093A1.093,1.093,0,0,1,1.093,0ZM34.687,0h3.942a1.093,1.093,0,0,1,1.093,1.093V4.244a1.093,1.093,0,0,1-1.093,1.093H34.687a1.093,1.093,0,0,1-1.093-1.093V1.093A1.093,1.093,0,0,1,34.687,0Z" transform="translate(25.294 0)" fill="#4a4a4a" fill-rule="evenodd"/>
          <rect id="Rectangle_67" data-name="Rectangle 67" width="5.336" height="5.336" rx="1" transform="translate(66.003 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_68" data-name="Rectangle 68" width="5.336" height="5.336" rx="1" transform="translate(72.327 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_69" data-name="Rectangle 69" width="5.336" height="5.336" rx="1" transform="translate(84.183 0)" fill="#4a4a4a"/>
          <path id="Path_57" data-name="Path 57" d="M5.336,0V1.18A1.093,1.093,0,0,1,4.243,2.273H1.093A1.093,1.093,0,0,1,0,1.18V0Z" transform="translate(83.59 2.273) rotate(180)" fill="#4a4a4a"/>
          <path id="Path_58" data-name="Path 58" d="M5.336,0V1.18A1.093,1.093,0,0,1,4.243,2.273H1.093A1.093,1.093,0,0,1,0,1.18V0Z" transform="translate(78.255 3.063)" fill="#4a4a4a"/>
        </g>
        <rect id="Rectangle_70" data-name="Rectangle 70" width="88.927" height="2.371" rx="1.085" transform="translate(1.925 1.17)" fill="#4a4a4a"/>
        <rect id="Rectangle_71" data-name="Rectangle 71" width="4.986" height="1.581" rx="0.723" transform="translate(4.1 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_72" data-name="Rectangle 72" width="4.986" height="1.581" rx="0.723" transform="translate(10.923 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_73" data-name="Rectangle 73" width="4.986" height="1.581" rx="0.723" transform="translate(16.173 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_74" data-name="Rectangle 74" width="4.986" height="1.581" rx="0.723" transform="translate(21.421 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_75" data-name="Rectangle 75" width="4.986" height="1.581" rx="0.723" transform="translate(26.671 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_76" data-name="Rectangle 76" width="4.986" height="1.581" rx="0.723" transform="translate(33.232 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_77" data-name="Rectangle 77" width="4.986" height="1.581" rx="0.723" transform="translate(38.48 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_78" data-name="Rectangle 78" width="4.986" height="1.581" rx="0.723" transform="translate(43.73 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_79" data-name="Rectangle 79" width="4.986" height="1.581" rx="0.723" transform="translate(48.978 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_80" data-name="Rectangle 80" width="4.986" height="1.581" rx="0.723" transform="translate(55.54 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_81" data-name="Rectangle 81" width="4.986" height="1.581" rx="0.723" transform="translate(60.788 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_82" data-name="Rectangle 82" width="4.986" height="1.581" rx="0.723" transform="translate(66.038 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_83" data-name="Rectangle 83" width="4.986" height="1.581" rx="0.723" transform="translate(72.599 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_84" data-name="Rectangle 84" width="4.986" height="1.581" rx="0.723" transform="translate(77.847 1.566)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_85" data-name="Rectangle 85" width="4.986" height="1.581" rx="0.723" transform="translate(83.097 1.566)" fill="#d8d8d8" opacity="0.136"/>
      </g>
      <path id="Path_59" data-name="Path 59" d="M146.71,159.855a5.439,5.439,0,0,0-.7.07c-.042-.164-.081-.329-.127-.493a5.457,5.457,0,1,0-5.4-9.372q-.181-.185-.366-.367a5.454,5.454,0,1,0-9.384-5.4c-.162-.046-.325-.084-.486-.126a5.467,5.467,0,1,0-10.788,0c-.162.042-.325.08-.486.126a5.457,5.457,0,1,0-9.384,5.4,21.843,21.843,0,1,0,36.421,21.02,5.452,5.452,0,1,0,.7-10.858" transform="translate(6.275 -6.025)" fill="#44d860" fill-rule="evenodd"/>
      <path id="Path_60" data-name="Path 60" d="M83,124.855h43.71V103H83Z" transform="translate(4.42 -9.271)" fill="#3ecc5f" fill-rule="evenodd"/>
      <path id="Path_61" data-name="Path 61" d="M134.855,116.765a2.732,2.732,0,1,0,0-5.464,2.811,2.811,0,0,0-.349.035c-.022-.082-.04-.164-.063-.246a2.733,2.733,0,0,0-1.052-5.253,2.7,2.7,0,0,0-1.648.566q-.09-.093-.184-.184a2.7,2.7,0,0,0,.553-1.633,2.732,2.732,0,0,0-5.245-1.07,10.928,10.928,0,1,0,0,21.031,2.732,2.732,0,0,0,5.245-1.07,2.7,2.7,0,0,0-.553-1.633q.093-.09.184-.184a2.7,2.7,0,0,0,1.648.566,2.732,2.732,0,0,0,1.052-5.253c.023-.081.042-.164.063-.246a2.811,2.811,0,0,0,.349.035" transform="translate(7.202 -9.377)" fill="#44d860" fill-rule="evenodd"/>
      <path id="Path_62" data-name="Path 62" d="M143.232,42.33a2.967,2.967,0,0,1-.535-.055,2.754,2.754,0,0,1-.514-.153,2.838,2.838,0,0,1-.471-.251,4.139,4.139,0,0,1-.415-.339,3.2,3.2,0,0,1-.338-.415A2.7,2.7,0,0,1,140.5,39.6a2.968,2.968,0,0,1,.055-.535,3.152,3.152,0,0,1,.152-.514,2.874,2.874,0,0,1,.252-.47,2.633,2.633,0,0,1,.753-.754,2.837,2.837,0,0,1,.471-.251,2.753,2.753,0,0,1,.514-.153,2.527,2.527,0,0,1,1.071,0,2.654,2.654,0,0,1,.983.4,4.139,4.139,0,0,1,.415.339,4.019,4.019,0,0,1,.339.415,2.786,2.786,0,0,1,.251.47,2.864,2.864,0,0,1,.208,1.049,2.77,2.77,0,0,1-.8,1.934,4.139,4.139,0,0,1-.415.339,2.722,2.722,0,0,1-1.519.459m21.855-1.366a2.789,2.789,0,0,1-1.935-.8,4.162,4.162,0,0,1-.338-.415,2.7,2.7,0,0,1-.459-1.519,2.789,2.789,0,0,1,.8-1.934,4.139,4.139,0,0,1,.415-.339,2.838,2.838,0,0,1,.471-.251,2.752,2.752,0,0,1,.514-.153,2.527,2.527,0,0,1,1.071,0,2.654,2.654,0,0,1,.983.4,4.139,4.139,0,0,1,.415.339,2.79,2.79,0,0,1,.8,1.934,3.069,3.069,0,0,1-.055.535,2.779,2.779,0,0,1-.153.514,3.885,3.885,0,0,1-.251.47,4.02,4.02,0,0,1-.339.415,4.138,4.138,0,0,1-.415.339,2.722,2.722,0,0,1-1.519.459" transform="translate(9.753 -15.532)" fill-rule="evenodd"/>
    </g>
  </g>
</svg>
`````

## File: docs/static/img/undraw_docusaurus_react.svg
`````xml
<svg xmlns="http://www.w3.org/2000/svg" width="1041.277" height="554.141" viewBox="0 0 1041.277 554.141">
  <title>Powered by React</title>
  <g id="Group_24" data-name="Group 24" transform="translate(-440 -263)">
    <g id="Group_23" data-name="Group 23" transform="translate(439.989 262.965)">
      <path id="Path_299" data-name="Path 299" d="M1040.82,611.12q-1.74,3.75-3.47,7.4-2.7,5.67-5.33,11.12c-.78,1.61-1.56,3.19-2.32,4.77-8.6,17.57-16.63,33.11-23.45,45.89A73.21,73.21,0,0,1,942.44,719l-151.65,1.65h-1.6l-13,.14-11.12.12-34.1.37h-1.38l-17.36.19h-.53l-107,1.16-95.51,1-11.11.12-69,.75H429l-44.75.48h-.48l-141.5,1.53-42.33.46a87.991,87.991,0,0,1-10.79-.54h0c-1.22-.14-2.44-.3-3.65-.49a87.38,87.38,0,0,1-51.29-27.54C116,678.37,102.75,655,93.85,629.64q-1.93-5.49-3.6-11.12C59.44,514.37,97,380,164.6,290.08q4.25-5.64,8.64-11l.07-.08c20.79-25.52,44.1-46.84,68.93-62,44-26.91,92.75-34.49,140.7-11.9,40.57,19.12,78.45,28.11,115.17,30.55,3.71.24,7.42.42,11.11.53,84.23,2.65,163.17-27.7,255.87-47.29,3.69-.78,7.39-1.55,11.12-2.28,66.13-13.16,139.49-20.1,226.73-5.51a189.089,189.089,0,0,1,26.76,6.4q5.77,1.86,11.12,4c41.64,16.94,64.35,48.24,74,87.46q1.37,5.46,2.37,11.11C1134.3,384.41,1084.19,518.23,1040.82,611.12Z" transform="translate(-79.34 -172.91)" fill="#f2f2f2"/>
      <path id="Path_300" data-name="Path 300" d="M576.36,618.52a95.21,95.21,0,0,1-1.87,11.12h93.7V618.52Zm-78.25,62.81,11.11-.09V653.77c-3.81-.17-7.52-.34-11.11-.52ZM265.19,618.52v11.12h198.5V618.52ZM1114.87,279h-74V191.51q-5.35-2.17-11.12-4V279H776.21V186.58c-3.73.73-7.43,1.5-11.12,2.28V279H509.22V236.15c-3.69-.11-7.4-.29-11.11-.53V279H242.24V217c-24.83,15.16-48.14,36.48-68.93,62h-.07v.08q-4.4,5.4-8.64,11h8.64V618.52h-83q1.66,5.63,3.6,11.12h79.39v93.62a87,87,0,0,0,12.2,2.79c1.21.19,2.43.35,3.65.49h0a87.991,87.991,0,0,0,10.79.54l42.33-.46v-97H498.11v94.21l11.11-.12V629.64H765.09V721l11.12-.12V629.64H1029.7v4.77c.76-1.58,1.54-3.16,2.32-4.77q2.63-5.45,5.33-11.12,1.73-3.64,3.47-7.4v-321h76.42Q1116.23,284.43,1114.87,279ZM242.24,618.52V290.08H498.11V618.52Zm267,0V290.08H765.09V618.52Zm520.48,0H776.21V290.08H1029.7Z" transform="translate(-79.34 -172.91)" opacity="0.1"/>
      <path id="Path_301" data-name="Path 301" d="M863.09,533.65v13l-151.92,1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99L349.77,551.4h-.15l-44.65.42-.48.01-198.4,1.82v-15l46.65-28,93.6-.78,2-.01.66-.01,2-.03,44.94-.37,2.01-.01.64-.01,2-.01L315,509.3l.38-.01,35.55-.3h.29l277.4-2.34,6.79-.05h.68l5.18-.05,37.65-.31,2-.03,1.85-.02h.96l11.71-.09,2.32-.03,3.11-.02,9.75-.09,15.47-.13,2-.02,3.48-.02h.65l74.71-.64Z" fill="#65617d"/>
      <path id="Path_302" data-name="Path 302" d="M863.09,533.65v13l-151.92,1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99L349.77,551.4h-.15l-44.65.42-.48.01-198.4,1.82v-15l46.65-28,93.6-.78,2-.01.66-.01,2-.03,44.94-.37,2.01-.01.64-.01,2-.01L315,509.3l.38-.01,35.55-.3h.29l277.4-2.34,6.79-.05h.68l5.18-.05,37.65-.31,2-.03,1.85-.02h.96l11.71-.09,2.32-.03,3.11-.02,9.75-.09,15.47-.13,2-.02,3.48-.02h.65l74.71-.64Z" opacity="0.2"/>
      <path id="Path_303" data-name="Path 303" d="M375.44,656.57v24.49a6.13,6.13,0,0,1-3.5,5.54,6,6,0,0,1-2.5.6l-34.9.74a6,6,0,0,1-2.7-.57,6.12,6.12,0,0,1-3.57-5.57V656.57Z" transform="translate(-79.34 -172.91)" fill="#3f3d56"/>
      <path id="Path_304" data-name="Path 304" d="M375.44,656.57v24.49a6.13,6.13,0,0,1-3.5,5.54,6,6,0,0,1-2.5.6l-34.9.74a6,6,0,0,1-2.7-.57,6.12,6.12,0,0,1-3.57-5.57V656.57Z" transform="translate(-79.34 -172.91)" opacity="0.1"/>
      <path id="Path_305" data-name="Path 305" d="M377.44,656.57v24.49a6.13,6.13,0,0,1-3.5,5.54,6,6,0,0,1-2.5.6l-34.9.74a6,6,0,0,1-2.7-.57,6.12,6.12,0,0,1-3.57-5.57V656.57Z" transform="translate(-79.34 -172.91)" fill="#3f3d56"/>
      <rect id="Rectangle_137" data-name="Rectangle 137" width="47.17" height="31.5" transform="translate(680.92 483.65)" fill="#3f3d56"/>
      <rect id="Rectangle_138" data-name="Rectangle 138" width="47.17" height="31.5" transform="translate(680.92 483.65)" opacity="0.1"/>
      <rect id="Rectangle_139" data-name="Rectangle 139" width="47.17" height="31.5" transform="translate(678.92 483.65)" fill="#3f3d56"/>
      <path id="Path_306" data-name="Path 306" d="M298.09,483.65v4.97l-47.17,1.26v-6.23Z" opacity="0.1"/>
      <path id="Path_307" data-name="Path 307" d="M460.69,485.27v168.2a4,4,0,0,1-3.85,3.95l-191.65,5.1h-.05a4,4,0,0,1-3.95-3.95V485.27a4,4,0,0,1,3.95-3.95h191.6a4,4,0,0,1,3.95,3.95Z" transform="translate(-79.34 -172.91)" fill="#65617d"/>
      <path id="Path_308" data-name="Path 308" d="M265.19,481.32v181.2h-.05a4,4,0,0,1-3.95-3.95V485.27a4,4,0,0,1,3.95-3.95Z" transform="translate(-79.34 -172.91)" opacity="0.1"/>
      <path id="Path_309" data-name="Path 309" d="M194.59,319.15h177.5V467.4l-177.5,4Z" fill="#39374d"/>
      <path id="Path_310" data-name="Path 310" d="M726.09,483.65v6.41l-47.17-1.26v-5.15Z" opacity="0.1"/>
      <path id="Path_311" data-name="Path 311" d="M867.69,485.27v173.3a4,4,0,0,1-4,3.95h0L672,657.42a4,4,0,0,1-3.85-3.95V485.27a4,4,0,0,1,3.95-3.95H863.7a4,4,0,0,1,3.99,3.95Z" transform="translate(-79.34 -172.91)" fill="#65617d"/>
      <path id="Path_312" data-name="Path 312" d="M867.69,485.27v173.3a4,4,0,0,1-4,3.95h0V481.32h0a4,4,0,0,1,4,3.95Z" transform="translate(-79.34 -172.91)" opacity="0.1"/>
      <path id="Path_313" data-name="Path 313" d="M775.59,319.15H598.09V467.4l177.5,4Z" fill="#39374d"/>
      <path id="Path_314" data-name="Path 314" d="M663.19,485.27v168.2a4,4,0,0,1-3.85,3.95l-191.65,5.1h0a4,4,0,0,1-4-3.95V485.27a4,4,0,0,1,3.95-3.95h191.6A4,4,0,0,1,663.19,485.27Z" transform="translate(-79.34 -172.91)" fill="#65617d"/>
      <path id="Path_315" data-name="Path 315" d="M397.09,319.15h177.5V467.4l-177.5,4Z" fill="#4267b2"/>
      <path id="Path_316" data-name="Path 316" d="M863.09,533.65v13l-151.92,1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99L349.77,551.4h-.15l-44.65.42-.48.01-198.4,1.82v-15l202.51-1.33h.48l40.99-.28h.19l283.08-1.87h.29l.17-.01h.47l4.79-.03h1.46l74.49-.5,4.4-.02.98-.01Z" opacity="0.1"/>
      <circle id="Ellipse_111" data-name="Ellipse 111" cx="51.33" cy="51.33" r="51.33" transform="translate(435.93 246.82)" fill="#fbbebe"/>
      <path id="Path_317" data-name="Path 317" d="M617.94,550.07s-99.5,12-90,0c3.44-4.34,4.39-17.2,4.2-31.85-.06-4.45-.22-9.06-.45-13.65-1.1-22-3.75-43.5-3.75-43.5s87-41,77-8.5c-4,13.13-2.69,31.57.35,48.88.89,5.05,1.92,10,3,14.7a344.66,344.66,0,0,0,9.65,33.92Z" transform="translate(-79.34 -172.91)" fill="#fbbebe"/>
      <path id="Path_318" data-name="Path 318" d="M585.47,546c11.51-2.13,23.7-6,34.53-1.54,2.85,1.17,5.47,2.88,8.39,3.86s6.12,1.22,9.16,1.91c10.68,2.42,19.34,10.55,24.9,20s8.44,20.14,11.26,30.72l6.9,25.83c6,22.45,12,45.09,13.39,68.3a2437.506,2437.506,0,0,1-250.84,1.43c5.44-10.34,11-21.31,10.54-33s-7.19-23.22-4.76-34.74c1.55-7.34,6.57-13.39,9.64-20.22,8.75-19.52,1.94-45.79,17.32-60.65,6.92-6.68,17-9.21,26.63-8.89,12.28.41,24.85,4.24,37,6.11C555.09,547.48,569.79,548.88,585.47,546Z" transform="translate(-79.34 -172.91)" fill="#ff6584"/>
      <path id="Path_319" data-name="Path 319" d="M716.37,657.17l-.1,1.43v.1l-.17,2.3-1.33,18.51-1.61,22.3-.46,6.28-1,13.44v.17l-107,1-175.59,1.9v.84h-.14v-1.12l.45-14.36.86-28.06.74-23.79.07-2.37a10.53,10.53,0,0,1,11.42-10.17c4.72.4,10.85.89,18.18,1.41l3,.22c42.33,2.94,120.56,6.74,199.5,2,1.66-.09,3.33-.19,5-.31,12.24-.77,24.47-1.76,36.58-3a10.53,10.53,0,0,1,11.6,11.23Z" transform="translate(-79.34 -172.91)" opacity="0.1"/>
      <path id="Path_320" data-name="Path 320" d="M429.08,725.44v-.84l175.62-1.91,107-1h.3v-.17l1-13.44.43-6,1.64-22.61,1.29-17.9v-.44a10.617,10.617,0,0,0-.11-2.47.3.3,0,0,0,0-.1,10.391,10.391,0,0,0-2-4.64,10.54,10.54,0,0,0-9.42-4c-12.11,1.24-24.34,2.23-36.58,3-1.67.12-3.34.22-5,.31-78.94,4.69-157.17.89-199.5-2l-3-.22c-7.33-.52-13.46-1-18.18-1.41a10.54,10.54,0,0,0-11.24,8.53,11,11,0,0,0-.18,1.64l-.68,22.16L429.54,710l-.44,14.36v1.12Z" transform="translate(-79.34 -172.91)" fill="#3f3d56"/>
      <path id="Path_321" data-name="Path 321" d="M716.67,664.18l-1.23,15.33-1.83,22.85-.46,5.72-1,12.81-.06.64v.17h0l-.15,1.48.11-1.48h-.29l-107,1-175.65,1.9v-.28l.49-14.36,1-28.06.64-18.65A6.36,6.36,0,0,1,434.3,658a6.25,6.25,0,0,1,3.78-.9c2.1.17,4.68.37,7.69.59,4.89.36,10.92.78,17.94,1.22,13,.82,29.31,1.7,48,2.42,52,2,122.2,2.67,188.88-3.17,3-.26,6.1-.55,9.13-.84a6.26,6.26,0,0,1,3.48.66,5.159,5.159,0,0,1,.86.54,6.14,6.14,0,0,1,2,2.46,3.564,3.564,0,0,1,.25.61A6.279,6.279,0,0,1,716.67,664.18Z" transform="translate(-79.34 -172.91)" opacity="0.1"/>
      <path id="Path_322" data-name="Path 322" d="M377.44,677.87v3.19a6.13,6.13,0,0,1-3.5,5.54l-40.1.77a6.12,6.12,0,0,1-3.57-5.57v-3Z" transform="translate(-79.34 -172.91)" opacity="0.1"/>
      <path id="Path_323" data-name="Path 323" d="M298.59,515.57l-52.25,1V507.9l52.25-1Z" fill="#3f3d56"/>
      <path id="Path_324" data-name="Path 324" d="M298.59,515.57l-52.25,1V507.9l52.25-1Z" opacity="0.1"/>
      <path id="Path_325" data-name="Path 325" d="M300.59,515.57l-52.25,1V507.9l52.25-1Z" fill="#3f3d56"/>
      <path id="Path_326" data-name="Path 326" d="M758.56,679.87v3.19a6.13,6.13,0,0,0,3.5,5.54l40.1.77a6.12,6.12,0,0,0,3.57-5.57v-3Z" transform="translate(-79.34 -172.91)" opacity="0.1"/>
      <path id="Path_327" data-name="Path 327" d="M678.72,517.57l52.25,1V509.9l-52.25-1Z" opacity="0.1"/>
      <path id="Path_328" data-name="Path 328" d="M676.72,517.57l52.25,1V509.9l-52.25-1Z" fill="#3f3d56"/>
      <path id="Path_329" data-name="Path 329" d="M534.13,486.79c.08,7-3.16,13.6-5.91,20.07a163.491,163.491,0,0,0-12.66,74.71c.73,11,2.58,22,.73,32.9s-8.43,21.77-19,24.9c17.53,10.45,41.26,9.35,57.76-2.66,8.79-6.4,15.34-15.33,21.75-24.11a97.86,97.86,0,0,1-13.31,44.75A103.43,103.43,0,0,0,637,616.53c4.31-5.81,8.06-12.19,9.72-19.23,3.09-13-1.22-26.51-4.51-39.5a266.055,266.055,0,0,1-6.17-33c-.43-3.56-.78-7.22.1-10.7,1-4.07,3.67-7.51,5.64-11.22,5.6-10.54,5.73-23.3,2.86-34.88s-8.49-22.26-14.06-32.81c-4.46-8.46-9.3-17.31-17.46-22.28-5.1-3.1-11-4.39-16.88-5.64l-25.37-5.43c-5.55-1.19-11.26-2.38-16.87-1.51-9.47,1.48-16.14,8.32-22,15.34-4.59,5.46-15.81,15.71-16.6,22.86-.72,6.59,5.1,17.63,6.09,24.58,1.3,9,2.22,6,7.3,11.52C532,478.05,534.07,482,534.13,486.79Z" transform="translate(-79.34 -172.91)" fill="#3f3d56"/>
    </g>
    <g id="docusaurus_keytar" transform="translate(670.271 615.768)">
      <path id="Path_40" data-name="Path 40" d="M99,52h43.635V69.662H99Z" transform="translate(-49.132 -33.936)" fill="#fff" fill-rule="evenodd"/>
      <path id="Path_41" data-name="Path 41" d="M13.389,158.195A10.377,10.377,0,0,1,4.4,153a10.377,10.377,0,0,0,8.988,15.584H23.779V158.195Z" transform="translate(-3 -82.47)" fill="#3ecc5f" fill-rule="evenodd"/>
      <path id="Path_42" data-name="Path 42" d="M66.967,38.083l36.373-2.273V30.615A10.389,10.389,0,0,0,92.95,20.226H46.2l-1.3-2.249a1.5,1.5,0,0,0-2.6,0L41,20.226l-1.3-2.249a1.5,1.5,0,0,0-2.6,0l-1.3,2.249-1.3-2.249a1.5,1.5,0,0,0-2.6,0l-1.3,2.249-.034,0-2.152-2.151a1.5,1.5,0,0,0-2.508.672L25.21,21.4l-2.7-.723a1.5,1.5,0,0,0-1.836,1.837l.722,2.7-2.65.71a1.5,1.5,0,0,0-.673,2.509l2.152,2.152c0,.011,0,.022,0,.033l-2.249,1.3a1.5,1.5,0,0,0,0,2.6l2.249,1.3-2.249,1.3a1.5,1.5,0,0,0,0,2.6L20.226,41l-2.249,1.3a1.5,1.5,0,0,0,0,2.6l2.249,1.3-2.249,1.3a1.5,1.5,0,0,0,0,2.6l2.249,1.3-2.249,1.3a1.5,1.5,0,0,0,0,2.6l2.249,1.3-2.249,1.3a1.5,1.5,0,0,0,0,2.6l2.249,1.3-2.249,1.3a1.5,1.5,0,0,0,0,2.6l2.249,1.3-2.249,1.3a1.5,1.5,0,0,0,0,2.6l2.249,1.3-2.249,1.3a1.5,1.5,0,0,0,0,2.6l2.249,1.3-2.249,1.3a1.5,1.5,0,0,0,0,2.6l2.249,1.3-2.249,1.3a1.5,1.5,0,0,0,0,2.6l2.249,1.3-2.249,1.3a1.5,1.5,0,0,0,0,2.6l2.249,1.3A10.389,10.389,0,0,0,30.615,103.34H92.95A10.389,10.389,0,0,0,103.34,92.95V51.393L66.967,49.12a5.53,5.53,0,0,1,0-11.038" transform="translate(-9.836 -17.226)" fill="#3ecc5f" fill-rule="evenodd"/>
      <path id="Path_43" data-name="Path 43" d="M143,163.779h15.584V143H143Z" transform="translate(-70.275 -77.665)" fill="#3ecc5f" fill-rule="evenodd"/>
      <path id="Path_44" data-name="Path 44" d="M173.779,148.389a2.582,2.582,0,0,0-.332.033c-.02-.078-.038-.156-.06-.234a2.594,2.594,0,1,0-2.567-4.455q-.086-.088-.174-.175a2.593,2.593,0,1,0-4.461-2.569c-.077-.022-.154-.04-.231-.06a2.6,2.6,0,1,0-5.128,0c-.077.02-.154.038-.231.06a2.594,2.594,0,1,0-4.461,2.569,10.384,10.384,0,1,0,17.314,9.992,2.592,2.592,0,1,0,.332-5.161" transform="translate(-75.08 -75.262)" fill="#44d860" fill-rule="evenodd"/>
      <path id="Path_45" data-name="Path 45" d="M153,113.389h15.584V103H153Z" transform="translate(-75.08 -58.444)" fill="#3ecc5f" fill-rule="evenodd"/>
      <path id="Path_46" data-name="Path 46" d="M183.389,108.944a1.3,1.3,0,1,0,0-2.6,1.336,1.336,0,0,0-.166.017c-.01-.039-.019-.078-.03-.117a1.3,1.3,0,0,0-.5-2.5,1.285,1.285,0,0,0-.783.269q-.043-.044-.087-.087a1.285,1.285,0,0,0,.263-.776,1.3,1.3,0,0,0-2.493-.509,5.195,5.195,0,1,0,0,10,1.3,1.3,0,0,0,2.493-.509,1.285,1.285,0,0,0-.263-.776q.044-.043.087-.087a1.285,1.285,0,0,0,.783.269,1.3,1.3,0,0,0,.5-2.5c.011-.038.02-.078.03-.117a1.337,1.337,0,0,0,.166.017" transform="translate(-84.691 -57.894)" fill="#44d860" fill-rule="evenodd"/>
      <path id="Path_47" data-name="Path 47" d="M52.188,48.292a1.3,1.3,0,0,1-1.3-1.3,3.9,3.9,0,0,0-7.792,0,1.3,1.3,0,1,1-2.6,0,6.493,6.493,0,0,1,12.987,0,1.3,1.3,0,0,1-1.3,1.3" transform="translate(-21.02 -28.41)" fill-rule="evenodd"/>
      <path id="Path_48" data-name="Path 48" d="M103,139.752h31.168a10.389,10.389,0,0,0,10.389-10.389V93H113.389A10.389,10.389,0,0,0,103,103.389Z" transform="translate(-51.054 -53.638)" fill="#ffff50" fill-rule="evenodd"/>
      <path id="Path_49" data-name="Path 49" d="M141.1,94.017H115.106a.519.519,0,1,1,0-1.039H141.1a.519.519,0,0,1,0,1.039m0,10.389H115.106a.519.519,0,1,1,0-1.039H141.1a.519.519,0,0,1,0,1.039m0,10.389H115.106a.519.519,0,1,1,0-1.039H141.1a.519.519,0,0,1,0,1.039m0-25.877H115.106a.519.519,0,1,1,0-1.039H141.1a.519.519,0,0,1,0,1.039m0,10.293H115.106a.519.519,0,1,1,0-1.039H141.1a.519.519,0,0,1,0,1.039m0,10.389H115.106a.519.519,0,1,1,0-1.039H141.1a.519.519,0,0,1,0,1.039m7.782-47.993c-.006,0-.011,0-.018,0-1.605.055-2.365,1.66-3.035,3.077-.7,1.48-1.24,2.443-2.126,2.414-.981-.035-1.542-1.144-2.137-2.317-.683-1.347-1.462-2.876-3.1-2.819-1.582.054-2.344,1.451-3.017,2.684-.715,1.313-1.2,2.112-2.141,2.075-1-.036-1.533-.938-2.149-1.981-.686-1.162-1.479-2.467-3.084-2.423-1.555.053-2.319,1.239-2.994,2.286-.713,1.106-1.213,1.781-2.164,1.741-1.025-.036-1.554-.784-2.167-1.65-.688-.973-1.463-2.074-3.062-2.021a3.815,3.815,0,0,0-2.959,1.879c-.64.812-1.14,1.456-2.2,1.415a.52.52,0,0,0-.037,1.039,3.588,3.588,0,0,0,3.05-1.811c.611-.777,1.139-1.448,2.178-1.483,1-.043,1.47.579,2.179,1.582.674.953,1.438,2.033,2.977,2.089,1.612.054,2.387-1.151,3.074-2.217.614-.953,1.144-1.775,2.156-1.81.931-.035,1.438.7,2.153,1.912.674,1.141,1.437,2.434,3.006,2.491,1.623.056,2.407-1.361,3.09-2.616.592-1.085,1.15-2.109,2.14-2.143.931-.022,1.417.829,2.135,2.249.671,1.326,1.432,2.828,3.026,2.886l.088,0c1.592,0,2.347-1.6,3.015-3.01.592-1.252,1.152-2.431,2.113-2.479Z" transform="translate(-55.378 -38.552)" fill-rule="evenodd"/>
      <path id="Path_50" data-name="Path 50" d="M83,163.779h20.779V143H83Z" transform="translate(-41.443 -77.665)" fill="#3ecc5f" fill-rule="evenodd"/>
      <g id="Group_8" data-name="Group 8" transform="matrix(0.966, -0.259, 0.259, 0.966, 51.971, 43.3)">
        <rect id="Rectangle_3" data-name="Rectangle 3" width="43.906" height="17.333" rx="2" transform="translate(0 0)" fill="#d8d8d8"/>
        <g id="Group_2" data-name="Group 2" transform="translate(0.728 10.948)">
          <rect id="Rectangle_4" data-name="Rectangle 4" width="2.537" height="2.537" rx="1" transform="translate(7.985 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_5" data-name="Rectangle 5" width="2.537" height="2.537" rx="1" transform="translate(10.991 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_6" data-name="Rectangle 6" width="2.537" height="2.537" rx="1" transform="translate(13.997 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_7" data-name="Rectangle 7" width="2.537" height="2.537" rx="1" transform="translate(17.003 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_8" data-name="Rectangle 8" width="2.537" height="2.537" rx="1" transform="translate(20.009 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_9" data-name="Rectangle 9" width="2.537" height="2.537" rx="1" transform="translate(23.015 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_10" data-name="Rectangle 10" width="2.537" height="2.537" rx="1" transform="translate(26.021 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_11" data-name="Rectangle 11" width="2.537" height="2.537" rx="1" transform="translate(29.028 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_12" data-name="Rectangle 12" width="2.537" height="2.537" rx="1" transform="translate(32.034 0)" fill="#4a4a4a"/>
          <path id="Path_51" data-name="Path 51" d="M.519,0H6.9A.519.519,0,0,1,7.421.52v1.5a.519.519,0,0,1-.519.519H.519A.519.519,0,0,1,0,2.017V.519A.519.519,0,0,1,.519,0ZM35.653,0h6.383a.519.519,0,0,1,.519.519v1.5a.519.519,0,0,1-.519.519H35.652a.519.519,0,0,1-.519-.519V.519A.519.519,0,0,1,35.652,0Z" transform="translate(0 0)" fill="#4a4a4a" fill-rule="evenodd"/>
        </g>
        <g id="Group_3" data-name="Group 3" transform="translate(0.728 4.878)">
          <path id="Path_52" data-name="Path 52" d="M.519,0H2.956a.519.519,0,0,1,.519.519v1.5a.519.519,0,0,1-.519.519H.519A.519.519,0,0,1,0,2.017V.519A.519.519,0,0,1,.519,0Z" transform="translate(0 0)" fill="#4a4a4a" fill-rule="evenodd"/>
          <rect id="Rectangle_13" data-name="Rectangle 13" width="2.537" height="2.537" rx="1" transform="translate(3.945 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_14" data-name="Rectangle 14" width="2.537" height="2.537" rx="1" transform="translate(6.951 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_15" data-name="Rectangle 15" width="2.537" height="2.537" rx="1" transform="translate(9.958 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_16" data-name="Rectangle 16" width="2.537" height="2.537" rx="1" transform="translate(12.964 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_17" data-name="Rectangle 17" width="2.537" height="2.537" rx="1" transform="translate(15.97 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_18" data-name="Rectangle 18" width="2.537" height="2.537" rx="1" transform="translate(18.976 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_19" data-name="Rectangle 19" width="2.537" height="2.537" rx="1" transform="translate(21.982 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_20" data-name="Rectangle 20" width="2.537" height="2.537" rx="1" transform="translate(24.988 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_21" data-name="Rectangle 21" width="2.537" height="2.537" rx="1" transform="translate(27.994 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_22" data-name="Rectangle 22" width="2.537" height="2.537" rx="1" transform="translate(31 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_23" data-name="Rectangle 23" width="2.537" height="2.537" rx="1" transform="translate(34.006 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_24" data-name="Rectangle 24" width="2.537" height="2.537" rx="1" transform="translate(37.012 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_25" data-name="Rectangle 25" width="2.537" height="2.537" rx="1" transform="translate(40.018 0)" fill="#4a4a4a"/>
        </g>
        <g id="Group_4" data-name="Group 4" transform="translate(43.283 4.538) rotate(180)">
          <path id="Path_53" data-name="Path 53" d="M.519,0H2.956a.519.519,0,0,1,.519.519v1.5a.519.519,0,0,1-.519.519H.519A.519.519,0,0,1,0,2.017V.519A.519.519,0,0,1,.519,0Z" transform="translate(0 0)" fill="#4a4a4a" fill-rule="evenodd"/>
          <rect id="Rectangle_26" data-name="Rectangle 26" width="2.537" height="2.537" rx="1" transform="translate(3.945 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_27" data-name="Rectangle 27" width="2.537" height="2.537" rx="1" transform="translate(6.951 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_28" data-name="Rectangle 28" width="2.537" height="2.537" rx="1" transform="translate(9.958 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_29" data-name="Rectangle 29" width="2.537" height="2.537" rx="1" transform="translate(12.964 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_30" data-name="Rectangle 30" width="2.537" height="2.537" rx="1" transform="translate(15.97 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_31" data-name="Rectangle 31" width="2.537" height="2.537" rx="1" transform="translate(18.976 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_32" data-name="Rectangle 32" width="2.537" height="2.537" rx="1" transform="translate(21.982 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_33" data-name="Rectangle 33" width="2.537" height="2.537" rx="1" transform="translate(24.988 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_34" data-name="Rectangle 34" width="2.537" height="2.537" rx="1" transform="translate(27.994 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_35" data-name="Rectangle 35" width="2.537" height="2.537" rx="1" transform="translate(31.001 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_36" data-name="Rectangle 36" width="2.537" height="2.537" rx="1" transform="translate(34.007 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_37" data-name="Rectangle 37" width="2.537" height="2.537" rx="1" transform="translate(37.013 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_38" data-name="Rectangle 38" width="2.537" height="2.537" rx="1" transform="translate(40.018 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_39" data-name="Rectangle 39" width="2.537" height="2.537" rx="1" transform="translate(3.945 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_40" data-name="Rectangle 40" width="2.537" height="2.537" rx="1" transform="translate(6.951 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_41" data-name="Rectangle 41" width="2.537" height="2.537" rx="1" transform="translate(9.958 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_42" data-name="Rectangle 42" width="2.537" height="2.537" rx="1" transform="translate(12.964 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_43" data-name="Rectangle 43" width="2.537" height="2.537" rx="1" transform="translate(15.97 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_44" data-name="Rectangle 44" width="2.537" height="2.537" rx="1" transform="translate(18.976 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_45" data-name="Rectangle 45" width="2.537" height="2.537" rx="1" transform="translate(21.982 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_46" data-name="Rectangle 46" width="2.537" height="2.537" rx="1" transform="translate(24.988 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_47" data-name="Rectangle 47" width="2.537" height="2.537" rx="1" transform="translate(27.994 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_48" data-name="Rectangle 48" width="2.537" height="2.537" rx="1" transform="translate(31.001 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_49" data-name="Rectangle 49" width="2.537" height="2.537" rx="1" transform="translate(34.007 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_50" data-name="Rectangle 50" width="2.537" height="2.537" rx="1" transform="translate(37.013 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_51" data-name="Rectangle 51" width="2.537" height="2.537" rx="1" transform="translate(40.018 0)" fill="#4a4a4a"/>
        </g>
        <g id="Group_6" data-name="Group 6" transform="translate(0.728 7.883)">
          <path id="Path_54" data-name="Path 54" d="M.519,0h3.47a.519.519,0,0,1,.519.519v1.5a.519.519,0,0,1-.519.519H.519A.519.519,0,0,1,0,2.017V.52A.519.519,0,0,1,.519,0Z" transform="translate(0 0)" fill="#4a4a4a" fill-rule="evenodd"/>
          <g id="Group_5" data-name="Group 5" transform="translate(5.073 0)">
            <rect id="Rectangle_52" data-name="Rectangle 52" width="2.537" height="2.537" rx="1" transform="translate(0 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_53" data-name="Rectangle 53" width="2.537" height="2.537" rx="1" transform="translate(3.006 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_54" data-name="Rectangle 54" width="2.537" height="2.537" rx="1" transform="translate(6.012 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_55" data-name="Rectangle 55" width="2.537" height="2.537" rx="1" transform="translate(9.018 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_56" data-name="Rectangle 56" width="2.537" height="2.537" rx="1" transform="translate(12.025 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_57" data-name="Rectangle 57" width="2.537" height="2.537" rx="1" transform="translate(15.031 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_58" data-name="Rectangle 58" width="2.537" height="2.537" rx="1" transform="translate(18.037 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_59" data-name="Rectangle 59" width="2.537" height="2.537" rx="1" transform="translate(21.042 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_60" data-name="Rectangle 60" width="2.537" height="2.537" rx="1" transform="translate(24.049 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_61" data-name="Rectangle 61" width="2.537" height="2.537" rx="1" transform="translate(27.055 0)" fill="#4a4a4a"/>
            <rect id="Rectangle_62" data-name="Rectangle 62" width="2.537" height="2.537" rx="1" transform="translate(30.061 0)" fill="#4a4a4a"/>
          </g>
          <path id="Path_55" data-name="Path 55" d="M.52,0H3.8a.519.519,0,0,1,.519.519v1.5a.519.519,0,0,1-.519.519H.519A.519.519,0,0,1,0,2.017V.52A.519.519,0,0,1,.519,0Z" transform="translate(38.234 0)" fill="#4a4a4a" fill-rule="evenodd"/>
        </g>
        <g id="Group_7" data-name="Group 7" transform="translate(0.728 14.084)">
          <rect id="Rectangle_63" data-name="Rectangle 63" width="2.537" height="2.537" rx="1" transform="translate(0 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_64" data-name="Rectangle 64" width="2.537" height="2.537" rx="1" transform="translate(3.006 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_65" data-name="Rectangle 65" width="2.537" height="2.537" rx="1" transform="translate(6.012 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_66" data-name="Rectangle 66" width="2.537" height="2.537" rx="1" transform="translate(9.018 0)" fill="#4a4a4a"/>
          <path id="Path_56" data-name="Path 56" d="M.519,0H14.981A.519.519,0,0,1,15.5.519v1.5a.519.519,0,0,1-.519.519H.519A.519.519,0,0,1,0,2.018V.519A.519.519,0,0,1,.519,0Zm15.97,0h1.874a.519.519,0,0,1,.519.519v1.5a.519.519,0,0,1-.519.519H16.489a.519.519,0,0,1-.519-.519V.519A.519.519,0,0,1,16.489,0Z" transform="translate(12.024 0)" fill="#4a4a4a" fill-rule="evenodd"/>
          <rect id="Rectangle_67" data-name="Rectangle 67" width="2.537" height="2.537" rx="1" transform="translate(31.376 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_68" data-name="Rectangle 68" width="2.537" height="2.537" rx="1" transform="translate(34.382 0)" fill="#4a4a4a"/>
          <rect id="Rectangle_69" data-name="Rectangle 69" width="2.537" height="2.537" rx="1" transform="translate(40.018 0)" fill="#4a4a4a"/>
          <path id="Path_57" data-name="Path 57" d="M2.537,0V.561a.519.519,0,0,1-.519.519H.519A.519.519,0,0,1,0,.561V0Z" transform="translate(39.736 1.08) rotate(180)" fill="#4a4a4a"/>
          <path id="Path_58" data-name="Path 58" d="M2.537,0V.561a.519.519,0,0,1-.519.519H.519A.519.519,0,0,1,0,.561V0Z" transform="translate(37.2 1.456)" fill="#4a4a4a"/>
        </g>
        <rect id="Rectangle_70" data-name="Rectangle 70" width="42.273" height="1.127" rx="0.564" transform="translate(0.915 0.556)" fill="#4a4a4a"/>
        <rect id="Rectangle_71" data-name="Rectangle 71" width="2.37" height="0.752" rx="0.376" transform="translate(1.949 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_72" data-name="Rectangle 72" width="2.37" height="0.752" rx="0.376" transform="translate(5.193 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_73" data-name="Rectangle 73" width="2.37" height="0.752" rx="0.376" transform="translate(7.688 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_74" data-name="Rectangle 74" width="2.37" height="0.752" rx="0.376" transform="translate(10.183 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_75" data-name="Rectangle 75" width="2.37" height="0.752" rx="0.376" transform="translate(12.679 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_76" data-name="Rectangle 76" width="2.37" height="0.752" rx="0.376" transform="translate(15.797 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_77" data-name="Rectangle 77" width="2.37" height="0.752" rx="0.376" transform="translate(18.292 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_78" data-name="Rectangle 78" width="2.37" height="0.752" rx="0.376" transform="translate(20.788 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_79" data-name="Rectangle 79" width="2.37" height="0.752" rx="0.376" transform="translate(23.283 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_80" data-name="Rectangle 80" width="2.37" height="0.752" rx="0.376" transform="translate(26.402 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_81" data-name="Rectangle 81" width="2.37" height="0.752" rx="0.376" transform="translate(28.897 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_82" data-name="Rectangle 82" width="2.37" height="0.752" rx="0.376" transform="translate(31.393 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_83" data-name="Rectangle 83" width="2.37" height="0.752" rx="0.376" transform="translate(34.512 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_84" data-name="Rectangle 84" width="2.37" height="0.752" rx="0.376" transform="translate(37.007 0.744)" fill="#d8d8d8" opacity="0.136"/>
        <rect id="Rectangle_85" data-name="Rectangle 85" width="2.37" height="0.752" rx="0.376" transform="translate(39.502 0.744)" fill="#d8d8d8" opacity="0.136"/>
      </g>
      <path id="Path_59" data-name="Path 59" d="M123.779,148.389a2.583,2.583,0,0,0-.332.033c-.02-.078-.038-.156-.06-.234a2.594,2.594,0,1,0-2.567-4.455q-.086-.088-.174-.175a2.593,2.593,0,1,0-4.461-2.569c-.077-.022-.154-.04-.231-.06a2.6,2.6,0,1,0-5.128,0c-.077.02-.154.038-.231.06a2.594,2.594,0,1,0-4.461,2.569,10.384,10.384,0,1,0,17.314,9.992,2.592,2.592,0,1,0,.332-5.161" transform="translate(-51.054 -75.262)" fill="#44d860" fill-rule="evenodd"/>
      <path id="Path_60" data-name="Path 60" d="M83,113.389h20.779V103H83Z" transform="translate(-41.443 -58.444)" fill="#3ecc5f" fill-rule="evenodd"/>
      <path id="Path_61" data-name="Path 61" d="M123.389,108.944a1.3,1.3,0,1,0,0-2.6,1.338,1.338,0,0,0-.166.017c-.01-.039-.019-.078-.03-.117a1.3,1.3,0,0,0-.5-2.5,1.285,1.285,0,0,0-.783.269q-.043-.044-.087-.087a1.285,1.285,0,0,0,.263-.776,1.3,1.3,0,0,0-2.493-.509,5.195,5.195,0,1,0,0,10,1.3,1.3,0,0,0,2.493-.509,1.285,1.285,0,0,0-.263-.776q.044-.043.087-.087a1.285,1.285,0,0,0,.783.269,1.3,1.3,0,0,0,.5-2.5c.011-.038.02-.078.03-.117a1.335,1.335,0,0,0,.166.017" transform="translate(-55.859 -57.894)" fill="#44d860" fill-rule="evenodd"/>
      <path id="Path_62" data-name="Path 62" d="M141.8,38.745a1.41,1.41,0,0,1-.255-.026,1.309,1.309,0,0,1-.244-.073,1.349,1.349,0,0,1-.224-.119,1.967,1.967,0,0,1-.2-.161,1.52,1.52,0,0,1-.161-.2,1.282,1.282,0,0,1-.218-.722,1.41,1.41,0,0,1,.026-.255,1.5,1.5,0,0,1,.072-.244,1.364,1.364,0,0,1,.12-.223,1.252,1.252,0,0,1,.358-.358,1.349,1.349,0,0,1,.224-.119,1.309,1.309,0,0,1,.244-.073,1.2,1.2,0,0,1,.509,0,1.262,1.262,0,0,1,.468.192,1.968,1.968,0,0,1,.2.161,1.908,1.908,0,0,1,.161.2,1.322,1.322,0,0,1,.12.223,1.361,1.361,0,0,1,.1.5,1.317,1.317,0,0,1-.379.919,1.968,1.968,0,0,1-.2.161,1.346,1.346,0,0,1-.223.119,1.332,1.332,0,0,1-.5.1m10.389-.649a1.326,1.326,0,0,1-.92-.379,1.979,1.979,0,0,1-.161-.2,1.282,1.282,0,0,1-.218-.722,1.326,1.326,0,0,1,.379-.919,1.967,1.967,0,0,1,.2-.161,1.351,1.351,0,0,1,.224-.119,1.308,1.308,0,0,1,.244-.073,1.2,1.2,0,0,1,.509,0,1.262,1.262,0,0,1,.468.192,1.967,1.967,0,0,1,.2.161,1.326,1.326,0,0,1,.379.919,1.461,1.461,0,0,1-.026.255,1.323,1.323,0,0,1-.073.244,1.847,1.847,0,0,1-.119.223,1.911,1.911,0,0,1-.161.2,1.967,1.967,0,0,1-.2.161,1.294,1.294,0,0,1-.722.218" transform="translate(-69.074 -26.006)" fill-rule="evenodd"/>
    </g>
    <g id="React-icon" transform="translate(906.3 541.56)">
      <path id="Path_330" data-name="Path 330" d="M263.668,117.179c0-5.827-7.3-11.35-18.487-14.775,2.582-11.4,1.434-20.477-3.622-23.382a7.861,7.861,0,0,0-4.016-1v4a4.152,4.152,0,0,1,2.044.466c2.439,1.4,3.5,6.724,2.672,13.574-.2,1.685-.52,3.461-.914,5.272a86.9,86.9,0,0,0-11.386-1.954,87.469,87.469,0,0,0-7.459-8.965c5.845-5.433,11.332-8.41,15.062-8.41V78h0c-4.931,0-11.386,3.514-17.913,9.611-6.527-6.061-12.982-9.539-17.913-9.539v4c3.712,0,9.216,2.959,15.062,8.356a84.687,84.687,0,0,0-7.405,8.947,83.732,83.732,0,0,0-11.4,1.972c-.412-1.793-.717-3.532-.932-5.2-.843-6.85.2-12.175,2.618-13.592a3.991,3.991,0,0,1,2.062-.466v-4h0a8,8,0,0,0-4.052,1c-5.039,2.9-6.168,11.96-3.568,23.328-11.153,3.443-18.415,8.947-18.415,14.757,0,5.828,7.3,11.35,18.487,14.775-2.582,11.4-1.434,20.477,3.622,23.382a7.882,7.882,0,0,0,4.034,1c4.931,0,11.386-3.514,17.913-9.611,6.527,6.061,12.982,9.539,17.913,9.539a8,8,0,0,0,4.052-1c5.039-2.9,6.168-11.96,3.568-23.328C256.406,128.511,263.668,122.988,263.668,117.179Zm-23.346-11.96c-.663,2.313-1.488,4.7-2.421,7.083-.735-1.434-1.506-2.869-2.349-4.3-.825-1.434-1.7-2.833-2.582-4.2C235.517,104.179,237.974,104.645,240.323,105.219Zm-8.212,19.1c-1.4,2.421-2.833,4.716-4.321,6.85-2.672.233-5.379.359-8.1.359-2.708,0-5.415-.126-8.069-.341q-2.232-3.2-4.339-6.814-2.044-3.523-3.73-7.136c1.112-2.4,2.367-4.805,3.712-7.154,1.4-2.421,2.833-4.716,4.321-6.85,2.672-.233,5.379-.359,8.1-.359,2.708,0,5.415.126,8.069.341q2.232,3.2,4.339,6.814,2.044,3.523,3.73,7.136C234.692,119.564,233.455,121.966,232.11,124.315Zm5.792-2.331c.968,2.4,1.793,4.805,2.474,7.136-2.349.574-4.823,1.058-7.387,1.434.879-1.381,1.757-2.8,2.582-4.25C236.4,124.871,237.167,123.419,237.9,121.984ZM219.72,141.116a73.921,73.921,0,0,1-4.985-5.738c1.614.072,3.263.126,4.931.126,1.685,0,3.353-.036,4.985-.126A69.993,69.993,0,0,1,219.72,141.116ZM206.38,130.555c-2.546-.377-5-.843-7.352-1.417.663-2.313,1.488-4.7,2.421-7.083.735,1.434,1.506,2.869,2.349,4.3S205.5,129.192,206.38,130.555ZM219.63,93.241a73.924,73.924,0,0,1,4.985,5.738c-1.614-.072-3.263-.126-4.931-.126-1.686,0-3.353.036-4.985.126A69.993,69.993,0,0,1,219.63,93.241ZM206.362,103.8c-.879,1.381-1.757,2.8-2.582,4.25-.825,1.434-1.6,2.869-2.331,4.3-.968-2.4-1.793-4.805-2.474-7.136C201.323,104.663,203.8,104.179,206.362,103.8Zm-16.227,22.449c-6.348-2.708-10.454-6.258-10.454-9.073s4.106-6.383,10.454-9.073c1.542-.663,3.228-1.255,4.967-1.811a86.122,86.122,0,0,0,4.034,10.92,84.9,84.9,0,0,0-3.981,10.866C193.38,127.525,191.694,126.915,190.134,126.252Zm9.647,25.623c-2.439-1.4-3.5-6.724-2.672-13.574.2-1.686.52-3.461.914-5.272a86.9,86.9,0,0,0,11.386,1.954,87.465,87.465,0,0,0,7.459,8.965c-5.845,5.433-11.332,8.41-15.062,8.41A4.279,4.279,0,0,1,199.781,151.875Zm42.532-13.663c.843,6.85-.2,12.175-2.618,13.592a3.99,3.99,0,0,1-2.062.466c-3.712,0-9.216-2.959-15.062-8.356a84.689,84.689,0,0,0,7.405-8.947,83.731,83.731,0,0,0,11.4-1.972A50.194,50.194,0,0,1,242.313,138.212Zm6.9-11.96c-1.542.663-3.228,1.255-4.967,1.811a86.12,86.12,0,0,0-4.034-10.92,84.9,84.9,0,0,0,3.981-10.866c1.775.556,3.461,1.165,5.039,1.829,6.348,2.708,10.454,6.258,10.454,9.073C259.67,119.994,255.564,123.562,249.216,126.252Z" fill="#61dafb"/>
      <path id="Path_331" data-name="Path 331" d="M320.8,78.4Z" transform="translate(-119.082 -0.328)" fill="#61dafb"/>
      <circle id="Ellipse_112" data-name="Ellipse 112" cx="8.194" cy="8.194" r="8.194" transform="translate(211.472 108.984)" fill="#61dafb"/>
      <path id="Path_332" data-name="Path 332" d="M520.5,78.1Z" transform="translate(-282.975 -0.082)" fill="#61dafb"/>
    </g>
  </g>
</svg>
`````

## File: docs/static/img/undraw_docusaurus_tree.svg
`````xml
<svg xmlns="http://www.w3.org/2000/svg" width="1129" height="663" viewBox="0 0 1129 663">
  <title>Focus on What Matters</title>
  <circle cx="321" cy="321" r="321" fill="#f2f2f2" />
  <ellipse cx="559" cy="635.49998" rx="514" ry="27.50002" fill="#3f3d56" />
  <ellipse cx="558" cy="627" rx="460" ry="22" opacity="0.2" />
  <rect x="131" y="152.5" width="840" height="50" fill="#3f3d56" />
  <path d="M166.5,727.3299A21.67009,21.67009,0,0,0,188.1701,749H984.8299A21.67009,21.67009,0,0,0,1006.5,727.3299V296h-840Z" transform="translate(-35.5 -118.5)" fill="#3f3d56" />
  <path d="M984.8299,236H188.1701A21.67009,21.67009,0,0,0,166.5,257.6701V296h840V257.6701A21.67009,21.67009,0,0,0,984.8299,236Z" transform="translate(-35.5 -118.5)" fill="#3f3d56" />
  <path d="M984.8299,236H188.1701A21.67009,21.67009,0,0,0,166.5,257.6701V296h840V257.6701A21.67009,21.67009,0,0,0,984.8299,236Z" transform="translate(-35.5 -118.5)" opacity="0.2" />
  <circle cx="181" cy="147.5" r="13" fill="#3f3d56" />
  <circle cx="217" cy="147.5" r="13" fill="#3f3d56" />
  <circle cx="253" cy="147.5" r="13" fill="#3f3d56" />
  <rect x="168" y="213.5" width="337" height="386" rx="5.33505" fill="#606060" />
  <rect x="603" y="272.5" width="284" height="22" rx="5.47638" fill="#2e8555" />
  <rect x="537" y="352.5" width="416" height="15" rx="5.47638" fill="#2e8555" />
  <rect x="537" y="396.5" width="416" height="15" rx="5.47638" fill="#2e8555" />
  <rect x="537" y="440.5" width="416" height="15" rx="5.47638" fill="#2e8555" />
  <rect x="537" y="484.5" width="416" height="15" rx="5.47638" fill="#2e8555" />
  <rect x="865" y="552.5" width="88" height="26" rx="7.02756" fill="#3ecc5f" />
  <path d="M1088.60287,624.61594a30.11371,30.11371,0,0,0,3.98291-15.266c0-13.79652-8.54358-24.98081-19.08256-24.98081s-19.08256,11.18429-19.08256,24.98081a30.11411,30.11411,0,0,0,3.98291,15.266,31.248,31.248,0,0,0,0,30.53213,31.248,31.248,0,0,0,0,30.53208,31.248,31.248,0,0,0,0,30.53208,30.11408,30.11408,0,0,0-3.98291,15.266c0,13.79652,8.54353,24.98081,19.08256,24.98081s19.08256-11.18429,19.08256-24.98081a30.11368,30.11368,0,0,0-3.98291-15.266,31.248,31.248,0,0,0,0-30.53208,31.248,31.248,0,0,0,0-30.53208,31.248,31.248,0,0,0,0-30.53213Z" transform="translate(-35.5 -118.5)" fill="#3f3d56" />
  <ellipse cx="1038.00321" cy="460.31783" rx="19.08256" ry="24.9808" fill="#3f3d56" />
  <ellipse cx="1038.00321" cy="429.78574" rx="19.08256" ry="24.9808" fill="#3f3d56" />
  <path d="M1144.93871,339.34489a91.61081,91.61081,0,0,0,7.10658-10.46092l-50.141-8.23491,54.22885.4033a91.566,91.566,0,0,0,1.74556-72.42605l-72.75449,37.74139,67.09658-49.32086a91.41255,91.41255,0,1,0-150.971,102.29805,91.45842,91.45842,0,0,0-10.42451,16.66946l65.0866,33.81447-69.40046-23.292a91.46011,91.46011,0,0,0,14.73837,85.83669,91.40575,91.40575,0,1,0,143.68892,0,91.41808,91.41808,0,0,0,0-113.02862Z" transform="translate(-35.5 -118.5)" fill="#3ecc5f" fill-rule="evenodd" />
  <path d="M981.6885,395.8592a91.01343,91.01343,0,0,0,19.56129,56.51431,91.40575,91.40575,0,1,0,143.68892,0C1157.18982,436.82067,981.6885,385.60008,981.6885,395.8592Z" transform="translate(-35.5 -118.5)" opacity="0.1" />
  <path d="M365.62,461.43628H477.094v45.12043H365.62Z" transform="translate(-35.5 -118.5)" fill="#fff" fill-rule="evenodd" />
  <path d="M264.76252,608.74122a26.50931,26.50931,0,0,1-22.96231-13.27072,26.50976,26.50976,0,0,0,22.96231,39.81215H291.304V608.74122Z" transform="translate(-35.5 -118.5)" fill="#3ecc5f" fill-rule="evenodd" />
  <path d="M384.17242,468.57061l92.92155-5.80726V449.49263a26.54091,26.54091,0,0,0-26.54143-26.54143H331.1161l-3.31768-5.74622a3.83043,3.83043,0,0,0-6.63536,0l-3.31768,5.74622-3.31767-5.74622a3.83043,3.83043,0,0,0-6.63536,0l-3.31768,5.74622L301.257,417.205a3.83043,3.83043,0,0,0-6.63536,0L291.304,422.9512c-.02919,0-.05573.004-.08625.004l-5.49674-5.49541a3.8293,3.8293,0,0,0-6.4071,1.71723l-1.81676,6.77338L270.607,424.1031a3.82993,3.82993,0,0,0-4.6912,4.69253l1.84463,6.89148-6.77072,1.81411a3.8315,3.8315,0,0,0-1.71988,6.40975l5.49673,5.49673c0,.02787-.004.05574-.004.08493l-5.74622,3.31768a3.83043,3.83043,0,0,0,0,6.63536l5.74621,3.31768L259.0163,466.081a3.83043,3.83043,0,0,0,0,6.63536l5.74622,3.31768-5.74622,3.31767a3.83043,3.83043,0,0,0,0,6.63536l5.74622,3.31768-5.74622,3.31768a3.83043,3.83043,0,0,0,0,6.63536l5.74622,3.31768-5.74622,3.31767a3.83043,3.83043,0,0,0,0,6.63536l5.74622,3.31768-5.74622,3.31768a3.83043,3.83043,0,0,0,0,6.63536l5.74622,3.31768-5.74622,3.31768a3.83042,3.83042,0,0,0,0,6.63535l5.74622,3.31768-5.74622,3.31768a3.83043,3.83043,0,0,0,0,6.63536l5.74622,3.31768L259.0163,558.976a3.83042,3.83042,0,0,0,0,6.63535l5.74622,3.31768-5.74622,3.31768a3.83043,3.83043,0,0,0,0,6.63536l5.74622,3.31768-5.74622,3.31768a3.83042,3.83042,0,0,0,0,6.63535l5.74622,3.31768-5.74622,3.31768a3.83043,3.83043,0,0,0,0,6.63536l5.74622,3.31768A26.54091,26.54091,0,0,0,291.304,635.28265H450.55254A26.5409,26.5409,0,0,0,477.094,608.74122V502.5755l-92.92155-5.80727a14.12639,14.12639,0,0,1,0-28.19762" transform="translate(-35.5 -118.5)" fill="#3ecc5f" fill-rule="evenodd" />
  <path d="M424.01111,635.28265h39.81214V582.19979H424.01111Z" transform="translate(-35.5 -118.5)" fill="#3ecc5f" fill-rule="evenodd" />
  <path d="M490.36468,602.10586a6.60242,6.60242,0,0,0-.848.08493c-.05042-.19906-.09821-.39945-.15393-.59852A6.62668,6.62668,0,1,0,482.80568,590.21q-.2203-.22491-.44457-.44589a6.62391,6.62391,0,1,0-11.39689-6.56369c-.1964-.05575-.39414-.10218-.59056-.15262a6.63957,6.63957,0,1,0-13.10086,0c-.1964.05042-.39414.09687-.59056.15262a6.62767,6.62767,0,1,0-11.39688,6.56369,26.52754,26.52754,0,1,0,44.23127,25.52756,6.6211,6.6211,0,1,0,.848-13.18579" transform="translate(-35.5 -118.5)" fill="#44d860" fill-rule="evenodd" />
  <path d="M437.28182,555.65836H477.094V529.11693H437.28182Z" transform="translate(-35.5 -118.5)" fill="#3ecc5f" fill-rule="evenodd" />
  <path d="M490.36468,545.70532a3.31768,3.31768,0,0,0,0-6.63536,3.41133,3.41133,0,0,0-.42333.04247c-.02655-.09953-.04911-.19907-.077-.29859a3.319,3.319,0,0,0-1.278-6.37923,3.28174,3.28174,0,0,0-2.00122.68742q-.10947-.11346-.22294-.22295a3.282,3.282,0,0,0,.67149-1.98265,3.31768,3.31768,0,0,0-6.37-1.2992,13.27078,13.27078,0,1,0,0,25.54082,3.31768,3.31768,0,0,0,6.37-1.2992,3.282,3.282,0,0,0-.67149-1.98265q.11347-.10947.22294-.22294a3.28174,3.28174,0,0,0,2.00122.68742,3.31768,3.31768,0,0,0,1.278-6.37923c.02786-.0982.05042-.19907.077-.29859a3.41325,3.41325,0,0,0,.42333.04246" transform="translate(-35.5 -118.5)" fill="#44d860" fill-rule="evenodd" />
  <path d="M317.84538,466.081a3.31768,3.31768,0,0,1-3.31767-3.31768,9.953,9.953,0,1,0-19.90608,0,3.31768,3.31768,0,1,1-6.63535,0,16.58839,16.58839,0,1,1,33.17678,0,3.31768,3.31768,0,0,1-3.31768,3.31768" transform="translate(-35.5 -118.5)" fill-rule="evenodd" />
  <path d="M370.92825,635.28265h79.62429A26.5409,26.5409,0,0,0,477.094,608.74122v-92.895H397.46968a26.54091,26.54091,0,0,0-26.54143,26.54143Z" transform="translate(-35.5 -118.5)" fill="#ffff50" fill-rule="evenodd" />
  <path d="M457.21444,556.98543H390.80778a1.32707,1.32707,0,0,1,0-2.65414h66.40666a1.32707,1.32707,0,0,1,0,2.65414m0,26.54143H390.80778a1.32707,1.32707,0,1,1,0-2.65414h66.40666a1.32707,1.32707,0,0,1,0,2.65414m0,26.54143H390.80778a1.32707,1.32707,0,1,1,0-2.65414h66.40666a1.32707,1.32707,0,0,1,0,2.65414m0-66.10674H390.80778a1.32707,1.32707,0,0,1,0-2.65414h66.40666a1.32707,1.32707,0,0,1,0,2.65414m0,26.29459H390.80778a1.32707,1.32707,0,0,1,0-2.65414h66.40666a1.32707,1.32707,0,0,1,0,2.65414m0,26.54143H390.80778a1.32707,1.32707,0,0,1,0-2.65414h66.40666a1.32707,1.32707,0,0,1,0,2.65414M477.094,474.19076c-.01592,0-.0292-.008-.04512-.00663-4.10064.13934-6.04083,4.24132-7.75274,7.86024-1.78623,3.78215-3.16771,6.24122-5.43171,6.16691-2.50685-.09024-3.94007-2.92222-5.45825-5.91874-1.74377-3.44243-3.73438-7.34667-7.91333-7.20069-4.04227.138-5.98907,3.70784-7.70631,6.857-1.82738,3.35484-3.07084,5.39455-5.46887,5.30033-2.55727-.09289-3.91619-2.39536-5.48877-5.06013-1.75306-2.96733-3.77951-6.30359-7.8775-6.18946-3.97326.13669-5.92537,3.16507-7.64791,5.83912-1.82207,2.82666-3.09872,4.5492-5.52725,4.447-2.61832-.09289-3.9706-2.00388-5.53522-4.21611-1.757-2.4856-3.737-5.299-7.82308-5.16231-3.88567.13271-5.83779,2.61434-7.559,4.80135-1.635,2.07555-2.9116,3.71846-5.61218,3.615a1.32793,1.32793,0,1,0-.09555,2.65414c4.00377.134,6.03154-2.38873,7.79257-4.6275,1.562-1.9853,2.91027-3.69855,5.56441-3.78879,2.55594-.10882,3.75429,1.47968,5.56707,4.04093,1.7212,2.43385,3.67465,5.19416,7.60545,5.33616,4.11789.138,6.09921-2.93946,7.8536-5.66261,1.56861-2.43385,2.92221-4.53461,5.50734-4.62352,2.37944-.08892,3.67466,1.79154,5.50072,4.885,1.72121,2.91557,3.67069,6.21865,7.67977,6.36463,4.14709.14332,6.14965-3.47693,7.89475-6.68181,1.51155-2.77092,2.93814-5.38791,5.46621-5.4755,2.37944-.05573,3.62025,2.11668,5.45558,5.74622,1.71459,3.388,3.65875,7.22591,7.73019,7.37321l.22429.004c4.06614,0,5.99571-4.08074,7.70364-7.68905,1.51154-3.19825,2.94211-6.21069,5.3972-6.33411Z" transform="translate(-35.5 -118.5)" fill-rule="evenodd" />
  <path d="M344.38682,635.28265h53.08286V582.19979H344.38682Z" transform="translate(-35.5 -118.5)" fill="#3ecc5f" fill-rule="evenodd" />
  <path d="M424.01111,602.10586a6.60242,6.60242,0,0,0-.848.08493c-.05042-.19906-.09821-.39945-.15394-.59852A6.62667,6.62667,0,1,0,416.45211,590.21q-.2203-.22491-.44458-.44589a6.62391,6.62391,0,1,0-11.39689-6.56369c-.1964-.05575-.39413-.10218-.59054-.15262a6.63957,6.63957,0,1,0-13.10084,0c-.19641.05042-.39414.09687-.59055.15262a6.62767,6.62767,0,1,0-11.39689,6.56369,26.52755,26.52755,0,1,0,44.2313,25.52756,6.6211,6.6211,0,1,0,.848-13.18579" transform="translate(-35.5 -118.5)" fill="#44d860" fill-rule="evenodd" />
  <path d="M344.38682,555.65836h53.08286V529.11693H344.38682Z" transform="translate(-35.5 -118.5)" fill="#3ecc5f" fill-rule="evenodd" />
  <path d="M410.74039,545.70532a3.31768,3.31768,0,1,0,0-6.63536,3.41133,3.41133,0,0,0-.42333.04247c-.02655-.09953-.04911-.19907-.077-.29859a3.319,3.319,0,0,0-1.278-6.37923,3.28174,3.28174,0,0,0-2.00122.68742q-.10947-.11346-.22294-.22295a3.282,3.282,0,0,0,.67149-1.98265,3.31768,3.31768,0,0,0-6.37-1.2992,13.27078,13.27078,0,1,0,0,25.54082,3.31768,3.31768,0,0,0,6.37-1.2992,3.282,3.282,0,0,0-.67149-1.98265q.11347-.10947.22294-.22294a3.28174,3.28174,0,0,0,2.00122.68742,3.31768,3.31768,0,0,0,1.278-6.37923c.02786-.0982.05042-.19907.077-.29859a3.41325,3.41325,0,0,0,.42333.04246" transform="translate(-35.5 -118.5)" fill="#44d860" fill-rule="evenodd" />
  <path d="M424.01111,447.8338a3.60349,3.60349,0,0,1-.65028-.06636,3.34415,3.34415,0,0,1-.62372-.18579,3.44679,3.44679,0,0,1-.572-.30522,5.02708,5.02708,0,0,1-.50429-.4114,3.88726,3.88726,0,0,1-.41007-.50428,3.27532,3.27532,0,0,1-.55737-1.84463,3.60248,3.60248,0,0,1,.06636-.65027,3.82638,3.82638,0,0,1,.18447-.62373,3.48858,3.48858,0,0,1,.30656-.57064,3.197,3.197,0,0,1,.91436-.91568,3.44685,3.44685,0,0,1,.572-.30523,3.344,3.344,0,0,1,.62372-.18578,3.06907,3.06907,0,0,1,1.30053,0,3.22332,3.22332,0,0,1,1.19436.491,5.02835,5.02835,0,0,1,.50429.41139,4.8801,4.8801,0,0,1,.41139.50429,3.38246,3.38246,0,0,1,.30522.57064,3.47806,3.47806,0,0,1,.25215,1.274A3.36394,3.36394,0,0,1,426.36,446.865a5.02708,5.02708,0,0,1-.50429.4114,3.3057,3.3057,0,0,1-1.84463.55737m26.54143-1.65884a3.38754,3.38754,0,0,1-2.35024-.96877,5.04185,5.04185,0,0,1-.41007-.50428,3.27532,3.27532,0,0,1-.55737-1.84463,3.38659,3.38659,0,0,1,.96744-2.34892,5.02559,5.02559,0,0,1,.50429-.41139,3.44685,3.44685,0,0,1,.572-.30523,3.3432,3.3432,0,0,1,.62373-.18579,3.06952,3.06952,0,0,1,1.30052,0,3.22356,3.22356,0,0,1,1.19436.491,5.02559,5.02559,0,0,1,.50429.41139,3.38792,3.38792,0,0,1,.96876,2.34892,3.72635,3.72635,0,0,1-.06636.65026,3.37387,3.37387,0,0,1-.18579.62373,4.71469,4.71469,0,0,1-.30522.57064,4.8801,4.8801,0,0,1-.41139.50429,5.02559,5.02559,0,0,1-.50429.41139,3.30547,3.30547,0,0,1-1.84463.55737" transform="translate(-35.5 -118.5)" fill-rule="evenodd" />
</svg>
`````

## File: docs/tsconfig.json
`````json
// This file is not used by "docusaurus start/build" commands.
// It is here to improve your IDE experience (type-checking, autocompletion...),
// and can also run the package.json "typecheck" script manually.
{
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "ignoreDeprecations": "6.0",
    "strict": true
  },
  "exclude": [".docusaurus", "build"]
}
`````

## File: guardian.js
`````javascript
/**DO NOT TOUCH THIS FILES
 * guardian.js 
 *
 * Placed OUTSIDE the main app directory intentionally.
 * spawning the backend. It NEVER modifies any backend files.
 *
 * Usage:
 *   node ../guardian.js
 */

import { createHash } from 'crypto';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

// -- Config ------------------------------------------------------------------
const APP_DIR = __dirname;
const SIG_FILE = resolve(APP_DIR, 'public', 'ascii-signature.js');
const KNOWN_HASH = '4f944ac5a2cbaa80effa0eb4b24c9e19be33975505cec87b3e6c8b6c542f5f1d';
const BACKEND = resolve(APP_DIR, 'server', 'index.ts');

// -- Banner (plain ASCII, no colors, no special chars) ----------------------
console.log('');
console.log('  @RizkyDaffy -- kbyte v1.0');
console.log('  Checking integrity of ascii-signature.js...');
console.log('');

// -- Integrity check ---------------------------------------------------------
if (!existsSync(SIG_FILE)) {
  console.error('[SATPAM KODE] FATAL: Signature file not found at:');
  console.error('  ' + SIG_FILE);
  console.error('[SATPAM KODE] Backend startup REFUSED.');
  process.exit(1);
}

const raw = readFileSync(SIG_FILE, 'utf8');
const content = raw.replace(/^\/\*[^\n]*\*\/\r?\n/, '');
const actualHash = createHash('sha256').update(content).digest('hex');

if (actualHash !== KNOWN_HASH) {
  console.error('[SATPAM KODE] WARNING: INTEGRITY MISMATCH DETECTED!');
  console.error('  Actual   : ' + actualHash);
  console.error('[SATPAM KODE] ascii-signature.js has been tampered with.');
  console.error('[SATPAM KODE] Backend startup REFUSED.');
  process.exit(1);
}

console.log('[SATPAM KODE] OK - Signature integrity verified.');
console.log('[SATPAM KODE] Hash: ' + actualHash);
console.log('[SATPAM KODE] Spawning backend...');
console.log('');

// -- Spawn backend (never modifies it) ----------------------------------------
const child = spawn(
  'npx',
  ['tsx', BACKEND],
  {
    cwd: APP_DIR,
    stdio: 'inherit',
    shell: true,
    env: { ...process.env },
  }
);

child.on('close', (code) => {
  console.log('[SATPAM KODE] Backend exited with code ' + code + '.');
  process.exit(code ?? 0);
});

child.on('error', (err) => {
  console.error('[SATPAM KODE] Failed to spawn backend: ' + err.message);
  process.exit(1);
});
`````

## File: PREDEPLOY_CHECK.md
`````markdown
# Pre-deploy Check Report: Pixel Scan Dashboard

This document details the checks, adjustments, optimizations, and bug fixes applied to the `pixel-scan-dashboard` project codebase. All changes have been made defensively to preserve application behavior and ensure zero runtime logic regressions, while dramatically improving reliability, clean builds, and efficiency.

---

## 📊 Summary of Verification Runs

Before deployment, we validated the codebase using standard tools:

1. **TypeScript Compilation Check (`npx tsc --noEmit`)**
   - **Result**: **PASS** (0 errors, 0 warnings)
   - *Note*: Resolved pre-existing compilation-blocking type conflicts and missing dependencies.
2. **ESLint Static Analysis Check (`npm run lint`)**
   - **Result**: **PASS** (0 errors in the `src/` frontend codebase)
   - *Note*: Cleaned up pre-existing type warnings, unused statements, and formatting errors.
3. **Prettier Formatting Check (`npm run format`)**
   - **Result**: **PASS** (100% formatted using project standards, removing ~650 formatting errors).

---

## 🛠️ Detailed Adjustments & Fixes

Below are the specific adjustments, grouped by file:

### 1. `src/components/dashboard/PageTransition.tsx` (Missing Dependency / Compilation Fail)
* **Issue**: Imported `motion` from `framer-motion`, which was not installed in `package.json`, causing compilation failure (`TS2307: Cannot find module 'framer-motion'`).
* **Adjustment**: Replaced `<motion.div>` with a standard `<div>` utilizing the project's pre-configured `tw-animate-css` utilities.
* **Before**:
  ```tsx
  import { motion } from "framer-motion";
  
  export function PageTransition({ children }: PageTransitionProps) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full"
      >
        {children}
      </motion.div>
    );
  }
  ```
* **After**:
  ```tsx
  export function PageTransition({ children }: PageTransitionProps) {
    return (
      <div className="w-full animate-in fade-in slide-in-from-bottom-3 duration-200">
        {children}
      </div>
    );
  }
  ```
* **Impact**: Restored compile ability with zero dependencies, preserving visual premium transitions.

---

### 2. `src/routes/users/create.tsx` (Dead Code / Type Conflicting Warning)
* **Issue**: A conditional check `editUser.role === "viewer"` caused compilation error `TS2367` because `AppUser.role` has the union type `"admin" | "operator" | "usertv"`, which never overlaps with `"viewer"`.
* **Adjustment**: Removed the dead logic branch and assigned the role directly.
* **Before**:
  ```tsx
  setRole(
    editUser.role === "viewer" ? "usertv" : editUser.role
  );
  ```
* **After**:
  ```tsx
  // editUser.role is already "admin" | "operator" | "usertv" - assign directly.
  // The old "viewer" branch was dead code (type overlap error TS2367).
  setRole(editUser.role);
  ```
* **Impact**: Cleaned compile warnings and simplified logic.

---

### 3. `src/routes/dashboard.tsx` (UI Layout Bug / Duplicate Entries)
* **Issue**: The landing/dashboard overview page displayed duplicate mock panels because `DEFAULT_MODULES` had redundant entries.
* **Adjustment**: Cleaned up the `DEFAULT_MODULES` array from 6 items to 3 unique cards (Stock Overview, Scan History, Reports).
* **Before**:
  ```tsx
  const DEFAULT_MODULES: Module[] = [
    { title: "Stock Overview", ... },
    { title: "Scan History", ... },
    { title: "Reports", ... },
    { title: "Reports", ... }, // duplicate
    { title: "Reports", ... }, // duplicate
    // ...
  ];
  ```
* **After**:
  ```tsx
  const DEFAULT_MODULES: Module[] = [
    {
      title: "Stock Overview",
      description: "Monitor current resin stock levels and pallet inventory in real-time across all storage locations.",
      icon: "M9...",
      route: "stock.index",
    },
    {
      title: "Scan History",
      description: "View full audit trail of all Scan IN / Scan OUT transactions with timestamps and operator details.",
      icon: "M9...",
      route: "scan.history",
    },
    {
      title: "Reports",
      description: "Generate and export production reports by date range, material type, or station.",
      icon: "M9...",
      route: "#",
    },
  ];
  ```
* **Impact**: Standardized UI view, removing duplicates.

---

### 4. `src/hooks/use-tv-dashboard.ts` (Performance / Network Optimization)
* **Issue**: The TV dashboard queried the `/stock-analytics/tv` endpoint every 3 seconds (`refetchInterval: 3000`).
* **Adjustment**: Increased the polling rate to 10 seconds (`refetchInterval: 10_000`). Because stock analytics are hourly/shift-based, 3-second querying wasted network resources and generated excessive server load.
* **Before**:
  ```tsx
  export function useTvDashboard(factory: string, shift: string, enabled = true) {
    return useQuery({
      queryKey: ["tv-dashboard", factory, shift],
      queryFn: () => ...,
      refetchInterval: 3000,
      enabled: enabled && !!factory,
    });
  }
  ```
* **After**:
  ```tsx
  export function useTvDashboard(factory: string, shift: string, enabled = true) {
    return useQuery({
      queryKey: ["tv-dashboard", factory, shift],
      queryFn: () => ...,
      refetchInterval: 10_000, // 10s - stock data is measured in hours; no need to poll every 3s
      enabled: enabled && !!factory,
    });
  }
  ```
* **Impact**: Dramatically reduced network overhead and backend resource usage.

---

### 5. `src/routes/qr-privileges.tsx` (Unused Expressions / ESLint Error)
* **Issue**: Inside `toggleLeft` and `toggleRight`, ternary operators were used as statements without assignments, resulting in ESLint error `@typescript-eslint/no-unused-expressions`.
* **Adjustment**: Converted ternary expressions to standard, readable `if-else` blocks.
* **Before**:
  ```tsx
  const toggleLeft = (id: number) => {
    const s = new Set(selectedLeft);
    s.has(id) ? s.delete(id) : s.add(id);
    setSelectedLeft(s);
  };
  ```
* **After**:
  ```tsx
  const toggleLeft = (id: number) => {
    const s = new Set(selectedLeft);
    if (s.has(id)) {
      s.delete(id);
    } else {
      s.add(id);
    }
    setSelectedLeft(s);
  };
  ```

---

### 6. `src/routes/scan.tsx` (Unused ESLint Comment / Type Casting Warning)
* **Issue**: The `// eslint-disable-next-line @typescript-eslint/no-explicit-any` comment was placed on the wrong line, creating an "unused directive" warning and failing to suppress the warning for the actual `as any` cast on line 225.
* **Adjustment**: Moved the eslint-disable directive right above the line doing the cast.
* **Before**:
  ```tsx
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  {
    fps: 25,
    ...
  } as any,
  ```
* **After**:
  ```tsx
  {
    fps: 25,
    ...
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  ```

---

### 7. `src/components/dashboard/MasterDataManagement.tsx` (Typing Clean-up / ESLint Error)
* **Issue**: API methods (`useCreate`, `useUpdate`, `useDelete`) in the props interface was defined with the `mutate: any;` property, violating the `@typescript-eslint/no-explicit-any` rule.
* **Adjustment**: Replaced the `any` types with explicit, type-safe function signatures.
* **Before**:
  ```tsx
  api: {
    useGetAll: () => { data: MasterDataItem[] | undefined; isLoading: boolean };
    useCreate: () => { mutate: any; isPending: boolean };
    useUpdate: () => { mutate: any; isPending: boolean };
    useDelete: () => { mutate: any; isPending: boolean };
  };
  ```
* **After**:
  ```tsx
  api: {
    useGetAll: () => { data: MasterDataItem[] | undefined; isLoading: boolean };
    useCreate: () => { mutate: (name: string, options?: unknown) => void; isPending: boolean };
    useUpdate: () => {
      mutate: (data: { id: number; name: string }, options?: unknown) => void;
      isPending: boolean;
    };
    useDelete: () => { mutate: (id: number, options?: unknown) => void; isPending: boolean };
  };
  ```

---

## 🚀 Conclusion

The codebase is fully ready for deployment. The compilation pipeline is perfectly clean, formatting is unified, performance in heavy analytics sections is throttled to rational intervals, and all layout and logic glitches have been resolved.
`````

## File: public/ascii-signature.js
`````javascript
/* ascii-signature.js -- SHA256:4f944ac5a2cbaa80effa0eb4b24c9e19be33975505cec87b3e6c8b6c542f5f1d */
!function(){eval(atob("KGZ1bmN0aW9uKCl7CiAgY29uc29sZS5sb2coJycpOwogIGNvbnNvbGUubG9nKCcgXyAgIF8gX19fIF9fX18gIF9fX19fICAgX18gIF9fIF9fX19fICAnKTsKICBjb25zb2xlLmxvZygnfCB8IHwgfF8gX3wgIF8gXHwgX19fX3wgfCAgXC8gIHwgX19fX3wnKTsKICBjb25zb2xlLmxvZygnfCB8X3wgfHwgfHwgfF8pIHwgIF98ICAgfCB8XC98IHwgIF98ICAnKTsKICBjb25zb2xlLmxvZygnfCAgXyAgfHwgfHwgIF8gPCB8IHxfX18gfCB8ICB8IHwgfF9fXyAnKTsKICBjb25zb2xlLmxvZygnfF98IHxffF9fX3xffCBcX1x8X19fX198fF98ICB8X3xfX19fX3wnKTsKICBjb25zb2xlLmxvZygnJyk7CiAgY29uc29sZS5sb2coJ1sgS2x5cm9CeXRlIHYzLjEgXSBDaGVja2luZyB0aGUgU2VjdXJpdHkga2V5cycpOwogIGNvbnNvbGUubG9nKCcrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsnKTsKICBjb25zb2xlLmxvZygnfCAgSElSRSBNRSBIRUhFSEUgLS0gRnVsbCBTdGFjayBEZXZlbG9wZXIgICAgICAgICAgICAgICcpOwogIGNvbnNvbGUubG9nKCd8ICBDb250YWN0OiBkYXByb290MEBnbWFpbC5jb20gICAgICAgICAgICAgICAgICAgICAgICcpOwogIGNvbnNvbGUubG9nKCd8ICBTdGFjayAgOiBSZWFjdCwgTm9kZS5qcywgTXlTUUwsIFR5cGVTY3JpcHQgICAgICAgICcpOwogIGNvbnNvbGUubG9nKCd8ICBXQVJOICA6ICAgdGhpcyBjb250ZW50IGRvZXMgbm90IGVmZmVjdCB0aGUgYXBwcyBpdCBhY3QgbGlrZSBzZWN1cml0eSBmcmFtZXdvcmtzICAgICAnKTsKICBjb25zb2xlLmxvZygnKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rJyk7CiAgY29uc29sZS5sb2coJ1sgQUNDRVNTIEdSQU5URUQgXSAtLSBZb3UgZm91bmQgdGhlIHNpZ25hbC4nKTsKICBjb25zb2xlLmxvZygnJyk7Cn0pKCk7"))}();
`````

## File: server/db.ts
`````typescript
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost", //deploy: #localhost (change all creds based on environment)
  port: Number(process.env.DB_PORT) || 3306, //deploy: #port
  user: process.env.DB_USER || "root", //deploy: #user
  password: process.env.DB_PASSWORD || "", //deploy: #password
  database: process.env.DB_NAME || "pixel_scan_dashboard", //deploy: #database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
`````

## File: server/lib/stockAnalyticsService.ts
`````typescript
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import {
  computeStockAnalytics,
  formatJamUpdateTime,
} from "./stockAnalyticsCalc.js";

export type MasterPartRow = {
  part_number: string;
  part_name: string;
  model?: string;
  machine?: string | null;
};

/** Resolve mesin factory for a machine code (e.g. MC#2). */
export async function getMachineFactory(
  machineCode: string
): Promise<string> {
  if (!machineCode?.trim()) return "";
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT factory FROM mesin WHERE UPPER(machine_code) = UPPER(?) LIMIT 1",
    [machineCode.trim()]
  );
  return (rows[0]?.factory as string) ?? "";
}

/** Persist computed columns for one stock_analytics row. */
export async function persistComputedFields(
  row: RowDataPacket
): Promise<void> {
  const computed = computeStockAnalytics({
    qtyPerDay: Number(row.qty_per_day),
    stockActual: Number(row.stock_actual),
    shikake: Number(row.shikake),
    minPlaceholder: Number(row.min_val),
  });

  await pool.query(
    `UPDATE stock_analytics SET
      stok_jam = ?, judge = ?, qty_per_hour = ?, max_val = ?
     WHERE id = ?`,
    [
      computed.stockJam,
      computed.judge,
      computed.qtyPerHour,
      computed.max,
      row.id,
    ]
  );
}

/** Upsert stock_analytics when master part is saved with a machine assigned. */
export async function upsertStockAnalyticsFromMasterPart(
  part: MasterPartRow
): Promise<void> {
  const machine = part.machine?.trim();
  if (!machine) return;

  const partNumber = part.part_number.trim().toUpperCase();
  const partName = part.part_name.trim().toUpperCase();
  const model = (part.model ?? "").trim().toUpperCase();
  const factory = await getMachineFactory(machine);

  const [existing] = await pool.query<RowDataPacket[]>(
    `SELECT id FROM stock_analytics
     WHERE UPPER(part_number) = ? AND UPPER(machine) = ?`,
    [partNumber, machine.toUpperCase()]
  );

  if (existing.length === 0) {
    await pool.query<ResultSetHeader>(
      `INSERT INTO stock_analytics
        (machine, model, part_number, part_name, qty_per_day, stock_actual, stok_jam, judge,
         problem, shikake, qty_per_hour, min_val, max_val, jam_update, pic, factory)
       VALUES (?, ?, ?, ?, 0, 0, 0, 'O', '', 0, 0, 0, 0, '0:00:00', 'unknown', ?)`,
      [machine.toUpperCase(), model, partNumber, partName, factory]
    );
    return;
  }

  await pool.query(
    `UPDATE stock_analytics SET
      machine = ?, model = ?, part_name = ?, factory = ?
     WHERE id = ?`,
    [machine.toUpperCase(), model, partName, factory, existing[0].id]
  );

  const [updated] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM stock_analytics WHERE id = ?",
    [existing[0].id]
  );
  if (updated[0]) await persistComputedFields(updated[0]);
}

/** Update min_val by part_number and recalculate max. */
export async function updateMinValByPartNumber(
  partNumber: string,
  minVal: number
): Promise<void> {
  const pn = partNumber.trim().toUpperCase();
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM stock_analytics WHERE UPPER(part_number) = ?",
    [pn]
  );
  for (const row of rows) {
    await pool.query("UPDATE stock_analytics SET min_val = ? WHERE id = ?", [
      minVal,
      row.id,
    ]);
    const [fresh] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM stock_analytics WHERE id = ?",
      [row.id]
    );
    if (fresh[0]) await persistComputedFields(fresh[0]);
  }
}

/** Update qty_per_day by part_number and recalculate. */
export async function updateQtyPerDayByPartNumber(
  partNumber: string,
  qtyPerDay: number
): Promise<void> {
  const pn = partNumber.trim().toUpperCase();
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM stock_analytics WHERE UPPER(part_number) = ?",
    [pn]
  );
  for (const row of rows) {
    await pool.query(
      "UPDATE stock_analytics SET qty_per_day = ? WHERE id = ?",
      [qtyPerDay, row.id]
    );
    const [fresh] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM stock_analytics WHERE id = ?",
      [row.id]
    );
    if (fresh[0]) await persistComputedFields(fresh[0]);
  }
}

/** Synchronize all settings for a part from shikake_settings to stock_analytics. */
export async function syncShikakeSettingsToAnalytics(
  partNumber: string
): Promise<void> {
  const pn = partNumber.trim().toUpperCase();
  const [settings] = await pool.query<RowDataPacket[]>(
    `SELECT s.shikake_value, s.min_val, s.qty_per_day
     FROM shikake_settings s
     JOIN master_parts mp ON mp.id = s.master_part_id
     WHERE UPPER(mp.part_number) = ?`,
    [pn]
  );

  if (settings.length > 0) {
    const { shikake_value, min_val, qty_per_day } = settings[0];
    await pool.query(
      `UPDATE stock_analytics SET
        shikake = ?,
        min_val = ?,
        qty_per_day = ?
       WHERE UPPER(part_number) = ?`,
      [shikake_value, min_val, qty_per_day, pn]
    );

    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM stock_analytics WHERE UPPER(part_number) = ?",
      [pn]
    );
    for (const row of rows) {
      await persistComputedFields(row);
    }
  }
}

/** On QR scan: sync stock_actual, jam_update, pic; recompute formulas. */
export async function syncStockAnalyticsOnScan(
  partName: string,
  scannerUsername: string,
  batchId?: string
): Promise<void> {
  const normalizedName = partName.trim().toUpperCase();
  let stockActual: number | null = null;

  if (batchId) {
    const [stockRows] = await pool.query<RowDataPacket[]>(
      "SELECT current_stock FROM stock WHERE batch_id = ? LIMIT 1",
      [batchId]
    );
    if (stockRows.length) {
      stockActual = Number(stockRows[0].current_stock);
    }
  }

  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM stock_analytics
     WHERE UPPER(part_name) = ?`,
    [normalizedName]
  );

  if (!rows.length) {
    const [mpRows] = await pool.query<RowDataPacket[]>(
      `SELECT part_number, part_name, model, machine FROM master_parts
       WHERE UPPER(part_name) = ? AND machine IS NOT NULL AND machine != ''`,
      [normalizedName]
    );
    if (mpRows[0]?.machine) {
      await upsertStockAnalyticsFromMasterPart({
        part_number: mpRows[0].part_number as string,
        part_name: mpRows[0].part_name as string,
        model: mpRows[0].model as string,
        machine: mpRows[0].machine as string,
      });
      const [again] = await pool.query<RowDataPacket[]>(
        `SELECT * FROM stock_analytics WHERE UPPER(part_name) = ?`,
        [normalizedName]
      );
      rows.push(...again);
    }
  }

  const jamUpdate = formatJamUpdateTime();
  const pic = scannerUsername?.trim() || "unknown";

  for (const row of rows) {
    if (stockActual !== null) {
      await pool.query(
        "UPDATE stock_analytics SET stock_actual = ? WHERE id = ?",
        [stockActual, row.id]
      );
    }
    await pool.query(
      "UPDATE stock_analytics SET jam_update = ?, pic = ? WHERE id = ?",
      [jamUpdate, pic, row.id]
    );
    const [fresh] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM stock_analytics WHERE id = ?",
      [row.id]
    );
    if (fresh[0]) await persistComputedFields(fresh[0]);
  }
}
`````

## File: server/middleware/authMiddleware.ts
`````typescript
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "pixel-scan-secret-key-2026";

// Extend Express Request type to include the decoded user info
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  // We want to skip auth for some public routes
  const publicPaths = [
    "/api/auth/login",
    "/api/devices/station-login",
    "/api/health",
    "/api/qr/info" // Need this for public hardware scanning
  ];

  if (publicPaths.some(path => req.path.startsWith(path))) {
    return next();
  }

  // Expect token in the form: "Bearer <token>"
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, error: "Unauthorized: Token missing or invalid format" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach decoded payload to request
    next();
  } catch (err) {
    return res.status(403).json({ success: false, error: "Forbidden: Invalid or expired token" });
  }
}
`````

## File: server/middleware/internalKeyMiddleware.ts
`````typescript
import { Request, Response, NextFunction } from "express";

/**
 * Internal API Key Middleware
 * ─────────────────────────────────────────────────────────────────────────────
 * Protects /api/privileges/* endpoints from external access.
 *
 * Usage: All requests must include the header:
 *   x-internal-key: <INTERNAL_API_KEY>
 *
 * If the key is missing or incorrect → 401 Unauthorized.
 * No data is ever leaked in the rejection response.
 *
 * Security rationale:
 *  - These endpoints are only called by the admin dashboard (already JWT-protected).
 *  - Station clients (/station/dashboard) NEVER call these endpoints directly.
 *    Privilege validation for stations happens server-side in /api/qr/process.
 *  - This dual-layer protection (JWT user auth + internal key) prevents:
 *      1. Unauthenticated access
 *      2. Authenticated users calling endpoints via curl/Postman without the key
 */
const INTERNAL_KEY = process.env.INTERNAL_API_KEY || "";

export function requireInternalKey(req: Request, res: Response, next: NextFunction) {
  if (!INTERNAL_KEY) {
    // Fail safe: if key is not configured, deny all requests
    return res.status(503).json({
      success: false,
      error: "Service temporarily unavailable",
    });
  }

  const providedKey = req.headers["x-internal-key"];

  if (!providedKey || providedKey !== INTERNAL_KEY) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized",
    });
  }

  next();
}
`````

## File: server/migrate-big-update.ts
`````typescript
/**
 * Additive migration for BIG UPDATE spec.
 * Run: npx tsx server/migrate-big-update.ts
 */
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function columnExists(
  conn: mysql.Connection,
  table: string,
  column: string
): Promise<boolean> {
  const [rows] = await conn.query<mysql.RowDataPacket[]>(
    `SELECT COUNT(*) AS cnt FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [table, column]
  );
  return (rows[0]?.cnt as number) > 0;
}

async function tableExists(
  conn: mysql.Connection,
  table: string
): Promise<boolean> {
  const [rows] = await conn.query<mysql.RowDataPacket[]>(
    `SELECT COUNT(*) AS cnt FROM information_schema.TABLES
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`,
    [table]
  );
  return (rows[0]?.cnt as number) > 0;
}

async function migrate() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pixel_scan_dashboard",
  });

  console.log("🔄 Running BIG UPDATE migration...\n");

  // ── users table (create if missing) + TV fields ─────────────────────────
  if (!(await tableExists(conn, "users"))) {
    await conn.query(`
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL UNIQUE,
        nik VARCHAR(50) DEFAULT '',
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'operator',
        status ENUM('active', 'inactive') DEFAULT 'active',
        tv_factory VARCHAR(255) DEFAULT '',
        tv_shift ENUM('A', 'B') DEFAULT 'A',
        tv_theme VARCHAR(20) DEFAULT 'default',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Created users table");
  } else {
    if (!(await columnExists(conn, "users", "tv_factory"))) {
      await conn.query(
        `ALTER TABLE users ADD COLUMN tv_factory VARCHAR(255) DEFAULT ''`
      );
      console.log("✅ Added users.tv_factory");
    }
    if (!(await columnExists(conn, "users", "tv_shift"))) {
      await conn.query(
        `ALTER TABLE users ADD COLUMN tv_shift ENUM('A', 'B') DEFAULT 'A'`
      );
      console.log("✅ Added users.tv_shift");
    }
    if (!(await columnExists(conn, "users", "tv_theme"))) {
      await conn.query(
        `ALTER TABLE users ADD COLUMN tv_theme VARCHAR(20) DEFAULT 'default'`
      );
      console.log("✅ Added users.tv_theme");
    }
  }

  await conn.query(`UPDATE users SET role = 'usertv' WHERE role = 'viewer'`);
  console.log("✅ Migrated role viewer → usertv");

  // ── mesin table + factory column ────────────────────────────────────────
  if (!(await tableExists(conn, "mesin"))) {
    await conn.query(`
      CREATE TABLE mesin (
        id INT AUTO_INCREMENT PRIMARY KEY,
        machine_code VARCHAR(50) NOT NULL UNIQUE,
        machine_name VARCHAR(255) NOT NULL,
        description TEXT,
        factory VARCHAR(255) DEFAULT '',
        status ENUM('active', 'inactive') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Created mesin table");
  } else if (!(await columnExists(conn, "mesin", "factory"))) {
    await conn.query(
      `ALTER TABLE mesin ADD COLUMN factory VARCHAR(255) DEFAULT ''`
    );
    console.log("✅ Added mesin.factory");
  }

  // ── stock_analytics (spec §6) ───────────────────────────────────────────
  if (!(await tableExists(conn, "stock_analytics"))) {
    await conn.query(`
      CREATE TABLE stock_analytics (
        id INT AUTO_INCREMENT PRIMARY KEY,
        machine VARCHAR(100) NOT NULL,
        model VARCHAR(255) DEFAULT '',
        part_number VARCHAR(100) DEFAULT '',
        part_name VARCHAR(255) DEFAULT '',
        qty_per_day DECIMAL(12,2) DEFAULT 0,
        stock_actual DECIMAL(12,2) DEFAULT 0,
        stok_jam DECIMAL(12,2) DEFAULT 0,
        judge VARCHAR(20) DEFAULT '',
        problem VARCHAR(255) DEFAULT '',
        shikake DECIMAL(12,4) DEFAULT 1,
        qty_per_hour DECIMAL(12,4) DEFAULT 0,
        min_val DECIMAL(12,2) DEFAULT 0,
        max_val DECIMAL(12,2) DEFAULT 0,
        jam_update TIMESTAMP NULL,
        pic VARCHAR(100) DEFAULT '',
        keterangan TEXT,
        factory VARCHAR(255) DEFAULT '',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_machine (machine),
        INDEX idx_factory (factory)
      )
    `);
    console.log("✅ Created stock_analytics table");
  }

  // ── shikake settings per master part ────────────────────────────────────
  if (!(await tableExists(conn, "shikake_settings"))) {
    await conn.query(`
      CREATE TABLE shikake_settings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        master_part_id INT NOT NULL,
        shikake_value DECIMAL(12,4) NOT NULL DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY uk_master_part (master_part_id)
      )
    `);
    console.log("✅ Created shikake_settings table");
  }

  console.log("\n🎉 BIG UPDATE migration selesai!");
  await conn.end();
  process.exit(0);
}

migrate().catch((err) => {
  console.error("❌ Migration gagal:", err);
  process.exit(1);
});
`````

## File: server/migrate-devices.ts
`````typescript
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

/**
 * Safe migration: adds new columns to `devices` table if they don't already exist.
 * Existing rows and other tables are completely untouched.
 */
async function migrateDevices() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pixel_scan_dashboard",
  });

  console.log("🔄 Running devices table migration...\n");

  // Helper: add column if it doesn't exist
  async function addColumnIfMissing(table: string, column: string, definition: string) {
    const [cols] = await conn.query(
      `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS 
       WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
      [table, column]
    ) as any;

    if (cols.length === 0) {
      await conn.query(`ALTER TABLE \`${table}\` ADD COLUMN ${column} ${definition}`);
      console.log(`  ✅ Added column: ${table}.${column}`);
    } else {
      console.log(`  ⏭  Column already exists: ${table}.${column}`);
    }
  }

  await addColumnIfMissing("devices", "device_code", "VARCHAR(50) NULL UNIQUE AFTER id");
  await addColumnIfMissing("devices", "device_role", "ENUM('IN', 'OUT') NOT NULL DEFAULT 'IN' AFTER location");
  await addColumnIfMissing("devices", "pin_hash", "VARCHAR(64) NULL AFTER device_role");
  await addColumnIfMissing("devices", "active_status", "ENUM('active', 'inactive') NOT NULL DEFAULT 'active' AFTER pin_hash");

  console.log("\n🎉 Devices migration selesai!");
  await conn.end();
  process.exit(0);
}

migrateDevices().catch((err) => {
  console.error("❌ Devices migration gagal:", err);
  process.exit(1);
});
`````

## File: server/migrate-scan-records-partstats.ts
`````typescript
import pool from "./db.js";

async function run() {
  try {
    console.log("Adding partstats column to scan_records...");
    await pool.query(`
      ALTER TABLE scan_records
      ADD COLUMN partstats VARCHAR(20) DEFAULT 'reguler'
    `);
    console.log("Migration successful!");
    process.exit(0);
  } catch (err: any) {
    if (err.code === "ER_DUP_FIELDNAME") {
      console.log("Column partstats already exists. Skipping.");
      process.exit(0);
    }
    console.error("Migration failed:", err);
    process.exit(1);
  }
}

run();
`````

## File: server/migrate-v2.ts
`````typescript
/**
 * V2 additive migration: master_parts.machine, stock_analytics unique key.
 * Run: npx tsx server/migrate-v2.ts
 */
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function columnExists(
  conn: mysql.Connection,
  table: string,
  column: string
): Promise<boolean> {
  const [rows] = await conn.query<mysql.RowDataPacket[]>(
    `SELECT COUNT(*) AS cnt FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [table, column]
  );
  return (rows[0]?.cnt as number) > 0;
}

async function indexExists(
  conn: mysql.Connection,
  table: string,
  indexName: string
): Promise<boolean> {
  const [rows] = await conn.query<mysql.RowDataPacket[]>(
    `SELECT COUNT(*) AS cnt FROM information_schema.STATISTICS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND INDEX_NAME = ?`,
    [table, indexName]
  );
  return (rows[0]?.cnt as number) > 0;
}

async function migrate() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pixel_scan_dashboard",
  });

  console.log("🔄 Running V2 migration...\n");

  if (!(await columnExists(conn, "master_parts", "machine"))) {
    await conn.query(
      `ALTER TABLE master_parts ADD COLUMN machine VARCHAR(100) NULL DEFAULT NULL`
    );
    console.log("✅ Added master_parts.machine");
  }

  if (await columnExists(conn, "stock_analytics", "jam_update")) {
    const [col] = await conn.query<mysql.RowDataPacket[]>(
      `SELECT DATA_TYPE FROM information_schema.COLUMNS
       WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'stock_analytics' AND COLUMN_NAME = 'jam_update'`
    );
    if (col[0]?.DATA_TYPE === "timestamp" || col[0]?.DATA_TYPE === "datetime") {
      await conn.query(
        `ALTER TABLE stock_analytics MODIFY COLUMN jam_update VARCHAR(12) DEFAULT '0:00:00'`
      );
      console.log("✅ Changed stock_analytics.jam_update to VARCHAR (HH:MM:SS)");
    }
  }

  if (!(await indexExists(conn, "stock_analytics", "uk_part_machine"))) {
    await conn.query(
      `ALTER TABLE stock_analytics ADD UNIQUE KEY uk_part_machine (part_number, machine)`
    );
    console.log("✅ Added unique key on stock_analytics(part_number, machine)");
  }

  if (!(await columnExists(conn, "shikake_settings", "min_val"))) {
    await conn.query(
      `ALTER TABLE shikake_settings ADD COLUMN min_val DECIMAL(12,2) NOT NULL DEFAULT 0`
    );
    console.log("✅ Added shikake_settings.min_val");
  }

  console.log("\n🎉 V2 migration selesai!");
  await conn.end();
  process.exit(0);
}

migrate().catch((err) => {
  console.error("❌ V2 migration gagal:", err);
  process.exit(1);
});
`````

## File: server/migrate-v3-qty-per-day.ts
`````typescript
/**
 * Additive migration: Add qty_per_day to shikake_settings.
 * Run: npx tsx server/migrate-v3-qty-per-day.ts
 */
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function columnExists(
  conn: mysql.Connection,
  table: string,
  column: string
): Promise<boolean> {
  const [rows] = await conn.query<mysql.RowDataPacket[]>(
    `SELECT COUNT(*) AS cnt FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [table, column]
  );
  return (rows[0]?.cnt as number) > 0;
}

async function migrate() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pixel_scan_dashboard",
  });

  console.log("🔄 Running V3 migration (qty_per_day in shikake_settings)...\n");

  if (!(await columnExists(conn, "shikake_settings", "qty_per_day"))) {
    await conn.query(
      `ALTER TABLE shikake_settings ADD COLUMN qty_per_day DECIMAL(12,2) NOT NULL DEFAULT 0`
    );
    console.log("✅ Added shikake_settings.qty_per_day");
  } else {
    console.log("ℹ️ shikake_settings.qty_per_day already exists");
  }

  console.log("\n🎉 V3 migration selesai!");
  await conn.end();
  process.exit(0);
}

migrate().catch((err) => {
  console.error("❌ V3 migration gagal:", err);
  process.exit(1);
});
`````

## File: server/migrate-v3.ts
`````typescript
/**
 * V3 additive migration: qr_aliases table for fallback system.
 * Run: npx tsx server/migrate-v3.ts
 */
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function tableExists(
  conn: mysql.Connection,
  table: string
): Promise<boolean> {
  const [rows] = await conn.query<mysql.RowDataPacket[]>(
    `SELECT COUNT(*) AS cnt FROM information_schema.TABLES
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`,
    [table]
  );
  return (rows[0]?.cnt as number) > 0;
}

async function migrate() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pixel_scan_dashboard",
  });

  console.log("🔄 Running V3 migration...\n");

  if (!(await tableExists(conn, "qr_aliases"))) {
    await conn.query(`
      CREATE TABLE qr_aliases (
        old_short_token VARCHAR(50) PRIMARY KEY,
        new_short_token VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_new_short_token (new_short_token)
      )
    `);
    console.log("✅ Created qr_aliases table");
  } else {
    console.log("✅ qr_aliases table already exists");
  }

  console.log("\n🎉 V3 migration selesai!");
  await conn.end();
  process.exit(0);
}

migrate().catch((err) => {
  console.error("❌ V3 migration gagal:", err);
  process.exit(1);
});
`````

## File: server/migrate-v4-short-token.ts
`````typescript
/**
 * Additive migration: adds short_token column to qr_codes.
 * Run once: npx tsx server/migrate-v4-short-token.ts
 */
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function columnExists(
  conn: mysql.Connection,
  table: string,
  column: string
): Promise<boolean> {
  const [rows] = await conn.query<mysql.RowDataPacket[]>(
    `SELECT COUNT(*) AS cnt FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [table, column]
  );
  return (rows[0]?.cnt as number) > 0;
}

async function migrate() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "outindb",
  });

  console.log("🔄 Running v4 short-token migration...\n");

  // Add short_token column if it doesn't exist
  if (!(await columnExists(conn, "qr_codes", "short_token"))) {
    await conn.query(
      `ALTER TABLE qr_codes ADD COLUMN short_token VARCHAR(16) NULL AFTER token`
    );
    console.log("✅ Added qr_codes.short_token column");

    // Add a unique index for fast lookup
    await conn.query(
      `ALTER TABLE qr_codes ADD UNIQUE INDEX idx_short_token (short_token)`
    );
    console.log("✅ Added unique index on qr_codes.short_token");
  } else {
    console.log("ℹ️  qr_codes.short_token already exists - skipping");
  }

  console.log("\n🎉 v4 migration selesai!");
  await conn.end();
  process.exit(0);
}

migrate().catch((err) => {
  console.error("❌ Migration gagal:", err);
  process.exit(1);
});
`````

## File: server/migrate-v4.ts
`````typescript
/**
 * V4 additive migration: part_id column on qr_codes for stable edit-mode lookup.
 * Run: npx tsx server/migrate-v4.ts
 */
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function columnExists(
  conn: mysql.Connection,
  table: string,
  column: string
): Promise<boolean> {
  const [rows] = await conn.query<mysql.RowDataPacket[]>(
    `SELECT COUNT(*) AS cnt FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [table, column]
  );
  return (rows[0]?.cnt as number) > 0;
}

async function migrate() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pixel_scan_dashboard",
  });

  console.log("🔄 Running V4 migration...\n");

  // 1. Add part_id column to qr_codes if missing
  if (!(await columnExists(conn, "qr_codes", "part_id"))) {
    await conn.query(
      `ALTER TABLE qr_codes ADD COLUMN part_id INT NULL DEFAULT NULL`
    );
    console.log("✅ Added qr_codes.part_id");

    // 2. Backfill part_id from master_parts by matching part_name (case-insensitive, one-time)
    await conn.query(`
      UPDATE qr_codes q
      JOIN master_parts mp ON LOWER(TRIM(q.part_name)) = LOWER(TRIM(mp.part_name))
      SET q.part_id = mp.id
      WHERE q.part_id IS NULL
    `);
    console.log("✅ Backfilled qr_codes.part_id from master_parts");
  } else {
    console.log("✅ qr_codes.part_id already exists");
  }

  // 3. Add index for fast lookup by part_id
  const [idxRows] = await conn.query<mysql.RowDataPacket[]>(
    `SELECT COUNT(*) AS cnt FROM information_schema.STATISTICS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'qr_codes' AND INDEX_NAME = 'idx_qr_part_id'`
  );
  if ((idxRows[0]?.cnt as number) === 0) {
    await conn.query(`ALTER TABLE qr_codes ADD INDEX idx_qr_part_id (part_id)`);
    console.log("✅ Added index idx_qr_part_id on qr_codes");
  }

  console.log("\n🎉 V4 migration selesai!");
  await conn.end();
  process.exit(0);
}

migrate().catch((err) => {
  console.error("❌ V4 migration gagal:", err);
  process.exit(1);
});
`````

## File: server/migrate-v5.ts
`````typescript
/**
 * V5 additive migration: machine_origin column on qr_codes.
 * Needed so the field survives as a proper column (not buried in JWT)
 * and is returned by SELECT * without decoding tokens.
 * Run: npx tsx server/migrate-v5.ts
 */
import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function columnExists(
  conn: mysql.Connection,
  table: string,
  column: string
): Promise<boolean> {
  const [rows] = await conn.query<mysql.RowDataPacket[]>(
    `SELECT COUNT(*) AS cnt FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [table, column]
  );
  return (rows[0]?.cnt as number) > 0;
}

async function migrate() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pixel_scan_dashboard",
  });

  const SECRET_KEY = process.env.JWT_SECRET || "pixel-scan-secret-key-2026";

  console.log("🔄 Running V5 migration...\n");

  // 1. Add machine_origin column if missing
  if (!(await columnExists(conn, "qr_codes", "machine_origin"))) {
    await conn.query(
      `ALTER TABLE qr_codes ADD COLUMN machine_origin VARCHAR(255) NOT NULL DEFAULT ''`
    );
    console.log("✅ Added qr_codes.machine_origin");

    // 2. Backfill from JWT tokens already in the table
    const [rows] = await conn.query<mysql.RowDataPacket[]>(
      "SELECT id, token FROM qr_codes WHERE token IS NOT NULL AND token != ''"
    );

    let backfilled = 0;
    for (const row of rows) {
      try {
        const decoded = jwt.verify(row.token, SECRET_KEY) as {
          machineOrigin?: string;
        };
        const mo = decoded.machineOrigin ?? "";
        if (mo) {
          await conn.query(
            "UPDATE qr_codes SET machine_origin = ? WHERE id = ?",
            [mo, row.id]
          );
          backfilled++;
        }
      } catch {
        // Invalid/expired token - leave machine_origin as ''
      }
    }
    console.log(`✅ Backfilled machine_origin for ${backfilled} rows`);
  } else {
    console.log("✅ qr_codes.machine_origin already exists");
  }

  console.log("\n🎉 V5 migration selesai!");
  await conn.end();
  process.exit(0);
}

migrate().catch((err) => {
  console.error("❌ V5 migration gagal:", err);
  process.exit(1);
});
`````

## File: server/migrate.ts
`````typescript
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function migrate() {
  // Connect without database first to create it if needed
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  });

  const dbName = process.env.DB_NAME || "pixel_scan_dashboard";
  await conn.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
  await conn.query(`USE \`${dbName}\``);

  console.log(`✅ Database "${dbName}" Siap`);

  // Create tables
  await conn.query(`
    CREATE TABLE IF NOT EXISTS qr_codes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      qr_id VARCHAR(20) NOT NULL UNIQUE,
      part_name VARCHAR(255) NOT NULL,
      factory VARCHAR(255) NOT NULL,
      material VARCHAR(255) NOT NULL,
      qr_value VARCHAR(255) NOT NULL,
      units INT NOT NULL DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
  console.log("✅ Table qr_codes di buat");

  await conn.query(`
    CREATE TABLE IF NOT EXISTS stock (
      id INT AUTO_INCREMENT PRIMARY KEY,
      part_name VARCHAR(255) NOT NULL,
      factory VARCHAR(255) NOT NULL,
      material VARCHAR(255) NOT NULL,
      units INT NOT NULL DEFAULT 0,
      trend ENUM('up', 'down') DEFAULT 'up',
      delta DECIMAL(5,2) DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
  console.log("✅ Table stock di buat");

  await conn.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      task_id VARCHAR(20) NOT NULL UNIQUE,
      title VARCHAR(255) NOT NULL,
      type ENUM('Scan In', 'Scan Out', 'QR Created', 'Audit') NOT NULL,
      status ENUM('completed', 'pending', 'failed') DEFAULT 'pending',
      user VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
  console.log("✅ Table tasks di buat");

  await conn.query(`
    CREATE TABLE IF NOT EXISTS devices (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      model VARCHAR(255) NOT NULL,
      type ENUM('phone', 'tablet') DEFAULT 'phone',
      status ENUM('online', 'offline') DEFAULT 'offline',
      battery INT DEFAULT 0,
      location VARCHAR(255) DEFAULT '',
      last_sync TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
  console.log("✅ Table devices di buat");

  await conn.query(`
    CREATE TABLE IF NOT EXISTS scan_records (
      id INT AUTO_INCREMENT PRIMARY KEY,
      qr_id VARCHAR(20) NOT NULL,
      label VARCHAR(255) NOT NULL,
      factory VARCHAR(255) NOT NULL,
      scanned_by VARCHAR(100) DEFAULT 'System',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log("✅ Table scan_records di buat");

  // Seed data
  console.log("\n📦 Seeding data...");

  // Seed QR codes
  const [existingQr] = await conn.query("SELECT COUNT(*) AS cnt FROM qr_codes") as any;
  if (existingQr[0].cnt === 0) {
    await conn.query(`
      INSERT INTO qr_codes (qr_id, part_name, factory, material, qr_value, units, created_at) VALUES
      ('QR-1042', 'Resin Cap', 'Factory Seizo', 'Plastic Resin', '120', 120, '2026-04-17 09:24:00'),
      ('QR-1041', 'Bracket M-22', 'Factory Aichi', 'Aluminum Sheet', '60', 60, '2026-04-16 08:52:00'),
      ('QR-1040', 'Coil Spring', 'Factory Karawang', 'Copper Coil', '200', 200, '2026-04-15 10:00:00'),
      ('QR-1039', 'Hinge B-04', 'Factory Aichi', 'Steel Plate', '40', 40, '2026-04-14 14:30:00'),
      ('QR-1038', 'Gasket R-9', 'Factory Karawang', 'Plastic Resin', '90', 90, '2026-04-13 11:15:00'),
      ('QR-1037', 'Lorem Ipsum A', 'Factory Seizo', 'Steel Plate', '10', 10, '2026-04-12 16:00:00'),
      ('QR-1036', 'Plate X-11', 'Factory Seizo', 'Steel Plate', '320', 320, '2026-04-11 09:00:00'),
      ('QR-1035', 'Clip Z-3', 'Factory Aichi', 'Aluminum Sheet', '150', 150, '2026-04-10 13:45:00')
    `);
    console.log("  ✅ QR codes seeded (8 records)");
  }

  // Seed stock
  const [existingStock] = await conn.query("SELECT COUNT(*) AS cnt FROM stock") as any;
  if (existingStock[0].cnt === 0) {
    await conn.query(`
      INSERT INTO stock (part_name, factory, material, units, trend, delta) VALUES
      ('Lorem Ipsum A', 'Factory Seizo', 'Steel Plate', 1240, 'up', 12),
      ('Bracket M-22', 'Factory Aichi', 'Aluminum Sheet', 860, 'down', 4),
      ('Coil Spring', 'Factory Karawang', 'Copper Coil', 432, 'up', 6),
      ('Resin Cap', 'Factory Seizo', 'Plastic Resin', 2120, 'up', 18),
      ('Hinge B-04', 'Factory Aichi', 'Steel Plate', 78, 'down', 22),
      ('Gasket R-9', 'Factory Karawang', 'Plastic Resin', 540, 'up', 3)
    `);
    console.log("  ✅ Stock seeded (6 records)");
  }

  // Seed tasks
  const [existingTasks] = await conn.query("SELECT COUNT(*) AS cnt FROM tasks") as any;
  if (existingTasks[0].cnt === 0) {
    await conn.query(`
      INSERT INTO tasks (task_id, title, type, status, user, created_at) VALUES
      ('T-1042', 'Inbound batch SZ-2026-04-17', 'Scan In', 'completed', 'Hana', '2026-04-17 09:24:00'),
      ('T-1041', 'QR for Resin Cap (×120)', 'QR Created', 'completed', 'Bima', '2026-04-17 08:52:00'),
      ('T-1040', 'Outbound to Aichi line 3', 'Scan Out', 'pending', 'Rama', '2026-04-17 08:10:00'),
      ('T-1039', 'Quarterly audit Karawang', 'Audit', 'completed', 'Sari', '2026-04-16 17:45:00'),
      ('T-1038', 'QR for Bracket M-22 (×60)', 'QR Created', 'failed', 'Bima', '2026-04-16 16:02:00'),
      ('T-1037', 'Inbound batch AC-2026-04-16', 'Scan In', 'completed', 'Hana', '2026-04-16 11:30:00')
    `);
    console.log("  ✅ Tasks seeded (6 records)");
  }

  // Seed devices
  const [existingDevices] = await conn.query("SELECT COUNT(*) AS cnt FROM devices") as any;
  if (existingDevices[0].cnt === 0) {
    await conn.query(`
      INSERT INTO devices (name, model, type, status, battery, location, last_sync) VALUES
      ('Scanner A-01', 'Pixel 8', 'phone', 'online', 86, 'Factory Seizo · Line 1', NOW()),
      ('Scanner A-02', 'Pixel 8', 'phone', 'online', 42, 'Factory Seizo · Line 2', DATE_SUB(NOW(), INTERVAL 2 MINUTE)),
      ('Audit Tab T-01', 'Pixel Tablet', 'tablet', 'online', 67, 'Factory Aichi · QC', DATE_SUB(NOW(), INTERVAL 5 MINUTE)),
      ('Scanner B-04', 'Pixel 7a', 'phone', 'offline', 12, 'Factory Karawang · Dock', DATE_SUB(NOW(), INTERVAL 3 HOUR)),
      ('Audit Tab T-02', 'Pixel Tablet', 'tablet', 'offline', 0, 'Factory Aichi · Storage', DATE_SUB(NOW(), INTERVAL 1 DAY))
    `);
    console.log("  ✅ Devices seeded (5 records)");
  }

  // Seed scan records
  const [existingScans] = await conn.query("SELECT COUNT(*) AS cnt FROM scan_records") as any;
  if (existingScans[0].cnt === 0) {
    await conn.query(`
      INSERT INTO scan_records (qr_id, label, factory, scanned_by, created_at) VALUES
      ('QR-1042', 'Resin Cap', 'Factory Seizo', 'Hana', DATE_SUB(NOW(), INTERVAL 2 MINUTE)),
      ('QR-1041', 'Bracket M-22', 'Factory Aichi', 'Bima', DATE_SUB(NOW(), INTERVAL 14 MINUTE)),
      ('QR-1040', 'Coil Spring', 'Factory Karawang', 'Rama', DATE_SUB(NOW(), INTERVAL 1 HOUR))
    `);
    console.log("  ✅ Scan records seeded (3 records)");
  }

  console.log("\n🎉 Migration selesai!");
  await conn.end();
  process.exit(0);
}

migrate().catch((err) => {
  console.error("❌ Migration gagal:", err);
  process.exit(1);
});
`````

## File: server/routes/auth.ts
`````typescript
import { Router } from "express";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import pool from "../db.js";
import type { RowDataPacket } from "mysql2";

const router = Router();
const SECRET_KEY = process.env.JWT_SECRET || "pixel-scan-secret-key-2026"; //change from .env

function hashPassword(pw: string): string {
  return crypto.createHash("sha256").update(pw).digest("hex");
}

// ═══════════════════════════════════════════════════════════════════════════
// POST /api/auth/login
// Body: { username, password }
// ═══════════════════════════════════════════════════════════════════════════
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: "Username/NIK dan password dibutuhkan",
      });
    }

    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM users WHERE (username = ? OR nik = ?) AND status = 'active'",
      [username, username]
    );

    if (rows.length === 0) {
      return res.status(401).json({ success: false, error: "Username atau password salah" });
    }

    const user = rows[0];
    const valid = user.password_hash === hashPassword(password);
    if (!valid) {
      return res.status(401).json({ success: false, error: "Username atau password salah" });
    }

    const role =
      user.role === "viewer" ? "usertv" : String(user.role);

    const token = jwt.sign(
      { id: user.id, username: user.username, role },
      SECRET_KEY,
      { expiresIn: "8h" }
    );

    res.json({
      success: true,
      data: {
        token,
        user: {
          id: user.id,
          username: user.username,
          role,
          tvFactory: user.tv_factory ?? "",
          tvShift: user.tv_shift ?? "A",
          tvTheme: user.tv_theme ?? "default",
        },
      },
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: server/routes/categories.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

// GET /api/categories
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM categories ORDER BY created_at DESC");
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// POST /api/categories
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ success: false, error: "Nama kategori dibutuhkan." });

    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO categories (name) VALUES (?)",
      [name.trim()]
    );
    const [newRow] = await pool.query<RowDataPacket[]>("SELECT * FROM categories WHERE id = ?", [result.insertId]);
    res.status(201).json({ success: true, data: newRow[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// PUT /api/categories/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) return res.status(400).json({ success: false, error: "Nama kategori dibutuhkan." });

    await pool.query("UPDATE categories SET name = ? WHERE id = ?", [name.trim(), id]);
    const [updatedRow] = await pool.query<RowDataPacket[]>("SELECT * FROM categories WHERE id = ?", [id]);
    res.json({ success: true, data: updatedRow[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// DELETE /api/categories/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM categories WHERE id = ?", [id]);
    res.json({ success: true, message: "Kategori berhasil dihapus." });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: server/routes/customers.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM customers ORDER BY created_at DESC");
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ success: false, error: "Nama customer dibutuhkan." });

    const [result] = await pool.query<ResultSetHeader>("INSERT INTO customers (name) VALUES (?)", [name.trim()]);
    const [newRow] = await pool.query<RowDataPacket[]>("SELECT * FROM customers WHERE id = ?", [result.insertId]);
    res.status(201).json({ success: true, data: newRow[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) return res.status(400).json({ success: false, error: "Nama customer dibutuhkan." });

    await pool.query("UPDATE customers SET name = ? WHERE id = ?", [name.trim(), id]);
    const [updatedRow] = await pool.query<RowDataPacket[]>("SELECT * FROM customers WHERE id = ?", [id]);
    res.json({ success: true, data: updatedRow[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM customers WHERE id = ?", [id]);
    res.json({ success: true, message: "Customer berhasil dihapus." });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: server/routes/devices.ts
`````typescript
import { Router } from "express";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();
const SECRET_KEY = process.env.JWT_SECRET || "pixel-scan-secret-key-2026";

function hashPin(pin: string): string {
  return crypto.createHash("sha256").update(pin).digest("hex");
}

// ═══════════════════════════════════════════════════════════════════════════
// GET /api/devices - list all devices
// ═══════════════════════════════════════════════════════════════════════════
router.get("/", async (_req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM devices ORDER BY status ASC, name ASC"
    );
    res.json({ success: true, data: rows });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// POST /api/devices - create a new device (from /devices management page)
// Body: { device_code, name, location?, device_role, pin, model?, type?, active_status? }
// ═══════════════════════════════════════════════════════════════════════════
router.post("/", async (req, res) => {
  try {
    const {
      device_code,
      name,
      location = "",
      device_role = "IN",
      pin,
      model = "Scanner",
      type = "phone",
      active_status = "active",
    } = req.body;

    if (!device_code || !name || !pin) {
      return res.status(400).json({
        success: false,
        error: "Device Code, Device Name, dan PIN wajib diisi.",
      });
    }

    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO devices 
        (device_code, name, model, type, location, device_role, pin_hash, active_status, status, battery, last_sync)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'offline', 0, NOW())`,
      [
        device_code.trim(),
        name.trim(),
        model.trim(),
        type,
        location.trim(),
        device_role,
        hashPin(String(pin)),
        active_status,
      ]
    );

    const [newRow] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM devices WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json({ success: true, data: newRow[0] });
  } catch (err: any) {
    if (err.message?.includes("Duplicate entry")) {
      return res.status(409).json({ success: false, error: "Device Code sudah digunakan." });
    }
    res.status(500).json({ success: false, error: err.message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// PUT /api/devices/:id - update device fields
// ═══════════════════════════════════════════════════════════════════════════
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      status,
      battery,
      location,
      device_code,
      name,
      model,
      type,
      device_role,
      pin,
      active_status,
    } = req.body;

    const updates: string[] = [];
    const params: (string | number)[] = [];

    if (status !== undefined) { updates.push("status = ?"); params.push(status); }
    if (battery !== undefined) { updates.push("battery = ?"); params.push(battery); }
    if (location !== undefined) { updates.push("location = ?"); params.push(location); }
    if (device_code !== undefined) { updates.push("device_code = ?"); params.push(device_code.trim()); }
    if (name !== undefined) { updates.push("name = ?"); params.push(name.trim()); }
    if (model !== undefined) { updates.push("model = ?"); params.push(model.trim()); }
    if (type !== undefined) { updates.push("type = ?"); params.push(type); }
    if (device_role !== undefined) { updates.push("device_role = ?"); params.push(device_role); }
    if (active_status !== undefined) { updates.push("active_status = ?"); params.push(active_status); }
    if (pin !== undefined && String(pin).trim() !== "") {
      updates.push("pin_hash = ?");
      params.push(hashPin(String(pin)));
    }

    if (updates.length === 0) {
      return res.status(400).json({ success: false, error: "No fields to update" });
    }

    updates.push("last_sync = NOW()");
    params.push(Number(id));

    await pool.query(`UPDATE devices SET ${updates.join(", ")} WHERE id = ?`, params);
    res.json({ success: true });
  } catch (err: any) {
    if (err.message?.includes("Duplicate entry")) {
      return res.status(409).json({ success: false, error: "Device Code sudah digunakan." });
    }
    res.status(500).json({ success: false, error: err.message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// DELETE /api/devices/:id - remove a device
// ═══════════════════════════════════════════════════════════════════════════
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM devices WHERE id = ?", [id]);
    res.json({ success: true, message: "Device berhasil dihapus." });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// POST /api/devices/station-login
// Body: { device_code, pin }
// Returns a station JWT (separate from user JWT) with device info
// IMPORTANT: This route must be registered BEFORE /:id routes to avoid conflict
// ═══════════════════════════════════════════════════════════════════════════
router.post("/station-login", async (req, res) => {
  try {
    const { device_code, pin } = req.body;

    if (!device_code || !pin) {
      return res.status(400).json({
        success: false,
        error: "ID Perangkat dan PIN dibutuhkan.",
      });
    }

    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM devices WHERE device_code = ? AND active_status = 'active'",
      [device_code.trim()]
    );

    if (rows.length === 0) {
      return res.status(401).json({ success: false, error: "ID Perangkat tidak ditemukan atau tidak aktif." });
    }

    const device = rows[0];
    if (device.pin_hash !== hashPin(String(pin))) {
      return res.status(401).json({ success: false, error: "PIN salah." });
    }

    // Mark device as online
    await pool.query(
      "UPDATE devices SET status = 'online', last_sync = NOW() WHERE id = ?",
      [device.id]
    );

    const token = jwt.sign(
      {
        device_id: device.id,
        device_code: device.device_code,
        device_name: device.name,
        device_role: device.device_role,
        type: "station",
      },
      SECRET_KEY,
      { expiresIn: "12h" }
    );

    res.json({
      success: true,
      data: {
        token,
        device: {
          id: device.id,
          device_code: device.device_code,
          name: device.name,
          device_role: device.device_role,
          location: device.location,
        },
      },
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
`````

## File: server/routes/factories.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM factories ORDER BY created_at DESC");
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ success: false, error: "Nama factory dibutuhkan." });

    const [result] = await pool.query<ResultSetHeader>("INSERT INTO factories (name) VALUES (?)", [name.trim()]);
    const [newRow] = await pool.query<RowDataPacket[]>("SELECT * FROM factories WHERE id = ?", [result.insertId]);
    res.status(201).json({ success: true, data: newRow[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) return res.status(400).json({ success: false, error: "Nama factory dibutuhkan." });

    await pool.query("UPDATE factories SET name = ? WHERE id = ?", [name.trim(), id]);
    const [updatedRow] = await pool.query<RowDataPacket[]>("SELECT * FROM factories WHERE id = ?", [id]);
    res.json({ success: true, data: updatedRow[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM factories WHERE id = ?", [id]);
    res.json({ success: true, message: "Factory berhasil dihapus." });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: server/routes/mesin.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

// ═══════════════════════════════════════════════════════════════════════════
// [1] GET /api/mesin - list all machines (optional search)
// ═══════════════════════════════════════════════════════════════════════════
router.get("/", async (req, res) => {
  try {
    const search = (req.query.search as string) || "";
    let query = "SELECT * FROM mesin";
    const params: string[] = [];

    if (search) {
      query += " WHERE machine_code LIKE ? OR machine_name LIKE ?";
      params.push(`%${search}%`, `%${search}%`);
    }

    query += " ORDER BY created_at DESC";

    const [rows] = await pool.query<RowDataPacket[]>(query, params);
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [2] POST /api/mesin - create new machine
// ═══════════════════════════════════════════════════════════════════════════
router.post("/", async (req, res) => {
  try {
    const {
      machineCode,
      machineName,
      description = "",
      status = "active",
      factory = "",
    } = req.body;

    if (!machineCode || !machineName) {
      return res.status(400).json({
        success: false,
        error: "Machine Code dan Machine Name wajib diisi.",
      });
    }

    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO mesin (machine_code, machine_name, description, status, factory) VALUES (?, ?, ?, ?, ?)`,
      [
        machineCode.trim().toUpperCase(),
        machineName.trim(),
        description.trim(),
        status,
        String(factory).trim(),
      ]
    );

    const [newRow] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM mesin WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json({ success: true, data: newRow[0] });
  } catch (err: unknown) {
    const msg = (err as Error).message || "";
    if (msg.includes("Duplicate entry")) {
      return res.status(409).json({
        success: false,
        error: "Machine Code sudah terdaftar. Gunakan kode yang berbeda.",
      });
    }
    res.status(500).json({ success: false, error: msg });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [3] PUT /api/mesin/:id - update machine
// ═══════════════════════════════════════════════════════════════════════════
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      machineCode,
      machineName,
      description = "",
      status = "active",
      factory = "",
    } = req.body;

    if (!machineCode || !machineName) {
      return res.status(400).json({
        success: false,
        error: "Machine Code dan Machine Name wajib diisi.",
      });
    }

    await pool.query(
      `UPDATE mesin SET machine_code = ?, machine_name = ?, description = ?, status = ?, factory = ? WHERE id = ?`,
      [
        machineCode.trim().toUpperCase(),
        machineName.trim(),
        description.trim(),
        status,
        String(factory).trim(),
        id,
      ]
    );

    const [updatedRow] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM mesin WHERE id = ?",
      [id]
    );

    res.json({ success: true, data: updatedRow[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [4] PATCH /api/mesin/:id/toggle - toggle active/inactive status
// ═══════════════════════════════════════════════════════════════════════════
router.patch("/:id/toggle", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(
      `UPDATE mesin SET status = IF(status = 'active', 'inactive', 'active') WHERE id = ?`,
      [id]
    );
    const [row] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM mesin WHERE id = ?",
      [id]
    );
    res.json({ success: true, data: row[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [5] DELETE /api/mesin/:id - delete machine
// ═══════════════════════════════════════════════════════════════════════════
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM mesin WHERE id = ?", [id]);
    res.json({ success: true, message: "Mesin berhasil dihapus." });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: server/routes/models.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM models ORDER BY created_at DESC");
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ success: false, error: "Nama model dibutuhkan." });

    const [result] = await pool.query<ResultSetHeader>("INSERT INTO models (name) VALUES (?)", [name.trim()]);
    const [newRow] = await pool.query<RowDataPacket[]>("SELECT * FROM models WHERE id = ?", [result.insertId]);
    res.status(201).json({ success: true, data: newRow[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) return res.status(400).json({ success: false, error: "Nama model dibutuhkan." });

    await pool.query("UPDATE models SET name = ? WHERE id = ?", [name.trim(), id]);
    const [updatedRow] = await pool.query<RowDataPacket[]>("SELECT * FROM models WHERE id = ?", [id]);
    res.json({ success: true, data: updatedRow[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM models WHERE id = ?", [id]);
    res.json({ success: true, message: "Model berhasil dihapus." });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: server/routes/privileges.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import { requireInternalKey } from "../middleware/internalKeyMiddleware.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

// Apply internal key protection to ALL routes in this router
router.use(requireInternalKey);

// ═══════════════════════════════════════════════════════════════════════════
// [1] GET /api/privileges/stations
// Returns all station devices with their privilege status.
// Status: "open" (no rows in table) | "restricted" (has rows)
// Each restricted station also returns count of allowed QRs.
// ═══════════════════════════════════════════════════════════════════════════
router.get("/stations", async (_req, res) => {
  try {
    // Single query: join devices with privilege counts - O(devices + privileges)
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT
         d.id,
         d.device_code,
         d.name,
         d.location,
         d.device_role,
         d.active_status,
         COUNT(sqp.id) AS privilege_count
       FROM devices d
       LEFT JOIN station_qr_privileges sqp ON sqp.station_id = d.id
       GROUP BY d.id
       ORDER BY d.name ASC`
    );

    const data = rows.map((r) => ({
      id: r.id,
      device_code: r.device_code,
      name: r.name,
      location: r.location,
      device_role: r.device_role,
      active_status: r.active_status,
      privilege_mode: Number(r.privilege_count) === 0 ? "open" : "restricted",
      privilege_count: Number(r.privilege_count),
    }));

    res.json({ success: true, data });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [2] GET /api/privileges/station/:id
// Returns all QR codes the station is allowed to scan, plus all available QRs
// so the frontend can render the "available" vs "allowed" transfer list.
// ═══════════════════════════════════════════════════════════════════════════
router.get("/station/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const stationId = parseInt(id, 10);

    if (isNaN(stationId)) {
      return res.status(400).json({ success: false, error: "ID station tidak valid." });
    }

    // Fetch all QR codes (for the available pool)
    const [allQrs] = await pool.query<RowDataPacket[]>(
      `SELECT id, qr_id, part_name, factory, status
       FROM qr_codes
       ORDER BY created_at DESC`
    );

    // Fetch the allowed QR ids for this station
    const [privilegeRows] = await pool.query<RowDataPacket[]>(
      `SELECT qr_id FROM station_qr_privileges WHERE station_id = ?`,
      [stationId]
    );

    const allowedQrIds = new Set(privilegeRows.map((r) => Number(r.qr_id)));

    const allQrsMapped = allQrs.map((q) => ({
      id: q.id,
      qr_id: q.qr_id,
      part_name: q.part_name,
      factory: q.factory,
      status: q.status,
      is_allowed: allowedQrIds.has(Number(q.id)),
    }));

    res.json({
      success: true,
      data: {
        station_id: stationId,
        privilege_mode: allowedQrIds.size === 0 ? "open" : "restricted",
        allowed_count: allowedQrIds.size,
        qr_list: allQrsMapped,
      },
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [3] POST /api/privileges/station/:id
// Save/replace privilege configuration for a station.
// Body: { qr_ids: number[] }  - array of qr_codes.id values
//
// Supports MULTIPLE QRs per station (many rows inserted).
// Uses a replace strategy: delete old rows, insert new ones atomically.
// ═══════════════════════════════════════════════════════════════════════════
router.post("/station/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const stationId = parseInt(id, 10);

    if (isNaN(stationId)) {
      return res.status(400).json({ success: false, error: "ID station tidak valid." });
    }

    const { qr_ids } = req.body as { qr_ids: number[] };

    if (!Array.isArray(qr_ids)) {
      return res.status(400).json({ success: false, error: "qr_ids harus berupa array." });
    }

    // Validate station exists
    const [stationRows] = await pool.query<RowDataPacket[]>(
      "SELECT id FROM devices WHERE id = ?",
      [stationId]
    );
    if (stationRows.length === 0) {
      return res.status(404).json({ success: false, error: "Station tidak ditemukan." });
    }

    // Validate all qr_ids exist (prevent orphan FK rows)
    if (qr_ids.length > 0) {
      const [qrRows] = await pool.query<RowDataPacket[]>(
        `SELECT id FROM qr_codes WHERE id IN (${qr_ids.map(() => "?").join(",")})`,
        qr_ids
      );
      if (qrRows.length !== qr_ids.length) {
        return res.status(400).json({ success: false, error: "Beberapa QR ID tidak valid." });
      }
    }

    // Atomic replace: delete then batch insert
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();

      // Remove all existing privilege rows for this station
      await conn.query("DELETE FROM station_qr_privileges WHERE station_id = ?", [stationId]);

      // Insert new privilege rows (batch insert for performance)
      if (qr_ids.length > 0) {
        const values = qr_ids.map((qrId) => [stationId, qrId]);
        await conn.query(
          "INSERT INTO station_qr_privileges (station_id, qr_id) VALUES ?",
          [values]
        );
      }

      await conn.commit();
    } catch (txErr) {
      await conn.rollback();
      throw txErr;
    } finally {
      conn.release();
    }

    res.json({
      success: true,
      message:
        qr_ids.length === 0
          ? "Privilege direset ke default (open access)."
          : `Privilege berhasil disimpan: ${qr_ids.length} QR diizinkan.`,
      data: { station_id: stationId, allowed_count: qr_ids.length },
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [4] DELETE /api/privileges/station/:id
// Reset station to default (open access) by removing all privilege rows.
// ═══════════════════════════════════════════════════════════════════════════
router.delete("/station/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const stationId = parseInt(id, 10);

    if (isNaN(stationId)) {
      return res.status(400).json({ success: false, error: "ID station tidak valid." });
    }

    await pool.query("DELETE FROM station_qr_privileges WHERE station_id = ?", [stationId]);

    res.json({
      success: true,
      message: "Privilege station berhasil direset ke default (open access).",
      data: { station_id: stationId },
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [5] GET /api/privileges/check?station_id=X&qr_db_id=Y
// Server-side privilege check - called internally from /api/qr/process.
// Returns: { allowed: true } | { allowed: false }
//
// Performance: Uses indexed columns (station_id, qr_id) - O(1) lookup.
// ═══════════════════════════════════════════════════════════════════════════
router.get("/check", async (req, res) => {
  try {
    const stationId = parseInt(req.query.station_id as string, 10);
    const qrDbId = parseInt(req.query.qr_db_id as string, 10);

    if (isNaN(stationId) || isNaN(qrDbId)) {
      return res.status(400).json({ success: false, error: "Parameter tidak valid." });
    }

    // First: check if station has ANY privilege rows (mode detection)
    const [countRows] = await pool.query<RowDataPacket[]>(
      "SELECT COUNT(*) as cnt FROM station_qr_privileges WHERE station_id = ?",
      [stationId]
    );
    const totalPrivileges = Number(countRows[0]?.cnt ?? 0);

    // Open access mode - no rows = no restriction
    if (totalPrivileges === 0) {
      return res.json({ success: true, data: { allowed: true, mode: "open" } });
    }

    // Restricted mode - check if specific QR is in the allowed list
    const [checkRows] = await pool.query<RowDataPacket[]>(
      "SELECT id FROM station_qr_privileges WHERE station_id = ? AND qr_id = ? LIMIT 1",
      [stationId, qrDbId]
    );

    const allowed = checkRows.length > 0;
    res.json({ success: true, data: { allowed, mode: "restricted" } });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: server/routes/scan.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket } from "mysql2";

const router = Router();

// GET /api/scans/recent - get recent scans
router.get("/recent", async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 10;
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM scan_records ORDER BY created_at DESC LIMIT ?",
      [limit]
    );
    res.json({ success: true, data: rows });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/scans - Record a scan
router.post("/", async (req, res) => {
  try {
    const { qr_id, label, factory, scanned_by } = req.body;

    if (!qr_id || !label) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    await pool.query(
      "INSERT INTO scan_records (qr_id, label, factory, scanned_by) VALUES (?, ?, ?, ?)",
      [qr_id, label, factory || "", scanned_by || "System"]
    );

    // Also create a task for this scan
    const [maxTask] = await pool.query<RowDataPacket[]>(
      "SELECT task_id FROM tasks ORDER BY id DESC LIMIT 1"
    );
    let nextNum = 1001;
    if (maxTask.length > 0) {
      const lastNum = parseInt(maxTask[0].task_id.replace("T-", ""), 10);
      nextNum = lastNum + 1;
    }
    const task_id = `T-${nextNum}`;

    await pool.query(
      "INSERT INTO tasks (task_id, title, type, status, user) VALUES (?, ?, 'Scan In', 'completed', ?)",
      [task_id, `Scanned ${label} (${qr_id})`, scanned_by || "System"]
    );

    res.status(201).json({ success: true });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
`````

## File: server/routes/stock.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket } from "mysql2";

const router = Router();

// GET /api/stock - list stock with filters
router.get("/", async (req, res) => {
  try {
    const search = (req.query.search as string) || "";
    const factory = (req.query.factory as string) || "";

    let query = "SELECT * FROM stock WHERE 1=1";
    const params: string[] = [];

    if (search) {
      query += " AND part_name LIKE ?";
      params.push(`%${search}%`);
    }

    if (factory && factory !== "All") {
      query += " AND factory = ?";
      params.push(factory);
    }

    query += " ORDER BY part_name ASC";

    const [rows] = await pool.query<RowDataPacket[]>(query, params);
    res.json({ success: true, data: rows });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/stock/stats - summary stats
router.get("/stats", async (req, res) => {
  try {
    const [totalResult] = await pool.query<RowDataPacket[]>(
      "SELECT COALESCE(SUM(units), 0) AS total_units, COUNT(*) AS sku_count FROM stock"
    );
    const [lowStockResult] = await pool.query<RowDataPacket[]>(
      "SELECT COUNT(*) AS low_stock FROM stock WHERE units < 100"
    );

    res.json({
      success: true,
      data: {
        totalUnits: totalResult[0].total_units,
        skuCount: totalResult[0].sku_count,
        lowStock: lowStockResult[0].low_stock,
      },
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/stock/factories - list distinct factories
router.get("/factories", async (req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT DISTINCT factory FROM stock ORDER BY factory"
    );
    const factories = rows.map((r) => r.factory);
    res.json({ success: true, data: factories });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
`````

## File: server/routes/tasks.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket } from "mysql2";

const router = Router();

// GET /api/tasks - list all tasks
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM tasks ORDER BY created_at DESC"
    );
    res.json({ success: true, data: rows });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/tasks - create a task
router.post("/", async (req, res) => {
  try {
    const { title, type, status, user } = req.body;

    if (!title || !type || !user) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    // Generate task ID
    const [maxRow] = await pool.query<RowDataPacket[]>(
      "SELECT task_id FROM tasks ORDER BY id DESC LIMIT 1"
    );
    let nextNum = 1001;
    if (maxRow.length > 0) {
      const lastNum = parseInt(maxRow[0].task_id.replace("T-", ""), 10);
      nextNum = lastNum + 1;
    }
    const task_id = `T-${nextNum}`;

    await pool.query(
      "INSERT INTO tasks (task_id, title, type, status, user) VALUES (?, ?, ?, ?, ?)",
      [task_id, title, type, status || "pending", user]
    );

    res.status(201).json({ success: true, data: { task_id } });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
`````

## File: server/routes/teitei.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import {
  syncShikakeSettingsToAnalytics,
} from "../lib/stockAnalyticsService.js";

const router = Router();

function mapTeitei(r: any) {
  return {
    id: r.id,
    masterPartId: r.master_part_id,
    teiteiValue: Number(r.shikake_value),
    minVal: Number(r.min_val ?? 0),
    qtyPerDay: Number(r.qty_per_day ?? 0),
    partNumber: r.part_number,
    partName: r.part_name,
    model: r.model,
    factoryOrigin: r.factory_origin,
    createdAt: r.created_at,
    updatedAt: r.updated_at,
  };
}

// GET /api/teitei - list with master part info
router.get("/", async (_req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT s.id, s.master_part_id, s.shikake_value, s.min_val, s.qty_per_day, s.created_at, s.updated_at,
              mp.part_number, mp.part_name, mp.model, mp.factory_origin,
              sa.min_val AS analytics_min
       FROM shikake_settings s
       LEFT JOIN master_parts mp ON mp.id = s.master_part_id
       LEFT JOIN stock_analytics sa ON UPPER(sa.part_number) = UPPER(mp.part_number)
       GROUP BY s.id
       ORDER BY mp.part_number ASC`
    );
    res.json({
      success: true,
      data: rows.map(mapTeitei),
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// GET /api/teitei/parts - master parts without teitei (for add dropdown)
router.get("/parts", async (_req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT mp.id, mp.part_number, mp.part_name, mp.model, mp.factory_origin
       FROM master_parts mp
       WHERE mp.status = 'active'
       ORDER BY mp.part_number ASC`
    );
    res.json({
      success: true,
      data: rows.map((r) => ({
        id: r.id,
        partNumber: r.part_number,
        partName: r.part_name,
        model: r.model,
        factoryOrigin: r.factory_origin,
      })),
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// POST /api/teitei
router.post("/", async (req, res) => {
  try {
    const { masterPartId, teiteiValue, minVal = 0, qtyPerDay = 0 } = req.body;
    if (!masterPartId || teiteiValue == null) {
      return res.status(400).json({
        success: false,
        error: "Master part dan nilai teitei wajib diisi.",
      });
    }

    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO shikake_settings (master_part_id, shikake_value, min_val, qty_per_day) VALUES (?, ?, ?, ?)",
      [masterPartId, Number(teiteiValue), Number(minVal), Number(qtyPerDay)]
    );

    const [mpRows] = await pool.query<RowDataPacket[]>(
      "SELECT part_number FROM master_parts WHERE id = ?",
      [masterPartId]
    );
    if (mpRows[0]?.part_number) {
      await syncShikakeSettingsToAnalytics(mpRows[0].part_number as string);
    }

    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT s.id, s.master_part_id, s.shikake_value, s.min_val, s.qty_per_day, mp.part_number, mp.part_name
       FROM shikake_settings s
       LEFT JOIN master_parts mp ON mp.id = s.master_part_id
       WHERE s.id = ?`,
      [result.insertId]
    );

    res.status(201).json({ success: true, data: mapTeitei(rows[0]) });
  } catch (err: unknown) {
    const msg = (err as Error).message || "";
    if (msg.includes("Duplicate")) {
      return res.status(409).json({
        success: false,
        error: "Teitei untuk part ini sudah ada.",
      });
    }
    res.status(500).json({ success: false, error: msg });
  }
});

// PUT /api/teitei/:id
router.put("/:id", async (req, res) => {
  try {
    const { teiteiValue, minVal, qtyPerDay } = req.body;

    const [existing] = await pool.query<RowDataPacket[]>(
      `SELECT s.*, mp.part_number FROM shikake_settings s
       LEFT JOIN master_parts mp ON mp.id = s.master_part_id
       WHERE s.id = ?`,
      [req.params.id]
    );
    if (!existing.length) {
      return res.status(404).json({ success: false, error: "Not found" });
    }

    const updates: string[] = [];
    const values: unknown[] = [];
    if (teiteiValue != null) {
      updates.push("shikake_value = ?");
      values.push(Number(teiteiValue));
    }
    if (minVal != null) {
      updates.push("min_val = ?");
      values.push(Number(minVal));
    }
    if (qtyPerDay != null) {
      updates.push("qty_per_day = ?");
      values.push(Number(qtyPerDay));
    }
    if (updates.length) {
      values.push(req.params.id);
      await pool.query(
        `UPDATE shikake_settings SET ${updates.join(", ")} WHERE id = ?`,
        values
      );
    }

    const partNumber = existing[0].part_number as string;
    if (partNumber) {
      await syncShikakeSettingsToAnalytics(partNumber);
    }

    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT s.id, s.master_part_id, s.shikake_value, s.min_val, s.qty_per_day, mp.part_number, mp.part_name
       FROM shikake_settings s
       LEFT JOIN master_parts mp ON mp.id = s.master_part_id
       WHERE s.id = ?`,
      [req.params.id]
    );
    res.json({ success: true, data: mapTeitei(rows[0]) });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// DELETE /api/teitei/:id
router.delete("/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM shikake_settings WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Teitei dihapus." });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: server/routes/users.ts
`````typescript
import { Router } from "express";
import crypto from "crypto";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

function hashPassword(pw: string): string {
  return crypto.createHash("sha256").update(pw).digest("hex");
}

// ═══════════════════════════════════════════════════════════════════════════
// [1] GET /api/users
// ═══════════════════════════════════════════════════════════════════════════
router.get("/", async (req, res) => {
  try {
    const search = (req.query.search as string) || "";
    let query =
      "SELECT id, username, nik, role, status, tv_factory, tv_shift, tv_theme, created_at, updated_at FROM users";
    const params: string[] = [];

    if (search) {
      query += " WHERE username LIKE ? OR nik LIKE ? OR role LIKE ?";
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    query += " ORDER BY created_at DESC";
    const [rows] = await pool.query<RowDataPacket[]>(query, params);
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [2] POST /api/users - create user
// Body: { username, nik?, password, role?, status? }
// ═══════════════════════════════════════════════════════════════════════════
router.post("/", async (req, res) => {
  try {
    const {
      username,
      nik = "",
      password,
      role = "operator",
      status = "active",
      tvFactory = "",
      tvShift = "A",
      tvTheme = "default",
    } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: "Username dan password wajib diisi.",
      });
    }

    const normalizedRole = role === "viewer" ? "usertv" : role;

    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO users (username, nik, password_hash, role, status, tv_factory, tv_shift, tv_theme)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        username.trim(),
        nik.trim(),
        hashPassword(password),
        normalizedRole,
        status,
        tvFactory,
        tvShift,
        tvTheme,
      ]
    );

    const [newRow] = await pool.query<RowDataPacket[]>(
      `SELECT id, username, nik, role, status, tv_factory, tv_shift, tv_theme, created_at, updated_at
       FROM users WHERE id = ?`,
      [result.insertId]
    );

    res.status(201).json({ success: true, data: newRow[0] });
  } catch (err: unknown) {
    const msg = (err as Error).message || "";
    if (msg.includes("Duplicate entry")) {
      return res
        .status(409)
        .json({ success: false, error: "Username sudah digunakan." });
    }
    res.status(500).json({ success: false, error: msg });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [3] PUT /api/users/:id - update user
// ═══════════════════════════════════════════════════════════════════════════
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      username,
      nik = "",
      password,
      role = "operator",
      status = "active",
      tvFactory = "",
      tvShift = "A",
      tvTheme = "default",
    } = req.body;

    if (!username) {
      return res
        .status(400)
        .json({ success: false, error: "Username wajib diisi." });
    }

    const normalizedRole = role === "viewer" ? "usertv" : role;

    const fields = [
      "username = ?",
      "nik = ?",
      "role = ?",
      "status = ?",
      "tv_factory = ?",
      "tv_shift = ?",
      "tv_theme = ?",
    ];
    const values: unknown[] = [
      username.trim(),
      nik.trim(),
      normalizedRole,
      status,
      tvFactory,
      tvShift,
      tvTheme,
    ];

    if (password) {
      fields.push("password_hash = ?");
      values.push(hashPassword(password));
    }

    values.push(id);
    await pool.query(
      `UPDATE users SET ${fields.join(", ")} WHERE id = ?`,
      values
    );

    const [updatedRow] = await pool.query<RowDataPacket[]>(
      `SELECT id, username, nik, role, status, tv_factory, tv_shift, tv_theme, created_at, updated_at
       FROM users WHERE id = ?`,
      [id]
    );

    res.json({ success: true, data: updatedRow[0] });
  } catch (err: unknown) {
    const msg = (err as Error).message || "";
    if (msg.includes("Duplicate entry")) {
      return res
        .status(409)
        .json({ success: false, error: "Username sudah digunakan." });
    }
    res.status(500).json({ success: false, error: msg });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [4] DELETE /api/users/:id
// ═══════════════════════════════════════════════════════════════════════════
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM users WHERE id = ?", [id]);
    res.json({ success: true, message: "User berhasil dihapus." });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: server/temp_migrate.ts
`````typescript
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

async function run() {
  const c = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "outindb"
  });

  try {
    await c.query("ALTER TABLE master_parts ADD COLUMN factory_origin VARCHAR(255) DEFAULT ''");
    console.log("Added factory_origin to master_parts");
  } catch(e: any) {
    if(e.code === "ER_DUP_FIELDNAME") {
      console.log("factory_origin already exists");
    } else {
      console.log(e);
    }
  }

  const createTables = [
    `CREATE TABLE IF NOT EXISTS categories (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS models (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS factories (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`
  ];

  for (let q of createTables) {
    await c.query(q);
    console.log("Executed create table query");
  }

  // Seed default factories since it's required for Update 5/6
  const seedFactories = [
    "Factory Seizo",
    "Factory Aichi",
    "Factory Karawang",
    "Factory A - Jakarta",
    "Factory B - Bandung"
  ];
  for (let f of seedFactories) {
    try {
      await c.query("INSERT INTO factories (name) VALUES (?)", [f]);
    } catch(e) {}
  }
  console.log("Seeded factories");

  await c.end();
}

run().catch(console.error);
`````

## File: server/tsconfig.json
`````json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": ".",
    "resolveJsonModule": true
  },
  "include": ["./**/*.ts"]
}
`````

## File: src/components/dashboard/MasterDataManagement.tsx
`````typescript
import { useState } from "react";
import { Plus, Edit2, Trash2, Save, X, Loader2 } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { MasterDataItem } from "@/hooks/use-master-data";

interface MasterDataManagementProps {
  title: string;
  description: string;
  api: {
    useGetAll: () => { data: MasterDataItem[] | undefined; isLoading: boolean };
    useCreate: () => { mutate: any; isPending: boolean };
    useUpdate: () => { mutate: any; isPending: boolean };
    useDelete: () => { mutate: any; isPending: boolean };
  };
}

export function MasterDataManagement({ title, description, api }: MasterDataManagementProps) {
  const { data: items = [], isLoading } = api.useGetAll();
  const createItem = api.useCreate();
  const updateItem = api.useUpdate();
  const deleteItem = api.useDelete();

  const [isAdding, setIsAdding] = useState(false);
  const [addName, setAddName] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  const [deletingItem, setDeletingItem] = useState<MasterDataItem | null>(null);

  const handleAdd = () => {
    if (!addName.trim()) return;
    createItem.mutate(addName, {
      onSuccess: () => {
        setIsAdding(false);
        setAddName("");
      },
    });
  };

  const handleUpdate = () => {
    if (!editName.trim() || !editingId) return;
    updateItem.mutate(
      { id: editingId, name: editName },
      {
        onSuccess: () => {
          setEditingId(null);
          setEditName("");
        },
      }
    );
  };

  const handleDelete = () => {
    if (!deletingItem) return;
    deleteItem.mutate(deletingItem.id, {
      onSuccess: () => setDeletingItem(null),
    });
  };

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">
        <div className="mb-6 flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Management
          </span>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>

        <section className="rounded-3xl border border-border-surface bg-surface-section p-5 sm:p-7">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-base font-semibold text-foreground">Daftar {title}</h2>
            {!isAdding && (
              <button
                onClick={() => setIsAdding(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#C05C30] px-4 py-2 text-sm font-medium text-white transition-smooth hover:bg-[#A84D24]"
              >
                <Plus className="h-4 w-4" />
                Tambah Baru
              </button>
            )}
          </div>

          <div className="-mx-2 overflow-x-auto px-2 scrollbar-thin">
            <table className="w-full min-w-[500px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  <th className="border-b border-border px-3 py-3 font-medium">ID</th>
                  <th className="border-b border-border px-3 py-3 font-medium">Nama</th>
                  <th className="border-b border-border px-3 py-3 font-medium">Tanggal Dibuat</th>
                  <th className="border-b border-border px-3 py-3 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {isAdding && (
                  <tr className="bg-card-elevated/20">
                    <td className="border-b border-border/60 px-3 py-3">-</td>
                    <td className="border-b border-border/60 px-3 py-3">
                      <input
                        autoFocus
                        value={addName}
                        onChange={(e) => setAddName(e.target.value)}
                        placeholder="Masukkan nama..."
                        className="h-9 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary"
                        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                      />
                    </td>
                    <td className="border-b border-border/60 px-3 py-3">-</td>
                    <td className="border-b border-border/60 px-3 py-3 text-right">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={handleAdd}
                          disabled={createItem.isPending || !addName.trim()}
                          className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400"
                        >
                          {createItem.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                        </button>
                        <button
                          onClick={() => {
                            setIsAdding(false);
                            setAddName("");
                          }}
                          className="rounded-lg bg-red-500/10 p-2 text-red-600 hover:bg-red-500/20 dark:text-red-400"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )}

                {isLoading ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-muted-foreground">Loading...</td>
                  </tr>
                ) : items.length === 0 && !isAdding ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-muted-foreground">Belum ada data.</td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr key={item.id} className="transition-smooth hover:bg-card-elevated/40">
                      <td className="border-b border-border/60 px-3 py-3.5 text-muted-foreground font-mono">
                        {item.id}
                      </td>
                      <td className="border-b border-border/60 px-3 py-3.5 text-foreground font-medium">
                        {editingId === item.id ? (
                          <input
                            autoFocus
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="h-9 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary"
                            onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
                          />
                        ) : (
                          item.name
                        )}
                      </td>
                      <td className="border-b border-border/60 px-3 py-3.5 text-muted-foreground text-xs">
                        {new Date(item.created_at).toLocaleDateString("en-CA")}
                      </td>
                      <td className="border-b border-border/60 px-3 py-3.5 text-right">
                        {editingId === item.id ? (
                          <div className="inline-flex gap-2">
                            <button
                              onClick={handleUpdate}
                              disabled={updateItem.isPending || !editName.trim()}
                              className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400"
                            >
                              {updateItem.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="rounded-lg bg-red-500/10 p-2 text-red-600 hover:bg-red-500/20 dark:text-red-400"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="inline-flex gap-2">
                            <button
                              onClick={() => {
                                setEditingId(item.id);
                                setEditName(item.name);
                              }}
                              className="rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => setDeletingItem(item)}
                              className="rounded-lg p-2 text-red-500 hover:bg-red-500/10 hover:text-red-600"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Delete Modal */}
        <AlertDialog open={!!deletingItem} onOpenChange={(o) => !o && setDeletingItem(null)}>
          <AlertDialogContent className="rounded-xl border border-border-surface bg-surface-sidebar p-0 sm:max-w-md overflow-hidden text-foreground">
            <AlertDialogHeader className="px-6 pb-2 pt-6">
              <AlertDialogTitle className="text-xl font-bold">Hapus {title}</AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-muted-foreground mt-2">
                Apakah kamu yakin untuk menghapus <strong>{deletingItem?.name}</strong>? Tindakan ini tidak dapat dibatalkan.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="bg-card-elevated px-6 py-4 flex flex-row justify-end gap-3 border-t border-border-surface">
              <AlertDialogCancel className="mt-0 border-border hover:bg-accent hover:text-foreground text-foreground">Batal</AlertDialogCancel>
              <AlertDialogAction
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete();
                }}
                className="bg-red-500 hover:bg-red-600 text-white border-0"
              >
                {deleteItem.isPending ? "Menghapus..." : "Hapus"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </DashboardLayout>
  );
}
`````

## File: src/components/dashboard/PageSkeleton.tsx
`````typescript
// ─────────────────────────────────────────────────────────────────────────────
// Skeleton loader - matches rough DashboardLayout page structure
// Used as Suspense fallback during route transitions / lazy chunk loading
// ─────────────────────────────────────────────────────────────────────────────

export function PageSkeleton() {
  return (
    <div className="min-h-screen w-full bg-surface-page animate-pulse">
      {/* Sidebar skeleton (desktop) */}
      <div className="fixed inset-y-0 left-0 z-30 hidden w-[280px] flex-col border-r border-border-surface bg-surface-sidebar md:flex">
        {/* Logo area */}
        <div className="px-5 py-5">
          <div className="h-4 w-36 rounded-full bg-card-elevated" />
          <div className="mt-1.5 h-2.5 w-24 rounded-full bg-card-elevated/60" />
        </div>
        {/* Nav items */}
        <div className="flex flex-1 flex-col gap-2 px-3 py-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 rounded-full px-4 py-3">
              <div className="h-5 w-5 shrink-0 rounded-md bg-card-elevated" />
              <div className="flex flex-col gap-1.5">
                <div className="h-3 w-24 rounded-full bg-card-elevated" />
                <div className="h-2 w-32 rounded-full bg-card-elevated/60" />
              </div>
            </div>
          ))}
        </div>
        {/* Profile area */}
        <div className="px-3 py-3">
          <div className="flex items-center gap-3 rounded-xl px-3 py-2.5">
            <div className="h-9 w-9 shrink-0 rounded-lg bg-card-elevated" />
            <div className="flex flex-col gap-1.5">
              <div className="h-3 w-20 rounded-full bg-card-elevated" />
              <div className="h-2 w-14 rounded-full bg-card-elevated/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <div className="md:pl-[280px]">
        {/* Mobile top bar skeleton */}
        <div className="flex items-center justify-between border-b border-border-surface bg-surface-sidebar px-4 py-3 md:hidden">
          <div className="h-4 w-32 rounded-full bg-card-elevated" />
          <div className="h-10 w-10 rounded-full bg-card-elevated" />
        </div>

        <main className="px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
          {/* Page header */}
          <div className="mb-6">
            <div className="h-2.5 w-28 rounded-full bg-card-elevated/60" />
            <div className="mt-2 h-7 w-64 rounded-xl bg-card-elevated" />
          </div>

          {/* Content rows */}
          <div className="mb-4 h-14 w-full rounded-2xl bg-card" />
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            {/* Table header */}
            <div className="flex gap-4 border-b border-border px-5 py-3.5 bg-card-elevated/50">
              {[80, 60, 50, 60, 40].map((w, i) => (
                <div key={i} className={`h-2.5 rounded-full bg-card-elevated`} style={{ width: `${w}px` }} />
              ))}
            </div>
            {/* Table rows */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex gap-4 border-b border-border/60 px-5 py-4">
                {[100, 80, 60, 70, 50].map((w, j) => (
                  <div key={j} className="h-3 rounded-full bg-card-elevated/70" style={{ width: `${w}px` }} />
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
`````

## File: src/components/dashboard/PageTransition.tsx
`````typescript
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.25, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
`````

## File: src/components/dashboard/Placeholder.tsx
`````typescript
import { Construction } from "lucide-react";

export function Placeholder({ title }: { title: string }) {
  return (
    <div className="animate-in fade-in duration-300">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
      <div className="mt-6 flex min-h-[60vh] items-center justify-center rounded-3xl border border-border bg-card p-10">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-card-elevated text-muted-foreground">
            <Construction className="h-6 w-6" />
          </div>
          <h2 className="mt-5 text-lg font-medium text-foreground">
            This page hasn't been created
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
            Content for "{title}" is on its way. Sit tight while we build this experience.
          </p>
        </div>
      </div>
    </div>
  );
}
`````

## File: src/components/dashboard/WorkspaceSwitcher.tsx
`````typescript
import { useState } from "react";
import { Boxes, LayoutGrid } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────
export type WorkspaceMode = "inventaris" | "material";

export interface WorkspaceSwitcherProps {
  /** Controlled value - if provided, component is controlled */
  value?: WorkspaceMode;
  /** Called whenever the user toggles the workspace */
  onChange?: (mode: WorkspaceMode) => void;
  /** Whether the sidebar is collapsed (hides labels, renders compact) */
  collapsed?: boolean;
}

// ── Workspace definitions ────────────────────────────────────────────────────
const WORKSPACES: {
  id: WorkspaceMode;
  label: string;
  icon: React.ElementType;
}[] = [
  { id: "inventaris", label: "Inventaris", icon: LayoutGrid },
  { id: "material",   label: "Material",   icon: Boxes },
];

// ── Component ────────────────────────────────────────────────────────────────
export function WorkspaceSwitcher({
  value,
  onChange,
  collapsed = false,
}: WorkspaceSwitcherProps) {
  // Local state when uncontrolled
  const [internal, setInternal] = useState<WorkspaceMode>("inventaris");
  const active = value ?? internal;

  const handleSelect = (id: WorkspaceMode) => {
    if (id === active) return;
    setInternal(id);
    onChange?.(id);
  };

  // ── Collapsed: render as two compact icon-only circles ──────────────────
  if (collapsed) {
    return (
      <div
        role="group"
        aria-label="Workspace switcher"
        className="flex flex-col items-center gap-1.5 pb-3"
      >
        {/* Thin divider above */}
        <div className="h-px w-8 bg-border-surface mb-1" />

        {WORKSPACES.map(({ id, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              id={`workspace-btn-${id}`}
              aria-pressed={isActive}
              onClick={() => handleSelect(id)}
              title={id.charAt(0).toUpperCase() + id.slice(1)}
              className={[
                "flex h-9 w-9 items-center justify-center rounded-full",
                "transition-all duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C05C30]/60",
                isActive
                  ? "bg-[#C05C30] text-white shadow-sm"
                  : "text-muted-foreground hover:bg-sidebar-hover hover:text-foreground",
              ].join(" ")}
            >
              <Icon className="h-4 w-4" strokeWidth={isActive ? 2 : 1.75} />
            </button>
          );
        })}

        {/* Thin divider below */}
        <div className="h-px w-8 bg-border-surface mt-1" />
      </div>
    );
  }

  // ── Expanded: full pill-tab switcher ─────────────────────────────────────
  const activeIndex = WORKSPACES.findIndex((w) => w.id === active);

  return (
    <div
      role="group"
      aria-label="Workspace switcher"
      className="pb-3"
    >
      {/*
        Outer track: the rounded-full border box that holds the two options.
        The sliding "pill" is absolutely positioned inside.
      */}
      <div
        className={[
          "relative flex items-center",
          "rounded-[14px] border border-border-surface",
          "bg-card-elevated p-[3px]",
          /* subtle inner glow on the track */
          "shadow-[inset_0_1px_2px_rgba(0,0,0,0.18)]",
        ].join(" ")}
      >
        {/* ── Sliding background pill ───────────────────────────────────── */}
        <span
          aria-hidden="true"
          className={[
            "pointer-events-none absolute inset-y-[3px]",
            "rounded-[10px]",
            "bg-[#C05C30]",
            /* subtle highlight on top edge */
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_2px_8px_rgba(192,92,48,0.35)]",
            /* GPU-composited slide - uses transform for 60 fps */
            "transition-transform duration-[280ms] cubic-bezier(0.4,0,0.2,1)",
            /* width is exactly half the track */
            "w-[calc(50%-3px)]",
          ].join(" ")}
          style={{
            transform: `translateX(${activeIndex === 0 ? "0px" : "100%"})`,
            willChange: "transform",
          }}
        />

        {/* ── Tab buttons ───────────────────────────────────────────────── */}
        {WORKSPACES.map(({ id, label, icon: Icon }, idx) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              id={`workspace-tab-${id}`}
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelect(id)}
              className={[
                "relative z-10 flex flex-1 items-center justify-center gap-2",
                "py-[7px] px-3",
                "rounded-[10px]",
                "text-[12.5px] font-semibold tracking-[0.02em]",
                "select-none transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C05C30]/60",
                isActive
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
              style={{ letterSpacing: "0.025em" }}
            >
              <Icon
                className={[
                  "h-3.5 w-3.5 shrink-0 transition-colors duration-200",
                  isActive ? "text-white/90" : "text-muted-foreground",
                ].join(" ")}
                strokeWidth={isActive ? 2.2 : 1.75}
              />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
`````

## File: src/components/ui/accordion-content.tsx
`````typescript
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

const AccordionContent = ({
  className,
  children,
  ref,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { AccordionContent };
`````

## File: src/components/ui/accordion-item.tsx
`````typescript
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

const AccordionItem = ({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
);
AccordionItem.displayName = "AccordionItem";

export { AccordionItem };
`````

## File: src/components/ui/accordion-trigger.tsx
`````typescript
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const AccordionTrigger = ({
  className,
  children,
  ref,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export { AccordionTrigger };
`````

## File: src/components/ui/accordion.tsx
`````typescript
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
`````

## File: src/components/ui/alert-description.tsx
`````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const AlertDescription = ({
  className,
  ref,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
);
AlertDescription.displayName = "AlertDescription";

export { AlertDescription };
`````

## File: src/components/ui/alert-dialog.tsx
`````typescript
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
`````

## File: src/components/ui/alert-title.tsx
`````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const AlertTitle = ({
  className,
  children,
  ref,
  ...props
}: React.ComponentProps<"h5">) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </h5>
);
AlertTitle.displayName = "AlertTitle";

export { AlertTitle };
`````

## File: src/components/ui/alert.tsx
`````typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
`````

## File: src/components/ui/aspect-ratio.tsx
`````typescript
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
`````

## File: src/components/ui/avatar.tsx
`````typescript
"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
`````

## File: src/components/ui/badge.tsx
`````typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
`````

## File: src/components/ui/breadcrumb.tsx
`````typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
`````

## File: src/components/ui/button.tsx
`````typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
`````

## File: src/components/ui/calendar.tsx
`````typescript
"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label,
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day,
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("size-4", className)} {...props} />;
          }

          if (orientation === "right") {
            return <ChevronRightIcon className={cn("size-4", className)} {...props} />;
          }

          return <ChevronDownIcon className={cn("size-4", className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
`````

## File: src/components/ui/card.tsx
`````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
`````

## File: src/components/ui/carousel.tsx
`````typescript
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
`````

## File: src/components/ui/chart.tsx
`````typescript
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>
        );
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload
            .filter((item) => item.type !== "none")
            .map((item, index) => {
              const key = `${nameKey || item.name || item.dataKey || "value"}`;
              const itemConfig = getPayloadConfigFromPayload(config, item, key);
              const indicatorColor = color || item.payload.fill || item.color;

              return (
                <div
                  key={item.dataKey}
                  className={cn(
                    "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                    indicator === "dot" && "items-center",
                  )}
                >
                  {formatter && item?.value !== undefined && item.name ? (
                    formatter(item.value, item.name, item, index, item.payload)
                  ) : (
                    <>
                      {itemConfig?.icon ? (
                        <itemConfig.icon />
                      ) : (
                        !hideIndicator && (
                          <div
                            className={cn(
                              "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                              {
                                "h-2.5 w-2.5": indicator === "dot",
                                "w-1": indicator === "line",
                                "w-0 border-[1.5px] border-dashed bg-transparent":
                                  indicator === "dashed",
                                "my-0.5": nestLabel && indicator === "dashed",
                              },
                            )}
                            style={
                              {
                                "--color-bg": indicatorColor,
                                "--color-border": indicatorColor,
                              } as React.CSSProperties
                            }
                          />
                        )
                      )}
                      <div
                        className={cn(
                          "flex flex-1 justify-between leading-none",
                          nestLabel ? "items-end" : "items-center",
                        )}
                      >
                        <div className="grid gap-1.5">
                          {nestLabel ? tooltipLabel : null}
                          <span className="text-muted-foreground">
                            {itemConfig?.label || item.name}
                          </span>
                        </div>
                        {item.value && (
                          <span className="font-mono font-medium tabular-nums text-foreground">
                            {item.value.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className,
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
`````

## File: src/components/ui/checkbox.tsx
`````typescript
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("grid place-content-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
`````

## File: src/components/ui/collapsible.tsx
`````typescript
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
`````

## File: src/components/ui/command.tsx
`````typescript
"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
`````

## File: src/components/ui/context-menu.tsx
`````typescript
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
`````

## File: src/components/ui/dialog.tsx
`````typescript
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
`````

## File: src/components/ui/drawer.tsx
`````typescript
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
`````

## File: src/components/ui/dropdown-menu.tsx
`````typescript
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
`````

## File: src/components/ui/form.tsx
`````typescript
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
`````

## File: src/components/ui/hover-card.tsx
`````typescript
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-hover-card-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
`````

## File: src/components/ui/input-otp-group.tsx
`````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const InputOTPGroup = ({
  className,
  ref,
  ...props
}: React.ComponentProps<"div">) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
);
InputOTPGroup.displayName = "InputOTPGroup";

export { InputOTPGroup };
`````

## File: src/components/ui/input-otp-separator.tsx
`````typescript
import * as React from "react";
import { Minus } from "lucide-react";

const InputOTPSeparator = ({
  ref,
  ...props
}: React.ComponentProps<"div">) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
);
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTPSeparator };
`````

## File: src/components/ui/input-otp-slot.tsx
`````typescript
import * as React from "react";
import { OTPInputContext } from "input-otp";

import { cn } from "@/lib/utils";

const InputOTPSlot = ({
  index,
  className,
  ref,
  ...props
}: React.ComponentProps<"div"> & { index: number }) => {
  const inputOTPContext = React.use(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
};
InputOTPSlot.displayName = "InputOTPSlot";

export { InputOTPSlot };
`````

## File: src/components/ui/input-otp.tsx
`````typescript
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName,
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
`````

## File: src/components/ui/input.tsx
`````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
`````

## File: src/components/ui/label.tsx
`````typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
`````

## File: src/components/ui/menubar.tsx
`````typescript
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
`````

## File: src/components/ui/navigation-menu.tsx
`````typescript
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
`````

## File: src/components/ui/pagination.tsx
`````typescript
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn("", className)} {...props} />,
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
`````

## File: src/components/ui/popover.tsx
`````typescript
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
`````

## File: src/components/ui/progress.tsx
`````typescript
"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
`````

## File: src/components/ui/radio-group.tsx
`````typescript
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
`````

## File: src/components/ui/resizable.tsx
`````typescript
import { GripVertical } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof Group>) => (
  <Group
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
}) => (
  <Separator
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
`````

## File: src/components/ui/scroll-area.tsx
`````typescript
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
`````

## File: src/components/ui/select.tsx
`````typescript
"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
`````

## File: src/components/ui/separator.tsx
`````typescript
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className,
    )}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
`````

## File: src/components/ui/sheet.tsx
`````typescript
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
`````

## File: src/components/ui/sidebar.tsx
`````typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open],
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";

    const contextValue = React.useMemo<SidebarContextProps>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className,
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  },
);
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Sidebar</SheetTitle>
              <SheetDescription>Displays the mobile sidebar.</SheetDescription>
            </SheetHeader>
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="group peer hidden text-sidebar-foreground md:block"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
          )}
        />
        <div
          className={cn(
            "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className,
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          "relative flex w-full flex-1 flex-col bg-background",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className,
      )}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="header"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="footer"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="content"
        className={cn(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="group"
        className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
        {...props}
      />
    );
  },
);
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  ),
);
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  ),
);
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    );
  },
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ ...props }, ref) => <li ref={ref} {...props} />,
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
`````

## File: src/components/ui/skeleton.tsx
`````typescript
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-primary/10", className)} {...props} />;
}

export { Skeleton };
`````

## File: src/components/ui/slider.tsx
`````typescript
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
`````

## File: src/components/ui/sonner.tsx
`````typescript
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
`````

## File: src/components/ui/switch.tsx
`````typescript
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
`````

## File: src/components/ui/table.tsx
`````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
));
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
`````

## File: src/components/ui/tabs.tsx
`````typescript
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
`````

## File: src/components/ui/textarea.tsx
`````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
`````

## File: src/components/ui/toggle-group.tsx
`````typescript
"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
`````

## File: src/components/ui/toggle.tsx
`````typescript
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
`````

## File: src/components/ui/tooltip.tsx
`````typescript
"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
`````

## File: src/hooks/use-auth.ts
`````typescript
import { useState, useCallback } from "react";
import { fetchApi } from "@/lib/api";
import {
  getAuthToken,
  getAuthUser,
  setAuth,
  clearAuth,
  isTokenValid,
  type AuthUser,
} from "@/lib/auth";

export type { AuthUser };

// Auth state is initialized synchronously from localStorage on app boot.
// isTokenValid() also auto-evicts expired tokens so stale sessions are never surfaced.
export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(() =>
    isTokenValid() ? getAuthUser() : null
  );
  const [token, setToken] = useState<string | null>(() =>
    isTokenValid() ? getAuthToken() : null
  );

  const login = useCallback(
    async (username: string, password: string) => {
      const data = await fetchApi<{ token: string; user: AuthUser }>(
        "/auth/login",
        {
          method: "POST",
          body: JSON.stringify({ username, password }),
        }
      );
      setAuth(data.token, data.user);
      setUser(data.user);
      setToken(data.token);
      return data;
    },
    []
  );

  const logout = useCallback(() => {
    clearAuth();
    setUser(null);
    setToken(null);
  }, []);

  return {
    user,
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };
}
`````

## File: src/hooks/use-devices.ts
`````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

// ── Types ──────────────────────────────────────────────────────────────────

export type DeviceRow = {
  id: number;
  device_code: string | null;
  name: string;
  model: string;
  type: "phone" | "tablet";
  status: "online" | "offline";
  battery: number;
  location: string;
  device_role: "IN" | "OUT";
  active_status: "active" | "inactive";
  last_sync: string;
  created_at: string;
};

export type CreateDevicePayload = {
  device_code: string;
  name: string;
  location?: string;
  device_role: "IN" | "OUT";
  pin: string;
  model?: string;
  type?: "phone" | "tablet";
  active_status?: "active" | "inactive";
};

// ── Queries / Mutations ────────────────────────────────────────────────────

export function useDevices() {
  return useQuery({
    queryKey: ["devices"],
    queryFn: () => fetchApi<DeviceRow[]>("/devices"),
    refetchInterval: 30000, // Background updates every 30s
  });
}

export function useCreateDevice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateDevicePayload) =>
      fetchApi<DeviceRow>("/devices", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["devices"] });
    },
  });
}

export function useUpdateDevice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Partial<CreateDevicePayload> }) =>
      fetchApi<DeviceRow>(`/devices/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["devices"] });
    },
  });
}

export function useDeleteDevice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      fetchApi<{ message: string }>(`/devices/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["devices"] });
    },
  });
}
`````

## File: src/hooks/use-master-data.ts
`````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

export type MasterDataItem = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

// Generic generator
function createMasterDataHooks(endpoint: string, queryKey: string) {
  return {
    useGetAll: () =>
      useQuery({
        queryKey: [queryKey],
        queryFn: () => fetchApi<MasterDataItem[]>(endpoint),
      }),

    useCreate: () => {
      const qc = useQueryClient();
      return useMutation({
        mutationFn: (name: string) =>
          fetchApi<MasterDataItem>(endpoint, {
            method: "POST",
            body: JSON.stringify({ name }),
          }),
        onSuccess: () => qc.invalidateQueries({ queryKey: [queryKey] }),
      });
    },

    useUpdate: () => {
      const qc = useQueryClient();
      return useMutation({
        mutationFn: ({ id, name }: { id: number; name: string }) =>
          fetchApi<MasterDataItem>(`${endpoint}/${id}`, {
            method: "PUT",
            body: JSON.stringify({ name }),
          }),
        onSuccess: () => qc.invalidateQueries({ queryKey: [queryKey] }),
      });
    },

    useDelete: () => {
      const qc = useQueryClient();
      return useMutation({
        mutationFn: (id: number) =>
          fetchApi<{ success: true }>(`${endpoint}/${id}`, {
            method: "DELETE",
          }),
        onSuccess: () => qc.invalidateQueries({ queryKey: [queryKey] }),
      });
    },
  };
}

export const CategoryApi = createMasterDataHooks("/categories", "categories");
export const ModelApi = createMasterDataHooks("/models", "models");
export const CustomerApi = createMasterDataHooks("/customers", "customers");
export const FactoryApi = createMasterDataHooks("/factories", "factories");
`````

## File: src/hooks/use-mesin.ts
`````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

export type Mesin = {
  id: number;
  machine_code: string;
  machine_name: string;
  description: string;
  factory?: string;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
};

export type CreateMesinPayload = {
  machineCode: string;
  machineName: string;
  description?: string;
  factory?: string;
  status: "active" | "inactive";
};

export function useMesin(search = "") {
  return useQuery({
    queryKey: ["mesin", search],
    queryFn: () =>
      fetchApi<Mesin[]>(
        `/mesin${search ? `?search=${encodeURIComponent(search)}` : ""}`
      ),
    staleTime: 1000 * 30,
  });
}

export function useCreateMesin() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateMesinPayload) =>
      fetchApi<Mesin>("/mesin", { method: "POST", body: JSON.stringify(payload) }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["mesin"] }),
  });
}

export function useUpdateMesin() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...payload }: CreateMesinPayload & { id: number }) =>
      fetchApi<Mesin>(`/mesin/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["mesin"] }),
  });
}

export function useToggleMesinStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      fetchApi<Mesin>(`/mesin/${id}/toggle`, { method: "PATCH" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["mesin"] }),
  });
}

export function useDeleteMesin() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      fetchApi<{ message: string }>(`/mesin/${id}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["mesin"] }),
  });
}
`````

## File: src/hooks/use-mobile.tsx
`````typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
`````

## File: src/hooks/use-privileges.ts
`````typescript
/**
 * use-privileges.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * React Query hooks for the QR Privilege Management system.
 * All calls include x-internal-key header (from Vite env, only available in
 * the admin dashboard which is already JWT-protected - never reaches stations).
 */
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAuthToken } from "@/lib/auth";

const API_BASE = "/api";
const INTERNAL_KEY = import.meta.env.VITE_INTERNAL_API_KEY || "";

// ── Station privilege info ─────────────────────────────────────────────────
export type StationPrivilegeInfo = {
  id: number;
  device_code: string;
  name: string;
  location: string;
  device_role: "IN" | "OUT";
  active_status: string;
  privilege_mode: "open" | "restricted";
  privilege_count: number;
};

// ── QR item (in the privilege list context) ────────────────────────────────
export type PrivilegeQrItem = {
  id: number;
  qr_id: string;
  part_name: string;
  factory: string;
  status: string;
  is_allowed: boolean;
};

export type StationPrivilegeDetail = {
  station_id: number;
  privilege_mode: "open" | "restricted";
  allowed_count: number;
  qr_list: PrivilegeQrItem[];
};

// ── Internal fetch helper ──────────────────────────────────────────────────
async function fetchPrivilegeApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAuthToken();

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-internal-key": INTERNAL_KEY,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers as Record<string, string>),
    },
  });

  const data = await response.json();
  if (!data.success) throw new Error(data.error || "Terjadi kesalahan.");
  return data.data;
}

// ═══════════════════════════════════════════════════════════════════════════
// [1] usePrivilegeStations - list all stations with privilege status
// ═══════════════════════════════════════════════════════════════════════════
export function usePrivilegeStations() {
  return useQuery<StationPrivilegeInfo[]>({
    queryKey: ["privilege-stations"],
    queryFn: () => fetchPrivilegeApi<StationPrivilegeInfo[]>("/privileges/stations"),
    staleTime: 30_000, // 30s - stations don't change often
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// [2] useStationPrivilegeDetail - QR list for a specific station
// ═══════════════════════════════════════════════════════════════════════════
export function useStationPrivilegeDetail(stationId: number | null) {
  return useQuery<StationPrivilegeDetail>({
    queryKey: ["privilege-station-detail", stationId],
    queryFn: () =>
      fetchPrivilegeApi<StationPrivilegeDetail>(`/privileges/station/${stationId}`),
    enabled: stationId !== null,
    staleTime: 10_000,
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// [3] useSetStationPrivileges - save/replace privileges for a station
// Supports multiple QR IDs per station
// ═══════════════════════════════════════════════════════════════════════════
export function useSetStationPrivileges() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ stationId, qrIds }: { stationId: number; qrIds: number[] }) =>
      fetchPrivilegeApi<{ station_id: number; allowed_count: number }>(
        `/privileges/station/${stationId}`,
        {
          method: "POST",
          body: JSON.stringify({ qr_ids: qrIds }),
        }
      ),
    onSuccess: (_data, vars) => {
      // Invalidate both the list and the specific station detail
      qc.invalidateQueries({ queryKey: ["privilege-stations"] });
      qc.invalidateQueries({ queryKey: ["privilege-station-detail", vars.stationId] });
    },
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// [4] useResetStationPrivileges - reset station to open access
// ═══════════════════════════════════════════════════════════════════════════
export function useResetStationPrivileges() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (stationId: number) =>
      fetchPrivilegeApi<{ station_id: number }>(
        `/privileges/station/${stationId}`,
        { method: "DELETE" }
      ),
    onSuccess: (_data, stationId) => {
      qc.invalidateQueries({ queryKey: ["privilege-stations"] });
      qc.invalidateQueries({ queryKey: ["privilege-station-detail", stationId] });
    },
  });
}
`````

## File: src/hooks/use-qr-process.ts
`````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

// ── Types ──────────────────────────────────────────────────────────────────

export type ProcessQrResult = {
  action: "SCAN_IN" | "SCAN_OUT";
  newStatus: "in" | "out";
  message: string;
  batchId: string;
  partName: string;
  factoryOrigin: string;
  value: number;
};

export type QrInfoResult = {
  batchId: string;
  partName: string;
  factoryOrigin: string;
  value: number;
  currentStatus: "in" | "out";
  nextAction: "SCAN_IN" | "SCAN_OUT";
  message: string;
  token: string;
};

export type ScanHistory = {
  id: number;
  batch_id: string | null;
  qr_id: string;
  label: string;
  factory: string;
  action: "SCAN_IN" | "SCAN_OUT";
  scanned_by: string;
  created_at: string;
};

// ── Process QR: toggle or force IN/OUT ────────────────────────────────────
// forceAction: "SCAN_IN" | "SCAN_OUT" → always that action
// forceAction: undefined → auto-toggle (original logic)
export function useProcessQr() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      token,
      forceAction,
    }: {
      token: string;
      forceAction?: "SCAN_IN" | "SCAN_OUT";
    }) =>
      fetchApi<ProcessQrResult>("/qr/process", {
        method: "POST",
        body: JSON.stringify({ token, forceAction }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qr-history"] });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["qr-codes"] });
      queryClient.invalidateQueries({ queryKey: ["scans", "recent"] });
      queryClient.invalidateQueries({ queryKey: ["stock"] });
      queryClient.invalidateQueries({ queryKey: ["stock-stats"] });
    },
  });
}

// ── QR Info: decode token + get current status ────────────────────────────
export function useQrInfo(token: string | null) {
  return useQuery({
    queryKey: ["qr-info", token],
    queryFn: () =>
      fetchApi<QrInfoResult>(`/qr/info?token=${encodeURIComponent(token!)}`),
    enabled: !!token,
  });
}

// ── QR Scan history - auto-refresh every 5s ──────────────────────────────
export function useQrHistory() {
  return useQuery({
    queryKey: ["qr-history"],
    queryFn: () => fetchApi<ScanHistory[]>("/qr/history"),
    refetchInterval: 5000,
  });
}
`````

## File: src/hooks/use-scan-sound.ts
`````typescript
/**
 * Scan sound hook - plays audio feedback for QR scan events.
 *
 * Sound mapping:
 *  - Scan attempt (input received)  → notification/info
 *  - Scan success                   → notification/success
 *  - Scan failed / any error        → notification/warning
 *
 * All sounds play at maximum volume (1.0) with no delay.
 * Uses react-sounds (backed by Howler.js) which pre-loads sounds so
 * playback starts in the exact same tick as the event callback fires.
 */
import { useSound } from "react-sounds";

const MAX_VOL = { volume: 1.0 };

export function useScanSound() {
  const { play: playInfo } = useSound("notification/info", MAX_VOL);
  const { play: playSuccess } = useSound("notification/success", MAX_VOL);
  const { play: playWarning } = useSound("notification/warning", MAX_VOL);

  return {
    /** Play when a scan attempt begins (QR detected / input received) */
    playInfo: () => void playInfo(MAX_VOL),
    /** Play when the scan result is a success */
    playSuccess: () => void playSuccess(MAX_VOL),
    /** Play when the scan fails or encounters any error */
    playWarning: () => void playWarning(MAX_VOL),
  };
}
`````

## File: src/hooks/use-scans.ts
`````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

export type ScanRecord = {
  id: number;
  qr_id: string;
  label: string;
  factory: string;
  scanned_by: string;
  created_at: string;
};

export function useRecentScans() {
  return useQuery({
    queryKey: ["scans", "recent"],
    queryFn: () => fetchApi<ScanRecord[]>("/scans/recent"),
  });
}

export function useCreateScan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (scanData: Partial<ScanRecord>) =>
      fetchApi<void>("/scans", {
        method: "POST",
        body: JSON.stringify(scanData),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["scans", "recent"] });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
`````

## File: src/hooks/use-station-scan.ts
`````typescript
/**
 * Station scan hook - wraps /api/qr/process using the STATION JWT.
 * Completely separate from useProcessQr which uses the main user session.
 * The station token is sent as a Bearer token in the Authorization header.
 */
import { useMutation } from "@tanstack/react-query";
import { getStationToken } from "@/lib/auth";
import type { ProcessQrResult } from "@/hooks/use-qr-process";

const API_BASE = "/api";

async function fetchStationApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getStationToken();
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const data = await response.json();
  if (!data.success) throw new Error(data.error || "Terjadi kesalahan.");
  return data.data;
}

export function useStationScan() {
  return useMutation({
    mutationFn: ({
      token,
      forceAction,
      partstats,
    }: {
      token: string;
      forceAction: "SCAN_IN" | "SCAN_OUT";
      partstats?: "reguler" | "bcp";
    }) =>
      fetchStationApi<ProcessQrResult>("/qr/process", {
        method: "POST",
        body: JSON.stringify({ token, forceAction, partstats }),
      }),
  });
}
`````

## File: src/hooks/use-tasks.ts
`````typescript
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

export type TaskRow = {
  id: number;
  task_id: string;
  title: string;
  type: "Scan In" | "Scan Out" | "QR Created" | "Audit";
  status: "completed" | "pending" | "failed";
  user: string;
  created_at: string;
  updated_at: string;
};

export function useTasks() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchApi<TaskRow[]>("/tasks"),
  });
}
`````

## File: src/hooks/use-teitei.ts
`````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

export type TeiteiItem = {
  id: number;
  masterPartId: number;
  teiteiValue: number;
  minVal?: number;
  qtyPerDay?: number;
  partNumber?: string;
  partName?: string;
  model?: string;
  factoryOrigin?: string;
};

export type MasterPartOption = {
  id: number;
  partNumber: string;
  partName: string;
  model: string;
  factoryOrigin: string;
};

export function useTeiteiList() {
  return useQuery({
    queryKey: ["teitei"],
    queryFn: () => fetchApi<TeiteiItem[]>("/teitei"),
  });
}

export function useTeiteiParts() {
  return useQuery({
    queryKey: ["teitei-parts"],
    queryFn: () => fetchApi<MasterPartOption[]>("/teitei/parts"),
  });
}

export function useCreateTeitei() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: {
      masterPartId: number;
      teiteiValue: number;
      minVal?: number;
      qtyPerDay?: number;
    }) =>
      fetchApi("/teitei", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["teitei"] });
      qc.invalidateQueries({ queryKey: ["teitei-parts"] });
    },
  });
}

export function useUpdateTeitei() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      teiteiValue,
      minVal,
      qtyPerDay,
    }: {
      id: number;
      teiteiValue: number;
      minVal?: number;
      qtyPerDay?: number;
    }) =>
      fetchApi(`/teitei/${id}`, {
        method: "PUT",
        body: JSON.stringify({ teiteiValue, minVal, qtyPerDay }),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["teitei"] }),
  });
}

export function useDeleteTeitei() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      fetchApi(`/teitei/${id}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["teitei"] }),
  });
}
`````

## File: src/hooks/use-theme.tsx
`````typescript
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "sugity-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return "dark"; // default to dark (current behavior)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(() => setThemeState((prev) => (prev === "dark" ? "light" : "dark")), []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
`````

## File: src/hooks/use-users.ts
`````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";
import { getAuthToken } from "@/lib/auth";

export type AppUser = {
  id: number;
  username: string;
  nik: string;
  role: "admin" | "operator" | "usertv";
  tv_factory?: string;
  tv_shift?: "A" | "B";
  tv_theme?: string;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
};

export type CreateUserPayload = {
  username: string;
  nik?: string;
  password?: string;
  role: "admin" | "operator" | "usertv";
  tv_factory?: string;
  tv_shift?: "A" | "B";
  tv_theme?: string;
  status: "active" | "inactive";
};

// Inject Authorization header for protected routes
function authFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken();
  return fetchApi<T>(endpoint, {
    ...options,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });
}

export function useUsers(search = "") {
  return useQuery({
    queryKey: ["users", search],
    queryFn: () =>
      authFetch<AppUser[]>(
        `/users${search ? `?search=${encodeURIComponent(search)}` : ""}`
      ),
    staleTime: 1000 * 30,
  });
}

export function useCreateUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateUserPayload) =>
      authFetch<AppUser>("/users", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] }),
  });
}

export function useUpdateUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...payload }: CreateUserPayload & { id: number }) =>
      authFetch<AppUser>(`/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] }),
  });
}

export function useDeleteUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      authFetch<{ message: string }>(`/users/${id}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] }),
  });
}
`````

## File: src/lib/api.ts
`````typescript
import { getAuthToken, getStationToken } from "./auth";

// Use a relative path so requests go through Vite's proxy.
// This means the server works whether accessed via localhost OR ngrok/LAN.
const API_BASE = "/api";

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE}${endpoint}`;

  // Use station token if it's a station route, otherwise user token
  const token = endpoint.startsWith("/qr/scan/") ? getStationToken() : getAuthToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options.headers as Record<string, string>,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || "Sebuah error terjadi, lapor jika error berkelanjutan.");
  }

  return data.data;
}
`````

## File: src/lib/auth.ts
`````typescript
// ── Auth token helpers (localStorage, no framework dependency) ───────────────

const AUTH_TOKEN_KEY = "sugity-auth-token";
const AUTH_USER_KEY  = "sugity-auth-user";

export type AuthUser = {
  id: number;
  username: string;
  role: string;
  tvFactory?: string;
  tvShift?: string;
  tvTheme?: string;
};

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

/**
 * Decode JWT payload using built-in atob - no external library.
 * Returns the `exp` field as milliseconds, or null if not present.
 */
function decodeTokenExpiry(token: string): number | null {
  try {
    const part = token.split(".")[1];
    if (!part) return null;
    // Handle URL-safe base64 variants
    const payload = JSON.parse(atob(part.replace(/-/g, "+").replace(/_/g, "/")));
    return typeof payload.exp === "number" ? payload.exp * 1000 : null;
  } catch {
    return null;
  }
}

/**
 * Returns true only if a token exists AND has not expired.
 * Auto-evicts the stale token from storage on expiry - keeps state clean.
 */
export function isTokenValid(): boolean {
  const token = getAuthToken();
  if (!token) return false;
  const expiry = decodeTokenExpiry(token);
  if (expiry !== null && Date.now() >= expiry) {
    clearAuth(); // auto-evict expired session - user is redirected by AuthGuard
    return false;
  }
  return true;
}

/** @deprecated Use isTokenValid() which also validates expiry. */
export function isAuthenticated(): boolean {
  return isTokenValid();
}

export function setAuth(token: string, user: AuthUser): void {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
}

export function getAuthUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  // Return null if session is expired (token was cleared by isTokenValid)
  if (!isTokenValid()) return null;
  const raw = localStorage.getItem(AUTH_USER_KEY);
  try { return raw ? (JSON.parse(raw) as AuthUser) : null; }
  catch { return null; }
}

export function clearAuth(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
}

// ─── Route access ─────────────────────────────────────────────────────────────
// ONLY /login is publicly accessible - every other route requires a valid token.
export const PUBLIC_PATHS = ["/login"];

// ─── Station session (SEPARATE from user auth) ────────────────────────────────
// Uses completely different localStorage keys - cannot interfere with user auth.

const STATION_TOKEN_KEY = "sugity-station-token";
const STATION_DEVICE_KEY = "sugity-station-device";

export type StationDevice = {
  id: number;
  device_code: string;
  name: string;
  device_role: "IN" | "OUT";
  location: string;
};

export function setStationAuth(token: string, device: StationDevice): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STATION_TOKEN_KEY, token);
  localStorage.setItem(STATION_DEVICE_KEY, JSON.stringify(device));
}

export function clearStationAuth(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STATION_TOKEN_KEY);
  localStorage.removeItem(STATION_DEVICE_KEY);
}

export function getStationToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STATION_TOKEN_KEY);
}

export function getStationDevice(): StationDevice | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STATION_DEVICE_KEY);
  try { return raw ? (JSON.parse(raw) as StationDevice) : null; }
  catch { return null; }
}

export function isStationTokenValid(): boolean {
  const token = getStationToken();
  if (!token) return false;
  // Reuse the same expiry-decode logic from the main token validator
  try {
    const part = token.split(".")[1];
    if (!part) return false;
    const payload = JSON.parse(atob(part.replace(/-/g, "+").replace(/_/g, "/")));
    if (typeof payload.exp === "number" && Date.now() >= payload.exp * 1000) {
      clearStationAuth();
      return false;
    }
    // Must be a station type token, not a user token
    return payload.type === "station";
  } catch {
    return false;
  }
}
`````

## File: src/lib/utils.ts
`````typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`````

## File: src/routes/category.tsx
`````typescript
import { createFileRoute } from "@tanstack/react-router";
import { MasterDataManagement } from "@/components/dashboard/MasterDataManagement";
import { CategoryApi } from "@/hooks/use-master-data";

export const Route = createFileRoute("/category")({
  head: () => ({
    meta: [
      { title: "Category Management - Sugity Creatives" },
      { name: "description", content: "Kelola data kategori parts" },
    ],
  }),
  component: () => (
    <MasterDataManagement
      title="Category"
      description="Kelola daftar kategori yang dapat dipilih pada saat pembuatan Master Part."
      api={CategoryApi}
    />
  ),
});
`````

## File: src/routes/customer.tsx
`````typescript
import { createFileRoute } from "@tanstack/react-router";
import { MasterDataManagement } from "@/components/dashboard/MasterDataManagement";
import { CustomerApi } from "@/hooks/use-master-data";

export const Route = createFileRoute("/customer")({
  head: () => ({
    meta: [
      { title: "Customer Management - Sugity Creatives" },
      { name: "description", content: "Kelola data customer" },
    ],
  }),
  component: () => (
    <MasterDataManagement
      title="Customer"
      description="Kelola daftar customer untuk pengiriman part."
      api={CustomerApi}
    />
  ),
});
`````

## File: src/routes/dashboard.tsx
`````typescript
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from "react";
import { getAuthUser, clearAuth } from "@/lib/auth";

// ─── Types ────────────────────────────────────────────────────────────────────

interface User {
    name: string;
    role: string;
}

interface Module {
    title: string;
    description: string;
    icon: string;
    route: string;
}

// ─── Default mock data ────────────────────────────────────────────────────────

const DEFAULT_MODULES: Module[] = [
    {
        title: "Stock Overview",
        description: "Monitor current resin stock levels and pallet inventory in real-time across all storage locations.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        route: "stock.index",
    },
    {
        title: "Scan History",
        description: "View full audit trail of all Scan IN / Scan OUT transactions with timestamps and operator details.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        route: "scan.history",
    },
    {
        title: "Reports",
        description: "Generate and export production reports by date range, material type, or station.",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        route: "#",
    },
    {
        title: "Reports",
        description: "Generate and export production reports by date range, material type, or station.",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        route: "#",
    },
    {
        title: "Reports",
        description: "Generate and export production reports by date range, material type, or station.",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        route: "#",
    },
    {
        title: "Reports",
        description: "Generate and export production reports by date range, material type, or station.",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        route: "#",
    },
];

// ─── System-theme detection hook ──────────────────────────────────────────────
function useSystemTheme(): boolean /* isDark */ {
    const [isDark, setIsDark] = useState<boolean>(() =>
        typeof window !== "undefined"
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
            : false
    );

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    return isDark;
}

// ─── Theme-aware AppLayout ────────────────────────────────────────────────────

function AppLayout({
    isDark,
    user,
    onLogout,
    children,
}: {
    isDark: boolean;
    user?: User | null;
    onLogout?: () => void;
    children: React.ReactNode;
}) {
    const styles = isDark
        ? {
            page:   { backgroundColor: "#1C1917" },
            nav:    { backgroundColor: "#242120", borderBottom: "1px solid #3A3532" },
            brand:  { color: "#E8724A" },
            footer: { backgroundColor: "#242120", borderTop: "1px solid #3A3532" },
            footerText: { color: "#57534E" },
        }
        : {};

    return (
        <div
            className={isDark ? "min-h-screen flex flex-col" : "bg-stone-50 min-h-screen flex flex-col"}
            style={{ fontFamily: "'Inter', sans-serif", ...styles.page }}
        >
            <nav className={isDark ? "" : "bg-white border-b border-stone-200"} style={isDark ? styles.nav : {}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span
                                className={isDark ? "text-xl font-bold uppercase tracking-wider" : "text-xl font-bold text-orange-700 uppercase tracking-wider"}
                                style={isDark ? styles.brand : {}}
                            >
                                Resin Production System
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            {user ? (
                                <>
                                    <div className="flex flex-col items-end">
                                        <span
                                            className={isDark ? "text-sm font-semibold" : "text-sm font-semibold text-stone-700"}
                                            style={isDark ? { color: "#FAFAF9" } : {}}
                                        >
                                            {user.name}
                                        </span>
                                        <span
                                            className={isDark ? "text-xs uppercase tracking-tighter" : "text-xs text-stone-500 uppercase tracking-tighter"}
                                            style={isDark ? { color: "#78716C" } : {}}
                                        >
                                            {user.role}
                                        </span>
                                    </div>
                                    <button
                                        onClick={onLogout}
                                        className={isDark ? "px-3 py-1.5 rounded-md text-sm font-medium border transition duration-150" : "bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-md text-sm font-medium border border-red-200 transition duration-150"}
                                        style={isDark ? { backgroundColor: "#2D1A1A", color: "#F87171", borderColor: "#4A2525" } : {}}
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    className={isDark ? "px-4 py-2 rounded-md text-sm font-medium text-white transition duration-150" : "bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150"}
                                    style={isDark ? { backgroundColor: "#C05C30" } : {}}
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-grow py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
            </main>

            <footer
                className={isDark ? "py-6" : "bg-white border-t border-stone-200 py-6"}
                style={isDark ? styles.footer : {}}
            >
                <div
                    className={isDark ? "max-w-7xl mx-auto px-4 text-center text-sm" : "max-w-7xl mx-auto px-4 text-center text-stone-400 text-sm"}
                    style={isDark ? styles.footerText : {}}
                >
                    &copy; {new Date().getFullYear()} Resin Stock Counting System. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

// ─── Theme-aware module card ──────────────────────────────────────────────────

function ModuleCard({ module, href, isDark }: { module: Module; href: string; isDark: boolean }) {
    const [hovered, setHovered] = useState(false);
    const isDisabled = module.route === "#";

    if (!isDark) {
        return (
            <div
                className="bg-white overflow-hidden shadow-sm rounded-xl border border-stone-100 hover:shadow-md hover:border-orange-200 transition-all duration-300 group"
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-orange-50 text-orange-600 rounded-lg group-hover:bg-orange-700 group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={module.icon} />
                            </svg>
                        </div>
                        {isDisabled && (
                            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 bg-stone-50 px-2 py-1 rounded">Soon</span>
                        )}
                    </div>
                    <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-orange-700 transition-colors">{module.title}</h3>
                    <p className="text-sm text-stone-500 mb-6 leading-relaxed">{module.description}</p>
                    <a
                        href={href}
                        className={`inline-flex items-center text-sm font-bold ${isDisabled ? "text-stone-300 cursor-not-allowed" : "text-orange-700 hover:text-orange-900"}`}
                        {...(isDisabled ? { onClick: (e) => e.preventDefault() } : {})}
                    >
                        ACCESS MODULE
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div
            className="overflow-hidden rounded-xl transition-all duration-300"
            style={{
                backgroundColor: "#242120",
                border: `1px solid ${hovered && !isDisabled ? "#6B3D27" : "#3A3532"}`,
                boxShadow: hovered && !isDisabled ? "0 4px 20px 0 rgba(0,0,0,0.5)" : "0 1px 3px 0 rgba(0,0,0,0.3)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div
                        className="p-3 rounded-lg transition-colors duration-300"
                        style={{
                            backgroundColor: hovered && !isDisabled ? "#C05C30" : "#2A1A0E",
                            color: hovered && !isDisabled ? "#FFFFFF" : "#FB923C",
                        }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={module.icon} />
                        </svg>
                    </div>
                    {isDisabled && (
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: "#57534E", backgroundColor: "#1E1C1A" }}>
                            Soon
                        </span>
                    )}
                </div>
                <h3 className="text-lg font-bold mb-2 transition-colors" style={{ color: hovered && !isDisabled ? "#FB923C" : "#FAFAF9" }}>
                    {module.title}
                </h3>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: "#78716C" }}>{module.description}</p>
                <a
                    href={href}
                    className="inline-flex items-center text-sm font-bold"
                    style={{ color: isDisabled ? "#3D3935" : "#E8724A", cursor: isDisabled ? "not-allowed" : "pointer" }}
                    {...(isDisabled ? { onClick: (e) => e.preventDefault() } : {})}
                >
                    ACCESS MODULE
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

// ─── Theme-aware IndexContent ─────────────────────────────────────────────────

function IndexContent({
    modules,
    isDark,
    onOpenStation,
    resolveRoute,
}: {
    modules: Module[];
    isDark: boolean;
    onOpenStation?: () => void;
    resolveRoute?: (name: string) => string;
}) {
    const href = (route: string) =>
        route === "#" ? "#" : resolveRoute ? resolveRoute(route) : `/${route.replace(/\./g, "/")}`;

    return (
        <>
            {/* Hero card */}
            <div
                className={isDark ? "rounded-2xl overflow-hidden mb-12" : "bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden mb-12"}
                style={isDark ? { backgroundColor: "#242120", border: "1px solid #3A3532", boxShadow: "0 1px 3px 0 rgba(0,0,0,0.4)" } : {}}
            >
                <div className="flex flex-col md:flex-row">
                    <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                        <div
                            className={isDark ? "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit" : "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-50 text-orange-700 mb-4 w-fit"}
                            style={isDark ? { backgroundColor: "#2A1A0E", color: "#FB923C" } : {}}
                        >
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: isDark ? "#F97316" : undefined }} />
                                <span className={isDark ? "" : "relative inline-flex rounded-full h-2 w-2 bg-orange-600"} style={isDark ? { position: "relative", display: "inline-flex", borderRadius: "9999px", height: "8px", width: "8px", backgroundColor: "#EA7744" } : {}} />
                            </span>
                            Operator Area
                        </div>
                        <h1 className={isDark ? "text-4xl font-extrabold mb-4 tracking-tight" : "text-4xl font-extrabold text-stone-900 mb-4 tracking-tight"} style={isDark ? { color: "#FAFAF9" } : {}}>
                            Workstation Terminal
                        </h1>
                        <p className={isDark ? "text-lg mb-8 max-w-lg" : "text-lg text-stone-500 mb-8 max-w-lg"} style={isDark ? { color: "#A8A29E" } : {}}>
                            Gunakan modul ini pada Mini PC Station untuk melakukan proses Scan IN dan Scan OUT pallet resin secara real-time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={href("station.login")}
                                onClick={onOpenStation}
                                className={isDark ? "inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white transition-all duration-300 transform hover:-translate-y-1" : "inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-orange-700 hover:bg-orange-800 shadow-lg hover:shadow-orange-600/30 transition-all duration-300 transform hover:-translate-y-1"}
                                style={isDark ? { backgroundColor: "#C05C30", boxShadow: "0 4px 24px 0 rgba(192,92,48,0.35)" } : {}}
                            >
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                                OPEN STATION LOGIN
                            </a>
                        </div>
                    </div>

                    <div
                        className={isDark ? "hidden md:flex md:w-1/3 p-12 items-center justify-center" : "hidden md:flex md:w-1/3 bg-stone-50 border-l border-stone-100 p-12 items-center justify-center"}
                        style={isDark ? { backgroundColor: "#1E1C1A", borderLeft: "1px solid #3A3532" } : {}}
                    >
                        <div style={{ color: isDark ? "#3D3935" : undefined }} className={!isDark ? "text-stone-200" : ""}>
                            <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section header */}
            <div className="flex items-center space-x-4 mb-8">
                <h2 className={isDark ? "text-2xl font-bold whitespace-nowrap" : "text-2xl font-bold text-stone-800"} style={isDark ? { color: "#E7E5E4" } : {}}>
                    Management &amp; Analytics
                </h2>
                <div className={isDark ? "flex-grow h-px" : "flex-grow h-px bg-stone-200"} style={isDark ? { backgroundColor: "#3A3532" } : {}} />
            </div>

            {/* Module cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {modules.map((module, idx) => (
                    <ModuleCard key={idx} module={module} href={href(module.route)} isDark={isDark} />
                ))}
            </div>
        </>
    );
}

// ─── Exported Landing Page (used by index.tsx) ─────────────────────────────────
export function DashboardLandingPage() {
    const isDark = useSystemTheme();
    // In landing mode (unauthenticated), user is explicitly null
    return (
        <AppLayout isDark={isDark} user={null}>
            <IndexContent
                modules={DEFAULT_MODULES}
                isDark={isDark}
                onOpenStation={() => console.log("Station opened")}
            />
        </AppLayout>
    );
}

// ─── Route Definition ──────────────────────────────────────────────────────────
// Direct visits to /dashboard just redirect to / (which handles the dual-page logic)
export const Route = createFileRoute('/dashboard')({
    component: RouteComponent,
})

function RouteComponent() {
    if (typeof window !== "undefined") {
        window.location.replace("/");
    }
    return null;
}
`````

## File: src/routes/factory.tsx
`````typescript
import { createFileRoute } from "@tanstack/react-router";
import { MasterDataManagement } from "@/components/dashboard/MasterDataManagement";
import { FactoryApi } from "@/hooks/use-master-data";

export const Route = createFileRoute("/factory")({
  head: () => ({
    meta: [
      { title: "Factory Management - Sugity Creatives" },
      { name: "description", content: "Kelola data factory origin" },
    ],
  }),
  component: () => (
    <MasterDataManagement
      title="Factory Origin"
      description="Kelola daftar pabrik/factory asal untuk part dan pembuatan QR code."
      api={FactoryApi}
    />
  ),
});
`````

## File: src/routes/login.tsx
`````typescript
import { useState, useCallback } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { Loader2, AlertCircle, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login - Sugity Creatives" },
      { name: "description", content: "Masuk ke sistem inventory Sugity" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      setIsLoading(true);
      try {
        const result = await login(username.trim(), password);
        const u = result.user;
        if (u.role === "usertv") {
          const fac = encodeURIComponent(u.tvFactory || "");
          const shift = encodeURIComponent(u.tvShift || "A");
          const theme = encodeURIComponent(u.tvTheme || "default");
          window.location.replace(`/tv?fac=${fac}&shift=${shift}&theme=${theme}`);
        } else {
          window.location.replace("/");
        }
      } catch (err) {
        setError((err as Error).message || "Login gagal. Coba lagi.");
        setIsLoading(false);
      }
    },
    [username, password, login]
  );

  return (
    /* page wrapper - light gray bg, detects theme via CSS variable */
    <div
      className="min-h-screen flex flex-col items-center justify-between py-10 px-4"
      style={{ backgroundColor: "var(--login-bg, #F1F1F1)" }}
    >
      {/* spacer top */}
      <div />

      {/* ── Card ── */}
      <div
        className="w-full max-w-md rounded-2xl shadow-sm p-8 sm:p-10"
        style={{ backgroundColor: "var(--login-card, #FFFFFF)" }}
      >
        <h1
          className="text-2xl font-semibold text-center mb-7 tracking-tight"
          style={{ color: "var(--login-text, #1F2937)" }}
        >
          Users Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Alamat Surel / NIK */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="input-username"
              className="text-sm font-medium"
              style={{ color: "var(--login-label, #374151)" }}
            >
              Alamat Surel / NIK
            </label>
            <input
              id="input-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Contoh: scanner1"
              required
              className="h-11 w-full rounded-lg border px-4 text-sm outline-none transition-all"
              style={{
                borderColor: "var(--login-border, #D1D5DB)",
                backgroundColor: "var(--login-input-bg, #FFFFFF)",
                color: "var(--login-text, #1F2937)",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#c05c30")}
              onBlur={(e) =>
                (e.currentTarget.style.borderColor =
                  "var(--login-border, #D1D5DB)")
              }
            />
          </div>

          {/* Kata Sandi */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="input-password"
              className="text-sm font-medium"
              style={{ color: "var(--login-label, #374151)" }}
            >
              Kata Sandi
            </label>
            <div className="relative">
              <input
                id="input-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="h-11 w-full rounded-lg border px-4 pr-11 text-sm outline-none transition-all"
                style={{
                  borderColor: "var(--login-border, #D1D5DB)",
                  backgroundColor: "var(--login-input-bg, #FFFFFF)",
                  color: "var(--login-text, #1F2937)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#c05c30")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor =
                    "var(--login-border, #D1D5DB)")
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2.5 text-sm text-red-600">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {/* Ayo Masuk */}
          <button
            id="btn-ayo-masuk"
            type="submit"
            disabled={isLoading}
            className="h-11 w-full rounded-lg text-sm font-semibold text-white transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#C07060" }}
            onMouseEnter={(e) =>
              !isLoading &&
              (e.currentTarget.style.backgroundColor = "#a85c4e")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#C07060")
            }
          >
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            Ayo Masuk
          </button>

          {/* Kembali Ke Portal */}
          <Link
            id="btn-kembali-portal"
            to="/"
            className="h-11 w-full rounded-lg text-sm font-semibold text-center flex items-center justify-center transition-all"
            style={{
              backgroundColor: "var(--login-secondary-btn, #E5E7EB)",
              color: "var(--login-secondary-text, #374151)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--login-secondary-hover, #D1D5DB)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--login-secondary-btn, #E5E7EB)")
            }
          >
            Kembali Ke Portal
          </Link>
        </form>
      </div>

      {/* ── Footer ── */}
      <p
        className="text-xs text-center"
        style={{ color: "var(--login-footer, #9CA3AF)" }}
      >
        Copyright @2026 Sugity Integrated Systems
      </p>
    </div>
  );
}
`````

## File: src/routes/master-data/index.tsx
`````typescript
import { useState, useCallback } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Package,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  useMasterParts,
  useDeleteMasterPart,
  type MasterPart,
} from "@/hooks/use-master-parts";

export const Route = createFileRoute("/master-data/")({
  head: () => ({
    meta: [
      { title: "Master Data - Sugity Creatives" },
      { name: "description", content: "Kelola Data Master Part" },
    ],
  }),
  component: MasterDataPage,
});

function MasterDataPage() {
  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<MasterPart | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const { data: parts = [], isLoading } = useMasterParts(search);
  const deletePart = useDeleteMasterPart();

  const confirmDelete = useCallback(
    (part: MasterPart) => {
      setDeleteError(null);
      setDeleteTarget(part);
    },
    []
  );

  const handleDelete = useCallback(() => {
    if (!deleteTarget) return;
    deletePart.mutate(deleteTarget.id, {
      onSuccess: () => setDeleteTarget(null),
      onError: (e) => setDeleteError(e.message),
    });
  }, [deleteTarget, deletePart]);

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Master Parts List
          </span>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Kelola Data Master Part
          </h1>
        </div>

        {/* Search + CTA */}
        <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:gap-4">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="search-master-part"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari Nomor Part, Nama atau Model nya"
              className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:border-[#c05c30]/60 dark:bg-card-elevated"
            />
          </div>
          <Link
            to="/master-data/create"
            id="btn-buat-part"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#c05c30] px-5 py-2.5 text-[13.5px] font-semibold text-white transition-smooth hover:brightness-110 active:scale-[0.97]"
          >
            <Plus className="h-4 w-4" />
            Buat Part Baru
          </Link>
        </div>

        {/* Table card */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                  {["Image", "Part Number", "Part Name", "Model / Category", "Status", "Actions"].map(
                    (col) => (
                      <th
                        key={col}
                        className={`border-b border-border bg-card-elevated/50 px-4 py-3.5 font-semibold ${col === "Actions" ? "text-right" : ""}`}
                      >
                        {col}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-14 text-center">
                      <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
                    </td>
                  </tr>
                ) : parts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-14 text-center text-sm text-muted-foreground">
                      {search
                        ? `Tidak ada part yang cocok dengan "${search}"`
                        : "Belum ada master part. Klik Buat Part Baru untuk memulai."}
                    </td>
                  </tr>
                ) : (
                  parts.map((part) => (
                    <PartRow
                      key={part.id}
                      part={part}
                      onDelete={confirmDelete}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete confirmation dialog */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
              <Trash2 className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              Hapus Part?
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                {deleteTarget.part_number}
              </span>{" "}
              - {deleteTarget.part_name} akan dihapus secara permanen.
            </p>
            {deleteError && (
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {deleteError}
              </div>
            )}
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setDeleteTarget(null)}
                className="rounded-xl border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-smooth hover:bg-accent"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                disabled={deletePart.isPending}
                className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-smooth hover:bg-red-600 disabled:opacity-50"
              >
                {deletePart.isPending && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

// ── Part table row ─────────────────────────────────────────────────────────
function PartRow({
  part,
  onDelete,
}: {
  part: MasterPart;
  onDelete: (p: MasterPart) => void;
}) {
  return (
    <tr className="group transition-smooth hover:bg-card-elevated/40">
      {/* Image */}
      <td className="border-b border-border/60 px-4 py-3.5">
        {part.image_base64 ? (
          <img
            src={part.image_base64}
            alt={part.part_name}
            className="h-12 w-12 rounded-lg object-cover border border-border"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            <Package className="h-5 w-5" />
          </div>
        )}
      </td>

      {/* Part Number */}
      <td className="border-b border-border/60 px-4 py-3.5">
        <span className="font-mono text-[13px] font-semibold text-[#c05c30]">
          {part.part_number}
        </span>
      </td>

      {/* Part Name */}
      <td className="border-b border-border/60 px-4 py-3.5">
        <div className="text-[13.5px] font-medium text-foreground">
          {part.part_name}
        </div>
        {part.customer && (
          <div className="text-[11px] text-muted-foreground">{part.customer}</div>
        )}
      </td>

      {/* Model / Category */}
      <td className="border-b border-border/60 px-4 py-3.5">
        <div className="text-[13.5px] font-medium text-foreground">
          {part.model || "-"}
        </div>
        {part.category && (
          <div className="text-[11px] italic text-muted-foreground">
            {part.category}
          </div>
        )}
      </td>

      {/* Status */}
      <td className="border-b border-border/60 px-4 py-3.5">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
            part.status === "active"
              ? "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {part.status === "active" ? "Active" : "Inactive"}
        </span>
      </td>

      {/* Actions */}
      <td className="border-b border-border/60 px-4 py-3.5 text-right">
        <div className="inline-flex items-center gap-1">
          <Link
            to="/master-data/create"
            search={{ editId: part.id }}
            id={`btn-edit-${part.id}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#c05c30] transition-smooth hover:bg-[#c05c30]/10"
            title="Edit"
          >
            <Pencil className="h-4 w-4" />
          </Link>
          <button
            id={`btn-delete-${part.id}`}
            onClick={() => onDelete(part)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-smooth hover:bg-destructive/10 hover:text-destructive"
            title="Hapus"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
`````

## File: src/routes/mesin/create.tsx
`````typescript
import { useState, useCallback, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { ArrowLeft, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useCreateMesin, useUpdateMesin, useMesin } from "@/hooks/use-mesin";
import { FactoryApi } from "@/hooks/use-master-data";
import { useTvDashboard } from "@/hooks/use-tv-dashboard";
import { MinimumStockGrid } from "@/components/mesin/MinimumStockGrid";
import "@/routes/tv.css";

const searchSchema = z.object({
  editId: z.number().optional(),
});

export const Route = createFileRoute("/mesin/create")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Tambah Mesin - Sugity Creatives" },
      { name: "description", content: "Tambah atau edit data mesin" },
    ],
  }),
  component: CreateMesinPage,
});

const INPUT =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:border-[#c05c30]/60 dark:bg-card-elevated";

const SELECT =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-smooth focus:border-[#c05c30]/60 appearance-none cursor-pointer dark:bg-card-elevated";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-foreground">
        {label}
        {required && <span className="ml-0.5 text-[#c05c30]"> *</span>}
      </label>
      {children}
    </div>
  );
}

function CreateMesinPage() {
  const navigate = useNavigate();
  const { editId } = Route.useSearch();
  const isEdit = !!editId;

  const { data: mesinList = [] } = useMesin();
  const editMesin = isEdit ? mesinList.find((m) => m.id === editId) : null;

  const createMesin = useCreateMesin();
  const updateMesin = useUpdateMesin();

  const [machineCode, setMachineCode] = useState("");
  const [machineName, setMachineName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");
  const [factory, setFactory] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { data: factories = [] } = FactoryApi.useGetAll();
  const { data: stockPreview } = useTvDashboard(factory, "A", !!factory);

  // Pre-fill for edit mode
  useEffect(() => {
    if (editMesin) {
      setMachineCode(editMesin.machine_code);
      setMachineName(editMesin.machine_name);
      setDescription(editMesin.description ?? "");
      setStatus(editMesin.status);
      setFactory(editMesin.factory ?? "");
    }
  }, [editMesin]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitError(null);

      const payload = {
        machineCode: machineCode.trim(),
        machineName: machineName.trim(),
        description: description.trim(),
        factory: factory.trim(),
        status,
      };

      if (isEdit && editId) {
        updateMesin.mutate(
          { id: editId, ...payload },
          {
            onSuccess: () => {
              setSuccess(true);
              setTimeout(() => navigate({ to: "/mesin" }), 900);
            },
            onError: (err) => setSubmitError(err.message),
          }
        );
      } else {
        createMesin.mutate(payload, {
          onSuccess: () => {
            setSuccess(true);
            setTimeout(() => navigate({ to: "/mesin" }), 900);
          },
          onError: (err) => setSubmitError(err.message),
        });
      }
    },
    [machineCode, machineName, description, factory, status, isEdit, editId, createMesin, updateMesin, navigate]
  );

  const isPending = createMesin.isPending || updateMesin.isPending;

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-3xl animate-in fade-in duration-300">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {isEdit ? "Edit Mesin" : "Tambah Mesin"}
            </span>
            <h1 className="mt-0.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {isEdit ? "Edit Data Mesin" : "Add New Machine"}
            </h1>
          </div>
          <Link
            to="/mesin"
            className="text-sm font-semibold text-[#c05c30] transition-smooth hover:opacity-80"
          >
            Back to List
          </Link>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          {/* Row 1: Machine Code + Machine Name */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Machine Code" required>
              <input
                id="input-machine-code"
                type="text"
                value={machineCode}
                onChange={(e) => setMachineCode(e.target.value)}
                placeholder="e.g. MC#6"
                required
                className={INPUT}
              />
            </Field>

            <Field label="Machine Name" required>
              <input
                id="input-machine-name"
                type="text"
                value={machineName}
                onChange={(e) => setMachineName(e.target.value)}
                placeholder="e.g. Quarter Trim Machine #6"
                required
                className={INPUT}
              />
            </Field>
          </div>

          {/* Row 2: Description - full width */}
          <div className="mt-5">
            <Field label="Description">
              <input
                id="input-description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Optional"
                className={INPUT}
              />
            </Field>
          </div>

          {/* Row 3: Factory + Status */}
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Factory" required>
              <div className="relative">
                <select
                  id="input-factory"
                  value={factory}
                  onChange={(e) => setFactory(e.target.value)}
                  required
                  className={SELECT}
                >
                  <option value="">Pilih factory…</option>
                  {factories.map((f) => (
                    <option key={f.id} value={f.name}>
                      {f.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  ▾
                </div>
              </div>
            </Field>

            <Field label="Status" required>
              <div className="relative">
                <select
                  id="input-status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as "active" | "inactive")}
                  className={SELECT}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  ▾
                </div>
              </div>
            </Field>
          </div>

          {factory && (
            <div className="mt-8 rounded-2xl border border-border bg-card-elevated/30 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Minimum Stock / Machine
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Mesin untuk factory <strong>{factory}</strong> - status berdasarkan Stok Jam.
              </p>
              <MinimumStockGrid
                machines={stockPreview?.machines ?? []}
                compact
              />
            </div>
          )}

          {/* Error */}
          {submitError && (
            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 text-sm text-destructive">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {submitError}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              Mesin berhasil {isEdit ? "diperbarui" : "disimpan"}! Mengalihkan…
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex justify-end gap-3">
            <Link
              to="/mesin"
              className="inline-flex items-center rounded-xl border border-border bg-card-elevated px-5 py-2.5 text-sm font-semibold text-foreground transition-smooth hover:bg-accent"
            >
              Cancel
            </Link>
            <button
              id="btn-save-mesin"
              type="submit"
              disabled={isPending || success}
              className="inline-flex items-center gap-2 rounded-xl bg-[#c05c30] px-6 py-2.5 text-sm font-bold text-white transition-smooth hover:brightness-110 disabled:opacity-50"
            >
              {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              {isEdit ? "Update Machine" : "Save Machine"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
`````

## File: src/routes/mesin/index.tsx
`````typescript
import { useState, useCallback } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  CirclePlay,
  Loader2,
  AlertCircle,
  MonitorCog,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  useMesin,
  useDeleteMesin,
  useToggleMesinStatus,
  type Mesin,
} from "@/hooks/use-mesin";

export const Route = createFileRoute("/mesin/")({
  head: () => ({
    meta: [
      { title: "Mesin Management - Sugity Creatives" },
      { name: "description", content: "Kelola Data Mesin" },
    ],
  }),
  component: MesinPage,
});

function MesinPage() {
  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Mesin | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const { data: mesinList = [], isLoading } = useMesin(search);
  const deleteMesin = useDeleteMesin();
  const toggleStatus = useToggleMesinStatus();

  const confirmDelete = useCallback((m: Mesin) => {
    setDeleteError(null);
    setDeleteTarget(m);
  }, []);

  const handleDelete = useCallback(() => {
    if (!deleteTarget) return;
    deleteMesin.mutate(deleteTarget.id, {
      onSuccess: () => setDeleteTarget(null),
      onError: (e) => setDeleteError(e.message),
    });
  }, [deleteTarget, deleteMesin]);

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Machine Management
          </span>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Kelola Data Mesin
          </h1>
        </div>

        {/* Search + CTA */}
        <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:gap-4">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="search-mesin"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari Kode Mesin atau Namanya..."
              className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:border-[#c05c30]/60 dark:bg-card-elevated"
            />
          </div>
          <Link
            to="/mesin/create"
            id="btn-tambah-mesin"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#c05c30] px-5 py-2.5 text-[13.5px] font-semibold text-white transition-smooth hover:brightness-110 active:scale-[0.97]"
          >
            <Plus className="h-4 w-4" />
            Tambah Mesin
          </Link>
        </div>

        {/* Table card */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                  {["Machine Code", "Machine Name", "Description", "Status", "Actions"].map(
                    (col) => (
                      <th
                        key={col}
                        className={`border-b border-border bg-card-elevated/50 px-5 py-3.5 font-semibold ${col === "Actions" ? "text-right" : ""}`}
                      >
                        {col}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-14 text-center">
                      <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
                    </td>
                  </tr>
                ) : mesinList.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-14 text-center text-sm text-muted-foreground">
                      {search
                        ? `Tidak ada mesin yang cocok dengan "${search}"`
                        : (
                          <div className="flex flex-col items-center gap-3">
                            <MonitorCog className="h-10 w-10 text-muted-foreground/40" />
                            <span>Belum ada data mesin. Klik <strong>Tambah Mesin</strong> untuk memulai.</span>
                          </div>
                        )}
                    </td>
                  </tr>
                ) : (
                  mesinList.map((m) => (
                    <MesinRow
                      key={m.id}
                      mesin={m}
                      onDelete={confirmDelete}
                      onToggle={() => toggleStatus.mutate(m.id)}
                      isToggling={toggleStatus.isPending}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete confirmation dialog */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
              <Trash2 className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">Hapus Mesin?</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{deleteTarget.machine_code}</span>{" "}
              - {deleteTarget.machine_name} akan dihapus secara permanen.
            </p>
            {deleteError && (
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {deleteError}
              </div>
            )}
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setDeleteTarget(null)}
                className="rounded-xl border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-smooth hover:bg-accent"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                disabled={deleteMesin.isPending}
                className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-smooth hover:bg-red-600 disabled:opacity-50"
              >
                {deleteMesin.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

// ── Mesin table row ────────────────────────────────────────────────────────
function MesinRow({
  mesin,
  onDelete,
  onToggle,
  isToggling,
}: {
  mesin: Mesin;
  onDelete: (m: Mesin) => void;
  onToggle: () => void;
  isToggling: boolean;
}) {
  return (
    <tr className="group transition-smooth hover:bg-card-elevated/40">
      {/* Machine Code */}
      <td className="border-b border-border/60 px-5 py-4">
        <span className="font-mono text-[13px] font-bold text-blue-500 dark:text-blue-400">
          {mesin.machine_code}
        </span>
      </td>

      {/* Machine Name */}
      <td className="border-b border-border/60 px-5 py-4">
        <span className="text-[13.5px] font-medium text-foreground">
          {mesin.machine_name}
        </span>
      </td>

      {/* Description */}
      <td className="border-b border-border/60 px-5 py-4 text-muted-foreground">
        <span className="text-[13px]">
          {mesin.description || "-"}
        </span>
      </td>

      {/* Status */}
      <td className="border-b border-border/60 px-5 py-4">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
            mesin.status === "active"
              ? "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {mesin.status === "active" ? "Active" : "Inactive"}
        </span>
      </td>

      {/* Actions */}
      <td className="border-b border-border/60 px-5 py-4 text-right">
        <div className="inline-flex items-center gap-1">
          {/* Edit */}
          <Link
            to="/mesin/create"
            search={{ editId: mesin.id }}
            id={`btn-edit-mesin-${mesin.id}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-blue-500 dark:text-blue-400 transition-smooth hover:bg-blue-500/10"
            title="Edit"
          >
            <Pencil className="h-4 w-4" />
          </Link>
          {/* Toggle status */}
          <button
            id={`btn-toggle-mesin-${mesin.id}`}
            onClick={onToggle}
            disabled={isToggling}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-smooth disabled:opacity-50 ${
              mesin.status === "active"
                ? "text-emerald-500 hover:bg-emerald-500/10"
                : "text-muted-foreground hover:bg-accent"
            }`}
            title={mesin.status === "active" ? "Nonaktifkan" : "Aktifkan"}
          >
            <CirclePlay className="h-4 w-4" />
          </button>
          {/* Delete */}
          <button
            id={`btn-delete-mesin-${mesin.id}`}
            onClick={() => onDelete(mesin)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-red-400 transition-smooth hover:bg-red-500/10 hover:text-red-500"
            title="Hapus"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
`````

## File: src/routes/model.tsx
`````typescript
import { createFileRoute } from "@tanstack/react-router";
import { MasterDataManagement } from "@/components/dashboard/MasterDataManagement";
import { ModelApi } from "@/hooks/use-master-data";

export const Route = createFileRoute("/model")({
  head: () => ({
    meta: [
      { title: "Model Management - Sugity Creatives" },
      { name: "description", content: "Kelola data model parts" },
    ],
  }),
  component: () => (
    <MasterDataManagement
      title="Model"
      description="Kelola daftar model mesin atau kendaraan."
      api={ModelApi}
    />
  ),
});
`````

## File: src/routes/qr-privileges.tsx
`````typescript
import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Search, X, ChevronRight, ChevronLeft, Loader2, CheckCircle2, AlertCircle, RefreshCcw, Shield, ShieldOff } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  usePrivilegeStations,
  useStationPrivilegeDetail,
  useSetStationPrivileges,
  useResetStationPrivileges,
  type StationPrivilegeInfo,
  type PrivilegeQrItem,
} from "@/hooks/use-privileges";

export const Route = createFileRoute("/qr-privileges")({
  head: () => ({
    meta: [
      { title: "Privilege QR - Sugity Integrated Systems" },
      { name: "description", content: "Kelola akses QR scan per akun station." },
    ],
  }),
  component: QrPrivilegesPage,
});

// ─── Toast notification ────────────────────────────────────────────────────
type ToastType = "success" | "error";
function Toast({ msg, type, onClose }: { msg: string; type: ToastType; onClose: () => void }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-2xl px-5 py-3.5 shadow-2xl text-sm font-semibold animate-in slide-in-from-bottom-4 duration-300 ${
        type === "success"
          ? "bg-emerald-500 text-white"
          : "bg-red-500 text-white"
      }`}
    >
      {type === "success" ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
      {msg}
      <button onClick={onClose} className="ml-2 opacity-80 hover:opacity-100">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

// ─── Station card ──────────────────────────────────────────────────────────
function StationCard({
  station,
  onManage,
}: {
  station: StationPrivilegeInfo;
  onManage: (s: StationPrivilegeInfo) => void;
}) {
  const isRestricted = station.privilege_mode === "restricted";
  return (
    <div className="rounded-2xl border border-border-surface bg-surface-section p-5 flex flex-col gap-4 transition-all hover:border-[#C05C30]/40 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: isRestricted ? "#2A1A0E" : "#1A2A1A" }}
          >
            {isRestricted ? (
              <Shield className="h-5 w-5" style={{ color: "#FB923C" }} />
            ) : (
              <ShieldOff className="h-5 w-5" style={{ color: "#4ade80" }} />
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{station.name}</p>
            <p className="truncate text-[11px] text-muted-foreground">{station.device_code} · {station.device_role}</p>
          </div>
        </div>
        <span
          className={`shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
            isRestricted
              ? "bg-orange-500/10 text-orange-400"
              : "bg-emerald-500/10 text-emerald-400"
          }`}
        >
          {isRestricted ? `Restricted · ${station.privilege_count} QR` : "Default"}
        </span>
      </div>
      {station.location && (
        <p className="text-[11px] text-muted-foreground">{station.location}</p>
      )}
      <button
        id={`btn-manage-privilege-${station.id}`}
        onClick={() => onManage(station)}
        className="w-full rounded-xl border border-border bg-card-elevated/40 py-2.5 text-xs font-semibold text-foreground transition-smooth hover:bg-accent hover:border-[#C05C30]/60"
      >
        Atur Privilege
      </button>
    </div>
  );
}

// ─── Transfer List Modal ───────────────────────────────────────────────────
function PrivilegeModal({
  station,
  onClose,
  onToast,
}: {
  station: StationPrivilegeInfo;
  onClose: () => void;
  onToast: (msg: string, type: "success" | "error") => void;
}) {
  const { data: detail, isLoading } = useStationPrivilegeDetail(station.id);
  const setPrivileges = useSetStationPrivileges();
  const resetPrivileges = useResetStationPrivileges();

  const [searchLeft, setSearchLeft] = useState("");
  const [searchRight, setSearchRight] = useState("");
  const [selectedLeft, setSelectedLeft] = useState<Set<number>>(new Set());
  const [selectedRight, setSelectedRight] = useState<Set<number>>(new Set());
  // Local state mirrors the allowed list
  const [allowedIds, setAllowedIds] = useState<Set<number> | null>(null);

  // Initialize allowedIds from API data (once)
  const effectiveAllowed: Set<number> = useMemo(() => {
    if (allowedIds !== null) return allowedIds;
    if (!detail) return new Set();
    return new Set(detail.qr_list.filter((q) => q.is_allowed).map((q) => q.id));
  }, [allowedIds, detail]);

  const allQrs: PrivilegeQrItem[] = detail?.qr_list ?? [];

  const leftList = useMemo(
    () =>
      allQrs
        .filter((q) => !effectiveAllowed.has(q.id))
        .filter(
          (q) =>
            !searchLeft ||
            q.part_name.toLowerCase().includes(searchLeft.toLowerCase()) ||
            q.qr_id.toLowerCase().includes(searchLeft.toLowerCase())
        ),
    [allQrs, effectiveAllowed, searchLeft]
  );

  const rightList = useMemo(
    () =>
      allQrs
        .filter((q) => effectiveAllowed.has(q.id))
        .filter(
          (q) =>
            !searchRight ||
            q.part_name.toLowerCase().includes(searchRight.toLowerCase()) ||
            q.qr_id.toLowerCase().includes(searchRight.toLowerCase())
        ),
    [allQrs, effectiveAllowed, searchRight]
  );

  const moveToRight = () => {
    if (selectedLeft.size === 0) return;
    const next = new Set(effectiveAllowed);
    selectedLeft.forEach((id) => next.add(id));
    setAllowedIds(next);
    setSelectedLeft(new Set());
  };

  const moveToLeft = () => {
    if (selectedRight.size === 0) return;
    const next = new Set(effectiveAllowed);
    selectedRight.forEach((id) => next.delete(id));
    setAllowedIds(next);
    setSelectedRight(new Set());
  };

  const toggleLeft = (id: number) => {
    const s = new Set(selectedLeft);
    s.has(id) ? s.delete(id) : s.add(id);
    setSelectedLeft(s);
  };

  const toggleRight = (id: number) => {
    const s = new Set(selectedRight);
    s.has(id) ? s.delete(id) : s.add(id);
    setSelectedRight(s);
  };

  const handleSave = () => {
    setPrivileges.mutate(
      { stationId: station.id, qrIds: Array.from(effectiveAllowed) },
      {
        onSuccess: () => {
          onToast(
            effectiveAllowed.size === 0
              ? `${station.name} direset ke open access.`
              : `Privilege disimpan: ${effectiveAllowed.size} QR diizinkan untuk ${station.name}.`,
            "success"
          );
          onClose();
        },
        onError: (e) => onToast(e.message, "error"),
      }
    );
  };

  const handleReset = () => {
    resetPrivileges.mutate(station.id, {
      onSuccess: () => {
        onToast(`${station.name} direset ke default (semua QR diizinkan).`, "success");
        onClose();
      },
      onError: (e) => onToast(e.message, "error"),
    });
  };

  const isPending = setPrivileges.isPending || resetPrivileges.isPending;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-border-surface bg-surface-section shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-surface">
          <div>
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#C05C30]" />
              Pengaturan Privilege QR - {station.name}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Pindahkan QR ke kolom kanan untuk mengizinkan. Kosongkan kolom kanan = open access.
            </p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-accent text-muted-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-hidden p-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-48 gap-3 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="text-sm">Memuat data QR...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 h-full min-h-[320px]">
              {/* Left: Available QRs */}
              <div className="flex flex-col rounded-2xl border border-border-surface bg-card overflow-hidden">
                <div className="px-4 pt-4 pb-2 border-b border-border-surface">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    QR Belum Diizinkan ({leftList.length})
                  </p>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <input
                      value={searchLeft}
                      onChange={(e) => setSearchLeft(e.target.value)}
                      placeholder="Cari QR..."
                      className="w-full rounded-lg border border-border-surface bg-card-elevated pl-8 pr-3 py-2 text-xs outline-none focus:border-[#C05C30]"
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin">
                  {leftList.length === 0 ? (
                    <p className="text-center text-xs text-muted-foreground py-8">Tidak ada QR</p>
                  ) : (
                    leftList.map((q) => (
                      <button
                        key={q.id}
                        onClick={() => toggleLeft(q.id)}
                        className={`w-full text-left rounded-xl px-3 py-2.5 text-xs transition-smooth ${
                          selectedLeft.has(q.id)
                            ? "bg-[#C05C30]/20 border border-[#C05C30]/50"
                            : "hover:bg-card-elevated border border-transparent"
                        }`}
                      >
                        <span className="font-semibold text-foreground block truncate">{q.part_name}</span>
                        <span className="text-muted-foreground">{q.qr_id} · {q.factory}</span>
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Center: Arrow buttons */}
              <div className="flex md:flex-col items-center justify-center gap-2">
                <button
                  onClick={moveToRight}
                  disabled={selectedLeft.size === 0}
                  title="Izinkan yang dipilih"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card-elevated text-foreground transition-smooth hover:bg-[#C05C30] hover:text-white hover:border-[#C05C30] disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  onClick={moveToLeft}
                  disabled={selectedRight.size === 0}
                  title="Cabut izin yang dipilih"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card-elevated text-foreground transition-smooth hover:bg-red-500 hover:text-white hover:border-red-500 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </div>

              {/* Right: Allowed QRs */}
              <div className="flex flex-col rounded-2xl border border-border-surface bg-card overflow-hidden">
                <div className="px-4 pt-4 pb-2 border-b border-border-surface">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    QR Diizinkan ({rightList.length})
                  </p>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <input
                      value={searchRight}
                      onChange={(e) => setSearchRight(e.target.value)}
                      placeholder="Cari QR..."
                      className="w-full rounded-lg border border-border-surface bg-card-elevated pl-8 pr-3 py-2 text-xs outline-none focus:border-[#C05C30]"
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin">
                  {rightList.length === 0 ? (
                    <p className="text-center text-xs text-muted-foreground py-8">Belum ada QR diizinkan</p>
                  ) : (
                    rightList.map((q) => (
                      <button
                        key={q.id}
                        onClick={() => toggleRight(q.id)}
                        className={`w-full text-left rounded-xl px-3 py-2.5 text-xs transition-smooth ${
                          selectedRight.has(q.id)
                            ? "bg-emerald-500/20 border border-emerald-500/50"
                            : "hover:bg-card-elevated border border-transparent"
                        }`}
                      >
                        <span className="font-semibold text-foreground block truncate">{q.part_name}</span>
                        <span className="text-muted-foreground">{q.qr_id} · {q.factory}</span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-border-surface">
          <button
            id={`btn-reset-privilege-${station.id}`}
            onClick={handleReset}
            disabled={isPending}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2.5 text-xs font-semibold text-red-400 transition-smooth hover:bg-red-500/20 disabled:opacity-50"
          >
            <RefreshCcw className="h-3.5 w-3.5" />
            Reset ke Default
          </button>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              disabled={isPending}
              className="rounded-full border border-border bg-card-elevated px-5 py-2.5 text-xs font-semibold text-foreground transition-smooth hover:bg-accent disabled:opacity-50"
            >
              Batal
            </button>
            <button
              id={`btn-save-privilege-${station.id}`}
              onClick={handleSave}
              disabled={isPending}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-smooth disabled:opacity-50"
              style={{ backgroundColor: isPending ? "#2A1A0E" : "#C05C30" }}
            >
              {isPending && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
function QrPrivilegesPage() {
  const { data: stations = [], isLoading, refetch } = usePrivilegeStations();
  const [selectedStation, setSelectedStation] = useState<StationPrivilegeInfo | null>(null);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const filtered = useMemo(
    () =>
      stations.filter(
        (s) =>
          !search ||
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.device_code.toLowerCase().includes(search.toLowerCase())
      ),
    [stations, search]
  );

  const openCount = filtered.filter((s) => s.privilege_mode === "open").length;
  const restrictedCount = filtered.filter((s) => s.privilege_mode === "restricted").length;

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">
        {/* Page heading */}
        <div className="mb-6 flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Sistem Keamanan
          </span>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-[#C05C30]" />
            Privilege QR
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Atur QR code mana saja yang boleh di-scan oleh setiap akun station. Kosongkan = semua QR diizinkan.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Total Station", value: stations.length, color: "text-foreground" },
            { label: "Open Access", value: openCount, color: "text-emerald-400" },
            { label: "Restricted", value: restrictedCount, color: "text-orange-400" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border-surface bg-surface-section px-5 py-4">
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Search + Refresh */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              id="input-search-stations"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari station..."
              className="w-full rounded-xl border border-border-surface bg-surface-section pl-10 pr-4 py-2.5 text-sm text-foreground outline-none focus:border-[#C05C30] placeholder:text-muted-foreground/60"
            />
          </div>
          <button
            onClick={() => refetch()}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card-elevated px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-smooth"
          >
            <RefreshCcw className="h-4 w-4" />
            Refresh
          </button>
        </div>

        {/* Station Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center h-48 gap-3 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm">Memuat data station...</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 gap-2 text-muted-foreground">
            <ShieldCheck className="h-8 w-8 opacity-30" />
            <p className="text-sm">Tidak ada station ditemukan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((station) => (
              <StationCard
                key={station.id}
                station={station}
                onManage={setSelectedStation}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedStation && (
        <PrivilegeModal
          station={selectedStation}
          onClose={() => setSelectedStation(null)}
          onToast={showToast}
        />
      )}

      {/* Toast */}
      {toast && (
        <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />
      )}
    </DashboardLayout>
  );
}
`````

## File: src/routes/station/login.tsx
`````typescript
import { useState, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Loader2, AlertCircle } from "lucide-react";
import { fetchApi } from "@/lib/api";
import { setStationAuth, type StationDevice } from "@/lib/auth";

export const Route = createFileRoute("/station/login")({
  head: () => ({
    meta: [
      { title: "Login Scanner - Sugity Integrated Systems" },
      { name: "description", content: "Login untuk perangkat scanner station." },
    ],
  }),
  component: StationLoginPage,
});

type StationLoginResponse = {
  token: string;
  device: StationDevice;
};

function StationLoginPage() {
  const [deviceCode, setDeviceCode] = useState("");
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!deviceCode.trim() || !pin.trim()) return;
      setError(null);
      setIsLoading(true);
      try {
        const data = await fetchApi<StationLoginResponse>("/devices/station-login", {
          method: "POST",
          body: JSON.stringify({ device_code: deviceCode.trim(), pin }),
        });
        setStationAuth(data.token, data.device);
        // Force full reload so station guard reads fresh token
        window.location.replace("/station/dashboard");
      } catch (err) {
        setError((err as Error).message || "Login gagal. Coba lagi.");
        setIsLoading(false);
      }
    },
    [deviceCode, pin]
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between py-10 px-4"
      style={{ backgroundColor: "var(--station-bg, #F0EFED)" }}
    >
      {/* Spacer */}
      <div />

      {/* Card */}
      <div
        className="w-full max-w-md rounded-2xl shadow-sm p-8 sm:p-10"
        style={{ backgroundColor: "var(--station-card, #FFFFFF)" }}
      >
        <h1
          className="text-2xl font-semibold text-center mb-8 tracking-tight"
          style={{ color: "var(--station-text, #2D2D2D)" }}
        >
          Login SCANNER
        </h1>

        {error && (
          <div className="mb-5 flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* ID Perangkat */}
          <div>
            <label
              htmlFor="station-device-code"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "var(--station-label, #4B5563)" }}
            >
              ID Perangkat
            </label>
            <input
              id="station-device-code"
              type="text"
              value={deviceCode}
              onChange={(e) => setDeviceCode(e.target.value)}
              placeholder="Contoh: scanner1"
              autoComplete="off"
              required
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2"
              style={{
                borderColor: "var(--station-border, #D1D5DB)",
                backgroundColor: "var(--station-input-bg, #FFFFFF)",
                color: "var(--station-text, #2D2D2D)",
              }}
            />
          </div>

          {/* PIN Perangkat */}
          <div>
            <label
              htmlFor="station-pin"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "var(--station-label, #4B5563)" }}
            >
              PIN Perangkat
            </label>
            <input
              id="station-pin"
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2"
              style={{
                borderColor: "var(--station-border, #D1D5DB)",
                backgroundColor: "var(--station-input-bg, #FFFFFF)",
                color: "var(--station-text, #2D2D2D)",
              }}
            />
          </div>

          {/* Submit */}
          <button
            id="btn-masuk-scanner"
            type="submit"
            disabled={isLoading || !deviceCode.trim() || !pin.trim()}
            className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-all disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
            style={{ backgroundColor: "#C05C30" }}
            onMouseEnter={(e) => !isLoading && ((e.currentTarget.style.backgroundColor = "#A84E26"))}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C05C30")}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Memverifikasi...
              </>
            ) : (
              "Masuk Scanner"
            )}
          </button>
        </form>
      </div>

      {/* Footer */}
      <p className="text-xs text-center" style={{ color: "var(--station-footer, #9CA3AF)" }}>
        Copyright @2026 Sugity Integrated Systems
      </p>
    </div>
  );
}
`````

## File: src/routes/teitei.tsx
`````typescript
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Plus, Edit2, Trash2, Save, X, Loader2 } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  useTeiteiList,
  useTeiteiParts,
  useCreateTeitei,
  useUpdateTeitei,
  useDeleteTeitei,
  type TeiteiItem,
} from "@/hooks/use-teitei";

export const Route = createFileRoute("/teitei")({
  head: () => ({
    meta: [
      { title: "Teitei Management - Sugity Creatives" },
      { name: "description", content: "Kelola nilai teitei per master part" },
    ],
  }),
  component: TeiteiPage,
});

function TeiteiPage() {
  const { data: items = [], isLoading } = useTeiteiList();
  const { data: parts = [] } = useTeiteiParts();
  const createTeitei = useCreateTeitei();
  const updateTeitei = useUpdateTeitei();
  const deleteTeitei = useDeleteTeitei();

  const [isAdding, setIsAdding] = useState(false);
  const [newPartId, setNewPartId] = useState("");
  const [newValue, setNewValue] = useState("1");
  const [newMin, setNewMin] = useState("0");
  const [newQtyDay, setNewQtyDay] = useState("0");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [editMin, setEditMin] = useState("");
  const [editQtyDay, setEditQtyDay] = useState("");
  const [deleting, setDeleting] = useState<TeiteiItem | null>(null);

  const usedPartIds = new Set(items.map((i) => i.masterPartId));
  const availableParts = parts.filter((p) => !usedPartIds.has(p.id));

  const handleAdd = () => {
    if (!newPartId || !newValue) return;
    createTeitei.mutate(
      {
        masterPartId: Number(newPartId),
        teiteiValue: Number(newValue),
        minVal: Number(newMin),
        qtyPerDay: Number(newQtyDay),
      },
      {
        onSuccess: () => {
          setIsAdding(false);
          setNewPartId("");
          setNewValue("1");
          setNewMin("0");
          setNewQtyDay("0");
        },
      }
    );
  };

  const handleUpdate = (id: number) => {
    updateTeitei.mutate(
      {
        id,
        teiteiValue: Number(editValue),
        minVal: Number(editMin),
        qtyPerDay: Number(editQtyDay),
      },
      { onSuccess: () => setEditingId(null) }
    );
  };

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">
        <div className="mb-6 flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Management
          </span>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Teitei Management
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Atur nilai teitei untuk setiap master part (digunakan dalam perhitungan stock analytics).
          </p>
        </div>

        <section className="rounded-3xl border border-border-surface bg-surface-section p-5 sm:p-7">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-base font-semibold text-foreground">
              Daftar Teitei
            </h2>
            {!isAdding && (
              <button
                type="button"
                onClick={() => setIsAdding(true)}
                disabled={availableParts.length === 0}
                className="inline-flex items-center gap-2 rounded-full bg-[#C05C30] px-4 py-2 text-sm font-medium text-white transition-smooth hover:bg-[#A84D24] disabled:opacity-50"
              >
                <Plus className="h-4 w-4" />
                Tambah Baru
              </button>
            )}
          </div>

          <div className="-mx-2 overflow-x-auto px-2 scrollbar-thin">
            <table className="w-full min-w-[600px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  <th className="border-b border-border px-3 py-3 font-medium">
                    Part Number
                  </th>
                  <th className="border-b border-border px-3 py-3 font-medium">
                    Part Name
                  </th>
                  <th className="border-b border-border px-3 py-3 font-medium">
                    Model
                  </th>
                  <th className="border-b border-border px-3 py-3 font-medium">
                    Teitei
                  </th>
                  <th className="border-b border-border px-3 py-3 font-medium">
                    Min
                  </th>
                  <th className="border-b border-border px-3 py-3 font-medium">
                    Qty/Day
                  </th>
                  <th className="border-b border-border px-3 py-3 font-medium text-right">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {isAdding && (
                  <tr className="bg-card-elevated/20">
                    <td colSpan={2} className="border-b border-border/60 px-3 py-3">
                      <select
                        value={newPartId}
                        onChange={(e) => setNewPartId(e.target.value)}
                        className="h-9 w-full rounded-lg border border-border bg-card px-3 text-sm"
                      >
                        <option value="">Pilih master part…</option>
                        {availableParts.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.partNumber} - {p.partName}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="border-b border-border/60 px-3 py-3">-</td>
                    <td className="border-b border-border/60 px-3 py-3">
                      <input
                        type="number"
                        step="0.01"
                        min="0.01"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                        className="h-9 w-24 rounded-lg border border-border bg-card px-3 text-sm"
                      />
                    </td>
                    <td className="border-b border-border/60 px-3 py-3">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={newMin}
                        onChange={(e) => setNewMin(e.target.value)}
                        className="h-9 w-24 rounded-lg border border-border bg-card px-3 text-sm"
                      />
                    </td>
                    <td className="border-b border-border/60 px-3 py-3">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={newQtyDay}
                        onChange={(e) => setNewQtyDay(e.target.value)}
                        className="h-9 w-24 rounded-lg border border-border bg-card px-3 text-sm"
                      />
                    </td>
                    <td className="border-b border-border/60 px-3 py-3 text-right">
                      <div className="inline-flex gap-2">
                        <button
                          type="button"
                          onClick={handleAdd}
                          disabled={createTeitei.isPending || !newPartId}
                          className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600"
                        >
                          {createTeitei.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Save className="h-4 w-4" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsAdding(false);
                            setNewPartId("");
                          }}
                          className="rounded-lg bg-red-500/10 p-2 text-red-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )}

                {isLoading ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-8 text-center text-muted-foreground"
                    >
                      Loading…
                    </td>
                  </tr>
                ) : items.length === 0 && !isAdding ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-8 text-center text-muted-foreground"
                    >
                      Belum ada data teitei.
                    </td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr
                      key={item.id}
                      className="transition-smooth hover:bg-card-elevated/40"
                    >
                      <td className="border-b border-border/60 px-3 py-3.5 font-mono text-[#c05c30]">
                        {item.partNumber}
                      </td>
                      <td className="border-b border-border/60 px-3 py-3.5">
                        {item.partName}
                      </td>
                      <td className="border-b border-border/60 px-3 py-3.5 text-muted-foreground">
                        {item.model || "-"}
                      </td>
                      <td className="border-b border-border/60 px-3 py-3.5">
                        {editingId === item.id ? (
                          <input
                            type="number"
                            step="0.01"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="h-9 w-24 rounded-lg border border-border bg-card px-3 text-sm"
                          />
                        ) : (
                          item.teiteiValue
                        )}
                      </td>
                      <td className="border-b border-border/60 px-3 py-3.5">
                        {editingId === item.id ? (
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={editMin}
                            onChange={(e) => setEditMin(e.target.value)}
                            className="h-9 w-24 rounded-lg border border-border bg-card px-3 text-sm"
                          />
                        ) : (
                          item.minVal ?? 0
                        )}
                      </td>
                      <td className="border-b border-border/60 px-3 py-3.5">
                        {editingId === item.id ? (
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={editQtyDay}
                            onChange={(e) => setEditQtyDay(e.target.value)}
                            className="h-9 w-24 rounded-lg border border-border bg-card px-3 text-sm"
                          />
                        ) : (
                          item.qtyPerDay ?? 0
                        )}
                      </td>
                      <td className="border-b border-border/60 px-3 py-3.5 text-right">
                        {editingId === item.id ? (
                          <div className="inline-flex gap-2">
                            <button
                              type="button"
                              onClick={() => handleUpdate(item.id)}
                              disabled={updateTeitei.isPending}
                              className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600"
                            >
                              <Save className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingId(null)}
                              className="rounded-lg bg-red-500/10 p-2 text-red-600"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="inline-flex gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setEditingId(item.id);
                                setEditValue(String(item.teiteiValue));
                                setEditMin(String(item.minVal ?? 0));
                                setEditQtyDay(String(item.qtyPerDay ?? 0));
                              }}
                              className="rounded-lg p-2 text-muted-foreground hover:bg-accent"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setDeleting(item)}
                              className="rounded-lg p-2 text-red-500 hover:bg-red-500/10"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <AlertDialog open={!!deleting} onOpenChange={(o) => !o && setDeleting(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Hapus Teitei</AlertDialogTitle>
              <AlertDialogDescription>
                Hapus teitei untuk <strong>{deleting?.partNumber}</strong>?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Batal</AlertDialogCancel>
              <AlertDialogAction
                onClick={(e) => {
                  e.preventDefault();
                  if (deleting) {
                    deleteTeitei.mutate(deleting.id, {
                      onSuccess: () => setDeleting(null),
                    });
                  }
                }}
                className="bg-red-500 hover:bg-red-600"
              >
                Hapus
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </DashboardLayout>
  );
}
`````

## File: src/routes/users/create.tsx
`````typescript
import { useState, useEffect, useCallback } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useCreateUser, useUpdateUser, useUsers } from "@/hooks/use-users";
import { FactoryApi } from "@/hooks/use-master-data";

const searchSchema = z.object({ editId: z.number().optional() });

export const Route = createFileRoute("/users/create")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [{ title: "Tambah User - Sugity Creatives" }],
  }),
  component: CreateUserPage,
});

const INPUT =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:border-[#c05c30]/60 dark:bg-card-elevated";

const SELECT =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-smooth focus:border-[#c05c30]/60 appearance-none cursor-pointer dark:bg-card-elevated";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-foreground">
        {label}
        {required && <span className="ml-0.5 text-[#c05c30]"> *</span>}
      </label>
      {children}
    </div>
  );
}

function CreateUserPage() {
  const navigate = useNavigate();
  const { editId } = Route.useSearch();
  const isEdit = !!editId;

  const { data: allUsers = [] } = useUsers();
  const editUser = isEdit ? allUsers.find((u) => u.id === editId) : null;

  const createUser = useCreateUser();
  const updateUser = useUpdateUser();

  const [username, setUsername] = useState("");
  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "operator" | "usertv">("operator");
  const [status, setStatus] = useState<"active" | "inactive">("active");
  const [tvFactory, setTvFactory] = useState("");
  const [tvShift, setTvShift] = useState<"A" | "B">("A");
  const [tvTheme, setTvTheme] = useState<"default" | "dark" | "white">("default");

  const { data: factories = [] } = FactoryApi.useGetAll();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (editUser) {
      setUsername(editUser.username);
      setNik(editUser.nik ?? "");
      setRole(
        editUser.role === "viewer" ? "usertv" : editUser.role
      );
      setStatus(editUser.status);
      setTvFactory(editUser.tv_factory ?? "");
      setTvShift(editUser.tv_shift ?? "A");
      setTvTheme(
        (editUser.tv_theme as "default" | "dark" | "white") ?? "default"
      );
    }
  }, [editUser]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitError(null);

      const payload = {
        username: username.trim(),
        nik: nik.trim(),
        password: password || undefined,
        role,
        status,
        tvFactory: role === "usertv" ? tvFactory : "",
        tvShift: role === "usertv" ? tvShift : "A",
        tvTheme: role === "usertv" ? tvTheme : "default",
      };

      if (isEdit && editId) {
        updateUser.mutate(
          { id: editId, ...payload },
          {
            onSuccess: () => {
              setSuccess(true);
              setTimeout(() => navigate({ to: "/users" }), 900);
            },
            onError: (err) => setSubmitError(err.message),
          }
        );
      } else {
        if (!password) {
          setSubmitError("Password wajib diisi untuk user baru.");
          return;
        }
        createUser.mutate(payload as typeof payload & { password: string }, {
          onSuccess: () => {
            setSuccess(true);
            setTimeout(() => navigate({ to: "/users" }), 900);
          },
          onError: (err) => setSubmitError(err.message),
        });
      }
    },
    [username, nik, password, role, status, tvFactory, tvShift, tvTheme, isEdit, editId, createUser, updateUser, navigate]
  );

  const isPending = createUser.isPending || updateUser.isPending;

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-3xl animate-in fade-in duration-300">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {isEdit ? "Edit User" : "Tambah User"}
            </span>
            <h1 className="mt-0.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {isEdit ? "Edit Data Pengguna" : "Tambah User Baru"}
            </h1>
          </div>
          <Link
            to="/users"
            className="text-sm font-semibold text-[#c05c30] transition-smooth hover:opacity-80"
          >
            Back to List
          </Link>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Username */}
            <Field label="Username" required>
              <input
                id="input-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. scanner1"
                required
                className={INPUT}
              />
            </Field>

            {/* NIK */}
            <Field label="NIK">
              <input
                id="input-nik"
                type="text"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                placeholder="e.g. EMP001"
                className={INPUT}
              />
            </Field>

            {/* Password */}
            <Field label={isEdit ? "Password Baru (kosongkan jika tidak diubah)" : "Password"} required={!isEdit}>
              <input
                id="input-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isEdit ? "Kosongkan jika tidak ingin mengubah" : "Min. 6 karakter"}
                required={!isEdit}
                className={INPUT}
              />
            </Field>

            {/* Role */}
            <Field label="Role" required>
              <div className="relative">
                <select
                  id="input-role"
                  value={role}
                  onChange={(e) =>
                    setRole(e.target.value as "admin" | "operator" | "usertv")
                  }
                  className={SELECT}
                >
                  <option value="admin">Admin</option>
                  <option value="operator">Operator</option>
                  <option value="usertv">User TV</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">▾</div>
              </div>
            </Field>

            {/* Status */}
            <Field label="Status" required>
              <div className="relative">
                <select
                  id="input-status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as "active" | "inactive")}
                  className={SELECT}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">▾</div>
              </div>
            </Field>
          </div>

          {role === "usertv" && (
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <Field label="Factory (TV)" required>
                <div className="relative">
                  <select
                    value={tvFactory}
                    onChange={(e) => setTvFactory(e.target.value)}
                    required
                    className={SELECT}
                  >
                    <option value="">Pilih factory…</option>
                    {factories.map((f) => (
                      <option key={f.id} value={f.name}>
                        {f.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    ▾
                  </div>
                </div>
              </Field>
              <Field label="Shift" required>
                <div className="relative">
                  <select
                    value={tvShift}
                    onChange={(e) => setTvShift(e.target.value as "A" | "B")}
                    className={SELECT}
                  >
                    <option value="A">Shift A</option>
                    <option value="B">Shift B</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    ▾
                  </div>
                </div>
              </Field>
              <Field label="Theme" required>
                <div className="relative">
                  <select
                    value={tvTheme}
                    onChange={(e) =>
                      setTvTheme(
                        e.target.value as "default" | "dark" | "white"
                      )
                    }
                    className={SELECT}
                  >
                    <option value="default">Default (system)</option>
                    <option value="dark">Dark</option>
                    <option value="white">White</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    ▾
                  </div>
                </div>
              </Field>
            </div>
          )}

          {/* Error */}
          {submitError && (
            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 text-sm text-destructive">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {submitError}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              User berhasil {isEdit ? "diperbarui" : "dibuat"}! Mengalihkan…
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex justify-end gap-3">
            <Link
              to="/users"
              className="inline-flex items-center rounded-xl border border-border bg-card-elevated px-5 py-2.5 text-sm font-semibold text-foreground transition-smooth hover:bg-accent"
            >
              Cancel
            </Link>
            <button
              id="btn-save-user"
              type="submit"
              disabled={isPending || success}
              className="inline-flex items-center gap-2 rounded-xl bg-[#c05c30] px-6 py-2.5 text-sm font-bold text-white transition-smooth hover:brightness-110 disabled:opacity-50"
            >
              {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              {isEdit ? "Update User" : "Simpan User"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
`````

## File: src/routes/users/index.tsx
`````typescript
import { useState, useCallback } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Loader2,
  AlertCircle,
  Users,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  useUsers,
  useDeleteUser,
  type AppUser,
} from "@/hooks/use-users";

export const Route = createFileRoute("/users/")({
  head: () => ({
    meta: [
      { title: "User Management - Sugity Creatives" },
      { name: "description", content: "Kelola Data Pengguna" },
    ],
  }),
  component: UsersPage,
});

function UsersPage() {
  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<AppUser | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const { data: users = [], isLoading } = useUsers(search);
  const deleteUser = useDeleteUser();

  const confirmDelete = useCallback((u: AppUser) => {
    setDeleteError(null);
    setDeleteTarget(u);
  }, []);

  const handleDelete = useCallback(() => {
    if (!deleteTarget) return;
    deleteUser.mutate(deleteTarget.id, {
      onSuccess: () => setDeleteTarget(null),
      onError: (e) => setDeleteError(e.message),
    });
  }, [deleteTarget, deleteUser]);

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            User Management
          </span>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Kelola Data Pengguna
          </h1>
        </div>

        {/* Search + CTA */}
        <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:gap-4">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="search-users"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari Username, NIK, atau Role..."
              className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:border-[#c05c30]/60 dark:bg-card-elevated"
            />
          </div>
          <Link
            to="/users/create"
            id="btn-tambah-user"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#c05c30] px-5 py-2.5 text-[13.5px] font-semibold text-white transition-smooth hover:brightness-110 active:scale-[0.97]"
          >
            <Plus className="h-4 w-4" />
            Tambah User
          </Link>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                  {["Username", "NIK", "Role", "Status", "Actions"].map((col) => (
                    <th
                      key={col}
                      className={`border-b border-border bg-card-elevated/50 px-5 py-3.5 font-semibold ${col === "Actions" ? "text-right" : ""}`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-14 text-center">
                      <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-14 text-center text-sm text-muted-foreground">
                      {search ? (
                        `Tidak ada user yang cocok dengan "${search}"`
                      ) : (
                        <div className="flex flex-col items-center gap-3">
                          <Users className="h-10 w-10 text-muted-foreground/40" />
                          <span>Belum ada user. Klik <strong>Tambah User</strong> untuk memulai.</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ) : (
                  users.map((u) => (
                    <UserRow key={u.id} user={u} onDelete={confirmDelete} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete confirmation dialog */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
              <Trash2 className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">Hapus User?</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{deleteTarget.username}</span> akan dihapus secara permanen.
            </p>
            {deleteError && (
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {deleteError}
              </div>
            )}
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setDeleteTarget(null)}
                className="rounded-xl border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-smooth hover:bg-accent"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                disabled={deleteUser.isPending}
                className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-smooth hover:bg-red-600 disabled:opacity-50"
              >
                {deleteUser.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

// ── User table row ──────────────────────────────────────────────────────────
function UserRow({ user, onDelete }: { user: AppUser; onDelete: (u: AppUser) => void }) {
  const roleColors: Record<string, string> = {
    admin: "bg-purple-500/10 text-purple-500 dark:text-purple-400",
    operator: "bg-blue-500/10 text-blue-500 dark:text-blue-400",
    usertv: "bg-muted text-muted-foreground",
    viewer: "bg-muted text-muted-foreground",
  };

  return (
    <tr className="group transition-smooth hover:bg-card-elevated/40">
      <td className="border-b border-border/60 px-5 py-4">
        <span className="font-mono text-[13px] font-bold text-[#c05c30]">
          {user.username}
        </span>
      </td>
      <td className="border-b border-border/60 px-5 py-4 text-muted-foreground text-[13px]">
        {user.nik || "-"}
      </td>
      <td className="border-b border-border/60 px-5 py-4">
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${roleColors[user.role] ?? "bg-muted text-muted-foreground"}`}>
          {user.role}
        </span>
      </td>
      <td className="border-b border-border/60 px-5 py-4">
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${user.status === "active" ? "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400" : "bg-muted text-muted-foreground"}`}>
          {user.status}
        </span>
      </td>
      <td className="border-b border-border/60 px-5 py-4 text-right">
        <div className="inline-flex items-center gap-1">
          <Link
            to="/users/create"
            search={{ editId: user.id }}
            id={`btn-edit-user-${user.id}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-blue-500 dark:text-blue-400 transition-smooth hover:bg-blue-500/10"
            title="Edit"
          >
            <Pencil className="h-4 w-4" />
          </Link>
          <button
            id={`btn-delete-user-${user.id}`}
            onClick={() => onDelete(user)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-red-400 transition-smooth hover:bg-red-500/10 hover:text-red-500"
            title="Hapus"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
`````

## File: tsconfig.json
`````json
{
  "include": ["src/**/*.ts", "src/**/*.tsx", "vite.config.ts", "eslint.config.js"],
  "compilerOptions": {
    "target": "ES2022",
    "jsx": "react-jsx",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": false,
    "noEmit": true,

    /* Linting */
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
`````

## File: wrangler.jsonc
`````json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "tanstack-start-app",
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "main": "@tanstack/react-start/server-entry",
}
`````

## File: .gitignore
`````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
plan.md
dist
dist-ssr
.output
.vinxi
.tanstack/**
.nitro
*.local

# Wrangler / Cloudflare
.wrangler/
.dev.vars

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`````

## File: eslint.config.js
`````javascript
import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";


//DO NOT TOUCH THIS FILE OR ELSE IM GONNA COME TO YO HOUSE GNG
export default tseslint.config(
  { ignores: ["dist", ".output", ".vinxi"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  eslintPluginPrettier,
);
`````

## File: server/index.ts
`````typescript
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// file route management, imported from ./routes 
import qrRoutes from "./routes/qr.js";
import stockRoutes from "./routes/stock.js";
import taskRoutes from "./routes/tasks.js";
import deviceRoutes from "./routes/devices.js";
import scanRoutes from "./routes/scan.js";
import masterPartsRoutes from "./routes/masterParts.js";
import mesinRoutes from "./routes/mesin.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import categoriesRoutes from "./routes/categories.js";
import modelsRoutes from "./routes/models.js";
import customersRoutes from "./routes/customers.js";
import factoriesRoutes from "./routes/factories.js";
import privilegesRoutes from "./routes/privileges.js";
import stockAnalyticsRoutes from "./routes/stockAnalytics.js";
import teiteiRoutes from "./routes/teitei.js";
import { requireAuth } from "./middleware/authMiddleware.js";


dotenv.config();

const app = express();
const PORT = Number(process.env.API_PORT) || 3001; //Deploy: #3001 change the port based on deploy enviroment 

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Apply global auth middleware
app.use(requireAuth);


// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "Sehat Wal'afiat", creator: "di rancang oleh @RizkyDaffy", time: new Date().toISOString() });
});

// Routes
app.use("/api/qr", qrRoutes);           //API: QR Handler
app.use("/api/stock", stockRoutes);     //API: Stock Handler
app.use("/api/tasks", taskRoutes);      //API: Task Handler
app.use("/api/devices", deviceRoutes);  //API: Device Handler
app.use("/api/scans", scanRoutes);      //API: Scan Handler
app.use("/api/master-parts", masterPartsRoutes); //API: Master Parts Handler
app.use("/api/mesin", mesinRoutes);     //API: Mesin Handler
app.use("/api/auth", authRoutes);       //API: Auth Handler
app.use("/api/users", usersRoutes);     //API: Users Handler
app.use("/api/categories", categoriesRoutes);
app.use("/api/models", modelsRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/factories", factoriesRoutes);
app.use("/api/privileges", privilegesRoutes); //API: QR Privilege Handler (internal-key protected)
app.use("/api/stock-analytics", stockAnalyticsRoutes);
app.use("/api/teitei", teiteiRoutes);


app.listen(PORT, () => {
  console.log(`🚀 API server berajalan di http://localhost:${PORT}`); //deploy: #localhost adjust with deploy inviroment 
  console.log(`   check kesehata nyah: http://localhost:${PORT}/api/health`); //deploy: #localhost
});
`````

## File: server/lib/stockAnalyticsCalc.ts
`````typescript
/** Stock analytics calculated fields (V2 spec §3b). */

export type StockAnalyticsInput = {
  qtyPerDay: number;
  stockActual: number;
  shikake: number;
  minPlaceholder?: number;
};

export type StockAnalyticsComputed = {
  stockJam: number;
  judge: "O" | "X";
  qtyPerHour: number;
  min: number;
  max: number;
};

/** Format jam_update as HH:MM:SS */
export function formatJamUpdateTime(date: Date = new Date()): string {
  return date.toTimeString().slice(0, 8);
}

export function computeStockAnalytics(
  input: StockAnalyticsInput
): StockAnalyticsComputed {
  const qtyPerDay = Math.max(Number(input.qtyPerDay) || 0, 0);
  const stockActual = Math.max(Number(input.stockActual) || 0, 0);
  const shikake = Number(input.shikake) || 0;
  const min = Number(input.minPlaceholder) || 0;

  const qtyPerHour = qtyPerDay > 0 ? qtyPerDay / 8 : 0;

  const stockJam =
    qtyPerDay > 0 ? (stockActual / qtyPerDay) * 8 : 0;

  const judge: "O" | "X" = stockJam < 4 ? "X" : "O";

  const max =
    shikake > 0 && qtyPerHour > 0
      ? (qtyPerDay / shikake) / qtyPerHour + min + 2
      : 0;

  return { stockJam, judge, qtyPerHour, min, max };
}

export type StockHourStatus = "none" | "critical" | "warning" | "safe";

/** Classify stock_jam for TV / mc-card status styling. */
export function classifyStockJam(
  stockJam: number,
  isActive: boolean
): StockHourStatus {
  if (!isActive) return "none";
  if (stockJam <= 2) return "critical";
  if (stockJam <= 4) return "warning";
  return "safe";
}

export function statusIcon(status: StockHourStatus): string {
  switch (status) {
    case "critical":
      return "💔";
    case "warning":
      return "⚠️";
    case "safe":
      return "💚";
    default:
      return "-";
  }
}

/** @deprecated Use classifyStockJam */
export const classifyStokJam = classifyStockJam;
`````

## File: server/routes/masterParts.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import { upsertStockAnalyticsFromMasterPart } from "../lib/stockAnalyticsService.js";

const router = Router();

// ═══════════════════════════════════════════════════════════════════════════
// [1] GET /api/master-parts - list all parts (with optional search)
// ═══════════════════════════════════════════════════════════════════════════
router.get("/", async (req, res) => {
  try {
    const search = (req.query.search as string) || "";
    let query =
      "SELECT id, part_number, part_name, category, model, customer, qty_per_pallet, unit, status, factory_origin, machine, image_base64, created_at, updated_at FROM master_parts";
    const params: string[] = [];

    if (search) {
      query +=
        " WHERE part_number LIKE ? OR part_name LIKE ? OR model LIKE ?";
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    query += " ORDER BY created_at DESC";

    const [rows] = await pool.query<RowDataPacket[]>(query, params);
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [2] POST /api/master-parts - create a new part
// Body: { partNumber, partName, category, model, customer, qtyPerPallet, unit, status, imageBase64? }
// ═══════════════════════════════════════════════════════════════════════════
router.post("/", async (req, res) => {
  try {
    const {
      partNumber,
      partName,
      category = "",
      model = "",
      customer = "",
      qtyPerPallet,
      unit = "PCS",
      status = "active",
      factoryOrigin = "",
      machine = "",
      imageBase64 = null,
    } = req.body;

    if (!partNumber || !partName || !qtyPerPallet) {
      return res.status(400).json({
        success: false,
        error: "Part Number, Part Name, dan Qty Per Pallet wajib diisi.",
      });
    }

    const machineVal = machine ? String(machine).trim().toUpperCase() : null;

    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO master_parts
        (part_number, part_name, category, model, customer, qty_per_pallet, unit, status, factory_origin, machine, image_base64)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        partNumber.trim().toUpperCase(),
        partName.trim().toUpperCase(),
        category.trim().toUpperCase(),
        model.trim().toUpperCase(),
        customer.trim().toUpperCase(),
        Number(qtyPerPallet),
        unit.trim().toUpperCase(),
        status,
        factoryOrigin,
        machineVal,
        imageBase64,
      ]
    );

    const [newRow] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM master_parts WHERE id = ?",
      [result.insertId]
    );

    if (machineVal) {
      await upsertStockAnalyticsFromMasterPart({
        part_number: newRow[0].part_number as string,
        part_name: newRow[0].part_name as string,
        model: newRow[0].model as string,
        machine: machineVal,
      });
    }

    res.status(201).json({ success: true, data: newRow[0] });
  } catch (err: unknown) {
    const msg = (err as Error).message || "";
    if (msg.includes("Duplicate entry")) {
      return res.status(409).json({
        success: false,
        error: "Part Number sudah terdaftar. Gunakan nomor yang berbeda.",
      });
    }
    res.status(500).json({ success: false, error: msg });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [3] PUT /api/master-parts/:id - update a part
// ═══════════════════════════════════════════════════════════════════════════
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      partNumber,
      partName,
      category = "",
      model = "",
      customer = "",
      qtyPerPallet,
      unit = "PCS",
      status = "active",
      factoryOrigin = "",
      machine = "",
      imageBase64,
    } = req.body;

    if (!partNumber || !partName || !qtyPerPallet) {
      return res.status(400).json({
        success: false,
        error: "Part Number, Part Name, dan Qty Per Pallet wajib diisi.",
      });
    }

    const fields: string[] = [
      "part_number = ?",
      "part_name = ?",
      "category = ?",
      "model = ?",
      "customer = ?",
      "qty_per_pallet = ?",
      "unit = ?",
      "status = ?",
      "factory_origin = ?",
      "machine = ?",
    ];
    const machineVal = machine ? String(machine).trim().toUpperCase() : null;
    const values: unknown[] = [
      partNumber.trim().toUpperCase(),
      partName.trim().toUpperCase(),
      category.trim().toUpperCase(),
      model.trim().toUpperCase(),
      customer.trim().toUpperCase(),
      Number(qtyPerPallet),
      unit.trim().toUpperCase(),
      status,
      factoryOrigin,
      machineVal,
    ];

    // Only update image if a new one is provided
    if (imageBase64 !== undefined) {
      fields.push("image_base64 = ?");
      values.push(imageBase64);
    }

    values.push(id);

    await pool.query(
      `UPDATE master_parts SET ${fields.join(", ")} WHERE id = ?`,
      values
    );

    const [updatedRow] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM master_parts WHERE id = ?",
      [id]
    );

    if (machineVal) {
      await upsertStockAnalyticsFromMasterPart({
        part_number: updatedRow[0].part_number as string,
        part_name: updatedRow[0].part_name as string,
        model: updatedRow[0].model as string,
        machine: machineVal,
      });
    }

    res.json({ success: true, data: updatedRow[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [4] DELETE /api/master-parts/:id - delete a part
// ═══════════════════════════════════════════════════════════════════════════
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM master_parts WHERE id = ?", [id]);
    res.json({ success: true, message: "Part berhasil dihapus." });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: src/components/mesin/MinimumStockGrid.tsx
`````typescript
import type { TvMachine } from "@/hooks/use-tv-dashboard";

function statusIcon(status: TvMachine["cardStatus"]): string {
  switch (status) {
    case "critical":
      return "💔";
    case "warning":
      return "⚠️";
    case "safe":
      return "💚";
    default:
      return "-";
  }
}

type Props = {
  machines: TvMachine[];
  compact?: boolean;
  showPartTable?: boolean;
};

export function MinimumStockGrid({
  machines,
  compact,
  showPartTable = false,
}: Props) {
  if (machines.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-4">
        Tidak ada mesin untuk factory ini.
      </p>
    );
  }

  return (
    <div
      className={
        compact
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          : "tv-machine-grid"
      }
    >
      {machines.map((m) => {
        const inactive = !m.isActive;
        const icon = statusIcon(m.cardStatus);
        const stockJam = m.stockJam ?? m.stokJam ?? 0;
        const val = inactive ? "N/A" : stockJam.toFixed(1);
        const sub = inactive ? "Running / Reset" : undefined;

        return (
          <div key={m.id} className={showPartTable ? "tv-mc-wrap" : undefined}>
            <div
              className={`tv-mc-card tv-mc-${m.cardStatus}${compact ? " tv-mc-compact" : ""}`}
            >
              <div className="tv-mc-id">{m.machineCode}</div>
              <div className="tv-mc-icon">{icon}</div>
              <div className="tv-mc-val">
                {val}
                {sub && <span className="tv-mc-sub">{sub}</span>}
              </div>
            </div>

            {showPartTable && m.partRows && m.partRows.length > 0 && (
              <div className="tv-mc-parts-table" style={{ display: "none" }}>
                <table className="tv-priority-table w-full">
                  <thead>
                    <tr>
                      <th>Part</th>
                      <th>PN</th>
                      <th>JAM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {m.partRows.map((row, idx) => (
                      <tr key={`${m.machineCode}-${idx}`}>
                        <td>{row.part}</td>
                        <td
                          style={{
                            fontWeight: 700,
                            color:
                              row.pn === "X"
                                ? "var(--color-critical)"
                                : "var(--color-safe)",
                          }}
                        >
                          {row.pn}
                        </td>
                        <td>{row.jam.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
`````

## File: src/hooks/use-master-parts.ts
`````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

export type MasterPart = {
  id: number;
  part_number: string;
  part_name: string;
  category: string;
  model: string;
  customer: string;
  qty_per_pallet: number;
  unit: string;
  status: "active" | "inactive";
  factory_origin: string;
  machine?: string | null;
  image_base64: string | null;
  created_at: string;
  updated_at: string;
};

export type CreatePartPayload = {
  partNumber: string;
  partName: string;
  category?: string;
  model?: string;
  customer?: string;
  qtyPerPallet: number;
  unit?: string;
  status: "active" | "inactive";
  factoryOrigin?: string;
  machine?: string;
  imageBase64?: string | null;
};

// ── List all parts (with optional search) ────────────────────────────────
export function useMasterParts(search = "") {
  return useQuery({
    queryKey: ["master-parts", search],
    queryFn: () =>
      fetchApi<MasterPart[]>(
        `/master-parts${search ? `?search=${encodeURIComponent(search)}` : ""}`
      ),
    staleTime: 1000 * 30,
  });
}

// ── Create a new part ─────────────────────────────────────────────────────
export function useCreateMasterPart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreatePartPayload) =>
      fetchApi<MasterPart>("/master-parts", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["master-parts"] });
    },
  });
}

// ── Update a part ─────────────────────────────────────────────────────────
export function useUpdateMasterPart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...payload }: CreatePartPayload & { id: number }) =>
      fetchApi<MasterPart>(`/master-parts/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["master-parts"] });
    },
  });
}

// ── Delete a part ─────────────────────────────────────────────────────────
export function useDeleteMasterPart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      fetchApi<{ message: string }>(`/master-parts/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["master-parts"] });
    },
  });
}
`````

## File: src/hooks/use-stock.ts
`````typescript
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

export type StockRow = {
  id: number;
  batch_id: string;
  qr_id: string;
  part_name: string;
  factory: string;
  unit_value: number;
  current_stock: number;
  trend: "up" | "down" | "none";
  percentage: number;
  created_at: string;
  updated_at: string;
};

export type StockStats = {
  totalUnits: number;
  skuCount: number;
  emptyStock: number;
};

export function useStock(search = "", factory = "All") {
  return useQuery({
    queryKey: ["stock", search, factory],
    queryFn: () =>
      fetchApi<StockRow[]>(
        `/qr/stock?search=${encodeURIComponent(search)}&factory=${encodeURIComponent(factory)}`
      ),
    refetchInterval: 8000, // refresh every 8s
  });
}

export function useStockStats() {
  return useQuery({
    queryKey: ["stock-stats"],
    queryFn: () => fetchApi<StockStats>("/qr/stock/stats"),
    refetchInterval: 8000,
  });
}

export function useStockFactories() {
  return useQuery({
    queryKey: ["stock-factories"],
    queryFn: () => fetchApi<string[]>("/qr/stock/factories"),
    // Factory list rarely changes - treat as near-static to avoid
    // re-fetching on every component mount (e.g. factory filter dropdown).
    staleTime: 5 * 60 * 1000,
  });
}
`````

## File: src/router.tsx
`````typescript
import { createRouter, useRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-destructive"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          An unexpected error occurred. Please try again.
        </p>
        {import.meta.env.DEV && error.message && (
          <pre className="mt-4 max-h-40 overflow-auto rounded-md bg-muted p-3 text-left font-mono text-xs text-destructive">
            {error.message}
          </pre>
        )}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPreload: "intent",
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
`````

## File: vite.config.ts
`````typescript
// @RizkyDaffy/vite-tanstack-config already includes the following - do NOT add em manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
    server: {
        allowedHosts: true,
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                changeOrigin: true,
                secure: false,
            },
        },
    },
})
`````

## File: server/routes/stockAnalytics.ts
`````typescript
import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import {
  computeStockAnalytics,
  classifyStockJam,
} from "../lib/stockAnalyticsCalc.js";
import { persistComputedFields } from "../lib/stockAnalyticsService.js";

const router = Router();

function rowToPayload(row: RowDataPacket) {
  return {
    id: row.id,
    machine: row.machine,
    model: row.model,
    partNumber: row.part_number,
    partName: row.part_name,
    qtyPerDay: Number(row.qty_per_day),
    stockActual: Number(row.stock_actual),
    stockJam: Number(row.stok_jam),
    stokJam: Number(row.stok_jam),
    judge: row.judge,
    problem: row.problem,
    shikake: Number(row.shikake),
    qtyPerHour: Number(row.qty_per_hour),
    min: Number(row.min_val),
    max: Number(row.max_val),
    jamUpdate: row.jam_update,
    pic: row.pic,
    keterangan: row.keterangan,
    factory: row.factory,
  };
}

// GET /api/stock-analytics
router.get("/", async (req, res) => {
  try {
    const factory = (req.query.factory as string) || "";
    let query = "SELECT * FROM stock_analytics WHERE 1=1";
    const params: string[] = [];
    if (factory) {
      query += " AND factory = ?";
      params.push(factory);
    }
    query += " ORDER BY machine ASC";
    const [rows] = await pool.query<RowDataPacket[]>(query, params);
    res.json({ success: true, data: rows.map(rowToPayload) });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// GET /api/stock-analytics/tv - aggregated TV dashboard payload
router.get("/tv", async (req, res) => {
  try {
    const factory = (req.query.factory as string) || "";
    const shift = (req.query.shift as string) || "";

    let mesinQuery = "SELECT * FROM mesin WHERE 1=1";
    const mesinParams: string[] = [];
    if (factory) {
      mesinQuery += " AND factory = ?";
      mesinParams.push(factory);
    }
    mesinQuery += " ORDER BY machine_code ASC";
    const [mesinRows] = await pool.query<RowDataPacket[]>(
      mesinQuery,
      mesinParams
    );

    let analyticsQuery = "SELECT * FROM stock_analytics WHERE 1=1";
    const analyticsParams: string[] = [];
    if (factory) {
      analyticsQuery += " AND factory = ?";
      analyticsParams.push(factory);
    }
    const [analyticsRows] = await pool.query<RowDataPacket[]>(
      analyticsQuery,
      analyticsParams
    );

    const analyticsByMachine = new Map<string, RowDataPacket[]>();
    for (const a of analyticsRows) {
      const key = String(a.machine).toUpperCase();
      const list = analyticsByMachine.get(key) ?? [];
      list.push(a);
      analyticsByMachine.set(key, list);
    }

    let partsQuery = `SELECT mp.part_name, mp.part_number, mp.machine,
        sa.stok_jam, sa.judge
      FROM master_parts mp
      LEFT JOIN stock_analytics sa
        ON UPPER(sa.part_number) = UPPER(mp.part_number)
        AND UPPER(sa.machine) = UPPER(mp.machine)
      WHERE mp.machine IS NOT NULL AND mp.machine != ''`;
    const partsParams: string[] = [];
    if (factory) {
      partsQuery += ` AND UPPER(mp.machine) IN (
        SELECT UPPER(machine_code) FROM mesin WHERE factory = ?
      )`;
      partsParams.push(factory);
    }
    partsQuery += " ORDER BY mp.machine, mp.part_name";
    const [partRows] = await pool.query<RowDataPacket[]>(
      partsQuery,
      partsParams
    );

    const partsByMachine = new Map<
      string,
      { part: string; pn: string; jam: number }[]
    >();
    for (const p of partRows) {
      const key = String(p.machine).toUpperCase();
      const list = partsByMachine.get(key) ?? [];
      list.push({
        part: p.part_name as string,
        pn: (p.judge as string) || "O",
        jam: Number(p.stok_jam) || 0,
      });
      partsByMachine.set(key, list);
    }

    let stockQuery = "SELECT * FROM stock WHERE 1=1";
    const stockParams: string[] = [];
    if (factory) {
      stockQuery += " AND factory = ?";
      stockParams.push(factory);
    }
    stockQuery += " ORDER BY part_name ASC";
    const [stockRows] = await pool.query<RowDataPacket[]>(
      stockQuery,
      stockParams
    );

    const machines = mesinRows.map((m) => {
      const isActive = m.status === "active";
      const machineKey = String(m.machine_code).toUpperCase();
      const rowsForMachine = analyticsByMachine.get(machineKey) ?? [];

      const stockJamValues = rowsForMachine.map((r) => Number(r.stok_jam) || 0);
      const stokJam =
        stockJamValues.length > 0 ? Math.min(...stockJamValues) : 0;

      const cardStatus = classifyStockJam(stokJam, isActive);
      const partTable = partsByMachine.get(machineKey) ?? [];

      return {
        id: m.id,
        machineCode: m.machine_code,
        machineName: m.machine_name,
        status: m.status,
        isActive,
        stokJam,
        stockJam: stokJam,
        cardStatus,
        partRows: partTable,
      };
    });

    const activeWithStock = machines.filter((m) => m.isActive);
    const critical = activeWithStock.filter((m) => m.cardStatus === "critical").length;
    const warning = activeWithStock.filter((m) => m.cardStatus === "warning").length;
    const safe = activeWithStock.filter((m) => m.cardStatus === "safe").length;

    const gaugePercent =
      activeWithStock.length > 0
        ? Math.round((safe / activeWithStock.length) * 1000) / 10
        : 0;

    const chartLabels = stockRows.map((s) => s.part_name as string);
    const chartData = stockRows.map((s) => Number(s.current_stock ?? s.units ?? 0));

    // Enrich chart bars with jam-hour and status per part (joined from stock_analytics)
    const jamByPart = new Map<string, number>();
    for (const a of analyticsRows) {
      const key = String(a.part_name).toUpperCase();
      const existing = jamByPart.get(key);
      const jam = Number(a.stok_jam) || 0;
      // take the minimum jam per part name (matches existing getStatus logic)
      if (existing === undefined || jam < existing) jamByPart.set(key, jam);
    }
    const chartStokJam = stockRows.map((s) => {
      const key = String(s.part_name).toUpperCase();
      return jamByPart.get(key) ?? 0;
    });
    const chartStatus = chartStokJam.map((jam) => classifyStockJam(jam, true));

    const priorityOrder = { critical: 0, warning: 1, safe: 2, none: 3 };
    const priorities = [...machines]
      .filter((m) => m.isActive && m.cardStatus !== "safe" && m.cardStatus !== "none")
      .sort(
        (a, b) =>
          priorityOrder[a.cardStatus] - priorityOrder[b.cardStatus] ||
          a.stokJam - b.stokJam
      )
      .flatMap((m) =>
        (m.partRows.length > 0 ? m.partRows : [{ part: "-", pn: "-", jam: m.stokJam }]).map(
          (row) => ({
            machine: m.machineCode,
            partName: row.part,
            partNumber: row.pn,
            stokJam: row.jam,
            status: m.cardStatus,
          })
        )
      );

    res.json({
      success: true,
      data: {
        factory,
        shift,
        counts: { critical, warning, safe },
        gaugePercent,
        machines,
        chartLabels,
        chartData,
        chartStokJam,
        chartStatus,
        priorities,
      },
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// POST /api/stock-analytics
router.post("/", async (req, res) => {
  try {
    const {
      machine,
      model = "",
      partNumber = "",
      partName = "",
      qtyPerDay = 0,
      stockActual = 0,
      problem = "",
      shikake = 1,
      minVal = 0,
      pic = "",
      keterangan = "",
      factory = "",
    } = req.body;

    if (!machine) {
      return res.status(400).json({ success: false, error: "Machine wajib diisi." });
    }

    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO stock_analytics
        (machine, model, part_number, part_name, qty_per_day, stock_actual, stok_jam, judge,
         problem, shikake, qty_per_hour, min_val, max_val, jam_update, pic, keterangan, factory)
       VALUES (?, ?, ?, ?, ?, ?, 0, 'O', ?, ?, 0, ?, 0, '0:00:00', ?, ?, ?)`,
      [
        String(machine).trim().toUpperCase(),
        model,
        partNumber,
        partName,
        qtyPerDay,
        stockActual,
        problem,
        shikake,
        minVal,
        pic || "unknown",
        keterangan,
        factory,
      ]
    );

    const [newRow] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM stock_analytics WHERE id = ?",
      [result.insertId]
    );
    if (newRow[0]) await persistComputedFields(newRow[0]);
    const [fresh] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM stock_analytics WHERE id = ?",
      [result.insertId]
    );
    res.status(201).json({ success: true, data: rowToPayload(fresh[0]) });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// PUT /api/stock-analytics/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      machine,
      model = "",
      partNumber = "",
      partName = "",
      qtyPerDay = 0,
      stockActual = 0,
      problem = "",
      shikake = 1,
      minVal = 0,
      pic = "",
      keterangan = "",
      factory = "",
    } = req.body;

    await pool.query(
      `UPDATE stock_analytics SET
        machine = ?, model = ?, part_number = ?, part_name = ?,
        qty_per_day = ?, stock_actual = ?,
        problem = ?, shikake = ?, min_val = ?, keterangan = ?, factory = ?
       WHERE id = ?`,
      [
        String(machine).trim().toUpperCase(),
        model,
        partNumber,
        partName,
        qtyPerDay,
        stockActual,
        problem,
        shikake,
        minVal,
        keterangan,
        factory,
        id,
      ]
    );

    const [beforePersist] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM stock_analytics WHERE id = ?",
      [id]
    );
    if (beforePersist[0]) await persistComputedFields(beforePersist[0]);
    const [row] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM stock_analytics WHERE id = ?",
      [id]
    );
    res.json({ success: true, data: rowToPayload(row[0]) });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// DELETE /api/stock-analytics/:id
router.delete("/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM stock_analytics WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Deleted" });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: src/components/dashboard/DashboardLayout.tsx
`````typescript
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { SidebarContent } from "./Sidebar";

export function DashboardLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen w-full bg-surface-page">
      {/* Desktop sidebar */}
      <div className="fixed inset-y-0 left-0 z-30 hidden md:block">
        <SidebarContent collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-smooth ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-smooth ${mobileOpen ? "opacity-100" : "opacity-0"
            }`}
        />
        <div
          className={`absolute inset-y-0 left-0 transition-smooth ${mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="relative h-full">
            <SidebarContent
              collapsed={false}
              onToggle={() => setMobileOpen(false)}
              onNavigate={() => setMobileOpen(false)}
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-card-elevated text-muted-foreground transition-smooth hover:bg-accent hover:text-foreground md:hidden"
              aria-label="Close menu"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        className={`transition-smooth ${collapsed ? "md:pl-[84px]" : "md:pl-[280px]"
          }`}
      >
        {/* Mobile top bar */}
        <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-border-surface bg-surface-sidebar px-4 py-3 backdrop-blur md:hidden">
          <div className="text-sm font-semibold tracking-wide">SUGITY CREATIVES</div>
          <button
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition-smooth hover:bg-accent"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-10 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
`````

## File: src/hooks/use-qr-codes.ts
`````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

export type QrItem = {
  id: number;
  qr_id: string;
  batch_id: string | null;
  part_name: string;
  factory: string;
  material: string;
  qr_value: string;
  units: number;
  token: string | null;
  short_token: string | null;
  qr_image_base64: string | null;
  machine_origin: string | null;
  status: "in" | "out";
  created_at: string;
  updated_at: string;
};

export type GenerateQrPayload = {
  partName: string;
  factoryOrigin: string;
  value: number;
  machineOrigin?: string;
  partId?: number; // Links QR to master_parts.id for stable edit-mode lookups
};

export type GenerateQrResult = {
  batchId: string;
  qrId: string;
  qrContentUrl: string;
  qrImageBase64: string;
  partName: string;
  factoryOrigin: string;
  value: number;
  machineOrigin?: string; // [NEW] additive
  status: "in" | "out";
  row: QrItem;
};

export function useQrCodes(search = "") {
  return useQuery({
    queryKey: ["qr-codes", search],
    queryFn: () => fetchApi<QrItem[]>(`/qr${search ? `?search=${encodeURIComponent(search)}` : ""}`),
  });
}

// Stable lookup: fetch the latest QR linked to a master_parts row by its integer ID.
// Returns null (not an error) when the part has no QR yet.
export function useQrByPartId(partId: number | undefined) {
  return useQuery({
    queryKey: ["qr-by-part", partId],
    queryFn: () => fetchApi<QrItem | null>(`/qr/by-part/${partId}`),
    enabled: !!partId,
    // 5s window prevents rapid-fire refetches within the same open dialog.
    // Mutations that change QR data already call invalidateQueries() which
    // bypasses staleTime, so freshness on actual changes is not affected.
    staleTime: 5_000,
  });
}

export function useGenerateQrCode() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: GenerateQrPayload) =>
      fetchApi<GenerateQrResult>("/qr/generate", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qr-codes"] });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export type RegenerateQrPayload = GenerateQrPayload & {
  oldShortToken: string;
};

export function useRegenerateQrCode() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RegenerateQrPayload) =>
      fetchApi<GenerateQrResult>("/qr/regenerate", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qr-codes"] });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["stock"] });
    },
  });
}

// Keep for backward compatibility
export function useCreateQrCode() {
  return useGenerateQrCode();
}

export function useDeleteQrCode() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      fetchApi<{ success: true; message: string }>(`/qr/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qr-codes"] });
    },
  });
}
`````

## File: src/hooks/use-tv-dashboard.ts
`````typescript
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api";

export type TvMachinePartRow = {
  part: string;
  pn: string;
  jam: number;
};

export type TvMachine = {
  id: number;
  machineCode: string;
  machineName: string;
  status: string;
  isActive: boolean;
  stokJam: number;
  stockJam?: number;
  cardStatus: "none" | "critical" | "warning" | "safe";
  partRows: TvMachinePartRow[];
};

export type TvPriority = {
  machine: string;
  partName: string;
  partNumber: string;
  stokJam: number;
  status: string;
};

export type TvDashboardData = {
  factory: string;
  shift: string;
  counts: { critical: number; warning: number; safe: number };
  gaugePercent: number;
  machines: TvMachine[];
  chartLabels: string[];
  chartData: number[];
  /** Jam-hours per chart bar (from stock_analytics join). 0 when no analytics row found. */
  chartStokJam: number[];
  /** Status per chart bar derived from chartStokJam thresholds. */
  chartStatus: ("critical" | "warning" | "safe" | "none")[];
  priorities: TvPriority[];
};

export function useTvDashboard(
  factory: string,
  shift: string,
  enabled = true
) {
  return useQuery({
    queryKey: ["tv-dashboard", factory, shift],
    queryFn: () =>
      fetchApi<TvDashboardData>(
        `/stock-analytics/tv?factory=${encodeURIComponent(factory)}&shift=${encodeURIComponent(shift)}`
      ),
    refetchInterval: 3000,
    enabled: enabled && !!factory,
  });
}
`````

## File: src/routes/devices.tsx
`````typescript
import { useState, useMemo, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Smartphone,
  Tablet,
  Wifi,
  WifiOff,
  Battery,
  MoreHorizontal,
  Search,
  Plus,
  LayoutGrid,
  List,
  X,
  Loader2,
  AlertCircle,
  Trash2,
  Pencil,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  useDevices,
  useCreateDevice,
  useDeleteDevice,
  useUpdateDevice,
  type DeviceRow,
  type CreateDevicePayload,
} from "@/hooks/use-devices";
import { FactoryApi } from "@/hooks/use-master-data";

export const Route = createFileRoute("/devices")({
  head: () => ({
    meta: [
      { title: "Device Management - Sugity Creatives" },
      { name: "description", content: "Management perangkat scanner." },
    ],
  }),
  component: DevicesPage,
});

// ── Helpers ───────────────────────────────────────────────────────────────────

function getLastSyncLabel(lastSync: string): string {
  const syncDate = new Date(lastSync);
  const now = new Date();
  const diffMin = Math.floor((now.getTime() - syncDate.getTime()) / 60000);
  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin} min ago`;
  if (diffMin < 1440) return `${Math.floor(diffMin / 60)} h ago`;
  return "Yesterday";
}

// ── Add Device Modal ──────────────────────────────────────────────────────────

function AddDeviceModal({ onClose }: { onClose: () => void }) {
  const createDevice = useCreateDevice();
  const { data: factories = [], isLoading: isLoadingFactories } = FactoryApi.useGetAll();
  const [form, setForm] = useState<CreateDevicePayload>({
    device_code: "",
    name: "",
    location: "",
    device_role: "IN",
    pin: "",
    model: "Scanner",
    type: "phone",
    active_status: "active",
  });
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = useCallback(
    <K extends keyof CreateDevicePayload>(key: K, value: CreateDevicePayload[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setFormError(null);
      createDevice.mutate(form, {
        onSuccess: () => onClose(),
        onError: (err) => setFormError(err.message),
      });
    },
    [form, createDevice, onClose]
  );

  const inputCls =
    "w-full rounded-xl border border-border bg-card-elevated px-4 py-2.5 text-sm outline-none transition-smooth focus:border-primary/60 focus:ring-1 focus:ring-primary/30";
  const labelCls = "block text-xs font-medium text-muted-foreground mb-1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-border bg-card shadow-xl p-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-semibold text-foreground">Tambah Devices</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Daftarkan perangkat baru ke sistem</p>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 inline-flex items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-smooth"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {formError && (
          <div className="mb-4 flex items-start gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Device Code */}
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="dc-device-code" className={labelCls}>
                Device Code <span className="text-destructive">*</span>
              </label>
              <input
                id="dc-device-code"
                value={form.device_code}
                onChange={(e) => handleChange("device_code", e.target.value)}
                placeholder="cth: scanner-a01"
                required
                className={inputCls}
              />
            </div>

            {/* Device Name */}
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="dc-name" className={labelCls}>
                Device Name <span className="text-destructive">*</span>
              </label>
              <input
                id="dc-name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="cth: Scanner A-01"
                required
                className={inputCls}
              />
            </div>

            {/* Location */}
            <div className="col-span-2">
              <label htmlFor="dc-location" className={labelCls}>
                Location <span className="text-muted-foreground/50">(Opsional)</span>
              </label>
              <select
                id="dc-location"
                value={form.location}
                onChange={(e) => handleChange("location", e.target.value)}
                disabled={isLoadingFactories}
                className={inputCls}
              >
                <option value="">-- Pilih Factory --</option>
                {factories.map((f) => (
                  <option key={f.id} value={f.name}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Device Role */}
            <div>
              <label htmlFor="dc-role" className={labelCls}>
                Device Role <span className="text-destructive">*</span>
              </label>
              <select
                id="dc-role"
                value={form.device_role}
                onChange={(e) => handleChange("device_role", e.target.value as "IN" | "OUT")}
                required
                className={inputCls}
              >
                <option value="IN">IN - Scan Masuk</option>
                <option value="OUT">OUT - Scan Keluar</option>
              </select>
            </div>

            {/* PIN */}
            <div>
              <label htmlFor="dc-pin" className={labelCls}>
                PIN <span className="text-destructive">*</span>
              </label>
              <input
                id="dc-pin"
                type="password"
                value={form.pin}
                onChange={(e) => handleChange("pin", e.target.value)}
                placeholder="Min. 4 karakter"
                required
                minLength={4}
                className={inputCls}
              />
            </div>

            {/* Device Type */}
            <div>
              <label htmlFor="dc-type" className={labelCls}>Model Perangkat</label>
              <select
                id="dc-type"
                value={form.type}
                onChange={(e) => handleChange("type", e.target.value as "phone" | "tablet")}
                className={inputCls}
              >
                <option value="phone">Phone / Scanner</option>
                <option value="tablet">Tablet</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="dc-status" className={labelCls}>Status</label>
              <select
                id="dc-status"
                value={form.active_status}
                onChange={(e) => handleChange("active_status", e.target.value as "active" | "inactive")}
                className={inputCls}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-border py-2.5 text-sm font-medium text-muted-foreground transition-smooth hover:bg-accent hover:text-foreground"
            >
              Batal
            </button>
            <button
              id="dc-submit"
              type="submit"
              disabled={createDevice.isPending}
              className="flex-1 rounded-xl bg-[#c05c30] py-2.5 text-sm font-semibold text-white transition-smooth hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {createDevice.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Simpan Device"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Edit Device Modal ─────────────────────────────────────────────────────────

function EditDeviceModal({ device, onClose }: { device: DeviceRow; onClose: () => void }) {
  const updateDevice = useUpdateDevice();
  const { data: factories = [], isLoading: isLoadingFactories } = FactoryApi.useGetAll();
  const [form, setForm] = useState<Partial<CreateDevicePayload>>({
    device_code: device.device_code || "",
    name: device.name,
    location: device.location || "",
    device_role: device.device_role,
    pin: "", // Optional during edit
    model: device.model,
    type: device.type,
  });
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = useCallback(
    <K extends keyof CreateDevicePayload>(key: K, value: CreateDevicePayload[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setFormError(null);
      updateDevice.mutate({ id: device.id, payload: form }, {
        onSuccess: () => onClose(),
        onError: (err) => setFormError(err.message),
      });
    },
    [device.id, form, updateDevice, onClose]
  );

  const inputCls =
    "w-full rounded-xl border border-border bg-card-elevated px-4 py-2.5 text-sm outline-none transition-smooth focus:border-primary/60 focus:ring-1 focus:ring-primary/30";
  const labelCls = "block text-xs font-medium text-muted-foreground mb-1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-border bg-card shadow-xl p-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-semibold text-foreground">Edit Devices</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Ubah informasi perangkat</p>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 inline-flex items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-smooth"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {formError && (
          <div className="mb-4 flex items-start gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Device Code */}
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="edit-device-code" className={labelCls}>
                Device Code <span className="text-destructive">*</span>
              </label>
              <input
                id="edit-device-code"
                value={form.device_code}
                onChange={(e) => handleChange("device_code", e.target.value)}
                placeholder="cth: scanner-a01"
                required
                className={inputCls}
              />
            </div>

            {/* Device Name */}
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="edit-name" className={labelCls}>
                Device Name <span className="text-destructive">*</span>
              </label>
              <input
                id="edit-name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="cth: Scanner A-01"
                required
                className={inputCls}
              />
            </div>

            {/* Location */}
            <div className="col-span-2">
              <label htmlFor="edit-location" className={labelCls}>
                Location <span className="text-muted-foreground/50">(Opsional)</span>
              </label>
              <select
                id="edit-location"
                value={form.location}
                onChange={(e) => handleChange("location", e.target.value)}
                disabled={isLoadingFactories}
                className={inputCls}
              >
                <option value="">-- Pilih Factory --</option>
                {factories.map((f) => (
                  <option key={f.id} value={f.name}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Device Role */}
            <div>
              <label htmlFor="edit-role" className={labelCls}>
                Device Role <span className="text-destructive">*</span>
              </label>
              <select
                id="edit-role"
                value={form.device_role}
                onChange={(e) => handleChange("device_role", e.target.value as "IN" | "OUT")}
                required
                className={inputCls}
              >
                <option value="IN">IN - Scan Masuk</option>
                <option value="OUT">OUT - Scan Keluar</option>
              </select>
            </div>

            {/* PIN */}
            <div>
              <label htmlFor="edit-pin" className={labelCls}>
                PIN <span className="text-muted-foreground/50">(Opsional)</span>
              </label>
              <input
                id="edit-pin"
                type="password"
                value={form.pin}
                onChange={(e) => handleChange("pin", e.target.value)}
                placeholder="Abaikan jika tdk diubah"
                minLength={4}
                className={inputCls}
              />
            </div>

            {/* Device Type */}
            <div className="col-span-2">
              <label htmlFor="edit-type" className={labelCls}>Model Perangkat</label>
              <select
                id="edit-type"
                value={form.type}
                onChange={(e) => handleChange("type", e.target.value as "phone" | "tablet")}
                className={inputCls}
              >
                <option value="phone">Phone / Scanner</option>
                <option value="tablet">Tablet</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-border py-2.5 text-sm font-medium text-muted-foreground transition-smooth hover:bg-accent hover:text-foreground"
            >
              Batal
            </button>
            <button
              id="edit-submit"
              type="submit"
              disabled={updateDevice.isPending}
              className="flex-1 rounded-xl bg-[#c05c30] py-2.5 text-sm font-semibold text-white transition-smooth hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {updateDevice.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Simpan Perubahan"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Device Card (Grid) - ORIGINAL CODE UNTOUCHED ─────────────────────────────

function DeviceCard({ d, onDelete, onEdit }: { d: DeviceRow; onDelete: (id: number) => void; onEdit: (d: DeviceRow) => void }) {
  const TypeIcon = d.type === "phone" ? Smartphone : Tablet;
  const isOnline = d.status === "online";
  const lastSyncLabel = getLastSyncLabel(d.last_sync);

  return (
    <div className="rounded-3xl border border-border-surface bg-card p-5 transition-smooth hover:bg-card-elevated/40">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-card-elevated text-foreground/90">
            <TypeIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">{d.name}</div>
            <div className="text-xs text-muted-foreground">{d.model}</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {d.device_code && (
            <span className="rounded-full bg-card-elevated px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              {d.device_role}
            </span>
          )}
          {/* Triple-dot menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-smooth hover:bg-accent hover:text-foreground"
                aria-label="More options"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem className="gap-2 cursor-pointer" onClick={() => onEdit(d)}>
                <Pencil className="h-3.5 w-3.5" />
                Edit item ini
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="gap-2 cursor-pointer text-destructive focus:text-destructive"
                onClick={() => onDelete(d.id)}
              >
                <Trash2 className="h-3.5 w-3.5" />
                Hapus item ini
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${isOnline
            ? "bg-[#00bc7d] text-white"
            : "bg-card-elevated text-muted-foreground"
            }`}
        >
          {isOnline ? <Wifi className="h-3.5 w-3.5" /> : <WifiOff className="h-3.5 w-3.5" />}
          {isOnline ? "Online" : "Offline"}
        </span>
        <span
          className={`inline-flex items-center gap-1 text-xs ${d.battery < 20 ? "text-destructive" : "text-muted-foreground"
            }`}
        >
          <Battery className="h-3.5 w-3.5" />
          {d.battery}%
        </span>
      </div>

      <div className="mt-4 space-y-1 border-t border-border pt-4 text-xs">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Location</span>
          <span className="text-foreground">{d.location || "-"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Last Sync</span>
          <span className="text-foreground">{lastSyncLabel}</span>
        </div>
      </div>
    </div>
  );
}

// ── Device List Row (Table) ───────────────────────────────────────────────────

function DeviceListView({
  devices,
  onDelete,
  onEdit,
}: {
  devices: DeviceRow[];
  onDelete: (id: number) => void;
  onEdit: (d: DeviceRow) => void;
}) {
  return (
    <div className="rounded-3xl border border-border-surface bg-card overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Perangkat
            </th>
            <th className="px-4 py-3.5 text-left text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground hidden sm:table-cell">
              Code
            </th>
            <th className="px-4 py-3.5 text-left text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground hidden md:table-cell">
              Lokasi
            </th>
            <th className="px-4 py-3.5 text-left text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Role
            </th>
            <th className="px-4 py-3.5 text-left text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Status
            </th>
            <th className="px-4 py-3.5 text-left text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground hidden lg:table-cell">
              Baterai
            </th>
            <th className="px-4 py-3.5 text-left text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground hidden xl:table-cell">
              Last Sync
            </th>
            <th className="px-4 py-3.5 text-right text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {devices.map((d, i) => {
            const TypeIcon = d.type === "phone" ? Smartphone : Tablet;
            const isOnline = d.status === "online";
            return (
              <tr
                key={d.id}
                className={`transition-smooth hover:bg-card-elevated/50 ${i !== devices.length - 1 ? "border-b border-border/60" : ""
                  }`}
              >
                {/* Perangkat */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-card-elevated flex items-center justify-center text-foreground/70 shrink-0">
                      <TypeIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{d.name}</div>
                      <div className="text-xs text-muted-foreground">{d.model}</div>
                    </div>
                  </div>
                </td>

                {/* Code */}
                <td className="px-4 py-3.5 hidden sm:table-cell">
                  <span className="font-mono text-xs bg-card-elevated px-2 py-1 rounded-lg text-muted-foreground">
                    {d.device_code || "-"}
                  </span>
                </td>

                {/* Location */}
                <td className="px-4 py-3.5 hidden md:table-cell">
                  <span className="text-sm text-foreground">{d.location || "-"}</span>
                </td>

                {/* Role */}
                <td className="px-4 py-3.5">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${d.device_role === "IN"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                      }`}
                  >
                    {d.device_role || "-"}
                  </span>
                </td>

                {/* Status */}
                <td className="px-4 py-3.5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${isOnline
                      ? "bg-pixel-blue-soft/20 text-[oklch(0.82_0.06_245)]"
                      : "bg-card-elevated text-muted-foreground"
                      }`}
                  >
                    {isOnline ? <Wifi className="h-3 w-3" /> : <WifiOff className="h-3 w-3" />}
                    {isOnline ? "Online" : "Offline"}
                  </span>
                </td>

                {/* Battery */}
                <td className="px-4 py-3.5 hidden lg:table-cell">
                  <span
                    className={`inline-flex items-center gap-1 text-xs ${d.battery < 20 ? "text-destructive" : "text-muted-foreground"
                      }`}
                  >
                    <Battery className="h-3.5 w-3.5" />
                    {d.battery}%
                  </span>
                </td>

                {/* Last Sync */}
                <td className="px-4 py-3.5 hidden xl:table-cell text-xs text-muted-foreground">
                  {getLastSyncLabel(d.last_sync)}
                </td>

                {/* Actions */}
                <td className="px-4 py-3.5 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-smooth hover:bg-accent hover:text-foreground"
                        aria-label="More options"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem className="gap-2 cursor-pointer" onClick={() => onEdit(d)}>
                        <Pencil className="h-3.5 w-3.5" />
                        Edit item ini
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="gap-2 cursor-pointer text-destructive focus:text-destructive"
                        onClick={() => onDelete(d.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Hapus item ini
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

function DevicesPage() {
  const { data: devices = [], isLoading } = useDevices();
  const deleteDevice = useDeleteDevice();

  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingDevice, setEditingDevice] = useState<DeviceRow | null>(null);

  const online = devices.filter((d) => d.status === "online").length;

  const filtered = useMemo(() => {
    if (!search.trim()) return devices;
    const q = search.toLowerCase();
    return devices.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        (d.device_code ?? "").toLowerCase().includes(q) ||
        (d.location ?? "").toLowerCase().includes(q)
    );
  }, [devices, search]);

  const handleDelete = useCallback(
    (id: number) => {
      if (!confirm("Hapus perangkat ini? Tindakan ini tidak bisa dibatalkan.")) return;
      deleteDevice.mutate(id);
    },
    [deleteDevice]
  );

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">
        {/* Page header */}
        <div className="mb-6 flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Device
          </span>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Perangkat Terhubung
            </h1>
            {/* Online status pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C05C30] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C05C30]" />
              </span>
              <span className="text-muted-foreground">
                <span className="text-foreground font-medium">{online}</span>{" "}
                dari {devices.length} perangkat aktif
              </span>
            </div>
          </div>
        </div>

        {/* ── Toolbar ────────────────────────────────────────────────────── */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="search-devices"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari Kode Mesin atau Namanya..."
              className="h-10 w-full rounded-full border border-transparent bg-card pl-10 pr-4 text-sm outline-none transition-smooth focus:border-primary/60"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Add button */}
            <button
              id="btn-tambah-devices"
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 rounded-full bg-[#c05c30] px-4 py-2 text-sm font-semibold text-white transition-smooth hover:opacity-90"
            >
              <Plus className="h-4 w-4" />
              Tambah Devices
            </button>

            {/* Grid / List switcher */}
            <div className="inline-flex rounded-full border border-border bg-card p-1 text-xs">
              <button
                id="view-grid"
                onClick={() => setView("grid")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium transition-smooth ${view === "grid"
                  ? "bg-[#c05c30] text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                Grid
              </button>
              <button
                id="view-list"
                onClick={() => setView("list")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium transition-smooth ${view === "list"
                  ? "bg-[#00bc7d] text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <List className="h-3.5 w-3.5" />
                List
              </button>
            </div>
          </div>
        </div>

        {/* ── Content ──────────────────────────────────────────────────────── */}
        {isLoading ? (
          <div className="py-20 text-center text-sm text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin mx-auto mb-3 text-primary" />
            Memuat perangkat...
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center text-sm text-muted-foreground">
            {search ? `Tidak ada perangkat yang cocok dengan "${search}".` : "Belum ada perangkat terdaftar."}
          </div>
        ) : view === "grid" ? (
          /* ── GRID VIEW - ORIGINAL CODE UNTOUCHED ────────────────────── */
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((d) => (
              <DeviceCard key={d.id} d={d} onDelete={handleDelete} onEdit={setEditingDevice} />
            ))}
          </div>
        ) : (
          /* ── LIST VIEW ───────────────────────────────────────────────── */
          <DeviceListView devices={filtered} onDelete={handleDelete} onEdit={setEditingDevice} />
        )}
      </div>

      {/* Add Device Modal */}
      {showAddModal && <AddDeviceModal onClose={() => setShowAddModal(false)} />}

      {/* Edit Device Modal */}
      {editingDevice && (
        <EditDeviceModal
          device={editingDevice}
          onClose={() => setEditingDevice(null)}
        />
      )}
    </DashboardLayout>
  );
}
`````

## File: src/routes/qr-viewer.tsx
`````typescript
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, Printer, ScanLine } from "lucide-react";
import { useCallback } from "react";

export const Route = createFileRoute("/qr-viewer")({
  validateSearch: (search: Record<string, unknown>) => ({
    img: (search.img as string) || "",
    label: (search.label as string) || "QR Code",
    partname: (search.partname as string) || (search.label as string) || "",
    partnum: (search.partnum as string) || "",
    partmodel: (search.partmodel as string) || "",
    machineOrigin: (search.machineOrigin as string) || "",
    factoryOrigin: (search.factoryOrigin as string) || "",
    updatedAt: (search.updatedAt as string) || "",
  }),
  head: () => ({
    meta: [
      { title: "QR Viewer - Scan Dashboard" },
      { name: "description", content: "Full-size QR code viewer for printing." },
    ],
  }),
  component: QrViewerPage,
});

function QrViewerPage() {
  const { img, label, partname, partnum, partmodel, machineOrigin, factoryOrigin, updatedAt } = Route.useSearch();

  const handleDownload = useCallback(() => {
    if (!img) return;
    const link = document.createElement("a");
    link.href = img;
    link.download = `${(partname || label).replace(/\s+/g, "-")}-QR.png`;
    link.click();
  }, [img, label, partname]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  if (!img) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">No QR image provided.</p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-2 text-sm text-[#c05c30] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      {/* Print-friendly card */}
      <div
        id="qr-print-card"
        className="rounded-3xl border border-border-surface bg-surface-section p-8 flex flex-col items-center gap-6 max-w-[360px] w-full shadow-2xl print:border-none print:shadow-none print:bg-white print:p-0"
      >
        <div className="w-full text-center">
          <span className="inline-block rounded-full bg-[#c05c30]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c05c30] print:hidden">
            Sugity Creatives
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-black print:block">
            Sugity Creatives
          </span>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground print:text-black">
            {partname || label}
          </h1>
          {partnum && (
            <p className="mt-1 text-sm font-medium text-muted-foreground print:text-gray-600 font-mono">
              {partnum}
            </p>
          )}
        </div>

        {/* QR Image */}
        <div className="relative rounded-2xl bg-white p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] ring-1 ring-border-surface print:ring-0 print:shadow-none">
          <img
            src={img}
            alt={`QR code for ${label}`}
            className="h-56 w-56 object-contain"
          />
          {/* subtle corner brackets for a technical feel */}
          <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#c05c30]/40 rounded-tl-xl m-2 print:hidden" />
          <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#c05c30]/40 rounded-tr-xl m-2 print:hidden" />
          <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#c05c30]/40 rounded-bl-xl m-2 print:hidden" />
          <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#c05c30]/40 rounded-br-xl m-2 print:hidden" />
        </div>

        {/* Details Grid */}
        <div className="w-full grid grid-cols-2 gap-y-4 gap-x-2 rounded-2xl bg-card-elevated p-4 text-left ring-1 ring-border-surface print:bg-transparent print:ring-gray-300 print:px-2">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Part Model</div>
            <div className="mt-0.5 text-xs font-medium text-foreground print:text-black truncate">{partmodel || "-"}</div>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Homelane Factory</div>
            <div className="mt-0.5 text-xs font-medium text-foreground print:text-black truncate">{factoryOrigin || "-"}</div>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Homelane Machine</div>
            <div className="mt-0.5 text-xs font-medium text-foreground print:text-black truncate">{machineOrigin || "-"}</div>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Terakhir Di Update</div>
            <div className="mt-0.5 text-xs font-medium text-foreground print:text-black truncate">
              {updatedAt ? new Intl.DateTimeFormat("id-ID", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }).format(new Date(updatedAt)) : "-"}
            </div>
          </div>
        </div>

        <p className="w-full text-center text-[10px] uppercase tracking-wider text-muted-foreground/80 print:text-gray-500">
          <span className="flex items-center justify-center gap-1.5">
            <ScanLine className="h-3.5 w-3.5 print:hidden" />
            Scan to view live IN/OUT status
          </span>
        </p>
      </div>

      {/* Controls - hidden when printing */}
      <div className="mt-8 flex gap-3 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border-surface bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-sidebar-hover"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded-full border border-border-surface bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-sidebar-hover"
        >
          <Download className="h-4 w-4" />
          Download
        </button>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-full bg-[#c05c30] px-4 py-2.5 text-sm font-medium text-white transition-smooth hover:bg-[#a84d24] shadow-[0_4px_14px_rgba(192,92,48,0.25)]"
        >
          <Printer className="h-4 w-4" />
          Print QR
        </button>
      </div>
    </div>
  );
}
`````

## File: src/routes/scan.tsx
`````typescript
import { useEffect, useRef, useState, useCallback } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ScanLine,
  ShieldCheck,
  CircleDot,
  ChevronRight,
  History,
  CheckCircle2,
  XCircle,
  ArrowLeftRight,
  Loader2,
  RotateCcw,
  AlertCircle,
  Camera,
  ImageUp,
  Link2,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useProcessQr, useQrHistory, type ProcessQrResult } from "@/hooks/use-qr-process";
import { useScanSound } from "@/hooks/use-scan-sound";

export const Route = createFileRoute("/scan")({
  head: () => ({
    meta: [
      { title: "Scan QR - Sugity Creatives" },
      {
        name: "description",
        content: "Scan QR codes to toggle IN/OUT status with your device camera.",
      },
      { property: "og:title", content: "Scan QR - Sugity Creatives" },
    ],
  }),
  component: ScanPage,
});

// ── Detect if live camera API is available (requires HTTPS or localhost) ──────
function isCameraApiAvailable(): boolean {
  return (
    typeof navigator !== "undefined" &&
    typeof navigator.mediaDevices !== "undefined" &&
    typeof navigator.mediaDevices.getUserMedia === "function"
  );
}

function ScanPage() {
  const scannerRef = useRef<{ stop: () => Promise<void> } | null>(null);
  const lastScannedRef = useRef<string>("");
  const cooldownRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Synchronous refs - the camera callback reads these instead of stale closure state.
  // This fixes: Force OUT reading as IN, and 25fps multi-fire causing 8×3=24 per scan.
  const scanModeRef = useRef<"auto" | "forceIn" | "forceOut">("forceIn");
  const processingRef = useRef(false);

  const [mode, setMode] = useState<"live" | "file" | "url">("live");
  const [scanMode, setScanMode] = useState<"auto" | "forceIn" | "forceOut">("forceIn");
  const [scanning, setScanning] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [cameraStarted, setCameraStarted] = useState(false);
  const [scanResult, setScanResult] = useState<ProcessQrResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [scanError, setScanError] = useState<string | null>(null);
  const [manualUrl, setManualUrl] = useState("");
  const [fileDecoding, setFileDecoding] = useState(false);

  // Keep refs in sync with their state counterparts
  useEffect(() => { scanModeRef.current = scanMode; }, [scanMode]);
  useEffect(() => { processingRef.current = isProcessing; }, [isProcessing]);

  // Auto-switch to file mode on mobile HTTP (camera API unavailable)
  useEffect(() => {
    if (!isCameraApiAvailable()) {
      setMode("file");
    }
  }, []);

  const processQr = useProcessQr();
  const { data: history = [] } = useQrHistory();
  const { playInfo, playSuccess, playWarning } = useScanSound();

  // ── Extract token from raw QR value ──────────────────────────────────────
  // Handles three formats:
  //  1. Full URL with ?token= param (legacy)
  //  2. Direct JWT (3 dot-separated base64url segments, legacy)
  //  3. Short opaque token: ≤16 URL-safe alphanumeric chars (new QR format)
  const extractToken = useCallback((rawValue: string): string | null => {
    const trimmed = rawValue.trim();
    // Format 1: URL containing ?token=
    try {
      if (trimmed.includes("token=")) {
        const url = new URL(
          trimmed.startsWith("http") ? trimmed : `http://x?${trimmed}`
        );
        const t = url.searchParams.get("token");
        if (t) return t;
      }
    } catch { /* not a URL */ }
    // Format 2: Direct JWT (three dot-separated parts)
    if (trimmed.split(".").length === 3) return trimmed;
    // Format 3: Short opaque token (new system) - ≤16 URL-safe alphanumeric chars
    if (/^[A-Za-z0-9_-]{1,16}$/.test(trimmed)) return trimmed;
    return null;
  }, []);

  // ── Send token to backend and update UI ───────────────────────────────────
  // IMPORTANT: This callback is captured by the camera stream at start time.
  // It reads scanModeRef/processingRef (refs, not state) so it always sees
  // the latest value even if the user toggles Force IN ↔ OUT while scanning.
  const handleDetected = useCallback(
    (rawValue: string) => {
      const currentMode = scanModeRef.current;

      // Synchronous multi-fire guard - blocks all frames while one mutation is in flight
      if (processingRef.current) return;

      // In auto mode keep dedup; in force mode allow re-scanning same QR after cooldown
      if (currentMode === "auto" && lastScannedRef.current === rawValue) return;

      // Lock immediately (synchronous - prevents next camera frame)
      processingRef.current = true;
      lastScannedRef.current = rawValue;

      const token = extractToken(rawValue);
      if (!token) {
        // Invalid token - play warning immediately
        playWarning();
        setScanError("QR detected but does not contain a valid inventory token.");
        lastScannedRef.current = "";
        processingRef.current = false;
        return;
      }

      // Valid token - play info sound immediately on detection
      playInfo();
      setScanError(null);
      setIsProcessing(true);
      setScanResult(null);

      // Map scanMode → forceAction (undefined = auto-toggle)
      const forceAction =
        currentMode === "forceIn"
          ? "SCAN_IN"
          : currentMode === "forceOut"
            ? "SCAN_OUT"
            : undefined;

      processQr.mutate({ token, forceAction }, {
        onSuccess: (result) => {
          // Success - play success sound immediately when server responds
          playSuccess();
          setScanResult(result);
          setIsProcessing(false);
          processingRef.current = false;
          if (cooldownRef.current) clearTimeout(cooldownRef.current);
          // Force mode: 5s cooldown to prevent accidental rapid multi-scan.
          // Auto mode: 3s to prevent accidental double-toggle.
          const cooldownMs = currentMode !== "auto" ? 5000 : 3000;
          cooldownRef.current = setTimeout(() => {
            lastScannedRef.current = "";
          }, cooldownMs);
        },
        onError: (err) => {
          // Error - play warning sound immediately when server responds
          playWarning();
          setScanError(err.message || "Failed to process QR code.");
          setIsProcessing(false);
          processingRef.current = false;
          lastScannedRef.current = "";
        },
      });
    },
    [extractToken, processQr, playInfo, playSuccess, playWarning]
  );

  // ── Clear dedup lock whenever the user switches IN ↔ OUT ──────────────────
  // Without this, switching from Force IN to Force OUT with the same QR in the
  // scanner would silently skip the first OUT scan (dedup still holds old value).
  useEffect(() => {
    lastScannedRef.current = "";
    if (cooldownRef.current) clearTimeout(cooldownRef.current);
  }, [scanMode]);

  // ── Live camera scanner ───────────────────────────────────────────────────
  const startScanner = useCallback(async () => {
    setCameraError(null);

    if (!isCameraApiAvailable()) {
      setCameraError(
        "Live camera memerlukan HTTPS. Gunakan 'Capture Photo' di bawah - ini akan berfungsi di semua perangkat (kayaknya sih)."
      );
      setMode("file");
      return;
    }

    try {
      const { Html5Qrcode } = await import("html5-qrcode");

      if (scannerRef.current) {
        try { await scannerRef.current.stop(); } catch { /* ignore */ }
        scannerRef.current = null;
      }

      const scanner = new Html5Qrcode("qr-reader", { verbose: false });
      scannerRef.current = scanner as unknown as { stop: () => Promise<void> };

      await scanner.start(
        { facingMode: "environment" },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ({
          fps: 25,
          qrbox: { width: 300, height: 300 },
          aspectRatio: 1.0,
          experimentalFeatures: {
            useBarCodeDetectorIfSupported: true, // native BarcodeDetector API - 2-5× faster
          },
          rememberLastUsedCamera: true,
        } as any),
        (text) => handleDetected(text),
        () => { /* scan miss - silent */ }
      );

      setScanning(true);
      setCameraStarted(true);
    } catch (err: unknown) {
      const msg = String((err as Error).message || err).toLowerCase();
      let friendly = "Could not start the camera.";

      if (msg.includes("permission") || msg.includes("notallowed")) {
        friendly = "Camera permission denied. Allow camera access in your browser settings.";
      } else if (
        msg.includes("https") ||
        msg.includes("secure") ||
        msg.includes("streaming not supported") ||
        msg.includes("getUserMedia is not defined")
      ) {
        friendly =
          "Live camera membutuhkan HTTPS. Gunakan 'Capture Photo' di bawah - ini akan berfungsi di semua perangkat (kayaknya sih).";
        setMode("file");
      } else if (msg.includes("notfound") || msg.includes("no camera")) {
        friendly = "No camera found on this device.";
      }

      setCameraError(friendly);
      setScanning(false);
    }
  }, [handleDetected]);

  const stopScanner = useCallback(async () => {
    if (scannerRef.current) {
      try { await scannerRef.current.stop(); } catch { /* ignore */ }
      scannerRef.current = null;
    }
    setScanning(false);
  }, []);

  const toggleScanning = useCallback(async () => {
    if (scanning) await stopScanner();
    else await startScanner();
  }, [scanning, startScanner, stopScanner]);

  // ── File capture → decode QR from image ──────────────────────────────────
  const handleFileCapture = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setFileDecoding(true);
      setScanError(null);
      setScanResult(null);
      lastScannedRef.current = "";

      try {
        const { Html5Qrcode } = await import("html5-qrcode");

        // Ensure a throwaway DOM element exists for the scanner
        let tempDiv = document.getElementById("qr-file-reader");
        if (!tempDiv) {
          tempDiv = document.createElement("div");
          tempDiv.id = "qr-file-reader";
          tempDiv.style.display = "none";
          document.body.appendChild(tempDiv);
        }

        const scanner = new Html5Qrcode("qr-file-reader", { verbose: false });
        // scanFile: decodes QR from an image file - no camera API / HTTPS required
        const decoded = await scanner.scanFile(file, /* showImage: */ false);
        handleDetected(decoded);
      } catch {
        // File decode failed - play warning immediately
        playWarning();
        setScanError(
          "Could not decode a QR code from this image. Make sure the QR is clear and well-lit, then try again."
        );
      } finally {
        setFileDecoding(false);
        if (e.target) e.target.value = "";
      }
    },
    [handleDetected, playWarning]
  );

  // ── Manual URL / token paste ──────────────────────────────────────────────
  const handleManualSubmit = useCallback(() => {
    const trimmed = manualUrl.trim();
    if (!trimmed) return;
    lastScannedRef.current = "";
    handleDetected(trimmed);
    setManualUrl("");
  }, [manualUrl, handleDetected]);

  const handleReset = useCallback(() => {
    setScanResult(null);
    setScanError(null);
    lastScannedRef.current = "";
  }, []);

  // ── Cleanup ───────────────────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      scannerRef.current?.stop().catch(() => { });
      if (cooldownRef.current) clearTimeout(cooldownRef.current);
    };
  }, []);

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl animate-in fade-in duration-300">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Scanner
            </div>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Scan a QR Code
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Scan untuk otomatis mengubah status IN/OUT pada barang.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11.5px] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-[#a4c9e9]" />
            Terlindungi dan Aman  · JWT Terverifikasi
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          {/* Scanner card */}
          <section className="rounded-3xl border border-border-surface bg-card p-5 sm:p-6">

            {/* Mode tabs */}
            <div className="flex gap-2 mb-4">
              {[
                { key: "live", label: "Camera Langsung", icon: Camera },
                { key: "file", label: "Gunakan Photo", icon: ImageUp },
                { key: "url", label: "Gunakan Scanner", icon: Link2 },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  id={`scan-mode-${key}`}
                  onClick={async () => {
                    if (scanning) await stopScanner();
                    setScanError(null);
                    setCameraError(null);
                    setMode(key as "live" | "file" | "url");
                  }}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-[12px] font-medium transition-smooth ${mode === key
                    ? "bg-[#C05C30] text-white"
                    : "bg-card-elevated text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </button>
              ))}
            </div>

            {/* ── Scan Action Mode toggle ── */}
            <div className="mb-4 flex items-center gap-2">
              <span className="shrink-0 text-[11.5px] text-muted-foreground">Action:</span>
              <div className="flex flex-1 gap-1.5 rounded-xl bg-card-elevated p-1">
                {(["forceIn", "forceOut"] as const).map((m) => {
                  const labels: Record<string, string> = {
                    auto: "Auto",
                    forceIn: "Mode IN",
                    forceOut: "Mode OUT",
                  };
                  const colors: Record<string, string> = {
                    auto: scanMode === "auto" ? "bg-[#a4c9e9] text-[oklch(0.2_0.04_250)]" : "text-muted-foreground hover:text-foreground",
                    forceIn: scanMode === "forceIn" ? "bg-emerald-500 text-white" : "text-muted-foreground hover:text-foreground",
                    forceOut: scanMode === "forceOut" ? "bg-[#c05c30] text-white" : "text-muted-foreground hover:text-foreground",
                  };
                  return (
                    <button
                      key={m}
                      id={`action-mode-${m}`}
                      onClick={() => setScanMode(m)}
                      className={`flex-1 rounded-lg px-2 py-1.5 text-[12px] font-semibold transition-smooth ${colors[m]}`}
                    >
                      {labels[m]}
                    </button>
                  );
                })}
              </div>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${scanMode === "auto"
                ? "bg-[#a4c9e9]/20 text-[#a4c9e9]"
                : scanMode === "forceIn"
                  ? "bg-emerald-500/15 text-emerald-400"
                  : "bg-red-500/15 text-red-400"
                }`}>
                {scanMode === "auto" ? "Toggle" : scanMode === "forceIn" ? "Always IN" : "Always OUT"}
              </span>
            </div>

            {/* ── LIVE CAMERA ── */}
            {mode === "live" && (
              <>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[12.5px] font-medium text-foreground/90">
                    <CircleDot
                      className={`h-3.5 w-3.5 ${scanning ? "text-emerald-400" : "text-muted-foreground"}`}
                    />
                    {scanning ? "Live · Kamera Aktif" : cameraStarted ? "Dijeda" : "Kamera Mati"}
                  </div>
                  <div className="text-[11px] text-muted-foreground">25 FPS · ARIS</div>
                </div>

                <div className="relative w-full overflow-hidden rounded-2xl bg-[oklch(0.12_0_0)] aspect-square">
                  <div
                    id="qr-reader"
                    className="h-full w-full [&>video]:h-full [&>video]:w-full [&>video]:object-cover [&>img]:hidden [&_button]:hidden [&_select]:hidden [&_span]:hidden"
                    style={{ minHeight: "260px" }}
                  />
                  {!cameraStarted && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[oklch(0.12_0_0)]">
                      <div
                        className="absolute inset-0 opacity-[0.15]"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right,oklch(0.3 0 0) 1px,transparent 1px),linear-gradient(to bottom,oklch(0.3 0 0) 1px,transparent 1px)",
                          backgroundSize: "28px 28px",
                        }}
                      />
                      <div className="relative flex h-[60%] w-[60%] items-center justify-center">
                        {["left-0 top-0 border-l-2 border-t-2 rounded-tl-2xl",
                          "right-0 top-0 border-r-2 border-t-2 rounded-tr-2xl",
                          "left-0 bottom-0 border-l-2 border-b-2 rounded-bl-2xl",
                          "right-0 bottom-0 border-r-2 border-b-2 rounded-br-2xl",
                        ].map((pos, i) => (
                          <span
                            key={i}
                            className={`absolute h-10 w-10 border-[#a4c9e9] ${pos}`}
                            style={{ boxShadow: "0 0 20px -4px #a4c9e9aa" }}
                          />
                        ))}
                        <div className="rounded-full bg-black/40 px-3 py-1.5 text-[11px] text-white/80 backdrop-blur">
                          Klik 'Start Camera' untuk memulai yah...
                        </div>
                      </div>
                    </div>
                  )}
                  {cameraStarted && scanning && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="relative h-[60%] w-[60%]">
                        {["left-0 top-0 border-l-2 border-t-2 rounded-tl-2xl",
                          "right-0 top-0 border-r-2 border-t-2 rounded-tr-2xl",
                          "left-0 bottom-0 border-l-2 border-b-2 rounded-bl-2xl",
                          "right-0 bottom-0 border-r-2 border-b-2 rounded-br-2xl",
                        ].map((pos, i) => (
                          <span
                            key={i}
                            className={`absolute h-10 w-10 border-[#a4c9e9] ${pos}`}
                            style={{ boxShadow: "0 0 20px -4px #a4c9e9aa" }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {cameraError && (
                  <div className="mt-3 flex items-start gap-2 rounded-xl bg-destructive/10 p-3 text-xs text-destructive">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{cameraError}</span>
                  </div>
                )}

                <div className="mt-4 flex items-center gap-2">
                  <button
                    id="btn-toggle-camera"
                    onClick={toggleScanning}
                    className="inline-flex items-center gap-2 rounded-full bg-[#C05C30] px-5 py-2.5 text-[13px] font-semibold text-white transition-smooth hover:brightness-95"
                  >
                    <ScanLine className="h-4 w-4" />
                    {scanning ? "Pause Camera" : cameraStarted ? "Resume Camera" : "Start Camera"}
                  </button>
                  <button
                    id="btn-reset-scan"
                    onClick={handleReset}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card-elevated text-foreground/80 transition-smooth hover:bg-accent"
                    aria-label="Mengatur Ulang"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </>
            )}

            {/* ── FILE CAPTURE ── */}
            {mode === "file" && (
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-dashed border-border-strong bg-card-elevated/30 p-6 text-center">
                  <Camera className="mx-auto mb-3 h-10 w-10 text-[#a4c9e9] opacity-80" />
                  <p className="text-sm font-medium text-foreground">Ambil Foto dari QR Code</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Berfungsi di semua perangkat seluler - tidak memerlukan HTTPS.
                    <br />
                    Kamera bawaan Anda akan terbuka untuk menangkap QR.
                  </p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
                    <label
                      id="btn-capture-qr"
                      htmlFor="file-capture-input"
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C05C30] px-5 py-2.5 text-[13px] font-semibold text-white transition-smooth hover:brightness-95"
                    >
                      {fileDecoding ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Camera className="h-4 w-4" />
                      )}
                      {fileDecoding ? "Decoding..." : "Buka Kamera / Pilih Gambar"}
                    </label>
                    <input
                      id="file-capture-input"
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleFileCapture}
                      className="hidden"
                    />
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-4 py-2.5 text-sm text-foreground transition-smooth hover:bg-accent"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Mengatur Ulang
                    </button>
                  </div>
                </div>
                <div className="rounded-xl bg-card-elevated/30 p-3 text-[11.5px] text-muted-foreground">
                  <strong className="text-foreground">Cara kerjanya:</strong> Tekan tombol untuk membuka
                  kamera Anda. Jepret kode QR. Aplikasi akan mendekodenya dan mengubah status IN/OUT
                  secara otomatis.
                </div>
              </div>
            )}

            {/* ── PASTE URL ── */}
            {mode === "url" && (
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-dashed border-border-strong bg-card-elevated/30 p-5">
                  <Link2 className="mb-3 h-8 w-8 text-[#a4c9e9] opacity-80" />
                  <p className="text-sm font-medium text-foreground">Tempel QR token nya atau isi URL</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Scan QR dengan Google Lens / SCANNER - salin URL yang muncul, lalu tempel di sini.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <input
                      id="input-manual-url"
                      type="text"
                      value={manualUrl}
                      onChange={(e) => setManualUrl(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
                      placeholder="http://...?token=eyJ... or paste JWT"
                      className="flex-1 h-10 rounded-xl border border-transparent bg-card-elevated px-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary/60"
                    />
                    <button
                      id="btn-manual-submit"
                      onClick={handleManualSubmit}
                      disabled={!manualUrl.trim() || isProcessing}
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-smooth hover:opacity-90 disabled:opacity-40"
                    >
                      {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : "Process"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ── Scan Result - shared across all modes ── */}
            {(isProcessing || scanResult || scanError) && (
              <div className="mt-4">
                {isProcessing && (
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-card-elevated/40 p-4">
                    <Loader2 className="h-5 w-5 animate-spin text-[#a4c9e9]" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Processing scan...</div>
                      <div className="text-xs text-muted-foreground">Toggling IN/OUT status</div>
                    </div>
                  </div>
                )}

                {scanError && !isProcessing && (
                  <div className="flex items-start gap-3 rounded-2xl border border-destructive/30 bg-destructive/10 p-4">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                    <div>
                      <div className="text-sm font-medium text-destructive">Scan Failed</div>
                      <div className="text-xs text-muted-foreground">{scanError}</div>
                    </div>
                  </div>
                )}

                {scanResult && !isProcessing && (
                  <div
                    className={`rounded-2xl border p-4 ${scanResult.newStatus === "in"
                      ? "border-emerald-500/30 bg-emerald-500/10"
                      : "border-red-500/30 bg-red-500/10"
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${scanResult.newStatus === "in"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-red-500/20 text-red-400"
                          }`}
                      >
                        {scanResult.newStatus === "in" ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <ArrowLeftRight className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-foreground">
                            {scanResult.action === "SCAN_IN" ? "Scanned IN" : "Scanned OUT"}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${scanResult.newStatus === "in"
                              ? "bg-emerald-500 text-white"
                              : "bg-red-500 text-white"
                              }`}
                          >
                            {scanResult.newStatus}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">{scanResult.partName}</span>
                          {" · "}{scanResult.factoryOrigin}
                          {" · "}{scanResult.value} units
                        </div>
                        <div className="mt-1 text-[11px] text-muted-foreground">
                          {scanResult.message}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Side panel */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-border-surface bg-card p-5 sm:p-6">
              <h2 className="text-[13px] font-semibold tracking-wide">Scan Methods</h2>
              <ul className="mt-4 space-y-4 text-[12.5px] text-muted-foreground">
                <li className="flex gap-2.5">
                  <Camera className="mt-0.5 h-4 w-4 shrink-0 text-[#a4c9e9]" />
                  <span>
                    <strong className="text-foreground">Camera Langsung</strong> - Membutuhkan HTTPS ,
                    25 FPS dengan ARIS native untuk scan tercepat.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <ImageUp className="mt-0.5 h-4 w-4 shrink-0 text-[#a4c9e9]" />
                  <span>
                    <strong className="text-foreground">Ambil Gambar</strong> - Berfungsi di semua
                    perangkat seluler melalui HTTP. Membuka kamera bawaan untuk mengambil foto QR.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <Link2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a4c9e9]" />
                  <span>
                    <strong className="text-foreground">Tempel URL</strong> - Scan dengan SCANNER,
                    salin URL yang ditampilkan, tempel di sini dan tekan Process.
                  </span>
                </li>
              </ul>
            </div>

            {/* Recent History */}
            <div className="rounded-3xl border border-border-surface bg-card p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-[13px] font-semibold tracking-wide">
                  <History className="h-4 w-4 text-muted-foreground" />
                  Scan Terbaru
                </h2>
                <Link
                  to="/task-history"
                  className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11.5px] text-[#a4c9e9] transition-smooth hover:bg-sidebar-hover"
                >
                  Lihat semua
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <ul className="mt-3 divide-y divide-border">
                {history.length === 0 ? (
                  <li className="py-4 text-center text-xs text-muted-foreground">No scans yet.</li>
                ) : (
                  history.slice(0, 6).map((r) => {
                    const diffMin = Math.floor(
                      (Date.now() - new Date(r.created_at).getTime()) / 60000
                    );
                    const timeLabel =
                      diffMin < 1 ? "Just now" :
                        diffMin < 60 ? `${diffMin} min ago` :
                          `${Math.floor(diffMin / 60)} J ago`;
                    const isIn = r.action === "SCAN_IN";

                    return (
                      <li
                        key={r.id}
                        className="flex items-center gap-3 py-3 transition-smooth hover:bg-sidebar-hover/40"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isIn ? "bg-emerald-500/10" : "bg-red-500/10"
                            }`}
                        >
                          <span className={`text-[10px] font-bold ${isIn ? "text-emerald-400" : "text-red-400"}`}>
                            {isIn ? "IN" : "OUT"}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="truncate text-[13px] font-medium">{r.label}</span>
                            <span className="rounded-full bg-card-elevated px-2 py-0.5 text-[10.5px] text-muted-foreground">
                              {r.qr_id}
                            </span>
                          </div>
                          <div className="truncate text-[11.5px] text-muted-foreground">
                            {r.factory} · {timeLabel}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}
`````

## File: src/routes/station/dashboard.tsx
`````typescript
import { useState, useCallback, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import {
  isStationTokenValid,
  getStationDevice,
  clearStationAuth,
  type StationDevice,
} from "@/lib/auth";
import { useStationScan } from "@/hooks/use-station-scan";
import { useScanSound } from "@/hooks/use-scan-sound";
import type { ProcessQrResult } from "@/hooks/use-qr-process";

export const Route = createFileRoute("/station/dashboard")({
  head: () => ({
    meta: [
      { title: "Station Scanner - Sugity Integrated Systems" },
      { name: "description", content: "Scanner station untuk proses Scan IN/OUT." },
    ],
  }),
  component: StationDashboardPage,
});

// ── Extract token from raw QR value ──────────────────────────────────────────
// Handles three formats:
//  1. Full URL with ?token= param (legacy)
//  2. Direct JWT (3 dot-separated base64url segments, legacy)
//  3. Short opaque token: ≤16 URL-safe alphanumeric chars (new QR format)
function extractToken(rawValue: string): string | null {
  const trimmed = rawValue.trim();
  // Format 1: URL containing ?token=
  try {
    if (trimmed.includes("token=")) {
      const url = new URL(
        trimmed.startsWith("http") ? trimmed : `http://x?${trimmed}`
      );
      const t = url.searchParams.get("token");
      if (t) return t;
    }
  } catch { /* not a URL */ }
  // Format 2: Direct JWT (three dot-separated parts)
  if (trimmed.split(".").length === 3) return trimmed;
  // Format 3: Short opaque token (new system) - ≤16 URL-safe alphanumeric chars
  if (/^[A-Za-z0-9_-]{1,16}$/.test(trimmed)) return trimmed;
  return null;
}

type ScanEntry = {
  id: string;
  result: ProcessQrResult;
  timestamp: Date;
};

function StationDashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [device, setDevice] = useState<StationDevice | null>(null);
  const [scanInput, setScanInput] = useState("");
  const [history, setHistory] = useState<ScanEntry[]>([]);
  const [scanError, setScanError] = useState<string | null>(null);
  const [privilegeError, setPrivilegeError] = useState(false);
  const [partstats, setPartstats] = useState<"reguler" | "bcp">("reguler");
  const inputRef = useRef<HTMLInputElement>(null);

  const stationScan = useStationScan();
  const { playInfo, playSuccess, playWarning } = useScanSound();

  useEffect(() => {
    setMounted(true);
    setDevice(getStationDevice());
    // Auto-focus the scan input on mount
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  // Station guard: if no valid station token → redirect to station login
  useEffect(() => {
    if (mounted && !isStationTokenValid()) {
      window.location.replace("/station/login");
    }
  }, [mounted]);

  const handleLogout = useCallback(() => {
    clearStationAuth();
    window.location.replace("/station/login");
  }, []);

  const handleScan = useCallback(
    (raw: string) => {
      const token = extractToken(raw);
      if (!token) {
        // Invalid QR - play warning immediately
        playWarning();
        setScanError("QR tidak valid - tidak mengandung token inventori yang dikenali.");
        setScanInput("");
        return;
      }

      // Valid token detected - play info sound immediately on scan attempt
      playInfo();
      setScanError(null);
      const forceAction: "SCAN_IN" | "SCAN_OUT" =
        device?.device_role === "OUT" ? "SCAN_OUT" : "SCAN_IN";

      stationScan.mutate(
        { token, forceAction, partstats },
        {
          onSuccess: (result) => {
            // Success - play success sound immediately when server responds
            playSuccess();
            setHistory((prev) => [
              {
                id: `${Date.now()}-${Math.random()}`,
                result,
                timestamp: new Date(),
              },
              ...prev.slice(0, 19), // keep last 20 entries
            ]);
            setScanInput("");
            // Re-focus for next scan
            setTimeout(() => inputRef.current?.focus(), 100);
          },
          onError: (err) => {
            // Error - play warning sound immediately when server responds
            playWarning();
            // ── Privilege validation error (server returns QR_NOT_ALLOWED) ──────
            if (err.message === "QR_NOT_ALLOWED") {
              setPrivilegeError(true);
              setScanInput("");
              setTimeout(() => setPrivilegeError(false), 5000);
              setTimeout(() => inputRef.current?.focus(), 100);
              return;
            }
            // ── Default error handling (unchanged) ───────────────────────────────
            setScanError(err.message || "Scan gagal. Coba lagi.");
            setScanInput("");
            setTimeout(() => inputRef.current?.focus(), 100);
          },
        }
      );
    },
    [device, stationScan, playInfo, playSuccess, playWarning]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const val = scanInput.trim();
        if (val) handleScan(val);
      }
    },
    [scanInput, handleScan]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      // On paste: grab the pasted text and immediately process
      const pasted = e.clipboardData.getData("text");
      if (pasted.trim()) {
        e.preventDefault();
        setScanInput(pasted.trim());
        // Defer so state has updated
        setTimeout(() => handleScan(pasted.trim()), 0);
      }
    },
    [handleScan]
  );

  // Focus re-claimer
  const focusInput = () => setTimeout(() => inputRef.current?.focus(), 100);

  // SSR / pre-mount: show neutral loader
  if (!mounted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--station-bg, #F0EFED)" }}
      >
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-orange-200 border-t-[#C05C30]" />
      </div>
    );
  }

  const role = device?.device_role ?? "IN";
  const roleLabel = role === "OUT" ? "OUT" : "IN";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--station-bg, #F0EFED)" }}
    >
      {/* Top-right logout button */}
      <div className="flex justify-end p-4">
        <button
          id="btn-keluar-station"
          onClick={handleLogout}
          className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all"
          style={{ backgroundColor: "#C05C30" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A84E26")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C05C30")}
        >
          Keluar dari Station
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center flex-1 px-4 py-6 w-full max-w-2xl mx-auto">
        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-center mb-2 tracking-tight"
          style={{ color: "var(--station-text, #2D2D2D)" }}
        >
          STATION ({roleLabel})
        </h1>
        <p
          className="text-base sm:text-lg font-semibold text-center mb-8"
          style={{ color: "var(--station-subtext, #57534E)" }}
        >
          Scan QR Code Pallet untuk proses ({roleLabel})
        </p>
        {device && (
          <p className="text-xs text-center mb-6" style={{ color: "var(--station-footer, #9CA3AF)" }}>
            {device.name} · {device.location || "No Location"}
          </p>
        )}

        {/* Scan input area */}
        <div
          className="w-full rounded-2xl shadow-sm mb-4"
          style={{ backgroundColor: "var(--station-card, #FFFFFF)" }}
        >
          <input
            ref={inputRef}
            id="station-scan-input"
            type="text"
            value={scanInput}
            onChange={(e) => setScanInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            placeholder="Klik Disini, SCAN QR HERE...."
            className="w-full rounded-2xl px-6 py-5 text-base text-center outline-none bg-transparent"
            style={{ color: "var(--station-text, #2D2D2D)" }}
            autoComplete="off"
          />
        </div>

        {/* Partstats Switcher */}
        <div className="w-full flex rounded-2xl border bg-white mb-4 shadow-sm overflow-hidden" style={{ borderColor: "var(--station-border, #D1D5DB)" }}>
          <button
            onClick={() => { setPartstats("reguler"); focusInput(); }}
            className={`flex-1 py-3.5 text-sm font-semibold transition-all ${
              partstats === "reguler"
                ? "bg-[#C05C30] text-white"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            Reguler Part
          </button>
          <button
            onClick={() => { setPartstats("bcp"); focusInput(); }}
            className={`flex-1 py-3.5 text-sm font-semibold transition-all ${
              partstats === "bcp"
                ? "bg-[#C05C30] text-white"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            BCP Part
          </button>
        </div>

        {/* Helper text */}
        <p className="text-xs text-center mb-4" style={{ color: "var(--station-footer, #9CA3AF)" }}>
          Gunakan Scanner - Tempel QR token nya atau isi URL<br />
          Scan QR dengan Google Lens / SCANNER - salin URL yang muncul, lalu tempel di sini.
        </p>

        {/* Processing indicator */}
        {stationScan.isPending && (
          <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: "#C05C30" }}>
            <Loader2 className="h-4 w-4 animate-spin" />
            Memproses...
          </div>
        )}

        {/* Error */}
        {scanError && (
          <div className="w-full flex items-start gap-2 rounded-xl px-4 py-3 mb-4 text-sm text-red-700 bg-red-50 dark:bg-red-900/20 dark:text-red-400">
            <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
            {scanError}
          </div>
        )}

        {/* Privilege Error Toast - "Proses dibatalkan: QR yang di-scan tidak diizinkan" */}
        {privilegeError && (
          <div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-2xl px-6 py-4 shadow-2xl text-sm font-bold text-white animate-in slide-in-from-bottom-4 duration-300"
            style={{ backgroundColor: "#DC2626", maxWidth: "calc(100vw - 2rem)" }}
          >
            <XCircle className="h-5 w-5 shrink-0" />
            Proses dibatalkan: QR yang di-scan tidak diizinkan
          </div>
        )}


        {/* Scan History */}
        <div
          className="w-full rounded-2xl shadow-sm p-5 mt-2"
          style={{ backgroundColor: "var(--station-card, #FFFFFF)" }}
        >
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: "var(--station-text, #2D2D2D)" }}
          >
            Informasi Scan Tebaru:
          </p>
          <div
            className="border-t mb-4"
            style={{ borderColor: "var(--station-border, #E5E7EB)" }}
          />

          {history.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-sm" style={{ color: "var(--station-footer, #9CA3AF)" }}>
                Yah belum ada nih data
              </p>
              <p className="text-sm" style={{ color: "var(--station-footer, #9CA3AF)" }}>
                nya, coba scan dulu yah
              </p>
            </div>
          ) : (
            <div
              className="space-y-3 overflow-y-auto pr-1"
              style={{ maxHeight: "320px" }}
            >
              {history.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-start gap-3 rounded-xl p-3"
                  style={{ backgroundColor: "var(--station-bg, #F0EFED)" }}
                >
                  {entry.result.action === "SCAN_IN" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-sm font-semibold truncate"
                        style={{ color: "var(--station-text, #2D2D2D)" }}
                      >
                        {entry.result.partName}
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          entry.result.action === "SCAN_IN"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {entry.result.action === "SCAN_IN" ? "IN" : "OUT"}
                      </span>
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: "var(--station-footer, #9CA3AF)" }}>
                      {entry.result.factoryOrigin} ·{" "}
                      {entry.timestamp.toLocaleTimeString("id-ID", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--station-subtext, #57534E)" }}>
                      {entry.result.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-center pb-6" style={{ color: "var(--station-footer, #9CA3AF)" }}>
        Copyright @2026 Sugity Integrated Systems
      </p>
    </div>
  );
}
`````

## File: src/routes/task-history.tsx
`````typescript
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, XCircle, History, ArrowDownLeft, ArrowUpRight, QrCode } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useTasks } from "@/hooks/use-tasks";
import { useQrHistory } from "@/hooks/use-qr-process";

export const Route = createFileRoute("/task-history")({
  head: () => ({
    meta: [
      { title: "History Tugas - Sugity Creatives" },
      { name: "description", content: "View your task and scan history." },
    ],
  }),
  component: TaskHistoryPage,
});

const STATUS_META = {
  completed: { icon: CheckCircle2, cls: "bg-emerald-500/10 text-emerald-400", label: "Completed" },
  pending: { icon: Clock, cls: "bg-card-elevated text-muted-foreground", label: "Pending" },
  failed: { icon: XCircle, cls: "bg-destructive/15 text-destructive", label: "Failed" },
} as const;

function TaskHistoryPage() {
  const [tab, setTab] = useState<"tasks" | "scans">("scans");
  const { data: tasks = [], isLoading: loadingTasks } = useTasks();
  const { data: scanHistory = [], isLoading: loadingScans } = useQrHistory();

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">
        <div className="mb-6 flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Activity
          </span>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">History Tugas</h1>
        </div>

        {/* Tabs */}
        <div className="mb-4 flex gap-2">
          <button
            id="tab-scans"
            onClick={() => setTab("scans")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-smooth ${tab === "scans"
              ? "bg-[#c05c30] text-white"
              : "border border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
          >
            <QrCode className="h-4 w-4" />
            QR Scan Log
            <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[10px]">
              {scanHistory.length}
            </span>
          </button>
          <button
            id="tab-tasks"
            onClick={() => setTab("tasks")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-smooth ${tab === "tasks"
              ? "bg-[#008349] text-white"
              : "border border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
          >
            <History className="h-4 w-4" />
            Semua Tugas
            <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[10px]">
              {tasks.length}
            </span>
          </button>
        </div>

        {/* QR Scan Log */}
        {tab === "scans" && (
          <section className="rounded-3xl border border-border-surface bg-surface-section p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">QR Scan Events</h2>
              <span className="text-xs text-muted-foreground">{scanHistory.length} entries · Memuat setiap 5dtk</span>
            </div>

            <ul className="mt-5 space-y-3">
              {loadingScans ? (
                <li className="py-8 text-center text-sm text-muted-foreground">Loading scan history...</li>
              ) : scanHistory.length === 0 ? (
                <li className="py-8 text-center text-sm text-muted-foreground">
                  No scan events yet. Create a QR code and scan it!
                </li>
              ) : scanHistory.map((s) => {
                const isIn = s.action === "SCAN_IN";
                const dateObj = new Date(s.created_at);
                const formattedTime = dateObj.toLocaleString("en-CA", {
                  year: "numeric", month: "2-digit", day: "2-digit",
                  hour: "2-digit", minute: "2-digit",
                }).replace(",", "");

                return (
                  <li
                    key={s.id}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-card-elevated/30 p-4 transition-smooth hover:bg-card-elevated/60"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${isIn ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                        }`}
                    >
                      {isIn ? (
                        <ArrowDownLeft className="h-4 w-4" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                          {s.qr_id}
                        </span>
                        {s.batch_id && (
                          <span className="rounded-full bg-card px-2 py-0.5 text-[10px] text-muted-foreground font-mono">
                            {s.batch_id.slice(0, 16)}...
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-sm font-medium text-foreground">{s.label}</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {s.factory} · {formattedTime}
                      </div>
                    </div>
                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${isIn
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                        }`}
                    >
                      {isIn ? "IN" : "OUT"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* All Tasks */}
        {tab === "tasks" && (
          <section className="rounded-3xl border border-border-surface bg-surface-section p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">Tasks Terbaru</h2>
              <span className="text-xs text-muted-foreground">{tasks.length} entries</span>
            </div>

            <ul className="mt-5 space-y-3">
              {loadingTasks ? (
                <li className="py-8 text-center text-sm text-muted-foreground">
                  Loading task history tunggu yah hehe...
                </li>
              ) : tasks.length === 0 ? (
                <li className="py-8 text-center text-sm text-muted-foreground">
                  Yah belum Belum ada task nih...
                </li>
              ) : tasks.map((t) => {
                const meta = STATUS_META[t.status];
                const Icon = meta.icon;

                const dateObj = new Date(t.created_at);
                const formattedTime = dateObj.toLocaleString("en-CA", {
                  year: "numeric", month: "2-digit", day: "2-digit",
                  hour: "2-digit", minute: "2-digit",
                }).replace(",", "");

                return (
                  <li
                    key={t.id}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-card-elevated/30 p-4 transition-smooth hover:bg-card-elevated/60"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card text-foreground/80">
                      <History className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                          {t.task_id}
                        </span>
                        <span className="rounded-full bg-card px-2 py-0.5 text-[11px] text-muted-foreground">
                          {t.type}
                        </span>
                      </div>
                      <div className="mt-1 truncate text-sm font-medium text-foreground">
                        {t.title}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        by {t.user} · {formattedTime}
                      </div>
                    </div>
                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${meta.cls}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {meta.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>
    </DashboardLayout>
  );
}
`````

## File: src/routes/tv.css
`````css
/* ═══════════════════════════════════════════════════════════════════════════
   TV dashboard - 1:1 layout/CSS from stock_tv.html (scoped under .tv-page)
   Logic in tv.tsx / components is unchanged; only presentation rules here.
   ═══════════════════════════════════════════════════════════════════════════ */

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

/* --- Isolate route from app shell (Tailwind base / body tokens) --- */
html:has(.tv-page) {
  height: 100%;
  overflow: hidden;
}

html:has(.tv-page) body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #0a0b0d;
  color: #f0f2f5;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* --- 1. Dynamic Color System (:root from stock_tv.html) --- */
.tv-page {
  --color-bg-base: #0a0b0d;
  --color-bg-surface: #111318;
  --color-bg-border: #2a2d35;
  --color-text-primary: #f0f2f5;
  --color-text-secondary: #8b90a0;
  --color-text-muted: #555a68;
  --color-critical: #e84545;
  --color-critical-bg: #2a1515;
  --color-critical-dim: #5c1f1f;
  --color-critical-text: #993333;
  --color-warning: #f5a623;
  --color-warning-bg: #2a1e0a;
  --color-warning-dim: #5c3d10;
  --color-warning-text: #9a6010;
  --color-safe: #22c55e;
  --color-safe-bg: #0f2a1a;
  --color-safe-dim: #1a5c35;
  --color-safe-text: #1a7a40;
  --color-accent: #3b82f6;
  --chart-grid: rgba(255, 255, 255, 0.04);

  position: fixed;
  inset: 0;
  z-index: 9999;
  box-sizing: border-box;
  width: 100vw;
  height: 100dvh;
  max-width: 100vw;
  max-height: 100dvh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--color-bg-base);
  color: var(--color-text-primary);
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.2;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.tv-page[data-theme="light"] {
  --color-bg-base: #f8f9fa;
  --color-bg-surface: #ffffff;
  --color-bg-border: #dde2e5;
  --color-text-primary: #111318;
  --color-text-secondary: #495057;
  --color-text-muted: #adb5bd;
  --color-critical-bg: #fff5f5;
  --color-critical-dim: #ffe3e3;
  --color-warning-bg: #fff9db;
  --color-warning-dim: #fff3bf;
  --color-safe-bg: #ebfbee;
  --color-safe-dim: #d3f9d8;
  --chart-grid: rgba(0, 0, 0, 0.06);
}

.tv-page *,
.tv-page *::before,
.tv-page *::after {
  box-sizing: border-box;
}

/* Neutralize Tailwind utility leakage inside TV (class names only, no logic) */
.tv-page [class*="text-"] {
  letter-spacing: inherit;
}

.tv-page .text-xs {
  font-size: 12px !important;
  line-height: 1.2 !important;
}

.tv-page .text-sm {
  font-size: 13px !important;
  line-height: 1.2 !important;
}

/* --- 2. Structural CSS (stock_tv.html) --- */

/* #app-shell */
.tv-page .tv-shell {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
}

/* header */
.tv-page .tv-header,
.tv-page header.tv-header {
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  background: var(--color-bg-base);
  border-bottom: 1px solid var(--color-bg-border);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  gap: 0;
}

.tv-page .tv-header-title,
.tv-page .header-title {
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
  flex: 0 0 auto;
}

.tv-page .tv-header-time,
.tv-page .header-time {
  font-size: 13px;
  font-weight: 400;
  color: var(--color-text-secondary);
  line-height: 1.2;
  flex: 0 0 auto;
  text-align: center;
}

.tv-page .tv-header-right,
.tv-page .header-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
}

.tv-page .tv-header-right > span {
  font-size: 12px !important;
  font-weight: 600 !important;
  color: var(--color-text-secondary) !important;
  line-height: 1.2 !important;
}

.tv-page .tv-live-badge,
.tv-page .live-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-safe);
  line-height: 1.2;
}

.tv-page .tv-live-dot,
.tv-page .live-dot {
  width: 8px;
  height: 8px;
  min-width: 8px;
  min-height: 8px;
  background: var(--color-safe);
  border-radius: 50%;
  animation: tv-pulse-green 1.5s ease-in-out infinite;
}

@keyframes tv-pulse-green {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
}

.tv-page .tv-btn,
.tv-page .btn-tv {
  margin: 0;
  border: 1px solid var(--color-bg-border);
  border-radius: 6px;
  padding: 5px 12px;
  font-size: 11px;
  font-weight: 600;
  font-family: inherit;
  line-height: 1.2;
  color: var(--color-text-secondary);
  background: transparent;
  cursor: pointer;
  appearance: none;
}

/* .main-content */
.tv-page .tv-main,
.tv-page .main-content {
  flex: 1 1 0;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  min-height: 0;
}

/* .left-col */
.tv-page .tv-left,
.tv-page .left-col {
  flex: 1 1 0;
  min-width: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
}

/* .right-col */
.tv-page .tv-right,
.tv-page .right-col {
  width: 280px;
  min-width: 280px;
  max-width: 280px;
  flex: 0 0 280px;
  background: var(--color-bg-surface);
  border-left: 1px solid var(--color-bg-border);
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

/* .top-row */
.tv-page .tv-top-row,
.tv-page .top-row {
  display: flex;
  flex-direction: row;
  gap: 12px;
  height: 140px;
  min-height: 140px;
  max-height: 140px;
  flex-shrink: 0;
}

/* .gauge-container */
.tv-page .tv-gauge-wrap,
.tv-page .gauge-container {
  width: 140px;
  min-width: 140px;
  max-width: 140px;
  height: 140px;
  min-height: 140px;
  max-height: 140px;
  position: relative;
  flex-shrink: 0;
}

.tv-page .tv-gauge-wrap svg {
  display: block;
  width: 140px;
  height: 140px;
}

.tv-page .tv-gauge-text,
.tv-page .gauge-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
}

.tv-page .tv-gauge-val,
.tv-page .gauge-val {
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
}

.tv-page .tv-gauge-label,
.tv-page .gauge-label {
  font-size: 9px;
  color: var(--color-text-muted);
  letter-spacing: 0.12em;
  line-height: 1.2;
  margin-top: 2px;
}

/* .kpi-container */
.tv-page .tv-kpi-row,
.tv-page .kpi-container {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 140px;
}

/* .kpi-card */
.tv-page .tv-kpi-card,
.tv-page .kpi-card {
  flex: 1 1 0;
  min-width: 0;
  border-radius: 0 8px 8px 0;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.2s ease;
  height: 100%;
}

.tv-page .tv-kpi-card.critical,
.tv-page .kpi-card.critical {
  background: var(--color-critical-bg);
  border: 1px solid var(--color-critical-dim);
  border-left: 3px solid var(--color-critical);
}

.tv-page .tv-kpi-card.warning,
.tv-page .kpi-card.warning {
  background: var(--color-warning-bg);
  border: 1px solid var(--color-warning-dim);
  border-left: 3px solid var(--color-warning);
}

.tv-page .tv-kpi-card.safe,
.tv-page .kpi-card.safe {
  background: var(--color-safe-bg);
  border: 1px solid var(--color-safe-dim);
  border-left: 3px solid var(--color-safe);
}

/* KPI header + footer (override inline styles from tv.tsx) */
.tv-page .tv-kpi-card > div:first-child {
  display: flex !important;
  justify-content: space-between !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  line-height: 1.2 !important;
  margin: 0 !important;
  padding: 0 !important;
}

.tv-page .tv-kpi-card.critical > div:first-child {
  color: var(--color-critical) !important;
}

.tv-page .tv-kpi-card.critical > div:first-child span {
  color: var(--color-critical-text) !important;
}

.tv-page .tv-kpi-card.warning > div:first-child {
  color: var(--color-warning) !important;
}

.tv-page .tv-kpi-card.warning > div:first-child span {
  color: var(--color-warning-text) !important;
}

.tv-page .tv-kpi-card.safe > div:first-child {
  color: var(--color-safe) !important;
}

.tv-page .tv-kpi-card.safe > div:first-child span {
  color: var(--color-safe-text) !important;
}

.tv-page .tv-kpi-number,
.tv-page .kpi-number {
  font-size: 56px;
  font-weight: 700;
  line-height: 1;
  margin: auto 0;
}

.tv-page .tv-kpi-card > div:last-child {
  font-size: 11px !important;
  font-weight: 400 !important;
  color: var(--color-text-muted) !important;
  line-height: 1.2 !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* .section-label */
.tv-page .tv-section-label,
.tv-page .section-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  flex-shrink: 0;
  line-height: 1.2;
  margin: 0;
  padding: 0;
}

.tv-page .tv-left > .tv-section-label:last-of-type {
  margin-top: 4px;
}

.tv-page .tv-left > p {
  font-size: 13px;
  color: var(--color-text-muted);
  margin: 0;
  flex-shrink: 0;
}

/* .machine-grid */
.tv-page .tv-machine-grid,
.tv-page .machine-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(80px, 90px);
  gap: 8px;
  flex-shrink: 0;
  width: 100%;
}

.tv-page .tv-machine-grid > .tv-mc-wrap {
  display: contents;
}

.tv-page .tv-mc-parts-table {
  display: none !important;
}

/* .mc-card */
.tv-page .tv-mc-card,
.tv-page .mc-card {
  background: var(--color-bg-surface);
  border-radius: 0 8px 8px 0;
  padding: 10px 12px;
  display: grid;
  grid-template-areas: "id icon" "val icon";
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  border: 1px solid var(--color-bg-border);
  transition: background-color 0.2s ease;
}

.tv-page .tv-mc-id,
.tv-page .mc-id {
  grid-area: id;
  font-size: 12px;
  font-weight: 500;
  color: var(--color-text-muted);
  line-height: 1.2;
}

.tv-page .tv-mc-icon,
.tv-page .mc-icon {
  grid-area: icon;
  font-size: 28px;
  line-height: 1;
  align-self: center;
}

.tv-page .tv-mc-val,
.tv-page .mc-val {
  grid-area: val;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  align-self: end;
}

.tv-page .tv-mc-sub {
  font-size: 10px;
  color: var(--color-text-muted);
  display: block;
  margin-top: 2px;
  line-height: 1.2;
}

.tv-page .tv-mc-card.tv-mc-critical,
.tv-page .tv-mc-card.critical,
.tv-page .mc-card.critical {
  border: 1px solid var(--color-critical-dim);
  border-left: 3px solid var(--color-critical);
}

.tv-page .tv-mc-card.tv-mc-warning,
.tv-page .tv-mc-card.warning,
.tv-page .mc-card.warning {
  border: 1px solid var(--color-warning-dim);
  border-left: 3px solid var(--color-warning);
}

.tv-page .tv-mc-card.tv-mc-safe,
.tv-page .tv-mc-card.safe,
.tv-page .mc-card.safe {
  border: 1px solid var(--color-safe-dim);
  border-left: 3px solid var(--color-safe);
}

/* .chart-wrapper - fill remaining left column height like stock_tv.html canvas */
.tv-page .tv-chart-wrap,
.tv-page .chart-wrapper {
  flex: 1 1 0;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  /* overflow: visible so ratio badges above the tallest bar are not clipped */
  overflow: visible;
}

.tv-page .tv-chart-wrap .recharts-responsive-container {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: visible !important;
}

.tv-page .tv-chart-wrap .recharts-wrapper {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: visible !important;
}

.tv-page .tv-chart-wrap .recharts-surface {
  width: 100% !important;
  height: 100% !important;
  overflow: visible !important;
}

.tv-page .tv-chart-wrap > p {
  font-size: 13px;
  color: var(--color-text-muted);
  padding: 16px;
  margin: 0;
}

/* .panel-header */
.tv-page .tv-panel-header,
.tv-page .panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-shrink: 0;
}

.tv-page .tv-panel-header > span:first-child {
  font-size: 12px !important;
  font-weight: 600 !important;
  color: var(--color-text-secondary) !important;
  letter-spacing: 0.1em !important;
  line-height: 1.2 !important;
}

.tv-page .tv-panel-header > span:last-child {
  background: var(--color-warning-bg) !important;
  border: 1px solid var(--color-warning-dim) !important;
  border-radius: 4px !important;
  padding: 3px 8px !important;
  font-size: 10px !important;
  font-weight: 700 !important;
  color: var(--color-warning) !important;
  line-height: 1.2 !important;
}

/* .empty-state */
.tv-page .tv-empty,
.tv-page .empty-state {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--color-text-muted);
  padding-bottom: 60px;
  min-height: 0;
}

.tv-page .tv-empty > div {
  font-size: 13px;
  line-height: 1.2;
}

.tv-page .tv-priority-table {
  width: 100%;
  font-size: 11px;
  border-collapse: collapse;
}

.tv-page .tv-priority-table th,
.tv-page .tv-priority-table td {
  padding: 6px 4px;
  border-bottom: 1px solid var(--color-bg-border);
  text-align: left;
  line-height: 1.2;
}

.tv-page .tv-priority-table th {
  color: var(--color-text-muted);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 9px;
}

/* Mesin create compact override (scoped) */
.tv-page .tv-mc-compact .tv-mc-val {
  font-size: 24px;
}

/* ═══════════════════════════════════════════════════════════════════════════
   PRIORITY PRODUCTION - A/B crossfade pagination animation (additive only)
   ═══════════════════════════════════════════════════════════════════════════ */

/* Base transition for both slots */
.priority-slot {
  transition:
    opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, filter, transform;
}

/* Active slot - fully visible and interactive */
.priority-slot.slot-active {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  pointer-events: auto;
}

/* Inactive slot - hidden underneath, no interaction */
.priority-slot.slot-inactive {
  opacity: 0;
  filter: blur(4px);
  transform: scale(0.98);
  pointer-events: none;
}

/* During transition - active slot exits */
.priority-slot.slot-active.slot-transitioning {
  opacity: 0;
  filter: blur(4px);
  transform: scale(0.98);
}

/* During transition - inactive slot enters simultaneously */
.priority-slot.slot-inactive.slot-transitioning {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
}

/* Staggered row entrance - Bloomberg Terminal style cascade */
.priority-slot .priority-row:nth-child(1)  { transition-delay:   0ms; }
.priority-slot .priority-row:nth-child(2)  { transition-delay:  30ms; }
.priority-slot .priority-row:nth-child(3)  { transition-delay:  60ms; }
.priority-slot .priority-row:nth-child(4)  { transition-delay:  90ms; }
.priority-slot .priority-row:nth-child(5)  { transition-delay: 120ms; }
.priority-slot .priority-row:nth-child(6)  { transition-delay: 150ms; }
.priority-slot .priority-row:nth-child(7)  { transition-delay: 180ms; }
.priority-slot .priority-row:nth-child(8)  { transition-delay: 210ms; }
.priority-slot .priority-row:nth-child(9)  { transition-delay: 240ms; }
.priority-slot .priority-row:nth-child(10) { transition-delay: 270ms; }
.priority-slot .priority-row:nth-child(11) { transition-delay: 300ms; }
.priority-slot .priority-row:nth-child(12) { transition-delay: 330ms; }
.priority-slot .priority-row:nth-child(13) { transition-delay: 360ms; }
.priority-slot .priority-row:nth-child(14) { transition-delay: 390ms; }
.priority-slot .priority-row:nth-child(15) { transition-delay: 420ms; }

/* Cycle progress bar - airport departure board feel */
.tv-page .tv-priority-progress {
  height: 2px;
  background: rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  margin-bottom: 6px;
  border-radius: 1px;
}

.tv-page .tv-priority-progress-fill {
  position: absolute;
  inset: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  transform-origin: left center;
  animation: tv-progress-fill linear forwards;
}

@keyframes tv-progress-fill {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* Responsive - stock_tv.html breakpoints (scoped) */
@media (min-width: 1920px) {
  .tv-page .tv-mc-val,
  .tv-page .mc-val {
    font-size: 52px;
  }
  .tv-page .tv-kpi-number,
  .tv-page .kpi-number {
    font-size: 72px;
  }
  .tv-page .tv-gauge-val,
  .tv-page .gauge-val {
    font-size: 36px;
  }
}

@media (min-width: 2560px) {
  .tv-page .tv-mc-val,
  .tv-page .mc-val {
    font-size: 64px;
  }
  .tv-page .tv-kpi-number,
  .tv-page .kpi-number {
    font-size: 88px;
  }
  .tv-page .tv-gauge-val,
  .tv-page .gauge-val {
    font-size: 44px;
  }
}
`````

## File: src/styles.css
`````css
@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-card-elevated: var(--card-elevated);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-border-strong: var(--border-strong);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-pixel-blue: var(--pixel-blue);
  --color-pixel-blue-soft: var(--pixel-blue-soft);
  /* Surface tokens for hardcoded dark surfaces */
  --color-surface-page: var(--surface-page);
  --color-surface-sidebar: var(--surface-sidebar);
  --color-surface-section: var(--surface-section);
  --color-surface-elevated: var(--surface-elevated);
  --color-surface-hover: var(--surface-hover);
  --color-border-surface: var(--border-surface);
  --color-sidebar-hover: var(--sidebar-hover);
}

:root {
  --radius: 0.75rem;
  /* Default to dark - this app is dark-mode exclusive */
  --background: oklch(0.18 0 0); /* ~#121212 */
  --foreground: oklch(0.96 0 0);
  --card: oklch(0.22 0 0); /* ~#1e1e1e */
  --card-foreground: oklch(0.96 0 0);
  --card-elevated: oklch(0.26 0 0); /* ~#252525 inputs */
  --popover: oklch(0.22 0 0);
  --popover-foreground: oklch(0.96 0 0);
  --primary: oklch(0.68 0.16 250); /* pixel blue */
  --primary-foreground: oklch(0.15 0 0);
  --secondary: oklch(0.28 0 0);
  --secondary-foreground: oklch(0.96 0 0);
  --muted: oklch(0.26 0 0);
  --muted-foreground: oklch(0.68 0 0);
  --accent: oklch(0.3 0 0);
  --accent-foreground: oklch(0.96 0 0);
  --destructive: oklch(0.62 0.21 25);
  --destructive-foreground: oklch(0.98 0 0);
  --border: oklch(0.3 0 0); /* hairline ~#333 */
  --border-strong: oklch(0.38 0 0);
  --input: oklch(0.3 0 0);
  --ring: oklch(0.68 0.16 250);
  --pixel-blue: oklch(0.68 0.16 250);
  --pixel-blue-soft: oklch(0.82 0.06 245); /* pale pastel blue for active pill */
  --chart-1: oklch(0.68 0.16 250);
  --chart-2: oklch(0.7 0.12 180);
  --chart-3: oklch(0.75 0.14 80);
  --chart-4: oklch(0.65 0.18 320);
  --chart-5: oklch(0.7 0.16 20);
  --sidebar: oklch(0.2 0 0);
  --sidebar-foreground: oklch(0.96 0 0);
  --sidebar-primary: oklch(0.68 0.16 250);
  --sidebar-primary-foreground: oklch(0.15 0 0);
  --sidebar-accent: oklch(0.28 0 0);
  --sidebar-accent-foreground: oklch(0.96 0 0);
  --sidebar-border: oklch(0.3 0 0);
  --sidebar-ring: oklch(0.68 0.16 250);
  /* Surface tokens (dark values - matches existing hardcoded hex) */
  --surface-page: #1f1f1e;
  --surface-sidebar: #1d1d1c;
  --surface-section: #1b1b1b;
  --surface-elevated: #2c2c2a;
  --surface-hover: #4b4b4b;
  --border-surface: rgba(255, 255, 255, 0.2);
  --sidebar-hover: oklch(0.22 0 0);
}

/* ── Light theme ─────────────────────────────────────────────────────────── */
html.light {
  --background: oklch(0.97 0.005 80);       /* warm off-white */
  --foreground: oklch(0.18 0.01 60);        /* near-black warm */
  --card: oklch(0.99 0.003 80);             /* white card */
  --card-foreground: oklch(0.18 0.01 60);
  --card-elevated: oklch(0.95 0.005 80);    /* light gray inputs */
  --popover: oklch(0.99 0.003 80);
  --popover-foreground: oklch(0.18 0.01 60);
  --primary: oklch(0.55 0.18 250);          /* deeper pixel blue for contrast */
  --primary-foreground: oklch(0.98 0 0);
  --secondary: oklch(0.93 0.005 80);
  --secondary-foreground: oklch(0.22 0.01 60);
  --muted: oklch(0.94 0.005 80);
  --muted-foreground: oklch(0.48 0.01 60);
  --accent: oklch(0.92 0.008 80);
  --accent-foreground: oklch(0.18 0.01 60);
  --destructive: oklch(0.55 0.22 25);
  --destructive-foreground: oklch(0.98 0 0);
  --border: oklch(0.88 0.008 80);
  --border-strong: oklch(0.82 0.01 80);
  --input: oklch(0.88 0.008 80);
  --ring: oklch(0.55 0.18 250);
  --pixel-blue: oklch(0.55 0.18 250);
  --pixel-blue-soft: oklch(0.72 0.08 245);
  --chart-1: oklch(0.55 0.18 250);
  --chart-2: oklch(0.55 0.14 180);
  --chart-3: oklch(0.60 0.16 80);
  --chart-4: oklch(0.52 0.20 320);
  --chart-5: oklch(0.55 0.18 20);
  --sidebar: oklch(0.97 0.005 80);
  --sidebar-foreground: oklch(0.18 0.01 60);
  --sidebar-primary: oklch(0.55 0.18 250);
  --sidebar-primary-foreground: oklch(0.98 0 0);
  --sidebar-accent: oklch(0.93 0.008 80);
  --sidebar-accent-foreground: oklch(0.18 0.01 60);
  --sidebar-border: oklch(0.88 0.008 80);
  --sidebar-ring: oklch(0.55 0.18 250);
  /* Surface tokens (light values) */
  --surface-page: oklch(0.96 0.005 80);      /* warm light page bg */
  --surface-sidebar: oklch(0.98 0.003 80);   /* white sidebar */
  --surface-section: oklch(0.99 0.003 80);   /* white sections */
  --surface-elevated: oklch(0.96 0.005 80);  /* light gray elevated */
  --surface-hover: oklch(0.92 0.008 80);     /* subtle hover */
  --border-surface: oklch(0.88 0.008 80);    /* light border */
  --sidebar-hover: oklch(0.94 0.005 80);
}

@layer base {
  * {
    border-color: var(--color-border);
  }

  html,
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family:
      "Inter",
      ui-sans-serif,
      system-ui,
      -apple-system,
      "Segoe UI",
      Roboto,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  ::selection {
    background-color: color-mix(in oklab, var(--pixel-blue) 35%, transparent);
  }
}

/* Smooth, app-wide transitions */
@layer utilities {
  .transition-smooth {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .hairline {
    border: 1px solid var(--color-border);
  }
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background: var(--color-border-strong);
    border-radius: 9999px;
  }
}
`````

## File: stock_tv.html
`````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>STOCK MONITORING | Multi-Theme Industrial UI</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        /* --- 1. Dynamic Color System --- */
        :root {
            /* DARK THEME (Original - Untouched) */
            --color-bg-base: #0A0B0D;
            --color-bg-surface: #111318;
            --color-bg-border: #2A2D35;
            --color-text-primary: #F0F2F5;
            --color-text-secondary: #8B90A0;
            --color-text-muted: #555A68;
            --color-critical: #E84545;
            --color-critical-bg: #2A1515;
            --color-critical-dim: #5C1F1F;
            --color-critical-text: #993333;
            --color-warning: #F5A623;
            --color-warning-bg: #2A1E0A;
            --color-warning-dim: #5C3D10;
            --color-warning-text: #9A6010;
            --color-safe: #22C55E;
            --color-safe-bg: #0F2A1A;
            --color-safe-dim: #1A5C35;
            --color-safe-text: #1A7A40;
            --color-accent: #3B82F6;
            --chart-grid: rgba(255, 255, 255, 0.04);
        }

        /* WHITE THEME OVERRIDES */
        [data-theme="light"] {
            --color-bg-base: #F8F9FA;
            --color-bg-surface: #FFFFFF;
            --color-bg-border: #DDE2E5;
            --color-text-primary: #111318;
            --color-text-secondary: #495057;
            --color-text-muted: #ADB5BD;
            --color-critical-bg: #FFF5F5;
            --color-critical-dim: #FFE3E3;
            --color-warning-bg: #FFF9DB;
            --color-warning-dim: #FFF3BF;
            --color-safe-bg: #EBFBEE;
            --color-safe-dim: #D3F9D8;
            --chart-grid: rgba(0, 0, 0, 0.06);
        }

        /* --- 2. Structural CSS --- */
        html, body { 
            height: 100%; 
            margin: 0; 
            padding: 0; 
            overflow: hidden; 
            background-color: var(--color-bg-base);
            color: var(--color-text-primary);
            font-family: 'Inter', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        #app-shell {
            display: flex;
            flex-direction: column;
            height: 100dvh;
            width: 100vw;
            overflow: hidden;
        }

        header {
            height: 44px;
            background: var(--color-bg-base);
            border-bottom: 1px solid var(--color-bg-border);
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-shrink: 0;
        }

        .header-title { font-size: 15px; font-weight: 700; }
        .header-time { font-size: 13px; color: var(--color-text-secondary); }
        .header-right { display: flex; align-items: center; gap: 12px; }
        .live-badge { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: var(--color-safe); }
        .live-dot { width: 8px; height: 8px; background: var(--color-safe); border-radius: 50%; animation: pulse-green 1.5s ease-in-out infinite; }
        
        @keyframes pulse-green {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
        }

        .btn-tv {
            border: 1px solid var(--color-bg-border);
            border-radius: 6px;
            padding: 5px 12px;
            font-size: 11px;
            font-weight: 600;
            color: var(--color-text-secondary);
            background: transparent;
            cursor: pointer;
        }

        .main-content {
            flex: 1;
            display: flex;
            flex-direction: row;
            overflow: hidden;
        }

        .left-col {
            flex: 1;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            overflow: hidden;
        }

        .right-col {
            width: 300px;
            flex-shrink: 0;
            background: var(--color-bg-surface);
            border-left: 1px solid var(--color-bg-border);
            padding: 16px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        /* --- KPI ROW (tv-kpi-row) --- */
        .top-row { display: flex; gap: 12px; height: 140px; flex-shrink: 0; }
        .gauge-container { width: 140px; height: 140px; position: relative; flex-shrink: 0; }
        .gauge-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
        .gauge-val { font-size: 28px; font-weight: 700; line-height: 1; }
        .gauge-label { font-size: 9px; color: var(--color-text-muted); letter-spacing: 0.12em; }

        /* tv-kpi-row: the KPI card container */
        tv-kpi-row {
            flex: 1;
            display: flex;
            gap: 8px;
        }

        .kpi-card {
            flex: 1; border-radius: 0 8px 8px 0; padding: 12px 14px;
            display: flex; flex-direction: column; justify-content: space-between;
            transition: background-color 0.2s ease;
        }
        .kpi-card.critical { background: var(--color-critical-bg); border: 1px solid var(--color-critical-dim); border-left: 3px solid var(--color-critical); }
        .kpi-card.warning  { background: var(--color-warning-bg);  border: 1px solid var(--color-warning-dim);  border-left: 3px solid var(--color-warning); }
        .kpi-card.safe     { background: var(--color-safe-bg);     border: 1px solid var(--color-safe-dim);     border-left: 3px solid var(--color-safe); }
        .kpi-number { font-size: 56px; font-weight: 700; line-height: 1; margin: auto 0; transition: all 0.3s ease; }

        .section-label { font-size: 11px; font-weight: 600; color: var(--color-text-muted); letter-spacing: 0.1em; text-transform: uppercase; flex-shrink: 0; }

        /* --- MACHINE GRID (tv-mc-val) --- */
        .machine-grid { 
            display: grid; 
            grid-template-columns: repeat(4, 1fr); 
            grid-auto-rows: minmax(80px, 90px); 
            gap: 8px; 
            flex-shrink: 0; 
        }

        .mc-card {
            background: var(--color-bg-surface); border-radius: 0 8px 8px 0; padding: 10px 12px;
            display: grid; grid-template-areas: "id icon" "val icon"; grid-template-columns: 1fr auto; grid-template-rows: auto 1fr;
            border: 1px solid var(--color-bg-border);
            transition: background-color 0.2s ease, border-color 0.3s ease;
        }
        .mc-id   { grid-area: id;   font-size: 12px; font-weight: 500; color: var(--color-text-muted); }
        .mc-icon { grid-area: icon; font-size: 28px; align-self: center; }

        /* tv-mc-val: the value inside each MC card */
        tv-mc-val { grid-area: val; font-size: 40px; font-weight: 700; line-height: 1; align-self: end; display: block; transition: all 0.3s ease; }

        .mc-card.critical { border: 1px solid var(--color-critical-dim); border-left: 3px solid var(--color-critical); }
        .mc-card.warning  { border: 1px solid var(--color-warning-dim);  border-left: 3px solid var(--color-warning); }
        .mc-card.safe     { border: 1px solid var(--color-safe-dim);     border-left: 3px solid var(--color-safe); }

        .chart-wrapper { flex: 1; min-height: 0; display: flex; flex-direction: column; position: relative; }
        #stockChart { width: 100% !important; height: 100% !important; }

        @media (min-width: 1920px) { tv-mc-val { font-size: 52px; } .kpi-number { font-size: 72px; } .gauge-val { font-size: 36px; } }
        @media (min-width: 2560px) { tv-mc-val { font-size: 64px; } .kpi-number { font-size: 88px; } .gauge-val { font-size: 44px; } }

        /* --- RIGHT PANEL: PRIORITY PRODUCTION --- */
        .panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-shrink: 0; }
        .empty-state { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; color: var(--color-text-muted); padding-bottom: 60px; }

        /* tv-priority-table: the scrollable priority table */
        tv-priority-table {
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow-y: auto;
            gap: 6px;
            /* thin scrollbar */
            scrollbar-width: thin;
            scrollbar-color: var(--color-bg-border) transparent;
        }
        tv-priority-table::-webkit-scrollbar { width: 4px; }
        tv-priority-table::-webkit-scrollbar-thumb { background: var(--color-bg-border); border-radius: 2px; }

        /* MC Group block inside priority table */
        .priority-mc-group {
            background: var(--color-bg-base);
            border-radius: 6px;
            border: 1px solid var(--color-bg-border);
            overflow: hidden;
            flex-shrink: 0;
        }

        .priority-mc-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 7px 10px;
            border-bottom: 1px solid var(--color-bg-border);
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.05em;
        }

        .priority-mc-header.critical { background: var(--color-critical-bg); color: var(--color-critical); }
        .priority-mc-header.warning  { background: var(--color-warning-bg);  color: var(--color-warning); }
        .priority-mc-header.safe     { background: var(--color-safe-bg);     color: var(--color-safe); }

        /* Status badge for the ST column */
        .badge-st {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 7px;
            border-radius: 4px;
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }
        .badge-critical { background: var(--color-critical-bg); color: var(--color-critical); border: 1px solid var(--color-critical-dim); }
        .badge-warning  { background: var(--color-warning-bg);  color: var(--color-warning);  border: 1px solid var(--color-warning-dim); }
        .badge-safe     { background: var(--color-safe-bg);     color: var(--color-safe);     border: 1px solid var(--color-safe-dim); }

        /* Part rows inside a MC group */
        .priority-part-row {
            display: grid;
            grid-template-columns: 1fr auto auto;
            align-items: center;
            padding: 5px 10px;
            gap: 8px;
            font-size: 11px;
            border-bottom: 1px solid var(--color-bg-border);
        }
        .priority-part-row:last-child { border-bottom: none; }
        .priority-part-name { color: var(--color-text-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .priority-part-jam  { font-weight: 600; font-size: 12px; color: var(--color-text-primary); min-width: 36px; text-align: right; }
        .priority-part-st   { min-width: 54px; text-align: right; }
    </style>
</head>
<body>

    <div id="app-shell">
        <header>
            <div class="header-title">STOCK MONITORING</div>
            <div class="header-time" id="clock">Sun 24 May 2026 - 08:41:33 WIB</div>
            <div class="header-right">
                <div class="live-badge"><div class="live-dot"></div>LIVE</div>
                <button class="btn-tv" onclick="document.documentElement.requestFullscreen()">TV MODE</button>
            </div>
        </header>

        <main class="main-content">
            <div class="left-col">
                <section class="top-row">
                    <div class="gauge-container">
                        <svg viewBox="0 0 140 140" width="140" height="140">
                            <circle cx="70" cy="70" r="54" stroke="var(--color-bg-border)" stroke-width="10" fill="none" />
                            <circle id="gauge-arc" cx="70" cy="70" r="54" stroke="var(--color-safe)" stroke-width="10" fill="none" stroke-dasharray="339.3" stroke-dashoffset="60" stroke-linecap="round" transform="rotate(-90 70 70)" style="transition: stroke-dashoffset 800ms ease;" />
                        </svg>
                        <div class="gauge-text">
                            <div class="gauge-val" id="gauge-display">82.1%</div>
                            <div class="gauge-label">AVAILABILITY</div>
                        </div>
                    </div>

                    <!-- tv-kpi-row: KPI cards auto-counted from PRIORITY PRODUCTION MC groups -->
                    <tv-kpi-row id="tv-kpi-row">
                        <div class="kpi-card critical" id="kpi-critical">
                            <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:600; color:var(--color-critical); text-transform:uppercase;">Critical <span style="color:var(--color-critical-text);">&lt; 3JAM</span></div>
                            <div class="kpi-number" id="kpi-critical-count">0</div>
                            <div style="font-size:11px; color:var(--color-text-muted);">MC GROUPS</div>
                        </div>
                        <div class="kpi-card warning" id="kpi-warning">
                            <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:600; color:var(--color-warning); text-transform:uppercase;">Warning <span style="color:var(--color-warning-text);">3–4JAM</span></div>
                            <div class="kpi-number" id="kpi-warning-count">0</div>
                            <div style="font-size:11px; color:var(--color-text-muted);">MC GROUPS</div>
                        </div>
                        <div class="kpi-card safe" id="kpi-safe">
                            <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:600; color:var(--color-safe); text-transform:uppercase;">Safe <span style="color:var(--color-safe-text);">&gt; 4JAM</span></div>
                            <div class="kpi-number" id="kpi-safe-count">0</div>
                            <div style="font-size:11px; color:var(--color-text-muted);">MC GROUPS</div>
                        </div>
                    </tv-kpi-row>
                </section>

                <div class="section-label">Minimum Stock / Machine</div>
                <section class="machine-grid" id="m-grid"></section>

                <div class="section-label" style="margin-top: 4px;">Ratio Stock Part by Part</div>
                <section class="chart-wrapper">
                    <canvas id="stockChart"></canvas>
                </section>
            </div>

            <aside class="right-col">
                <div class="panel-header">
                    <span style="font-size:12px; font-weight:600; color:var(--color-text-secondary); letter-spacing:0.1em;">PRIORITY PRODUCTION</span>
                    <span style="background:var(--color-warning-bg); border:1px solid var(--color-warning-dim); border-radius:4px; padding:3px 8px; font-size:10px; font-weight:700; color:var(--color-warning);">&lt; 4H</span>
                </div>

                <!-- tv-priority-table: grouped MC blocks with ST column derived from JAM -->
                <tv-priority-table id="tv-priority-table">
                    <!-- Rendered by JS -->
                </tv-priority-table>
            </aside>
        </main>
    </div>

    <script>
        // =========================================================
        // THEME ENGINE
        // =========================================================
        function applyTheme() {
            const params = new URLSearchParams(window.location.search);
            const theme = params.get('theme');
            let isDark = true;

            if (theme === 'white') {
                isDark = false;
            } else if (theme === 'dark') {
                isDark = true;
            } else {
                isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            }

            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            return isDark;
        }

        const isDarkMode = applyTheme();

        // =========================================================
        // PRIORITY LOGIC - Section 1
        // JAM thresholds:  < 3.0 → critical | 3.0–3.99 → warning | ≥ 4.0 → safe
        // =========================================================
        function jamStatus(jam) {
            const v = parseFloat(jam);
            if (isNaN(v))       return 'critical'; // unknown → treat as critical
            if (v < 3.0)        return 'critical';
            if (v < 4.0)        return 'warning';
            return 'safe';
        }

        function jamBadgeClass(status) {
            return `badge-st badge-${status}`;
        }

        const STATUS_ICON = { critical: '🔴', warning: '🟡', safe: '🟢' };
        const STATUS_LABEL = { critical: 'critical', warning: 'warning', safe: 'safe' };

        // =========================================================
        // DATA - PRIORITY PRODUCTION (raw parts with JAM)
        // Each row: { mc, part, jam }
        // =========================================================
        const priorityRows = [
            { mc: 'MC#2', part: 'DAPPY',        jam: 0.0   },
            { mc: 'MC#2', part: 'DUMMY PART',   jam: 0.0   },
            { mc: 'MC#2', part: 'PANEL QTR LH', jam: 106.7 },
            { mc: 'MC#2', part: 'RIZKY DAFFY',  jam: 40.0  },
            { mc: 'MC#3', part: 'PART-A',        jam: 3.5   },
            { mc: 'MC#3', part: 'PART-B',        jam: 3.8   },
            { mc: 'MC#5', part: 'COWL TOP',      jam: 1.2   },
            { mc: 'MC#5', part: 'HOOD ASSY',     jam: 2.6   },
            { mc: 'MC#7', part: 'FENDER RH',     jam: 4.1   },
            { mc: 'MC#7', part: 'FENDER LH',     jam: 5.3   },
        ];

        // =========================================================
        // SECTION 2 - Group rows by MC, compute min JAM per MC
        // =========================================================
        function groupByMC(rows) {
            const groups = {};
            rows.forEach(row => {
                if (!groups[row.mc]) groups[row.mc] = { mc: row.mc, parts: [] };
                groups[row.mc].parts.push({ part: row.part, jam: parseFloat(row.jam) });
            });

            // Compute minJAM and status for each group
            Object.values(groups).forEach(g => {
                g.minJAM = Math.min(...g.parts.map(p => p.jam));
                g.status = jamStatus(g.minJAM);
            });

            return groups;
        }

        // =========================================================
        // SECTION 2 - Render tv-mc-val in the machine grid
        // =========================================================
        function renderMachineGrid(mcGroups) {
            const container = document.getElementById('m-grid');
            container.innerHTML = '';

            // All MC slots (some may not be in priority data → show as 'none')
            const allMCs = ['MC#1','MC#2','MC#3','MC#4','MC#5','MC#6','MC#7','MC#8'];
            const overrides = {
                'MC#1': { val: null, status: 'none', sub: 'Running / Reset' },
                'MC#4': { val: 5.5,  status: 'safe'   },
                'MC#6': { val: 2.6,  status: 'warning' },
            };

            allMCs.forEach(mcId => {
                const card = document.createElement('div');
                let status, displayVal, sub;

                if (mcGroups[mcId]) {
                    // Driven by PRIORITY PRODUCTION data
                    const g = mcGroups[mcId];
                    status     = g.status;
                    displayVal = g.minJAM.toFixed(1);
                    sub        = null;
                } else if (overrides[mcId]) {
                    const o = overrides[mcId];
                    status     = o.status;
                    displayVal = o.val !== null ? o.val.toFixed(1) : null;
                    sub        = o.sub || null;
                } else {
                    // Default: not in priority, show static safe placeholder
                    status     = 'safe';
                    displayVal = '-';
                    sub        = null;
                }

                card.className = `mc-card ${status}`;
                const icon = status === 'critical' ? '💔' : status === 'warning' ? '⚠️' : status === 'safe' ? '💚' : '-';
                const valStr = displayVal !== null ? displayVal : 'N/A';

                card.innerHTML = `
                    <div class="mc-id">${mcId}</div>
                    <div class="mc-icon">${icon}</div>
                    <tv-mc-val data-mc="${mcId}">${valStr}${sub ? `<span style="font-size:10px; color:var(--color-text-muted); display:block; margin-top:2px;">${sub}</span>` : ''}</tv-mc-val>
                `;
                container.appendChild(card);
            });
        }

        // =========================================================
        // SECTION 1 - Render tv-priority-table (grouped MC blocks)
        //             ST badge per row is derived from that row's JAM
        // =========================================================
        function renderPriorityTable(mcGroups) {
            const table = document.getElementById('tv-priority-table');

            if (Object.keys(mcGroups).length === 0) {
                table.innerHTML = `
                    <div class="empty-state">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-bg-border)" stroke-width="1.5"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                        <div style="font-size:13px;">No active priorities</div>
                    </div>`;
                return;
            }

            table.innerHTML = '';

            // Sort groups: critical first, then warning, then safe
            const sortOrder = { critical: 0, warning: 1, safe: 2 };
            const sorted = Object.values(mcGroups).sort((a, b) => sortOrder[a.status] - sortOrder[b.status]);

            sorted.forEach(group => {
                const groupEl = document.createElement('div');
                groupEl.className = 'priority-mc-group';

                // MC group header showing MC id, min JAM badge, and ST status
                const minStatus = group.status;
                const minBadgeHtml = `<span class="${jamBadgeClass(minStatus)}">${STATUS_ICON[minStatus]} ${group.minJAM.toFixed(1)}h</span>`;

                groupEl.innerHTML = `
                    <div class="priority-mc-header ${minStatus}">
                        <span>${group.mc}</span>
                        ${minBadgeHtml}
                    </div>
                `;

                // Part rows: each row shows part name, JAM value, and ST badge (from that row's JAM)
                group.parts.forEach(p => {
                    const rowStatus = jamStatus(p.jam);
                    const rowEl = document.createElement('div');
                    rowEl.className = 'priority-part-row';
                    rowEl.innerHTML = `
                        <span class="priority-part-name" title="${p.part}">${p.part}</span>
                        <span class="priority-part-jam">${p.jam.toFixed(1)}</span>
                        <span class="priority-part-st">
                            <span class="${jamBadgeClass(rowStatus)}">${STATUS_ICON[rowStatus]} ${STATUS_LABEL[rowStatus]}</span>
                        </span>
                    `;
                    groupEl.appendChild(rowEl);
                });

                table.appendChild(groupEl);
            });
        }

        // =========================================================
        // SECTION 3 - Update tv-kpi-row counts from every individual
        //             PRIORITY PRODUCTION row (not MC group minJAM).
        //             ST is computed per-row via jamStatus(row.jam).
        //             Safe rows and JAM=0 rows are all counted.
        // =========================================================
        function updateKpiRow(rows) {
            const tally = { critical: 0, warning: 0, safe: 0 };
            rows.forEach(row => {
                const st = jamStatus(row.jam);
                tally[st] = (tally[st] || 0) + 1;
            });

            document.getElementById('kpi-critical-count').textContent = tally.critical;
            document.getElementById('kpi-warning-count').textContent  = tally.warning;
            document.getElementById('kpi-safe-count').textContent      = tally.safe;
        }

        // =========================================================
        // MAIN RENDER - single entry point, call whenever data changes
        // =========================================================
        function render() {
            const mcGroups = groupByMC(priorityRows);
            renderMachineGrid(mcGroups);
            renderPriorityTable(mcGroups);
            updateKpiRow(priorityRows); // ← counts each row individually
        }

        // =========================================================
        // CHART
        // =========================================================
        function initChart() {
            const ctx = document.getElementById('stockChart').getContext('2d');
            const style = getComputedStyle(document.documentElement);
            const gridColor = style.getPropertyValue('--chart-grid').trim();
            const textColor = style.getPropertyValue('--color-text-muted').trim();

            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
            gradient.addColorStop(1, 'transparent');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['AX-200', 'BY-450', 'CZ-100', 'DV-900', 'ER-300', 'FT-550', 'GH-120', 'JK-880', 'LM-400', 'NP-220'],
                    datasets: [{
                        data: [13, 3, 13, 14, 5, 14, 11, 4, 3, 1],
                        borderColor: '#3B82F6',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        backgroundColor: gradient,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { display: false }, ticks: { color: textColor, font: { size: 10 } } },
                        y: { min: 0, max: 16, grid: { color: gridColor }, ticks: { color: textColor, stepSize: 4 } }
                    }
                }
            });
        }

        // =========================================================
        // CLOCK
        // =========================================================
        function updateClock() {
            const now = new Date();
            document.getElementById('clock').innerText = now.toLocaleString('en-GB', { 
                weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', 
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
            }) + ' WIB';
        }

        setInterval(updateClock, 1000);
        updateClock();
        render();       // initial render - reactive: call render() again whenever priorityRows changes
        initChart();
    </script>
</body>
</html>
`````

## File: server/routes/qr.ts
`````typescript
import { Router } from "express";
import jwt from "jsonwebtoken";
import QRCode from "qrcode";
import crypto from "crypto";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import { syncStockAnalyticsOnScan } from "../lib/stockAnalyticsService.js";

const router = Router();

// ─── In-memory session cache (replaces Redis) ───────────────────────────────
// batchId → { metadata, scannedInAt }
const sessionCache = new Map<string, { metadata: Record<string, unknown>; scannedInAt: Date }>();

const SECRET_KEY = process.env.JWT_SECRET || "pixel-scan-secret-key-2026"; //change with sha1 encrypt
// BASE_URL is kept for any future use but is no longer embedded in QR payloads
const _BASE_URL = process.env.API_BASE_URL || "http://localhost:3001";
void _BASE_URL; // intentionally unused - QR now stores only a short token

// ─── Helper: generate a short opaque token (8 URL-safe chars) ────────────────
// Uses crypto.randomBytes for unpredictability. Charset is base62 (no +/= padding).
function generateShortToken(): string {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const bytes = crypto.randomBytes(8);
  let token = "";
  for (const byte of bytes) {
    token += charset[byte % charset.length];
  }
  return token;
}

// ─── Helper: next sequential QR ID ───────────────────────────────────────────
async function nextQrId(): Promise<string> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT MAX(CAST(SUBSTRING(qr_id, 4) AS UNSIGNED)) AS max_num FROM qr_codes"
  );
  const maxNum = rows[0]?.max_num ?? 1000;
  return `QR-${Number(maxNum) + 1}`;
}

// ─── Helper: next sequential Task ID ─────────────────────────────────────────
async function nextTaskId(): Promise<string> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT MAX(CAST(SUBSTRING(task_id, 3) AS UNSIGNED)) AS max_num FROM tasks"
  );
  const maxNum = rows[0]?.max_num ?? 1000;
  return `T-${Number(maxNum) + 1}`;
}

// ─── Helper: update stock after a scan ───────────────────────────────────────
async function updateStock(
  batchId: string,
  action: "SCAN_IN" | "SCAN_OUT",
  unitValue: number
): Promise<void> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT id, current_stock, unit_value FROM stock WHERE batch_id = ?",
    [batchId]
  );
  if (rows.length === 0) return; // no stock row - skip (seed data doesn't have stock rows)

  const currentStock = Number(rows[0].current_stock);
  const uv = Number(rows[0].unit_value);

  let newStock: number;
  let trend: "up" | "down";

  if (action === "SCAN_IN") {
    newStock = currentStock + unitValue;
    trend = "up";
  } else {
    // Caller already checked stock > 0 before calling this - just subtract
    newStock = Math.max(0, currentStock - unitValue);
    trend = newStock === 0 ? "down" : "down";
  }

  const percentage = uv > 0 ? Math.min(100, parseFloat(((newStock / uv) * 100).toFixed(2))) : 0;

  await pool.query(
    "UPDATE stock SET current_stock = ?, trend = ?, percentage = ? WHERE batch_id = ?",
    [newStock, trend, percentage, batchId]
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// [1] GET /api/qr - list all QR codes
// ═══════════════════════════════════════════════════════════════════════════
router.get("/", async (req, res) => {
  try {
    const search = (req.query.search as string) || "";
    let query = "SELECT * FROM qr_codes";
    const params: string[] = [];

    if (search) {
      query += " WHERE part_name LIKE ? OR qr_id LIKE ?";
      params.push(`%${search}%`, `%${search}%`);
    }

    query += " ORDER BY created_at DESC";

    const [rows] = await pool.query<RowDataPacket[]>(query, params);
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [2] POST /api/qr/generate - create a new QR code with JWT token
// Body: { partName, factoryOrigin, value }
// Also inserts a row into the stock table with current_stock = 0
// ═══════════════════════════════════════════════════════════════════════════
router.post("/generate", async (req, res) => {
  try {
    const { partName, factoryOrigin, value, machineOrigin, partId } = req.body;

    if (!partName || !factoryOrigin || value === undefined) {
      return res.status(400).json({
        success: false,
        error: "Butuh fields terisi: partName, factoryOrigin, value",
      });
    }

    const batchId = `BATCH-${Date.now()}`;
    const qrId = await nextQrId();
    const unitValue = Number(value);

    // Sign full JWT - stored server-side only, never embedded in the QR image
    const token = jwt.sign(
      { batchId, partName, factoryOrigin, value: unitValue, machineOrigin: machineOrigin ?? "" },
      SECRET_KEY
    );

    // Generate a short opaque token - this is all the QR image encodes
    // Collision probability at current scale is negligible; retry once on duplicate
    let shortToken = generateShortToken();
    try {
      // Pre-check for collision (extremely rare but safe to guard)
      const [existing] = await pool.query<RowDataPacket[]>(
        "SELECT id FROM qr_codes WHERE short_token = ? LIMIT 1",
        [shortToken]
      );
      if (existing.length > 0) shortToken = generateShortToken();
    } catch {
      // short_token column may not exist yet - migration not run; fall through
    }

    // QR encodes only the short token - no URL, no IP, no JWT
    const qrImageBase64 = await QRCode.toDataURL(shortToken, {
      width: 400,
      margin: 2,
      color: { dark: "#000000", light: "#ffffff" },
    });

    // Save to qr_codes (short_token stored alongside the full JWT)
    // part_id links this QR to a master_parts row for stable edit-mode lookups
    const partIdValue = partId ? Number(partId) : null;
    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO qr_codes (qr_id, batch_id, part_name, factory, material, qr_value, units, token, short_token, qr_image_base64, status, part_id)
       VALUES (?, ?, ?, ?, '', ?, ?, ?, ?, ?, 'out', ?)`,
      [qrId, batchId, partName, factoryOrigin, String(unitValue), unitValue, token, shortToken, qrImageBase64, partIdValue]
    );

    // ── Save to stock with current_stock = 0 (starts empty) ──────────────────
    // Use ON DUPLICATE KEY UPDATE to prevent duplicate stock rows for the same batch_id
    await pool.query(
      `INSERT INTO stock (batch_id, qr_id, part_name, factory, unit_value, current_stock, trend, percentage)
       VALUES (?, ?, ?, ?, ?, 0, 'none', 0.00)
       ON DUPLICATE KEY UPDATE part_name = VALUES(part_name), factory = VALUES(factory), unit_value = VALUES(unit_value)`,
      [batchId, qrId, partName, factoryOrigin, unitValue]
    );

    // Log task
    const taskId = await nextTaskId();
    await pool.query(
      "INSERT INTO tasks (task_id, title, type, status, user) VALUES (?, ?, 'QR Created', 'completed', 'System')",
      [taskId, `QR for ${partName} (×${unitValue})`]
    );

    const [newRow] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM qr_codes WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json({
      success: true,
      message: "QR Code berhasil dibuat",
      data: {
        batchId,
        qrId,
        shortToken,
        qrImageBase64,
        partName,
        factoryOrigin,
        value: unitValue,
        status: "out",
        row: newRow[0],
      },
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [NEW] POST /api/qr/regenerate - Replace a QR code, keeping stock/history
// ═══════════════════════════════════════════════════════════════════════════
router.post("/regenerate", async (req, res) => {
  try {
    const { oldShortToken, partName, factoryOrigin, value, machineOrigin, partId } = req.body;

    if (!oldShortToken || !partName || !factoryOrigin || value === undefined) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields for regeneration",
      });
    }

    // 1. Find existing QR
    const [existingQr] = await pool.query<RowDataPacket[]>(
      "SELECT id, batch_id, qr_id FROM qr_codes WHERE short_token = ? LIMIT 1",
      [oldShortToken]
    );

    if (existingQr.length === 0) {
      return res.status(404).json({ success: false, error: "Old QR not found." });
    }

    const { id: dbId, batch_id: batchId, qr_id: qrId } = existingQr[0];
    const unitValue = Number(value);

    // 2. Generate new token and image
    const newToken = jwt.sign(
      { batchId, partName, factoryOrigin, value: unitValue, machineOrigin: machineOrigin ?? "" },
      SECRET_KEY
    );

    let newShortToken = generateShortToken();
    try {
      const [collide] = await pool.query<RowDataPacket[]>(
        "SELECT id FROM qr_codes WHERE short_token = ? LIMIT 1", [newShortToken]
      );
      if (collide.length > 0) newShortToken = generateShortToken();
    } catch {}

    const qrImageBase64 = await QRCode.toDataURL(newShortToken, {
      width: 400,
      margin: 2,
      color: { dark: "#000000", light: "#ffffff" },
    });

    // 3. Update qr_codes (preserve batch_id/qr_id, update metadata and part_id)
    const partIdValue = partId ? Number(partId) : null;
    await pool.query(
      `UPDATE qr_codes 
       SET part_name = ?, factory = ?, qr_value = ?, units = ?, token = ?, short_token = ?, qr_image_base64 = ?,
           part_id = COALESCE(?, part_id)
       WHERE id = ?`,
      [partName, factoryOrigin, String(unitValue), unitValue, newToken, newShortToken, qrImageBase64, partIdValue, dbId]
    );

    // 4. Record the alias
    await pool.query(
      "INSERT INTO qr_aliases (old_short_token, new_short_token) VALUES (?, ?) ON DUPLICATE KEY UPDATE new_short_token = ?",
      [oldShortToken, newShortToken, newShortToken]
    );

    // 5. Update stock metadata (preserves current_stock)
    // Use INSERT ... ON DUPLICATE KEY UPDATE as a guard in case stock row is missing
    await pool.query(
      `INSERT INTO stock (batch_id, qr_id, part_name, factory, unit_value, current_stock, trend, percentage)
       VALUES (?, ?, ?, ?, ?, 0, 'none', 0.00)
       ON DUPLICATE KEY UPDATE part_name = VALUES(part_name), factory = VALUES(factory), unit_value = VALUES(unit_value)`,
      [batchId, qrId, partName, factoryOrigin, unitValue]
    );

    // 6. Log task
    const taskId = await nextTaskId();
    await pool.query(
      "INSERT INTO tasks (task_id, title, type, status, user) VALUES (?, ?, 'QR Created', 'completed', 'System')",
      [taskId, `QR Regenerated for ${partName}`]
    );

    const [newRow] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM qr_codes WHERE id = ?", [dbId]
    );

    res.json({
      success: true,
      message: "QR Code berhasil diregenerate",
      data: {
        batchId,
        qrId,
        shortToken: newShortToken,
        qrImageBase64,
        partName,
        factoryOrigin,
        value: unitValue,
        status: newRow[0].status,
        row: newRow[0],
      },
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [NEW] GET /api/qr/by-part/:partId - find latest active QR for a master part
// Used by edit mode in /master-data/create?editId to do a stable ID-based lookup
// instead of fragile part_name string matching.
// ═══════════════════════════════════════════════════════════════════════════
router.get("/by-part/:partId", async (req, res) => {
  try {
    const partId = Number(req.params.partId);
    if (!partId || isNaN(partId)) {
      return res.status(400).json({ success: false, error: "Invalid partId" });
    }

    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT * FROM qr_codes WHERE part_id = ? ORDER BY created_at DESC LIMIT 1`,
      [partId]
    );

    if (rows.length === 0) {
      // No QR yet - not an error, part just hasn't been assigned a QR
      return res.json({ success: true, data: null });
    }

    res.json({ success: true, data: rows[0] });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [3] GET /api/qr/info?token=<shortToken> - resolve short token → batch data
// The QR image now encodes only the short token (8 chars).
// This endpoint looks up the full JWT from qr_codes, verifies it, and returns
// the same response shape as before so all clients remain compatible.
// ═══════════════════════════════════════════════════════════════════════════
router.get("/info", async (req, res) => {
  try {
    const { token } = req.query as { token: string };

    if (!token) {
      return res.status(400).json({ success: false, error: "Hmmm... Token hilang nih" });
    }

    // Resolve short token → full JWT from DB
    let [rows] = await pool.query<RowDataPacket[]>(
      "SELECT token, updated_at, machine_origin FROM qr_codes WHERE short_token = ? LIMIT 1",
      [token]
    );

    let actualToken = token;

    if (rows.length === 0) {
      // Fallback: check qr_aliases
      let currentToken = token;
      let depth = 0;
      while (depth < 5) {
        const [aliasRows] = await pool.query<RowDataPacket[]>(
          "SELECT new_short_token FROM qr_aliases WHERE old_short_token = ? LIMIT 1",
          [currentToken]
        );
        if (aliasRows.length === 0) break;
        currentToken = aliasRows[0].new_short_token;
        depth++;
      }
      
      actualToken = currentToken;
      const [finalRows] = await pool.query<RowDataPacket[]>(
        "SELECT token, updated_at, machine_origin FROM qr_codes WHERE short_token = ? LIMIT 1",
        [actualToken]
      );
      if (finalRows.length > 0) {
        rows = finalRows;
      }
    }

    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: "QR tidak dikenali - token tidak ditemukan" });
    }

    const fullJwt: string = rows[0].token;
    const updatedAt = rows[0].updated_at;
    const machineOrigin = rows[0].machine_origin;

    const decoded = jwt.verify(fullJwt, SECRET_KEY) as {
      batchId: string;
      partName: string;
      factoryOrigin: string;
      value: number;
      machineOrigin?: string; // fallback if needed
    };

    const { batchId, partName, factoryOrigin, value } = decoded;
    const resolvedMachineOrigin = machineOrigin || decoded.machineOrigin || "";
    const isIn = sessionCache.has(batchId);
    const currentStatus = isIn ? "in" : "out";
    const nextAction = isIn ? "SCAN_OUT" : "SCAN_IN";

    res.json({
      success: true,
      data: {
        batchId,
        partName,
        factoryOrigin,
        value,
        machineOrigin: resolvedMachineOrigin,
        updatedAt,
        currentStatus,
        nextAction,
        message: isIn
          ? `${partName} is currently IN (active). Scanning will mark it OUT.`
          : `${partName} is currently OUT (idle). Scanning will mark it IN.`,
        token, // returns the short token back (clients use it for /process calls)
      },
    });
  } catch (err: unknown) {
    if ((err as Error).name === "JsonWebTokenError" || (err as Error).name === "TokenExpiredError") {
      return res.status(401).json({ success: false, error: "Invalid or tampered QR token" });
    }
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [4] POST /api/qr/process - toggle SCAN IN / SCAN OUT
// Body: { token, forceAction? }
//   forceAction: "SCAN_IN" | "SCAN_OUT" | undefined
//   - undefined → auto-toggle (original behavior, untouched)
//   - "SCAN_IN"  → always mark IN regardless of current state
//   - "SCAN_OUT" → always mark OUT (blocked if current_stock = 0)
// ═══════════════════════════════════════════════════════════════════════════
router.post("/process", async (req, res) => {
  try {
    const { token, forceAction, partstats = "reguler" } = req.body as {
      token: string;
      forceAction?: "SCAN_IN" | "SCAN_OUT";
      partstats?: "reguler" | "bcp";
    };

    if (!token) {
      return res.status(400).json({ success: false, error: "Token required" });
    }

    // Resolve token: if it's a short token (≤16 chars) look up the full JWT from DB;
    // otherwise treat it as a direct JWT (backward compatibility for older QR codes).
    let fullJwt = token;
    if (token.length <= 16) {
      let [rows] = await pool.query<RowDataPacket[]>(
        "SELECT token FROM qr_codes WHERE short_token = ? LIMIT 1",
        [token]
      );

      let actualToken = token;
      
      if (rows.length === 0) {
        let currentToken = token;
        let depth = 0;
        while (depth < 5) {
          const [aliasRows] = await pool.query<RowDataPacket[]>(
            "SELECT new_short_token FROM qr_aliases WHERE old_short_token = ? LIMIT 1",
            [currentToken]
          );
          if (aliasRows.length === 0) break;
          currentToken = aliasRows[0].new_short_token;
          depth++;
        }
        
        actualToken = currentToken;
        const [finalRows] = await pool.query<RowDataPacket[]>(
          "SELECT token FROM qr_codes WHERE short_token = ? LIMIT 1",
          [actualToken]
        );
        if (finalRows.length > 0) {
          rows = finalRows;
        }
      }

      if (rows.length === 0) {
        return res.status(404).json({ success: false, error: "QR tidak dikenali - token tidak ditemukan" });
      }
      fullJwt = rows[0].token;
    }

    const decoded = jwt.verify(fullJwt, SECRET_KEY) as {
      batchId: string;
      partName: string;
      factoryOrigin: string;
      value: number;
    };

    const { batchId, partName, factoryOrigin, value } = decoded;

    // ── QR Privilege Validation (NEW - do not modify code below this block) ───
    // Only applies to requests from station devices (JWT payload has device_id).
    // Logic:
    //   - No privilege rows for this station → open access, continue normally.
    //   - Has privilege rows → restricted; reject if this QR is not in the list.
    const requestUser = req.user as
      | { device_id?: number; type?: string; username?: string }
      | undefined;
    if (requestUser?.type === "station" && requestUser?.device_id) {
      const deviceId = requestUser.device_id;

      // Count privilege rows for this station (indexed query, O(1) with idx_station_id)
      const [countRows] = await pool.query<RowDataPacket[]>(
        "SELECT COUNT(*) as cnt FROM station_qr_privileges WHERE station_id = ?",
        [deviceId]
      );
      const totalPrivileges = Number(countRows[0]?.cnt ?? 0);

      // If station is in restricted mode, validate this specific QR
      if (totalPrivileges > 0) {
        // Look up the integer PK of this QR from batch_id
        const [qrLookup] = await pool.query<RowDataPacket[]>(
          "SELECT id FROM qr_codes WHERE batch_id = ? LIMIT 1",
          [batchId]
        );

        if (qrLookup.length > 0) {
          const qrDbId = qrLookup[0].id;
          const [allowedRows] = await pool.query<RowDataPacket[]>(
            "SELECT id FROM station_qr_privileges WHERE station_id = ? AND qr_id = ? LIMIT 1",
            [deviceId, qrDbId]
          );

          if (allowedRows.length === 0) {
            return res.status(403).json({
              success: false,
              error: "QR_NOT_ALLOWED",
            });
          }
        }
        // If QR not found in DB, allow the existing error handling to deal with it
      }
    }
    // ── End of Privilege Validation ───────────────────────────────────────────

    let action: "SCAN_IN" | "SCAN_OUT";
    let newStatus: "in" | "out";
    let message: string;

    if (forceAction === "SCAN_IN") {
      // ── Force IN: always mark IN ───────────────────────────────────────────
      sessionCache.set(batchId, {
        metadata: { batchId, partName, factoryOrigin, value },
        scannedInAt: new Date(),
      });
      action = "SCAN_IN";
      newStatus = "in";
      message = `${partName} Berhasil di SCAN IN (${value} unit).`;

    } else if (forceAction === "SCAN_OUT") {
      // ── Force OUT: blocked if stock = 0 ───────────────────────────────────
      // Check stock first
      const [stockRows] = await pool.query<RowDataPacket[]>(
        "SELECT current_stock FROM stock WHERE batch_id = ?",
        [batchId]
      );
      const currentStock = stockRows.length > 0 ? Number(stockRows[0].current_stock) : null;

      if (currentStock !== null && currentStock === 0) {
        return res.status(409).json({
          success: false,
          error: `Tidak bisa SCAN OUT - stok ${partName} sudah 0 unit.`,
        });
      }

      sessionCache.delete(batchId);
      action = "SCAN_OUT";
      newStatus = "out";
      message = `${partName} Berhasil di SCAN OUT (${value} unit).`;

    } else {
      // ── AUTO-TOGGLE (original logic - do not modify) ───────────────────────
      if (sessionCache.has(batchId)) {
        // Check stock before allowing OUT
        const [stockRows] = await pool.query<RowDataPacket[]>(
          "SELECT current_stock FROM stock WHERE batch_id = ?",
          [batchId]
        );
        const currentStock = stockRows.length > 0 ? Number(stockRows[0].current_stock) : null;

        if (currentStock !== null && currentStock === 0) {
          return res.status(409).json({
            success: false,
            error: `Tidak bisa SCAN OUT - stok ${partName} sudah 0 unit.`,
          });
        }

        // Currently IN → toggle to OUT (do not delete this shi, it's the fisrt prototype code that i build on the api, just make it unvisible do not overwrite or remove or else i'll under yo bed and slime yo shi ✌️ )
        sessionCache.delete(batchId);
        action = "SCAN_OUT";
        newStatus = "out";
        message = `${partName} sejumlah ${value} unit berhasil di SCAN OUT.`;
      } else {
        // Currently OUT → toggle to IN
        sessionCache.set(batchId, {
          metadata: { batchId, partName, factoryOrigin, value },
          scannedInAt: new Date(),
        });
        action = "SCAN_IN";
        newStatus = "in";
        message = `${partName} sejumlah ${value} unit masuk proses (SCAN IN).`;
      }
    }

    // Get matching qr_id from DB for record-keeping
    const [qrRows] = await pool.query<RowDataPacket[]>(
      "SELECT qr_id FROM qr_codes WHERE batch_id = ? LIMIT 1",
      [batchId]
    );
    const qrId = qrRows.length > 0 ? qrRows[0].qr_id : batchId;

    // Update qr_codes status in DB
    await pool.query("UPDATE qr_codes SET status = ? WHERE batch_id = ?", [newStatus, batchId]);

    // ── Update stock table ────────────────────────────────────────────────────
    await updateStock(batchId, action, value);

    const scannerUsername =
      requestUser?.username?.trim() ||
      (requestUser?.type === "station" ? "Scanner" : "unknown");

    await syncStockAnalyticsOnScan(partName, scannerUsername, batchId);

    // Log scan record
    await pool.query(
      "INSERT INTO scan_records (batch_id, qr_id, label, factory, action, scanned_by, partstats) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [batchId, qrId, partName, factoryOrigin, action, scannerUsername, partstats]
    );

    // Log task
    const taskId = await nextTaskId();
    const taskType = action === "SCAN_IN" ? "Scan In" : "Scan Out";
    await pool.query(
      "INSERT INTO tasks (task_id, title, type, status, user) VALUES (?, ?, ?, 'completed', ?)",
      [
        taskId,
        `${action === "SCAN_IN" ? "IN" : "OUT"}: ${partName} (×${value})`,
        taskType,
        scannerUsername,
      ]
    );

    res.json({
      success: true,
      data: {
        action,
        newStatus,
        message,
        batchId,
        partName,
        factoryOrigin,
        value,
      },
    });
  } catch (err: unknown) {
    if ((err as Error).name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, error: "Token QR Manipulasi / Invalid" });
    }
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [5] GET /api/qr/history - all scan events for monitoring
// ═══════════════════════════════════════════════════════════════════════════
router.get("/history", async (_req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT id, batch_id, qr_id, label, factory, action, scanned_by, created_at
       FROM scan_records
       ORDER BY created_at DESC
       LIMIT 100`
    );
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [6] GET /api/qr/stock - all stock rows with live data
// ═══════════════════════════════════════════════════════════════════════════
router.get("/stock", async (req, res) => {
  try {
    const search = (req.query.search as string) || "";
    const factory = (req.query.factory as string) || "";

    let query = "SELECT * FROM stock WHERE 1=1";
    const params: string[] = [];

    if (search) {
      query += " AND (part_name LIKE ? OR qr_id LIKE ?)";
      params.push(`%${search}%`, `%${search}%`);
    }
    if (factory && factory !== "All") {
      query += " AND factory = ?";
      params.push(factory);
    }

    query += " ORDER BY updated_at DESC";

    const [rows] = await pool.query<RowDataPacket[]>(query, params);
    res.json({ success: true, data: rows });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [7] GET /api/qr/stock/stats - summary stats for the stock dashboard
// ═══════════════════════════════════════════════════════════════════════════
router.get("/stock/stats", async (_req, res) => {
  try {
    const [totalRow] = await pool.query<RowDataPacket[]>(
      "SELECT SUM(current_stock) as totalUnits, COUNT(*) as skuCount FROM stock"
    );
    const [emptyRow] = await pool.query<RowDataPacket[]>(
      "SELECT COUNT(*) as emptyCount FROM stock WHERE current_stock = 0 AND trend != 'none'"
    );
    res.json({
      success: true,
      data: {
        totalUnits: totalRow[0]?.totalUnits ?? 0,
        skuCount: totalRow[0]?.skuCount ?? 0,
        emptyStock: emptyRow[0]?.emptyCount ?? 0,
      },
    });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [8] GET /api/qr/stock/factories - distinct factories for filter dropdown
// ═══════════════════════════════════════════════════════════════════════════
router.get("/stock/factories", async (_req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT DISTINCT factory FROM stock ORDER BY factory"
    );
    res.json({ success: true, data: rows.map((r) => r.factory) });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// [9] DELETE /api/qr/:id - Delete a QR code
// ═══════════════════════════════════════════════════════════════════════════
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if the QR has associated stock and delete it if current_stock == 0 or ignore if it has stock?
    // The prompt says just "delete qr". Let's just delete the qr_codes and stock rows for safety.
    const [qrRows] = await pool.query<RowDataPacket[]>("SELECT batch_id FROM qr_codes WHERE id = ?", [id]);
    
    if (qrRows.length > 0) {
      const batchId = qrRows[0].batch_id;
      // Delete from stock and scan_records and tasks? Let's just delete from qr_codes for now, cascading might be needed or we just delete it from qr_codes table.
      await pool.query("DELETE FROM qr_codes WHERE id = ?", [id]);
      await pool.query("DELETE FROM stock WHERE batch_id = ?", [batchId]);
    } else {
      await pool.query("DELETE FROM qr_codes WHERE id = ?", [id]);
    }

    res.json({ success: true, message: "QR Code berhasil dihapus" });
  } catch (err: unknown) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

export default router;
`````

## File: src/routes/__root.tsx
`````typescript
import { Suspense } from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/hooks/use-theme.tsx";
import { isTokenValid } from "@/lib/auth";
import { PageSkeleton } from "@/components/dashboard/PageSkeleton";

import appCss from "../styles.css?url";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 30s matches the explicit staleTime already on useMasterParts, useMesin,
      // useUsers, usePrivilegeStations - now applied globally as the baseline.
      staleTime: 30_000,
      // Keep cached data for 5 minutes so background revalidation can work
      // without re-fetching from scratch on every component remount.
      gcTime: 5 * 60 * 1000,
      // 3 retries (library default) causes ~15s hangs on network errors.
      // 1 retry is enough to survive a transient hiccup.
      retry: 1,
    },
  },
});

// ── Auth guard ─────────────────────────────────────────────────────────────
// Public paths: /login and / (landing page visible to everyone)
// All other routes: require valid token or redirect to /login
function AuthGuard({ children }: { children: React.ReactNode }) {
  // SSR/Hydration safety: before `window` exists we cannot read localStorage.
  // Render a neutral blank instead of leaking protected content.
  // Once the DOM exists, isTokenValid() is a pure synchronous localStorage read -
  // no async cycle needed, so we skip the mandatory spinner flash entirely.
  if (typeof window === "undefined") {
    return <div className="min-h-screen bg-background" />;
  }

  const pathname = window.location.pathname;
  const isPublic =
    pathname === "/" ||
    pathname === "/login" ||
    pathname.startsWith("/login/") ||
    // Station paths use their own separate session guard - not user auth
    pathname === "/station/login" ||
    pathname.startsWith("/station/dashboard");

  // Protected route + no valid token → redirect to /login, render nothing
  if (!isPublic && !isTokenValid()) {
    window.location.replace("/login");
    return null;
  }

  return <>{children}</>;
}


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-smooth hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sugity Creatives - Stock Scan Dashboard" },
      {
        name: "description",
        content: "Manage dan Buat QR stock codes dengan dashboard",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      // ASCII art signature - async, zero perf impact, removable by deleting
      // public/ascii-signature.js and this entry. SHA256 guarded by guardian.js
      { src: "/ascii-signature.js", async: true, defer: true },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthGuard>
          {/* Suspense catches async route chunks - shows layout-matched skeleton */}
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </AuthGuard>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
`````

## File: src/routes/master-data/create.tsx
`````typescript
import { useState, useRef, useCallback, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { ArrowLeft, Upload, X, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  useCreateMasterPart,
  useUpdateMasterPart,
  useMasterParts,
  type MasterPart,
} from "@/hooks/use-master-parts";
import { CategoryApi, ModelApi, CustomerApi, FactoryApi } from "@/hooks/use-master-data";
import { useMesin } from "@/hooks/use-mesin";
import { useGenerateQrCode, useRegenerateQrCode, useQrByPartId, type QrItem } from "@/hooks/use-qr-codes";
import { ChevronDown } from "lucide-react";

// Optional search param: editId for editing an existing part
const searchSchema = z.object({
  editId: z.number().optional(),
});

export const Route = createFileRoute("/master-data/create")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Buat Part Baru - Sugity Creatives" },
      { name: "description", content: "Tambah Master Part baru ke database" },
    ],
  }),
  component: CreateMasterPartPage,
});

// ── Label + input wrapper ─────────────────────────────────────────────────
function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-foreground">
        {label}
        {required && (
          <span className="ml-0.5 text-[#c05c30]"> *</span>
        )}
      </label>
      {children}
    </div>
  );
}

const INPUT =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:border-[#c05c30]/60 dark:bg-card-elevated";

const SELECT =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-smooth focus:border-[#c05c30]/60 appearance-none cursor-pointer dark:bg-card-elevated";

// ── Page ──────────────────────────────────────────────────────────────────
function CreateMasterPartPage() {
  const navigate = useNavigate();
  const { editId } = Route.useSearch();
  const isEdit = !!editId;

  const { data: allParts = [] } = useMasterParts();
  const editPart = isEdit ? allParts.find((p) => p.id === editId) : null;

  const createPart = useCreateMasterPart();
  const updatePart = useUpdateMasterPart();

  // Form state
  const [partNumber, setPartNumber] = useState("");
  const [partName, setPartName] = useState("");
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [customer, setCustomer] = useState("");
  const [factoryOrigin, setFactoryOrigin] = useState("");
  const [machine, setMachine] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");
  const [unitValue, setUnitValue] = useState("");

  // Stable lookup: fetch the QR linked to this master part by its integer ID.
  // Returns `null` (not an error) when the part has no QR yet.
  const { data: existingQrData, isLoading: isLoadingQrs } = useQrByPartId(isEdit ? editId : undefined);
  const latestQr: QrItem | null = (existingQrData as QrItem | null) ?? null;

  const generateQr = useGenerateQrCode();
  const regenerateQr = useRegenerateQrCode();

  const { data: mesinList = [] } = useMesin();
  const { data: categories = [] } = CategoryApi.useGetAll();
  const { data: models = [] } = ModelApi.useGetAll();
  const { data: customers = [] } = CustomerApi.useGetAll();
  const { data: factories = [] } = FactoryApi.useGetAll();
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Pre-fill for edit mode
  useEffect(() => {
    if (editPart) {
      setPartNumber(editPart.part_number);
      setPartName(editPart.part_name);
      setCategory(editPart.category ?? "");
      setModel(editPart.model ?? "");
      setCustomer(editPart.customer ?? "");
      setFactoryOrigin(editPart.factory_origin ?? "");
      setMachine(editPart.machine ?? "");
      setStatus(editPart.status);
      if (editPart.image_base64) {
        setImagePreview(editPart.image_base64);
        setImageBase64(editPart.image_base64);
      }
    }
  }, [editPart]);

  useEffect(() => {
    if (latestQr && !unitValue) {
      setUnitValue(String(latestQr.units || latestQr.qr_value || ""));
    }
  }, [latestQr]);

  // Image file handling
  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setImageError(null);

      const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        setImageError("Format tidak didukung. Gunakan jpeg, png, jpg, atau gif.");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setImageError("Ukuran file melebihi 2MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (ev) => {
        const base64 = ev.target?.result as string;
        setImageBase64(base64);
        setImagePreview(base64);
      };
      reader.readAsDataURL(file);
    },
    []
  );

  const removeImage = useCallback(() => {
    setImageBase64(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  // Submit
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitError(null);

      if (!unitValue || isNaN(Number(unitValue))) {
        setSubmitError("Unit Value harus berupa angka valid.");
        return;
      }

      const payload = {
        partNumber: partNumber.trim(),
        partName: partName.trim(),
        category: category.trim(),
        model: model.trim(),
        customer: customer.trim(),
        factoryOrigin: factoryOrigin.trim(),
        machine: machine.trim() || undefined,
        qtyPerPallet: 1,
        unit: "PCS",
        status,
        imageBase64,
      };

      try {
        if (isEdit && editId) {
          // Guard: editId must resolve to a known master part
          if (!editPart) {
            setSubmitError("Part tidak ditemukan - ID tidak valid.");
            return;
          }

          // 1. Update Master Part
          await updatePart.mutateAsync({ id: editId, ...payload });

          // 2a. If an existing QR exists → regenerate it (preserves batch_id/stock)
          if (latestQr && latestQr.short_token) {
            await regenerateQr.mutateAsync({
              oldShortToken: latestQr.short_token,
              partName: payload.partName,
              factoryOrigin: payload.factoryOrigin,
              value: Number(unitValue),
              machineOrigin: payload.machine,
              partId: editId,
            });
          } else {
            // 2b. No QR yet (new part or first-time) - generate fresh
            await generateQr.mutateAsync({
              partName: payload.partName,
              factoryOrigin: payload.factoryOrigin,
              value: Number(unitValue),
              machineOrigin: payload.machine,
              partId: editId,
            });
          }

          setSuccess(true);
          setTimeout(() => navigate({ to: "/master-data" }), 900);
        } else {
          // 1. Create Master Part - get the new ID from the response
          const createdPart: MasterPart = await createPart.mutateAsync(payload);

          // 2. Generate QR linked to the new part ID
          await generateQr.mutateAsync({
            partName: payload.partName,
            factoryOrigin: payload.factoryOrigin,
            value: Number(unitValue),
            machineOrigin: payload.machine,
            partId: createdPart.id,
          });

          setSuccess(true);
          setTimeout(() => navigate({ to: "/master-data" }), 900);
        }
      } catch (err: unknown) {
        setSubmitError((err as Error).message);
      }
    },
    [
      partNumber, partName, category, model, customer, factoryOrigin, machine,
      status, imageBase64, unitValue,
      isEdit, editId, createPart, updatePart, generateQr, regenerateQr, latestQr, navigate,
    ]
  );

  const isPending =
    createPart.isPending ||
    updatePart.isPending ||
    generateQr.isPending ||
    regenerateQr.isPending ||
    (isEdit && isLoadingQrs);

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-3xl animate-in fade-in duration-300">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {isEdit ? "Edit Part" : "Tambah Part"}
            </span>
            <h1 className="mt-0.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {isEdit ? "Edit Master Part" : "Add New Master Part"}
            </h1>
          </div>
          <Link
            to="/master-data"
            className="text-sm font-semibold text-[#c05c30] transition-smooth hover:opacity-80"
          >
            Back to List
          </Link>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Part Number */}
            <Field label="Part Number" required>
              <input
                id="input-part-number"
                type="text"
                value={partNumber}
                onChange={(e) => setPartNumber(e.target.value)}
                placeholder="e.g. PN-12345"
                required
                className={INPUT}
              />
            </Field>

            {/* Part Name */}
            <Field label="Part Name" required>
              <input
                id="input-part-name"
                type="text"
                value={partName}
                onChange={(e) => setPartName(e.target.value)}
                placeholder="e.g. Resin Part A"
                required
                className={INPUT}
              />
            </Field>

            {/* Category */}
            <Field label="Category">
              <div className="relative">
                <select
                  id="input-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={SELECT}
                >
                  <option value="" disabled>Pilih Kategori</option>
                  {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>

            {/* Model */}
            <Field label="Model">
              <div className="relative">
                <select
                  id="input-model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className={SELECT}
                >
                  <option value="" disabled>Pilih Model</option>
                  {models.map(m => <option key={m.id} value={m.name}>{m.name}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>

            {/* Customer */}
            <Field label="Customer">
              <div className="relative">
                <select
                  id="input-customer"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  className={SELECT}
                >
                  <option value="" disabled>Pilih Customer</option>
                  {customers.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>

            {/* Machine Origin */}
            <Field label="Homelane Machine">
              <div className="relative">
                <select
                  id="input-machine-origin"
                  value={machine}
                  onChange={(e) => setMachine(e.target.value)}
                  className={SELECT}
                >
                  <option value="">- Tidak ada -</option>
                  {mesinList.map((m) => (
                    <option key={m.id} value={m.machine_code}>
                      {m.machine_code} - {m.machine_name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>

            {/* Factory Origin */}
            <Field label="Homelane Factory">
              <div className="relative">
                <select
                  id="input-factory"
                  value={factoryOrigin}
                  onChange={(e) => setFactoryOrigin(e.target.value)}
                  className={SELECT}
                >
                  <option value="" disabled>Pilih Factory</option>
                  {factories.map(f => <option key={f.id} value={f.name}>{f.name}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>

            {/* Status */}
            <Field label="Status" required>
              <div className="relative">
                <select
                  id="input-status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as "active" | "inactive")}
                  className={SELECT}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  ▾
                </div>
              </div>
            </Field>

            {/* Unit Value (QR Value) */}
            <Field label="Unit Value (Stock per Batch)" required>
              <input
                id="input-unit-value"
                type="number"
                min="1"
                value={unitValue}
                onChange={(e) => setUnitValue(e.target.value)}
                placeholder="e.g. 100"
                required
                className={INPUT}
              />
            </Field>

          </div>

          {/* Part Image - full width */}
          <div className="mt-5">
            <Field label="Part Image">
              {imagePreview ? (
                <div className="relative inline-block">
                  <img
                    src={imagePreview}
                    alt="Part preview"
                    className="h-32 w-32 rounded-xl border border-border object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-white shadow-md transition-smooth hover:bg-red-600"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="file-part-image"
                    className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl border border-border bg-card-elevated px-4 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-accent"
                  >
                    <Upload className="h-4 w-4" />
                    Browse…
                  </label>
                  <input
                    id="file-part-image"
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/jpg,image/gif"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <p className="text-[11.5px] text-muted-foreground">
                    Format: jpeg, png, jpg, gif (Max 2MB)
                  </p>
                </div>
              )}
              {imageError && (
                <div className="mt-1 flex items-center gap-1.5 text-xs text-destructive">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {imageError}
                </div>
              )}
            </Field>
          </div>

          {/* Error message */}
          {submitError && (
            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 text-sm text-destructive">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {submitError}
            </div>
          )}

          {/* Success message */}
          {success && (
            <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              Part berhasil {isEdit ? "diperbarui" : "disimpan"}! Mengalihkan…
            </div>
          )}

          {/* Actions */}
          <div className="mt-7 flex justify-end gap-3">
            <Link
              to="/master-data"
              className="inline-flex items-center rounded-xl border border-border bg-card-elevated px-5 py-2.5 text-sm font-semibold text-foreground transition-smooth hover:bg-accent"
            >
              Cancel
            </Link>
            <button
              id="btn-save-part"
              type="submit"
              disabled={isPending || success}
              className="inline-flex items-center gap-2 rounded-xl bg-[#c05c30] px-6 py-2.5 text-sm font-bold text-white transition-smooth hover:brightness-110 disabled:opacity-50"
            >
              {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              {isEdit ? "Update Part" : "Save Part"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
`````

## File: src/routes/tv.tsx
`````typescript
import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from "recharts";
import { motion } from "framer-motion";
import { useTvDashboard } from "@/hooks/use-tv-dashboard";
import type { TvMachine } from "@/hooks/use-tv-dashboard";
import { MinimumStockGrid } from "@/components/mesin/MinimumStockGrid";
import "./tv.css";
import { NONAME } from "dns";

// ─── PRIORITY LOGIC (plan.md) ──────────────────────────────────────────────
// Single source of truth for status derivation - never read raw status strings.
// Thresholds: < 3.0 → critical | 3.0–3.99 → warning | ≥ 4.0 → safe
function getStatus(jam: number): "critical" | "warning" | "safe" {
  if (jam < 3.0) return "critical";
  if (jam < 4.0) return "warning";
  return "safe";
}

// Bug #1 fix: compute the true minimum JAM per machine by excluding JAM === 0
// (which means "no data / not started"). Falls back to 0 only if ALL parts are 0.
function computeMinJam(partRows: TvMachine["partRows"]): number {
  const active = partRows.filter((r) => r.jam !== 0);
  if (active.length === 0) return 0;
  return Math.min(...active.map((r) => r.jam));
}

// Rewrite each machine's stokJam + cardStatus using the corrected minJAM logic.
function fixMachineStatuses(machines: TvMachine[]): TvMachine[] {
  return machines.map((m) => {
    if (!m.isActive) return m; // inactive machines keep their "none" card status
    const minJam = computeMinJam(m.partRows ?? []);
    const cardStatus = getStatus(minJam);
    return { ...m, stokJam: minJam, stockJam: minJam, cardStatus };
  });
}

const searchSchema = z.object({
  fac: z.string().optional().catch(""),
  shift: z.enum(["A", "B"]).optional().catch("A"),
  theme: z.enum(["default", "dark", "white"]).optional().catch("default"),
});

export const Route = createFileRoute("/tv")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "STOCK MONITORING - TV" },
      { name: "description", content: "Factory stock monitoring display" },
    ],
  }),
  component: TvPage,
});

function resolveTheme(
  themeParam: string
): "dark" | "light" {
  if (themeParam === "white") return "light";
  if (themeParam === "dark") return "dark";
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "dark";
}

const STATUS_COLORS = {
  safe: "#16A34A",
  critical: "#F13333",
  warning: "#F1CB33",
  none: "#F1CB33", // fallback
};

// ─── SHOW ALL sort order (critical → warning → safe) ─────────────────────────
// Defined once at module level - never inside a render or effect loop.
const STATUS_SORT_ORDER: Record<string, number> = {
  critical: 0,
  warning:  1,
  safe:     2,
};

const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  const { status, value, jam } = payload;
  const color = STATUS_COLORS[status as keyof typeof STATUS_COLORS] || STATUS_COLORS.warning;
  const rx = 6;

  if (height <= 0) return null;

  const safeRx = Math.min(rx, width / 2, height / 2);

  const getPath = (currentY: number, currentHeight: number) => {
    return `M${x},${currentY + currentHeight} L${x},${currentY + safeRx} Q${x},${currentY} ${x + safeRx},${currentY} L${x + width - safeRx},${currentY} Q${x + width},${currentY} ${x + width},${currentY + safeRx} L${x + width},${currentY + currentHeight} Z`;
  };

  const startPath = getPath(y + height, 0);
  const endPath = getPath(y, height);

  const formattedJam = `${Number(jam).toFixed(1).replace('.', ',')} HR`;
  // Hasil: "1,2 HR"
  const badgeY = Math.max(y, 22);

  return (
    <g>
      <g style={{ filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.4))" }}>
        <motion.path
          initial={{ d: startPath }}
          animate={{ d: endPath }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          fill={color}
          fillOpacity={0.65}
          stroke="#FFFFFF"
          strokeWidth={1.5}
        />
      </g>

      {/* Stock text at the bottom */}
      <motion.text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        x={x + width / 2}
        y={y + height - 15}
        fill="#FFFFFF"
        fontSize={12}
        fontWeight={700}
        textAnchor="middle"
      >
        {`${value} PCs`}
      </motion.text>

      {/* Hour Pill */}
      {jam > 0 && (
        <motion.g
          initial={{ opacity: 0, y: y + 20 }}
          animate={{ opacity: 1, y: badgeY }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          {/* Hour Pill */}
          <rect
            x={x + width / 2 - 20}
            y={-22}
            width={40}
            height={20}
            rx={4}
            fill={color}
            stroke="#FFFFFF"
            strokeWidth={1}
          />
          <text
            x={x + width / 2}
            y={-12}
            dy="0.3em"
            fill={status === "warning" ? "#000000" : "#FFFFFF"}
            fontSize={11}
            fontWeight={700}
            textAnchor="middle"
          >
            {formattedJam}
          </text>
        </motion.g>
      )}
    </g>
  );
};

// ─── PAGINATION CONSTANTS ────────────────────────────────────────────────────
const PAGE_SIZE = 15;
const CYCLE_INTERVAL = 12000; // 12 s between page flips
const TRANSITION_DURATION = 500; // ms - must match CSS transition duration

function TvPage() {
  const { fac = "", shift = "A", theme = "default" } = Route.useSearch();
  const [clock, setClock] = useState("");
  // Change #3: expand/collapse state for safe rows in PRIORITY PRODUCTION
  const [isExpanded, setIsExpanded] = useState(false);
  const visualTheme = resolveTheme(theme);

  // ── Pagination state (animation-only, additive) ───────────────────────────
  const [currentPage, setCurrentPage] = useState(0);
  const [activeSlot, setActiveSlot] = useState<'A' | 'B'>('A');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { data, isLoading } = useTvDashboard(fac, shift, !!fac);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(
        now.toLocaleString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) + " WIB"
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const gaugeArc = useMemo(() => {
    // Determine the percentage based on the number of non-critical machines over total active machines
    const machines = data?.machines ?? [];
    const activeMachines = machines.filter(m => m.isActive);
    let pct = 0;

    if (activeMachines.length > 0) {
      // Fix #1 guarantees that cardStatus reflects the real minimum JAM for each machine
      // and getStatus() has set it properly. So we just count safe/warning vs critical.
      // Availability = percentage of active machines that are NOT critical.
      // (Using the newly fixed fixMachineStatuses function logic)
      const fixedMachines = fixMachineStatuses(machines);
      const nonCriticalCount = fixedMachines.filter(
        m => m.isActive && m.cardStatus !== "critical"
      ).length;

      pct = Math.round((nonCriticalCount / activeMachines.length) * 100);
    }

    // Normalize percentage (clamp 0-100)
    pct = Math.min(100, Math.max(0, pct));

    const circumference = 339.3;
    const offset = circumference - (pct / 100) * circumference;
    return { offset, pct };
  }, [data?.machines]);

  const chartPoints = useMemo(() => {
    if (!data) return [];
    const points = data.chartLabels.map((label, i) => {
      const val = data.chartData[i] ?? 0;
      const jam = data.chartStokJam?.[i] ?? 0;
      const status = data.chartStatus?.[i] ?? "warning";
      // DEBUG: verify per-bar jam values - remove after confirmation
      console.log(`[TV Chart] bar[${i}] label="${label}" value=${val} jam=${jam} status=${status}`);
      return {
        label,
        value: val,
        displayValue: val,
        jam,
        status,
      };
    });
    return points;
  }, [data]);

  const yAxisConfig = useMemo(() => {
    if (!chartPoints || chartPoints.length === 0) {
      return { domain: [0, 5], ticks: [0, 5] };
    }
    const maxValue = Math.max(...chartPoints.map((d) => d.displayValue));
    const yMax = Math.max(5, Math.ceil(maxValue / 5) * 5);
    const ticks = Array.from({ length: Math.floor(yMax / 5) + 1 }, (_, i) => i * 5);
    return { domain: [0, yMax] as [number, number], ticks };
  }, [chartPoints]);

  // KPI counts: derived from every individual PRIORITY PRODUCTION row.
  // Each row's ST is computed via getStatus(row.stokJam) - never from the
  // raw status string. Safe rows and JAM=0 rows are all included.
  const counts = useMemo(() => {
    const priorities = data?.priorities ?? [];
    if (priorities.length === 0) return { critical: 0, warning: 0, safe: 0 };

    let critical = 0, warning = 0, safe = 0;
    for (const p of priorities) {
      const st = getStatus(p.stokJam);
      if (st === "critical") critical++;
      else if (st === "warning") warning++;
      else safe++;
    }

    return { critical, warning, safe };
  }, [data?.priorities]);

  // ── Derived pagination data (additive) ───────────────────────────────────
  const priorityData = data?.priorities ?? [];

  // When Show All is active, sort the full list by status priority
  // (critical → warning → safe). Uses a spread copy - never mutates the
  // original reactive array. When collapsed, no sort is applied.
  const sortedPriorityData = isExpanded
    ? [...priorityData].sort(
        (a, b) =>
          (STATUS_SORT_ORDER[getStatus(a.stokJam)] ?? 99) -
          (STATUS_SORT_ORDER[getStatus(b.stokJam)] ?? 99)
      )
    : priorityData;

  const totalPages = Math.max(1, Math.ceil(sortedPriorityData.length / PAGE_SIZE));

  const getPageData = (pageIndex: number) =>
    sortedPriorityData.slice(pageIndex * PAGE_SIZE, (pageIndex + 1) * PAGE_SIZE);

  const nextPage = (currentPage + 1) % totalPages;
  const slotAData = activeSlot === 'A' ? getPageData(currentPage) : getPageData(nextPage);
  const slotBData = activeSlot === 'B' ? getPageData(currentPage) : getPageData(nextPage);

  // ── Auto-cycle timer (additive, does NOT modify existing useEffects) ───────
  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(prev => (prev + 1) % totalPages);
        setActiveSlot(prev => prev === 'A' ? 'B' : 'A');
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }, CYCLE_INTERVAL);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <div
      className="tv-page"
      data-theme={visualTheme === "dark" ? "dark" : "light"}
    >
      <div className="tv-shell">
        <header className="tv-header">
          <div className="tv-header-title">STOCK MONITORING</div>
          <div className="tv-header-time">{clock}</div>
          <div className="tv-header-right">
            {fac && (
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {fac} · Shift {shift}
              </span>
            )}
            <div className="tv-live-badge">
              <div className="tv-live-dot" />
              LIVE
            </div>
            <button
              type="button"
              className="tv-btn"
              onClick={() => document.documentElement.requestFullscreen()}
            >
              TV MODE
            </button>
          </div>
        </header>

        <main className="tv-main">
          <div className="tv-left">
            <section className="tv-top-row">
              <div className="tv-gauge-wrap">
                <svg viewBox="0 0 140 140" width="140" height="140">
                  <circle
                    cx="70"
                    cy="70"
                    r="54"
                    stroke="var(--color-bg-border)"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="70"
                    cy="70"
                    r="54"
                    stroke="var(--color-safe)"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="339.3"
                    strokeDashoffset={gaugeArc.offset}
                    strokeLinecap="round"
                    transform="rotate(-90 70 70)"
                    style={{ transition: "stroke-dashoffset 800ms ease" }}
                  />
                </svg>
                <div className="tv-gauge-text">
                  <div className="tv-gauge-val">
                    {isLoading ? "-" : `${gaugeArc.pct}%`}
                  </div>
                  <div className="tv-gauge-label">AVAILABILITY</div>
                </div>
              </div>

              <div className="tv-kpi-row">
                <div className="tv-kpi-card critical">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--color-critical)",
                      textTransform: "uppercase",
                    }}
                  >
                    Critical{" "}
                    <span style={{ color: "var(--color-critical-text)" }}>
                      &lt; 3JAM
                    </span>
                  </div>
                  <div className="tv-kpi-number">{counts.critical}</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    PARTS
                  </div>
                </div>
                <div className="tv-kpi-card warning">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--color-warning)",
                      textTransform: "uppercase",
                    }}
                  >
                    Warning{" "}
                    <span style={{ color: "var(--color-warning-text)" }}>
                      3–4JAM
                    </span>
                  </div>
                  <div className="tv-kpi-number">{counts.warning}</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    PARTS
                  </div>
                </div>
                <div className="tv-kpi-card safe">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--color-safe)",
                      textTransform: "uppercase",
                    }}
                  >
                    Safe{" "}
                    <span style={{ color: "var(--color-safe-text)" }}>
                      &gt; 4JAM
                    </span>
                  </div>
                  <div className="tv-kpi-number">{counts.safe}</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    PARTS
                  </div>
                </div>
              </div>
            </section>

            <div className="tv-section-label">Minimum Stock / Machine</div>
            {isLoading && !data ? (
              <p style={{ color: "var(--color-text-muted)", fontSize: 13 }}>
                Loading…
              </p>
            ) : (
              <MinimumStockGrid
                // Bug #1 fix: pass machines with corrected stokJam + cardStatus
                machines={fixMachineStatuses(data?.machines ?? [])}
                showPartTable
              />
            )}

            <div className="tv-section-label" style={{ marginTop: 4 }}>
              Ratio Stock Part by Part
            </div>
            <section className="tv-chart-wrap">
              {chartPoints.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%" style={{ overflow: "visible" }}>
                  <BarChart
                    data={chartPoints}
                    margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
                    style={{ overflow: "visible" }}
                  >
                    <CartesianGrid
                      strokeDasharray="4 4"
                      stroke={visualTheme === "dark" ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.1)"}
                      strokeWidth={visualTheme === "dark" ? 1 : undefined}
                      horizontal={true}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="label"
                      tick={{ fill: "var(--color-text-muted)", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      domain={yAxisConfig.domain}
                      ticks={yAxisConfig.ticks}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "var(--color-text-muted)", fontSize: 10 }}
                    />
                    <Tooltip
                      formatter={(val: any, name: any, props: any) => {
                        const realVal = props.payload?.value ?? val;
                        return [realVal, "value"];
                      }}
                      contentStyle={{
                        background: "var(--color-bg-surface)",
                        border: "1px solid var(--color-bg-border)",
                        borderRadius: 8,
                        fontSize: 12,
                      }}
                    />
                    <Bar
                      dataKey="displayValue"
                      shape={<CustomBar />}
                      isAnimationActive={false}
                    />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: 13,
                    padding: 16,
                  }}
                >
                  No stock data for this factory.
                </p>
              )}
            </section>
          </div>

          <aside className="tv-right">
            <div className="tv-panel-header">
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--color-text-secondary)",
                  letterSpacing: "0.1em",
                }}
              >
                PRIORITY PRODUCTION
              </span>
              <span
                style={{
                  background: "var(--color-warning-bg)",
                  border: "1px solid var(--color-warning-dim)",
                  borderRadius: 4,
                  padding: "3px 8px",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "var(--color-warning)",
                }}
              >
                &lt; 4H
              </span>
            </div>

            {priorityData.length > 0 ? (
              <>
                {/* ── Cycle progress bar - only when multi-page ─────────── */}
                {totalPages > 1 && (
                  <div className="tv-priority-progress">
                    <div
                      key={`${currentPage}-${activeSlot}`}
                      className="tv-priority-progress-fill"
                      style={{ animationDuration: `${CYCLE_INTERVAL}ms` }}
                    />
                  </div>
                )}

                {/* ── A/B crossfade slot wrapper ────────────────────────── */}
                <div style={{ position: 'relative' }}>

                  {/* SLOT A */}
                  <div
                    className={`priority-slot ${activeSlot === 'A' ? 'slot-active' : 'slot-inactive'
                      }${isTransitioning ? ' slot-transitioning' : ''}`}
                    style={{
                      position: activeSlot === 'A' ? 'relative' : 'absolute',
                      top: 0, left: 0, right: 0,
                    }}
                  >
                    <table className="tv-priority-table">
                      <thead>
                        <tr>
                          <th>Machine</th>
                          <th>Part</th>
                          <th style={{ display: 'none' }}>PN</th>
                          <th>Rasio</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {slotAData.map((p, i) => {
                          const rowStatus = getStatus(p.stokJam);
                          const stColor = rowStatus === 'critical'
                            ? 'var(--color-critical)'
                            : rowStatus === 'warning'
                              ? 'var(--color-warning)'
                              : 'var(--color-safe)';
                          const isSafeRow = rowStatus === 'safe';
                          return (
                            <tr
                              key={`a-${p.machine}-${i}`}
                              className={`priority-row${isSafeRow ? ' tv-row-safe' : ''}`}
                              style={isSafeRow && !isExpanded ? { display: 'none' } : undefined}
                            >
                              <td>{p.machine}</td>
                              <td>{p.partName}</td>
                              <td style={{ display: 'none' }}>{p.partNumber}</td>
                              <td>{p.stokJam.toFixed(1)}</td>
                              <td style={{ color: stColor, fontWeight: 700, textTransform: 'uppercase' }}>
                                {rowStatus}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* SLOT B - identical structure */}
                  <div
                    className={`priority-slot ${activeSlot === 'B' ? 'slot-active' : 'slot-inactive'
                      }${isTransitioning ? ' slot-transitioning' : ''}`}
                    style={{
                      position: activeSlot === 'B' ? 'relative' : 'absolute',
                      top: 0, left: 0, right: 0,
                    }}
                  >
                    <table className="tv-priority-table">
                      <thead>
                        <tr>
                          <th>Machine</th>
                          <th>Part</th>
                          <th style={{ display: 'none' }}>PN</th>
                          <th>Rasio</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {slotBData.map((p, i) => {
                          const rowStatus = getStatus(p.stokJam);
                          const stColor = rowStatus === 'critical'
                            ? 'var(--color-critical)'
                            : rowStatus === 'warning'
                              ? 'var(--color-warning)'
                              : 'var(--color-safe)';
                          const isSafeRow = rowStatus === 'safe';
                          return (
                            <tr
                              key={`b-${p.machine}-${i}`}
                              className={`priority-row${isSafeRow ? ' tv-row-safe' : ''}`}
                              style={isSafeRow && !isExpanded ? { display: 'none' } : undefined}
                            >
                              <td>{p.machine}</td>
                              <td>{p.partName}</td>
                              <td style={{ display: 'none' }}>{p.partNumber}</td>
                              <td>{p.stokJam.toFixed(1)}</td>
                              <td style={{ color: stColor, fontWeight: 700, textTransform: 'uppercase' }}>
                                {rowStatus}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                </div>{/* end A/B wrapper */}

                {/* ── Page indicator dots - only when multi-page ────────── */}
                {totalPages > 1 && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 0 4px',
                  }}>
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: idx === currentPage ? '16px' : '6px',
                          height: '6px',
                          borderRadius: '3px',
                          backgroundColor: idx === currentPage
                            ? '#ffffff'
                            : 'rgba(255,255,255,0.25)',
                          transition: 'all 400ms ease',
                        }}
                      />
                    ))}
                    <span style={{
                      marginLeft: 4,
                      fontSize: 9,
                      color: 'rgba(255,255,255,0.3)',
                      letterSpacing: '0.06em',
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      {currentPage + 1}/{totalPages}
                    </span>
                  </div>
                )}
              </>
            ) : (
              <div className="tv-empty">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-bg-border)"
                  strokeWidth="1.5"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                </svg>
                <div>No active priorities</div>
              </div>
            )}

            {/* Change #3: Show All / Show Less toggle - only toggles safe row visibility */}
            {priorityData.length > 0 && (
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                style={{
                  marginTop: 10,
                  width: '100%',
                  padding: '5px 0',
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  background: 'transparent',
                  border: '1px solid var(--color-bg-border)',
                  borderRadius: 4,
                  cursor: 'pointer',
                }}
              >
                {isExpanded ? 'Show Less' : 'Show All'}
              </button>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
}
`````

## File: package.json
`````json
{
  "name": "produksi_scanner",
  "private": true,
  "sideEffects": false,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "dev:all": "concurrently \"npm run dev\" \"node guardian.js\"",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write .",
    "server": "tsx server/index.ts",
    "migrate": "tsx server/migrate.ts",
    "migrate:big-update": "tsx server/migrate-big-update.ts",
    "migrate:v2": "tsx server/migrate-v2.ts"
  },
  "dependencies": {
    "@cloudflare/vite-plugin": "^1.25.5",
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/vite": "^4.2.1",
    "@tanstack/react-query": "^5.83.0",
    "@tanstack/react-router": "^1.168.0",
    "@tanstack/react-start": "^1.167.14",
    "@tanstack/router-plugin": "^1.167.10",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "cors": "^2.8.6",
    "date-fns": "^4.1.0",
    "dotenv": "^17.4.2",
    "embla-carousel-react": "^8.6.0",
    "express": "^5.2.1",
    "framer-motion": "^12.40.0",
    "howler": "^2.2.4",
    "html5-qrcode": "^2.3.8",
    "input-otp": "^1.4.2",
    "jsonwebtoken": "^9.0.3",
    "lucide-react": "^0.575.0",
    "mysql2": "^3.22.1",
    "qrcode": "^1.5.4",
    "react": "^19.2.0",
    "react-day-picker": "^9.14.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.71.2",
    "react-resizable-panels": "^4.6.5",
    "react-sounds": "^1.0.30",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tailwindcss": "^4.2.1",
    "tw-animate-css": "^1.3.4",
    "vaul": "^1.1.2",
    "vite-tsconfig-paths": "^6.0.2",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@lovable.dev/vite-tanstack-config": "^1.4.0",
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/node": "^22.16.5",
    "@types/qrcode": "^1.5.6",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.0.4",
    "concurrently": "^9.2.1",
    "eslint": "^9.32.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "prettier": "^3.7.3",
    "tsx": "^4.21.0",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.56.1",
    "vite": "^7.3.2"
  }
}
`````

## File: src/routes/all-qr.tsx
`````typescript
import { useCallback, useState, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Download, ExternalLink, QrCode, Search } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useQrCodes, useDeleteQrCode, type QrItem } from "@/hooks/use-qr-codes";
import { useMasterParts } from "@/hooks/use-master-parts";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const Route = createFileRoute("/all-qr")({
  head: () => ({
    meta: [
      { title: "Semua QR Codes - Sugity Creatives" },
      { name: "description", content: "Complete archive of created QR stock codes." },
    ],
  }),
  component: AllQrPage,
});

// ── helpers ──────────────────────────────────────────────────────────────────

function downloadQr(item: QrItem) {
  if (!item.qr_image_base64) return;
  const link = document.createElement("a");
  link.href = item.qr_image_base64;
  link.download = `${item.qr_id}-${item.part_name.replace(/\s+/g, "-")}.png`;
  link.click();
}

// ── page ─────────────────────────────────────────────────────────────────────

function AllQrPage() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selectedQrId, setSelectedQrId] = useState<number | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<QrItem | null>(null);
  const navigate = useNavigate();

  const { data: filtered = [], isLoading } = useQrCodes(query);
  const deleteQr = useDeleteQrCode();
  const { data: masterParts = [] } = useMasterParts();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".qr-wrapper")) {
        setSelectedQrId(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const confirmDelete = () => {
    if (deleteTarget) {
      deleteQr.mutate(deleteTarget.id, {
        onSuccess: () => {
          setDeleteTarget(null);
          setSelectedQrId(null);
        }
      });
    }
  };

  const handleOpen = useCallback(
    (item: QrItem) => {
      if (!item.qr_image_base64) return;
      const part = masterParts.find(p => p.part_name === item.part_name);
      navigate({
        to: "/qr-viewer",
        search: { 
          img: item.qr_image_base64, 
          label: item.part_name,
          partname: item.part_name,
          partnum: part?.part_number || "",
          partmodel: part?.model || "",
          machineOrigin: item.machine_origin || part?.machine || "",
          factoryOrigin: item.factory || "",
          updatedAt: item.updated_at || "",
        },
      });
    },
    [navigate, masterParts]
  );

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">
        <Link
          to="/"
          className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-smooth hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Stock Scan
        </Link>

        <div className="mb-6 flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Archive
          </span>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Semua Kode QR</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Koleksi lengkap kode QR yang dibuat di seluruh pabrik.
          </p>
        </div>

        <section className="rounded-3xl border border-border-surface bg-surface-section p-5 sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="search-qr"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari ID atau Part…"
                className="h-10 w-full rounded-full border border-transparent bg-card-elevated pl-9 pr-4 text-sm outline-none transition-smooth focus:border-primary/60"
              />
            </div>
            <div className="inline-flex rounded-full bg-card-elevated p-1 text-xs">
              {(["grid", "list"] as const).map((v) => (
                <button
                  key={v}
                  id={`view-${v}`}
                  onClick={() => setView(v)}
                  className={`rounded-full px-4 py-1.5 capitalize transition-smooth ${view === v
                    ? "bg-[#C05C30] text-white"
                    : "text-muted-foreground"
                    }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* ── Grid view ────────────────────────────────────────────────── */}
          {view === "grid" ? (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {isLoading ? (
                Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border-surface bg-card p-4 animate-pulse"
                  >
                    {/* QR image placeholder */}
                    <div className="aspect-square w-full rounded-xl bg-card-elevated" />
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="h-2.5 w-20 rounded-full bg-card-elevated" />
                        <div className="h-4 w-8 rounded-full bg-card-elevated" />
                      </div>
                      <div className="h-3.5 w-3/4 rounded-full bg-card-elevated" />
                      <div className="h-2.5 w-1/2 rounded-full bg-card-elevated/70" />
                      <div className="h-2 w-16 rounded-full bg-card-elevated/50" />
                    </div>
                    <div className="mt-3 flex gap-2">
                      <div className="h-8 flex-1 rounded-full bg-card-elevated" />
                      <div className="h-8 w-8 rounded-full bg-card-elevated" />
                    </div>
                  </div>
                ))
              ) : filtered.map((item) => {
                const formattedDate = new Date(item.created_at).toLocaleDateString("en-CA");
                const hasQrImage = !!item.qr_image_base64;

                return (
                  <div
                    key={item.id}
                    className="group rounded-2xl border border-border-surface bg-card p-4 transition-smooth hover:bg-card"
                  >
                    {/* QR display */}
                    <div 
                      className="qr-wrapper flex aspect-square items-center justify-center rounded-xl overflow-hidden bg-white relative cursor-pointer"
                      onClick={() => setSelectedQrId(item.id)}
                    >
                      {hasQrImage ? (
                        <img
                          src={item.qr_image_base64!}
                          alt={`QR for ${item.part_name}`}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-foreground/90 text-background">
                          <QrCode className="h-16 w-16" strokeWidth={1.5} />
                        </div>
                      )}

                      {selectedQrId === item.id && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center animate-in fade-in duration-200">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteTarget(item);
                            }}
                            className="rounded-full bg-red-500 p-3 text-white shadow-[0_4px_14px_rgba(239,68,68,0.4)] transition-smooth hover:bg-red-600 hover:scale-110"
                            aria-label="Delete QR"
                          >
                            <Trash2 className="h-6 w-6" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                          {item.qr_id}
                        </div>
                        {item.status && (
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${item.status === "in"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-red-500/10 text-red-400"
                              }`}
                          >
                            {item.status}
                          </span>
                        )}
                      </div>
                      <div className="mt-0.5 truncate text-sm font-semibold text-foreground">
                        {item.part_name}
                      </div>
                      <div className="mt-0.5 truncate text-xs text-muted-foreground">
                        {item.factory} · {item.units} units
                      </div>
                      <div className="mt-0.5 text-[10px] text-muted-foreground/60">
                        {formattedDate}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <button
                        id={`btn-download-${item.qr_id}`}
                        onClick={() => downloadQr(item)}
                        disabled={!hasQrImage}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-smooth hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
                        title={hasQrImage ? "Download QR image" : "No QR image available"}
                      >
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </button>
                      <button
                        id={`btn-open-${item.qr_id}`}
                        onClick={() => handleOpen(item)}
                        disabled={!hasQrImage}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-smooth hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Open full-screen QR"
                        title={hasQrImage ? "Open full-screen" : "No QR image available"}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
              {!isLoading && filtered.length === 0 && (
                <div className="col-span-full py-16 text-center text-sm text-muted-foreground">
                  No QR codes match your search.
                </div>
              )}
            </div>

          ) : (
            /* ── List view ───────────────────────────────────────────────── */
            <div className="mt-6 -mx-2 overflow-x-auto px-2 scrollbar-thin">
              <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left text-sm">
                <thead>
                  <tr className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    <th className="border-b border-border px-3 py-3 font-medium">ID</th>
                    <th className="border-b border-border px-3 py-3 font-medium">Part Name</th>
                    <th className="border-b border-border px-3 py-3 font-medium">Factory</th>
                    <th className="border-b border-border px-3 py-3 font-medium">Units</th>
                    <th className="border-b border-border px-3 py-3 font-medium">Status</th>
                    <th className="border-b border-border px-3 py-3 font-medium">Created</th>
                    <th className="border-b border-border px-3 py-3 font-medium text-right">QR</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    Array.from({ length: 6 }).map((_, i) => (
                      <tr key={i} className="animate-pulse">
                        <td className="border-b border-border/60 px-3 py-3.5">
                          <div className="h-2.5 w-24 rounded-full bg-card-elevated font-mono" />
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5">
                          <div className="h-3 w-32 rounded-full bg-card-elevated" />
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5">
                          <div className="h-2.5 w-20 rounded-full bg-card-elevated/70" />
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5">
                          <div className="h-2.5 w-10 rounded-full bg-card-elevated/70" />
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5">
                          <div className="h-5 w-10 rounded-full bg-card-elevated" />
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5">
                          <div className="h-2.5 w-16 rounded-full bg-card-elevated/70" />
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5 text-right">
                          <div className="inline-flex items-center gap-2">
                            <div className="h-8 w-8 rounded bg-card-elevated" />
                            <div className="h-8 w-8 rounded-full bg-card-elevated" />
                            <div className="h-8 w-8 rounded-full bg-card-elevated" />
                            <div className="h-8 w-8 rounded-full bg-card-elevated" />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : filtered.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-8 text-muted-foreground border-b border-border/60">
                        No QR codes found.
                      </td>
                    </tr>
                  ) : filtered.map((item) => {
                    const formattedDate = new Date(item.created_at).toLocaleDateString("en-CA");
                    const hasQrImage = !!item.qr_image_base64;

                    return (
                      <tr key={item.id} className="transition-smooth hover:bg-card-elevated/40">
                        <td className="border-b border-border/60 px-3 py-3.5 text-muted-foreground font-mono text-xs">
                          {item.qr_id}
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5 text-foreground font-medium">
                          {item.part_name}
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5 text-muted-foreground">
                          {item.factory}
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5 text-foreground">
                          {item.units}
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5">
                          {item.status ? (
                            <span
                              className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${item.status === "in"
                                ? "bg-emerald-500/10 text-emerald-400"
                                : "bg-red-500/10 text-red-400"
                                }`}
                            >
                              {item.status}
                            </span>
                          ) : (
                            <span className="text-xs text-muted-foreground/40">-</span>
                          )}
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5 text-muted-foreground">
                          {formattedDate}
                        </td>
                        <td className="border-b border-border/60 px-3 py-3.5 text-right">
                          <div className="inline-flex items-center gap-2">
                            {/* QR thumbnail */}
                            {hasQrImage ? (
                              <img
                                src={item.qr_image_base64!}
                                alt="QR"
                                className="h-8 w-8 rounded object-contain bg-white"
                              />
                            ) : (
                              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground/90 text-background">
                                <QrCode className="h-5 w-5" strokeWidth={1.6} />
                              </div>
                            )}
                            {/* Download */}
                            <button
                              id={`list-download-${item.qr_id}`}
                              onClick={() => downloadQr(item)}
                              disabled={!hasQrImage}
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-smooth hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                              aria-label="Download QR"
                              title="Download"
                            >
                              <Download className="h-4 w-4" />
                            </button>
                            {/* Open viewer */}
                            <button
                              id={`list-open-${item.qr_id}`}
                              onClick={() => handleOpen(item)}
                              disabled={!hasQrImage}
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-smooth hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                              aria-label="Open full-screen"
                              title="View full-screen"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </button>
                            {/* Delete */}
                            <button
                              onClick={() => setDeleteTarget(item)}
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-red-500 transition-smooth hover:bg-red-500/10 hover:text-red-600"
                              aria-label="Delete QR"
                              title="Delete QR"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Delete Confirmation Modal */}
        <AlertDialog open={!!deleteTarget} onOpenChange={(o) => !o && setDeleteTarget(null)}>
          <AlertDialogContent className="rounded-xl border border-border-surface bg-surface-sidebar p-0 sm:max-w-md overflow-hidden text-foreground">
            <AlertDialogHeader className="px-6 pb-2 pt-6">
              <AlertDialogTitle className="text-xl font-bold">Hapus QR Code</AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-muted-foreground mt-2">
                Apakah kamu yakin untuk menghapus <strong>{deleteTarget?.part_name}</strong> ({deleteTarget?.qr_id})? Tindakan ini tidak dapat dibatalkan.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="bg-card-elevated px-6 py-4 flex flex-row justify-end gap-3 sm:justify-end border-t border-border-surface">
              <AlertDialogCancel className="mt-0 border-border hover:bg-accent hover:text-foreground text-foreground">Batal</AlertDialogCancel>
              <AlertDialogAction 
                onClick={(e) => {
                  e.preventDefault();
                  confirmDelete();
                }}
                className="bg-red-500 hover:bg-red-600 text-white border-0"
              >
                {deleteQr.isPending ? "Menghapus..." : "Hapus"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </div>
    </DashboardLayout>
  );
}
`````

## File: src/routes/view-stock.tsx
`````typescript
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Boxes,
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  Package,
  Minus,
  RefreshCw,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useStock, useStockStats, useStockFactories, type StockRow } from "@/hooks/use-stock";

export const Route = createFileRoute("/view-stock")({
  head: () => ({
    meta: [
      { title: "Lihat Stock  - Sugity Creatives" },
      { name: "description", content: "Realtime stock data view with IN/OUT tracking." },
    ],
  }),
  component: ViewStockPage,
});

function ViewStockPage() {
  const [query, setQuery] = useState("");
  const [factory, setFactory] = useState("All");

  const { data: factories = [], isLoading: loadingFactories } = useStockFactories();
  const allFactories = ["All", ...factories];

  const { data: stockData = [], isLoading, refetch } = useStock(query, factory);
  const { data: statsData, isLoading: loadingStats } = useStockStats();

  const totalUnits = statsData?.totalUnits ?? 0;
  const skuCount = statsData?.skuCount ?? 0;
  const emptyStock = statsData?.emptyStock ?? 0;

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Inventory
          </span>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Lihat Stock</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Tingkat stok live yang disinkronkan dengan setiap pemindaian QR. Diperbarui setiap 21,4 Milidetik.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard
            label="Total Units di Stock"
            value={loadingStats ? null : Number(totalUnits).toLocaleString()}
            icon={Package}
          />
          <StatCard
            label="Jumlah Parts yang Dipantau"
            value={loadingStats ? null : skuCount.toString()}
            icon={Boxes}
          />
          <StatCard
            label="Stock Habis (0 unit)"
            value={loadingStats ? null : emptyStock.toString()}
            icon={TrendingDown}
            accent
          />
        </div>

        {/* Stock table */}
        <section className="mt-6 rounded-3xl border border-border-surface bg-surface-section p-5 sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-base font-semibold text-foreground">Stock Levels</h2>
            <div className="flex flex-wrap items-center gap-2">
              {/* Search */}
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="search-stock"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari part atau QR ID…"
                  className="h-10 w-full rounded-full border border-border-surface bg-card-elevated pl-9 pr-4 text-sm outline-none transition-smooth focus:border-[#C05C30] sm:w-52"
                />
              </div>
              {/* Factory filter */}
              <div className="relative">
                <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <select
                  id="filter-factory"
                  value={factory}
                  onChange={(e) => setFactory(e.target.value)}
                  disabled={loadingFactories}
                  className="h-10 appearance-none rounded-full border border-border-surface bg-card-elevated pl-9 pr-8 text-sm text-foreground outline-none transition-smooth focus:border-[#C05C30]"
                >
                  {allFactories.map((f) => (
                    <option key={f} value={f} className="bg-card">
                      {f}
                    </option>
                  ))}
                </select>
              </div>
              {/* Refresh */}
              <button
                id="btn-refresh-stock"
                onClick={() => refetch()}
                className="inline-flex h-10 w-10 items-center justify-center border border-border-surface rounded-full bg-card-elevated text-muted-foreground transition-smooth hover:bg-accent hover:text-foreground"
                title="Refresh now"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border-surface bg-surface-elevated p-4 animate-pulse"
                >
                  {/* Top row: name + badge */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <div className="h-3.5 w-36 rounded-full bg-card-elevated" />
                        <div className="h-3 w-16 rounded-full bg-card-elevated/70" />
                      </div>
                      <div className="h-2.5 w-20 rounded-full bg-card-elevated/60" />
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="h-8 w-8 rounded-full bg-card-elevated" />
                      <div className="h-6 w-16 rounded-full bg-card-elevated" />
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="h-2.5 w-20 rounded-full bg-card-elevated/70" />
                      <div className="h-2.5 w-10 rounded-full bg-card-elevated/70" />
                    </div>
                    <div className="h-2 w-full rounded-full bg-card" />
                  </div>
                  {/* Footer */}
                  <div className="mt-2 flex items-center justify-between">
                    <div className="h-2 w-28 rounded-full bg-card-elevated/50" />
                    <div className="h-2 w-24 rounded-full bg-card-elevated/50" />
                  </div>
                </div>
              ))
            ) : stockData.length === 0 ? (
              <div className="py-12 text-center text-sm text-muted-foreground">
                No stock items match your filters.{" "}
                {query === "" && factory === "All" && (
                  <span className="block mt-1 text-xs">
                    Create a QR code first - each new QR auto-creates a stock entry.
                  </span>
                )}
              </div>
            ) : (
              stockData.map((row) => <StockCard key={row.id} row={row} />)
            )}
          </div>
        </section>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-[11.5px] text-muted-foreground px-1">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Stocked (has units)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
            Empty (0 units - cannot scan OUT)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            Untouched (awaiting first scan)
          </span>
        </div>
      </div>
    </DashboardLayout>
  );
}

// ── Stock Card ─────────────────────────────────────────────────────────────

function StockCard({ row }: { row: StockRow }) {
  const unitValue = Number(row.unit_value);
  const currentStock = Number(row.current_stock);
  const percentage = Number(row.percentage);

  const isUntouched = row.trend === "none";
  const isEmpty = currentStock === 0 && !isUntouched;
  const isStocked = currentStock > 0;

  const statusColor = isUntouched
    ? "bg-muted-foreground/15 text-muted-foreground"
    : isEmpty
      ? "bg-red-500/10 text-red-400"
      : "bg-emerald-500/10 text-emerald-400";

  const barColor = isUntouched
    ? "bg-muted-foreground/30"
    : isEmpty
      ? "bg-red-500"
      : "bg-emerald-500";

  const TrendIcon = row.trend === "up" ? TrendingUp : row.trend === "down" ? TrendingDown : Minus;

  const updatedAt = new Date(row.updated_at).toLocaleString("en-CA", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="group rounded-2xl border border-border-surface bg-surface-elevated p-4 transition-smooth hover:bg-surface-hover">
      <div className="flex flex-wrap items-start justify-between gap-2">
        {/* Left info */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-foreground truncate">{row.part_name}</span>
            <span className="rounded-full bg-card px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
              {row.qr_id}
            </span>
          </div>
          <div className="mt-0.5 text-xs text-muted-foreground">{row.factory}</div>
        </div>

        {/* Right badges */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Trend icon */}
          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${statusColor}`}>
            <TrendIcon className="h-4 w-4" />
          </div>
          {/* Status badge */}
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusColor}`}>
            {isUntouched ? "Not scanned" : isEmpty ? "Empty" : "Stocked"}
          </span>
        </div>
      </div>

      {/* Progress bar, feat: {unitValue} units*/}
      <div className="mt-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11.5px] text-muted-foreground">
            <span className={`font-semibold ${isStocked ? "text-foreground" : "text-muted-foreground"}`}>
              {currentStock}
            </span>
            {" "} Total PCs
          </span>
          <span className="text-[11.5px] font-medium text-foreground">
            {isUntouched ? "-" : `${percentage.toFixed(1)}%`}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-card">
          <div
            className={`h-full rounded-full transition-all duration-500 ${barColor}`}
            style={{ width: `${isUntouched ? 0 : Math.min(100, percentage)}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-2 flex items-center justify-between text-[10.5px] text-muted-foreground/60">
        <span>Unit value: {unitValue} per scan</span>
        <span>Updated {updatedAt}</span>
      </div>
    </div>
  );
}

// ── Stat Card ──────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string | null; // null triggers shimmer skeleton
  icon: typeof Package;
  accent?: boolean;
}) {
  return (
    <div className="rounded-3xl border border-border-surface bg-card p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </span>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            accent ? "bg-destructive/15 text-destructive" : "bg-card-elevated text-foreground/80"
          }`}
        >
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-4 text-2xl font-semibold tracking-tight">
        {value === null ? (
          <div className="h-8 w-24 animate-pulse rounded-lg bg-card-elevated" />
        ) : (
          value
        )}
      </div>
    </div>
  );
}
`````

## File: src/routes/index.tsx
`````typescript
import { useMemo, useState, useCallback, lazy, Suspense } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Download,
  ExternalLink,
  QrCode,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Package,
  Loader2,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useQrCodes, useGenerateQrCode, type GenerateQrResult } from "@/hooks/use-qr-codes";
import { useMasterParts } from "@/hooks/use-master-parts";
import { useMesin } from "@/hooks/use-mesin";
import { FactoryApi } from "@/hooks/use-master-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { isTokenValid } from "@/lib/auth";

// Lazy-load the dashboard landing - only fetched for unauthenticated visitors
const DashboardLanding = lazy(() =>
  import("@/routes/dashboard").then((m) => ({ default: m.DashboardLandingPage }))
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stock Scan - Manage & Buat QR Codes" },
      {
        name: "description",
        content:
          "Buat QR stock codes, track asal factory dan jumlah stock dengan dashboard.",
      },
      { property: "og:title", content: "Stock Scan - Manage & Buat QR Codes" },
      {
        property: "og:description",
        content: "Buat QR stock codes, track asal factory dan jumlah stock dengan dashboard.",
      },
    ],
  }),
  component: IndexPage,
});

// ── Dual-page index: unauthenticated → landing, authenticated → QR app ───
function IndexPage() {
  // isTokenValid() reads localStorage synchronously - no useEffect cycle needed.
  // The mounted/useEffect pattern was rendering a blank black frame on every reload.
  // Only guard against SSR where window (and localStorage) doesn't exist yet.
  if (typeof window === "undefined") {
    return <div className="min-h-screen bg-background" />;
  }

  if (!isTokenValid()) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <DashboardLanding />
      </Suspense>
    );
  }
  return <StockScanPage />;
}



function StockScanPage() {
  const [partName, setPartName] = useState("");
  const [factoryOrigin, setFactoryOrigin] = useState("");
  const [value, setValue] = useState("");
  const [machineOrigin, setMachineOrigin] = useState("");
  const [createdQr, setCreatedQr] = useState<GenerateQrResult | null>(null);

  // [NEW] Populate dropdowns from existing APIs
  const { data: masterParts = [] } = useMasterParts();
  const { data: mesinList = [] } = useMesin();
  const { data: factories = [] } = FactoryApi.useGetAll();

  const { data: history = [], isLoading } = useQrCodes();
  const generateQrCode = useGenerateQrCode();

  // Build a Set of part names already claimed by an active QR record.
  // When a QR is deleted, react-query invalidates 'qr-codes' → Set rebuilds
  // → the part reappears in the dropdown automatically.
  const claimedPartNames = useMemo(
    () => new Set(history.map((qr) => qr.part_name)),
    [history]
  );

  const canSubmit = useMemo(
    () => partName.trim() && factoryOrigin && value && Number(value) > 0 && machineOrigin,
    [partName, factoryOrigin, value, machineOrigin]
  );

  const handlePartChange = (val: string) => {
    setPartName(val);
    const selectedPart = masterParts.find((p) => p.part_name === val);
    if (selectedPart) {
      if (selectedPart.factory_origin) {
        setFactoryOrigin(selectedPart.factory_origin);
      }
      if (selectedPart.machine) {
        // Find the full machine string from mesinList to match the SelectInput options
        const machineObj = mesinList.find(m => m.machine_code === selectedPart.machine);
        if (machineObj) {
          setMachineOrigin(`${machineObj.machine_code} - ${machineObj.machine_name}`);
        } else {
          // Fallback if not found in list, but we have the code
          setMachineOrigin(selectedPart.machine);
        }
      }
    }
  };

  const handleGenerate = () => {
    if (!canSubmit) return;

    generateQrCode.mutate(
      { partName: partName.trim(), factoryOrigin, value: Number(value), machineOrigin },
      {
        onSuccess: (data) => {
          setCreatedQr(data);
        },
      }
    );

    // Reset form but keep preview
    setPartName("");
    setValue("");
  };

  const handleReset = () => {
    setPartName("");
    setFactoryOrigin("");
    setValue("");
    setMachineOrigin("");
    setCreatedQr(null);
  };

  const handleDownload = useCallback(() => {
    if (!createdQr?.qrImageBase64) return;
    const link = document.createElement("a");
    link.href = createdQr.qrImageBase64;
    link.download = `QR-${createdQr.qrId || createdQr.batchId}.png`;
    link.click();
  }, [createdQr]);

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-300">
        {/* Page heading */}
        <div className="mb-6 flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Stock Scan
          </span>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Kelola & Buat QR Codes
          </h1>
        </div>

        {/* Top card: form + preview */}
        <section className="rounded-3xl border border-border-surface bg-surface-section p-5 sm:p-7">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
            {/* Form */}
            <div>
              <h2 className="text-base font-semibold text-foreground">
                Buat QR Code Stock Baru
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Isi form di bawah untuk membuat QR code asli dengan metadata yang tertanam.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Part Name">
                  <Select value={partName} onValueChange={handlePartChange}>
                    <SelectTrigger className="h-11 w-full rounded-xl border border-border-surface bg-card-elevated px-4 text-sm focus:border-[#C05C30]">
                      <SelectValue placeholder="Pilih Nama Part" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 rounded-xl border-border bg-card shadow-2xl">
                      <div className="p-1">
                        {masterParts
                          .filter(p => p.status === "active" && !claimedPartNames.has(p.part_name))
                          .map((part) => (
                            <SelectItem
                              key={part.id}
                              value={part.part_name}
                              className="rounded-md focus:bg-accent focus:text-accent-foreground cursor-pointer"
                            >
                              <div className="flex flex-col">
                                <span className="font-medium text-foreground">{part.part_name}</span>
                                <span className="text-[10px] text-muted-foreground">{part.part_number}</span>
                              </div>
                            </SelectItem>
                          ))}
                      </div>
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Homelane Factory">
                  <Select value={factoryOrigin} onValueChange={setFactoryOrigin}>
                    <SelectTrigger className="h-11 w-full rounded-xl border border-border-surface bg-card-elevated px-4 text-sm focus:border-[#C05C30]">
                      <SelectValue placeholder="Pilih Asal Factory" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 rounded-xl border-border bg-card shadow-2xl">
                      <div className="p-1">
                        {factories.map((f) => (
                          <SelectItem
                            key={f.id}
                            value={f.name}
                            className="rounded-md focus:bg-accent focus:text-accent-foreground cursor-pointer"
                          >
                            {f.name}
                          </SelectItem>
                        ))}
                      </div>
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Homeline Machine" className="sm:col-span-2">
                  <SelectInput
                    id="field-machine-origin"
                    value={machineOrigin}
                    onChange={setMachineOrigin}
                    placeholder="Pilih Mesin"
                    options={mesinList.filter(m => m.status === "active").map(m => `${m.machine_code} - ${m.machine_name}`)}
                  />
                </Field>
                <Field label="Unit Value" className="sm:col-span-2">
                  <TextInput
                    id="field-unit-value"
                    value={value}
                    onChange={setValue}
                    placeholder="Berapa Jumlah Stock nya (Unit Value)"
                    type="number"
                  />
                </Field>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  id="btn-create-qr"
                  onClick={handleGenerate}
                  disabled={!canSubmit || generateQrCode.isPending}
                  className="inline-flex items-center gap-2 rounded-full px-[22px] py-[10px] text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed"
                  style={{
                    background: generateQrCode.isPending ? "#2A1A0E" : "#C05C30",
                    color: generateQrCode.isPending ? "#FB923C" : "#FEF3EC",
                    border: generateQrCode.isPending ? "1px solid #6B3D27" : "none",
                    boxShadow: generateQrCode.isPending
                      ? "none"
                      : "inset 0 1px 0 rgba(255,255,255,0.10)",
                    opacity: !canSubmit && !generateQrCode.isPending ? "0.5" : "1",
                  }}
                  onMouseEnter={e => {
                    if (!generateQrCode.isPending && canSubmit) {
                      e.currentTarget.style.background = "#A84D24";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(192,92,48,0.40)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!generateQrCode.isPending) {
                      e.currentTarget.style.background = "#C05C30";
                      e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.10)";
                    }
                  }}
                >
                  {generateQrCode.isPending
                    ? <Loader2 className="h-4 w-4 animate-spin" />
                    : <Sparkles className="h-4 w-4" />}
                  {generateQrCode.isPending ? "Membuat Sabar yah hehe..." : "Buat QR Code"}
                </button>
                <button
                  id="btn-reset-form"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-accent"
                >
                  <RotateCcw className="h-4 w-4" />
                  Mengatur Ulang
                </button>
              </div>

              {generateQrCode.isError && (
                <p className="mt-3 text-xs text-destructive">
                  Error: {generateQrCode.error?.message}
                </p>
              )}
            </div>

            {/* Preview */}
            <div className="rounded-2xl border border-border-surface bg-surface-elevated p-5">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <QrCode className="h-4 w-4 text-muted-foreground" />
                QR Code Created
              </h3>

              <div className="mt-4 flex aspect-square w-full items-center justify-center rounded-2xl border border-dashed border-border-strong bg-card text-center overflow-hidden">
                {createdQr?.qrImageBase64 ? (
                  <div className="flex flex-col items-center gap-3 px-4 py-4 w-full">
                    {/* Real QR image */}
                    <img
                      src={createdQr.qrImageBase64}
                      alt={`QR code for ${createdQr.partName}`}
                      className="w-full max-w-[200px] rounded-xl"
                    />
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-400">
                      <CheckCircle2 className="h-3 w-3" />
                      QR Generated · Status: IN
                    </div>
                    <div className="text-xs text-muted-foreground text-center">
                      <span className="font-medium text-foreground">{createdQr.partName}</span>
                      {" · "}{createdQr.factoryOrigin}
                      {" · "}{createdQr.value} units
                    </div>
                    <div className="text-[10px] text-muted-foreground/60 font-mono break-all px-2">
                      {createdQr.batchId}
                    </div>
                  </div>
                ) : generateQrCode.isPending ? (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    <span className="text-xs">Membuat QR nya Sabar Yah...</span>
                  </div>
                ) : (
                  <div className="px-6 text-sm text-muted-foreground">
                    <Package className="mx-auto mb-2 h-8 w-8 opacity-40" />
                    Isi Formnya Dulu dan Tekan "Buat QR Code"
                  </div>
                )}
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  id="btn-download-qr"
                  onClick={handleDownload}
                  disabled={!createdQr?.qrImageBase64}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Download className="h-4 w-4" />
                  Download QR
                </button>
                {createdQr?.qrImageBase64 && (
                  <Link
                    to="/qr-viewer"
                    search={{
                      img: createdQr.qrImageBase64,
                      label: createdQr.partName,
                      partname: createdQr.partName,
                      partnum: masterParts.find(p => p.part_name === createdQr.partName)?.part_number || "",
                      partmodel: masterParts.find(p => p.part_name === createdQr.partName)?.model || "",
                      machineOrigin: createdQr.row?.machine_origin || createdQr.machineOrigin || "",
                      factoryOrigin: createdQr.factoryOrigin || "",
                      updatedAt: createdQr.row?.updated_at || "",
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-accent"
                    title="View full screen"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
                Scan QR Code dengan aplikasi Camera atau Scanner, QR Code ini bersifat permanen (STATIS).
              </p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mt-6 rounded-3xl border border-border-surface bg-surface-section p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h2 className="text-base font-semibold text-foreground">
                History Pembuatan QR Code
              </h2>
              <span className="text-xs text-muted-foreground">
                {history.length} record{history.length !== 1 ? "s" : ""}
              </span>
            </div>
            <Link
              to="/all-qr"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card-elevated/40 px-4 py-2 text-xs font-medium text-foreground transition-smooth hover:bg-accent"
            >
              Lihat semua QR
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-4 -mx-2 overflow-x-auto px-2 scrollbar-thin">
            <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  <Th>Time</Th>
                  <Th>Part Name</Th>
                  <Th>Homelane Factory</Th>
                  <Th>Units</Th>
                  <Th>Status</Th>
                  <Th className="text-right">QR</Th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <Td><div className="h-2.5 w-20 rounded-full bg-card-elevated" /></Td>
                      <Td><div className="h-3 w-32 rounded-full bg-card-elevated" /></Td>
                      <Td><div className="h-2.5 w-20 rounded-full bg-card-elevated/70" /></Td>
                      <Td><div className="h-2.5 w-14 rounded-full bg-card-elevated/70" /></Td>
                      <Td><div className="h-5 w-10 rounded-full bg-card-elevated" /></Td>
                      <Td className="text-right">
                        <div className="inline-flex justify-end">
                          <div className="h-8 w-8 rounded bg-card-elevated" />
                        </div>
                      </Td>
                    </tr>
                  ))
                ) : history.length === 0 ? (
                  <tr>
                    <Td colSpan={6} className="text-center">No history yet.</Td>
                  </tr>
                ) : (
                  history.slice(0, 5).map((row, i) => {
                    const dateObj = new Date(row.created_at);
                    const formattedDate = dateObj.toLocaleDateString("en-CA");

                    return (
                      <tr
                        key={row.id || i}
                        className="group transition-smooth hover:bg-card-elevated/40"
                      >
                        <Td>{formattedDate}</Td>
                        <Td className="text-foreground">{row.part_name}</Td>
                        <Td>{row.factory}</Td>
                        <Td>{row.units} units</Td>
                        <Td>
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${row.status === "in"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-red-500/10 text-red-400"
                              }`}
                          >
                            {row.status || "in"}
                          </span>
                        </Td>
                        <Td className="text-right">
                          <div className="inline-flex items-center gap-2">
                            {row.qr_image_base64 ? (
                              <img
                                src={row.qr_image_base64}
                                alt="QR"
                                className="h-8 w-8 rounded object-contain bg-white"
                              />
                            ) : (
                              <QrPlaceholder />
                            )}
                          </div>
                        </Td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

/* ---------- subcomponents ---------- */

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function TextInput({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  id?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="h-11 w-full rounded-xl border border-border-surface bg-card-elevated px-4 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-smooth focus:border-[#C05C30] focus:bg-card-elevated"
    />
  );
}

function SelectInput({
  id,
  value,
  onChange,
  placeholder,
  options,
}: {
  id?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`h-11 w-full appearance-none rounded-xl border border-border-surface bg-card-elevated px-4 pr-10 text-sm outline-none transition-smooth focus:border-[#C05C30] ${value ? "text-foreground" : "text-muted-foreground/70"
          }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-card text-foreground">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}

function Th({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`border-b border-border px-3 py-3 font-medium text-muted-foreground ${className}`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  className = "",
  colSpan,
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
}) {
  return (
    <td
      colSpan={colSpan}
      className={`border-b border-border/60 px-3 py-3.5 text-muted-foreground ${className}`}
    >
      {children}
    </td>
  );
}

function QrPlaceholder() {
  return (
    <div className="h-8 w-8 flex items-center justify-center rounded-md bg-foreground/90 text-background">
      <QrCode className="h-5 w-5" strokeWidth={1.6} />
    </div>
  );
}
`````

## File: src/components/dashboard/Sidebar.tsx
`````typescript
import { Link, useRouterState } from "@tanstack/react-router";
import { ScanLine, Boxes, History, Smartphone, Menu, QrCode, Users, Database, Sparkles, BadgeCheck, CreditCard, Bell, LogOut, ChevronsUpDown, Sun, Moon, MonitorCog, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/use-theme";
import { getAuthUser, clearAuth } from "@/lib/auth";

export type NavItem = {
  label: string;
  description: string;
  to: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Buat QR",
    description: "Buat QR Code baru",
    to: "/",
    icon: ScanLine,
  },
  {
    label: "Stock Activity",
    description: "Aktifitas Realtime stock",
    to: "/view-stock",
    icon: Boxes,
  },
  {
    label: "Histori Tugas",
    description: "Histori Tugas QR Scanner",
    to: "/task-history",
    icon: History,
  },
  {
    label: "Pindai QR",
    description: "Pindai QR Code: IN/OUT",
    to: "/scan",
    icon: QrCode,
  },
];

export const MANAGEMENT_ITEMS: NavItem[] = [
  {
    label: "Device Management",
    description: "Management Perangkat Scanner",
    to: "/devices",
    icon: Smartphone,
  },
  {
    label: "Mesin Management",
    description: "Management Mesin",
    to: "/mesin",
    icon: MonitorCog,
  },
  {
    label: "Users Management",
    description: "Management Pengguna",
    to: "/users",
    icon: Users,
  },
  {
    label: "Privilege QR",
    description: "Kelola Akses QR per Station",
    to: "/qr-privileges",
    icon: ShieldCheck,
  },
];

export const MASTER_DATA_ITEMS: NavItem[] = [
  {
    label: "Master Data",
    description: "Management Master Data",
    to: "/master-data",
    icon: Database,
  },
  {
    label: "Teitei Management",
    description: "Kelola nilai teitei per part",
    to: "/teitei",
    icon: Database,
  },
  {
    label: "Category Management",
    description: "Kelola Kategori Part",
    to: "/category",
    icon: Database,
  },
  {
    label: "Factory Management",
    description: "Kelola Data Factory/Pabrik",
    to: "/factory",
    icon: Database,
  },
  {
    label: "Model Management",
    description: "Kelola Model Kendaraan/Mesin",
    to: "/model",
    icon: Database,
  },
  {
    label: "Customer Management",
    description: "Kelola Data Customer",
    to: "/customer",
    icon: Database,
  },
];

type Props = {
  collapsed: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
};

export function SidebarContent({ collapsed, onToggle, onNavigate }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggleTheme } = useTheme();

  const authUser = getAuthUser();
  // Auth guard guarantees authUser is non-null here.
  // No guest state - empty fallbacks are purely defensive.
  const displayName = authUser?.username ?? "";
  const displayRole = authUser?.role ?? "";
  const initials = authUser ? authUser.username.substring(0, 2).toUpperCase() : "";

  const handleLogout = () => {
    clearAuth();
    window.location.replace("/login");
  };

  return (
    <aside
      className={`flex h-full flex-col bg-surface-sidebar border-r border-border-surface text-sidebar-foreground transition-smooth ${collapsed ? "w-[84px]" : "w-[280px]"
        }`}
    >
      {/* Header */}
      <div
        className={`flex items-center gap-3 py-5 ${collapsed ? "justify-center px-0" : "justify-between px-5"
          }`}
      >
        <div
          className={`min-w-0 leading-tight overflow-hidden transition-smooth ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"
            }`}
        >
          <div className="truncate text-[13px] font-semibold tracking-wide text-foreground">
            SUGITY CREATIVES
          </div>
          <div className="truncate text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Sugity Integrated Online
          </div>
        </div>
        <button
          onClick={onToggle}
          className="hidden md:inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-smooth hover:bg-sidebar-hover hover:text-foreground"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Nav */}
      <nav className={`flex-1 overflow-y-auto py-2 scrollbar-thin ${collapsed ? "px-0" : "px-3"}`}>
        <ul className={`space-y-1.5 ${collapsed ? "flex flex-col items-center" : ""}`}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.to;

            if (collapsed) {
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={onNavigate}
                    title={item.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-smooth ${active
                      ? "bg-[#c05c30] text-white"
                      : "text-foreground/80 hover:bg-sidebar-hover hover:text-foreground"
                      }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onNavigate}
                  className={`group flex items-center gap-4 rounded-full px-4 py-3 transition-smooth ${active
                    ? "bg-[#c05c30] text-white"
                    : "text-foreground/90 hover:bg-sidebar-hover"
                    }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 transition-smooth ${active ? "text-white" : "text-foreground/80"
                      }`}
                    strokeWidth={1.75}
                  />
                  <span className="min-w-0 flex-1 overflow-hidden">
                    <span className="block truncate text-[14px] font-semibold">
                      {item.label}
                    </span>
                    <span
                      className={`block truncate text-[11.5px] ${active ? "text-[#f1e7db]" : "text-muted-foreground"
                        }`}
                    >
                      {item.description}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Management Group */}
        <div className={`mt-6 mb-2 ${collapsed ? "px-0 text-center" : "px-4"}`}>
          <span className={`text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 ${collapsed ? "hidden" : "block"}`}>
            Management
          </span>
          {collapsed && <div className="mx-auto h-px w-8 bg-border-surface my-2" />}
        </div>
        <ul className={`space-y-1.5 pb-4 ${collapsed ? "flex flex-col items-center" : ""}`}>
          {MANAGEMENT_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.to;

            if (collapsed) {
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={onNavigate}
                    title={item.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-smooth ${active
                      ? "bg-[#c05c30] text-white"
                      : "text-foreground/80 hover:bg-sidebar-hover hover:text-foreground"
                      }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onNavigate}
                  className={`group flex items-center gap-4 rounded-full px-4 py-3 transition-smooth ${active
                    ? "bg-[#c05c30] text-white"
                    : "text-foreground/90 hover:bg-sidebar-hover"
                    }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 transition-smooth ${active ? "text-white" : "text-foreground/80"
                      }`}
                    strokeWidth={1.75}
                  />
                  <span className="min-w-0 flex-1 overflow-hidden">
                    <span className="block truncate text-[14px] font-semibold">
                      {item.label}
                    </span>
                    <span
                      className={`block truncate text-[11.5px] ${active ? "text-[#f1e7db]" : "text-muted-foreground"
                        }`}
                    >
                      {item.description}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Master Data Group */}
        <div className={`mt-6 mb-2 ${collapsed ? "px-0 text-center" : "px-4"}`}>
          <span className={`text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 ${collapsed ? "hidden" : "block"}`}>
            MASTER DATA
          </span>
          {collapsed && <div className="mx-auto h-px w-8 bg-border-surface my-2" />}
        </div>
        <ul className={`space-y-1.5 pb-4 ${collapsed ? "flex flex-col items-center" : ""}`}>
          {MASTER_DATA_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.to;

            if (collapsed) {
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={onNavigate}
                    title={item.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-smooth ${active
                      ? "bg-[#c05c30] text-white"
                      : "text-foreground/80 hover:bg-sidebar-hover hover:text-foreground"
                      }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onNavigate}
                  className={`group flex items-center gap-4 rounded-full px-4 py-3 transition-smooth ${active
                    ? "bg-[#c05c30] text-white"
                    : "text-foreground/90 hover:bg-sidebar-hover"
                    }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 transition-smooth ${active ? "text-white" : "text-foreground/80"
                      }`}
                    strokeWidth={1.75}
                  />
                  <span className="min-w-0 flex-1 overflow-hidden">
                    <span className="block truncate text-[14px] font-semibold">
                      {item.label}
                    </span>
                    <span
                      className={`block truncate text-[11.5px] ${active ? "text-[#f1e7db]" : "text-muted-foreground"
                        }`}
                    >
                      {item.description}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Profile */}
      <div className="px-3 py-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-smooth hover:bg-sidebar-hover focus-visible:outline-none ${collapsed ? "justify-center px-0" : ""
                }`}
            >
              <Avatar className="h-9 w-9 shrink-0 rounded-lg">
                <AvatarImage src="" alt="User avatar" />
                <AvatarFallback className="rounded-lg bg-[#c05c30] text-white text-sm font-bold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div
                className={`min-w-0 flex-1 overflow-hidden transition-smooth ${collapsed ? "w-0 opacity-0 hidden" : "opacity-100"
                  }`}
              >
                <p className="truncate text-[13px] font-semibold text-foreground leading-tight">
                  {displayName}
                </p>
                <p className="truncate text-[11px] uppercase tracking-tighter text-muted-foreground leading-tight">
                  {displayRole}
                </p>
              </div>
              {!collapsed && (
                <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-64 rounded-xl bg-surface-sidebar border border-border-surface shadow-2xl text-foreground"
            side="top"
            align="end"
            sideOffset={8}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 px-3 py-3">
                <Avatar className="h-10 w-10 rounded-lg shrink-0">
                  <AvatarImage src="" alt="User avatar" />
                  <AvatarFallback className="rounded-lg bg-[#c05c30] text-white text-sm font-bold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold leading-tight text-foreground">
                    {displayName}
                  </p>
                  <p className="truncate text-[12px] uppercase tracking-tighter text-muted-foreground leading-tight">
                    {displayRole}
                  </p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-border-surface" />
            {/* <DropdownMenuGroup>
              <DropdownMenuItem className="gap-3 px-3 py-2.5 cursor-pointer rounded-lg focus:bg-sidebar-hover focus:text-foreground">
                <Sparkles className="h-4 w-4 text-muted-foreground" />
                <span className="text-[13px]">Upgrade to Pro</span>
              </DropdownMenuItem>
            </DropdownMenuGroup> */}
            <DropdownMenuSeparator className="bg-border-surface" />
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-3 px-3 py-2.5 cursor-pointer rounded-lg focus:bg-sidebar-hover focus:text-foreground">
                <BadgeCheck className="h-4 w-4 text-muted-foreground" />
                <span className="text-[13px]">Akun</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-3 px-3 py-2.5 cursor-pointer rounded-lg focus:bg-sidebar-hover focus:text-foreground">
                <Bell className="h-4 w-4 text-muted-foreground" />
                <span className="text-[13px]">Notifikasi</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-border-surface" />
            <DropdownMenuItem
              className="gap-3 px-3 py-2.5 cursor-pointer rounded-lg focus:bg-sidebar-hover focus:text-foreground text-red-400 focus:text-red-400"
              onClick={(e) => { e.preventDefault(); handleLogout(); }}
            >
              <LogOut className="h-4 w-4" />
              <span className="text-[13px]">Keluar Akun</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-border-surface" />
            <DropdownMenuItem
              className="gap-3 px-3 py-2.5 cursor-pointer rounded-lg focus:bg-sidebar-hover focus:text-foreground"
              onClick={(e) => { e.preventDefault(); toggleTheme(); }}
            >
              {theme === "dark" ? <Sun className="h-4 w-4 text-muted-foreground" /> : <Moon className="h-4 w-4 text-muted-foreground" />}
              <span className="text-[13px]">{theme === "dark" ? "Mode Terang" : "Mode Gelap"}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
`````

## File: src/routeTree.gen.ts
`````typescript
/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as ViewStockRouteImport } from './routes/view-stock'
import { Route as TvRouteImport } from './routes/tv'
import { Route as TeiteiRouteImport } from './routes/teitei'
import { Route as TaskHistoryRouteImport } from './routes/task-history'
import { Route as ScanRouteImport } from './routes/scan'
import { Route as QrViewerRouteImport } from './routes/qr-viewer'
import { Route as QrPrivilegesRouteImport } from './routes/qr-privileges'
import { Route as ModelRouteImport } from './routes/model'
import { Route as LoginRouteImport } from './routes/login'
import { Route as FactoryRouteImport } from './routes/factory'
import { Route as DevicesRouteImport } from './routes/devices'
import { Route as DashboardRouteImport } from './routes/dashboard'
import { Route as CustomerRouteImport } from './routes/customer'
import { Route as CategoryRouteImport } from './routes/category'
import { Route as AllQrRouteImport } from './routes/all-qr'
import { Route as IndexRouteImport } from './routes/index'
import { Route as UsersIndexRouteImport } from './routes/users/index'
import { Route as MesinIndexRouteImport } from './routes/mesin/index'
import { Route as MasterDataIndexRouteImport } from './routes/master-data/index'
import { Route as UsersCreateRouteImport } from './routes/users/create'
import { Route as StationLoginRouteImport } from './routes/station/login'
import { Route as StationDashboardRouteImport } from './routes/station/dashboard'
import { Route as MesinCreateRouteImport } from './routes/mesin/create'
import { Route as MasterDataCreateRouteImport } from './routes/master-data/create'

const ViewStockRoute = ViewStockRouteImport.update({
  id: '/view-stock',
  path: '/view-stock',
  getParentRoute: () => rootRouteImport,
} as any)
const TvRoute = TvRouteImport.update({
  id: '/tv',
  path: '/tv',
  getParentRoute: () => rootRouteImport,
} as any)
const TeiteiRoute = TeiteiRouteImport.update({
  id: '/teitei',
  path: '/teitei',
  getParentRoute: () => rootRouteImport,
} as any)
const TaskHistoryRoute = TaskHistoryRouteImport.update({
  id: '/task-history',
  path: '/task-history',
  getParentRoute: () => rootRouteImport,
} as any)
const ScanRoute = ScanRouteImport.update({
  id: '/scan',
  path: '/scan',
  getParentRoute: () => rootRouteImport,
} as any)
const QrViewerRoute = QrViewerRouteImport.update({
  id: '/qr-viewer',
  path: '/qr-viewer',
  getParentRoute: () => rootRouteImport,
} as any)
const QrPrivilegesRoute = QrPrivilegesRouteImport.update({
  id: '/qr-privileges',
  path: '/qr-privileges',
  getParentRoute: () => rootRouteImport,
} as any)
const ModelRoute = ModelRouteImport.update({
  id: '/model',
  path: '/model',
  getParentRoute: () => rootRouteImport,
} as any)
const LoginRoute = LoginRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRouteImport,
} as any)
const FactoryRoute = FactoryRouteImport.update({
  id: '/factory',
  path: '/factory',
  getParentRoute: () => rootRouteImport,
} as any)
const DevicesRoute = DevicesRouteImport.update({
  id: '/devices',
  path: '/devices',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)
const CustomerRoute = CustomerRouteImport.update({
  id: '/customer',
  path: '/customer',
  getParentRoute: () => rootRouteImport,
} as any)
const CategoryRoute = CategoryRouteImport.update({
  id: '/category',
  path: '/category',
  getParentRoute: () => rootRouteImport,
} as any)
const AllQrRoute = AllQrRouteImport.update({
  id: '/all-qr',
  path: '/all-qr',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const UsersIndexRoute = UsersIndexRouteImport.update({
  id: '/users/',
  path: '/users/',
  getParentRoute: () => rootRouteImport,
} as any)
const MesinIndexRoute = MesinIndexRouteImport.update({
  id: '/mesin/',
  path: '/mesin/',
  getParentRoute: () => rootRouteImport,
} as any)
const MasterDataIndexRoute = MasterDataIndexRouteImport.update({
  id: '/master-data/',
  path: '/master-data/',
  getParentRoute: () => rootRouteImport,
} as any)
const UsersCreateRoute = UsersCreateRouteImport.update({
  id: '/users/create',
  path: '/users/create',
  getParentRoute: () => rootRouteImport,
} as any)
const StationLoginRoute = StationLoginRouteImport.update({
  id: '/station/login',
  path: '/station/login',
  getParentRoute: () => rootRouteImport,
} as any)
const StationDashboardRoute = StationDashboardRouteImport.update({
  id: '/station/dashboard',
  path: '/station/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)
const MesinCreateRoute = MesinCreateRouteImport.update({
  id: '/mesin/create',
  path: '/mesin/create',
  getParentRoute: () => rootRouteImport,
} as any)
const MasterDataCreateRoute = MasterDataCreateRouteImport.update({
  id: '/master-data/create',
  path: '/master-data/create',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/all-qr': typeof AllQrRoute
  '/category': typeof CategoryRoute
  '/customer': typeof CustomerRoute
  '/dashboard': typeof DashboardRoute
  '/devices': typeof DevicesRoute
  '/factory': typeof FactoryRoute
  '/login': typeof LoginRoute
  '/model': typeof ModelRoute
  '/qr-privileges': typeof QrPrivilegesRoute
  '/qr-viewer': typeof QrViewerRoute
  '/scan': typeof ScanRoute
  '/task-history': typeof TaskHistoryRoute
  '/teitei': typeof TeiteiRoute
  '/tv': typeof TvRoute
  '/view-stock': typeof ViewStockRoute
  '/master-data/create': typeof MasterDataCreateRoute
  '/mesin/create': typeof MesinCreateRoute
  '/station/dashboard': typeof StationDashboardRoute
  '/station/login': typeof StationLoginRoute
  '/users/create': typeof UsersCreateRoute
  '/master-data/': typeof MasterDataIndexRoute
  '/mesin/': typeof MesinIndexRoute
  '/users/': typeof UsersIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/all-qr': typeof AllQrRoute
  '/category': typeof CategoryRoute
  '/customer': typeof CustomerRoute
  '/dashboard': typeof DashboardRoute
  '/devices': typeof DevicesRoute
  '/factory': typeof FactoryRoute
  '/login': typeof LoginRoute
  '/model': typeof ModelRoute
  '/qr-privileges': typeof QrPrivilegesRoute
  '/qr-viewer': typeof QrViewerRoute
  '/scan': typeof ScanRoute
  '/task-history': typeof TaskHistoryRoute
  '/teitei': typeof TeiteiRoute
  '/tv': typeof TvRoute
  '/view-stock': typeof ViewStockRoute
  '/master-data/create': typeof MasterDataCreateRoute
  '/mesin/create': typeof MesinCreateRoute
  '/station/dashboard': typeof StationDashboardRoute
  '/station/login': typeof StationLoginRoute
  '/users/create': typeof UsersCreateRoute
  '/master-data': typeof MasterDataIndexRoute
  '/mesin': typeof MesinIndexRoute
  '/users': typeof UsersIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/all-qr': typeof AllQrRoute
  '/category': typeof CategoryRoute
  '/customer': typeof CustomerRoute
  '/dashboard': typeof DashboardRoute
  '/devices': typeof DevicesRoute
  '/factory': typeof FactoryRoute
  '/login': typeof LoginRoute
  '/model': typeof ModelRoute
  '/qr-privileges': typeof QrPrivilegesRoute
  '/qr-viewer': typeof QrViewerRoute
  '/scan': typeof ScanRoute
  '/task-history': typeof TaskHistoryRoute
  '/teitei': typeof TeiteiRoute
  '/tv': typeof TvRoute
  '/view-stock': typeof ViewStockRoute
  '/master-data/create': typeof MasterDataCreateRoute
  '/mesin/create': typeof MesinCreateRoute
  '/station/dashboard': typeof StationDashboardRoute
  '/station/login': typeof StationLoginRoute
  '/users/create': typeof UsersCreateRoute
  '/master-data/': typeof MasterDataIndexRoute
  '/mesin/': typeof MesinIndexRoute
  '/users/': typeof UsersIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/all-qr'
    | '/category'
    | '/customer'
    | '/dashboard'
    | '/devices'
    | '/factory'
    | '/login'
    | '/model'
    | '/qr-privileges'
    | '/qr-viewer'
    | '/scan'
    | '/task-history'
    | '/teitei'
    | '/tv'
    | '/view-stock'
    | '/master-data/create'
    | '/mesin/create'
    | '/station/dashboard'
    | '/station/login'
    | '/users/create'
    | '/master-data/'
    | '/mesin/'
    | '/users/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/all-qr'
    | '/category'
    | '/customer'
    | '/dashboard'
    | '/devices'
    | '/factory'
    | '/login'
    | '/model'
    | '/qr-privileges'
    | '/qr-viewer'
    | '/scan'
    | '/task-history'
    | '/teitei'
    | '/tv'
    | '/view-stock'
    | '/master-data/create'
    | '/mesin/create'
    | '/station/dashboard'
    | '/station/login'
    | '/users/create'
    | '/master-data'
    | '/mesin'
    | '/users'
  id:
    | '__root__'
    | '/'
    | '/all-qr'
    | '/category'
    | '/customer'
    | '/dashboard'
    | '/devices'
    | '/factory'
    | '/login'
    | '/model'
    | '/qr-privileges'
    | '/qr-viewer'
    | '/scan'
    | '/task-history'
    | '/teitei'
    | '/tv'
    | '/view-stock'
    | '/master-data/create'
    | '/mesin/create'
    | '/station/dashboard'
    | '/station/login'
    | '/users/create'
    | '/master-data/'
    | '/mesin/'
    | '/users/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AllQrRoute: typeof AllQrRoute
  CategoryRoute: typeof CategoryRoute
  CustomerRoute: typeof CustomerRoute
  DashboardRoute: typeof DashboardRoute
  DevicesRoute: typeof DevicesRoute
  FactoryRoute: typeof FactoryRoute
  LoginRoute: typeof LoginRoute
  ModelRoute: typeof ModelRoute
  QrPrivilegesRoute: typeof QrPrivilegesRoute
  QrViewerRoute: typeof QrViewerRoute
  ScanRoute: typeof ScanRoute
  TaskHistoryRoute: typeof TaskHistoryRoute
  TeiteiRoute: typeof TeiteiRoute
  TvRoute: typeof TvRoute
  ViewStockRoute: typeof ViewStockRoute
  MasterDataCreateRoute: typeof MasterDataCreateRoute
  MesinCreateRoute: typeof MesinCreateRoute
  StationDashboardRoute: typeof StationDashboardRoute
  StationLoginRoute: typeof StationLoginRoute
  UsersCreateRoute: typeof UsersCreateRoute
  MasterDataIndexRoute: typeof MasterDataIndexRoute
  MesinIndexRoute: typeof MesinIndexRoute
  UsersIndexRoute: typeof UsersIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/view-stock': {
      id: '/view-stock'
      path: '/view-stock'
      fullPath: '/view-stock'
      preLoaderRoute: typeof ViewStockRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/tv': {
      id: '/tv'
      path: '/tv'
      fullPath: '/tv'
      preLoaderRoute: typeof TvRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/teitei': {
      id: '/teitei'
      path: '/teitei'
      fullPath: '/teitei'
      preLoaderRoute: typeof TeiteiRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/task-history': {
      id: '/task-history'
      path: '/task-history'
      fullPath: '/task-history'
      preLoaderRoute: typeof TaskHistoryRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/scan': {
      id: '/scan'
      path: '/scan'
      fullPath: '/scan'
      preLoaderRoute: typeof ScanRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/qr-viewer': {
      id: '/qr-viewer'
      path: '/qr-viewer'
      fullPath: '/qr-viewer'
      preLoaderRoute: typeof QrViewerRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/qr-privileges': {
      id: '/qr-privileges'
      path: '/qr-privileges'
      fullPath: '/qr-privileges'
      preLoaderRoute: typeof QrPrivilegesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/model': {
      id: '/model'
      path: '/model'
      fullPath: '/model'
      preLoaderRoute: typeof ModelRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/factory': {
      id: '/factory'
      path: '/factory'
      fullPath: '/factory'
      preLoaderRoute: typeof FactoryRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/devices': {
      id: '/devices'
      path: '/devices'
      fullPath: '/devices'
      preLoaderRoute: typeof DevicesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/customer': {
      id: '/customer'
      path: '/customer'
      fullPath: '/customer'
      preLoaderRoute: typeof CustomerRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/category': {
      id: '/category'
      path: '/category'
      fullPath: '/category'
      preLoaderRoute: typeof CategoryRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/all-qr': {
      id: '/all-qr'
      path: '/all-qr'
      fullPath: '/all-qr'
      preLoaderRoute: typeof AllQrRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/users/': {
      id: '/users/'
      path: '/users'
      fullPath: '/users/'
      preLoaderRoute: typeof UsersIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/mesin/': {
      id: '/mesin/'
      path: '/mesin'
      fullPath: '/mesin/'
      preLoaderRoute: typeof MesinIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/master-data/': {
      id: '/master-data/'
      path: '/master-data'
      fullPath: '/master-data/'
      preLoaderRoute: typeof MasterDataIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/users/create': {
      id: '/users/create'
      path: '/users/create'
      fullPath: '/users/create'
      preLoaderRoute: typeof UsersCreateRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/station/login': {
      id: '/station/login'
      path: '/station/login'
      fullPath: '/station/login'
      preLoaderRoute: typeof StationLoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/station/dashboard': {
      id: '/station/dashboard'
      path: '/station/dashboard'
      fullPath: '/station/dashboard'
      preLoaderRoute: typeof StationDashboardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/mesin/create': {
      id: '/mesin/create'
      path: '/mesin/create'
      fullPath: '/mesin/create'
      preLoaderRoute: typeof MesinCreateRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/master-data/create': {
      id: '/master-data/create'
      path: '/master-data/create'
      fullPath: '/master-data/create'
      preLoaderRoute: typeof MasterDataCreateRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AllQrRoute: AllQrRoute,
  CategoryRoute: CategoryRoute,
  CustomerRoute: CustomerRoute,
  DashboardRoute: DashboardRoute,
  DevicesRoute: DevicesRoute,
  FactoryRoute: FactoryRoute,
  LoginRoute: LoginRoute,
  ModelRoute: ModelRoute,
  QrPrivilegesRoute: QrPrivilegesRoute,
  QrViewerRoute: QrViewerRoute,
  ScanRoute: ScanRoute,
  TaskHistoryRoute: TaskHistoryRoute,
  TeiteiRoute: TeiteiRoute,
  TvRoute: TvRoute,
  ViewStockRoute: ViewStockRoute,
  MasterDataCreateRoute: MasterDataCreateRoute,
  MesinCreateRoute: MesinCreateRoute,
  StationDashboardRoute: StationDashboardRoute,
  StationLoginRoute: StationLoginRoute,
  UsersCreateRoute: UsersCreateRoute,
  MasterDataIndexRoute: MasterDataIndexRoute,
  MesinIndexRoute: MesinIndexRoute,
  UsersIndexRoute: UsersIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { createStart } from '@tanstack/react-start'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
  }
}
`````
