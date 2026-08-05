import type { Metadata } from "next";
import { TopBar } from "@/components/layout/TopBar";
import { ScannerBackground } from "@/components/background/ScannerBackground";
import { AboutMePanel } from "@/components/about/AboutMePanel";
import { CareerJourneyPanel } from "@/components/about/CareerJourneyPanel";
import { BackLink } from "@/components/shared/BackLink";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About - ${site.name}`,
  description: site.bio,
};

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <ScannerBackground />

      <TopBar />

      <BackLink href="/" className="fixed top-4 left-4 z-40 sm:top-6 sm:left-6" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-24 pb-16 sm:pt-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr] lg:items-start">
          <AboutMePanel />
          <CareerJourneyPanel />
        </div>
      </div>
    </main>
  );
}
