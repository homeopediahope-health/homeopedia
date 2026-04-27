import { WA_BASE, WA_CONSULT } from '@/lib/constants'
'use client'

import { useEffect, useState } from 'react'
import { getMedicineBySlug } from '@/lib/queries'
import FAQAccordion from '@/components/FAQAccordion'
import { Pill } from 'lucide-react'

export default function MedicinePage({ params }: { params: { slug: string } }) {
  const [med, setMed] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMedicineBySlug(params.slug).then((m) => {
      setMed(m)
      setLoading(false)
    })
  }, [params.slug])

  if (loading) return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto" />
    </div>
  )

  if (!med) return <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-500">Medicine nahi mili.</div>

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <p className="text-xs text-gray-400 mb-4">
        <a href="/">Home</a> › <a href="/medicines">Medicines</a> › {med.name}
      </p>

      <div className="flex items-start gap-3 mb-6">
        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
          <Pill className="w-5 h-5 text-green-700" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{med.name}</h1>
          {med.source && <p className="text-sm text-gray-500">Source: {med.source}</p>}
          {med.commonUses && <p className="text-sm text-gray-600 mt-1">{med.commonUses}</p>}
        </div>
      </div>

      {med.heroText && (
        <p className="text-gray-600 text-sm leading-relaxed mb-6 bg-gray-50 p-4 rounded-xl">{med.heroText}</p>
      )}

      {med.keyIndications?.length > 0 && (
        <div className="mb-6">
          <h2 className="font-bold text-gray-900 mb-3">Key Indications</h2>
          <div className="space-y-2">
            {med.keyIndications.map((ind: string, i: number) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-500 mt-0.5 shrink-0">✓</span> {ind}
              </div>
            ))}
          </div>
        </div>
      )}

      {med.potencies?.length > 0 && (
        <div className="mb-6">
          <h2 className="font-bold text-gray-900 mb-3">Available Potencies</h2>
          <div className="flex flex-wrap gap-2">
            {med.potencies.map((p: string, i: number) => (
              <span key={i} className="bg-green-50 border border-green-200 text-green-700 text-sm px-3 py-1 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>
      )}

      {med.usedFor?.length > 0 && (
        <div className="mb-6">
          <h2 className="font-bold text-gray-900 mb-3">Kaun Si Bimari Mein Use Hoti Hai</h2>
          <div className="space-y-2">
            {med.usedFor.map((u: any, i: number) => (
              <div key={i} className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium text-gray-800 text-sm">{u.disease}</p>
                {u.indication && <p className="text-xs text-gray-500 mt-0.5">{u.indication}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {med.faqs?.length > 0 && (
        <div>
          <h2 className="font-bold text-gray-900 mb-4">FAQs</h2>
          <FAQAccordion faqs={med.faqs} />
        </div>
      )}

      <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
        <p className="text-sm text-green-800 font-medium mb-3">Apne liye sahi medicine jaanein</p>
        <a
          href="${WA_BASE}?text=Namaste%20Dr.%20Shadab%2C%20mujhe%20medicine%20ke%20baare%20mein%20guidance%20chahiye."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-green-700 transition-colors"
        >
          Dr. Shadab se Poochho
        </a>
      </div>
    </div>
  )
}
