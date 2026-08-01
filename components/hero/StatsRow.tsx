import { stats } from "@/data/site";

export function StatsRow() {
  return (
    <dl className="mt-8 grid w-full max-w-xl grid-cols-3 gap-2 sm:mt-10 sm:gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1 px-1">
          <dt className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            {stat.value}
          </dt>
          <dd className="text-xs font-medium text-foreground/80 sm:text-sm">{stat.label}</dd>
          <dd className="text-[10px] text-muted sm:text-xs">{stat.sublabel}</dd>
        </div>
      ))}
    </dl>
  );
}
