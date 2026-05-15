'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const ALL_DISEASES = [
  { slug: 'psoriasis', title: 'Psoriasis', hindi: 'सोरायसिस', hinglish: 'chambal chambal' },
  { slug: 'eczema', title: 'Eczema', hindi: 'एक्जिमा', hinglish: 'khujli rash' },
  { slug: 'vitiligo', title: 'Vitiligo', hindi: 'सफेद दाग', hinglish: 'safed daag' },
  { slug: 'acne', title: 'Acne', hindi: 'मुहांसे', hinglish: 'muhanse pimple' },
  { slug: 'urticaria', title: 'Urticaria', hindi: 'पित्ती', hinglish: 'pitti' },
  { slug: 'sciatica', title: 'Sciatica', hindi: 'सायटिका', hinglish: 'kamar pair dard' },
  { slug: 'disc-bulge', title: 'Disc Bulge', hindi: 'डिस्क खिसकना', hinglish: 'disc slip' },
  { slug: 'back-pain', title: 'Back Pain', hindi: 'कमर दर्द', hinglish: 'kamar dard' },
  { slug: 'arthritis', title: 'Arthritis', hindi: 'गठिया', hinglish: 'gathiya jodon ka dard' },
  { slug: 'rheumatoid-arthritis', title: 'Rheumatoid Arthritis', hindi: 'रूमेटाइड आर्थराइटिस', hinglish: 'gathiya RA' },
  { slug: 'gout', title: 'Gout', hindi: 'गाउट', hinglish: 'uric acid gathiya' },
  { slug: 'cervical-spondylosis', title: 'Cervical Spondylosis', hindi: 'सर्वाइकल', hinglish: 'gardan dard cervical' },
  { slug: 'frozen-shoulder', title: 'Frozen Shoulder', hindi: 'जमा हुआ कंधा', hinglish: 'kandha dard' },
  { slug: 'osteoarthritis', title: 'Osteoarthritis', hindi: 'घुटने का दर्द', hinglish: 'ghutne ka dard' },
  { slug: 'acidity', title: 'Acidity / GERD', hindi: 'सीने की जलन', hinglish: 'seene ki jalan tezaab acid reflux' },
  { slug: 'ibs', title: 'IBS', hindi: 'आईबीएस', hinglish: 'pet dard loose motion' },
  { slug: 'piles', title: 'Piles', hindi: 'बवासीर', hinglish: 'bavasir hemorrhoids' },
  { slug: 'constipation', title: 'Constipation', hindi: 'कब्ज', hinglish: 'kabz pet saaf nahi' },
  { slug: 'fatty-liver', title: 'Fatty Liver', hindi: 'जिगर में चर्बी', hinglish: 'fatty liver NAFLD' },
  { slug: 'gastritis', title: 'Gastritis', hindi: 'पेट की सूजन', hinglish: 'gastritis pet dard' },
  { slug: 'migraine', title: 'Migraine', hindi: 'माइग्रेन', hinglish: 'sar dard headache' },
  { slug: 'anxiety', title: 'Anxiety', hindi: 'चिंता', hinglish: 'chinta tension' },
  { slug: 'depression', title: 'Depression', hindi: 'अवसाद', hinglish: 'udaasi depression' },
  { slug: 'insomnia', title: 'Insomnia', hindi: 'अनिद्रा', hinglish: 'neend nahi aati' },
  { slug: 'pcod', title: 'PCOD/PCOS', hindi: 'पीसीओडी', hinglish: 'periods irregular pcod pcos' },
  { slug: 'uterine-fibroid', title: 'Uterine Fibroid', hindi: 'बच्चेदानी की गांठ', hinglish: 'bacchedani ki ganth rasoli' },
  { slug: 'menopause', title: 'Menopause', hindi: 'महावारी बंद', hinglish: 'periods band hot flashes' },
  { slug: 'hairfall', title: 'Hair Fall', hindi: 'बाल झड़ना', hinglish: 'baal jhadna' },
  { slug: 'alopecia', title: 'Alopecia Areata', hindi: 'गंजापन', hinglish: 'ganjapan baal' },
  { slug: 'dandruff', title: 'Dandruff', hindi: 'रूसी', hinglish: 'rusi' },
  { slug: 'asthma', title: 'Asthma', hindi: 'दमा', hinglish: 'dama saans' },
  { slug: 'allergy', title: 'Allergic Rhinitis', hindi: 'एलर्जी', hinglish: 'naak allergy' },
  { slug: 'sinusitis', title: 'Sinusitis', hindi: 'साइनसाइटिस', hinglish: 'sinus naak band' },
  { slug: 'tonsillitis', title: 'Tonsillitis', hindi: 'टॉन्सिल', hinglish: 'tonsil gala dard' },
  { slug: 'recurrent-cold', title: 'Recurrent Cold', hindi: 'बार बार सर्दी-जुकाम', hinglish: 'baar baar sardi zukam' },
  { slug: 'thyroid', title: 'Hypothyroidism', hindi: 'थायरॉइड', hinglish: 'thyroid TSH' },
  { slug: 'hyperthyroidism', title: 'Hyperthyroidism', hindi: 'थायरॉइड बढ़ना', hinglish: 'thyroid badhna' },
  { slug: 'varicose-veins', title: 'Varicose Veins', hindi: 'नसों की सूजन', hinglish: 'naso ki sujan' },
  { slug: 'kidney-stone', title: 'Kidney Stone', hindi: 'गुर्दे की पथरी', hinglish: 'pathri gurde ki pathri' },
]

const CHIPS = [
  { t: '🌸 Skin & Hair', top: '8%', left: '2%' },
  { t: '🦴 Joints', top: '4%', right: '4%' },
  { t: '🌾 Digestive', bottom: '26%', left: '0%' },
  { t: '🧠 Mental', bottom: '10%', right: '6%' },
  { t: '💧 Hormonal', top: '46%', right: '0%' },
  { t: '🫁 Respiratory', top: '42%', left: '2%' },
] as const

export default function HomeHero() {
  const [q, setQ] = useState('')
  const [tab, setTab] = useState<'condition' | 'diet'>('condition')
  const router = useRouter()

  const qLow = q.toLowerCase()
  const sugg = q.length > 1
    ? ALL_DISEASES.filter(d =>
        d.title.toLowerCase().includes(qLow) ||
        d.hindi.includes(q) ||
        d.hinglish.toLowerCase().includes(qLow) ||
        d.slug.replace(/-/g, ' ').includes(qLow)
      ).slice(0, 6)
    : []

  function goDisease(slug: string) {
    setQ('')
    router.push(`/diseases/${slug}`)
  }

  function handleSearch() {
    if (tab === 'diet') { router.push('/diet'); return }
    if (sugg.length > 0) goDisease(sugg[0].slug)
    else if (q) router.push('/diseases')
  }

  const chipAnim = ['floatA', 'floatB', 'floatA', 'floatB', 'floatA', 'floatB']

  return (
    <div style={{ position: 'relative', overflow: 'hidden', paddingTop: 66 }}>
      <style>{`
        @keyframes floatA { from { transform:translateY(0) } to { transform:translateY(-10px) } }
        @keyframes floatB { from { transform:translateY(0) } to { transform:translateY(8px) } }
        .hero-grid { display:grid; grid-template-columns:1.2fr 1fr; gap:60px; align-items:center; }
        .hero-visual { display:flex; }
        @media(max-width:860px){
          .hero-grid { grid-template-columns:1fr; gap:32px; }
          .hero-visual { display:none; }
          .hero-h1 { font-size:clamp(38px,10vw,58px) !important; }
        }
      `}</style>

      {/* Aurora blob */}
      <div style={{ position: 'absolute', top: -200, left: '38%', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle,var(--sage-bg-2) 0%,var(--sage-bg) 35%,transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0, opacity: 0.7 }} />
      {/* Grid pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)', backgroundSize: '60px 60px', opacity: 0.14, pointerEvents: 'none', zIndex: 0 }} />

      <div className="hero-grid" style={{ position: 'relative', zIndex: 2, maxWidth: 1160, margin: '0 auto', padding: 'clamp(52px,8vw,90px) clamp(16px,4vw,32px) clamp(52px,8vw,80px)' }}>

        {/* ── Left column ── */}
        <div>
          {/* Eyebrow */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--sage-dk)', marginBottom: 20 }}>
            <div style={{ width: 14, height: 1, background: 'var(--sage-dk)', opacity: 0.6 }} />
            200+ conditions · doctor reviewed
          </div>

          {/* H1 */}
          <h1 className="hero-h1" style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(44px,5.5vw,80px)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-0.035em', color: 'var(--ink)', margin: 0 }}>
            Healing<br />
            made simple.<br />
            <em className="sage-shimmer" style={{ fontWeight: 500, fontStyle: 'italic' }}>Hope lives here.</em>
          </h1>

          <p style={{ fontSize: 'clamp(14px,1.5vw,16px)', color: 'var(--ink3)', marginTop: 24, lineHeight: 1.6, maxWidth: 500, fontWeight: 300 }}>
            Aapki bimari ka homeopathy ilaaj — symptoms, root cause, medicines, diet aur lifestyle. Hinglish mein, doctor-reviewed.
          </p>

          {/* Tab + Search */}
          <div style={{ marginTop: 32, maxWidth: 540 }}>
            {/* Tab toggle */}
            <div style={{ display: 'flex', padding: 5, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 99, marginBottom: 12, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 5, bottom: 5, width: 'calc(50% - 5px)', left: tab === 'condition' ? 5 : '50%', background: 'var(--sage)', borderRadius: 99, transition: 'left .45s cubic-bezier(.2,.8,.2,1)', boxShadow: '0 4px 14px rgba(63,107,77,.35)' }} />
              {([['condition', '🩺', 'Condition'], ['diet', '🥗', 'Diet plan']] as const).map(([k, ic, l]) => (
                <div key={k} onClick={() => { setTab(k); setQ('') }} style={{ flex: 1, position: 'relative', zIndex: 1, padding: '12px 0', textAlign: 'center', fontSize: 13, fontWeight: 700, cursor: 'pointer', color: tab === k ? '#fff' : 'var(--ink3)', transition: 'color .3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <span style={{ fontSize: 16 }}>{ic}</span>{l}
                </div>
              ))}
            </div>

            {/* Search box */}
            <div style={{ background: 'var(--card)', border: `1.5px solid ${q ? 'var(--sage)' : 'var(--border)'}`, borderRadius: 18, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: q ? '0 10px 28px rgba(63,107,77,.12)' : '0 6px 20px rgba(38,74,48,.06)', transition: 'all .3s', position: 'relative' }}>
              <span style={{ color: q ? 'var(--sage)' : 'var(--ink4)', fontSize: 20 }}>🔍</span>
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSearch() }}
                placeholder={tab === 'condition' ? 'Try Sciatica, Psoriasis, Thyroid…' : 'Diet for joints, skin, gut…'}
                style={{ border: 'none', outline: 'none', flex: 1, fontSize: 15, background: 'transparent', color: 'var(--ink)', fontFamily: 'inherit' }}
              />
              <span onClick={handleSearch} style={{ padding: '8px 18px', background: 'var(--sage)', color: '#fff', borderRadius: 99, fontSize: 12, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>Search →</span>
            </div>

            {/* Live results */}
            {q && tab === 'condition' && sugg.length > 0 && (
              <div style={{ marginTop: 6, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 6, boxShadow: '0 12px 30px rgba(0,0,0,.07)', zIndex: 10, position: 'relative' }}>
                {sugg.map(m => (
                  <div key={m.slug} onMouseDown={() => goDisease(m.slug)} style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, borderRadius: 9, cursor: 'pointer' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--sage-bg)')} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                    <span style={{ fontSize: 14 }}>🩺</span>
                    <span style={{ flex: 1, fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{m.title}</span>
                    <span style={{ fontSize: 11, color: 'var(--ink4)', fontStyle: 'italic' }}>{m.hindi}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Trending */}
            <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: 'var(--ink4)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Trending</span>
              {['Sciatica', 'Tonsillitis', 'PCOS', 'Eczema', 'Thyroid'].map(t => {
                const d = ALL_DISEASES.find(x => x.title.toLowerCase().includes(t.toLowerCase()))
                return <span key={t} onClick={() => d && goDisease(d.slug)} style={{ padding: '5px 12px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 99, fontSize: 11, color: 'var(--ink2)', fontWeight: 500, cursor: 'pointer' }}>{t}</span>
              })}
            </div>
          </div>
        </div>

        {/* ── Right column — desktop visual ── */}
        <div className="hero-visual" style={{ position: 'relative', alignItems: 'center', justifyContent: 'center', height: 460 }}>
          {/* Breathing circles */}
          <div style={{ position: 'relative', width: 300, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(63,107,77,.1) 0%,transparent 70%)', animation: 'pulse-soft 4s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle,rgba(63,107,77,.16) 0%,transparent 70%)', animation: 'pulse-soft 3s ease-in-out infinite 0.6s' }} />
            <div style={{ position: 'absolute', width: 148, height: 148, borderRadius: '50%', background: 'radial-gradient(circle,rgba(63,107,77,.28) 0%,transparent 80%)', animation: 'pulse-soft 2.5s ease-in-out infinite 1.2s' }} />
            {/* Center card */}
            <div style={{ width: 112, height: 112, borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--sh)', zIndex: 1, gap: 2 }}>
              <span style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 20, fontWeight: 600, color: 'var(--ink)', lineHeight: 1 }}>Hope</span>
              <span style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 13, fontStyle: 'italic', color: 'var(--sage)' }}>lives here.</span>
              <span style={{ fontSize: 8, color: 'var(--ink4)', letterSpacing: 1.5, marginTop: 2 }}>DR. SHADAB</span>
            </div>
          </div>

          {/* Floating chips */}
          {CHIPS.map((c, i) => (
            <div key={i} style={{ position: 'absolute', ...(c as any), padding: '8px 14px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 99, fontSize: 12, fontWeight: 600, boxShadow: '0 6px 18px rgba(0,0,0,.07)', color: 'var(--ink)', animation: `${chipAnim[i]} ${3 + i * 0.4}s ease-in-out infinite alternate`, whiteSpace: 'nowrap' }}>
              {c.t}
            </div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', padding: '18px clamp(16px,4vw,32px)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 620, width: '100%', margin: '0 auto' }} className="hero-stats">
          {[['200+', 'Disease Guides'], ['17+', 'Diet Charts'], ['1000+', 'FAQs'], ['100%', 'Doctor Reviewed']].map(([n, l], i, arr) => (
            <div key={l} style={{ flex: 1, textAlign: 'center', padding: '14px 10px', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none', minWidth: 90 }}>
              <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 26, fontWeight: 600, color: 'var(--sage)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 10, color: 'var(--ink4)', marginTop: 4, fontWeight: 500 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
