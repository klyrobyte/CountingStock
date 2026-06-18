---
id: privileges
title: QR Privileges
sidebar_label: Privileges
---

# QR Privileges

Controls which QR codes each scanner station is allowed to scan. When a station has no privilege rows it operates in **open access** mode. Once any QR is assigned it switches to **restricted** mode.

**Base path:** `/api/privileges`  
**Authentication:** ✅ User JWT **+** `x-internal-key` header (dual-layer)

> All endpoints require both a valid Bearer JWT **and** the internal API key header.  
> Missing or wrong key → `401 Unauthorized`.

```http
Authorization: Bearer <user_token>
x-internal-key: <INTERNAL_API_KEY>
```

---

## GET /api/privileges/stations

Returns all station devices with their privilege status summary.

### Response `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "device_code": "SCAN-001",
      "name": "Scanner Pintu A",
      "location": "Gudang Utama",
      "device_role": "IN",
      "active_status": "active",
      "privilege_mode": "open",
      "privilege_count": 0
    },
    {
      "id": 2,
      "device_code": "SCAN-002",
      "privilege_mode": "restricted",
      "privilege_count": 5
    }
  ]
}
```

| `privilege_mode` | Meaning |
|---|---|
| `"open"` | Station can scan any QR |
| `"restricted"` | Station can only scan its assigned QRs |

---

## GET /api/privileges/station/:id

Returns all QR codes in the system plus their allowed/denied status for the given station.

### Params

| Param | Type | Description |
|---|---|---|
| `id` | number | Station device ID |

### Response `200 OK`

```json
{
  "success": true,
  "data": {
    "station_id": 1,
    "privilege_mode": "restricted",
    "allowed_count": 3,
    "qr_list": [
      {
        "id": 10,
        "qr_id": "QR-1010",
        "part_name": "Resin A",
        "factory": "Factory 1",
        "status": "out",
        "is_allowed": true
      },
      {
        "id": 11,
        "qr_id": "QR-1011",
        "part_name": "Resin B",
        "factory": "Factory 1",
        "status": "in",
        "is_allowed": false
      }
    ]
  }
}
```

---

## POST /api/privileges/station/:id

Saves (replaces) the privilege configuration for a station. Uses an atomic delete + batch insert.

### Params

| Param | Type | Description |
|---|---|---|
| `id` | number | Station device ID |

### Body

| Field | Type | Required | Description |
|---|---|---|---|
| `qr_ids` | `number[]` | ✅ | Array of `qr_codes.id` values to allow. Pass `[]` to reset to open access. |

#### Example - restrict station to 2 QRs

```json
{ "qr_ids": [10, 12] }
```

#### Example - reset to open access

```json
{ "qr_ids": [] }
```

### Response `200 OK`

```json
{
  "success": true,
  "message": "Privilege berhasil disimpan: 2 QR diizinkan.",
  "data": { "station_id": 1, "allowed_count": 2 }
}
```

### Errors

| Code | Reason |
|---|---|
| `400` | `qr_ids` not an array, or contains invalid IDs |
| `404` | Station not found |

---

## DELETE /api/privileges/station/:id

Resets a station back to open access by removing all its privilege rows.

### Response `200 OK`

```json
{
  "success": true,
  "message": "Privilege station berhasil direset ke default (open access).",
  "data": { "station_id": 1 }
}
```

---

## GET /api/privileges/check

Internal endpoint for checking if a specific QR is allowed for a station.

### Query Parameters

| Param | Type | Description |
|---|---|---|
| `station_id` | number | Station device ID |
| `qr_db_id` | number | `qr_codes.id` of the QR to check |

### Response `200 OK`

```json
// Open access station
{ "success": true, "data": { "allowed": true, "mode": "open" } }

// Restricted station, QR is allowed
{ "success": true, "data": { "allowed": true, "mode": "restricted" } }

// Restricted station, QR is denied
{ "success": true, "data": { "allowed": false, "mode": "restricted" } }
```
