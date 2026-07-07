import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MagneticButton from '../components/MagneticButton';
import { ArrowDownRight, Github, Linkedin } from 'lucide-react';

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
      className="relative min-h-[100dvh] flex flex-col px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto pt-24 sm:pt-32"
    >
      <div className="flex-1 flex flex-col justify-center max-w-4xl relative z-10 w-full mb-12 sm:mb-24">
        <div className="overflow-hidden mb-6">
          <h2 className="hero-text text-sm sm:text-base font-medium text-white/50 tracking-[0.2em] uppercase flex items-center gap-3">
            <span className="w-8 h-[1px] bg-white/30"></span> Warsaw, Poland
          </h2>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-[6rem] leading-[1.1] font-bold tracking-tight mb-8">
          <div className="overflow-hidden">
            <span className="hero-text block">Nazeem.</span>
          </div>
          <div className="overflow-hidden text-white/40">
            <span className="hero-text block tracking-normal">
              So<span className="mr-[0.05em]">f</span>tware Developer.
            </span>
          </div>
        </h1>

        <p className="hero-sub text-lg sm:text-2xl text-white/70 max-w-2xl mb-12 font-light leading-relaxed">
          I build high-fidelity, complex applications. Specializing in <span className="text-white font-medium">React, TypeScript, GraphQL and Next.js</span>.
          Former developer at Samsung Research Poland.
        </p>

        <div className="hero-action flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <MagneticButton onClick={() => {
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="flex items-center gap-2">
              View My Work
              <ArrowDownRight size={18} />
            </span>
          </MagneticButton>
          <div className="flex gap-6 mt-4 sm:mt-0 px-2 sm:px-0">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors group flex items-center gap-2">
              <Github size={20} className="group-hover:-translate-y-1 transition-transform" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors group flex items-center gap-2">
              <Linkedin size={20} className="group-hover:-translate-y-1 transition-transform" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
