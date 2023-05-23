export default function SkullIcon({
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
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_125_7)">
        <path
          d="M13 6.49998C13.0006 5.47184 12.737 4.4608 12.2344 3.56385C11.7319 2.66691 11.0073 1.91414 10.1301 1.37777C9.253 0.841402 8.25275 0.539428 7.22533 0.500815C6.19792 0.462203 5.17783 0.688249 4.2629 1.15727C3.34798 1.62629 2.56892 2.32254 2.00048 3.17924C1.43203 4.03594 1.09326 5.02434 1.01667 6.04962C0.940083 7.0749 1.12824 8.10266 1.5631 9.03431C1.99795 9.96596 2.66491 10.7702 3.5 11.37V12.5C3.5 12.7652 3.60536 13.0195 3.79289 13.2071C3.98043 13.3946 4.23478 13.5 4.5 13.5H9.5C9.76522 13.5 10.0196 13.3946 10.2071 13.2071C10.3946 13.0195 10.5 12.7652 10.5 12.5V11.37C11.2731 10.8147 11.9031 10.0835 12.3378 9.23671C12.7725 8.38991 12.9995 7.45184 13 6.49998Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.5 7.5C4.77614 7.5 5 7.27614 5 7C5 6.72386 4.77614 6.5 4.5 6.5C4.22386 6.5 4 6.72386 4 7C4 7.27614 4.22386 7.5 4.5 7.5Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 7.5C9.77614 7.5 10 7.27614 10 7C10 6.72386 9.77614 6.5 9.5 6.5C9.22386 6.5 9 6.72386 9 7C9 7.27614 9.22386 7.5 9.5 7.5Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 11.5V13.5M8 11.5V13.5"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_125_7">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
