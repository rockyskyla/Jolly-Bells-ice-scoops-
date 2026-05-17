import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ShoppingCart, Star, Heart } from 'lucide-react';

export default function Products() {
  const categories = ['All', 'Ice Cream', 'Yogurt', 'Milkshake', 'Refreshments'];
  
  return (
    <section id="products" className="py-24 bg-brand-cream/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-5xl md:text-7xl mb-6 flex flex-col"
          >
            Explore <span className="text-gradient">Our Flavors</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${i === 0 ? 'bg-brand-pink text-white shadow-lg shadow-brand-pink/20' : 'bg-white text-slate-600 border border-slate-100 hover:bg-slate-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass rounded-[2rem] overflow-hidden p-4 h-full flex flex-col h-full hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  {product.isBestSeller && (
                    <div className="absolute top-4 left-4 bg-brand-yellow text-slate-900 font-black text-[10px] uppercase tracking-tighter px-3 py-1 rounded-full shadow-lg">
                      🔥 Most Loved
                    </div>
                  )}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-brand-strawberry transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase text-brand-pink tracking-widest">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-brand-yellow fill-brand-yellow" />
                      <span className="text-xs font-bold">4.9</span>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 text-slate-800">{product.name}</h3>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.flavors?.map((f, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-lg font-medium">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="font-display font-black text-2xl text-slate-900">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-brand-pink transition-colors"
                    onClick={() => window.open(`https://wa.me/254724052687?text=Hello Jolly Bells, I would like to order one ${product.name}`, '_blank')}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
