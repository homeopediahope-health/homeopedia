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

const uricAcid = {
  _id: 'labtest-uric-acid',
  _type: 'labTest',
  name: 'Uric Acid Test (Serum)',
  fullForm: 'Serum Uric Acid Test',
  hindiName: 'Yurik Aesid Jaanch',
  slug: { _type: 'slug', current: 'uric-acid-test' },
  category: 'Blood',
  metaTitle: 'Uric Acid Test Normal Range Kya Hai? High Low Matlab Samjho (2026)',
  metaDescription: 'Uric Acid normal range: Men 3.5–7.2 mg/dL, Women 2.6–6.0 mg/dL. High ya low hone ka matlab, gout se connection, kab test karaye. Doctor-reviewed. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Uric Acid Test ek simple blood test hai jo aapke khoon mein uric acid ki maatra maapata hai. Uric acid ek waste product hota hai jo purine naam ke chemicals ke tutne par banta hai.

Purine naturally aapke body cells mein hota hai aur kuch khaane wali cheezein jaise red meat, seafood, daal aur alcohol mein bhi hota hai. Normal condition mein uric acid kidneys filter karke urine ke zariye bahar nikal dete hain.

Jab uric acid zyada ban jaaye ya kidneys usse theek se filter na kar sakein toh ye khoon mein badh jaata hai. Isko hyperuricemia kehte hain. Ye excess uric acid joints mein crystals bana leta hai jisse gout jaisi takleef hoti hai.

Is test ko Serum Uric Acid Test ya S. Uric Acid bhi kaha jaata hai. Report mein ye hi naam milta hai. Simple blood test hai, jaldi ho jaata hai.`,

  whenToTest: [
    'Joints mein dard, sujan ya laalgi ho, khaaskar angutho, ghutno ya tokhno mein',
    'Gout ka doubt ho ya gout ka ilaaj chal raha ho',
    'Baar baar kidney stones (pathri) ban rahi hon',
    'Kidney ki bimari ya kidney function check karna ho',
    'Cancer ka ilaaj (chemotherapy) chal raha ho',
    'Diabetes, high blood pressure ya motapa ho aur metabolic check karni ho',
    'Routine health checkup mein kidney ya metabolic panel include ho',
  ],

  whatItDetects: `Is test se pata chalta hai ki gout hai ya nahi, kidneys uric acid sahi se filter kar rahi hain ya nahi, chemotherapy ke baad uric acid dangerous level pe toh nahi pahuncha, aur kidney stones ka karan uric acid toh nahi hai.

Agar body mein sujan, joint pain ya infection ka doubt ho toh doctor ye test likhta hai. Report se pata chalta hai ki gout hai, kidney pe stress hai ya koi metabolic issue hai.`,

  normalRanges: [
    { _key: 'male',         parameter: 'Adult Male',               normalRange: '3.4 – 7.0',  unit: 'mg/dL', highBrief: 'Gout / Kidney stress',    lowBrief: 'Liver issue / Rare' },
    { _key: 'female',       parameter: 'Adult Female',             normalRange: '2.4 – 6.0',  unit: 'mg/dL', highBrief: 'Gout risk / Metabolic',   lowBrief: 'Low purine / Medicines' },
    { _key: 'postmeno',     parameter: 'Female (Post-menopause)',  normalRange: '3.4 – 7.0',  unit: 'mg/dL', highBrief: 'Gout risk higher',        lowBrief: 'Rare' },
    { _key: 'children',     parameter: 'Children',                 normalRange: '3.0 – 5.5',  unit: 'mg/dL', highBrief: 'Rare metabolic issue',    lowBrief: 'Very rare' },
    { _key: 'teenagers',    parameter: 'Teenagers',                normalRange: '4.0 – 6.0',  unit: 'mg/dL', highBrief: 'Diet / metabolic check',  lowBrief: 'Rare' },
    { _key: 'pregnancy',    parameter: 'Pregnancy mein',           normalRange: '2.0 – 4.0',  unit: 'mg/dL', highBrief: 'Preeclampsia risk',       lowBrief: 'Normal variation' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: '2.0 se 4.0 mg/dL (approximately)',
    riskNote: `Pregnancy mein uric acid test ek important test hai khaaskar agar blood pressure ya sujan ki problem ho.

Pregnancy mein uric acid naturally pehle kam hota hai kyunki hemodilution hoti hai aur kidneys ki filtration capacity badh jaati hai. Last trimester mein thoda badhna normal hai.

Agar uric acid 5 mg/dL se upar aaye toh doctor saath mein blood pressure bhi check karte hain. High uric acid aur high BP milke preeclampsia ka signal ho sakta hai.`,
    whenDoctor: 'Test karna bilkul safe hai. High blood pressure ho ya sujan dikhe toh yeh test zaroor hoga. Apna result doctor ko zaroor dikhao, khud interpret mat karo.',
  },

  highMeans: [
    'Gout (Vaat rog): joints mein uric acid crystals jam jaate hain, dard aur sujan hoti hai',
    'Kidney ki bimari ya kidney ka kamzor kaam karna',
    'Purine-rich khaana zyada khana: red meat, organ meats, seafood, daal, mushrooms',
    'Alcohol, khaaskar beer',
    'Motapa ya sudden weight gain',
    'Diabetes ya metabolic syndrome',
    'High blood pressure ke liye diuretics (paani wali dawa)',
    'Chemotherapy ke baad cell breakdown se uric acid spike karna',
    'Dehydration yaani paani kam peena',
    'Hypothyroidism (thyroid ka kam kaam karna)',
  ],

  highReassurance: 'Ek abnormal value se koi ek diagnosis confirm nahi hoti. Doctor aapki puri health history aur dusre tests dekhkar batayenge.',

  lowMeans: [
    'Purine bahut kam diet jaise strict vegetarian ya vegan',
    'Aspirin (high dose), losartan ya kuch HIV medications',
    'Allopurinol zyada dose mein le raha ho',
    'Liver ki bimari jaise cirrhosis',
    'Wilson\'s disease ya Fanconi syndrome (rare conditions)',
    'Pregnancy ka pehla half (normal variation)',
  ],

  lowConcern: 'Low uric acid bahut rare hota hai aur generally zyada chinta wali baat nahi hoti. Agar saath mein fatigue, weakness ya koi aur symptom ho toh doctor se milna sahi hai. Akele low uric acid report se ghabrana zaroori nahi.',

  redFlags: [
    'Uric acid 10 mg/dL se zyada ho aur saath mein joint pain bhi ho',
    'Joint mein itna dard ho ki chal na sako, laalgi aur sujan bahut zyada ho (acute gout attack)',
    'Pregnancy mein uric acid 5 mg/dL se zyada ho aur BP bhi badha hua ho',
    'Peshab mein khoon ho ya kamar mein dard ho (kidney stone ka signal)',
    'Chemotherapy ke baad doctor ne monitor karne ko kaha ho aur level bahut zyada badh jaaye',
  ],

  emergencyLevel: 'Joints bilkul band ho jaayein toh emergency hai. Pregnancy mein sudden BP spike aur uric acid high ek saath preeclampsia emergency ho sakti hai. Turant doctor ke paas jaao.',

  selfTreatWarning: 'Report dekhkar khud treatment mat shuru karo. Koi supplement, herbal medicine ya dawa doctor ki salah ke bina mat lo.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Subah 7 se 10 baje fresh sample best hota hai lekin kisi bhi waqt test ho sakta hai',
    whatToEat: 'Koi restriction nahi hai. Normal khaana theek hai. Thoda paani pee ke jaao taaki vein mil sake.',
    whatToAvoid: 'Alcohol 24 ghante pehle bilkul band karo kyunki ye uric acid levels falsely badhata hai. Purine-rich khaana jaise red meat aur seafood bhi 24 ghante pehle avoid karo. Intense exercise test se ek din pehle nahi karni chahiye.',
    medicineNote: 'Doctor ko batao kaunsi medicines chal rahi hain. Aspirin, diuretics aur immune suppressants uric acid levels affect karti hain. Doctor khud decide karega ki medicine band karni hai ya nahi, khud mat band karo.',
    accuracyNote: 'Agar doctor ne specifically fasting likha ho toh 8 se 12 ghante pehle kuch mat khao. Warna normal khaan-paan theek hai.',
  },

  sampleInfo: {
    sampleType: 'Blood (serum, haath ki nass se). 24-hour urine test alag hota hai jo doctor specific reason se likhte hain.',
    sampleAmount: 'Lagbhag 2 se 3 mL blood',
    reportTime: 'Usually 2 se 4 ghante mein, same day. Kuch labs next day report dete hain.',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Uric acid high matlab pakka gout hai',
      truth: 'Gout ke liye sirf high uric acid kaafi nahi hota. Doctor joints ke symptoms, X-ray aur clinical examination dekhkar diagnosis karta hai. Kai logon ka uric acid high hota hai par gout kabhi nahi hoti.',
    },
    {
      _key: 'myth2',
      myth: 'Uric acid test ke liye khali pet rehna zaroori hai',
      truth: 'Aam taur par fasting required nahi hoti. Alcohol aur purine-rich khaana 24 ghante pehle avoid karna chahiye lekin ye fasting nahi hai. Paani pee sakte hain, normal khaana kha sakte hain.',
    },
    {
      _key: 'myth3',
      myth: 'Uric acid high matlab kidney fail ho rahi hai',
      truth: 'High uric acid ka matlab kidney failure nahi hota. Ye kidney pe stress ka indicator ho sakta hai lekin kidney function ke liye alag tests hote hain jaise creatinine aur eGFR.',
    },
    {
      _key: 'myth4',
      myth: 'Uric acid test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle se blood liya jaata hai, 2 se 3 second ka process. Bilkul normal blood test ki tarah.',
    },
    {
      _key: 'myth5',
      myth: 'Dahi ya nimbu khaane se uric acid normal ho jaata hai, test se pehle khaalo',
      truth: 'Koi ek khaana test results ko turant normal nahi kar sakta. Diet se uric acid gradually manage hota hai lekin ye medical treatment ka substitute nahi. Test se pehle sirf 24 ghante alcohol aur red meat avoid karo.',
    },
    {
      _key: 'myth6',
      myth: 'Uric acid test sirf gout ke liye hota hai',
      truth: 'Uric acid test kidney function, chemotherapy monitoring, kidney stones, metabolic disorders aur pregnancy complications ke liye bhi hota hai.',
    },
    {
      _key: 'myth7',
      myth: 'Low uric acid ka matlab sab theek hai',
      truth: 'Low uric acid bhi kuch conditions mein problem indicate karta hai jaise liver disease ya kuch rare genetic disorders. Bilkul ignore mat karo.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Uric Acid 24-Hour Urine Test',
      comparedTestSlug: 'uric-acid-test',
      differencePoints: [
        'Kya measure karta hai | Khoon mein uric acid | 24 ghante ki urine mein uric acid',
        'Sample | Blood 2 se 3 mL | 24-hour urine collection',
        'Fasting | Zaroori nahi | Zaroori nahi',
        'Report time | 2 se 4 ghante | 24 ghante aur lab time',
        'Kab use hota hai | Gout aur kidney stones primary check | Kidney excretion directly check karna ho',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'KFT (Kidney Function Test)',
      comparedTestSlug: 'kidney-function-test',
      differencePoints: [
        'Kya measure karta hai | Sirf uric acid level | Kidney ki overall filtering function',
        'Gout ke liye | Primary test | Indirect info',
        'Kidney stones | Helpful | General kidney check',
        'Sample | Blood | Blood',
        'Kab saath hota hai | Aksar KFT mein uric acid included hota hai | Combined panel mein',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'ESR / CRP Test',
      comparedTestSlug: 'esr',
      differencePoints: [
        'Kya detect karta hai | Uric acid level specifically | General ya active inflammation',
        'Gout ke liye | Primary test | Secondary ya supplementary only',
        'Kidney stones | Yes helpful | No',
        'Fasting | Zaroori nahi | Zaroori nahi',
        'Kab saath | Joint pain mein saath mein likhte hain | Inflammation confirm karne ke liye',
      ],
    },
  ],

  repeatInfo: `Gout diagnosis ke baad treatment shuru ho toh 4 se 6 hafte baad uric acid check karo taaki pata chale medicine kaam kar rahi hai ya nahi.

Gout ka treatment chal raha ho toh har 3 se 6 mahine mein monitoring zaroori hai.

Normal hai aur koi symptom nahi toh saal mein ek baar routine checkup mein include karo, khaaskar agar family mein gout ya kidney stones ki history ho.

Chemotherapy ke dauraan doctor ke order pe monitoring hoti hai, kabhi kabhi har 2 se 3 din.

Allopurinol ya dusri uric acid lowering medicine shuru ki ho toh pehle 6 hafte mein ek baar, phir stable ho toh 3 se 6 mahine mein.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Gout (Vaat Rog)', diseaseSlug: 'gout', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Kidney Stone (Pathri)', diseaseSlug: 'kidney-stone', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Arthritis', diseaseSlug: 'arthritis', isAvailable: false },
    { _key: 'ld4', diseaseName: 'High Blood Pressure (Hypertension)', diseaseSlug: 'hypertension', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Chronic Kidney Disease (CKD)', diseaseSlug: 'chronic-kidney-disease', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'KFT (Kidney Function Test)', testSlug: 'kidney-function-test', isAvailable: false },
    { _key: 'rt2', testName: 'Creatinine Test', testSlug: 'creatinine', isAvailable: false },
    { _key: 'rt3', testName: 'ESR Test', testSlug: 'esr', isAvailable: true },
    { _key: 'rt4', testName: 'CRP Test', testSlug: 'crp', isAvailable: false },
    { _key: 'rt5', testName: 'CBC Test', testSlug: 'cbc-test', isAvailable: true },
    { _key: 'rt6', testName: 'Lipid Profile', testSlug: 'lipid-profile', isAvailable: true },
  ],

  homeopathyAngle: `Ek abnormal uric acid report sirf ek starting point hai, ghabrao mat. Apni report lekar doctor ko dikhao aur cause jaano.

Agar uric acid baar baar high aata ho toh sirf symptomatic treatment kaafi nahi. Root cause samajhna zaroori hai. Homeopathy mein individualized treatment ki approach hoti hai yaani aapki poori health history, lifestyle aur symptoms ko dekha jaata hai. Underlying metabolic imbalance address karne ki koshish hoti hai. Side effects practically nahi hote.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Uric acid test kya hota hai?',
      answer: 'Ye ek blood test hai jo khoon mein uric acid ka level maapata hai. Purine ke breakdown se banta hai aur kidneys ise nikaalt hain. High level se gout aur kidney stones ka risk hota hai.',
    },
    {
      _key: 'faq2',
      question: 'Serum Uric Acid test aur Uric Acid test mein kya fark hai?',
      answer: 'Koi fark nahi, dono ek hi hain. Serum ka matlab khoon ka liquid part hai jisme uric acid measure hota hai. Report mein S. Uric Acid ya Serum Uric Acid likha hoga, same test hai.',
    },
    {
      _key: 'faq3',
      question: 'Uric acid test normal range kya hai?',
      answer: 'Male ke liye 3.4 se 7.0 mg/dL, female ke liye 2.4 se 6.0 mg/dL aur pregnancy mein lagbhag 2.0 se 4.0 mg/dL. Aapki lab ki reference range se compare karo kyunki thodi variation ho sakti hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya uric acid test ke liye khali pet rehna zaroori hai?',
      answer: 'Aam taur par nahi. Lekin 24 ghante pehle alcohol aur bahut zyada red meat avoid karein accurate result ke liye. Agar doctor ne specifically fasting likha ho toh 8 se 12 ghante pehle kuch mat khao.',
    },
    {
      _key: 'faq5',
      question: 'Uric acid high hone ka matlab kya hai?',
      answer: 'High uric acid ko hyperuricemia kehte hain. Iska matlab gout, kidney stress, purine-rich diet, alcohol, dehydration ya kuch medicines ka side effect ho sakta hai. Akele high value se diagnosis confirm nahi hoti, doctor dekhenge.',
    },
    {
      _key: 'faq6',
      question: 'Uric acid 7 mg/dL hai, kya ye dangerous hai?',
      answer: 'Male ke liye 7 mg/dL borderline hai kyunki normal range 3.4 se 7.0 mg/dL hai. Agar koi joint pain ya symptom nahi toh zyada ghabrao mat. Doctor decide karenge treatment chahiye ya sirf diet changes kafi hain.',
    },
    {
      _key: 'faq7',
      question: 'Female ke liye uric acid kitna hona chahiye?',
      answer: '2.4 se 6.0 mg/dL ke beech normal maana jaata hai. 6.0 mg/dL se zyada hona concerning hota hai khaaskar agar joint pain ho. Post-menopause mein ranges thodi badh sakti hain.',
    },
    {
      _key: 'faq8',
      question: 'Pregnancy mein uric acid test kab hota hai?',
      answer: 'Jab high blood pressure ya preeclampsia ka doubt ho. Pregnancy mein normal range lagbhag 2.0 se 4.0 mg/dL hoti hai. High uric acid aur high BP ek saath preeclampsia ka risk hota hai, turant doctor ko batao.',
    },
    {
      _key: 'faq9',
      question: 'Uric acid test blood mein hota hai ya urine mein?',
      answer: 'Dono possible hain lekin standard Uric Acid Test blood (serum) test hota hai. 24-hour urine test alag hota hai jo kidney excretion check karta hai. Doctor specific reason se likhte hain.',
    },
    {
      _key: 'faq10',
      question: 'Gout mein uric acid kitna hota hai?',
      answer: 'Clinical gout diagnosis ke liye generally serum uric acid 6.8 mg/dL se upar (males mein) maana jaata hai lekin diagnosis sirf lab value se nahi hoti. Symptoms, X-ray aur doctor ki examination se hoti hai. Kuch gout patients ka uric acid attack ke waqt normal bhi ho sakta hai.',
    },
    {
      _key: 'faq11',
      question: 'Uric acid test ke baad kya khaana chahiye?',
      answer: 'Koi restriction nahi hai test ke baad. Test ke pehle aur baad mein adequate paani peena faydemand hai.',
    },
    {
      _key: 'faq12',
      question: 'Uric acid test ghar pe ho sakta hai?',
      answer: 'Haan, uric acid home test kits market mein milti hain. Lekin ye sirf screening ke liye hain. Diagnosis ke liye proper lab test karo. Home kit ki accuracy limited hoti hai.',
    },
    {
      _key: 'faq13',
      question: 'Cancer mein uric acid test kyu hota hai?',
      answer: 'Chemotherapy ke waqt cancer cells bahut tezi se toot hain jise tumor lysis syndrome kehte hain. Isse uric acid ek dam se badh jaata hai jo kidneys ko damage kar sakta hai. Isliye chemotherapy mein uric acid closely monitor kiya jaata hai.',
    },
    {
      _key: 'faq14',
      question: 'Uric acid test baar baar kyun karna padhta hai?',
      answer: 'Gout ya kidney stones ki history ho aur treatment chal rahi ho toh monitor karna zaroori hai taaki medicine ki dose adjust ki ja sake. Har 3 se 6 mahine normal hai ongoing treatment mein.',
    },
    {
      _key: 'faq15',
      question: 'Low uric acid ka kya matlab hai?',
      answer: 'Low uric acid yaani hypouricemia rare hota hai. Liver disease, kuch medicines, strict low-purine diet ya rare genetic conditions mein hota hai. Aksar accidental finding hota hai. Doctor cause jaankar bataenge kuch karna hai ya nahi.',
    },
    {
      _key: 'faq16',
      question: 'Kya uric acid test painful hota hai?',
      answer: 'Bilkul nahi, sirf normal blood test ki tarah ek chhoti needle se blood liya jaata hai. 2 se 3 second ka kaam. Thoda sa chubhan feel ho sakta hai, bas itna hi.',
    },
    {
      _key: 'faq17',
      question: 'Uric acid aur urea test mein kya fark hai?',
      answer: 'Dono alag tests hain. Uric acid purine ke breakdown se banta hai aur gout aur kidney stones ke liye check hota hai. Urea protein ke breakdown ka waste product hai jo kidney function assess karta hai. Dono kidney panel mein saath mein bhi ho sakte hain.',
    },
    {
      _key: 'faq18',
      question: 'Uric acid kitna hone par medicine shuroo karein?',
      answer: 'Ye decision doctor karta hai, sirf number se nahi. Generally 8 se 9 mg/dL bina symptoms ke ya 6 mg/dL ke upar gout symptoms ya kidney stones ke saath medicine consider ki jaati hai. Doctor se poochho.',
    },
    {
      _key: 'faq19',
      question: 'Kya uric acid test kidney function test mein aata hai?',
      answer: 'Haan, kai labs ki KFT panel mein serum uric acid included hota hai. Aapki KFT report dekho, agar uric acid listed ho toh alag se test nahi karna.',
    },
    {
      _key: 'faq20',
      question: 'Uric acid test kab repeat karein?',
      answer: 'Gout treatment chal rahi ho toh 4 se 6 hafte baad. Stable ho toh 3 se 6 mahine baad. Normal checkup mein saal mein ek baar kafi hai agar koi symptoms nahi.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(uricAcid)
    console.log('✅ Uric Acid Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
