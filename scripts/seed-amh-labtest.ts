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

const amh = {
  _id: 'labtest-amh',
  _type: 'labTest',
  name: 'AMH Test (Anti-Mullerian Hormone)',
  fullForm: 'Anti-Mullerian Hormone Test',
  hindiName: 'Andaashay Takaat Jaanch',
  slug: { _type: 'slug', current: 'amh-test' },
  category: 'Blood',
  metaTitle: 'AMH Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'AMH (Anti-Mullerian Hormone) test ka normal range, high/low matlab, kab karaye. Complete guide, verified, doctor-reviewed. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `AMH ya Anti-Mullerian Hormone Test ek simple blood test hai jo aapke ovaries mein kitne eggs bache hain yaani aapka Ovarian Reserve measure karta hai.

Seedha simple bhasha mein samjhein: Har woman ke andar ek egg ka bhandar hota hai jo umar ke saath saath kam hota jaata hai. AMH test ye batata hai ki aapka ye bhandar abhi kitna bhara hai aur aage kitne samay tak theek rahega.

AMH ek hormone hai jo ovaries ke andar chhote follicles banate hain. Jitne zyada active follicles, utna zyada AMH, matlab utna acha ovarian reserve. Jitna kam AMH, utna kam eggs bache hain ovaries mein.

Ye test sirf mahilaon ke liye hi nahi, purushon mein bhi AMH hota hai jo testicle ki sehat batata hai. Magar iska sabse zyada use mahilaon ki fertility aur PCOS (Polycystic Ovary Syndrome) ke liye hota hai.

Important baat: AMH test sirf ek indicator hai. Ye exact pregnancy predict nahi karta. Doctor baaki tests ke saath milake poori tasveer dekhta hai.`,

  whenToTest: [
    'Pregnancy ki koshish ho rahi ho lekin safalta na mil rahi ho (infertility workup)',
    'IVF ya koi bhi ART (Assisted Reproductive Technology) treatment plan karna ho',
    'PCOS (Polycystic Ovary Syndrome) ka doubt ho, PCOS mein AMH unusually high hota hai',
    'Irregular periods ho ya periods zyada ya bahut kam aate hon',
    'Bina wajah bahut jaldi menopause hone ka darr ho (premature ovarian failure)',
    'Ovarian cancer ka treatment chal raha ho, treatment track karne ke liye',
    'Fertility planning karni ho aur baseline jaanna ho',
    'Purusho mein: shishu ke gender development mein sawaal ho ya testicle ki sehat jaanni ho',
  ],

  whatItDetects: `Is test se ovarian reserve kitna hai yaani eggs ki quantity ka andaaza lagta hai. PCOS hai ya nahi ye bhi pata chalta hai. Menopause kitna paas hai aur early menopause ka risk kitna hai ye indicator milta hai. IVF mein eggs ka response kaisa hoga ye estimate hota hai.

Purushon mein ye test testicles theek kaam kar rahe hain ya nahi ye batata hai.`,

  normalRanges: [
    { _key: 'age20',   parameter: 'Umar 20-25 saal',    normalRange: '2.5 – 6.8',  unit: 'ng/mL', highBrief: 'PCOS possible',          lowBrief: 'Ovarian reserve kam' },
    { _key: 'age26',   parameter: 'Umar 26-30 saal',    normalRange: '2.0 – 5.0',  unit: 'ng/mL', highBrief: 'PCOS possible',          lowBrief: 'Fertility concern' },
    { _key: 'age31',   parameter: 'Umar 31-35 saal',    normalRange: '1.5 – 4.0',  unit: 'ng/mL', highBrief: 'PCOS possible',          lowBrief: 'Doctor se milein' },
    { _key: 'age36',   parameter: 'Umar 36-40 saal',    normalRange: '1.0 – 2.5',  unit: 'ng/mL', highBrief: 'PCOS check karao',       lowBrief: 'Low reserve' },
    { _key: 'age40',   parameter: 'Umar 40+ saal',      normalRange: '0.5 – 1.5',  unit: 'ng/mL', highBrief: 'Reassess with doctor',   lowBrief: 'Menopause karib' },
    { _key: 'pcos',    parameter: 'PCOS Women',         normalRange: '> 3.5 – 10+', unit: 'ng/mL', highBrief: 'PCOS indicator',        lowBrief: 'N/A' },
    { _key: 'meno',    parameter: 'Menopause ke baad',  normalRange: '< 0.5',      unit: 'ng/mL', highBrief: 'Re-evaluate',            lowBrief: 'Expected value' },
    { _key: 'preg',    parameter: 'Pregnancy mein',     normalRange: 'Variable',   unit: 'ng/mL', highBrief: 'Normal ho sakta hai',    lowBrief: 'Doctor se dekhein' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'Pregnancy mein AMH levels aam tor pe thodi kam ya unstable hoti hain. Ye normal hai. PMC Indian study ke anusaar Indian women mein AMH decline Western women se thodi tez ho sakti hai.',
    riskNote: `Pregnancy mein AMH levels naturally fluctuate karte hain isliye interpretation alag hoti hai. Ye test pregnancy mein routine nahi hai.

IVF ya fertility treatment ke baad pregnancy confirm hone par monitoring ke liye, ovarian cancer follow-up ke liye, ya rarely twin ya multiple pregnancy mein ovarian assessment zaroori ho toh doctor likh sakta hai.`,
    whenDoctor: 'Bilkul safe hai, sirf blood liya jaata hai. Koi radiation ya injection nahi hota. Ghabrao mat. Pregnancy mein ye test sirf doctor ki specific recommendation pe hi karwana chahiye, routine nahi hai.',
  },

  highMeans: [
    'PCOS (Polycystic Ovary Syndrome), sabse common wajah. Bahut saare chhote follicles bante hain',
    'Ovarian reserve unusually high, kuch mahilaon mein naturally zyada eggs hote hain jo healthy ho sakta hai',
    'Ovarian tumors ya granulosa cell tumors, rare lekin doctor rule out karta hai',
    'Delayed menopause, zyada eggs bacha hona',
    'Kuch medicines ya hormonal treatments ka asar',
  ],

  highReassurance: 'High AMH hamesha buri baat nahi. PCOS mein high AMH bahut common hai aur PCOS manage ho sakti hai. Doctor poori clinical picture dekhta hai. Sirf AMH number se koi final diagnosis nahi hoti. Doctor se milein aur complete evaluation karayein.',

  lowMeans: [
    'Diminished Ovarian Reserve (DOR), eggs ki supply umar se pehle kam hona',
    'Premature Ovarian Insufficiency (POI), 40 saal se pehle ovaries ka theek se kaam na karna',
    'Umar ka natural asar, 35 ke baad AMH naturally girti hai',
    'Pehle kabhi ovarian surgery hui ho, kuch tissue hat gaya',
    'Chemotherapy ya radiation therapy ka asar ovaries pe',
    'Autoimmune conditions jisme body apni ovaries pe attack kare',
    'Smoking ka long-term asar fertility pe',
    'Endometriosis, ovaries pe tissue growth',
    'Turner Syndrome, genetic condition',
  ],

  lowConcern: 'Low AMH matlab zaroor infertile nahi ho aap. Bahut si mahilaein low AMH ke bawajood pregnant hoti hain, khaaskar younger age mein. Doctor se milein aur poori fertility evaluation karaein. Sirf AMH pe depend mat karein.',

  redFlags: [
    'AMH 0.5 ng/mL se bhi kam ho 35 saal ki umar se pehle',
    '3 mahine ya zyada se periods band ho gaye hon',
    'Pregnancy ki koshish 1 saal se ho rahi ho aur safalta na mile (35 se upar mein 6 mahine se)',
    'Ek saath 2 se zyada AMH tests mein consistently very low values aayein',
    'Family history mein early menopause ho yaani 40 se pehle',
    'Ovarian cyst ya tumor ka pehle se pata ho',
  ],

  emergencyLevel: 'AMH 0.5 ng/mL se neeche 35 saal se pehle ke saath periods band ho jaayein toh turant gynecologist se milein. Premature Ovarian Insufficiency ka evaluation zaroori hai.',

  selfTreatWarning: 'Report dekhkar khud koi treatment mat shuru karein. AMH ek guiding number hai, ye akela diagnosis ka aadhar nahi hai. Apni report doctor ko dikhayein aur unki salah lein. Koi supplement ya medicine bina doctor ke mat lo.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'AMH test kisi bhi din aur kisi bhi samay ho sakta hai. Ye menstrual cycle ke kisi bhi din theek hai, 2nd din ho ya 20th, koi fark nahi padta. Subah jaana isliye better hai kyunki labs mein rush kam hota hai aur report jaldi milti hai.',
    whatToEat: 'Koi special restriction nahi. Normal khaana peena bilkul theek hai. Khaana khake bhi test ho sakta hai.',
    whatToAvoid: 'Agar koi hormonal medicine chal rahi ho jaise contraceptive pills ya hormone therapy toh doctor ko zaroor batayein. Ye AMH levels affect kar sakti hain. Koi specific medicine band karne ki zarurat nahi jab tak doctor na kahe.',
    accuracyNote: 'Ye test kisi bhi samay accurate hota hai. Dikhaye gaye results mein variation nahi hota din ya cycle ke hisaab se. FSH aur LH ki tarah cycle-specific nahi hai.',
  },

  sampleInfo: {
    sampleType: 'Blood (Serum, venous arm ki nadi se)',
    sampleAmount: 'Sirf 2-3 mL blood, ek chhoti tube',
    reportTime: 'Most NABL labs: 6-8 ghante same day. Kuch labs 24-48 ghante lete hain.',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'AMH test ke liye khali pet rehna padta hai',
      truth: 'Bilkul galat. AMH test ke liye fasting ki koi zarurat nahi hai. Aap khaana khake bhi test karwa sakte ho, koi fark nahi padta result pe.',
    },
    {
      _key: 'myth2',
      myth: 'Periods ke specific din pe hi AMH test hona chahiye',
      truth: 'AMH is list mein unique hai. Ye cycle ke kisi bhi din ho sakta hai. 2nd din, 10th din, 25th din, sab theek hai. Ye FSH aur LH se alag hai jo cycle-specific hote hain.',
    },
    {
      _key: 'myth3',
      myth: 'AMH low hai matlab main kabhi pregnant nahi ho sakti',
      truth: 'Low AMH fertility ka ek indicator hai, sentence nahi. Kai mahilaein low AMH ke saath successfully pregnant hoti hain naturally ya IVF se. Age, egg quality aur baaki hormones bhi matter karte hain.',
    },
    {
      _key: 'myth4',
      myth: 'AMH high hai toh fertility pakka achhi hai',
      truth: 'High AMH ovarian reserve dikhata hai lekin egg quality yaani chromosomal health alag cheez hai jo AMH se nahi naapti. High AMH mein bhi PCOS ho sakta hai jo fertility affect karta hai.',
    },
    {
      _key: 'myth5',
      myth: 'AMH test bahut painful hota hai',
      truth: 'Normal blood test hai. Sirf ek chhoti needle, 2-3 second ka kaam. Lab jaao, blood do, ghar jaao. Bas itna hi.',
    },
    {
      _key: 'myth6',
      myth: 'AMH se pata chalta hai mujhe kitne baache ho sakte hain',
      truth: 'AMH ovarian reserve batata hai, exact babies ki number predict karna possible nahi hai. Fertility ek complex process hai jisme bahut saari cheezein involve hain.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'FSH Test',
      comparedTestSlug: '',
      differencePoints: [
        'Kya measure karta hai | Ovarian reserve directly | Pituitary signal jo ovaries ko stimulate karta hai',
        'Kab karna hai | Kisi bhi din cycle mein | Sirf cycle Day 2-3 pe',
        'PCOS detect karta hai | Haan, high AMH se | Partial, indirect',
        'Best use | Overall ovarian reserve | Menopause aur IVF assessment',
        'Fasting | Nahi chahiye | Nahi chahiye',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'Prolactin Test',
      comparedTestSlug: 'prolactin-test',
      differencePoints: [
        'Kya measure karta hai | Egg reserve (ovarian) | Prolactin hormone (pituitary)',
        'Fertility mein role | Eggs ki quantity | Prolactin high hone pe ovulation rukt jaata hai',
        'Cycle timing | Kisi bhi din | Morning, preferably Day 3-5',
        'PCOS mein | AMH high hota hai | Prolactin normal ya high ho sakta hai',
        'Infertility workup | Dono zaroori hain complete panel ke liye | Dono zaroori hain',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'TSH Test (Thyroid)',
      comparedTestSlug: 'thyroid-profile-tsh',
      differencePoints: [
        'Kya measure karta hai | Ovarian egg reserve | Thyroid function',
        'Fertility connection | Direct ovarian reserve | Thyroid imbalance bhi periods aur fertility affect karta hai',
        'Cycle timing | Kisi bhi din | Kisi bhi din',
        'Infertility workup | Zaroori hai | Zaroori hai, dono milake',
        'Fasting | Nahi | Nahi',
      ],
    },
  ],

  repeatInfo: `Normal hai toh, agar fertility planning pe hain toh har 1-2 saal mein ek baar. 35 se upar mein har saal monitor karna sensible hai. No immediate concern toh 2-3 saal mein ek baar kaafi hai.

Low AMH hai aur treatment chal rahi hai toh doctor ke bataye schedule pe follow karo. IVF cycle se pehle har baar fresh AMH test hota hai.

PCOS diagnosis mein treatment ke 6 mahine baad repeat useful ho sakta hai, doctor recommend karega.

Ovarian cancer follow-up mein har 3-6 mahine doctor ki advice pe repeat hota hai.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'PCOS (Polycystic Ovary Syndrome)', diseaseSlug: 'pcod', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Female Infertility', diseaseSlug: 'female-infertility', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Premature Ovarian Failure', diseaseSlug: 'premature-ovarian-failure', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Endometriosis', diseaseSlug: 'endometriosis', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Ovarian Cancer', diseaseSlug: 'ovarian-cancer', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Turner Syndrome', diseaseSlug: 'turner-syndrome', isAvailable: false },
    { _key: 'ld7', diseaseName: 'Male Hypogonadism', diseaseSlug: 'male-hypogonadism', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'TSH Test (Thyroid)', testSlug: 'thyroid-profile-tsh', isAvailable: true },
    { _key: 'rt2', testName: 'Testosterone Test', testSlug: 'testosterone-test', isAvailable: true },
    { _key: 'rt3', testName: 'FSH Test', testSlug: 'fsh-test', isAvailable: false },
    { _key: 'rt4', testName: 'LH Test', testSlug: 'lh-test', isAvailable: false },
    { _key: 'rt5', testName: 'Estradiol Test (E2)', testSlug: 'estradiol-test', isAvailable: false },
    { _key: 'rt6', testName: 'Prolactin Test', testSlug: 'prolactin-test', isAvailable: false },
  ],

  homeopathyAngle: `Ghabrao mat. Ek abnormal AMH value diagnosis nahi hai, sirf ek signal hai jo doctor ke paas le jaana hai.

Report lekar apne gynecologist ya fertility specialist se milein aur baaki tests (FSH, AFC) ke saath milake poori tasveer samjhein.

Agar AMH baar baar abnormal aa raha hai toh sirf symptoms treat karna kaafi nahi hota. Homeopathy underlying cause ko address karne mein helpful hai. Body ke hormonal balance ko naturally support karna, PCOS ya irregular periods ki root cause par kaam karna. Treatment individualized hoti hai, poori health history dekhi jaati hai, sirf ek number pe focus nahi hota. Side effects practically nil hain.

Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'AMH test kya hota hai?',
      answer: 'AMH ya Anti-Mullerian Hormone test ek blood test hai jo mahilaon mein ovarian reserve yaani ovaries mein bache eggs ki miqdar measure karta hai. Ye fertility evaluation aur PCOS diagnosis mein use hota hai.',
    },
    {
      _key: 'faq2',
      question: 'AMH test kisi bhi din ho sakta hai ya specific din chahiye?',
      answer: 'Kisi bhi din. Ye AMH ki khaasiyat hai. Ye menstrual cycle se affect nahi hota, isliye aaj test karo ya mahine ke kisi bhi din, result same aayega.',
    },
    {
      _key: 'faq3',
      question: 'AMH test ke liye khali pet rehna chahiye?',
      answer: 'Nahi, fasting ki zarurat bilkul nahi hai. Khaana khake bhi test ho sakta hai.',
    },
    {
      _key: 'faq4',
      question: 'Mahilaon mein AMH ka normal range kya hai?',
      answer: 'Reproductive age (20-40 saal) mein 1.0 se 4.0 ng/mL normal maana jaata hai. Age ke saath naturally girti hai. 20s mein zyada hoti hai, 40s mein kam. Apni lab ki reference range bhi zaroor dekhein.',
    },
    {
      _key: 'faq5',
      question: 'AMH high hone ka matlab kya hai?',
      answer: 'High AMH ka sabse common matlab PCOS (Polycystic Ovary Syndrome) hai. Iske alawa kuch mahilaon mein naturally zyada ovarian reserve hota hai. High AMH hamesha buri baat nahi. Doctor se milein aur complete evaluation karayein.',
    },
    {
      _key: 'faq6',
      question: 'AMH low hone ka matlab kya hai?',
      answer: 'Low AMH ovarian reserve mein kami ka signal hai. Ye umar ke saath normal hai, magar young age mein low hai toh doctor se milein. Low AMH se pregnancy impossible nahi, sirf challenging ho sakti hai. Doctor aage ki planning mein help karega.',
    },
    {
      _key: 'faq7',
      question: '30 saal mein AMH kitna hona chahiye?',
      answer: '30 saal mein AMH typically 1.5 se 4.0 ng/mL ke aaspaas hona chahiye. PMC Indian study ke anusaar Indian women mein median AMH 30 saal ki umar mein 3.48 ng/mL ke karib hota hai.',
    },
    {
      _key: 'faq8',
      question: 'AMH test se pregnancy guarantee milti hai kya?',
      answer: 'Nahi. AMH sirf ovarian reserve batata hai, exact pregnancy predict nahi karta. Kai mahilaein low AMH ke saath pregnant hoti hain aur kai high AMH ke bawajood challenges face karti hain.',
    },
    {
      _key: 'faq9',
      question: 'AMH test kab karwana chahiye?',
      answer: 'Jab pregnancy ki planning ho aur zyada time ho gaya ho bina safalta ke. Ya doctor ne PCOS, irregular periods ya early menopause ke liye recommend kiya ho. IVF se pehle bhi ye standard test hai.',
    },
    {
      _key: 'faq10',
      question: 'AMH test kitne time mein aata hai?',
      answer: 'Same day ya 6-8 ghante mein, most NABL labs mein. Kuch labs 24-48 ghante lete hain.',
    },
    {
      _key: 'faq11',
      question: 'Kya AMH test pregnancy mein bhi hota hai?',
      answer: 'Haan, ho sakta hai lekin routine nahi hai. Doctor specific reason pe recommend karta hai jaise ovarian cancer monitoring ya fertility treatment follow-up.',
    },
    {
      _key: 'faq12',
      question: 'AMH aur FSH mein kya fark hai?',
      answer: 'AMH directly ovaries se release hota hai aur ovarian reserve batata hai. FSH pituitary gland se aata hai jo ovaries ko stimulate karta hai. FSH ko cycle ke specific din (day 2-3) karna hota hai, AMH kisi bhi din. Dono milake better picture milti hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya PCOS mein AMH high hota hai?',
      answer: 'Haan. PCOS mein AMH levels typically normal se 2-3x zyada hote hain kyunki bahut saare small follicles hote hain ovaries mein. High AMH plus irregular periods ho toh PCOS evaluation zaroor karwayein.',
    },
    {
      _key: 'faq14',
      question: 'AMH test ki report kaise padhein?',
      answer: 'Apni report mein reference range dekho, lab ke hisaab se alag hoti hai. Usse aage ya peeche hona concern ka point hai. Sirf number mat dekhein, doctor se context samjhein.',
    },
    {
      _key: 'faq15',
      question: 'AMH test painful hota hai kya?',
      answer: 'Nahi. Ek normal blood test hai. Sirf chhoti needle, 2-3 second ka process. Koi injection ya anesthesia nahi.',
    },
    {
      _key: 'faq16',
      question: 'AMH test kab repeat karwayein?',
      answer: 'Agar fertility planning pe hain toh 1-2 saal mein ek baar. Agar treatment chal rahi hai toh doctor ke schedule pe. IVF se pehle har baar fresh test hota hai.',
    },
    {
      _key: 'faq17',
      question: 'AMH aur AFC mein kya fark hai?',
      answer: 'AMH blood se measure hota hai aur hormone level batata hai. AFC yaani Antral Follicle Count ultrasound se hota hai aur directly follicles count karta hai. Dono milake ovarian reserve ki complete picture milti hai.',
    },
    {
      _key: 'faq18',
      question: 'Kya AMH badha sakte hain?',
      answer: 'AMH level ko naturally badhana medically unproven hai. Healthy lifestyle, antioxidant-rich diet aur smoking band karna overall reproductive health ke liye helpful hai. Lekin koi specific food ya supplement AMH ko dramatically change nahi kar sakta. Koi bhi supplement lene se pehle doctor se poochho.',
    },
    {
      _key: 'faq19',
      question: 'AMH ka asar male fertility pe bhi hota hai?',
      answer: 'Purushon mein AMH testicle health indicator hai. Low AMH purusho mein kam testosterone production ya reproductive development issues suggest kar sakta hai. Magar AMH testing mostly women mein hoti hai.',
    },
    {
      _key: 'faq20',
      question: 'AMH test ki sahi timing kya hai?',
      answer: 'Kisi bhi samay, koi restriction nahi. Subah lab jaao, test karo aur report usi din ya agli subah mil jaati hai. Cycle ke kisi bhi din theek hai.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(amh)
    console.log('✅ AMH Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
