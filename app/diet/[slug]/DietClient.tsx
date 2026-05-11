'use client'

import { useState } from 'react'
import Link from 'next/link'
import { WA_BASE } from '@/lib/constants'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)', padding: '18px 0' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.5, flex: 1 }}>{q}</span>
        <span style={{ color: 'var(--gold)', fontSize: 22, fontWeight: 700, flexShrink: 0, transition: 'transform .2s', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      {open && (
        <div style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.9, marginTop: 12, fontWeight: 300, borderLeft: '3px solid var(--gold)', paddingLeft: 16, whiteSpace: 'pre-line' }}>{a}</div>
      )}
    </div>
  )
}

function WaShareBtn({ text, label }: { text: string; label: string }) {
  const href = `https://wa.me/?text=${encodeURIComponent(text)}`
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: '#25d366', color: '#fff', borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: 'none', margin: '16px 0' }}>
      📲 {label}
    </a>
  )
}

export default function DietClient({ diet }: { diet: any }) {
  const [nonVeg, setNonVeg] = useState(false)

  const vegGreen = diet.vegGreenList || []
  const redList = diet.redList || []
  const habits = diet.eatingHabits || []
  const mealPlan = diet.dailyMealPlan || []
  const plan4 = diet.samplePlan4Day || []
  const situations = diet.specialSituations || []
  const faqs = diet.faqs || []
  const sources = diet.sources || []

  return (
    <div className="page-in" style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 66 }}>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '11px clamp(16px,4vw,32px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', gap: 8, fontSize: 13, color: 'var(--ink4)', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/diet" style={{ color: 'var(--gold-dk)', textDecoration: 'none' }}>Diet Charts</Link>
          <span>›</span>
          <span style={{ color: 'var(--ink2)' }}>{diet.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '44px clamp(16px,4vw,32px) 36px', textAlign: 'center' }}>
        {diet.category && (
          <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.25)' }}>{diet.category}</span>
        )}
        <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(24px,5vw,46px)', fontWeight: 700, color: 'var(--ink)', margin: '14px 0 6px' }}>{diet.title}</h1>
        {diet.hindiName && <div style={{ fontSize: 18, color: 'var(--gold-dk)', fontFamily: 'var(--font-playfair,Georgia,serif)', fontStyle: 'italic', marginBottom: 12 }}>{diet.hindiName}</div>}
        {diet.intro && <p style={{ fontSize: 15, color: 'var(--ink3)', maxWidth: 600, margin: '0 auto 20px', lineHeight: 1.75, fontWeight: 300, whiteSpace: 'pre-line' }}>{diet.intro}</p>}

        {/* Non-veg toggle */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 100, cursor: 'pointer' }} onClick={() => setNonVeg(!nonVeg)}>
          <div style={{ width: 36, height: 20, borderRadius: 10, background: nonVeg ? '#25d366' : 'var(--border2)', position: 'relative', transition: 'background .2s' }}>
            <div style={{ position: 'absolute', top: 3, left: nonVeg ? 18 : 3, width: 14, height: 14, borderRadius: '50%', background: '#fff', transition: 'left .2s', boxShadow: '0 1px 3px rgba(0,0,0,.2)' }} />
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink2)' }}>Non-Veg Options {nonVeg ? 'On 🍗' : 'Off 🌿'}</span>
        </div>

        <p style={{ fontSize: 12, color: 'var(--ink4)', marginTop: 14, fontWeight: 300 }}>Dr. Shadab Khan, MD Homoeopath | Reviewed {diet.reviewDate || 'May 2026'}</p>
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px clamp(16px,4vw,32px) 80px' }}>

        {/* 3 Eating Habits */}
        {habits.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>⏰ 3 Zaruri Khaane Ki Aadatein</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12 }}>
              {habits.map((h: any, i: number) => (
                <div key={i} style={{ padding: '18px 20px', background: 'var(--card)', border: '1px solid var(--border)', borderLeft: '4px solid var(--gold)', borderRadius: '0 12px 12px 0', boxShadow: 'var(--sh-sm)' }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{h.habit}</p>
                  <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.6, fontWeight: 300 }}>{h.reason}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Green List */}
        {vegGreen.length > 0 && (
          <div style={{ marginBottom: 8 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 22, fontWeight: 700, color: 'var(--green)', marginBottom: 6 }}>✅ Green List — Ye Zaroor Khayein</h2>
            <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 16, fontWeight: 300 }}>Ye foods {diet.hindiName || diet.title?.split(' ')[0]} mein healing support karte hain</p>
            <div style={{ background: 'rgba(58,125,82,.04)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 16, padding: '24px' }}>
              {vegGreen.map((cat: any) => (
                <div key={cat.categoryName} style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>{cat.emoji} {cat.categoryName}</p>
                  <div style={{ display: 'grid', gap: 6 }}>
                    {cat.items?.map((item: any) => (
                      <div key={item.food} style={{ display: 'flex', gap: 10, padding: '9px 12px', background: 'rgba(58,125,82,.06)', borderRadius: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--green)', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                        <div>
                          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{item.food}</span>
                          {item.reason && <span style={{ fontSize: 12, color: 'var(--ink3)', fontWeight: 300 }}> — {item.reason}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Non-veg allowed section */}
              {nonVeg && diet.nonVegAllowed?.length > 0 && (
                <div style={{ marginTop: 8, paddingTop: 16, borderTop: '1px dashed rgba(58,125,82,.3)' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>🍗 Non-Veg Mein Kya Allowed</p>
                  <div style={{ display: 'grid', gap: 6 }}>
                    {diet.nonVegAllowed.map((item: any) => (
                      <div key={item.food} style={{ display: 'flex', gap: 10, padding: '9px 12px', background: 'rgba(58,125,82,.06)', borderRadius: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--green)', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                        <div>
                          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{item.food}</span>
                          {item.reason && <span style={{ fontSize: 12, color: 'var(--ink3)', fontWeight: 300 }}> — {item.reason}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Non-veg avoid section */}
              {nonVeg && diet.nonVegAvoid?.length > 0 && (
                <div style={{ marginTop: 16, padding: '16px', background: 'rgba(176,64,64,.05)', border: '1px solid rgba(176,64,64,.15)', borderRadius: 10 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>🚫 Non-Veg Mein Ye Avoid Karein</p>
                  <div style={{ display: 'grid', gap: 6 }}>
                    {diet.nonVegAvoid.map((item: any) => (
                      <div key={item.food} style={{ display: 'flex', gap: 10, padding: '9px 12px', background: 'rgba(176,64,64,.05)', borderRadius: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--red)', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✕</span>
                        <div>
                          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{item.food}</span>
                          {item.reason && <span style={{ fontSize: 12, color: 'var(--ink3)', fontWeight: 300 }}> — {item.reason}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {diet.shareTextGreenRed && <WaShareBtn text={diet.shareTextGreenRed} label="Ye list share karein →" />}
          </div>
        )}

        {/* Red List */}
        {redList.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 22, fontWeight: 700, color: 'var(--red)', marginBottom: 6 }}>❌ Red List — Ye Bilkul Mat Khayein</h2>
            <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 16, fontWeight: 300 }}>Ye foods symptoms/attack trigger karte hain — temporarily ya permanently avoid karein</p>
            <div style={{ background: 'rgba(176,64,64,.04)', border: '1px solid rgba(176,64,64,.2)', borderRadius: 16, padding: '24px' }}>
              {redList.map((cat: any) => (
                <div key={cat.categoryName} style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>{cat.emoji} {cat.categoryName}</p>
                  <div style={{ display: 'grid', gap: 6 }}>
                    {cat.items?.map((item: any) => (
                      <div key={item.food} style={{ display: 'flex', gap: 10, padding: '9px 12px', background: 'rgba(176,64,64,.05)', borderRadius: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--red)', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✕</span>
                        <div>
                          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{item.food}</span>
                          {item.reason && <span style={{ fontSize: 12, color: 'var(--ink3)', fontWeight: 300 }}> — {item.reason}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Daily Meal Plan */}
        {mealPlan.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>🕐 Ek Din Ka Meal Plan</h2>
            <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 16, fontWeight: 300 }}>Veg default — non-veg toggle karein upar se aur relevant slots mein option dikhega</p>
            <div style={{ display: 'grid', gap: 10 }}>
              {mealPlan.map((slot: any) => (
                <div key={slot.slotName} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 20px', display: 'grid', gridTemplateColumns: '140px 1fr', gap: 16, alignItems: 'start' }}>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--gold-dk)', marginBottom: 2 }}>{slot.slotEmoji} {slot.slotName}</p>
                    <p style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 300 }}>{slot.slotTime}</p>
                  </div>
                  <div>
                    {slot.vegOptions?.map((opt: string, i: number) => (
                      <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 4 }}>
                        <span style={{ color: 'var(--green)', fontSize: 11, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>🌿</span>
                        <span style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.5 }}>{opt}</span>
                      </div>
                    ))}
                    {nonVeg && slot.nonVegOption && (
                      <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: 4, paddingTop: 6, borderTop: '1px dashed var(--border)' }}>
                        <span style={{ fontSize: 11, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>🍗</span>
                        <span style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.5 }}>{slot.nonVegOption}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4-Day Sample Plan */}
        {plan4.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>📅 4 Din Ka Sample Plan</h2>
            <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 16, fontWeight: 300 }}>Baaki dinon ke liye upar diya Daily Meal Plan use karein — apni pasand se choose karein</p>
            <div style={{ overflowX: 'auto', borderRadius: 14, border: '1px solid var(--border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 580 }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg,var(--gold-dk),var(--gold-lt))' }}>
                    {['Din', '🌅 Subah', '🍽️ Nashta', '🍱 Dopahar', '🌇 Shaam', '🌙 Raat'].map(h => (
                      <th key={h} style={{ padding: '11px 12px', fontSize: 11, fontWeight: 700, color: '#fff', textAlign: 'left', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {plan4.map((row: any, i: number) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px', fontSize: 12, fontWeight: 700, color: 'var(--gold-dk)', whiteSpace: 'nowrap' }}>{row.day}</td>
                      <td style={{ padding: '10px 12px', fontSize: 12, color: 'var(--ink2)', lineHeight: 1.5 }}>{row.vegSubah}</td>
                      <td style={{ padding: '10px 12px', fontSize: 12, color: 'var(--ink2)', lineHeight: 1.5 }}>
                        {row.vegNashta}
                        {nonVeg && row.nonVegNashta && <div style={{ marginTop: 4, color: 'var(--ink3)', fontSize: 11 }}>🍗 {row.nonVegNashta}</div>}
                      </td>
                      <td style={{ padding: '10px 12px', fontSize: 12, color: 'var(--ink2)', lineHeight: 1.5 }}>
                        {row.vegDopahar}
                        {nonVeg && row.nonVegDopahar && <div style={{ marginTop: 4, color: 'var(--ink3)', fontSize: 11 }}>🍗 {row.nonVegDopahar}</div>}
                      </td>
                      <td style={{ padding: '10px 12px', fontSize: 12, color: 'var(--ink2)', lineHeight: 1.5 }}>{row.vegShaam}</td>
                      <td style={{ padding: '10px 12px', fontSize: 12, color: 'var(--ink2)', lineHeight: 1.5 }}>
                        {row.vegRaat}
                        {nonVeg && row.nonVegRaat && <div style={{ marginTop: 4, color: 'var(--ink3)', fontSize: 11 }}>🍗 {row.nonVegRaat}</div>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {diet.shareTextMealPlan && <WaShareBtn text={diet.shareTextMealPlan} label="4-day plan share karein →" />}
          </div>
        )}

        {/* Special Situations */}
        {situations.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>🎯 Special Situations</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
              {situations.map((s: any) => (
                <div key={s.situationType} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '20px' }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>{s.emoji} {s.title}</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
                    {s.tips?.map((tip: string, i: number) => (
                      <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 3, fontSize: 10 }}>●</span>
                        <span style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.6, fontWeight: 300 }}>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3 Boxes */}
        <div style={{ display: 'grid', gap: 14, marginBottom: 36 }}>
          {diet.proTip && (
            <div style={{ padding: '18px 22px', background: 'rgba(184,145,42,.08)', border: '1px solid rgba(184,145,42,.25)', borderLeft: '4px solid var(--gold)', borderRadius: '0 12px 12px 0', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>💡</span>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold-dk)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Pro Tip</p>
                <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.8, fontWeight: 300 }}>{diet.proTip}</p>
              </div>
            </div>
          )}
          {diet.importantNote && (
            <div style={{ padding: '18px 22px', background: 'rgba(58,125,82,.06)', border: '1px solid rgba(58,125,82,.2)', borderLeft: '4px solid var(--green)', borderRadius: '0 12px 12px 0', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>⚠️</span>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Important Note</p>
                <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.8, fontWeight: 300 }}>{diet.importantNote}</p>
              </div>
            </div>
          )}
          {diet.homeopathyDiet && (
            <div style={{ padding: '18px 22px', background: 'rgba(45,95,79,.06)', border: '1px solid rgba(45,95,79,.2)', borderLeft: '4px solid var(--sage-deep)', borderRadius: '0 12px 12px 0', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>🌿</span>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--sage-deep)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Homeopathy + Diet</p>
                <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.8, fontWeight: 300 }}>{diet.homeopathyDiet}</p>
              </div>
            </div>
          )}
        </div>

        {/* Quick Facts */}
        {diet.quickFacts && (
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '24px', marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>⚡ Quick Facts</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {diet.quickFacts.mistake && (
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>❌</span>
                  <div><p style={{ fontSize: 11, fontWeight: 700, color: 'var(--red)', textTransform: 'uppercase', marginBottom: 3 }}>Sabse Common Mistake</p><p style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 300, lineHeight: 1.6 }}>{diet.quickFacts.mistake}</p></div>
                </div>
              )}
              {diet.quickFacts.mustEat && (
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>✅</span>
                  <div><p style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase', marginBottom: 3 }}>Zaroor Khayein</p><p style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 300, lineHeight: 1.6 }}>{diet.quickFacts.mustEat}</p></div>
                </div>
              )}
              {diet.quickFacts.mustAvoid && (
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>🚫</span>
                  <div><p style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold-dk)', textTransform: 'uppercase', marginBottom: 3 }}>Bilkul Avoid Karein</p><p style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 300, lineHeight: 1.6 }}>{diet.quickFacts.mustAvoid}</p></div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* FAQs */}
        {faqs.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>❓ Aksar Pooche Jaane Wale Sawaal</h2>
            <p style={{ fontSize: 13, color: 'var(--ink4)', marginBottom: 16, fontWeight: 300 }}>{diet.title} ke baare mein common diet questions</p>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '8px 24px' }}>
              {faqs.map((f: any, i: number) => (
                <FaqItem key={i} q={f.question} a={f.answer} />
              ))}
            </div>
          </div>
        )}

        {/* Doctor Note */}
        {diet.doctorNote && (
          <div style={{ background: 'linear-gradient(135deg,var(--bg2),var(--card))', border: '1px solid var(--border2)', borderRadius: 14, padding: '24px 28px', marginBottom: 36 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold-dk)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>👨‍⚕️ Doctor Ka Personal Note</p>
            <blockquote style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.9, fontStyle: 'italic', fontWeight: 300, margin: 0, borderLeft: '3px solid var(--gold)', paddingLeft: 16 }}>{diet.doctorNote}</blockquote>
          </div>
        )}

        {/* Sources */}
        {sources.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink4)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>📚 Sources</p>
            <div style={{ display: 'grid', gap: 6 }}>
              {sources.map((s: any, i: number) => (
                <div key={i} style={{ fontSize: 12, color: 'var(--ink4)', lineHeight: 1.5 }}>
                  {i + 1}. {s.name} ({s.year})
                  {s.url && <> — <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dk)' }}>Link</a></>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg,#1a3d30 0%,#0f2a1e 100%)', borderRadius: 16, padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, marginBottom: 20 }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', color: 'white', fontSize: '1.15rem', marginBottom: 5 }}>Personal Diet Advice Chahiye?</h3>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '0.85rem', margin: 0 }}>Dr. Shadab aapki condition dekh ke customized plan banate hain</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href={`${WA_BASE}?text=Namaste%20Dr.%20Shadab%2C%20mujhe%20${encodeURIComponent(diet.title || 'diet')}%20ke%20liye%20advice%20chahiye`} target="_blank" rel="noopener noreferrer"
              style={{ background: '#25d366', color: '#fff', padding: '11px 20px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem' }}>
              💬 WhatsApp Dr. Shadab
            </a>
            {diet.relatedDiseaseSlug && (
              <Link href={`/diseases/${diet.relatedDiseaseSlug}`}
                style={{ background: 'rgba(255,255,255,.12)', color: 'white', padding: '11px 20px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,.2)', fontSize: '0.85rem' }}>
                Full Disease Guide →
              </Link>
            )}
          </div>
        </div>

        {diet.shareTextPage && <WaShareBtn text={diet.shareTextPage} label="Ye guide share karein →" />}

        <div style={{ textAlign: 'center', marginTop: 8 }}>
          <Link href="/diet" style={{ display: 'inline-block', padding: '10px 22px', border: '1px solid var(--border2)', background: 'var(--card)', color: 'var(--ink3)', borderRadius: 100, fontSize: 13, textDecoration: 'none', fontWeight: 500 }}>← Sabhi Diet Charts</Link>
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
