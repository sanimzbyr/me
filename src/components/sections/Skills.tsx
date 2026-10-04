import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import {
  Code2,
  Server,
  Bot,
  Cog,
  Wrench,
  Layers
} from 'lucide-react';

export const Skills: React.FC = () => {
  const categoryIcons = [
    <Code2 className="w-5 h-5 text-[#268BD2]" key="prog" />,
    <Server className="w-5 h-5 text-[#859900]" key="backend" />,
    <Bot className="w-5 h-5 text-[#6C71C4]" key="ai" />,
    <Cog className="w-5 h-5 text-[#B58900]" key="eng" />,
    <Wrench className="w-5 h-5 text-[#CB4B16]" key="tools" />
  ];

  return (
    <section id="skills" className="py-20 bg-[#FDF6E3] relative border-t border-[#93A1A1]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          tag="TECHNICAL TOOLKIT"
          title="Engineering & Software Capabilities"
          subtitle="Areas of hands-on experience and active development across multidisciplinary domains. Grouped transparently by engineering discipline."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => {
            const isFullWidth = idx === 3; // Engineering card can be prominent
            return (
              <div
                key={category.title}
                className={`rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-6 flex flex-col justify-between transition-all duration-200 hover:bg-[#EEE8D5] shadow-xs hover:shadow-md ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 shadow-xs">
                        {categoryIcons[idx % categoryIcons.length]}
                      </div>
                      <div>
                        <h3 className="text-[#073642] font-semibold text-base tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs text-[#657B83] font-normal">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#839496]">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-[#586E75] bg-[#FDF6E3] border border-[#93A1A1]/35 hover:border-[#268BD2]/60 hover:text-[#073642] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2AA198]"></span>
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#93A1A1]/30 flex items-center justify-between text-[11px] font-mono text-[#839496]">
                  <span>{category.skills.length} core competencies</span>
                  <span className="text-[#586E75]">Practical & Applied</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note regarding competency presentation */}
        <div className="mt-8 p-4 rounded-lg bg-[#EEE8D5]/80 border border-[#93A1A1]/35 flex items-start gap-3 text-xs text-[#586E75] font-mono shadow-xs">
          <Layers className="w-4 h-4 text-[#268BD2] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#073642]">Competency Philosophy:</strong> Skills represent practical coursework, physical prototyping, academic research, and active software development. Rather than artificial percentage bars, competencies are demonstrated through documented code, mathematical simulations, and working prototypes.
          </p>
        </div>
      </div>
    </section>
  );
};
