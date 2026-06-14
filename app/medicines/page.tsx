import { getAllMedicines } from '@/lib/queries'
import MedicinesClient from './MedicinesClient'

export const revalidate = 3600

export const metadata = {
  title: 'Homeopathic Medicines — Arnica, Nux Vomica, Belladonna aur 50+ Remedies | Homeopedia.in',
  description: 'Classical homeopathic medicines ka complete guide — uses, potency, modalities, comparison. Plant, Mineral, Animal, Nosode remedies. Doctor-reviewed, Hinglish mein.',
}

export default async function MedicinesPage() {
  const medicines = await getAllMedicines()
  return <MedicinesClient medicines={medicines} />
}
