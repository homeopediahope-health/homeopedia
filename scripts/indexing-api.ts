import { google } from 'googleapis'
import * as fs from 'fs'

const CREDS_FILE = '/Users/dr.shadabshomoeopathy/Documents/ Claude Homeopedia/client_secret_572467145988-n9lssrl4tlusfceiaf4ahh4396g01ujs.apps.googleusercontent.com.json'
const creds = JSON.parse(fs.readFileSync(CREDS_FILE, 'utf8')).installed
const CLIENT_ID = creds.client_id
const CLIENT_SECRET = creds.client_secret
const TOKEN_PATH = '/Users/dr.shadabshomoeopathy/Documents/ Claude Homeopedia/indexing-token.json'
const REDIRECT_URI = 'urn:ietf:wg:oauth:2.0:oob'

// Usage:
//   npx tsx scripts/indexing-api.ts          → shows auth URL (if no token)
//   npx tsx scripts/indexing-api.ts <CODE>   → saves token and submits all URLs
const CODE_ARG = process.argv[2]

const URLS = [
  'https://homeopedia.in/',
  'https://homeopedia.in/diseases',
  'https://homeopedia.in/diseases/psoriasis',
  'https://homeopedia.in/diseases/psoriatic-arthritis',
  'https://homeopedia.in/diseases/thyroid',
  'https://homeopedia.in/diseases/hyperthyroidism',
  'https://homeopedia.in/diseases/hairfall',
  'https://homeopedia.in/diseases/alopecia',
  'https://homeopedia.in/diseases/rheumatoid-arthritis',
  'https://homeopedia.in/diseases/sciatica',
  'https://homeopedia.in/diseases/ibs',
  'https://homeopedia.in/diseases/migraine',
  'https://homeopedia.in/diseases/pcod',
  'https://homeopedia.in/diseases/asthma',
  'https://homeopedia.in/diseases/piles',
  'https://homeopedia.in/diseases/insomnia',
  'https://homeopedia.in/diseases/lichen',
  'https://homeopedia.in/diseases/eczema',
  'https://homeopedia.in/diseases/disc-bulge',
  'https://homeopedia.in/diseases/fissure',
  'https://homeopedia.in/diseases/allergy',
  'https://homeopedia.in/diseases/vitiligo',
  'https://homeopedia.in/diseases/dandruff',
  'https://homeopedia.in/diseases/urticaria',
  'https://homeopedia.in/diseases/anxiety',
  'https://homeopedia.in/diseases/depression',
  'https://homeopedia.in/diseases/back-pain',
  'https://homeopedia.in/diseases/ocd',
]

async function getOAuthClient() {
  const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

  // Token already saved — use it directly
  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'))
    oauth2Client.setCredentials(token)
    return oauth2Client
  }

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/indexing'],
  })

  // If code passed as argument — exchange it for token
  if (CODE_ARG) {
    const { tokens } = await oauth2Client.getToken(CODE_ARG)
    oauth2Client.setCredentials(tokens)
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens))
    console.log('✅ Token save ho gaya!\n')
    return oauth2Client
  }

  // No code — just show the URL and exit
  console.log('\n🔗 Ye link browser mein kholo:\n')
  console.log(authUrl)
  console.log('\nCode milne ke baad run karo:')
  console.log('npx tsx scripts/indexing-api.ts PASTE_CODE_HERE\n')
  process.exit(0)
}

async function submitUrls() {
  const auth = await getOAuthClient()

  console.log(`📤 ${URLS.length} URLs submit ho rahe hain...\n`)

  for (const u of URLS) {
    try {
      const res = await (auth as any).request({
        url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
        method: 'POST',
        data: { url: u, type: 'URL_UPDATED' },
      })
      console.log(`✅ ${u} — ${res.status}`)
    } catch (e: any) {
      console.log(`❌ ${u} — ${e.message}`)
    }
  }

  console.log('\n🎉 Done!')
}

submitUrls()
