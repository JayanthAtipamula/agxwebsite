import React, { forwardRef, useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBeam, Circle } from './core/animated-beam';
import parentImage from '../assets/parent.png';
import node1Image from '../assets/node1.png';
import node2Image from '../assets/node2.jpg';

const TechStack = forwardRef((props, ref) => {
  const beamContainerRef = useRef(null);
  const parentRef = useRef(null);
  const child1Ref = useRef(null);
  const child2Ref = useRef(null);

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-black py-12 lg:py-28 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-center lg:text-left">
              AG X FACTOR
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              A premier talent management and pageant company under AG X MARKETING, 
              connecting with innovative ventures like URGE.clothing to create unique opportunities 
              in fashion and entertainment.
            </p>
          </div>

          {/* Connection Diagram Section */}
          <div className="w-full lg:w-1/2 h-[350px] lg:h-[600px] relative">
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div ref={beamContainerRef} className="absolute inset-0">
                {/* Beams first (lower z-index) */}
                <div className="relative z-0">
                  <AnimatedBeam
                    containerRef={beamContainerRef}
                    fromRef={child1Ref}
                    toRef={parentRef}
                    curvature={0}
                    dotted
                    gradientStartColor="#00d8ff"
                    gradientStopColor="#61fbff"
                    pathWidth={1.5}
                  />
                  <AnimatedBeam
                    containerRef={beamContainerRef}
                    fromRef={child2Ref}
                    toRef={parentRef}
                    curvature={0}
                    dotted
                    gradientStartColor="#0088ff"
                    gradientStopColor="#0055ff"
                    pathWidth={1.5}
                  />
                </div>

                {/* Left - Parent node */}
                <div className="absolute left-[15%] lg:left-[20%] top-1/2 -translate-y-1/2 z-10">
                  <Circle ref={parentRef} className="h-20 w-20 lg:h-24 lg:w-24 p-0 glow-effect-strong relative">
                    <img 
                      src={parentImage} 
                      alt="AG X FACTOR" 
                      className="w-full h-full object-cover rounded-full absolute inset-0"
                    />
                  </Circle>
                </div>

                {/* Right - Child nodes */}
                <div className="absolute right-[15%] lg:right-[20%] top-1/2 -translate-y-1/2 flex flex-col gap-24 lg:gap-32 z-10">
                  <div className="translate-y-[-40%]">
                    <Circle ref={child1Ref} className="h-16 w-16 lg:h-20 lg:w-20 p-0 glow-effect relative">
                      <img 
                        src={node1Image} 
                        alt="AG X MARKETING" 
                        className="w-full h-full object-cover rounded-full absolute inset-0"
                      />
                    </Circle>
                  </div>
                  
                  <div 
                    className="cursor-pointer hover:scale-110 transition-transform duration-200 translate-y-[40%]"
                    onClick={() => window.open('https://urge.clothing/', '_blank')}
                  >
                    <Circle ref={child2Ref} className="h-16 w-16 lg:h-20 lg:w-20 p-0 glow-effect relative">
                      <img 
                        src={node2Image} 
                        alt="URGE.clothing" 
                        className="w-full h-full object-cover rounded-full absolute inset-0"
                      />
                    </Circle>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

TechStack.displayName = 'TechStack';
export default TechStack;
