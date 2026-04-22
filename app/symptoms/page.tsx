import { getAllSymptoms } from '@/lib/queries'
import Link from 'next/link'
import { Activity } from 'lucide-react'

export const revalidate = 3600

export default async function SymptomsPage() {
  const symptoms = await getAllSymptoms().catch(() => [])

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Symptoms Guide</h1>
      <p className="text-gray-500 text-sm mb-8">Apna symptom dhundho aur related bimari jaano</p>

      {symptoms.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {symptoms.map((s: any) => (
            <Link
              key={s.slug?.current}
              href={`/symptoms/${s.slug?.current}`}
              className="border border-gray-200 rounded-xl p-4 hover:border-green-400 transition-all bg-white"
            >
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-green-600" />
                <h3 className="font-semibold text-gray-800 text-sm">{s.name}</h3>
              </div>
              {s.shortDescription && <p className="text-xs text-gray-500 mt-1">{s.shortDescription}</p>}
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-2xl">
          <Activity className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Symptoms guide jald aayegi</p>
        </div>
      )}
    </div>
  )
}
