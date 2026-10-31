'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalData } from '@/data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Reading scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Active section spy
      const sections = ['about', 'experience', 'skills', 'education', 'projects', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'glass border-b border-slate-200/60 dark:border-zinc-800/80 shadow-sm py-3'
        : 'bg-transparent py-5'
        }`}
    >
      {/* Scroll Progress Indicator Bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 z-[60] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-1.5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white group"
          >
            <span>Pooja</span>
            <span className="text-amber-500 text-3xl leading-none group-hover:scale-125 transition-transform">
              .
            </span>
          </Link>

          {/* Desktop Navigation with Active Section Highlighting */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                    ? 'text-amber-500 dark:text-amber-400 bg-amber-400/10 font-semibold shadow-2xs'
                    : 'text-slate-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-100/70 dark:hover:bg-zinc-800/60'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <ThemeToggle />
            <a
              href={personalData.resumeUrl}
              download="Pooja_Moukhede_MERN_4years.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 dark:bg-amber-400 dark:hover:bg-amber-300 rounded-full shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl glass border border-slate-200 dark:border-zinc-800 shadow-xl space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-zinc-200 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-zinc-800/70 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-zinc-800">
              <a
                href={personalData.resumeUrl}
                download="Pooja_Moukhede_MERN_4years.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 rounded-xl transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
