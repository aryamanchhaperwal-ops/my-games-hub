export type GameGenre = 
  | 'Action'
  | 'Adventure'
  | 'Puzzle'
  | 'Arcade'
  | 'Strategy'
  | 'Other';

export type GameStatus = 'available' | 'coming_soon';

export interface Game {
  id: string;
  title: string;
  description: string;
  genre: GameGenre;
  platform: string;
  url: string;
  status: GameStatus;
  thumbnail: string;
  featured: boolean;
  tags?: string[];
  slotNumber?: number;
}
