import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

async function main() {
  const patches = [
    { slug: 'sjogrens-syndrome', category: 'Joints' },    // RA, AS se link
    { slug: 'bedwetting',        category: "Children's" }, // Autism, ADHD se link
    { slug: 'varicose-veins',    category: 'Skin' },       // 17 skin diseases se link
    { slug: 'dandruff',          category: 'Hair' },       // Hairfall, Alopecia se link
  ]

  for (const p of patches) {
    const doc = await client.fetch(`*[_type == "disease" && slug.current == $slug][0]{ _id, title }`, { slug: p.slug })
    if (!doc) { console.log(`❌ Not found: ${p.slug}`); continue }
    await client.patch(doc._id).set({ category: p.category }).commit()
    console.log(`✅ ${doc.title} → category: "${p.category}"`)
  }
  console.log('\nDone!')
}
main()
