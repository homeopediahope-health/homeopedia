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

const semenAnalysis = {
  _id: 'labtest-semen-analysis',
  _type: 'labTest',
  name: 'Semen Analysis (Sperm Test)',
  fullForm: 'Seminal Fluid Analysis / Spermiogram',
  hindiName: 'Virya Jaanch / Shukranu Pariksha',
  slug: { _type: 'slug', current: 'semen-analysis' },
  category: 'Other',
  metaTitle: 'Semen Analysis Normal Range Kya Hai? Sperm Count High Low Matlab (2026)',
  metaDescription: 'Semen Analysis test ki normal range, sperm count high ya low hone ka matlab, kab karaye. WHO 2021 standards pe doctor-reviewed Hinglish guide. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Semen Analysis ek laboratory test hai jo male fertility yaani mard ki bachcha paida karne ki takkat check karne ke liye kiya jaata hai. Isme semen (virya) ke alag-alag parameters ko microscope ke neeche examine kiya jaata hai.

Is test mein doctor ko pata chalta hai ki aapke semen mein kitne sperm (shukranu) hain, woh kitni tezi se aur sahi direction mein chal rahe hain, unki shape kaisi hai aur semen ki overall quality kaisi hai.

Semen do cheezein milake banta hai. Ek sperm cells jo testicles mein bante hain aur doosra seminal fluid jo prostate aur seminal vesicles banate hain. Ye dono milke ek healthy environment banate hain jisme sperm survive karen aur egg tak pahunch saken.

Is test ko sperm test, sperm analysis ya spermiogram bhi kaha jaata hai. WHO 2021 ke updated guidelines ke hisab se is test ke reference values evaluate kiye jaate hain aur India mein bhi NABL-accredited labs inheen standards follow karti hain.`,

  whenToTest: [
    'Ek couple 1 saal se zyada try karne ke bawajood conceive nahi kar pa raha ho',
    'Maa ki umar 35 se upar ho aur 6 mahine mein pregnancy nahi aayi ho',
    'Pehle vasectomy (nasbandi) hui ho aur successful hai ya nahi check karna ho',
    'Vasectomy reversal ke baad effectiveness check karni ho',
    'Hormone imbalance ya testicle related koi problem ho',
    'Scrotum ya testicles pe pehle surgery ya injury hui ho',
    'Family mein infertility ka koi genetic history ho',
    'Testicles mein dard, swelling ya koi discomfort ho',
  ],

  whatItDetects: `Is test se pata chalta hai: sperm count kitna hai (oligospermia ya azoospermia), sperm ki chalane ki takkat kaisi hai (asthenospermia), unki shape normal hai ya nahi (teratospermia), reproductive tract mein infection hai ya nahi, aur ejaculatory duct mein blockage toh nahi.

Male infertility ka sabse common cause is ek test se samajh mein aa jaata hai. Ye test male factor infertility rule out karne ka pehla aur simplest step hai.`,

  normalRanges: [
    { _key: 'volume',      parameter: 'Semen Volume',          normalRange: '>= 1.4',   unit: 'mL',        highBrief: 'Diluted semen',       lowBrief: 'Low secretion / blockage' },
    { _key: 'conc',        parameter: 'Sperm Concentration',   normalRange: '>= 16 M',  unit: 'per mL',    highBrief: 'Usually normal',      lowBrief: 'Oligospermia' },
    { _key: 'total',       parameter: 'Total Sperm Count',     normalRange: '>= 39 M',  unit: 'per ejac.', highBrief: 'Usually normal',      lowBrief: 'Oligospermia / Azoospermia' },
    { _key: 'motility',    parameter: 'Total Motility',        normalRange: '>= 42%',   unit: '%',         highBrief: 'No concern',          lowBrief: 'Asthenospermia' },
    { _key: 'progressive', parameter: 'Progressive Motility',  normalRange: '>= 30%',   unit: '%',         highBrief: 'Usually normal',      lowBrief: 'Poor forward movement' },
    { _key: 'morphology',  parameter: 'Normal Morphology',     normalRange: '>= 4%',    unit: '%',         highBrief: 'Usually normal',      lowBrief: 'Teratospermia' },
    { _key: 'vitality',    parameter: 'Vitality (Live Sperm)', normalRange: '>= 54%',   unit: '%',         highBrief: 'Usually normal',      lowBrief: 'High dead sperm count' },
    { _key: 'liquefaction',parameter: 'Liquefaction Time',     normalRange: '<= 60',    unit: 'minutes',   highBrief: 'Delayed liquefaction', lowBrief: 'N/A' },
    { _key: 'ph',          parameter: 'pH Level',              normalRange: '7.2 - 8.0',unit: 'N/A',       highBrief: 'Possible infection',  lowBrief: 'Ejaculatory duct blockage' },
    { _key: 'wbc',         parameter: 'WBC (White Cells)',     normalRange: '< 1 M',    unit: 'per mL',    highBrief: 'Infection possible',  lowBrief: 'N/A' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'TMC yaani Total Motile Count > 20 million hona chahiye natural conception ke liye',
    riskNote: `Ye test directly pregnancy test nahi hai lekin pregnancy ki koshish kar rahe couples ke liye ye pehla zaroori step hai.

Agar result normal ho toh male factor infertility rule out ho jaata hai. Borderline ya abnormal result ka matlab seedha infertility nahi hai. Bahut se men borderline range mein bhi naturally conceive karte hain.

Total Motile Count (TMC) = Total Sperm Count x Progressive Motility%. TMC 20 million se upar ho toh natural conception possible hai. 5 se 20 million ke beech ho toh IUI helpful ho sakti hai. 5 million se kam ho toh IVF ya ICSI consider kiya jaata hai.`,
    whenDoctor: 'Abnormal result aane pe 2 se 3 mahine baad repeat test karo kyunki sperm continuously bante hain aur cycle 74 din ki hoti hai. Is beech lifestyle improve karo aur doctor ki guidance lo.',
  },

  highMeans: [
    'pH level 8 se upar aaye toh reproductive tract infection ka sign ho sakta hai jaise prostatitis ya seminal vesiculitis',
    'WBC count 1 million per mL se upar aaye toh bacterial infection possible hai (prostatitis, epididymitis)',
    'High WBC se sperm DNA fragmentation bhi badh sakti hai',
    'Sperm concentration bahut high ho toh kuch cases mein sperm clumping (agglutination) ho sakta hai',
  ],

  highReassurance: 'High values zyaadaatar harmless hote hain ya easily treatable infection indicate karte hain. Doctor se poori report dikhao, woh complete picture dekhte hain.',

  lowMeans: [
    'Varicocele yaani testicle ki veins ki swelling (India mein male infertility ka most common cause)',
    'Hormonal imbalance jaise low testosterone ya high FSH/LH',
    'Mumps infection jo testicles tak pahunchi ho',
    'Zyada garmi ka exposure, tight underwear, laptop on lap, hot baths',
    'Smoking, alcohol ya anabolic steroids ka use',
    'Chemotherapy ya radiation treatment ki history',
    'Genetic conditions jaise Klinefelter syndrome',
    'Blocked vas deferens ya ejaculatory ducts (azoospermia ka cause)',
  ],

  lowConcern: 'Ghabrao mat. Lifestyle changes, treatment aur samay se bahut se parameters improve ho sakte hain. Sperm regeneration cycle 74 din ki hoti hai yaani aaj ki lifestyle changes 2 se 3 mahine mein result mein dikhne lagti hain.',

  redFlags: [
    'Semen mein blood dikhe (hematospermia)',
    'Testicles mein dard ya swelling ho',
    'Ejaculation mein dard ho',
    'Azoospermia report aaye yaani zero sperm',
    'Total Motility 10% se kam ho',
    'WBC count bahut zyada high ho',
    'Total Motile Count (TMC) 5 million se kam aaye',
    'Morphology 1 ya 2% se bhi kam aaye',
  ],

  emergencyLevel: 'Azoospermia aate hi specialist se milna zaroori hai. Turant evaluation chahiye kyunki obstructive azoospermia surgically treatable ho sakta hai aur jaldi diagnosis zyada options deti hai.',

  selfTreatWarning: 'Report dekhkar khud koi supplement, herbal medicine ya dawa mat shuru karo. Doctor ko report dikhao, woh poori history aur physical exam ke baad sahi guidance denge.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Subah ka waqt preferred hai kyunki sperm quality generally better hoti hai',
    whatToEat: 'Koi food restriction nahi hai. Khana pina normal rakho.',
    whatToAvoid: 'Test se 2 se 5 din pehle sexual abstinence zaroori hai. 2 din se kam ho toh count low aayega aur 5 din se zyada ho toh dead sperm zyada honge. Alcohol kam se kam 3 din pehle band karo. Hot tub, sauna, tight underwear aur heavy cycling avoid karo.',
    medicineNote: 'Koi bhi regular medicine le rahe ho toh doctor ko zaroor batao. Testosterone therapy, kuch antibiotics aur steroids semen quality affect karte hain.',
    accuracyNote: 'Lab pe hi sample dena sabse best hai. Agar ghar se la rahe hain toh sterile container mein body temperature pe rakhte hue 30 se 45 minute mein lab pahunchao. Condom mein collect mat karo kyunki usme spermicide hoti hai.',
  },

  sampleInfo: {
    sampleType: 'Semen (masturbation dwara, sterile container mein)',
    sampleAmount: 'Poora ejaculate, lagbhag 2 se 5 mL',
    reportTime: 'Basic analysis same day ya 24 ghante mein. DNA fragmentation jaisi advanced tests ke liye 2 se 3 din extra.',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Semen Analysis se confirm ho jaata hai ki main fertile hoon ya nahi',
      truth: '30% men with normal semen analysis mein bhi sperm function problems ho sakti hain. Aur bahut se men borderline results ke bawajood naturally conceive karte hain. Ye ek indicator hai, fertility certificate nahi.',
    },
    {
      _key: 'myth2',
      myth: 'Sirf ek test kafi hai final answer ke liye',
      truth: 'WHO guidelines ke mutabiq 2 se 3 separate tests 2 se 3 mahine ke interval pe lene chahiye tabhi reliable conclusion niklta hai. Sperm quality din-pratidin vary karti hai.',
    },
    {
      _key: 'myth3',
      myth: 'Low sperm count ka matlab koi ilaaj nahi',
      truth: 'Oligospermia ke bahut se treatable causes hain. Varicocele surgery se 40 se 70% men mein improvement hoti hai. Lifestyle changes bhi 2 se 3 mahine mein significant difference la sakti hain.',
    },
    {
      _key: 'myth4',
      myth: 'Semen Analysis bahut painful aur embarrassing test hai',
      truth: 'Sample collection simple masturbation se hoti hai aur lab mein private room hota hai. Ye ek routine test hai. Bilkul normal hai is test ke liye jaana.',
    },
    {
      _key: 'myth5',
      myth: '4% normal morphology matlab 96% sperm kharab hain',
      truth: 'WHO ke reference range mein 4% lower cutoff hai. Fertile men mein bhi average sirf 4% sperm textbook-perfect shape ke hote hain. Baaki mein minor variations hoti hain jo fertilization mein zyaadaatar matter nahi karti.',
    },
    {
      _key: 'myth6',
      myth: 'Semen Analysis sirf tab hota hai jab problem bahut serious ho',
      truth: 'Ye infertility workup ka pehla aur simplest test hai. Agar couple 1 saal se try kar raha ho toh yahi first step hota hai.',
    },
    {
      _key: 'myth7',
      myth: 'Ghar pe test kit se accurate result aa jaata hai',
      truth: 'Home kits sirf sperm count measure karti hain. Motility, morphology, pH aur WBC kuch check nahi hota. Lab mein trained technician se poora analysis karaana zyada accurate hota hai.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'DNA Fragmentation Test',
      comparedTestSlug: 'sperm-dna-fragmentation',
      differencePoints: [
        'Kya check karta hai | Sperm quantity aur quality | Sperm DNA damage level',
        'Kab kiya jaata hai | First step in infertility workup | 2 abnormal semen tests ke baad',
        'Sample type | Semen | Semen',
        'Report time | Same day ya 24 ghante | 2 se 3 din',
        'Kab recommend | Har infertility case mein | Recurrent IVF failure mein',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'Hormone Panel (FSH/LH/Testosterone)',
      comparedTestSlug: 'hormone-panel-male',
      differencePoints: [
        'Kya check karta hai | Sperm count, motility, morphology | Hormonal causes of problem',
        'Kab kiya jaata | Pehla test | Jab count bahut low ho',
        'Sample type | Semen | Blood',
        'Report time | Same day ya 24 ghante | 24 se 48 ghante',
        'Kab recommend | Har infertility workup mein | Azoospermia ya very low count mein',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'Scrotal Ultrasound',
      comparedTestSlug: 'scrotal-ultrasound',
      differencePoints: [
        'Kya check karta hai | Sperm quality parameters | Testicle structure aur varicocele',
        'Kab kiya jaata | First line screening | Jab varicocele suspect ho',
        'Sample type | Semen | Imaging (koi sample nahi)',
        'Report time | Same day | Same day',
        'Kab saath mein | Aksar dono saath hote hain infertility workup mein | Varicocele confirm karne ke liye',
      ],
    },
  ],

  repeatInfo: `Initial abnormal result aane par 2 se 3 mahine baad repeat karo. Sperm regeneration cycle 74 din ki hoti hai. Is beech lifestyle changes ke results bhi dikhne lagte hain.

Treatment ke baad: Varicocele surgery ke baad 3 se 6 mahine baad repeat karo. Antibiotic treatment ke baad 4 se 6 hafte baad. Hormone therapy ke baad 3 mahine baad.

Normal result pe routine check ki zaroorat nahi hoti. Vasectomy ke baad effectiveness confirm karne ke liye surgery ke 8 se 16 hafte baad ek test karo.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Male Infertility', diseaseSlug: 'male-infertility', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Varicocele', diseaseSlug: 'varicocele', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Hypogonadism', diseaseSlug: 'hypogonadism', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Prostatitis', diseaseSlug: 'prostatitis', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Ejaculatory Duct Obstruction', diseaseSlug: 'ejaculatory-duct-obstruction', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Epididymitis', diseaseSlug: 'epididymitis', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Hormone Panel (FSH, LH, Testosterone)', testSlug: 'hormone-panel-male', isAvailable: false },
    { _key: 'rt2', testName: 'Sperm DNA Fragmentation Test', testSlug: 'sperm-dna-fragmentation', isAvailable: false },
    { _key: 'rt3', testName: 'Scrotal Ultrasound', testSlug: 'scrotal-ultrasound', isAvailable: false },
    { _key: 'rt4', testName: 'Karyotyping / Genetic Test', testSlug: 'karyotyping', isAvailable: false },
    { _key: 'rt5', testName: 'Anti-Sperm Antibody Test', testSlug: 'anti-sperm-antibody', isAvailable: false },
    { _key: 'rt6', testName: 'CBC Test', testSlug: 'cbc-test', isAvailable: true },
  ],

  homeopathyAngle: `Ek abnormal report se ghabrana zaruri nahi, bahut se causes treatable hain.

Apni report lekar ek qualified doctor se milein. Conventional medicine mein varicocele ke liye surgery, hormone therapy ya antibiotics di jaati hain.

Homeopathy mein ek alag approach li jaati hai. Symptom treat karne ki jagah overall health aur underlying cause address kiya jaata hai. Baar baar abnormal results aane pe ya jab koi specific cause nahi milta, homeopathic treatment individual constitution ko dekh ke diya jaata hai. Poori health history, lifestyle aur stress factors consider kiye jaate hain. Side effects practically nahi hote.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Semen Analysis test kya hota hai?',
      answer: 'Semen Analysis ek laboratory test hai jo male reproductive health aur fertility assess karne ke liye kiya jaata hai. Isme semen sample mein sperm count, motility, morphology, volume aur pH jaisi cheezein check hoti hain. Infertility workup ka pehla aur most important step hai.',
    },
    {
      _key: 'faq2',
      question: 'Ye test kab karaya jaata hai?',
      answer: 'Jab couple 1 saal (ya 35+ ki age mein 6 mahine) try karne ke baad conceive nahi kar pa raha ho toh doctor ye test likhte hain. Vasectomy ya vasectomy reversal ke baad bhi hota hai. Testicle mein dard, swelling ya hormonal problem mein bhi doctor suggest karte hain.',
    },
    {
      _key: 'faq3',
      question: 'Semen Analysis se kya pata chalta hai?',
      answer: 'Sperm count (oligospermia ya azoospermia), sperm ki chalane ki takkat (asthenospermia), unki shape (teratospermia), reproductive tract infection aur ejaculatory duct blockage detect ho sakti hai. Male infertility ka most common cause is test se samajh mein aata hai.',
    },
    {
      _key: 'faq4',
      question: 'Normal sperm count kitna hona chahiye?',
      answer: 'WHO 2021 ke guidelines ke mutabiq sperm concentration kam se kam 16 million per mL aur total sperm count 39 million per ejaculate hona chahiye. Lekin sirf count nahi, motility aur morphology bhi utne hi important parameters hain.',
    },
    {
      _key: 'faq5',
      question: 'Semen Analysis ki taiyari kaise karein?',
      answer: 'Sabse zaroori hai 2 se 5 din ka sexual abstinence test se pehle. Alcohol 3 se 5 din pehle band karein. Hot tub, sauna, tight underwear avoid karein. Subah dena better hai. Fasting ki zaroorat nahi, khana pina normal rakhen.',
    },
    {
      _key: 'faq6',
      question: 'Motility ka normal range kya hai?',
      answer: 'Total motility kam se kam 42% honi chahiye yaani 100 mein se 42 sperm kisi bhi direction mein move kar rahe hon. Progressive motility kam se kam 30% honi chahiye. Fertilization ke liye ye most critical parameters hain.',
    },
    {
      _key: 'faq7',
      question: 'Morphology 4% normal kaise hai, itni kam kyun?',
      answer: 'WHO ke reference range mein 4% lower cutoff hai. Fertile men mein bhi average sirf 4% sperm perfect shape mein hote hain. Ye WHO ki normal threshold hai, isse upar koi bhi value acceptable hai. Akele morphology se fertility determine nahi hoti.',
    },
    {
      _key: 'faq8',
      question: 'Test report kitne time mein aati hai?',
      answer: 'Basic semen analysis ki report same day ya 24 ghante mein aa jaati hai. DNA fragmentation ya detailed morphology staining ho toh 2 se 3 din extra lag sakte hain. Zyaadaatar labs online ya WhatsApp pe report deti hain.',
    },
    {
      _key: 'faq9',
      question: 'Ghar pe semen test kit se kaam chalega?',
      answer: 'Home kits sirf sperm count detect karti hain. Motility, morphology, pH aur WBC count check nahi hota. Lab mein poora semen analysis zyada accurate aur comprehensive hota hai. Home kit ek rough indicator hai, final result ke liye lab zaroori hai.',
    },
    {
      _key: 'faq10',
      question: 'Ek baar mein report abnormal aayi toh kya main infertile hoon?',
      answer: 'Bilkul nahi. Sperm quality din-pratidin vary karti hai. Stress, bimari, garmi, neend, alcohol ek test result affect kar sakta hai. WHO guidelines kehti hain ki 2 se 3 separate tests 2 se 3 mahine ke interval pe lene chahiye. Ghabrao mat, doctor se milein.',
    },
    {
      _key: 'faq11',
      question: 'Azoospermia matlab kya hai?',
      answer: 'Azoospermia matlab semen mein zero sperm. Ye 2 types ka hota hai. Obstructive mein duct mein blockage hai aur sperm bante hain lekin aa nahi sakte. Non-obstructive mein testicle sperm bana hi nahi raha. Obstructive azoospermia kaafi cases mein surgically treatable hai.',
    },
    {
      _key: 'faq12',
      question: 'Varicocele aur semen analysis ka kya connection hai?',
      answer: 'Varicocele yaani testicular veins ki swelling India mein male infertility ka most common treatable cause hai. Ye testicle ka temperature badh deta hai jisse sperm quality affect hoti hai. Semen analysis mein low count ya motility aaye aur ultrasound pe varicocele mile toh surgery se 40 se 70% men mein improvement hoti hai.',
    },
    {
      _key: 'faq13',
      question: 'Lifestyle kaise affect karti hai sperm quality ko?',
      answer: 'Smoking sperm DNA damage karti hai. Alcohol testosterone level kam karta hai. Obesity hormonal imbalance karti hai. Tight underwear aur laptop on lap testicle temperature badhate hain. Stress cortisol badhata hai jo testosterone aur sperm production affect karta hai. Acchi baat ye hai ki ye sab reversible hain. Lifestyle change ke 3 mahine baad improvement dikhti hai.',
    },
    {
      _key: 'faq14',
      question: 'Semen mein blood (hematospermia) aana dangerous hai?',
      answer: 'Hematospermia most cases mein self-limiting hota hai yaani apne aap theek ho jaata hai aur aksar infection ya minor injury ka result hota hai. Lekin baar baar ho ya saath mein dard ya testicle swelling ho toh doctor ko zaroor dikhao.',
    },
    {
      _key: 'faq15',
      question: 'Semen Analysis report ke baad aage kya karna chahiye?',
      answer: 'Report seedha doctor ko dikhao. Khud internet pe padh ke supplement ya dawa mat shuru karo. Doctor complete picture dekhte hain yaani aapki history, physical exam, partner ki fertility status aur zaroorat pade toh hormone tests ya ultrasound. Akele ye test final diagnosis nahi deta.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(semenAnalysis)
    console.log('✅ Semen Analysis seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
