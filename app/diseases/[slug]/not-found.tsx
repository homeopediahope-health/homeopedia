import Link from 'next/link'

export default function DiseaseNotFound() {
  return (
    <div style={{ paddingTop: 120, textAlign: 'center', background: 'var(--bg)', minHeight: '100vh' }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🌿</div>
      <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 28, color: 'var(--ink)', marginBottom: 12 }}>Ye page jald aayega</h2>
      <p style={{ color: 'var(--ink4)', marginBottom: 28, maxWidth: 400, margin: '0 auto 28px', lineHeight: 1.7 }}>
        Is disease ka guide abhi bana rahe hain — jald publish hoga.
        Tabtak Dr. Shadab se seedha consult kar sakte hain.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/diseases" style={{ padding: '12px 24px', background: 'var(--gold)', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Sabhi Diseases Dekhein</Link>
        <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 24px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>📲 WhatsApp Dr. Shadab</a>
      </div>
    </div>
  )
}
