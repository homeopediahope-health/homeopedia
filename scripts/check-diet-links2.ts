import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token:
    'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

async function check() {
  const docs = await client.fetch('*[_type == "diet"]{_id, "slug": slug.current, relatedDiseaseSlug} | order(slug.current asc)')
  console.log('\n--- Diet charts relatedDiseaseSlug status ---\n')
  docs.forEach((d: any) => {
    const status = d.relatedDiseaseSlug ? `✅ ${d.relatedDiseaseSlug}` : '❌ MISSING'
    console.log(`${d.slug.padEnd(35)} ${status}`)
  })
}

check().catch(console.error)
