import { getAllMedicines, getMedicineBySlug } from '@/lib/queries'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import MedicineClient from './MedicineClient'

export const revalidate = 3600

export async function generateStaticParams() {
  const medicines = await getAllMedicines()
  return medicines.map((m: any) => ({ slug: m.slug?.current })).filter(Boolean)
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const medicine = await getMedicineBySlug(params.slug)
  if (!medicine) return {}
  return {
    title: medicine.metaTitle || `${medicine.name} — Homeopathic Medicine Guide | Homeopedia.in`,
    description: medicine.metaDescription || `${medicine.name} ki puri jaankari — uses, potency, modalities, faqs. Doctor-reviewed.`,
  }
}

export default async function MedicinePage({ params }: { params: { slug: string } }) {
  const medicine = await getMedicineBySlug(params.slug)
  if (!medicine) notFound()
  return <MedicineClient medicine={medicine} />
}
