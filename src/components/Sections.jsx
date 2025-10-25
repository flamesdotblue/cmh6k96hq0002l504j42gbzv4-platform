import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck, Sparkles, Brain, Database, Workflow, ArrowRight, BellRing, Users, SearchCheck, BookOpen, Mail } from 'lucide-react';

const fadeIn = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Sections() {
  return (
    <>
      <section id="vision" className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 text-xs text-cyan-200"><Sparkles className="w-4 h-4" /> Vision</div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Make financial safety as smart as financial growth.</h2>
              <p className="mt-3 text-white/70">TrustLens AI is your agentic financial guardian — proactive, explainable, and evolving. We scan apps, predict risk, advise instantly, and learn continuously.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[{ icon: ShieldCheck, label: 'Scans Apps' }, { icon: Brain, label: 'Predicts Risk' }, { icon: SearchCheck, label: 'Explains Decisions' }, { icon: BellRing, label: 'Real-time Alerts' }].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
                    <Icon className="w-5 h-5 text-cyan-300" />
                    <div className="text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-16 bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-emerald-500/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/15 bg-white/5 p-6 h-full min-h-[22rem] backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="rounded-xl border border-white/15 bg-gradient-to-b from-cyan-500/10 to-blue-600/10 p-4">
                    <div className="text-xs text-white/70">Predatory Apps ↑</div>
                    <div className="mt-4 h-28 w-full bg-white/10 rounded-lg overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-t from-rose-500/40 to-amber-400/30 animate-pulse" />
                    </div>
                    <div className="mt-2 text-xs text-white/60">300% surge this year</div>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-gradient-to-b from-emerald-500/10 to-cyan-600/10 p-4">
                    <div className="text-xs text-white/70">AI Guardian</div>
                    <div className="mt-4 h-28 w-full rounded-lg border border-cyan-400/30 grid place-items-center text-cyan-200">Hologram Scan</div>
                    <div className="mt-2 text-xs text-white/60">Continuous monitoring</div>
                  </div>
                  <div className="col-span-2 rounded-xl border border-white/15 bg-white/5 p-4">
                    <div className="text-xs text-white/70">Illegal activities</div>
                    <div className="mt-3 grid sm:grid-cols-4 gap-3 text-xs text-white/80">
                      {['Contacts theft','Photo access','Harassment','Unregistered'].map((t) => (
                        <div key={t} className="rounded-lg border border-white/15 bg-white/5 p-3 hover:bg-white/10 transition">{t}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="how" className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeIn} className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-8">
            <div className="flex items-center gap-2 text-xs text-cyan-200"><Workflow className="w-4 h-4" /> How it works</div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold">Agentic Architecture</h3>
            <div className="mt-6 grid lg:grid-cols-4 gap-4 text-sm">
              {[{ t: 'Data Collection', d: 'Permissions, reviews, registry, news' }, { t: 'Analysis Engine', d: 'NLP + rules + embeddings' }, { t: 'Output Layer', d: 'Trust Score + verdict' }, { t: 'Agentic Behavior', d: 'Monitors and alerts continuously' }].map((s, i) => (
                <div key={i} className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-cyan-500/10 to-blue-700/10 p-4">
                  <div className="text-white font-medium">{s.t}</div>
                  <div className="mt-1 text-white/70">{s.d}</div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 hidden lg:block">
                    {i < 3 && <ArrowRight className="w-5 h-5 text-cyan-300" />}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid sm:grid-cols-4 gap-3 text-xs">
              {[{ t: 'Hugging Face' }, { t: 'spaCy' }, { t: 'GPT-4/Gemini' }, { t: 'Python Logic' }].map((x) => (
                <div key={x.t} className="rounded-xl border border-white/15 bg-white/5 p-3 text-white/80">{x.t}</div>
              ))}
            </div>

            <div className="mt-8 grid lg:grid-cols-4 gap-4">
              {[{ n: '1', t: 'Input', d: 'Enter app/offer/screenshot' }, { n: '2', t: 'Scan', d: 'Analyze permissions & data' }, { n: '3', t: 'Score', d: 'Generate Trust Score + verdict' }, { n: '4', t: 'Advice', d: 'Actionable next steps' }].map((s) => (
                <div key={s.n} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <div className="text-cyan-300 text-xs">{s.n}</div>
                  <div className="font-medium">{s.t}</div>
                  <div className="text-white/70 text-sm mt-1">{s.d}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeIn} className="grid md:grid-cols-4 gap-4">
            {[{ icon: Brain, t: 'AI-Powered Scam Detector', d: 'Detects deceptive patterns and behavior.' }, { icon: BellRing, t: 'Real-Time Risk Alerts', d: 'Get notified when risk changes.' }, { icon: Database, t: 'Cross-Verified Data', d: 'RBI registry and community reports.' }, { icon: Users, t: 'Community Lens', d: 'Real user insights and reviews.' }].map(({ icon: Icon, t, d }) => (
              <div key={t} className="group relative rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-emerald-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-emerald-500/10 group-hover:to-blue-500/10 transition" />
                <div className="relative flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30"><Icon className="w-5 h-5 text-cyan-300" /></div>
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-white/70 mt-1">{d}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeIn} className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-8">
            <div className="text-xs text-cyan-200 flex items-center gap-2"><BookOpen className="w-4 h-4" /> About</div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold">Why We Built TrustLens</h3>
            <p className="mt-3 text-white/70">Misinformation and fake fintech apps exploit users. TrustLens restores digital trust proactively with a transparent, explainable AI guardian.</p>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {[
                '“I almost got scammed — TrustLens saved me!”',
                '“Finally, an AI that exposes fake loan apps.”',
                '“The Trust Score made my decision easy and safe.”',
              ].map((q, i) => (
                <div key={i} className="rounded-2xl border border-white/15 bg-white/5 p-5 italic text-white/90">{q}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs text-cyan-200 flex items-center gap-2"><Mail className="w-4 h-4" /> Join</div>
              <h3 className="mt-2 text-3xl sm:text-4xl font-bold">Join the Waitlist</h3>
              <p className="mt-3 text-white/70">Be first to try the Chrome extension, API integrations, and community database for suspicious apps.</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs text-white/80">
                {['Chrome Verification Badge','Play Store Safety Layer','Banking API','Community Database','RBI Partnerships','Developer SDK'].map((t) => (
                  <div key={t} className="rounded-xl border border-white/15 bg-white/5 p-3">{t}</div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6">
              <form className="grid gap-3">
                <input placeholder="Name" className="rounded-xl bg-black/40 border border-white/20 px-4 py-3 outline-none text-white placeholder-white/60 focus:border-cyan-400/60" />
                <input placeholder="Email" type="email" className="rounded-xl bg-black/40 border border-white/20 px-4 py-3 outline-none text-white placeholder-white/60 focus:border-cyan-400/60" />
                <textarea placeholder="Message" rows="4" className="rounded-xl bg-black/40 border border-white/20 px-4 py-3 outline-none text-white placeholder-white/60 focus:border-cyan-400/60" />
                <button type="button" className="mt-2 rounded-xl px-5 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 border border-white/20 hover:opacity-90 font-semibold">Join the Waitlist</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
