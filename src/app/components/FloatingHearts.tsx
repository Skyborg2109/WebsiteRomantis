import { motion } from 'motion/react';

export function FloatingHearts() {
  const hearts = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((i) => (
        <motion.div
          key={i}
          className="absolute text-[#FF6B9D]/10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            rotate: Math.random() * 360,
            scale: 0.3 + Math.random() * 0.4,
          }}
          animate={{
            y: -100,
            rotate: 360 + Math.random() * 360,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
          style={{ fontFamily: 'Patrick Hand, cursive' }}
        >
          <span className="text-6xl">♡</span>
        </motion.div>
      ))}
    </div>
  );
}
