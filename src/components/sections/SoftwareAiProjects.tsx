import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';
import { Info } from 'lucide-react';

export const SoftwareAiProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#FDF6E3] border-t border-[#93A1A1]/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          tag="SOFTWARE ARCHITECTURE & AI"
          title="Software & AI Projects"
          subtitle="Architectural concepts, full-stack designs, and applied intelligent agents. Unfinished concepts are explicitly labeled to maintain technical integrity."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.softwareProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Architectural Note */}
        <div className="mt-8 p-4 rounded-xl bg-[#EEE8D5]/80 border border-[#93A1A1]/35 flex items-start gap-3 text-xs text-[#586E75] font-mono shadow-xs">
          <Info className="w-4 h-4 text-[#268BD2] shrink-0 mt-0.5" />
          <div>
            <span className="text-[#073642] font-semibold block mb-0.5">
              Extensibility & Modular Codebase:
            </span>
            Projects are defined in a clean structured configuration (<code className="text-[#268BD2] bg-[#FDF6E3] px-1.5 py-0.5 rounded border border-[#93A1A1]/30">src/data/portfolioData.ts</code>). As new GitHub repositories and production deployments go live, they can be appended instantly with code metrics, stars, and direct links.
          </div>
        </div>
      </div>
    </section>
  );
};
