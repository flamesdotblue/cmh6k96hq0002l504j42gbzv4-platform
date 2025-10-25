import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/60 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-600/20 border border-indigo-500/30">
            <Rocket className="text-indigo-400" size={20} />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Go Hello World Server</h1>
            <p className="text-xs text-slate-400">Responds with "Hello World" to any request</p>
          </div>
        </div>
        <a
          href="https://go.dev/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-slate-300 hover:text-white transition-colors"
        >
          Learn Go
        </a>
      </div>
    </header>
  );
}
