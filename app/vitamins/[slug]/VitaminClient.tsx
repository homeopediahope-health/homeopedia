'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { WA_BASE } from '@/lib/constants'

// ─── Color tokens mapped to CSS variables ───
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

const CAT_COLORS: Record<string, string> = {
  Vitamin:      'var(--sage-bg)',
  Mineral:      '#cce0e0',
  Supplement:   '#f0e3c4',
  'Amino Acid': '#dcd8ec',
  'Fatty Acid': '#f5d7d7',
}

const TABS = ['overview','deficiency','range','food','dose','forms','timing','interactions','timeline','myths','faq']

// ─── Data adapters ───

function getSymbol(name: string): string {
  const parts = (name || '').split(' ')
  return parts.length > 1 ? parts[parts.length - 1] : (name?.slice(0, 2).toUpperCase() || '?')
}

function buildFacts(v: any) {
  return [
    { ic: '📊', t: 'Normal Range',   d: v.quickFacts?.normalRangeQuick      || 'Test se confirm karein' },
    { ic: '🇮🇳', t: 'India mein',    d: v.quickFacts?.indiaPrevalence        || 'Common deficiency' },
    { ic: '⚠️',  t: 'Pehli nishani', d: v.quickFacts?.commonDeficiencySign  || 'Thakaan, weakness' },
    { ic: '🥗',  t: 'Best source',   d: v.quickFacts?.mainFoodSource        || 'Diet se milta hai' },
  ]
}

function getAdultDailyDose(v: any): string | null {
  const reqs: any[] = v.dailyRequirement || []
  const adult = reqs.find((r: any) => {
    const ag = (r.ageGroup || '').toLowerCase()
    return ag.includes('19') || ag.includes('adult') || ag.includes('men') || ag.includes('women')
  }) || reqs[3] || reqs[0]
  if (!adult) return null
  const val = adult.male || adult.female
  if (!val) return null
  return `${val} ${adult.unit || ''}`.trim()
}

function splitFn(fn: string): { title: string; desc: string } {
  const sep = fn.includes(' — ') ? ' — ' : fn.includes(' – ') ? ' – ' : fn.includes(' - ') ? ' - ' : null
  if (sep) {
    const idx = fn.indexOf(sep)
    return { title: fn.slice(0, idx).trim(), desc: fn.slice(idx + sep.length).trim() }
  }
  return { title: fn, desc: '' }
}

function buildDeficiencySymptoms(v: any): Record<string, string[]> | null {
  const ds = v.deficiencySymptoms || {}
  const result: Record<string, string[]> = {}
  if (ds.bonesMusclsJoints?.length) result['🦴 Bones & Muscles'] = ds.bonesMusclsJoints
  if (ds.energyMoodBrain?.length)   result['⚡ Energy & Mood']   = ds.energyMoodBrain
  if (ds.skinHairNails?.length)     result['✨ Skin & Hair']      = ds.skinHairNails
  if (ds.other?.length)             result['🔍 Other Signs']      = ds.other
  return Object.keys(result).length ? result : null
}

function buildNormalRanges(ranges: any[]) {
  if (!ranges?.length) return null
  return ranges.map((r: any) => ({
    who:       r.category,
    range:     r.normal,
    deficient: r.deficient,
    excess:    r.toxic,
    unit:      r.unit,
    highlight: (r.category || '').toLowerCase().includes('pregnan'),
  }))
}

function buildFoodSources(v: any) {
  const vegetarian = (v.vegSources    || []).map((s: any) => ({ food: s.food, qty: s.quantity, amount: s.amount }))
  const nonVeg     = (v.nonVegSources || []).map((s: any) => ({ food: s.food, qty: s.quantity, amount: s.amount }))
  if (!vegetarian.length && !nonVeg.length) return null
  return { vegetarian, nonVeg, tip: v.sunlightNote || '' }
}

function buildDailyRequirement(reqs: any[]) {
  if (!reqs?.length) return null
  return reqs.map((r: any) => ({
    age:           r.ageGroup,
    male:          r.male          ? `${r.male} ${r.unit || ''}`.trim()          : '—',
    female:        r.female        ? `${r.female} ${r.unit || ''}`.trim()        : '—',
    pregnancy:     r.pregnancy     ? `${r.pregnancy} ${r.unit || ''}`.trim()     : '—',
    breastfeeding: r.breastfeeding ? `${r.breastfeeding} ${r.unit || ''}`.trim() : '—',
  }))
}

function buildForms(forms: any[]) {
  if (!forms?.length) return null
  return forms.map((f: any) => ({
    name:    f.formName,
    bestFor: f.bestFor || '',
    pros:    (f.benefits  || []).join(' · '),
    cons:    (f.drawbacks || []).join(' · '),
  }))
}

function buildHowToTake(timing: any) {
  if (!timing) return null
  const withWhat: { ic: string; t: string; d: string }[] = []
  const avoid:    { ic: string; t: string; d: string }[] = []
  if (timing.withFood)    withWhat.push({ ic: '🍽️', t: 'Khane ke saath',       d: timing.withFood })
  if (timing.withFat)     withWhat.push({ ic: '🥑', t: 'Fat ke saath lein',     d: timing.withFat })
  if (timing.withCalcium) withWhat.push({ ic: '🥛', t: 'Calcium ke baare mein', d: timing.withCalcium })
  if (timing.note)        withWhat.push({ ic: '📌', t: 'Special note',           d: timing.note })
  if (timing.avoid)       avoid.push(   { ic: '🚫', t: 'Avoid karein',           d: timing.avoid })
  return { bestTime: timing.bestTime, withWhat, avoid }
}

function buildDrugInteractions(ints: any[]) {
  if (!ints?.length) return null
  return ints.map((d: any) => ({ med: d.medicineName, gap: '2–4 hrs gap', why: d.reason }))
}

function buildTimeline(tl: any) {
  if (!tl) return null
  const items: { period: string; what: string }[] = []
  if (tl.bloodLevelTime)   items.push({ period: tl.bloodLevelTime,   what: 'Blood level normalize hona shuru' })
  if (tl.symptomsTime)     items.push({ period: tl.symptomsTime,     what: 'Symptoms mein fark mehsoos hoga' })
  if (tl.fullRecoveryTime) items.push({ period: tl.fullRecoveryTime, what: 'Full recovery, body stores replenish' })
  if (tl.repeatTestTime)   items.push({ period: 'Repeat test',       what: tl.repeatTestTime })
  if (tl.patientNote)      items.push({ period: 'Important note',    what: tl.patientNote })
  return items.length ? items : null
}

function buildCombinations(combs: any) {
  if (!combs) return null
  const toItem = (s: any) => typeof s === 'string'
    ? { t: s, d: '' }
    : { t: s.nutrient || s.name || s.t || '', d: s.reason || s.d || '' }
  const good = (combs.beneficial || []).map(toItem)
  const bad  = (combs.avoid      || []).map(toItem)
  return (good.length || bad.length) ? { good, bad } : null
}

function buildToxicity(tox: any) {
  if (!tox) return null
  const parts: string[] = []
  if (tox.upperLimit)          parts.push(`Upper Limit: ${tox.upperLimit}`)
  if (tox.sideEffects?.length) parts.push(`Side effects: ${tox.sideEffects.join(', ')}`)
  if (tox.whenSerious)         parts.push(`Kab serious: ${tox.whenSerious}`)
  return parts.join('\n') || null
}

function buildHomeo(alts: any[]) {
  if (!alts?.length) return null
  return alts.map((h: any) => ({
    n: h.medicineName,
    d: [h.patientType, h.howItHelps].filter(Boolean).join(' — '),
  }))
}

// ─── VSec component ───
function VSec({ id, title, eyebrow, children, isMobile }: {
  id: string; title: string; eyebrow?: string; children: React.ReactNode; isMobile: boolean
}) {
  return (
    <div id={'vsec-' + id} style={{ marginTop: isMobile ? 32 : 48, scrollMarginTop: 160 }}>
      {eyebrow && (
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: T.sage, fontFamily: T.mono, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 20, height: 1, background: T.sage, opacity: 0.5 }} />
          {eyebrow}
        </div>
      )}
      <h2 style={{ fontFamily: T.serif, fontSize: isMobile ? 24 : 32, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.05, color: T.ink, margin: 0 }}>{title}</h2>
      <div style={{ marginTop: 14 }}>{children}</div>
    </div>
  )
}

// ─── Table header cell style ───
function thStyle(color: string) {
  return {
    padding: '12px 14px', textAlign: 'left' as const, fontSize: 11, fontWeight: 700,
    letterSpacing: '0.08em', textTransform: 'uppercase' as const, color, fontFamily: T.mono,
  }
}

// ─── Range table ───
function RangeTable({ rows, isMobile }: { rows: any[]; isMobile: boolean }) {
  const hasDeficient = rows.some(r => r.deficient)
  const hasExcess    = rows.some(r => r.excess)
  return (
    <div style={{ overflowX: 'auto', background: T.card, border: `1px solid ${T.border}`, borderRadius: 14 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? 11 : 13 }}>
        <thead>
          <tr style={{ background: T.sageBg }}>
            <th style={thStyle(T.ink3)}>Category</th>
            <th style={thStyle(T.sage)}>✓ Normal</th>
            {hasDeficient && <th style={thStyle(T.warm)}>↓ Low</th>}
            {hasExcess    && <th style={thStyle(T.red)}>↑ High</th>}
            <th style={thStyle(T.ink3)}>Unit</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: `1px solid ${T.border}`, background: r.highlight ? '#fff5f8' : 'transparent' }}>
              <td style={{ padding: '12px 14px', fontSize: 13, fontWeight: 700, color: r.highlight ? '#a04d6c' : T.ink }}>
                {r.highlight && <span style={{ marginRight: 6 }}>🤰</span>}{r.who}
              </td>
              <td style={{ padding: '12px 14px', fontFamily: T.mono, fontWeight: 700, color: T.sage }}>{r.range}</td>
              {hasDeficient && <td style={{ padding: '12px 14px', fontFamily: T.mono, color: T.warm }}>{r.deficient || '—'}</td>}
              {hasExcess    && <td style={{ padding: '12px 14px', fontFamily: T.mono, color: T.red  }}>{r.excess    || '—'}</td>}
              <td style={{ padding: '12px 14px', fontSize: 11, fontFamily: T.mono, color: T.ink4 }}>{r.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Main component ───
export default function VitaminClient({ vitamin: v }: { vitamin: any }) {
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [openFaq, setOpenFaq]     = useState<number>(0)
  const [foodVeg, setFoodVeg]     = useState<'veg' | 'nonveg'>('veg')

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const symbol       = getSymbol(v.name)
  const facts        = buildFacts(v)
  const defSymptoms  = buildDeficiencySymptoms(v)
  const normalRanges = buildNormalRanges(v.normalRanges)
  const foodSources  = buildFoodSources(v)
  const dailyReq     = buildDailyRequirement(v.dailyRequirement)
  const suppForms    = buildForms(v.supplementForms)
  const howToTake    = buildHowToTake(v.supplementTiming)
  const drugInter    = buildDrugInteractions(v.drugInteractions)
  const timeline     = buildTimeline(v.timeline)
  const combs        = buildCombinations(v.combinations)
  const toxicity     = buildToxicity(v.toxicity)
  const homeo        = buildHomeo(v.homeopathicAlternatives)
  const myths        = (v.myths || []).map((m: any) => ({ q: m.myth,     a: m.truth  }))
  const faqs         = (v.faqs  || []).map((f: any) => ({ q: f.question, a: f.answer }))
  const catBg        = CAT_COLORS[v.category] || 'var(--sage-bg)'

  const scrollTo = (id: string) => {
    setActiveTab(id)
    document.getElementById('vsec-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="page-in" style={{ paddingTop: 66, background: T.bg, minHeight: '100vh' }}>

      {/* ── Breadcrumb ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '14px 18px 0' : '20px 40px 0', fontSize: 11, color: T.ink4, fontFamily: T.mono, letterSpacing: '0.04em' }}>
        <Link href="/"         style={{ color: T.ink4, textDecoration: 'none' }}>Home</Link> ›{' '}
        <Link href="/vitamins" style={{ color: T.ink4, textDecoration: 'none' }}>Vitamins</Link> ›{' '}
        {v.category && <><Link href={`/vitamins?cat=${v.category}`} style={{ color: T.ink4, textDecoration: 'none' }}>{v.category}s</Link> ›{' '}</>}
        <strong style={{ color: T.ink2, fontWeight: 700 }}>{v.name}</strong>
      </div>

      {/* ── Hero ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '18px 18px 24px' : '32px 40px 36px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr', gap: isMobile ? 20 : 48, alignItems: 'flex-start' }}>
        <div>
          {/* Pills */}
          <div style={{ display: 'flex', gap: 7, marginBottom: 14, flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 10px', background: T.sageBg, color: T.sage, borderRadius: 99, fontSize: 11, fontWeight: 700 }}>✓ Doctor reviewed</span>
            <span style={{ padding: '4px 10px', background: catBg, color: T.ink2, borderRadius: 99, fontSize: 11, fontWeight: 700 }}>{v.category}</span>
            <span style={{ padding: '4px 10px', background: T.bg2, color: T.ink3, borderRadius: 99, fontSize: 11, fontWeight: 600, border: `1px solid ${T.border}` }}>⏱ 8 min read</span>
          </div>

          {/* Name + Symbol box */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: isMobile ? 14 : 20, flexWrap: 'wrap' }}>
            <h1 style={{ fontFamily: T.serif, fontSize: isMobile ? 42 : 78, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.95, color: T.ink, margin: 0 }}>{v.name}</h1>
            <div style={{ padding: isMobile ? '10px 16px' : '14px 22px', background: catBg, borderRadius: 18, fontFamily: T.serif, fontSize: isMobile ? 22 : 32, fontWeight: 700, color: T.ink, letterSpacing: '-0.02em', flexShrink: 0 }}>{symbol}</div>
          </div>

          {v.hindiName && (
            <div style={{ fontFamily: T.serif, fontStyle: 'italic', color: T.sage, fontSize: isMobile ? 16 : 22, marginTop: 8, fontWeight: 500 }}>{v.hindiName}</div>
          )}

          {v.whatIsIt && (
            <p style={{ fontSize: isMobile ? 15 : 17, color: T.ink2, marginTop: isMobile ? 14 : 20, lineHeight: 1.65, maxWidth: 600 }}>{v.whatIsIt}</p>
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
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: T.sage, textTransform: 'uppercase', fontFamily: T.mono }}>Quick reference</div>
            <div style={{ marginTop: 14 }}>
              {/* Daily Requirement — primary stat */}
              <div style={{ padding: '14px 16px', background: T.sageBg, borderRadius: 12, marginBottom: 8 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: T.sage, textTransform: 'uppercase', fontFamily: T.mono }}>Daily Requirement</div>
                <div style={{ fontFamily: T.serif, fontSize: 26, fontWeight: 700, color: T.ink, letterSpacing: '-0.02em', marginTop: 4 }}>
                  {getAdultDailyDose(v) || v.quickFacts?.normalRangeQuick || '—'}
                </div>
                <div style={{ fontSize: 11, color: T.ink4, marginTop: 2 }}>Adults (19–50 yrs)</div>
              </div>
              {/* Normal range — secondary */}
              {v.quickFacts?.normalRangeQuick && (
                <div style={{ padding: '10px 14px', background: T.bg, borderRadius: 10, marginBottom: 8 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: T.ink4, textTransform: 'uppercase', fontFamily: T.mono }}>Blood Normal Range</div>
                  <div style={{ fontFamily: T.mono, fontSize: 14, fontWeight: 700, color: T.sage, marginTop: 4 }}>{v.quickFacts.normalRangeQuick}</div>
                </div>
              )}
              {v.labTestInfo?.testName && (
                <Link href={`/lab-tests/${v.labTestInfo.testSlug}`} style={{ display: 'block', padding: '12px 14px', background: T.bg, borderRadius: 10, textDecoration: 'none', marginBottom: 8 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: T.warm, textTransform: 'uppercase', fontFamily: T.mono }}>Test for this</div>
                  <div style={{ fontFamily: T.serif, fontSize: 15, fontWeight: 600, marginTop: 4, color: T.ink }}>{v.labTestInfo.testName} →</div>
                </Link>
              )}
            </div>
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16, padding: '12px 16px', background: T.sage, color: '#fff', borderRadius: 12, fontSize: 12, fontWeight: 700, textAlign: 'center', display: 'block', textDecoration: 'none' }}>💬 Doctor se baat karein</a>
          </div>
        )}
      </div>

      {/* ── Facts row (4 cards) ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '0 18px 24px' : '0 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: isMobile ? 8 : 12 }}>
          {facts.map((f, i) => (
            <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: isMobile ? 12 : 14, padding: isMobile ? 14 : 18 }}>
              <div style={{ fontSize: isMobile ? 20 : 24 }}>{f.ic}</div>
              <div style={{ fontFamily: T.serif, fontSize: isMobile ? 13 : 15, fontWeight: 600, marginTop: isMobile ? 6 : 10, letterSpacing: '-0.01em', lineHeight: 1.2, color: T.ink }}>{f.t}</div>
              <div style={{ fontSize: isMobile ? 10 : 11, color: T.ink4, marginTop: isMobile ? 2 : 4, lineHeight: 1.45 }}>{f.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main 2-column grid ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '0 18px 80px' : '0 40px 80px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.6fr 1fr', gap: isMobile ? 28 : 48, alignItems: 'flex-start' }}>

        {/* ════ LEFT COLUMN ════ */}
        <div>

          {/* Body functions */}
          {v.bodyFunctions?.length > 0 && (
            <VSec id="overview" title="Body mein kya kaam karta hai?" eyebrow="Functions" isMobile={isMobile}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10 }}>
                {v.bodyFunctions.map((fn: string, i: number) => {
                  const { title, desc } = splitFn(fn)
                  return (
                    <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 10, background: T.sageBg, color: T.sage, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 13, fontWeight: 700, fontFamily: T.mono }}>{i + 1}</div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: T.ink, lineHeight: 1.4 }}>{title}</div>
                        {desc && <div style={{ fontSize: 12, color: T.ink3, marginTop: 4, lineHeight: 1.5 }}>{desc}</div>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </VSec>
          )}

          {/* Deficiency symptoms */}
          {defSymptoms && (
            <VSec id="deficiency" title="Kami ke symptoms" eyebrow="⭐ Recognize early" isMobile={isMobile}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
                {Object.entries(defSymptoms).map(([group, items], i) => (
                  <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: isMobile ? '14px 16px' : '18px 22px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: T.warm, textTransform: 'uppercase', fontFamily: T.mono, marginBottom: 10 }}>{group}</div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {(items as string[]).map((s, j) => (
                        <li key={j} style={{ fontSize: 13, color: T.ink2, lineHeight: 1.55, paddingLeft: 18, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, top: 8, width: 6, height: 6, borderRadius: '50%', background: T.sage, opacity: 0.6 }} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </VSec>
          )}

          {/* Root causes — Kami kyun ho jaati hai? */}
          {v.causesOfDeficiency?.length > 0 && (
            <VSec id="causes" title="Kami kyun ho jaati hai?" eyebrow="Root causes" isMobile={isMobile}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {v.causesOfDeficiency.map((cause: string, i: number) => {
                  const { title, desc } = splitFn(cause)
                  return (
                    <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderLeft: `4px solid ${T.sage}`, borderRadius: 12, padding: '14px 18px' }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: T.ink, lineHeight: 1.4 }}>{title}</div>
                      {desc && <div style={{ fontSize: 12, color: T.ink3, marginTop: 4, lineHeight: 1.55 }}>{desc}</div>}
                    </div>
                  )
                })}
              </div>
            </VSec>
          )}

          {/* Normal ranges */}
          {normalRanges && (
            <VSec id="range" title="Blood test normal range" eyebrow="Test interpretation" isMobile={isMobile}>
              <RangeTable rows={normalRanges} isMobile={isMobile} />
              {v.pregnancyInfo?.applicable && v.pregnancyInfo?.note && (
                <div style={{ marginTop: 14, padding: isMobile ? '16px 18px' : '20px 22px', background: '#fff5f8', border: '1px solid #f0c0cc', borderLeft: '4px solid #d97e9b', borderRadius: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#a04d6c', textTransform: 'uppercase', fontFamily: T.mono, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span>🤰</span> Pregnancy mein
                  </div>
                  <p style={{ fontSize: isMobile ? 13 : 14, color: T.ink2, marginTop: 8, lineHeight: 1.7 }}>{v.pregnancyInfo.note}</p>
                </div>
              )}
              {v.childrenInfo && (
                <div style={{ marginTop: 12, padding: isMobile ? '16px 18px' : '20px 22px', background: '#f6f3e7', border: `1px solid ${T.border}`, borderLeft: `4px solid ${T.warm}`, borderRadius: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: T.warm, textTransform: 'uppercase', fontFamily: T.mono, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span>🧸</span> Bachhon mein
                  </div>
                  <p style={{ fontSize: isMobile ? 13 : 14, color: T.ink2, marginTop: 8, lineHeight: 1.7 }}>
                    {typeof v.childrenInfo === 'string'
                      ? v.childrenInfo
                      : v.childrenInfo?.ageWiseRequirement
                        ? `Zaroorat: ${v.childrenInfo.ageWiseRequirement}${v.childrenInfo.supplementNote ? ' | ' + v.childrenInfo.supplementNote : ''}`
                        : v.childrenInfo?.supplementNote || ''}
                  </p>
                </div>
              )}
            </VSec>
          )}

          {/* Food sources */}
          {foodSources && (
            <VSec id="food" title="Food sources — diet first" eyebrow="🥗 Natural sources" isMobile={isMobile}>
              {/* Animated veg / non-veg pill toggle */}
              <div style={{ padding: 4, background: T.card, border: `1px solid ${T.border}`, borderRadius: 99, position: 'relative', display: 'flex', marginBottom: 14, width: 'fit-content' }}>
                <div style={{
                  position: 'absolute', top: 4, bottom: 4, width: 'calc(50% - 4px)',
                  left: foodVeg === 'veg' ? 4 : '50%',
                  background: T.sage, borderRadius: 99,
                  transition: 'left .45s cubic-bezier(.2,.8,.2,1)',
                  boxShadow: '0 6px 18px rgba(63,107,77,.28)',
                }} />
                {(['veg', 'nonveg'] as const).map(k => {
                  const [ic, label] = k === 'veg' ? ['🌱', 'Vegetarian'] : ['🐟', 'Non-veg']
                  return (
                    <div key={k} onClick={() => setFoodVeg(k)} style={{
                      position: 'relative', zIndex: 1,
                      padding: isMobile ? '8px 14px' : '10px 18px',
                      fontSize: isMobile ? 12 : 13, fontWeight: 700, cursor: 'pointer',
                      color: foodVeg === k ? '#fff' : T.ink3, transition: 'color .3s',
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                      <span style={{ fontSize: isMobile ? 14 : 16 }}>{ic}</span>{label}
                    </div>
                  )
                })}
              </div>

              <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? 12 : 14 }}>
                    <thead>
                      <tr style={{ background: T.sageBg }}>
                        {['Food', 'Quantity', 'Amount'].map(h => <th key={h} style={thStyle(T.ink3)}>{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {(foodVeg === 'veg' ? foodSources.vegetarian : foodSources.nonVeg).map((f: any, i: number) => (
                        <tr key={i} style={{ borderTop: `1px solid ${T.border}` }}>
                          <td style={{ padding: '12px 16px', fontSize: 13, fontWeight: 700, color: T.ink }}>{f.food}</td>
                          <td style={{ padding: '12px 16px', fontSize: 13, color: T.ink2, fontFamily: T.mono }}>{f.qty}</td>
                          <td style={{ padding: '12px 16px', fontSize: 13, color: T.sage, fontFamily: T.mono, fontWeight: 700 }}>{f.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {foodSources.tip && (
                <div style={{ marginTop: 14, padding: '14px 18px', background: T.warmBg, borderLeft: `4px solid ${T.warm}`, borderRadius: 10, fontSize: isMobile ? 13 : 14, color: T.ink2, lineHeight: 1.6, fontStyle: 'italic', fontFamily: T.serif }}>{foodSources.tip}</div>
              )}
            </VSec>
          )}

          {/* Daily requirement */}
          {dailyReq && (
            <VSec id="dose" title="Daily requirement — age & gender wise" eyebrow="Recommended intake" isMobile={isMobile}>
              <div style={{ overflowX: 'auto', background: T.card, border: `1px solid ${T.border}`, borderRadius: 14 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? 11 : 13 }}>
                  <thead>
                    <tr style={{ background: T.bg2 }}>
                      {['Age', '👨 Male', '👩 Female', '🤰 Pregnancy', '🍼 Breastfeeding'].map(h => (
                        <th key={h} style={thStyle(T.ink3)}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dailyReq.map((r: any, i: number) => (
                      <tr key={i} style={{ borderTop: `1px solid ${T.border}` }}>
                        <td style={{ padding: '12px 16px', fontSize: 13, fontWeight: 700, color: T.ink }}>{r.age}</td>
                        <td style={{ padding: '12px 16px', fontSize: 13, color: T.sage,    fontFamily: T.mono, fontWeight: 700 }}>{r.male}</td>
                        <td style={{ padding: '12px 16px', fontSize: 13, color: T.sage,    fontFamily: T.mono, fontWeight: 700 }}>{r.female}</td>
                        <td style={{ padding: '12px 16px', fontSize: 13, color: '#a04d6c', fontFamily: T.mono, fontWeight: 700 }}>{r.pregnancy}</td>
                        <td style={{ padding: '12px 16px', fontSize: 13, color: T.warm,    fontFamily: T.mono, fontWeight: 700 }}>{r.breastfeeding}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </VSec>
          )}

          {/* Supplement forms */}
          {suppForms && (
            <VSec id="forms" title="Supplement ke forms — konsa kab" eyebrow="⭐ Choose wisely" isMobile={isMobile}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {suppForms.map((f: any, i: number) => (
                  <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: isMobile ? '16px 18px' : '20px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap', marginBottom: 10 }}>
                      <div style={{ fontFamily: T.serif, fontSize: isMobile ? 16 : 18, fontWeight: 600, letterSpacing: '-0.015em' }}>{f.name}</div>
                      {f.bestFor && <span style={{ padding: '4px 10px', background: T.sageBg, color: T.sage, borderRadius: 99, fontSize: 10, fontWeight: 700, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{f.bestFor}</span>}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10 }}>
                      {f.pros && (
                        <div style={{ padding: '10px 12px', background: T.sageBg, borderRadius: 8, fontSize: isMobile ? 12 : 13, color: T.ink2, lineHeight: 1.5 }}>
                          <span style={{ color: T.sage, fontWeight: 700 }}>✓ Benefits: </span>{f.pros}
                        </div>
                      )}
                      {f.cons && (
                        <div style={{ padding: '10px 12px', background: 'rgba(162,56,56,0.06)', borderRadius: 8, fontSize: isMobile ? 12 : 13, color: T.ink2, lineHeight: 1.5 }}>
                          <span style={{ color: T.red, fontWeight: 700 }}>✕ Drawbacks: </span>{f.cons}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </VSec>
          )}

          {/* How to take */}
          {howToTake && (
            <VSec id="timing" title="Kaise aur kab lein?" eyebrow="⭐ Maximum absorption" isMobile={isMobile}>
              {howToTake.bestTime && (
                <div style={{ padding: isMobile ? '18px 20px' : '24px 28px', background: 'linear-gradient(135deg,var(--sage-bg),var(--warm-bg))', border: `1px solid ${T.border}`, borderRadius: 16, marginBottom: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: T.sage, textTransform: 'uppercase', fontFamily: T.mono }}>Best time</div>
                  <p style={{ fontSize: isMobile ? 14 : 16, color: T.ink, lineHeight: 1.6, marginTop: 8, fontFamily: T.serif, fontWeight: 500 }}>{howToTake.bestTime}</p>
                </div>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
                {howToTake.withWhat.length > 0 && (
                  <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: 'hidden' }}>
                    <div style={{ padding: '12px 18px', background: T.sageBg, fontSize: 12, fontWeight: 700, color: T.sage, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: T.mono }}>✓ Saath lein</div>
                    <div style={{ padding: '10px 14px' }}>
                      {howToTake.withWhat.map((it, i) => (
                        <div key={i} style={{ padding: '10px 0', borderBottom: i < howToTake.withWhat.length - 1 ? `1px dashed ${T.border}` : 'none' }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: T.ink }}>{it.ic} {it.t}</div>
                          <div style={{ fontSize: 12, color: T.ink4, marginTop: 2, lineHeight: 1.5 }}>{it.d}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {howToTake.avoid.length > 0 && (
                  <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: 'hidden' }}>
                    <div style={{ padding: '12px 18px', background: 'rgba(162,56,56,0.07)', fontSize: 12, fontWeight: 700, color: T.red, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: T.mono }}>✕ Avoid karein</div>
                    <div style={{ padding: '10px 14px' }}>
                      {howToTake.avoid.map((it, i) => (
                        <div key={i} style={{ padding: '10px 0', borderBottom: i < howToTake.avoid.length - 1 ? `1px dashed ${T.border}` : 'none' }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: T.ink }}>{it.ic} {it.t}</div>
                          <div style={{ fontSize: 12, color: T.ink4, marginTop: 2, lineHeight: 1.5 }}>{it.d}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </VSec>
          )}

          {/* Drug interactions */}
          {drugInter && (
            <VSec id="interactions" title="Drug interactions" eyebrow="⚠️ Important" isMobile={isMobile}>
              <div style={{ padding: '12px 16px', background: 'rgba(162,56,56,0.06)', border: '1px solid rgba(162,56,56,0.18)', borderLeft: `4px solid ${T.red}`, borderRadius: 10, marginBottom: 14, fontSize: isMobile ? 12 : 13, color: T.ink2, lineHeight: 1.6 }}>
                ⚠️ Niche di gayi gap timings general guidance hain. Aapki current dawayion ke saath specific interactions doctor confirm karenge.
              </div>
              <div style={{ overflowX: 'auto', background: T.card, border: `1px solid ${T.border}`, borderRadius: 14 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? 12 : 13 }}>
                  <thead>
                    <tr style={{ background: 'rgba(162,56,56,0.07)' }}>
                      {['Medicine', 'Gap', 'Reason'].map(h => (
                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.red, fontFamily: T.mono }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {drugInter.map((r: any, i: number) => (
                      <tr key={i} style={{ borderTop: `1px solid ${T.border}` }}>
                        <td style={{ padding: '12px 16px', fontSize: 13, fontWeight: 700, color: T.ink }}>{r.med}</td>
                        <td style={{ padding: '12px 16px', fontSize: 13, color: T.red, fontFamily: T.mono, fontWeight: 700 }}>{r.gap}</td>
                        <td style={{ padding: '12px 16px', fontSize: 13, color: T.ink3, lineHeight: 1.55 }}>{r.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </VSec>
          )}

          {/* Toxicity */}
          {toxicity && (
            <VSec id="toxicity" title="Zyada lene se kya hota hai?" eyebrow="⚠️ Excess signs" isMobile={isMobile}>
              <div style={{ padding: isMobile ? '16px 18px' : '22px 26px', background: 'rgba(162,56,56,0.05)', border: '1px solid rgba(162,56,56,0.2)', borderRadius: 14 }}>
                <p style={{ fontSize: isMobile ? 13 : 14, color: T.ink2, lineHeight: 1.75, whiteSpace: 'pre-line' }}>{toxicity}</p>
              </div>
            </VSec>
          )}

          {/* Timeline */}
          {timeline && (
            <VSec id="timeline" title="Improvement timeline" eyebrow="⏱ When to expect" isMobile={isMobile}>
              <div style={{ position: 'relative', paddingLeft: isMobile ? 20 : 0 }}>
                <div style={{ position: 'absolute', left: isMobile ? 8 : 24, top: 14, bottom: 14, width: 2, background: T.border }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {timeline.map((m: any, i: number) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? 14 : 24 }}>
                      <div style={{ width: isMobile ? 16 : 50, flexShrink: 0, position: 'relative' }}>
                        {isMobile
                          ? <div style={{ width: 16, height: 16, borderRadius: '50%', background: T.sage, marginLeft: -4, marginTop: 6, position: 'relative', zIndex: 1 }} />
                          : <div style={{ width: 50, height: 50, borderRadius: '50%', background: T.sage, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: T.mono, fontSize: 12, fontWeight: 700, position: 'relative', zIndex: 1, boxShadow: '0 6px 18px rgba(63,107,77,.28)' }}>{String(i + 1).padStart(2, '0')}</div>
                        }
                      </div>
                      <div style={{ flex: 1, background: T.card, border: `1px solid ${T.border}`, borderRadius: isMobile ? 14 : 18, padding: isMobile ? '14px 16px' : '18px 22px' }}>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: T.warm, textTransform: 'uppercase', fontFamily: T.mono }}>{m.period}</div>
                        <div style={{ fontSize: isMobile ? 13 : 14, color: T.ink2, lineHeight: 1.6, marginTop: 6 }}>{m.what}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </VSec>
          )}

          {/* Good vs bad combinations */}
          {combs && (
            <VSec id="combinations" title="Kya saath le, kya nahi?" eyebrow="Smart pairing" isMobile={isMobile}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
                <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: 'hidden' }}>
                  <div style={{ padding: '12px 18px', background: T.sageBg, fontSize: 12, fontWeight: 700, color: T.sage, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: T.mono }}>✓ Good combinations</div>
                  <div style={{ padding: '10px 14px' }}>
                    {combs.good.map((it: any, i: number) => (
                      <div key={i} style={{ padding: '10px 0', borderBottom: i < combs.good.length - 1 ? `1px dashed ${T.border}` : 'none' }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: T.ink }}>{it.t}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: 'hidden' }}>
                  <div style={{ padding: '12px 18px', background: 'rgba(162,56,56,0.07)', fontSize: 12, fontWeight: 700, color: T.red, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: T.mono }}>✕ Avoid combinations</div>
                  <div style={{ padding: '10px 14px' }}>
                    {combs.bad.map((it: any, i: number) => (
                      <div key={i} style={{ padding: '10px 0', borderBottom: i < combs.bad.length - 1 ? `1px dashed ${T.border}` : 'none' }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: T.ink }}>{it.t}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {v.combinations?.timingGuide && (
                <div style={{ marginTop: 12, padding: '14px 18px', background: T.warmBg, borderLeft: `4px solid ${T.warm}`, borderRadius: 10, fontSize: isMobile ? 13 : 14, color: T.ink2, lineHeight: 1.6 }}>
                  📅 {v.combinations.timingGuide}
                </div>
              )}
            </VSec>
          )}

          {/* Homeopathic alternatives */}
          {homeo && (
            <VSec id="homeo" title="Homeopathic alternatives" eyebrow="Classical remedies" isMobile={isMobile}>
              <div style={{ padding: '12px 16px', background: T.warmBg, border: '1px solid rgba(192,132,56,.25)', borderRadius: 10, marginBottom: 14, fontSize: isMobile ? 12 : 13, color: T.ink2, lineHeight: 1.6 }}>
                ⚕️ Ye remedies severe deficiency mein supplement ki jagah nahi — supplement ke saath complement role mein. Doctor ki guidance zaroori hai.
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10 }}>
                {homeo.map((s: any, i: number) => (
                  <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, padding: '16px 18px' }}>
                    <div style={{ fontFamily: T.serif, fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', color: T.ink }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: T.ink3, marginTop: 8, lineHeight: 1.6 }}>{s.d}</div>
                  </div>
                ))}
              </div>
            </VSec>
          )}

          {/* Myths — MYTH / FACT badges */}
          {myths.length > 0 && (
            <VSec id="myths" title="Myths & galat fehmiyan" eyebrow="🚫 Bust the myth" isMobile={isMobile}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {myths.map((m: any, i: number) => (
                  <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: isMobile ? '14px 16px' : '18px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ padding: '2px 8px', background: 'rgba(162,56,56,0.1)', color: T.red, borderRadius: 99, fontSize: 9, fontWeight: 700, letterSpacing: '0.06em', flexShrink: 0 }}>MYTH</div>
                      <div style={{ fontFamily: T.serif, fontSize: isMobile ? 14 : 16, fontWeight: 600, letterSpacing: '-0.01em', color: T.ink }}>{m.q}</div>
                    </div>
                    <div style={{ marginTop: 10, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ padding: '2px 8px', background: T.sageBg, color: T.sage, borderRadius: 99, fontSize: 9, fontWeight: 700, letterSpacing: '0.06em', flexShrink: 0 }}>FACT</div>
                      <div style={{ fontSize: isMobile ? 13 : 14, color: T.ink2, lineHeight: 1.65 }}>{m.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </VSec>
          )}

          {/* Linked diseases */}
          {v.linkedDiseases?.length > 0 && (
            <VSec id="linked" title="Related conditions" eyebrow="Linked diseases" isMobile={isMobile}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {v.linkedDiseases.map((d: any, i: number) => (
                  d.isAvailable
                    ? <Link key={i} href={`/diseases/${d.diseaseSlug}`} style={{ padding: '8px 14px', background: T.card, border: `1px solid ${T.border}`, borderRadius: 99, fontSize: 12, fontWeight: 600, color: T.ink2, textDecoration: 'none' }}>🩺 {d.diseaseName}</Link>
                    : <span   key={i} style={{ padding: '8px 14px', background: T.bg2,  border: `1px solid ${T.border}`, borderRadius: 99, fontSize: 12, color: T.ink4 }}>🩺 {d.diseaseName}</span>
                ))}
              </div>
            </VSec>
          )}

          {/* FAQs — numbered circles + animated expand */}
          {faqs.length > 0 && (
            <VSec id="faq" title="Frequently asked" eyebrow={`${faqs.length} sawaal`} isMobile={isMobile}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {faqs.map((f: any, i: number) => {
                  const on = openFaq === i
                  return (
                    <div key={i} onClick={() => setOpenFaq(on ? -1 : i)} style={{
                      background: T.card, border: `1px solid ${on ? T.sage : T.border}`, borderRadius: 14,
                      cursor: 'pointer', overflow: 'hidden',
                      boxShadow: on ? '0 8px 24px rgba(63,107,77,.10)' : 'none',
                      transition: 'all .35s cubic-bezier(.2,.8,.2,1)',
                    }}>
                      <div style={{ padding: isMobile ? '14px 16px' : '18px 22px', display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 14 }}>
                        <div style={{ width: isMobile ? 24 : 30, height: isMobile ? 24 : 30, borderRadius: '50%', background: on ? T.sage : T.bg2, color: on ? '#fff' : T.ink3, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isMobile ? 9 : 11, fontWeight: 700, fontFamily: T.mono, flexShrink: 0, transition: 'background .3s' }}>{String(i + 1).padStart(2, '0')}</div>
                        <div style={{ flex: 1, fontFamily: T.serif, fontSize: isMobile ? 14 : 16, fontWeight: 600, letterSpacing: '-0.01em' }}>{f.q}</div>
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
            </VSec>
          )}

          {/* Disclaimer */}
          <div style={{ marginTop: 36, padding: '16px 18px', background: T.warmBg, border: '1px solid rgba(192,132,56,.25)', borderRadius: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: T.warm, textTransform: 'uppercase', fontFamily: T.mono }}>Disclaimer</div>
            <div style={{ fontSize: 13, color: T.ink2, marginTop: 8, lineHeight: 1.7, fontStyle: 'italic', fontFamily: T.serif }}>
              "Ye jaankari educational purpose ke liye hai. Supplements aapke doctor ki advice ke saath hi lein. Self-prescribed high-dose supplements harmful ho sakte hain."
              <div style={{ fontSize: 11, color: T.ink4, marginTop: 6, fontFamily: T.mono, letterSpacing: '0.04em', fontStyle: 'normal' }}>— Dr. Shadab Khan (MD Homoeopath)</div>
            </div>
          </div>

        </div>

        {/* ════ RIGHT SIDEBAR ════ */}
        <div style={{ position: isMobile ? 'static' : 'sticky', top: 90, display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Mobile: daily requirement card */}
          {isMobile && (
            <div style={{ padding: 18, background: T.card, border: `1px solid ${T.border}`, borderRadius: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: T.sage, textTransform: 'uppercase', fontFamily: T.mono }}>Daily Requirement</div>
              <div style={{ fontFamily: T.serif, fontSize: 32, fontWeight: 700, color: T.sage, letterSpacing: '-0.03em', marginTop: 6 }}>{getAdultDailyDose(v) || v.quickFacts?.normalRangeQuick || '—'}</div>
              <div style={{ fontSize: 11, color: T.ink4 }}>Adults (19–50 yrs)</div>
            </div>
          )}

          {/* Personal plan CTA — sage gradient */}
          <div style={{ padding: isMobile ? 22 : 24, background: 'linear-gradient(135deg,var(--sage) 0%,var(--sage-dk) 100%)', borderRadius: 18, color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: '0 16px 40px rgba(63,107,77,.22)' }}>
            <div style={{ position: 'absolute', right: -30, top: -30, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.85, fontFamily: T.mono }}>Personal plan</div>
              <div style={{ fontFamily: T.serif, fontSize: isMobile ? 20 : 22, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 8, lineHeight: 1.15 }}>Aapka case unique hai.</div>
              <div style={{ fontSize: 12, opacity: 0.88, marginTop: 10, lineHeight: 1.55 }}>{v.name} ki dose aur form aapki age, condition, current medicines par depend karte hain. Dr. Shadab se WhatsApp consult karein.</div>
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ marginTop: 14, padding: '10px 16px', background: '#fff', color: 'var(--sage-dk)', borderRadius: 99, fontSize: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>💬 Start consult</a>
            </div>
          </div>

          {/* Get tested */}
          {v.labTestInfo?.testName && (
            <div style={{ padding: 18, background: T.card, border: `1px solid ${T.border}`, borderRadius: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: T.warm, textTransform: 'uppercase', fontFamily: T.mono }}>Get tested</div>
              <div style={{ fontFamily: T.serif, fontSize: 15, fontWeight: 600, marginTop: 8, letterSpacing: '-0.01em', color: T.ink }}>{v.labTestInfo.testName}</div>
              <div style={{ fontSize: 12, color: T.ink4, marginTop: 4, lineHeight: 1.5 }}>Blood level confirm karne ke liye test karwayein.</div>
              <div style={{ marginTop: 10 }}>
                <Link href={`/lab-tests/${v.labTestInfo.testSlug}`} style={{ padding: '8px 16px', background: T.sage, color: '#fff', borderRadius: 99, fontSize: 12, fontWeight: 700, display: 'inline-block', textDecoration: 'none' }}>Test details →</Link>
              </div>
            </div>
          )}

          {/* Related vitamins */}
          {v.relatedVitamins?.length > 0 && (
            <div style={{ padding: 18, background: T.card, border: `1px solid ${T.border}`, borderRadius: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: T.warm, textTransform: 'uppercase', fontFamily: T.mono }}>Related vitamins</div>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {v.relatedVitamins.map((r: any, i: number) => (
                  <Link key={i} href={`/vitamins/${r.vitaminSlug}`} style={{ padding: '10px 12px', background: T.bg, borderRadius: 8, fontSize: 13, fontWeight: 600, color: T.ink2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}>
                    <span>💊 {r.vitaminName}</span>
                    <span style={{ color: T.ink4 }}>›</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          <div style={{ padding: 14, background: T.warmBg, border: '1px solid rgba(192,132,56,.2)', borderRadius: 12, fontSize: 11, color: T.ink3, lineHeight: 1.55 }}>
            <strong style={{ color: T.ink }}>References:</strong> NIH Office of Dietary Supplements · ICMR Recommended Dietary Allowances · Boericke, Allen · Dr. Shadab's 12+ yrs clinical practice.
          </div>
        </div>

      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
