import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { awards } from '../data';
import { Award, X } from 'lucide-react';

export default function Awards() {
  const [lightbox, setLightbox] = useState<{ image: string; title: string } | null>(null);

  return (
    <section id="awards" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937]">获奖记录</h2>
          <div className="w-16 h-1 bg-[#4CAF50] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#6B7280]">荣誉与证书</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white border border-gray-100 hover:shadow-xl transition-shadow"
              onClick={() => setLightbox({ image: award.image, title: award.title })}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(award.title)}&background=4CAF50&color=fff&size=400`;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-[#4CAF50] mb-1">
                  <Award size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">荣誉证书</span>
                </div>
                <h3 className="text-white font-bold text-lg">{award.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox 灯箱 */}
        <AnimatePresence>
          {lightbox && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute -top-12 right-0 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-10"
                  aria-label="关闭"
                >
                  <X size={28} />
                </button>
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(lightbox.title)}&background=4CAF50&color=fff&size=800`;
                  }}
                />
                <p className="text-white text-center mt-4 font-medium">{lightbox.title}</p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
