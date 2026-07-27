---
id: intro
title: API Overview
sidebar_label: Overview
slug: /api
---

# Sugity Inventory QR System - API Reference

This document covers every REST API endpoint exposed by the Express server (`server/`).

## Base URL

| Environment | Base URL |
|---|---|
| **Local development** | `http://localhost:4000 //ganti endpoint ini saat deployment/api` |
| **Via Vite proxy** | `/api` (proxied automatically by `vite.config.ts`) |
| **Production** | Your configured domain + `/api` |

---

## Authentication Model

The API uses two separate **Bearer JWT** authentication flows:

| Flow | Token Source | Scope |
|---|---|---|
| **User auth** | `POST /api/auth/login` | Admin/operator dashboard routes |
| **Station auth** | `POST /api/devices/station-login` | Scanner station routes only |

Include the token in every protected request:
```http
Authorization: Bearer <token>
```

### Public routes (no token required)

| Path | Reason |
|---|---|
| `POST /api/auth/login` | Credential exchange |
| `POST /api/devices/station-login` | Device credential exchange |
| `GET /api/health` | Infrastructure check |
| `GET /api/qr/info` | Public QR lookup for hardware scanners |

---

## Standard Response Format

All endpoints return JSON in this shape:

```json
// Success
{ "success": true, "data": { ... } }

// Error
{ "success": false, "error": "Human-readable message" }
```

---

## Rate Limiting

`POST /api/auth/login` and `POST /api/devices/station-login` are rate-limited:

- **Threshold:** 5 consecutive `401` responses from the same IP
- **Lockout:** 60 seconds
- **Response:** `429 Too Many Requests` with `Retry-After` header

---

## Endpoint Groups

| Group | Prefix | Description |
|---|---|---|
| [Auth](./auth) | `/api/auth` | User login |
| [Devices](./devices) | `/api/devices` | Device management + station login |
| [QR Codes](./qr) | `/api/qr` | QR generation, scanning, stock |
| [Users](./users) | `/api/users` | User CRUD |
| [Scans](./scans) | `/api/scans` | Scan record access |
| [Stock Analytics](./stock-analytics) | `/api/stock-analytics` | Production analytics + TV dashboard |
| [Privileges](./privileges) | `/api/privileges` | Station QR access control |
| [Master Data](./master-data) | Various | Parts, machines, categories, etc. |
| [Tasks](./tasks) | `/api/tasks` | Audit task log |
| [Health](./health) | `/api/health` | Server health check |
