"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLightbox } from "@/lib/LightboxContext";
import { useHasMounted } from "@/lib/useHasMounted";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useScrollLock } from "@/lib/useScrollLock";

export function ImageLightbox() {
  const mounted = useHasMounted();
  const { activeItem, activeIndex, count, close, next, prev } = useLightbox();
  const panelRef = useRef<HTMLDivElement>(null);
  const isOpen = activeItem !== null;

  useScrollLock(isOpen);
  useFocusTrap(panelRef, isOpen);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        // Capture-phase + stopPropagation so this innermost layer wins over
        // the mobile drawer's own built-in (Base UI) Escape handling, which
        // would otherwise intercept the event first and swallow it silently.
        e.stopPropagation();
        close();
      } else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [isOpen, close, next, prev]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {activeItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={(e) => {
            e.stopPropagation();
            close();
          }}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.label}
            tabIndex={-1}
            className="flex w-full flex-1 flex-col items-center justify-center outline-none"
          >
            <motion.div
              key={activeItem.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[70vh] w-[90vw] sm:h-[78vh] sm:w-[85vw]"
            >
              {activeItem.src && (
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              )}
            </motion.div>

            {activeItem.label && (
              <p className="mt-4 text-center text-sm text-white/80">{activeItem.label}</p>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
            className="fixed top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:top-6 sm:right-6"
          >
            <X size={18} />
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
                className="fixed top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:left-6"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
                className="fixed top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:right-6"
              >
                <ChevronRight size={22} />
              </button>
              <p className="fixed bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60 sm:bottom-6">
                {(activeIndex ?? 0) + 1} / {count}
              </p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
