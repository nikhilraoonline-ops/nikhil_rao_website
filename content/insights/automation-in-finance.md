---
title: "From Excel to Python: Automating Finance Workflows That Don't Scale"
date: "2024-11-22"
tags: ["Technology", "Automation", "Product Control"]
excerpt: "Excel is the lingua franca of finance — but it breaks down at scale, under time pressure, and when audit trails matter. Here's a practical guide to identifying what's worth automating and how Python makes the transition tractable."
readTime: "9 min read"
featured: false
---

Almost every finance professional has a spreadsheet they're slightly scared of. It works — just don't touch row 47, don't delete that hidden sheet, and make sure you run the macros in the right order.

This isn't a criticism of Excel. It's genuinely the right tool for a huge range of finance tasks. But there's a category of workflows where Excel's limitations create real operational risk — and Python provides a tractable alternative.

## Where Excel Breaks Down

The failure modes are predictable:

**Size**: Excel handles up to ~1 million rows, but performance degrades well before that. A reconciliation file with 500K rows of trade data, VLOOKUP'd against a reference table, takes minutes to calculate and crashes on a Tuesday morning before the 9am sign-off.

**Reproducibility**: A spreadsheet calculated on my machine may give different results on yours — due to different named ranges, different add-ins, or different data connections. The process is the file, and the file is a black box.

**Audit trail**: Who changed cell D47 on Friday? Unless you're using a version control system (almost nobody is), you don't know. For finance teams that need to demonstrate controls to internal audit or regulators, this is a genuine problem.

**Parallelism and automation**: Excel is fundamentally interactive. You can schedule a Python script to run at 7:30am every morning and email results to the desk before anyone has opened their laptop. You cannot easily do this with Excel.

**Testing**: There is no standard way to unit-test an Excel model. Is the formula in row 234 correct? You pull the formula out, you stare at it. That's the test.

## The Python Advantages

Python doesn't replace Excel — it replaces the *processes* that Excel handles poorly:

### Pandas for Data Manipulation

```python
import pandas as pd

# Load trade data from two systems
fo_trades = pd.read_csv("front_office_extract.csv")
bo_trades = pd.read_csv("back_office_extract.csv")

# Merge on trade ID
merged = fo_trades.merge(
    bo_trades,
    on="trade_id",
    how="outer",
    suffixes=("_fo", "_bo"),
    indicator=True
)

# Identify breaks
breaks = merged[
    (merged["_merge"] != "both") |
    (abs(merged["notional_fo"] - merged["notional_bo"]) > 0.01)
]

print(f"Total breaks: {len(breaks)}")
breaks.to_excel("break_report.xlsx", index=False)
```

This is a reconciliation that would take 45 minutes manually in Excel — running in under 5 seconds once automated.

### Reproducibility and Scheduling

A Python script can be scheduled via Windows Task Scheduler, cron (Linux/Mac), or an orchestration tool like Prefect or Apache Airflow. The process runs identically every time, from the same code, with logged outputs.

```python
import logging
from datetime import datetime

logging.basicConfig(
    filename=f"run_log_{datetime.now().strftime('%Y%m%d')}.log",
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s"
)

logging.info("Reconciliation process started")
# ... your process here
logging.info(f"Reconciliation complete. {len(breaks)} breaks found.")
```

Now you have an immutable audit trail of every run.

### openpyxl for Excel Output

Python doesn't mean abandoning Excel output. The `openpyxl` library allows you to create formatted Excel files programmatically — same look as the manual report, produced automatically:

```python
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment

wb = Workbook()
ws = wb.active
ws.title = "PnL Summary"

# Style headers
header_fill = PatternFill("solid", fgColor="0A0F1E")
header_font = Font(bold=True, color="00D492")

for col, header in enumerate(["Book", "Delta PnL", "Vega PnL", "Theta", "Total"], 1):
    cell = ws.cell(row=1, column=col, value=header)
    cell.fill = header_fill
    cell.font = header_font

wb.save("pnl_report.xlsx")
```

## What to Automate First

Not everything is worth automating. The highest-ROI candidates share common characteristics:

1. **High frequency**: Run daily or more — the automation benefit compounds
2. **Structured inputs**: The data comes from system exports, not manually typed
3. **Clear success/failure criteria**: "The two sides reconcile within £1" is automatable. "Does this look right?" is not
4. **High error cost**: Where a mistake has real consequences — sign-off failures, reporting errors, missed escalations

**Classic candidates in finance:**
- Daily P&L production from system exports
- Trade reconciliations between systems
- End-of-month regulatory reporting templates
- Portfolio data aggregation from multiple custodian files
- Variance analysis vs. prior period or budget

**Poor candidates for automation:**
- Tasks requiring judgment and narrative (use automation to *support* these, not replace them)
- One-off analyses that will never run again
- Processes with highly irregular, unstructured inputs

## A Practical Getting-Started Path

For a finance professional with solid Excel skills but limited coding experience:

1. **Start with pandas**: If you can do something in Excel with VLOOKUP and a pivot table, you can do it in pandas. The mental model translates surprisingly well
2. **Use Jupyter Notebooks** initially: Interactive, like a spreadsheet, but with version control and reproducibility
3. **Move to `.py` scripts** for production workflows: Notebooks are great for exploration; scripts are better for scheduled runs
4. **Version control with Git**: Even a basic commit history is transformative compared to `v1_final_REVISED_v2.xlsx`
5. **Build incrementally**: Automate one step of a multi-step process, validate it thoroughly, then extend

The goal isn't to become a software engineer. It's to **own your process** — to not be dependent on an undocumented spreadsheet that only you understand, that breaks when someone's on holiday, and that provides zero confidence that this month's output is actually the same as last month's.

---

The best finance professionals I've worked alongside are not the ones who built the most complex models. They're the ones who understood their data end-to-end, automated the repeatable parts, and reserved their judgment for the parts that actually required it.

---

*Views are my own. Code examples are illustrative and simplified.*
