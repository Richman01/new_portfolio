"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import { VideoEmbed } from "@/components/case-study/VideoEmbed";
import { ProjectMasthead } from "@/components/case-study/ProjectMasthead";
import { cn } from "@/lib/cn";
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
  const [hero, ...gallery] = media;

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
          liveUrl={project.liveUrl}
          cover={hero}
        />

        {videos && videos.length > 0 && (
          <section className="mt-14 border-t border-border pt-8 sm:mt-20 sm:pt-10">
            <div className="mb-7 flex items-end justify-between gap-6">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Campaign films</h2>
              <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted sm:block">
                Motion work created to introduce the product and make the experience easier to understand.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {videos.map((video) => (
                <VideoEmbed key={video.id} id={video.id} title={video.title} />
              ))}
            </div>
          </section>
        )}

        {gallery.length > 0 && (
          <section className="mt-14 border-t border-border pt-8 sm:mt-20 sm:pt-10">
            <h2 className="mb-7 text-2xl font-semibold tracking-tight sm:text-3xl">Selected visuals</h2>
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              {gallery.map((item, i) => (
                <motion.div
                  key={item.src ?? i}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={cn(i === 0 && gallery.length > 2 && "md:col-span-2")}
                >
                  <ScreenMoment item={item} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
