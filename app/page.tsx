'use client';

import { ParticleBackground } from '@/components/ParticleBackground';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { TechSpecs } from '@/components/TechSpecs';
import { AICapabilities } from '@/components/AICapabilities';
import { Pricing } from '@/components/Pricing';
import { Roadmap } from '@/components/Roadmap';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <TechSpecs />
        <AICapabilities />
        <Roadmap />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
}
