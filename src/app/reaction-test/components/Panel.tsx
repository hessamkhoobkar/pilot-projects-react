"use client";

import { useRef, useState, useEffect } from "react";
import HistoryCard from "./HistoryCard";

type GameState =
  | "IDLE"
  | "WAITING"
  | "TOO_SOON"
  | "CLICK"
  | "RESULT"
  | "COMPLETED";

export default function GamePanel() {
  const [gameState, setGameState] = useState<GameState>("IDLE");
  const [reactionSpeed, setReactionSpeed] = useState<number>(0);
  const [averageReaction, setAverageReaction] = useState<number[]>([]);
  const [initTimeStamp, setInitTimeStamp] = useState<number>(0);
  const [attemptLeft, setAttemptLeft] = useState<number>(5);
  const [personalBest, setPersonalBest] = useState<number>(0);
  const [personalAverage, setPersonalAverage] = useState<number>(0);
  const timeOutIdRef = useRef<any | undefined>();

  useEffect(() => {
    const personalRecord = localStorage.getItem("personalRecord");
    if (personalRecord) {
      const parsedRecord = JSON.parse(personalRecord);
      setPersonalBest(parsedRecord.best);
      setPersonalAverage(parsedRecord.average);
    }

    return () => {
      if (timeOutIdRef.current) {
        clearTimeout(timeOutIdRef.current);
      }
    };
  }, []);

  function initiateClickTimeout() {
    setGameState("WAITING");
    const timeOutId = setTimeout(() => {
      setGameState("CLICK");
      setInitTimeStamp(Date.now());
    }, Math.ceil(Math.random() * 2) * 1000);
    timeOutIdRef.current = timeOutId;
    const nextAttemptLeft = attemptLeft - 1;
    setAttemptLeft(nextAttemptLeft);
  }

  function calcReaction() {
    setReactionSpeed(Date.now() - initTimeStamp);
    setAverageReaction([...averageReaction, reactionSpeed]);
    console.log(reactionSpeed);
    console.log(averageReaction);

    if (attemptLeft === 0) {
      setGameState("COMPLETED");
    } else {
      setGameState("RESULT");
    }
  }

  function gameCompleted() {
    const totalSum = averageReaction.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    });
    const totalAvrage = totalSum / averageReaction.length;

    setPersonalBest(Math.min(...averageReaction));
    setPersonalAverage(totalAvrage);

    console.log(averageReaction);

    const personalRecord = {
      best: personalBest,
      average: personalAverage,
    };
    localStorage.setItem("personalRecord", JSON.stringify(personalRecord));

    setGameState("IDLE");
    setAttemptLeft(5);
  }

  function handleClick() {
    switch (gameState) {
      case "IDLE":
        initiateClickTimeout();
        break;
      case "WAITING":
        setGameState("TOO_SOON");
        if (timeOutIdRef.current) {
          clearTimeout(timeOutIdRef.current);
        }
        break;
      case "TOO_SOON":
        initiateClickTimeout();
        break;
      case "CLICK":
        calcReaction();
        break;
      case "RESULT":
        initiateClickTimeout();
        break;
      case "COMPLETED":
        gameCompleted();
        break;
      default:
        setGameState("IDLE");
        break;
    }
  }

  return (
    <div
      className={`w-full h-[36rem] flex flex-col justify-start items-start p-4 mb-4 rounded-3xl select-none cursor-pointer
      ${
        gameState === "CLICK"
          ? "bg-[var(--lemon)] text-[var(--darkest-algi)]"
          : "bg-[var(--dark-algi)] text-white"
      }
      `}
      onClick={handleClick}
    >
      <div className="grow w-full flex flex-col justify-center items-center">
        {gameState === "IDLE" && <StateIdle />}
        {gameState === "WAITING" && <StateWaiting />}
        {gameState === "CLICK" && <StateClick />}
        {gameState === "TOO_SOON" && <StateSoon />}
        {gameState === "RESULT" && <StateResult reaction={reactionSpeed} />}
        {gameState === "COMPLETED" && (
          <StateCompleted personalAverage={personalAverage} />
        )}
      </div>

      <HistoryCard
        isGreen={gameState === "CLICK"}
        personalBest={personalBest}
        personalAverage={personalAverage}
      />
    </div>
  );
}

export function StateIdle() {
  return (
    <>
      <h2 className="text-5xl font-bold mb-8">Reaction Time Test</h2>
      <p className="text-xl mb-16">
        When the box turns green, click as quickly as you can.
      </p>
      <p>Click anywhere to start.</p>
    </>
  );
}

export function StateWaiting() {
  return (
    <>
      <h2 className="text-5xl font-bold">Wait for green</h2>
    </>
  );
}

export function StateClick() {
  return (
    <>
      <h2 className="text-5xl font-bold">Click!</h2>
    </>
  );
}

export function StateSoon() {
  return (
    <>
      <h2 className="text-5xl font-bold text-[var(--papaya)] mb-8">
        TOO SOON!
      </h2>
      <p>Click anywhere to continue.</p>
    </>
  );
}

export function StateResult({ reaction }: { reaction: number }) {
  return (
    <>
      <h2 className="text-5xl font-bold text-[var(--lemon)] mb-8">
        {reaction} ms
      </h2>
      <p>Click anywhere to continue.</p>
    </>
  );
}

export function StateCompleted({
  personalAverage,
}: {
  personalAverage: number;
}) {
  return (
    <>
      <h2 className="text-5xl font-bold mb-8">Your Reaction Time is</h2>
      <p className="text-5xl font-bold text-[var(--lemon)] mb-8">
        {personalAverage} ms
      </p>
      <p>Click anywhere to restart.</p>
    </>
  );
}
