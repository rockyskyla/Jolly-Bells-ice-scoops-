import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Location() {
  const hours = [
    { day: 'Mon - Fri', time: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 7:00 PM' },
  ];

  return (
    <section id="location" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-4">
        <div className="glass rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
             <div className="p-12 lg:p-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-brand-pink font-black uppercase tracking-[0.2em] text-xs mb-4 block">Visit The Store</span>
                  <h2 className="font-display font-black text-5xl md:text-6xl mb-10 text-slate-900">
                    Find Us <br />in <span className="text-gradient">Kitengela</span>
                  </h2>

                  <div className="space-y-8">
                     <div className="flex gap-6 group">
                        <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-pink transition-colors">
                          <MapPin className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl mb-1">Our Address</h4>
                          <p className="text-slate-600 font-medium">Old Namanga Road near Rontech Meleta Hospital, Kitengela</p>
                        </div>
                     </div>

                     <div className="flex gap-6 group">
                        <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors">
                          <Clock className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl mb-4">Opening Hours</h4>
                          <div className="space-y-2">
                             {hours.map((h, i) => (
                               <div key={i} className="flex justify-between items-center bg-white/50 px-4 py-2 rounded-xl">
                                  <span className="text-slate-500 text-sm font-bold">{h.day}</span>
                                  <span className="text-slate-800 text-sm font-black">{h.time}</span>
                               </div>
                             ))}
                          </div>
                        </div>
                     </div>

                     <div className="flex gap-6 group">
                        <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-yellow transition-colors">
                          <Phone className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl mb-1">Get In Touch</h4>
                          <p className="text-slate-600 font-medium">+254 724 052 687</p>
                          <p className="text-slate-600 font-medium">+254 759 441 757</p>
                        </div>
                     </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 bg-slate-900 text-white px-10 py-5 rounded-3xl font-black text-lg flex items-center gap-3 w-full sm:w-auto"
                    onClick={() => window.open('https://www.google.com/maps/search/Rontech+Meleta+Hospital+Kitengela', '_blank')}
                  >
                    Get Directions <Navigation className="w-5 h-5 fill-white" />
                  </motion.button>
                </motion.div>
             </div>

             <div className="relative h-[400px] lg:h-auto min-h-[500px] bg-slate-100">
                {/* Embedded Map Simulation - In a real app we'd use Google Maps Embed */}
                <div className="absolute inset-0 bg-brand-blue/10 flex items-center justify-center p-8">
                   <div className="glass rounded-3xl p-10 text-center max-w-sm">
                      <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl ice-cream-float">
                        <MapPin className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-display font-black text-2xl mb-4">You're almost there!</h3>
                      <p className="text-slate-500 mb-8">We're located conveniently near Rontech Meleta Hospital. Look for the colorful Jolly Bells sign!</p>
                      <img 
                        src="/src/assets/images/jolly_bells_shop_ambiance_1779024400444.png" 
                        alt="Shop exterior" 
                        className="rounded-2xl shadow-xl w-full h-48 object-cover"
                        referrerPolicy="no-referrer"
                      />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
