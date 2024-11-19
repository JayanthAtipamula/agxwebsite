import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const yOffset = -80; // Offset for navbar
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
      {/* Background Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.5 + 0.5,
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
            }}
            animate={{
              opacity: [null, 0, null],
              scale: [null, 1.5, null],
              boxShadow: [
                '0 0 2px #fff',
                '0 0 4px #fff',
                '0 0 2px #fff'
              ]
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          style={{
            textShadow: '0 0 30px rgba(255, 255, 255, 0.7), 0 0 60px rgba(255, 255, 255, 0.4)'
          }}
        >
          Innovate. Create. Transform.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto font-light"
          style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 0.6)'
          }}
        >
          Empowering businesses through cutting-edge digital solutions and innovative strategies
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <motion.button 
            onClick={scrollToAbout}
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;