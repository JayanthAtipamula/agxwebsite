import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import TermsAndConditions from './pages/TermsAndConditions';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import MetaPixel from './components/MetaPixel';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const yOffset = -80; // Offset for navbar
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const onNavClick = {
    hero: () => scrollToSection(heroRef),
    about: () => scrollToSection(aboutRef),
    services: () => scrollToSection(servicesRef),
    testimonials: () => scrollToSection(testimonialsRef),
    clients: () => scrollToSection(clientsRef),
    contact: () => scrollToSection(contactRef),
  };

  return (
    <Router>
      <div className="bg-black min-h-screen text-white relative">
        <MetaPixel />
        <Navbar onNavClick={onNavClick} />
        <WhatsAppButton />
        <main className="pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section ref={heroRef} id="hero" className="scroll-mt-20">
                    <Hero />
                  </section>
                  <section ref={aboutRef} id="about" className="scroll-mt-20">
                    <About />
                  </section>
                  <section>
                    <TechStack />
                  </section>
                  <section ref={servicesRef} id="services" className="scroll-mt-20">
                    <Services />
                  </section>
                  <section ref={testimonialsRef} id="testimonials" className="scroll-mt-20">
                    <Testimonials />
                  </section>
                  <section ref={clientsRef} id="clients" className="scroll-mt-20">
                    <Clients />
                  </section>
                  <section ref={contactRef} id="contact" className="scroll-mt-20">
                    <Contact />
                  </section>
                </>
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;