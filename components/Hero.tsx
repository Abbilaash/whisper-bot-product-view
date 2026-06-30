'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-10 pb-16 px-4">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[4.5fr_5.5fr] gap-12 items-center max-w-7xl mx-auto w-full">
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
              <span className="text-sm text-purple-300">NIT-K Internship Project 2026</span>
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
              transition={{ delay: 0.35 }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl balance-text leading-relaxed"
            >
              An offline, autonomous robotic system combining local Speech-to-Text (STT), Semantic Intent Classification, Local RAG Q&A using a Small Language Model (SLM), Computer Vision, an interactive LeNet-5 CNN visualizer, and smart Bluetooth Audio connectivity.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/docs">
              <button className="px-8 py-3 border border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                View Docs
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Preview Video */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center w-full"
        >
          {/* Futuristic Glow behind the video */}
          <div className="absolute w-[80%] h-[80%] bg-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute w-[60%] h-[60%] bg-cyan-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

          {/* Seamless Blended Video Wrapper */}
          <div
            className="w-full aspect-video relative z-10 overflow-hidden flex items-center justify-center"
            style={{
              maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
            }}
          >
            <video
              key="/wavego-preview-video1.mp4"
              src="/wavego-preview-video1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
