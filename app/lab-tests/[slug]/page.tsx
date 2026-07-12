import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLabTestBySlug, getAllLabTests } from '@/lib/queries'
import LabTestClient from './LabTestClient'

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const tests = await getAllLabTests().catch(() => [])
  return tests.map((t: any) => ({ slug: t.slug?.current })).filter((t: any) => t.slug)
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const test = await getLabTestBySlug(slug).catch(() => null)
  if (!test) return { title: 'Lab Test Guide' }

  // GSC data (Jul 2026): lab-test queries ka pattern "X test kya hai hindi me" + "normal range" hai
  // — title mein "Kya Hai" + "Hindi" chahiye. Curated metaTitle sirf tab use karo jab intent markers hon.
  const hasIntent = test.metaTitle && /kya|hindi|[ऀ-ॿ]/i.test(test.metaTitle)
  const title = hasIntent
    ? test.metaTitle
    : `${test.name} Kya Hai — Normal Range, Report ka Matlab (Hindi) | HomeoPedia`
  const description = test.metaDescription || `${test.name}${test.fullForm ? ` (${test.fullForm})` : ''} kya hai, normal range kya hoti hai, high/low ka matlab aur kab karwana chahiye — doctor-reviewed guide Hindi me.`
  const url = `https://www.homeopedia.in/lab-tests/${slug}`

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: 'article', url, locale: 'hi_IN' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function LabTestPage({ params }: Props) {
  const { slug } = await params
  const test = await getLabTestBySlug(slug).catch(() => null)
  if (!test) notFound()

  const faqSchema = test.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: test.faqs.map((f: any) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',      item: 'https://www.homeopedia.in' },
      { '@type': 'ListItem', position: 2, name: 'Lab Tests', item: 'https://www.homeopedia.in/lab-tests' },
      { '@type': 'ListItem', position: 3, name: test.name,   item: `https://www.homeopedia.in/lab-tests/${slug}` },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: test.name,
    url: `https://www.homeopedia.in/lab-tests/${slug}`,
    description: test.metaDescription || test.heroText?.slice(0, 155),
    author: {
      '@type': 'Physician',
      name: 'Dr. Shadab Khan',
      honorificSuffix: 'MD Homoeopath',
      url: 'https://www.homeopedia.in/about',
    },
    reviewedBy: { '@type': 'Physician', name: 'Dr. Shadab Khan', honorificSuffix: 'MD Homoeopath' },
    dateReviewed: test.reviewDate || 'May 2026',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <LabTestClient test={test} />
    </>
  )
}
