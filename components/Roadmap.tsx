'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const roadmapItems = [
  {
    version: 'v1.0',
    status: 'released',
    title: 'Core AI Foundation',
    items: [
      'Natural language processing',
      'Emotional intelligence engine',
      'Voice interaction system',
      'Basic learning algorithms',
    ],
  },
  {
    version: 'v1.2',
    status: 'upcoming',
    title: 'Enhanced Learning',
    items: [
      'Advanced predictive algorithms',
      'Multi-language support',
      'Improved emotional accuracy',
      'Integration with smart home',
    ],
  },
  {
    version: 'v2.0',
    status: 'planned',
    title: 'Next Generation',
    items: [
      'AR/VR interaction modes',
      'Quantum-enhanced processing',
      'Blockchain-secured memories',
      'Community features',
    ],
  },
  {
    version: 'v3.0',
    status: 'research',
    title: 'Future Vision',
    items: [
      'Conscious-level AI',
      'Time-travel conversations',
      'Universal translation',
      'Telepathic interface',
    ],
  },
];

export function Roadmap() {
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
            Product Roadmap
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From release to future innovations—see where Nova is headed
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-dark p-6 rounded-lg border ${
                item.status === 'released'
                  ? 'border-green-500/50 bg-green-500/5'
                  : item.status === 'upcoming'
                    ? 'border-blue-500/50 bg-blue-500/5'
                    : item.status === 'planned'
                      ? 'border-purple-500/50'
                      : 'border-gray-500/30 opacity-60'
              } relative`}
            >
              {/* Status Badge */}
              <div className="mb-4 flex items-center gap-2">
                {item.status === 'released' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-semibold text-green-400">Released</span>
                  </>
                ) : item.status === 'upcoming' ? (
                  <>
                    <Circle className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-semibold text-blue-400">Coming Soon</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-400">
                      {item.status === 'research' ? 'In Research' : 'Planned'}
                    </span>
                  </>
                )}
              </div>

              {/* Version */}
              <h3 className="text-2xl font-bold text-white mb-2">{item.version}</h3>
              <h4 className="text-lg font-semibold text-purple-300 mb-4">{item.title}</h4>

              {/* Items */}
              <ul className="space-y-2">
                {item.items.map((feature, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
