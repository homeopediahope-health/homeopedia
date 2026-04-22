import Link from 'next/link'
import { getAllDiseasesDiet } from '@/lib/queries'
import { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Disease-wise Diet Charts — Indian Homeopathy Diet Guide | HomeoPedia',
  description: 'Psoriasis, PCOD, Thyroid, IBS ke liye Indian diet charts. Kya khayein, kya avoid karein — Dr. Shadab Khan MD dwara reviewed.',
}

const fallbackDiets = [
  { title: 'Psoriasis', slug: { current: 'psoriasis' }, hindiName: 'Chambal / Psoriasis', category: 'Skin', includeCount: 12, avoidCount: 8, tagline: 'Anti-inflammatory Indian diet for clear skin' },
  { title: 'PCOD / PCOS', slug: { current: 'pcod' }, hindiName: 'Mahila Rog / PCOD', category: "Women's", includeCount: 15, avoidCount: 10, tagline: 'Hormone-balancing low glycemic diet' },
  { title: 'Thyroid', slug: { current: 'thyroid' }, hindiName: 'Thyroid Rog', category: 'Endocrine', includeCount: 13, avoidCount: 9, tagline: 'Metabolism-boosting, iodine-balanced diet' },
  { title: 'IBS', slug: { current: 'ibs' }, hindiName: 'Aant ki Takleef', category: 'Digestive', includeCount: 11, avoidCount: 12, tagline: 'Gut-friendly low-FODMAP Indian foods' },
  { title: 'Hair Fall', slug: { current: 'hair-fall' }, hindiName: 'Baalon ka Jhadna', category: 'Hair', includeCount: 14, avoidCount: 7, tagline: 'Protein & micronutrient rich diet for hair growth' },
  { title: 'Sciatica', slug: { current: 'sciatica' }, hindiName: 'Nass Ka Dard', category: 'Joints', includeCount: 10, avoidCount: 8, tagline: 'Anti-inflammatory nerve-supporting diet' },
]

const catColor: Record<string, string> = {
  Skin: '#b04040', "Women's": '#9333ea', Endocrine: '#4338CA',
  Digestive: '#059669', Hair: '#D97706', Joints: '#2563EB',
}

export default async function DietPage() {
  const sanityDiets = await getAllDiseasesDiet().catch(() => [])
  const diets = sanityDiets.length > 0 ? sanityDiets : fallbackDiets

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(52px,8vw,80px) clamp(16px,4vw,32px) 48px', textAlign: 'center', background: 'linear-gradient(160deg, var(--bg) 0%, var(--bg2) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, var(--gold-bg2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Indian Context • Doctor Reviewed</p>
          <h1 className="font-playfair" style={{ fontSize: 'clamp(28px, 4.5vw, 54px)', color: 'var(--ink)', marginBottom: 16, lineHeight: 1.15 }}>
            Disease-wise<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Diet Charts</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--ink3)', lineHeight: 1.8, maxWidth: 520, margin: '0 auto' }}>
            Indian foods ke hisaab se diet guidance — kya khayein, kya avoid karein. Har disease ke liye alag chart, Dr. Shadab Khan dwara reviewed.
          </p>
        </div>
      </section>

      {/* Diet Grid */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(60px,9vw,100px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {diets.map((d: any) => {
              const slug = d.slug?.current || d.slug
              const color = catColor[d.category] || 'var(--gold)'
              const inc = d.includeCount || 0
              const av = d.avoidCount || 0
              return (
                <Link key={slug} href={`/diet/${slug}`} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', textDecoration: 'none', display: 'block', position: 'relative', boxShadow: 'var(--sh-sm)', transition: 'all 0.2s' }} className="hot-card">
                  {/* Gold top accent */}
                  <div style={{ height: 3, background: 'linear-gradient(90deg, var(--gold-dk) 0%, var(--gold-lt) 100%)' }} />
                  <div style={{ padding: '20px 22px' }}>
                    <span style={{ background: color + '18', color, padding: '3px 10px', borderRadius: 100, fontSize: '0.7rem', fontWeight: 600, display: 'inline-block', marginBottom: 12 }}>{d.category}</span>
                    <h2 className="font-playfair" style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{d.title}</h2>
                    {d.hindiName && <p style={{ fontSize: '0.82rem', color: 'var(--gold-dk)', fontStyle: 'italic', fontFamily: 'var(--font-playfair), Georgia, serif', marginBottom: 8 }}>{d.hindiName}</p>}
                    {d.tagline && <p style={{ fontSize: '0.78rem', color: 'var(--ink3)', lineHeight: 1.5, marginBottom: 14 }}>{d.tagline}</p>}
                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', gap: 16 }}>
                      {inc > 0 && <span style={{ fontSize: '0.75rem', color: 'var(--green)', fontWeight: 600 }}>✓ {inc} foods to eat</span>}
                      {av > 0 && <span style={{ fontSize: '0.75rem', color: 'var(--red)', fontWeight: 600 }}>✕ {av} to avoid</span>}
                      {inc === 0 && <span style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600 }}>View Diet Chart →</span>}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* SEO Note */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(40px,6vw,60px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ background: 'var(--gold-bg)', border: '1px solid rgba(184,145,42,0.25)', borderRadius: 'var(--r)', padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>⚕️</span>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink3)', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: 'var(--ink2)' }}>Medical Disclaimer:</strong> Ye diet charts educational purpose ke liye hain. Apni specific condition ke liye Dr. Shadab Khan se personal consultation karein — every patient&apos;s needs are different.{' '}
              <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dk)', fontWeight: 600, textDecoration: 'none' }}>WhatsApp karein →</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
