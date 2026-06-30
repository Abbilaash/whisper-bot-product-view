import React from 'react';

export default function ColoredBallFollowingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Colored Ball Following</h1>
      <p className="text-lg text-slate-300 leading-relaxed">
        Whisper-bot tracks and follows target color objects by converting camera RGB/BGR frames into HSV space, generating binary thresholds, and driving servo joints to align the camera center with the detected object centroid.
      </p>

      <div className="border border-white/10 rounded-xl p-6 bg-slate-900/50 my-6">
        <h2 className="text-xl font-bold text-white mb-3">1. Object Centroid Extraction</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300 text-sm">
          <li><strong>HSV Conversion:</strong> Transforms input BGR video frames into HSV (Hue, Saturation, Value) coordinates to ensure robust color segmenting under variable lighting.</li>
          <li><strong>Binary Masking:</strong> Filters pixels matching range (e.g. RED to white, others to black).</li>
          <li><strong>Contour Detection:</strong> Detects edges, corners, and contours to identify the largest contour group (largest circle).</li>
          <li><strong>Circularity Filtering:</strong> Validates shape geometry using circularity threshold formula: C = 4 * pi * A / P² (where A is Area, P is Perimeter) to distinguish spheres from arbitrary geometric blocks.</li>
          <li><strong>Tracking Loop:</strong> Extracts the center coordinate (x, y) and sphere radius to calculate error vectors, driving pan-tilt camera servos.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Target Color Tracking Flow</h2>
      <div className="border border-white/10 rounded-xl p-4 bg-slate-900/40 text-center my-6 max-w-2xl mx-auto">
        <img src="/color folllowing.png" alt="Target Color HSV Filter & Following" className="rounded-lg mx-auto max-h-80 object-contain mb-3" />
        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Target HSV Color Filtering & Servo Tracking</p>
      </div>
    </div>
  );
}
