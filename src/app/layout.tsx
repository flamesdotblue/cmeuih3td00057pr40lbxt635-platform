import './globals.css'
import type { Metadata } from 'next'
import { Inter, Caveat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })

export const metadata: Metadata = {
  title: 'Echo — Voice Journaling for Emotional Clarity',
  description:
    'Echo helps you track emotional patterns and daily reflections through gentle voice notes. A calm space to hear yourself.',
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="min-h-screen bg-soft-radial antialiased text-slate-800 selection:bg-mist-200/60 selection:text-slate-900">
        {children}
      </body>
    </html>
  )
}
