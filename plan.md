# 🚀 BIG UPDATE — Technical Specification

> **CRITICAL RULE FOR AI AGENT:**
> ⚠️ DO NOT break, overwrite, or replace any existing working code.
> All changes must be **additive or adjustments** only. Preserve current logic unless explicitly told to replace it.

---

## 1. Rename Role: `viewer` → `usertv`

- Rename the user role `"viewer"` to `"usertv"` across the entire codebase (DB schema, auth logic, guards, seed data, etc.).
- This role represents a **TV display account**.
- Ensure all role-based checks that previously referenced `"viewer"` now reference `"usertv"`.

---

## 2. Special Login Redirect for `usertv` Role

**Flow:**
1. User enters `usertv` credentials on `/login` page and clicks Login.
2. Instead of redirecting to the main app dashboard, the system detects the `usertv` role.
3. Redirect to:
   ```
   /tv?fac=[factories]&shift=[A/B]&theme=[default/dark/white]
   ```
   - `fac` = factory assigned to that usertv account
   - `shift` = shift assigned (A or B)
   - `theme` = display theme (default / dark / white)

- Do **not** change the regular user login flow.

---

## 3. Convert `/tv` Page from `stock_tv.html` → TSX Page

- Create a new Next.js/React TSX page at route `/tv`.
- Accept and read query params: `fac`, `shift`, `theme`.
- Replicate all UI/logic from `stock_tv.html` into the TSX component.
- Apply `theme` query param to control the page's visual theme (default / dark / white).
- All data displayed must be **scoped to the `fac` (factory)** query param.

---

## 4. Add Factories Dropdown on `/mesin/create` (and `?editId=[...]`)

- On the machine create/edit page (`/mesin/create` or `/mesin/create?editId=[id]`), add a **Factories dropdown field**.
- The dropdown options must be **dynamically fetched** from the `/factories` endpoint (or factories DB table).
- When editing (`editId`), pre-fill the dropdown with the machine's currently assigned factory.

---

## 5. "Minimum Stock / Machine" — Filter by Factory

- The **Minimum Stock / Machine** section must display machines **scoped to the factory** selected in the factories dropdown on `/mesin/create`.
- Only machines belonging to the selected factory should appear in this section.

---

## 6. New Database Table: `stock_analytics`

Create a new DB table named `stock_analytics` with the following columns:

| Column | Label |
|--------|-------|
| A | Machine |
| B | Model |
| C | Part Number |
| D | Part Name |
| E | Qty/Day |
| F | Stock Actual |
| G | Stok Jam (Stock Hours) |
| H | Judge |
| I | Problem |
| J | Shikake |
| K | Qty/Hour |
| L | Min |
| M | Max |
| N | Jam Update (Update Time) |
| O | PIC |
| P | Ket (Keterangan / Notes) |

> Do not drop or alter any existing tables. Only create this new one.

---

## 7. Status Counters: Critical / Warning / Safe

The three status counters on the `/tv` page work as follows:

```
Critical < 2JAM   → [count] PARTS
Warning 2–4JAM    → [count] PARTS
Safe > 4JAM       → [count] PARTS
```

**Logic:**
- These counters read from **Minimum Stock / Machine** stock statuses.
- Count each machine's stock hour (`Stok Jam`) and classify:
  - `Critical` → Stok Jam **< 2 hours**
  - `Warning`  → Stok Jam **≥ 2 and ≤ 4 hours**
  - `Safe`     → Stok Jam **> 4 hours**
- Display the count dynamically based on real-time data.

---

## 8. MC-Card Logic in "Minimum Stock / Machine"

Each machine card (`mc-card`) must:

### If machine is **inactive/offline** (set as inactive in `/mesin/create`):
```
MC#[n]
—
N/A Running / Reset
```
- `mc-icon` shows: `—`

### If machine is **active**:
Display the machine's `Stok Jam` value and classify it:

| Stok Jam Range | Card Status | mc-icon |
|----------------|-------------|---------|
| ≤ 2 hours | 🔴 **Critical** | 💔 |
| > 2 and ≤ 4 hours | 🟡 **Warning** | ⚠️ |
| > 4 hours | 🟢 **Safe** | 💚 |
| Inactive / Offline | ⚫ **N/A** | — |

- The mc-card background/style must change visually based on status.
- Only read from the machine's actual stock status value (Stok Jam).

---

## 9. Gauge & Ratio Stock Chart (`gauge-container` / `chart-wrapper`)

- The **gauge-container** and **Ratio Stock Part by Part** chart (`chart-wrapper`) must be driven by **Minimum Stock / Machine** data.
- Do not use hardcoded values — bind them to live machine stock data.

---

## 10. "PRIORITY PRODUCTION" / `empty-state` — Auto Item List

- The **PRIORITY PRODUCTION** section (currently showing as `empty-state`) must display a **table/item list** automatically populated from **Minimum Stock / Machine**.
- Items that appear here:
  - All machines/parts with **Critical** status appear first.
  - Followed by **Warning** status items.
  - Acts as a quick summary for production priority.
- Show relevant columns: Machine, Part Name, Part Number, Stok Jam, Status.

---

## 11. Auto-Refresh Every 3 Seconds

- All data on the `/tv` page must **automatically refresh every 3 seconds**.
- Use `setInterval` or equivalent polling mechanism.
- Refresh should update: mc-cards, status counters (Critical/Warning/Safe), gauge, chart, and Priority Production list.
- Do not cause full page reloads — use client-side data fetching (e.g., `fetch` / SWR with `refreshInterval`).

---

## 12. Chart Labels from `/view-stock` (Scoped by Factory)

Currently the chart uses hardcoded labels:
```js
labels: ['AX-200', 'BY-450', 'CZ-100', 'DV-900', ...]
```

**Replace with dynamic labels:**
- Fetch all data from `/view-stock`.
- Filter by the **factory** matching the `fac` query param from the current `/tv?fac=...` URL.
- Use the filtered results as the chart labels and dataset.
- Example: `/tv?fac=Factory 1&shift=A&theme=default` → chart labels = all items from `/view-stock` scoped to `Factory 1`.

---

## 13. Formulas for `stock_analytics` Calculated Fields

Apply these formulas when computing or displaying stock analytics data:

### G — Stok Jam (Stock Hours / Ratio)
```
Stok Jam = Stock Actual / Qty Per Day * 8
→ Take the smallest value
```

### H — Judge
```
IF Stok Jam < 4 → "NG / ✖"
ELSE            → "OK"
```

### K — Qty/Hour
```
Qty/Hour = Qty Per Day / 8
```

### L — Min
```
(formula to be confirmed — leave as configurable / placeholder for now)
```

### M — Max
```
Max = (Qty Per Day / Shikake / Qty Per Hour) + Min + 2
```


---

## 14. Shikake Management Page

Add a new management page for **Shikake** settings:

- **Menu location:** Sidebar → "Management" group → new item: **"Shikake Management"**
- **Route:** `/shikake` (or `/management/shikake`)
- **UI:** Same layout/style as `/master-data` page.
- **Function:** Allow users to view, add, edit, and delete Shikake values for each master data item.
- Keep it simple — CRUD only, consistent with existing master-data UI patterns.

---

## Summary Checklist for AI Agent

| # | Task | Key Files to Touch |
|---|------|--------------------|
| 1 | Rename `viewer` → `usertv` | auth, DB, guards, seed |
| 2 | Login redirect for `usertv` | login handler / middleware |
| 3 | `/tv` TSX page from HTML | new page file + query params |
| 4 | Factories dropdown on `/mesin/create` | mesin create/edit page |
| 5 | Minimum Stock filtered by factory | stock section component |
| 6 | New `stock_analytics` DB table | migration / schema |
| 7 | Critical/Warning/Safe counters | tv page components |
| 8 | MC-Card active/inactive logic | mc-card component |
| 9 | Gauge & chart bound to live data | gauge/chart component |
| 10 | Priority Production list | empty-state / tv page |
| 11 | 3-second auto-refresh | tv page data fetching |
| 12 | Dynamic chart labels from `/view-stock` | chart component |
| 13 | Stock analytics formulas | analytics logic / service |
| 14 | Shikake Management page | new page + sidebar menu |

---

> **Reminder:** Work incrementally. Validate each change does not break existing routes, auth, or data flows before proceeding to the next point.