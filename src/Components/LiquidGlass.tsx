'use client';

import { ReactNode, useMemo } from 'react';

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  colorIndex?: number; // Optional index to use a specific color
}

// Color palette
const colors = ['#202e32', '#85937a', 'green', '#000', 'transparent', ];

export default function LiquidGlass({ children, className = '', colorIndex }: LiquidGlassProps) {
  // Use provided colorIndex or assign based on variant
  useMemo(() => {
    if (colorIndex !== undefined) {
      return colors[0];
      // return colors[colorIndex % colors.length];
    }
  }, [ colorIndex]);


  return (
    <div
      className={`relatsive ${className}`}
    >
      <div
        //  className='relative bg-white/10 backdrop-blur-2xl border-1 border-white/10 rounded-[1rem] overflow-hidden'
         className='relative bg-white/5 backdrop-blur-3xl border-1 border-white/10 rounded-[1rem] overflow-hidden'
         style={{
          transition: 'all 0.3s ease',
        }}
      >
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
}
