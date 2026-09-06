import type { ReactNode } from "react";

export interface RailBeat {
  id: string;
  navLabel: string;
  navBlurb?: string;
  index?: number;
  content: ReactNode;
}

export function SplitScrollShell({ topBanner, beats, compact = false }: { topBanner: ReactNode; beats: RailBeat[]; compact?: boolean }) {
  return (
    <div>
      {topBanner}

      <div className={`flex min-w-0 flex-col ${compact ? "mt-10 gap-10 sm:mt-12 sm:gap-12" : "mt-24 gap-24 sm:mt-32 sm:gap-32"}`}>
        {beats.map((beat) => (
          <section key={beat.id} id={beat.id} className="scroll-mt-8">
            <header className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-3xl leading-[1.1] font-bold tracking-tight sm:text-5xl">
                {beat.navLabel}
              </h2>
            </header>
            <div className="mt-8 min-w-0 sm:mt-10">{beat.content}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
