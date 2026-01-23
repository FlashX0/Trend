import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", inverted = false }) => {
  const logoUrl = "https://i.postimg.cc/SRFYR3Rg/Untitled_1.png";

  return (
    <div className={`flex items-center select-none group relative shrink-0 ${className}`}>
      <div className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="h-full w-auto flex items-center transition-transform duration-500 group-hover:scale-105">
        <img 
          src={logoUrl} 
          alt="TREND Store Logo" 
          className={`h-full w-auto object-contain max-w-[180px] md:max-w-[240px] transition-all duration-300 ${
            inverted ? 'brightness-110 contrast-110' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default Logo;