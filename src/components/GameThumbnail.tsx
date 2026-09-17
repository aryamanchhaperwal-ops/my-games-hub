import React from 'react';
import { Bot, Sparkles, Gamepad2, Puzzle, Lock, Layers } from 'lucide-react';
import { Game } from '../types';

interface GameThumbnailProps {
  game: Game;
  className?: string;
}

export const GameThumbnail: React.FC<GameThumbnailProps> = ({ game, className = '' }) => {
  const isPreset = game.thumbnail.startsWith('preset:');
  const presetKey = isPreset ? game.thumbnail.replace('preset:', '') : '';

  // If thumbnail is a direct image URL (http/https/data or local path)
  if (!isPreset && game.thumbnail) {
    return (
      <div className={`relative w-full aspect-video overflow-hidden rounded-t-xl bg-slate-900 ${className}`}>
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback if URL fails
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  // Artwork for Robot Escape
  if (presetKey === 'robot-escape') {
    return (
      <div className={`relative w-full aspect-video overflow-hidden rounded-t-xl bg-gradient-to-b from-slate-900 via-cyan-950/40 to-slate-950 flex items-center justify-center select-none ${className}`}>
        {/* Tech Grid Floor */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            transform: 'perspective(200px) rotateX(40deg) translateY(20px)'
          }}
        />
        
        {/* Laser Security Beams */}
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-red-500/60 shadow-[0_0_12px_#ef4444]" />
        <div className="absolute top-10 left-0 right-0 h-0.5 bg-red-500/40 shadow-[0_0_8px_#ef4444]" />

        {/* Ambient Glow */}
        <div className="absolute w-36 h-36 rounded-full bg-cyan-500/20 blur-2xl" />

        {/* Robot Vector Centerpiece */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative p-4 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:border-cyan-400">
            <Bot className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          </div>
          <span className="mt-2 text-[11px] font-mono tracking-widest text-cyan-300 font-semibold uppercase bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
            CYBER ESCAPE • REPLIT
          </span>
        </div>

        {/* Hazard Stripes Footer */}
        <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 opacity-70" />
      </div>
    );
  }

  // Artwork for Star Catcher
  if (presetKey === 'star-catcher') {
    return (
      <div className={`relative w-full aspect-video overflow-hidden rounded-t-xl bg-gradient-to-b from-indigo-950 via-purple-950/60 to-slate-950 flex items-center justify-center select-none ${className}`}>
        {/* Starfield Particles */}
        <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15%" cy="20%" r="1.5" fill="#facc15" opacity="0.8" />
          <circle cx="85%" cy="30%" r="1" fill="#fff" opacity="0.7" />
          <circle cx="35%" cy="75%" r="2" fill="#38bdf8" opacity="0.9" />
          <circle cx="70%" cy="80%" r="1.5" fill="#facc15" opacity="0.8" />
          <circle cx="50%" cy="15%" r="1" fill="#c084fc" opacity="0.6" />
          <circle cx="90%" cy="65%" r="2" fill="#facc15" opacity="0.9" />
          <circle cx="20%" cy="50%" r="1" fill="#fff" opacity="0.5" />
          {/* Orbital Arc */}
          <path d="M 20 120 Q 160 20 300 120" fill="none" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        {/* Cosmic Nebula Glow */}
        <div className="absolute w-44 h-44 rounded-full bg-purple-500/20 blur-2xl" />
        <div className="absolute w-24 h-24 rounded-full bg-amber-400/20 blur-xl" />

        {/* Centerpiece Star */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative p-4 rounded-2xl bg-purple-950/80 border border-amber-400/40 shadow-[0_0_24px_rgba(250,204,21,0.25)] transition-transform duration-500 group-hover:scale-110 group-hover:border-amber-400">
            <Sparkles className="w-12 h-12 text-amber-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] animate-pulse" />
          </div>
          <span className="mt-2 text-[11px] font-mono tracking-widest text-amber-300 font-semibold uppercase bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-amber-400/30">
            30-SEC CELESTIAL DASH
          </span>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-amber-400 to-indigo-500" />
      </div>
    );
  }

  // Artwork for Game 1 (Gamable)
  if (presetKey === 'game-1') {
    return (
      <div className={`relative w-full aspect-video overflow-hidden rounded-t-xl bg-gradient-to-b from-rose-950/70 via-slate-900 to-slate-950 flex items-center justify-center select-none ${className}`}>
        {/* Retro synthwave lines */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #f43f5e 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />

        <div className="absolute w-40 h-40 rounded-full bg-rose-500/20 blur-2xl" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="relative p-4 rounded-2xl bg-rose-950/80 border border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:border-rose-400">
            <Gamepad2 className="w-12 h-12 text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
          </div>
          <span className="mt-2 text-[11px] font-mono tracking-widest text-rose-300 font-semibold uppercase bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-rose-500/30">
            MOBILE ARCADE • GAMABLE
          </span>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 via-pink-400 to-rose-600" />
      </div>
    );
  }

  // Artwork for Game 2 (Instaplay)
  if (presetKey === 'game-2') {
    return (
      <div className={`relative w-full aspect-video overflow-hidden rounded-t-xl bg-gradient-to-b from-emerald-950/70 via-slate-900 to-slate-950 flex items-center justify-center select-none ${className}`}>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(45deg, #10b981 1px, transparent 1px), linear-gradient(-45deg, #10b981 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="absolute w-40 h-40 rounded-full bg-emerald-500/20 blur-2xl" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="relative p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:border-emerald-400">
            <Puzzle className="w-12 h-12 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
          <span className="mt-2 text-[11px] font-mono tracking-widest text-emerald-300 font-semibold uppercase bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
            PUZZLE LOGIC • INSTAPLAY
          </span>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />
      </div>
    );
  }

  // Artwork for Coming Soon slots (Games 5-10 or future)
  return (
    <div className={`relative w-full aspect-video overflow-hidden rounded-t-xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 flex items-center justify-center select-none border-b border-slate-800 ${className}`}>
      {/* Blueprint grid lines */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 shadow-inner group-hover:border-slate-600 transition-colors">
          <Lock className="w-8 h-8 text-slate-400" />
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 uppercase tracking-widest bg-slate-950/70 px-3 py-1 rounded-full border border-slate-800">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 animate-pulse" />
          {game.slotNumber ? `SLOT #${game.slotNumber.toString().padStart(2, '0')}` : 'RESERVED SLOT'}
        </div>
      </div>
    </div>
  );
};
