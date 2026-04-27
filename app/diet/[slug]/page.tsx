import { WA_BASE, WA_CONSULT } from '@/lib/constants'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDietBySlug } from '@/lib/queries'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const diet = await getDietBySlug(slug).catch(() => null)
  if (!diet) return { title: 'Diet Chart' }
  const title = diet.metaTitle || `${diet.title} — Dr. Shadab Khan | HomeoPedia.in`
  const description = diet.metaDescription || diet.heroText?.slice(0, 155) || `${diet.title} ke liye expert diet chart. Kya khayein, kya avoid karein.`
  return {
    title,
    description,
    openGraph: { title, description, type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function DietDetailPage({ params }: Props) {
  const { slug } = await params
  const diet = await getDietBySlug(slug).catch(() => null)
  if (!diet) notFound()

  const include = diet.dietInclude || []
  const avoid = diet.dietAvoid || []

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 66 }}>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '11px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', gap: 8, fontSize: 13, color: 'var(--ink4)', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/diet" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Diet Charts</Link>
          <span>›</span>
          <span style={{ color: 'var(--ink2)' }}>{diet.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '44px clamp(16px,4vw,32px) 36px', textAlign: 'center' }}>
        {diet.category && (
          <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.25)' }}>{diet.category}</span>
        )}
        <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(24px,5vw,46px)', fontWeight: 700, color: 'var(--ink)', margin: '14px 0 6px' }}>{diet.title}</h1>
        {diet.hindiName && <div style={{ fontSize: 18, color: 'var(--gold-dk)', fontFamily: 'var(--font-playfair,Georgia,serif)', fontStyle: 'italic', marginBottom: 10 }}>{diet.hindiName}</div>}
        {diet.heroText && <p style={{ fontSize: 15, color: 'var(--ink3)', maxWidth: 560, margin: '0 auto 18px', lineHeight: 1.7, fontWeight: 300 }}>{diet.heroText}</p>}
        {diet.keyRule && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: 'rgba(184,145,42,.1)', border: '1px solid rgba(184,145,42,.3)', borderRadius: 100, fontSize: 13, color: 'var(--gold-dk)', fontWeight: 600 }}>
            💡 Key Rule: {diet.keyRule}
          </div>
        )}
        <p style={{ fontSize: 12, color: 'var(--ink4)', marginTop: 16, fontWeight: 300 }}>Dr. Shadab Khan, MD Homoeopath dwara reviewed</p>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px clamp(16px,4vw,32px) 80px' }}>

        {/* Eat + Avoid */}
        {(include.length > 0 || avoid.length > 0) && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20, marginBottom: 24 }}>
            {include.length > 0 && (
              <div style={{ background: 'rgba(58,125,82,.04)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 16, padding: '24px' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 700, color: 'var(--green)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(58,125,82,.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>✓</span>
                  Ye Zaroor Khayein
                </h2>
                {include.map((cat: any) => (
                  <div key={cat.category} style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{cat.category} {cat.emoji}</p>
                    {cat.items?.map((item: string) => (
                      <div key={item} style={{ display: 'flex', gap: 10, padding: '8px 10px', background: 'rgba(58,125,82,.05)', borderRadius: 8, marginBottom: 4, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                        <span style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 400 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {avoid.length > 0 && (
              <div style={{ background: 'rgba(176,64,64,.04)', border: '1px solid rgba(176,64,64,.2)', borderRadius: 16, padding: '24px' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 700, color: 'var(--red)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(176,64,64,.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>✕</span>
                  Ye Bilkul Mat Khayein
                </h2>
                {avoid.map((cat: any) => (
                  <div key={cat.category} style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{cat.category} {cat.emoji}</p>
                    {cat.items?.map((item: string) => (
                      <div key={item} style={{ display: 'flex', gap: 10, padding: '8px 10px', background: 'rgba(176,64,64,.05)', borderRadius: 8, marginBottom: 4, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: 1 }}>✕</span>
                        <span style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 400 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tip + Note */}
        {(diet.dietTip || diet.dietNote) && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14, marginBottom: 32 }}>
            {diet.dietTip && (
              <div style={{ padding: '16px 20px', background: 'rgba(184,145,42,.08)', border: '1px solid rgba(184,145,42,.25)', borderRadius: 12, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>💡</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold-dk)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Pro Tip</p>
                  <p style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300 }}>{diet.dietTip}</p>
                </div>
              </div>
            )}
            {diet.dietNote && (
              <div style={{ padding: '16px 20px', background: 'rgba(58,125,82,.06)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 12, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Important Note</p>
                  <p style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300 }}>{diet.dietNote}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Weekly Plan */}
        {diet.weeklyPlan?.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>📅 7 Din Ka Diet Chart</h2>
            <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 18, fontWeight: 300 }}>Ek haafte ka complete meal plan — {diet.title} ke patients ke liye</p>
            <div style={{ overflowX: 'auto', borderRadius: 14, border: '1px solid var(--border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg,var(--gold-dk),var(--gold-lt))' }}>
                    {['Din', 'Subah (Naashta)', 'Mid Morning', 'Dopahar (Lunch)', 'Shaam (4-5 PM)', 'Raat (Dinner)'].map(h => (
                      <th key={h} style={{ padding: '12px 14px', fontSize: 11, fontWeight: 700, color: '#fff', textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {diet.weeklyPlan.map((row: any, i: number) => (
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

        {/* YouTube Embed */}
        {diet.youtubeUrl && (
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 14 }}>Video Guide</h3>
            <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border)' }}>
              <iframe
                src={diet.youtubeUrl.replace('watch?v=', 'embed/')}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg,#1a3d30 0%,#0f2a1e 100%)', borderRadius: 16, padding: '32px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, marginBottom: 24 }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', color: 'white', fontSize: '1.2rem', marginBottom: 6 }}>Personal Diet Advice Chahiye?</h3>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '0.88rem', margin: 0 }}>Dr. Shadab aapki condition dekh ke customized plan banate hain</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href={`${WA_BASE}?text=Namaste%20Dr.%20Shadab%2C%20mujhe%20${encodeURIComponent(diet.title)}%20ke%20liye%20diet%20advice%20chahiye`} target="_blank" rel="noopener noreferrer"
              style={{ background: '#25d366', color: '#fff', padding: '12px 22px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: '0.88rem' }}>
              💬 WhatsApp Dr. Shadab
            </a>
            {diet.relatedDiseaseSlug && (
              <Link href={`/diseases/${diet.relatedDiseaseSlug}`}
                style={{ background: 'rgba(255,255,255,.12)', color: 'white', padding: '12px 22px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,.2)', fontSize: '0.88rem' }}>
                Full {diet.title?.split(' ')[0]} Guide →
              </Link>
            )}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/diet" style={{ display: 'inline-block', padding: '10px 22px', border: '1px solid var(--border2)', background: 'var(--card)', color: 'var(--ink3)', borderRadius: 100, fontSize: 13, textDecoration: 'none', fontWeight: 500 }}>← Sabhi Diet Charts</Link>
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲</a>
    </div>
  )
}
