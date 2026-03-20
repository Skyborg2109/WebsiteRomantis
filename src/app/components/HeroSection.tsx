import { motion } from 'motion/react';
import { HandDrawnHeart } from './HandDrawnHeart';
import { Scribble } from './Scribble';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#FFF5F7]">
      {/* Doodles background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl rotate-12">♡</div>
        <div className="absolute top-40 right-20 text-4xl -rotate-6">✨</div>
        <div className="absolute bottom-20 left-40 text-5xl rotate-45">★</div>
        <div className="absolute top-1/3 right-1/4 text-3xl -rotate-12">♪</div>
        <div className="absolute bottom-1/3 right-1/3 text-4xl rotate-6">☁</div>
      </div>

      {/* Sticky notes scattered */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-[#FFE5B4] p-4 shadow-lg transform rotate-6"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 6 }}
        transition={{ delay: 0.5, type: "spring" }}
        style={{ fontFamily: 'Caveat, cursive' }}
      >
        <p className="text-lg text-gray-700">Aku suka senyumanmu ♡</p>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-10 w-40 h-40 bg-[#FFD5E5] p-4 shadow-lg transform -rotate-3"
        initial={{ scale: 0, rotate: 20 }}
        animate={{ scale: 1, rotate: -3 }}
        transition={{ delay: 0.7, type: "spring" }}
        style={{ fontFamily: 'Caveat, cursive' }}
      >
        <p className="text-lg text-gray-700">Kamu adalah segalanya ✨</p>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <HandDrawnHeart className="w-32 h-32 mx-auto text-[#FF6B9D]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 
            className="text-6xl md:text-7xl mb-4 text-[#FF6B9D]"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Untuk Sayangku
          </h1>
          <Scribble className="w-64 h-8 mx-auto text-[#FF6B9D] mb-6" />
        </motion.div>

        <motion.p
          className="text-2xl text-gray-700 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ fontFamily: 'Patrick Hand, cursive' }}
        >
          Ini website sederhana yang kubuat khusus untukmu,
          <br />
          karena kamu selalu spesial di hatiku
        </motion.p>

        <motion.button
          className="px-8 py-3 bg-[#FF6B9D] text-white rounded-full text-xl shadow-lg transform -rotate-1 hover:rotate-0 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ fontFamily: 'Caveat, cursive' }}
        >
          Lihat Kenangan Kita ♡
        </motion.button>

        <motion.div
          className="mt-16 text-[#FF6B9D] text-3xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ fontFamily: 'Patrick Hand, cursive' }}
        >
          scroll kebawah yaa
        </motion.div>
      </div>
    </section>
  );
}
