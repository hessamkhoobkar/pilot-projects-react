export default function PlayIcon({
  size = 24,
  className = "",
}: {
  size: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.5 14.67V9.33C9.5 8.54 10.38 8.06 11.04 8.49L15.19 11.16C15.3303 11.2507 15.4457 11.375 15.5256 11.5218C15.6055 11.6685 15.6474 11.8329 15.6474 12C15.6474 12.1671 15.6055 12.3315 15.5256 12.4782C15.4457 12.625 15.3303 12.7493 15.19 12.84L11.04 15.51C10.38 15.94 9.5 15.46 9.5 14.67Z"
        fill="currentColor"
      />
    </svg>
  );
}
