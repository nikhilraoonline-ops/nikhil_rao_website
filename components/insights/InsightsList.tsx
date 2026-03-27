"use client";

import { useState } from "react";
import PostCard from "./PostCard";
import type { PostMeta } from "@/lib/posts";
import { cn } from "@/lib/utils";

interface InsightsListProps {
  posts: PostMeta[];
  allTags: string[];
}

/**
 * Client component — handles client-side tag filtering on the
 * /insights page without a full page reload.
 */
export default function InsightsList({ posts, allTags }: InsightsListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  function toggleTag(tag: string) {
    setActiveTag((prev) => (prev === tag ? null : tag));
  }

  return (
    <div>
      {/* Tag filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveTag(null)}
          className={cn(
            "font-mono text-xs px-3 py-1.5 rounded border transition-colors duration-150",
            activeTag === null
              ? "border-[#00D492]/50 bg-[#00D492]/10 text-[#00D492]"
              : "border-white/8 text-white/40 hover:border-white/20 hover:text-white/65 bg-transparent"
          )}
        >
          All&nbsp;
          <span className="opacity-50">({posts.length})</span>
        </button>

        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={cn(
              "font-mono text-xs px-3 py-1.5 rounded border transition-colors duration-150",
              activeTag === tag
                ? "border-[#00D492]/50 bg-[#00D492]/10 text-[#00D492]"
                : "border-white/8 text-white/40 hover:border-white/20 hover:text-white/65 bg-transparent"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Post list */}
      {filteredPosts.length === 0 ? (
        <p className="font-mono text-sm text-white/30 py-16 text-center">
          No posts found for &quot;{activeTag}&quot;.
        </p>
      ) : (
        <div className="grid gap-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
