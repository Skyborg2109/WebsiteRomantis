import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface LetterProps {
  title: string;
  message: string;
  from: string;
  envelopeColor: string;
  delay?: number;
}

export function LoveLetter({ title, message, from, envelopeColor, delay = 0 }: LetterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-sm mx-auto cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Envelope */}
      <div className="relative perspective-1000">
        <motion.div
          className="relative w-full h-64 shadow-2xl"
          style={{ backgroundColor: envelopeColor }}
          whileHover={{ scale: 1.02 }}
          animate={isOpen ? { y: -20 } : { y: 0 }}
        >
          {/* Envelope flap */}
          <motion.div
            className="absolute top-0 left-0 w-full h-32 origin-top"
            style={{
              backgroundColor: envelopeColor,
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              filter: 'brightness(0.9)',
            }}
            animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          />

          {/* Envelope body */}
          <div className="absolute inset-0 flex items-center justify-center">
            {!isOpen && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="text-center"
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                <p className="text-2xl text-gray-700 mb-2">{title}</p>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Caveat, cursive' }}>
                  (Klik untuk buka)
                </p>
              </motion.div>
            )}
          </div>

          {/* Heart seal */}
          {!isOpen && (
            <motion.div
              className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white text-2xl">♡</span>
            </motion.div>
          )}
        </motion.div>

        {/* Letter content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#FFFEF5] p-6 shadow-2xl z-20"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -40, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                backgroundImage: `repeating-linear-gradient(transparent, transparent 30px, #E8E8E8 30px, #E8E8E8 31px)`,
              }}
            >
              {/* Holes like notebook paper */}
              <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-around">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>

              <div className="ml-8">
                <p 
                  className="text-xl text-gray-800 leading-relaxed mb-6 whitespace-pre-line"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  {message}
                </p>
                <p 
                  className="text-right text-lg text-gray-700"
                  style={{ fontFamily: 'Dancing Script, cursive' }}
                >
                  {from} ♡
                </p>
              </div>

              {/* Fold marks */}
              <div className="absolute top-1/3 left-0 right-0 h-px bg-gray-300 opacity-30"></div>
              <div className="absolute top-2/3 left-0 right-0 h-px bg-gray-300 opacity-30"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click instruction */}
      {isOpen && (
        <motion.p
          className="text-center mt-24 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ fontFamily: 'Caveat, cursive' }}
        >
          Klik lagi untuk tutup
        </motion.p>
      )}
    </motion.div>
  );
}
