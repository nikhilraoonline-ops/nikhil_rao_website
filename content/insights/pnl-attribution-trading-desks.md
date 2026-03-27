---
title: "Understanding P&L Attribution in Trading Desks"
date: "2025-01-28"
tags: ["Product Control", "Fixed Income", "Derivatives"]
excerpt: "P&L attribution is the daily discipline of explaining where a trading desk made or lost money. It sounds simple. In practice, it involves decomposing risk sensitivities, reconciling models, and hunting unexplained residuals — here's how it actually works."
readTime: "10 min read"
featured: true
---

Every trading day ends with a question that can't be avoided: *where did the money go?*

P&L attribution (PLA) is the process of decomposing the daily mark-to-market change in a portfolio into components that can be explained by market movements, risk sensitivities, and time. It sits at the core of what a product control team does — and doing it well is significantly harder than it sounds.

## Why P&L Attribution Matters

At its most basic, PLA serves four purposes:

1. **Transparency**: Traders and management need to understand *why* the desk made or lost money — not just *how much*
2. **Risk management**: Unexplained P&L is a red flag. It signals either a model error, a data problem, or, in rare cases, something more serious
3. **Regulatory compliance**: Under Basel III and FRTB (Fundamental Review of the Trading Book), banks must demonstrate that their internal models adequately explain daily P&L
4. **Accountability**: Attribution pinpoints which trader, which book, and which position drove performance

## The Greeks: A Primer

For derivatives books, P&L attribution is fundamentally about **risk sensitivities** — the Greeks. Each Greek measures how much the value of a derivative changes for a unit move in an underlying market factor:

| Greek   | Sensitivity to                   | Sign Convention (long call)  |
|---------|-----------------------------------|-----------------------------|
| Delta (Δ) | Spot price                       | Positive                    |
| Gamma (Γ) | Rate of change of delta          | Positive                    |
| Vega (ν)  | Implied volatility               | Positive                    |
| Theta (Θ) | Time (passage of one day)        | Negative                    |
| Rho (ρ)   | Risk-free rate                   | Positive (calls)            |
| DV01      | Parallel shift in yield curve    | Varies                      |

A first-order approximation of daily P&L for a derivatives portfolio is:

$$\Delta PnL \approx \Delta \cdot \Delta S + \frac{1}{2} \Gamma \cdot (\Delta S)^2 + \nu \cdot \Delta \sigma + \Theta \cdot \Delta t + \rho \cdot \Delta r$$

This is the core of what product control calculates every day.

## The Attribution Hierarchy

In practice, P&L is broken down at several levels:

### 1. Delta P&L
The P&L arising from the change in the underlying price, scaled by the delta of the portfolio. For a rates desk, delta P&L is typically expressed as:

$$\text{Delta PnL} = DV01 \times \Delta \text{Yield}$$

Where DV01 (Dollar Value of a Basis Point) measures the sensitivity to a 1bp move in yields.

### 2. Gamma P&L
The additional convexity P&L from the second-order effect. In a convex instrument (like a bond or long option), a large move in rates generates *more* gain than predicted by the linear delta alone — this is gamma P&L.

### 3. Vega P&L
For options books, implied volatility moves generate P&L. Vega P&L is particularly significant in swaptions, FX options, and equity derivatives.

### 4. Carry / Theta
As time passes, options lose time value (for a long position). This is theta, or *carry* in rates parlance. For bonds, carry includes coupon accrual, roll-down, and funding cost.

### 5. Unexplained P&L
The residual — the difference between the total mark-to-market move and the sum of the attributed components. A small residual (typically <5% of theoretical P&L) is normal due to higher-order effects and approximation errors. A large or persistent residual requires investigation.

## The PLA Process: Day in the Life

A typical day in product control for a rates desk:

1. **Morning**: Market data is locked (close-of-business rates, vol surfaces, FX rates from the previous day)
2. **System runs**: The risk system revalues all positions using today's vs. yesterday's market data
3. **Greeks pull**: DV01, delta, gamma, vega by book and by instrument
4. **Attribution calculation**: Each market factor move × relevant Greek → attributed P&L component
5. **Reconciliation**: Attributed P&L totalled against total MTM P&L. The residual is computed
6. **Sign-off**: Trader reviews and confirms the attribution is reasonable
7. **Commentary**: Material moves (typically >£100k) require written commentary explaining the driver

## What Makes a "Good" PLA?

From a regulatory and internal governance standpoint:

- **Mean hypothesis test**: The average unexplained P&L should not be statistically different from zero over a rolling window
- **Variance test**: The variance of unexplained P&L should not exceed a threshold relative to total P&L variance
- **FRTB requirements**: Under FRTB, failure of PLA tests on a trading desk can result in that desk losing Internal Model Approach (IMA) approval — a significant capital impact

## Common Challenges

**Curve bucketing mismatch**: Risk systems often bucket DV01 differently from how market data is available — e.g., risk shows 5Y DV01 but market data is only available at 3Y and 7Y nodes.

**Vega surface approximations**: Implied vol surfaces have multiple dimensions (strike × tenor). Attributing vega P&L accurately requires matching the exact vol surface move to the right node.

**New trade day-one P&L**: When a dealer prices a new trade, the transaction price may differ slightly from the model mid, creating a day-one P&L adjustment that needs to be excluded from ongoing attribution.

**FX translation**: For a book running in multiple currencies, moves in the portfolio's base currency must be decomposed from the FX P&L — otherwise a USD rates desk appears to have FX P&L it doesn't own.

---

PLA is unglamorous in the best way — it's the daily discipline that keeps risk management honest. The next time a trading desk has a bad day, the product control pack is where the real story begins.

---

*Views are my own. For educational purposes only.*
