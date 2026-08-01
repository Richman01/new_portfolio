import Image from "next/image";
import type { SocialLink } from "@/lib/types";
import { BrandGlyph } from "@/components/shared/BrandGlyph";
import { cn } from "@/lib/cn";

interface SocialBadgeProps {
  social: SocialLink;
  /** Fixed pixel size. Omit to have the badge fill its parent (e.g. inside Dock's animated tile). */
  size?: number;
  glyphSize?: number;
  className?: string;
}

/** Visual-only badge (icon image, or colored circle + glyph fallback) with no link wrapper of its own. */
export function SocialBadge({ social, size, glyphSize = 20, className }: SocialBadgeProps) {
  if (social.icon) {
    return (
      <span
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-[28%]",
          !social.available && "opacity-40",
          className
        )}
        style={{ width: size, height: size }}
      >
        <Image src={social.icon} alt={social.label} fill className="object-cover" />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-[28%]",
        !social.available && "opacity-40",
        className
      )}
      style={{
        width: size,
        height: size,
        backgroundColor: social.color,
      }}
    >
      <BrandGlyph kind={social.kind} size={size ? size * 0.45 : glyphSize} />
    </span>
  );
}
