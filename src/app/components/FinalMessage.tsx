import { motion } from 'motion/react';
import { HandDrawnHeart } from './HandDrawnHeart';

export function FinalMessage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-[#FFF5F7] relative overflow-hidden">
      {/* Confetti doodles */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            {['♡', '★', '✨', '♪'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="mb-8"
        >
          <HandDrawnHeart className="w-40 h-40 mx-auto text-[#FF6B9D]" />
        </motion.div>

        <motion.h2
          className="text-6xl md:text-7xl text-[#FF6B9D] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Aku sayang kamu
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <svg className="w-64 h-8 mx-auto mb-8" viewBox="0 0 300 20">
            <path 
              d="M 10 10 Q 75 2, 150 10 T 290 10" 
              fill="none" 
              stroke="#FF6B9D" 
              strokeWidth="3"
              opacity="0.4"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        <motion.div
          className="bg-white p-10 rounded-3xl shadow-2xl transform -rotate-1 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          whileHover={{ rotate: 0 }}
        >
          <p 
            className="text-2xl text-gray-700 leading-relaxed mb-6"
            style={{ fontFamily: 'Patrick Hand, cursive' }}
          >
            Website ini mungkin sederhana dan gak sempurna,
            <br />
            sama kayak aku yang juga gak sempurna.
            <br />
            <br />
            Tapi ada satu hal yang pasti:
            <br />
            <span className="text-3xl text-[#FF6B9D]" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Cintaku padamu tulus dan nyata
            </span>
          </p>

          {/* Tape decorations */}
          <div className="absolute -top-2 left-20 w-20 h-8 bg-[#FFE5B4]/50 transform -rotate-6"></div>
          <div className="absolute -top-2 right-20 w-20 h-8 bg-[#FFD5E5]/50 transform rotate-6"></div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-6 justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="bg-[#FFE5B4] p-6 rounded-2xl shadow-lg transform -rotate-2"
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            <div 
              className="text-4xl text-gray-800 mb-2"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              365+ hari
            </div>
            <div 
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Patrick Hand, cursive' }}
            >
              pengen terus bersamamu
            </div>
          </motion.div>

          <motion.div
            className="bg-[#FFD5E5] p-6 rounded-2xl shadow-lg transform rotate-2"
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            <div 
              className="text-4xl text-gray-800 mb-2"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              ∞ alasan
            </div>
            <div 
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Patrick Hand, cursive' }}
            >
              kenapa aku cinta kamu
            </div>
          </motion.div>

          <motion.div
            className="bg-[#E5F5FF] p-6 rounded-2xl shadow-lg transform -rotate-2"
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            <div 
              className="text-4xl text-gray-800 mb-2"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              1 hati
            </div>
            <div 
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Patrick Hand, cursive' }}
            >
              yang selalu milikmu
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <p 
            className="text-2xl text-[#FF6B9D]"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            Dengan sepenuh hati,
            <br />
            dari orang yang sayang banget sama kamu ♡
          </p>
          
          <motion.div
            className="mt-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-5xl">💕</span>
          </motion.div>
        </motion.div>

        {/* Doodle decoration */}
        <motion.svg 
          className="absolute bottom-10 left-10 w-32 h-32 text-[#FF6B9D]/20"
          viewBox="0 0 100 100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          <text x="50" y="60" textAnchor="middle" fontSize="40">✨</text>
        </motion.svg>
      </div>
    </section>
  );
}
