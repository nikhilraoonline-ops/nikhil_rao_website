import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nikhil Rao — Chartered Accountant, CFA Level 3 passed, and Product Control Associate at JP Morgan Chase & Co., Bengaluru. Background in BFSI audit and financial instruments valuation.",
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
    period: "Jan 2025 — Present",
    role: "Associate — Product Control",
    org: "JP Morgan Chase & Co.",
    location: "Bengaluru, India",
    bullets: [
      "Product Controller for Mortgage Banking Secondary Markets trade desks",
      "Daily and monthly P&L and risk reporting, reconciliations, SOX and Volcker controls",
      "Products include MBS, Ratelocks, Interest Rate Swaps (IRS), TBAs and CLNs",
      "Developed multiple Python and VBA automation solutions creating time saves of 800+ hours per annum",
      "Created reconciliation processes resulting in savings of upwards of $5mn (won a Value Pin for excellence)",
      "One of the leads of the AI squad and designated AI Ambassador for the line of business",
      "Won Annual Award for Culture for heading the Analysts' Committee at JPMC Bengaluru (2024)",
    ],
    tags: ["P&L Reporting", "MBS", "IRS", "TBA", "Python", "VBA", "SOX"],
  },
  {
    period: "Apr 2022 — Dec 2024",
    role: "Analyst — Product Control",
    org: "JP Morgan Chase & Co.",
    location: "Bengaluru, India",
    bullets: [
      "Product Controller on the same Mortgage Banking Secondary Markets trade desks",
      "Individually developed macros and Python solutions saving 800+ hours p.a.",
      "Won a Value Pin for Operational Excellence — ad-hoc Python recon saving the firm $4mn+",
      "Won a Value Pin for organising LLM hackathons and designated AI Ambassador",
      "Nominated for JPMC Rising Star Award in 2022 and 2023",
    ],
    tags: ["P&L Attribution", "Reconciliation", "Automation", "LLM / AI"],
  },
  {
    period: "Apr 2021 — Mar 2022",
    role: "Audit Manager",
    org: "Rao & Santosh, Chartered Accountants",
    location: "Chennai, India",
    bullets: [
      "Led an audit team across statutory, internal, and tax audits",
      "Tax consultancy and income tax filings for a diverse client portfolio",
      "Industries covered: real estate, jewellery, and software companies",
    ],
    tags: ["Statutory Audit", "Tax", "Internal Audit", "CA"],
  },
  {
    period: "Apr 2020 — Mar 2021",
    role: "Industrial Trainee — Finance",
    org: "Hindustan Unilever Ltd.",
    location: "Mumbai, India",
    bullets: [
      "Financial reporting: experience in annual and quarterly reporting",
      "Worked on statutory compliance processes",
      "Assisted senior management on the Annual Report and AGM planning",
    ],
    tags: ["Financial Reporting", "FMCG", "Compliance", "AGM"],
  },
  {
    period: "Apr 2018 — Mar 2020",
    role: "Articled Assistant",
    org: "Sundaram & Srinivasan, Chartered Accountants",
    location: "Chennai, India",
    bullets: [
      "Statutory, internal, and process audits across multiple industries",
      "Income tax audits and GST audits",
      "Industries: automobiles, NBFCs, and insurance companies",
    ],
    tags: ["CA Articleship", "NBFC", "GST", "IndAS"],
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
      "Daily P&L Reporting & Attribution",
      "Risk Reporting & Reconciliations",
      "MBS, IRS, TBA, CLN, Ratelock Products",
      "SOX & Volcker Controls",
      "Financial Statement Analysis",
      "Tax — Direct & Indirect",
    ],
  },
  {
    category: "Programming & Automation",
    skills: [
      "Python (pandas, openpyxl, automation)",
      "VBA / Excel Macro Development",
      "SQL (mid-level)",
      "Alteryx (mid-level)",
      "LLM / GPT AI Tools",
      "MS Office (advanced)",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Excel (Advanced)",
      "Alteryx",
      "Bloomberg",
      "Power Query",
    ],
  },
  {
    category: "Education",
    skills: [
      "Chartered Accountant — ICAI (July 2021)",
      "CFA Level 3 — Passed (August 2025)",
      "B.Com — IGNOU (2019)",
      "Class 12 CBSE — 95.8% (2016)",
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
              I&apos;m a Product Control Associate at JP Morgan Chase &amp; Co. in
              Bengaluru, covering the Mortgage Banking Secondary Markets trade desks.
              My day involves daily and monthly P&amp;L reporting, risk reconciliations,
              and SOX and Volcker controls across products like MBS, Ratelocks,
              IRS, TBAs and CLNs.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              I qualified as a Chartered Accountant (ICAI) in 2021 and passed
              CFA Level 3 in August 2025. Before joining JPMC, I trained at
              Sundaram &amp; Srinivasan CAs, did an industrial training stint at
              Hindustan Unilever in Mumbai, and spent a year managing audit
              engagements at Rao &amp; Santosh CAs in Chennai.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Alongside the finance work, I build Python and VBA automation tools
              that eliminate manual toil — solutions I&apos;ve built at JPMC have saved
              800+ hours per year and $5mn+ in operational savings. I&apos;m also an
              AI Ambassador at JPMC and lead LLM hackathons for the team.
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
