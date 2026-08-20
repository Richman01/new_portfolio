export function PullQuote({ quote, color }: { quote: string; color: string }) {
  return (
    <blockquote className="relative my-8 border-y border-border py-7 pl-8 text-xl font-medium leading-relaxed tracking-tight text-foreground sm:text-2xl">
      <span aria-hidden className="absolute left-0 top-7 h-10 w-1 rounded-full" style={{ backgroundColor: color }} />
      {quote}
    </blockquote>
  );
}
