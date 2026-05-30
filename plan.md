**Prompt untuk AI Coding Agent:**

---

## Bug Report: Edit Part Creates Duplicate Stock Instead of Updating Existing

### What's Happening
When a user edits a Master Part at `/master-data/create?editId=[id]` and changes the part name (e.g. `"Daffy Alfajr"` → `"DAFFY ALFAJRi"`), the system creates a **brand new stock entry** (QR-1005) instead of updating the existing one (QR-1003).

**Result at `/view-stock` after edit:**
```
Daffy Alfajr   | QR-1003 | Factory 2 | 20 Total Stock | Unit: 10/scan  ← orphaned, old
DAFFY ALFAJRi  | QR-1005 | Factory 2 | 0 Total Stock  | Unit: 10/scan  ← new, empty
```

**Expected result:**
```
DAFFY ALFAJRi  | QR-1003 | Factory 2 | 20 Total Stock | Unit: 10/scan  ← same record, updated name
```

---

### Root Cause to Investigate
The stock record is most likely being **looked up or created using `part_name` as the key** instead of `batch_id` or `qr_id`. When the name changes, the system doesn't find the old record by name, so it inserts a new one instead of updating.

**Check these locations:**
1. `POST /api/qr/regenerate` — verify that the stock `UPDATE` is using `WHERE batch_id = ?`, not `WHERE part_name = ?`
2. Any stock initialization logic triggered after QR generation — confirm it checks for existing stock by `batch_id` before doing an `INSERT`
3. The `generateQrCode` mutation on the frontend — in edit mode, confirm it is calling `regenerateQrCode` (not `generateQrCode` which creates a new record from scratch)

---

### What Needs to Be Fixed

**Rule: Stock identity must be tied to `batch_id`, never to `part_name`**

1. **`POST /api/qr/regenerate`**
   - The `UPDATE stock SET part_name = ?, ... WHERE batch_id = ?` must be the only write to stock
   - Must **never** `INSERT` a new stock row if one already exists for that `batch_id`
   - Add a guard: `INSERT INTO stock (...) ... ON CONFLICT (batch_id) DO UPDATE SET part_name = ...` OR check existence before insert

2. **Edit mode in `/master-data/create?editId=[id]`**
   - Confirm the submit handler calls `regenerateQrCode.mutateAsync(...)` — not `generateQrCode.mutateAsync(...)`
   - The condition should be: `if (editId && existingShortToken) → regenerate` else `→ generate new`
   - Log/throw an explicit error if `editId` is present but `existingShortToken` is not found, so it fails visibly instead of silently creating a new QR

3. **Stock initialization after QR generation**
   - If there's a trigger or post-generation hook that initializes a stock row, it must check:
     ```sql
     INSERT INTO stock (batch_id, part_name, ...)
     VALUES (?, ?, ...)
     ON CONFLICT (batch_id) DO UPDATE SET part_name = EXCLUDED.part_name, ...
     ```
   - Never a plain `INSERT` without conflict handling

---

### Constraints
- Do **not** delete or merge the orphaned duplicate stock records automatically — leave data cleanup as a manual admin action
- Do **not** change the stock `current_stock` value or scan history during this fix
- Balanced changes only — fix the lookup key and guard logic, do not restructure the QR or stock systems

---

### Verification Steps
1. Create a part `"Daffy Alfajr"` with unit value `10` → scan it until stock = `20`
2. Go to `/master-data/create?editId=[id]` → change name to `"DAFFY ALFAJRi"` → Save
3. Go to `/view-stock` → confirm only **one** stock entry exists, with name `"DAFFY ALFAJRi"` and stock = `20`
4. Confirm the QR token has changed (new QR image) but `batch_id` is the same
5. Scan the old QR → confirm it resolves via `qr_aliases` to the new token and processes correctly