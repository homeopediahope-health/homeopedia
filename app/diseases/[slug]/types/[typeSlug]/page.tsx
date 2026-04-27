import { WA_BASE, WA_CONSULT } from '@/lib/constants'
import { getDiseaseTypeBySlug } from '@/lib/queries'
import { notFound } from 'next/navigation'
import { Shield, ChevronRight, Phone } from 'lucide-react'
import Link from 'next/link'

export default async function DiseaseTypePage({
  params,
}: {
  params: Promise<{ slug: string; typeSlug: string }>
}) {
  const { slug, typeSlug } = await params
  const data = await getDiseaseTypeBySlug(slug, typeSlug)

  if (!data || !data.type) return notFound()

  const { title, hindiName, type, otherTypes } = data

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 pb-24">

      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-5 flex items-center gap-1 flex-wrap">
        <Link href="/" className="hover:text-green-700">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/diseases" className="hover:text-green-700">Diseases</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href={`/diseases/${slug}`} className="hover:text-green-700">{title}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-600">{type.name}</span>
      </nav>

      {/* Hero */}
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{type.name}</h1>
            <p className="text-sm text-gray-500">{title}{hindiName ? ` — ${hindiName}` : ''} ka ek type</p>
          </div>
          {type.percentage && (
            <span className="shrink-0 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold px-3 py-1.5 rounded-full">
              {type.percentage}
            </span>
          )}
        </div>

        {type.description && (
          <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 border border-gray-100 rounded-xl p-4">
            {type.description}
          </p>
        )}
      </div>

      {/* Who Gets It */}
      {type.whoGetsIt && (
        <div className="mb-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
          <h2 className="font-bold text-blue-900 text-sm mb-1">Kise Hoti Hai Ye?</h2>
          <p className="text-sm text-blue-800">{type.whoGetsIt}</p>
        </div>
      )}

      {/* Full Description */}
      {type.fullDescription && (
        <div className="mb-6">
          <h2 className="font-bold text-gray-900 mb-3">{type.name} — Puri Jaankari</h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-3">
            {type.fullDescription.split('\n').filter(Boolean).map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      )}

      {/* Symptoms */}
      {type.specificSymptoms?.length > 0 && (
        <div className="mb-6">
          <h2 className="font-bold text-gray-900 mb-3">Is Type ke Symptoms</h2>
          <div className="space-y-2">
            {type.specificSymptoms.map((s: string, i: number) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-3">
                <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                </div>
                <span className="text-sm text-gray-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Triggers */}
      {type.triggers?.length > 0 && (
        <div className="mb-6">
          <h2 className="font-bold text-gray-900 mb-3">Kya Cheezein Trigger Karti Hain</h2>
          <div className="flex flex-wrap gap-2">
            {type.triggers.map((t: string, i: number) => (
              <span key={i} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1.5 rounded-full">
                ⚠ {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Treatment Approach */}
      {type.treatmentApproach && (
        <div className="mb-6 bg-green-50 border border-green-100 rounded-xl p-4">
          <h2 className="font-bold text-green-900 mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4" /> Homeopathy Treatment
          </h2>
          <p className="text-sm text-green-800 leading-relaxed">{type.treatmentApproach}</p>
        </div>
      )}

      {/* Skincare Tips */}
      {type.skincareTips?.length > 0 && (
        <div className="mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Skincare Tips — {type.name} Ke Liye</h2>
          <ul className="space-y-2">
            {type.skincareTips.map((tip: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-500 mt-0.5 shrink-0">✓</span> {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Other Types */}
      {otherTypes?.length > 0 && (
        <div className="mb-6">
          <h2 className="font-bold text-gray-900 mb-3">{title} Ke Aur Types</h2>
          <div className="space-y-2">
            {otherTypes.map((t: any) => (
              <Link
                key={t.typeSlug}
                href={`/diseases/${slug}/types/${t.typeSlug}`}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 hover:border-green-400 hover:bg-green-50 transition-colors"
              >
                <div>
                  <span className="text-sm font-medium text-gray-800">{t.name}</span>
                  {t.percentage && <span className="text-xs text-gray-400 ml-2">{t.percentage}</span>}
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back to main disease page */}
      <div className="text-center mt-4 mb-6">
        <Link
          href={`/diseases/${slug}`}
          className="text-sm text-green-700 font-medium underline underline-offset-2"
        >
          ← {title} ka poora guide dekhen
        </Link>
      </div>

      {/* Fixed bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 md:hidden">
        <div className="flex gap-2 max-w-3xl mx-auto">
          <a
            href="${WA_BASE}?text=Namaste%20Dr.%20Shadab"
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
  )
}
