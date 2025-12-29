// components/icons/DotOrg.tsx
import React from "react";

export default function DotOrg({ className }: { className?: string }) {
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
      {/* DotOrg icon */}
      <circle cx="12" cy="12" r="10" />
      <text x="12" y="16" textAnchor="middle" fontSize="6" fontWeight="bold">
        .ORG
      </text>
    </svg>
  );
}