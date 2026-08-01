"use client";

import { GalleryCaseStudy } from "@/components/case-study/layouts/GalleryCaseStudy";
import { NumberedCaseStudy } from "@/components/case-study/layouts/NumberedCaseStudy";
import { SplitCaseStudy } from "@/components/case-study/layouts/SplitCaseStudy";
import { ImageLightbox } from "@/components/case-study/ImageLightbox";
import { LightboxProvider } from "@/lib/LightboxContext";
import type { CaseStudyLayout, MediaItem, ProjectMeta } from "@/lib/types";

function collectLightboxImages(caseStudy: CaseStudyLayout): MediaItem[] {
  switch (caseStudy.kind) {
    case "gallery":
      return caseStudy.media.filter((item) => item.src);
    case "numbered":
    case "split": {
      const sectionMedia = caseStudy.sections.flatMap((section) => {
        if (!section.media) return [];
        return Array.isArray(section.media) ? section.media : [section.media];
      });
      return [caseStudy.cover, ...sectionMedia].filter((item) => item.src);
    }
  }
}

export function CaseStudyContent({
  project,
  onLightboxOpenChange,
}: {
  project: ProjectMeta;
  onLightboxOpenChange?: (open: boolean) => void;
}) {
  const { caseStudy } = project;
  const lightboxImages = collectLightboxImages(caseStudy);

  return (
    <LightboxProvider images={lightboxImages} onOpenChange={onLightboxOpenChange}>
      {caseStudy.kind === "gallery" && <GalleryCaseStudy project={project} caseStudy={caseStudy} />}
      {caseStudy.kind === "numbered" && <NumberedCaseStudy project={project} caseStudy={caseStudy} />}
      {caseStudy.kind === "split" && <SplitCaseStudy project={project} caseStudy={caseStudy} />}

      <ImageLightbox />
    </LightboxProvider>
  );
}
