import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Fingerprint, Scan, ArrowRight } from 'lucide-react';

function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.8 + 0.3,
      a: Math.random() * 0.6 + 0.2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        gradient.addColorStop(0, 'rgba(56,189,248,0.9)');
        gradient.addColorStop(1, 'rgba(56,189,248,0)');
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-[90vh] pt-28 sm:pt-32 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 blur-3xl" />

      <Particles />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-cyan-200 text-xs backdrop-blur">
                <Fingerprint className="w-3.5 h-3.5" /> Agentic AI Security
              </div>
              <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                TrustLens AI — Your Financial Safety Guardian
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl">
                AI-powered protection against fake loan apps, scams, and misinformation. Feel safe, informed, and in control with real-time Trust Scores and proactive guidance.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#scan" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-emerald-900/30 border border-white/20 hover:opacity-90">
                  <Scan className="w-4 h-4" /> Scan an App
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
                <a href="#safeapps" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold border border-white/20 bg-white/10 hover:bg-white/20">
                  <Shield className="w-4 h-4" /> Explore Safe Apps
                </a>
              </div>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Paytm','PhonePe','RBI Data','Community'].map((label) => (
                <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur group overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/0 via-emerald-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:via-emerald-500/10 group-hover:to-blue-600/10 transition" />
                  <div className="relative text-sm text-white/70">{label}</div>
                  <div className="relative mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-emerald-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-12 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-emerald-500/20 blur-3xl" />
              <div className="relative aspect-square rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),transparent_60%)]" />
                <div className="absolute -top-10 right-8 w-24 h-24 rounded-full bg-emerald-400/20 blur-2xl" />
                <div className="absolute bottom-6 left-8 w-24 h-24 rounded-full bg-cyan-400/20 blur-2xl" />
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-10 rounded-full bg-cyan-400/30 blur-2xl animate-pulse" />
                    <div className="relative grid place-items-center h-56 w-56 rounded-full border border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-blue-600/10 backdrop-blur-xl shadow-inner">
                      <Shield className="w-16 h-16 text-cyan-200 drop-shadow" />
                      <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_14s_linear_infinite] opacity-50" />
                      <div className="absolute -bottom-6 text-center text-xs text-cyan-100/80">Active Protection Field</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
