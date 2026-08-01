import Image from "next/image";
import { cn } from "@/lib/cn";

export type PlaceholderSizeVariant = "dock-icon" | "hero-avatar";

const variantClasses: Record<PlaceholderSizeVariant, string> = {
  "dock-icon": "h-full w-full rounded-[28%]",
  "hero-avatar": "h-full w-full rounded-full",
};

const labelSizeClasses: Record<PlaceholderSizeVariant, string> = {
  "dock-icon": "text-[10px]",
  "hero-avatar": "text-xs",
};

interface PlaceholderBlockProps {
  src?: string;
  alt: string;
  label?: string;
  color?: string;
  sizeVariant: PlaceholderSizeVariant;
  className?: string;
}

export function PlaceholderBlock({
  src,
  alt,
  label,
  color = "#6b6b6f",
  sizeVariant,
  className,
}: PlaceholderBlockProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden", variantClasses[sizeVariant], className)}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      style={{ backgroundColor: color }}
      className={cn(
        "flex select-none items-center justify-center overflow-hidden",
        variantClasses[sizeVariant],
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "px-2 text-center font-medium text-white/90",
            labelSizeClasses[sizeVariant]
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
