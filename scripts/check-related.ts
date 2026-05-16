import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

async function main() {
  const diseases: any[] = await client.fetch(`*[_type == "disease"] | order(category asc) { title, "slug": slug.current, category, "typeLinks": types[].diseasePageSlug }`)

  const catMap: Record<string, any[]> = {}
  for (const d of diseases) {
    const cat = d.category || 'NONE'
    if (!catMap[cat]) catMap[cat] = []
    catMap[cat].push(d)
  }

  console.log('\n=== DISEASES WITH NO AUTO-RELATED ===\n')
  for (const [cat, list] of Object.entries(catMap)) {
    if (list.length === 1) {
      const d = list[0]
      const crossLinked = diseases.filter(x => x.typeLinks?.includes(d.slug))
      console.log(`❌ ${d.title} | ${d.slug} | cat: "${cat}" | cross-links: ${crossLinked.length}`)
    }
  }

  console.log('\n=== ALL CATEGORIES ===\n')
  for (const [cat, list] of Object.entries(catMap).sort()) {
    const mark = list.length === 1 ? '⚠️ ' : '✅'
    console.log(`${mark} "${cat}" — ${list.length}`)
    if (list.length <= 2) for (const d of list) console.log(`    → ${d.title} (${d.slug})`)
  }
}

main()
