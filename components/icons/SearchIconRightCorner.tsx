export default function SearchIconRightCorner({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* পুরো আইকনকে ভেতর থেকে বড় করা */}
      <g transform="scale(1.1) translate(-1.2 -1.2)">
        {/* বৃত্ত */}
        <circle cx="11" cy="11" r="7.5" />

        {/* লম্বা ডান্ডা */}
        <line x1="16.8" y1="16.8" x2="22.5" y2="22.5" />
      </g>
    </svg>
  );
}