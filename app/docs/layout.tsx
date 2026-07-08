'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  FolderTree, 
  Mic, 
  GitMerge, 
  BrainCircuit, 
  Activity, 
  Terminal,
  ArrowLeft,
  AlertTriangle,
  Eye,
  Target,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const generalNavigation = [
  { name: 'System Overview', href: '/docs', icon: BookOpen },
  { name: 'Architecture & Files', href: '/docs/architecture', icon: FolderTree },
];

const experimentsNavigation = [
  { name: 'STT & Normalization', href: '/docs/stt-normalization', icon: Mic },
  { name: 'Intent Classification', href: '/docs/intent-classification', icon: GitMerge },
  { name: 'RAG & Gemma3 SLM', href: '/docs/rag-slm', icon: BrainCircuit },
  { name: 'LeNet5 CNN Visualizer', href: '/docs/lenet-visualizer', icon: Activity },
  { name: 'Face Learning & Detection', href: '/docs/face-learning-detection', icon: Eye },
  { name: 'Colored Ball Following', href: '/docs/colored-ball-following', icon: Target },
];

const referenceNavigation = [
  { name: 'API Reference', href: '/docs/api-reference', icon: Terminal },
  { name: 'Quick Start & Deployment', href: '/docs/deploy', icon: Terminal },
  { name: 'Troubleshooting & Debug', href: '/docs/debug', icon: AlertTriangle },
];

const allNavigation = [...generalNavigation, ...experimentsNavigation, ...referenceNavigation];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isExperimentsExpanded, setIsExperimentsExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header / Navbar */}
      <header className="border-b border-white/10 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🐕</span>
          <span className="font-bold text-lg tracking-wider text-white">WAVEGO WHISPER-BOT DOCS</span>
        </div>
        <Link href="/" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/10 bg-slate-950/40 p-6 hidden md:block shrink-0 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-5">
            {/* General Navigation Group */}
            <div className="flex flex-col gap-1">
              {generalNavigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-purple-600/20 border border-purple-500/30 text-purple-300 shadow-lg shadow-purple-500/5' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-slate-500'}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Expandable Experiments Group */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setIsExperimentsExpanded(!isExperimentsExpanded)}
                className="flex items-center justify-between px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-300 transition-colors w-full text-left"
              >
                <span>Experiments</span>
                {isExperimentsExpanded ? (
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                )}
              </button>
              
              <AnimatePresence initial={false}>
                {isExperimentsExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden flex flex-col gap-1 pl-2 mt-1"
                  >
                    {experimentsNavigation.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            isActive 
                              ? 'bg-purple-600/20 border border-purple-500/30 text-purple-300 shadow-lg shadow-purple-500/5' 
                              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-slate-500'}`} />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Reference Navigation Group */}
            <div className="flex flex-col gap-1 border-t border-white/5 pt-4">
              {referenceNavigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-purple-600/20 border border-purple-500/30 text-purple-300 shadow-lg shadow-purple-500/5' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-slate-500'}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 px-6 py-10 md:px-12 max-w-4xl overflow-y-auto">
          {/* Mobile navigation header */}
          <div className="md:hidden mb-8 p-4 bg-slate-900 border border-white/10 rounded-xl">
            <p className="text-xs text-slate-400 font-bold mb-2 uppercase tracking-wide">Documentation Pages</p>
            <div className="flex flex-wrap gap-2">
              {allNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                      isActive 
                        ? 'bg-purple-600/20 border-purple-500/30 text-purple-300' 
                        : 'bg-transparent border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
