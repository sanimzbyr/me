import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Cog, Wind, ChevronRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const EngineeringProjects: React.FC = () => {
  return (
    <section id="engineering" className="py-20 bg-[#FDF6E3] border-t border-[#93A1A1]/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          tag="PHYSICAL SYSTEMS & CAD/CFD"
          title="Engineering & Mechanical Systems"
          subtitle="Physical design, fluid simulation, structural mechanics, and automation hardware. Grounded in RUET's Mechatronics curriculum."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.engineeringWork.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-6 flex flex-col justify-between hover:border-[#268BD2]/50 hover:bg-[#EEE8D5] transition-all duration-200 shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant={idx === 0 ? 'sky' : 'slate'} size="sm">
                    {item.status}
                  </Badge>
                  <span className="text-[10px] font-mono text-[#839496] uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#073642] tracking-tight mb-2 flex items-center gap-2">
                  {idx === 0 ? <Wind className="w-5 h-5 text-[#268BD2]" /> : <Cog className="w-5 h-5 text-[#B58900]" />}
                  <span>{item.title}</span>
                </h3>

                <p className="text-sm text-[#586E75] leading-relaxed font-normal mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#93A1A1]/30">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#FDF6E3] text-[#586E75] border border-[#93A1A1]/35"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {idx === 0 ? (
                  <a
                    href="#vawt"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#268BD2] hover:text-[#073642] font-semibold transition-colors"
                  >
                    <span>View Dedicated VAWT Thesis Showcase</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-[#839496]">
                    RUET Engineering Lab Documentation
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
