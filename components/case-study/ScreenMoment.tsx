"use client";

import Image from "next/image";
import { useLightbox } from "@/lib/LightboxContext";
import type { MediaItem } from "@/lib/types";

export function ScreenMoment({ item }: { item: MediaItem }) {
  const { open } = useLightbox();

  if (item.videoSrc) {
    return (
      <div
        className="overflow-hidden rounded-2xl border border-border shadow-sm"
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
      className="group relative block w-full overflow-hidden rounded-2xl border border-border shadow-sm transition-shadow duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
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
