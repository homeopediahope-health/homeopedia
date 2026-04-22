import { getAllDiseases } from '@/lib/queries'
import Link from 'next/link'

export const revalidate = 3600

export default async function DiseasesPage() {
  const diseases = await getAllDiseases().catch(() => [])

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">All Diseases</h1>
      <p className="text-gray-500 text-sm mb-8">
        {diseases.length} disease guides — evidence-based, CCRH-backed
      </p>

      {diseases.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {diseases.map((d: any) => (
            <Link
              key={d.slug?.current}
              href={`/diseases/${d.slug?.current}`}
              className="border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-sm transition-all bg-white"
            >
              <h3 className="font-semibold text-gray-800 text-sm">{d.title}</h3>
              {d.hindiName && <p className="text-xs text-gray-500 mt-0.5">{d.hindiName}</p>}
              {d.metaDescription && (
                <p className="text-xs text-gray-400 mt-2 line-clamp-2">{d.metaDescription}</p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-2xl">
          <p className="text-gray-500">Content jald aayega</p>
          <p className="text-gray-400 text-sm mt-1">Sanity Studio se articles add karein</p>
        </div>
      )}
    </div>
  )
}
