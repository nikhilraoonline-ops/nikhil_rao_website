import type { Metadata } from "next";
import { allProjects } from "@/lib/projectsData";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Python automation tools, dashboards, and financial models built to solve real problems in finance workflows.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Page header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-[#00D492] uppercase tracking-[0.18em] mb-3">
            Projects
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white/90 leading-tight mb-3">
            Selected Work
          </h1>
          <p className="text-white/45 text-base max-w-lg leading-relaxed">
            Tools I&apos;ve built to eliminate manual toil, improve accuracy, and
            bring more analytical rigour to financial workflows.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {allProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 p-5 rounded-lg border border-white/5 bg-[#0A0F1E]">
          <p className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-2">
            Note
          </p>
          <p className="text-white/40 text-sm leading-relaxed">
            Most of these tools were built for internal use at work or for personal
            productivity. Code is available on GitHub for select projects. Reach out
            via LinkedIn or email if you&apos;d like to discuss any of them.
          </p>
        </div>
      </div>
    </main>
  );
}
