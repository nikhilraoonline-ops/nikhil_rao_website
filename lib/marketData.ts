/** Static market data for illustrative purposes only.
 *  Replace with a live API (e.g. Yahoo Finance) for production. */

export type MarketItem = {
  name: string;
  value: string;
  change: string;
  direction: "up" | "down" | "neutral";
};

export type MarketGroup = {
  id: string;
  label: string;
  items: MarketItem[];
};

/** Used by the scrolling ticker strip on the homepage. */
export const marketTickerData: MarketItem[] = [
  { name: "S&P 500",  value: "5,912.45",  change: "+1.12%",  direction: "up"      },
  { name: "NIFTY 50", value: "22,389.67", change: "+0.45%",  direction: "up"      },
  { name: "FTSE 100", value: "8,456.82",  change: "-0.28%",  direction: "down"    },
  { name: "DAX",      value: "19,723.91", change: "+0.92%",  direction: "up"      },
  { name: "NASDAQ",   value: "19,145.78", change: "+1.67%",  direction: "up"      },
  { name: "USD/INR",  value: "83.12",     change: "-0.18%",  direction: "down"    },
  { name: "EUR/USD",  value: "1.0915",    change: "+0.67%",  direction: "up"      },
  { name: "GBP/USD",  value: "1.2789",    change: "+0.31%",  direction: "up"      },
  { name: "10Y UST",  value: "4.15%",     change: "-13bps",  direction: "down"    },
  { name: "10Y Gilt", value: "4.38%",     change: "-14bps",  direction: "down"    },
  { name: "GOLD",     value: "$2,712",    change: "+2.45%",  direction: "up"      },
  { name: "WTI OIL",  value: "$68.89",    change: "-3.12%",  direction: "down"    },
  { name: "VIX",      value: "15.23",     change: "-14.67%", direction: "down"    },
  { name: "BTC/USD",  value: "$102,850",  change: "+6.42%",  direction: "up"      },
  { name: "USD/JPY",  value: "148.47",    change: "-0.78%",  direction: "down"    },
];

/** Used by the Market Dashboard widget on the homepage. */
export const marketDashboardData: MarketGroup[] = [
  {
    id: "indices",
    label: "INDICES",
    items: [
      { name: "S&P 500",  value: "5,912.45",  change: "+1.12%",  direction: "up"   },
      { name: "NIFTY 50", value: "22,389.67", change: "+0.45%",  direction: "up"   },
      { name: "FTSE 100", value: "8,456.82",  change: "-0.28%",  direction: "down" },
      { name: "DAX",      value: "19,723.91", change: "+0.92%",  direction: "up"   },
    ],
  },
  {
    id: "rates",
    label: "RATES & YIELDS",
    items: [
      { name: "10Y UST",   value: "4.15%",       change: "-13bps", direction: "down"    },
      { name: "2Y UST",    value: "4.52%",       change: "-15bps", direction: "down"    },
      { name: "10Y Gilt",  value: "4.38%",       change: "-14bps", direction: "down"    },
      { name: "Fed Funds", value: "5.25–5.50%",  change: "Unchn",  direction: "neutral" },
    ],
  },
  {
    id: "fx",
    label: "FX",
    items: [
      { name: "USD/INR", value: "83.12",  change: "-0.18%", direction: "down" },
      { name: "EUR/USD", value: "1.0915", change: "+0.67%", direction: "up"   },
      { name: "GBP/USD", value: "1.2789", change: "+0.31%", direction: "up"   },
      { name: "USD/JPY", value: "148.47", change: "-0.78%", direction: "down" },
    ],
  },
];
