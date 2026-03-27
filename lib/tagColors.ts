/**
 * Tag color mapping for insight posts.
 * Each tag maps to a Tailwind class string for its chip style.
 */

const TAG_STYLES: Record<string, string> = {
  Macro:              "bg-blue-500/10    text-blue-400    border-blue-500/20",
  Equity:             "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Fixed Income":     "bg-amber-500/10   text-amber-400   border-amber-500/20",
  Credit:             "bg-orange-500/10  text-orange-400  border-orange-500/20",
  FX:                 "bg-purple-500/10  text-purple-400  border-purple-500/20",
  "Product Control":  "bg-cyan-500/10    text-cyan-400    border-cyan-500/20",
  Technology:         "bg-indigo-500/10  text-indigo-400  border-indigo-500/20",
  "Risk Management":  "bg-rose-500/10    text-rose-400    border-rose-500/20",
  Rates:              "bg-yellow-500/10  text-yellow-400  border-yellow-500/20",
  Derivatives:        "bg-violet-500/10  text-violet-400  border-violet-500/20",
  Automation:         "bg-teal-500/10    text-teal-400    border-teal-500/20",
  "Career & Growth":  "bg-pink-500/10    text-pink-400    border-pink-500/20",
};

const DEFAULT_STYLE = "bg-white/5 text-white/60 border-white/10";

export function getTagStyle(tag: string): string {
  return TAG_STYLES[tag] ?? DEFAULT_STYLE;
}

export function getAllTagStyles(): Record<string, string> {
  return TAG_STYLES;
}
