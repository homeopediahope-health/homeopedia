import { MetadataRoute } from 'next'
import { getAllDiseases } from '@/lib/queries'

const BASE = 'https://homeopedia.in'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const diseases = await getAllDiseases().catch(() => [])

  const diseaseUrls = diseases.flatMap((d: any) => {
    const base = `${BASE}/diseases/${d.slug?.current}`
    return [
      { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    ]
  })

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${BASE}/diseases`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    ...diseaseUrls,
  ]
}
