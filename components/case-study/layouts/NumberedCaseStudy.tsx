"use client";

import { useEffect, useState, type RefObject } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ArrowUpRight } from "lucide-react";
import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import { PullQuote } from "@/components/case-study/PullQuote";
import { SectionMedia } from "@/components/case-study/SectionMedia";
import { AchievementCard } from "@/components/case-study/AchievementCard";
import { useLightbox } from "@/lib/LightboxContext";
import type { Achievement, CaseStudyLayout, CaseStudySection, ProjectMeta } from "@/lib/types";

function VisitSiteButton({ href, color }: { href: string; color: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      Visit site
      <ArrowUpRight size={14} style={{ color }} />
    </a>
  );
}

function NumberedSectionBlock({
  index,
  section,
  color,
}: {
  index: number;
  section: CaseStudySection;
  color: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.section
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid grid-cols-1 gap-3 border-t border-border py-10 sm:grid-cols-[3.5rem_1fr] sm:gap-8"
    >
      <span className="text-sm font-medium" style={{ color }}>
        {num}
      </span>
      <div>
        <h2 className="text-lg font-semibold tracking-tight">{section.heading}</h2>
        <div className="mt-3 flex flex-col gap-4">
          {section.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        {section.quote && <PullQuote quote={section.quote} color={color} />}

        {section.stat && (
          <div className="my-6 flex items-baseline gap-4 border-y border-border py-5">
            <span className="text-5xl font-semibold leading-none" style={{ color }}>
              {section.stat.value}
            </span>
            <span className="max-w-xs text-sm leading-relaxed text-muted">{section.stat.label}</span>
          </div>
        )}

        {section.bullets && (
          <ul className="mt-4 flex flex-col gap-2">
            {section.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-base leading-relaxed text-muted">
                <span aria-hidden style={{ color }}>
                  —
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        )}

        <SectionMedia media={section.media} />
      </div>
    </motion.section>
  );
}

function CaseStudyList({
  project,
  caseStudy,
  onOpenAchievement,
}: {
  project: ProjectMeta;
  caseStudy: Extract<CaseStudyLayout, { kind: "numbered" }>;
  onOpenAchievement: (slug: string) => void;
}) {
  const { intro, sections, achievements } = caseStudy;

  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{project.role}</span>
            <span aria-hidden>/</span>
            <span>{project.date}</span>
          </div>
          {project.liveUrl && <VisitSiteButton href={project.liveUrl} color={project.color} />}
        </div>
      </div>

      <div className="mt-10 max-w-2xl">
        {intro.lede && (
          <p className="mb-4 text-xl leading-snug font-semibold tracking-tight">{intro.lede}</p>
        )}
        {intro.body.map((paragraph, i) => (
          <p key={i} className="mb-4 text-base leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
        {intro.quote && <PullQuote quote={intro.quote} color={project.color} />}
      </div>

      {intro.stats && (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {intro.stats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-border bg-surface p-5">
              <div className="text-2xl font-semibold" style={{ color: project.color }}>
                {stat.value}
              </div>
              <div className="mt-1 text-sm leading-relaxed text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        {sections.map((section, i) => (
          <NumberedSectionBlock key={i} index={i} section={section} color={project.color} />
        ))}
      </div>

      {achievements && achievements.length > 0 && (
        <div className="mt-14 border-t border-border pt-10">
          <h2 className="text-2xl font-semibold tracking-tight">Selected work at {project.title}</h2>
          <p className="mt-2 text-sm text-muted">Two things I shipped, from research to release.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <AchievementCard
                key={achievement.slug}
                achievement={achievement}
                color={project.color}
                onOpen={() => onOpenAchievement(achievement.slug)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function AchievementDetail({
  achievement,
  color,
  onBack,
  backLabel,
}: {
  achievement: Achievement;
  color: string;
  onBack: () => void;
  backLabel: string;
}) {
  const { cover, intro, sections, role, date, liveUrl } = achievement;

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-surface-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      >
        <ChevronLeft size={16} style={{ color }} />
        {backLabel}
      </button>

      <div className="mt-6 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{achievement.title}</h1>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{role}</span>
            <span aria-hidden>/</span>
            <span>{date}</span>
          </div>
          {liveUrl && <VisitSiteButton href={liveUrl} color={color} />}
        </div>
      </div>

      <div className="mt-8 max-w-2xl">
        {intro.body.map((paragraph, i) => (
          <p key={i} className="mb-4 text-base leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
        {intro.quote && <PullQuote quote={intro.quote} color={color} />}
      </div>

      {cover && (
        <div className="mt-8">
          <ScreenMoment item={cover} />
        </div>
      )}

      <div className="mt-4">
        {sections.map((section, i) => (
          <NumberedSectionBlock key={i} index={i} section={section} color={color} />
        ))}
      </div>
    </div>
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
      if (e.key === "Escape" && !activeItem) setActiveSlug(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSlug, activeItem]);

  return (
    <article aria-label={`${project.title} case study`} className="pt-10 pb-24">
      <div className="mx-auto max-w-4xl px-6">
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
                onBack={() => setActiveSlug(null)}
                backLabel={`Back to ${project.title}`}
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
              <CaseStudyList project={project} caseStudy={caseStudy} onOpenAchievement={setActiveSlug} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
