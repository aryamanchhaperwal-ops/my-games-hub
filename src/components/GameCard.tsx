import React from 'react';
import { ExternalLink, Play, Clock, Sparkles } from 'lucide-react';
import { Game } from '../types';
import { GameThumbnail } from './GameThumbnail';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const isAvailable = game.status === 'available';

  // Genre badge color classes
  const getGenreColor = (genre: string) => {
    switch (genre) {
      case 'Action':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'Adventure':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Puzzle':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Arcade':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'Strategy':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-slate-500/10 text-slate-300 border-slate-500/30';
    }
  };

  // Platform styling
  const getPlatformStyle = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'replit':
        return 'bg-orange-500/10 text-orange-300 border-orange-500/30';
      case 'parallaxpro':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'instaplay':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'gamable':
        return 'bg-rose-500/10 text-rose-300 border-rose-500/30';
      default:
        return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <div
      id={`game-card-${game.id}`}
      className={`group relative flex flex-col rounded-2xl bg-slate-900/90 border transition-all duration-300 hover:-translate-y-1.5 ${
        isAvailable 
          ? 'border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.25)]' 
          : 'border-slate-800/60 opacity-85 hover:opacity-100 hover:border-slate-700'
      }`}
    >
      {/* Featured Badge */}
      {game.featured && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 font-bold text-xs shadow-lg backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
          <span>FEATURED</span>
        </div>
      )}

      {/* Thumbnail Area */}
      <div className="relative">
        <GameThumbnail game={game} />
        
        {/* Status Chip Overlay */}
        <div className="absolute top-3 right-3 z-20">
          {isAvailable ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              PLAYABLE
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800/90 border border-slate-700 text-slate-400 backdrop-blur-md">
              <Clock className="w-3 h-3 text-amber-400/80" />
              SOON
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Badges: Genre & Platform */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase rounded-md border ${getGenreColor(game.genre)}`}>
            {game.genre}
          </span>
          <span className={`px-2.5 py-0.5 text-[11px] font-medium tracking-wide rounded-md border ${getPlatformStyle(game.platform)}`}>
            {game.platform}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-2">
          {game.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-5 flex-1">
          {game.description}
        </p>

        {/* Tags if available */}
        {game.tags && game.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {game.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[10px] text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2 border-t border-slate-800/80 mt-auto">
          {isAvailable ? (
            <a
              id={`play-button-${game.id}`}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 active:scale-[0.98]"
            >
              <Play className="w-4 h-4 fill-slate-950 transition-transform group-hover/btn:scale-110" />
              <span>PLAY NOW</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-0.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          ) : (
            <button
              id={`coming-soon-button-${game.id}`}
              disabled
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-400 bg-slate-800/60 border border-slate-700/60 cursor-not-allowed select-none"
            >
              <Clock className="w-4 h-4 text-slate-400" />
              <span>COMING SOON</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
