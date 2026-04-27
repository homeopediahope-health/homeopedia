import { WA_BASE, WA_CONSULT } from '@/lib/constants'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSymptomBySlug } from '@/lib/queries'
import FaqList from '@/components/FaqList'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const symptom = await getSymptomBySlug(slug).catch(() => null)
  if (!symptom) return { title: 'Symptom Guide' }
  const title = `${symptom.name} — Homeopathic Guide | HomeoPedia.in`
  const description = symptom.metaDescription || symptom.shortDescription || `${symptom.name} ke baare mein jaankari — causes, related diseases, aur homeopathic approach.`
  return {
    title,
    description,
    openGraph: { title, description, type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function SymptomPage({ params }: Props) {
  const { slug } = await params
  const symptom = await getSymptomBySlug(slug).catch(() => null)
  if (!symptom) notFound()

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 66 }}>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '11px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', gap: 8, fontSize: 13, color: 'var(--ink4)', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/symptoms" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Symptoms</Link>
          <span>›</span>
          <span style={{ color: 'var(--ink2)' }}>{symptom.name}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '44px clamp(16px,4vw,32px) 36px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.25)' }}>Symptom Guide</span>
          <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(26px,4vw,44px)', fontWeight: 700, color: 'var(--ink)', margin: '14px 0 10px' }}>{symptom.name}</h1>
          {symptom.heroText && <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.75, fontWeight: 300, maxWidth: 600 }}>{symptom.heroText}</p>}
          <p style={{ fontSize: 12, color: 'var(--ink4)', marginTop: 14, fontWeight: 300 }}>Dr. Shadab Khan, MD Homoeopath dwara reviewed</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px clamp(16px,4vw,32px) 80px' }}>

        {/* Possible Causes */}
        {symptom.possibleCauses?.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>Ye Lakshan Kyun Aata Hai?</h2>
            <div style={{ display: 'grid', gap: 10 }}>
              {symptom.possibleCauses.map((cause: string, i: number) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--gold-dk)', fontWeight: 700, fontSize: 14, flexShrink: 0, marginTop: 1 }}>{i + 1}.</span>
                  <span style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.65, fontWeight: 300 }}>{cause}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Diseases */}
        {symptom.relatedDiseases?.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Isse Kaun Si Bimari Ho Sakti Hai?</h2>
            <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 16, fontWeight: 300 }}>Ye symptom in diseases mein common hai — click karke poori guide padhein</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 12 }}>
              {symptom.relatedDiseases.map((d: any, i: number) => (
                <Link key={i} href={`/diseases/${d.diseaseSlug}`} style={{ textDecoration: 'none' }}>
                  <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px', cursor: 'pointer' }}>
                    <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{d.diseaseName}</p>
                    <span style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600 }}>Full Guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Homeopathy Helps */}
        {symptom.homeopathyHelps && (
          <div style={{ marginBottom: 36, padding: '22px 24px', background: 'rgba(58,125,82,.05)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 14 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--green)', marginBottom: 10 }}>Homeopathy Kaise Help Karti Hai?</h2>
            <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.8, fontWeight: 300 }}>{symptom.homeopathyHelps}</p>
          </div>
        )}

        {/* FAQs */}
        {symptom.faqs?.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
              Aksar Pooche Jaane Wale Sawal
            </h2>
            <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 16, fontWeight: 300 }}>{symptom.faqs.length} FAQs</p>
            <FaqList faqs={symptom.faqs} />
          </div>
        )}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg,#1a3d30 0%,#0f2a1e 100%)', borderRadius: 16, padding: '32px 36px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', color: 'white', fontSize: '1.15rem', fontWeight: 700, marginBottom: 6 }}>Is Symptom Ke Baare Mein Expert Se Baat Karein</p>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '0.88rem', marginBottom: 18 }}>Dr. Shadab Khan se WhatsApp pe consult karein — FREE initial guidance</p>
          <a href={`${WA_BASE}?text=Namaste%20Dr.%20Shadab%2C%20mujhe%20${encodeURIComponent(symptom.name)}%20ke%20baare%20mein%20jaanna%20hai`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
            💬 WhatsApp Dr. Shadab
          </a>
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲</a>
    </div>
  )
}
