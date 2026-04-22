'use client'

import { useEffect, useState, use } from 'react'
import { getDiseaseBySlug } from '@/lib/queries'
import FAQAccordion from '@/components/FAQAccordion'
import DietCards from '@/components/DietCards'
import MedicineCards from '@/components/MedicineCards'
import SymptomChecklist from '@/components/SymptomChecklist'
import { Clock, BookOpen, Shield, Phone } from 'lucide-react'

const tabs = ['Symptoms', 'Ilaaj', 'Diet', 'Lifestyle', 'FAQ']

export default function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [disease, setDisease] = useState<any>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDiseaseBySlug(slug).then((d) => {
      setDisease(d)
      setLoading(false)
    })
  }, [slug])

  if (loading) return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto" />
    </div>
  )

  if (!disease) return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <p className="text-gray-500">Ye page nahi mila. Jald aayega.</p>
    </div>
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: disease.title,
    alternateName: disease.hindiName,
    description: disease.heroText,
    url: `https://homeopedia.vercel.app/diseases/${slug}`,
    recognizingAuthority: { '@type': 'Organization', name: 'CCRH — Ministry of AYUSH, Government of India' },
    relevantSpecialty: 'Homoeopathy',
    medicineSystem: 'Homeopathic',
    author: {
      '@type': 'Physician',
      name: 'Dr. Shadab Khan',
      description: 'MD (Homoeopathy), Maharashtra Council Reg. No. 54130',
    },
    publisher: { '@type': 'Organization', name: 'HomeoPedia', url: 'https://homeopedia.vercel.app' },
    ...(disease.faqs?.length > 0 && {
      mainEntity: disease.faqs.map((f: any) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    }),
  }

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="max-w-3xl mx-auto px-4 py-6 disease-body" style={{ fontSize: '1rem' }}>

      {/* Breadcrumb */}
      <p className="text-xs text-gray-400 mb-4">
        <a href="/" className="hover:text-green-600">Home</a> › <a href="/diseases" className="hover:text-green-600">Diseases</a> › {disease.title}
      </p>

      {/* Hero */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{disease.title}</h1>
        {disease.hindiName && <p className="text-gray-500 text-sm mb-3">{disease.hindiName}</p>}
        {disease.heroText && <p className="text-gray-600 text-sm leading-relaxed">{disease.heroText}</p>}

        <div className="flex flex-wrap gap-2 mt-3">
          <span className="flex items-center gap-1 text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full">
            <Clock className="w-3 h-3" /> {disease.quickFacts?.treatmentDuration || '4-8 months'}
          </span>
          <span className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-1 rounded-full">
            <Shield className="w-3 h-3" /> CCRH: {disease.ccrhEvidence?.improvementRate || '70%+'} improvement
          </span>
          <span className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 border border-gray-200 px-2 py-1 rounded-full">
            <BookOpen className="w-3 h-3" /> Medically reviewed
          </span>
        </div>
      </div>

      {/* Quick Facts */}
      {disease.quickFacts && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 grid grid-cols-2 gap-3">
          {disease.quickFacts.whatItIs && (
            <div>
              <p className="text-xs text-gray-500 font-medium">Kya hai</p>
              <p className="text-sm text-gray-800">{disease.quickFacts.whatItIs}</p>
            </div>
          )}
          {disease.quickFacts.howCommon && (
            <div>
              <p className="text-xs text-gray-500 font-medium">India mein kitna common</p>
              <p className="text-sm text-gray-800">{disease.quickFacts.howCommon}</p>
            </div>
          )}
          {disease.quickFacts.treatmentDuration && (
            <div>
              <p className="text-xs text-gray-500 font-medium">Treatment Duration</p>
              <p className="text-sm text-gray-800">{disease.quickFacts.treatmentDuration}</p>
            </div>
          )}
          {disease.quickFacts.successRate && (
            <div>
              <p className="text-xs text-gray-500 font-medium">CCRH Success Rate</p>
              <p className="text-sm font-semibold text-green-700">{disease.quickFacts.successRate}</p>
            </div>
          )}
        </div>
      )}

      {/* YouTube Video */}
      {disease.youtubeUrl && (
        <div className="mb-6">
          <div className="aspect-video rounded-xl overflow-hidden bg-black">
            <iframe
              src={disease.youtubeUrl.replace('watch?v=', 'embed/')}
              className="w-full h-full"
              allowFullScreen
              title={`Dr. Shadab explains ${disease.title}`}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">Dr. Shadab Khan explains {disease.title}</p>
        </div>
      )}

      {/* Tabs */}
      <div className="sticky top-[57px] bg-white z-30 border-b border-gray-200 mb-6">
        <div className="flex overflow-x-auto">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === i
                  ? 'border-green-600 text-green-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="pb-24">
        {/* Symptoms Tab */}
        {activeTab === 0 && (
          <div>
            <h2 className="font-bold text-gray-900 mb-4">Aapke Symptoms Check Karo</h2>
            {disease.symptoms?.length > 0 ? (
              <SymptomChecklist symptoms={disease.symptoms} />
            ) : (
              <p className="text-gray-400 text-sm">Symptoms jald add honge...</p>
            )}

            {disease.types?.length > 0 && (
              <div className="mt-8">
                <h3 className="font-bold text-gray-900 mb-4">Types of {disease.title}</h3>
                <div className="space-y-3">
                  {disease.types.map((type: any, i: number) => {
                    const typeUrl = type.typeSlug
                      ? `/diseases/${disease.slug?.current}/types/${type.typeSlug}`
                      : null
                    const Card = (
                      <div className="border border-gray-200 rounded-lg p-4 hover:border-green-400 hover:bg-green-50 transition-colors">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-gray-800 text-sm">{type.name}</h4>
                          <div className="flex items-center gap-2 shrink-0 ml-2">
                            {type.percentage && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {type.percentage}
                              </span>
                            )}
                            {typeUrl && <span className="text-xs text-green-600 font-medium">Detail →</span>}
                          </div>
                        </div>
                        {type.description && (
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">{type.description}</p>
                        )}
                      </div>
                    )
                    return typeUrl ? (
                      <a key={i} href={typeUrl}>{Card}</a>
                    ) : (
                      <div key={i}>{Card}</div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Ilaaj Tab */}
        {activeTab === 1 && (
          <div>
            {disease.ccrhEvidence && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> CCRH Research Evidence
                </h3>
                {disease.ccrhEvidence.improvementRate && (
                  <p className="text-sm text-blue-800 mb-1">
                    <strong>{disease.ccrhEvidence.improvementRate}</strong> patients mein significant improvement
                  </p>
                )}
                {disease.ccrhEvidence.avgTreatmentPeriod && (
                  <p className="text-xs text-blue-700 mb-1">Avg treatment: {disease.ccrhEvidence.avgTreatmentPeriod}</p>
                )}
                {disease.ccrhEvidence.citation && (
                  <p className="text-xs text-blue-600 italic">Source: {disease.ccrhEvidence.citation}</p>
                )}
                {disease.ccrhEvidence.keyFindings?.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {disease.ccrhEvidence.keyFindings.map((f: string, i: number) => (
                      <li key={i} className="text-xs text-blue-700 flex items-start gap-1">
                        <span className="mt-0.5">•</span> {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {disease.homeopathyBenefits?.length > 0 && (
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Homeopathy Kyun Kaam Karta Hai</h3>
                <ul className="space-y-2">
                  {disease.homeopathyBenefits.map((b: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <h3 className="font-bold text-gray-900 mb-4">Homeopathic Medicines</h3>
            {disease.medicines?.length > 0 ? (
              <MedicineCards medicines={disease.medicines} />
            ) : (
              <p className="text-gray-400 text-sm">Medicines jald add hongi...</p>
            )}

            {disease.homeopathyLimitations?.length > 0 && (
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="font-semibold text-amber-800 text-sm mb-2">Honest Limitations</h4>
                <ul className="space-y-1">
                  {disease.homeopathyLimitations.map((l: string, i: number) => (
                    <li key={i} className="text-xs text-amber-700 flex items-start gap-1">
                      <span className="mt-0.5">•</span> {l}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {disease.caseStudies?.length > 0 && (
              <div className="mt-8">
                <h3 className="font-bold text-gray-900 mb-4">Real Patient Experiences</h3>
                <div className="space-y-3">
                  {disease.caseStudies.map((cs: any, i: number) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4">
                      <p className="font-medium text-gray-800 text-sm">{cs.profile}</p>
                      <div className="grid grid-cols-3 gap-2 mt-2 text-xs text-gray-600">
                        {cs.duration && <div><span className="text-gray-400">Duration:</span> {cs.duration}</div>}
                        {cs.treatment && <div><span className="text-gray-400">Treatment:</span> {cs.treatment}</div>}
                        {cs.result && <div className="text-green-700"><span className="text-gray-400">Result:</span> {cs.result}</div>}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">*Individual results vary. Anonymized cases.</p>
              </div>
            )}
          </div>
        )}

        {/* Diet Tab */}
        {activeTab === 2 && (
          <div>
            <h2 className="font-bold text-gray-900 mb-4">Diet Guide</h2>
            {disease.dietInclude?.length > 0 || disease.dietAvoid?.length > 0 ? (
              <DietCards include={disease.dietInclude || []} avoid={disease.dietAvoid || []} />
            ) : (
              <p className="text-gray-400 text-sm">Diet guide jald aayegi...</p>
            )}
          </div>
        )}

        {/* Lifestyle Tab */}
        {activeTab === 3 && (
          <div>
            <h2 className="font-bold text-gray-900 mb-4">Lifestyle & Exercise</h2>
            {disease.lifestyle?.length > 0 ? (
              <div className="space-y-3">
                {disease.lifestyle.map((tip: any, i: number) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 text-sm">{tip.title}</h4>
                    {tip.description && <p className="text-xs text-gray-600 mt-1 leading-relaxed">{tip.description}</p>}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">Lifestyle tips jald aayenge...</p>
            )}
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 4 && (
          <div>
            <h2 className="font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            {disease.faqs?.length > 0 ? (
              <FAQAccordion faqs={disease.faqs} />
            ) : (
              <p className="text-gray-400 text-sm">FAQs jald aayenge...</p>
            )}
          </div>
        )}
      </div>

      {/* Inline Consult CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 md:hidden">
        <div className="flex gap-2 max-w-3xl mx-auto">
          <a
            href="https://wa.me/918983458889?text=Namaste%20Dr.%20Shadab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 text-white text-sm font-semibold py-3 rounded-xl text-center"
          >
            WhatsApp Karein
          </a>
          <a
            href="tel:+918983458889"
            className="flex-1 border border-gray-300 text-gray-700 text-sm font-semibold py-3 rounded-xl text-center flex items-center justify-center gap-1"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
        </div>
      </div>
    </div>
    </>
  )
}
