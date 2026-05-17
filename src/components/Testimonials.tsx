import { motion } from 'motion/react';
import { Star, MessageCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-pink/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-black text-5xl md:text-7xl mb-6">
              Hear The <span className="text-brand-pink">Happiness</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl">
              Don't just take our word for it. Here's why our neighbors keep coming back for more.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2.5rem] relative group hover:bg-white/10 transition-all"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-brand-pink/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>

              <p className="text-lg text-slate-200 mb-8 font-medium leading-relaxed italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-pink/50" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-black">Verified Buyer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-brand-pink text-white px-10 py-5 rounded-3xl font-black text-xl shadow-2xl shadow-brand-pink/20"
              onClick={() => window.open('https://wa.me/254724052687', '_blank')}
            >
              Join Our Happy Customers <MessageCircle className="w-6 h-6" />
            </motion.button>
        </div>
      </div>
    </section>
  );
}
