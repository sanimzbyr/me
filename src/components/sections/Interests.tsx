import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Bot, Cpu, Terminal, Sparkles, TrendingUp } from 'lucide-react';

export const Interests: React.FC = () => {
  const interestIcons = [
    <Bot className="w-5 h-5 text-[#6C71C4]" key="ai" />,
    <Cpu className="w-5 h-5 text-[#268BD2]" key="robotics" />,
    <Terminal className="w-5 h-5 text-[#859900]" key="swe" />,
    <Sparkles className="w-5 h-5 text-[#B58900]" key="prod" />,
    <TrendingUp className="w-5 h-5 text-[#2AA198]" key="entre" />
  ];

  return (
    <section id="interests" className="py-20 bg-[#FDF6E3] border-t border-[#93A1A1]/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="07"
          tag="EXPANDING HORIZONS"
          title="Current Technical Focus & Interests"
          subtitle="Key areas where I am actively investing research, technical study, and hands-on experimentation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.currentInterests.map((interest, idx) => (
            <div
              key={interest.title}
              className="rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-6 flex flex-col justify-between hover:border-[#268BD2]/50 hover:bg-[#EEE8D5] transition-all shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 shadow-xs">
                    {interestIcons[idx % interestIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#073642] tracking-tight">
                      {interest.title}
                    </h3>
                    <div className="text-xs font-mono text-[#839496]">
                      {interest.tagline}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#586E75] leading-relaxed font-sans mb-4">
                  {interest.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#93A1A1]/30">
                <div className="flex flex-wrap gap-1.5">
                  {interest.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#FDF6E3] text-[#586E75] border border-[#93A1A1]/35"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
