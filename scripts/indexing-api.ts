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
  'https://www.homeopedia.in/diet/recurrent-uti',
  'https://www.homeopedia.in/diet/arthritis',
  'https://www.homeopedia.in/diet/alopecia-areata',
  'https://www.homeopedia.in/diet/acne',
  'https://www.homeopedia.in/diet/insomnia',
  'https://www.homeopedia.in/diet/menopause',
  'https://www.homeopedia.in/diet/dysmenorrhoea',
  'https://www.homeopedia.in/diet/gallstones',
  'https://www.homeopedia.in/diet/hyperthyroidism',
  'https://www.homeopedia.in/diet/uterine-fibroid',
  'https://www.homeopedia.in/diet/male-infertility',
  'https://www.homeopedia.in/diet/vitiligo',
  'https://www.homeopedia.in/diet/adhd',
  'https://www.homeopedia.in/diet/gastritis',
  'https://www.homeopedia.in/diet/recurrent-mouth-ulcer',
  'https://www.homeopedia.in/diet/varicose-veins',
  'https://www.homeopedia.in/diet/chronic-fatigue-syndrome',
  'https://www.homeopedia.in/diet/hashimotos-thyroiditis',
  'https://www.homeopedia.in/diet/anxiety-neurosis',
  'https://www.homeopedia.in/diet/depression',
  'https://www.homeopedia.in/diet/lactose-intolerance',
  'https://www.homeopedia.in/diet/adenoids',
  'https://www.homeopedia.in/diet/acanthosis-nigricans',
  'https://www.homeopedia.in/diet/ankylosing-spondylitis',
  'https://www.homeopedia.in/diet/erectile-dysfunction',
  'https://www.homeopedia.in/diet/frozen-shoulder',
  'https://www.homeopedia.in/diet/urticaria',
  'https://www.homeopedia.in/diet/leucorrhoea',
  'https://www.homeopedia.in/diet/endometriosis',
  'https://www.homeopedia.in/diet/ovarian-cyst',
  'https://www.homeopedia.in/diet/gerd',
  'https://www.homeopedia.in/diet/hypertension',
]

const ALL_URLS = [
  // Static pages
  'https://www.homeopedia.in/',
  'https://www.homeopedia.in/diseases',
  'https://www.homeopedia.in/about',
  'https://www.homeopedia.in/contact',
  'https://www.homeopedia.in/diet',
  'https://www.homeopedia.in/medicines',
  'https://www.homeopedia.in/blog',
  'https://www.homeopedia.in/symptoms',
  // Diet pages
  'https://www.homeopedia.in/diet/migraine',
  'https://www.homeopedia.in/diet/sciatica',
  'https://www.homeopedia.in/diet/hypothyroidism',
  'https://www.homeopedia.in/diet/rheumatoid-arthritis',
  'https://www.homeopedia.in/diet/ibs',
  'https://www.homeopedia.in/diet/kidney-stone',
  'https://www.homeopedia.in/diet/eczema',
  'https://www.homeopedia.in/diet/gout',
  'https://www.homeopedia.in/diet/constipation',
  'https://www.homeopedia.in/diet/ulcerative-colitis',
  'https://www.homeopedia.in/diet/diabetes',
  'https://www.homeopedia.in/diet/pcod',
  'https://www.homeopedia.in/diet/asthma',
  'https://www.homeopedia.in/diet/psoriasis',
  'https://www.homeopedia.in/diet/fatty-liver',
  'https://www.homeopedia.in/diet/hairfall',
  'https://www.homeopedia.in/diet/acidity',
  'https://www.homeopedia.in/diet/piles',
  'https://www.homeopedia.in/diet/acne',
  'https://www.homeopedia.in/diet/insomnia',
  'https://www.homeopedia.in/diet/menopause',
  'https://www.homeopedia.in/diet/dysmenorrhoea',
  'https://www.homeopedia.in/diet/gallstones',
  'https://www.homeopedia.in/diet/hyperthyroidism',
  'https://www.homeopedia.in/diet/uterine-fibroid',
  'https://www.homeopedia.in/diet/male-infertility',
  'https://www.homeopedia.in/diet/vitiligo',
  'https://www.homeopedia.in/diet/adhd',
  'https://www.homeopedia.in/diet/gastritis',
  'https://www.homeopedia.in/diet/recurrent-mouth-ulcer',
  'https://www.homeopedia.in/diet/alopecia-areata',
  'https://www.homeopedia.in/diet/arthritis',
  'https://www.homeopedia.in/diet/recurrent-uti',
  'https://www.homeopedia.in/diet/varicose-veins',
  'https://www.homeopedia.in/diet/chronic-fatigue-syndrome',
  'https://www.homeopedia.in/diet/hashimotos-thyroiditis',
  'https://www.homeopedia.in/diet/anxiety-neurosis',
  'https://www.homeopedia.in/diet/depression',
  'https://www.homeopedia.in/diet/lactose-intolerance',
  'https://www.homeopedia.in/diet/adenoids',
  'https://www.homeopedia.in/diet/acanthosis-nigricans',
  'https://www.homeopedia.in/diet/ankylosing-spondylitis',
  'https://www.homeopedia.in/diet/erectile-dysfunction',
  'https://www.homeopedia.in/diet/frozen-shoulder',
  'https://www.homeopedia.in/diet/urticaria',
  'https://www.homeopedia.in/diet/leucorrhoea',
  'https://www.homeopedia.in/diet/endometriosis',
  'https://www.homeopedia.in/diet/ovarian-cyst',
  'https://www.homeopedia.in/diet/gerd',
  'https://www.homeopedia.in/diet/hypertension',
  // Diseases
  'https://www.homeopedia.in/diseases/psoriasis',
  'https://www.homeopedia.in/diseases/psoriatic-arthritis',
  'https://www.homeopedia.in/diseases/thyroid',
  'https://www.homeopedia.in/diseases/hyperthyroidism',
  'https://www.homeopedia.in/diseases/hairfall',
  'https://www.homeopedia.in/diseases/alopecia',
  'https://www.homeopedia.in/diseases/rheumatoid-arthritis',
  'https://www.homeopedia.in/diseases/sciatica',
  'https://www.homeopedia.in/diseases/ibs',
  'https://www.homeopedia.in/diseases/migraine',
  'https://www.homeopedia.in/diseases/pcod',
  'https://www.homeopedia.in/diseases/asthma',
  'https://www.homeopedia.in/diseases/piles',
  'https://www.homeopedia.in/diseases/insomnia',
  'https://www.homeopedia.in/diseases/lichen',
  'https://www.homeopedia.in/diseases/eczema',
  'https://www.homeopedia.in/diseases/disc-bulge',
  'https://www.homeopedia.in/diseases/fissure',
  'https://www.homeopedia.in/diseases/allergy',
  'https://www.homeopedia.in/diseases/vitiligo',
  'https://www.homeopedia.in/diseases/dandruff',
  'https://www.homeopedia.in/diseases/urticaria',
  'https://www.homeopedia.in/diseases/anxiety',
  'https://www.homeopedia.in/diseases/depression',
  'https://www.homeopedia.in/diseases/back-pain',
  'https://www.homeopedia.in/diseases/obsessive-compulsive-disorder',
  'https://www.homeopedia.in/diseases/sjogrens-syndrome',
  'https://www.homeopedia.in/diseases/ankylosing-spondylitis',
  'https://www.homeopedia.in/diseases/ulcerative-colitis',
  'https://www.homeopedia.in/diseases/hashimoto-thyroiditis',
  'https://www.homeopedia.in/diseases/endometriosis',
  'https://www.homeopedia.in/diseases/sinusitis',
  'https://www.homeopedia.in/diseases/gout',
  'https://www.homeopedia.in/diseases/leucorrhoea',
  'https://www.homeopedia.in/diseases/cervical-spondylosis',
  'https://www.homeopedia.in/diseases/acne',
  'https://www.homeopedia.in/diseases/bedwetting',
  'https://www.homeopedia.in/diseases/adenoids',
  'https://www.homeopedia.in/diseases/tonsillitis',
  'https://www.homeopedia.in/diseases/frozen-shoulder',
  'https://www.homeopedia.in/diseases/arthritis',
  'https://www.homeopedia.in/diseases/autism',
  'https://www.homeopedia.in/diseases/varicose-veins',
  'https://www.homeopedia.in/diseases/acidity',
  'https://www.homeopedia.in/diseases/plantar-fasciitis',
  'https://www.homeopedia.in/diseases/acanthosis-nigricans',
  'https://www.homeopedia.in/diseases/fatty-liver',
  'https://www.homeopedia.in/diseases/kidney-stone',
  'https://www.homeopedia.in/diseases/osteoarthritis',
  'https://www.homeopedia.in/diseases/uterine-fibroid',
  'https://www.homeopedia.in/diseases/ringworm',
  'https://www.homeopedia.in/diseases/nasal-polyp',
  'https://www.homeopedia.in/diseases/menopause',
  'https://www.homeopedia.in/diseases/wart',
  'https://www.homeopedia.in/diseases/constipation',
  'https://www.homeopedia.in/diseases/mouth-ulcer',
  'https://www.homeopedia.in/diseases/chronic-fatigue-syndrome',
  'https://www.homeopedia.in/diseases/ovarian-cyst',
  'https://www.homeopedia.in/diseases/recurrent-cold',
  'https://www.homeopedia.in/diseases/adhd',
  'https://www.homeopedia.in/diseases/gastritis',
  'https://www.homeopedia.in/diseases/bronchitis',
  'https://www.homeopedia.in/diseases/tennis-elbow',
  'https://www.homeopedia.in/diseases/molluscum-contagiosum',
  'https://www.homeopedia.in/diseases/male-infertility',
  'https://www.homeopedia.in/diseases/carpal-tunnel-syndrome',
  'https://www.homeopedia.in/diseases/bells-palsy',
  'https://www.homeopedia.in/diseases/recurrent-uti',
  'https://www.homeopedia.in/diseases/dysmenorrhoea',
  'https://www.homeopedia.in/diseases/bph',
  'https://www.homeopedia.in/diseases/trigeminal-neuralgia',
  'https://www.homeopedia.in/diseases/vertigo',
  'https://www.homeopedia.in/diseases/erectile-dysfunction',
  'https://www.homeopedia.in/diseases/gallstones',
  'https://www.homeopedia.in/diseases/juvenile-arthritis',
  'https://www.homeopedia.in/diseases/nail-fungus',
  'https://www.homeopedia.in/diseases/prediabetes',
  'https://www.homeopedia.in/diseases/melasma',
  'https://www.homeopedia.in/diseases/post-covid-syndrome',
  'https://www.homeopedia.in/diseases/breast-fibroadenoma',
  'https://www.homeopedia.in/diseases/allergic-rhinitis',
  'https://www.homeopedia.in/diseases/delayed-milestones',
  'https://www.homeopedia.in/diseases/gerd',
  'https://www.homeopedia.in/diseases/ptsd',
  'https://www.homeopedia.in/diseases/postpartum-depression',
  'https://www.homeopedia.in/diseases/recurrent-ear-infection',
  'https://www.homeopedia.in/diseases/anal-fistula',
  'https://www.homeopedia.in/diseases/tinnitus',
  'https://www.homeopedia.in/diseases/dyspepsia',
  'https://www.homeopedia.in/diseases/scalp-psoriasis',
  'https://www.homeopedia.in/diseases/teething-trouble',
  'https://www.homeopedia.in/diseases/worm-infestation',
  'https://www.homeopedia.in/diseases/guttate-psoriasis',
  'https://www.homeopedia.in/diseases/atopic-dermatitis',
  'https://www.homeopedia.in/diseases/stye',
  'https://www.homeopedia.in/diseases/dry-eye-syndrome',
  'https://www.homeopedia.in/diseases/chickenpox',
  'https://www.homeopedia.in/diseases/chronic-otitis-media',
  'https://www.homeopedia.in/diseases/vocal-cord-nodule',
  'https://www.homeopedia.in/diseases/lactose-intolerance',
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
