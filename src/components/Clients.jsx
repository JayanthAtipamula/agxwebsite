import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import all client images
import client1 from '../assets/1.png';
import client2 from '../assets/2.png';
import client3 from '../assets/3.png';
import client4 from '../assets/4.png';
import client5 from '../assets/5.png';
import client6 from '../assets/6.png';
import client7 from '../assets/7.png';

const clients = [
  { name: "Client 1", logo: client3 },
  { name: "Client 2", logo: client1 },
  { name: "Client 3", logo: client5 },
  { name: "Client 4", logo: client2 },
  { name: "Client 5", logo: client7 },
  { name: "Client 6", logo: client4 },
  { name: "Client 7", logo: client6 }
];

const Clients = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 transition-all duration-500"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(31, 41, 55, 0.7)',
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-auto object-contain filter hover:brightness-110 transition-all duration-300"
                  style={{
                    maxHeight: '100px'
                  }}
                />
              </motion.div>
            ))}

            {/* View More Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: clients.length * 0.1,
                ease: "easeOut"
              }}
              className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ➕
              </motion.div>
              <motion.button 
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                View More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;