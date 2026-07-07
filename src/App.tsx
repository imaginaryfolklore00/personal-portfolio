import React from 'react';
import NoiseOverlay from './components/NoiseOverlay';
import HeroSection from './sections/HeroSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <>
      <NoiseOverlay />
      <main className="relative z-10 w-full bg-background overflow-hidden selection:bg-primary/30 selection:text-white">
        {/* Ambient light effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[500px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />
        <div className="absolute top-[40%] left-[10%] w-[30%] h-[400px] rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none opacity-50 mix-blend-screen" />
        
        <div className="relative z-10">
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}

export default App;
