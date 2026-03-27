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
  { name: "S&P 500",  value: "5,847.23",  change: "+0.48%",  direction: "up"      },
  { name: "NIFTY 50", value: "22,147.35", change: "-0.22%",  direction: "down"    },
  { name: "FTSE 100", value: "8,312.64",  change: "+0.31%",  direction: "up"      },
  { name: "DAX",      value: "19,542.37", change: "+0.67%",  direction: "up"      },
  { name: "NASDAQ",   value: "18,926.31", change: "+0.83%",  direction: "up"      },
  { name: "USD/INR",  value: "83.45",     change: "+0.12%",  direction: "up"      },
  { name: "EUR/USD",  value: "1.0842",    change: "-0.08%",  direction: "down"    },
  { name: "GBP/USD",  value: "1.2634",    change: "+0.15%",  direction: "up"      },
  { name: "10Y UST",  value: "4.28%",     change: "-3bps",   direction: "down"    },
  { name: "10Y Gilt", value: "4.52%",     change: "+1bp",    direction: "up"      },
  { name: "GOLD",     value: "$2,648",    change: "+0.71%",  direction: "up"      },
  { name: "WTI OIL",  value: "$71.24",    change: "-1.23%",  direction: "down"    },
  { name: "VIX",      value: "17.84",     change: "-0.92%",  direction: "down"    },
  { name: "BTC/USD",  value: "$96,420",   change: "+2.14%",  direction: "up"      },
  { name: "USD/JPY",  value: "149.63",    change: "+0.22%",  direction: "up"      },
];

/** Used by the Market Dashboard widget on the homepage. */
export const marketDashboardData: MarketGroup[] = [
  {
    id: "indices",
    label: "INDICES",
    items: [
      { name: "S&P 500",  value: "5,847.23",  change: "+0.48%",  direction: "up"   },
      { name: "NIFTY 50", value: "22,147.35", change: "-0.22%",  direction: "down" },
      { name: "FTSE 100", value: "8,312.64",  change: "+0.31%",  direction: "up"   },
      { name: "DAX",      value: "19,542.37", change: "+0.67%",  direction: "up"   },
    ],
  },
  {
    id: "rates",
    label: "RATES & YIELDS",
    items: [
      { name: "10Y UST",   value: "4.28%",       change: "-3bps",  direction: "down"    },
      { name: "2Y UST",    value: "4.67%",        change: "-5bps",  direction: "down"    },
      { name: "10Y Gilt",  value: "4.52%",        change: "+1bp",   direction: "up"      },
      { name: "Fed Funds", value: "5.25–5.50%",   change: "Unchn",  direction: "neutral" },
    ],
  },
  {
    id: "fx",
    label: "FX",
    items: [
      { name: "USD/INR", value: "83.45",  change: "+0.12%", direction: "up"   },
      { name: "EUR/USD", value: "1.0842", change: "-0.08%", direction: "down" },
      { name: "GBP/USD", value: "1.2634", change: "+0.15%", direction: "up"   },
      { name: "USD/JPY", value: "149.63", change: "+0.22%", direction: "up"   },
    ],
  },
];
