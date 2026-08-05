"use client";

import { useEffect, useState, type RefObject } from "react";

export function useScrollSpy(ids: string[], containerRef: RefObject<HTMLElement | null>) {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root || ids.length === 0) return;

    setActiveId(ids[0]);

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topmost = visible.reduce((a, b) => (a.boundingClientRect.top <= b.boundingClientRect.top ? a : b));
        setActiveId(topmost.target.id);
      },
      { root, rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|"), containerRef]);

  return activeId;
}
