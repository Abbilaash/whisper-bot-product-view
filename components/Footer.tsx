'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-black/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-white/10 py-8 space-y-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: 'https://www.github.com/Abbilaash', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/a-t-abbilaash-117b07270/', label: 'LinkedIn' },
              { icon: Mail, href: 'abbilaashat@gmail.com', label: 'Email' },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all hover:bg-purple-500/10"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm">
              © {currentYear} NITK, Surathkal & A T Abbilaash. All rights reserved. • Made with{' '}
              <span className="text-purple-400">💜</span> by A T Abbilaash
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
