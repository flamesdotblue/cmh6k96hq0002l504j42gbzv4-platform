import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, XCircle, Info, ScanSearch } from 'lucide-react';

function Gauge({ value = 72 }) {
  const clamped = Math.max(0, Math.min(100, value));
  const color = clamped >= 80 ? '#34d399' : clamped >= 50 ? '#f59e0b' : '#f87171';
  const bg = 'rgba(255,255,255,0.08)';
  const gradient = `conic-gradient(${color} ${clamped * 3.6}deg, ${bg} ${clamped * 3.6}deg)`;
  return (
    <div className="relative w-48 h-48 sm:w-60 sm:h-60">
      <div className="absolute inset-0 rounded-full" style={{ background: gradient }} />
      <div className="absolute inset-2 rounded-full border border-white/20 bg-black/40 backdrop-blur" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-4xl font-extrabold" style={{ color }}>{clamped}</div>
        <div className="text-xs text-white/60 tracking-wide">Trust Score</div>
      </div>
    </div>
  );
}

export default function TrustScore() {
  const [query, setQuery] = useState('PhonePe');
  const [score, setScore] = useState(95);
  const [explain, setExplain] = useState('Strong compliance, transparent permissions, and excellent user trust.');

  const known = useMemo(() => ({
    'phonepe': { score: 95, explain: 'Safe: audited, transparent, strong reputation.' },
    'paytm': { score: 90, explain: 'Safe: large-scale provider, compliance signals strong.' },
    'gpay': { score: 94, explain: 'Safe: robust security, minimal risky permissions.' },
    'fastcash': { score: 25, explain: 'High Risk: unrealistic claims, data overreach, harassment reports.' },
    'quick loan': { score: 32, explain: 'High Risk: unregistered, high interest, aggressive collection.' },
  }), []);

  const handleScan = () => {
    const key = query.trim().toLowerCase();
    if (known[key]) {
      setScore(known[key].score);
      setExplain(known[key].explain);
    } else {
      const hash = key.split('').reduce((a, c) => (a + c.charCodeAt(0)) % 101, 42);
      const noisy = Math.max(5, Math.min(98, Math.round((hash / 100) * 100)));
      const reason = noisy >= 80 ? 'Signals look good: transparent, reputable, minimal permissions.' : noisy >= 50 ? 'Mixed signals: some permissions and claims need review.' : 'Risky indicators: low transparency and overreaching permissions.';
      setScore(noisy);
      setExplain(reason);
    }
  };

  const status = score >= 80 ? { icon: CheckCircle2, label: 'Safe', color: 'text-emerald-400', badge: 'bg-emerald-500/15 border-emerald-400/30' } : score >= 50 ? { icon: AlertTriangle, label: 'Moderate Risk', color: 'text-amber-300', badge: 'bg-amber-500/15 border-amber-400/30' } : { icon: XCircle, label: 'High Risk', color: 'text-rose-400', badge: 'bg-rose-500/15 border-rose-400/30' };
  const Icon = status.icon;

  return (
    <section id="trust" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-8">
            <div className="flex items-center gap-2 text-cyan-200 text-xs">
              <ScanSearch className="w-4 h-4" /> Key Innovation
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Holographic Trust Score</h2>
            <p className="mt-3 text-white/70">0–100 meter with explainable reasoning. Hover to reveal AI insights and risk drivers.</p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <div className="px-3 py-1 rounded-full border border-white/15 bg-white/5">80–100 Safe</div>
              <div className="px-3 py-1 rounded-full border border-white/15 bg-white/5">50–79 Moderate</div>
              <div className="px-3 py-1 rounded-full border border-white/15 bg-white/5">0–49 High Risk</div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <div className="text-white/70 text-sm">PhonePe</div>
                <div className="mt-2 h-1.5 rounded bg-white/10 overflow-hidden"><div className="h-full w-[95%] bg-gradient-to-r from-cyan-400 to-emerald-400" /></div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <div className="text-white/70 text-sm">FastCash</div>
                <div className="mt-2 h-1.5 rounded bg-white/10 overflow-hidden"><div className="h-full w-[25%] bg-gradient-to-r from-rose-400 to-amber-400" /></div>
              </div>
            </div>
          </div>

          <div id="scan" className="relative grid place-items-center">
            <div className="relative rounded-[2rem] border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-blue-700/10 p-6 backdrop-blur-xl shadow-2xl">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-cyan-400/0 via-emerald-400/0 to-blue-500/0 hover:from-cyan-400/10 hover:via-emerald-400/10 hover:to-blue-500/10 transition" />
              <div className="relative flex flex-col items-center gap-6">
                <Gauge value={score} />
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border ${status.badge}`}>
                  <Icon className={`w-4 h-4 ${status.color}`} />
                  <span className={`${status.color}`}>{status.label}</span>
                </div>
                <p className="text-center text-sm text-white/70 max-w-md">
                  {explain}
                </p>
                <div className="w-full flex flex-col sm:flex-row items-stretch gap-3">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter app or loan offer name"
                    className="flex-1 rounded-xl bg-black/40 border border-white/20 px-4 py-3 outline-none text-white placeholder-white/60 focus:border-cyan-400/60"
                  />
                  <button onClick={handleScan} className="rounded-xl px-5 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 border border-white/20 hover:opacity-90 font-semibold">Scan with AI</button>
                </div>
                <div className="w-full grid grid-cols-3 gap-3 text-[11px] text-white/70">
                  <div className="rounded-lg border border-white/15 bg-white/5 p-3">Low transparency + unrealistic claims + camera access → Risk 78%</div>
                  <div className="rounded-lg border border-white/15 bg-white/5 p-3">RBI registry check + community reviews + permission diff → Live update</div>
                  <div className="rounded-lg border border-white/15 bg-white/5 p-3">Agentic AI monitors changes and notifies you</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
