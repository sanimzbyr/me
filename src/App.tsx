import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { FeaturedProject } from './components/sections/FeaturedProject';
import { SoftwareAiProjects } from './components/sections/SoftwareAiProjects';
import { EngineeringProjects } from './components/sections/EngineeringProjects';
import { Methodology } from './components/sections/Methodology';
import { Interests } from './components/sections/Interests';
import { Timeline } from './components/sections/Timeline';
import { Education } from './components/sections/Education';
import { GitHubSection } from './components/sections/GitHubSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDF6E3] text-[#586E75] selection:bg-[#268BD2]/20 selection:text-[#268BD2] font-sans antialiased">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <SoftwareAiProjects />
        <EngineeringProjects />
        <Methodology />
        <Interests />
        <Timeline />
        <Education />
        <GitHubSection />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
