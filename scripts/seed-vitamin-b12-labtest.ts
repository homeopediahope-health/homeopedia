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

const vitaminB12 = {
  _id: 'labtest-vitamin-b12',
  _type: 'labTest',
  name: 'Vitamin B12 Test',
  fullForm: 'Serum Vitamin B12 (Cyanocobalamin) Test',
  hindiName: 'Vitamin B12 Jaanch',
  slug: { _type: 'slug', current: 'vitamin-b12-test' },
  category: 'Blood',
  metaTitle: 'Vitamin B12 Test Normal Range Kya Hai? High Low Matlab Samjho (2026)',
  metaDescription: 'Vitamin B12 test ki normal range 200-900 pg/mL, high ya low hone ka matlab, kab karaye. Doctor-reviewed Hinglish guide. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Vitamin B12 Test ek simple blood test hai jo aapke khoon mein Vitamin B12 (Cyanocobalamin) ki maatra check karta hai. Vitamin B12 ek essential nutrient hai jo aapka body khud nahi bana sakta, ye sirf khaane se ya supplements se milta hai.

Ye vitamin teen zaroori kaam karta hai. Pehla nerve function yaani aapki nerves ko healthy rakhna. Doosra red blood cells banana jo poore sharir mein oxygen pahunchate hain. Teesra DNA synthesis yaani har cell ke andar genetic material banana.

Vitamin B12 mainly animal-based foods mein hota hai jaise meat, fish, eggs aur dairy. Isliye India mein vegetarian aur vegan log is vitamin ki kami ke zyada shikar hote hain. Ek badi Indian study (North India, 2019) mein paaya gaya ki tier-3 cities mein 47% logon mein Vitamin B12 deficiency thi.

Agar B12 ka level gir jaaye toh nerves damage ho sakti hain, khoon ki kami ho sakti hai aur dimag ki working bhi affect ho sakti hai. Isliye samay pe test karna zaroori hai.`,

  whenToTest: [
    'Hamesha thakaan rehna, rest karne ke baad bhi',
    'Haath aur pairon mein jhunjhunahat (tingling) ya numbness',
    'Chal-chal mein balance khaana ya lad-khadaana',
    'Yaad daasht kamzor hona ya concentration mein problem',
    'Zubaan par sujan ya jalan (Glossitis)',
    'Skin paleness (paandupan) ya slight yellowish colour',
    'Depression ya mood swings',
    'Pure vegetarian ya vegan hain (B12 sirf animal foods mein hota hai)',
    'Anaemia (khoon ki kami) ki report aayi ho, khaaskar megaloblastic anaemia',
    'Pregnancy hai ya pregnancy ki taiyaari kar rahi hain',
    '60 saal se upar ki umar hai',
    'Metformin (diabetes ki dawa) ya acid pump inhibitors (PPI) le rahe ho',
    'Crohn\'s disease ya celiac disease hai',
  ],

  whatItDetects: `Is test se pata chalta hai ki Vitamin B12 deficiency hai ya nahi, anaemia ya neuropathy ka kaaran B12 hai ya koi aur cheez, treatment ke baad levels sudhar rahe hain ya nahi, aur Pernicious Anaemia (autoimmune condition jisme body B12 absorb nahi karti) hai ya nahi.

Thakaan ke kai karan hote hain. Ye test confirm karta hai ki B12 asli wajah hai ya koi aur cheez.`,

  normalRanges: [
    { _key: 'adults',      parameter: 'Adults (Male & Female)',  normalRange: '200 – 900',   unit: 'pg/mL', highBrief: 'Liver/kidney/over-supp',    lowBrief: 'Deficiency, nerve damage risk' },
    { _key: 'borderline',  parameter: 'Borderline Low',          normalRange: '200 – 300',   unit: 'pg/mL', highBrief: 'N/A',                       lowBrief: 'Further tests needed' },
    { _key: 'optimal',     parameter: 'Optimal Range',           normalRange: '400 – 600',   unit: 'pg/mL', highBrief: 'N/A',                       lowBrief: 'N/A' },
    { _key: 'deficiency',  parameter: 'Deficiency',              normalRange: 'Below 200',   unit: 'pg/mL', highBrief: 'N/A',                       lowBrief: 'Immediate attention needed' },
    { _key: 'high',        parameter: 'HIGH (Concern Level)',    normalRange: 'Above 900',   unit: 'pg/mL', highBrief: 'Liver/blood disorder suspect', lowBrief: 'N/A' },
    { _key: 'pregnancy',   parameter: 'Pregnancy mein',          normalRange: '200 – 900',   unit: 'pg/mL', highBrief: 'Over-supplementation',       lowBrief: 'NTD, LBW, miscarriage risk' },
    { _key: 'children',    parameter: 'Children (1-13 yrs)',     normalRange: '160 – 950',   unit: 'pg/mL', highBrief: 'Varies by lab',             lowBrief: 'Nerve / growth issues' },
    { _key: 'infants',     parameter: 'Infants (0-12 months)',   normalRange: '160 – 1300',  unit: 'pg/mL', highBrief: 'Varies by lab',             lowBrief: 'Developmental delay risk' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: '200 se 900 pg/mL (same as adults), lekin 200 pg/mL se thoda upar rehna zyada safe hai',
    riskNote: `Pregnant mahilaon ke liye Vitamin B12 test bahut zaroori hai, khaaskar India mein. Research studies (Frontiers in Endocrinology 2021, Indian data) batate hain ki Indian pregnant mahilaon mein B12 deficiency ka prevalence 51% se 74% tak hai, especially North aur West India mein.

Agar B12 low rahe toh baby mein neural tube defects ho sakte hain (spine aur brain development mein problem), low birth weight (2.5 kg se kam), gestational diabetes ka risk, miscarriage ka risk, aur baby ke cognitive development pe asar pad sakta hai.`,
    whenDoctor: 'Pehli trimester mein hi test karwao, especially vegetarian mahilaon ko. Agar deficiency mili toh supplements se bahut accha result aata hai. Supplement ki dose doctor se confirm karein.',
  },

  highMeans: [
    'Supplements ya injections: B12 ki high dose le rahe hain toh sabse common aur generally harmless reason yahi hai',
    'Liver disease: hepatitis ya cirrhosis mein liver ka stored B12 blood mein release ho jaata hai',
    'Chronic Myeloid Leukemia (CML): ek type ka blood disorder jisme B12 binding proteins increase hote hain',
    'Polycythemia Vera: khoon ke red cells zyada banna',
    'Kidney problems: kidney sahi se filter nahi kari toh B12 blood mein accumulate hoti hai',
    'Kuch studies mein diabetics mein bhi B12 high dekha gaya hai',
  ],

  highReassurance: 'Zyada baar high B12 sirf supplements ki wajah se hota hai jo generally safe hai. Lekin agar supplements nahi le rahe aur B12 high hai toh doctor ko zaroor dikhao, woh additional tests karenge.',

  lowMeans: [
    'Pure vegetarian ya vegan diet, animal products bilkul nahi khaana',
    'Pernicious Anaemia: autoimmune condition jisme intrinsic factor nahi banta jo B12 absorb karne ke liye chahiye',
    'Celiac disease ya Crohn\'s disease mein intestine sahi se absorb nahi karti',
    'Stomach surgery (gastrectomy) ke baad absorbing cells remove ho jaati hain',
    'Metformin (diabetes ki common dawa) ka long-term use B12 absorption kam karta hai',
    'Proton pump inhibitors (PPIs) yaani acidity ki medicines bhi B12 absorption rokti hain',
    '60+ age mein stomach mein acid aur intrinsic factor production kam ho jaati hai',
    'Overactive thyroid, HIV/AIDS ya alcohol abuse',
  ],

  lowConcern: 'Ghabrao mat. Timely pata chalne pe aur doctor ki salah se treatment bahut effective hota hai. Borderline (200-300 pg/mL) mein agar symptoms bhi hon toh doctor MMA test bhi likh sakte hain.',

  redFlags: [
    'Vitamin B12 200 pg/mL se neeche aaye, khaaskar agar haath-pairon mein numbness bhi ho',
    'Walking mein dikkat ho ya balance jaata ho',
    'Yaad daasht achanak kamzor ho rahi ho',
    'Pregnancy mein B12 low aaye',
    'B12 bina wajah zyada high aa jaaye (900+ pg/mL) aur supplements nahi le rahe',
  ],

  emergencyLevel: 'Nerve damage jo B12 deficiency se hoti hai woh zyada time tak reh jaaye toh permanent ho sakti hai. Isliye delay mat karo. Pregnancy mein low B12 turant doctor ko dikhao.',

  selfTreatWarning: 'Report dekhkar khud treatment mat shuru karo. Na dose badhao na koi injection khud lo. Vitamin B12 injection ki dose doctor hi decide karta hai aapki condition aur absorption ke hisaab se.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Din ka koi bhi waqt theek hai, subah, dopahar ya shaam. Koi special time restriction nahi.',
    whatToEat: 'Khaane se test affect nahi hota, koi restriction nahi. Paani normal pee sakte ho.',
    whatToAvoid: 'Agar usi din B12 ka supplement lena ho toh test ke BAAD lo, pehle nahi. Isse result temporarily affect ho sakta hai.',
    medicineNote: 'Koi bhi medicine band karne se pehle doctor se poochho. Doctor ko batao ki aap kaunsi medicines le rahe hain, khaaskar metformin, PPIs ya B12 supplements.',
    accuracyNote: 'Agar recently B12 injection ya high-dose supplement liya hai toh doctor ko batao, results temporarily high aa sakte hain.',
  },

  sampleInfo: {
    sampleType: 'Blood (haath ki nass se, Red top ya SST tube mein)',
    sampleAmount: 'Sirf 3 se 5 mL blood, bahut thoda',
    reportTime: 'Usually 6 se 24 ghante mein. Kuch labs 4 se 6 ghante mein bhi deti hain.',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Vitamin B12 test ke liye khali pet rehna zaroori hai',
      truth: 'Nahi, B12 test ke liye fasting ki koi zarurat nahi. Aap normal khaana kha ke test de sakte hain. Sirf kuch tests jaise fasting glucose ya lipid profile mein khali pet rehna hota hai, B12 unme se nahi hai.',
    },
    {
      _key: 'myth2',
      myth: 'B12 low matlab zaroor koi serious bimari hai',
      truth: 'Zyaadaatar cases mein B12 low sirf diet ki wajah se hota hai, khaaskar vegetarian logo mein. Sirf supplement ya diet change se theek ho jaata hai. Ek abnormal value se koi bimari confirm nahi hoti, doctor poori history dekh ke decide karta hai.',
    },
    {
      _key: 'myth3',
      myth: 'Vitamin B12 test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle haath ki nass mein, 2 se 3 second ka process. Zyaadaatar log bolte hain chubhan almost feel nahi hoti. Bilkul common blood test ki tarah hai.',
    },
    {
      _key: 'myth4',
      myth: 'B12 high hona koi problem nahi, jitna zyada utna achha',
      truth: 'Bahut high B12, khaaskar bina supplement ke, liver disease, kidney problem ya blood disorders ka sign ho sakta hai. Doctor se zaroor dikhao agar supplements nahi le rahe aur fir bhi B12 bahut high hai.',
    },
    {
      _key: 'myth5',
      myth: 'Vegetarian hoon isliye B12 test ki zarurat nahi, fortified foods khata hoon',
      truth: 'Fortified foods mein B12 hoti hai lekin absorption vary karti hai. India mein vegetarian logon mein deficiency bahut common hai, 47% tak (Indian study 2019). Test karwa ke confirm karna hamesha safe hai.',
    },
    {
      _key: 'myth6',
      myth: 'Vitamin B12 ki tablet khao, test ki zarurat nahi',
      truth: 'Bina test ke supplement lena blindly kaam nahi karta. Kuch logon mein absorption ki problem hoti hai jisme tablet se kaam nahi chalta aur injection chahiye hoti hai. Isliye pehle test phir doctor ki salah se treatment.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Folate (Folic Acid) Test',
      comparedTestSlug: '',
      differencePoints: [
        'Kya check karta hai | Blood mein Vitamin B12 levels | Blood mein Folic Acid levels',
        'Kab likhte hain | Fatigue, nerve symptoms, anaemia | Anaemia, pregnancy, nerve symptoms',
        'Fasting | Zaroori nahi | Zaroori nahi',
        'Sample | Blood | Blood',
        'Kab saath hota hai | B12 aur Folate aksar ek saath likhte hain | Aksar B12 ke saath',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'MMA Test (Methylmalonic Acid)',
      comparedTestSlug: '',
      differencePoints: [
        'Kya check karta hai | B12 levels directly | B12 deficiency ka zyada sensitive marker',
        'Kab likhte hain | First step screening | Jab B12 borderline ho (200-300 pg/mL)',
        'Fasting | Zaroori nahi | Zaroori nahi',
        'Sample | Blood | Blood ya urine',
        'Kab saath | Routine mein | Agar B12 result doubtful ho toh',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'CBC (Complete Blood Count)',
      comparedTestSlug: 'cbc',
      differencePoints: [
        'Kya check karta hai | B12 vitamin levels | Saari blood cells ka count',
        'Anaemia detect karta hai | B12 deficiency se megaloblastic anaemia | Megaloblastic aur iron deficiency dono',
        'Nerve symptoms mein helpful | Haan, directly | Nahi',
        'Fasting | Zaroori nahi | Zaroori nahi',
        'Kab saath | Aksar CBC + B12 + Folate ek saath likhte hain anaemia workup mein | Doctor decide karta hai',
      ],
    },
  ],

  repeatInfo: `Treatment ke baad agar B12 injection ya supplement shuru kiya hai toh 3 mahine baad repeat test karo. Dekho levels sudhar rahe hain ya nahi.

Pernicious Anaemia mein lifelong monitoring chahiye. Doctor ke schedule ke hisaab se har 3 se 6 mahine.

Normal result aur koi symptoms nahi toh saal mein ek baar annual checkup mein include karo.

Pregnancy mein first trimester mein ek baar, agar normal hai toh doctor decide karta hai kab dobara.

Vegetarians aur vegans ke liye saal mein ek baar recommended hai, zyada wait mat karo.

Metformin users mein doctor generally har 1 se 2 saal mein check karte hain.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Anaemia (Megaloblastic)', diseaseSlug: 'anaemia', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Neuropathy (Nerve ki Takleef)', diseaseSlug: 'neuropathy', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Chronic Fatigue (Hamesha Thakaan)', diseaseSlug: 'fatigue', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Pernicious Anaemia', diseaseSlug: 'pernicious-anaemia', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Depression', diseaseSlug: 'depression', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Diabetes (Metformin users)', diseaseSlug: 'diabetes-mellitus', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc', isAvailable: true },
    { _key: 'rt2', testName: 'Folate / Folic Acid Test', testSlug: 'folate-test', isAvailable: false },
    { _key: 'rt3', testName: 'MMA Test (Methylmalonic Acid)', testSlug: 'mma-test', isAvailable: false },
    { _key: 'rt4', testName: 'Homocysteine Test', testSlug: 'homocysteine-test', isAvailable: false },
    { _key: 'rt5', testName: 'Vitamin D Test', testSlug: 'vitamin-d-test', isAvailable: true },
    { _key: 'rt6', testName: 'Thyroid Profile (TSH)', testSlug: 'thyroid-profile-tsh', isAvailable: true },
  ],

  homeopathyAngle: `Ek abnormal B12 report ghabrane ki baat nahi, ye bas signal hai ki aapka body kuch bata raha hai.

Pehla kaam apni report lekar doctor ke paas jaao. Woh aapki diet, symptoms aur medical history dekh ke decide karenge ki tablet se kaam chalega ya injection chahiye.

Agar baar baar B12 deficiency aa rahi hai ya conventional supplements se fark nahi pad raha toh sirf vitamin dena kaafi nahi. Homeopathy is situation mein underlying cause jaise absorption ki weakness, digestive system ki kamzori, ya chronic stress ko address karne mein help kar sakti hai. Treatment mein poori health history li jaati hai aur individualized medicine diya jaata hai. Side effects practically nahi hote.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Vitamin B12 test kya hota hai?',
      answer: 'Vitamin B12 test ek blood test hai jo aapke khoon mein Vitamin B12 (Cyanocobalamin) ki maatra maapata hai. Ye test nerve health, red blood cell formation aur DNA synthesis ke liye zaroori vitamin ka level check karta hai.',
    },
    {
      _key: 'faq2',
      question: 'Vitamin B12 test ka doosra naam kya hai?',
      answer: 'Isko Serum Vitamin B12 Test, Vitamin B12 Assay ya Vitamin B12 (Cyanocobalamin) test bhi kaha jaata hai. Lab report mein yahi naam dikh sakta hai.',
    },
    {
      _key: 'faq3',
      question: 'Vitamin B12 test kyu kiya jaata hai?',
      answer: 'Doctor ye test likhta hai jab thakaan, haath-pairon mein jhunjhunahat, anaemia ya nerve symptoms hon. Vegetarians, pregnant mahilaon, 60+ age ke logon aur Metformin lene walon ko bhi ye test recommended hai.',
    },
    {
      _key: 'faq4',
      question: 'Vitamin B12 ka normal range kya hota hai?',
      answer: 'Indian labs mein normal range 200 se 900 pg/mL hoti hai. Optimal range 400 se 600 pg/mL maani jaati hai. 200 pg/mL se neeche deficiency hai aur 900 se upar high maana jaata hai.',
    },
    {
      _key: 'faq5',
      question: 'Vitamin B12 test ke liye fasting chahiye ya nahi?',
      answer: 'Nahi, Vitamin B12 test ke liye bilkul fasting ki zarurat nahi hai. Aap normal khaana kha ke test de sakte hain.',
    },
    {
      _key: 'faq6',
      question: 'Vitamin B12 test kab karna chahiye, subah ya shaam?',
      answer: 'Kisi bhi waqt test ho sakta hai, koi time restriction nahi. Sirf ek baat, agar aap B12 supplement le rahe hain toh test ke BAAD lo, pehle nahi.',
    },
    {
      _key: 'faq7',
      question: 'Vitamin B12 high hone ka matlab kya hai?',
      answer: 'B12 high hona zyaadaatar case mein supplements ya injections ki wajah se hota hai jo generally safe hai. Lekin agar supplements nahi le rahe aur B12 900 se upar aa raha hai toh liver, kidney ya blood disorder possible hai, doctor se milein.',
    },
    {
      _key: 'faq8',
      question: 'Vitamin B12 low hone ka matlab kya hai?',
      answer: 'Vitamin B12 low matlab body mein is vitamin ki kami hai. Vegetarian diet, absorption problem jaise Pernicious Anaemia ya Celiac, ya Metformin jaisi medicines iska karan ho sakti hain. Doctor ke saath treatment plan banao.',
    },
    {
      _key: 'faq9',
      question: 'Kya vegetarian logon mein B12 deficiency zyada hoti hai?',
      answer: 'Haan, B12 mainly animal-based foods mein hoti hai. Strict vegetarian ya vegan logon mein B12 deficiency bahut common hai. India mein ek study ne paaya ki 47% logon mein deficiency thi.',
    },
    {
      _key: 'faq10',
      question: 'Pregnancy mein Vitamin B12 test zaroori hai kya?',
      answer: 'Haan, khaaskar vegetarian pregnant mahilaon ke liye. B12 low rehna baby mein neural tube defects, low birth weight aur gestational diabetes ka risk badhaata hai. First trimester mein hi test karwao.',
    },
    {
      _key: 'faq11',
      question: 'Vitamin B12 test mein kitna blood liya jaata hai?',
      answer: 'Sirf 3 se 5 mL blood, haath ki nass se. Bahut hi thoda aur process sirf 2 se 3 second ka hai.',
    },
    {
      _key: 'faq12',
      question: 'Vitamin B12 test ki report kitne time mein aati hai?',
      answer: 'Zyaadaatar labs mein 6 se 24 ghante mein. Kuch labs 4 se 6 ghante mein bhi de deti hain. Online ya WhatsApp pe report mil jaati hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya Vitamin B12 test ghar pe ho sakta hai?',
      answer: 'Haan, Metropolis, Lal PathLabs, Thyrocare jaisi badi labs home collection karti hain. Phlebotomist aapke ghar aata hai sample lene ke liye.',
    },
    {
      _key: 'faq14',
      question: 'Vitamin B12 test kab repeat karein?',
      answer: 'Agar treatment shuru kiya hai toh 3 mahine baad. Normal hai toh saal mein ek baar, khaaskar vegetarians ke liye. Pernicious Anaemia mein doctor ke schedule ke hisaab se regularly.',
    },
    {
      _key: 'faq15',
      question: 'Kya B12 aur Vitamin D test ek saath hote hain?',
      answer: 'Haan, bahut baar doctor B12 aur Vitamin D aur CBC ek saath likhta hai, khaaskar thakaan aur weakness ke cases mein.',
    },
    {
      _key: 'faq16',
      question: 'B12 borderline (200-300 pg/mL) aaya, kya karna chahiye?',
      answer: 'Ghabrao mat. Doctor ko dikhao, woh MMA test ya Homocysteine test se confirm karenge ki actual deficiency hai ya nahi. Symptoms ke saath borderline range mein bhi treatment hoti hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya high B12 se cancer ho sakta hai?',
      answer: 'Nahi, high B12 cancer nahi karta. Lekin kuch blood disorders jaise CML mein B12 high aa sakta hai. Isliye results ko doctor ki raay se samjhein, khud diagnosis mat karo.',
    },
    {
      _key: 'faq18',
      question: 'Metformin khaane walon ko B12 test kyun zaroor hai?',
      answer: 'Metformin ka long-term use B12 absorption kam karta hai. Isliye doctors regularly B12 monitor karte hain Metformin users mein.',
    },
    {
      _key: 'faq19',
      question: 'Vitamin B12 test aur Folate test mein kya fark hai?',
      answer: 'B12 aur Folate dono nerve health aur red blood cell formation mein kaam aate hain lekin ye alag vitamins hain. Dono ki kami se megaloblastic anaemia ho sakti hai, isliye doctor aksar dono tests ek saath likhta hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya B12 supplement bina test ke le sakte hain?',
      answer: 'Bina test ke supplement lena safe to hai lekin effective nahi hota. Kuch logon mein absorption problem hoti hai jisme tablet kaam nahi karta aur injection chahiye. Isliye pehle test karo phir doctor ki salah se sahi treatment lo.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(vitaminB12)
    console.log('✅ Vitamin B12 Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
