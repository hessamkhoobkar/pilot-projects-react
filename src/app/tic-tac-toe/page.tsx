// This is somewhat of an anti-pattern
"use client";

import { useState } from "react";

import "./page.css";
import Board from "./components/Board";
import Modal from "./components/Modal";

export default function Page() {
  const [playerOne, setPlayerOne] = useState(true);
  const [gameHistory, setGameHistory] = useState([Array(9).fill(null)]);
  const [winner, setWinner] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "The modal's title",
    text: "The modal's text",
  });
  let currentMove = gameHistory[gameHistory.length - 1];

  function handleWinnerState(winner: string) {
    setWinner(winner);
    let newInfo = {
      title: "We have a winner",
      text: `Player ${winner === "X" ? "one" : "two"} is the winner`,
    };
    setModalInfo(newInfo);
    setShowModal(true);
  }
  function handleDrawState() {
    setWinner(winner);
    let newInfo = {
      title: "It's a draw",
      text: "Good game people, let's try again",
    };
    setModalInfo(newInfo);
    setShowModal(true);
  }

  function handleCloseReq() {
    setShowModal(false);
    resetGame();
  }

  function resetGame() {
    setPlayerOne(true);
    setGameHistory([Array(9).fill(null)]);
    setWinner(null);
  }

  function undoLastMove() {
    const newGameHistory = gameHistory.slice(0, -1);
    setGameHistory(newGameHistory);
    setPlayerOne(!playerOne);
  }

  function gameProcesses(nextSquares: string[]) {
    setGameHistory([...gameHistory, nextSquares]);
    setPlayerOne(!playerOne);
    const winner = calculateWinner(nextSquares);
    const hasNull = nextSquares.findIndex((item) => item === null);
    if (winner !== null) {
      handleWinnerState(winner);
    }
    if (hasNull === -1) {
      handleDrawState();
    }
  }

  return (
    <div className="body-wrap">
      <div className="player">
        <span>Player One</span>
        {playerOne === true && <span className="turn-badge">Your turn</span>}
      </div>

      <div>
        <Board
          playerOne={playerOne}
          squares={currentMove}
          winner={winner}
          onPlayerMove={gameProcesses}
        />
        <div className="game-action">
          <button onClick={resetGame}>RESET GAME</button>
          <button onClick={undoLastMove}>UNDO</button>
        </div>
      </div>

      <div className="player">
        <span>Player Two</span>
        {playerOne !== true && <span className="turn-badge">Your turn</span>}
      </div>

      {showModal && (
        <Modal
          title={modalInfo.title}
          text={modalInfo.text}
          onClose={handleCloseReq}
        />
      )}
    </div>
  );
}

// Draw state
// Undo Last move

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
