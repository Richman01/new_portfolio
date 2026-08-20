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
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay: (index % 6) * 0.04 }}
      className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:mb-5"
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
        sizes="(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 100vw"
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

  return (
    <article aria-label={`${project.title} case study`} className="pt-8 pb-24 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <ProjectMasthead
          title={project.title}
          description={[lede]}
          role={project.role}
          date={project.date}
          color={project.color}
          icon={project.icon}
          tags={project.tags}
        />

        <div className="mt-10 columns-1 sm:mt-14 sm:columns-2 lg:columns-3 sm:gap-5">
          {media.map((item, i) => (
            <BentoTile key={item.src ?? i} item={item} index={i} />
          ))}
        </div>
      </div>
    </article>
  );
}
