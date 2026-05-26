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

const vitaminB12 = {
  _id: 'vitamin-vitamin-b12',
  _type: 'vitamin',
  name: 'Vitamin B12',
  hindiName: 'Neeli Shakti Wala Vitamin / Cobalamin',
  category: 'Vitamin',
  slug: { _type: 'slug', current: 'vitamin-b12' },
  metaTitle: 'Vitamin B12 Ki Kami: Lakshan, Foods & Homeopathic Ilaj 2026',
  metaDescription: 'Vitamin B12 ki kami ke lakshan, vegetarian food sources, normal range aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: 'Meri practice mein jo patients chronic fatigue, unexplained depression, ya haath-pair mein sunn hone ki shikayat lekar aate hain — unme se kaafi mein B12 severely low milta hai. Aksar wo log saalon se ye symptoms ignore kar rahe hote hain. Especially jo patients metformin le rahe hain unka B12 routine mein check karna meri practice ka hissa hai.',

  quickFacts: {
    indiaPrevalence: '~53% Indian adults mein B12 deficiency — vegetarians sabse zyada affected',
    commonDeficiencySign: 'Haath-pair mein sunn hona ya jhanjhanahat (numbness/tingling) — nerve damage ka pehla signal',
    mainFoodSource: 'Doodh (Cow\'s Milk) — 1 glass 240ml mein approx 1.2 mcg B12',
    normalRangeQuick: '200–900 pg/mL | Optimal: 300+ pg/mL',
  },

  whatIsIt: 'Vitamin B12, jise Cobalamin bhi kehte hain, ek water-soluble vitamin hai jo body khud nahi bana sakti — yani ye sirf khane ya supplement se lena padta hai. Ye almost exclusively animal products mein milta hai — isliye India ke vegetarians aur vegans sabse zyada risk pe hain. Body mein iska main kaam hai: red blood cells banana, nerve cells ko protect karna, aur DNA synthesis mein madad karna. Agar B12 ki kami ho jaaye to iska asar nerve system aur blood dono pe padta hai — isliye iska deficiency kaafi serious hota hai.',

  bodyFunctions: [
    'Red Blood Cells banta hai — B12 ke bina RBC sahi shape mein nahi banta, jisse megaloblastic anemia hoti hai',
    'Myelin Sheath protect karta hai — nerve ke upar jo protective covering hoti hai (myelin), usse banane mein B12 zaroori hai. Kami mein nerves damage hone lagte hain',
    'DNA Synthesis — har cell division mein B12 DNA banane mein madad karta hai',
    'Brain aur Memory — mood, concentration aur memory ke liye B12 directly responsible hai',
    'Homocysteine level control — B12 aur folate milke homocysteine ko metabolize karte hain; kami mein homocysteine badhta hai jo heart disease ka risk factor hai',
    'Energy production — fat aur protein ko energy mein convert karne mein cofactor ka kaam karta hai',
    'Bone health — kuch studies suggest karte hain ke B12 kami se bone density kam hoti hai aur fracture risk badhta hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Haath-pair mein sunn hona ya jhanjhanahat (numbness/tingling) — myelin sheath damage hone par nerves ke signals disrupt hote hain',
      'Chal-dhaal mein problem, balance bigadna — severe deficiency mein spinal cord affect hoti hai (subacute combined degeneration)',
      'Haath-pair mein kamzori (weakness) — motor nerves affect hone se',
      'Aankhon ki roshni kamzor hona (optic nerve involvement) — rare lekin severe deficiency mein',
    ],
    energyMoodBrain: [
      'Bahut zyada thakan (fatigue) — anemia aur energy metabolism dono impact hote hain',
      'Yaaddaasht kamzor hona, concentration mein problem — B12 brain function ke liye directly zaroori hai',
      'Depression, anxiety, mood swings — neurotransmitters ke liye B12 chahiye hota hai',
      'Irritability, confusion — severe B12 kami mein cognitive symptoms aa sakte hain',
    ],
    skinHairNails: [
      'Pale skin, zardahat (paleness/jaundice tinge) — RBC sahi nahi ban rahe toh skin pe dikhta hai',
      'Baalon mein safedi ya hair fall — cell turnover slow ho jaata hai',
      'Naakh ka kamzor hona — longitudinal ridges ya pale nails',
    ],
    other: [
      'Zubaan mein sujan, jalan ya chale (Glossitis, Mouth ulcers) — bahut common aur early sign hai India mein',
      'Bhookh nahi lagti — digestive function affect hoti hai',
      'Diarrhea ya constipation — gut absorption disturbed hoti hai',
      'Irregular periods (females) — RBC production affect hone se',
      'Bacchon mein: developmental delay, failure to thrive',
    ],
  },

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',        normal: '>300 pg/mL',  deficient: '<200 pg/mL', toxic: null,          unit: 'pg/mL' },
    { _key: 'nr2', category: 'Adult Female',       normal: '>300 pg/mL',  deficient: '<200 pg/mL', toxic: null,          unit: 'pg/mL' },
    { _key: 'nr3', category: 'Bacche (1-18 saal)', normal: '>200 pg/mL',  deficient: '<150 pg/mL', toxic: null,          unit: 'pg/mL' },
    { _key: 'nr4', category: 'Pregnancy',          normal: '>300 pg/mL',  deficient: '<200 pg/mL', toxic: null,          unit: 'pg/mL' },
    { _key: 'nr5', category: 'Elderly (60+)',      normal: '>300 pg/mL',  deficient: '<200 pg/mL', toxic: null,          unit: 'pg/mL' },
    { _key: 'nr6', category: 'Borderline zone',    normal: '200–300 pg/mL', deficient: null,         toxic: null,          unit: 'pg/mL' },
    { _key: 'nr7', category: 'Severe deficiency',  normal: null,           deficient: '<100 pg/mL', toxic: null,          unit: 'pg/mL' },
  ],

  pregnancyInfo: {
    applicable: true,
    note: 'Pregnancy mein B12 requirement 2.6 mcg/day hai. Kami se baby mein neural tube defects (spina bifida), low birth weight, preterm delivery, aur baby mein B12 deficiency ho sakti hai — jisse developmental delay aur nerve damage hota hai. Prenatal vitamins mein B12 hona chahiye — label check karein. Koi bhi supplement lene se pehle apna doctor zaroor consult karein.',
  },

  childrenInfo: 'Bacchon mein — especially vegan ya strict vegetarian families mein — B12 kami bahut serious ho sakti hai. Breastfed infants of vegan moms most at risk hain: lethargy, poor feeding, muscle tone low hona, developmental regression ho sakti hai. Age-wise requirement: 0-6 months: 0.4 mcg, 7-12 months: 0.5 mcg, 1-3 saal: 0.9 mcg. Formula-fed babies ko usually supplement ki zaroorat nahi. Vegan mothers ke breastfed infants ko doctor ki guidance se supplement zaroor dein.',

  vegSources: [
    { _key: 'v1', food: 'Doodh (Cow\'s Milk)',          quantity: '1 glass 240ml', amount: '~1.2 mcg' },
    { _key: 'v2', food: 'Dahi (Curd/Yogurt)',           quantity: '1 katori 200g', amount: '~0.9–1.1 mcg' },
    { _key: 'v3', food: 'Paneer (Cottage Cheese)',       quantity: '100 gm',        amount: '~0.7–0.8 mcg' },
    { _key: 'v4', food: 'Anda (Egg)',                   quantity: '1 boiled egg',  amount: '~0.6 mcg' },
    { _key: 'v5', food: 'Cheese (Processed)',            quantity: '2 slices ~50g', amount: '~0.5–0.8 mcg' },
    { _key: 'v6', food: 'Fortified Soy Milk / Cereal',  quantity: '1 glass/bowl',  amount: '0.6–3 mcg' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Machhli (Salmon/Rohu)', quantity: '100 gm',  amount: '~3–4 mcg' },
    { _key: 'nv2', food: 'Chicken (cooked)',       quantity: '100 gm',  amount: '~0.3–0.5 mcg' },
    { _key: 'nv3', food: 'Mutton/Beef Liver',      quantity: '100 gm',  amount: '~60–70 mcg' },
    { _key: 'nv4', food: 'Jhinga (Prawns)',         quantity: '100 gm',  amount: '~1.3 mcg' },
  ],

  sunlightNote: 'Agar pure vegetarian hain (no egg), to din mein 2 glass doodh + 1 katori dahi lena try karein — ye roughly 2–2.5 mcg B12 deta hai jo adults ke liye sufficient hai. Fruits ya dry fruits mein B12 nahi hoti — jo claims milte hain wo inaccurate hain. Agar absorption koi medical condition ki wajah se kharab ho to supplement zaroor chahiye.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–6 months',  male: '0.4', female: '0.4', pregnancy: null,  breastfeeding: null,  unit: 'mcg' },
    { _key: 'd2', ageGroup: '7–12 months', male: '0.5', female: '0.5', pregnancy: null,  breastfeeding: null,  unit: 'mcg' },
    { _key: 'd3', ageGroup: '1–3 saal',    male: '0.9', female: '0.9', pregnancy: null,  breastfeeding: null,  unit: 'mcg' },
    { _key: 'd4', ageGroup: '4–8 saal',    male: '1.2', female: '1.2', pregnancy: null,  breastfeeding: null,  unit: 'mcg' },
    { _key: 'd5', ageGroup: '9–13 saal',   male: '1.8', female: '1.8', pregnancy: null,  breastfeeding: null,  unit: 'mcg' },
    { _key: 'd6', ageGroup: '14–18 saal',  male: '2.4', female: '2.4', pregnancy: '2.6', breastfeeding: '2.8', unit: 'mcg' },
    { _key: 'd7', ageGroup: '19–50 saal',  male: '2.4', female: '2.4', pregnancy: '2.6', breastfeeding: '2.8', unit: 'mcg' },
    { _key: 'd8', ageGroup: '51+ saal',    male: '2.4', female: '2.4', pregnancy: null,  breastfeeding: null,  unit: 'mcg' },
  ],

  labTestInfo: {
    testName: 'Serum Vitamin B12 Test',
    testSlug: 'vitamin-b12-test',
    sampleType: 'Blood (serum)',
    fastingRequired: false,
    note: 'Subah khali pet better hai. Borderline cases mein MMA (Methylmalonic Acid) aur Homocysteine test bhi karwayein. Test price: Rs. 300–700. Repeat: treatment ke 3 mahine baad.',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Cyanocobalamin',
      benefits: ['Sabse stable form', 'Sasta, widely available', 'General deficiency ke liye effective'],
      drawbacks: ['Cyanide group hota hai (tiny amount, safe for most)', 'Kidney patients ko high dose mein avoid karna chahiye'],
      bestFor: 'General deficiency, routine supplementation',
    },
    {
      _key: 'sf2',
      formName: 'Methylcobalamin',
      benefits: ['Active form — body directly use kar sakti hai', 'Nerve complaints ke liye better', 'India mein most popular form'],
      drawbacks: ['Thoda mehenga', 'Less stable than cyanocobalamin'],
      bestFor: 'Nerve symptoms (numbness, neuropathy) — India mein preferred',
    },
    {
      _key: 'sf3',
      formName: 'Adenosylcobalamin',
      benefits: ['Mitochondrial function support', 'Chronic fatigue ke liye helpful'],
      drawbacks: ['India mein less common', 'Availability limited'],
      bestFor: 'Chronic fatigue, metabolic issues',
    },
    {
      _key: 'sf4',
      formName: 'Hydroxocobalamin (Injection)',
      benefits: ['Direct blood mein — fastest, most effective', 'Severe deficiency aur pernicious anemia ke liye best', 'Long-lasting effect'],
      drawbacks: ['Injection chahiye, clinic jana padta hai', 'Self-administer nahi kar sakte'],
      bestFor: 'Severe deficiency, pernicious anemia, absorption issues',
    },
  ],

  supplementTiming: {
    bestTime: 'Subah ya dopahar — B12 water-soluble hai, fat ki zaroorat nahi. Chai se ek ghanta door rakhein kyunki tannins absorption affect karte hain.',
    withFood: 'Khali pet ya khane ke baad — dono chalega. Koi hard rule nahi.',
    withFat: null,
    withCalcium: 'Calcium ke saath lena theek hai — koi negative interaction nahi.',
    avoid: 'Chai/coffee se 1 ghante ka gap rakhein. High-dose antacids ke exact time pe na lein — stomach acid B12 absorption ke liye zaroori hai.',
    note: 'Sublingual (tongue ke neeche dissolve) form absorption issues wale patients ke liye better hai. India mein Methylcobalamin 500mcg/1000mcg/1500mcg tablets widely available hain — generic DCGI approved bhi safe hai.',
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Metformin (Glyciphage, Glucophage)',        reason: 'Long-term use mein B12 absorption 30% tak kam kar deta hai — NIH verified. Diabetics ko routine B12 test karwana chahiye.' },
    { _key: 'di2', medicineName: 'Proton Pump Inhibitors (Omez, Pan, Rablet)', reason: 'Omeprazole, Pantoprazole, Rabeprazole — stomach acid block karte hain jo B12 absorption ke liye zaroori hai. 2+ saal use pe risk zyada.' },
    { _key: 'di3', medicineName: 'H2 Blockers (Ranitidine, Famotidine)',       reason: 'PPIs jaisa effect, thoda milder. Long-term use mein dhyan rakhein.' },
    { _key: 'di4', medicineName: 'Chloramphenicol (antibiotic)',                reason: 'B12 ke therapeutic effect ko block kar sakta hai.' },
    { _key: 'di5', medicineName: 'Colchicine (gout ki dawa)',                   reason: 'B12 absorption chronic use mein reduce karti hai.' },
  ],

  combinations: {
    beneficial: [
      'Folic Acid — dono milke RBC banate hain. Megaloblastic anemia mein dono kami hoti hai — dono saath lena chahiye',
      'Iron — anemia mein B12 + folate + iron tinonn kami hoti hai, saath lena beneficial',
      'Vitamin D — India mein D + B12 dono kami bahut common, saath lene mein koi harm nahi',
      'Vitamin B6 — homocysteine metabolism ke liye B6+B12+folate milke kaam karte hain, heart health ke liye beneficial',
    ],
    avoid: [
      'Chai/coffee ke exact time pe — tannins absorption kam karti hain, 1 ghante ka gap rakhein',
      'High-dose antacids ke saath — stomach acid B12 ke liye zaroori hai',
    ],
    timingGuide: 'Subah (nashte ke saath): Methylcobalamin + Iron + Folate (chai se 1 ghante door). Raat (dinner ke baad): Vitamin D.',
  },

  toxicity: {
    upperLimit: 'NIH ke according koi established UL (Upper Limit) nahi hai B12 ke liye — water-soluble hai, excess urine mein nikal jaati hai',
    sideEffects: [
      'Nausea, headache, dizziness — rare cases mein',
      'Acne-like rash (acneiform eruption) — high dose cyanocobalamin se kuch logon mein',
      'Injection mein allergic reaction — rare but possible',
    ],
    whenSerious: 'Injection ke baad breathing mein problem, chest tightness, severe skin rash ya swelling — ye allergic reaction emergency hai, turant doctor ke paas jayein.',
  },

  timeline: {
    bloodLevelTime: '4–8 hafte (oral supplement) | 1–2 hafte (injection)',
    symptomsTime: '2–4 hafte (fatigue, mood) | 1–2 mahine (mouth ulcers/glossitis)',
    fullRecoveryTime: '3–6 mahine minimum — nerve symptoms ke liye 3–6 mahine ya zyada lag sakte hain',
    repeatTestTime: '3 mahine baad test repeat karwayein',
    patientNote: 'Ek hafte mein fark nahi dikhega — patience zaroori hai. Severe nerve damage complete reverse nahi bhi ho sakta, isliye early treatment important hai.',
  },

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Anaemia',              diseaseSlug: 'anaemia',              isAvailable: true,  connection: 'B12 kami se megaloblastic anemia hoti hai — RBC abnormally large aur kamzor banta hai' },
    { _key: 'ld2', diseaseName: 'Peripheral Neuropathy', diseaseSlug: 'peripheral-neuropathy', isAvailable: false, connection: 'Nerve damage — haath-pair mein numbness/tingling B12 kami ka direct result hai' },
    { _key: 'ld3', diseaseName: 'Depression',            diseaseSlug: 'depression',            isAvailable: false, connection: 'Neurotransmitter imbalance se mood disorders — B12 kami se anxiety aur depression ho sakti hai' },
    { _key: 'ld4', diseaseName: 'Mouth Ulcer',           diseaseSlug: 'mouth-ulcer',           isAvailable: false, connection: 'Glossitis aur mouth ulcers B12 kami ka early aur common sign hai India mein' },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Thakaan',      symptomSlug: 'thakaan',       isAvailable: false },
    { _key: 'ls2', symptomName: 'Hair Fall',    symptomSlug: 'hair-fall',     isAvailable: false },
    { _key: 'ls3', symptomName: 'Mouth Ulcers', symptomSlug: 'mouth-ulcers',  isAvailable: false },
    { _key: 'ls4', symptomName: 'Numbness',     symptomSlug: 'numbness',      isAvailable: false },
    { _key: 'ls5', symptomName: 'Depression',   symptomSlug: 'depression',    isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Vitamin B12 Test',          testSlug: 'vitamin-b12-test',       isAvailable: false },
    { _key: 'rt2', testName: 'Complete Blood Count (CBC)', testSlug: 'cbc',                    isAvailable: true  },
    { _key: 'rt3', testName: 'Vitamin D Test',             testSlug: 'vitamin-d-25-oh',        isAvailable: false },
    { _key: 'rt4', testName: 'Serum Folate',               testSlug: 'serum-folate',           isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin D',       vitaminSlug: 'vitamin-d'  },
    { _key: 'rv2', vitaminName: 'Folic Acid (B9)', vitaminSlug: 'folic-acid' },
    { _key: 'rv3', vitaminName: 'Iron',             vitaminSlug: 'iron'       },
  ],

  homeopathicAlternatives: [
    {
      _key: 'ha1',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Moote, thake hue patients jinhe cold intolerance ho, sweating zyada ho, bones weak feel ho. Children mein developmental delay ke cases mein bhi.',
      howItHelps: 'Constitutional medicine jo metabolism aur absorption capacity ko support karti hai. Gut function improve karke B12 jaise nutrients ki utilization better hoti hai.',
    },
    {
      _key: 'ha2',
      medicineName: 'Natrum Muriaticum',
      patientType: 'Emotionally withdrawn patients, depression, dry skin, mouth mein chale. B12 kami wale jo anemic aur pale hain.',
      howItHelps: 'Nutritional absorption aur cellular hydration balance karne mein madadgar. Mood aur nervous system symptoms mein relief.',
    },
    {
      _key: 'ha3',
      medicineName: 'Ferrum Metallicum',
      patientType: 'Khoon ki kami ke saath B12 kami — pale face, weakness, exercise mein thakaan. Flushing face ke saath anemia wale.',
      howItHelps: 'Blood building process ko support karta hai. B12 + iron dono kami wale cases mein symptomatic relief ke liye.',
    },
  ],

  myths: [
    { _key: 'm1', myth: 'Sirf vegetarians mein B12 kami hoti hai', truth: 'Non-vegetarians bhi B12 deficient ho sakte hain — especially jo metformin, antacids le rahe hain, ya jinka stomach acid low hai (elderly, post-surgery). India ke studies mein non-veg log bhi significantly deficient milte hain.' },
    { _key: 'm2', myth: 'Fruits aur dry fruits se B12 milti hai', truth: 'B12 naturally sirf animal products mein milti hai. Kisi bhi fruit ya dry fruit mein reliable B12 nahi hoti. Fortified products alag hain — label check karo.' },
    { _key: 'm3', myth: 'B12 bahut lene se koi problem nahi — water-soluble hai', truth: 'Mostly safe hai lekin kuch studies mein very high long-term doses se bone health aur skin issues dekhe gaye hain. Doctor ki salah se appropriate dose lo.' },
    { _key: 'm4', myth: 'B12 injection hi kaam karti hai — tablets nahi', truth: 'Studies dikhate hain ke high-dose oral methylcobalamin tablets bhi effective hain mild-to-moderate deficiency mein jab absorption issue nahi ho. Injection sirf severe cases ya pernicious anemia mein zaroor chahiye.' },
    { _key: 'm5', myth: 'Dahi aur chaas mein koi B12 nahi hoti', truth: 'Dahi aur chaas mein modest amount of B12 hoti hai (~0.5–1 mcg per katori). Ye sole source ke liye kaafi nahi lekin daily diet mein contribute karta hai — especially India ke vegetarians ke liye important.' },
  ],

  faqs: [
    { _key: 'faq1',  question: 'Vitamin B12 ki kami ke lakshan kya hain?',                   answer: 'B12 ki kami ke pehle lakshan hain: haath-pair mein sunn hona ya jhanjhanahat, bahut zyada thakan, zubaan ya muh mein chale, pale skin. Baad mein memory problems, depression, aur chal-dhaal mein problem bhi aa sakti hai. India mein ye symptoms aksar silent rehte hain kyunki onset slow hota hai — aur log "bas thake hue hain" samajh ke ignore karte hain. Agar in mein se 2-3 symptoms ek saath hain, B12 test zaroor karaye.' },
    { _key: 'faq2',  question: 'Vitamin B12 ki kami kyu hoti hai?',                           answer: 'India mein sabse common reasons: pure vegetarian diet (B12 sirf animal products mein hoti hai), metformin ya antacid medicines ka long-term use, aur age ke saath absorption kam hona. Pernicious Anemia ek medical condition hai jisme stomach B12 absorb hi nahi kar pata — ye bhi common cause hai.' },
    { _key: 'faq3',  question: 'Vegetarian log Vitamin B12 kahan se lein?',                   answer: 'Vegetarians ke liye best B12 sources: doodh (1-2 glass daily), dahi (1 katori daily), paneer, aur ande (ovo-vegetarians ke liye). Agar ye nahi kha rahe — especially vegans — to fortified foods ya B12 supplement zaroori hai. Sirf khane se kaafi nahi hoga agar serious deficiency hai — doctor se test karwayein.' },
    { _key: 'faq4',  question: 'Vitamin B12 normal range kitni hoti hai?',                    answer: 'Indian labs mein normal range 200–900 pg/mL hai. Lekin 300+ pg/mL ko optimal maana jaata hai. 200–300 ke beech "borderline" zone hai — especially agar symptoms bhi hain to doctor se MMA test karwayein. 200 se neeche deficient hai, 100 se neeche severe deficiency.' },
    { _key: 'faq5',  question: 'Vitamin B12 ki kami se kaun si bimari hoti hai?',             answer: 'Megaloblastic anemia, peripheral neuropathy (nerve damage — numbness/tingling), depression, cognitive decline, aur mouth ulcers — ye sab B12 kami se hoti hain. Pregnancy mein baby mein neural tube defects bhi ho sakte hain. Timely treatment se ye sab reversible hain (except advanced nerve damage).' },
    { _key: 'faq6',  question: 'Vitamin B12 tablet kab khaye — subah ya raat?',               answer: 'B12 water-soluble hai — fat ki zaroorat nahi. Subah khana best hai taake din bhar energy mile. Chai se ek ghanta door rakhein kyunki tannins absorption affect karte hain. Khali pet ya khane ke baad — dono chalega.' },
    { _key: 'faq7',  question: 'Diabetes mein Vitamin B12 ki zaroorat zyada kyun hai?',       answer: 'Metformin (sabse common diabetes dawa) B12 absorption 30% tak reduce karti hai long-term use mein — ye NIH se verified data hai. Isliye diabetics ko routine B12 test karwana chahiye — har saal ya 6 mahine mein. Doctor ki salah se B12 supplement add karna beneficial ho sakta hai.' },
    { _key: 'faq8',  question: 'Pregnancy mein B12 ki kami se kya hota hai?',                 answer: 'Pregnancy mein B12 kami se baby mein neural tube defects (spina bifida), developmental delay, aur low birth weight ka risk hota hai. Mother mein severe fatigue, anemia, aur nerve symptoms aa sakte hain. Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein.' },
    { _key: 'faq9',  question: 'Vitamin B12 ki kami kitne din mein theek hoti hai?',          answer: 'Oral supplement se blood level 4-8 hafton mein normal ho sakta hai. Lekin symptoms mein fark feel karne mein 2-4 mahine lag sakte hain. Nerve symptoms ke liye 3-6 mahine ya zyada. Ek hafte mein fark nahi dikhega — patience zaroori hai. 3 mahine baad test repeat zaroor karaye.' },
    { _key: 'faq10', question: 'B12 injection leni chahiye ya tablet?',                        answer: 'Mild-to-moderate deficiency mein high-dose oral methylcobalamin (1000-1500 mcg daily) bhi effective hoti hai jab koi absorption issue na ho. Severe deficiency, pernicious anemia, ya jab absorption problematic ho — tab injection doctor recommend karte hain. Self-decide nahi karna chahiye.' },
    { _key: 'faq11', question: 'Vitamin B12 aur Iron saath le sakte hain?',                   answer: 'Haan, B12 aur Iron saath lena theek hai — actually anemia ke cases mein dono kami ek saath hoti hai aur dono saath lene se zyada fayda milta hai. Koi negative interaction nahi hai.' },
    { _key: 'faq12', question: 'Bacchon ko B12 ki zaroorat hai?',                             answer: 'Haan — especially vegan ya strict vegetarian families ke bacchon ko. Breastfed infants jinka mama vegetarian hai unhe doctor-prescribed B12 drops zaroori hain. Formula-fed babies ko usually nahi chahiye. Doctor se age-appropriate dose poochein.' },
    { _key: 'faq13', question: 'Homeopathy se Vitamin B12 ki kami theek hoti hai?',           answer: 'Homeopathy direct B12 replace nahi karti — lekin body ki absorption capacity support karne mein aur symptoms (thakaan, nerve complaints, mouth ulcers) mein relief ke liye helpful ho sakti hai. Severe deficiency mein conventional supplement zaroori hai — homeopathy complementary role play karti hai. Qualified homeopath se consult karein.' },
    { _key: 'faq14', question: 'Vitamin B12 ki kami baalon mein dikhti hai?',                 answer: 'Haan — B12 kami se hair fall ya premature greying ho sakti hai kyunki cell division aur DNA synthesis ke liye B12 zaroori hai. Sirf hair problem ke liye bhi B12 test karwana worthwhile hai — especially 30+ age mein unexplained hair fall mein.' },
    { _key: 'faq15', question: 'B12 aur Folic Acid mein kya farq hai?',                       answer: 'Dono milke red blood cells banate hain aur megaloblastic anemia se bachate hain — lekin ek ko dusre se replace nahi kiya ja sakta. Folic Acid pregnancy mein neural tube defects ke liye zaroori hai. B12 nerves ke liye extra important hai. India mein dono ki kami bahut common hai — test karwayein.' },
  ],
}

async function main() {
  console.log('🌿 Seeding Vitamin B12...')
  try {
    const result = await client.createOrReplace(vitaminB12)
    console.log('✅ Done:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
