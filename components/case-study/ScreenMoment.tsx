"use client";

import Image from "next/image";
import { useLightbox } from "@/lib/LightboxContext";
import { cn } from "@/lib/cn";
import type { MediaItem } from "@/lib/types";

export function ScreenMoment({ item, frameless = false }: { item: MediaItem; frameless?: boolean }) {
  const { open } = useLightbox();

  if (item.videoSrc) {
    return (
      <div
        className={cn("overflow-hidden rounded-2xl", !frameless && "border border-border shadow-sm")}
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
      >
        <video controls className="h-full w-full">
          <source src={item.videoSrc} />
        </video>
      </div>
    );
  }

  if (!item.src) return null;

  return (
    <button
      type="button"
      onClick={() => open(item.src!)}
      aria-label={item.label ? `Expand ${item.label}` : "Expand image"}
      className={cn(
        "group relative block w-full overflow-hidden rounded-2xl transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        !frameless && "border border-border shadow-sm hover:shadow-lg"
      )}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
        sizes="(min-width: 1024px) 720px, 100vw"
      />
    </button>
  );
}
