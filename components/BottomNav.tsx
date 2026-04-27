'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { WA_CONSULT } from '@/lib/constants'

const ITEMS = [
  { href: '/',          icon: '🏠', label: 'Home' },
  { href: '/diseases',  icon: '🩺', label: 'Diseases' },
  { href: '/diet',      icon: '🥗', label: 'Diet' },
  { href: '/medicines', icon: '💊', label: 'Medicines' },
  { href: '/blog',      icon: '▶',  label: 'Videos' },
]

export default function BottomNav() {
  const pathname = usePathname()
  if (pathname.startsWith('/studio')) return null

  return (
    <nav className="bottom-nav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1001, background: 'rgba(250,248,244,.97)', backdropFilter: 'blur(16px)', borderTop: '1px solid var(--border)', height: 62, display: 'none', alignItems: 'center', justifyContent: 'space-around', padding: '0 4px' }}>
      {ITEMS.map(item => {
        const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
        return (
          <Link key={item.href} href={item.href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, textDecoration: 'none', padding: '6px 10px', flex: 1, position: 'relative' }}>
            {active && <span style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 20, height: 2, background: 'var(--gold)', borderRadius: 2 }} />}
            <span style={{ fontSize: 18, lineHeight: 1 }}>{item.icon}</span>
            <span style={{ fontSize: 10, fontWeight: active ? 600 : 400, color: active ? 'var(--gold)' : 'var(--ink3)' }}>{item.label}</span>
          </Link>
        )
      })}
      <a href={WA_CONSULT} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, textDecoration: 'none', flex: 1, padding: '6px 6px' }}>
        <span style={{ display: 'inline-block', padding: '4px 12px', background: 'linear-gradient(135deg,var(--gold-dk),var(--gold-lt))', color: '#fff', borderRadius: 100, fontSize: 10, fontWeight: 600, whiteSpace: 'nowrap' }}>Consult</span>
        <span style={{ fontSize: 10, color: 'var(--gold-dk)', fontWeight: 500 }}>Free</span>
      </a>
    </nav>
  )
}
