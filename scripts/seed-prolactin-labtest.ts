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

const prolactin = {
  _id: 'labtest-prolactin',
  _type: 'labTest',
  name: 'Prolactin Test (PRL Test)',
  fullForm: 'Serum Prolactin / Prolactin Lactogenic Hormone',
  hindiName: 'Prolactin Jaanch',
  slug: { _type: 'slug', current: 'prolactin-test' },
  category: 'Hormone',
  metaTitle: 'Prolactin Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'Prolactin (PRL) test ka normal range, high/low matlab, kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Prolactin Test — jise PRL Test ya Serum Prolactin Test bhi kehte hain — ek blood test hai jo aapke khoon mein prolactin hormone ki matra napata hai. Prolactin ek aisa hormone hai jo brain ke neeche ek chhoti si gland — pituitary gland — dwara banta hai.

Is hormone ka main kaam hai: pregnancy ke dauran breast tissue ko badhana aur delivery ke baad doodh (milk) banana. Isliye pregnant aur breastfeeding mein prolactin naturally zyada hota hai.

Lekin agar koi mahila pregnant nahi hai ya koi mard — phir bhi prolactin bahut zyada ho jaaye, toh iska matlab ho sakta hai ki kuch andar se theek nahi hai. Isi cheez ko samajhne ke liye doctor ye test likhte hain.

PRL ka full form hai: Prolactin (ya Prolactin Lactogenic Hormone). Test ka dusra naam: Serum Prolactin, S. Prolactin, Sr. Prolactin. Ye test khoon se hota hai — sirf ek chhoti needle, bas 2-3 second ka kaam.`,

  whenToTest: [
    'Mahila ko periods irregular ho rahe hain ya band ho gaye hain',
    'Bina pregnancy ke breasts se doodh aa raha ho (galactorrhea)',
    'Pregnancy mein problem ho rahi ho, conceive nahi ho raha',
    'PCOD (Polycystic Ovarian Disease) ka doubt ho',
    'Infertility ke workup mein — mahila ya mard dono ke liye',
    'Mard ko erectile dysfunction (erection maintain karna mushkil) ho',
    'Mard ya aurat ko libido (sex drive) mein kami aa gayi ho',
    'Bina kisi karan headaches aane lage ya aankhon ki roshni kamzor ho rahi ho',
    'Pituitary gland mein tumour (prolactinoma) ka doubt ho',
    'TSH test mein thyroid abnormal aaya ho — saath mein prolactin bhi check karte hain',
  ],

  whatItDetects: `Is test se pata chalta hai: Prolactinoma — pituitary gland mein ek chhota, aksar benign tumour. PCOD mein hormonal imbalance. Hypothyroidism (thyroid kum kaam karna) ki wajah se hormonal disturbance. Mardana kamzori ke hormonal causes. Doodh uthne ka sahi reason (pregnancy hai ya aur koi wajah). Infertility ke peeche ka hormonal reason.`,

  normalRanges: [
    {
      _key: 'prl-male',
      parameter: 'Mard (Adult Male)',
      normalRange: '4.0 – 15.2',
      unit: 'ng/mL',
      highBrief: 'Prolactinoma / PCOD',
      lowBrief: 'Pituitary deficiency',
    },
    {
      _key: 'prl-female',
      parameter: 'Mahila (Non-pregnant Adult)',
      normalRange: '4.79 – 23.3',
      unit: 'ng/mL',
      highBrief: 'Galactorrhea / PCOD / Prolactinoma',
      lowBrief: 'Pituitary deficiency',
    },
    {
      _key: 'prl-preg-t1',
      parameter: 'Pregnancy — 1st Trimester',
      normalRange: '9.95 – 101',
      unit: 'ng/mL',
      highBrief: 'Normal physiological rise',
      lowBrief: 'Monitoring zaroor — doctor se poochho',
    },
    {
      _key: 'prl-preg-t2',
      parameter: 'Pregnancy — 2nd Trimester',
      normalRange: '17.2 – 270',
      unit: 'ng/mL',
      highBrief: 'Normal physiological rise',
      lowBrief: 'Doctor se poochho',
    },
    {
      _key: 'prl-preg-t3',
      parameter: 'Pregnancy — 3rd Trimester',
      normalRange: '67.9 – 419',
      unit: 'ng/mL',
      highBrief: 'Normal physiological rise',
      lowBrief: 'Doctor se poochho',
    },
    {
      _key: 'prl-lactation',
      parameter: 'Breastfeeding (Lactation)',
      normalRange: '80 – 400',
      unit: 'ng/mL',
      highBrief: 'Normal during active lactation',
      lowBrief: 'Milk production kam ho sakta hai',
    },
    {
      _key: 'prl-child',
      parameter: 'Bachche (Children)',
      normalRange: '3.6 – 12.0 (approx)',
      unit: 'ng/mL',
      highBrief: 'Pituitary issue — evaluate karein',
      lowBrief: 'Rare',
    },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: '1st Trimester: 9.95–101 ng/mL | 2nd Trimester: 17.2–270 ng/mL | 3rd Trimester: 67.9–419 ng/mL | Breastfeeding: 80–400 ng/mL',
    riskNote: `Prolactin pregnancy mein naturally bahut zyada badhta hai — ye bilkul normal hai aur darrane ki koi baat nahi. Har trimester mein range alag hoti hai aur badhti rehti hai.

Ye test pregnancy CONFIRM nahi karta — uske liye beta-hCG (pregnancy test) hota hai. Doctor pregnancy mein ye test tab likhte hain jab pehle se prolactinoma ka history ho, galactorrhea ki problem ho, ya TSH/thyroid monitoring ke saath.`,
    whenDoctor: `Pregnancy mein prolactin test tab: pehle prolactinoma (pituitary tumour) ka history ho, galactorrhea (bina reason doodh aana) ki problem ho, ya TSH ke saath monitoring ke liye. Ye sirf ek blood test hai — bilkul safe.`,
  },

  highMeans: [
    'Prolactinoma — pituitary gland mein ek chhota benign tumour (sabse common medical reason)',
    'PCOD (Polycystic Ovarian Disease) — aurat mein hormonal imbalance',
    'Hypothyroidism — thyroid kum kaam karne se prolactin badh sakta hai',
    'Liver disease (cirrhosis wagera)',
    'Kidney disease (chronic renal failure)',
    'Dawaiyan — antidepressants, antipsychotics (risperidone, haloperidol), kuch BP medicines, metoclopramide',
    'Zyada stress ya neend ki kami — thoda temporary badh sakta hai',
    'Breastfeeding ya nipple stimulation',
    'Test se pehle strenuous exercise ya strenuous physical activity',
    'Hypothalamic disorders',
  ],

  highReassurance: `Ghabrao mat — prolactin ka ek baar high aana diagnosis nahi hoti. Mild excess (26.5–50 ng/mL) exercise, stress ya lactation se ho sakta hai. Doctor repeat test aur doosre tests ke baad hi result confirm karte hain. Prolactinoma bhi aksar benign hota hai aur medicines se theek ho jaata hai.`,

  lowMeans: [
    'Pituitary gland ki kami (hypopituitarism) — gland theek se kaam nahi kar rahi',
    "Sheehan's syndrome — delivery ke waqt bahut zyada blood loss se pituitary damage",
    'Pseudohypoparathyroidism (ek rare condition)',
    'Kuch medicines ka asar',
  ],

  lowConcern: `Prolactin ka low hona thoda kam dekha jata hai. Agar naye maa ko doodh bilkul nahi aa raha aur prolactin report low aaye — toh doctor se milna zaroori hai. Akele prolactin low se usually serious bimari nahi hoti, lekin pituitary ke saath evaluate karna chahiye.`,

  redFlags: [
    'Prolactin level 100 ng/mL se zyada — especially agar pregnant nahi hain',
    'Bina kisi reason breasts se doodh aa raha ho (galactorrhea) — mard ya aurat dono mein',
    'Periods 3 mahine se zyada band ho gayi hain',
    'Baar baar severe headaches — aankhon ki roshni mein kami ke saath',
    'Mard mein erectile dysfunction aur prolactin high aaye saath mein',
    'Pregnancy try kar rahe hain aur prolactin high aa raha ho',
  ],

  emergencyLevel: `Prolactin 100 ng/mL se zyada — same day doctor visit zaroori hai. Headaches + vision loss + high prolactin — ye pituitary tumour ka sign ho sakta hai, turant evaluate karwao. Bina reason galactorrhea mard mein — is waqt doctor se milein.`,

  selfTreatWarning: `Report dekhkar khud treatment mat shuru karo — aur na hi ghabrao. Doctor ke bina koi bhi conclusion galat ho sakta hai. Koi bhi dawai (especially hormonal) doctor ki salah ke bina band ya shuru mat karo.`,

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Subah 8 AM se 10 AM ke beech — uthne ke 2-3 ghante baad. Prolactin subah uthne ke baad ghatne lagta hai, isliye ye timing sabse accurate results deti hai.',
    whatToEat: `Prolactin test ke liye strict fasting zaroori nahi. Aap thoda paani pi sakte hain. Halka khaana bhi theek hai.`,
    whatToAvoid: `Test se 24 ghante pehle bahut zyada strenuous exercise avoid karein. Test se pehle sexual activity ya nipple stimulation avoid karein — prolactin temporarily badh sakta hai. High-dose biotin supplements (>5 mg/day) agar le rahe hain toh test se kam se kam 8 ghante pehle band karein. Test ke din bahut zyada stress ya anxiety se bachne ki koshish karein.`,
    medicineNote: `Agar koi antidepressant, antipsychotic, ya stomach ki dawai le rahe hain — test se pehle doctor ko zaroor batao. Kuch dawaiyan prolactin badhati hain. Doctor decide karega ki dawai rokni hai ya nahi — khud se band mat karo.`,
    accuracyNote: `Subah, uthne ke 2-3 ghante baad, bina zyada exercise kiye aur normal routine mein blood dene pe — ye sabse accurate result deta hai. Kuch cases mein doctor "Pooled Prolactin" (3 samples — 0, 20, 40 minute interval pe) likhta hai agar ek reading pe confirm nahi karna chahta.`,
  },

  sampleInfo: {
    sampleType: 'Blood (khoon) — vein se, usually haath ki nali se',
    sampleAmount: 'Sirf 2–3 mL blood — bahut kam',
    reportTime: 'Usually same day — 4 se 12 ghante mein; kuch labs next day',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Prolactin test ke liye khali pet rehna zaroori hai',
      truth: 'Prolactin test ke liye fasting zaroori nahi. Paani pi sakte hain aur halka khaana bhi theek hai. Bas bahut zyada exercise aur stress se bachein test se pehle.',
    },
    {
      _key: 'myth2',
      myth: 'Prolactin test se pregnancy confirm hoti hai',
      truth: 'Bilkul galat. Prolactin pregnancy mein badhta hai, lekin ye pregnancy test nahi hai. Pregnancy confirm karne ke liye beta-hCG (urine ya blood pregnancy test) hota hai — prolactin nahi.',
    },
    {
      _key: 'myth3',
      myth: 'Prolactin high matlab pituitary mein cancer hai',
      truth: 'Prolactinoma — jo sabse common reason hai high prolactin ka — aksar benign (non-cancerous) tumour hota hai. Ye slowly badhta hai aur medicines se theek ho jaata hai. Ghabrao mat, doctor se milein.',
    },
    {
      _key: 'myth4',
      myth: 'Ye test sirf auraton ke liye hai',
      truth: 'Mardana infertility, erectile dysfunction, libido ki kami, ya unexplained gynecomastia (mard ke breasts ka badhna) mein bhi ye test kiya jaata hai. Mard mein prolactin utna hi important hai.',
    },
    {
      _key: 'myth5',
      myth: 'Prolactin test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle, 2-3 second ka kaam. Normal blood test jaisa hi hai — bilkul darrane ki zarurat nahi.',
    },
    {
      _key: 'myth6',
      myth: 'Ek baar high report aai toh seedha operation hoga',
      truth: 'Pehle repeat test hoga. Phir MRI ho sakti hai. Zyada tar prolactinoma cases mein pehle line treatment medicines (Cabergoline/Bromocriptine) hoti hai — surgery bahut kam cases mein zaroori hoti hai.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'TSH (Thyroid Stimulating Hormone)',
      comparedTestSlug: 'tsh-test',
      differencePoints: [
        'Prolactin pituitary aur reproductive health check karta hai; TSH thyroid function|Prolactin ke liye fasting zaroor nahi; TSH ke liye subah khali pet preferred|Hypothyroidism prolactin badha sakta hai — isliye dono aksar saath mein likhte hain',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'LH / FSH (Reproductive Hormones)',
      comparedTestSlug: '',
      differencePoints: [
        'LH/FSH ovulation aur reproductive cycle check karte hain; prolactin milk hormone hai|LH/FSH period ke specific day pe liya jaata hai; prolactin kisi bhi din subah le sakte hain|Infertility workup mein teeno saath mein likhte hain doctor',
      ],
    },
  ],

  repeatInfo: `Pehli baar high aai report: doctor usually 1 mahine baad repeat karta hai — kyunki prolactin temporarily stress, exercise, ya dawai se badh sakta hai. Prolactinoma diagnosis ke baad: medicine shuru karne ke 4-6 hafte baad repeat prolactin, phir har 3-6 mahine mein monitoring. PCOD ke treatment mein: har 3-6 mahine mein check-up. Normal hai toh: agar koi symptoms nahi hain toh routine mein dobara test ki zarurat nahi — symptoms wapas aayein tab doctor se milein. Pregnancy planning mein: infertility treatment ke dauran doctor batayega kab repeat karna hai.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'PCOD (Polycystic Ovarian Disease)', diseaseSlug: 'pcod', isAvailable: true },
    { _key: 'ld2', diseaseName: 'Infertility', diseaseSlug: 'infertility', isAvailable: true },
    { _key: 'ld3', diseaseName: 'Hypothyroidism', diseaseSlug: 'hypothyroidism', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Prolactinoma (Pituitary Tumour)', diseaseSlug: 'prolactinoma', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Galactorrhea', diseaseSlug: 'galactorrhea', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'TSH Test', testSlug: 'tsh-test', isAvailable: true },
    { _key: 'rt2', testName: 'Testosterone Test', testSlug: 'testosterone-test', isAvailable: true },
    { _key: 'rt3', testName: 'LH Test', testSlug: 'lh-test', isAvailable: false },
    { _key: 'rt4', testName: 'FSH Test', testSlug: 'fsh-test', isAvailable: false },
    { _key: 'rt5', testName: 'Estradiol (E2) Test', testSlug: 'estradiol-test', isAvailable: false },
    { _key: 'rt6', testName: 'MRI Pituitary', testSlug: 'mri-pituitary', isAvailable: false },
  ],

  homeopathyAngle: `Conventional treatment mein aksar hormonal medicines di jaati hain jo symptoms ko control karti hain — jaise Cabergoline ya Bromocriptine. Homeopathy isi ke saath underlying cause — jaise stress, hormonal imbalance, ya constitutional weakness — ko address karne mein helpful ho sakti hai.

Baar baar prolactin abnormal aaye toh sirf numbers theek karna kaafi nahi — poori health history aur individual constitution dekhi jaati hai. Dr. Shadab Khan ka approach individualized hai — aapki lifestyle, stress levels, aur constitution dekhkar treatment decide hota hai. Homeopathic treatment mein practically koi side effects nahi hote. Apni report lekar consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Prolactin test kya hota hai?',
      answer: 'Prolactin test (PRL test) ek blood test hai jo body mein prolactin hormone ki matra check karta hai. Prolactin pituitary gland se banta hai aur milk production ke liye responsible hai. Iska test hormonal problems, infertility, ya pituitary tumour ke diagnosis mein help karta hai.',
    },
    {
      _key: 'faq2',
      question: 'Prolactin test kab karvana chahiye?',
      answer: 'Jab periods irregular hon, bina pregnancy doodh aaye, conceive karne mein problem ho, mard ko libido ya erection mein takleef ho, ya doctor ne infertility workup ke liye kaha ho — tab ye test karvana chahiye. Kabhi kabhi unexplained headaches mein bhi ye test hota hai.',
    },
    {
      _key: 'faq3',
      question: 'Prolactin test ka normal range kya hai?',
      answer: 'Mard mein 4.0–15.2 ng/mL aur non-pregnant mahila mein 4.79–23.3 ng/mL normal maana jaata hai (Metropolis ECLIA method). Pregnancy mein ye naturally bahut zyada badhta hai — 1st trimester mein 9.95–101 ng/mL tak bhi normal ho sakta hai. Aapki lab ki apni reference range hoti hai — report ke saath compare karein.',
    },
    {
      _key: 'faq4',
      question: 'Prolactin test ke liye khali pet rehna zaroori hai?',
      answer: 'Nahi. Prolactin test ke liye strict fasting zaroori nahi hai. Sirf zyada strenuous exercise, nipple stimulation, aur high-dose biotin supplements test se pehle avoid karein. Subah uthne ke 2-3 ghante baad test karvana best hota hai.',
    },
    {
      _key: 'faq5',
      question: 'Prolactin test ka best time kya hai?',
      answer: 'Subah 8 baje se 10 baje ke beech — yaani uthne ke 2-3 ghante baad — ye sabse accurate time hota hai. Prolactin subah uthne ke baad ghatne lagta hai, isliye ye timing sahi hai.',
    },
    {
      _key: 'faq6',
      question: 'Prolactin high hone ka matlab kya hai?',
      answer: 'Prolactin high ka possible kaaran hai: prolactinoma (pituitary tumour), PCOD, hypothyroidism, kuch medicines (antidepressants, antipsychotics), stress, ya exercise. Ek baar high report se ghabrao mat — doctor repeat test aur further evaluation karenge.',
    },
    {
      _key: 'faq7',
      question: 'Prolactin high hone ke symptoms kya hain?',
      answer: 'Mahila mein: irregular ya band periods, bina pregnancy doodh aana (galactorrhea), pregnancy mein dikkat, libido mein kami. Mard mein: erectile dysfunction, libido mein kami, kabhi kabhi chest ka thoda badhna. Dono mein: headaches, aankhon ki problem.',
    },
    {
      _key: 'faq8',
      question: 'Prolactin low hone ka matlab kya hai?',
      answer: "Low prolactin rare hai. Iska possible kaaran pituitary gland ki kami (hypopituitarism) ya Sheehan's syndrome (delivery mein excess blood loss) ho sakta hai. Naye maa mein prolactin low ho toh doodh kum aa sakta hai. Doctor se evaluate karwayein.",
    },
    {
      _key: 'faq9',
      question: 'Kya prolactin test pregnancy confirm karta hai?',
      answer: 'Nahi. Prolactin test pregnancy test nahi hai. Pregnancy mein prolactin naturally badhta hai, lekin ye confirm karne ke liye beta-hCG test (urine ya blood pregnancy test) hota hai — prolactin nahi.',
    },
    {
      _key: 'faq10',
      question: 'Prolactin test kitni baar karvana chahiye?',
      answer: 'Agar treatment chal rahi hai toh doctor 4-6 hafte mein repeat karvayenge. Normal hai aur koi symptoms nahi hain toh routine mein dobara test ki zarurat nahi. Symptoms wapas aayein tab doctor se milein.',
    },
    {
      _key: 'faq11',
      question: 'Prolactin test ke liye kaunsa blood tube use hota hai?',
      answer: 'Usually red top (serum) ya gold top tube use hoti hai. Sample collection centre pe technician sahi tube use karta hai — aapko is baare mein kuch karna nahi hota.',
    },
    {
      _key: 'faq12',
      question: 'Prolactin test aur TSH test mein kya fark hai?',
      answer: 'Prolactin test sirf prolactin hormone check karta hai — pituitary aur reproductive health ke liye. TSH thyroid function check karta hai. Lekin hypothyroidism prolactin badha sakta hai, isliye aksar dono saath mein likhte hain.',
    },
    {
      _key: 'faq13',
      question: 'Kya prolactin test mard ke liye bhi hota hai?',
      answer: 'Haan, bilkul. Mard mein erectile dysfunction, libido ki kami, ya infertility workup mein prolactin test common hai. Mard mein high prolactin testosterone production ko affect karta hai.',
    },
    {
      _key: 'faq14',
      question: 'Prolactin test report kitne time mein aati hai?',
      answer: 'Zyada tar labs mein same day ya 4–12 ghante mein report aa jaati hai. Kuch labs next day dete hain. Dr Lal PathLabs, Metropolis, Aster Labs — in sab ki online reports bhi milti hain registered number pe.',
    },
    {
      _key: 'faq15',
      question: 'Kya prolactin test painful hota hai?',
      answer: 'Bilkul nahi. Ye sirf ek blood test hai — normal CBC ya sugar test jaisa hi. Ek chhoti needle se vein se 2-3 mL blood liya jata hai — 2-3 second ka kaam.',
    },
    {
      _key: 'faq16',
      question: 'Prolactin test aur PCOD ka kya connection hai?',
      answer: 'PCOD mein hormonal imbalance ki wajah se prolactin badha hua mil sakta hai. PCOD diagnosis ke doran doctor prolactin bhi check karta hai — kyunki high prolactin khud bhi PCOD jaisi symptoms de sakta hai (irregular periods, infertility). Isliye dono ko differentiate karna zaroori hai.',
    },
    {
      _key: 'faq17',
      question: 'Pooled prolactin test kya hota hai?',
      answer: 'Is test mein 0, 20, aur 40 minute ke interval pe 3 blood samples liye jaate hain. Ye tab kiya jaata hai jab doctor single reading pe sure nahi hota — prolactin ka level naturally fluctuate karta hai toh pooled sample zyada accurate picture deta hai.',
    },
    {
      _key: 'faq18',
      question: 'Kya TSH aur prolactin test saath mein kiye jaate hain?',
      answer: 'Haan — infertility aur menstrual irregularity ke workup mein TSH aur prolactin ek saath test karna common practice hai. Hypothyroidism aur high prolactin ka close connection hota hai, isliye dono ek saath check karte hain.',
    },
    {
      _key: 'faq19',
      question: 'Prolactin test report kaise padhein?',
      answer: 'Report mein "Reference Range" diya hota hai — aapki value us range ke andar hai ya bahar, woh dekhein. Agar value high hai toh "H" ya "High" likha hoga. Lekin report khud se interpret karne ki jagah doctor ko dikhayein — kyunki context, symptoms, aur clinical history bhi zaroori hoti hai.',
    },
    {
      _key: 'faq20',
      question: 'Prolactin unit ng/mL aur mIU/L mein kya fark hai?',
      answer: '1 ng/mL = 21.2 mIU/L (approx). Agar aapki report mIU/L mein hai: normal male range ~85–325 mIU/L aur normal female (non-preg) ~100–494 mIU/L. Aapki lab ki reference range hi sabse accurate guide hai.',
    },
  ],
}

async function main() {
  await client.createOrReplace(prolactin)
  console.log('✅ Prolactin Test seeded: labtest-prolactin')
}

main().catch(console.error)
