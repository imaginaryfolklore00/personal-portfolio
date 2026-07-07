import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MagneticButton from '../components/MagneticButton';
import { ArrowDownRight } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.2
    })
    .from('.hero-sub', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.8")
    .from('.hero-action', {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto pt-20"
    >
      <div className="max-w-4xl">
        <div className="overflow-hidden mb-4">
          <h2 className="hero-text text-lg sm:text-xl font-medium text-white/60 tracking-wide uppercase">
            Warsaw, Poland
          </h2>
        </div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-[6rem] leading-[1.1] font-bold tracking-tight mb-8">
          <div className="overflow-hidden">
            <span className="hero-text block">Nazeem.</span>
          </div>
          <div className="overflow-hidden text-white/40">
            <span className="hero-text block">Software Developer.</span>
          </div>
        </h1>

        <p className="hero-sub text-lg sm:text-2xl text-white/70 max-w-2xl mb-12 font-light leading-relaxed">
          I build high-fidelity, complex applications. Specializing in <span className="text-white font-medium">React, TypeScript, and Next.js</span>. 
          Former developer at Samsung Research Poland.
        </p>

        <div className="hero-action flex flex-wrap gap-6 items-center">
          <MagneticButton onClick={() => {
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="flex items-center gap-2">
              View My Work
              <ArrowDownRight size={18} />
            </span>
          </MagneticButton>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 sm:left-12 lg:left-24 hero-action">
        <p className="text-sm text-white/40 uppercase tracking-widest font-medium">Scroll to explore</p>
      </div>
    </section>
  );
}
