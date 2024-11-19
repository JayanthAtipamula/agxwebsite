import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const yOffset = -80;
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
    <div className="bg-black min-h-screen text-white relative">
      <Navbar onNavClick={onNavClick} />
      <WhatsAppButton />
      <main className="pt-16">
        <section ref={heroRef} id="hero" className="scroll-mt-20">
          <Hero />
        </section>
        
        <section ref={aboutRef} id="about" className="scroll-mt-20">
          <About />
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
      </main>
      <Footer />
    </div>
  );
}

export default App;