import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/lib/projectsData";

export default function ProjectsPreview() {
  return (
    <Section
      eyebrow="Selected Work"
      title="Projects that solve real financial problems."
      subtitle="Building automation tools that eliminate manual toil and improve accuracy in finance workflows."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {featuredProjects.slice(0, 2).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#00D492] hover:text-[#00D492]/80 font-medium transition-colors"
        >
          All projects
          <ArrowRight size={14} />
        </Link>
      </div>
    </Section>
  );
}
