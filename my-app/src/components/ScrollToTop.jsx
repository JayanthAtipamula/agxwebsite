import React from 'react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title="Scroll to top"
    >
      <span className="sr-only">Scroll to top</span>
      {/* Add your scroll icon here */}
    </button>
  );
};

export default ScrollToTop; 