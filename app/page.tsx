import Hero from "@/components/home/Hero";
import MarketTicker from "@/components/home/MarketTicker";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedInsights from "@/components/home/FeaturedInsights";
import MarketDashboard from "@/components/dashboard/MarketDashboard";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <main>
      <Hero />
      <MarketTicker />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AboutPreview />
        <FeaturedInsights posts={featuredPosts} />
        <MarketDashboard />
        <ProjectsPreview />
      </div>
    </main>
  );
}
