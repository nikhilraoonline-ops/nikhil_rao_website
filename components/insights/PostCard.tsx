import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: PostMeta;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className={cn(
        "group flex flex-col rounded-lg border border-white/5 bg-[#0A0F1E] card-hover transition-all duration-200",
        featured ? "p-6" : "p-5"
      )}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {post.tags.map((tag) => (
          <Badge key={tag} label={tag} variant="tag" />
        ))}
      </div>

      {/* Title */}
      <h3
        className={cn(
          "font-semibold text-white/85 group-hover:text-white transition-colors leading-snug mb-2",
          featured ? "text-base" : "text-sm"
        )}
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-white/45 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Footer row */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-white/30">
            <Calendar size={10} aria-hidden />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-white/30">
            <Clock size={10} aria-hidden />
            {post.readTime}
          </span>
        </div>

        <span className="flex items-center gap-1 text-[#00D492] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          Read
          <ArrowRight size={11} />
        </span>
      </div>
    </Link>
  );
}
