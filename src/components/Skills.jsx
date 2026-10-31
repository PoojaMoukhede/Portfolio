'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  PlayCircle,
  Database,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';
import {
  ReactIcon,
  ReduxIcon,
  JavascriptIcon,
  NodejsIcon,
  ExpressIcon,
  MongodbIcon,
} from './TechIcons';

const iconMap = {
  code: Code2,
  server: Server,
  play: PlayCircle,
  database: Database,
};

const coreSpecialization = [
  {
    name: 'React.js',
    role: 'Frontend Core',
    Icon: ReactIcon,
    accent: 'hover:border-cyan-400/70',
  },
  {
    name: 'Redux',
    role: 'State Management',
    Icon: ReduxIcon,
    accent: 'hover:border-purple-400/70',
  },
  {
    name: 'JavaScript',
    role: 'Core Language',
    Icon: JavascriptIcon,
    accent: 'hover:border-amber-400/70',
  },
  {
    name: 'Node.js',
    role: 'Runtime & APIs',
    Icon: NodejsIcon,
    accent: 'hover:border-emerald-500/70',
  },
  {
    name: 'Express.js',
    role: 'Server Framework',
    Icon: ExpressIcon,
    accent: 'hover:border-zinc-400/70',
  },
  {
    name: 'MongoDB',
    role: 'NoSQL Database',
    Icon: MongodbIcon,
    accent: 'hover:border-green-500/70',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-zinc-900/40 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/4 dark:bg-amber-400/2 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-amber-500 uppercase mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Technical Capabilities</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills &amp; Technologies
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-4">
            Production-tested technical stack optimized for high-performance frontend interfaces, real-time architectures, and modern web applications.
          </p>
        </div>

        {/* 1. Core Specialization (Minimal Brand Strip) */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">
              Core Specialization
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {coreSpecialization.map((item, idx) => {
              const IconComponent = item.Icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  className={`p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xs hover:shadow-md transition-all duration-200 text-center flex flex-col items-center justify-center group ${item.accent}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800/70 border border-slate-100 dark:border-zinc-700/50 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform duration-200">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white block">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-zinc-400 block mt-0.5">
                    {item.role}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. Categorized Competencies (Clean, Spacious 4-Card Grid) */}
        <div>
          <div className="text-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">
              Technical Competencies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, idx) => {
              const Icon = iconMap[category.iconName] || Code2;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 hover:border-amber-400/50 dark:hover:border-amber-400/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-zinc-800/80">
                    <div className="p-2 rounded-lg bg-amber-400/10 text-amber-500 dark:text-amber-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-slate-100/80 dark:bg-zinc-800/60 text-slate-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-amber-400/10 dark:hover:bg-amber-400/10 transition-colors duration-150 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
