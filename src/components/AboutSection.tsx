import React from 'react';
import { Info, Globe, Cpu, Gamepad2, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-arcade" className="py-16 border-t border-slate-800/80 bg-slate-950/60 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-4">
          <Info className="w-3.5 h-3.5" />
          <span>INDIE DEVELOPER SHOWCASE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-6">
          ABOUT THE ARCADE
        </h2>

        {/* The Exact User Requested Text */}
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
          This is my personal collection of games and experiments. Each game is an individual project hosted on its own platform. Choose a game and start playing.
        </p>

        {/* Feature pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1">Instant Play</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              No downloads, installs, or account registrations needed. Jump straight into the action directly in your browser.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1">Multi-Platform</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Projects hosted across Replit, ParallaxPro, Gamable, and Instaplay, powered by diverse web game engines.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1">Active Pipeline</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Continuously iterating on mechanics, level design, and new interactive prototypes for future releases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
