"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLightbox } from "@/lib/LightboxContext";
import { ProjectMasthead } from "@/components/case-study/ProjectMasthead";
import type { CaseStudyLayout, MediaItem, ProjectMeta } from "@/lib/types";

function BentoTile({ item, index }: { item: MediaItem; index: number }) {
  const { open } = useLightbox();
  const prefersReducedMotion = useReducedMotion();

  if (!item.src) return null;

  return (
    <motion.button
      type="button"
      onClick={() => open(item.src!)}
      aria-label={item.label ? `Expand ${item.label}` : "Expand image"}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay: (index % 4) * 0.04 }}
      className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl border border-border bg-background transition-transform duration-200 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:mb-4"
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]"
        sizes="(min-width: 768px) 520px, 100vw"
      />
    </motion.button>
  );
}

export function BentoCaseStudy({
  project,
  caseStudy,
}: {
  project: ProjectMeta;
  caseStudy: Extract<CaseStudyLayout, { kind: "bento" }>;
}) {
  const { lede, media } = caseStudy;
  const [hero, ...gallery] = media;

  return (
    <article aria-label={`${project.title} case study`} className="pt-8 pb-24 sm:pt-12 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <ProjectMasthead
          title={project.title}
          description={[lede]}
          role={project.role}
          date={project.date}
          color={project.color}
          icon={project.icon}
          tags={project.tags}
          liveUrl={project.liveUrl}
          cover={hero}
        />

        <section className="mt-24 sm:mt-32">
          <h2 className="mb-8 text-center font-display text-3xl leading-[1.1] font-bold tracking-tight sm:mb-10 sm:text-5xl">
            Selected explorations
          </h2>
          <div className="columns-1 gap-3 md:columns-2 md:gap-4">
            {gallery.map((item, i) => (
              <BentoTile key={item.src ?? i} item={item} index={i} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
