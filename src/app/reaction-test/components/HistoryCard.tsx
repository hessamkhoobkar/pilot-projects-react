export default function HistoryCard({
  isGreen = false,
  personalBest = 0,
  personalAverage = 0,
}: {
  isGreen: boolean;
  personalBest: number;
  personalAverage: number;
}) {
  return (
    <div
      className={`bg-[var(--darker-algi)] w-full rounded-2xl px-8 py-8 flex justify-between items-center
      ${
        isGreen === true
          ? "bg-[var(--lemon-bitter)] text-[var(--darkest-algi)]"
          : "bg-[var(--darker-algi)] text-white"
      }
    `}
    >
      <span>Your personal best: {personalBest} ms</span>
      <span>Your Average: {personalAverage} ms</span>
    </div>
  );
}
