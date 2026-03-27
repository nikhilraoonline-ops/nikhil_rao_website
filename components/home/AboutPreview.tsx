import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";

const stats = [
  { label: "Years in Finance",  value: "5+"         },
  { label: "Certifications",    value: "CA · CFA III" },
  { label: "Assets Covered",    value: "Rates · Credit · Equity" },
  { label: "Automation Tools",  value: "Python · VBA" },
];

const highlights = [
  "Daily P&L production for fixed income and rates trading desks",
  "First-attempt Chartered Accountant (ICAI), financial services auditor",
  "CFA Level III candidate — derivatives, fixed income, portfolio management",
  "Building Python tooling to automate reconciliations and reporting",
];

export default function AboutPreview() {
  return (
    <Section
      eyebrow="About"
      title="Finance professional. Analytical thinker."
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left — narrative */}
        <div>
          <p className="text-white/60 text-base leading-relaxed mb-5">
            I work in product control at a global investment bank in London,
            where my day involves reconciling P&amp;L, decomposing risk exposures,
            and independently verifying derivative prices.
          </p>
          <p className="text-white/60 text-base leading-relaxed mb-7">
            My background is in professional accounting (Chartered Accountant,
            ICAI) and financial services audit, which gives me both the
            technical and the governance lens on how financial institutions work.
          </p>

          <ul className="space-y-2.5 mb-8">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-white/55"
              >
                <span className="text-[#00D492] mt-0.5 shrink-0">›</span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-[#00D492] hover:text-[#00D492]/80 font-medium transition-colors"
          >
            Full story &amp; timeline
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Right — stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="p-5 rounded-lg border border-white/5 bg-[#0A0F1E] card-hover"
            >
              <p className="font-mono text-xs text-white/25 uppercase tracking-widest mb-2">
                {label}
              </p>
              <p className="text-white/85 font-semibold text-sm leading-snug">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
