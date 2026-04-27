import { WA_BASE, WA_CONSULT } from '@/lib/constants'
import Link from 'next/link'
import { getLatestYouTubeVideos } from '@/lib/youtube'
import Starsvg from '@/components/Starsvg'
import SL from '@/components/SL'
import Orn from '@/components/Orn'
import Sparkles from '@/components/Sparkles'
import HeroSearch from '@/components/HeroSearch'

const YT_CHANNEL_ID = 'UCkC9ovyrfM4RA-axYQ5Gflw'
export const revalidate = 3600

const catGrid = [
  { id: 'skin',        title: 'Skin Diseases',   sub: 'Psoriasis, Eczema, Vitiligo',    n: 8 },
  { id: 'joints',      title: 'Joints & Muscles', sub: 'Arthritis, Sciatica, Gout',      n: 6 },
  { id: 'digestive',   title: 'Digestive Health', sub: 'IBS, Piles, Acidity',            n: 5 },
  { id: 'mental',      title: 'Mental Health',    sub: 'Anxiety, Depression, Migraine',  n: 5 },
  { id: "women's",     title: "Women's Health",   sub: 'PCOD, Periods, Menopause',       n: 5 },
  { id: 'hair',        title: 'Hair Problems',    sub: 'Hair Fall, Alopecia',            n: 4 },
  { id: 'respiratory', title: 'Respiratory',      sub: 'Asthma, Allergies, Sinusitis',  n: 4 },
  { id: 'endocrine',   title: 'Endocrine',        sub: 'Thyroid, Diabetes, Obesity',    n: 4 },
]

const featured = [
  { slug: 'psoriasis', title: 'Psoriasis', hindi: 'सोरायसिस', cat: 'Skin',     min: 7 },
  { slug: 'sciatica',  title: 'Sciatica',  hindi: 'सायटिका',  cat: 'Joints',   min: 5 },
  { slug: 'pcod',      title: 'PCOD/PCOS', hindi: 'पीसीओडी', cat: "Women's",  min: 8 },
  { slug: 'migraine',  title: 'Migraine',  hindi: 'माइग्रेन', cat: 'Mental',   min: 5 },
]

const dietPromo = [
  { slug: 'psoriasis', disease: 'Psoriasis', hindi: 'सोरायसिस', eat: 8, avoid: 6 },
  { slug: 'pcod',      disease: 'PCOD/PCOS', hindi: 'पीसीओडी', eat: 8, avoid: 6 },
  { slug: 'thyroid',   disease: 'Thyroid',   hindi: 'थायरॉइड',  eat: 8, avoid: 6 },
  { slug: 'ibs',       disease: 'IBS',       hindi: 'आईबीएस',  eat: 8, avoid: 6 },
]

const VIDEOS_FALLBACK = [
  { id: '44gt-Fu1XdU', title: 'IBS mein Normal Reports? Brain-Gut Connection', date: '17 Apr 2026', topic: 'Digestive' },
  { id: 'c29pSyE5apE', title: 'Skin Problem Se Asthma — Atopic March Kya Hai', date: '10 Apr 2026', topic: 'Skin' },
  { id: 'NKHq9F0bVSs', title: 'Glutathione Kab Kaam Karta Hai? Liver Secret', date: '3 Apr 2026', topic: 'General' },
  { id: 'DUGyLQhEsxw', title: 'PCOD, Belly Fat, Kala Daag — Insulin Resistance', date: '27 Mar 2026', topic: "Women's" },
]

export default async function HomePage() {
  const rawVideos = await getLatestYouTubeVideos(YT_CHANNEL_ID, 4).catch(() => [])
  const videos: Array<{ id: string; title: string; date: string; topic: string }> =
    rawVideos.length > 0
      ? rawVideos.map((v: any) => ({ id: v.id, title: v.title, date: v.published || v.date || '', topic: v.topic || 'General' }))
      : VIDEOS_FALLBACK

  const orgLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalOrganization',
        name: 'HomeoPedia.in',
        url: 'https://homeopedia.in',
        logo: 'https://homeopedia.in/favicon.ico',
        description: "India's patient-first homeopathy knowledge portal — evidence-based, CCRH-backed, always free.",
        medicalSpecialty: 'Homeopathic Medicine',
        founder: { '@type': 'Physician', name: 'Dr. Shadab Khan', honorificSuffix: 'MD Homoeopathy' },
      },
      {
        '@type': 'Physician',
        name: 'Dr. Shadab Khan',
        honorificSuffix: 'MD Homoeopathy',
        description: '15+ years experience, 10,000+ patients treated. Specialization in chronic diseases.',
        medicalSpecialty: 'Homeopathic Medicine',
        worksFor: { '@type': 'MedicalOrganization', name: 'HomeoPedia.in' },
        url: 'https://homeopedia.in/about',
        sameAs: ['https://www.youtube.com/@drshadabshomoeopathy', 'https://drshadabs.com'],
      },
      {
        '@type': 'WebSite',
        name: 'HomeoPedia.in',
        url: 'https://homeopedia.in',
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: 'https://homeopedia.in/diseases?q={search_term_string}' },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <div style={{ background: 'var(--bg)' }} className="page-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />

      {/* ── HERO ── */}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 32px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg,var(--bg) 0%,var(--bg2) 100%)' }}>
        {/* Background blobs */}
        <div style={{ position: 'absolute', top: '-8%', right: '-8%', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle,rgba(184,145,42,.13) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '-10%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(184,145,42,.07) 0%,transparent 70%)', pointerEvents: 'none' }} />
        {/* Grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)', backgroundSize: '60px 60px', opacity: 0.22, pointerEvents: 'none' }} />
        {/* Sparkles */}
        <Sparkles />

        <div style={{ position: 'relative', maxWidth: 800, width: '100%', zIndex: 1 }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 18px', border: '1px solid rgba(184,145,42,.4)', borderRadius: 100, marginBottom: 28, background: 'rgba(184,145,42,.06)' }}>
            <Starsvg s={9} />
            <span style={{ fontSize: 11, color: 'var(--gold-dk)', letterSpacing: 2.2, fontWeight: 600 }}>CCRH ALIGNED · EVIDENCE BASED · DOCTOR REVIEWED</span>
          </div>

          {/* H1 with shimmer */}
          <h1 className="hero-title" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(36px,5.5vw,70px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 22, color: 'var(--ink)' }}>
            Homoeopathy<br />
            <span className="gold-shimmer" style={{ fontFamily: 'inherit', fontWeight: 'inherit', fontSize: '1em', lineHeight: 'inherit', display: 'inline' }}>
              Hope is Here.
            </span>
          </h1>

          <p style={{ fontSize: 17, color: 'var(--ink3)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>
            Simple language mein disease guides, diet charts, dos &amp; don&apos;ts, aur homeopathy ka science. Free, doctor reviewed.
          </p>

          {/* Search */}
          <HeroSearch />
        </div>

        {/* Stats bar */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: 60, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', boxShadow: 'var(--sh)', display: 'flex', flexWrap: 'wrap', maxWidth: 600, width: '100%' }} className="hero-stats">
          {[['200+', 'Disease Guides'], ['80+', 'Medicines'], ['1000+', 'FAQs'], ['100%', 'Doctor Reviewed']].map(([n, l], i, arr) => (
            <div key={l} style={{ flex: 1, textAlign: 'center', padding: '20px 10px', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 28, fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES ── */}
      <section style={{ padding: 'clamp(52px,8vw,90px) clamp(16px,4vw,32px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <SL c="Browse by Body System" />
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: 'var(--ink)' }}>Find Your Disease Category</h2>
          <Orn />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: 16 }} className="grid-auto">
          {catGrid.map(cat => (
            <Link key={cat.id} href="/diseases" style={{ textDecoration: 'none' }}>
              <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '26px 22px', cursor: 'pointer', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--gold-bg)', border: '1px solid rgba(184,145,42,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Starsvg s={16} o={0.7} />
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 500 }}>{cat.n} guides</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 17, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{cat.title}</h3>
                <p style={{ fontSize: 12, color: 'var(--ink3)', lineHeight: 1.6, marginBottom: 14 }}>{cat.sub}</p>
                <div style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600 }}>Explore →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED DISEASES ── */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(52px,8vw,90px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <SL c="Most Read" />
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: 'var(--ink)' }}>Popular Disease Guides</h2>
          <Orn />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(270px,1fr))', gap: 18 }} className="grid-auto">
          {featured.map(d => (
            <Link key={d.slug} href={`/diseases/${d.slug}`} style={{ textDecoration: 'none' }}>
              <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '26px', cursor: 'pointer', height: '100%' }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.25)' }}>{d.cat}</span>
                  <span style={{ fontSize: 11, color: 'var(--ink4)' }}>📖 {d.min} min</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{d.title}</h3>
                <div style={{ fontSize: 14, color: 'var(--gold-dk)', fontFamily: 'var(--font-playfair, Georgia, serif)', fontStyle: 'italic', marginBottom: 12 }}>{d.hindi}</div>
                <div style={{ marginTop: 16, fontSize: 13, color: 'var(--gold)', fontWeight: 600 }}>Read full guide →</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/diseases" style={{ display: 'inline-block', padding: '12px 28px', border: '1px solid var(--border2)', background: 'var(--card)', color: 'var(--ink2)', borderRadius: 100, fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={undefined}>
            View All 200+ Diseases →
          </Link>
        </div>
      </section>

      {/* ── DIET CHARTS PROMO ── */}
      <section style={{ background: 'linear-gradient(135deg,rgba(184,145,42,.1) 0%,rgba(184,145,42,.03) 100%)', borderTop: '1px solid rgba(184,145,42,.15)', borderBottom: '1px solid rgba(184,145,42,.15)', padding: '60px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 32, alignItems: 'center' }}>
          <div>
            <SL c="Free Resource" />
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(22px,4vw,36px)', fontWeight: 700, color: 'var(--ink)', margin: '10px 0 12px' }}>Disease-Wise Diet Charts</h2>
            <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>
              Psoriasis, PCOD, Thyroid, IBS, Sciatica, Hair Fall — har disease ke liye detailed diet chart. Kya khayein, kya nahi, sample day plan — bilkul free.
            </p>
            <Link href="/diet" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: 'linear-gradient(135deg,var(--gold-dk),var(--gold-lt))', color: '#fff', borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 3px 14px rgba(184,145,42,.35)' }}>
              🥗 Dekhein Diet Charts →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {dietPromo.map(d => (
              <Link key={d.slug} href="/diet" style={{ textDecoration: 'none' }}>
                <div className="hov" style={{ background: 'var(--card)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 12, padding: '14px 16px', cursor: 'pointer' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-playfair, Georgia, serif)', marginBottom: 3 }}>{d.disease}</div>
                  <div style={{ fontSize: 10, color: 'var(--gold-dk)', fontStyle: 'italic', fontFamily: 'var(--font-playfair, Georgia, serif)' }}>{d.hindi}</div>
                  <div style={{ fontSize: 10, color: 'var(--ink4)', marginTop: 4 }}>✓{d.eat} foods · ✕{d.avoid} avoid</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY HOMEOPATHY ── */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(52px,8vw,90px) clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <SL c="Why Homeopathy?" />
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: 'var(--ink)' }}>Root Cause vs Symptom Suppression</h2>
            <Orn />
            <p style={{ fontSize: 15, color: 'var(--ink3)', maxWidth: 520, margin: '12px auto 0', lineHeight: 1.8, fontWeight: 300 }}>
              Homeopathy sirf symptoms band nahi karta — poori body ki healing trigger karta hai.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, maxWidth: 860, margin: '0 auto 48px' }} className="why-grid">
            {[
              { t: 'Allopathy Approach', color: 'var(--red)', bg: 'rgba(176,64,64,.05)', border: 'rgba(176,64,64,.2)', mark: '✕', pts: ['Symptoms suppress karta hai', 'Steroids — temporary but harmful', 'Side effects common', 'Root cause address nahi hoti', 'Life-long drug dependency'] },
              { t: 'Homeopathy Approach', color: 'var(--green)', bg: 'rgba(58,125,82,.05)', border: 'rgba(58,125,82,.2)', mark: '✓', pts: ['Root cause treat karta hai', 'Natural, 100% safe medicines', 'Zero side effects — even for kids', 'Immune system strengthen karta hai', 'Long-lasting, deep results'] },
            ].map(col => (
              <div key={col.t} style={{ background: col.bg, border: `1px solid ${col.border}`, borderRadius: 'var(--r)', padding: '28px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: col.color, marginBottom: 18 }}>{col.mark} {col.t}</h3>
                {col.pts.map(p => (
                  <div key={p} style={{ display: 'flex', gap: 10, marginBottom: 11 }}>
                    <span style={{ color: col.color, flexShrink: 0 }}>{col.mark}</span>
                    <span style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.65 }}>{p}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* 4 benefits */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="grid-4">
            {[
              { ic: '🎯', t: 'Root Cause',       d: 'Sirf symptoms nahi — underlying trigger ko heal karta hai permanently.' },
              { ic: '🧬', t: 'Constitutional',    d: 'Har patient ke liye alag medicine — aapki nature ke hisaab se.' },
              { ic: '🌿', t: 'Zero Side Effects', d: 'Natural medicines — safe for children, elderly, pregnant women.' },
              { ic: '📊', t: 'CCRH Backed',       d: 'Government of India ke research council ki scientific approval.' },
            ].map(b => (
              <div key={b.t} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '22px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{b.ic}</div>
                <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>{b.t}</div>
                <div style={{ fontSize: 12, color: 'var(--ink3)', lineHeight: 1.65 }}>{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DR. SHADAB ── */}
      <section style={{ padding: 'clamp(52px,8vw,90px) clamp(16px,4vw,32px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 'clamp(24px,4vw,52px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 48, alignItems: 'center', boxShadow: 'var(--sh)' }} className="doc-grid">
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 120, height: 120, borderRadius: '50%', margin: '0 auto 18px', background: 'linear-gradient(135deg,var(--gold-dk),var(--gold-lt))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 38, color: '#fff', fontWeight: 700, boxShadow: '0 4px 24px rgba(184,145,42,.3)' }}>Dr</div>
            <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>Dr. Shadab Khan</div>
            <div style={{ fontSize: 12, color: 'var(--gold-dk)', marginTop: 5, fontStyle: 'italic' }}>MD Homoeopath · Reg. No. 54130</div>
            <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap', marginTop: 12 }}>
              {['15+ Years', '10,000+ Patients', 'Maharashtra Council'].map(b => (
                <span key={b} style={{ fontSize: 10, padding: '3px 9px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.25)' }}>{b}</span>
              ))}
            </div>
          </div>
          <div>
            <SL c="Medically Reviewed" />
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 30, fontWeight: 700, color: 'var(--ink)', margin: '12px 0 16px' }}>Every Article Personally Reviewed</h2>
            <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.85, fontWeight: 300, marginBottom: 24 }}>
              HomeoPedia pe har article Dr. Shadab Khan ne personally review kiya hai. 15+ saal ki clinical experience aur 10,000+ patients ki real-world knowledge se backed content — sirf aapke liye, bilkul free.
            </p>
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: 'linear-gradient(135deg,#1a6b33,#25a244)', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600, boxShadow: '0 4px 16px rgba(37,162,68,.3)' }}>
              📲 WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── LAST RESORT SECTION ── */}
      <section style={{ background: 'linear-gradient(135deg,#0f2419 0%,#1a3d30 100%)', padding: 'clamp(52px,8vw,80px) clamp(16px,4vw,32px)', margin: '0 0 clamp(52px,8vw,80px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', padding: '6px 18px', borderRadius: 100, border: '1px solid rgba(184,145,42,.4)', color: 'var(--gold-lt)', fontSize: 12, fontStyle: 'italic', marginBottom: 18 }}>Aap Akele Nahi Hain</div>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(26px,4vw,42px)', fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>
              Kya Aap Bhi Yahan Tak Pahunche Ho<br />
              <span style={{ color: 'var(--gold-lt)', fontStyle: 'italic' }}>Sab Try Karne Ke Baad?</span>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', maxWidth: 580, margin: '0 auto', lineHeight: 1.85, fontWeight: 300 }}>
              Bahut saare patients pehle allopathic treatment karte hain — steroids, painkillers, surgery. Jab wahan se koi permanent solution nahi milta, tab yahan aate hain. Aur ye bilkul sahi hai.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 40 }}>
            {[
              {
                icon: '💊',
                q: '"Doctor ne lifelong steroids boli hain..."',
                a: 'Steroids symptoms suppress karte hain temporarily. Homeopathy immune system ki root cause fix karne ki koshish karta hai — steroids ke bina.',
                diseases: 'Psoriasis, Eczema, Arthritis',
              },
              {
                icon: '🔪',
                q: '"Operation recommend kiya hai..."',
                a: 'Piles, kidney stones, thyroid, pcos — kai cases mein surgery avoid ho sakti hai. Homeopathy pehle try karna samajhdaari hai.',
                diseases: 'Piles, Fibroids, Gallstones',
              },
              {
                icon: '😮‍💨',
                q: '"Saalon se medicine kha raha hoon, koi fark nahi..."',
                a: 'Chronic diseases mein allopathy management karta hai, cure nahi. Homeopathy long-term mein body ko heal karne ki koshish karta hai.',
                diseases: 'IBS, Migraine, Skin conditions',
              },
              {
                icon: '🧪',
                q: '"Reports normal hain, fir bhi takleef hai..."',
                a: 'Ye functional disorders hain — allopathy mein limited treatment hoti hai. Homeopathy individual constitution dekh ke treat karta hai.',
                diseases: 'IBS, Anxiety, Hair Fall, Fatigue',
              },
            ].map(c => (
              <div key={c.q} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, padding: '24px' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 10, lineHeight: 1.4 }}>{c.q}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.75, fontWeight: 300, marginBottom: 12 }}>{c.a}</div>
                <div style={{ fontSize: 11, color: 'var(--gold-lt)', opacity: 0.8 }}>Common in: {c.diseases}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', padding: '32px', background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(184,145,42,.3)' }}>
            <p style={{ fontSize: 16, color: '#fff', fontWeight: 300, lineHeight: 1.8, marginBottom: 20, maxWidth: 540, margin: '0 auto 20px' }}>
              <strong style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontStyle: 'italic', color: 'var(--gold-lt)' }}>Homeopathy guarantee nahi deta</strong> — lekin ek honest second opinion deta hai. Pehle case dekho, fir decide karo.
            </p>
            <a href={`${WA_BASE}?text=Namaste%20Dr.%20Shadab%2C%20maine%20sab%20try%20kar%20liya%20hai%2C%20ek%20baar%20aapse%20baat%20karni%20hai.`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 30px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 700, boxShadow: '0 4px 20px rgba(37,162,68,.4)' }}>
              📲 Consultation Lein — WhatsApp Pe
            </a>
          </div>
        </div>
      </section>

      {/* ── YOUTUBE SECTION ── */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(52px,8vw,90px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <SL c="Watch & Learn" />
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: 'var(--ink)' }}>Dr. Shadab Explains</h2>
          <Orn />
          <p style={{ fontSize: 14, color: 'var(--ink3)', marginTop: 8, fontWeight: 300 }}>Simple language mein — new videos every week on YouTube</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 16 }} className="grid-auto">
          {videos.slice(0, 4).map((v) => (
            <a key={v.id} href={`https://youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,21,16,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(0,0,0,.2)' }}>
                      <span style={{ color: 'var(--gold-dk)', fontSize: 16, marginLeft: 3 }}>▶</span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontSize: 11, color: 'var(--gold-dk)', fontWeight: 500, marginBottom: 5 }}>{v.topic}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.55, marginBottom: 6 }}>{v.title}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink4)' }}>{v.date}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/blog" style={{ display: 'inline-block', padding: '12px 26px', border: '1px solid var(--border2)', background: 'var(--card)', color: 'var(--ink2)', borderRadius: 100, fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
            ▶ View All Videos
          </Link>
        </div>
      </section>

      {/* Desktop FAB */}
      <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
