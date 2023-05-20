"use client";
import "./Square.css";

export default function Square({
  value,
  onSquareClick,
}: {
  value: string | null;
  onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
