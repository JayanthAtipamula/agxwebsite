import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 flex items-center py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2 
              variants={itemVariants}
              className="text-5xl font-bold text-white mb-8"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
              }}
            >
              Driving Digital Innovation
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              At AGX Factor, we blend creativity with technology to create impactful digital solutions. Our expertise spans across multiple domains, ensuring comprehensive digital transformation for your business.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              From concept to execution, we're committed to delivering excellence and driving measurable results for our clients worldwide.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Strategy', desc: 'Digital Roadmap' },
              { title: 'Design', desc: 'Creative Solutions' },
              { title: 'Development', desc: 'Tech Excellence' },
              { title: 'Marketing', desc: 'Growth Focus' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 transition-all duration-300"
                whileHover={{ 
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(31, 41, 55, 0.7)',
                  y: -5,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;