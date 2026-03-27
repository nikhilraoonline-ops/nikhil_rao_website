import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import PostCard from "@/components/insights/PostCard";
import type { PostMeta } from "@/lib/posts";

interface FeaturedInsightsProps {
  posts: PostMeta[];
}

export default function FeaturedInsights({ posts }: FeaturedInsightsProps) {
  return (
    <Section
      eyebrow="Latest Insights"
      title="Writing on markets, models, and finance."
      subtitle="Deep dives into macroeconomics, derivatives, product control, and the systems behind global finance."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} featured />
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm text-[#00D492] hover:text-[#00D492]/80 font-medium transition-colors"
        >
          All insights
          <ArrowRight size={14} />
        </Link>
      </div>
    </Section>
  );
}
