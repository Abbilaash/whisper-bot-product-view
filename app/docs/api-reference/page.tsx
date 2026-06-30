import React from 'react';

export default function APIReferencePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">API Reference Specification</h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          The Flask server served from the Raspberry Pi controller exposes the following REST API endpoints for hardware movements, NLP assistant controls, vision tracking, and Bluetooth speaker interfaces.
        </p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Locomotion & Mechanism */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">1. Locomotion & Servo Mechanics</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/move/&lt;action&gt;</span>
              </div>
              <p className="text-slate-300 text-sm">Sends walking direction gait requests to the locomotion board.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>URL Actions:</strong> <code className="text-slate-300">forward</code> | <code className="text-slate-300">backward</code> | <code className="text-slate-300">left</code> | <code className="text-slate-300">right</code> | <code className="text-slate-300">stop</code></p>
                <p><strong>Payload:</strong> <code className="text-slate-300">{"{ \"speed\": 10-100 }"}</code></p>
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{ "success": true, "action": "forward", "speed": 100 }`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/tilt/&lt;direction&gt;/&lt;action&gt;</span>
              </div>
              <p className="text-slate-300 text-sm">Drives the pan/tilt camera gimbal servo motors.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>URL Directions:</strong> <code className="text-slate-300">up</code> | <code className="text-slate-300">down</code> | <code className="text-slate-300">left</code> | <code className="text-slate-300">right</code></p>
                <p><strong>URL Actions:</strong> <code className="text-slate-300">start</code> | <code className="text-slate-300">stop</code></p>
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{ "success": true, "direction": "up", "action": "start" }`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/default/&lt;action&gt;</span>
              </div>
              <p className="text-slate-300 text-sm">Triggers predefined physical posture gaits.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>URL Actions:</strong> <code className="text-slate-300">steady</code> | <code className="text-slate-300">jump</code> | <code className="text-slate-300">handshake</code></p>
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{ "success": true, "action": "jump" }`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: NLP Chatbot */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">2. NLP Command Assistant & RAG</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/chatbot/command</span>
              </div>
              <p className="text-slate-300 text-sm">Submits raw text queries for NLP command parsing or SLM generation.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>Payload:</strong> <code className="text-slate-300">{"{ \"command\": \"walk forward 5 steps\" }"}</code></p>
                <p><strong>Response Sample (Command Intent):</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{
  "success": true,
  "command": "walk forward 5 steps",
  "intent": "MOVE_FORWARD",
  "score": 0.965,
  "threshold_passed": true,
  "action_taken": "Moving forward for 5 steps."
}`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/chatbot/audio</span>
              </div>
              <p className="text-slate-300 text-sm">Uploads raw recorded WAV speech commands to the server.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>Payload Format:</strong> <code className="text-slate-300">multipart/form-data</code></p>
                <p><strong>Form Parameters:</strong> <code className="text-slate-300">audio</code> (WAV audio file binary, 16kHz mono PCM)</p>
                <p><strong>Response Sample:</strong> Matches the exact JSON structure of the text-based chatbot command response, containing speech transcript details.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Vision & Recognition */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">3. Computer Vision & CNNs</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/detect_digit</span>
              </div>
              <p className="text-slate-300 text-sm">Classifies digits using LeNet-5. When explain is set, returns model weights/activations.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>Payload:</strong> <code className="text-slate-300">{"{ \"image\": \"base64_jpeg_or_png_string\", \"explain\": true }"}</code></p>
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{
  "success": true,
  "prediction": 5,
  "confidence": 98.4,
  "message": "CNN Digit Detection: I detected the digit '5'...",
  "explanation": {
    "weights": { "conv1": [[[[float]]]], "bias1": [float], ... },
    "activations": { "input": [[float]], "conv1": [[[float]]], ... }
  }
}`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/color/follow/&lt;color&gt;</span>
              </div>
              <p className="text-slate-300 text-sm">Toggles target object color tracking modes.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>URL Colors:</strong> <code className="text-slate-300">green</code> | <code className="text-slate-300">blue</code> | <code className="text-slate-300">red</code> | <code className="text-slate-300">none</code></p>
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{ "success": true, "active_color": "green", "status": "activated" }`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/face/detect/&lt;action&gt;</span>
              </div>
              <p className="text-slate-300 text-sm">Toggles the facial detection bounding box overlay on the video stream.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>URL Actions:</strong> <code className="text-slate-300">start</code> | <code className="text-slate-300">stop</code></p>
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{ "success": true, "status": "started" }`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/face/follow/&lt;action&gt;</span>
              </div>
              <p className="text-slate-300 text-sm">Starts/stops the camera following a registered person.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>URL Actions:</strong> <code className="text-slate-300">start</code> | <code className="text-slate-300">stop</code></p>
                <p><strong>Payload:</strong> <code className="text-slate-300">{"{ \"name\": \"John\" }"}</code> (only required when starting)</p>
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{ "success": true, "action": "start", "name": "John" }`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">GET</span>
                <span className="font-mono text-white text-base">/api/face/capture</span>
              </div>
              <p className="text-slate-300 text-sm">Snaps a series of 6 camera frames to prepare facial registration embeddings.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{
  "success": true,
  "has_face": true,
  "images": [ "base64_jpeg_1", "base64_jpeg_2", ... ]
}`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/face/save</span>
              </div>
              <p className="text-slate-300 text-sm">Saves and registers face frames under a target username.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>Payload:</strong> <code className="text-slate-300">{"{ \"name\": \"John\", \"images\": [ \"base64_img1\", ... ] }"}</code></p>
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{ "success": true, "message": "Successfully learned face for John" }`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Bluetooth */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">4. Bluetooth Management</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs px-2.5 py-1 rounded-md font-bold">GET</span>
                <span className="font-mono text-white text-base">/api/bluetooth/scan</span>
              </div>
              <p className="text-slate-300 text-sm">Triggers Bluetooth discovery and returns local speakers list.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{
  "success": true,
  "devices": [
    { "mac": "AA:BB:CC:DD:EE:FF", "name": "Sony SRS-XB13", "connected": false },
    { "mac": "00:11:22:33:44:55", "name": "JBL Flip 5", "connected": true }
  ]
}`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/bluetooth/connect</span>
              </div>
              <p className="text-slate-300 text-sm">Establishes pairing, trust, and connection bindings to a Bluetooth MAC.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>Payload:</strong> <code className="text-slate-300">{"{ \"mac\": \"AA:BB:CC:DD:EE:FF\" }"}</code></p>
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{ "success": true, "message": "Connected to AA:BB:CC:DD:EE:FF" }`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-md font-bold">POST</span>
                <span className="font-mono text-white text-base">/api/bluetooth/disconnect</span>
              </div>
              <p className="text-slate-300 text-sm">Disconnects from a targeted Bluetooth speaker.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>Payload:</strong> <code className="text-slate-300">{"{ \"mac\": \"AA:BB:CC:DD:EE:FF\" }"}</code></p>
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{ "success": true, "message": "Disconnected from AA:BB:CC:DD:EE:FF" }`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Telemetry Status */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">5. Telemetry & Status Monitoring</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs px-2.5 py-1 rounded-md font-bold">GET</span>
                <span className="font-mono text-white text-base">/api/status</span>
              </div>
              <p className="text-slate-300 text-sm">Gathers real-time performance and system indicators from the RPi controller.</p>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>Response Sample:</strong></p>
                <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-[11px] mt-1">{`{
  "success": true,
  "mode": "sta",
  "ip": "192.168.4.215",
  "cpu_temp": 46.2,
  "ram_info": 32.4,
  "cpu_use": 14.8
}`}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
