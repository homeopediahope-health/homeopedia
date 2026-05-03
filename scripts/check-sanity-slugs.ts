import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const INDEXED = [
  'psoriasis','psoriatic-arthritis','thyroid','hyperthyroidism','hairfall','alopecia',
  'rheumatoid-arthritis','sciatica','ibs','migraine','pcod','asthma','piles','insomnia',
  'lichen','eczema','disc-bulge','fissure','allergy','vitiligo','dandruff','urticaria',
  'anxiety','depression','back-pain','obsessive-compulsive-disorder','sjogrens-syndrome',
  'ankylosing-spondylitis','ulcerative-colitis','hashimoto-thyroiditis','endometriosis',
  'sinusitis','gout','leucorrhoea','cervical-spondylosis','acne','bedwetting','adenoids',
  'tonsillitis','frozen-shoulder','arthritis','autism','varicose-veins','acidity',
  'plantar-fasciitis','acanthosis-nigricans','fatty-liver','kidney-stone','osteoarthritis',
  'uterine-fibroid','ringworm','nasal-polyp','menopause','wart','constipation',
  'mouth-ulcer','chronic-fatigue-syndrome','ovarian-cyst','recurrent-cold',
]

async function check() {
  const docs = await client.fetch('*[_type=="disease"]{slug}')
  const sanitySlugs: string[] = docs.map((d: any) => d.slug.current).sort()
  console.log(`\nSanity mein total: ${sanitySlugs.length} diseases\n`)

  const notIndexed = sanitySlugs.filter(s => !INDEXED.includes(s))
  if (notIndexed.length === 0) {
    console.log('✅ Sab indexed hain — koi baaki nahi!')
  } else {
    console.log(`❌ Ye ${notIndexed.length} disease(s) Sanity mein hain lekin indexed NAHI:`)
    notIndexed.forEach(s => console.log(`  - ${s}`))
  }

  const notInSanity = INDEXED.filter(s => !sanitySlugs.includes(s))
  if (notInSanity.length > 0) {
    console.log(`\n⚠️  Ye indexed hain lekin Sanity mein NAHI milya:`)
    notInSanity.forEach(s => console.log(`  - ${s}`))
  }
}

check()
