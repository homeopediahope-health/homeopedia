import { Metadata } from 'next'
import Image from 'next/image'

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
            <Image src="/dr-shadab.png" alt="Dr. Shadab Khan MD Homeopath" width={140} height={140} style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0, border: '4px solid white', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }} priority />
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
            <p>Dr. Shadab Khan is a registered MD Homoeopath based in Akola, Maharashtra, with over 15 years of clinical experience treating chronic and complex conditions. Registered with the Maharashtra Council of Homoeopathy (Reg. No. 54130), he has successfully treated more than 10,000 patients across India through both in-person and online consultations.</p>
            <p>His clinical focus includes chronic skin conditions such as psoriasis and eczema, autoimmune disorders, hormonal imbalances including PCOD and thyroid dysfunction, anxiety, depression, and digestive disorders. He integrates evidence-based homeopathy with CCRH (Central Council for Research in Homoeopathy) research guidelines in every case.</p>
            <p>Every article published on HomeoPedia is personally reviewed by Dr. Shadab Khan to ensure clinical accuracy, practical relevance, and alignment with current homeopathic research. His goal is to make reliable, doctor-reviewed homeopathy information freely accessible to patients across India.</p>
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
            All disease guides on HomeoPedia are aligned with CCRH (Central Council for Research in Homoeopathy), Ministry of AYUSH, Government of India research and clinical guidelines. Every guide includes scientific evidence citations and references.
          </p>
        </div>

        {/* Medical Disclaimer */}
        <div style={{ background: '#FEF3C7', border: '1px solid #FCD34D', borderRadius: 16, padding: 24, marginBottom: 40 }}>
          <h3 style={{ fontSize: '1rem', color: '#92400E', marginBottom: 10 }}>Medical Disclaimer</h3>
          <p style={{ fontSize: '0.875rem', color: '#78350F', lineHeight: 1.7 }}>
            Information on HomeoPedia is for educational purposes only and does not constitute professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for any health condition. In case of emergency, contact emergency medical services immediately.
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
