import type { SocialLink } from "@/lib/types";

export const socials: SocialLink[] = [
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/feranmi-ladapo/",
    color: "#0A66C2",
    available: true,
  },
  {
    kind: "dribbble",
    label: "Dribbble",
    href: "https://dribbble.com/ladapo_feranmi",
    color: "#EA4C89",
    available: true,
  },
  {
    kind: "email",
    label: "Email",
    href: "mailto:ladapoferanmi@gmail.com",
    color: "#374151",
    available: true,
  },
  {
    kind: "behance",
    label: "Behance",
    href: null,
    color: "#1769FF",
    available: false,
  },
  {
    kind: "resume",
    label: "Resume",
    href: null,
    color: "#111827",
    available: false,
  },
];
