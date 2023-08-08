"use client";

import styles from "./scoreboard.module.css";
import { useGameStore } from "@/stores/point-counter/gameStore";
import type { GameStore } from "@/types/point-counter/gameStore";

export default function Scoreboard() {
  const homePoints = useGameStore((state: GameStore) => state.homePoints);
  const homeSets = useGameStore((state: GameStore) => state.homeSets);
  const awayPoints = useGameStore((state: GameStore) => state.awayPoints);
  const awaySets = useGameStore((state: GameStore) => state.awaySets);

  return (
    <div className={styles.scoreboard}>
      <div
        className={`${styles.scoreboard_point} ${styles.player_one} ${styles.is_xl}`}
      >
        <span>{homePoints}</span>
      </div>
      <div className={`${styles.scoreboard_point} ${styles.player_one}`}>
        <span>{homeSets}</span>
      </div>
      <div className={`${styles.scoreboard_point} ${styles.player_two}`}>
        <span>{awaySets}</span>
      </div>
      <div
        className={`${styles.scoreboard_point} ${styles.player_two} ${styles.is_xl}`}
      >
        <span>{awayPoints}</span>
      </div>
    </div>
  );
}
