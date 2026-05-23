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

const tsh = {
  _id: 'labtest-thyroid-profile-tsh',
  _type: 'labTest',
  name: 'Thyroid Profile (T3, T4, TSH)',
  fullForm: 'Thyroid Function Test (TFT)',
  hindiName: 'Thyroid Jaanch / Thyroid Profile',
  slug: { _type: 'slug', current: 'thyroid-profile-tsh' },
  category: 'Hormone',
  metaTitle: 'TSH Thyroid Profile Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'TSH (Thyroid Profile) ka normal range, T3 T4 TSH matlab, high/low kya hota hai — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Thyroid Profile ya Thyroid Function Test (TFT) ek blood test hai jo aapki thyroid gland ka kaam kitna sahi chal raha hai — yeh check karta hai. Isme teen main hormones measure hote hain: T3 (Triiodothyronine — teen iodine wala hormone), T4 (Thyroxine — char iodine wala hormone), aur TSH (Thyroid Stimulating Hormone — jo pituitary gland se nikalta hai aur thyroid ko "batata hai" ki kitna kaam karo).

Thyroid ek chhoti si butterfly ke aakaar ki gland hai jo aapke gale mein hoti hai. Lagti chhoti hai, lekin kaam bahut bada hai — yeh aapke har organ ko affect karti hai: dil ki dhadkan, vajan, baal, skin, neend, mood, aur energy — sab kuch isi ek gland pe depend karta hai.

Ek simple analogy: TSH ek "boss" ki tarah hai jo thyroid ko order deta hai. Agar TSH zyada hai, matlab thyroid mein kuch kami hai aur boss baar baar signal bhej raha hai. Agar TSH kam hai, matlab thyroid zyada kaam kar rahi hai aur boss ko signal dene ki zarurat nahi.

Ye test India mein bahut common hai — especially women mein thyroid problems zyada hoti hain, aur is test se sahi diagnosis possible hai.`,

  whenToTest: [
    'Bina kisi reason ke vajan badh raha ho — Hypothyroidism ka common lakshan',
    'Bahut thakaan, kamzori, neend zyada aana — thyroid underactive ho sakta hai',
    'Thand zyada lagna, baaki logo se zyada — cold intolerance hypothyroidism mein common hai',
    'Baal zyada jhad rahe hon ya skin bahut dry ho — thyroid hormones baal aur skin affect karte hain',
    'Periods irregular ho gaye hon — thyroid hormones menstrual cycle affect karte hain',
    'Dil ki dhadkan tez ya irregular ho (palpitations) — hyperthyroidism ka sign ho sakta hai',
    'Bina diet change kiye vajan achanak ghata ho — hyperthyroidism mein common',
    'Haath kaanpna (tremors) ya zyada pasina aana — overactive thyroid ke signs',
    'Pregnant hain ya pregnancy plan kar rahi hain — thyroid test zaroori hai',
    'Family mein thyroid ki history ho — genetic risk hota hai',
    'PCOD / PCOS diagnosed ho — hormonal link hai, thyroid check zaroori',
    'Diabetes ya koi autoimmune bimari ho — associated risk',
    '35 saal se zyada umra mein routine checkup ke liye',
    'Thyroid ki dawai chal rahi ho — dose monitoring ke liye',
  ],

  whatItDetects: `Thyroid Profile test in conditions ka pata lagata hai: Hypothyroidism (thyroid ka underactive hona), Hyperthyroidism (thyroid ka overactive hona), Hashimoto's Thyroiditis (autoimmune condition), thyroid nodules ya goitre ka hormonal effect, aur pregnancy mein thyroid problems jo baby ke brain development ko affect karti hain.

TSH sabse sensitive indicator hai — T3/T4 ke normal hone se pehle hi TSH mein changes aane lagte hain. Isliye TSH ko primary marker maana jaata hai. Agar TSH abnormal aaye toh T3/T4 se confirm kiya jaata hai ki exact problem kya hai.`,

  normalRanges: [
    // TSH values
    { _key: 'tsh-adult-male',    parameter: 'TSH — Adults (Male)',           normalRange: '0.4 – 4.0',   unit: 'mIU/L',  highBrief: 'Hypothyroidism',      lowBrief: 'Hyperthyroidism' },
    { _key: 'tsh-adult-female',  parameter: 'TSH — Adults (Female)',         normalRange: '0.4 – 4.0',   unit: 'mIU/L',  highBrief: 'Hypothyroidism',      lowBrief: 'Hyperthyroidism' },
    { _key: 'tsh-age-18-20',     parameter: 'TSH — Age 18–20 years',         normalRange: '0.70 – 6.40', unit: 'mIU/L',  highBrief: 'Hypothyroidism',      lowBrief: 'Hyperthyroidism' },
    { _key: 'tsh-age-21-60',     parameter: 'TSH — Age 21–60 years',         normalRange: '0.40 – 5.50', unit: 'mIU/L',  highBrief: 'Hypothyroidism',      lowBrief: 'Hyperthyroidism' },
    { _key: 'tsh-preg-1',        parameter: 'TSH — Pregnancy (1st Trimester)',  normalRange: '0.19 – 4.34', unit: 'mIU/L', highBrief: 'Hypothyroid risk',  lowBrief: 'HCG effect — normal' },
    { _key: 'tsh-preg-2',        parameter: 'TSH — Pregnancy (2nd Trimester)', normalRange: '0.46 – 4.57', unit: 'mIU/L', highBrief: 'Monitor closely',   lowBrief: 'Recheck zaroori' },
    { _key: 'tsh-preg-3',        parameter: 'TSH — Pregnancy (3rd Trimester)', normalRange: '0.61 – 4.62', unit: 'mIU/L', highBrief: 'Treatment needed',  lowBrief: 'Recheck zaroori' },
    { _key: 'tsh-newborn',       parameter: 'TSH — Newborn (1-4 days)',      normalRange: '1.0 – 39.0',  unit: 'mIU/L',  highBrief: 'Normal in newborn',   lowBrief: 'Recheck' },
    { _key: 'tsh-children',      parameter: 'TSH — Children (1–6 years)',    normalRange: '0.7 – 5.97',  unit: 'mIU/L',  highBrief: 'Possible Hypo',       lowBrief: 'Possible Hyper' },
    { _key: 'tsh-older',         parameter: 'TSH — Older Adults (>60 yrs)', normalRange: '0.4 – 6.0',   unit: 'mIU/L',  highBrief: 'Hypo risk',           lowBrief: 'Hyper risk' },
    // T3 values
    { _key: 't3-adults',         parameter: 'T3 (Total) — Adults',           normalRange: '80 – 200',    unit: 'ng/dL',  highBrief: 'Hyperthyroidism',     lowBrief: 'Hypothyroidism' },
    { _key: 't3-preg-1',         parameter: 'T3 — Pregnancy (1st Trimester)', normalRange: '83.9 – 196.6', unit: 'ng/dL', highBrief: 'Monitor',            lowBrief: 'Low thyroid' },
    { _key: 't3-preg-2',         parameter: 'T3 — Pregnancy (2nd Trimester)', normalRange: '86.1 – 217.4', unit: 'ng/dL', highBrief: 'Monitor',            lowBrief: 'Low thyroid' },
    { _key: 't3-preg-3',         parameter: 'T3 — Pregnancy (3rd Trimester)', normalRange: '79.9 – 186.0', unit: 'ng/dL', highBrief: 'Monitor',            lowBrief: 'Low thyroid' },
    // T4 values
    { _key: 't4-adults',         parameter: 'T4 (Total) — Adults',           normalRange: '5.0 – 12.0',  unit: 'µg/dL', highBrief: 'Hyperthyroidism',     lowBrief: 'Hypothyroidism' },
    { _key: 't4-preg-1',         parameter: 'T4 — Pregnancy (1st Trimester)', normalRange: '4.4 – 11.5', unit: 'µg/dL',  highBrief: 'Monitor',             lowBrief: 'Low thyroid' },
    { _key: 't4-preg-2',         parameter: 'T4 — Pregnancy (2nd Trimester)', normalRange: '4.9 – 12.2', unit: 'µg/dL',  highBrief: 'Monitor',             lowBrief: 'Low thyroid' },
    { _key: 't4-preg-3',         parameter: 'T4 — Pregnancy (3rd Trimester)', normalRange: '5.1 – 13.2', unit: 'µg/dL',  highBrief: 'Monitor',             lowBrief: 'Low thyroid' },
    // Free T4
    { _key: 'ft4-adults',        parameter: 'Free T4 (FT4) — Adults',        normalRange: '0.93 – 1.7',  unit: 'ng/dL',  highBrief: 'Hyperthyroidism',     lowBrief: 'Hypothyroidism' },
    { _key: 'ft4-female',        parameter: 'Free T4 — Non-pregnant Women',  normalRange: '0.83 – 1.34', unit: 'ng/dL',  highBrief: 'Hyperthyroidism',     lowBrief: 'Hypothyroidism' },
    { _key: 'ft4-preg',          parameter: 'Free T4 — Pregnancy',           normalRange: '0.87 – 1.60', unit: 'ng/dL',  highBrief: 'Monitor',             lowBrief: 'Treatment zaroor' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'TSH 1st Trimester: 0.19–4.34 | 2nd Trimester: 0.46–4.57 | 3rd Trimester: 0.61–4.62 mIU/L',
    riskNote: `Pregnancy mein thyroid hormones ka seedha asar baby ke brain development pe padta hai — especially pehle 12 hafte mein. HCG hormone (jo pregnancy mein badhta hai) thyroid ko temporarily stimulate karta hai, isliye pehli trimester mein TSH thoda kam ho sakti hai — yeh normal hai. T4 aur T3 ki demand badhti hai kyunki ab do logon ke liye kaam ho raha hai.

Agar maa ka thyroid zyada ya kam active ho aur pata na chale, to baby ki mental aur physical growth pe asar pad sakta hai. Agar aap already thyroid ki dawai le rahi hain — pregnancy mein dose adjust karni pad sakti hai.`,
    whenDoctor: 'Pehli prenatal visit pe (8-10 hafte mein), family mein thyroid history ho toh turant, PCOD diagnosed mahilaon mein pregnancy se pehle mandatory check, aur agar pehle miscarriage hua ho.',
  },

  highMeans: [
    'Hypothyroidism — thyroid gland underactive hai, sabse common karan especially women mein',
    'Hashimoto\'s Thyroiditis — autoimmune condition jisme body khud apni thyroid ko attack karti hai',
    'Iodine ki kami — India ke kuch inland regions mein common',
    'Thyroid surgery ke baad — gland remove hone ke baad TSH naturally high hoti hai',
    'Radiation treatment ke baad thyroid cells damage hone se',
    'Certain medicines — jaise Lithium, Amiodarone, kuch heart medicines',
    'Pregnancy mein (2nd/3rd trimester) agar TSH 4.5 se zyada ho — doctor se milein',
    'Pituitary gland ka zyada TSH banana — rare condition hai',
    'Subclinical Hypothyroidism — TSH thoda high (4–10 range), T3/T4 normal — aksar monitor kiya jaata hai',
  ],
  highReassurance: 'High TSH ka matlab sirf yeh hai ki thyroid ko thodi madad chahiye. Daily ek chhoti tablet (thyroxine) se yeh bilkul normal ho jaata hai. Crores log thyroid ki dawai lete hain aur perfectly normal zindagi jeete hain. Ghabrao mat — doctor se consult zaroor karein.',

  lowMeans: [
    'Hyperthyroidism (Overactive Thyroid) — thyroid zyada hormones bana rahi hai',
    'Graves\' Disease — ek autoimmune condition, sabse common hyperthyroid ka karan',
    'Thyroid nodules (hot nodules) — gland mein ganthein zyada hormones bana rahi hain',
    'Thyroiditis — thyroid inflammation se temporary hormone release, TSH temporarily low',
    'Zyada thyroid ki dawai lene se (over-medication) — dose adjust karni hogi',
    'Pregnancy ki pehli trimester mein temporarily low — yeh normal hai (HCG ka effect)',
    'Pituitary tumor — bahut rare hai',
  ],
  lowConcern: 'Agar TSH 0.1 se kam ho, dil ki dhadkan tez ho, haath kaanpein, ya bahut zyada weight ghate — toh doctor se milna zaroori hai. Mild TSH changes kabhi kabhi temporary hote hain — doctor ek reading se diagnosis nahi karte, alag time pe repeat hota hai.',

  redFlags: [
    'TSH 10 mIU/L se zyada ho — Hypothyroidism confirm karna zaroori',
    'Pregnant hain aur TSH 4.0 se zyada ho (1st trimester) — turant doctor dikhao',
    'Pregnant hain aur TSH 4.5 se zyada ho (2nd/3rd trimester) — treatment zaroor',
    'Bahut zyada thakaan + chehra soojan + awaaz bhaari ho gayi ho — serious hypothyroid sign',
    'TSH 0.1 se kam ho — Hyperthyroidism serious level pe',
    'Dil ki dhadkan 100+ per minute ho + haath kaanpein — thyroid storm ka risk',
    'Chest mein dard ya breathing mein problem ho — emergency',
    'Gardan mein visible sujan (goitre) bade size mein ho',
  ],
  emergencyLevel: 'TSH 0.1 se kam + tez heartbeat + tremors — turant doctor ke paas jaayein. TSH 10+ mein agar pregnant hain ya symptoms bahut severe hain — same day consultation zaroori.',
  selfTreatWarning: 'Koi bhi thyroid ki dawai doctor ke prescription ke bina lena dangerous ho sakta hai. Dose galat hone se problem aur badh sakti hai. Report dekhkar khud treatment mat shuru karo — doctor se milein.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Subah ka waqt prefer kiya jaata hai — especially agar aap regular monitoring pe hain — kyunki TSH levels subah thodi higher hoti hain aur consistency ke liye same time pe test repeat karna helpful hota hai. Lekin strictly mandatory nahi.',
    whatToEat: 'Regular khana khake bhi test de sakte hain — khaana TSH values ko directly affect nahi karta. Pani peene se koi problem nahi.',
    whatToAvoid: 'Biotin supplements (Vitamin B7, baal-nail supplements) — test se 2-3 din pehle band karein. Biotin TSH results mein interference karta hai — yeh bahut important hai. Thyroid ki dawai (Levothyroxine) ke baare mein doctor se specifically poochein — test ke din kab leni hai.',
    medicineNote: 'Thyroid ki dawai band mat karein bina doctor ke. Agar Biotin (Vitamin B7/Hair supplement) lete hain toh 2-3 din pehle band karein. Baaki sab regular medicines le sakte hain — doctor ko batayein kaunsi medicines chal rahi hain.',
    accuracyNote: 'Agar thyroid monitor kar rahe hain regular — try karein har baar same lab se, same time pe test karein — taaki comparison sahi ho. Alag labs ki reference ranges thodi alag hoti hain.',
  },

  sampleInfo: {
    sampleType: 'Blood (Venous — haath ke kuhni ke andar se, vein se)',
    sampleAmount: '3-5 mL — ek chhoti tube bhar',
    reportTime: '6 se 24 ghante — same day ya next day milti hai',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth-1',
      myth: 'Thyroid test ke liye khali pet rehna zaroori hai',
      truth: 'Yeh sabse bada misconception hai — Thyroid Profile (T3, T4, TSH) ke liye fasting ZARURI NAHI hai. Aap normally khaake bhi yeh test de sakte hain. Sirf fasting glucose ya lipid profile ke saath combo package ho, tab pehle test ke liye khali pet rehna ho sakta hai — aur tab bhi thyroid values pe fasting ka asar nahi padta.',
    },
    {
      _key: 'myth-2',
      myth: 'TSH thoda high matlab pakka hypothyroidism hai aur zindagi bhar dawai leni padegi',
      truth: 'Subclinical hypothyroidism mein TSH thoda high (4–10 range) hota hai par T3/T4 normal rehte hain. Har case mein immediately dawai ki zarurat nahi hoti. Doctor total picture dekhte hain — symptoms, age, pregnancy status — phir decision lete hain. Kabhi kabhi sirf monitor kiya jaata hai.',
    },
    {
      _key: 'myth-3',
      myth: 'Thyroid test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle — 2-3 second ka process. Regular blood test jaisa hi hai. Most patients barely feel it. Ek baar needle lagne ke baad kuch feel nahi hota.',
    },
    {
      _key: 'myth-4',
      myth: 'Agar TSH normal hai toh thyroid bilkul theek hai',
      truth: 'TSH akela puri picture nahi deta. Hashimoto\'s thyroiditis mein TSH initially normal reh sakta hai par Anti-TPO antibodies positive hote hain. Agar symptoms hain to doctor Anti-TPO test bhi kara sakte hain — jo autoimmune thyroid detect karta hai.',
    },
    {
      _key: 'myth-5',
      myth: 'Thyroid ki dawai lene ke baad regular test ki zarurat nahi',
      truth: 'Thyroid ki dawai shuru karne ke baad ZYADA regular monitoring zaroori ho jaati hai — har 6-8 hafte TSH check hota hai jabtak dose stable na ho jaaye. Phir 6 mahine ya 1 saal mein ek baar. Monitoring kabhi band nahi hoti completely.',
    },
    {
      _key: 'myth-6',
      myth: 'Thyroid high hone pe iodine wala namak zyada khana chahiye',
      truth: 'Yeh bilkul sahi nahi hai. Zyada iodine kuch cases mein thyroid ko aur bigad sakta hai — especially Hashimoto\'s mein. Diet changes doctor ki salah ke baad hi karein. Iodized namak normal matra mein use kar sakte hain lekin supplements bilkul nahi.',
    },
    {
      _key: 'myth-7',
      myth: 'Agar T3, T4 normal hain, toh TSH ki value nahi dekhni chahiye',
      truth: 'TSH sabse sensitive indicator hai — T3/T4 ke normal hone se pehle hi TSH mein changes aane lagte hain. Isliye TSH ko primary marker maana jaata hai. T3/T4 normal hone ke bawajood abnormal TSH clinically important hoti hai.',
    },
  ],

  comparisons: [
    {
      _key: 'vs-tsh-only',
      comparedTest: 'TSH Only Test',
      comparedTestSlug: 'tsh-only',
      differencePoints: [
        'TSH Only sirf ek hormone (Thyroid Stimulating Hormone) check karta hai — basic screening ya monitoring ke liye. Thyroid Profile mein TSH + T3 + T4 teeno measure hote hain',
        'Pehli baar diagnosis ke liye: Thyroid Profile better hai — complete picture milti hai. Regular monitoring mein dawai pe: akela TSH kaafi hota hai',
        'TSH Only mein report same day milti hai, cost bhi kam. Thyroid Profile mein thoda zyada time aur cost ho sakti hai',
        'Agar TSH abnormal aaye akele test mein — follow-up mein full profile (T3/T4) zaroori ho jaata hai',
        'Doctor ki recommendation pe decide karein — dono tests ke apne specific use cases hain',
      ],
    },
    {
      _key: 'vs-anti-tpo',
      comparedTest: 'Anti-TPO Test',
      comparedTestSlug: 'anti-tpo',
      differencePoints: [
        'Thyroid Profile (TSH/T3/T4) batata hai ki thyroid kitna kaam kar raha hai — hormonal function check. Anti-TPO batata hai ki autoimmune attack hai ya nahi',
        'Hashimoto\'s ya Graves\' Disease suspect ho — Anti-TPO kiya jaata hai. Routine thyroid check ke liye — Thyroid Profile kiya jaata hai',
        'TSH/T3/T4 normal ho sakta hai early autoimmune disease mein — lekin Anti-TPO positive hoga. Isliye dono tests alag information dete hain',
        'Doctor aksar dono saath likhta hai jab autoimmune thyroid condition ka strong doubt ho',
      ],
    },
    {
      _key: 'vs-ft4-vs-t4',
      comparedTest: 'Free T4 (FT4) vs Total T4',
      comparedTestSlug: 'free-t4',
      differencePoints: [
        'Total T4 mein protein se bound hormone bhi count hota hai — jo actually kaam nahi karta. Free T4 sirf active, unbound T4 measure karta hai jo body use karti hai',
        'Free T4 (FT4) zyada accurate indicator hai — protein levels se affect nahi hota. Total T4 naturally pregnancy ya kuch medicines mein badh jaata hai misleadingly',
        'Modern labs zyada FT4 use karti hain — zyada reliable result deta hai',
        'Pregnancy mein specifically FT4 better indicator hai — Total T4 values naturally badhne se misleading ho sakta hai',
      ],
    },
  ],

  repeatInfo: `Pehli baar abnormal report aayi:
Doctor usually 6-8 hafte baad repeat karate hain — ek reading se bade conclusion nahi nikalte. Confirm karne ke baad hi treatment start hoti hai.

Dawai shuru ki hai (Levothyroxine ya Carbimazole):
Pehle 4-6 mahine: har 6-8 hafte TSH check — dose adjust hoti hai. Dose stable hone ke baad: har 6 mahine. Annual routine monitoring bhi zaroori.

Pregnancy mein:
Har trimester mein mandatory test. Pehli trimester mein: 4-6 hafte mein repeat. Agar thyroid ki dawai chal rahi ho — pregnancy mein dose adjust karana pad sakta hai.

Normal report aayi:
35 saal se zyada adults: saal mein ek baar routine. Family history ho: saal mein ek baar. Young, koi symptoms nahi: 2-3 saal mein ek baar kaafi.

Thyroid surgery ke baad:
6-8 hafte mein check — aur lifetime monitoring zaroori hoti hai.`,

  linkedDiseases: [
    { _key: 'ld-hypothyroidism', diseaseName: 'Hypothyroidism (Underactive Thyroid)', diseaseSlug: 'hypothyroidism',  isAvailable: false },
    { _key: 'ld-hyperthyroidism',diseaseName: 'Hyperthyroidism (Overactive Thyroid)', diseaseSlug: 'hyperthyroidism', isAvailable: false },
    { _key: 'ld-thyroid',        diseaseName: 'Thyroid (Nodules, Goitre)',             diseaseSlug: 'thyroid',         isAvailable: true  },
    { _key: 'ld-pcod',           diseaseName: 'PCOD / PCOS',                           diseaseSlug: 'pcod',            isAvailable: true  },
    { _key: 'ld-depression',     diseaseName: 'Depression (Hypothyroid se linked)',     diseaseSlug: 'depression',      isAvailable: true  },
    { _key: 'ld-anaemia',        diseaseName: 'Anaemia (Hypothyroidism ke saath)',      diseaseSlug: 'anaemia',         isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt-anti-tpo',      testName: 'Anti-TPO Test',              testSlug: 'anti-tpo',           isAvailable: false },
    { _key: 'rt-cbc',           testName: 'CBC Test',                   testSlug: 'cbc',                isAvailable: true  },
    { _key: 'rt-esr',           testName: 'ESR Test',                   testSlug: 'esr',                isAvailable: true  },
    { _key: 'rt-vitamin-d',     testName: 'Vitamin D Test',             testSlug: 'vitamin-d',          isAvailable: false },
    { _key: 'rt-ft3',           testName: 'Free T3 (FT3)',              testSlug: 'free-t3',            isAvailable: false },
    { _key: 'rt-ft4',           testName: 'Free T4 (FT4)',              testSlug: 'free-t4',            isAvailable: false },
    { _key: 'rt-anti-tgab',     testName: 'Anti-TgAb Test',            testSlug: 'anti-tgab',          isAvailable: false },
    { _key: 'rt-tsh-ultra',     testName: 'TSH Ultrasensitive Test',   testSlug: 'tsh-ultrasensitive', isAvailable: false },
  ],

  homeopathyAngle: `Ghabrao mat — ek abnormal report sirf ek starting point hai, final verdict nahi.

Agar thyroid baar baar abnormal aa raha hai, ya conventional treatment mein dose adjust hota rehta hai, toh root cause dhundhna zaroori hai. Conventional medicine hormonal imbalance ko supplement se balance karti hai — jo zaroori bhi hai — lekin body iske kyun respond nahi kar rahi, yeh bhi dekhna zaroori hai.

Homeopathy is perspective pe kaam karti hai — individual ki poori health history, lifestyle, stress levels, aur constitutional symptoms dekhkar treatment di jaati hai. Side effects practically na ke barabar hote hain. Baar baar relapse ho, fatigue thik na ho, ya treatment ke bawajood feel good na ho raha ho — aisi situations mein homeopathy complementary support de sakti hai.

Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    { _key: 'faq-1',  question: 'Thyroid Profile aur TSH Test mein kya fark hai?', answer: 'TSH-only test sirf ek hormone (Thyroid Stimulating Hormone) check karta hai — yeh basic screening hai. Thyroid Profile mein TSH ke saath T3 aur T4 bhi measure hote hain — yeh complete picture deta hai. Doctor jab full diagnosis karna chahein — especially pehli baar — tab Thyroid Profile likhte hain. Regular monitoring ke liye akela TSH kaafi hota hai.' },
    { _key: 'faq-2',  question: 'Thyroid profile test ka normal range kya hota hai?', answer: 'Adults mein: TSH 0.4–4.0 mIU/L, Total T3 80–200 ng/dL, Total T4 5.0–12.0 µg/dL, Free T4 0.93–1.7 ng/dL. Pregnancy mein TSH alag hoti hai — 1st trimester 0.19–4.34, 2nd trimester 0.46–4.57, 3rd trimester 0.61–4.62 mIU/L. Children aur older adults mein bhi ranges thodi alag hoti hain — apni report mein diye reference values se compare karein aur doctor se salah lein.' },
    { _key: 'faq-3',  question: 'TSH high matlab kya hota hai?', answer: 'TSH high hone ka matlab hai thyroid gland underactive hai (Hypothyroidism) — pituitary zyada signal de rahi hai par thyroid poora respond nahi kar raha. Possible causes mein Hashimoto\'s thyroiditis, iodine deficiency, ya thyroid gland ki natural weakness ho sakti hai. Ghabrao mat — yeh easily treatable condition hai. Daily ek chhoti tablet se crores log normal life jee rahe hain.' },
    { _key: 'faq-4',  question: 'TSH low hone ka matlab kya hai?', answer: 'TSH low matlab thyroid overactive hai (Hyperthyroidism) — zyada hormones bana rahi hai. Graves\' Disease, thyroid nodules, ya zyada iodine intake possible causes hain. Agar TSH bahut low ho (0.1 se kam) toh doctor se milna zaroori hai. Pregnancy ki pehli trimester mein TSH thoda low hona normal hai — HCG ka natural effect hai.' },
    { _key: 'faq-5',  question: 'Kya thyroid test ke liye khali pet rehna zaroori hai?', answer: 'NAHI — thyroid profile test ke liye fasting ZARURI NAHI. Aap normally khaake bhi yeh test de sakte hain. Yeh ek bahut common misconception hai. Sirf agar combo package mein lipid profile ya blood sugar bhi ho tab fasting relevant hoti hai — aur tab bhi thyroid values pe fasting ka koi asar nahi padta.' },
    { _key: 'faq-6',  question: 'T3 T4 TSH normal range Hindi mein batao', answer: 'TSH ka normal range 0.4 se 4.0 mIU/L hota hai. T3 ka 80 se 200 ng/dL, aur T4 ka 5 se 12 µg/dL. Pregnancy mein TSH thoda alag hoti hai — pehli trimester mein 0.19 se 4.34, doosri mein 0.46 se 4.57, teesri mein 0.61 se 4.62 mIU/L tak normal maana jaata hai. Free T4 adults mein 0.93 se 1.7 ng/dL normal hota hai.' },
    { _key: 'faq-7',  question: 'Pregnancy mein thyroid test kab karna chahiye?', answer: 'Pregnancy ki pehli prenatal visit pe hi thyroid test karna chahiye — ideally 8-10 hafte mein. Agar family mein thyroid history ho, PCOD diagnosed ho, ya pehle miscarriage hua ho — tab aur bhi pehle test karo. Pregnancy mein TSH ki range adults se alag hoti hai aur trimester-specific interpretation zaroori hai. Baby ke brain development ke liye ye test bahut important hai.' },
    { _key: 'faq-8',  question: 'Kya TSH high aane ka matlab cancer ho sakta hai?', answer: 'Akele TSH high hone se cancer diagnose nahi hota. High TSH ka sabse common kaaran Hypothyroidism ya Hashimoto\'s thyroiditis hai — jo cancer nahi, balki manageable conditions hain. Thyroid cancer ke liye alag tests hote hain — Thyroglobulin, ultrasound, FNA biopsy. Please self-diagnose mat karein — doctor se milein.' },
    { _key: 'faq-9',  question: 'TSH ka normal range age ke saath badal jaata hai kya?', answer: 'Haan. Newborns mein TSH 1-39 mIU/L tak normal hota hai. 18-20 saal ke young adults mein 0.70-6.40, 21-60 mein 0.40-5.50, aur 60 saal ke baad thoda higher range bhi acceptable ho sakta hai. Isliye always report mein diye reference range se compare karein — sirf "4 se zyada" dekh ke ghabrao mat, context dekhna zaroori hai.' },
    { _key: 'faq-10', question: 'FT3, FT4 aur Total T3, T4 mein kya fark hai?', answer: 'Total T3/T4 mein protein se bound hormone bhi count hota hai — jo actually kaam nahi karta. Free T3 (FT3) aur Free T4 (FT4) sirf "unbound" active hormone measure karta hai jo body use karti hai. Modern labs zyada Free values use karti hain — yeh zyada accurate indicator hai, especially pregnancy mein jahan Total T4 naturally badhne se misleading ho sakta hai.' },
    { _key: 'faq-11', question: 'TSH ki dawai kab tak leni padti hai?', answer: 'Yeh depend karta hai cause pe. Hashimoto\'s ya permanent hypothyroidism mein — lifetime medication typically zaroori hoti hai. Subacute thyroiditis ya temporary causes mein — kuch mahine ki dawai se theek ho jaata hai. Subclinical hypothyroidism mein kabhi kabhi sirf monitor kiya jaata hai bina dawai ke. Ye sirf doctor decide kar sakte hain aapki situation ke hisaab se.' },
    { _key: 'faq-12', question: 'Kya thyroid test ghar pe ho sakta hai?', answer: 'Home collection available hai — Dr Lal PathLabs, Metropolis, Thyrocare sab ghar aate hain aur blood sample lete hain. Lekin self-testing kits (ghar pe prick test) abhi India mein reliable nahi hain aur doctor-recommended nahi hain. Lab test hi accurate hota hai. Online ya app se home collection book kar sakte hain.' },
    { _key: 'faq-13', question: 'Kya khane se thyroid ka result affect hota hai?', answer: 'Regular food aur paani se TSH test affect nahi hota. Lekin Biotin supplements (Vitamin B7) agar le rahe hain — test se 2-3 din pehle band karein kyunki yeh TSH reading mein interference deta hai. Thyroid ki dawai (Levothyroxine) ko test ke din kab leni hai — doctor se poochein, different cases mein different advice hoti hai.' },
    { _key: 'faq-14', question: 'PCOD ke saath thyroid test kyun karna chahiye?', answer: 'PCOD aur thyroid dono hormonal system hain jo ek doosre ko affect karte hain. PCOD patients mein hypothyroidism ki rate zyada hoti hai. Unke symptoms bhi overlap karte hain — irregular periods, weight gain, fatigue. Agar thyroid miss ho jaaye toh PCOD treatment bhi poori tarah kaam nahi karta. Isliye PCOD diagnosis ke saath thyroid test mandatory maana jaata hai.' },
    { _key: 'faq-15', question: 'Thyroid normal hai phir bhi thakaan aur weight gain kyun hai?', answer: 'TSH normal hone ka matlab yeh nahi ki thyroid se related sab kuch theek hai. Anti-TPO antibodies elevated ho sakti hain (Hashimoto\'s), ya T3 conversion problem ho sakti hai. Aur kabhi kabhi Vitamin D deficiency, anemia, ya adrenal issues bhi similar symptoms dete hain. Complete evaluation ke liye doctor se milein — sirf TSH normal dikhne se case close nahi hota.' },
    { _key: 'faq-16', question: 'Kya thyroid test ke results ek lab se doosri lab mein alag aate hain?', answer: 'Haan, thoda alag aa sakte hain — alag machine, alag reagents, alag reference ranges. Isliye agar regular monitoring kar rahe hain toh ek hi lab se consistently test karo. Report mein har lab apna reference range deti hai — usi se compare karo, na ki internet pe padhe general ranges se.' },
    { _key: 'faq-17', question: 'Kya stress se thyroid test result affect hota hai?', answer: 'Haan, severe stress TSH mein thoda variation la sakta hai — lekin usually clinically significant nahi hota. Zyada important hai ki test consistently same time pe, same lab se, aur agar dawai chal rahi ho toh same schedule follow karke karo taaki comparison accurate rahe.' },
    { _key: 'faq-18', question: 'Children mein thyroid test kab karna chahiye?', answer: 'India mein newborn screening (TSH test) birth ke 2-3 din mein hoti hai — Congenital Hypothyroidism detect karne ke liye jo bahut rare but serious hoti hai. Bade bacchon mein agar growth slow ho, school performance giri ho, weight badh raha ho bina reason ke, ya fatigue zyada ho — tab doctor thyroid recommend karte hain.' },
    { _key: 'faq-19', question: 'Agar T3 T4 normal hain aur sirf TSH thoda high hai — kya karna chahiye?', answer: 'Ise "Subclinical Hypothyroidism" kehte hain. Har case mein turant dawai nahi di jaati. Doctor aapki symptoms, age, pregnancy plans, aur TSH kitni high hai yeh dekhkar decide karte hain. Kuch cases mein sirf monitor kiya jaata hai, kuch mein treatment shuru hoti hai. Khud koi conclusion mat nikalein — doctor se salah lein.' },
    { _key: 'faq-20', question: 'Thyroid test baar baar kab karwana chahiye?', answer: 'Normal result, koi symptoms nahi: 35+ age mein saal mein ek baar. Thyroid ki dawai chal rahi ho: pehle saal har 6-8 hafte, phir 6 mahine mein ek baar. Pregnancy mein: har trimester mandatory. Agar koi value abnormal aayi: 6-8 hafte baad repeat karo doctor ki salah pe. Family history ho: saal mein ek baar routine.' },
  ],
}

async function main() {
  console.log('Seeding Thyroid Profile (TSH) Lab Test...')
  try {
    const result = await client.createOrReplace(tsh)
    console.log(`✅ Thyroid Profile seeded: ${result._id}`)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
