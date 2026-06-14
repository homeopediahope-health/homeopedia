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

const vitaminB6 = {
  _id: 'vitamin-vitamin-b6',
  _type: 'vitamin',
  name: 'Vitamin B6',
  hindiName: 'Nerve Wala Vitamin / Pyridoxine',
  category: 'Vitamin',
  slug: { _type: 'slug', current: 'vitamin-b6' },
  metaTitle: 'Vitamin B6 Ki Kami: Lakshan, Foods & Homeopathic Ilaj 2026',
  metaDescription: 'Vitamin B6 ki kami ke lakshan, vegetarian food sources, normal range, supplement types aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: '',

  quickFacts: {
    indiaPrevalence: 'India mein alcohol dependents, TB patients (isoniazid lene wale), aur elderly mein B6 kami sabse common hai — global data suggest karta hai ki significant urban population marginal B6 deficiency mein hai (WHO / NIH data).',
    commonDeficiencySign: 'Haath-pair mein soonapan ya jhanjhanahat (peripheral neuropathy) + thakan aur mood mein girawat — ye dono sabse pehle notice hote hain.',
    mainFoodSource: 'Chana (Chickpeas) — 1 katori mein 1.1 mg Vitamin B6 (65% daily value). Roz chana khaana India ke vegetarian ke liye sabse reliable B6 source hai.',
    normalRangeQuick: 'Plasma PLP: 20–100 nmol/L (adequate). < 20 nmol/L = deficiency. (Source: NIH ODS 2024)',
  },

  whatIsIt: 'Vitamin B6 ek water-soluble vitamin hai jise Pyridoxine bhi kehte hain. Ye vitamin body mein 100 se zyada enzyme reactions mein kaam aata hai — khaas taur par protein metabolism, neurotransmitter banane mein, aur red blood cells ke nirman mein. Kyunki ye paani mein ghulta hai, body mein store nahi hota — isliye roz khane se milna zaroori hai.',

  bodyFunctions: [
    'Amino acid metabolism — Protein ko tod kar energy aur body cells banane mein madad karta hai; ye B6 ka sabse primary kaam hai',
    'Neurotransmitter synthesis — Serotonin (khushi wala hormone), dopamine, GABA banane mein directly involve hai; isliye mood aur neend pe asar hota hai',
    'Hemoglobin formation — Red blood cells mein hemoglobin banana B6 ke bina possible nahi; isliye kami mein anaemia ho sakti hai',
    'Immune function — Lymphocytes (infection se ladne wali cells) aur interleukin-2 production ke liye zaroori hai',
    'Homocysteine control — Blood mein homocysteine level ko normal rakhta hai; high homocysteine heart disease ka risk factor hai',
    'Glycogen breakdown — Liver mein stored sugar (glycogen) ko blood sugar mein badalne mein kaam aata hai; energy ke liye',
    'Bacchon ki nervous system development — Pregnancy mein baby ki brain aur nervous system growth ke liye critical hai',
    'Skin aur hair health — Sebaceous glands (skin oil) ke normal function ke liye zaroori; kami mein dermatitis hoti hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Haath-pair mein jhanjhanahat ya soonapan — B6 peripheral nerves ko healthy rakhta hai; kami mein nerve damage shuru hoti hai',
      'Haath-pair mein burning ya dard — khaas taur par raat ko zyada',
      'Carpal tunnel syndrome jaisa dard — karai (wrist) mein dard aur kamzori',
    ],
    energyMoodBrain: [
      'Thakan aur kamzori — hemoglobin kam hota hai, oxygen supply ghatti hai',
      'Depression ya anxiety — serotonin aur dopamine kam banta hai B6 kami mein',
      'Confusion ya yaadaasht ki takleef — brain neurotransmitters disturb hote hain',
      'Irritability aur mood swings — khaas taur par women mein PMS ke saath link',
    ],
    skinHairNails: [
      'Cheilosis — hoth ke corners mein dardnaak daad ya fatna',
      'Glossitis — jeeb laal, suji hui aur smooth ho jaati hai',
      'Seborrheic dermatitis — skin pe oily, scaly patches khaas taur par face pe',
      'Hair fall zyada hona — follicle health affect hoti hai',
      'Dandruff — scalp par seborrheic changes',
    ],
    other: [
      'Microcytic anaemia — choti RBCs wali khoon ki kami (B6 ke bina heme nahi banta)',
      'Babies mein seizures (convulsions) — neonatal B6 dependency; ye emergency condition hai, turant doctor ke paas jaana chahiye',
      'Morning sickness nahi handle ho rahi — pregnancy mein B6 kami nausea ko severe karta hai',
      'Immune system kamzor — baar baar infections hona',
    ],
  },

  deficiencyCauses: [
    'Khaana kam ya unbalanced diet — Processed food zyada, fresh sabzi-fruit kam; India ke urban youth mein common',
    'Alcohol dependence — Alcohol B6 ki absorption drastically kam karta hai aur uski breakdown badhata hai; India mein ye sabse badi wajah hai',
    'TB ki dawai Isoniazid (INH) — Ye medicine directly B6 ko block karti hai; India mein TB bahut common hai isliye ye India-specific risk bahut bada hai; TB patients ko routine B6 supplement deni chahiye',
    'Kidney disease — Dialysis patients mein B6 bahut tezi se nikal jaata hai',
    'Autoimmune conditions — Jaise rheumatoid arthritis; inflammation B6 consume karta hai',
    'Malabsorption — Celiac disease, Crohn\'s disease mein intestine se vitamins absorb nahi hote',
    'OCP (oral contraceptive pills) — Estrogen-containing pills B6 metabolism change karti hain; long-term users mein kami ho sakti hai',
    'Anti-seizure medicines — Phenytoin, carbamazepine, valproic acid; ye medicines B6 ka catabolism badha deti hain',
    'Elderly age — 60+ mein absorption naturally kam ho jaati hai',
  ],

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',        normal: '20–100 nmol/L', deficient: '< 20 nmol/L', toxic: '> 200 nmol/L', unit: 'nmol/L (Plasma PLP)' },
    { _key: 'nr2', category: 'Adult Female',       normal: '20–100 nmol/L', deficient: '< 20 nmol/L', toxic: '> 200 nmol/L', unit: 'nmol/L (Plasma PLP)' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)', normal: '20–100 nmol/L', deficient: '< 20 nmol/L', toxic: 'Age ke hisab se', unit: 'nmol/L (Plasma PLP)' },
    { _key: 'nr4', category: 'Pregnancy',          normal: '> 30 nmol/L ideal', deficient: '< 20 nmol/L', toxic: 'High dose avoid', unit: 'nmol/L (Plasma PLP)' },
    { _key: 'nr5', category: 'Elderly (60+)',       normal: '20–100 nmol/L', deficient: '< 20 nmol/L (common)', toxic: '> 200 nmol/L', unit: 'nmol/L (Plasma PLP)' },
  ],

  vegSources: [
    { _key: 'v1', food: 'Chana (Chickpeas) — boiled',       quantity: '1 katori/cup',   amount: '~1.1 mg (65% DV)' },
    { _key: 'v2', food: 'Aloo (Potato) — skin ke saath',    quantity: '1 medium',        amount: '~0.4 mg (25% DV)' },
    { _key: 'v3', food: 'Kela (Banana)',                     quantity: '1 medium',        amount: '~0.4 mg (25% DV)' },
    { _key: 'v4', food: 'Palak (Spinach) — paki hui',       quantity: '1 katori',        amount: '~0.4 mg (25% DV)' },
    { _key: 'v5', food: 'Shakarkandi (Sweet Potato)',        quantity: '1 medium',        amount: '~0.4 mg (26% DV)' },
    { _key: 'v6', food: 'Dalia (Bulgur Wheat) — paka',      quantity: '1 katori',        amount: '~0.2 mg (12% DV)' },
    { _key: 'v7', food: 'Soya (Tofu)',                       quantity: '100g',            amount: '~0.1 mg (6% DV)' },
    { _key: 'v8', food: 'Mixed Nuts (Mungfali etc.)',        quantity: '30g (1 mutthi)', amount: '~0.1 mg (6% DV)' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Tuna (Yellow Fin)',         quantity: '85g (3 oz)',   amount: '~0.9 mg (53% DV)' },
    { _key: 'nv2', food: 'Chicken Breast — roasted',  quantity: '1 piece (85g)', amount: '~0.9 mg (30–53% DV)' },
    { _key: 'nv3', food: 'Salmon',                    quantity: '85g (3 oz)',   amount: '~0.6 mg (35% DV)' },
    { _key: 'nv4', food: 'Turkey',                    quantity: '85g (3 oz)',   amount: '~0.4 mg (25% DV)' },
    { _key: 'nv5', food: 'Beef / Mutton',             quantity: '85g (3 oz)',   amount: '~0.3 mg (18% DV)' },
  ],

  sunlightNote: 'Vitamin B6 ka sunlight se koi relation nahi hai — ye sirf diet ya supplement se milta hai. Practical tip: Roz 1 katori chana (chole, hummus, ya chana chaat ke roop mein) + 1 kela kha lein — din ki 50-70% B6 zaroorat puri ho jaati hai. Chana India mein sab jagah aasani se milta hai — ye sabse reliable B6 vegetarian source hai. (Source: NIH ODS 2024 + USDA food data)',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–6 months',    male: '0.1',  female: '0.1',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day (AI)' },
    { _key: 'd2', ageGroup: '7–12 months',   male: '0.3',  female: '0.3',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day (AI)' },
    { _key: 'd3', ageGroup: '1–3 saal',      male: '0.5',  female: '0.5',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd4', ageGroup: '4–8 saal',      male: '0.6',  female: '0.6',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd5', ageGroup: '9–13 saal',     male: '1.0',  female: '1.0',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd6', ageGroup: '14–18 saal',    male: '1.3',  female: '1.2',  pregnancy: '1.9', breastfeeding: '2.0', unit: 'mg/day' },
    { _key: 'd7', ageGroup: '19–50 saal',    male: '1.3',  female: '1.3',  pregnancy: '1.9', breastfeeding: '2.0', unit: 'mg/day (NIH RDA)' },
    { _key: 'd8', ageGroup: '51+ saal',      male: '1.7',  female: '1.5',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
  ],

  pregnancyInfo: {
    howImportant: 'Pregnancy mein B6 ki zaroorat normal se zyada hoti hai — fetal brain aur nervous system development ke liye. Kami se: Baby ki nervous system development disturb, neonatal seizures (rare but serious), aur mother ko severe nausea/vomiting (hyperemesis gravidarum) ka risk. B6 supplement specifically pregnancy nausea ke liye clinically proven hai — standard dose 10-25 mg doctor ke hisaab se.',
    dailyRequired: '1.9 mg/day (NIH) | Morning sickness mein B6 safe and effective',
    babyEffects: [
      'Baby ki nervous system development disturb ho sakti hai',
      'Neonatal seizures (rare but serious)',
      'Brain development affected (amino acid metabolism dependent)',
      'Neuropathy risk in severe deficiency',
    ],
    supplementSafe: true,
    doctorLine: 'Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein — self-medication se dose galat ho sakta hai.',
  },

  childrenInfo: {
    deficiencySymptoms: [
      'Seizures/fits — neonates aur infants mein B6 kami ka sabse khatarnak sign; agar naye janme bachche ko seizure ho to B6 deficiency turant check karein',
      'Irritability aur rone ki tendency zyada',
      'Growth mein delay',
      'Anaemia ke lakshan (paleness, thakan)',
    ],
    ageWiseRequirement: '0–6 months: 0.1 mg | 7–12 months: 0.3 mg | 1–3 saal: 0.5 mg | 4–8 saal: 0.6 mg | 9–13 saal: 1.0 mg',
    foodSources: 'Mashed potato, kela, boiled chana (age 1+ pe), dal.',
    supplementNote: 'Supplement sirf doctor ke kehne pe — specially TB medicine (INH) le raha bachcha ho ya malabsorption condition ho.',
  },

  labTestInfo: {
    testName: 'Vitamin B6 / Pyridoxal 5\'-Phosphate (PLP) Blood Test',
    testSlug: 'vitamin-b6-test',
    normalRange: 'Plasma PLP: 20–100 nmol/L. Deficient: < 20 nmol/L. Pregnancy mein > 30 nmol/L ideal. Dr. Lal PathLabs aur Metropolis India same reference range use karte hain. (Source: NIH ODS 2024)',
    whenToTest: 'Symptoms hain (jhanjhanahat, depression, anaemia, skin issues). TB ki medicine (INH) le rahe hain — routine monitoring. Dialysis pe hain — regular check. Pregnancy mein B6 supplement ki zaroorat assess karne ke liye.',
    repeatAfter: 'Supplement start karne ke 3 mahine baad — level check karein.',
    priceRange: 'Approximately ₹800 – ₹1,500 (Metropolis India / Dr. Lal PathLabs). Prices change hoti hain — latest price lab se confirm karein. Online booking available hai.',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Pyridoxine Hydrochloride (Pyridoxine HCl)',
      benefits: ['Sabse commonly available', 'Affordable', 'India mein har jagah milti hai', 'Well-studied', 'Becosules, Neurobion, Polybion jaise brands mein available'],
      drawbacks: ['Body mein active form PLP mein convert karni padti hai — kidney ya liver problem mein conversion slower'],
      bestFor: 'General deficiency, healthy adults, TB patients (INH supplement), pregnancy nausea',
    },
    {
      _key: 'sf2',
      formName: 'Pyridoxal 5\'-Phosphate (P5P / PLP)',
      benefits: ['Already active form — directly use ho jaata hai', 'Conversion ki zaroorat nahi', 'Better absorption in compromised cases'],
      drawbacks: ['Mehenga hai', 'India mein limited availability — khaas pharmacies ya online pe milta hai'],
      bestFor: 'Poor absorption wale patients (Crohn\'s, celiac), elderly, liver disease wale',
    },
    {
      _key: 'sf3',
      formName: 'Pyridoxamine',
      benefits: ['Research mein kidney protection ke liye promising results'],
      drawbacks: ['India mein supplement form mein almost unavailable', 'Mainly research use'],
      bestFor: 'Abhi general use ke liye recommended nahi — research stage mein hai',
    },
  ],

  supplementTiming: {
    bestTime: 'Khane ke SAATH lo — B6 water-soluble hai, lekin khane ke saath lene se stomach irritation kam hoti hai aur absorption better hoti hai. Subah khane ke saath lena zyada practical hai.',
    withFood: 'Khane ke saath ya turant baad — khali pet kuch logon ko nausea ho sakti hai.',
    absorptionTips: [
      'Magnesium ke saath lo — B6 aur Magnesium milkar nerve function mein double benefit dete hain (stress aur PMS ke liye khaas helpful)',
      'Riboflavin (B2) saath hona achha hai — B6 ki active form banane mein help karta hai',
      'B Complex ke saath combination lena common aur effective hai',
    ],
    avoidWith: [
      'Chai ya coffee ke saath mat lo — tannins absorption interfere kar sakte hain; 30-60 minute ka gap rakhein',
      'Alcohol ke saath bilkul nahi — B6 ki effectiveness near-zero ho jaati hai',
    ],
  },

  drugInteractions: [
    {
      _key: 'di1',
      medicineName: 'Isoniazid / INH (TB ki dawai)',
      reason: 'INH directly B6 ko block karta hai aur peripheral neuropathy cause karta hai — India mein ye interaction sabse important hai. TB patients ko ROUTINE B6 supplement deni chahiye — usually 25-50 mg/day. Dose doctor taye karein. (Source: NIH ODS, StatPearls NCBI 2023)',
    },
    {
      _key: 'di2',
      medicineName: 'Levodopa (Parkinson\'s disease ki medicine)',
      reason: 'B6 levodopa ko peripherally tod deta hai jisse brain mein medicine kam pahunchti hai aur effect ghatta hai. AVOID karo B6 agar levodopa akele le rahe hain. Levodopa+Carbidopa combination mein ye problem nahi hoti. (Source: Mayo Clinic)',
    },
    {
      _key: 'di3',
      medicineName: 'Phenytoin / Fosphenytoin (Epilepsy ki dawai)',
      reason: 'B6 in medicines ka blood level kam kar deta hai — seizure control disturb ho sakta hai. Epilepsy medicine le rahe hain to B6 supplement doctor se confirm karein. (Source: StatPearls NCBI, Mayo Clinic)',
    },
    {
      _key: 'di4',
      medicineName: 'Phenobarbital (Anti-seizure)',
      reason: 'Same mechanism — B6 drug level ghata sakta hai. Doctor se zaroor poochein pehle. (Source: StatPearls NCBI)',
    },
    {
      _key: 'di5',
      medicineName: 'Valproic Acid / Carbamazepine (Epilepsy medicines)',
      reason: 'Ye medicines B6 ka catabolism badhati hain aur deficiency cause kar sakti hain. Long-term use mein B6 monitoring zaroori hai — doctor se discuss karein. (Source: StatPearls NCBI 2023)',
    },
  ],

  combinations: {
    beneficial: [
      { _key: 'cb1', nutrient: 'Vitamin B12', reason: 'B6 aur B12 milkar homocysteine level control karte hain; nerve health ke liye powerful combination hai; B Complex mein dono saath aate hain' },
      { _key: 'cb2', nutrient: 'Magnesium',   reason: 'B6+Magnesium combination PMS symptoms (mood swings, bloating) aur nerve function ke liye well-researched; anxiety mein bhi helpful' },
      { _key: 'cb3', nutrient: 'Folate (B9)', reason: 'Teen milkar (B6+B9+B12) cardiovascular health ke liye best team — homocysteine ko normal rakhte hain' },
    ],
    avoid: [
      { _key: 'ca1', nutrient: 'Levodopa (akele)', reason: 'B6 drug ki effectiveness kam karta hai; Parkinson\'s patients dhyan rakhein — Levodopa+Carbidopa combination mein ye problem nahi hoti' },
    ],
    timingGuide: 'B6 subah khane ke saath lo. Magnesium raat ko lena better hai (sleep support). B Complex ke saath combination effective hai.',
  },

  toxicity: {
    upperLimit: '100 mg/day (NIH Tolerable Upper Intake Level for adults). EFSA (European) ne 2023 mein stricter 12 mg/day limit set ki hai — kyunki recent studies mein lower doses pe bhi toxicity dekhi gayi hai. (Source: NIH ODS; PubMed/Cureus 2023)',
    sideEffects: [
      'Sensory neuropathy — haath-pair mein jhanjhanahat, soonapan; IRONIC — kami mein bhi aur zyada lene mein bhi same symptom aata hai',
      'Photosensitivity — dhoop mein skin zyada sensitive ho jaati hai',
      'Dermatitis — skin rash',
      'Nausea aur pet mein dard (high dose pe)',
    ],
    whenSerious: 'Serum level >200 nmol/L pe symptoms develop hone lagte hain. Long-term 50 mg/day se zyada lena risky hai — peripheral neuropathy permanent bhi ho sakti hai agar dose timely reduce na kiya jaaye.',
  },

  timeline: {
    bloodLevelTime: 'Regular supplementation ke 2–4 hafte mein blood PLP level measurable improvement dikhata hai.',
    symptomsTime: 'Mood aur energy: 3–6 hafte. Skin/lips healing (cheilosis): 4–8 hafte. Nerve symptoms (jhanjhanahat): Isme SABSE ZYADA time lagta hai — 3–6 mahine, aur kabhi kabhi improvement slow rehti hai.',
    fullRecoveryTime: 'Mild-moderate deficiency: 2–3 mahine mein normal range. Severe kami ya nerve damage: 6–12 mahine, patience zaroori hai.',
    repeatTestTime: 'Supplement start karne ke 3 mahine baad fir test karaye.',
    patientNote: 'Ek hafte mein fark nahi dikhega — patience zaroori hai. Supplement regularly lo, 3 mahine baad test repeat karaye.',
  },

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Depression', diseaseSlug: 'depression', isAvailable: false, connection: 'B6 is required for serotonin and dopamine synthesis; deficiency linked to depression' },
    { _key: 'ld2', diseaseName: 'PCOD', diseaseSlug: 'pcod', isAvailable: false, connection: 'B6 helps regulate hormonal balance; commonly deficient in PCOD patients' },
    { _key: 'ld3', diseaseName: 'Rheumatoid Arthritis', diseaseSlug: 'ra', isAvailable: false, connection: 'Inflammation in RA increases B6 consumption; deficiency common in RA' },
    { _key: 'ld4', diseaseName: 'Carpal Tunnel Syndrome', diseaseSlug: 'carpal-tunnel-syndrome', isAvailable: false, connection: 'B6 deficiency causes wrist nerve compression symptoms similar to carpal tunnel' },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Peripheral Neuropathy (Jhanjhanahat)', symptomSlug: 'peripheral-neuropathy' },
    { _key: 'ls2', symptomName: 'Depression / Mood Swings', symptomSlug: 'depression' },
    { _key: 'ls3', symptomName: 'Cheilosis (Cracked Lips)', symptomSlug: 'cheilosis' },
    { _key: 'ls4', symptomName: 'Hair Fall', symptomSlug: 'hair-fall' },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Vitamin B6 (PLP) Blood Test', testSlug: 'vitamin-b6-test', isAvailable: false },
    { _key: 'rt2', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc-test', isAvailable: false },
    { _key: 'rt3', testName: 'Homocysteine (Blood)', testSlug: 'homocysteine-test', isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin B12', vitaminSlug: 'vitamin-b12' },
    { _key: 'rv2', vitaminName: 'Magnesium', vitaminSlug: 'magnesium' },
    { _key: 'rv3', vitaminName: 'Folic Acid (B9)', vitaminSlug: 'folic-acid' },
  ],

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Calcarea Phosphorica',
      patientType: 'Jo bacche ya adults bone weakness, chronic thakan, aur poor nutrition absorption se pareshaan hain — khaas taur par jo baar baar bimaar padte hain',
      howItHelps: 'Body ki overall nutrition utilization improve karne mein madadgar — especially jab diet theek ho phir bhi kami ho. Nerve weakness aur muscular pain mein bhi faydemand.',
    },
    {
      _key: 'h2',
      medicineName: 'Nux Vomica',
      patientType: 'Jo log stressed life jeete hain, alcohol/tobacco use karte hain, ya medications ki wajah se B6 level disturb ho gaya ho (jaise INH lene wale patients)',
      howItHelps: 'Liver aur digestive function support karta hai jisse vitamins ka metabolism improve hota hai. Irritability, mood disturbance aur nausea mein bhi rahat deta hai.',
    },
    {
      _key: 'h3',
      medicineName: 'Kali Phosphoricum',
      patientType: 'Jo log extreme mental aur physical exhaustion mein hain, nervous system symptoms hain (jhanjhanahat, kamzori), aur depression feel kar rahe hain',
      howItHelps: 'Nerve cells ko support karta hai — "nerve tonic" ke roop mein jaana jaata hai. B6 kami mein jo mood aur energy problems hoti hain unme complementary role karta hai.',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'B6 sirf nerves ke liye hai, baaki kisi ko zaroorat nahi',
      truth: 'B6 sirf nerves ke liye nahi — protein metabolism, immunity, mood (serotonin/dopamine), khoon (hemoglobin), aur pregnancy sab mein zaroori hai. Sabko zaroorat hai.',
    },
    {
      _key: 'm2',
      myth: 'B Complex lene se B6 ki kami kabhi nahi hogi',
      truth: 'Agar aap TB ki medicine INH le rahe hain, ya kidney disease hai, ya alcohol use karte hain — to B Complex ki regular dose B6 kami rok nahi sakti. Inhe alag aur higher dose supplementation ki zaroorat padti hai — doctor ke hisaab se.',
    },
    {
      _key: 'm3',
      myth: 'Vitamin B6 paani mein ghulta hai isliye kitna bhi lo nuksaan nahi',
      truth: 'Ye ek dangerous misconception hai. B6 water-soluble zaroor hai lekin zyada lene pe sensory neuropathy hoti hai — wahi symptom jo kami mein hoti hai. Sirf prescribed dose lo.',
    },
    {
      _key: 'm4',
      myth: 'Sirf khaane se B6 nahi milta, supplement lena hi padega',
      truth: 'Agar diet balanced hai — chana, kela, aloo, palak roz khate hain — to healthy adults ko supplement ki zaroorat nahi. Supplement tab chahiye jab diet poor ho, ya koi medical condition absorb nahi karne de, ya doctor ne specifically recommend kiya ho.',
    },
    {
      _key: 'm5',
      myth: 'Pregnancy mein B6 sirf nausea ke liye hai',
      truth: 'B6 pregnancy mein sirf nausea control nahi karta — baby ki brain aur nervous system development ke liye bhi critical hai. Isliye deficiency avoid karna sirf mother ke comfort ke liye nahi, baby ki health ke liye bhi zaroori hai.',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Vitamin B6 ki kami ke kya lakshan hote hain?',
      answer: 'Vitamin B6 ki kami ke sabse common lakshan hain haath-pair mein jhanjhanahat ya soonapan (peripheral neuropathy), thakan, depression ya irritability, hoth ke corners mein daad ya fatna (cheilosis), jeeb ka laal aur sujna (glossitis), aur skin pe oily rash (seborrheic dermatitis). Hair fall aur dandruff bhi B6 kami se ho sakta hai. Agar anaemia ke saath ye symptoms hain to test zaroor karaye.',
    },
    {
      _key: 'faq2',
      question: 'Vitamin B6 kisme paya jata hai vegetarian food mein?',
      answer: 'Vegetarian mein sabse zyada B6 chane (chickpeas) mein hota hai — 1 katori chana mein 1.1 mg milta hai jo din ki 65% zaroorat puri karta hai. Uske baad kela (0.4 mg), aloo (0.4 mg), palak (0.4 mg), aur shakarkandi achhe sources hain. Roz chana khaane ki aadat banana India ke vegetarian ke liye sabse easy aur effective B6 boost hai.',
    },
    {
      _key: 'faq3',
      question: 'Vitamin B6 ka normal range kitna hona chahiye?',
      answer: 'Blood test mein plasma PLP (Pyridoxal 5\'-Phosphate) 20 nmol/L se upar hona chahiye. 20–100 nmol/L adequate range hai. < 20 nmol/L deficiency maana jaata hai. Pregnancy mein > 30 nmol/L ideal hoti hai. Agar report mein ng/mL mein hai to: 5 ng/mL approximately equals 20 nmol/L. (Source: NIH ODS 2024)',
    },
    {
      _key: 'faq4',
      question: 'Vitamin B6 ki kami ke karan kya hote hain?',
      answer: 'Sabse common karan hain: TB ki medicine isoniazid (INH) — ye India mein bahut important hai; alcohol use; kidney disease ya dialysis; OCP (birth control pills) long-term use; epilepsy medicines jaise phenytoin aur valproic acid; aur Crohn\'s ya celiac jaise absorption disorders. Plain poor diet mein bhi kami ho sakti hai.',
    },
    {
      _key: 'faq5',
      question: 'Vitamin B6 pregnancy mein kyu zaruri hai?',
      answer: 'Pregnancy mein B6 baby ki brain aur nervous system development ke liye direct role karta hai. Saath hi, ye pregnancy mein nausea aur morning sickness kam karne mein bhi kaam aata hai. Pregnancy mein RDA 1.9 mg/day hai — normal se zyada. Doctor se B6 level check karake supplement lena safe aur faydemand hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya Vitamin B6 se hair fall ruk sakta hai?',
      answer: 'Agar hair fall B6 ki kami ki wajah se ho raha hai to supplementation se improvement ho sakti hai — kuch mahino mein. Lekin hair fall ke bahut saare karan hote hain (thyroid, iron, stress, DHT etc.). Sirf B6 se sab hair loss theek nahi hoga — pehle check karaye ki kami hai ya nahi. Bina reason ke supplement lena waste of money aur kabhi kabhi harmful bhi ho sakta hai.',
    },
    {
      _key: 'faq7',
      question: 'Vitamin B6 supplement kab lena chahiye — subah ya raat?',
      answer: 'Khane ke saath lena best hai — din ke kisi bhi meal ke saath. Subah khane ke saath lena zyada practical hai. B6 energy metabolism mein kaam aata hai isliye subah lena zyada logical hai. Agar nausea ho to khane ke turant baad lo, khali pet nahi.',
    },
    {
      _key: 'faq8',
      question: 'Vitamin B6 aur B12 mein kya fark hai?',
      answer: 'Dono nerve health ke liye zaroori hain lekin kaam alag hain. B6 amino acid metabolism, neurotransmitter (serotonin, dopamine) production, aur hemoglobin banane mein kaam karta hai. B12 nerve myelin sheath banata hai aur DNA synthesis ke liye zaroori hai. Dono ki kami mein jhanjhanahat hoti hai. Aksar dono saath deficient hote hain — B Complex mein dono milte hain.',
    },
    {
      _key: 'faq9',
      question: 'TB ki medicine le rahe hain to kya B6 supplement lena chahiye?',
      answer: 'Haan — isoniazid (INH) seedha B6 ko block karta hai aur peripheral neuropathy cause karta hai. TB treatment guidelines mein B6 supplementation recommend ki jaati hai. India mein ye bahut important hai. Doctor se supplement dose confirm karein — usually 25-50 mg/day prescribed hoti hai TB ke saath.',
    },
    {
      _key: 'faq10',
      question: 'Vitamin B6 pregnancy nausea ke liye kitna kaam karta hai?',
      answer: 'B6 pregnancy-induced nausea (morning sickness) ke liye clinically proven hai — ye pehle line treatment mein shamil hai. Usually 10-25 mg 3 times daily use hota hai, akele ya doxylamine ke saath. Lekin dose aur duration doctor se poochein — pregnancy mein self-medication avoid karein.',
    },
    {
      _key: 'faq11',
      question: 'Kya Vitamin B6 ki zyada dose lene se nuksaan hai?',
      answer: 'Haan — ye ek important point hai. B6 water-soluble hai lekin zyada dose pe sensory neuropathy (wahi problem jo kami se hoti hai) ho sakti hai. NIH ka UL 100 mg/day hai, lekin kuch experts aur EFSA 12 mg/day limit suggest karte hain. Doctor ke prescription ke bina 10 mg se zyada roz mat lo.',
    },
    {
      _key: 'faq12',
      question: 'Kya dandruff aur seborrheic dermatitis B6 ki kami se hoti hai?',
      answer: 'B6 kami seborrheic dermatitis ka ek contributing factor ho sakta hai — skin aur scalp ki oily, scaly condition mein B6 supplement se improvement reports hain. Lekin dandruff ke aur bhi karan hain (fungal infection, dry skin, stress). B6 level check karake targeted treatment better hai — sirf assume karke supplement shuru nahi karna chahiye.',
    },
    {
      _key: 'faq13',
      question: 'Vitamin B6 ke saath kaunsi medicines nahi leni chahiye?',
      answer: 'Kuch important interactions: Levodopa (Parkinson\'s medicine) — avoid karo B6 agar akele levodopa le rahe hain; phenytoin aur phenobarbital (epilepsy) — B6 inki blood levels ghata sakti hai; isoniazid (TB) — INH B6 deplete karta hai isliye zaroor leni chahiye, doctor se poochein. Ye interactions serious ho sakte hain — doctor se confirm karein.',
    },
    {
      _key: 'faq14',
      question: 'Kya B6 mood aur depression mein help karta hai?',
      answer: 'B6 serotonin aur dopamine — dono mood hormones — ke production ke liye directly zaroori hai. Kami mein depression, irritability aur anxiety ho sakti hai. Research mein B6 supplementation ka mood pe positive effect dekha gaya hai — khaas taur par women mein PMS ke symptoms mein. Lekin ye clinical depression ka treatment nahi hai — agar depression serious hai to doctor se zaroor milein.',
    },
    {
      _key: 'faq15',
      question: 'Vitamin B6 ki kami kaise dur karein jaldi?',
      answer: 'Sabse pehle test karaye — confirm karein ki kami hai. Phir doctor ki salaah se: diet mein chana, kela, aloo daily shamil karein; B6 ya B Complex supplement lo; alcohol avoid karein; jo medicines kami cause kar rahi hain unke baare mein doctor se baat karein (jaise INH wale patients). 2–3 mahine mein blood level normal aa sakta hai — patience zaroori hai.',
    },
    {
      _key: 'faq16',
      question: 'Bacchon mein Vitamin B6 ki kami ke kya signs hain?',
      answer: 'Bacchon mein sabse alarming sign seizures (fits) hain — khaas taur par newborns aur infants mein. Iske alawa irritability zyada, growth slow, anaemia, aur immune weakness (baar baar bimaar padhna) bhi signs hain. Bacchon mein B6 kami rare hai agar breastfed hain — lekin TB medicine le raha bachcha ho to B6 supplement zaroor chahiye.',
    },
    {
      _key: 'faq17',
      question: 'Kya sirf diet se Vitamin B6 ki zaroorat puri ho sakti hai?',
      answer: 'Haan — agar aap healthy hain aur koi interfering medicine nahi le rahe. Roz 1 katori chana + 1 kela + ek serving aloo — bas itne mein hi din ki B6 requirement puri ho sakti hai. Supplement tab chahiye jab ya to ye foods nahi kha rahe, ya koi medical condition absorb nahi karne de, ya doctor ne specifically recommend kiya ho.',
    },
    {
      _key: 'faq18',
      question: 'Vitamin B6 test India mein kahan karaye, kitna kharcha hai?',
      answer: 'Dr. Lal PathLabs aur Metropolis India mein Pyridoxal 5\'-Phosphate (Vitamin B6) blood test hota hai. Approximate cost ₹800 – ₹1,500 hai (price vary kar sakti hai). Test ke liye kisi special preparation ki zaroorat nahi lekin lab se confirm karein. Online booking bhi available hai.',
    },
    {
      _key: 'faq19',
      question: 'Vitamin B6 aur Magnesium ka combination kab lena chahiye?',
      answer: 'B6+Magnesium combination khaas taur par in situations mein use hota hai: PMS (periods se pehle mood swings, cramps), stress aur anxiety, nerve irritability, aur children mein attention issues. Ye combination internationally well-researched hai. Doctor ya dietitian se dose confirm karein pehle.',
    },
    {
      _key: 'faq20',
      question: 'Kya Vitamin B6 immunity ke liye help karta hai?',
      answer: 'Haan — B6 lymphocytes (white blood cells) aur interleukin-2 production ke liye directly zaroori hai. Kami mein immune response kamzor hoti hai aur baar baar infections aate hain. Kuch studies mein B6 ka immune support connection dekha gaya hai. Lekin iska matlab ye nahi ki supplement lene se koi bhi infection nahi hoga — sirf kami dur karna zaroori hai.',
    },
  ],

  sources: [
    'NIH Office of Dietary Supplements — Vitamin B6 Health Professional Fact Sheet | 2024 | ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/',
    'StatPearls (NCBI Bookshelf) — Vitamin B6 Deficiency | Updated 2023 | ncbi.nlm.nih.gov/books/NBK470579/',
    'Mayo Clinic — Vitamin B-6 | mayoclinic.org/drugs-supplements-vitamin-b6/art-20363468',
    'PubMed/Cureus — Vitamin B6 Toxicity Case Report (Paluszny et al.) | 2023 | pmc.ncbi.nlm.nih.gov/articles/PMC10720370/',
    'ICMR-NIN Expert Group — Recommended Dietary Allowances (RDA) and Estimated Average Requirements (EAR) for Indians | 2020 | nin.res.in',
  ],
}

async function seed() {
  try {
    console.log('Seeding Vitamin B6...')
    const result = await client.createOrReplace(vitaminB6)
    console.log('Done:', result._id)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seed()
