import { motion } from 'motion/react';
import { ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className={`glass rounded-2xl flex items-center justify-between px-6 py-3 transition-all duration-300 ${isScrolled ? 'bg-white/80' : 'bg-white/40'}`}>
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-brand-pink/30">
              <span className="text-white font-display font-bold text-xl">J</span>
            </div>
            <span className="font-display font-bold text-xl hidden sm:block tracking-tight">
              Jolly <span className="text-brand-pink">Bells</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-700 hover:text-brand-pink transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-pink text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg shadow-brand-pink/20 hidden sm:block"
              onClick={() => window.open('https://wa.me/254724052687', '_blank')}
            >
              Order Now
            </motion.button>
            
            <button 
              className="md:hidden p-2 text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 md:hidden z-40"
        >
          <div className="glass rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-display font-bold text-lg text-slate-800 border-b border-slate-100 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              className="bg-brand-pink text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              onClick={() => window.open('https://wa.me/254724052687', '_blank')}
            >
              Order on WhatsApp
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
