import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-black min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Image Section */}
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/10">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl text-white mb-6 leading-relaxed">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-400">{testimonials[activeIndex].position}</p>
                    <div className="mt-4 inline-block bg-gray-800 px-4 py-2 rounded-full">
                      <p className="text-sm text-gray-300">{testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-white w-6' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;