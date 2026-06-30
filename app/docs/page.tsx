import React from 'react';

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">System Overview</h1>
      <p className="text-lg text-slate-300 leading-relaxed">
        The <strong>WaveGo Whisper Bot</strong> is an offline, autonomous robotic system that combines local Speech-to-Text (STT), Semantic Intent Classification, Retrieval-Augmented Generation (RAG) using a local Small Language Model (SLM), Computer Vision (Object, Face, and Handwriting Detection), and Bluetooth Audio connectivity.
      </p>

      <div className="border border-white/10 rounded-xl p-6 bg-slate-900/50 my-8">
        <h2 className="text-2xl font-bold text-white mb-4">Core Capabilities</h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-300">
          <li><strong>Offline SLM Assistant:</strong> CPU-optimized local generation pipeline using Gemma3 model with past Key-Value (KV) cache optimizations.</li>
          <li><strong>Semantic Command Execution:</strong> Sentence-level semantic parsing via MiniLM-v2 (384-dimensional cosine similarity matching) instead of strict regex keywords.</li>
          <li><strong>Computer Vision Dashboard:</strong> Facial registration, targeted color tracking, and LeNet-5 CNN visualizer telemetry.</li>
          <li><strong>Smart Bluetooth Routing:</strong> Auto-scanning and audio sink configuration targeting A2DP speakers via BlueZ interface commands.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">System Processing Flow</h2>
      <pre className="bg-slate-900 border border-white/10 rounded-xl p-6 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed whitespace-pre">
{`        [Speech / Text Input]
                  │
                  ▼
         [Vosk Transcription]
                  │
                  ▼
       [Normalize word-digits]  (e.g., "five steps" -> "5 steps")
                  │
                  ▼
         [Intent Classifier]
               /       \\
       (Conf >= 0.6)   (Conf < 0.6)
             /           \\
            ▼             ▼
     [Gait Control]      [RAG Context Retrieval]
                         [Prompt Assembly]
                         [Gemma3 Generation]
                         [Text Response]`}
      </pre>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Hardware & Architecture Diagrams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="border border-white/10 rounded-xl p-4 bg-slate-900/40 text-center">
          <img src="/v1-2-raspberry-pi-robot.png" alt="Raspberry Pi Brain Board Architecture" className="rounded-lg mx-auto max-h-64 object-contain mb-3" />
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Raspberry Pi Brain Board Architecture</p>
        </div>
        <div className="border border-white/10 rounded-xl p-4 bg-slate-900/40 text-center">
          <img src="/v1-0-esp32-robot.png" alt="ESP32 Locomotion Driver Board" className="rounded-lg mx-auto max-h-64 object-contain mb-3" />
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">ESP32 Locomotion Driver Board</p>
        </div>
      </div>
    </div>
  );
}
