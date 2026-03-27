import { marketTickerData, type MarketItem } from "@/lib/marketData";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

function TickerItem({ item }: { item: MarketItem }) {
  return (
    <div className="inline-flex items-center gap-2 px-6 border-r border-white/5 shrink-0">
      <span className="font-mono text-[11px] text-white/35 uppercase tracking-wider">
        {item.name}
      </span>
      <span className="font-mono text-sm font-medium text-white/80">
        {item.value}
      </span>
      <span
        className={cn(
          "font-mono text-xs flex items-center gap-0.5",
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
  );
}

/**
 * Infinite-scroll market ticker strip.
 * Data duplicated so the CSS animation loops seamlessly.
 */
export default function MarketTicker() {
  const doubled = [...marketTickerData, ...marketTickerData];

  return (
    <div
      className="relative bg-black/50 border-y border-white/5 overflow-hidden py-2.5"
      aria-label="Market data ticker"
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="ticker-scroll flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <TickerItem key={`${item.name}-${i}`} item={item} />
        ))}
      </div>

      <p className="absolute bottom-0.5 right-14 font-mono text-[9px] text-white/15 z-10">
        Static data · for illustrative purposes only
      </p>
    </div>
  );
}
