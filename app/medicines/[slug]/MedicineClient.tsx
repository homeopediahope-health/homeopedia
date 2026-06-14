'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { WA_BASE } from '@/lib/constants'

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
  sageLt: 'var(--sage-lt)',
  warm:   'var(--warm)',
  warmBg: 'var(--warm-bg)',
  red:    'var(--red)',
  serif:  'var(--font-display,Georgia,serif)',
  mono:   'ui-monospace,SFMono-Regular,monospace',
}

const CAT_META: Record<string, { ic: string; n: string; tone: string }> = {
  plant:   { ic: '🌿', n: 'Plant-based',   tone: '#dde6cd' },
  mineral: { ic: '⚪', n: 'Mineral',        tone: '#cce0e0' },
  animal:  { ic: '🦂', n: 'Animal-source',  tone: '#e8d2c4' },
  nosode:  { ic: '🧪', n: 'Nosode',         tone: '#dcd8ec' },
}

// ─── All section tabs ───
const ALL_TABS = ['overview','keynotes','uses','potency','mind','physical','modal','indications','vs','myths','doctor','faq']

// ─── Section wrapper ───
function MSec({
  id, title, eyebrow, children, isMobile,
}: {
  id: string; title: string; eyebrow?: string; children: React.ReactNode; isMobile: boolean
}) {
  return (
    <div id={'msec-' + id} style={{ marginTop: isMobile ? 32 : 48, scrollMarginTop: 170 }}>
      {eyebrow && (
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: T.sage, fontFamily: T.mono, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 20, height: 1, background: T.sage, opacity: 0.5 }} />
          {eyebrow}
        </div>
      )}
      <h2 style={{ fontFamily: T.serif, fontSize: isMobile ? 24 : 32, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.05, color: T.ink, margin: 0 }}>
        {title}
      </h2>
      <div style={{ marginTop: 14 }}>{children}</div>
    </div>
  )
}

// ─── Table helpers ───
function thSt(color = T.ink3) {
  return {
    padding: '12px 14px', textAlign: 'left' as const, fontSize: 11, fontWeight: 700,
    letterSpacing: '0.08em', textTransform: 'uppercase' as const, color, fontFamily: T.mono,
  }
}
function tdSt() {
  return { padding: '12px 14px', fontSize: 13, color: T.ink2, lineHeight: 1.55 }
}

// ─── Main component ───
export default function MedicineClient({ medicine: m }: { medicine: any }) {
  const [isMobile, setIsMobile]   = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [openFaq, setOpenFaq]     = useState<number>(0)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const cat = CAT_META[m.category || 'plant'] || CAT_META['plant']
  const faqs         = m.faqs         || []
  const keynotes     = m.keynotes     || []
  const keyUses      = m.keyUses      || []
  const potency      = m.potency      || []
  const mindSym      = m.mindSymptoms || []
  const physSym      = m.physicalSymptoms || []
  const modalities   = m.modalities   || {}
  const indications  = m.indications  || []
  const comparisons  = m.comparisons  || []
  const myths        = m.myths        || []
  const facts        = m.facts        || []
  const related      = m.related      || []
  const worse        = modalities.worse  || []
  const better       = modalities.better || []

  // Dynamic tabs — only show tabs that have data
  const TABS = ALL_TABS.filter(tab => {
    if (tab === 'overview')    return !!m.intro
    if (tab === 'keynotes')    return keynotes.length > 0
    if (tab === 'uses')        return keyUses.length > 0
    if (tab === 'potency')     return potency.length > 0
    if (tab === 'mind')        return mindSym.length > 0
    if (tab === 'physical')    return physSym.length > 0
    if (tab === 'modal')       return worse.length > 0 || better.length > 0
    if (tab === 'indications') return indications.length > 0
    if (tab === 'vs')          return comparisons.length > 0
    if (tab === 'myths')       return myths.length > 0
    if (tab === 'doctor')      return !!m.doctorTake
    if (tab === 'faq')         return faqs.length > 0
    return true
  })

  const scrollTo = (id: string) => {
    setActiveTab(id)
    document.getElementById('msec-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const waMsg = encodeURIComponent(`Namaste Dr. Shadab, mujhe ${m.name} ke baare mein consultation chahiye.`)

  return (
    <div className="page-in" style={{ paddingTop: 66, background: T.bg, minHeight: '100vh' }}>

      {/* ── Breadcrumb ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '14px 18px 0' : '20px 40px 0', fontSize: 11, color: T.ink4, fontFamily: T.mono, letterSpacing: '0.04em' }}>
        <Link href="/"          style={{ color: T.ink4, textDecoration: 'none' }}>Home</Link> ›{' '}
        <Link href="/medicines" style={{ color: T.ink4, textDecoration: 'none' }}>Medicines</Link> ›{' '}
        <Link href={`/medicines?cat=${m.category}`} style={{ color: T.ink4, textDecoration: 'none' }}>{cat.n}</Link> ›{' '}
        <strong style={{ color: T.ink2, fontWeight: 700 }}>{m.name}</strong>
      </div>

      {/* ── Hero ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '18px 18px 24px' : '32px 40px 36px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr', gap: isMobile ? 20 : 48, alignItems: 'flex-start' }}>
        <div>
          {/* Status pills */}
          <div style={{ display: 'flex', gap: 7, marginBottom: 14, flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 10px', background: T.sageBg, color: T.sage, borderRadius: 99, fontSize: 11, fontWeight: 700 }}>✓ Doctor reviewed</span>
            <span style={{ padding: '4px 10px', background: cat.tone, color: T.ink2, borderRadius: 99, fontSize: 11, fontWeight: 700 }}>{cat.ic} {cat.n}</span>
            {m.readMin && (
              <span style={{ padding: '4px 10px', background: T.bg2, color: T.ink3, borderRadius: 99, fontSize: 11, fontWeight: 600, border: `1px solid ${T.border}` }}>
                ⏱ {m.readMin} min read
              </span>
            )}
          </div>

          {/* Name */}
          <h1 style={{ fontFamily: T.serif, fontSize: isMobile ? 40 : 72, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.95, color: T.ink, margin: 0 }}>
            {m.name}
          </h1>
          {m.alt && (
            <div style={{ fontFamily: T.serif, fontStyle: 'italic', color: T.sage, fontSize: isMobile ? 15 : 21, marginTop: 8, fontWeight: 500 }}>
              {m.alt}
            </div>
          )}
          {m.intro && (
            <p style={{ fontSize: isMobile ? 14 : 16, color: T.ink2, marginTop: isMobile ? 14 : 20, lineHeight: 1.65, maxWidth: 600 }}>
              {m.intro}
            </p>
          )}

          {/* Section nav tabs */}
          <div style={{ marginTop: isMobile ? 18 : 28, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {TABS.map(k => (
              <button key={k} onClick={() => scrollTo(k)} style={{
                padding: isMobile ? '7px 11px' : '8px 14px', borderRadius: 99,
                fontSize: isMobile ? 10 : 11, fontWeight: 600, cursor: 'pointer',
                textTransform: 'uppercase', letterSpacing: '0.04em',
                background: activeTab === k ? T.ink : T.card,
                color:      activeTab === k ? '#fff' : T.ink2,
                border: `1px solid ${activeTab === k ? T.ink : T.border}`,
                fontFamily: 'inherit', transition: 'all .2s',
              }}>{k}</button>
            ))}
          </div>
        </div>

        {/* Desktop quick-reference card */}
        {!isMobile && (
          <div style={{ padding: 24, background: T.card, border: `1px solid ${T.border}`, borderRadius: 20, boxShadow: '0 12px 30px rgba(38,74,48,.06)' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: T.sage, textTransform: 'uppercase', fontFamily: T.mono }}>Medicine details</div>
            <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                ['🌱', 'Source',   m.source   || '—'],
                ['🌿', 'Category', cat.n],
                ['⏱',  'Read',    (m.readMin ? m.readMin + ' min' : '—')],
                ['📚', 'Ref.',     'Boericke / Allen'],
              ].map(([ic, label, val]) => (
                <div key={label} style={{ padding: '12px 14px', background: T.bg, borderRadius: 10 }}>
                  <div style={{ fontSize: 18 }}>{ic}</div>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: T.ink4, textTransform: 'uppercase', fontFamily: T.mono, marginTop: 6 }}>{label}</div>
                  <div style={{ fontFamily: T.serif, fontSize: 13, fontWeight: 600, marginTop: 3, lineHeight: 1.3, color: T.ink }}>{val}</div>
                </div>
              ))}
            </div>
            <a
              href={`${WA_BASE}?text=${waMsg}`}
              target="_blank" rel="noopener noreferrer"
              style={{ marginTop: 16, padding: '12px 16px', background: T.sage, color: '#fff', borderRadius: 12, fontSize: 12, fontWeight: 700, textAlign: 'center', display: 'block', textDecoration: 'none' }}
            >
              💬 Doctor ki prescription lein
            </a>
          </div>
        )}
      </div>

      {/* ── Facts row (4 cards) ── */}
      {facts.length > 0 && (
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '0 18px 24px' : '0 40px 36px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: isMobile ? 8 : 12 }}>
            {facts.slice(0, 4).map((f: any, i: number) => (
              <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: isMobile ? 12 : 14, padding: isMobile ? 14 : 18 }}>
                <div style={{ fontSize: isMobile ? 20 : 24 }}>{f.ic}</div>
                <div style={{ fontFamily: T.serif, fontSize: isMobile ? 13 : 15, fontWeight: 600, marginTop: isMobile ? 6 : 10, letterSpacing: '-0.01em', lineHeight: 1.2, color: T.ink }}>{f.t}</div>
                <div style={{ fontSize: isMobile ? 10 : 11, color: T.ink4, marginTop: isMobile ? 2 : 4, lineHeight: 1.45 }}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Main 2-column grid ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '0 18px 80px' : '0 40px 80px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.6fr 1fr', gap: isMobile ? 28 : 48, alignItems: 'flex-start' }}>

        {/* ════ LEFT COLUMN ════ */}
        <div>

          {/* Overview */}
          {m.intro && (
            <MSec id="overview" title="Ye medicine kya hai?" eyebrow="Source & history" isMobile={isMobile}>
              <div style={{ padding: isMobile ? '16px 18px' : '22px 26px', background: T.card, border: `1px solid ${T.border}`, borderRadius: 14 }}>
                <p style={{ fontSize: isMobile ? 14 : 15, color: T.ink2, lineHeight: 1.75, margin: 0 }}>{m.intro}</p>
              </div>
            </MSec>
          )}

          {/* Keynotes */}
          {keynotes.length > 0 && (
            <MSec id="keynotes" title="Keynotes" eyebrow="⭐ Quick summary" isMobile={isMobile}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {keynotes.map((k: any, i: number) => (
                  <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: isMobile ? '14px 16px' : '18px 22px', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ fontSize: isMobile ? 20 : 24, flexShrink: 0 }}>{k.ic}</div>
                    <div>
                      <div style={{ fontFamily: T.serif, fontSize: isMobile ? 15 : 17, fontWeight: 600, letterSpacing: '-0.01em', color: T.ink }}>{k.t}</div>
                      <div style={{ fontSize: isMobile ? 12 : 13, color: T.ink3, marginTop: 4, lineHeight: 1.55 }}>{k.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </MSec>
          )}

          {/* Key Uses */}
          {keyUses.length > 0 && (
            <MSec id="uses" title="Kis kaam aati hai?" eyebrow="⭐⭐ Key uses" isMobile={isMobile}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10 }}>
                {keyUses.map((u: any, i: number) => (
                  <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: T.sageBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{u.ic}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: T.ink }}>{u.t}</div>
                      <div style={{ fontSize: 12, color: T.ink3, marginTop: 3, lineHeight: 1.55 }}>{u.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </MSec>
          )}

          {/* Potency */}
          {potency.length > 0 && (
            <MSec id="potency" title="Potency guide — 30C, 200C, 1M kya hai?" eyebrow="⭐⭐ Most searched" isMobile={isMobile}>
              <div style={{ padding: '12px 16px', background: T.warmBg, border: `1px solid rgba(192,132,56,0.25)`, borderLeft: `4px solid ${T.warm}`, borderRadius: 10, marginBottom: 14, fontSize: isMobile ? 12 : 13, color: T.ink2, lineHeight: 1.6 }}>
                ⚕️ <strong>Potency select karna doctor ka kaam hai.</strong> Same medicine, alag patient ke liye alag potency hoti hai. Niche general guide hai — self-prescribe na karein.
              </div>
              <div style={{ overflowX: 'auto', background: T.card, border: `1px solid ${T.border}`, borderRadius: 14 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? 12 : 13 }}>
                  <thead>
                    <tr style={{ background: T.sageBg }}>
                      <th style={thSt(T.ink3)}>Potency</th>
                      <th style={thSt(T.ink3)}>Kaise kaam karti hai</th>
                      <th style={thSt(T.ink3)}>Kab use hoti hai</th>
                    </tr>
                  </thead>
                  <tbody>
                    {potency.map((r: any, i: number) => (
                      <tr key={i} style={{ borderTop: `1px solid ${T.border}` }}>
                        <td style={{ ...tdSt(), fontFamily: T.mono, fontWeight: 700, color: T.sage, fontSize: isMobile ? 13 : 15 }}>{r.p}</td>
                        <td style={tdSt()}>{r.how}</td>
                        <td style={tdSt()}>{r.when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </MSec>
          )}

          {/* Dosage */}
          {m.dosage && (
            <MSec id="dosage" title="General dosage info" eyebrow="How to take" isMobile={isMobile}>
              <div style={{ padding: isMobile ? '16px 18px' : '22px 26px', background: T.card, border: `1px solid ${T.border}`, borderRadius: 14 }}>
                <p style={{ fontSize: isMobile ? 14 : 15, color: T.ink2, lineHeight: 1.75, margin: 0 }}>{m.dosage}</p>
                <div style={{ marginTop: 14, padding: '10px 14px', background: T.bg2, borderRadius: 10, fontSize: isMobile ? 12 : 13, color: T.ink3, lineHeight: 1.6, fontStyle: 'italic', fontFamily: T.serif }}>
                  💡 Dose aur frequency aapke homeopath decide karenge — har case mein alag hoti hai. Homeopathy individualised hai.
                </div>
              </div>
            </MSec>
          )}

          {/* Mind symptoms */}
          {mindSym.length > 0 && (
            <MSec id="mind" title="Mind symptoms & personality" eyebrow="⭐ Constitution" isMobile={isMobile}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10 }}>
                {mindSym.map((s: any, i: number) => (
                  <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 4, height: 36, borderRadius: 99, background: T.sage, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: T.ink }}>{s.t}</div>
                      <div style={{ fontSize: 12, color: T.ink3, marginTop: 3, lineHeight: 1.55 }}>{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </MSec>
          )}

          {/* Physical symptoms head-to-toe */}
          {physSym.length > 0 && (
            <MSec id="physical" title="Physical symptoms — head to toe" eyebrow="Body parts" isMobile={isMobile}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
                {physSym.map((section: any, i: number) => (
                  <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: isMobile ? '14px 16px' : '18px 22px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: T.warm, textTransform: 'uppercase', fontFamily: T.mono, marginBottom: 10 }}>
                      {section.area}
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {(section.symptoms || []).map((it: string, j: number) => (
                        <li key={j} style={{ fontSize: 13, color: T.ink2, lineHeight: 1.55, paddingLeft: 14, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, top: 7, width: 6, height: 6, borderRadius: '50%', background: T.sage, opacity: 0.6 }} />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </MSec>
          )}

          {/* Modalities */}
          {(worse.length > 0 || better.length > 0) && (
            <MSec id="modal" title="Modalities — kab badhta, kab ghatta?" eyebrow="⭐ Homeopathy USP" isMobile={isMobile}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
                {/* Worse */}
                <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: 'hidden' }}>
                  <div style={{ padding: '12px 18px', background: 'rgba(162,56,56,0.07)', fontSize: 12, fontWeight: 700, color: '#a23838', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: T.mono, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 16 }}>❌</span> Worse (Badhta hai)
                  </div>
                  <div style={{ padding: '8px 14px 14px' }}>
                    {worse.map((w: string, i: number) => (
                      <div key={i} style={{ padding: '10px 0', borderBottom: i === worse.length - 1 ? 'none' : `1px dashed ${T.border}`, display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: T.ink2, lineHeight: 1.55 }}>
                        <span style={{ color: '#a23838', marginTop: 6, flexShrink: 0, fontSize: 6 }}>●</span>
                        <span>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Better */}
                <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: 'hidden' }}>
                  <div style={{ padding: '12px 18px', background: T.sageBg, fontSize: 12, fontWeight: 700, color: T.sage, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: T.mono, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 16 }}>✅</span> Better (Ghatta hai)
                  </div>
                  <div style={{ padding: '8px 14px 14px' }}>
                    {better.map((w: string, i: number) => (
                      <div key={i} style={{ padding: '10px 0', borderBottom: i === better.length - 1 ? 'none' : `1px dashed ${T.border}`, display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: T.ink2, lineHeight: 1.55 }}>
                        <span style={{ color: T.sage, marginTop: 6, flexShrink: 0, fontSize: 6 }}>●</span>
                        <span>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MSec>
          )}

          {/* Disease indications */}
          {indications.length > 0 && (
            <MSec id="indications" title="Kaunsi bimariyon mein use hoti hai?" eyebrow="🔗 Disease indications" isMobile={isMobile}>
              <div style={{ padding: '12px 16px', background: T.warmBg, border: `1px solid rgba(192,132,56,0.25)`, borderRadius: 10, marginBottom: 14, fontSize: isMobile ? 12 : 13, color: T.ink2, lineHeight: 1.6 }}>
                ⚠️ Ye indications hain, prescription nahi. Doctor symptoms aur full case dekhke decide karega — sirf disease match se medicine nahi banti.
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {indications.filter((ind: any) => ind.diseaseSlug).map((ind: any, i: number) => (
                  <Link
                    key={i}
                    href={`/diseases/${ind.diseaseSlug}`}
                    style={{ padding: '14px 18px', background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, textDecoration: 'none', color: T.ink, display: 'flex', alignItems: 'center', gap: 14, transition: 'all .2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = T.sage; (e.currentTarget as HTMLElement).style.transform = 'translateX(3px)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = T.border; (e.currentTarget as HTMLElement).style.transform = 'translateX(0)' }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: T.sageBg, color: T.sage, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>🩺</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: T.serif, fontSize: isMobile ? 14 : 16, fontWeight: 600, letterSpacing: '-0.01em' }}>{ind.diseaseName || ind.diseaseSlug}</div>
                      <div style={{ fontSize: 12, color: T.ink3, marginTop: 3, lineHeight: 1.5 }}>{ind.why}</div>
                    </div>
                    <span style={{ color: T.ink4, flexShrink: 0 }}>›</span>
                  </Link>
                ))}
              </div>
            </MSec>
          )}

          {/* Food restrictions */}
          {m.foodRestrictions && (
            <MSec id="food" title="Khane mein kya parhez karein?" eyebrow="Food restrictions" isMobile={isMobile}>
              <div style={{ padding: isMobile ? '16px 18px' : '22px 26px', background: T.card, border: `1px solid ${T.border}`, borderRadius: 14 }}>
                <p style={{ fontSize: isMobile ? 14 : 15, color: T.ink2, lineHeight: 1.75, margin: 0 }}>{m.foodRestrictions}</p>
                <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Coffee', 'Pudina', 'Kachha pyaaz', 'Camphor/Kapur', 'Strong alcohol'].map(x => (
                    <span key={x} style={{ padding: '6px 12px', background: 'rgba(162,56,56,0.08)', color: '#a23838', borderRadius: 99, fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 5 }}>❌ {x}</span>
                  ))}
                </div>
              </div>
            </MSec>
          )}

          {/* Pregnancy & Children */}
          {m.pregnancy && (
            <div style={{ marginTop: isMobile ? 32 : 48, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
              <div style={{ padding: isMobile ? '18px 20px' : '24px 28px', background: '#fff5f8', border: `1px solid rgba(217,126,155,0.25)`, borderLeft: '4px solid #d97e9b', borderRadius: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#a04d6c', textTransform: 'uppercase', fontFamily: T.mono, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 20 }}>🤰</span> Pregnancy
                </div>
                <p style={{ fontSize: isMobile ? 13 : 14, color: T.ink2, marginTop: 10, lineHeight: 1.7 }}>{m.pregnancy}</p>
              </div>
              <div style={{ padding: isMobile ? '18px 20px' : '24px 28px', background: '#fefcf2', border: `1px solid rgba(192,132,56,0.2)`, borderLeft: `4px solid ${T.warm}`, borderRadius: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: T.warm, textTransform: 'uppercase', fontFamily: T.mono, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 20 }}>🧸</span> Children
                </div>
                <p style={{ fontSize: isMobile ? 13 : 14, color: T.ink2, marginTop: 10, lineHeight: 1.7 }}>
                  Bachhon ke liye homeopathic medicines generally safe hain — pills paani mein ghol ke de sakte hain. Lekin dose, potency aur frequency qualified homeopath se confirm karein. Self-medication na karein.
                </p>
              </div>
            </div>
          )}

          {/* Comparisons */}
          {comparisons.length > 0 && (
            <MSec id="vs" title={`${m.name} vs similar medicines`} eyebrow="⚔️ Comparison" isMobile={isMobile}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {comparisons.map((cmp: any, i: number) => (
                  <div key={i}>
                    <div style={{ fontFamily: T.serif, fontSize: isMobile ? 16 : 18, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 8 }}>{cmp.n}</div>
                    <div style={{ overflowX: 'auto', background: T.card, border: `1px solid ${T.border}`, borderRadius: 14 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? 12 : 13 }}>
                        <thead>
                          <tr style={{ background: T.bg2 }}>
                            <th style={thSt(T.ink3)}>Factor</th>
                            <th style={thSt(T.sage)}>{m.name}</th>
                            <th style={thSt(T.ink3)}>Compare</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(cmp.rows || []).map((r: any, j: number) => (
                            <tr key={j} style={{ borderTop: `1px solid ${T.border}` }}>
                              <td style={{ ...tdSt(), fontWeight: 700, color: T.ink }}>{r.factor}</td>
                              <td style={tdSt()}>{r.medicineValue}</td>
                              <td style={tdSt()}>{r.compareValue}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </MSec>
          )}

          {/* Myths */}
          {myths.length > 0 && (
            <MSec id="myths" title="Myths & galat fehmiyan" eyebrow="🚫 Bust the myth" isMobile={isMobile}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {myths.map((mt: any, i: number) => (
                  <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: isMobile ? '14px 16px' : '18px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ padding: '2px 8px', background: 'rgba(162,56,56,0.10)', color: '#a23838', borderRadius: 99, fontSize: 9, fontWeight: 700, letterSpacing: '0.06em', flexShrink: 0 }}>MYTH</div>
                      <div style={{ fontFamily: T.serif, fontSize: isMobile ? 14 : 16, fontWeight: 600, letterSpacing: '-0.01em', color: T.ink }}>{mt.q}</div>
                    </div>
                    <div style={{ marginTop: 10, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ padding: '2px 8px', background: T.sageBg, color: T.sage, borderRadius: 99, fontSize: 9, fontWeight: 700, letterSpacing: '0.06em', flexShrink: 0 }}>FACT</div>
                      <div style={{ fontSize: isMobile ? 13 : 14, color: T.ink2, lineHeight: 1.65 }}>{mt.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </MSec>
          )}

          {/* Doctor's take */}
          {m.doctorTake && (
            <MSec id="doctor" title="Dr. Shadab ki rai" eyebrow="🩺 Clinical experience" isMobile={isMobile}>
              <div style={{ padding: isMobile ? '20px 22px' : '28px 32px', background: `linear-gradient(135deg,${T.sageBg},${T.warmBg})`, border: `1px solid ${T.border}`, borderRadius: 16, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 14, right: 18, fontFamily: T.serif, fontSize: isMobile ? 44 : 60, color: 'rgba(63,107,77,0.12)', lineHeight: 0.6 }}>"</div>
                <p style={{ fontSize: isMobile ? 14 : 16, color: T.ink2, lineHeight: 1.75, fontFamily: T.serif, fontStyle: 'italic', margin: 0 }}>{m.doctorTake}</p>
                <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.sage, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: T.serif, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>SK</div>
                  <div>
                    <div style={{ fontFamily: T.serif, fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em', color: T.ink }}>Dr. Shadab Khan</div>
                    <div style={{ fontSize: 11, color: T.ink4, fontFamily: T.mono }}>MD Homoeopath · 15+ yrs practice</div>
                  </div>
                </div>
              </div>
            </MSec>
          )}

          {/* FAQs */}
          {faqs.length > 0 && (
            <MSec id="faq" title="Frequently asked" eyebrow={`${faqs.length} sawaal`} isMobile={isMobile}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {faqs.map((f: any, i: number) => {
                  const on = openFaq === i
                  return (
                    <div
                      key={i}
                      onClick={() => setOpenFaq(on ? -1 : i)}
                      style={{
                        background: T.card, border: `1px solid ${on ? T.sage : T.border}`, borderRadius: 14,
                        cursor: 'pointer', overflow: 'hidden',
                        boxShadow: on ? `0 8px 24px rgba(63,107,77,.10)` : 'none',
                        transition: 'all .35s cubic-bezier(.2,.8,.2,1)',
                      }}
                    >
                      <div style={{ padding: isMobile ? '14px 16px' : '18px 22px', display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 14 }}>
                        <div style={{ width: isMobile ? 24 : 30, height: isMobile ? 24 : 30, borderRadius: '50%', background: on ? T.sage : T.bg2, color: on ? '#fff' : T.ink3, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isMobile ? 9 : 11, fontWeight: 700, fontFamily: T.mono, flexShrink: 0, transition: 'background .3s' }}>
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div style={{ flex: 1, fontFamily: T.serif, fontSize: isMobile ? 14 : 16, fontWeight: 600, letterSpacing: '-0.01em', color: T.ink }}>{f.q}</div>
                        <div style={{ width: isMobile ? 22 : 26, height: isMobile ? 22 : 26, borderRadius: '50%', background: T.bg2, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: on ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .3s', fontSize: isMobile ? 12 : 14, flexShrink: 0 }}>+</div>
                      </div>
                      <div style={{ maxHeight: on ? 600 : 0, overflow: 'hidden', transition: 'max-height .5s cubic-bezier(.2,.8,.2,1)' }}>
                        <div style={{ padding: isMobile ? '0 16px 18px 50px' : '0 22px 22px 66px', borderTop: `1px dashed ${T.border}` }}>
                          <p style={{ marginTop: 14, fontSize: isMobile ? 13 : 14, color: T.ink2, lineHeight: 1.65 }}>{f.a}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </MSec>
          )}

          {/* References */}
          <div style={{ marginTop: 36, padding: '16px 18px', background: T.warmBg, border: '1px solid rgba(192,132,56,0.25)', borderRadius: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: T.warm, textTransform: 'uppercase', fontFamily: T.mono }}>References</div>
            <div style={{ fontSize: 13, color: T.ink2, marginTop: 8, lineHeight: 1.75 }}>
              <div>📖 <strong>Boericke W.</strong> — Pocket Manual of Homeopathic Materia Medica</div>
              <div>📖 <strong>Kent J.T.</strong> — Repertory of the Homeopathic Materia Medica</div>
              <div>📖 <strong>Allen H.C.</strong> — Keynotes and Characteristics with Comparisons</div>
              <div>⚕️ <strong>Dr. Shadab Khan</strong> — 15+ years clinical practice (Akola)</div>
            </div>
          </div>

          {/* Disclaimer */}
          <div style={{ marginTop: 14, padding: '16px 18px', background: 'rgba(162,56,56,0.06)', border: '1px solid rgba(162,56,56,0.18)', borderRadius: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: '#a23838', textTransform: 'uppercase', fontFamily: T.mono }}>Disclaimer</div>
            <div style={{ fontSize: 13, color: T.ink2, marginTop: 8, lineHeight: 1.7, fontStyle: 'italic', fontFamily: T.serif }}>
              "Ye jaankari educational purpose ke liye hai. Homeopathic medicine doctor ki salah ke bina na lein. Self-medication GALAT hai aur nuksan kar sakti hai."
              <div style={{ fontSize: 11, color: T.ink4, marginTop: 6, fontFamily: T.mono, letterSpacing: '0.04em', fontStyle: 'normal' }}>— Dr. Shadab Khan (MD Homoeopath)</div>
            </div>
          </div>
        </div>

        {/* ════ RIGHT SIDEBAR ════ */}
        <div style={{ position: isMobile ? 'static' : 'sticky', top: 90, display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Mobile: quick info card */}
          {isMobile && (
            <div style={{ padding: 18, background: T.card, border: `1px solid ${T.border}`, borderRadius: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: T.sage, textTransform: 'uppercase', fontFamily: T.mono }}>Medicine details</div>
              <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[
                  ['🌱', m.source || '—'],
                  ['🌿', cat.n],
                  ['⏱',  (m.readMin ? m.readMin + ' min' : '—')],
                  ['📚', 'Boericke'],
                ].map(([ic, val], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: T.bg, borderRadius: 8, fontSize: 12, fontWeight: 600, color: T.ink2 }}>
                    <span style={{ fontSize: 14 }}>{ic}</span> <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WhatsApp CTA — sage gradient */}
          <div style={{ padding: isMobile ? 22 : 24, background: `linear-gradient(135deg,${T.sage} 0%,${T.sageDk} 100%)`, borderRadius: 18, color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: '0 16px 40px rgba(63,107,77,.22)' }}>
            <div style={{ position: 'absolute', right: -30, top: -30, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.85, fontFamily: T.mono }}>Personal prescription</div>
              <div style={{ fontFamily: T.serif, fontSize: isMobile ? 20 : 22, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 8, lineHeight: 1.15 }}>Doctor ki rai lein, self-medicate nahi.</div>
              <div style={{ fontSize: 12, opacity: 0.88, marginTop: 10, lineHeight: 1.55 }}>Dr. Shadab ko WhatsApp pe case bhejein — aapke liye right potency aur dose milegi.</div>
              <a
                href={`${WA_BASE}?text=${waMsg}`}
                target="_blank" rel="noopener noreferrer"
                style={{ marginTop: 14, padding: '10px 16px', background: '#fff', color: T.sageDk, borderRadius: 99, fontSize: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
              >
                💬 Start consultation
              </a>
            </div>
          </div>

          {/* Related medicines */}
          {related.length > 0 && (
            <div style={{ padding: 18, background: T.card, border: `1px solid ${T.border}`, borderRadius: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: T.warm, textTransform: 'uppercase', fontFamily: T.mono }}>🔗 Related medicines</div>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {related.map((r: any, i: number) => (
                  <Link
                    key={i}
                    href={`/medicines/${r.medicineSlug}`}
                    style={{ padding: '10px 12px', background: T.bg, borderRadius: 8, fontSize: 13, fontWeight: 600, color: T.ink2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
                  >
                    <span>💊 {r.medicineName}</span>
                    <span style={{ color: T.ink4 }}>›</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* References sidebar */}
          <div style={{ padding: 14, background: T.warmBg, border: '1px solid rgba(192,132,56,0.2)', borderRadius: 12, fontSize: 11, color: T.ink3, lineHeight: 1.55 }}>
            <strong style={{ color: T.ink }}>References:</strong> Boericke, Allen, Kent · CCRH · Dr. Shadab Khan 15+ yrs clinical practice (Akola).
          </div>
        </div>

      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
