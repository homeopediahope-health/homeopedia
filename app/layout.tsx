import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: "HomeoPedia.in — India's Homeopathy Knowledge Portal",
  description: 'Evidence-based homeopathy information for Indian patients. Disease guides, medicines, symptoms — CCRH-backed. By Dr. Shadab Khan MD.',
  keywords: 'homeopathy, homeopathic treatment, CCRH, India, Dr Shadab Khan',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" style={{ colorScheme: 'light' }}>
      <body className={`${inter.className} ${playfair.variable}`} style={{ background: 'var(--bg)', color: 'var(--ink)', fontFamily: 'var(--font-sans,Inter,system-ui,sans-serif)' }}>
        <Header />
        <main style={{ minHeight: '100vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
