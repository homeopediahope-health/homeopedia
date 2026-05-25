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

const serumIron = {
  _id: 'labtest-serum-iron',
  _type: 'labTest',
  name: 'Serum Iron Study',
  fullForm: 'Serum Iron / TIBC / Transferrin Saturation Panel',
  hindiName: 'Khoon mein Lauha Jaanch',
  slug: { _type: 'slug', current: 'serum-iron-study' },
  category: 'Blood',
  metaTitle: 'Serum Iron Study Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'Serum Iron Study ka normal range, high/low matlab, kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Serum Iron Study ek blood test group hai jo aapke sharir mein iron ki poori stithi ko measure karta hai — sirf ek nahi, balki 4 cheezein ek saath dekhi jaati hain: Serum Iron, TIBC (Total Iron Binding Capacity), UIBC (Unsaturated Iron Binding Capacity), aur Transferrin Saturation.

Sochiye aise — Iron aapke khoon mein akela nahi ghoomta. Ye ek protein se chipak ke chalta hai jise "Transferrin" kehte hain — ye protein iron ka "carrier" hai. Serum Iron Study ye sab ek saath check karta hai: khoon mein abhi kitna iron hai (Serum Iron), carrier protein kitna iron utha sakta hai (TIBC), carrier mein kitni jagah khaali hai (UIBC), aur carrier kitna bhar gaya hai (Transferrin Saturation %).

Aksar log sirf "Serum Iron" test karwaate hain — lekin asli tasveera sirf tab milti hai jab ye sab saath mein dekhe jaayein, isliye ise "Iron Study" ya "Iron Panel" kaha jaata hai.`,

  whenToTest: [
    'Bahut zyada thakaan feel ho bina kisi khaas wajah ke',
    'Chakkar aate hoon, haath-pair thande rehte hoon',
    'Naakhun flat ho gaye hoon, ya baal bahut jhad rahe hoon',
    'CBC mein haemoglobin ya MCV (Mean Corpuscular Volume) kam nikla ho — confirm karne ke liye',
    'Pregnancy mein iron deficiency check karni ho',
    'Iron supplements chal raha ho aur uska asar dekhna ho',
    'Liver ki bimari ka shak ho — iron overload disorders mein liver affected hoti hai',
    'Gharelu history mein Hemochromatosis (iron overload ki bimari) ho',
  ],

  whatItDetects: `Iron Deficiency Anaemia — khoon ki kami, jo India ki sabse badi health problem hai (especially mahilaon aur bachon mein). Anaemia of Chronic Disease — TB, arthritis, ya kidney disease mein iron metabolism bigad jaata hai. Iron Overload / Hemochromatosis — khoon mein iron bahut zyada ho jaata hai aur liver, heart, aur pancreas ko nuksan pahunchata hai. Malnutrition ya poor absorption — khana khaane ke baad bhi iron absorb nahi ho raha. Liver disease — transferrin liver hi banata hai, toh liver kharab ho toh TIBC bhi badal jaata hai.`,

  normalRanges: [
    {
      _key: 'si-male',
      parameter: 'Serum Iron — Purush (Male)',
      normalRange: '59 – 158',
      unit: 'mcg/dL',
      highBrief: 'Iron overload, Hemochromatosis',
      lowBrief: 'Iron deficiency anaemia',
    },
    {
      _key: 'si-female',
      parameter: 'Serum Iron — Mahila (Female)',
      normalRange: '37 – 145',
      unit: 'mcg/dL',
      highBrief: 'Iron overload (rare)',
      lowBrief: 'Iron deficiency, Heavy periods',
    },
    {
      _key: 'si-pregnancy',
      parameter: 'Serum Iron — Pregnancy',
      normalRange: 'Typically lower than normal',
      unit: 'mcg/dL',
      highBrief: 'Iron overload (rare)',
      lowBrief: 'Iron deficiency — common in pregnancy',
    },
    {
      _key: 'si-children',
      parameter: 'Serum Iron — Bachche (3–11 saal)',
      normalRange: '53 – 119',
      unit: 'mcg/dL',
      highBrief: 'Overload (rare)',
      lowBrief: 'Deficiency, Growth concern',
    },
    {
      _key: 'tibc-adult',
      parameter: 'TIBC — Adult (All)',
      normalRange: '250 – 450',
      unit: 'mcg/dL',
      highBrief: 'Iron deficiency (more carrier banta hai)',
      lowBrief: 'Iron overload, Liver disease, Chronic disease',
    },
    {
      _key: 'tibc-pregnancy',
      parameter: 'TIBC — Pregnancy',
      normalRange: '300 – 500',
      unit: 'mcg/dL',
      highBrief: 'Normal rise in pregnancy',
      lowBrief: 'Concerning — doctor se milein',
    },
    {
      _key: 'uibc',
      parameter: 'UIBC (Unsaturated Iron Binding Capacity)',
      normalRange: '111 – 343',
      unit: 'mcg/dL',
      highBrief: 'Iron deficiency',
      lowBrief: 'Iron overload',
    },
    {
      _key: 'tsat-male',
      parameter: 'Transferrin Saturation — Purush (Male)',
      normalRange: '20 – 50',
      unit: '%',
      highBrief: 'Iron overload (>50% = concern)',
      lowBrief: 'Iron deficiency (<15% = concern)',
    },
    {
      _key: 'tsat-female',
      parameter: 'Transferrin Saturation — Mahila (Female)',
      normalRange: '15 – 50',
      unit: '%',
      highBrief: 'Iron overload',
      lowBrief: 'Iron deficiency — common',
    },
    {
      _key: 'tsat-pregnancy',
      parameter: 'Transferrin Saturation — Pregnancy',
      normalRange: 'Often < 15 – 20',
      unit: '%',
      highBrief: 'Iron overload (rare)',
      lowBrief: 'Deficiency common — monitor karo',
    },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'TIBC: 300–500 mcg/dL | Serum Iron: thoda low | Transferrin Saturation: often < 15–20%',
    riskNote: `Pregnancy mein blood volume badhta hai — matlab zyada iron chahiye baby ke liye bhi aur aapke liye bhi. Isliye Serum Iron thoda kam ho sakta hai (ye normal hai), TIBC badhta hai, aur Transferrin Saturation bhi aksar 15-20% se neeche ho jaata hai. Ferritin (iron store) sabse pehle gitta hai pregnancy mein. Thoda low iron rehna common hai India mein, lekin iska ilaj asaan hai.`,
    whenDoctor: `Pehle trimester mein routine check ke taur pe. Agar haemoglobin 10.5 g/dL se neeche aaye. Agar thakaan, chakkar, ya weakness zyada ho. Iron supplements start karne ke baad uska asar dekhne ke liye. Har trimester mein check ya doctor ki schedule ke hisaab se.`,
  },

  highMeans: [
    'Hemochromatosis — genetic bimari jisme body mein iron zyada jama hota rehta hai, liver, heart aur pancreas ko damage karta hai',
    'Excess iron supplements lena — zarurat se zyada iron tablets lena',
    'Frequent blood transfusions — thalassemia ya aur bimariyon mein baar baar khoon chadhwana',
    'Liver disease (jaundice, hepatitis) — liver kharab ho toh stored iron khoon mein aa jaata hai',
    'Haemolysis — RBC toot rahi hoon toh unka iron release ho jaata hai serum mein',
    'Sideroblastic anaemia — ek special type ki anaemia jisme iron absorb toh hota hai lekin haemoglobin mein nahi jaata',
  ],

  highReassurance: `Ek baar high aana zaroor koi badi bimari nahi hoti. Diet, supplements, ya timing ki wajah se bhi temporary spike ho sakta hai. Doctor se milein aur repeat test karein. Agar Transferrin Saturation > 50% ho toh doctor zaroor dikhao.`,

  lowMeans: [
    'Iron Deficiency Anaemia — sabse common reason. Khaane mein iron ki kami, ya periods mein zyada khoon jaana',
    'Poor absorption — gut absorb nahi kar paata (Coeliac disease, IBS, ya gut ki sujan mein)',
    'Pregnancy aur breastfeeding — baby ke liye iron use hota rehta hai',
    'Chronic blood loss — piles, peptic ulcer, ya heavy periods se dheere dheere iron ghatta rehta hai',
    'Chronic disease anaemia — TB, rheumatoid arthritis, ya kidney failure mein body iron ka use sahi se nahi kar paati',
    'Vegetarian diet with low absorption — plant-based iron (non-heme iron) kam absorb hota hai meat ke iron ki tulna mein',
  ],

  lowConcern: `Serum Iron < 40 mcg/dL ho aur thakaan, saans phoolna, ya dil ki dhadkan tez ho toh doctor se milein. Transferrin Saturation < 15% ho. Bachon mein low iron — unki growth aur brain development pe asar padta hai. Pregnancy mein haemoglobin 9 g/dL se neeche aaye — baby ke liye risk. Ghabrao mat — Iron Deficiency Anaemia ka ilaj possible hai aur bahut common bhi.`,

  redFlags: [
    'Haemoglobin 7 g/dL se neeche aaye — severe anaemia, hospital ki zarurat ho sakti hai',
    'Saans phoolna, dil ki dhadkan bahut tez hona even rest mein',
    'Bachon mein unusual irritability, concentration problems, ya growth ruk jaana',
    'Pregnancy mein haemoglobin 9 g/dL se neeche',
    'Transferrin Saturation > 60% — Hemochromatosis ka strong indicator',
    'Joint mein bahut dard, liver ka size badh jaana — iron overload sign',
    'Skin ka colour bronze/grey ho jaana — iron overload emergency',
    'Diabetes ka suddenly develop ho jaana — iron pancreas ko damage kar sakta hai',
  ],

  emergencyLevel: `Haemoglobin < 7 g/dL + saans phoolna = Emergency — turant hospital jaao. Transferrin Saturation > 60% + joint pain + liver badha hua = Doctor se usi din milein. Pregnancy mein Hb < 9 g/dL = Urgent consultation.`,

  selfTreatWarning: `Report dekhkar khud koi iron supplement shuru mat karein — iron supplements bina doctor advice ke bilkul mat lein. Zyada iron bhi nuksandeh hai aur liver aur heart ko damage kar sakta hai. Koi bhi "iron tonic" ya herbal supplement bina doctor ke mat lo.`,

  preparation: {
    fastingRequired: true,
    fastingHours: 10,
    bestTime: 'Subah 9 baje se pehle — sabse accurate result milta hai',
    whatToEat: 'Raat 10 baje ke baad kuch nahi khaana. Paani (plain water) pee sakte hain — no problem.',
    whatToAvoid: 'Iron supplements — kam se kam 24 ghante pehle band karein (Dr. Lal PathLabs recommendation). Multivitamins jo iron se bhare hoon — unhe bhi 24 ghante pehle rokein.',
    medicineNote: 'Kuch antibiotics, oral contraceptives, aur hormonal medicines iron levels affect kar sakti hain. Subah ki dawa bhi hold rakhein jab tak doctor ne allow na kiya ho. Doctor ko saari medicines zaroor batao.',
    accuracyNote: 'Iron levels din mein naturally upar-neeche hote rehte hain (diurnal variation) — subah sabse high hote hain, isliye subah ka sample standardized result deta hai. Khane ke baad iron levels temporarily badhte hain — isliye fasting zaroori hai.',
  },

  sampleInfo: {
    sampleType: 'Blood — venous blood (haath ki naadd/vein se, aksar andar wali kohni se)',
    sampleAmount: '3–5 mL — ek chhoti tube bhar jaiti hai',
    reportTime: 'Same day ya 4–6 ghante mein | Kuch labs next day morning report dete hain | Online portal pe upload ho jaata hai',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'm1',
      myth: 'Serum Iron test ke liye fasting nahi chahiye',
      truth: 'Zaroor chahiye. Overnight fasting (8-12 ghante) aur subah ka sample preferred hai — khane ke baad iron levels temporarily upar jaate hain jo report galat dikhata hai. Dr. Lal PathLabs bhi yahi recommend karta hai.',
    },
    {
      _key: 'm2',
      myth: 'Serum Iron low matlab zaroor cancer hai',
      truth: 'Bilkul nahi. India mein iron deficiency anaemia sabse common cause hai — jo sirf khaane ki kami ya heavy periods se bhi hoti hai. Cancer mein iron low ho sakta hai lekin ye ek possibility hai, certainty nahi. Ek test se koi diagnosis pakki nahi hoti.',
    },
    {
      _key: 'm3',
      myth: 'Iron supplement khana shuru kar do report dekhkar',
      truth: 'NAHI. Zyada iron bhi liver aur heart ko damage kar sakta hai. Sirf doctor ki salah pe iron supplements lein. Diagnosis confirm ho tabhi treatment shuru ho.',
    },
    {
      _key: 'm4',
      myth: 'Ye test bahut painful aur mushkil hota hai',
      truth: 'Sirf ek chhoti needle hai — 2-3 second ka process. Bachche bhi de dete hain. Koi darna ki zarurat nahi.',
    },
    {
      _key: 'm5',
      myth: 'Serum Iron test se sab pata chal jaata hai iron ke baare mein',
      truth: 'Akela Serum Iron incomplete picture deta hai. TIBC, UIBC, Transferrin Saturation, aur Ferritin sab milaakar dekhne se accurate diagnosis milti hai — isliye "Iron Study" (panel) better hai sirf Serum Iron se.',
    },
    {
      _key: 'm6',
      myth: 'Vegetarians ko anaemia zaroor hogi',
      truth: 'Hona nahi chahiye agar khaane mein variety ho. Vitamin C ke saath plant-based iron (spinach, daal, chana) khaane se absorption badh jaata hai. Lekin India mein vegetarian diet mein iron deficiency risk zyada hota hai — isliye regular monitoring important hai.',
    },
  ],

  comparisons: [
    {
      _key: 'c1',
      comparedTest: 'Serum Ferritin',
      comparedTestSlug: 'ferritin-test',
      differencePoints: [
        'Serum Iron batata hai abhi khoon mein kitna iron hai (circulation mein)',
        'Ferritin batata hai body ka iron storage (reserve) kitna hai',
        'Ferritin pehle girti hai iron deficiency mein — zyada sensitive early marker hai',
        'Inflammation mein Ferritin falsely high ho sakti hai — Serum Iron is se kam affect hota hai',
        'Dono tests ek saath karwana sabse accurate hota hai — "Iron Study with Ferritin"',
      ],
    },
    {
      _key: 'c2',
      comparedTest: 'CBC (Complete Blood Count)',
      comparedTestSlug: 'cbc',
      differencePoints: [
        'Serum Iron Study direct iron levels measure karta hai — actual transport system',
        'CBC indirect indicator hai — Hb aur MCV se pata chalta hai (late stage mein)',
        'Doctor pehle CBC karwata hai — agar Hb ya MCV mein problem aaye toh Iron Study likha jaata hai',
        'CBC infection bhi detect karta hai (WBC count) — Iron Study nahi karta',
        'Dono milaakar complete anaemia workup hota hai',
      ],
    },
  ],

  repeatInfo: `Iron supplements shuru karne ke baad 6-8 hafte mein repeat karein — dekhein ki levels sahi ho rahe hain. Iron therapy ke beech mein har 3 mahine monitoring agar long-term treatment chal raha ho. Normal results aaye toh annual checkup mein ek baar. Pregnancy mein har trimester mein check ya doctor ki schedule ke hisaab se. Hemochromatosis ke patients ke liye regular 3-6 mahine monitoring zaroori hai.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Rheumatoid Arthritis', diseaseSlug: 'rheumatoid-arthritis', isAvailable: true },
    { _key: 'ld2', diseaseName: 'Fatty Liver', diseaseSlug: 'fatty-liver', isAvailable: true },
    { _key: 'ld3', diseaseName: 'Jaundice', diseaseSlug: 'jaundice', isAvailable: true },
    { _key: 'ld4', diseaseName: 'Liver Cirrhosis', diseaseSlug: 'liver-cirrhosis', isAvailable: true },
    { _key: 'ld5', diseaseName: 'Iron Deficiency Anaemia', diseaseSlug: 'iron-deficiency-anaemia', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Hemochromatosis', diseaseSlug: 'haemochromatosis', isAvailable: false },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
    { _key: 'ls2', symptomName: 'Hair Fall', symptomSlug: 'hair-fall' },
    { _key: 'ls3', symptomName: 'Headache', symptomSlug: 'headache' },
    { _key: 'ls4', symptomName: 'Muscle Cramps', symptomSlug: 'muscle-cramps' },
  ],

  linkedDiets: [
    { _key: 'ldi1', dietName: 'Rheumatoid Arthritis Diet', dietSlug: 'rheumatoid-arthritis' },
    { _key: 'ldi2', dietName: 'Fatty Liver Diet', dietSlug: 'fatty-liver' },
    { _key: 'ldi3', dietName: 'Liver Cirrhosis Diet', dietSlug: 'liver-cirrhosis' },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Ferritin Test', testSlug: 'ferritin-test', isAvailable: true },
    { _key: 'rt2', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc', isAvailable: true },
    { _key: 'rt3', testName: 'LFT (Liver Function Test)', testSlug: 'liver-function-test-lft', isAvailable: true },
    { _key: 'rt4', testName: 'Vitamin B12 Test', testSlug: 'vitamin-b12-test', isAvailable: true },
    { _key: 'rt5', testName: 'Peripheral Blood Smear', testSlug: 'peripheral-blood-smear', isAvailable: false },
    { _key: 'rt6', testName: 'Serum Folate (Folic Acid)', testSlug: 'serum-folate', isAvailable: false },
  ],

  homeopathyAngle: `Conventional treatment mein iron supplements ya specific therapy di jaati hai — jo symptom ko treat karta hai. Homeopathy is matter mein ek alag nazar rakhti hai — baar baar iron deficiency aana, ya iron supplements khaate rehne ke bawajood levels sahi na hona, matlab body ki absorb karne ki kshamta ya metabolism mein kuch root cause hai. Homeopathic treatment mein poori health history dekhi jaati hai — sirf test value nahi, aapka poora constitution. Calcarea Phosphorica, Ferrum Metallicum, China jaise remedies aksar use hote hain — lekin sirf certified homeopathic doctor ki guidance mein. Side effects practically nil hote hain. Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Serum Iron Study kya hota hai?',
      answer: 'Serum Iron Study ek blood test panel hai jo ek saath 4 cheezein measure karta hai — Serum Iron, TIBC, UIBC, aur Transferrin Saturation. Ye test iron deficiency ya iron overload diagnose karne ke liye hota hai. Sirf Serum Iron se zyada, ye full panel sahi picture deta hai.',
    },
    {
      _key: 'faq2',
      question: 'Serum Iron test ka normal range kya hai?',
      answer: 'Adult purushon mein Serum Iron normal range 59-158 mcg/dL hai, aur mahilaon mein 37-145 mcg/dL. TIBC normal range 250-450 mcg/dL hota hai. Lekin ranges labs mein thodi vary ho sakti hain — apni report ke reference values dekho.',
    },
    {
      _key: 'faq3',
      question: 'Kya fasting chahiye Serum Iron test ke liye?',
      answer: 'Haan, zaroor chahiye. Overnight fasting (8-12 ghante) aur subah ka sample lena preferred hai. Khane ke baad iron levels temporarily badhte hain aur report accurate nahi aati.',
    },
    {
      _key: 'faq4',
      question: 'Best time kab hai ye test karwane ka?',
      answer: 'Subah 9 baje se pehle sabse better hai. Iron levels din mein naturally upar-neeche hote rehte hain (diurnal variation) — subah sabse standardized result milta hai.',
    },
    {
      _key: 'faq5',
      question: 'Serum Iron low hone se kya hota hai?',
      answer: 'Low Serum Iron ka matlab aksar iron deficiency anaemia hota hai — thakaan, chakkar, haath-pair thande, baal jhadna iske common symptoms hain. Lekin diagnosis ke liye TIBC aur Ferritin bhi dekhni padegi.',
    },
    {
      _key: 'faq6',
      question: 'Serum Iron high hone ka matlab kya hai?',
      answer: 'High Serum Iron ya high Transferrin Saturation (> 50%) iron overload indicate kar sakta hai — Hemochromatosis, zyada supplements, ya liver disease. Doctor se milein — ye serious ho sakta hai agar neglect kiya jaaye.',
    },
    {
      _key: 'faq7',
      question: 'Serum Iron vs Ferritin — kya fark hai?',
      answer: 'Serum Iron batata hai abhi khoon mein kitna iron hai. Ferritin batata hai body ka iron storage (reserve) kitna hai. Ferritin pehle girti hai iron deficiency mein — zyada sensitive early marker hai. Dono milaakar dekhna best hai.',
    },
    {
      _key: 'faq8',
      question: 'Ye test pregnancy mein safe hai?',
      answer: 'Haan, bilkul safe hai. Sirf blood sample liya jaata hai — koi radiation nahi, koi injection medicine nahi. Pregnancy mein iron check karna zaroori bhi hai.',
    },
    {
      _key: 'faq9',
      question: 'Pregnancy mein Serum Iron low hona normal hai?',
      answer: 'Thoda low hona common hai kyunki blood volume badhta hai aur baby ke liye bhi iron chahiye. Lekin bahut low hona ya haemoglobin girna concerning hai — doctor se zaroor discuss karein.',
    },
    {
      _key: 'faq10',
      question: 'Kya iron supplements lene ke baad ye test karwana chahiye?',
      answer: 'Haan, 6-8 hafte baad test karwao ye confirm karne ke liye ki treatment kaam kar rahi hai ya nahi. Test se kam se kam 24 ghante pehle iron supplements band karo — warna falsely high result aayega.',
    },
    {
      _key: 'faq11',
      question: 'TIBC high hone ka kya matlab hai?',
      answer: 'TIBC high hona aksar iron deficiency ka sign hai — body zyada carrier protein (transferrin) bana rahi hai iron pakadne ke liye. Pregnancy mein bhi TIBC normally high hota hai.',
    },
    {
      _key: 'faq12',
      question: 'TIBC low hone ka matlab kya hai?',
      answer: 'Low TIBC iron overload (hemochromatosis), chronic inflammatory disease, liver disease, ya malnutrition mein milta hai. Sirf TIBC se diagnosis nahi hoti — Serum Iron aur Ferritin bhi dekhna padta hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya ye test ghar pe ho sakta hai?',
      answer: 'Haan, most NABL labs home collection service deti hain — phlebotomist aapke ghar aayega sample lene ke liye. Nearest NABL-accredited lab se contact karein.',
    },
    {
      _key: 'faq14',
      question: 'Iron Study aur Iron Deficiency Profile mein kya fark hai?',
      answer: 'Iron Deficiency Profile mein Serum Iron + TIBC ke saath Ferritin bhi hoti hai — ye slightly broader panel hai. Iron Study basic panel mein sirf Serum Iron, TIBC, UIBC, aur Transferrin Saturation hoti hai. Doctor ki advice se decide karein kaunsa karwana hai.',
    },
    {
      _key: 'faq15',
      question: 'Ye test kitne time mein aata hai?',
      answer: 'Most labs mein same day ya 4-6 ghante mein. Kuch labs next day morning report dete hain. Online report portal pe results upload ho jaate hain.',
    },
    {
      _key: 'faq16',
      question: 'Kya vegetarians ko ye test zyada karwana chahiye?',
      answer: 'Haan, specially Indian vegetarians ke liye periodic monitoring helpful hai. Plant-based iron (non-heme iron) kam absorb hota hai. Agar thakaan ya weakness feel ho, ya doctor ne CBC mein kuch dekha ho — toh test zaroor karwayein.',
    },
    {
      _key: 'faq17',
      question: 'Kya bachon mein bhi ye test hota hai?',
      answer: 'Haan. Bachon mein iron deficiency unki growth aur brain development ko affect karti hai. Agar baby pale hai, zyada thaka rehta hai, ya weight nahi badh raha — doctor Iron Study likh sakta hai.',
    },
    {
      _key: 'faq18',
      question: 'Kya ye test Serum Ferritin ki jagah le sakta hai?',
      answer: 'Nahi — dono alag cheezein measure karte hain. Ferritin iron ka storage marker hai, Iron Study transport system dekhta hai. Complete picture ke liye dono zaroori hain.',
    },
  ],
}

async function main() {
  console.log('Seeding Serum Iron Study lab test...')
  const result = await client.createOrReplace(serumIron)
  console.log('✅ Created:', result._id)
}

main().catch(console.error)
