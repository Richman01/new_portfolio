import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";
import { AuroraBackground } from "@/components/background/AuroraBackground";
import { AboutMePanel } from "@/components/about/AboutMePanel";
import { CareerJourneyPanel } from "@/components/about/CareerJourneyPanel";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: site.bio,
};

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <AuroraBackground />

      <TopBar />

      <Link
        href="/"
        className="fixed top-4 left-4 z-40 flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:top-6 sm:left-6"
      >
        <ArrowLeft size={16} aria-hidden />
        Back
      </Link>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-24 pb-16 sm:pt-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr] lg:items-start">
          <AboutMePanel />
          <CareerJourneyPanel />
        </div>
      </div>
    </main>
  );
}
