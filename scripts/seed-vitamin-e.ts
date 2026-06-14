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

const vitaminE = {
  _id: 'vitamin-vitamin-e',
  _type: 'vitamin',
  name: 'Vitamin E',
  hindiName: 'Twacha aur Immunity Wala Vitamin',
  category: 'Vitamin',
  slug: { _type: 'slug', current: 'vitamin-e' },
  metaTitle: 'Vitamin E Ki Kami: Lakshan, Foods & Homeopathic Ilaj',
  metaDescription: 'Vitamin E ki kami ke lakshan, vegetarian food sources, normal range aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: '',

  quickFacts: {
    indiaPrevalence: 'Vitamin E ki kami India mein dietary deficiency se rarely hoti hai — zyada tar fat malabsorption (Crohn\'s, celiac disease) wale patients mein dekhi jaati hai. (WHO / NIH data)',
    commonDeficiencySign: 'Nerves mein kamzori — haath-paon mein numbness ya burning (peripheral neuropathy) — ye pehla identifiable sign hai',
    mainFoodSource: 'Badam (Almonds) — 28g (ek mutthi) mein approx. 7.3 mg Vitamin E, yaani RDA ka ~50%',
    normalRangeQuick: '5.5–17 mg/L (Serum Alpha-Tocopherol)',
  },

  whatIsIt: 'Vitamin E ek fat-soluble (yaani fat mein ghulne wala) vitamin hai jo body mein ek powerful antioxidant (free radicals ko khatam karne wala) ki tarah kaam karta hai. Ye ek vitamin nahi balki 8 related compounds ka samuh hai — inme alpha-tocopherol sabse important form hai jo human body use karta hai. Iska main kaam cells ko oxidative damage se bachana hai — isliye ye skin, immunity, aur nervous system ke liye bahut zaroori hai.',

  bodyFunctions: [
    'Antioxidant protection — Free radicals se cells ki membrane bachata hai; ye damage cancer aur heart disease ki wajah ban sakta hai',
    'Immunity badhata hai — White blood cells (fighter cells) ki production aur function support karta hai; infections se ladne mein madad',
    'Skin health — Skin cells ko UV damage aur pollution se bachata hai; isliye skin products mein common ingredient hai',
    'Blood thinning (anti-clotting) — Platelets ko unnecessary clump hone se rokta hai; blood flow smooth rakhta hai',
    'Nerves ka maintenance — Nerve cells ki membrane ko healthy rakhta hai; nervous system ke liye vital',
    'Aankhon ki sehat — Retina ko oxidative stress se bachata hai; age-related macular degeneration ka risk kam karta hai',
    'Vitamin K ke saath kaam — Vitamin K-dependent clotting factors ko balance karta hai',
    'Gene expression — Cell signaling aur protein kinase C enzyme ko regulate karta hai',
  ],

  causesOfDeficiency: [
    'Fat malabsorption disorders (MAIN CAUSE) — Crohn\'s disease, celiac disease, ulcerative colitis, cystic fibrosis; ye sab fat absorb nahi karne dete, aur Vitamin E fat mein ghulta hai isliye absorb nahi hota',
    'Abetalipoproteinemia (genetic condition) — Ek rare genetic bimari jisme blood mein fat transport hi nahi hota; Vitamin E organs tak reach nahi kar paata',
    'Bariatric surgery (weight loss surgery) — Aajkal India mein badhti practice; long-term follow-up mein 16.5% patients mein Vitamin E deficiency report hui hai',
    'Cholestasis (bile flow ka rukna) — Bile fat digestion ke liye zaroori hai; bile na hone se fat-soluble vitamins absorb nahi hote',
    'Severe malnutrition ya very low fat diet — Agar diet mein hi fat nahi (nuts, seeds, oils bilkul nahi) to absorption ke liye fat nahi milta',
    'Premature babies (preterm infants) — Birth ke time body fat stores bahut kam hote hain; Vitamin E stores bhi nahi hote',
    'Liver disease (advanced) — Liver alpha-tocopherol transfer protein banata hai; liver kharab hone se Vitamin E blood mein distribute nahi hota',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Muscle weakness — khaas kar legs mein: Muscles ke oxidative damage se protection kam ho jaata hai',
      'Balance bigadna, chalte time lad-khadana (ataxia / spinocerebellar ataxia): Cerebellum ke nerves affect hote hain — coordination problems aate hain',
      'Deep tendon reflexes ka kam hona — ye aksar sabse pehla sign hota hai jo doctor notice karta hai (areflexia)',
      'Aankhon ki muscles mein kamzori — aankhon ka hilana mushkil hona (ophthalmoplegia)',
    ],
    energyMoodBrain: [
      'Haath-paon mein numbness ya tingling (pins & needles): Vitamin E nerve cells ki myelin sheath ke liye zaroori hai — kami mein ye coating damage hoti hai',
      'Dhundhla dikhna ya raat mein kam dikhna: Retina ko oxidative damage — vitamin E aankhon ki retinal cells ko protect karta hai',
      'Baat karne ya samajhne mein takleef — severe, chronic kami mein neurological decline',
      'Mood mein badlaav, irritability, thakan: Nervous system function pe asar',
    ],
    skinHairNails: [
      'Skin dry hona, jaldi damage hona: Skin cell membranes ka oxidative damage badhta hai',
      'Baal girna ya weak hona: Scalp cells ko oxidative protection ki kami',
      'Wounds der se bharna: Immune aur cellular repair process slow hoti hai',
    ],
    other: [
      'Baar baar infections hona: Immune cells ki function kam hoti hai — body kam fight karti hai bacteria/virus ke against',
      'Haemolytic anaemia (khaas kar premature babies mein): Red blood cells jaldi toot jaate hain — RBCs ki membrane protect nahi hoti',
      'Fatty liver (NAFLD) ke saath association: Studies suggest Vitamin E ka role liver inflammation kam karne mein',
    ],
  },

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',         normal: '5.5–17 mg/L',  deficient: '< 5.5 mg/L',   toxic: '> 40 mg/L (high dose suppl.)', unit: 'mg/L' },
    { _key: 'nr2', category: 'Adult Female',        normal: '5.5–17 mg/L',  deficient: '< 5.5 mg/L',   toxic: '> 40 mg/L', unit: 'mg/L' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)',  normal: '3.8–18.4 mg/L', deficient: '< 3.8 mg/L',  toxic: '—', unit: 'mg/L' },
    { _key: 'nr4', category: 'Pregnancy',           normal: '7–18 mg/L',    deficient: '< 7 mg/L',     toxic: 'Caution > 40 mg/L', unit: 'mg/L' },
    { _key: 'nr5', category: 'Elderly (60+)',        normal: '5.5–17 mg/L',  deficient: '< 5.5 mg/L',   toxic: '> 40 mg/L', unit: 'mg/L' },
  ],

  vegSources: [
    { _key: 'v1', food: 'Badam (Almonds)',                  quantity: '28g (~20-23 nuts)',   amount: '~7.3 mg (~49% RDA)' },
    { _key: 'v2', food: 'Surajmukhi ke Beej (Sunflower Seeds)', quantity: '28g (1 tbsp)',    amount: '~7.4 mg (~49% RDA)' },
    { _key: 'v3', food: 'Surajmukhi Tel (Sunflower Oil)',   quantity: '1 tbsp (14g)',         amount: '~5.6 mg (~37% RDA)' },
    { _key: 'v4', food: 'Hazelnut (Filbert)',               quantity: '28g (1 mutthi)',        amount: '~4.3 mg (~29% RDA)' },
    { _key: 'v5', food: 'Moongphali (Peanuts)',             quantity: '28g (1 mutthi)',        amount: '~2.4 mg (~16% RDA)' },
    { _key: 'v6', food: 'Sarson ka Tel (Mustard Oil)',      quantity: '1 tbsp (14g)',          amount: '~2.4 mg (~16% RDA)' },
    { _key: 'v7', food: 'Avocado',                         quantity: '100g (half)',            amount: '~2.1 mg (~14% RDA)' },
    { _key: 'v8', food: 'Palak (Spinach)',                  quantity: '100g (1 katori pakki)',  amount: '~2.0 mg (~13% RDA)' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Salmon (machhli)',   quantity: '100g', amount: '~3.6 mg' },
    { _key: 'nv2', food: 'Tuna (canned)',       quantity: '100g', amount: '~1.0 mg' },
    { _key: 'nv3', food: 'Prawns / Shrimp',    quantity: '100g', amount: '~1.3 mg' },
  ],

  sunlightNote: 'Rozana subah 20-23 badam khane se aur cooking mein sunflower oil use karne se din bhar ki Vitamin E requirement practically puri ho jaati hai. Poori tarah se normal Indian vegetarian diet (mustard oil + peanuts + palak) kafi hoti hai. India mein pure dietary deficiency rare hai — lekin jo log bohot low-fat diet follow karte hain ya digestive issues hain unhe risk hai.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–6 months',      male: '4',  female: '4',  pregnancy: null, breastfeeding: null, unit: 'mg/day (AI)' },
    { _key: 'd2', ageGroup: '7–12 months',     male: '5',  female: '5',  pregnancy: null, breastfeeding: null, unit: 'mg/day (AI)' },
    { _key: 'd3', ageGroup: '1–3 saal',        male: '6',  female: '6',  pregnancy: null, breastfeeding: null, unit: 'mg/day' },
    { _key: 'd4', ageGroup: '4–8 saal',        male: '7',  female: '7',  pregnancy: null, breastfeeding: null, unit: 'mg/day' },
    { _key: 'd5', ageGroup: '9–13 saal',       male: '11', female: '11', pregnancy: null, breastfeeding: null, unit: 'mg/day' },
    { _key: 'd6', ageGroup: 'Adults (14–50)',  male: '15', female: '15', pregnancy: '15', breastfeeding: '19', unit: 'mg/day (NIH 2024)' },
    { _key: 'd7', ageGroup: '51–70 saal',      male: '15', female: '15', pregnancy: null, breastfeeding: null, unit: 'mg/day' },
    { _key: 'd8', ageGroup: '70+ saal',        male: '15', female: '15', pregnancy: null, breastfeeding: null, unit: 'mg/day' },
  ],

  pregnancyInfo: {
    applicable: true,
    note: 'Pregnancy mein Vitamin E ki RDA same hai — 15 mg/day. Lekin fat-soluble hone ki wajah se excess amount baby ke liye safe nahi hoti. Breastfeeding mein slightly zyada: 19 mg/day. Premature babies mein Vitamin E ki kami zyada common hai — unme haemolytic anaemia ka risk hota hai. Animal studies mein reproductive failure dekhi gayi. Prescribed dose (doctor dwara recommended) mein safe hai. High dose (1000 IU ya zyada) UNSAFE hai.',
    whenDoctor: 'Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein — prenatal vitamins mein Vitamin E already included hoti hai, alag se lene ki zaroorat usually nahi hoti.',
  },

  childrenInfo: 'Bacchon mein Vitamin E kami ke signs: Haemolytic anaemia (premature babies mein sabse common aur serious sign — RBCs toot jaate hain), muscle tone kam hona (hypotonia — especially preterm infants mein), retinal problems (aankhon ki development affect), growth slow hona ya weight gain kam hona, frequent infections. Daily requirement: 0–6 months: 4 mg | 7–12 months: 5 mg | 1–3 saal: 6 mg | 4–8 saal: 7 mg | 9–13 saal: 11 mg. Healthy full-term babies ko supplement ki zaroorat nahi — breastmilk se adequate Vitamin E milta hai. Premature babies mein doctor decide karte hain. Bilkul bhi khud se supplement mat dena bacchon ko.',

  labTestInfo: {
    testName: 'Serum Vitamin E (Alpha-Tocopherol) Test',
    testSlug: 'vitamin-e-test',
    normalRange: '5.5–17 mg/L (ya 12.8–39.5 µmol/L). Deficiency cutoff: < 12 µmol/L (approx < 5.2 mg/L) — US Institute of Medicine',
    whenToTest: 'Fat malabsorption ki known condition (Crohn\'s, celiac, cystic fibrosis). Unexplained neuropathy, balance problems, ya muscle weakness. Premature babies mein routine check. Bariatric surgery ke baad.',
    repeatAfter: 'Supplement shuru karne ke 3 mahine baad test repeat karein.',
    priceRange: 'Dr. Lal PathLabs, Metropolis: approx ₹3,500–₹5,000 (city ke hisab se vary karta hai). Routine testing healthy adults mein generally recommended nahi hai.',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Natural Vitamin E — d-alpha-tocopherol',
      benefits: ['Zyada bioavailable — body better absorb karti hai', 'Natural food mein ye hi form hoti hai', 'Longer-lasting in tissues'],
      drawbacks: ['Zyada mehnga hota hai'],
      bestFor: 'Jab actual supplementation ki zaroorat ho — doctor-prescribed therapeutic use ke liye zyada prefer kiya jaata hai',
    },
    {
      _key: 'sf2',
      formName: 'Synthetic Vitamin E — dl-alpha-tocopherol (all-rac)',
      benefits: ['Sasta, widely available', 'Same dose ke hisab se equivalent results mild supplementation mein'],
      drawbacks: ['50% hi biologically active hai natural se compare mein', 'Body isko utna efficiently use nahi karti'],
      bestFor: 'General multivitamin mein common ingredient; short-term supplementation',
    },
    {
      _key: 'sf3',
      formName: 'Tocopheryl Acetate (acetate form)',
      benefits: ['Shelf-stable', 'Skincare products aur supplements mein commonly used', 'Stable in storage'],
      drawbacks: ['Body ko pehle isse convert karna padta hai active form mein', 'Conversion efficiency vary karti hai'],
      bestFor: 'Skincare products (face creams, hair oils); oral supplements mein bhi found hota hai',
    },
    {
      _key: 'sf4',
      formName: 'Mixed Tocopherols (alpha + gamma + delta combination)',
      benefits: ['Nature mein jaise food mein hota hai — multiple tocopherol forms', 'Broader antioxidant coverage'],
      drawbacks: ['Research limited hai', 'Zyada expensive', 'Gamma-tocopherol ki exact role unclear'],
      bestFor: 'Whole food approach prefer karne wale; doctor-prescribed cases mein specific use',
    },
  ],

  supplementTiming: {
    bestTime: 'Vitamin E fat-soluble hai — isliye khane ke saath lo jisme thoda fat ho. Subah ya raat — timing se zyada important ye hai ki fat ke saath lo.',
    withFood: 'Badam, seeds ya cooking oil se bana khana khate waqt supplement lo. Thoda ghee, nuts, ya tel wala khana kaafi hai.',
    note: 'Paani ya dudh ke saath le sakte hain — lekin agar khane mein fat nahi hai to absorption poor hogi. Vitamin C ke saath lena helpful ho sakta hai — Vitamin C Vitamin E ko regenerate karta hai (antioxidant cycle). Omega-3 ke saath synergy hoti hai.',
    avoid: 'Anticoagulant medicines (blood thinners) ke saath bina doctor ke mat lo. High dose Vitamin E + Iron supplement: 2 ghante ka gap rakhein. Bilkul khali pet mat lo — absorption poor hoti hai aur stomach upset ho sakta hai.',
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Warfarin (Coumadin)', reason: 'Vitamin E blood thinning badhata hai; warfarin ke saath lene se bleeding risk significantly badh jaata hai — American Heart Association ki clear warning hai' },
    { _key: 'di2', medicineName: 'Aspirin (high dose)', reason: 'Similar antiplatelet effect; dono saath high dose mein lene se bleeding risk badhti hai' },
    { _key: 'di3', medicineName: 'Chemotherapy drugs (Alkylating agents)', reason: 'High dose Vitamin E in vitro mein chemotherapy effectiveness affect kar sakta hai — cancer treatment ke dauraan bina oncologist ke mat lo' },
    { _key: 'di4', medicineName: 'Tamoxifen (breast cancer medicine)', reason: 'High dose Vitamin E tamoxifen ki activity potentially alter kar sakta hai (Podszun et al., 2014)' },
    { _key: 'di5', medicineName: 'Statins + Niacin combination', reason: 'Vitamin E with statins and niacin together niacin ki HDL badhane wali effectiveness ko reduce kar sakta hai (Mayo Clinic)' },
    { _key: 'di6', medicineName: 'Cyclosporine A (immunosuppressant)', reason: 'High dose Vitamin E iske metabolism ko affect kar sakta hai' },
  ],

  combinations: {
    beneficial: [
      { _key: 'b1', nutrient: 'Vitamin C', reason: 'Vitamin C Vitamin E ko reactivate karta hai (antioxidant recycling cycle) — dono ka combination body mein better protection deta hai; normal doses mein koi harmful interaction nahi' },
      { _key: 'b2', nutrient: 'Selenium', reason: 'Dono antioxidant system mein kaam karte hain — ek doosre ko support karte hain; selenium glutathione peroxidase ko activate karta hai' },
      { _key: 'b3', nutrient: 'Omega-3 fatty acids', reason: 'Omega-3 lipid oxidation se protect hota hai Vitamin E ki wajah se — dono saath lene se better cardiovascular aur cellular health' },
    ],
    avoid: [
      { _key: 'a1', nutrient: 'High-dose Iron (same time)', reason: 'Ek hi time pe high doses interference ho sakta hai; 2 ghante ka gap rakhein' },
      { _key: 'a2', nutrient: 'Blood thinners + high dose Vitamin E', reason: 'Bleeding risk significantly badhti hai — warfarin, aspirin ke saath bina doctor ke nahi' },
    ],
    timingGuide: 'Subah lo (khane ke saath): Vitamin E, Vitamin C, Selenium. Raat lo (ya alag time pe): Iron supplements (2 ghante ka gap Vitamin E se). Iron aur Vitamin E ke beech minimum 2 ghante ka gap zaroor rakho.',
  },

  toxicity: {
    upperLimit: 'NIH Institute of Medicine: 1,000 mg/day (= 1,500 IU natural, ya 1,100 IU synthetic form) — adults ke liye Tolerable Upper Intake Level. European Food Safety Authority (EFSA) ka UL aur bhi kam: 300 mg/day — bleeding risk ke basis pe.',
    sideEffects: [
      'Bleeding risk — sabse main concern: High dose mein blood clotting interfere karta hai; bruising, nose bleeds, wound se zyada bleeding',
      'Nausea, diarrhea, stomach cramps',
      'Headache, fatigue',
      'Dusre fat-soluble vitamins (A, D, K) ki absorption kam ho sakti hai — inke blood levels gir sakte hain',
      'Kidney function pe potential stress high prolonged doses mein',
    ],
    whenSerious: 'Agar aap warfarin ya aspirin le rahe hain aur zyada Vitamin E le rahe hain — bleeding serious ho sakti hai. Agar surgery hone wali hai to 2 hafte pehle Vitamin E supplement band karo (doctor se poochh ke). Doctor ki salah ke bina high dose supplement kabhi mat lo.',
  },

  timeline: {
    bloodLevelTime: 'Supplement shuru karne ke 4–8 hafte mein serum levels normally badhna shuru hote hain — fat-soluble hone ki wajah se storage time lagta hai.',
    symptomsTime: 'Mild fatigue/skin issues: 4–8 hafte. Neurological symptoms (neuropathy, balance): 3–6 mahine — nerve recovery slow process hai.',
    fullRecoveryTime: '3–6 mahine minimum — aur ye depend karta hai ki deficiency kitne time se thi aur cause kya hai. Serious neurological damage (long-standing kami) mein full recovery nahi bhi ho sakti — isliye early diagnosis important hai.',
    repeatTestTime: 'Supplement shuru karne ke 3 mahine baad test repeat karein',
    patientNote: 'Ek hafte mein fark nahi dikhega — patience zaroori hai. Vitamin E fat mein store hota hai — body ko dhire dhire stores badhane mein waqt lagta hai. Aur sirf symptoms pe mat ruko — agar kami serious lage to test karwao, doctor se milao.',
  },

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Jo log easily thak jaate hain, metabolically slow hote hain, digestion weak hoti hai, aur nutrient absorption poor hoti hai',
      howItHelps: 'Constitutional treatment mein gastrointestinal absorption improve karne mein use hota hai — jahan nutrients sahi se absorb nahi ho rahe wahan ye consider kiya jaata hai',
    },
    {
      _key: 'h2',
      medicineName: 'Lycopodium Clavatum',
      patientType: 'Jinka liver aur digestion weak ho, flatulence ho, fatty foods se digestion bigde, aur liver function sluggish ho',
      howItHelps: 'Liver aur gastrointestinal function support karta hai — fat-soluble vitamins ke absorption ke liye liver function ka healthy hona zaroori hai',
    },
    {
      _key: 'h3',
      medicineName: 'Nux Vomica',
      patientType: 'Jinka nervous system stressed ho, sedentary lifestyle ho, poor diet ya irregular khaana pina ho',
      howItHelps: 'Digestive system aur nervous system ki sensitivity ko address karta hai — Vitamin E deficiency se related neurological symptoms mein constitutional support ke liye consider kiya jaata hai',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Vitamin E sirf skin ke liye hota hai — isko khana zaroori nahi, sirf bahar lagao',
      truth: 'Vitamin E body ke andar antioxidant protection ke liye critical hai — nerves, muscles, immunity sab ke liye. Topical (skin pe lagana) alag benefit hai, lekin dietary Vitamin E ki jagah nahi le sakta.',
    },
    {
      _key: 'm2',
      myth: 'Vitamin E supplement lene se skin gori ya chamakdar ho jaayegi',
      truth: 'Vitamin E skin cells ko oxidative damage se bachata hai — ye skin ki long-term health ke liye helpful hai. Lekin "skin whitening" ya instant glow ke claims scientifically proven nahi hain. Realistic expectation rakhna chahiye.',
    },
    {
      _key: 'm3',
      myth: 'Vitamin E ki kami bahut common hai India mein — sab ko supplement lena chahiye',
      truth: 'NIH aur WHO data ke mutabik, dietary Vitamin E deficiency healthy adults mein rare hai. Kami generally fat malabsorption disease wale patients mein hoti hai. Normal Indian diet (mustard oil, peanuts, greens) mein adequate Vitamin E hota hai. Bina reason ke supplement lene ki zaroorat nahi.',
    },
    {
      _key: 'm4',
      myth: 'Zyada Vitamin E lo — antioxidant hai to nuksaan kya hoga?',
      truth: 'High dose Vitamin E (1000 mg/day se zyada) bleeding risk badhaata hai aur dusre fat-soluble vitamins ki absorption affect karta hai. "Natural hai" matlab "unlimited safe hai" ye sahi nahi hai. Dose matter karti hai.',
    },
    {
      _key: 'm5',
      myth: 'Vitamin E se baal tezi se badhenge — Evion 400 roz khao',
      truth: 'Agar Vitamin E deficiency hai tab usse correct karne se hair health improve ho sakti hai. Lekin agar aapko deficiency hi nahi hai to extra supplement lene se extra hair growth nahi hoga. "Evion 400" ek prescription supplement hai — doctor ke bina regular khaana sahi nahi.',
    },
  ],

  faqs: [
    { _key: 'f1',  question: 'Vitamin E ki kami ke kya lakshan hain?', answer: 'Vitamin E ki kami ke main lakshan hain — haath-paon mein numbness ya tingling, balance mein problem (chalte waqt lad-khadana), muscle weakness, aur baar baar infections hona. Aankhon mein kamzori aur skin dry hona bhi signs ho sakte hain. Important baat: ye kami generally healthy adults mein rare hoti hai — zyada tar fat digestion ki koi problem wale logon mein hoti hai (Crohn\'s, celiac disease). Agar ye symptoms hain to doctor se milna zaroori hai — test se confirm karo.' },
    { _key: 'f2',  question: 'Vitamin E kisme paya jaata hai — vegetarian Indian foods?', answer: 'Vegetarian Indian foods mein Vitamin E ke sabse ache sources hain: Badam (almonds) — 20-23 nuts roz khao to RDA ka ~50% milta hai; Surajmukhi ke Beej (sunflower seeds) — sprinkle karo salad ya roti par; Moongphali (peanuts) — roasted khao ya chutney banao; Palak (spinach) — sauteed ya sabji; Sarson ka Tel ya Surajmukhi Tel — khana pakane mein use karo. Normal Indian ghar ka khana kaafi hota hai — supplement ki zaroorat generally nahi hoti.' },
    { _key: 'f3',  question: 'Vitamin E tablet kab khani chahiye — subah ya raat?', answer: 'Vitamin E fat-soluble hai — isliye timing se zyada important ye hai ki KHANE KE SAATH lo jisme thoda fat ho (ghee wala khana, nuts, ya oil se bani sabji). Subah breakfast ke saath ya dinner ke saath — dono theek hai. Bilkul khali pet mat lo — absorption poor hoti hai aur stomach upset ho sakta hai.' },
    { _key: 'f4',  question: 'Vitamin E ka normal range kitna hota hai blood mein?', answer: 'Adults ke liye normal serum Vitamin E (alpha-tocopherol) range hai: 5.5–17 mg/L. Agar 5.5 mg/L se kam hai to kami mangi jaati hai — deficiency confirm karne ke liye doctor serum test karwata hai. Ye test routine check-up mein nahi aata — doctor specific conditions mein order karte hain.' },
    { _key: 'f5',  question: 'Vitamin E pregnancy mein safe hai?', answer: 'Haan, normal food sources se aur doctor-prescribed dose (generally prenatal vitamins mein included hoti hai) se bilkul safe hai. Pregnancy mein RDA 15 mg/day hai — jo prenatal vitamin mein usually puri hoti hai. High dose (400 IU ya zyada per day) bina doctor ke NAHI leni chahiye. Agar alag se supplement lena chahte hain to pehle doctor se zaroor poochein.' },
    { _key: 'f6',  question: 'Vitamin E aur Vitamin C saath le sakte hain?', answer: 'Haan, saath le sakte hain — actually beneficial hai. Vitamin C Vitamin E ko reactivate karta hai (antioxidant recycling) — dono ka combination body mein better protection deta hai. Koi known harmful interaction nahi hai normal doses mein.' },
    { _key: 'f7',  question: 'Vitamin E aur Iron saath le sakte hain?', answer: 'Normal dietary doses mein koi major problem nahi — lekin agar supplement le rahe hain to 2 ghante ka gap rakhna better hai. High dose Vitamin E iron absorption pe kuch interference kar sakta hai. Agar doctor ne dono prescribe kiye hain to unse timing ke baare mein poochh lein.' },
    { _key: 'f8',  question: 'Vitamin E ki kami ka test kaise hota hai?', answer: 'Blood test hota hai — "Serum Vitamin E" ya "Serum Alpha-Tocopherol" test. Fasting ki zaroorat hoti hai — overnight fasting mandatory hai kuch labs mein. Sample: 3 mL blood. Price: approximately ₹3,500–₹5,000 depending on city. Normal range: 5.5–17 mg/L.' },
    { _key: 'f9',  question: 'Vitamin E zyada lene se kya hota hai (side effects)?', answer: 'Zyada Vitamin E (1,000 mg/day se upar — yaani 1,500+ IU) lene se bleeding risk badhti hai — bruising, nose bleeds, surgery ke waqt zyada bleeding. Nausea, diarrhea, stomach upset bhi ho sakta hai. Fat-soluble vitamins A, D, K ka balance bhi affect ho sakta hai. Doctor ki salah ke bina high dose supplement kabhi mat lo.' },
    { _key: 'f10', question: 'Evion 400 kab aur kyun lena chahiye?', answer: 'Evion 400 (Vitamin E 400 IU supplement) doctor tab prescribe karte hain jab kisi specific condition mein Vitamin E ki zaroorat ho — jaise fat malabsorption, specific skin conditions, ya doctor ne test ke baad kami confirm ki ho. Bina doctor prescription ke rozana Evion 400 lena recommended nahi hai — normal healthy adults ko itna nahi chahiye. Agar aap lena chahte hain to pehle doctor se milein.' },
    { _key: 'f11', question: 'Vitamin E se baal girna band hota hai?', answer: 'Agar baal girne ki wajah Vitamin E deficiency hai to supplement se fark padega — lekin hair fall ki aksar alag wajah hoti hain (iron deficiency, thyroid, stress, DHT). Vitamin E ke antioxidant properties scalp cells ko protect karte hain — kuch limited studies mein hair thickness improve hui. Lekin ye "guaranteed hair growth solution" nahi hai. Pehle doctor se cause pata karo.' },
    { _key: 'f12', question: 'Vitamin E skin ke liye kaise use karein?', answer: 'Vitamin E skin ke liye 2 tarike se helpful hai — pehla, khana: Antioxidant protection andar se skin cells ki aging slow karta hai. Doosra, topically: Vitamin E oil ya creams skin ko moisturize karte hain, scar healing mein help karte hain, aur UV damage se kuch protection dete hain. Lekin kuch logon ko pure Vitamin E oil se skin reaction (breakouts) ho sakti hai — patch test pehle karo.' },
    { _key: 'f13', question: 'Vitamin E deficiency se fatty liver hota hai?', answer: 'Seedha "fatty liver Vitamin E ki kami se hota hai" ye sahi nahi hai. Lekin research mein dikha hai ki Vitamin E supplementation Non-Alcoholic Fatty Liver Disease (NAFLD) mein liver inflammation (ALT levels) kam karne mein help karta hai. NAFLD treatment mein Vitamin E ek studied intervention hai — lekin ye sirf doctor ki guidance mein hona chahiye.' },
    { _key: 'f14', question: 'Vitamin E aur warfarin (blood thinner) saath mein le sakte hain?', answer: 'NAHI — bina doctor ke mat lo. High dose Vitamin E warfarin ke blood-thinning effect ko badha deta hai — jisse serious bleeding ka risk hota hai. Ye American Heart Association ki clear warning hai. Agar warfarin le rahe hain to koi bhi supplement lene se pehle doctor ko zaroor batao.' },
    { _key: 'f15', question: 'Vitamin E ki kami se infertility hoti hai?', answer: 'Animal studies mein Vitamin E deficiency se reproductive failure dekhi gayi hai — isliye ye belief aaya. Humans mein direct evidence limited hai. Lekin Vitamin E oxidative stress reduce karta hai jo sperm quality aur egg health pe impact kar sakta hai. Fertility issues ke liye sirf Vitamin E pe depend mat karo — complete evaluation doctor se karo.' },
    { _key: 'f16', question: 'Vitamin E aur Vitamin D saath le sakte hain?', answer: 'Haan, le sakte hain — koi known harmful interaction nahi hai. Dono fat-soluble hain — khane ke saath lo. Lekin agar dono supplement form mein le rahe hain to dose balance maintain karo — dono ka excess harmful ho sakta hai. Doctor ya nutritionist se routine check-up mein discuss karo.' },
    { _key: 'f17', question: 'Vitamin E ka test price kitna hai India mein?', answer: 'Dr. Lal PathLabs aur Metropolis jaise NABL-certified labs mein Serum Vitamin E test ki approximate price hai: ₹3,500–₹5,000 (city ke hisab se vary karta hai). Indore mein Dr. Lal PathLabs pe ₹4,240 listed hai (current rate list).' },
    { _key: 'f18', question: 'Kya India mein Vitamin E ki kami common hai?', answer: 'Healthy adults mein dietary Vitamin E deficiency uncommon hai — India ke normal diet mein mustard oil, peanuts, spinach adequate Vitamin E dete hain. Jo log fat malabsorption ki condition se suffer karte hain (Crohn\'s, celiac) unhe kami ka risk hai. Very low fat diet ya processed food only khaane wale logon ko bhi risk ho sakta hai.' },
    { _key: 'f19', question: 'Vitamin E kis cheez se milta hai sabse zyada?', answer: 'Sabse zyada Vitamin E milta hai: Surajmukhi ka Tel (Sunflower Oil) — 1 tablespoon mein ~5.6 mg; Surajmukhi ke Beej (Sunflower Seeds) — 28g mein ~7.4 mg; aur Badam (Almonds) — 28g mein ~7.3 mg. Ye teeno practical Indian sources hain — roz use karo.' },
    { _key: 'f20', question: 'Vitamin E supplement lene ke kitne din mein fark dikhega?', answer: 'Blood levels 4–8 hafte mein badhna shuru hote hain. Skin aur energy mein fark 4–8 hafte mein feel ho sakta hai. Neurological symptoms (numbness, balance) mein 3–6 mahine lag sakte hain — nerves ki recovery slow hoti hai. Test 3 mahine baad repeat karein. Ek hafte mein dramatic change expect mat karo — patience rakhna zaroori hai.' },
  ],

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Peripheral Neuropathy',              diseaseSlug: 'peripheral-neuropathy',     isAvailable: false },
    { _key: 'ld2', diseaseName: 'Spinocerebellar Ataxia',             diseaseSlug: 'spinocerebellar-ataxia',    isAvailable: false },
    { _key: 'ld3', diseaseName: 'Haemolytic Anaemia',                 diseaseSlug: 'haemolytic-anaemia',        isAvailable: false },
    { _key: 'ld4', diseaseName: 'Fatty Liver Disease (NAFLD)',        diseaseSlug: 'fatty-liver-disease',       isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin C',  vitaminSlug: 'vitamin-c',  isAvailable: false },
    { _key: 'rv2', vitaminName: 'Vitamin D',  vitaminSlug: 'vitamin-d',  isAvailable: true  },
    { _key: 'rv3', vitaminName: 'Vitamin K',  vitaminSlug: 'vitamin-k',  isAvailable: false },
    { _key: 'rv4', vitaminName: 'Omega-3',    vitaminSlug: 'omega-3',    isAvailable: true  },
  ],
}

async function seed() {
  console.log('🌱 Seeding Vitamin E...')
  const result = await client.createOrReplace(vitaminE)
  console.log('✅ Vitamin E seeded:', result._id)
}

seed().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})
