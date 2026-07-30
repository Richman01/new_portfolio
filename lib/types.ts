export type ProjectCategory = "featured" | "brand-graphic";
export type ProjectStatus = "live" | "archived" | "coming-soon";

export interface MediaItem {
  src?: string;
  alt: string;
  label: string;
}

export type CaseStudySection =
  | { type: "text"; heading?: string; body: string }
  | { type: "image-grid"; heading?: string; images: MediaItem[] }
  | { type: "carousel"; heading?: string; slides: MediaItem[] }
  | { type: "video"; heading?: string; videoSrc?: string; poster?: string }
  | { type: "featured-logos"; heading?: string; logos: { name: string; href?: string }[] };

export interface ProjectMeta {
  slug: string;
  title: string;
  role: string;
  date: string;
  status: ProjectStatus;
  category: ProjectCategory;
  summary: string;
  color: string;
  dockLabel: string;
  bannerImage?: string;
  madeBy?: { label: string; href: string };
  featuredLogos?: { name: string; href?: string }[];
  sections: CaseStudySection[];
}

export type SocialKind = "linkedin" | "dribbble" | "email" | "behance" | "resume";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string | null;
  color: string;
  available: boolean;
}
