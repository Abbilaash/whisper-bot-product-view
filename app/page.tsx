'use client';

import { Navbar } from '@/components/Navbar';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { TechSpecs } from '@/components/TechSpecs';
import { AICapabilities } from '@/components/AICapabilities';
import { Roadmap } from '@/components/Roadmap';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 pt-16 md:pt-20">
        <Hero />
        <Features />
        <TechSpecs />
        <AICapabilities />
        <Roadmap />
        <Footer />
      </div>
    </main>
  );
}
