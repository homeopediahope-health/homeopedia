import { Metadata } from 'next'
import { WA_BASE, WA_CONSULT } from '@/lib/constants'
import { getAllSymptoms } from '@/lib/queries'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Symptoms Guide — Lakshan Dekho, Bimari Jaano | HomeoPedia.in',
  description: 'Apna symptom dhundho aur jaano kaun si bimari ho sakti hai. Homeopathy mein har lakshan ka matlab hota hai — Dr. Shadab Khan dwara reviewed.',
  openGraph: {
    title: 'Symptoms Guide | HomeoPedia.in',
    description: 'Lakshan se bimari jaano — homeopathic perspective mein.',
  },
}

export default async function SymptomsPage() {
  const symptoms = await getAllSymptoms().catch(() => [])

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '52px clamp(16px,4vw,32px) 40px', textAlign: 'center' }}>
        <span style={{ fontSize: 10, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.25)', letterSpacing: 1.5, textTransform: 'uppercase' }}>Symptom Guide</span>
        <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: 'var(--ink)', margin: '14px 0 10px' }}>Lakshan Dekho, Bimari Jaano</h1>
        <p style={{ fontSize: 15, color: 'var(--ink3)', maxWidth: 520, margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>Homeopathy mein har lakshan ka matlab hota hai. Apna symptom dhundho — related diseases aur homeopathic approach jaano.</p>
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px clamp(16px,4vw,32px) 80px' }}>

        {symptoms.length > 0 ? (
          <>
            <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 20, fontWeight: 300 }}>{symptoms.length} symptoms listed — aur jald add ho rahe hain</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 12 }}>
              {symptoms.map((s: any) => (
                <Link key={s.slug?.current} href={`/symptoms/${s.slug?.current}`} style={{ textDecoration: 'none' }}>
                  <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: 3, bottom: 0, background: 'linear-gradient(to bottom,var(--gold-dk),var(--gold-lt))', borderRadius: '12px 0 0 12px' }} />
                    <div style={{ paddingLeft: 10 }}>
                      <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{s.name}</h3>
                      {s.shortDescription && <p style={{ fontSize: 12, color: 'var(--ink4)', lineHeight: 1.55, fontWeight: 300 }}>{s.shortDescription}</p>}
                      <span style={{ display: 'inline-block', marginTop: 8, fontSize: 11, color: 'var(--gold)', fontWeight: 600 }}>Jaano →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', border: '2px dashed var(--border2)', borderRadius: 16 }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🩺</div>
            <p style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Symptoms Guide Jald Aayegi</p>
            <p style={{ color: 'var(--ink4)', fontWeight: 300, fontSize: 14 }}>Dr. Shadab expert content add kar rahe hain</p>
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: 48, textAlign: 'center', padding: '32px', background: 'rgba(184,145,42,.06)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 14 }}>
          <p style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Apna Symptom Nahi Mila?</p>
          <p style={{ fontSize: 13, color: 'var(--ink3)', marginBottom: 16, fontWeight: 300 }}>Dr. Shadab se seedha poochho — apna case WhatsApp pe share karein</p>
          <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>📲 WhatsApp Karein</a>
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
