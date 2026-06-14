'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

// ─── CSS tokens (same system as VitaminClient) ───
const T = {
  ink:    'var(--ink)',
  ink2:   'var(--ink2)',
  ink3:   'var(--ink3)',
  ink4:   'var(--ink4)',
  bg:     'var(--bg)',
  bg2:    'var(--bg2)',
  card:   'var(--card)',
  border: 'var(--border)',
  sage:   'var(--sage)',
  sageBg: 'var(--sage-bg)',
  sageDk: 'var(--sage-dk)',
  warm:   'var(--warm)',
  warmBg: 'var(--warm-bg)',
  red:    'var(--red)',
  serif:  'var(--font-display,Georgia,serif)',
  mono:   'ui-monospace,SFMono-Regular,monospace',
}

const CATEGORIES = [
  { id: 'all',     n: 'All',           ic: '⊕',  tone: T.bg2 },
  { id: 'plant',   n: 'Plant-based',   ic: '🌿', tone: '#dde6cd' },
  { id: 'mineral', n: 'Mineral',       ic: '⚪', tone: '#cce0e0' },
  { id: 'animal',  n: 'Animal-source', ic: '🦂', tone: '#e8d2c4' },
  { id: 'nosode',  n: 'Nosode',        ic: '🧪', tone: '#dcd8ec' },
]

function getCatMeta(id: string) {
  return CATEGORIES.find(c => c.id === id) || CATEGORIES[0]
}

interface Medicine {
  name: string
  slug: { current: string }
  category?: string
  alt?: string
  commonUses?: string
  source?: string
  readMin?: number
  hasVideo?: boolean
  severity?: string
  metaDescription?: string
}

// ─── Individual card ───
function MedicineCard({ m, isMobile }: { m: Medicine; isMobile: boolean }) {
  const [hover, setHover] = useState(false)
  const cat = getCatMeta(m.category || 'plant')
  return (
    <Link
      href={`/medicines/${m.slug?.current}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: T.card,
        border: `1px solid ${hover ? T.sage : T.border}`,
        borderRadius: isMobile ? 12 : 16,
        padding: isMobile ? '14px 16px' : '20px 22px',
        textDecoration: 'none',
        color: T.ink,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hover ? `0 14px 32px rgba(63,107,77,0.10)` : '0 1px 1px rgba(0,0,0,0.02)',
        transition: 'all .3s cubic-bezier(.2,.8,.2,1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, flexWrap: 'wrap' }}>
            <span style={{ padding: '3px 8px', background: cat.tone, borderRadius: 99, fontSize: 9, fontWeight: 700, color: T.ink2, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {cat.ic} {cat.n}
            </span>
            {m.hasVideo && (
              <span style={{ padding: '3px 7px', background: T.warmBg, color: T.warm, borderRadius: 99, fontSize: 9, fontWeight: 700 }}>▶ Video</span>
            )}
          </div>
          <div style={{ fontFamily: T.serif, fontSize: isMobile ? 17 : 19, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.15 }}>
            {m.name}
          </div>
          {m.alt && (
            <div style={{ fontFamily: T.serif, fontStyle: 'italic', color: T.sage, fontSize: 11, marginTop: 2, fontWeight: 500 }}>
              {m.alt}
            </div>
          )}
        </div>
        <span style={{ color: hover ? T.sage : T.ink4, transition: 'all .3s', fontSize: 18, marginTop: 4 }}>→</span>
      </div>
      {m.commonUses && (
        <p style={{ fontSize: 12, color: T.ink3, lineHeight: 1.55, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', margin: 0 }}>
          {m.commonUses}
        </p>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 10, borderTop: `1px dashed ${T.border}`, fontSize: 10, color: T.ink3, fontFamily: T.mono, letterSpacing: '0.02em', flexWrap: 'wrap' }}>
        {m.source && <span>🌱 {m.source}</span>}
        {m.readMin && <span style={{ marginLeft: 'auto', color: T.sage, fontWeight: 700 }}>⏱ {m.readMin} min</span>}
      </div>
    </Link>
  )
}

// ─── Main listing page ───
export default function MedicinesClient({ medicines }: { medicines: Medicine[] }) {
  const [isMobile, setIsMobile] = useState(false)
  const [cat, setCat] = useState('all')
  const [q, setQ] = useState('')

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const filtered = medicines.filter(m =>
    (cat === 'all' || m.category === cat) &&
    (!q ||
      m.name.toLowerCase().includes(q.toLowerCase()) ||
      (m.alt || '').toLowerCase().includes(q.toLowerCase()) ||
      (m.commonUses || '').toLowerCase().includes(q.toLowerCase())
    )
  )

  // Count per category
  const counts: Record<string, number> = { all: medicines.length }
  for (const m of medicines) {
    if (m.category) counts[m.category] = (counts[m.category] || 0) + 1
  }

  return (
    <div className="page-in" style={{ paddingTop: 66, background: T.bg, minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '28px 18px 12px' : '52px 40px 20px' }}>
        <div style={{ fontSize: 11, color: T.ink4, fontFamily: T.mono, letterSpacing: '0.04em', marginBottom: 10 }}>
          <Link href="/" style={{ color: T.ink4, textDecoration: 'none' }}>Home</Link>
          {' › '}
          <strong style={{ color: T.ink2, fontWeight: 700 }}>Medicines</strong>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: T.sage, fontFamily: T.mono, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 20, height: 1, background: T.sage, opacity: 0.5 }} />
          Homeopathic remedies · {medicines.length}+ medicines
        </div>
        <h1 style={{ fontFamily: T.serif, fontSize: isMobile ? 38 : 60, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.97, marginTop: isMobile ? 12 : 16, color: T.ink }}>
          Classical medicines,{' '}
          <em style={{ color: T.sage, fontStyle: 'italic' }}>simple guide.</em>
        </h1>
        <p style={{ fontSize: isMobile ? 14 : 16, color: T.ink3, marginTop: isMobile ? 12 : 16, maxWidth: 640, lineHeight: 1.6 }}>
          Arnica · Nux Vomica · Belladonna se lekar har classical remedy — uses, potency, modalities, comparison, Hinglish mein. Doctor-reviewed.
        </p>
        <div style={{ marginTop: isMobile ? 14 : 18, padding: isMobile ? '12px 14px' : '14px 18px', background: T.warmBg, borderLeft: `4px solid ${T.warm}`, borderRadius: 10, fontSize: isMobile ? 12 : 13, color: T.ink2, lineHeight: 1.55 }}>
          ⚕️ <strong>Important:</strong> Ye information educational hai. Homeopathic medicine doctor ki rai ke bina na lein — har patient ki potency aur dose alag hoti hai.
        </div>
      </div>

      {/* ── Sticky filter bar ── */}
      <div style={{ position: 'sticky', top: isMobile ? 56 : 66, zIndex: 20, background: T.bg + 'ee', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '12px 18px' : '16px 40px' }}>
          {/* Search input */}
          <div style={{ background: T.card, border: `1.5px solid ${q ? T.sage : T.border}`, borderRadius: 14, padding: isMobile ? '10px 14px' : '12px 18px', display: 'flex', alignItems: 'center', gap: 10, transition: 'all .25s', marginBottom: 12 }}>
            <span style={{ color: q ? T.sage : T.ink4, fontSize: 16 }}>🔍</span>
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search — Arnica, Nux Vomica, Belladonna, Sulphur…"
              style={{ border: 'none', outline: 'none', flex: 1, fontSize: isMobile ? 13 : 14, background: 'transparent', color: T.ink, fontFamily: 'inherit' }}
            />
            {q && (
              <span onClick={() => setQ('')} style={{ cursor: 'pointer', color: T.ink4, fontSize: 14 }}>×</span>
            )}
          </div>
          {/* Category tabs */}
          <div style={{ display: 'flex', gap: 7, overflowX: 'auto', paddingBottom: 4 }}>
            {CATEGORIES.map(c => {
              const on = cat === c.id
              return (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  style={{
                    padding: '7px 14px', borderRadius: 99, fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer',
                    background: on ? T.ink : T.card, color: on ? '#fff' : T.ink2,
                    border: `1px solid ${on ? T.ink : T.border}`,
                    display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'inherit', transition: 'all .2s',
                  }}
                >
                  <span>{c.ic}</span>
                  {c.n}
                  <span style={{ fontFamily: T.mono, opacity: 0.7, fontSize: 9 }}>{counts[c.id] ?? '∑'}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '18px 18px 60px' : '28px 40px 80px' }}>
        <div style={{ fontSize: 12, color: T.ink3, fontFamily: T.mono, marginBottom: 14 }}>
          <strong style={{ color: T.ink, fontFamily: T.serif, fontSize: 14 }}>{filtered.length}</strong>
          {' '}medicine{filtered.length !== 1 ? 's' : ''}
          {cat !== 'all' && <span> · {getCatMeta(cat).n}</span>}
          {q && <span> · "{q}"</span>}
        </div>

        {filtered.length === 0 ? (
          <div style={{ padding: '60px 24px', textAlign: 'center', color: T.ink3 }}>
            <div style={{ fontSize: 32 }}>🔍</div>
            <div style={{ fontFamily: T.serif, fontSize: 20, fontWeight: 600, marginTop: 12, color: T.ink }}>No medicines found</div>
            <div style={{ fontSize: 13, marginTop: 8 }}>Try a different search or category.</div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: isMobile ? 10 : 14 }}>
            {filtered.map(m => (
              <MedicineCard key={m.slug?.current} m={m} isMobile={isMobile} />
            ))}
          </div>
        )}
      </div>

      <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
