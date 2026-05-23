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

const esr = {
  _id: 'labtest-esr',
  _type: 'labTest',
  name: 'ESR Test',
  fullForm: 'Erythrocyte Sedimentation Rate',
  hindiName: 'Laal Khoon Kanka Gati Jaanch',
  slug: { _type: 'slug', current: 'esr' },
  category: 'Blood',
  metaTitle: 'ESR Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'ESR (Erythrocyte Sedimentation Rate) test ka normal range, high/low matlab, kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `ESR yaani Erythrocyte Sedimentation Rate — ek simple blood test hai jo aapke khoon mein sujan (inflammation) ka pata lagata hai. Is test mein dekha jaata hai ki aapke laal khoon ke kankake (Red Blood Cells) ek ghante mein kitni tezi se neeche baithte hain.

Sochiye aisa — ek lamba, patla sheesha liya, usmein khoon daala, aur ek ghante baad dekha ki laal kankake kitne neeche gaye. Jitni tezi se neeche jaayein, utni zyada sujan body mein maujood hai. Ye speed mm/hr (millimeter per hour) mein maapi jaati hai.

Ye test khud kisi bimari ka naam nahi batata — balki ye ek signal hota hai ki body ke andar kuch theek nahi hai. Jaise ambulance ki sirene sunkar aap samajhte hain ki koi masla hai — ESR bhi waisi hi ek "warning bell" hai. Iske baad doctor doosre tests aur aapki symptoms dekh kar asli bimari ka pata lagate hain.

ESR test aaj bhi India mein sabse zyada kiye jaane wale blood tests mein se ek hai — kyunki ye sasta hai, aasaan hai, aur har chhoti-badi lab mein hota hai.`,

  whenToTest: [
    'Lagaataar bukhaar (fever) aa raha ho aur kaaran samajh na aaye',
    'Joints mein dard ho — haath, ghutne, kamar, ya poora sharir',
    'Thakan, kamzori feel ho bina kisi khaas wajah ke',
    'Body mein kahin sujan ya dard ho jo theek na ho raha ho',
    'Tuberculosis (TB) ka doubt ho',
    'Kisi autoimmune bimari ka shaak ho — jaise Rheumatoid Arthritis ya Lupus',
    'Pehle se pata bimari (jaise arthritis ya IBD) ka treatment chal raha ho aur uski progress dekhni ho',
    'Anaemia (khoon ki kami) ke saath doosre symptoms bhi hon',
  ],

  whatItDetects: `ESR se pata chalta hai ki body mein kahin sujan (inflammation) hai ya nahi, koi active infection toh nahi — bacterial ya viral, autoimmune disease active hai ya nahi, pehle se chal raha treatment kaam kar raha hai ya nahi, aur koi serious condition jaise kidney disease toh nahi (halaanki diagnosis ke liye aur tests zaroori hote hain). Agar body mein sujan, joint pain, ya infection ka doubt ho toh doctor ye test likhta hai — aur report se pata chalta hai ki body mein inflammation ka level kitna hai, aur aage kaun se tests karaye jaayein.`,

  normalRanges: [
    { _key: 'esr-male-u50',    parameter: 'Purush (Male) under 50',   normalRange: '0 – 15',  unit: 'mm/hr', highBrief: 'Sujan / Infection',        lowBrief: 'Polycythemia / Dehydration' },
    { _key: 'esr-male-50plus', parameter: 'Purush (Male) 50+',        normalRange: '0 – 20',  unit: 'mm/hr', highBrief: 'Chronic inflammation',      lowBrief: 'RBC disorder' },
    { _key: 'esr-fem-u50',     parameter: 'Mahila (Female) under 50', normalRange: '0 – 20',  unit: 'mm/hr', highBrief: 'Sujan / Autoimmune',        lowBrief: 'Sickle cell / Heart fail' },
    { _key: 'esr-fem-50plus',  parameter: 'Mahila (Female) 50+',      normalRange: '0 – 30',  unit: 'mm/hr', highBrief: 'Arthritis / Infection',     lowBrief: 'RBC abnormality' },
    { _key: 'esr-pregnancy',   parameter: 'Pregnancy (Garbhavastha)', normalRange: '30 – 70', unit: 'mm/hr', highBrief: 'Zyada monitor karo',        lowBrief: 'Rare in pregnancy' },
    { _key: 'esr-children',    parameter: 'Bacche (Children)',        normalRange: '0 – 10',  unit: 'mm/hr', highBrief: 'Infection / Fever',         lowBrief: 'Polycythemia' },
    { _key: 'esr-newborn',     parameter: 'Nawajaate (Newborn)',      normalRange: '0 – 2',   unit: 'mm/hr', highBrief: 'Serious infection',         lowBrief: 'Very rare' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: '30–70 mm/hr (second aur third trimester mein)',
    riskNote: 'Pregnancy mein ESR naturally badh jaata hai kyunki blood volume badhta hai, fibrinogen (ek blood protein) ka level increase hota hai, aur hormonal changes hoti hain. Second aur third trimester mein 30–70 mm/hr tak ESR normal maana jaata hai. Ghabrao mat agar pregnancy report mein ESR thoda badhaa dikhe — ye physiological change hai. Lekin agar ESR 70 mm/hr se zyada ho, ya saath mein bukhaar, joint pain, ya unusual thakan ho — toh doctor se zaroor milein.',
    whenDoctor: 'Baar baar bukhaar aaye, joints mein dard ho, kisi autoimmune bimari ki history ho, ya TB ya serious infection ka doubt ho.',
  },

  highMeans: [
    'Bacterial infections — TB (tuberculosis), pneumonia, UTI',
    'Viral infections — serious cases mein',
    'Fungal ya parasitic infections',
    'Rheumatoid Arthritis — joints ki chronic sujan',
    'Systemic Lupus Erythematosus (SLE)',
    'Temporal Arteritis',
    'Inflammatory Bowel Disease — Crohn\'s, Ulcerative Colitis',
    'Polymyalgia Rheumatica',
    'Anaemia (Khoon ki kami) — RBCs kam hon toh ESR badhta hai',
    'Kidney ki bimari (Kidney disease / Nephrotic Syndrome)',
    'Thyroid ki problem',
    'Kuch cancers — Multiple Myeloma, Lymphoma (lekin ESR cancer ka specific test NAHI hai)',
    'Pregnancy aur menstruation — natural cause, chinta nahi',
    'Obesity',
    'Kuch medicines — oral contraceptives, NSAIDs',
  ],
  highReassurance: 'Ek elevated ESR result khud koi diagnosis nahi hai. Ye sirf ek signal hai ki aage aur jaanch zaroori hai. Doctor aapki poori history, symptoms, aur doosre test dekh kar faisla karte hain.',

  lowMeans: [
    'Polycythemia Vera — RBCs ka bahut zyada hona',
    'Sickle Cell Anaemia — RBCs ki shape abnormal hoti hai',
    'Congestive Heart Failure',
    'Low plasma protein level',
    'Severe leukocytosis (bahut zyada white blood cells)',
    'Afibrinogenemia — fibrinogen protein ki kami',
  ],
  lowConcern: 'ESR ka low hona generally chinta ki baat nahi hai. Agar ESR bahut low aaye aur saath mein doosre tests bhi abnormal hon toh doctor se consult karein.',

  redFlags: [
    'ESR 100 mm/hr se zyada aaye — chahe koi symptom ho ya na ho',
    'Bukhaar ke saath ESR bahut high ho',
    'Vajan bina reason ke ghatta ho',
    'Joint dard, thakan, aur high ESR saath mein aaye',
    'Treatment chal raha ho aur ESR baar baar badh raha ho',
  ],
  emergencyLevel: 'ESR 100 mm/hr se zyada hone pe — especially bukhaar, joint dard, ya unexplained weight loss ke saath — doctor se bina deri ke milein.',
  selfTreatWarning: 'Report dekhkar khud treatment mat shuru karo. ESR sirf ek clue hai — asli diagnosis sirf qualified doctor hi kar sakta hai. Khud se antibiotic ya koi bhi medicine lena khatarnak ho sakta hai.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Subah khali pet preferred — din bhar ki activity aur khane se thodi variation aa sakti hai. Lekin strict zaroorat nahi.',
    whatToEat: 'Pani pee sakte hain — hydrated rehna accha hai. Khaana khake bhi test de sakte hain.',
    whatToAvoid: 'Heavy exercise test se pehle avoid karein — ESR pe thoda effect ho sakta hai.',
    medicineNote: 'Koi bhi medicine band mat karo doctor ki salah ke bina. Agar NSAIDs, corticosteroids, ya oral contraceptives chal rahe hon toh doctor aur lab ko zaroor batayein — ye ESR ko affect kar sakte hain.',
    accuracyNote: 'Subah ka waqt sabse better maana jaata hai. Ek hi din mein result ready ho jaata hai — generally 2–4 ghante mein.',
  },

  sampleInfo: {
    sampleType: 'Blood (Venous — haath ki kuhni ke paas se)',
    sampleAmount: '3 mL — Lavender top EDTA tube (minimum 1.5 mL)',
    reportTime: 'Same day — 2 to 4 ghante mein',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth-1',
      myth: 'ESR test ke liye khali pet rehna zaroori hai',
      truth: 'ESR ke liye fasting strict zaruri nahi hai. Aap normal khana khake bhi ye test de sakte hain. Subah khali pet dena preferred hai, lekin mandatory nahi.',
    },
    {
      _key: 'myth-2',
      myth: 'ESR high matlab zaroor cancer hai',
      truth: 'ESR cancer ka specific test nahi hai. High ESR ke 100 se zyada karan hain — infection, anaemia, autoimmune disease, pregnancy bhi. Cancer sirf un cases mein ek reason hota hai jahan ESR 100+ ho — aur wahan bhi aur tests se confirm kiya jaata hai.',
    },
    {
      _key: 'myth-3',
      myth: 'ESR test bahut dardnak hota hai',
      truth: 'Sirf ek chhoti needle se blood liya jaata hai — 2-3 second ka process. Thodi si chubhan hoti hai, koi dard nahi. Ye bilkul normal blood test jaisa hi hota hai.',
    },
    {
      _key: 'myth-4',
      myth: 'ESR normal hai toh body mein koi problem nahi',
      truth: 'Normal ESR hone ke bawajood bhi kuch serious conditions ho sakti hain — early stage infection, polycythemia, ya kuch cancers mein ESR normal bhi reh sakta hai. ESR sirf ek screening tool hai.',
    },
    {
      _key: 'myth-5',
      myth: 'ESR test se doctor bata deta hai konsi bimari hai',
      truth: 'ESR sirf inflammation ka level batata hai — koi specific disease diagnose nahi karta. Ye ek clue hai jo doctor aur tests ke saath mile tab kaam karta hai.',
    },
    {
      _key: 'myth-6',
      myth: 'Ek baar ESR normal aaya toh dobara test ki zarurat nahi',
      truth: 'Kuch chronic conditions mein ESR kabhi normal kabhi high hota hai. Doctor kahin baar regular monitoring ke liye repeat test likhte hain — especially TB, Rheumatoid Arthritis jaisi conditions mein.',
    },
  ],

  comparisons: [
    {
      _key: 'vs-crp',
      comparedTest: 'CRP Test',
      comparedTestSlug: 'crp',
      differencePoints: [
        'Kya measure karta | RBC sedimentation rate | C-Reactive Protein level',
        'Inflammation peak | 24–48 ghante baad dikhta hai | 6–12 ghante mein dikhta hai',
        'Normalize kab hota | Hafte ya mahine baad | 1–2 din mein',
        'Best use kab | Chronic conditions monitor karna | Acute infection detect karna',
        'Pregnancy mein | Naturally high hota hai | Relatively stable rehta hai',
        'Anaemia ka effect | Haan — ESR badhta hai | Nahi',
      ],
    },
  ],

  repeatInfo: `Normal aaya aur koi symptoms nahi: Koi symptoms nahi hain toh saalon tak dobara zarurat nahi. Routine checkup mein saal mein ek baar karwa sakte hain.

Treatment chal rahi ho: Doctor generally 4–8 hafte baad repeat karte hain. TB treatment mein har 2–3 mahine mein ESR monitor kiya jaata hai. Rheumatoid Arthritis jaise chronic conditions mein regular monitoring hoti hai.

High ESR ke baad: Pehle doosre tests (CRP, CBC, LFT, KFT) karaye jaate hain — cause dhundha jaata hai. Cause treat hone ke 4–8 hafte baad ESR dobara check kiya jaata hai taaki confirm ho ki inflammation kam hua ya nahi.`,

  linkedDiseases: [
    { _key: 'ld-arthritis',  diseaseName: 'Arthritis (Joint Sujan)',  diseaseSlug: 'arthritis',  isAvailable: false },
    { _key: 'ld-rheumatoid', diseaseName: 'Rheumatoid Arthritis',     diseaseSlug: 'rheumatoid', isAvailable: false },
    { _key: 'ld-tb',         diseaseName: 'Tuberculosis (TB)',        diseaseSlug: 'tb',         isAvailable: false },
    { _key: 'ld-thyroid',    diseaseName: 'Thyroid Bimari',          diseaseSlug: 'thyroid',    isAvailable: true },
  ],

  relatedTests: [
    { _key: 'rt-cbc',   testName: 'CBC Test (Complete Blood Count)', testSlug: 'cbc',        isAvailable: true },
    { _key: 'rt-crp',   testName: 'CRP Test (C-Reactive Protein)',   testSlug: 'crp',        isAvailable: false },
    { _key: 'rt-widal', testName: 'Widal Test',                      testSlug: 'widal-test', isAvailable: false },
    { _key: 'rt-ana',   testName: 'ANA Test',                        testSlug: 'ana-test',   isAvailable: false },
    { _key: 'rt-lft',   testName: 'LFT (Liver Function Test)',       testSlug: 'lft-test',   isAvailable: false },
    { _key: 'rt-kft',   testName: 'KFT (Kidney Function Test)',      testSlug: 'kft-test',   isAvailable: false },
  ],

  homeopathyAngle: `Ghabrao mat — ek abnormal ESR report diagnosis nahi hoti, ye sirf aage jaanch ka signal hai. Pehla kadam: Apni report lekar doctor ko dikhao aur unki salah ke mutabiq doosre tests karwao.

Agar baar baar ESR abnormal aa raha hai ya koi chronic condition hai — toh conventional treatment symptoms ko control karta hai, jabki Homeopathy underlying cause aur aapki overall immunity ko address karne mein helpful hai. Dr. Shadab Khan ka approach individualized hai — sirf ESR nahi, aapki poori health history, lifestyle, aur constitution dekha jaata hai. Homeopathy ke side effects practically nil hote hain.

Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    { _key: 'faq-1',  question: 'ESR test kya hota hai?',                      answer: 'ESR (Erythrocyte Sedimentation Rate) ek blood test hai jo body mein sujan (inflammation) ka pata lagata hai. Ye measure karta hai ki laal khoon ke kankake ek ghante mein kitni tezi se neeche baithte hain. High ESR matlab body mein koi sujan ya infection ho sakti hai — lekin ye kisi specific bimari ki diagnosis nahi karta.' },
    { _key: 'faq-2',  question: 'ESR test kyon kiya jaata hai?',               answer: 'Doctor ye test tab karte hain jab unexplained bukhaar, joint dard, thakan, ya infection ka doubt ho. Iske alawa TB monitoring, autoimmune disease tracking, aur treatment response dekhne ke liye bhi ye test hota hai.' },
    { _key: 'faq-3',  question: 'ESR test ki normal range kitni hai?',         answer: 'Normal range age aur gender ke hisaab se alag hoti hai. Purush (50 se kam): 0-15 mm/hr. Mahila (50 se kam): 0-20 mm/hr. 50 se upar dono ke liye thodi zyada range hoti hai. Pregnancy mein 30-70 mm/hr tak normal maana jaata hai.' },
    { _key: 'faq-4',  question: 'ESR test ke liye fasting chahiye ya nahi?',   answer: 'Fasting strict zaruri nahi hai. Aap khana khake bhi test de sakte hain. Subah khali pet dena preferred hota hai lekin mandatory nahi.' },
    { _key: 'faq-5',  question: 'ESR high hone ka matlab kya hai?',            answer: 'High ESR ka matlab hai ki body mein kahin sujan (inflammation) hai. Ye infection, autoimmune disease (jaise Rheumatoid Arthritis), TB, anaemia, pregnancy, ya doosri conditions ki wajah se ho sakta hai. Ye khud koi diagnosis nahi hai — doctor aur tests ke saath milake kaaran dhundha jaata hai.' },
    { _key: 'faq-6',  question: 'Kya ESR test se cancer pata chalta hai?',    answer: 'Nahi. ESR cancer ka specific test nahi hai. Cancer ke kuch cases mein ESR bahut high (100+ mm/hr) ho sakta hai — lekin high ESR ka matlab cancer nahi hota. High ESR ke 100+ possible reasons hain. Cancer sirf ek possible reason hai.' },
    { _key: 'faq-7',  question: 'ESR low matlab kya hai?',                    answer: 'Low ESR generally serious nahi hota. Polycythemia Vera (zyada RBCs), Sickle Cell Anaemia, Congestive Heart Failure, ya low plasma protein mein ESR low aa sakta hai. Doctor symptoms dekh kar faisla karte hain.' },
    { _key: 'faq-8',  question: 'ESR test kitne time mein aata hai?',         answer: 'Report same day aati hai — generally 2 to 4 ghante mein. Zyaadatar labs mein online report bhi milti hai — WhatsApp ya email pe.' },
    { _key: 'faq-9',  question: 'ESR aur CRP mein kya fark hai?',            answer: 'ESR chronic inflammation ke liye better hai aur dheere badh-ghatta hai. CRP acute inflammation mein jaldi badh-ghatta hai — 6-12 ghante mein peak hota hai. Doctor aksar dono saath likhte hain better picture ke liye.' },
    { _key: 'faq-10', question: 'Pregnancy mein ESR kitna hona chahiye?',     answer: 'Pregnancy mein ESR naturally badh jaata hai. Second aur third trimester mein 30-70 mm/hr tak normal maana jaata hai. Agar isse zyada aaye aur symptoms bhi hon toh doctor se milein.' },
    { _key: 'faq-11', question: 'Kya ESR test ghar pe ho sakta hai?',        answer: 'Ghar pe sample collection ho sakta hai — Metropolis, Lal PathLabs, Thyrocare jaisi labs home collection karti hain. Actual test lab mein hi hota hai.' },
    { _key: 'faq-12', question: 'ESR test kitni baar karwana chahiye?',      answer: 'Agar sab theek hai toh routine checkup mein saal mein ek baar kaafi hai. Chronic condition mein doctor batate hain kab repeat karein — generally 4-8 hafte baad. TB mein har 2-3 mahine monitor hota hai.' },
    { _key: 'faq-13', question: 'ESR 40 ya 50 hona kya normal hai?',         answer: 'Purush ya non-pregnant mahila ke liye 50 se kam umra mein 40-50 mm/hr elevated maana jaata hai. 50 se zyada umra mein thoda higher range acceptable hai. Doctor symptoms aur doosre tests dekh kar decide karte hain — sirf ek number se ghabrana nahi chahiye.' },
    { _key: 'faq-14', question: 'Kya ESR se TB pata chalta hai?',            answer: 'TB mein ESR aksar high hota hai — lekin sirf ESR se TB confirm nahi hoti. Sputum test, Mantoux test, aur chest X-ray ke saath milake diagnosis hoti hai. TB treatment chal rahi ho toh ESR monitor karne ke liye bhi ye test use hota hai.' },
    { _key: 'faq-15', question: 'ESR zyada ho toh kya khayein ya kya karein?', answer: 'Koi specific diet ya ghar pe ilaaj nahi hai. Pehle doctor se milein, kaaran dhundho, aur doctor ki salah ke mutabiq treatment lo. Report dekhkar khud treatment mat shuru karo.' },
  ],
}

async function main() {
  console.log('Seeding ESR Lab Test...')
  try {
    const result = await client.createOrReplace(esr)
    console.log(`✅ ESR seeded: ${result._id}`)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
