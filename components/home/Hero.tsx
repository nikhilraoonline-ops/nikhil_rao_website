import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const credentials = [
  { label: "Product Control" },
  { label: "CA (ICAI)"       },
  { label: "CFA L3 Passed"   },
];

const quickStats = [
  { label: "Experience",    value: "4+ years"                },
  { label: "Credentials",   value: "CA · CFA L3"             },
  { label: "Stack",         value: "Python · VBA · SQL"      },
  { label: "Focus",         value: "MBS · Rates · Recons"    },
];

// Decorative floating terms — Bloomberg-terminal aesthetic
const floatingTerms = [
  "DV01", "PnL", "Greeks", "CAPM", "VaR",
  "Alpha", "Beta", "OAS", "IRR", "DCF",
  "Vol",   "Gamma", "Vega", "Theta", "Rho",
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center hero-bg overflow-hidden pt-16">

      {/* Decorative floating finance terms (background – desktop only) */}
      <div
        className="absolute top-24 right-8 hidden xl:flex flex-col gap-1 select-none pointer-events-none"
        aria-hidden="true"
      >
        {floatingTerms.map((term) => (
          <span
            key={term}
            className="font-mono text-[11px] text-[#00D492]/12 leading-5"
          >
            {term}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl">

          {/* Credential chips */}
          <div className="flex flex-wrap gap-2 mb-8 anim-0">
            {credentials.map(({ label }) => (
              <Badge key={label} label={label} variant="mono" />
            ))}
          </div>

          {/* Name — split over two lines for impact */}
          <h1 className="anim-1">
            <span className="block text-6xl sm:text-7xl lg:text-[88px] font-bold tracking-tight text-white leading-none mb-1">
              Nikhil
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-[88px] font-bold tracking-tight leading-none">
              <span className="accent-gradient">Rao</span>
              <span className="text-[#00D492]">.</span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-7 text-xl sm:text-2xl font-light text-white/55 anim-2">
            Finance, Markets, and Systems Thinking.
          </p>

          {/* Short pitch */}
          <p className="mt-3 text-sm sm:text-base text-white/40 max-w-lg leading-relaxed anim-3">
            Product Controller at JP Morgan Chase &amp; Co., Bengaluru. Automating financial
            workflows, building Python tools that save hundreds of hours, and writing
            about the forces that move markets.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 anim-4">
            <Button href="/insights" variant="primary" size="lg">
              Read Insights
              <ArrowRight size={15} />
            </Button>
            <Button href="/projects" variant="secondary" size="lg">
              View Work
            </Button>
          </div>

          {/* Quick stats strip */}
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 anim-5">
            {quickStats.map(({ label, value }) => (
              <div key={label}>
                <p className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="text-sm text-white/65 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#05080F] to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
