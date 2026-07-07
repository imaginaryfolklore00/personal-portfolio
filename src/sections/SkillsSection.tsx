import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend & Core",
    skills: ["React", "TypeScript", "Next.js", "JavaScript", "HTML/CSS", "Angular"]
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "GraphQL", "Apollo", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools & Testing",
    skills: ["Jest", "Cypress", "Jenkins", "AWS", "Git", "GitHub Actions"]
  }
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.skills-title', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    const groups = gsap.utils.toArray('.skill-group');
    groups.forEach((group: any, i) => {
      gsap.from(group, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: i * 0.15
      });
    });

  }, { scope: sectionRef });

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-t border-white/5" ref={sectionRef}>
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="md:w-1/3 shrink-0">
          <h2 className="skills-title text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Technical <br/><span className="text-white/40">Arsenal.</span>
          </h2>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-group">
              <h3 className="text-xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-4">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-white/60 font-medium hover:text-white transition-colors cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
