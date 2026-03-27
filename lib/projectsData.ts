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
    title: "Ad-hoc Python Reconciliation — $5mn+ Savings",
    description:
      "An unplanned, high-urgency Python reconciliation tool built to resolve a critical break between two trade systems at JP Morgan Chase.",
    tech: ["Python", "pandas", "openpyxl"],
    problem:
      "A large unreconciled break was identified between two internal systems for Mortgage Banking Secondary Markets positions. The break had potential P&L and regulatory implications. The existing manual process was too slow to isolate the root cause within the required timeframe, and the volume of trade records made a spreadsheet-based approach unworkable.",
    approach:
      "Built an ad-hoc Python script using pandas to ingest and normalise records from both systems, perform a granular match on trade IDs, notional, and product type, and surface a structured break report with classification of each exception. The script was iterated rapidly in a live environment to chase down the root cause.",
    impact:
      "Successfully identified and resolved the break, resulting in savings of upwards of $5mn for the firm. Recognised with a JP Morgan Chase Value Pin for Operational Excellence.",
    featured: true,
  },
  {
    title: "P&L & Risk Reporting Automation Suite",
    description:
      "A suite of Python and VBA tools to automate daily and monthly P&L production and risk reporting across Mortgage Banking Secondary Markets desks at JPMC.",
    tech: ["Python", "VBA", "pandas", "openpyxl", "Excel"],
    problem:
      "Daily P&L and risk reporting for MBS, Ratelock, IRS, TBA and CLN desks involved significant manual effort — pulling data from multiple sources, reconciling figures, formatting reports, and distributing to stakeholders. This consumed several hours daily and introduced operational risk through manual steps.",
    approach:
      "Developed a combination of Python scripts and VBA macros to automate the end-to-end reporting workflow: automated data ingestion from system exports, reconciliation logic, exception flagging, formatted Excel output generation, and scheduled distribution. Built incrementally, one report at a time, with validation checkpoints at each stage.",
    impact:
      "Automation solutions collectively save 800+ hours per annum across the team. Reports that previously took hours are produced in minutes, with lower error rates and a clear audit trail for SOX and Volcker control purposes.",
    featured: true,
  },
  {
    title: "LLM Hackathon Programme & AI Tooling",
    description:
      "Designed and led an internal LLM hackathon series at JP Morgan Chase, Bengaluru, to explore AI-driven automation across finance workflows.",
    tech: ["Python", "LLM / GPT APIs", "Prompt Engineering", "Excel"],
    problem:
      "Finance operations teams spend significant time on repetitive, rules-based tasks — commentary drafting, exception triage, data lookup and summarisation — that are well-suited to large language model augmentation. There was no structured programme to explore or pilot these tools within the line of business.",
    approach:
      "Organised and facilitated multiple LLM hackathons for analysts and associates, defining problem statements around finance workflows, setting up sandboxed GPT-based tooling, and coaching participants on prompt engineering and integration patterns. Acted as primary point of contact for AI tooling exploration within the team.",
    impact:
      "Won a JP Morgan Chase Value Pin for organising the hackathon programme. Designated AI Ambassador for the line of business and currently one of the leads of the AI squad at JPMC Bengaluru. The programme has driven ongoing adoption of LLM-assisted workflows across the team.",
    featured: true,
  },
  {
    title: "Audit Documentation & Checklist System",
    description:
      "A VBA-driven dynamic audit workpaper system for standardised testing documentation, built during the Rao & Santosh engagement period.",
    tech: ["Excel", "VBA", "Power Query"],
    problem:
      "Audit workpapers were maintained in inconsistently formatted, manually updated Excel files. Testing templates varied across engagements and team members, making quality review slower and creating gaps in compliance documentation for statutory and internal audit files.",
    approach:
      "Built a VBA-driven system that generates testing templates dynamically based on audit area and risk selections. Auto-populates client and engagement details, applies conditional formatting for completion status (Not started / In progress / Complete / N/A), and produces a summary sign-off dashboard exportable as PDF for partner review.",
    impact:
      "Standardised workpaper format across all engagements. Reduced partner review time through consistent documentation structure. Adopted as the team's default template for statutory and internal audit files across real estate, jewellery, and software sector clients.",
    featured: false,
  },
];

export const featuredProjects = allProjects.filter((p) => p.featured);
