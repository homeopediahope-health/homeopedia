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
  { id: 'skin',        title: 'Skin & Hair',      sub: 'Psoriasis, Eczema, Vitiligo',   n: 8,  bg: '#e8d2c4', icon: '🌸' },
  { id: 'joints',      title: 'Joints & Pain',    sub: 'Arthritis, Sciatica, Gout',     n: 6,  bg: '#dde6cd', icon: '🦴' },
  { id: 'digestive',   title: 'Digestive Health', sub: 'IBS, Piles, Acidity',           n: 5,  bg: '#f0e3c4', icon: '🌾' },
  { id: 'mental',      title: 'Mental Wellness',  sub: 'Anxiety, Depression, Migraine', n: 5,  bg: '#dcd8ec', icon: '🧠' },
  { id: "women",       title: "Women's Health",   sub: 'PCOD, Periods, Menopause',      n: 5,  bg: '#eccfd9', icon: '🌷' },
  { id: 'hair',        title: 'Hair Problems',    sub: 'Hair Fall, Alopecia, Dandruff', n: 4,  bg: '#dde6cd', icon: '✨' },
  { id: 'respiratory', title: 'Respiratory',      sub: 'Asthma, Allergies, Sinusitis',  n: 4,  bg: '#f5d7d7', icon: '🫁' },
  { id: 'endocrine',   title: 'Hormonal',         sub: 'Thyroid, Diabetes, PCOD',       n: 4,  bg: '#cce0e0', icon: '💧' },
]

const featured = [
  { slug: 'psoriasis', title: 'Psoriasis', hindi: 'सोरायसिस', cat: 'Skin',    min: 7 },
  { slug: 'sciatica',  title: 'Sciatica',  hindi: 'सायटिका',  cat: 'Joints',  min: 5 },
  { slug: 'pcod',      title: 'PCOD/PCOS', hindi: 'पीसीओडी', cat: "Women's", min: 8 },
  { slug: 'migraine',  title: 'Migraine',  hindi: 'माइग्रेन', cat: 'Mental',  min: 5 },
]

const dietPromo = [
  { slug: 'psoriasis', disease: 'Psoriasis', hindi: 'सोरायसिस', eat: 8, avoid: 6 },
  { slug: 'pcod',      disease: 'PCOD/PCOS', hindi: 'पीसीओडी', eat: 8, avoid: 6 },
  { slug: 'thyroid',   disease: 'Thyroid',   hindi: 'थायरॉइड',  eat: 8, avoid: 6 },
  { slug: 'ibs',       disease: 'IBS',       hindi: 'आईबीएस',  eat: 8, avoid: 6 },
]

const testimonials = [
  { name: 'Reena Singh', location: 'Delhi', age: 34, condition: 'Psoriasis', months: 6, quote: 'Itne salon baad mujhe kisi ne bola ke yahan sirf dawaai hi nahi, diet bhi matter karti hai. 6 mahine mein patches 70% kam ho gaye. Pehli baar achha lag raha hai.' },
  { name: 'Arun Mehta', location: 'Mumbai', age: 47, condition: 'Sciatica', months: 4, quote: 'Pair mein bijli jaisi takleef thi — 4 mahine ke treatment ke baad ab bina dawai ke chal raha hoon. Dr. Shadab ne poora case samjha, phir medicine di.' },
  { name: 'Priya Sharma', location: 'Pune', age: 29, condition: 'PCOD', months: 5, quote: 'PCOD ki wajah se 2 saal se periods irregular the. 5 mahine baad regular ho gayi. Website pe jo guide padhi thi ussi se hi trust bana tha unpe.' },
  { name: 'Ramesh Yadav', location: 'Lucknow', age: 52, condition: 'Piles', months: 3, quote: 'Operation ka darr tha. Homeopathy se 3 mahine mein bleeding band ho gayi, kabhi surgery nahi karwai. Ye possible lagta hi nahi tha pehle.' },
]

const VIDEOS_FALLBACK = [
  { id: '44gt-Fu1XdU', title: 'IBS mein Normal Reports? Brain-Gut Connection', date: '17 Apr 2026', topic: 'Digestive' },
  { id: 'c29pSyE5apE', title: 'Skin Problem Se Asthma — Atopic March Kya Hai',  date: '10 Apr 2026', topic: 'Skin'     },
  { id: 'NKHq9F0bVSs', title: 'Glutathione Kab Kaam Karta Hai? Liver Secret',   date: '3 Apr 2026',  topic: 'General'  },
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
        url: 'https://www.homeopedia.in',
        logo: 'https://www.homeopedia.in/favicon.ico',
        description: "India's patient-first homeopathy knowledge portal — evidence-based, doctor-reviewed.",
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
        url: 'https://www.homeopedia.in/about',
        sameAs: ['https://www.youtube.com/@drshadabshomoeopathy', 'https://drshadabs.com'],
      },
      {
        '@type': 'WebSite',
        name: 'HomeoPedia.in',
        url: 'https://www.homeopedia.in',
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: 'https://www.homeopedia.in/diseases?q={search_term_string}' },
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
        {/* Background blobs — sage-tinted */}
        <div style={{ position: 'absolute', top: '-8%', right: '-8%', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle,rgba(63,107,77,.11) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '-10%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(63,107,77,.06) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)', backgroundSize: '60px 60px', opacity: 0.18, pointerEvents: 'none' }} />
        <Sparkles />

        <div style={{ position: 'relative', maxWidth: 800, width: '100%', zIndex: 1 }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 18px', border: '1px solid rgba(63,107,77,.35)', borderRadius: 100, marginBottom: 28, background: 'rgba(63,107,77,.06)' }}>
            <Starsvg s={9} />
            <span style={{ fontSize: 11, color: 'var(--sage-dk)', letterSpacing: 2.2, fontWeight: 600 }}>EVIDENCE BASED · DOCTOR REVIEWED</span>
          </div>

          {/* H1 */}
          <h1 className="hero-title" style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(36px,5.5vw,70px)', fontWeight: 600, lineHeight: 1.1, marginBottom: 22, color: 'var(--ink)', letterSpacing: '-0.03em' }}>
            Homoeopathy<br />
            <span className="sage-shimmer" style={{ fontFamily: 'inherit', fontWeight: 'inherit', fontSize: '1em', lineHeight: 'inherit', display: 'inline' }}>
              Hope is Here.
            </span>
          </h1>

          <p style={{ fontSize: 17, color: 'var(--ink3)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>
            Simple language mein disease guides, diet charts, dos &amp; don&apos;ts, aur homeopathy ka science. Doctor reviewed.
          </p>

          <HeroSearch />
        </div>

        {/* Stats bar */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: 60, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', boxShadow: 'var(--sh)', display: 'flex', flexWrap: 'wrap', maxWidth: 600, width: '100%' }} className="hero-stats">
          {[['200+', 'Disease Guides'], ['17+', 'Diet Charts'], ['1000+', 'FAQs'], ['100%', 'Doctor Reviewed']].map(([n, l], i, arr) => (
            <div key={l} style={{ flex: 1, textAlign: 'center', padding: '20px 10px', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 28, fontWeight: 600, color: 'var(--sage)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TRUST STRIP ── */}
      <div style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '20px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
          {[
            { icon: '🩺', text: 'Doctor Reviewed' },
            { icon: '📚', text: 'Evidence-based' },
            { icon: '🇮🇳', text: 'Hinglish First' },
            { icon: '📺', text: 'Video Explainers' },
          ].map(b => (
            <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: 'var(--sage-bg)', border: '1px solid rgba(63,107,77,.18)', borderRadius: 100 }}>
              <span style={{ fontSize: 15 }}>{b.icon}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--sage-dk)' }}>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES ── */}
      <section style={{ padding: 'clamp(52px,8vw,90px) clamp(16px,4vw,32px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <SL c="Browse by Body System" />
          <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em' }}>Find Your Disease Category</h2>
          <Orn />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: 16 }} className="grid-auto">
          {catGrid.map(cat => (
            <Link key={cat.id} href="/diseases" style={{ textDecoration: 'none' }}>
              <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '26px 22px', cursor: 'pointer', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: cat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                    {cat.icon}
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 500, marginTop: 2 }}>{cat.n} guides</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 17, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{cat.title}</h3>
                <p style={{ fontSize: 12, color: 'var(--ink3)', lineHeight: 1.6, marginBottom: 14 }}>{cat.sub}</p>
                <div style={{ fontSize: 12, color: 'var(--sage)', fontWeight: 600 }}>Explore →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED DISEASES ── */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(52px,8vw,90px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <SL c="Most Read" />
          <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em' }}>Popular Disease Guides</h2>
          <Orn />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(270px,1fr))', gap: 18 }} className="grid-auto">
          {featured.map(d => (
            <Link key={d.slug} href={`/diseases/${d.slug}`} style={{ textDecoration: 'none' }}>
              <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '26px', cursor: 'pointer', height: '100%' }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: 'var(--sage-bg)', color: 'var(--sage-dk)', border: '1px solid rgba(63,107,77,.2)' }}>{d.cat}</span>
                  <span style={{ fontSize: 11, color: 'var(--ink4)' }}>📖 {d.min} min</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 22, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{d.title}</h3>
                <div style={{ fontSize: 14, color: 'var(--sage-dk)', fontFamily: 'var(--font-display,Georgia,serif)', fontStyle: 'italic', marginBottom: 12 }}>{d.hindi}</div>
                <div style={{ marginTop: 16, fontSize: 13, color: 'var(--sage)', fontWeight: 600 }}>Read full guide →</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/diseases" style={{ display: 'inline-block', padding: '12px 28px', border: '1px solid var(--border2)', background: 'var(--card)', color: 'var(--ink2)', borderRadius: 100, fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
            View All 200+ Conditions →
          </Link>
        </div>
      </section>

      {/* ── DIET CHARTS PROMO ── */}
      <section style={{ background: 'linear-gradient(135deg,var(--sage-bg) 0%,rgba(63,107,77,.03) 100%)', borderTop: '1px solid rgba(63,107,77,.12)', borderBottom: '1px solid rgba(63,107,77,.12)', padding: '60px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 32, alignItems: 'center' }}>
          <div>
            <SL c="Diet Resource" />
            <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: 'var(--ink)', margin: '10px 0 12px', letterSpacing: '-0.02em' }}>Disease-Wise Diet Charts</h2>
            <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>
              Psoriasis, PCOD, Thyroid, IBS, Sciatica, Hair Fall — har disease ke liye detailed diet chart. Kya khayein, kya nahi, sample day plan — complete guide.
            </p>
            <Link href="/diet" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: 'var(--sage)', color: '#fff', borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 3px 14px rgba(63,107,77,.28)' }}>
              🥗 Dekhein Diet Charts →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {dietPromo.map(d => (
              <Link key={d.slug} href={`/diet/${d.slug}`} style={{ textDecoration: 'none' }}>
                <div className="hov" style={{ background: 'var(--card)', border: '1px solid rgba(63,107,77,.18)', borderRadius: 12, padding: '14px 16px', cursor: 'pointer' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-display,Georgia,serif)', marginBottom: 3 }}>{d.disease}</div>
                  <div style={{ fontSize: 10, color: 'var(--sage-dk)', fontStyle: 'italic', fontFamily: 'var(--font-display,Georgia,serif)' }}>{d.hindi}</div>
                  <div style={{ fontSize: 10, color: 'var(--ink4)', marginTop: 4 }}>✓{d.eat} foods · ✕{d.avoid} avoid</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DR. SHADAB ── */}
      <section style={{ padding: 'clamp(52px,8vw,90px) clamp(16px,4vw,32px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 'clamp(24px,4vw,52px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 48, alignItems: 'center', boxShadow: 'var(--sh)' }} className="doc-grid">
          <div style={{ textAlign: 'center' }}>
            {/* SK monogram */}
            <div style={{ width: 120, height: 120, borderRadius: '50%', margin: '0 auto 18px', background: 'linear-gradient(135deg,var(--sage-dk),var(--sage-lt))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 32, color: '#fff', fontWeight: 700, boxShadow: '0 4px 24px rgba(63,107,77,.28)' }}>SK</div>
            <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>Dr. Shadab Khan</div>
            <div style={{ fontSize: 12, color: 'var(--sage-dk)', marginTop: 5, fontStyle: 'italic' }}>MD Homoeopath · Reg. No. 54130</div>
            {/* 4 stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 18 }}>
              {[['12+', 'Years'], ['50K+', 'Patients'], ['200+', 'Conditions'], ['4.9★', 'Rating']].map(([n, l]) => (
                <div key={l} style={{ background: 'var(--sage-bg)', border: '1px solid rgba(63,107,77,.15)', borderRadius: 10, padding: '10px 8px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 18, fontWeight: 600, color: 'var(--sage)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 10, color: 'var(--ink4)', marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SL c="Medically Reviewed" />
            <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 30, fontWeight: 600, color: 'var(--ink)', margin: '12px 0 16px', letterSpacing: '-0.02em' }}>Every Article Personally Reviewed</h2>
            <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.85, fontWeight: 300, marginBottom: 24 }}>
              HomeoPedia pe har article Dr. Shadab Khan ne personally review kiya hai. 12+ saal ki clinical experience aur 50,000+ patients ki real-world knowledge se backed content — sirf aapke liye.
            </p>
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: 'linear-gradient(135deg,#1a6b33,#25a244)', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600, boxShadow: '0 4px 16px rgba(37,162,68,.3)' }}>
              📲 WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(52px,8vw,90px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <SL c="Patient Stories" />
          <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em' }}>Real Results, Real Patients</h2>
          <Orn />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 18 }} className="grid-auto">
          {testimonials.map(t => (
            <div key={t.name} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                {/* Avatar monogram */}
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--sage-bg)', border: '2px solid rgba(63,107,77,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display,Georgia,serif)', fontWeight: 700, fontSize: 16, color: 'var(--sage-dk)', flexShrink: 0 }}>
                  {t.name.split(' ').map(w => w[0]).join('')}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--ink)' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink4)' }}>{t.location} · Age {t.age}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: 'var(--sage-bg)', color: 'var(--sage-dk)', fontWeight: 600 }}>{t.condition}</span>
                <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: 'var(--warm-bg)', color: 'var(--warm)', fontWeight: 600 }}>{t.months} months</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.75, fontStyle: 'italic', fontFamily: 'var(--font-display,Georgia,serif)' }}>&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── YOUTUBE SECTION ── */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(52px,8vw,90px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <SL c="Watch & Learn" />
          <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em' }}>Dr. Shadab Explains</h2>
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
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,32,26,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(0,0,0,.2)' }}>
                      <span style={{ color: 'var(--sage-dk)', fontSize: 16, marginLeft: 3 }}>▶</span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontSize: 11, color: 'var(--sage-dk)', fontWeight: 500, marginBottom: 5 }}>{v.topic}</div>
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

      {/* ── BIG CONSULT BAND ── */}
      <section style={{ background: 'linear-gradient(135deg,var(--sage-dk) 0%,var(--sage) 100%)', padding: 'clamp(52px,8vw,80px) clamp(16px,4vw,32px)', marginTop: 0 }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="grid-2">
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.6)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Personalized Treatment</div>
            <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 600, color: '#fff', lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.02em' }}>
              Aap akele nahi hain.<br />
              <span style={{ fontStyle: 'italic', opacity: 0.85 }}>Ek doctor, ek roadmap.</span>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.75)', lineHeight: 1.8, fontWeight: 300, marginBottom: 28 }}>
              Sirf ek WhatsApp message — aur Dr. Shadab Khan aapka case personally dekhenge. Classical homeopathy, personalized medicine, aur diet guidance — ek saath.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: '#fff', color: 'var(--sage-dk)', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 700, boxShadow: '0 4px 20px rgba(0,0,0,.15)' }}>
                📲 WhatsApp Karein
              </a>
              <a href="tel:+918983458889" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: 'rgba(255,255,255,.12)', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600, border: '1px solid rgba(255,255,255,.25)' }}>
                📞 Call: 8983-458-889
              </a>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 18, padding: '28px 24px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.7)', marginBottom: 18, letterSpacing: 1 }}>CONSULTATION MEIN MILTA HAI</div>
            {[
              '✓ Detailed case history — symptoms, triggers, history sab',
              '✓ Personalized constitutional medicine',
              '✓ Disease-specific diet guidance',
              '✓ Do\'s & don\'ts — aapki lifestyle ke hisaab se',
              '✓ WhatsApp follow-up support',
            ].map(item => (
              <div key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,.85)', padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,.1)', lineHeight: 1.6 }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop FAB */}
      <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
