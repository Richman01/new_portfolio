export function PullQuote({ quote, color }: { quote: string; color: string }) {
  return (
    <blockquote
      style={{ borderColor: color }}
      className="my-6 border-l-2 bg-surface py-3 pl-5 pr-4 text-lg leading-relaxed text-foreground"
    >
      {quote}
    </blockquote>
  );
}
