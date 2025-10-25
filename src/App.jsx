import React, { useEffect, useRef, useState } from 'react';
import { Sun, Moon, Bot, Send } from 'lucide-react';
import Hero from './components/Hero';
import TrustScore from './components/TrustScore';
import Sections from './components/Sections';
import Footer from './components/Footer';

function useDarkMode() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);
  return { theme, setTheme };
}

function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am the TrustLens assistant. Ask me if an app is safe.' },
  ]);
  const [input, setInput] = useState('');
  const panelRef = useRef(null);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    setInput('');
    const lower = text.toLowerCase();
    let response = "I couldn't find that app. Please provide more details.";
    if (/(fastcash|quick loan|flash money)/.test(lower)) {
      response = 'Preliminary signal: High Risk. Reports of harassment and data overreach. Suggested action: Avoid and report.';
    } else if (/(phonepe|paytm|gpay|google pay)/.test(lower)) {
      response = 'Likely Safe. Strong reputation and compliance track record. Always verify permissions and source.';
    } else if (/permission|safe|trust score|scan/.test(lower)) {
      response = 'Upload or input the app name in the Scan Demo to generate a Trust Score and recommended action.';
    }
    setTimeout(() => setMessages((m) => [...m, { from: 'bot', text: response }]), 600);
  };

  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.scrollTop = panelRef.current.scrollHeight;
    }
  }, [messages, open]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-[320px] sm:w-[380px] rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500/20 via-emerald-500/10 to-blue-600/20 border-b border-white/10">
            <Bot className="w-5 h-5 text-cyan-300" />
            <div className="text-sm font-medium text-white">TrustLens Assistant</div>
            <div className="ml-auto text-[10px] text-white/70">Agentic AI Demo</div>
          </div>
          <div ref={panelRef} className="max-h-72 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm leading-relaxed ${m.from === 'bot' ? 'text-cyan-100' : 'text-white'} `}>
                <div className={`inline-block px-3 py-2 rounded-xl shadow-sm ${m.from === 'bot' ? 'bg-cyan-500/10 border border-cyan-400/30' : 'bg-white/10 border border-white/20'}`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 p-3 border-t border-white/10">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about an app..."
              className="flex-1 bg-transparent outline-none text-white placeholder-white/60 text-sm px-3 py-2 rounded-lg border border-white/20 focus:border-cyan-400/60"
            />
            <button onClick={handleSend} className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 hover:bg-cyan-500/30 transition">
              <Send className="w-4 h-4 text-cyan-200" />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg shadow-cyan-900/30 hover:shadow-cyan-800/40 border border-white/20 backdrop-blur-md"
      >
        <Bot className="w-5 h-5" />
        <span className="text-sm font-medium">Ask me if an app is safe</span>
        <span className="absolute inset-0 rounded-full ring-2 ring-cyan-400/30 opacity-0 group-hover:opacity-100 transition"></span>
      </button>
    </div>
  );
}

export default function App() {
  const { theme, setTheme } = useDarkMode();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 blur-md bg-cyan-400/40 rounded-full" />
                <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 border border-white/30 shadow-inner" />
              </div>
              <div className="font-semibold tracking-wide">TrustLens AI</div>
              <span className="hidden sm:block text-xs text-white/60 ml-2">Your Financial Safety Guardian</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#vision" className="hover:text-white">Vision</a>
              <a href="#trust" className="hover:text-white">Trust Score</a>
              <a href="#how" className="hover:text-white">How it works</a>
              <a href="#contact" className="hover:text-white">Join</a>
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <a href="#scan" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 border border-white/20 shadow-lg hover:opacity-90 transition text-sm font-medium">Scan an App</a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Sections />
        <TrustScore />
      </main>

      <Footer />
      <FloatingChatbot />
    </div>
  );
}
