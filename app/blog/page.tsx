'use client'

import { useState } from 'react'
import YouTubeSection from '@/components/YouTubeSection'

const articles = [
  {
    slug: 'psoriasis-diet-guide',
    title: 'Psoriasis Mein Kya Khayein — Complete Indian Diet Guide',
    summary: 'Psoriasis patients ke liye Indian foods ka complete guide. Kya khana chahiye, kya avoid karna chahiye, aur ek sample diet chart.',
    category: 'Skin',
    mins: 8,
    date: '2024-12-01',
    thumb: 'https://img.youtube.com/vi/44gt-Fu1XdU/mqdefault.jpg',
  },
  {
    slug: 'pcod-homeopathy',
    title: 'PCOD / PCOS ka Homeopathic Ilaaj — Complete Guide',
    summary: 'PCOD mein hormonal balance kaise kare homeopathy se. Medicines, diet, aur lifestyle tips sabke saath.',
    category: "Women's Health",
    mins: 10,
    date: '2024-11-20',
    thumb: 'https://img.youtube.com/vi/c29pSyE5apE/mqdefault.jpg',
  },
  {
    slug: 'thyroid-homeopathy',
    title: 'Thyroid aur Homeopathy — Hypothyroid & Hyperthyroid Dono ka Ilaaj',
    summary: 'Thyroid disorders mein homeopathy kaise kaam karti hai. CCRH research ke saath evidence-based guide.',
    category: 'Endocrine',
    mins: 9,
    date: '2024-11-10',
    thumb: 'https://img.youtube.com/vi/NKHq9F0bVSs/mqdefault.jpg',
  },
  {
    slug: 'sciatica-exercise-homeopathy',
    title: 'Sciatica — Kaun Se Exercise Karein, Kaunse Avoid Karein',
    summary: 'Sciatica ke dard mein kaunse yoga asanas aur exercises safe hain, aur homeopathic medicines se kaise relief milti hai.',
    category: 'Joints',
    mins: 7,
    date: '2024-10-28',
    thumb: 'https://img.youtube.com/vi/DUGyLQhEsxw/mqdefault.jpg',
  },
  {
    slug: 'stress-skin-connection',
    title: 'Stress aur Skin — Psychodermatology ka Homeopathic Angle',
    summary: 'Anxiety aur stress se skin diseases kaise barhti hain — psoriasis, eczema, urticaria — aur homeopathy mein mind-body treatment kaise hoti hai.',
    category: 'Mental Health',
    mins: 6,
    date: '2024-10-15',
    thumb: 'https://img.youtube.com/vi/sJ9rrU7Xuoc/mqdefault.jpg',
  },
  {
    slug: 'ibs-diet-guide',
    title: 'IBS Mein Kya Khayein — Indian Low-FODMAP Diet Guide',
    summary: 'Irritable Bowel Syndrome ke patients ke liye Indian context mein diet chart. Dal, roti, sabzi — kya safe hai aur kya nahi.',
    category: 'Digestive',
    mins: 8,
    date: '2024-10-05',
    thumb: 'https://img.youtube.com/vi/44gt-Fu1XdU/mqdefault.jpg',
  },
]

const ytVideos = [
  { id: '44gt-Fu1XdU', title: 'Psoriasis ka Homeopathic Ilaaj', published: '2024-12-01', thumbnail: 'https://img.youtube.com/vi/44gt-Fu1XdU/mqdefault.jpg', url: 'https://www.youtube.com/watch?v=44gt-Fu1XdU' },
  { id: 'c29pSyE5apE', title: 'PCOD Treatment in Homeopathy', published: '2024-11-20', thumbnail: 'https://img.youtube.com/vi/c29pSyE5apE/mqdefault.jpg', url: 'https://www.youtube.com/watch?v=c29pSyE5apE' },
  { id: 'NKHq9F0bVSs', title: 'Thyroid aur Homeopathy', published: '2024-11-10', thumbnail: 'https://img.youtube.com/vi/NKHq9F0bVSs/mqdefault.jpg', url: 'https://www.youtube.com/watch?v=NKHq9F0bVSs' },
  { id: 'DUGyLQhEsxw', title: 'Sciatica ka Desi Ilaaj', published: '2024-10-28', thumbnail: 'https://img.youtube.com/vi/DUGyLQhEsxw/mqdefault.jpg', url: 'https://www.youtube.com/watch?v=DUGyLQhEsxw' },
  { id: 'sJ9rrU7Xuoc', title: 'Anxiety aur Skin Problems', published: '2024-10-15', thumbnail: 'https://img.youtube.com/vi/sJ9rrU7Xuoc/mqdefault.jpg', url: 'https://www.youtube.com/watch?v=sJ9rrU7Xuoc' },
]

const catColor: Record<string, string> = {
  Skin: '#b04040', "Women's Health": '#9333ea', Endocrine: '#4338CA',
  Joints: '#2563EB', 'Mental Health': '#7C3AED', Digestive: '#059669',
}

export default function BlogPage() {
  const [tab, setTab] = useState<'articles' | 'videos'>('articles')

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(52px,8vw,80px) clamp(16px,4vw,32px) 40px', textAlign: 'center', background: 'linear-gradient(160deg, var(--bg) 0%, var(--bg2) 100%)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Articles & Videos</p>
          <h1 className="font-playfair" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--ink)', marginBottom: 14 }}>Homeopathy Blog</h1>
          <p style={{ fontSize: '1rem', color: 'var(--ink3)', lineHeight: 1.7 }}>Dr. Shadab ke articles aur videos — disease guides, diet charts, aur homeopathy science simple language mein.</p>
        </div>
      </section>

      {/* Tabs */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '24px clamp(16px,4vw,32px) 0' }}>
        <div style={{ display: 'inline-flex', background: 'var(--bg2)', borderRadius: 100, padding: 4, gap: 4 }}>
          {(['articles', 'videos'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '8px 22px', borderRadius: 100, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.88rem', transition: 'all 0.2s', background: tab === t ? 'var(--card)' : 'transparent', color: tab === t ? 'var(--ink)' : 'var(--ink4)', boxShadow: tab === t ? 'var(--sh-sm)' : 'none' }}>
              {t === 'articles' ? '📝 Articles' : '▶ Videos'}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <section style={{ padding: '32px clamp(16px,4vw,32px) clamp(60px,9vw,100px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          {tab === 'articles' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
              {articles.map(a => {
                const color = catColor[a.category] || 'var(--gold-dk)'
                return (
                  <div key={a.slug} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', boxShadow: 'var(--sh-sm)', transition: 'all 0.2s' }} className="hot-card">
                    <img src={a.thumb} alt={a.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: '18px 20px' }}>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
                        <span style={{ background: color + '18', color, padding: '2px 8px', borderRadius: 100, fontSize: '0.7rem', fontWeight: 600 }}>{a.category}</span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--ink4)' }}>📖 {a.mins} min</span>
                      </div>
                      <h3 className="font-playfair" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 8, lineHeight: 1.3 }}>{a.title}</h3>
                      <p style={{ fontSize: '0.82rem', color: 'var(--ink3)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: 12 }}>{a.summary}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--ink4)' }}>Dr. Shadab Khan • {new Date(a.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          {tab === 'videos' && <YouTubeSection videos={ytVideos} />}
        </div>
      </section>
    </div>
  )
}
