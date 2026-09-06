"use client";

import { useRef, useState } from "react";
import { Drawer } from "@base-ui/react/drawer";
import { X } from "lucide-react";
import { CaseStudyContent } from "@/components/case-study/CaseStudyContent";
import { projects } from "@/data/projects";
import { useOverlay } from "@/lib/OverlayContext";
import { useIsMobileViewport } from "@/lib/useIsMobileViewport";
import type { ProjectMeta } from "@/lib/types";

export function CaseStudyDrawer() {
  const isMobile = useIsMobileViewport();
  const { activeSlug, closeProject } = useOverlay();
  const project = activeSlug ? (projects.find((p) => p.slug === activeSlug) ?? null) : null;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAchievementOpen, setIsAchievementOpen] = useState(false);

  // Base UI keeps the Popup mounted through its own close transition, but
  // doesn't freeze our React props the way Framer Motion's AnimatePresence
  // does for CaseStudyWindow - without this, content would vanish instantly
  // while the sheet is still visibly sliding down.
  const [displayProject, setDisplayProject] = useState<ProjectMeta | null>(null);
  if (project && project !== displayProject) {
    setDisplayProject(project);
    setIsLightboxOpen(false);
    setIsAchievementOpen(false);
  }

  if (!isMobile) return null;

  return (
    <Drawer.Root
      open={Boolean(project)}
      swipeDirection="down"
      modal
      onOpenChange={(open, eventDetails) => {
        if (open) return;
        if (isLightboxOpen || isAchievementOpen) {
          eventDetails.cancel();
          return;
        }
        closeProject();
      }}
    >
      <Drawer.Portal>
        <Drawer.Backdrop
          className="fixed inset-0 z-50 bg-black/30 transition-opacity duration-300
                     data-starting-style:opacity-0 data-ending-style:opacity-0"
        />
        <Drawer.Viewport className="fixed inset-0 z-50">
          <Drawer.Popup
            role="dialog"
            aria-modal="true"
            aria-label={displayProject ? `${displayProject.title} case study` : undefined}
            className="fixed inset-x-0 bottom-0 flex h-[min(92dvh,calc(100dvh-2rem))] flex-col
                       overflow-hidden rounded-t-2xl border-t border-border bg-surface
                       shadow-2xl outline-none
                       translate-y-[var(--drawer-swipe-movement-y,0px)]
                       transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                       data-starting-style:translate-y-full
                       data-ending-style:translate-y-full
                       data-swiping:duration-0"
          >
            <div className="flex shrink-0 flex-col items-center gap-2 border-b border-border bg-surface/95 pt-2.5 pb-2 backdrop-blur-xl">
              <span aria-hidden className="h-1.5 w-10 shrink-0 rounded-full bg-muted/40" />
              <div className="flex w-full items-center justify-between px-4">
                <span className="max-w-[75%] truncate text-xs text-muted">
                  {displayProject ? `ladapoferanmi.com/work/${displayProject.slug}` : ""}
                </span>
                <Drawer.Close
                  aria-label="Close"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full
                             text-foreground/70 transition-colors hover:bg-surface-hover
                             hover:text-foreground focus-visible:outline-none
                             focus-visible:ring-2 focus-visible:ring-ring/50"
                >
                  <X size={16} />
                </Drawer.Close>
              </div>
            </div>

            <Drawer.Content className="relative min-h-0 flex-1 overflow-hidden rounded-[inherit]">
              <div
                ref={scrollRef}
                className="absolute inset-0 overflow-y-auto overscroll-contain pb-[max(env(safe-area-inset-bottom,0px),1rem)]"
              >
                {displayProject && (
                  <CaseStudyContent
                    project={displayProject}
                    onLightboxOpenChange={setIsLightboxOpen}
                    onAchievementOpenChange={setIsAchievementOpen}
                    scrollContainerRef={scrollRef}
                  />
                )}
              </div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
