import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Mail, Phone, Copy, Check, ArrowUpRight, MessageSquareCode, Download, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.links.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#FDF6E3] border-t border-[#93A1A1]/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8D5] border border-[#93A1A1]/40 text-xs font-mono text-[#2AA198] font-semibold mb-4 shadow-xs">
          <MessageSquareCode className="w-3.5 h-3.5" />
          <span>CONTACT & COLLABORATION</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#073642] tracking-tight mb-4">
          Let's build something useful.
        </h2>

        <p className="text-base sm:text-lg text-[#586E75] max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          Interested in engineering, AI, software, automation, or building a practical technology product? Feel free to get in touch.
        </p>

        {/* 4 Prominent Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
          
          {/* 1. Email Card */}
          <div className="rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-5 flex flex-col justify-between hover:border-[#2AA198]/60 hover:bg-[#EEE8D5] transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 text-[#2AA198]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded bg-[#FDF6E3] hover:bg-[#E0D7C3] border border-[#93A1A1]/30 text-[#586E75] hover:text-[#073642] transition-colors text-xs font-mono flex items-center gap-1"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-[#859900]" />
                      <span className="text-[#859900]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs font-mono text-[#839496] uppercase tracking-wider mb-1">
                Email
              </div>
              <a
                href={`mailto:${PORTFOLIO_DATA.links.email}`}
                className="text-sm font-semibold text-[#073642] group-hover:text-[#2AA198] transition-colors break-all block"
              >
                {PORTFOLIO_DATA.links.email}
              </a>
            </div>
            <div className="pt-3 mt-3 border-t border-[#93A1A1]/20">
              <a
                href={`mailto:${PORTFOLIO_DATA.links.email}`}
                className="inline-flex items-center gap-1 text-xs font-mono text-[#2AA198] hover:text-[#073642] font-semibold"
              >
                <span>Send message</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 2. Phone Card */}
          <div className="rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-5 flex flex-col justify-between hover:border-[#859900]/60 hover:bg-[#EEE8D5] transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 text-[#859900]">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded bg-[#FDF6E3] hover:bg-[#E0D7C3] border border-[#93A1A1]/30 text-[#586E75] hover:text-[#073642] transition-colors text-xs font-mono flex items-center gap-1"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-[#859900]" />
                      <span className="text-[#859900]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs font-mono text-[#839496] uppercase tracking-wider mb-1">
                Phone
              </div>
              <a
                href={`tel:${PORTFOLIO_DATA.links.phone}`}
                className="text-sm font-semibold text-[#073642] group-hover:text-[#859900] transition-colors block font-mono"
              >
                {PORTFOLIO_DATA.links.phone}
              </a>
            </div>
            <div className="pt-3 mt-3 border-t border-[#93A1A1]/20">
              <a
                href={`tel:${PORTFOLIO_DATA.links.phone}`}
                className="inline-flex items-center gap-1 text-xs font-mono text-[#859900] hover:text-[#073642] font-semibold"
              >
                <span>Call number</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 3. GitHub Card */}
          <div className="rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-5 flex flex-col justify-between hover:border-[#268BD2]/60 hover:bg-[#EEE8D5] transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 text-[#268BD2]">
                  <GithubIcon size={20} />
                </div>
                <span className="text-[10px] font-mono text-[#839496] bg-[#FDF6E3] px-2 py-0.5 rounded border border-[#93A1A1]/30">
                  Code
                </span>
              </div>
              <div className="text-xs font-mono text-[#839496] uppercase tracking-wider mb-1">
                GitHub
              </div>
              <a
                href={PORTFOLIO_DATA.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#073642] group-hover:text-[#268BD2] transition-colors block font-mono"
              >
                github.com/sanimzbyr
              </a>
            </div>
            <div className="pt-3 mt-3 border-t border-[#93A1A1]/20">
              <a
                href={PORTFOLIO_DATA.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#268BD2] hover:text-[#073642] font-semibold"
              >
                <span>Visit profile</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 4. LinkedIn Card */}
          <div className="rounded-xl border border-[#93A1A1]/35 bg-[#EEE8D5]/70 p-5 flex flex-col justify-between hover:border-[#6C71C4]/60 hover:bg-[#EEE8D5] transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#FDF6E3] border border-[#93A1A1]/30 text-[#6C71C4]">
                  <LinkedinIcon size={20} />
                </div>
                <span className="text-[10px] font-mono text-[#839496] bg-[#FDF6E3] px-2 py-0.5 rounded border border-[#93A1A1]/30">
                  Network
                </span>
              </div>
              <div className="text-xs font-mono text-[#839496] uppercase tracking-wider mb-1">
                LinkedIn
              </div>
              <a
                href={PORTFOLIO_DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#073642] group-hover:text-[#6C71C4] transition-colors block font-mono"
              >
                linkedin.com/in/sanimzbyr
              </a>
            </div>
            <div className="pt-3 mt-3 border-t border-[#93A1A1]/20">
              <a
                href={PORTFOLIO_DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#6C71C4] hover:text-[#073642] font-semibold"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Primary Direct Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href={`mailto:${PORTFOLIO_DATA.links.email}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#268BD2] hover:bg-[#2075B3] text-[#FDF6E3] font-semibold text-sm transition-all shadow-md shadow-[#268BD2]/20 active:translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>

          <a
            href={`tel:${PORTFOLIO_DATA.links.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#EEE8D5] hover:bg-[#E0D7C3] text-[#073642] font-semibold text-sm border border-[#93A1A1]/40 transition-all shadow-xs active:translate-y-0.5"
          >
            <Phone className="w-4 h-4 text-[#859900]" />
            <span>Call (+880 1302-827082)</span>
          </a>

          <a
            href={PORTFOLIO_DATA.links.resume}
            download="Zubair_Hossain_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#EEE8D5] hover:bg-[#E0D7C3] text-[#073642] font-semibold text-sm border border-[#93A1A1]/40 hover:border-[#268BD2]/60 transition-all shadow-xs active:translate-y-0.5"
            title="Download Zubair Hossain Resume (PDF)"
          >
            <Download className="w-4 h-4 text-[#268BD2]" />
            <span>Download Resume</span>
          </a>

          <a
            href={PORTFOLIO_DATA.links.resumeView}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#EEE8D5] hover:bg-[#E0D7C3] text-[#073642] font-medium text-sm border border-[#93A1A1]/40 hover:border-[#2AA198]/60 transition-all shadow-xs"
            title="Open Resume in new tab"
          >
            <FileText className="w-4 h-4 text-[#2AA198]" />
            <span>View Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#839496]" />
          </a>

          <a
            href={PORTFOLIO_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#EEE8D5] hover:bg-[#E0D7C3] text-[#073642] font-medium text-sm border border-[#93A1A1]/40 transition-all shadow-xs"
          >
            <GithubIcon size={16} className="text-[#268BD2]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#839496]" />
          </a>

          <a
            href={PORTFOLIO_DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#EEE8D5] hover:bg-[#E0D7C3] text-[#073642] font-medium text-sm border border-[#93A1A1]/40 transition-all shadow-xs"
          >
            <LinkedinIcon size={16} className="text-[#6C71C4]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#839496]" />
          </a>
        </div>

        <div className="text-xs font-mono text-[#839496]">
          Location: Rajshahi / Dhaka, Bangladesh • Available for engineering, software, and AI roles
        </div>
      </div>
    </section>
  );
};
