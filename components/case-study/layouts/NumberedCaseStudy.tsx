"use client";

import { useEffect, useState, type RefObject } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { PullQuote } from "@/components/case-study/PullQuote";
import { SectionMedia } from "@/components/case-study/SectionMedia";
import { AchievementCard } from "@/components/case-study/AchievementCard";
import { SplitScrollShell, type RailBeat } from "@/components/case-study/SplitScrollShell";
import { BackLink } from "@/components/shared/BackLink";
import { useLightbox } from "@/lib/LightboxContext";
import { resolveSectionLayout, type SectionVariant } from "@/lib/sectionLayout";
import { cn } from "@/lib/cn";
import type {
  Achievement,
  CaseStudyLayout,
  CaseStudySection,
  MediaItem,
  ProjectMeta,
  SectionFamily,
  StatItem,
} from "@/lib/types";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function TagPills({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function VisitSiteButton({ href, color }: { href: string; color: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      Visit site
      <ArrowUpRight size={14} style={{ color }} />
    </a>
  );
}

function ProjectBanner({
  backButton,
  icon,
  title,
  color,
  cover,
  liveUrl,
  role,
  date,
  tags,
  body,
}: {
  backButton?: React.ReactNode;
  icon?: string;
  title: string;
  color: string;
  cover?: MediaItem;
  liveUrl?: string;
  role: string;
  date: string;
  tags?: string[];
  body: string[];
}) {
  return (
    <div className="flex flex-col gap-8">
      {backButton}

      {cover?.src && (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-border sm:flex-row sm:h-64">
          <div
            className="flex shrink-0 items-center justify-center p-8 sm:w-56"
            style={{ backgroundColor: color }}
          >
            {icon && (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[28%]">
                <Image src={icon} alt="" fill className="object-cover" />
              </div>
            )}
          </div>
          <div className="relative min-h-[180px] flex-1 sm:min-h-0">
            <Image src={cover.src} alt={cover.alt} fill className="object-cover" sizes="720px" />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
          {liveUrl && <VisitSiteButton href={liveUrl} color={color} />}
        </div>

        <div className="flex flex-col gap-4">
          {body.map((paragraph, i) => (
            <p key={i} className="max-w-2xl text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-8 text-sm">
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">Role</span>
            <span className="text-foreground">{role}</span>
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">Timeline</span>
            <span className="text-foreground">{date}</span>
          </div>
        </div>

        <TagPills tags={tags} />
      </div>
    </div>
  );
}

function BulletChips({ bullets, color }: { bullets: string[]; color: string }) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {bullets.map((bullet, i) => (
        <div
          key={i}
          className="flex items-start gap-2 rounded-2xl border border-border px-4 py-3 text-sm leading-relaxed text-muted"
        >
          <Check size={14} className="mt-0.5 shrink-0" style={{ color }} />
          {bullet}
        </div>
      ))}
    </div>
  );
}

function SectionBeatBody({
  section,
  color,
  family,
  variant,
}: {
  section: CaseStudySection;
  color: string;
  family: SectionFamily;
  variant: SectionVariant;
}) {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = {
    initial: prefersReducedMotion ? undefined : { opacity: 0, y: 24 },
    whileInView: prefersReducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  const paragraphs = (
    <div className="flex flex-col gap-4">
      {section.body.map((paragraph, i) => (
        <p key={i} className={cn("leading-relaxed text-muted", family === "text-only" ? "text-lg" : "text-base")}>
          {paragraph}
        </p>
      ))}
    </div>
  );

  if (family === "text-only") {
    return (
      <motion.div {...motionProps} className="mx-auto max-w-xl border-t border-border pt-10">
        {paragraphs}
        {section.quote && <PullQuote quote={section.quote} color={color} />}
      </motion.div>
    );
  }

  if (family === "stat-forward" && section.stat) {
    return (
      <motion.div {...motionProps} className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr] lg:items-start">
        <div className="flex flex-col gap-1">
          <span className="text-5xl font-semibold leading-none sm:text-6xl" style={{ color }}>
            {section.stat.value}
          </span>
          <span className="text-sm leading-relaxed text-muted">{section.stat.label}</span>
        </div>
        <div>
          {paragraphs}
          {section.quote && <PullQuote quote={section.quote} color={color} />}
        </div>
        {section.media && (
          <div className="lg:col-span-2">
            <SectionMedia media={section.media} />
          </div>
        )}
      </motion.div>
    );
  }

  if (family === "structured-list" && section.bullets) {
    return (
      <motion.div {...motionProps}>
        {paragraphs}
        {section.quote && <PullQuote quote={section.quote} color={color} />}
        <BulletChips bullets={section.bullets} color={color} />
        <SectionMedia media={section.media} />
      </motion.div>
    );
  }

  if (family === "hero") {
    return (
      <motion.div {...motionProps}>
        {paragraphs}
        {section.quote && <PullQuote quote={section.quote} color={color} />}
        {section.stat && (
          <div className="my-6 flex items-baseline gap-4 border-y border-border py-5">
            <span className="text-3xl font-semibold leading-none sm:text-4xl" style={{ color }}>
              {section.stat.value}
            </span>
            <span className="max-w-xs text-sm leading-relaxed text-muted">{section.stat.label}</span>
          </div>
        )}
        <SectionMedia media={section.media} variant="hero" />
      </motion.div>
    );
  }

  if (family === "media-pair") {
    return (
      <motion.div {...motionProps}>
        {paragraphs}
        {section.quote && <PullQuote quote={section.quote} color={color} />}
        <SectionMedia media={section.media} variant={variant === "b" ? "weighted" : "standard"} />
      </motion.div>
    );
  }

  // "standard": single image, alternates reading order between occurrences
  return (
    <motion.div {...motionProps}>
      {variant === "b" ? (
        <>
          <SectionMedia media={section.media} />
          <div className="mt-6">{paragraphs}</div>
          {section.quote && <PullQuote quote={section.quote} color={color} />}
        </>
      ) : (
        <>
          {paragraphs}
          {section.quote && <PullQuote quote={section.quote} color={color} />}
          <SectionMedia media={section.media} />
        </>
      )}
    </motion.div>
  );
}

function sectionToBeat(
  section: CaseStudySection,
  index: number,
  color: string,
  occurrenceCounts: Partial<Record<SectionFamily, number>>
): RailBeat {
  const { family, variant } = resolveSectionLayout(section, index, occurrenceCounts);
  return {
    id: slugify(section.heading) || `section-${index}`,
    navLabel: section.heading,
    navBlurb: section.body[0],
    index: index + 1,
    content: <SectionBeatBody section={section} color={color} family={family} variant={variant} />,
  };
}

function IntroBeatContent({
  lede,
  body,
  quote,
  stats,
  color,
}: {
  lede?: string;
  body: string[];
  quote?: string;
  stats?: StatItem[];
  color: string;
}) {
  return (
    <div className="max-w-2xl">
      {lede && <p className="mb-4 text-xl leading-snug font-semibold tracking-tight">{lede}</p>}
      {body.map((paragraph, i) => (
        <p key={i} className="mb-4 text-base leading-relaxed text-muted">
          {paragraph}
        </p>
      ))}
      {quote && <PullQuote quote={quote} color={color} />}

      {stats && (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-border bg-surface p-5">
              <div className="text-3xl font-semibold sm:text-4xl" style={{ color }}>
                {stat.value}
              </div>
              <div className="mt-1 text-sm leading-relaxed text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CaseStudyList({
  project,
  caseStudy,
  onOpenAchievement,
  scrollContainerRef,
}: {
  project: ProjectMeta;
  caseStudy: Extract<CaseStudyLayout, { kind: "numbered" }>;
  onOpenAchievement: (slug: string) => void;
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
}) {
  const { cover, intro, sections, achievements } = caseStudy;
  const occurrenceCounts: Partial<Record<SectionFamily, number>> = {};

  const topBanner = (
    <ProjectBanner
      icon={project.icon}
      title={project.title}
      color={project.color}
      cover={cover}
      liveUrl={project.liveUrl}
      role={project.role}
      date={project.date}
      tags={project.tags}
      body={intro.lede ? [intro.lede] : intro.body.slice(0, 1)}
    />
  );

  const beats: RailBeat[] = [
    {
      id: "overview",
      navLabel: "Overview",
      navBlurb: intro.lede ?? intro.body[0],
      content: <IntroBeatContent lede={undefined} body={intro.body} quote={intro.quote} stats={intro.stats} color={project.color} />,
    },
    ...sections.map((section, i) => sectionToBeat(section, i, project.color, occurrenceCounts)),
  ];

  if (achievements && achievements.length > 0) {
    const achievementTitles = achievements.map((a) => a.title);
    const achievementBlurb =
      achievementTitles.length === 2
        ? `${achievementTitles[0]} and ${achievementTitles[1]}.`
        : `${achievementTitles.join(", ")}.`;

    beats.push({
      id: "selected-work",
      navLabel: "Selected Work",
      navBlurb: achievementBlurb,
      content: (
        <div className="flex flex-col gap-3">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.slug}
              achievement={achievement}
              color={project.color}
              onOpen={() => onOpenAchievement(achievement.slug)}
            />
          ))}
        </div>
      ),
    });
  }

  return <SplitScrollShell topBanner={topBanner} beats={beats} scrollContainerRef={scrollContainerRef} />;
}

function AchievementDetail({
  achievement,
  color,
  icon,
  onBack,
  backLabel,
  scrollContainerRef,
}: {
  achievement: Achievement;
  color: string;
  icon?: string;
  onBack: () => void;
  backLabel: string;
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
}) {
  const { cover, intro, sections, role, date, liveUrl, tags, summary } = achievement;
  const occurrenceCounts: Partial<Record<SectionFamily, number>> = {};

  const backButton = <BackLink onClick={onBack} label={backLabel} iconColor={color} />;

  const topBanner = (
    <ProjectBanner
      backButton={backButton}
      icon={icon}
      title={achievement.title}
      color={color}
      cover={cover}
      liveUrl={liveUrl}
      role={role}
      date={date}
      tags={tags}
      body={[summary]}
    />
  );

  const beats: RailBeat[] = [
    {
      id: "overview",
      navLabel: "Overview",
      navBlurb: intro.body[0],
      content: <IntroBeatContent body={intro.body} quote={intro.quote} color={color} />,
    },
    ...sections.map((section, i) => sectionToBeat(section, i, color, occurrenceCounts)),
  ];

  return <SplitScrollShell topBanner={topBanner} beats={beats} scrollContainerRef={scrollContainerRef} />;
}

export function NumberedCaseStudy({
  project,
  caseStudy,
  onAchievementOpenChange,
  scrollContainerRef,
}: {
  project: ProjectMeta;
  caseStudy: Extract<CaseStudyLayout, { kind: "numbered" }>;
  onAchievementOpenChange?: (open: boolean) => void;
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
}) {
  const { achievements } = caseStudy;
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const { activeItem } = useLightbox();
  const prefersReducedMotion = useReducedMotion();

  const activeAchievement = achievements?.find((a) => a.slug === activeSlug) ?? null;

  useEffect(() => {
    onAchievementOpenChange?.(activeSlug !== null);
    return () => {
      onAchievementOpenChange?.(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlug]);

  useEffect(() => {
    scrollContainerRef?.current?.scrollTo({ top: 0 });
  }, [activeSlug, scrollContainerRef]);

  useEffect(() => {
    if (!activeSlug) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && !activeItem) setActiveSlug(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSlug, activeItem]);

  return (
    <article aria-label={`${project.title} case study`} className="pt-10 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatePresence mode="wait" initial={false}>
          {activeAchievement ? (
            <motion.div
              key={activeAchievement.slug}
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AchievementDetail
                achievement={activeAchievement}
                color={project.color}
                icon={project.icon}
                onBack={() => setActiveSlug(null)}
                backLabel={`Back to ${project.title}`}
                scrollContainerRef={scrollContainerRef}
              />
            </motion.div>
          ) : (
            <motion.div
              key="__list__"
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CaseStudyList
                project={project}
                caseStudy={caseStudy}
                onOpenAchievement={setActiveSlug}
                scrollContainerRef={scrollContainerRef}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
