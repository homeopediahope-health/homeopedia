import Link from 'next/link'
import Image from 'next/image'
import { getAllDiseases } from '@/lib/queries'
import { getLatestYouTubeVideos } from '@/lib/youtube'
import YouTubeSection from '@/components/YouTubeSection'

const YT_CHANNEL_ID = 'UCkC9ovyrfM4RA-axYQ5Gflw'

export const revalidate = 3600

const categories = [
  { icon: '🧴', label: 'Skin Diseases', desc: 'Psoriasis, Eczema, Vitiligo', count: 15, href: '/diseases' },
  { icon: '🦴', label: 'Joints & Muscles', desc: 'Arthritis, Sciatica, Back Pain', count: 10, href: '/diseases' },
  { icon: '🍽️', label: 'Digestive Health', desc: 'IBS, Fissure, Acidity', count: 8, href: '/diseases' },
  { icon: '🧠', label: 'Mental Health', desc: 'Anxiety, Depression, Insomnia', count: 7, href: '/diseases' },
  { icon: '👩', label: "Women's Health", desc: 'PCOD, Periods, Menopause', count: 8, href: '/diseases' },
  { icon: '💆', label: 'Hair Problems', desc: 'Hair fall, Alopecia, Dandruff', count: 5, href: '/diseases' },
  { icon: '🫁', label: 'Respiratory', desc: 'Asthma, Allergies, Cough', count: 6, href: '/diseases' },
  { icon: '⚡', label: 'Endocrine', desc: 'Thyroid, Diabetes, Obesity', count: 6, href: '/diseases' },
]

const popular = ['Psoriasis', 'Sciatica', 'Migraine', 'Thyroid', 'PCOD']

export default async function HomePage() {
  const diseases = await getAllDiseases().catch(() => [])
  const recentDiseases = diseases.slice(0, 6)
  const ytVideos = await getLatestYouTubeVideos(YT_CHANNEL_ID, 5)

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '80px 0 100px', background: 'linear-gradient(180deg, var(--cream) 0%, #fff 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">

            {/* Left */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--sage-light)', color: 'var(--sage-deep)', padding: '6px 14px', borderRadius: 100, fontSize: '0.85rem', fontWeight: 500, marginBottom: 24 }}>
                🌿 Evidence-based Homeopathy
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: 20, color: 'var(--charcoal)' }}>
                India&apos;s trusted guide to homeopathic healing
              </h1>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 32, color: 'var(--gray-text)', maxWidth: 500 }}>
                Comprehensive disease guides, homeopathic medicines, and practical guidance. All content medically reviewed. Backed by CCRH research.
              </p>

              {/* Search */}
              <div style={{ background: 'white', borderRadius: 14, padding: 6, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', maxWidth: 500, border: '1px solid var(--gray-light)' }}>
                <input
                  type="text"
                  placeholder="Search disease, symptom, or medicine..."
                  style={{ flex: 1, border: 'none', outline: 'none', padding: '12px 16px', fontSize: '1rem', background: 'transparent', color: 'var(--charcoal)' }}
                />
                <button style={{ background: 'var(--sage-deep)', color: 'white', border: 'none', padding: '12px 20px', borderRadius: 10, fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem' }}>
                  Search
                </button>
              </div>

              {/* Suggestions */}
              <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ color: 'var(--gray-text)', fontSize: '0.85rem' }}>Popular:</span>
                {popular.map(p => (
                  <Link key={p} href={`/diseases/${p.toLowerCase()}`} style={{ background: 'white', border: '1px solid var(--gray-light)', padding: '5px 12px', borderRadius: 100, fontSize: '0.85rem', color: 'var(--gray-text)', textDecoration: 'none' }}>
                    {p}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, background: 'var(--coral)', color: 'white', padding: '12px 16px', borderRadius: 12, fontSize: '0.85rem', fontWeight: 600, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transform: 'rotate(3deg)', zIndex: 10 }}>
                ✓ CCRH Aligned
              </div>
              <div style={{ background: 'white', borderRadius: 24, padding: 32, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
                <h3 style={{ color: 'var(--sage-deep)', marginBottom: 16, fontSize: '1.1rem' }}>Why HomeoPedia?</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                  {[
                    { n: '200+', l: 'Disease Guides' },
                    { n: '80+', l: 'Medicines' },
                    { n: '1000+', l: 'FAQs Answered' },
                    { n: '100%', l: 'Doctor Reviewed' },
                  ].map(s => (
                    <div key={s.l} style={{ background: 'var(--sage-light)', padding: 16, borderRadius: 12 }}>
                      <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--sage-deep)', lineHeight: 1, marginBottom: 4 }}>{s.n}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--gray-text)', fontWeight: 500 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 20, borderTop: '1px solid var(--gray-light)' }}>
                  {['Evidence-Based', 'Free to Read', 'Mobile Optimized'].map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'var(--gray-text)', fontWeight: 500 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }} />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: 12 }}>Browse by Category</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--gray-text)' }}>Find comprehensive homeopathy guides organized by body system</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="categories-grid">
            {categories.map(cat => (
              <Link key={cat.label} href={cat.href} className="category-card" style={{ background: 'white', padding: 24, borderRadius: 16, border: '1px solid var(--gray-light)', textDecoration: 'none', display: 'block' }}>
                <div style={{ width: 48, height: 48, background: 'var(--sage-light)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: 16 }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: 4, color: 'var(--charcoal)' }}>{cat.label}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-text)' }}>{cat.desc}</p>
                <div style={{ marginTop: 12, fontSize: '0.8rem', color: 'var(--sage-deep)', fontWeight: 600 }}>{cat.count} conditions →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CCRH TRUST */}
      <section style={{ padding: '0 0 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: 'var(--sage-deep)', borderRadius: 24, padding: 48, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ color: 'white', marginBottom: 16, fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Evidence-Based, Not Just Traditional</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 600, margin: '0 auto 32px', fontSize: '1.05rem' }}>
              All content aligns with CCRH (Central Council for Research in Homoeopathy), Ministry of AYUSH, Government of India. Every guide includes scientific evidence.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
              {[{ n: '70+', l: 'CCRH Studies Referenced' }, { n: '15+', l: 'Years Clinical Review' }, { n: '100%', l: 'Medically Reviewed' }].map(s => (
                <div key={s.l} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: 4 }}>{s.n}</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECENT DISEASES */}
      {recentDiseases.length > 0 && (
        <section style={{ padding: '0 0 80px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: 8 }}>Latest Guides</h2>
                <p style={{ color: 'var(--gray-text)' }}>Recently updated guides with CCRH research</p>
              </div>
              <Link href="/diseases" style={{ color: 'var(--sage-deep)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>View all →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="articles-grid">
              {recentDiseases.map((d: any) => (
                <Link key={d.slug?.current} href={`/diseases/${d.slug?.current}`} className="article-card" style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--gray-light)', textDecoration: 'none', display: 'block' }}>
                  <div style={{ height: 160, background: 'linear-gradient(135deg, var(--sage-light) 0%, var(--coral-light) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>
                    🌿
                  </div>
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: 8, color: 'var(--charcoal)' }}>{d.title}</h3>
                    {d.metaDescription && <p style={{ fontSize: '0.875rem', color: 'var(--gray-text)', lineHeight: 1.5 }}>{d.metaDescription}</p>}
                    <div style={{ display: 'flex', gap: 12, marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--gray-light)', fontSize: '0.8rem', color: 'var(--gray-text)' }}>
                      <span>📖 7 min read</span>
                      <span>•</span>
                      <span>CCRH backed</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* YOUTUBE VIDEOS */}
      {ytVideos.length > 0 && (
        <section style={{ padding: '0 0 80px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FEE2E2', color: '#DC2626', padding: '4px 12px', borderRadius: 100, fontSize: '0.8rem', fontWeight: 600, marginBottom: 12 }}>
                  ▶ YouTube
                </div>
                <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', marginBottom: 6 }}>Watch & Learn — Dr. Shadab Explains</h2>
                <p style={{ color: 'var(--gray-text)', fontSize: '0.95rem' }}>Homeopathy explained in simple language — new videos every week</p>
              </div>
              <a href="https://www.youtube.com/@drshadabshomoeopathy" target="_blank" rel="noopener noreferrer"
                style={{ color: '#DC2626', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', background: '#FEE2E2', padding: '8px 16px', borderRadius: 8 }}>
                Subscribe →
              </a>
            </div>
            <YouTubeSection videos={ytVideos} />
          </div>
        </section>
      )}

      {/* DR. SHADAB SECTION */}
      <section style={{ padding: '0 0 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: 'white', borderRadius: 24, padding: 48, display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'center', border: '1px solid var(--gray-light)' }} className="expert-section">
            <Image src="/dr-shadab.png" alt="Dr. Shadab Khan MD Homeopath" width={400} height={400} style={{ width: '100%', height: 'auto', borderRadius: 20, objectFit: 'cover', objectPosition: 'top' }} priority />
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: 8 }}>Medically Reviewed Content</h2>
              <p style={{ color: 'var(--sage-deep)', fontWeight: 600, marginBottom: 20 }}>by Dr. Shadab Khan, MD Homeopath</p>
              <p style={{ marginBottom: 24, fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-text)' }}>
                Every article on HomeoPedia is personally reviewed by Dr. Shadab Khan, MD Homeopath with 15+ years of clinical experience. His expertise ensures accuracy, practical relevance, and adherence to evidence-based homeopathy.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
                {['MD Homeopath', '15+ Years Experience', '10,000+ Patients', 'Maharashtra Council'].map(tag => (
                  <span key={tag} style={{ background: 'var(--sage-light)', color: 'var(--sage-deep)', padding: '6px 14px', borderRadius: 100, fontSize: '0.85rem', fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
              <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--sage-deep)', textDecoration: 'none', fontWeight: 600, paddingBottom: 2, borderBottom: '2px solid var(--sage-deep)' }}>
                Learn more about consultation →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
