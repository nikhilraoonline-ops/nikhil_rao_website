import { ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/lib/projectsData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-white/5 bg-[#0A0F1E] card-hover p-6">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-base font-semibold text-white/90 leading-tight mb-1">
            {project.title}
          </h3>
          <p className="text-white/45 text-sm">{project.description}</p>
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/70 transition-colors shrink-0 mt-0.5"
            aria-label="View on GitHub"
          >
            <ExternalLink size={15} />
          </a>
        )}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <Badge key={t} label={t} variant="pill" />
        ))}
      </div>

      {/* Problem → Approach → Impact */}
      <div className="space-y-4 flex-1">
        <div>
          <p className="font-mono text-[10px] text-white/25 uppercase tracking-[0.16em] mb-1.5">
            Problem
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] text-white/25 uppercase tracking-[0.16em] mb-1.5">
            Approach
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            {project.approach}
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] text-[#00D492]/60 uppercase tracking-[0.16em] mb-1.5">
            Impact
          </p>
          <p className="text-white/65 text-sm leading-relaxed">
            {project.impact}
          </p>
        </div>
      </div>
    </div>
  );
}
