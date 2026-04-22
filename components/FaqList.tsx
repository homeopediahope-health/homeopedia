'use client'
import { useState } from 'react'

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)', padding: '18px 0' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, padding: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.5 }}>{q}</span>
        <span style={{ color: 'var(--gold)', fontSize: 22, fontWeight: 700, flexShrink: 0, transition: 'transform .2s', transform: open ? 'rotate(45deg)' : 'none', marginTop: 2 }}>+</span>
      </button>
      {!open && <p style={{ fontSize: 13, color: 'var(--ink4)', marginTop: 6, fontWeight: 300, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as any }}>{a}</p>}
      {open && <div style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.85, marginTop: 12, fontWeight: 300, borderLeft: '3px solid var(--gold)', paddingLeft: 16 }}>{a}</div>}
    </div>
  )
}

export default function FaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs?.length) return null
  return (
    <div>
      {faqs.map((f, i) => (
        <FaqItem key={i} q={f.question} a={f.answer} defaultOpen={i === 0} />
      ))}
    </div>
  )
}
