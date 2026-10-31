'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalData.headlineRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-400/10 dark:bg-amber-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 shadow-sm text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300 mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Full-Time &amp; Freelance Opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
            {personalData.name}
          </span>
        </motion.h1>

        {/* Animated Role Rotator */}
        <div className="h-14 sm:h-16 flex items-center justify-center my-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="text-xl sm:text-3xl md:text-4xl font-semibold text-slate-700 dark:text-zinc-300 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-amber-500 hidden sm:inline" />
              <span>{personalData.headlineRoles[roleIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtitle summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed mb-8"
        >
          Crafting scalable, high-performance web applications with <strong>React.js</strong>,{' '}
          <strong>TypeScript</strong>, <strong>Node.js</strong>, and <strong>WebSockets</strong>. 4+
          years of delivering robust full-stack solutions and sub-second real-time platforms.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 dark:bg-amber-400 dark:hover:bg-amber-300 shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-semibold border border-slate-300 dark:border-zinc-700 hover:border-amber-500 dark:hover:border-amber-400 text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all active:scale-95"
          >
            <span>Get in Touch</span>
          </a>

          <a
            href={personalData.resumeUrl}
            download="Pooja_Moukhede_MERN_4years.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm sm:text-base font-medium border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-slate-300 dark:hover:border-zinc-700 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-4 text-slate-500 dark:text-zinc-400"
        >
          <a
            href={personalData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full border border-slate-200 dark:border-zinc-800 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 dark:hover:border-amber-400/40 hover:bg-amber-400/5 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full border border-slate-200 dark:border-zinc-800 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 dark:hover:border-amber-400/40 hover:bg-amber-400/5 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            aria-label="Send an Email"
            className="p-2.5 rounded-full border border-slate-200 dark:border-zinc-800 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 dark:hover:border-amber-400/40 hover:bg-amber-400/5 transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Minimal Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-10 flex justify-center"
        >
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors group"
          >
            <div className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-zinc-700 flex items-start justify-center p-1 group-hover:border-amber-400 transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1.5 rounded-full bg-amber-400"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
