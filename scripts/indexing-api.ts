import { google } from 'googleapis'
import * as fs from 'fs'
import * as http from 'http'
import * as url from 'url'
import * as readline from 'readline'

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID!
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET!
const TOKEN_PATH = '/Users/dr.shadabshomoeopathy/Documents/ Claude Homeopedia/indexing-token.json'
const REDIRECT_URI = 'urn:ietf:wg:oauth:2.0:oob'

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
]

async function getOAuthClient() {
  const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'))
    oauth2Client.setCredentials(token)
    return oauth2Client
  }

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/indexing'],
  })

  console.log('\n🔗 Ye link browser mein kholo:\n')
  console.log(authUrl)
  console.log('\n')

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  const code = await new Promise<string>((resolve) => {
    rl.question('Browser se code copy karke yahan paste karo: ', (ans) => {
      rl.close()
      resolve(ans.trim())
    })
  })

  const { tokens } = await oauth2Client.getToken(code)
  oauth2Client.setCredentials(tokens)
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens))
  console.log('✅ Token save ho gaya — agli baar seedha chalega\n')

  return oauth2Client
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
