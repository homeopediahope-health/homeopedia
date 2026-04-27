'use client'
import { useState } from 'react'
import { WA_BASE, WA_CONSULT } from '@/lib/constants'
import Link from 'next/link'
import SL from '@/components/SL'

const ALL_DISEASES = [
  { slug: 'psoriasis',   title: 'Psoriasis',          hindi: 'चम्बल (सोरायसिस)', cat: 'Skin',        min: 12, hot: true },
  { slug: 'eczema',      title: 'Eczema',              hindi: 'एक्जिमा',           cat: 'Skin',        min: 5 },
  { slug: 'vitiligo',    title: 'Vitiligo',            hindi: 'सफेद दाग',          cat: 'Skin',        min: 6 },
  { slug: 'acne',        title: 'Acne',                hindi: 'मुहांसे',           cat: 'Skin',        min: 4 },
  { slug: 'urticaria',   title: 'Urticaria',           hindi: 'पित्ती',            cat: 'Skin',        min: 4 },
  { slug: 'lichen',      title: 'Lichen Planus',       hindi: 'लाइकेन',           cat: 'Skin',        min: 9 },
  { slug: 'sciatica',    title: 'Sciatica',            hindi: 'सायटिका',          cat: 'Joints',      min: 5, hot: true },
  { slug: 'arthritis',   title: 'Arthritis',           hindi: 'गठिया',            cat: 'Joints',      min: 6 },
  { slug: 'disc-bulge',  title: 'Disc Bulge',          hindi: 'डिस्क खिसकना',     cat: 'Joints',      min: 7 },
  { slug: 'backpain',    title: 'Back Pain',           hindi: 'कमर दर्द',         cat: 'Joints',      min: 5 },
  { slug: 'psoriatic-arthritis', title: 'Psoriatic Arthritis', hindi: 'चम्बल वाला गठिया', cat: 'Joints', min: 10 },
  { slug: 'rheumatoid-arthritis', title: 'Rheumatoid Arthritis', hindi: 'रूमेटाइड आर्थराइटिस', cat: 'Joints', min: 7, hot: true },
  { slug: 'gout',        title: 'Gout',                hindi: 'गाउट',             cat: 'Joints',      min: 5 },
  { slug: 'ibs',         title: 'IBS',                 hindi: 'आईबीएस',           cat: 'Digestive',   min: 6, hot: true },
  { slug: 'piles',       title: 'Piles',               hindi: 'बवासीर',           cat: 'Digestive',   min: 5 },
  { slug: 'acidity',     title: 'Acidity/GERD',        hindi: 'एसिडिटी',          cat: 'Digestive',   min: 4 },
  { slug: 'fissure',     title: 'Anal Fissure',        hindi: 'फिशर',             cat: 'Digestive',   min: 4 },
  { slug: 'migraine',    title: 'Migraine',            hindi: 'माइग्रेन',         cat: 'Mental',      min: 5, hot: true },
  { slug: 'anxiety',     title: 'Anxiety',             hindi: 'चिंता',            cat: 'Mental',      min: 5 },
  { slug: 'depression',  title: 'Depression',          hindi: 'अवसाद',            cat: 'Mental',      min: 6 },
  { slug: 'insomnia',    title: 'Insomnia',            hindi: 'अनिद्रा',          cat: 'Mental',      min: 4 },
  { slug: 'pcod',        title: 'PCOD/PCOS',           hindi: 'पीसीओडी',          cat: "Women's",     min: 8, hot: true },
  { slug: 'menstrual',   title: 'Irregular Periods',   hindi: 'अनियमित माहवारी',  cat: "Women's",     min: 5 },
  { slug: 'menopause',   title: 'Menopause',           hindi: 'रजोनिवृत्ति',      cat: "Women's",     min: 6 },
  { slug: 'leucorrhoea', title: 'Leucorrhoea',         hindi: 'श्वेत प्रदर',      cat: "Women's",     min: 4 },
  { slug: 'hairfall',    title: 'Hair Fall',           hindi: 'बाल झड़ना',        cat: 'Hair',        min: 8 },
  { slug: 'alopecia',    title: 'Alopecia Areata',     hindi: 'गंजापन',           cat: 'Hair',        min: 6, hot: true },
  { slug: 'dandruff',    title: 'Dandruff',            hindi: 'रूसी',             cat: 'Hair',        min: 3 },
  { slug: 'asthma',      title: 'Asthma',              hindi: 'दमा',              cat: 'Respiratory', min: 6 },
  { slug: 'allergy',     title: 'Allergic Rhinitis',   hindi: 'एलर्जी',           cat: 'Respiratory', min: 4 },
  { slug: 'sinusitis',   title: 'Sinusitis',           hindi: 'साइनसाइटिस',       cat: 'Respiratory', min: 5 },
  { slug: 'thyroid',       title: 'Hypothyroidism',      hindi: 'थायरॉइड की कमी',    cat: 'Endocrine',   min: 10, hot: true },
  { slug: 'hyperthyroidism', title: 'Hyperthyroidism',  hindi: 'थायरॉइड का बढ़ना',  cat: 'Endocrine',   min: 9 },
  { slug: 'diabetes',    title: 'Diabetes',            hindi: 'मधुमेह',           cat: 'Endocrine',   min: 6 },
  { slug: 'obesity',     title: 'Obesity',             hindi: 'मोटापा',           cat: 'Endocrine',   min: 5 },
  { slug: 'kidney',      title: 'Kidney Stones',       hindi: 'पथरी',             cat: 'Urinary',     min: 5 },
  { slug: 'uti',         title: 'UTI',                 hindi: 'मूत्र संक्रमण',    cat: 'Urinary',     min: 4 },
]

const CATS = ['All', 'Skin', 'Joints', 'Digestive', 'Mental', "Women's", 'Hair', 'Respiratory', 'Endocrine', 'Urinary']

export default function DiseasesPage() {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const shown = ALL_DISEASES.filter(d =>
    (cat === 'All' || d.cat === cat) &&
    (q === '' || d.title.toLowerCase().includes(q.toLowerCase()) || d.hindi.includes(q))
  )

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '52px clamp(16px,4vw,32px) 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SL c="All Diseases" />
          <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'var(--ink)', marginBottom: 8, textAlign: 'center' }}>Disease Library</h1>
          <p style={{ textAlign: 'center', color: 'var(--ink4)', fontSize: 14, marginBottom: 28, fontWeight: 300 }}>{ALL_DISEASES.length} conditions · Doctor reviewed · Free to read</p>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search any disease..."
              style={{ width: '100%', padding: '14px 20px', background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 100, color: 'var(--ink)', fontSize: 14, boxShadow: 'var(--sh-sm)', outline: 'none', fontFamily: 'inherit' }}
              onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(184,145,42,.1)' }}
              onBlur={e => { e.target.style.borderColor = 'var(--border2)'; e.target.style.boxShadow = 'var(--sh-sm)' }}
            />
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '32px clamp(16px,4vw,32px) 80px' }}>
        {/* Category filter */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{ padding: '7px 16px', borderRadius: 100, fontSize: 13, cursor: 'pointer', border: `1px solid ${cat === c ? 'var(--gold)' : 'var(--border2)'}`, background: cat === c ? 'var(--gold-bg)' : 'var(--card)', color: cat === c ? 'var(--gold)' : 'var(--ink3)', fontWeight: cat === c ? 600 : 400, transition: 'all .2s' }}>{c}</button>
          ))}
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink4)', marginBottom: 20 }}>{shown.length} results</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 12 }}>
          {shown.map(d => (
            <Link key={d.slug} href={`/diseases/${d.slug}`} style={{ textDecoration: 'none' }}>
              <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '18px', cursor: 'pointer', position: 'relative', height: '100%' }}>
                {d.hot && <span style={{ position: 'absolute', top: 12, right: 12, fontSize: 9, padding: '2px 7px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.25)', fontWeight: 600, letterSpacing: 0.5 }}>POPULAR</span>}
                <div style={{ fontSize: 11, color: 'var(--ink4)', marginBottom: 8 }}>{d.cat} · {d.min} min</div>
                <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 17, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{d.title}</div>
                <div style={{ fontSize: 13, color: 'var(--gold-dk)', fontStyle: 'italic', fontFamily: 'var(--font-playfair,Georgia,serif)', marginBottom: 10 }}>{d.hindi}</div>
                <div style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600 }}>Read guide →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
