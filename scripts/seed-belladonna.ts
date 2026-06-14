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

const belladonna = {
  _id:   'medicine-belladonna',
  _type: 'medicine',

  name:         'Belladonna',
  slug:         { _type: 'slug', current: 'belladonna' },
  category:     'plant',
  alt:          'Deadly Nightshade',
  commonUses:   'High fever, throat pain, sudden inflammation',
  source:       'Plant (Europe)',
  readMin:      10,
  hasVideo:     true,
  severity:     'common',
  metaTitle:    'Belladonna — High Fever, Throat Pain, Throbbing Headache ki Homeopathic Remedy | Homeopedia.in',
  metaDescription: 'Belladonna (Deadly Nightshade) — sudden high fever, right-sided throat pain, throbbing headache, ear infection ke liye classical homeopathic remedy. Potency, uses, FAQs. Doctor-reviewed Hinglish guide.',

  intro: 'Belladonna ("beautiful lady" Italian mein) — Atropa Belladonna plant se banti hai, jo Europe mein milti hai. Crude form mein deadly poison hai (atropine alkaloid), lekin homeopathic potency mein safe aur powerful medicine hai. Sudden, violent symptoms ke liye — specially high fever, throat infection, headache, aur acute inflammation. "Right-sided" medicine — right side affect zyada karti hai. Bachhon ki fever ki classic first remedy.',

  facts: [
    { _key: 'f1', ic: '🌿', t: 'Plant-based',         d: 'Deadly Nightshade (Europe)' },
    { _key: 'f2', ic: '🌡️', t: '#1 Fever medicine',  d: 'Sudden high temperature' },
    { _key: 'f3', ic: '😡', t: 'Sudden violent onset', d: 'Symptoms ekdam aate hain' },
    { _key: 'f4', ic: '➡️', t: 'Right-sided',          d: 'Right side affect zyada' },
  ],

  keynotes: [
    { _key: 'k1', ic: '⭐', t: 'Sudden, violent onset',      d: 'Symptoms 1-2 ghante mein peak — slow nahi' },
    { _key: 'k2', ic: '⭐', t: 'High fever, red face',       d: 'Skin flushed, hot, dry — radiating heat' },
    { _key: 'k3', ic: '⭐', t: 'Dilated pupils (3 D\'s)',    d: 'Pupils bade, eyes glistening, throbbing pain' },
    { _key: 'k4', ic: '⭐', t: 'Throbbing, pulsating pain',  d: 'Headache, toothache, throat — dil ki dhadkan ke saath' },
    { _key: 'k5', ic: '⭐', t: 'Worse touch, jar, noise',    d: 'Slightest disturbance se pain badhta hai' },
  ],

  keyUses: [
    { _key: 'u1', ic: '🌡️', t: 'High fever',          d: 'Sudden 102°+ fever, red face, hot skin — specially bachhon mein' },
    { _key: 'u2', ic: '🤕', t: 'Throbbing headache',   d: 'Right-sided, worse light/noise, must lie down dark room' },
    { _key: 'u3', ic: '🦷', t: 'Toothache',            d: 'Throbbing, gum red and swollen' },
    { _key: 'u4', ic: '🗣️', t: 'Sore throat / Tonsillitis', d: 'Right-sided, beefy red, difficulty swallowing' },
    { _key: 'u5', ic: '🤧', t: 'Ear infection',        d: 'Sudden onset, right ear, throbbing pain' },
    { _key: 'u6', ic: '👀', t: 'Conjunctivitis',       d: 'Red, inflamed eyes — sudden onset' },
    { _key: 'u7', ic: '🤕', t: 'Sunstroke',            d: 'Heat exposure ke baad headache, throbbing' },
    { _key: 'u8', ic: '😵', t: 'Delirium with fever',  d: 'Bukhar ke saath confusion, hallucination' },
    { _key: 'u9', ic: '🤰', t: 'Mastitis',             d: 'Breast inflammation, red streaks, throbbing' },
  ],

  potency: [
    { _key: 'p1', p: '30C',  how: 'Acute, surface',    when: 'Fresh fever, sudden headache, throat — most common' },
    { _key: 'p2', p: '200C', how: 'Deeper',             when: 'Recurring patterns, chronic tendency' },
    { _key: 'p3', p: '1M',   how: 'Constitutional',    when: 'Doctor decide karega — rare in Belladonna' },
  ],

  dosage: 'Acute mein 4-5 pills har 1-2 ghante (fever ho to). Symptoms kam hone par interval badhayein. Khaane se 15-30 min gap. Bachhon mein pills paani mein ghol ke dein. Critical: agar 24 ghante mein fever kam nahi ho ya tez badhe — turant doctor consult. Self-medication acute high fever mein dangerous ho sakti hai.',

  mindSymptoms: [
    { _key: 'ms1', t: 'Sudden anger / rage',          d: 'Bukhar ke saath irritability, bite/strike karne ki tendency' },
    { _key: 'ms2', t: 'Hallucinations during fever',  d: 'Imaginary objects, monsters, fearful images' },
    { _key: 'ms3', t: 'Restlessness',                 d: 'Bistar mein side change karte rehte hain' },
    { _key: 'ms4', t: 'Fear of dogs, water, mirrors', d: 'Specific phobias jab fever zyada ho' },
    { _key: 'ms5', t: 'Delirium',                     d: 'Bukhar mein bakwas, confusion — disorientation' },
    { _key: 'ms6', t: 'Wants to escape',              d: 'Run away karne ki feeling, restless' },
  ],

  physicalSymptoms: [
    { _key: 'ps1', area: 'Head',  symptoms: ['Throbbing headache, right side', 'Hot head with cold extremities', 'Worse light, noise, touch, jar'] },
    { _key: 'ps2', area: 'Eyes',  symptoms: ['Dilated pupils, glistening', 'Photophobia (light se dard)', 'Conjunctivitis red'] },
    { _key: 'ps3', area: 'Throat', symptoms: ['Sore, beefy red — right side', 'Difficulty swallowing liquids', 'Tonsils swollen, dark red'] },
    { _key: 'ps4', area: 'Ears',  symptoms: ['Throbbing pain — right ear', 'Sensitive to noise', 'Acute otitis media'] },
    { _key: 'ps5', area: 'Fever', symptoms: ['Sudden high — 102°+', 'Hot dry skin, no sweat', 'Cold extremities + hot head'] },
    { _key: 'ps6', area: 'Skin',  symptoms: ['Red, hot, dry', 'Scarlet flush', 'Boils, erysipelas'] },
  ],

  modalities: {
    worse:  ['Touch karne se', 'Jar (vibration) se', 'Light, noise', 'Lying down', 'Afternoon (3 PM)'],
    better: ['Lying in dark, quiet room', 'Bending head back', 'Sitting semi-erect', 'Covering up warm'],
  },

  indications: [
    { _key: 'i1', diseaseSlug: 'tonsillitis',        diseaseName: 'Tonsillitis',           why: 'Right-sided, beefy red, sudden onset' },
    { _key: 'i2', diseaseSlug: 'recurrent-cold',     diseaseName: 'Recurrent Cold',        why: 'Sudden onset with high fever' },
    { _key: 'i3', diseaseSlug: 'migraine',           diseaseName: 'Migraine',              why: 'Right-sided throbbing, worse light' },
    { _key: 'i4', diseaseSlug: 'allergic-rhinitis',  diseaseName: 'Allergic Rhinitis',     why: 'Acute flare with red watery eyes' },
    { _key: 'i5', diseaseSlug: 'arthritis',          diseaseName: 'Arthritis',             why: 'Acute joint inflammation — red, hot, swollen' },
  ],

  related: [
    { _key: 'r1', medicineSlug: 'arnica',  medicineName: 'Arnica Montana' },
    { _key: 'r2', medicineSlug: 'bryonia', medicineName: 'Bryonia Alba' },
    { _key: 'r3', medicineSlug: 'apis',    medicineName: 'Apis Mellifica' },
  ],

  foodRestrictions: 'General rules — medicine se 15-30 min gap. Acute fever mein light, easy-to-digest food — khichdi, fruit, juice. Heavy/oily food avoid. Coffee, mint, raw onion homeopathic action kam karte hain.',

  pregnancy: 'Pregnancy mein high fever ke liye doctor ki rai zaroori — fever itself baby ke liye risk hai. Mastitis (post-delivery breast inflammation) mein Belladonna common indication hai qualified homeopath ki guidance mein. Bachhon mein fever ke liye safe and effective — but high fever 24 hrs persist kare to pediatrician zaroor dikhayein.',

  comparisons: [
    {
      _key: 'c1',
      n: 'Belladonna vs Aconite',
      rows: [
        { _key: 'cr1', factor: 'Onset',    medicineValue: 'Sudden, violent',                compareValue: 'Sudden, after cold exposure' },
        { _key: 'cr2', factor: 'Cause',    medicineValue: 'No specific trigger',             compareValue: 'Cold dry wind, fright' },
        { _key: 'cr3', factor: 'Sweat',    medicineValue: 'Dry skin, no sweat',              compareValue: 'Profuse sweat sometimes' },
        { _key: 'cr4', factor: 'Mental',   medicineValue: 'Hallucinations, rage',            compareValue: 'Fear of death, anxiety' },
        { _key: 'cr5', factor: 'Best for', medicineValue: 'Established fever, throbbing',   compareValue: 'First stage — within 24 hrs of cold exposure' },
      ],
    },
    {
      _key: 'c2',
      n: 'Belladonna vs Bryonia',
      rows: [
        { _key: 'cr6', factor: 'Onset',     medicineValue: 'Sudden, violent',               compareValue: 'Slow, gradual' },
        { _key: 'cr7', factor: 'Pain type', medicineValue: 'Throbbing, pulsating',          compareValue: 'Stitching, sharp' },
        { _key: 'cr8', factor: 'Thirst',    medicineValue: 'Reduced (or rejects water)',    compareValue: 'Excessive — large quantities' },
        { _key: 'cr9', factor: 'Skin',      medicineValue: 'Red, hot, dry',                 compareValue: 'Same temp, less red' },
      ],
    },
  ],

  myths: [
    { _key: 'm1', q: 'Belladonna poison hai — kaise safe?',       a: 'Crude form mein toxic (atropine), lekin homeopathic dilution mein toxic element nahi rehta. 200+ years safe medical use ki history.' },
    { _key: 'm2', q: 'Bachhon ko Belladonna dena dangerous hai?', a: 'NAHI — homeopathic potency mein bachhon ke fever ke liye safe aur effective. WHO bhi acknowledged hai. Doctor ki rai mein.' },
    { _key: 'm3', q: 'Belladonna fever ko jaldi suppress kar deti hai?', a: 'GALAT — Belladonna fever "suppress" nahi karti, body ki natural healing response support karti hai. Symptoms gradual reduce hote hain.' },
    { _key: 'm4', q: 'Belladonna sirf fever ke liye hai?',         a: 'GALAT — throat infection, headache, ear pain, eye inflammation, even acute behavioral issues mein use hoti hai.' },
  ],

  doctorTake: 'Belladonna mere clinic mein pediatric fever ka first-line remedy hai. Sudden high fever with red face — 80%+ bachhon ko 4-6 ghante mein temperature kam hota hai. Adults mein right-sided headache aur tonsillitis ke liye reliable. Critical: 24 ghante mein response nahi to differential diagnosis chahiye — viral vs bacterial, complications rule out karne hain. Self-treatment mein limit pata hone chahiye.',

  faqs: [
    { _key: 'faq1',  q: 'Belladonna 30 le ya 200?',                    a: 'Acute fresh fever, headache — 30C. Recurring patterns — 200C. Critical illness mein 30C zyada frequently — doctor decide karega.' },
    { _key: 'faq2',  q: 'Belladonna kitne din tak lein?',               a: 'Acute fever mein 24-48 ghante — symptoms theek hone par stop. Continuous lene se "proving" risk. Long-term use rare hai.' },
    { _key: 'faq3',  q: 'Bachhon ko Belladonna kaise dein?',            a: 'Pills paani mein ghol ke 1-2 chamach. Frequency: acute fever mein har 2-3 ghante. Bukhar kam hone par taper. Doctor se confirm.' },
    { _key: 'faq4',  q: 'Belladonna pregnancy mein safe?',              a: 'Generally safe homeopathic potency mein, lekin pregnancy mein fever ya kisi bhi acute illness mein doctor consult mandatory.' },
    { _key: 'faq5',  q: 'Belladonna ke side effects?',                  a: 'Correct potency mein nahi. Overdose ya wrong potency mein dilated pupils, dry mouth, restlessness — "proving" symptoms. Stop karne par theek.' },
    { _key: 'faq6',  q: 'Belladonna kab nahi leni chahiye?',            a: 'Slow onset bukhar (jaise typhoid), excess sweating wala fever, chills predominant — Belladonna indicated nahi. Doctor evaluation zaroori.' },
    { _key: 'faq7',  q: 'Tonsillitis mein Belladonna kitni jaldi kaam karti hai?', a: 'Right-sided beefy red tonsillitis mein 24-48 ghante mein significant relief. Bacterial infection ho to antibiotics chahiye — doctor decide karega.' },
    { _key: 'faq8',  q: 'Belladonna aur paracetamol saath le sakte?',   a: 'Saath le sakte hain (15-30 min gap), specially high fever mein. Goal allopathy dependency gradually reduce karna — single therapy approach.' },
    { _key: 'faq9',  q: 'Sunstroke mein Belladonna kaise lein?',        a: 'Body cool karne ke saath Belladonna 30C, har 30 min, jab tak symptoms control mein. Hospitalisation chahiye agar severe — sirf medicine se kaam nahi chalega.' },
    { _key: 'faq10', q: 'Belladonna headache aur migraine mein fark?',  a: 'Belladonna acute throbbing headache (right side, worse light) mein. Chronic migraine mein constitutional remedy chahiye — Natrum Mur, Spigelia etc.' },
    { _key: 'faq11', q: 'Conjunctivitis mein Belladonna kab?',          a: 'Acute red eyes, watering, photophobia, sudden onset — 30C har 4 ghante. 2-3 din mein relief expected. Bacterial ho to antibiotic drops bhi.' },
    { _key: 'faq12', q: 'Belladonna se neend khrab hoti hai?',          a: 'High dose ya wrong potency mein restlessness ho sakti hai. Correct mein nahi. Acute fever mein anyway sleep disturbed hota hai.' },
    { _key: 'faq13', q: 'Mastitis mein Belladonna kitne din?',          a: 'Acute mastitis (post-delivery) mein 30C har 3-4 ghante. Pus formation start ho to Silicea/Hepar Sulph switch. 48 hrs mein no relief = doctor.' },
    { _key: 'faq14', q: 'Belladonna ke saath kya nahi khaayein?',       a: 'General: coffee, mint, raw onion, camphor. Acute fever mein light diet — khichdi, fruit, juice. Heavy oily avoid.' },
    { _key: 'faq15', q: 'Belladonna 1M kab use hoti hai?',              a: 'Rare — recurring acute patterns (har baar same symptoms) mein constitutional intent ke saath. Self-prescribe na karein — 1M doctor ki guidance mein.' },
  ],
}

async function seed() {
  try {
    console.log('Seeding Belladonna...')
    const result = await client.createOrReplace(belladonna)
    console.log('Done:', result._id)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seed()
