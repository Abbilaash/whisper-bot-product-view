'use client';

import { motion } from 'framer-motion';
import { RoboticPuppy } from './RoboticPuppy';
import { Sparkles, Zap, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark w-fit"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Internship Project 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white balance-text leading-tight"
            >
              Meet{' '}
              <span className="gradient-text">Whisper-bot</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 max-w-md balance-text leading-relaxed"
            >
              An intelligent AI vision and voice assistant with advanced face detection, instant face learning, natural language understanding, and real-time object tracking.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="px-8 py-3 border border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 pt-8"
          >
            {[
              { icon: <Zap className="w-5 h-5" />, label: 'AI Powered', value: 'v4.0' },
              { icon: <Heart className="w-5 h-5" />, label: 'Emotional', value: '99%' },
              { icon: <Sparkles className="w-5 h-5" />, label: 'Learning', value: '24/7' },
            ].map((stat, i) => (
              <div key={i} className="glass-dark p-4 rounded-lg">
                <div className="text-purple-400 mb-2">{stat.icon}</div>
                <p className="text-xs text-gray-400">{stat.label}</p>
                <p className="text-lg font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right 3D Model */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="h-[500px] lg:h-[600px] relative"
        >
          <RoboticPuppy />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
