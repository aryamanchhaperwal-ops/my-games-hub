import React from 'react';
import { Sparkles, Play, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { Game } from '../types';
import { GameThumbnail } from './GameThumbnail';

interface FeaturedGamesProps {
  games: Game[];
}

export const FeaturedGames: React.FC<FeaturedGamesProps> = ({ games }) => {
  const featuredGames = games.filter((g) => g.featured);

  if (featuredGames.length === 0) {
    return null;
  }

  return (
    <section id="featured-games" className="py-12 border-b border-slate-800/80 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Sparkles className="w-5 h-5 fill-amber-400/20" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
                FEATURED GAMES
              </h2>
              <p className="text-sm text-slate-400">
                Top handpicked arcade picks and community favorites
              </p>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/50 px-3 py-1.5 rounded-lg border border-cyan-500/30">
            <Zap className="w-3.5 h-3.5" />
            <span>{featuredGames.length} FEATURED TITLES</span>
          </div>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredGames.map((game) => {
            const isAvailable = game.status === 'available';

            return (
              <div
                key={game.id}
                id={`featured-game-${game.id}`}
                className="group relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-cyan-500/40 p-6 transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] flex flex-col justify-between"
              >
                {/* Thumbnail Display */}
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-slate-800">
                  <GameThumbnail game={game} className="aspect-[16/9]" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black shadow-md">
                    <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                    FEATURED SPOTLIGHT
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                    {game.platform}
                  </div>
                </div>

                {/* Info Block */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {game.genre}
                    </span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified External Host
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {game.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {game.description}
                  </p>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Runs on <span className="text-slate-200 font-semibold">{game.platform}</span>
                  </div>

                  {isAvailable ? (
                    <a
                      id={`featured-play-${game.id}`}
                      href={game.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:scale-105 active:scale-95"
                    >
                      <Play className="w-4 h-4 fill-slate-950" />
                      <span>PLAY NOW</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  ) : (
                    <span className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 bg-slate-800 border border-slate-700">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
