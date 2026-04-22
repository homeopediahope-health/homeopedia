import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | HomeoPedia.in',
  description: 'HomeoPedia.in ki privacy policy — aapka data kaise use hota hai.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px clamp(16px,4vw,32px) 80px' }}>

        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Privacy Policy</h1>
          <p style={{ fontSize: 13, color: 'var(--ink4)' }}>Last updated: April 2026 · HomeoPedia.in</p>
        </div>

        {[
          {
            h: '1. Ye Website Kya Hai',
            p: 'HomeoPedia.in ek free, educational homeopathy knowledge portal hai. Ye website Dr. Shadab Khan MD Homoeopathy ke dwara medically reviewed hai. Ye website sirf information provide karta hai — ye doctor-patient relationship nahi banata aur koi bhi medical diagnosis nahi deta.'
          },
          {
            h: '2. Hum Kya Data Collect Karte Hain',
            p: 'Hum koi personal registration ya account nahi banate. Jab aap site use karte hain, anonymized analytics data collect hoti hai (page views, location country, device type) — ye Google Analytics ke through hota hai. Ye data aapki personally identify nahi karta. Agar aap WhatsApp ya phone se contact karte hain, vo conversation third-party services (WhatsApp/phone) ke through hoti hai — unki apni privacy policy hoti hai.'
          },
          {
            h: '3. Cookies',
            p: 'Ye website standard cookies use karta hai — mainly analytics ke liye (Google Analytics). Aap browser settings se cookies block kar sakte hain. Hum no advertising cookies use karte hain.'
          },
          {
            h: '4. Aapka Data Kisi Ko Share Nahi Hota',
            p: 'Hum aapka koi bhi personal data kisi third party ko sell ya share nahi karte. Analytics data sirf site improvement ke liye use hota hai.'
          },
          {
            h: '5. Medical Disclaimer (Zaroor Padhein)',
            p: 'HomeoPedia.in pe di gayi information sirf educational purpose ke liye hai. Ye professional medical advice, diagnosis ya treatment ka substitute nahi hai. Koi bhi health decision lene se pehle qualified doctor se zaroor milein. Homeopathic treatment individual results vary karte hain — koi bhi specific result guarantee nahi kiya jaata.'
          },
          {
            h: '6. External Links',
            p: 'Ye website kuch external links contain kar sakti hai (YouTube, CCRH, etc.). Hum un websites ki privacy practices ke liye responsible nahi hain.'
          },
          {
            h: '7. Children',
            p: 'Ye website 13 saal se kam age ke bachon se knowingly koi data collect nahi karta.'
          },
          {
            h: '8. Contact',
            p: 'Privacy se related koi bhi sawaal ke liye: WhatsApp +91 89834 58889 ya homeopedia.in/contact pe jaayein.'
          },
        ].map(sec => (
          <div key={sec.h} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>{sec.h}</h2>
            <p style={{ fontSize: 14, color: 'var(--ink3)', lineHeight: 1.9, fontWeight: 300 }}>{sec.p}</p>
          </div>
        ))}

      </div>
    </div>
  )
}
