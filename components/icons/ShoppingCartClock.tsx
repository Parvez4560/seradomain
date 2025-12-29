interface IconProps {
  className?: string;
  bodyColor?: string;
  clockColor?: string;
}

export default function ShoppingCartClock({
  className,
  bodyColor = "currentColor",
  clockColor = "green",
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      {/* wheels */}
      <circle cx="7" cy="22" r="2" fill={bodyColor} />
      <circle cx="17" cy="22" r="2" fill={bodyColor} />

      {/* cart body */}
      <path
        fill={bodyColor}
        d="M19.75,13.162A2.5,2.5,0,0,1,17.339,15H7.217a.329.329,0,0,1-.325-.3L6.036,8H10.5A1.5,1.5,0,0,0,12,6.5h0A1.5,1.5,0,0,0,10.5,5H5.653L5.391,2.939A3.327,3.327,0,0,0,2.087,0H1.5a1.5,1.5,0,0,0,0,3h.587a.329.329,0,0,1,.325.3l1.5,11.76A3.327,3.327,0,0,0,7.217,18H17.339a5.5,5.5,0,0,0,5.3-4.042l.016-.06A1.5,1.5,0,0,0,21.213,12h0a1.5,1.5,0,0,0-1.446,1.1Z"
      />

      {/* clock icon exactly where the plus used to be, proper size */}
      <g transform="translate(19,4.5) scale(0.40) translate(-12,-12)">
        <path
          fill={clockColor}
          d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-21C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.963,3,12,3Zm5,9.5c0-.828-.672-1.5-1.5-1.5h-2.5V6.5c0-.828-.671-1.5-1.5-1.5s-1.5,.672-1.5,1.5v6c0,.828,.671,1.5,1.5,1.5h4c.828,0,1.5-.672,1.5-1.5Z"
        />
      </g>
    </svg>
  );
}