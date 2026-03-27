import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import InsightsList from "@/components/insights/InsightsList";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Deep dives into macroeconomics, derivatives, product control, and the systems behind global finance.",
};

export default function InsightsPage() {
  const posts   = getAllPosts();
  const allTags = getAllTags();

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Page header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-[#00D492] uppercase tracking-[0.18em] mb-3">
            Insights
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white/90 leading-tight mb-3">
            Writing on Finance &amp; Markets
          </h1>
          <p className="text-white/45 text-base max-w-lg leading-relaxed">
            Essays on macroeconomics, derivatives pricing, product control, and 
            building automation tools for financial workflows.
          </p>
        </div>

        {/* Client-rendered list with tag filter */}
        <InsightsList posts={posts} allTags={allTags} />
      </div>
    </main>
  );
}
