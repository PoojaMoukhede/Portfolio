'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { experiences } from '@/data/portfolioData';

const AUTO_SLIDE_INTERVAL = 5500;

export function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const currentExp = experiences[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  }, []);

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Smooth auto-slide effect
  React.useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Smooth slide & fade animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
        opacity: { duration: 0.35, ease: 'easeInOut' },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -20 : 20,
      opacity: 0,
      transition: {
        x: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
        opacity: { duration: 0.25, ease: 'easeInOut' },
      },
    }),
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/5 dark:bg-amber-400/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-amber-500 uppercase mb-2 flex items-center justify-center gap-1.5">
            <Briefcase className="w-4 h-4 text-amber-500" />
            <span>Career Milestones</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-4">
            Hands-on software engineering delivering high-concurrency real-time trading feeds, scalable ed-tech platforms, and enterprise administrative suites.
          </p>
        </div>

        {/* Carousel Outer Wrapper with Left & Right Navigation Arrows */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous experience"
            className="absolute -left-3 sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full border border-slate-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 text-slate-700 dark:text-zinc-300 hover:border-amber-400 hover:text-amber-500 dark:hover:border-amber-400 dark:hover:text-amber-400 shadow-lg backdrop-blur-md transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next experience"
            className="absolute -right-3 sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full border border-slate-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 text-slate-700 dark:text-zinc-300 hover:border-amber-400 hover:text-amber-500 dark:hover:border-amber-400 dark:hover:text-amber-400 shadow-lg backdrop-blur-md transition-all active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Minimal Slide Card (No top bar, no footer inside) */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative rounded-3xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/95 shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative overflow-hidden min-h-[460px] sm:min-h-[380px] lg:min-h-[350px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentExp.company}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="p-6 sm:p-10 lg:p-12 h-full flex flex-col justify-center"
                >
                  {/* 2-Column Minimal Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start h-full">
                    {/* ======================================================== */}
                    {/* LEFT COLUMN: Company Name, Role, Duration, Technologies */}
                    {/* ======================================================== */}
                    <div className="lg:col-span-5 space-y-6 lg:border-r border-slate-100 dark:border-zinc-800/80 lg:pr-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                          {currentExp.company}
                        </h3>
                        <p className="text-base sm:text-lg font-semibold text-amber-500 dark:text-amber-400 mt-1">
                          {currentExp.role}
                        </p>

                        {/* Clean Duration & Location Metadata */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-3">
                          <span className="inline-flex items-center gap-1.5 font-medium">
                            <Calendar className="w-3.5 h-3.5 text-amber-500" />
                            <span>{currentExp.period}</span>
                          </span>
                          <span className="text-slate-300 dark:text-zinc-700">•</span>
                          <span className="inline-flex items-center gap-1.5 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-amber-500" />
                            <span>{currentExp.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Technologies Tag Cloud */}
                      <div className="pt-1">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                          Technologies
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {currentExp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-medium rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/70 text-slate-700 dark:text-zinc-300 hover:border-amber-400/70 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ======================================================== */}
                    {/* RIGHT COLUMN: 3 Aligned Highlights & Live Demos         */}
                    {/* ======================================================== */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
                      {currentExp.highlights?.map((item, idx) => (
                        <div
                          key={idx}
                          className="pb-3 border-b border-slate-100 dark:border-zinc-800/80 last:border-0 last:pb-0"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                              <span>{item.title}</span>
                            </h4>

                            {item.demos && item.demos.length > 0 && (
                              <div className="flex items-center gap-2">
                                {item.demos.map((d) => (
                                  <a
                                    key={d.name}
                                    href={d.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                                  >
                                    <span>{d.name} Demo</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed pl-4">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Drops / Pagination Indicator Dots (Outside of the Card) */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {experiences.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => goToSlide(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${dotIdx === currentIndex
                ? 'w-8 bg-amber-400 shadow-sm shadow-amber-400/40'
                : 'w-2 bg-slate-300 dark:bg-zinc-700 hover:bg-amber-400/50'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



