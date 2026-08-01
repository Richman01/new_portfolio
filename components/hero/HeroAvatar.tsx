"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { PlaceholderBlock } from "@/components/shared/PlaceholderBlock";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { useHasMounted } from "@/lib/useHasMounted";

const IMAGES = {
  light: ["/images/hero/light-1.png", "/images/hero/light-2.png"],
  dark: ["/images/hero/dark-1.png", "/images/hero/dark-2.png"],
};

const DEFAULT_SIZE_CLASSNAME = "h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24";

export function HeroAvatar({ sizeClassName = DEFAULT_SIZE_CLASSNAME }: { sizeClassName?: string }) {
  const [variant, setVariant] = useState<0 | 1>(0);
  const { resolvedTheme } = useTheme();
  const mounted = useHasMounted();

  const src = IMAGES[mounted && resolvedTheme === "dark" ? "dark" : "light"][variant];

  return (
    <button
      type="button"
      onClick={() => setVariant((v) => (v === 0 ? 1 : 0))}
      aria-label="Show a different photo"
      className={cn(
        "overflow-hidden rounded-full transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        sizeClassName
      )}
    >
      <PlaceholderBlock sizeVariant="hero-avatar" src={src} alt={`${site.name} portrait`} priority />
    </button>
  );
}
