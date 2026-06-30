import React from 'react';

export default function FaceLearningDetectionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Face Learning & Detection</h1>
      <p className="text-lg text-slate-300 leading-relaxed">
        The face detection and registration pipeline running on Whisper-bot handles real-time facial feature landmark extraction, face detection alignment, and vector database embeddings for personalized face recognition.
      </p>

      <div className="border border-white/10 rounded-xl p-6 bg-slate-900/50 my-6">
        <h2 className="text-xl font-bold text-white mb-3">1. Pipeline Stages</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300 text-sm">
          <li><strong>Frame Capture:</strong> Real-time video frame retrieval in RGB/BGR formats.</li>
          <li><strong>Face Landmarks & Alignment:</strong> CNN-based 68 face landmark detection targets nose, eyes, edges, and mouth.</li>
          <li><strong>Embeddings Generator:</strong> Feeds cropped, aligned face snapshots into a ResNet model (MobileNetV3) to generate a 128-D embedding vector.</li>
          <li><strong>Metric Learning:</strong> Triplet loss function optimizes distance bounds to match positive profiles and reject negative matches.</li>
          <li><strong>Database Storage:</strong> Embeddings are mapped to name databases to match faces locally in future frames.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Face Detection & Landmark Pipeline</h2>
      <div className="border border-white/10 rounded-xl p-4 bg-slate-900/40 text-center my-6 max-w-2xl mx-auto">
        <img src="/face detection.png" alt="Facial Detection and Alignment pipeline" className="rounded-lg mx-auto max-h-80 object-contain mb-3" />
        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Face Landmarks & Bounding Box Pipeline</p>
      </div>
    </div>
  );
}
