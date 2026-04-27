'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { WA_CONSULT } from '@/lib/constants'

const NAV = [
  ['/diseases', 'Diseases'],
  ['/diet', 'Diet Charts'],
  ['/medicines', 'Medicines'],
  ['/blog', 'Videos'],
  ['/about', 'About'],
] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mopen, setMopen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = scrolled || mopen ? 'rgba(250,248,244,.97)' : 'transparent'
  const navBorder = scrolled || mopen ? '1px solid var(--border)' : '1px solid transparent'

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: navBg, borderBottom: navBorder, backdropFilter: scrolled ? 'blur(14px)' : 'none', transition: 'all .35s', padding: '0 20px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', height: 64, gap: 20 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }} onClick={() => setMopen(false)}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: 'linear-gradient(135deg,var(--gold-dk),var(--gold-lt))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-playfair,Georgia,serif)', fontWeight: 700, color: '#fff', fontSize: 16, boxShadow: '0 2px 10px rgba(184,145,42,.3)' }}>H</div>
          <div>
            <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 17, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1 }}>HomeoPedia</div>
            <div style={{ fontSize: 9, color: 'var(--ink4)', letterSpacing: 1.5, textTransform: 'uppercase' }}>Homeopathy Knowledge</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="nav-links" style={{ display: 'flex', gap: 20, marginLeft: 'auto', alignItems: 'center' }}>
          {NAV.map(([href, lbl]) => (
            <Link key={href} href={href} style={{ cursor: 'pointer', fontSize: 13, fontWeight: 500, color: pathname === href ? 'var(--gold)' : 'var(--ink3)', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = pathname === href ? 'var(--gold)' : 'var(--ink3)')}
            >{lbl}</Link>
          ))}
          <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 18px', background: 'linear-gradient(135deg,#1a6b33,#25a244)', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 13, fontWeight: 600, boxShadow: '0 3px 12px rgba(37,162,68,.3)' }}>
            📲 Consult
          </a>
        </div>

        {/* Mobile right */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer" className="mob-menu-btn" style={{ display: 'none', alignItems: 'center', gap: 6, padding: '8px 14px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 12, fontWeight: 600 }}>📲</a>
          <button className="mob-menu-btn" onClick={() => setMopen(!mopen)} style={{ display: 'none', background: 'none', border: '1px solid var(--border2)', borderRadius: 8, padding: '7px 10px', cursor: 'pointer', flexDirection: 'column', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 18, height: 2, background: 'var(--ink2)', borderRadius: 2, transition: 'all .2s', transform: mopen ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
            <div style={{ width: 18, height: 2, background: 'var(--ink2)', borderRadius: 2, opacity: mopen ? 0 : 1, transition: 'all .2s' }} />
            <div style={{ width: 18, height: 2, background: 'var(--ink2)', borderRadius: 2, transition: 'all .2s', transform: mopen ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mopen && (
        <div style={{ borderTop: '1px solid var(--border)', background: 'rgba(250,248,244,.97)', padding: '12px 20px 20px' }}>
          {NAV.map(([href, lbl]) => (
            <Link key={href} href={href} onClick={() => setMopen(false)} style={{ display: 'block', padding: '13px 0', fontSize: 15, fontWeight: 500, color: pathname === href ? 'var(--gold)' : 'var(--ink2)', borderBottom: '1px solid var(--border)', textDecoration: 'none' }}>{lbl}</Link>
          ))}
        </div>
      )}
    </nav>
  )
}
