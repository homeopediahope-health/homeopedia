import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getSymptomBySlug, getAllSymptoms } from '@/lib/queries'
import SymptomClient from './SymptomClient'

export const revalidate = 3600

export async function generateStaticParams() {
  const symptoms = await getAllSymptoms().catch(() => [])
  return symptoms.map((s: any) => ({ slug: s.slug?.current })).filter((s: any) => s.slug)
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const symptom = await getSymptomBySlug(slug).catch(() => null)
  if (!symptom) return { title: 'Symptom Guide' }

  const displayTitle = symptom.title || symptom.name || ''
  const title = symptom.metaTitle || `${displayTitle} — Karan, Ilaaj aur Homeopathy | HomeoPedia.in`
  const description = symptom.metaDescription || `${displayTitle} (${symptom.hindiName || ''}) ke karan, severity aur ghar pe safe steps. Verified Hinglish guide, Dr. Shadab reviewed.`
  const url = `https://www.homeopedia.in/symptoms/${slug}`

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: 'article', url, locale: 'hi_IN' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function SymptomPage({ params }: Props) {
  const { slug } = await params
  const symptom = await getSymptomBySlug(slug).catch(() => null)
  if (!symptom) notFound()

  const displayTitle = symptom.title || symptom.name || ''

  const faqSchema = symptom.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: symptom.faqs.map((f: any) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://www.homeopedia.in' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://www.homeopedia.in/symptoms' },
      { '@type': 'ListItem', position: 3, name: displayTitle, item: `https://www.homeopedia.in/symptoms/${slug}` },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: displayTitle,
    url: `https://www.homeopedia.in/symptoms/${slug}`,
    description: symptom.metaDescription || symptom.whatIsThis?.slice(0, 155),
    author: {
      '@type': 'Physician',
      name: 'Dr. Shadab Khan',
      honorificSuffix: 'MD Homoeopath',
      url: 'https://www.homeopedia.in/about',
    },
    reviewedBy: { '@type': 'Physician', name: 'Dr. Shadab Khan', honorificSuffix: 'MD Homoeopath' },
    dateReviewed: symptom.reviewDate || 'May 2026',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <SymptomClient symptom={symptom} />
    </>
  )
}
