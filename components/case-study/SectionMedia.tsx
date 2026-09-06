import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import type { CaseStudySection } from "@/lib/types";

export function SectionMedia({
  media,
  variant,
}: {
  media: CaseStudySection["media"];
  variant?: "standard" | "weighted" | "hero";
}) {
  if (!media) return null;

  if (Array.isArray(media)) {
    return (
      <div className="mt-10 flex flex-col gap-3 sm:mt-14 sm:gap-4">
        {media.map((item, i) => (
          <div key={i}>
            <ScreenMoment item={item} frameless={variant === "hero"} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-10 sm:mt-14">
      <ScreenMoment item={media} frameless={variant === "hero"} />
    </div>
  );
}
