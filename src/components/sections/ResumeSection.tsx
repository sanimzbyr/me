import React, { useState } from 'react';
import { PORTFOLIO_DATA, RESUME_DATA } from '../../data/portfolioData';
import {
  FileText,
  Download,
  ExternalLink,
  Printer,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const ResumeSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section id="resume" className="py-24 bg-[#FDF6E3] border-t border-[#93A1A1]/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8D5] border border-[#93A1A1]/40 text-xs font-mono text-[#268BD2] font-semibold mb-3 shadow-xs">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#073642] mb-3">
            Resume
          </h2>

          <p className="text-base sm:text-lg text-[#586E75] leading-relaxed font-normal">
            Download my resume for an overview of my software development, AI, engineering, and project experience.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href={PORTFOLIO_DATA.links.resume}
              download="Zubair_Hossain_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#268BD2] hover:bg-[#2075B3] text-[#FDF6E3] font-semibold text-sm transition-all shadow-md shadow-[#268BD2]/20 active:translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href={PORTFOLIO_DATA.links.resumeView}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#EEE8D5] hover:bg-[#E0D7C3] text-[#073642] font-semibold text-sm border border-[#93A1A1]/40 transition-all shadow-xs"
            >
              <ExternalLink className="w-4 h-4 text-[#268BD2]" />
              <span>View Resume</span>
            </a>
          </div>
        </div>

        {/* Embedded Interactive Resume Sheet */}
        <div className="rounded-2xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-4 sm:p-8 shadow-sm">
          {/* Top Bar of Sheet */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#93A1A1]/30 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#073642] font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#859900]" />
              <span>Zubair_Hossain_Resume.pdf (Preview)</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.links.resumeView}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#FDF6E3] hover:bg-[#E0D7C3] text-[#586E75] hover:text-[#073642] border border-[#93A1A1]/30 transition-colors"
                title="Open in new window for printing"
              >
                <Printer className="w-3 h-3 text-[#268BD2]" />
                <span className="hidden sm:inline">Print / Standalone</span>
              </a>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#FDF6E3] hover:bg-[#E0D7C3] text-[#586E75] hover:text-[#073642] border border-[#93A1A1]/30 transition-colors"
                aria-label="Toggle resume preview"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5" />
                    <span>Collapse</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5" />
                    <span>Expand Sheet</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Collapsible Document Body */}
          {isExpanded && (
            <div className="bg-[#FDF6E3] rounded-xl border border-[#93A1A1]/30 p-6 sm:p-10 shadow-xs font-sans text-sm animate-in fade-in duration-200">
              
              {/* Document Header */}
              <div className="border-b-2 border-[#268BD2] pb-4 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#073642] tracking-tight">
                    {RESUME_DATA.name}
                  </h1>
                  <span className="text-sm font-mono font-bold text-[#268BD2]">
                    {RESUME_DATA.title}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#657B83]">
                  <a href={`tel:${RESUME_DATA.contact.phone}`} className="flex items-center gap-1 hover:text-[#859900]">
                    <Phone className="w-3 h-3 text-[#859900]" />
                    <span>{RESUME_DATA.contact.phone}</span>
                  </a>
                  <span>•</span>
                  <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-1 hover:text-[#2AA198]">
                    <Mail className="w-3 h-3 text-[#2AA198]" />
                    <span>{RESUME_DATA.contact.email}</span>
                  </a>
                  <span>•</span>
                  <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#268BD2]">
                    <GithubIcon size={12} className="text-[#268BD2]" />
                    <span>{RESUME_DATA.contact.githubDisplay}</span>
                  </a>
                  <span>•</span>
                  <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#6C71C4]">
                    <LinkedinIcon size={12} className="text-[#6C71C4]" />
                    <span>{RESUME_DATA.contact.linkedinDisplay}</span>
                  </a>
                  <span>•</span>
                  <span>{RESUME_DATA.contact.location}</span>
                </div>
              </div>

              {/* 1. Professional Summary */}
              <div className="mb-6">
                <h3 className="text-xs font-mono font-bold text-[#073642] uppercase tracking-wider border-b border-[#93A1A1]/30 pb-1 mb-2">
                  Professional Summary
                </h3>
                <p className="text-xs sm:text-sm text-[#586E75] leading-relaxed text-justify">
                  {RESUME_DATA.summary}
                </p>
              </div>

              {/* 2. Technical Skills */}
              <div className="mb-6">
                <h3 className="text-xs font-mono font-bold text-[#073642] uppercase tracking-wider border-b border-[#93A1A1]/30 pb-1 mb-2">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                  {RESUME_DATA.skillGroups.map((group) => (
                    <div key={group.category} className="flex items-baseline gap-2">
                      <span className="font-mono font-bold text-[#073642] min-w-[110px] shrink-0">
                        {group.category}:
                      </span>
                      <span className="text-[#586E75]">
                        {group.skills.join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Key Projects */}
              <div className="mb-6">
                <h3 className="text-xs font-mono font-bold text-[#073642] uppercase tracking-wider border-b border-[#93A1A1]/30 pb-1 mb-3">
                  Key Projects
                </h3>
                <div className="space-y-4">
                  {RESUME_DATA.projects.map((proj) => (
                    <div key={proj.title} className="text-xs">
                      <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                        <div className="flex items-baseline gap-2">
                          <span className="font-bold text-[#073642] text-sm">{proj.title}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EEE8D5] text-[#586E75] border border-[#93A1A1]/30 font-semibold">
                            {proj.classification}
                          </span>
                        </div>
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] text-[#268BD2] hover:underline"
                          >
                            github.com/sanimzbyr
                          </a>
                        )}
                      </div>
                      <div className="font-mono text-[11px] text-[#2AA198] font-semibold mb-1">
                        {proj.technologies.join(' • ')}
                      </div>
                      <p className="text-[#586E75] mb-1.5 leading-relaxed">
                        {proj.summary}
                      </p>
                      <ul className="space-y-1 pl-3 text-[#586E75]">
                        {proj.contributions.map((c, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#268BD2]">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Technical Progression & Experience */}
              <div className="mb-6">
                <h3 className="text-xs font-mono font-bold text-[#073642] uppercase tracking-wider border-b border-[#93A1A1]/30 pb-1 mb-3">
                  Technical Experience & Focus
                </h3>
                <div className="space-y-3">
                  {RESUME_DATA.technicalFocus.map((exp) => (
                    <div key={exp.title} className="text-xs">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="font-bold text-[#073642]">{exp.title}</span>
                        <span className="font-mono text-[11px] text-[#839496]">{exp.period}</span>
                      </div>
                      <ul className="space-y-1 pl-3 text-[#586E75]">
                        {exp.bulletPoints.map((b, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#859900]">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Education */}
              <div className="mb-6">
                <h3 className="text-xs font-mono font-bold text-[#073642] uppercase tracking-wider border-b border-[#93A1A1]/30 pb-1 mb-2">
                  Education
                </h3>
                <div className="text-xs">
                  <div className="font-bold text-[#073642] text-sm mb-0.5">
                    {RESUME_DATA.education.degree}
                  </div>
                  <div className="text-[#268BD2] font-semibold mb-1">
                    {RESUME_DATA.education.institution} — <span className="font-normal text-[#657B83]">{RESUME_DATA.education.location}</span>
                  </div>
                  <div className="text-[#586E75] leading-relaxed">
                    <strong className="text-[#073642]">Core Coursework:</strong> {RESUME_DATA.education.coursework.join(', ')}.
                  </div>
                </div>
              </div>

              {/* 6. Technical Interests */}
              <div>
                <h3 className="text-xs font-mono font-bold text-[#073642] uppercase tracking-wider border-b border-[#93A1A1]/30 pb-1 mb-2">
                  Additional Technical Interests
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-[#586E75]">
                  {RESUME_DATA.interests.map((interest, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <span className="text-[#2AA198]">•</span>
                      <span>{interest}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Bottom helper */}
          <div className="mt-4 pt-3 border-t border-[#93A1A1]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#839496]">
            <span>Format: PDF / High-Quality A4 Print Optimized</span>
            <a
              href={PORTFOLIO_DATA.links.resume}
              download="Zubair_Hossain_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-[#268BD2] hover:text-[#073642] font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Zubair_Hossain_Resume.pdf</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
