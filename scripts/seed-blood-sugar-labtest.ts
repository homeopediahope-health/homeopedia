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

const bloodSugar = {
  _id: 'labtest-blood-sugar',
  _type: 'labTest',
  name: 'Blood Sugar Test (FBS / RBS / PPBS)',
  fullForm: 'Fasting / Random / Post Prandial Blood Sugar',
  hindiName: 'Blood Sugar Jaanch',
  slug: { _type: 'slug', current: 'blood-sugar' },
  category: 'Blood',
  metaTitle: 'Blood Sugar Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'Blood Sugar (FBS/RBS/PPBS) ka normal range, high/low matlab, kab karaye. Complete guide, verified, doctor-reviewed. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Blood Sugar Test ek common blood test hai jo aapke khoon mein glucose (shakkar) ki maatra naapata hai. Ye batata hai ki aapka body energy theek se use kar raha hai ya nahi.

Jab aap khaana khaate hain toh body us khaane ko glucose mein badal deti hai. Ye glucose aapki cells mein jaata hai energy ke liye aur iske liye ek hormone kaam karta hai jiska naam hai Insulin. Agar body insulin sahi se nahi bana pa rahi ya cells usse respond nahi kar rahin toh blood mein glucose badhne lagta hai. Isi condition ko diabetes kehte hain.

Blood Sugar Test 3 tariko se hota hai. FBS yaani Fasting Blood Sugar khali pet test hota hai. RBS yaani Random Blood Sugar kisi bhi waqt hota hai. PPBS yaani Post Prandial Blood Sugar khaane ke 2 ghante baad hota hai.

Ye test India mein sabse zyada kiye jaane wale tests mein se ek hai. India mein 10 crore se zyada log diabetes ke saath jeete hain aur unme se kaafi log unaware hain.`,

  whenToTest: [
    'Zyada pyas laagna, baar baar paani peena',
    'Baar baar bathroom jaana, khaaskar raat mein',
    'Thakaan aur kamzori bina wajah mehsoos ho',
    'Aankhon ki roshni blurry ho gayi ho',
    'Zakhm ya ghav jaldi theek na ho raha ho',
    'Zyada bhookh lagne lage achanak se',
    'Haath-pair mein jhunjhuni ya numbness ho',
    'Wajan achanak kam ho raha ho',
    'Family history mein diabetes ho, routine checkup ke liye',
    'Pregnancy mein Gestational Diabetes screen karne ke liye',
    'Already diabetic hain, treatment monitoring ke liye',
  ],

  whatItDetects: `Is test se pata chalta hai ki diabetes hai ya nahi. Pre-diabetes ka pata chalta hai jab sugar thoda badha ho lekin diabetes tak nahi pahuncha. Gestational Diabetes yaani pregnancy mein sugar badhna bhi is test se detect hota hai.

Ye treatment kitni kaam kar rahi hai ye bhi batata hai already diabetic patients mein. Blood sugar control proper hai ya nahi ongoing monitoring mein pata chalta hai.

Ye test Diabetes, Pre-Diabetes, PCOD ya PCOS jisme insulin resistance rehti hai, Thyroid disorders aur Kidney disease se connected hai.`,

  normalRanges: [
    { _key: 'fbs-normal',  parameter: 'FBS Normal (Non-Diabetic)',     normalRange: '70 – 100',       unit: 'mg/dL', highBrief: 'Pre-diabetes / Diabetes',    lowBrief: 'Hypoglycemia' },
    { _key: 'fbs-pre',     parameter: 'FBS Pre-Diabetes Zone',         normalRange: '100 – 125',      unit: 'mg/dL', highBrief: 'Lifestyle change zaroor',     lowBrief: '' },
    { _key: 'fbs-diab',    parameter: 'FBS Diabetes (Diagnosis)',      normalRange: '126 ya zyada',   unit: 'mg/dL', highBrief: 'Diabetes diagnosed',          lowBrief: '' },
    { _key: 'fbs-preg',    parameter: 'FBS Pregnancy',                 normalRange: '60 – 95',        unit: 'mg/dL', highBrief: 'GDM possible',               lowBrief: 'Hypoglycemia risk' },
    { _key: 'rbs-normal',  parameter: 'RBS Normal (Non-Diabetic)',     normalRange: '70 – 140',       unit: 'mg/dL', highBrief: 'Pre-diabetes / Diabetes',    lowBrief: 'Hypoglycemia' },
    { _key: 'rbs-pre',     parameter: 'RBS Pre-Diabetes Zone',         normalRange: '140 – 200',      unit: 'mg/dL', highBrief: 'Follow-up test lena',         lowBrief: '' },
    { _key: 'rbs-diab',    parameter: 'RBS Diabetes (with symptoms)',  normalRange: '200 ya zyada',   unit: 'mg/dL', highBrief: 'Diabetes likely',             lowBrief: '' },
    { _key: 'ppbs-normal', parameter: 'PPBS Normal (2 hr after meal)', normalRange: 'Below 140',      unit: 'mg/dL', highBrief: 'Pre-diabetes / Diabetes',    lowBrief: 'Hypoglycemia' },
    { _key: 'ppbs-pre',    parameter: 'PPBS Pre-Diabetes',             normalRange: '140 – 199',      unit: 'mg/dL', highBrief: 'Lifestyle change zaroori',    lowBrief: '' },
    { _key: 'ppbs-diab',   parameter: 'PPBS Diabetes',                 normalRange: '200 ya zyada',   unit: 'mg/dL', highBrief: 'Diabetes likely',             lowBrief: '' },
    { _key: 'ppbs-preg',   parameter: 'PPBS Pregnancy (GDM target)',   normalRange: 'Below 140',      unit: 'mg/dL', highBrief: 'GDM risk',                   lowBrief: '' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'FBS: 60-95 mg/dL. PPBS 2 ghante baad khaane ke: 140 mg/dL se neeche. OGTT 2-hr result: 153 mg/dL se neeche (IADPSG/WHO criteria). Agar FBS 92 mg/dL se upar ho ya OGTT mein 75g glucose ke baad 2-hr result 153 mg/dL se zyada ho toh GDM ka diagnosis hota hai.',
    riskNote: `Pregnancy mein ek khaas condition hoti hai yaitu Gestational Diabetes Mellitus (GDM) jisme body pregnancy hormones ki wajah se insulin sahi se use nahi kar paati. India mein ye 10-20% pregnant women mein hoti hai.

GDM ko control na karna risky hota hai dono ke liye. Zyada pyas, baar baar urine aur thakaan zyada hona symptoms ho sakte hain. Kabhi kabhi koi symptom nahi hota isliye test zaroori hai.`,
    whenDoctor: 'Pehli prenatal visit pe hi screening hoti hai agar high risk ho. Normal risk mein 24-28 weeks pe OGTT test. Pichli pregnancy mein GDM tha toh repeat zaroor. Blood sugar test sirf ek blood sample hai, baby ke liye koi risk nahi. Ghabrao mat.',
  },

  highMeans: [
    'Type 2 Diabetes, insulin resistance, body sugar use nahi kar pa rahi',
    'Pre-Diabetes, sugar thoda badha hai, warning sign hai',
    'Type 1 Diabetes, body insulin bana hi nahi rahi',
    'Gestational Diabetes, pregnancy hormones ki wajah se',
    'Stress, bahut zyada mental ya physical stress temporarily sugar badha deta hai',
    'Infection ya illness, body ke response mein sugar badh jaati hai',
    'Kuch medicines jaise steroids (dexamethasone), thyroid medicines ya kuch BP medicines',
    'PCOD ya PCOS, insulin resistance ki wajah se',
    'Thyroid disorder, hypothyroidism mein bhi sugar affect hoti hai',
    'Pancreas ki problem jaise pancreatitis ya pancreatic cancer',
  ],

  highReassurance: 'Ek baar thoda high aana matlab ye nahi ki aapko diabetes ho gaya. Lab repeat hoti hai, doctor context dekhta hai. Ghabrao mat, khud se koi medicine mat lo. Doctor hamesha 2 alag din test repeat karta hai diagnosis se pehle.',

  lowMeans: [
    'Diabetes ki dawai zyada ho gayi (most common in diabetics)',
    'Khaana waqt pe nahi khaya, khaaskar diabetics mein',
    'Zyada exercise bina khaaye',
    'Alcohol peena, khaaskar khali pet',
    'Insulin overdose',
    'Liver ki bimari, liver sugar store karta hai',
    'Adrenal ya thyroid gland ki problem',
    'Rare: Insulin producing tumor yaitu insulinoma',
  ],

  lowConcern: 'Agar FBS 70 mg/dL se neeche chali jaaye (Hypoglycemia) toh haath kaanpna, chakkar aana, achanak bahut zyada bhookh lagti hai, pasina aana aur confusion ho sakta hai. Agar sugar 54 mg/dL se neeche ho toh medical emergency hai. Turant kuch meetha khao aur doctor ko batao.',

  redFlags: [
    'FBS 200 mg/dL se zyada aur symptoms hain',
    'RBS 300 mg/dL ya usse zyada',
    'Bahut zyada pyas, baar baar urine, saans lene mein takleef',
    'Ulti aur pet dard ke saath high sugar, Diabetic Ketoacidosis ka sign ho sakta hai',
    '400+ mg/dL, turant emergency',
    'FBS 70 mg/dL se neeche aur kaanpna ya chakkar aa raha ho',
    '54 mg/dL se neeche, emergency',
    'Behoshi ya semi-conscious state, 108 pe call karo',
  ],

  emergencyLevel: 'RBS 400+ mg/dL ya FBS 54 mg/dL se neeche with symptoms toh turant hospital. Diabetic Ketoacidosis ya severe hypoglycemia dono emergencies hain. Conscious ho toh glucose ya meetha juice pilao.',

  selfTreatWarning: 'Report dekhkar khud treatment mat shuru karo. Koi bhi value sirf ek hi test ki hai. Doctor poora context dekh ke decide karta hai. Pehle se chal rahi diabetes medicines khud se band mat karo.',

  preparation: {
    fastingRequired: true,
    fastingHours: 10,
    bestTime: 'FBS ke liye subah 7 se 10 baje best time hai. Raat 10 baje ke baad kuch nahi khana. RBS ke liye koi bhi waqt theek hai. PPBS ke liye pehle FBS dena hota hai, phir normal khaana khaao aur exactly 2 ghante baad test dena hai.',
    whatToEat: 'FBS ke liye sirf paani pee sakte hain, plain paani theek hai. RBS mein koi restriction nahi. PPBS mein normal khaana khaao lekin bich mein kuch aur khaao mat.',
    whatToAvoid: 'FBS mein 8-12 ghante kuch nahi khaana-peena (sirf paani allowed). Chai, coffee, juice nahi. PPBS ke 2 ghante mein kuch extra mat khaao.',
    medicineNote: 'Koi bhi medicine khud se band mat karo test ke liye. Apne doctor se poochho, khaaskar diabetics ke liye. Metformin ya insulin users zaroor doctor ki salah lein.',
    accuracyNote: 'Stress, illness aur kuch medicines temporarily sugar badha sakti hain. Ek reading se diagnosis mat karo. Doctor repeat testing ke baad hi conclude karta hai.',
  },

  sampleInfo: {
    sampleType: 'Blood (venous, arm ki nadi se, ya finger prick glucometer se ghar pe)',
    sampleAmount: 'Sirf 2-3 mL blood lab mein. Glucometer mein ek tiny finger prick.',
    reportTime: 'FBS / RBS / PPBS: Aaj test, 1-4 ghante mein report. OGTT: Same day evening tak. Online report NABL labs mein available.',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Blood sugar test ke liye hamesha khali pet rehna padta hai',
      truth: 'Sirf FBS (Fasting Blood Sugar) ke liye khali pet chahiye. RBS kisi bhi waqt hota hai, PPBS khaane ke 2 ghante baad. Ek baar doctor se poochho ki kaunsa test likhwa raha hai.',
    },
    {
      _key: 'myth2',
      myth: 'Blood sugar high matlab pakka diabetes ho gaya',
      truth: 'Ek baar high reading se koi diagnosis nahi hoti. Doctor ek hi test se diabetes confirm nahi karta. 2 alag din test repeat hoti hai. Stress, illness aur medicines bhi temporarily sugar badha deti hain.',
    },
    {
      _key: 'myth3',
      myth: 'Blood sugar test bahut painful hota hai',
      truth: 'Sirf ek chhoti si needle se ek second ka sensation. Lab mein trained staff hota hai. Ghar pe glucometer mein toh sirf finger pe ek tiny prick.',
    },
    {
      _key: 'myth4',
      myth: 'Meetha khane se diabetes hoti hai aur agar meetha band karo toh sugar normal ho jaayegi',
      truth: 'Diabetes sirf meethe ki wajah se nahi hoti. Genetics, lifestyle, weight aur inactivity sab factors hain. Sirf meetha band karne se sugar normal nahi hogi agar diabetes already hai.',
    },
    {
      _key: 'myth5',
      myth: 'Random sugar 150 tha, main diabetic hoon',
      truth: 'RBS 140-199 range pre-diabetes zone hai. Aur diagnosis ke liye fasting test aur repeat testing zaroori hai. Ek random reading se ghabrao mat. Doctor se milkar FBS aur PPBS karwao.',
    },
    {
      _key: 'myth6',
      myth: 'Blood sugar test oximeter se ho jaata hai',
      truth: 'Pulse oximeter sirf oxygen level naapata hai. Blood sugar bilkul alag test hai. Blood sample chahiye hota hai accurate reading ke liye.',
    },
    {
      _key: 'myth7',
      myth: 'Sugar level aaj sahi hai toh sab theek hai',
      truth: 'Ek din ki reading poori picture nahi deti. HbA1c test yaitu 3 mahine ka average zyada reliable hota hai long-term glucose control ke liye. Doctor ko discuss karo.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'HbA1c Test',
      comparedTestSlug: 'hba1c',
      differencePoints: [
        'Kya naapata hai | Current blood glucose level | Pichle 2-3 mahine ka average glucose',
        'Fasting chahiye | FBS ke liye haan, RBS ke liye nahi | Nahi, anytime',
        'Best use | Immediate glucose check aur diagnosis | Long-term control monitoring',
        'Anemia mein | Reliable | Unreliable ho sakta hai',
        'Diabetes diagnosis cutoff | FBS 126 mg/dL, RBS 200 mg/dL | 6.5% ya zyada',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'OGTT (Oral Glucose Tolerance Test)',
      comparedTestSlug: '',
      differencePoints: [
        'Kya hai | Simple blood glucose snapshot | 75g glucose pilake multiple readings',
        'Duration | 5-10 minute | 2-3 ghante',
        'Best for | Routine screening | GDM aur detailed glucose response',
        'Fasting | FBS ke liye haan | Haan, 8-12 ghante',
        'Pregnancy mein | Screening ke liye | Gold standard for GDM diagnosis',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'Urine Routine Test',
      comparedTestSlug: 'urine-routine-test',
      differencePoints: [
        'Glucose detect karna | Blood mein glucose naapata hai | Urine mein glucose overflow detect karta hai',
        'Accuracy | High accuracy, standard test | Kam accurate, sirf screening',
        'Diagnosis ke liye | Gold standard | Nahi, sirf clue deta hai',
        'Kab useful | Diabetes diagnosis aur monitoring | Routine checkup mein quick screen',
        'Fasting | FBS mein zaroori | Nahi',
      ],
    },
  ],

  repeatInfo: `Non-diabetic normal mein: 30-40 saal mein har 3 saal, 40 se upar mein har saal, family history ho toh har saal.

Pre-diabetes diagnosed ho toh har 3-6 mahine mein doctor ke guidance mein. Lifestyle changes ke 3 mahine baad repeat.

Diabetes diagnosed ho toh FBS ya PPBS har doctor visit pe yaitu 1-3 mahine mein ek baar minimum. HbA1c har 3 mahine mein. Ghar pe glucometer daily ya jab symptoms ho.

Nayi medicine shuru ki toh 1-2 mahine baad repeat. Dose change ki toh 1 mahine baad check. Doctor ke saath milke individualized plan banao.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Type 2 Diabetes', diseaseSlug: 'diabetes-type-2', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Pre-Diabetes', diseaseSlug: 'pre-diabetes', isAvailable: false },
    { _key: 'ld3', diseaseName: 'PCOD / PCOS', diseaseSlug: 'pcod', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Gestational Diabetes', diseaseSlug: 'gestational-diabetes', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Hypothyroidism', diseaseSlug: 'hypothyroidism', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Kidney Disease', diseaseSlug: 'kidney-disease', isAvailable: false },
    { _key: 'ld7', diseaseName: 'Metabolic Syndrome', diseaseSlug: 'metabolic-syndrome', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'HbA1c Test', testSlug: 'hba1c', isAvailable: true },
    { _key: 'rt2', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc', isAvailable: true },
    { _key: 'rt3', testName: 'Lipid Profile', testSlug: 'lipid-profile', isAvailable: true },
    { _key: 'rt4', testName: 'Urine Routine Test', testSlug: 'urine-routine-test', isAvailable: true },
    { _key: 'rt5', testName: 'TSH (Thyroid)', testSlug: 'thyroid-profile-tsh', isAvailable: true },
    { _key: 'rt6', testName: 'OGTT Test', testSlug: 'ogtt', isAvailable: false },
    { _key: 'rt7', testName: 'Serum Insulin', testSlug: 'serum-insulin', isAvailable: false },
    { _key: 'rt8', testName: 'KFT (Kidney Function Test)', testSlug: 'kft-test', isAvailable: false },
  ],

  homeopathyAngle: `Ghabrao mat. Ek abnormal report sirf ek signal hai, sentence nahi. Apni report lekar doctor se milein aur dobaara test ke baad hi koi conclusion nikalen.

Conventional treatment mein mainly medicines aur diet control hota hai jo symptoms aur sugar level ko manage karta hai. Homeopathy alag angle se kaam karti hai. Underlying cause kya hai aur body ki glucose metabolism kyun affect ho rahi hai ye dekhti hai. Baar baar sugar fluctuate ho raha ho ya pre-diabetes stage mein ho toh homeopathy individualized treatment deti hai. Poori health history, lifestyle aur constitution dekha jaata hai. Side effects practically nil hote hain.

Apni report lekar Dr. Shadab Khan se consult karein. Already prescribed medicines khud se band mat karo.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Blood Sugar test kya hota hai?',
      answer: 'Blood Sugar test ek blood test hai jo aapke khoon mein glucose (shakkar) ki maatra naapata hai. FBS, RBS aur PPBS iske teen main types hain. Ye diabetes, pre-diabetes aur glucose disorder ke diagnosis mein use hota hai.',
    },
    {
      _key: 'faq2',
      question: 'Blood Sugar ka normal range kitna hona chahiye?',
      answer: 'FBS (khali pet): 70-100 mg/dL normal hai, 100-125 pre-diabetes zone, 126 se upar diabetes. RBS: 140 mg/dL se neeche normal. PPBS: 140 mg/dL se neeche normal. Apni lab report ke reference values se compare karo.',
    },
    {
      _key: 'faq3',
      question: 'Blood Sugar high hone ka matlab kya hai?',
      answer: 'High blood sugar ka possible matlab hai body insulin sahi use nahi kar rahi. Ye diabetes ya pre-diabetes ka sign ho sakta hai. Stress, illness aur medicines bhi temporarily sugar bada sakti hain. Ek reading se ghabrao mat, doctor se milein.',
    },
    {
      _key: 'faq4',
      question: 'Blood Sugar low hone ka matlab kya hai?',
      answer: 'FBS 70 mg/dL se neeche Hypoglycemia kehlaata hai. Diabetes ki dawai zyada ho jaana, khaana skip karna ya zyada exercise iske common kaaran hain. Kaanpna, chakkar aur pasina aana symptoms hain. Turant kuch meetha khao aur doctor ko batao.',
    },
    {
      _key: 'faq5',
      question: 'Fasting blood sugar kitne ghante pehle khaana band karna chahiye?',
      answer: '8-12 ghante. Raat 10 baje ke baad kuch mat khao, subah test dene jaao. Sirf paani pee sakte hain.',
    },
    {
      _key: 'faq6',
      question: 'Kya blood sugar test khali pet hota hai?',
      answer: 'Sirf FBS ke liye khali pet zaroori hai. RBS kisi bhi waqt hota hai, khaane ke baad bhi. PPBS mein khaana khaane ke 2 ghante baad test dete hain.',
    },
    {
      _key: 'faq7',
      question: 'Blood Sugar PP ka matlab kya hai?',
      answer: 'PP ka matlab hai Post Prandial yaani khaane ke baad. PPBS test mein normal khaana khaane ke exactly 2 ghante baad blood sugar check hota hai. Ye batata hai body khaana consume karne ke baad glucose sahi process kar rahi hai ya nahi.',
    },
    {
      _key: 'faq8',
      question: 'Blood Sugar R ka matlab kya hai?',
      answer: 'R ka matlab Random Blood Sugar hai, kisi bhi waqt liya gaya test. Isme fasting ki zarurat nahi. Normal range 70-140 mg/dL tak hai.',
    },
    {
      _key: 'faq9',
      question: 'Pregnancy mein blood sugar kitna hona chahiye?',
      answer: 'FBS: 60-95 mg/dL. PPBS 2 ghante khaane ke baad: 140 mg/dL se neeche. Ye non-pregnant ranges se thodi alag hain kyunki pregnancy hormones insulin ko affect karte hain.',
    },
    {
      _key: 'faq10',
      question: 'Blood sugar test painful hai kya?',
      answer: 'Nahi. Sirf ek chhoti si needle se ek second ka sensation. Lab mein trained staff hota hai. Ghar pe glucometer mein toh sirf finger pe ek tiny prick.',
    },
    {
      _key: 'faq11',
      question: 'Blood sugar report kaise padhein?',
      answer: 'Report mein test ka naam, aapki value aur reference range hogi. FBS mein 70-100 mg/dL green zone hai, 100-125 yellow yaitu pre-diabetes aur 126 se upar red zone. Lekin sirf ek reading se diagnosis mat karo, doctor context dekhta hai.',
    },
    {
      _key: 'faq12',
      question: 'Blood sugar aur diabetes mein kya fark hai?',
      answer: 'Blood sugar ek test hai, diabetes ek bimari. Blood sugar test se pata chalta hai blood mein glucose kitna hai. Agar baar baar blood sugar high rahe toh wo diabetes ki taraf indicate karta hai. Diabetes diagnosis ke liye 2 alag din test hona zaroori hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya blood sugar test se cancer detect hota hai?',
      answer: 'Nahi. Blood sugar test sirf glucose level naapata hai. Cancer detect nahi karta. Kuch cancers mein blood sugar affect ho sakta hai lekin cancer ke liye alag specific tests hote hain.',
    },
    {
      _key: 'faq14',
      question: 'Blood sugar test baar baar kitne din mein repeat karein?',
      answer: 'Non-diabetic normal person mein har saal ek baar (40 se upar mein). Already diabetic hain toh doctor ke guidance mein har 1-3 mahine mein. Pre-diabetes mein har 3-6 mahine mein.',
    },
    {
      _key: 'faq15',
      question: 'Best time for blood sugar test kaunsa hai?',
      answer: 'FBS ke liye subah 7-10 baje (after 8-12 hr fast). RBS ke liye koi bhi waqt. PPBS ke liye khaana khaane ke exactly 2 ghante baad.',
    },
    {
      _key: 'faq16',
      question: 'Random blood sugar normal range male mein kya hai?',
      answer: 'Male mein RBS normal range alag nahi hoti, same hai: 70-140 mg/dL. Gender se fark nahi padta blood sugar ke normal range mein.',
    },
    {
      _key: 'faq17',
      question: 'Kya blood sugar se cancer ka pata chal sakta hai?',
      answer: 'Nahi. Blood sugar test sirf glucose level naapata hai. Cancer diagnosis ke liye alag specific tests hote hain. Cancer ka blood sugar se seedha connection nahi hai, though kuch rare cancers mein glucose affected ho sakta hai.',
    },
    {
      _key: 'faq18',
      question: 'Blood sugar age wise kaise badalta hai?',
      answer: 'Normal ranges age se khaas nahi badlti adults mein, 70-100 mg/dL FBS standard hai. Lekin umar ke saath diabetes risk badh jaata hai. 40 saal ke baad har saal test zaroori hai.',
    },
    {
      _key: 'faq19',
      question: 'Khali pet blood sugar badhna normal hai?',
      answer: 'Subah uthne ke baad thoda cortisol hormone ki wajah se sugar naturally thoda badh sakta hai, isko Dawn Phenomenon kehte hain. Lekin agar consistently 100 mg/dL se upar aaye toh doctor se milein.',
    },
    {
      _key: 'faq20',
      question: 'Ghar pe glucometer ki reading aur lab test mein fark kyun aata hai?',
      answer: 'Glucometer kapillary blood (finger prick) se naapata hai jo venous blood se 10-15% alag ho sakta hai. Diagnosis ke liye lab ka venous blood test standard maana jaata hai. Glucometer monitoring ke liye useful hai, lekin diagnosis ke liye lab test hi karwao.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(bloodSugar)
    console.log('✅ Blood Sugar Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
