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

const vitaminC = {
  _id: 'vitamin-vitamin-c',
  _type: 'vitamin',
  name: 'Vitamin C',
  hindiName: 'Amla Wala Vitamin / Nimbu Vitamin',
  category: 'Vitamin',
  slug: { _type: 'slug', current: 'vitamin-c' },
  metaTitle: 'Vitamin C Ki Kami: Lakshan, Foods aur Homeopathic Ilaj',
  metaDescription: 'Vitamin C ki kami ke lakshan, vegetarian food sources (amla, guava), normal range, supplement types aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: '',

  quickFacts: {
    indiaPrevalence: 'India mein Vitamin C deficiency report ki gayi hai — khaas taur pe wo log jinka diet fruits aur vegetables mein kam hai, smokers, aur jo log khana zyada pakaate hain (WHO data). India ke poor diet segments mein ye kaafi common hai.',
    commonDeficiencySign: 'Mele (Bleeding Gums) — Vitamin C ki kami se gums weak ho jaate hain aur thodi si chot pe khoon aane lagta hai. Ye sabse pehla aur common sign hai.',
    mainFoodSource: 'Amla (Indian Gooseberry) — sirf 100 gram mein 600 mg Vitamin C. Ye duniya ke sabse zyada Vitamin C wale fruits mein se ek hai. Ek amla roz khao — aur daily zaroorat poori.',
    normalRangeQuick: '0.4–1.7 mg/dL (Plasma Vitamin C). 0.4 se neeche kami. (Source: Redcliffe Labs India)',
  },

  whatIsIt: 'Vitamin C (Ascorbic Acid) ek zaroori water-soluble vitamin hai — matlab body mein yeh store nahi hota, isliye roz diet se lena padta hai. Yeh ek powerful antioxidant hai jo free radicals se body ko protect karta hai. Body mein iska sabse important kaam hai collagen banana — woh protein jo skin, bones, cartilage, blood vessels aur wound healing ke liye zaroori hai. Saath hi, Vitamin C immunity strong karta hai aur plant-based foods se iron ka absorption badhata hai — isliye vegetarians ke liye yeh double important hai.',

  bodyFunctions: [
    'Collagen synthesis — Skin, haddiyan, daant, cartilage aur blood vessels ke liye collagen banana; bina Vitamin C ke yeh kaam rukta hai',
    'Immunity boost — White blood cells (neutrophils) mein concentrate hota hai; infection se ladne ki capacity badhata hai',
    'Iron absorption — Plant-based iron (non-heme iron) ka absorption 2-3 guna badhata hai; dal, palak, chana khaane walon ke liye critical',
    'Antioxidant protection — Free radicals neutralize karta hai; cells ko damage se bachata hai, aging slow karta hai',
    'Wound healing — Naye tissue aur skin cells banane mein seedha role; ghav jaldi bhar ne mein madad karta hai',
    'Neurotransmitter synthesis — Brain chemicals (dopamine, norepinephrine) banana; mood aur energy ke liye zaroori',
    'Stress hormones — Adrenal gland se stress response ke time zaroorat badhti hai; isliye stress mein Vitamin C jaldi consume hota hai',
    'Gum health — Periodontal tissue ko strong rakhta hai; daant ki roots ke aas paas ki muscles aur tissue ko protect karta hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Haath-paon mein dard aur ache — Collagen nahi banta to joints aur muscles weak hote hain; khaas taur pe calf muscles mein dard',
      'Haddiyon mein weakness — Bacchon mein bone development rukta hai; adults mein osteoporosis ka risk badhta hai',
      'Ghav jaldi nahi bharti — Minor cuts ya scrapes weeks tak fresh rahte hain; collagen ki kami ki wajah se healing slow hoti hai',
      'Jodon mein sujan — Purani chot bhi re-open ho sakti hai; Vitamin C kami mein purane wound sites mein firse bleeding ho sakti hai',
    ],
    energyMoodBrain: [
      'Bahut zyada thakan (fatigue) — Yeh sabse pehla aur common sign hai; energy production mein direct role ki wajah se',
      'Irritability aur mood swings — Neurotransmitter synthesis slow ho jaata hai; mood down rehta hai',
      'Depression ke symptoms — Severe kami mein serotonin levels impact hote hain; scientific studies mein link dekha gaya hai',
      'Bhoolna ya dhyan nahi lagana — Brain function pe bhi Vitamin C ka role hai; concentration problems ho sakti hain',
      'Baar baar bimaar padna — Immunity weak ho jaati hai; chhoti si bimari bhi jaldi nahi theek hoti',
    ],
    skinHairNails: [
      'Rough, dry skin — Collagen ki kami se skin texture kharab hota hai; khaas taur pe arms aur legs pe',
      'Corkscrew ya spiral shape ke baal — Yeh Vitamin C deficiency ka ek specific sign hai; baal ka structure change ho jaata hai',
      'Baalon ka jhadna (hair loss) — Follicles ko nutrients nahi milte; weak roots aur hair fall',
      'Skin pe small red/purple dots (Petechiae) — Tiny blood vessels toot jaate hain; skin ke neeche chhote chhote bleeding spots dikhte hain',
    ],
    other: [
      'Mele (Bleeding Gums) — Gums swell jaate hain, laal ho jaate hain, aur brush karte time khoon aata hai; Vitamin C ki kami ka sabse common sign India mein',
      'Daant hilna ya girna — Severe cases mein collagen loss se gum tissue weak ho jaata hai; daant ki support structure khatam ho jaati hai',
      'Muh mein chhaale (Mouth Ulcers) — Mucosal healing slow ho jaata hai; baar baar ulcer hona ek sign ho sakta hai',
    ],
  },

  deficiencyCauses: [
    'Fruits aur vegetables nahi khaana — India ke kai tier-2, tier-3 cities mein log zyada cereal-based diet pe rehte hain; fresh produce kam khaate hain',
    'Overcooking se Vitamin C destroy hona — Vitamin C heat-sensitive hai; 70°C se upar pakane se 50-90% Vitamin C khatam ho jaata hai; palak ya tamatar zyada pakane se Vitamin C mar jaata hai',
    'Smoking — Smokers mein Vitamin C 35 mg/day zyada chahiye; smoke ke toxins Vitamin C ko jaldi consume kar dete hain (NIH data)',
    'Alcohol ka zyada sevan — Alcohol Vitamin C absorption rokta hai aur urine se excretion badhata hai',
    'Malabsorption conditions — Crohn\'s disease, celiac, IBD; inn conditions mein gut se Vitamin C absorb nahi hota',
    'Dialysis patients — Kidney dialysis mein Vitamin C filter ho jaata hai; haemodialysis patients mein deficiency common hai',
    'Pregnancy aur breastfeeding — Baby ki zaroorat badhti hai; agar diet mein nahi hai to kami ho jaati hai',
    'Elderly aur teethless patients — Fresh fruits khana mushkil ho jaata hai; soft ya liquid diet mein Vitamin C kam rehta hai',
    'Stress aur illness ke time — Adrenal glands aur immune cells Vitamin C jaldi consume kar lete hain',
  ],

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',        normal: '0.4–1.7 mg/dL', deficient: '< 0.4 mg/dL', toxic: '> 2.0 mg/dL', unit: 'mg/dL' },
    { _key: 'nr2', category: 'Adult Female',       normal: '0.4–1.7 mg/dL', deficient: '< 0.4 mg/dL', toxic: '> 2.0 mg/dL', unit: 'mg/dL' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)', normal: '0.4–1.7 mg/dL', deficient: '< 0.4 mg/dL', toxic: '> 1.7+ mg/dL', unit: 'mg/dL' },
    { _key: 'nr4', category: 'Pregnancy',          normal: '0.5–1.5 mg/dL', deficient: '< 0.4 mg/dL', toxic: 'High dose avoid', unit: 'mg/dL' },
    { _key: 'nr5', category: 'Elderly (60+)',       normal: '0.4–1.7 mg/dL', deficient: '< 0.4 mg/dL (high risk)', toxic: '> 2.0 mg/dL', unit: 'mg/dL' },
  ],

  vegSources: [
    { _key: 'v1',  food: 'Amla (Indian Gooseberry) raw 100g', quantity: '100g',           amount: '~600 mg' },
    { _key: 'v2',  food: 'Amla (1 piece ~20g)',                quantity: '1 amla',         amount: '~120 mg' },
    { _key: 'v3',  food: 'Amrood (Guava)',                     quantity: '1 medium (~90g)', amount: '~205 mg' },
    { _key: 'v4',  food: 'Shimla Mirch (Red Capsicum)',        quantity: '½ medium (~75g)', amount: '~100 mg' },
    { _key: 'v5',  food: 'Santra / Mosambi (Orange)',          quantity: '1 medium (~130g)', amount: '~70 mg' },
    { _key: 'v6',  food: 'Kacha Nimbu (Lemon juice)',          quantity: '1 glass (~240ml)', amount: '~55 mg' },
    { _key: 'v7',  food: 'Aamla Murabba',                      quantity: '1 piece (~30g)', amount: '~50 mg' },
    { _key: 'v8',  food: 'Sahjan ke Patte (Drumstick leaves)', quantity: '1 katori',       amount: '~40 mg' },
    { _key: 'v9',  food: 'Patta Gobhi (Cabbage, raw)',         quantity: '1 katori (~80g)', amount: '~30 mg' },
    { _key: 'v10', food: 'Tamatar (Tomato, raw)',              quantity: '1 medium (~120g)', amount: '~20 mg' },
    { _key: 'v11', food: 'Aloo (Potato, boiled)',              quantity: '1 medium (~150g)', amount: '~12 mg' },
    { _key: 'v12', food: 'Palak (Spinach, raw)',               quantity: '1 katori (~30g)', amount: '~8 mg' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Chicken Liver', quantity: '100g', amount: '~28 mg' },
    { _key: 'nv2', food: 'Beef Liver',    quantity: '100g', amount: '~23 mg' },
    { _key: 'nv3', food: 'Oysters',       quantity: '100g', amount: '~8 mg' },
  ],

  sunlightNote: 'Vitamin C mostly fruits aur vegetables se milti hai — meat mein bahut kam hoti hai. Practical India tip: 1 amla roz khao (murabba ya raw) — din bhar ki zaroorat (65-80 mg) ek amle se poori ho jaati hai. Nimbu paani subah khali pet — iron bhi absorb hota hai aur Vitamin C bhi milti hai. IMPORTANT: Garam paani mein nimbu daalna bekar hai — heat se Vitamin C destroy ho jaati hai. Raw salad ya sabji halka pakao. Source: NIN Indian Food Composition Tables (2017) aur ICMR data.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–6 months',    male: '25',  female: '25',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day (AI)' },
    { _key: 'd2', ageGroup: '6–12 months',   male: '25',  female: '25',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd3', ageGroup: '1–8 saal',      male: '40',  female: '40',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd4', ageGroup: '9–18 saal',     male: '65',  female: '65',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd5', ageGroup: '19–50 saal',    male: '80',  female: '65',  pregnancy: '85',  breastfeeding: '120', unit: 'mg/day (ICMR-NIN 2020)' },
    { _key: 'd6', ageGroup: '51–70 saal',    male: '80',  female: '65',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd7', ageGroup: '70+ saal',      male: '80',  female: '65',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd8', ageGroup: 'Smokers (extra)', male: '+35', female: '+35', pregnancy: null, breastfeeding: null, unit: 'mg/day extra' },
  ],

  pregnancyInfo: {
    howImportant: 'Pregnancy mein Vitamin C ki zaroorat badhkar 85 mg/day ho jaati hai (ICMR-NIN 2020). Breastfeeding mein 120 mg/day tak chahiye kyunki breast milk se baby ko Vitamin C milta hai. Food sources se Vitamin C sabse safe — amla, guava, lemon daily. Supplement 500-1000 mg se upar na lo bina doctor ke.',
    dailyRequired: '85 mg/day (ICMR-NIN 2020)',
    babyEffects: [
      'Baby ki bone aur connective tissue development slow',
      'Preterm birth ka risk (kuch studies mein link)',
      'Baby mein immune system weak',
      'Cord blood mein Vitamin C ki kami',
    ],
    supplementSafe: true,
    doctorLine: 'Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein — khaas taur pe agar blood thinners ya koi aur medicine le rahi hain.',
  },

  childrenInfo: {
    deficiencySymptoms: [
      'Irritability aur rone ki aadat — babies mein "Barlow\'s Disease" (extreme pain se bacche pair move nahi karte)',
      'Alag tarike se baal ugna (corkscrew hair)',
      'Poor wound healing',
      'Gum mein bleeding (jab daant aa rahe hote hain)',
    ],
    ageWiseRequirement: '1-8 saal: 40 mg/day | 9-18 saal: 65 mg/day',
    foodSources: 'Amla juice (diluted, thoda shakar), amrood (1 guava mein 200+ mg), orange/mosambi juice (1 glass daily).',
    supplementNote: 'Agar baccha fresh fruits khata hai to supplement ki zaroorat nahi. Picky eater hai to pediatrician se poocho — self-prescribed Vitamin C gummies avoid karo.',
  },

  labTestInfo: {
    testName: 'Vitamin C (Ascorbic Acid) Serum/Plasma by HPLC',
    testSlug: 'vitamin-c-test',
    normalRange: '0.4–1.7 mg/dL (23–97 µmol/L). Deficient: < 0.4 mg/dL (< 23 µmol/L). Severe deficiency / scurvy risk: < 11 µmol/L. Source: Redcliffe Labs India, Metropolis Healthcare India, NIH ODS.',
    whenToTest: 'Gums se khoon aa raha ho, bahut thakan ho, ghav nahi bhar rahi, ya baar baar bimaar ho. Pure vegetarian ya vegan hain aur fruits khaane ki aadat nahi. Dialysis patients, chronic alcoholics, aur Crohn\'s disease patients ko routine test karana chahiye. Bacche mein leg pain ya irritability ke saath poor wound healing ho.',
    repeatAfter: 'Supplement shuru karne ke 3 mahine baad repeat karaye — dekhein level normal hua ya nahi.',
    priceRange: 'Rs 500 – Rs 2,500 (lab ke hisab se alag). Metropolis Healthcare aur Dr. Lal PathLabs dono mein available. Test se 24 ghante pehle Vitamin C supplements aur citrus fruits band karo — warna galat high reading aa sakti hai.',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Ascorbic Acid (L-Ascorbic Acid)',
      benefits: ['Sabse common aur affordable form', 'Well-studied', 'Highest bioavailability among standard forms'],
      drawbacks: ['Acidic hoti hai — khali pet lene se stomach upset, acidity, nausea', 'Kidney stone history walon mein caution'],
      bestFor: 'Healthy adults jinhein normal deficiency correct karni ho; khane ke saath lena better hai',
    },
    {
      _key: 'sf2',
      formName: 'Sodium Ascorbate (Buffered Vitamin C)',
      benefits: ['Non-acidic form — stomach friendly', 'Khaas taur pe jo log easily acidity feel karte hain'],
      drawbacks: ['Sodium content thoda zyada hota hai — high blood pressure walon ke liye cautiously use karein'],
      bestFor: 'Jo log regular ascorbic acid se pet mein jalan feel karte hain; elderly patients',
    },
    {
      _key: 'sf3',
      formName: 'Calcium Ascorbate',
      benefits: ['Calcium bhi milta hai saath mein', 'Stomach friendly', 'Mild form'],
      drawbacks: ['Calcium zyada lena kidney stone risk badha sakta hai', 'Pehle se calcium supplement le rahe hain to double dose na ho'],
      bestFor: 'Bone health ke liye Vitamin C + Calcium dono chahiye ho',
    },
    {
      _key: 'sf4',
      formName: 'Liposomal Vitamin C',
      benefits: ['Sabse zyada absorption — fat-soluble carriers mein hoti hai', 'High dose bina GI side effects ke'],
      drawbacks: ['Sabse expensive form', 'Zyada tar logon ke liye overkill'],
      bestFor: 'Medical grade use; severe deficiency mein jab regular absorption nahi hoti; expensive but highly bioavailable',
    },
  ],

  supplementTiming: {
    bestTime: 'Khane ke saath lena sabse best hai — khaas taur pe jisme thoda protein ya fat ho. Vitamin C water-soluble hai, isliye fat ke saath zaroorat nahi — lekin khane ke saath stomach upset avoid hoti hai.',
    withFood: 'Khane ke saath ya turant baad — khali pet lene se acidity aur stomach cramps ho sakte hain. Ascorbic acid form hai to khaas taur pe khana saath rakhein.',
    absorptionTips: [
      'Iron supplement ke saath Vitamin C lo — ye combination India mein anaemia ke liye bahut effective hai',
      'Fresh nimbu paani saath mein peena natural option hai',
      'Ek hi baar mein 1000 mg se zyada mat lo — body ek time mein utna hi absorb karta hai jitni zaroorat hai, baaki urine mein nikal jaata hai',
    ],
    avoidWith: [
      'Garam chai ya coffee ke immediately saath nahi — wait karo 30-45 min (Vitamin C heat se destroy hoti hai)',
      'Antacids ke saath turant nahi — stomach acid neutralize hone se absorption affect ho sakti hai',
      'High dose Vitamin C + Iron combination — agar iron overload condition (hemochromatosis) hai to dangerous; doctor se poochein',
    ],
  },

  drugInteractions: [
    {
      _key: 'di1',
      medicineName: 'Warfarin (Blood thinner)',
      reason: 'High dose Vitamin C (> 1000 mg/day) warfarin ka effect reduce kar sakta hai — INR levels affect ho sakte hain. Blood thinner le rahe hain to doctor se zaroor poochein pehle (Source: Mayo Clinic).',
    },
    {
      _key: 'di2',
      medicineName: 'Chemotherapy medicines',
      reason: 'High-dose Vitamin C kuch chemotherapy drugs ke antioxidant effect ko interfere kar sakta hai. Cancer treatment chal rahi hai to oncologist se permission le bina supplement mat lo (Source: Mayo Clinic).',
    },
    {
      _key: 'di3',
      medicineName: 'Estrogen / Oral Contraceptive Pills (OCP)',
      reason: 'Vitamin C ke saath OCP lene se estrogen levels thode badhte hain. Koi serious effect nahi, lekin doctor ko batao agar dono saath le rahe ho (Source: Mayo Clinic).',
    },
    {
      _key: 'di4',
      medicineName: 'Protease Inhibitors (HIV medicines jaise Indinavir)',
      reason: 'Vitamin C in antiviral medicines ki effectiveness reduce kar sakta hai. HIV treatment mein hai to supplement doctor se poochkar lo (Source: Mayo Clinic).',
    },
    {
      _key: 'di5',
      medicineName: 'Statins + Niacin combination',
      reason: 'High-dose antioxidants statins aur niacin ka "good cholesterol" badhane wala effect reduce kar sakte hain. Agar cholesterol medicines le rahe hain to supplement dose doctor se confirm karein (Source: Mayo Clinic).',
    },
  ],

  combinations: {
    beneficial: [
      { _key: 'cb1', nutrient: 'Iron (Ferrous Sulphate)', reason: 'Vitamin C iron absorption 2-3 guna badhata hai; anaemia treatment mein ye combination India mein doctor frequently recommend karte hain' },
      { _key: 'cb2', nutrient: 'Zinc',    reason: 'Dono immunity ke liye kaam karte hain; wound healing fast hoti hai saath mein lene se' },
      { _key: 'cb3', nutrient: 'Collagen', reason: 'Vitamin C collagen synthesis ka cofactor hai — saath lene se skin aur joint benefits better milte hain' },
    ],
    avoid: [
      { _key: 'ca1', nutrient: 'High-dose Vitamin E', reason: 'Bahut zyada antioxidants ek saath lene se theoretical issues; normal food se koi problem nahi lekin supplement mein high dose combination avoid karo' },
      { _key: 'ca2', nutrient: 'Copper supplements (high dose)', reason: 'Vitamin C excess mein copper absorption thoda reduce kar sakta hai' },
    ],
    timingGuide: 'Vitamin C subah ya khane ke saath lo. Iron supplement ke saath lena best — absorption 2-3x badhti hai. Raat ko Calcium lo (2-3 ghante gap rakhein Vitamin C se).',
  },

  toxicity: {
    upperLimit: '2000 mg/day (NIH Tolerable Upper Intake Level for adults). ICMR bhi 1000 mg se upar routinely lene ki recommendation nahi karta.',
    sideEffects: [
      'Diarrhea / Loose stools — 1000 mg se upar common; "bowel tolerance" se zyada lena digestive upset deta hai',
      'Stomach cramps aur nausea — Ascorbic acid form zyada hone pe gastric lining irritate hoti hai',
      'Kidney stones (Oxalate stones) — 1000 mg/day se zyada regularly lene se oxalate level blood mein badhta hai; kidney stone history walon ko serious risk (NIH)',
      'Headache aur insomnia — Zyada dose lene ke baad thode logon mein dekha gaya hai',
      'False glucose test readings — Diabetics jo urine glucose test karte hain; 500 mg+ Vitamin C galat results de sakta hai',
      'Iron overload — Agar hemochromatosis (excess iron condition) hai to Vitamin C iron absorption aur badhata hai — dangerous',
    ],
    whenSerious: '3000-4000 mg/day routinely lene pe — especially kidney stone history waalon mein urgent medical attention chahiye.',
  },

  timeline: {
    bloodLevelTime: 'Supplement shuru karne ke 2–4 hafte mein plasma Vitamin C level normal range mein aa jaata hai — yeh test pe dikhega.',
    symptomsTime: 'Gum bleeding: 2–4 hafte mein clearly better. Thakan aur mood: 2–6 hafte. Skin texture aur wound healing: 4–8 hafte mein noticeable fark. Complete tissue repair: 3–6 mahine.',
    fullRecoveryTime: 'Mild deficiency: 4–6 hafte mein mostly theek. Severe deficiency / Scurvy: 2–3 mahine rigorous treatment ke baad.',
    repeatTestTime: '3 mahine baad — blood test se confirm karo ki level normal hua ya nahi.',
    patientNote: 'Ek hafte mein sab theek nahi hoga — patience zaroori hai. Diet changes + supplement ka combination jaldi kaam karta hai akele supplement se.',
  },

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Scurvy', diseaseSlug: 'scurvy', isAvailable: false, connection: 'Severe Vitamin C deficiency directly causes scurvy — gum bleeding, wounds not healing' },
    { _key: 'ld2', diseaseName: 'Iron Deficiency Anaemia', diseaseSlug: 'iron-deficiency-anaemia', isAvailable: false, connection: 'Vitamin C boosts non-heme iron absorption 2-3x — critical for anaemia treatment' },
    { _key: 'ld3', diseaseName: 'Gingivitis (Gum Disease)', diseaseSlug: 'gingivitis', isAvailable: false, connection: 'Vitamin C deficiency causes bleeding gums and periodontal disease' },
    { _key: 'ld4', diseaseName: 'Wound Healing Problems', diseaseSlug: 'wound-healing', isAvailable: false, connection: 'Collagen synthesis requires Vitamin C; deficiency causes chronic non-healing wounds' },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Bleeding Gums', symptomSlug: 'bleeding-gums' },
    { _key: 'ls2', symptomName: 'Fatigue', symptomSlug: 'fatigue' },
    { _key: 'ls3', symptomName: 'Poor Wound Healing', symptomSlug: 'poor-wound-healing' },
    { _key: 'ls4', symptomName: 'Hair Loss', symptomSlug: 'hair-loss' },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Vitamin C (Ascorbic Acid) Serum Test', testSlug: 'vitamin-c-test', isAvailable: false },
    { _key: 'rt2', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc-test', isAvailable: false },
    { _key: 'rt3', testName: 'Serum Iron / TIBC', testSlug: 'iron-test', isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Iron', vitaminSlug: 'iron' },
    { _key: 'rv2', vitaminName: 'Zinc', vitaminSlug: 'zinc' },
    { _key: 'rv3', vitaminName: 'Vitamin E', vitaminSlug: 'vitamin-e' },
    { _key: 'rv4', vitaminName: 'Vitamin D', vitaminSlug: 'vitamin-d' },
  ],

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Acidum Ascorbicum',
      patientType: 'Jo patients specifically Vitamin C deficiency ke symptoms show kar rahe hain — fatigue, bleeding gums, poor wound healing ke saath',
      howItHelps: 'Body ki Vitamin C utilize karne ki capacity improve karne ke liye traditionally use hoti hai. Scurvy-like symptoms aur general weakness mein helpful mani gayi hai. (Source: Homeopathic Materia Medica — Hpathy)',
    },
    {
      _key: 'h2',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Overweight ya tendency to gain weight wale patients; easily thak jaane wale; sweat zyada aata ho; bacchon mein bone development poor ho',
      howItHelps: 'Mineral absorption ko improve karne ke liye jaani jaati hai — khaas taur pe jab poor absorption ki wajah se multiple deficiencies hoon. Digestive weakness ke saath kami mein helpful. (Constitutional remedy)',
    },
    {
      _key: 'h3',
      medicineName: 'Carbo Vegetabilis',
      patientType: 'Bahut zyada thakaan wale patients; digestion weak ho; flatulence ho; recovery slow ho kisi bimari ke baad',
      howItHelps: 'Metabolic weakness aur poor recovery mein ye remedy helpful manai jaati hai. Jab body absorb nahi kar pa raha ho tab constitutional support ke taur pe use hoti hai.',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Orange se sabse zyada Vitamin C milti hai — roz ek orange kaafi hai',
      truth: 'Orange mein ~70 mg Vitamin C hai ek mein — theek hai, lekin amla mein 600 mg per 100g hota hai, aur ek guava mein 200 mg. India mein amla sabse zyada Vitamin C wala easily available fruit hai. Orange good hai, lekin "king" amla hai.',
    },
    {
      _key: 'm2',
      myth: 'Vitamin C lene se sardi-zukaam nahi hoti — 1000 mg lo, theek ho jaayega',
      truth: 'Research suggest karta hai ki regular Vitamin C cold ki duration thodi kam kar sakta hai — lekin preventive ya cure nahi hai. High dose lene se zukaam ek din mein nahi jaata. Ye popular myth hai jisme science partial support karta hai sirf.',
    },
    {
      _key: 'm3',
      myth: 'Vitamin C water-soluble hai — jitna chahe lo, urine mein nikal jaayega, koi nuksan nahi',
      truth: 'Haan, excess Vitamin C urine mein jaata hai — lekin 2000 mg se upar regularly lene se kidney stones, stomach cramps, aur diarrhea ho sakta hai. "Safe kyunki water-soluble hai" — ye galat logic hai. Upper limit NIH ke mutabik 2000 mg/day hai.',
    },
    {
      _key: 'm4',
      myth: 'Nimbu garam paani mein daalo to Vitamin C milti hai',
      truth: 'Garam pani (60-70°C se upar) mein Vitamin C destroy ho jaata hai — isliye garam paani mein nimbu daalna Vitamin C ke liye useless hai. Agar Vitamin C chahiye to nimbu ka ras thande ya halke gungune paani mein lo.',
    },
    {
      _key: 'm5',
      myth: 'Vitamin C supplement se skin white ho jaati hai',
      truth: 'Vitamin C skin mein melanin production ko thoda regulate kar sakta hai — isliye pigmentation ya dark spots mein kuch improvement hoti hai. Lekin ye "skin whitening" nahi hai. Supplement tablet se ye effect serum (topical) se zyada hota hai. Skin completely white nahi hogi — ye product companies ka marketing angle hai.',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Vitamin C ki kami ke lakshan kya hain?',
      answer: 'Vitamin C ki kami ke sabse common lakshan hain — mele (gums se khoon aana), bahut zyada thakan, chhoti ghav ka jaldi nahi bharna, aur baar baar bimaar padna. Skin pe chhote red-purple spots (petechiae), spiral shape ke baal, aur irritability bhi kami ke signs hain. India mein gum bleeding sabse pehle notice hota hai. Agar ye symptoms hain to diet mein amla, guava, aur nimbu badhao aur doctor se milein.',
    },
    {
      _key: 'faq2',
      question: 'Vitamin C kisme sabse zyada paya jaata hai — vegetarian mein?',
      answer: 'Amla (Indian Gooseberry) India ka sabse zyada Vitamin C wala vegetarian food hai — 100g amla mein 600 mg Vitamin C hota hai. Uske baad amrood (guava) mein 200+ mg per fruit, laal shimla mirch (red capsicum) mein ~130 mg/100g, aur ek glass nimbu paani mein ~55 mg hoti hai. Sirf ek amla roz — aur din bhar ki Vitamin C mil jaati hai.',
    },
    {
      _key: 'faq3',
      question: 'Vitamin C ki kitni matra roz leni chahiye?',
      answer: 'ICMR-NIN 2020 ke mutabik Indian adults ke liye: Men — 80 mg/day, Women — 65 mg/day, Pregnancy mein — 85 mg/day, Breastfeeding — 120 mg/day. Smokers ko 35 mg extra chahiye. In levels ko achieve karna Indian fruits aur vegetables se bahut aasaan hai — roz ek guava ya amla se kaafi ho jaata hai.',
    },
    {
      _key: 'faq4',
      question: 'Vitamin C ki kami se kaunsi bimari hoti hai?',
      answer: 'Vitamin C ki severe kami se Scurvy hoti hai — jisme gums se khoon aata hai, wounds nahi bharte, daant girate hain, aur extreme weakness hoti hai. Iske alawa Iron Deficiency Anaemia, weak immunity, aur gum disease (gingivitis/periodontitis) bhi hoti hain. India mein Scurvy rare hai, lekin mild deficiency ke symptoms bahut common hain.',
    },
    {
      _key: 'faq5',
      question: 'Vitamin C test kab karaye aur iska price kya hai?',
      answer: 'Agar gum bleeding, chronic fatigue, ya poor wound healing ho — to Vitamin C blood test karaye. Test ka naam hai "Vitamin C / Ascorbic Acid — Serum/Plasma by HPLC". India mein price approximately Rs 500-2500 tak aata hai (lab ke hisab se alag). Test se 24 ghante pehle Vitamin C supplements aur citrus fruits bandh kar dein — warna galat high reading aa sakti hai.',
    },
    {
      _key: 'faq6',
      question: 'Vitamin C tablet kab aur kaise khaye?',
      answer: 'Vitamin C tablet khane ke saath ya turant baad lo — khali pet lene se stomach upset ho sakti hai kyunki ascorbic acid acidic hoti hai. Ek glass paani ke saath lo. Iron tablet bhi saath mein hai to saath hi lo — iron absorption 2-3 guna badhti hai. Garam chai ke saath bilkul nahi — Vitamin C heat se destroy hoti hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya Vitamin C tablet roz khani chahiye?',
      answer: 'Agar aap roz amla, guava, nimbu, ya capsicum khaate hain — to supplement ki zaroorat nahi. Agar diet mein fresh fruits aur vegetables kam hain, ya doctor ne deficiency confirm ki hai, tab supplement lo. Healthy adults ke liye food-first approach better hai. Supplement wahi lo jab doctor recommend kare ya test mein kami confirm ho.',
    },
    {
      _key: 'faq8',
      question: 'Kya nimbu se poori Vitamin C zaroorat puri ho sakti hai?',
      answer: 'Ek glass nimbu paani (fresh — garam nahi) mein lagbhag 55 mg Vitamin C hoti hai — jo adult female ki daily zaroorat (65 mg) ke kareeb hai. Agar saath mein thoda aur vegetables ya amla khao to poora ho jaata hai. Lekin garam pani mein nimbu daalna Vitamin C ke liye bekar hai — heat se Vitamin C destroy ho jaati hai.',
    },
    {
      _key: 'faq9',
      question: 'Vitamin C pregnancy mein lena safe hai?',
      answer: 'Haan, pregnancy mein Vitamin C food sources se lena bilkul safe hai — aur zaroorat bhi badhti hai (85 mg/day ICMR ke mutabik). Supplement leni ho to prescribed dose mein lo — 500 mg se upar bina doctor ke mat lo. Very high doses (2000+ mg) ka risk assessment nahi hua pregnancy mein. Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein.',
    },
    {
      _key: 'faq10',
      question: 'Vitamin C ki kami bacchon mein kaise pehchanein?',
      answer: 'Bacchon mein Vitamin C kami ke signs hain — baalon ka spiral mein ugna (corkscrew hair), pair mein dard aur movement resist karna (Barlow\'s disease — severe case mein), gum bleeding, aur wounds jaldi nahi bharte. Agar baccha fresh fruits bilkul nahi khata aur ye signs hain to pediatrician se milein. Generally amrood ya amla juice daily dene se prevent kiya ja sakta hai.',
    },
    {
      _key: 'faq11',
      question: 'Vitamin C zyada lene se kya hota hai?',
      answer: '2000 mg/day se upar lene pe stomach cramps, diarrhea, headache, aur nausea ho sakti hai. Kidney stone history walon mein 1000 mg se upar regularly lene se oxalate stones ka risk badhta hai. Diabetics mein 500 mg+ se urine glucose test galat reading de sakta hai. Aam logon ke liye roz 500 mg se zyada lene ki zaroorat nahi hoti — food se zyada zaroorat poori ho jaati hai.',
    },
    {
      _key: 'faq12',
      question: 'Kya amla powder se Vitamin C milti hai?',
      answer: 'Dry amla powder mein Vitamin C raw amla se thodi kam ho jaati hai — drying aur processing mein kuch Vitamin C destroy hoti hai. Lekin phir bhi amla powder ek achha source hai. Fresh amla sabse best hai — agar available nahi hai to amla murabba ya achar bhi kuch Vitamin C deta hai, lekin sugar aur salt zyada hoti hai. Supplement ke alternative mein amla powder ek practical option hai.',
    },
    {
      _key: 'faq13',
      question: 'Vitamin C aur iron tablets ek saath le sakte hain?',
      answer: 'Haan — aur ye combination India mein anaemia ke liye doctor frequently recommend karte hain. Vitamin C iron ka absorption 2-3 guna badha deta hai. Sabse effective tarika: Iron tablet ke saath ek glass nimbu paani peena, ya iron tablet ke saath Vitamin C tablet saath mein lena. Lekin agar hemochromatosis (iron overload) ki condition hai to ye combination dangerous hai — pehle doctor se poochein.',
    },
    {
      _key: 'faq14',
      question: 'Kya Vitamin C skin ke liye tablet form mein khaane se fayda hota hai?',
      answer: 'Haan — oral Vitamin C skin ke liye genuinely helpful hai. Yeh collagen synthesis support karta hai, dark spots thode fade hote hain, aur skin ke overall texture mein improvement hoti hai. Lekin skin whitening nahi hogi — jo claims products pe milti hain wo exaggerated hain. Topical Vitamin C serum oral supplement se skin pe zyada direct effect karta hai. Dono ka combination better kaam karta hai.',
    },
    {
      _key: 'faq15',
      question: 'Vitamin C ki kami mein homeopathic ilaj kya hai?',
      answer: 'Homeopathy direct Vitamin C replace nahi karta — lekin body ki absorption aur immunity improve karne mein complementary role hota hai. Acidum Ascorbicum, Calcarea Carbonica, aur Carbo Vegetabilis commonly use hoti hain depending on patient\'s overall symptoms aur constitution. Lekin potency aur selection sirf qualified homoeopath decide karta hai — self-medication avoid karein. Severe deficiency mein pehle conventional supplement zaroori hai.',
    },
    {
      _key: 'faq16',
      question: 'Vitamin C ka test kitne ka hota hai?',
      answer: 'India mein Vitamin C (Ascorbic Acid Serum/Plasma by HPLC) test ki price Rs 500 se Rs 2,500 ke beech hoti hai — city aur lab ke hisab se. Metropolis Healthcare aur Dr. Lal PathLabs dono mein available hai. Home collection bhi milti hai kuch labs mein. Test se 24 ghante pehle Vitamin C tablets aur citrus fruits band karo — warna galat result aa sakta hai.',
    },
    {
      _key: 'faq17',
      question: 'Kitne din mein Vitamin C deficiency theek hoti hai?',
      answer: 'Mild deficiency mein 4-6 hafte mein blood levels normal ho jaate hain supplement + diet se. Gum bleeding 2-4 hafte mein better hoti hai. Full recovery — skin, bones, aur energy — 2-3 mahine lagte hain. Patience zaroori hai — ek hafte mein sab theek nahi hoga. 3 mahine baad test repeat karo.',
    },
    {
      _key: 'faq18',
      question: 'Kya sirf nimbu khane se Vitamin C ki kami poori ho sakti hai?',
      answer: 'Nimbu ek good source hai — lekin amla ki comparison mein kaafi kam. 1 nimbu ke juice mein ~30-55 mg Vitamin C hoti hai jo adults ki daily requirement ke kareeb hai. Lekin agar mild deficiency hai to sirf nimbu se nahi chalega — amla ya guava bhi add karo. Severe deficiency mein sirf food se nahi hoga — supplement zaroor chahiye.',
    },
    {
      _key: 'faq19',
      question: 'Vitamin C ki kami kaise puri karein ghar pe?',
      answer: 'Sabse effective ghar pe solution: roz ek amla (raw ya murabba), ya ek amrood (guava), ya ek glass nimbu paani (thanda). Vegetables mein laal shimla mirch aur tamatar raw salad mein khaao. Khaana zyada mat pakao — halka pakao ya raw khaao. Ye changes 4-6 hafte mein blood level improve kar denge. Agar test mein severe kami hai to ghar ke options enough nahi honge — doctor-prescribed supplement zaroori hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya Vitamin C serum (topical) aur Vitamin C tablet ek saath le sakte hain?',
      answer: 'Haan — ye dono alag tarike se kaam karte hain. Topical Vitamin C serum skin pe directly apply hota hai — skin ke local antioxidant protection aur dark spot reduction ke liye. Oral Vitamin C tablet blood se pure body mein jaata hai — collagen, immunity, aur iron absorption ke liye. Dono saath use karna skin ke liye best results deta hai — ek doosre ko nahi rokta.',
    },
  ],

  sources: [
    'NIH Office of Dietary Supplements — Vitamin C Fact Sheet for Health Professionals | 2024 | ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    'ICMR-NIN Nutrient Requirements for Indians — Recommended Dietary Allowances 2020 | 2020 | nin.res.in',
    'Mayo Clinic — Vitamin C Drug Interactions | 2024 | mayoclinic.org/drugs-supplements-vitamin-c/art-20363932',
    'Metropolis Healthcare India — Vitamin C Test | metropolisindia.com/parameter/vitamin-c-serumheparin-plasma-by-hplc-v0014',
    'Redcliffe Labs India — Vitamin C Test Normal Range | redcliffelabs.com/vitamin-c-ascorbic-acid',
    'NIN Indian Food Composition Tables 2017 | nin.res.in (amla, guava, capsicum values)',
  ],
}

async function seed() {
  try {
    console.log('Seeding Vitamin C...')
    const result = await client.createOrReplace(vitaminC)
    console.log('Done:', result._id)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seed()
