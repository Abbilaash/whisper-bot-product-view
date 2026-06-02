'use client';

import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'Natural Language Understanding',
    description: 'Comprehends context, idioms, and emotional nuance in conversation',
    metrics: '99.2% accuracy',
  },
  {
    title: 'Emotional Recognition',
    description: 'Detects emotional states through voice, text, and visual cues',
    metrics: '15+ emotions',
  },
  {
    title: 'Real-time Learning',
    description: 'Adapts behavior and preferences through continuous interaction',
    metrics: '24/7 learning',
  },
  {
    title: 'Predictive Assistance',
    description: 'Anticipates needs before they are explicitly stated',
    metrics: '87% accuracy',
  },
];

export function AICapabilities() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            AI Capabilities
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience the next generation of artificial intelligence
          </p>
        </motion.div>

        {/* Timeline-style layout */}
        <div className="space-y-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              {/* Connector */}
              <div className="hidden lg:flex flex-col items-center gap-4 w-20">
                <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500" />
                <div className="w-4 h-4 bg-purple-500 rounded-full ring-4 ring-slate-950" />
                <div className="w-1 h-12 bg-gradient-to-b from-pink-500 to-purple-500" />
              </div>

              {/* Content */}
              <div className="flex-1 glass-dark p-6 rounded-lg border border-white/10">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{cap.title}</h3>
                  <span className="text-sm font-semibold text-purple-400">{cap.metrics}</span>
                </div>
                <p className="text-gray-400">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2" />
      </div>
    </section>
  );
}
