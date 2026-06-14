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

const melatonin = {
  _id: 'vitamin-melatonin',
  _type: 'vitamin',
  name: 'Melatonin',
  hindiName: 'Neend Wala Hormone / Melatonin',
  category: 'Supplement',
  slug: { _type: 'slug', current: 'melatonin' },
  metaTitle: 'Melatonin Supplement: Neend, Dose aur Side Effects | Homeopedia.in',
  metaDescription: 'Melatonin hormone kya hai, neend mein kaise madad karta hai, sahi dose, drug interactions aur homeopathic alternative — verified, doctor-reviewed Hinglish guide. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: '',

  quickFacts: {
    indiaPrevalence: 'India mein insomnia prevalence 33% adults mein hai (AIIMS Sleep Study 2022). Urban population mein screen time aur late nights se melatonin production naturally suppress ho rahi hai — blue light exposure sabse bada karan.',
    commonDeficiencySign: 'Raat ko neend na aana (especially sone mein takleef, 30+ min lagein), baar baar jaagna, aur subah thaka hua uthna — ye sab low melatonin ke classical signs hain.',
    mainFoodSource: 'Pista — sabse zyada melatonin content: 660 ng/100g. Ghar par easily available aur tasty natural source.',
    normalRangeQuick: 'Raat mein peak: 80–120 pg/mL (adults); Din mein <10 pg/mL normal — ye blood test se nahi, behavior se samjho.',
  },

  whatIsIt: 'Melatonin ek hormone hai jo hamara brain ka pineal gland banata hai — khaas taur par andhera hone par. Ye body ki internal clock (circadian rhythm) ka main regulator hai. Jab din dhalta hai aur roshni kam hoti hai, melatonin badhta hai aur body ko signal milta hai ki "ab sone ka waqt hai." Supplement ke roop mein melatonin synthetic ya plant-derived hota hai aur 0.5 mg se 5 mg doses mein available hai India mein OTC. Ye koi "sleeping pill" nahi — ye ek hormone signal hai jo neend ki tayari mein madad karta hai.',

  bodyFunctions: [
    'Circadian rhythm regulation — Body ki internal 24-ghante ki ghadi ko set karta hai; sleep-wake cycle control karta hai',
    'Sleep onset signal — Raat ke andheron mein pineal gland se release hota hai; brain ko "sone ka waqt" signal deta hai',
    'Antioxidant activity — Free radicals neutralize karta hai; brain cells ko oxidative stress se bachata hai',
    'Immune modulation — Immune cells ke function pe positive asar karta hai; inflammatory response regulate karta hai',
    'Body temperature regulation — Core body temperature slightly giraakar neend ko facilitate karta hai',
    'Seasonal rhythm — Seasons ke hisab se day length change hone par mood aur biology adjust karna',
    'Reproductive function — Fertility cycle pe seasonal effect; darkness duration se hormonal signals',
    'Gut motility — Intestinal function mein bhi role hai; gut mein bhi melatonin receptors hote hain',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [],
    energyMoodBrain: [
      'Daytime drowsiness aur concentration mein takleef',
      'Irritability aur mood swings',
      'Anxiety at bedtime',
      'Memory aur focus mein kami',
      'Depression ke symptoms (especially seasonal — SAD)',
    ],
    skinHairNails: [],
    other: [
      'Sone mein zyada time lagna (>30 minutes) — sleep onset insomnia',
      'Raat ko baar baar uthna aur neend toot jaana',
      'Subah thaka hua uthna — non-restorative sleep',
      'Jet lag ya shift work ke baad severe sleep disruption',
      'Seasonal affective disorder (SAD) — winter mein mood low',
    ],
  },

  deficiencyCauses: [
    'Blue light exposure (phone/laptop raat ko) — melatonin production suppress karta hai',
    'Age-related decline (>40 years mein pineal calcification) — natural production kam ho jaati hai',
    'Shift work ya irregular sleep schedule — circadian rhythm disturb hoti hai',
    'Beta-blockers (blood pressure ki dawaiyaan) — norepinephrine pathway se melatonin suppress karte hain',
    'Alcohol aur caffeine excess — melatonin secretion aur quality disturb hoti hai',
    'Stress aur cortisol elevation — cortisol melatonin ka natural antagonist hai',
    'Bright light at night (artificial lighting) — light pollution melatonin onset delay karti hai',
  ],

  normalRanges: [
    { _key: 'nr1', category: 'Raat (2–4 AM peak)', normal: '80–120', deficient: '<20 pg/mL', toxic: 'Very rare with supplement doses', unit: 'pg/mL' },
    { _key: 'nr2', category: 'Din ke waqt (daytime)', normal: '<10', deficient: 'N/A — low is normal daytime', toxic: '>10 pg/mL daytime = circadian disruption', unit: 'pg/mL' },
    { _key: 'nr3', category: 'Dim Light Melatonin Onset (DLMO)', normal: 'Sunset ke ~2 hr baad', deficient: 'Delayed DLMO = DSPD', toxic: 'N/A', unit: 'Timing' },
    { _key: 'nr4', category: 'Supplement therapeutic dose', normal: '0.5–5', deficient: 'N/A', toxic: '>10 mg — side effects risk badhta hai', unit: 'mg/day' },
  ],

  vegSources: [
    { _key: 'v1', food: 'Pista (Pistachios)', quantity: '30g (1 mutthi)', amount: '~198 ng (660 ng/100g)' },
    { _key: 'v2', food: 'Akhrot (Walnuts)', quantity: '30g (1 mutthi)', amount: '~1.05 ng (3.5 ng/g)' },
    { _key: 'v3', food: 'Badam (Almonds)', quantity: '30g (1 mutthi)', amount: '~0.3–0.9 ng (1–3 ng/g)' },
    { _key: 'v4', food: 'Tamatar (Tomatoes)', quantity: '100g (1 medium)', amount: '~54 ng — cooked mein zyada available' },
    { _key: 'v5', food: 'Kela (Banana)', quantity: '1 medium', amount: '~0.5–1 ng/g — tryptophan se melatonin chain support' },
    { _key: 'v6', food: 'Dahi (Warm Milk / Curd)', quantity: '1 glass ya 1 katori', amount: 'Variable — raat ka doodh thoda melatonin badhata hai' },
    { _key: 'v7', food: 'Oats (Jaai)', quantity: '1 bowl (100g cooked)', amount: '~90 ng/100g — raat ke khane mein include karo' },
    { _key: 'v8', food: 'Angoor (Grapes — dark)', quantity: '100g (~15 grapes)', amount: '~8–65 ng/g — dark grapes mein zyada; resveratrol ke saath synergy' },
  ],

  nonVegSources: [],

  sunlightNote: 'Melatonin ka sunlight se seedha lena nahi hota — balki sunlight ke ABSENCE mein body melatonin banati hai. Practical tip: Raat ko sone se 1-2 ghante pehle pista ya akhrot khaao. Phone band karo ya blue light blocker lagao. Room dark aur cool (18-22°C) rakho — ye natural melatonin ke liye best environment hai. Subah dhoop mein zaroor jaao — ye daytime melatonin suppress karta hai aur raat ka natural rise better hoti hai.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: 'Adults (Sleep onset)', male: '0.5–3', female: '0.5–3', pregnancy: 'AVOID', breastfeeding: 'AVOID', unit: 'mg/day (before bed)' },
    { _key: 'd2', ageGroup: 'Elderly (60+)', male: '0.5–1', female: '0.5–1', pregnancy: null, breastfeeding: null, unit: 'mg/day (low dose recommended)' },
    { _key: 'd3', ageGroup: 'Children', male: 'Pediatrician only', female: 'Pediatrician only', pregnancy: null, breastfeeding: null, unit: 'mg/day' },
    { _key: 'd4', ageGroup: 'Jet lag', male: '0.5–5', female: '0.5–5', pregnancy: null, breastfeeding: null, unit: 'mg — for 2–3 nights only' },
  ],

  pregnancyInfo: {
    howImportant: 'Melatonin supplement pregnancy mein AVOID karna chahiye. Endogenous melatonin naturally badhta hai pregnancy mein aur fetal development mein role karta hai — lekin exogenous supplement ka fetal development par effect properly studied nahi hai. Animal studies mein reproductive effects dekhe gaye hain.',
    dailyRequired: 'AVOID — no supplement recommended',
    babyEffects: [
      'Exogenous melatonin ka fetal development pe effect properly studied nahi hai',
      'Animal studies mein reproductive effects dekhe gaye hain',
      'Endogenous melatonin naturally badhta hai — supplement ki zaroorat nahi',
      'Sleep problems ke liye safe non-pharmacological options hain (sleep hygiene, CBT-I)',
    ],
    supplementSafe: false,
    doctorLine: 'Pregnancy mein sleep problems ke liye OB-GYN se milein — safe non-pharmacological options hain. Melatonin supplement BILKUL mat lena bina doctor ke.',
  },

  childrenInfo: {
    deficiencySymptoms: [
      'Sone mein bahut zyada problem (>45 minutes)',
      'Raat ko frequent waking',
      'ADHD ya autism spectrum mein sleep issues zyada common',
      'Daytime behavior problems linked to poor sleep',
    ],
    ageWiseRequirement: 'Sirf pediatrician ki guidance mein. Koi standard dose nahi — usually 0.5–1 mg bahut chhoti dose se shuroo.',
    foodSources: 'Raat ko warm milk, banana, oats — natural sleep-supporting foods.',
    supplementNote: 'ADHD, autism spectrum disorder ya certain developmental conditions mein sleep problems ke liye pediatricians recommend karte hain — lekin khud se mat do. Dose children mein bahut alag hoti hai.',
  },

  labTestInfo: {
    testName: 'Serum Melatonin / Salivary Melatonin (DLMO Test)',
    testSlug: 'melatonin-test',
    normalRange: 'Raat 2-4 AM: 80–120 pg/mL. Daytime: <10 pg/mL. DLMO (Dim Light Melatonin Onset): sunset ke ~2 hrs baad normally shuru hoti hai.',
    whenToTest: 'Severe circadian rhythm disorder suspected ho. Delayed Sleep Phase Disorder (DSPD) diagnose karna ho. Shift work disorder evaluation. Routine mein zaroori nahi — clinical use limited hai.',
    repeatAfter: 'Sleep hygiene + supplement se 4–6 hafte baad reassess karo.',
    priceRange: 'India mein melatonin test widely available nahi hai — specialized sleep clinics mein available. Approximate cost ₹2,000–₹5,000. Sleep diary aur clinical evaluation zyada practical hai.',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Immediate Release (IR) Tablets',
      benefits: ['Sabse common form', 'Fast acting — 30–60 min mein blood level peak', 'India mein widely available OTC'],
      drawbacks: ['Sleep maintenance insomnia mein kam effective', '0.5 mg, 1 mg, 3 mg, 5 mg available India mein'],
      bestFor: 'Sone mein problem (sleep onset insomnia) — sone se 30 min pehle',
    },
    {
      _key: 'sf2',
      formName: 'Sustained / Extended Release (SR/ER) Tablets',
      benefits: ['6–8 ghante slowly release; steady blood level maintain karta hai', 'Sleep maintenance ke liye better'],
      drawbacks: ['Mat chewao ya crush karo — coating important hai slow release ke liye', 'Thoda mehenga'],
      bestFor: 'Raat ko baar baar uthne waali problem (sleep maintenance insomnia)',
    },
    {
      _key: 'sf3',
      formName: 'Sublingual Drops / Spray',
      benefits: ['Directly bloodstream mein — liver first-pass bypass', '15–20 min mein effect', 'Dose control easy'],
      drawbacks: ['30–60 sec tongue ke neeche rakho pehle swallow karo', 'India mein limited availability'],
      bestFor: 'Fastest onset chahiye ho toh; tablet ligilana mushkil ho',
    },
    {
      _key: 'sf4',
      formName: 'Gummies (Chewable)',
      benefits: ['Lene mein aasaan', 'Children ke liye practical (pediatrician consult ke baad)'],
      drawbacks: ['Sugar se absorption slightly affect ho sakti hai', 'India mein imported brands mein available; exact dosing important'],
      bestFor: 'Bacche ya jo tablets se darein (pediatric sleep issues — only after pediatrician consult)',
    },
  ],

  supplementTiming: {
    bestTime: 'Sone se 30–60 minute pehle — IR tablets ke liye. SR tablets: 60–90 minutes pehle. Sublingual: 15–20 minutes pehle. Same time roz lo — consistency important hai.',
    withFood: 'Khana khane ke baad lena zyada preferred hai — fatty meal ke saath absorption slightly better hoti hai. Heavy meal se avoid karo — 1–2 ghante baad light snack ke saath ideal.',
    absorptionTips: [
      'Room dark kar lo aur screen band karo sone se pehle — environment melatonin ka natural rise support karta hai',
      'Magnesium glycinate saath mein lena sleep quality further improve karta hai',
      'Chhoti dose se shuroo karo — 0.5 mg; zyada zaroorat nahi hoti zyada log mein',
    ],
    avoidWith: [
      'Alcohol ke saath bilkul nahi — CNS depression additive aur melatonin metabolism disturb',
      'Caffeine (chai/coffee) raat ko — melatonin production suppress karta hai',
      'High-dose Vitamin B12 at bedtime — alerting effect, melatonin ke opposite kaam karta hai',
      'Heavy meal sone se 2 hrs pehle — digestion focus divert karta hai sleep se',
    ],
  },

  drugInteractions: [
    {
      _key: 'di1',
      medicineName: 'Sedatives / Benzodiazepines (Diazepam, Alprazolam)',
      reason: 'CNS depression ADDITIVE — excessive sedation, next-day grogginess, falls risk badhta hai. Combination avoid karo; agar zaroorat ho toh doctor supervision mein kam dose mein.',
    },
    {
      _key: 'di2',
      medicineName: 'Warfarin (Blood Thinner)',
      reason: 'Melatonin Warfarin ka metabolism affect karta hai — INR change ho sakta hai, bleeding risk. Warfarin patients mein melatonin start karne se pehle coagulation test karwao; regular INR monitoring zaroor.',
    },
    {
      _key: 'di3',
      medicineName: 'Fluvoxamine (Luvox) / SSRIs',
      reason: 'Fluvoxamine melatonin metabolism strongly inhibit karta hai — melatonin levels 12x tak badh sakte hain. Fluvoxamine ke saath melatonin mat do; other SSRIs ke saath low dose use careful monitoring ke saath.',
    },
    {
      _key: 'di4',
      medicineName: 'Beta-blockers (Atenolol, Metoprolol)',
      reason: 'Beta-blockers endogenous melatonin production suppress karte hain — ye ek karan hai ki BP patients mein insomnia hota hai. Low-dose melatonin (0.5–1 mg) supplementation helpful ho sakta hai; cardiologist se discuss karo.',
    },
    {
      _key: 'di5',
      medicineName: 'Diabetes Medicines (Insulin, Metformin)',
      reason: 'Melatonin insulin sensitivity affect karta hai — blood sugar levels change ho sakte hain. Diabetic patients mein blood sugar closely monitor karo melatonin start karne par; dose adjustment zaroor ho sakti hai.',
    },
    {
      _key: 'di6',
      medicineName: 'Oral Contraceptive Pills (OCP)',
      reason: 'OCP melatonin levels naturally badhati hain — supplement ke saath over-supplementation risk. OCP users mein agar melatonin supplement lete hain toh lower dose se shuroo karo (0.5 mg).',
    },
  ],

  combinations: {
    beneficial: [
      { _key: 'cb1', nutrient: 'Magnesium (Glycinate/Threonate)', reason: 'Magnesium + Melatonin = best sleep combo. Magnesium GABA (calming neurotransmitter) ko activate karta hai aur melatonin sleep cycle set karta hai — double action. 200–400 mg magnesium glycinate sone se 1 hr pehle + 0.5–3 mg melatonin.' },
      { _key: 'cb2', nutrient: 'L-Theanine (Green Tea Extract)', reason: 'L-Theanine anxiety-induced insomnia mein help karta hai; melatonin circadian timing set karta hai — anxious mind waalo ke liye ideal combination. 100–200 mg L-theanine + 1–3 mg melatonin.' },
      { _key: 'cb3', nutrient: 'Ashwagandha (KSM-66)', reason: 'Ashwagandha cortisol kam karta hai (stress hormone) aur melatonin naturally badhne deta hai. Stress-related insomnia mein ye combination powerful hai — 300–600 mg ashwagandha extract + 1–3 mg melatonin.' },
    ],
    avoid: [
      { _key: 'ca1', nutrient: 'Alcohol', reason: 'CNS depression additive + melatonin metabolism disturb hota hai — combination se excessive sedation' },
      { _key: 'ca2', nutrient: 'Caffeine (raat ko)', reason: 'Melatonin production suppress karta hai — chai/coffee evening ke baad band karo' },
      { _key: 'ca3', nutrient: 'High-dose Vitamin B12 (at bedtime)', reason: 'Alerting effect karta hai — melatonin ke bilkul opposite; subah lo B12' },
    ],
    timingGuide: 'Melatonin sone se 30-60 min pehle lo. Magnesium bhi saath ya 1 hr pehle. B12 subah lo — raat ko nahi. Alcohol us raat pe nahi.',
  },

  toxicity: {
    upperLimit: 'Koi official UL set nahi hai. Generally 10 mg se zyada lene ki zaroorat nahi — most studies mein 0.5–5 mg effective hai.',
    sideEffects: [
      'Daytime drowsiness — especially zyada dose mein ya morning mein lene pe',
      'Headache — dose-dependent',
      'Dizziness — especially elderly mein',
      'Nausea — high dose pe',
      'Vivid dreams ya nightmares — especially SR form mein',
      'Mood changes — rare',
    ],
    whenSerious: 'Long-term daily use endogenous melatonin production suppress kar sakta hai (downregulation). Pehle sleep hygiene fix karo, melatonin short-term band-aid ki tarah use karo. Agar 2 hafte mein koi fark nahi, dose ya timing reconsider karo aur doctor se milein.',
  },

  timeline: {
    bloodLevelTime: 'IR tablets se blood level 30–60 min mein peak hota hai — same raat acute effect milta hai.',
    symptomsTime: 'Sleep onset improvement: 1–7 din. Circadian rhythm reset (jet lag): 2–4 din. Chronic insomnia pattern: 2–4 hafte.',
    fullRecoveryTime: 'Consistent sleep improvement ke liye 1–7 din lagein choke hain. Sleep hygiene ke saath combination best results deta hai.',
    repeatTestTime: '2 hafte mein reassess karo — agar koi fark nahi to dose/timing reconsider karo.',
    patientNote: 'Melatonin sleep hygiene ka replacement nahi hai — dark room, fixed sleep time, screen band karo pehle. Melatonin ek tool hai, solution nahi. Cyclically use karo — zaroorat mein, hamesha nahi.',
  },

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Insomnia', diseaseSlug: 'insomnia', isAvailable: true, connection: 'Low melatonin production is a key factor in insomnia; supplement helps reset circadian rhythm' },
    { _key: 'ld2', diseaseName: 'Depression', diseaseSlug: 'depression', isAvailable: true, connection: 'Melatonin involved in seasonal affective disorder (SAD); light therapy and melatonin help' },
    { _key: 'ld3', diseaseName: 'Anxiety', diseaseSlug: 'anxiety', isAvailable: true, connection: 'Sleep disruption worsens anxiety; melatonin indirectly helps by improving sleep quality' },
    { _key: 'ld4', diseaseName: 'OCD', diseaseSlug: 'ocd', isAvailable: true, connection: 'Sleep disturbance is common in OCD; melatonin helps regulate sleep-wake cycle' },
    { _key: 'ld5', diseaseName: 'Migraine', diseaseSlug: 'migraine', isAvailable: true, connection: 'Poor sleep is a major migraine trigger; melatonin improves sleep quality' },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Insomnia (Neend Na Aana)', symptomSlug: 'insomnia' },
    { _key: 'ls2', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
    { _key: 'ls3', symptomName: 'Headache', symptomSlug: 'headache' },
    { _key: 'ls4', symptomName: 'Depression Symptoms', symptomSlug: 'depression-symptoms' },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Thyroid TSH Test', testSlug: 'tsh', isAvailable: true },
    { _key: 'rt2', testName: 'Cortisol Test', testSlug: 'cortisol-test', isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Magnesium', vitaminSlug: 'magnesium' },
    { _key: 'rv2', vitaminName: 'Vitamin D', vitaminSlug: 'vitamin-d' },
    { _key: 'rv3', vitaminName: 'Vitamin B12', vitaminSlug: 'vitamin-b12' },
  ],

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Coffea Cruda',
      patientType: 'Mind bilkul active, thoughts nahi rukti, slightest noise jagati hai, hypersensitivity to all senses — ye insomnia classic Coffea Cruda picture hai. Overjoyed ya excited hone ke baad bhi.',
      howItHelps: 'Overactive mind ko calm karne ki koshish karta hai. Hypersensitivity aur racing thoughts wali insomnia mein traditionally use hota hai. Sleep ki preparation mein body ko signal dene ki koshish.',
    },
    {
      _key: 'h2',
      medicineName: 'Nux Vomica',
      patientType: 'Late night work, alcohol/caffeine abuse, stress — 3-4 AM uthna aur phir neend aana subah hone par. Urban professional insomnia. Irritable aur chidchide log.',
      howItHelps: 'Stress-related circadian disruption aur lifestyle-induced insomnia mein helpful. Liver aur nervous system support karta hai — digestion aur sleep dono pe positive asar.',
    },
    {
      _key: 'h3',
      medicineName: 'Passiflora Incarnata',
      patientType: 'Sleeplessness with exhaustion — body tired but mind restless. Convulsive restlessness, children aur elderly mein particularly useful.',
      howItHelps: 'Nervous exhaustion ke saath sleeplessness mein madadgar. Mother tincture 10-15 drops warm water mein sone se pehle traditionally use hoti hai. Passiflora GABA-like calming effect dikhata hai kuch research mein.',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Melatonin sirf neend ki goli hai — koi bhi le sakta hai',
      truth: 'Melatonin ek HORMONE hai, sirf ek neem-hakim supplement nahi. Ye body ki endocrine system ka hissa hai. Galat dose ya timing se circadian rhythm aur khrab ho sakta hai — WORSE insomnia possible.',
    },
    {
      _key: 'm2',
      myth: 'Zyada melatonin = aur achchi neend',
      truth: 'GALAT. 0.5 mg melatonin often 5 mg jitna effective hai sleep onset ke liye. Studies show karte hain ki lower doses zyada physiological hain. Higher doses daytime drowsiness aur vivid dreams create karte hain.',
    },
    {
      _key: 'm3',
      myth: 'Melatonin non-habit forming hai toh roz lena safe hai',
      truth: 'Long-term daily use endogenous melatonin production suppress kar sakta hai — body apna banana band karne lagti hai (downregulation). Pehle sleep hygiene fix karo, melatonin short-term band-aid ki tarah use karo.',
    },
    {
      _key: 'm4',
      myth: 'Melatonin pregnancy mein safe hai — natural hormone hai',
      truth: 'BILKUL GALAT. Pregnancy mein melatonin supplement AVOID karna chahiye. Fetal development par effect properly studied nahi. "Natural" ka matlab safe nahi hota — progesterone bhi natural hormone hai aur pregnancy mein carefully managed hoti hai.',
    },
    {
      _key: 'm5',
      myth: 'Melatonin sirf jet lag ke liye hai',
      truth: 'Melatonin jet lag mein zaroor help karta hai lekin shift workers, blind individuals ka circadian rhythm reset karna, delayed sleep phase disorder (DSPD), aur age-related insomnia mein bhi evidence-based use hai.',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Melatonin sone se kitni der pehle lena chahiye?',
      answer: 'Immediate release: sone se 30–60 minutes pehle. Sublingual drops: 15–20 minutes pehle. Extended release: 60–90 minutes pehle. Timing equally important hai dose se — same time roz lo consistency ke liye.',
    },
    {
      _key: 'faq2',
      question: 'Melatonin ki sahi dose kya hai?',
      answer: 'Chhoti dose se shuroo karo — 0.5 mg ya 1 mg. Maximum 5 mg generally recommended. Most studies mein 1–3 mg effective paya gaya hai sleep onset ke liye. Zyada dose zyada better nahi — often side effects zyada milte hain.',
    },
    {
      _key: 'faq3',
      question: 'Kya melatonin bachcho ko de sakte hain?',
      answer: 'Sirf pediatrician ki guidance mein. ADHD, autism spectrum disorder ya certain developmental conditions mein sleep problems ke liye pediatricians recommend karte hain — lekin khud se mat do. Dose children mein bahut alag hoti hai.',
    },
    {
      _key: 'faq4',
      question: 'Melatonin kitne din mein kaam karna shuru karta hai?',
      answer: 'Blood level same raat badhta hai — acute effect hota hai. Lekin consistent sleep improvement ke liye 1–7 din lagein choke hain. Agar 2 hafte mein koi fark nahi, dose ya timing reconsider karo aur doctor se milein.',
    },
    {
      _key: 'faq5',
      question: 'Kya melatonin se neend ki aadat pad jaati hai?',
      answer: 'Direct dependency nahi padti jaise benzodiazepines se padti hai. Lekin long-term daily use se body apna melatonin banana kam kar sakti hai (receptor downregulation). Isliye cyclically use karo — zaroorat mein, hamesha nahi.',
    },
    {
      _key: 'faq6',
      question: 'Melatonin aur alcohol saath lena kya safe hai?',
      answer: 'Bilkul nahi. Dono CNS depressants hain — combination se excessive sedation, next-day cognitive impairment, aur coordination problems ho sakte hain. Melatonin lene wali raat alcohol avoid karo.',
    },
    {
      _key: 'faq7',
      question: 'Blood pressure ki dawai ke saath melatonin le sakte hain?',
      answer: 'Depends on which medicine. Beta-blockers (atenolol, metoprolol) natural melatonin suppress karte hain — supplement helpful ho sakta hai but cardiologist se puchho. Calcium channel blockers ke saath generally safer but confirm karo.',
    },
    {
      _key: 'faq8',
      question: 'Kya melatonin weight loss mein help karta hai?',
      answer: 'Indirect evidence hai. Achchi neend se cortisol normal rehta hai, ghrelin (hunger hormone) balanced rehta hai — jo weight management mein help karta hai. Direct fat-burning effect melatonin ka nahi hai. Sleep quality improve karo, weight automatically better manage hoga.',
    },
    {
      _key: 'faq9',
      question: 'Shift workers melatonin kab lein?',
      answer: 'Shift workers ke liye timing tricky hai — sleep schedule irregular hoti hai. Generally designated sleep time se 30 min pehle lo, chahe raat ho ya din. Sleep mask aur dark room ke saath combination zyada effective hai.',
    },
    {
      _key: 'faq10',
      question: 'Melatonin se kya side effects hote hain?',
      answer: 'Common: daytime drowsiness (especially zyada dose mein), headache, dizziness, nausea. Less common: vivid dreams ya nightmares, mood changes, hypothermia. Rare: allergic reaction. Side effects generally dose-dependent hain — dose kam karo to resolve hote hain.',
    },
    {
      _key: 'faq11',
      question: 'Melatonin aur depression ka kya connection hai?',
      answer: 'Melatonin seasonal affective disorder (SAD — winter depression) mein therapeutic role hai. Serotonin-melatonin pathway related hain. Lekin clinical depression ke liye melatonin REPLACEMENT nahi hai antidepressants ka — psychiatrist se milein.',
    },
    {
      _key: 'faq12',
      question: 'India mein melatonin OTC milta hai ya prescription lagti hai?',
      answer: 'India mein melatonin 1mg, 3mg, 5mg commonly OTC available hai (Sleepwell, SleepMelts, various brands). Schedule H drug nahi hai officially. Lekin self-prescribe mat karo — especially agar psychiatric ya cardiac medicines le rahe ho.',
    },
    {
      _key: 'faq13',
      question: 'Melatonin lene ke baad bhi neend nahi aayi — kya karein?',
      answer: 'First: timing check karo — sone se 30–60 min pehle lena chahiye. Second: environment check — room dark aur cool hona chahiye. Third: dose too high bhi problem cause kar sakta hai — try 0.5 mg. Fourth: underlying anxiety ya depression rule out karo doctor se.',
    },
    {
      _key: 'faq14',
      question: 'Kya melatonin immune system ke liye acha hai?',
      answer: 'Emerging research mein melatonin mein antioxidant aur immunomodulatory properties paayi gayi hain. COVID-19 mein adjuvant ke roop mein investigated hua. Lekin immune booster ke roop mein main use mat karo — sleep improvement hi primary indication hai.',
    },
    {
      _key: 'faq15',
      question: 'Melatonin kab band karna chahiye?',
      answer: 'Agar sleep problem solve ho gayi — band karo. Sleep hygiene improve ho gayi toh body apna melatonin manage kar leti hai. Gradually band karo — abruptly band karne se temporary sleep disruption ho sakta hai.',
    },
    {
      _key: 'faq16',
      question: 'Anxious hone ki wajah se neend nahi aati — melatonin kaam karega?',
      answer: 'Partial help milegi. Melatonin sleep timing set karta hai, anxiety treat nahi karta. Anxiety-related insomnia ke liye L-Theanine + Melatonin combination better hai. Severe anxiety mein psychologist ya psychiatrist se CBT-I (Cognitive Behavioral Therapy for Insomnia) zyada effective hai.',
    },
    {
      _key: 'faq17',
      question: 'Melatonin khana khane ke baad lena chahiye ya khali pet?',
      answer: 'Khana khane ke baad lena zyada preferred hai — fatty meal ke saath absorption slightly better hoti hai. Lekin heavy meal se avoid karo — 1–2 ghante baad light snack ke saath ideal. High carb snack + melatonin = good combo for sleep.',
    },
    {
      _key: 'faq18',
      question: 'Kya melatonin cancer mein helpful hai?',
      answer: 'Preliminary research mein melatonin mein oncostatic properties (tumor growth inhibit karne wali) paayi gayi hain. Kuch studies mein chemo side effects reduce hue. Lekin cancer treatment melatonin SE NAHI hoti — oncologist ke protocols follow karo. Adjuvant ke roop mein oncologist ki guidance mein discuss karo.',
    },
    {
      _key: 'faq19',
      question: 'Melatonin ka natural alternative kya hai supplement ke alawa?',
      answer: 'Sleep hygiene: same time sona-uthna, blue light block (orange glasses raat ko), dark room, cool temperature (18–22°C). Natural foods: raat ko pista, warm milk, banana. Relaxation: meditation, warm bath. Ye sab pehle try karo — supplement last resort ho.',
    },
    {
      _key: 'faq20',
      question: 'Elderly mein melatonin ka use safe hai?',
      answer: 'Yes — elderly mein melatonin production naturally decreases with age (pineal gland calcification). Low-dose melatonin (0.5–1 mg) elderly insomnia mein evidence-based safe option hai. Lekin physician se pehle confirm karo — multiple medications hoti hain usually jinka interaction possible hai.',
    },
  ],

  sources: [
    'NIH Office of Dietary Supplements — Melatonin Fact Sheet (2024)',
    'NCBI — Melatonin: Pharmacology, Functions and Therapeutic Benefits (2017)',
    'Drugs.com — Melatonin Drug Interactions Database',
    'ScienceDirect — Melatonin in food sources: PhytoMelatonin review (2020)',
    'Sleep Foundation — Melatonin Dosage Guide (2024)',
    'Restorative Medicine — Clinical Guide to Melatonin',
    '1mg India — Melatonin supplement availability and dosing (2024)',
  ],
}

async function seed() {
  try {
    console.log('Seeding Melatonin...')
    const result = await client.createOrReplace(melatonin)
    console.log('Done:', result._id)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seed()
