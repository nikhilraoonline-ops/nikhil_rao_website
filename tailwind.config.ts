import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Primary background system
        bg: {
          DEFAULT: "#05080F",
          surface: "#0A0F1E",
          surface2: "#0D1424",
        },
        // Border system
        border: {
          DEFAULT: "#1A2235",
          muted: "#111827",
        },
        // Accent system
        accent: {
          green: "#00D492",
          "green-dim": "#00D49220",
          amber: "#F59E0B",
          blue: "#60A5FA",
          red: "#F87171",
        },
      },
      animation: {
        "ticker": "ticker 50s linear infinite",
        "fade-in": "fadeInUp 0.6s ease-out forwards",
        "fade-in-slow": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: {
        finance: {
          css: {
            "--tw-prose-body": "rgba(240, 246, 252, 0.75)",
            "--tw-prose-headings": "rgba(240, 246, 252, 0.95)",
            "--tw-prose-links": "#00D492",
            "--tw-prose-bold": "rgba(240, 246, 252, 0.9)",
            "--tw-prose-counters": "rgba(240, 246, 252, 0.5)",
            "--tw-prose-bullets": "rgba(240, 246, 252, 0.3)",
            "--tw-prose-hr": "rgba(255, 255, 255, 0.08)",
            "--tw-prose-quotes": "rgba(240, 246, 252, 0.6)",
            "--tw-prose-quote-borders": "#00D492",
            "--tw-prose-code": "#00D492",
            "--tw-prose-pre-code": "rgba(240, 246, 252, 0.85)",
            "--tw-prose-pre-bg": "#0A0F1E",
            "--tw-prose-th-borders": "rgba(255, 255, 255, 0.1)",
            "--tw-prose-td-borders": "rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
