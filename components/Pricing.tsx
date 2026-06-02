'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: 'one-time',
    description: 'Perfect for getting started with Nova',
    features: [
      'Basic AI assistant features',
      'Voice interaction',
      'Standard learning',
      '1-year warranty',
      'Community support',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$899',
    period: 'one-time',
    description: 'Advanced features for power users',
    features: [
      'All Starter features',
      'Advanced emotional AI',
      'Unlimited learning',
      '3-year warranty',
      'Priority support',
      'Custom voice training',
      'Integration ecosystem',
    ],
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '$1,299',
    period: 'one-time',
    description: 'Maximum capabilities and customization',
    features: [
      'All Pro features',
      'Advanced AR/VR features',
      'Quantum processing (beta)',
      'Lifetime warranty',
      '24/7 dedicated support',
      'Custom AI training',
      'White-label options',
      'Research collaboration',
    ],
    highlighted: false,
  },
];

export function Pricing() {
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your Nova experience
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg relative overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'lg:scale-105 border-2 border-gradient-to-r from-purple-500 to-pink-500 glass-dark glow-purple'
                  : 'border border-white/10 glass-dark hover:border-purple-500/50'
              }`}
            >
              {/* Highlight badge */}
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold py-2 text-center">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8 pt-12">
                {/* Plan name and price */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105 glow-purple'
                      : 'border border-purple-400 text-purple-300 hover:bg-purple-500/10'
                  }`}
                >
                  Get Started
                </button>

                {/* Features list */}
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Questions about pricing?{' '}
            <a href="#contact" className="text-purple-400 hover:text-purple-300 transition-colors">
              Contact our sales team
            </a>
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
