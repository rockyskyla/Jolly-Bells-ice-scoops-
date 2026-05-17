import { motion } from 'motion/react';
import { RefreshCcw, Heart, Smile, Zap, Users, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    { title: 'Fresh Daily', icon: RefreshCcw, desc: 'Made fresh every morning using the highest quality Kenyan dairy.' },
    { title: 'Affordable', icon: Zap, desc: 'Premium luxury tastes at localized Kitengela prices everyone loves.' },
    { title: 'Family Friendly', icon: Users, desc: 'The perfect weekend spot for parents and joyful kids alike.' },
    { title: 'Premium Quality', icon: Heart, desc: 'We only serve what we would proudly feed our own families.' },
    { title: 'Fast Service', icon: Zap, desc: 'Zero wait time. Grab your scoop and enjoy the cool happiness.' },
    { title: 'Pure Joy', icon: Smile, desc: 'Our mission is to bring a smile to every face in Kitengela.' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="relative z-10 rounded-[3rem] overflow-hidden rotate-2 group">
                <img 
                  src="/src/assets/images/jolly_bells_shop_ambiance_1779024400444.png" 
                  alt="Our Shop" 
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -right-10 glass rounded-3xl p-8 shadow-2xl z-20 max-w-[280px] -rotate-2">
                <p className="font-serif italic text-2xl text-slate-800 mb-2">"Freshness is our secret ingredient"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-brand-pink" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500">The Jolly Promise</span>
                </div>
             </div>
          </motion.div>

          <div>
             <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-5xl md:text-7xl mb-12 text-slate-900 leading-tight"
            >
              Why Kitengela <span className="text-brand-pink">Loves Us</span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:bg-brand-pink group-hover:text-white transition-all cursor-default">
                    <f.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 text-slate-800">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
