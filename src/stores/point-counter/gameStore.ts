import { create } from "zustand";
import type { GameStore } from "@/types/point-counter/gameStore";

export const useGameStore = create<GameStore>((set) => ({
  homePoints: 0,
  awayPoints: 0,
  homeSets: 0,
  awaySets: 0,

  updatePoints: (side: "home" | "away", type: "increment" | "decrement") => {
    const updateValue = type === "increment" ? 1 : -1;

    if (side === "home") {
      set((state: GameStore) => ({
        homePoints: Math.max(state.homePoints + updateValue, 0),
      }));
    } else {
      set((state: GameStore) => ({
        awayPoints: Math.max(state.awayPoints + updateValue, 0),
      }));
    }

    const spaceBetweenPoints = Math.abs(
      useGameStore.getState().homePoints - useGameStore.getState().awayPoints
    );

    if (spaceBetweenPoints >= 2 && useGameStore.getState().homePoints >= 11) {
      set((state: GameStore) => ({
        homeSets: state.homeSets + 1,
      }));

      useGameStore.getState().resetPoints();
    }

    if (spaceBetweenPoints >= 2 && useGameStore.getState().awayPoints >= 11) {
      set((state: GameStore) => ({
        awaySets: state.awaySets + 1,
      }));

      useGameStore.getState().resetPoints();
    }
  },

  resetPoints: () => {
    set(() => ({
      homePoints: 0,
      awayPoints: 0,
    }));
  },

  resetGame: () => {
    set(() => ({
      homePoints: 0,
      awayPoints: 0,
      homeSets: 0,
      awaySets: 0,
    }));
  },
}));
