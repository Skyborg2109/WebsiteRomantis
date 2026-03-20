import { motion } from 'motion/react';

const quotes = [
  {
    text: "Aku gak bisa janji sempurna, tapi aku janji akan selalu ada buat kamu",
    color: "#FFE5B4",
    rotation: -2
  },
  {
    text: "Kamu tau gak? Setiap kali liat notif dari kamu, aku selalu senyum sendiri",
    color: "#FFD5E5",
    rotation: 3
  },
  {
    text: "Kadang aku mikir, gimana ya rasanya hidup tanpa kamu? Tapi aku gak mau tau, karena aku mau selamanya sama kamu",
    color: "#E5F5FF",
    rotation: -3
  },
  {
    text: "Terima kasih udah nerima aku apa adanya, dengan semua kekurangan dan kelebihan aku",
    color: "#F0E5FF",
    rotation: 2
  },
];

export function LoveQuotes() {
  return (
    <section className="min-h-screen py-20 px-4 bg-[#FFFBF5] relative overflow-hidden">
      {/* Cork board texture effect */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-5xl md:text-6xl text-[#FF6B9D] mb-4 inline-block relative"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Yang pengen aku bilang ke kamu
          </h2>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-3 h-3 bg-[#FF6B9D] rounded-full"></div>
            <div className="w-3 h-3 bg-[#FF6B9D] rounded-full"></div>
            <div className="w-3 h-3 bg-[#FF6B9D] rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: quote.rotation }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <motion.div
                className="p-8 shadow-2xl relative min-h-[200px] flex items-center justify-center"
                style={{ 
                  backgroundColor: quote.color,
                }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Pin effect */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg relative">
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gray-400 to-gray-200"></div>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-400"></div>
                </div>

                <p 
                  className="text-xl text-gray-800 leading-relaxed text-center relative z-10"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  "{quote.text}"
                </p>

                {/* Paper texture */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
                }}></div>

                {/* Handwritten lines effect */}
                <svg className="absolute bottom-4 left-8 right-8 h-1 opacity-20">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="#000" strokeWidth="2" />
                </svg>
              </motion.div>

              {/* Shadow effect for depth */}
              <div 
                className="absolute inset-0 -z-10 transform translate-x-1 translate-y-1 opacity-30"
                style={{ backgroundColor: quote.color }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Hand-drawn arrows pointing to notes */}
        <motion.div
          className="absolute -bottom-10 right-20 text-[#FF6B9D]/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <svg width="100" height="80" viewBox="0 0 100 80">
            <path 
              d="M 10 10 Q 30 40, 60 60 L 55 55 M 60 60 L 50 58" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
