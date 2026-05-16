import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const metaData: Record<string, { metaTitle: string; metaDescription: string }> = {
  'acanthosis-nigricans': {
    metaTitle: 'Acanthosis Nigricans – Kali Chamdi Ka Ilaaj | Homeopedia',
    metaDescription: 'Acanthosis nigricans (gardan aur kaanch ki kali chamdi) ka karan, ilaaj aur homeopathic treatment. Verified info, doctor-reviewed. Homeopedia.in',
  },
  'acidity': {
    metaTitle: 'Acidity aur GERD Ka Homeopathic Ilaaj | Homeopedia',
    metaDescription: 'Seene ki jalan, khatta dakar, acid reflux (GERD) ka karan, diet aur homeopathic ilaaj – simple Hinglish mein. Verified info, doctor-reviewed.',
  },
  'acne': {
    metaTitle: 'Acne aur Pimple Ka Ilaaj – Homeopathy | Homeopedia',
    metaDescription: 'Muhanse (acne/pimple) ka karan, prakar, diet aur homeopathic ilaaj – simple Hinglish mein. Verified info, doctor-reviewed. Homeopedia.in',
  },
  'adenoids': {
    metaTitle: 'Adenoids Ka Ilaaj Bina Operation – Homeopathy',
    metaDescription: 'Bacchon mein adenoids (naak ke peeche ki gaanth) ka ilaaj bina surgery – karan, lakshan aur homeopathic treatment. Verified info, doctor-reviewed.',
  },
  'alopecia': {
    metaTitle: 'Alopecia Areata – Ganjapan Ka Homeopathic Ilaaj',
    metaDescription: 'Alopecia areata (gol ganjapan) ka karan, kya khaayein aur homeopathic ilaaj – simple Hinglish mein. Verified info, doctor-reviewed. Homeopedia.in',
  },
  'arthritis': {
    metaTitle: 'Arthritis (Gathiya) Ka Homeopathic Ilaaj | Homeopedia',
    metaDescription: 'Gathiya (arthritis) mein jodon ka dard, sujan ka karan aur homeopathic ilaaj – diet aur gharelu upay samet. Verified info, doctor-reviewed.',
  },
  'autism': {
    metaTitle: 'Autism Ka Homeopathic Ilaaj – Bacchon Ke Liye',
    metaDescription: 'Autism (ASD) ke lakshan, karan aur homeopathic treatment guide – bacchon ke liye safe approach. Verified info, doctor-reviewed. Homeopedia.in',
  },
  'bedwetting': {
    metaTitle: 'Bedwetting (Bistar Geela) Ka Ilaaj – Homeopathy',
    metaDescription: 'Bacchon mein bistar geela karne (bedwetting/nocturnal enuresis) ka karan aur homeopathic ilaaj. Verified info, doctor-reviewed. Homeopedia.in',
  },
  'cervical-spondylosis': {
    metaTitle: 'Cervical Spondylosis – Gardan Dard Ka Ilaaj',
    metaDescription: 'Cervical spondylosis (gardan dard, akdhan) ka karan, prakar aur homeopathic ilaaj – diet aur exercise guide samet. Verified, doctor-reviewed.',
  },
  'fatty-liver': {
    metaTitle: 'Fatty Liver Ka Homeopathic Ilaaj | Homeopedia',
    metaDescription: 'Fatty liver (NAFLD) ka karan, diet chart aur homeopathic treatment – jigar ki charbi ka ilaaj. Verified info, doctor-reviewed. Homeopedia.in',
  },
  'frozen-shoulder': {
    metaTitle: 'Frozen Shoulder Ka Ilaaj – Homeopathy Se Rahat',
    metaDescription: 'Frozen shoulder (kandha akdhan/dard) ka karan, exercise aur homeopathic ilaaj – simple Hinglish mein. Verified info, doctor-reviewed.',
  },
  'kidney-stone': {
    metaTitle: 'Kidney Stone (Pathri) Ka Homeopathic Ilaaj',
    metaDescription: 'Gurde ki pathri (kidney stone) ka karan, diet chart aur homeopathic treatment – bina operation ilaaj. Verified info, doctor-reviewed. Homeopedia.in',
  },
  'leucorrhoea': {
    metaTitle: 'Leucorrhoea (Safed Pani) Ka Ilaaj – Homeopathy',
    metaDescription: 'Leucorrhoea (safed pani / shwet pradar) ka karan, prakar aur homeopathic ilaaj – diet guide samet. Verified info, doctor-reviewed. Homeopedia.in',
  },
  'osteoarthritis': {
    metaTitle: 'Osteoarthritis – Ghutne Dard Ka Homeopathic Ilaaj',
    metaDescription: 'Osteoarthritis (ghutne ka dard, jodon ki ghisaw) ka karan aur homeopathic ilaaj – diet aur exercise samet. Verified info, doctor-reviewed.',
  },
  'plantar-fasciitis': {
    metaTitle: 'Plantar Fasciitis – Edi Dard Ka Homeopathic Ilaaj',
    metaDescription: 'Plantar fasciitis (edi ka dard, paon tala dard) ka karan aur homeopathic ilaaj – diet aur gharelu upay. Verified info, doctor-reviewed.',
  },
  'tonsillitis': {
    metaTitle: 'Tonsillitis Ka Ilaaj Bina Operation – Homeopathy',
    metaDescription: 'Tonsillitis (tonsil ki sujan, gale mein dard) ka karan aur homeopathic ilaaj bina surgery. Verified info, doctor-reviewed. Homeopedia.in',
  },
  'varicose-veins': {
    metaTitle: 'Varicose Veins – Nason Ki Sujan Ka Ilaaj',
    metaDescription: 'Varicose veins (phuli hui naasein, paon mein dard) ka karan aur homeopathic ilaaj – diet aur lifestyle guide. Verified info, doctor-reviewed.',
  },
}

async function patch() {
  const diseases = await client.fetch(`*[_type == "disease" && !defined(metaTitle)]{ _id, "slug": slug.current, title }`)
  console.log(`Patching ${diseases.length} diseases...\n`)

  for (const d of diseases) {
    const meta = metaData[d.slug]
    if (!meta) {
      console.log(`⚠️  No meta defined for: ${d.title} (${d.slug})`)
      continue
    }
    await client.patch(d._id).set({ metaTitle: meta.metaTitle, metaDescription: meta.metaDescription }).commit()
    console.log(`✅ ${d.title}`)
  }

  console.log('\n🎉 Done — sab 17 diseases ke meta update ho gaye.')
}

patch().catch(console.error)
