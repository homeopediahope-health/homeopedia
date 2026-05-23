import { Metadata } from 'next'
import { getAllLabTests } from '@/lib/queries'
import LabsListClient from './LabsListClient'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Lab Tests Guide — Normal Range, High/Low Matlab | HomeoPedia.in',
  description: 'ESR, CBC, TSH, CRP aur sabhi lab tests ki complete Hinglish guide. Normal range, high/low ka matlab, kab doctor ko dikhaye — Dr. Shadab Khan dwara reviewed.',
  alternates: { canonical: 'https://www.homeopedia.in/lab-tests' },
  openGraph: {
    title: 'Lab Tests Guide | HomeoPedia.in',
    description: 'Apni report samjho — normal range, high/low meaning, kab test karwana chahiye.',
  },
}

export default async function LabTestsPage() {
  const tests = await getAllLabTests().catch(() => [])
  return <LabsListClient tests={tests} />
}
