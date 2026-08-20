"use client";

import { useEffect, useState, type RefObject } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { PullQuote } from "@/components/case-study/PullQuote";
import { SectionMedia } from "@/components/case-study/SectionMedia";
import { AchievementCard } from "@/components/case-study/AchievementCard";
import { ProjectMasthead } from "@/components/case-study/ProjectMasthead";
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
    <ProjectMasthead
      title={title}
      description={body}
      role={role}
      date={date}
      color={color}
      icon={icon}
      tags={tags}
      liveUrl={liveUrl}
      cover={cover}
      backButton={backButton}
    />
  );
}

function BulletChips({ bullets, color }: { bullets: string[]; color: string }) {
  return (
    <ul className="mt-7 border-y border-border">
      {bullets.map((bullet, i) => (
        <li
          key={i}
          className="flex items-start gap-3 border-b border-border py-4 text-base leading-relaxed text-muted last:border-b-0"
        >
          <span
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: `${color}18`, color }}
          >
            <Check size={13} />
          </span>
          {bullet}
        </li>
      ))}
    </ul>
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
      <motion.div {...motionProps} className="max-w-3xl">
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
    <div className="max-w-3xl">
      {lede && <p className="mb-4 text-xl leading-snug font-semibold tracking-tight">{lede}</p>}
      {body.map((paragraph, i) => (
        <p key={i} className="mb-4 text-base leading-relaxed text-muted">
          {paragraph}
        </p>
      ))}
      {quote && <PullQuote quote={quote} color={color} />}

      {stats && (
        <dl className="mt-9 grid grid-cols-1 border-y border-border sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border-b border-border py-5 last:border-b-0 sm:border-r sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:border-r-0"
            >
              <dt className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color }}>
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
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
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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

  return (
    <SplitScrollShell
      topBanner={topBanner}
      beats={beats}
      accentColor={project.color}
      scrollContainerRef={scrollContainerRef}
    />
  );
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

  return (
    <SplitScrollShell
      topBanner={topBanner}
      beats={beats}
      accentColor={color}
      scrollContainerRef={scrollContainerRef}
    />
  );
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
      if (e.key === "Escape" && !activeItem) {
        // Capture-phase + stopPropagation so this layer wins over the
        // mobile drawer's own built-in (Base UI) Escape handling, which
        // would otherwise intercept the event first and swallow it silently.
        e.stopPropagation();
        setActiveSlug(null);
      }
    }
    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [activeSlug, activeItem]);

  return (
    <article aria-label={`${project.title} case study`} className="pt-8 pb-24 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
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
