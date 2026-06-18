---
id: qr
title: QR Codes
sidebar_label: QR Codes
---

# QR Codes

Core module for QR code generation, scanning (SCAN IN/OUT toggle), and stock management.

**Base path:** `/api/qr`  
**Authentication:** ✅ Required (user JWT or station JWT) - except `GET /info`

---

## GET /api/qr

Returns all QR codes, optionally filtered by a search term.

**Auth:** User JWT

### Query Parameters

| Param | Type | Required | Description |
|---|---|---|---|
| `search` | string | ❌ | Filters by `part_name` or `qr_id` (LIKE match) |

### Response `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "qr_id": "QR-1001",
      "batch_id": "BATCH-1718678400000",
      "part_name": "Resin A",
      "factory": "Factory 1",
      "qr_value": "50",
      "units": 50,
      "short_token": "AbCd1234",
      "status": "out",
      "created_at": "2026-06-18T00:00:00.000Z"
    }
  ]
}
```

---

## POST /api/qr/generate

Creates a new QR code for a batch of parts. Simultaneously inserts a stock row with `current_stock = 0`.

**Auth:** User JWT

### Body

| Field | Type | Required | Description |
|---|---|---|---|
| `partName` | string | ✅ | Part/material name |
| `factoryOrigin` | string | ✅ | Factory identifier |
| `value` | number | ✅ | Unit count per pallet |
| `machineOrigin` | string | ❌ | Machine that produced the parts |
| `partId` | number | ❌ | Links to `master_parts.id` for stable lookup |

#### Example

```json
{
  "partName": "Resin A",
  "factoryOrigin": "Factory 1",
  "value": 50,
  "machineOrigin": "M-101",
  "partId": 3
}
```

### Response `201 Created`

```json
{
  "success": true,
  "message": "QR Code berhasil dibuat",
  "data": {
    "batchId": "BATCH-1718678400000",
    "qrId": "QR-1001",
    "shortToken": "AbCd1234",
    "qrImageBase64": "data:image/png;base64,...",
    "partName": "Resin A",
    "factoryOrigin": "Factory 1",
    "value": 50,
    "status": "out",
    "row": { ... }
  }
}
```

> The QR image encodes **only the 8-char short token** - never a URL, IP, or JWT.

---

## POST /api/qr/regenerate

Replaces an existing QR code's token and image while preserving its `batch_id`, `qr_id`, stock, and scan history. Records the old→new token mapping in `qr_aliases` for backward compatibility.

**Auth:** User JWT

### Body

| Field | Type | Required | Description |
|---|---|---|---|
| `oldShortToken` | string | ✅ | The short token of the QR to replace |
| `partName` | string | ✅ | Updated part name |
| `factoryOrigin` | string | ✅ | Updated factory |
| `value` | number | ✅ | Updated unit count |
| `machineOrigin` | string | ❌ | Updated machine origin |
| `partId` | number | ❌ | Updated master_parts link |

### Response `200 OK`

Same shape as `POST /generate`, with `"message": "QR Code berhasil diregenerate"`.

---

## GET /api/qr/by-part/:partId

Finds the most recently created QR code linked to a `master_parts` record.

**Auth:** User JWT

### Params

| Param | Type | Description |
|---|---|---|
| `partId` | number | `master_parts.id` |

### Response `200 OK`

```json
{ "success": true, "data": { ... } }
// data is null if no QR has been generated for this part yet
```

---

## GET /api/qr/info

Resolves a short token to batch metadata. Used by hardware scanners (public).

**Authentication required:** ❌ Public  
**Auth:** None

### Query Parameters

| Param | Type | Required | Description |
|---|---|---|---|
| `token` | string | ✅ | Short token from scanned QR (8 chars) |

### Response `200 OK`

```json
{
  "success": true,
  "data": {
    "batchId": "BATCH-1718678400000",
    "partName": "Resin A",
    "factoryOrigin": "Factory 1",
    "value": 50,
    "machineOrigin": "M-101",
    "updatedAt": "2026-06-18T01:00:00.000Z",
    "currentStatus": "out",
    "nextAction": "SCAN_IN",
    "message": "Resin A is currently OUT (idle). Scanning will mark it IN.",
    "token": "AbCd1234"
  }
}
```

---

## POST /api/qr/process

The core scan endpoint. Toggles SCAN IN/OUT for a QR code. Supports force mode for station devices.

**Auth:** User JWT **or** Station JWT

### Body

| Field | Type | Required | Description |
|---|---|---|---|
| `token` | string | ✅ | Short token (≤16 chars) or full JWT (legacy) |
| `forceAction` | `"SCAN_IN"` \| `"SCAN_OUT"` | ❌ | Override auto-toggle. Stations always pass this. |
| `partstats` | `"reguler"` \| `"bcp"` | ❌ | Part category. Default: `"reguler"` |

#### Example (station scan-in)

```json
{
  "token": "AbCd1234",
  "forceAction": "SCAN_IN",
  "partstats": "reguler"
}
```

### Response `200 OK`

```json
{
  "success": true,
  "data": {
    "action": "SCAN_IN",
    "newStatus": "in",
    "message": "Resin A Berhasil di SCAN IN (50 unit).",
    "batchId": "BATCH-1718678400000",
    "partName": "Resin A",
    "factoryOrigin": "Factory 1",
    "value": 50
  }
}
```

### Errors

| Code | Error | Reason |
|---|---|---|
| `400` | `"Token required"` | Missing `token` field |
| `401` | `"Token QR Manipulasi / Invalid"` | JWT signature invalid |
| `403` | `"QR_NOT_ALLOWED"` | Station privilege restriction - this QR not in allowed list |
| `404` | `"QR tidak dikenali"` | Short token not found |
| `409` | Stock zero error | SCAN OUT attempted when `current_stock = 0` |

---

## GET /api/qr/history

Returns the 100 most recent scan events across all QR codes.

**Auth:** User JWT

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
      "created_at": "2026-06-18T01:00:00.000Z"
    }
  ]
}
```

---

## GET /api/qr/stock

Returns all stock rows with current stock levels.

**Auth:** User JWT

### Query Parameters

| Param | Type | Description |
|---|---|---|
| `search` | string | Filter by `part_name` or `qr_id` |
| `factory` | string | Filter by factory name (omit or `"All"` for no filter) |

---

## GET /api/qr/stock/stats

Returns summary statistics for the stock dashboard widget.

**Auth:** User JWT

### Response `200 OK`

```json
{
  "success": true,
  "data": {
    "totalUnits": 1250,
    "skuCount": 25,
    "emptyStock": 3
  }
}
```

---

## GET /api/qr/stock/factories

Returns all distinct factory names present in the stock table (for filter dropdowns).

**Auth:** User JWT

### Response `200 OK`

```json
{ "success": true, "data": ["Factory 1", "Factory 2"] }
```

---

## DELETE /api/qr/:id

Permanently deletes a QR code and its associated stock row.

**Auth:** User JWT

### Params

| Param | Type | Description |
|---|---|---|
| `id` | number | `qr_codes.id` |

### Response `200 OK`

```json
{ "success": true, "message": "QR Code berhasil dihapus" }
```
