'use client'

import { useState } from 'react'
import type { YTVideo } from '@/lib/youtube'

export default function YouTubeSection({ videos }: { videos: YTVideo[] }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  if (!videos.length) return null

  return (
    <>
      {/* Video Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }} className="yt-grid">
        {videos.map(v => (
          <button
            key={v.id}
            onClick={() => setActiveId(v.id)}
            className="card-premium"
            style={{ background: 'white', borderRadius: 14, overflow: 'hidden', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', display: 'block', width: '100%' }}
          >
            <div style={{ position: 'relative' }}>
              <img src={v.thumbnail} alt={v.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.15)', transition: 'background 0.2s' }}>
                <div style={{ width: 44, height: 44, background: 'rgba(220,38,38,0.92)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                  <span style={{ color: 'white', fontSize: '1.1rem', marginLeft: 4 }}>▶</span>
                </div>
              </div>
            </div>
            <div style={{ padding: '12px 14px' }}>
              <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--charcoal)', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', margin: 0 }}>
                {v.title}
              </p>
              <p style={{ fontSize: '0.72rem', color: 'var(--gray-text)', marginTop: 6, margin: '6px 0 0' }}>
                {new Date(v.published).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeId && (
        <div
          onClick={() => setActiveId(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)',
            zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 16,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ width: '100%', maxWidth: 860, position: 'relative' }}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveId(null)}
              style={{
                position: 'absolute', top: -44, right: 0,
                background: 'none', border: 'none', color: 'white',
                fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6, padding: '8px 4px',
              }}
            >
              ✕ Close
            </button>

            {/* YouTube iframe */}
            <div style={{ aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', background: '#000' }}>
              <iframe
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Dr. Shadab Khan"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
