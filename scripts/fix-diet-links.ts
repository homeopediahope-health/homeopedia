import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

async function main() {
  // hypothyroidism diet → relatedDiseaseSlug should be "thyroid" (actual disease slug)
  const hypo = await client.fetch(`*[_type == "diet" && slug.current == "hypothyroidism"][0]{ _id }`)
  if (hypo) {
    await client.patch(hypo._id).set({ relatedDiseaseSlug: 'thyroid' }).commit()
    console.log('✅ hypothyroidism diet → relatedDiseaseSlug: "thyroid"')
  }

  // diabetes diet → relatedDiseaseSlug already "prediabetes" which is correct
  // but now getDietBySlug("prediabetes") will also find it via relatedDiseaseSlug match
  const diab = await client.fetch(`*[_type == "diet" && slug.current == "diabetes"][0]{ _id, relatedDiseaseSlug }`)
  console.log(`✅ diabetes diet relatedDiseaseSlug: "${diab?.relatedDiseaseSlug}" — prediabetes page pe button ab aayega`)
}
main()
