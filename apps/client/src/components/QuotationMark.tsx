import { useId } from "react";

interface QuotationMarkProps {
  className?: string;
}

export function QuotationMark({
  className = "",
}: QuotationMarkProps) {
  const idValue = useId().replace(/[:]/g, "id-");
  const gradientId = `quote-gradient-${idValue}`;

  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EADDC7" />
          <stop offset="100%" stopColor="#C9A870" />
        </linearGradient>
      </defs>
      
      {/* Refined Hollow Quotes - Matching Screenshot */}
      <g stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Left Mark */}
        <path d="M40 35c0-10-15-10-15 0 0 15 15 20 15 35" />
        {/* Right Mark */}
        <path d="M70 35c0-10-15-10-15 0 0 15 15 20 15 35" />
      </g>
    </svg>
  );
}