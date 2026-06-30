import React from 'react';

export default function LeNetPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">CNN Digit Visualizer</h1>
      <p className="text-lg text-slate-300 leading-relaxed">
        The handwriting character recognition system exposes the inner layer structure of the LeNet-5 CNN model to provide interactive weight and activation inspection interfaces.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Exposed Layer Topology</h2>
      <p className="text-slate-300 leading-relaxed">
        By adding intermediate <code>value_info</code> tensors to the graph outputs during model loading, the backend extracts the following activations dynamically for every input:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li><strong>Input Layer:</strong> Grayscale pixel array of shape <code>[28, 28]</code>.</li>
        <li><strong>Conv1 Output (ReLU):</strong> Channel tensors of shape <code>[8, 28, 28]</code>.</li>
        <li><strong>Pool1 Output:</strong> Subsampled tensors of shape <code>[8, 14, 14]</code>.</li>
        <li><strong>Conv2 Output (ReLU):</strong> Channel tensors of shape <code>[16, 14, 14]</code>.</li>
        <li><strong>Pool2 Output:</strong> Subsampled tensors of shape <code>[16, 4, 4]</code>.</li>
        <li><strong>Dense Inputs:</strong> Flattened vector of shape <code>[256]</code>.</li>
        <li><strong>Logits / Probs:</strong> Final predictions of shape <code>[10]</code>.</li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Dynamic Weight Mapping</h2>
      <p className="text-slate-300 leading-relaxed">
        Static weight matrices are converted to standard arrays at startup:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li>Conv1 kernels are loaded as shape <code>[8, 1, 5, 5]</code> along with 8 biases.</li>
        <li>Conv2 kernels are shape <code>[16, 8, 5, 5]</code>.</li>
        <li>FC connection weights are shape <code>[256, 10]</code>. In the mobile client, this matrix is visualized as a 16x16 interactive grid heat-map, highlighting positive weights in blue and negative weights in red.</li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Vision Tracking Data Flow</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 font-sans">
        <div className="border border-white/10 rounded-xl p-4 bg-slate-900/40 text-center">
          <img src="/face detection.png" alt="Facial Detection and Alignment pipeline" className="rounded-lg mx-auto max-h-64 object-contain mb-3" />
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Face Landmarks & Bounding Box Pipeline</p>
        </div>
        <div className="border border-white/10 rounded-xl p-4 bg-slate-900/40 text-center">
          <img src="/color folllowing.png" alt="Target Color HSV Filter & Following" className="rounded-lg mx-auto max-h-64 object-contain mb-3" />
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Target HSV Color Filtering & Servo Tracking</p>
        </div>
      </div>
    </div>
  );
}
