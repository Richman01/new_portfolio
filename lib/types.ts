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
  icon?: string;
  gallery: MediaItem[];
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
