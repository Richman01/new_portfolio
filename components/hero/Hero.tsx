import { Averia_Serif_Libre } from "next/font/google";
import { HeroAvatar } from "@/components/hero/HeroAvatar";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const headlineFont = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function Hero() {
  return (
    <section className="flex flex-col items-center px-4 pt-24 pb-8 text-center sm:px-6 sm:pt-32 sm:pb-10">
      <HeroAvatar />

      <p className="mt-4 text-base font-medium text-muted">{site.name}</p>

      <h1
        className={cn(
          headlineFont.className,
          "mt-4 max-w-xl text-3xl leading-[1.25] font-bold tracking-tight sm:text-4xl md:text-5xl"
        )}
      >
        {site.headline}
      </h1>
    </section>
  );
}
