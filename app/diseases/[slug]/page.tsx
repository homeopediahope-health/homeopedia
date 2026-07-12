import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDiseaseBySlug, getRelatedDiseases, getAllDiseases, getAllDiseasesForLinking, getDietBySlug } from '@/lib/queries'
import { hindiShort, HINDI_NAMES } from '@/lib/hindiNames'
import DiseaseClient from './DiseaseClient'

const DEVANAGARI = /[ऀ-ॿ]/

// Title jo searcher ki bhasha se match kare:
// - Hindi searcher Devanagari mein search karta hai ("सोरायसिस का इलाज")
// - Hinglish searcher "psoriasis ka ilaj" type karta hai
// English-only metaTitle high-competition English queries target karta tha jo winnable nahi —
// isliye Devanagari-wala curated metaTitle ho to wahi use karo, warna intent-matched title banao.
function buildTitle(disease: any, slug: string): string {
  if (disease.metaTitle && DEVANAGARI.test(disease.metaTitle)) return disease.metaTitle
  const hindi = hindiShort(slug) || (DEVANAGARI.test(disease.hindiName || '') ? disease.hindiName : null)
  if (hindi) return `${disease.title} ka Homeopathic Ilaj (${hindi}) — Medicine, Diet | HomeoPedia`
  return disease.metaTitle || `${disease.title} ka Homeopathic Ilaj — Symptoms, Medicine, Diet | HomeoPedia`
}

function buildDescription(disease: any, slug: string): string {
  if (disease.metaDescription && DEVANAGARI.test(disease.metaDescription)) return disease.metaDescription
  const hindi = hindiShort(slug)
  const base = disease.metaDescription
    || (disease.heroText ? disease.heroText.slice(0, 120) : `${disease.title} ka homeopathic treatment, medicines, diet chart aur FAQs — Dr. Shadab Khan MD Homoeopathy.`)
  return hindi ? `${hindi} — ${base}`.slice(0, 158) : base.slice(0, 158)
}

export const revalidate = 3600

export async function generateStaticParams() {
  const diseases = await getAllDiseases()
  return diseases.map((d: any) => ({ slug: d.slug.current }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const disease = await getDiseaseBySlug(slug)
  if (!disease) return { title: 'Disease Guide' }

  const title = buildTitle(disease, slug)
  const description = buildDescription(disease, slug)

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `https://www.homeopedia.in/diseases/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.homeopedia.in/diseases/${slug}`,
      locale: 'hi_IN',
      images: [{ url: `https://www.homeopedia.in/diseases/${slug}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://www.homeopedia.in/diseases/${slug}/opengraph-image`],
    },
  }
}

export default async function DiseasePage({ params }: Props) {
  const { slug } = await params
  const [disease, related, diet, allDiseases] = await Promise.all([
    getDiseaseBySlug(slug).catch(() => null),
    getRelatedDiseases(slug, 8).catch(() => []),
    getDietBySlug(slug).catch(() => null),
    getAllDiseasesForLinking().catch(() => []),
  ])

  if (!disease) notFound()

  const diseaseMap: Record<string, string> = {}
  allDiseases.forEach((d: any) => {
    if (d.slug?.current && d.title) {
      diseaseMap[d.title.toLowerCase()] = d.slug.current
      if (d.hindiName) diseaseMap[d.hindiName.toLowerCase()] = d.slug.current
    }
  })

  const faqSchema = disease.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: disease.faqs.map((f: any) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  } : null

  const medicalSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: disease.title,
    alternateName: [disease.hindiName, HINDI_NAMES[slug]].filter(Boolean),
    description: disease.heroText,
    relevantSpecialty: 'Homoeopathy',
    possibleTreatment: {
      '@type': 'MedicalTherapy',
      name: 'Homeopathic Treatment',
      description: 'Homeopathic treatment by Dr. Shadab Khan MD Homoeopathy, Reg. No. 54130'
    }
  }

  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: disease.title,
    url: `https://www.homeopedia.in/diseases/${slug}`,
    description: disease.metaDescription || disease.heroText,
    author: {
      '@type': 'Physician',
      name: 'Dr. Shadab Khan',
      honorificSuffix: 'MD Homoeopathy',
      description: '15+ years clinical experience, 10,000+ patients. Maharashtra Council Reg. No. 54130.',
      url: 'https://www.homeopedia.in/about',
      sameAs: ['https://www.youtube.com/@drshadabshomoeopathy'],
      worksFor: { '@type': 'MedicalOrganization', name: 'HomeoPedia.in', url: 'https://www.homeopedia.in' },
    },
    reviewedBy: {
      '@type': 'Physician',
      name: 'Dr. Shadab Khan',
      honorificSuffix: 'MD Homoeopathy',
    },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    specialty: { '@type': 'MedicalSpecialty', name: 'Homeopathic Medicine' },
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: buildTitle(disease, slug),
    description: buildDescription(disease, slug),
    author: { '@type': 'Person', name: 'Dr. Shadab Khan', url: 'https://www.homeopedia.in/about' },
    publisher: { '@type': 'Organization', name: 'HomeoPedia.in', url: 'https://www.homeopedia.in' },
    datePublished: disease.publishedAt || '2025-01-01',
    dateModified: disease._updatedAt || new Date().toISOString(),
    mainEntityOfPage: `https://www.homeopedia.in/diseases/${slug}`,
    image: `https://www.homeopedia.in/diseases/${slug}/opengraph-image`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.homeopedia.in' },
      { '@type': 'ListItem', position: 2, name: 'Diseases', item: 'https://www.homeopedia.in/diseases' },
      { '@type': 'ListItem', position: 3, name: disease.title, item: `https://www.homeopedia.in/diseases/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <DiseaseClient disease={disease} related={related} hasDietPage={!!diet} diseaseMap={diseaseMap} />
    </>
  )
}
