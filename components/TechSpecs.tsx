'use client';

import { motion } from 'framer-motion';

const specs = [
  {
    category: 'Processor',
    items: ['Raspberry Pi 4B', 'BCM2711B0 64-bit 4 cores', '4GB RAM'],
  },
  {
    category: 'Controller',
    items: ['ESP32 DOWDQ6-v3', 'Motion control', 'Real-time processing'],
  },
  {
    category: 'Sensors',
    items: ['5MP wide angle camera', 'ICM20948 9-axis sensor', 'Gyroscope & Accelerometer'],
  },
  {
    category: 'Materials',
    items: ['Aluminium alloy body', 'PA12 nylon side panel', 'Durable construction'],
  },
  {
    category: 'AI Capabilities',
    items: ['Face detection & recognition', 'Object detection & tracking', 'Voice command processing'],
  },
  {
    category: 'Power & Connectivity',
    items: ['USB-C charging', 'WiFi enabled', 'Bluetooth support'],
  },
];

export function TechSpecs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

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
            Technical Specifications
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Powered by advanced AI processors and precision sensors for real-time vision and voice processing
          </p>
        </motion.div>

        {/* Specs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-dark p-6 rounded-lg border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                {spec.category}
              </h3>
              <ul className="space-y-2">
                {spec.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                    <span className="text-purple-400 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
