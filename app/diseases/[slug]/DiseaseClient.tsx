'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Starsvg from '@/components/Starsvg'
import SL from '@/components/SL'

const SECTIONS = [
  { id: 'overview',  l: 'Overview' },
  { id: 'symptoms',  l: 'Symptoms' },
  { id: 'homeo',     l: 'Homeopathy' },
  { id: 'medicines', l: 'Medicines' },
  { id: 'diet',      l: 'Diet Chart' },
  { id: 'dosdont',   l: "Dos & Don'ts" },
  { id: 'faq',       l: 'FAQ' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 130
  window.scrollTo({ top, behavior: 'smooth' })
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div style={{ borderBottom: '1px solid var(--border)', padding: '18px 0' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.5 }}>{q}</span>
        <span style={{ color: 'var(--gold)', fontSize: 22, fontWeight: 700, flexShrink: 0, transition: 'transform .2s', transform: open ? 'rotate(45deg)' : 'none', marginTop: 2 }}>+</span>
      </button>
      {!open && (
        <p style={{ fontSize: 13, color: 'var(--ink4)', marginTop: 6, fontWeight: 300, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>{a}</p>
      )}
      {open && (
        <div style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.9, marginTop: 12, fontWeight: 300, borderLeft: '3px solid var(--gold)', paddingLeft: 16 }}>{a}</div>
      )}
    </div>
  )
}

function SecHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 28, fontWeight: 700, color: 'var(--ink)', marginBottom: sub ? 6 : 0 }}>{title}</h2>
      {sub && <p style={{ fontSize: 14, color: 'var(--ink4)', fontWeight: 300 }}>{sub}</p>}
    </div>
  )
}

export default function DiseaseClient({ disease, related }: { disease: any; related: any[] }) {
  const [activeSection, setActiveSection] = useState('overview')

  // JSON-LD structured data
  useEffect(() => {
    document.querySelectorAll('script[data-ld]').forEach(s => s.remove())

    if (disease.faqs?.length > 0) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.setAttribute('data-ld', 'faq')
      s.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: disease.faqs.map((f: any) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      })
      document.head.appendChild(s)
    }

    const s2 = document.createElement('script')
    s2.type = 'application/ld+json'
    s2.setAttribute('data-ld', 'medical')
    s2.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: disease.title,
      alternateName: disease.hindiName,
      description: disease.heroText,
      relevantSpecialty: 'Homeopathy',
      possibleTreatment: {
        '@type': 'MedicalTherapy',
        name: 'Homeopathic Treatment',
        description: 'Homeopathic treatment by Dr. Shadab Khan MD Homoeopathy, Reg. No. 54130'
      }
    })
    document.head.appendChild(s2)

    return () => { document.querySelectorAll('script[data-ld]').forEach(s => s.remove()) }
  }, [disease])

  // Scroll spy
  useEffect(() => {
    const handler = () => {
      for (const sec of [...SECTIONS].reverse()) {
        const el = document.getElementById(sec.id)
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(sec.id)
          return
        }
      }
      setActiveSection('overview')
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const WOW_FACTS = [
    disease.quickFacts?.whatItIs   && { emoji: '🧠', label: 'Ye Bimari Kya Hai',       value: disease.quickFacts.whatItIs },
    disease.quickFacts?.howCommon  && { emoji: '🇮🇳', label: 'India Mein Kitni Common', value: disease.quickFacts.howCommon },
    disease.quickFacts?.treatmentDuration && { emoji: '🕐', label: 'Treatment Duration', value: disease.quickFacts.treatmentDuration },
    disease.ccrhEvidence?.citation && { emoji: '🔬', label: 'Research',                 value: `Peer-Reviewed Study (${(disease.ccrhEvidence.citation.match(/\d{4}/) || [''])[0]})` },
  ].filter(Boolean) as { emoji: string; label: string; value: string }[]

  const reviewDate = disease.publishedAt
    ? new Date(disease.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

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
            {disease.heroText && <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.85, maxWidth: 540, fontWeight: 300 }}>{disease.heroText}</p>}

            {/* Medically Reviewed badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, padding: '8px 14px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12, color: 'var(--ink3)' }}>
              <span style={{ color: 'var(--green)' }}>✓</span>
              <span>Medically reviewed by <strong style={{ color: 'var(--ink2)' }}>Dr. Shadab Khan MD Homoeopathy</strong>{reviewDate ? ` · ${reviewDate}` : ''}</span>
            </div>
          </div>

          {/* Quick Facts */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '26px', boxShadow: 'var(--sh)' }}>
            <div style={{ fontSize: 10, letterSpacing: 2, color: 'var(--gold-dk)', fontWeight: 600, marginBottom: 16, textTransform: 'uppercase' }}>✦ Did You Know?</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
              {WOW_FACTS.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 14px', background: i % 2 === 0 ? 'rgba(184,145,42,.05)' : 'var(--bg2)', borderRadius: 10, border: '1px solid var(--border)', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20, flexShrink: 0, lineHeight: 1 }}>{f.emoji}</span>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold-dk)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{f.label}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.55, fontWeight: 400 }}>{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '13px', background: 'linear-gradient(135deg,#1a6b33,#25a244)', color: '#fff', borderRadius: 9, textDecoration: 'none', fontSize: 13, fontWeight: 600, boxShadow: '0 3px 12px rgba(37,162,68,.25)' }}>
              📲 Consult Dr. Shadab
            </a>
          </div>
        </div>
      </div>

      {/* Jump Navigation */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 64, zIndex: 100 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', overflowX: 'auto', padding: '0 clamp(16px,4vw,32px)' }} className="hide-scrollbar">
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => scrollTo(s.id)} style={{ background: 'none', border: 'none', padding: '16px 22px', cursor: 'pointer', fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap', color: activeSection === s.id ? 'var(--gold)' : 'var(--ink4)', borderBottom: activeSection === s.id ? '2px solid var(--gold)' : '2px solid transparent', transition: 'all .2s' }}>
              {s.l}
            </button>
          ))}
          {/* WhatsApp share */}
          <a href={`https://wa.me/?text=${encodeURIComponent(`${disease.title} ka homeopathic ilaj padho — homeopedia.in/diseases/${disease.slug?.current}`)}`} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', background: '#25d366', color: '#fff', borderRadius: 8, textDecoration: 'none', fontSize: 12, fontWeight: 600, flexShrink: 0, alignSelf: 'center', margin: 'auto 0 auto auto' }}>
            📲 Share
          </a>
        </div>
      </div>

      {/* Main Content + Sidebar */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(36px,4vw,52px) clamp(16px,4vw,32px) clamp(52px,8vw,80px)', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40, alignItems: 'start' }} className="dis-layout">
        <div>

          {/* OVERVIEW */}
          <section id="overview" style={{ marginBottom: 52 }}>
            <SecHead title={`${disease.title} Kya Hai?`} />
            <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.9, marginBottom: 28, fontWeight: 300 }}>{disease.heroText || 'Ye ek chronic condition hai jo homeopathic treatment se bahut achhi response deti hai.'}</p>

            {disease.causes?.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <h3 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 600, color: 'var(--ink)', marginBottom: 14 }}>Ye Bimari Kyun Hoti Hai?</h3>
                <div style={{ display: 'grid', gap: 8 }}>
                  {disease.causes.map((c: string, i: number) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>◆</span>
                      <span style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.65 }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {disease.riskFactors?.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <h3 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 600, color: 'var(--ink)', marginBottom: 12 }}>Kise Zyada Hoti Hai?</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {disease.riskFactors.map((r: string, i: number) => (
                    <span key={i} style={{ fontSize: 13, padding: '6px 14px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--ink2)', border: '1px solid rgba(184,145,42,.2)', fontWeight: 400 }}>{r}</span>
                  ))}
                </div>
              </div>
            )}

            {disease.complications?.length > 0 && (
              <div style={{ background: 'rgba(176,64,64,.04)', border: '1px solid rgba(176,64,64,.2)', borderRadius: 12, padding: '20px 22px' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--red)', marginBottom: 12 }}>⚠️ Agar Treat Na Karein To</h3>
                <div style={{ display: 'grid', gap: 6 }}>
                  {disease.complications.map((c: string, i: number) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: 1 }}>✕</span>
                      <span style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.65 }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* SYMPTOMS */}
          {disease.symptoms?.length > 0 && (
            <section id="symptoms" style={{ marginBottom: 52 }}>
              <SecHead title="Symptoms — Kya Mehsoos Hota Hai?" sub="In symptoms mein se kuch aapko hain? Ek baar doctor se zaroor milein." />
              {disease.symptoms.map((s: any, i: number) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  {s.category && <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--gold-dk)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>{s.category}</div>}
                  {s.items?.map((item: string, j: number) => (
                    <div key={j} style={{ display: 'flex', gap: 14, padding: '10px 16px', background: 'var(--card)', borderRadius: 9, border: '1px solid var(--border)', marginBottom: 6 }}>
                      <Starsvg s={14} o={0.7} />
                      <span style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.65 }}>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
              {/* Videos — single or multiple */}
              {(disease.youtubeUrl || disease.youtubeVideos?.length > 0) && (
                <div style={{ marginTop: 28 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 14 }}>📺 Dr. Shadab Khan ke Videos</h3>
                  {/* Multiple videos grid */}
                  {disease.youtubeVideos?.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
                      {disease.youtubeVideos.map((v: any, i: number) => {
                        const m = v.url?.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/)
                        const embedUrl = m ? `https://www.youtube.com/embed/${m[1]}` : v.url
                        return (
                          <div key={i}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
                              <iframe src={embedUrl} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={v.title || `Video ${i + 1}`} />
                            </div>
                            {v.title && <p style={{ fontSize: 12, color: 'var(--ink4)', marginTop: 6, textAlign: 'center', fontWeight: 400 }}>{v.title}</p>}
                          </div>
                        )
                      })}
                    </div>
                  ) : disease.youtubeUrl ? (
                    /* Single video */
                    (() => {
                      const m = disease.youtubeUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/)
                      const embedUrl = m ? `https://www.youtube.com/embed/${m[1]}` : disease.youtubeUrl
                      return (
                        <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
                          <iframe src={embedUrl} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={`Dr. Shadab explains ${disease.title}`} />
                        </div>
                      )
                    })()
                  ) : null}
                </div>
              )}
            </section>
          )}

          {/* HOMEOPATHY */}
          <section id="homeo" style={{ marginBottom: 52 }}>
            <SecHead title="Homeopathy Se Kaise Thik Hoga?" sub="Sirf symptoms nahi — root cause treat hota hai" />
            {disease.ccrhEvidence && (
              <div style={{ padding: '22px 24px', background: 'var(--gold-bg)', border: '1px solid rgba(184,145,42,.25)', borderRadius: 12, marginBottom: 24 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--gold-dk)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>CCRH Research Evidence</div>
                <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.9, fontWeight: 300 }}>
                  {disease.ccrhEvidence.improvementRate && <><strong>{disease.ccrhEvidence.improvementRate}</strong> patients mein significant improvement. </>}
                  {disease.ccrhEvidence.avgTreatmentPeriod && <>Average treatment period: <strong>{disease.ccrhEvidence.avgTreatmentPeriod}</strong>.</>}
                  {disease.ccrhEvidence.citation && <><br /><em style={{ fontSize: 12, color: 'var(--ink4)' }}>Source: {disease.ccrhEvidence.citation}</em></>}
                </p>
                {disease.ccrhEvidence.keyFindings?.length > 0 && (
                  <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: 'none' }}>
                    {disease.ccrhEvidence.keyFindings.map((f: string, i: number) => (
                      <li key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: 13, color: 'var(--ink2)' }}><span style={{ color: 'var(--gold)', flexShrink: 0 }}>✓</span>{f}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
              {[
                { i: '🎯', h: 'Root Cause Treatment', b: 'Sirf symptoms nahi — underlying immune trigger ko address karta hai.' },
                { i: '🧬', h: 'Constitutional Medicine', b: 'Har patient ke liye unique medicine — symptoms, nature, triggers ke hisaab se.' },
                { i: '🌿', h: 'Zero Side Effects', b: 'Natural medicines — safe for children, elderly, pregnant women bhi.' },
                { i: '📊', h: 'CCRH Research Backed', b: 'Government of India ke research council ne homeopathy ko validate kiya hai.' },
              ].map(c => (
                <div key={c.h} style={{ padding: '20px', background: 'var(--card)', borderRadius: 12, border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 26, marginBottom: 10 }}>{c.i}</div>
                  <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{c.h}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.7, fontWeight: 300 }}>{c.b}</div>
                </div>
              ))}
            </div>
            {disease.homeopathyBenefits?.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                {disease.homeopathyBenefits.map((b: string, i: number) => (
                  <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--border)', fontSize: 14, color: 'var(--ink2)' }}>
                    <span style={{ color: 'var(--green)', flexShrink: 0 }}>✓</span>{b}
                  </div>
                ))}
              </div>
            )}
            {disease.homeopathyLimitations?.length > 0 && (
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 10, padding: '16px 18px' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink3)', marginBottom: 8 }}>Honest Note — Kab Kam Kaam Karta Hai:</div>
                {disease.homeopathyLimitations.map((l: string, i: number) => (
                  <div key={i} style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.7, marginBottom: 4, fontWeight: 300 }}>· {l}</div>
                ))}
              </div>
            )}
          </section>

          {/* MEDICINES */}
          <section id="medicines" style={{ marginBottom: 52 }}>
            <SecHead title="Homeopathic Medicines" sub={`${disease.title} mein commonly used medicines — doctor guidance ke saath`} />
            <div style={{ padding: '12px 18px', background: 'rgba(184,145,42,.07)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 9, marginBottom: 20, fontSize: 13, color: 'var(--gold-dk)' }}>
              ⚠️ Ye sirf educational information hai — doctor se consult ke bina koi bhi medicine mat lein
            </div>
            {disease.medicines?.length > 0 ? (
              <div style={{ display: 'grid', gap: 14 }}>
                {disease.medicines.map((m: any, i: number) => (
                  <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '20px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <span style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>{m.name}</span>
                      {m.potency && <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.3)' }}>{m.potency}</span>}
                    </div>
                    {m.bestFor && <div style={{ fontSize: 13, color: 'var(--gold-dk)', fontStyle: 'italic', marginBottom: 10 }}>Best for: {m.bestFor}</div>}
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
              <div style={{ textAlign: 'center', padding: '36px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                <p style={{ color: 'var(--ink4)', fontWeight: 300 }}>Medicines list jald add hogi.</p>
                <Link href="/medicines" style={{ display: 'inline-block', marginTop: 12, color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>Medicine Library Dekhein →</Link>
              </div>
            )}
          </section>

          {/* DIET */}
          <section id="diet" style={{ marginBottom: 52 }}>
            <SecHead title="Diet Chart" sub={`${disease.title} ke patients ke liye doctor-recommended diet`} />
            {(disease.dietInclude?.length > 0 || disease.dietAvoid?.length > 0) ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-2">
                {disease.dietInclude?.length > 0 && (
                  <div style={{ background: 'rgba(58,125,82,.04)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 16, padding: '22px' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--green)', marginBottom: 14 }}>✓ Ye Zaroor Khayein</h3>
                    {disease.dietInclude.map((cat: any) => (
                      <div key={cat.category} style={{ marginBottom: 14 }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{cat.category} {cat.emoji}</p>
                        {cat.items?.map((item: string) => (
                          <div key={item} style={{ display: 'flex', gap: 8, padding: '7px 10px', background: 'rgba(58,125,82,.05)', borderRadius: 7, marginBottom: 4, alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                            <span style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 400 }}>{item}</span>
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
                      <div key={cat.category} style={{ marginBottom: 14 }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{cat.category} {cat.emoji}</p>
                        {cat.items?.map((item: string) => (
                          <div key={item} style={{ display: 'flex', gap: 8, padding: '7px 10px', background: 'rgba(176,64,64,.05)', borderRadius: 7, marginBottom: 4, alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: 1 }}>✕</span>
                            <span style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 400 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '36px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🥗</div>
                <p style={{ color: 'var(--ink3)', fontWeight: 300 }}>Is disease ka diet chart jald add hoga.</p>
                <Link href="/diet" style={{ display: 'inline-block', marginTop: 12, color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>Sabhi Diet Charts Dekhein →</Link>
              </div>
            )}

            {/* Diet Tip + Note boxes */}
            {disease.dietTip && (
              <div style={{ marginTop: 20, padding: '16px 20px', background: 'rgba(184,145,42,.08)', border: '1px solid rgba(184,145,42,.25)', borderRadius: 12, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>💡</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold-dk)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Pro Tip</p>
                  <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, fontWeight: 300 }}>{disease.dietTip}</p>
                </div>
              </div>
            )}
            {disease.dietNote && (
              <div style={{ marginTop: 12, padding: '16px 20px', background: 'rgba(58,125,82,.06)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 12, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Important Note</p>
                  <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, fontWeight: 300 }}>{disease.dietNote}</p>
                </div>
              </div>
            )}

            {/* Weekly Meal Plan */}
            {disease.weeklyPlan?.length > 0 && (
              <div style={{ marginTop: 32 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>7 Din Ka Diet Chart</h3>
                <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 18, fontWeight: 300 }}>Ek haafte ka complete meal plan — {disease.title} ke patients ke liye</p>
                <div style={{ overflowX: 'auto', borderRadius: 14, border: '1px solid var(--border)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                    <thead>
                      <tr style={{ background: 'linear-gradient(135deg,var(--gold-dk),var(--gold-lt))' }}>
                        {['Din', 'Subah (Naashta)', 'Mid Morning', 'Dopahar (Lunch)', 'Shaam (4-5 PM)', 'Raat (Dinner)'].map((h) => (
                          <th key={h} style={{ padding: '12px 14px', fontSize: 11, fontWeight: 700, color: '#fff', textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {disease.weeklyPlan.map((row: any, i: number) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '12px 14px', fontSize: 13, fontWeight: 700, color: 'var(--gold-dk)', whiteSpace: 'nowrap' }}>{row.day}</td>
                          <td style={{ padding: '12px 14px', fontSize: 13, color: 'var(--ink2)', lineHeight: 1.55 }}>{row.breakfast || '—'}</td>
                          <td style={{ padding: '12px 14px', fontSize: 13, color: 'var(--ink2)', lineHeight: 1.55 }}>{row.midMorning || '—'}</td>
                          <td style={{ padding: '12px 14px', fontSize: 13, color: 'var(--ink2)', lineHeight: 1.55 }}>{row.lunch || '—'}</td>
                          <td style={{ padding: '12px 14px', fontSize: 13, color: 'var(--ink2)', lineHeight: 1.55 }}>{row.evening || '—'}</td>
                          <td style={{ padding: '12px 14px', fontSize: 13, color: 'var(--ink2)', lineHeight: 1.55 }}>{row.dinner || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 10, fontWeight: 300 }}>* Ye ek sample plan hai. Apne homoeopath ya nutritionist se apni zaroorat ke hisab se modify karein.</p>
              </div>
            )}
          </section>

          {/* DOS & DON'TS */}
          <section id="dosdont" style={{ marginBottom: 52 }}>
            <SecHead title="Dos & Don'ts" sub="Lifestyle changes jo treatment mein help karte hain" />
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
                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '36px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                  <p style={{ color: 'var(--ink4)', fontWeight: 300 }}>Dos &amp; Don&apos;ts jald add honge.</p>
                </div>
              )}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: 52 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <SL c="Frequently Asked Questions" />
              {disease.faqs?.length > 0 && (
                <span style={{ fontSize: 12, padding: '3px 10px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.2)' }}>{disease.faqs.length} FAQs</span>
              )}
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 28, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Sabse Zyada Pooche Jaane Wale Sawal</h2>
            <p style={{ fontSize: 14, color: 'var(--ink4)', fontWeight: 300, marginBottom: 24 }}>Clinic mein patients jo questions poochte hain — unke honest jawab</p>
            {disease.faqs?.length > 0 ? (
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '8px 24px' }}>
                {disease.faqs.map((f: any, i: number) => (
                  <FaqItem key={i} q={f.question || f.q} a={f.answer || f.a} defaultOpen={i === 0} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '36px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                <p style={{ color: 'var(--ink4)', fontWeight: 300 }}>FAQs jald add honge.</p>
              </div>
            )}
          </section>

          {/* SOURCES */}
          {disease.sources?.length > 0 && (
            <section style={{ marginBottom: 40 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--ink4)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>Sources & Citations</div>
              {disease.sources.map((s: any, i: number) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: 'var(--ink4)', marginBottom: 6 }}>
                  <span style={{ flexShrink: 0 }}>[{i + 1}]</span>
                  <span>{s.url ? <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dk)', textDecoration: 'underline' }}>{s.name}</a> : s.name}{s.year && ` (${s.year})`}</span>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="dis-sidebar" style={{ position: 'sticky', top: 130 }}>
          <div style={{ background: 'linear-gradient(135deg,#1a3d30 0%,#0f2419 100%)', borderRadius: 14, padding: '24px', marginBottom: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>📲</div>
            <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Consult Dr. Shadab</div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,.7)', marginBottom: 16, fontWeight: 300 }}>Personal consultation — case dekh ke treatment plan</p>
            <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '12px', background: '#25d366', color: '#fff', borderRadius: 9, textDecoration: 'none', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>WhatsApp — Free</a>
            <a href="tel:+918983458889" style={{ display: 'block', padding: '10px', background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.85)', borderRadius: 9, textDecoration: 'none', fontSize: 12, border: '1px solid rgba(255,255,255,.15)' }}>📞 8983458889</a>
          </div>

          {related.length > 0 && (
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '18px', marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--gold-dk)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Related Diseases</div>
              {related.map((r: any) => (
                <Link key={r.slug?.current} href={`/diseases/${r.slug?.current}`} style={{ display: 'block', padding: '10px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none', fontSize: 13, color: 'var(--ink2)', fontWeight: 500 }}>
                  {r.title}
                  {r.hindiName && <span style={{ display: 'block', fontSize: 11, color: 'var(--ink4)', fontStyle: 'italic', fontWeight: 300, marginTop: 2 }}>{r.hindiName}</span>}
                </Link>
              ))}
            </div>
          )}

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
