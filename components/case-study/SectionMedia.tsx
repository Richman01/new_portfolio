import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import type { CaseStudySection } from "@/lib/types";

export function SectionMedia({ media }: { media: CaseStudySection["media"] }) {
  if (!media) return null;

  if (Array.isArray(media)) {
    return (
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {media.map((item, i) => (
          <ScreenMoment key={i} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6">
      <ScreenMoment item={media} />
    </div>
  );
}
