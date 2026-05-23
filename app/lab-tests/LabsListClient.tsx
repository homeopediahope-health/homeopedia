'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { WA_BASE } from '@/lib/constants'

const CATS = [
  { id: 'all',     ic: '⊕',  n: 'All' },
  { id: 'Blood',   ic: '🩸', n: 'Blood' },
  { id: 'Hormone', ic: '🔬', n: 'Hormone' },
  { id: 'Urine',   ic: '🧪', n: 'Urine' },
  { id: 'Stool',   ic: '🧫', n: 'Stool' },
  { id: 'Imaging', ic: '📡', n: 'Imaging' },
  { id: 'Other',   ic: '🔬', n: 'Other' },
]

const serif = 'var(--font-display,Georgia,serif)'

export default function LabsListClient({ tests }: { tests: any[] }) {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('all')

  const filtered = useMemo(() => {
    const lc = q.toLowerCase()
    return tests.filter(t =>
      (cat === 'all' || t.category === cat) &&
      (!q || t.name?.toLowerCase().includes(lc) || t.fullForm?.toLowerCase().includes(lc) || t.hindiName?.toLowerCase().includes(lc) || t.metaDescription?.toLowerCase().includes(lc))
    )
  }, [tests, q, cat])

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '52px clamp(16px,4vw,32px) 28px' }}>
        <div style={{ fontSize: 11, color: 'var(--ink4)', letterSpacing: '0.04em', marginBottom: 10 }}>
          Home › <strong style={{ color: 'var(--ink2)', fontWeight: 700 }}>Lab Tests</strong>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--sage-dk)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 14, height: 1, background: 'var(--sage-dk)', opacity: 0.6 }} />
          Investigations · {tests.length}+ tests
        </div>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(36px,6vw,64px)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.98, color: 'var(--ink)' }}>
          Lab reports,{' '}
          <em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>simple language mein.</em>
        </h1>
        <p style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: 'var(--ink3)', marginTop: 16, maxWidth: 600, lineHeight: 1.6, fontWeight: 300 }}>
          Har test ka normal range, high/low ka matlab, kab karwana hai — Hinglish mein, doctor-reviewed.
        </p>
      </div>

      {/* Sticky search + filter bar */}
      <div style={{ position: 'sticky', top: 64, zIndex: 20, background: 'color-mix(in srgb,var(--bg) 92%,transparent)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '14px clamp(16px,4vw,32px)' }}>
          <div style={{ background: 'var(--card)', border: `1.5px solid ${q ? 'var(--sage)' : 'var(--border)'}`, borderRadius: 14, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 10, transition: 'all .25s', boxShadow: q ? '0 6px 20px rgba(63,107,77,.1)' : 'none' }}>
            <span style={{ color: q ? 'var(--sage)' : 'var(--ink4)', fontSize: 18 }}>🔍</span>
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search — ESR, TSH, Vitamin D, CBC…"
              style={{ border: 'none', outline: 'none', flex: 1, fontSize: 15, background: 'transparent', color: 'var(--ink)', fontFamily: 'inherit' }}
            />
            {q && <span onClick={() => setQ('')} style={{ cursor: 'pointer', color: 'var(--ink4)', fontSize: 16, lineHeight: 1 }}>×</span>}
          </div>
          <div style={{ marginTop: 10, display: 'flex', gap: 7, overflowX: 'auto', paddingBottom: 2 }}>
            {CATS.map(c => {
              const on = cat === c.id
              const count = c.id === 'all' ? tests.length : tests.filter(t => t.category === c.id).length
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
          <strong style={{ fontFamily: serif, fontSize: 14, color: 'var(--ink)' }}>{filtered.length}</strong> test{filtered.length !== 1 ? 's' : ''}
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
            {filtered.map((t: any) => (
              <LabCard key={t.slug?.current} t={t} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: 60, textAlign: 'center', padding: '36px', background: 'var(--sage-bg)', border: '1px solid rgba(63,107,77,.2)', borderRadius: 18 }}>
          <p style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Report Samajh Nahi Aayi?</p>
          <p style={{ fontSize: 13, color: 'var(--ink3)', marginBottom: 18, fontWeight: 300 }}>Dr. Shadab se seedha poochho — apni report WhatsApp pe share karein</p>
          <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600, boxShadow: '0 4px 16px rgba(37,162,68,.3)' }}>📲 WhatsApp Karein</a>
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}

function LabCard({ t }: { t: any }) {
  const catIc = t.category === 'Blood' ? '🩸' : t.category === 'Hormone' ? '🔬' : t.category === 'Urine' ? '🧪' : t.category === 'Stool' ? '🧫' : t.category === 'Imaging' ? '📡' : '🔬'
  const catTone = t.category === 'Blood' ? '#f5d7d7' : t.category === 'Hormone' ? '#dde6cd' : t.category === 'Urine' ? '#cce0e0' : t.category === 'Stool' ? '#f0e3c4' : '#dcd8ec'

  return (
    <Link href={`/lab-tests/${t.slug?.current}`} style={{ textDecoration: 'none', color: 'var(--ink)' }}>
      <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 10, height: '100%', transition: 'all .3s cubic-bezier(.2,.8,.2,1)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7, flexWrap: 'wrap' }}>
              <span style={{ padding: '3px 9px', background: catTone, borderRadius: 99, fontSize: 10, fontWeight: 700, color: 'var(--ink2)', letterSpacing: '0.03em' }}>{catIc} {t.category || 'General'}</span>
            </div>
            <div style={{ fontFamily: serif, fontSize: 19, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.15 }}>{t.name}</div>
            {t.fullForm && <div style={{ fontFamily: serif, fontStyle: 'italic', color: 'var(--sage)', fontSize: 11, marginTop: 3, fontWeight: 500 }}>{t.fullForm}</div>}
          </div>
          <span style={{ color: 'var(--ink4)', fontSize: 18, marginTop: 4 }}>→</span>
        </div>

        {t.metaDescription && (
          <p style={{ fontSize: 12, color: 'var(--ink3)', lineHeight: 1.55, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as any}>{t.metaDescription}</p>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, paddingTop: 10, borderTop: '1px dashed var(--border)', fontSize: 10, color: 'var(--ink3)' }}>
          <span>🩸 {t.sampleType || 'Blood'}</span>
          <span style={{ textAlign: 'right' }}>{t.fastingRequired ? '🍽 Fasting' : '🍽 No fasting'}</span>
          {t.reportTime && <span>⏱ {t.reportTime}</span>}
          <span style={{ textAlign: 'right', color: 'var(--sage)', fontWeight: 700 }}>Guide →</span>
        </div>
      </div>
    </Link>
  )
}
