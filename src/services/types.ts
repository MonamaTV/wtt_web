export interface Score {
  words: number;
  duration: number;
  characters: number;
  completed: boolean;
  errors: number;
}

export interface Competition {
  name: string;
  rounds: number;
  competitors: string[];
}

export const options = [
  {
    value: "1",
    name: "Date",
  },
  {
    value: "2",
    name: "Accuracy",
  },
  {
    value: "3",
    name: "WPM",
  },
];

export const games = [
  {
    value: "10",
    name: "Last 10 games",
  },
  {
    value: "20",
    name: "Last 20 games",
  },
  {
    value: "30",
    name: "Last 30 games",
  },
];
