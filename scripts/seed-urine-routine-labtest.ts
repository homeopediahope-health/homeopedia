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

const urineRoutine = {
  _id: 'labtest-urine-routine',
  _type: 'labTest',
  name: 'Urine Routine Test (R/E)',
  fullForm: 'Urine Routine Examination / Urinalysis',
  hindiName: 'Peshab Ki Jaanch',
  slug: { _type: 'slug', current: 'urine-routine-test' },
  category: 'Urine',
  metaTitle: 'Urine Routine Test Normal Range Kya Hai? High Low Matlab Samjho (2026)',
  metaDescription: 'Urine Routine Test ki normal range, pus cells, protein, RBC ka matlab, kab karaye. Doctor-reviewed Hinglish guide. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Urine Routine Test jise Urinalysis ya Urine R/E bhi kehte hain ek basic aur bahut zaroori lab test hai jo aapke peshab ke physical, chemical aur microscopic properties check karta hai. Ye test sirf UTI ke liye nahi hota, kidneys, liver, diabetes aur kai aur health conditions ka pehla hint bhi yahi test deta hai.

Isme teen cheezein check hoti hain. Pehla physical examination jisme peshab ka rang, saafai aur smell dekhi jaati hai. Doosra chemical examination jisme ek reagent strip peshab mein duboyi jaati hai jisse protein, glucose, ketones, pH, bilirubin aur leukocytes ka pata chalta hai. Teesra microscopic examination jisme peshab ko microscope se dekha jaata hai aur RBC, WBC, pus cells, bacteria, crystals aur casts check hote hain.

Simple bhasha mein jaisa ek doctor aapki pulse aur temperature check karta hai, waise hi urine routine test aapke kidneys aur urinary system ka pulse check hai.`,

  whenToTest: [
    'Baar baar peshab aata ho ya peshab karte waqt jalan ho',
    'Peshab mein khoon dikhe yaani laal ya pink color aaye',
    'Peshab ka rang bahut dark ho ya badbu aaye',
    'Pet ya peeth ke nichle hisse mein dard ho',
    'Diabetes ya kidney disease ki monitoring karni ho',
    'Pregnancy mein routine check-up ke liye, har antenatal visit pe hota hai',
    'Surgery se pehle routine screening ke liye',
    'Bukhar ya thakaan ka koi reason samajh na aaye',
    'Aankhon ke neeche ya pairon mein sujan ho',
  ],

  whatItDetects: `Is test se pata chalta hai: UTI hai ya nahi (pus cells aur bacteria se), kidney ki bimari (protein ya RBC se), diabetes (glucose ki presence se), liver ki takleef (bilirubin se), kidney stones (crystals se), dehydration (specific gravity aur color se), aur preeclampsia pregnancy mein (protein se).

Agar body mein sujan, joint pain ya infection ka doubt ho toh doctor ye test likhta hai. Report se pata chalta hai ki UTI hai, kidney pe stress hai ya koi metabolic issue hai.`,

  normalRanges: [
    { _key: 'color',       parameter: 'Color',                  normalRange: 'Pale to Dark Yellow', unit: 'N/A',  highBrief: 'Dark: Dehydration / Liver', lowBrief: 'Colorless: Zyada paani' },
    { _key: 'clarity',     parameter: 'Clarity / Appearance',   normalRange: 'Clear (Saaf)',        unit: 'N/A',  highBrief: 'Cloudy: Infection / Crystals', lowBrief: 'N/A' },
    { _key: 'ph',          parameter: 'pH (Acid/Alkali)',        normalRange: '4.5 – 8.0',          unit: 'N/A',  highBrief: 'Infection / Vegetarian diet', lowBrief: 'Acidic: Diabetes' },
    { _key: 'sp-gravity',  parameter: 'Specific Gravity',        normalRange: '1.005 – 1.030',      unit: 'N/A',  highBrief: 'Dehydration',               lowBrief: 'Kidney dysfunction' },
    { _key: 'protein',     parameter: 'Protein (Albumin)',       normalRange: 'Negative',            unit: 'N/A',  highBrief: 'Kidney damage / Preeclampsia', lowBrief: 'N/A' },
    { _key: 'glucose',     parameter: 'Glucose (Sugar)',         normalRange: 'Negative',            unit: 'N/A',  highBrief: 'Diabetes / High blood sugar', lowBrief: 'N/A' },
    { _key: 'ketones',     parameter: 'Ketones',                 normalRange: 'Negative',            unit: 'N/A',  highBrief: 'Diabetes / Fasting',        lowBrief: 'N/A' },
    { _key: 'bilirubin',   parameter: 'Bilirubin',               normalRange: 'Negative',            unit: 'N/A',  highBrief: 'Liver disease / Jaundice',  lowBrief: 'N/A' },
    { _key: 'urobili',     parameter: 'Urobilinogen',            normalRange: '0.5 – 1.0',           unit: 'mg/dL',highBrief: 'Liver disease / Hemolysis', lowBrief: 'Bile duct blockage' },
    { _key: 'nitrites',    parameter: 'Nitrites',                normalRange: 'Negative',            unit: 'N/A',  highBrief: 'Bacterial UTI',             lowBrief: 'N/A' },
    { _key: 'leuko',       parameter: 'Leukocyte Esterase',      normalRange: 'Negative',            unit: 'N/A',  highBrief: 'Infection / Inflammation',  lowBrief: 'N/A' },
    { _key: 'blood',       parameter: 'Blood (RBC)',             normalRange: 'Negative / 0-3',      unit: '/HPF', highBrief: 'Stones / Infection / Injury', lowBrief: 'N/A' },
    { _key: 'pus-women',   parameter: 'Pus Cells / WBC (Women)',  normalRange: '0 – 5',             unit: '/HPF', highBrief: 'UTI / Kidney infection',    lowBrief: 'N/A' },
    { _key: 'pus-men',     parameter: 'Pus Cells / WBC (Men)',    normalRange: '0 – 3',             unit: '/HPF', highBrief: 'UTI / Kidney infection',    lowBrief: 'N/A' },
    { _key: 'rbc',         parameter: 'RBC (Red Blood Cells)',   normalRange: '0 – 2',               unit: '/HPF', highBrief: 'Stones / Infection / Kidney', lowBrief: 'N/A' },
    { _key: 'epithelial',  parameter: 'Epithelial Cells',        normalRange: 'Few (0-5)',            unit: '/HPF', highBrief: 'Contamination / Infection', lowBrief: 'N/A' },
    { _key: 'casts',       parameter: 'Casts',                   normalRange: '0-5 Hyaline',         unit: '/LPF', highBrief: 'Granular: Kidney disease',  lowBrief: 'N/A' },
    { _key: 'bacteria',    parameter: 'Bacteria',                normalRange: 'Absent',              unit: 'N/A',  highBrief: 'UTI, culture zaroori',      lowBrief: 'N/A' },
    { _key: 'crystals',    parameter: 'Crystals',                normalRange: 'Occasionally present', unit: 'N/A', highBrief: 'Kidney stones risk',        lowBrief: 'N/A' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'Pus Cells: up to 10/HPF, Protein: Negative, Sugar: Negative, RBC: 0-2/HPF',
    riskNote: `Pregnancy mein urine routine test almost har antenatal visit pe hota hai kyunki pregnant women mein UTI ka risk zyada hota hai. Hormonal aur anatomical changes ki wajah se infection jaldi ho sakta hai.

Preeclampsia ek dangerous pregnancy condition hai jisme protein urine mein aata hai aur sirf is test se pata chalta hai. Gestational diabetes mein glucose urine mein dikh sakta hai.

Protein positive aur BP high ek saath aaye toh turant doctor ko dikhao. Pus cells 10 se upar aur jalan ho toh UTI hai jo pregnancy mein turant treat karna zaroori hai.`,
    whenDoctor: 'Test bilkul safe hai pregnancy mein, sirf urine sample dena hota hai koi needle nahi. Har antenatal visit pe dena chahiye.',
  },

  highMeans: [
    'Protein high (Proteinuria): possible kidney damage, preeclampsia pregnancy mein, ya diabetes ki wajah se kidney pe load',
    'Pus Cells / WBC high (Pyuria): UTI sabse common wajah hai, possible kidney infection (pyelonephritis) ya bladder infection',
    'RBC high (Hematuria): kidney stones, UTI, kidney disease ya injury. Women mein menstruation ki wajah se bhi aa sakta hai',
    'Glucose high: possible uncontrolled diabetes, blood sugar bahut high hone pe glucose urine mein spill hota hai',
    'pH high (above 8): UTI (kuch bacteria urine alkaline karte hain), bahut zyada vegetables ya antacids',
    'Bilirubin high: possible liver disease, jaundice ya bile duct blockage',
    'Specific Gravity high (above 1.030): dehydration sabse common reason',
  ],

  highReassurance: 'Ye sabke possible reasons hain. Ek report se koi diagnosis nahi hoti. Doctor sab symptoms dekhkar decision lete hain. Ghabrao mat.',

  lowMeans: [
    'Specific Gravity low (below 1.005): possible kidney mein concentration problem, zyada paani peena ya Diabetes Insipidus (rare)',
    'pH low (below 4.5): bahut acidic urine, possible uncontrolled diabetes ya high protein diet',
    'Urobilinogen low ya absent: bile duct block ho sakta hai ya kuch medicines ka asar',
  ],

  lowConcern: 'Agar koi parameter negative hai ya normal range mein hai toh ye achi baat hai. Ghabrao mat. Low values sirf specific conditions mein concern hoti hain, doctor context mein dekhte hain.',

  redFlags: [
    'Peshab mein saaf khoon dikhe ya peshab bilkul laal ho',
    'Tez bukhar (102 degree F se upar) ke saath peshab mein jalan',
    'Kamar ya peeth mein ek taraf tez dard aur bukhar ek saath ho (kidney infection possible)',
    'Protein 3+ ya 4+ aaye report mein, khaaskar pregnancy mein',
    'Pus cells 50 se upar ya bahut zyada aaye',
    'Peshab bilkul band ho jaaye ya bahut kam aaye',
  ],

  emergencyLevel: 'Protein positive aur BP high pregnancy mein ek saath aaye toh turant doctor ke paas jaao, preeclampsia emergency ho sakti hai. Peshab bilkul band ho jaaye toh bhi turant jaana zaroori hai.',

  selfTreatWarning: 'Report dekhkar khud treatment mat shuru karo. Har abnormal report ka matlab bimari nahi hoti, context zaroori hota hai. Doctor ko hi report dikhao.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Subah ki pehli peshab (first morning urine) sabse acchi hoti hai kyunki ye sabse concentrated hoti hai aur sab parameters clearly detect hote hain',
    whatToEat: 'Koi restriction nahi hai. Normal khaana theek hai. Normal paani peena okay hai lekin bahut zyada mat piyo warna sample dilute ho jaata hai.',
    whatToAvoid: 'Beet (chukandar) ek raat pehle mat khao kyunki urine red ya pink ho sakta hai. Kala jamun aur blueberries bhi color badal sakte hain. Bahut zyada paani turant pehle mat piyo.',
    medicineNote: 'Koi specific medicine le rahe hain toh doctor se puchho. Vitamin C supplements report ko affect kar sakti hain. Khud se koi medicine mat band karo.',
    accuracyNote: 'Sample clean container mein dena zaroori hai. Pehle thoda peshab flush karein phir beech wala sample lein, isse contamination kam hoti hai. Mahilaon ko perineal area saaf karke sample dena chahiye.',
  },

  sampleInfo: {
    sampleType: 'Fresh Urine (Peshab). Koi needle ya injection nahi, bilkul safe.',
    sampleAmount: '30 se 60 mL, lagbhag 2 se 3 tablespoon. Lab clean container deta hai.',
    reportTime: 'Same day ya 2 se 4 ghante mein. Home collection mein 48 se 72 ghante.',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Urine test ke liye khali pet rehna zaroori hai',
      truth: 'Urine Routine Test ke liye fasting zaroori nahi hai. Khaane ke baad bhi de sakte ho. Haan, agar saath mein blood sugar test bhi ho toh woh fasting pe hoga.',
    },
    {
      _key: 'myth2',
      myth: 'Pus cells 2 se 3 aaye toh UTI confirm hai',
      truth: '0 se 5 pus cells per HPF normal range mein hai. Sirf 5 se 10 se upar aur symptoms hone pe UTI consider hota hai. Akele report se diagnosis nahi hoti, doctor symptoms bhi dekhta hai.',
    },
    {
      _key: 'myth3',
      myth: 'Protein trace aaye toh kidney fail ho rahi hai',
      truth: 'Trace protein kabhi kabhi dehydration ya exercise ki wajah se bhi aata hai. Ye kidney failure ki sign nahi hai. Doctor repeat test ya further evaluation decide karta hai.',
    },
    {
      _key: 'myth4',
      myth: 'Ye test bahut painful hota hai',
      truth: 'Bilkul nahi, sirf fresh peshab sample dena hota hai. Koi injection ya needle nahi lagti.',
    },
    {
      _key: 'myth5',
      myth: 'Urine routine test se pregnancy detect hoti hai',
      truth: 'Nahi. Pregnancy detect karne ke liye alag Urine Pregnancy Test (UPT) hota hai jo hCG hormone check karta hai. Urine routine test mein hCG check nahi hota.',
    },
    {
      _key: 'myth6',
      myth: 'Dark urine matlab liver fail ho gayi',
      truth: 'Dark urine ka sabse common reason dehydration hai. Zyada paani piyo aur check karo. Agar dark urine ke saath aankhon mein panapan aur thakaan bhi ho tab doctor ko dikhao.',
    },
    {
      _key: 'myth7',
      myth: 'Ek baar test normal aaya toh ab koi zarurat nahi',
      truth: 'Health conditions change hoti rehti hain. Diabetes aur kidney disease patients ko regular monitoring chahiye. Pregnancy mein har visit pe hota hai. Healthy logo ko bhi annual checkup mein shamil karna chahiye.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Urine Culture & Sensitivity Test',
      comparedTestSlug: 'urine-culture-sensitivity',
      differencePoints: [
        'Kya check karta hai | Color, pH, cells, protein, sugar | Exact bacteria ka naam aur antibiotic sensitivity',
        'Kab use hota hai | Screening, UTI suspect, kidney check | Confirmed UTI diagnosis ya antibiotic selection',
        'Report time | 2 se 4 ghante | 2 se 3 din',
        'Fasting | Zaroori nahi | Zaroori nahi',
        'Bacteria identify | Sirf present hai ya nahi | Haan, exact bacteria naam',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'Urine Pregnancy Test (UPT)',
      comparedTestSlug: 'urine-pregnancy-test',
      differencePoints: [
        'Kya check karta hai | Cells, protein, sugar, RBC, bacteria | hCG hormone (pregnancy)',
        'Kab use hota hai | UTI, kidney, diabetes, liver check | Pregnancy confirm karna',
        'Report time | 2 se 4 ghante | 5 se 10 minute',
        'Fasting | Zaroori nahi | Zaroori nahi',
        'Pregnancy detect karta hai | Nahi | Haan',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'KFT (Kidney Function Test)',
      comparedTestSlug: 'kidney-function-test',
      differencePoints: [
        'Kya check karta hai | Peshab ke cells aur chemicals | Blood mein kidney markers (creatinine, urea)',
        'Sample | Urine | Blood',
        'Kidney check ke liye | First screening step | Detailed function assessment',
        'Fasting | Zaroori nahi | Generally nahi',
        'Kab saath hota hai | Aksar dono ek saath likhte hain | Urine mein protein ya RBC aaye toh KFT bhi',
      ],
    },
  ],

  repeatInfo: `UTI treatment ke baad 7 se 14 din baad repeat karo yeh confirm karne ke liye ki infection gaya ya nahi.

Pregnancy mein har antenatal visit pe yaani usually har 4 hafte. Doctor schedule batayega.

Diabetes monitoring mein 3 se 6 mahine mein ek baar ya jab doctor kahe.

Kidney disease mein doctor ke guidance ke hisaab se, monthly ya quarterly.

Completely healthy log saal mein ek baar annual checkup mein karwao.

Abnormal result ke baad doctor jab bole tabhi repeat karo, khud se decide mat karo.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'UTI (Urinary Tract Infection)', diseaseSlug: 'uti-urinary-tract-infection', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Kidney Disease (Nephritis / CKD)', diseaseSlug: 'kidney-disease', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Diabetes Mellitus', diseaseSlug: 'diabetes-mellitus', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Kidney Stones (Nephrolithiasis)', diseaseSlug: 'kidney-stones', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Liver Disease / Jaundice', diseaseSlug: 'liver-disease', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Hypertension (BP)', diseaseSlug: 'hypertension', isAvailable: false },
    { _key: 'ld7', diseaseName: 'Preeclampsia (Pregnancy)', diseaseSlug: 'preeclampsia', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Urine Culture & Sensitivity Test', testSlug: 'urine-culture-sensitivity', isAvailable: false },
    { _key: 'rt2', testName: 'KFT (Kidney Function Test)', testSlug: 'kidney-function-test', isAvailable: false },
    { _key: 'rt3', testName: 'Fasting Blood Sugar / HbA1c', testSlug: 'fasting-blood-sugar', isAvailable: false },
    { _key: 'rt4', testName: 'LFT (Liver Function Test)', testSlug: 'liver-function-test-lft', isAvailable: true },
    { _key: 'rt5', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc-test', isAvailable: true },
    { _key: 'rt6', testName: 'Uric Acid Test', testSlug: 'uric-acid-test', isAvailable: true },
  ],

  homeopathyAngle: `Ek abnormal report ek signal hai, diagnosis nahi. Ghabrao mat.

Sabse pehla kadam hai apni report lekar qualified doctor se milna. Conventional treatment infection ya symptoms ko address karta hai jo zaroori bhi hai, khaaskar UTI mein antibiotics important hain.

Agar reports baar baar abnormal aati hain yaani UTI recurrent ho ya protein ya RBC baar baar aaye toh root cause dhundna zaroori hai. Homeopathy isi direction mein kaam karti hai. Poori health history aur individual constitution dekha jaata hai, sirf symptoms nahi. Immune system strengthen karna aur body ki natural healing enhance karna in mein homeopathy supportive role nibha sakti hai.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Urine Routine Test kya hota hai?',
      answer: 'Urine Routine Test (Urine R/E) ek basic diagnostic test hai jo peshab ke physical, chemical aur microscopic properties check karta hai. Ismein color, pH, protein, sugar, pus cells, RBC aur bacteria ka analysis hota hai. Kidneys, liver, diabetes aur infections ka early hint milta hai.',
    },
    {
      _key: 'faq2',
      question: 'Urine Routine Test kyun kiya jaata hai?',
      answer: 'Doctor ye test likhta hai jab UTI ka doubt ho, peshab mein jalan ya khoon ho, kidney, liver ya diabetes monitor karni ho, ya pregnancy check-up ke hisse ke roop mein. Surgery se pehle bhi routine mein hota hai.',
    },
    {
      _key: 'faq3',
      question: 'Urine Routine Test mein kya kya check hota hai?',
      answer: 'Ismein check hota hai: peshab ka color aur saafai, pH, specific gravity, protein, glucose, ketones, bilirubin, pus cells (WBC), RBC, epithelial cells, bacteria aur crystals.',
    },
    {
      _key: 'faq4',
      question: 'Pus cells ki normal range kya hoti hai?',
      answer: 'Pus cells ki normal range hai 0 se 5 per HPF women ke liye aur 0 se 3 per HPF men ke liye. Pregnancy mein 10 per HPF tak acceptable hai. 10 se upar aur symptoms hon toh UTI possible hai.',
    },
    {
      _key: 'faq5',
      question: 'Protein trace aaye toh kya matlab hai?',
      answer: 'Trace protein usually koi serious problem nahi hoti. Dehydration ya intense exercise se bhi aa sakta hai. Lekin agar baar baar aaye ya symptoms hon toh doctor further test karte hain. Khud se ghabrao mat.',
    },
    {
      _key: 'faq6',
      question: 'Urine Routine Test ke liye fasting chahiye?',
      answer: 'Nahi, ye test bina fasting ke hota hai. Khaana khane ke baad bhi de sakte hain. Agar saath mein blood fasting sugar test ho toh sirf blood test ke liye fasting follow karein.',
    },
    {
      _key: 'faq7',
      question: 'Peshab ka sample kab dena chahiye?',
      answer: 'Subah ki pehli peshab (first morning urine) sabse accurate hoti hai. Ye sabse concentrated hoti hai aur sab parameters clearly detect hote hain.',
    },
    {
      _key: 'faq8',
      question: 'Kitna peshab dena hota hai?',
      answer: '30 se 60 mL yaani roughly 2 se 3 tablespoon. Lab clean container deta hai. Sample lene se pehle thoda flush karein aur beech wala sample lein.',
    },
    {
      _key: 'faq9',
      question: 'Report mein RBC 2 se 3 aaye toh kya karna chahiye?',
      answer: '0 se 2 per HPF normal hai. 3 se 5 borderline hai. Agar koi symptoms nahi hain toh ek baar repeat karein. Agar 5 se upar aaye ya symptoms hon jaise jalan, dard, kamar dard toh doctor ko dikhao.',
    },
    {
      _key: 'faq10',
      question: 'Kya Urine Routine Test se pregnancy detect hoti hai?',
      answer: 'Nahi. Pregnancy detect karne ke liye Urine Pregnancy Test (UPT) hota hai jo hCG hormone check karta hai. Urine Routine Test aur UPT bilkul alag tests hain.',
    },
    {
      _key: 'faq11',
      question: 'Urine Routine Test aur Urine Culture mein kya fark hai?',
      answer: 'Urine Routine Test screen karta hai ki infection hai ya nahi. Urine Culture confirm karta hai ki kaun sa bacteria hai aur kaun sa antibiotic kaam karega. Agar routine mein bacteria dikhe toh doctor culture order karta hai.',
    },
    {
      _key: 'faq12',
      question: 'Kya baar baar UTI hona normal hai?',
      answer: 'Nahi. Agar saal mein 2 se 3 baar UTI ho toh recurrent UTI hai. Iska root cause dhundna zaroori hai. Doctor detailed evaluation karte hain jisme urine culture, ultrasound aur kabhi kabhi cystoscopy bhi hoti hai.',
    },
    {
      _key: 'faq13',
      question: 'Pregnancy mein Urine Routine Test kab kab hota hai?',
      answer: 'Har antenatal visit pe yaani usually pehle trimester mein ek baar, doosre mein ek baar, teesre mein zyada frequently. Doctor schedule batata hai. Main purpose UTI aur preeclampsia (protein) detect karna hai.',
    },
    {
      _key: 'faq14',
      question: 'Specific Gravity 1.030 se upar aaye toh kya matlab?',
      answer: 'Urine bahut concentrated hai, most likely dehydration ki wajah se. Zyada paani piyo aur next sample mein normal ho jaata hai. Agar consistent rahta hai symptoms ke saath toh doctor kidney function check karta hai.',
    },
    {
      _key: 'faq15',
      question: 'Urine mein glucose (sugar) aaye toh kya karna chahiye?',
      answer: 'Urine mein glucose ka matlab hai blood sugar probably bahut high hai. Turant Fasting Blood Sugar aur HbA1c test kara ke doctor se milo. Ghabrao mat, ye action ka signal hai.',
    },
    {
      _key: 'faq16',
      question: 'Report online milti hai?',
      answer: 'Haan, Dr Lal PathLabs, Metropolis, SRL, Thyrocare jaise major NABL labs email ya mobile app pe report dete hain. Home collection mein 24 se 48 ghante mein online report aa jaati hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya paani peene ke baad bhi test de sakte hain?',
      answer: 'Haan, normal paani peena theek hai. Bahut zyada paani peene se sample dilute ho jaata hai jo results thoda affect kar sakta hai. Normal hydration best hai.',
    },
    {
      _key: 'faq18',
      question: 'Kya Urine Routine Test se STI detect hoti hai?',
      answer: 'Direct STI diagnose nahi karta. Lekin agar bacteria ya high WBC symptoms ke saath aaye toh doctor specific STI tests order kar sakte hain. Wo ek alag test hota hai.',
    },
    {
      _key: 'faq19',
      question: 'Crystal aaye report mein toh kya matlab hai?',
      answer: 'Occasional crystals normal ho sakta hai. Zyada crystals aur symptoms jaise peeth dard ya peshab mein jalan ke saath kidney stones possible hain. Doctor ultrasound suggest karte hain.',
    },
    {
      _key: 'faq20',
      question: 'UTI treatment ke baad test kab repeat karna chahiye?',
      answer: 'UTI treatment ke 7 se 14 din baad repeat karo. Ye ensure karta hai infection gaya ya nahi. Agar symptoms pehle wapas aaye toh immediately doctor ko dikhao, wait mat karo.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(urineRoutine)
    console.log('✅ Urine Routine Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
