import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Star, GitFork, ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

interface RepoDisplay {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export const GitHubSection: React.FC = () => {
  const [repos] = useState<RepoDisplay[]>(PORTFOLIO_DATA.githubRepos);

  return (
    <section id="github" className="py-20 bg-[#FDF6E3] border-t border-[#93A1A1]/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            number="10"
            tag="CODE REPOSITORIES & REVISION CONTROL"
            title="Open Source & GitHub"
            subtitle="Public code repositories, CAD parametric files, simulation configurations, and software experiments."
            className="mb-0"
          />

          <a
            href={PORTFOLIO_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#EEE8D5] hover:bg-[#E0D7C3] text-[#073642] font-mono text-xs border border-[#93A1A1]/40 transition-all shrink-0 self-start md:self-auto shadow-xs hover:border-[#268BD2]/60"
          >
            <GithubIcon size={16} className="text-[#268BD2]" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#839496]" />
          </a>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.name}
              className="rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-6 flex flex-col justify-between hover:border-[#268BD2]/50 hover:bg-[#EEE8D5] transition-all group shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#839496] mb-3">
                  <span className="flex items-center gap-1.5 text-[#2AA198] font-semibold">
                    <FolderGit2 className="w-4 h-4" />
                    <span>Public Repo</span>
                  </span>
                  <span className="text-[10px] text-[#839496]">MIT / Academic</span>
                </div>

                <h3 className="text-base font-bold text-[#073642] tracking-tight group-hover:text-[#268BD2] transition-colors mb-2 break-all">
                  {repo.name}
                </h3>

                <p className="text-xs text-[#586E75] leading-relaxed font-sans mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#93A1A1]/30">
                <div className="flex items-center justify-between text-xs font-mono text-[#657B83] mb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#268BD2]"></span>
                    <span className="text-[#586E75] font-medium">{repo.language}</span>
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[#839496]">
                      <Star className="w-3 h-3 text-[#B58900]" />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#839496]">
                      <GitFork className="w-3 h-3 text-[#839496]" />
                      <span>{repo.forks}</span>
                    </span>
                  </div>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono text-[#586E75] hover:text-[#268BD2] pt-2 border-t border-[#93A1A1]/20 transition-colors font-medium"
                >
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 text-[#839496]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note about GitHub integration */}
        <div className="mt-8 p-4 rounded-xl bg-[#EEE8D5]/80 border border-[#93A1A1]/35 text-xs font-mono text-[#657B83] flex items-center justify-between shadow-xs">
          <span>Configured for client-side resilience with zero server dependencies.</span>
          <span className="text-[#268BD2] hidden sm:inline">Profile: github.com/sanimzbyr</span>
        </div>
      </div>
    </section>
  );
};
