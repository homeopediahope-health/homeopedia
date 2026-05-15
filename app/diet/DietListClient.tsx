'use client'
import { useState } from 'react'
import { WA_BASE } from '@/lib/constants'
import Link from 'next/link'

const CAT_COLORS: Record<string, string> = {
  Skin: '#e67c52', Joints: '#5b8dd9', Digestive: '#5aaa6a',
  Mental: '#9b6ec8', "Women's": '#e0629a', Hair: '#c4993e',
  Respiratory: '#4bafc7', Endocrine: '#d47c3e', Autoimmune: '#6db89a',
  "Children's": '#e8a84e',
}

const CATS = ['All', 'Skin', 'Joints', 'Digestive', "Women's", 'Respiratory', 'Endocrine', 'Hair', 'Mental', "Children's"]

const PINNED = ['psoriasis', 'pcod', 'thyroid', 'ibs']

const QUICK_SEARCHES = ['Psoriasis', 'PCOD', 'Thyroid', 'IBS', 'Hair Fall', 'Sciatica', 'Acidity', 'Diabetes']

const DID_YOU_KNOW = [
  { emoji: '🌿', fact: 'Psoriasis mein gluten se 60% flare hota hai — atta band karo, farak dikhega.' },
  { emoji: '🥗', fact: 'PCOD mein low-GI diet se insulin 40% tak control hoti hai — chawal nahi, daliya khao.' },
  { emoji: '🧄', fact: 'Arthritis mein haldi + kali mirch ka combination — curcumin absorption 2000% badhta hai.' },
  { emoji: '💧', fact: 'Thyroid patients ke liye raw goitrogens (broccoli, cauliflower) pakane se safe ho jaate hain.' },
]

export default function DietListClient({ diets }: { diets: any[] }) {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const [factIdx] = useState(() => Math.floor(Math.random() * DID_YOU_KNOW.length))

  const pinnedDiets = diets.filter((d: any) => PINNED.includes(d.slug?.current))
  const shown = diets.filter((d: any) =>
    (cat === 'All' || d.category === cat) &&
    (!q.trim() ||
      d.title?.toLowerCase().includes(q.toLowerCase()) ||
      d.hindiName?.includes(q) ||
      d.category?.toLowerCase().includes(q.toLowerCase()))
  )
  const isFiltering = q.trim() || cat !== 'All'

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: 'clamp(36px,5vw,64px) clamp(16px,4vw,32px) clamp(28px,4vw,48px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,rgba(63,107,77,.07) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 11, color: 'var(--ink4)', fontFamily: 'var(--font-mono,monospace)', letterSpacing: '0.04em', marginBottom: 14 }}>
            <Link href="/" style={{ color: 'var(--sage-dk)', textDecoration: 'none' }}>Home</Link>{' › '}
            <strong style={{ color: 'var(--ink2)', fontWeight: 700 }}>Diet plans</strong>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: 14 }}>
            <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
            Doctor-curated · Disease-wise
          </div>
          <h1 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(38px,6vw,72px)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.97, color: 'var(--ink)', marginBottom: 18 }}>
            What you eat{' '}
            <em className="sage-shimmer" style={{ fontStyle: 'italic' }}>matters most.</em>
          </h1>
          <p style={{ fontSize: 'clamp(14px,1.5vw,16px)', color: 'var(--ink3)', maxWidth: 560, lineHeight: 1.7, fontWeight: 300, marginBottom: 28 }}>
            Har disease ke liye alag diet hoti hai — Indian foods ke hisaab se, Hinglish mein. Kya khayein, kya avoid karein, aur daily meal plan.
          </p>

          {/* Search */}
          <div style={{ maxWidth: 520 }}>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 100, padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: 'var(--sh-sm)' }}>
              <span style={{ color: 'var(--ink4)', fontSize: 16, flexShrink: 0 }}>🔍</span>
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Disease dhundo — Psoriasis, PCOD, Thyroid..."
                style={{ border: 'none', outline: 'none', flex: 1, fontSize: 14, background: 'transparent', color: 'var(--ink)', fontFamily: 'inherit' }}
              />
              {q && <button onClick={() => setQ('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink4)', fontSize: 18, padding: 0, lineHeight: 1 }}>×</button>}
            </div>
            {/* Quick search tags */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
              {QUICK_SEARCHES.map(s => (
                <button key={s} onClick={() => setQ(s)}
                  style={{ padding: '5px 12px', borderRadius: 99, fontSize: 12, cursor: 'pointer', border: '1px solid var(--border)', background: q === s ? 'var(--ink)' : 'rgba(255,255,255,.7)', color: q === s ? '#fff' : 'var(--ink3)', fontWeight: 500, transition: 'all .15s' }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(24px,3vw,40px) clamp(16px,4vw,32px) 80px' }}>

        {/* Kya aapko pata tha — fact banner */}
        {!isFiltering && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '16px 22px', background: 'rgba(192,132,56,.07)', border: '1px solid rgba(192,132,56,.2)', borderLeft: '4px solid var(--warm)', borderRadius: '0 12px 12px 0', marginBottom: 32 }}>
            <span style={{ fontSize: 24, flexShrink: 0 }}>{DID_YOU_KNOW[factIdx].emoji}</span>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--warm)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 5 }}>Kya aapko pata tha?</div>
              <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, fontWeight: 400, margin: 0 }}>{DID_YOU_KNOW[factIdx].fact}</p>
            </div>
          </div>
        )}

        {/* Pinned / Most Searched */}
        {!isFiltering && pinnedDiets.length > 0 && (
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm)' }}>
                <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
                Most searched
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 14 }}>
              {pinnedDiets.map((d: any) => {
                const cc = CAT_COLORS[d.category] || 'var(--sage-dk)'
                const waText = `https://wa.me/?text=${encodeURIComponent(`${d.title} diet chart — homeopedia.in/diet/${d.slug?.current}`)}`
                return (
                  <div key={d.slug?.current} style={{ position: 'relative' }}>
                    <Link href={`/diet/${d.slug?.current}`} style={{ textDecoration: 'none' }}>
                      <div className="hov" style={{ background: 'var(--card)', border: `2px solid ${cc}44`, borderRadius: 16, padding: '20px', cursor: 'pointer', position: 'relative', overflow: 'hidden', boxSizing: 'border-box' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg,${cc},${cc}88)`, borderRadius: '16px 16px 0 0' }} />
                        <span style={{ position: 'absolute', top: 14, right: 12, fontSize: 9, padding: '2px 8px', borderRadius: 100, background: 'rgba(192,132,56,.12)', color: 'var(--warm)', border: '1px solid rgba(192,132,56,.3)', fontWeight: 700 }}>🔥 POPULAR</span>
                        <div style={{ marginTop: 6, marginBottom: 10 }}>
                          <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 9px', borderRadius: 100, background: `${cc}18`, color: cc, border: `1px solid ${cc}40` }}>{d.category}</span>
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 19, fontWeight: 600, color: 'var(--ink)', marginBottom: 4, lineHeight: 1.2, paddingRight: 52 }}>{d.title}</h3>
                        {d.hindiName && <div style={{ fontSize: 13, color: 'var(--warm)', fontStyle: 'italic', fontFamily: 'var(--font-display,Georgia,serif)', marginBottom: 10, fontWeight: 500 }}>{d.hindiName}</div>}
                        {d.keyRule && <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.55, fontWeight: 300, marginBottom: 12 }}>💡 {d.keyRule}</p>}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid var(--border)' }}>
                          <div style={{ display: 'flex', gap: 10 }}>
                            {d.includeCount > 0 && <span style={{ fontSize: 11, color: 'var(--green)', fontWeight: 500 }}>✓ {d.includeCount} foods</span>}
                            {d.avoidCount > 0 && <span style={{ fontSize: 11, color: 'var(--red)', fontWeight: 500 }}>✕ {d.avoidCount} avoid</span>}
                          </div>
                          <span style={{ fontSize: 13, color: 'var(--sage)', fontWeight: 700 }}>View →</span>
                        </div>
                      </div>
                    </Link>
                    {/* WhatsApp share */}
                    <a href={waText} target="_blank" rel="noopener noreferrer"
                      style={{ position: 'absolute', bottom: 52, right: 14, width: 28, height: 28, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, textDecoration: 'none', boxShadow: '0 2px 8px rgba(37,211,102,.3)', zIndex: 2 }}
                      title="Share on WhatsApp">📲</a>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Category filter */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          {CATS.map(c => (
            <button key={c} onClick={() => { setCat(c); setQ('') }}
              style={{ padding: '7px 16px', borderRadius: 100, fontSize: 13, cursor: 'pointer', border: `1px solid ${cat === c && !q ? 'var(--sage)' : 'var(--border2)'}`, background: cat === c && !q ? 'var(--sage-bg)' : 'var(--card)', color: cat === c && !q ? 'var(--sage-dk)' : 'var(--ink3)', fontWeight: cat === c && !q ? 700 : 400, transition: 'all .2s' }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{ fontSize: 12, color: 'var(--ink4)', marginBottom: 20 }}>
          {shown.length} diet chart{shown.length !== 1 ? 's' : ''}{cat !== 'All' ? ` in ${cat}` : ''}
          {isFiltering && <button onClick={() => { setQ(''); setCat('All') }} style={{ marginLeft: 10, fontSize: 11, color: 'var(--sage)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline' }}>Clear</button>}
        </div>

        {/* All diet cards */}
        {shown.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16, marginBottom: 52 }}>
            {shown.map((d: any) => {
              const cc = CAT_COLORS[d.category] || 'var(--sage-dk)'
              const waText = `https://wa.me/?text=${encodeURIComponent(`${d.title} diet chart — homeopedia.in/diet/${d.slug?.current}`)}`
              return (
                <div key={d.slug?.current} style={{ position: 'relative' }}>
                  <Link href={`/diet/${d.slug?.current}`} style={{ textDecoration: 'none' }}>
                    <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '20px', cursor: 'pointer', position: 'relative', overflow: 'hidden', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${cc},${cc}88)`, borderRadius: '16px 16px 0 0' }} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginTop: 4 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: `${cc}18`, color: cc, border: `1px solid ${cc}40` }}>{d.category}</span>
                        <span style={{ fontSize: 10, color: 'var(--ink4)' }}>✓ Dr. Reviewed</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 18, fontWeight: 600, color: 'var(--ink)', marginBottom: 4, lineHeight: 1.3 }}>{d.title}</h3>
                      {d.hindiName && <div style={{ fontSize: 12, color: 'var(--warm)', fontStyle: 'italic', fontFamily: 'var(--font-display,Georgia,serif)', marginBottom: 10, fontWeight: 500 }}>{d.hindiName}</div>}
                      {d.keyRule && <p style={{ fontSize: 12, color: 'var(--ink4)', lineHeight: 1.55, fontWeight: 300, flex: 1 }}>💡 {d.keyRule}</p>}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid var(--border)', marginTop: 14 }}>
                        <div style={{ display: 'flex', gap: 8 }}>
                          {d.includeCount > 0 && <span style={{ fontSize: 10, color: 'var(--green)', fontWeight: 500 }}>✓ {d.includeCount} foods</span>}
                          {d.avoidCount > 0 && <span style={{ fontSize: 10, color: 'var(--red)', fontWeight: 500 }}>✕ {d.avoidCount} avoid</span>}
                          {d.hasSamplePlan && <span style={{ fontSize: 10, color: 'var(--warm)', fontWeight: 500 }}>📅 Plan</span>}
                        </div>
                        <span style={{ fontSize: 12, color: 'var(--sage)', fontWeight: 700 }}>View →</span>
                      </div>
                    </div>
                  </Link>
                  {/* WhatsApp share button */}
                  <a href={waText} target="_blank" rel="noopener noreferrer"
                    style={{ position: 'absolute', bottom: 48, right: 12, width: 26, height: 26, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, textDecoration: 'none', boxShadow: '0 2px 6px rgba(37,211,102,.3)', zIndex: 2 }}
                    title="Share on WhatsApp">📲</a>
                </div>
              )
            })}

            {/* Coming soon */}
            <div style={{ background: 'var(--bg2)', border: '2px dashed var(--border2)', borderRadius: 16, padding: '28px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 180 }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>🔜</div>
              <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 14, fontWeight: 600, color: 'var(--ink3)', marginBottom: 4 }}>Aur Charts Coming</div>
              <div style={{ fontSize: 12, color: 'var(--ink4)', fontWeight: 300, lineHeight: 1.65 }}>Arthritis, Diabetes, Anxiety — jald aa rahe hain</div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 24px', marginBottom: 52 }}>
            <div style={{ fontSize: 40, marginBottom: 14 }}>🔍</div>
            <p style={{ color: 'var(--ink3)', fontWeight: 300, fontSize: 15 }}>"{q}" ke liye koi diet chart nahi mila abhi.</p>
            <button onClick={() => { setQ(''); setCat('All') }} style={{ marginTop: 16, padding: '10px 22px', background: 'var(--sage-bg)', border: '1px solid rgba(63,107,77,.2)', borderRadius: 100, color: 'var(--sage-dk)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Sabhi charts dekhein</button>
          </div>
        )}

        {/* Universal 8 rules */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 22, padding: 'clamp(22px,3vw,40px)', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: 12 }}>
            <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
            Universal principles
          </div>
          <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(20px,3vw,30px)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1, color: 'var(--ink)', marginBottom: 24 }}>
            Sab plans mein common 8 rules.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))', gap: 16 }}>
            {[
              ['🕐', 'Regular meal timing', 'Body ko predictable rhythm chahiye'],
              ['💧', '3 litre water roz', 'Subah uthte hi 1 glass warm'],
              ['🍽️', 'Mindful eating', 'Phone band, slowly chabaayein'],
              ['🌙', 'Light dinner', 'Sone se 3 ghante pehle kha lo'],
              ['🌡️', 'Warm > cold food', 'Body ki agni ke liye warm best'],
              ['🌾', 'Whole > refined', 'Atta, chawal sabut grain prefer'],
              ['🌿', 'Seasonal & local', 'Body ko adapt karne mein madad'],
              ['🚫', 'No skipping meals', 'Specially breakfast mat skip karo'],
            ].map(([ic, t, d], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ fontSize: 22, flexShrink: 0 }}>{ic}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{t}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink4)', marginTop: 3, lineHeight: 1.5 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: 'clamp(24px,3vw,36px) clamp(22px,3vw,44px)', background: 'linear-gradient(135deg,var(--sage) 0%,var(--sage-dk) 100%)', borderRadius: 22, color: '#fff', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -60, top: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,.06)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(18px,2.5vw,26px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 6 }}>Personalised diet plan banwana hai?</div>
            <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 300 }}>Apni condition, age aur body type ke hisaab se Dr. Shadab plan banayenge.</div>
          </div>
          <a href={WA_BASE} target="_blank" rel="noopener noreferrer"
            style={{ flexShrink: 0, padding: '12px 24px', background: '#fff', color: 'var(--sage-dk)', borderRadius: 99, fontSize: 13, fontWeight: 700, textDecoration: 'none', position: 'relative', zIndex: 1, whiteSpace: 'nowrap' }}>
            💬 Consult Dr. Shadab
          </a>
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
