import React from 'react';
import { Gamepad2, Sparkles, Compass } from 'lucide-react';
import { Game } from '../types';

interface NavbarProps {
  games: Game[];
}

export const Navbar: React.FC<NavbarProps> = ({ games }) => {
  const availableCount = games.filter((g) => g.status === 'available').length;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:border-cyan-400 group-hover:scale-105 transition-all">
            <Gamepad2 className="w-5 h-5 fill-cyan-400/20" />
          </div>
          <div>
            <span className="font-black text-sm sm:text-base tracking-wider text-white uppercase group-hover:text-cyan-300 transition-colors block">
              ARYAMAN'S GAME ARCADE
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest block -mt-0.5">
              CENTRAL GAME VAULT
            </span>
          </div>
        </a>

        {/* Navigation Links & Quick Action */}
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold tracking-wide">
            <a
              href="#featured-games"
              className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Featured</span>
            </a>
            <a
              href="#my-games"
              className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>My Games</span>
            </a>
            <a
              href="#about-arcade"
              className="text-slate-400 hover:text-cyan-300 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Available Counter badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{availableCount} Playable</span>
          </div>

          {/* Quick Play CTA */}
          <a
            href="#my-games"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all transform hover:scale-105 active:scale-95"
          >
            PLAY
          </a>
        </div>
      </div>
    </header>
  );
};
