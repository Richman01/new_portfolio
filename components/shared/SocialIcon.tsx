import type { SocialLink } from "@/lib/types";
import { SocialBadge } from "@/components/shared/SocialBadge";

interface SocialIconProps {
  social: SocialLink;
  size?: number;
  className?: string;
}

/** Standalone, clickable social link (badge + anchor). Not for use inside Dock,
 * which already supplies its own interactive wrapper via DockIcon. */
export function SocialIcon({ social, size = 44, className }: SocialIconProps) {
  const badge = <SocialBadge social={social} size={size} className={className} />;

  if (!social.available || !social.href) {
    return (
      <span
        aria-disabled
        title={`${social.label} (coming soon)`}
        className="inline-flex cursor-not-allowed"
      >
        {badge}
      </span>
    );
  }

  return (
    <a
      href={social.href}
      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={social.label}
      className="inline-flex rounded-[28%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {badge}
    </a>
  );
}
