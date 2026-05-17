'use client'

import Link from 'next/link'
import { useState } from 'react'
import { WA_BASE } from '@/lib/constants'

const serif = 'var(--font-display,Georgia,serif)'

function Section({ title, children, mb = 44 }: { title?: string; children: React.ReactNode; mb?: number }) {
  return (
    <div style={{ marginBottom: mb }}>
      {title && <h2 style={{ fontFamily: serif, fontSize: 'clamp(22px,3vw,28px)', fontWeight: 700, color: 'var(--ink)', marginBottom: 18 }}>{title}</h2>}
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

export default function SymptomClient({ symptom }: { symptom: any }) {
  const waLink = `${WA_BASE}?text=Namaste%20Dr.%20Shadab%2C%20mujhe%20${encodeURIComponent(symptom.name)}%20ke%20baare%20mein%20guidance%20chahiye.`

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 66 }}>

      {/* Medical Disclaimer Strip */}
      <div style={{ background: 'rgba(220,38,38,.04)', borderBottom: '1px solid rgba(220,38,38,.12)', padding: '8px clamp(16px,4vw,32px)' }}>
        <p style={{ maxWidth: 820, margin: '0 auto', fontSize: 12, color: '#b91c1c', fontWeight: 400, lineHeight: 1.5 }}>
          ⚕️ <strong>Medical Disclaimer:</strong> Ye page sirf educational information ke liye hai. Isko professional medical advice, diagnosis ya treatment ka substitute mat samjhein. Koi bhi decision lene se pehle doctor se zaroor milein.
        </p>
      </div>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '11px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', gap: 8, fontSize: 13, color: 'var(--ink4)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/symptoms" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Symptoms</Link>
          <span>›</span>
          <span style={{ color: 'var(--ink2)' }}>{symptom.name}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '44px clamp(16px,4vw,32px) 36px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.25)', letterSpacing: 1.5, textTransform: 'uppercase' }}>Symptom Guide</span>
            {symptom.bodySystem && <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: 'rgba(58,125,82,.08)', color: 'var(--sage)', border: '1px solid rgba(58,125,82,.2)', letterSpacing: 1.2, textTransform: 'uppercase' }}>{symptom.bodySystem}</span>}
          </div>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px' }}>{symptom.name}</h1>
          {symptom.hindiName && <p style={{ fontSize: 18, color: 'var(--ink3)', marginBottom: 20, fontWeight: 400 }}>{symptom.hindiName}{symptom.hinglishName ? ` — "${symptom.hinglishName}"` : ''}</p>}
          {symptom.whatIsThis && symptom.whatIsThis.split('\n\n').map((para: string, i: number) => (
            <p key={i} style={{ fontSize: 16, color: 'var(--ink2)', lineHeight: 1.85, fontWeight: 300, marginBottom: 12, maxWidth: 680 }}>{para}</p>
          ))}
          {symptom.indiaContext && (
            <div style={{ marginTop: 18, padding: '14px 18px', background: 'rgba(184,145,42,.06)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 10, maxWidth: 660 }}>
              <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{symptom.indiaContext}</p>
              {symptom.indiaContextSource && <p style={{ fontSize: 12, color: 'var(--ink4)', marginTop: 8, marginBottom: 0, fontStyle: 'italic' }}>Source: {symptom.indiaContextSource}</p>}
            </div>
          )}
          <p style={{ fontSize: 13, color: 'var(--ink4)', marginTop: 18, fontWeight: 300 }}><Link href="/about" style={{ color: 'var(--gold-dk)', textDecoration: 'none', fontWeight: 500 }}>Dr. Shadab Khan, MD Homoeopath</Link> — Clinically Reviewed | {symptom.reviewDate || 'May 2026'}</p>
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '44px clamp(16px,4vw,32px) 80px' }}>

        {/* Quick Facts */}
        {(symptom.quickFactSymptom || symptom.quickFactIndiaStats || symptom.quickFactDoctorWhen) && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginBottom: 44 }}>
            {symptom.quickFactSymptom && (
              <div style={{ padding: '16px 18px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, borderLeft: '3px solid var(--gold-dk)' }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold-dk)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Quick Fact</p>
                <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.65, fontWeight: 300, margin: 0 }}>{symptom.quickFactSymptom}</p>
              </div>
            )}
            {symptom.quickFactDoctorWhen && (
              <div style={{ padding: '16px 18px', background: 'rgba(220,38,38,.04)', border: '1px solid rgba(220,38,38,.15)', borderRadius: 12, borderLeft: '3px solid #dc2626' }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#dc2626', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Doctor Kab</p>
                <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.65, fontWeight: 300, margin: 0 }}>{symptom.quickFactDoctorWhen}</p>
              </div>
            )}
            {symptom.quickFactIndiaStats && (
              <div style={{ padding: '16px 18px', background: 'rgba(58,125,82,.05)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 12, borderLeft: '3px solid var(--sage)' }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>India Stats</p>
                <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.65, fontWeight: 300, margin: 0 }}>{symptom.quickFactIndiaStats}</p>
              </div>
            )}
          </div>
        )}

        {/* Severity Scale */}
        {(symptom.severityLevel1?.length > 0 || symptom.severityLevel2?.length > 0 || symptom.severityLevel3?.length > 0) && (
          <Section title="Ye Symptom Kitna Serious Hai?">
            <p style={{ fontSize: 15, color: 'var(--ink4)', marginBottom: 18, fontWeight: 300 }}>Sabse pehle ye samjho — aapka case kahan aata hai</p>
            <div style={{ display: 'grid', gap: 12 }}>
              {symptom.severityLevel1?.length > 0 && (
                <div style={{ padding: '18px 20px', background: 'rgba(34,197,94,.05)', border: '1.5px solid rgba(34,197,94,.25)', borderRadius: 12 }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#16a34a', marginBottom: 14 }}>🟢 Level 1 — Ghar Pe Manage Karo</p>
                  {symptom.severityLevel1.map((s: string, i: number) => (
                    <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: '#16a34a', flexShrink: 0, fontWeight: 700, marginTop: 2 }}>✓</span>
                      <span style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.65, fontWeight: 300 }}>{s}</span>
                    </div>
                  ))}
                </div>
              )}
              {symptom.severityLevel2?.length > 0 && (
                <div style={{ padding: '18px 20px', background: 'rgba(234,179,8,.05)', border: '1.5px solid rgba(234,179,8,.3)', borderRadius: 12 }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#b45309', marginBottom: 14 }}>🟡 Level 2 — Is Hafte Doctor Se Milein</p>
                  {symptom.severityLevel2.map((s: string, i: number) => (
                    <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: '#b45309', flexShrink: 0, fontWeight: 700, marginTop: 2 }}>⚠</span>
                      <span style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.65, fontWeight: 300 }}>{s}</span>
                    </div>
                  ))}
                </div>
              )}
              {symptom.severityLevel3?.length > 0 && (
                <div style={{ padding: '18px 20px', background: 'rgba(220,38,38,.05)', border: '1.5px solid rgba(220,38,38,.25)', borderRadius: 12 }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#dc2626', marginBottom: 14 }}>🔴 Level 3 — Turant Hospital Jaao</p>
                  {symptom.severityLevel3.map((s: string, i: number) => (
                    <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: '#dc2626', flexShrink: 0, fontWeight: 700, marginTop: 2 }}>!</span>
                      <span style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.65, fontWeight: 300 }}>{s}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Timeline */}
        {(symptom.timeline3Days || symptom.timeline4Weeks || symptom.timelineMonthPlus) && (
          <Section title="Ye Symptom Kitne Waqt Se Hai — Kya Karna Chahiye?">
            <div style={{ display: 'grid', gap: 12 }}>
              {symptom.timeline3Days && (
                <div style={{ padding: '18px 20px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, display: 'flex', gap: 16 }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>⏱️</div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Nayi Takleef — 1 se 3 Din</p>
                    <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{symptom.timeline3Days}</p>
                  </div>
                </div>
              )}
              {symptom.timeline4Weeks && (
                <div style={{ padding: '18px 20px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, display: 'flex', gap: 16 }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>📅</div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Chalti Aa Rahi — 1 se 4 Hafte</p>
                    <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{symptom.timeline4Weeks}</p>
                  </div>
                </div>
              )}
              {symptom.timelineMonthPlus && (
                <div style={{ padding: '18px 20px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, display: 'flex', gap: 16 }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>🗓️</div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Purani Problem — 1 Mahina Ya Zyada</p>
                    <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{symptom.timelineMonthPlus}</p>
                  </div>
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Causes */}
        {(symptom.lifestyleCauses?.length > 0 || symptom.medicalCauses?.length > 0 || symptom.redFlags?.length > 0) && (
          <Section title="Ye Symptom Kyun Hota Hai — Causes">

            {/* Part A */}
            {symptom.lifestyleCauses?.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 14, paddingBottom: 8, borderBottom: '1px solid var(--border)' }}>Part A — Aadat aur Lifestyle Se</h3>
                <div style={{ display: 'grid', gap: 12 }}>
                  {symptom.lifestyleCauses.map((c: any, i: number) => (
                    <div key={i} style={{ padding: '18px 20px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12 }}>
                      <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 10 }}>{i + 1}. {c.causeName}</p>
                      {c.mechanism && <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.8, fontWeight: 300, marginBottom: c.howToIdentify ? 10 : 0 }}><span style={{ fontWeight: 600, color: 'var(--ink3)' }}>Kaise hota hai:</span> {c.mechanism}</p>}
                      {c.howToIdentify && <p style={{ fontSize: 15, color: 'var(--sage)', lineHeight: 1.7, fontWeight: 400, margin: 0 }}>🔍 {c.howToIdentify}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Part B */}
            {symptom.medicalCauses?.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 8, paddingBottom: 8, borderBottom: '1px solid var(--border)' }}>Part B — Bimari Ki Wajah Se</h3>
                <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 14, fontWeight: 300, fontStyle: 'italic' }}>Neeche kuch common aur major diseases hain jinmein ye symptom hota hai. Ye poori list nahi hai — aur bhi kai causes ho sakte hain. Sahi wajah janane ke liye doctor se milna zaroori hai.</p>
                <div style={{ display: 'grid', gap: 12 }}>
                  {symptom.medicalCauses.map((d: any, i: number) => (
                    <div key={i} style={{ padding: '18px 20px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                        <div>
                          <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>{d.diseaseName}</p>
                          {d.diseaseHindiName && <p style={{ fontSize: 13, color: 'var(--ink4)', margin: '3px 0 0', fontWeight: 300 }}>{d.diseaseHindiName}</p>}
                        </div>
                        {d.isAvailable && d.homeopediaSlug ? (
                          <Link href={`/diseases/${d.homeopediaSlug}`} style={{ fontSize: 12, padding: '5px 14px', background: 'rgba(58,125,82,.1)', color: 'var(--sage)', border: '1px solid rgba(58,125,82,.25)', borderRadius: 100, textDecoration: 'none', fontWeight: 600, flexShrink: 0 }}>Full Guide →</Link>
                        ) : (
                          <span style={{ fontSize: 12, padding: '5px 14px', background: 'var(--bg2)', color: 'var(--ink4)', border: '1px solid var(--border)', borderRadius: 100, fontWeight: 400, flexShrink: 0 }}>Coming Soon</span>
                        )}
                      </div>
                      {d.howSymptomPresents && <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.8, fontWeight: 300, marginBottom: d.howToIdentify ? 8 : 0 }}>{d.howSymptomPresents}</p>}
                      {d.howToIdentify && <p style={{ fontSize: 15, color: 'var(--gold-dk)', lineHeight: 1.7, fontWeight: 400, margin: 0 }}>🔍 {d.howToIdentify}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Part C Red Flags */}
            {symptom.redFlags?.length > 0 && (
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#dc2626', marginBottom: 14, paddingBottom: 8, borderBottom: '1px solid rgba(220,38,38,.2)' }}>⚠️ Part C — Red Flags — Doctor Zaruri</h3>
                <div style={{ padding: '18px 20px', background: 'rgba(220,38,38,.04)', border: '1px solid rgba(220,38,38,.15)', borderRadius: 12, display: 'grid', gap: 12 }}>
                  {symptom.redFlags.map((rf: string, i: number) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: '#dc2626', flexShrink: 0, fontSize: 15, marginTop: 2 }}>🚨</span>
                      <span style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300 }}>{rf}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Section>
        )}

        {/* Home Steps */}
        {symptom.homeSteps?.length > 0 && (
          <Section title="Ghar Pe Kya Karein — Safe Steps">
            <p style={{ fontSize: 15, color: 'var(--ink4)', marginBottom: 18, fontWeight: 300 }}>Ye steps medically safe hain — immediate comfort ke liye. Koi medicine nahi.</p>
            <div style={{ display: 'grid', gap: 12 }}>
              {symptom.homeSteps.map((step: any, i: number) => (
                <div key={i} style={{ padding: '18px 20px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, display: 'flex', gap: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--gold-bg)', border: '1px solid rgba(184,145,42,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 14, fontWeight: 700, color: 'var(--gold-dk)' }}>{i + 1}</div>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{step.action}</p>
                    {step.whyItWorks && <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{step.whyItWorks}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Homeopathy Section */}
        {(symptom.homeopathyIndividualization || symptom.homeopathyRootCause || symptom.homeopathySafety) && (
          <Section title="Homeopathy Is Symptom Mein Kaise Kaam Karta Hai">
            <div style={{ display: 'grid', gap: 14 }}>
              {symptom.homeopathyIndividualization && (
                <div style={{ padding: '20px 22px', background: 'rgba(58,125,82,.05)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Individualization — Aapka Treatment Alag Kyun</p>
                  <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.85, fontWeight: 300, margin: 0 }}>{symptom.homeopathyIndividualization}</p>
                </div>
              )}
              {symptom.homeopathyRootCause && (
                <div style={{ padding: '20px 22px', background: 'rgba(58,125,82,.05)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Root Cause Approach</p>
                  <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.85, fontWeight: 300, margin: 0 }}>{symptom.homeopathyRootCause}</p>
                </div>
              )}
              {symptom.homeopathySafety && (
                <div style={{ padding: '20px 22px', background: 'rgba(58,125,82,.05)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Safety</p>
                  <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.85, fontWeight: 300, margin: 0 }}>{symptom.homeopathySafety}</p>
                </div>
              )}
            </div>

            {(symptom.isForYouIf?.length > 0 || symptom.notForYouIf?.length > 0) && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14, marginTop: 16 }}>
                {symptom.isForYouIf?.length > 0 && (
                  <div style={{ padding: '18px 20px', background: 'rgba(34,197,94,.04)', border: '1px solid rgba(34,197,94,.2)', borderRadius: 12 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#16a34a', marginBottom: 12 }}>✅ Ye Approach Aapke Liye Hai Agar</p>
                    {symptom.isForYouIf.map((pt: string, i: number) => (
                      <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                        <span style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }}>•</span>
                        <span style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.7, fontWeight: 300 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
                {symptom.notForYouIf?.length > 0 && (
                  <div style={{ padding: '18px 20px', background: 'rgba(220,38,38,.04)', border: '1px solid rgba(220,38,38,.15)', borderRadius: 12 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#dc2626', marginBottom: 12 }}>⚠️ Ye Approach Abhi Nahi Agar</p>
                    {symptom.notForYouIf.map((pt: string, i: number) => (
                      <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                        <span style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }}>•</span>
                        <span style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.7, fontWeight: 300 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {symptom.homeopathyDiseaseLinks?.length > 0 && (
              <div style={{ marginTop: 16, padding: '16px 20px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <p style={{ fontSize: 15, color: 'var(--ink3)', marginBottom: 12, fontWeight: 500 }}>Is symptom se linked bimariyon ki detailed homeopathic guide:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {symptom.homeopathyDiseaseLinks.map((dl: any, i: number) => (
                    <Link key={i} href={`/diseases/${dl.diseaseSlug}`} style={{ fontSize: 14, padding: '8px 16px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 100, color: 'var(--gold-dk)', textDecoration: 'none', fontWeight: 500 }}>{dl.diseaseName} →</Link>
                  ))}
                </div>
              </div>
            )}
          </Section>
        )}

        {/* Disease Cards */}
        {symptom.linkedDiseaseCards?.length > 0 && (
          <Section title="In Bimariyoon Mein Ye Symptom Hota Hai">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 12 }}>
              {symptom.linkedDiseaseCards.map((d: any, i: number) => (
                <Link key={i} href={`/diseases/${d.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: 3, bottom: 0, background: 'linear-gradient(to bottom,var(--gold-dk),var(--gold-lt))', borderRadius: '12px 0 0 12px' }} />
                    <div style={{ paddingLeft: 10 }}>
                      <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{d.title}</p>
                      <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 10, fontWeight: 300 }}>{d.hindiName}</p>
                      <span style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600 }}>Full Guide →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* FAQs */}
        {symptom.faqs?.length > 0 && (
          <Section title="Aksar Pooche Jaane Wale Sawal">
            <p style={{ fontSize: 15, color: 'var(--ink4)', marginBottom: 18, fontWeight: 300 }}>{symptom.faqs.length} FAQs — pehli line mein direct answer</p>
            {symptom.faqs.map((f: any, i: number) => (
              <FaqItem key={i} q={f.question} a={f.answer} index={i} />
            ))}
          </Section>
        )}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg,#1a3d30 0%,#0f2a1e 100%)', borderRadius: 16, padding: '32px 28px', marginBottom: 44 }}>
          <p style={{ fontFamily: serif, color: 'white', fontSize: 'clamp(18px,2.5vw,24px)', fontWeight: 700, marginBottom: 8 }}>Apna Symptom Samajh Aa Gaya — Ab Kya Karein?</p>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 15, marginBottom: 22, fontWeight: 300, lineHeight: 1.75 }}>Har insaan ki {symptom.hindiName || symptom.name} ki wajah alag hoti hai — aur ilaaj bhi alag hoga. Dr. Shadab se ek consultation mein aap jaanenge ki aapke is symptom ke peeche exactly kya hai.</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>💬 Dr. Shadab Se Milein →</a>
          <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, marginTop: 14, marginBottom: 0 }}>15+ Saalon Ka Clinical Experience | Nagpur</p>
        </div>

        {/* Related Symptoms */}
        {symptom.relatedSymptoms?.length > 0 && (
          <Section title="Related Symptoms — Ye Bhi Padhein">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {symptom.relatedSymptoms.map((rs: any, i: number) => (
                <Link key={i} href={`/symptoms/${rs.slug}`} style={{ padding: '10px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 100, textDecoration: 'none', fontSize: 14, color: 'var(--ink)', fontWeight: 400 }}>
                  {rs.name}{rs.hindiName && <span style={{ color: 'var(--ink4)', fontSize: 13 }}> — {rs.hindiName}</span>}
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* Doctor Note */}
        {symptom.doctorNote && (
          <div style={{ padding: '22px 24px', background: 'rgba(184,145,42,.05)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 14, marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold-dk)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Dr. Shadab Ka Clinical Note</p>
            <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.9, fontWeight: 300, margin: 0, fontStyle: 'italic' }}>"{symptom.doctorNote}"</p>
            <p style={{ fontSize: 13, color: 'var(--ink4)', marginTop: 12, marginBottom: 0 }}>— Dr. Shadab Khan, MD Homoeopath | Reg. No. 54130</p>
          </div>
        )}

        {/* Sources */}
        {symptom.sources?.length > 0 && (
          <Section title="Sources" mb={0}>
            <div style={{ display: 'grid', gap: 10 }}>
              {symptom.sources.map((s: any, i: number) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: 14, color: 'var(--ink4)' }}>
                  <span style={{ flexShrink: 0, fontWeight: 600 }}>{i + 1}.</span>
                  <span>{s.name}{s.year && ` (${s.year})`}{s.url && <> — <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dk)', textDecoration: 'underline' }}>Link</a></>}</span>
                </div>
              ))}
            </div>
          </Section>
        )}
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
