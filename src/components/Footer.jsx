import React from 'react';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-500 to-emerald-500 border border-white/20" />
              <div className="font-semibold">TrustLens AI</div>
            </div>
            <div className="mt-2 text-xs text-white/60">© 2025 TrustLens AI. All rights reserved.</div>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Support</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="p-2 rounded-lg border border-white/15 hover:bg-white/10"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-lg border border-white/15 hover:bg-white/10"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-lg border border-white/15 hover:bg-white/10"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
