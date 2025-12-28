export default function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <rect y="3.5" width="24" height="3" />
      <rect y="10.5" width="24" height="3" />
      <rect y="17.5" width="24" height="3" />
    </svg>
  );
}