import { motion } from 'motion/react';
import { ArrowRight, Star, ShoppingBag, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/50 border border-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Rated #1 in Kitengela</span>
            </div>
            
            <h1 className="font-display font-black text-6xl md:text-8xl leading-[1.1] mb-6 text-slate-900 tracking-tighter">
              Cool Happiness <br />
              <span className="text-gradient">In Every Scoop</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              Premium Ice Cream, Yogurt & Milkshakes crafted with love. Experience the most viral flavors in Kitengela today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-pink text-white px-8 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-brand-pink/30 flex items-center justify-center gap-3"
                onClick={() => window.open('https://wa.me/254724052687', '_blank')}
              >
                Order on WhatsApp <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-slate-100 flex items-center justify-center gap-3"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Menu
              </motion.button>
            </div>

            <div className="mt-12 flex items-center gap-6">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=jolly${i}`} alt="Customer" className="w-12 h-12 rounded-full border-4 border-brand-cream" />
                  ))}
               </div>
               <div>
                  <p className="font-bold text-sm text-slate-800">500+ Happy Customers</p>
                  <p className="text-xs text-brand-pink font-bold uppercase tracking-widest">Join the joy!</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-20 ice-cream-float">
              <img 
                src="/src/assets/images/jolly_bells_hero_scoops_1779024345462.png" 
                alt="Delicious Ice Cream" 
                className="w-full max-w-[600px] mx-auto drop-shadow-[0_35px_35px_rgba(255,133,179,0.3)]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Accents */}
            <motion.div 
              animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 z-30 glass p-4 rounded-2xl shadow-2xl rotate-6"
            >
              <div className="flex items-center gap-3">
                <div className="bg-brand-pink/20 p-2 rounded-lg text-brand-pink">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-xs">Fresh Delivery</p>
                  <p className="text-[10px] text-slate-500">Across Kitengela</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-10 left-0 z-30 glass p-4 rounded-2xl shadow-2xl -rotate-6"
            >
              <div className="flex items-center gap-3">
                 <div className="bg-brand-blue/20 p-2 rounded-lg text-brand-blue">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="font-bold text-xs">Visit Store</p>
                   <p className="text-[10px] text-slate-500">Old Namanga Rd</p>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Marquee Social Proof */}
      <div className="absolute bottom-0 left-0 right-0 py-6 bg-white/30 backdrop-blur-sm border-y border-white/50 overflow-hidden">
        <div className="marquee-content gap-12 items-center">
          {Array(10).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-display font-black text-2xl text-slate-300 uppercase italic">Jolly Bells</span>
              <Star className="w-4 h-4 text-brand-pink fill-brand-pink" />
              <span className="font-display font-black text-2xl text-slate-300 uppercase italic">Sweetness</span>
              <Star className="w-4 h-4 text-brand-blue fill-brand-blue" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
