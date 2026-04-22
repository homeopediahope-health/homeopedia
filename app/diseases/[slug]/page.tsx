'use client'

import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import { getDiseaseBySlug, getRelatedDiseases } from '@/lib/queries'
import Starsvg from '@/components/Starsvg'

const TABS = [
  { id: 'overview',  l: 'Overview' },
  { id: 'homeo',     l: 'Homeopathy' },
  { id: 'diet',      l: 'Diet Chart' },
  { id: 'dosdont',   l: "Dos & Don'ts" },
  { id: 'medicines', l: 'Medicines' },
  { id: 'faq',       l: 'FAQ' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)', padding: '16px 0' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.5 }}>{q}</span>
        <span style={{ color: 'var(--gold)', fontSize: 20, fontWeight: 700, flexShrink: 0, transition: 'transform .2s', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      {open && <div style={{ fontSize: 14, color: 'var(--ink3)', lineHeight: 1.8, marginTop: 10, fontWeight: 300 }}>{a}</div>}
    </div>
  )
}

export default function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [disease, setDisease] = useState<any>(null)
  const [related, setRelated] = useState<any[]>([])
  const [tab, setTab] = useState('overview')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDiseaseBySlug(slug).then(d => { setDisease(d); setLoading(false) })
    getRelatedDiseases(slug, 3).then(setRelated)
  }, [slug])

  if (loading) return (
    <div style={{ paddingTop: 120, textAlign: 'center', background: 'var(--bg)', minHeight: '100vh' }}>
      <div style={{ width: 36, height: 36, border: '3px solid var(--gold)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto' }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )

  if (!disease) return (
    <div style={{ paddingTop: 120, textAlign: 'center', background: 'var(--bg)', minHeight: '100vh' }}>
      <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 24, color: 'var(--ink)', marginBottom: 12 }}>Ye page jald aayega</h2>
      <p style={{ color: 'var(--ink4)', marginBottom: 24 }}>Is disease ka guide abhi bana rahe hain — jald publish hoga.</p>
      <Link href="/diseases" style={{ color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>← Sabhi Diseases Dekhein</Link>
    </div>
  )

  const facts = [
    ['Condition', disease.quickFacts?.whatItIs || 'Chronic'],
    ['India Prevalence', disease.quickFacts?.howCommon || 'Common'],
    ['CCRH Studies', disease.ccrhEvidence?.citation ? '✓ Referenced' : '✓ Backed'],
    ['Treatment', disease.quickFacts?.treatmentDuration || '4-12 months'],
    ['Success Rate', disease.ccrhEvidence?.improvementRate || '60-70%'],
  ]

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '11px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', gap: 8, fontSize: 13, color: 'var(--ink4)' }}>
          <Link href="/" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/diseases" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Diseases</Link>
          <span>›</span>
          <span>{disease.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: 'clamp(28px,4vw,52px) clamp(16px,4vw,32px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(184,145,42,.1) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 48, alignItems: 'center', position: 'relative' }} className="dis-hero">
          <div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 18, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.3)' }}>🌿 {disease.category || 'Homeopathy'}</span>
              <span style={{ fontSize: 12, color: 'var(--ink4)' }}>· ✓ CCRH Backed · Doctor Reviewed</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(32px,5vw,54px)', fontWeight: 700, lineHeight: 1.12, color: 'var(--ink)', marginBottom: 8 }}>{disease.title}</h1>
            {disease.hindiName && <div style={{ fontSize: 22, color: 'var(--gold-dk)', fontFamily: 'var(--font-playfair,Georgia,serif)', fontStyle: 'italic', marginBottom: 20 }}>{disease.hindiName}</div>}
            {disease.heroText && <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.85, maxWidth: 540, fontWeight: 300 }}>{disease.heroText.slice(0, 220)}...</p>}
          </div>
          {/* Quick Facts card */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '26px', boxShadow: 'var(--sh)' }}>
            <div style={{ fontSize: 10, letterSpacing: 2, color: 'var(--gold-dk)', fontWeight: 600, marginBottom: 14, textTransform: 'uppercase' }}>Quick Facts</div>
            {facts.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
                <span style={{ color: 'var(--ink4)' }}>{k}</span>
                <span style={{ color: 'var(--ink2)', fontWeight: 500 }}>{v}</span>
              </div>
            ))}
            <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', marginTop: 18, padding: '13px', background: 'linear-gradient(135deg,#1a6b33,#25a244)', color: '#fff', borderRadius: 9, textDecoration: 'none', fontSize: 13, fontWeight: 600, boxShadow: '0 3px 12px rgba(37,162,68,.25)' }}>
              📲 Consult Dr. Shadab
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Tabs */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 64, zIndex: 100 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', overflowX: 'auto', padding: '0 clamp(16px,4vw,32px)' }} className="hide-scrollbar">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ background: 'none', border: 'none', padding: '16px 22px', cursor: 'pointer', fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap', color: tab === t.id ? 'var(--gold)' : 'var(--ink4)', borderBottom: tab === t.id ? '2px solid var(--gold)' : '2px solid transparent', transition: 'all .2s' }}>
              {t.l}
            </button>
          ))}
        </div>
      </div>

      {/* Content + Sidebar */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(36px,4vw,52px) clamp(16px,4vw,32px) clamp(52px,8vw,80px)', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40, alignItems: 'start' }} className="dis-layout">

        {/* MAIN CONTENT */}
        <div>

          {/* OVERVIEW */}
          {tab === 'overview' && (
            <>
              <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 28, fontWeight: 700, color: 'var(--ink)', marginBottom: 18 }}>{disease.title} kya hai?</h2>
              <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.9, marginBottom: 28, fontWeight: 300 }}>{disease.heroText || 'Ye ek chronic condition hai jo homeopathic treatment se bahut achhi response deti hai.'}</p>
              {disease.symptoms?.length > 0 && (
                <>
                  <h3 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 600, color: 'var(--ink)', marginBottom: 16 }}>Main Symptoms</h3>
                  <div style={{ display: 'grid', gap: 10 }}>
                    {disease.symptoms.map((s: any, i: number) => (
                      <div key={i} style={{ marginBottom: 8 }}>
                        {s.category && (
                          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--gold-dk)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>{s.category}</div>
                        )}
                        {s.items?.map((item: string, j: number) => (
                          <div key={j} style={{ display: 'flex', gap: 14, padding: '10px 16px', background: 'var(--card)', borderRadius: 9, border: '1px solid var(--border)', marginBottom: 6 }}>
                            <Starsvg s={14} o={0.7} />
                            <span style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.65 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              )}
              {disease.youtubeUrl && (
                <div style={{ marginTop: 32 }}>
                  <div style={{ aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', background: '#000' }}>
                    <iframe src={disease.youtubeUrl.replace('watch?v=', 'embed/')} style={{ width: '100%', height: '100%' }} allowFullScreen title={`Dr. Shadab explains ${disease.title}`} />
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--ink4)', textAlign: 'center', marginTop: 8 }}>Dr. Shadab Khan explains {disease.title}</p>
                </div>
              )}
            </>
          )}

          {/* HOMEOPATHY */}
          {tab === 'homeo' && (
            <>
              <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 28, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>Homeopathy Kaise Kaam Karta Hai?</h2>
              {disease.ccrhEvidence && (
                <div style={{ padding: '22px 24px', background: 'var(--gold-bg)', border: '1px solid rgba(184,145,42,.25)', borderRadius: 12, marginBottom: 28 }}>
                  <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.9, fontWeight: 300 }}>
                    {disease.ccrhEvidence.improvementRate && <><strong>CCRH Research:</strong> {disease.ccrhEvidence.improvementRate} patients mein significant improvement. </>}
                    {disease.ccrhEvidence.avgTreatmentPeriod && <>Average treatment period: {disease.ccrhEvidence.avgTreatmentPeriod}.</>}
                    {disease.ccrhEvidence.citation && <><br /><em style={{ fontSize: 12, color: 'var(--ink4)' }}>Source: {disease.ccrhEvidence.citation}</em></>}
                  </p>
                </div>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { i: '🎯', h: 'Root Cause Treatment',   b: 'Sirf symptoms nahi — underlying immune trigger ko address karta hai.' },
                  { i: '🧬', h: 'Constitutional Medicine', b: 'Har patient ke liye unique medicine — symptoms, nature, triggers ke hisaab se.' },
                  { i: '🌿', h: 'Zero Side Effects',       b: 'Natural medicines — safe for children, elderly, pregnant women bhi.' },
                  { i: '📊', h: 'CCRH Research Backed',   b: "Government of India ke research council ne homeopathy ko validate kiya hai." },
                ].map(c => (
                  <div key={c.h} style={{ padding: '22px', background: 'var(--card)', borderRadius: 12, border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: 26, marginBottom: 12 }}>{c.i}</div>
                    <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>{c.h}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.7, fontWeight: 300 }}>{c.b}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* DIET CHART */}
          {tab === 'diet' && (
            <>
              <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 28, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Diet Chart</h2>
              <p style={{ fontSize: 14, color: 'var(--ink4)', marginBottom: 24, fontWeight: 300 }}>Doctor-recommended diet — {disease.title} ke patients ke liye</p>
              {(disease.dietInclude?.length > 0 || disease.dietAvoid?.length > 0) ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-2">
                  {disease.dietInclude?.length > 0 && (
                    <div style={{ background: 'rgba(58,125,82,.04)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 16, padding: '22px' }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--green)', marginBottom: 14 }}>✓ Ye Zaroor Khayein</h3>
                      {disease.dietInclude.map((cat: any) => (
                        <div key={cat.category} style={{ marginBottom: 12 }}>
                          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{cat.category} {cat.emoji}</p>
                          {cat.items?.map((item: string) => (
                            <div key={item} style={{ display: 'flex', gap: 8, padding: '7px 10px', background: 'rgba(58,125,82,.05)', borderRadius: 7, marginBottom: 4, alignItems: 'flex-start' }}>
                              <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                              <span style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 500 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                  {disease.dietAvoid?.length > 0 && (
                    <div style={{ background: 'rgba(176,64,64,.04)', border: '1px solid rgba(176,64,64,.2)', borderRadius: 16, padding: '22px' }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--red)', marginBottom: 14 }}>✕ Ye Bilkul Mat Khayein</h3>
                      {disease.dietAvoid.map((cat: any) => (
                        <div key={cat.category} style={{ marginBottom: 12 }}>
                          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{cat.category} {cat.emoji}</p>
                          {cat.items?.map((item: string) => (
                            <div key={item} style={{ display: 'flex', gap: 8, padding: '7px 10px', background: 'rgba(176,64,64,.05)', borderRadius: 7, marginBottom: 4, alignItems: 'flex-start' }}>
                              <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: 1 }}>✕</span>
                              <span style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 500 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>🥗</div>
                  <p style={{ color: 'var(--ink3)', fontWeight: 300 }}>Is disease ka diet chart jald add hoga.</p>
                  <Link href="/diet" style={{ display: 'inline-block', marginTop: 16, color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>Sabhi Diet Charts Dekhein →</Link>
                </div>
              )}
            </>
          )}

          {/* DOS & DON'TS */}
          {tab === 'dosdont' && (
            <>
              <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 28, fontWeight: 700, color: 'var(--ink)', marginBottom: 24 }}>Dos &amp; Don&apos;ts</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-2">
                {disease.dos?.length > 0 && (
                  <div style={{ background: 'rgba(58,125,82,.04)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 16, padding: '22px' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--green)', marginBottom: 14 }}>✓ Ye Zaroor Karein</h3>
                    {disease.dos.map((d: string, i: number) => (
                      <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 12px', background: 'rgba(58,125,82,.05)', borderRadius: 8, marginBottom: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--green)', flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.65 }}>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
                {disease.donts?.length > 0 && (
                  <div style={{ background: 'rgba(176,64,64,.04)', border: '1px solid rgba(176,64,64,.2)', borderRadius: 16, padding: '22px' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--red)', marginBottom: 14 }}>✕ Ye Bilkul Mat Karein</h3>
                    {disease.donts.map((d: string, i: number) => (
                      <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 12px', background: 'rgba(176,64,64,.05)', borderRadius: 8, marginBottom: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--red)', flexShrink: 0 }}>✕</span>
                        <span style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.65 }}>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
                {!disease.dos?.length && !disease.donts?.length && (
                  <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                    <p style={{ color: 'var(--ink4)', fontWeight: 300 }}>Dos &amp; Don&apos;ts jald add honge.</p>
                  </div>
                )}
              </div>
            </>
          )}

          {/* MEDICINES */}
          {tab === 'medicines' && (
            <>
              <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 28, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Homeopathic Medicines</h2>
              <div style={{ padding: '12px 18px', background: 'rgba(184,145,42,.07)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 9, marginBottom: 24, fontSize: 13, color: 'var(--gold-dk)' }}>
                ⚠️ Ye sirf educational hai — doctor se consult ke bina medicine mat lein
              </div>
              {disease.medicines?.length > 0 ? (
                <div style={{ display: 'grid', gap: 14 }}>
                  {disease.medicines.map((m: any, i: number) => (
                    <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '20px 22px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <span style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>{m.name}</span>
                        {m.potency && <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.3)' }}>{m.potency}</span>}
                      </div>
                      {m.bestFor && <div style={{ fontSize: 13, color: 'var(--gold-dk)', fontStyle: 'italic', marginBottom: 8 }}>Best for: {m.bestFor}</div>}
                      {m.keyIndications?.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {m.keyIndications.map((ind: string, j: number) => (
                            <span key={j} style={{ fontSize: 12, padding: '4px 10px', borderRadius: 7, background: 'var(--bg2)', color: 'var(--ink3)', border: '1px solid var(--border)' }}>{ind}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                  <p style={{ color: 'var(--ink4)', fontWeight: 300 }}>Medicines list jald add hogi.</p>
                  <Link href="/medicines" style={{ display: 'inline-block', marginTop: 16, color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>Medicine Library Dekhein →</Link>
                </div>
              )}
            </>
          )}

          {/* FAQ */}
          {tab === 'faq' && (
            <>
              <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 28, fontWeight: 700, color: 'var(--ink)', marginBottom: 24 }}>Frequently Asked Questions</h2>
              {disease.faqs?.length > 0 ? (
                disease.faqs.map((f: any, i: number) => (
                  <FaqItem key={i} q={f.question || f.q} a={f.answer || f.a} />
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                  <p style={{ color: 'var(--ink4)', fontWeight: 300 }}>FAQs jald add honge.</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="dis-sidebar" style={{ position: 'sticky', top: 130 }}>
          {/* Consult CTA */}
          <div style={{ background: 'linear-gradient(135deg,#1a3d30 0%,#0f2419 100%)', borderRadius: 14, padding: '24px', marginBottom: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>📲</div>
            <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Consult Dr. Shadab</div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,.7)', marginBottom: 16, fontWeight: 300 }}>Personal consultation — case dekh ke treatment plan</p>
            <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '12px', background: '#25d366', color: '#fff', borderRadius: 9, textDecoration: 'none', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
              WhatsApp — Free
            </a>
            <a href="tel:+918983458889" style={{ display: 'block', padding: '10px', background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.85)', borderRadius: 9, textDecoration: 'none', fontSize: 12, border: '1px solid rgba(255,255,255,.15)' }}>
              📞 8983458889
            </a>
          </div>

          {/* Related diseases */}
          {related.length > 0 && (
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '18px', marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--gold-dk)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Related Diseases</div>
              {related.map((r: any) => (
                <Link key={r.slug?.current} href={`/diseases/${r.slug?.current}`} style={{ display: 'block', padding: '10px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none', fontSize: 13, color: 'var(--ink2)', fontWeight: 500, transition: 'color .2s' }}>
                  {r.title}
                  <span style={{ display: 'block', fontSize: 11, color: 'var(--ink4)', fontWeight: 300, marginTop: 2 }}>{r.metaDescription?.slice(0, 50)}...</span>
                </Link>
              ))}
            </div>
          )}

          {/* Diet chart link */}
          <Link href="/diet" style={{ display: 'block', padding: '16px 18px', background: 'rgba(58,125,82,.05)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 12, textDecoration: 'none', marginBottom: 16 }}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>🥗</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>Diet Charts Dekhein</div>
            <div style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 300 }}>Disease-wise complete diet guide — free</div>
          </Link>
        </div>
      </div>

      <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" className="fab">📲</a>
    </div>
  )
}
