'use client'

import Link from 'next/link'
import { useState } from 'react'
import { WA_BASE } from '@/lib/constants'

const serif = 'var(--font-display,Georgia,serif)'

function LSec({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={`sec-${id}`} style={{ marginTop: 48, scrollMarginTop: 160 }}>
      {eyebrow && (
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--sage-dk)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 14, height: 1, background: 'var(--sage-dk)', opacity: 0.6 }} />
          {eyebrow}
        </div>
      )}
      <h2 style={{ fontFamily: serif, fontSize: 'clamp(22px,3vw,32px)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.05, color: 'var(--ink)' }}>{title}</h2>
      <div style={{ marginTop: 16 }}>{children}</div>
    </div>
  )
}

function FaqItem({ q, a, index, open, toggle }: { q: string; a: string; index: number; open: boolean; toggle: () => void }) {
  return (
    <div onClick={toggle} style={{ background: 'var(--card)', border: `1px solid ${open ? 'var(--sage)' : 'var(--border)'}`, borderRadius: 14, cursor: 'pointer', overflow: 'hidden', boxShadow: open ? '0 8px 24px rgba(63,107,77,.1)' : 'none', transition: 'all .35s cubic-bezier(.2,.8,.2,1)' }}>
      <div style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: open ? 'var(--sage)' : 'var(--bg2)', color: open ? '#fff' : 'var(--ink3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{String(index + 1).padStart(2, '0')}</div>
        <div style={{ flex: 1, fontFamily: serif, fontSize: 'clamp(14px,1.8vw,16px)', fontWeight: 600, letterSpacing: '-0.01em' }}>{q}</div>
        <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: open ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .3s', fontSize: 14, flexShrink: 0 }}>+</div>
      </div>
      <div style={{ maxHeight: open ? 600 : 0, overflow: 'hidden', transition: 'max-height .5s cubic-bezier(.2,.8,.2,1)' }}>
        <div style={{ padding: '4px 22px 22px 66px', fontSize: 'clamp(13px,1.5vw,14px)', color: 'var(--ink2)', lineHeight: 1.7, borderTop: '1px dashed var(--border)' }}>
          <p style={{ marginTop: 14 }}>{a}</p>
        </div>
      </div>
    </div>
  )
}

const TABS = [
  { k: 'overview', l: 'Overview' },
  { k: 'range',    l: 'Range' },
  { k: 'results',  l: 'High/Low' },
  { k: 'prep',     l: 'Prep' },
  { k: 'myths',    l: 'Myths' },
  { k: 'faq',      l: 'FAQ' },
]

export default function LabTestClient({ test: t }: { test: any }) {
  const [openFaq, setOpenFaq] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  const catIc = t.category === 'Blood' ? '🩸' : t.category === 'Hormone' ? '🔬' : t.category === 'Urine' ? '🧪' : t.category === 'Stool' ? '🧫' : t.category === 'Imaging' ? '📡' : '🔬'
  const catTone = t.category === 'Blood' ? '#f5d7d7' : t.category === 'Hormone' ? '#dde6cd' : t.category === 'Urine' ? '#cce0e0' : '#e8d2c4'

  const scrollTo = (id: string) => {
    setActiveTab(id)
    document.getElementById(`sec-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Breadcrumb */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '20px clamp(16px,4vw,32px) 0', fontSize: 11, color: 'var(--ink4)', letterSpacing: '0.04em' }}>
        <Link href="/" style={{ color: 'var(--ink4)', textDecoration: 'none' }}>Home</Link> ›{' '}
        <Link href="/lab-tests" style={{ color: 'var(--ink4)', textDecoration: 'none' }}>Lab Tests</Link> ›{' '}
        {t.category && <><Link href={`/lab-tests?cat=${t.category}`} style={{ color: 'var(--ink4)', textDecoration: 'none' }}>{t.category}</Link> › </>}
        <strong style={{ color: 'var(--ink2)', fontWeight: 700 }}>{t.name}</strong>
      </div>

      {/* Hero — two column */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '32px clamp(16px,4vw,32px) 28px', display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 48, alignItems: 'flex-start' }} className="grid-2">
        <div>
          <div style={{ display: 'flex', gap: 7, marginBottom: 16, flexWrap: 'wrap' as const }}>
            <span style={{ padding: '4px 10px', background: 'var(--sage-bg)', color: 'var(--sage-dk)', borderRadius: 99, fontSize: 10, fontWeight: 700, border: '1px solid rgba(63,107,77,.2)' }}>✓ Doctor reviewed</span>
            <span style={{ padding: '4px 10px', background: catTone, borderRadius: 99, fontSize: 10, fontWeight: 700, color: 'var(--ink2)' }}>{catIc} {t.category}</span>
          </div>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(40px,7vw,76px)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.95, color: 'var(--ink)' }}>{t.name}</h1>
          {t.fullForm && <div style={{ fontFamily: serif, fontStyle: 'italic', color: 'var(--sage)', fontSize: 'clamp(15px,2vw,21px)', marginTop: 10, fontWeight: 500 }}>{t.fullForm}{t.hindiName ? ` · ${t.hindiName}` : ''}</div>}
          {t.heroText && <p style={{ fontSize: 'clamp(14px,1.8vw,17px)', color: 'var(--ink2)', marginTop: 20, lineHeight: 1.65, maxWidth: 580, fontWeight: 300 }}>{t.heroText}</p>}

          {/* Section nav pills */}
          <div style={{ marginTop: 28, display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
            {TABS.map(({ k, l }) => (
              <button key={k} onClick={() => scrollTo(k)} style={{
                padding: '8px 14px', borderRadius: 99, fontSize: 11, fontWeight: 700, cursor: 'pointer',
                background: activeTab === k ? 'var(--ink)' : 'var(--card)', color: activeTab === k ? '#fff' : 'var(--ink2)',
                border: `1px solid ${activeTab === k ? 'var(--ink)' : 'var(--border)'}`,
                textTransform: 'uppercase' as const, letterSpacing: '0.04em',
              }}>{l}</button>
            ))}
          </div>
        </div>

        {/* Sidebar card — test details quick info */}
        <div style={{ padding: 24, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, boxShadow: '0 12px 30px rgba(38,74,48,.06)' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--sage)', textTransform: 'uppercase' as const }}>Test Details</div>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              ['🩸', 'Sample', t.sampleInfo?.sampleType || 'Blood'],
              ['🍽', 'Fasting', t.preparation?.fastingRequired ? `${t.preparation?.fastingHours || 8}–10 hrs` : 'Not needed'],
              ['⏱', 'Report', t.sampleInfo?.reportTime || '24 hrs'],
              ['💉', 'Amount', t.sampleInfo?.sampleAmount || '3–5 mL'],
            ].map(([ic, label, val]) => (
              <div key={label as string} style={{ padding: '12px 14px', background: 'var(--bg)', borderRadius: 10 }}>
                <div style={{ fontSize: 20 }}>{ic}</div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--ink4)', textTransform: 'uppercase' as const, marginTop: 6 }}>{label}</div>
                <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 600, marginTop: 3 }}>{val}</div>
              </div>
            ))}
          </div>
          <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 16px', background: 'var(--sage)', color: '#fff', borderRadius: 12, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>💬 Report doctor ko dikhayein</a>
        </div>
      </div>

      {/* Main content + sticky sidebar — two column */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 clamp(16px,4vw,32px) 80px', display: 'grid', gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr)', gap: 48, alignItems: 'flex-start' }} className="grid-2">

        {/* ─── LEFT: content ─── */}
        <div>

          {/* OVERVIEW — When & why */}
          {t.whenToTest?.length > 0 && (
            <LSec id="overview" eyebrow="Overview" title="Ye test kab aur kyun karwayein?">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 10 }}>
                {t.whenToTest.map((item: string, i: number) => (
                  <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--sage-bg)', color: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, fontWeight: 700 }}>{i + 1}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.55 }}>{item}</div>
                  </div>
                ))}
              </div>
              {t.whatItDetects && (
                <>
                  <h3 style={{ fontFamily: serif, fontSize: 'clamp(18px,2.5vw,22px)', fontWeight: 600, marginTop: 28, letterSpacing: '-0.02em' }}>Is test se kya pata chalta hai?</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, marginTop: 10 }}>{t.whatItDetects}</p>
                </>
              )}
            </LSec>
          )}

          {/* NORMAL RANGE */}
          {t.normalRanges?.length > 0 && (
            <LSec id="range" eyebrow="⭐ Most important" title="Normal range — category wise">
              <div style={{ overflowX: 'auto', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'clamp(11px,1.5vw,13px)' }}>
                  <thead>
                    <tr style={{ background: 'var(--sage-bg)' }}>
                      {['Category', 'Normal Range', 'Unit', 'High → meaning', 'Low → meaning'].map(h => (
                        <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: 'var(--ink3)', whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.normalRanges.map((r: any, i: number) => (
                      <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                        <td style={{ padding: '11px 14px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.4 }}>{r.parameter}</td>
                        <td style={{ padding: '11px 14px', fontFamily: serif, fontSize: 14, fontWeight: 600, color: 'var(--sage-dk)', whiteSpace: 'nowrap' }}>{r.normalRange}</td>
                        <td style={{ padding: '11px 14px', color: 'var(--ink3)', whiteSpace: 'nowrap' }}>{r.unit}</td>
                        <td style={{ padding: '11px 14px', color: '#a23838', fontSize: 12 }}>{r.highBrief}</td>
                        <td style={{ padding: '11px 14px', color: 'var(--warm)', fontSize: 12 }}>{r.lowBrief}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pregnancy section */}
              {t.pregnancyInfo?.applicable && (
                <div style={{ marginTop: 16, padding: '18px 20px', background: '#fff5f8', border: '1px solid #e8c4d4', borderLeft: '4px solid #d97e9b', borderRadius: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#a04d6c', textTransform: 'uppercase' as const, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 18 }}>🤰</span> Pregnancy mein
                  </div>
                  {t.pregnancyInfo.normalRange && <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.65, marginBottom: 6 }}><strong>Normal range:</strong> {t.pregnancyInfo.normalRange}</p>}
                  {t.pregnancyInfo.riskNote && <p style={{ fontSize: 13, color: '#7a3055', lineHeight: 1.65, marginBottom: 6 }}>{t.pregnancyInfo.riskNote}</p>}
                  {t.pregnancyInfo.whenDoctor && <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.6, fontStyle: 'italic' }}>Doctor ko kab dikhaye: {t.pregnancyInfo.whenDoctor}</p>}
                </div>
              )}
            </LSec>
          )}

          {/* HIGH / LOW */}
          {(t.highMeans?.length > 0 || t.lowMeans?.length > 0) && (
            <LSec id="results" eyebrow="High / Low explained" title="Result ka matlab?">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 14 }}>
                {t.highMeans?.length > 0 && (
                  <div style={{ background: 'rgba(162,56,56,0.07)', border: '1px solid rgba(162,56,56,0.2)', borderRadius: 14, padding: '18px 20px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#a23838', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 16 }}>↑</span> Value HIGH hai to?
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {t.highMeans.map((item: string, i: number) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--ink2)', lineHeight: 1.55 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a23838', marginTop: 6, flexShrink: 0 }} />
                          {item}
                        </div>
                      ))}
                    </div>
                    {t.highReassurance && <p style={{ marginTop: 12, fontSize: 12, color: '#a23838', fontStyle: 'italic', lineHeight: 1.55 }}>{t.highReassurance}</p>}
                  </div>
                )}
                {t.lowMeans?.length > 0 && (
                  <div style={{ background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: 14, padding: '18px 20px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--warm)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 16 }}>↓</span> Value LOW hai to?
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {t.lowMeans.map((item: string, i: number) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--ink2)', lineHeight: 1.55 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--warm)', marginTop: 6, flexShrink: 0 }} />
                          {item}
                        </div>
                      ))}
                    </div>
                    {t.lowConcern && <p style={{ marginTop: 12, fontSize: 12, color: 'var(--warm)', fontStyle: 'italic', lineHeight: 1.55 }}>{t.lowConcern}</p>}
                  </div>
                )}
              </div>

              {/* Danger signs */}
              {t.redFlags?.length > 0 && (
                <div style={{ marginTop: 16, padding: '16px 18px', background: 'rgba(162,56,56,0.06)', border: '1px solid rgba(162,56,56,0.18)', borderRadius: 12, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 22, flexShrink: 0 }}>⚠️</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#a23838', textTransform: 'uppercase' as const, marginBottom: 8 }}>Doctor ko turant dikhayein — emergency signs</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {t.redFlags.map((flag: string, i: number) => (
                        <div key={i} style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: '#a23838', flexShrink: 0 }}>→</span> {flag}
                        </div>
                      ))}
                    </div>
                    {t.emergencyLevel && <p style={{ marginTop: 10, fontSize: 12, color: '#a23838', fontStyle: 'italic' }}>{t.emergencyLevel}</p>}
                  </div>
                </div>
              )}
            </LSec>
          )}

          {/* PREPARATION */}
          {t.preparation && (
            <LSec id="prep" eyebrow="⭐ Before you go" title="Test ki taiyari — best time & tips">
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 28px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 20 }}>
                  {[
                    ['🍽', 'Fasting', t.preparation.fastingRequired ? `${t.preparation.fastingHours || 8}–10 ghante fasting required` : 'Fasting required nahi'],
                    ['⏰', 'Best Time', t.preparation.bestTime],
                    ['✅', 'Kya Khayein', t.preparation.whatToEat],
                    ['🚫', 'Kya Avoid Karein', t.preparation.whatToAvoid],
                    ['💊', 'Medicines', t.preparation.medicineNote],
                  ].filter(([, , val]) => val).map(([ic, label, val]) => (
                    <div key={label as string} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{ fontSize: 22, flexShrink: 0 }}>{ic}</div>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--sage)', textTransform: 'uppercase' as const }}>{label}</div>
                        <div style={{ fontSize: 13, color: 'var(--ink2)', marginTop: 5, lineHeight: 1.55 }}>{val}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {t.preparation.accuracyNote && (
                  <div style={{ marginTop: 18, padding: '12px 16px', background: 'var(--bg2)', borderRadius: 10, fontSize: 13, color: 'var(--ink2)', lineHeight: 1.6, fontStyle: 'italic', fontFamily: serif }}>
                    💡 {t.preparation.accuracyNote}
                  </div>
                )}
              </div>
            </LSec>
          )}

          {/* MYTHS */}
          {t.myths?.length > 0 && (
            <LSec id="myths" eyebrow="🚫 Bust the myth" title="Common myths & sach kya hai?">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {t.myths.map((m: any, i: number) => (
                  <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <span style={{ padding: '2px 8px', background: 'rgba(162,56,56,0.1)', color: '#a23838', borderRadius: 99, fontSize: 9, fontWeight: 700, letterSpacing: '0.06em', flexShrink: 0 }}>MYTH</span>
                      <div style={{ fontFamily: serif, fontSize: 'clamp(14px,1.8vw,16px)', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{m.myth}</div>
                    </div>
                    <div style={{ marginTop: 10, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <span style={{ padding: '2px 8px', background: 'var(--sage-bg)', color: 'var(--sage)', borderRadius: 99, fontSize: 9, fontWeight: 700, letterSpacing: '0.06em', flexShrink: 0 }}>FACT</span>
                      <div style={{ fontSize: 'clamp(13px,1.5vw,14px)', color: 'var(--ink2)', lineHeight: 1.65 }}>{m.truth}</div>
                    </div>
                  </div>
                ))}
              </div>
            </LSec>
          )}

          {/* COMPARISON */}
          {t.comparisons?.length > 0 && (
            <LSec id="vs" eyebrow="Comparison" title="Dusre tests se kya fark hai?">
              {t.comparisons.map((comp: any, ci: number) => (
                <div key={ci} style={{ marginBottom: 24, overflowX: 'auto', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr style={{ background: 'var(--bg2)' }}>
                        <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--ink3)' }}>Parameter</th>
                        <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--ink3)' }}>{t.name}</th>
                        <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--ink3)' }}>{comp.comparedTest}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comp.differencePoints?.map((point: string, i: number) => {
                        const parts = point.split('|')
                        return (
                          <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                            <td style={{ padding: '11px 16px', fontWeight: 700, color: 'var(--ink)' }}>{parts[0]?.trim()}</td>
                            <td style={{ padding: '11px 16px', color: 'var(--ink2)' }}>{parts[1]?.trim()}</td>
                            <td style={{ padding: '11px 16px', color: 'var(--ink2)' }}>{parts[2]?.trim()}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  {comp.comparedTestSlug && (
                    <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border)' }}>
                      <Link href={`/lab-tests/${comp.comparedTestSlug}`} style={{ fontSize: 13, color: 'var(--sage)', fontWeight: 700, textDecoration: 'none' }}>View {comp.comparedTest} guide →</Link>
                    </div>
                  )}
                </div>
              ))}
            </LSec>
          )}

          {/* REPEAT INFO */}
          {t.repeatInfo && (
            <LSec id="repeat" eyebrow="Follow-up" title="Repeat kab karwayein?">
              <div style={{ padding: '20px 24px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14 }}>
                <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7 }}>{t.repeatInfo}</p>
              </div>
            </LSec>
          )}

          {/* LINKED DISEASES */}
          {t.linkedDiseases?.length > 0 && (
            <LSec id="linked" eyebrow="Related conditions" title="Yeh test kin bimariyon mein hota hai?">
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
                {t.linkedDiseases.map((d: any) => (
                  d.isAvailable
                    ? <Link key={d.diseaseName} href={`/diseases/${d.diseaseSlug}`} style={{ padding: '8px 14px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 99, fontSize: 12, fontWeight: 600, color: 'var(--ink2)', textDecoration: 'none' }}>🩺 {d.diseaseName}</Link>
                    : <span key={d.diseaseName} style={{ padding: '8px 14px', background: 'var(--bg2)', border: '1px dashed var(--border)', borderRadius: 99, fontSize: 12, color: 'var(--ink4)' }}>🩺 {d.diseaseName} <span style={{ fontSize: 10, color: 'var(--sage-dk)' }}>Soon</span></span>
                ))}
              </div>
              {t.relatedTests?.length > 0 && (
                <>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--warm)', textTransform: 'uppercase' as const, marginTop: 24, marginBottom: 10 }}>Related tests</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
                    {t.relatedTests.map((rt: any) => (
                      rt.isAvailable
                        ? <Link key={rt.testName} href={`/lab-tests/${rt.testSlug}`} style={{ padding: '8px 14px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 99, fontSize: 12, fontWeight: 600, color: 'var(--ink2)', textDecoration: 'none' }}>🔬 {rt.testName}</Link>
                        : <span key={rt.testName} style={{ padding: '8px 14px', background: 'var(--bg2)', border: '1px dashed var(--border)', borderRadius: 99, fontSize: 12, color: 'var(--ink4)' }}>🔬 {rt.testName} <span style={{ fontSize: 10, color: 'var(--sage-dk)' }}>Soon</span></span>
                    ))}
                  </div>
                </>
              )}
            </LSec>
          )}

          {/* HOMEOPATHY ANGLE */}
          {t.homeopathyAngle && (
            <LSec id="homeo" eyebrow="Treatment angle" title="Homeopathy mein kya?">
              <div style={{ padding: '20px 24px', background: 'linear-gradient(135deg,var(--sage-bg),var(--bg2))', border: '1px solid var(--border)', borderRadius: 14 }}>
                <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7 }}>{t.homeopathyAngle}</p>
              </div>
            </LSec>
          )}

          {/* FAQs */}
          {t.faqs?.length > 0 && (
            <LSec id="faq" eyebrow={`${t.faqs.length} sawaal`} title="Frequently Asked Questions">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {t.faqs.map((f: any, i: number) => (
                  <FaqItem key={i} q={f.question} a={f.answer} index={i} open={openFaq === i} toggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
                ))}
              </div>
            </LSec>
          )}

          {/* Disclaimer */}
          <div style={{ marginTop: 40, padding: '16px 20px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--warm)', textTransform: 'uppercase' as const }}>Disclaimer</div>
            <p style={{ fontSize: 13, color: 'var(--ink2)', marginTop: 8, lineHeight: 1.7, fontStyle: 'italic', fontFamily: serif }}>
              "Ye jaankari educational purpose ke liye hai. Lab report apne doctor ko dikhayein aur unki salah ke bina koi medicine na lein."
            </p>
            <div style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 6, letterSpacing: '0.04em' }}>— Dr. Shadab Khan (MD Homoeopath) · {t.reviewDate || 'May 2026'}</div>
          </div>
        </div>

        {/* ─── RIGHT: sticky sidebar ─── */}
        <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 14 }} className="sidebar-sticky">

          {/* Consult CTA */}
          <div style={{ padding: 24, background: 'linear-gradient(135deg,var(--sage) 0%,var(--sage-dk) 100%)', borderRadius: 18, color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: '0 16px 40px rgba(63,107,77,.26)' }}>
            <div style={{ position: 'absolute', right: -30, top: -30, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, opacity: 0.85 }}>Report explained</div>
              <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 8, lineHeight: 1.15 }}>Report dekhi nahi samajh aayi?</div>
              <div style={{ fontSize: 12, opacity: 0.88, marginTop: 10, lineHeight: 1.55 }}>Dr. Shadab ko WhatsApp pe bhejein — interpretation aur next steps milenge.</div>
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 16px', background: '#fff', color: 'var(--sage-dk)', borderRadius: 99, fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>💬 Doctor ko bhejein</a>
            </div>
          </div>

          {/* Self-treat warning */}
          {t.selfTreatWarning && (
            <div style={{ padding: '14px 16px', background: 'rgba(162,56,56,0.06)', border: '1px solid rgba(162,56,56,0.18)', borderRadius: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#a23838', textTransform: 'uppercase' as const, marginBottom: 6 }}>⚠ Warning</div>
              <p style={{ fontSize: 12, color: 'var(--ink2)', lineHeight: 1.6 }}>{t.selfTreatWarning}</p>
            </div>
          )}

          {/* Related tests */}
          {t.relatedTests?.length > 0 && (
            <div style={{ padding: 18, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--sage-dk)', textTransform: 'uppercase' as const, marginBottom: 10 }}>Related Tests</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {t.relatedTests.slice(0, 4).map((rt: any) => (
                  rt.isAvailable
                    ? <Link key={rt.testName} href={`/lab-tests/${rt.testSlug}`} style={{ padding: '10px 12px', background: 'var(--bg)', borderRadius: 8, fontSize: 13, fontWeight: 600, color: 'var(--ink2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}>
                        <span>🔬 {rt.testName}</span><span style={{ color: 'var(--ink4)' }}>›</span>
                      </Link>
                    : <div key={rt.testName} style={{ padding: '10px 12px', background: 'var(--bg)', borderRadius: 8, fontSize: 13, color: 'var(--ink4)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>🔬 {rt.testName}</span><span style={{ fontSize: 10, color: 'var(--sage-dk)' }}>Soon</span>
                      </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          <div style={{ padding: 14, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, fontSize: 11, color: 'var(--ink3)', lineHeight: 1.55 }}>
            <strong style={{ color: 'var(--ink)' }}>References:</strong> Boericke, Allen · Lab Tests Online (NIH) · ICMR guidelines · Dr. Shadab Khan's 15+ yrs clinical practice.
          </div>
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
