import React from 'react';
import { Gamepad2, ArrowDown, Sparkles, Terminal } from 'lucide-react';
import { Game } from '../types';

interface HeroProps {
  games: Game[];
}

export const Hero: React.FC<HeroProps> = ({ games }) => {
  const availableCount = games.filter((g) => g.status === 'available').length;
  const comingSoonCount = games.filter((g) => g.status === 'coming_soon').length;

  const scrollToLibrary = () => {
    const el = document.getElementById('my-games');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-slate-800/60">
      {/* Decorative Arcade Backing Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-2xl" />
        
        {/* Subtle retro matrix dot grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Arcade Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>ARYAMAN'S INDIE LAB & ARCADE</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase mb-6 drop-shadow-sm font-sans">
          ARYAMAN'S GAME ARCADE
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-slate-300 font-medium max-w-2xl mx-auto mb-8 tracking-wide">
          Play my collection of games.
        </p>

        {/* Dynamic Statistic */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-5 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 text-sm sm:text-base font-mono mb-10 shadow-inner">
          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            {availableCount} {availableCount === 1 ? 'Game' : 'Games'} Available
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-amber-400/90">
            {comingSoonCount > 0 ? `${comingSoonCount} More Coming Soon` : 'More Coming Soon'}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="explore-games-btn"
            onClick={scrollToLibrary}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Gamepad2 className="w-5 h-5 fill-slate-950" />
            <span>EXPLORE GAMES</span>
            <ArrowDown className="w-4 h-4 animate-bounce ml-1" />
          </button>

          <a
            href="#about-arcade"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-200"
          >
            <Terminal className="w-4 h-4 text-slate-400" />
            <span>About The Arcade</span>
          </a>
        </div>
      </div>
    </section>
  );
};
