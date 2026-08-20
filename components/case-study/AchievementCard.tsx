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
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.11)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-background">
        <Image
          src={cardImage.src!}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          sizes="(min-width: 900px) 420px, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-tight tracking-tight sm:text-2xl">{title}</h3>
          <ArrowUpRight
            size={18}
            style={{ color }}
            className="mt-1 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{summary}</p>
        <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted">
          {role} / {date}
        </p>
      </div>
    </button>
  );
}
