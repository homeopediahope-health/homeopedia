import { ImageResponse } from 'next/og'
import { getDiseaseBySlug } from '@/lib/queries'

export const runtime = 'edge'
export const alt = 'HomeoPedia Disease Guide'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const disease = await getDiseaseBySlug(slug).catch(() => null)

  const title = disease?.title || 'Homeopathic Disease Guide'
  const tagline = disease?.tagline || 'Evidence-based Homeopathic Treatment'

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 72px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              background: '#c9a84c',
              borderRadius: 8,
              padding: '6px 18px',
              fontSize: 15,
              fontWeight: 700,
              color: '#fff',
              letterSpacing: 1,
              fontFamily: 'sans-serif',
            }}
          >
            HomeoPedia.in
          </div>
          <div style={{ fontSize: 14, color: '#c9a84c', fontFamily: 'sans-serif' }}>
            by Dr. Shadab Khan MD (Hom)
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#c9a84c',
              fontWeight: 400,
              maxWidth: 800,
              lineHeight: 1.4,
              fontFamily: 'sans-serif',
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(201,168,76,0.3)',
            paddingTop: 24,
          }}
        >
          <div style={{ fontSize: 16, color: '#8a9bb5', fontFamily: 'sans-serif' }}>
            Homeopathic Medicines · Diet Chart · Dos & Don'ts · FAQ
          </div>
          <div
            style={{
              fontSize: 16,
              color: '#c9a84c',
              fontFamily: 'sans-serif',
              fontWeight: 600,
            }}
          >
            homeopedia.in
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
