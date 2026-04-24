import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDiseaseBySlug, getRelatedDiseases, getAllDiseases } from '@/lib/queries'
import DiseaseClient from './DiseaseClient'

export const revalidate = 86400

export async function generateStaticParams() {
  const diseases = await getAllDiseases()
  return diseases.map((d: any) => ({ slug: d.slug.current }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const disease = await getDiseaseBySlug(slug)
  if (!disease) return { title: 'Disease Guide' }

  const title = disease.metaTitle || `${disease.title} Ka Homeopathic Ilaj — Dr. Shadab Khan`
  const description = disease.metaDescription ||
    (disease.heroText ? disease.heroText.slice(0, 155) : `${disease.title} mein homeopathic treatment, diet chart, medicines aur dos & don'ts — Dr. Shadab Khan MD Homoeopathy.`)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://homeopedia.in/diseases/${slug}`,
      locale: 'hi_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function DiseasePage({ params }: Props) {
  const { slug } = await params
  const [disease, related] = await Promise.all([
    getDiseaseBySlug(slug),
    getRelatedDiseases(slug, 3),
  ])

  if (!disease) notFound()

  return <DiseaseClient disease={disease} related={related} />
}
