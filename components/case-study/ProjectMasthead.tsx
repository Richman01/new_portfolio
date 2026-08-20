import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import type { MediaItem } from "@/lib/types";

export function ProjectMasthead({
  title,
  description,
  role,
  date,
  color,
  icon,
  tags,
  liveUrl,
  cover,
  backButton,
}: {
  title: string;
  description: string[];
  role: string;
  date: string;
  color: string;
  icon?: string;
  tags?: string[];
  liveUrl?: string;
  cover?: MediaItem;
  backButton?: React.ReactNode;
}) {
  return (
    <header>
      {backButton && <div className="mb-8">{backButton}</div>}

      <div className="border-b border-border pb-8 sm:pb-10">
        <span aria-hidden className="mb-6 block h-1 w-10 rounded-full" style={{ backgroundColor: color }} />
        <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            {icon && (
              <div
                className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-white/20 shadow-sm sm:h-14 sm:w-14"
                style={{ backgroundColor: color }}
              >
                <Image src={icon} alt="" fill className="object-cover" sizes="56px" />
              </div>
            )}
            <h1 className="text-[clamp(2.5rem,7vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
              {title}
            </h1>
          </div>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              Visit site
              <ArrowUpRight size={15} style={{ color }} />
            </a>
          )}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.42fr)] lg:items-start lg:gap-16">
          <div className="max-w-3xl space-y-4">
            {description.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-lg leading-relaxed text-foreground sm:text-xl"
                    : "text-base leading-relaxed text-muted"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-5 text-sm lg:grid-cols-1">
            <div>
              <dt className="text-xs text-muted">Role</dt>
              <dd className="mt-1 leading-snug text-foreground">{role}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Timeline</dt>
              <dd className="mt-1 text-foreground">{date}</dd>
            </div>
            {tags && tags.length > 0 && (
              <div className="col-span-2 lg:col-span-1">
                <dt className="text-xs text-muted">Focus</dt>
                <dd className="mt-1 leading-relaxed text-foreground">{tags.join(" / ")}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      {cover && (
        <div className="mt-8 sm:mt-10">
          <ScreenMoment item={cover} />
        </div>
      )}
    </header>
  );
}
