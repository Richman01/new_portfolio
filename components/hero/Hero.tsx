import { Averia_Serif_Libre } from "next/font/google";
import { PlaceholderBlock } from "@/components/shared/PlaceholderBlock";
import { StatsRow } from "@/components/hero/StatsRow";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const headlineFont = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function Hero() {
  return (
    <section className="flex flex-col items-center px-4 pt-24 pb-8 text-center sm:px-6 sm:pt-32 sm:pb-10">
      <div className="h-16 w-16 overflow-hidden sm:h-20 sm:w-20 md:h-24 md:w-24">
        <PlaceholderBlock
          sizeVariant="hero-avatar"
          alt={`${site.name} portrait`}
          label={site.shortName}
          color="#8a8a8f"
        />
      </div>

      <p className="mt-4 text-sm text-muted">{site.name}</p>

      <h1
        className={cn(
          headlineFont.className,
          "mt-4 max-w-xl text-3xl leading-[1.25] font-bold tracking-tight sm:text-4xl md:text-5xl"
        )}
      >
        {site.headline}
      </h1>

      <StatsRow />
    </section>
  );
}
