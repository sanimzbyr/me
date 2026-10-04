import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import {
  ArrowDown,
  Mail,
  Phone,
  Download,
  Cpu,
  Bot,
  Cog,
  Terminal,
  ChevronRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { Badge } from '../ui/Badge';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden tech-grid-pattern"
    >
      {/* Subtle radial ambient gradients (Solarized light) */}
      <div className="absolute inset-0 radial-glow-cyan pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDF6E3]/60 to-[#FDF6E3] pointer-events-none" />

      {/* Decorative technical coordinate corner marks */}
      <div className="hidden md:block absolute top-24 left-8 text-[10px] font-mono text-[#839496] select-none">
        <div>SYS_COORD: 24.3745° N, 88.6042° E</div>
        <div>INST: RUET_MTE_DEPT</div>
      </div>
      <div className="hidden md:block absolute top-24 right-8 text-[10px] font-mono text-[#839496] select-none text-right">
        <div>CORE: MECH_ENG // CS_AI</div>
        <div>STATUS: ACTIVE_DEVELOPMENT</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEE8D5] border border-[#93A1A1]/40 text-xs font-mono text-[#586E75] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#859900] animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.statusBadge}</span>
            </div>

            {/* Candidate Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#073642] mb-3">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              
              {/* Headline */}
              <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-[#268BD2] tracking-tight leading-snug">
                {PORTFOLIO_DATA.personal.headline}
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#586E75] leading-relaxed font-normal max-w-2xl">
              {PORTFOLIO_DATA.personal.tagline}
            </p>

            {/* Interdisciplinary Skill Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="sky" icon={<Cpu className="w-3.5 h-3.5" />}>
                Mechatronics & Robotics
              </Badge>
              <Badge variant="indigo" icon={<Bot className="w-3.5 h-3.5" />}>
                AI / Machine Learning & LLMs
              </Badge>
              <Badge variant="emerald" icon={<Terminal className="w-3.5 h-3.5" />}>
                Backend (.NET / C# / Spring)
              </Badge>
              <Badge variant="slate" icon={<Cog className="w-3.5 h-3.5" />}>
                CAD & CFD (Fusion 360 / ANSYS)
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#268BD2] hover:bg-[#2075B3] text-[#FDF6E3] font-semibold text-sm transition-all duration-150 shadow-md shadow-[#268BD2]/20 active:translate-y-0.5"
              >
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.links.resume}
                download="Zubair_Hossain_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#EEE8D5] hover:bg-[#E0D7C3] text-[#073642] font-semibold text-sm border border-[#93A1A1]/40 hover:border-[#268BD2]/60 transition-all duration-150 shadow-xs"
                title="Download Resume PDF"
              >
                <Download className="w-4 h-4 text-[#268BD2]" />
                <span>Download Resume</span>
              </a>

              <a
                href={PORTFOLIO_DATA.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#EEE8D5] hover:bg-[#E0D7C3] text-[#073642] font-medium text-sm border border-[#93A1A1]/40 transition-all duration-150 shadow-xs"
              >
                <GithubIcon size={16} className="text-[#268BD2]" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Contact & Social Direct Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs font-mono text-[#657B83]">
              <a
                href={PORTFOLIO_DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#268BD2] transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={14} className="text-[#268BD2]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[#93A1A1] hidden sm:inline">•</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.links.email}`}
                className="flex items-center gap-1.5 hover:text-[#2AA198] transition-colors"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-[#2AA198]" />
                <span>{PORTFOLIO_DATA.links.email}</span>
              </a>
              <span className="text-[#93A1A1] hidden sm:inline">•</span>
              <a
                href={`tel:${PORTFOLIO_DATA.links.phone}`}
                className="flex items-center gap-1.5 hover:text-[#859900] transition-colors"
                title="Call phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#859900]" />
                <span>{PORTFOLIO_DATA.links.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Engineering System Schematic Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/80 backdrop-blur-md p-6 shadow-sm corner-crosshair">
              
              {/* Header bar of technical card */}
              <div className="flex items-center justify-between border-b border-[#93A1A1]/30 pb-3 mb-4 text-xs font-mono">
                <span className="text-[#268BD2] flex items-center gap-2 font-semibold">
                  <span className="w-2 h-2 rounded-sm bg-[#268BD2]"></span>
                  SYSTEM_INTEGRATION_MAP
                </span>
                <span className="text-[#839496]">VER: 2026.1</span>
              </div>

              {/* Multidisciplinary Diagram Box */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* 1. Hardware & Mechanical */}
                <div className="p-3 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 hover:border-[#268BD2]/50 transition-colors">
                  <div className="flex items-center justify-between text-[#073642] font-semibold mb-1">
                    <span className="flex items-center gap-1.5 text-[#268BD2]">
                      <Cog className="w-4 h-4" />
                      Physical / Mechanical Domain
                    </span>
                    <span className="text-[10px] text-[#839496] font-mono">RUET LAB</span>
                  </div>
                  <p className="text-[11px] text-[#586E75] font-sans leading-relaxed">
                    CAD Solid Modeling (Fusion 360), CFD Aerodynamic Simulation (ANSYS CFX), FEA, 3D printing & functional prototype assembly.
                  </p>
                </div>

                {/* Integration Node */}
                <div className="flex justify-center -my-1 text-[#839496]">
                  <span className="text-[10px]">↕ SENSORS, ACTUATORS & EMBEDDED CONTROLS</span>
                </div>

                {/* 2. Backend & Software Engineering */}
                <div className="p-3 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 hover:border-[#859900]/50 transition-colors">
                  <div className="flex items-center justify-between text-[#073642] font-semibold mb-1">
                    <span className="flex items-center gap-1.5 text-[#859900]">
                      <Terminal className="w-4 h-4" />
                      Software & Backend Architecture
                    </span>
                    <span className="text-[10px] text-[#839496] font-mono">ENTERPRISE</span>
                  </div>
                  <p className="text-[11px] text-[#586E75] font-sans leading-relaxed">
                    C#, .NET / ASP.NET, Java & Spring Boot, PostgreSQL, RESTful APIs, Entity Framework Core, structured algorithms.
                  </p>
                </div>

                {/* Integration Node */}
                <div className="flex justify-center -my-1 text-[#839496]">
                  <span className="text-[10px]">↕ REASONING, DATA AGENTS & PIPELINES</span>
                </div>

                {/* 3. Applied AI & Machine Learning */}
                <div className="p-3 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 hover:border-[#6C71C4]/50 transition-colors">
                  <div className="flex items-center justify-between text-[#073642] font-semibold mb-1">
                    <span className="flex items-center gap-1.5 text-[#6C71C4]">
                      <Bot className="w-4 h-4" />
                      Applied AI & Modern LLMs
                    </span>
                    <span className="text-[10px] text-[#839496] font-mono">INTELLIGENCE</span>
                  </div>
                  <p className="text-[11px] text-[#586E75] font-sans leading-relaxed">
                    LLM Applications, AI Agents, NLP, Document & Spreadsheet Automation pipelines, contextual business intelligence.
                  </p>
                </div>
              </div>

              {/* Bottom spec summary */}
              <div className="mt-4 pt-3 border-t border-[#93A1A1]/30 flex items-center justify-between text-[11px] font-mono text-[#839496]">
                <span>FOCUS: Practical Products</span>
                <span className="text-[#268BD2] font-medium">Ready for Deployment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-[#839496] hover:text-[#268BD2] transition-colors text-xs font-mono"
            aria-label="Scroll to About section"
          >
            <span>EXPLORE_PORTFOLIO</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
