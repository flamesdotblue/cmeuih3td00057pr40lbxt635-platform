import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      {/* Decorative background scribbles */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply">
        <svg aria-hidden className="absolute -top-12 right-0 h-[36rem] w-[36rem] text-mist-200" viewBox="0 0 600 600" fill="none">
          <path d="M64 320c56-40 160-40 216 0s160 40 216 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M64 360c56-40 160-40 216 0s160 40 216 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M64 400c56-40 160-40 216 0s160 40 216 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

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
            <a href="#features" className="btn btn-ghost rounded-full px-4 py-2">How it works</a>
            <a href="#faq" className="btn btn-ghost rounded-full px-4 py-2">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 w-full">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl leading-tight md:text-6xl">
              <span className="block text-slate-700">A calm place to</span>
              <span className="block handwritten text-[2.75rem] md:text-6xl" style={{fontFamily: 'var(--font-caveat)'}}>hear yourself</span>
            </h1>
            <p className="mt-6 max-w-prose text-slate-600">
              Echo is a minimalist voice journal that gently captures your reflections and reveals emotional patterns over time. Speak, breathe, and let your thoughts settle.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Link href="#get-started" className="btn btn-primary focus-ring" aria-label="Start Journaling">
                Start Journaling
              </Link>
              <a href="#features" className="btn btn-ghost focus-ring">See features</a>
            </div>
            <div className="mt-8 h-px w-full divider" />
            <p className="mt-4 text-sm text-slate-500">Private by default • Local-first • Made for gentle routines</p>
          </div>

          {/* Right: preview card */}
          <div className="relative">
            <div className="card relative mx-auto max-w-md rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Today</span>
                <span className="text-xs text-slate-500">Day 12</span>
              </div>
              <div className="mt-4 rounded-xl border border-white/60 bg-white/70 p-4">
                <div className="flex items-center gap-3">
                  <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mist-500 text-white shadow-soft focus-ring" aria-label="Record">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 3a4 4 0 0 0-4 4v5a4 4 0 1 0 8 0V7a4 4 0 0 0-4-4Z" stroke="currentColor" strokeWidth="1.6"/>
                      <path d="M5 11v1a7 7 0 0 0 14 0v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                      <path d="M12 22v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <div className="flex-1">
                    <div className="h-10 w-full overflow-hidden">
                      <Waveform />
                    </div>
                    <p className="mt-2 text-xs text-slate-500">Tap to start a 2-min reflection</p>
                  </div>
                </div>
              </div>
              <blockquote className="mt-5 rounded-xl bg-white/60 p-4 italic text-slate-600" style={{fontFamily: 'var(--font-caveat)'}}>
                "Noticing more calm after naming my feelings out loud."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="w-full py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Feature title="Speak freely" desc="Press once, talk, and Echo captures your voice with gentle noise smoothing."/>
            <Feature title="Feelings map" desc="See patterns across days and moods without overwhelming charts."/>
            <Feature title="Private by default" desc="Your entries live on your device unless you choose to sync."/>
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

      {/* Footer */}
      <footer className="w-full border-t border-white/60 bg-white/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Echo</p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#faq" className="hover:text-slate-700">FAQ</a>
            <a href="#privacy" className="hover:text-slate-700">Privacy</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card rounded-2xl p-6">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-mist-500/20 text-mist-700">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 12l3 3 9-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <p className="mt-1 text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function Waveform() {
  return (
    <svg viewBox="0 0 240 40" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
      <polyline fill="none" stroke="#7bc2c2" strokeWidth="2" points="0,20 10,18 20,22 30,12 40,26 50,18 60,22 70,10 80,30 90,16 100,24 110,14 120,26 130,18 140,22 150,12 160,28 170,14 180,24 190,16 200,22 210,12 220,26 230,20 240,22" />
    </svg>
  )
}
