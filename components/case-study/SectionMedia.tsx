import { ScreenMoment } from "@/components/case-study/ScreenMoment";
import type { CaseStudySection } from "@/lib/types";

export function SectionMedia({
  media,
  variant = "standard",
}: {
  media: CaseStudySection["media"];
  variant?: "standard" | "weighted" | "hero";
}) {
  if (!media) return null;

  if (Array.isArray(media)) {
    return (
      <div
        className={
          variant === "weighted"
            ? "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-5"
            : "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
        }
      >
        {media.map((item, i) => (
          <div key={i} className={variant === "weighted" ? (i === 0 ? "sm:col-span-3" : "sm:col-span-2") : undefined}>
            <ScreenMoment item={item} frameless={variant === "hero"} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6">
      <ScreenMoment item={media} frameless={variant === "hero"} />
    </div>
  );
}
