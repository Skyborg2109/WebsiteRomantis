import { motion } from 'motion/react';
import { useState } from 'react';

interface Memory {
  emoji: string;
  title: string;
  description: string;
  color: string;
}

const memories: Memory[] = [
  {
    emoji: "🎂",
    title: "Ulang tahun bareng",
    description: "Waktu kamu nyanyi happy birthday sambil bawa kue, itu momen paling sweet!",
    color: "#FFE5B4"
  },
  {
    emoji: "🌙",
    title: "Ngobrol sampai pagi",
    description: "Video call 8 jam lebih, ngobrol tentang segala hal. Gak terasa waktu berlalu.",
    color: "#FFD5E5"
  },
  {
    emoji: "🎬",
    title: "Nonton bareng",
    description: "Film nya seru, tapi yang lebih seru liat ekspresi kamu pas nonton hehe",
    color: "#E5F5FF"
  },
  {
    emoji: "☔",
    title: "Kehujanan bareng",
    description: "Kita kehujanan tapi malah ketawa-ketawa. Sejak saat itu aku suka hujan.",
    color: "#F0E5FF"
  },
  {
    emoji: "🎵",
    title: "Dengerin musik bareng",
    description: "Lagu-lagu yang kita share ke satu sama lain jadi soundtrack kehidupan kita.",
    color: "#FFE5E5"
  },
  {
    emoji: "🍕",
    title: "Makan bareng pertama",
    description: "Aku masih inget apa yang kamu pesen. Dari situ aku mulai hafal kesukaan kamu.",
    color: "#FFFACD"
  },
];

export function MemoryBox() {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-20 px-4 bg-[#FFF5F7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-5xl md:text-6xl text-[#FF6B9D] mb-4 relative inline-block"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Kotak kenangan kita
          </h2>
          <p 
            className="text-xl text-gray-600 mt-6"
            style={{ fontFamily: 'Patrick Hand, cursive' }}
          >
            Klik box-nya untuk buka kenangan yang tersimpan!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 10 - 5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="relative cursor-pointer perspective-1000"
                onClick={() => setSelectedMemory(selectedMemory === index ? null : index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Box front */}
                <motion.div
                  className="w-full h-48 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: memory.color }}
                  animate={{
                    rotateY: selectedMemory === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {selectedMemory !== index ? (
                    <>
                      <div className="text-6xl">{memory.emoji}</div>
                      {/* Gift ribbon */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/30"></div>
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1 bg-white/30"></div>
                      
                      {/* Bow */}
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 bg-white/40 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-2 bg-white/40 rounded-full"></div>
                      </div>
                    </>
                  ) : (
                    <motion.div
                      className="p-4 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      <h3 
                        className="text-lg mb-2 text-gray-800"
                        style={{ fontFamily: 'Caveat, cursive' }}
                      >
                        {memory.title}
                      </h3>
                      <p 
                        className="text-sm text-gray-700"
                        style={{ fontFamily: 'Patrick Hand, cursive' }}
                      >
                        {memory.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>

                {/* Shadow */}
                <div 
                  className="absolute inset-0 -z-10 rounded-2xl transform translate-y-2"
                  style={{ backgroundColor: memory.color, opacity: 0.3, filter: 'blur(8px)' }}
                ></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white p-8 rounded-3xl shadow-xl inline-block transform -rotate-1">
            <p 
              className="text-2xl text-gray-700 mb-3"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              Dan masih banyak lagi kenangan yang akan kita buat bersama...
            </p>
            <p 
              className="text-xl text-[#FF6B9D]"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              Excited untuk bikin lebih banyak kenangan sama kamu! ♡
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
