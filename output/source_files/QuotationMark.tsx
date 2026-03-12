import React, { useId } from 'react';
import quoteImage from "figma:asset/f9d3a753d38cf650f178946c76e94b9d31070108.png";

interface QuotationMarkProps {
  orientation?: 'opening' | 'closing';
  className?: string;
  size?: number;
}

export function QuotationMark({ 
  orientation = 'opening', 
  className = '',
  size = 120 
}: QuotationMarkProps) {
  const filterId = useId().replace(/:/g, '');
  
  return (
    <>
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id={`black-to-gold-${filterId}`} colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="
              0.2118 0 0 0 0.7882
              0.3412 0 0 0 0.6588
              0.5608 0 0 0 0.4392
              0 0 0 1 0
            " />
          </filter>
        </defs>
      </svg>
      <img
        src={quoteImage}
        alt="Quotation Mark"
        className={className}
        style={{
          transform: orientation === 'closing' 
            ? 'scale(0.85) scaleX(-1) scaleY(-1)' 
            : 'scale(0.85) translateX(5%)',
          filter: `url(#black-to-gold-${filterId})`,
          objectFit: 'contain',
          width: size,
          height: size,
          opacity: 0.6,
          marginTop: '0px',
          marginRight: '0px',
          marginBottom: '0px',
          marginLeft: '-5px',
        }}
      />
    </>
  );
}