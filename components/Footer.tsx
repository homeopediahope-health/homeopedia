import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1e2a1f', padding: '56px clamp(16px,4vw,32px) 28px', color: '#c8d4c9' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 32, marginBottom: 40 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: 'linear-gradient(135deg,var(--sage-dk),var(--sage-lt))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display,Georgia,serif)', fontWeight: 700, color: '#fff', fontSize: 15 }}>H</div>
              <span style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 17, fontWeight: 700, color: '#f1efe7' }}>HomeoPedia.in</span>
            </div>
            <p style={{ fontSize: 13, color: '#7a9b7d', lineHeight: 1.8, maxWidth: 260, fontWeight: 300 }}>India&apos;s patient-first homeopathy knowledge portal. Evidence-based, Doctor-reviewed.</p>
            <div style={{ marginTop: 14, padding: '11px 14px', background: 'rgba(63,107,77,0.15)', borderRadius: 9, border: '1px solid rgba(63,107,77,0.25)' }}>
              <p style={{ fontSize: 11, color: '#7a9b7d', lineHeight: 1.7, fontStyle: 'italic' }}>⚕️ Sirf educational purpose ke liye. Treatment ke liye qualified doctor se milein.</p>
            </div>
          </div>

          {/* Browse */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--sage-lt)', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>Browse</div>
            {[['All Conditions', '/diseases'], ['Diet Charts', '/diet'], ['Symptoms', '/symptoms'], ['Videos & Blog', '/blog'], ['Medicines', '/medicines']].map(([l, h]) => (
              <Link key={l} href={h} style={{ display: 'block', fontSize: 13, color: '#7a9b7d', marginBottom: 9, fontWeight: 300, textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c8d4c9')}
                onMouseLeave={e => (e.currentTarget.style.color = '#7a9b7d')}
              >{l}</Link>
            ))}
          </div>

          {/* Top Conditions */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--sage-lt)', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>Top Conditions</div>
            {[['Psoriasis', '/diseases/psoriasis'], ['PCOD / PCOS', '/diseases/pcod'], ['Sciatica', '/diseases/sciatica'], ['Thyroid', '/diseases/thyroid'], ['IBS', '/diseases/ibs'], ['Piles', '/diseases/piles']].map(([l, h]) => (
              <Link key={l} href={h} style={{ display: 'block', fontSize: 13, color: '#7a9b7d', marginBottom: 9, fontWeight: 300, textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c8d4c9')}
                onMouseLeave={e => (e.currentTarget.style.color = '#7a9b7d')}
              >{l}</Link>
            ))}
          </div>

          {/* Consult + About */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--sage-lt)', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>Dr. Shadab</div>
            {[
              ['About', '/about'],
              ['WhatsApp Consultation', 'https://wa.me/918983458889'],
              ['Call: 8983458889', 'tel:+918983458889'],
              ['YouTube Channel', 'https://www.youtube.com/@drshadabshomoeopathy'],
              ['drshadabs.com', 'https://drshadabs.com'],
            ].map(([l, h]) => (
              <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ display: 'block', fontSize: 13, color: '#7a9b7d', marginBottom: 9, fontWeight: 300, textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c8d4c9')}
                onMouseLeave={e => (e.currentTarget.style.color = '#7a9b7d')}
              >{l}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontSize: 12, color: '#4a6b4d' }}>Medically reviewed by <strong style={{ color: '#7a9b7d' }}>Dr. Shadab Khan, MD Homoeopath</strong> · © 2026 HomeoPedia.in</div>
          <div style={{ display: 'flex', gap: 16 }}>
            {[['Privacy Policy', '/privacy-policy'], ['Terms', '/terms-and-conditions'], ['Disclaimer', '/about']].map(([l, h]) => (
              <Link key={l} href={h} style={{ fontSize: 12, color: '#4a6b4d', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7a9b7d')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a6b4d')}
              >{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
