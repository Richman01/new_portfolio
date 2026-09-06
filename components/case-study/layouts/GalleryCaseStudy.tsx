"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import { VideoEmbed } from "@/components/case-study/VideoEmbed";
import { ProjectMasthead } from "@/components/case-study/ProjectMasthead";
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

        {videos && videos.length > 0 && (
          <section className="mt-24 sm:mt-32">
            <h2 className="mb-8 text-center font-display text-3xl leading-[1.1] font-bold tracking-tight sm:mb-10 sm:text-5xl">
              Campaign films
            </h2>
            <div className="mx-auto flex max-w-5xl flex-col gap-4">
              {videos.map((video) => (
                <VideoEmbed key={video.id} id={video.id} title={video.title} />
              ))}
            </div>
          </section>
        )}

        {gallery.length > 0 && (
          <section className="mt-24 sm:mt-32">
            <h2 className="mb-8 text-center font-display text-3xl leading-[1.1] font-bold tracking-tight sm:mb-10 sm:text-5xl">
              Selected visuals
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4">
              {gallery.map((item, index) => (
                <motion.div
                  key={item.src ?? index}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-64px" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
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
