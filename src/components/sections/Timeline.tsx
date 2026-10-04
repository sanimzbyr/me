import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { Calendar, MapPin, CheckCircle2, Terminal, Bot, GraduationCap } from 'lucide-react';

export const Timeline: React.FC = () => {
  const getTagVariant = (tag: string) => {
    switch (tag) {
      case 'Education':
        return 'sky';
      case 'Software':
        return 'emerald';
      case 'AI / ML':
        return 'indigo';
      default:
        return 'slate';
    }
  };

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case 'Education':
        return <GraduationCap className="w-3.5 h-3.5" />;
      case 'Software':
        return <Terminal className="w-3.5 h-3.5" />;
      case 'AI / ML':
        return <Bot className="w-3.5 h-3.5" />;
      default:
        return undefined;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-[#FDF6E3] border-t border-[#93A1A1]/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          tag="CAREER & KNOWLEDGE TRAJECTORY"
          title="Experience & Learning Timeline"
          subtitle="Chronological milestones spanning multidisciplinary mechatronics engineering education, software development progression, and applied AI research."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#93A1A1]/40 space-y-12">
          {PORTFOLIO_DATA.timeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#FDF6E3] border-2 border-[#268BD2] group-hover:scale-125 transition-transform" />

              <div className="rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-6 hover:border-[#268BD2]/50 hover:bg-[#EEE8D5] transition-colors shadow-xs hover:shadow-md">
                
                {/* Header row: Tag + Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <Badge
                    variant={getTagVariant(item.tag)}
                    icon={getTagIcon(item.tag)}
                    size="sm"
                  >
                    {item.tag}
                  </Badge>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#839496]">
                    <Calendar className="w-3.5 h-3.5 text-[#839496]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl font-bold text-[#073642] tracking-tight mb-1">
                  {item.title}
                </h3>
                <div className="text-sm font-medium text-[#268BD2] mb-3 flex items-center gap-2">
                  <span>{item.organization}</span>
                  <span className="text-[#93A1A1]">•</span>
                  <span className="text-xs text-[#657B83] flex items-center gap-1 font-mono">
                    <MapPin className="w-3 h-3 text-[#839496]" />
                    {item.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#586E75] leading-relaxed font-normal mb-4">
                  {item.description}
                </p>

                {/* Key Highlights list */}
                <div className="pt-3 border-t border-[#93A1A1]/30">
                  <span className="text-[10px] font-mono text-[#839496] uppercase tracking-wider block mb-2 font-semibold">
                    Key Focus Areas & Milestones:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#586E75] font-sans">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#268BD2] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
