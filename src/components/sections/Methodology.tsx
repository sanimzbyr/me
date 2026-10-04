import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Search, Compass, Hammer, RotateCw } from 'lucide-react';

export const Methodology: React.FC = () => {
  const stepIcons = [
    <Search className="w-5 h-5 text-[#268BD2]" key="understand" />,
    <Compass className="w-5 h-5 text-[#6C71C4]" key="model" />,
    <Hammer className="w-5 h-5 text-[#859900]" key="build" />,
    <RotateCw className="w-5 h-5 text-[#B58900]" key="test" />
  ];

  return (
    <section id="methodology" className="py-20 bg-[#FDF6E3] border-t border-[#93A1A1]/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          tag="ENGINEERING PHILOSOPHY"
          title="How I Build"
          subtitle="A systematic, constraint-driven approach applied equally to physical mechanical assemblies, simulation pipelines, and distributed software systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.methodology.map((step, idx) => (
            <div
              key={step.step}
              className="rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-6 flex flex-col justify-between hover:border-[#268BD2]/50 hover:bg-[#EEE8D5] transition-all duration-200 relative group shadow-xs hover:shadow-md"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 shadow-xs">
                    {stepIcons[idx % stepIcons.length]}
                  </div>
                  <span className="font-mono text-2xl font-black text-[#93A1A1] group-hover:text-[#268BD2] transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#073642] tracking-tight mb-1">
                  {step.title}
                </h3>

                <div className="text-xs font-mono text-[#268BD2] mb-3 font-semibold">
                  {step.tagline}
                </div>

                <p className="text-xs text-[#586E75] leading-relaxed font-sans mb-4">
                  {step.description}
                </p>
              </div>

              {/* Deliverables / focus items */}
              <div className="pt-4 border-t border-[#93A1A1]/30">
                <span className="text-[10px] font-mono text-[#839496] uppercase tracking-wider block mb-2 font-semibold">
                  System Deliverables:
                </span>
                <ul className="space-y-1.5 text-xs font-mono text-[#586E75]">
                  {step.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2AA198]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
