import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getVitaminBySlug, getAllVitamins } from '@/lib/queries'
import VitaminClient from './VitaminClient'

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const vitamins = await getAllVitamins().catch(() => [])
  return vitamins.map((v: any) => ({ slug: v.slug?.current })).filter((v: any) => v.slug)
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const v = await getVitaminBySlug(slug).catch(() => null)
  if (!v) return { title: 'Vitamin Guide' }

  const title = v.metaTitle || `${v.name} — Deficiency, Normal Range & Food Sources | HomeoPedia.in`
  const description = v.metaDescription || `${v.name} ki deficiency ke lakshan, normal range, food sources aur supplement guide — verified, doctor-reviewed Hinglish guide.`
  const url = `https://www.homeopedia.in/vitamins/${slug}`

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: 'article', url, locale: 'hi_IN' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function VitaminPage({ params }: Props) {
  const { slug } = await params
  const v = await getVitaminBySlug(slug).catch(() => null)
  if (!v) notFound()

  const faqSchema = v.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: v.faqs.map((f: any) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',             item: 'https://www.homeopedia.in' },
      { '@type': 'ListItem', position: 2, name: 'Vitamins',         item: 'https://www.homeopedia.in/vitamins' },
      { '@type': 'ListItem', position: 3, name: v.name,             item: `https://www.homeopedia.in/vitamins/${slug}` },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: v.name,
    url: `https://www.homeopedia.in/vitamins/${slug}`,
    description: v.metaDescription || v.whatIsIt?.slice(0, 155),
    author: {
      '@type': 'Physician',
      name: 'Dr. Shadab Khan',
      honorificSuffix: 'MD Homoeopath',
      url: 'https://www.homeopedia.in/about',
    },
    reviewedBy: { '@type': 'Physician', name: 'Dr. Shadab Khan', honorificSuffix: 'MD Homoeopath' },
    dateReviewed: v.reviewDate || 'May 2026',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <VitaminClient vitamin={v} />
    </>
  )
}
