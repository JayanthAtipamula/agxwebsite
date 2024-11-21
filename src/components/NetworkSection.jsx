import React, { forwardRef, useRef } from "react";
import { motion } from "framer-motion";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={`z-10 flex size-12 items-center justify-center rounded-full border-2 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 p-3 shadow-[0_0_20px_-12px_rgba(255,255,255,0.5)] ${className}`}
      whileHover={{ 
        scale: 1.1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
});

Circle.displayName = "Circle";

const NetworkSection = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Our Integration Ecosystem
        </motion.h2>

        <div
          className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border border-gray-800/50 bg-gray-900/30 p-10 backdrop-blur-sm mx-auto max-w-4xl"
          ref={containerRef}
        >
          <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div1Ref}>
                <span className="text-2xl">📈</span>
              </Circle>
              <Circle ref={div5Ref}>
                <span className="text-2xl">📱</span>
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div2Ref}>
                <span className="text-2xl">🚀</span>
              </Circle>
              <Circle ref={div4Ref} className="size-16">
                <span className="text-3xl">⚡</span>
              </Circle>
              <Circle ref={div6Ref}>
                <span className="text-2xl">🎯</span>
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div3Ref}>
                <span className="text-2xl">💼</span>
              </Circle>
              <Circle ref={div7Ref}>
                <span className="text-2xl">🤝</span>
              </Circle>
            </div>
          </div>

          {/* Connection Lines */}
          {[div1Ref, div2Ref, div3Ref, div5Ref, div6Ref, div7Ref].map((ref, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <svg className="absolute inset-0 w-full h-full">
                <motion.line
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="50%"
                  stroke="rgba(59, 130, 246, 0.5)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSection; 