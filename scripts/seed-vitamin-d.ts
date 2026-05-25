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
  _id: 'vitamin-vitamin-d',
  _type: 'vitamin',
  name: 'Vitamin D',
  hindiName: 'Dhoop Wala Vitamin',
  category: 'Vitamin',
  slug: { _type: 'slug', current: 'vitamin-d' },
  metaTitle: 'Vitamin D Ki Kami: Lakshan, Foods aur Homeopathic Ilaj',
  metaDescription: 'Vitamin D / Dhoop Wala Vitamin ki kami ke lakshan, vegetarian food sources, normal range aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: 'Meri practice mein jo patients unexplained joint pain aur chronic fatigue lekar aate hain, unme se kaafi mein Vitamin D severely low milta hai — aksar 8-10 ng/mL tak. Ye mostly 25-40 saal ki working women hoti hain jo office mein poora din guzaarti hain aur vegetarian hain. Sirf lifestyle changes se itna bada gap fill nahi hota.',

  quickFacts: {
    indiaPrevalence: '43% Indian adults mein kami — Metropolis Labs 2023-24',
    commonDeficiencySign: 'Baar baar thakan, haddiyon mein dard, baal jharna',
    mainFoodSource: 'Dhoop mein rakhe Mushroom (Sun-treated) + Fortified Milk',
    normalRangeQuick: '≥ 20 ng/mL (Serum 25-OH Vitamin D)',
  },

  whatIsIt: `Vitamin D ek fat-soluble vitamin hai jo body mein ek hormone ki tarah kaam karta hai — isliye isse "Dhoop Wala Vitamin" kehte hain kyunki skin pe sunlight parne se ye khud ban jaata hai. Liver aur kidney milakar isko active form mein convert karte hain.

Iska sabse zaroori kaam hai: calcium ko gut se absorb karwaana. Bina Vitamin D ke calcium khao kitna bhi — haddiyon tak pahunche nahi.`,

  bodyFunctions: [
    'Calcium absorption: Intestines se calcium blood mein absorb karwata hai — bina D ke calcium waste ho jaata hai',
    'Bone strength: Bones ko mineralize karta hai — kami se Rickets (bacchon mein) aur Osteomalacia (adults mein) hoti hai',
    'Immunity: White blood cells activate karta hai — kami mein baar baar infections hone lagti hain',
    'Muscle function: Muscles ko theek se contract-relax karne mein help karta hai — kami mein weakness aur cramps hote hain',
    'Mood regulation: Brain mein serotonin production se linked hai — low Vitamin D aur depression ka link research mein consistently dikha hai',
    'Blood sugar control: Pancreas ke beta cells (jo insulin banate hain) pe Vitamin D receptors hote hain',
    'Heart health: Blood pressure regulation mein role hai — research mein cardiovascular connection confirmed hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Haddiyon mein dard (bone pain) — calcium absorption ruk jaati hai, bones weak hone lagti hain, halka press karne pe bhi dard',
      'Muscle weakness aur cramps — D muscles ke proper function ke liye zaroori hai; legs aur arms mein unexplained weakness',
      'Joint pain — specially knees, hips, back mein; aksar arthritis samajh ke ignore kar dete hain',
    ],
    energyMoodBrain: [
      'Baar baar thakan (fatigue) — sabse common aur ignore kiya jaane wala symptom; energy metabolism mein D ka direct role hai',
      'Depression ya mood swings — low Vitamin D aur low mood ka strong link research mein confirmed hai',
      'Memory problems, concentration nahi — brain function slow hota hai severe kami mein',
    ],
    skinHairNails: [
      'Baal jhadna (hair fall) — Vitamin D hair follicle cycle regulate karta hai; females mein ye symptom sabse zyada search hota hai',
      'Dry skin ya eczema-type rash — skin barrier function affect hoti hai kami mein',
      'Wounds slowly heal hona — skin repair process mein D involved hai',
    ],
    other: [
      'Baar baar bimaar hona — zukaam, flu, throat infections; immunity kam hoti hai',
      'Zyada pasina — especially sir pe; Vitamin D kami ka early sign maana jaata hai',
      'Irregular periods ya PCOD symptoms worsen hona (females mein)',
      'Rickets — legs mein bow-shape (tede pair), skull soft rehna (bacchon mein)',
      'Growth slow hona — height aur weight dono (bacchon mein)',
    ],
  },

  deficiencyCauses: [
    'Dhoop se door rehna — indoor jobs, ghar ke andar poora din rehna; India ke urban areas mein sabse common reason',
    'Burkha/dupatta/full-sleeve clothing — skin pe sunlight nahi pahunchta; culturally India mein bahut common',
    'Dark skin tone — melanin UV rays absorb karta hai before vitamin D synthesis; South Indians mein synthesis naturally kam',
    'Vegetarian ya vegan diet — Vitamin D naturally sirf non-veg mein zyada milta hai; pure veg diet mein serious dietary gap',
    'Pollution — dense air pollution UV-B rays block karta hai; Delhi, Mumbai, Nagpur jaisi cities mein serious issue',
    'Obesity — fat tissue Vitamin D ko trap kar leta hai — blood mein available vitamin kam ho jaata hai',
    'Liver ya kidney disease — Vitamin D activation dono organs mein hoti hai; koi bhi disease mein process affected hoti hai',
  ],

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',    normal: '≥ 20 ng/mL', deficient: '< 12 ng/mL',    toxic: '> 50 ng/mL', unit: 'ng/mL (Serum 25-OH Vitamin D)' },
    { _key: 'nr2', category: 'Adult Female',  normal: '≥ 20 ng/mL', deficient: '< 12 ng/mL',    toxic: '> 50 ng/mL', unit: 'ng/mL' },
    { _key: 'nr3', category: 'Bacche (1-18)', normal: '≥ 20 ng/mL', deficient: '< 12 ng/mL',    toxic: '> 50 ng/mL', unit: 'ng/mL' },
    { _key: 'nr4', category: 'Pregnancy',     normal: '≥ 20 ng/mL', deficient: '< 12 ng/mL',    toxic: '> 50 ng/mL', unit: 'ng/mL' },
    { _key: 'nr5', category: 'Elderly (60+)', normal: '≥ 20 ng/mL', deficient: '< 12 ng/mL',    toxic: '> 50 ng/mL', unit: 'ng/mL' },
    { _key: 'nr6', category: 'Insufficient (Caution Zone)', normal: '12–19 ng/mL', deficient: '—', toxic: '—', unit: 'ng/mL' },
    { _key: 'nr7', category: 'Severe Deficiency', normal: '—', deficient: '< 10 ng/mL — urgent treatment chahiye', toxic: '—', unit: 'ng/mL' },
  ],

  vegSources: [
    { _key: 'vs1', food: 'Mushroom — Dhoop mein rakhe (Sun-treated)', quantity: '100 gm (1 katori)', amount: '~300–400 IU' },
    { _key: 'vs2', food: 'Fortified Doodh (Vitamin D added milk)',    quantity: '1 glass (200 mL)',  amount: '~80–100 IU' },
    { _key: 'vs3', food: 'Fortified Dahi (Vitamin D added curd)',     quantity: '1 katori (150 gm)', amount: '~40–60 IU' },
    { _key: 'vs4', food: 'Anda — Egg yolk (lacto-ovo vegetarians)',   quantity: '1 anda ka yolk',    amount: '~40–50 IU' },
    { _key: 'vs5', food: 'Fortified Soya Milk',                        quantity: '1 glass (200 mL)',  amount: '~80 IU' },
    { _key: 'vs6', food: 'Mushroom — Normal (bina dhoop ke)',          quantity: '100 gm',            amount: '~10–20 IU (bahut kam)' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Surmai / Kingfish',        quantity: '100 gm', amount: '~500–600 IU' },
    { _key: 'nv2', food: 'Bangda (Mackerel)',         quantity: '100 gm', amount: '~360 IU' },
    { _key: 'nv3', food: 'Rohu / Katla (freshwater)', quantity: '100 gm', amount: '~100–200 IU' },
    { _key: 'nv4', food: 'Egg (poora — yolk + white)', quantity: '1 anda', amount: '~40–50 IU' },
  ],

  sunlightNote: `Sahi time: Subah 10 baje se dopahar 2 baje ke beech. Kitni der: Light skin 15-20 min; Dark/medium skin (most Indians) 30-45 min minimum. Kya expose karein: Haath, pair, chehra — jitna zyada utna better; kapdon se covered skin se kuch synthesis nahi.

Glass ke peeche baith kar dhoop lena kaam nahi karta — UV-B glass se block ho jaati hai. Practical Tip: Button mushrooms ko khaana banane se 30-60 minute pehle dhoop mein rakh do, gill wali side upar — is ek step se 300-400 IU mil sakti hai.

India mein problem: Pollution (Delhi, Mumbai, Nagpur) UV-B rays significantly block karta hai — sirf dhoop pe depend nahi kar sakte.

IMPORTANT: Vegetables, fruits, dal, roti, chawal mein Vitamin D practically ZERO hota hai — NIN IFCT 2017 ke mutabik.`,

  dailyRequirement: [
    { _key: 'dr1', ageGroup: '0–12 months', male: '400 IU/day', female: '400 IU/day', pregnancy: '—',          breastfeeding: '—',          unit: 'IU/day' },
    { _key: 'dr2', ageGroup: '1–8 saal',    male: '600 IU/day', female: '600 IU/day', pregnancy: '—',          breastfeeding: '—',          unit: 'IU/day' },
    { _key: 'dr3', ageGroup: '9–18 saal',   male: '600 IU/day', female: '600 IU/day', pregnancy: '—',          breastfeeding: '—',          unit: 'IU/day' },
    { _key: 'dr4', ageGroup: '19–50 saal',  male: '600 IU/day', female: '600 IU/day', pregnancy: '600 IU/day', breastfeeding: '600 IU/day', unit: 'IU/day' },
    { _key: 'dr5', ageGroup: '51–70 saal',  male: '600 IU/day', female: '600 IU/day', pregnancy: '—',          breastfeeding: '—',          unit: 'IU/day' },
    { _key: 'dr6', ageGroup: '70+ saal',    male: '600 IU/day', female: '600 IU/day', pregnancy: '—',          breastfeeding: '—',          unit: 'IU/day' },
  ],

  pregnancyInfo: {
    howImportant: 'Pregnancy mein Vitamin D calcium metabolism ke liye aur bhi zaroori ho jaata hai — maa aur baby dono ke liye. ICMR-NIN 2020 ke mutabik 600 IU/day recommended hai. Kami se baby ki bones aur teeth development weak ho sakti hai.',
    dailyRequired: '600 IU/day (ICMR-NIN 2020)',
    babyEffects: [
      'Newborn mein calcium level low ho sakta hai',
      'Baby ki bones aur teeth development weak',
      'Infant mein Rickets ka risk',
      'Premature birth ka risk badh sakta hai (research mein link)',
    ],
    supplementSafe: true,
    doctorLine: 'Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein — dose aur timing doctor ke guidance mein honi chahiye.',
  },

  childrenInfo: {
    deficiencySymptoms: [
      'Pairs mein teda-pana (bow legs) — Rickets ka classic sign',
      'Skull soft rehna / fontanelle jaldi band na hona',
      'Teeth late aana, cavities jaldi hona',
      'Growth chart pe weight/height peeche rehna',
      'Zyada irritable rehna, crying infants mein',
    ],
    ageWiseRequirement: '0-12 months: 400 IU/day | 1-18 years: 600 IU/day\n(Source: ICMR-NIN 2020)',
    foodSources: 'Fortified milk, dhoop mein rakhe mushrooms, egg yolk (agar family non-veg ho). Sunlight pe dhyan dena zaroori hai — outdoor play important hai.',
    supplementNote: 'Sirf doctor ke prescription ke baad. 2 saal se kam ke bacchon ko routine supplementation doctor ki salaah pe hi dein — self-medication nahi karni.',
  },

  labTestInfo: {
    testName: '25-Hydroxy Vitamin D (25-OH Vitamin D) Blood Test',
    testSlug: 'vitamin-d-test',
    normalRange: '≥ 20 ng/mL: Sufficient | 12–19 ng/mL: Insufficient | < 12 ng/mL: Deficient | < 10 ng/mL: Severely deficient | > 50 ng/mL: Potentially toxic',
    whenToTest: 'Symptoms pe (thakan, bone pain, hair fall); routine check 40+ age mein sensible hai; ya doctor ne bola ho. Khali pet ki zaroorat nahi — kisi bhi time test ho sakta hai.',
    repeatAfter: 'Treatment shuru karne ke 3 mahine baad blood test zaroor repeat karaye',
    priceRange: 'Rs. 500 – Rs. 900 (Metropolis Labs, Dr. Lal PathLabs)',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Vitamin D2 (Ergocalciferol)',
      benefits: ['Vegan/vegetarian friendly — plant ya fungal source se banta hai', 'Cheaper option'],
      drawbacks: ['Blood levels utna nahi badhata jitna D3', 'Body mein storage kam', 'Half-life shorter'],
      bestFor: 'Strict vegans ke liye option',
    },
    {
      _key: 'sf2',
      formName: 'Vitamin D3 (Cholecalciferol)',
      benefits: ['Sabse effective form — blood levels jaldi aur zyada badhata hai', 'Sunlight se body jo banati hai wahi form hai', 'Zyada time tak effect rehta hai'],
      drawbacks: ['Traditional D3 animal source se hota hai (sheep wool/lanolin) — strict vegans ke liye concern'],
      bestFor: 'Majority logon ke liye — commonly recommended first choice',
    },
    {
      _key: 'sf3',
      formName: 'Vitamin D3 + K2 (Menaquinone-7) Combination',
      benefits: ['D3 calcium absorb karata hai, K2 us calcium ko arteries se hatakar bones mein properly deposit karta hai', 'More complete picture deta hai'],
      drawbacks: ['Costly', 'K2 supplementation har kisi ke liye zaroori nahi'],
      bestFor: '50+ age ke log, osteoporosis risk wale, long-term D3 users',
    },
    {
      _key: 'sf4',
      formName: 'Vitamin D3 Weekly High-Dose (60,000 IU sachets)',
      benefits: ['India mein common prescription form — once-a-week ya once-a-month compliance aasaan hoti hai'],
      drawbacks: ['Self-medication mein risk — ek dose mein bahut high amount hota hai'],
      bestFor: 'SIRF doctor prescription ke saath — kabhi self-medicate nahi karna',
    },
  ],

  supplementTiming: {
    bestTime: 'Khane ke saath — specifically ghee ya oil wale khane ke saath (fat-soluble hai, fat ke saath absorption better)',
    withFood: 'Khane ke saath — khali pet bilkul nahi, absorption poor hoti hai',
    takenWith: 'Fat wale khane ke saath — paani se akele lena kaam nahi karta Vitamin D ke liye',
    absorptionTips: [
      'Ghee ya oil wali sabzi ke saath lo — thoda fat hona zaroori hai',
      'Magnesium saath lena helpful — D ko activate karne ke liye liver/kidney ko magnesium chahiye',
      'D3+K2 combination consider karein long-term supplementation mein',
    ],
    avoidWith: [
      'Chai aur coffee — supplement lene ke 1 ghante baad chai lo; absorption affect hoti hai',
      'Antacids (Gelusil, Digene type) — same time nahi; gap rakhein',
    ],
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Steroids (Prednisone, Dexamethasone)', reason: 'Long-term steroid use Vitamin D metabolism disrupt karta hai; dono saath chalein to doctor monitoring zaroori' },
    { _key: 'di2', medicineName: 'Orlistat (weight loss medicine)',       reason: 'Fat absorption blocker hai isliye fat-soluble vitamins ki absorption bhi ghata deta hai' },
    { _key: 'di3', medicineName: 'Cholestyramine / Cholesterol medicines', reason: 'Bile acid se interact karta hai, Vitamin D absorption significantly ghataata hai' },
    { _key: 'di4', medicineName: 'Anti-seizure medicines (Phenobarbital, Phenytoin)', reason: 'Liver mein Vitamin D breakdown speed up karte hain, levels gir jaate hain' },
    { _key: 'di5', medicineName: 'Thiazide diuretics (BP medicines)',     reason: 'D3 ke saath blood calcium level zyada ho sakta hai (hypercalcemia risk)' },
    { _key: 'di6', medicineName: 'Digoxin (heart medicine)',               reason: 'High dose Vitamin D ke saath dangerous cardiac effects ho sakte hain' },
  ],

  combinations: {
    beneficial: [
      { _key: 'cb1', nutrient: 'Calcium',    reason: 'D calcium absorb karwata hai intestine mein — dono saath bahut effective combination hai' },
      { _key: 'cb2', nutrient: 'Magnesium',  reason: 'Magnesium Vitamin D ko active form mein convert hone mein help karta hai; kami aksar saath milti hai' },
      { _key: 'cb3', nutrient: 'Vitamin K2', reason: 'D calcium absorb karata hai, K2 us calcium ko bones mein deposit karta hai — arteries mein nahi' },
    ],
    avoid: [
      { _key: 'ca1', nutrient: 'High dose Vitamin A', reason: 'Dono fat-soluble hain, toxicity risk badh sakti hai agar dono high dose mein liye jaayein' },
      { _key: 'ca2', nutrient: 'Iron (same time pe)', reason: 'Calcium iron absorption block karta hai; iron aur calcium mein 2 ghante ka gap zaroor rakhein' },
    ],
    timingGuide: 'Subah khane ke saath lo: Vitamin D3, Magnesium, Calcium\nRaat ko lo (agar lete ho): Iron (separately from D and calcium)\nGap rakhein: Thyroid medicine (Levothyroxine) se kam se kam 4 ghante; Iron se Calcium 2 ghante',
  },

  toxicity: {
    upperLimit: 'Adults: 4,000 IU/day | Children 9-18 years: 4,000 IU/day | Children 4-8 years: 3,000 IU/day | Infants 0-12 months: 1,000–1,500 IU/day (NIH ODS 2024)',
    sideEffects: [
      'Nausea, vomiting, bhookh na lagna — pehle signs hote hain',
      'Zyada pyaas (polydipsia) aur zyada peshab (polyuria)',
      'Weakness, confusion, irregular heartbeat',
      'Kidney mein calcium deposits ho sakte hain (kidney stones)',
      'Blood mein calcium zyada hona (hypercalcemia) — serious condition',
    ],
    whenSerious: 'Agar nausea + confusion saath mein ho, ya extreme weakness ho, ya urine amount dramatically change ho — turant doctor ke paas jaana chahiye. Ye hypercalcemia ke signs hain. Note: Food ya sunlight se toxicity practically nahi hoti — sirf supplements se hoti hai zyada dose mein.',
  },

  timeline: {
    bloodLevelTime: 'Sahi dose pe 4–8 hafte mein blood level mein meaningful rise aata hai',
    symptomsTime: 'Thakan, energy — 4-6 hafte | Muscle pain/weakness — 2-3 mahine | Bone pain — 3-6 mahine | Hair fall — 3-6 mahine (sabse slow improvement)',
    fullRecoveryTime: '3–4 mahine consistent treatment pe blood level normal ho jaata hai — depends on severity aur dose',
    repeatTestTime: 'Treatment shuru karne ke 3 mahine baad blood test zaroor repeat karaye',
    patientNote: 'Ek hafte mein fark nahi dikhega — patience zaroori hai. 3 mahine baad test repeat zaroor karaye to confirm levels normal hue ya nahi.',
  },

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Depression',       diseaseSlug: 'depression',      isAvailable: true,  connection: 'Serotonin regulation mein D ka role; kami se mood disorders link confirmed' },
    { _key: 'ld2', diseaseName: 'Hair Fall',         diseaseSlug: 'hairfall',        isAvailable: true,  connection: 'D hair follicle cycle regulate karta hai; kami se hair fall' },
    { _key: 'ld3', diseaseName: 'Osteoarthritis',    diseaseSlug: 'osteoarthritis',  isAvailable: true,  connection: 'Bone health aur joint inflammation mein D ka role' },
    { _key: 'ld4', diseaseName: 'Psoriasis',         diseaseSlug: 'psoriasis',       isAvailable: true,  connection: 'Skin barrier function aur immunity mein D involved hai' },
    { _key: 'ld5', diseaseName: 'PCOD',              diseaseSlug: 'pcod',            isAvailable: true,  connection: 'Insulin sensitivity aur hormonal balance mein D ka role' },
    { _key: 'ld6', diseaseName: 'Rickets',           diseaseSlug: 'rickets',         isAvailable: false, connection: 'Severe D kami se calcium absorption fail, bones deformed' },
    { _key: 'ld7', diseaseName: 'Osteoporosis',      diseaseSlug: 'osteoporosis',    isAvailable: false, connection: 'Adults mein bones porous aur brittle, fracture risk high' },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Weakness & Fatigue',  symptomSlug: 'weakness-fatigue' },
    { _key: 'ls2', symptomName: 'Hair Fall',            symptomSlug: 'hair-fall' },
    { _key: 'ls3', symptomName: 'Joint Pain',           symptomSlug: 'joint-pain' },
    { _key: 'ls4', symptomName: 'Muscle Cramps',        symptomSlug: 'muscle-cramps' },
    { _key: 'ls5', symptomName: 'Headache',             symptomSlug: 'headache' },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Vitamin D Test (25-OH)',  testSlug: 'vitamin-d-test',  isAvailable: true },
    { _key: 'rt2', testName: 'Vitamin B12 Test',        testSlug: 'vitamin-b12-test', isAvailable: true },
    { _key: 'rt3', testName: 'Calcium Test',            testSlug: 'calcium-test',     isAvailable: true },
    { _key: 'rt4', testName: 'Serum Iron Study',        testSlug: 'serum-iron-study', isAvailable: true },
    { _key: 'rt5', testName: 'CBC',                     testSlug: 'cbc',              isAvailable: true },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin B12', vitaminSlug: 'vitamin-b12' },
    { _key: 'rv2', vitaminName: 'Calcium',     vitaminSlug: 'calcium' },
    { _key: 'rv3', vitaminName: 'Magnesium',   vitaminSlug: 'magnesium' },
  ],

  homeopathicAlternatives: [
    {
      _key: 'ha1',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Mote, thake-thake, zyada pasina (sir aur hathelion mein); bacchon mein slow development, fontanelle late band hona; easily tired, cold-sensitive',
      howItHelps: 'Calcium metabolism aur absorption support karta hai. Jis constitution mein bones aur muscles ko nutrients properly nahi mil rahe — aisa weakness pattern address karta hai. Calcarea Carb ke cases mein vitamin D absorption mechanism bhi commonly compromised milta hai.',
    },
    {
      _key: 'ha2',
      medicineName: 'Silicea (Silica)',
      patientType: 'Patla, kamzor, zyada thanda lagne wala; bones aur nails weak; baar baar infections; baal jhadna wale patients',
      howItHelps: 'Mineral metabolism aur tissue nutrition ko support karta hai. Connective tissue aur bone health mein traditionally used; absorption weakness ke underlying constitutional cause ko address karta hai.',
    },
    {
      _key: 'ha3',
      medicineName: 'Phosphorus',
      patientType: 'Tall, patla, sociable lekin jaldi thak jaane wala; severe bone weakness; anemia ke saath Vitamin D kami; respiratory weakness',
      howItHelps: 'Bone metabolism aur phosphorus-calcium balance mein traditionally used. Immune weakness aur baar baar infections ke pattern mein bhi kaam karta hai.',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'India mein itni dhoop hai — Vitamin D ki kami ho hi nahi sakti',
      truth: 'India mein 43-70% logon mein deficiency hai. Dark skin, indoor jobs, pollution, full-body covering — sab milake deficiency common banate hain. Sunny country ka matlab automatically sufficient D nahi hota.',
    },
    {
      _key: 'm2',
      myth: 'Sirf budhon ko Vitamin D ki kami hoti hai',
      truth: 'India mein working-age adults (25-40 saal), urban youth, aur pregnant women mein deficiency bahut common hai. Office mein kaam karne wale young adults bhi regularly deficient milte hain tests mein.',
    },
    {
      _key: 'm3',
      myth: 'Roz 10 minute dhoop mein baithne se poori zaroorat puri ho jaati hai',
      truth: 'Dark-skinned Indians ko 30-45 minute proper exposure chahiye — haath-pair expose karke. Plus pollution, cloud cover, glass block karte hain. 10 minute majority Indian logon ke liye kaafi nahi hai.',
    },
    {
      _key: 'm4',
      myth: 'Vegetables aur fruits se Vitamin D milta hai',
      truth: 'NIN IFCT 2017 ke mutabik regular vegetables, fruits, dal, aur grains mein Vitamin D practically zero hota hai. Sirf sun-treated mushrooms aur specifically fortified foods mein meaningful Vitamin D hota hai.',
    },
    {
      _key: 'm5',
      myth: 'Vitamin D supplement lena safe nahi hai',
      truth: 'Doctor-prescribed dose mein Vitamin D completely safe hai. Toxicity tabhi hoti hai jab bina doctor ke 4000+ IU regularly liya jaaye. Normal therapeutic dose pe koi serious risk nahi hai.',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Vitamin D ki kami ke lakshan kya hote hain?',
      answer: 'Vitamin D ki kami ke sabse common lakshan hain: baar baar thakan, haddiyon aur muscles mein dard, baal jhadna, mood kharab rehna aur baar baar zukaam-infections lagna. Ye symptoms dheere aate hain isliye log ignore karte hain — blood test se hi confirm hota hai. India mein ye bahut common hai, especially office mein kaam karne wale logon mein.',
    },
    {
      _key: 'faq2',
      question: 'Vitamin D ki kami se kya hota hai?',
      answer: 'Vitamin D ki kami se bones weak hone lagti hain (Rickets bacchon mein, Osteomalacia adults mein), immunity girne se baar baar bimaar hona, chronic fatigue, depression, hair fall, aur muscles mein weakness aati hai. Long-term severe kami osteoporosis aur diabetes ka risk badh sakta hai.',
    },
    {
      _key: 'faq3',
      question: 'Vitamin D ki kami kaise puri karein — vegetarian ke liye?',
      answer: 'Vegetarians ke liye sun-treated mushrooms sabse effective source hain — 30-60 minute dhoop mein rakh ke pakao, ek katori se 300-400 IU milti hai. Fortified milk aur dahi bhi lo. Agar kami severe hai to doctor-prescribed supplement zaroori hai — sirf diet se severe kami nahi bhar sakti vegetarian mein.',
    },
    {
      _key: 'faq4',
      question: 'Vitamin D ka normal range kitna hona chahiye?',
      answer: 'Blood mein serum 25-OH Vitamin D ka 20 ng/mL ya zyada hona sufficient maana jaata hai. 12-19 ng/mL insufficient (caution zone) hai. 12 ng/mL se kam deficiency hai aur 10 ng/mL se kam severe deficiency. 50 ng/mL se zyada potentially harmful ho sakta hai. Apni lab report doctor ke saath discuss karein.',
    },
    {
      _key: 'faq5',
      question: 'Vitamin D tablet kab lena chahiye — subah ya raat?',
      answer: 'Vitamin D fat-soluble hai, isliye khane ke saath lena best hai — specifically ghee ya oil wale khane ke saath jisme thoda fat ho. Subah ya lunch ke time lena better rehta hai. Kuch logon ko raat ko lene se neend affect hoti hai. Khali pet ya plain paani ke saath bilkul nahi lena.',
    },
    {
      _key: 'faq6',
      question: 'Vitamin D ki kami pregnancy mein kya asar karta hai?',
      answer: 'Pregnancy mein Vitamin D ki kami se baby ki bones aur teeth ka development weak ho sakta hai, newborn mein calcium level low ho sakta hai, aur premature birth ka risk badh sakta hai. ICMR-NIN ke mutabik pregnancy mein 600 IU/day recommended hai. Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein.',
    },
    {
      _key: 'faq7',
      question: 'Vitamin D ki kami bacchon mein kaise pehchanein?',
      answer: 'Bacchon mein Vitamin D ki kami ke signs hain: pairs mein teda-pana (bow legs), skull soft rehna, growth slow hona, teeth late aana, zyada irritability. Bacchon ke liye Rickets ka risk hota hai — agar ye signs dikhein to paediatrician se milein, self-treatment nahi karni.',
    },
    {
      _key: 'faq8',
      question: 'Vitamin D3 aur Vitamin D2 mein kya fark hai?',
      answer: 'D3 (Cholecalciferol) zyada effective form hai — blood levels jaldi badhata hai, zyada time tak effect rehta hai, aur ye wahi form hai jo body sunlight se banati hai. D2 (Ergocalciferol) plant/fungal source se aata hai — vegans ke liye suitable lekin thoda kam potent. Majority logon ke liye D3 commonly recommended hai — doctor se confirm karein.',
    },
    {
      _key: 'faq9',
      question: 'Vitamin D ka test kaise hota hai aur kitne ka hai?',
      answer: 'Test naam hai: 25-Hydroxy Vitamin D Blood Test. Simple blood sample se hota hai — khali pet ki zaroorat nahi. India mein price Rs. 500-900 hai (Metropolis Labs, Dr. Lal PathLabs). Turant result wali labs mein usually same-day report milti hai.',
    },
    {
      _key: 'faq10',
      question: 'Vitamin D supplement ke side effects kya hain?',
      answer: 'Normal prescribed dose pe serious side effects practically nahi hote. Zyada dose lene pe (bina doctor ke 4000+ IU): nausea, zyada pyaas, zyada urine, weakness, kidney stones ka risk ho sakta hai. Doctor-prescribed dose mein lena safe hai — khud se high dose galat hai.',
    },
    {
      _key: 'faq11',
      question: 'Vitamin D ki kami mein baal kyun jhadte hain?',
      answer: 'Vitamin D hair follicle cycle regulate karta hai — specifically growth phase ke liye receptor-mediated mechanism hota hai. Kami mein follicles dormant phase mein zyada rehte hain, active growth kam hoti hai. Blood test se confirm karein — agar D low hai to treatment se hair fall usually 3-6 mahine mein better hone lagta hai.',
    },
    {
      _key: 'faq12',
      question: 'Vitamin D aur calcium saath mein le sakte hain?',
      answer: 'Haan — Vitamin D aur Calcium combination actually recommended hai. D calcium absorb karwata hai intestine mein. Dose doctor se confirm karein. Agar Vitamin K2 bhi saath lein to calcium bones mein properly jaata hai, arteries mein nahi. Combination supplements India mein easily available hain.',
    },
    {
      _key: 'faq13',
      question: 'Vitamin D zyada lene se kya hota hai?',
      answer: '4000 IU/day se zyada bina doctor ke nuksaan kar sakta hai — blood mein calcium zyada ho jaata hai (hypercalcemia), kidney mein calcium deposits, nausea, confusion, weakness. Doctor ke bina high-dose kabhi mat lo. Note: Food ya sunlight se toxicity practically nahi hoti — sirf supplements se hoti hai.',
    },
    {
      _key: 'faq14',
      question: 'Vitamin D kitne din mein badhta hai treatment pe?',
      answer: 'Blood level mein meaningful rise 4-8 hafte mein aata hai sahi dose pe. Thakan aur energy better feel hona 4-6 hafte mein shuru ho sakta hai. Bone pain 3-6 mahine mein better hota hai. 3 mahine baad test repeat karwayein. Ek hafte mein koi fark expect mat karein — patience zaroori hai.',
    },
    {
      _key: 'faq15',
      question: 'Vitamin D ki kami mein homeopathy kaam karta hai kya?',
      answer: 'Homeopathy Vitamin D ko directly replace nahi karta — lekin body ki absorption capacity aur underlying weakness ko address karne mein madadgar ho sakta hai. Severe deficiency mein conventional supplement pehle zaroori hai. Homeopathy saath mein complementary approach ke taur pe chal sakta hai — qualified homoeopath se consultation pe. Calcarea Carb, Silicea aur Phosphorus commonly used medicines hain is context mein.',
    },
    {
      _key: 'faq16',
      question: 'Vitamin D ki kami se thakan kyun hoti hai?',
      answer: 'Vitamin D mitochondria (energy factories of cells) ke function mein role karta hai. Muscles ko bhi D chahiye proper function ke liye. Aur immune system jo kami mein baar baar activate hota hai wo bhi energy consume karta hai. Yahi wajah hai ke Vitamin D kami mein "unexplained fatigue" bahut common aur consistent symptom hai.',
    },
    {
      _key: 'faq17',
      question: 'Sunscreen lagane se Vitamin D nahi banta kya?',
      answer: 'Theek hai — SPF 30+ sunscreen UV-B rays block karta hai jo Vitamin D synthesis ke liye zaroori hain. Lekin iska matlab sunscreen mat lagao nahi — skin cancer ka risk real hai. Practical solution: din ke 20-30 minute bina sunscreen, phir lagao. Ya reliable supplement lo — predictable aur safe option hai.',
    },
    {
      _key: 'faq18',
      question: 'Vitamin D aur Vitamin B12 ki kami saath mein hoti hai?',
      answer: 'Haan — India mein ye combination bahut common hai, especially vegetarians mein. B12 animal products mein hota hai, D bhi naturally animal sources mein zyada hai. Urban lifestyle dono ko affect karti hai. Symptoms bhi overlap karte hain (thakan, weakness, mood). Agar D test karwa rahe ho to B12 bhi ek saath karwa lo — ek blood sample se dono ho jaate hain.',
    },
    {
      _key: 'faq19',
      question: 'Vitamin D ki kami mein kya nahi khana chahiye?',
      answer: 'Hard "avoid list" nahi hai — kuch dhyan rakhein: chai aur coffee supplement ke 1 ghante baad lo (absorption affect hoti hai). Antacids regular use se absorption kam hoti hai — gap rakhein. Specifically Vitamin D ke liye dietary restriction nahi hoti — kami diet se nahi balki sunlight aur supplement se correct hoti hai.',
    },
    {
      _key: 'faq20',
      question: 'Vitamin D ki kami kitni common hai India mein?',
      answer: 'Bahut common — Metropolis Labs 2023-24 study mein 43% adults deficient mile. Older PubMed studies mein urban population mein 70-90% tak prevalence report hui hai. India sunny country hai phir bhi — pollution, indoor lifestyle, dark skin tone, aur cultural clothing practices sab milake deficiency epidemic level pe laate hain.',
    },
  ],
}

async function main() {
  console.log('Seeding Vitamin D...')
  const result = await client.createOrReplace(vitaminD)
  console.log('✅ Created:', result._id)
}

main().catch(console.error)
