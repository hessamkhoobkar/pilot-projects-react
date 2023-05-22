export default function PrevIcon({
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
        d="M7 6C7.55 6 8 6.45 8 7V17C8 17.55 7.55 18 7 18C6.45 18 6 17.55 6 17V7C6 6.45 6.45 6 7 6ZM10.66 12.82L16.43 16.89C17.09 17.36 18.01 16.88 18.01 16.07V7.93C18.01 7.12 17.1 6.65 16.43 7.11L10.66 11.18C10.528 11.2722 10.4201 11.3948 10.3457 11.5376C10.2712 11.6804 10.2324 11.839 10.2324 12C10.2324 12.161 10.2712 12.3196 10.3457 12.4624C10.4201 12.6052 10.528 12.7278 10.66 12.82Z"
        fill="currentColor"
      />
    </svg>
  );
}
