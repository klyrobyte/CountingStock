---
id: stock-analytics
title: Stock Analytics
sidebar_label: Stock Analytics
---

# Stock Analytics

Production analytics per machine/part, used for the TV dashboard and shift-level monitoring.

**Base path:** `/api/stock-analytics`  
**Authentication:** ✅ User JWT required

---

## GET /api/stock-analytics

Returns all stock analytics rows.

### Query Parameters

| Param | Type | Description |
|---|---|---|
| `factory` | string | Filter by factory name |

### Response `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "machine": "M-101",
      "model": "Model A",
      "partNumber": "PN-001",
      "partName": "Resin A",
      "qtyPerDay": 200,
      "stockActual": 150,
      "stockJam": 6,
      "stokJam": 6,
      "judge": "O",
      "problem": "",
      "shikake": 1,
      "qtyPerHour": 25,
      "min": 2,
      "max": 8,
      "jamUpdate": "07:00:00",
      "pic": "operator1",
      "keterangan": "",
      "factory": "Factory 1"
    }
  ]
}
```

---

## GET /api/stock-analytics/tv

Aggregated TV dashboard payload - combines mesin, stock_analytics, master_parts, and stock tables.

### Query Parameters

| Param | Type | Description |
|---|---|---|
| `factory` | string | Factory to display |
| `shift` | string | Shift label (informational only, for display) |

### Response `200 OK`

```json
{
  "success": true,
  "data": {
    "factory": "Factory 1",
    "shift": "A",
    "counts": { "critical": 2, "warning": 1, "safe": 8 },
    "gaugePercent": 72.7,
    "machines": [
      {
        "id": 1,
        "machineCode": "M-101",
        "machineName": "Mesin Injection 1",
        "status": "active",
        "isActive": true,
        "stokJam": 3,
        "cardStatus": "warning",
        "partRows": [
          { "part": "Resin A", "pn": "O", "jam": 3 }
        ]
      }
    ],
    "chartLabels": ["Resin A", "Resin B"],
    "chartData": [150, 200],
    "chartStokJam": [3, 8],
    "chartStatus": ["warning", "safe"],
    "priorities": [
      {
        "machine": "M-101",
        "partName": "Resin A",
        "partNumber": "O",
        "stokJam": 3,
        "status": "warning"
      }
    ]
  }
}
```

#### `cardStatus` values

| Value | Meaning |
|---|---|
| `"critical"` | Stock hours ≤ critical threshold |
| `"warning"` | Stock hours ≤ warning threshold |
| `"safe"` | Stock hours above warning threshold |
| `"none"` | Machine is inactive |

---

## POST /api/stock-analytics

Creates a new analytics row.

### Body

| Field | Type | Required | Description |
|---|---|---|---|
| `machine` | string | ✅ | Machine code (stored uppercased) |
| `model` | string | ❌ | Model name |
| `partNumber` | string | ❌ | Part number |
| `partName` | string | ❌ | Part display name |
| `qtyPerDay` | number | ❌ | Daily production target |
| `stockActual` | number | ❌ | Current physical stock |
| `problem` | string | ❌ | Problem description |
| `shikake` | number | ❌ | Shift coefficient. Default: `1` |
| `minVal` | number | ❌ | Minimum stock threshold |
| `pic` | string | ❌ | Person in charge |
| `keterangan` | string | ❌ | Notes |
| `factory` | string | ❌ | Factory identifier |

### Response `201 Created`

```json
{ "success": true, "data": { ... } }
```

---

## PUT /api/stock-analytics/:id

Updates an analytics row. All same fields as POST, `machine` is required.

### Response `200 OK`

```json
{ "success": true, "data": { ... } }
```

---

## DELETE /api/stock-analytics/:id

Removes an analytics row.

### Response `200 OK`

```json
{ "success": true, "message": "Deleted" }
```
