export interface CompetitionData {
  user: User;
  score: Score;
  competition_id: string;
}

export interface User {
  email: string;
  first_name: string;
  password: string;
  id: string;
  last_name: string;
  active: boolean;
  verified: boolean;
}

export interface Score {
  user_id: string;
  wpm: number;
  words: number;
  duration: number;
  completed: boolean;
  id: number;
  played_at: string;
  accuracy: number;
  characters: number;
}

export interface Competition {
  creator_id: string;
  name: string;
  expires_in: string;
  id: string;
  created_at: string;
  user: User;
}

export interface Leaderboard {
  user: User;
  accuracy: number;
  wpm: number;
  score: Score;
}

export interface Score {
  user_id: string;
  wpm: number;
  words: number;
  duration: number;
  completed: boolean;
  id: number;
  played_at: string;
  accuracy: number;
  characters: number;
  user: User;
}


export interface Competitors {
  first_name: string | null;
  last_name: string | null;
  bio: string | null;
  email: string | null;
}