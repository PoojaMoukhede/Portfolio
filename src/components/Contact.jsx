'use client';

import React, { useState } from 'react';
import {
  Mail,
  FileText,
  Download,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Github,
  Copy,
  Check,
} from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export function Contact() {
  const [formStatus, setFormStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(personalData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://getform.io/f/nbvvvlxb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 6000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (err) {
      console.error(err);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wider text-amber-500 uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Build Together
          </h2>
          <div className="w-12 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-4">
            Available for full-time software developer opportunities, contract roles, and innovative web projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Contact &amp; Resume
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
              Feel free to reach out directly via email, submit a message through the form, or download my full resume.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-400 dark:hover:border-amber-400/60 shadow-sm transition-all group">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-4 overflow-hidden flex-1"
                >
                  <div className="p-3 rounded-lg bg-amber-400/10 text-amber-500 group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-slate-400 dark:text-zinc-500 font-medium block">
                      Email
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white truncate block">
                      {personalData.email}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="ml-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-amber-500 hover:border-amber-400 dark:hover:text-amber-400 transition-colors shrink-0 flex items-center gap-1.5 active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={personalData.resumeUrl}
                download="Pooja_Moukhede_MERN_4years.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-400 dark:hover:border-amber-400/60 shadow-sm transition-all group"
              >
                <div className="p-3 rounded-lg bg-amber-400/10 text-amber-500 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-slate-400 dark:text-zinc-500 font-medium block">
                    Official Resume (PDF)
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <span>Pooja_Moukhede_MERN_4years.pdf</span>
                    <Download className="w-4 h-4" />
                  </span>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={personalData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-400 dark:hover:border-amber-400/60 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    LinkedIn
                  </span>
                </a>

                <a
                  href={personalData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-400 dark:hover:border-amber-400/60 transition-colors group"
                >
                  <Github className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Hi Pooja, I'd like to discuss an opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 dark:bg-amber-400 dark:hover:bg-amber-300 shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Something went wrong. Please try again or reach out directly via email.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
