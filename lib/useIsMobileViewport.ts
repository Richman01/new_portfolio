"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 639px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * True when the viewport is below Tailwind's `sm` breakpoint (640px), the
 * exact complement of the `sm:` classes DockNav already uses to switch
 * Dock/MobileNav. Used to decide which of CaseStudyWindow (desktop) /
 * CaseStudyDrawer (mobile) actually mounts CaseStudyContent, since both
 * must never mount it at once (duplicate LightboxProvider, image loads,
 * and global keydown listeners).
 */
export function useIsMobileViewport() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
