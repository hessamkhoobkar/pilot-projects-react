import styles from "./styles.module.css";
import ControlBoard from "@/components/point-counter/ControlBoard";
import Scoreboard from "@/components/point-counter/Scoreboard";

export default function PointCounter() {
  return (
    <div className={styles.main_wrapper}>
      <Scoreboard />
      <ControlBoard />
    </div>
  );
}
