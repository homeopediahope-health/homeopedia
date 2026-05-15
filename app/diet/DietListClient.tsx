'use client'
import { useState } from 'react'
import { WA_BASE, WA_CONSULT } from '@/lib/constants'
import Link from 'next/link'

const CAT_COLORS: Record<string, string> = {
  Skin: '#e67c52',
  Joints: '#5b8dd9',
  Digestive: '#5aaa6a',
  Mental: '#9b6ec8',
  "Women's": '#e0629a',
  Respiratory: '#4bafc7',
  Hair: '#c4993e',
  Endocrine: '#d47c3e',
}

export default function DietListClient({ diets }: { diets: any[] }) {
  const [q, setQ] = useState('')

  const shown = q.trim()
    ? diets.filter(d =>
        d.title?.toLowerCase().includes(q.toLowerCase()) ||
        d.hindiName?.includes(q) ||
        d.category?.toLowerCase().includes(q.toLowerCase())
      )
    : diets

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '52px clamp(16px,4vw,32px) 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: 14 }}>
            <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
            Disease-wise Diet Charts
            <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(28px,5vw,52px)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.05, color: 'var(--ink)', margin: '0 0 10px' }}>Kya Khayein, Kya Na Khayein</h1>
          <p style={{ fontSize: 15, color: 'var(--ink3)', marginBottom: 28, fontWeight: 300, lineHeight: 1.7 }}>Kya khayein, kya nahi — har disease ke liye doctor recommended. Indian foods ke hisaab se.</p>
          <div style={{ maxWidth: 440, margin: '0 auto' }}>
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Disease dhundo — Psoriasis, PCOD, Thyroid..."
              style={{ width: '100%', padding: '14px 20px', background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 100, color: 'var(--ink)', fontSize: 14, boxShadow: 'var(--sh-sm)', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
              onFocus={e => { e.target.style.borderColor = 'var(--sage)'; e.target.style.boxShadow = '0 0 0 3px rgba(63,107,77,.1)' }}
              onBlur={e => { e.target.style.borderColor = 'var(--border2)'; e.target.style.boxShadow = 'var(--sh-sm)' }}
            />
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px clamp(16px,4vw,32px) 80px' }}>

        {/* Banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 22px', background: 'var(--sage-bg)', border: '1px solid rgba(63,107,77,.2)', borderRadius: 12, marginBottom: 28, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 26 }}>🥗</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Jo aap khaate hain, wahi aapki healing hai</div>
            <div style={{ fontSize: 12, color: 'var(--ink3)', fontWeight: 300 }}>Homeopathy + sahi diet = 2x fast results. Har chart doctor reviewed hai.</div>
          </div>
        </div>

        {/* Grid */}
        {shown.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
            {shown.map((d: any) => {
              const catColor = CAT_COLORS[d.category] || 'var(--gold-dk)'
              return (
                <Link key={d.slug?.current} href={`/diet/${d.slug?.current}`} style={{ textDecoration: 'none' }}>
                  <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '22px', cursor: 'pointer', position: 'relative', overflow: 'hidden', height: '100%', boxSizing: 'border-box' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${catColor},${catColor}99)`, borderRadius: '14px 14px 0 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 100, background: `${catColor}18`, color: catColor, border: `1px solid ${catColor}40` }}>{d.category}</span>
                      <span style={{ fontSize: 11, color: 'var(--ink4)' }}>Dr. Reviewed</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 18, fontWeight: 600, color: 'var(--ink)', marginBottom: 4, lineHeight: 1.3 }}>{d.title}</h3>
                    {d.hindiName && <div style={{ fontSize: 12, color: 'var(--warm)', fontStyle: 'italic', fontFamily: 'var(--font-display,Georgia,serif)', marginBottom: 8, fontWeight: 500 }}>{d.hindiName}</div>}
                    {d.keyRule && <p style={{ fontSize: 12, color: 'var(--ink4)', lineHeight: 1.5, marginBottom: 10, fontWeight: 300 }}>💡 {d.keyRule}</p>}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
                      <div style={{ display: 'flex', gap: 10 }}>
                        {d.includeCount > 0 && <span style={{ fontSize: 10, color: 'var(--green)' }}>✓ {d.includeCount} foods</span>}
                        {d.avoidCount > 0 && <span style={{ fontSize: 10, color: 'var(--red)' }}>✕ {d.avoidCount} avoid</span>}
                        {d.hasSamplePlan && <span style={{ fontSize: 10, color: 'var(--warm)' }}>📅 4-Day Plan</span>}
                      </div>
                      <span style={{ fontSize: 12, color: 'var(--sage)', fontWeight: 600 }}>View →</span>
                    </div>
                  </div>
                </Link>
              )
            })}
            {/* Coming soon */}
            <div style={{ background: 'var(--bg2)', border: '2px dashed var(--border2)', borderRadius: 'var(--r)', padding: '22px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 160 }}>
              <div style={{ fontSize: 26, marginBottom: 8 }}>🔜</div>
              <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 15, fontWeight: 600, color: 'var(--ink3)', marginBottom: 5 }}>Aur Charts Coming</div>
              <div style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 300, lineHeight: 1.6 }}>Arthritis, Diabetes, Anxiety diet charts jald aa rahe hain</div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 48 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
            <p style={{ color: 'var(--ink3)', fontWeight: 300 }}>"{q}" ke liye koi diet chart nahi mila. Aur charts jald aa rahe hain.</p>
          </div>
        )}
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
