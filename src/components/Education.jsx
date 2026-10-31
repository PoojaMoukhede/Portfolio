'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { educations } from '@/data/portfolioData';

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wider text-amber-500 uppercase mb-2">
            Academic &amp; Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education &amp; Credentials
          </h2>
          <div className="w-12 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((item, index) => {
            const isCert = item.title.includes('Certification');
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 shadow-sm hover:border-amber-400 dark:hover:border-amber-400/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-amber-400/10 text-amber-500 dark:text-amber-400 shrink-0">
                      {isCert ? (
                        <Award className="w-6 h-6" />
                      ) : (
                        <GraduationCap className="w-6 h-6" />
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-3">
                    {item.institution}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-400 dark:text-zinc-500">
                  <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                  <span>{isCert ? 'Professional Certification' : 'Formal Engineering Program'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
