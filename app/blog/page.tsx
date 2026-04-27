import { WA_BASE, WA_CONSULT } from '@/lib/constants'
'use client'
import { useState } from 'react'
import SL from '@/components/SL'

const BLOGS = [
  {
    slug: 'psoriasis-diet-guide',
    title: 'Psoriasis Mein Kya Khayein Kya Nahi — Complete Diet Guide',
    summary: 'Skin ki healing diet se shuru hoti hai. Gluten, dairy, alcohol — ye teen cheezein psoriasis ke biggest triggers hain. Dr. Shadab ne complete plan banaya hai.',
    date: '18 Apr 2026', author: 'Dr. Shadab Khan', readMin: 6,
    cats: ['Skin', 'psoriasis', 'Diet'],
    cover: 'https://img.youtube.com/vi/GmrfET0qxuo/mqdefault.jpg',
  },
  {
    slug: 'homeopathy-vs-steroids-psoriasis',
    title: 'Psoriasis Mein Steroids Kyu Nahi — Homeopathy Ka Sach',
    summary: 'Steroid creams temporary relief deti hain lekin long-term mein skin thin karti hain aur psoriasis rebound mein aur zyada aata hai. Homeopathy ki approach samjho.',
    date: '10 Apr 2026', author: 'Dr. Shadab Khan', readMin: 5,
    cats: ['Skin', 'psoriasis', 'Homeopathy'],
    cover: 'https://img.youtube.com/vi/Coq2SiVWtsI/mqdefault.jpg',
  },
  {
    slug: 'pcod-diet-lifestyle',
    title: 'PCOD Ko Naturally Control Karo — Diet aur Lifestyle Tips',
    summary: 'PCOD sirf ovaries ka problem nahi — ye ek metabolic condition hai. Sahi khana, sahi exercise, aur homeopathy se hormones naturally balance ho sakte hain.',
    date: '5 Apr 2026', author: 'Dr. Shadab Khan', readMin: 7,
    cats: ["Women's", 'pcod', 'Diet', 'Hormones'],
    cover: 'https://img.youtube.com/vi/DUGyLQhEsxw/mqdefault.jpg',
  },
  {
    slug: 'thyroid-homeopathy',
    title: 'Thyroid Aur Homeopathy — Kya Sach Mein Kaam Karta Hai?',
    summary: 'Hypothyroid ya hyperthyroid — homeopathy dono conditions mein kaise kaam karta hai? CCRH studies aur clinical experience ke basis pe Dr. Shadab explain karte hain.',
    date: '28 Mar 2026', author: 'Dr. Shadab Khan', readMin: 6,
    cats: ['Endocrine', 'thyroid', 'Homeopathy'],
    cover: 'https://img.youtube.com/vi/NKHq9F0bVSs/mqdefault.jpg',
  },
  {
    slug: 'sciatica-exercise-homeopathy',
    title: 'Sciatica Ka Dard — Exercise, Diet Aur Homeopathy Ka Role',
    summary: 'Sciatica mein nerve pe pressure hota hai — sirf painkillers se kaam nahi chalega. Dr. Shadab ne safest exercises aur homeopathic approach explain kiya hai.',
    date: '20 Mar 2026', author: 'Dr. Shadab Khan', readMin: 5,
    cats: ['Joints', 'sciatica', 'Exercise'],
    cover: 'https://img.youtube.com/vi/44gt-Fu1XdU/mqdefault.jpg',
  },
  {
    slug: 'stress-skin-connection',
    title: 'Stress Aur Skin Ka Connection — Psychodermatology',
    summary: 'Psoriasis, eczema, acne — in sab mein stress ek major trigger hai. Brain-skin axis kaise kaam karta hai aur homeopathy is connection pe kaise treat karta hai.',
    date: '12 Mar 2026', author: 'Dr. Shadab Khan', readMin: 5,
    cats: ['Skin', 'Mental', 'psoriasis', 'eczema'],
    cover: 'https://img.youtube.com/vi/c29pSyE5apE/mqdefault.jpg',
  },
]

const VIDEOS = [
  { id: '44gt-Fu1XdU', title: 'IBS mein Normal Reports? Brain-Gut Connection', date: '17 Apr 2026', topic: 'Digestive' },
  { id: 'c29pSyE5apE', title: 'Skin Problem Se Asthma — Atopic March Kya Hai', date: '10 Apr 2026', topic: 'Skin' },
  { id: 'NKHq9F0bVSs', title: 'Glutathione Kab Kaam Karta Hai? Liver Secret', date: '3 Apr 2026', topic: 'General' },
  { id: 'DUGyLQhEsxw', title: 'PCOD, Belly Fat, Kala Daag — Insulin Resistance', date: '27 Mar 2026', topic: "Women's" },
  { id: 'sJ9rrU7Xuoc', title: 'Periods Se Pehle Pimples Kyu? Hormonal Acne', date: '20 Mar 2026', topic: 'Skin' },
  { id: 'Coq2SiVWtsI', title: 'Psoriasis Treatment — PCM Protocol Explained', date: '13 Mar 2026', topic: 'Skin' },
]

export default function BlogPage() {
  const [tab, setTab] = useState<'blogs' | 'videos'>('blogs')
  const blogCats = [...new Set(BLOGS.flatMap(b => b.cats))]
  const topics = [...new Set(VIDEOS.map(v => v.topic))]
  const [bCat, setBCat] = useState('All')
  const [vFilter, setVFilter] = useState('All')
  const shownBlogs = bCat === 'All' ? BLOGS : BLOGS.filter(b => b.cats.includes(bCat))
  const shownVideos = vFilter === 'All' ? VIDEOS : VIDEOS.filter(v => v.topic === vFilter)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }} className="page-in">

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: 'clamp(72px,10vw,110px) clamp(16px,4vw,32px) 0', textAlign: 'center' }}>
        <SL c="Videos & Blog" />
        <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Knowledge Hub</h1>
        <p style={{ color: 'var(--ink4)', fontSize: 14, fontWeight: 300, marginBottom: 24 }}>Dr. Shadab Khan ke articles aur videos — simple language mein</p>
        {/* Tab switcher */}
        <div style={{ display: 'inline-flex', gap: 0, background: 'var(--bg2)', borderRadius: 100, padding: 4, border: '1px solid var(--border)', marginBottom: 0 }}>
          {([['blogs', '📝 Articles'], ['videos', '▶ Videos']] as const).map(([t, l]) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '8px 22px', borderRadius: 100, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, background: tab === t ? 'var(--card)' : 'transparent', color: tab === t ? 'var(--ink)' : 'var(--ink4)', boxShadow: tab === t ? 'var(--sh-sm)' : 'none', transition: 'all .2s' }}>{l}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '40px clamp(16px,4vw,32px) 80px' }}>

        {/* ARTICLES TAB */}
        {tab === 'blogs' && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(135deg,rgba(184,145,42,.1),rgba(184,145,42,.03))', border: '1px solid rgba(184,145,42,.25)', borderRadius: 16, padding: '22px 28px', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>Dr. Shadab Ke Blogs</div>
                <div style={{ fontSize: 13, color: 'var(--ink3)', fontWeight: 300 }}>Diet, Homeopathy, Lifestyle — {BLOGS.length} articles published</div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink4)' }}>Naye blogs regularly add hote hain</div>
            </div>
            {/* Category filter */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
              {['All', ...blogCats.slice(0, 8)].map(c => (
                <button key={c} onClick={() => setBCat(c)} style={{ padding: '6px 14px', borderRadius: 100, fontSize: 12, cursor: 'pointer', border: `1px solid ${bCat === c ? 'var(--gold)' : 'var(--border2)'}`, background: bCat === c ? 'var(--gold-bg)' : 'var(--card)', color: bCat === c ? 'var(--gold)' : 'var(--ink3)', fontWeight: bCat === c ? 600 : 400 }}>{c}</button>
              ))}
            </div>
            {/* Blog grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 20 }}>
              {shownBlogs.map(b => (
                <div key={b.slug} className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', cursor: 'pointer' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.cover} alt={b.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
                  <div style={{ padding: '18px 20px' }}>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
                      {b.cats.filter((_, i) => i < 2).map(c => (
                        <span key={c} style={{ fontSize: 10, padding: '2px 8px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.2)', fontWeight: 600 }}>{c}</span>
                      ))}
                      <span style={{ fontSize: 10, color: 'var(--ink4)' }}>📖 {b.readMin} min</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4, marginBottom: 8 }}>{b.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.65, marginBottom: 12, fontWeight: 300, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{b.summary}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 11, color: 'var(--ink4)' }}>{b.author} · {b.date}</span>
                      <span style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600 }}>Read →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* VIDEOS TAB */}
        {tab === 'videos' && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(135deg,rgba(184,145,42,.1),rgba(184,145,42,.03))', border: '1px solid rgba(184,145,42,.25)', borderRadius: 16, padding: '22px 28px', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>Subscribe for New Videos Every Week</div>
                <div style={{ fontSize: 13, color: 'var(--ink3)', fontWeight: 300 }}>Psoriasis · PCOD · Thyroid · Gut Health aur bahut kuch</div>
              </div>
              <a href="https://www.youtube.com/@drshadabshomoeopathy" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 22px', background: '#ff0000', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 13, fontWeight: 600, flexShrink: 0 }}>▶ Subscribe on YouTube</a>
            </div>
            {/* Topic filter */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
              {['All', ...topics].map(t => (
                <button key={t} onClick={() => setVFilter(t)} style={{ padding: '6px 14px', borderRadius: 100, fontSize: 12, cursor: 'pointer', border: `1px solid ${vFilter === t ? 'var(--gold)' : 'var(--border2)'}`, background: vFilter === t ? 'var(--gold-bg)' : 'var(--card)', color: vFilter === t ? 'var(--gold)' : 'var(--ink3)', fontWeight: vFilter === t ? 600 : 400 }}>{t}</button>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 18 }}>
              {shownVideos.map(v => (
                <a key={v.id} href={`https://youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
                    <div style={{ position: 'relative' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,21,16,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 14px rgba(0,0,0,.2)' }}>
                          <span style={{ color: 'var(--gold-dk)', fontSize: 18, marginLeft: 3 }}>▶</span>
                        </div>
                      </div>
                      <div style={{ position: 'absolute', top: 10, right: 10, background: 'var(--gold-bg2)', borderRadius: 100, padding: '3px 10px', fontSize: 10, color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.3)', fontWeight: 600 }}>{v.topic}</div>
                    </div>
                    <div style={{ padding: '16px' }}>
                      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.55, marginBottom: 8 }}>{v.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--ink4)' }}>{v.date}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲</a>
    </div>
  )
}
