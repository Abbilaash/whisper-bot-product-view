import React from 'react';

export default function STTPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Speech-to-Text & Normalization</h1>
      <p className="text-lg text-slate-300 leading-relaxed">
        Offline voice capture relies on the Vosk Speech-to-Text library running local acoustic models, paired with a custom number normalization algorithm that converts spelled-out numbers into standard numeric arguments.
      </p>

      <div className="border border-white/10 rounded-xl p-6 bg-slate-900/50 my-6">
        <h2 className="text-xl font-bold text-white mb-3">1. Audio Recording Specification</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300 text-sm">
          <li><strong>Format:</strong> 16,000Hz Sample Rate, 16-bit Mono, Linear PCM WAV format.</li>
          <li><strong>Buffer Size:</strong> Recorded in chunks on-device, then uploaded as raw WAV files to the backend chatbot router.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Word-to-Number Normalization</h2>
      <p className="text-slate-300 leading-relaxed font-sans">
        Speech recognizers generally transcribe numeric arguments as literal words (e.g. <em>"walk forward five steps"</em>). To allow the parser to extract precise integers for gait loops, the backend employs a recursive word-number solver:
      </p>

      <pre className="bg-slate-900 border border-white/10 rounded-xl p-6 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed whitespace-pre">
{`def convert_words_to_numbers(text):
    # Splits, checks against value dictionary, handles multipliers:
    # "two hundred and forty five" -> 245
    #
    # 1. Matches scale terms: "hundred", "thousand"
    # 2. Accumulates totals: tens + units
    # 3. Swaps words dynamically within the sentence text`}
      </pre>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Voice Command Data Flow</h2>
      <div className="border border-white/10 rounded-xl p-4 bg-slate-900/40 text-center my-6 max-w-2xl mx-auto">
        <img src="/voice command system.png" alt="Voice Command Engine Data Flow" className="rounded-lg mx-auto max-h-80 object-contain mb-3" />
        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Vosk STT and Semantic Parsing Data Flow</p>
      </div>
    </div>
  );
}
