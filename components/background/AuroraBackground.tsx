"use client";

import { useTheme } from "next-themes";
import { useReducedMotion } from "framer-motion";
import { useHasMounted } from "@/lib/useHasMounted";
import Aurora from "@/components/background/Aurora";

const LIGHT_PROPS = {
  colorStops: ["#f7b273", "#f28a5c", "#fbdcae"] as [string, string, string],
  blend: 1.0,
  amplitude: 0.35,
  speed: 0.25,
  opacityClass: "opacity-30",
};

const DARK_PROPS = {
  colorStops: ["#8a4a1e", "#b85c3a", "#4a2a14"] as [string, string, string],
  blend: 1.0,
  amplitude: 0.35,
  speed: 0.25,
  opacityClass: "opacity-35",
};

const FADE_MASK = "linear-gradient(to bottom, black 0%, transparent 100%)";

export function AuroraBackground() {
  const mounted = useHasMounted();
  const { resolvedTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  if (!mounted || prefersReducedMotion) return null;

  const { opacityClass, ...auroraProps } = resolvedTheme === "dark" ? DARK_PROPS : LIGHT_PROPS;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[55vh] overflow-hidden"
      style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
      aria-hidden
    >
      <div className={opacityClass} style={{ width: "100%", height: "100%" }}>
        <Aurora {...auroraProps} />
      </div>
    </div>
  );
}
