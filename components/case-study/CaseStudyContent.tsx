"use client";

import type { RefObject } from "react";
import { GalleryCaseStudy } from "@/components/case-study/layouts/GalleryCaseStudy";
import { NumberedCaseStudy } from "@/components/case-study/layouts/NumberedCaseStudy";
import { SplitCaseStudy } from "@/components/case-study/layouts/SplitCaseStudy";
import { ImageLightbox } from "@/components/case-study/ImageLightbox";
import { LightboxProvider } from "@/lib/LightboxContext";
import type { CaseStudyLayout, CaseStudySection, MediaItem, ProjectMeta } from "@/lib/types";

function flattenSectionMedia(sections: CaseStudySection[]): MediaItem[] {
  return sections.flatMap((section) => {
    if (!section.media) return [];
    return Array.isArray(section.media) ? section.media : [section.media];
  });
}

function collectLightboxImages(caseStudy: CaseStudyLayout): MediaItem[] {
  switch (caseStudy.kind) {
    case "gallery":
      return caseStudy.media.filter((item) => item.src);
    case "numbered": {
      const achievementMedia = (caseStudy.achievements ?? []).flatMap((achievement) => [
        ...(achievement.cover ? [achievement.cover] : []),
        ...flattenSectionMedia(achievement.sections),
      ]);
      return [caseStudy.cover, ...flattenSectionMedia(caseStudy.sections), ...achievementMedia].filter(
        (item) => item.src
      );
    }
    case "split":
      return [caseStudy.cover, ...flattenSectionMedia(caseStudy.sections)].filter((item) => item.src);
  }
}

export function CaseStudyContent({
  project,
  onLightboxOpenChange,
  onAchievementOpenChange,
  scrollContainerRef,
}: {
  project: ProjectMeta;
  onLightboxOpenChange?: (open: boolean) => void;
  onAchievementOpenChange?: (open: boolean) => void;
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
}) {
  const { caseStudy } = project;
  const lightboxImages = collectLightboxImages(caseStudy);

  return (
    <LightboxProvider images={lightboxImages} onOpenChange={onLightboxOpenChange}>
      {caseStudy.kind === "gallery" && <GalleryCaseStudy project={project} caseStudy={caseStudy} />}
      {caseStudy.kind === "numbered" && (
        <NumberedCaseStudy
          key={project.slug}
          project={project}
          caseStudy={caseStudy}
          onAchievementOpenChange={onAchievementOpenChange}
          scrollContainerRef={scrollContainerRef}
        />
      )}
      {caseStudy.kind === "split" && <SplitCaseStudy project={project} caseStudy={caseStudy} />}

      <ImageLightbox />
    </LightboxProvider>
  );
}
