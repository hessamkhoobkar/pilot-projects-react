"use client";

import styles from "./controlBoard.module.css";
import { useGameStore } from "@/stores/point-counter/gameStore";

export default function ControlBoard() {
  const updatePoints = useGameStore((state) => state.updatePoints);
  const resetPoints = useGameStore((state) => state.resetPoints);
  const resetGame = useGameStore((state) => state.resetGame);

  const handleIncrement = (side: "home" | "away") => {
    updatePoints(side, "increment");
  };

  const handleDecrement = (side: "home" | "away") => {
    updatePoints(side, "decrement");
  };

  return (
    <div className={styles.control_board}>
      <button
        type="button"
        className={`${styles.is_sm} ${styles.home}`}
        onClick={() => handleDecrement("home")}
      >
        1-
      </button>
      <button
        type="button"
        className={`${styles.home} ${styles.is_lg}`}
        onClick={() => handleIncrement("home")}
      >
        1+
      </button>
      <div className={`${styles.actions}`}>
        <button type="button" className={``} onClick={() => resetPoints()}>
          reset Set
        </button>
        <button type="button" className={``} onClick={() => resetGame()}>
          Start new game
        </button>
      </div>
      <button
        type="button"
        className={`${styles.away} ${styles.is_lg}`}
        onClick={() => handleIncrement("away")}
      >
        1+
      </button>
      <button
        type="button"
        className={`${styles.is_sm} ${styles.away}`}
        onClick={() => handleDecrement("away")}
      >
        1-
      </button>
    </div>
  );
}
