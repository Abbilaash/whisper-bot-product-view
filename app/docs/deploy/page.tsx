import React from 'react';

export default function DeployPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Quick Start & Deployment</h1>
      <p className="text-lg text-slate-300 leading-relaxed">
        Step-by-step instructions to configure, install, and run the WaveGo Whisper-bot platform on any compatible hardware.
      </p>

      {/* Robot Hardware Platform Section */}
      <div className="border border-white/10 rounded-xl p-6 bg-slate-900/40 space-y-4">
        <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
          <span>🤖</span> WaveGo Hardware Platform
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          The Whisper Bot is built on top of the <a href="https://www.waveshare.com/wavego.htm" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline font-semibold">Waveshare WaveGo Quadruped Robot</a>. It interfaces a Raspberry Pi controller with the robot's ESP32 locomotion board.
        </p>
        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Circuit Connection Schematic:</p>
          <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex justify-center">
            <img 
              src="/preview-2.png" 
              alt="WaveGo ESP32 Board and Raspberry Pi Circuit Connection" 
              className="rounded-lg max-h-96 object-contain"
            />
          </div>
        </div>
      </div>

      {/* OS Flashing Section */}
      <div className="border border-white/10 rounded-xl p-6 bg-slate-900/40 space-y-4">
        <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
          <span>💿</span> OS Flashing & Setup
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Prepare your Raspberry Pi's bootable SD card/SSD with one of the following recommended setups:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-black/30 border border-white/5 rounded-lg space-y-2">
            <h3 className="font-bold text-white text-sm">Option 1: Raspberry Pi OS</h3>
            <p className="text-xs text-slate-400">
              Download and use the official flashing utility:
            </p>
            <a 
              href="https://www.raspberrypi.com/software/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-xs bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600/30 px-3 py-1.5 rounded font-semibold transition-colors"
            >
              Get RPi Imager
            </a>
          </div>
          <div className="p-4 bg-black/30 border border-white/5 rounded-lg space-y-2">
            <h3 className="font-bold text-white text-sm">Option 2: Ubuntu OS</h3>
            <p className="text-xs text-slate-400">
              Download <a href="https://ubuntu.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Ubuntu Server/Desktop</a> and flash using:
            </p>
            <div className="flex gap-2">
              <a 
                href="https://rufus.ie/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-slate-300 hover:text-white underline"
              >
                Rufus
              </a>
              <span className="text-slate-600">|</span>
              <a 
                href="https://etcher.balena.io/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-slate-300 hover:text-white underline"
              >
                balenaEtcher
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Automated Installation Section */}
      <div className="border border-white/10 rounded-xl p-6 bg-slate-900/40 space-y-4">
        <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
          <span>📦</span> Automated Installer Setup
        </h2>
        <p className="text-sm text-slate-300">
          The project includes an <code className="text-purple-300">install.sh</code> script that updates packages, configures groups, installs python requirements, and downloads public models.
        </p>

        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Shell Installation Commands:</p>
          <pre className="bg-black/60 p-4 rounded-lg font-mono text-xs text-purple-300 whitespace-pre overflow-x-auto">
            {`# 1. Clone the project repository
git clone https://github.com/Abbilaash/WaveGo.git
cd WaveGo/whisper-bot

# 2. Grant execution permissions and run the installer
chmod +x install.sh
./install.sh`}
          </pre>
        </div>

        <div className="border-l-4 border-yellow-500/50 bg-yellow-500/10 p-4 rounded-r-lg text-xs text-slate-300 space-y-1">
          <p className="font-bold text-yellow-400 flex items-center gap-1">⚠️ Important permission reload required:</p>
          <p>
            The script adds the active user to the <code className="text-yellow-200">dialout</code> group to access the serial interface. You must log out and back in, reboot, or run <code className="text-yellow-200">su - $USER</code> for permissions to take effect.
          </p>
        </div>
      </div>



      {/* Background Services Section */}
      <div className="border border-white/10 rounded-xl p-6 bg-slate-900/40 space-y-4">
        <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
          <span>⚙️</span> systemd Background Automation
        </h2>
        <p className="text-sm text-slate-300">
          Register the server as a background daemon to launch automatically when the Raspberry Pi boots:
        </p>

        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Service Setup Commands:</p>
          <pre className="bg-black/60 p-4 rounded-lg font-mono text-xs text-purple-300 whitespace-pre overflow-x-auto">
            {`# 1. Copy the systemd service descriptor to the configuration folder
sudo cp whisper-bot.service /etc/systemd/system/

# 2. Reload the systemd daemon to recognize the new configuration
sudo systemctl daemon-reload

# 3. Enable the service to run on startup
sudo systemctl enable whisper-bot.service

# 4. Start the service manually
sudo systemctl start whisper-bot.service`}
          </pre>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Useful logs and status commands:</p>
          <pre className="bg-black/40 p-3 rounded-lg font-mono text-xs text-slate-300 whitespace-pre overflow-x-auto">
            {`# Inspect the status and execution state of the bot
sudo systemctl status whisper-bot.service

# View live execution logs using journalctl
journalctl -u whisper-bot.service -f`}
          </pre>
        </div>
      </div>
    </div>
  );
}
