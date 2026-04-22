import { Metadata } from 'next'
import SL from '@/components/SL'

export const metadata: Metadata = {
  title: 'Contact Dr. Shadab Khan — Homeopathy Consultation',
  description: 'Dr. Shadab Khan MD Homoeopathy se consultation lein — WhatsApp, phone ya clinic visit. Akola, Maharashtra. Free first advice on WhatsApp.',
}

export default function ContactPage() {
  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '64px clamp(16px,4vw,32px) 52px', textAlign: 'center' }}>
        <SL c="Get in Touch" />
        <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, color: 'var(--ink)', margin: '14px 0 12px' }}>Dr. Shadab Khan se Baat Karein</h1>
        <p style={{ fontSize: 15, color: 'var(--ink3)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8, fontWeight: 300 }}>
          Koi bhi sawaal ho — disease ke baare mein, treatment ke baare mein, ya sirf samajhna ho ki homeopathy aapke liye sahi hai ya nahi — seedha poochhein.
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px clamp(16px,4vw,32px) 80px' }}>

        {/* Contact Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginBottom: 48 }}>
          {[
            {
              icon: '📲',
              label: 'WhatsApp',
              val: '+91 89834 58889',
              sub: 'Sabse fast response — message karein',
              href: 'https://wa.me/918983458889?text=Namaste%20Dr.%20Shadab%2C%20mujhe%20consultation%20chahiye.',
              bg: '#25d366',
              cta: 'WhatsApp Karein',
            },
            {
              icon: '📞',
              label: 'Phone Call',
              val: '+91 89834 58889',
              sub: 'Mon–Sat, 10am–7pm',
              href: 'tel:+918983458889',
              bg: 'var(--gold)',
              cta: 'Call Karein',
            },
            {
              icon: '🎥',
              label: 'YouTube',
              val: '@drshadabshomoeopathy',
              sub: '25+ free educational videos',
              href: 'https://www.youtube.com/@drshadabshomoeopathy',
              bg: '#ff0000',
              cta: 'Channel Dekhein',
            },
            {
              icon: '🌐',
              label: 'Personal Website',
              val: 'drshadabs.com',
              sub: 'Patient reviews, case studies',
              href: 'https://drshadabs.com',
              bg: 'var(--ink2)',
              cta: 'Visit karein',
            },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '24px 22px', textDecoration: 'none', transition: 'box-shadow .2s' }}
              className="hov">
              <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--gold-dk)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{c.val}</div>
              <div style={{ fontSize: 12, color: 'var(--ink4)', marginBottom: 16, fontWeight: 300 }}>{c.sub}</div>
              <span style={{ display: 'inline-block', padding: '8px 16px', background: c.bg, color: '#fff', borderRadius: 100, fontSize: 12, fontWeight: 600 }}>{c.cta} →</span>
            </a>
          ))}
        </div>

        {/* Clinic Info */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="grid-2">
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '28px' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--gold-dk)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Clinic Address</div>
            <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>Dr. Shadab's Homoeopathy Clinic</div>
            {[
              ['📍', 'Akola, Maharashtra, India'],
              ['🕐', 'Mon – Sat: 10:00 AM – 7:00 PM'],
              ['📵', 'Sunday: Appointment Only'],
              ['🩺', 'Online Consultation: Available'],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 14, color: 'var(--ink3)' }}>
                <span style={{ flexShrink: 0 }}>{icon}</span>
                <span style={{ fontWeight: 300 }}>{text}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(135deg,var(--gold-bg) 0%,var(--bg2) 100%)', border: '1px solid rgba(184,145,42,.25)', borderRadius: 14, padding: '28px' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--gold-dk)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Online Consultation</div>
            <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>Ghar Se Ilaj Karaein</div>
            <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>
              Aap India mein kaheen bhi hon — WhatsApp pe case share karein. Reports, photos, symptoms bhejein. Dr. Shadab personally review karte hain aur medicine courier se bhi milti hai.
            </p>
            <a href="https://wa.me/918983458889?text=Namaste%20Dr.%20Shadab%2C%20online%20consultation%20chahiye." target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
              📲 Start WhatsApp Consultation
            </a>
          </div>
        </div>

        {/* FAQ-style */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 24, fontWeight: 700, color: 'var(--ink)', marginBottom: 20 }}>Aksar Pooche Jaane Wale Sawaal</h2>
          {[
            { q: 'Kya online consultation mein sahi treatment milti hai?', a: 'Ji haan. Homeopathy mein patient ki poori history — symptoms, triggers, nature, past treatments — sab dekh ke medicine dete hain. Ye sab WhatsApp pe detail mein share ho sakta hai. 60%+ patients online consultation se hi treat hote hain.' },
            { q: 'Medicine courier se kaise milegi?', a: 'Dr. Shadab prescription bhejte hain. Aap kisi bhi nearby homeopathic pharmacy se le sakte hain, ya hum courier arrangement bhi karte hain. India ke kisi bhi city mein possible hai.' },
            { q: 'Pehle WhatsApp message mein kya likhein?', a: 'Apna naam, age, bimari ka naam, aur kitne samay se hai — bas itna likho. Dr. Shadab khud reply karte hain aur further details poochte hain.' },
            { q: 'Fees kitni hai?', a: 'First query pe WhatsApp pe free advice milti hai. Detailed case analysis aur prescription ke liye nominal fees hain. WhatsApp pe poochhein.' },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)', padding: '18px 0' }}>
              <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink)', marginBottom: 8 }}>{item.q}</div>
              <div style={{ fontSize: 14, color: 'var(--ink3)', lineHeight: 1.8, fontWeight: 300 }}>{item.a}</div>
            </div>
          ))}
        </div>

      </div>

      <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" className="fab">📲</a>
    </div>
  )
}
