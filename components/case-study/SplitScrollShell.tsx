"use client";

import { useRef, type ReactNode, type RefObject } from "react";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { cn } from "@/lib/cn";

export interface RailBeat {
  id: string;
  navLabel: string;
  navBlurb?: string;
  /** 1-based position within the real section sequence; omitted for Overview/Selected Work beats. */
  index?: number;
  content: ReactNode;
}

export function SplitScrollShell({
  topBanner,
  beats,
  scrollContainerRef,
}: {
  topBanner: ReactNode;
  beats: RailBeat[];
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
}) {
  const fallbackRef = useRef<HTMLDivElement>(null);
  const containerRef = scrollContainerRef ?? fallbackRef;
  const ids = beats.map((beat) => beat.id);
  const activeId = useScrollSpy(ids, containerRef);

  return (
    <div className="@container/study">
      {topBanner}

      <div className="mt-12 @5xl/study:grid @5xl/study:grid-cols-[1fr_240px] @5xl/study:items-start @5xl/study:gap-16">
        <div className="flex min-w-0 flex-col gap-16">
          {beats.map((beat) => (
            <section key={beat.id} id={beat.id} className="scroll-mt-8">
              <div className="mb-4 flex items-baseline gap-3 @5xl/study:hidden">
                {beat.index && (
                  <span className="text-sm font-medium tabular-nums text-muted/50">
                    {String(beat.index).padStart(2, "0")}
                  </span>
                )}
                <h2 className="text-2xl font-semibold tracking-tight">{beat.navLabel}</h2>
              </div>
              {beat.content}
            </section>
          ))}
        </div>

        <aside className="mt-10 hidden flex-col gap-8 @5xl/study:sticky @5xl/study:top-8 @5xl/study:mt-0 @5xl/study:flex">
          <div>
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-wider text-muted">
              On this page
            </span>
            <nav className="flex flex-col gap-1">
              {beats.map((beat) => {
                const isActive = beat.id === activeId;
                return (
                  <a
                    key={beat.id}
                    href={`#${beat.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(beat.id)?.scrollIntoView({ block: "start", behavior: "smooth" });
                    }}
                    className={cn(
                      "flex items-baseline gap-2 py-1 text-sm transition-colors",
                      isActive ? "font-semibold text-foreground" : "text-muted hover:text-foreground"
                    )}
                  >
                    {beat.index && <span className="text-[11px] tabular-nums text-muted/40">{beat.index}</span>}
                    {beat.navLabel}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
