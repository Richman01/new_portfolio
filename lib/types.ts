export type ProjectCategory = "featured" | "brand-graphic";
export type ProjectStatus = "live" | "archived" | "coming-soon";

export interface MediaItem {
  src?: string;
  videoSrc?: string;
  alt: string;
  label?: string;
  width: number;
  height: number;
}

export interface StatItem {
  value: string;
  label: string;
}

export type SectionFamily = "hero" | "text-only" | "structured-list" | "stat-forward" | "media-pair" | "standard";

export interface CaseStudySection {
  heading: string;
  body: string[];
  quote?: string;
  bullets?: string[];
  stat?: StatItem;
  statGrid?: StatItem[];
  media?: MediaItem | MediaItem[];
  /** Optional override for the section-beat visual treatment; auto-resolved from content shape when absent. */
  layout?: SectionFamily;
}

export interface Achievement {
  slug: string;
  title: string;
  summary: string;
  role: string;
  date: string;
  liveUrl?: string;
  tags?: string[];
  cardImage: MediaItem;
  cover?: MediaItem;
  intro: { body: string[]; quote?: string };
  sections: CaseStudySection[];
}

export type CaseStudyLayout =
  | {
      kind: "gallery";
      lede: string;
      media: MediaItem[];
      videos?: { id: string; title: string }[];
    }
  | {
      kind: "bento";
      lede: string;
      media: MediaItem[];
    }
  | {
      kind: "numbered";
      cover: MediaItem;
      intro: { lede?: string; body: string[]; quote?: string; stats?: StatItem[] };
      sections: CaseStudySection[];
      achievements?: Achievement[];
    }
  | {
      kind: "split";
      cover: MediaItem;
      rail: { category: string; date: string; role: string; liveUrl?: string };
      sections: CaseStudySection[];
    };

export interface ProjectMeta {
  slug: string;
  title: string;
  role: string;
  date: string;
  status: ProjectStatus;
  category: ProjectCategory;
  color: string;
  dockLabel: string;
  icon?: string;
  liveUrl?: string;
  tags?: string[];
  caseStudy: CaseStudyLayout;
}

export type SocialKind = "linkedin" | "dribbble" | "email" | "behance" | "resume";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string | null;
  color: string;
  icon?: string;
  available: boolean;
}

export interface AboutStat {
  label: string;
  value: string;
}

export interface CareerRole {
  title: string;
  dateRange: string;
  location?: string;
  bullets?: string[];
}

export interface CareerEntry {
  company: string;
  totalDuration?: string;
  roles: CareerRole[];
}
