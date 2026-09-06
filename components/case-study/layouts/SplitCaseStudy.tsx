"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { PullQuote } from "@/components/case-study/PullQuote";
import { SectionMedia } from "@/components/case-study/SectionMedia";
import { ProjectMasthead } from "@/components/case-study/ProjectMasthead";
import { SplitScrollShell, type RailBeat } from "@/components/case-study/SplitScrollShell";
import type { CaseStudyLayout, CaseStudySection, ProjectMeta } from "@/lib/types";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function SplitSectionBlock({ section, color }: { section: CaseStudySection; color: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
        {section.body.map((paragraph, i) => (
          <p key={i} className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {paragraph}
          </p>
        ))}
      </div>

      {section.quote && <PullQuote quote={section.quote} color={color} />}

      {section.bullets && (
        <ul className="mx-auto mt-9 flex max-w-2xl flex-col gap-4 text-left">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-base leading-7 text-muted">
              <Check aria-hidden size={16} className="mt-1 shrink-0" style={{ color }} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {section.statGrid && (
        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 text-center sm:mt-12 sm:grid-cols-2">
          {section.statGrid.map((stat, i) => (
            <div key={i}>
              <dt className="text-4xl font-semibold leading-none tracking-[-0.04em] sm:text-5xl" style={{ color }}>
                {stat.value}
              </dt>
              <dd className="mx-auto mt-3 max-w-xs text-sm leading-6 text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
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
  const overview = sections[0]?.heading.toLowerCase() === "overview" ? sections[0] : undefined;
  const mastheadDescription = overview?.body.slice(0, 1) ?? [];

  const beats: RailBeat[] = sections.map((section, index) => {
    const presentedSection =
      index === 0 && overview && overview.body.length > 1
        ? { ...section, body: overview.body.slice(1) }
        : section;

    return {
      id: slugify(section.heading) || `section-${index}`,
      navLabel: section.heading,
      navBlurb: section.body[0],
      content: <SplitSectionBlock section={presentedSection} color={project.color} />,
    };
  });

  return (
    <article aria-label={`${project.title} case study`} className="pt-8 pb-24 sm:pt-12 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SplitScrollShell
          topBanner={
            <ProjectMasthead
              title={project.title}
              description={mastheadDescription}
              role={rail.role}
              date={rail.date}
              color={project.color}
              tags={[rail.category]}
              liveUrl={rail.liveUrl}
              cover={cover}
            />
          }
          beats={beats}
        />
      </div>
    </article>
  );
}
