import { TopBar } from "@/components/layout/TopBar";
import { Hero } from "@/components/hero/Hero";
import { DockNav } from "@/components/dock/DockNav";
import { CaseStudyWindow } from "@/components/case-study/CaseStudyWindow";
import { AuroraBackground } from "@/components/background/AuroraBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <AuroraBackground />

      <TopBar />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4">
        <Hero />
      </div>

      <div className="relative z-10 flex justify-center px-4 pb-12 sm:pb-16">
        <DockNav />
      </div>

      <CaseStudyWindow />
    </main>
  );
}
