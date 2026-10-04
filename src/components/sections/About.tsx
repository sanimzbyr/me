import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-[#93A1A1]/30 bg-[#FDF6E3] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          tag="PROFILE & PERSPECTIVE"
          title="Bridging Physical Engineering & Intelligent Software"
          subtitle="A multidisciplinary engineer approaching digital software with the rigor of mechanical design and systems thinking."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative text column */}
          <div className="lg:col-span-7 space-y-5 text-[#586E75] font-normal leading-relaxed text-base">
            {PORTFOLIO_DATA.personal.bio.map((paragraph, index) => (
              <p key={index} className="text-[#586E75] leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-[#93A1A1]/30">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#073642] font-semibold mb-3">
                Core Engineering Competencies
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#586E75]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#268BD2] shrink-0 mt-0.5" />
                  <span>Multidisciplinary mechatronics & mechanical CAD</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2AA198] shrink-0 mt-0.5" />
                  <span>Fluid mechanics & aerodynamic CFD simulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#859900] shrink-0 mt-0.5" />
                  <span>Enterprise backend with C#, .NET & Java Spring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#859900] shrink-0 mt-0.5" />
                  <span>Relational data modeling & SQL databases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6C71C4] shrink-0 mt-0.5" />
                  <span>Modern LLM applications & AI workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#268BD2] shrink-0 mt-0.5" />
                  <span>Design for 3D printing & additive fabrication</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Info & Fact Sheet Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-6 space-y-5 shadow-xs">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#268BD2] font-semibold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic & Engineering Background</span>
              </h3>

              <div className="space-y-4 text-sm font-mono divide-y divide-[#93A1A1]/30">
                <div className="pt-2 first:pt-0">
                  <div className="text-xs text-[#839496] uppercase">Degree</div>
                  <div className="text-[#073642] font-medium font-sans">
                    B.Sc. in Mechatronics Engineering
                  </div>
                </div>

                <div className="pt-3">
                  <div className="text-xs text-[#839496] uppercase">Institution</div>
                  <div className="text-[#073642] font-medium font-sans">
                    Rajshahi University of Engineering & Technology (RUET)
                  </div>
                  <div className="text-xs text-[#657B83] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#839496]" />
                    <span>Rajshahi, Bangladesh</span>
                  </div>
                </div>

                <div className="pt-3">
                  <div className="text-xs text-[#839496] uppercase">Major Thesis Project</div>
                  <div className="text-[#586E75] font-sans text-xs mt-1">
                    Design, Optimization & Development of an H-Darrieus Vertical Axis Wind Turbine for Low Wind Speed Area
                  </div>
                </div>

                <div className="pt-3">
                  <div className="text-xs text-[#839496] uppercase">Engineering Discipline</div>
                  <div className="text-[#586E75] font-sans text-xs mt-1">
                    Integration of mechanical structures, electronic sensors, microcontrollers, aerodynamic simulation, and control logic.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat / Philosophy Quote */}
            <div className="rounded-xl border border-[#93A1A1]/30 bg-[#FDF6E3] p-5 text-xs text-[#657B83] leading-relaxed font-mono shadow-xs">
              <div className="text-[#268BD2] mb-1 font-semibold">// ENGINEERING PRINCIPLE</div>
              "Hardware grounds thinking in physical limits; software and AI unlock computational leverage. The most exciting systems exist where both realms meet."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
