import React from 'react';

interface SectionHeaderProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  tag,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      <div className={`flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-[#2AA198] ${align === 'center' ? 'justify-center' : ''}`}>
        {number && <span className="text-[#839496] font-semibold">{number}</span>}
        {number && tag && <span className="text-[#93A1A1]">//</span>}
        {tag && <span>{tag}</span>}
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#073642] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-[#657B83] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
