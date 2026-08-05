"use client";

import { useReducedMotion } from "framer-motion";
import { useHasMounted } from "@/lib/useHasMounted";
import Scanner from "@/components/background/Scanner";

const FADE_MASK = "linear-gradient(to bottom, black 0%, transparent 100%)";

export function ScannerBackground() {
  const mounted = useHasMounted();
  const prefersReducedMotion = useReducedMotion();

  if (!mounted || prefersReducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[55vh] overflow-hidden"
      style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
      aria-hidden
    >
      <div className="pointer-events-auto" style={{ width: "100%", height: "100%" }}>
        <Scanner
          color1="#5227FF"
          color2="#FF9FFC"
          color3="#FFFFFF"
          speed={0.5}
          sweepSpeed={0.25}
          sweepWidth={1.6}
          sweepFalloff={6}
          scale={1.5}
          frequency={2}
          ripple={0.22}
          bandDensity={11}
          lineSharpness={5.5}
          glow={0.22}
          scanDirection="vertical"
          colorSpread={0.7}
          brightness={1.0}
          contrast={1.15}
          softness={1.4}
          vignette={0.45}
          scanline={true}
          grain={true}
          grainIntensity={0.05}
          opacity={1.0}
          mouseInteraction={true}
          mouseRadius={0.5}
          mouseStrength={0.5}
        />
      </div>
    </div>
  );
}
