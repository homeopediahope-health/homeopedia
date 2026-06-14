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

const biotin = {
  _id: 'vitamin-biotin',
  _type: 'vitamin',
  name: 'Biotin',
  hindiName: 'Balon Ka Vitamin',
  category: 'Vitamin',
  slug: { _type: 'slug', current: 'biotin' },
  metaTitle: 'Biotin Ki Kami: Lakshan, Foods & Homeopathic Ilaj | Homeopedia',
  metaDescription: 'Biotin ki kami ke lakshan, vegetarian food sources, normal range aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: 'Meri practice mein jo patients hair fall aur baar baar brittle nails lekar aate hain, unme se kaafi ke diet history mein ek pattern hota hai — ye raw eggs khaate hain ya months se antibiotic course pe reh chuke hain. Biotin kami directly nahi dikhti reports mein — symptoms se identify karna padta hai. Aur high-dose supplement lene se pehle mujhe batao — thyroid ya vitamin D test karvane ke plan mein hon to results affected ho sakte hain.',

  quickFacts: {
    indiaPrevalence: 'Healthy logon mein rare — lekin pregnant mahilaaon mein approx 50% subclinical kami hoti hai. Long-term antibiotic ya anticonvulsant users mein bhi risk zyada (NIH ODS 2024)',
    commonDeficiencySign: 'Baalon ka jhadna (Hair thinning) aur nails ka toota-kamzor hona — ye sabse pehle dikhne waale symptoms hain',
    mainFoodSource: 'Anda (cooked egg) — 1 anda mein ~10 mcg Biotin. Vegetarian mein: Surajmukhi ke beej (Sunflower seeds) — 30g mein ~2.6 mcg (NIH ODS 2024)',
    normalRangeQuick: '133–329 pmol/L (Serum Biotin)',
  },

  whatIsIt: 'Biotin ek water-soluble B vitamin hai jise Vitamin B7 ya Vitamin H bhi kehte hain. Ye body mein ek coenzyme ka kaam karta hai — yaani ye enzymes ke saath milkar kaam karta hai taaki carbohydrates, fats, aur proteins se energy ban sake. India mein log ise "Balon Ka Vitamin" bolte hain kyunki hair fall aur brittle nails ki shikayat mein iska naam sabse pehle aata hai. Lekin ye sirf baalon tak simit nahi — ye aapke nervous system, skin, aur metabolism ke liye bhi zaroori hai. Achhi baat ye hai ki balanced khana khane waalon mein aksar kami nahi hoti — body mein jo gut bacteria hain, wo bhi thoda biotin banate hain.',

  bodyFunctions: [
    'Energy metabolism — Carbohydrates, fats aur proteins ko tod kar glucose aur energy banane mein madad karta hai; bina biotin ke metabolism dhimi pad jaati hai',
    'Fatty acid synthesis — Naye fat molecules banane mein zaroori hai; jo skin aur cell membranes ke liye zaroori hain',
    'Amino acid metabolism — Leucine jaise amino acids ko process karta hai; protein banane ka building block hai',
    'Gluconeogenesis — Jab khana nahi hota tab body glucose banaati hai; is process mein biotin zaroori enzyme activate karta hai',
    'Hair aur nail growth — Keratin protein ki structure ko maintain karta hai; isliye kami mein baal toote aur naakhun kamzor hote hain',
    'Skin health — Skin cell turnover aur seborrheic dermatitis se bachao mein role hota hai',
    'Nerve function — Myelin sheath (nerve ko dhakne wali layer) ke liye zaroori hai; kami mein tingling aur numbness ho sakti hai',
    'Gene regulation — Histone proteins ko modify karke gene expression regulate karta hai; embryo development mein khaaskar zaroori',
  ],

  causesOfDeficiency: [
    'Kacche ande khana — Raw egg white mein "avidin" hota hai jo biotin ko bind karke absorb nahi hone deta; cooked egg mein ye problem nahi hoti kyunki heat se avidin denature ho jaata hai',
    'Long-term antibiotic use — Gut bacteria biotin thoda banate hain; antibiotics se ye bacteria kam ho jaate hain aur natural production ghatti hai',
    'Anticonvulsant medicines — Carbamazepine, Phenytoin, Phenobarbital, Primidone jaise seizure medicines biotin absorption ko block karti hain (NIH ODS 2024)',
    'Alcoholism — Alcohol biotin absorption ko interfere karti hai aur gut health kharaab karta hai',
    'Pregnancy — Rapidly dividing fetal cells biotin consume karti hain; approx 50% pregnant mahilaaon mein subclinical kami hoti hai (Mock et al., Am J Clin Nutr 2002)',
    'Biotinidase deficiency ya Holocarboxylase synthetase deficiency — Inherited conditions jisme body biotin recycle nahi kar paati',
    'Inflammatory bowel disease (IBD), Crohn\'s disease — Intestinal absorption properly nahi hoti',
    'Smoking — Biotin ka catabolism (breakdown) tezi se hota hai; smokers mein kami ka risk zyada',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [],
    energyMoodBrain: [
      'Thakan aur kamzori (Fatigue) — Energy production sahi se nahi hoti; dono akele bhi dikhte hain, ek saath bhi',
      'Depression ya mood swings — Biotin nervous system ko affect karta hai; kami mein mood unstable ho sakta hai',
      'Hallucinations — Severe kami mein kuch log aise cheezein dekhte ya sunne ki baat karte hain jo hain nahi',
      'Somnolence / Zyada neend aana — Energy metabolism slow hone se thakaan aur nindaasi rehti hai',
      'Hath-paon mein jalan ya sunn hona (Tingling/Numbness) — Nerve insulation (myelin) ke damage se hota hai',
      'Coordination mein takleef (Ataxia) — Severe cases mein chalne ya balance rakhne mein dikkat',
    ],
    skinHairNails: [
      'Baalon ka jhadna (Hair thinning / Alopecia) — Biotin keratin production ke liye zaroori hai; kami mein hair follicles kamzor hote hain aur baal patley aur jhadte hain',
      'Naakon ka toota aur kamzor hona (Brittle nails) — Nails mein cracks, splits aur breakage hone lagti hai',
      'Chehra aur aankhon ke aaspaas red scaly rash — Seborrheic dermatitis; naak, mooh aur aankhon ke corners pe dikh sakti hai',
      'Dry, flaky, scaly skin — Skin rough aur pareshaan dikhne lagti hai',
      'Conjunctivitis (aankhein laal hona) — Aankhon ki baahri layer mein inflammation',
    ],
    other: [
      'Infantile spasms (Seizures) — Khaaskar biotinidase deficiency mein bacchon mein dikhta hai',
      'Cradle cap jaisa rash — Nawazeede mein seborrheic dermatitis ka early sign',
      'Hearing loss — Inherited biotin deficiency (biotinidase deficiency) mein dekha gaya hai',
      'Post-pregnancy hair fall — Pregnancy ke baad 3-4 mahine mein jo baal jhadte hain, unme biotin ki subclinical kami ka bhi hissa hota hai',
    ],
  },

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',          normal: '133–329 pmol/L', deficient: '<133 pmol/L', toxic: 'No UL set (NIH)', unit: 'pmol/L' },
    { _key: 'nr2', category: 'Adult Female',         normal: '133–329 pmol/L', deficient: '<133 pmol/L', toxic: 'No UL set (NIH)', unit: 'pmol/L' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)',   normal: 'Lab ke hisaab se', deficient: 'Symptoms + low level', toxic: 'No UL set',  unit: 'pmol/L' },
    { _key: 'nr4', category: 'Pregnancy',            normal: 'Subclinical low common', deficient: '~50% pregnant mein low', toxic: '30 mcg/day AI', unit: 'pmol/L' },
    { _key: 'nr5', category: 'Elderly (60+)',        normal: '133–329 pmol/L', deficient: '<133 pmol/L', toxic: 'No UL set',       unit: 'pmol/L' },
    { _key: 'nr6', category: 'Urine (supporting)',   normal: '18–127 nmol/24hr', deficient: '<18 nmol/24hr', toxic: '—',            unit: 'nmol/24hr' },
  ],

  vegSources: [
    { _key: 'v1',  food: 'Surajmukhi ke beej (Sunflower seeds)', quantity: '1/4 cup (~30g)',    amount: '~2.6 mcg' },
    { _key: 'v2',  food: 'Badam (Almonds)',                       quantity: '1/4 cup (~30g)',    amount: '~1.5 mcg' },
    { _key: 'v3',  food: 'Shakarkand (Sweet Potato, cooked)',     quantity: '1/2 katori',        amount: '~2.4 mcg' },
    { _key: 'v4',  food: 'Palak (Spinach, boiled)',               quantity: '1/2 katori',        amount: '~0.5 mcg' },
    { _key: 'v5',  food: 'Broccoli (fresh)',                      quantity: '1/2 katori',        amount: '~0.4 mcg' },
    { _key: 'v6',  food: 'Oats (Oatmeal)',                        quantity: '1 katori',          amount: '~0.2 mcg' },
    { _key: 'v7',  food: 'Cheese (Cheddar)',                      quantity: '30g (1 slice)',      amount: '~0.4 mcg' },
    { _key: 'v8',  food: 'Doodh (Milk, 2%)',                      quantity: '1 glass (240ml)',   amount: '~0.3 mcg' },
    { _key: 'v9',  food: 'Dahi (Yogurt, plain)',                  quantity: '1 katori',          amount: '~0.2 mcg' },
    { _key: 'v10', food: 'Kela (Banana)',                         quantity: '1 medium',          amount: '~0.2 mcg' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Anda (Egg, whole, cooked)',   quantity: '1 anda',          amount: '~10.0 mcg' },
    { _key: 'nv2', food: 'Beef liver (cooked)',          quantity: '85g (3 oz)',      amount: '~30.8 mcg' },
    { _key: 'nv3', food: 'Salmon (canned in water)',     quantity: '85g (3 oz)',      amount: '~5.0 mcg' },
    { _key: 'nv4', food: 'Pork chop (cooked)',           quantity: '85g (3 oz)',      amount: '~3.8 mcg' },
    { _key: 'nv5', food: 'Tuna (canned in water)',       quantity: '85g (3 oz)',      amount: '~0.6 mcg' },
  ],

  sunlightNote: 'Biotin ke liye koi sunlight source nahi hai. Vegetarian hain to: 1 katori dahi + 1 mutthi badam + 1 medium shakarkand (baked/boiled) — din ka kaafi biotin cover hota hai. Egg khate hain to roz ek cooked anda lo (kaccha nahi!) — din ki zaroorat ka 33% akele isi se puri ho jaati hai. *IMPORTANT: Kaccha anda kabhi mat khao — raw egg white mein avidin hota hai jo biotin ko completely block karta hai.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–6 months',   male: '5',  female: '5',  pregnancy: null, breastfeeding: null, unit: 'mcg/day (AI)' },
    { _key: 'd2', ageGroup: '7–12 months',  male: '6',  female: '6',  pregnancy: null, breastfeeding: null, unit: 'mcg/day (AI)' },
    { _key: 'd3', ageGroup: '1–3 saal',     male: '8',  female: '8',  pregnancy: null, breastfeeding: null, unit: 'mcg/day (AI)' },
    { _key: 'd4', ageGroup: '4–8 saal',     male: '12', female: '12', pregnancy: null, breastfeeding: null, unit: 'mcg/day (AI)' },
    { _key: 'd5', ageGroup: '9–13 saal',    male: '20', female: '20', pregnancy: null, breastfeeding: null, unit: 'mcg/day (AI)' },
    { _key: 'd6', ageGroup: '14–18 saal',   male: '25', female: '25', pregnancy: '30', breastfeeding: '35', unit: 'mcg/day (AI)' },
    { _key: 'd7', ageGroup: 'Adults (19–50)',male: '30', female: '30', pregnancy: '30', breastfeeding: '35', unit: 'mcg/day (AI)' },
    { _key: 'd8', ageGroup: '51–70 saal',   male: '30', female: '30', pregnancy: '30', breastfeeding: '35', unit: 'mcg/day (AI)' },
    { _key: 'd9', ageGroup: '70+ saal',     male: '30', female: '30', pregnancy: null, breastfeeding: null, unit: 'mcg/day (AI)' },
  ],

  pregnancyInfo: {
    applicable: true,
    note: 'Pregnancy mein AI 30 mcg/day hai — same as non-pregnant adult. Studies mein approx 50% pregnant mahilaaon mein subclinical biotin low levels dekhe gaye hain (Mock et al., Am J Clin Nutr 2002). Animal studies mein biotin deficiency se fetal malformations aur growth retardation dekha gaya hai. Prenatal multivitamins mein aksar biotin included hoti hai. Biotin water-soluble hai aur pregnancy mein safe mani jaati hai — lekin koi bhi supplement lene se pehle apna doctor zaroor consult karein.',
    whenDoctor: 'Agar aap anticonvulsant ya koi aur regular dawa le rahi hain to doctor consultation extra zaroori hai.',
  },

  childrenInfo: 'Bacchon mein kami ke early signs: Cradle cap jaisa rash (seborrheic dermatitis) nawazeede mein, baalon ka tootna ya patla hona. Biotinidase deficiency (rare genetic condition) mein: seizures, hearing loss, vision problems — newborn screening se pakdi jaati hai. Daily requirement (AI): 0–6 months: 5 mcg | 7–12 months: 6 mcg | 1–3 saal: 8 mcg | 4–8 saal: 12 mcg | 9–13 saal: 20 mcg. Healthy bacchon ko supplement ki zaroorat nahi — diet se ho jaata hai. Genetic condition mein doctor high-dose biotin prescribe karta hai.',

  labTestInfo: {
    testName: 'Serum Biotin (Vitamin B7) — Quantitative',
    testSlug: 'biotin-test',
    normalRange: '133–329 pmol/L (serum) | Urine: 18–127 nmol/24hr',
    whenToTest: 'Hair fall + brittle nails + fatigue ka combination hone pe. Long-term anticonvulsants ya antibiotics use pe. Pregnancy mein suspected kami pe. Routine testing mein usually required nahi.',
    repeatAfter: 'Supplement shuru karne ke 3 mahine baad retest karo.',
    priceRange: 'Approx ₹2,500–₹4,000 (Metropolis Mumbai: ₹3,815)',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Free Biotin (Plain tablet/capsule)',
      benefits: ['Standard form — widely available, well-absorbed, affordable', 'General hair/nail support ke liye best'],
      drawbacks: ['High doses (5,000–10,000 mcg) lab tests (thyroid TSH, troponin, Vitamin D) ko interfere kar sakte hain'],
      bestFor: 'General use — mild deficiency, hair/nail support',
    },
    {
      _key: 'sf2',
      formName: 'Biotin + Zinc combination',
      benefits: ['Zinc + Biotin dono milke hair follicle health support karte hain — especially hair fall mein zyada effective'],
      drawbacks: ['Zinc alag se consider karna padta hai — zyada zinc bhi harmful hai'],
      bestFor: 'Hair fall + weak nails combination complaint',
    },
    {
      _key: 'sf3',
      formName: 'Biotin + Collagen combination',
      benefits: ['Collagen skin aur nails ke liye, Biotin hair ke liye — combo se overall result better feel hota hai', 'Skin + hair + nails teeno cover hote hain'],
      drawbacks: ['Zyada expensive. Collagen bioavailability pe debate hai'],
      bestFor: 'Skin + hair + nails — "glow" focus waalon ke liye',
    },
    {
      _key: 'sf4',
      formName: 'Biotin Gummies',
      benefits: ['Easy to take, sweet taste — adherence better hoti hai', 'Jo tablet nahi kha paate unke liye'],
      drawbacks: ['Sugar content. Kuch brands mein unreliable dosing. Kids ke liye accidentally over-consume risk'],
      bestFor: 'Jo tablet ya capsule nahi kha paate',
    },
  ],

  supplementTiming: {
    bestTime: 'Subah khane ke saath ya baad — ek glass saada paani ke saath. Water-soluble hai to timing flexible hai lekin subah ki routine best hai.',
    withFood: 'Khane ke saath ya baad — dono chalte hain. Khali pet bhi technically okay hai, lekin nausea se bachne ke liye khane ke saath lo.',
    note: 'Chai ya coffee ke saath mat lo. Roz ek hi time pe lena adherence ke liye best hai. Probiotic-rich foods (dahi, chaach) saath diet mein rakhein — gut bacteria theek rehein to natural biotin production bhi hoti hai.',
    avoid: 'Kaccha anda bilkul nahi — avidin biotin absorption rok deta hai. Alpha-lipoic acid supplement ke saath doctor se poochho — same transporter use karte hain. Anticonvulsant medicines ke saath timing doctor se confirm karein.',
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Anticonvulsants (Carbamazepine, Phenytoin, Phenobarbital, Primidone)', reason: 'Ye sabhi biotin absorption ko intestine mein block karte hain aur biotin catabolism tezi se karte hain. Long-term users mein biotin level significant gir jaata hai. (Source: NIH ODS 2024 + Said HM et al. 1989)' },
    { _key: 'di2', medicineName: 'Long-term Antibiotics',        reason: 'Gut bacteria thoda biotin banate hain; antibiotics se ye bacteria destroy hote hain, natural production kam ho jaati hai' },
    { _key: 'di3', medicineName: 'Alpha-Lipoic Acid supplement', reason: 'Biotin ke saath same intestinal transporter ke liye compete karta hai — dono saath lene se dono ka absorption reduce ho sakta hai' },
    { _key: 'di4', medicineName: '⚠️ LAB TEST WARNING — Thyroid (TSH/T3/T4), Troponin, Vitamin D test', reason: 'High-dose biotin (5,000 mcg ya zyada) in tests mein FALSE results de sakta hai. Test se pehle 2-3 din biotin band karo aur doctor ko zaroor batao. (FDA Advisory + NIH ODS 2024)' },
  ],

  combinations: {
    beneficial: [
      'Biotin + Zinc — Zinc hair follicle ke structure ke liye zaroori hai, biotin keratin banata hai — dono milke hair fall mein zyada effective combination',
      'Biotin + Vitamin C — Vitamin C collagen synthesis ke liye zaroori hai; combo mein skin + hair dono ka fayda milta hai',
      'Biotin + B-complex (B12, B6, Folate) — Sab B vitamins ek saath better work karte hain metabolism mein; hair fall ke saath fatigue bhi ho to ye combination useful',
    ],
    avoid: [
      'Biotin + Raw egg / Avidin — Avidin biotin ko trap kar leta hai, absorption practically zero ho jaati hai',
      'High-dose Biotin + Lab tests on same day — Test se 2-3 din pehle band karo',
    ],
    timingGuide: 'Subah lo: Biotin (B-complex bhi hain to subah khane ke baad). Anticonvulsant medicines ke saath timing doctor se poochho — generally 2-4 ghante ka gap safer hota hai.',
  },

  toxicity: {
    upperLimit: 'NIH ke mutabik Biotin ke liye koi Tolerable Upper Limit (UL) set NAHI — upto 200 mg/day tak bhi toxic effects nahi dikhte',
    sideEffects: [
      'High-dose (5,000–10,000 mcg/day) se Thyroid test (TSH), Troponin, Vitamin D test mein FALSE results — ye sabse serious consequence hai',
      'Mild nausea — kuch logo mein high dose khali pet lene se',
      'Acne worsen hona — kuch reports hain, strong evidence abhi limited (possible B5 competition theory)',
    ],
    whenSerious: 'Directly toxic nahi — lekin agar thyroid ya heart test karvane ke plan mein hain aur high-dose biotin le rahe hain aur doctor ko nahi bataya, to galat test results se galat treatment mil sakta hai. YE serious clinical consequence hai.',
  },

  timeline: {
    bloodLevelTime: '2–4 hafte',
    symptomsTime: 'Energy: 2–4 hafte | Baalon ka jhadna: 2–3 mahine | Nails: 3–4 mahine | Skin rash: 4–6 hafte',
    fullRecoveryTime: '3–6 mahine consistent supplementation + diet',
    repeatTestTime: '3 mahine baad serum biotin retest (agar doctor ne suggested ho)',
    patientNote: 'Ek hafte ya ek mahine mein baal band nahi honge — ye realistic expectation rakhna zaroori hai. Hair growth cycle hi 3–6 mahine ka hota hai. Patience rakhein, supplement consistently lein, aur 3 mahine baad doctor ko dikhayein.',
  },

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Jo patients thoda khaate hain par phir bhi mote lagte hain; bahut zyada pasina, thanda rehna, hair fall aur nails weak hain',
      howItHelps: 'Calcium aur nutrient metabolism ko support karta hai; nutritional deficiencies mein constitutional remedy ki tarah kaam karta hai',
    },
    {
      _key: 'h2',
      medicineName: 'Silicea (Silica)',
      patientType: 'Bahut kamzor nails jo badh nahi rahi, baal ruke hue hai, skin rough hai, easily thak jaate hain',
      howItHelps: 'Connective tissue aur keratin structure ko support karta hai — hair, nails, skin ki growth improve karne mein madadgar hai',
    },
    {
      _key: 'h3',
      medicineName: 'Natrum Muriaticum',
      patientType: 'Stress ya grief ke baad hair fall, dry skin, emotional triggers wale patients',
      howItHelps: 'Stress-induced nutritional depletion ke root cause pe kaam karta hai — hair fall jo emotional triggers se badh jaata ho unke liye',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Biotin supplement se guaranteed baal aayenge',
      truth: 'Agar baalon mein biotin ki kami hai to supplement se farak pad sakta hai. Lekin agar kami nahi hai — jo zyada logon mein hoti hi nahi — to high-dose biotin se koi special hair growth nahi milti. Research suggests deficiency correct karne se hi benefit milta hai. (NIH ODS 2024)',
    },
    {
      _key: 'm2',
      myth: '10,000 mcg biotin zyada loge to baal tezi se badenge',
      truth: '10,000 mcg = 10 mg — ye din ki zaroorat (30 mcg) se 333x zyada hai. Ye dose lab tests ko seriously interfere kar sakta hai. Body ki zaroori se zyada biotin urine mein nikal jaati hai — "zyada matlab zyada fayda" nahi hota vitamins ke saath.',
    },
    {
      _key: 'm3',
      myth: 'Sirf baalon ke liye hai biotin',
      truth: 'Biotin energy metabolism, nervous system, skin aur pregnancy mein embryo development ke liye bhi utna hi zaroori hai. Hair wala angle zyada popular hai sirf marketing ki wajah se — asli kaam energy production mein hai.',
    },
    {
      _key: 'm4',
      myth: 'Kaccha anda khaane se biotin milta hai',
      truth: 'Seedha ulta! Raw egg white mein avidin hota hai jo biotin ko block karta hai. Cooked egg mein avidin denature ho jaata hai aur biotin absorb hoti hai. Kaccha anda actually biotin kami ka kaaran ban sakta hai.',
    },
    {
      _key: 'm5',
      myth: 'Biotin safe hai — kitna bhi lo',
      truth: 'Directly toxic nahi — lekin high-dose biotin thyroid test (TSH), troponin (heart marker), Vitamin D test sab mein false results de sakta hai. FDA ne is baare mein advisory jaari ki hai. Doctor ko bataye bina test karana dangerous ho sakta hai.',
    },
  ],

  faqs: [
    { _key: 'f1',  question: 'Biotin ki kami ke lakshan kya hain?', answer: 'Biotin ki kami ke sabse common lakshan hain — baalon ka jhadna (hair thinning/alopecia), nails ka kamzor aur toota hona, chehra aur aankhon ke aaspaas red scaly rash (seborrheic dermatitis), aur zyada thakan ya kamzori. Severe cases mein hath-paon mein jalan (tingling/numbness) aur mood changes bhi ho sakte hain. Agar ye symptoms combo mein hain to doctor se milna zaroori hai.' },
    { _key: 'f2',  question: 'Biotin kisme paya jata hai vegetarian ke liye?', answer: 'Vegetarian sources mein sabse acche options hain — Badam (almonds), Surajmukhi ke beej (sunflower seeds), Shakarkand (sweet potato), Dahi (yogurt), Doodh, Palak, Broccoli, aur Oats. Anda khate hain to ek cooked anda sabse concentrated source hai (~10 mcg per egg). Vegetarian diet mein din bhar seeds, nuts, aur dairy lete raho — combined intake sufficient ho sakti hai. (Source: NIH ODS 2024)' },
    { _key: 'f3',  question: 'Biotin ki kami kyun hoti hai?', answer: 'Sabse common kaaran hain — kaccha anda khaana (raw egg white mein avidin biotin ko block karta hai), long-term antibiotic ya anticonvulsant medicines, alcoholism, aur pregnancy (jisme fetal cells biotin consume karti hain). India-specific: jo log zyada processed food khaate hain aur fresh seeds/nuts nahi khaate unme bhi gap aa sakta hai. Inherited conditions (biotinidase deficiency) rare hain lekin serious hain.' },
    { _key: 'f4',  question: 'Biotin ki normal range kitni honi chahiye?', answer: 'Serum mein biotin ki normal range 133–329 pmol/L hoti hai. Urine mein 18–127 nmol/24 hours. Lekin akela serum test reliable nahi — doctors urine 3-hydroxyisovaleric acid bhi dekhte hain jo kami ka better indicator hai. Agar hair fall + fatigue + brittle nails ka combination hai to doctor se full assessment karwayen. Test price India mein approx ₹2,500–₹4,000 hai (Metropolis data).' },
    { _key: 'f5',  question: 'Biotin tablet kab aur kaise khayein?', answer: 'Subah khane ke saath ya baad ek glass paani ke saath lo — khali pet bhi chalti hai lekin khane ke saath stomach upset nahi hota. Chai/coffee ke saath mat lo. Kaccha anda khane ke saath bilkul nahi. Roz ek hi time pe lo — routine se adherence better hoti hai.' },
    { _key: 'f6',  question: 'Biotin pregnancy mein safe hai?', answer: 'Haan, biotin water-soluble hai aur pregnancy mein safe mani jaati hai. AI (adequate intake) 30 mcg/day hai pregnancy mein. Studies mein approx 50% pregnant mahilaaon mein subclinical biotin low levels dekhe gaye hain. Prenatal multivitamins mein aksar biotin included hoti hai. Lekin koi bhi supplement lene se pehle apna doctor zaroor consult karein — khaaskar agar aap aur koi dawa le rahi hain.' },
    { _key: 'f7',  question: 'Biotin se hair growth hoga kya?', answer: 'Agar baalon ki problem biotin ki kami se hai to supplement se farak padta hai — lekin 3–6 mahine lagenge, 1–2 hafte mein result expect mat karo. Hair growth cycle hi itna lamba hota hai. Agar kami nahi hai — jo majority healthy logo mein hoti hi nahi — to sirf high-dose biotin se extra hair growth nahi milti. Sahi nutrition, scalp health aur protein intake bhi utna hi zaroori hai.' },
    { _key: 'f8',  question: 'Biotin ke side effects kya hain?', answer: 'Direct side effects practically nahi hote — even upto 200 mg/day ke doses pe toxic effects report nahi hue. Lekin HIGH DOSE (5,000–10,000 mcg daily) lene se thyroid test (TSH), troponin, aur Vitamin D test pe false results aa sakte hain — ye serious clinical consequence hai. Kuch logo mein mild nausea ya acne ki complaint hoti hai. Doctor ko batao agar aap lab test karwane waale hain.' },
    { _key: 'f9',  question: 'Biotin aur iron saath mein le sakte hain?', answer: 'Haan — biotin aur iron ke beech koi known significant drug interaction nahi hai. Dono saath le sakte hain. Iron ke liye yaad raho — nimbu paani (Vitamin C) ke saath iron better absorb hota hai. Chai/coffee ke saath iron mat lo — wo iron ko block karta hai. Agar iron supplement prescribed hai to specific timing doctor se poochho.' },
    { _key: 'f10', question: 'Biotin aur calcium saath mein le sakte hain?', answer: 'Haan, biotin aur calcium ka koi known interaction nahi hai — dono saath le sakte hain. Calcium ke liye: raat ko ya khane ke saath better absorb hota hai. Vitamin D saath mein hoga to absorption aur bhi better. Biotin ka calcium absorption pe koi direct effect nahi hota.' },
    { _key: 'f11', question: 'Kya biotin se weight gain hota hai?', answer: 'Nahi — biotin directly weight gain nahi karti. Ye metabolism mein madad karta hai jo energy burning ke liye hota hai, weight badhane ke liye nahi. Koi clinical evidence nahi hai ki biotin se weight badh jaaye. Agar weight gain ho raha hai to koi aur kaaran dekha jaana chahiye.' },
    { _key: 'f12', question: 'Biotin hypothyroidism mein le sakte hain?', answer: 'Biotin lena technically okay hai — lekin EK BAHUT IMPORTANT BAAT: high-dose biotin thyroid test (TSH) ke results ko interfere karta hai aur FALSE LOW TSH de sakta hai, jisse doctor soch sakta hai ki thyroid overactive hai jabki aisa nahi hai. Agar aap thyroid patient hain aur biotin le rahe hain to test se kam se kam 2–3 din pehle biotin band karo aur doctor ko zaroor batao.' },
    { _key: 'f13', question: 'Biotin ki kami ka test kaise hota hai?', answer: 'Test ka naam hai "Serum Biotin (Vitamin B7) — Quantitative." Blood se hota hai — nase se blood nikaala jaata hai. Supporting test mein urine 3-hydroxyisovaleric acid bhi dekha jaata hai. Test price approx ₹2,500–₹4,000 (Metropolis India data). Routine test nahi hai — symptoms hone pe doctor suggest karta hai.' },
    { _key: 'f14', question: 'Biotin ki kami se kaun si bimari hoti hai?', answer: 'Sabse common: hair fall (alopecia), seborrheic dermatitis (scaly rash), brittle nails. Severe ya inherited kami mein: Multiple Carboxylase Deficiency — ek rare condition jisme biotin-dependent enzymes kaam nahi karte; infancy mein seizures, skin rash, hair loss se dikhti hai. Ye sabse serious disease form hai aur genetic hoti hai.' },
    { _key: 'f15', question: 'Biotin se acne hota hai kya?', answer: 'Kuch log acne worsen hone ki baat karte hain high-dose biotin pe — lekin strong clinical evidence abhi limited hai. Theory ye hai ki high-dose biotin Vitamin B5 (pantothenic acid) ke absorption se compete kar sakta hai, jo sebum control mein kaam karta hai. Agar biotin start karne ke baad acne badhe to dose reduce karo aur doctor se discuss karo.' },
    { _key: 'f16', question: 'Biotin ki kami kitne din mein theek hoti hai?', answer: 'Supplement + diet se blood levels 2–4 hafte mein improve hone lagte hain. Baalon mein fark 2–3 mahine mein dikhna shuru hota hai. Nails 3–4 mahine mein strong dikhne lagte hain. Skin conditions 4–6 hafte mein better hoti hain. Full recovery 3–6 mahine le sakti hai. 3 mahine baad test repeat karwana sensible hai. Patience rakho — hair growth cycle ki apni time hoti hai.' },
    { _key: 'f17', question: 'Kya biotin Levothyroxine (thyroid dawa) ke saath le sakte hain?', answer: 'Biotin seedha levothyroxine ko affect nahi karta — lekin CRITICAL WARNING: high-dose biotin thyroid test (TSH) results ko interfere karta hai. Agar thyroid medicine pe hain aur biotin bhi le rahe hain to thyroid test se 2–3 din pehle biotin band karo aur doctor ko clearly batao. Test result galat aaya to galat dose adjustment ho sakta hai — ye serious hai.' },
    { _key: 'f18', question: 'Best time to take biotin tablet?', answer: 'Subah khane ke saath — ek glass saada paani ke saath. Water-soluble hai to timing flexible hai, lekin subah ki routine best hai. Khali pet bhi chal sakti hai — kuch logo mein nausea ho sakti hai to khane ke baad better. Chai ya coffee ke saath mat lo. Roz ek hi time pe lena adherence ke liye best hai.' },
    { _key: 'f19', question: 'Kya biotin se bones strong hoti hain?', answer: 'Biotin directly bone density increase karne ke liye nahi hota — ye mainly hair, nails, skin aur energy metabolism ke liye jaana jaata hai. Bones ke liye Calcium + Vitamin D + Vitamin K2 zyada important hain. Kuch research mein biotin ke bone health pe indirect role ki baat hai — lekin ye primary indication nahi hai. Bones ke concern ke liye Vitamin D aur Calcium test karwana zyada relevant rahega.' },
    { _key: 'f20', question: 'Biotin tablet price kya hai India mein?', answer: 'India mein over-the-counter biotin tablets ₹150–₹600 mein available hain 30–60 days ki supply ke liye. Dose ke hisaab se vary karta hai — 1,000 mcg se 10,000 mcg tak brands hain. Combination tablets (Biotin+Zinc, Biotin+Collagen) thodi mahengee hoti hain (₹400–₹1,200). Gummies slightly expensive hoti hain. FSSAI-certified brands prefer karo India mein.' },
  ],

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Hair Fall / Alopecia',              diseaseSlug: 'hair-fall',                        isAvailable: false },
    { _key: 'ld2', diseaseName: 'Seborrheic Dermatitis',             diseaseSlug: 'seborrheic-dermatitis',            isAvailable: false },
    { _key: 'ld3', diseaseName: 'Brittle Nails / Nail Problems',     diseaseSlug: 'nail-problems',                    isAvailable: false },
    { _key: 'ld4', diseaseName: 'Multiple Carboxylase Deficiency',   diseaseSlug: 'multiple-carboxylase-deficiency',  isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin B12',  vitaminSlug: 'vitamin-b12' },
    { _key: 'rv2', vitaminName: 'Vitamin D',    vitaminSlug: 'vitamin-d' },
    { _key: 'rv3', vitaminName: 'Calcium',      vitaminSlug: 'calcium' },
  ],
}

async function seed() {
  console.log('🌱 Seeding Biotin...')
  try {
    const result = await client.createOrReplace(biotin)
    console.log('✅ Biotin seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
