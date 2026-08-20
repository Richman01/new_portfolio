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
  accentColor,
  scrollContainerRef,
}: {
  topBanner: ReactNode;
  beats: RailBeat[];
  accentColor: string;
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
}) {
  const fallbackRef = useRef<HTMLDivElement>(null);
  const containerRef = scrollContainerRef ?? fallbackRef;
  const ids = beats.map((beat) => beat.id);
  const activeId = useScrollSpy(ids, containerRef);

  return (
    <div className="@container/study">
      {topBanner}

      <nav
        aria-label="Case study sections"
        className="sticky top-0 z-20 -mx-6 mt-10 overflow-x-auto border-y border-border bg-surface/90 px-6 backdrop-blur-xl sm:mt-12"
      >
        <div className="flex min-w-max items-center gap-7">
          {beats.map((beat) => {
            const isActive = beat.id === activeId;
            return (
              <a
                key={beat.id}
                href={`#${beat.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById(beat.id)?.scrollIntoView({ block: "start", behavior: "smooth" });
                }}
                className={cn(
                  "relative py-4 text-sm whitespace-nowrap transition-colors",
                  isActive ? "font-semibold text-foreground" : "text-muted hover:text-foreground"
                )}
              >
                {beat.navLabel}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-0.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </nav>

      <div className="flex min-w-0 flex-col">
        {beats.map((beat) => (
          <section
            key={beat.id}
            id={beat.id}
            className="grid scroll-mt-16 gap-7 border-b border-border py-12 last:border-b-0 sm:py-16 @5xl/study:grid-cols-[220px_minmax(0,1fr)] @5xl/study:gap-14"
          >
            <header className="@5xl/study:sticky @5xl/study:top-20 @5xl/study:self-start">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{beat.navLabel}</h2>
            </header>
            <div className="min-w-0">{beat.content}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
