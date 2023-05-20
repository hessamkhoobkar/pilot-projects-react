"use client";

import Square from "./Square";
import "./Board.css";

interface BoardProps {
  winner: string | null;
  playerOne: boolean;
  squares: string[];
  onPlayerMove: (nextSquares: string[]) => void;
}

export default function Board({
  squares,
  playerOne,
  winner,
  onPlayerMove,
}: BoardProps) {
  function handleClick(i: number): void {
    if (squares[i] === "X" || squares[i] === "O" || winner) {
      return;
    }
    const nextSquares = [...squares];
    if (playerOne === true) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlayerMove(nextSquares);
  }

  return (
    <div className="board">
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
