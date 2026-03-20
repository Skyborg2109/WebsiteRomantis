import { motion } from 'motion/react';

export function Scribble({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 50"
      className={className}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <motion.path
        d="M 10 25 Q 40 10, 70 25 T 130 25 Q 160 40, 190 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: 'url(#roughen)',
        }}
      />
      <defs>
        <filter id="roughen">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </defs>
    </motion.svg>
  );
}
