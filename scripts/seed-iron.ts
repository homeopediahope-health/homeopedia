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

const iron = {
  _id: 'vitamin-iron',
  _type: 'vitamin',
  name: 'Iron',
  hindiName: 'Loha / Khoon Badhane Wala Mineral',
  category: 'Mineral',
  slug: { _type: 'slug', current: 'iron' },
  metaTitle: 'Iron Ki Kami: Lakshan, Food Sources & Homeopathic Ilaj',
  metaDescription: 'Iron ki kami ke lakshan, vegetarian food sources, normal range, supplement types aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: 'Meri practice mein jo anaemia cases aate hain — unme se bahut si mahilayein sirf palak khaati hain aur samajhti hain iron poori ho gayi. Lekin chai ke saath khana ya meal ke turant baad chai pine ki aadat is sari mehnat ko waste kar deti hai. Jab maine unhe iron + nimbu paani combo aur chai timing samjhaaya tab 6–8 hafte mein haemoglobin meaningful improve hua — supplement ke bina bhi kuch cases mein.',

  quickFacts: {
    indiaPrevalence: 'India mein 52% pregnant mahilayein aur 72% shishu anaemic hain — iron deficiency is ka sabse bada karan hai (NFHS data)',
    commonDeficiencySign: 'Hamesha rehne wali thakaan — thodi si mehnat pe bhi dam nikal jaana; ye aksar iron ki kami ka pehla signal hai',
    mainFoodSource: 'Palak, Chana, Rajma, Ragi, Khajoor, Gur — ye India ke ghar ghar mein maujood iron ke sources hain. Nimbu ke saath lene se absorption 2-3 guna badhti hai',
    normalRangeQuick: 'Serum Iron: 60–170 µg/dL | Ferritin (women): 12–150 ng/mL',
  },

  whatIsIt: 'Iron (Loha) ek zaroori mineral hai jo body mein haemoglobin banata hai — woh protein jo red blood cells mein oxygen carry karta hai. Bina iron ke body ke cells ko pura oxygen nahi milta, aur insaan kamzori, thakan aur saans ki takleef mehsoos karta hai. India mein Iron deficiency anemia (Khoon ki kami) sabse common nutritional problem hai — especially mahilaon, pregnant ladies aur bachon mein. Ye sirf diet se nahi, absorption ki kami se bhi hoti hai.',

  bodyFunctions: [
    'Haemoglobin banata hai — Red blood cells mein oxygen ko poore body mein carry karta hai; iron ki kami seedha khoon ki kami (anaemia) ka karan banti hai',
    'Myoglobin support karta hai — Muscles mein oxygen store hoti hai; isliye iron ki kami se muscles jaldi thak jaati hain aur exercise tolerance gir jaati hai',
    'Energy production mein madad karta hai — Mitochondria (body ka power house) ko iron chahiye ATP banane ke liye; kami mein hamesha thakaan rehti hai',
    'Immunity strong karta hai — Immune cells theek se kaam karein isliye iron zaroori hai; kami mein baar baar bimaar padna hota hai',
    'Dimag ka vikas — Bachon aur pregnant mahilaon mein brain development ke liye iron critical hai; kami mein focus aur memory prabhavit hoti hai',
    'Thyroid hormones — Iron thyroid ko properly function karne mein help karta hai; low iron thyroid function affect karta hai',
    'DNA synthesis — Cells ke reproduction aur repair mein iron ka direct role hai; rapid growth periods mein demand kaafi badh jaati hai',
  ],

  causesOfDeficiency: [
    'Shakahari diet mein non-heme iron — Plant sources se iron absorb karna zyada mushkil hota hai; vegetarian Indians mein ye sabse bada reason hai (sirf 2–20% absorb hota hai vs meat ka 15–35%)',
    'Chai aur doodh ke saath khana — Chai ke tannins aur doodh ka calcium iron ko block karte hain; ye India ka no.1 hidden reason hai jo log ignore karte hain',
    'Periods mein zyada khoon aana — Reproductive age ki mahilaon mein iron loss sabse zyada periods se hota hai; heavy periods mein aur bhi zyada',
    'Pregnancy aur breastfeeding — Is dauran iron ki zaroorat kaafi badh jaati hai; 90% pregnant Indian mahilaon ke stores iske liye insufficient hote hain',
    'Phytates ki wajah se poor absorption — Gehun, chawal, dal mein phytic acid hoti hai jo iron bind kar leta hai; India ka staple diet isiliye problem karti hai',
    'Intestinal infections ya parasites — Hookworm, amoeba jaisi problems se gut se iron lose hoti hai; rural India mein ye aaj bhi common hai',
    'Celiac disease ya IBD — Intestinal disorders mein iron absorb nahi hoti; Crohn\'s disease mein bhi absorption affected hoti hai',
    'Chronic bleeding — Pet mein ulcer, piles (bawaseer) ya kidney disease se constant blood/iron loss hoti rehti hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Muscles mein jaldi thakaan — Myoglobin ki kami se muscles oxygen store nahi kar paati; exercise mein bahut jaldi dam nikal jaata hai',
      'Restless Leg Syndrome — Raat ko taaon mein bechain, jhunjhunahat wali feeling; iron aur dopamine ka direct connection hai',
      'Nakhun patle, brittle ya spoon-shaped (Koilonychia) — Iron ki kami ka khaas nishaan; nails mein cracks aur splits hone lagte hain',
    ],
    energyMoodBrain: [
      'Hamesha thakaan rehna — Body mein oxygen kam pohonchne ki wajah se thodi si mehnat pe bhi dam nikal jaata hai; sabse pehla aur common sign',
      'Concentration nahi hoti, yaadaasht kamzor lagti hai — Brain ko oxygen ki supply kam hoti hai; school performance aur work efficiency dono girte hain',
      'Irritability aur mood swings — Especially adolescent girls aur pregnant mahilaon mein common; brain chemistry affect hoti hai',
      'Chakkar aana ya sar ghoomna — Achanak uthne pe andhera aana; orthostatic hypotension ka feel aana',
    ],
    skinHairNails: [
      'Chehre, aankhon ke andar, nakhunon ka rang fika/pila padna (Pallor) — Red blood cells ki kami se paleness aati hai; aankhon ki andar ki skin dekhna easy way hai',
      'Baalon ka zyada jhadna — Scalp ke follicles ko oxygen nahi milti, growth ruk jaati hai; ferritin 40 se neeche aane pe hair fall dramatically badhta hai',
      'Dry, rough skin — Cells ko nutrients nahi milte iron ki kami mein',
    ],
    other: [
      'Saans phoolna — Seedhi cheez mein bhi saans nahi milta; stairs chadh nahi sakte; haemoglobin low hone ka clear sign',
      'Mitti, chalk khane ki icha (Pica) — Khaas taur pe pregnant mahilaon aur bachon mein dekha jaata hai; alarming sign hai',
      'Zubaan mein sujan ya dard (Glossitis) — Munh ki redness ya soreness; tongue smooth aur sore dikhti hai',
      'Bachon mein: Pale skin, baar baar bimaar padna, weight gain slow, school mein dhyan na lagana, Pica',
    ],
  },

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',        normal: '60–170 µg/dL | Ferritin 20–200 ng/mL | Hb 13.5–17.5',  deficient: 'Ferritin <20 ng/mL',  toxic: '>180 µg/dL', unit: 'µg/dL / ng/mL / g/dL' },
    { _key: 'nr2', category: 'Adult Female',       normal: '60–170 µg/dL | Ferritin 12–150 ng/mL | Hb 12.0–15.5',  deficient: 'Ferritin <12 ng/mL',  toxic: '>170 µg/dL', unit: 'µg/dL / ng/mL / g/dL' },
    { _key: 'nr3', category: 'Bacche (6m–18y)',    normal: '50–120 µg/dL | Ferritin 7–140 ng/mL | Hb 11.5–15.5',   deficient: 'Ferritin <7 ng/mL',   toxic: 'Hb <11.5',   unit: 'µg/dL / ng/mL / g/dL' },
    { _key: 'nr4', category: 'Pregnancy',          normal: '40–100 µg/dL | Ferritin 15–150 ng/mL | Hb >11.0',       deficient: 'Ferritin <15 ng/mL',  toxic: 'Hb <11.0 = anaemia', unit: 'µg/dL / ng/mL / g/dL' },
    { _key: 'nr5', category: 'Elderly (60+)',      normal: '60–160 µg/dL | Ferritin 20–250 ng/mL | Hb 12.0–17.0',  deficient: 'Ferritin <20 ng/mL',  toxic: '>160 µg/dL', unit: 'µg/dL / ng/mL / g/dL' },
    { _key: 'nr6', category: 'Iron Depletion Stage', normal: 'Ferritin 12–20 ng/mL (caution zone)', deficient: 'Ferritin <12 ng/mL = depleted stores', toxic: '—', unit: 'ng/mL' },
  ],

  vegSources: [
    { _key: 'v1',  food: 'Ragi (Finger Millet)',        quantity: '100 gm',          amount: '~3.9 mg' },
    { _key: 'v2',  food: 'Palak (Spinach, cooked)',     quantity: '1 katori (100gm)', amount: '~3.6 mg' },
    { _key: 'v3',  food: 'Kala Chana',                  quantity: '1 katori (paka)',  amount: '~3.5 mg' },
    { _key: 'v4',  food: 'Rajma (Kidney Beans)',        quantity: '1 katori (paka)',  amount: '~3.0 mg' },
    { _key: 'v5',  food: 'Khajoor (Dates)',             quantity: '5–6 pieces',       amount: '~2.5 mg' },
    { _key: 'v6',  food: 'Kaju (Cashews)',              quantity: '10 pieces (28g)',  amount: '~1.9 mg' },
    { _key: 'v7',  food: 'Moong Dal',                   quantity: '1 katori (paka)',  amount: '~1.8 mg' },
    { _key: 'v8',  food: 'Gur (Jaggery)',               quantity: '1 chammach (15g)', amount: '~1.7 mg' },
    { _key: 'v9',  food: 'Til (Sesame Seeds)',          quantity: '1 tbsp (9g)',      amount: '~1.3 mg' },
    { _key: 'v10', food: 'Amla (Indian Gooseberry)',    quantity: '2–3 piece',        amount: 'Vitamin C — iron absorption badhata hai' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Chicken Liver (cooked)', quantity: '100 gm',  amount: '~9 mg (heme iron)' },
    { _key: 'nv2', food: 'Beef/Mutton (cooked)',   quantity: '100 gm',  amount: '~3–4 mg' },
    { _key: 'nv3', food: 'Egg Yolk',               quantity: '2 ande',  amount: '~2 mg' },
  ],

  sunlightNote: 'Sunlight se iron nahi milta. Sabse zaroori tip: Iron wale khane ke saath hamesha Vitamin C lo — nimbu nichod lo, amla khao, ya orange juice peeyo. Non-heme iron ki absorption 2–3 guna badh jaati hai. Cast iron tawa/kadai mein khana pakao — tamatar curry, dal jaise acidic khane mein trace iron migrate karta hai (ICMR confirmed). Chai ya coffee khane ke kam se kam 1 ghante baad peeyo — tannins iron block karte hain. Sprouted dal/chana lo — sprouting se phytic acid kam hoti hai.',

  dailyRequirement: [
    { _key: 'd1',  ageGroup: '0–6 months',          male: '0.27', female: '0.27', pregnancy: null,  breastfeeding: null,  unit: 'mg/day (AI)' },
    { _key: 'd2',  ageGroup: '7–12 months',          male: '3',    female: '3',    pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd3',  ageGroup: '1–3 saal',             male: '8',    female: '8',    pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd4',  ageGroup: '4–6 saal',             male: '11',   female: '11',   pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd5',  ageGroup: '7–9 saal',             male: '15',   female: '15',   pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd6',  ageGroup: '10–12 saal',           male: '16',   female: '28',   pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd7',  ageGroup: '13–18 saal',           male: '26',   female: '32',   pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd8',  ageGroup: 'Adults (19–50)',        male: '19',   female: '29',   pregnancy: '27',  breastfeeding: '23',  unit: 'mg/day' },
    { _key: 'd9',  ageGroup: '51+ saal',             male: '19',   female: '19',   pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
  ],

  pregnancyInfo: {
    applicable: true,
    note: 'Iron pregnancy mein haemoglobin aur red cells badhane ke liye, placenta ke liye, aur baby ke development ke liye bilkul zaroori hai. India mein approximately 90% pregnant mahilaon ke stores iske liye insufficient hote hain. Kami se: baby ka low birth weight, neonatal anaemia, baby ka brain development delay, maternal severe thakaan aur preeclampsia ka risk. Iron + Folic Acid combination pregnancy mein standard hai — government scheme mein bhi diya jaata hai.',
    whenDoctor: 'Pregnancy mein koi bhi iron supplement lene se pehle apna doctor zaroor consult karein — dose aur type patient-specific hoti hai.',
  },

  childrenInfo: 'Bacchon mein kami ke signs: Pale skin, baar baar bimaar padna, mitti ya chalk khane ki icha (Pica — alarming sign), school mein dhyan na lagana, weight gain slow. 72% Indian infants mein anaemia ki report hai (NFHS). Daily requirement (ICMR-NIN): 6m–1y: 3 mg | 1–3y: 8 mg | 4–9y: 11–15 mg/day. Ghar pe: Ragi kheer + gur, dal ka pani, chana chaat with nimbu. IMPORTANT: Bachon mein self-medication KABHI mat karo — iron overdose unke liye bahut dangerous hai.',

  labTestInfo: {
    testName: 'Iron Profile Test / Serum Ferritin / CBC',
    testSlug: 'iron-ferritin-test',
    normalRange: 'Serum Iron: 60–170 µg/dL | Ferritin Men: 20–200 ng/mL | Women: 12–150 ng/mL | Hb Men: 13.5+ | Women: 12.0+ g/dL | TIBC: 250–450 µg/dL',
    whenToTest: 'Thakaan, paleness, hair fall symptoms pe. Pregnancy confirm hone ke baad routine check. Vegetarians mein har 6–12 mahine mein ek baar. Heavy periods wali mahilaon mein regularly.',
    repeatAfter: '3 mahine ke supplement/treatment ke baad doctor ke saath review',
    priceRange: 'Ferritin only: ₹180–₹700 | Iron Profile complete: ₹500–₹900 (Dr. Lal PathLabs & Metropolis 2024)',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Ferrous Sulphate (Ferrous Sulfate)',
      benefits: ['Sasta, widely available, effective', 'India mein government programmes mein use hota hai', 'Haemoglobin tezi se badhata hai'],
      drawbacks: ['Sabse zyada side effects — constipation, nausea, dark stools, pet mein dard', 'Khali pet nahi le sakte', 'Strong GI irritant'],
      bestFor: 'Doctor-prescribed mild-moderate anaemia treatment jab cost concern ho',
    },
    {
      _key: 'sf2',
      formName: 'Ferrous Bisglycinate (Chelated Iron)',
      benefits: ['Higher absorption — ferrous sulphate se 2–4x better bioavailability', 'Kaafi kam side effects', 'Khali pet bhi le sakte hain', 'Chai/coffee se interaction bhi kam'],
      drawbacks: ['Zyada mehanga', 'India mein limited brand options'],
      bestFor: 'Jo log ferrous sulphate se stomach upset experience karte hain; sensitive gut wale patients; hair fall focus',
    },
    {
      _key: 'sf3',
      formName: 'Iron Polymaltose Complex (IPC / Ferric Hydroxide)',
      benefits: ['Least GI side effects', 'Children aur pregnancy ke liye zyada suitable', 'Syrup form available', 'Khane ke saath bhi le sakte hain'],
      drawbacks: ['Ferrous forms se absorption thodi slow', 'Slightly mehanga'],
      bestFor: 'Bachon ke liye, pregnant mahilaon ke liye, jin logon ko khane ke saath lena ho',
    },
    {
      _key: 'sf4',
      formName: 'Ferrous Fumarate',
      benefits: ['Good iron content per tablet (33% elemental iron)', 'Stable form', 'Fast haemoglobin correction'],
      drawbacks: ['Ferrous sulphate jaisi GI side effects', 'Constipation common'],
      bestFor: 'Alternate to sulphate jab haemoglobin tezi se badhana ho',
    },
  ],

  supplementTiming: {
    bestTime: 'Subah khali pet ya khane ke 1 ghante pehle — iron khali pet zyada absorb hota hai, especially Vitamin C ke saath.',
    withFood: 'Agar stomach upset ho to khane ke thodi der baad le sakte hain — absorption thodi kam hogi lekin side effects kam honge. Ferrous Bisglycinate khali pet bhi de sakte hain.',
    note: 'Nimbu paani ya orange juice ke saath lo — Vitamin C absorption 2–3 guna badhata hai. Cast iron tawa mein khana banao. Sprouted dal/chana lo — sprouting se phytic acid kam hoti hai.',
    avoid: 'Chai ya coffee — kam se kam 1 ghante ka gap (tannins block karte hain). Doodh ya calcium — 2 ghante ka gap. Antacids (Gelusil, Digene) — 2 ghante ka gap. Thyroid medicine (Levothyroxine) — minimum 4 ghante ka gap.',
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Levothyroxine (Thyroid medicine)',              reason: 'Iron thyroid medicine ko gut mein bind kar leta hai aur absorb hone se rokta hai; kam se kam 4 ghante ka gap zaroor rakhein — ye bahut common aur important interaction hai' },
    { _key: 'di2', medicineName: 'Tetracycline / Doxycycline (Antibiotic)',        reason: 'Iron-antibiotic complex ban jaata hai, dono ka absorption gir jaata hai; antibiotic fail ho sakti hai; 2 ghante ka gap' },
    { _key: 'di3', medicineName: 'Quinolone Antibiotics (Ciprofloxacin, Norfloxacin)', reason: 'Same chelation problem — antibiotic ka absorption gir jaata hai; 2 ghante ka gap rakhein' },
    { _key: 'di4', medicineName: 'Antacids (Calcium carbonate, Aluminium hydroxide)', reason: 'Pet ka pH badhate hain jo iron absorb hone ke liye acid chahiye woh khatam karte hain; 2 ghante ka gap' },
    { _key: 'di5', medicineName: 'Bisphosphonates (Alendronate — Osteoporosis medicine)', reason: 'Iron absorption inhibit karta hai aur bisphosphonate ka bhi absorption gir sakta hai; 2 ghante ka gap' },
  ],

  combinations: {
    beneficial: [
      'Iron + Vitamin C (Nimbu/Amla/Orange) — Vitamin C ferric iron ko ferrous mein convert karta hai jo zyada absorb hoti hai; non-heme iron ka ye sabse powerful enhancer hai',
      'Iron + Folic Acid — Dono milke red blood cell production mein kaam karte hain; pregnancy mein ye combination zaroori hai',
      'Iron + Vitamin B12 — Anaemia treatment mein dono milke Hb fast badhate hain; vegetarians mein B12 ki kami bhi common hai',
    ],
    avoid: [
      'Calcium supplement ke saath — Dono ek hi gut transporter use karte hain; alag time pe lo (subah iron, raat calcium)',
      'Zinc ke saath zyada dose mein — High dose zinc iron absorption reduce karta hai; doctor se schedule lo',
      'Green tea ya chai ke saath — Tannins iron block karte hain; India mein ye sabse common mistake hai',
    ],
    timingGuide: 'Subah lo: Iron + Vitamin C (nimbu paani ke saath). Raat lo: Calcium supplement (agar le rahe hain). Gap rakhein: Iron se Thyroid medicine 4 ghante; Iron se Antacid/Chai 1-2 ghante.',
  },

  toxicity: {
    upperLimit: 'Adults ke liye 45 mg/day elemental iron — NIH Tolerable Upper Intake Level. Bachon mein 20 mg/kg se zyada serious symptoms.',
    sideEffects: [
      'Severe nausea, vomiting, pet mein dard',
      'Black/tarry stools — gut damage ka sign (thoda dark stool normal hai iron se, lekin tarry/bloody stool serious hai)',
      'Liver damage — iron liver mein store hoti hai, excess toxic hai',
      'Iron overload (Hemochromatosis) — chronic overdose mein joint pain, fatigue, organ damage',
      'Constipation ya severe diarrhoea',
    ],
    whenSerious: 'Agar 60 mg/kg se zyada iron ek baar le liya jaye — medical emergency. Khaaskar bachon mein iron tablets/syrup accidental overdose bahut dangerous hai. TURANT doctor ke paas jaao agar: vomiting mein khoon aaye, hosh kho jaaye, bacha iron tablet khaa le accidentally.',
  },

  timeline: {
    bloodLevelTime: '4–8 hafte mein haemoglobin aur serum iron levels test mein badhne lagte hain',
    symptomsTime: 'Thakaan aur chakkar: 2–4 hafte. Energy levels: 4–6 hafte. Baalon ke liye: 3–6 mahine.',
    fullRecoveryTime: 'Ferritin (iron stores) full recover hone mein 3–6 mahine lagte hain — isliye thakaan kam hone pe bhi supplement band mat karo',
    repeatTestTime: '3 mahine ke supplement ke baad doctor ke saath review zaroori hai',
    patientNote: 'Ek hafte mein fark nahi dikhega — patience zaroori hai. Supplement poore course ke liye lo, beech mein band mat karo. Ferritin bhar-ne mein time lagta hai chahe Hb normal ho jaaye.',
  },

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Ferrum Metallicum',
      patientType: 'Pale dikhte ho, thodi mehnat pe saans phool jaata ho, cheeks mein kabhi kabhi lali aati ho par zyaatar time white/washed out dikhein',
      howItHelps: 'Iron metabolism aur haemoglobin synthesis ke liye body ko stimulate karti hai; iron deficiency ke saath jo weakness aur pallor hoti hai usme commonly indicated hai',
    },
    {
      _key: 'h2',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Heavy-set constitution, zyada pasina, cold feet/hands, dairy intolerance; slow metabolism wale patients mein iron poorly absorb hoti hai',
      howItHelps: 'Absorption improvement ke saath overall metabolism ko regulate karna — isiliye nutritional deficiencies wale constitution mein use hoti hai',
    },
    {
      _key: 'h3',
      medicineName: 'China Officinalis (Cinchona)',
      patientType: 'Periods mein ya injury ke baad zyada khoon jaane ke baad ki kamzori; debility after blood loss wale patients',
      howItHelps: 'Blood loss ke baad recovery mein — weakness, pallor aur thakaan ko address karta hai; chronic blood-loss related anaemia mein helpful',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Sirf palak khane se iron ki kami dur ho jaayegi',
      truth: 'Palak mein iron hota hai lekin oxalic acid ki wajah se absorption limited hai. Palak ko nimbu (Vitamin C) ke saath khana absorption badhata hai. Sirf palak se severe anaemia theek nahi hogi — supplement zaroori ho sakta hai.',
    },
    {
      _key: 'm2',
      myth: 'Iron supplement lene se hamesha qaabz hoti hai',
      truth: 'Ferrous sulphate se constipation common hai, lekin ferrous bisglycinate ya iron polymaltose complex mein ye side effect bahut kam hota hai. Doctor se sahi form choose karo — ek hi supplement form nahi hota.',
    },
    {
      _key: 'm3',
      myth: 'Khoon ki kami sirf mahilaon ko hoti hai',
      truth: 'ICMR data ke hisab se India mein purush bhi iron deficiency se affected hote hain — khas taur pe jo gut infections, piles (haemorrhoids), ya extremely vegetarian diet follow karte hain.',
    },
    {
      _key: 'm4',
      myth: 'Gur (jaggery) ya khajoor (dates) se poori iron ki zaroorat poori ho jaati hai',
      truth: 'Gur aur khajoor iron ke achhe sources zaroor hain lekin ek adult woman ki 29 mg/day ki zaroorat ke liye bahut zyada gur khana padega. Ye supplementary foods hain, pura source nahi.',
    },
    {
      _key: 'm5',
      myth: 'Iron supplement ek baar level normal hone pe band kar do',
      truth: 'Serum iron normal ho jaane ke baad bhi ferritin (stores) bhar-ne mein 3–6 mahine lagte hain. Beech mein band karne se wapas kami ho jaati hai — full course complete karo.',
    },
  ],

  faqs: [
    { _key: 'f1',  question: 'Iron ki kami ke lakshan kya hain?', answer: 'Iron ki kami ka sabse pehla aur common lakshan hamesha rehne wali thakaan hai — thodi si mehnat pe bhi dam nikal jaana. Saath mein pale skin (chehre, haath, aankhon ke andar fika rang), baalon ka jhadna, chakkar aana, saans phoolna aur nakhunon ka patla hona bhi common signs hain. India mein ye lakshan women aur adolescent girls mein zyada dikhai dete hain periods ki wajah se.' },
    { _key: 'f2',  question: 'Iron ki kami kaise poori karein ghar pe?', answer: 'Sahi diet + ek zaroori trick se: Roz ek katora rajma ya chana + palak sabzi lo aur upar se nimbu nichod lo — Vitamin C absorption kaafi badhata hai. Ghar ka cast iron tawa use karo. Chai ya coffee khane ke 1 ghante baad peeyo. Agar symptoms zyada hain to doctor se blood test karwa ke confirm supplement lo.' },
    { _key: 'f3',  question: 'Vegetarian logon mein iron ki kami zyada kyun hoti hai?', answer: 'Vegetarian foods mein "non-heme iron" hota hai jo body mein sirf 2–20% absorb hota hai, jabki meat ke "heme iron" ka 15–35% absorb hota hai. Isliye vegetarians ko iron ki zaroorat zyada hoti hai aur absorption ke liye Vitamin C pairing zaroori hai. India ki majority vegetarian population isliye deficiency prone hai.' },
    { _key: 'f4',  question: 'Iron ki normal range kitni hoti hai?', answer: 'Serum Iron: 60–170 µg/dL normal hai. Ferritin (stored iron): Men mein 20–200 ng/mL, Women mein 12–150 ng/mL. Agar ferritin 12 se neeche jaye to iron stores khatam maan sakte hain — anaemia abhi nahi bhi ho sakta lekin kami shuru ho gayi hai. TIBC: 250–450 µg/dL.' },
    { _key: 'f5',  question: 'Iron tablet kab khana chahiye — subah ya raat?', answer: 'Subah khali pet — iron sabse best absorb hota hai empty stomach pe, especially Vitamin C ke saath (nimbu paani ya orange juice). Agar stomach upset ho to khane ke thoda baad le sakte hain — absorption thodi kam hogi par GI problem solve ho jaayegi. Ferrous bisglycinate khali pet bhi well tolerated hai.' },
    { _key: 'f6',  question: 'Iron aur calcium saath mein le sakte hain?', answer: 'Nahi — dono ek saath nahi lene chahiye. Calcium iron ki absorption block karta hai. Iron supplement subah lo, calcium supplement raat mein lo ya kam se kam 2 ghante ka gap rakhein. Pregnancy mein ye confusion common hai — doctor se clear schedule lo.' },
    { _key: 'f7',  question: 'Iron ki tablet side effects kya hain?', answer: 'Ferrous sulphate form se common side effects hain: constipation, dark/black stool (ye normal hai), nausea ya pet mein dard. Ferrous bisglycinate ya iron polymaltose mein ye side effects bahut kam hote hain. Koi bhi side effect zyada ho to doctor se supplement form change karne ko kaho.' },
    { _key: 'f8',  question: 'Pregnancy mein iron ki tablet zaroor lena chahiye kya?', answer: 'Haan — India mein government scheme ke taur pe bhi diya jaata hai. Pregnancy mein iron ki zaroorat 27 mg/day tak badh jaati hai aur akele diet se ye poori nahi hoti. Iron + Folic Acid combination pregnancy mein standard hai. Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein.' },
    { _key: 'f9',  question: 'Bachon mein iron ki kami ke signs kya hain?', answer: 'Pale skin, baar baar bimaar padna, mitti ya chalk khane ki icha (Pica), school mein dhyan na lagana, weight gain slow hona — ye sab bachon mein iron ki kami ke common signs hain. 72% Indian infants mein anaemia ki report hai. Bachon mein self-medication KABHI mat karo — iron overdose unke liye bahut dangerous hai.' },
    { _key: 'f10', question: 'Iron test kaisa hota hai? Kitna paisa lagta hai?', answer: 'Ek simple blood test hota hai — Serum Iron + Ferritin profile. Fasting ki zaroorat usually nahi hoti (doctor se confirm karo). Dr. Lal PathLabs mein Ferritin test ₹180 se shuru, Iron Profile ₹500–900 tak India mein. Ghar pe sample collection bhi available hai Metropolis aur Dr. Lal se.' },
    { _key: 'f11', question: 'Kitne din mein iron level badhta hai?', answer: 'Haemoglobin 4–8 hafte mein improve hone lagta hai regular supplement se. Ferritin (body ke stores) poori tarah recover hone mein 3–6 mahine lagte hain. Blood test 3 mahine baad repeat karo. Ek hafte ya ek mahine mein magic nahi hota — patience rakho aur full course lo.' },
    { _key: 'f12', question: 'Iron ki kami se baal kyun jhadte hain?', answer: 'Hair follicles ko growth ke liye oxygen chahiye — iron ki kami se scalp ko blood supply mein oxygen kam hoti hai aur follicles dormant ho jaate hain. Ise "Telogen Effluvium" kehte hain. Iron stores (ferritin) 40 ng/mL se upar aane ke baad hair growth normally resume hoti hai — lekin 3–6 mahine time lagta hai.' },
    { _key: 'f13', question: 'Iron aur thyroid medicine saath mein le sakte hain?', answer: 'Nahi — iron thyroid medicine (levothyroxine) ko gut mein bind karta hai aur uska absorption block kar deta hai. Dono ke beech minimum 4 ghante ka gap zaroori hai. Thyroid patients ke liye ye ek bahut common aur important interaction hai — doctor se clearly poochein.' },
    { _key: 'f14', question: 'Iron ki zyada tablet lene se kya hoga?', answer: 'Zyada iron liver, heart aur gut ko damage kar sakta hai. Side effects mein vomiting, severe diarrhea, blood in stool, aur serious cases mein organ damage ho sakta hai. Bachon mein iron tablet accidental overdose EMERGENCY hai — turant hospital jaana chahiye. Adults mein 45 mg/day se zyada regularly mat lo bina doctor ke.' },
    { _key: 'f15', question: 'Iron ki kami mein homoeopathy kaam karti hai?', answer: 'Homoeopathy iron directly replace nahi karta lekin body ki absorption capacity improve karne aur underlying cause address karne mein madadgar ho sakti hai. Ferrum Metallicum, China, Calcarea Carb — ye commonly used medicines hain iron-related weakness mein. Severe anaemia mein conventional supplement pehle zaroori hai — homoeopathy saath mein chal sakti hai. Doctor-recommended complementary approach hai, replacement nahi.' },
    { _key: 'f16', question: 'Kya cast iron tawa se iron milta hai?', answer: 'Haan — ye scientifically confirmed hai. ICMR ke mutabik cast iron cookware mein khana pakane se trace iron khane mein chali jaati hai, khaas taur pe acidic ya liquid foods jaise tamatar curry, dal. Ye supplement ka replacement nahi lekin vegetarian diet mein ek helpful addition zaroor hai.' },
    { _key: 'f17', question: 'Iron ki tablet khali pet leni chahiye ya khana khaake?', answer: 'Khali pet lena best absorption deta hai. Lekin agar ferrous sulphate se nausea ya pet mein dard ho to khane ke baad le sakte hain. Ferrous bisglycinate khali pet bhi well tolerated hai. Saath mein nimbu paani piyo — absorption maximum hogi.' },
    { _key: 'f18', question: 'Periods mein zyada iron loss hota hai kya?', answer: 'Haan — yahi India mein women mein iron ki kami ka no.1 karan hai. Heavy periods (menorrhagia) mein toh aur bhi zyada loss hota hai. Agar periods kaafi zyada ho toh gynecologist se milna zaroori hai — iron supplement ke saath underlying cause bhi treat karna hoga.' },
    { _key: 'f19', question: 'Kya ghabarahat ya anxiety bhi iron ki kami se hoti hai?', answer: 'Brain ko oxygen milna mushkil hota hai iron ki kami mein — isliye irritability, anxiety feelings, concentration problems common hain. Ye directly iron deficiency se linked hai. Iron levels normal hone ke baad ye symptoms improve hote hain.' },
    { _key: 'f20', question: 'Iron ki kami mein kya nahi khana chahiye?', answer: 'Iron wale khane ke saath: chai, coffee, doodh, antacids, calcium tablets — ye sab avoid karo ya time gap do. Phytate-rich raw seeds, bran bhi absorption thodi reduce karte hain. Nimbu, amla, orange jaisi cheezein hamesha iron ke saath lo — ye absorption badhata hai.' },
  ],

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Anaemia (Iron Deficiency)',  diseaseSlug: 'anaemia',              isAvailable: false },
    { _key: 'ld2', diseaseName: 'Hair Loss',                  diseaseSlug: 'hair-loss',             isAvailable: false },
    { _key: 'ld3', diseaseName: 'Restless Leg Syndrome',      diseaseSlug: 'restless-leg-syndrome', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Thyroid Problems',           diseaseSlug: 'thyroid',               isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin B12', vitaminSlug: 'vitamin-b12' },
    { _key: 'rv2', vitaminName: 'Calcium',     vitaminSlug: 'calcium' },
    { _key: 'rv3', vitaminName: 'Biotin',      vitaminSlug: 'biotin' },
  ],
}

async function seed() {
  console.log('🌱 Seeding Iron...')
  try {
    const result = await client.createOrReplace(iron)
    console.log('✅ Iron seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
