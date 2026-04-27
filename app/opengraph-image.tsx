import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'HomeoPedia.in — India ka Homeopathy Portal'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0f2419 0%, #1a3d30 50%, #0f2419 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background circles decoration */}
        <div style={{
          position: 'absolute', top: -120, right: -120,
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,145,42,0.15) 0%, transparent 70%)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 350, height: 350, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,145,42,0.1) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Top gold line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #b8912a, #e8c96a, #b8912a, transparent)',
          display: 'flex',
        }} />

        {/* Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          padding: '60px 80px',
          textAlign: 'center',
        }}>

          {/* Logo / Icon area */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #b8912a, #e8c96a)',
            marginBottom: '28px',
            fontSize: '44px',
          }}>
            🌿
          </div>

          {/* Site name */}
          <div style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-1px',
            lineHeight: 1,
            marginBottom: '8px',
            display: 'flex',
          }}>
            HomeoPedia
            <span style={{ color: '#b8912a' }}>.in</span>
          </div>

          {/* Tagline */}
          <div style={{
            fontSize: '26px',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '40px',
            fontWeight: 400,
            display: 'flex',
          }}>
            India Ka Homeopathy Knowledge Portal
          </div>

          {/* Features row */}
          <div style={{
            display: 'flex',
            gap: '24px',
            marginBottom: '40px',
          }}>
            {['🔬 CCRH-Backed', '👨‍⚕️ Doctor-Reviewed', '🇮🇳 Hindi Mein', '✅ Free'].map((item) => (
              <div key={item} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
                background: 'rgba(184,145,42,0.15)',
                border: '1px solid rgba(184,145,42,0.4)',
                borderRadius: '100px',
                fontSize: '18px',
                color: '#e8c96a',
                fontWeight: 500,
              }}>
                {item}
              </div>
            ))}
          </div>

          {/* Doctor name */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '20px',
            color: 'rgba(255,255,255,0.6)',
          }}>
            <span style={{ color: '#b8912a' }}>By</span>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Dr. Shadab Khan — MD Homoeopath</span>
          </div>
        </div>

        {/* Bottom gold line */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #b8912a, #e8c96a, #b8912a, transparent)',
          display: 'flex',
        }} />
      </div>
    ),
    { ...size }
  )
}
