import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Photo {
  url: string;
  caption: string;
  note: string;
  rotation: number;
}

const photos: Photo[] = [
  {
    url: "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NzM5OTI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Sunset bareng",
    note: "Inget ga waktu itu aku bilang 'cantiknya pemandangan', tapi sebenarnya aku liat kamu hehe",
    rotation: -3
  },
  {
    url: "https://images.unsplash.com/photo-1506014299253-3725319c0f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHN8ZW58MXx8fHwxNzczOTQ0ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Gandengan tangan",
    note: "Tanganmu selalu hangat, dan pas digenggam tuh berasa sempurna banget",
    rotation: 2
  },
  {
    url: "https://images.unsplash.com/photo-1614680889829-9b2d25a71be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXN8ZW58MXx8fHwxNzczOTQyNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Dinner romantis",
    note: "Makanannya enak sih, tapi yang paling manis ya tetep kamu ♡",
    rotation: -2
  },
  {
    url: "https://images.unsplash.com/photo-1694503522904-50163a3e7141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwaGVhcnQlMjBib2tlaHxlbnwxfHx8fDE3NzQwMjc0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Cinta kita",
    note: "Seperti cahaya ini, cintaku padamu selalu bersinar terang",
    rotation: 3
  },
];

export function PhotoGallery() {
  return (
    <section id="memories" className="min-h-screen py-20 px-4 bg-[#FFFBF5] relative overflow-hidden">
      {/* Doodles */}
      <div className="absolute top-10 left-10 text-6xl text-[#FF6B9D]/10 rotate-12">♡</div>
      <div className="absolute bottom-20 right-20 text-7xl text-[#FF6B9D]/10 -rotate-12">★</div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl text-[#FF6B9D] mb-4 inline-block relative"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Momen-momen kita
            <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 12">
              <path 
                d="M 5 8 Q 75 2, 150 8 T 295 8" 
                fill="none" 
                stroke="#FF6B9D" 
                strokeWidth="3"
                opacity="0.5"
              />
            </svg>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Polaroid style */}
              <motion.div
                className="bg-white p-4 pb-16 shadow-2xl relative"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 10,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-80 object-cover"
                  />
                </div>
                
                {/* Handwritten caption */}
                <div 
                  className="mt-4 text-xl text-gray-700 text-center"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  {photo.caption}
                </div>

                {/* Tape effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-[#FFE5B4]/50 rotate-1"></div>
              </motion.div>

              {/* Sticky note with personal message */}
              <motion.div
                className="absolute -bottom-6 -right-4 w-48 bg-[#FFE5B4] p-3 shadow-lg transform rotate-3"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
                style={{ fontFamily: 'Patrick Hand, cursive' }}
              >
                <p className="text-sm text-gray-700">{photo.note}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
