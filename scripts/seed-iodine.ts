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

const iodine = {
  _id: 'vitamin-iodine',
  _type: 'vitamin',
  name: 'Iodine',
  hindiName: 'Thyroid Ka Khaana / Aayodeen',
  category: 'Mineral',
  slug: { _type: 'slug', current: 'iodine' },
  metaTitle: 'Iodine Ki Kami: Lakshan, Foods aur Homeopathic Ilaj',
  metaDescription: 'Iodine ki kami ke lakshan, vegetarian food sources, normal range aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: 'Meri practice mein jo patients unexplained weight gain, hair fall aur thakaan lekar aate hain — unke thyroid profile mein TSH elevated milta hai, lekin agar main poochta hoon to pata chalta hai ki ghar mein sea salt ya Himalayan salt use hoti hai, iodized nahi. Sirf iodized namak switch karne aur dairy regular karne se hi kaafi patients mein 3-4 mahine mein improvement dikhti hai.',

  quickFacts: {
    indiaPrevalence: 'India mein 200 million+ log iodine deficiency ke risk mein hain — especially sub-Himalayan, inland aur pahadi ilakon mein (Source: ICMR / PubMed PMC3818611).',
    commonDeficiencySign: 'Galay pe swelling (Goitre / Ghengha) — thyroid gland ka bada hona.',
    mainFoodSource: 'Iodized namak — din bhar ki zaroorat ka sabse reliable vegetarian source.',
    normalRangeQuick: 'Adults: 100–199 mcg/L (urine) | Pregnancy: 150–249 mcg/L (Source: WHO / NIH ODS)',
  },

  whatIsIt: 'Iodine ek zaroori mineral hai jo body khud nahi bana sakti — sirf khane ya supplement se milta hai. Iska sabse important kaam hai thyroid gland ki help karna — jo T3 aur T4 hormones banata hai. Ye hormones poori body ka metabolism, growth aur brain development control karte hain. Thyroid gland body ka 80% iodine store karta hai. Simple words mein: iodine ke bina thyroid kaam nahi karta, aur thyroid ke bina body ka engine band. India mein iodine deficiency ek badi public health problem hai — especially inland aur pahadi ilakon mein jahan mitti mein naturally iodine kam hoti hai.',

  bodyFunctions: [
    'Thyroid hormone synthesis — T3 (triiodothyronine) aur T4 (thyroxine) banane ke liye iodine raw material hai; koi iodine = koi thyroid hormone',
    'Metabolism regulation — Thyroid hormones har cell ke metabolic rate control karte hain; iodine se indirectly energy, weight, temperature sab control hota hai',
    'Brain development — Fetal aur infant brain ke liye critical; first trimester mein iodine ke bina brain develop nahi hota (cretinism risk)',
    'Growth aur development — Bacchon mein height, weight aur bone development ke liye zaroori',
    'Reproductive function — Thyroid hormones fertility aur pregnancy maintenance mein role karte hain',
    'Immune function — Thyroid gland immune surveillance mein indirect role rakhta hai',
    'Heart rate regulation — Thyroid hormones cardiac output aur heart rate ko modulate karte hain',
    'Skin, hair aur nail health — Thyroid hormone deficiency se dry skin, hair fall aur brittle nails hote hain',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Haath-paon mein dard aur ache — hypothyroid myopathy ka sign',
      'Muscles mein weakness aur stiffness',
      'Joint pain — especially knees aur wrists',
    ],
    energyMoodBrain: [
      'Yaaddaasht kamzor hona, concentration mein takleef',
      'Depression ya mood mein badlaav — thyroid hormones serotonin affect karte hain',
      'Brain fog — dhundhla mehsoos karna, decisions lene mein takleef',
      'Bahut zyada thakaan aur aalas — metabolism gir jaata hai',
    ],
    skinHairNails: [
      'Rooks, sukhhi aur khurkhuri skin',
      'Baalon ka zyada jhadna aur dry baalen',
      'Nails brittle aur weak ho jaate hain',
    ],
    other: [
      'Galay mein swelling (Goitre/Ghengha) — thyroid gland ka bada hona; iodine ki kami ki sabse pehli sign',
      'Galay mein tightness ya kuch atka hua feel hona',
      'Nijalne mein takleif — bada thyroid food pipe pe pressure dalta hai',
      'Baar baar thanda lagana — especially haath paon thande rehna',
      'Weight badhna bina khaane ke — slow metabolism se hota hai',
      'Constipation — thyroid slow hone se digestion bhi slow',
    ],
  },

  deficiencyCauses: [
    'Iodized namak ka use nahi karna — India mein sabse common reason',
    'Pahadi ya inland ilakon mein rehna — mitti mein naturally iodine kam',
    'Dairy aur seafood kam khana — vegetarian diet mein limited sources',
    'Goitrogenic foods zyada khaana — kachchi gobi, phool gobi, soya, bajra thyroid uptake block karte hain',
    'Pregnancy aur breastfeeding — zaroorat 220–290 mcg/day ho jaati hai',
    'Zinc ya selenium ki kami — ye minerals iodine metabolism mein help karte hain',
  ],

  normalRanges: [
    { _key: 'nr1', category: 'Adult (Men/Women)', normal: '100–199', deficient: '<100 mcg/L — deficiency, goitre/hypothyroid risk', toxic: '>300 mcg/L — thyroid disruption possible', unit: 'mcg/L (urine)' },
    { _key: 'nr2', category: 'School-age Children', normal: '100–199', deficient: '<100 mcg/L — growth/brain development affected', toxic: '>300 mcg/L — over-supplementation risk', unit: 'mcg/L (urine)' },
    { _key: 'nr3', category: 'Pregnancy', normal: '150–249', deficient: '<150 mcg/L — miscarriage/cretinism risk; supplement zaroor', toxic: '>500 mcg/L — fetal thyroid risk', unit: 'mcg/L (urine)' },
    { _key: 'nr4', category: 'Breastfeeding', normal: '>100', deficient: '<100 mcg/L — baby ke development pe asar', toxic: '>300 mcg/L — excess passes to baby via milk', unit: 'mcg/L (urine)' },
    { _key: 'nr5', category: 'Daily Requirement (Adults)', normal: '150', deficient: 'N/A', toxic: 'UL: 1,100 mcg/day (NIH) — is se zyada nahi', unit: 'mcg/day' },
  ],

  vegSources: [
    { _key: 'v1', food: 'Iodized Namak', quantity: '½ tsp (3g)', amount: '~71–100 mcg — sirf labeled "Iodized Salt" use karein; Himalayan/sea salt iodized nahi hota' },
    { _key: 'v2', food: 'Dudh (Cow\'s Milk)', quantity: '1 glass (240ml)', amount: '~85–90 mcg — Vitamin D ke saath double benefit' },
    { _key: 'v3', food: 'Dahi (Plain Curd)', quantity: '1 katori (200g)', amount: '~50–70 mcg — probiotic + iodine combo; ghar ka bana dahi preferred' },
    { _key: 'v4', food: 'Anda (Egg)', quantity: '1 bada anda', amount: '~25–30 mcg — yolk mein zyada iodine hota hai' },
    { _key: 'v5', food: 'Paneer / Cheese', quantity: '30g', amount: '~10–12 mcg — limited but useful in vegetarian diet' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Cod Fish', quantity: '85g (3 oz)', amount: '~99 mcg — highest non-veg source; readily available in coastal areas' },
    { _key: 'nv2', food: 'Jhinga (Shrimp)', quantity: '85g', amount: '~35 mcg — good source for non-vegetarians' },
    { _key: 'nv3', food: 'Tuna (Canned)', quantity: '85g', amount: '~17 mcg — convenient source; omega-3 ka bonus' },
  ],

  sunlightNote: 'Iodine ka sunlight se koi seedha lena nahi hota. Sabse important practical tip: Sirf iodized namak use karo — Himalayan salt, sea salt, kala namak iodized nahi hota. Cooking mein iodized namak dish ban jaane ke baad add karein — zyada heat pe iodine ud jaata hai. Rozana ek glass dudh + dahi — vegetarians ke liye iodized namak ke saath best iodine combination hai. Seaweed avoid karo — iodine content bahut variable hoti hai. (Source: NIN India 2013, NIH ODS 2024)',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–6 months',    male: '110',  female: '110',  pregnancy: null,  breastfeeding: null,  unit: 'mcg/day (AI)' },
    { _key: 'd2', ageGroup: '7–12 months',   male: '130',  female: '130',  pregnancy: null,  breastfeeding: null,  unit: 'mcg/day (AI)' },
    { _key: 'd3', ageGroup: '1–8 saal',      male: '90',   female: '90',   pregnancy: null,  breastfeeding: null,  unit: 'mcg/day' },
    { _key: 'd4', ageGroup: '9–13 saal',     male: '120',  female: '120',  pregnancy: null,  breastfeeding: null,  unit: 'mcg/day' },
    { _key: 'd5', ageGroup: '14+ saal',      male: '150',  female: '150',  pregnancy: '220', breastfeeding: '290', unit: 'mcg/day (NIH/ICMR)' },
    { _key: 'd6', ageGroup: 'Elderly (60+)', male: '150',  female: '150',  pregnancy: null,  breastfeeding: null,  unit: 'mcg/day' },
  ],

  pregnancyInfo: {
    howImportant: 'Pregnancy mein iodine SABSE critical mineral mein se ek hai. Baby ka brain pehle trimester mein develop ho raha hota hai aur completely maa ke iodine pe depend karta hai. Kami se: miscarriage, premature birth, fetal brain damage (permanent IQ loss), hearing impairment, aur cretinism (severe lifelong mental retardation).',
    dailyRequired: '220 mcg/day (NIH) — normal adult se 47% zyada',
    babyEffects: [
      'Miscarriage ka risk',
      'Premature birth',
      'Fetal brain damage (permanent IQ loss)',
      'Hearing impairment',
      'Cretinism (severe lifelong mental retardation) — severe deficiency mein',
    ],
    supplementSafe: true,
    doctorLine: 'Pregnancy confirm hote hi thyroid profile (TSH, T3, T4) aur urinary iodine check karwayein. Most prenatal vitamins mein 150 mcg iodine hota hai — apne doctor se confirm karein ki aapki prenatal vitamin mein iodine hai ya nahi. "Pregnancy mein koi bhi supplement — iodine bhi — lene se pehle apna doctor zaroor consult karein."',
  },

  childrenInfo: {
    deficiencySymptoms: [
      'Height-weight expected rate se nahi badhte',
      'School mein performance poor rehti hai',
      'Speech development mein delay ho sakta hai',
      'Concentration zyada kharab hoti hai',
      'Newborns mein zyada jaundice ya feeding mein takleef bhi sign ho sakti hai',
    ],
    ageWiseRequirement: '0–6 months: 110 mcg | 7–12 months: 130 mcg | 1–8 saal: 90 mcg | 9–13 saal: 120 mcg | 14+ saal: 150 mcg',
    foodSources: 'Iodized namak se paka ghar ka khana, dudh, dahi — ye sab roz dene chahiye. Agar baccha dairy nahi leta to doctor se iodine supplement discuss karein.',
    supplementNote: 'Agar bacche ki growth aur learning mein koi concern hai to pediatrician se iodine status check karwayein.',
  },

  labTestInfo: {
    testName: 'Urinary Iodine Concentration (UIC) Test',
    testSlug: 'iodine-test',
    normalRange: 'Adults: 100–199 mcg/L adequate. Pregnancy: 150–249 mcg/L. Blood mein iodine measure karna less common — urinary test zyada accurate hota hai. Spot urine test se ho jaata hai — 24 hour collection always zaroori nahi.',
    whenToTest: 'Thyroid problems suspected hon (goitre, hypothyroid symptoms). Pregnancy mein routine check (especially pahadi ya inland ilakon mein). Dairy aur iodized namak nahi khaane walon mein. Bacche ki growth concern ho.',
    repeatAfter: 'Urinary iodine levels 2–4 hafte mein improve hone lagte hain; thyroid hormones normalize hone mein 3–6 mahine. 3 mahine baad test repeat karaye.',
    priceRange: 'Metropolis ya Dr. Lal PathLabs pe available, price approx ₹300–₹800. Doctor aapko saath mein Thyroid Profile (TSH, T3, T4) bhi karwane ko kaeh sakte hain.',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Potassium Iodide (KI)',
      benefits: ['Sabse widely studied', 'Rapid absorption', 'Iodized salt mein bhi yahi form hota hai', 'Sabse recommended form'],
      drawbacks: ['High dose mein thyroid upset kar sakta hai', 'Taste mildly metallic'],
      bestFor: 'General iodine deficiency treatment; doctor-prescribed use',
    },
    {
      _key: 'sf2',
      formName: 'Sodium Iodide',
      benefits: ['Achi absorption', 'Kuch IV drip formulations mein use hota hai'],
      drawbacks: ['Common OTC supplement mein kam milta hai', 'Medical supervision mein use hota hai'],
      bestFor: 'Medical settings; IV nutrition formulations mein',
    },
    {
      _key: 'sf3',
      formName: 'Nascent Iodine (Atomic Iodine)',
      benefits: ['Kuch practitioners claim better absorption', 'Liquid drops form mein available'],
      drawbacks: ['Limited clinical research', 'Expensive (₹₹₹)', 'Unregulated market mein quality variable'],
      bestFor: 'Sirf agar doctor specifically suggest kare; evidence limited hai',
    },
    {
      _key: 'sf4',
      formName: 'Kelp / Seaweed Supplement',
      benefits: ['Natural source'],
      drawbacks: ['Iodine content highly variable — ek batch mein too much bhi ho sakta hai', 'Thyroid patients ke liye risky', 'Quality control poor India mein'],
      bestFor: 'Generally AVOID karna better hai jab tak doctor na kahe — standard potassium iodide supplement zyada reliable hai',
    },
  ],

  supplementTiming: {
    bestTime: 'Subah khane ke saath lena best — GI discomfort kam hoti hai. Cooking mein iodized namak dish ban jaane ke baad add karein (high heat se iodine ud sakta hai).',
    withFood: 'Khane ke saath lena best — iodine water-soluble hai lekin food ke saath absorption smooth hoti hai.',
    absorptionTips: [
      'Selenium ke saath lena faydemand hai — dono milkar thyroid ke liye better kaam karte hain',
      'Iodized namak dish mein end mein add karo — cooking ke time high heat se iodine kuch ud jaata hai',
      'Morning sun exposure + iodized food + Vitamin D supplement — triple benefit for thyroid health',
    ],
    avoidWith: [
      'Iron ke saath same time — iron iodine absorption reduce karta hai; minimum 2 ghante ka gap rakhein',
      'Calcium ke saath same time — absorption mildly affect hoti hai; gap se lena better',
      'Kachchi goitrogenic vegetables (gobi, phool gobi, broccoli, soya) ke saath same meal mein — thyroid uptake block karte hain; pakaye hue vegetables theek hain',
      'Chai/coffee ke saath same time — tannins mineral absorption affect karte hain',
    ],
  },

  drugInteractions: [
    {
      _key: 'di1',
      medicineName: 'Antithyroid Medicines (Methimazole, Propylthiouracil/PTU)',
      reason: 'Iodine supplement inki effectiveness kam kar sakta hai — ye medicines hyperthyroidism ke liye di jaati hain jo thyroid hormone production rokti hain. Antithyroid medicines le rahe hain to iodine supplement doctor ke bina bilkul mat lo; close monitoring zaroori hai.',
    },
    {
      _key: 'di2',
      medicineName: 'Lithium (Bipolar Disorder Ki Medicine)',
      reason: 'Lithium aur iodine dono thyroid pe asar karte hain; combination se hypothyroidism risk badh jaata hai. Lithium patients mein iodine supplement ke liye psychiatrist + endocrinologist dono se guidance lo.',
    },
    {
      _key: 'di3',
      medicineName: 'Amiodarone (Heart Rhythm Medicine)',
      reason: 'Amiodarone mein khud zyada iodine hota hai; extra supplement se thyroid seriously disturb ho sakti hai — hypo ya hyperthyroidism dono possible. Amiodarone le rahe hain to iodine supplement absolutely avoid karo bina cardiologist + endocrinologist guidance ke.',
    },
    {
      _key: 'di4',
      medicineName: 'ACE Inhibitors (Lisinopril, Enalapril — BP Ki Medicine)',
      reason: 'Iodine se blood potassium badh sakta hai; ACE inhibitors already potassium raise karte hain — combination se dangerous hyperkalemia possible. ACE inhibitor le rahe hain to iodine supplement shuru karne se pehle doctor se zaroor poochein; potassium monitor karo.',
    },
  ],

  combinations: {
    beneficial: [
      { _key: 'cb1', nutrient: 'Selenium', reason: 'Selenium iodine ko thyroid hormones (T3, T4) mein convert karne mein directly help karta hai — dono milkar best kaam karte hain. Brazil nuts, akhrot, sunflower seeds mein selenium hota hai. Subah iodine supplement ke saath selenium bhi lo.' },
      { _key: 'cb2', nutrient: 'Zinc', reason: 'Zinc thyroid hormone synthesis mein co-factor hai — iodine ka effect optimize hota hai. Iodine + Selenium + Zinc ek powerful thyroid support trio hai.' },
      { _key: 'cb3', nutrient: 'Vitamin D', reason: 'Thyroid patients mein often Vitamin D bhi low hoti hai. Dono saath lene se overall thyroid health better hoti hai. Morning sun exposure + iodized food + Vitamin D supplement — triple benefit.' },
    ],
    avoid: [
      { _key: 'ca1', nutrient: 'Iron (same time)', reason: 'Iron iodine absorption reduce karta hai; minimum 2 ghante ka gap rakhein' },
      { _key: 'ca2', nutrient: 'Calcium (same time)', reason: 'Absorption mildly affect hoti hai; gap se lena better' },
      { _key: 'ca3', nutrient: 'Raw goitrogenic vegetables (same meal)', reason: 'Gobi, phool gobi, broccoli, soya kachche thyroid iodine uptake block karte hain; pakaye hue theek hain' },
    ],
    timingGuide: 'Iodine subah khane ke saath lo. Selenium saath mein lo — synergistic. Iron se 2 ghante ka gap rakho. Calcium se gap rakho. Evening mein kachcha gobi-type veggies avoid karo iodine ke saath.',
  },

  toxicity: {
    upperLimit: '1,100 mcg/day (NIH Tolerable Upper Intake Level for adults). Standard supplement doses (150–220 mcg) is limit se kaafi door hoti hain — isliye safe hain.',
    sideEffects: [
      'Nausea aur burning in throat — high dose pe',
      'Irregular heartbeat — very high dose mein',
      'Thyroid swelling — Wolff-Chaikoff effect (paradoxical thyroid shutdown)',
      'Hypothyroidism ya hyperthyroidism dono possible — zyada iodine se',
      'Iodine-induced thyroiditis — pre-existing thyroid condition mein zyada risk',
    ],
    whenSerious: 'Bahut zyada iodine bhi thyroid ko disturb kar deta hai — isse hypothyroidism ya hyperthyroidism dono ho sakte hain (Wolff-Chaikoff effect). "Doctor ki salah ke bina high dose iodine supplement kabhi mat lo."',
  },

  timeline: {
    bloodLevelTime: 'Urinary iodine levels 2–4 hafte mein improve hone lagte hain supplement + iodized namak se.',
    symptomsTime: 'Thyroid hormones normalize hone mein 3–6 mahine lag sakte hain. Hair fall, weight, mood mein visible improvement 3–6 mahine ke baad milta hai.',
    fullRecoveryTime: 'Goitre shrink hone mein aur zyada time lag sakta hai — especially purani ya badi goitre. Doctor monitoring zaroori hai.',
    repeatTestTime: '3 mahine baad test repeat karaye — tab hi pata chalega ki treatment kaam kar rahi hai ya nahi.',
    patientNote: 'Ek hafte mein fark nahi dikhega — patience zaroori hai. Iodized namak switch karo, dahi-dudh daily lo. 3 mahine consistently karo phir test karo.',
  },

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Thyroid (General)', diseaseSlug: 'thyroid', isAvailable: false, connection: 'Iodine is the primary raw material for thyroid hormone production — deficiency directly causes thyroid dysfunction' },
    { _key: 'ld2', diseaseName: 'Hypothyroidism', diseaseSlug: 'hypothyroidism', isAvailable: true, connection: 'Iodine deficiency is a major preventable cause of hypothyroidism in India' },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Goitre (Neck Swelling)', symptomSlug: 'goitre' },
    { _key: 'ls2', symptomName: 'Fatigue / Thakaan', symptomSlug: 'fatigue' },
    { _key: 'ls3', symptomName: 'Weight Gain (Unexplained)', symptomSlug: 'weight-gain' },
    { _key: 'ls4', symptomName: 'Hair Fall', symptomSlug: 'hair-fall' },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Urinary Iodine Concentration (UIC)', testSlug: 'iodine-test', isAvailable: false },
    { _key: 'rt2', testName: 'Thyroid Profile (TSH, T3, T4)', testSlug: 'thyroid-profile', isAvailable: false },
    { _key: 'rt3', testName: 'Anti-TPO Antibody (Hashimoto\'s check)', testSlug: 'anti-tpo-test', isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Selenium', vitaminSlug: 'selenium' },
    { _key: 'rv2', vitaminName: 'Zinc', vitaminSlug: 'zinc' },
    { _key: 'rv3', vitaminName: 'Vitamin D', vitaminSlug: 'vitamin-d' },
  ],

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Fair complexion, weight gain se pareshan, bahut thak jaate hain, thanda zyada lagta hai, aur sone ke baad bhi fresh nahi uthte. Ye hypothyroid pattern se milta-julta constitution hai.',
      howItHelps: 'Body ki metabolism aur energy utilization ko support karne ki koshish karta hai. Poor absorption aur sluggish thyroid-type constitution mein use hota hai. Iodine severe deficiency mein pehle conventional treatment zaroori hai — homeopathy complementary role mein.',
    },
    {
      _key: 'h2',
      medicineName: 'Fucus Vesiculosus',
      patientType: 'Weight gain, slow digestion, aur thyroid gland mein swelling (goitre) feel kar rahe hain.',
      howItHelps: 'Ye plant naturally iodine-rich hai — iske homeopathic preparation mein thyroid function ko gently stimulate karne ka traditional use hai. Goitre associated cases mein homeopaths isko commonly use karte hain. Conventional iodine treatment ke complementary role mein.',
    },
    {
      _key: 'h3',
      medicineName: 'Thyroidinum',
      patientType: 'Hypothyroid type ke symptoms — memory poor hai, hamesha thaka hua feel hota hai, skin dry hai. Thyroid sarcode pe based ye medicine.',
      howItHelps: 'Thyroid support ke liye homeopaths mein use hoti hai, especially jab diagnosis already ho chuki ho. Sirf qualified homoeopath ki guidance mein — potency aur dose har patient ke hisaab se alag hoti hai.',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Himalayan pink salt ya sea salt se poora iodine mil jaata hai',
      truth: 'Himalayan salt, sea salt, kala namak — inhein iodize nahi kiya jaata. Sirf labeled "iodized salt" ya "iodized namak" hi iodine deta hai. Agar aap fancy salt use karte hain to aapko iodine nahi mil raha — NIN India study bhi yahi confirm karta hai (avg 2.9 mcg/100g bina iodized salt ke vegetarian recipes mein).',
    },
    {
      _key: 'm2',
      myth: 'Iodine ki kami sirf pahadi logon ko hoti hai',
      truth: 'Haan, inland aur pahadi ilakon mein zyada common hai — lekin India mein 200 million+ logon ko risk hai, city logon ko bhi. Agar aap iodized namak nahi use karte, dairy kam khate hain, ya sirf sea/pink salt use karte hain to aap bhi risk mein hain.',
    },
    {
      _key: 'm3',
      myth: 'Zyada iodine lete rahenge to thyroid better rehegi',
      truth: 'Iodine aur thyroid ka U-shaped relationship hai — bahut kam bhi problem, bahut zyada bhi problem. Upper limit 1,100 mcg/day hai. Usse zyada lene se thyroid damage ho sakta hai (Wolff-Chaikoff effect — thyroid khud ko protect karne ke liye shut down kar leta hai).',
    },
    {
      _key: 'm4',
      myth: 'Thyroid disease hai to iodine bilkul mat lo',
      truth: 'Ye depends karta hai kis type ki thyroid disease hai. Hypothyroidism with iodine deficiency mein iodine supplement helpful ho sakta hai. Autoimmune thyroid (Hashimoto\'s) mein zyada iodine harmful ho sakta hai. Isi liye doctor se diagnosis ke baad hi decide karna chahiye — blindly avoid ya blindly lo, dono galat hain.',
    },
    {
      _key: 'm5',
      myth: 'Goitre ho gayi to ab supplement se nahi theek hogi',
      truth: 'Early stage goitre iodine supplement se improve ho sakti hai — research iska support karta hai. Purani ya badi goitre mein time zyada lagta hai aur doctor monitoring zaroori hai. Jo bhi ho — doctor se check karaye pehle.',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Iodine ki kami ke kya lakshan hain?',
      answer: 'Iodine ki kami ke sabse pehle signs hain — galay mein swelling (goitre/ghengha), bahut zyada thakaan, weight badhna bina kisi khaas karan ke, aur baalon ka jhadna. Thyroid slow ho jaata hai to poori body ka system slow ho jaata hai — hamesha thanda lagana, mood down rehna, aur concentration mein takleef bhi common hain. Agar aap ye symptoms feel kar rahein hain to doctor se thyroid profile test karaye.',
    },
    {
      _key: 'faq2',
      question: 'Iodine kisme sabse zyada paya jaata hai — vegetarian foods mein?',
      answer: 'Vegetarian foods mein iodine ke sabse reliable sources hain: iodized namak, dudh (gaye ka), dahi, aur paneer. NIN India ke ek study ne confirm kiya ki bina iodized namak ke paki 38 vegetarian recipes mein average sirf 2.9 mcg iodine per 100g tha — jo bahut kam hai. Isliye vegetarians ke liye iodized namak use karna non-negotiable hai.',
    },
    {
      _key: 'faq3',
      question: 'Iodine ki kami se kaunsi bimari hoti hai?',
      answer: 'Iodine ki kami se sabse common bimari goitre (thyroid gland ka bada hona) hoti hai. Iske alawa hypothyroidism (thyroid ki susti), cretinism (pregnancy mein severe kami se bacche mein brain damage), aur Iodine Deficiency Disorders (IDD) ka poora spectrum aa sakta hai jisme hearing impairment, mental retardation, aur reproductive problems shamil hain. India mein hypothyroidism ki prevalence 11% hai.',
    },
    {
      _key: 'faq4',
      question: 'Iodine ka normal range kitna hona chahiye?',
      answer: 'Adults mein urinary iodine concentration 100–199 mcg/L adequate maana jaata hai (WHO standard). Pregnancy mein ye range 150–249 mcg/L honi chahiye. Blood mein iodine measure karna less common hai — urinary test zyada accurate hota hai. Agar 100 mcg/L se kam hai to deficiency; 300 mcg/L se zyada toxic range mein.',
    },
    {
      _key: 'faq5',
      question: 'Iodine ki kami ka test kaise hota hai?',
      answer: 'Sabse common test hai Urinary Iodine Concentration (UIC) — peshab ka sample dena hota hai. Ye test Metropolis ya Dr. Lal PathLabs pe available hai, price approx ₹300–₹800. Doctor aapko saath mein Thyroid Profile (TSH, T3, T4) bhi karwane ko kaeh sakte hain. Spot urine test se bhi ho jaata hai — 24 hour collection always zaroori nahi.',
    },
    {
      _key: 'faq6',
      question: 'Pregnancy mein iodine kitna zaroori hai?',
      answer: 'Pregnancy mein iodine SABSE zyada critical hota hai — normal adult se 47% zyada chahiye (220 mcg/day). Bacche ka brain pehle trimester mein develop ho raha hota hai aur completely maa ke iodine pe depend karta hai. Kami se miscarriage, premature birth, aur bacche mein permanent brain damage ka risk. Most prenatal vitamins mein iodine hota hai — apne doctor se confirm karein. "Pregnancy mein iodine supplement lene se pehle apna doctor zaroor consult karein."',
    },
    {
      _key: 'faq7',
      question: 'Iodine supplement kab aur kaise lena chahiye?',
      answer: 'Iodine water-soluble hai — subah khane ke saath lete hain to GI discomfort kam hoti hai. Iron se 2 ghante ka gap rakhein — dono saath lene se absorption affect hoti hai. Selenium ke saath lena faydemand hai — dono milkar thyroid ke liye better kaam karte hain. Cooking mein iodized namak dish ban jaane ke baad add karein — zyada heat pe iodine ud jaata hai.',
    },
    {
      _key: 'faq8',
      question: 'Iodized namak se poori iodine ki zaroorat puri ho sakti hai?',
      answer: 'Haan, agar aap regularly iodized namak use karte hain aur saath mein dairy bhi kha rahe hain to aam adults ki zaroorat puri ho sakti hai. Lekin pregnancy mein zaroorat 220–290 mcg/day tak badh jaati hai — tabhi sirf namak kaafi nahi hoga. Ek important baat: Himalayan salt, sea salt, ya kala namak iodized nahi hota — sirf clearly labeled "Iodized Salt" use karein.',
    },
    {
      _key: 'faq9',
      question: 'Bacchon mein iodine ki kami ke kya lakshan hain?',
      answer: 'Bacchon mein iodine ki kami se height-weight expected rate se nahi badhte, school mein performance poor rehti hai, speech development mein delay ho sakta hai, aur concentration zyada kharab hoti hai. Newborns mein zyada jaundice ya feeding mein takleef bhi sign ho sakti hai. Agar bacche ki growth aur learning mein koi concern hai to pediatrician se iodine status check karwayein.',
    },
    {
      _key: 'faq10',
      question: 'Iodine aur thyroid ka kya connection hai?',
      answer: 'Thyroid gland body ka 80% iodine store karta hai — kyunki thyroid hormones (T3 aur T4) banane ke liye iodine raw material hai. Iodine ke bina T3/T4 nahi ban sakta. Ye hormones har cell ke metabolism ko control karte hain — heart rate, body temperature, energy, brain function — sab. Isliye iodine ki kami ka seedha matlab hai thyroid ki failure.',
    },
    {
      _key: 'faq11',
      question: 'Iodine supplement aur levothyroxine saath le sakte hain?',
      answer: 'Ye combination doctor ke guidance ke bina nahi lena chahiye. Levothyroxine hypothyroidism ki medicine hai — agar iodine kami se hypothyroidism hua hai to doctor dose adjust karke supplement bhi de sakte hain. Lekin bina diagnosis ke apne se dono lena risky hai. "Agar aap levothyroxine le rahe hain to iodine supplement shuru karne se pehle doctor se zaroor consult karein."',
    },
    {
      _key: 'faq12',
      question: 'Jyada iodine lene se kya hota hai?',
      answer: 'Paradoxically, bahut zyada iodine bhi thyroid ko disturb kar deta hai — isse hypothyroidism ya hyperthyroidism dono ho sakte hain (Wolff-Chaikoff effect). Upper limit 1,100 mcg/day hai. Signs of overdose: nausea, burning in throat, irregular heartbeat, thyroid swelling. Standard supplement doses (150–220 mcg) is limit se kaafi door hoti hain — isliye safe hain. "Doctor ki salah ke bina high dose iodine supplement kabhi mat lo."',
    },
    {
      _key: 'faq13',
      question: 'Kelp supplement iodine ke liye sahi hai?',
      answer: 'Kelp/seaweed supplements mein iodine naturally hoti hai lekin content bahut variable hota hai — ek batch se doosre mein bahut fark ho sakta hai; kuch mein daily requirement se 20x zyada bhi ho sakta hai. India mein quality control bhi issue hai. Thyroid patients ke liye especially risky hai. Standard potassium iodide supplement zyada reliable aur predictable hoti hai.',
    },
    {
      _key: 'faq14',
      question: 'Kya vegetarians ko iodine deficiency zyada hoti hai?',
      answer: 'Haan, vegetarians — aur especially vegans — mein iodine deficiency ka risk zyada hota hai. Kyunki seafood (highest iodine source) avoid kiya jaata hai, aur India mein dairy bhi kai log zyada nahi lete. Solution simple hai: iodized namak consistently use karein. Jo iodized namak use karte hain unmein deficiency ka risk kaafi kam ho jaata hai.',
    },
    {
      _key: 'faq15',
      question: 'Iodine ki kami kitne time mein theek hoti hai?',
      answer: 'Urinary iodine levels 2–4 hafte mein improve hone lagte hain. Lekin thyroid hormones normalize hone mein 3–6 mahine lag sakte hain. Hair fall, weight, mood mein visible improvement 3–6 mahine ke baad milta hai. Goitre shrink hone mein aur zyada time lag sakta hai. "Ek hafte mein fark nahi dikhega — patience zaroori hai. 3 mahine baad test repeat karaye tab hi pata chalega ki treatment kaam kar rahi hai."',
    },
  ],

  sources: [
    'NIH Office of Dietary Supplements — Iodine Fact Sheet (2024): ods.od.nih.gov/factsheets/Iodine-HealthProfessional/',
    'WHO — World Health Organization: Micronutrients, Urinary Iodine Standards (2023)',
    'ICMR-NIN — RDA 2020 Report: nin.res.in (150 mcg/day adults; aligns with WHO)',
    'Longvah T, Toteja GS, Upadhyay A (2013) — NIN India: Vegetarian Indian recipes mein avg 2.9 mcg iodine/100g bina iodized salt ke',
    'PubMed PMC3818611 — Iodine Deficiency Disorders India: 200 million+ at risk data',
    'Thyrovigilance for Hypothyroidism in India (2022) — Thyroid Research and Practice: India hypothyroidism prevalence 11%',
  ],
}

async function seed() {
  try {
    console.log('Seeding Iodine...')
    const result = await client.createOrReplace(iodine)
    console.log('Done:', result._id)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seed()
