'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export function Footer() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1 text-xl font-bold text-slate-900 dark:text-white mb-1">
              <span>Pooja</span>
              <span className="text-amber-500">.</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Pooja Moukhede. Built with Next.js &amp; Tailwind CSS.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              aria-label="Email"
              className="p-2 rounded-full border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top inline */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 p-2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-amber-400 hover:text-slate-900 dark:hover:bg-amber-400 dark:hover:text-slate-900 transition-all shadow-sm active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showFloating && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full border border-slate-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 text-slate-700 dark:text-zinc-200 shadow-xl backdrop-blur-md hover:bg-amber-400 hover:text-slate-950 dark:hover:bg-amber-400 dark:hover:text-slate-950 hover:border-amber-400 transition-all active:scale-90"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
