"use client";

import { useEffect, useState, type CSSProperties, type RefObject } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import { useLightbox } from "@/lib/LightboxContext";
import type { Achievement, CaseStudyLayout, CaseStudySection } from "@/lib/types";
import type { ProjectMeta } from "@/lib/types";
import styles from "./NumberedCaseStudy.module.css";

function ProjectHeader({ title, date, role, icon, liveUrl, color, compact = false }: {
  title: string; date?: string; role: string; icon?: string; liveUrl?: string; color?: string; compact?: boolean;
}) {
  return (
    <header className={styles.header}>
      <div
        className={`${styles.identityRow} ${color ? styles.brandHeader : ""} ${compact ? styles.detailHeader : ""}`}
        style={color ? { "--brand-color": color } as CSSProperties : undefined}
      >
        <div className={styles.identity}>
          {icon && <Image src={icon} alt="" width={color ? 112 : 40} height={color ? 112 : 40} className={styles.logo} />}
          <div>
            <h1 className={styles.title}>{title}</h1>
            {date && <p className={styles.date}>{date}</p>}
          </div>
        </div>
        {liveUrl && <a className={styles.website} href={liveUrl} target="_blank" rel="noopener noreferrer">Go to website</a>}
      </div>
      <div className={styles.role}>
        <p className={styles.label}>My role</p>
        <p>{role}</p>
      </div>
    </header>
  );
}

function StorySection({ section, compactHeading = false }: { section: CaseStudySection; compactHeading?: boolean }) {
  const media = section.media ? (Array.isArray(section.media) ? section.media : [section.media]) : [];
  return (
    <section className={`${styles.section} ${compactHeading ? styles.detailSection : ""}`}>
      <h2>{section.heading}</h2>
      <div className={styles.prose}>
        {section.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        {section.quote && <blockquote>{section.quote}</blockquote>}
        {section.stat && <p><strong>{section.stat.value}</strong> {section.stat.label}</p>}
        {section.statGrid && <ul>{section.statGrid.map((stat) => <li key={stat.label}><strong>{stat.value}</strong> {stat.label}</li>)}</ul>}
      </div>
      {media.length > 0 && <div className={styles.media}>{media.map((item, index) => <ScreenMoment key={index} item={item} frameless />)}</div>}
    </section>
  );
}

function CaseStudyList({ project, caseStudy, onOpenAchievement }: {
  project: ProjectMeta;
  caseStudy: Extract<CaseStudyLayout, { kind: "numbered" }>;
  onOpenAchievement: (slug: string) => void;
}) {
  return (
    <>
      <ProjectHeader title={project.title} date={project.date} role={project.role} icon={project.icon} liveUrl={project.liveUrl} color={project.color} />
      <StorySection section={{ heading: "Overview", body: caseStudy.intro.body }} />
      {caseStudy.sections.map((section) => <StorySection key={section.heading} section={section} />)}
      {!!caseStudy.achievements?.length && (
        <section className={styles.section}>
          <h2 className={styles.selectedWorkHeading}>Selected Work</h2>
          <div className={styles.works}>
            {caseStudy.achievements.map((achievement) => (
              <button key={achievement.slug} type="button" className={styles.work} onClick={() => onOpenAchievement(achievement.slug)}>
                <span className={styles.workTitle}>{achievement.title}</span>
                <span className={styles.workDate}>{achievement.date}</span>
                <span className={styles.workAction}>View project</span>
              </button>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function AchievementDetail({ achievement, onBack, backLabel }: {
  achievement: Achievement; onBack: () => void; backLabel: string;
}) {
  return (
    <>
      <button type="button" onClick={onBack} className={styles.back}>{backLabel}</button>
      <ProjectHeader title={achievement.title} role={achievement.role} compact />
      <StorySection section={{ heading: "Overview", body: achievement.intro.body }} compactHeading />
      {achievement.sections.map((section) => <StorySection key={section.heading} section={section} compactHeading />)}
      <button type="button" onClick={onBack} className={`${styles.back} ${styles.bottomBack}`}>{backLabel}</button>
    </>
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
  const activeAchievement = achievements?.find((achievement) => achievement.slug === activeSlug) ?? null;

  useEffect(() => {
    onAchievementOpenChange?.(activeSlug !== null);
    return () => onAchievementOpenChange?.(false);
  }, [activeSlug, onAchievementOpenChange]);

  useEffect(() => {
    scrollContainerRef?.current?.scrollTo({ top: 0 });
  }, [activeSlug, scrollContainerRef]);

  useEffect(() => {
    if (!activeSlug) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !activeItem) {
        event.stopPropagation();
        setActiveSlug(null);
      }
    }

    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [activeSlug, activeItem]);

  return (
    <article aria-label={`${project.title} case study`} className={styles.page}>
      <div className={styles.column}>
        <AnimatePresence mode="wait" initial={false}>
          {activeAchievement ? (
            <motion.div
              key={activeAchievement.slug}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AchievementDetail
                achievement={activeAchievement}
                onBack={() => setActiveSlug(null)}
                backLabel={`Back to ${project.title}`}
              />
            </motion.div>
          ) : (
            <motion.div
              key="__list__"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
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
