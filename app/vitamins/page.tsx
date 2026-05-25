import { Metadata } from 'next'
import { getAllVitamins } from '@/lib/queries'
import VitaminsListClient from './VitaminsListClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Vitamins & Minerals Guide — Normal Range, Deficiency & Food Sources | HomeoPedia.in',
  description: 'Vitamin D, B12, Iron, Calcium aur sabhi vitamins ki complete Hinglish guide. Normal range, kami ke lakshan, food sources, supplement tips — Dr. Shadab Khan dwara reviewed.',
  alternates: { canonical: 'https://www.homeopedia.in/vitamins' },
  openGraph: {
    title: 'Vitamins & Minerals Guide | HomeoPedia.in',
    description: 'Apni vitamin deficiency samjho — normal range, kami ke lakshan, food sources, kab supplement lein.',
  },
}

export default async function VitaminsPage() {
  const vitamins = await getAllVitamins().catch(() => [])
  return <VitaminsListClient vitamins={vitamins} />
}
