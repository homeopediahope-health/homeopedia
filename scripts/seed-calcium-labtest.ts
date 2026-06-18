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
  _id: 'labtest-calcium',
  _type: 'labTest',
  name: 'Calcium Test (Serum Calcium)',
  fullForm: 'Serum Total Calcium Test / S. Calcium Test',
  hindiName: 'Calcium Jaanch',
  slug: { _type: 'slug', current: 'calcium-test' },
  category: 'Blood',
  metaTitle: 'Calcium Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'Calcium test ka normal range, high/low matlab, fasting aur kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Calcium Test — jise Serum Calcium Test ya S. Calcium Test bhi kaha jata hai — ek simple blood test hai jo aapke khoon mein calcium ki matra napata hai. Ye test batata hai ki aapke body mein calcium ka level normal hai, kam hai, ya zyada hai.

Calcium (Ca) aapke body ka sabse zaroori mineral hai. Iska 99% hissa haddiyon (bones) aur danton (teeth) mein stored rehta hai. Baaki 1% khoon mein ghoomta rehta hai — aur ye chhota sa 1% bahut zaroori kaam karta hai: dil ki dhadkan, muscles ka kaam karna, nerves ka signal dena, aur blood clotting — ye sab calcium ke bina nahi hota.

Jab doctor "Calcium Test" likhta hai, to woh generally Serum Total Calcium check karta hai. Kabhi kabhi Ionized Calcium (free calcium) bhi separately check ki jaati hai — especially jab koi critical illness ho ya albumin (protein) level abnormal ho.

Socho body ek factory hai. Calcium us factory ka kaarinda hai jo haddiyaan banana, muscles chalana, aur dil ka pump theek rakhna — teeno kaam karta hai. Blood test ye check karta hai ki factory mein yeh kaarinda sahi matra mein kaam kar raha hai ya nahi.`,

  whenToTest: [
    'Baar baar muscle cramps ya twitch aana shuru ho',
    'Haath-pair mein numbness ya jhunjhunahat ho (tingling)',
    'Haddiyon mein dard ya kamzori lagti ho, ya bones fracture ho jaati hon aasaani se',
    'Kidney stones (pathri) bane hon — especially calcium oxalate stones',
    'Bahut zyada thakaan ya weakness feel ho without any reason',
    'Thyroid ya parathyroid gland ki problem suspect ho',
    'Kidney disease (CKD) ya renal failure monitor karna ho',
    'Cancer suspect ho — kuch cancers blood calcium badha dete hain',
    'Osteoporosis — haddi ki density kam hone ki bimari — track karna ho',
    'Vitamin D ki badi kami ho — Vitamin D aur Calcium ka seedha connection hai',
    'Regular steroids ya certain medicines le rahe ho jo calcium affect karti hain',
    'Routine full body checkup mein CMP panel ke part ke roop mein',
  ],

  whatItDetects: `Is test se pata chalta hai: Hypercalcemia — calcium bahut zyada (hyperparathyroidism, cancer, Vitamin D toxicity). Hypocalcemia — calcium bahut kam (hypoparathyroidism, Vitamin D deficiency, kidney disease). Osteoporosis risk — bones weak hone ka signal. Kidney function — kidneys calcium balance maintain karti hain. Parathyroid glands ka kaam — ye glands directly calcium control karti hain. Sarcoidosis ya certain cancers ki possibility.`,

  normalRanges: [
    {
      _key: 'ca-male',
      parameter: 'Adult Male',
      normalRange: '8.5 – 10.2',
      unit: 'mg/dL',
      highBrief: 'Hyperparathyroidism / Cancer',
      lowBrief: 'Vitamin D Deficiency / Hypoparathyroidism',
    },
    {
      _key: 'ca-female',
      parameter: 'Adult Female',
      normalRange: '8.5 – 10.2',
      unit: 'mg/dL',
      highBrief: 'Hypercalcemia / Sarcoidosis',
      lowBrief: 'Renal Failure / Malabsorption',
    },
    {
      _key: 'ca-elderly',
      parameter: 'Older Adults (60+ yrs)',
      normalRange: '8.5 – 10.0',
      unit: 'mg/dL',
      highBrief: 'Malignancy Risk',
      lowBrief: 'Osteoporosis Risk',
    },
    {
      _key: 'ca-child',
      parameter: 'Children (6–17 yrs)',
      normalRange: '9.0 – 11.5',
      unit: 'mg/dL',
      highBrief: 'Rare — lab investigate karein',
      lowBrief: 'Rickets / Vitamin D deficiency',
    },
    {
      _key: 'ca-newborn',
      parameter: 'Newborn / Infant',
      normalRange: '8.0 – 11.3',
      unit: 'mg/dL',
      highBrief: 'Hypercalcemia — investigate',
      lowBrief: 'Neonatal Hypocalcemia',
    },
    {
      _key: 'ca-pregnancy',
      parameter: 'Pregnancy',
      normalRange: '8.5 – 10.0',
      unit: 'mg/dL',
      highBrief: 'Investigate — doctor se milein',
      lowBrief: 'Hypocalcemia — doctor se milein',
    },
    {
      _key: 'ca-ionized',
      parameter: 'Ionized (Free) Calcium — Adults',
      normalRange: '4.7 – 5.2 (1.17–1.30)',
      unit: 'mg/dL (mmol/L)',
      highBrief: 'Critical illness / Cancer',
      lowBrief: 'Alkalosis / Hypoparathyroidism',
    },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: '8.5 – 10.0 mg/dL (ionized calcium normal rehti hai — total thoda low dikh sakta hai)',
    riskNote: `Pregnancy mein serum calcium range thodi lower dikh sakti hai — 8.5 to 10.0 mg/dL — kyunki blood mein albumin (protein) ka level naturally thoda kam ho jaata hai. Lekin actual ionized (free) calcium normal hi rehti hai.

AIIMS Delhi ke ek study (696 pregnant women, North India) mein paya gaya ki calcium deficiency pregnancy mein ek significant problem hai, especially third trimester mein. Agar calcium bahut kam ho pregnancy mein, toh baby ki bones aur aapki bones dono affect hoti hain. Doctor salah se supplementation lena zaroori hai.`,
    whenDoctor: `Doctor pregnancy mein ye test tab likhta hai: severe leg cramps, muscle spasms ya haath-pair mein jhadna (tetany symptoms), baar baar fracture ka darr ya bone density concern, pre-eclampsia monitoring mein (high BP in pregnancy), Vitamin D + Calcium supplementation ke baad response track karna, ya gestational calcium deficiency diagnose karna. Blood test khud safe hai — ek simple venipuncture.`,
  },

  highMeans: [
    'Hyperparathyroidism — parathyroid glands zyada PTH hormone banati hain jo calcium blood mein release karta hai — ye sabse common cause hai adults mein',
    'Cancer (Malignancy) — breast cancer, lung cancer, multiple myeloma, bone metastasis calcium badha dete hain',
    'Vitamin D Toxicity — zyada Vitamin D supplements lene se calcium absorption badh jaata hai',
    'Sarcoidosis — ek inflammatory disease jo calcium metabolism disturb karti hai',
    'Milk-alkali syndrome — bahut zyada milk ya antacids lena',
    'Immobilization — lambe time tak bed rest (especially fracture cases mein)',
    'Thiazide diuretics — certain BP medicines calcium retain karti hain',
    'Hyperthyroidism — thyroid overactivity bhi kabhi kabhi calcium badha sakti hai',
    'Adrenal insufficiency — rare lekin possible',
  ],

  highReassurance: `Ghabrao mat — calcium thoda high hona (10.3–11.0) aksar asymptomatic hota hai — symptoms hi nahi aate. Iska matlab ye nahi ki sab theek hai — ya sab serious hai. Doctor further investigation karega. Ek high report se koi diagnosis confirm nahi hoti — doctor se milein aur PTH, Vitamin D, aur repeat calcium test karwayein.`,

  lowMeans: [
    'Vitamin D Deficiency — India mein ye sabse common cause hai — Vitamin D calcium absorption ke liye zaroori hai',
    'Hypoparathyroidism — parathyroid glands kam PTH banati hain — thyroid surgery ke baad common',
    'Chronic Kidney Disease (CKD) — kidneys Vitamin D activate nahi kar paati, calcium absorb nahi hoti',
    "Malabsorption — Crohn's disease, celiac, ya bowel surgery ke baad body calcium absorb nahi kar paati",
    'Magnesium deficiency — magnesium kam ho toh PTH bhi properly kaam nahi karta',
    'Pancreatitis (pancreas ki sujan) — calcium pancreas ke around deposit ho sakti hai',
    'Certain medicines — phenytoin (seizure medicine), loop diuretics, certain antibiotics',
    'Low Albumin (Hypoalbuminemia) — total calcium falsely low dikh sakta hai — ionized calcium check karwayein',
    'Massive blood transfusion ya citrate-containing fluids — hospital settings mein',
  ],

  lowConcern: `Ghabrao mat — Vitamin D deficiency se low calcium India mein bahut common problem hai — supplements aur diet se theek hoti hai. Doctor se treatment plan lein. Low albumin ki wajah se calcium falsely low dikh sakta hai — doctor "Corrected Calcium" calculate karta hai: Corrected Ca = Measured Ca + 0.8 × (4.0 − Albumin g/dL).`,

  redFlags: [
    'Calcium < 7 mg/dL (report mein) — emergency level, turant hospital jaao',
    'Calcium > 13 mg/dL — medical emergency',
    'Muscle tetany — haath pair bahut akad jaayein, kaise bhi na khulein',
    'Seizures (mirgi jaisi fits) — calcium se bhi ho sakti hain',
    'Dil ki dhadkan uneven ya bahut tez/dhimi — cardiac arrhythmia',
    'Bahut zyada confusion, memory loss ya unconsciousness',
    'Severe constipation ya gastrointestinal symptoms with high calcium',
    'Kidney stones ke saath high calcium — turant nephrology consult',
  ],

  emergencyLevel: `Calcium < 6 mg/dL — medical emergency (seizures, cardiac arrest risk). Calcium > 13 mg/dL — medical emergency (coma, cardiac risk). Turant hospital jaao. Calcium < 7 ya > 12 — same day doctor visit zaroori.`,

  selfTreatWarning: `Report dekhkar khud treatment mat shuru karo — na calcium tablets lo, na Vitamin D zyada dose mein bina doctor ke. Calcium metabolism ek complicated system hai — PTH, Vitamin D, Kidney, Albumin sab connected hain. Ek trained doctor hi sahi assessment kar sakta hai.`,

  preparation: {
    fastingRequired: true,
    fastingHours: 12,
    bestTime: 'Subah 7–10 baje — khali pet — best time hai accurate result ke liye.',
    whatToEat: `Fasting mein sirf paani pi sakte ho — aur kuch nahi. Khana, chai, coffee, juice, milk — sab band rakhein fasting mein.`,
    whatToAvoid: `Agar calcium supplements lete ho — doctor se poochho ki raat ki dose band karni hai ya nahi test se pehle. Vitamin D supplements bhi doctor ke guidance mein band karo ya lelo. Thiazide diuretics, Vitamin D high dose, Antacids (calcium carbonate), Lithium, Phenytoin — in mein se koi bhi le rahe hain toh doctor ko batao.`,
    medicineNote: `Koi bhi medicine band mat karo apne aap — sirf doctor ko inform karo. Khaas taur pe: thiazide diuretics, Vitamin D high dose, calcium antacids, lithium, phenytoin. Doctor decide karega ki test se pehle koi change karna hai ya nahi.`,
    accuracyNote: `Test ek hi lab mein repeat karwao agar comparison karna ho. Agar albumin level bhi low ho toh doctor ionized calcium separately check karwa sakta hai jo zyada accurate hoga.`,
  },

  sampleInfo: {
    sampleType: 'Blood — simple venipuncture (forearm ki nadi se); Gold-top ya Red-top SST tube',
    sampleAmount: '3–5 mL blood — bahut kam, ek choti si test tube jitna',
    reportTime: 'Same day ya agle din — 4–8 ghante mein zyaadatar labs dete hain',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Calcium Test normal hai toh haddiyan pakka strong hain',
      truth: 'Blood calcium aur bone calcium alag cheez hai. Blood calcium normal reh sakta hai even when bones are losing calcium (like in early osteoporosis). Haddiyon ki density check karne ke liye DEXA Scan (Bone Densitometry) kiya jaata hai — ye calcium blood test se nahi pata chalta.',
    },
    {
      _key: 'myth2',
      myth: 'Calcium Test ke liye khali pet rehna zaroori nahi',
      truth: 'Galat — Dr. Lal PathLabs ke guidelines ke mutabiq Serum Calcium ke liye 10–12 ghante fasting zaroori hai. Bina fasting ke result thoda affected ho sakta hai.',
    },
    {
      _key: 'myth3',
      myth: 'Calcium High aaya matlab cancer hai',
      truth: 'Nahi. High calcium (hypercalcemia) ke kaafi common causes hain — hyperparathyroidism, Vitamin D toxicity, ya certain medicines — cancer ek possibility hai lekin sabse pehle aur sabse common nahi. Ghabrao mat, pehle complete evaluation lo.',
    },
    {
      _key: 'myth4',
      myth: 'Calcium tablet khane se blood calcium test normal ho jaayega',
      truth: 'Zaruri nahi. Agar cause Vitamin D deficiency hai ya kidney problem hai, toh sirf calcium tablet se kuch nahi hoga. Doctor cause diagnose karke proper treatment dega — blindly supplement mat karo.',
    },
    {
      _key: 'myth5',
      myth: 'Calcium Test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle, 2–3 second — bas itna. Zyaadatar log koi dard feel nahi karte.',
    },
    {
      _key: 'myth6',
      myth: 'Calcium Low matlab bas zyada milk peeyo — theek ho jaayega',
      truth: 'Low calcium ke kaafi causes hain — Vitamin D deficiency, kidney disease, hypoparathyroidism. Cause jaane bina treatment start karna sahi nahi. Doctor se pehle kaaran ka pata lagao.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Vitamin D Test (25-OH Vitamin D)',
      comparedTestSlug: 'vitamin-d-test',
      differencePoints: [
        'Calcium test blood mein calcium level naapata hai; Vitamin D test body mein Vitamin D level check karta hai|Calcium absorb hone ke liye Vitamin D zaroori hai — dono connected hain|Calcium low aaye toh doctor aksar Vitamin D bhi check karta hai',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'PTH Test (Parathyroid Hormone)',
      comparedTestSlug: '',
      differencePoints: [
        'Calcium test level batata hai; PTH test cause batata hai (parathyroid glands calcium ka master regulator hain)|Calcium abnormal aaye toh PTH next step hota hai cause dhundne ke liye|Dono saath mein aksar order kiye jaate hain',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'Ionized Calcium Test',
      comparedTestSlug: '',
      differencePoints: [
        'Serum Calcium total calcium naapata hai; Ionized Calcium sirf free active calcium naapata hai|Albumin low ho toh total calcium falsely low dikh sakta hai — Ionized Calcium zyada accurate hota hai|ICU ya critical illness mein Ionized Calcium preferred hota hai',
      ],
    },
  ],

  repeatInfo: `Pehli baar borderline high ya low aaya: 2–4 hafte mein repeat karwao — ek baar ka result hamesha confirm nahi hota. Treatment shuru ho gayi (Vitamin D + Calcium supplement): 3 mahine baad repeat — tabhi pata chalega supplementation kaam kar rahi hai ya nahi. Hyperparathyroidism confirm ho: doctor quarterly ya as per specialist advice repeat karwayenge. Kidney disease (CKD) patients: regular monitoring — doctor ke schedule ke mutabiq (usually har 3 months). Normal result healthy person ko: annual checkup mein ya 1–2 saal mein ek baar — unless koi specific risk factor ho.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Osteoporosis', diseaseSlug: 'osteoporosis', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Thyroid Disorders', diseaseSlug: 'thyroid', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Kidney Disease (CKD)', diseaseSlug: 'kidney-disease', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Hyperparathyroidism', diseaseSlug: 'hyperparathyroidism', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Vitamin D Deficiency', diseaseSlug: 'vitamin-d-deficiency', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Kidney Stones', diseaseSlug: 'kidney-stone', isAvailable: true },
    { _key: 'ld7', diseaseName: 'Sarcoidosis', diseaseSlug: 'sarcoidosis', isAvailable: false },
    { _key: 'ld8', diseaseName: 'Multiple Myeloma', diseaseSlug: 'multiple-myeloma', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Vitamin D Test (25-OH Vitamin D)', testSlug: 'vitamin-d-test', isAvailable: true },
    { _key: 'rt2', testName: 'KFT (Kidney Function Test)', testSlug: 'kidney-function-test', isAvailable: true },
    { _key: 'rt3', testName: 'Magnesium Test', testSlug: 'magnesium-test', isAvailable: true },
    { _key: 'rt4', testName: 'PTH Test (Parathyroid Hormone)', testSlug: 'pth-test', isAvailable: false },
    { _key: 'rt5', testName: 'Phosphorus Test', testSlug: 'phosphorus-test', isAvailable: false },
    { _key: 'rt6', testName: 'Albumin Test', testSlug: 'albumin-test', isAvailable: false },
    { _key: 'rt7', testName: 'Urine Calcium (24-hour)', testSlug: 'urine-calcium-test', isAvailable: false },
    { _key: 'rt8', testName: 'DEXA Scan / Bone Densitometry', testSlug: 'dexa-scan', isAvailable: false },
  ],

  homeopathyAngle: `Conventional treatment calcium ya Vitamin D supplement deta hai — jo symptoms manage karta hai. Lekin agar baar baar calcium levels disturb hote rehte hain — Vitamin D lene ke baawajood — toh root cause kuch aur hoga.

Homeopathy mein poori health history — aapka constitution, stress levels, digestive health, lifestyle — sab dekha jaata hai aur individual treatment plan banaya jaata hai jo underlying cause pe kaam kare. Dr. Shadab Khan ka approach individualized hai — side effects practically nil hain. Apni report lekar consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Calcium Test kya hai aur kya check karta hai?',
      answer: 'Calcium Test ek blood test hai jo aapke serum (blood) mein calcium ki matra naapata hai. Ye test batata hai ki body mein calcium normal hai, kam hai (hypocalcemia), ya zyada hai (hypercalcemia). Isse bones, nerves, muscles, aur heart ka health assess kiya jaata hai.',
    },
    {
      _key: 'faq2',
      question: 'Calcium Test ka normal range kya hai?',
      answer: 'Adults ke liye normal range 8.5 se 10.2 mg/dL hai. Children mein ye thoda zyada hota hai (9.0–11.5 mg/dL) kyunki bones grow kar rahi hoti hain. Pregnancy mein 8.5–10.0 mg/dL normal maana jaata hai. Apni lab ki reference values se hi compare karein.',
    },
    {
      _key: 'faq3',
      question: 'Calcium Test ke liye kya khali pet rehna zaroori hai?',
      answer: 'Haan, zaroori hai. Dr. Lal PathLabs ke mutabiq 10–12 ghante ki fasting chahiye — sirf paani pi sakte ho. Fasting ke bina result thoda affect ho sakta hai.',
    },
    {
      _key: 'faq4',
      question: 'Calcium Test kab subah karna chahiye ya kisi bhi waqt?',
      answer: 'Subah 7 se 10 baje ke beech best time hai — khali pet. Zyaadatar labs morning mein sample collect karti hain is test ke liye.',
    },
    {
      _key: 'faq5',
      question: 'Calcium High hone ke kya kaaran ho sakte hain?',
      answer: 'Possible causes: Hyperparathyroidism (sabse common), certain cancers, Vitamin D toxicity, sarcoidosis, kuch medicines (thiazide diuretics), ya zyada calcium antacids lena. Ghabrao mat — doctor further tests se cause confirm karega.',
    },
    {
      _key: 'faq6',
      question: 'Calcium Low hone ke kya kaaran ho sakte hain?',
      answer: 'India mein sabse common cause hai Vitamin D deficiency. Iske alawa: hypoparathyroidism, chronic kidney disease, malabsorption, low albumin, ya kuch medicines bhi calcium kam kar sakti hain.',
    },
    {
      _key: 'faq7',
      question: 'Calcium Blood Test aur Calcium Score Test mein kya fark hai?',
      answer: 'Ye dono alag tests hain. Serum Calcium Test blood mein calcium level check karta hai. Calcium Score Test (CT Calcium Scoring) dil ki arteries mein calcium deposits naapata hai — ye heart disease risk assess karta hai. Dono ka kaam alag hai.',
    },
    {
      _key: 'faq8',
      question: 'Pregnancy mein calcium normal range kitni hoti hai?',
      answer: 'Pregnancy mein 8.5–10.0 mg/dL range normal hai. Blood albumin thoda kam ho jaata hai pregnancy mein, isliye total calcium thoda low dikh sakta hai — lekin actual ionized calcium normal hoti hai. AIIMS Delhi ki study ke mutabiq India mein pregnant women mein calcium deficiency common problem hai — doctor se supplementation ke baare mein zaroor poochhin.',
    },
    {
      _key: 'faq9',
      question: 'Kya calcium test se cancer detect hota hai?',
      answer: 'Seedha nahi. Lekin high calcium (hypercalcemia) kabhi kabhi certain cancers ki wajah se ho sakta hai. Doctor agar cancer suspect kare, toh calcium test ek clue de sakta hai — lekin cancer diagnose karne ke liye alag tests hote hain. Akele calcium high hona cancer proof nahi hai.',
    },
    {
      _key: 'faq10',
      question: 'Calcium Test aur Vitamin D Test mein kya fark hai?',
      answer: 'Calcium test blood mein calcium level naapata hai. Vitamin D test (25-OH Vitamin D) body mein Vitamin D ka level check karta hai. Dono connected hain — Vitamin D calcium absorb karne mein help karta hai. Calcium low ho toh doctor aksar Vitamin D bhi check karta hai.',
    },
    {
      _key: 'faq11',
      question: 'Report time kitna hai — report kab aayegi?',
      answer: 'Generally same day ya agle din — 4 to 8 ghante mein zyaadatar NABL certified labs report de deti hain. Online portal ya app pe bhi milti hai (Dr. Lal PathLabs, Metropolis, Redcliffe Labs).',
    },
    {
      _key: 'faq12',
      question: 'Kya calcium test painful hota hai?',
      answer: 'Bilkul nahi — sirf ek chhoti needle ka 2–3 second ka touch. Blood draw bahut routine process hai. Zyaadatar patients koi special dard feel nahi karte.',
    },
    {
      _key: 'faq13',
      question: 'Calcium Serum Test kitne time mein repeat karwana chahiye?',
      answer: 'Agar borderline result aaya: 2–4 hafte mein repeat. Agar treatment chal rahi ho (Vitamin D + Calcium): 3 mahine baad. Kidney disease ya hyperparathyroidism mein: doctor ke schedule ke mutabiq — usually har 3 months.',
    },
    {
      _key: 'faq14',
      question: 'Kya Vitamin D lene se calcium automatically normal ho jaata hai?',
      answer: 'Zyaadatar cases mein Vitamin D deficiency wale patients mein Vitamin D + Calcium supplement dene se 2–3 mahine mein improvement aata hai. Lekin cause kuch aur ho (jaise parathyroid problem) toh sirf Vitamin D se nahi hoga. Doctor ek saath evaluate karega.',
    },
    {
      _key: 'faq15',
      question: 'Calcium Test se heart disease ka kya connection hai?',
      answer: 'Blood calcium test directly heart blockage nahi batata. Lekin bahut high calcium cardiac arrhythmia (dil ki dhadkan ka problem) cause kar sakta hai. Heart ke arteries mein calcium deposits check karne ke liye alag test hota hai — CT Calcium Scoring — jo ek imaging test hai, blood test nahi.',
    },
  ],
}

async function main() {
  await client.createOrReplace(calcium)
  console.log('✅ Calcium Test seeded: labtest-calcium')
}

main().catch(console.error)
