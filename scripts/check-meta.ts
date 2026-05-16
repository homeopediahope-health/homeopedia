import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

async function check() {
  const diseases = await client.fetch(`*[_type == "disease"]{ title, "slug": slug.current, metaTitle, metaDescription } | order(title asc)`)
  const noTitle = diseases.filter((d: any) => !d.metaTitle)
  const noDesc = diseases.filter((d: any) => !d.metaDescription)
  const noBoth = diseases.filter((d: any) => !d.metaTitle || !d.metaDescription)

  console.log(`Total diseases: ${diseases.length}`)
  console.log(`Missing metaTitle: ${noTitle.length}`)
  console.log(`Missing metaDescription: ${noDesc.length}`)
  console.log(`\nDiseases with missing meta (${noBoth.length}):`)
  noBoth.forEach((d: any) => {
    console.log(` - ${d.title} (${d.slug}) | title: ${d.metaTitle ? '✅' : '❌'} | desc: ${d.metaDescription ? '✅' : '❌'}`)
  })
}

check().catch(console.error)
