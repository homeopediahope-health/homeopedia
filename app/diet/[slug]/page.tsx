import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDietBySlug } from '@/lib/queries'
import DietClient from './DietClient'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const diet = await getDietBySlug(slug).catch(() => null)
  if (!diet) return { title: 'Diet Chart' }

  const title = diet.metaTitle || `${diet.title} — Dr. Shadab Khan | Homeopedia`
  const description = diet.metaDescription || diet.intro?.slice(0, 155) || `${diet.title} ka complete Indian diet chart. Kya khayein, kya avoid karein — veg aur non-veg dono.`
  const url = `https://www.homeopedia.in/diet/${slug}`

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      locale: 'hi_IN',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function DietDetailPage({ params }: Props) {
  const { slug } = await params
  const diet = await getDietBySlug(slug).catch(() => null)
  if (!diet) notFound()

  const faqSchema = diet.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: diet.faqs.map((f: any) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  } : null

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: diet.title,
    url: `https://www.homeopedia.in/diet/${slug}`,
    description: diet.metaDescription || diet.intro,
    about: { '@type': 'MedicalCondition', name: diet.title?.replace(' Diet Chart', '') },
    author: {
      '@type': 'Physician',
      name: 'Dr. Shadab Khan',
      honorificSuffix: 'MD Homoeopath',
      url: 'https://www.homeopedia.in/about',
    },
    reviewedBy: {
      '@type': 'Physician',
      name: 'Dr. Shadab Khan',
      honorificSuffix: 'MD Homoeopath',
    },
    dateReviewed: diet.reviewDate || 'May 2026',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <DietClient diet={diet} />
    </>
  )
}
