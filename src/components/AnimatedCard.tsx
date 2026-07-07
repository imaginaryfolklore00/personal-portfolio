import React, { useRef, useEffect } from 'react';
import { cn } from '../utils/cn';
import gsap from 'gsap';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedCard({
  children,
  className,
  ...props
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !glareRef.current) return;

    const xTo = gsap.quickTo(cardRef.current, "rotationX", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(cardRef.current, "rotationY", { duration: 0.6, ease: "power3.out" });

    const glareXTo = gsap.quickTo(glareRef.current, "x", { duration: 0.6, ease: "power3.out" });
    const glareYTo = gsap.quickTo(glareRef.current, "y", { duration: 0.6, ease: "power3.out" });
    const glareOpacityTo = gsap.quickTo(glareRef.current, "opacity", { duration: 0.6, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = cardRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotX = ((y - centerY) / centerY) * -4;
      const rotY = ((x - centerX) / centerX) * 4;

      xTo(rotX);
      yTo(rotY);

      const percentX = x / rect.width;
      const percentY = y / rect.height;

      glareXTo(-percentX * rect.width);
      glareYTo(-percentY * rect.height);
      glareOpacityTo(1);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      glareOpacityTo(0);
    };

    const el = cardRef.current;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div style={{ perspective: "1200px" }} className="h-full">
      <div
        ref={cardRef}
        className={cn(
          "relative overflow-hidden rounded-[2.5rem] bg-surface border border-white/5 p-8 sm:p-12 transition-colors duration-500",
          "hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-sm group",
          className
        )}
        style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
        {...props}
      >
        {/* Glassy reflection/glare effect */}
        <div
          ref={glareRef}
          className="absolute top-0 left-0 w-[200%] h-[200%] pointer-events-none z-20 opacity-0 transform-gpu"
          style={{
            background: "linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.01) 35%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.01) 65%, transparent 80%)",
            mixBlendMode: "overlay"
          }}
        />


        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none transform-gpu -translate-z-10" />

        {/* Push contents outward in 3D space */}
        <div className="relative z-10 h-full flex flex-col transform-gpu" style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
