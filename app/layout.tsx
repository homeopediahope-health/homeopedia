import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "HomeoPedia.in — India's Homeopathy Knowledge Portal",
  description: 'Evidence-based homeopathy information for Indian patients. Disease guides, medicines, symptoms — CCRH-backed. By Dr. Shadab Khan MD.',
  keywords: 'homeopathy, homeopathic treatment, CCRH, India, Dr Shadab Khan',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" style={{ colorScheme: 'light' }}>
      <body className={inter.className} style={{ background: '#FAF7F2', color: '#1A1F2E' }}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
