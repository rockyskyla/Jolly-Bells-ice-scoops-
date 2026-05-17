import { motion } from 'motion/react';
import { Sparkles, Brain, IceCream } from 'lucide-react';
import { useState } from 'react';

export default function FlavorAI() {
  const [mood, setMood] = useState('');
  const [preference, setPreference] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ recommendation: string, flavors: string[] } | null>(null);

  const moods = ['Happy', 'Stressed', 'Romantic', 'Adventurous', 'Relaxed'];
  
  const getRecommendation = async () => {
    if (!mood || !preference) return;
    setLoading(true);
    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood, preference })
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
            <Brain className="w-64 h-64 text-brand-purple" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full mb-6 italic font-bold text-sm">
                <Sparkles className="w-4 h-4" /> AI Flavor Assistant
              </div>
              <h2 className="font-display font-black text-5xl mb-6 text-slate-900">
                Can't Decide? <br /><span className="text-brand-purple">Let AI Choose!</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Tell us how you're feeling and your taste preference, and our smart assistant will predict your perfect Jolly Bells combination.
              </p>
              
              <div className="space-y-10">
                <div>
                   <label className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4 block">How's your mood?</label>
                   <div className="flex flex-wrap gap-2">
                      {moods.map(m => (
                        <button
                          key={m}
                          onClick={() => setMood(m)}
                          className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${mood === m ? 'bg-brand-purple text-white shadow-xl' : 'bg-white border border-slate-100 text-slate-600 hover:border-brand-purple/30'}`}
                        >
                          {m}
                        </button>
                      ))}
                   </div>
                </div>

                <div>
                   <label className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4 block">Taste Preference</label>
                   <input 
                    type="text" 
                    placeholder="e.g. Sweet & Crunchy, Fruity, Chocolatey..." 
                    className="w-full bg-white border border-slate-100 px-6 py-4 rounded-2xl text-slate-800 font-medium focus:outline-none focus:ring-4 focus:ring-brand-purple/10 transition-all"
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
                   />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading || !mood || !preference}
                  onClick={getRecommendation}
                  className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {loading ? 'Consulting the Flavor Gods...' : result ? 'Get New Advice' : 'Predict My Perfection'}
                </motion.button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              {result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  className="glass bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(157,114,255,0.2)] border-2 border-brand-purple/20 text-center w-full"
                >
                  <div className="w-20 h-20 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <IceCream className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display font-black text-3xl mb-6 text-brand-purple">Your Jolly Match!</h3>
                  <p className="text-slate-600 italic text-lg leading-relaxed mb-8">
                    "{result.recommendation}"
                  </p>
                  <div className="flex justify-center gap-3">
                    {result.flavors.map(f => (
                      <span key={f} className="bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-xl font-black text-xs uppercase tracking-tighter">
                        {f}
                      </span>
                    ))}
                  </div>
                  <button 
                    className="mt-10 text-brand-purple font-black text-sm uppercase tracking-widest hover:underline"
                    onClick={() => window.open(`https://wa.me/254724052687?text=The AI recommended the ${result.flavors.join(' & ')} combo to me! I want to order that.`, '_blank')}
                  >
                    Order this Combo Now →
                  </button>
                </motion.div>
              ) : (
                <div className="text-center p-12 border-2 border-dashed border-brand-purple/10 rounded-[3rem] w-full">
                  <div className="mb-6 opacity-30">
                     <Brain className="w-24 h-24 mx-auto text-brand-purple animate-pulse" />
                  </div>
                  <p className="text-slate-400 font-medium italic">Fill your mood & preference to see the AI magic.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
