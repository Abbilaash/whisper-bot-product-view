import React from 'react';

export default function DebugPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Troubleshooting & Debug</h1>
      <p className="text-lg text-slate-300 leading-relaxed">
        Common errors, hardware permission configurations, and debug solutions for the WaveGo Whisper-bot platform.
      </p>

      <div className="border border-red-500/20 rounded-xl p-6 bg-red-950/10 my-8 space-y-4">
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
