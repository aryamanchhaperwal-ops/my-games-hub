import React from 'react';
import { GAMES } from './data/games';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedGames } from './components/FeaturedGames';
import { GameLibrary } from './components/GameLibrary';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar games={GAMES} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero games={GAMES} />

        {/* Featured Games Section */}
        <FeaturedGames games={GAMES} />

        {/* Central Game Library / MY GAMES */}
        <GameLibrary games={GAMES} />

        {/* About Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
