# Finance Personal Website

A modern, minimal personal website for a finance professional — Chartered Accountant, CFA Level III candidate, and Product Control analyst.

Inspired by Bloomberg Terminal, Notion, and Stripe. Dark-mode first, typography-led, performance-focused.

---

## Folder Structure

```
finance-personal-site/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout — Navbar, Footer, fonts, SEO
│   ├── globals.css               # Tailwind base + custom CSS (ticker, hero-bg, animations)
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx            # About page with timeline
│   ├── insights/
│   │   ├── page.tsx              # Insights listing with tag filter
│   │   └── [slug]/page.tsx       # Individual post page
│   └── projects/page.tsx         # Projects page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky navbar with mobile menu
│   │   └── Footer.tsx            # Footer with social links
│   ├── home/
│   │   ├── Hero.tsx              # Full-height hero section
│   │   ├── MarketTicker.tsx      # Scrolling market data strip
│   │   ├── AboutPreview.tsx      # About teaser section
│   │   ├── FeaturedInsights.tsx  # Latest 3 post cards
│   │   └── ProjectsPreview.tsx   # Featured projects preview
│   ├── dashboard/
│   │   └── MarketDashboard.tsx   # Market data widget (indices, rates, FX)
│   ├── insights/
│   │   ├── PostCard.tsx          # Post card component
│   │   └── InsightsList.tsx      # Client component with tag filtering
│   ├── projects/
│   │   └── ProjectCard.tsx       # Project card (Problem/Approach/Impact)
│   └── ui/
│       ├── Badge.tsx             # Tag/pill badge component
│       ├── Button.tsx            # Polymorphic button/link component
│       └── Section.tsx           # Section wrapper with eyebrow + title
│
├── content/
│   └── insights/                 # Markdown blog posts
│       ├── rising-interest-rates-equity-valuations.md
│       ├── pnl-attribution-trading-desks.md
│       ├── credit-spreads-recession-signals.md
│       ├── fx-hedging-strategies.md
│       └── automation-in-finance.md
│
├── lib/
│   ├── posts.ts                  # getAllPosts, getPostBySlug, getRelatedPosts
│   ├── marketData.ts             # Static market data (ticker + dashboard)
│   ├── projectsData.ts           # All project definitions
│   ├── tagColors.ts              # Tag → Tailwind class mapping
│   └── utils.ts                  # cn() utility + formatDate()
│
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## Getting Started Locally

### Prerequisites

- **Node.js** v18+ — download from [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js) or **pnpm** / **yarn**

### 1. Clone / Navigate to the project

```bash
cd ~/finance-personal-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

---

## Personalising the Site

### Change Your Name
Find and replace `Rohan Verma` and `RV` throughout the project:

```bash
# On macOS/Linux:
grep -r "Rohan Verma" --include="*.tsx" --include="*.ts" -l

# Update each file with your real name
```

Files to update:
- `app/layout.tsx` — metadata title/description
- `app/about/page.tsx` — bio text
- `components/layout/Navbar.tsx` — logo wordmark
- `components/layout/Footer.tsx` — footer brand + copyright
- `components/home/Hero.tsx` — hero name display

### Update Social Links
Edit `components/layout/Footer.tsx`:
```tsx
const socialLinks = [
  { href: "https://linkedin.com/in/YOUR-HANDLE", ... },
  { href: "https://github.com/YOUR-HANDLE", ... },
  { href: "mailto:YOUR@EMAIL.COM", ... },
];
```

### Add a Blog Post
Create a new file in `content/insights/` with this frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-03-01"          # YYYY-MM-DD, used for sorting
tags: ["Macro", "Equity"]   # See lib/tagColors.ts for a full list
excerpt: "One-sentence summary shown in post cards and meta tags."
readTime: "6 min read"
featured: false             # Set true to show on homepage
---

Your markdown content here...
```

Supported tags: `Macro`, `Equity`, `Fixed Income`, `Credit`, `FX`, `Product Control`, `Technology`, `Risk Management`, `Rates`, `Derivatives`, `Automation`, `Career & Growth`.

### Edit Projects
Edit `lib/projectsData.ts` to add or modify projects.

### Update Market Data
Edit `lib/marketData.ts` to change the static ticker and dashboard data.

---

## Deploying to Vercel

### Option 1: One-click via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts — it auto-detects Next.js configuration.

### Option 2: GitHub → Vercel (recommended)

1. Push the project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/finance-personal-site.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**

3. Import your GitHub repository

4. Vercel auto-detects Next.js — click **Deploy**

5. Your site will be live at `https://your-project.vercel.app`

### Custom Domain
In Vercel dashboard → Project Settings → Domains → Add your domain (e.g. `rohanverma.dev`).

---

## Design System Reference

| Token           | Value        | Usage                          |
|----------------|--------------|-------------------------------|
| Background      | `#05080F`    | Page background                |
| Surface         | `#0A0F1E`    | Cards, panels                  |
| Border          | `#1A2235`    | Subtle dividers                |
| Text primary    | `#F0F6FC`    | Headlines                      |
| Text secondary  | `#8B9BB4`    | Body text                      |
| Accent green    | `#00D492`    | CTAs, active states, eyebrows  |
| Accent blue     | `#60A5FA`    | Highlights                     |
| Font sans       | Inter        | All UI text                    |
| Font mono       | JetBrains Mono | Numbers, labels, code        |

---

## Tech Stack

| Layer         | Technology                              |
|--------------|----------------------------------------|
| Framework    | Next.js 15 (App Router)                |
| Language     | TypeScript                             |
| Styling      | Tailwind CSS + @tailwindcss/typography |
| Icons        | lucide-react                           |
| Blog         | gray-matter + marked (server-side)     |
| Deployment   | Vercel                                 |

---

*Built for finance professionals who want a site that looks as analytical as they think.*
