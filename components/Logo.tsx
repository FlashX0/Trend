
import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-14 w-auto", inverted = false }) => {
  const logoUrl = "https://i.postimg.cc/SRFYR3Rg/Untitled_1.png";

  return (
    <div className={`flex items-center select-none group relative ${className}`}>
      {/* تأثير توهج خلفي خفيف عند التحويم لزيادة الجمالية */}
      <div className="absolute inset-0 bg-cyan-400/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative transition-transform duration-500 group-hover:scale-105">
        <img 
          src={logoUrl} 
          alt="TREND Store Logo" 
          className={`h-full w-auto object-contain transition-all duration-300 ${
            inverted ? 'brightness-110 contrast-110' : ''
          }`}
          style={{ maxHeight: '100%' }}
        />
      </div>
    </div>
  );
};

export default Logo;
