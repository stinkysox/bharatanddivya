
import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { WEDDING_CONTENT } from '../src/data/weddingContent';

const RSVP: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', guests: '1', attendance: 'yes' });
  const { dates, rsvp } = WEDDING_CONTENT;

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
            className="relative bg-wedding-secondary/10 backdrop-blur-2xl border border-wedding-accent/10 rounded-[40px] p-10 md:p-16 shadow-2xl overflow-hidden"
          >
            <div className="relative text-center mb-12">
              <h2 className="font-royal text-5xl italic mb-4 text-wedding-text">{rsvp.title}</h2>
              <p className="text-wedding-text/40 tracking-widest uppercase text-[10px]">{rsvp.taglinePrefix} {dates.rsvpDeadline}</p>
            </div>

            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.3em] text-wedding-accent ml-4 font-semibold">{rsvp.nameLabel}</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder={rsvp.namePlaceholder}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-wedding-text outline-none focus:border-wedding-accent/50 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-wedding-accent ml-4 font-semibold">{rsvp.guestsLabel}</label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#0d1626] border border-white/10 rounded-2xl py-4 px-6 text-wedding-text outline-none focus:border-wedding-accent/50 transition-colors appearance-none"
                  >
                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-wedding-accent ml-4 font-semibold">{rsvp.attendanceLabel}</label>
                  <select
                    value={formData.attendance}
                    onChange={e => setFormData({ ...formData, attendance: e.target.value })}
                    className="w-full bg-[#0d1626] border border-white/10 rounded-2xl py-4 px-6 text-wedding-text outline-none focus:border-wedding-accent/50 transition-colors appearance-none"
                  >
                    <option value="yes">{rsvp.attendanceOptions.yes}</option>
                    <option value="no">{rsvp.attendanceOptions.no}</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01, backgroundColor: '#b38f4d' }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-wedding-accent text-black font-bold uppercase tracking-[0.2em] text-[11px] py-5 rounded-2xl flex items-center justify-center gap-3 mt-10"
              >
                <Send size={14} />
                {rsvp.buttonLabel}
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-16 bg-wedding-secondary/10 backdrop-blur-2xl border border-wedding-accent/10 rounded-[40px]"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-wedding-accent/10 border border-wedding-accent/30 text-wedding-accent mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="font-royal text-5xl italic mb-4 text-wedding-text">{rsvp.successTitle}</h2>
            <p className="text-wedding-text/60 text-lg font-light leading-relaxed">
              {rsvp.successMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RSVP;
