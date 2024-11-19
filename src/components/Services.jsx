import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Services() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const services = [
    {
      title: "META ADS",
      description: "Strategic Facebook & Instagram advertising campaigns to maximize your ROI and reach",
      icon: "📈"
    },
    {
      title: "BRAND GROWTH",
      description: "Comprehensive brand development and expansion strategies for market dominance",
      icon: "🚀"
    },
    {
      title: "BUSINESS DEVELOPMENT",
      description: "Sustainable growth solutions and market penetration strategies",
      icon: "💼"
    },
    {
      title: "BUSINESS STRATEGIST",
      description: "Expert consultation for optimizing business operations and market positioning",
      icon: "🎯"
    },
    {
      title: "ORGANIC SOCIAL MEDIA GROWTH",
      description: "Natural audience building and engagement strategies across social platforms",
      icon: "📱"
    },
    {
      title: "INFLUENCER & BRAND COLLABORATIONS",
      description: "Strategic partnerships with influencers and brands to amplify your market presence",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-500"
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
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 