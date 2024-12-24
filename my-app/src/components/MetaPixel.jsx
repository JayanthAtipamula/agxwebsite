import React, { useEffect } from 'react';

export default function MetaPixel() {
  useEffect(() => {
    try {
      // Defer pixel loading
      const loadPixel = () => {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        window.fbq('init', '1147019126838651');
        window.fbq('track', 'PageView');
      };

      // Load after initial render
      if (document.readyState === 'complete') {
        loadPixel();
      } else {
        window.addEventListener('load', loadPixel);
        return () => window.removeEventListener('load', loadPixel);
      }
    } catch (error) {
      console.error('Meta Pixel Error:', error);
    }
  }, []);

  return null;
} 