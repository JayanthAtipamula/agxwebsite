import { motion } from 'framer-motion';
import logo from '../assets/MARKETING__4_-removebg-preview (1).png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img 
                src={logo} 
                alt="AGX Factor Logo" 
                className="h-16 w-auto"
              />
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              
              <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="/contact-us" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="hover:text-blue-500 transition-colors">Disclaimer</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-blue-500 transition-colors">Terms & Conditions</a></li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AGX Factor. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;