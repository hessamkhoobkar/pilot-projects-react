export default function CarIcon({
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4_311)">
        <path
          opacity="0.2"
          d="M11 22C11 22.5933 10.8241 23.1734 10.4944 23.6667C10.1648 24.1601 9.69623 24.5446 9.14805 24.7716C8.59987 24.9987 7.99667 25.0581 7.41473 24.9424C6.83279 24.8266 6.29824 24.5409 5.87868 24.1213C5.45912 23.7018 5.1734 23.1672 5.05764 22.5853C4.94189 22.0033 5.0013 21.4001 5.22836 20.8519C5.45542 20.3038 5.83994 19.8352 6.33329 19.5056C6.82664 19.1759 7.40666 19 8 19C8.79565 19 9.55871 19.3161 10.1213 19.8787C10.6839 20.4413 11 21.2044 11 22ZM24 19C23.4067 19 22.8266 19.1759 22.3333 19.5056C21.8399 19.8352 21.4554 20.3038 21.2284 20.8519C21.0013 21.4001 20.9419 22.0033 21.0576 22.5853C21.1734 23.1672 21.4591 23.7018 21.8787 24.1213C22.2982 24.5409 22.8328 24.8266 23.4147 24.9424C23.9967 25.0581 24.5999 24.9987 25.1481 24.7716C25.6962 24.5446 26.1648 24.1601 26.4944 23.6667C26.8241 23.1734 27 22.5933 27 22C27 21.2044 26.6839 20.4413 26.1213 19.8787C25.5587 19.3161 24.7956 19 24 19ZM20.2925 9.2925C20.1051 9.10532 19.8511 9.00012 19.5863 9H5.535C5.37032 8.99989 5.20817 9.04046 5.06294 9.11809C4.91771 9.19572 4.7939 9.30801 4.7025 9.445L1 15H26L20.2925 9.2925Z"
          fill="currentColor"
        />
        <path
          d="M30 14H26.4137L21 8.58626C20.815 8.39973 20.5947 8.25185 20.352 8.15121C20.1093 8.05057 19.849 7.99917 19.5863 8.00001H5.535C5.20649 8.00062 4.88319 8.08214 4.59367 8.23736C4.30415 8.39259 4.05732 8.61674 3.875 8.89001L0.1675 14.445C0.0585648 14.6096 0.000326072 14.8026 0 15L0 21C0 21.5304 0.210714 22.0392 0.585786 22.4142C0.960859 22.7893 1.46957 23 2 23H4.125C4.3453 23.8604 4.8457 24.623 5.54731 25.1676C6.24892 25.7122 7.11183 26.0079 8 26.0079C8.88817 26.0079 9.75108 25.7122 10.4527 25.1676C11.1543 24.623 11.6547 23.8604 11.875 23H20.125C20.3453 23.8604 20.8457 24.623 21.5473 25.1676C22.2489 25.7122 23.1118 26.0079 24 26.0079C24.8882 26.0079 25.7511 25.7122 26.4527 25.1676C27.1543 24.623 27.6547 23.8604 27.875 23H30C30.5304 23 31.0391 22.7893 31.4142 22.4142C31.7893 22.0392 32 21.5304 32 21V16C32 15.4696 31.7893 14.9609 31.4142 14.5858C31.0391 14.2107 30.5304 14 30 14ZM5.535 10H19.5863L23.5863 14H2.875L5.535 10ZM8 24C7.60444 24 7.21776 23.8827 6.88886 23.6629C6.55996 23.4432 6.30362 23.1308 6.15224 22.7654C6.00087 22.3999 5.96126 21.9978 6.03843 21.6098C6.1156 21.2219 6.30608 20.8655 6.58579 20.5858C6.86549 20.3061 7.22186 20.1156 7.60982 20.0384C7.99778 19.9613 8.39991 20.0009 8.76537 20.1523C9.13082 20.3036 9.44318 20.56 9.66294 20.8889C9.8827 21.2178 10 21.6044 10 22C10 22.5304 9.78929 23.0392 9.41421 23.4142C9.03914 23.7893 8.53043 24 8 24ZM24 24C23.6044 24 23.2178 23.8827 22.8889 23.6629C22.56 23.4432 22.3036 23.1308 22.1522 22.7654C22.0009 22.3999 21.9613 21.9978 22.0384 21.6098C22.1156 21.2219 22.3061 20.8655 22.5858 20.5858C22.8655 20.3061 23.2219 20.1156 23.6098 20.0384C23.9978 19.9613 24.3999 20.0009 24.7654 20.1523C25.1308 20.3036 25.4432 20.56 25.6629 20.8889C25.8827 21.2178 26 21.6044 26 22C26 22.5304 25.7893 23.0392 25.4142 23.4142C25.0391 23.7893 24.5304 24 24 24ZM30 21H27.875C27.6547 20.1396 27.1543 19.377 26.4527 18.8324C25.7511 18.2878 24.8882 17.9922 24 17.9922C23.1118 17.9922 22.2489 18.2878 21.5473 18.8324C20.8457 19.377 20.3453 20.1396 20.125 21H11.875C11.6547 20.1396 11.1543 19.377 10.4527 18.8324C9.75108 18.2878 8.88817 17.9922 8 17.9922C7.11183 17.9922 6.24892 18.2878 5.54731 18.8324C4.8457 19.377 4.3453 20.1396 4.125 21H2V16H30V21Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_311">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
