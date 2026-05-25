import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
const client = createClient({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, dataset: 'production', token: process.env.SANITY_API_TOKEN, apiVersion: '2024-01-01', useCdn: false })
async function main() {
  const diseases = await client.fetch('*[_type=="disease"]{slug} | order(slug.current asc)')
  const symptoms = await client.fetch('*[_type=="symptom"]{slug} | order(slug.current asc)')
  const diets = await client.fetch('*[_type=="diet"]{slug} | order(slug.current asc)')
  console.log('=== DISEASES ===')
  diseases.forEach((d:any) => console.log(d.slug?.current))
  console.log('\n=== SYMPTOMS ===')
  symptoms.forEach((s:any) => console.log(s.slug?.current))
  console.log('\n=== DIETS ===')
  diets.forEach((d:any) => console.log(d.slug?.current))
}
main()
