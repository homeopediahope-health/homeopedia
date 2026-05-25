import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
const client = createClient({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, dataset: 'production', token: process.env.SANITY_API_TOKEN, apiVersion: '2024-01-01', useCdn: false })
async function main() {
  const tests = await client.fetch('*[_type=="labTest"]{_id, name, slug} | order(name asc)')
  tests.forEach((t:any) => console.log(t._id, '|', t.slug?.current))
}
main()
