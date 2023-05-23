export default function NextIcon({
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
        d="M7.58 16.89L13.35 12.82C13.91 12.42 13.91 11.58 13.35 11.19L7.58 7.11C6.91 6.65 6 7.12 6 7.93V16.07C6 16.88 6.91 17.35 7.58 16.89ZM16 7V17C16 17.55 16.45 18 17 18C17.55 18 18 17.55 18 17V7C18 6.45 17.55 6 17 6C16.45 6 16 6.45 16 7Z"
        fill="currentColor"
      />
    </svg>
  );
}