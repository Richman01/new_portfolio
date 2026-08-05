import { career } from "@/data/career";
import { cn } from "@/lib/cn";

export function CareerJourneyPanel() {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
      <p className="text-xs font-medium tracking-wide text-muted uppercase">Career journey</p>

      <ol className="mt-5 flex flex-col gap-4 border-l border-border pl-6">
        {career.map((entry, i) => (
          <li key={entry.company} className="relative">
            <span
              className={cn(
                "absolute top-2 -left-[29px] h-2.5 w-2.5 rounded-full border-2 border-surface",
                i === 0 ? "bg-foreground" : "bg-muted"
              )}
              aria-hidden
            />
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                <h3 className="text-sm font-semibold">{entry.company}</h3>
                {entry.totalDuration && (
                  <span className="shrink-0 text-xs text-muted">{entry.totalDuration}</span>
                )}
              </div>

              <div className="mt-3 flex flex-col gap-3">
                {entry.roles.map((role, i) => (
                  <div
                    key={role.title}
                    className={i > 0 ? "border-t border-border pt-3" : undefined}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                      <p className="text-sm font-medium">{role.title}</p>
                      <p className="text-xs text-muted">{role.dateRange}</p>
                    </div>
                    {role.location && <p className="text-xs text-muted">{role.location}</p>}
                    {role.bullets && (
                      <ul className="mt-2 flex flex-col gap-1">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2 text-xs leading-relaxed text-muted">
                            <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
