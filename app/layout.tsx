import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://homeopedia.in'),
  title: {
    default: "HomeoPedia.in — India's Homeopathy Knowledge Portal",
    template: '%s | HomeoPedia.in',
  },
  description: 'Evidence-based homeopathy information for Indian patients. Disease guides, diet charts, medicines — CCRH-backed. Free. By Dr. Shadab Khan MD Homoeopathy.',
  keywords: ['homeopathy', 'homeopathic treatment', 'CCRH', 'India', 'Dr Shadab Khan', 'homeopathy in hindi', 'homeopathic medicine'],
  authors: [{ name: 'Dr. Shadab Khan MD Homoeopathy' }],
  creator: 'Dr. Shadab Khan',
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: 'https://homeopedia.in',
    siteName: 'HomeoPedia.in',
    title: "HomeoPedia.in — India's Homeopathy Knowledge Portal",
    description: 'Evidence-based homeopathy. Disease guides, diet charts, medicines — CCRH-backed. Free. By Dr. Shadab Khan MD.',
  },
  twitter: {
    card: 'summary_large_image',
    title: "HomeoPedia.in — India's Homeopathy Knowledge Portal",
    description: 'Evidence-based homeopathy. Disease guides, diet charts, medicines — Free. By Dr. Shadab Khan MD.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: '-_QyWD5Ay3ZNemUkyeHcF4XpPsHXWp-C9KxbBm1JOpQ' },
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
