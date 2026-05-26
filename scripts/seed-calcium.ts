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

const calcium = {
  _id: 'vitamin-calcium',
  _type: 'vitamin',
  name: 'Calcium',
  hindiName: 'Haddiyon Ka Mineral',
  category: 'Mineral',
  slug: { _type: 'slug', current: 'calcium' },
  metaTitle: 'Calcium Ki Kami: Lakshan, Foods & Homeopathic Ilaj 2026',
  metaDescription: 'Calcium ki kami ke lakshan, vegetarian food sources, normal range, supplement types aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: 'Meri practice mein jo patients joint pain aur muscles cramps lekar aate hain — unme se zyada tar log specifically night cramps describe karte hain, jo calcium ki kami ki classic early sign hai. Aur dono — women especially 35-50 age group mein — inke Vitamin D levels bhi saath saath low milte hain. Sirf calcium dene se fark nahi padta jab tak Vitamin D theek na ho. Ye dono simultaneously treat karna padta hai.',

  quickFacts: {
    indiaPrevalence: 'Average Indian sirf 400–500 mg calcium roz leta hai — ICMR ki 1000 mg/day RDA se aadha (ICMR-NIN 2020)',
    commonDeficiencySign: 'Paon aur haath mein cramps aana, raaton ko muscles mein khinchaav — calcium ki kami ka sabse pehla sign',
    mainFoodSource: 'Ragi (Finger Millet) — 100 gm mein 360 mg calcium, milk se bhi zyada! (NIN Food Tables)',
    normalRangeQuick: '8.5–10.2 mg/dL (Serum Calcium)',
  },

  whatIsIt: 'Calcium body ka sabse zyada paaya jaane wala mineral hai. 99% calcium hamare haddiyon aur danton mein hota hai — wahan se body zaroorat padne par use karta hai. Baaki 1% blood aur muscles mein rehta hai jahan ye heart beat, muscles ka kaam, aur nerves ka signal dene mein madadgar hota hai. Isko sirf "haddiyon ka mineral" mat samjho — ye heart, brain, aur muscles ke liye bhi utna hi zaroori hai.',

  bodyFunctions: [
    'Haddiyon aur danton ka nirman — Calcium bones ko structure aur mazbooti deta hai, Vitamin D ke saath milkar kaam karta hai',
    'Muscle contraction — Dil ki dhadkan se lekar haath-paon chalane tak, har muscle movement mein calcium chahiye. Kami mein cramps aate hain',
    'Nerve signaling — Brain aur body ke beech message bhejna calcium ki madad se hota hai; kami mein numbness aur jhunjhunahat hoti hai',
    'Blood clotting — Chot lagne par khoon band hona (clotting) ek complex process hai; calcium is chain ka zaroori hissa hai',
    'Hormone secretion — Insulin aur kuch hormones release karne ke liye bhi calcium chahiye',
    'Blood pressure regulate karna — Research suggests karta hai ki sahi calcium intake blood pressure normal rakhne mein madad karta hai',
    'Cell membrane function — Calcium har cell ki outer wall ko stable rakhta hai; isliye ye practically har organ ko affect karta hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Muscles mein cramps aur khinchaav — khaaskar raaton ko haath-paon mein cramps aana; calcium muscles ko relax karne ke liye zaroori hai',
      'Haath-paon mein numbness ya jhunjhunahat (tingling) — low calcium se nerve signals disturb hote hain',
      'Haddiyon mein dard aur weakness — severe ya long-term kami mein bones weak aur achy hoti hain',
      'Osteopenia aur Osteoporosis — haddiyon ki density kam hona, fracture ka risk badhna',
      'Back pain aur joint pain — vertebrae weak hone se back pain common ho jaata hai',
      'Danton ka jaldi kharaab hona ya loosening — calcium teeth ki structure ka bhi part hai',
    ],
    energyMoodBrain: [
      'Thakan aur weakness — calcium ke bina muscles theek se kaam nahi karti, body tired rehti hai',
      'Chakkar aana ya confusion — severe low calcium (hypocalcemia) mein brain function affect ho sakta hai',
      'Anxiety, irritability — kuch studies mein low calcium aur mood disturbances ka connection dekha gaya hai',
      'Neend mein takleef — muscles relax nahi kar paati to neend bhi disturbed hoti hai',
    ],
    skinHairNails: [
      'Nails ka brittle hona, jaldi tootna — calcium nails ki structure ke liye zaroori hai',
      'Skin ka dry aur rough hona — calcium skin cell turnover mein role karta hai',
      'Baalon ka jaldi tootna, dry hair — chronic kami mein baal bhi affect ho sakte hain',
      'Nails mein white spots — kami ek contributing factor ho sakta hai',
    ],
    other: [
      'Tetany (severe muscle spasms) — gahari kami ka serious sign; haath aur face ki muscles achanak tightly contract ho jaati hain',
      'Seizures (fits) — very severe hypocalcemia mein nerve function itna disturb ho jaata hai ki seizures aa sakte hain',
      'Dil ki dhadkan mein irregularity — very low calcium levels arrhythmia cause kar sakte hain',
      'PMS ke symptoms zyada severe hona (females) — research suggests calcium PMS symptoms reduce karta hai',
      'Bacchon mein: Rickets, growth mein rukawat, danton ka late aana, hypocalcemic fits',
    ],
  },

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',          normal: '8.5–10.2 mg/dL', deficient: '<8.5 mg/dL',  toxic: '>10.5 mg/dL', unit: 'mg/dL' },
    { _key: 'nr2', category: 'Adult Female',         normal: '8.5–10.2 mg/dL', deficient: '<8.5 mg/dL',  toxic: '>10.5 mg/dL', unit: 'mg/dL' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)',   normal: '8.8–10.8 mg/dL', deficient: '<8.8 mg/dL',  toxic: '>11.0 mg/dL', unit: 'mg/dL' },
    { _key: 'nr4', category: 'Pregnancy',            normal: '8.5–10.2 mg/dL', deficient: '<8.5 mg/dL',  toxic: '>10.5 mg/dL', unit: 'mg/dL' },
    { _key: 'nr5', category: 'Elderly (60+)',        normal: '8.5–10.0 mg/dL', deficient: '<8.5 mg/dL',  toxic: '>10.2 mg/dL', unit: 'mg/dL' },
    { _key: 'nr6', category: 'Newborn (0–1 mahina)', normal: '7.0–12.0 mg/dL', deficient: '<7.0 mg/dL',  toxic: '>12.0 mg/dL', unit: 'mg/dL' },
    { _key: 'nr7', category: 'Ionized Calcium',      normal: '4.65–5.25 mg/dL', deficient: '<4.65 mg/dL', toxic: '>5.25 mg/dL', unit: 'mg/dL' },
  ],

  pregnancyInfo: {
    applicable: true,
    note: 'Pregnancy mein daily 1000 mg calcium zaroori hai (ICMR 2020). Baby ki haddiyon, danton, aur heart ki development ke liye ye critical period hota hai. Kami se baby ki bone density aur teeth development pe negative impact padta hai, premature birth ka risk badhta hai, aur neonatal hypocalcemia ho sakta hai. Doctor-prescribed calcium supplement pregnancy mein safe aur recommended hai. Koi bhi supplement lene se pehle apna doctor zaroor consult karein.',
  },

  childrenInfo: 'Bacchon mein calcium ki kami ke specific lakshan: legs mein bow-shape (rickets), danton ka late aana ya teeth weak hona, muscle weakness, jaldi thakna, growth mein rukaawat. Chote bacchon mein hypocalcemic seizures (fits) bhi ho sakte hain — ye emergency hai. Daily requirement: 1-3 saal: 500 mg, 4-6 saal: 550 mg, 7-9 saal: 650 mg, 10-15 saal: 850-1000 mg. Ragi ka daliya, paneer, doodh, dahi, til chutney kid-friendly calcium-rich options hain. Agar kami blood test se confirm ho tab hi doctor-prescribed supplement do.',

  vegSources: [
    { _key: 'v1',  food: 'Ragi (Finger Millet)',              quantity: '100 gm',        amount: '360 mg' },
    { _key: 'v2',  food: 'Doodh — Bhains (Buffalo Milk)',     quantity: '1 glass 250ml', amount: '~520 mg' },
    { _key: 'v3',  food: 'Doodh — Gaay (Cow Milk)',           quantity: '1 glass 250ml', amount: '~300 mg' },
    { _key: 'v4',  food: 'Khoya',                             quantity: '100 gm',        amount: '600 mg' },
    { _key: 'v5',  food: 'Methi Patta (Fenugreek Leaves)',    quantity: '100 gm',        amount: '270 mg' },
    { _key: 'v6',  food: 'Bathua Saag',                       quantity: '100 gm',        amount: '211 mg' },
    { _key: 'v7',  food: 'Rajgira / Ramdana (Amaranth)',      quantity: '100 gm',        amount: '162 mg' },
    { _key: 'v8',  food: 'Tofu',                              quantity: '100 gm',        amount: '300–350 mg' },
    { _key: 'v9',  food: 'Dahi (Curd)',                       quantity: '1 katori 150gm', amount: '~200 mg' },
    { _key: 'v10', food: 'Paneer (Cottage Cheese)',           quantity: '30 gm',         amount: '~96 mg' },
    { _key: 'v11', food: 'Til (Sesame Seeds)',                quantity: '15 gm (1 tbsp)', amount: '~90 mg' },
    { _key: 'v12', food: 'Bhindi (Lady Finger)',              quantity: '100 gm',        amount: '85 mg' },
    { _key: 'v13', food: 'Palak (Spinach)',                   quantity: '100 gm',        amount: '83 mg*' },
    { _key: 'v14', food: 'Almonds (Badam)',                   quantity: '25 gm (~20 pc)', amount: '~60 mg' },
    { _key: 'v15', food: 'Soyabean',                          quantity: '30 gm',         amount: '~72 mg' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Sardines (canned)', quantity: '100 gm',   amount: '~350 mg' },
    { _key: 'nv2', food: 'Mackerel',          quantity: '100 gm',   amount: '~150 mg' },
    { _key: 'nv3', food: 'Egg (Anda)',         quantity: '1 anda',   amount: '~25–30 mg' },
  ],

  sunlightNote: 'Roz ek glass bhains ka doodh + 1 katori dahi + 2 ragi roti — ye combination din ki lagbhag 600–700 mg calcium zaroorat puri karta hai. Til ke laddoo ya chutney — ye traditional Indian mithai calcium ke liye bahut achha source hai. *Palak mein oxalic acid bhi hai jo absorption roke — nimbu nichar lo ya Vitamin C ke saath khao for better absorption. Ragi ko roast karke khao — phytate reduce hota hai.',

  dailyRequirement: [
    { _key: 'd1',  ageGroup: 'Infants (0–6 months)', male: '300',  female: '300',  pregnancy: null,   breastfeeding: null,   unit: 'mg/day' },
    { _key: 'd2',  ageGroup: '6–12 months',           male: '400',  female: '400',  pregnancy: null,   breastfeeding: null,   unit: 'mg/day' },
    { _key: 'd3',  ageGroup: '1–3 saal',              male: '500',  female: '500',  pregnancy: null,   breastfeeding: null,   unit: 'mg/day' },
    { _key: 'd4',  ageGroup: '4–6 saal',              male: '550',  female: '550',  pregnancy: null,   breastfeeding: null,   unit: 'mg/day' },
    { _key: 'd5',  ageGroup: '7–9 saal',              male: '650',  female: '650',  pregnancy: null,   breastfeeding: null,   unit: 'mg/day' },
    { _key: 'd6',  ageGroup: '10–12 saal',            male: '850',  female: '850',  pregnancy: null,   breastfeeding: null,   unit: 'mg/day' },
    { _key: 'd7',  ageGroup: '13–17 saal',            male: '1000', female: '1000', pregnancy: null,   breastfeeding: null,   unit: 'mg/day' },
    { _key: 'd8',  ageGroup: 'Adults (19–50)',         male: '1000', female: '1000', pregnancy: '1000', breastfeeding: '1200', unit: 'mg/day' },
    { _key: 'd9',  ageGroup: 'Adults (51–70)',         male: '1000', female: '1000', pregnancy: null,   breastfeeding: null,   unit: 'mg/day' },
    { _key: 'd10', ageGroup: 'Elderly (70+)',          male: '1000', female: '1000', pregnancy: null,   breastfeeding: null,   unit: 'mg/day' },
  ],

  labTestInfo: {
    testName: 'Serum Calcium Test',
    testSlug: 'calcium-test',
    sampleType: 'Blood (serum)',
    fastingRequired: false,
    note: 'Emergency levels: <6.0 mg/dL ya >13.0 mg/dL — turant doctor ke paas jayein. Borderline cases mein Ionized Calcium test bhi karwayein (zyada precise). Test price India: Rs. 150–400. 3 mahine supplementation ke baad repeat karwao.',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Calcium Carbonate (Shelcal, Calcimax)',
      benefits: ['Sabse zyada elemental calcium — 40%', 'Sasta aur widely available India mein', 'Antacid bhi hai — acidity mein bhi help karta hai'],
      drawbacks: ['Khane ke saath lena ZAROORI — stomach acid chahiye', 'Constipation zyada hoti hai', 'Elderly ya PPI users mein absorption kam'],
      bestFor: 'Healthy adults, budget-conscious patients',
    },
    {
      _key: 'sf2',
      formName: 'Calcium Citrate (Citracal)',
      benefits: ['Khali pet bhi le sakte ho — stomach acid ki zaroorat nahi', 'Constipation kam hoti hai', 'Elderly ke liye better absorption', 'PPI medicine lene wale logo ke liye better'],
      drawbacks: ['Thoda mehnga', 'Elemental calcium 21% — thoda kam', 'Zyada tablets lene padte hain same dose ke liye'],
      bestFor: 'Elderly patients, PPI users, low stomach acid wale, constipation-prone',
    },
    {
      _key: 'sf3',
      formName: 'Calcium + Vitamin D3 (Shelcal-D3, Calcimax-D3)',
      benefits: ['Vitamin D calcium absorb karne ke liye zaroori — ek saath lene se absorption better', 'India mein Vitamin D bhi deficient rehta hai — dual benefit', 'Practically sabse sensible combination majority ke liye'],
      drawbacks: ['Agar sirf calcium ki kami hai aur Vitamin D sahi hai to combination less ideal'],
      bestFor: 'Majority Indian patients — sabse recommended combination',
    },
    {
      _key: 'sf4',
      formName: 'Calcium + D3 + K2 (Premium formulations)',
      benefits: ['Vitamin K2 calcium ko haddiyon mein sahi jagah deposit karne mein help karta hai', 'Arteries mein calcium deposits rokta hai', 'Long-term bone health ke liye better maana jaata hai'],
      drawbacks: ['Mehnga', 'India mein widely available nahi'],
      bestFor: 'Osteoporosis risk mein ya doctor ne specifically suggest kiya ho',
    },
  ],

  supplementTiming: {
    bestTime: 'Calcium Carbonate: Khane ke saath lo — meals ki acidity absorption badhati hai. Calcium Citrate: Khali pet bhi le sakte ho. Ek time mein 500 mg se zyada mat lo — body properly absorb nahi karti. 1000 mg hai to do baar mein banto (subah + raat).',
    withFood: 'Carbonate: Zaroor khane ke saath. Citrate: Dono time chalega. Ek full glass paani ke saath lo.',
    withFat: null,
    withCalcium: 'Vitamin D ke saath zaroor lo — absorption 2x badhta hai.',
    avoid: 'Chai/coffee ke saath bilkul mat lo. Iron supplement se 2–3 ghante ka gap rakhein. Thyroid medicine (levothyroxine) se minimum 4 ghante ka gap — bahut important!',
    note: 'Nimbu paani ya Vitamin C wala khaana plant-based calcium sources ke saath lene se absorption better hoti hai. Ragi ko roast karke khao — phytate reduce hota hai.',
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Levothyroxine / Thyronorm (thyroid medicine)', reason: 'Calcium carbonate levothyroxine ko stomach mein bind karke uski absorption rok deta hai — thyroid medicine kaam nahi karti. MINIMUM 4 GHANTE ka gap rakhein. Thyroid medicine subah khali pet, calcium lunch ya dinner ke saath.' },
    { _key: 'di2', medicineName: 'Iron Supplement (Ferrous Sulphate / Ferrous Bisglycinate)', reason: 'Calcium aur iron intestines mein absorption ke liye compete karte hain — dono saath lene se dono ka absorption ghata hai. Iron aur calcium mein 2–3 ghante ka gap rakhein.' },
    { _key: 'di3', medicineName: 'Antibiotics — Tetracyclines (Doxycycline) / Quinolones (Ciprofloxacin, Levofloxacin)', reason: 'Calcium in antibiotics ke molecules se bind ho jaata hai — antibiotic blood mein sahi se nahi jaati, infection theek nahi hota. Antibiotic se 2 ghante pehle ya 2 ghante baad lo.' },
    { _key: 'di4', medicineName: 'Bisphosphonates (Alendronate / Risedronate — osteoporosis ki dawa)', reason: 'Calcium bisphosphonate absorption seriously reduce karta hai. Bisphosphonate khali pet subah lo; calcium us din kam se kam 2 ghante baad lo.' },
    { _key: 'di5', medicineName: 'Thiazide Diuretics (HCTZ / Hydrochlorothiazide — BP ki dawa)', reason: 'Ye medicines blood mein calcium levels badha sakti hain. Calcium supplement ke saath lene se hypercalcemia ka risk badh jaata hai. Sirf doctor ke advice par combine karein.' },
  ],

  combinations: {
    beneficial: [
      'Vitamin D3 — Vitamin D calcium ko intestine se absorb karne ke liye signal deta hai. Bina Vitamin D ke khaya hua calcium kaafi had tak waste ho jaata hai. India mein ye combination sabse important hai',
      'Magnesium — calcium ko cells ke andar sahi tarike se use karne mein help karta hai. Muscles ke liye complimentary — cramps mein dono ki zaroorat hoti hai',
      'Vitamin K2 — K2 ensure karta hai ki calcium haddiyon mein jaaye, arteries mein deposit na ho. D3+K2+Calcium combination long-term ke liye better',
      'Vitamin C (khane mein) — plant-based calcium sources (palak, ragi) ke saath Vitamin C lene se absorption thodi better hoti hai',
    ],
    avoid: [
      'Iron supplement — absorption mein compete karte hain, 2–3 ghante ka gap rakhein',
      'High-dose Zinc — calcium zinc absorption reduce kar sakta hai; timings separate rakhna better',
      'Chai ya coffee ke saath — tannins absorption rok sakti hain, 1 ghante ka gap rakhein',
      'Zyada fibre wala khana — whole wheat roti, bran calcium ko bind karta hai; thoda gap rakhna better',
    ],
    timingGuide: 'Subah khali pet: Thyroid medicine (calcium se 4 ghante door). Subah naashte ke saath: Calcium + D3 (500 mg). Dopahar: Iron supplement (calcium se alag timing). Raat khane ke saath: Calcium doosri dose (500 mg).',
  },

  toxicity: {
    upperLimit: 'Adults (19–50): 2500 mg/day se zyada nahi | Adults (51+): 2000 mg/day se zyada nahi (NIH)',
    sideEffects: [
      'Constipation aur bloating — sabse common side effect',
      'Kidney stones — calcium oxalate stones ka risk, especially agar paani kam pite ho',
      'Hypercalcemia (blood mein calcium zyada) — nausea, weakness, confusion, frequent urination',
      'Artery mein calcium deposits (Calcification) — kuch research mein link mila hai',
      'Milk-Alkali Syndrome — bahut zyada calcium carbonate + milk — serious kidney failure tak (rare)',
      'Iron aur Zinc ki absorption disturb hona — body ke dusre minerals ka balance bigadna',
    ],
    whenSerious: 'Turant doctor ke paas jayein agar: severe muscle weakness ya paralysis, dil ki dhadkan irregular, chakkar/confusion/extreme thakaan, bahut zyada pyaas aur baar baar peshab, peth mein severe pain.',
  },

  timeline: {
    bloodLevelTime: '4–8 hafte mein blood calcium levels improve hone lagte hain (depend karta hai kami kitni severe thi aur Vitamin D ka level kaisa hai)',
    symptomsTime: 'Muscle cramps: 4–6 hafte mein better | Energy aur thakaan: 6–8 hafte mein improvement | Nails aur hair: 3–6 mahine',
    fullRecoveryTime: 'Severe deficiency mein complete recovery 6–12 mahine | Bones ke liye 1–2 saal tak',
    repeatTestTime: '3 mahine baad blood test repeat karwao, doctor ke guidance pe dose adjust karo',
    patientNote: 'Ek hafte mein fark nahi dikhega — patience zaroori hai. Consistent supplementation aur sahi diet dono saath karo.',
  },

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Osteoporosis',   diseaseSlug: 'osteoporosis',  isAvailable: false, connection: 'Calcium ki chronic kami se bone density kam hoti hai — fracture ka risk badh jaata hai' },
    { _key: 'ld2', diseaseName: 'Rickets',         diseaseSlug: 'rickets',       isAvailable: false, connection: 'Calcium + Vitamin D ki kami se bacchon ki soft bones theek se harden nahi hoti' },
    { _key: 'ld3', diseaseName: 'Hypocalcemia',    diseaseSlug: 'hypocalcemia',  isAvailable: false, connection: 'Blood mein calcium 8.5 mg/dL se neeche — muscle spasms, tingling, seizures tak' },
    { _key: 'ld4', diseaseName: 'Hypertension',    diseaseSlug: 'hypertension',  isAvailable: false, connection: 'Chronic low calcium ko high blood pressure se link kiya gaya hai — research ongoing' },
    { _key: 'ld5', diseaseName: 'Joint Pain',      diseaseSlug: 'joint-pain',    isAvailable: false, connection: 'Calcium ki kami se joints aur bones mein dard aur weakness' },
    { _key: 'ld6', diseaseName: 'Muscle Cramps',   diseaseSlug: 'muscle-cramp',  isAvailable: false, connection: 'Calcium ki kami muscles ke relaxation mein interfere karta hai — cramps ka direct cause' },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Muscle Cramps', symptomSlug: 'muscle-cramps', isAvailable: false },
    { _key: 'ls2', symptomName: 'Thakaan',       symptomSlug: 'thakaan',       isAvailable: false },
    { _key: 'ls3', symptomName: 'Back Pain',     symptomSlug: 'back-pain',     isAvailable: false },
    { _key: 'ls4', symptomName: 'Brittle Nails', symptomSlug: 'brittle-nails', isAvailable: false },
    { _key: 'ls5', symptomName: 'Joint Pain',    symptomSlug: 'joint-pain',    isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Serum Calcium Test', testSlug: 'calcium-test',      isAvailable: false },
    { _key: 'rt2', testName: 'Vitamin D Test',      testSlug: 'vitamin-d-25-oh',  isAvailable: false },
    { _key: 'rt3', testName: 'Bone Density (DEXA)', testSlug: 'bone-density',     isAvailable: false },
    { _key: 'rt4', testName: 'Serum Magnesium',     testSlug: 'serum-magnesium',  isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin D',   vitaminSlug: 'vitamin-d'   },
    { _key: 'rv2', vitaminName: 'Magnesium',   vitaminSlug: 'magnesium'   },
    { _key: 'rv3', vitaminName: 'Iron',         vitaminSlug: 'iron'        },
    { _key: 'rv4', vitaminName: 'Vitamin K2',   vitaminSlug: 'vitamin-k2'  },
  ],

  homeopathicAlternatives: [
    {
      _key: 'ha1',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Heavy-set, thaka hua, sweating zyada karna — especially sar aur haath-paon ka paseena. Bacchon mein rickets ke symptoms mein bhi.',
      howItHelps: 'Calcium metabolism support karne mein classically use hoti hai. Digestive weakness se jo calcium absorb nahi ho rahi — wahan ye zyada kaam aata hai.',
    },
    {
      _key: 'ha2',
      medicineName: 'Calcarea Phosphorica',
      patientType: 'Patle-patange, easily thakne wale — bacche jo slowly grow kar rahe ho, adolescents jinhe growing pains ho, elderly jinhe bone weakness ho.',
      howItHelps: 'Bones ki growth aur repair mein support karta hai. Calcium + Phosphorus dono milke bones ke liye kaam karte hain — growing children aur elderly dono ke liye complementary.',
    },
    {
      _key: 'ha3',
      medicineName: 'Silicea',
      patientType: 'Weak nails, thin brittle hair, skin problems ke saath calcium ki kami — physically weak aur thin patients.',
      howItHelps: 'Connective tissue aur bone health mein supporting role hai. Absorption related issues mein bhi use hoti hai.',
    },
  ],

  myths: [
    { _key: 'm1', myth: 'Sirf doodh peene se calcium ki poori zaroorat puri ho jaati hai', truth: 'Doodh calcium ka acha source hai, par India mein bahut log lactose intolerant hain ya doodh avoid karte hain. Ragi (360 mg/100gm) mein doodh se ZYADA calcium hai. Til, paneer, dahi, methi, rajgira — ye sab comparable alternatives hain. NIN food data verified hai.' },
    { _key: 'm2', myth: 'Calcium supplement khaate rehna safe hai — jyada lene se aur fayda hoga', truth: 'Calcium ka Upper Limit (UL) 2500 mg/day hai NIH ke mutabik. Isse zyada lene se kidney stones, constipation, aur cardiovascular risk hai. Zyada lena fayda nahi — nuksan hai.' },
    { _key: 'm3', myth: 'Palak khao — bahut calcium milega', truth: 'Palak mein calcium hai (83 mg/100gm) par usme oxalic acid bhi hai jo calcium ko bind karke absorption rokta hai. Palak se calcium absorption bahut low hai. Better options: methi patta (270 mg), bathua (211 mg), ragi (360 mg). Palak ke saath nimbu lagana thoda help karta hai.' },
    { _key: 'm4', myth: 'Calcium aur iron saath le sakte hain — dono to supplement hi hain', truth: 'Ye dono intestines mein same receptor se compete karte hain. Saath lene se dono ki absorption kam ho jaati hai. Iron aur calcium mein minimum 2-3 ghante ka gap zaroor rakhein — khaaskar pregnancy mein.' },
    { _key: 'm5', myth: 'Agar haddiyon mein dard nahi toh calcium sahi hai', truth: 'Calcium ki kami ke early stages mein haddi dard nahi hoti. Muscles cramps, tingling, fatigue — ye pehle aate hain. Tab tak bones already silent nuksaan uthaa rahi hoti hain. Seedha pata blood test se hi lagta hai — symptoms reliable indicator nahi hain.' },
  ],

  faqs: [
    { _key: 'faq1',  question: 'Calcium ki kami ke lakshan kya hain?',             answer: 'Calcium ki kami ke sabse common lakshan hain — muscles mein cramps aur khichaav (khaaskar raaton ko haath-paon mein), haath-paon mein numbness ya jhunjhunahat, nails ka brittle hona, thakaan, aur danton mein problems. Zyada severe kami mein haddiyon mein dard, back pain, aur irregular heartbeat bhi ho sakta hai. India mein average Indian sirf 400-500 mg calcium roz leta hai jabki zaroorat 1000 mg ki hai (ICMR-NIN 2020). Agar ye symptoms lagataar aayein to serum calcium blood test karwao.' },
    { _key: 'faq2',  question: 'Calcium ki kami kaise puri karein?',                answer: 'Calcium ki kami puri karne ke liye teen cheezein ek saath kaam karti hain: sahi diet, Vitamin D, aur zaroorat padne par supplement. Diet mein ragi, til, paneer, dahi, doodh, methi patta zaroor shamil karo — ragi (360 mg/100gm) aur buffalo milk sabse rich sources hain. Vitamin D bhi zaroori hai warna calcium absorb nahi hoga. Agar kami blood test mein confirm ho to doctor se supplement le lo.' },
    { _key: 'faq3',  question: 'Calcium ki tablet kab khaye?',                      answer: 'Calcium Carbonate tablet khane ke saath lo — khali pet kaam nahi karta. Calcium Citrate tablet khali pet bhi le sakte ho. Ek time mein 500 mg se zyada mat lo — body zyada ek baar mein absorb nahi karti. Agar 1000 mg ki zaroorat ho to do baar lo — subah aur raat. Thyroid medicine se 4 ghante door rakhein. Iron supplement se 2-3 ghante ka gap rakhein.' },
    { _key: 'faq4',  question: 'Calcium ke liye kya khaye?',                        answer: 'Calcium ke liye sabse achhe vegetarian Indian foods: Ragi (finger millet) — 360 mg/100gm, buffalo milk — 520 mg/glass, methi patta — 270 mg/100gm, khoya — 600 mg/100gm, paneer — 96 mg/30gm, dahi — ~200 mg/katori, til (sesame seeds) — 90 mg/tbsp. Ragi ki roti, ragi daliya, til ke laddoo, aur dahi — ye Indian kitchen ke hi items hain jo calcium-rich hain.' },
    { _key: 'faq5',  question: 'Calcium ki normal range kitni honi chahiye?',        answer: 'Blood mein calcium ka normal range adult mein 8.5 se 10.2 mg/dL hona chahiye. 8.5 se kam ho to low (hypocalcemia), 10.5 se zyada ho to high (hypercalcemia) kaha jaata hai. Emergency levels: 6.0 mg/dL se kam ya 13.0 mg/dL se zyada — ye turant doctor ke paas jaane ki situation hai. "Serum Calcium" test karwao — India mein Rs. 150-400 mein milta hai.' },
    { _key: 'faq6',  question: 'Calcium ki tablet ke side effects kya hain?',        answer: 'Calcium supplement ke common side effects: constipation (khaaskar calcium carbonate se), bloating aur gas, aur kabhi kabhi nausea. Zyada dose lene par: kidney stones ka risk, hypercalcemia (weakness, confusion, frequent urination), aur long-term cardiovascular concerns. 2500 mg/day se zyada bilkul mat lo (NIH Upper Limit). Doctor ki salah ke bina high dose kabhi mat lo.' },
    { _key: 'faq7',  question: 'Pregnancy mein calcium kitna lena chahiye?',         answer: 'Pregnancy mein roz 1000 mg calcium chahiye (ICMR 2020). Baby ki haddiyon, donton, aur heart development ke liye critical hai. Agar diet se poora nahi hota to doctor pregnancy-specific calcium supplement dete hain. Supplement zaroor doctor se lein — dose aur form wo decide karein. Self-medication mat karein.' },
    { _key: 'faq8',  question: 'Bacchon mein calcium ki kami ke lakshan kya hain?',  answer: 'Bacchon mein calcium ki kami ke specific lakshan: legs mein bow-shape (rickets), danton ka late aana ya dant weak hona, muscles mein weakness, jaldi thakna, aur growth mein rukaawat. Chote bacchon mein hypocalcemic seizures (fits) bhi ho sakte hain — ye emergency hai. Agar bachche ki height-weight growth slow ho aur dant late aa rahe hon to doctor se milna zaroori hai.' },
    { _key: 'faq9',  question: 'Calcium aur iron saath mein le sakte hain?',         answer: 'Nahi — calcium aur iron ek saath lene se dono ka absorption kam ho jaata hai. Dono intestine mein same transporter se compete karte hain. Minimum 2-3 ghante ka gap rakhein. Pregnancy mein ye especially important hai — iron subah khali pet, calcium raat khane ke saath — ideal schedule hai.' },
    { _key: 'faq10', question: 'Calcium ki kami se koi bimari hoti hai?',            answer: 'Haan. Calcium ki chronic kami se osteoporosis ho sakta hai — haddiyon ki density itni kam ki fractures hone lagte hain. Bacchon mein rickets hoti hai. Blood mein severe low calcium (hypocalcemia) muscle tetany, seizures, aur dil ki irregular dhadkan cause kar sakti hai. Pregnancy mein kami baby ki bone development affect karti hai. Timely calcium ka dhyan rakhna zaroori hai.' },
    { _key: 'faq11', question: 'Calcium carbonate vs calcium citrate — kaunsa better hai?', answer: 'Calcium Carbonate: sasta, easily available, par khane ke saath hi kaam karta hai aur constipation zyada hoti hai. Calcium Citrate: mehnga, par khali pet bhi kaam karta hai, constipation kam — elderly ke liye, PPI users ke liye better. India mein most doctors Calcium + Vitamin D3 combination commonly recommend karte hain — ye zyada practical aur effective hai.' },
    { _key: 'faq12', question: 'Calcium jyada lene se kya hota hai?',                answer: 'Zyada calcium se nuksaan hi hota hai — constipation, bloating, kidney stones ka risk, aur severe cases mein blood mein calcium badh jaana (hypercalcemia) jisse nausea, weakness, confusion hota hai. NIH ka clear guideline: adults 2500 mg/day se zyada bilkul nahi. Supplement se zyada careful raho — khane se calcium naturally zyada hona bahut mushkil hai, supplement se hota hai.' },
    { _key: 'faq13', question: 'Calcium ki kami kaise hoti hai body mein?',          answer: 'Calcium ki kami teen kaarno se hoti hai: kam khana (India mein aam baat — average 400-500 mg vs 1000 mg zaroorat), absorption kharab hona (Vitamin D ki kami, oxalate-rich diet, acidity ki medicines), ya body se zyada calcium nikalna (kidney problems, corticosteroids). India mein sabse badi wajah: traditional millets (ragi, bajra) ki jagah refined grains aane se dietary calcium drastically gira hai.' },
    { _key: 'faq14', question: 'Calcium ka homeopathic ilaj kya hai?',               answer: 'Homeopathy calcium ki kami mein body ki absorption aur utilization improve karne mein complementary role ada kar sakti hai. Calcarea Carbonica, Calcarea Phosphorica, aur Silicea commonly used medicines hain — par ye doctor ke bina mat lo; ek qualified homoeopath aapke constitution ke hisab se decide karega. Ye approach conventional supplement ke saath chal sakta hai — akela sufficient nahi hai severe kami mein.' },
    { _key: 'faq15', question: 'Serum calcium test kab karwana chahiye?',            answer: 'Serum calcium test karwao agar: muscles mein baar baar cramps ho, haath-paon mein numbness aaye, brittle nails aur teeth ke problems ho, backache lamba chale, ya aap osteoporosis risk mein ho (menopause, elderly, corticosteroids pe ho). Pregnancy mein routine prenatal tests mein calcium include hona chahiye. Test price India mein: Rs. 150-400. 3 mahine supplementation ke baad repeat test karwao.' },
  ],
}

async function main() {
  console.log('🌿 Seeding Calcium...')
  try {
    const result = await client.createOrReplace(calcium)
    console.log('✅ Done:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
