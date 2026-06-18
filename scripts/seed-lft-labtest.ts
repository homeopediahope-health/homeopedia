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

const lft = {
  _id: 'labtest-lft',
  _type: 'labTest',
  name: 'LFT (Liver Function Test)',
  fullForm: 'Liver Function Test',
  hindiName: 'Jigar Ki Jaanch / Liver Test',
  slug: { _type: 'slug', current: 'liver-function-test-lft' },
  category: 'Blood',
  metaTitle: 'LFT Test Kya Hai? Normal Range, High/Low Matlab & Kab Karaye (2026)',
  metaDescription: 'Liver Function Test (LFT) ka normal range, ALT/AST/bilirubin matlab, kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `LFT ya Liver Function Test ek blood test ka panel hai jo aapke liver (jigar) ki sehat jaanchne ke liye kiya jaata hai — isme ek saath 10-12 parameters measure hote hain jaise enzymes, proteins aur bilirubin.

Liver hamare body ka sabse bada andar ka organ hai. Ye khaane ko digest karta hai, khoon saaf karta hai, dawa ko process karta hai, aur zaroori proteins banata hai. Agar liver theek se kaam na kare — toh poora body feel karta hai.

LFT test basically liver ka "report card" hai. Is test se doctor samajhta hai ki liver ki cells (hepatocytes) theek hain ya damage ho rahi hain, bile (pitt) sahi se flow ho raha hai ya blockage hai, liver proteins banana band kar raha hai ya nahi, aur liver pe koi dawa ya infection ka asar pad raha hai.

Ye ek simple blood test hai — ek injection, thoda sa blood, aur 24-48 ghante mein report taiyar. Agar aapke doctor ne "LFT karwa lo" kaha hai — ghabrao mat. Ye test bahut common hai aur aksar routine checkup mein bhi hota hai.`,

  whenToTest: [
    'Aankhon ya skin ka peela hona (jaundice — piliya) — bilirubin badh raha hai',
    'Pet ke upar daaye taraf dard ya bhaari pan — liver area mein discomfort',
    'Bhookh bilkul na lagna, ulti jaisi feeling lagna',
    'Thakaan jo rest karne se bhi na jaaye — liver fatigue ka sign',
    'Urine ka rang gehre peele ya brown hona — bile leak ka sign',
    'Pairon ya pet mein sujan (swelling) — advanced liver issue mein hota hai',
    'Itching — bina kisi rash ke khujli, bile salts skin mein deposit se',
    'Regular alcohol lete hain — monitoring ke liye har 6 mahine',
    'Koi liver ki bimari pehle se hai (fatty liver, hepatitis) — treatment track karne ke liye',
    'TB ki dawayein, cholesterol drugs, ya long-term painkillers chal rahi hain — ye liver affect karti hain',
    'Diabetes, obesity, ya PCOD hai — in mein fatty liver ka risk zyada hota hai',
    'Annual health checkup ya pre-surgical assessment ke liye',
  ],

  whatItDetects: `LFT test in conditions ka pata lagata hai: Fatty Liver (India mein sabse common, aksar koi symptom nahi pehle), Jaundice (Piliya — bilirubin badh jaata hai), Viral Hepatitis (A, B, ya C), Liver Cirrhosis (liver pe scars), Alcoholic Liver Disease, Bile Duct Blockage (gallstones se), Drug-Induced Liver Injury (TB ki dawayein, long-term painkillers), aur pregnancy mein HELLP syndrome.

YAAD RAKHO: Ek akeli abnormal value se diagnosis nahi hoti. Doctor poore panel ko saath mein dekhta hai — pattern matter karta hai, sirf ek number nahi.`,

  normalRanges: [
    { _key: 'alt',        parameter: 'ALT / SGPT',              normalRange: '7 – 56',      unit: 'U/L',   highBrief: 'Liver damage / Hepatitis',   lowBrief: 'Practically concern nahi' },
    { _key: 'ast',        parameter: 'AST / SGOT',              normalRange: '10 – 40',     unit: 'U/L',   highBrief: 'Liver ya muscle damage',     lowBrief: 'Rarely concern' },
    { _key: 'alp',        parameter: 'ALP (Alkaline Phosphatase)', normalRange: '40 – 129', unit: 'U/L',   highBrief: 'Bile blockage / Bone disease', lowBrief: 'Malnutrition' },
    { _key: 'ggt-male',   parameter: 'GGT (Male)',              normalRange: '11 – 52',     unit: 'U/L',   highBrief: 'Alcohol / Liver / Bile duct', lowBrief: 'Rarely concern' },
    { _key: 'ggt-female', parameter: 'GGT (Female)',            normalRange: '7 – 38',      unit: 'U/L',   highBrief: 'Alcohol / Liver / Bile duct', lowBrief: 'Rarely concern' },
    { _key: 'tbil',       parameter: 'Total Bilirubin',         normalRange: '0.3 – 1.2',   unit: 'mg/dL', highBrief: 'Jaundice / Liver damage',    lowBrief: 'Rarely concern' },
    { _key: 'dbil',       parameter: 'Direct Bilirubin',        normalRange: '0.0 – 0.3',   unit: 'mg/dL', highBrief: 'Bile duct blockage',         lowBrief: '—' },
    { _key: 'ibil',       parameter: 'Indirect Bilirubin',      normalRange: '0.2 – 0.8',   unit: 'mg/dL', highBrief: 'Hemolysis / Liver damage',   lowBrief: '—' },
    { _key: 'albumin',    parameter: 'Albumin',                 normalRange: '3.5 – 5.5',   unit: 'g/dL',  highBrief: 'Dehydration',                lowBrief: 'Liver failure / Malnutrition' },
    { _key: 'total-prot', parameter: 'Total Protein',           normalRange: '6.3 – 8.2',   unit: 'g/dL',  highBrief: 'Infection / Dehydration',    lowBrief: 'Liver / Kidney disease' },
    { _key: 'ag-ratio',   parameter: 'A/G Ratio',               normalRange: '1.0 – 2.5',   unit: '—',     highBrief: '—',                          lowBrief: 'Liver / Kidney disease' },
    { _key: 'pt',         parameter: 'PT (Prothrombin Time)',   normalRange: '9.4 – 12.5',  unit: 'sec',   highBrief: 'Liver failure / Clotting issue', lowBrief: '—' },
    { _key: 'inr',        parameter: 'INR',                     normalRange: '0.8 – 1.2',   unit: 'ratio', highBrief: 'Liver failure / Clotting issue', lowBrief: '—' },
    // Pregnancy-specific
    { _key: 'alp-preg',   parameter: 'ALP — Pregnancy (Normal Rise)', normalRange: '2x – 4x higher', unit: 'U/L', highBrief: 'Normal — placenta se aata hai', lowBrief: '—' },
    { _key: 'alb-preg',   parameter: 'Albumin — Pregnancy',    normalRange: '2.5 – 4.5',   unit: 'g/dL',  highBrief: '—',                          lowBrief: 'Hemodilution — normal hai' },
    // Children note
    { _key: 'alp-child',  parameter: 'ALP — Bachche (<18 years)', normalRange: '100 – 350', unit: 'U/L',   highBrief: 'Normal — haddiyan grow ho rahi hain', lowBrief: '—' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'ALP 2x–4x higher (placenta se — normal hai) | Albumin 2.5–4.5 g/dL (hemodilution se) | GGT 3rd trimester mein lower | Total Bilirubin slightly lower',
    riskNote: `Pregnancy mein kuch LFT changes bilkul normal hain. ALP automatically 2 se 4 guna badh jaata hai — placenta se extra ALP banta hai, ye liver problem nahi. Albumin thoda kam ho jaata hai kyunki khoon mein paani zyada ho jaata hai (hemodilution) — ye bhi normal hai. GGT teesri trimester mein thoda kam hota hai.

Pregnant hone ki baat lab pe ya apni report pe zaroor note karein — doctor already in changes ko jaanta hai aur alag context mein interpret karta hai. Agar in changes ko ignore karein aur normal adult range se compare karein toh galat conclusion nikalega.`,
    whenDoctor: 'Piliya (jaundice) ke symptoms aayein, pet mein dard ya itching ho, Pre-eclampsia ya HELLP syndrome ka doubt ho, ya pehle se liver disease ho — tab doctor pregnancy mein LFT likhta hai.',
  },

  highMeans: [
    'ALT/SGPT high — Fatty Liver (India mein sabse common reason, obesity/diabetes se linked)',
    'ALT/SGPT high — Viral Hepatitis A, B, ya C',
    'ALT/SGPT high — Alcohol ka zyada sevan',
    'ALT/SGPT high — Koi dawa ka liver pe side effect (paracetamol overdose, TB drugs, statins)',
    'ALT/SGPT high — Thyroid problem ya muscle injury',
    'AST/SGOT high — Liver damage (saath mein ALT bhi badha ho toh liver ka issue confirm)',
    'AST/SGOT high — Heart muscle damage (akele AST badhe, ALT normal ho toh)',
    'AST:ALT ratio 2:1 se zyada — Alcohol-related liver damage strongly indicate karta hai',
    'ALP high — Bile duct blockage (gallstones ki wajah se)',
    'ALP high — Bone disease ya pregnancy (dono mein normal hota hai)',
    'GGT high — Alcohol abuse (GGT sabse sensitive alcohol indicator hai)',
    'Total Bilirubin high — Jaundice (piliya), RBC ka zyada tootna (hemolysis)',
    'Albumin low — Serious liver disease, malnutrition, ya kidney disease',
  ],
  highReassurance: 'Ghabrao mat — ek abnormal value se koi specific bimari confirm nahi hoti. Intense exercise se bhi AST thoda badh sakta hai. Doctor poora context dekhta hai — akela number nahi. Doctor se consult karo, khud diagnosis mat karo.',

  lowMeans: [
    'ALT/AST low — Generally normal, koi concern nahi',
    'Albumin low — Liver fail ho raha ho, malnutrition, kidney disease (nephrotic syndrome), ya chronic inflammation',
    'Total Protein low — Liver disease (protein banana band kar raha hai), ya malabsorption',
    'A/G Ratio low (Albumin kam, Globulin zyada) — Liver cirrhosis, autoimmune liver disease, ya chronic infection',
    'ALP low — Rare hai, hypothyroidism ya severe malnutrition mein possible',
  ],
  lowConcern: 'Albumin 2.5 g/dL se kam ho — serious liver function loss indicate karta hai, doctor se zaroor milein. Total Protein low + Albumin low — malnutrition ya liver disease ka sign, evaluation zaroori.',

  redFlags: [
    'Aankhon ya skin mein tezi se pilaahat (jaundice) — turant doctor',
    'Pet mein achanak tez dard — khaaskar upar daaye taraf — liver ya gallbladder emergency',
    'Urine bilkul brown ya dark cola jaise ho jaaye',
    'Pet mein ya pairon mein achanak sujan (swelling) badhe',
    'Bahut zyada kamzori — uthna baithna mushkil ho',
    'Confusion ya bhaaram ho — serious liver condition (hepatic encephalopathy) ka sign',
    'Kisi medicine ke baad ALT bahut tezi se badh jaaye',
    'ALT ya AST 120 U/L se zyada (3x normal) — turant consult',
    'Bilirubin 3 mg/dL se zyada — jaundice visible hone lagta hai',
    'Albumin 2.5 g/dL se kam — serious liver function loss',
    'PT/INR significantly high — blood clotting issue, liver serious condition mein',
  ],
  emergencyLevel: 'Confusion + jaundice + dark urine + sujan — ye combination serious liver failure ka sign hai, turant hospital. ALT 3x normal (120+ U/L) + symptoms — same day consultation zaroori.',
  selfTreatWarning: 'Report dekhkar khud treatment mat shuru karo. Sirf doctor hi LFT report ka sahi matlab bata sakta hai — pattern aur symptoms milake diagnosis hoti hai, akele number se nahi.',

  preparation: {
    fastingRequired: true,
    fastingHours: 12,
    bestTime: 'Subah khali pet — raat ka khana 8-9 baje kha lo, test subah 8-10 baje. Dr Lal PathLabs aur Aster Labs dono 10-12 ghante fasting confirm karte hain.',
    whatToEat: 'Raat ko halka khana khaao — bahut zyada oily ya fatty dinner avoid karo. Paani peete raho — paani se fast nahi tootna aur dehydration bhi nahi hoti.',
    whatToAvoid: 'Test se pehle raat ko alcohol bilkul nahi — ALT aur GGT temporarily badh jaate hain. Oily ya heavy khana raat ko avoid karo. Test ke waqt intense exercise mat karo — AST temporarily badh sakta hai.',
    medicineNote: 'Agar koi dawa chal rahi hai — doctor se poochho pehle ki band karni hai ya nahi. Khud band mat karo bina permission ke. TB ki dawayein, statins, painkillers — ye specifically LFT affect karti hain.',
    accuracyNote: 'Fasting sahi ho, alcohol na liya ho (kam se kam 24 ghante), subah ka test ho — report accurate rahegi. Ek baar test ke baad 15-20 minute baad aap normal kha-pee sakte hain.',
  },

  sampleInfo: {
    sampleType: 'Blood (Venous — haath ki nass se)',
    sampleAmount: '5-10 mL — ek chhoti si tube',
    reportTime: '24 se 48 ghante. Dr Lal PathLabs: 48-72 ghante (email bhi milti hai). Zyaatar labs same day ya next day',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth-1',
      myth: 'LFT ke liye khali pet rehna zaroori nahi',
      truth: 'Nahi — LFT ke liye 10-12 ghante ka fasting ZAROORI hai. Bina fasting ke ALT aur kuch values temporarily affect ho jaati hain — galat result aa sakta hai. Dr Lal PathLabs aur Aster Labs dono confirm karte hain ki fasting compulsory hai accurate LFT ke liye.',
    },
    {
      _key: 'myth-2',
      myth: 'ALT ya AST thoda high matlab liver kharab ho gaya',
      truth: 'Nahi — ek abnormal value se bimari confirm nahi hoti. Intense exercise se bhi AST thoda badh sakta hai. Doctor poora context dekhta hai — akela number nahi. Mild elevation aksar temporary hoti hai. Doctor se consult karo — ghabrao mat.',
    },
    {
      _key: 'myth-3',
      myth: 'ALP pregnancy mein bahut high — matlab liver problem hai',
      truth: 'Bilkul nahi — pregnancy mein ALP naturally 2 se 4 guna badh jaata hai (placenta se). Ye bilkul normal physiological change hai. Doctor already jaanta hai — isliye pregnant hone ki baat zaroor batao lab ko aur report pe note karo.',
    },
    {
      _key: 'myth-4',
      myth: 'LFT normal aa gayi toh liver 100% theek hai',
      truth: 'LFT screening test hai — kuch conditions mein (jaise early cirrhosis) LFT months tak normal reh sakti hai. Agar symptoms hain toh sirf normal LFT pe rely mat karo — doctor aage ke tests (Fibroscan, ultrasound) bhi kara sakte hain.',
    },
    {
      _key: 'myth-5',
      myth: 'Liver test sirf sharaabiyon ke liye hota hai',
      truth: 'Bilkul galat — India mein Non-Alcoholic Fatty Liver bahut common hai. Diabetes, obesity, TB ki dawa — in sabki wajah se bhi LFT abnormal ho sakta hai. Ye test sabke liye hai. Alcohol bilkul na peene wale logon mein bhi fatty liver milti hai.',
    },
    {
      _key: 'myth-6',
      myth: 'LFT bahut painful test hota hai',
      truth: 'Ek chhota sa blood sample — sirf 2-3 second. Bilkul normal blood test hai. Thoda sa pinch feel hoga needle lagne pe — woh bhi jald. Koi dard nahi rehta baad mein.',
    },
  ],

  comparisons: [
    {
      _key: 'vs-usg',
      comparedTest: 'Ultrasound Abdomen',
      comparedTestSlug: '',
      differencePoints: [
        'LFT blood test hai — liver ke enzymes aur proteins ka level measure karta hai. Ultrasound imaging hai — liver ka size, texture, fatty deposits dikhata hai',
        'LFT pehla step hai — screening. Ultrasound LFT abnormal aane ke baad kiya jaata hai confirm karne ke liye',
        'Fasting: LFT ke liye 10-12 ghante, Ultrasound ke liye 6-8 ghante (alag reason se)',
        'LFT liver damage ka chemical evidence deta hai. Ultrasound structural changes dikhata hai — dono ek doosre ke complementary hain',
      ],
    },
    {
      _key: 'vs-kft',
      comparedTest: 'KFT (Kidney Function Test)',
      comparedTestSlug: 'kidney-function-test',
      differencePoints: [
        'LFT liver (jigar) check karta hai — ALT, AST, ALP, GGT, Bilirubin, Albumin. KFT kidney (gurde) check karta hai — Creatinine, Urea, Uric Acid',
        'LFT kab: jaundice, fatty liver, hepatitis, liver damage doubt mein. KFT kab: swelling, urine kam aana, kidney disease doubt mein',
        'Serious illness mein doctor dono saath order karta hai — liver aur kidney dono affected ho sakte hain',
        'Albumin dono mein common parameter hai — low Albumin liver aur kidney dono problems mein aata hai',
      ],
    },
  ],

  repeatInfo: `Normal result — aage kab check karein:
Koi symptoms nahi: Annual checkup mein dobara.
High risk log (alcohol, diabetes, obesity): 6 mahine mein ek baar.

Abnormal result:
Treatment ya lifestyle change ke baad: 4 se 8 hafte mein repeat.
Koi dawa chal rahi ho jo liver affect kare: Har 3 mahine monitor karna common hai.

Specific conditions:
Fatty Liver diagnosed: Har 6 mahine LFT.
Hepatitis B ya C treatment: Har 3 mahine.
TB treatment (DOTS): Har 2 mahine mandatory — DOTS protocol mein included hai.
Surgery ke baad: Doctor ke schedule ke hisaab se.`,

  linkedDiseases: [
    { _key: 'ld-fatty-liver',   diseaseName: 'Fatty Liver (NAFLD)',           diseaseSlug: 'fatty-liver',   isAvailable: true  },
    { _key: 'ld-jaundice',      diseaseName: 'Jaundice (Piliya)',              diseaseSlug: 'jaundice',      isAvailable: false },
    { _key: 'ld-hepatitis',     diseaseName: 'Hepatitis (A, B, C)',            diseaseSlug: 'hepatitis',     isAvailable: false },
    { _key: 'ld-cirrhosis',     diseaseName: 'Liver Cirrhosis',               diseaseSlug: 'liver-cirrhosis', isAvailable: false },
    { _key: 'ld-gallstones',    diseaseName: 'Gallstones (Pitt Ki Pathri)',   diseaseSlug: 'gallstones',    isAvailable: false },
    { _key: 'ld-diabetes',      diseaseName: 'Diabetes (Fatty Liver se linked)', diseaseSlug: 'diabetes',   isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt-cbc',           testName: 'CBC (Complete Blood Count)',        testSlug: 'cbc',                  isAvailable: true  },
    { _key: 'rt-lipid',         testName: 'Lipid Profile',                    testSlug: 'lipid-profile',        isAvailable: true  },
    { _key: 'rt-tsh',           testName: 'Thyroid Profile (TSH)',            testSlug: 'thyroid-profile-tsh',  isAvailable: true  },
    { _key: 'rt-hbsag',         testName: 'HBsAg Test (Hepatitis B)',         testSlug: 'hbsag',                isAvailable: false },
    { _key: 'rt-hep-c',         testName: 'Hepatitis C Antibody Test',        testSlug: 'hepatitis-c',          isAvailable: false },
    { _key: 'rt-kft',           testName: 'KFT (Kidney Function Test)',       testSlug: 'kft',                  isAvailable: false },
    { _key: 'rt-hba1c',         testName: 'HbA1c / Blood Sugar',             testSlug: 'hba1c',                isAvailable: false },
  ],

  homeopathyAngle: `Ghabrao mat — ek abnormal LFT value zaroor koi serious bimari confirm nahi karti. Report lekar apne doctor se milein — woh poori history dekhkar sahi direction batayenge.

Agar LFT baar baar abnormal aa raha hai aur symptoms bhi hain, toh sirf symptom treat karna kaafi nahi — root cause address karna zaroori hai. Homeopathy is approach mein helpful hai — poori health history, lifestyle aur constitution dekhkar individualized treatment di jaati hai jo underlying cause address karne mein kaam aati hai. Side effects practically nil hote hain.

Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    { _key: 'faq-1',  question: 'LFT test kya hota hai?', answer: 'LFT ya Liver Function Test ek blood panel hai jisme 10-12 parameters ek saath measure hote hain — enzymes (ALT, AST, ALP, GGT), proteins (albumin, total protein) aur bilirubin. Ye liver ki overall sehat jaanchne ke liye kiya jaata hai. Liver hamare body ka sabse bada andar ka organ hai jo khaana digest karna, khoon saaf karna, dawa process karna — sab karta hai.' },
    { _key: 'faq-2',  question: 'LFT panel mein kaunse tests shamil hote hain?', answer: 'Standard LFT panel mein shamil hain: ALT (SGPT), AST (SGOT), ALP, GGT, Total Bilirubin, Direct Bilirubin, Indirect Bilirubin, Albumin, Total Protein, A/G Ratio, aur PT/INR. Kuch labs "LFT with GGT" alag se offer karti hain. Doctor requirement ke hisaab se basic ya comprehensive LFT order karta hai.' },
    { _key: 'faq-3',  question: 'LFT ki normal range kya hai?', answer: 'Parameter-wise normal ranges: ALT 7–56 U/L, AST 10–40 U/L, ALP 40–129 U/L, GGT (male) 11–52 U/L, GGT (female) 7–38 U/L, Total Bilirubin 0.3–1.2 mg/dL, Albumin 3.5–5.5 g/dL, Total Protein 6.3–8.2 g/dL, INR 0.8–1.2. Har report mein reference range diya hota hai — us column se compare karo.' },
    { _key: 'faq-4',  question: 'ALT/SGPT ki normal range kya hai?', answer: 'ALT (purana naam SGPT) ki normal range 7 se 56 U/L hai. Ye liver-specific enzyme hai — agar badha hai toh liver cells mein damage ya inflammation possible hai. Mild elevation (2x normal tak) kabhi kabhi temporary hoti hai. 3x se zyada badhe toh doctor se consult karo.' },
    { _key: 'faq-5',  question: 'AST/SGOT ki normal range kya hai?', answer: 'AST (purana naam SGOT) ki normal range 10 se 40 U/L hai. Ye liver aur muscles dono mein hota hai. ALT ke saath badhna liver issue indicate karta hai. Akele AST badhna zaroor liver nahi — heart muscle damage ya intense exercise se bhi badh sakta hai.' },
    { _key: 'faq-6',  question: 'AST aur ALT ratio kya honi chahiye?', answer: 'Normal mein AST:ALT ratio 1:1 ke kareeb hoti hai. Agar ratio 2:1 se zyada ho toh alcoholic liver disease possible. Dono same proportion mein badhein toh viral hepatitis ya fatty liver suggest karta hai. Ye ratio doctor ke liye important diagnostic clue hoti hai.' },
    { _key: 'faq-7',  question: 'LFT test fasting chahiye ya nahi?', answer: 'Haan — 10 se 12 ghante ka fasting zaroori hai. Paani pee sakte hain — paani se fast nahi tootna. Test se pehle raat ko alcohol bilkul nahi — ALT aur GGT temporarily badh jaate hain aur galat result aa sakta hai. Subah ka test best hota hai.' },
    { _key: 'faq-8',  question: 'LFT elevated hone ka kya matlab hai?', answer: 'Liver pe koi stress hai — disease, dawa, alcohol, ya infection ki wajah se. Sirf ek elevated value se koi specific bimari confirm nahi hoti. Doctor poora panel milake, symptoms dekhkar, aur history ke saath diagnosis karta hai. Ghabrao mat — pehle doctor se milein.' },
    { _key: 'faq-9',  question: 'GGT high hone ka kya matlab hai?', answer: 'GGT high hone ke possible reasons: alcohol ka zyada sevan (GGT sabse sensitive alcohol indicator hai), bile duct blockage, fatty liver, ya kuch medicines. GGT aur ALP dono high hon toh liver ya bile duct problem confirm hoti hai. Doctor se consult karo.' },
    { _key: 'faq-10', question: 'ALP pregnancy mein itna high kyu hota hai?', answer: 'Pregnancy mein ALP automatically 2 se 4 guna badh jaata hai — placenta se extra ALP banta hai. Ye bilkul normal physiological change hai, liver problem nahi. Doctor already jaanta hai — isliye pregnant hone ki baat lab pe aur apni report pe zaroor note karein. Isse ghabrao mat.' },
    { _key: 'faq-11', question: 'Bilirubin high hone ka kya matlab hai?', answer: 'Bilirubin ek yellow pigment hai jo red blood cells tootne ke baad banta hai. Total Bilirubin 1.2 mg/dL se zyada hone pe jaundice start ho sakta hai — aankhein aur skin peeli dikhne lagti hain. High Direct Bilirubin — bile duct blockage. High Indirect Bilirubin — RBC ka zyada tootna (hemolysis). Doctor se consult karo.' },
    { _key: 'faq-12', question: 'LFT mein albumin low matlab kya?', answer: 'Albumin liver banata hai — ye ek important protein hai. Albumin low hona serious liver disease, malnutrition, kidney disease (nephrotic syndrome), ya chronic inflammatory condition indicate karta hai. Albumin 2.5 g/dL se kam hona serious hai — doctor se milna zaroori hai.' },
    { _key: 'faq-13', question: 'Gallstone mein LFT mein kya change aata hai?', answer: 'Gallstones bile duct block karein toh Direct Bilirubin aur ALP badhte hain — "cholestatic pattern". ALT/AST bhi thoda badh sakte hain. GGT bhi high ho sakta hai. Confirm ke liye Ultrasound Abdomen kiya jaata hai. Ye combination doctor ko gallstone-related blockage strongly indicate karta hai.' },
    { _key: 'faq-14', question: 'Kya LFT se liver cirrhosis pata chalta hai?', answer: 'LFT screen karne mein help karta hai — Albumin low, PT/INR abnormal, Bilirubin high — ye late stage liver disease indicate karte hain. Lekin early cirrhosis mein LFT normal bhi aa sakti hai. Confirm ke liye Fibroscan ya liver biopsy zaroori hoti hai. Symptoms hain toh sirf normal LFT pe rely mat karo.' },
    { _key: 'faq-15', question: 'LFT with GGT kab karaya jaata hai?', answer: 'Jab doctor ko alcohol-related liver damage ya bile duct problem ka doubt ho. GGT alcohol ka sabse sensitive marker hai. GGT aur ALP dono badhein toh liver/bile duct origin confirm hota hai. Kuch labs standard LFT mein GGT include karti hain, kuch alag order karte hain.' },
    { _key: 'faq-16', question: 'LFT test kitne time mein repeat karna chahiye?', answer: 'Normal result: annual checkup mein. Abnormal result: 4-8 hafte baad repeat. Fatty Liver: har 6 mahine. Hepatitis B/C treatment: har 3 mahine. TB treatment (DOTS): har 2 mahine mandatory. Koi dawa chal rahi ho jo liver affect kare: har 3 mahine. Doctor ki specific advice follow karo.' },
    { _key: 'faq-17', question: 'LFT test kab karwana chahiye?', answer: 'Piliya (jaundice) ke symptoms hon — aankhein peeli, urine dark. Pet ke upar daaye taraf dard ho. Bhookh na lage, thakaan zyada ho. Alcohol regularly lete ho ya liver ki bimari pehle se hai. TB ki dawayein ya long-term painkillers chal rahi hon. 35 saal ke baad annual checkup mein LFT karna recommended hai.' },
    { _key: 'faq-18', question: 'LFT aur KFT mein kya fark hai?', answer: 'LFT liver (jigar) check karta hai — ALT, AST, ALP, GGT, Bilirubin, Albumin measure hote hain. KFT kidney (gurde) check karta hai — Creatinine, Urea, Uric Acid measure hote hain. Serious illness mein doctor dono saath order karta hai. Albumin dono mein common parameter hai.' },
    { _key: 'faq-19', question: 'Fatty liver mein LFT kya dikhata hai?', answer: 'Fatty Liver mein typically ALT thoda badha hota hai — usually 1.5x se 3x normal range. AST bhi thoda badh sakta hai. Bilirubin aur Albumin usually normal rehte hain early stage mein. Confirm ke liye Ultrasound Abdomen better hai — fatty liver ki echogenicity dikhti hai. LFT normal bhi aa sakti hai early fatty liver mein.' },
    { _key: 'faq-20', question: 'LFT test report aane mein kitna time lagta hai?', answer: 'Dr Lal PathLabs: 48-72 ghante (email bhi milti hai). Zyaatar labs same day ya next day. Home collection mein 24-48 ghante. Major labs (Lal PathLabs, Metropolis, SRL) ki online report available hoti hai — app ya website pe download kar sakte ho. Booking ke waqt email zaroor dein.' },
  ],
}

async function main() {
  console.log('Seeding LFT (Liver Function Test)...')
  try {
    const result = await client.createOrReplace(lft)
    console.log(`✅ LFT seeded: ${result._id}`)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
