import Link from 'next/link'

export default function Header() {
  return (
    <nav style={{
      position: 'sticky', top: 0, background: 'rgba(250,247,242,0.95)',
      backdropFilter: 'blur(12px)', borderBottom: '1px solid #E5E7EB',
      zIndex: 100, padding: '16px 0'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontWeight: 700, fontSize: '1.25rem', color: 'var(--sage-deep)' }}>
          <div style={{ width: 32, height: 32, background: 'var(--sage-deep)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>H</div>
          <span>HomeoPedia</span>
        </Link>

        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <div className="desktop-nav" style={{ display: 'flex', gap: 32 }}>
            {[['Diseases', '/diseases'], ['Medicines', '/medicines'], ['About', '/about']].map(([label, href]) => (
              <Link key={href} href={href} style={{ color: 'var(--charcoal)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
                {label}
              </Link>
            ))}
          </div>
          <a
            href="https://wa.me/918983458889?text=Namaste%20Dr.%20Shadab%2C%20mujhe%20consultation%20chahiye."
            target="_blank" rel="noopener noreferrer"
            style={{ background: 'var(--sage-deep)', color: 'white', padding: '10px 20px', borderRadius: 10, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}
          >
            Consult Now
          </a>
        </div>
      </div>
    </nav>
  )
}
