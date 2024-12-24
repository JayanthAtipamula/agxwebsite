import React from 'react';

const Navbar = () => {
  return (
    <div className="container">
      <div className="flex">
        <div className="md:hidden">
          <button 
            className="text-white p-2"
            aria-label="Toggle mobile menu"
            title="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {/* Add your menu icon here */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 