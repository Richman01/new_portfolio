export function PullQuote({ quote, color }: { quote: string; color: string }) {
  void color;

  return (
    <blockquote className="mx-auto my-10 max-w-3xl text-center font-display text-2xl leading-snug font-normal tracking-tight text-foreground sm:my-12 sm:text-3xl">
      {quote}
    </blockquote>
  );
}
