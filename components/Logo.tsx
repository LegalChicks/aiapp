
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg
        className="h-8 w-auto text-brand-brown"
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 27.9 72.1 10 50 10ZM50 20C55.5 20 60 24.5 60 30C60 35.5 55.5 40 50 40C44.5 40 40 35.5 40 30C40 24.5 44.5 20 50 20ZM70 65C70 70.5 65.5 75 60 75H40C34.5 75 30 70.5 30 65V55C30 52.2 32.2 50 35 50H65C67.8 50 70 52.2 70 55V65Z"
        />
        <path d="M50,20 a5,5 0 0,1 0,10 a5,5 0 0,1 0,-10 M48,15 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0" fill="#FFFFFF" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-brand-dark">
        Legal Chicks
      </span>
    </div>
  );
};

export default Logo;
