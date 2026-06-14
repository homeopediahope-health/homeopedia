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

const nuxVomica = {
  _id:   'medicine-nux-vomica',
  _type: 'medicine',

  name:         'Nux Vomica',
  slug:         { _type: 'slug', current: 'nux-vomica' },
  category:     'plant',
  alt:          'Strychnos · Poison Nut',
  commonUses:   'Acidity, hangover, irritability',
  source:       'Plant seed (India/SE Asia)',
  readMin:      11,
  hasVideo:     true,
  severity:     'common',
  metaTitle:    'Nux Vomica — Acidity, Hangover, Irritability ki Classical Homeopathic Remedy | Homeopedia.in',
  metaDescription: 'Nux Vomica — modern lifestyle ki sabse important medicine. Acidity, hangover, constipation, workaholic stress, insomnia ke liye. Potency, uses, FAQs. Doctor-reviewed Hinglish guide.',

  intro: 'Nux Vomica modern lifestyle ki sabse important medicine hai — irritability, acidity, hangover, overwork, aur over-indulgence ke liye. Plant seed se banti hai (Strychnos Nux-vomica), India aur South-East Asia mein milti hai. Hahnemann ne ise "polychrest" kaha — bahut sare symptoms cover karti hai. Urban stressed-out professionals ki classic remedy.',

  facts: [
    { _key: 'f1', ic: '🌿', t: 'Plant seed',          d: 'Strychnos (India/SEA)' },
    { _key: 'f2', ic: '💼', t: 'Urban lifestyle remedy', d: 'Stress, overwork, party' },
    { _key: 'f3', ic: '🔥', t: 'Acidity & hangover',   d: 'Sabse common use' },
    { _key: 'f4', ic: '😤', t: 'Type-A personality',   d: 'Irritable, ambitious' },
  ],

  keynotes: [
    { _key: 'k1', ic: '⭐', t: '#1 Hangover remedy',      d: 'Sharab, party, late-night ke baad next morning' },
    { _key: 'k2', ic: '⭐', t: 'Acidity, gas, constipation', d: 'Modern diet aur sedentary lifestyle se' },
    { _key: 'k3', ic: '⭐', t: 'Workaholic personality',   d: 'Type-A, ambitious, irritable, impatient' },
    { _key: 'k4', ic: '⭐', t: '"Ineffectual urging" stool', d: 'Bathroom jaate hain par satisfaction nahi — repeated urge' },
    { _key: 'k5', ic: '⭐', t: 'Cold sensitivity',         d: 'Slightest cold draft se sneezing, cold pakar lete hain' },
  ],

  keyUses: [
    { _key: 'u1', ic: '🔥', t: 'Acidity / GERD',      d: 'Heartburn, sour belching, khaane ke baad' },
    { _key: 'u2', ic: '🥴', t: 'Hangover',            d: 'Daru ke baad sir dard, vomiting, nausea' },
    { _key: 'u3', ic: '😤', t: 'Irritability',        d: 'Chhoti baat pe gussa, impatient' },
    { _key: 'u4', ic: '🤢', t: 'Nausea & vomiting',  d: 'Pregnancy nausea, morning sickness' },
    { _key: 'u5', ic: '🚽', t: 'Constipation',        d: 'Ineffectual urging — go but no relief' },
    { _key: 'u6', ic: '🤧', t: 'Common cold',         d: 'Stuffed nose night ko, day mein discharge' },
    { _key: 'u7', ic: '💼', t: 'Workaholic burnout',  d: 'Mental fatigue, overuse, sedentary stress' },
    { _key: 'u8', ic: '🌙', t: 'Insomnia',            d: '3-4 AM uthna, fir neend nahi' },
    { _key: 'u9', ic: '🤕', t: 'Headache (frontal)',  d: 'Mathe ka dard — over-eating, late night, party ke baad' },
  ],

  potency: [
    { _key: 'p1', p: '30C',  how: 'Surface, acute',    when: 'Hangover, fresh acidity, daily use' },
    { _key: 'p2', p: '200C', how: 'Deeper',             when: 'Recurring patterns — chronic acidity, constipation tendency' },
    { _key: 'p3', p: '1M',   how: 'Constitutional',    when: 'Type-A personality treatment — doctor decide karega' },
  ],

  dosage: '4-5 pills mooh mein, chusne ke liye. Night dose best hoti hai (sone se pehle) — Nux Vomica raat ko sabse zyada active rehti hai. Khane se 30 min pehle/baad. Frequency aur duration doctor par depend karta hai. Acute hangover/acidity mein single dose, chronic mein har 3-4 din. Self-medication na karein.',

  mindSymptoms: [
    { _key: 'ms1', t: 'Gussa / Irritability',          d: 'Chhoti baat pe bhadak jaate hain' },
    { _key: 'ms2', t: 'Workaholic',                    d: 'Zyada kaam, kam aaram — burnout tendency' },
    { _key: 'ms3', t: 'Impatient',                     d: 'Sabra nahi, sab kuch turant chahiye' },
    { _key: 'ms4', t: 'Sensitive to noise/light/smell', d: 'Hangover jaisa, har stimuli irritate karta hai' },
    { _key: 'ms5', t: 'Fault-finding',                 d: 'Doosron par criticize, perfectionist' },
    { _key: 'ms6', t: 'Quarrelsome',                   d: 'Argument ki tendency, dushman jaisa behave' },
    { _key: 'ms7', t: 'Sedentary lifestyle',            d: 'Desk job, kam exercise, intellectual overwork' },
  ],

  physicalSymptoms: [
    { _key: 'ps1', area: 'Head',    symptoms: ['Frontal headache — over-eating se', 'Hangover headache, vertigo', 'Worse morning, better evening'] },
    { _key: 'ps2', area: 'Eyes',    symptoms: ['Photophobia (light se irritate)', 'Eye strain, computer use se'] },
    { _key: 'ps3', area: 'Nose',    symptoms: ['Stuffed at night, runny in morning', 'Sneezing first thing after waking'] },
    { _key: 'ps4', area: 'Stomach', symptoms: ['Acidity, heartburn, sour belching', 'Bitter taste mooh mein', 'Khane ke baad heaviness'] },
    { _key: 'ps5', area: 'Abdomen', symptoms: ['Constipation with ineffectual urging', 'Hemorrhoids (piles) painful', 'Liver heaviness'] },
    { _key: 'ps6', area: 'Sleep',   symptoms: ['3-4 AM uthna, mind racing', 'Cant fall back asleep', 'Wakeful from coffee/stress'] },
  ],

  modalities: {
    worse:  ['Subah uthte hi', 'Coffee, daru, spicy food', 'Cold air/drafts', 'Mental exertion', 'Touch karne se'],
    better: ['Sone ke baad (small nap)', 'Garmi se, garam paani', 'Aaram karne se', 'Hot drinks'],
  },

  indications: [
    { _key: 'i1', diseaseSlug: 'acidity',    diseaseName: 'Acidity / GERD',   why: 'Heartburn, sour belching, khaane ke baad' },
    { _key: 'i2', diseaseSlug: 'gastritis',  diseaseName: 'Gastritis',         why: 'Stomach lining inflammation, spicy/oily food intolerance' },
    { _key: 'i3', diseaseSlug: 'ibs',        diseaseName: 'IBS',               why: 'Constipation with ineffectual urging' },
    { _key: 'i4', diseaseSlug: 'insomnia',   diseaseName: 'Insomnia',          why: '3-4 AM waking, mind racing' },
    { _key: 'i5', diseaseSlug: 'migraine',   diseaseName: 'Migraine',          why: 'Frontal headache, hangover-type' },
    { _key: 'i6', diseaseSlug: 'anxiety',    diseaseName: 'Anxiety',           why: 'Type-A stress, workaholic burnout' },
  ],

  related: [
    { _key: 'r1', medicineSlug: 'sulphur',       medicineName: 'Sulphur' },
    { _key: 'r2', medicineSlug: 'calcarea-carb',  medicineName: 'Calcarea Carbonica' },
    { _key: 'r3', medicineSlug: 'natrum-mur',     medicineName: 'Natrum Muriaticum' },
  ],

  foodRestrictions: 'Strong smells aur tastes avoid karein during treatment — coffee, alcohol, spicy food, pudina, kapur. Ye Nux Vomica ka action neutralize karte hain (ironically wahi cheezein jiske liye prescribe hoti hai!). 15-30 min gap medicine aur khane mein.',

  pregnancy: 'Pregnancy mein morning sickness ke liye Nux Vomica common indication hai, lekin doctor consult zaroori. Self-dose na karein. Bachhon mein colic aur constipation ke liye safe maani jaati hai qualified homeopath ki guidance mein.',

  comparisons: [
    {
      _key: 'c1',
      n: 'Nux Vomica vs Sulphur',
      rows: [
        { _key: 'cr1', factor: 'Personality',  medicineValue: 'Irritable, workaholic, neat',      compareValue: 'Untidy, philosophical, "ragged philosopher"' },
        { _key: 'cr2', factor: 'Temperature',  medicineValue: 'Cold, sensitive to draft',          compareValue: 'Hot, throws blankets' },
        { _key: 'cr3', factor: 'Acidity',       medicineValue: 'Sour belching, morning',           compareValue: 'Burning, evening worse' },
        { _key: 'cr4', factor: 'Best for',      medicineValue: 'Acute lifestyle issues',           compareValue: 'Chronic skin + constitutional' },
      ],
    },
    {
      _key: 'c2',
      n: 'Nux Vomica vs Carbo Veg',
      rows: [
        { _key: 'cr5', factor: 'Gas/bloating', medicineValue: 'Constipation predominant',         compareValue: 'Excess gas, burping relieves' },
        { _key: 'cr6', factor: 'Personality',  medicineValue: 'Active, irritable',                compareValue: 'Weak, exhausted, collapse' },
        { _key: 'cr7', factor: 'Time worse',   medicineValue: 'Morning',                          compareValue: 'Evening / after eating' },
      ],
    },
  ],

  myths: [
    { _key: 'm1', q: 'Nux Vomica poison se banti hai, dangerous hai?', a: 'PARTIAL TRUTH — Strychnos seed mein strychnine alkaloid hota hai jo crude form mein toxic hai. Homeopathic potency mein (30C, 200C) succussion + dilution se safe ban jati hai — 200+ years safe use.' },
    { _key: 'm2', q: 'Nux Vomica sirf hangover ke liye hai?',          a: 'GALAT — modern lifestyle ki sabse versatile medicine hai. Acidity, constipation, insomnia, irritability — har stress-related condition mein use hoti hai.' },
    { _key: 'm3', q: 'Daily Nux Vomica lene se addiction ho jata hai?', a: 'NAHI — homeopathic addiction concept nahi hai. Lekin daily long-term use se "proving" ho sakti hai — symptoms badh sakte hain. Doctor ki supervision zaroori.' },
    { _key: 'm4', q: 'Nux Vomica weight loss medicine hai?',            a: 'NAHI — directly nahi. Lekin acidity, constipation, slow metabolism (sedentary lifestyle) theek karke indirectly help kar sakti hai.' },
  ],

  doctorTake: 'Nux Vomica mere clinic mein top 3 most prescribed medicines mein hai. Urban professionals — IT, finance, sales — jo late nights, party, junk food, stress mein rehte hain — sabki ye classical remedy hai. 70%+ patients ko 2 hafte mein acidity, sleep, mood mein clear improvement milta hai. Lekin lifestyle bhi sudharna padta hai — sirf medicine se permanent solution nahi.',

  faqs: [
    { _key: 'faq1',  q: 'Nux Vomica 30 ya 200?',                      a: 'Acute hangover, fresh acidity — 30C. Recurring patterns (chronic acidity, constipation tendency, insomnia) — 200C. Constitutional treatment 1M. Doctor decide karega.' },
    { _key: 'faq2',  q: 'Nux Vomica kitne din tak lein?',              a: 'Acute mein 3-5 din, symptoms theek hone par stop. Chronic mein week mein 1-2 dose, 4-8 weeks doctor ke supervision mein. Continuous long-term self-use avoid karein.' },
    { _key: 'faq3',  q: 'Nux Vomica raat mein kyun leni chahiye?',     a: 'Ye medicine raat ko sone se pehle sabse zyada active rehti hai. Sleep cycle aur next morning acidity dono pe behtar kaam karti hai.' },
    { _key: 'faq4',  q: 'Coffee peene ke baad Nux Vomica le sakte hain?', a: '30-60 min ka gap zaroori. Coffee Nux Vomica ka action neutralize kar deti hai. Possible to coffee gradually reduce karein during treatment.' },
    { _key: 'faq5',  q: 'Nux Vomica pregnancy mein safe?',             a: 'Morning sickness ke liye common indication hai, lekin qualified homeopath ki rai ke bina na lein. Pregnancy mein medicine selection extra care chahti hai.' },
    { _key: 'faq6',  q: 'Nux Vomica ke side effects?',                 a: 'Correct potency aur dose mein nahi. Overdose ya wrong potency mein "proving" — irritability badh sakti hai. Doctor consult karein.' },
    { _key: 'faq7',  q: 'Nux Vomica acidity kitne din mein theek karti hai?', a: 'Acute episode 1-3 din mein relief. Chronic acidity (months/years) 4-8 weeks treatment + lifestyle change. Sirf medicine pe permanent fix nahi.' },
    { _key: 'faq8',  q: 'Nux Vomica aur antacid saath le sakte hain?', a: 'Saath le sakte hain (15-30 min gap), lekin antacid Nux Vomica ka action partially neutralize karta hai. Goal antacid dependency kam karna hota hai.' },
    { _key: 'faq9',  q: 'Nux Vomica bachhon ke liye safe hai?',        a: 'Haan — colic, constipation, irritability mein bachhon ke liye safe. Pills pani mein ghol ke dein. Doctor se potency confirm karein.' },
    { _key: 'faq10', q: 'Nux Vomica daily morning ya raat?',           a: 'Generally raat ko sone se pehle. Hangover ke liye morning bhi le sakte hain. Doctor specific guidance dega case ke saath.' },
    { _key: 'faq11', q: 'Insomnia mein Nux Vomica kab kaam karti hai?', a: '3-4 AM waking pattern hai aur mind racing rehti hai — Nux Vomica indicated. Sleep onset issue Coffea ya other medicines mein hota hai.' },
    { _key: 'faq12', q: 'Nux Vomica diabetic patients le sakte?',      a: 'Haan, safe hai — sugar pe direct effect nahi. Acidity aur constipation diabetic mein common hai, Nux Vomica helpful. Allopathy sugar medicine continue karein.' },
    { _key: 'faq13', q: 'Daily 4 pills lena zyada to nahi?',           a: 'Acute mein safe hai. Chronic daily lene par doctor consult — dose taper karne ki strategy banegi.' },
    { _key: 'faq14', q: 'Nux Vomica ke saath kya nahi khaayein?',      a: 'Coffee, alcohol, spicy food, mint, camphor, raw onion — medicine ka effect kam karte hain. 30 min gap zaroori.' },
    { _key: 'faq15', q: 'Nux Vomica kab nahi leni chahiye?',           a: 'Agar symptoms match nahi karte (jaise opposite personality — slow, lethargic), ya antidotal food/drink continuously consume kar rahe hain. Doctor evaluation chahiye.' },
  ],
}

async function seed() {
  try {
    console.log('Seeding Nux Vomica...')
    const result = await client.createOrReplace(nuxVomica)
    console.log('Done:', result._id)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seed()
