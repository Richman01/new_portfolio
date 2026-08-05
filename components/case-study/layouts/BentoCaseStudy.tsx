"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLightbox } from "@/lib/LightboxContext";
import type { CaseStudyLayout, MediaItem, ProjectMeta } from "@/lib/types";

function tileSpan(item: MediaItem): string {
  const ratio = item.width / item.height;
  if (ratio < 0.95) return "row-span-2";
  if (ratio > 1.35) return "col-span-2";
  return "";
}

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
      className={`group relative block overflow-hidden rounded-2xl border border-border shadow-sm transition-shadow duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 ${tileSpan(item)}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
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
    <article aria-label={`${project.title} case study`} className="pt-10 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-muted">{lede}</p>
          </div>

          <div className="shrink-0 text-sm text-muted sm:text-right">
            <span>{project.role}</span>
            <span className="mx-1.5" aria-hidden>
              /
            </span>
            <span>{project.date}</span>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[130px] grid-cols-2 grid-flow-row-dense gap-3 sm:mt-16 sm:auto-rows-[150px] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[170px] lg:grid-cols-4">
          {media.map((item, i) => (
            <BentoTile key={item.src ?? i} item={item} index={i} />
          ))}
        </div>
      </div>
    </article>
  );
}
