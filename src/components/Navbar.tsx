import React from 'react';

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden sm:block">
      <div className="flex items-center gap-1 sm:gap-4 px-4 sm:px-6 py-3 bg-surface/50 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        <button 
          onClick={() => scrollTo('top')}
          className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => scrollTo('experience')}
          className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          Experience
        </button>
        <button 
          onClick={() => scrollTo('projects')}
          className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          Work
        </button>
      </div>
    </nav>
  );
}
