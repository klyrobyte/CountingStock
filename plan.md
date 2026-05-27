Fix three interconnected bugs in the TV dashboard (tv.tsx) PRIORITY PRODUCTION section.
Run fixes in the exact order listed — each step feeds into the next.

BUG #1 │ tv-mc-val shows wrong value instead of true minimum
════════════════════════════════════════════════════════

SYMPTOM:
  Given MC#2 with these parts:

    MC#2  DAPPY             O   0.0    critical
    MC#2  DUMMY PART        O   0.0    critical
    MC#2  PANEL, QTR LH     O   106.7  critical
    MC#2  RIZKY DAFFY       X   2.7    critical

  Expected  →  tv-mc-val displays: 2.7
  Actual    →  tv-mc-val displays: 0.0 ❌ wrong value

ROOT CAUSE:
  JAM = 0.0 means "no data / not started" and must be EXCLUDED before
  finding the minimum. Current code includes 0.0, so it always resolves
  to 0.0 instead of the real smallest active value.

FIX:
  const activeParts = mcGroup.filter(row => parseFloat(row.JAM) !== 0.0);
  const minJAM = activeParts.length > 0
    ? Math.min(...activeParts.map(r => parseFloat(r.JAM)))
    : 0.0; // fallback only if every part is 0.0

  → Render minJAM inside the tv-mc-val element for that MC card.

  MC#2 result after fix:
    Active parts (non-zero): 106.7, 2.7
    minJAM = 2.7  ✅  → tv-mc-val shows "2.7"


════════════════════════════════════════════════════════
BUG #2 │ ST column still shows "critical" even when JAM ≥ 4.0
════════════════════════════════════════════════════════

SYMPTOM:
  MC#2  PANEL, QTR TRIM LH  O  106.7  ❌ critical
  Should be:
  MC#2  PANEL, QTR TRIM LH  O  106.7  ✅ safe

ROOT CAUSE:
  The ST badge is rendering the raw status string from the data source
  (the hardcoded word "critical") instead of computing status from the
  JAM float value. The raw status field must be completely IGNORED.

FIX — always derive status by evaluating JAM with this function:

  function getStatus(jam) {
    const val = parseFloat(jam);
    if (val < 3.0)               return "critical";  // 0.00 – 2.99
    if (val >= 3.0 && val < 4.0) return "warning";   // 3.00 – 3.99
    if (val >= 4.0)              return "safe";       // 4.00 and above
  }

  → Apply getStatus() to EVERY row in PRIORITY PRODUCTION.
  → Re-render each row's ST badge class + label using the computed value only.
  → Never read or display the raw status string from the data for ST rendering.

  MC#2 rows after fix:
    DAPPY             JAM 0.0    → getStatus(0.0)   = critical  ✅
    DUMMY PART        JAM 0.0    → getStatus(0.0)   = critical  ✅
    PANEL, QTR LH     JAM 106.7  → getStatus(106.7) = safe      ✅
    RIZKY DAFFY       JAM 2.7    → getStatus(2.7)   = critical  ✅


════════════════════════════════════════════════════════
BUG #3 │ tv-kpi-card.safe counter does not update
════════════════════════════════════════════════════════

SYMPTOM:
  After BUG #2 is fixed, PANEL QTR LH (106.7) becomes "safe" per row,
  but tv-kpi-number inside tv-kpi-card.safe still shows 0 instead of 1.

ROOT CAUSE:
  KPI counter reads the raw hardcoded status string, or re-aggregates
  before BUG #1 and BUG #2 fixes have run — so counts are always stale.

FIX:
  KPI counts must be computed AFTER minJAM and getStatus() are resolved.
  Count is per-MC-group (not per-part row) using each group's minJAM:

  const groups = groupByMC(priorityProductionRows);

  let safeCnt = 0, warningCnt = 0, criticalCnt = 0;

  groups.forEach(mcGroup => {
    const activeParts = mcGroup.filter(r => parseFloat(r.JAM) !== 0.0);
    const minJAM = activeParts.length > 0
      ? Math.min(...activeParts.map(r => parseFloat(r.JAM)))
      : 0.0;
    const status = getStatus(minJAM);
    if (status === "safe")     safeCnt++;
    if (status === "warning")  warningCnt++;
    if (status === "critical") criticalCnt++;
  });

  document.querySelector('.tv-kpi-card.safe .tv-kpi-number').textContent     = safeCnt;
  document.querySelector('.tv-kpi-card.warning .tv-kpi-number').textContent  = warningCnt;
  document.querySelector('.tv-kpi-card.critical .tv-kpi-number').textContent = criticalCnt;

  MC#2 end-to-end result:
    minJAM of MC#2 = 2.7  →  getStatus(2.7) = "critical"
    tv-kpi-card.critical  →  count += 1  ✅
    tv-kpi-card.safe      →  count  = 0  (MC#2 group is critical, not safe)

  NOTE: tv-kpi-card.safe turns to 1 only when an MC GROUP's minJAM >= 4.0,
  not when a single row inside it has JAM >= 4.0.


════════════════════════════════════════════════════════
EXECUTION ORDER — must run in this exact sequence
════════════════════════════════════════════════════════

  [1] Group PRIORITY PRODUCTION rows by MC identifier
  [2] Filter out JAM == 0.0 per group → compute minJAM per MC
  [3] Re-render tv-mc-val for each MC card with its minJAM
  [4] Run getStatus(JAM) on every individual row → re-render ST badges
  [5] Run getStatus(minJAM) per MC group → tally safe/warning/critical
  [6] Inject tallied counts into tv-kpi-number inside each tv-kpi-card