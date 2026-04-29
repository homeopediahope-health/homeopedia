'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const ALL_DISEASES = [
  { slug: 'psoriasis',                  title: 'Psoriasis',               hindi: 'सोरायसिस',              hinglish: 'chanbmal chambal' },
  { slug: 'eczema',                     title: 'Eczema',                  hindi: 'एक्जिमा',               hinglish: 'khujli rash' },
  { slug: 'vitiligo',                   title: 'Vitiligo',                hindi: 'सफेद दाग',              hinglish: 'safed daag' },
  { slug: 'acne',                       title: 'Acne',                    hindi: 'मुहांसे',               hinglish: 'muhanse pimple' },
  { slug: 'urticaria',                  title: 'Urticaria',               hindi: 'पित्ती',                hinglish: 'pitti' },
  { slug: 'lichen',                     title: 'Lichen Planus',           hindi: 'लाइकेन',               hinglish: 'laichen' },
  { slug: 'acanthosis-nigricans',       title: 'Acanthosis Nigricans',    hindi: 'काली गठीली त्वचा',     hinglish: 'kaali gathili skin gardan kaali kala pan insulin resistance' },
  { slug: 'sciatica',                   title: 'Sciatica',                hindi: 'सायटिका',              hinglish: 'kamar pair dard' },
  { slug: 'disc-bulge',                 title: 'Disc Bulge',              hindi: 'डिस्क खिसकना',         hinglish: 'disc slip' },
  { slug: 'back-pain',                  title: 'Back Pain',               hindi: 'कमर दर्द',             hinglish: 'kamar dard' },
  { slug: 'arthritis',                   title: 'Arthritis',               hindi: 'गठिया / वात रोग',      hinglish: 'gathiya jodon ka dard vaat' },
  { slug: 'psoriatic-arthritis',        title: 'Psoriatic Arthritis',     hindi: 'चम्बल वाला गठिया',     hinglish: 'chambal gathiya' },
  { slug: 'rheumatoid-arthritis',       title: 'Rheumatoid Arthritis',    hindi: 'रूमेटाइड आर्थराइटिस', hinglish: 'gathiya RA' },
  { slug: 'gout',                       title: 'Gout',                    hindi: 'गाउट',                 hinglish: 'gathiya uric acid' },
  { slug: 'cervical-spondylosis',       title: 'Cervical Spondylosis',    hindi: 'सर्वाइकल',             hinglish: 'gardan dard cervical' },
  { slug: 'ankylosing-spondylitis',     title: 'Ankylosing Spondylitis',  hindi: 'रीढ़ की सूजन',         hinglish: 'ridh dard' },
  { slug: 'frozen-shoulder',            title: 'Frozen Shoulder',         hindi: 'जमा हुआ कंधा',        hinglish: 'kandha dard' },
  { slug: 'plantar-fasciitis',          title: 'Plantar Fasciitis',       hindi: 'एड़ी का दर्द',          hinglish: 'edi ka dard paon tale heel pain plantar' },
  { slug: 'acidity',                     title: 'Acidity / GERD',          hindi: 'तेज़ाब / सीने की जलन',  hinglish: 'seene ki jalan khatta dakaar tezaab acid reflux gerd' },
  { slug: 'ibs',                        title: 'IBS',                     hindi: 'आईबीएस',               hinglish: 'pet dard loose motion' },
  { slug: 'piles',                      title: 'Piles',                   hindi: 'बवासीर',               hinglish: 'bavasir hemorrhoids' },
  { slug: 'fissure',                    title: 'Anal Fissure',            hindi: 'फिशर',                 hinglish: 'fishure' },
  { slug: 'ulcerative-colitis',         title: 'Ulcerative Colitis',      hindi: 'अल्सरेटिव कोलाइटिस',  hinglish: 'colitis' },
  { slug: 'fatty-liver',               title: 'Fatty Liver / NAFLD',     hindi: 'जिगर में चर्बी',        hinglish: 'fatty liver jigar charbi NAFLD SGPT grade 1 2' },
  { slug: 'migraine',                   title: 'Migraine',                hindi: 'माइग्रेन',             hinglish: 'sar dard headache' },
  { slug: 'anxiety',                    title: 'Anxiety',                 hindi: 'चिंता',                hinglish: 'chinta tension' },
  { slug: 'depression',                 title: 'Depression',              hindi: 'अवसाद',                hinglish: 'udaasi' },
  { slug: 'insomnia',                   title: 'Insomnia',                hindi: 'अनिद्रा',              hinglish: 'neend nahi aati' },
  { slug: 'obsessive-compulsive-disorder', title: 'OCD',                  hindi: 'ओसीडी',               hinglish: 'obsessive' },
  { slug: 'pcod',                       title: 'PCOD/PCOS',               hindi: 'पीसीओडी',              hinglish: 'periods irregular' },
  { slug: 'leucorrhoea',                title: 'Leucorrhoea',             hindi: 'श्वेत प्रदर',          hinglish: 'safed pani' },
  { slug: 'endometriosis',              title: 'Endometriosis',           hindi: 'एंडोमेट्रियोसिस',      hinglish: 'periods dard' },
  { slug: 'hairfall',                   title: 'Hair Fall',               hindi: 'बाल झड़ना',            hinglish: 'baal jhadna' },
  { slug: 'alopecia',                   title: 'Alopecia Areata',         hindi: 'गंजापन',               hinglish: 'ganjapan baal' },
  { slug: 'dandruff',                   title: 'Dandruff',                hindi: 'रूसी',                 hinglish: 'rusi' },
  { slug: 'asthma',                     title: 'Asthma',                  hindi: 'दमा',                  hinglish: 'dama saans' },
  { slug: 'allergy',                    title: 'Allergic Rhinitis',       hindi: 'एलर्जी',               hinglish: 'naak allergy' },
  { slug: 'sinusitis',                  title: 'Sinusitis',               hindi: 'साइनसाइटिस',           hinglish: 'sinus naak band' },
  { slug: 'thyroid',                    title: 'Hypothyroidism',          hindi: 'थायरॉइड की कमी',       hinglish: 'thyroid' },
  { slug: 'hyperthyroidism',            title: 'Hyperthyroidism',         hindi: 'थायरॉइड का बढ़ना',     hinglish: 'thyroid badhna' },
  { slug: 'hashimoto-thyroiditis',      title: 'Hashimoto Thyroiditis',   hindi: 'हाशिमोटो थायरॉइड',    hinglish: 'hashimoto' },
  { slug: 'sjogrens-syndrome',          title: "Sjogren's Syndrome",      hindi: 'स्जोग्रेन',            hinglish: 'dry eyes mouth' },
  { slug: 'autism',                      title: 'Autism (ASD)',            hindi: 'ऑटिज्म',              hinglish: 'autism asd bachcha bolna nahi speech delay' },
  { slug: 'adenoids',                   title: 'Adenoids',                hindi: 'नाक की गांठ',         hinglish: 'naak ki gaanthi' },
  { slug: 'tonsillitis',                title: 'Tonsillitis',             hindi: 'टॉन्सिल की सूजन',     hinglish: 'tonsil gala dard' },
  { slug: 'bedwetting',                 title: 'Bedwetting',              hindi: 'बिस्तर गीला करना',    hinglish: 'bistar geela' },
  { slug: 'varicose-veins',            title: 'Varicose Veins',          hindi: 'नसों की सूजन',         hinglish: 'naso ki sujan phuli hui naasein paon dard vein' },
]

const popular = ['Psoriasis', 'Sciatica', 'Thyroid', 'PCOD', 'Migraine', 'Tonsillitis']

export default function HeroSearch() {
  const [q, setQ] = useState('')
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

  return (
    <div>
      {/* Search bar */}
      <div style={{ position: 'relative', maxWidth: 540, margin: '0 auto 28px' }}>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && sugg.length > 0) goDisease(sugg[0].slug) }}
          placeholder="Search disease — Psoriasis, Kandha, Tonsil..."
          style={{ width: '100%', padding: '17px 130px 17px 22px', background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 100, color: 'var(--ink)', fontSize: 15, boxShadow: 'var(--sh)', outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', fontFamily: 'inherit' }}
          onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 4px rgba(184,145,42,0.1)' }}
          onBlur={e => { setTimeout(() => setQ(''), 200); e.target.style.borderColor = 'var(--border2)'; e.target.style.boxShadow = 'var(--sh)' }}
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
            onClick={() => {
              const found = ALL_DISEASES.find(x => x.title.toLowerCase().startsWith(d.toLowerCase()))
              if (found) router.push(`/diseases/${found.slug}`)
            }}
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
