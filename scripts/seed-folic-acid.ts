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

const folicAcid = {
  _id: 'vitamin-folic-acid',
  _type: 'vitamin',
  name: 'Folic Acid (Vitamin B9)',
  hindiName: 'Garbh Rakshak Vitamin / Folic Acid',
  category: 'Vitamin',
  slug: { _type: 'slug', current: 'folic-acid' },
  metaTitle: 'Folic Acid Ki Kami: Lakshan, Foods & Homeopathic Ilaj',
  metaDescription: 'Folic acid ki kami ke lakshan, vegetarian food sources, normal range aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: 'Mere paas jo young working women aati hain recurrent mouth ulcers ke saath aur unexplained thakan — unme se bahut saari mein folic acid deficiency milti hai, especially jinka breakfast skip karna ka routine hai aur dal-sabzi sirf dinner mein hi hoti hai. MTHFR mutation angle bhi check karna shuru kiya hai — kuch patients mein regular folic acid se response nahi tha, L-methylfolate se fark aaya.',

  quickFacts: {
    indiaPrevalence: 'India mein pregnant mahilaon mein ~24% ko folate deficiency hoti hai aur ~21% ko "possible deficiency" — PubMed India study (Krishnaveni et al., 2018). Folic acid fortification program abhi bhi India mein mandatory nahi hai.',
    commonDeficiencySign: 'Megaloblastic Anaemia — red blood cells abnormally bade ho jaate hain, jisse thakan, kamzori aur sar dard hota hai.',
    mainFoodSource: 'Masoor Dal (Red Lentil) — 1 katori pakne ke baad ~180 mcg folic acid milta hai, jo adult ki ~45-50% zaroorat puri karta hai.',
    normalRangeQuick: 'Serum Folate: 3.1–17.5 ng/mL | Kami: <3 ng/mL (Metropolis India data)',
  },

  whatIsIt: `Folic Acid, jise Vitamin B9 ya Folate bhi kehte hain, ek water-soluble B-vitamin hai. Ye body mein naye cells banane, DNA repair karne, aur red blood cells theek tarah se mature karne ke liye zaroori hai.

Pregnancy mein ye vitamin sabse critical hota hai — baby ki neural tube (jo baad mein brain aur spinal cord banti hai) sirf pehle 28 din mein close hoti hai, jab bahut si mahilaon ko pata bhi nahi hota ki wo pregnant hain. Isliye ise "Garbh Rakshak Vitamin" kaha jaata hai. India mein folic acid fortification abhi mandatory nahi hai, isliye deficiency zyada common hai.`,

  bodyFunctions: [
    'DNA synthesis aur repair — har naye cell ke liye DNA ki nayi copy chahiye; folic acid ye process enable karta hai',
    'Red blood cells ka mature hona — kami mein RBC abnormally bade aur kam effective ho jaate hain (megaloblastic anaemia)',
    'Neural tube development (pregnancy mein) — baby ki reedh ki haddi aur brain ki initial formation ke liye pehle 4 hafte mein critical',
    'Homocysteine control — blood mein homocysteine level normal rakhta hai; zyada homocysteine heart disease ka risk badhata hai',
    'Amino acid metabolism — glycine, serine, methionine jaise amino acids ke conversion mein zaroori coenzyme',
    'Cell division support — rapidly dividing cells (bone marrow, gut lining) mein iska role sabse critical hai',
    'Protein synthesis — haemoglobin aur doosre proteins banane mein indirect support',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Thakan aur kamzori — anaemia ki wajah se oxygen delivery kam hoti hai, din bhar lethargy feel hoti hai',
      'Pal karna ya tez dil dhadakna — heart oxygen ki kami compensate karne ki koshish karta hai',
      'Saans lene mein taklif (exertion pe) — blood mein haemoglobin kam hone ka direct result',
    ],
    energyMoodBrain: [
      'Dhyan lagana mushkil hona, concentration mein kami — brain ke cells bhi folic acid pe depend karte hain',
      'Irritability, mood swings, depression ke signs — low folate se brain ke neurotransmitters affect hote hain',
      'Sar dard — anaemia ki wajah se brain ko poora oxygen nahi milta',
    ],
    skinHairNails: [
      'Munh ke andar chaale (mouth ulcers) — bahut common aur early sign; India mein sabse ignore kiya jaata',
      'Jeebh mein sujan ya laal rang (glossitis) — tongue sooth ja sakti hai',
      'Skin pale pad jaana — haemoglobin kami se skin mein colour kam hota hai',
      'Baalon ka zyada jharna — cell division slow hone se hair follicles affected hote hain',
    ],
    other: [
      'Pregnancy mein neural tube defects risk — spina bifida, anencephaly (deficiency ka direct consequence)',
      'Low birth weight — proper cell development nahi hoti',
      'Babies mein mouth ulcers, poor weight gain — bacchon mein kami jaldi asar karti hai',
      'Pregnancy mein zyada thakan — anaemia ki wajah se, normal pregnancy thakan se alag',
    ],
  },

  deficiencyCauses: [
    'Vegetarian / vegan diet — leafy greens aur dals kam ya zyada pakana (heat se 50-70% folate destroy); India mein sabse common',
    'Pregnancy aur breastfeeding — body ki demand kaafi badhti hai; single biggest reason India mein kami ka',
    'Alcohol consumption — folate absorption directly block karta hai liver mein; even moderate drinking matters',
    'Celiac disease, IBD (Crohn\'s), ya gastrointestinal problems — small intestine theek se absorb nahi karti',
    'Kuch medicines: Methotrexate, Phenytoin, Phenobarbital, Metformin (diabetes), oral contraceptives — sab folate levels gira sakte hain',
    'Kidney dialysis patients — har session mein folate blood se nikal jaata hai',
    'MTHFR gene mutation — India mein common; is variant mein body folic acid ko active form mein convert nahi kar paati efficiently',
  ],

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',        normal: '3.1–17.5 ng/mL', deficient: '< 3.0 ng/mL', toxic: 'Supplement se high — B12 bhi check karo', unit: 'ng/mL (Serum Folate)' },
    { _key: 'nr2', category: 'Adult Female',       normal: '3.0–17.5 ng/mL', deficient: '< 3.0 ng/mL', toxic: 'Supplement se high — generally safe', unit: 'ng/mL (Serum Folate)' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)', normal: '5.0–21.0 ng/mL', deficient: '< 5.0 ng/mL', toxic: 'Monitor closely', unit: 'ng/mL (Serum Folate)' },
    { _key: 'nr4', category: 'Pregnancy ⭐',        normal: '> 10 ng/mL',     deficient: '< 5.0 ng/mL = CRITICAL; neural tube defect risk', toxic: 'High-dose only under doctor', unit: 'ng/mL (Serum Folate)' },
    { _key: 'nr5', category: 'Elderly (60+)',       normal: '3.1–17.5 ng/mL', deficient: '< 3.0 ng/mL', toxic: '—', unit: 'ng/mL (Serum Folate)' },
    { _key: 'nr6', category: 'RBC Folate (accurate)', normal: '150–628 ng/mL', deficient: '< 140 ng/mL — long-term deficiency confirmed', toxic: '—', unit: 'ng/mL (RBC Folate)' },
  ],

  vegSources: [
    { _key: 'vs1', food: 'Lobia / Chawli (Black-eyed Peas)', quantity: '1 katori paki',    amount: '~210 mcg' },
    { _key: 'vs2', food: 'Masoor Dal (Red Lentil)',           quantity: '1 katori paka',    amount: '~180 mcg' },
    { _key: 'vs3', food: 'Chana Dal',                         quantity: '1 katori paka',    amount: '~160 mcg' },
    { _key: 'vs4', food: 'Palak (Spinach)',                    quantity: '1 katori paka',    amount: '~130 mcg' },
    { _key: 'vs5', food: 'Soya Bean',                          quantity: '1 katori paki',    amount: '~110 mcg' },
    { _key: 'vs6', food: 'Moong Dal',                          quantity: '1 katori paki',    amount: '~100 mcg' },
    { _key: 'vs7', food: 'Methi ke Patte (Fenugreek Leaves)', quantity: '1 katori',         amount: '~90 mcg' },
    { _key: 'vs8', food: 'Aam (Mango)',                        quantity: '1 medium (pakka)', amount: '~70 mcg' },
    { _key: 'vs9', food: 'Mungfali (Peanuts)',                 quantity: 'Mutthi bhar bhunje', amount: '~60 mcg' },
    { _key: 'vs10', food: 'Santara (Orange)',                  quantity: '1 medium',         amount: '~40 mcg' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Murgi ka Jigar (Chicken Liver)', quantity: '75g paka', amount: '~250–300 mcg' },
    { _key: 'nv2', food: 'Anda (Egg)',                      quantity: '2 whole eggs', amount: '~40 mcg' },
    { _key: 'nv3', food: 'Machli (Fish, average)',           quantity: '100g', amount: '~15–25 mcg' },
  ],

  sunlightNote: 'Folic acid sunlight se nahi milta — ye sirf khane ya supplement se milta hai. IMPORTANT cooking tip: Folate heat-sensitive hai — vegetables ko zyada der tak mat ubaalein. Palak: 2-3 min se zyada mat pakao. Dals: Pressure cook ke baad zyada boil mat karo. Cover karke pakao — pani mein folate dissolve ho jaata hai. Dal-palak combination (masoor dal + palak) ek bowl dinner mein adult ki ~70-80% zaroorat cover kar sakta hai.',

  dailyRequirement: [
    { _key: 'dr1', ageGroup: '0–6 months',   male: '25 mcg',      female: '25 mcg',      pregnancy: '—',       breastfeeding: '—',       unit: 'mcg/day (ICMR-NIN 2020)' },
    { _key: 'dr2', ageGroup: '6–12 months',  male: '85 mcg',      female: '85 mcg',      pregnancy: '—',       breastfeeding: '—',       unit: 'mcg/day' },
    { _key: 'dr3', ageGroup: '1–6 saal',     male: '120–135 mcg', female: '120–135 mcg', pregnancy: '—',       breastfeeding: '—',       unit: 'mcg/day' },
    { _key: 'dr4', ageGroup: '7–12 saal',    male: '170–220 mcg', female: '170–225 mcg', pregnancy: '—',       breastfeeding: '—',       unit: 'mcg/day' },
    { _key: 'dr5', ageGroup: '13–18 saal',   male: '285–340 mcg', female: '245–270 mcg', pregnancy: '—',       breastfeeding: '—',       unit: 'mcg/day' },
    { _key: 'dr6', ageGroup: '19–59 saal',   male: '300 mcg',     female: '220 mcg',     pregnancy: '570 mcg', breastfeeding: '330 mcg', unit: 'mcg/day' },
    { _key: 'dr7', ageGroup: '60+ saal',     male: '300 mcg',     female: '200 mcg',     pregnancy: '—',       breastfeeding: '—',       unit: 'mcg/day' },
  ],

  pregnancyInfo: {
    howImportant: 'Pregnancy mein folic acid SABSE important nutrients mein se ek hai. Baby ki neural tube sirf pehle 23-28 din mein close hoti hai — jab bahut si mahilaon ko pregnancy ka pata bhi nahi hota. Isliye supplementation pregnancy confirm hone se PEHLE shuru karna chahiye — ideally 1-3 mahine pehle. India mein government ke IFA (Iron + Folic Acid) tablets FREE milte hain government health centres pe.',
    dailyRequired: '570 mcg/day (ICMR-NIN 2020) | Food + supplement combined. High-risk cases mein 5 mg/day — sirf doctor ke under.',
    babyEffects: [
      'Spina Bifida — reedh ki haddi theek se close nahi hoti',
      'Anencephaly — baby ka brain/skull properly develop nahi hota (bahut serious condition)',
      'Low birth weight aur premature delivery ka risk',
      'Placental abruption ka risk (kuch studies mein link)',
    ],
    supplementSafe: true,
    doctorLine: 'Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein — especially high-risk cases mein (previous neural tube defect history) doctor 5 mg ki higher dose recommend kar sakte hain.',
  },

  childrenInfo: {
    deficiencySymptoms: [
      'Weight gain slow hona, growth ruk jaana',
      'Mouth ke andar chaale baar baar aana',
      'Zyada thakan, khel-kood mein interest kam hona',
      'Pallor — skin pale hona; anaemia ka sign',
      'Diarrhea ya loose motions recurring',
    ],
    ageWiseRequirement: '0–6 months: 25 mcg/day\n6–12 months: 85 mcg/day\n1–6 saal: 120–135 mcg/day\n7–12 saal: 170–220 mcg/day\n13–18 saal: 250–340 mcg/day\n(Source: ICMR-NIN 2020)',
    foodSources: 'Dal, palak, methi, ande, moong — ye sab bacchon ke daily khane mein shamil hone chahiye. Roz ki dal ki sabzi aur ek bowl palak/methi bachche ki zaroorat kaafi had tak puri kar sakta hai.',
    supplementNote: 'Healthy bacche jo balanced diet le rahe hain unhe supplement ki zaroorat nahi. Agar bachche ko mouth ulcers baar baar ho rahe hain, growth slow hai, ya anaemia ke signs hain — doctor se test karake hi supplement dein. Apne mann se mat dein.',
  },

  labTestInfo: {
    testName: 'Serum Folate Test (ya Folic Acid Serum Test) | RBC Folate Test (zyada accurate)',
    testSlug: 'folic-acid-test',
    normalRange: 'Serum Folate: 3.1–17.5 ng/mL | RBC Folate: 150–628 ng/mL | Kami: Serum <3 ng/mL / RBC <140 ng/mL',
    whenToTest: 'Baar baar munh ke chaale, thakan, anaemia ke signs pe. Pregnancy planning se pehle (preconception test). Epilepsy, arthritis, ya diabetes ki medicines le rahe hain to. Celiac disease ya IBD diagnosis hai to.',
    repeatAfter: 'Supplement shuru karne ke 3 mahine baad repeat test se level check karo',
    priceRange: 'Serum Folate: ₹500–₹900 | RBC Folate: ₹800–₹1500 (Metropolis, Dr. Lal PathLabs — home collection available)',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Folic Acid (Synthetic — Standard Form)',
      benefits: ['Sabse zyada research; most affordable', 'Government IFA tablet mein available', 'Pregnancy ke liye WHO/ICMR approved', 'India mein easily available'],
      drawbacks: ['MTHFR mutation wale log isse properly convert nahi kar sakte active form mein', 'Bahut zyada dose B12 deficiency mask kar sakta hai'],
      bestFor: 'General public, pregnancy (standard dose), anaemia treatment, affordable option',
    },
    {
      _key: 'sf2',
      formName: 'L-Methylfolate (5-MTHF — Active / Methylated Form)',
      benefits: ['Body mein directly use hota hai — convert karne ki zaroorat nahi', 'MTHFR mutation wale logon ke liye better', 'Depression mein kuch studies mein zyada effective'],
      drawbacks: ['Mehnga (₹₹₹)', 'India mein less available pharmacies mein', 'Standard folic acid se alag reaction ho sakta hai'],
      bestFor: 'MTHFR mutation diagnosed patients, depression ke saath folate kami, jo standard folic acid se response nahi aa raha',
    },
    {
      _key: 'sf3',
      formName: 'Folinic Acid (Leucovorin — Prescription Only)',
      benefits: ['Methotrexate therapy ke side effects reduce karne ke liye', 'Directly active form'],
      drawbacks: ['Prescription medicine hai — counter pe nahi milti', 'Sirf specific medical conditions mein use hoti hai'],
      bestFor: 'Cancer/arthritis mein methotrexate le rahe patients — sirf doctor ke under',
    },
    {
      _key: 'sf4',
      formName: 'Iron + Folic Acid Tablet (IFA — Combined)',
      benefits: ['India mein sabse common; govt hospitals mein FREE', 'Pregnancy mein dono nutrients ek saath milte hain', 'Convenient — ek tablet mein dono'],
      drawbacks: ['Iron side effects — constipation, nausea', 'Agar sirf folic acid chahiye to unnecessary iron dose'],
      bestFor: 'Pregnant mahilayein, anaemia ke saath folic acid kami',
    },
  ],

  supplementTiming: {
    bestTime: 'Subah breakfast ke saath — water-soluble vitamin hai, din bhar utilization hoti hai',
    withFood: 'Khane ke saath ya khane ke turant baad — absorption better hoti hai aur stomach upset nahi hoti. Khali pet avoid karein.',
    takenWith: 'Ek glass normal paani ke saath. Chai/coffee ke saath direct mat lo — ek ghante ka gap rakhein.',
    absorptionTips: [
      'Vitamin B12 ke saath lo — dono milkar zyada effective hain; B12 ke bina high-dose folic acid B12 deficiency mask kar sakti hai',
      'Vitamin C (nimbu pani) saath mein — overall absorption improve hoti hai',
      'Dal-palak jaise folate-rich khana regular khaao — supplements sirf support hain, food replace nahi karte',
      'Iodized namak use karo cooking mein — complete nutrition ke liye',
    ],
    avoidWith: [
      'Chai/coffee ke bilkul saath — ek ghante ka gap rakhein; tannins absorption affect karte hain',
      'Antacids ke saath ek saath nahi — 2 ghante ka gap rakhein',
      'Phenytoin (epilepsy medicine) ke saath lene se us medicine ka level affect ho sakta hai — doctor se zaroor poochhein',
      'Methotrexate ke din — same day pe nahi; doctor ki specific timing follow karein',
    ],
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Methotrexate (Cancer / Rheumatoid Arthritis)', reason: 'Folic acid methotrexate ki cancer-effectiveness reduce kar sakta hai; same day nahi lena — doctor se timing poochhein' },
    { _key: 'di2', medicineName: 'Phenytoin / Phenobarbital / Primidone (Epilepsy)', reason: 'Folic acid in medicines ka blood level reduce kar sakta hai — seizure control affect ho sakta hai; neurologist se pehle poochhein' },
    { _key: 'di3', medicineName: 'Sulfasalazine (IBD / Rheumatoid Arthritis)', reason: 'Ye medicine folic acid absorption ko directly block karti hai; long-term use mein deficiency ka high risk' },
    { _key: 'di4', medicineName: 'Metformin (Diabetes) / Trimethoprim (Antibiotic)', reason: 'Dono folate metabolism mein interfere karte hain; long-term Metformin pe annual folate + B12 test zaroor karwayein' },
    { _key: 'di5', medicineName: 'Oral Contraceptive Pills (OCP — Long-term)', reason: 'Folate levels gradually gira sakte hain; pregnancy plan karne se 3 mahine pehle folate levels check karwaayein' },
  ],

  combinations: {
    beneficial: [
      { _key: 'cb1', nutrient: 'Vitamin B12', reason: 'Dono milkar ek doosre ko support karte hain; megaloblastic anaemia mein dono saath diye jaate hain; B12 ke bina high-dose folate nerve damage mask kar sakta hai' },
      { _key: 'cb2', nutrient: 'Iron',        reason: 'Anaemia mein iron + folic acid India ka standard treatment hai (IFA tablet); dono milkar red blood cell production better hoti hai' },
      { _key: 'cb3', nutrient: 'Vitamin C',   reason: 'Overall nutrient absorption improve hoti hai; nimbu paani ke saath daily diet — dal ke saath nimbu squeeze karna achha habit hai' },
    ],
    avoid: [
      { _key: 'ca1', nutrient: 'Phenytoin (same time pe)', reason: 'Seizure medicine ka blood level affect ho sakta hai — alag time pe lo' },
      { _key: 'ca2', nutrient: 'Methotrexate (same day)', reason: 'Cancer treatment mein effectiveness reduce ho sakti hai — doctor ki specific timing follow karo' },
    ],
    timingGuide: 'Subah lo: Folic Acid / IFA tablet (breakfast ke saath)\nRaat lo: Calcium (agar lete hain — iron ke competition se bachne ke liye)\nGap rakhein: Antacids se 2 ghante, chai/coffee se 1 ghante ka gap',
  },

  toxicity: {
    upperLimit: 'Adults ke liye: 1000 mcg (1 mg) per day — NIH. Is se upar sirf doctor ki direct supervision mein. Note: Standard supplement doses (400–570 mcg) is limit se kaafi door hain — safe hain.',
    sideEffects: [
      'Vitamin B12 deficiency MASK ho jaati hai — sabse bada danger: anaemia theek lagti hai par nerve damage andar se hoti rehti hai silently',
      'Nausea, bloating, munh mein kadwa taste',
      'Sleep mein problem (rare, high doses pe)',
      'Skin reaction (rare)',
      'Kidney patients mein dose accumulation ka risk',
    ],
    whenSerious: 'Agar B12 deficiency hai aur high-dose folic acid le rahe hain without knowing — neurological damage irreversible ho sakti hai. Iske saath B12 test zaroori hai. Neurological symptoms (haath-pair mein jhunjhunahat, weakness, balance issues) ke saath turant doctor ke paas jaayein.',
  },

  timeline: {
    bloodLevelTime: 'Serum folate level supplement shuru karne ke 1–2 hafte mein improve hone lagta hai. RBC folate level 2–3 mahine mein normal range mein aata hai (RBC ki lifespan ~120 din hoti hai).',
    symptomsTime: 'Mouth ulcers: 2–4 hafte | Thakan aur energy: 4–6 hafte | Anaemia ke symptoms: 6–8 hafte | Hair fall: 3–6 mahine (sabse slow improvement)',
    fullRecoveryTime: 'Serum folate: 2–4 hafte | RBC folate (tissue stores): 3–4 mahine | Full anaemia correction: 4–6 mahine',
    repeatTestTime: 'Supplement shuru karne ke 3 mahine baad test repeat karaye. Pregnancy mein doctor regular monitoring recommend karte hain.',
    patientNote: 'Ek hafte mein dramatic fark expect mat karo — folic acid ki deficiency months mein bani hai, recovery bhi time lagegi. Patient rahiye, consistent rahiye, aur 3 mahine baad test zaroor karwaayein.',
  },

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Anaemia',             diseaseSlug: 'anaemia',            isAvailable: false, connection: 'Folic acid ki kami se megaloblastic anaemia — RBC abnormally bade aur ineffective' },
    { _key: 'ld2', diseaseName: 'Depression',           diseaseSlug: 'depression',          isAvailable: true,  connection: 'Low folate se brain neurotransmitters affect — serotonin, dopamine synthesis mein role' },
    { _key: 'ld3', diseaseName: 'PCOD',                 diseaseSlug: 'pcod',                isAvailable: true,  connection: 'Folate hormonal balance aur cell development mein help karta hai' },
    { _key: 'ld4', diseaseName: 'Rheumatoid Arthritis', diseaseSlug: 'ra',                  isAvailable: true,  connection: 'Methotrexate (RA treatment) folate deplete karta hai — supplementation zaroori' },
    { _key: 'ld5', diseaseName: 'Ulcerative Colitis',   diseaseSlug: 'ulcerative-colitis',  isAvailable: true,  connection: 'IBD mein folate absorption kam hoti hai; sulfasalazine bhi deplete karta hai' },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Hair Fall',          symptomSlug: 'hair-fall' },
    { _key: 'ls2', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
    { _key: 'ls3', symptomName: 'Mouth Ulcer',        symptomSlug: 'mouth-ulcer' },
    { _key: 'ls4', symptomName: 'Memory Loss',        symptomSlug: 'memory-loss' },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc',              isAvailable: true },
    { _key: 'rt2', testName: 'Vitamin B12 Test',            testSlug: 'vitamin-b12-test', isAvailable: true },
    { _key: 'rt3', testName: 'Serum Iron Study',            testSlug: 'serum-iron-study', isAvailable: true },
    { _key: 'rt4', testName: 'TSH (Thyroid)',               testSlug: 'tsh',              isAvailable: true },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin B12', vitaminSlug: 'vitamin-b12' },
    { _key: 'rv2', vitaminName: 'Iron',        vitaminSlug: 'iron' },
    { _key: 'rv3', vitaminName: 'Vitamin C',   vitaminSlug: 'vitamin-c' },
    { _key: 'rv4', vitaminName: 'Magnesium',   vitaminSlug: 'magnesium' },
  ],

  homeopathicAlternatives: [
    {
      _key: 'ha1',
      medicineName: 'Calcarea Phosphorica',
      patientType: 'Rapidly growing patients — bacche, pregnant mahilayein — jinmein bone/blood cell development slow hai, easily tired hote hain',
      howItHelps: 'Cell nutrition aur development support karta hai; absorption improve karne mein complementary role; growth aur recovery mein traditionally use hota aaya hai.',
    },
    {
      _key: 'ha2',
      medicineName: 'China Officinalis (Cinchona)',
      patientType: 'Blood loss ke baad ya prolonged illness ke baad extreme weakness aur anaemia jaisi state; bohot thaka hua, pale patient',
      howItHelps: 'Recovery phase mein vitality improve karne mein; weakness aur debility ke symptoms address karta hai; post-deficiency recovery ke saath complementary use.',
    },
    {
      _key: 'ha3',
      medicineName: 'Ferrum Metallicum',
      patientType: 'Anaemia ke saath folic acid kami — pale hai, baar baar thak jaata hai; women mein frequent periods ke saath weakness',
      howItHelps: 'Blood-related weakness aur pale appearance ke symptoms mein complementary; iron deficiency associated anaemia symptoms mein traditionally indicated.',
    },
  ],

  myths: [
    {
      _key: 'my1',
      myth: 'Folic acid sirf pregnant mahilaon ke liye hai',
      truth: 'Folic acid har adult ko chahiye — men, women, elderly sab ke liye. DNA repair, red blood cell production, aur homocysteine control ke liye sabke liye zaroori hai. Pregnancy mein critical hota hai, par ye sirf pregnancy supplement nahi hai.',
    },
    {
      _key: 'my2',
      myth: 'Dal-roti roz khaate hain toh folic acid ki kami nahi hogi',
      truth: 'Dal mein folate hai, lekin khana pakane ke dauraan 50-70% tak folate destroy ho sakta hai — especially zyada der tak pakane se. India mein studies mein pregnancy mein bhi 24% mahilaon mein deficiency paayi gayi. Sirf dal-roti kaafi nahi, variety aur cooking method bhi matter karta hai.',
    },
    {
      _key: 'my3',
      myth: 'Zyada folic acid lo — jitna zyada utna achha',
      truth: '1000 mcg se upar lene par B12 deficiency mask ho jaati hai — aur ye zyada dangerous hai, kyunki nerve damage andar se hoti rehti hai silently. Upper limit 1000 mcg/day hai (NIH); bina doctor ke isse zyada kabhi nahi.',
    },
    {
      _key: 'my4',
      myth: 'Folic acid supplement se cancer ho sakta hai',
      truth: 'Research mein recommended doses pe cancer risk ka koi confirmed link nahi hai. Kuch observational studies mein excessive synthetic folic acid ke baare mein mixed findings hain — lekin standard doses safe hain. Ye topic ongoing research mein hai, confirmed nahi.',
    },
    {
      _key: 'my5',
      myth: 'B12 aur folic acid ek hi cheez hai',
      truth: 'Dono alag vitamins hain. Dono ke deficiency mein megaloblastic anaemia ho sakti hai — isliye confusion hoti hai. Lekin folic acid B12 ki jagah nahi le sakta aur vice versa. Test karo pehle, phir sahi supplement lo.',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Folic acid ki kami ke kya lakshan hain?',
      answer: 'Folic acid ki kami se sabse pehle thakan, kamzori, aur baar baar munh ke chaale hote hain. Dhire dhire skin pale padne lagti hai, dil tez dhadakta hai, saans lene mein taklif hoti hai — ye sab megaloblastic anaemia ki wajah se hota hai. Mood swings aur concentration mein kami bhi common hai. India mein baar baar chaale hona is kami ka pehla aur sabse ignore kiya jaane wala sign hai.',
    },
    {
      _key: 'faq2',
      question: 'Folic acid kisme sabse zyada paya jaata hai — vegetarian foods mein?',
      answer: 'Sabse zyada folic acid Lobia (black-eyed peas) mein hoti hai — 1 katori paki hui mein ~210 mcg. Masoor dal (~180 mcg/katori), Chana dal (~160 mcg/katori), palak (~130 mcg/katori) bhi acche sources hain. Mango mein bhi 70 mcg per fruit hota hai. IMPORTANT: Khaana zyada der tak mat pakao — folate heat-sensitive hai.',
    },
    {
      _key: 'faq3',
      question: 'Pregnancy mein folic acid kab se leni chahiye?',
      answer: 'Pregnancy confirm hone se PEHLE shuru karo — ideally pregnancy plan karne ke 1-3 mahine pehle se. Baby ki neural tube pehle 23-28 din mein close hoti hai, jab bahut si mahilaon ko pata bhi nahi hota. India mein government ke IFA (Iron-Folic Acid) tablets free mein government health centres pe milte hain. ICMR-NIN 2020 pregnancy mein 570 mcg/day recommend karta hai.',
    },
    {
      _key: 'faq4',
      question: 'Folic acid ki kami se kya bimari hoti hai?',
      answer: 'Sabse common bimari hai Megaloblastic Anaemia — jisme red blood cells abnormally bade ho jaate hain aur properly kaam nahi karte. Pregnancy mein kami se baby mein Neural Tube Defects (spina bifida, anencephaly) ka risk hota hai. Long-term mein elevated homocysteine se heart disease ka risk bhi badhta hai. Depression se bhi link dekha gaya hai kuch studies mein.',
    },
    {
      _key: 'faq5',
      question: 'Folic acid tablet kab khaye?',
      answer: 'Subah breakfast ke saath lena best hai — water-soluble vitamin hai, fat ke saath lene ki zaroorat nahi. Khali pet nahi, khane ke saath lo — stomach upset avoid hoga. Chai ya antacid ke saath ek ghante ka gap rakhein. Raat ko lena bhi theek hai agar subah bhool jaate hain.',
    },
    {
      _key: 'faq6',
      question: 'Folic acid aur iron saath mein le sakte hain?',
      answer: 'Haan, saath le sakte hain — India mein IFA (Iron + Folic Acid) tablets yahi combination hain. Dono milkar red blood cell production mein help karte hain. Haan, iron se constipation ho sakta hai — zyada paani piyo aur raat ko lene ki koshish karo agar upset hoti hai.',
    },
    {
      _key: 'faq7',
      question: 'Folic acid aur calcium saath le sakte hain?',
      answer: 'Haan le sakte hain — in dono mein koi directly harmful interaction nahi hai. Lekin practical tip: calcium aur iron ko alag time lo (calcium iron absorption reduce karta hai). Folic acid subah lo, calcium evening ya raat ko — ye combination practical bhi hai aur effective bhi.',
    },
    {
      _key: 'faq8',
      question: 'Folic acid ka normal range kitna hona chahiye?',
      answer: 'Serum Folate normal range hai 3.1–17.5 ng/mL (Metropolis India data). 3 ng/mL se neeche deficiency maana jaata hai. RBC Folate (zyada accurate): 150-628 ng/mL normal hai. Pregnancy mein serum folate ideally >10 ng/mL hona chahiye. Test ki report mein lab ka reference range dekho — thodi variation hoti hai different labs mein.',
    },
    {
      _key: 'faq9',
      question: 'Folic acid ki kami ko kaise door karen?',
      answer: 'Mild kami mein diet improvement kaafi hoti hai — roz masoor dal, palak, moong dal, methi khaayein aur cooking method improve karein (zyada boil mat karo). Agar moderate ya severe kami hai, ya pregnancy hai, to doctor prescribed folic acid tablet (400-500 mcg) lo. Severe cases mein 5 mg tablet dete hain, jo doctor decide karta hai. MTHFR mutation wale L-methylfolate prefer karein — doctor ki rai se.',
    },
    {
      _key: 'faq10',
      question: 'Folic acid ki kami bacchon mein kaise pehchanen?',
      answer: 'Bacchon mein kami ke signs hain: baar baar munh ke chaale, growth slow hona, pale skin, zyada thakan, khel-kood mein interest kam. Bacchon mein kami adults se zyada jaldi develop hoti hai kyunki unka growth rate zyada hota hai. Agar ye signs dikh rahe hain to paediatrician se milein aur blood test karwaayein. Apni marzi se supplement na dein.',
    },
    {
      _key: 'faq11',
      question: 'Kya folic acid ke side effects hain?',
      answer: 'Normal doses mein folic acid ke side effects practically nahi hote. Bahut zyada dose (>1000 mcg/day, bina doctor ke) se: nausea, munh mein kadwa swad, neend mein dikkat. Sabse important risk: vitamin B12 deficiency mask hona — anaemia theek lagti hai par nerve damage andar se hoti rehti hai silently. Isliye high dose bina test ke nahi lena chahiye.',
    },
    {
      _key: 'faq12',
      question: 'Folic acid aur B12 ki kami mein kya farq hai?',
      answer: 'Dono mein megaloblastic anaemia jaisi condition ho sakti hai — isliye confusion hoti hai. Difference: B12 deficiency mein neurological symptoms bhi hote hain (haath-pair mein jhunjhunahat, balance issues, memory loss) jo folic acid kami mein nahi hote. Test se pata chalta hai kaun sa. Important: high-dose folic acid B12 deficiency mask kar sakta hai — isliye pehle dono test karwaayein.',
    },
    {
      _key: 'faq13',
      question: 'Folic acid ka test kaise hota hai? Price kya hai?',
      answer: 'Ek simple blood test hai — Serum Folate Test ya Folic Acid Test. Price: ₹500–₹900 India mein (Metropolis, Dr. Lal PathLabs). Home collection bhi available hai. Biotin supplement ho to 8 ghante pehle band karo — result affect hota hai. RBC Folate test zyada accurate hota hai lekin thoda costly — ₹800–₹1500.',
    },
    {
      _key: 'faq14',
      question: 'Pregnancy mein folic acid jyada lene se kya hota hai?',
      answer: '1000 mcg (1 mg) se upar doctor ke bina nahi lena chahiye. Recommended pregnancy dose (400-600 mcg) se zyada lena automatically zaruri nahi — zyada lene se B12 deficiency mask ho sakti hai jo baby ke nerve development ke liye dangerous hai. High-risk women (previous NTD history) ko 4-5 mg ki high dose doctor prescribe karte hain — par ye sirf doctor ke under hota hai.',
    },
    {
      _key: 'faq15',
      question: 'Kya folic acid se hair fall ruk sakta hai?',
      answer: 'Folic acid ki kami se baal zyada girte hain — kami theek karne se baal jharne mein improvement aa sakti hai. Lekin agar hair fall ka cause koi aur hai (thyroid, iron deficiency, stress) to sirf folic acid se zyada fark nahi padega. Pehle root cause identify karo (blood tests se), phir targeted treatment lo. Folic acid hair growth ke liye ek contributing factor hai, magic solution nahi.',
    },
    {
      _key: 'faq16',
      question: 'Folic acid aur homeopathic treatment — kya kaam karta hai?',
      answer: 'Homeopathy direct folic acid replace nahi karta. Ye body ki absorption aur digestion capacity improve karne mein, aur deficiency ke root cause address karne mein complementary hai. Severe deficiency ya pregnancy mein conventional supplement pehle zaroori hai — homeopathy saath mein chal sakta hai. Calcarea Phosphorica, China, Ferrum Metallicum jaisi medicines related symptoms mein use hoti hain — par qualified homoeopath hi decide karta hai.',
    },
    {
      _key: 'faq17',
      question: 'Metformin lene se folic acid ki kami hoti hai?',
      answer: 'Haan — Metformin (diabetes ki dawai) long-term lene se folic acid (aur B12) absorption reduce hoti hai. India mein bahut se Type 2 diabetes patients metformin pe hain — unhe regular B12 aur folate levels monitor karwaane chahiye. Agar doctor ne nahi kaha to next visit pe zaroor poochhein: "Kya mujhe folate aur B12 test karwana chahiye?"',
    },
    {
      _key: 'faq18',
      question: 'Folic acid ki kami se depression hota hai?',
      answer: 'Kuch studies mein low folate aur depression ka association dekha gaya hai — folate brain mein neurotransmitters (serotonin, dopamine) ke synthesis mein role karta hai. Depression ke kuch patients mein folate low paya gaya, aur unme antidepressants bhi kam effective hote hain. Confirmed causal relationship nahi hai — research ongoing hai. Depression ke saath thakan aur munh ke chaale hain to folate test zaroor karwaayein.',
    },
    {
      _key: 'faq19',
      question: 'Folic acid ki kami IBS ya colitis mein kyun hoti hai?',
      answer: 'Inflammatory Bowel Disease (Crohn\'s, Ulcerative Colitis) ya Celiac disease mein small intestine ki lining damaged hoti hai — isliye nutrients absorb nahi ho paate properly, folic acid including. In patients ko regular folate (aur B12, iron, Vitamin D) monitoring zaroori hai. Kuch IBD medications (sulfasalazine) bhi folate deplete karte hain. Doctor se routine monitoring plan banao.',
    },
    {
      _key: 'faq20',
      question: 'Folic acid ki kami elderly logon mein zyada kyun hoti hai?',
      answer: 'Elderly logon mein kami ke kai reasons hain: appetite kam hona, poor digestion aur absorption, multiple medicines jo folate deplete karti hain, alcohol, aur kabhi kabhi variety nahi hoti diet mein. Akele rehne wale elderly mein fresh vegetables kam hoti hain. ICMR 60+ ke liye 200-300 mcg/day recommend karta hai — par actual intake kaafi kam hoti hai India mein. Regular annual blood test karwate rahein 60+ age mein.',
    },
  ],
}

async function seed() {
  try {
    console.log('Seeding Folic Acid...')
    const result = await client.createOrReplace(folicAcid)
    console.log('Done:', result._id)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seed()
