"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import { ImageLightbox } from "@/components/case-study/ImageLightbox";
import { LightboxProvider } from "@/lib/LightboxContext";
import type { ProjectMeta } from "@/lib/types";

function CaseStudyGallery({ project }: { project: ProjectMeta }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-12 rounded-3xl bg-surface p-3 sm:mt-16 sm:p-6">
      <div className="flex flex-col gap-6 sm:gap-8">
        {project.gallery.map((item, i) => (
          <motion.div
            key={i}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ScreenMoment item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function CaseStudyContent({
  project,
  onLightboxOpenChange,
}: {
  project: ProjectMeta;
  onLightboxOpenChange?: (open: boolean) => void;
}) {
  const lightboxImages = project.gallery.filter((item) => item.src);

  return (
    <LightboxProvider images={lightboxImages} onOpenChange={onLightboxOpenChange}>
      <article aria-label={`${project.title} case study`} className="pt-10 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h1>
              <p className="mt-4 text-base leading-relaxed text-muted">{project.summary}</p>
            </div>

            <div className="shrink-0 text-sm text-muted sm:text-right">
              <span>{project.role}</span>
              <span className="mx-1.5" aria-hidden>
                /
              </span>
              <span>{project.date}</span>
            </div>
          </div>

          <CaseStudyGallery project={project} />
        </div>
      </article>

      <ImageLightbox />
    </LightboxProvider>
  );
}
