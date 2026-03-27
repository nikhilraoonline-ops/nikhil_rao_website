import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nikhil Rao | Finance, Markets & Systems Thinking",
    template: "%s | Nikhil Rao",
  },
  description:
    "Chartered Accountant, CFA Level 3 passed, and Product Control Associate at JP Morgan Chase & Co., Bengaluru. Writing about markets, quantitative finance, and automation.",
  keywords: [
    "finance",
    "product control",
    "chartered accountant",
    "CFA",
    "markets",
    "PnL attribution",
    "fintech",
    "derivatives",
  ],
  authors: [{ name: "Nikhil Rao" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nikhil Rao",
    title: "Nikhil Rao | Finance, Markets & Systems Thinking",
    description:
      "Chartered Accountant, CFA Level 3 passed, Product Control at JP Morgan Chase & Co. Writing about markets and quantitative finance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Rao | Finance, Markets & Systems Thinking",
    description:
      "Chartered Accountant, CFA Level 3 passed. Product Control Associate at JP Morgan Chase & Co., Bengaluru.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#05080F] text-[#F0F6FC] antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
