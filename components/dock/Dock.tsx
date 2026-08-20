"use client";

import { useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { Shuffle } from "lucide-react";
import { DockIcon } from "@/components/dock/DockIcon";
import { PlaceholderBlock } from "@/components/shared/PlaceholderBlock";
import { SocialBadge } from "@/components/shared/SocialBadge";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";
import { useOverlay } from "@/lib/OverlayContext";

export function Dock() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { openProject } = useOverlay();

  const availableSocials = socials.filter((s) => s.available);

  return (
    <nav
      aria-label="Projects and social links"
      className="flex items-center gap-[10px] rounded-3xl border border-border bg-surface px-3 py-2.5 shadow-sm"
    >
      {projects.map((project, i) => (
        <DockIcon
          key={project.slug}
          index={i}
          activeIndex={activeIndex}
          onActivate={setActiveIndex}
          onDeactivate={() => setActiveIndex(null)}
          label={project.dockLabel}
          ariaLabel={`Open ${project.title} case study`}
          onClick={(e: ReactMouseEvent<HTMLButtonElement | HTMLAnchorElement>) =>
            openProject(project.slug, e.currentTarget as HTMLElement)
          }
        >
          <PlaceholderBlock
            sizeVariant="dock-icon"
            src={project.icon}
            alt={`${project.title} logo`}
            label={project.title.slice(0, 2).toUpperCase()}
            icon={project.slug === "randoms" ? <Shuffle size={22} className="text-white/90" /> : undefined}
            color={project.color}
          />
        </DockIcon>
      ))}

      <div className="h-8 w-px shrink-0 bg-border" aria-hidden />

      {availableSocials.map((social, i) => {
        const index = projects.length + i;
        return (
          <DockIcon
            key={social.kind}
            index={index}
            activeIndex={activeIndex}
            onActivate={setActiveIndex}
            onDeactivate={() => setActiveIndex(null)}
            label={social.label}
            ariaLabel={social.label}
            href={social.href ?? undefined}
            external={social.kind !== "email"}
          >
            <SocialBadge social={social} glyphSize={20} className="h-full w-full" />
          </DockIcon>
        );
      })}
    </nav>
  );
}
