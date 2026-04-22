'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const ALL_DISEASES = [
  { slug: 'psoriasis', title: 'Psoriasis', hindi: 'सोरायसिस' },
  { slug: 'eczema', title: 'Eczema', hindi: 'एक्जिमा' },
  { slug: 'vitiligo', title: 'Vitiligo', hindi: 'सफेद दाग' },
  { slug: 'acne', title: 'Acne', hindi: 'मुहांसे' },
  { slug: 'urticaria', title: 'Urticaria', hindi: 'पित्ती' },
  { slug: 'lichen', title: 'Lichen Planus', hindi: 'लाइकेन' },
  { slug: 'sciatica', title: 'Sciatica', hindi: 'सायटिका' },
  { slug: 'arthritis', title: 'Arthritis', hindi: 'गठिया' },
  { slug: 'backpain', title: 'Back Pain', hindi: 'कमर दर्द' },
  { slug: 'gout', title: 'Gout', hindi: 'गाउट' },
  { slug: 'ibs', title: 'IBS', hindi: 'आईबीएस' },
  { slug: 'piles', title: 'Piles', hindi: 'बवासीर' },
  { slug: 'acidity', title: 'Acidity/GERD', hindi: 'एसिडिटी' },
  { slug: 'fissure', title: 'Anal Fissure', hindi: 'फिशर' },
  { slug: 'migraine', title: 'Migraine', hindi: 'माइग्रेन' },
  { slug: 'anxiety', title: 'Anxiety', hindi: 'चिंता' },
  { slug: 'depression', title: 'Depression', hindi: 'अवसाद' },
  { slug: 'insomnia', title: 'Insomnia', hindi: 'अनिद्रा' },
  { slug: 'pcod', title: 'PCOD/PCOS', hindi: 'पीसीओडी' },
  { slug: 'menstrual', title: 'Irregular Periods', hindi: 'अनियमित माहवारी' },
  { slug: 'menopause', title: 'Menopause', hindi: 'रजोनिवृत्ति' },
  { slug: 'leucorrhoea', title: 'Leucorrhoea', hindi: 'श्वेत प्रदर' },
  { slug: 'hairfall', title: 'Hair Fall', hindi: 'बाल झड़ना' },
  { slug: 'alopecia', title: 'Alopecia Areata', hindi: 'गंजापन' },
  { slug: 'dandruff', title: 'Dandruff', hindi: 'रूसी' },
  { slug: 'asthma', title: 'Asthma', hindi: 'दमा' },
  { slug: 'allergy', title: 'Allergic Rhinitis', hindi: 'एलर्जी' },
  { slug: 'sinusitis', title: 'Sinusitis', hindi: 'साइनसाइटिस' },
  { slug: 'thyroid', title: 'Thyroid', hindi: 'थायरॉइड' },
  { slug: 'diabetes', title: 'Diabetes', hindi: 'मधुमेह' },
  { slug: 'obesity', title: 'Obesity', hindi: 'मोटापा' },
  { slug: 'kidney', title: 'Kidney Stones', hindi: 'पथरी' },
  { slug: 'uti', title: 'UTI', hindi: 'मूत्र संक्रमण' },
]

const popular = ['Psoriasis', 'Sciatica', 'Thyroid', 'PCOD', 'Migraine', 'Arthritis']

export default function HeroSearch() {
  const [q, setQ] = useState('')
  const router = useRouter()
  const sugg = q.length > 1
    ? ALL_DISEASES.filter(d =>
        d.title.toLowerCase().includes(q.toLowerCase()) || d.hindi.includes(q)
      ).slice(0, 6)
    : []

  function goDisease(slug: string) {
    setQ('')
    router.push(`/diseases/${slug}`)
  }

  return (
    <div>
      {/* Search bar */}
      <div style={{ position: 'relative', maxWidth: 540, margin: '0 auto 28px' }}>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search disease — Psoriasis, Thyroid, PCOD..."
          style={{ width: '100%', padding: '17px 130px 17px 22px', background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 100, color: 'var(--ink)', fontSize: 15, boxShadow: 'var(--sh)', outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', fontFamily: 'inherit' }}
          onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 4px rgba(184,145,42,0.1)' }}
          onBlur={e => { setTimeout(() => setQ(prev => prev), 200); e.target.style.borderColor = 'var(--border2)'; e.target.style.boxShadow = 'var(--sh)' }}
        />
        <button
          onClick={() => { if (sugg.length > 0) goDisease(sugg[0].slug) }}
          style={{ position: 'absolute', right: 6, top: 6, bottom: 6, background: 'linear-gradient(135deg,var(--gold-dk),var(--gold-lt))', border: 'none', borderRadius: 100, padding: '0 22px', color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}
        >
          Search
        </button>
        {sugg.length > 0 && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--sh)', zIndex: 10 }}>
            {sugg.map(d => (
              <div
                key={d.slug}
                onMouseDown={() => goDisease(d.slug)}
                style={{ padding: '12px 20px', cursor: 'pointer', fontSize: 14, color: 'var(--ink2)', borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-bg)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <span style={{ fontWeight: 500 }}>{d.title}</span>{' '}
                <span style={{ color: 'var(--ink4)', fontSize: 12 }}>— {d.hindi}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Popular chips */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontSize: 12, color: 'var(--ink4)', alignSelf: 'center' }}>Popular:</span>
        {popular.map(d => (
          <span
            key={d}
            onClick={() => router.push(`/diseases/${d.toLowerCase()}`)}
            style={{ padding: '5px 14px', borderRadius: 100, fontSize: 12, cursor: 'pointer', border: '1px solid var(--border2)', color: 'var(--ink3)', background: 'var(--card)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'var(--gold-bg)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--ink3)'; e.currentTarget.style.background = 'var(--card)' }}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  )
}
