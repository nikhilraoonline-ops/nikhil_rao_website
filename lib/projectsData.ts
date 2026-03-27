export interface Project {
  title: string;
  description: string;
  tech: string[];
  problem: string;
  approach: string;
  impact: string;
  github?: string;
  featured?: boolean;
}

export const allProjects: Project[] = [
  {
    title: "Daily P&L Dashboard",
    description:
      "Automated P&L production and reporting pipeline for fixed income trading desks.",
    tech: ["Python", "Pandas", "openpyxl", "Matplotlib"],
    problem:
      "The daily P&L report was manually produced in Excel — requiring 2+ hours of data collection, VLOOKUP-heavy reconciliation, and formatting. Human error risk was non-trivial and any delay in report delivery had downstream consequences.",
    approach:
      "Built a Python pipeline using Pandas to ingest trade data from multiple CSV/Excel exports, compute P&L by book, trader, and product, then output a formatted Excel workbook and an HTML email summary. Designed a threshold-based alerting module to highlight moves outside predefined risk bands.",
    impact:
      "Reduced daily reporting time from 2+ hours to under 15 minutes. Zero manual formatting errors post-deployment. Threshold alerts enabled faster escalation — two significant breaks were caught same-day that would previously have surfaced at month-end.",
    featured: true,
  },
  {
    title: "Trade Reconciliation Automation",
    description:
      "Python-VBA hybrid tool for automated trade matching between front-office and back-office systems.",
    tech: ["Python", "pandas", "VBA", "xlwings"],
    problem:
      "Daily reconciliation between front-office (Murex) and the accounting general ledger required manual comparison of 400–600 trades. The process took 2.5–3 hours and the break log was inconsistently documented, making trend analysis impossible.",
    approach:
      "Two-layer solution: a VBA macro to standardize and export raw data from both systems into a common format, and a Python script (pandas) to match records, classify breaks by type (price tolerance, missing trade, quantity mismatch), and generate a structured exception report.",
    impact:
      "Reconciliation time dropped from ~3 hours to 20 minutes. Break classification enabled root-cause trending — one systematic interface issue was identified and resolved within a week of deployment.",
    featured: true,
  },
  {
    title: "Options Greeks Calculator",
    description:
      "Interactive Black-Scholes pricing and risk tool with full first- and second-order Greeks.",
    tech: ["Python", "NumPy", "SciPy", "Streamlit"],
    problem:
      "Needed a quick, customizable reference tool for options pricing during CFA Level III prep and market analysis sessions — Bloomberg terminal access is not always available outside work.",
    approach:
      "Implemented the Black-Scholes model with delta, gamma, vega, theta, rho, vanna, and volga. Built a Streamlit UI for interactive parameter sliders (spot, strike, vol, rate, expiry) with real-time chart updates showing Greek profiles across the strike and time dimensions.",
    impact:
      "Personal tool actively used during CFA derivatives study. The interactive Greek surfaces helped build intuition for convexity and vega behaviour that static textbook charts cannot convey. Shared with two CFA study group peers.",
    featured: false,
  },
  {
    title: "Audit Checklist System",
    description:
      "Dynamic VBA-driven audit documentation tool for standardized financial statement testing.",
    tech: ["Excel", "VBA", "Power Query"],
    problem:
      "Audit teams used inconsistently formatted, manually updated Excel workbooks for testing documentation. Partner review time was inflated by formatting issues, and compliance gaps appeared across engagements.",
    approach:
      "Built a VBA-driven system with dynamic form generation based on risk assessment selections. Auto-populates testing templates, applies conditional formatting for completion status (Not started / In progress / Complete / N/A), and generates a summary dashboard exportable as PDF.",
    impact:
      "Adopted across 12 client engagements. Estimated 30% reduction in partner review time from standardised documentation. Became the team's default template for BFSI sector audits.",
    featured: false,
  },
];

export const featuredProjects = allProjects.filter((p) => p.featured);
