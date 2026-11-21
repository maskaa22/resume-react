import { useEffect } from "react";

/**
 * Tracks the pointer and writes --x / --y (px) and --xp (0–1 across the
 * viewport) onto the referenced element, where every <GlowCard> inside it
 * inherits them. Updates are throttled to one per animation frame.
 */
export default function useGlowPointer(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--x", e.clientX.toFixed(1));
        el.style.setProperty("--y", e.clientY.toFixed(1));
        el.style.setProperty("--xp", (e.clientX / window.innerWidth).toFixed(3));
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
    };
  }, [ref]);
}
