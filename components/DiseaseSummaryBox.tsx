'use client'

import { WA_BASE } from '@/lib/constants'

// Skip any FAQ / benefit text that leans on CCRH or hard statistics —
// we keep the summary box accuracy-safe (no unverified numbers up top).
const STAT_RE = /ccrh|placebo|\b\d{1,3}\s?%|\bpasi\b|scorad|ijrh|study|trial/i

function pickSafeFaq(faqs: any[]) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null
  const safe = faqs.find((f) => f?.question && f?.answer && !STAT_RE.test(`${f.question} ${f.answer}`))
  return safe || faqs[0]
}

function trim(text: string, n = 165) {
  if (!text) return ''
  return text.length > n ? text.slice(0, n).trim() + '…' : text
}

export default function DiseaseSummaryBox({ disease }: { disease: any }) {
  const qf = disease?.quickFacts || {}
  const benefit = Array.isArray(disease?.homeopathyBenefits) ? disease.homeopathyBenefits[0] : null
  const faq = pickSafeFaq(disease?.faqs)

  const tiles = [
    qf.whatItIs && { emoji: '🧠', label: 'Ye Kya Hai', value: qf.whatItIs },
    qf.howCommon && { emoji: '🇮🇳', label: 'Kitni Common', value: qf.howCommon },
    benefit && { emoji: '💊', label: 'Homeopathy Kaise Help Karti Hai', value: benefit },
  ].filter(Boolean) as { emoji: string; label: string; value: string }[]

  if (tiles.length === 0 && !faq) return null

  const waLink = `${WA_BASE}?text=${encodeURIComponent(`Namaste Dr. Shadab, mujhe ${disease?.title || 'is condition'} ke baare mein guidance chahiye.`)}`

  return (
    <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,3vw,28px) clamp(16px,4vw,32px)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden', boxShadow: 'var(--sh-sm)' }}>

          {/* Header bar */}
          <div style={{ background: 'var(--sage)', padding: '13px clamp(16px,3vw,22px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>📋</span>
              <div>
                <div style={{ color: '#fff', fontSize: 15, fontWeight: 600, fontFamily: 'var(--font-display,Georgia,serif)', lineHeight: 1.2 }}>Ek Nazar Mein — {disease?.title}</div>
                <div style={{ color: 'rgba(255,255,255,.82)', fontSize: 11 }}>{disease?.hindiName ? `${disease.hindiName} · ` : ''}30 sec summary</div>
              </div>
            </div>
            {disease?.category && (
              <span style={{ background: 'rgba(255,255,255,.16)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 99 }}>{disease.category}</span>
            )}
          </div>

          {/* Body */}
          <div style={{ padding: 'clamp(14px,3vw,18px)' }}>

            {/* Quick tiles */}
            {tiles.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 10, marginBottom: faq ? 16 : 0 }}>
                {tiles.map((t, i) => (
                  <div key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 12, padding: '13px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--ink3)', fontWeight: 600, marginBottom: 6 }}>
                      <span style={{ fontSize: 14 }}>{t.emoji}</span>{t.label}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 400, lineHeight: 1.5 }}>{t.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Featured FAQ */}
            {faq && (
              <div style={{ borderTop: tiles.length > 0 ? '1px solid var(--border)' : 'none', paddingTop: tiles.length > 0 ? 14 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 8 }}>❓ Sabse Common Sawaal</div>
                <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4, marginBottom: 6 }}>{faq.question}</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink3)', lineHeight: 1.65, fontWeight: 300 }}>
                  {trim(faq.answer)} <a href="#faq" style={{ color: 'var(--sage)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>poora jawab ↓</a>
                </div>
              </div>
            )}

            {/* Footer: trust line + consult */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginTop: 16, paddingTop: 13, borderTop: '1px solid var(--border)' }}>
              <span style={{ fontSize: 11.5, color: 'var(--ink4)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: 'var(--green)' }}>✓</span> Dr. Shadab Khan, MD Homoeopathy dwara reviewed
              </span>
              <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 16px', background: '#25d366', color: '#fff', borderRadius: 99, textDecoration: 'none', fontSize: 12.5, fontWeight: 600 }}>
                💬 Dr. Shadab se poochhein
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
