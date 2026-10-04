import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { GraduationCap, MapPin, BookOpen } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const Education: React.FC = () => {
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="py-20 bg-[#FDF6E3] border-t border-[#93A1A1]/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="09"
          tag="ACADEMIC CREDENTIALS"
          title="Education"
          subtitle="Formal engineering education from a premier public engineering institution in Bangladesh."
        />

        <div className="rounded-2xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#93A1A1]/30">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <Badge variant="sky" icon={<GraduationCap className="w-3.5 h-3.5" />}>
                  Bachelor of Science (B.Sc. Engg.)
                </Badge>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#073642] tracking-tight">
                {edu.institution}
              </h3>

              <div className="text-base text-[#268BD2] font-semibold mt-1">
                {edu.degree}
              </div>

              <div className="text-xs text-[#657B83] flex items-center gap-1.5 mt-1 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#839496]" />
                <span>{edu.department} • {edu.location}</span>
              </div>
            </div>

            {/* Academic stats cards with explicit placeholders */}
            <div className="flex flex-col sm:items-end gap-2 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 text-right min-w-[160px] shadow-xs">
                <span className="text-[#839496] uppercase text-[10px] block">Timeline</span>
                <span className="text-[#073642] font-semibold">{edu.period}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 text-right min-w-[160px] shadow-xs">
                <span className="text-[#839496] uppercase text-[10px] block">Cumulative GPA</span>
                <span className="text-[#268BD2] font-semibold">{edu.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#073642] font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#268BD2]" />
              <span>Rigorous Engineering Coursework</span>
            </h4>

            <div className="flex flex-wrap gap-2">
              {edu.relevantCoursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-[#FDF6E3] text-[#586E75] border border-[#93A1A1]/35 hover:border-[#268BD2]/50 hover:text-[#073642] transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Educational Note */}
          <div className="mt-6 pt-4 border-t border-[#93A1A1]/30 flex items-center justify-between text-[11px] font-mono text-[#839496]">
            <span>Discipline: Mechanical, Electrical, Automation & Computer Systems</span>
            <span className="text-[#268BD2] font-semibold">RUET Graduate</span>
          </div>
        </div>
      </div>
    </section>
  );
};
