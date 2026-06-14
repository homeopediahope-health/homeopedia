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

const zinc = {
  _id: 'vitamin-zinc',
  _type: 'vitamin',
  name: 'Zinc',
  hindiName: 'Immunity Wala Mineral',
  category: 'Mineral',
  slug: { _type: 'slug', current: 'zinc' },
  metaTitle: 'Zinc Ki Kami: Lakshan, Foods aur Homeopathic Ilaj 2026',
  metaDescription: 'Zinc ki kami ke lakshan, vegetarian food sources, normal range, supplement types aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: '',

  quickFacts: {
    indiaPrevalence: 'India ke adolescents mein se approximately 31% ko zinc kami ka elevated risk hai — Comprehensive National Nutrition Survey (CNNS) ke anusaar. Vegetarian diet aur phytate-rich grains iska mukhya kaaran hain.',
    commonDeficiencySign: 'Baar baar sardi-zukam lagna (immunity weak hona) aur baalon ka jhadna — ye dono zinc kami ke sabse pehle aur common signs hain jo log notice karte hain.',
    mainFoodSource: 'Kaddu ke Beej (Pumpkin Seeds) — 30g (ek mutthi) rozana khane se din ki zinc zaroorat ka significant hissa poora hota hai (~2.2 mg).',
    normalRangeQuick: '60–120 mcg/dL (Serum Zinc, adults)',
  },

  whatIsIt: 'Zinc ek essential trace mineral hai — matlab body isko khud nahi bana sakti, isliye roz ki diet se lena zaroori hai. Ye body ke 300 se zyada enzymes ke liye zaroori hai aur immunity, wound healing, DNA synthesis, aur cell growth mein seedha role karta hai. India mein vegetarian log zyada at-risk hain kyunki plant foods mein phytates hote hain jo zinc absorption rok dete hain. Iska matlab ye nahi ki veg khana chod do — lekin thodi samajhdaari se khana zaroor chahiye.',

  bodyFunctions: [
    'Immunity support — T-cells (virus aur bacteria se ladne wali cells) ko activate karta hai; isliye zinc kami mein baar baar infection hota hai',
    'Wound healing — Skin repair aur collagen production ke liye zaroori hai; ghao jaldi bharne nahi deta jab zinc low ho',
    'DNA synthesis aur cell division — Har naye cell banane ke liye zinc chahiye; isliye growth aur development mein critical role hai',
    'Taste aur smell — Ye dono senses zinc-dependent hain; kami mein khana beswad lagta hai, smell kam hoti hai',
    'Testosterone aur male reproductive health — Sperm production aur testosterone synthesis ke liye direct zaroorat hai',
    'Skin aur hair health — Sebum (skin oil) production control karta hai; acne aur hair fall dono se linked hai',
    'Blood sugar control — Insulin ke storage aur release mein help karta hai; diabetes management mein relevant',
    'Antioxidant — Superoxide dismutase enzyme ka part hai jo free radical damage se bachata hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Ghao ya cut jaldi nahi bharta — zinc wound healing ke liye essential hai; kami mein skin repair slow ho jaata hai',
    ],
    energyMoodBrain: [
      'Concentration mein problem, memory weak — zinc brain neurotransmitters ke liye zaroori hai',
      'Thakan aur energy ki kami — body ke metabolic functions zinc pe depend karte hain',
      'Taste aur smell kam hona — khana beswad ya gandh nahi aana zinc kami ka direct symptom hai',
    ],
    skinHairNails: [
      'Baalon ka jhadna (Hair fall) — zinc hair follicles ke liye zaroori hai; kami mein premature hair loss hoti hai',
      'Acne ya pimples zyada hona — zinc sebum control karta hai; kami mein skin oily aur acne-prone ho jaati hai',
      'Nails mein safed dhabbay (White spots on nails) — ye zinc kami ka ek classic sign hai',
      'Dry, rough skin ya dandruff — zinc skin moisture aur scalp health ke liye important hai',
    ],
    other: [
      'Baar baar sardi, zukam, throat infection — zinc kami immunity weaken karti hai; minor infections bhi baar baar hote hain',
      'Diarrhea baar baar hona — especially bacchon mein; WHO ne zinc ko diarrhea treatment mein essential supplement mana hai',
      'Bacchon mein height nahi badhna (Stunted growth) — zinc kami India mein bacchon ki growth stunting ka ek mukhya kaaran hai',
      'Purusho mein testosterone kam hona, libido mein kami — zinc reproductive hormones ke liye directly zaroori hai',
      'Male infertility (sperm count/motility) — zinc deficiency sperm quality ko affect karti hai',
      'Appetite kam hona — zinc kami bhook ko significantly reduce kar deta hai; especially bacchon mein',
      'Aankhon mein raat ko dikhayi nahi dena (Night blindness) — zinc Vitamin A ke metabolism mein help karta hai',
    ],
  },

  deficiencyCauses: [
    'Vegetarian/vegan diet — Plant sources mein phytic acid hota hai jo zinc absorption 50% tak rok sakta hai; India ki majority vegetarian population isliye zyada at-risk hai',
    'Highly processed ya refined food — White rice, maida; refining process mein zinc hat jaata hai',
    'Excess chai/coffee peena — Tannins zinc absorption ko interfere karte hain; India mein ye ek bahut common hidden reason hai',
    'Gastrointestinal conditions — IBS, Crohn\'s disease, celiac; ye conditions zinc absorption ko badly affect karti hain',
    'Chronic liver/kidney disease — Zinc metabolism dono organs pe depend karta hai; disease mein excretion badhti hai',
    'Diabetes — Diabetic patients mein zinc urine ke zariye zyada nikalta hai; isliye ye group zyada vulnerable hai',
    'Pregnancy aur breastfeeding — Baby ke liye zinc demand badh jaati hai; agar diet sufficient nahi to kami ho jaati hai',
    'Medicines — Diuretics (paani ki goliyaan), antacids; ye zinc excretion badhate hain ya absorption rokti hain',
    'Alcohol — Body se zinc flush karta hai aur absorption bhi kam karta hai',
  ],

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',        normal: '70–120 mcg/dL', deficient: '< 70 mcg/dL', toxic: '> 150 mcg/dL', unit: 'mcg/dL' },
    { _key: 'nr2', category: 'Adult Female',       normal: '66–110 mcg/dL', deficient: '< 66 mcg/dL', toxic: '> 150 mcg/dL', unit: 'mcg/dL' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)', normal: '60–120 mcg/dL', deficient: '< 60 mcg/dL', toxic: '> 120 mcg/dL', unit: 'mcg/dL' },
    { _key: 'nr4', category: 'Pregnancy',          normal: '57–88 mcg/dL', deficient: '< 57 mcg/dL (higher risk)', toxic: 'Doctor se confirm karein', unit: 'mcg/dL' },
    { _key: 'nr5', category: 'Elderly (60+)',       normal: '60–110 mcg/dL', deficient: '< 60 mcg/dL (common)', toxic: '> 150 mcg/dL', unit: 'mcg/dL' },
  ],

  vegSources: [
    { _key: 'v1',  food: 'Kaddu ke Beej (Pumpkin Seeds)', quantity: '30g (1 mutthi)',       amount: '~2.2 mg' },
    { _key: 'v2',  food: 'Til (Sesame Seeds)',             quantity: '30g (2 tbsp)',         amount: '~2.1 mg' },
    { _key: 'v3',  food: 'Kabuli Chana (Chickpeas)',       quantity: '1 katori (cooked)',    amount: '~2.5 mg' },
    { _key: 'v4',  food: 'Kaju (Cashews)',                 quantity: '30g (1 mutthi)',       amount: '~1.6 mg' },
    { _key: 'v5',  food: 'Rajma (Kidney Beans)',           quantity: '1 katori (cooked)',    amount: '~1.8 mg' },
    { _key: 'v6',  food: 'Dahi (Curd/Yogurt)',             quantity: '1 katori (200g)',      amount: '~1.4 mg' },
    { _key: 'v7',  food: 'Bajra (Pearl Millet) roti',      quantity: '2 rotiyaan',           amount: '~1.2 mg' },
    { _key: 'v8',  food: 'Moong Dal',                      quantity: '1 katori (cooked)',    amount: '~1.0 mg' },
    { _key: 'v9',  food: 'Paneer',                         quantity: '100g',                 amount: '~0.9 mg' },
    { _key: 'v10', food: 'Badam (Almonds)',                quantity: '30g (1 mutthi)',       amount: '~0.9 mg' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Mutton / Lamb',         quantity: '100g (cooked)',   amount: '~4.0–4.8 mg' },
    { _key: 'nv2', food: 'Chicken',               quantity: '100g (cooked)',   amount: '~2.0–2.9 mg' },
    { _key: 'nv3', food: 'Eggs (Ande)',            quantity: '2 ande (whole)', amount: '~1.2 mg' },
    { _key: 'nv4', food: 'Fish (Surmai/Rohu)',     quantity: '100g',           amount: '~0.8–1.2 mg' },
  ],

  sunlightNote: 'Vegetarians ke liye — rozana ek mutthi kaddu ke beej + 1 katori chana/rajma se din ki zinc zaroorat ka accha hissa poora ho sakta hai. PHYTATE PROBLEM: Chana, rajma aur dal bhigone (soaking) ya sprout karne se phytic acid kaam ho jaata hai — zinc absorption significantly badhti hai. Raat bhar bhigo ke subah pakao. Chai-coffee se 1 ghante ka gap zaroor rakho — tannins absorption rok dete hain.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–6 months',    male: '2',              female: '2',              pregnancy: null, breastfeeding: null, unit: 'mg/day (AI)' },
    { _key: 'd2', ageGroup: '7–12 months',   male: '3',              female: '3',              pregnancy: null, breastfeeding: null, unit: 'mg/day' },
    { _key: 'd3', ageGroup: '1–8 saal',      male: '3–5',            female: '3–5',            pregnancy: null, breastfeeding: null, unit: 'mg/day' },
    { _key: 'd4', ageGroup: '9–13 saal',     male: '8',              female: '8',              pregnancy: null, breastfeeding: null, unit: 'mg/day' },
    { _key: 'd5', ageGroup: '14–18 saal',    male: '11',             female: '9',              pregnancy: '12', breastfeeding: '13', unit: 'mg/day' },
    { _key: 'd6', ageGroup: '19–50 saal',    male: '11 (NIH) / ~17 (ICMR)', female: '8 (NIH) / ~13 (ICMR)', pregnancy: '11', breastfeeding: '12', unit: 'mg/day' },
    { _key: 'd7', ageGroup: '51+ saal',      male: '11',             female: '8',              pregnancy: null, breastfeeding: null, unit: 'mg/day' },
  ],

  pregnancyInfo: {
    howImportant: 'Pregnancy mein zinc ki zaroorat badh jaati hai — NIH ke anusaar 11–12 mg/day. Kami se: Fetal growth retardation (baby ka weight aur height kam), preterm birth ka risk, baby ki immune development affected, aur neural tube development mein problem (DNA synthesis affected). Doctor-prescribed prenatal supplement safe hai. Self-medication se bachein.',
    dailyRequired: '11–12 mg/day (NIH)',
    babyEffects: [
      'Fetal growth retardation',
      'Preterm birth ka risk',
      'Baby ki immune development affected',
      'Neural tube development mein problem',
    ],
    supplementSafe: true,
    doctorLine: 'Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein — dose aur form doctor decide karein.',
  },

  childrenInfo: {
    deficiencySymptoms: [
      'Height aur weight gain slow hona (stunted growth)',
      'Baar baar diarrhea — WHO ne bacchon mein diarrhea treatment mein zinc ko essential supplement mana hai',
      'Appetite bilkul nahi lagti (selective eating badhti hai)',
      'School mein concentration nahi hota',
      'Delayed puberty (teenagers mein)',
      'Baar baar ear infections aur sore throat',
    ],
    ageWiseRequirement: '0–6 months: 2 mg | 6–12 months: 3 mg | 1–8 saal: 3–5 mg | 9–13 saal: 8 mg',
    foodSources: 'Dahi, paneer, moong dal khichdi, ragi ladoo, kaddu ke beej powdered chapati mein mix karke.',
    supplementNote: 'Supplement dena chahiye ya nahi — doctor ki advice se, khaaskar agar baar baar diarrhea hai ya growth concern hai.',
  },

  labTestInfo: {
    testName: 'Serum Zinc Test (Zinc, Serum/Plasma)',
    testSlug: 'zinc-test',
    normalRange: '60–120 mcg/dL (adult). Indian labs (Metropolis, Dr. Lal PathLabs) bhi same range follow karti hain. Mayo Clinic Labs reference: 66–106 mcg/dL (adults).',
    whenToTest: 'Baar baar infections ho rahe hain. Hair fall ya acne severe hai aur koi response nahi aa raha. Bacche ki growth slow hai. Wound nahi bhar raha. Taste ya smell kam ho gayi hai.',
    repeatAfter: 'Supplement shuru karne ke 3 mahine baad test repeat karein — blood levels normalize hone mein itna time lagta hai.',
    priceRange: 'Metropolis Labs: approx. ₹2,000–₹2,400 | Dr. Lal PathLabs: approx. ₹1,800 | Redcliffe Labs: approx. ₹700–₹900. Test se pehle 8–10 ghante fasting zaroori hai. Zinc supplement 24 ghante pehle se band karein — nahi to result false high aa sakta hai.',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Zinc Sulphate (Zinc Sulfate)',
      benefits: ['Sabse sasta, widely available', 'India mein common OTC medicines mein (Zincovit mein blend hota hai)', 'WHO protocol mein bacchon mein diarrhea treatment ke liye'],
      drawbacks: ['Gastrointestinal side effects zyada — nausea, stomach upset, khali pet lene pe ulti'],
      bestFor: 'Budget-conscious; doctor-prescribed clinical use; bacchon mein diarrhea treatment',
    },
    {
      _key: 'sf2',
      formName: 'Zinc Gluconate',
      benefits: ['Sulphate se better tolerated', 'Stomach pe kam harsh', 'Zinc lozenges mein commonly used'],
      drawbacks: ['Elemental zinc thoda kam hota hai per mg', 'Sulphate se thoda mehnga'],
      bestFor: 'Jinhe sulphate se upset hota ho; common cold mein lozenges form mein useful',
    },
    {
      _key: 'sf3',
      formName: 'Zinc Picolinate',
      benefits: ['Picolinic acid ke saath chelated — better bioavailability', 'Kuch studies mein better absorption dikhaya hai'],
      drawbacks: ['Sulphate se mehenga', 'Research limited hai'],
      bestFor: 'Jinhe absorption issue ho; overall bioavailability better chahiye ho',
    },
    {
      _key: 'sf4',
      formName: 'Zinc Glycinate (Zinc Bisglycinate)',
      benefits: ['Amino acid glycine ke saath chelated — stomach pe sabse gentle', 'Absorption bhi acchi hai', 'Long-term use ke liye suitable'],
      drawbacks: ['Sabse mehnga form', 'Less commonly available'],
      bestFor: 'Sensitive stomach wale log; women jo hair fall ya skin ke liye le rahi hain; long-term use',
    },
  ],

  supplementTiming: {
    bestTime: 'Khane ke 1–2 ghante baad lena best absorption deta hai. Khali pet lene pe nausea hone ki chance zyada hai.',
    withFood: 'Khane ke baad — specifically thoda fat ya protein wale khane ke saath (dal-chawal, roti-sabzi) — absorption better hoti hai.',
    absorptionTips: [
      'Chana/rajma ko raat bhar bhigakar paka (phytate reduce hoti hai — natural zinc absorption badhta hai)',
      'Zinc supplement ke saath Vitamin C wala kuch lo (nimbu paani, amla) — absorption support karta hai',
      'Animal protein ke saath (dahi, egg) absorption zyada hoti hai',
    ],
    avoidWith: [
      'Chai ya coffee ke saath bilkul nahi — tannins absorption rok dete hain; kam se kam 1 ghante ka gap rakho',
      'Calcium supplement ke saath same time pe mat lo — dono compete karte hain; 2 ghante ka gap rakho',
      'Iron supplement ke saath same time pe nahi — dono ek doosre ki absorption kam karte hain; alag time pe lo',
    ],
  },

  drugInteractions: [
    {
      _key: 'di1',
      medicineName: 'Tetracycline / Doxycycline (antibiotics)',
      reason: 'Zinc inki absorption 30–40% tak kam kar deta hai. Antibiotic lene ke 2 ghante pehle ya 4–6 ghante baad zinc lo.',
    },
    {
      _key: 'di2',
      medicineName: 'Quinolone Antibiotics (Ciprofloxacin, Levofloxacin)',
      reason: 'Zinc ke saath insoluble complex banta hai jo antibiotic absorb nahi hone deta. Antibiotic lene ke 2 ghante pehle ya 4 ghante baad zinc lo.',
    },
    {
      _key: 'di3',
      medicineName: 'Diuretics (Furosemide, Thiazide — paani ki goliyaan)',
      reason: 'Ye zinc ko urine se flush kar dete hain; long-term use mein zinc kami ho sakti hai. Long-term diuretic use mein doctor se zinc monitoring ke baare mein zaroor discuss karein.',
    },
    {
      _key: 'di4',
      medicineName: 'Penicillamine (arthritis / Wilson\'s disease ki medicine)',
      reason: 'Zinc iska absorption significantly reduce karta hai. 2 ghante ka gap zaroori hai; doctor se confirm karein.',
    },
    {
      _key: 'di5',
      medicineName: 'Antacids (prolonged use)',
      reason: 'Kuch antacids zinc absorption affect kar sakte hain. Occasional use okay hai; agar regular le rahe hain to doctor se poochein.',
    },
  ],

  combinations: {
    beneficial: [
      { _key: 'cb1', nutrient: 'Vitamin C',  reason: 'Vitamin C zinc ki bioavailability improve karta hai; immunity ke liye powerful combination' },
      { _key: 'cb2', nutrient: 'Vitamin B6', reason: 'Hormonal balance aur mood ke liye helpful; PMS ke liye kuch studies mein benefit dikha hai' },
      { _key: 'cb3', nutrient: 'Selenium',   reason: 'Antioxidant aur thyroid function ke liye synergistic; dono ko deficiency mein ek saath lo' },
      { _key: 'cb4', nutrient: 'Vitamin A',  reason: 'Zinc Vitamin A ke metabolism mein help karta hai; night blindness mein dono important hain' },
    ],
    avoid: [
      { _key: 'ca1', nutrient: 'Iron (same time)', reason: 'Dono absorption ke liye compete karte hain; 2 ghante ka gap rakho' },
      { _key: 'ca2', nutrient: 'Calcium (same time)', reason: 'Calcium zinc absorption inhibit karta hai; different time pe lo' },
      { _key: 'ca3', nutrient: 'Copper (high dose zinc)', reason: 'Long-term high-dose zinc copper deficiency cause kar sakta hai; multiminerals mein copper include karo' },
    ],
    timingGuide: 'Zinc subah khane ke baad lo. Iron alag time pe (2 ghante ka gap). Calcium raat ko lo. Vitamin C ke saath combine karo — absorption boost hoti hai.',
  },

  toxicity: {
    upperLimit: '40 mg/day (adults) — NIH ke anusaar. European EFSA standard: 25 mg/day.',
    sideEffects: [
      'Nausea, ulti — especially khali pet lene pe',
      'Stomach pain aur diarrhea',
      'Mouth mein metallic taste — khas symptom',
      'Copper ki kami — zinc zyada lene se copper absorption block hoti hai; copper kami se anemia aur nerve damage',
      'HDL (good cholesterol) kam hona — long-term 100 mg/day pe',
      'Immune function paradoxically weak ho sakti hai — zyada zinc bhi immune suppression kar sakta hai',
    ],
    whenSerious: '50 mg/day se zyada regular use pe side effects aane lagte hain. 100 mg/day pe liver aur kidney pe asar shuru hota hai. Doctor ki salah ke bina high dose supplement kabhi mat lo.',
  },

  timeline: {
    bloodLevelTime: 'Regular supplementation se serum zinc 4–6 hafte mein improve hone lagta hai. Full normalization mein 2–3 mahine lagenge.',
    symptomsTime: 'Taste/smell: 2–4 hafte mein. Wound healing aur immunity: 4–8 hafte. Hair fall: typically 3–4 mahine (hair cycle hi itna lamba hota hai — patience zaroori hai). Acne: 6–8 hafte. Energy levels: 4–6 hafte.',
    fullRecoveryTime: 'Mild kami: 1–2 mahine. Moderate/severe kami: 3–4 mahine ya zyada.',
    repeatTestTime: 'Supplement shuru karne ke 3 mahine baad test repeat karein.',
    patientNote: 'Ek hafte mein zinc ka koi jadu nahi hoga — ye shortcut nahi hai. Hair fall ya acne ke liye especially 3–4 mahine ka commitment chahiye. Supplement regular lo, diet improve karo, phir dekhna change zaroor aayega.',
  },

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Acne', diseaseSlug: 'acne', isAvailable: true, connection: 'Zinc regulates sebum production; deficiency worsens inflammatory acne' },
    { _key: 'ld2', diseaseName: 'Hair Fall (Alopecia)', diseaseSlug: 'hairfall', isAvailable: true, connection: 'Zinc essential for hair follicle health; deficiency causes telogen effluvium' },
    { _key: 'ld3', diseaseName: 'Male Infertility', diseaseSlug: 'male-infertility', isAvailable: true, connection: 'Zinc required for testosterone synthesis and sperm production' },
    { _key: 'ld4', diseaseName: 'Psoriasis', diseaseSlug: 'psoriasis', isAvailable: true, connection: 'Zinc deficiency worsens psoriatic skin inflammation' },
    { _key: 'ld5', diseaseName: 'Recurrent Cold', diseaseSlug: 'recurrent-cold', isAvailable: true, connection: 'Zinc immunity boost karta hai; kami se frequent infections hote hain' },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Hair Fall', symptomSlug: 'hair-fall' },
    { _key: 'ls2', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
    { _key: 'ls3', symptomName: 'Mouth Ulcer', symptomSlug: 'mouth-ulcer' },
    { _key: 'ls4', symptomName: 'Skin Rash', symptomSlug: 'skin-rash' },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc', isAvailable: true },
    { _key: 'rt2', testName: 'Serum Zinc Test', testSlug: 'zinc-test', isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin C', vitaminSlug: 'vitamin-c' },
    { _key: 'rv2', vitaminName: 'Vitamin A', vitaminSlug: 'vitamin-a' },
    { _key: 'rv3', vitaminName: 'Selenium', vitaminSlug: 'selenium' },
    { _key: 'rv4', vitaminName: 'Iron', vitaminSlug: 'iron' },
  ],

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Zincum Metallicum',
      patientType: 'Jo bahut tired aur mentally exhausted hain, nervousness hai, restless legs (raat ko pair hilate rahna), memory weak hai, aur zinc kami ke neurological symptoms hain',
      howItHelps: 'Nervous system exhaustion aur mental/physical fatigue mein body ki recovery capacity ko support karta hai. Zinc-related nerve symptoms mein commonly used remedy hai.',
    },
    {
      _key: 'h2',
      medicineName: 'Calcarea Phosphorica',
      patientType: 'Bacche jinki growth slow hai, bones weak hain, teeth late aate hain, aur jo weak aur anaemic dikhayi dete hain',
      howItHelps: 'Bone aur tissue development mein help karta hai; absorption aur assimilation improve karne mein support karta hai. Growth-related zinc deficiency presentations mein useful.',
    },
    {
      _key: 'h3',
      medicineName: 'Silicea (Silica)',
      patientType: 'Jinhein wound healing nahi hoti, nails mein problems hain, baar baar infections hote hain, aur skin itni poor condition mein hai',
      howItHelps: 'Body ki natural defense aur healing capacity support karta hai; skin, nails aur connective tissue health mein helpful — jo zinc kami ke common presentations hain.',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Agar khana sahi kha rahe hain to zinc ki kami nahi hogi',
      truth: 'India mein majority vegetarian diet mein phytates hote hain jo zinc absorption block karte hain. Khana "sahi" lagna aur body mein zinc ka absorb hona — dono alag baat hai. CNNS data ke anusaar 31% Indian adolescents at-risk hain despite eating.',
    },
    {
      _key: 'm2',
      myth: 'Zinc sirf immunity ke liye hai',
      truth: 'Zinc 300 se zyada enzymes ka part hai — hair, skin, hormones, vision, taste, DNA — sabmein involved hai. Sirf immunity tak limit nahi hai.',
    },
    {
      _key: 'm3',
      myth: 'Zinc supplement se immediately hair fall ruk jaayega',
      truth: 'Hair cycle 3–4 mahine ka hota hai. Zinc supplement se fark zaroor aata hai — lekin 3–4 mahine ki patience chahiye. Ek hafte mein result expect karna galat expectation hai.',
    },
    {
      _key: 'm4',
      myth: 'Jitna zyada zinc lenge utna zyada fayda',
      truth: 'NIH ka Upper Limit 40 mg/day hai. Is se zyada lene pe copper deficiency, nausea, aur immune suppression ho sakta hai. Zyada nahi, sahi dose.',
    },
    {
      _key: 'm5',
      myth: 'Zinc sirf mard ke liye important hai',
      truth: 'Zinc women ke liye equally important hai — hormonal balance, skin, hair, pregnancy, immunity — sabmein zaroori hai. Women alag symptoms notice karti hain (hair fall, skin, PMS) lekin zinc utna hi important hai.',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Zinc ki kami ke kya lakshan hain?',
      answer: 'Zinc ki kami ke sabse common lakshan hain — baar baar sardi-zukam aana (immunity weak hona), baalon ka zyada jhadna, nails mein safed dhabbay, ghao ya cut jaldi nahi bharna, aur khana beswad lagna (taste/smell kam hona). Bacchon mein height-weight slow badhna bhi zinc kami ka sign hai. Agar aapko ye 2-3 symptoms saath mein hain to zinc test karwane pe doctor se baat karein.',
    },
    {
      _key: 'faq2',
      question: 'Zinc ke liye kya khayen (vegetarian)?',
      answer: 'Vegetarian log in sources se zinc le sakte hain — kaddu ke beej (pumpkin seeds), til, kaju, kabuli chana, rajma, bajra, moong dal, aur dahi. Sabse important tip: chana aur dal raat bhar bhigo ke pakao — phytic acid kam hoti hai aur zinc absorption significantly badhti hai. Rozana ek mutthi kaddu ke beej routine mein add karna sabse asan tarika hai.',
    },
    {
      _key: 'faq3',
      question: 'Zinc ka normal range kitna hona chahiye?',
      answer: 'Serum zinc blood test mein normal range hai 60–120 mcg/dL adults ke liye. 60 se neeche kami maani jaati hai. Pregnancy mein range slightly different hoti hai — doctor se interpret karwao. Indian labs (Metropolis, Dr. Lal PathLabs) bhi isi range ko follow karti hain.',
    },
    {
      _key: 'faq4',
      question: 'Zinc tablet kab leni chahiye — subah ya raat?',
      answer: 'Zinc supplement khane ke 1–2 ghante baad lena best hai — khali pet nahi lena chahiye kyunki nausea ho sakta hai. Chai aur coffee se 1 ghante ka gap zaroor rakho. Iron ya calcium supplement se 2 ghante door rakho. Subah ya sham — time matter nahi karta, regular consistency matter karti hai.',
    },
    {
      _key: 'faq5',
      question: 'Zinc ki kami se baal kyun girte hain?',
      answer: 'Zinc hair follicles (baalon ki jad) ke liye essential hai. Zinc kami mein follicles weak ho jaate hain aur telogen effluvium (diffuse hair shedding) hoti hai. Isko theek hone mein 3–4 mahine lagte hain kyunki hair cycle itna lamba hota hai. Zinc ke saath Biotin aur protein intake bhi check karein.',
    },
    {
      _key: 'faq6',
      question: 'Zinc ki kami se kya hota hai male health mein?',
      answer: 'Purusho mein zinc testosterone production ke liye directly zaroori hai. Zinc kami se testosterone levels drop ho sakte hain, libido mein kami aa sakti hai, aur sperm count/motility bhi affected ho sakti hai. Agar male infertility ka concern hai to zinc test zaroor karwao — iska treatment relatively simple hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya zinc se acne theek hota hai?',
      answer: 'Zinc sebum production control karta hai aur inflammatory acne mein anti-inflammatory role bhi karta hai. Kuch studies mein oral zinc supplement (especially zinc gluconate) ko mild-moderate acne mein beneficial paya gaya hai. Lekin sabka acne zinc kami ki wajah se nahi hota — pehle zinc test karwao, fir decide karo.',
    },
    {
      _key: 'faq8',
      question: 'Zinc aur iron saath mein le sakte hain?',
      answer: 'Same time pe nahi — dono ek doosre ki absorption mein compete karte hain. Agar dono lene hain to 2 ghante ka gap rakho. Iron subah khali pet lo (Vitamin C ke saath), zinc khane ke baad alag time pe. Doctor se confirmation zaroor lo agar dono simultaneously prescribed hain.',
    },
    {
      _key: 'faq9',
      question: 'Pregnancy mein zinc lena safe hai?',
      answer: 'Haan — doctor-prescribed prenatal supplement ya zinc supplement safe hai pregnancy mein. Zinc baby ki growth, immune development aur DNA synthesis ke liye zaroor hai. Lekin dose doctor decide karein — khud high dose supplement mat lo. "Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein."',
    },
    {
      _key: 'faq10',
      question: 'Zinc ki kami ka test kaise hota hai?',
      answer: 'Serum Zinc Test ek simple blood test hai. 8–10 ghante fasting zaroori hai. Test se 24 ghante pehle zinc supplement band karo. Price approx. ₹700–₹2,400 (lab ke hisab se). Dr. Lal PathLabs aur Metropolis India ke prominent labs hain. Report 1–3 din mein milti hai.',
    },
    {
      _key: 'faq11',
      question: 'Zinc aur calcium saath mein le sakte hain?',
      answer: 'Same time pe nahi — calcium zinc absorption mein interfere karta hai. Agar dono lene hain to subah zinc lo aur raat ko calcium, ya 2-3 ghante ka gap rakho. Evening mein calcium lena better hota hai (sleep mein bone health ke liye).',
    },
    {
      _key: 'faq12',
      question: 'Zincovit tablet kya hai — zinc supplement hai kya?',
      answer: 'Zincovit ek multivitamin-multimineral tablet hai jo zinc ke saath Vitamin B complex, Vitamin C, aur Vitamin A ka combination hai. Ye pure zinc supplement nahi hai — iska dose pure zinc supplement se alag hota hai. Doctor ki prescription pe lo — khud decide mat karo ki Zincovit enough hai ya alag zinc chahiye.',
    },
    {
      _key: 'faq13',
      question: 'Zinc jyada lene ke kya nuksan hain?',
      answer: '40 mg/day (NIH Upper Limit) se zyada regular zinc lene pe — nausea, metallic taste, stomach upset, aur copper deficiency ho sakti hai. Long-term high dose (100 mg+) pe HDL cholesterol drop aur immune suppression ho sakta hai. "Doctor ki salah ke bina high dose supplement kabhi mat lo."',
    },
    {
      _key: 'faq14',
      question: 'Zinc ki kami mein kya hota hai bacchon ko?',
      answer: 'Bacchon mein zinc kami se height-weight gain slow hota hai (stunted growth), baar baar diarrhea hoti hai, appetite khatam ho jaati hai, aur concentration poor hoti hai. WHO ne children mein diarrhea treatment mein zinc ko essential supplement mana hai. Agar bacche ki growth concern hai to paediatrician se zinc test karwao.',
    },
    {
      _key: 'faq15',
      question: 'Kitne dino mein zinc deficiency theek hoti hai?',
      answer: 'Sahi diet aur supplement se serum zinc 4–6 hafte mein improve hona shuru hota hai. Symptoms mein fark notice karne mein 6–12 hafte lagte hain — hair fall, acne, aur immunity ke liye. Full recovery mein 3–4 mahine. 3 mahine baad test repeat karwao — results khud batayenge ki level normal hua ya nahi.',
    },
    {
      _key: 'faq16',
      question: 'Zinc aur Vitamin C saath mein lena chahiye?',
      answer: 'Haan — ye ek beneficial combination hai. Vitamin C zinc ki bioavailability improve karta hai. Dono immunity ke liye synergistic hain. Nimbu paani ya amla juice ke saath zinc supplement lena ya zinc-rich meal ke saath Vitamin C wali cheez (tomato, amla, guava) khana — dono tarike helpful hain.',
    },
    {
      _key: 'faq17',
      question: 'Best zinc supplement kaun sa hai India mein?',
      answer: 'India mein commonly available options hain: Zinc glycinate (gentle on stomach, good absorption), zinc picolinate (better bioavailability), aur zinc sulphate (budget-friendly). "Best" aapke specific symptoms, stomach sensitivity aur budget pe depend karta hai — ek doctor ya pharmacist se discuss karo. Hum kisi specific brand ko endorse nahi karte.',
    },
    {
      _key: 'faq18',
      question: 'Zinc ki kami kaise door karein (gharelu tarike)?',
      answer: 'Diet se zinc badhane ke liye — kaddu ke beej daily routine mein add karo, chana-rajma roz khaao (bhigo ke pakao phytates kam karne ke liye), dahi include karo, bajra-ragi ki roti banaao. Chai-coffee zinc ke saath nahi. Mild kami diet se ho sakti hai theek — moderate ya severe kami mein supplement plus doctor consultation zaroori hai.',
    },
    {
      _key: 'faq19',
      question: 'Kya zinc se testosterone badhta hai?',
      answer: 'Zinc testosterone synthesis ke liye zaroori hai — ye fact hai. Lekin sirf zinc lene se testosterone magically nahi badhta. Agar aapki zinc kami thi aur aapne usse correct kiya, to testosterone normalize ho sakta hai. Normal zinc level wale log zyada lenge to koi extra testosterone benefit nahi hoga. Agar testosterone concern hai to specialist se milein.',
    },
    {
      _key: 'faq20',
      question: 'Zinc kab nahi lena chahiye?',
      answer: 'Agar aap tetracycline/ciprofloxacin antibiotic le rahe hain to 2–4 ghante ka gap zaroori hai. Kidney disease hai to high-dose zinc bina doctor ke nahi. Hemochromatosis (iron overload disorder) mein zinc supplementation carefully karo. Aur generally — agar already multivitamin le rahe hain jisme zinc hai, to alag zinc supplement ki zaroorat hogi ya nahi ye doctor decide kare.',
    },
  ],

  sources: [
    'NIH Office of Dietary Supplements — Zinc Fact Sheet | 2024 | ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',
    'Mayo Clinic Laboratories — Zinc Serum Reference Range | 2024 | mayocliniclabs.com/test-catalog/overview/7735',
    'Comprehensive National Nutrition Survey (CNNS) India — Zinc deficiency prevalence in Indian adolescents (31%) | 2019 | mohfw.gov.in',
    'Metropolis India — Zinc ICPMS Serum Test Details & Price | 2024 | metropolisindia.com',
    'WHO — Zinc Supplementation in Children (diarrhea treatment) | 2023 | who.int',
    'ICMR — Nutrient Requirements and Recommended Dietary Allowances for Indians | 2020 | icmr.gov.in (RDA: Males 17 mg/day, Females 13 mg/day)',
  ],
}

async function seed() {
  try {
    console.log('Seeding Zinc...')
    const result = await client.createOrReplace(zinc)
    console.log('Done:', result._id)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seed()
