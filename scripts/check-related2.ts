import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

async function main() {
  const diseases: any[] = await client.fetch(`*[_type == "disease"] { title, "slug": slug.current, category }`)
  
  // Find dandruff, sjogrens, bedwetting, varicose
  const targets = ['dandruff', 'sjogrens-syndrome', 'bedwetting', 'varicose-veins', 'hairfall', 'alopecia', 'scalp-psoriasis']
  for (const slug of targets) {
    const d = diseases.find(x => x.slug === slug)
    if (d) console.log(`${d.slug} → category: "${d.category}"`)
    else console.log(`${slug} → NOT FOUND in Sanity`)
  }
  
  // Show all "Joints" diseases
  console.log('\n=== Joints category ===')
  diseases.filter(x => x.category === 'Joints').forEach(d => console.log(`  ${d.title} (${d.slug})`))
  
  console.log('\n=== Hair category ===')
  diseases.filter(x => x.category === 'Hair').forEach(d => console.log(`  ${d.title} (${d.slug})`))
  
  console.log('\n=== Children\'s category ===')
  diseases.filter(x => x.category === "Children's").forEach(d => console.log(`  ${d.title} (${d.slug})`))
}
main()
