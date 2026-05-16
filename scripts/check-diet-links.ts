import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

async function main() {
  const diets: any[] = await client.fetch(`*[_type == "diet"] { title, "slug": slug.current, relatedDiseaseSlug }`)
  const diseases: any[] = await client.fetch(`*[_type == "disease"] { title, "slug": slug.current }`)
  const diseaseSlugs = new Set(diseases.map(d => d.slug))

  console.log('\n=== DIET PAGE LINK CHECK ===\n')
  for (const diet of diets) {
    // disease→diet link: getDietBySlug(diseaseSlug) — so disease slug must match diet slug
    const diseaseForDiet = diseaseSlugs.has(diet.slug) ? '✅' : '❌ NO disease page with this slug'
    // diet→disease link: relatedDiseaseSlug must exist as a disease
    const dietToDisease = diet.relatedDiseaseSlug
      ? (diseaseSlugs.has(diet.relatedDiseaseSlug) ? '✅' : `❌ relatedDiseaseSlug "${diet.relatedDiseaseSlug}" not found`)
      : '⚠️  no relatedDiseaseSlug set'

    console.log(`/diet/${diet.slug}`)
    console.log(`  disease→diet (slug match): ${diseaseForDiet}`)
    console.log(`  diet→disease (relatedSlug): ${dietToDisease}`)
  }
}
main()
