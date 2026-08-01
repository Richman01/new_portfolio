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

export interface CaseStudySection {
  heading: string;
  body: string[];
  quote?: string;
  bullets?: string[];
  stat?: StatItem;
  statGrid?: StatItem[];
  media?: MediaItem | MediaItem[];
}

export type CaseStudyLayout =
  | {
      kind: "gallery";
      lede: string;
      media: MediaItem[];
      videos?: { id: string; title: string }[];
    }
  | {
      kind: "numbered";
      cover: MediaItem;
      intro: { body: string[]; quote?: string };
      sections: CaseStudySection[];
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
