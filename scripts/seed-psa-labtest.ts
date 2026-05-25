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

const psa = {
  _id: 'labtest-psa',
  _type: 'labTest',
  name: 'PSA Test (Prostate Specific Antigen)',
  fullForm: 'Prostate Specific Antigen Test',
  hindiName: 'Prostate Jaanch (PSA Test)',
  slug: { _type: 'slug', current: 'psa-test' },
  category: 'Hormone',
  metaTitle: 'PSA Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'PSA (Prostate Specific Antigen) test ka normal range, high/low matlab, kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `PSA Test ya Prostate Specific Antigen Test ek blood test hai jo sirf purushon (men) mein prostate gland ki health check karne ke liye kiya jata hai. Is test mein khoon mein PSA protein ka level measure kiya jata hai — yahi protein cancer ke early detection mein sabse zaroori role nibhati hai.

Prostate gland — jo bladder ke thoda neeche hoti hai — ek chhoti si walnut ke aakaar ki gland hai. Ye gland ek protein banati hai jise PSA kehte hain. Thoda sa PSA khoon mein aana normal hai, lekin jab ye level bahut zyada badh jaaye toh doctor ko prostate ki problem ka shak hota hai.

PSA test do main kamon mein aata hai: Prostate cancer ki early screening karna — jab koi symptom nahi hota, aur kisi known prostate problem ka follow-up karna — treatment ka asar dekhna.

Ek zaroori baat: PSA test akela cancer confirm nahi karta. High PSA ka matlab sirf yahi nahi ki cancer hai — BPH (prostate ka bada hona) ya prostatitis (prostate mein sujan) bhi level badha sakte hain. Final diagnosis ke liye doctor aur tests karte hain.`,

  whenToTest: [
    'Aap 50 saal se zyada umra ke hain aur routine prostate screening karwana chahte hain',
    'Family mein kisi ko prostate cancer raha ho — toh 40-45 saal se screening shuru ho sakti hai',
    'Peshab mein takleef ho — jaise bar bar aana, raat ko uthna, dhara kamzor hona',
    'Kamar ya hips mein dard hai jo theek nahi ho raha',
    'Prostate cancer ka treatment chal raha ho aur follow-up ki zarurat ho',
    'BPH (Benign Prostatic Hyperplasia) hai aur uspe nazar rakhni ho',
  ],

  whatItDetects: `Is test se pata chalta hai: prostate gland mein koi asamanya (abnormal) cell activity ho rahi hai ya nahi. Prostate Cancer ka early risk hai ya nahi. BPH (Benign Prostatic Hyperplasia) — prostate ka non-cancerous badhna. Prostatitis — prostate mein infection ya sujan.`,

  normalRanges: [
    {
      _key: 'psa-under40',
      parameter: '40 saal se kam umra',
      normalRange: '0 – 1.4',
      unit: 'ng/mL',
      highBrief: 'Infection / BPH — evaluate karein',
      lowBrief: 'Normal hai',
    },
    {
      _key: 'psa-40-49',
      parameter: '40–49 saal',
      normalRange: '0 – 2.5',
      unit: 'ng/mL',
      highBrief: 'BPH / Prostatitis — doctor se milein',
      lowBrief: 'Normal hai',
    },
    {
      _key: 'psa-50-59',
      parameter: '50–59 saal',
      normalRange: '0 – 3.5',
      unit: 'ng/mL',
      highBrief: 'Prostate concern — evaluation zaroor',
      lowBrief: 'Normal hai',
    },
    {
      _key: 'psa-60-69',
      parameter: '60–69 saal',
      normalRange: '0 – 4.5',
      unit: 'ng/mL',
      highBrief: 'Biopsy zaroori ho sakti hai',
      lowBrief: 'Normal hai',
    },
    {
      _key: 'psa-70-79',
      parameter: '70–79 saal',
      normalRange: '0 – 6.5',
      unit: 'ng/mL',
      highBrief: 'High risk — urologist se milein',
      lowBrief: 'Normal hai',
    },
    {
      _key: 'psa-80plus',
      parameter: '80+ saal',
      normalRange: '0 – 11.3',
      unit: 'ng/mL',
      highBrief: 'Doctor evaluation zaroori',
      lowBrief: 'Normal hai',
    },
    {
      _key: 'psa-free-ratio',
      parameter: 'Free PSA / Total PSA Ratio',
      normalRange: '> 25%',
      unit: '%',
      highBrief: '> 25% = Cancer ka risk kam',
      lowBrief: '< 10% = Cancer ka risk zyada — biopsy consider karein',
    },
  ],

  pregnancyInfo: {
    applicable: false,
    normalRange: 'N/A — PSA test exclusively purushon (males) ka test hai',
    riskNote: `PSA test exclusively purushon ka test hai. Mahilaon mein prostate gland hoti hi nahi — isliye ye test mahilaon mein bilkul applicable nahi hai. Pregnancy ya mahilaon ke kisi bhi test mein PSA relevant nahi hai.`,
    whenDoctor: `Ye section applicable nahi hai. PSA test sirf mard karwate hain.`,
  },

  highMeans: [
    'BPH (Benign Prostatic Hyperplasia) — prostate ka bada hona — cancer nahi, lekin PSA badha sakta hai — 50+ saal mein bahut common',
    'Prostatitis — prostate mein infection ya sujan — aksar bacterial infection se — PSA temporarily bahut zyada badha deta hai',
    'Prostate Cancer — agar baar baar high aa raha ho aur zyada badh raha ho toh biopsy recommend ho sakti hai',
    'Recent ejaculation — test se 24-48 ghante pehle ejaculation hua ho toh PSA thoda badha hua aa sakta hai',
    'Bicycle riding ya vigorous exercise — prostate par pressure dene wali activities se PSA temporarily upar ja sakti hai',
    'UTI ya urinary tract infection — infection bhi PSA temporarily bada kar deta hai',
    'Prostate biopsy ya surgery — koi bhi procedure recently hui ho toh PSA weeks tak elevated reh sakti hai',
    'Kuch medicines — finasteride ya dutasteride PSA artificially kam karti hain — doctor ko batana zaroori hai',
  ],

  highReassurance: `Ghabrao mat — ek high reading se kuch confirm nahi hota. Doctor repeat test karenge aur free PSA ratio, DRE (digital rectal exam) aur zarurat padi toh biopsy ke baad hi koi conclusion nikalenge. High PSA ka matlab sirf cancer nahi hai.`,

  lowMeans: [
    'Healthy, chhoti prostate — young men mein ye normal hai',
    '5-alpha reductase inhibitors (BPH ki dawa jaise finasteride) — ye medicines PSA ko artificially aadha kar deti hain',
    'Prostate remove ho chuki ho (prostatectomy ke baad) — PSA practically zero ho jati hai, aur ye expected hai',
    'Obesity — kuch studies mein bahut zyada weight wale purushon mein PSA diluted dikhi hai',
  ],

  lowConcern: `PSA ka low hona generally achhi baat hai — prostate mein koi active problem nahi lag rahi. Lekin agar prostate cancer ka treatment chal raha ho aur PSA zero pe aa jaane ke baad fir se utha — toh ye cancer recurrence ka sign ho sakta hai. Ye sirf oncologist ke saath discuss karein.`,

  redFlags: [
    'PSA 10 ng/mL se zyada aa jaaye — bina kisi obvious reason ke — turant urologist se milein',
    'PSA ek saal mein 0.75 ng/mL se zyada badhi ho (PSA velocity) — ye concerning hai',
    'Peshab mein khoon aaye',
    'Peshab karne mein bahut takleef ho rahi ho ya bilkul nahi aa raha',
    'Kamar, hips ya haddiyon mein persistent dard ho',
    'Wajan achanak ghata ho bina kisi reason ke',
    'PSA normal range mein ho lekin free PSA ratio 10% se kam ho',
  ],

  emergencyLevel: `PSA 10 ng/mL se zyada — urologist se same week milein. PSA zyada high (20+) with bone pain ya weight loss — urgent evaluation. PSA continuously badh rahi ho treatment ke bawajood — oncologist se turant milein.`,

  selfTreatWarning: `Report dekhkar khud treatment mat shuru karo — PSA ki report akele koi bimari confirm nahi karti. Doctor aur tests ke baad hi picture clear hoti hai. Koi bhi supplement ya dawa prostate ke liye bina doctor ke mat lo.`,

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Din mein kisi bhi waqt — PSA ka level subah-shaam mein nahi badlta (unlike cortisol). Koi specific time of day nahi hota.',
    whatToEat: `PSA test ke liye khali pet rehne ki zarurat nahi hai. Aap khana khakar bhi ye test de sakte hain. Haan, agar doctor ne saath mein koi aur test bhi likha ho (jaise lipid profile ya sugar) toh unke liye fasting zaroor ho sakti hai.`,
    whatToAvoid: `Ejaculation: test se kam se kam 24–48 ghante pehle avoid karein — sexual activity PSA temporarily badha sakti hai. Vigorous exercise (especially cycling, horse riding): test se ek din pehle heavy workout na karein. Koi bhi prostate procedure (biopsy, catheter, cystoscopy): procedure ke baad 4–6 hafte baad test dein. UTI ho abhi toh pehle infection ka ilaaj karwa lein, fir test dein.`,
    medicineNote: `Agar aap finasteride, dutasteride ya koi prostate ki dawa le rahe hain — doctor ko test se pehle zaroor batayein. Ye medicines PSA artificially aadha kar deti hain aur doctor ko is factor ko consider karke interpret karna padta hai.`,
    accuracyNote: `Ek baar mein high aana kaafi nahi — consistent elevation zyada concerning hai. Doctor aksar 3–6 mahine baad repeat test karte hain confirm karne ke liye.`,
  },

  sampleInfo: {
    sampleType: 'Blood (Serum) — arm ki nadi se; Red/Gold top tube (SST)',
    sampleAmount: 'Approx. 3–5 mL blood',
    reportTime: 'Same day ya next day (4–8 ghante mein bhi kuch labs mein); Free PSA + Total PSA dono same day',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'PSA high matlab pakka prostate cancer hai',
      truth: 'High PSA ke anek possible kaaran hain — BPH, prostatitis, recent sexual activity, ya exercise. Cancer diagnosis ke liye akela PSA kaafi nahi — doctor biopsy aur additional tests ke baad hi confirm karte hain. Ghabrao mat.',
    },
    {
      _key: 'myth2',
      myth: 'PSA test ke liye khali pet rehna zaroori hai',
      truth: 'PSA test ke liye fasting bilkul zaruri nahi hai. Aap khana khakar bhi ye test de sakte hain. Fasting se PSA level nahi badlta.',
    },
    {
      _key: 'myth3',
      myth: 'PSA test bahut painful hota hai',
      truth: 'PSA test sirf ek simple blood test hai — ek chhoti needle se blood liya jata hai. 2–3 second ka hi process hai. Koi special preparation ya discomfort nahi hoti.',
    },
    {
      _key: 'myth4',
      myth: 'PSA test sirf cancer walo ko hota hai',
      truth: 'PSA test primarily screening ke liye hota hai — yani unhein bhi jinhein koi symptom nahi. 50+ saal ke healthy purushon ke liye routine check ya family history walo ke liye early screening mein ye test bahut useful hai.',
    },
    {
      _key: 'myth5',
      myth: 'Normal PSA matlab cancer nahi ho sakta',
      truth: 'Ye 100% sahi nahi hai. Kuch early stage prostate cancers mein PSA normal range mein bhi aa sakti hai. Isliye PSA ke saath DRE (digital rectal exam) bhi regularly recommend ki jaati hai 50+ saal ke purushon mein.',
    },
    {
      _key: 'myth6',
      myth: 'PSA test sirf buzurg logo ka hai',
      truth: '50+ saal ke sabhi purushon ke liye recommended hai. Jinke family mein prostate cancer ka history ho, unhe 40–45 saal se hi regular screening shuru karni chahiye.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Free PSA Test',
      comparedTestSlug: '',
      differencePoints: [
        'Total PSA blood mein sari PSA count karta hai; Free PSA unbound PSA ka percentage batata hai|Free/Total ratio (25%+ = low cancer risk; <10% = high risk) se cancer risk better samjha jaata hai|Free PSA tab order hota hai jab Total PSA 4–10 ng/mL ke beech ho',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'DRE (Digital Rectal Exam)',
      comparedTestSlug: '',
      differencePoints: [
        'PSA blood test hai — non-invasive; DRE physical exam hai — thoda uncomfortable|PSA protein level batata hai; DRE prostate ki size aur texture batata hai|Dono saath mein karna zyada accurate screening deta hai',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'Prostate Biopsy',
      comparedTestSlug: '',
      differencePoints: [
        'PSA sirf risk indicate karta hai; Biopsy cancer cells confirm karti hai|PSA routine screening ke liye; Biopsy tab jab PSA high ya DRE abnormal ho|Biopsy invasive procedure hai; PSA simple blood test hai',
      ],
    },
  ],

  repeatInfo: `Normal result aane pe: 50–54 saal mein har 1–2 saal, 55–69 saal mein har saal ya doctor ki salah ke mutabiq, 70+ saal ke baad doctor se discuss karein — risk vs benefit consider kiya jata hai. Elevated PSA pe follow-up: borderline high (4–6 ng/mL) — doctor 3–6 mahine baad repeat karne ke liye keh sakte hain. Prostatitis ka ilaaj ho raha ho toh ilaaj poora hone ke 4–6 hafte baad repeat test. Treatment chal raha ho: prostatectomy ke baad har 3–6 mahine, radiation ke baad har 6 mahine phir annually.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Prostate Cancer', diseaseSlug: 'prostate-cancer', isAvailable: false },
    { _key: 'ld2', diseaseName: 'BPH (Benign Prostatic Hyperplasia)', diseaseSlug: 'bph', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Prostatitis', diseaseSlug: 'prostatitis', isAvailable: false },
    { _key: 'ld4', diseaseName: 'UTI (Urinary Tract Infection)', diseaseSlug: 'uti', isAvailable: true },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Testosterone Test', testSlug: 'testosterone-test', isAvailable: true },
    { _key: 'rt2', testName: 'KFT (Kidney Function Test)', testSlug: 'kidney-function-test', isAvailable: true },
    { _key: 'rt3', testName: 'Urine Routine Test', testSlug: 'urine-routine', isAvailable: true },
    { _key: 'rt4', testName: 'Free PSA Test', testSlug: 'free-psa-test', isAvailable: false },
    { _key: 'rt5', testName: 'Ultrasound Prostate', testSlug: 'ultrasound-prostate', isAvailable: false },
  ],

  homeopathyAngle: `Agar baar baar PSA elevated aa rahi ho aur conventional treatment ke saath saath aap root cause address karna chahte hain — homeopathy ek achha complementary option ho sakta hai. Homeopathy mein sirf numbers nahi, puri health history dekhi jaati hai — prostate ki health, hormonal balance, immunity sab consider hota hai. Side effects practically nil hote hain. Ye conventional treatment ki jagah nahi — saath mein use ki ja sakti hai. Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'PSA test kya hai aur ye kyu kiya jata hai?',
      answer: 'PSA (Prostate Specific Antigen) test ek blood test hai jo prostate gland ki health check karne ke liye kiya jata hai. Ye sirf purushon mein hota hai. Prostate cancer ki early screening, BPH aur prostatitis ki detection ke liye ye test zaroori hai. 50+ saal ke purushon ke liye routine screening mein recommend kiya jata hai.',
    },
    {
      _key: 'faq2',
      question: 'PSA test ka normal range kya hai?',
      answer: 'Normal range age ke saath badlti hai: 40–49 saal: 0–2.5 ng/mL, 50–59 saal: 0–3.5 ng/mL, 60–69 saal: 0–4.5 ng/mL, 70+ saal: 0–6.5 ng/mL. Indian population mein ye ranges Western values se thodi kam hoti hain — doctor se individual interpretation lein.',
    },
    {
      _key: 'faq3',
      question: 'PSA test ke liye khali pet rehna zaroori hai?',
      answer: 'Nahi — PSA test ke liye fasting bilkul zaroori nahi. Aap khana khakar bhi test de sakte hain. Haan, test se 24–48 ghante pehle ejaculation aur vigorous exercise avoid karein.',
    },
    {
      _key: 'faq4',
      question: 'PSA high hone ka matlab kya hai?',
      answer: 'High PSA ka matlab zaroor cancer nahi hai. Possible kaaran hain: BPH (prostate bada hona), prostatitis (sujan), recent sexual activity, cycling ya heavy exercise, UTI, ya prostate cancer. Doctor aur tests se hi pata chalega asli wajah.',
    },
    {
      _key: 'faq5',
      question: 'Kya PSA test sirf cancer ke liye hota hai?',
      answer: 'Nahi — ye test prostate gland ki overall health ke liye hai. BPH (non-cancerous prostate enlargement) aur prostatitis (infection) bhi detect ho sakte hain. Cancer screening sirf ek use hai.',
    },
    {
      _key: 'faq6',
      question: 'PSA test kab karwana chahiye?',
      answer: '50+ saal ke sabhi purushon ko regular PSA screening karwani chahiye. Agar family mein prostate cancer ka history ho, toh 40–45 saal se shuru karein. Peshab mein takleef ya kamar mein dard ho toh bhi doctor se test ke baare mein milein.',
    },
    {
      _key: 'faq7',
      question: 'PSA test mein fasting chahiye?',
      answer: 'Nahi. Fasting ka PSA level pe koi asar nahi padta. Khana khakar bhi test de sakte hain. Bas ejaculation (24–48 hrs pehle), heavy exercise, aur recent prostate procedures se bachein.',
    },
    {
      _key: 'faq8',
      question: 'PSA test kitne time mein hota hai aur report kab milti hai?',
      answer: 'Blood sample lena sirf 5–10 minute ka kaam hai. Report same day ya next working day mein aa jaati hai — kuch labs 4–6 ghante mein digital report deti hain. Online bhi milti hai.',
    },
    {
      _key: 'faq9',
      question: 'PSA 4 se zyada ho toh kya hota hai?',
      answer: '4 ng/mL se zyada PSA aana doctor ko alert karta hai, lekin ye confirmation nahi hai. Doctor pehle repeat test karenge, PSA velocity (kitni tez badh rahi hai) dekhenge, free PSA ratio check karenge aur zarurat pe biopsy recommend karenge. Akele ek high reading se ghabrao mat.',
    },
    {
      _key: 'faq10',
      question: 'PSA 10 se zyada ho toh?',
      answer: '10 ng/mL se zyada PSA ko "high risk zone" mana jata hai — is case mein prostate cancer ka risk considerably badh jaata hai. Doctor biopsy strongly recommend karenge. Turant urologist se milein.',
    },
    {
      _key: 'faq11',
      question: 'Kya mahilao ka bhi PSA test hota hai?',
      answer: 'Nahi — PSA test exclusively purushon ke liye hai. Mahilaon mein prostate gland hoti hi nahi. Clinical practice mein mahilao ka PSA test nahi hota.',
    },
    {
      _key: 'faq12',
      question: 'Kya PSA se cancer 100% confirm hota hai?',
      answer: 'Nahi. PSA ek screening tool hai — confirm karne ke liye nahi. High PSA pe doctor biopsy karte hain, aur woh biopsy agar positive aaye tab cancer confirm hota hai. PSA only risk indicate karta hai.',
    },
    {
      _key: 'faq13',
      question: 'PSA test kitne waqt baad repeat karwayein?',
      answer: 'Normal ho toh har 1–2 saal. Borderline high ho toh 3–6 mahine mein repeat. Treatment chal rahi ho toh doctor ke schedule ke mutabiq — usually har 3–6 mahine.',
    },
    {
      _key: 'faq14',
      question: 'Kya cycling ya exercise PSA ko affect karta hai?',
      answer: 'Haan — prostate pe pressure dene wali activities jaise cycling, horseback riding ya heavy workout PSA temporarily badha sakte hain. Test se kam se kam ek din pehle ye activities avoid karein accurate result ke liye.',
    },
    {
      _key: 'faq15',
      question: 'Kya PSA test painful hota hai?',
      answer: 'Nahi — ye sirf ek blood test hai. Ek chhoti needle se thoda sa blood liya jata hai. 2–3 second ka process hai. Injection wali jagah par thodi der ke liye chhoti si bruising ho sakti hai — koi badi takleef nahi.',
    },
    {
      _key: 'faq16',
      question: 'Free PSA aur Total PSA mein kya fark hai?',
      answer: 'Total PSA blood mein sari PSA protein count karta hai. Free PSA woh portion hai jo kisi protein se bound nahi. Free PSA ka Total PSA se ratio (%) doctor ko cancer risk better samajhne mein help karta hai. 25%+ free PSA = kam risk; 10% se kam = risk zyada.',
    },
    {
      _key: 'faq17',
      question: 'PSA test ke baad koi restriction hoti hai?',
      answer: 'Nahi — test ke baad koi restriction nahi hoti. Normal activities jari rakh sakte hain. Bas report aane par doctor ko dikhayein aur apne aap koi conclusion na nikaalein.',
    },
    {
      _key: 'faq18',
      question: 'Kya PSA test age 70 ke baad zaroori hai?',
      answer: '70+ saal ke baad PSA testing ke baare mein doctors mein alag-alag opinions hain. Kuch guidelines suggest karti hain ki 70+ ke baad risk vs benefit carefully weigh karna chahiye. Apne urologist se is baare mein personal discussion karein.',
    },
  ],
}

async function main() {
  await client.createOrReplace(psa)
  console.log('✅ PSA Test seeded: labtest-psa')
}

main().catch(console.error)
