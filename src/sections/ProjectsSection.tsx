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
    description: "A dashboard-like project where Samsung partners platform their applications used inside VXT Canvas. Built complex forms, dynamic sales data visualizations, and robust GraphQL integrations. Used by major global clients.",
    tags: ["React", "Next.js", "GraphQL", "AWS Bedrock", "MUI", "Jest"],
    link: "https://developer.samsungvx.com/",
    media: "/media/samsung_hd.webp"
  },
  {
    title: "Banino Residence",
    type: "Freelance Project",
    description: "A high-end website designed and developed from the ground up for a Residence Development firm. Focused on visual excellence, performance, and seamless user experience.",
    tags: ["Frontend", "Web Development", "UI/UX", "Performance"],
    link: "https://baninoresidence.pl/",
    media: "/media/banino.webp"
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
    <section id="projects" className="py-20 sm:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto" ref={sectionRef}>
      <h2 className="proj-title text-4xl sm:text-5xl font-bold mb-16 tracking-tight">Selected Work.</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <AnimatedCard key={idx} className="proj-card flex flex-col h-full group !p-0">
            {/* Cinematic Media Container */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden border-b border-white/5 bg-black">
              {/* Overlay that fades out on hover */}
              <div className="absolute inset-0 bg-background/60 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
              
              <img 
                src={proj.media}
                alt={`${proj.title} showcase`}
                className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              />
              
              <div className="absolute top-6 left-6 z-20 p-3 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 group-hover:bg-primary/50 transition-colors duration-500">
                <Code2 className="text-white group-hover:text-white transition-colors" size={24} />
              </div>
              
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noreferrer" className="absolute top-6 right-6 z-20 text-white hover:text-white transition-colors p-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full hover:-translate-y-1 transform duration-300 hover:bg-primary/50">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>

            <div className="p-8 sm:p-12 flex flex-col flex-grow">
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
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
