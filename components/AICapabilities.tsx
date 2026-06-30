'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const previewImages = [
  { id: 1, src: '/preview-1.png', alt: 'Product Visual Looks' },
  { id: 2, src: '/preview-2.png', alt: 'Motor Connection with ESP32-DOWDQ6' },
  { id: 3, src: '/preview-3.png', alt: 'weight visualization of conv layer' },
  { id: 4, src: '/preview-4.png', alt: 'neural network and neuron firing visulization with digit recognition' },
  { id: 5, src: '/preview-5.png', alt: 'Robot in Action' },
  { id: 6, src: '/preview-6.png', alt: 'Face Learning Database' },
  { id: 7, src: '/preview-7.png', alt: 'Object Classification' },
  { id: 8, src: '/preview-8.png', alt: 'System Architecture' },
  { id: 9, src: '/preview-9.png', alt: 'Control Dashboard' },
];

export function AICapabilities() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="capabilities" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Preview Pics
          </h2>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: image.id * 0.05 }}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative overflow-hidden rounded-lg border border-purple-500/30 glass-dark cursor-pointer"
            >
              <motion.div
                animate={{
                  scale: hoveredId === image.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-64"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Overlay on hover */}
              <motion.div
                animate={{
                  opacity: hoveredId === image.id ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4"
              >
                <p className="text-white text-sm font-semibold">{image.alt}</p>
              </motion.div>
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
