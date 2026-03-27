import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nikhil Rao — Chartered Accountant, CFA Level III Candidate, and Product Control professional at a global investment bank. Background in BFSI audit and financial instruments valuation.",
};

/* ─── Data ──────────────────────────────────────────────── */

interface TimelineEntry {
  period: string;
  role: string;
  org: string;
  location: string;
  bullets: string[];
  tags: string[];
}

const experience: TimelineEntry[] = [
  {
    period: "2024 — Present",
    role: "Product Control Analyst",
    org: "Global Investment Bank",
    location: "London, UK",
    bullets: [
      "Daily P&L production, sign-off, and commentary for fixed income and rates trading desks",
      "Decomposition of P&L into delta, gamma, vega, carry, and unexplained residual components",
      "Independent Price Verification (IPV) of OTC derivatives — swaps, swaptions, FX options",
      "Month-end balance sheet substantiation, regulatory reporting (FINREP / COREP preparation)",
      "Automation of manual reporting processes using Python and Excel VBA",
    ],
    tags: ["P&L Attribution", "Derivatives", "Fixed Income", "IPV", "Bloomberg"],
  },
  {
    period: "2022 — 2024",
    role: "Senior Audit Associate — Financial Services",
    org: "Big 4 Professional Services",
    location: "London, UK",
    bullets: [
      "Led statutory audit engagements for hedge funds, asset managers, and investment banks",
      "Fair value assessment of financial instruments under IFRS 13 (Levels 1, 2, 3)",
      "Complex structured products — CLOs, credit default swaps, convertible bonds",
      "Risk-based audit approach; drafted audit committee papers and management letters",
      "Team lead for a 4-person junior team on a mid-size hedge fund engagement",
    ],
    tags: ["IFRS 9 / 13", "Financial Instruments", "Audit", "Valuation", "Hedge Funds"],
  },
  {
    period: "2019 — 2022",
    role: "Chartered Accountancy — Articleship",
    org: "Mid-Tier CA Firm",
    location: "Mumbai, India",
    bullets: [
      "3-year structured training programme covering statutory audits, direct and indirect tax",
      "BFSI sector specialisation: NBFCs, insurance companies, stockbrokers",
      "Qualified as Chartered Accountant (ICAI) on first attempt",
      "Exposure to IndAS / IGAAP, SEBI regulations, and RBI guidelines",
    ],
    tags: ["CA (ICAI)", "BFSI", "IndAS", "Tax", "Internal Audit"],
  },
];

interface SkillGroup {
  category: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Financial Analysis",
    skills: [
      "P&L Attribution",
      "Derivative Pricing (Black-Scholes, Monte Carlo)",
      "Risk Reporting",
      "Fixed Income Valuation",
      "Fair Value Hierarchy (IFRS 13)",
      "Financial Statement Analysis",
      "FX / Rates Products",
    ],
  },
  {
    category: "Programming & Data",
    skills: [
      "Python (pandas, numpy, matplotlib, openpyxl)",
      "VBA / Excel Automation",
      "SQL",
      "Streamlit",
      "Power Query",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Bloomberg Terminal",
      "Murex",
      "SAP",
      "Excel (Advanced)",
      "Power BI",
      "Git",
    ],
  },
  {
    category: "Certifications",
    skills: [
      "Chartered Accountant — ICAI (First Attempt)",
      "CFA Level III Candidate",
      "B.Com (Hons)",
    ],
  },
];

/* ─── Sub-components ────────────────────────────────────── */

function TimelineItem({
  entry,
  isLast,
}: {
  entry: TimelineEntry;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-6">
      {/* Vertical line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#00D492] border-2 border-[#05080F] ring-1 ring-[#00D492]/40 mt-1 shrink-0" />
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-[#00D492]/25 to-transparent mt-1" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 ${isLast ? "" : ""}`}>
        <p className="font-mono text-xs text-[#00D492]/70 tracking-wider mb-1">
          {entry.period}
        </p>
        <h3 className="text-base font-semibold text-white/90 mb-0.5">
          {entry.role}
        </h3>
        <p className="text-sm text-white/45 mb-4">
          {entry.org} · {entry.location}
        </p>

        <ul className="space-y-2 mb-4">
          {entry.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 text-sm text-white/50 leading-relaxed"
            >
              <span className="text-[#00D492]/60 mt-0.5 shrink-0">›</span>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <Badge key={tag} label={tag} variant="pill" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Page header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-[#00D492] uppercase tracking-[0.18em] mb-3">
            About
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white/90 leading-tight mb-5">
            The full picture.
          </h1>
          <div className="max-w-2xl space-y-4">
            <p className="text-white/60 text-base leading-relaxed">
              I work in product control at a global investment bank in London. My 
              role sits at the intersection of trading, risk, and finance — reconciling
              daily P&amp;L, decomposing it into its risk components, and independently
              verifying derivative valuations.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Before London, I trained as a Chartered Accountant in India, where I 
              developed deep expertise in BFSI audit and financial instruments accounting.
              I passed the CA exams on the first attempt and specialised in financial
              services clients from day one.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Alongside the day job I&apos;m a CFA Level III candidate (the final tier),
              which keeps my knowledge of portfolio management, fixed income, and 
              derivatives sharp and current. I also build Python automation tools for
              finance workflows — it&apos;s where analytical and engineering thinking meet.
            </p>
          </div>
        </div>

        {/* Experience timeline */}
        <section className="mb-20">
          <p className="font-mono text-xs text-[#00D492] uppercase tracking-[0.18em] mb-8">
            Experience
          </p>
          <div>
            {experience.map((entry, i) => (
              <TimelineItem
                key={entry.period}
                entry={entry}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <p className="font-mono text-xs text-[#00D492] uppercase tracking-[0.18em] mb-8">
            Skills &amp; Tooling
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {skillGroups.map(({ category, skills }) => (
              <div
                key={category}
                className="p-5 rounded-lg border border-white/5 bg-[#0A0F1E] card-hover"
              >
                <p className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-3">
                  {category}
                </p>
                <ul className="space-y-1.5">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-white/55"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#00D492]/50 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
