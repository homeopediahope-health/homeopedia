import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

async function fix() {
  const ids = [
    'diet-gastritis',
    'diet-recurrent-mouth-ulcer',
    'diet-alopecia-areata',
    'diet-arthritis',
    'diet-recurrent-uti',
  ]

  for (const id of ids) {
    await client.delete(id)
    console.log('🗑️  Deleted:', id)
  }
  console.log('✅ All wrong-type documents deleted. Now re-seed them.')
}

fix().catch(console.error)
