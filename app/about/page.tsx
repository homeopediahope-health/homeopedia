import { Metadata } from 'next'
import Link from 'next/link'
import { WA_BASE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Dr. Shadab Khan MD Homoeopath | HomeoPedia',
  description: 'Dr. Shadab Khan MD Homoeopath — 15+ years experience, 10,000+ patients. Classical homeopathy practitioner. HomeoPedia ke founder aur medical reviewer.',
  alternates: { canonical: 'https://www.homeopedia.in/about' },
}

const SERIF = 'var(--font-display), Georgia, serif'
const MONO  = 'var(--font-mono, ui-monospace, monospace)'

const STATS = [
  ['15+',   'Years experience',  'Constitutional homeopathy'],
  ['10K+',  'Patients treated',  'Across India tele-consult'],
  ['200+',  'Conditions covered','Full proforma per case'],
  ['4.9★',  'Patient rating',    'Verified Google reviews'],
]

const REFERENCES = [
  ['📚', 'Boericke Materia Medica', 'Verified remedy reference'],
  ['📖', 'Allen Keynotes',          'Differentiating characteristics'],
  ['🌿', 'Hahnemann Organon',       'Classical foundation'],
  ['⚕️', '15+ yrs clinical',        'Real cases, real results'],
]

const CATEGORIES = [
  { id: 'Skin',         ic: '🌿', n: 'Skin & Hair',      count: 22, tone: 'rgba(200,230,200,0.5)' },
  { id: 'Joints',       ic: '🦴', n: 'Joints & Pain',    count: 12, tone: 'rgba(220,210,190,0.5)' },
  { id: 'Respiratory',  ic: '🫁', n: 'Respiratory',       count: 14, tone: 'rgba(190,215,235,0.5)' },
  { id: 'Digestive',    ic: '🍃', n: 'Digestive',         count: 10, tone: 'rgba(205,230,205,0.5)' },
  { id: 'Endocrine',    ic: '⚗️', n: 'Hormonal',          count: 10, tone: 'rgba(235,215,200,0.5)' },
  { id: 'Mental',       ic: '🧠', n: 'Mental Health',     count: 8,  tone: 'rgba(215,205,235,0.5)' },
  { id: 'ENT',          ic: '👂', n: 'ENT',               count: 8,  tone: 'rgba(200,230,230,0.5)' },
  { id: 'Neurological', ic: '🔬', n: 'Neurological',      count: 6,  tone: 'rgba(230,220,200,0.5)' },
]

export default function AboutPage() {
  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(32px,5vw,64px) clamp(20px,5vw,64px) clamp(28px,4vw,56px)', display: 'grid', gridTemplateColumns: 'clamp(0px,1px,1px) 1fr', gap: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'clamp(240px,55%,700px) 1fr', gap: 'clamp(28px,5vw,64px)', alignItems: 'center' }} className="hero-about-grid">
          <div>
            {/* breadcrumb */}
            <div style={{ fontSize: 11, color: 'var(--ink4)', fontFamily: MONO, letterSpacing: '0.04em', marginBottom: 12 }}>
              <Link href="/" style={{ color: 'var(--ink4)', textDecoration: 'none' }}>Home</Link>
              {' › '}<strong style={{ color: 'var(--ink2)', fontWeight: 700 }}>About</strong>
            </div>

            {/* eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: 'var(--sage)' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sage)', fontFamily: MONO }}>Aapke doctor</span>
            </div>

            <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(52px,8vw,96px)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.93, margin: 0, color: 'var(--ink)' }}>
              Dr. Shadab Khan
            </h1>
            <div style={{ fontFamily: SERIF, fontStyle: 'italic', color: 'var(--sage)', fontSize: 'clamp(17px,2vw,24px)', marginTop: 10, fontWeight: 500 }}>
              MD Homoeopath · 15+ years
            </div>
            <p style={{ fontSize: 'clamp(14px,1.2vw,17px)', color: 'var(--ink2)', marginTop: 22, lineHeight: 1.75, maxWidth: 540 }}>
              Classical homeopathy practitioner. Boericke aur Allen ke Materia Medica par based — har case ko constitutional approach se dekhte hain. Aapka case unique hai, treatment bhi waisa hi banta hai.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 24px', background: 'var(--sage)', color: '#fff', borderRadius: 99, fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 18px var(--sage-bg-2)' }}>
                💬 Book consultation
              </a>
              <Link href="/diseases"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '13px 22px', background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--border2)', borderRadius: 99, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Browse conditions →
              </Link>
            </div>
          </div>

          {/* Avatar side */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: 'clamp(200px,28vw,320px)', height: 'clamp(200px,28vw,320px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--sage), var(--sage-dk))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: SERIF, fontWeight: 700,
                fontSize: 'clamp(72px,12vw,140px)', color: '#fff',
                boxShadow: '0 30px 80px rgba(63,107,77,0.28)',
                border: '8px solid var(--bg)',
              }}>SK</div>
              <div style={{
                position: 'absolute', bottom: 16, right: -8,
                padding: '10px 16px', background: 'var(--card)',
                border: '1px solid var(--border)', borderRadius: 99,
                fontSize: 12, fontWeight: 700,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--sage)', display: 'inline-block', animation: 'pulse-soft 1.6s ease-in-out infinite' }} />
                Online today
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats band ── */}
      <div style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(24px,3vw,44px) clamp(20px,5vw,64px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(16px,3vw,32px)' }} className="stats-about-grid">
          {STATS.map(([n, l, d]) => (
            <div key={l}>
              <div style={{ fontFamily: SERIF, fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, color: 'var(--sage)', letterSpacing: '-0.03em', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginTop: 6 }}>{l}</div>
              <div style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 3, lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Philosophy ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,5vw,80px) clamp(20px,5vw,64px) clamp(20px,3vw,44px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 'clamp(20px,5vw,64px)', alignItems: 'start' }} className="philosophy-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: 'var(--sage)' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sage)', fontFamily: MONO }}>Approach</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(30px,4vw,50px)', fontWeight: 600, letterSpacing: '-0.03em', margin: 0, lineHeight: 1.05 }}>
              Classical, <em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>not symptomatic.</em>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 'clamp(14px,1.1vw,16px)', color: 'var(--ink2)', lineHeight: 1.8, margin: 0 }}>
              Modern fast-track approaches symptom suppress karte hain — root cause untouched rehta hai. Mera approach Hahnemann ke Organon par based hai: har patient ek individual hai, treatment bhi unique.
            </p>
            <p style={{ fontSize: 'clamp(14px,1.1vw,16px)', color: 'var(--ink2)', lineHeight: 1.8, marginTop: 14 }}>
              Detailed case-taking, constitutional remedy, miasm understanding — ye sab effective treatment ki neev hain. Patient ki personality, history, sensations, modalities — sab dekhne ke baad remedy decide hoti hai.
            </p>
            <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {REFERENCES.map(([ic, t, d]) => (
                <div key={t} style={{ padding: '14px 16px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 22, flexShrink: 0 }}>{ic}</div>
                  <div>
                    <div style={{ fontFamily: SERIF, fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{t}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 3, lineHeight: 1.45 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Expertise / Specialties ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(32px,4vw,72px) clamp(20px,5vw,64px) clamp(20px,3vw,44px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 28, height: 2, background: 'var(--warm)' }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--warm)', fontFamily: MONO }}>Specialties</span>
        </div>
        <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 600, letterSpacing: '-0.025em', margin: '0 0 24px', lineHeight: 1 }}>
          Areas of expertise.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(8px,1.5vw,14px)' }} className="cats-about-grid">
          {CATEGORIES.map(c => (
            <Link key={c.id} href={`/diseases?cat=${c.id}`}
              style={{ padding: 'clamp(14px,1.5vw,20px) clamp(14px,1.5vw,22px)', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, textDecoration: 'none', color: 'var(--ink)', display: 'block', transition: 'box-shadow 0.15s' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: c.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{c.ic}</div>
              <div style={{ fontFamily: SERIF, fontSize: 'clamp(13px,1.1vw,16px)', fontWeight: 600, letterSpacing: '-0.01em', marginTop: 14, lineHeight: 1.2 }}>{c.n}</div>
              <div style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 3, fontFamily: MONO }}>{c.count}+ conditions</div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── References box ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(20px,3vw,44px) clamp(20px,5vw,64px) clamp(48px,6vw,80px)' }}>
        <div style={{ padding: 'clamp(22px,2.5vw,36px) clamp(22px,3vw,40px)', background: 'var(--warm-bg)', border: '1px solid rgba(192,132,56,0.25)', borderRadius: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 28, height: 2, background: 'var(--warm)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--warm)', fontFamily: MONO }}>Why trust this</span>
          </div>
          <h3 style={{ fontFamily: SERIF, fontSize: 'clamp(20px,2vw,28px)', fontWeight: 600, letterSpacing: '-0.025em', margin: '0 0 16px', lineHeight: 1.1 }}>References &amp; evidence base.</h3>
          <div style={{ fontSize: 'clamp(12px,1vw,14px)', color: 'var(--ink2)', lineHeight: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div>📖 <strong>Boericke W.</strong> — Pocket Manual of Homeopathic Materia Medica</div>
            <div>📖 <strong>Allen H.C.</strong> — Keynotes and Characteristics with Comparisons</div>
            <div>📖 <strong>Hahnemann S.</strong> — Organon of Medicine (6th edition)</div>
            <div>🌐 <strong>NIH / NCBI</strong> — National Institutes of Health research references</div>
            <div>🌐 <strong>CCRH</strong> — Central Council for Research in Homoeopathy, Govt. of India</div>
            <div>⚕️ <strong>Dr. Shadab Khan</strong> — 15+ years clinical practice &amp; case observations · Reg. No. 54130 · Maharashtra Council of Homoeopathy</div>
          </div>
        </div>
      </div>

      {/* responsive overrides */}
      <style>{`
        @media (max-width: 700px) {
          .hero-about-grid    { grid-template-columns: 1fr !important; }
          .hero-about-grid > div:last-child { display: none !important; }
          .stats-about-grid   { grid-template-columns: 1fr 1fr !important; }
          .philosophy-grid    { grid-template-columns: 1fr !important; }
          .cats-about-grid    { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">💬 Consult Now</a>
    </div>
  )
}
