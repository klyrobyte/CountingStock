---
id: stock
title: Stock
sidebar_label: Stock
---

# Stock

Direct access to the stock table (current inventory levels per QR batch).

> Most stock operations happen automatically via `POST /api/qr/process`.  
> Use these endpoints for read-only reporting and manual overrides.

**Base path:** `/api/stock`  
**Authentication:** ✅ User JWT required

---

## GET /api/stock

Returns all stock rows.

### Query Parameters

| Param | Type | Description |
|---|---|---|
| `search` | string | Filter by `part_name` or `qr_id` |
| `factory` | string | Filter by factory name |

### Response `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "batch_id": "BATCH-1718678400000",
      "qr_id": "QR-1001",
      "part_name": "Resin A",
      "factory": "Factory 1",
      "unit_value": 50,
      "current_stock": 150,
      "trend": "up",
      "percentage": 60.00,
      "updated_at": "2026-06-18T01:00:00.000Z"
    }
  ]
}
```

| Field | Description |
|---|---|
| `current_stock` | Current total units in stock |
| `unit_value` | Units per pallet (from QR generation) |
| `trend` | `"up"`, `"down"`, or `"none"` |
| `percentage` | `current_stock / unit_value * 100`, capped at 100 |
