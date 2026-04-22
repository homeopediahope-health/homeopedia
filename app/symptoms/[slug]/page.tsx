'use client'

import { useEffect, useState } from 'react'
import { getSymptomBySlug } from '@/lib/queries'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'

export default function SymptomPage({ params }: { params: { slug: string } }) {
  const [symptom, setSymptom] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSymptomBySlug(params.slug).then((s) => {
      setSymptom(s)
      setLoading(false)
    })
  }, [params.slug])

  if (loading) return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto" />
    </div>
  )

  if (!symptom) return <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-500">Symptom nahi mila.</div>

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <p className="text-xs text-gray-400 mb-4">
        <a href="/">Home</a> › <a href="/symptoms">Symptoms</a> › {symptom.name}
      </p>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">{symptom.name}</h1>
      {symptom.heroText && <p className="text-gray-600 text-sm leading-relaxed mb-6">{symptom.heroText}</p>}

      {symptom.possibleCauses?.length > 0 && (
        <div className="mb-6">
          <h2 className="font-bold text-gray-900 mb-3">Possible Causes</h2>
          <ul className="space-y-2">
            {symptom.possibleCauses.map((cause: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-amber-500 mt-0.5">•</span> {cause}
              </li>
            ))}
          </ul>
        </div>
      )}

      {symptom.relatedDiseases?.length > 0 && (
        <div className="mb-6">
          <h2 className="font-bold text-gray-900 mb-3">Related Diseases</h2>
          <div className="grid grid-cols-2 gap-2">
            {symptom.relatedDiseases.map((d: any, i: number) => (
              <Link
                key={i}
                href={`/diseases/${d.diseaseSlug}`}
                className="border border-gray-200 rounded-lg p-3 hover:border-green-400 transition-colors"
              >
                <p className="font-medium text-gray-800 text-sm">{d.diseaseName}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {symptom.homeopathyHelps && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4">
          <h2 className="font-bold text-green-900 mb-2">Homeopathy Kaise Help Karta Hai</h2>
          <p className="text-sm text-green-800 leading-relaxed">{symptom.homeopathyHelps}</p>
        </div>
      )}

      {symptom.faqs?.length > 0 && (
        <div>
          <h2 className="font-bold text-gray-900 mb-4">FAQs</h2>
          <FAQAccordion faqs={symptom.faqs} />
        </div>
      )}
    </div>
  )
}
