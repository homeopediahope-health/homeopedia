import Link from 'next/link'

export default function Header() {
  return (
    <nav style={{
      position: 'sticky', top: 0,
      background: 'rgba(250,248,244,0.97)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border)',
      zIndex: 1000, height: 64,
      display: 'flex', alignItems: 'center',
      boxShadow: 'var(--sh-sm)',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: 'linear-gradient(135deg, var(--gold-dk) 0%, var(--gold-lt) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700, fontSize: '1rem', boxShadow: '0 2px 10px rgba(184,145,42,0.3)' }}>H</div>
          <div>
            <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1 }}>HomeoPedia</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>by Dr. Shadab Khan MD</div>
          </div>
        </Link>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <div className="desktop-nav" style={{ display: 'flex', gap: 24 }}>
            {[
              ['Diseases', '/diseases'],
              ['Diet Charts', '/diet'],
              ['Medicines', '/medicines'],
              ['Blog', '/blog'],
              ['About', '/about'],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ color: 'var(--ink2)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500 }}>
                {label}
              </Link>
            ))}
          </div>
          <a
            href="https://wa.me/918983458889?text=Namaste%20Dr.%20Shadab%2C%20mujhe%20consultation%20chahiye."
            target="_blank" rel="noopener noreferrer"
            style={{ background: 'linear-gradient(135deg, var(--gold-dk) 0%, var(--gold-lt) 100%)', color: 'white', padding: '9px 20px', borderRadius: 9, fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(184,145,42,0.3)', whiteSpace: 'nowrap' }}
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}
