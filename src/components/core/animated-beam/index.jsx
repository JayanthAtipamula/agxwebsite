import { motion } from 'framer-motion';
import { forwardRef, useRef, useId, useState, useEffect, cn } from 'react';
export { Icons } from './Icons';

export const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 1.5 + 1,
  delay = 0,
  pathColor = 'rgba(255, 255, 255, 0.3)',
  pathWidth = 1.5,
  pathOpacity = 0.4,
  gradientStartColor = '#4d40ff',
  gradientStopColor = '#4043ff',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = false,
  dotSpacing = 4,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState('');
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  
  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : 'none';
  const gradientCoordinates = reverse
    ? {
        x1: ['0%', '100%'],
        x2: ['20%', '120%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%'],
      }
    : {
        x1: ['-20%', '80%'],
        x2: ['0%', '100%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%'],
      };

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      // Calculate positions relative to the container
      const startX = fromRect.left - containerRect.left + (fromRect.width / 2) + startXOffset;
      const startY = fromRect.top - containerRect.top + (fromRect.height / 2) + startYOffset;
      const endX = toRect.left - containerRect.left + (toRect.width / 2) + endXOffset;
      const endY = toRect.top - containerRect.top + (toRect.height / 2) + endYOffset;

      // Calculate control point for the quadratic curve
      const midY = (startY + endY) / 2;
      const controlY = midY - curvature;

      const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
      setPathD(d);

      setSvgDimensions({
        width: containerRect.width,
        height: containerRect.height
      });
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updatePath);
    });

    // Observe both the container and the elements
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    if (fromRef.current) {
      resizeObserver.observe(fromRef.current);
    }
    if (toRef.current) {
      resizeObserver.observe(toRef.current);
    }

    // Initial update
    requestAnimationFrame(updatePath);

    // Clean up
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 ${className || ''}`}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        style={{
          filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
        }}
      />
      <motion.path
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        initial={{
          strokeWidth: pathWidth,
          strokeOpacity: 0.2,
        }}
        animate={{
          strokeWidth: pathWidth,
          strokeOpacity: 0.8,
        }}
        transition={{
          duration: 0.8,
          delay: delay,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        style={{
          filter: 'drop-shadow(0 0 12px rgba(77, 64, 255, 0.4))'
        }}
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: '0%',
            x2: '0%',
            y1: '0%',
            y2: '0%',
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0.1
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0.3"></stop>
          <stop offset="0.1" stopColor={gradientStartColor} stopOpacity="1"></stop>
          <stop offset="0.3" stopColor={gradientStopColor} stopOpacity="1"></stop>
          <stop offset="0.6" stopColor={gradientStopColor} stopOpacity="0.3"></stop>
          <stop offset="1" stopColor={gradientStopColor} stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className || ''}`}
    >
      {children}
    </div>
  );
});

Circle.displayName = 'Circle';
