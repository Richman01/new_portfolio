import { Mail, FileText } from "lucide-react";
import type { SocialKind } from "@/lib/types";

/**
 * Simple original monogram/glyph marks (not reproductions of official brand
 * logos) used purely to identify each platform in the dock/about panel.
 */
export function BrandGlyph({ kind, size = 18 }: { kind: SocialKind; size?: number }) {
  switch (kind) {
    case "linkedin":
      return (
        <span
          className="font-bold leading-none text-white"
          style={{ fontSize: size * 0.62 }}
          aria-hidden
        >
          in
        </span>
      );
    case "behance":
      return (
        <span
          className="font-bold leading-none text-white"
          style={{ fontSize: size * 0.55 }}
          aria-hidden
        >
          Be
        </span>
      );
    case "dribbble":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9.5" stroke="white" strokeWidth="1.6" />
          <path
            d="M4 9.5c4 1.3 9 1.6 13.2.2M3 15c5-1.6 11-1.1 15.4 1.4M9.3 3.2c2.7 3.4 4.3 8.3 4 13.6"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );
    case "email":
      return <Mail size={size} className="text-white" aria-hidden />;
    case "resume":
      return <FileText size={size} className="text-white" aria-hidden />;
  }
}
