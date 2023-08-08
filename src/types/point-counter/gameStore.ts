export interface GameStore {
  homePoints: number;
  awayPoints: number;
  homeSets: number;
  awaySets: number;
  updatePoints: (
    side: "home" | "away",
    type: "increment" | "decrement"
  ) => void;
  resetPoints: () => void;
  resetGame: () => void;
}
