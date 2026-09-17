import React, { useState } from 'react';
import { Github, Mail, Heart, Gamepad2, X, Check, Copy } from 'lucide-react';

export const Footer: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [githubModalOpen, setGithubModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const contactEmail = 'aryamanchhaperwal@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                <Gamepad2 className="w-4 h-4" />
              </div>
              <span className="text-lg font-black tracking-tight text-white uppercase">
                ARYAMAN'S GAME ARCADE
              </span>
            </div>
            <p className="text-sm text-cyan-400/90 font-mono tracking-wide">
              More games coming soon.
            </p>
          </div>

          {/* Action Links & Placeholders */}
          <div className="flex items-center gap-4">
            {/* GitHub Placeholder Button */}
            <button
              id="footer-github-btn"
              onClick={() => setGithubModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </button>

            {/* Contact Placeholder Button */}
            <button
              id="footer-contact-btn"
              onClick={() => setContactModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Aryaman's Game Arcade. All games belong to their respective creator.</p>
          <div className="flex items-center gap-2">
            <span>Built with passion for indie game development</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl">
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Contact Aryaman</h3>
                <p className="text-xs text-slate-400">Game feedback, suggestions & inquiries</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-5 leading-relaxed">
              Have feedback on one of the games or want to collaborate on a new project? Reach out directly via email:
            </p>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 mb-6 font-mono text-sm text-cyan-300">
              <span className="truncate">{contactEmail}</span>
              <button
                onClick={copyEmail}
                className="ml-2 flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex gap-3">
              <a
                href={`mailto:${contactEmail}?subject=Aryaman's%20Game%20Arcade%20Inquiry`}
                className="flex-1 py-2.5 rounded-xl font-bold text-center text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                Send Email
              </a>
              <button
                onClick={() => setContactModalOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Modal */}
      {githubModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl">
            <button
              onClick={() => setGithubModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">GitHub Repository</h3>
                <p className="text-xs text-slate-400">Source code & game experiments</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              This arcade launcher is fully open source and ready to deploy to GitHub and Netlify. You can connect your GitHub account or customize the repository link in the footer.
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl font-bold text-center text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-colors"
              >
                Visit GitHub
              </a>
              <button
                onClick={() => setGithubModalOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
