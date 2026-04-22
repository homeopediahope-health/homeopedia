import { getDiseaseDiet } from '@/lib/queries'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 3600

export default async function DietDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const disease = await getDiseaseDiet(slug).catch(() => null)

  if (!disease) notFound()

  const include = disease.dietInclude || []
  const avoid = disease.dietAvoid || []

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Breadcrumb */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '20px clamp(16px,4vw,32px) 0' }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--ink4)' }}>
          <Link href="/" style={{ color: 'var(--ink4)', textDecoration: 'none' }}>Home</Link> ›{' '}
          <Link href="/diet" style={{ color: 'var(--ink4)', textDecoration: 'none' }}>Diet Charts</Link> ›{' '}
          <span style={{ color: 'var(--ink2)' }}>{disease.title}</span>
        </p>
      </div>

      {/* Hero */}
      <section style={{ padding: 'clamp(32px,5vw,56px) clamp(16px,4vw,32px) 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <span style={{ background: 'var(--gold-bg)', color: 'var(--gold-dk)', padding: '4px 12px', borderRadius: 100, fontSize: '0.75rem', fontWeight: 600, display: 'inline-block', marginBottom: 14 }}>{disease.category || 'Diet Chart'}</span>
          <h1 className="font-playfair" style={{ fontSize: 'clamp(26px, 4vw, 44px)', color: 'var(--ink)', marginBottom: 8 }}>{disease.title} — Diet Chart</h1>
          {disease.hindiName && <p style={{ color: 'var(--gold-dk)', fontStyle: 'italic', fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1rem', marginBottom: 8 }}>{disease.hindiName}</p>}
          <p style={{ fontSize: '0.85rem', color: 'var(--ink4)' }}>Dr. Shadab Khan, MD Homoeopath dwara reviewed</p>
        </div>
      </section>

      {/* Main diet content */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(60px,9vw,100px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>

          {/* Include + Avoid columns */}
          {(include.length > 0 || avoid.length > 0) && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 32 }}>

              {/* Ye Zaroor Khayein */}
              {include.length > 0 && (
                <div style={{ background: 'rgba(58,125,82,0.04)', border: '1px solid rgba(58,125,82,0.2)', borderRadius: 16, padding: 24 }}>
                  <h2 className="font-playfair" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--green)', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ background: 'var(--green)', color: 'white', width: 22, height: 22, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    Ye Zaroor Khayein
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {include.map((cat: any) => (
                      <div key={cat.category}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{cat.category} {cat.emoji}</p>
                        {cat.items?.map((item: string) => (
                          <div key={item} style={{ display: 'flex', gap: 10, padding: '8px 10px', background: 'rgba(58,125,82,0.05)', borderRadius: 8, marginBottom: 4, alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                            <span style={{ fontSize: '0.85rem', color: 'var(--ink2)', fontWeight: 500 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ye Bilkul Mat Khayein */}
              {avoid.length > 0 && (
                <div style={{ background: 'rgba(176,64,64,0.04)', border: '1px solid rgba(176,64,64,0.2)', borderRadius: 16, padding: 24 }}>
                  <h2 className="font-playfair" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--red)', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ background: 'var(--red)', color: 'white', width: 22, height: 22, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>✕</span>
                    Ye Bilkul Mat Khayein
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {avoid.map((cat: any) => (
                      <div key={cat.category}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{cat.category} {cat.emoji}</p>
                        {cat.items?.map((item: string) => (
                          <div key={item} style={{ display: 'flex', gap: 10, padding: '8px 10px', background: 'rgba(176,64,64,0.05)', borderRadius: 8, marginBottom: 4, alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: 1 }}>✕</span>
                            <span style={{ fontSize: '0.85rem', color: 'var(--ink2)', fontWeight: 500 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tip + Note boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 40 }}>
            <div style={{ background: 'var(--gold-bg)', border: '1px solid rgba(184,145,42,0.25)', borderRadius: 12, padding: '18px 22px' }}>
              <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-dk)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>💡 Pro Tip</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink2)', lineHeight: 1.7, margin: 0 }}>
                Khana ghar ka bana hua khayein — bahar ka processed food {disease.title} ke symptoms ko badha sakta hai. Local seasonal vegetables prefer karein.
              </p>
            </div>
            <div style={{ background: 'rgba(58,125,82,0.05)', border: '1px solid rgba(58,125,82,0.2)', borderRadius: 12, padding: '18px 22px' }}>
              <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--green)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>📋 Important Note</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink2)', lineHeight: 1.7, margin: 0 }}>
                Ye diet chart general guidance ke liye hai. Apni specific condition aur constitution ke hisaab se personal advice ke liye Dr. Shadab Khan se consult zaroor karein.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(135deg, var(--sage-deep) 0%, #1A3D30 100%)', borderRadius: 16, padding: '32px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h3 className="font-playfair" style={{ color: 'white', fontSize: '1.2rem', marginBottom: 6 }}>Personal Diet Advice Chahiye?</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', margin: 0 }}>Dr. Shadab Khan se WhatsApp pe consult karein — FREE initial guidance</p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={`https://wa.me/918983458889?text=Namaste%20Dr.%20Shadab%2C%20mujhe%20${encodeURIComponent(disease.title)}%20ke%20liye%20diet%20advice%20chahiye`} target="_blank" rel="noopener noreferrer"
                style={{ background: '#22C55E', color: 'white', padding: '12px 22px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: '0.88rem' }}>
                💬 WhatsApp Dr. Shadab
              </a>
              <Link href={`/diseases/${slug}`} style={{ background: 'rgba(255,255,255,0.12)', color: 'white', padding: '12px 22px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.88rem' }}>
                Full {disease.title} Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
