---
id: health
title: Health Check
sidebar_label: Health Check
---

# Health Check

Infrastructure endpoint for load balancers, monitoring systems, and uptime checks.

**Authentication required:** ❌ Public  
**Rate limited:** ❌ No

---

## GET /api/health

Returns current server status including database connectivity and uptime.

```http
GET /api/health
```

### Response `200 OK`

```json
{
  "status": "Sehat Wal'afiat",
  "creator": "di rancang oleh @RizkyDaffy",
  "time": "2026-06-18T01:00:00.000Z",
  "db": "ok",
  "db_latency_ms": 3,
  "uptime_s": 3600
}
```

| Field | Type | Description |
|---|---|---|
| `status` | string | Always `"Sehat Wal'afiat"` when server is up |
| `time` | ISO 8601 | Server's current UTC time |
| `db` | `"ok"` \| `"error"` | Whether the DB pool responded to `SELECT 1` |
| `db_latency_ms` | number | Round-trip time for the DB probe in milliseconds |
| `uptime_s` | number | Seconds since the Node.js process started |

### Usage Examples

**Load balancer health check:**
```
GET /api/health → 200 OK means the instance is healthy
```

**Database connectivity check:**
```json
// Healthy
{ "db": "ok", "db_latency_ms": 2 }

// DB unreachable
{ "db": "error", "db_latency_ms": 0 }
```

> The endpoint always returns **HTTP 200** regardless of DB status, so a load balancer won't remove the instance just because the DB is temporarily unreachable. Monitor the `db` field separately for alerting.
