import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, Gamepad2 } from 'lucide-react';
import { Game, GameGenre } from '../types';
import { GameCard } from './GameCard';

interface GameLibraryProps {
  games: Game[];
}

const GENRE_FILTERS: Array<'ALL' | GameGenre> = [
  'ALL',
  'Action',
  'Adventure',
  'Puzzle',
  'Arcade',
  'Strategy',
  'Other',
];

export const GameLibrary: React.FC<GameLibraryProps> = ({ games }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter games based on search and genre
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesGenre =
        selectedGenre === 'ALL' ||
        game.genre.toLowerCase() === selectedGenre.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.platform.toLowerCase().includes(query) ||
        game.genre.toLowerCase().includes(query);

      return matchesGenre && matchesSearch;
    });
  }, [games, selectedGenre, searchQuery]);

  return (
    <section id="my-games" className="py-16 scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium uppercase tracking-widest mb-3">
              <Gamepad2 className="w-3.5 h-3.5" />
              Central Game Vault
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              MY GAMES
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Browse the complete catalog of interactive browser experiences, arcade experiments, and upcoming releases.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="game-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search games, genres, platforms..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button
                id="clear-search-btn"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-mono uppercase mr-2 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Genre:</span>
          </div>

          {GENRE_FILTERS.map((genre) => {
            const isActive = selectedGenre.toUpperCase() === genre.toUpperCase();
            // Count matching for this genre
            const count =
              genre === 'ALL'
                ? games.length
                : games.filter((g) => g.genre.toLowerCase() === genre.toLowerCase()).length;

            return (
              <button
                key={genre}
                id={`filter-${genre.toLowerCase()}`}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
                }`}
              >
                <span>{genre.toUpperCase()}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter and Status */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
          <div>
            Showing <span className="text-white font-semibold">{filteredGames.length}</span> of{' '}
            <span className="text-white font-semibold">{games.length}</span> games
          </div>

          {(selectedGenre !== 'ALL' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedGenre('ALL');
                setSearchQuery('');
              }}
              className="text-cyan-400 hover:text-cyan-300 underline font-medium cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/50 border border-slate-800/80">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No games found</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
              No games matched your current search "{searchQuery}" in genre "{selectedGenre}".
            </p>
            <button
              onClick={() => {
                setSelectedGenre('ALL');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-sm font-semibold border border-slate-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
