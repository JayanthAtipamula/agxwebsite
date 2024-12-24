import React from 'react';

const Map = () => {
  return (
    <div className="rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.9721507606477!2..."
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
        title="AGX Factor Office Location"
        aria-label="Interactive map showing AGX Factor office location"
      />
    </div>
  );
};

export default Map; 