import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. Shadab Khan MD Homeopath | HomeoPedia',
  description: 'Dr. Shadab Khan, MD Homoeopathy, Maharashtra Council Reg. No. 54130. 15+ years experience, 10,000+ patients. Expert in chronic skin, joint, and lifestyle diseases.',
}

const credentials = [
  { label: 'Qualification', value: 'MD (Homoeopathy)' },
  { label: 'Registration', value: 'Maharashtra Council of Homoeopathy — Reg. No. 54130' },
  { label: 'Experience', value: '15+ Years Clinical Practice' },
  { label: 'Patients Treated', value: '10,000+' },
  { label: 'Specialization', value: 'Chronic Skin, Joints, Lifestyle Diseases' },
  { label: 'Clinic', value: 'Akola, Maharashtra' },
]

const expertise = [
  'Psoriasis & Chronic Skin Conditions',
  'Rheumatoid Arthritis & Joint Disorders',
  'PCOD & Women\'s Health',
  'Thyroid & Endocrine Disorders',
  'Anxiety, Depression & Mental Health',
  'IBS & Digestive Disorders',
  'Migraine & Neurological Conditions',
  'Pediatric Homeopathy',
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Shadab Khan',
  description: 'MD Homeopath with 15+ years experience in chronic disease management',
  medicalSpecialty: 'Homoeopathy',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'MD (Homoeopathy)',
    recognizedBy: { '@type': 'Organization', name: 'Maharashtra Council of Homoeopathy' },
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Akola',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  telephone: '+918983458889',
  url: 'https://homeopedia.vercel.app/about',
  sameAs: [
    'https://www.drshadabs.com',
    'https://www.youtube.com/@drshadabshomoeopathy',
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, var(--sage-light) 0%, #fff 100%)', borderRadius: 24, padding: '48px', marginBottom: 40, border: '1px solid var(--gray-light)' }}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ width: 120, height: 120, background: 'linear-gradient(135deg, var(--sage-mid), var(--sage-deep))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', flexShrink: 0 }}>
              👨‍⚕️
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--sage-deep)', background: 'var(--sage-light)', display: 'inline-block', padding: '4px 12px', borderRadius: 100, marginBottom: 12 }}>
                Medically Reviewed Content
              </div>
              <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: 8 }}>Dr. Shadab Khan</h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--sage-deep)', fontWeight: 600, marginBottom: 8 }}>MD (Homoeopathy)</p>
              <p style={{ color: 'var(--gray-text)', fontSize: '0.95rem' }}>Maharashtra Council of Homoeopathy — Registration No. 54130</p>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 20 }}>Qualifications & Credentials</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {credentials.map(c => (
              <div key={c.label} style={{ background: 'white', border: '1px solid var(--gray-light)', borderRadius: 12, padding: '16px 20px' }}>
                <p style={{ fontSize: '0.78rem', color: 'var(--gray-text)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{c.label}</p>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--charcoal)' }}>{c.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 16 }}>About Dr. Shadab Khan</h2>
          <div style={{ fontSize: '1rem', lineHeight: 1.8, color: '#374151', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p>Dr. Shadab Khan, MD (Homoeopathy) ek experienced homeopathic physician hain jo Akola, Maharashtra mein practice karte hain. Maharashtra Council of Homoeopathy ke registered practitioner hain (Reg. No. 54130) aur 15+ saalon ke clinical experience ke saath unhone 10,000 se zyada patients ko treat kiya hai.</p>
            <p>Unki specialization chronic conditions mein hai — psoriasis, rheumatoid arthritis, PCOD, thyroid disorders, anxiety, depression aur digestive disorders. Evidence-based homeopathy mein believe karte hain aur CCRH (Central Council for Research in Homoeopathy) ke research ko apne practice mein integrate karte hain.</p>
            <p>HomeoPedia pe published har article Dr. Shadab Khan ki personal expertise aur clinical experience pe based hai. Content specifically CCRH guidelines, peer-reviewed research, aur clinical evidence ke saath align kiya gaya hai — taaki patients ko accurate, trustworthy information mile.</p>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 16 }}>Areas of Expertise</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {expertise.map(e => (
              <span key={e} style={{ background: 'var(--sage-light)', color: 'var(--sage-deep)', padding: '8px 16px', borderRadius: 100, fontSize: '0.9rem', fontWeight: 500 }}>{e}</span>
            ))}
          </div>
        </div>

        {/* CCRH Note */}
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: 16, padding: 24, marginBottom: 40 }}>
          <h3 style={{ fontSize: '1.1rem', color: '#166534', marginBottom: 10 }}>CCRH-Aligned Content</h3>
          <p style={{ fontSize: '0.95rem', color: '#15803D', lineHeight: 1.7 }}>
            HomeoPedia pe sabhi disease guides CCRH (Central Council for Research in Homoeopathy), Ministry of AYUSH, Government of India ke research aur guidelines ke saath aligned hain. Har guide mein scientific evidence citations shamil hain.
          </p>
        </div>

        {/* Medical Disclaimer */}
        <div style={{ background: '#FEF3C7', border: '1px solid #FCD34D', borderRadius: 16, padding: 24, marginBottom: 40 }}>
          <h3 style={{ fontSize: '1rem', color: '#92400E', marginBottom: 10 }}>Medical Disclaimer</h3>
          <p style={{ fontSize: '0.875rem', color: '#78350F', lineHeight: 1.7 }}>
            HomeoPedia pe di gayi information educational purposes ke liye hai. Ye professional medical advice, diagnosis, ya treatment ka substitute nahi hai. Kisi bhi health condition ke liye hamesha qualified healthcare professional se consult karein. Emergency mein turant emergency medical services se contact karein.
          </p>
        </div>

        {/* Contact */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 16 }}>Consultation Ke Liye</h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/918983458889?text=Namaste%20Dr.%20Shadab" target="_blank" rel="noopener noreferrer"
              style={{ background: '#22C55E', color: 'white', padding: '14px 28px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>
              WhatsApp Karein
            </a>
            <a href="tel:+918983458889"
              style={{ background: 'white', color: 'var(--charcoal)', padding: '14px 28px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', border: '1px solid var(--gray-light)', fontSize: '1rem' }}>
              Call: 8983458889
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
