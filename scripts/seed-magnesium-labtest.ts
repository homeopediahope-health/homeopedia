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

const magnesium = {
  _id: 'labtest-magnesium',
  _type: 'labTest',
  name: 'Magnesium Test (Serum Magnesium)',
  fullForm: 'Serum Magnesium Test / Magnesium Blood Test',
  hindiName: 'Magnesium Jaanch',
  slug: { _type: 'slug', current: 'magnesium-test' },
  category: 'Blood',
  metaTitle: 'Magnesium Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'Magnesium (Serum Mg) test ka normal range 1.7-2.2 mg/dL, high/low matlab, kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Magnesium Test (Serum Magnesium Test) ek simple blood test hai jo aapke khoon mein magnesium mineral ki matra measure karta hai. Magnesium (Mg) ek zaroori mineral hai jo hamare body ke 300 se zyada enzyme reactions mein kaam aata hai — matlab muscles ki movement se lekar heart ka rhythm tak, sab kuch is mineral ke bina theek se nahi chalta.

Body mein magnesium kahan hota hai? Lagbhag 60-65% magnesium haari haddiyon (bones) mein store hota hai, 34-38% muscles aur cells ke andar hota hai, aur sirf 1-2% khoon mein circulate karta hai. Isliye blood test sirf circulating magnesium dikhata hai — poore body ka picture complete nahi hota — lekin clinical diagnosis ke liye ye test sabse common aur useful hai.

Is test ke aur bhi naam hain: Serum Magnesium Test, Magnesium Serum (Mg), Serum Mg Test, Magnesium Blood Test. Jab body mein magnesium ki kami hoti hai toh use Hypomagnesemia kehte hain. Jab zyada ho jaaye toh Hypermagnesemia. Dono conditions serious ho sakti hain — isliye ye test doctor bahut cases mein likhte hain.`,

  whenToTest: [
    'Baar baar muscle cramps (tange ya pair mein khichav) aana',
    'Haath-pair mein jhunjhunahat (tingling / numbness) mehsoos hona',
    'Dil ki dharkan irregular (palpitations) lagni',
    'Bahut zyada thakan — khaane-peene ke baad bhi energy nahi',
    'Chakkar aana ya bhool-bhulaiya (confusion) rehna',
    'Neend na aana, anxiety mehsoos karna',
    'Severe cases mein — seizures (mirgi jaisi fits)',
    'Aankh ki palkein ya muscles apne aap hiltein rehna (muscle twitching)',
    'Type 2 Diabetes hai — diabetes mein kidney se magnesium zyada baahir nikal jaata hai',
    'Kidney ki bimari hai — kidneys magnesium balance karte hain',
    'Alcohol ki laat (alcoholism) hai — alcohol magnesium absorb hone se rokta hai',
    'Gastrointestinal bimari hai — Crohn\'s disease, celiac, IBD',
    'Diuretic medicine le rahe hain — jo paani baahir karne wali dawai',
    'Pre-eclampsia ke liye magnesium sulphate treatment chal raha ho',
  ],

  whatItDetects: `Is test se pata chalta hai: body mein magnesium ki kami (deficiency) hai ya zyaada. Kidney theek se kaam kar rahi hai ya nahi (magnesium filtering). Diabetes control mein hai ya nahi. Malnutrition ya malabsorption to nahi ho raha. Treatment (magnesium supplementation) kaam kar rahi hai ya nahi.`,

  normalRanges: [
    {
      _key: 'mg-adult-male',
      parameter: 'Adults (Men)',
      normalRange: '1.7 – 2.2',
      unit: 'mg/dL',
      highBrief: 'Hypermagnesemia / Kidney problem',
      lowBrief: 'Hypomagnesemia / Deficiency',
    },
    {
      _key: 'mg-adult-female',
      parameter: 'Adults (Women)',
      normalRange: '1.7 – 2.2',
      unit: 'mg/dL',
      highBrief: 'Kidney problem / Supplement overdose',
      lowBrief: 'Deficiency / Malabsorption',
    },
    {
      _key: 'mg-pregnancy',
      parameter: 'Pregnancy',
      normalRange: '1.6 – 2.2',
      unit: 'mg/dL',
      highBrief: 'Toxicity risk — monitor closely',
      lowBrief: 'Cramps / Seizure risk',
    },
    {
      _key: 'mg-child',
      parameter: 'Children (2–18 yr)',
      normalRange: '1.7 – 2.1',
      unit: 'mg/dL',
      highBrief: 'Rare — monitor closely',
      lowBrief: 'Growth issues / Deficiency',
    },
    {
      _key: 'mg-newborn',
      parameter: 'Newborns (0–1 month)',
      normalRange: '1.5 – 2.5',
      unit: 'mg/dL',
      highBrief: 'Monitor closely',
      lowBrief: 'Rare',
    },
    {
      _key: 'mg-mmol',
      parameter: 'Adults (mmol/L units)',
      normalRange: '0.85 – 1.10',
      unit: 'mmol/L',
      highBrief: '> 1.10 mmol/L = High',
      lowBrief: '< 0.85 mmol/L = Low (PMC 2022 cutoff)',
    },
    {
      _key: 'mg-meql',
      parameter: 'Adults (mEq/L units)',
      normalRange: '1.7 – 2.2',
      unit: 'mEq/L',
      highBrief: '> 2.2 mEq/L = High',
      lowBrief: '< 1.7 mEq/L = Low',
    },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: '1.6 – 2.2 mg/dL (thoda diluted ho sakta hai blood volume badhne se)',
    riskNote: `Pregnancy mein magnesium test bahut important ho jaata hai — especially jab doctor Pre-eclampsia ke liye Magnesium Sulphate injection de raha ho. Us waqt magnesium level regularly monitor kiya jaata hai.

Blood volume badhne ki wajah se serum magnesium thoda diluted ho sakta hai. Pre-eclampsia treatment mein agar magnesium sulphate diya ja raha hai aur level 9 mg/dL se upar jaaye — toh ye toxicity ka sign hai, turant doctor monitor karte hain.`,
    whenDoctor: `Doctor pregnancy mein ye test tab likhte hain: pre-eclampsia treatment ke dauran levels check karne ke liye, agar muscle cramps ya weakness bahut zyada ho, gestational diabetes mein — kyunki diabetes magnesium waste karta hai. Ye sirf ek simple blood draw hai — bilkul safe, koi radiation nahi.`,
  },

  highMeans: [
    'Chronic Kidney Disease (CKD) ya Acute Kidney Failure — kidney magnesium nahi nikal paati, accumulate hota hai',
    'Magnesium supplements ya antacids (Milk of Magnesia) ka zyada use',
    "Addison's Disease (adrenal gland ki bimari)",
    'Diabetic Ketoacidosis (DKA) — severe uncontrolled diabetes',
    'Hypothyroidism (thyroid ki kami)',
    'Dehydration — blood concentrated ho jaata hai isliye Mg falsely high dikh sakta hai',
  ],

  highReassurance: `Ghabrao mat — high magnesium zyaadatar tab hota hai jab kidney ki bimari pehle se ho ya supplements zyada le rahe ho. Akele diet se itna zyada nahi hota. Severe high (>9 mg/dL): breathing mein takleef, cardiac risk — ye emergency hai. Lekin ye aam nahi hai — doctor se consult karo, woh cause samajhkar treatment karenge.`,

  lowMeans: [
    'Type 2 Diabetes — kidney zyada magnesium waste karti hai',
    'Alcoholism (sharab ki laat) — alcohol absorption rokta hai',
    'Malabsorption — Crohn\'s disease, celiac disease, IBD, chronic diarrhea',
    'Poor diet — green vegetables, nuts, seeds nahi khana',
    'Diuretic medicines (BP/heart ke liye water pills) — magnesium urine mein nikal jaata hai',
    'Proton Pump Inhibitors (PPI) — acidity ki dawai — long term use se deficiency',
    'Post-gastrointestinal surgery ke baad',
    'Severe malnutrition ya prolonged IV fluid therapy',
  ],

  lowConcern: `India mein low magnesium BAHUT COMMON hai — aur aksar diagnose nahi hota. Ek abnormal value se ghabrao mat — magnesium deficiency common hai aur treat ho sakti hai. Diet aur supplementation se levels improve hote hain. Pehle doctor se consult karo — kidney patients ko self-supplement nahi karna chahiye.`,

  redFlags: [
    'Muscle weakness itni zyada ho ki uthna-bethna mushkil ho',
    'Dil ki dhadkan bahut irregular ya fast lag rahi ho',
    'Breathing mein takleef aa rahi ho',
    'Seizure (fit) aa gayi ho',
    'Serum magnesium 1.0 mg/dL se neeche aaye (severe deficiency)',
    'Serum magnesium 4.0 mg/dL se upar aaye (toxicity range)',
    'Serum Mg > 9 mg/dL — Cardiac / respiratory arrest ka risk — EMERGENCY',
    'Serum Mg < 0.8 mg/dL — Seizure ka risk — turant doctor',
  ],

  emergencyLevel: `Serum Mg > 9 mg/dL — cardiac arrest / respiratory arrest ka risk — seedha hospital jaao. Serum Mg < 0.8 mg/dL — seizure ka risk — turant doctor ya emergency. Serum Mg < 1.0 ya > 4.0 — same day doctor visit zaroori.`,

  selfTreatWarning: `Report dekhkar khud koi treatment mat shuru karo. Koi bhi magnesium supplement doctor ki salah ke bina mat lo — khaas taur pe agar kidney ki bimari ho. Sirf doctor hi batayenge ki aapke case mein kya karna hai — har case alag hota hai.`,

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Subah khali pet ya breakfast ke baad dono theek hai. Lab ke instructions ke mutabik chalein.',
    whatToEat: `Zyaadatar labs mein Magnesium test ke liye FASTING zaroor nahi hoti. Aap normal khana-peena karke bhi ye test de sakte hain. Paani normal pi sakte hain — test mein koi problem nahi.`,
    whatToAvoid: `Test se 24 ghante pehle Magnesium supplements mat lo — result falsely high aa sakta hai. Alcohol 24 ghante pehle avoid karein. Agar diuretic (paani ki dawai) ya PPI (acidity ki dawai) le rahe hain — doctor ko batao.`,
    medicineNote: `Koi bhi medicine band NAHI karni apne aap — sirf doctor ko inform karo. Khaas taur pe: diuretics, PPIs, laxatives, magnesium antacids. Dr. Lal PathLabs aksar 10-12 ghante ka fasting recommend karta hai agar ye test dusre fasting tests ke saath ho — apni specific lab se confirm karo.`,
    accuracyNote: `Subah ka samay best hai — consistent hydration aur routine ke saath accurate results aate hain. Baar baar low aaye toh doctor RBC Magnesium test bhi suggest kar sakte hain jo body stores ka better indicator hai.`,
  },

  sampleInfo: {
    sampleType: 'Blood (Venous Blood — arm ki nadi se); Red top ya Gold top SST tube',
    sampleAmount: '2–3 mL blood sufficient hai',
    reportTime: 'Same day 4–6 ghante; standard 24–48 ghante; emergency 1–2 ghante',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Magnesium test ke liye hamesha khali pet rehna zaroori hai',
      truth: 'Zyaadatar cases mein fasting zaroor nahi hoti serum magnesium test ke liye. Haan, agar aur bhi fasting tests saath mein hain toh 10-12 ghante fast karo. Lekin sirf magnesium ke liye — apni lab se confirm karo.',
    },
    {
      _key: 'myth2',
      myth: 'Magnesium low hai matlab zaroor serious bimari hai',
      truth: 'Low magnesium bahut common hai — khaas taur pe jo log vegetables nahi khaate, ya diabetic hain, ya acidity ki dawai lete hain. Sirf diet aur supplements se levels normal ho jaate hain zyaadatar cases mein. Ek abnormal value se diagnosis nahi hoti.',
    },
    {
      _key: 'myth3',
      myth: 'Yeh test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle — 2-3 second ka process. Blood donation se bhi simple hai ye test. Darr bilkul nahi.',
    },
    {
      _key: 'myth4',
      myth: 'Magnesium supplement khao toh test ki zarurat nahi',
      truth: 'Supplement khane se symptom temporarily theek ho sakte hain, lekin blood test zaroori hai cause samajhne ke liye. Agar kidney ki problem hai toh supplement dangerous bhi ho sakta hai. Doctor ki salah pehle leni chahiye.',
    },
    {
      _key: 'myth5',
      myth: 'Normal range 1 hi hoti hai — sab labs mein same result aata hai',
      truth: 'Har lab ka reference range thoda alag hota hai — 1.6–2.4 ya 1.7–2.2 ya 0.7–1.0 mmol/L. Hamesha apni lab ki reference range se compare karo — dusri lab ki range mat dekho. Ye normal variation hai.',
    },
    {
      _key: 'myth6',
      myth: 'Sirf old log ya diabetics ko yeh test chahiye',
      truth: 'Koi bhi jisko baar baar muscle cramps, thakan, ya irregular heartbeat ho — unhe ye test karwana chahiye. Age matter nahi karta.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'RBC Magnesium Test',
      comparedTestSlug: '',
      differencePoints: [
        'Serum Mg blood mein circulating level batata hai; RBC Mg red cells ke andar actual body stores batata hai|Serum Mg routine screening ke liye; RBC Mg baar baar low aaye toh|RBC Mg true intracellular magnesium status ka better indicator hai',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: '24-Hour Urine Magnesium Test',
      comparedTestSlug: '',
      differencePoints: [
        'Serum Mg blood level batata hai; 24-hr Urine Mg kidney se nikalne wala Mg batata hai|Urine Mg test kidney ka role samajhne ke liye — renal wasting hai ya low intake|24-hr urine collect karna padta hai; nephrologist/specialist likhte hain',
      ],
    },
  ],

  repeatInfo: `Deficiency mein (treatment ke baad): supplements start karne ke 4–6 hafte baad repeat karein; normal aa jaaye toh 3–6 mahine mein monitor karo. Diabetes mein: har 3–6 mahine — HbA1c ke saath routine monitoring. Kidney disease (CKD) mein: doctor ke mutabik — kaafi frequent ho sakta hai. Alcoholism recovery mein: pehle har mahine, phir quarterly. Pre-eclampsia treatment mein: Magnesium Sulphate dene ke waqt har 4–6 ghante check hota hai. Normal healthy adult (no risk factors): koi routine repeat ki zarurat nahi.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Diabetes (Type 2)', diseaseSlug: 'diabetes', isAvailable: true },
    { _key: 'ld2', diseaseName: 'Kidney Disease (CKD)', diseaseSlug: 'kidney-disease', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Hypertension (High BP)', diseaseSlug: 'hypertension', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Hypothyroidism', diseaseSlug: 'hypothyroidism', isAvailable: false },
    { _key: 'ld5', diseaseName: "Crohn's Disease", diseaseSlug: 'crohns-disease', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Celiac Disease', diseaseSlug: 'celiac-disease', isAvailable: false },
    { _key: 'ld7', diseaseName: 'Alcoholism', diseaseSlug: 'alcoholism', isAvailable: false },
    { _key: 'ld8', diseaseName: 'Pre-eclampsia', diseaseSlug: 'pre-eclampsia', isAvailable: false },
    { _key: 'ld9', diseaseName: 'Cardiac Arrhythmia', diseaseSlug: 'cardiac-arrhythmia', isAvailable: false },
    { _key: 'ld10', diseaseName: 'Malnutrition', diseaseSlug: 'malnutrition', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'KFT (Kidney Function Test)', testSlug: 'kidney-function-test', isAvailable: true },
    { _key: 'rt2', testName: 'HbA1c Test', testSlug: 'hba1c', isAvailable: true },
    { _key: 'rt3', testName: 'Blood Sugar (FBS/RBS/PPBS)', testSlug: 'blood-sugar', isAvailable: true },
    { _key: 'rt4', testName: 'Vitamin D Test', testSlug: 'vitamin-d', isAvailable: true },
    { _key: 'rt5', testName: 'Serum Calcium Test', testSlug: 'serum-calcium-test', isAvailable: false },
    { _key: 'rt6', testName: 'Serum Potassium Test', testSlug: 'serum-potassium-test', isAvailable: false },
    { _key: 'rt7', testName: 'Parathyroid Hormone (PTH)', testSlug: 'pth-test', isAvailable: false },
    { _key: 'rt8', testName: 'Electrolytes Panel', testSlug: 'electrolytes-test', isAvailable: false },
  ],

  homeopathyAngle: `Conventional treatment aksar magnesium supplements ya IV therapy deta hai — jo symptoms ko theek karta hai. Lekin baar baar magnesium low aata rahe — toh root cause dhundna zaroori hai. Kya gut absorption ki problem hai? Kidney se waste ho raha hai? Ya koi chronic bimari trigger kar rahi hai?

Homeopathy individualized approach leta hai — poori health history, khane-peene ki aadat, aur body ka overall pattern dekha jaata hai. Dr. Shadab Khan ka approach aapki lifestyle, chronic conditions, aur constitution dekhkar hota hai. Side effects practically nil hote hain. Apni report lekar consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Magnesium test kya hota hai?',
      answer: 'Serum Magnesium Test ek blood test hai jo aapke khoon mein magnesium mineral ki matra naapata hai. Iska normal range adults mein 1.7–2.2 mg/dL hai. Ye test deficiency (low) ya excess (high) dono dhundne ke liye hota hai.',
    },
    {
      _key: 'faq2',
      question: 'Magnesium test normal range kya hai?',
      answer: 'Adults mein normal range 1.7 se 2.2 mg/dL (ya 0.85–1.10 mmol/L) hoti hai. Pregnancy mein thodi alag ho sakti hai — 1.6–2.2 mg/dL. Apni lab ki reference range se compare karo — har lab thodi alag ho sakti hai.',
    },
    {
      _key: 'faq3',
      question: 'Magnesium test mein fasting chahiye ya nahi?',
      answer: 'Zyaadatar labs mein fasting zaroor nahi hoti serum magnesium test ke liye. Aap normal khana-peena karke test de sakte hain. Lekin agar aur tests saath mein hain ya aapki specific lab ne kaha ho — tabhi fast karo.',
    },
    {
      _key: 'faq4',
      question: 'Magnesium test kyu kiya jaata hai?',
      answer: 'Doctor tab likhta hai jab muscle cramps, irregular heartbeat, thakan, numbness, ya seizures ho. Diabetes, kidney disease, ya alcoholism mein bhi regular monitoring ke liye ye test hota hai.',
    },
    {
      _key: 'faq5',
      question: 'Magnesium low hone ke symptoms kya hain?',
      answer: 'Leg cramps, muscle twitching, thakan, irregular heartbeat, anxiety, bhool-bhulaiya, aur numbness ya tingling common symptoms hain. Severe case mein seizures bhi ho sakte hain.',
    },
    {
      _key: 'faq6',
      question: 'Magnesium high hone ke symptoms kya hain?',
      answer: 'Muscle weakness, nausea, bahut neend aana, low BP, slow heartbeat. Ye zyaadatar kidney disease ya supplement overdose mein hota hai. Ghabrao mat — doctor se consult karo.',
    },
    {
      _key: 'faq7',
      question: 'Magnesium test ke liye kaunsa sample dena hota hai?',
      answer: 'Blood sample — arm ki nadi (vein) se. Red top ya Gold top SST tube mein 2–3 mL blood kaafi hoti hai. Bahut simple aur fast process hai.',
    },
    {
      _key: 'faq8',
      question: 'Magnesium test ki report kitne time mein aati hai?',
      answer: 'Same day 4–6 ghante mein, ya 24–48 ghante mein standard. Emergency cases mein 1–2 ghante. Online/WhatsApp report available hai major labs mein.',
    },
    {
      _key: 'faq9',
      question: 'Kya serum magnesium test accurate hota hai?',
      answer: 'Haan, serum magnesium standard clinical test hai. Lekin ek limitation hai — sirf blood ka 1-2% magnesium check hota hai. Agar baar baar low aaye toh doctor RBC Magnesium test bhi suggest kar sakte hain jo zyada complete hai.',
    },
    {
      _key: 'faq10',
      question: 'RBC Magnesium aur Serum Magnesium mein kya fark hai?',
      answer: 'Serum Magnesium circulating blood mein magnesium batata hai. RBC Magnesium red blood cells ke andar ki matra batata hai — jo actual body stores ka better indicator hai. Pehle serum test hota hai; agar baar baar low aaye, RBC test add kiya jaata hai.',
    },
    {
      _key: 'faq11',
      question: 'Pregnancy mein magnesium test safe hai?',
      answer: 'Bilkul safe hai. Sirf ek normal blood draw hai — koi radiation nahi. Pre-eclampsia treatment mein ye test regular basis pe kiya jaata hai. Ghabrao mat — routine procedure hai.',
    },
    {
      _key: 'faq12',
      question: 'Kya magnesium test ghar pe ho sakta hai?',
      answer: 'Haan — Dr. Lal PathLabs, Metropolis, Aster Labs, 1mg sab home collection offer karte hain. Ghar pe phlebotomist aata hai blood draw karne ke liye.',
    },
    {
      _key: 'faq13',
      question: 'Magnesium low hai toh kya khayein?',
      answer: 'Green leafy vegetables (paalak, methi), almonds, kaju, seeds (pumpkin, sunflower), rajma, chole, whole grains, aur dark chocolate mein magnesium zyada hota hai. LEKIN — pehle doctor se confirm karo ki supplementation chahiye ya diet se manage hoga. Kidney patients ko self-supplement nahi karna chahiye.',
    },
    {
      _key: 'faq14',
      question: 'Diuretics ya BP ki dawai se magnesium kam ho sakta hai?',
      answer: 'Haan — ye sahi hai. Furosemide, Hydrochlorothiazide jaisi diuretics kidney se magnesium zyada nikaalne ka kaam karti hain. Isliye in dawaiyon pe logon ko regular magnesium monitoring ki zarurat hoti hai. Doctor ko batao — woh magnesium supplementation add kar sakte hain.',
    },
    {
      _key: 'faq15',
      question: 'Magnesium test kitne time baad dobara karwayein?',
      answer: 'Deficiency treat ho rahi ho toh 4–6 hafte baad. Diabetes ya kidney disease mein har 3–6 mahine. Pre-eclampsia treatment mein har 4–6 ghante. Normal healthy adult mein sirf symptoms hone pe zarurat hai routine repeat ki.',
    },
  ],
}

async function main() {
  await client.createOrReplace(magnesium)
  console.log('✅ Magnesium Test seeded: labtest-magnesium')
}

main().catch(console.error)
