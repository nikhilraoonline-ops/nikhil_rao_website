import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";

const stats = [
  { label: "Years in Finance",  value: "4+"                    },
  { label: "Certifications",    value: "CA · CFA L3 Passed"    },
  { label: "Products",          value: "MBS · IRS · TBA · CLN" },
  { label: "Automation Saves",  value: "800+ hrs p.a."         },
];

const highlights = [
  "Daily P&L, risk reporting and reconciliations for Mortgage Banking Secondary Markets at JPMC",
  "Qualified Chartered Accountant (ICAI) and CFA Level 3 passed",
  "Built Python and VBA solutions creating time saves of 800+ hours per year",
  "Won Value Pin for a Python-based recon saving the firm upwards of $5mn",
  "AI Ambassador and lead of the AI squad at JP Morgan Chase, Bengaluru",
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
            I work as a Product Controller at JP Morgan Chase &amp; Co. in Bengaluru,
            covering Mortgage Banking Secondary Markets trade desks. My day involves
            daily and monthly P&amp;L reporting, risk reconciliations, and SOX and
            Volcker controls across products like MBS, Ratelocks, IRS, TBAs and CLNs.
          </p>
          <p className="text-white/60 text-base leading-relaxed mb-7">
            My background spans professional accounting (CA, ICAI), Big-firm audit
            at Sundaram &amp; Srinivasan, and an industrial training stint at
            Hindustan Unilever — which gives me a broad technical and governance
            lens across financial institutions and corporates.
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
