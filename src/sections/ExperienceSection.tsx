import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCard from '../components/AnimatedCard';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Javascript Developer",
    company: "Samsung Research Poland",
    period: "Feb 2023 - Jul 2026",
    highlight: "Promoted from Intern to full-time Junior. Built >30% of codebase for major VXT global projects.",
    details: [
      "VXT Developer Portal (React/Next.js/GraphQL): Led complete UI revamps, built custom MUI components, implemented robust authorization systems, and designed a complex standalone sales data visualization graph.",
      "VXT Canvas (Angular/RxJS): Navigated a massive legacy codebase. Successfully rebuilt core logic for canvas 'Text' element behavior, deeply integrating with application state.",
      "VXT Player (React/TS): Drove migration from vanilla JS to React/TypeScript. Researched and integrated performance-critical cross-platform DRM solutions for encrypted content delivery."
    ]
  }
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.exp-card');
    
    gsap.from('.exp-title', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    cards.forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: i * 0.15
      });
    });

  }, { scope: sectionRef });

  return (
    <section id="experience" ref={sectionRef} className="py-20 sm:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <h2 className="exp-title text-4xl sm:text-5xl font-bold mb-16 tracking-tight">Experience.</h2>
      
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <AnimatedCard key={idx} className="exp-card flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/3 shrink-0">
              <p className="text-white/50 text-sm tracking-widest uppercase mb-4">{exp.period}</p>
              <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-primary text-lg font-medium">{exp.company}</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-xl font-medium text-white mb-6 leading-relaxed">
                {exp.highlight}
              </p>
              <ul className="space-y-6">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="text-white/70 leading-relaxed relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
