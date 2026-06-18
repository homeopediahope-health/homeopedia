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

const crp = {
  _id: 'labtest-crp',
  _type: 'labTest',
  name: 'CRP Test (C-Reactive Protein)',
  fullForm: 'C-Reactive Protein Test',
  hindiName: 'CRP Jaanch (Sujan Ki Jaanch)',
  slug: { _type: 'slug', current: 'crp-test' },
  category: 'Blood',
  metaTitle: 'CRP Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'CRP (C-Reactive Protein) test ka normal range, high/low matlab, kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `CRP ya C-Reactive Protein Test ek blood test hai jo aapke khoon mein ek khaas protein ka level measure karta hai — jo liver tab banata hai jab body mein kahin sujan (inflammation) ya infection hoti hai.

Jab aapke body mein koi injury, infection, ya bimari hoti hai, aapka liver ek protein banata hai jise C-Reactive Protein kehte hain. Yeh protein khoon mein milkar body ki "sujan wali jagah" pe pahunchta hai aur immune system ko kaam karne mein madad karta hai. Normal condition mein yeh protein bahut kam matra mein hota hai ya bilkul nahi. Lekin jab koi problem hoti hai — toh yeh level tezi se badhta hai — kabhi kabhi 24-48 ghante mein hi.

Seedha bolein toh: CRP test ek alarm ki tarah hai. Agar alarm baj raha hai (level high hai) toh body mein kuch problem chal rahi hai — doctor is alarm ki vajah dhundta hai.

CRP test do prakar ka hota hai: Normal CRP Test — general inflammation/infection detect karne ke liye, aur hs-CRP (High Sensitivity CRP) Test — dil ki bimariyon ka risk check karne ke liye. Ye dono alag cheezein hain — doctor decide karta hai kaunsa test karna hai.`,

  whenToTest: [
    'Baar baar bukhar aaye aur kaaran pata na chale',
    'Body mein kahin bhi sujan ho — joints, pet, ya aur jagah',
    'Joint pain ya arthritis ke symptoms ho',
    'Kisi infection ka doubt ho — bacteria ya virus ki wajah se',
    'Pehle se koi autoimmune bimari ho jaise lupus ya rheumatoid arthritis',
    'Dil ki bimari ya heart attack ka risk assess karna ho (tab hs-CRP)',
    'Koi surgery ya injury ke baad recovery track karna ho',
    'Treatment chal rahi ho — dekhna ho ki dawai kaam kar rahi hai ya nahi',
    'Pregnancy mein infection ka doubt ho',
    'Bacche mein infection ka doubt ho — khaaskar neonatal sepsis mein',
  ],

  whatItDetects: `Is test se pata chalta hai: body mein active sujan hai ya nahi. Infection kitni severe hai. Chronic (lambe samay ki) sujan toh nahi. Treatment ka response — level ghat raha hai ya nahi. Dil ki bimari ka risk (hs-CRP se). Agar body mein sujan, joint pain, ya infection ka doubt ho toh doctor ye test likhta hai — aur report se pata chalta hai ki inflammation kitni hai aur treatment ka asar ho raha hai ya nahi.`,

  normalRanges: [
    {
      _key: 'crp-normal',
      parameter: 'Normal CRP (Healthy Adults)',
      normalRange: '< 0.3',
      unit: 'mg/dL',
      highBrief: 'Inflammation / Infection present',
      lowBrief: 'Usually good — no concern',
    },
    {
      _key: 'crp-minor',
      parameter: 'Minor Elevation',
      normalRange: '0.3 – 1.0',
      unit: 'mg/dL',
      highBrief: 'Lifestyle factors (smoking, obesity)',
      lowBrief: '—',
    },
    {
      _key: 'crp-moderate',
      parameter: 'Moderate Elevation',
      normalRange: '1.0 – 10.0',
      unit: 'mg/dL',
      highBrief: 'Active infection or autoimmune condition',
      lowBrief: '—',
    },
    {
      _key: 'crp-marked',
      parameter: 'Marked Elevation',
      normalRange: '10.0 – 50.0',
      unit: 'mg/dL',
      highBrief: 'Severe bacterial infection / major trauma',
      lowBrief: '—',
    },
    {
      _key: 'crp-severe',
      parameter: 'Severe Elevation',
      normalRange: '> 50.0',
      unit: 'mg/dL',
      highBrief: 'Critical — sepsis ya serious infection',
      lowBrief: '—',
    },
    {
      _key: 'crp-pregnancy',
      parameter: 'Pregnancy (Normal range alag hoti hai)',
      normalRange: '0.3 – 3.0',
      unit: 'mg/dL',
      highBrief: 'Infection ya complication possible',
      lowBrief: 'Normal hai — ghabrao mat',
    },
    {
      _key: 'crp-child',
      parameter: 'Children (Baache)',
      normalRange: '< 0.3',
      unit: 'mg/dL',
      highBrief: 'Infection / Inflammation',
      lowBrief: 'Normal hai',
    },
    {
      _key: 'crp-newborn',
      parameter: 'Newborn (Nawajaat Shishu)',
      normalRange: '< 0.6 – 1.0',
      unit: 'mg/dL',
      highBrief: 'Neonatal sepsis possible — urgent',
      lowBrief: 'Normal hai',
    },
    {
      _key: 'hscrp-low',
      parameter: 'hs-CRP — Low Cardiovascular Risk',
      normalRange: '< 1.0',
      unit: 'mg/L',
      highBrief: '—',
      lowBrief: 'Dil ki bimari ka kam risk',
    },
    {
      _key: 'hscrp-medium',
      parameter: 'hs-CRP — Medium Cardiovascular Risk',
      normalRange: '1.0 – 3.0',
      unit: 'mg/L',
      highBrief: 'Moderate cardiac risk',
      lowBrief: '—',
    },
    {
      _key: 'hscrp-high',
      parameter: 'hs-CRP — High Cardiovascular Risk',
      normalRange: '> 3.0',
      unit: 'mg/L',
      highBrief: 'Higher cardiac risk — doctor se milein',
      lowBrief: '—',
    },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: '0.3 – 3.0 mg/dL (1st trimester median ~2.4 mg/L, 3rd trimester median ~4.1 mg/L tak normal)',
    riskNote: `Pregnancy mein naturally body mein thodi sujan rehti hai — isliye CRP ka level thoda badhna normal hai, khaaskar teesre trimester mein. Studies ke mutabik: pehla trimester median ~2.4 mg/L, doosra trimester ~2.4 mg/L, teesra trimester ~4.1 mg/L tak bhi normal maana jaata hai.

Isliye pregnancy mein 3 mg/dL (30 mg/L) tak ka level concern nahi maana jaata — lekin ye hamesha doctor judge karta hai context ke saath. Yeh test maa aur bacche dono ke liye bilkul safe hai.`,
    whenDoctor: `Doctor pregnancy mein CRP tab likhte hain: agar fever ho, infection ka doubt ho (UTI, chorioamnionitis), premature labour ke signs hon, ya pehle se koi autoimmune condition ho. Ghabrao mat — pregnancy mein thoda elevated CRP hona common hai.`,
  },

  highMeans: [
    'Bacterial infection — kisi bhi jagah ki (sabse common cause)',
    'Viral infection — flu, COVID, aur doosre virus',
    'Fungal ya parasitic infection',
    'Rheumatoid arthritis (joints ki sujan) — autoimmune',
    'Lupus — autoimmune bimari',
    'Inflammatory Bowel Disease (Crohn\'s, Ulcerative Colitis)',
    'Pancreatitis (pancreas ki sujan)',
    'Heart attack ke baad — CRP tezi se badhta hai',
    'Coronary artery disease ka risk (especially hs-CRP high ho)',
    'Koi bhi surgery ya major injury',
    'Obesity (mota hona) — mild elevation ho sakta hai',
    'Smoking — mild CRP elevation associated hai',
    'Cancer (kuch types mein — possible cause)',
    'Diabetes — mild elevation',
  ],

  highReassurance: `Ghabrao mat — high CRP ek signal hai, diagnosis nahi. Akele CRP test se koi bimari confirm nahi hoti. Doctor iske saath doosre tests aur aapki symptoms dekhta hai tabhi kuch batata hai. Doctor se milein aur sahi jaanch karwaein.`,

  lowMeans: [
    'Body mein koi active sujan nahi hai — zyaadatar ACHCHI baat hai',
    'Immune system theek se kaam kar raha hai',
    'Infection ya inflammation ka sign nahi',
  ],

  lowConcern: `Low CRP (< 0.3 mg/dL) zyaadatar normal hai. Lekin agar aapko symptoms hain lekin CRP low hai — toh bhi doctor se milein, kyunki kuch bimariyon mein CRP sensitive nahi hota. Liver ki koi gambhir bimari ho toh bhi CRP properly nahi banta (liver hi CRP banata hai).`,

  redFlags: [
    'CRP level > 10 mg/dL (100 mg/L) — yeh serious hai, urgent doctor consultation',
    'CRP > 50 mg/dL (500 mg/L) — emergency ho sakti hai (sepsis ya major infection)',
    'High CRP ke saath tez bukhar, saans lene mein takleef, ya behoshi',
    'Pregnancy mein CRP achanak bahut zyada badh jaaye',
    'CRP moderately high (1–10 mg/dL) aur symptoms 2–3 din se zyada hon',
    'Baache mein CRP high ho — khaaskar neonates mein',
    'Treatment chal rahi ho aur CRP ghat nahi raha',
  ],

  emergencyLevel: `CRP > 50 mg/dL (500 mg/L) — bacterial infection ya sepsis strongly associated hai — turant hospital jaayein. CRP > 10 mg/dL (100 mg/L) — urgent doctor visit zaroori, same day. Ye level high fever aur breathlessness ke saath ho toh seedha emergency room.`,

  selfTreatWarning: `Report dekhkar khud treatment mat shuru karo — CRP ek general marker hai, kisi ek bimari ki guarantee nahi. Apni report lekar doctor ko dikhayein aur unki salah ke bina koi medicine na lein — especially anti-inflammatory ya antibiotics.`,

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Koi bhi time — subah ya dopahar, CRP ke liye specifically koi fark nahi. Lekin symptoms aane ke 24–48 ghante baad ka test zyada accurate hota hai (peak pe hota hai CRP).',
    whatToEat: `CRP test ke liye fasting bilkul zaroori nahi. Aap khana kha ke bhi yeh test de sakte hain. Khane peene ka CRP result pe koi significant fark nahi padta.`,
    whatToAvoid: `Test se pehle alcohol avoid karein. Heavy exercise test se ek din pehle avoid karein — exercise bhi temporarily CRP badha sakti hai. Agar koi anti-inflammatory medicines (ibuprofen, aspirin, steroids) chal rahi hain — doctor ko batayein pehle.`,
    medicineNote: `Koi bhi medicine khud band mat karein — sirf doctor ki salah se. Anti-inflammatory ya steroid medicines CRP artificially normal kar sakti hain result mein.`,
    accuracyNote: `Agar infection ya injury haal hi mein hua ho (6–12 ghante ke andar) toh CRP abhi utna nahi badha hoga — 24–48 ghante mein peak pe hota hai. Isliye symptoms aane ke 24–48 ghante baad ka test zyada accurate hota hai. Unit dhyaan rakhein: 1 mg/dL = 10 mg/L.`,
  },

  sampleInfo: {
    sampleType: 'Blood (khoon) — nadi se (vein se); Red top tube ya Yellow SST tube',
    sampleAmount: '2–3 mL — ek chhoti si test tube bhar',
    reportTime: 'Zyaadatar 2–4 ghante mein (same day); Metropolis jaise labs 4 ghante mein',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'CRP high matlab pakka cancer hai',
      truth: 'Bilkul galat. CRP ek general inflammation marker hai. Cancer mein CRP badh sakta hai — lekin CRP badhne ke 100+ kaaran hain jaise infection, arthritis, ya injury. Akele CRP se cancer diagnose NAHI hoti. Agar concern ho toh doctor se specific cancer tests karwayein.',
    },
    {
      _key: 'myth2',
      myth: 'CRP test ke liye khaali pet rehna zaroori hai',
      truth: 'Nahi — CRP test ke liye fasting ki zarurat nahi. Khana kha ke bhi test de sakte hain. Sirf tab fasting chahiye jab CRP kisi aur fasting test ke saath ho.',
    },
    {
      _key: 'myth3',
      myth: 'CRP test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle — 2–3 second ka process. Thodi si chubhan ke alawa kuch nahi hota. Blood sample lena routine procedure hai.',
    },
    {
      _key: 'myth4',
      myth: 'CRP normal hai matlab koi bimari nahi',
      truth: 'Zaruri nahi. Kuch bimariyan (jaise certain autoimmune conditions, early infection) mein CRP normal bhi ho sakta hai. Sirf CRP ke basis pe "sab theek hai" mat maan lein agar symptoms hain — doctor se milein.',
    },
    {
      _key: 'myth5',
      myth: 'CRP high hoga toh symptoms hamesha dikhenge',
      truth: 'Nahi — chronic (lambi) sujan mein CRP mildly elevated ho sakta hai bina kisi obvious symptom ke. Isliye kabhi kabhi doctors routine checkup mein bhi yeh test likhte hain.',
    },
    {
      _key: 'myth6',
      myth: 'CRP aur ESR test same cheez hain',
      truth: 'Dono inflammation markers hain lekin kaafi alag hain. CRP zyada specific aur faster response deta hai (infection mein 6–12 ghante mein badh jaata hai). ESR slow hai aur zyada factors se affect hota hai. Dono saath mein bhi kiye jaate hain.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'ESR Test',
      comparedTestSlug: 'esr',
      differencePoints: [
        'CRP fast respond karta hai (6–12 ghante); ESR slow hai (24–48 ghante)|CRP anemia se affect nahi hota; ESR pregnancy aur anemia se affect hota hai|Infection mein CRP zyada reliable hai; dono saath mein aksar kiye jaate hain',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'hs-CRP Test',
      comparedTestSlug: '',
      differencePoints: [
        'Normal CRP severe infection/inflammation detect karta hai; hs-CRP bahut low levels bhi detect kar sakta hai|hs-CRP specifically dil ki bimari ka risk assess karne ke liye use hota hai|Dono alag purposes ke liye hain — doctor decide karta hai kaunsa chahiye',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'CBC (Complete Blood Count)',
      comparedTestSlug: 'cbc',
      differencePoints: [
        'CRP inflammation protein naapata hai; CBC red cells, white cells, platelets count karta hai|Infection mein CRP bahut sensitive hai; CBC mein WBC count badh sakta hai|Dono ek saath aksar likhte hain doctors — zyada complete picture milti hai',
      ],
    },
  ],

  repeatInfo: `Infection mein: treatment shuru hone ke 3–5 din baad repeat karein — agar CRP ghat raha hai toh treatment kaam kar rahi hai, agar nahi ghata toh doctor treatment badal sakta hai. Chronic bimariyon mein (arthritis, lupus): har 3–6 mahine mein ya jab bhi symptoms badhen. Normal result ke baad: agar koi symptoms nahi hain toh routine mein zaruri nahi. Cardiac risk check ke liye (hs-CRP): doctor do readings 2 hafte ke antar pe lene ki salah dete hain average ke liye. Post-surgery: surgery ke 3–5 din baad repeat hota hai.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Arthritis (Gathiya)', diseaseSlug: 'arthritis', isAvailable: true },
    { _key: 'ld2', diseaseName: 'Infection', diseaseSlug: 'infection', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Inflammation (Sujan)', diseaseSlug: 'inflammation', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Rheumatoid Arthritis', diseaseSlug: 'rheumatoid-arthritis', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Lupus (SLE)', diseaseSlug: 'lupus', isAvailable: false },
    { _key: 'ld6', diseaseName: 'IBD (Crohn\'s / Ulcerative Colitis)', diseaseSlug: 'inflammatory-bowel-disease', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'ESR Test', testSlug: 'esr', isAvailable: true },
    { _key: 'rt2', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc', isAvailable: true },
    { _key: 'rt3', testName: 'RA Factor Test', testSlug: 'ra-test', isAvailable: true },
    { _key: 'rt4', testName: 'Widal Test', testSlug: 'widal-test', isAvailable: true },
    { _key: 'rt5', testName: 'LFT (Liver Function Test)', testSlug: 'lft-test', isAvailable: false },
    { _key: 'rt6', testName: 'Blood Culture', testSlug: 'blood-culture-test', isAvailable: false },
  ],

  homeopathyAngle: `Agar CRP baar baar high aata hai toh sirf symptoms control karna kaafi nahi — root cause samajhna zaroori hai. Conventional treatment sujan ya infection treat karta hai — lekin homeopathy ek alag approach leti hai jahan poori health history aur individual constitution dekha jaata hai, takleef ki wajah pe kaam kiya jaata hai.

Baar baar infections, chronic sujan, ya autoimmune conditions mein homeopathic treatment sahayak ho sakti hai — underlying cause address karne mein. Side effects practically nil hote hain. Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'CRP test kya hai?',
      answer: 'CRP ya C-Reactive Protein test ek blood test hai jo liver dwara banaye jaane wale ek khaas protein ka level measure karta hai. Yeh protein tab badhta hai jab body mein sujan ya infection hoti hai. Isse doctors inflammation ki severity samajhte hain.',
    },
    {
      _key: 'faq2',
      question: 'CRP test ki normal range kitni hoti hai?',
      answer: 'Normal CRP level < 0.3 mg/dL (ya < 3 mg/L) hoti hai healthy adults mein. 0.3 se 1.0 mg/dL mild elevation hai. 1–10 mg/dL moderate aur > 10 mg/dL marked elevation hai jo serious infection indicate karta hai. Apni lab ki reference range se compare karein.',
    },
    {
      _key: 'faq3',
      question: 'CRP test mein khaali pet rehna zaroori hai kya?',
      answer: 'Nahi — CRP test ke liye fasting bilkul zaroori nahi hai. Aap khana kha ke bhi yeh test de sakte hain. Sirf tab dhyaan rakhein jab CRP kisi aur fasting test ke saath ho — us test ki requirement follow karein.',
    },
    {
      _key: 'faq4',
      question: 'CRP high hone ka matlab kya hai?',
      answer: 'CRP high hona matlab body mein kahin sujan (inflammation) ya infection hai. Possible kaaran hain: bacterial/viral infection, arthritis, autoimmune condition, injury, ya surgery. Yeh cancer ka direct indicator nahi hai. Doctor symptoms aur doosre tests dekhkar wajaah dhundta hai.',
    },
    {
      _key: 'faq5',
      question: 'CRP low hone ka matlab kya hai?',
      answer: 'CRP low hona zyaadatar achchi baat hai — matlab body mein active sujan nahi hai. Agar symptoms hain lekin CRP low hai, toh bhi doctor se milein kyunki kuch conditions mein CRP sensitive nahi hota.',
    },
    {
      _key: 'faq6',
      question: 'Kya CRP test se cancer detect hoti hai?',
      answer: 'Nahi — CRP cancer ka specific marker nahi hai. Kuch cancers mein CRP badh sakta hai kyunki cancer ke saath inflammation hoti hai — lekin CRP badhne ke aur bahut se kaaran hain. Cancer ke liye specific tests alag hote hain. Agar concern hai toh doctor se milein.',
    },
    {
      _key: 'faq7',
      question: 'Pregnancy mein CRP test safe hai?',
      answer: 'Haan — bilkul safe hai. Pregnancy mein naturally CRP thoda badha rehta hai (khaaskar teesre trimester mein 3–4 mg/L tak normal maana jaata hai). Doctor zarurat padne pe yeh test likhte hain — koi risk nahi hai.',
    },
    {
      _key: 'faq8',
      question: 'CRP test aur ESR test mein kya fark hai?',
      answer: 'CRP faster respond karta hai (6–12 ghante mein), zyada specific hai aur anemia se affect nahi hota. ESR slow hai (24–48 ghante) aur anemia, pregnancy se bhi affect hota hai. Infection mein CRP zyada reliable hai. Aksar dono saath mein kiye jaate hain.',
    },
    {
      _key: 'faq9',
      question: 'CRP test aur hs-CRP test mein kya fark hai?',
      answer: 'Normal CRP test severe infection ya inflammation detect karta hai. hs-CRP (High Sensitivity CRP) bahut low levels bhi detect kar sakta hai — iska use dil ki bimari ka risk assess karne ke liye hota hai. Yeh dono alag purposes ke liye hain.',
    },
    {
      _key: 'faq10',
      question: 'CRP test kitne time mein report aati hai?',
      answer: 'Zyaadatar labs 2–4 ghante mein report deti hain. Metropolis jaise labs 4 ghante mein result deti hain. Same day report milna common hai. Online — WhatsApp, email, ya app pe bhi milti hai.',
    },
    {
      _key: 'faq11',
      question: 'Baache mein CRP test kab kiya jaata hai?',
      answer: 'Baache mein bhi CRP test safe hai. Jab infection ka doubt ho, tez bukhar ho, ya neonates (nawajaat shishu) mein sepsis ka shak ho — tab doctor likhte hain. Neonates mein normal range thodi alag hoti hai — doctor judge karta hai.',
    },
    {
      _key: 'faq12',
      question: 'CRP test aur CBC test saath mein kyun kiye jaate hain?',
      answer: 'CRP inflammation ki severity batata hai, CBC blood cells ki sankhya batata hai (WBC badhna infection signal hai). Dono milake doctor ko zyada complete picture milti hai. Isliye aksar dono saath mein likhe jaate hain.',
    },
    {
      _key: 'faq13',
      question: 'CRP test dangerous level kya hai?',
      answer: 'CRP > 10 mg/dL (100 mg/L) moderately serious hai — urgent doctor consultation chahiye. CRP > 50 mg/dL (500 mg/L) se zyada bacterial infection ya sepsis strongly associated hai — yeh emergency ho sakti hai. Turant hospital jaayein.',
    },
    {
      _key: 'faq14',
      question: 'CRP test kitni baar dohrana chahiye?',
      answer: 'Yeh situation pe depend karta hai. Infection mein treatment ke 3–5 din baad. Chronic conditions mein har 3–6 mahine. Cardiac risk mein (hs-CRP) doctor do readings 2 hafte ke antar pe lene ki salah dete hain average ke liye.',
    },
    {
      _key: 'faq15',
      question: 'Kya CRP test accurately batata hai ki infection hai?',
      answer: 'CRP bahut sensitive marker hai lekin specific nahi — matlab yeh batata hai ki sujan/infection hai, lekin kahan hai ya kis cheez se hai yeh nahi batata. Isliye aksar doosre tests saath mein kiye jaate hain. Overall accuracy ke liye clinical symptoms + dusre tests + CRP milake doctor decide karta hai.',
    },
    {
      _key: 'faq16',
      question: 'CRP test se pehle kya avoid karein?',
      answer: 'Test se pehle alcohol avoid karein. Heavy exercise ek din pehle avoid karein — exercise temporarily CRP badha sakti hai. Agar anti-inflammatory medicines chal rahi hain toh doctor ko batayein. Khana peena normal kar sakte hain — fasting ki zarurat nahi.',
    },
    {
      _key: 'faq17',
      question: 'CRP test mein positive ya negative kya hota hai?',
      answer: 'CRP test quantitative hota hai — positive/negative nahi, numeric value aati hai (jaise 2.4 mg/dL). Jo value aaye use reference range se compare karte hain. < 0.3 mg/dL "normal" maana jaata hai, is se zyada ko elevation kehte hain.',
    },
    {
      _key: 'faq18',
      question: 'Kya gharelu CRP test accurate hota hai?',
      answer: 'Home CRP tests available hain lekin lab-based tests se kam accurate hote hain. NABL-accredited lab mein test karna best hai reliable results ke liye. Especially serious conditions mein lab test hi karwayein.',
    },
    {
      _key: 'faq19',
      question: 'CRP ka test kab repeat nahi karna chahiye?',
      answer: 'Agar recent mein test hua ho aur result normal tha aur koi naye symptoms nahi hain — toh bina wajaah baar baar test karna zaruri nahi. Doctor ki guidance ke bina self-repeat mat karein. Unnecessary testing se anxiety badh sakti hai.',
    },
    {
      _key: 'faq20',
      question: 'CRP test report kaise padhen?',
      answer: 'Report mein ek number hota hai (jaise 0.5 mg/dL ya 12 mg/L). Uske saath "Reference Range" di hoti hai lab ki. Apna number us range se compare karein. Agar number range se zyada hai — doctor ko dikhayein. Numbers ko context se samjhein — sirf ek number se kuch confirm nahi hota.',
    },
  ],
}

async function main() {
  await client.createOrReplace(crp)
  console.log('✅ CRP Test seeded: labtest-crp')
}

main().catch(console.error)
