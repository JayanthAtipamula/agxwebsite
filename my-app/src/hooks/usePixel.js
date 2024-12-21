import { useEffect } from 'react';

export const usePixel = () => {
  const trackCustomEvent = (eventName, data = null) => {
    if (window.fbq) {
      if (data) {
        window.fbq('track', eventName, data);
      } else {
        window.fbq('track', eventName);
      }
    }
  };

  return { trackCustomEvent };
}; 