"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import { PullQuote } from "@/components/case-study/PullQuote";
import { SectionMedia } from "@/components/case-study/SectionMedia";
import type { CaseStudyLayout, CaseStudySection, ProjectMeta } from "@/lib/types";

function SplitSectionBlock({ section, color }: { section: CaseStudySection; color: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10 max-w-2xl last:mb-0"
    >
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{section.heading}</h2>
      <div className="mt-3 flex flex-col gap-4">
        {section.body.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>

      {section.quote && <PullQuote quote={section.quote} color={color} />}

      {section.bullets && (
        <ul className="mt-4 flex flex-col gap-2">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2.5 text-base leading-relaxed text-muted">
              <span
                aria-hidden
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: color }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {section.statGrid && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {section.statGrid.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-border bg-surface p-5">
              <div className="text-3xl font-semibold sm:text-4xl" style={{ color }}>
                {stat.value}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      <SectionMedia media={section.media} />
    </motion.section>
  );
}

export function SplitCaseStudy({
  project,
  caseStudy,
}: {
  project: ProjectMeta;
  caseStudy: Extract<CaseStudyLayout, { kind: "split" }>;
}) {
  const { cover, rail, sections } = caseStudy;

  return (
    <article aria-label={`${project.title} case study`} className="pt-10 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h1>

        <div className="mt-8">
          <ScreenMoment item={cover} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-[220px_1fr] sm:gap-12">
          <aside
            className="flex flex-col gap-4 border-t-2 pt-4 sm:sticky sm:top-6 sm:self-start"
            style={{ borderColor: project.color }}
          >
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">
                Category
              </span>
              <span className="text-sm text-foreground">{rail.category}</span>
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">Date</span>
              <span className="text-sm text-foreground">{rail.date}</span>
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">Role</span>
              <span className="text-sm text-foreground">{rail.role}</span>
            </div>
            {rail.liveUrl && (
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Live site
                </span>
                <a
                  href={rail.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline decoration-border underline-offset-2 transition-colors hover:text-foreground"
                >
                  Visit site →
                </a>
              </div>
            )}
          </aside>

          <div>
            {sections.map((section, i) => (
              <SplitSectionBlock key={i} section={section} color={project.color} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
