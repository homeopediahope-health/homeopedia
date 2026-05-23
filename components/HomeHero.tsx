'use client'
import { useState, useMemo } from 'react'
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
  { slug: 'rheumatoid-arthritis', title: 'Rheumatoid Arthritis', hindi: 'रूमेटाइड', hinglish: 'gathiya RA' },
  { slug: 'gout', title: 'Gout', hindi: 'गाउट', hinglish: 'uric acid gathiya' },
  { slug: 'cervical-spondylosis', title: 'Cervical Spondylosis', hindi: 'सर्वाइकल', hinglish: 'gardan dard cervical' },
  { slug: 'frozen-shoulder', title: 'Frozen Shoulder', hindi: 'कंधा दर्द', hinglish: 'kandha dard' },
  { slug: 'osteoarthritis', title: 'Osteoarthritis', hindi: 'घुटने का दर्द', hinglish: 'ghutne ka dard' },
  { slug: 'acidity', title: 'Acidity / GERD', hindi: 'सीने की जलन', hinglish: 'seene ki jalan acid reflux' },
  { slug: 'ibs', title: 'IBS', hindi: 'आईबीएस', hinglish: 'pet dard loose motion' },
  { slug: 'piles', title: 'Piles', hindi: 'बवासीर', hinglish: 'bavasir hemorrhoids' },
  { slug: 'constipation', title: 'Constipation', hindi: 'कब्ज', hinglish: 'kabz pet saaf nahi' },
  { slug: 'fatty-liver', title: 'Fatty Liver', hindi: 'फैटी लिवर', hinglish: 'fatty liver NAFLD' },
  { slug: 'gastritis', title: 'Gastritis', hindi: 'पेट की सूजन', hinglish: 'gastritis pet dard' },
  { slug: 'migraine', title: 'Migraine', hindi: 'माइग्रेन', hinglish: 'sar dard headache' },
  { slug: 'anxiety', title: 'Anxiety', hindi: 'चिंता', hinglish: 'chinta tension' },
  { slug: 'depression', title: 'Depression', hindi: 'अवसाद', hinglish: 'udaasi depression' },
  { slug: 'insomnia', title: 'Insomnia', hindi: 'अनिद्रा', hinglish: 'neend nahi aati' },
  { slug: 'pcod', title: 'PCOD/PCOS', hindi: 'पीसीओडी', hinglish: 'periods irregular pcod pcos' },
  { slug: 'uterine-fibroid', title: 'Uterine Fibroid', hindi: 'बच्चेदानी की गांठ', hinglish: 'rasoli ganth' },
  { slug: 'menopause', title: 'Menopause', hindi: 'महावारी बंद', hinglish: 'periods band hot flashes' },
  { slug: 'hairfall', title: 'Hair Fall', hindi: 'बाल झड़ना', hinglish: 'baal jhadna' },
  { slug: 'alopecia', title: 'Alopecia Areata', hindi: 'गंजापन', hinglish: 'ganjapan baal' },
  { slug: 'dandruff', title: 'Dandruff', hindi: 'रूसी', hinglish: 'rusi' },
  { slug: 'asthma', title: 'Asthma', hindi: 'दमा', hinglish: 'dama saans' },
  { slug: 'allergy', title: 'Allergic Rhinitis', hindi: 'एलर्जी', hinglish: 'naak allergy' },
  { slug: 'sinusitis', title: 'Sinusitis', hindi: 'साइनसाइटिस', hinglish: 'sinus naak band' },
  { slug: 'tonsillitis', title: 'Tonsillitis', hindi: 'टॉन्सिल', hinglish: 'tonsil gala dard' },
  { slug: 'recurrent-cold', title: 'Recurrent Cold', hindi: 'बार बार सर्दी', hinglish: 'baar baar sardi zukam' },
  { slug: 'thyroid', title: 'Hypothyroidism', hindi: 'थायरॉइड', hinglish: 'thyroid TSH' },
  { slug: 'hyperthyroidism', title: 'Hyperthyroidism', hindi: 'थायरॉइड बढ़ना', hinglish: 'thyroid badhna' },
  { slug: 'kidney-stone', title: 'Kidney Stone', hindi: 'पथरी', hinglish: 'pathri gurde ki pathri' },
]

const TABS = [
  { k: 'condition', ic: '🩺', l: 'Conditions',  ph: 'Sciatica, Eczema, Thyroid, PCOS…', trending: ['Sciatica', 'Recurrent Cold', 'Tonsillitis', 'PCOS', 'Eczema'] },
  { k: 'lab',       ic: '🔬', l: 'Labs',        ph: 'ESR, TSH, Vitamin D, CBC…',         trending: ['ESR', 'CBC', 'TSH', 'Vitamin D', 'HbA1c'] },
  { k: 'vitamin',   ic: '💊', l: 'Vitamins',    ph: 'Calcium, Iron, Vitamin D, B12…',    trending: ['Vitamin D', 'B12', 'Iron', 'Calcium', 'Magnesium'] },
  { k: 'diet',      ic: '🥗', l: 'Diet',        ph: 'Joints, skin, gut, hormonal…',       trending: ['Joints', 'Skin', 'Digestive', 'PCOS', 'Thyroid'] },
  { k: 'symptom',   ic: '⚕️', l: 'Symptoms',   ph: 'Sir dard, gas, joint pain…',         trending: ['Sir dard', 'Joint pain', 'Fatigue', 'Acidity', 'Anxiety'] },
] as const

const ORBITAL_CHIPS = [
  { t: '🩺 Conditions', style: { top: '6%', left: '4%' } },
  { t: '🔬 Lab tests',  style: { top: '2%', right: '6%' } },
  { t: '💊 Vitamins',   style: { bottom: '28%', left: '0%' } },
  { t: '🥗 Diet plans', style: { bottom: '12%', right: '8%' } },
  { t: '⚕️ Symptoms',  style: { top: '46%', right: '2%' } },
  { t: '💉 Medicines',  style: { top: '44%', left: '4%' } },
] as const

type TabKey = typeof TABS[number]['k']

export default function HomeHero() {
  const [q, setQ] = useState('')
  const [tab, setTab] = useState<TabKey>('condition')
  const router = useRouter()

  const tabDef = TABS.find(t => t.k === tab) || TABS[0]
  const qLow = q.toLowerCase()

  const sugg = useMemo(() => {
    if (tab !== 'condition' || q.length < 2) return []
    return ALL_DISEASES.filter(d =>
      d.title.toLowerCase().includes(qLow) ||
      d.hindi.includes(q) ||
      d.hinglish.toLowerCase().includes(qLow) ||
      d.slug.replace(/-/g, ' ').includes(qLow)
    ).slice(0, 6)
  }, [q, tab, qLow])

  function goDisease(slug: string) { setQ(''); router.push(`/diseases/${slug}`) }

  function handleSearch() {
    if (tab === 'condition') { if (sugg.length > 0) goDisease(sugg[0].slug); else router.push('/diseases') }
    else if (tab === 'lab')     router.push('/lab-tests')
    else if (tab === 'vitamin') router.push('/vitamins')
    else if (tab === 'diet')    router.push('/diet')
    else if (tab === 'symptom') router.push('/symptoms')
  }

  function handleTrend(label: string) {
    if (tab === 'condition') {
      const d = ALL_DISEASES.find(x => x.title.toLowerCase().includes(label.toLowerCase()))
      if (d) { goDisease(d.slug) } else router.push('/diseases')
    } else if (tab === 'lab')     router.push('/lab-tests')
    else if (tab === 'vitamin') router.push('/vitamins')
    else if (tab === 'diet')    router.push('/diet')
    else                        router.push('/symptoms')
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden', paddingTop: 66 }}>
      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
        @keyframes shimmerH { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        .hero-grid { display:grid; grid-template-columns:1.2fr 1fr; gap:56px; align-items:center; }
        .hero-visual { display:flex; }
        @media(max-width:860px){
          .hero-grid { grid-template-columns:1fr; }
          .hero-visual { display:none; }
          .hero-h1 { font-size:clamp(40px,10vw,60px) !important; }
        }
      `}</style>

      {/* Soft aurora */}
      <div style={{ position: 'absolute', top: -160, left: '40%', width: 760, height: 760, borderRadius: '50%', background: 'radial-gradient(circle,var(--sage-bg-2) 0%,var(--sage-bg) 38%,transparent 68%)', filter: 'blur(56px)', opacity: 0.65, pointerEvents: 'none', zIndex: 0 }} />

      <div className="hero-grid" style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: 'clamp(52px,8vw,88px) clamp(20px,4vw,56px) clamp(48px,7vw,72px)' }}>

        {/* ── LEFT ── */}
        <div>
          {/* Eyebrow */}
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--sage-dk)', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 14, height: 1, background: 'var(--sage-dk)', opacity: 0.55 }} />
            Classical Homoeopathy · 50+ Tests · 50+ Vitamins · 200+ Conditions
          </div>

          {/* H1 */}
          <h1 className="hero-h1" style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(46px,5.8vw,84px)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-0.038em', color: 'var(--ink)', margin: 0 }}>
            Homoeopathy,<br />
            made simple.<br />
            <em style={{
              fontWeight: 500, fontStyle: 'italic',
              background: 'linear-gradient(90deg,var(--sage-dk) 0%,var(--sage) 45%,var(--sage-dk) 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmerH 5s linear infinite',
            }}>Hope lives here.</em>
          </h1>

          <p style={{ fontSize: 'clamp(14px,1.5vw,17px)', color: 'var(--ink3)', marginTop: 22, lineHeight: 1.6, maxWidth: 520, fontWeight: 300 }}>
            Classical homoeopathy ke saath conditions, lab reports, vitamins, medicines, diet plans — sab Hinglish mein, doctor-reviewed.
          </p>

          {/* 5 tab pills */}
          <div style={{ marginTop: 30, maxWidth: 580 }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginBottom: 12 }}>
              {TABS.map(({ k, ic, l }) => {
                const on = tab === k
                return (
                  <button key={k} onClick={() => { setTab(k); setQ('') }} style={{
                    padding: '9px 16px', borderRadius: 99, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                    background: on ? 'var(--sage)' : 'var(--card)',
                    color: on ? '#fff' : 'var(--ink3)',
                    border: `1px solid ${on ? 'var(--sage)' : 'var(--border)'}`,
                    boxShadow: on ? '0 6px 18px rgba(63,107,77,.3)' : 'none',
                    transition: 'all .25s',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ fontSize: 15 }}>{ic}</span>
                    <span>{l}</span>
                  </button>
                )
              })}
            </div>

            {/* Search box */}
            <div style={{ background: 'var(--card)', border: `1.5px solid ${q ? 'var(--sage)' : 'var(--border)'}`, borderRadius: 18, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: q ? '0 10px 28px rgba(63,107,77,.12)' : '0 6px 20px rgba(38,74,48,.05)', transition: 'all .3s', position: 'relative' }}>
              <span style={{ color: q ? 'var(--sage)' : 'var(--ink4)', fontSize: 20, flexShrink: 0 }}>🔍</span>
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSearch() }}
                placeholder={tabDef.ph}
                style={{ border: 'none', outline: 'none', flex: 1, fontSize: 16, background: 'transparent', color: 'var(--ink)', fontFamily: 'inherit', minWidth: 0 }}
              />
              <button onClick={handleSearch} style={{ padding: '10px 20px', background: 'var(--sage)', color: '#fff', borderRadius: 99, fontSize: 13, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, border: 'none', boxShadow: '0 4px 14px rgba(63,107,77,.28)' }}>
                Search →
              </button>
            </div>

            {/* Live suggestions */}
            {q && tab === 'condition' && sugg.length > 0 && (
              <div style={{ marginTop: 6, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 6, boxShadow: '0 12px 30px rgba(0,0,0,.07)', position: 'relative', zIndex: 10 }}>
                {sugg.map(m => (
                  <div key={m.slug} onMouseDown={() => goDisease(m.slug)}
                    style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, borderRadius: 9, cursor: 'pointer' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--sage-bg)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                    <span style={{ fontSize: 14 }}>🩺</span>
                    <span style={{ flex: 1, fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{m.title}</span>
                    <span style={{ fontSize: 11, color: 'var(--ink4)', fontStyle: 'italic' }}>{m.hindi}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Trending */}
            <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' as const, alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: 'var(--ink4)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Trending</span>
              {tabDef.trending.map(label => (
                <span key={label} onClick={() => handleTrend(label)}
                  style={{ padding: '5px 12px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 99, fontSize: 11, color: 'var(--ink2)', fontWeight: 500, cursor: 'pointer' }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT — orbital visual ── */}
        <div className="hero-visual" style={{ position: 'relative', alignItems: 'center', justifyContent: 'center', height: 500 }}>
          {/* SVG concentric circles */}
          <svg width="360" height="360" viewBox="0 0 360 360" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
            <circle cx="180" cy="180" r="168" fill="var(--sage-bg)" opacity="0.45" />
            <circle cx="180" cy="180" r="126" fill="var(--sage-bg)" opacity="0.55" />
            <circle cx="180" cy="180" r="86"  fill="var(--sage-bg)" opacity="0.7" />
            <circle cx="180" cy="180" r="60"  fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
            <text x="180" y="165" textAnchor="middle" fontFamily="var(--font-display,Georgia,serif)" fontSize="13" fontWeight="600" fill="var(--ink)" letterSpacing="-0.3">Classical</text>
            <text x="180" y="183" textAnchor="middle" fontFamily="var(--font-display,Georgia,serif)" fontSize="15" fontWeight="700" fill="var(--ink)" letterSpacing="-0.5">Homoeopathy</text>
            <text x="180" y="200" textAnchor="middle" fontFamily="var(--font-display,Georgia,serif)" fontSize="10" fontStyle="italic" fill="var(--sage)">Hope lives here.</text>
            <text x="180" y="216" textAnchor="middle" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="var(--ink4)" letterSpacing="2.5">DR. SHADAB · MD</text>
          </svg>

          {/* Floating category chips */}
          {ORBITAL_CHIPS.map((c, i) => (
            <div key={i} style={{
              position: 'absolute', ...c.style,
              padding: '9px 16px', background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 99, fontSize: 13, fontWeight: 600,
              boxShadow: '0 6px 20px rgba(38,74,48,.08)', color: 'var(--ink)',
              animation: `${i % 2 === 0 ? 'floatA' : 'floatB'} ${3.2 + i * 0.35}s ease-in-out infinite`,
              whiteSpace: 'nowrap' as const,
            }}>
              {c.t}
            </div>
          ))}
        </div>
      </div>

      {/* Trust strip */}
      <div style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', padding: '22px clamp(16px,4vw,48px)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 900, width: '100%', margin: '0 auto', gap: 0 }} className="hero-stats">
          {([
            ['⚕️', 'Doctor reviewed',   'Dr. Shadab Khan, MD Homoeopath'],
            ['📚', 'Evidence-based',     'Boericke, Allen & 15+ yrs clinical'],
            ['🇮🇳', 'Hinglish first',   'Aapki bhasha mein, simple'],
            ['▶',  'Video explainers',  'Har condition ka video guide'],
          ] as const).map(([ic, title, sub], i, arr) => (
            <div key={title} style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: 12, padding: '14px clamp(12px,2vw,28px)', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <span style={{ fontSize: 24, flexShrink: 0, lineHeight: 1 }}>{ic}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2 }}>{title}</div>
                <div style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 2, lineHeight: 1.35 }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
