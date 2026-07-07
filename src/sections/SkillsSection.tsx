import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wrench, Database, Layout } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend & Core",
    icon: <Layout className="text-primary mb-4" size={32} />,
    skills: ["React", "TypeScript/JavaScript", "Next.js", "HTML/CSS", "Angular", "MUI"]
  },
  {
    title: "Backend & Data",
    icon: <Database className="text-purple-400 mb-4" size={32} />,
    skills: ["Node.js", "GraphQL", "Apollo", "PostgreSQL", "MongoDB", "Express"]
  },
  {
    title: "Tools & Architecture",
    icon: <Wrench className="text-indigo-400 mb-4" size={32} />,
    skills: ["AWS Bedrock", "Jest", "Cypress", "Jenkins", "Git", "Agentic Coding"]
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
          trigger: group,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: i * 0.15
      });
    });

  }, { scope: sectionRef });

  return (
    <section className="py-20 sm:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-t border-white/5" ref={sectionRef}>
      <div className="flex flex-col mb-16">
        <h2 className="skills-title text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Technical <span className="text-white/40">Arsenal.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <AnimatedCard key={idx} className="skill-group p-8 sm:p-10 !rounded-[2rem]">
            {category.icon}
            <h3 className="text-2xl font-semibold mb-6 text-white/90">{category.title}</h3>
            <ul className="space-y-4">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="text-white/60 font-medium flex items-center gap-3 group cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                  <span className="group-hover:text-white transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
