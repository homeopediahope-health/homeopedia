import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const vitaminD = {
  _id: 'labtest-vitamin-d',
  _type: 'labTest',
  name: 'Vitamin D Test (25-OH)',
  fullForm: 'Serum 25-Hydroxy Vitamin D Test',
  hindiName: 'Vitamin D Jaanch / Dhoop Vitamin Test',
  slug: { _type: 'slug', current: 'vitamin-d-test' },
  category: 'Blood',
  metaTitle: 'Vitamin D Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'Vitamin D (25-Hydroxy) test ka normal range, high/low matlab, kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Vitamin D Test — jise medically "Serum 25-Hydroxy Vitamin D Test" ya "25(OH)D Test" kaha jaata hai — ek simple blood test hai jo aapke khoon mein Vitamin D ki maatra naapata hai.

Vitamin D ko "Sunshine Vitamin" bhi bolte hain — kyunki hamaara body ise dhoop (sunlight) se khud banata hai. Ye vitamin ek tarah ka fat-soluble nutrient hai jo calcium ko absorb karne mein help karta hai, haddiyan majboot rakhta hai, aur immune system (rog pratirodh shakti) ko support karta hai.

Ye test specifically 25-Hydroxyvitamin D (25-OH-D) naapata hai — jo body mein Vitamin D ka sabse main circulating form hai aur sabse accurate indicator hai ki aapke andar vitamin D kitna hai.

India mein Vitamin D ki kami (deficiency) bahut zyada common hai — studies ke mutabiq 50-80% Indians mein kisi na kisi degree ki kami hoti hai — indoor lifestyle, heavy clothing, aur sun exposure ki kami ki wajah se. Isliye ye test India mein bahut frequently kiya jaata hai.

Agar aap thaka-thaka feel karte hain, haddi ya muscles mein dard hai, ya baar baar beemar padte hain — toh doctor ye test likh sakta hai.`,

  whenToTest: [
    'Haddi mein dard (bone pain) ya joint pain ho — khaaskar kamar, ghutne, pair mein',
    'Thakaan aur kamzori ho jo reason samajh na aaye',
    'Muscles mein dard ya weakness ho',
    'Baar baar infection ya beemar padna ho — immune system weak lagta ho',
    'Mood mein lagaataar giraavat ho, depression ke signs ho',
    'Osteoporosis (haddi ka kamzor hona) ki jaanch ke liye',
    'Rickets (bacchon mein haddi ka muda hona) ya Osteomalacia (baadon mein)',
    'Malabsorption ki bimariyan ho — jaise Crohn\'s disease, Celiac disease',
    'Kidney ya liver ki chronic bimari ho (jo Vitamin D metabolism affect karti hai)',
    'Aap bahut kam dhoop mein jaate ho — ghar ke andar rehne wale, raat ki shift karne wale',
    'Mote log (obesity) — kyunki fat cells Vitamin D ko absorb karke rakh lete hain',
    'Elderly (60+ umar) patients mein routine check-up ke liye',
    'Pregnancy mein Vitamin D ki maatra check karne ke liye',
  ],

  whatItDetects: `Is test se kya pata chalta hai: Vitamin D deficiency hai ya nahi, deficiency kitni severe hai, Vitamin D supplements le rahe hain toh woh kaam kar rahe hain ya nahi (monitoring), aur Vitamin D toxicity (bahut zyada) hai ya nahi.

Ye test akela body ki poori picture nahi deta — doctor iske saath calcium, phosphorus, PTH (Parathyroid Hormone) tests bhi likh sakte hain.`,

  normalRanges: [
    { _key: 'sufficient',       parameter: 'Sufficient (Adults)',    normalRange: '30 – 100',  unit: 'ng/mL', highBrief: 'Toxicity ka risk',      lowBrief: 'Deficiency' },
    { _key: 'insufficient',     parameter: 'Insufficient',           normalRange: '20 – 29',   unit: 'ng/mL', highBrief: '—',                     lowBrief: 'Mild kami' },
    { _key: 'deficient',        parameter: 'Deficient',              normalRange: 'Below 20',  unit: 'ng/mL', highBrief: '—',                     lowBrief: 'Severe kami' },
    { _key: 'severely-def',     parameter: 'Severely Deficient',     normalRange: 'Below 10',  unit: 'ng/mL', highBrief: '—',                     lowBrief: 'Bahut severe kami' },
    { _key: 'optimal-india',    parameter: 'OPTIMAL (India Consensus)', normalRange: '40 – 60', unit: 'ng/mL', highBrief: '—',                    lowBrief: 'Indian experts recommend' },
    { _key: 'toxic',            parameter: 'Toxic Level',            normalRange: 'Above 100', unit: 'ng/mL', highBrief: 'Hypervitaminosis D',    lowBrief: '—' },
    { _key: 'pregnancy',        parameter: 'Pregnancy mein',         normalRange: '30 – 100',  unit: 'ng/mL', highBrief: 'Monitor karo',          lowBrief: 'Fetal risk' },
    { _key: 'children',         parameter: 'Children (0-18 yr)',     normalRange: '20 – 100',  unit: 'ng/mL', highBrief: 'Monitor karo',          lowBrief: 'Rickets ka risk' },
    { _key: 'elderly',          parameter: 'Elderly (60+ years)',    normalRange: '30 – 100',  unit: 'ng/mL', highBrief: 'Monitor karo',          lowBrief: 'Fracture risk' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: '30 – 100 ng/mL (optimal 40-60 ng/mL)',
    riskNote: `Pregnancy mein Vitamin D ka role: Baby ke haddi aur teeth development ke liye calcium absorption zaroori hai. Preeclampsia (BP badh jaana) ka risk kam karta hai. Preterm birth (time se pehle delivery) ka risk reduce karta hai. Baby ke immune system development mein help karta hai.

Deficiency (below 20 ng/mL) ke possible risks: Baby mein Rickets ya weak bones, Low birth weight ka possibility, Mother mein osteomalacia (bone softening).`,
    whenDoctor: 'Agar report thoda low aaye toh supplement se theek ho jaata hai. Kab test hota hai: First trimester mein routine prenatal checkup ke hissa ke taur pe. Symptoms aane pe — jaise bone pain, muscle cramps, excessive fatigue. Supplement lene se pehle dose doctor se confirm karein.',
  },

  highMeans: [
    'Vitamin D supplements bahut zyada dose mein lena — bina doctor ke',
    'Multivitamins ke saath alag se Vitamin D lena',
    'Over-the-counter sachets ya capsules khud se lena',
    'Kuch prescription medications ka side effect',
    'Granulomatous diseases (jaise Sarcoidosis) — body khud zyada Vitamin D activate karti hai',
    'High Vitamin D ke possible symptoms: nausea, vomiting, constipation ya diarrhea, zyada pyaas, zyada peshab, weakness, thakaan',
    'Kidney stones ya kidney damage ka risk (severe cases mein) — blood mein calcium bahut badh jaata hai (hypercalcemia)',
  ],

  highReassurance: 'Ghabrao mat — agar aap sirf sunlight mein jaate hain ya normal diet lete hain toh Vitamin D kabhi toxic level tak nahi jaata. Supplements band karo aur doctor se milein.',

  lowMeans: [
    'Sunlight mein kam waqt — indoor jobs, fully covered clothing, high-rise buildings',
    'Dark skin tone — melanin zyada hone se Vitamin D synthesis kam hoti hai',
    'Vegetarian/vegan diet — Vitamin D ke animal sources (fatty fish, egg yolk) kam lete hain',
    'Malabsorption — Crohn\'s, Celiac, bariatric surgery ke baad',
    'Kidney ya liver ki bimari — jo Vitamin D ko active form mein convert nahi karne deti',
    'Obesity — fat cells Vitamin D ko store karke rakh leti hain, circulation mein nahi aata',
    'Old age — skin ki Vitamin D banane ki capacity kam hoti hai',
    'Medicines — steroids, anticonvulsants, kuch antifungal drugs',
  ],

  lowConcern: 'Below 10 ng/mL severe deficiency hai — is pe doctor ka immediate attention chahiye. Supplements aur monitoring zaroori hogi. India mein Vitamin D low hona bahut common hai — akele report dekhkar ghabrao mat. Ye treat karna easy hai doctor ki guidance se.',

  redFlags: [
    'Vitamin D 10 ng/mL se neeche aaye — ye severe deficiency hai',
    'Report ke saath haddi mein fracture aaya ho bina kisi badi injury ke',
    'Bachcha (child) mein Vitamin D bahut low ho aur pair tedhe ho rahe hon (Rickets)',
    'Bahut zyada thakaan + weakness + bone pain ek saath ho',
    'Pregnant hain aur Vitamin D below 20 ng/mL aaye',
    'Supplements le rahe hain aur Vitamin D 100 ng/mL se upar aaye — toxicity check karo',
    'Kidney stone ka history hai aur Vitamin D high hai',
    'Nausea, vomiting, zyada pyaas — ye toxicity ke signs ho sakte hain',
  ],

  emergencyLevel: 'Vitamin D 10 ng/mL se neeche aaye toh doctor ka immediate attention chahiye. Agar supplements le rahe hain aur 100 ng/mL se upar aaye toh bhi doctor se milein — toxicity risk hai.',

  selfTreatWarning: 'Report dekhkar khud Vitamin D supplement mat shuru karo. Vitamin D fat-soluble hai — body mein accumulate hoti hai — galat dose se toxicity ho sakti hai. Dose hamesha doctor decide karta hai.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Koi specific best time nahi — subah ya dopahar kisi bhi waqt',
    whatToEat: 'Koi restriction nahi — normal khaana theek hai. Pani piyein, hydrated rehna better results ke liye acha hai.',
    whatToAvoid: 'Test se 1 hafte pehle agar Vitamin D ka ek bada dose (injection ya sachet) liya ho — doctor ko batayein, results temporarily high aa sakte hain.',
    medicineNote: 'Vitamin D supplements ya multivitamins le rahe hain toh doctor ko batayein — ye test results directly affect karte hain. Steroids, anticonvulsants, weight-loss medicines bhi Vitamin D levels affect karti hain — doctor ko poori medicine list dein.',
    accuracyNote: 'Agar saath mein calcium ya PTH test bhi likha hai toh doctor ya lab se fasting ke baare mein confirm karein — kuch labs fasting maang sakte hain in additional tests ke liye.',
  },

  sampleInfo: {
    sampleType: 'Blood (venipuncture — haath ki nass se)',
    sampleAmount: 'Approximately 2-3 mL — bahut thoda sa',
    reportTime: '24-48 ghante (kuch labs same-day ya next-day results dete hain)',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Vitamin D test ke liye khaali pet rehna zaroori hai',
      truth: 'Bilkul galat. Vitamin D test ke liye fasting ki koi zarurat nahi. Kuch bhi khakar test dene jaayein. Sirf agar saath mein aur tests hon (calcium, PTH) toh fasting lagti hai.',
    },
    {
      _key: 'myth2',
      myth: 'Vitamin D low hai toh zaroor serious bimari hai',
      truth: 'India mein Vitamin D ki kami bahut common hai — 50-80% log is se affect hain. Akeli low report se diagnosis nahi hoti. Supplements aur lifestyle changes se zyaadaatar cases theek ho jaate hain.',
    },
    {
      _key: 'myth3',
      myth: 'Bahut dhoop mein rehta hoon, mujhe Vitamin D deficiency ho hi nahi sakti',
      truth: 'Dark skin, covered clothing, glass ke andar ka sunlight, pollution — ye sab sunlight se Vitamin D banne mein rukawat daalte hain. India ke bade sheher mein rehne wale bhi deficient ho sakte hain.',
    },
    {
      _key: 'myth4',
      myth: 'Vitamin D supplements khud le sakta hoon — bina test ke',
      truth: 'Vitamin D fat-soluble hai — body mein store hoti hai. Bina test ke zyada dose lena toxicity ka risk deta hai. Pehle test karo, phir doctor ki dose pe chalein.',
    },
    {
      _key: 'myth5',
      myth: 'Vitamin D sirf haddiyon ke liye hai',
      truth: 'Vitamin D immunity, mood, muscles, heart health, aur nervous system sab ke liye zaroori hai. 200+ body functions mein Vitamin D ka role hai.',
    },
    {
      _key: 'myth6',
      myth: 'Ye test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle — 2-3 seconds ka process. Routine blood test jitna hi simple. Ghabrao bilkul mat.',
    },
    {
      _key: 'myth7',
      myth: 'Vitamin D deficiency aur calcium deficiency ek hi cheez hai',
      truth: 'Dono alag hain. Vitamin D ki kami se calcium absorb nahi hota — lekin blood mein calcium normal bhi ho sakta hai jab Vitamin D low ho. Dono ki alag jaanch hoti hai.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Calcium Test',
      comparedTestSlug: 'calcium-test',
      differencePoints: [
        'Kya naapata hai | Vitamin D stores (body mein) | Blood calcium level',
        'Kab zaruri | Deficiency / toxicity check | Bone ya kidney issues',
        'Fasting | Nahi chahiye | Nahi chahiye',
        'Saath mein | Calcium, PTH | Vitamin D, PTH',
        'Ek low ho toh | Doosra normal bhi ho sakta hai | Dono alag cheezein hain',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'PTH Test',
      comparedTestSlug: 'pth-test',
      differencePoints: [
        'Kya naapata hai | Vitamin D ki maatra | Parathyroid hormone',
        'Kab zaruri | Deficiency, monitoring | Calcium imbalance, bone disease',
        'Fasting | Nahi chahiye | Nahi chahiye',
        'Report time | 24-48 ghante | 24-48 ghante',
        'Common pattern | Low Vitamin D | PTH high + Vitamin D low = secondary hyperparathyroidism',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'Vitamin D 1,25-OH (Advanced)',
      comparedTestSlug: 'vitamin-d-test',
      differencePoints: [
        'Common naam | 25-OH Vitamin D (Standard) | 1,25-OH Vitamin D (Active form)',
        'Kab kiya jaata | Routine check — sabse common | Kidney failure ya special cases',
        'Accuracy | Sabse accurate stores indicator | Active form — stores nahi dikhata',
        'Recommended | Most patients ke liye | Sirf specialist cases mein',
      ],
    },
  ],

  repeatInfo: `Agar Vitamin D deficiency hai aur supplements shuru kiye hain: 3 mahine (12 hafte) ke baad repeat test — dekho levels improve hue ya nahi. Agar levels target pe aa gaaye (40-60 ng/mL) toh 6 mahine baad dobara check.

Normal levels ke liye maintenance: Har 6-12 mahine mein ek baar check — khaaskar agar risk factors hain. Elderly, pregnant women, indoor workers — 6 mahine pe zaroor check karein.

Agar bahut zyada dose supplement le rahe hain (prescription injections): Doctor 1-3 mahine mein hi monitor karate hain — toxicity avoid karne ke liye.

Vitamin D levels ek baar theek ho jaayein toh: Lifestyle maintain karo (dhoop + diet). Annual check enough hai healthy adults ke liye.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Vitamin D Deficiency', diseaseSlug: 'vitamin-d-deficiency', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Osteoporosis', diseaseSlug: 'osteoporosis', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Depression / Mood Disorders', diseaseSlug: 'depression', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Rickets (Bacchon mein)', diseaseSlug: 'rickets', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Osteomalacia', diseaseSlug: 'osteomalacia', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Chronic Kidney Disease', diseaseSlug: 'chronic-kidney-disease', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Calcium Test', testSlug: 'calcium-test', isAvailable: false },
    { _key: 'rt2', testName: 'PTH (Parathyroid Hormone) Test', testSlug: 'pth-test', isAvailable: false },
    { _key: 'rt3', testName: 'Phosphorus Test', testSlug: 'phosphorus-test', isAvailable: false },
    { _key: 'rt4', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc-test', isAvailable: true },
    { _key: 'rt5', testName: 'Thyroid Profile (TSH)', testSlug: 'thyroid-profile-tsh', isAvailable: true },
    { _key: 'rt6', testName: 'Lipid Profile', testSlug: 'lipid-profile', isAvailable: true },
  ],

  homeopathyAngle: `Ghabrao mat — ek abnormal Vitamin D report ek signal hai ki body ko support chahiye.

Apni report lekar kisi doctor se milein. Conventional treatment mein Vitamin D supplements diye jaate hain jo levels badhaa dete hain — lekin baar baar deficiency wapas aaye toh root cause samajhna zaroori hai — absorption problem hai? Lifestyle issue hai? Koi aur underlying condition hai?

Homeopathy is situation mein underlying cause address karne mein helpful ho sakti hai. Malabsorption, chronic thakaan, ya recurrent deficiencies mein individualized homeopathic treatment poori health history dekh ke ki jaati hai — physical aur mental dono levels pe. Side effects practically nil hoti hain.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Vitamin D test kya hota hai?',
      answer: 'Vitamin D test ek simple blood test hai jo aapke blood mein 25-Hydroxy Vitamin D ki maatra naapata hai. Isse pata chalta hai ki aapko Vitamin D ki kami (deficiency), zyada maatra (toxicity), ya normal levels hain.',
    },
    {
      _key: 'faq2',
      question: 'Vitamin D test ka doosra naam kya hai?',
      answer: 'Is test ko 25-OH Vitamin D test, Serum 25-Hydroxyvitamin D test, ya 25(OH)D test bhi kaha jaata hai. Lab report mein koi bhi naam dikh sakta hai.',
    },
    {
      _key: 'faq3',
      question: 'Vitamin D ka normal range kitna hona chahiye?',
      answer: 'Adults mein 30-100 ng/mL sufficient maana jaata hai. India ke experts 40-60 ng/mL ko optimal maante hain. 20 se neeche deficiency hai, 10 se neeche severe deficiency.',
    },
    {
      _key: 'faq4',
      question: 'Vitamin D test ke liye khaali pet rehna padta hai?',
      answer: 'Nahi — Vitamin D test ke liye fasting bilkul zaroori nahi. Kuch bhi khakar ja sakte hain. Sirf agar saath mein calcium ya PTH test bhi ho tab doctor fasting bol sakte hain.',
    },
    {
      _key: 'faq5',
      question: 'Vitamin D test painful hota hai kya?',
      answer: 'Nahi — ek chhoti si needle se 2-3 mL blood nikalti hai, sirf 2-3 seconds. Routine blood test jitna hi simple. Ghabrao bilkul mat.',
    },
    {
      _key: 'faq6',
      question: 'Vitamin D test ki report kitne time mein aati hai?',
      answer: 'Zyaadaatar labs mein 24 se 48 ghante mein report aa jaati hai. Kuch labs same-day results deti hain. Online report email ya WhatsApp pe bhi milti hai.',
    },
    {
      _key: 'faq7',
      question: 'Vitamin D low hone ke kya symptoms hote hain?',
      answer: 'Thakaan, haddi aur muscles mein dard, baar baar beemar padna, mood mein giraavat, weakness — ye possible symptoms ho sakte hain. Lekin akele symptoms se confirm nahi hota — test zaroor karein.',
    },
    {
      _key: 'faq8',
      question: 'Kya ghar pe Vitamin D test ho sakta hai?',
      answer: 'Haan — Dr Lal PathLabs, Metropolis, Aster jaisi labs home sample collection offer karti hain. Online book karo, phlebotomist ghar aata hai.',
    },
    {
      _key: 'faq9',
      question: 'Vitamin D high hone se kya hota hai?',
      answer: '100 ng/mL se upar hone pe toxicity ka risk hota hai — nausea, vomiting, kidney problem, blood mein calcium badh jaana (hypercalcemia). Ye sirf zyada supplements lene se hota hai — dhoop se kabhi nahi. Supplements band karo aur doctor se milein.',
    },
    {
      _key: 'faq10',
      question: 'Vitamin D kaunsi bimariyon se related hai?',
      answer: 'Osteoporosis, Rickets, Osteomalacia, depression, weak immunity, Type 2 Diabetes risk, heart health — sab se Vitamin D ka connection research mein aaya hai. Vitamin D deficiency in bimariyon ka risk badhaa sakti hai.',
    },
    {
      _key: 'faq11',
      question: 'Vitamin D test kitni baar karaye?',
      answer: 'Deficiency ke treatment ke baad 3 mahine mein. Normal ho jaaye toh 6-12 mahine mein. Risk factors hain (elderly, pregnancy, indoor job) toh 6 mahine pe check karo.',
    },
    {
      _key: 'faq12',
      question: 'Kya Vitamin D test pregnant women ke liye zaroori hai?',
      answer: 'Haan — pregnancy mein Vitamin D ka level baby ke bone development aur mother ki health ke liye zaroori hai. First trimester mein routine check mein ye shamil hota hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya Vitamin D test se cancer ka pata chalta hai?',
      answer: 'Nahi — Vitamin D test cancer diagnose nahi karta. Ye sirf Vitamin D levels dikhata hai. Kuch research cancer risk aur Vitamin D ke beech association suggest karti hai lekin ye diagnostic test nahi hai.',
    },
    {
      _key: 'faq14',
      question: 'Bacchon mein Vitamin D test kab karna chahiye?',
      answer: 'Agar bachcha uthna-baithna seekh raha ho aur delay lag raha ho, pair tedhe lag rahe hon, ya baar baar beemar padta ho — doctor se milein. India mein bacchon mein bhi Vitamin D deficiency bahut common hai.',
    },
    {
      _key: 'faq15',
      question: 'Vitamin D supplements khud le sakta hoon kya?',
      answer: 'Nahi — bina test ke Vitamin D supplement lena safe nahi hai. Vitamin D fat-soluble hai — body mein accumulate hoti hai — zyada lene se toxicity ho sakti hai. Pehle test karein, phir doctor ki dose pe chalein.',
    },
    {
      _key: 'faq16',
      question: 'Vitamin D test ka matlab kya hai report mein?',
      answer: 'Report mein value ng/mL ya nmol/L mein hogi. 30-100 ng/mL normal range hai. Neeche aayi toh deficiency, upar 100 se gaya toh possible toxicity — dono cases mein doctor se milein.',
    },
    {
      _key: 'faq17',
      question: 'Kya Vitamin D deficiency ka pata blood test se hi chalta hai?',
      answer: 'Haan — 25-Hydroxy Vitamin D blood test hi sabse accurate tarika hai deficiency diagnose karne ka. Symptoms se doubt ho sakta hai — confirm karne ke liye test zaroori hai.',
    },
    {
      _key: 'faq18',
      question: 'Vitamin D aur Vitamin D3 test mein kya fark hai?',
      answer: 'Vitamin D3 (Cholecalciferol) ek form hai — jo skin sunlight se banati hai ya supplements mein hota hai. Standard test total Vitamin D (25-OH) measure karta hai jisme D2 aur D3 dono shamil hain. Most cases mein total 25-OH Vitamin D test kafi hai.',
    },
    {
      _key: 'faq19',
      question: 'Is test ki zarurat kab nahi hoti?',
      answer: 'Agar koi symptoms nahi hain, outdoor lifestyle hai, balanced diet hai, aur age 30-50 ke beech hai with no risk factors — routine testing ki zarurat nahi hoti. Doctor ke recommend karne pe hi karaye.',
    },
    {
      _key: 'faq20',
      question: 'Vitamin D test kahan se karaye?',
      answer: 'NABL-accredited lab se karaye — Dr Lal PathLabs, Metropolis, Aster Labs, SRL Diagnostics ya aapke sheher ki koi bhi accredited lab. Home collection bhi available hai.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(vitaminD)
    console.log('✅ Vitamin D Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
