import React from 'react';

export default function BluetoothPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Bluetooth Speaker Integration</h1>
      <p className="text-lg text-slate-300 leading-relaxed">
        To play audio responses and TTS files dynamically through local speakers, the backend integrates with the Raspberry Pi’s BlueZ core system.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Subprocess Commands Wrapper</h2>
      <p className="text-slate-300 leading-relaxed font-sans">
        The Flask server interacts directly with the Bluetooth daemon via <code>bluetoothctl</code> subprocesses:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li><strong>Scanning:</strong> Runs <code>timeout 8 bluetoothctl scan on</code> to search for surrounding speaker devices.</li>
        <li><strong>Trusting and Pairing:</strong> Issues <code>bluetoothctl trust &lt;MAC&gt;</code> followed by <code>bluetoothctl pair &lt;MAC&gt;</code> to establish keys.</li>
        <li><strong>Connection:</strong> Executes <code>bluetoothctl connect &lt;MAC&gt;</code>, setting the device as an active A2DP audio sink (speaker).</li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Dev Environment Mock Fallbacks</h2>
      <p className="text-slate-300 leading-relaxed font-sans">
        When the server is run on development environments (Windows/macOS) lacking the <code>bluetoothctl</code> CLI, the backend dynamically falls back to a simulated mock manager. This mock manager returns list templates of fake nearby speakers (e.g. <em>"JBL Flip 5"</em>, <em>"Sony SRS-XB13"</em>) and updates connection state variables instantly.
      </p>
    </div>
  );
}
