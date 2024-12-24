import React from 'react';

const Carousel = ({ slides, currentSlide, setCurrentSlide }) => {
  return (
    <div className="max-w-6xl">
      <div className="relative">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative h-3 rounded-full transition-all duration-500 ${
                currentSlide === index 
                  ? 'w-12 bg-gradient-to-r from-green-400 to-green-600' 
                  : 'w-3 bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1} of ${slides.length}`}
              title={`Slide ${index + 1}`}
              aria-current={currentSlide === index ? 'true' : 'false'}
            >
              <span className="sr-only">
                {currentSlide === index ? `Current slide ${index + 1}` : `Go to slide ${index + 1}`}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel; 