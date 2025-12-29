interface IconProps {
  className?: string;
  bodyColor?: string;   // কার্ট / বডি কালার
  dotColor?: string;    // অনলাইন ডট কালার
}

export default function ShoppingCartDot({
  className,
  bodyColor = "currentColor",
  dotColor = "#22c55e", // green
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      {/* cart body */}
      <path
        fill={bodyColor}
        d="m23.7 10.888-.814 3.036c-.644 2.4-2.828 4.076-5.312 4.076h-10.304c-1.747 0-3.238-1.306-3.469-3.037l-1.537-11.529c-.033-.248-.246-.434-.496-.434h-.249c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5h.249c1.747 0 3.239 1.306 3.469 3.038l.262 1.962h9.001c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5h-8.601l.875 6.566c.033.247.246.434.496.434h10.304c1.129 0 2.122-.762 2.415-1.853l.814-3.036c.215-.8 1.038-1.276 1.837-1.061.8.214 1.275 1.037 1.061 1.837z"
      />

      {/* wheels */}
      <circle cx="7" cy="22" r="2" fill={bodyColor} />
      <circle cx="17" cy="22" r="2" fill={bodyColor} />

      {/* online dot */}
      <circle cx="20.5" cy="3.5" r="3.5" fill={dotColor} />
    </svg>
  );
}