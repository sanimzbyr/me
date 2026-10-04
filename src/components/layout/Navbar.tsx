import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Featured: VAWT', href: '#vawt' },
  { name: 'Projects', href: '#projects' },
  { name: 'Engineering', href: '#engineering' },
  { name: 'Methodology', href: '#methodology' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FDF6E3]/90 backdrop-blur-md border-b border-[#93A1A1]/30 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#268BD2] rounded-lg p-1"
            aria-label="Zubair Hossain - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#EEE8D5] border border-[#93A1A1]/40 flex items-center justify-center font-mono font-bold text-sm text-[#268BD2] group-hover:border-[#268BD2]/60 group-hover:text-[#073642] transition-colors relative overflow-hidden shadow-xs">
              <span className="relative z-10">ZH</span>
              <div className="absolute inset-0 bg-[#268BD2]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-[#073642] group-hover:text-[#268BD2] transition-colors">
                Zubair Hossain
              </span>
              <span className="text-[10px] font-mono text-[#839496] tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#859900] animate-pulse"></span>
                RUET • Mechatronics
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#268BD2] bg-[#268BD2]/10 border border-[#268BD2]/30 font-semibold'
                      : 'text-[#586E75] hover:text-[#073642] hover:bg-[#EEE8D5]/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#586E75] hover:text-[#073642] bg-[#EEE8D5] hover:bg-[#E0D7C3] border border-[#93A1A1]/40 rounded-md transition-all shadow-xs"
              title="GitHub Profile"
            >
              <GithubIcon size={14} className="text-[#268BD2]" />
              <span>GitHub</span>
            </a>

            <a
              href={PORTFOLIO_DATA.links.resume}
              download="Zubair_Hossain_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#268BD2] hover:text-[#073642] bg-[#268BD2]/10 hover:bg-[#268BD2]/20 border border-[#268BD2]/30 rounded-md transition-all shadow-xs"
              title="Download Resume PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
              <ArrowUpRight className="w-3 h-3 text-[#268BD2]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#586E75] hover:text-[#073642] hover:bg-[#EEE8D5] border border-[#93A1A1]/40 focus:outline-none focus:ring-2 focus:ring-[#268BD2]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#93A1A1]/30 bg-[#FDF6E3]/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#586E75] hover:text-[#073642] hover:bg-[#EEE8D5] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 mt-3 border-t border-[#93A1A1]/30 flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono text-[#073642] bg-[#EEE8D5] border border-[#93A1A1]/40 rounded-md"
            >
              <GithubIcon size={14} className="text-[#268BD2]" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.links.resume}
              download="Zubair_Hossain_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono text-[#268BD2] bg-[#268BD2]/10 border border-[#268BD2]/30 rounded-md"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
