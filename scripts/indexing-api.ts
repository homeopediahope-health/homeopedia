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
//   npx tsx scripts/indexing-api.ts new      → sirf NEW_URLS submit karta hai (quota save)
const CODE_ARG = process.argv[2]

// Sirf naye URLs — har baar naye disease add hone pe yahan add karo
const NEW_URLS = [
  'https://homeopedia.in/diseases/recurrent-ear-infection',
]

const ALL_URLS = [
  // Static pages
  'https://homeopedia.in/',
  'https://homeopedia.in/diseases',
  'https://homeopedia.in/about',
  'https://homeopedia.in/contact',
  'https://homeopedia.in/diet',
  'https://homeopedia.in/medicines',
  'https://homeopedia.in/blog',
  'https://homeopedia.in/symptoms',
  // 50 diseases
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
  'https://homeopedia.in/diseases/obsessive-compulsive-disorder',
  'https://homeopedia.in/diseases/sjogrens-syndrome',
  'https://homeopedia.in/diseases/ankylosing-spondylitis',
  'https://homeopedia.in/diseases/ulcerative-colitis',
  'https://homeopedia.in/diseases/hashimoto-thyroiditis',
  'https://homeopedia.in/diseases/endometriosis',
  'https://homeopedia.in/diseases/sinusitis',
  'https://homeopedia.in/diseases/gout',
  'https://homeopedia.in/diseases/leucorrhoea',
  'https://homeopedia.in/diseases/cervical-spondylosis',
  'https://homeopedia.in/diseases/acne',
  'https://homeopedia.in/diseases/bedwetting',
  'https://homeopedia.in/diseases/adenoids',
  'https://homeopedia.in/diseases/tonsillitis',
  'https://homeopedia.in/diseases/frozen-shoulder',
  'https://homeopedia.in/diseases/arthritis',
  'https://homeopedia.in/diseases/autism',
  'https://homeopedia.in/diseases/varicose-veins',
  'https://homeopedia.in/diseases/acidity',
  'https://homeopedia.in/diseases/plantar-fasciitis',
  'https://homeopedia.in/diseases/acanthosis-nigricans',
  'https://homeopedia.in/diseases/fatty-liver',
  'https://homeopedia.in/diseases/kidney-stone',
  'https://homeopedia.in/diseases/osteoarthritis',
  'https://homeopedia.in/diseases/uterine-fibroid',
  'https://homeopedia.in/diseases/ringworm',
  'https://homeopedia.in/diseases/nasal-polyp',
  'https://homeopedia.in/diseases/menopause',
  'https://homeopedia.in/diseases/wart',
  'https://homeopedia.in/diseases/constipation',
  'https://homeopedia.in/diseases/mouth-ulcer',
  'https://homeopedia.in/diseases/chronic-fatigue-syndrome',
  'https://homeopedia.in/diseases/ovarian-cyst',
  'https://homeopedia.in/diseases/recurrent-cold',
  'https://homeopedia.in/diseases/adhd',
  'https://homeopedia.in/diseases/gastritis',
  'https://homeopedia.in/diseases/bronchitis',
  'https://homeopedia.in/diseases/tennis-elbow',
  'https://homeopedia.in/diseases/molluscum-contagiosum',
  'https://homeopedia.in/diseases/male-infertility',
  'https://homeopedia.in/diseases/carpal-tunnel-syndrome',
  'https://homeopedia.in/diseases/bells-palsy',
  'https://homeopedia.in/diseases/recurrent-uti',
  'https://homeopedia.in/diseases/dysmenorrhoea',
  'https://homeopedia.in/diseases/bph',
  'https://homeopedia.in/diseases/trigeminal-neuralgia',
  'https://homeopedia.in/diseases/vertigo',
  'https://homeopedia.in/diseases/erectile-dysfunction',
  'https://homeopedia.in/diseases/gallstones',
  'https://homeopedia.in/diseases/juvenile-arthritis',
  'https://homeopedia.in/diseases/nail-fungus',
  'https://homeopedia.in/diseases/prediabetes',
  'https://homeopedia.in/diseases/melasma',
  'https://homeopedia.in/diseases/post-covid-syndrome',
  'https://homeopedia.in/diseases/breast-fibroadenoma',
  'https://homeopedia.in/diseases/allergic-rhinitis',
  'https://homeopedia.in/diseases/delayed-milestones',
  'https://homeopedia.in/diseases/gerd',
  'https://homeopedia.in/diseases/ptsd',
  'https://homeopedia.in/diseases/postpartum-depression',
  'https://homeopedia.in/diseases/recurrent-ear-infection',
]

const URLS = CODE_ARG === 'new' ? NEW_URLS : ALL_URLS

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
