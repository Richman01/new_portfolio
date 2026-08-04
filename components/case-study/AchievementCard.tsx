"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Achievement } from "@/lib/types";

export function AchievementCard({
  achievement,
  color,
  onOpen,
}: {
  achievement: Achievement;
  color: string;
  onOpen: () => void;
}) {
  const { cardImage, title, summary, role, date } = achievement;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-border">
        {cardImage.src && (
          <Image
            src={cardImage.src}
            alt={cardImage.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 360px, 100vw"
          />
        )}
        <span className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/5" />
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3.5">
        <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-muted">{summary}</p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <div className="truncate text-[11px] text-muted">
            <span>{role}</span>
            <span className="mx-1" aria-hidden>
              /
            </span>
            <span>{date}</span>
          </div>

          <span
            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium transition-colors group-hover:bg-surface-hover"
            style={{ borderColor: color, color }}
          >
            View
            <ArrowUpRight
              size={11}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </button>
  );
}
