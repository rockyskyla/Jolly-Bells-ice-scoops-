import { Heart, Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">J</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                Jolly <span className="text-brand-pink">Bells</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8 pr-4">
              Premium dessert business dedicated to bringing cool happiness to the heart of Kitengela. Quality you can taste, joy you can feel.
            </p>
            <div className="flex gap-4">
               {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all">
                    <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          <div>
             <h4 className="font-display font-bold text-xl mb-8">Product Menu</h4>
             <ul className="space-y-4">
                <li><a href="#products" className="text-slate-500 hover:text-brand-pink transition-colors">Luxury Ice Cream</a></li>
                <li><a href="#products" className="text-slate-500 hover:text-brand-pink transition-colors">Frozen Yogurt</a></li>
                <li><a href="#products" className="text-slate-500 hover:text-brand-pink transition-colors">Thick Milkshakes</a></li>
                <li><a href="#products" className="text-slate-500 hover:text-brand-pink transition-colors">Ice Pops & Treats</a></li>
                <li><a href="#products" className="text-slate-500 hover:text-brand-pink transition-colors">Family Combos</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-display font-bold text-xl mb-8">Quick Links</h4>
             <ul className="space-y-4">
                <li><a href="#about" className="text-slate-500 hover:text-brand-pink transition-colors">The Jolly Story</a></li>
                <li><a href="#" className="text-slate-500 hover:text-brand-pink transition-colors">Visit Store</a></li>
                <li><a href="#reviews" className="text-slate-500 hover:text-brand-pink transition-colors">Customer Reviews</a></li>
                <li><a href="#" className="text-slate-500 hover:text-brand-pink transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-500 hover:text-brand-pink transition-colors">Terms of Service</a></li>
             </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-50">
             <h4 className="font-display font-bold text-xl mb-4">We're Open Today!</h4>
             <p className="text-brand-pink font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Kitengela Branch
             </p>
             <div className="space-y-4">
                <p className="text-slate-600 text-sm flex justify-between">
                   <span>Monday - Friday</span> 
                   <span className="font-bold">9am - 8pm</span>
                </p>
                <p className="text-slate-600 text-sm flex justify-between">
                   <span>Saturday</span> 
                   <span className="font-bold">9am - 9pm</span>
                </p>
                <p className="text-slate-100 px-4 py-3 bg-slate-900 rounded-xl flex items-center justify-between text-xs">
                   <span>Need Urgent Delivery?</span>
                   <span className="font-black text-brand-yellow">Call Us!</span>
                </p>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-slate-400 text-sm">
              © 2026 Jolly Bells Ice Scoops. All rights Reserved.
           </p>
           <p className="text-slate-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-brand-strawberry fill-brand-strawberry" /> for Kitengela, Kenya
           </p>
        </div>
      </div>
    </footer>
  );
}
