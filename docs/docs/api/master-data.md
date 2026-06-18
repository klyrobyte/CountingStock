---
id: master-data
title: Master Data
sidebar_label: Master Data
---

# Master Data

Lookup tables for parts, machines, categories, models, customers, and factories. All follow the same CRUD pattern.

**Authentication:** ✅ User JWT required for all endpoints

---

## Master Parts - `/api/master-parts`

Canonical part registry. QR codes link to master parts via `part_id`.

### GET /api/master-parts

Returns all master parts, optionally filtered.

#### Query Parameters

| Param | Type | Description |
|---|---|---|
| `search` | string | Filter by `part_name` or `part_number` |

#### Response `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "part_name": "Resin A",
      "part_number": "PN-001",
      "machine": "M-101",
      "factory": "Factory 1",
      "created_at": "2026-01-01T00:00:00.000Z"
    }
  ]
}
```

### POST /api/master-parts

Creates a new master part entry.

#### Body

| Field | Type | Required |
|---|---|---|
| `part_name` | string | ✅ |
| `part_number` | string | ❌ |
| `machine` | string | ❌ |
| `factory` | string | ❌ |

### PUT /api/master-parts/:id - Update a part
### DELETE /api/master-parts/:id - Remove a part

---

## Mesin (Machines) - `/api/mesin`

Machine registry used by the TV dashboard.

### GET /api/mesin

Returns all machines, optionally filtered by `factory`.

#### Response `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "machine_code": "M-101",
      "machine_name": "Mesin Injection 1",
      "factory": "Factory 1",
      "status": "active"
    }
  ]
}
```

### POST /api/mesin

| Field | Type | Required |
|---|---|---|
| `machine_code` | string | ✅ |
| `machine_name` | string | ✅ |
| `factory` | string | ❌ |
| `status` | `"active"` \| `"inactive"` | ❌ |

### PUT /api/mesin/:id - Update a machine
### DELETE /api/mesin/:id - Remove a machine

---

## Categories - `/api/categories`

### GET /api/categories - List all categories
### POST /api/categories - Create (`{ name }`)
### PUT /api/categories/:id - Update
### DELETE /api/categories/:id - Delete

---

## Models - `/api/models`

### GET /api/models - List all models
### POST /api/models - Create (`{ name }`)
### PUT /api/models/:id - Update
### DELETE /api/models/:id - Delete

---

## Customers - `/api/customers`

### GET /api/customers - List all customers
### POST /api/customers - Create (`{ name }`)
### PUT /api/customers/:id - Update
### DELETE /api/customers/:id - Delete

---

## Factories - `/api/factories`

### GET /api/factories - List all factories
### POST /api/factories - Create (`{ name }`)
### PUT /api/factories/:id - Update
### DELETE /api/factories/:id - Delete

---

## Standard Response Pattern

All master data endpoints follow the same response shape:

```json
// List
{ "success": true, "data": [ ... ] }

// Create/Update - returns the created/updated row
{ "success": true, "data": { "id": 1, "name": "...", ... } }

// Delete
{ "success": true, "message": "Berhasil dihapus." }

// Duplicate entry
{ "success": false, "error": "Nama sudah digunakan." }
```
