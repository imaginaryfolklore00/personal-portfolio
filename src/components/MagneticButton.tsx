import React, { useRef, useState } from 'react';
import { cn } from '../utils/cn';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline';
}

export default function MagneticButton({
  children,
  className,
  variant = 'primary',
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (buttonRef.current && textRef.current) {
      gsap.to([buttonRef.current, textRef.current], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !textRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;

    gsap.to(buttonRef.current, {
      x,
      y,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.to(textRef.current, {
      x: x * 0.5,
      y: y * 0.5,
      duration: 1,
      ease: 'power3.out',
    });
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-medium transition-transform duration-300",
        "hover:scale-[1.03] active:scale-[0.98]",
        "border border-white/10",
        {
          "bg-white text-black": variant === 'primary',
          "bg-transparent text-white": variant === 'outline',
        },
        className
      )}
      style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      {...props}
    >
      <span
        className={cn(
          "absolute inset-0 z-0 h-full w-full translate-y-full rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
          isHovered ? "translate-y-0" : "translate-y-full",
          {
            "bg-neutral-200": variant === 'primary',
            "bg-white": variant === 'outline',
          }
        )}
      />
      <span
        ref={textRef}
        className={cn("relative z-10", {
          "text-black": variant === 'primary',
          "group-hover:text-black": variant === 'outline',
        }, isHovered && variant === 'outline' ? 'text-black' : '')}
      >
        {children}
      </span>
    </button>
  );
}
