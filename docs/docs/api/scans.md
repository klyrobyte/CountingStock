---
id: scans
title: Scan Records
sidebar_label: Scans
---

# Scan Records

Access to raw scan event records. The primary scan toggle is handled by [`POST /api/qr/process`](./qr#post-apiqrprocess).

**Base path:** `/api/scans`  
**Authentication:** ✅ User JWT required

---

## GET /api/scans/recent

Returns the most recent scan records ordered by `created_at DESC`.

### Query Parameters

| Param | Type | Description |
|---|---|---|
| `limit` | number | Max number of records to return. Default: `10` |

### Response `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 42,
      "batch_id": "BATCH-1718678400000",
      "qr_id": "QR-1001",
      "label": "Resin A",
      "factory": "Factory 1",
      "action": "SCAN_IN",
      "scanned_by": "admin",
      "partstats": "reguler",
      "created_at": "2026-06-18T01:00:00.000Z"
    }
  ]
}
```

---

## POST /api/scans

Directly inserts a scan record and creates an associated task log entry. Intended for programmatic/system use.

> ⚠️ For station scanning, use [`POST /api/qr/process`](./qr#post-apiqrprocess) instead - it also toggles stock.

### Body

| Field | Type | Required | Description |
|---|---|---|---|
| `qr_id` | string | ✅ | QR code identifier (e.g. `QR-1001`) |
| `label` | string | ✅ | Part/batch display name |
| `factory` | string | ❌ | Factory origin |
| `scanned_by` | string | ❌ | Username or identifier. Default: `"System"` |

#### Example

```json
{
  "qr_id": "QR-1001",
  "label": "Resin A",
  "factory": "Factory 1",
  "scanned_by": "operator1"
}
```

### Response `201 Created`

```json
{ "success": true }
```

### Errors

| Code | Reason |
|---|---|
| `400` | Missing `qr_id` or `label` |
