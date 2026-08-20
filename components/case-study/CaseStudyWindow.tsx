"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent as ReactMouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CaseStudyContent } from "@/components/case-study/CaseStudyContent";
import { projects } from "@/data/projects";
import { useOverlay } from "@/lib/OverlayContext";
import { useScrollLock } from "@/lib/useScrollLock";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useIsMobileViewport } from "@/lib/useIsMobileViewport";
import { cn } from "@/lib/cn";

type ExitMode = "close" | "minimize";

interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ResizeEdges {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}

const MIN_WIDTH = 420;
const MIN_HEIGHT = 320;
const TOP_CLEARANCE = 66; // keeps the window below the fixed navbar pill

function rectToBox(rect: DOMRect): Box {
  return { x: rect.left, y: rect.top, width: rect.width, height: rect.height };
}

function clampBox(box: Box): Box {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const width = Math.min(Math.max(box.width, MIN_WIDTH), vw - 16);
  const height = Math.min(Math.max(box.height, MIN_HEIGHT), vh - 32);
  const x = Math.min(Math.max(box.x, -width + 160), vw - 160);
  const y = Math.min(Math.max(box.y, TOP_CLEARANCE), vh - 80);
  return { x, y, width, height };
}

const RESIZE_HANDLES: { edges: ResizeEdges; className: string }[] = [
  { edges: { top: true }, className: "-top-1 left-3 right-3 h-2 cursor-ns-resize" },
  { edges: { bottom: true }, className: "-bottom-1 left-3 right-3 h-2 cursor-ns-resize" },
  { edges: { left: true }, className: "-left-1 top-3 bottom-3 w-2 cursor-ew-resize" },
  { edges: { right: true }, className: "-right-1 top-3 bottom-3 w-2 cursor-ew-resize" },
  { edges: { top: true, left: true }, className: "-top-1 -left-1 h-3 w-3 cursor-nwse-resize" },
  { edges: { top: true, right: true }, className: "-top-1 -right-1 h-3 w-3 cursor-nesw-resize" },
  { edges: { bottom: true, left: true }, className: "-bottom-1 -left-1 h-3 w-3 cursor-nesw-resize" },
  { edges: { bottom: true, right: true }, className: "-bottom-1 -right-1 h-3 w-3 cursor-nwse-resize" },
];

export function CaseStudyWindow() {
  const { activeSlug, closeProject, getTriggerRect } = useOverlay();
  const project = activeSlug ? projects.find((p) => p.slug === activeSlug) : null;
  const isMobile = useIsMobileViewport();

  const windowRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [customBox, setCustomBox] = useState<Box | null>(null);
  const [exitMode, setExitMode] = useState<ExitMode>("close");
  const [exitTarget, setExitTarget] = useState({ x: 0, y: 0 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAchievementOpen, setIsAchievementOpen] = useState(false);

  const [prevSlug, setPrevSlug] = useState(activeSlug);
  if (activeSlug !== prevSlug) {
    setPrevSlug(activeSlug);
    setIsMaximized(false);
    setCustomBox(null);
  }

  useScrollLock(Boolean(project) && !isMobile);
  useFocusTrap(windowRef, Boolean(project) && !isMobile);

  useEffect(() => {
    if (!project || isMobile) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && !isLightboxOpen && !isAchievementOpen) handleClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, isLightboxOpen, isAchievementOpen, isMobile]);

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

  function beginInteraction(e: ReactMouseEvent, mode: "move" | "resize", edges?: ResizeEdges) {
    if (isMaximized || !windowRef.current) return;
    e.preventDefault();
    const startBox = customBox ?? rectToBox(windowRef.current.getBoundingClientRect());
    const startMouseX = e.clientX;
    const startMouseY = e.clientY;
    document.body.style.userSelect = "none";

    function handleMouseMove(ev: MouseEvent) {
      const dx = ev.clientX - startMouseX;
      const dy = ev.clientY - startMouseY;

      if (mode === "move") {
        setCustomBox(clampBox({ ...startBox, x: startBox.x + dx, y: startBox.y + dy }));
        return;
      }

      let { x, y, width, height } = startBox;
      if (edges?.right) width = startBox.width + dx;
      if (edges?.bottom) height = startBox.height + dy;
      if (edges?.left) {
        width = startBox.width - dx;
        x = startBox.x + dx;
      }
      if (edges?.top) {
        height = startBox.height - dy;
        y = startBox.y + dy;
      }
      setCustomBox(clampBox({ x, y, width, height }));
    }

    function handleMouseUp() {
      document.body.style.userSelect = "";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  const customStyle: CSSProperties | undefined =
    !isMaximized && customBox
      ? {
          position: "fixed",
          left: customBox.x,
          top: customBox.y,
          width: customBox.width,
          height: customBox.height,
          margin: 0,
        }
      : undefined;

  return (
    <AnimatePresence>
      {!isMobile && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-0 z-50 flex items-stretch justify-center bg-black/35 pt-[74px] backdrop-blur-[2px] transition-[padding] duration-300",
            isMaximized ? "pb-0" : "pb-6"
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
            style={customStyle}
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
              "relative flex flex-col overflow-hidden border border-border/90 bg-surface shadow-[0_28px_90px_rgba(0,0,0,0.28)]",
              !customStyle && "transition-[width,height,max-width,max-height,border-radius] duration-300 ease-in-out",
              isMaximized
                ? "h-full w-screen max-w-none max-h-none rounded-none"
                : customStyle
                  ? "rounded-2xl"
                  : "h-full w-[min(94vw,80rem)] max-w-full rounded-2xl"
            )}
          >
            {!isMaximized &&
              RESIZE_HANDLES.map(({ edges, className }, i) => (
                <div
                  key={i}
                  onMouseDown={(e) => beginInteraction(e, "resize", edges)}
                  className={cn("absolute z-10", className)}
                />
              ))}

            <div
              onMouseDown={(e) => {
                if ((e.target as HTMLElement).closest("button")) return;
                beginInteraction(e, "move");
              }}
              className={cn(
                "flex shrink-0 items-center gap-4 border-b border-border bg-surface/95 px-4 py-3 backdrop-blur-xl",
                !isMaximized && "cursor-grab active:cursor-grabbing"
              )}
            >
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
                <span className="max-w-[70%] truncate rounded-full border border-border/70 bg-background px-3 py-1 text-xs text-muted">
                  ladapoferanmi.com/work/{project.slug}
                </span>
              </div>

              <div className="w-[52px] shrink-0" aria-hidden />
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto">
              <CaseStudyContent
                project={project}
                onLightboxOpenChange={setIsLightboxOpen}
                onAchievementOpenChange={setIsAchievementOpen}
                scrollContainerRef={scrollRef}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
