import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3"
    >
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3 }}
        className="glass px-4 py-2 rounded-2xl shadow-2xl mb-2 hidden sm:block"
      >
        <p className="text-[10px] font-black uppercase text-brand-pink tracking-widest text-center">Chat with us</p>
        <p className="text-sm font-bold text-slate-800">Hungry for ice cream?</p>
      </motion.div>
      
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] relative"
        onClick={() => window.open('https://wa.me/254724052687?text=Hello Jolly Bells!', '_blank')}
      >
        <MessageCircle className="w-9 h-9 fill-white" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-strawberry rounded-full border-2 border-white animate-pulse" />
      </motion.button>
    </motion.div>
  );
}
