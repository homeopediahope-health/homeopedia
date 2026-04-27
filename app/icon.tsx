import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '6px',
          background: '#1a3d30',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{
          fontSize: '22px',
          fontWeight: 800,
          color: '#b8912a',
          fontFamily: 'serif',
          lineHeight: 1,
        }}>H</span>
      </div>
    ),
    { ...size }
  )
}
