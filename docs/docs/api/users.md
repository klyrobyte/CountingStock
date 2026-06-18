---
id: users
title: Users
sidebar_label: Users
---

# Users

CRUD operations for admin/operator user accounts.

**Base path:** `/api/users`  
**Authentication:** ✅ User JWT required for all endpoints

---

## GET /api/users

Returns all users (password hashes excluded).

### Query Parameters

| Param | Type | Description |
|---|---|---|
| `search` | string | Filter by `username`, `nik`, or `role` |

### Response `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "username": "admin",
      "nik": "12345",
      "role": "admin",
      "status": "active",
      "tv_factory": "Factory A",
      "tv_shift": "A",
      "tv_theme": "default",
      "created_at": "2026-01-01T00:00:00.000Z",
      "updated_at": "2026-06-01T00:00:00.000Z"
    }
  ]
}
```

---

## POST /api/users

Creates a new user account.

### Body

| Field | Type | Required | Description |
|---|---|---|---|
| `username` | string | ✅ | Must be unique |
| `password` | string | ✅ | Plaintext - hashed server-side (SHA-256) |
| `nik` | string | ❌ | Employee ID number |
| `role` | `"admin"` \| `"operator"` \| `"usertv"` | ❌ | Default: `"operator"` |
| `status` | `"active"` \| `"inactive"` | ❌ | Default: `"active"` |
| `tvFactory` | string | ❌ | For `usertv` role - which factory TV to show |
| `tvShift` | string | ❌ | Default: `"A"` |
| `tvTheme` | string | ❌ | Default: `"default"` |

#### Example

```json
{
  "username": "operator1",
  "password": "secure123",
  "nik": "67890",
  "role": "operator"
}
```

### Response `201 Created`

```json
{
  "success": true,
  "data": { "id": 2, "username": "operator1", "role": "operator", ... }
}
```

### Errors

| Code | Reason |
|---|---|
| `400` | Missing `username` or `password` |
| `409` | Username already taken |

---

## PUT /api/users/:id

Updates an existing user. Password is only updated if the `password` field is present.

### Params

| Param | Type | Description |
|---|---|---|
| `id` | number | User database ID |

### Body

Same fields as `POST /api/users` - `username` is required, all others optional.

### Response `200 OK`

```json
{
  "success": true,
  "data": { "id": 1, "username": "admin", ... }
}
```

---

## DELETE /api/users/:id

Permanently removes a user account.

### Params

| Param | Type | Description |
|---|---|---|
| `id` | number | User database ID |

### Response `200 OK`

```json
{ "success": true, "message": "User berhasil dihapus." }
```
