import { useCallback } from 'react';

export const usePixel = () => {
  const trackCustomEvent = useCallback((eventName, data = null) => {
    try {
      if (window.fbq) {
        if (data) {
          window.fbq('track', eventName, data);
        } else {
          window.fbq('track', eventName);
        }
      }
    } catch (error) {
      console.error('Meta Pixel Event Error:', error);
    }
  }, []);

  return { trackCustomEvent };
}; 