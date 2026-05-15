import type { Metadata } from 'next'
import { IBM_Plex_Sans, Fraunces } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'

const ibmPlex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-sans' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display', style: ['normal', 'italic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.homeopedia.in'),
  alternates: {
    canonical: 'https://www.homeopedia.in',
  },
  title: {
    default: "HomeoPedia.in — India's Homeopathy Knowledge Portal",
    template: '%s | HomeoPedia.in',
  },
  description: 'Evidence-based homeopathy information for Indian patients. Disease guides, diet charts, medicines — CCRH-backed. By Dr. Shadab Khan MD Homoeopath.',
  keywords: ['homeopathy', 'homeopathic treatment', 'CCRH', 'India', 'Dr Shadab Khan', 'homeopathy in hindi', 'homeopathic medicine'],
  authors: [{ name: 'Dr. Shadab Khan MD Homoeopath' }],
  creator: 'Dr. Shadab Khan',
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: 'https://www.homeopedia.in',
    siteName: 'HomeoPedia.in',
    title: "HomeoPedia.in — India's Homeopathy Knowledge Portal",
    description: 'Evidence-based homeopathy. Disease guides, diet charts, medicines — CCRH-backed. By Dr. Shadab Khan MD.',
  },
  twitter: {
    card: 'summary_large_image',
    title: "HomeoPedia.in — India's Homeopathy Knowledge Portal",
    description: 'Evidence-based homeopathy. Disease guides, diet charts, medicines — CCRH-backed. By Dr. Shadab Khan MD.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: '-_QyWD5Ay3ZNemUkyeHcF4XpPsHXWp-C9KxbBm1JOpQ' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" style={{ colorScheme: 'light' }}>
      <body className={`${ibmPlex.variable} ${fraunces.variable}`} style={{ background: 'var(--bg)', color: 'var(--ink)', fontFamily: 'var(--font-sans,"IBM Plex Sans",system-ui,sans-serif)' }}>
        <Header />
        <main style={{ minHeight: '100vh' }}>{children}</main>
        <Footer />
        <BottomNav />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PQSJBBY63K"
          strategy="afterInteractive"
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-PQSJBBY63K');`
          }}
        />
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wolqez2xk8");`
          }}
        />
      </body>
    </html>
  )
}
