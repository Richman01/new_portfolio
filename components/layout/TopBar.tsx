import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function TopBar() {
  return (
    <div className="fixed top-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-surface p-1 shadow-sm">
      <ThemeToggle />
      <Link
        href="/about"
        className="rounded-full px-3 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:bg-surface-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      >
        about
      </Link>
    </div>
  );
}
