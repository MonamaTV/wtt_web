export interface Score {
  words: number;
  duration: number;
  characters: number;
  completed: boolean;
  errors: number;
}


export interface Competition {
  name: string;
  competitors: string[]
}