import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      quote: "AGX Factor transformed our digital presence completely. Their strategic approach to social media and brand development yielded exceptional results.",
      rating: 5,
      company: "TechStart Inc."
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthBox",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      quote: "The ROI we've seen from their META ads strategy has been incredible. They truly understand the digital landscape and how to leverage it effectively.",
      rating: 5,
      company: "GrowthBox"
    },
    {
      name: "Emma Williams",
      position: "Founder, StyleHub",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      quote: "Their business development strategies helped us scale our operations significantly. The team's expertise and dedication are unmatched.",
      rating: 5,
      company: "StyleHub"
    },
    {
      name: "David Rodriguez",
      position: "E-commerce Director, FashionFlex",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      quote: "The influencer collaborations AGX Factor arranged for us were game-changing. Our brand reach and engagement skyrocketed within months.",
      rating: 5,
      company: "FashionFlex"
    },
    {
      name: "Alexandra Kim",
      position: "Digital Marketing Head, InnovateNow",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      quote: "Their organic social media growth strategies have helped us build a genuine, engaged community. The results have far exceeded our expectations.",
      rating: 5,
      company: "InnovateNow"
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying && inView) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, inView]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-12 bg-black min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-5xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="p-8 md:p-12 relative z-10"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
                  <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Image Section with Glow */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-500" />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center md:text-left">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center md:justify-start items-center gap-1 mb-6"
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="w-6 h-6 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </motion.div>
                    
                    <motion.blockquote 
                      className="text-2xl md:text-3xl text-white mb-8 leading-relaxed font-light"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      "{testimonials[activeIndex].quote}"
                    </motion.blockquote>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-2xl font-semibold text-white mb-2">{testimonials[activeIndex].name}</h4>
                      <p className="text-gray-400 mb-4">{testimonials[activeIndex].position}</p>
                      <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10">
                        <p className="text-white/80">{testimonials[activeIndex].company}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Bar */}
            {isAutoPlaying && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity
                }}
              />
            )}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`relative h-3 rounded-full transition-all duration-500 ${
                  index === activeIndex ? 'w-12 bg-gradient-to-r from-blue-500 to-purple-500' : 'w-3 bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className={`absolute inset-0 rounded-full ${
                  index === activeIndex ? 'animate-pulse bg-blue-500/50' : ''
                }`} />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;