import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCard from '../components/AnimatedCard';
import { ExternalLink, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "VXT Developer Portal",
    type: "Global B2B Platform (Samsung)",
    description: "A dashboard-like project where Samsung partners platform their applications used inside VXT Canvas. Built complex forms, dynamic sales data visualizations, and robust GraphQL integrations. Used by major global clients like Żabka.",
    tags: ["React", "Next.js", "GraphQL", "AWS Bedrock", "MUI", "Jest"],
    link: "https://developer.samsungvx.com/"
  },
  {
    title: "Banino Residence",
    type: "Freelance Project",
    description: "A high-end website designed and developed from the ground up for a Residence Development firm. Focused on visual excellence, performance, and seamless user experience.",
    tags: ["Frontend", "Web Development", "UI/UX", "Performance"],
    link: "https://baninoresidence.pl/"
  }
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.proj-title', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    const cards = gsap.utils.toArray('.proj-card');
    cards.forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: i * 0.15
      });
    });

  }, { scope: sectionRef });

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto" ref={sectionRef}>
      <h2 className="proj-title text-4xl sm:text-5xl font-bold mb-16 tracking-tight">Selected Work.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <AnimatedCard key={idx} className="proj-card flex flex-col h-full group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-primary/20 transition-colors duration-500">
                <Code2 className="text-white group-hover:text-primary transition-colors" size={24} />
              </div>
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors p-2 hover:-translate-y-1 transform duration-300">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
            
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">{proj.type}</p>
            <h3 className="text-3xl font-bold mb-4">{proj.title}</h3>
            <p className="text-white/60 leading-relaxed mb-8 flex-grow">
              {proj.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
              {proj.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-white/70 bg-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
