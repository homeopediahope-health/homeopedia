import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token:     process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const arnica = {
  _id:   'medicine-arnica',
  _type: 'medicine',

  name:         'Arnica Montana',
  slug:         { _type: 'slug', current: 'arnica' },
  category:     'plant',
  alt:          'Arnica · Mountain Daisy',
  commonUses:   'Injury, bruises, muscle pain',
  source:       'Mountain plant (Europe)',
  readMin:      12,
  hasVideo:     true,
  severity:     'common',
  metaTitle:    'Arnica Montana — Injury, Neel, Muscle Pain ki #1 Homeopathic Medicine | Homeopedia.in',
  metaDescription: 'Arnica Montana (Mountain Daisy) — chot, neel, surgery recovery, sports injury ke liye classical homeopathic remedy. Potency, uses, FAQs, modalities. Doctor-reviewed Hinglish guide.',

  intro: 'Arnica Montana homeopathy ki sabse famous medicine hai — "injury medicine" ke naam se jaani jaati hai. Ye Europe ki pahadi flower hai (Mountain Daisy / Leopard\'s Bane), jo 200+ saalon se chot, neel, sujan aur muscle pain ke liye use ho rahi hai. Modern times mein post-surgery recovery, sports injury, aur emotional shock ke liye bhi prescribe hoti hai. Boericke aur Allen dono mein Arnica ki detailed picture milti hai.',

  facts: [
    { _key: 'f1', ic: '🌿', t: 'Plant-based',   d: 'Mountain Daisy flower' },
    { _key: 'f2', ic: '🩹', t: '#1 Injury remedy', d: 'Chot, neel, sujan' },
    { _key: 'f3', ic: '🏥', t: 'Pre/post surgery', d: 'Recovery fast hoti hai' },
    { _key: 'f4', ic: '🌍', t: '200+ years use',   d: 'Classical staple' },
  ],

  keynotes: [
    { _key: 'k1', ic: '⭐', t: '#1 Injury medicine',    d: 'Har tarah ki chot — gir jaana, neel, sujan, internal bleeding' },
    { _key: 'k2', ic: '⭐', t: '"Mujhe kuch nahi hua"', d: 'Patient bolta hai sab theek hai, jabki actually chot lagi hoti hai (key mental symptom)' },
    { _key: 'k3', ic: '⭐', t: '"Bed sakht lagta hai"', d: 'Body in pain — chahe soft bed ho, "patthar pe so raha" jaisa feel' },
    { _key: 'k4', ic: '⭐', t: 'Pre/post surgery',      d: 'Operation se pehle aur baad — bleeding aur recovery dono mein madad' },
    { _key: 'k5', ic: '⭐', t: 'Bruised, sore feeling', d: 'Pura body "kisi ne maara hai" jaisa lagta hai' },
  ],

  keyUses: [
    { _key: 'u1', ic: '🩹', t: 'Chot / Injury',         d: 'Gir jaana, dard, sujan, neel padna — turant lein' },
    { _key: 'u2', ic: '💪', t: 'Muscle pain',            d: 'Gym, exercise, overexertion ke baad muscle sore' },
    { _key: 'u3', ic: '🟣', t: 'Bruising / Neel',        d: 'Chot ke baad blue/black mark — internal bleeding bhi' },
    { _key: 'u4', ic: '🏥', t: 'Surgery se pehle/baad',  d: 'Tissue trauma kam, recovery fast' },
    { _key: 'u5', ic: '🧠', t: 'Head injury',            d: 'Concussion, sir pe chot — turant chahiye' },
    { _key: 'u6', ic: '🦷', t: 'Dental work',            d: 'Tooth extraction, root canal ke baad swelling/dard' },
    { _key: 'u7', ic: '🤰', t: 'Labour (delivery)',      d: 'Soreness post-delivery — doctor ki advice par' },
    { _key: 'u8', ic: '😣', t: 'Emotional shock',        d: 'Sudden bad news, accident ka mental impact' },
    { _key: 'u9', ic: '🏃', t: 'Sports injury',          d: 'Athletes ki standby remedy' },
  ],

  potency: [
    { _key: 'p1', p: '30C',               how: 'Surface level, mild',  when: 'Naye/acute injury — chot lagne ke turant baad' },
    { _key: 'p2', p: '200C',              how: 'Deeper action',        when: 'Purani recurring chot, chronic sore feeling' },
    { _key: 'p3', p: '1M',               how: 'Very deep',            when: 'Constitutional, doctor decide karega' },
    { _key: 'p4', p: 'Q (Mother Tincture)', how: 'External application', when: 'Cream/lotion form — chot ke upar lagaane ke liye (open wound nahi)' },
  ],

  dosage: 'General guidance: 4-5 pills mooh mein chusne ke liye, chabaye nahi. Khaane se 15-30 min pehle ya baad. Pani mein bhi ghol sakte hain bachhon ke liye. Frequency aur duration doctor decide karenge — har case alag hota hai (kis tarah ki chot, kitni purani, patient ki body type). Acute mein 2-3 hourly, chronic mein dino ka gap. Self-medication na karein.',

  mindSymptoms: [
    { _key: 'ms1', t: '"Sab theek hai" denial',        d: 'Chot lagi hai, dard ho raha, lekin "kuch nahi hua" bolte hain' },
    { _key: 'ms2', t: 'Stranger ko approach se irritated', d: 'Akele rehna chahte hain, koi paas aaye to mood off' },
    { _key: 'ms3', t: 'Fear of being touched',         d: 'Chhoona ya nazdeek aana avoid karte hain — dard ka dar' },
    { _key: 'ms4', t: 'Stupor / unconscious tendency', d: 'Severe injury mein zyada sone ki tendency' },
    { _key: 'ms5', t: 'Hopelessness post-trauma',      d: '"Ab kuch nahi hoga" wali feeling — accident ke baad' },
    { _key: 'ms6', t: 'Fear of sudden death',          d: 'Anxious, sudden cardiac event ka dar' },
  ],

  physicalSymptoms: [
    { _key: 'ps1', area: 'Head',         symptoms: ['Sir chakrana injury ke baad', 'Headache — hammering, throbbing', 'Scalp tender, chhoone se dard'] },
    { _key: 'ps2', area: 'Eyes',         symptoms: ['Black eye (chot se neel)', 'Bloodshot eyes overuse se', 'Retinal hemorrhage'] },
    { _key: 'ps3', area: 'Throat/Chest', symptoms: ['Sore throat from overuse (singers)', 'Chest pain bruised feeling', 'Cough dry, hoarse'] },
    { _key: 'ps4', area: 'Stomach',      symptoms: ['Nausea after injury', 'Vomiting blood (post-trauma)', 'Acidity from emotional stress'] },
    { _key: 'ps5', area: 'Muscles',      symptoms: ['Body sore, "bed sakht lagta hai"', 'Stiffness after exertion', 'Muscle bruising deep'] },
    { _key: 'ps6', area: 'Skin',         symptoms: ['Bruises, black-blue spots', 'Boils, pus formation', 'Petechiae (small red dots)'] },
  ],

  modalities: {
    worse:  ['Touch karne se', 'Movement se', 'Damp cold se', 'Wine/alcohol se', 'Lying on left side'],
    better: ['Lying down with head low', 'Stretching out', 'Open air mein'],
  },

  indications: [
    { _key: 'i1', diseaseSlug: 'sciatica',        diseaseName: 'Sciatica',          why: 'Disc se bhar/dard ho — pressure trauma' },
    { _key: 'i2', diseaseSlug: 'arthritis',        diseaseName: 'Arthritis',         why: 'Bruised sore feeling joint mein' },
    { _key: 'i3', diseaseSlug: 'frozen-shoulder',  diseaseName: 'Frozen Shoulder',   why: 'Trauma ya overuse se shoulder pain' },
    { _key: 'i4', diseaseSlug: 'migraine',         diseaseName: 'Migraine',          why: 'Head injury ke baad started ho' },
    { _key: 'i5', diseaseSlug: 'cervical',         diseaseName: 'Cervical Spondylosis', why: 'Whiplash ya cervical strain ke baad' },
  ],

  related: [
    { _key: 'r1', medicineSlug: 'rhus-tox',   medicineName: 'Rhus Toxicodendron' },
    { _key: 'r2', medicineSlug: 'bryonia',     medicineName: 'Bryonia Alba' },
    { _key: 'r3', medicineSlug: 'belladonna',  medicineName: 'Belladonna' },
  ],

  foodRestrictions: 'Standard rules — medicine lene se 15-30 min pehle aur baad kuch na khaayein. Strong smell wali cheezein (coffee, kachha pyaaz, pudina, camphor, kapur) avoid karein — homeopathic medicine ka effect kam ho sakta hai. Alcohol bilkul avoid kare during treatment.',

  pregnancy: 'Homeopathic medicines pregnancy aur bachhon mein generally safe maani jaati hain, lekin qualified homeopath ki advice ke bina koi bhi medicine na lein. Dose, potency, frequency har case mein alag hoti hai. Self-medication harmful ho sakta hai.',

  comparisons: [
    {
      _key: 'c1',
      n: 'Arnica vs Rhus Tox',
      rows: [
        { _key: 'cr1', factor: 'Best for',   medicineValue: 'Fresh injury / bruise',        compareValue: 'Purani joint stiffness' },
        { _key: 'cr2', factor: 'Type of pain', medicineValue: 'Bruised, sore',              compareValue: 'Stiff, like rusty' },
        { _key: 'cr3', factor: 'Motion',      medicineValue: 'Worse',                       compareValue: 'Better (after first movement)' },
        { _key: 'cr4', factor: 'Touch',       medicineValue: 'Worse',                       compareValue: 'Better with firm pressure' },
        { _key: 'cr5', factor: 'When to take', medicineValue: 'Chot lagne ke turant',       compareValue: 'Subah uthne par stiffness' },
      ],
    },
    {
      _key: 'c2',
      n: 'Arnica vs Bryonia',
      rows: [
        { _key: 'cr6', factor: 'Type of pain', medicineValue: 'Bruised',                   compareValue: 'Stitching, sharp' },
        { _key: 'cr7', factor: 'Motion',        medicineValue: 'Worse',                    compareValue: 'Worse (lying still better)' },
        { _key: 'cr8', factor: 'Thirst',        medicineValue: 'Reduced',                  compareValue: 'Excessive — large quantities' },
        { _key: 'cr9', factor: 'Best for',      medicineValue: 'Trauma, fresh injury',     compareValue: 'Inflammation worse motion' },
      ],
    },
  ],

  myths: [
    { _key: 'm1', q: 'Arnica steroid hai?',                   a: 'NAHI — Arnica plant-based homeopathic medicine hai. Lab tested aur 200+ years safe use ki history hai. Steroid bilkul nahi hai.' },
    { _key: 'm2', q: 'Arnica sirf chot ke liye hai?',         a: 'GALAT — Arnica mental trauma (shock, fear after accident), surgery recovery, dental work, even chronic conditions mein bhi use hoti hai jaha "bruised feeling" ho.' },
    { _key: 'm3', q: 'Arnica cream open wound par laga sakte hain?', a: 'NAHI — Arnica Q (Mother Tincture) ya cream sirf intact skin par. Open cut/wound par lagane se irritation ho sakti hai.' },
    { _key: 'm4', q: '200 potency 30 se zyada strong hai?',   a: 'Strong nahi, DEEPER acting hai. 30C surface symptoms ke liye, 200C deeper level par kaam karti hai. Doctor decide karega kya chahiye.' },
    { _key: 'm5', q: 'Ek saath multiple medicines le sakte hain?', a: 'Classical homeopathy mein NAHI — ek time par ek hi remedy. Combination doctor specifically prescribe kare to alag baat.' },
  ],

  doctorTake: 'Mere 15+ years ke clinical practice mein Arnica Montana sabse zyada use hone wali medicine hai. Specially injury cases mein — 90%+ patients ko 2-3 din mein significant relief milta hai. Surgery recovery ke liye routinely prescribe karta hoon. Sports injuries mein peak performance maintain karne mein bahut helpful. Lekin har patient ki potency aur dose alag — self-medication se avoid karein.',

  faqs: [
    { _key: 'faq1',  q: 'Arnica 30 le ya 200?',                  a: 'Naye/acute injury (turant lagi chot) ke liye 30C. Purani sore feeling ya chronic muscle pain ke liye 200C. Lekin sahi potency aur frequency doctor decide karega — case ke saath vary karti hai.' },
    { _key: 'faq2',  q: 'Arnica kitne din tak le sakte hain?',    a: 'Acute injury mein 3-5 din. Symptoms relief hone par stop karein. Long-term chronic use sirf doctor ki supervision mein. Continuous lene se proving ka risk hota hai.' },
    { _key: 'faq3',  q: 'Arnica ke side effects kya hain?',       a: 'Correct potency aur dose mein side effects nahi hote. Overdose ya wrong potency lene par "proving" — symptoms jo treat kar rahe wo aur badh sakte hain. Doctor consult zaroori.' },
    { _key: 'faq4',  q: 'Arnica pregnancy mein safe hai?',        a: 'Generally safe — labour ke baad soreness mein bhi use hoti hai. Lekin pregnancy mein KOI bhi homeopathic medicine bina qualified homeopath ki rai ke na lein.' },
    { _key: 'faq5',  q: 'Bachhon ko Arnica de sakte hain?',       a: 'Haan — chot lagne par bachhon ke liye safe hai. Pills paani mein ghol ke de sakte hain. Lekin dose aur potency doctor se confirm karein.' },
    { _key: 'faq6',  q: 'Arnica cream aur Arnica pills mein kya fark?', a: 'Pills internal — body ke andar kaam karti hain. Cream/gel/oil external — chot wali jagah par lagane ke liye. Dono saath use kar sakte hain (open wound par cream nahi).' },
    { _key: 'faq7',  q: 'Coffee peene ke baad Arnica le sakte hain?', a: '30 min ka gap rakhein. Coffee, pudina, kachha pyaaz — homeopathic medicine ka effect kam karte hain. Allopathic medicine aur Arnica saath safe hain (15-30 min gap).' },
    { _key: 'faq8',  q: 'Surgery se pehle Arnica kab lein?',      a: 'Surgery se 2-3 din pehle 30C, surgery wale din morning, aur post-surgery recovery period mein. Surgeon ko inform karein. Bleeding tendency wale patients special care chahiye.' },
    { _key: 'faq9',  q: 'Arnica neel padne mein kab tak relief deti hai?', a: 'Acute bruise mein 24-48 ghante mein discoloration kam start hoti hai. Pura clear hone mein 5-7 din. Severity par depend karta hai.' },
    { _key: 'faq10', q: 'Arnica overdose hone par kya hota hai?', a: 'Homeopathic potency mein toxic effect nahi (succussion se diluted hota hai). Lekin continuous wrong use se "proving" — body Arnica ke symptoms produce karne lagti hai. Stop karne par theek ho jata hai.' },
    { _key: 'faq11', q: 'Arnica vs ice pack — konsa better hai?', a: 'Dono together best. Ice acute swelling kam karta hai (24 hrs), Arnica internal healing aur bruising par kaam karta hai. Complement karte hain, replace nahi.' },
    { _key: 'faq12', q: 'Mental shock ke liye Arnica kaise lein?', a: 'Sudden bad news, accident ka mental impact ho to Arnica 200C single dose. Saath mein Aconite (panic) ya Ignatia (grief) consider kiya jaata hai — doctor decide karega.' },
    { _key: 'faq13', q: 'Diabetic patient Arnica le sakte hain?', a: 'Haan, safe hai — diabetes pe direct effect nahi. Lekin healing slow hota hai diabetics mein, isliye doctor monitor kare. Sugar levels normal range mein rakhein.' },
    { _key: 'faq14', q: 'Arnica aur Rhus Tox saath le sakte hain?', a: 'Generally NAHI — ek time par ek medicine. Doctor specific combination prescribe kare to alag. Fresh injury ke liye Arnica, baad mein stiffness rahe to Rhus Tox switch karte hain.' },
    { _key: 'faq15', q: 'Arnica gel kitni baar lagayein?',         a: 'Day mein 2-3 baar — chot wali jagah par halka massage ke saath. Open cut/wound par nahi. 5-7 din mein result nahi to doctor ko dikhayein.' },
  ],
}

async function seed() {
  try {
    console.log('Seeding Arnica Montana...')
    const result = await client.createOrReplace(arnica)
    console.log('Done:', result._id)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seed()
