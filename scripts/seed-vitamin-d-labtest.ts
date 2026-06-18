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
  hindiName: 'Vitamin D Jaanch',
  slug: { _type: 'slug', current: 'vitamin-d-test' },
  category: 'Blood',
  metaTitle: 'Vitamin D Test Normal Range Kya Hai? High Low Matlab Samjho (2026)',
  metaDescription: 'Vitamin D 25-OH test ki normal range, high ya low hone ka matlab, kab karaye aur kya samjhe. Doctor-reviewed Hinglish guide. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Vitamin D Test ek simple blood test hai jise medically "Serum 25-Hydroxy Vitamin D Test" ya "25(OH)D Test" kehte hain. Ye test aapke khoon mein Vitamin D ki maatra naapata hai.

Vitamin D ko Sunshine Vitamin isliye bolte hain kyunki hamaara body ise dhoop se khud banata hai. Ye ek fat-soluble nutrient hai jo calcium absorb karne mein help karta hai, haddiyan majboot rakhta hai aur immune system ko support karta hai.

Test specifically 25-Hydroxyvitamin D (25-OH-D) naapata hai jo body mein Vitamin D ka sabse main circulating form hai. Isi se pata chalta hai ki aapke body mein Vitamin D actually kitna store hai.

India mein Vitamin D ki kami bahut common problem hai. Studies ke mutabiq 50 se 80 percent Indians mein kisi na kisi degree ki kami milti hai kyunki indoor lifestyle hai, heavy clothing rehti hai aur sun exposure kam hota hai.

Thakaan, haddi ya muscles mein dard, ya baar baar beemar padna feel ho raha hai toh doctor ye test likh sakta hai.`,

  whenToTest: [
    'Haddi mein dard ya joint pain ho, khaaskar kamar, ghutne aur pair mein',
    'Thakaan aur kamzori ho jiska reason samajh na aaye',
    'Muscles mein dard ya weakness feel ho',
    'Baar baar beemar padna ho, immune system weak lage',
    'Mood mein lagaataar giraavat ho ya depression ke signs dikhen',
    'Osteoporosis yaani haddi kamzor hone ki jaanch ke liye',
    'Bacchon mein Rickets ya baadon mein Osteomalacia ke signs hon',
    'Crohn\'s disease ya Celiac disease jaisi malabsorption ki problem ho',
    'Kidney ya liver ki chronic bimari ho jo Vitamin D metabolism affect karti hai',
    'Ghar ke andar ya raat shift mein kaam karte ho aur dhoop bilkul nahi milti',
    'Obesity ho kyunki fat cells Vitamin D absorb karke rok lete hain',
    'Age 60 se upar hai aur routine check karna hai',
    'Pregnancy mein Vitamin D ki maatra check karni ho',
  ],

  whatItDetects: `Is test se pata chalta hai ki Vitamin D deficiency hai ya nahi, kami kitni severe hai, supplements le rahe hain toh woh kaam kar rahe hain ya nahi, aur Vitamin D toxicity to nahi hai.

Ye test akela body ki poori picture nahi deta. Doctor iske saath calcium, phosphorus aur PTH (Parathyroid Hormone) tests bhi likh sakte hain.`,

  normalRanges: [
    { _key: 'sufficient',    parameter: 'Sufficient (Adults)',       normalRange: '30 – 100',  unit: 'ng/mL', highBrief: 'Toxicity ka risk',   lowBrief: 'Deficiency' },
    { _key: 'insufficient',  parameter: 'Insufficient',              normalRange: '20 – 29',   unit: 'ng/mL', highBrief: 'N/A',               lowBrief: 'Mild kami' },
    { _key: 'deficient',     parameter: 'Deficient',                 normalRange: 'Below 20',  unit: 'ng/mL', highBrief: 'N/A',               lowBrief: 'Severe kami' },
    { _key: 'severely-def',  parameter: 'Severely Deficient',        normalRange: 'Below 10',  unit: 'ng/mL', highBrief: 'N/A',               lowBrief: 'Bahut severe kami' },
    { _key: 'optimal-india', parameter: 'OPTIMAL (India Consensus)', normalRange: '40 – 60',   unit: 'ng/mL', highBrief: 'N/A',               lowBrief: 'Indian experts recommend' },
    { _key: 'toxic',         parameter: 'Toxic Level',               normalRange: 'Above 100', unit: 'ng/mL', highBrief: 'Hypervitaminosis D', lowBrief: 'N/A' },
    { _key: 'pregnancy',     parameter: 'Pregnancy mein',            normalRange: '30 – 100',  unit: 'ng/mL', highBrief: 'Monitor karo',      lowBrief: 'Fetal risk' },
    { _key: 'children',      parameter: 'Children (0-18 yr)',        normalRange: '20 – 100',  unit: 'ng/mL', highBrief: 'Monitor karo',      lowBrief: 'Rickets ka risk' },
    { _key: 'elderly',       parameter: 'Elderly (60+ years)',       normalRange: '30 – 100',  unit: 'ng/mL', highBrief: 'Monitor karo',      lowBrief: 'Fracture risk' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: '30 se 100 ng/mL, optimal 40 se 60 ng/mL',
    riskNote: `Pregnancy mein Vitamin D ka role bahut important hai. Baby ki haddiyan aur teeth banane ke liye calcium absorption zaroori hoti hai. Sahi Vitamin D hone se preeclampsia (BP badh jaana) ka risk kam hota hai, preterm birth ka khatra ghatta hai aur baby ka immune system sahi banta hai.

Agar deficiency below 20 ng/mL aaye toh baby mein Rickets ya weak bones ho sakti hain, low birth weight ka risk hota hai aur mother mein osteomalacia ho sakti hai.`,
    whenDoctor: 'First trimester mein routine prenatal checkup ke hissa ke taur pe test hota hai. Bone pain, muscle cramps ya zyada thakaan aane pe bhi karwayein. Agar report low aaye toh ghabrao mat, supplement se theek ho jaata hai. Dose khud mat lo, doctor se puchh ke lo.',
  },

  highMeans: [
    'Vitamin D supplements bahut zyada dose mein lena, bina doctor ke',
    'Multivitamins ke saath alag se Vitamin D bhi lena',
    'Over-the-counter sachets ya capsules khud se lena',
    'Kuch prescription medications ka side effect',
    'Sarcoidosis jaisi granulomatous disease mein body khud zyada Vitamin D activate karti hai',
    'High hone pe nausea, vomiting, constipation, zyada pyaas, zyada peshab, weakness ho sakti hai',
    'Severe cases mein kidney stones ya kidney damage ho sakta hai kyunki blood calcium bahut badh jaata hai',
  ],

  highReassurance: 'Sirf dhoop mein rehne ya normal khaane se Vitamin D kabhi toxic level tak nahi jaata. Ye sirf supplements ki wajah se hota hai. Supplements band karo aur doctor se milein.',

  lowMeans: [
    'Dhoop mein bahut kam waqt rehna, indoor job, fully covered clothing',
    'Dark skin tone kyunki melanin zyada hone se Vitamin D synthesis kam hoti hai',
    'Vegetarian ya vegan diet mein fatty fish aur egg yolk jaisi cheezein nahi hoti',
    'Crohn\'s, Celiac ya bariatric surgery ke baad malabsorption ki problem',
    'Kidney ya liver ki bimari jisme Vitamin D active form mein convert nahi hoti',
    'Obesity mein fat cells Vitamin D store karke rok leti hain, circulation mein nahi aata',
    'Buzurg log kyunki skin ki Vitamin D banane ki capacity umar ke saath kam hoti hai',
    'Steroids, anticonvulsants ya kuch antifungal medicines ka long-term use',
  ],

  lowConcern: 'India mein Vitamin D low hona bahut common hai, akele report dekhkar ghabrao mat. Below 10 ng/mL severe deficiency hai toh doctor se zaroor milein. Doctor ki guidance se supplements lekar ye theek ho jaata hai.',

  redFlags: [
    'Vitamin D 10 ng/mL se neeche aaye',
    'Haddi mein fracture aaya ho bina kisi badi injury ke',
    'Bachche mein Vitamin D bahut low ho aur pair tedhe ho rahe hon',
    'Bahut zyada thakaan, weakness aur bone pain ek saath ho',
    'Pregnant hain aur Vitamin D below 20 ng/mL aaye',
    'Supplements le rahe hain aur Vitamin D 100 ng/mL se upar aaye',
    'Kidney stone ka pehle se history hai aur Vitamin D high aa rahi hai',
    'Nausea, vomiting, zyada pyaas aa rahi hai aur supplements chal rahe hain',
  ],

  emergencyLevel: 'Vitamin D 10 ng/mL se neeche aaye toh doctor ka immediate attention chahiye. Supplements le rahe hain aur 100 ng/mL se upar aaye toh bhi zaroor milein.',

  selfTreatWarning: 'Report dekhkar khud Vitamin D supplement mat shuru karo. Ye fat-soluble vitamin hai jo body mein store hoti hai. Galat dose se toxicity ho sakti hai. Dose hamesha doctor decide karta hai.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Koi specific time nahi, subah ya dopahar kisi bhi waqt de sakte hain',
    whatToEat: 'Koi restriction nahi hai. Normal khaana khao aur paani piyo, hydrated rehna better results ke liye acha hai.',
    whatToAvoid: 'Test se 1 hafte pehle agar Vitamin D ka bada dose (injection ya sachet) liya ho toh doctor ko batao, results temporarily high aa sakte hain.',
    medicineNote: 'Vitamin D supplements ya multivitamins le rahe hain toh doctor ko zaroor batao kyunki ye test results directly affect karte hain. Steroids ya anticonvulsants bhi Vitamin D levels affect karti hain.',
    accuracyNote: 'Agar saath mein calcium ya PTH test bhi likha hai toh lab se fasting ke baare mein confirm kar lein.',
  },

  sampleInfo: {
    sampleType: 'Blood (venipuncture, haath ki nass se)',
    sampleAmount: 'Lagbhag 2 se 3 mL, bahut thoda sa',
    reportTime: '24 se 48 ghante (kuch labs same-day results dete hain)',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Vitamin D test ke liye khaali pet rehna zaroori hai',
      truth: 'Bilkul galat. Kuch bhi khakar test dene jaayein. Fasting sirf tab lagti hai jab saath mein calcium ya PTH test bhi ho.',
    },
    {
      _key: 'myth2',
      myth: 'Vitamin D low hai matlab zaroor serious bimari hai',
      truth: 'India mein 50 se 80 percent log Vitamin D deficiency se affect hain. Sirf low report se koi diagnosis nahi hoti. Supplements aur lifestyle changes se zyaadaatar cases theek ho jaate hain.',
    },
    {
      _key: 'myth3',
      myth: 'Bahut dhoop mein rehta hoon toh mujhe deficiency nahi ho sakti',
      truth: 'Dark skin, covered clothing, glass ke andar ki dhoop aur pollution Vitamin D banne mein rukawat daalte hain. Bade sheher ke logon mein bhi deficiency milti hai.',
    },
    {
      _key: 'myth4',
      myth: 'Vitamin D supplement bina test ke khud le sakta hoon',
      truth: 'Vitamin D body mein store hoti hai. Bina test ke zyada dose lena toxicity ka risk deta hai. Pehle test karo phir doctor ki bataayi dose lo.',
    },
    {
      _key: 'myth5',
      myth: 'Vitamin D sirf haddiyon ke liye hoti hai',
      truth: 'Immunity, mood, muscles, heart health aur nervous system sab pe Vitamin D ka asar hota hai. 200 se zyada body functions mein iska role hai.',
    },
    {
      _key: 'myth6',
      myth: 'Ye test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle, 2 se 3 seconds ka kaam. Routine blood test jitna hi simple hai.',
    },
    {
      _key: 'myth7',
      myth: 'Vitamin D deficiency aur calcium deficiency ek hi cheez hai',
      truth: 'Dono alag hain. Vitamin D ki kami se calcium absorb nahi hota lekin blood mein calcium normal bhi ho sakta hai jab Vitamin D low ho. Dono ki alag jaanch hoti hai.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Calcium Test',
      comparedTestSlug: 'calcium-test',
      differencePoints: [
        'Kya naapata hai | Vitamin D stores body mein | Blood calcium level',
        'Kab zaruri | Deficiency ya toxicity check | Bone ya kidney issues',
        'Fasting | Zaroori nahi | Zaroori nahi',
        'Saath mein | Calcium aur PTH | Vitamin D aur PTH',
        'Khaas baat | Ek low ho toh doosra normal bhi ho sakta hai | Dono alag cheezein hain',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'PTH Test',
      comparedTestSlug: '',
      differencePoints: [
        'Kya naapata hai | Vitamin D ki maatra | Parathyroid hormone',
        'Kab zaruri | Deficiency aur monitoring | Calcium imbalance ya bone disease',
        'Fasting | Zaroori nahi | Zaroori nahi',
        'Report time | 24 se 48 ghante | 24 se 48 ghante',
        'Common pattern | Low Vitamin D | PTH high aur Vitamin D low ek saath',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'Vitamin D 1,25-OH (Advanced)',
      comparedTestSlug: 'vitamin-d-test',
      differencePoints: [
        'Naam | 25-OH Vitamin D Standard Test | 1,25-OH Vitamin D Active Form',
        'Kab kiya jaata | Routine check, sabse common | Kidney failure ya special cases',
        'Kya dikhata hai | Body mein stores, sabse accurate | Active form, stores nahi dikhata',
        'Recommended | Zyaadaatar patients ke liye | Sirf specialist cases mein',
      ],
    },
  ],

  repeatInfo: `Agar deficiency hai aur supplements shuru kiye hain toh 3 mahine baad test repeat karo. Dekho levels improve hue ya nahi. Levels 40 se 60 ng/mL pe aa jaayein toh 6 mahine baad dobara check karo.

Normal levels ke baad har 6 se 12 mahine mein check karo, khaaskar agar elderly ho, pregnancy ho ya indoor job karte ho.

Bade dose ke injection ya sachets chal rahe hain toh doctor 1 se 3 mahine mein hi monitor karate hain taaki toxicity na ho.

Ek baar levels theek ho jaayein toh lifestyle maintain karo yaani dhoop aur balanced diet. Healthy adults ke liye annual check kafi hai.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Vitamin D Deficiency', diseaseSlug: 'vitamin-d-deficiency', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Osteoporosis', diseaseSlug: 'osteoporosis', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Depression', diseaseSlug: 'depression', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Rickets (Bacchon mein)', diseaseSlug: 'rickets', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Osteomalacia', diseaseSlug: 'osteomalacia', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Chronic Kidney Disease', diseaseSlug: 'chronic-kidney-disease', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Calcium Test', testSlug: 'calcium-test', isAvailable: false },
    { _key: 'rt2', testName: 'PTH Test', testSlug: 'pth-test', isAvailable: false },
    { _key: 'rt3', testName: 'Phosphorus Test', testSlug: 'phosphorus-test', isAvailable: false },
    { _key: 'rt4', testName: 'CBC Test', testSlug: 'cbc', isAvailable: true },
    { _key: 'rt5', testName: 'Thyroid Profile (TSH)', testSlug: 'thyroid-profile-tsh', isAvailable: true },
    { _key: 'rt6', testName: 'Lipid Profile', testSlug: 'lipid-profile', isAvailable: true },
  ],

  homeopathyAngle: `Ek abnormal Vitamin D report ek signal hai ki body ko support chahiye, ghabrao mat.

Apni report lekar doctor se milein. Conventional treatment mein Vitamin D supplements diye jaate hain. Lekin agar baar baar deficiency wapas aaye toh root cause samajhna zaroori hai. Absorption ki problem hai? Lifestyle issue hai? Koi aur condition hai?

Homeopathy is situation mein underlying cause address karne mein helpful ho sakti hai. Malabsorption, chronic thakaan ya recurrent deficiency mein individualized treatment poori health history dekh ke ki jaati hai. Side effects practically nahi hote.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Vitamin D test kya hota hai?',
      answer: 'Vitamin D test ek simple blood test hai jo aapke blood mein 25-Hydroxy Vitamin D ki maatra naapata hai. Isse pata chalta hai ki kami hai, toxicity hai ya levels normal hain.',
    },
    {
      _key: 'faq2',
      question: 'Vitamin D test ka doosra naam kya hai?',
      answer: '25-OH Vitamin D test, Serum 25-Hydroxyvitamin D test ya 25(OH)D test bhi kaha jaata hai. Lab report mein koi bhi naam dikh sakta hai.',
    },
    {
      _key: 'faq3',
      question: 'Vitamin D ka normal range kitna hona chahiye?',
      answer: 'Adults mein 30 se 100 ng/mL sufficient maana jaata hai. India ke experts 40 se 60 ng/mL ko optimal maante hain. 20 se neeche deficiency hai aur 10 se neeche severe deficiency.',
    },
    {
      _key: 'faq4',
      question: 'Vitamin D test ke liye khaali pet rehna padta hai kya?',
      answer: 'Nahi, Vitamin D test ke liye fasting bilkul zaroori nahi. Kuch bhi khakar test dene ja sakte hain. Sirf agar saath mein calcium ya PTH test bhi ho tab doctor fasting bol sakte hain.',
    },
    {
      _key: 'faq5',
      question: 'Vitamin D test painful hota hai kya?',
      answer: 'Bilkul nahi. Ek chhoti si needle se 2 se 3 mL blood nikalti hai, sirf 2 se 3 seconds. Routine blood test jitna hi simple hai.',
    },
    {
      _key: 'faq6',
      question: 'Vitamin D test ki report kitne time mein aati hai?',
      answer: 'Zyaadaatar labs mein 24 se 48 ghante mein report aa jaati hai. Kuch labs same-day results deti hain. Online report email ya WhatsApp pe bhi milti hai.',
    },
    {
      _key: 'faq7',
      question: 'Vitamin D low hone ke kya symptoms hote hain?',
      answer: 'Thakaan, haddi aur muscles mein dard, baar baar beemar padna, mood gira rehna aur weakness feel hona possible symptoms hain. Lekin akele symptoms se confirm nahi hota, test zaroori hai.',
    },
    {
      _key: 'faq8',
      question: 'Kya ghar pe Vitamin D test ho sakta hai?',
      answer: 'Haan, Dr Lal PathLabs, Metropolis aur Aster jaisi labs home sample collection offer karti hain. Online book karo aur phlebotomist ghar aa jaayega.',
    },
    {
      _key: 'faq9',
      question: 'Vitamin D high hone se kya hota hai?',
      answer: '100 ng/mL se upar hone pe nausea, vomiting, kidney problem aur blood mein calcium badh jaata hai. Ye sirf zyada supplements lene se hota hai, dhoop se kabhi nahi. Supplements band karo aur doctor se milein.',
    },
    {
      _key: 'faq10',
      question: 'Vitamin D kaunsi bimariyon se related hai?',
      answer: 'Osteoporosis, Rickets, Osteomalacia, depression, weak immunity aur Type 2 Diabetes risk se Vitamin D ka connection research mein aaya hai.',
    },
    {
      _key: 'faq11',
      question: 'Vitamin D test kitni baar karaye?',
      answer: 'Deficiency ke treatment ke baad 3 mahine mein karaye. Normal ho jaaye toh 6 se 12 mahine mein. Elderly, pregnancy ya indoor job wale 6 mahine pe zaroor check karein.',
    },
    {
      _key: 'faq12',
      question: 'Kya Vitamin D test pregnant women ke liye zaroori hai?',
      answer: 'Haan, pregnancy mein Vitamin D baby ke bone development aur mother ki health ke liye zaroori hai. First trimester routine check mein ye shamil hota hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya Vitamin D test se cancer ka pata chalta hai?',
      answer: 'Nahi, ye test sirf Vitamin D levels batata hai. Kuch research cancer risk aur Vitamin D ke beech association suggest karti hai lekin ye cancer ka diagnostic test nahi hai.',
    },
    {
      _key: 'faq14',
      question: 'Bacchon mein Vitamin D test kab karna chahiye?',
      answer: 'Agar bachcha uthna baithna seekh raha ho aur der lag rahi ho, pair tedhe lag rahe hon ya baar baar beemar padta ho toh doctor se milein. India mein bacchon mein bhi Vitamin D deficiency bahut common hai.',
    },
    {
      _key: 'faq15',
      question: 'Vitamin D supplement bina test ke khud le sakta hoon kya?',
      answer: 'Nahi. Vitamin D fat-soluble hai aur body mein accumulate hoti hai. Bina test ke zyada dose lena toxicity ka risk deta hai. Pehle test karein phir doctor ki dose pe chalein.',
    },
    {
      _key: 'faq16',
      question: 'Report mein Vitamin D ki value kaise samjhein?',
      answer: 'Report mein value ng/mL ya nmol/L mein hogi. 30 se 100 ng/mL normal range hai. Neeche aayi toh deficiency hai aur 100 se upar gaya toh possible toxicity, dono cases mein doctor se milein.',
    },
    {
      _key: 'faq17',
      question: 'Kya Vitamin D deficiency ka pata blood test se hi chalta hai?',
      answer: 'Haan, 25-Hydroxy Vitamin D blood test hi sabse accurate tarika hai. Symptoms se doubt ho sakta hai lekin confirm karne ke liye test zaroori hai.',
    },
    {
      _key: 'faq18',
      question: 'Vitamin D aur Vitamin D3 test mein kya fark hai?',
      answer: 'Vitamin D3 ek form hai jo skin sunlight se banati hai ya supplements mein hota hai. Standard 25-OH Vitamin D test total Vitamin D naapata hai jisme D2 aur D3 dono shamil hain. Most cases mein total 25-OH test hi kafi hota hai.',
    },
    {
      _key: 'faq19',
      question: 'Is test ki zarurat kab nahi hoti?',
      answer: 'Koi symptoms nahi hain, outdoor lifestyle hai, balanced diet hai aur age 30 se 50 ke beech hai with no risk factors toh routine testing ki zarurat nahi. Doctor ke recommend karne pe hi karaye.',
    },
    {
      _key: 'faq20',
      question: 'Vitamin D test kahan se karaye?',
      answer: 'NABL-accredited lab se karaye jaise Dr Lal PathLabs, Metropolis, Aster Labs ya SRL Diagnostics. Home collection bhi available hai.',
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
