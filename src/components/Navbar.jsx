import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/MARKETING__4_-removebg-preview (1).png';

const Navbar = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (onClick) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        onClick();
      }, 100);
    } else {
      onClick();
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Home', onClick: () => handleMenuClick(onNavClick.hero) },
    { name: 'About', onClick: () => handleMenuClick(onNavClick.about) },
    { name: 'Services', onClick: () => handleMenuClick(onNavClick.services) },
    { name: 'Testimonials', onClick: () => handleMenuClick(onNavClick.testimonials) },
    { name: 'Clients', onClick: () => handleMenuClick(onNavClick.clients) },
    { name: 'Contact', onClick: () => handleMenuClick(onNavClick.contact) },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
        style={{
          background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div
                className="flex items-center cursor-pointer"
                onClick={() => navigate('/')}
              >
                <img src={logo} alt="AGX Factor Logo" className="h-12 w-auto" />
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <motion.button
                    onClick={item.onClick}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white px-2 py-1"
                  >
                    {item.name}
                  </motion.button>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              marginTop: '64px',
            }}
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <motion.button
                    onClick={item.onClick}
                    className="text-white px-2 py-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.button>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
