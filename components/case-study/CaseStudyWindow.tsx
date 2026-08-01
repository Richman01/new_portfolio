"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CaseStudyContent } from "@/components/case-study/CaseStudyContent";
import { projects } from "@/data/projects";
import { useOverlay } from "@/lib/OverlayContext";
import { useScrollLock } from "@/lib/useScrollLock";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { cn } from "@/lib/cn";

type ExitMode = "close" | "minimize";

export function CaseStudyWindow() {
  const { activeSlug, closeProject, getTriggerRect } = useOverlay();
  const project = activeSlug ? projects.find((p) => p.slug === activeSlug) : null;

  const windowRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [exitMode, setExitMode] = useState<ExitMode>("close");
  const [exitTarget, setExitTarget] = useState({ x: 0, y: 0 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [prevSlug, setPrevSlug] = useState(activeSlug);
  if (activeSlug !== prevSlug) {
    setPrevSlug(activeSlug);
    setIsMaximized(false);
  }

  useScrollLock(Boolean(project));
  useFocusTrap(windowRef, Boolean(project));

  useEffect(() => {
    if (!project) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && !isLightboxOpen) handleClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, isLightboxOpen]);

  function handleClose() {
    setExitMode("close");
    closeProject();
  }

  function handleMinimize() {
    const winRect = windowRef.current?.getBoundingClientRect();
    const triggerRect = getTriggerRect();
    if (winRect && triggerRect) {
      setExitTarget({
        x: triggerRect.left + triggerRect.width / 2 - (winRect.left + winRect.width / 2),
        y: triggerRect.top + triggerRect.height / 2 - (winRect.top + winRect.height / 2),
      });
    } else {
      setExitTarget({ x: 0, y: 400 });
    }
    setExitMode("minimize");
    closeProject();
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-black/30 transition-[padding] duration-300",
            isMaximized ? "p-0" : "p-4 sm:p-8"
          )}
          onClick={handleClose}
        >
          <motion.div
            ref={windowRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={
              exitMode === "minimize"
                ? {
                    opacity: 0,
                    scale: 0.04,
                    x: exitTarget.x,
                    y: exitTarget.y,
                    transition: { duration: 0.4, ease: "easeIn" },
                  }
                : { opacity: 0, scale: 0.92, transition: { duration: 0.18 } }
            }
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className={cn(
              "flex flex-col overflow-hidden border border-border bg-surface shadow-2xl",
              "transition-[width,height,max-width,max-height,border-radius] duration-300 ease-in-out",
              isMaximized
                ? "h-screen w-screen max-w-none max-h-none rounded-none"
                : "h-[85vh] w-[min(92vw,52rem)] max-w-full rounded-xl"
            )}
          >
            <div className="flex shrink-0 items-center gap-4 border-b border-border bg-surface px-4 py-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close"
                  className="h-3 w-3 rounded-full bg-red-500 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
                <button
                  type="button"
                  onClick={handleMinimize}
                  aria-label="Minimize"
                  className="h-3 w-3 rounded-full bg-yellow-400 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
                <button
                  type="button"
                  onClick={() => setIsMaximized((v) => !v)}
                  aria-label={isMaximized ? "Restore" : "Maximize"}
                  className="h-3 w-3 rounded-full bg-green-500 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
              </div>

              <div className="flex flex-1 justify-center">
                <span className="max-w-[70%] truncate rounded-md bg-background px-3 py-1 text-xs text-muted">
                  ladapoferanmi.com/work/{project.slug}
                </span>
              </div>

              <div className="w-[52px] shrink-0" aria-hidden />
            </div>

            <div className="flex-1 overflow-y-auto">
              <CaseStudyContent project={project} onLightboxOpenChange={setIsLightboxOpen} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
