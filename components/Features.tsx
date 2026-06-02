'use client';

import { motion } from 'framer-motion';
import { Brain, Mic, Eye, Move3d } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Face Detection',
    description: 'Advanced facial recognition with real-time detection and identification of multiple faces simultaneously',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Brain,
    title: 'Instant Face Learning',
    description: 'Rapidly learns and remembers new faces with minimal training samples for personalized recognition',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Mic,
    title: 'Natural Language Understanding',
    description: 'Intelligent voice command processing with contextual understanding and semantic analysis',
    gradient: 'from-pink-500 to-red-500',
  },
  {
    icon: Move3d,
    title: 'Object Detection & Tracking',
    description: 'Real-time identification and precise tracking of objects with continuous spatial awareness',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 balance-text">
            Core Capabilities
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto balance-text">
            Whisper-bot combines advanced computer vision and natural language processing for intelligent interaction
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group glass-dark p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full bg-slate-950 rounded-[5px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed balance-text">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
