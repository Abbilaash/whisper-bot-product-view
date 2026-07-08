import React from 'react';

const retrospectiveIssues = [
  {
    id: 1,
    category: 'Vosk Initialization',
    component: 'Speech-to-Text',
    title: 'Vosk Segmentation Fault on Startup',
    rootCause: 'OpenBLAS thread allocation crashed when imported inside startup contexts (cron/systemd) due to CPU affinity limitations.',
    solution: "Prepend the environment variable constraint to the absolute top of the Python script before importing any bionic dog dependencies.",
    code: "import os\nos.environ['OPENBLAS_NUM_THREADS'] = '1'\nimport vosk"
  },
  {
    id: 2,
    category: 'OS Persistence',
    component: 'Raspberry Pi OS',
    title: 'Vosk Files Reverting/Corrupting on Reboot',
    rootCause: 'The Raspberry Pi was running an active Overlay File System (OverlayFS) which reset all system files in /home/rpi/.local to their read-only state on reboot.',
    solution: 'Disable the overlay file system protection, remount partitions as read-write, edit config, and restart the system.',
    code: "# Remount read-write, remove dtoverlay=overlayfs from /boot/config.txt, then:\nsudo reboot"
  },
  {
    id: 3,
    category: 'Library Paths',
    component: 'Python Packages',
    title: 'Global Python Library Files Failing to Persist',
    rootCause: 'The system root partition / remained protected, but the custom codebase folder /home/rpi/WaveGo was mounted on a separate, writable persistent partition.',
    solution: 'Install vosk directly in the writable project directory using target parameters, and prepend it to the sys.path in webServer.py.',
    code: "pip3 install --target=/home/rpi/WaveGo/vosk_package vosk\n\n# In Python:\nsys.path.insert(0, '/home/rpi/WaveGo/vosk_package')"
  },
  {
    id: 4,
    category: 'Git Merge',
    component: 'Version Control',
    title: 'SyntaxError inside AudioToText.py',
    rootCause: 'A git merge checkout left unresolved merge conflict markers (<<<<<<< Updated upstream) inside AudioToText.py on the Pi.',
    solution: 'Discard the conflicted file local changes on the Pi and check out the clean source code from upstream, then re-apply directory patches.',
    code: "git checkout -- whisper/AudioToText.py"
  },
  {
    id: 5,
    category: 'Threading & Concurrency',
    component: 'Flask Backend / Flutter App',
    title: 'First Voice Command Kicks Mobile App Offline',
    rootCause: 'Flask runs single-threaded. The first AI command initializes Vosk, Embeddings, and Gemma3 (takes ~42s), which blocks the server\'s status polling loop, causing the mobile client to assume a disconnected state.',
    solution: 'Modified _startStatusPolling in dashboard_screen.dart to ignore status poll failures when _chatLoading is true (waiting for models), and increased text request timeouts to 45 seconds.',
    code: ""
  },
  {
    id: 6,
    category: 'SDK Version Conflict',
    component: 'Flutter / Dart Build',
    title: 'Flutter Build Dependency Solving Failure',
    rootCause: 'The project requested Dart SDK ^3.12.1 but the system is running Dart SDK 3.2.6, blocking asset generation.',
    solution: 'Relaxed the environment SDK constraint in pubspec.yaml and downgraded conflicting linter rules packages.',
    code: "environment:\n  sdk: '>=3.2.0 <4.0.0'\n\ndev_dependencies:\n  flutter_lints: ^3.0.0"
  }
];

export default function DebugPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Troubleshooting & Debug</h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Common errors, hardware permission configurations, and debug solutions for the WaveGo Whisper-bot platform.
        </p>
      </div>

      {/* Retrospective Log Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>📝</span> Major Development Issues & Solutions
        </h2>
        <p className="text-sm text-slate-400">
          Historical log of critical errors solved during Whisper-bot development:
        </p>
        
        <div className="grid grid-cols-1 gap-6">
          {retrospectiveIssues.map((issue) => (
            <div key={issue.id} className="border border-white/10 rounded-xl p-6 bg-slate-900/40 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                  Issue #{issue.id}: {issue.category}
                </span>
                <span className="text-xs font-semibold text-slate-500 font-mono">
                  {issue.component}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{issue.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pt-4 border-t border-white/5">
                <div>
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1.5">Root Cause</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{issue.rootCause}</p>
                </div>
                <div className="bg-purple-950/10 border border-purple-500/10 rounded-lg p-4 flex flex-col gap-2">
                  <div>
                    <h4 className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1.5">Working Solution</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{issue.solution}</p>
                  </div>
                  {issue.code && (
                    <pre className="bg-black/55 p-3 rounded font-mono text-[11px] text-slate-300 overflow-x-auto whitespace-pre leading-relaxed border border-white/5">
                      {issue.code}
                    </pre>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Permission Fallbacks */}
      <div className="border border-red-500/20 rounded-xl p-6 bg-red-950/10 space-y-4">
        <h2 className="text-2xl font-bold text-red-400 flex items-center gap-2">
          <span>⚠️</span> Serial Port Access Denied (/dev/ttyS0)
        </h2>
        
        <div className="space-y-2">
          <p className="text-sm font-bold text-slate-300">Symptom / Logs:</p>
          <pre className="bg-black/60 p-4 rounded-lg font-mono text-xs text-red-300 whitespace-pre overflow-x-auto">
{`serial open failed: [Errno 13] could not open port /dev/ttyS0: Permission denied: '/dev/ttyS0'
serial write failed: write failed: [Errno 5] Input/output error`}
          </pre>
        </div>

        <div className="space-y-3 text-slate-300">
          <p className="text-sm font-semibold">Root Cause:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>Access Restrictions:</strong> Linux reserves device serial lines for root or accounts belonging to the <code className="text-purple-300">dialout</code> group.</li>
            <li><strong>Port Locking:</strong> Raspberry Pi OS starts a background console login shell on the hardware serial lines by default, locking out user applications.</li>
          </ul>
        </div>

        <div className="space-y-4 pt-2">
          <h3 className="text-lg font-bold text-white">System Resolution Steps</h3>
          
          <div className="space-y-3 text-sm">
            <h4 className="font-bold text-purple-400">Step 1: Grant User Serial Group Access</h4>
            <p className="text-slate-300">
              Run the following command in the Raspberry Pi shell to add your active user to the serial communication group:
            </p>
            <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-xs">{`sudo usermod -a -G dialout $USER`}</pre>
            <p className="text-slate-400 italic">Note: You must reboot the Pi afterwards (<code className="text-slate-300">sudo reboot</code>) for the groups to reload.</p>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="font-bold text-purple-400">Step 2: Disable Serial Terminal Console via raspi-config</h4>
            <p className="text-slate-300">
              Free up the serial port from the OS kernel console terminal:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-slate-300">
              <li>Launch the raspi configuration utility: <code className="text-slate-200">sudo raspi-config</code></li>
              <li>Navigate to <strong>Interface Options</strong> (or <strong>Interfacing Options</strong>) &gt; <strong>Serial Port</strong>.</li>
              <li>Select <strong>No</strong> when asked: <em>"Would you like a login shell to be accessible over serial?"</em></li>
              <li>Select <strong>Yes</strong> when asked: <em>"Would you like the serial port hardware to be enabled?"</em></li>
              <li>Finish and reboot the Raspberry Pi.</li>
            </ol>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="font-bold text-purple-400">Step 3: Permanent udev Device Rule (Fallback Option)</h4>
            <p className="text-slate-300">
              If permissions persist after reboot, configure a persistent udev rule to force global read-write permissions:
            </p>
            <pre className="bg-black/40 p-3 rounded-lg text-slate-300 font-mono text-xs">{`echo 'KERNEL=="ttyS0", MODE="0666"' | sudo tee /etc/udev/rules.d/99-serial.rules
sudo udevadm control --reload-rules && sudo udevadm trigger`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
