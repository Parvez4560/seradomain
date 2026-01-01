import React from "react";

export default function DotCom({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}  // stroke পাতলা
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <text
        x="12"
        y="12"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="6"
        fontWeight="300"      // মোটা না, চিকন
        fontFamily="sans-serif"
      >
        .com   {/* ছোট হাতের লেখা */}
      </text>
    </svg>
  );
}