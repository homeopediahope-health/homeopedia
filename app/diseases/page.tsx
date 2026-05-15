import { Metadata } from 'next'
import DiseasesListClient from './DiseasesListClient'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'All Conditions A to Z — Homeopathic Disease Library | HomeoPedia.in',
  description: 'Har bimari ka Hinglish mein poora guide — causes, symptoms, homeopathic medicines aur diet chart. 100+ conditions, doctor reviewed, free.',
  alternates: {
    canonical: 'https://www.homeopedia.in/diseases',
  },
  openGraph: {
    title: 'All Conditions A to Z | HomeoPedia.in',
    description: 'Har bimari ka poora homeopathic guide — symptoms, medicines, diet chart. Doctor reviewed.',
    url: 'https://www.homeopedia.in/diseases',
  },
}

export default function DiseasesPage() {
  return <DiseasesListClient />
}
