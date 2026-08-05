import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

interface BackLinkProps {
  href?: string;
  onClick?: () => void;
  label?: string;
  iconColor?: string;
  className?: string;
}

/** Shared back-navigation pill, used both for real route navigation (/about) and in-window back actions (achievement drill-in). */
export function BackLink({ href, onClick, label = "Back", iconColor, className }: BackLinkProps) {
  const sharedClassName = cn(
    "inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium text-muted shadow-sm transition-colors hover:bg-surface-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
    className
  );

  const content = (
    <>
      <ArrowLeft size={16} aria-hidden style={iconColor ? { color: iconColor } : undefined} />
      {label}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={sharedClassName}>
      {content}
    </button>
  );
}
