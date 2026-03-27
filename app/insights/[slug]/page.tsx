import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import Badge from "@/components/ui/Badge";
import PostCard from "@/components/insights/PostCard";
import { formatDate } from "@/lib/utils";

/* ─── Static params for build-time generation ──────────── */
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

/* ─── Per-page metadata ─────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const allPosts = getAllPosts();
  const meta = allPosts.find((p) => p.slug === slug);

  if (!meta) return { title: "Post Not Found" };

  return {
    title: meta.title,
    description: meta.excerpt,
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      type: "article",
      publishedTime: meta.date,
      tags: meta.tags,
    },
  };
}

/* ─── Page component ────────────────────────────────────── */
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const related = getRelatedPosts(post, 3);

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Back link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white/70 font-mono transition-colors mb-10"
        >
          <ArrowLeft size={13} />
          All Insights
        </Link>

        {/* Post header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} label={tag} variant="tag" />
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white/92 leading-tight mb-5">
            {post.title}
          </h1>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-mono text-xs text-white/30">
              <Calendar size={11} aria-hidden />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-xs text-white/30">
              <Clock size={11} aria-hidden />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Divider */}
        <hr className="border-white/8 mb-10" />

        {/* Article body */}
        <article
          className="prose prose-finance prose-sm sm:prose-base max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-white/8">
            <p className="font-mono text-xs text-[#00D492] uppercase tracking-[0.18em] mb-6">
              Related Insights
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <PostCard key={r.slug} post={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
