import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sky' | 'emerald' | 'amber' | 'indigo' | 'slate' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  size = 'md',
  icon,
  className = ''
}) => {
  const variantStyles = {
    sky: 'bg-[#268BD2]/10 text-[#268BD2] border-[#268BD2]/30',
    emerald: 'bg-[#859900]/10 text-[#859900] border-[#859900]/30',
    amber: 'bg-[#B58900]/12 text-[#B58900] border-[#B58900]/30',
    indigo: 'bg-[#6C71C4]/10 text-[#6C71C4] border-[#6C71C4]/30',
    slate: 'bg-[#EEE8D5] text-[#586E75] border-[#93A1A1]/40',
    outline: 'bg-transparent text-[#657B83] border-[#93A1A1]/50'
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-mono',
    md: 'text-xs px-2.5 py-1 font-mono'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border font-medium tracking-wide transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
