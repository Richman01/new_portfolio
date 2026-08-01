"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import { VideoEmbed } from "@/components/case-study/VideoEmbed";
import type { CaseStudyLayout, ProjectMeta } from "@/lib/types";

export function GalleryCaseStudy({
  project,
  caseStudy,
}: {
  project: ProjectMeta;
  caseStudy: Extract<CaseStudyLayout, { kind: "gallery" }>;
}) {
  const prefersReducedMotion = useReducedMotion();
  const { lede, media, videos } = caseStudy;

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

        {videos && videos.length > 0 && (
          <div className="mt-12 flex flex-col gap-6 sm:mt-16 sm:gap-8">
            {videos.map((video) => (
              <VideoEmbed key={video.id} id={video.id} title={video.title} />
            ))}
          </div>
        )}

        <div className="mt-12 rounded-3xl bg-surface p-3 sm:mt-16 sm:p-6">
          <div className="flex flex-col gap-6 sm:gap-8">
            {media.map((item, i) => (
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
      </div>
    </article>
  );
}
