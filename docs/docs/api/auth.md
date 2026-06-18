---
id: auth
title: Authentication
sidebar_label: Auth
---

# Authentication

Handles user credential validation and JWT token issuance.

---

## POST /api/auth/login

Validates username/password and returns a signed JWT for the admin/operator dashboard.

**Authentication required:** ❌ Public  
**Rate limited:** ✅ 5 failed attempts → 60s lockout

### Request

```http
POST /api/auth/login
Content-Type: application/json
```

#### Body

| Field | Type | Required | Description |
|---|---|---|---|
| `username` | string | ✅ | Username **or** NIK of the user |
| `password` | string | ✅ | Plaintext password (hashed server-side with SHA-256) |

#### Example

```json
{
  "username": "admin",
  "password": "yourpassword"
}
```

### Responses

#### `200 OK` - Login successful

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "username": "admin",
      "role": "admin",
      "tvFactory": "Factory A",
      "tvShift": "A",
      "tvTheme": "default"
    }
  }
}
```

**Token expiry:** 8 hours.  
**JWT payload:** `{ id, username, role, iat, exp }`

#### `400 Bad Request` - Missing fields

```json
{
  "success": false,
  "error": "Username/NIK dan password dibutuhkan"
}
```

#### `401 Unauthorized` - Wrong credentials

```json
{
  "success": false,
  "error": "Username atau password salah"
}
```

#### `429 Too Many Requests` - Rate limit exceeded

```json
{
  "success": false,
  "error": "Terlalu banyak percobaan login. Coba lagi dalam 60 detik."
}
```

**Headers on 429:**
```
Retry-After: 60
```

#### `500 Internal Server Error`

```json
{
  "success": false,
  "error": "Internal server error"
}
```

---

### Role Values

| Role | Access |
|---|---|
| `admin` | Full access to all dashboard features |
| `operator` | Limited management access |
| `usertv` | TV display only (`/tv` route) |

> **Note:** The legacy `viewer` role is automatically normalized to `usertv` on login.
