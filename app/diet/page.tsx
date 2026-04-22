import { Metadata } from 'next'
import { getAllDiets } from '@/lib/queries'
import DietListClient from './DietListClient'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Disease-Wise Diet Charts — Kya Khayein Kya Na Khayein | HomeoPedia.in',
  description: 'Psoriasis, PCOD, Thyroid, IBS, Hair Fall ke liye Indian doctor recommended diet charts. Kya khayein, kya avoid karein — free guide Hindi mein.',
  openGraph: {
    title: 'Disease-Wise Diet Charts | HomeoPedia.in',
    description: 'Har disease ke liye expert diet chart — Indian foods ke saath. Free, no signup.',
  },
}

export default async function DietPage() {
  const diets = await getAllDiets().catch(() => [])
  return <DietListClient diets={diets} />
}
