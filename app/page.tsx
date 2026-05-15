import { WA_BASE, WA_CONSULT } from '@/lib/constants'
import Link from 'next/link'
import { getLatestYouTubeVideos } from '@/lib/youtube'
import SL from '@/components/SL'
import HomeHero from '@/components/HomeHero'

const YT_CHANNEL_ID = 'UCkC9ovyrfM4RA-axYQ5Gflw'
export const revalidate = 3600

const catGrid = [
  { id: 'skin',        title: 'Skin & Hair',      sub: 'Psoriasis, Eczema, Vitiligo · Acne · Ringworm',   count: 34, bg: '#e8d2c4', icon: '🌸' },
  { id: 'joints',      title: 'Joints & Pain',    sub: 'Arthritis · Sciatica · Gout · Cervical',           count: 28, bg: '#dde6cd', icon: '🦴' },
  { id: 'digestive',   title: 'Digestive',        sub: 'IBS · Piles · Acidity · Fatty Liver',              count: 31, bg: '#f0e3c4', icon: '🌾' },
  { id: 'mental',      title: 'Mental Wellness',  sub: 'Anxiety · Depression · Migraine · Insomnia',       count: 22, bg: '#dcd8ec', icon: '🧠' },
  { id: 'women',       title: "Women's Health",   sub: 'PCOD · Fibroid · Periods · Menopause',             count: 14, bg: '#eccfd9', icon: '🌷' },
  { id: 'hair',        title: 'Hair Problems',    sub: 'Hair Fall · Alopecia · Dandruff',                  count: 8,  bg: '#dde6cd', icon: '✨' },
  { id: 'respiratory', title: 'Respiratory',      sub: 'Asthma · Allergies · Sinusitis · Tonsillitis',     count: 18, bg: '#f5d7d7', icon: '🫁' },
  { id: 'endocrine',   title: 'Hormonal',         sub: 'Thyroid · Diabetes · Hashimoto',                   count: 18, bg: '#cce0e0', icon: '💧' },
]

const featured = [
  { slug: 'psoriasis', title: 'Psoriasis',  hindi: 'सोरायसिस', cat: 'Skin',     min: 7 },
  { slug: 'sciatica',  title: 'Sciatica',   hindi: 'सायटिका',  cat: 'Joints',   min: 5 },
  { slug: 'pcod',      title: 'PCOD/PCOS',  hindi: 'पीसीओडी',  cat: "Women's",  min: 8 },
  { slug: 'migraine',  title: 'Migraine',   hindi: 'माइग्रेन', cat: 'Mental',   min: 5 },
  { slug: 'thyroid',   title: 'Thyroid',    hindi: 'थायरॉइड',  cat: 'Hormonal', min: 6 },
  { slug: 'piles',     title: 'Piles',      hindi: 'बवासीर',   cat: 'Digestive', min: 6 },
]

const testimonials = [
  { name: 'Priya S.', location: 'Delhi', age: 34, condition: 'PCOS', months: 5, quote: '5 saal se PCOS tha — periods irregular, weight badh raha tha. Dr. Shadab ke saath 5 mahine treatment ke baad cycle regular hai. Pehli baar lag raha hai body normal ho rahi hai.' },
  { name: 'Aman V.', location: 'Lucknow', age: 42, condition: 'Sciatica', months: 3, quote: 'Slip disc ki wajah se 8 mahine se kamar se pair tak dard tha. 3 mahine mein 80% relief, ab routine work normally kar leta hoon. Surgery ka darr khatam hua.' },
  { name: 'Sana R.', location: 'Bhopal', age: 28, condition: 'Eczema', months: 6, quote: 'Bachpan se eczema tha, allopathy creams ki dependence. Yahan root cause par treatment hua — 6 mahine mein skin clear hai aur recurrence nahi.' },
  { name: 'Rakesh M.', location: 'Pune', age: 51, condition: 'Recurrent Cold', months: 4, quote: 'Har 15 din mein cold pakad leta tha. Dr. Shadab ke constitutional remedy ke baad 4 mahine se cold nahi hua. Immunity completely theek ho gayi.' },
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
        description: '15+ years experience, 10,000+ patients treated. Specialisation in chronic diseases.',
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

      {/* ── HERO (client component — two-column with visual) ── */}
      <HomeHero />

      {/* ── TRUST STRIP ── */}
      <div style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '16px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10 }}>
          {[
            { icon: '⚕️', text: 'Doctor Reviewed',   detail: 'Dr. Shadab Khan, MD' },
            { icon: '📚', text: 'Evidence-based',     detail: 'Boericke & clinical practice' },
            { icon: '🇮🇳', text: 'Hinglish First',    detail: 'Aapki bhasha mein' },
            { icon: '▶️', text: 'Video Explainers',   detail: 'Har condition ka video' },
          ].map(b => (
            <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 20px', background: 'var(--sage-bg)', border: '1px solid rgba(63,107,77,.18)', borderRadius: 100 }}>
              <span style={{ fontSize: 16 }}>{b.icon}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--sage-dk)', lineHeight: 1.2 }}>{b.text}</div>
                <div style={{ fontSize: 10, color: 'var(--ink4)', fontWeight: 300 }}>{b.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES ── */}
      <section style={{ padding: 'clamp(52px,8vw,80px) clamp(16px,4vw,32px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'clamp(24px,4vw,36px)', gap: 14, flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--sage-dk)', marginBottom: 10 }}>
              <div style={{ width: 14, height: 1, background: 'var(--sage-dk)', opacity: 0.6 }} />
              Browse by body system
            </div>
            <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.025em', lineHeight: 1 }}>
              200+ conditions, organized.
            </h2>
          </div>
          <Link href="/diseases" style={{ fontSize: 13, color: 'var(--sage)', fontWeight: 600, textDecoration: 'none' }}>View all 200+ →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14 }} className="grid-auto">
          {catGrid.map((cat, i) => (
            <Link key={cat.id} href={`/diseases?cat=${cat.id}`} style={{ textDecoration: 'none' }}>
              <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, padding: '22px', cursor: 'pointer', height: '100%', transition: 'all .3s' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 14, background: cat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{cat.icon}</div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--sage)', lineHeight: 1 }}>{cat.count}</div>
                    <div style={{ fontSize: 9, color: 'var(--ink4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>guides</div>
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 18, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.015em', marginBottom: 6 }}>{cat.title}</h3>
                <p style={{ fontSize: 11, color: 'var(--ink4)', lineHeight: 1.5 }}>{cat.sub}</p>
                <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, color: 'var(--sage)' }}>Explore →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── VIDEOS ── */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(52px,8vw,80px) clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'clamp(24px,4vw,32px)', gap: 14, flexWrap: 'wrap' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: 10 }}>
                <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
                YouTube · explainers
              </div>
              <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(26px,4vw,38px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.025em', lineHeight: 1 }}>
                Watch, samjho, theek ho jao.
              </h2>
            </div>
            <Link href="/blog" style={{ fontSize: 13, color: 'var(--sage)', fontWeight: 600, textDecoration: 'none' }}>All videos →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 16 }} className="grid-auto">
            {videos.slice(0, 4).map((v) => (
              <a key={v.id} href={`https://youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,32,26,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,.94)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
                        <span style={{ color: 'var(--sage-dk)', fontSize: 18, marginLeft: 3 }}>▶</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '14px 16px' }}>
                    <div style={{ fontSize: 11, color: 'var(--warm)', fontWeight: 600, marginBottom: 5 }}>{v.topic}</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.55, marginBottom: 6 }}>{v.title}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink4)' }}>{v.date} · Dr. Shadab</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR DISEASE GUIDES ── */}
      <section style={{ padding: 'clamp(52px,8vw,80px) clamp(16px,4vw,32px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'clamp(24px,4vw,36px)', gap: 14, flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--sage-dk)', marginBottom: 10 }}>
              <div style={{ width: 14, height: 1, background: 'var(--sage-dk)', opacity: 0.6 }} />
              Most read
            </div>
            <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.025em', lineHeight: 1 }}>
              Popular Disease Guides
            </h2>
          </div>
          <Link href="/diseases" style={{ fontSize: 13, color: 'var(--sage)', fontWeight: 600, textDecoration: 'none' }}>View all 200+ →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: 16 }} className="grid-auto">
          {featured.map(d => (
            <Link key={d.slug} href={`/diseases/${d.slug}`} style={{ textDecoration: 'none' }}>
              <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, padding: '24px', cursor: 'pointer', height: '100%' }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: 'var(--sage-bg)', color: 'var(--sage-dk)', border: '1px solid rgba(63,107,77,.2)' }}>{d.cat}</span>
                  <span style={{ fontSize: 11, color: 'var(--ink4)' }}>📖 {d.min} min</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 22, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.015em', marginBottom: 4 }}>{d.title}</h3>
                <div style={{ fontSize: 14, color: 'var(--sage-dk)', fontFamily: 'var(--font-display,Georgia,serif)', fontStyle: 'italic', marginBottom: 14 }}>{d.hindi}</div>
                <div style={{ fontSize: 12, color: 'var(--sage)', fontWeight: 700 }}>Read full guide →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── DR. SHADAB ── */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(52px,8vw,80px)', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 28, padding: 'clamp(28px,4vw,52px) clamp(22px,4vw,56px)', display: 'grid', gridTemplateColumns: '260px 1fr', gap: 'clamp(24px,4vw,56px)', alignItems: 'center', boxShadow: 'var(--sh)', position: 'relative', overflow: 'hidden' }} className="doc-grid">
          <div style={{ position: 'absolute', right: -100, top: -100, width: 320, height: 320, borderRadius: '50%', background: 'var(--sage-bg)', opacity: 0.6 }} />
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            {/* SK monogram — large */}
            <div style={{ width: 'clamp(160px,18vw,220px)', height: 'clamp(160px,18vw,220px)', borderRadius: '50%', margin: '0 auto 18px', background: 'linear-gradient(135deg,var(--sage),var(--sage-dk))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(52px,7vw,88px)', color: '#fff', fontWeight: 700, boxShadow: '0 24px 60px rgba(63,107,77,.35)', border: '6px solid var(--bg)' }}>SK</div>
            <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 17, fontWeight: 700, color: 'var(--ink)' }}>Dr. Shadab Khan</div>
            <div style={{ fontSize: 12, color: 'var(--sage-dk)', marginTop: 4, fontStyle: 'italic' }}>MD Homoeopath</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, padding: '5px 12px', background: 'var(--sage-bg)', border: '1px solid rgba(63,107,77,.2)', borderRadius: 99, fontSize: 11, fontWeight: 600 }}>
              <span className="online-dot" /><span style={{ color: 'var(--sage-dk)' }}>Online now</span>
            </div>
            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 18 }}>
              {[['15+', 'Years'], ['10K+', 'Patients'], ['200+', 'Conditions'], ['4.9★', 'Rating']].map(([n, l]) => (
                <div key={l} style={{ background: 'var(--sage-bg)', border: '1px solid rgba(63,107,77,.15)', borderRadius: 10, padding: '10px 8px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--sage)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 10, color: 'var(--ink4)', marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--sage-dk)', marginBottom: 12 }}>
              <div style={{ width: 14, height: 1, background: 'var(--sage-dk)', opacity: 0.6 }} />
              Aapke doctor
            </div>
            <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.02, marginBottom: 8 }}>
              Dr. Shadab Khan
            </h2>
            <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontStyle: 'italic', color: 'var(--sage)', fontSize: 'clamp(14px,1.8vw,19px)', marginBottom: 18, fontWeight: 500 }}>MD Homoeopath · 15+ yrs experience</div>
            <p style={{ fontSize: 'clamp(13px,1.5vw,15px)', color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300, maxWidth: 540, marginBottom: 24 }}>
              Classical homeopathy practitioner. Boericke aur Allen ke Materia Medica par based — har case ko constitutional approach se dekhte hain. HomeoPedia pe har article Dr. Shadab ne personally review kiya hai — 15+ saal ki clinical experience se backed content.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 24px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600, boxShadow: '0 4px 16px rgba(37,162,68,.3)' }}>
                💬 WhatsApp Consultation
              </a>
              <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 22px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--ink2)', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
                Know more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(52px,8vw,80px) clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ marginBottom: 'clamp(24px,4vw,36px)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: 10 }}>
              <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
              Patient stories
            </div>
            <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.025em', lineHeight: 1 }}>
              Healing aaya hai. Yahan hai.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 18 }} className="grid-auto">
            {testimonials.map(t => (
              <div key={t.name} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, padding: 'clamp(20px,3vw,30px)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 18, right: 22, fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 64, color: 'var(--sage-bg-2)', lineHeight: 0.6, userSelect: 'none' }}>"</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display,Georgia,serif)', fontWeight: 700, fontSize: 18, color: '#fff', flexShrink: 0 }}>
                    {t.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 2 }}>{t.location} · age {t.age} · {t.condition}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', padding: '4px 10px', background: 'var(--sage-bg)', color: 'var(--sage-dk)', borderRadius: 99, fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap' }}>{t.months} mo</div>
                </div>
                <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.75, fontFamily: 'var(--font-display,Georgia,serif)', fontStyle: 'italic' }}>"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIG CONSULT BAND ── */}
      <section style={{ padding: 'clamp(36px,6vw,60px) clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ padding: 'clamp(32px,5vw,56px) clamp(26px,5vw,64px)', background: 'linear-gradient(135deg,var(--sage) 0%,var(--sage-dk) 100%)', borderRadius: 28, color: '#fff', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,4vw,48px)', alignItems: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 60px rgba(63,107,77,.33)' }} className="grid-2">
            <div style={{ position: 'absolute', right: -80, top: -80, width: 280, height: 280, borderRadius: '50%', background: 'rgba(255,255,255,.07)' }} />
            <div style={{ position: 'absolute', right: -120, bottom: -120, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,.04)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.8 }}>Personal consultation</div>
              <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(26px,4vw,44px)', fontWeight: 600, letterSpacing: '-0.03em', marginTop: 14, lineHeight: 1.05, maxWidth: 480 }}>
                Aap akele nahi hain.<br />
                <em style={{ opacity: 0.88 }}>Ek doctor, ek roadmap.</em>
              </h2>
              <p style={{ fontSize: 'clamp(13px,1.5vw,15px)', opacity: 0.88, marginTop: 14, lineHeight: 1.65, maxWidth: 480, fontWeight: 300 }}>
                Apna case Dr. Shadab ko WhatsApp pe bhejein — symptoms, history, reports. Personalised homeopathic plan banta hai, Hinglish mein.
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 26, flexWrap: 'wrap' }}>
                <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer" style={{ padding: 'clamp(11px,1.5vw,14px) clamp(18px,2vw,24px)', background: '#fff', color: 'var(--sage-dk)', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Start WhatsApp</a>
                <a href="tel:+918983458889" style={{ padding: 'clamp(11px,1.5vw,14px) clamp(18px,2vw,24px)', background: 'rgba(255,255,255,.18)', color: '#fff', borderRadius: 99, fontSize: 13, fontWeight: 700, backdropFilter: 'blur(8px)', textDecoration: 'none', whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,.25)' }}>📞 8983 458 889</a>
              </div>
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ padding: 'clamp(18px,2.5vw,24px)', background: 'rgba(255,255,255,.1)', borderRadius: 18, backdropFilter: 'blur(8px)' }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 14 }}>What you get</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    ['📋', 'Case-history detailed review'],
                    ['💊', 'Personalised classical remedy'],
                    ['🥗', 'Diet + lifestyle guidance'],
                    ['📞', 'WhatsApp follow-up support'],
                    ['🌐', 'Across India tele-consult'],
                  ].map(([ic, t]) => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, fontWeight: 500 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, flexShrink: 0 }}>{ic}</div>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop FAB */}
      <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
