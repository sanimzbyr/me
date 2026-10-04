import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import {
  Wind,
  Activity,
  AlertCircle,
  Cog
} from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'specs' | 'methodology' | 'schematic'>('specs');
  const vawt = PORTFOLIO_DATA.vawtProject;

  return (
    <section id="vawt" className="py-24 bg-[#FDF6E3] border-t border-[#93A1A1]/30 relative">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 radial-glow-cyan pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeader
          number="03"
          tag="MAJOR THESIS & EXPERIMENTAL PROTOTYPE"
          title="Vertical Axis Wind Turbine for Low Wind Speeds"
          subtitle="Undergraduate engineering thesis investigating a compact H-Darrieus VAWT configuration engineered for urban and semi-urban low-speed wind regimes."
        />

        {/* Featured Project Hero Container */}
        <div className="rounded-2xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          
          {/* Top Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#93A1A1]/30">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="sky" icon={<Wind className="w-3.5 h-3.5" />}>
                RUET Thesis Project
              </Badge>
              <Badge variant="slate">
                Three-Bladed H-Darrieus
              </Badge>
              <Badge variant="emerald">
                NACA 0021 Airfoil
              </Badge>
              <Badge variant="indigo">
                CFD + Physical Prototype
              </Badge>
            </div>

            <div className="text-xs font-mono text-[#586E75] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#859900]"></span>
              <span>Design Wind Speed: 5.0 m/s</span>
            </div>
          </div>

          {/* Title & Core Problem */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#073642] tracking-tight leading-snug">
                {vawt.title}
              </h3>

              <p className="text-base text-[#586E75] leading-relaxed font-normal">
                {vawt.description}
              </p>

              {/* The Engineering Problem Box */}
              <div className="p-4 rounded-xl bg-[#FDF6E3] border border-[#93A1A1]/30 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono text-[#CB4B16] uppercase tracking-wider font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Engineering Problem</span>
                </div>
                <p className="text-sm text-[#586E75] leading-relaxed font-normal">
                  {vawt.problemStatement}
                </p>
              </div>

              {/* Technologies Tag Group */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-[#839496] uppercase tracking-wider">
                  Applied Tools & Engineering Methods:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {vawt.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#FDF6E3] border border-[#93A1A1]/35 text-[#268BD2]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Schematic & Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-[#93A1A1]/35 bg-[#FDF6E3] p-5 font-mono text-xs shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#93A1A1]/30 text-[11px] text-[#839496]">
                  <span className="text-[#268BD2] flex items-center gap-1.5 font-semibold">
                    <Cog className="w-3.5 h-3.5" />
                    AERODYNAMIC_SCHEMATIC
                  </span>
                  <span>SCALE: 1:15</span>
                </div>

                {/* SVG Technical Drawing: H-Darrieus Geometry & Airfoil Cross Section */}
                <div className="py-4 flex justify-center">
                  <svg
                    viewBox="0 0 340 240"
                    className="w-full max-w-xs h-auto select-none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background subtle technical grid */}
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E0D7C3" strokeWidth="0.8" />
                      </pattern>
                      <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#268BD2" />
                        <stop offset="100%" stopColor="#2AA198" />
                      </linearGradient>
                    </defs>

                    <rect width="340" height="240" fill="url(#grid)" />

                    {/* Wind Vector Arrows */}
                    <g opacity="0.85">
                      <path d="M 15 50 L 55 50 M 48 46 L 55 50 L 48 54" stroke="#268BD2" strokeWidth="1.5" />
                      <path d="M 15 90 L 55 90 M 48 86 L 55 90 L 48 94" stroke="#268BD2" strokeWidth="1.5" />
                      <path d="M 15 130 L 55 130 M 48 126 L 55 130 L 48 134" stroke="#268BD2" strokeWidth="1.5" />
                      <text x="15" y="38" fill="#268BD2" fontSize="8" fontFamily="monospace" fontWeight="bold">WIND V=5 m/s</text>
                    </g>

                    {/* Central Mast */}
                    <line x1="170" y1="20" x2="170" y2="210" stroke="#586E75" strokeWidth="3" strokeDasharray="6 3" />
                    <circle cx="170" cy="115" r="7" fill="#EEE8D5" stroke="#268BD2" strokeWidth="2" />
                    <text x="180" y="118" fill="#586E75" fontSize="8" fontFamily="monospace">Hub (r=0)</text>

                    {/* Left Blade (Hollow Airfoil representation) */}
                    <path
                      d="M 95 30 Q 90 70 90 115 Q 90 160 95 200 L 102 200 Q 97 160 97 115 Q 97 70 102 30 Z"
                      fill="url(#bladeGrad)"
                      stroke="#268BD2"
                      strokeWidth="1.2"
                    />

                    {/* Right Blade */}
                    <path
                      d="M 245 30 Q 240 70 240 115 Q 240 160 245 200 L 252 200 Q 247 160 247 115 Q 247 70 252 30 Z"
                      fill="url(#bladeGrad)"
                      stroke="#268BD2"
                      strokeWidth="1.2"
                    />

                    {/* Horizontal Struts (Support Arms) */}
                    <line x1="97" y1="70" x2="243" y2="70" stroke="#93A1A1" strokeWidth="2" />
                    <line x1="97" y1="160" x2="243" y2="160" stroke="#93A1A1" strokeWidth="2" />

                    {/* Rotation Arrow */}
                    <path
                      d="M 150 145 A 25 15 0 0 1 190 145"
                      fill="none"
                      stroke="#859900"
                      strokeWidth="1.5"
                      strokeDasharray="2 2"
                    />
                    <polygon points="190,142 195,145 190,149" fill="#859900" />
                    <text x="145" y="170" fill="#859900" fontSize="8" fontFamily="monospace" fontWeight="bold">ω = 9 rad/s</text>

                    {/* Dimension Lines: Height 1000mm */}
                    <line x1="270" y1="30" x2="270" y2="200" stroke="#CB4B16" strokeWidth="1" />
                    <line x1="266" y1="30" x2="274" y2="30" stroke="#CB4B16" strokeWidth="1" />
                    <line x1="266" y1="200" x2="274" y2="200" stroke="#CB4B16" strokeWidth="1" />
                    <text x="278" y="120" fill="#CB4B16" fontSize="8" fontFamily="monospace">H=1000mm</text>

                    {/* Dimension Lines: Diameter 650mm */}
                    <line x1="95" y1="215" x2="252" y2="215" stroke="#CB4B16" strokeWidth="1" />
                    <line x1="95" y1="211" x2="95" y2="219" stroke="#CB4B16" strokeWidth="1" />
                    <line x1="252" y1="211" x2="252" y2="219" stroke="#CB4B16" strokeWidth="1" />
                    <text x="145" y="230" fill="#CB4B16" fontSize="8" fontFamily="monospace">Ø = 650 mm</text>

                    {/* Inset Airfoil Profile NACA 0021 */}
                    <rect x="15" y="170" width="70" height="45" rx="3" fill="#EEE8D5" stroke="#93A1A1" strokeWidth="0.8" />
                    <path
                      d="M 22 192 Q 35 183 55 190 Q 72 192 78 192 Q 72 192 55 194 Q 35 201 22 192 Z"
                      fill="#268BD2"
                      opacity="0.9"
                    />
                    <text x="20" y="180" fill="#586E75" fontSize="7" fontFamily="monospace" fontWeight="bold">NACA 0021</text>
                  </svg>
                </div>

                <div className="pt-2 border-t border-[#93A1A1]/30 flex items-center justify-between text-[11px] text-[#586E75]">
                  <span>Configuration: H-Darrieus</span>
                  <span className="text-[#859900] font-medium">3-Bladed Hollow Structure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs for In-Depth Technical Information */}
          <div className="mt-10 pt-8 border-t border-[#93A1A1]/30">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition-colors ${
                  activeTab === 'specs'
                    ? 'bg-[#268BD2] text-[#FDF6E3] font-bold shadow-xs'
                    : 'bg-[#EEE8D5] text-[#586E75] hover:text-[#073642] border border-[#93A1A1]/35'
                }`}
              >
                01. Technical Specifications
              </button>

              <button
                onClick={() => setActiveTab('methodology')}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition-colors ${
                  activeTab === 'methodology'
                    ? 'bg-[#268BD2] text-[#FDF6E3] font-bold shadow-xs'
                    : 'bg-[#EEE8D5] text-[#586E75] hover:text-[#073642] border border-[#93A1A1]/35'
                }`}
              >
                02. 7-Stage Engineering Process
              </button>

              <button
                onClick={() => setActiveTab('schematic')}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition-colors ${
                  activeTab === 'schematic'
                    ? 'bg-[#268BD2] text-[#FDF6E3] font-bold shadow-xs'
                    : 'bg-[#EEE8D5] text-[#586E75] hover:text-[#073642] border border-[#93A1A1]/35'
                }`}
              >
                03. Simulation vs Prototype Notice
              </button>
            </div>

            {/* Tab 1: Specifications Grid */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
                {vawt.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-4 rounded-xl bg-[#FDF6E3] border border-[#93A1A1]/30 hover:border-[#268BD2]/40 transition-colors shadow-xs"
                  >
                    <div className="text-xs font-mono text-[#839496] uppercase tracking-wider mb-1">
                      {spec.label}
                    </div>
                    <div className="text-base font-semibold text-[#073642] font-mono">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: 7-Stage Engineering Methodology */}
            {activeTab === 'methodology' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {vawt.methodology.map((step) => (
                    <div
                      key={step.step}
                      className="p-4 rounded-xl bg-[#FDF6E3] border border-[#93A1A1]/30 hover:border-[#268BD2]/40 transition-colors shadow-xs"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-[#268BD2] bg-[#268BD2]/10 px-2 py-0.5 rounded border border-[#268BD2]/30">
                          {step.step}
                        </span>
                        <h4 className="text-sm font-semibold text-[#073642]">
                          {step.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#586E75] leading-relaxed font-sans">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Simulation vs Prototype Rigorous Distinctions */}
            {activeTab === 'schematic' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
                <div className="p-5 rounded-xl bg-[#FDF6E3] border border-[#268BD2]/40 space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-mono text-[#268BD2] font-semibold">
                    <Activity className="w-4 h-4 text-[#268BD2]" />
                    <span>Aerodynamic Simulation Domain (ANSYS CFX)</span>
                  </div>
                  <p className="text-xs text-[#586E75] leading-relaxed">
                    {vawt.dataLabels.simulationNotice}
                  </p>
                  <ul className="text-xs text-[#657B83] space-y-1.5 font-mono pt-2 border-t border-[#93A1A1]/30">
                    <li>• Static pressure distributions on suction/pressure sides</li>
                    <li>• Torque coefficients calculated across dynamic angles of attack</li>
                    <li>• Boundary layer detachment verification for NACA 0021</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#FDF6E3] border border-[#859900]/40 space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-mono text-[#859900] font-semibold">
                    <Cog className="w-4 h-4 text-[#859900]" />
                    <span>Physical Prototype & Fabrication (Experimental)</span>
                  </div>
                  <p className="text-xs text-[#586E75] leading-relaxed">
                    {vawt.dataLabels.prototypeNotice}
                  </p>
                  <ul className="text-xs text-[#657B83] space-y-1.5 font-mono pt-2 border-t border-[#93A1A1]/30">
                    <li>• Rapid additive fabrication of blade cross-sections (3D printing)</li>
                    <li>• Mechanical assembly of shaft, radial bearings, and support struts</li>
                    <li>• Observational testing of rotational start at low wind speeds</li>
                  </ul>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
