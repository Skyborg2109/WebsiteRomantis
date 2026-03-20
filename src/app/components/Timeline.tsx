import { motion } from 'motion/react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
}

const events: TimelineEvent[] = [
  {
    date: "Hari yang gak akan pernah kulupain",
    title: "Pertama kali ketemu",
    description: "Jujur aku nervous banget waktu itu, tapi begitu lihat senyum kamu, semua jadi terasa lebih mudah. Dari situ aku udah tau kalo kamu spesial.",
    emoji: "💫",
    color: "#FFE5B4"
  },
  {
    date: "Detik-detik yang bikin deg-degan",
    title: "Kencan pertama kita",
    description: "Inget ga kita ngobrol sampe lupa waktu? Aku pulang malem tapi seneng banget. Rasanya pengen terus ngobrol sama kamu.",
    emoji: "☕",
    color: "#FFD5E5"
  },
  {
    date: "Hari paling bahagia",
    title: "Jadian!",
    description: "Waktu kamu bilang iya, rasanya dunia berhenti sejenak. Aku gak nyangka orang sespesial kamu mau jadi pacarku. Thank you udah percaya sama aku.",
    emoji: "💕",
    color: "#E5F5FF"
  },
  {
    date: "Sekarang dan seterusnya",
    title: "Setiap hari bersamamu",
    description: "Gak ada hari yang sempurna, tapi setiap hari jadi lebih baik karena ada kamu. Makasih udah sabar sama aku, makasih udah jadi alasan aku tersenyum setiap hari.",
    emoji: "🌟",
    color: "#F0E5FF"
  },
];

export function Timeline() {
  return (
    <section className="min-h-screen py-20 px-4 bg-[#FFF5F7] relative">
      {/* Decorative doodles */}
      <div className="absolute top-20 right-10 text-5xl text-[#FF6B9D]/10 rotate-12">♪</div>
      <div className="absolute bottom-40 left-10 text-6xl text-[#FF6B9D]/10 -rotate-12">♡</div>

      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl text-[#FF6B9D] text-center mb-16 relative inline-block w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Cerita kita
          <motion.svg 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-4" 
            viewBox="0 0 200 12"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <path 
              d="M 5 8 Q 50 2, 100 8 T 195 8" 
              fill="none" 
              stroke="#FF6B9D" 
              strokeWidth="3"
              opacity="0.5"
            />
          </motion.svg>
        </motion.h2>

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className={`bg-white p-6 rounded-3xl shadow-xl relative transform ${
                  index % 2 === 0 ? '-rotate-1' : 'rotate-1'
                }`}
                style={{ backgroundColor: event.color }}
                whileHover={{ rotate: 0, scale: 1.02 }}
              >
                {/* Emoji sticker */}
                <div className="absolute -top-4 -right-4 text-5xl transform rotate-12 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  {event.emoji}
                </div>

                <div 
                  className="text-sm text-gray-600 mb-2"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  {event.date}
                </div>
                
                <h3 
                  className="text-3xl text-gray-800 mb-3"
                  style={{ fontFamily: 'Dancing Script, cursive' }}
                >
                  {event.title}
                </h3>
                
                <p 
                  className="text-lg text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Patrick Hand, cursive' }}
                >
                  {event.description}
                </p>

                {/* Hand-drawn border */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ borderRadius: '1.5rem' }}>
                  <rect 
                    x="4" 
                    y="4" 
                    width="calc(100% - 8px)" 
                    height="calc(100% - 8px)" 
                    fill="none" 
                    stroke="#000" 
                    strokeWidth="1" 
                    opacity="0.1"
                    rx="24"
                    style={{
                      filter: 'url(#roughen)'
                    }}
                  />
                  <defs>
                    <filter id="roughen">
                      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="1" />
                      <feDisplacementMap in="SourceGraphic" scale="1" />
                    </filter>
                  </defs>
                </svg>

                {/* Tape decoration */}
                <div className="absolute -top-1 left-1/4 w-16 h-6 bg-white/40 transform -rotate-3"></div>
              </motion.div>

              {/* Connecting line (hand-drawn style) */}
              {index < events.length - 1 && (
                <motion.div
                  className="flex justify-center my-4"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <div className="w-1 h-12 bg-[#FF6B9D]/30 rounded-full"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
