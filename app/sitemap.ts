import { MetadataRoute } from 'next'
import { getAllDiseases, getAllDiets, getAllMedicines, getAllSymptoms } from '@/lib/queries'

export const revalidate = 3600

const BASE = 'https://homeopedia.in'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [diseases, diets, medicines, symptoms] = await Promise.all([
    getAllDiseases().catch(() => []),
    getAllDiets().catch(() => []),
    getAllMedicines().catch(() => []),
    getAllSymptoms().catch(() => []),
  ])

  const diseaseUrls = diseases.map((d: any) => ({
    url: `${BASE}/diseases/${d.slug?.current}`,
    lastModified: d.publishedAt ? new Date(d.publishedAt) : new Date('2026-04-01'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const dietUrls = diets.map((d: any) => ({
    url: `${BASE}/diet/${d.slug?.current}`,
    lastModified: d.publishedAt ? new Date(d.publishedAt) : new Date('2026-04-01'),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const medicineUrls = medicines.map((m: any) => ({
    url: `${BASE}/medicines/${m.slug?.current}`,
    lastModified: new Date('2026-04-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const symptomUrls = symptoms.map((s: any) => ({
    url: `${BASE}/symptoms/${s.slug?.current}`,
    lastModified: new Date('2026-04-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: BASE,                  lastModified: new Date('2026-05-01'), changeFrequency: 'daily'   as const, priority: 1.0 },
    { url: `${BASE}/diseases`,    lastModified: new Date('2026-05-01'), changeFrequency: 'daily'   as const, priority: 0.9 },
    { url: `${BASE}/diet`,        lastModified: new Date('2026-05-01'), changeFrequency: 'weekly'  as const, priority: 0.8 },
    { url: `${BASE}/medicines`,   lastModified: new Date('2026-04-30'), changeFrequency: 'weekly'  as const, priority: 0.8 },
    { url: `${BASE}/blog`,        lastModified: new Date('2026-04-01'), changeFrequency: 'weekly'  as const, priority: 0.7 },
    { url: `${BASE}/about`,       lastModified: new Date('2026-01-01'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/contact`,     lastModified: new Date('2026-01-01'), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE}/symptoms`,    lastModified: new Date('2026-04-01'), changeFrequency: 'weekly'  as const, priority: 0.6 },
    ...diseaseUrls,
    ...dietUrls,
    ...medicineUrls,
    ...symptomUrls,
  ]
}
