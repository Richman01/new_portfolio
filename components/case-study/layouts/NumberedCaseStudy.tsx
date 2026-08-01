"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import { PullQuote } from "@/components/case-study/PullQuote";
import { SectionMedia } from "@/components/case-study/SectionMedia";
import type { CaseStudyLayout, CaseStudySection, ProjectMeta } from "@/lib/types";

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

export function NumberedCaseStudy({
  project,
  caseStudy,
}: {
  project: ProjectMeta;
  caseStudy: Extract<CaseStudyLayout, { kind: "numbered" }>;
}) {
  const { cover, intro, sections } = caseStudy;

  return (
    <article aria-label={`${project.title} case study`} className="pt-10 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h1>
          <div className="text-sm text-muted">
            <span>{project.role}</span>
            <span className="mx-1.5" aria-hidden>
              /
            </span>
            <span>{project.date}</span>
            {project.liveUrl && (
              <>
                <span className="mx-1.5" aria-hidden>
                  /
                </span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-2 transition-colors hover:text-foreground"
                >
                  Visit site
                </a>
              </>
            )}
          </div>
        </div>

        <div className="mt-8">
          <ScreenMoment item={cover} />
        </div>

        <div className="mt-10 max-w-2xl">
          {intro.body.map((paragraph, i) => (
            <p key={i} className="mb-4 text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          {intro.quote && <PullQuote quote={intro.quote} color={project.color} />}
        </div>

        <div className="mt-4">
          {sections.map((section, i) => (
            <NumberedSectionBlock key={i} index={i} section={section} color={project.color} />
          ))}
        </div>
      </div>
    </article>
  );
}
