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

const cbc = {
  _id: 'labtest-cbc',
  _type: 'labTest',
  name: 'CBC Test',
  fullForm: 'Complete Blood Count',
  hindiName: 'Poora Khoon Jaanch',
  slug: { _type: 'slug', current: 'cbc' },
  category: 'Blood',
  metaTitle: 'CBC Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'CBC test ka normal range, high/low matlab, fasting info aur kab karaye — complete Hinglish guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `CBC ya Complete Blood Count ek blood test hai jo aapke khoon ke teen main components — Red Blood Cells (lal khoon ke kane), White Blood Cells (safed khoon ke kane), aur Platelets (khoon jamane wale khatke) — ko ek saath measure karta hai.

Isko ek tarah ka "health dashboard" samjho aapke khoon ka. Ek hi test mein doctor ko pata chal jaata hai ki aapke khoon mein koi infection hai, anemia hai, ya khoon se related koi aur problem ho sakti hai.

CBC test ka poora naam hai Complete Blood Count — aur ye India mein sabse zyada kiye jaane wale blood tests mein se ek hai. Ek hi test mein bahut saari information milti hai — aur cost bhi bahut zyada nahi hoti.

Is test mein mainly ye measure hota hai: RBC (oxygen carry karte hain), WBC (infection se ladaai karte hain), Platelets (khoon rokne mein madad), Hemoglobin (oxygen-carrying protein), Hematocrit, MCV, MCH, MCHC, RDW, aur MPV.`,

  whenToTest: [
    'Bahut zyada thakaan ho aur reason pata na ho — CBC se anemia detect hota hai',
    'Baar baar bukhar aaye ya infection ka doubt ho — WBC count se bacterial ya viral infection pakad mein aati hai',
    'Dengue ya typhoid ka doubt ho — Platelet count check hota hai, dengue mein platelet bahut tezi se girte hain',
    'Khoon ki kami (anemia) ka shak ho — RBC, hemoglobin aur hematocrit se confirm ya rule out hota hai',
    'Koi surgery honi ho — operation se pehle body ki overall blood health check hoti hai',
    'Pregnancy mein routine checkup — anemia aur infection dono ka risk monitor hota hai',
    'Koi chronic bimari ho jaise diabetes, kidney disease, ya BP — CBC se monitor hota hai',
    'Bahut zyada neend aaye, chakkar aaye, ya saans lene mein taklif ho',
    'Unexplained weight loss ya raat ko paseena aaye — doctor further evaluation ke liye CBC likhta hai',
    'Koi medicine chal rahi ho jo blood affect kare — chemotherapy, antibiotics ya kuch BP medicines',
  ],
  whatItDetects: `CBC ek akela test hai jo anemia, infection, inflammation, aur clotting disorders ko indicate kar sakta hai. Ye test diagnosis nahi karta — ye doctor ko direction deta hai ki aage kaunse tests karwane hain.

Ye ek bahut hi basic test hai — lagbhag har bimari ki initial jaanch mein doctor pehle CBC hi likhta hai. Koi bhi symptom ho — thakaan, bukhar, dard — CBC pehla step hota hai.`,

  normalRanges: [
    { _key: 'rbc-male',        parameter: 'RBC (Mard)',               normalRange: '4.5 – 5.5',        unit: 'million/µL', highBrief: 'Dehydration, Polycythemia',       lowBrief: 'Anemia, Blood Loss' },
    { _key: 'rbc-female',      parameter: 'RBC (Aurat)',              normalRange: '3.5 – 4.5',        unit: 'million/µL', highBrief: 'Dehydration, Polycythemia',       lowBrief: 'Anemia, Iron Deficiency' },
    { _key: 'rbc-pregnancy',   parameter: 'RBC (Pregnancy)',          normalRange: '3.5 – 5.0',        unit: 'million/µL', highBrief: 'Rare in pregnancy',               lowBrief: 'Iron/Folate Deficiency' },
    { _key: 'rbc-children',    parameter: 'RBC (Bachche 1–12 saal)', normalRange: '3.8 – 5.2',        unit: 'million/µL', highBrief: '—',                               lowBrief: 'Nutritional Anemia' },
    { _key: 'hb-male',         parameter: 'Hemoglobin (Mard)',        normalRange: '13.0 – 17.0',      unit: 'g/dL',       highBrief: 'Polycythemia, Dehydration',       lowBrief: 'Anemia, Blood Loss' },
    { _key: 'hb-female',       parameter: 'Hemoglobin (Aurat)',       normalRange: '12.0 – 15.0',      unit: 'g/dL',       highBrief: 'Polycythemia',                    lowBrief: 'Iron Deficiency Anemia' },
    { _key: 'hb-pregnancy',    parameter: 'Hemoglobin (Pregnancy)',   normalRange: '11.0 – 14.0',      unit: 'g/dL',       highBrief: 'Rare',                            lowBrief: 'Iron/Folate Deficiency' },
    { _key: 'hb-children',     parameter: 'Hemoglobin (Bachche)',     normalRange: '11.5 – 15.5',      unit: 'g/dL',       highBrief: '—',                               lowBrief: 'Nutritional Anemia' },
    { _key: 'hb-newborn',      parameter: 'Hemoglobin (Navjaat)',     normalRange: '14.0 – 24.0',      unit: 'g/dL',       highBrief: 'Normal at birth',                 lowBrief: 'Needs evaluation' },
    { _key: 'wbc-total',       parameter: 'WBC (Total)',              normalRange: '4,000 – 11,000',   unit: '/µL',        highBrief: 'Infection, Inflammation',         lowBrief: 'Viral illness, Bone marrow' },
    { _key: 'neutrophils',     parameter: 'Neutrophils',              normalRange: '40 – 70',          unit: '%',          highBrief: 'Bacterial infection',             lowBrief: 'Viral infection, Chemo' },
    { _key: 'lymphocytes',     parameter: 'Lymphocytes',             normalRange: '20 – 40',          unit: '%',          highBrief: 'Viral infection, TB',             lowBrief: 'Immune suppression' },
    { _key: 'monocytes',       parameter: 'Monocytes',               normalRange: '2 – 8',            unit: '%',          highBrief: 'Chronic infection',               lowBrief: 'Rare' },
    { _key: 'eosinophils',     parameter: 'Eosinophils',             normalRange: '1 – 4',            unit: '%',          highBrief: 'Allergy, Parasitic infection',    lowBrief: 'Rare' },
    { _key: 'basophils',       parameter: 'Basophils',               normalRange: '0 – 1',            unit: '%',          highBrief: 'Allergic reaction (rare)',         lowBrief: 'Rare' },
    { _key: 'platelets',       parameter: 'Platelets',               normalRange: '1,50,000 – 4,50,000', unit: '/µL',    highBrief: 'Infection, Inflammation',         lowBrief: 'Dengue, ITP, Bone marrow' },
    { _key: 'hct-male',        parameter: 'Hematocrit (Mard)',       normalRange: '38.8 – 46.4',      unit: '%',          highBrief: 'Dehydration',                     lowBrief: 'Anemia' },
    { _key: 'hct-female',      parameter: 'Hematocrit (Aurat)',      normalRange: '35.4 – 44.4',      unit: '%',          highBrief: '—',                               lowBrief: 'Anemia' },
    { _key: 'hct-pregnancy',   parameter: 'Hematocrit (Pregnancy)',  normalRange: '33 – 42',          unit: '%',          highBrief: '—',                               lowBrief: 'Iron Deficiency' },
    { _key: 'mcv',             parameter: 'MCV',                     normalRange: '80 – 100',         unit: 'fL',         highBrief: 'B12/Folate deficiency',           lowBrief: 'Iron deficiency anemia' },
    { _key: 'mch',             parameter: 'MCH',                     normalRange: '24 – 32',          unit: 'pg',         highBrief: 'Macrocytic anemia',               lowBrief: 'Iron deficiency' },
    { _key: 'mchc',            parameter: 'MCHC',                    normalRange: '32 – 36',          unit: 'g/dL',       highBrief: 'Dehydration (rare)',              lowBrief: 'Iron deficiency, Thalassemia' },
    { _key: 'rdw',             parameter: 'RDW',                     normalRange: '11.5 – 14.5',      unit: '%',          highBrief: 'Mixed anemia, B12 deficiency',    lowBrief: '—' },
    { _key: 'mpv',             parameter: 'MPV',                     normalRange: '7.5 – 12.5',       unit: 'fL',         highBrief: 'Platelet destruction',            lowBrief: 'Bone marrow issue' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'Hemoglobin 11.0–14.0 g/dL | WBC 6,000–16,000 /µL | Platelets 1,30,000+ /µL',
    riskNote: 'Pregnancy mein CBC test bilkul safe hai — sirf ek chhoti blood sample li jaati hai. Pregnancy mein blood volume naturally badhta hai isliye values thodi diluted lagti hain — ye normal hai. Hemoglobin 11.0 g/dL se kam ho toh anemia mana jaata hai (WHO aur ICMR India ke liye yahi recommendation). Platelet 1,30,000 tak aksar normal variation hoti hai. WBC pregnancy mein naturally thoda high rehta hai — 6,000 se 16,000 tak.',
    whenDoctor: 'Pehli antenatal visit pe, har trimester mein monitoring ke liye, agar thakaan/chakkar/paleness ke symptoms hon, aur delivery se pehle CBC routine likhte hain.',
  },

  highMeans: [
    'WBC high — Bacterial infection (sabse common karan)',
    'WBC high — Viral infection (kuch mein temporarily high hota hai)',
    'WBC high — Inflammation ya injury ke baad',
    'WBC high — Stress response (physical ya emotional)',
    'WBC high — Kuch medicines ka effect (steroids etc.)',
    'Hemoglobin/RBC high — Dehydration (aksar iska karan yahi hota hai)',
    'Hemoglobin/RBC high — Smoking (chronic smokers mein commonly high)',
    'Hemoglobin/RBC high — High altitude pe rehna',
    'Hemoglobin/RBC high — Polycythemia vera (rare condition)',
    'Platelet high — Infection ya inflammation ke baad (reactive — resolves on its own)',
    'Platelet high — Iron deficiency',
    'Platelet high — Surgery ke baad reactive thrombocytosis',
  ],
  highReassurance: 'Ek abnormal value se ghabrana zaroori nahi — doctor poori report aur symptoms milake decide karta hai. Akela CBC koi bimari confirm nahi karta.',

  lowMeans: [
    'Hemoglobin/RBC low — Iron ki kami (India mein sabse common, especially females aur children mein — ICMR data ke mutabik ~50% women iron deficient hain)',
    'Hemoglobin/RBC low — Vitamin B12 ya Folate deficiency',
    'Hemoglobin/RBC low — Blood loss (heavy periods, injury, surgery)',
    'Hemoglobin/RBC low — Chronic kidney disease',
    'Hemoglobin/RBC low — Thalassemia ya sickle cell (genetic — India mein common, especially Gujarat, Maharashtra, Bengal, Tamil Nadu mein)',
    'WBC low — Viral infections (kuch mein WBC temporarily girta hai — dengue, influenza)',
    'WBC low — Bone marrow problem (rare)',
    'WBC low — Kuch medicines especially chemotherapy',
    'WBC low — Autoimmune conditions',
    'Platelet low — Dengue (India mein platelet girne ka sabse common karan, har monsoon season)',
    'Platelet low — Viral fever',
    'Platelet low — ITP (Immune Thrombocytopenic Purpura)',
    'Platelet low — Liver disease (alcohol-related aur hepatitis B/C se common India mein)',
    'Platelet low — Bone marrow issue (rare)',
  ],
  lowConcern: 'Low values pe turant ghabrao mat. Doctor symptoms ke saath values milake assessment karta hai — sirf number se koi diagnosis nahi hoti.',

  redFlags: [
    'Hemoglobin 8 g/dL se kam — severe anemia ka risk, bina deri ke doctor dikhao',
    'WBC 2,000 se kam ya 30,000 se zyada — serious condition ho sakti hai',
    'Platelet 50,000 se kam — bleeding risk badh jaata hai',
    'Platelet 20,000 se kam — EMERGENCY — turant hospital jaayein',
    'Achanak bahut zyada thakaan + chakkar + paleness',
    'Body pe achanak neele dabbe (bruising) bina kisi injury ke',
    'Naak ya gum se baar baar khoon aana',
  ],
  emergencyLevel: 'Platelet 20,000 se kam ho toh turant emergency hai. Hemoglobin 8 se kam, WBC 2,000 se kam ya 30,000 se zyada — bina deri ke doctor ke paas jaayein.',
  selfTreatWarning: 'Report dekhkar khud se koi bhi treatment ya supplement shuru mat karein. Khoon se related reports mein doctor ka guidance zaroori hai — iron, B12 ya koi bhi supplement doctor ki salah ke baad hi lein.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Koi bhi time — subah ya shaam, fark nahi padta',
    whatToEat: 'Kuch bhi khake ja sakte hain — khaana CBC values ko directly affect nahi karta.',
    whatToAvoid: 'Heavy exercise test se ek din pehle avoid karein — WBC temporarily badh sakta hai. Bahut zyada stress ya neend na aane pe values thodi alag aa sakti hain — ye normal hai.',
    medicineNote: 'Apni regular medicines band mat karein bina doctor ki salah ke. Agar koi nai medicine recently shuru ki hai toh doctor ko batayein — kuch medicines CBC values affect karti hain (steroids, chemotherapy, kuch antibiotics).',
    accuracyNote: 'Test wale din normal pani peete rehna — dehydration se values thodi affect hoti hain. Agar sirf CBC hai toh koi special preparation nahi chahiye.',
  },

  sampleInfo: {
    sampleType: 'Blood (Venous — haath ki nass se)',
    sampleAmount: '2-3 mL — ek chhoti si nalli bhar',
    reportTime: 'Same day — 2 se 4 ghante mein. Urgent cases mein 1-2 ghante',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth-1',
      myth: 'CBC test ke liye khali pet rehna zaroori hai',
      truth: 'CBC test ke liye fasting ki koi zarurat nahi hai. Aap khaana khake bhi ye test de sakte hain kisi bhi waqt. Sirf tab fasting karein jab doctor ne specifically kaha ho ya saath mein fasting wale tests hon.',
    },
    {
      _key: 'myth-2',
      myth: 'CBC abnormal matlab zaroor serious bimari hai',
      truth: 'Ek abnormal value se koi diagnosis nahi hoti. Infection, thakaan, stress, neend ki kami — in sab se bhi CBC values temporarily change ho sakti hain. Doctor poori report aur symptoms milake hi decide karta hai.',
    },
    {
      _key: 'myth-3',
      myth: 'CBC test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle — 2-3 second ka process. Normal blood test jaisa hi hota hai. Needle lagne ke baad kuch feel nahi hota. Zyaadatar log ise bilkul normal paate hain.',
    },
    {
      _key: 'myth-4',
      myth: 'CBC se cancer pakka pata chal jaata hai',
      truth: 'CBC directly cancer diagnose nahi karta. Ye test sirf blood cells ka count aur size measure karta hai. Agar koi value bahut abnormal ho toh doctor specific tests recommend karta hai — jaise bone marrow biopsy — jo cancer confirm karte hain. Akele CBC se cancer ka conclusion nikalna galat hai.',
    },
    {
      _key: 'myth-5',
      myth: 'Ek baar CBC normal aaye toh dobara karwane ki zarurat nahi',
      truth: 'Kuch conditions mein regular monitoring zaroori hoti hai — jaise anemia treatment ke baad response check karna, dengue mein platelet monitor karna, ya chronic bimari mein follow-up. Doctor ke advice pe repeat test zaroor karwayein.',
    },
    {
      _key: 'myth-6',
      myth: 'WBC high hai matlab infection pakka hai',
      truth: 'WBC high hone ke kai possible kaaran hain — bacterial infection sirf ek hai. Stress, exercise, steroids, inflammation, ya kuch medicines se bhi WBC temporarily badh sakta hai. Single value se diagnosis nahi hoti.',
    },
  ],

  comparisons: [
    {
      _key: 'vs-esr',
      comparedTest: 'ESR',
      comparedTestSlug: 'esr',
      differencePoints: [
        'CBC blood cells count karta hai — RBC, WBC, platelets ka count aur size. ESR inflammation ki rate measure karta hai',
        'CBC zyada specific hai — particular cells ki problem dikhata hai. ESR general inflammation marker hai',
        'CBC acute symptoms mein zyada useful — infection, anemia, dengue. ESR chronic/long-term conditions mein — TB, arthritis',
        'Fasting: dono mein zarurat nahi',
        'Report time: CBC 2-4 ghante, ESR 1-2 ghante',
      ],
    },
    {
      _key: 'vs-crp',
      comparedTest: 'CRP (C-Reactive Protein)',
      comparedTestSlug: 'crp-test',
      differencePoints: [
        'CBC blood cells measure karta hai. CRP inflammation protein (C-Reactive Protein) measure karta hai',
        'Infection detect: CBC WBC count se karta hai. CRP direct inflammation marker hai — bahut jaldi badh jaata hai',
        'CRP acute infection/inflammation mein zyada sensitive hai. CBC overall blood health deta hai',
        'Doctor aksar CBC + CRP dono saath likhta hai — dono milake better picture dete hain',
      ],
    },
  ],

  repeatInfo: `Normal report aur koi symptoms nahi: Routine health checkup mein saal mein ek baar kaafi hai. 40 saal ke baad 6 mahine mein ek baar better hai.

Anemia treatment chal rahi ho: Iron ya B12 supplements shuru karne ke 4-6 hafte baad repeat karein — treatment ka response check hone mein itna time lagta hai.

Dengue ya fever mein: Doctor din mein ek ya do baar CBC keh sakta hai — platelet monitoring ke liye. Doctor ki instruction zaroor follow karein.

Koi infection theek ho rahi ho: Antibiotics course khatam hone ke 1-2 hafte baad ek baar repeat se confirm hota hai ki WBC normal hua ya nahi.

Chronic bimari (diabetes, kidney) mein: Doctor 3-6 mahine mein regular monitoring recommend karta hai.`,

  linkedDiseases: [
    { _key: 'ld-infection', diseaseName: 'Infection (Bacterial / Viral)', diseaseSlug: 'infection', isAvailable: false },
    { _key: 'ld-anaemia',   diseaseName: 'Anaemia (Khoon Ki Kami)',       diseaseSlug: 'anaemia',   isAvailable: false },
    { _key: 'ld-dengue',    diseaseName: 'Dengue',                        diseaseSlug: 'dengue',    isAvailable: false },
    { _key: 'ld-typhoid',   diseaseName: 'Typhoid',                       diseaseSlug: 'typhoid',   isAvailable: false },
    { _key: 'ld-thyroid',   diseaseName: 'Thyroid Bimari',                diseaseSlug: 'thyroid',   isAvailable: true },
    { _key: 'ld-diabetes',  diseaseName: 'Diabetes',                      diseaseSlug: 'diabetes',  isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt-esr',      testName: 'ESR Test',                     testSlug: 'esr',              isAvailable: true },
    { _key: 'rt-crp',      testName: 'CRP Test',                     testSlug: 'crp',              isAvailable: false },
    { _key: 'rt-smear',    testName: 'Peripheral Blood Smear',       testSlug: 'peripheral-smear', isAvailable: false },
    { _key: 'rt-ferritin', testName: 'Iron Studies / Serum Ferritin', testSlug: 'serum-ferritin', isAvailable: false },
    { _key: 'rt-b12',      testName: 'Vitamin B12 Test',             testSlug: 'vitamin-b12',      isAvailable: false },
    { _key: 'rt-lft',      testName: 'LFT / KFT',                   testSlug: 'lft',              isAvailable: false },
  ],

  homeopathyAngle: `CBC report mein baar baar anemia, low WBC, ya platelet issues dikhein toh homeopathy ek deeper angle se dekti hai — sirf numbers theek karna kaafi nahi.

Homeopathy mein aapki poori health history, lifestyle, aur symptoms milake individualized treatment milta hai. Iron deficiency anemia ho toh sirf iron supplement dene ki jagah hum ye samajhne ki koshish karte hain ki body iron absorb kyun nahi kar rahi, digestion kaisa hai, koi underlying cause toh nahi.

Side effects practically nil hain — long term safe hai, conventional medicines ke saath bhi chal sakti hai. Apni report lekar Dr. Shadab Khan se consult karein — individualized guidance ke liye.`,

  faqs: [
    { _key: 'faq-1',  question: 'CBC test kya hota hai?',                                       answer: 'CBC yaani Complete Blood Count ek blood test hai jo aapke khoon ke teen main components — Red Blood Cells, White Blood Cells, aur Platelets — ko measure karta hai. Ek hi test mein doctor ko khoon ki overall health ka pata chal jaata hai — anemia hai, infection hai, ya kuch aur issue hai. Ye India mein sabse zyada kiye jaane wale blood tests mein se ek hai.' },
    { _key: 'faq-2',  question: 'CBC ka normal range kitna hona chahiye?',                      answer: 'India-specific normal ranges:\n- Hemoglobin: Mard 13–17 g/dL, Aurat 12–15 g/dL\n- WBC: 4,000–11,000 /µL\n- Platelets: 1,50,000–4,50,000 /µL\n- RBC: Mard 4.5–5.5 million/µL, Aurat 3.5–4.5 million/µL\nAapki lab ki report mein reference range diya hota hai — usi se compare karein.' },
    { _key: 'faq-3',  question: 'CBC test ke liye fasting chahiye?',                             answer: 'CBC test ke liye fasting ki zarurat NAHI hai. Aap khaana khake bhi kisi bhi waqt test de sakte hain. Sirf tab fasting karein jab doctor ne specifically kaha ho ya saath mein fasting wale tests (jaise blood sugar) bhi hon.' },
    { _key: 'faq-4',  question: 'CBC test kab karwana chahiye?',                                answer: 'Doctor CBC test tab likhta hai jab bahut zyada thakaan ho, baar baar bukhar aaye, dengue ya typhoid ka doubt ho, khoon ki kami ka shak ho, surgery honi ho, ya pregnancy mein routine checkup ke liye.' },
    { _key: 'faq-5',  question: 'CBC test mein dard hota hai kya?',                             answer: 'Nahi — CBC test mein sirf ek chhoti needle lagi jaati hai haath ki nass mein — 2-3 second ka process hai. Needle lagne ke ek second baad kuch feel nahi hota. Ye bilkul normal blood test jaisa hi hota hai.' },
    { _key: 'faq-6',  question: 'CBC test ki report kitne time mein aati hai?',                 answer: 'CBC test ki report same day aati hai — usually 2 se 4 ghante mein. Emergency ya urgent cases mein 1-2 ghante mein bhi milti hai. Zyaadatar labs mein aajkal online report bhi milti hai — WhatsApp ya email pe.' },
    { _key: 'faq-7',  question: 'CBC high hone ka matlab kya hai?',                             answer: '"CBC high" ka matlab alag parameters ke hisaab se alag hota hai:\n- WBC high: Bacterial infection, inflammation, ya stress response possible hai\n- Hemoglobin high: Dehydration ya polycythemia possible hai\n- Platelet high: Infection ke baad reactive response ya iron deficiency possible hai\nSirf ek value se diagnosis nahi hoti — doctor poori report aur symptoms milake decide karta hai.' },
    { _key: 'faq-8',  question: 'CBC low hone ka matlab kya hai?',                              answer: '- Hemoglobin low: Iron deficiency anemia (India mein sabse common), B12/folate deficiency, ya blood loss possible hai\n- WBC low: Viral infection, kuch medicines, ya bone marrow issue possible hai\n- Platelet low: Dengue, viral fever, ya ITP possible hai\nLow value pe bhi sirf report dekhkar koi conclusion mat nikalo — doctor se milein.' },
    { _key: 'faq-9',  question: 'Kya CBC se cancer pata chalta hai?',                           answer: 'CBC test directly cancer diagnose nahi karta. Ye test sirf blood cells ka count aur size measure karta hai. Agar koi value bahut abnormal ho toh doctor aage ke specific tests recommend karta hai jo cancer confirm kar sakein, jaise bone marrow biopsy. Akele CBC se ghabrana zaroori nahi — infection, anemia, ya stress mein bhi values affect hoti hain.' },
    { _key: 'faq-10', question: 'CBC test pregnancy mein safe hai?',                            answer: 'Haan, CBC test pregnancy mein bilkul safe hai — sirf ek chhoti blood sample li jaati hai. Pregnancy mein ye test almost routine hai kyunki anemia aur infection dono ka risk rehta hai. Pregnancy mein normal ranges thodi alag hoti hain — doctor usi context mein dekhta hai.' },
    { _key: 'faq-11', question: 'CBC ke liye best time kab hai?',                               answer: 'CBC ke liye koi specific best time nahi hai — subah ho ya shaam, kuch bhi khake ya peekar — test de sakte hain. Sirf agar doctor ne kaha ho ki fasting chahiye tab hi khali pet jaayein.' },
    { _key: 'faq-12', question: 'CBC test ghar pe ho sakta hai?',                               answer: 'Haan, Dr Lal PathLabs, Metropolis, Thyrocare, Aster Labs — ye sabhi India mein home collection service deti hain. Ek phlebotomist ghar aake blood sample leta hai. Online book kar sakte hain ya app se bhi. Home collection ke liye additional convenience charge lagta hai.' },
    { _key: 'faq-13', question: 'CBC test kitne din mein ek baar karwana chahiye?',             answer: 'Healthy adult ke liye saal mein ek baar routine checkup mein kaafi hai. 40+ age mein 6 mahine mein ek baar better hai. Anemia treatment mein 4-6 hafte baad repeat karein. Dengue ya acute illness mein doctor ki instruction pe zyada baar ho sakta hai.' },
    { _key: 'faq-14', question: 'CBC aur ESR test mein kya fark hai?',                          answer: 'CBC blood cells count karta hai — RBC, WBC, platelets. ESR inflammation ki rate measure karta hai. CBC zyada specific hai — particular cells ki problem dikhata hai. ESR general inflammation marker hai — chronic conditions jaise TB ya arthritis mein zyada useful hai.' },
    { _key: 'faq-15', question: 'CBC report mein WBC high aaye toh kya karein?',               answer: 'Report lekar doctor ke paas jaayein — khud se koi antibiotic ya medicine shuru mat karein. Doctor symptoms aur baaki report values dekhke decide karega ki infection hai ya koi aur reason. WBC high hone ke kai possible reasons hain — sirf WBC number se koi conclusion nahi.' },
    { _key: 'faq-16', question: 'Kya CBC test se dengue pata chalta hai?',                      answer: 'CBC test dengue confirm nahi karta — lekin platelet count aur WBC dengue ko strongly indicate kar sakte hain. Dengue mein platelet tezi se girte hain aur WBC low hota hai. Dengue confirm karne ke liye NS1 Antigen ya Dengue IgM/IgG test kiya jaata hai. Dengue ka doubt ho toh doctor CBC ke saath dengue-specific tests bhi likhta hai.' },
    { _key: 'faq-17', question: 'Kya CBC se typhoid pata chalta hai?',                          answer: 'CBC typhoid diagnose nahi karta — lekin WBC pattern typhoid mein characteristic hota hai (low ya normal WBC). Typhoid confirm karne ke liye Widal Test ya Typhidot test hota hai. CBC ek supporting test ki tarah kaam karta hai.' },
    { _key: 'faq-18', question: 'CBC normal range pregnancy mein kitni hoti hai?',              answer: 'Pregnancy mein (India-specific, WHO/ICMR ke mutabik):\n- Hemoglobin: 11.0 g/dL se zyada hona chahiye — 11 se kam anemia maana jaata hai\n- WBC: 6,000–16,000 tak normal hai (pregnancy mein naturally thoda high)\n- Platelets: 1,30,000 se zyada usually acceptable hai\nHemoglobin 11 se kam aaye toh doctor iron/folate supplementation suggest karta hai.' },
    { _key: 'faq-19', question: 'CBC report mein kaunse values zyada important hain?',          answer: 'Har case mein alag values important hoti hain:\n- Thakaan ya anemia ke liye: Hemoglobin, RBC, MCV\n- Infection ke liye: WBC (especially differential — neutrophils vs lymphocytes)\n- Dengue ya bleeding ke liye: Platelet count\n- Overall health: Sabhi values milake dekhi jaati hain' },
    { _key: 'faq-20', question: 'CBC test ke baad kya karna chahiye?',                          answer: 'Report aaye toh doctor ko dikhao — khud se koi conclusion mat nikalo. Agar koi value normal range se bahar hai toh ghabrao mat — doctor batayega ki kuch concern hai ya nahi. Report print karke rakho ya phone mein save karo future reference ke liye.' },
  ],
}

async function main() {
  console.log('Seeding CBC Lab Test...')
  try {
    const result = await client.createOrReplace(cbc)
    console.log(`✅ CBC seeded: ${result._id}`)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
