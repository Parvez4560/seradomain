export default function SearchIconCenter({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      {/* Mirror + ভেতরের কনটেন্ট বড় করা */}
      <g transform="scale(-1.12 1.12) translate(-25 -1.5)">
        <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"/>
      </g>
    </svg>
  );
}