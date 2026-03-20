import { motion } from 'motion/react';
import { useState } from 'react';

export function InteractiveCard() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#FFE5B4] to-[#FFD5E5] relative overflow-hidden">
      {/* Floating hearts */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl text-white/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          ♡
        </motion.div>
      ))}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl text-[#FF6B9D] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Ada kejutan kecil nih buat kamu
        </motion.h2>

        <motion.p
          className="text-xl text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: 'Patrick Hand, cursive' }}
        >
          Scratch kartu di bawah ini untuk baca pesannya!
        </motion.p>

        <motion.div
          className="relative w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white p-8 rounded-3xl shadow-2xl relative transform -rotate-1">
            {/* Scratch card effect */}
            <motion.div
              className="relative h-64 flex items-center justify-center cursor-pointer"
              onClick={() => setIsRevealed(!isRevealed)}
            >
              {/* Hidden message */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: isRevealed ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <p 
                  className="text-2xl text-gray-800 leading-relaxed"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  "Kamu tau gak? Dari sekian banyak orang di dunia ini, aku paling beruntung karena bisa punya kamu. 
                  Kamu adalah hadiah terindah dalam hidupku! ♡"
                </p>
              </motion.div>

              {/* Scratch layer */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #FFE5B4 0%, #FFD5E5 100%)',
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: isRevealed ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-6xl mb-4 block">🎁</span>
                  </motion.div>
                  <p 
                    className="text-xl text-gray-700"
                    style={{ fontFamily: 'Caveat, cursive' }}
                  >
                    {isRevealed ? '' : 'Klik untuk buka!'}
                  </p>
                </div>

                {/* Scratch texture */}
                {!isRevealed && (
                  <div 
                    className="absolute inset-0 opacity-20 rounded-2xl"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                )}
              </motion.div>
            </motion.div>

            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-[#FF6B9D] rounded-tl-lg"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-[#FF6B9D] rounded-tr-lg"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-[#FF6B9D] rounded-bl-lg"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-[#FF6B9D] rounded-br-lg"></div>
          </div>

          {isRevealed && (
            <motion.p
              className="text-center mt-4 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              Klik lagi untuk tutup
            </motion.p>
          )}
        </motion.div>

        <motion.div
          className="mt-12 bg-white/50 backdrop-blur-sm p-6 rounded-2xl transform rotate-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p 
            className="text-lg text-gray-700"
            style={{ fontFamily: 'Patrick Hand, cursive' }}
          >
            P.S: Masih ada surprise lain lagi di bawah, scroll terus ya! 😊
          </p>
        </motion.div>
      </div>
    </section>
  );
}
