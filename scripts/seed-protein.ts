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

const protein = {
  _id: 'vitamin-protein',
  _type: 'vitamin',
  name: 'Protein',
  hindiName: 'Sharir Ka Nirmaata Poshan / "Body Builder Nutrient"',
  category: 'Supplement',
  slug: { _type: 'slug', current: 'protein' },
  metaTitle: 'Protein Ki Kami: Lakshan, Food Sources & Homeopathic Ilaj',
  metaDescription: 'Protein ki kami ke lakshan, vegetarian food sources, normal range, supplement types aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: '',

  quickFacts: {
    indiaPrevalence: 'India mein average adult 0.6g protein/kg body weight leta hai — ICMR RDA (0.83g/kg) se 25% kam. (Source: NIN Dietary Guidelines for Indians / ICMR-NIN 2020)',
    commonDeficiencySign: 'Thakaan aur kamzori jo rest ke baad bhi theek nahi hoti — ye protein kami ka pehla aur sabse common sign hai',
    mainFoodSource: 'Soya Chunks (Meal Maker) — 50g dry mein ~26g protein. India ka sabse affordable high-protein vegetarian food',
    normalRangeQuick: '6.0–8.0 g/dL (Serum Total Protein)',
  },

  whatIsIt: 'Protein ek macronutrient hai — yaani body ko isse badi matra mein chahiye. Ye amino acids se bana hota hai, jinhein body khud nahi bana sakti (essential amino acids). Har cell, muscle, hormone, enzyme, aur antibody banane ke liye protein chahiye. Simple bhaasha mein: protein body ka builder, repairer aur security guard teeno hai.',

  bodyFunctions: [
    'Muscles banata aur repair karta hai — exercise ke baad muscle fibres toot te hain, protein unhe theek karta hai',
    'Hormones banata hai — insulin (blood sugar control), thyroid hormone, growth hormone — sab protein se bante hain',
    'Enzymes banata hai — digestion se lekar DNA repair tak; sab enzymatic reactions protein pe depend karte hain',
    'Antibodies (immunity cells) banata hai — har infection se ladne wali cells protein se banti hain',
    'Haemoglobin banata hai — blood mein oxygen carry karne wala protein, iron ka carrier bhi hai',
    'Skin, baal aur nails ka main material hai — collagen aur keratin dono proteins hain',
    'Blood mein fluid balance maintain karta hai — albumin protein blood pressure aur fluid distribution control karta hai',
    'Energy deta hai backup ke roop mein — jab carbs aur fat available nahi hote, body protein se energy nikalti hai',
  ],

  causesOfDeficiency: [
    'Vegetarian ya vegan diet mein dal, paneer, soya ka intake bohot kam hona — India mein ye sabse common karan hai',
    'Sirf roti-chawal khana bina dal-sabzi ke — cereal-only diet mein protein quality poor hoti hai aur quantity bhi insufficient',
    'Digestive problems — IBS, Crohn\'s disease, celiac disease mein protein absorb nahi hoti theek se',
    'Kidney disease mein — doctor protein restrict karte hain, jo kami create kar sakta hai',
    'Older age mein — appetite kam hoti hai, absorption bhi ghatti hai; elderly mein protein kami common hai',
    'Pregnancy aur breastfeeding — zaroorat badhti hai lekin intake same rehta hai',
    'Poverty aur food insecurity — India ke rural areas mein daily protein-rich food afford karna mushkil hota hai',
    'Fad diets ya crash dieting — extreme calorie restriction mein protein intake crash ho jaata hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Muscles ka sagte rehna (sarcopenia) — body protein stores se muscle tod ke use karti hai kami mein',
      'Haath-paon kamzor lagana — grip strength kam ho jaati hai, seedhi si chiz uthane mein mushkil',
      'Baar baar muscle cramps aana — electrolyte transport ke liye protein-based enzymes zaroor hote hain',
    ],
    energyMoodBrain: [
      'Chronic thakaan — haemoglobin kam hone se oxygen supply poor hoti hai, brain ko energy nahi milti',
      'Concentration mein takleef, bhool jaana — brain ke neurotransmitters (serotonin, dopamine) protein se bante hain',
      'Mood swings, chidchidahat — tryptophan (protein ka ek amino acid) serotonin banane ke liye zaroori hai',
    ],
    skinHairNails: [
      'Baalon ka jhadna (hair fall) — keratin protein ki kami se hair shaft kamzor ho jaata hai',
      'Nails ka tootna ya peela pad jaana — nails 90% keratin hote hain',
      'Skin dry, papery ya flaky hona — collagen production ruk jaati hai kami mein',
      'Chehre pe sojan (puffiness), khaaskar aankhon ke neeche — low albumin ki wajah se fluid tissue mein jam jaata hai',
    ],
    other: [
      'Baar baar bimaar hona — immunity cells (T-cells, antibodies) protein se bante hain',
      'Wounds jaldi theek nahi hona — tissue repair ke liye protein chahiye',
      'Bacchon mein: height nahi badh rahi, weight gain nahi — growth ke liye protein critical hai',
      'Mahilaon mein: PCOS mein bhi protein kami ka role — hormonal imbalance protein metabolism se juda hai',
    ],
  },

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',        normal: '6.0–8.0 g/dL', deficient: '< 6.0 g/dL', toxic: '> 8.0 g/dL', unit: 'g/dL' },
    { _key: 'nr2', category: 'Adult Female',       normal: '6.0–8.0 g/dL', deficient: '< 6.0 g/dL', toxic: '> 8.0 g/dL', unit: 'g/dL' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)', normal: '5.7–8.0 g/dL', deficient: '< 5.7 g/dL', toxic: '> 8.0 g/dL', unit: 'g/dL' },
    { _key: 'nr4', category: 'Pregnancy',          normal: '6.0–8.5 g/dL', deficient: '< 6.0 g/dL', toxic: 'Consult doc', unit: 'g/dL' },
    { _key: 'nr5', category: 'Elderly (60+)',       normal: '6.0–7.8 g/dL', deficient: '< 6.0 g/dL', toxic: '> 7.8 g/dL', unit: 'g/dL' },
  ],

  vegSources: [
    { _key: 'v1',  food: 'Soya Chunks (Meal Maker)',            quantity: '50g dry (1 katori)',      amount: '~26g protein' },
    { _key: 'v2',  food: 'Paneer (cottage cheese)',             quantity: '100g (~2 thick pieces)',  amount: '~18g protein' },
    { _key: 'v3',  food: 'Chana (Bengal gram, boiled)',         quantity: '1 katori (80g dry)',      amount: '~15–16g protein' },
    { _key: 'v4',  food: 'Rajma (kidney beans, boiled)',        quantity: '1 katori (80g dry)',      amount: '~15g protein' },
    { _key: 'v5',  food: 'Moong Dal (split green gram)',        quantity: '1 katori cooked (150g)',  amount: '~11–13g protein' },
    { _key: 'v6',  food: 'Mungfali (groundnuts)',               quantity: '30g (~1 fistful)',        amount: '~8g protein' },
    { _key: 'v7',  food: 'Dudh (milk, full fat)',               quantity: '1 glass (250ml)',         amount: '~8g protein' },
    { _key: 'v8',  food: 'Masoor Dal (red lentil)',             quantity: '1 katori cooked',         amount: '~9–10g protein' },
    { _key: 'v9',  food: 'Dahi (curd, full fat)',               quantity: '1 katori (150g)',         amount: '~5–6g protein' },
    { _key: 'v10', food: 'Til (sesame seeds)',                  quantity: '2 tbsp (20g)',            amount: '~4–5g protein' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Murgi ka maas (Chicken breast)', quantity: '100g cooked',  amount: '~28–31g protein' },
    { _key: 'nv2', food: 'Mutton (lean, cooked)',          quantity: '100g cooked',  amount: '~22–25g protein' },
    { _key: 'nv3', food: 'Machli (Rohu/Katla)',            quantity: '100g cooked',  amount: '~18–22g protein' },
    { _key: 'nv4', food: 'Anda (whole egg, boiled)',       quantity: '2 ande',       amount: '~12–13g protein' },
  ],

  sunlightNote: 'Dal + chawal milana protein quality badhata hai — chawal mein lysine kam hoti hai, dal mein zyada. Dono saath khane se complete amino acid profile milta hai. Ye Indian diet ka centuries-old wisdom hai. Har meal mein ek protein source zaroor ho: Breakfast mein dahi ya besan cheela, Lunch mein dal + chawal + curd, Dinner mein rajma/chana ya paneer sabzi.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–6 months',      male: '6–8',  female: '6–8',  pregnancy: null,  breastfeeding: null,  unit: 'g/day' },
    { _key: 'd2', ageGroup: '6–12 months',     male: '10–12',female: '10–12',pregnancy: null,  breastfeeding: null,  unit: 'g/day' },
    { _key: 'd3', ageGroup: '1–8 saal',        male: '19',   female: '18',   pregnancy: null,  breastfeeding: null,  unit: 'g/day' },
    { _key: 'd4', ageGroup: '9–18 saal',       male: '35',   female: '32',   pregnancy: null,  breastfeeding: null,  unit: 'g/day' },
    { _key: 'd5', ageGroup: 'Adults (19–50)',  male: '54',   female: '46',   pregnancy: '69',  breastfeeding: '65',  unit: 'g/day (ICMR-NIN 2020)' },
    { _key: 'd6', ageGroup: '51–70 saal',      male: '54',   female: '46',   pregnancy: null,  breastfeeding: null,  unit: 'g/day' },
    { _key: 'd7', ageGroup: '70+ saal',        male: '54',   female: '45',   pregnancy: null,  breastfeeding: null,  unit: 'g/day' },
  ],

  pregnancyInfo: {
    applicable: true,
    note: 'Pregnancy mein body ek naya insan bana rahi hoti hai — placenta, fetal tissues, amniotic fluid, maternal blood volume — sab ke liye protein chahiye. ICMR-NIN 2020: Normal adult requirement + 23g/day extra (yaani 55kg mahila ko: 46g + 23g = ~69g protein per day). Kami se: Fetal growth restriction (baby ka weight kam), preterm birth ka risk, baby ka brain development proper nahi. Agar diet se requirement puri nahi ho rahi (vegetarian/vegan hain ya nausea ki wajah se) to doctor-prescribed protein supplement safe hai.',
    whenDoctor: 'Pregnancy mein koi bhi protein supplement ya diet change karne se pehle apne OB-GYN ya dietitian se zaroor consult karein.',
  },

  childrenInfo: 'Bacchon mein protein kami ke signs: Height-weight chart pe pichhe rehna (growth faltering — sabse clear sign), baar baar infection (immunity weak), late developmental milestones (baithna, chalna, bolna), pale skin ya anaemic dikhna. Daily requirement (ICMR-NIN 2020): 1–3 saal: ~16g | 4–6 saal: ~20g | 7–9 saal: ~23–26g | 10–12 saal: ~33–35g. Bachche ke liye friendly foods: Dudh (1 glass = 8g), Dahi (1 katori = 6g), Paneer (100g = 18g), Moong dal khichdi (1 bowl = 10–12g). Sirf tab jab doctor ya registered dietitian recommend kare supplement do — bacchon ke liye marketed protein powders mein often added sugar, artificial flavors aur stimulants hote hain.',

  labTestInfo: {
    testName: 'Serum Total Protein Test (+ Albumin/Globulin ratio)',
    testSlug: 'serum-protein-test',
    normalRange: 'Total Protein: 6.0–8.0 g/dL | Albumin: 3.5–5.0 g/dL. Agar albumin <3.5 g/dL ho to ye significant deficiency ka sign hai. Source: Metropolis, Dr. Lal PathLabs.',
    whenToTest: 'Chronic thakaan, hair fall, wounds heal nahi ho rahe. Doctor ne kidney/liver disease diagnose ki hai. Pregnancy ke dauran routine panel mein. Elderly mein annual checkup mein include karein.',
    repeatAfter: 'Supplement ya diet change ke 2–3 mahine baad serum protein retest karwao.',
    priceRange: 'Serum Total Protein: ₹150–₹300 | Albumin alag test: ₹150–₹250 | Complete LFT panel (jisme protein aata hai): ₹400–₹700 (Metropolis, Dr. Lal PathLabs)',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Whey Protein (Concentrate / Isolate)',
      benefits: ['Fast absorption (30–60 min mein blood mein)', 'Complete amino acid profile', 'BCAA content high', 'Gym ke baad muscle recovery ke liye widely used'],
      drawbacks: ['Dairy se bana hai — lactose intolerant logon ko bloating/gas', 'Kuch ko acne', 'Relatively expensive'],
      bestFor: 'Young adults, gym-goers, post-workout recovery, non-vegetarians jo dairy khate hain',
    },
    {
      _key: 'sf2',
      formName: 'Casein Protein',
      benefits: ['Slow digestion (6–8 ghante) — raat bhar amino acids release karta hai', 'Muscle breakdown rokta hai'],
      drawbacks: ['Dairy source — lactose intolerance issue', 'Khana heavily filling hota hai', 'Price zyada'],
      bestFor: 'Jo log raat ko lete hain protein recovery ke liye; athletes',
    },
    {
      _key: 'sf3',
      formName: 'Soy Protein Isolate (Plant-based)',
      benefits: ['Complete plant protein (sab essential amino acids hain)', 'Dairy-free', 'Vegetarian/vegan ke liye suitable', 'Affordable'],
      drawbacks: ['Phytoestrogens hote hain — hormone-sensitive conditions mein caution', 'Kuch logon ko digestive discomfort'],
      bestFor: 'Vegetarians, vegans, lactose intolerant, women (in normal amounts safe hai)',
    },
    {
      _key: 'sf4',
      formName: 'Pea Protein / Multi-source Plant Protein (Pea + Rice blend)',
      benefits: ['Hypoallergenic (dairy aur soy free)', 'Good digestibility', 'Eco-friendly', 'BCAA theek thak'],
      drawbacks: ['Akela incomplete protein (rice se blend karna padta hai complete ke liye)', 'Chalky taste'],
      bestFor: 'Allergies wale, complete plant-based seekers, elderly',
    },
  ],

  supplementTiming: {
    bestTime: 'Gym/exercise ke baad 30–60 minutes mein lena — is window mein muscles protein zyada absorb karti hain ("anabolic window"). Agar gym nahi jaate — kisi bhi meal ke saath ya baad mein le sakte hain. Casein specifically raat ko sone se pehle lo.',
    withFood: 'Whey khali pet ya thodi breakfast ke saath lo (zyada quick absorption ke liye). Agar stomach sensitive hai to thoda khaana khaake lo — gas/bloating kam hogi.',
    note: 'Paani ya dudh ke saath mix karo — dudh se extra protein milti hai. Digestive enzymes tablet (papain/bromelain wali) lene se protein digestion improve hoti hai, khaaskar elderly ke liye. Proper hydration rakho — body protein metabolize karne ke liye paani use karti hai.',
    avoid: 'Fruit juice ke saath mat lo — sugar spike aur protein digestion slow ho sakta hai. Chai ya coffee ke saath (tannins) — plant protein ka iron absorption tannins se reduce ho jaata hai; 1 ghante ka gap rakhen. Thyroid medicines ke saath — kam se kam 4 ghante ka gap zaroori hai.',
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Levodopa (Parkinson\'s medicine)', reason: 'Amino acids levodopa ke absorption ke liye compete karte hain; high protein meal ke 1–2 ghante baad lo. Doctor se zaroor discuss karein' },
    { _key: 'di2', medicineName: 'Tetracycline Antibiotics (doxycycline etc.)', reason: 'Dairy-based protein (whey/casein) calcium lekar antibiotic absorption reduce karta hai; 2–3 ghante ka gap rakhen' },
    { _key: 'di3', medicineName: 'Warfarin (blood thinner)', reason: 'High protein intake Vitamin K metabolism change kar sakta hai; consistent protein intake rakhen aur doctor ko inform karein' },
    { _key: 'di4', medicineName: 'Diabetes medicines (Metformin, insulin)', reason: 'High protein meals blood sugar differently affect kar sakti hain; agar diabetes hai to dietitian se meal planning karein' },
    { _key: 'di5', medicineName: 'Bisphosphonates (Alendronate — osteoporosis medicine)', reason: 'Calcium-rich dairy protein saath lene se absorption drop ho jaati hai; medicines khali pet leni hoti hain typically' },
  ],

  combinations: {
    beneficial: [
      { _key: 'b1', nutrient: 'Vitamin C (nimbu, amla, orange)', reason: 'Iron absorption badhti hai plant-based protein mein; collagen synthesis ke liye bhi Vitamin C zaroori hai' },
      { _key: 'b2', nutrient: 'Carbohydrates (banana, oats)', reason: 'Exercise ke baad saath lene se insulin spike hota hai jo protein uptake muscles mein better karta hai' },
      { _key: 'b3', nutrient: 'Vitamin B12 (agar vegan hain)', reason: 'B12 protein metabolism ke liye zaroori enzyme reactions mein involved hai' },
      { _key: 'b4', nutrient: 'Zinc-rich foods (kaddu ke beej, til)', reason: 'Zinc protein synthesis ke liye essential cofactor hai' },
    ],
    avoid: [
      { _key: 'a1', nutrient: 'High Calcium foods + Tetracycline antibiotics (same time)', reason: 'Antibiotic absorption significantly reduce ho jaati hai — alag time pe lo' },
      { _key: 'a2', nutrient: 'Chai ya coffee (tannins) saath mein', reason: 'Plant protein ka iron absorption tannins se reduce ho jaata hai; 1 ghante ka gap rakhen' },
    ],
    timingGuide: 'Subah lo: Whey ya soy protein breakfast ke saath (ya baad mein), nimbu paani ke saath iron absorption ke liye. Raat lo: Casein protein sone se pehle, ya dinner mein dal-paneer se natural protein. Gap rakhein: Antibiotics aur thyroid medicines se kam se kam 3–4 ghante ka gap.',
  },

  toxicity: {
    upperLimit: 'ICMR/NIH ke mutabik healthy adults ke liye protein ka UL clearly defined nahi hai jaise vitamins ke liye. Generally: 2.0–2.5g/kg/day se zyada long-term lena problematic ho sakta hai. Kidney patients ke liye to 0.6–0.8g/kg/day tak restrict ki jaati hai (doctor decide karte hain).',
    sideEffects: [
      'Kidney pe extra load — extra protein nitrogenous waste produce karta hai jise kidneys excrete karti hain; already weak kidneys ke liye dangerous',
      'Kidney stones ka risk — high animal protein uric acid aur calcium excretion badhata hai',
      'Dehydration — protein metabolism mein zyada paani use hota hai; intake ke saath paani bhi badhao',
      'Constipation ya diarrhea — suddenly bahut zyada protein se gut bacteria disturb hoti hai',
      'Weight gain — zyada protein = zyada calories, jo fat ke roop mein store ho sakti hai',
    ],
    whenSerious: 'Pehle se kidney disease ho to high protein seedha damage kar sakta hai. Liver disease mein protein metabolism impaired hoti hai — excess se ammonia buildup ho sakta hai. Gout ke patients mein high animal protein uric acid badhata hai. "Doctor ki salah ke bina high dose protein supplement kabhi mat lo."',
  },

  timeline: {
    bloodLevelTime: 'Serum albumin level 2–4 hafte mein improve hona shuru hota hai proper protein intake se. Full normalization 6–8 hafte mein.',
    symptomsTime: 'Energy levels: 2–3 hafte mein. Hair fall mein kami: 6–8 hafte (hair growth cycle slow hai — patience rakho). Skin improvement: 4–6 hafte. Muscle strength: 6–12 hafte (especially agar exercise bhi ho rahi hai).',
    fullRecoveryTime: 'Moderate deficiency mein 2–3 mahine. Severe deficiency mein (Kwashiorkor/Marasmus level) 6+ mahine supervised care ke saath.',
    repeatTestTime: 'Supplement ya diet change ke 2–3 mahine baad serum protein retest karwao',
    patientNote: 'Ek hafte mein dramatic fark expect mat karo — protein recovery slow aur steady process hai. Consistent diet change ya supplement 3 mahine se pehle properly judge nahi hoti.',
  },

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Mote ya puffy dikhne wale bacche ya adults jo thake hue rehte hain, sweat zyada karte hain, bones/muscles kamzor lagti hain, aur cold-sensitive hote hain',
      howItHelps: 'Calcium aur protein metabolism improve karne mein madadgar maana jaata hai; constitutional weakness mein body ki absorption capacity ko stimulate karta hai — khaaskar jab digestive issues ki wajah se nutrients properly absorb nahi ho rahe',
    },
    {
      _key: 'h2',
      medicineName: 'Silicea (Silica)',
      patientType: 'Thin, underweight patients jinhe baar baar infections hote hain, wounds jaldi heal nahi hoti, skin-nails-hair kamzor hain, aur low stamina hai',
      howItHelps: 'Connective tissue support karta hai — collagen aur protein-based structures (skin, nails, bones) ko strengthen karne mein madadgar; immune function ko bhi support karta hai',
    },
    {
      _key: 'h3',
      medicineName: 'Lycopodium Clavatum',
      patientType: 'Jinhein digestive problems hain (bloating, gas, acidity) aur jo protein rich foods jaise dal ya rajma khane ke baad discomfort feel karte hain — isiliye protein intake avoid karne lagein',
      howItHelps: 'Digestive function improve karne mein madadgar — jab gut properly protein digest nahi kar pa raha, tab underlying digestive weakness address karta hai',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Sirf bodybuilders ko protein ki zaroorat hoti hai',
      truth: 'Protein har insaan ke liye — bacchon se leke budhon tak — zaroori hai. Muscles, hormones, immunity, skin, baal — sab ke liye. Office mein kaam karne wale ko bhi utni hi zaroorat hai jitni ek athlete ko (proportionate to body weight).',
    },
    {
      _key: 'm2',
      myth: 'Vegetarian logon ko protein nahi milta',
      truth: 'Dal, rajma, chana, paneer, soya chunks, curd, dudh — ye sab excellent protein sources hain. Ek vegetarian Indian thali mein dal + chawal + dahi + paneer agar hain, to protein requirement puri ho sakti hai. Zaroorat hai planning ki, awareness ki — sirf roti-sabzi pe depend nahi rehna.',
    },
    {
      _key: 'm3',
      myth: 'Protein supplement (powder) lena harmful hai',
      truth: 'Agar doctor ya registered dietitian ne recommend kiya hai aur aap healthy hain (kidney problem nahi), to protein supplement safe hai. Harm tab hota hai jab bina guidance ke, bahut zyada dose liya jaata hai. Food se protein best hai — supplement tab lo jab zaroorat ho aur guidance ho.',
    },
    {
      _key: 'm4',
      myth: 'Zyada protein khane se muscles apne aap ban jaati hain',
      truth: 'Protein muscle building ka raw material hai — construction company ka cement. Lekin construction koi nahi karega agar kamgar (exercise) nahi hai. Protein + resistance training = muscle gain. Sirf protein khane se muscles nahi banti.',
    },
    {
      _key: 'm5',
      myth: 'Protein powder se kidney kharab ho jaati hai',
      truth: 'Healthy logon mein normal-to-moderate protein intake (2g/kg/day tak) kidneys damage nahi karta — research yahi kehti hai. Agar aapko pehle se kidney disease hai, tab HIGH protein genuinely harmful ho sakta hai. Healthy individuals ke liye recommended range mein protein safe hai.',
    },
  ],

  faqs: [
    { _key: 'f1',  question: 'Protein ki kami ke lakshan kya hain?', answer: 'Protein ki kami mein sabse common symptoms hain — baar baar thakaan, baalon ka jhadna, nails ka tootna, wounds ka jaldi theek nahi hona, aur baar baar bimaar hona. Kuch logon mein haath-paon mein sojan bhi aati hai. Agar aap in symptoms mein se 3–4 feel kar rahe hain, ek serum protein blood test karwao — sirf tab confirm hoga.' },
    { _key: 'f2',  question: 'Protein kisme sabse zyada paya jaata hai vegetarian mein?', answer: 'Vegetarian sources mein soya chunks (meal maker) sabse zyada protein dete hain — 50g dry mein ~26g. Uske baad: Moong/masoor/toor dal (100g dry mein 22–26g), Paneer (100g mein 18g), Chana/Rajma (100g dry mein 18–20g), aur Curd/Milk bhi achhe sources hain. Dal + chawal ka combination quality bhi better karta hai.' },
    { _key: 'f3',  question: 'Protein ki kami se kaun si bimari hoti hai?', answer: 'Severe protein deficiency se Kwashiorkor (bacchon mein — pet phoolna, skin peeling) aur Marasmus (extreme wasting) hota hai. Normal adults mein moderate kami se anaemia, hair loss, weak immunity, muscle loss (sarcopenia), aur non-alcoholic fatty liver hone ka risk badh jaata hai.' },
    { _key: 'f4',  question: 'Ek din mein kitna protein khana chahiye?', answer: 'ICMR-NIN 2020 ke mutabik: 0.83g protein per kg body weight per day. Iska matlab: 60kg insaan ko ~50g/day, 55kg mahila ko ~46g/day. Pregnancy mein ~23g extra, breastfeeding mein ~19g extra. Agar cereal-heavy diet hai to 1g/kg tak le sakte hain.' },
    { _key: 'f5',  question: 'Protein ka normal range blood test mein kitna hona chahiye?', answer: 'Serum Total Protein normal range hai 6.0–8.0 g/dL. Albumin (important fraction) 3.5–5.0 g/dL hona chahiye. <6.0 g/dL total protein ya <3.5 g/dL albumin ho toh doctor se milna zaroori hai.' },
    { _key: 'f6',  question: 'Kya sirf dal se protein ki zaroorat puri hoti hai?', answer: 'Alag-alag dals se kuch hadd tak puri ho sakti hai — lekin sirf 1 katori dal se nahi. 2–3 katori various dals (moong, masoor, toor, chana) + paneer + curd daily mein include karo, tab vegetarian protein requirement puri hogi. Soya chunks add karna kaafi faydemand hai.' },
    { _key: 'f7',  question: 'Protein supplement lena safe hai kya?', answer: 'Healthy adults ke liye recommended dose mein safe hai. Agar kidney disease, liver disease, ya koi chronic condition hai — pehle doctor se poochein. Aur kisi bhi supplement ke liye: more is not better — doctor ya dietitian ki guidance se hi lo.' },
    { _key: 'f8',  question: 'Pregnancy mein protein ki kami se kya hota hai?', answer: 'Pregnancy mein protein kami se baby ka weight kam reh sakta hai, premature birth ka risk badh sakta hai, aur baby ke brain development pe bura asar pad sakta hai. Maternal side pe thakaan, anaemia, aur immune weakness hoti hai. "Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein."' },
    { _key: 'f9',  question: 'Protein ki kami ko kaise theek karein?', answer: 'Pehle diet se: Vegetarian hain to daily 2–3 katori various dal + 100g paneer + 1 katori dahi + 1 glass dudh add karein. Soya chunks (1 katori dry = ~26g protein) add karna sabse effective step hai. Agar diet se puri nahi ho rahi ya doctor ne low serum protein diagnose kiya hai, tab doctor-prescribed supplement.' },
    { _key: 'f10', question: 'Bacchon mein protein ki kami kaise pehchanein?', answer: 'Agar bachcha growth chart pe pichhe ja raha hai (height/weight), baar baar bimaar pad raha hai, ya pale aur kamzor dikh raha hai — ye protein kami ke signs hain. Pediatrician se milein aur serum protein test karwao. Ghar pe: daily dudh, dal ka paani (thin dal), dahi, egg (agar khate hain) — ye simple steps hain.' },
    { _key: 'f11', question: 'Protein powder kitni umar mein le sakte hain?', answer: 'Adults (18+) ke liye protein powder generally safe hai agar kidney/liver healthy hai. Bacchon (18 se kam) ke liye — food sources prefer karein. Agar kisi child athlete ya special need hai, pediatrician se guidance lo. Elderly (60+) ke liye bhi doctor ki salaah se lena better hai.' },
    { _key: 'f12', question: 'Whey protein aur plant protein mein kya fark hai?', answer: 'Whey protein dairy se aata hai — fast absorb hota hai, complete amino acids hain, gym ke baad achha hai. Plant protein (soy, pea, rice) — vegetarians/vegans ke liye, dairy-free, thoda slower absorption. Quality wise dono achhe hain agar combination sahi ho. Choice personal diet aur health goals pe depend karti hai.' },
    { _key: 'f13', question: 'Protein lene ka sahi time kya hai?', answer: 'Exercise ke baad 30–60 min mein lena most effective hai (muscle recovery ke liye). Agar exercise nahi karte — kisi bhi meal ke saath le sakte hain. Casein raat ko sone se pehle lena beneficial hai. Important: Timing matters but total daily protein amount sabse zyada important hai.' },
    { _key: 'f14', question: 'Kya protein supplement se kidney kharab hoti hai?', answer: 'Healthy logon mein normal amounts mein protein supplement kidney damage nahi karta. Lekin agar pehle se CKD (chronic kidney disease) ya kidney stones ka history hai — tab high protein genuinely harmful hai. Aise logon ko doctor se protein restriction advice milti hai (0.6–0.8g/kg). Healthy individual ko itna darrane ki zaroorat nahi — guidance mein rakho.' },
    { _key: 'f15', question: 'Protein ki kami theek hone mein kitna time lagta hai?', answer: 'Blood protein level 2–4 hafte mein improve hona shuru hota hai. Hair fall mein kami 6–8 hafte mein feel hogi (hair cycle slow hota hai). Energy 2–3 hafte mein better hogi. Full recovery 2–3 mahine. Ek hafte mein result expect mat karo — patience aur consistency dono zaroori hain.' },
    { _key: 'f16', question: 'Baalon ke liye protein kitna important hai?', answer: 'Baalon ka 90% hissa keratin naam ke protein se bana hai. Protein kami mein baal kamzor hote hain, toot te hain, jhadte hain. Sirf topical treatments (shampoo, oil) se zyada fark nahi padta agar andar se protein hi nahi aa rahi. Diet se protein badhao — 2–3 mahine mein difference dikhega.' },
    { _key: 'f17', question: 'Protein aur iron saath mein le sakte hain kya?', answer: 'Haan, saath mein lena beneficial hai. Haemoglobin ek protein hai jisme iron hota hai. Protein aur iron dono saath lene se red blood cells production better hoti hai. Specifically: dal (iron) ke saath nimbu paani (Vitamin C) lene se iron absorption improve hoti hai — yahi combination ideal hai.' },
    { _key: 'f18', question: 'Protein ki kami ka homeopathic ilaj kya hai?', answer: 'Homeopathy protein directly replace nahi karta — lekin digestive function, absorption capacity, aur constitutional weakness ko address karta hai jiske wajah se kami ho rahi hoti hai. Calcarea Carbonica, Silicea, aur Lycopodium commonly used hain. Severe kami mein conventional treatment pehle zaroori hai; homeopathy complementary role mein chal sakta hai. Potency aur dose sirf qualified homoeopath se leni chahiye.' },
    { _key: 'f19', question: 'Vegetarian diet mein protein ki kami kaise rokein?', answer: 'Simple rule: Har meal mein ek protein source zaroor ho. Breakfast: Dahi ya egg ya besan cheela. Lunch: Dal + chawal + curd. Dinner: Rajma/Chana ya paneer sabzi. Snack: Mungfali ya sprouted chana. Soya chunks weekly 3–4 baar use karo. Ye pattern follow karo — deficiency nahi hogi.' },
    { _key: 'f20', question: 'Kya protein ki kami se motapa hota hai?', answer: 'Seedha nahi, but indirectly yes. Protein kami mein muscle mass kam hoti hai. Muscles zyada calories burn karti hain (high metabolism). Kam muscles = slow metabolism = calories fat ke roop mein zyada store hoti hain. Iske alawa, protein satiety hormone badhata hai — protein kam ho to zyada bhookh lagti hai, zyada khaate hain. Isliye protein-adequate diet weight management mein bhi help karta hai.' },
  ],

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Kwashiorkor',         diseaseSlug: 'kwashiorkor',   isAvailable: false },
    { _key: 'ld2', diseaseName: 'Marasmus',            diseaseSlug: 'marasmus',      isAvailable: false },
    { _key: 'ld3', diseaseName: 'Anaemia',             diseaseSlug: 'anaemia',       isAvailable: false },
    { _key: 'ld4', diseaseName: 'Sarcopenia',          diseaseSlug: 'sarcopenia',    isAvailable: false },
    { _key: 'ld5', diseaseName: 'Fatty Liver (NAFLD)', diseaseSlug: 'fatty-liver',   isAvailable: false },
    { _key: 'ld6', diseaseName: 'Oedema',              diseaseSlug: 'oedema',        isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin B12', vitaminSlug: 'vitamin-b12', isAvailable: true  },
    { _key: 'rv2', vitaminName: 'Iron',        vitaminSlug: 'iron',        isAvailable: true  },
    { _key: 'rv3', vitaminName: 'Zinc',        vitaminSlug: 'zinc',        isAvailable: true  },
  ],
}

async function seed() {
  console.log('🌱 Seeding Protein...')
  const result = await client.createOrReplace(protein)
  console.log('✅ Protein seeded:', result._id)
}

seed().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})
