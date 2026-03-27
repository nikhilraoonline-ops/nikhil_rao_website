import { cn } from "@/lib/utils";
import { getTagStyle } from "@/lib/tagColors";

interface BadgeProps {
  label: string;
  variant?: "tag" | "pill" | "mono";
  className?: string;
}

/**
 * Versatile badge chip component.
 * When variant="tag", automatically applies the tag color mapping.
 */
export default function Badge({ label, variant = "tag", className }: BadgeProps) {
  if (variant === "tag") {
    return (
      <span
        className={cn(
          "inline-block font-mono text-xs px-2 py-0.5 rounded border",
          getTagStyle(label),
          className
        )}
      >
        {label}
      </span>
    );
  }

  if (variant === "pill") {
    return (
      <span
        className={cn(
          "inline-block text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60",
          className
        )}
      >
        {label}
      </span>
    );
  }

  // mono — used for role/credential chips in Hero
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-xs px-3 py-1 rounded border border-[#00D492]/25 bg-[#00D492]/8 text-[#00D492] tracking-wide",
        className
      )}
    >
      {label}
    </span>
  );
}
