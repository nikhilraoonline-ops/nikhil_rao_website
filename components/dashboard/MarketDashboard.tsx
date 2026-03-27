import { marketDashboardData, type MarketItem } from "@/lib/marketData";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import Section from "@/components/ui/Section";

function DataRow({ item }: { item: MarketItem }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/4 last:border-0">
      <span className="font-mono text-xs text-white/50">{item.name}</span>
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-white/80 tabular-nums">
          {item.value}
        </span>
        <span
          className={cn(
            "font-mono text-xs flex items-center gap-0.5 min-w-[60px] justify-end",
            item.direction === "up"
              ? "text-emerald-400"
              : item.direction === "down"
              ? "text-red-400"
              : "text-white/35"
          )}
        >
          {item.direction === "up"      && <TrendingUp   size={10} aria-hidden />}
          {item.direction === "down"    && <TrendingDown  size={10} aria-hidden />}
          {item.direction === "neutral" && <Minus         size={10} aria-hidden />}
          {item.change}
        </span>
      </div>
    </div>
  );
}

function DashboardCard({
  label,
  items,
}: {
  label: string;
  items: MarketItem[];
}) {
  return (
    <div className="p-5 rounded-lg border border-white/5 bg-[#0A0F1E] card-hover">
      {/* Category header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00D492]" aria-hidden />
        <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.18em]">
          {label}
        </span>
      </div>

      <div>
        {items.map((item) => (
          <DataRow key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function MarketDashboard() {
  return (
    <Section
      eyebrow="Market Snapshot"
      title="A quick pulse on global markets."
      subtitle="Real-time context for the macro environment. Static data for illustrative purposes."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {marketDashboardData.map(({ id, label, items }) => (
          <DashboardCard key={id} label={label} items={items} />
        ))}
      </div>

      <p className="mt-4 font-mono text-[10px] text-white/20">
        * Static demonstration data only · Not live market data · Not financial advice
      </p>
    </Section>
  );
}
