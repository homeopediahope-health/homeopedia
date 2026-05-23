'use client'

import Link from 'next/link'
import { useState } from 'react'
import { WA_BASE } from '@/lib/constants'

const serif = 'var(--font-display,Georgia,serif)'

function Section({ title, children, mb = 44 }: { title?: string; children: React.ReactNode; mb?: number }) {
  return (
    <div style={{ marginBottom: mb }}>
      {title && <h2 style={{ fontFamily: serif, fontSize: 'clamp(20px,3vw,26px)', fontWeight: 700, color: 'var(--ink)', marginBottom: 18 }}>{title}</h2>}
      {children}
    </div>
  )
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', marginBottom: 10 }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', textAlign: 'left', padding: '18px 20px', background: open ? 'var(--bg2)' : 'var(--card)', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.5 }}>{q}</span>
        <span style={{ fontSize: 20, color: 'var(--gold-dk)', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '4px 20px 20px', background: 'var(--card)' }}>
          {a.split('\n').map((line, i) =>
            line.trim().startsWith('-') ? (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                <span style={{ color: 'var(--gold-dk)', flexShrink: 0, marginTop: 2 }}>•</span>
                <span style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300 }}>{line.replace(/^-\s*/, '')}</span>
              </div>
            ) : line.trim() ? (
              <p key={i} style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.8, fontWeight: 300, marginBottom: 8 }}>{line}</p>
            ) : <div key={i} style={{ height: 8 }} />
          )}
        </div>
      )}
    </div>
  )
}

export default function LabTestClient({ test }: { test: any }) {
  const waLink = `${WA_BASE}?text=Namaste%20Dr.%20Shadab%2C%20mujhe%20${encodeURIComponent(test.name)}%20report%20ke%20baare%20mein%20guidance%20chahiye.`

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 66 }}>

      {/* Medical Disclaimer Strip */}
      <div style={{ background: 'rgba(220,38,38,.04)', borderBottom: '1px solid rgba(220,38,38,.12)', padding: '8px clamp(16px,4vw,32px)' }}>
        <p style={{ maxWidth: 820, margin: '0 auto', fontSize: 12, color: '#b91c1c', fontWeight: 400, lineHeight: 1.5 }}>
          ⚕️ <strong>Medical Disclaimer:</strong> Ye jaankari sirf educational purpose ke liye hai. Lab report apne doctor ko dikhaye aur unki salah ke bina koi medicine na le.
        </p>
      </div>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '11px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', gap: 8, fontSize: 13, color: 'var(--ink4)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/lab-tests" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Lab Tests</Link>
          <span>›</span>
          <span style={{ color: 'var(--ink2)' }}>{test.name}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '44px clamp(16px,4vw,32px) 36px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.25)', letterSpacing: 1.5, textTransform: 'uppercase' }}>Lab Test Guide</span>
            {test.category && <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: 'rgba(58,125,82,.08)', color: 'var(--sage)', border: '1px solid rgba(58,125,82,.2)', letterSpacing: 1.2, textTransform: 'uppercase' }}>{test.category} Test</span>}
          </div>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(26px,4vw,44px)', fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px' }}>{test.name} Kya Hai?</h1>
          {test.fullForm && <p style={{ fontSize: 16, color: 'var(--ink3)', marginBottom: 6, fontWeight: 400 }}>Full Form: <strong>{test.fullForm}</strong></p>}
          {test.hindiName && <p style={{ fontSize: 16, color: 'var(--ink3)', marginBottom: 20, fontWeight: 300 }}>{test.hindiName}</p>}
          {test.heroText && test.heroText.split('\n\n').map((para: string, i: number) => (
            <p key={i} style={{ fontSize: 16, color: 'var(--ink2)', lineHeight: 1.85, fontWeight: 300, marginBottom: 12, maxWidth: 680 }}>{para}</p>
          ))}
          <p style={{ fontSize: 13, color: 'var(--ink4)', marginTop: 18, fontWeight: 300 }}>
            <Link href="/about" style={{ color: 'var(--gold-dk)', textDecoration: 'none', fontWeight: 500 }}>Dr. Shadab Khan, MD Homoeopath</Link> — Clinically Reviewed | {test.reviewDate || 'May 2026'}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '44px clamp(16px,4vw,32px) 80px' }}>

        {/* Section 3: Kab Karaye */}
        {(test.whenToTest?.length > 0 || test.whatItDetects) && (
          <Section title="Ye Test Kab Aur Kyun Karwate Hain?">
            {test.whenToTest?.length > 0 && (
              <div style={{ marginBottom: test.whatItDetects ? 20 : 0 }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 14 }}>Doctor ye test likhta hai jab:</p>
                <div style={{ display: 'grid', gap: 10 }}>
                  {test.whenToTest.map((item: string, i: number) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10 }}>
                      <span style={{ color: 'var(--gold-dk)', flexShrink: 0, fontSize: 16, marginTop: 1 }}>→</span>
                      <span style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.7, fontWeight: 300 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {test.whatItDetects && (
              <div style={{ padding: '18px 20px', background: 'rgba(58,125,82,.05)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 12, marginTop: 16 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Is Test Se Kya Detect Hota Hai</p>
                <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.85, fontWeight: 300, margin: 0 }}>{test.whatItDetects}</p>
              </div>
            )}
          </Section>
        )}

        {/* Section 4: Normal Range Table */}
        {test.normalRanges?.length > 0 && (
          <Section title="Normal Range Table">
            <p style={{ fontSize: 14, color: 'var(--ink4)', marginBottom: 14, fontWeight: 300 }}>⭐ Sabse important section — apni age/gender ke hisaab se range check karo</p>
            <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid var(--border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 500 }}>
                <thead>
                  <tr style={{ background: 'rgba(58,125,82,.1)', borderBottom: '2px solid rgba(58,125,82,.3)' }}>
                    {['Parameter', 'Normal Range', 'Unit', 'High Matlab', 'Low Matlab'].map(h => (
                      <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700, color: 'var(--sage)', fontSize: 13, whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {test.normalRanges.map((row: any, i: number) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'var(--card)' : 'var(--bg)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.5 }}>{row.parameter}</td>
                      <td style={{ padding: '12px 14px', color: 'var(--sage)', fontWeight: 700 }}>{row.normalRange}</td>
                      <td style={{ padding: '12px 14px', color: 'var(--ink3)', fontWeight: 400 }}>{row.unit}</td>
                      <td style={{ padding: '12px 14px', color: '#b45309', fontWeight: 400, fontSize: 13 }}>{row.highBrief || '—'}</td>
                      <td style={{ padding: '12px 14px', color: '#2563eb', fontWeight: 400, fontSize: 13 }}>{row.lowBrief || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: 'var(--ink4)', marginTop: 10, fontWeight: 300, fontStyle: 'italic' }}>Note: Ye ranges approximate hain. Different labs ki values thodi alag ho sakti hain — apni lab ki reference range zaroor dekho.</p>
          </Section>
        )}

        {/* Section 5: Pregnancy */}
        {test.pregnancyInfo?.applicable && (
          <Section title="Pregnancy Mein Ye Test 🤰">
            <div style={{ padding: '22px 24px', background: 'rgba(236,72,153,.04)', border: '1px solid rgba(236,72,153,.2)', borderRadius: 14 }}>
              {test.pregnancyInfo.normalRange && (
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16, padding: '12px 16px', background: 'rgba(236,72,153,.08)', borderRadius: 10 }}>
                  <span style={{ fontSize: 20 }}>🤰</span>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#be185d', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Pregnancy Mein Normal Range</p>
                    <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{test.pregnancyInfo.normalRange}</p>
                  </div>
                </div>
              )}
              {test.pregnancyInfo.riskNote && <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.8, fontWeight: 300, marginBottom: 12 }}>{test.pregnancyInfo.riskNote}</p>}
              {test.pregnancyInfo.whenDoctor && (
                <div style={{ borderTop: '1px solid rgba(236,72,153,.15)', paddingTop: 12 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#be185d', marginBottom: 6 }}>Doctor kab likhta hai ye test pregnancy mein:</p>
                  <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{test.pregnancyInfo.whenDoctor}</p>
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Section 6: High Matlab */}
        {(test.highMeans?.length > 0 || test.highReassurance) && (
          <Section title={`${test.name} High Hone Ka Matlab?`}>
            <p style={{ fontSize: 14, color: 'var(--ink4)', marginBottom: 14, fontWeight: 300 }}>⭐ Sabse zyada search hone wala question</p>
            {test.highMeans?.length > 0 && (
              <div style={{ padding: '18px 20px', background: 'rgba(234,179,8,.04)', border: '1.5px solid rgba(234,179,8,.3)', borderRadius: 12, marginBottom: 14 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#b45309', marginBottom: 14 }}>⬆️ High Hone Ke Karan</p>
                {test.highMeans.map((cause: string, i: number) => (
                  <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#b45309', flexShrink: 0, marginTop: 3, fontSize: 8 }}>●</span>
                    <span style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300 }}>{cause}</span>
                  </div>
                ))}
              </div>
            )}
            {test.highReassurance && (
              <div style={{ padding: '14px 18px', background: 'rgba(34,197,94,.05)', border: '1px solid rgba(34,197,94,.25)', borderRadius: 10 }}>
                <p style={{ fontSize: 15, color: '#16a34a', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>✅ {test.highReassurance}</p>
              </div>
            )}
          </Section>
        )}

        {/* Section 7: Low Matlab */}
        {(test.lowMeans?.length > 0 || test.lowConcern) && (
          <Section title={`${test.name} Low Hone Ka Matlab?`}>
            {test.lowMeans?.length > 0 && (
              <div style={{ padding: '18px 20px', background: 'rgba(37,99,235,.04)', border: '1.5px solid rgba(37,99,235,.2)', borderRadius: 12, marginBottom: 14 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#2563eb', marginBottom: 14 }}>⬇️ Low Hone Ke Karan</p>
                {test.lowMeans.map((cause: string, i: number) => (
                  <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#2563eb', flexShrink: 0, marginTop: 3, fontSize: 8 }}>●</span>
                    <span style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300 }}>{cause}</span>
                  </div>
                ))}
              </div>
            )}
            {test.lowConcern && (
              <div style={{ padding: '14px 18px', background: 'rgba(37,99,235,.05)', border: '1px solid rgba(37,99,235,.15)', borderRadius: 10 }}>
                <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}><strong style={{ color: '#2563eb' }}>Kab concern karein:</strong> {test.lowConcern}</p>
              </div>
            )}
          </Section>
        )}

        {/* Section 8: Doctor Ko Dikhaye */}
        {(test.redFlags?.length > 0 || test.emergencyLevel || test.selfTreatWarning) && (
          <Section title="Kab Doctor Ko Turant Dikhaye?">
            {test.redFlags?.length > 0 && (
              <div style={{ padding: '18px 20px', background: 'rgba(220,38,38,.04)', border: '2px solid rgba(220,38,38,.25)', borderRadius: 12, marginBottom: 14 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#dc2626', marginBottom: 14 }}>🚨 Danger Signs — Ye Ho Toh Doctor Zaruri</p>
                {test.redFlags.map((flag: string, i: number) => (
                  <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#dc2626', flexShrink: 0, fontSize: 15, marginTop: 1 }}>!</span>
                    <span style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300 }}>{flag}</span>
                  </div>
                ))}
              </div>
            )}
            {test.emergencyLevel && (
              <div style={{ padding: '14px 18px', background: 'rgba(220,38,38,.06)', border: '1px solid rgba(220,38,38,.2)', borderRadius: 10, marginBottom: 12 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#dc2626', marginBottom: 6 }}>Emergency Level:</p>
                <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{test.emergencyLevel}</p>
              </div>
            )}
            {test.selfTreatWarning && (
              <div style={{ padding: '14px 18px', background: 'rgba(184,145,42,.06)', border: '1px solid rgba(184,145,42,.25)', borderRadius: 10 }}>
                <p style={{ fontSize: 15, color: 'var(--gold-dk)', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>⚠️ {test.selfTreatWarning}</p>
              </div>
            )}
          </Section>
        )}

        {/* Section 9: Preparation */}
        {test.preparation && (
          <Section title="Test Ki Taiyari Kaise Karein?">
            <p style={{ fontSize: 14, color: 'var(--ink4)', marginBottom: 18, fontWeight: 300 }}>⭐ Test se pehle ye zaroor padho — accurate report ke liye</p>
            <div style={{ display: 'grid', gap: 12 }}>
              <div style={{ padding: '18px 20px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Fasting Chahiye?</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: test.preparation.fastingRequired ? '#dc2626' : '#16a34a', margin: 0 }}>
                      {test.preparation.fastingRequired ? `Haan — ${test.preparation.fastingHours || '8-10'} ghante khali pet` : 'Nahi — Fasting Zaruri Nahi'}
                    </p>
                  </div>
                  {test.preparation.bestTime && (
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Best Time</p>
                      <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{test.preparation.bestTime}</p>
                    </div>
                  )}
                </div>
              </div>
              {test.preparation.whatToEat && (
                <div style={{ padding: '16px 18px', background: 'rgba(34,197,94,.04)', border: '1px solid rgba(34,197,94,.2)', borderRadius: 12 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#16a34a', marginBottom: 8 }}>✅ Kha Sakte Hain</p>
                  <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{test.preparation.whatToEat}</p>
                </div>
              )}
              {test.preparation.whatToAvoid && (
                <div style={{ padding: '16px 18px', background: 'rgba(220,38,38,.04)', border: '1px solid rgba(220,38,38,.15)', borderRadius: 12 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#dc2626', marginBottom: 8 }}>🚫 Avoid Karein</p>
                  <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{test.preparation.whatToAvoid}</p>
                </div>
              )}
              {test.preparation.medicineNote && (
                <div style={{ padding: '16px 18px', background: 'rgba(184,145,42,.05)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 12 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--gold-dk)', marginBottom: 8 }}>💊 Medicine Ke Baare Mein</p>
                  <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{test.preparation.medicineNote}</p>
                </div>
              )}
              {test.preparation.accuracyNote && (
                <div style={{ padding: '16px 18px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>🎯 Accurate Report Ke Liye</p>
                  <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{test.preparation.accuracyNote}</p>
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Section 10: Sample Info */}
        {test.sampleInfo && (
          <Section title="Sample Type & Report Time">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12 }}>
              {test.sampleInfo.sampleType && (
                <div style={{ padding: '16px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Sample Type</p>
                  <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>{test.sampleInfo.sampleType}</p>
                </div>
              )}
              {test.sampleInfo.sampleAmount && (
                <div style={{ padding: '16px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Kitna Sample</p>
                  <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>{test.sampleInfo.sampleAmount}</p>
                </div>
              )}
              {test.sampleInfo.reportTime && (
                <div style={{ padding: '16px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Report Aane Ka Time</p>
                  <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--sage)', margin: 0 }}>{test.sampleInfo.reportTime}</p>
                </div>
              )}
              <div style={{ padding: '16px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Online Report</p>
                <p style={{ fontSize: 16, fontWeight: 600, color: test.sampleInfo.onlineAvailable ? '#16a34a' : 'var(--ink3)', margin: 0 }}>{test.sampleInfo.onlineAvailable ? 'Milti Hai ✓' : 'Lab Pe Lena Padega'}</p>
              </div>
            </div>
          </Section>
        )}

        {/* Section 11: Myths */}
        {test.myths?.length > 0 && (
          <Section title="Myths & Galat Fehmiyan 🚫">
            <p style={{ fontSize: 14, color: 'var(--ink4)', marginBottom: 18, fontWeight: 300 }}>Ye aam galat soch hain — sahi baat jaano</p>
            <div style={{ display: 'grid', gap: 12 }}>
              {test.myths.map((item: any, i: number) => (
                <div key={i} style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
                  <div style={{ padding: '12px 16px', background: 'rgba(220,38,38,.05)', borderBottom: '1px solid rgba(220,38,38,.12)' }}>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#dc2626', margin: 0 }}>🚫 Myth: {item.myth}</p>
                  </div>
                  <div style={{ padding: '12px 16px', background: 'rgba(34,197,94,.04)' }}>
                    <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>✅ <strong style={{ color: '#16a34a' }}>Sahi Baat:</strong> {item.truth}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Section 12: Comparison */}
        {test.comparisons?.length > 0 && (
          <Section title="Test Comparison">
            <div style={{ display: 'grid', gap: 14 }}>
              {test.comparisons.map((comp: any, i: number) => (
                <div key={i} style={{ padding: '20px 22px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{test.name} vs {comp.comparedTest}</h3>
                    {comp.comparedTestSlug && (
                      <Link href={`/lab-tests/${comp.comparedTestSlug}`} style={{ fontSize: 12, padding: '5px 14px', background: 'rgba(58,125,82,.1)', color: 'var(--sage)', border: '1px solid rgba(58,125,82,.25)', borderRadius: 100, textDecoration: 'none', fontWeight: 600 }}>{comp.comparedTest} Guide →</Link>
                    )}
                  </div>
                  {comp.differencePoints?.length > 0 && (
                    <div style={{ display: 'grid', gap: 8 }}>
                      {comp.differencePoints.map((pt: string, j: number) => (
                        <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--gold-dk)', flexShrink: 0, marginTop: 2 }}>•</span>
                          <span style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, fontWeight: 300 }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Section 13: Repeat Info */}
        {test.repeatInfo && (
          <Section title="Repeat Kab Karaye?">
            <div style={{ padding: '18px 20px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12 }}>
              <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.85, fontWeight: 300, margin: 0 }}>{test.repeatInfo}</p>
            </div>
          </Section>
        )}

        {/* Section 14: Linked Diseases */}
        {test.linkedDiseases?.length > 0 && (
          <Section title="In Bimariyoon Mein Ye Test Hota Hai 🔗">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 12 }}>
              {test.linkedDiseases.map((d: any, i: number) => {
                const available = d.isAvailable && d.diseaseSlug
                const card = (
                  <div className={available ? 'hov' : ''} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px', cursor: available ? 'pointer' : 'default', position: 'relative', overflow: 'hidden', opacity: available ? 1 : 0.75 }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: 3, bottom: 0, background: available ? 'linear-gradient(to bottom,var(--gold-dk),var(--gold-lt))' : 'var(--border)', borderRadius: '12px 0 0 12px' }} />
                    <div style={{ paddingLeft: 10 }}>
                      <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 10 }}>{d.diseaseName}</p>
                      <span style={{ fontSize: 12, color: available ? 'var(--gold)' : 'var(--ink4)', fontWeight: 600 }}>{available ? 'Full Guide →' : 'Coming Soon'}</span>
                    </div>
                  </div>
                )
                return available ? (
                  <Link key={i} href={`/diseases/${d.diseaseSlug}`} style={{ textDecoration: 'none' }}>{card}</Link>
                ) : (
                  <div key={i}>{card}</div>
                )
              })}
            </div>
          </Section>
        )}

        {/* Section 16: Homeopathy */}
        {test.homeopathyAngle && (
          <Section title="Homeopathy Ka Nazar — Ye Report Aaye Toh?">
            <div style={{ padding: '22px 24px', background: 'rgba(58,125,82,.05)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 14 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Homeopathy Perspective</p>
              <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.9, fontWeight: 300, margin: 0 }}>{test.homeopathyAngle}</p>
            </div>
          </Section>
        )}

        {/* FAQs */}
        {test.faqs?.length > 0 && (
          <Section title="Aksar Pooche Jaane Wale Sawal">
            <p style={{ fontSize: 15, color: 'var(--ink4)', marginBottom: 18, fontWeight: 300 }}>{test.faqs.length} FAQs — pehli line mein direct jawab</p>
            {test.faqs.map((f: any, i: number) => (
              <FaqItem key={i} q={f.question} a={f.answer} index={i} />
            ))}
          </Section>
        )}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg,#1a3d30 0%,#0f2a1e 100%)', borderRadius: 16, padding: '32px 28px', marginBottom: 44 }}>
          <p style={{ fontFamily: serif, color: 'white', fontSize: 'clamp(18px,2.5vw,22px)', fontWeight: 700, marginBottom: 8 }}>Report Aa Gayi — Ab Kya Karein?</p>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 15, marginBottom: 22, fontWeight: 300, lineHeight: 1.75 }}>Sirf normal range dekhna kaafi nahi hota — aapki bimari, doosri medicines, aur symptoms sab milake hi sahi ilaaj tay hota hai. Dr. Shadab se ek consultation mein seedha guidance milegi.</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>💬 Dr. Shadab Se Milein →</a>
          <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, marginTop: 14, marginBottom: 0 }}>15+ Saalon Ka Clinical Experience | Nagpur</p>
        </div>

        {/* Section 15: Related Tests */}
        {test.relatedTests?.length > 0 && (
          <Section title="Related Tests — Saath Mein Jo Tests Hote Hain 🔗">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {test.relatedTests.map((t: any, i: number) =>
                t.isAvailable && t.testSlug ? (
                  <Link key={i} href={`/lab-tests/${t.testSlug}`} style={{ padding: '10px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 100, textDecoration: 'none', fontSize: 14, color: 'var(--gold-dk)', fontWeight: 500 }}>{t.testName} →</Link>
                ) : (
                  <span key={i} style={{ padding: '10px 18px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 100, fontSize: 14, color: 'var(--ink4)', fontWeight: 400 }}>{t.testName}</span>
                )
              )}
            </div>
          </Section>
        )}

        {/* Disclaimer */}
        <div style={{ padding: '20px 22px', background: 'rgba(184,145,42,.04)', border: '1px solid rgba(184,145,42,.15)', borderRadius: 12 }}>
          <p style={{ fontSize: 13, color: 'var(--ink4)', lineHeight: 1.7, fontWeight: 300, margin: 0, fontStyle: 'italic' }}>
            "Ye jaankari educational purpose ke liye hai. Lab report apne doctor ko dikhaye aur unki salah ke bina koi medicine na le."
          </p>
          <p style={{ fontSize: 13, color: 'var(--ink4)', marginTop: 8, marginBottom: 0, fontWeight: 500 }}>— Dr. Shadab Khan, MD Homoeopath | Reg. No. 54130</p>
        </div>

      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
