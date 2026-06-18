'use client'

import { WA_BASE } from '@/lib/constants'

const STAT_RE = /ccrh|placebo|\b\d{1,3}\s?%|\bpasi\b|scorad|ijrh|study|trial/i

function pickSafeFaq(faqs: any[]) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null
  const safe = faqs.find((f) => f?.question && f?.answer && !STAT_RE.test(`${f.question} ${f.answer}`))
  return safe || faqs[0]
}

function trim(text: string, n = 160) {
  if (!text) return ''
  return text.length > n ? text.slice(0, n).trim() + '…' : text
}

export default function SymptomSummaryBox({ symptom: s }: { symptom: any }) {
  const title = s?.title || s?.name || ''
  // Pull from new dedicated fields OR old quickFacts array [fact, indiaStats, doctorWhen]
  const arr = Array.isArray(s?.quickFacts) ? s.quickFacts : []
  const whatIs = s?.quickFactSymptom || arr[0]
  const stats = s?.quickFactIndiaStats || arr[1]
  const doctorWhen = s?.quickFactDoctorWhen || arr[2]
  const faq = pickSafeFaq(s?.faqs)

  const tiles = [
    whatIs && { emoji: '🔎', label: 'Ye Kya Hai', value: whatIs, accent: 'var(--ink3)', bg: 'var(--bg)', border: 'var(--border)' },
    stats && { emoji: '🇮🇳', label: 'Kitni Common', value: stats, accent: 'var(--sage)', bg: 'rgba(63,107,77,0.06)', border: 'rgba(63,107,77,0.2)' },
    doctorWhen && { emoji: '⚠️', label: 'Kab Doctor Ko Dikhayein', value: doctorWhen, accent: 'var(--red)', bg: 'rgba(162,56,56,0.06)', border: 'rgba(162,56,56,0.2)' },
  ].filter(Boolean) as { emoji: string; label: string; value: string; accent: string; bg: string; border: string }[]

  if (tiles.length === 0 && !faq) return null

  const waLink = `${WA_BASE}?text=${encodeURIComponent(`Namaste Dr. Shadab, mujhe ${title || 'is symptom'} ke baare mein guidance chahiye.`)}`

  return (
    <div style={{ marginBottom: 44 }}>
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden', boxShadow: 'var(--sh-sm)' }}>

        {/* Header bar */}
        <div style={{ background: 'var(--sage)', padding: '13px clamp(16px,3vw,22px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🔎</span>
            <div>
              <div style={{ color: '#fff', fontSize: 15, fontWeight: 600, fontFamily: 'var(--font-display,Georgia,serif)', lineHeight: 1.2 }}>Ek Nazar Mein — {title}</div>
              <div style={{ color: 'rgba(255,255,255,.82)', fontSize: 11 }}>{s?.hindiName ? `${s.hindiName} · ` : ''}30 sec summary</div>
            </div>
          </div>
          {s?.bodySystem && (
            <span style={{ background: 'rgba(255,255,255,.16)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 99 }}>{s.bodySystem}</span>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: 'clamp(14px,3vw,18px)' }}>

          {tiles.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 10, marginBottom: faq ? 16 : 0 }}>
              {tiles.map((t, i) => (
                <div key={i} style={{ background: t.bg, border: `1px solid ${t.border}`, borderLeft: `3px solid ${t.accent}`, borderRadius: 10, padding: '13px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: t.accent, fontWeight: 700, marginBottom: 6 }}>
                    <span style={{ fontSize: 14 }}>{t.emoji}</span>{t.label}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 400, lineHeight: 1.5 }}>{trim(t.value, 130)}</div>
                </div>
              ))}
            </div>
          )}

          {faq && (
            <div style={{ borderTop: tiles.length > 0 ? '1px solid var(--border)' : 'none', paddingTop: tiles.length > 0 ? 14 : 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 8 }}>❓ Sabse Common Sawaal</div>
              <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4, marginBottom: 6 }}>{faq.question}</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink3)', lineHeight: 1.65, fontWeight: 300 }}>{trim(faq.answer)}</div>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginTop: 16, paddingTop: 13, borderTop: '1px solid var(--border)' }}>
            <span style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 14, fontStyle: 'italic', color: 'var(--sage)', display: 'flex', alignItems: 'center', gap: 7 }}>
              🌱 Hope lives here
            </span>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 16px', background: '#25d366', color: '#fff', borderRadius: 99, textDecoration: 'none', fontSize: 12.5, fontWeight: 600 }}>
              💬 Consult Now
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
