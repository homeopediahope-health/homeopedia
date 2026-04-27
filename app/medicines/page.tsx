'use client'
import { useState } from 'react'
import { WA_BASE, WA_CONSULT } from '@/lib/constants'
import SL from '@/components/SL'

const MEDS = [
  { name: 'Arsenicum Album',    abbr: 'Ars.',     sys: 'Skin · Digestive · Respiratory', desc: 'Burning pain relieved by warmth, restlessness, anxiety. Thirst for small sips. Worse at night and cold.' },
  { name: 'Sulphur',            abbr: 'Sulph.',   sys: 'Skin',                           desc: 'Intense itching worse from heat and at night. Red, burning skin. Warm-blooded, untidy patient.' },
  { name: 'Graphites',          abbr: 'Graph.',   sys: 'Skin · Digestive',               desc: 'Thick, honey-like discharge from cracks. Rough skin. Worse in cold. Constipation, obesity tendency.' },
  { name: 'Sepia',              abbr: 'Sep.',     sys: "Women's · Skin",                 desc: 'Hormonal imbalance — PCOD, menopause, irregular periods. Dragging sensation. Emotionally detached.' },
  { name: 'Lycopodium',         abbr: 'Lyco.',    sys: 'Digestive · Hair',               desc: 'Bloating after eating. Hair fall at temples. Lacks confidence. Worse 4-8 PM. Craves sweets.' },
  { name: 'Nux Vomica',         abbr: 'Nux V.',   sys: 'Digestive · Mental',             desc: 'Workaholic, stressed, irritable. Acidity, constipation. Worse in morning. Craves stimulants.' },
  { name: 'Calcarea Carbonica', abbr: 'Calc.',    sys: 'Endocrine · Joints',             desc: 'Thyroid, slow metabolism, cold sweaty patient. Joint pain. Craves eggs, sweets.' },
  { name: 'Rhus Toxicodendron', abbr: 'Rhus T.', sys: 'Joints',                         desc: 'Joint pain better with continued motion. Worse cold damp weather. Sciatica. Restlessness at night.' },
  { name: 'Bryonia',            abbr: 'Bry.',     sys: 'Joints · Respiratory',           desc: 'All pains worse from any motion. Great thirst. Dryness. Irritable when disturbed.' },
  { name: 'Pulsatilla',         abbr: 'Puls.',    sys: "Women's · Respiratory",          desc: 'Shifting symptoms. Mild, weepy. Hormonal issues. Worse in warm rooms. Craves open air.' },
  { name: 'Ignatia',            abbr: 'Ign.',     sys: 'Mental',                         desc: 'Grief, loss, emotional shock. Contradictory symptoms. Lump in throat. Ideal for depression.' },
  { name: 'Phosphorus',         abbr: 'Phos.',    sys: 'Respiratory · Mental',           desc: 'Health anxiety, bleeding tendency, tall-thin sensitive patient. Craves cold drinks.' },
  { name: 'Natrum Muriaticum',  abbr: 'Nat M.',   sys: 'Mental · Skin',                  desc: 'Grief suppressed. Cannot cry in front of others. Headaches, eczema, herpes. Craves salt.' },
  { name: 'Thuja',              abbr: 'Thuja',    sys: 'Skin',                           desc: 'Warts, polyps, ill effects of vaccination. Oily skin. Fixed ideas. Ailments from bad habits.' },
  { name: 'Silicea',            abbr: 'Sil.',     sys: 'Skin · Digestive',               desc: 'Lack of vitality, shy patient. Chronic suppurations. Weak nails, sweaty feet. Slow healing.' },
]

export default function MedicinesPage() {
  const [sel, setSel] = useState<string | null>(null)
  const sysSets = [...new Set(MEDS.flatMap(m => m.sys.split(' · ')))]
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? MEDS : MEDS.filter(m => m.sys.includes(filter))

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '52px clamp(16px,4vw,32px) 40px', textAlign: 'center' }}>
        <SL c="Homeopathic Medicines" />
        <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Medicine Library</h1>
        <p style={{ color: 'var(--ink4)', fontSize: 14, fontWeight: 300 }}>Common homeopathic remedies — sirf educational purpose ke liye</p>
        <div style={{ padding: '12px 20px', background: 'rgba(184,145,42,.07)', borderRadius: 9, border: '1px solid rgba(184,145,42,.2)', maxWidth: 520, margin: '20px auto 0', fontSize: 13, color: 'var(--gold-dk)' }}>
          ⚠️ Doctor se consultation ke bina koi medicine mat lo. Ye sirf awareness ke liye hai.
        </div>
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '32px clamp(16px,4vw,32px) 80px' }}>
        {/* System filter */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          <button onClick={() => setFilter('All')} style={{ padding: '7px 16px', borderRadius: 100, fontSize: 13, cursor: 'pointer', border: `1px solid ${filter === 'All' ? 'var(--gold)' : 'var(--border2)'}`, background: filter === 'All' ? 'var(--gold-bg)' : 'var(--card)', color: filter === 'All' ? 'var(--gold)' : 'var(--ink3)', fontWeight: filter === 'All' ? 600 : 400 }}>All</button>
          {sysSets.map(s => (
            <button key={s} onClick={() => setFilter(s)} style={{ padding: '7px 16px', borderRadius: 100, fontSize: 13, cursor: 'pointer', border: `1px solid ${filter === s ? 'var(--gold)' : 'var(--border2)'}`, background: filter === s ? 'var(--gold-bg)' : 'var(--card)', color: filter === s ? 'var(--gold)' : 'var(--ink3)', fontWeight: filter === s ? 600 : 400 }}>{s}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
          {shown.map(m => (
            <div key={m.name} className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '24px', cursor: 'pointer' }} onClick={() => setSel(sel === m.name ? null : m.name)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 19, fontWeight: 700, color: 'var(--ink)' }}>{m.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--gold-dk)', marginTop: 3, fontStyle: 'italic' }}>{m.abbr}</div>
                </div>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--gold-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontSize: 16, fontWeight: 700, flexShrink: 0 }}>{sel === m.name ? '−' : '+'}</div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
                {m.sys.split(' · ').map(s => (
                  <span key={s} style={{ fontSize: 10, padding: '3px 8px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.2)' }}>{s}</span>
                ))}
              </div>
              {sel === m.name
                ? <div style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.8, borderTop: '1px solid var(--border)', paddingTop: 14, fontWeight: 300 }}>{m.desc}</div>
                : <div style={{ fontSize: 13, color: 'var(--ink4)', lineHeight: 1.6, fontWeight: 300 }}>{m.desc.slice(0, 80)}...</div>
              }
            </div>
          ))}
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
