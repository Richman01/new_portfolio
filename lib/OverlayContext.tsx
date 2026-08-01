"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

interface OverlayContextValue {
  activeSlug: string | null;
  openProject: (slug: string, trigger?: HTMLElement | null) => void;
  closeProject: () => void;
  getTriggerRect: () => DOMRect | null;
}

const OverlayContext = createContext<OverlayContextValue | null>(null);

export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const restoreFocus = useCallback(() => {
    lastTrigger.current?.focus();
    lastTrigger.current = null;
  }, []);

  const openProject = useCallback((slug: string, trigger?: HTMLElement | null) => {
    lastTrigger.current = trigger ?? null;
    setActiveSlug(slug);
  }, []);

  const closeProject = useCallback(() => {
    setActiveSlug(null);
    restoreFocus();
  }, [restoreFocus]);

  const getTriggerRect = useCallback(() => {
    return lastTrigger.current?.getBoundingClientRect() ?? null;
  }, []);

  return (
    <OverlayContext.Provider value={{ activeSlug, openProject, closeProject, getTriggerRect }}>
      {children}
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  const ctx = useContext(OverlayContext);
  if (!ctx) throw new Error("useOverlay must be used within OverlayProvider");
  return ctx;
}
