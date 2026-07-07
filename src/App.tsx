import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import NoiseOverlay from './components/NoiseOverlay';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <ReactLenis root>
      <div id="top"></div>
      <NoiseOverlay />
      <Navbar />
      
      <main className="relative z-10 w-full bg-background overflow-hidden selection:bg-primary/30 selection:text-white">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[600px] rounded-full bg-primary/40 blur-[100px] pointer-events-none opacity-80 mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[500px] rounded-full bg-purple-600/40 blur-[100px] pointer-events-none opacity-80 mix-blend-screen" />
        <div className="absolute top-[40%] left-[10%] w-[30%] h-[400px] rounded-full bg-indigo-600/30 blur-[100px] pointer-events-none opacity-80 mix-blend-screen" />
        
        <div className="relative z-10">
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>
    </ReactLenis>
  );
}

export default App;
