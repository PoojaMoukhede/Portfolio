'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/portfolioData';

const filters = ['All', 'Full Stack', 'Real-time', 'Frontend'];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-zinc-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-wider text-amber-500 uppercase mb-2">
            Selected Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* Filter Tabs with Dynamic Project Counts */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const count =
              filter === 'All'
                ? projects.length
                : projects.filter((p) => p.category === filter).length;
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 active:scale-95 ${isActive
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-300 hover:border-amber-400 dark:hover:border-amber-400/60'
                  }`}
              >
                <span>{filter}</span>
                <span
                  className={`px-1.5 py-0.2 text-[11px] font-bold rounded-full ${isActive
                      ? 'bg-slate-900/15 text-slate-950'
                      : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400'
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div
                    className={`relative h-48 sm:h-52 w-full overflow-hidden ${project.imageFit === 'contain'
                        ? 'bg-white dark:bg-zinc-100 flex items-center justify-center'
                        : 'bg-slate-100 dark:bg-zinc-800'
                      }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={
                        project.imageFit === 'contain'
                          ? 'object-contain p-6 group-hover:scale-105 transition-transform duration-500'
                          : 'object-cover object-center group-hover:scale-105 transition-transform duration-500'
                      }
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-slate-900/80 text-white backdrop-blur-md">
                      {project.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-zinc-400 line-clamp-3 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-4 border-t border-slate-100 dark:border-zinc-800/80 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-semibold shadow-xs transition-all active:scale-95"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-800/60 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/50 transition-all active:scale-95"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  {!project.liveUrl && !project.githubUrl && (
                    <span className="text-xs text-slate-400 dark:text-zinc-500 italic">
                      Enterprise Internal System
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
