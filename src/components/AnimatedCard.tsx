import React from 'react';
import { cn } from '../utils/cn';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedCard({
  children,
  className,
  ...props
}: AnimatedCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] bg-surface border border-white/5 p-8 sm:p-12 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
        "hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl hover:shadow-white/5",
        "backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {/* Subtle inner glow/texture element could go here */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
