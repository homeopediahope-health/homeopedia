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

const hba1c = {
  _id: 'labtest-hba1c',
  _type: 'labTest',
  name: 'HbA1c Test (Glycated Hemoglobin)',
  fullForm: 'Hemoglobin A1c / Glycosylated Hemoglobin',
  hindiName: 'Glycated Hemoglobin Jaanch',
  slug: { _type: 'slug', current: 'hba1c' },
  category: 'Blood',
  metaTitle: 'HbA1c Test Kya Hai? Normal Range, High/Low Matlab & Kab Karaye (2026)',
  metaDescription: 'HbA1c (Glycated Hemoglobin) ka normal range, high/low matlab, kab karaye. Complete guide, verified, doctor-reviewed. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `HbA1c ya Glycated Hemoglobin ek blood test hai jo aapke pichhle 2-3 mahine ke average blood sugar (glucose) level ko ek hi baar mein measure karta hai.

HbA1c ka full form hai Hemoglobin A1c, jise Glycosylated Hemoglobin bhi kehte hain. Jab khoon mein sugar (glucose) zyada hoti hai toh woh hemoglobin ke saath chipak jaati hai. Is chipki hui sugar ko hi HbA1c kehte hain. Red blood cells 8-12 hafte tak jeeti hain, isliye ye test in 2-3 mahinon ka average sugar level batata hai, daily blood sugar test ki tarah sirf ek din ka nahi.

Iska sabse bada fayda ye hai ki ek baar ka sugar test sirf us din ki picture dikhata hai. HbA1c poore teen mahine ki kahani sunata hai. Isi wajah se diabetes ke diagnosis aur monitoring ke liye ye test "gold standard" mana jaata hai.

Simple tarike se samjho: Jaise exam mein ek din ka score nahi balki poore semester ka average dekha jaaye, HbA1c bilkul waise hi test hai aapki body ke liye.`,

  whenToTest: [
    'Diabetes hai ya doubt hai, diagnosis aur monitoring ke liye',
    'Baar baar thakan, zyada pyaas, baar baar peshab aana ya aankhon ka dhundhla dikhai dena',
    'Family mein diabetes ka history ho, parents ya siblings ko hai',
    'Weight zyada hai ya obesity hai',
    'Blood pressure high rehta ho ya cholesterol badha ho',
    'Pehli baar diabetes pakdi gayi ho, baseline establish karne ke liye',
    'Diabetes ki dawaiyaan chal rahi hain, result check karne ke liye',
    'Pregnancy mein sugar check karni ho',
    'Regular health check-up ke hisse ke taur pe, khaaskar 40 saal se upar',
    'PCOS hai, insulin resistance check ke liye',
  ],

  whatItDetects: `Is test se pata chalta hai ki kya aap diabetic hain. HbA1c 6.5% ya zyada hona diabetes ka sign hai. 5.7% se 6.4% ke beech hona prediabetes indicate karta hai.

Agar diabetes hai toh ye batata hai ki control mein hai ya nahi, treatment kitni kaam kar rahi hai. Aane waale complications jaise aankhon, kidneys aur nerves ka nuksan ka risk kitna hai ye bhi pata chalta hai.

Ye test specially un diabetic patients ke liye bahut important hai jo sirf daily sugar check karte hain. Din bhar ka sugar level up-down hota rehta hai lekin HbA1c dhoka nahi deta.`,

  normalRanges: [
    { _key: 'normal',   parameter: 'Normal (Non-Diabetic)',          normalRange: 'Below 5.7',   unit: '%', highBrief: 'Prediabetes / Diabetes risk',  lowBrief: 'Hemolytic anemia / Transfusion' },
    { _key: 'pre',      parameter: 'Prediabetes Range',              normalRange: '5.7 – 6.4',   unit: '%', highBrief: 'Diabetes hone ka high risk',   lowBrief: 'Normal ya low sugar (anemia)' },
    { _key: 'diab',     parameter: 'Diabetes (Diagnosis)',           normalRange: '6.5 ya zyada', unit: '%', highBrief: 'Diabetes confirmed',           lowBrief: '' },
    { _key: 'target',   parameter: 'Diabetic Target (ADA)',          normalRange: 'Below 7.0',   unit: '%', highBrief: 'Control theek nahi hai',       lowBrief: 'Hypo risk (overcorrection)' },
    { _key: 'child',    parameter: 'Children (6-17 yrs)',            normalRange: '4.8 – 5.7',   unit: '%', highBrief: 'Diabetes risk in children',    lowBrief: 'Anemia / hemoglobin issue' },
    { _key: 'preg',     parameter: 'Pregnancy (ideal target)',       normalRange: 'Below 5.7',   unit: '%', highBrief: 'Gestational diabetes risk',    lowBrief: 'Iron deficiency ya low RBC' },
    { _key: 'elderly',  parameter: 'Elderly (65+ years)',            normalRange: 'Below 7.5-8.0', unit: '%', highBrief: 'Doctor ki salah se adjust', lowBrief: 'Hypoglycemia ka zyada risk' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'Pregnancy mein ideal target 5.7% se kam hai. Pre-existing T1/T2 diabetes mein 5.4% se kam target rakha jaata hai. 6.5% ya zyada pregnancy mein pre-existing diabetes confirm mani jaati hai.',
    riskNote: `Pregnancy mein HbA1c ka use pehle trimester mein hota hai, pre-existing diabetes ya undiagnosed diabetes pakadne ke liye. Gestational Diabetes ke routine diagnosis ke liye Indian guidelines mein OGTT zyada preferred hai.

Pregnancy mein red blood cells zyada banti hain aur jaldi nayi ho jaati hain. Iska matlab HbA1c ka reading thoda kam aata hai asli sugar se bhi. HbA1c high hone pe baby ka weight zyada ho sakta hai (macrosomia), premature birth ka risk, pre-eclampsia ka risk aur baby ko birth ke baad sugar low hone ka risk ho sakta hai.`,
    whenDoctor: 'Pehli antenatal visit pe pre-existing diabetes check karne ke liye test hota hai. Family mein diabetes ka history ho, PCOS ya previous gestational diabetes hogi toh zaroor karwao. Ghabrao mat, ek test se sab decide nahi hota. Doctor OGTT bhi saath karwa sakte hain.',
  },

  highMeans: [
    'Type 2 Diabetes, sabse common reason. Body insulin sahi use nahi kar pa rahi',
    'Type 1 Diabetes, pancreas insulin nahi bana pa raha',
    'Prediabetes (5.7% to 6.4%), diabetes hone ki raah pe, abhi bhi rokna possible hai',
    'Kharaab diabetes control, pehle se diabetic hain lekin dawaiyaan ya lifestyle sahi nahi chal rahi',
    'Iron deficiency anemia, iron ki kami se RBC jaldi nahi banti. Purani cells zyada time rehti hain aur HbA1c thoda falsely high aa sakta hai',
    'Kidney disease (CKD), kuch conditions mein HbA1c unreliable ho sakta hai',
    'Splenectomy yaani spleen nikli ho, RBC lifespan badh jaati hai aur HbA1c inflate ho sakta hai',
    'Cushing syndrome ya steroid medicines, sugar metabolize karne mein dikkat',
  ],

  highReassurance: 'Ek baar ka high HbA1c matlab zaroor diabetes confirm nahi hota. Doctor dobaara test karwa sakte hain ya HbA1c ke saath fasting sugar ya OGTT bhi bolenge. Ghabrao mat, doctor se consult karo aur aage ki raah milegi.',

  lowMeans: [
    'Hemolytic anemia, RBC jaldi toot rahi hain. Nayi cells mein sugar kam chipkti hai',
    'Iron deficiency anemia ya B12 deficiency, RBC metabolism affect hoti hai',
    'Recent blood transfusion, nayi RBC hain jinpe sugar abhi chipki nahi',
    'Sickle cell disease ya thalassemia, HbA1c in conditions mein unreliable hota hai',
    'Liver disease, glycation ka process affect hota hai',
    'Zyada insulin ya diabetes medicines se hypoglycemia, sugar lagaataar low rehti hai',
  ],

  lowConcern: 'Agar pehle se diabetes ki dawai chal rahi hai aur HbA1c achanak bahut low aaye toh hypoglycemia ka risk hai. Agar anemia ke symptoms hain saath mein jaise thakaan, chakkar aur pale skin toh doctor se zaroor milein. Fructosamine test in conditions mein HbA1c ki jagah zyada accurate hota hai.',

  redFlags: [
    'HbA1c 9.0% ya usse zyada, uncontrolled diabetes aur complications ka serious risk',
    'HbA1c 6.5% pehli baar aaya ho, proper diagnosis aur treatment start karni hai',
    'Zyada pyaas, baar baar peshab, aankhon ka dhundhla hona, paaon mein sunn hona saath mein ho',
    'Pregnancy mein HbA1c 5.7% se upar aaye, turant obstetric guidance zaroori',
    'HbA1c pehle normal tha aur achanak 6.5%+ ho gaya',
    'Zyada pyaas aur baar baar peshab ke saath ulti aur pet dard aur breathlessness (DKA ka sign)',
    'Behoshi, confusion ya zyada paseena (severe hypoglycemia ka sign)',
  ],

  emergencyLevel: 'HbA1c 9.0%+ ke saath DKA ke symptoms (ulti, breathlessness, pet dard) ya severe hypoglycemia (behoshi, confusion) hon toh turant hospital jaao. Ye emergency hai.',

  selfTreatWarning: 'Report dekhkar khud treatment mat shuru karo. HbA1c ek diagnosis tool hai. Dawai khud choose karna ya insulin ki dose adjust karna dangerous ho sakta hai. Ye kaam hamesha doctor ka hai. Report lekar doctor ke paas jaao.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Koi bhi time theek hai, subah, dopahar ya shaam. HbA1c anytime kiya ja sakta hai. Agar usi din fasting sugar (FBS) bhi saath mein karwa rahe ho toh subah khali pet jaao, FBS dein, phir kuch khayein aur HbA1c bhi wahi de sakte hain.',
    whatToEat: 'Kuch bhi restrict nahi, normal khana-peena chal sakta hai. Kyunki ye 2-3 mahine ka average hai, ek waqt ka khaana isko affect nahi karta.',
    whatToAvoid: 'Agar saath mein fasting sugar bhi hai toh kam se kam 8 ghante khali pet rehna hoga us test ke liye. HbA1c ke liye koi restriction nahi hai.',
    medicineNote: 'Kuch medicines jaise iron supplements, erythropoietin ya high-dose Vitamin C HbA1c ko affect kar sakti hain. Doctor se puchho kya karna hai. Apni marzi se dawai band mat karo.',
    accuracyNote: 'HbA1c ki report accurate hoti hai jab pichle 3 mahine mein koi blood transfusion na hua ho. Agar haal hi mein 4-6 hafte mein transfusion hua hai toh doctor ko zaroor batao. HPLC method ya NGSP-certified method se test karna gold standard hai.',
  },

  sampleInfo: {
    sampleType: 'Blood (EDTA tube, purple/lavender cap, venous)',
    sampleAmount: 'Sirf 2-3 mL blood, bahut thoda sa',
    reportTime: 'Same day ya 4-6 ghante mein. Kuch labs 24 ghante mein dete hain.',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'HbA1c ke liye khali pet rehna zaroori hai',
      truth: 'HbA1c ke liye fasting ki koi zarurat nahi. Ye test kisi bhi waqt kiya ja sakta hai, khana khane ke baad bhi. Fasting sirf FBS (Fasting Blood Sugar) ke liye chahiye hoti hai.',
    },
    {
      _key: 'myth2',
      myth: 'HbA1c high matlab pakka diabetes hai aur ab theek nahi hoga',
      truth: '5.7% to 6.4% range prediabetes hai jo lifestyle changes se significantly reverse ya delay ki ja sakti hai. 6.5%+ bhi diagnosis ka starting point hai. Timely treatment se diabetes control mein laaya ja sakta hai. Ghabrao mat, doctor se baat karo.',
    },
    {
      _key: 'myth3',
      myth: 'HbA1c test bahut painful hota hai',
      truth: 'Sirf ek chhoti si needle se vein se 2-3 mL blood nikala jaata hai. Puri process 2-3 second ki hai. Koi bada dard nahi hota.',
    },
    {
      _key: 'myth4',
      myth: 'Ek HbA1c test se hi diabetes confirm ho jaati hai',
      truth: 'WHO aur Indian guidelines ke mutabiq, symptoms ke saath ek test kaafi hai. Lekin bina symptoms ke 6.5% aaye toh doctor zyada tar dobaara test karwate hain confirm karne ke liye.',
    },
    {
      _key: 'myth5',
      myth: 'HbA1c aur fasting sugar ek hi cheez hain',
      truth: 'Bilkul alag hain. Fasting blood sugar sirf us subah ka level dikhata hai. HbA1c pichle 2-3 mahine ka average batata hai. Dono ki apni jagah importance hai aur aksar doctor dono saath karwate hain.',
    },
    {
      _key: 'myth6',
      myth: 'HbA1c sirf diabetic patients ke liye hai',
      truth: 'HbA1c non-diabetics ke liye bhi zaroori hai, prediabetes pakadne ke liye. Khaaskar jinke family mein diabetes ka history ho, weight zyada ho ya blood pressure high rehta ho.',
    },
    {
      _key: 'myth7',
      myth: 'Anemia mein HbA1c test bilkul accurate hota hai',
      truth: 'Hemolytic anemia, iron deficiency severe anemia ya sickle cell mein HbA1c unreliable ho sakta hai. Is case mein doctor Fructosamine ya average glucose test prefer karte hain. Doctor ko anemia ke baare mein zaroor batao.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Fasting Blood Sugar (FBS)',
      comparedTestSlug: 'blood-sugar',
      differencePoints: [
        'Kya measure karta hai | Pichle 2-3 mahine ka average sugar | Sirf us subah ka fasting sugar',
        'Fasting chahiye | Nahi, anytime | Haan, 8 ghante strict',
        'Diabetes cutoff | 6.5% ya zyada | 126 mg/dL ya zyada',
        'Prediabetes range | 5.7% to 6.4% | 100 to 125 mg/dL',
        'Anemia mein accuracy | Unreliable ho sakta hai | Reliable rehta hai',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'PPBS (Post Prandial Blood Sugar)',
      comparedTestSlug: '',
      differencePoints: [
        'Kya measure karta hai | 3 mahine ka average | Khana khane ke 2 ghante baad sugar',
        'Best use | Long-term monitoring | Post-meal control check',
        'Fasting chahiye | Nahi | Standardized meal ke baad 2 ghante wait',
        'Diabetes cutoff | 6.5% | 200 mg/dL ya zyada',
        'Anytime test | Haan | Nahi, meal timing important hai',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'Fructosamine Test',
      comparedTestSlug: '',
      differencePoints: [
        'Time period | Pichle 2-3 mahine | Pichle 2-3 hafte',
        'Anemia mein | Unreliable ho sakta hai | Accurate, preferred in anemia',
        'Pregnancy mein | Thoda unreliable | Preferred option',
        'Common use | Routine diabetes monitoring | Jab HbA1c unreliable ho',
        'Availability | Har lab mein available | Kuch specialized labs mein',
      ],
    },
  ],

  repeatInfo: `Normal non-diabetic, low risk: saal mein ek baar routine checkup mein kaafi hai.

Prediabetes (5.7% to 6.4%): har 6 mahine mein. Lifestyle changes ka result dekhne ke liye.

Newly diagnosed diabetes: pehle 3 mahine treatment ke baad response check karne ke liye.

Stable diabetes oral medicines pe: har 6 mahine mein ek baar.

Insulin-dependent ya uncontrolled diabetes: har 3 mahine mein. ADA recommendation hai.

Treatment change ke baad: agla test 3 mahine baad. Ek full red blood cell cycle ke baad hi meaningful result aata hai.

Golden rule: HbA1c ko 3 mahine se pehle repeat karna zyada useful nahi hota. Naya reading tabhi meaningful hoga jab puri RBC cycle complete ho jaaye.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Type 2 Diabetes', diseaseSlug: 'diabetes', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Type 1 Diabetes', diseaseSlug: 'type-1-diabetes', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Prediabetes', diseaseSlug: 'prediabetes', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Gestational Diabetes', diseaseSlug: 'gestational-diabetes', isAvailable: false },
    { _key: 'ld5', diseaseName: 'PCOS / PCOD', diseaseSlug: 'pcod', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Metabolic Syndrome', diseaseSlug: 'metabolic-syndrome', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc', isAvailable: true },
    { _key: 'rt2', testName: 'Lipid Profile', testSlug: 'lipid-profile', isAvailable: true },
    { _key: 'rt3', testName: 'Fasting Blood Sugar (FBS)', testSlug: 'fasting-blood-sugar', isAvailable: false },
    { _key: 'rt4', testName: 'Post Prandial Blood Sugar (PPBS)', testSlug: 'ppbs', isAvailable: false },
    { _key: 'rt5', testName: 'Random Blood Sugar (RBS)', testSlug: 'random-blood-sugar', isAvailable: false },
    { _key: 'rt6', testName: 'OGTT (Oral Glucose Tolerance Test)', testSlug: 'ogtt', isAvailable: false },
    { _key: 'rt7', testName: 'Insulin Fasting', testSlug: 'insulin-fasting', isAvailable: false },
    { _key: 'rt8', testName: 'Fructosamine', testSlug: 'fructosamine', isAvailable: false },
  ],

  homeopathyAngle: `Ek abnormal HbA1c ghabrane ki baat nahi hai. Yahi toh iska kaam hai, problem ko samay se pakadna.

Conventional diabetes management sugar symptoms ko control karta hai. Homeopathy root cause yaani insulin resistance, metabolic imbalance aur body ki andar ki weakness ko address karne mein sahayak ho sakti hai. Baar baar badhta HbA1c ek signal hai ki body andar se kuch struggle kar rahi hai. Individualized homeopathic treatment mein poori health history dekhi jaati hai aur side effects practically nil hote hain. Ye conventional treatment ki jagah nahi, balki uske saath kaam kar sakti hai.

Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'HbA1c test kya hai?',
      answer: 'HbA1c ya Glycated Hemoglobin ek blood test hai jo aapke pichhle 2-3 mahine ka average blood sugar level measure karta hai. Ye diabetes diagnose karne aur uska control check karne ke liye sabse reliable test maana jaata hai.',
    },
    {
      _key: 'faq2',
      question: 'HbA1c ka normal range kitna hona chahiye India mein?',
      answer: 'Normal range 5.7% se kam maani jaati hai. 5.7% to 6.4% prediabetes hai aur 6.5% ya zyada diabetes ki taraf indicate karta hai. Ye WHO aur ADA guidelines hain jo Indian labs bhi follow karti hain.',
    },
    {
      _key: 'faq3',
      question: 'Kya HbA1c ke liye khali pet rehna zaroori hai?',
      answer: 'Nahi. HbA1c ke liye fasting ki zarurat nahi. Kisi bhi waqt, kuch bhi khane ke baad de sakte hain. Ye test din ke kisi bhi hisse mein diya ja sakta hai.',
    },
    {
      _key: 'faq4',
      question: 'HbA1c high hone ka kya matlab hai?',
      answer: '5.7% to 6.4% prediabetes (warning zone) hai. 6.5% ya zyada diabetes indicate karta hai. Ye kuch conditions mein falsely high bhi aa sakta hai jaise iron deficiency anemia. Doctor se confirm karo, khud diagnosis mat karo.',
    },
    {
      _key: 'faq5',
      question: 'HbA1c low hone ka kya matlab hai?',
      answer: '4.0% se kam HbA1c hemolytic anemia, sickle cell disease, recent blood transfusion ya severe hypoglycemia ki wajah se ho sakta hai. Doctor ko batao.',
    },
    {
      _key: 'faq6',
      question: 'Kya HbA1c blood test hai ya urine test?',
      answer: 'Sirf blood test hai, urine se nahi hota. EDTA tube mein venous blood sample liya jaata hai.',
    },
    {
      _key: 'faq7',
      question: 'HbA1c aur fasting sugar mein kya fark hai?',
      answer: 'Fasting sugar sirf us subah ka level dikhata hai, ek snapshot. HbA1c pichhle 2-3 mahine ka average hai, ek zyada reliable picture. Aksar dono saath karwaye jaate hain.',
    },
    {
      _key: 'faq8',
      question: 'HbA1c ki report kitne time mein aati hai?',
      answer: 'Zyada tar labs mein 4-6 ghante ya same day. Kuch labs agla din dete hain. Online report bhi available hoti hai major labs mein.',
    },
    {
      _key: 'faq9',
      question: 'Kya HbA1c se cancer pakad mein aata hai?',
      answer: 'Nahi. HbA1c sirf blood sugar aur hemoglobin ka relationship measure karta hai. Cancer detect karne ke liye alag tests hote hain jaise tumor markers ya biopsy. HbA1c se cancer diagnose nahi hota.',
    },
    {
      _key: 'faq10',
      question: 'Pregnancy mein HbA1c kitna hona chahiye?',
      answer: 'Pregnancy mein HbA1c 5.7% se kam ideal mana jaata hai. Pre-existing diabetes mein 5.4% se kam target rakha jaata hai. 6.5% ya zyada hone pe pre-existing diabetes maani jaati hai. Gestational diabetes ke liye OGTT test zyada preferred hai.',
    },
    {
      _key: 'faq11',
      question: 'HbA1c har kitne mahine mein karwana chahiye?',
      answer: 'Prediabetes mein har 6 mahine. Oral medicine diabetic stable mein har 6 mahine. Insulin ya uncontrolled mein har 3 mahine. Normal healthy adult mein saal mein ek baar kaafi hai.',
    },
    {
      _key: 'faq12',
      question: 'HbA1c 5.7% agar aaye toh kya karna chahiye?',
      answer: '5.7% prediabetes range hai. Ghabrao mat lekin seriously lo. Doctor se milein. Diet improve karo (refined sugar aur maida kam karo), daily 30 minute walk shuru karo aur weight normal range pe laane ki koshish karo. Timely action se diabetes rok sakte hain.',
    },
    {
      _key: 'faq13',
      question: 'Kya HbA1c anemia mein accurate hota hai?',
      answer: 'Hemolytic anemia, sickle cell ya severe iron deficiency mein HbA1c unreliable ho jaata hai. Doctor aise cases mein Fructosamine test prefer karte hain.',
    },
    {
      _key: 'faq14',
      question: 'HbA1c 6.5% ka kya matlab hai?',
      answer: '6.5% WHO aur ADA guidelines ke mutabiq diabetes ka diagnosis threshold hai. Agar symptoms bhi hain ya dobaara test pe bhi yahi aaye toh timely treatment shuru karni chahiye.',
    },
    {
      _key: 'faq15',
      question: 'Kya HbA1c ghar pe kiya ja sakta hai?',
      answer: 'Haan, market mein home HbA1c test kits available hain. Lekin unki accuracy lab-based HPLC method se thodi kam hoti hai. Screening ke liye theek hai lekin diagnosis ya treatment decisions ke liye lab test hi karwaana chahiye.',
    },
    {
      _key: 'faq16',
      question: 'HbA1c 6.5% se zyada hone pe kya khaana avoid karein?',
      answer: 'High refined sugar, maida yaani white bread aur biscuits aur cake, mithai, sweet drinks aur fruit juices avoid karein. Whole fruit prefer karo. Ye general advice hai. Ek registered dietitian ya diabetes educator se personalized diet plan lo.',
    },
    {
      _key: 'faq17',
      question: 'HbA1c report kaise padhein?',
      answer: '5.7% se kam normal hai. 5.7% to 6.4% prediabetes hai. 6.5% aur upar diabetes range hai. Agar IFCC units yaani mmol/mol mein ho toh 5.7% = 39 mmol/mol aur 6.5% = 48 mmol/mol hota hai.',
    },
    {
      _key: 'faq18',
      question: 'HbA1c test kitne time mein normal ho sakta hai?',
      answer: 'Lifestyle changes aur treatment se 3 mahine mein sudhar dikhne lag sakta hai kyunki HbA1c ka ek cycle 3 mahine ka hai. Consistent effort se HbA1c gradually normal range pe aa sakta hai.',
    },
    {
      _key: 'faq19',
      question: 'HbA1c HPLC method se hona chahiye kya?',
      answer: 'Haan, HPLC yaani High-Performance Liquid Chromatography ya NGSP-certified method HbA1c ke liye gold standard hai. India mein Dr. Lal PathLabs, Metropolis aur SRL jaise NABL-accredited labs HPLC method use karti hain. Kisi bhi unknown lab mein test karwane se pehle unka certification check karo.',
    },
    {
      _key: 'faq20',
      question: 'HbA1c aur OGTT mein kya fark hai?',
      answer: 'HbA1c pichle 2-3 mahine ka average sugar batata hai, anytime diya ja sakta hai. OGTT yaani Oral Glucose Tolerance Test mein glucose solution pilake 2 ghante baad sugar check kiya jaata hai. OGTT gestational diabetes diagnosis ke liye India mein preferred test hai. Dono ka apna alag use hai.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(hba1c)
    console.log('✅ HbA1c Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
