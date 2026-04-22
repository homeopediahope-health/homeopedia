import Link from 'next/link'
import Image from 'next/image'
import { getAllDiseases } from '@/lib/queries'
import { getLatestYouTubeVideos } from '@/lib/youtube'
import YouTubeSection from '@/components/YouTubeSection'

const YT_CHANNEL_ID = 'UCkC9ovyrfM4RA-axYQ5Gflw'
export const revalidate = 3600

const categories = [
  { label: 'Skin Diseases', desc: 'Psoriasis, Eczema, Vitiligo', count: 8, href: '/diseases' },
  { label: 'Joints & Muscles', desc: 'Arthritis, Sciatica, Back Pain', count: 6, href: '/diseases' },
  { label: 'Digestive Health', desc: 'IBS, Fissure, Acidity', count: 5, href: '/diseases' },
  { label: 'Mental Health', desc: 'Anxiety, Depression, Insomnia', count: 5, href: '/diseases' },
  { label: "Women's Health", desc: 'PCOD, Periods, Menopause', count: 5, href: '/diseases' },
  { label: 'Hair Problems', desc: 'Hair fall, Alopecia, Dandruff', count: 4, href: '/diseases' },
  { label: 'Respiratory', desc: 'Asthma, Allergies, Sinusitis', count: 4, href: '/diseases' },
  { label: 'Endocrine', desc: 'Thyroid, Diabetes, Obesity', count: 4, href: '/diseases' },
]

const hotDiseases = [
  { title: 'Psoriasis', hindiName: 'Psoriasis / Chambal', category: 'Skin', slug: 'psoriasis', mins: 12 },
  { title: 'Sciatica', hindiName: 'Nass Ka Dard', category: 'Joints', slug: 'sciatica', mins: 10 },
  { title: 'Thyroid', hindiName: 'Thyroid Rog', category: 'Endocrine', slug: 'thyroid', mins: 9 },
  { title: 'PCOD / PCOS', hindiName: 'Mahila Rog', category: "Women's", slug: 'pcod', mins: 11 },
]

const popular = ['Psoriasis', 'Sciatica', 'Thyroid', 'PCOD', 'Migraine', 'Arthritis']

export default async function HomePage() {
  const diseases = await getAllDiseases().catch(() => [])
  const ytVideos = await getLatestYouTubeVideos(YT_CHANNEL_ID, 5)

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', padding: 'clamp(80px,10vw,120px) clamp(16px,4vw,32px) clamp(60px,8vw,100px)', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(160deg, var(--bg) 0%, var(--bg2) 100%)' }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, var(--gold-bg2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, var(--gold-bg) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          {/* Badge */}
          <div style={{ display: 'inline-block', background: 'var(--gold-bg)', color: 'var(--gold-dk)', padding: '6px 18px', borderRadius: 100, fontSize: '0.82rem', fontWeight: 600, marginBottom: 28, border: '1px solid rgba(184,145,42,0.25)', fontStyle: 'italic', letterSpacing: '0.02em' }}>
            ✦ Medically Reviewed &nbsp;•&nbsp; CCRH Certified
          </div>

          {/* H1 */}
          <h1 className="font-playfair" style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: 1.12, marginBottom: 20, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
            India&apos;s Trusted Guide to<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Homeopathic Healing</em>
          </h1>

          {/* Subtext */}
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 36, color: 'var(--ink3)', maxWidth: 560, margin: '0 auto 36px' }}>
            Simple language mein disease guides, diet charts, dos &amp; don&apos;ts, aur homeopathy ka science. Free, doctor reviewed.
          </p>

          {/* Search bar */}
          <div style={{ position: 'relative', maxWidth: 540, margin: '0 auto 20px' }}>
            <input
              type="text"
              placeholder="Search disease, symptom, or medicine..."
              style={{ width: '100%', padding: '17px 140px 17px 22px', borderRadius: 100, border: '1.5px solid var(--border2)', fontSize: '1rem', background: 'white', color: 'var(--ink)', outline: 'none', boxShadow: 'var(--sh)', boxSizing: 'border-box' }}
            />
            <button style={{ position: 'absolute', right: 6, top: 6, bottom: 6, padding: '0 24px', background: 'linear-gradient(135deg, var(--gold-dk) 0%, var(--gold-lt) 100%)', color: 'white', border: 'none', borderRadius: 100, fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              Search
            </button>
          </div>

          {/* Popular tags */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--ink4)', alignSelf: 'center' }}>Popular:</span>
            {popular.map(p => (
              <Link key={p} href={`/diseases/${p.toLowerCase()}`} style={{ background: 'white', border: '1px solid var(--border)', padding: '5px 14px', borderRadius: 100, fontSize: '0.82rem', color: 'var(--ink3)', textDecoration: 'none', boxShadow: 'var(--sh-sm)' }}>
                {p}
              </Link>
            ))}
          </div>

          {/* Stats row */}
          <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', boxShadow: 'var(--sh)', overflow: 'hidden', maxWidth: 600, width: '100%' }} className="hero-stats">
            {[
              { n: '200+', l: 'Disease Guides' },
              { n: '80+', l: 'Medicines' },
              { n: '1000+', l: 'FAQs' },
              { n: '100%', l: 'Doctor Reviewed' },
            ].map((s, i) => (
              <div key={s.l} style={{ padding: '20px 16px', textAlign: 'center', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <div className="font-playfair" style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: 6 }}>{s.n}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--ink4)', fontWeight: 500, lineHeight: 1.3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section style={{ padding: 'clamp(52px,8vw,90px) clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Browse by Body System</p>
            <h2 className="font-playfair" style={{ fontSize: 'clamp(26px, 4vw, 40px)', color: 'var(--ink)', marginBottom: 0 }}>Find Your Disease Category</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16 }}>
            {categories.map(cat => (
              <Link key={cat.label} href={cat.href} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '26px 22px', textDecoration: 'none', display: 'block', position: 'relative', transition: 'all 0.2s', boxShadow: 'var(--sh-sm)' }} className="cat-card">
                <div style={{ position: 'absolute', top: 16, right: 18, fontSize: '0.7rem', color: 'var(--ink4)', fontWeight: 500 }}>{cat.count} guides</div>
                <h3 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{cat.label}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--ink3)', lineHeight: 1.6 }}>{cat.desc}</p>
                <div style={{ marginTop: 14, fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 600 }}>Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOT DISEASES ── */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(52px,8vw,90px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Most Read</p>
              <h2 className="font-playfair" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', color: 'var(--ink)', marginBottom: 0 }}>Popular Disease Guides</h2>
            </div>
            <Link href="/diseases" style={{ display: 'inline-block', padding: '10px 24px', border: '1px solid var(--border2)', borderRadius: 100, fontSize: '0.85rem', color: 'var(--ink2)', textDecoration: 'none', fontWeight: 500 }}>
              View All {diseases.length > 0 ? diseases.length + '+' : ''} Diseases →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 18 }}>
            {hotDiseases.map(d => (
              <Link key={d.slug} href={`/diseases/${d.slug}`} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: 26, textDecoration: 'none', display: 'block', boxShadow: 'var(--sh-sm)', transition: 'all 0.2s' }} className="hot-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ background: 'var(--gold-bg)', color: 'var(--gold-dk)', padding: '3px 10px', borderRadius: 100, fontSize: '0.7rem', fontWeight: 600 }}>{d.category}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--ink4)' }}>📖 {d.mins} min</span>
                </div>
                <h3 className="font-playfair" style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 6, lineHeight: 1.2 }}>{d.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--gold-dk)', fontFamily: 'var(--font-playfair), Georgia, serif', fontStyle: 'italic', marginBottom: 16 }}>{d.hindiName}</p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 14, fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 600 }}>Read full guide →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CCRH TRUST BAND ── */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(52px,8vw,90px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--sage-deep) 0%, #1A3D30 100%)', borderRadius: 20, padding: 'clamp(36px,6vw,56px) clamp(24px,5vw,64px)', textAlign: 'center', boxShadow: 'var(--sh-lg)' }}>
            <div style={{ display: 'inline-block', background: 'var(--gold-bg)', color: 'var(--gold-lt)', padding: '5px 16px', borderRadius: 100, fontSize: '0.78rem', fontWeight: 600, marginBottom: 16, border: '1px solid rgba(184,145,42,0.3)' }}>
              🏛️ Ministry of AYUSH, Government of India
            </div>
            <h2 className="font-playfair" style={{ color: 'white', marginBottom: 14, fontSize: 'clamp(22px, 3.5vw, 36px)' }}>Evidence-Based, Not Just Traditional</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 36px', fontSize: '1rem', lineHeight: 1.75 }}>
              All content aligns with CCRH (Central Council for Research in Homoeopathy). Every disease guide includes scientific citations and clinical evidence.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
              {[{ n: '70+', l: 'CCRH Studies Referenced' }, { n: '15+', l: 'Years Clinical Review' }, { n: '100%', l: 'Doctor Reviewed' }].map(s => (
                <div key={s.l}>
                  <div className="font-playfair" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--gold-lt)', marginBottom: 4 }}>{s.n}</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUTUBE ── */}
      {ytVideos.length > 0 && (
        <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(52px,8vw,90px)' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FEE2E2', color: '#DC2626', padding: '4px 12px', borderRadius: 100, fontSize: '0.75rem', fontWeight: 600, marginBottom: 10 }}>▶ YouTube</div>
                <h2 className="font-playfair" style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--ink)', marginBottom: 0 }}>Watch &amp; Learn — Dr. Shadab Explains</h2>
              </div>
              <a href="https://www.youtube.com/@drshadabshomoeopathy" target="_blank" rel="noopener noreferrer"
                style={{ color: '#DC2626', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem', background: '#FEE2E2', padding: '8px 16px', borderRadius: 8 }}>
                Subscribe →
              </a>
            </div>
            <YouTubeSection videos={ytVideos} />
          </div>
        </section>
      )}

      {/* ── DR. SHADAB ── */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(60px,9vw,100px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 'clamp(32px,5vw,48px)', display: 'grid', gridTemplateColumns: '240px 1fr', gap: 40, alignItems: 'center', boxShadow: 'var(--sh)' }} className="expert-section">
            <Image src="/dr-shadab.png" alt="Dr. Shadab Khan MD Homeopath" width={240} height={280} style={{ width: '100%', height: '280px', borderRadius: 16, objectFit: 'cover', objectPosition: 'top', border: '2px solid var(--border2)' }} />
            <div>
              <div style={{ display: 'inline-block', background: 'var(--gold-bg)', color: 'var(--gold-dk)', padding: '4px 14px', borderRadius: 100, fontSize: '0.75rem', fontWeight: 600, marginBottom: 14, fontStyle: 'italic' }}>✦ Medically Reviewed Content</div>
              <h2 className="font-playfair" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', marginBottom: 6, color: 'var(--ink)' }}>Dr. Shadab Khan</h2>
              <p style={{ color: 'var(--gold-dk)', fontWeight: 600, marginBottom: 16, fontSize: '0.9rem' }}>MD (Homoeopathy) • Reg. No. 54130 • 15+ Years</p>
              <p style={{ marginBottom: 20, fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink3)' }}>
                Every article on HomeoPedia is personally reviewed by Dr. Shadab Khan. He has treated 10,000+ patients across India through in-person and online consultations.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
                {['MD Homeopath', '15+ Years', '10,000+ Patients', 'CCRH Aligned'].map(tag => (
                  <span key={tag} style={{ background: 'var(--sage-light)', color: 'var(--sage-deep)', padding: '5px 13px', borderRadius: 100, fontSize: '0.78rem', fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer"
                  style={{ background: '#22C55E', color: 'white', padding: '11px 22px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: '0.88rem' }}>
                  💬 WhatsApp Consultation
                </a>
                <Link href="/about" style={{ background: 'var(--bg2)', color: 'var(--ink2)', padding: '11px 22px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)', fontSize: '0.88rem' }}>
                  Know More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
