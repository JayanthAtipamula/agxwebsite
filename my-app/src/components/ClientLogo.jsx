import React from 'react';

export const ClientLogo = ({ webpSrc, fallbackSrc, alt, index }) => {
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img 
        src={fallbackSrc}
        alt={`Client ${index + 1}`}
        width="200"
        height="100"
        className="w-full h-auto object-contain filter hover:brightness-110 transition-all duration-300"
        style={{ maxHeight: '100px' }}
        loading="lazy"
      />
    </picture>
  );
}; 