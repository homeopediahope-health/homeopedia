import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | HomeoPedia.in',
  description: 'HomeoPedia.in ke terms and conditions — website use karne se pehle padhe.',
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px clamp(16px,4vw,32px) 80px' }}>

        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Terms & Conditions</h1>
          <p style={{ fontSize: 13, color: 'var(--ink4)' }}>Last updated: May 2026 · HomeoPedia.in</p>
        </div>

        {[
          {
            h: '1. Sirf Educational Information',
            p: 'HomeoPedia.in ek educational homeopathy knowledge portal hai. Is website pe diya gaya koi bhi content — disease guides, diet charts, medicine information, symptoms — sirf general education ke liye hai. Ye kisi bhi patient ke liye medical advice, diagnosis, ya treatment prescription nahi hai. Apni health se related koi bhi decision lene se pehle apne qualified doctor se milein.'
          },
          {
            h: '2. Doctor-Patient Relationship Nahi Banti',
            p: 'Is website ko browse karne se, ya WhatsApp ke zariye Dr. Shadab Khan se sampark karne se, koi formal doctor-patient relationship establish nahi hoti. WhatsApp pe di gayi general guidance medical consultation ka substitute nahi hai. Detailed case analysis, diagnosis aur prescription ke liye in-person ya formal teleconsultation zaroori hai.'
          },
          {
            h: '3. Medical Emergency',
            p: 'Agar aap kisi medical emergency mein hain — chest pain, breathing problem, severe injury, ya koi bhi life-threatening condition — turant apne nearest hospital emergency jaayein ya 112 dial karein. Is website ko emergency situations mein use na karein.'
          },
          {
            h: '4. Content Accuracy',
            p: 'Hamare disease guides aur information CCRH (Central Council for Research in Homoeopathy) guidelines aur Dr. Shadab Khan MD Homoeopathy ke clinical experience pe based hain. Hum poori koshish karte hain ki content accurate aur updated rahe, lekin hum kisi bhi information ki completeness ya correctness ki guarantee nahi dete. Medical science evolving field hai — koi bhi treatment decision apne doctor ke saath milkar lein.'
          },
          {
            h: '5. Third-Party Links',
            p: 'Is website mein YouTube videos, WhatsApp links, aur baaki external resources ke links ho sakte hain. Hum in third-party platforms ki content ya privacy practices ke liye responsible nahi hain. Un platforms ki apni terms of service hoti hain.'
          },
          {
            h: '6. Intellectual Property',
            p: 'HomeoPedia.in pe diya gaya sabhi content — text, design, graphics, disease guides, diet charts — Dr. Shadab Khan aur HomeoPedia.in ka intellectual property hai. Bina written permission ke commercial use, copying, ya redistribution prohibited hai. Educational sharing (social media, WhatsApp) with proper credit allowed hai.'
          },
          {
            h: '7. Limitation of Liability',
            p: 'HomeoPedia.in aur Dr. Shadab Khan is website ki information pe rely karne se hone wale kisi bhi direct, indirect, ya consequential harm ke liye liable nahi hain. Aap apni judgement se is information ka use karte hain. Medical decisions hamesha qualified healthcare professional ke guidance mein lein.'
          },
          {
            h: '8. Changes to Terms',
            p: 'Hum in terms ko kabhi bhi update kar sakte hain. Updated terms website pe publish hone ke baad effective ho jaati hain. Regular use karne se aap updated terms ko accept karte hain.'
          },
          {
            h: '9. Contact',
            p: 'Koi bhi sawaal ho to: drshadabshomoeopathy@gmail.com ya WhatsApp pe Dr. Shadab Khan se sampark karein. Website: homeopedia.in'
          },
        ].map(({ h, p }) => (
          <div key={h} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>{h}</h2>
            <p style={{ fontSize: 14, color: 'var(--ink3)', lineHeight: 1.8, fontWeight: 300 }}>{p}</p>
          </div>
        ))}

        <div style={{ marginTop: 48, padding: '20px 24px', background: 'rgba(184,145,42,.07)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 12 }}>
          <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            <strong style={{ color: 'var(--gold-dk)' }}>Disclaimer:</strong> HomeoPedia.in AYUSH Ministry ke guidelines ke under kaam karta hai. Homeopathy ek recognized medical system hai India mein. Phir bhi, koi bhi treatment self-prescribe na karein — apne registered homoeopathic doctor se milein.
          </p>
        </div>

      </div>
    </div>
  )
}
