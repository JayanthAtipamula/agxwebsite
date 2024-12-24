import React from 'react';
import logoWebp from '../assets/MARKETING__4_-removebg-preview.webp';
import logoPng from '../assets/MARKETING__4_-removebg-preview.png';

export const Logo = () => {
  return (
    <picture>
      <source srcSet={logoWebp} type="image/webp" />
      <img 
        src={logoPng}
        alt="AGX Factor Logo"
        width="192"
        height="48"
        className="h-12 w-48"
        loading="eager"
      />
    </picture>
  );
}; 