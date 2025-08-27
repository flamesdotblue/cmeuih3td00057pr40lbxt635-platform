'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      {/* Ambient gradient shapes */}
      <DecorativeBackground />

      {/* Header */}
      <header className="w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 ring-1 ring-white/50 shadow-soft">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 4v16m6-8H6" stroke="#1d3b3b" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="text-lg tracking-tight" style={{fontFamily: 'var(--font-caveat)'}}>Echo</span>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <a href="#how" className="btn btn-ghost rounded-full px-4 py-2">How it works</a>
            <a href="#features" className="btn btn-ghost rounded-full px-4 py-2">Features</a>
            <a href="#privacy" className="btn btn-ghost rounded-full px-4 py-2">Privacy</a>
            <a href="#faq" className="btn btn-ghost rounded-full px-4 py-2">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 w-full">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pt-6 pb-4 md:grid-cols-2 md:pt-10 md:pb-10">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs text-slate-600">
              <span className="inline-flex h-2 w-2 rounded-full bg-mist-500" />
              Gentle by design
            </div>
            <h1 className="mt-4 text-5xl leading-tight md:text-6xl">
              <span className="block text-slate-700">A calm place to</span>
              <span className="block handwritten text-[2.75rem] md:text-6xl" style={{fontFamily: 'var(--font-caveat)'}}>hear yourself</span>
            </h1>
            <p className="mt-5 max-w-prose text-slate-600">
              Echo is a minimalist voice journal that captures your reflections and gently reveals emotional patterns over time. Speak, breathe, and let your thoughts settle.
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link href="#get-started" className="btn btn-primary focus-ring" aria-label="Start Journaling">
                Start Journaling
              </Link>
              <a href="#how" className="btn btn-ghost focus-ring">How it works</a>
            </div>
            <ul className="mt-6 grid grid-cols-3 gap-4 text-xs text-slate-500 max-w-md">
              <li className="flex items-center gap-2"><Check />Private by default</li>
              <li className="flex items-center gap-2"><Check />Local-first</li>
              <li className="flex items-center gap-2"><Check />2-min sessions</li>
            </ul>
          </div>

          {/* Right: aesthetic preview */}
          <div className="relative">
            <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-mist-500/30 blur-3xl opacity-60 float-slow" />
            <div className="card relative mx-auto max-w-md rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Today</span>
                <span className="text-xs text-slate-500">Day 12</span>
              </div>
              <div className="mt-4 rounded-xl border border-white/60 bg-white/70 p-4">
                <div className="flex items-center gap-3">
                  <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mist-500 text-white shadow-soft focus-ring" aria-label="Record">
                    <MicIcon />
                  </button>
                  <div className="flex-1">
                    <div className="h-10 w-full overflow-hidden">
                      <WaveformAnimated />
                    </div>
                    <p className="mt-2 text-xs text-slate-500">Tap to start a 2-min reflection</p>
                  </div>
                </div>
              </div>
              <blockquote className="mt-5 rounded-xl bg-white/60 p-4 italic text-slate-600" style={{fontFamily: 'var(--font-caveat)'}}>
                "Noticing more calm after naming my feelings out loud."
              </blockquote>
            </div>
            <HandUnderline />
          </div>
        </div>
      </section>

      {/* Logos / social proof */}
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-6 pb-8">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 opacity-70 sm:grid-cols-4">
            <Logo name="Mindful Daily" />
            <Logo name="Calm Labs" />
            <Logo name="Balance Co" />
            <Logo name="Open Wellness" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="w-full py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-semibold text-slate-800">How Echo supports your routine</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">A gentle flow that fits into a few mindful minutes each day.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Step number="01" title="Press and speak" desc="Begin a short voice note. No scripts—just you." />
            <Step number="02" title="Echo listens" desc="Noise smoothing keeps your words clear and calm." />
            <Step number="03" title="See patterns" desc="Subtle insights help you notice what changes your mood." />
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section id="features" className="w-full py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Feature title="Speak freely" desc="Press once, talk, and Echo captures your voice with gentle noise smoothing."/>
            <Feature title="Feelings map" desc="See patterns across days and moods without overwhelming charts."/>
            <Feature title="Private by default" desc="Your entries live on your device unless you choose to sync."/>
          </div>
        </div>
      </section>

      {/* Mood insights */}
      <section className="w-full py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-slate-800">Find calm in your patterns</h3>
              <p className="mt-3 text-slate-600">Echo gently surfaces trends—from energy to emotion—so you can notice shifts without overanalyzing. Minimal visuals, meaningful insights.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Check />Daily sentiment and tags</li>
                <li className="flex items-center gap-2"><Check />Weekly rhythm overview</li>
                <li className="flex items-center gap-2"><Check />Moments that matter</li>
              </ul>
            </div>
            <div className="card rounded-3xl p-6">
              <InsightsMock />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="w-full py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="card grid gap-6 rounded-3xl p-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-slate-800">Private by default</h3>
              <p className="mt-3 text-slate-600">Your journal is yours. Echo is local-first and keeps your audio on your device unless you choose to sync.</p>
            </div>
            <ul className="grid gap-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><LockIcon />Local processing</li>
              <li className="flex items-center gap-2"><LockIcon />End-to-end encryption for sync</li>
              <li className="flex items-center gap-2"><LockIcon />No ads, no trackers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-center text-xl font-semibold text-slate-800">What people are saying</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <TestimonialCard quote="I finally built a journaling habit that feels natural." by="Ari" />
            <TestimonialCard quote="Speaking out loud helped me untangle anxious loops." by="Sam" />
            <TestimonialCard quote="Small, quiet, and exactly what I needed each morning." by="Noah" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="w-full pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="card mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl p-8 text-center">
            <h2 className="text-2xl">Ready to begin?</h2>
            <p className="max-w-prose text-slate-600">Two minutes a day can change the way you feel. Start where you are.</p>
            <Link href="#" className="btn btn-primary focus-ring" aria-label="Start Journaling CTA">Start Journaling</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full pb-14">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-center text-xl font-semibold text-slate-800">Frequently asked questions</h3>
          <div className="mx-auto mt-6 max-w-2xl space-y-3">
            <AccordionItem q="Is Echo free?" a="Echo will offer a generous free plan with optional upgrades for sync and longer reflections." />
            <AccordionItem q="Do I need an account?" a="You can start journaling locally without an account. Accounts are only needed if you choose to sync." />
            <AccordionItem q="Can I export my entries?" a="Yes. You can export audio and transcripts at any time from your device." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/60 bg-white/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Echo</p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#privacy" className="hover:text-slate-700">Privacy</a>
            <a href="#faq" className="hover:text-slate-700">FAQ</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function DecorativeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply">
      <svg aria-hidden className="absolute -top-12 right-0 h-[36rem] w-[36rem] text-mist-200" viewBox="0 0 600 600" fill="none">
        <path d="M64 320c56-40 160-40 216 0s160 40 216 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M64 360c56-40 160-40 216 0s160 40 216 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M64 400c56-40 160-40 216 0s160 40 216 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="absolute left-[-6rem] top-[20%] h-72 w-72 rounded-full bg-[#b4a6f0]/20 blur-3xl pulse-soft" />
      <div className="absolute right-[10%] bottom-[10%] h-60 w-60 rounded-full bg-[#ffb6c1]/20 blur-3xl pulse-soft" />
    </div>
  )
}

function HandUnderline() {
  return (
    <svg aria-hidden className="absolute -bottom-6 right-4 w-48 text-mist-400" viewBox="0 0 240 40" fill="none">
      <path d="M10 20c40 10 80 10 220 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 12l3 3 9-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3a4 4 0 0 0-4 4v5a4 4 0 1 0 8 0V7a4 4 0 0 0-4-4Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M5 11v1a7 7 0 0 0 14 0v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M12 22v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M8 10V8a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card rounded-2xl p-6">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-mist-500/20 text-mist-700">
          <Check />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <p className="mt-1 text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function Step({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="card rounded-2xl p-6">
      <div className="text-xs text-slate-500">{number}</div>
      <h4 className="mt-1 text-lg font-semibold text-slate-800">{title}</h4>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  )
}

function Logo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-white/50 bg-white/40 px-4 py-3 text-sm text-slate-600">
      {name}
    </div>
  )
}

function TestimonialCard({ quote, by }: { quote: string; by: string }) {
  return (
    <div className="card rounded-2xl p-6">
      <p className="italic text-slate-700" style={{fontFamily: 'var(--font-caveat)'}}>“{quote}”</p>
      <p className="mt-3 text-sm text-slate-500">— {by}</p>
    </div>
  )
}

function InsightsMock() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">Weekly overview</span>
        <span className="text-xs text-slate-500">Last 7 days</span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {[60, 30, 45, 70, 50, 80, 40].map((h, i) => (
          <div key={i} className="flex h-24 items-end">
            <div style={{ height: `${h}%` }} className="w-full rounded-md bg-mist-500/60" />
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-white/60 bg-white/70 p-4">
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <span className="inline-flex h-2 w-2 rounded-full bg-mist-500" />
          Calm moments rose mid-week. Keep naming emotions in the morning.
        </div>
      </div>
    </div>
  )
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="accordion-item">
      <button className="accordion-button" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <span className="font-medium text-slate-800">{q}</span>
        <svg className={`transition-transform ${open ? 'rotate-180' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="accordion-content">{a}</div>
      )}
    </div>
  )
}

function WaveformAnimated() {
  return (
    <svg viewBox="0 0 240 40" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
      <polyline fill="none" stroke="#7bc2c2" strokeWidth="2" points="0,20 10,18 20,22 30,12 40,26 50,18 60,22 70,10 80,30 90,16 100,24 110,14 120,26 130,18 140,22 150,12 160,28 170,14 180,24 190,16 200,22 210,12 220,26 230,20 240,22">
        <animate attributeName="points" dur="3s" repeatCount="indefinite" values="0,20 10,18 20,22 30,12 40,26 50,18 60,22 70,10 80,30 90,16 100,24 110,14 120,26 130,18 140,22 150,12 160,28 170,14 180,24 190,16 200,22 210,12 220,26 230,20 240,22;0,22 10,16 20,26 30,10 40,28 50,16 60,24 70,12 80,28 90,18 100,22 110,16 120,28 130,14 140,24 150,10 160,30 170,12 180,26 190,14 200,24 210,10 220,28 230,22 240,20;0,20 10,18 20,22 30,12 40,26 50,18 60,22 70,10 80,30 90,16 100,24 110,14 120,26 130,18 140,22 150,12 160,28 170,14 180,24 190,16 200,22 210,12 220,26 230,20 240,22" />
      </polyline>
    </svg>
  )
}
