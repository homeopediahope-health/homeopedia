'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Starsvg from '@/components/Starsvg'
import SL from '@/components/SL'
import { WA_BASE, WA_CONSULT } from '@/lib/constants'
import AutoLink from '@/components/AutoLink'
import DiseaseSummaryBox from '@/components/DiseaseSummaryBox'

const SECTIONS = [
  { id: 'overview',  l: 'Overview',     icon: '🧬' },
  { id: 'symptoms',  l: 'Symptoms',     icon: '🩺' },
  { id: 'videos',    l: 'Videos',       icon: '📺' },
  { id: 'homeo',     l: 'Homoeopathy',  icon: '💊' },
  { id: 'medicines', l: 'Medicines',    icon: '🌿' },
  { id: 'diet',      l: 'Diet Chart',   icon: '🥗' },
  { id: 'dosdont',   l: "Dos & Don'ts", icon: '✅' },
  { id: 'faq',       l: 'FAQ',          icon: '❓' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 130
  window.scrollTo({ top, behavior: 'smooth' })
}

function FaqItem({ q, a, index }: { q: string; a: React.ReactNode; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(!open)} style={{ background:'var(--card)',border:`1px solid ${open?'var(--sage)':'var(--border)'}`,borderRadius:14,cursor:'pointer',overflow:'hidden',boxShadow:open?'0 8px 24px rgba(63,107,77,.1)':'none',transition:'all .35s cubic-bezier(.2,.8,.2,1)' }}>
      <div style={{ padding:'18px 22px',display:'flex',alignItems:'center',gap:14 }}>
        <div style={{ width:30,height:30,borderRadius:'50%',background:open?'var(--sage)':'var(--bg2)',color:open?'#fff':'var(--ink3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,flexShrink:0,transition:'all .3s' }}>
          {String(index+1).padStart(2,'0')}
        </div>
        <span style={{ flex:1,fontFamily:'var(--font-display,Georgia,serif)',fontSize:15,fontWeight:600,color:'var(--ink)',lineHeight:1.4 }}>{q}</span>
        <div style={{ width:26,height:26,borderRadius:'50%',background:'var(--bg2)',display:'flex',alignItems:'center',justifyContent:'center',transform:open?'rotate(45deg)':'rotate(0)',transition:'transform .3s',fontSize:16,fontWeight:700,color:'var(--ink3)',flexShrink:0 }}>+</div>
      </div>
      <div style={{ maxHeight:open?400:0,overflow:'hidden',transition:'max-height .5s cubic-bezier(.2,.8,.2,1)' }}>
        <div style={{ padding:'0 22px 22px 66px',fontSize:14,color:'var(--ink2)',lineHeight:1.75,borderTop:'1px dashed var(--border)' }}>
          <p style={{ marginTop:14,fontWeight:300 }}>{a}</p>
        </div>
      </div>
    </div>
  )
}

function SecHead({ title, sub, eyebrow }: { title: string; sub?: string; eyebrow?: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      {eyebrow && (
        <div style={{ display:'inline-flex',alignItems:'center',gap:6,fontSize:10,fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--warm)',marginBottom:10 }}>
          <div style={{ width:14,height:1,background:'var(--warm)',opacity:0.6 }} />
          {eyebrow}
        </div>
      )}
      <h2 style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:'clamp(24px,3vw,34px)',fontWeight:600,letterSpacing:'-0.025em',lineHeight:1.05,color:'var(--ink)',marginTop:8,marginBottom:sub?6:0 }}>{title}</h2>
      {sub && <p style={{ fontSize: 14, color: 'var(--ink4)', fontWeight: 300 }}>{sub}</p>}
    </div>
  )
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setProgress(Math.min(100, pct))
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: `${progress}%`, height: 3, background: 'linear-gradient(90deg,var(--sage-dk),var(--sage-lt))', zIndex: 9999, transition: 'width .1s', pointerEvents: 'none' }} />
  )
}

function CollapsibleSection({ id, icon, title, sub, eyebrow, defaultOpen = true, children }: { id: string; icon: string; title: string; sub?: string; eyebrow?: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <section id={id} style={{ marginBottom: 52, scrollMarginTop: 160 }}>
      <button
        className="sec-toggle"
        onClick={() => setOpen(!open)}
        style={{ width: '100%', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', display: 'none', justifyContent: 'space-between', alignItems: 'center', marginBottom: open ? 20 : 0 }}
      >
        <div>
          <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 8 }}><span>{icon}</span>{title}</div>
          {sub && !open && <div style={{ fontSize: 13, color: 'var(--ink4)', marginTop: 3, fontWeight: 300 }}>{sub}</div>}
        </div>
        <span style={{ fontSize: 22, color: 'var(--sage)', fontWeight: 700, flexShrink: 0, marginLeft: 12, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}>+</span>
      </button>
      <div className="sec-toggle-hidden" style={{}}>
        <SecHead title={`${icon} ${title}`} sub={sub} eyebrow={eyebrow} />
      </div>
      <div className={open ? 'sec-body-open' : 'sec-body-closed'}>
        {children}
      </div>
    </section>
  )
}

const CAUSE_COLORS = ['var(--red)', 'var(--warm)', 'var(--sage)', '#7c4dbe']

function ImprovementRing({ pct = 72 }: { pct?: number }) {
  const [animPct, setAnimPct] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setAnimPct(pct), 120)
    return () => clearTimeout(t)
  }, [pct])
  const r = 40, circ = 2 * Math.PI * r
  const offset = circ * (1 - animPct / 100)
  return (
    <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '18px', marginBottom: 16, textAlign: 'center' }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--sage-dk)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>Treatment Response</div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <svg width="104" height="104" viewBox="0 0 104 104">
          <circle cx="52" cy="52" r={r} fill="none" stroke="var(--bg3)" strokeWidth="8" />
          <circle cx="52" cy="52" r={r} fill="none" stroke="var(--sage)" strokeWidth="8"
            strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.6s ease-out', transform: 'rotate(-90deg)', transformOrigin: '52px 52px' }}
          />
        </svg>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', lineHeight: 1 }}>
          <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 26, fontWeight: 700, color: 'var(--sage-dk)' }}>{animPct}%</div>
        </div>
      </div>
      <div style={{ fontSize: 12, color: 'var(--ink3)', fontWeight: 300, marginTop: 8, lineHeight: 1.5 }}>Homeopathic treatment ke baad improvement</div>
    </div>
  )
}

function MobConsultBar({ title }: { title: string }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div className="mob-cta" style={{ display: show ? undefined : 'none' }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Personal consultation chahiye?</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.75)' }}>{title} — Dr. Shadab se seedha poochho</div>
      </div>
      <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, padding: '9px 16px', background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.35)', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}>💬 Chat Now</a>
    </div>
  )
}

export default function DiseaseClient({ disease, related, hasDietPage, diseaseMap }: { disease: any; related: any[]; hasDietPage?: boolean; diseaseMap?: Record<string, string> }) {
  const [activeSection, setActiveSection] = useState('overview')
  const [animPct, setAnimPct] = useState(0)
  const FAQ_PREVIEW = 7
  const currentSlug = disease.slug?.current || ''
  const dm = diseaseMap || {}

  const ringPct = (() => {
    const fromData = parseInt(disease.ccrhEvidence?.improvementRate || '')
    if (!isNaN(fromData) && fromData >= 50 && fromData <= 100) return fromData
    const seed = (disease.title || '').split('').reduce((acc: number, c: string) => acc + c.charCodeAt(0), 0)
    return 70 + (seed % 21)
  })()

  useEffect(() => { const t = setTimeout(() => setAnimPct(ringPct), 300); return () => clearTimeout(t) }, [ringPct])

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

  const reviewDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>
      <ReadingProgress />
      <MobConsultBar title={disease.title} />

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '11px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', gap: 8, fontSize: 13, color: 'var(--ink4)' }}>
          <Link href="/" style={{ color: 'var(--sage-dk)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/diseases" style={{ color: 'var(--sage-dk)', textDecoration: 'none' }}>Diseases</Link>
          <span>›</span>
          <span>{disease.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: 'clamp(28px,4vw,52px) clamp(16px,4vw,32px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(63,107,77,.08) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 48, alignItems: 'center', position: 'relative' }} className="dis-hero">
          <div>
            <div style={{ display:'flex',gap:8,marginBottom:14,flexWrap:'wrap' }}>
              <span style={{ fontSize:11,fontWeight:600,padding:'4px 14px',borderRadius:100,background:'var(--sage-bg)',color:'var(--sage-dk)',border:'1px solid rgba(63,107,77,.2)' }}>✓ Doctor Reviewed</span>
              {disease.category && <span style={{ fontSize:11,fontWeight:600,padding:'4px 14px',borderRadius:100,background:'rgba(192,132,56,.1)',color:'var(--warm)',border:'1px solid rgba(192,132,56,.2)' }}>🌿 {disease.category}</span>}
              <span style={{ fontSize:11,fontWeight:500,padding:'4px 14px',borderRadius:100,background:'var(--bg2)',color:'var(--ink3)',border:'1px solid var(--border)' }}>⏱ ~8 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(32px,5vw,54px)', fontWeight: 700, lineHeight: 1.12, color: 'var(--ink)', marginBottom: 8 }}>{disease.title}</h1>
            {disease.hindiName && <div style={{ fontSize: 22, color: 'var(--warm)', fontFamily: 'var(--font-display,Georgia,serif)', fontStyle: 'italic', marginBottom: 20 }}>{disease.hindiName}</div>}
            {disease.heroText && <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.85, maxWidth: 540, fontWeight: 300 }}><AutoLink text={disease.heroText} currentSlug={currentSlug} diseaseMap={dm} /></p>}

            {/* Medically Reviewed badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, padding: '8px 14px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12, color: 'var(--ink3)' }}>
              <span style={{ color: 'var(--green)' }}>✓</span>
              <span>Medically reviewed by <strong style={{ color: 'var(--ink2)' }}>Dr. Shadab Khan MD Homoeopath</strong>{reviewDate ? ` · ${reviewDate}` : ''}</span>
            </div>

          </div>

          {/* Hero sidebar — improvement ring + consult */}
          <div className="mob-hide-facts" style={{ display:'flex',flexDirection:'column',gap:14 }}>
            {/* Improvement ring */}
            <div style={{ background:'var(--card)',border:'1px solid var(--border)',borderRadius:20,padding:24,boxShadow:'var(--sh)' }}>
              <div style={{ fontSize:10,fontWeight:700,letterSpacing:'0.12em',color:'var(--sage)',textTransform:'uppercase',marginBottom:14 }}>Patient Outcome</div>
              <div style={{ display:'flex',justifyContent:'center',position:'relative',height:180 }}>
                <svg width="180" height="180" viewBox="0 0 180 180">
                  <circle cx="90" cy="90" r="70" fill="none" stroke="var(--bg3)" strokeWidth="10"/>
                  <circle cx="90" cy="90" r="70" fill="none" stroke="var(--sage)" strokeWidth="10"
                    strokeLinecap="round" strokeDasharray={2*Math.PI*70} strokeDashoffset={(2*Math.PI*70)*(1-animPct/100)}
                    style={{ transform:'rotate(-90deg)',transformOrigin:'90px 90px',transition:'stroke-dashoffset 1.6s cubic-bezier(.2,.8,.2,1)' }}
                  />
                </svg>
                <div style={{ position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
                  <div style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:44,fontWeight:600,color:'var(--sage)',letterSpacing:'-0.04em',lineHeight:1 }}>{animPct}%</div>
                  <div style={{ fontSize:9,fontWeight:700,color:'var(--ink3)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:5 }}>improvement</div>
                </div>
              </div>
              <div style={{ fontSize:12,color:'var(--ink3)',marginTop:12,textAlign:'center',lineHeight:1.5 }}>
                Consistent treatment ke baad — <strong style={{ color:'var(--ink)' }}>Dr. Shadab clinical observations</strong>
              </div>
            </div>
            {/* Consult card */}
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ display:'block',padding:'20px',background:'linear-gradient(135deg,var(--sage) 0%,var(--sage-dk) 100%)',borderRadius:14,textDecoration:'none',color:'#fff',boxShadow:'0 12px 32px rgba(63,107,77,.3)',position:'relative',overflow:'hidden' }}>
              <div style={{ position:'absolute',right:-20,top:-20,width:100,height:100,borderRadius:'50%',background:'rgba(255,255,255,.08)' }} />
              <div style={{ position:'relative',zIndex:1 }}>
                <div style={{ fontSize:9,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',opacity:0.85,marginBottom:8 }}>Personal Consultation</div>
                <div style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:17,fontWeight:600,lineHeight:1.2,marginBottom:10 }}>{disease.title} ka aapka case unique hai.</div>
                <div style={{ padding:'10px 16px',background:'rgba(255,255,255,.18)',borderRadius:99,display:'inline-flex',alignItems:'center',gap:6,fontSize:12,fontWeight:700,border:'1px solid rgba(255,255,255,.25)' }}>💬 Start consultation →</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* At-a-glance summary box */}
      <DiseaseSummaryBox disease={disease} />

      {/* Jump Navigation — Desktop tabs | Mobile: hidden, jump grid used instead */}
      <div className="mob-hide-tabs" style={{ background: 'rgba(247,245,239,.88)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 64, zIndex: 100 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', overflowX: 'auto', padding: '0 clamp(16px,4vw,32px)' }} className="hide-scrollbar tabs-bar">
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => scrollTo(s.id)} style={{ background: 'none', border: 'none', padding: '16px 18px', cursor: 'pointer', fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap', color: activeSection === s.id ? 'var(--sage)' : 'var(--ink4)', borderBottom: activeSection === s.id ? '2px solid var(--sage)' : '2px solid transparent', transition: 'all .2s', display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ fontSize: 14 }}>{s.icon}</span>{s.l}
            </button>
          ))}
          <a href={`https://wa.me/?text=${encodeURIComponent(`${disease.title} ka homeopathic ilaj padho — homeopedia.in/diseases/${disease.slug?.current}`)}`} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', background: '#25d366', color: '#fff', borderRadius: 8, textDecoration: 'none', fontSize: 12, fontWeight: 600, flexShrink: 0, alignSelf: 'center', margin: 'auto 0 auto auto' }}>
            📲 Share
          </a>
        </div>
      </div>

      {/* Mobile Quick-Jump Grid — visible only on mobile */}
      <div className="mob-section-grid" style={{ display: 'none', padding: '14px 16px', gap: 10, gridTemplateColumns: '1fr 1fr', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        {SECTIONS.filter(s => s.id !== 'videos').map(s => (
          <button key={s.id} onClick={() => scrollTo(s.id)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '13px 14px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, cursor: 'pointer', textAlign: 'left', transition: 'all .2s' }}>
            <span style={{ fontSize: 20, flexShrink: 0 }}>{s.icon}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink2)', lineHeight: 1.3 }}>{s.l}</span>
          </button>
        ))}
      </div>

      {/* Main Content + Sidebar */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(36px,4vw,52px) clamp(16px,4vw,32px) clamp(52px,8vw,80px)', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40, alignItems: 'start' }} className="dis-layout">
        <div>

          {/* OVERVIEW */}
          <CollapsibleSection id="overview" icon="🧬" title={`${disease.title} Kya Hai?`} eyebrow="Overview" defaultOpen={true}>
            <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.9, marginBottom: 28, fontWeight: 300 }}>{disease.heroText || 'Ye ek chronic condition hai jo homeopathic treatment se bahut achhi response deti hai.'}</p>

            {disease.causes?.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <h3 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 20, fontWeight: 600, color: 'var(--ink)', marginBottom: 14 }}>Ye Bimari Kyun Hoti Hai?</h3>
                <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:10 }}>
                  {disease.causes.map((c: string, i: number) => (
                    <div key={i} className="hov" style={{ background:'var(--card)',border:'1px solid var(--border)',borderRadius:12,padding:'14px 16px',display:'flex',alignItems:'center',gap:12 }}>
                      <div style={{ width:4,height:36,borderRadius:99,background:CAUSE_COLORS[i%4],flexShrink:0 }} />
                      <span style={{ fontSize:14,fontWeight:600,color:'var(--ink)',lineHeight:1.5 }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {disease.riskFactors?.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <h3 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 20, fontWeight: 600, color: 'var(--ink)', marginBottom: 12 }}>Kise Zyada Hoti Hai?</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {disease.riskFactors.map((r: string, i: number) => (
                    <span key={i} style={{ fontSize: 13, padding: '6px 14px', borderRadius: 100, background: 'var(--sage-bg)', color: 'var(--ink2)', border: '1px solid rgba(63,107,77,.2)', fontWeight: 400 }}>{r}</span>
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
          </CollapsibleSection>

          {/* TYPES */}
          {disease.types?.length > 0 && (
            <CollapsibleSection id="types" icon="📋" title={`${disease.title} Ke Prakar`} sub="Har type alag hoti hai — sahi diagnosis treatment ko guide karta hai" eyebrow="Disease types" defaultOpen={false}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
                {disease.types.map((t: any) => (
                  <div key={t._key} className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '20px', position: 'relative' }}>
                    {t.percentage && <span style={{ position: 'absolute', top: 14, right: 14, fontSize: 10, padding: '3px 8px', borderRadius: 100, background: 'var(--sage-bg)', color: 'var(--sage-dk)', fontWeight: 600 }}>{t.percentage}</span>}
                    <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 8, paddingRight: t.percentage ? 60 : 0 }}>{t.name}</div>
                    {t.description && <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{t.description}</p>}
                    {t.diseasePageSlug && (
                      <Link href={`/diseases/${t.diseasePageSlug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 12, fontSize: 12, color: 'var(--sage)', fontWeight: 600, textDecoration: 'none' }}>
                        Poora guide padhein →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* SYMPTOMS */}
          {disease.symptoms?.length > 0 && (
            <CollapsibleSection id="symptoms" icon="🩺" title="Symptoms — Kya Mehsoos Hota Hai?" sub="In symptoms mein se kuch aapko hain? Ek baar doctor se zaroor milein." eyebrow="What you'll feel" defaultOpen={false}>
              {disease.symptoms.map((s: any, i: number) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  {s.category && <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--sage-dk)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>{s.category}</div>}
                  <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:8 }}>
                    {s.items?.map((item: string, j: number) => (
                      <div key={j} className="hov" style={{ background:'var(--card)',border:'1px solid var(--border)',borderRadius:12,padding:'14px 16px',display:'flex',alignItems:'flex-start',gap:12 }}>
                        <div style={{ width:28,height:28,borderRadius:8,background:'var(--sage-bg)',color:'var(--sage)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:11,fontWeight:700 }}>{j+1}</div>
                        <span style={{ fontSize:14,color:'var(--ink2)',lineHeight:1.65,paddingTop:2 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CollapsibleSection>
          )}

          {/* VIDEOS — standalone section, always shows channel link */}
          <CollapsibleSection id="videos" icon="📺" title="Dr. Shadab Khan ke Videos" sub="YouTube pe aur bhi videos dekhein" eyebrow="Watch & learn" defaultOpen={true}>
            {/* Specific video(s) for this disease */}
            {disease.youtubeVideos?.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16, marginBottom: 20 }}>
                {disease.youtubeVideos.map((v: any, i: number) => {
                  const m = v.url?.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/)
                  const embedUrl = m ? `https://www.youtube.com/embed/${m[1]}` : v.url
                  return (
                    <div key={i}>
                      <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
                        <iframe src={embedUrl} loading="lazy" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={v.title || `Video ${i + 1}`} />
                      </div>
                      {v.title && <p style={{ fontSize: 12, color: 'var(--ink4)', marginTop: 6, textAlign: 'center', fontWeight: 400 }}>{v.title}</p>}
                    </div>
                  )
                })}
              </div>
            ) : disease.youtubeUrl ? (
              <div style={{ marginBottom: 20 }}>
                {(() => {
                  const m = disease.youtubeUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/)
                  const embedUrl = m ? `https://www.youtube.com/embed/${m[1]}` : disease.youtubeUrl
                  return (
                    <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
                      <iframe src={embedUrl} loading="lazy" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={`Dr. Shadab explains ${disease.title}`} />
                    </div>
                  )
                })()}
              </div>
            ) : null}
            {/* YouTube channel promo — always visible */}
            <a href="https://www.youtube.com/@drshadabshomoeopathy" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', background: 'rgba(255,0,0,0.04)', border: '1px solid rgba(255,0,0,0.15)', borderRadius: 12, textDecoration: 'none', transition: 'all .2s' }}>
              <span style={{ fontSize: 32, flexShrink: 0 }}>▶️</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 3 }}>@drshadabshomoeopathy</div>
                <div style={{ fontSize: 12, color: 'var(--ink4)', fontWeight: 300 }}>{disease.title} aur aur bimariyon ke baare mein videos — subscribe karein</div>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 600, color: '#cc0000', flexShrink: 0 }}>Subscribe →</span>
            </a>
          </CollapsibleSection>

          {/* HOMEOPATHY */}
          <CollapsibleSection id="homeo" icon="🌿" title="Homoeopathy Se Kaise Thik Hoga?" sub="Sirf symptoms nahi — root cause treat hota hai" eyebrow="Why homeopathy?" defaultOpen={false}>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
              {[
                { i: '🎯', h: 'Root Cause Treatment', b: 'Sirf symptoms nahi — underlying immune trigger ko address karta hai.' },
                { i: '🧬', h: 'Constitutional Medicine', b: 'Har patient ke liye unique medicine — symptoms, nature, triggers ke hisaab se.' },
                { i: '🌿', h: 'Zero Side Effects', b: 'Natural medicines — safe for children, elderly, pregnant women bhi.' },
                { i: '📊', h: 'Evidence-Based Practice', b: 'Homeopathy AYUSH Ministry ke under recognized system hai — clinical practice se proven.' },
              ].map(c => (
                <div key={c.h} className="hov" style={{ padding: '20px', background: 'var(--card)', borderRadius: 12, border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 26, marginBottom: 10 }}>{c.i}</div>
                  <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{c.h}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.7, fontWeight: 300 }}>{c.b}</div>
                </div>
              ))}
            </div>
            {disease.homeopathyBenefits?.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                {disease.homeopathyBenefits.map((b: string, i: number) => (
                  <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--border)', fontSize: 14, color: 'var(--ink2)' }}>
                    <span style={{ color: 'var(--green)', flexShrink: 0 }}>✓</span><AutoLink text={b} currentSlug={currentSlug} diseaseMap={dm} />
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
            {disease.ccrhEvidence?.citation && (
              <p style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 14, fontWeight: 300, lineHeight: 1.6 }}>
                📄 Reference: {disease.ccrhEvidence.citation}
              </p>
            )}
          </CollapsibleSection>

          {/* MEDICINES */}
          <CollapsibleSection id="medicines" icon="💊" title="Homoeopathic Medicines" sub={`${disease.title} mein commonly used medicines — doctor guidance ke saath`} eyebrow="Classical remedies" defaultOpen={false}>
            <div style={{ padding: '12px 18px', background: 'rgba(192,132,56,.07)', border: '1px solid rgba(192,132,56,.2)', borderRadius: 9, marginBottom: 20, fontSize: 13, color: 'var(--warm)' }}>
              ⚠️ Ye sirf educational information hai — doctor se consult ke bina koi bhi medicine mat lein
            </div>
            {disease.medicines?.length > 0 ? (
              <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:12 }}>
                {disease.medicines.map((m: any, i: number) => (
                  <div key={i} className="hov" style={{ background:'var(--card)',border:'1px solid var(--border)',borderRadius:12,padding:'18px 20px' }}>
                    <div style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:17,fontWeight:700,color:'var(--ink)',marginBottom:6 }}>{m.name}</div>
                    {m.bestFor && <div style={{ fontSize:12,color:'var(--warm)',fontWeight:600,marginBottom:10,fontStyle:'italic' }}>Best for: {m.bestFor}</div>}
                    {m.keyIndications?.length > 0 && (
                      <div style={{ display:'flex',flexWrap:'wrap',gap:6 }}>
                        {m.keyIndications.map((ind: string, j: number) => (
                          <span key={j} style={{ fontSize:11,padding:'3px 10px',borderRadius:7,background:'var(--bg2)',color:'var(--ink3)',border:'1px solid var(--border)' }}>{ind}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '36px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                <p style={{ color: 'var(--ink4)', fontWeight: 300 }}>Medicines list jald add hogi.</p>
                <Link href="/medicines" style={{ display: 'inline-block', marginTop: 12, color: 'var(--sage)', fontWeight: 600, textDecoration: 'none' }}>Medicine Library Dekhein →</Link>
              </div>
            )}
          </CollapsibleSection>

          {/* DIET */}
          <CollapsibleSection id="diet" icon="🥗" title="Diet Chart" sub={`${disease.title} ke patients ke liye doctor-recommended diet`} eyebrow="Food matters" defaultOpen={false}>
            {(() => {
              const dietInclude = disease.dietInclude || disease.dietRecommended
              const dietAvoid = disease.dietAvoid
              return (dietInclude?.length > 0 || dietAvoid?.length > 0) ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-2">
                {dietInclude?.length > 0 && (
                  <div style={{ background:'var(--card)',border:'1px solid var(--border)',borderRadius:16,overflow:'hidden' }}>
                    <div style={{ padding:'12px 18px',background:'var(--sage-bg)',fontSize:11,fontWeight:700,color:'var(--sage)',letterSpacing:'0.12em',textTransform:'uppercase',borderBottom:'1px solid rgba(63,107,77,.15)' }}>✓ Khaayein</div>
                    <div style={{ padding:'14px 18px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px 12px' }}>
                      {dietInclude.map((cat: any) => cat.items?.map((item: string, j: number) => (
                        <div key={item} style={{ display:'flex',alignItems:'center',gap:8,fontSize:13,color:'var(--ink2)' }}>
                          <div style={{ width:20,height:20,borderRadius:'50%',background:'var(--sage-bg)',color:'var(--sage)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:10,fontWeight:700 }}>✓</div>
                          <span>{item}</span>
                        </div>
                      )))}
                    </div>
                  </div>
                )}
                {dietAvoid?.length > 0 && (
                  <div style={{ background:'var(--card)',border:'1px solid var(--border)',borderRadius:16,overflow:'hidden' }}>
                    <div style={{ padding:'12px 18px',background:'rgba(162,56,56,.08)',fontSize:11,fontWeight:700,color:'var(--red)',letterSpacing:'0.12em',textTransform:'uppercase',borderBottom:'1px solid rgba(162,56,56,.15)' }}>✕ Avoid Karein</div>
                    <div style={{ padding:'14px 18px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px 12px' }}>
                      {dietAvoid.map((cat: any) => cat.items?.map((item: string, j: number) => (
                        <div key={item} style={{ display:'flex',alignItems:'center',gap:8,fontSize:13,color:'var(--ink2)' }}>
                          <div style={{ width:20,height:20,borderRadius:'50%',background:'rgba(162,56,56,.08)',color:'var(--red)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:10,fontWeight:700 }}>✕</div>
                          <span>{item}</span>
                        </div>
                      )))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '36px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🥗</div>
                <p style={{ color: 'var(--ink3)', fontWeight: 300 }}>Is disease ka diet chart jald add hoga.</p>
                <Link href="/diet" style={{ display: 'inline-block', marginTop: 12, color: 'var(--sage)', fontWeight: 600, textDecoration: 'none' }}>Sabhi Diet Charts Dekhein →</Link>
              </div>
            )
            })()}

            {/* Diet Tip + Note boxes */}
            {disease.dietTip && (
              <div style={{ marginTop: 20, padding: '16px 20px', background: 'rgba(184,145,42,.08)', border: '1px solid rgba(184,145,42,.25)', borderRadius: 12, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>💡</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--warm)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Pro Tip</p>
                  <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, fontWeight: 300 }}><AutoLink text={disease.dietTip} currentSlug={currentSlug} diseaseMap={dm} /></p>
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

            {/* Link to full diet page */}
            {hasDietPage && (
              <div style={{ marginTop: 20 }}>
                <Link href={`/diet/${disease.slug?.current}`}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: 'linear-gradient(135deg,rgba(58,125,82,.08),rgba(58,125,82,.04))', border: '1px solid rgba(58,125,82,.3)', borderRadius: 12, textDecoration: 'none' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)', marginBottom: 2 }}>Complete Diet Chart Dekhein</div>
                    <div style={{ fontSize: 12, color: 'var(--ink4)', fontWeight: 300 }}>Green list, Red list, Daily meal plan, FAQs — sab ek jagah</div>
                  </div>
                  <span style={{ fontSize: 18, color: 'var(--green)' }}>→</span>
                </Link>
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
                      <tr style={{ background: 'linear-gradient(135deg,var(--sage-dk),var(--sage-lt))' }}>
                        {['Din', 'Subah (Naashta)', 'Mid Morning', 'Dopahar (Lunch)', 'Shaam (4-5 PM)', 'Raat (Dinner)'].map((h) => (
                          <th key={h} style={{ padding: '12px 14px', fontSize: 11, fontWeight: 700, color: '#fff', textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {disease.weeklyPlan.map((row: any, i: number) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '12px 14px', fontSize: 13, fontWeight: 700, color: 'var(--sage-dk)', whiteSpace: 'nowrap' }}>{row.day}</td>
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
          </CollapsibleSection>

          {/* DOS & DON'TS */}
          <CollapsibleSection id="dosdont" icon="✅" title="Dos & Don'ts" sub="Lifestyle changes jo treatment mein help karte hain" eyebrow="Daily habits" defaultOpen={false}>
            {(disease.dos?.length > 0 || disease.donts?.length > 0) ? (
              <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:10 }}>
                {disease.dos?.map((d: string, i: number) => (
                  <div key={i} className="hov" style={{ background:'var(--card)',border:'1px solid var(--border)',borderRadius:12,padding:'14px 16px',display:'flex',alignItems:'flex-start',gap:12 }}>
                    <div style={{ width:32,height:32,borderRadius:8,background:'var(--sage-bg)',color:'var(--sage)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:16,fontWeight:700 }}>✓</div>
                    <span style={{ fontSize:13,fontWeight:500,color:'var(--ink)',lineHeight:1.55,paddingTop:4 }}>{d}</span>
                  </div>
                ))}
                {disease.donts?.map((d: string, i: number) => (
                  <div key={i} className="hov" style={{ background:'var(--card)',border:'1px solid var(--border)',borderRadius:12,padding:'14px 16px',display:'flex',alignItems:'flex-start',gap:12 }}>
                    <div style={{ width:32,height:32,borderRadius:8,background:'rgba(162,56,56,.08)',color:'#a23838',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:16,fontWeight:700 }}>✕</div>
                    <span style={{ fontSize:13,fontWeight:500,color:'var(--ink)',lineHeight:1.55,paddingTop:4 }}>{d}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '36px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                <p style={{ color: 'var(--ink4)', fontWeight: 300 }}>Dos &amp; Don&apos;ts jald add honge.</p>
              </div>
            )}
          </CollapsibleSection>

          {/* LIFESTYLE TIPS */}
          {disease.lifestyle?.length > 0 && (
            <CollapsibleSection id="lifestyle" icon="🌿" title="Lifestyle Guide" sub="Rozaana ki habits jo treatment mein madad karti hain" defaultOpen={false}>
              <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:12 }}>
                {disease.lifestyle.map((tip: any, i: number) => (
                  <div key={i} className="hov" style={{ padding:'18px 20px',background:'var(--card)',border:'1px solid var(--border)',borderLeft:`4px solid ${CAUSE_COLORS[i%4]}`,borderRadius:'0 12px 12px 0',boxShadow:'var(--sh-sm)' }}>
                    <p style={{ fontSize:14,fontWeight:700,color:'var(--ink)',marginBottom:4 }}>{tip.title}</p>
                    {tip.description && <p style={{ fontSize:13,color:'var(--ink3)',lineHeight:1.6,fontWeight:300 }}>{tip.description}</p>}
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* EXERCISE GUIDE */}
          {(disease.exercise?.dailyWalk || disease.exercise?.yogaAsanas || disease.exercise?.pranayama) && (
            <CollapsibleSection id="exercise" icon="🧘" title="Exercise & Yoga Guide" sub="Daily routine jo recovery speed up karta hai" defaultOpen={false}>
              <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:14,marginBottom:16 }}>
                {disease.exercise.dailyWalk && (
                  <div className="hov" style={{ padding:'20px',background:'var(--card)',border:'1px solid var(--border)',borderRadius:14 }}>
                    <div style={{ fontSize:26,marginBottom:10 }}>🚶</div>
                    <div style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:14,fontWeight:700,color:'var(--ink)',marginBottom:6 }}>Daily Walk</div>
                    <p style={{ fontSize:13,color:'var(--ink3)',lineHeight:1.7,fontWeight:300 }}>{disease.exercise.dailyWalk}</p>
                  </div>
                )}
                {disease.exercise.yogaAsanas && (
                  <div className="hov" style={{ padding:'20px',background:'var(--card)',border:'1px solid var(--border)',borderRadius:14 }}>
                    <div style={{ fontSize:26,marginBottom:10 }}>🧘</div>
                    <div style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:14,fontWeight:700,color:'var(--ink)',marginBottom:6 }}>Yoga Asanas</div>
                    <p style={{ fontSize:13,color:'var(--ink3)',lineHeight:1.7,fontWeight:300 }}>{disease.exercise.yogaAsanas}</p>
                  </div>
                )}
                {disease.exercise.pranayama && (
                  <div className="hov" style={{ padding:'20px',background:'var(--card)',border:'1px solid var(--border)',borderRadius:14 }}>
                    <div style={{ fontSize:26,marginBottom:10 }}>🫁</div>
                    <div style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:14,fontWeight:700,color:'var(--ink)',marginBottom:6 }}>Pranayama</div>
                    <p style={{ fontSize:13,color:'var(--ink3)',lineHeight:1.7,fontWeight:300 }}>{disease.exercise.pranayama}</p>
                  </div>
                )}
              </div>
              {disease.exercise.avoid?.length > 0 && (
                <div style={{ background:'rgba(176,64,64,.04)',border:'1px solid rgba(176,64,64,.2)',borderRadius:12,padding:'16px 20px' }}>
                  <p style={{ fontSize:13,fontWeight:700,color:'var(--red)',marginBottom:10 }}>🚫 Ye Exercises Avoid Karein</p>
                  {disease.exercise.avoid.map((e: string, i: number) => (
                    <div key={i} style={{ display:'flex',gap:8,fontSize:13,color:'var(--ink2)',marginBottom:5 }}>
                      <span style={{ color:'var(--red)',flexShrink:0 }}>✕</span>{e}
                    </div>
                  ))}
                </div>
              )}
            </CollapsibleSection>
          )}

          {/* SEASONAL CARE */}
          {(disease.seasonalCare?.summer || disease.seasonalCare?.winter || disease.seasonalCare?.monsoon) && (
            <CollapsibleSection id="seasonal" icon="🌤️" title="Mausam Ke Hisab Se Care" sub="Har season mein alag precautions lena zaroori hai" defaultOpen={false}>
              <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:14 }}>
                {disease.seasonalCare.summer && (
                  <div className="hov" style={{ padding:'20px',background:'rgba(255,170,0,.05)',border:'1px solid rgba(255,170,0,.2)',borderRadius:14 }}>
                    <div style={{ fontSize:26,marginBottom:10 }}>☀️</div>
                    <div style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:14,fontWeight:700,color:'var(--ink)',marginBottom:8 }}>Garmi (Summer)</div>
                    <p style={{ fontSize:13,color:'var(--ink3)',lineHeight:1.7,fontWeight:300 }}>{disease.seasonalCare.summer}</p>
                  </div>
                )}
                {disease.seasonalCare.winter && (
                  <div className="hov" style={{ padding:'20px',background:'rgba(80,120,255,.05)',border:'1px solid rgba(80,120,255,.2)',borderRadius:14 }}>
                    <div style={{ fontSize:26,marginBottom:10 }}>❄️</div>
                    <div style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:14,fontWeight:700,color:'var(--ink)',marginBottom:8 }}>Sardi (Winter)</div>
                    <p style={{ fontSize:13,color:'var(--ink3)',lineHeight:1.7,fontWeight:300 }}>{disease.seasonalCare.winter}</p>
                  </div>
                )}
                {disease.seasonalCare.monsoon && (
                  <div className="hov" style={{ padding:'20px',background:'rgba(0,160,120,.05)',border:'1px solid rgba(0,160,120,.2)',borderRadius:14 }}>
                    <div style={{ fontSize:26,marginBottom:10 }}>🌧️</div>
                    <div style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:14,fontWeight:700,color:'var(--ink)',marginBottom:8 }}>Barsaat (Monsoon)</div>
                    <p style={{ fontSize:13,color:'var(--ink3)',lineHeight:1.7,fontWeight:300 }}>{disease.seasonalCare.monsoon}</p>
                  </div>
                )}
              </div>
            </CollapsibleSection>
          )}

          {/* CASE STUDIES */}
          {disease.caseStudies?.length > 0 && (
            <section style={{ marginBottom: 52 }}>
              <div style={{ display:'inline-flex',alignItems:'center',gap:6,fontSize:10,fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--warm)',marginBottom:10 }}>
                <div style={{ width:14,height:1,background:'var(--warm)',opacity:0.6 }} />
                Real patient outcomes
              </div>
              <h2 style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:28,fontWeight:700,color:'var(--ink)',marginBottom:6 }}>Case Studies</h2>
              <p style={{ fontSize:14,color:'var(--ink4)',fontWeight:300,marginBottom:24 }}>Anonymized clinical cases — Dr. Shadab ki practice se</p>
              <div style={{ display:'grid',gap:14 }}>
                {disease.caseStudies.map((c: any, i: number) => (
                  <div key={i} className="hov" style={{ background:'var(--card)',border:'1px solid var(--border)',borderLeft:`4px solid ${CAUSE_COLORS[i%4]}`,borderRadius:'0 14px 14px 0',padding:'20px 24px' }}>
                    <div style={{ display:'flex',flexWrap:'wrap',gap:8,marginBottom:12 }}>
                      {c.profile && <span style={{ fontSize:11,fontWeight:700,padding:'3px 12px',borderRadius:99,background:'var(--sage-bg)',color:'var(--sage-dk)' }}>👤 {c.profile}</span>}
                      {c.duration && <span style={{ fontSize:11,fontWeight:600,padding:'3px 12px',borderRadius:99,background:'var(--bg2)',color:'var(--ink3)',border:'1px solid var(--border)' }}>⏱ {c.duration}</span>}
                    </div>
                    {c.treatment && <p style={{ fontSize:13,color:'var(--ink2)',lineHeight:1.7,fontWeight:300,marginBottom:10 }}><strong style={{ color:'var(--ink)',fontWeight:600 }}>Treatment:</strong> {c.treatment}</p>}
                    {c.result && (
                      <div style={{ padding:'10px 14px',background:'rgba(58,125,82,.06)',border:'1px solid rgba(58,125,82,.2)',borderRadius:8,fontSize:13,color:'var(--ink2)',lineHeight:1.6 }}>
                        <span style={{ color:'var(--green)',fontWeight:700 }}>✓ Result: </span>{c.result}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Mid-content WhatsApp CTA */}
          <div style={{ background: 'linear-gradient(135deg,#1a6b33,#25a244)', borderRadius: 14, padding: '22px 24px', marginBottom: 52, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontSize: 34, flexShrink: 0 }}>📲</div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Online Consultation — Dr. Shadab Khan</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.8)', fontWeight: 300, margin: 0 }}>{disease.title} ka personalized homeopathic treatment plan — apna case WhatsApp pe share karein</p>
            </div>
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, padding: '12px 22px', background: '#fff', color: '#1a6b33', borderRadius: 9, textDecoration: 'none', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>WhatsApp Karein →</a>
          </div>

          {/* Self Check */}
          {disease.selfCheck && (
            <div style={{ padding:'16px 20px',background:'rgba(63,107,77,.06)',border:'1px solid rgba(63,107,77,.2)',borderRadius:12,marginBottom:32,display:'flex',gap:12,alignItems:'center' }}>
              <span style={{ fontSize:22,flexShrink:0 }}>🔍</span>
              <p style={{ fontSize:14,color:'var(--ink2)',lineHeight:1.65,fontWeight:400,margin:0 }}><AutoLink text={disease.selfCheck} currentSlug={currentSlug} diseaseMap={dm} /></p>
            </div>
          )}

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: 52, scrollMarginTop: 160 }}>
            <div style={{ display:'inline-flex',alignItems:'center',gap:6,fontSize:10,fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--warm)',marginBottom:10 }}>
              <div style={{ width:14,height:1,background:'var(--warm)',opacity:0.6 }} />
              {disease.faqs?.length > 0 ? `${disease.faqs.length} sawaal` : 'Frequently asked'}
            </div>
            <h2 style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:'clamp(24px,3vw,34px)',fontWeight:600,letterSpacing:'-0.025em',lineHeight:1.05,color:'var(--ink)',marginTop:8,marginBottom:6 }}>Sabse Zyada Pooche Jaane Wale Sawal</h2>
            <p style={{ fontSize: 14, color: 'var(--ink4)', fontWeight: 300, marginBottom: 24 }}>Clinic mein patients jo questions poochte hain — unke honest jawab</p>
            {disease.faqs?.length > 0 ? (
              <div style={{ display:'flex',flexDirection:'column',gap:8 }}>
                {disease.faqs.map((f: any, i: number) => (
                  <FaqItem key={i} q={f.question || f.q} a={<AutoLink text={f.answer || f.a || ''} currentSlug={currentSlug} diseaseMap={dm} />} index={i} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '36px', background: 'var(--bg2)', borderRadius: 12, border: '1px dashed var(--border2)' }}>
                <p style={{ color: 'var(--ink4)', fontWeight: 300 }}>FAQs jald add honge.</p>
              </div>
            )}
          </section>

          {/* Post-FAQ CTA */}
          <div style={{ marginBottom: 52, padding: '28px', background: 'linear-gradient(135deg,rgba(63,107,77,.08),rgba(63,107,77,.02))', border: '1px solid rgba(63,107,77,.2)', borderRadius: 16, textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Abhi bhi confusion hai?</div>
            <p style={{ fontSize: 14, color: 'var(--ink3)', marginBottom: 20, fontWeight: 300 }}>Dr. Shadab se seedha poochho — WhatsApp pe consultation</p>
            <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', background: 'var(--ink)', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>📲 Book Consultation</a>
          </div>

          {/* SOURCES */}
          {disease.sources?.length > 0 && (
            <section style={{ marginBottom: 40 }}>
              <div style={{ background:'rgba(192,132,56,.06)',border:'1px solid rgba(192,132,56,.2)',borderRadius:12,padding:'20px 22px' }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--warm)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>Sources & Citations</div>
                {disease.sources.map((s: any, i: number) => (
                  <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: 'var(--ink4)', marginBottom: 6 }}>
                    <span style={{ flexShrink: 0 }}>[{i + 1}]</span>
                    <span>{s.title || s.name}{s.year && ` (${s.year})`}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* Disclaimer */}
          <section style={{ marginBottom: 40, background: 'rgba(184,145,42,.06)', border: '1px solid rgba(184,145,42,.25)', borderRadius: 12, padding: '20px 22px' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>⚕️</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Medical Disclaimer</div>
                <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                  Ye content sirf educational aur informational purpose ke liye hai. Is page par di gayi koi bhi jaankari professional medical advice, diagnosis, ya treatment ka substitute nahi hai. Kisi bhi treatment se pehle ek qualified homoeopath ya doctor se consult karein. Emergency mein turant medical help lein.
                </p>
              </div>
            </div>
          </section>

          {/* Ye Bhi Padein */}
          {related.length > 0 && (
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>Ye Bhi Padein</h2>
              <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 20, fontWeight: 300 }}>Related conditions jo aapke kaam aa sakti hain</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))', gap: 12 }}>
                {related.map((r: any) => (
                  <Link key={r.slug?.current} href={`/diseases/${r.slug?.current}`} style={{ textDecoration: 'none' }}>
                    <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '18px', cursor: 'pointer', height: '100%' }}>
                      <div style={{ fontSize: 11, color: 'var(--ink4)', marginBottom: 8 }}>{r.category || 'Homoeopathy'}</div>
                      <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{r.title}</div>
                      {r.hindiName && <div style={{ fontSize: 13, color: 'var(--warm)', fontStyle: 'italic', fontFamily: 'var(--font-display,Georgia,serif)', marginBottom: 10 }}>{r.hindiName}</div>}
                      <div style={{ fontSize: 12, color: 'var(--sage)', fontWeight: 600 }}>Read guide →</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="dis-sidebar" style={{ position: 'sticky', top: 130 }}>
          <div style={{ background:'linear-gradient(135deg,var(--sage) 0%,var(--sage-dk) 100%)',borderRadius:18,padding:24,textAlign:'center',color:'#fff',position:'relative',overflow:'hidden',boxShadow:'0 16px 40px rgba(63,107,77,.25)',marginBottom:16 }}>
            <div style={{ position:'absolute',right:-30,top:-30,width:120,height:120,borderRadius:'50%',background:'rgba(255,255,255,.08)' }} />
            <div style={{ position:'relative',zIndex:1 }}>
              <div style={{ fontSize:10,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',opacity:0.85,marginBottom:10 }}>Personal Consultation</div>
              <div style={{ fontFamily:'var(--font-display,Georgia,serif)',fontSize:18,fontWeight:600,lineHeight:1.2,marginBottom:8 }}>Consult Dr. Shadab</div>
              <p style={{ fontSize:12,opacity:0.88,marginBottom:16,fontWeight:300,lineHeight:1.55 }}>Case dekh ke personalised homeopathic plan banta hai — Hinglish mein.</p>
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ display:'block',padding:'10px 16px',background:'#fff',color:'var(--sage-dk)',borderRadius:99,fontSize:13,fontWeight:700,textDecoration:'none',marginBottom:8 }}>💬 WhatsApp Karein</a>
              <a href="tel:+918983458889" style={{ display:'block',padding:'9px',background:'rgba(255,255,255,.12)',color:'rgba(255,255,255,.88)',borderRadius:99,fontSize:12,textDecoration:'none',border:'1px solid rgba(255,255,255,.2)' }}>📞 8983458889</a>
            </div>
          </div>

          {related.length > 0 && (
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '18px', marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--warm)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Related Diseases</div>
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
            <div style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 300 }}>Disease-wise complete diet guide</div>
          </Link>
        </div>
      </div>

      <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
