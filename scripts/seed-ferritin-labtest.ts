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

const ferritin = {
  _id: 'labtest-ferritin',
  _type: 'labTest',
  name: 'Ferritin Test (Serum)',
  fullForm: 'Serum Ferritin Test',
  hindiName: 'Iron Storage Jaanch',
  slug: { _type: 'slug', current: 'ferritin-test' },
  category: 'Blood',
  metaTitle: 'Ferritin Test Normal Range Kya Hai? High Low Matlab Samjho (2026)',
  metaDescription: 'Serum Ferritin test ki normal range, high ya low hone ka matlab, kab karaye. Doctor-reviewed Hinglish guide. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Serum Ferritin Test ek blood test hai jo aapke body mein iron ke storage ko measure karta hai. Ferritin ek protein hai jo iron ko cells ke andar store karke rakhta hai. Jab bhi body ko iron chahiye hota hai, ye ferritin se release hota hai. Is test se pata chalta hai ki aapke body mein iron ka backup stock kitna hai.

Sirf hemoglobin test se iron ki poori picture nahi milti. Kisi patient ka hemoglobin normal ho sakta hai lekin iron stores already khatam ho rahe hon. Serum Ferritin test bilkul wahi hidden iron deficiency pakadta hai jo baaki tests miss kar dete hain.

Ye test akele ya Iron Studies Panel (Serum Iron aur TIBC aur Ferritin) ke saath milaakar kiya jaata hai. India mein iron deficiency aur anemia bahut common hai, khaaskar mahilaon aur pregnant women mein, isliye ye test bahut important hai.`,

  whenToTest: [
    'Hamesha thaka-thaka feel karna, rest karne ke baad bhi',
    'Baal bahut zyada jhad rahe hon (hair fall)',
    'Skin pale yaani safed ya pheeki lag rahi ho',
    'Saankal tez chadh jaaye ya dil ki dhadkan tez ho',
    'Concentrate karna mushkil ho ya yaaddasht kamzor lage',
    'Restless Legs Syndrome yaani raaton ko pair mein bechaini',
    'CBC mein hemoglobin ya MCV low aaya ho',
    'Regular blood donate karte ho ya heavy periods hain',
    'Pregnancy hai ya hone waali hai',
    'Kidney disease ya inflammatory bowel disease hai',
    'Iron supplementation chal rahi hai, track karne ke liye',
    'Liver disease ya hemochromatosis (iron overload) ka doubt ho',
  ],

  whatItDetects: `Is test se pata chalta hai ki iron deficiency anemia hai ya nahi (body mein iron stores khatam ho rahe hain), iron overload yaani hemochromatosis hai ya nahi (zyada iron store ho raha hai jo liver aur heart ko nuksan kar sakta hai), chronic inflammation ya infection hai (ferritin ek acute phase reactant bhi hai jo sujan mein badh jaata hai), aur Anemia of Chronic Disease hai ya nahi.

Ferritin ki khaas baat ye hai ki ye iron deficiency ko anemia se pehle hi pakad leta hai, jab hemoglobin abhi normal hota hai.`,

  normalRanges: [
    { _key: 'male',        parameter: 'Adult Male',                  normalRange: '20 – 250',  unit: 'ng/mL', highBrief: 'Iron overload / Liver disease', lowBrief: 'Iron deficiency / Anemia' },
    { _key: 'female-18',   parameter: 'Adult Female (18-39 yr)',     normalRange: '10 – 120',  unit: 'ng/mL', highBrief: 'Inflammation / Liver disease', lowBrief: 'Iron deficiency' },
    { _key: 'female-40',   parameter: 'Adult Female (40+ yr)',       normalRange: '12 – 263',  unit: 'ng/mL', highBrief: 'Same as above',               lowBrief: 'Iron stores low' },
    { _key: 'preg-1',      parameter: 'Pregnancy (1st Trimester)',   normalRange: '10 – 50',   unit: 'ng/mL', highBrief: 'Inflammation (rare)',          lowBrief: 'Iron deficiency' },
    { _key: 'preg-2',      parameter: 'Pregnancy (2nd Trimester)',   normalRange: '10 – 35',   unit: 'ng/mL', highBrief: 'Monitor closely',             lowBrief: 'Supplement zaroor' },
    { _key: 'preg-3',      parameter: 'Pregnancy (3rd Trimester)',   normalRange: '5 – 25',    unit: 'ng/mL', highBrief: 'Monitor closely',             lowBrief: 'Iron supplement' },
    { _key: 'children',    parameter: 'Children (6 mo – 15 yr)',     normalRange: '12 – 140',  unit: 'ng/mL', highBrief: 'Inflammation / Infection',    lowBrief: 'Iron deficiency' },
    { _key: 'newborn',     parameter: 'Newborn (0-6 months)',        normalRange: 'Up to 650', unit: 'ng/mL', highBrief: 'Normal at birth',             lowBrief: 'Rare in newborns' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: '1st Trim: 10-50, 2nd Trim: 10-35, 3rd Trim: 5-25 ng/mL. WHO ke mutabiq Ferritin below 30 ng/mL pregnancy mein iron deficiency ka strong indicator hai.',
    riskNote: `Pregnancy mein ferritin levels naturally low ho jaati hain kyunki body ka blood volume badhta hai (dilution effect), baby ko bhi iron chahiye hota hai khaaskar 2nd aur 3rd trimester mein, aur iron demand bahut badh jaati hai.

Ferritin below 30 ng/mL pregnancy mein iron supplement ki zarurat indicate karta hai. Pregnancy mein low ferritin bahut common hai India mein.`,
    whenDoctor: 'ANC (Antenatal Care) checkup mein routine screen hota hai. Anemia ke symptoms hon jaise chakkar, kamzori, thakaan, ya hemoglobin low aaye toh zaroor test karo. Doctor iron supplement likhenge jo safe hai aur zaroor lena chahiye.',
  },

  highMeans: [
    'Infection ya inflammation: sabse common reason. Koi bhi chronic ya acute infection mein ferritin temporarily high ho jaata hai',
    'Liver disease: hepatitis, fatty liver, liver cirrhosis mein ferritin bahut zyada badh sakta hai',
    'Hemochromatosis: genetic condition jisme body bahut zyada iron absorb karti hai',
    'Rheumatoid Arthritis ya other autoimmune conditions',
    'Hypothyroidism yaani thyroid underactive hona',
    'Type 2 Diabetes ya Metabolic Syndrome',
    'Alcohol ka zyada sevan',
    'Kuch types ke cancer jaise lymphoma ya leukemia',
    'Recent blood transfusion ya iron supplements ka zyada lena',
  ],

  highReassurance: 'High ferritin ka matlab cancer nahi hota. Ye sirf ek indicator hai ki aage investigation karni chahiye. Akela ferritin result se koi diagnosis nahi hoti. Doctor aur tests se poori picture clear hogi.',

  lowMeans: [
    'Diet mein iron ki kami, vegetarian diet ya doodh pe zyada dependence bachon mein',
    'Heavy periods (Menorrhagia) yaani har mahine zyada blood loss',
    'Pregnancy ya breastfeeding mein iron demand zyada aur supply kam',
    'Celiac Disease ya Crohn\'s Disease mein intestine se iron absorb nahi hota',
    'Gastrointestinal bleeding jaise ulcer, piles ya colon polyp',
    'Frequent blood donation',
    'Teenagers mein rapid growth phase, khaaskar ladkiyan',
    'Bariatric surgery ke baad malabsorption',
  ],

  lowConcern: 'Ferritin below 15 ng/mL iron deficiency confirm karta hai. Below 12 ng/mL severe depletion hai. Agar symptoms bhi hain saath mein jaise thakaan, hair fall, pale skin toh turant doctor se milein.',

  redFlags: [
    'Ferritin below 10 ng/mL with symptoms (bahut zyada kamzori, saankal, chakkar)',
    'Ferritin above 1000 ng/mL: high ferritin syndrome, liver damage ka risk',
    'Ferritin above 500 ng/mL with liver symptoms (jaundice, pet dard, sujan)',
    'Pregnancy mein ferritin below 10 ng/mL',
    'Bachche ki ferritin below 10 ng/mL with fatigue ya pale skin',
  ],

  emergencyLevel: 'Ferritin above 1000 ng/mL ya below 10 ng/mL with symptoms: turant doctor ke paas jaao. Zyada iron bhi utna hi nuksan karta hai jitna kam iron.',

  selfTreatWarning: 'Report dekhkar khud koi iron supplement ya medicine mat shuru karo. Zyada iron bhi nuksan karta hai jitna kam iron. Doctor ke guidance ke bina self-medication bilkul nahi.',

  preparation: {
    fastingRequired: true,
    fastingHours: 8,
    bestTime: 'Subah 7 se 10 baje, raat ko khaana khaao aur subah khali pet test kara lo',
    whatToEat: 'Paani pee sakte ho, water allowed hai. Koi restriction paani pe nahi.',
    whatToAvoid: '24 ghante pehle alcohol bilkul nahi. Test ke din heavy exercise nahi kyunki intense workout ferritin temporarily badha sakti hai. Chai, coffee, juice fasting period mein avoid karo.',
    medicineNote: 'Iron supplements test se 2 se 3 din pehle band karni hain ya nahi, ye doctor se confirm karo. Apne doctor se poochho kaunsi medicines band karni hain, khud koi medicine band mat karo.',
    accuracyNote: 'Agar haal hi mein bukhar ya koi illness hui hai toh 2 se 3 hafte baad retest better hoga. Infection mein ferritin falsely high aa sakta hai.',
  },

  sampleInfo: {
    sampleType: 'Blood (venous, arm ki nadi se)',
    sampleAmount: 'Sirf 3 mL blood, bahut thoda',
    reportTime: 'Usually 6 se 24 ghante mein, same day ya next morning',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Ferritin test ke liye khali pet rehna zaroori nahi hai',
      truth: 'Fasting recommended hai, 8 se 12 ghante. Khaana khaane ke baad results slightly affect ho sakte hain. Subah khali pet best time hai.',
    },
    {
      _key: 'myth2',
      myth: 'Ferritin low hai matlab zaroor anemia hai',
      truth: 'Low ferritin iron deficiency ka sign hai par anemia tab confirm hoti hai jab hemoglobin bhi low ho. Iron deficiency anemia se pehle aati hai, ye early warning sign hai. Hemoglobin normal bhi ho sakta hai with low ferritin.',
    },
    {
      _key: 'myth3',
      myth: 'Ferritin high hai matlab cancer hai',
      truth: 'High ferritin ke hazaron reasons hain. Infection, inflammation aur liver disease sabse common hain. Cancer mein ferritin badh sakta hai par ye specific marker nahi hai. Akele ferritin se cancer diagnose nahi hota.',
    },
    {
      _key: 'myth4',
      myth: 'Iron tablet khaane se ferritin ek hafte mein normal ho jaata hai',
      truth: 'Iron stores replenish hone mein 3 se 6 mahine lagte hain, kabhi kabhi zyada bhi. Symptoms pehle better hote hain par ferritin stores dhire dhire normal hota hai.',
    },
    {
      _key: 'myth5',
      myth: 'Ferritin test aur iron test ek hi cheez hai',
      truth: 'Dono alag tests hain. Serum Iron blood mein circulating iron measure karta hai jo daily fluctuate karta hai. Ferritin body ke iron stores measure karta hai jo zyada stable aur reliable indicator hai long-term iron status ka.',
    },
    {
      _key: 'myth6',
      myth: 'Sirf mahilaon ko ferritin test karwaana chahiye',
      truth: 'Mard bhi iron deficiency ke shikaar ho sakte hain, GI bleeding, poor diet ya chronic disease se. Aur mard mein hemochromatosis (iron overload) zyada common hai jo high ferritin se pata chalta hai.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Serum Iron Test',
      comparedTestSlug: 'serum-iron-study',
      differencePoints: [
        'Kya measure karta hai | Body ke iron STORES | Blood mein circulating iron',
        'Stability | Stable, dhire badlata hai | Daily fluctuation bahut zyada hoti hai',
        'Iron deficiency detection | Best early indicator | Late stage mein low hota hai',
        'Inflammation mein | Falsely HIGH ho sakta hai | Falsely LOW ho sakta hai',
        'Fasting | 8 se 12 ghante recommended | 12 ghante zaroori, zyada strict',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'CBC (Complete Blood Count)',
      comparedTestSlug: 'cbc-test',
      differencePoints: [
        'Kya detect karta hai | Iron stores, early stage | Anemia confirm, late stage',
        'Anemia se pehle | Ferritin low hota hai pehle | CBC normal reh sakta hai pehle',
        'Overall picture | Iron storage specific | Poore blood ka overview',
        'Hair fall mein helpful | Haan, directly | Indirect only',
        'Kab saath karein | Dono saath mein better results dete hain | Recommended as iron panel',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'CRP Test',
      comparedTestSlug: 'crp-test',
      differencePoints: [
        'Kya measure karta hai | Iron storage protein | C-Reactive Protein (inflammation marker)',
        'Iron deficiency | Direct indicator | Nahi batata',
        'Inflammation mein | Falsely high ho sakta hai | Accurate indicator',
        'Kab saath karein | High ferritin ka reason dhundne ke liye CRP saath karo | Inflammation vs iron overload distinguish karne mein help',
        'Fasting | 8 se 12 ghante | Generally nahi',
      ],
    },
  ],

  repeatInfo: `Low ferritin mein iron supplement shuru karne ke 3 mahine baad repeat karo. 6 mahine baad full reassessment karo ki stores replenish hue ya nahi. Normal ho jaaye toh saal mein ek baar routine check karo, khaaskar mahilaon ke liye.

High ferritin mein underlying cause treat karne ke 4 se 6 hafte baad recheck karo. Hemochromatosis mein doctor ke advice pe har 3 mahine initially.

Pregnancy mein har trimester mein ek baar, ANC routine ke saath. Iron supplement chal rahi ho toh 6 se 8 hafte mein ek baar track karein.

High risk groups jaise vegetarian, heavy periods, ya chronic disease wale 6 mahine mein ek baar check karein.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Iron Deficiency Anemia', diseaseSlug: 'iron-deficiency-anemia', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Hemochromatosis', diseaseSlug: 'hemochromatosis', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Restless Legs Syndrome', diseaseSlug: 'restless-legs-syndrome', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Hypothyroidism', diseaseSlug: 'hypothyroidism', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Liver Disease / Fatty Liver', diseaseSlug: 'fatty-liver', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Hair Loss / Alopecia', diseaseSlug: 'alopecia', isAvailable: false },
    { _key: 'ld7', diseaseName: 'Celiac Disease', diseaseSlug: 'celiac-disease', isAvailable: false },
    { _key: 'ld8', diseaseName: 'Rheumatoid Arthritis', diseaseSlug: 'rheumatoid-arthritis', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc-test', isAvailable: true },
    { _key: 'rt2', testName: 'LFT (Liver Function Test)', testSlug: 'liver-function-test-lft', isAvailable: true },
    { _key: 'rt3', testName: 'Serum Iron Test', testSlug: 'serum-iron-study', isAvailable: false },
    { _key: 'rt4', testName: 'TIBC Test', testSlug: 'tibc-test', isAvailable: false },
    { _key: 'rt5', testName: 'CRP Test', testSlug: 'crp-test', isAvailable: false },
    { _key: 'rt6', testName: 'Thyroid Profile (TSH)', testSlug: 'thyroid-profile-tsh', isAvailable: true },
  ],

  homeopathyAngle: `Ek abnormal ferritin value se koi final diagnosis nahi hoti. Ghabrao mat.

Apni report lekar doctor se milein. Agar ferritin baar baar abnormal aa raha hai ya symptoms persist kar rahe hain toh sirf symptoms treat karna kaafi nahi, root cause dhundna zaroori hai.

Homeopathic treatment mein aapki poori health history, constitution aur individual symptoms dekhe jaate hain. Poor absorption, chronic inflammation ya hormonal imbalance jaise underlying causes address kiye jaate hain. Side effects practically nahi hote aur long-term health better hoti hai.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Serum Ferritin test kya hai?',
      answer: 'Serum Ferritin test ek blood test hai jo body mein iron storage protein ferritin ka level measure karta hai. Ye bataata hai ki aapke body mein iron ka backup kitna hai, jo iron deficiency ya iron overload pakadne mein help karta hai.',
    },
    {
      _key: 'faq2',
      question: 'Ferritin test aur iron test same hai kya?',
      answer: 'Nahi, dono alag hain. Serum Iron blood mein circulating iron measure karta hai jo daily fluctuate karta hai. Ferritin stored iron measure karta hai jo zyada stable aur reliable indicator hai. Iron deficiency ke liye Ferritin better early indicator hai.',
    },
    {
      _key: 'faq3',
      question: 'Serum Ferritin test kab karwana chahiye?',
      answer: 'Jab thakaan, hair fall, pale skin, chakkar ya saankal ki problem ho. Ya jab doctor CBC mein low hemoglobin dekhe. Pregnancy mein routine screen ke liye bhi hota hai.',
    },
    {
      _key: 'faq4',
      question: 'Ferritin test ke liye fasting chahiye?',
      answer: 'Haan, 8 se 12 ghante fasting recommended hai. Paani allowed hai. Subah khali pet test karwana best hai.',
    },
    {
      _key: 'faq5',
      question: 'Ferritin normal range kya hai?',
      answer: 'Purush (male): 20 se 250 ng/mL. Mahila 18-39 yr: 10 se 120 ng/mL. Mahila 40+ yr: 12 se 263 ng/mL. Pregnancy mein: 5 se 50 ng/mL trimester ke hisaab se. Bachche: 12 se 140 ng/mL. Apni lab ki reference range se compare zaroor karein.',
    },
    {
      _key: 'faq6',
      question: 'Low ferritin kya indicate karta hai?',
      answer: 'Low ferritin iron stores ki kami ka sign hai. Iron deficiency anemia se pehle aati hai. Common reasons: diet mein iron ki kami, heavy periods, pregnancy ya GI bleeding. Treatment mein iron supplement aur diet improvement shamil hai.',
    },
    {
      _key: 'faq7',
      question: 'High ferritin kya indicate karta hai?',
      answer: 'High ferritin akela iron overload nahi batata. Infection, inflammation aur liver disease sabse common causes hain. Hemochromatosis mein bhi ferritin high hota hai. Doctor cause dhundh ke treatment karenge.',
    },
    {
      _key: 'faq8',
      question: 'Kya ferritin test se cancer pata chalta hai?',
      answer: 'Nahi, ye cancer-specific test nahi hai. Kuch cancers mein ferritin badh sakta hai par yahi cancer ka evidence nahi hota. Ye sirf ek indicator hai ki aage investigation karni chahiye.',
    },
    {
      _key: 'faq9',
      question: 'Pregnancy mein ferritin kitna hona chahiye?',
      answer: '1st trimester mein 10 se 50 ng/mL, 2nd mein 10 se 35 ng/mL aur 3rd mein 5 se 25 ng/mL normal range hai. Ferritin below 30 ng/mL pregnancy mein iron supplement ki zarurat indicate karta hai (WHO recommendation).',
    },
    {
      _key: 'faq10',
      question: 'Kya ferritin test se anemia confirm hoti hai?',
      answer: 'Ferritin low iron stores batata hai jo anemia ki preparation hai. Anemia confirm hone ke liye hemoglobin bhi low hona chahiye. Isliye CBC aur Ferritin dono saath mein karwane chahiye.',
    },
    {
      _key: 'faq11',
      question: 'Ferritin test ka sample kya hota hai?',
      answer: 'Sirf thoda sa venous blood, arm ki nadi se 3 mL. Painful nahi hota, sirf ek chhota needle prick 2 se 3 second mein.',
    },
    {
      _key: 'faq12',
      question: 'Report kitne time mein aati hai?',
      answer: 'Aam taur pe 6 se 24 ghante mein, same day ya next morning. Most labs online portal pe results deti hain.',
    },
    {
      _key: 'faq13',
      question: 'Kya ferritin test ghar se karwa sakte hain?',
      answer: 'Haan, most major labs jaise Lal PathLabs, Metropolis, SRL aur Thyrocare home collection offer karti hain. Online book karo, technician ghar aata hai.',
    },
    {
      _key: 'faq14',
      question: 'Ferritin low hai toh kya khaaye?',
      answer: 'Iron-rich foods: red meat, chicken liver, spinach (palak), dals (masoor, moong), rajma, tofu, pumpkin seeds. Vitamin C ke saath khaaye jaise nimbu ya amla, absorption badhta hai. Chai-coffee khaane ke saath mat lo, iron absorption kam karti hai. Supplements ke liye doctor se zaroor puchho.',
    },
    {
      _key: 'faq15',
      question: 'Iron supplement se ferritin kitne time mein normal ho jaata hai?',
      answer: 'Iron supplement se symptoms 4 se 6 hafte mein better ho sakte hain par ferritin stores 3 se 6 mahine lagte hain normalize hone mein. Apne aap supplement band mat karo jab better feel ho, pura course complete karein doctor ke guidance pe.',
    },
    {
      _key: 'faq16',
      question: 'Ferritin high hone pe kya karna chahiye?',
      answer: 'Doctor se milein, wo underlying cause dhundenge jaise infection, liver disease ya hemochromatosis. Self-treatment mat karein. Specific diagnosis ke baad hi treatment decide hoga.',
    },
    {
      _key: 'faq17',
      question: 'Kya hair fall ke liye ferritin test karana chahiye?',
      answer: 'Haan, hair fall ke sabse common causes mein se ek iron deficiency hai yaani low ferritin. Ye anemia ke bina bhi ho sakta hai. Dermatologist ya doctor ferritin test zaroor likhte hain chronic hair fall mein.',
    },
    {
      _key: 'faq18',
      question: 'Inflammation mein ferritin high kyu hota hai?',
      answer: 'Ferritin ek acute phase reactant protein hai. Jab body mein koi infection ya inflammation hoti hai, liver zyada ferritin banata hai as part of immune response. Isliye sardi-bukhar ya koi bhi infection mein ferritin temporarily high aa sakta hai, ye iron overload nahi hota.',
    },
    {
      _key: 'faq19',
      question: 'Ferritin test ke baad kya follow-up tests karne chahiye?',
      answer: 'Low ferritin mein CBC, Serum Iron aur TIBC saath mein best picture deta hai. High ferritin mein LFT (liver function) aur CRP (inflammation marker) doctor ki advice pe. Akele ferritin ki report se koi decision mat lo.',
    },
    {
      _key: 'faq20',
      question: 'Ferritin test kab repeat karein?',
      answer: 'Iron supplement shuru kiya ho toh 3 mahine baad. Normal ho jaaye toh saal mein ek baar. High risk groups jaise vegetarian ya heavy periods wale 6 mahine mein ek baar. Hemochromatosis mein doctor ke schedule pe.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(ferritin)
    console.log('✅ Ferritin Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
