---
title: "FX Hedging for Corporates: When, Why, and How"
date: "2024-12-18"
tags: ["FX", "Risk Management", "Derivatives"]
excerpt: "Any company with cross-border revenues, costs, or debt faces FX risk. But hedging is not free, and the wrong approach can create more volatility than it eliminates. Here's a structured look at the instruments, the economics, and the decision framework."
readTime: "8 min read"
featured: false
---

A UK manufacturer that exports to the US earns USD revenue but has GBP costs. A sterling appreciation of 5% can wipe out the entire operating margin on those contracts. FX risk is not abstract — it is a direct earnings and cash flow risk, and managing it intelligently is a core treasury function.

## Types of FX Exposure

Before choosing a hedge, you need to know what kind of exposure you have:

**Transaction exposure**: The risk affecting near-term cash flows from identifiable transactions — a confirmed export sale priced in USD, a raw material import invoice in EUR. This is the most straightforward to hedge.

**Translation exposure**: The impact of exchange rate movements on a company's reported financial statements when consolidating foreign subsidiaries. A UK parent with a USD subsidiary will see the USD balance sheet translated at period-end rates — movements affect the consolidated balance sheet and equity reserves.

**Economic (operating) exposure**: The long-run effect of exchange rate changes on competitive position and cash flows. A UK exporter competing against German rivals both in foreign markets may see its margins squeezed if GBP appreciates significantly versus EUR — even if no specific transaction is exposed. This is the hardest to hedge.

## The Core Instruments

### 1. Forward Contracts
A forward locks in an exchange rate today for a transaction that will occur at a specified future date.

**Example**: A UK company expecting to receive USD 1 million in three months enters a USD/GBP forward to sell USD at 1.2650. Regardless of where spot moves on settlement day, they receive £790,000.

- **Pros**: Simple, certain outcome, readily available from banks
- **Cons**: You forgo upside if the rate moves in your favour; mark-to-market losses if the spot moves against the forward
- **Cost**: The forward rate reflects interest rate differentials (covered interest parity), not a fee

The forward rate is set by:
$$F = S \times \frac{(1 + r_{USD})}{(1 + r_{GBP})}$$

Where S is the spot rate and r represents interest rates in each currency. If USD rates are higher than GBP rates, the USD trades at a forward *discount* against GBP.

### 2. FX Options (Vanilla)
A currency option gives the holder the *right but not obligation* to exchange currencies at a specified rate (the strike) on or before expiry.

- **Call option on USD/GBP**: Protects against USD strengthening (good for a USD importer)
- **Put option on USD/GBP**: Protects against USD weakening (good for a USD exporter)

**Pros**: You benefit if the spot moves in your favour; downside is capped at the premium paid  
**Cons**: Option premiums can be 1–3% of notional for a 3-month ATM option — a meaningful cost

The premium is a function of:
- Time to expiry (longer = more expensive)
- Implied volatility (higher vol = more expensive)
- Moneyness (ATM options cost more than OTM)
- Interest rate differentials

### 3. Cylinder / Risk Reversal
A zero-cost structure: buy a put option (protection) and simultaneously sell a call option (upside cap) such that the net premium is zero.

The company gets a floor below which it is protected, and a ceiling above which it doesn't benefit — but pays nothing upfront. The trade-off is giving up upside to fund the downside protection.

These are widely used by mid-market corporates that want protection without premium outlay.

### 4. Natural Hedging
The most cost-effective hedge is often operational, not financial:
- **Match currency of revenues and costs**: If you earn USD, try to source inputs in USD
- **Borrow in the currency you earn**: A company with EUR revenues should consider EUR-denominated debt — the debt service matches the revenue stream
- **Diversify across geographies**: Multiple revenue currencies reduce concentration

## The Hedge Ratio Decision

A 100% hedge ratio eliminates FX variability but also eliminates any beneficial currency movement. A 0% hedge ratio means full exposure. Most treasuries operate somewhere between 50–80% hedge ratios for near-term exposures.

Key factors in the decision:
- **Cash flow predictability**: How certain is the underlying transaction? Higher certainty warrants higher hedge ratios
- **Competitive dynamics**: If competitors are unhedged, aggressive hedging may create competitive disadvantage in a favourable rate environment — customers may expect price reductions
- **Accounting treatment**: Hedge accounting under IFRS 9 allows P&L smoothing only if the hedge meets strict documentation and effectiveness criteria; otherwise MTM variability flows through profit and loss
- **Cost of hedging**: Forward points can be a tailwind or headwind depending on interest rate differentials

## IFRS 9 Hedge Accounting: A Brief Note

For companies seeking P&L smoothing, IFRS 9 allows the designation of a hedging relationship if:
1. There is a formal hedge designation and documentation at inception
2. The hedge is expected to be highly effective (80–125% effectiveness range historically used; IFRS 9 adopted a more principles-based approach)
3. There is an economic relationship between hedged item and hedging instrument

Without hedge accounting designation, forward contracts and options are marked to market through P&L — creating exactly the volatility the hedge was meant to remove.

## Common Mistakes

**Over-hedging speculative exposures**: Companies sometimes hedge revenue that never materialises (deals that fall through). When the underlying transaction is cancelled but the forward runs to maturity, you've created a speculative position.

**Static hedge programs**: FX exposure changes as business volumes fluctuate. A hedge programme that isn't reviewed quarterly may be systematically over- or under-hedged.

**Ignoring cross-rates**: A company with EUR costs and JPY revenues can't simply hedge EUR/USD and USD/JPY independently — the cross-rate EUR/JPY matters, and the combined hedge may not be what you think.

---

FX hedging is one of the clearest examples of the risk management principle: *know what you own, and know what you're trying to eliminate*. The instruments are standardised. The art is in the strategy.

---

*Views are my own. Not financial or commercial advice.*
