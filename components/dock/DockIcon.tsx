"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

const ICON_SIZE = 48;
const PUSH = 8;
const LIFT = 6;

const buttonClass = cn(
  "flex h-full w-full items-center justify-center rounded-[28%] outline-none",
  "focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
);

interface DockIconProps {
  index: number;
  activeIndex: number | null;
  onActivate: (index: number) => void;
  onDeactivate: () => void;
  label: string;
  ariaLabel: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string;
  external?: boolean;
  children: ReactNode;
}

export function DockIcon({
  index,
  activeIndex,
  onActivate,
  onDeactivate,
  label,
  ariaLabel,
  onClick,
  href,
  external,
  children,
}: DockIconProps) {
  const diff = activeIndex === null ? null : index - activeIndex;
  const isActive = diff === 0;
  const pushX = diff === -1 ? -PUSH : diff === 1 ? PUSH : 0;

  const sharedProps = {
    onMouseEnter: () => onActivate(index),
    onMouseLeave: onDeactivate,
    onFocus: () => onActivate(index),
    onBlur: onDeactivate,
    "aria-label": ariaLabel,
    className: buttonClass,
  };

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {isActive && (
          <motion.span
            initial={{ opacity: 0, y: 4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-border bg-surface px-2 py-1 text-xs font-medium text-foreground shadow-sm"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ x: pushX, y: isActive ? -LIFT : 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        style={{ width: ICON_SIZE, height: ICON_SIZE }}
      >
        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            onClick={onClick}
            {...sharedProps}
          >
            {children}
          </a>
        ) : (
          <button type="button" onClick={onClick} {...sharedProps}>
            {children}
          </button>
        )}
      </motion.div>
    </div>
  );
}
