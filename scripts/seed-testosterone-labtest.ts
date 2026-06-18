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

const testosterone = {
  _id: 'labtest-testosterone',
  _type: 'labTest',
  name: 'Testosterone Test (Serum Total)',
  fullForm: 'Serum Total Testosterone Test',
  hindiName: 'Testosterone Hormone Jaanch',
  slug: { _type: 'slug', current: 'testosterone-test' },
  category: 'Blood',
  metaTitle: 'Testosterone Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'Testosterone test ka normal range, high/low matlab, fasting aur preparation. Complete guide, verified, doctor-reviewed. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Testosterone Test ek blood test hai jo aapke khoon mein testosterone hormone ki matra naapata hai. Testosterone ek sex hormone hai jo purushon mein testis aur mahilaon mein ovaries mein banta hai. Thodi matra mein adrenal glands bhi banati hain.

Testosterone ko aksar "male hormone" kaha jaata hai, lekin ye sirf mard ka hormone nahi hai. Mahilaon mein bhi hota hai, lekin bahut kam matra mein. Mard ke shareer mein ye daadhi, body hair, muscles aur sexual desire ke liye zaroori hai. Mahila ke shareer mein energy, mood, bone strength aur reproductive health ke liye kaam aata hai.

Is test ke do main types hain. Total Testosterone khoon mein kul testosterone measure karta hai, bound aur free dono. Free Testosterone sirf woh testosterone hai jo proteins se bandha nahi hota, yaani active form hai. India mein doctor aksar "Serum Testosterone Total" ya "S. Testosterone" likhte hain. Kuch cases mein Free Testosterone alag se bhi likha jaata hai.`,

  whenToTest: [
    'Libido yaani sexual desire bahut kam ho gayi ho (mard mein)',
    'Erectile dysfunction yaani erection mein problem ho',
    'Infertility investigation mein, bachcha nahi ho raha',
    'Bahut zyada thakaan aur weakness rehti ho',
    'Body hair ya daadhi kam ho rahi ho (mard mein)',
    'Muscle mass ghaat raha ho aur fat badh raha ho',
    'Gynecomastia, mard ke chest mein breast tissue banne lage',
    'Puberty bahut jaldi ya bahut deri se aa rahi ho (bachon mein)',
    'Acne bahut zyada aur baar baar aaye (mahila mein)',
    'Hirsutism yaani body ya face pe unwanted hair aana (mahila mein)',
    'PCOD ya PCOS ki investigation mein',
    'Irregular periods aur infertility investigation (mahila mein)',
    'Adrenal glands ya pituitary gland ki problem ka shak ho',
    'Testosterone treatment chal rahi ho, monitoring ke liye',
  ],

  whatItDetects: `Is test se doctor ko pata chalta hai ki hormone imbalance hai ya nahi. Agar imbalance hai toh source kahan hai, testis mein, ovaries mein ya adrenal glands mein. Is jaankari se Male Infertility, PCOD, Hypogonadism aur Erectile Dysfunction ki diagnosis mein madad milti hai.

Mard mein low testosterone (hypogonadism) pakadta hai, aur mahila mein PCOS ki wajah se high testosterone bhi identify karta hai. Ye test akela diagnosis nahi deta, doctor symptoms aur doosre tests milaakar poori picture banate hain.`,

  normalRanges: [
    { _key: 'male19',  parameter: 'Adult Male (19-39 saal)',       normalRange: '300 – 1,000', unit: 'ng/dL', highBrief: 'Excess androgen / Tumour',      lowBrief: 'Hypogonadism / Low T' },
    { _key: 'male40',  parameter: 'Adult Male (40-59 saal)',       normalRange: '252 – 916',   unit: 'ng/dL', highBrief: 'Investigate source',             lowBrief: 'Age-related low T' },
    { _key: 'male60',  parameter: 'Adult Male (60+ saal)',         normalRange: '196 – 859',   unit: 'ng/dL', highBrief: 'Rare, investigate',              lowBrief: 'Common age decline' },
    { _key: 'fpre',    parameter: 'Adult Female (premenopausal)',  normalRange: '15 – 70',     unit: 'ng/dL', highBrief: 'PCOS / Adrenal issue',           lowBrief: 'Low libido / fatigue' },
    { _key: 'fpost',   parameter: 'Adult Female (postmenopausal)', normalRange: '7 – 40',      unit: 'ng/dL', highBrief: 'Investigate source',             lowBrief: 'Expected, monitor symptoms' },
    { _key: 'child',   parameter: 'Children (prepubertal)',        normalRange: '< 20',        unit: 'ng/dL', highBrief: 'Precocious puberty',             lowBrief: 'Delayed puberty' },
    { _key: 'teen',    parameter: 'Teen Boys (15-17 saal)',        normalRange: '100 – 1,200', unit: 'ng/dL', highBrief: 'Investigate',                    lowBrief: 'Delayed puberty' },
    { _key: 'icmr',    parameter: 'Indian Female (ICMR study)',    normalRange: '6 – 68',      unit: 'ng/dL', highBrief: 'PCOS / Adrenal cause likely',    lowBrief: 'Low libido / fatigue' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'Pregnancy mein testosterone naturally thoda badhta hai. Non-pregnant female range se thoda upar ho sakta hai jo normal hai. Placenta bhi thoda testosterone banata hai.',
    riskNote: `Normal uncomplicated pregnancy mein routine testosterone test nahi hota. Lekin kuch special cases mein doctor likhta hai jaise PCOS ki history ho aur pregnancy mein symptoms aayen, androgen excess ke signs dikhein yaani acne ya hirsutism, ya adrenal ya ovarian tumour ka investigation ho.

Pregnancy mein mildly elevated testosterone akele koi problem nahi hoti. Doctor clinical picture dekhkar decide karta hai.`,
    whenDoctor: 'PCOS history ke saath pregnancy mein unusual symptoms aaye toh doctor se zaroor batao. Doctor decide karega ki test ki zarurat hai ya nahi. Khud test mat karwao bina doctor ke.',
  },

  highMeans: [
    'Anabolic steroids ya testosterone supplements lena, mard mein sabse common reason',
    'PCOD ya PCOS, mahila mein sabse common reason India mein',
    'Testicular tumour, testis mein cancerous ya non-cancerous growth',
    'Adrenal gland tumour ya adrenal hyperplasia',
    'Congenital adrenal hyperplasia, ek genetic condition',
    'Ovarian tumour (mahila mein, rare)',
    'Cushing syndrome, cortisol excess condition',
    'Certain medicines jaise danazol (mahila mein)',
    'Obesity, fat cells SHBG ko affect karte hain',
  ],

  highReassurance: 'High testosterone ka matlab automatically koi serious bimari nahi hoti. Doctor symptoms, clinical history aur doosre tests milaakar poori picture banata hai. Apni report lekar doctor se consult zaroor karein. Khud koi supplement ya herb mat lein bina salah ke.',

  lowMeans: [
    'Hypogonadism yaani testis theek se kaam nahi karte (primary cause mard mein)',
    'Pituitary gland ki problem, brain signal nahi bhejta (secondary cause)',
    'Klinefelter syndrome, genetic condition mard mein',
    'Obesity, fat cells testosterone ko estrogen mein convert karte hain',
    'Uncontrolled diabetes ya chronic illness',
    'Long-term opioid ya steroid use',
    'Chronic stress aur neend ki lagaataar kami',
    'Age-related decline, 40 ke baad gradual hona normal hai',
    'Menopause ke baad naturally kam hona (mahila mein)',
    'Oophorectomy yaani ovary remove hona (mahila mein)',
    'Adrenal insufficiency',
  ],

  lowConcern: 'Agar symptoms saath hain jaise thakaan, sex drive bilkul khatam, muscle loss, mood swings aur testosterone consistently 300 ng/dL se neeche aaye, do alag mornings ke tests mein, toh doctor se zaroor milein. Kabhi bhi khud testosterone supplements ya injections mat lein, ye bahut serious side effects de sakte hain.',

  redFlags: [
    'Report mein value bahut zyada high ya bahut low aaye',
    'Mahila mein acne aur irregular periods aur body hair teeno ek saath hon',
    'Mard mein libido bilkul khatam aur extreme thakaan aur mood swings ek saath',
    'Teenage mein puberty bahut jaldi ya bahut deri se aa rahi ho',
    'Testicles mein dard ya sujan ho',
    'Infertility ke saath abnormal testosterone aaye',
    'Chest pain ya severe mood swings ke saath testosterone-related symptoms',
  ],

  emergencyLevel: 'Agar chest pain, severe mood swings ya confusion ke saath testosterone-related symptoms hon toh turant doctor ke paas jayen. Bina doctor ke testosterone injections ya high-dose supplements kabhi mat lein.',

  selfTreatWarning: 'Report dekhkar khud treatment mat shuru karein. Testosterone supplements ya injections bina doctor ke bilkul nahi lena chahiye. Ye heart, liver aur fertility pe serious asar daal sakte hain. Doctor ki salah ke bina koi bhi hormone supplement lena dangerous hai.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Subah 7 AM se 10 AM ke beech test karwaana sabse accha hai. Testosterone ka level is waqt peak pe hota hai. Men under 45 ke liye specially morning timing bahut zaroori hai, dopahar mein test karwaane se value 20-34% kam aa sakti hai.',
    whatToEat: 'Technically fasting strictly zaroori nahi hai lekin subah khali pet jaana best practice hai. Paani pee sakte hain, koi restriction nahi paani pe.',
    whatToAvoid: 'Test se 24 ghante pehle alcohol bilkul nahi. Test se 12-24 ghante pehle intense exercise avoid karein. Raat ko neend poori lein, neend ki kami se testosterone low aa sakta hai. High carb ya high fat meal khaane ke baad level temporarily kam ho sakta hai.',
    medicineNote: 'Koi bhi medicine band karni hai ya nahi, apne doctor se zaroor poochho. Kai medicines testosterone levels pe asar dalti hain. Khud koi medicine band mat karo bina doctor ke.',
    accuracyNote: 'Agar borderline low value aaye toh doctor aksar 2-4 hafte baad doosri baar test repeat karta hai, fresh morning sample ke saath. Single result se judgment mat karein.',
  },

  sampleInfo: {
    sampleType: 'Blood (venous, arm ki nadi se, SST tube)',
    sampleAmount: 'Sirf 3-5 mL blood, bahut thoda sa',
    reportTime: 'Same day ya next working day, adhiktar labs 6-24 ghante mein result deti hain',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Testosterone test ke liye 12 ghante ka fasting zaroori hai',
      truth: 'Fasting strictly required nahi hai. Lekin best accuracy ke liye subah khali pet 7-10 AM ke beech test karwaana chahiye. Paani pee sakte hain aur ja sakte hain.',
    },
    {
      _key: 'myth2',
      myth: 'Low testosterone ka matlab zaroor koi serious bimari hai',
      truth: 'Low testosterone ke kai common aur treatable causes hain jaise stress, neend ki kami, obesity ya age-related decline. Ek single test se diagnosis nahi hoti. Doctor symptoms aur repeat tests dekhta hai.',
    },
    {
      _key: 'myth3',
      myth: 'Ye test sirf mard ke liye hota hai',
      truth: 'Mahilaon mein bhi testosterone test hota hai, specially PCOS, infertility ya hirsutism ke cases mein. Indian mahilaon mein PCOS bahut common hai isliye ye test women ke liye bhi bahut important hai.',
    },
    {
      _key: 'myth4',
      myth: 'Testosterone high ho toh gym supplements ya desi nuskhe lene chahiye',
      truth: 'High testosterone ka cause pehle dhundhna zaroori hai. Bina doctor ki salah ke koi supplement ya herb lena galat ho sakta hai aur levels aur bigaad sakta hai.',
    },
    {
      _key: 'myth5',
      myth: 'Dopahar ya shaam ko bhi test karwa sakte hain, koi fark nahi padta',
      truth: 'Testosterone level subah peak pe hota hai aur dopahar tak 20-34% tak gir sakta hai. Dopahar mein test karwaane se borderline low result aa sakta hai jo misleading ho sakta hai.',
    },
    {
      _key: 'myth6',
      myth: 'Testosterone test bahut costly aur painful hota hai',
      truth: 'Ye ek simple blood test hai. Process mein sirf 5 minute lagta hai aur barely koi pain hota hai, sirf ek chhoti needle prick 2-3 second ki. Cost ke liye apni nearest NABL-accredited lab se confirm karein.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Free Testosterone Test',
      comparedTestSlug: '',
      differencePoints: [
        'Kya measure karta hai | Khoon mein kul testosterone (bound + free) | Sirf active unbound testosterone',
        'Kab likhate hain | Routine screening ke liye pehle | Borderline total T ya obesity mein baad mein',
        'Report time | Same day | 1-2 days kuch labs mein',
        'Kaunsa pehle | Total testosterone pehle karein | Doctor decide karta hai',
        'Morning timing | Zaroori | Zaroori',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'LH / FSH Test',
      comparedTestSlug: '',
      differencePoints: [
        'Kya check karta hai | Hormone ka actual level in blood | Brain signals jo testosterone banwaate hain',
        'Problem ki jagah | Testis ya ovary ki problem | Brain ya pituitary ki problem identify karta hai',
        'Kab saath mein | Infertility panel mein dono saath | Infertility panel mein dono saath',
        'Fasting | Nahi, morning preferred | Nahi, morning preferred',
        'Report time | Same day | Same day',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'Semen Analysis',
      comparedTestSlug: 'semen-analysis',
      differencePoints: [
        'Kya check karta hai | Testosterone hormone level | Sperm count, motility aur morphology',
        'Male infertility mein | Hormone cause identify karta hai | Physical sperm quality batata hai',
        'Kab saath karein | Male infertility workup mein dono | Male infertility workup mein dono',
        'Sample type | Blood | Semen sample',
        'Fasting | Morning preferred | 2-5 din abstinence zaroori',
      ],
    },
  ],

  repeatInfo: `Pehli baar low aayi ho toh 2-4 hafte baad doosri morning repeat karo. AUA guideline ke anusaar do alag morning tests se hi low testosterone confirm hota hai.

PCOS ya hirsutism ki treatment chal rahi ho toh 3-6 mahine baad monitoring ke liye repeat karo. Testosterone Replacement Therapy (TRT) mein har 3-6 mahine doctor ke schedule pe monitoring zaroori hai.

Healthy male 40 plus ke baad agar symptoms hon toh annually ek baar check karo. Normal result aur koi symptoms nahi toh routine repeat ki zarurat nahi, doctor bole tabhi repeat.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Male Infertility', diseaseSlug: 'male-infertility', isAvailable: false },
    { _key: 'ld2', diseaseName: 'PCOD / PCOS', diseaseSlug: 'pcod', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Hypogonadism', diseaseSlug: 'hypogonadism', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Erectile Dysfunction', diseaseSlug: 'erectile-dysfunction', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Precocious Puberty', diseaseSlug: 'precocious-puberty', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Adrenal Disorders', diseaseSlug: 'adrenal-disorders', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Semen Analysis', testSlug: 'semen-analysis', isAvailable: true },
    { _key: 'rt2', testName: 'TSH (Thyroid)', testSlug: 'thyroid-profile-tsh', isAvailable: true },
    { _key: 'rt3', testName: 'LH Test', testSlug: 'lh-test', isAvailable: false },
    { _key: 'rt4', testName: 'FSH Test', testSlug: 'fsh-test', isAvailable: false },
    { _key: 'rt5', testName: 'Prolactin Test', testSlug: 'prolactin-test', isAvailable: false },
    { _key: 'rt6', testName: 'DHEAS Test', testSlug: 'dheas-test', isAvailable: false },
    { _key: 'rt7', testName: 'SHBG Test', testSlug: 'shbg-test', isAvailable: false },
  ],

  homeopathyAngle: `Ek abnormal testosterone report se ghabrao mat aur koi final diagnosis mat karo. Apni report lekar qualified doctor se milein.

Agar baar baar testosterone imbalance ki problem aa rahi hai toh sirf symptoms treat karna kaafi nahi hota. Homeopathy mein poori health history, physical, mental aur emotional sab dekhkar individualized treatment di jaati hai. Conventional treatment jahaan hormones replace karta hai, wahaan homeopathy body ke natural balance ko restore karne ki koshish karti hai. Side effects practically nil hote hain.

Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Testosterone test kya hota hai?',
      answer: 'Testosterone test ek simple blood test hai jo khoon mein testosterone hormone ki matra naapata hai. Ye mard aur mahila dono ke liye hota hai. Mard mein sexual function, muscles aur energy ke liye, mahila mein PCOS aur infertility investigation ke liye ye test kiya jaata hai.',
    },
    {
      _key: 'faq2',
      question: 'Testosterone test ka normal range kya hai male ke liye?',
      answer: 'Adult male ke liye normal range generally 300 se 1,000 ng/dL hoti hai. 40 ke baad ye thoda naturally kam hota hai. 300 ng/dL se neeche do alag morning tests mein low testosterone maana jaata hai. Apni lab ki reference range se compare karein.',
    },
    {
      _key: 'faq3',
      question: 'Mahila ke liye testosterone ka normal range kya hai?',
      answer: 'Premenopausal mahila ke liye 15 se 70 ng/dL normal range hai. ICMR study ke anusaar Indian reproductive age women mein roughly 6 se 68 ng/dL hoti hai. Postmenopausal mein 7 se 40 ng/dL normal hai.',
    },
    {
      _key: 'faq4',
      question: 'Testosterone test ke liye khali pet rehna zaroori hai kya?',
      answer: 'Strictly nahi, lekin subah 7 se 10 AM ke beech khali pet test karna best hai. Khaana khaane ke baad, khaaskar carbs aur fat, level temporarily kam ho sakta hai jo result mislead kar sakta hai.',
    },
    {
      _key: 'faq5',
      question: 'Testosterone test ka best time kya hai?',
      answer: 'Subah 7 se 10 AM ke beech. Isi waqt testosterone peak pe hota hai. Young men ke liye morning timing bahut important hai. Dopahar mein test karwaaya toh value 20-34% kam aa sakti hai jo misleading result deta hai.',
    },
    {
      _key: 'faq6',
      question: 'Testosterone test mein kya hota hai, painful hai kya?',
      answer: 'Ek chhoti needle se vein se blood draw kiya jaata hai. Bilkul simple process, 5 minute se kam lagta hai. Thoda sa chubhan feel hoga, sirf 2-3 second. Koi darr ki baat nahi.',
    },
    {
      _key: 'faq7',
      question: 'Testosterone high hone se kya hota hai mahila mein?',
      answer: 'High testosterone mahila mein PCOS ka common sign hai. Saath mein acne, irregular periods, face ya body pe zyada hair (hirsutism) aur mood changes ho sakte hain. Causes mein PCOS, adrenal issue ya kuch medicines ho sakti hain. Doctor se milein.',
    },
    {
      _key: 'faq8',
      question: 'Testosterone low hone ke symptoms kya hain mard mein?',
      answer: 'Libido yaani sex drive kam hona, thakaan, muscle loss, weight gain, mood swings, concentration nahi hona aur erection mein problem ye possible symptoms hain. Ye sab symptoms aur low report saath mein hon toh doctor se milein.',
    },
    {
      _key: 'faq9',
      question: 'Testosterone test ki report kitne time mein aati hai?',
      answer: 'Adhiktar NABL-accredited labs same day ya next working day mein result deti hain. 6-24 ghante normal turnaround time hai. Online report app ya WhatsApp pe bhi milti hai.',
    },
    {
      _key: 'faq10',
      question: 'Testosterone test aur free testosterone test mein kya fark hai?',
      answer: 'Total testosterone sabhi testosterone measure karta hai, bound aur free dono. Free testosterone sirf active unbound form measure karta hai. Doctor pehle total likhte hain. Agar borderline aaye toh free testosterone bhi likhte hain.',
    },
    {
      _key: 'faq11',
      question: 'Testosterone test kitne baar repeat karein?',
      answer: 'Pehli baar low aayi toh 2-4 hafte baad morning mein dobaara karwayen. Treatment pe ho toh doctor ke schedule ke hisaab se, usually 3-6 mahine mein. Normal result aur koi symptoms nahi toh doctor bole tabhi repeat.',
    },
    {
      _key: 'faq12',
      question: 'Kya testosterone test ghar pe ho sakta hai?',
      answer: 'Haan. Lal PathLabs, Metropolis aur Aster sab home collection service dete hain. Phlebotomist aata hai, sample leta hai. Result online ya WhatsApp pe aata hai.',
    },
    {
      _key: 'faq13',
      question: 'Testosterone test kyu karte hain females mein?',
      answer: 'Mahila mein PCOS, hirsutism yaani zyada body hair, infertility, irregular periods ya acne ke investigation mein ye test likhte hain. India mein PCOS bahut common hai isliye women mein ye test kaafi frequently hota hai.',
    },
    {
      _key: 'faq14',
      question: 'Kya testosterone test se fertility pata chalti hai?',
      answer: 'Partly haan. Low testosterone mard mein sperm production affect kar sakta hai aur high testosterone mahila mein PCOS se infertility cause kar sakta hai. Lekin fertility ka poora picture aur tests se milta hai jaise Semen Analysis, LH, FSH aur Prolactin saath mein.',
    },
    {
      _key: 'faq15',
      question: 'Testosterone test blood se hota hai ya urine se?',
      answer: 'Standard testosterone test blood yaani serum se hota hai. Urine ya saliva tests kuch specialized situations mein hote hain lekin India mein routine diagnosis ke liye blood test hi use hota hai. Ye zyada accurate hai.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(testosterone)
    console.log('✅ Testosterone Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
