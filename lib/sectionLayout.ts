import type { CaseStudySection, SectionFamily } from "@/lib/types";

export type SectionVariant = "a" | "b";

/**
 * Resolves which visual treatment a section beat should use, alternating a
 * sub-variant within recurring families so adjacent sections in the same
 * family never render identically. `occurrenceCounts` is owned by the
 * caller and threaded across one full `sections` pass.
 */
export function resolveSectionLayout(
  section: CaseStudySection,
  index: number,
  occurrenceCounts: Partial<Record<SectionFamily, number>>
): { family: SectionFamily; variant: SectionVariant } {
  const family: SectionFamily =
    section.layout ??
    (index === 0
      ? "hero"
      : !section.media
        ? "text-only"
        : section.bullets && section.bullets.length > 0
          ? "structured-list"
          : section.stat
            ? "stat-forward"
            : Array.isArray(section.media)
              ? "media-pair"
              : "standard");

  const count = occurrenceCounts[family] ?? 0;
  occurrenceCounts[family] = count + 1;

  return { family, variant: count % 2 === 0 ? "a" : "b" };
}
