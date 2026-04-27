import { WA_BASE, WA_CONSULT } from '@/lib/constants'
import SL from '@/components/SL'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. Shadab Khan MD Homeopath | HomeoPedia',
  description: 'Dr. Shadab Khan MD Homeopath — 15+ years experience, 10,000+ patients. HomeoPedia ke founder aur medical reviewer.',
}

export default function AboutPage() {
  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '72px clamp(16px,4vw,32px)', textAlign: 'center' }}>
        <div style={{ width: 100, height: 100, borderRadius: '50%', margin: '0 auto 20px', background: 'linear-gradient(135deg,var(--gold-dk),var(--gold-lt))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 34, color: '#fff', fontWeight: 700, boxShadow: '0 4px 24px rgba(184,145,42,.35)' }}>Dr</div>
        <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Dr. Shadab Khan</h1>
        <div style={{ fontSize: 14, color: 'var(--gold-dk)', fontStyle: 'italic', marginBottom: 16 }}>MD Homeopath · Reg. No. 54130 · Maharashtra Medical Council</div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['15+ Years Experience', '10,000+ Patients', 'MD Homoeopathy', 'CCRH Certified', 'Maharashtra Council'].map(b => (
            <span key={b} style={{ fontSize: 12, padding: '5px 14px', borderRadius: 100, background: 'var(--card)', color: 'var(--ink2)', border: '1px solid var(--border)' }}>{b}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '60px clamp(16px,4vw,32px) 80px' }}>
        {[
          { h: 'About Dr. Shadab Khan', p: "Dr. Shadab Khan ek renowned homeopathic physician hain jo 15+ saal se practice kar rahe hain. Unhone MD Homoeopathy ki degree complete ki aur tab se chronic diseases jaise psoriasis, PCOD, IBS, thyroid, aur mental health conditions mein specialization hai. Unka approach holistic hai — physical symptoms ke saath saath mental aur emotional state ko bhi treat kiya jaata hai." },
          { h: 'HomeoPedia Kyun Banaya?', p: "'Bahut saare patients mere paas aate hain jinhone internet pe galat information padh li hoti hai ya homeopathy ke baare mein myths sun rakhe hain. Maine socha kyun na ek aisi website banai jaaye jahan accurate, simple language mein information ho — kya khayein, kya nahi, homeopathy kaise kaam karti hai — sab kuch ek jagah. HomeoPedia usi vision ka result hai.' — Dr. Shadab Khan" },
          { h: 'Treatment Philosophy', p: "Har patient unique hota hai — isiliye homeopathy mein sirf disease nahi, poora person treat kiya jaata hai. Kisi ka psoriasis stress se bad hota hai, kisi ka diet se, kisi ka hormonal changes se. Isliye medicine bhi har patient ke liye alag hogi. Ye 'one-size-fits-all' approach nahi hai." },
        ].map(sec => (
          <div key={sec.h} style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 24, fontWeight: 700, color: 'var(--ink)', marginBottom: 14 }}>{sec.h}</h2>
            {sec.h === 'HomeoPedia Kyun Banaya?'
              ? <blockquote style={{ padding: '20px 24px', background: 'var(--gold-bg)', border: '1px solid rgba(184,145,42,.25)', borderLeft: '4px solid var(--gold)', borderRadius: '0 10px 10px 0', fontSize: 14, color: 'var(--ink2)', lineHeight: 1.9, fontStyle: 'italic', fontWeight: 300 }}>{sec.p}</blockquote>
              : <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.85, fontWeight: 300 }}>{sec.p}</p>
            }
          </div>
        ))}

        {/* Contact */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '36px', boxShadow: 'var(--sh)' }}>
          <SL c="Consult Dr. Shadab" />
          <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 24, fontWeight: 700, color: 'var(--ink)', margin: '12px 0 24px', textAlign: 'center' }}>Appointment Lein</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { label: '📲 WhatsApp', val: '8983458889', href: WA_BASE, bg: '#25d366' },
              { label: '📞 Phone Call', val: '8983458889', href: 'tel:+918983458889', bg: 'var(--gold)' },
              { label: '🎥 YouTube', val: '@drshadabshomoeopathy', href: 'https://www.youtube.com/@drshadabshomoeopathy', bg: '#ff0000' },
              { label: '🌐 Website', val: 'drshadabs.com', href: 'https://drshadabs.com', bg: 'var(--ink)' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', background: c.bg, color: '#fff', borderRadius: 12, textDecoration: 'none' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{c.label}</div>
                  <div style={{ fontSize: 12, opacity: 0.85 }}>{c.val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲</a>
    </div>
  )
}
