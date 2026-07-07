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
      <main className="relative z-10 w-full bg-background overflow-hidden">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
