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

const kft = {
  _id: 'labtest-kft',
  _type: 'labTest',
  name: 'KFT Test (Kidney Function Test)',
  fullForm: 'Kidney Function Test / Renal Function Test',
  hindiName: 'Gurde Ki Jaanch',
  slug: { _type: 'slug', current: 'kidney-function-test' },
  category: 'Blood',
  metaTitle: 'KFT Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'KFT (Kidney Function Test) ka normal range, high/low matlab, kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `KFT ya Kidney Function Test ek blood test panel hai jo aapke gurdono (kidneys) ki sehat ka poora jaayza leta hai — ye check karta hai ki aapke kidneys khoon se waste sahi se saf kar rahe hain ya nahi.

KFT ka full form hai Kidney Function Test. Ise Renal Function Test (RFT) bhi kehte hain — dono ek hi test ke naam hain. Is test mein koi ek parameter nahi dekha jaata — balki ek saath kaafi saare important markers check hote hain: Serum Creatinine, Blood Urea Nitrogen (BUN), Uric Acid, eGFR (estimated Glomerular Filtration Rate), aur electrolytes jaise Sodium (Na), Potassium (K), aur Chloride (Cl).

Socho kidneys ek advanced filter ki tarah hain — roz lagbhag 180 litre khoon saaf karti hain, waste baar baar nahi chhor ti. Jab ye filter theek se kaam nahi karta, toh waste products khoon mein barhne lagte hain — aur KFT yahi pakad leta hai.

India mein chronic kidney disease (CKD) ka bahut zyada prasar ho raha hai — diabetes aur high blood pressure iske sabse bade kaaran hain. Isliye ye test aaj ke daur mein sirf bimaar logon ke liye nahi — balki 40 saal ke baad sabke liye ek zaroori routine check hai.`,

  whenToTest: [
    'Diabetes hai (Type 1 ya Type 2) — kidney damage ka sabse bada risk',
    'High blood pressure (hypertension) hai — kidneys ki blood vessels pe seedha asar',
    'Pair, chehra, ya haath mein sujan aayi hai — kidney ka waste retain karne ka sign',
    'Peshab mein jhag, khoon, ya badbu aayi ho',
    'Baar baar UTI (peshab mein jalan / infection) ho',
    'Peetha mein ya kamar ke dono taraf dard ho',
    'Bahut thakan aur kamzori feel ho',
    'Bhookh na lage, ulti jaisi feeling ho',
    'Koi surgery hone wali ho — doctor organs ka baseline check karta hai',
    'Koi nefrotoxic dawai chal rahi ho — jaise painkillers, antibiotics',
    'Diabetes ya BP ki ongoing treatment mein routine monitoring',
    'Family mein kidney disease ka itihaas ho',
    'General health checkup ke part ke taur pe — 40+ saal ke baad',
  ],

  whatItDetects: `Is test se pata chalta hai ki kidneys waste kitni efficiently saaf kar rahi hain. Khoon mein creatinine ya urea ka zaroori se zyada hona early kidney damage ka signal hai. eGFR se kidney ki actual working capacity ka andaaza lagta hai.

Electrolyte balance — heart aur muscles ke liye zaroori — bhi check hota hai. Uric acid badha hua ho toh gout ya kidney stones ka risk dikhta hai. Chronic Kidney Disease ki stage samajhna, Kidney Stones se related status, aur UTI aur infections ka kidney pe asar — sab is ek panel se pata chalta hai.`,

  normalRanges: [
    {
      _key: 'cr-male',
      parameter: 'Serum Creatinine (Purush / Male)',
      normalRange: '0.74 – 1.35',
      unit: 'mg/dL',
      highBrief: 'Kidney problem / Dehydration',
      lowBrief: 'Muscle loss / Malnutrition',
    },
    {
      _key: 'cr-female',
      parameter: 'Serum Creatinine (Mahila / Female)',
      normalRange: '0.59 – 1.04',
      unit: 'mg/dL',
      highBrief: 'Kidney damage / Dehydration',
      lowBrief: 'Malnutrition / Long illness',
    },
    {
      _key: 'bun',
      parameter: 'Blood Urea Nitrogen (BUN)',
      normalRange: '7 – 20',
      unit: 'mg/dL',
      highBrief: 'Kidney dysfunction / High protein diet',
      lowBrief: 'Liver disease / Malnutrition',
    },
    {
      _key: 'bun-cr-ratio',
      parameter: 'BUN:Creatinine Ratio',
      normalRange: '10:1 – 20:1',
      unit: 'ratio',
      highBrief: 'Dehydration / Obstruction',
      lowBrief: 'Liver issues / Low protein',
    },
    {
      _key: 'uric-male',
      parameter: 'Uric Acid (Purush / Male)',
      normalRange: '3.4 – 7.0',
      unit: 'mg/dL',
      highBrief: 'Gout / Kidney stones',
      lowBrief: 'Rare — liver issues',
    },
    {
      _key: 'uric-female',
      parameter: 'Uric Acid (Mahila / Female)',
      normalRange: '2.4 – 6.0',
      unit: 'mg/dL',
      highBrief: 'Gout / Kidney disease',
      lowBrief: 'Rare',
    },
    {
      _key: 'egfr',
      parameter: 'eGFR (Kidney filtration rate)',
      normalRange: '90 ya upar',
      unit: 'mL/min/1.73m²',
      highBrief: '— (eGFR neeche hi problem hoti hai)',
      lowBrief: 'CKD / Kidney disease',
    },
    {
      _key: 'egfr-pregnancy',
      parameter: 'eGFR (Pregnancy mein)',
      normalRange: '120 – 180',
      unit: 'mL/min/1.73m²',
      highBrief: '— (physiological increase — normal)',
      lowBrief: 'Preeclampsia risk',
    },
    {
      _key: 'sodium',
      parameter: 'Sodium (Na)',
      normalRange: '135 – 145',
      unit: 'mmol/L',
      highBrief: 'Dehydration / Kidney issue',
      lowBrief: 'Low sodium / Fluid excess',
    },
    {
      _key: 'potassium',
      parameter: 'Potassium (K)',
      normalRange: '3.5 – 5.0',
      unit: 'mmol/L',
      highBrief: 'Kidney failure / Medicines',
      lowBrief: 'Diarrhea / Vomiting',
    },
    {
      _key: 'chloride',
      parameter: 'Chloride (Cl)',
      normalRange: '96 – 106',
      unit: 'mEq/L',
      highBrief: 'Dehydration / Metabolic issue',
      lowBrief: 'Kidney / Metabolic problem',
    },
    {
      _key: 'calcium',
      parameter: 'Serum Calcium',
      normalRange: '8.5 – 10.5',
      unit: 'mg/dL',
      highBrief: 'Hyperparathyroidism / Cancer',
      lowBrief: 'CKD / Vitamin D deficiency',
    },
    {
      _key: 'phosphorus',
      parameter: 'Phosphorus',
      normalRange: '2.5 – 4.5',
      unit: 'mg/dL',
      highBrief: 'CKD / Hypoparathyroid',
      lowBrief: 'Malnutrition / Vitamin D deficiency',
    },
    {
      _key: 'cr-child',
      parameter: 'Children Creatinine (3–12 yr)',
      normalRange: '0.3 – 0.7',
      unit: 'mg/dL',
      highBrief: 'Kidney problem',
      lowBrief: 'Muscle underdevelopment',
    },
    {
      _key: 'bun-child',
      parameter: 'Children BUN (1–17 yr)',
      normalRange: '7 – 20',
      unit: 'mg/dL',
      highBrief: 'Kidney / Dehydration',
      lowBrief: 'Malnutrition',
    },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'Creatinine: 0.4–0.8 mg/dL (non-pregnant se kam); eGFR: 120–180 mL/min/1.73m²',
    riskNote: `Pregnancy mein kidneys pe kaam ka bojh naturally badh jaata hai. Glomerular filtration rate lagbhag 50% badh jaati hai — isliye creatinine aur urea ka level thoda naturally kam hota hai, jo normal hai. Agar creatinine ya protein badha hua aaye toh ghabrao mat — turant doctor se consult karo.

Preeclampsia (high BP + protein in urine) ek serious condition hai jo samay pe pakdi jaaye toh manage ho sakti hai. eGFR badha hona pregnancy mein normal physiological change hai.`,
    whenDoctor: `Doctor pregnancy mein KFT likhta hai jab: preeclampsia ka doubt ho, pehle se kidney disease ya diabetes ho, haath-pair mein zyada sujan ho, peshab mein protein detect ho, ya routine antenatal checkup ke part mein.`,
  },

  highMeans: [
    'Creatinine HIGH — Acute ya Chronic Kidney Disease (CKD): kidneys ki filtration kam ho gayi',
    'Creatinine HIGH — Dehydration: body mein paani ki kami se waste concentrate ho jaata hai',
    'Creatinine HIGH — High protein diet ya intense exercise se temporarily upar aa sakta hai',
    'Creatinine HIGH — Diabetes se kidney damage (Diabetic Nephropathy)',
    'Creatinine HIGH — High blood pressure se kidney pe asar',
    'Creatinine HIGH — NSAIDs (painkillers) ya kuch antibiotics ka zaroori se zyada use',
    'Creatinine HIGH — Urinary tract obstruction: kidney stone ya bada prostate',
    'BUN HIGH — Kidney dysfunction (sabse common), zyada protein khana, dehydration',
    'BUN HIGH — Gastrointestinal bleeding ya kuch heart/BP medicines',
    'Uric Acid HIGH — Gout: jadon mein uric acid crystals',
    'Uric Acid HIGH — Kidney stones (uric acid type), high purine diet (red meat, seafood)',
    'eGFR LOW — CKD stages 1–5, Acute kidney injury, Diabetes/BP complications',
  ],

  highReassurance: `Ghabrao mat — ek abnormal value se diagnosis nahi hoti. Creatinine temporarily dehydration, heavy exercise, ya zyada protein khane se badh sakta hai. Doctor typically ek se zyada tests karke trend dekhte hain. Lekin doctor se zaroor milein aur apni purani reports saath lekar jao.`,

  lowMeans: [
    'Creatinine LOW — Muscle mass kam hona: elderly, bedridden patients, long illness mein hota hai',
    'Creatinine LOW — Malnutrition ya protein deficiency',
    'Creatinine LOW — Pregnancy mein naturally thoda kam hona: bilkul normal hai',
    'BUN LOW — Liver ki problem: BUN liver mein banta hai; liver weak ho toh BUN kam hoga',
    'BUN LOW — Bahut kam protein khana ya excess IV fluids',
    'Potassium LOW (Hypokalemia) — Baar baar dast ya ulti; diuretic medicines (water pills)',
    'Sodium LOW (Hyponatremia) — Bahut zyada paani peena, heart/kidney/liver ki problem',
  ],

  lowConcern: `Low values ko bhi ignore mat karo. Potassium 3.0 se neeche aaye toh muscle weakness aur heart problem ka risk hota hai — turant doctor ko dikhao. Sodium 125 se neeche — emergency ho sakti hai. Sirf doctor hi context ke hisaab se bata sakta hai kya normal hai aapke liye.`,

  redFlags: [
    'Creatinine 2.0 mg/dL se zyada',
    'eGFR 30 se neeche aaye',
    'Potassium 5.5 ya upar (hyperkalemia — heart risk: arrhythmia)',
    'Potassium 3.0 se neeche (muscle weakness, irregular heartbeat)',
    'Sodium 125 se neeche ya 155 se upar — emergency',
    'Urine bilkul band ho jaaye ya bahut kam ho (oliguria/anuria)',
    'Zyada sujan — chehra, pair, haath ek saath',
    'Saas lene mein takleef + sujan ka combination',
    'Pregnancy mein BP badha ho + report mein protein ho',
    'Haath-pair mein zyada jhunjhunahat',
    'Bahut thakan jo kisi baat se theek na ho',
    'Peshab ka rang bahut dark ya khoon wala ho',
    'Seene mein dard + kidney values abnormal hoon',
  ],

  emergencyLevel: `Potassium 5.5+ ya Sodium 125 se neeche — ye emergency hain, seedha hospital jaao. Creatinine 2.0+ ya eGFR 30 se neeche — same day doctor visit zaroori. Urine bilkul band ho jaaye — immediate emergency room.`,

  selfTreatWarning: `REPORT DEKHKAR KHUD TREATMENT MAT SHURU KARO. Koi bhi painkiller, supplement, ya diet change doctor se puchhe bina mat karo — kuch medicines kidney ke liye aur bhi nuksaandeh hoti hain. Ek report se ghabrao mat — trend dekhna zaroori hota hai.`,

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Subah ka samay best hai — body overnight rested aur consistently hydrated hoti hai',
    whatToEat: `Zyaadatar KFT ke liye strict fasting zaroori nahi — aap khana khake bhi de sakte hain. Lekin agar saath mein glucose ya lipid test bhi ho toh khali pet rehna padega. Apni lab ya doctor se pehle confirm karo.`,
    whatToAvoid: `Test se ek din pehle: heavy exercise avoid karo (creatinine temporarily badhata hai), zyada red meat ya high protein khana avoid karo raat ke bhojan mein.`,
    medicineNote: `Koi bhi dawai khud band mat karo bina doctor se puchhe. Kuch medicines (NSAIDs, kuch antibiotics, ACE inhibitors) result affect kar sakti hain — doctor bata denge kya karna hai.`,
    accuracyNote: `Paani poora peena ZAROOR hai — dehydration se creatinine temporarily badh sakta hai aur galat result aa sakta hai. Same conditions mein test repeat karna better comparison deta hai.`,
  },

  sampleInfo: {
    sampleType: 'Blood (vein se) — mainly; kuch cases mein 24-hour urine ya spot urine bhi',
    sampleAmount: 'Lagbhag 3–5 mL blood — ek chhoti si tube',
    reportTime: 'Same day 4–6 ghante mein; comprehensive panels mein next day',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'KFT ke liye hamesha khali pet rehna zaroori hai',
      truth: 'KFT ke liye strict fasting necessary nahi hai. Zyaadatar cases mein khana khake bhi test ho sakta hai. Haan, agar saath mein glucose ya lipid test bhi hona ho toh doctor khali pet bolte hain. Apni lab se confirm karo.',
    },
    {
      _key: 'myth2',
      myth: 'Creatinine thoda bhi badha matlab kidneys kharab ho gayi',
      truth: 'Creatinine temporarily badh sakta hai dehydration, heavy exercise, ya zyada meat khane se — iska matlab hamesha kidney disease nahi. Doctor typically ek se zyada tests karke trend dekhte hain. Ghabrao mat — doctor se consult karo.',
    },
    {
      _key: 'myth3',
      myth: 'KFT bahut painful test hai',
      truth: 'Sirf ek chhoti needle se 2–3 mL blood liya jaata hai — 2–3 second ka process. Zyaadatar log ise bilkul sehta lete hain. Blood lene ke baad rui rakho — koi aur taklif nahi.',
    },
    {
      _key: 'myth4',
      myth: 'Uric acid badha matlab zaroor gout hai',
      truth: 'High uric acid se gout HO SAKTA hai — lekin zaroori nahi. Bahut log high uric acid ke saath bina gout ke jeete hain. Doctor symptoms aur uric acid level dono milaakar decide karta hai treatment ka.',
    },
    {
      _key: 'myth5',
      myth: 'Kidneys ek baar kharab ho gayi toh theek nahi honti',
      truth: 'Acute kidney injury mein kidneys recover kar sakti hain agar sahi treatment mile. Chronic kidney disease mein progress rok a ja sakta hai — especially diabetes aur BP control karo toh. Early detection se bahut kuch theek hota hai.',
    },
    {
      _key: 'myth6',
      myth: 'KFT normal hai toh kidneys 100% theek hain',
      truth: 'KFT early-to-mid stage kidney disease pakad leta hai, lekin bahut early damage ke liye urine protein test (microalbuminuria) zyada sensitive hota hai. Dono milaakar zyada complete picture milti hai.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'RFT (Renal Function Test)',
      comparedTestSlug: '',
      differencePoints: [
        'KFT aur RFT practically ek hi test hain — alag labs alag naam use karti hain|RFT mein bhi wohi parameters hote hain: Creatinine, BUN, eGFR, Electrolytes|Dono ka cost aur process same hota hai',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'Sirf Creatinine Test (Serum Creatinine)',
      comparedTestSlug: '',
      differencePoints: [
        'Creatinine test sirf ek parameter check karta hai|KFT mein 8–12 complete markers hote hain|Quick screening ke liye creatinine, detailed evaluation ke liye KFT',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'Urine Routine & Microscopy',
      comparedTestSlug: 'urine-routine',
      differencePoints: [
        'KFT blood mein waste levels check karta hai|Urine Routine mein protein, cells, sugar check hoti hai|Early kidney damage ke liye Urine Routine zyada sensitive; mid-to-late stage ke liye KFT|Doctor dono saath mein likhte hain zyaadatar',
      ],
    },
  ],

  repeatInfo: `Diabetes mein: har 3–6 mahine — diabetes kidney ko silently damage karta hai. High BP mein: har 6–12 mahine — BP meds ka asar bhi monitor karna hota hai. CKD diagnosis ke baad: doctor ke schedule ke hisaab se — har 1–3 mahine bhi ho sakta hai. Nephrotoxic medicines chal rahi hon: har 2–4 hafte. Surgery ke baad: 2–4 hafte mein follow-up. Normal result (no risk factors): 40–50 saal mein har saal ek baar. 50+ saal ke baad: har 6 mahine. Treatment shuru karne ke baad: usually 4–8 hafte baad repeat hota hai.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Kidney Disease / CKD', diseaseSlug: 'kidney-disease', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Kidney Stones', diseaseSlug: 'kidney-stone', isAvailable: true },
    { _key: 'ld3', diseaseName: 'UTI (Urinary Tract Infection)', diseaseSlug: 'uti', isAvailable: true },
    { _key: 'ld4', diseaseName: 'Diabetes', diseaseSlug: 'diabetes', isAvailable: true },
    { _key: 'ld5', diseaseName: 'Hypertension (High BP)', diseaseSlug: 'hypertension', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Gout', diseaseSlug: 'gout', isAvailable: false },
    { _key: 'ld7', diseaseName: 'Heart Failure', diseaseSlug: 'heart-failure', isAvailable: false },
    { _key: 'ld8', diseaseName: 'Liver Disease', diseaseSlug: 'liver-disease', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc', isAvailable: true },
    { _key: 'rt2', testName: 'HbA1c', testSlug: 'hba1c', isAvailable: true },
    { _key: 'rt3', testName: 'Blood Sugar (FBS/RBS/PPBS)', testSlug: 'blood-sugar', isAvailable: true },
    { _key: 'rt4', testName: 'Lipid Profile', testSlug: 'lipid-profile', isAvailable: true },
    { _key: 'rt5', testName: 'Vitamin D', testSlug: 'vitamin-d', isAvailable: true },
    { _key: 'rt6', testName: 'LFT (Liver Function Test)', testSlug: 'lft', isAvailable: false },
    { _key: 'rt7', testName: 'Urine Routine & Microscopy', testSlug: 'urine-routine', isAvailable: false },
    { _key: 'rt8', testName: 'Microalbuminuria Test', testSlug: 'microalbuminuria', isAvailable: false },
  ],

  homeopathyAngle: `Conventional treatment KFT numbers manage karta hai — symptoms control, medicines, dialysis planning. Homeopathy ka approach hai underlying cause address karna — woh constitution jo baar baar kidney mein problem create karta hai.

Agar KFT baar baar abnormal aaye, ya kidney function slowly decline ho raha ho, toh sirf numbers treat karna kaafi nahi. Dr. Shadab Khan ka approach individualized hai — aapki poori health history, lifestyle, aur constitution dekhkar treatment decide hota hai. Homeopathy CKD mein progression rok sakti hai aur quality of life improve kar sakti hai, side effects practically nil ke saath. Apni report lekar consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'KFT test kya hota hai?',
      answer: 'KFT ya Kidney Function Test ek blood test panel hai jo kidneys ki filtration capacity, waste products (creatinine, urea, uric acid), aur electrolytes (sodium, potassium) check karta hai. Isse pata chalta hai kidneys sahi kaam kar rahi hain ya nahi.',
    },
    {
      _key: 'faq2',
      question: 'KFT aur RFT mein kya fark hai?',
      answer: 'Practically koi fark nahi — dono ek hi test hain. Alag labs alag naam use karti hain. Kuch labs "Renal Function Test (RFT)" likhti hain, kuch "Kidney Function Test (KFT)" ya "Kidney Panel."',
    },
    {
      _key: 'faq3',
      question: 'KFT test ka normal range kya hai?',
      answer: 'Creatinine: Male 0.74–1.35 mg/dL, Female 0.59–1.04 mg/dL. BUN: 7–20 mg/dL. eGFR: 90 ya upar. Uric acid: Male 3.4–7.0, Female 2.4–6.0 mg/dL. Sodium: 135–145 mmol/L. Potassium: 3.5–5.0 mmol/L. Complete table upar dekho.',
    },
    {
      _key: 'faq4',
      question: 'KFT test ke liye khali pet rehna zaroori hai kya?',
      answer: 'Zyaadatar KFT ke liye strict fasting zaroori nahi. Lekin agar saath mein glucose ya lipid test bhi ho toh khali pet rehna padta hai. Apni lab ya doctor se pehle confirm karo.',
    },
    {
      _key: 'faq5',
      question: 'KFT mein creatinine high hai — kya kidney kharab ho gayi?',
      answer: 'Zaroor nahi. Creatinine temporarily dehydration, heavy exercise, ya zyada protein khane se badh sakta hai. Doctor trend dekhte hain — ek reading se diagnosis nahi hoti. Ghabrao mat — doctor se milein.',
    },
    {
      _key: 'faq6',
      question: 'KFT test kab karwana chahiye?',
      answer: 'Diabetes ya BP hai toh har 3–6 mahine. 40+ saal ke baad har saal ek baar routine mein. Sujan, peshab mein problem, thakan ya kamar mein dard ho toh turant.',
    },
    {
      _key: 'faq7',
      question: 'KFT test blood se hota hai ya urine se?',
      answer: 'Mainly blood test hai — vein se chhota sa sample. Kuch specific cases mein doctor urine test (24-hour urine ya spot urine) bhi likhte hain — especially protein dekhne ke liye.',
    },
    {
      _key: 'faq8',
      question: 'KFT mein eGFR kya hota hai?',
      answer: 'eGFR (Estimated Glomerular Filtration Rate) batata hai ki kidneys kitna blood per minute filter kar rahi hain. 90 ya upar normal hai. 60–89 mild reduction, 30–59 moderate CKD, 15–29 severe CKD, 15 se neeche kidney failure ki stage.',
    },
    {
      _key: 'faq9',
      question: 'Pregnancy mein KFT ki normal range alag hoti hai kya?',
      answer: 'Haan — pregnancy mein creatinine naturally kam hoti hai (0.4–0.8 mg/dL range), kyunki kidneys zyada tezi se kaam karti hain. eGFR bhi badha hota hai (120–180). Pregnancy ke liye specific reference ranges apply hoti hain.',
    },
    {
      _key: 'faq10',
      question: 'KFT mein uric acid high hai — kya gout hai?',
      answer: 'High uric acid GOUT KA RISK badhata hai — lekin zaroor nahi ki gout ho. Bahut log high uric acid ke saath bina symptoms ke hote hain. Doctor symptoms, family history, aur uric acid level milaakar decide karta hai.',
    },
    {
      _key: 'faq11',
      question: 'KFT test kitne time mein aata hai?',
      answer: 'Zyaadatar labs mein same day — 4–6 ghante mein. Kuch comprehensive panels mein next day. Major chain labs (Lal PathLabs, Metropolis, Thyrocare) pe online report app ya email se milti hai.',
    },
    {
      _key: 'faq12',
      question: 'KFT test ke liye kya preparation karein?',
      answer: 'Paani poora peena zaroori hai — dehydration avoid karo. Test se ek din pehle heavy exercise aur zyada red meat avoid karo. Koi bhi dawai band mat karo bina doctor se puchhe.',
    },
    {
      _key: 'faq13',
      question: 'KFT mein potassium high ho toh kya karna chahiye?',
      answer: 'Potassium 5.5 se upar ho toh turant doctor se milein — ye heart ke liye dangerous ho sakta hai (arrhythmia). Khud koi supplement ya diet change mat karo.',
    },
    {
      _key: 'faq14',
      question: 'Kya KFT se cancer pata chalta hai?',
      answer: 'KFT specifically cancer diagnose nahi karta. Lekin kuch cancers ya cancer ki medicines kidney function affect karti hain — jo KFT mein dikhta hai. Cancer ke liye alag specific tests hote hain.',
    },
    {
      _key: 'faq15',
      question: 'Kitne baar KFT repeat karna chahiye?',
      answer: 'Risk factors ke hisaab se alag alag. Diabetes ya CKD mein har 3–6 mahine. No risk factors, 40+ saal ke baad har saal ek baar. Doctor follow-up schedule bata denge.',
    },
    {
      _key: 'faq16',
      question: 'Kya KFT se kidney stone pata chalta hai?',
      answer: 'KFT directly stone nahi dikhata — uske liye ultrasound ya CT scan hota hai. Lekin KFT mein uric acid aur calcium levels stone ka risk batate hain. Dono milaakar complete picture milti hai.',
    },
    {
      _key: 'faq17',
      question: 'Best time of day KFT ke liye?',
      answer: 'Subah ka samay best hai — body overnight rested aur consistently hydrated hoti hai. Koi bhi alag diet ya activity nahi hoti subah, isliye results zyada accurate hote hain.',
    },
    {
      _key: 'faq18',
      question: 'KFT test kitne saal se karwana chahiye?',
      answer: '40 saal ke baad routine mein. Lekin diabetes, high BP, family history ya symptoms ho toh kisi bhi umar mein zaroor karwao.',
    },
  ],
}

async function main() {
  await client.createOrReplace(kft)
  console.log('✅ KFT (Kidney Function Test) seeded: labtest-kft')
}

main().catch(console.error)
