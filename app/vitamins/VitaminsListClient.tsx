'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { WA_BASE } from '@/lib/constants'

const CATS = [
  { id: 'all',          ic: '⊕',  n: 'All' },
  { id: 'Vitamin',      ic: '🌟', n: 'Vitamin' },
  { id: 'Mineral',      ic: '💎', n: 'Mineral' },
  { id: 'Supplement',   ic: '💊', n: 'Supplement' },
  { id: 'Amino Acid',   ic: '🔗', n: 'Amino Acid' },
  { id: 'Fatty Acid',   ic: '🫀', n: 'Fatty Acid' },
]

const serif = 'var(--font-display,Georgia,serif)'

const catColors: Record<string, string> = {
  Vitamin:    '#dde6cd',
  Mineral:    '#cce0e0',
  Supplement: '#f0e3c4',
  'Amino Acid': '#dcd8ec',
  'Fatty Acid': '#f5d7d7',
}

const catIcons: Record<string, string> = {
  Vitamin:    '🌟',
  Mineral:    '💎',
  Supplement: '💊',
  'Amino Acid': '🔗',
  'Fatty Acid': '🫀',
}

export default function VitaminsListClient({ vitamins }: { vitamins: any[] }) {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('all')

  const filtered = useMemo(() => {
    const lc = q.toLowerCase()
    return vitamins.filter(v =>
      (cat === 'all' || v.category === cat) &&
      (!q || v.name?.toLowerCase().includes(lc) || v.hindiName?.toLowerCase().includes(lc) || v.metaDescription?.toLowerCase().includes(lc))
    )
  }, [vitamins, q, cat])

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '52px clamp(16px,4vw,32px) 28px' }}>
        <div style={{ fontSize: 11, color: 'var(--ink4)', letterSpacing: '0.04em', marginBottom: 10 }}>
          Home › <strong style={{ color: 'var(--ink2)', fontWeight: 700 }}>Vitamins & Minerals</strong>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dk)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 14, height: 1, background: 'var(--gold-dk)', opacity: 0.6 }} />
          Nutrition · {vitamins.length}+ vitamins &amp; minerals
        </div>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(36px,6vw,64px)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.98, color: 'var(--ink)' }}>
          Vitamin kami,{' '}
          <em style={{ color: 'var(--gold-dk)', fontStyle: 'italic' }}>simple language mein.</em>
        </h1>
        <p style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: 'var(--ink3)', marginTop: 16, maxWidth: 640, lineHeight: 1.6, fontWeight: 300 }}>
          Normal range, deficiency ke lakshan, food sources, supplement guide — Hinglish mein, doctor-reviewed.
        </p>
      </div>

      {/* Sticky search + filter bar */}
      <div style={{ position: 'sticky', top: 64, zIndex: 20, background: 'color-mix(in srgb,var(--bg) 92%,transparent)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '14px clamp(16px,4vw,32px)' }}>
          <div style={{ background: 'var(--card)', border: `1.5px solid ${q ? 'var(--gold-dk)' : 'var(--border)'}`, borderRadius: 14, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 10, transition: 'all .25s', boxShadow: q ? '0 6px 20px rgba(180,130,40,.12)' : 'none' }}>
            <span style={{ color: q ? 'var(--gold-dk)' : 'var(--ink4)', fontSize: 18 }}>🔍</span>
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search — Vitamin D, B12, Iron, Calcium, Zinc…"
              style={{ border: 'none', outline: 'none', flex: 1, fontSize: 15, background: 'transparent', color: 'var(--ink)', fontFamily: 'inherit' }}
            />
            {q && <span onClick={() => setQ('')} style={{ cursor: 'pointer', color: 'var(--ink4)', fontSize: 16, lineHeight: 1 }}>×</span>}
          </div>
          <div style={{ marginTop: 10, display: 'flex', gap: 7, overflowX: 'auto', paddingBottom: 2 }}>
            {CATS.map(c => {
              const on = cat === c.id
              const count = c.id === 'all' ? vitamins.length : vitamins.filter(v => v.category === c.id).length
              if (count === 0 && c.id !== 'all') return null
              return (
                <span key={c.id} onClick={() => setCat(c.id)} style={{
                  padding: '6px 14px', borderRadius: 99, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer',
                  background: on ? 'var(--ink)' : 'var(--card)', color: on ? '#fff' : 'var(--ink2)',
                  border: `1px solid ${on ? 'var(--ink)' : 'var(--border)'}`,
                  display: 'inline-flex', alignItems: 'center', gap: 5, flexShrink: 0,
                }}>
                  <span>{c.ic}</span>{c.n}
                  <span style={{ fontSize: 10, opacity: 0.7 }}>{count}</span>
                </span>
              )
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '24px clamp(16px,4vw,32px) 80px' }}>
        <div style={{ fontSize: 12, color: 'var(--ink3)', marginBottom: 16 }}>
          <strong style={{ fontFamily: serif, fontSize: 14, color: 'var(--ink)' }}>{filtered.length}</strong> vitamin{filtered.length !== 1 ? 's' : ''}
          {cat !== 'all' && <span> · {CATS.find(c => c.id === cat)?.n}</span>}
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--ink3)' }}>
            <div style={{ fontSize: 36 }}>🔍</div>
            <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 600, marginTop: 12 }}>Koi match nahi mila</div>
            <div style={{ fontSize: 13, marginTop: 6 }}>Dusra keyword try karo</div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
            {filtered.map((v: any) => (
              <VitaminCard key={v.slug?.current} v={v} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: 60, textAlign: 'center', padding: '36px', background: 'linear-gradient(135deg,#fffbf0,#fff8e8)', border: '1px solid rgba(180,130,40,.2)', borderRadius: 18 }}>
          <p style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Vitamin Deficiency Hai?</p>
          <p style={{ fontSize: 13, color: 'var(--ink3)', marginBottom: 18, fontWeight: 300 }}>Report lekar Dr. Shadab se consult karein — WhatsApp pe seedha bhejein</p>
          <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600, boxShadow: '0 4px 16px rgba(37,162,68,.3)' }}>📲 WhatsApp Karein</a>
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}

function VitaminCard({ v }: { v: any }) {
  const ic = catIcons[v.category] || '💊'
  const bg = catColors[v.category] || '#f0e3c4'

  return (
    <Link href={`/vitamins/${v.slug?.current}`} style={{ textDecoration: 'none', color: 'var(--ink)' }}>
      <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 10, height: '100%', transition: 'all .3s cubic-bezier(.2,.8,.2,1)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7, flexWrap: 'wrap' }}>
              <span style={{ padding: '3px 9px', background: bg, borderRadius: 99, fontSize: 10, fontWeight: 700, color: 'var(--ink2)', letterSpacing: '0.03em' }}>{ic} {v.category || 'Vitamin'}</span>
            </div>
            <div style={{ fontFamily: serif, fontSize: 19, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.15 }}>{v.name}</div>
            {v.hindiName && <div style={{ fontFamily: serif, fontStyle: 'italic', color: 'var(--gold-dk)', fontSize: 11, marginTop: 3, fontWeight: 500 }}>{v.hindiName}</div>}
          </div>
          <span style={{ color: 'var(--ink4)', fontSize: 18, marginTop: 4 }}>→</span>
        </div>

        {v.metaDescription && (
          <p style={{ fontSize: 12, color: 'var(--ink3)', lineHeight: 1.55, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as any}>{v.metaDescription}</p>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, paddingTop: 10, borderTop: '1px dashed var(--border)', fontSize: 10, color: 'var(--ink3)' }}>
          {v.quickFacts?.normalRangeQuick && <span>📊 {v.quickFacts.normalRangeQuick}</span>}
          {v.quickFacts?.indiaPrevalence && <span style={{ textAlign: 'right', color: 'var(--warm)', fontWeight: 600 }}>{v.quickFacts.indiaPrevalence}</span>}
          <span style={{ gridColumn: '1/-1', textAlign: 'right', color: 'var(--gold-dk)', fontWeight: 700 }}>Guide →</span>
        </div>
      </div>
    </Link>
  )
}
