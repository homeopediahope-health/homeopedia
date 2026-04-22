import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '56px clamp(16px,4vw,32px) 28px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 32, marginBottom: 40 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: 'linear-gradient(135deg,var(--gold-dk),var(--gold-lt))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-playfair,Georgia,serif)', fontWeight: 700, color: '#fff', fontSize: 15 }}>H</div>
              <span style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 17, fontWeight: 700, color: 'var(--ink)' }}>HomeoPedia.in</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--ink4)', lineHeight: 1.8, maxWidth: 260, fontWeight: 300 }}>India&apos;s patient-first homeopathy knowledge portal. Evidence-based, CCRH-backed. Always free.</p>
            <div style={{ marginTop: 14, padding: '11px 14px', background: 'var(--gold-bg)', borderRadius: 9, border: '1px solid rgba(184,145,42,.2)' }}>
              <p style={{ fontSize: 11, color: 'var(--ink4)', lineHeight: 1.7 }}>⚕️ Sirf educational purpose ke liye. Treatment ke liye qualified doctor se milein.</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--gold-dk)', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>Content</div>
            {[['All Diseases', '/diseases'], ['Diet Charts', '/diet'], ['Medicines', '/medicines'], ['Videos & Blog', '/blog']].map(([l, h]) => (
              <Link key={l} href={h} className="tap" style={{ display: 'block', fontSize: 13, color: 'var(--ink4)', marginBottom: 9, fontWeight: 300, textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>

          {/* Consult */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--gold-dk)', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>Consult</div>
            {[
              ['WhatsApp Dr. Shadab', 'https://wa.me/918983458889'],
              ['Call: 8983458889', 'tel:+918983458889'],
              ['YouTube Channel', 'https://www.youtube.com/@drshadabshomoeopathy'],
            ].map(([l, h]) => (
              <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'block', fontSize: 13, color: 'var(--ink4)', marginBottom: 9, fontWeight: 300, textDecoration: 'none' }}>{l}</a>
            ))}
          </div>

          {/* About */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--gold-dk)', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>About</div>
            {[['About Dr. Shadab', '/about'], ['Contact Us', '/contact'], ['Privacy Policy', '/privacy-policy'], ['Medical Disclaimer', '/about']].map(([l, h]) => (
              <Link key={l} href={h} style={{ display: 'block', fontSize: 13, color: 'var(--ink4)', marginBottom: 9, fontWeight: 300, textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontSize: 12, color: 'var(--ink4)' }}>Medically reviewed by <strong style={{ color: 'var(--ink3)' }}>Dr. Shadab Khan, MD Homeopath</strong> · © 2026 HomeoPedia.in</div>
          <div style={{ fontSize: 12, color: 'var(--ink4)' }}>✓ CCRH Aligned · ✓ Evidence Based · ✓ Free to Read</div>
        </div>
      </div>
    </footer>
  )
}
