import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/insights");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readTime: string;
  featured: boolean;
}

export interface Post extends PostMeta {
  content: string; // HTML string rendered from markdown
}

/** Read all posts sorted by date descending. */
export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: PostMeta[] = fileNames
    .filter((fn) => fn.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        tags: (data.tags as string[]) ?? [],
        excerpt: data.excerpt as string,
        readTime: (data.readTime as string) ?? "5 min read",
        featured: (data.featured as boolean) ?? false,
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

/** Get a single post by slug, rendered to HTML. */
export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Configure marked for clean HTML output
  marked.setOptions({ gfm: true, breaks: false });
  const htmlContent = await marked.parse(content);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    excerpt: data.excerpt as string,
    readTime: (data.readTime as string) ?? "5 min read",
    featured: (data.featured as boolean) ?? false,
    content: htmlContent,
  };
}

/** Return all unique tags across all posts. */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

/** Return posts that share at least one tag with the given post. */
export function getRelatedPosts(current: PostMeta, limit = 3): PostMeta[] {
  const all = getAllPosts();
  return all
    .filter(
      (p) =>
        p.slug !== current.slug &&
        p.tags.some((t) => current.tags.includes(t))
    )
    .slice(0, limit);
}
