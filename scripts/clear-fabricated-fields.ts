import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

async function clearFabricatedFields() {
  const diseases = await client.fetch(`*[_type == "disease"]{ _id, title }`)
  console.log(`Total diseases: ${diseases.length}`)

  for (const d of diseases) {
    await client
      .patch(d._id)
      .unset(['homeopathyLimitations', 'ccrhEvidence'])
      .commit()
    console.log(`✅ Cleared: ${d.title}`)
  }

  console.log('\n🎉 Done — homeopathyLimitations aur ccrhEvidence sab diseases se remove ho gaye.')
}

clearFabricatedFields().catch(console.error)
