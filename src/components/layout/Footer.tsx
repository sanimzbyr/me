import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ArrowUp, Mail, Phone, FileText, Terminal, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#93A1A1]/30 bg-[#EEE8D5]/80 relative z-10 text-[#657B83]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Identity Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/40 flex items-center justify-center font-mono font-bold text-xs text-[#268BD2] shadow-xs">
                ZH
              </div>
              <div>
                <h3 className="text-[#073642] font-semibold text-base tracking-tight">
                  Zubair Hossain
                </h3>
                <p className="text-xs font-mono text-[#839496]">
                  Mechatronics Engineer • RUET, Bangladesh
                </p>
              </div>
            </div>
            <p className="text-sm text-[#586E75] max-w-md leading-relaxed">
              Engineering across hardware, simulation, backend software, and applied AI systems.
              Focused on building robust, practical technology products.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-[#839496]">
              <span className="flex items-center gap-1 text-[#268BD2]">
                <Terminal className="w-3.5 h-3.5" />
                Vite + React + TS
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#2AA198]">
                <Code2 className="w-3.5 h-3.5" />
                Solarized Light Theme
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#073642] font-semibold mb-3">
              Index
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#about" className="hover:text-[#268BD2] transition-colors">01. About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#268BD2] transition-colors">02. Engineering & Skills</a>
              </li>
              <li>
                <a href="#vawt" className="hover:text-[#268BD2] transition-colors">03. Featured VAWT Thesis</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#268BD2] transition-colors">04. Software & AI Projects</a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-[#268BD2] transition-colors">05. How I Build</a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-[#268BD2] transition-colors">06. Timeline & Education</a>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#073642] font-semibold mb-3">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={PORTFOLIO_DATA.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#586E75] hover:text-[#268BD2] transition-colors"
                >
                  <GithubIcon size={14} className="text-[#268BD2]" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_DATA.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#586E75] hover:text-[#6C71C4] transition-colors"
                >
                  <LinkedinIcon size={14} className="text-[#6C71C4]" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PORTFOLIO_DATA.links.email}`}
                  className="flex items-center gap-2 text-[#586E75] hover:text-[#2AA198] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2AA198]" />
                  <span>{PORTFOLIO_DATA.links.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PORTFOLIO_DATA.links.phone}`}
                  className="flex items-center gap-2 text-[#586E75] hover:text-[#859900] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#859900]" />
                  <span>{PORTFOLIO_DATA.links.displayPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_DATA.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#586E75] hover:text-[#268BD2] transition-colors"
                  title="Resume (Placeholder: Update in portfolioData.ts)"
                >
                  <FileText className="w-3.5 h-3.5 text-[#B58900]" />
                  <span>Resume (Placeholder)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#93A1A1]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#839496]">
          <div>
            © {new Date().getFullYear()} Zubair Hossain. Built with Solarized design principles.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FDF6E3] hover:bg-[#E0D7C3] hover:text-[#073642] border border-[#93A1A1]/40 text-[#586E75] transition-colors shadow-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#268BD2]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
