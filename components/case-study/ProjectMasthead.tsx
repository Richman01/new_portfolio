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
  compactOverview = false,
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
  compactOverview?: boolean;
}) {
  const monogram = title
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="text-center">
      {backButton && <div className="mb-10 flex justify-center sm:mb-12">{backButton}</div>}

      <div className="mx-auto max-w-4xl">
        <div
          aria-hidden
          className="relative mx-auto flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl text-sm font-semibold text-white sm:h-16 sm:w-16"
          style={{ backgroundColor: color }}
        >
          {icon ? <Image src={icon} alt="" fill className="object-cover" sizes="64px" /> : monogram}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted">
          <span>{role}</span>
          <span aria-hidden>/</span>
          <span>{date}</span>
        </div>

        <h1 className={`mx-auto ${compactOverview ? "mt-4" : "mt-8"} max-w-4xl font-display text-[clamp(2.75rem,6vw,4.25rem)] leading-[1.03] font-bold tracking-[-0.03em]`}>
          {title}
        </h1>

        <div className="mx-auto mt-7 max-w-3xl space-y-4">
          {compactOverview && <h2 className="text-sm font-semibold text-foreground">Overview</h2>}
          {description.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0 && !compactOverview
                  ? "text-lg leading-relaxed text-foreground/85 sm:text-xl"
                  : "text-base leading-relaxed text-muted"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {tags && tags.length > 0 && (
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted">{tags.join(" / ")}</p>
        )}

        {liveUrl && (
          <div className="mt-7 flex justify-center">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-semibold transition-[background-color,transform] hover:bg-surface-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              Visit site
              <ArrowUpRight size={15} style={{ color }} />
            </a>
          </div>
        )}
      </div>

      {cover && (
        <div className="mt-14 sm:mt-20">
          <ScreenMoment item={cover} eager />
        </div>
      )}
    </header>
  );
}
