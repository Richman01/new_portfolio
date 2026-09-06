"use client";

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
  const { title, date } = achievement;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex w-full flex-col justify-between rounded-xl border border-border bg-surface p-5 text-left transition-[background-color,transform] duration-200 hover:bg-surface-hover active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl leading-tight font-bold tracking-tight">{title}</h3>
        <ArrowUpRight
          size={18}
          style={{ color }}
          className="mt-1 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      <p className="mt-5 text-sm leading-6 text-muted">{date}</p>
    </button>
  );
}
