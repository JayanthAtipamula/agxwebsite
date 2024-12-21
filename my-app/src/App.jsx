import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MetaPixel from './components/MetaPixel';
import FreeWorkshop from './pages/FreeWorkshop';
import About from './components/About';

function App() {
  return (
    <>
      <MetaPixel />
      <Router>
        <Routes>
          <Route path="/" element={<FreeWorkshop />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshop" element={<FreeWorkshop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App; 