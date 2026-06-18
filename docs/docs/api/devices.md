---
id: devices
title: Devices
sidebar_label: Devices
---

# Devices

Manages physical scanner station devices. Also provides the station-specific login endpoint.

**Base path:** `/api/devices`  
**Authentication:** ✅ Required (user JWT) - except `POST /station-login`

---

## GET /api/devices

Returns all registered devices ordered by status then name.

**Auth:** User JWT

### Response `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "device_code": "SCAN-001",
      "name": "Scanner Pintu A",
      "model": "Scanner",
      "type": "phone",
      "location": "Gudang Utama",
      "device_role": "IN",
      "active_status": "active",
      "status": "online",
      "battery": 85,
      "last_sync": "2026-06-18T01:00:00.000Z"
    }
  ]
}
```

---

## POST /api/devices

Creates a new scanner device.

**Auth:** User JWT

### Body

| Field | Type | Required | Description |
|---|---|---|---|
| `device_code` | string | ✅ | Unique device identifier (e.g. `SCAN-001`) |
| `name` | string | ✅ | Human-readable device name |
| `pin` | string/number | ✅ | Device PIN (hashed with SHA-256 server-side) |
| `location` | string | ❌ | Physical location description |
| `device_role` | `"IN"` \| `"OUT"` | ❌ | Default: `"IN"` |
| `model` | string | ❌ | Default: `"Scanner"` |
| `type` | string | ❌ | Default: `"phone"` |
| `active_status` | `"active"` \| `"inactive"` | ❌ | Default: `"active"` |

#### Example

```json
{
  "device_code": "SCAN-002",
  "name": "Scanner Pintu B",
  "pin": "1234",
  "location": "Gudang B",
  "device_role": "OUT"
}
```

### Response `201 Created`

```json
{
  "success": true,
  "data": { "id": 2, "device_code": "SCAN-002", ... }
}
```

### Errors

| Code | Reason |
|---|---|
| `400` | Missing `device_code`, `name`, or `pin` |
| `409` | `device_code` already exists |

---

## PUT /api/devices/:id

Partially updates a device. Only fields included in the body are changed.

**Auth:** User JWT

### Params

| Param | Type | Description |
|---|---|---|
| `id` | number | Device database ID |

### Body (all optional)

`status`, `battery`, `location`, `device_code`, `name`, `model`, `type`, `device_role`, `pin`, `active_status`

### Response `200 OK`

```json
{ "success": true }
```

---

## DELETE /api/devices/:id

Permanently removes a device record.

**Auth:** User JWT

### Response `200 OK`

```json
{ "success": true, "message": "Device berhasil dihapus." }
```

---

## POST /api/devices/station-login

Authenticates a scanner device (not a user) and returns a **station JWT** separate from the user JWT.

**Authentication required:** ❌ Public  
**Rate limited:** ✅ 5 failed attempts → 60s lockout

### Body

| Field | Type | Required | Description |
|---|---|---|---|
| `device_code` | string | ✅ | Registered device code |
| `pin` | string/number | ✅ | Device PIN |

#### Example

```json
{
  "device_code": "SCAN-001",
  "pin": "1234"
}
```

### Response `200 OK`

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "device": {
      "id": 1,
      "device_code": "SCAN-001",
      "name": "Scanner Pintu A",
      "device_role": "IN",
      "location": "Gudang Utama"
    }
  }
}
```

**Token expiry:** 12 hours.  
**JWT payload:** `{ device_id, device_code, device_name, device_role, type: "station", iat, exp }`

### Errors

| Code | Reason |
|---|---|
| `400` | Missing `device_code` or `pin` |
| `401` | Device not found, inactive, or wrong PIN |
| `429` | Rate limit exceeded |
