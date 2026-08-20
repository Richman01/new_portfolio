"use client";

import { motion, useReducedMotion } from "framer-motion";
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
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-3xl"
    >
      <div className="flex flex-col gap-4">
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
        <dl className="mt-8 grid grid-cols-1 border-y border-border sm:grid-cols-2">
          {section.statGrid.map((stat, i) => (
            <div
              key={i}
              className="border-b border-border py-6 last:border-b-0 odd:sm:pr-6 even:sm:border-l even:sm:pl-6 [&:nth-last-child(-n+2)]:sm:border-b-0"
            >
              <dt className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color }}>
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{stat.label}</dd>
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
    <article aria-label={`${project.title} case study`} className="pt-8 pb-24 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
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
          accentColor={project.color}
        />
      </div>
    </article>
  );
}
