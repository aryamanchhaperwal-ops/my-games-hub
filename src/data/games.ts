import { Game } from '../types';

/**
 * ============================================================================
 * ARYAMAN'S GAME ARCADE - CENTRAL GAME DATA REPOSITORY
 * ============================================================================
 * 
 * HOW TO ADD OR EDIT GAMES:
 * ----------------------------------------------------------------------------
 * To add a new game, simply add a new object to the GAMES array below.
 * You only need to set:
 *   - id: Unique identifier (e.g. "game-11" or "my-new-game")
 *   - title: Name of your game (e.g. "Cyber Racer")
 *   - description: Short synopsis or objective of the game
 *   - genre: One of 'Action' | 'Adventure' | 'Puzzle' | 'Arcade' | 'Strategy' | 'Other'
 *   - platform: Where the game is hosted (e.g. "Replit", "Gamable", "Instaplay", "itch.io", etc.)
 *   - url: Full external URL where users can play (must start with https://)
 *   - status: 'available' to show PLAY NOW, or 'coming_soon' to show COMING SOON
 *   - thumbnail: Either an image URL (e.g. "https://...", "/images/mygame.jpg")
 *                or a built-in artwork key:
 *                'preset:robot-escape' | 'preset:star-catcher' | 'preset:game-1' | 'preset:game-2' | 'preset:coming-soon'
 *   - featured: true to display in the FEATURED section, or false
 * 
 * The website will AUTOMATICALLY update all counters, library grids,
 * genre filters, search results, and featured showcases without any code changes!
 * ============================================================================
 */

export const GAMES: Game[] = [
  // ==========================================================================
  // PUBLISHED & AVAILABLE GAMES
  // ==========================================================================
  {
    id: 'game-1',
    title: 'Game 1',
    description: 'An engaging fast-paced mobile arcade game experience built and published on Gamable.',
    genre: 'Arcade',
    platform: 'Gamable',
    url: 'https://www.gamable.dev/play-mobile/ac82b2cf-df24-4a57-92c4-28495b489bd2',
    status: 'available',
    thumbnail: 'preset:game-1',
    featured: false,
    tags: ['Mobile-Ready', 'Quick Play', 'Arcade Action'],
  },
  {
    id: 'game-2',
    title: 'Game 2',
    description: 'An interactive browser challenge featuring clever mechanics and instant gameplay on Instaplay.',
    genre: 'Puzzle',
    platform: 'Instaplay',
    url: 'https://www.instaplay.ai/play/61ca09f1?ref=stellarhawk376',
    status: 'available',
    thumbnail: 'preset:game-2',
    featured: false,
    tags: ['Browser Play', 'Mind Challenge', 'Instant Run'],
  },
  {
    id: 'game-3',
    title: 'Star Catcher',
    description: 'A 30-second celestial grab! Navigate through cosmic starfields, collect luminous stars, and beat the timer.',
    genre: 'Arcade',
    platform: 'ParallaxPro',
    url: 'https://parallaxpro.ai/games/aryamanchhaperwal/star-catcher-30-second-grab',
    status: 'available',
    thumbnail: 'preset:star-catcher',
    featured: true,
    tags: ['30-Sec Timer', 'Cosmic Theme', 'High Score'],
  },
  {
    id: 'game-4',
    title: 'Robot Escape',
    description: 'Break free from a high-tech subterranean facility, avoid deadly laser barriers, and guide the automaton to freedom.',
    genre: 'Adventure',
    platform: 'Replit',
    url: 'https://robo-escape--aryamanchhaperw.replit.app',
    status: 'available',
    thumbnail: 'preset:robot-escape',
    featured: true,
    tags: ['Escape Room', 'Sci-Fi Action', 'Obstacles'],
  },

  // ==========================================================================
  // COMING SOON SLOTS (GAMES 5 TO 10)
  // Edit these slots or add more below when publishing new games!
  // ==========================================================================
  {
    id: 'game-5',
    title: 'Game 5',
    description: 'Under active development in Aryaman\'s lab. Stay tuned for new mechanics and platform release.',
    genre: 'Action',
    platform: 'TBA',
    url: '#',
    status: 'coming_soon',
    thumbnail: 'preset:coming-soon',
    featured: false,
    slotNumber: 5,
    tags: ['In Development', 'Coming Soon'],
  },
  {
    id: 'game-6',
    title: 'Game 6',
    description: 'A conceptual prototype currently in production. Experimental design coming soon to browser.',
    genre: 'Puzzle',
    platform: 'TBA',
    url: '#',
    status: 'coming_soon',
    thumbnail: 'preset:coming-soon',
    featured: false,
    slotNumber: 6,
    tags: ['In Development', 'Coming Soon'],
  },
  {
    id: 'game-7',
    title: 'Game 7',
    description: 'An upcoming browser adventure exploring new interactive gameplay concepts.',
    genre: 'Adventure',
    platform: 'TBA',
    url: '#',
    status: 'coming_soon',
    thumbnail: 'preset:coming-soon',
    featured: false,
    slotNumber: 7,
    tags: ['In Development', 'Coming Soon'],
  },
  {
    id: 'game-8',
    title: 'Game 8',
    description: 'Tactical strategy mechanics currently being tuned for smooth web play.',
    genre: 'Strategy',
    platform: 'TBA',
    url: '#',
    status: 'coming_soon',
    thumbnail: 'preset:coming-soon',
    featured: false,
    slotNumber: 8,
    tags: ['In Development', 'Coming Soon'],
  },
  {
    id: 'game-9',
    title: 'Game 9',
    description: 'High-energy retro arcade project in early testing phase.',
    genre: 'Arcade',
    platform: 'TBA',
    url: '#',
    status: 'coming_soon',
    thumbnail: 'preset:coming-soon',
    featured: false,
    slotNumber: 9,
    tags: ['In Development', 'Coming Soon'],
  },
  {
    id: 'game-10',
    title: 'Game 10',
    description: 'Special milestone project in the arcade pipeline. Check back soon for launch announcement.',
    genre: 'Other',
    platform: 'TBA',
    url: '#',
    status: 'coming_soon',
    thumbnail: 'preset:coming-soon',
    slotNumber: 10,
    featured: false,
    tags: ['In Development', 'Coming Soon'],
  },
];
