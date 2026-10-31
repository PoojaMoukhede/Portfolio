'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Mail,
  FileText,
  Download,
  Code2,
  Zap,
  Layers,
  ShieldCheck,
  Copy,
  Check,
} from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(personalData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-zinc-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wider text-amber-500 uppercase mb-2">
            Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Picture Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Decorative background glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />

              <div className="relative w-72 h-88 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <Image
                  src="/img/IMG-20211014-WA0002.jpg"
                  alt="Pooja Moukhede"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-bold">Pooja Moukhede</p>
                  <p className="text-xs text-amber-300 font-medium">MERN Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bio & Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Crafting reliable, user-focused web solutions
            </h3>

            <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
              {personalData.summary}
            </p>

            {/* Quick Info Grid (Professional attributes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70">
                <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-500">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-zinc-400 block font-medium">
                    Professional Experience
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {personalData.experienceYears}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70">
                <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-zinc-400 block font-medium">
                    Primary Specialization
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {personalData.title}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70">
                <div className="flex items-center gap-3 overflow-hidden flex-1">
                  <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-slate-500 dark:text-zinc-400 block font-medium">
                      Email Contact
                    </span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 truncate block transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="ml-2 p-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:text-amber-500 hover:border-amber-400 dark:hover:text-amber-400 transition-colors shrink-0 active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70">
                <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-500">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-zinc-400 block font-medium">
                    Full Resume
                  </span>
                  <a
                    href={personalData.resumeUrl}
                    download="Pooja_Moukhede_MERN_4years.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    <span>Download PDF</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Core Competencies highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                <Code2 className="w-5 h-5 text-amber-500 mb-2" />
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  Full Stack MERN
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  React, Node, Express, MongoDB &amp; Next.js architecture.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                <Zap className="w-5 h-5 text-amber-500 mb-2" />
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  Real-Time Feeds
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  Sub-second WebSockets, trading interfaces &amp; event streaming.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                <Layers className="w-5 h-5 text-amber-500 mb-2" />
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  Media &amp; Video APIs
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  Vimeo Player API integration, secure embeds &amp; progress analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
