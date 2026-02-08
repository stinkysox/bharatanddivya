
import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { WEDDING_CONTENT } from '../src/data/weddingContent';

const RSVP: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', guests: '1', attendance: 'yes' });
  const { dates } = WEDDING_CONTENT;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-2xl relative">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 md:p-16 shadow-2xl overflow-hidden"
          >
            <div className="relative text-center mb-12">
              <h2 className="font-royal text-5xl italic mb-4">Will you join us?</h2>
              <p className="text-[#f8f8f8]/40 tracking-widest uppercase text-[10px]">Please RSVP by {dates.rsvpDeadline}</p>
            </div>

            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.3em] text-[#c5a059] ml-4 font-semibold">Your Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-[#f8f8f8] outline-none focus:border-[#c5a059]/50 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-[#c5a059] ml-4 font-semibold">Number of Guests</label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl py-4 px-6 text-[#f8f8f8] outline-none focus:border-[#c5a059]/50 transition-colors appearance-none"
                  >
                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-[#c5a059] ml-4 font-semibold">Attending?</label>
                  <select
                    value={formData.attendance}
                    onChange={e => setFormData({ ...formData, attendance: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl py-4 px-6 text-[#f8f8f8] outline-none focus:border-[#c5a059]/50 transition-colors appearance-none"
                  >
                    <option value="yes">Yes, I'll be there</option>
                    <option value="no">Sadly, I can't come</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01, backgroundColor: '#d4b370' }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-[#c5a059] text-black font-bold uppercase tracking-[0.2em] text-[11px] py-5 rounded-2xl flex items-center justify-center gap-3 mt-10"
              >
                <Send size={14} />
                Send RSVP
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-16 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px]"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="font-royal text-5xl italic mb-4">Thank You</h2>
            <p className="text-[#f8f8f8]/60 text-lg font-light leading-relaxed">
              We have received your response. We look forward to celebrating with you!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RSVP;
