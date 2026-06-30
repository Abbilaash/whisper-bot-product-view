import React from 'react';

export default function RAGPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Local RAG & Gemma3 SLM</h1>
      <p className="text-lg text-slate-300 leading-relaxed">
        If speech/text inputs fall below the command intent threshold, they are routed to the local RAG pipeline to answer Q&A queries based on offline documents.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Document Embedding and Chunking</h2>
      <p className="text-slate-300 leading-relaxed">
        Manuals and technical files (<code>knowledge.pdf</code>) are parsed and split using a sliding chunk window. Each text chunk is encoded into a 384-dimensional vector using <code>MiniLM</code> and compiled into <code>knowledge_db.pkl</code>.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Gemma3 Local Inference & KV Cache</h2>
      <p className="text-slate-300 leading-relaxed font-sans">
        The causal language generation runs locally using <code>gemma3.onnx</code>. To support interactive response speeds on the Pi's CPU, the decoding loop employs <strong>Key-Value (KV) Caching</strong>:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li><strong>Static Pre-allocation:</strong> Caching attention key-value states in memory avoids re-calculating historical token context during auto-regressive generation.</li>
        <li><strong>Dynamic Specs:</strong> KV-cache dimensions are pre-allocated per layer as <code>(1, 1, seq_len, 256)</code> representing a single batch size, 1 KV attention head, current context length, and 256 head dimensions.</li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">RAG Knowledge Pipeline</h2>
      <div className="border border-white/10 rounded-xl p-4 bg-slate-900/40 text-center my-6 max-w-2xl mx-auto font-sans">
        <img src="/rag knowledge.png" alt="RAG Knowledge Vector Search Pipeline" className="rounded-lg mx-auto max-h-80 object-contain mb-3" />
        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Sliding Window Embedding & Generator Pipeline</p>
      </div>
    </div>
  );
}
