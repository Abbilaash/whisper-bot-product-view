import React from 'react';

export default function ArchitecturePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Architecture & Files</h1>
      <p className="text-lg text-slate-300 leading-relaxed">
        The workspace is divided into two primary projects: a Python web server managing hardware components and model inference on the Raspberry Pi target, and a Flutter mobile terminal providing responsive cyberpunk control interfaces.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Backend File Structure</h2>
      <pre className="bg-slate-900 border border-white/10 rounded-xl p-6 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed whitespace-pre">
{`/home/rpi/WaveGo/whisper-bot/
├── webServer.py              # Main Flask router hosting REST APIs & thread managers
├── requirements.txt          # Python dependency specifications
├── MiniLM/                   # Semantic Intent Classifier
│   ├── all-MiniLM.onnx       # Sentence-transformer ONNX model (384 dimensions)
│   ├── intents.yaml          # Intent dictionary containing natural language training phrases
│   └── knowledge_inference.py# Inference helper generating semantic embedding vectors
├── knowledge/                # Retrieval-Augmented Generation (RAG)
│   ├── knowledge.pdf         # Base PDF user manuals & specs
│   ├── vector_db_gen.py      # PDF text extractor, sliding chunker, & vector compiler
│   ├── knowledge_db.pkl      # Compiled vector database holding text chunks & embeddings
│   ├── gemma3.onnx           # Gemma 3 Causal Language Model ONNX graph
│   └── inference.py          # Greedy decoding generation loop using KV-Caching
├── lenet5/                   # Handwriting Digit Recognition
│   ├── mnist-12.onnx         # CNN model for handwritten digit classification
│   └── detect.py             # Inference runner returning predictions, weights, & activation maps
└── core/                     # Hardware control utilities (robot serial commands & servos)`}
      </pre>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mobile App File Structure</h2>
      <pre className="bg-slate-900 border border-white/10 rounded-xl p-6 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed whitespace-pre">
{`whisper_bot_control/
├── pubspec.yaml              # App configuration, dependency tags, & assets
└── lib/
    ├── main.dart             # App initialization, dark theme definitions, & route loader
    ├── services/
    │   └── bot_api_client.dart # Unified HTTP network client wrapper for robot endpoints
    └── screens/
        ├── ip_connection_screen.dart # IP validator, connection test, & storage persistence
        ├── dashboard_screen.dart     # Primary multi-tabbed interface (Controls, Vision, Assistant)
        └── character_recognition_screen.dart # Interactive drawing canvas & LeNet visualizer`}
      </pre>
    </div>
  );
}
