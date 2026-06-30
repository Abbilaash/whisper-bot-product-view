'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, BookOpen } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', isExternal: false },
  { name: 'Capabilities', href: '#features', isExternal: false },
  { name: 'Specifications', href: '#specs', isExternal: false },
  { name: 'Preview Gallery', href: '#capabilities', isExternal: false },
  { name: 'Hardware', href: '#roadmap', isExternal: false },
  { name: 'Documentation', href: '/docs', isExternal: true },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4">
      <div
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-transparent backdrop-blur-lg border-purple-500/20 shadow-lg shadow-purple-500/5'
            : 'bg-transparent backdrop-blur-md border-white/10'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/#" className="flex items-center gap-2 group">
            <Cpu className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold text-xl tracking-wider text-white">
              Whisper<span className="gradient-text">-bot</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.isExternal ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-black/90 backdrop-blur-lg p-4 shadow-xl z-50 relative"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all font-medium"
                  >
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all font-medium"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
