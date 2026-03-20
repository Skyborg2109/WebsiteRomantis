import { motion } from 'motion/react';
import { LoveLetter } from './LoveLetter';

const letters = [
  {
    title: "Surat untuk kamu",
    message: `Sayang,

Setiap hari aku bersyukur karena ada kamu di hidupku. Kamu bukan cuma pacar, tapi juga sahabat terbaik yang selalu ada.

Terima kasih udah sabar dengerin aku ngomel, dengerin curhatan aku yang kadang gak penting, dan tetap stay meskipun aku lagi moody.

Aku janji akan terus berusaha jadi yang terbaik buat kamu.`,
    from: "Yang selalu mikirin kamu",
    envelopeColor: "#FFE5B4"
  },
  {
    title: "Pesan spesial",
    message: `Hai sayangku,

Tau gak sih? Setiap kali kamu senyum, dunia aku jadi lebih cerah. Setiap kali kamu ketawa, aku pengen terus bikin kamu bahagia.

Mungkin aku gak sempurna, masih banyak kekurangan. Tapi satu hal yang pasti: cintaku buat kamu tulus dari hati.

Makasih udah mau jadi bagian dari hidup aku.`,
    from: "Orang yang paling sayang sama kamu",
    envelopeColor: "#FFD5E5"
  },
  {
    title: "Dari hatiku",
    message: `My love,

Kadang aku suka mikir, gimana ya caranya aku bisa dapet kamu? Apa jasa baik aku di kehidupan sebelumnya sampe bisa ketemu sama orang sebaik kamu?

Kamu itu istimewa banget. Cara kamu perhatiin orang, cara kamu peduli, semua itu bikin aku makin sayang.

I'm so lucky to have you in my life.`,
    from: "Yours forever",
    envelopeColor: "#E5F5FF"
  },
];

export function LoveLetters() {
  return (
    <section className="min-h-screen py-20 px-4 bg-[#FFFBF5] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-5xl text-[#FF6B9D]/10 rotate-12">✉️</div>
      <div className="absolute bottom-20 right-20 text-6xl text-[#FF6B9D]/10 -rotate-12">💌</div>

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
            Surat-surat untuk kamu
            <motion.svg 
              className="absolute -bottom-2 left-0 w-full h-4" 
              viewBox="0 0 300 12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <path 
                d="M 5 8 Q 75 2, 150 8 T 295 8" 
                fill="none" 
                stroke="#FF6B9D" 
                strokeWidth="3"
                opacity="0.5"
              />
            </motion.svg>
          </h2>
          <p 
            className="text-xl text-gray-600 mt-8"
            style={{ fontFamily: 'Patrick Hand, cursive' }}
          >
            Aku tulis beberapa surat buat kamu, buka satu-satu ya!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-20">
          {letters.map((letter, index) => (
            <LoveLetter
              key={index}
              title={letter.title}
              message={letter.message}
              from={letter.from}
              envelopeColor={letter.envelopeColor}
              delay={index * 0.2}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p 
            className="text-2xl text-[#FF6B9D]"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            Masih banyak lagi yang pengen aku bilang, tapi nanti aja ya pas ketemu langsung ♡
          </p>
        </motion.div>
      </div>
    </section>
  );
}
