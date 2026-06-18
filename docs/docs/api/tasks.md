---
id: tasks
title: Tasks
sidebar_label: Tasks
---

# Tasks

Audit log of system events (QR creation, scan in/out, etc.). Tasks are created automatically by QR and scan handlers - this endpoint is read-only for reporting.

**Base path:** `/api/tasks`  
**Authentication:** ✅ User JWT required

---

## GET /api/tasks

Returns recent task log entries ordered by creation time descending.

### Response `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "task_id": "T-1001",
      "title": "IN: Resin A (×50)",
      "type": "Scan In",
      "status": "completed",
      "user": "operator1",
      "created_at": "2026-06-18T01:00:00.000Z"
    }
  ]
}
```

#### `type` values

| Value | Trigger |
|---|---|
| `"QR Created"` | `POST /api/qr/generate` or `/regenerate` |
| `"Scan In"` | `POST /api/qr/process` with `action = SCAN_IN` |
| `"Scan Out"` | `POST /api/qr/process` with `action = SCAN_OUT` |
