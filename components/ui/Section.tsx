import { cn } from "@/lib/utils";

interface SectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Wrapper that adds a consistent eyebrow label + heading above any section content.
 */
export default function Section({
  eyebrow,
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="mb-12">
        {eyebrow && (
          <p className="font-mono text-xs text-[#00D492] uppercase tracking-[0.18em] mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-white/90 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-white/45 text-base max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
