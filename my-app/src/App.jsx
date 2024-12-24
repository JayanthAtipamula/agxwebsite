import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MetaPixel from './components/MetaPixel';
import FreeWorkshop from './pages/FreeWorkshop';
import About from './components/About';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again.</div>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div role="main">
        <MetaPixel />
        <Router>
          <Routes>
            <Route path="/" element={<FreeWorkshop />} />
            <Route path="/about" element={<About />} />
            <Route path="/workshop" element={<FreeWorkshop />} />
          </Routes>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App; 