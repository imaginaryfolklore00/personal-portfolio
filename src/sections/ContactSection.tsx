import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../components/MagneticButton';
import { Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.contact-elem', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[60vh]" ref={sectionRef}>
      <h2 className="contact-elem text-5xl sm:text-7xl font-bold tracking-tight mb-8">
        Let's build something <br/><span className="text-white/40">exceptional.</span>
      </h2>
      <p className="contact-elem text-xl text-white/60 mb-12 max-w-2xl font-light">
        Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <div className="contact-elem">
        <MagneticButton onClick={() => window.location.href = "mailto:hello@nazeem.dev"} className="px-10 py-5 text-lg">
          <span className="flex items-center gap-3">
            <Mail size={20} />
            Say Hello
          </span>
        </MagneticButton>
      </div>
      
      <div className="contact-elem mt-32 text-white/30 text-sm font-medium tracking-widest uppercase">
        © {new Date().getFullYear()} Nazeem. All rights reserved.
      </div>
    </section>
  );
}
