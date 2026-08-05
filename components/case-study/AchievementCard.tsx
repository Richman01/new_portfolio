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
  const { title, summary, role, date, cardImage } = achievement;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-3 text-left transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:gap-5 sm:p-4"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl sm:h-24 sm:w-24">
        <Image
          src={cardImage.src!}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          sizes="96px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="truncate text-base font-bold tracking-tight sm:text-lg">{title}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">{summary}</p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted">
            {role}
          </span>
          <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted">
            {date}
          </span>
        </div>
      </div>

      <ArrowUpRight
        size={16}
        style={{ color }}
        className="ml-auto hidden shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block"
      />
    </button>
  );
}
