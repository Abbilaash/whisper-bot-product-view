'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';
import Image from 'next/image';

const roadmapItems = [
  {
    version: 'v1.0',
    status: 'pre-designed',
    title: 'Open Source WaveGo Bionic Dog',
    image: '/v1-0-esp32-robot.png',
    items: [
      'ESP32-based microcontroller',
      'Bionic dog-like body structure',
      'Motion control and servos',
      'Open source hardware design',
    ],
  },
  {
    version: 'v1.2',
    status: 'pre-designed',
    title: 'Raspberry Pi 4B Edge AI System',
    image: '/v1-2-raspberry-pi-robot.png',
    items: [
      'Raspberry Pi 4B processor',
      'Real-time AI inference',
      'Advanced computer vision',
      'Edge processing capabilities',
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
            Hardware Versions
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Whisper-bot hardware platforms for different use cases and deployment scenarios
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-6 rounded-lg border border-purple-500/50 bg-purple-500/5 relative overflow-hidden"
            >
              {/* Image */}
              {item.image && (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-purple-500/30">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Status Badge */}
              <div className="mb-4 flex items-center gap-2">
                <Circle className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-semibold text-purple-400">Pre-designed & Assembled</span>
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
