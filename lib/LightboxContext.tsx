"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { MediaItem } from "@/lib/types";

interface LightboxContextValue {
  activeIndex: number | null;
  activeItem: MediaItem | null;
  count: number;
  open: (src: string) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({
  images,
  onOpenChange,
  children,
}: {
  images: MediaItem[];
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    onOpenChange?.(activeIndex !== null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const open = useCallback(
    (src: string) => {
      const index = images.findIndex((img) => img.src === src);
      if (index !== -1) setActiveIndex(index);
    },
    [images]
  );

  const close = useCallback(() => setActiveIndex(null), []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const value = useMemo<LightboxContextValue>(
    () => ({
      activeIndex,
      activeItem: activeIndex === null ? null : (images[activeIndex] ?? null),
      count: images.length,
      open,
      close,
      next,
      prev,
    }),
    [activeIndex, images, open, close, next, prev]
  );

  return <LightboxContext.Provider value={value}>{children}</LightboxContext.Provider>;
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}
