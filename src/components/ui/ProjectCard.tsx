import React from 'react';
import type { ProjectItem } from '../../data/portfolioData';
import { Badge } from './Badge';
import { ExternalLink, Lightbulb, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isConcept = project.type.includes('Concept');

  return (
    <div className="rounded-xl border border-[#93A1A1]/30 bg-[#EEE8D5]/70 hover:bg-[#EEE8D5] hover:border-[#268BD2]/50 p-6 flex flex-col justify-between transition-all duration-200 group shadow-xs hover:shadow-md">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge
            variant={isConcept ? 'amber' : 'emerald'}
            icon={isConcept ? <Lightbulb className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
            size="sm"
          >
            {project.type}
          </Badge>

          <span className="text-[10px] font-mono text-[#839496] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#073642] tracking-tight group-hover:text-[#268BD2] transition-colors mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#586E75] leading-relaxed font-normal mb-4">
          {project.description}
        </p>

        {/* Problem Statement Box if present */}
        {project.problemStatement && (
          <div className="mb-4 p-3 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 text-xs text-[#657B83]">
            <span className="font-mono text-[10px] text-[#2AA198] uppercase tracking-wider block mb-1 font-semibold">
              Problem Addressed:
            </span>
            <p className="leading-relaxed">{project.problemStatement}</p>
          </div>
        )}

        {/* Key Features List if present */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="mb-4 space-y-1.5">
            <span className="font-mono text-[10px] text-[#839496] uppercase tracking-wider block mb-1">
              Key Capabilities:
            </span>
            <ul className="text-xs text-[#586E75] space-y-1">
              {project.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[#268BD2] font-mono mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Area: Technologies & Links */}
      <div className="pt-4 mt-2 border-t border-[#93A1A1]/30">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#FDF6E3] text-[#586E75] border border-[#93A1A1]/35"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs font-mono">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#586E75] hover:text-[#268BD2] transition-colors"
            >
              <GithubIcon size={14} className="text-[#268BD2]" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3 h-3 text-[#839496]" />
            </a>
          ) : (
            <span className="text-[#839496]">Documentation In Progress</span>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#2AA198] hover:text-[#268BD2]"
            >
              <span>Live Prototype</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
