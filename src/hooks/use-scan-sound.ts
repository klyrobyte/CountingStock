/**
 * Scan sound hook - plays audio feedback for QR scan events.
 *
 * Sound mapping:
 *  - Scan attempt (input received)  → notification/info
 *  - Scan success                   → notification/success
 *  - Scan failed / any error        → notification/warning
 *
 * All sounds play at maximum volume (1.0) with no delay.
 * Uses react-sounds (backed by Howler.js) which pre-loads sounds so
 * playback starts in the exact same tick as the event callback fires.
 */
import { useSound } from "react-sounds";

const MAX_VOL = { volume: 1.0 };

export function useScanSound() {
  const { play: playInfo } = useSound("notification/info", MAX_VOL);
  const { play: playSuccess } = useSound("notification/success", MAX_VOL);
  const { play: playWarning } = useSound("notification/warning", MAX_VOL);

  return {
    /** Play when a scan attempt begins (QR detected / input received) */
    playInfo: () => void playInfo(MAX_VOL),
    /** Play when the scan result is a success */
    playSuccess: () => void playSuccess(MAX_VOL),
    /** Play when the scan fails or encounters any error */
    playWarning: () => void playWarning(MAX_VOL),
  };
}
