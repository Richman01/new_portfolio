"use client";

import { Shuffle } from "lucide-react";
import { PlaceholderBlock } from "@/components/shared/PlaceholderBlock";
import { SocialBadge } from "@/components/shared/SocialBadge";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";
import { useOverlay } from "@/lib/OverlayContext";

export function MobileNav() {
  const { openProject } = useOverlay();
  const availableSocials = socials.filter((s) => s.available);

  return (
    <nav
      aria-label="Projects and social links"
      className="grid w-full max-w-xs grid-cols-4 gap-x-3 gap-y-5 sm:max-w-sm sm:gap-x-4"
    >
      {projects.map((project) => (
        <button
          key={project.slug}
          type="button"
          onClick={(e) => openProject(project.slug, e.currentTarget)}
          className="flex flex-col items-center gap-1.5 rounded-[28%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <div className="aspect-square w-full max-w-14">
            <PlaceholderBlock
              sizeVariant="dock-icon"
              src={project.icon}
              alt={`${project.title} logo`}
              label={project.title.slice(0, 2).toUpperCase()}
              icon={project.slug === "randoms" ? <Shuffle size={22} className="text-white/90" /> : undefined}
              color={project.color}
            />
          </div>
          <span className="max-w-full truncate text-xs font-medium text-foreground/80">
            {project.title}
          </span>
        </button>
      ))}

      {availableSocials.map((social) => (
        <a
          key={social.kind}
          href={social.href ?? undefined}
          target={social.kind === "email" ? undefined : "_blank"}
          rel={social.kind === "email" ? undefined : "noopener noreferrer"}
          aria-label={social.label}
          className="flex flex-col items-center gap-1.5 rounded-[28%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <div className="aspect-square w-full max-w-14">
            <SocialBadge social={social} className="h-full w-full" glyphSize={22} />
          </div>
          <span className="max-w-full truncate text-xs font-medium text-foreground/80">
            {social.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
