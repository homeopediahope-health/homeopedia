import { Metadata } from 'next'
import { WA_BASE } from '@/lib/constants'
import { getAllLabTests } from '@/lib/queries'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Lab Tests Guide — Normal Range, High/Low Matlab | HomeoPedia.in',
  description: 'ESR, CBC, TSH, CRP aur sabhi lab tests ki complete Hinglish guide. Normal range, high/low ka matlab, kab doctor ko dikhaye — Dr. Shadab Khan dwara reviewed.',
  alternates: { canonical: 'https://www.homeopedia.in/lab-tests' },
  openGraph: {
    title: 'Lab Tests Guide | HomeoPedia.in',
    description: 'Apni report samjho — normal range, high/low meaning, kab test karwana chahiye.',
  },
}

const CATEGORY_ORDER = ['Blood', 'Hormone', 'Urine', 'Stool', 'Imaging', 'Other']

const serif = 'var(--font-display,Georgia,serif)'

export default async function LabTestsPage() {
  const tests = await getAllLabTests().catch(() => [])

  const byCategory = CATEGORY_ORDER.reduce((acc: Record<string, any[]>, cat) => {
    acc[cat] = tests.filter((t: any) => t.category === cat)
    return acc
  }, {})
  const uncategorised = tests.filter((t: any) => !t.category || !CATEGORY_ORDER.includes(t.category))

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '52px clamp(16px,4vw,32px) 40px', textAlign: 'center' }}>
        <span style={{ fontSize: 10, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.25)', letterSpacing: 1.5, textTransform: 'uppercase' }}>Lab Test Guide</span>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: 'var(--ink)', margin: '14px 0 10px' }}>Lab Report Samjho — Sahi Matlab Jaano</h1>
        <p style={{ fontSize: 15, color: 'var(--ink3)', maxWidth: 560, margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>Normal range, high/low ka matlab, kab test karwana chahiye — sab kuch simple Hinglish mein. Doctor-reviewed content.</p>
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px clamp(16px,4vw,32px) 80px' }}>

        {tests.length > 0 ? (
          <>
            <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 32, fontWeight: 300 }}>{tests.length} lab tests listed — aur jald add ho rahe hain</p>

            {CATEGORY_ORDER.map(cat => {
              const catTests = byCategory[cat]
              if (!catTests?.length) return null
              return (
                <div key={cat} style={{ marginBottom: 40 }}>
                  <h2 style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 16, paddingBottom: 10, borderBottom: '2px solid var(--border)' }}>
                    {cat === 'Blood' ? '🩸' : cat === 'Hormone' ? '🔬' : cat === 'Urine' ? '🧪' : cat === 'Stool' ? '🧫' : cat === 'Imaging' ? '📡' : '🔬'} {cat} Tests
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 12 }}>
                    {catTests.map((t: any) => (
                      <Link key={t.slug?.current} href={`/lab-tests/${t.slug?.current}`} style={{ textDecoration: 'none' }}>
                        <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                          <div style={{ position: 'absolute', top: 0, left: 0, width: 3, bottom: 0, background: 'linear-gradient(to bottom,var(--gold-dk),var(--gold-lt))', borderRadius: '12px 0 0 12px' }} />
                          <div style={{ paddingLeft: 10 }}>
                            <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 3 }}>{t.name}</h3>
                            {t.hindiName && <p style={{ fontSize: 12, color: 'var(--ink4)', marginBottom: 6, fontWeight: 300 }}>{t.hindiName}</p>}
                            {t.fullForm && <p style={{ fontSize: 11, color: 'var(--ink4)', marginBottom: 8, fontWeight: 300, fontStyle: 'italic' }}>{t.fullForm}</p>}
                            <span style={{ display: 'inline-block', fontSize: 11, color: 'var(--gold)', fontWeight: 600 }}>Normal Range Jaano →</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}

            {uncategorised.length > 0 && (
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>🔬 Other Tests</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 12 }}>
                  {uncategorised.map((t: any) => (
                    <Link key={t.slug?.current} href={`/lab-tests/${t.slug?.current}`} style={{ textDecoration: 'none' }}>
                      <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: 3, bottom: 0, background: 'linear-gradient(to bottom,var(--gold-dk),var(--gold-lt))', borderRadius: '12px 0 0 12px' }} />
                        <div style={{ paddingLeft: 10 }}>
                          <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 3 }}>{t.name}</h3>
                          {t.hindiName && <p style={{ fontSize: 12, color: 'var(--ink4)', marginBottom: 8, fontWeight: 300 }}>{t.hindiName}</p>}
                          <span style={{ display: 'inline-block', fontSize: 11, color: 'var(--gold)', fontWeight: 600 }}>Normal Range Jaano →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', border: '2px dashed var(--border2)', borderRadius: 16 }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🧪</div>
            <p style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Lab Tests Guide Jald Aayegi</p>
            <p style={{ color: 'var(--ink4)', fontWeight: 300, fontSize: 14 }}>Dr. Shadab expert content add kar rahe hain</p>
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: 48, textAlign: 'center', padding: '32px', background: 'rgba(184,145,42,.06)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 14 }}>
          <p style={{ fontFamily: serif, fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Report Samajh Nahi Aayi?</p>
          <p style={{ fontSize: 13, color: 'var(--ink3)', marginBottom: 16, fontWeight: 300 }}>Dr. Shadab se seedha poochho — apni report WhatsApp pe share karein</p>
          <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>📲 WhatsApp Karein</a>
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
