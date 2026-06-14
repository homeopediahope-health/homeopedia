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

const probiotics = {
  _id: 'vitamin-probiotics',
  _type: 'vitamin',
  name: 'Probiotics',
  hindiName: 'Pet ke Dost (Acche Bacteria)',
  category: 'Supplement',
  slug: { _type: 'slug', current: 'probiotics' },
  metaTitle: 'Probiotics Ki Kami: Lakshan, Foods aur Homeopathic Ilaj',
  metaDescription: 'Probiotics ki kami ke lakshan, Indian food sources, supplement types aur homeopathic ilaj — verified, doctor-reviewed Hinglish guide. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: '',

  quickFacts: {
    indiaPrevalence: 'India mein 30-40% urban population mein gut dysbiosis (good bacteria ka imbalance) paya jata hai — antibiotics overuse aur processed food iska sabse bada karan hai (ICMR 2023 gut health data).',
    commonDeficiencySign: 'Baar baar loose motions ya constipation ka aana-jaana — gut mein acche bacteria ki kami ka sabse pahla signal hai.',
    mainFoodSource: 'Dahi (Curd) — ghar ka banaya hua fresh dahi sabse accha Indian probiotic source hai; 12-16 ghante fermented dahi mein live bacteria sabse zyada hote hain.',
    normalRangeQuick: 'Koi standard blood range nahi — supplement dose: 1 Billion se 50 Billion CFU (Colony Forming Units) per day clinical studies mein use hoti hai.',
  },

  whatIsIt: 'Probiotics wo live bacteria aur yeasts hain jo aapki intestines mein rehte hain aur aapko healthy rakhte hain. Ye "acche bacteria" hain jo khaane ko digest karne mein, immunity badhane mein aur harmful bacteria ko rokne mein madad karte hain. Jab antibiotic lene se ya kharab khaane ki wajah se ye acche bacteria kam ho jaate hain — tab body mein kaafi problems shuru hoti hain.',

  bodyFunctions: [
    'Gut mein harmful bacteria se ladna — Lactobacillus aur Bifidobacterium jaise bacteria pathogenic germs ko badhne nahi dete',
    'Digestion improve karna — food breakdown aur nutrients absorb karne mein direct madad karte hain',
    'Immunity — body ki 70% immunity gut mein hoti hai; acche bacteria immune cells ko train karte hain, bahar ke germs se ladne ke liye',
    'Lactose digestion — kuch Lactobacillus strains lactose intolerance mein help karte hain; doodh digest karna aasaan ho jaata hai',
    'Diarrhea rokna — antibiotic lene ke baad jo diarrhea hoti hai usme probiotics significant protection dete hain (NIH data)',
    'Skin connection — gut-skin axis ke zariye acne, eczema aur redness pe positive effect dikhta hai kuch studies mein',
    'Mental health link — gut-brain axis: healthy gut microbiome anxiety aur mood pe bhi positive asar karta hai (research ongoing)',
    'Vaginal health (mahilaon mein) — Lactobacillus strains vaginal pH balance maintain karte hain, infections se bachav',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [],
    energyMoodBrain: [
      'Fatigue aur low energy — nutrients absorb nahi ho rahe to energy bhi nahi milti',
      'Anxiety aur mood swings — gut-brain axis disturb hone ka sign',
      'Brain fog — concentration mein dikkat, mental clarity kam hona (research suggests)',
    ],
    skinHairNails: [
      'Acne ya skin inflammation — gut dysbiosis ka skin pe direct asar padata hai (gut-skin axis)',
      'Eczema (atopic dermatitis) — especially bacchon mein, probiotic deficiency se worse hoti hai',
    ],
    other: [
      'Baar baar loose motions ya constipation ka chakkar — gut bacteria imbalance (dysbiosis) ka sabse common sign',
      'Bloating aur gas — khana khaane ke baad pet phoolna ya gurgle karna',
      'IBS jaisi problem — cramping, mucus in stool, irregular bowel habits',
      'Antibiotic ke baad diarrhea — acche bacteria ke saath bure bhi mar jaate hain, balance bigad jaata hai',
      'Baar baar bimaar hona — cold, cough, infections frequently aana',
      'UTI (Urinary Tract Infection) baar baar hona — especially mahilaon mein; gut-vaginal microbiome connection',
      'Oral thrush ya fungal infections — Candida overgrowth tab hoti hai jab acche bacteria kam ho jaate hain',
    ],
  },

  deficiencyCauses: [
    'Antibiotic course — ye sabse bada reason hai; antibiotics bure bacteria ke saath acche bacteria bhi maar dete hain',
    'Processed aur junk food — sugar, maida, preservatives; ye acche bacteria ko nahi, harmful bacteria ko badhate hain',
    'Stress — chronic stress cortisol badhata hai jo gut lining aur microbiome ko damage karta hai',
    'Ghar ka khana chhod dena — dahi, lassi, idli, dosa India mein natural probiotic sources the; inhe chhod dene se kami hoti hai',
    'Chlorinated paani — excess chlorine gut bacteria ko bhi affect karta hai; India ke urban areas mein highly chlorinated water common hai',
    'Aging — umr ke saath gut microbiome diversity naturally kam hoti hai',
    'Acid reflux medicines (PPIs jaise omeprazole) — long-term use se gut environment change hota hai, probiotics kam hone lagte hain',
    'C-section delivery — natural birth mein baby ko mother se bacteria milte hain; C-section babies mein ye transfer nahi hota',
  ],

  normalRanges: [
    { _key: 'nr1', category: 'General Gut Health',  normal: '1–10 Billion CFU/day', deficient: 'Symptoms based diagnosis', toxic: '50 Billion+ se caution', unit: 'CFU/day' },
    { _key: 'nr2', category: 'Post-Antibiotic',      normal: '10–20 Billion CFU/day', deficient: 'Symptoms based', toxic: 'Immunocompromised mein caution', unit: 'CFU/day' },
    { _key: 'nr3', category: 'IBS (research dose)',  normal: '10 Billion CFU/day',   deficient: 'Multi-strain better', toxic: 'Doctor se confirm karein', unit: 'CFU/day' },
    { _key: 'nr4', category: 'Children',             normal: '1–5 Billion CFU/day',  deficient: 'Age-specific strains', toxic: 'Paediatrician se poochein', unit: 'CFU/day' },
    { _key: 'nr5', category: 'Pregnancy',            normal: '1–10 Billion CFU/day', deficient: 'Lactobacillus strains safe', toxic: 'Doctor advice zaroori', unit: 'CFU/day' },
  ],

  vegSources: [
    { _key: 'v1', food: 'Dahi (Curd) — ghar ka fresh',     quantity: '1 katori (100g)',  amount: '100 Million–1 Billion CFU' },
    { _key: 'v2', food: 'Chaas / Lassi (Buttermilk)',       quantity: '1 glass (200ml)', amount: '10–30 Million CFU (LAB bacteria)' },
    { _key: 'v3', food: 'Idli (fermented)',                  quantity: '2 piece (100g)',  amount: 'Lactic acid bacteria — significant' },
    { _key: 'v4', food: 'Dosa (fermented batter)',           quantity: '1 dosa',          amount: 'LAB bacteria — fermentation se' },
    { _key: 'v5', food: 'Dhokla (besan fermented)',          quantity: '2 piece (80g)',   amount: 'Lactic acid bacteria present' },
    { _key: 'v6', food: 'Kanji (fermented drink)',           quantity: '1 glass (200ml)', amount: 'Traditional North Indian probiotic' },
    { _key: 'v7', food: 'Pickle — homemade achaar (oil-based only)', quantity: '1 tsp',  amount: 'Lactic acid bacteria (vinegar-based mein nahi)' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Kefir (fermented dairy)', quantity: '1 glass', amount: '1–10 Billion CFU — highest natural source' },
    { _key: 'nv2', food: 'Fish sauce (fermented)',   quantity: '1 tsp',   amount: 'Kuch probiotic strains' },
  ],

  sunlightNote: 'Ghar mein banaya fresh dahi sabse reliable source hai. Market ka flavored dahi ya packaged curd ka probiotic content manufacturing aur storage ke hisab se alag-alag hota hai. Practical tip: Subah khali pet ek katori fresh dahi ya ek glass chaas gut health ke liye best start hai. Ghar ka 12-16 ghante fermented dahi market wale se zyada effective hota hai. (Source: Indian Traditional Fermented Foods — Intechopen 2023)',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–12 months',    male: 'Only doctor-prescribed drops', female: 'Only doctor-prescribed drops', pregnancy: null, breastfeeding: null, unit: 'CFU/day' },
    { _key: 'd2', ageGroup: '1–8 saal',       male: '1–5 Billion',  female: '1–5 Billion',  pregnancy: null, breastfeeding: null, unit: 'CFU/day' },
    { _key: 'd3', ageGroup: '9–18 saal',      male: '5–10 Billion', female: '5–10 Billion', pregnancy: null, breastfeeding: null, unit: 'CFU/day' },
    { _key: 'd4', ageGroup: '19–50 saal',     male: '5–20 Billion', female: '5–20 Billion', pregnancy: '1–10 Billion', breastfeeding: '1–10 Billion', unit: 'CFU/day' },
    { _key: 'd5', ageGroup: '51–70 saal',     male: '10–20 Billion', female: '10–20 Billion', pregnancy: null, breastfeeding: null, unit: 'CFU/day' },
    { _key: 'd6', ageGroup: '70+ saal',       male: '10–20 Billion', female: '10–20 Billion', pregnancy: null, breastfeeding: null, unit: 'CFU/day' },
  ],

  pregnancyInfo: {
    howImportant: 'Pregnancy mein gut health extra important hai — mother ka microbiome baby ko birth ke time transfer hota hai. Healthy gut bacteria baby ki immunity set karne mein help karta hai pehle saalon mein. Lactobacillus aur Bifidobacterium strains pregnancy mein generally safe hain (NIH ODS 2025 — no serious adverse effects reported in clinical trials).',
    dailyRequired: '1–10 Billion CFU/day (Lactobacillus strains)',
    babyEffects: [
      'Baby mein eczema (atopic dermatitis) ka risk badhta hai',
      'C-section mein especially maternal microbiome transfer nahi hota',
      'Baby ko colic aur digestive issues zyada ho sakte hain',
      'Baby ki early immune system development pe asar',
    ],
    supplementSafe: true,
    doctorLine: 'Pregnancy mein koi bhi probiotic supplement lene se pehle apna doctor zaroor consult karein — strain aur dose matter karta hai.',
  },

  childrenInfo: {
    deficiencySymptoms: [
      'Baar baar colic (bacha bahut rota hai, pet mein dard)',
      'Loose motions ya constipation — especially antibiotic ke baad',
      'Eczema ya skin rashes frequent hona',
      'Baar baar colds aur infections',
    ],
    ageWiseRequirement: '0–6 months: sirf doctor-prescribed drops (L. reuteri colic ke liye studied) | 6 months–2 saal: 1–3 Billion CFU (doctor advice) | 2–12 saal: 3–5 Billion CFU | 13–18 saal: 5–10 Billion CFU',
    foodSources: 'Dahi (age 6+ months), idli, dosa, dhokla, diluted chaas.',
    supplementNote: 'Healthy bachche jo balanced diet le rahe hain — food sources kaafi. Antibiotic ke baad ya baar baar bimaar hone wale mein paediatrician se discuss karein.',
  },

  labTestInfo: {
    testName: 'Gut Microbiome Analysis (Stool Test / Fecal Microbiota Test)',
    testSlug: 'stool-test',
    normalRange: 'Koi ek fixed number nahi — diverse bacterial species ka hona healthy maana jaata hai. Report mein dekha jaata hai: Lactobacillus aur Bifidobacterium species ka presence, diversity score, aur harmful bacteria ka ratio.',
    whenToTest: 'Chronic IBS ya gut issues mein. Recurrent infections, low immunity mein. Antibiotics ke prolonged use ke baad. Routine mein zaroorat nahi jab tak symptoms na hon.',
    repeatAfter: '3–6 mahine baad probiotic therapy ke response dekhne ke liye (advanced gut microbiome test agar initially kiya tha).',
    priceRange: 'Basic stool culture: ₹200–500 (Dr. Lal PathLabs, Metropolis). Advanced gut microbiome panel: ₹3,000–10,000+ (specialized labs — urban cities mein available).',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Lactobacillus-based (L. acidophilus, L. rhamnosus GG)',
      benefits: ['Diarrhea, IBS, vaginal health ke liye most researched strain', 'Antibiotic-associated diarrhea rokne mein effective', 'L. rhamnosus GG sabse well-studied probiotic strain hai'],
      drawbacks: ['Refrigeration zaroori', 'Shelf life limited', 'Dairy-based versions mein lactose intolerance walon ko issue'],
      bestFor: 'IBS, antibiotic ke baad, vaginal infections, mahilaon ke liye',
    },
    {
      _key: 'sf2',
      formName: 'Bifidobacterium-based (B. longum, B. infantis, B. lactis)',
      benefits: ['Large intestine mein kaam karta hai', 'Immunity ke liye best', 'Bacchon aur elderly ke liye specially useful'],
      drawbacks: ['Room temperature pe viability kam hoti hai', 'Single strain se limited benefits'],
      bestFor: 'Immunity, elderly patients, baby colic, constipation',
    },
    {
      _key: 'sf3',
      formName: 'Multi-Strain / Broad Spectrum Probiotic',
      benefits: ['Multiple bacteria ek saath — diverse microbiome support', 'General gut health ke liye most practical option'],
      drawbacks: ['Thoda mehenga', 'Sab strains har person pe same kaam nahi karte'],
      bestFor: 'General gut health, post-antibiotic recovery, immunity support',
    },
    {
      _key: 'sf4',
      formName: 'Saccharomyces boulardii (Yeast-based)',
      benefits: ['Yeast hai — antibiotic se affect nahi hota; antibiotic ke SAATH le sakte hain', 'Traveler\'s diarrhea ke liye best studied'],
      drawbacks: ['Immunocompromised patients mein caution zaroori', 'Antifungal medicine ke saath nahi lena'],
      bestFor: 'Antibiotic ke saath simultaneous use, traveler\'s diarrhea, acute diarrhea',
    },
  ],

  supplementTiming: {
    bestTime: 'Khane se 30 minute pehle ya khane ke pehle bite ke saath — stomach acid se bacteria ki protection milti hai. Subah empty stomach pe bhi le sakte hain.',
    withFood: 'Khane ke saath ya thoda pehle le sakte hain — dono acceptable hain. Khaali stomach pe bhi kaam karta hai agar room temperature paani ke saath lo.',
    absorptionTips: [
      'Prebiotic ke saath lo — kela, oats, lahsun, pyaz mein prebiotic fiber hota hai jo probiotic bacteria ko feed karta hai; dono saath better kaam karte hain (ise "Synbiotic" combination kehte hain)',
      'Refrigerated capsules ko fridge se seedha nahi lo — 10-15 minute room temperature pe rakho pehle',
    ],
    avoidWith: [
      'Bahut garam cheez ke saath (chai, soup) bilkul nahi — bacteria mar jaate hain',
      'Antibiotics ke saath seedha ek hi waqt mein nahi — 2 ghante ka gap do (S. boulardii exception hai)',
      'Antifungal medicine (fluconazole, itraconazole) ke saath S. boulardii nahi leni',
      'Immunosuppressant medicines ke saath — sirf doctor ke guidance mein',
    ],
  },

  drugInteractions: [
    {
      _key: 'di1',
      medicineName: 'Antibiotics (Amoxicillin, Ciprofloxacin, etc.)',
      reason: 'Bacteria-based probiotics ko antibiotic saath mein maar deta hai. 2 ghante ka gap zaroori hai. S. boulardii is ka exception hai — antibiotic ke saath le sakte hain.',
    },
    {
      _key: 'di2',
      medicineName: 'Antifungal medicines (Fluconazole, Itraconazole)',
      reason: 'Saccharomyces boulardii yeast hai — antifungal se directly kill hota hai. S. boulardii aur antifungal simultaneously nahi leni. Bacteria-based probiotics okay hain. (Source: Medscape 2020)',
    },
    {
      _key: 'di3',
      medicineName: 'Immunosuppressant medicines (Cyclosporine, Tacrolimus, Azathioprine, Chemotherapy)',
      reason: 'Probiotics immunocompromised patients mein infection ya pathogenic colonization ka risk badha sakte hain. Sirf doctor ke supervision mein probiotics lein — self-medication avoid karein. (Source: Medscape 2020)',
    },
    {
      _key: 'di4',
      medicineName: 'Pantoprazole / Omeprazole (PPIs / Acid blockers)',
      reason: 'Long-term PPI use gut environment alter karta hai; probiotic efficacy pe indirect asar. Agar dono long-term chal rahe hain to doctor se discuss karein — timing adjust karna helpful ho sakta hai.',
    },
  ],

  combinations: {
    beneficial: [
      { _key: 'cb1', nutrient: 'Prebiotics (Inulin, FOS)',  reason: 'Probiotic bacteria ko prebiotic fiber "food" ki tarah kaam karta hai; dono saath lene se gut mein bacteria survival aur growth better hoti hai — ise "Synbiotic" combination kehte hain' },
      { _key: 'cb2', nutrient: 'Vitamin D', reason: 'Vitamin D immunity ka core regulator hai; probiotics immunity pe kaam karte hain — dono mila kar immune response aur gut-immunity connection better hoti hai' },
      { _key: 'cb3', nutrient: 'Zinc',      reason: 'Gut lining integrity ke liye dono important hain; diarrhea aur leaky gut mein combination more effective hai (WHO/UNICEF bhi zinc + probiotic combo recommend karte hain)' },
    ],
    avoid: [
      { _key: 'ca1', nutrient: 'Antibiotics (same time)', reason: '2 ghante ka gap rakhein; bacteria-based probiotics directly kill ho jaate hain antibiotic ke saath ek waqt mein lene se' },
      { _key: 'ca2', nutrient: 'Antifungal + S. boulardii', reason: 'Yeast-based probiotic antifungal se kill ho jaata hai; dono ka combination avoid karein' },
    ],
    timingGuide: 'Probiotic subah khane se 30 min pehle lo. Antibiotic se 2 ghante ka gap rakho. Prebiotic foods (kela, oats) ke saath combination best hai.',
  },

  toxicity: {
    upperLimit: 'Koi official Upper Limit nahi set ki gayi hai (NIH ODS 2025). However healthy logo mein 50 Billion CFU/day se zyada dose mein temporary side effects ho sakte hain.',
    sideEffects: [
      'Gas aur bloating badh sakti hai — especially shuru mein, jab bacteria gut mein adjust ho rahe hote hain (1-2 hafte mein normal ho jaata hai)',
      'Mild diarrhea ya loose stools — first 1-2 hafte mein normal ho sakta hai',
      'Headache — rare cases mein',
      'Immunocompromised patients mein — serious infection ka risk (bacteremia/fungemia) agar very high dose ya wrong strain use ho',
    ],
    whenSerious: 'Immunocompromised patients (HIV, cancer chemotherapy, organ transplant, steroids pe) mein high dose probiotics se serious systemic infection (bacteremia/fungemia) ka rare but documented risk hai.',
  },

  timeline: {
    bloodLevelTime: 'Probiotics ka blood level nahi measure hota — gut microbiome changes stool test se dekhe jaate hain; 4–8 hafte regular supplementation ke baad meaningful change aata hai.',
    symptomsTime: 'Bloating aur gas: 2–4 hafte mein improvement shuru. Diarrhea/constipation: 2–4 hafte. Immunity (baar baar bimaar hona): 2–3 mahine mein fark. Skin (acne, eczema): 6–8 hafte minimum.',
    fullRecoveryTime: 'Gut microbiome diversity restore hone mein 8–12 hafte lagte hain — especially antibiotic use ke baad.',
    repeatTestTime: '3 mahine baad advanced gut microbiome test agar initially kiya tha.',
    patientNote: 'Ek hafte mein dramatic fark nahi dikhega — gut bacteria establish hone mein time lagta hai. Patience zaroori hai. Daily dahi + probiotic supplement milaa ke lena best results deta hai.',
  },

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'IBS (Irritable Bowel Syndrome)', diseaseSlug: 'ibs', isAvailable: false, connection: 'Gut dysbiosis is a key factor in IBS; probiotics are first-line supportive treatment' },
    { _key: 'ld2', diseaseName: 'Ulcerative Colitis', diseaseSlug: 'ulcerative-colitis', isAvailable: false, connection: 'Probiotic strains help maintain remission and reduce inflammation in UC' },
    { _key: 'ld3', diseaseName: 'PCOD', diseaseSlug: 'pcod', isAvailable: false, connection: 'Gut microbiome imbalance linked to hormonal dysregulation in PCOD; probiotics show benefit' },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Bloating / Gas', symptomSlug: 'bloating' },
    { _key: 'ls2', symptomName: 'Diarrhea', symptomSlug: 'diarrhea' },
    { _key: 'ls3', symptomName: 'Constipation', symptomSlug: 'constipation' },
    { _key: 'ls4', symptomName: 'Frequent Infections', symptomSlug: 'frequent-infections' },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'Stool Culture / Gut Microbiome Test', testSlug: 'stool-test', isAvailable: false },
    { _key: 'rt2', testName: 'Calprotectin (Gut Inflammation Marker)', testSlug: 'calprotectin-test', isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Zinc', vitaminSlug: 'zinc' },
    { _key: 'rv2', vitaminName: 'Vitamin D', vitaminSlug: 'vitamin-d' },
    { _key: 'rv3', vitaminName: 'Magnesium', vitaminSlug: 'magnesium' },
  ],

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Nux Vomica',
      patientType: 'Jo log zyada spicy khana, chai, coffee ya irregular khaana khate hain aur jinhein constipation ke baad diarrhea aati hai — especially office-going stressed adults mein',
      howItHelps: 'Gut ki irregular functioning aur indigestion mein madadgar — digestive sensitivity aur overloaded gut ko regulate karne mein use kiya jaata hai. Cochrane review (2019) mein asafoetida ke saath Nux vomica ka IBS-C mein short-term improvement paya gaya.',
    },
    {
      _key: 'h2',
      medicineName: 'Lycopodium Clavatum',
      patientType: 'Pet mein gas, bloating — especially khane ke baad; jo log har cheez se flatulence feel karte hain',
      howItHelps: 'Gut mein fermentation aur gas formation kam karne mein help karta hai — liver aur gut function dono pe constitutional effect dikhta hai. 2021 study mein IBS patients mein improvement observed.',
    },
    {
      _key: 'h3',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Slow digestion, constipation — especially thake hue, cold intolerant patients mein jo easily infections lete hain',
      howItHelps: 'Poor absorption aur sluggish gut activity ko support karna — constitution-based gut immunity improve karna.',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Market ka dahi ya flavored yogurt same hai — probiotics milte hain usme',
      truth: 'Packaged flavored dahi ya commercial yogurt mein processing ke waqt bahut se live bacteria mar jaate hain. Ghar ka 12-16 ghante fermented plain dahi kahin zyada reliable probiotic source hai. "Live cultures" label check karein supplement mein.',
    },
    {
      _key: 'm2',
      myth: 'Zyada probiotics lo, jitna zyada utna better',
      truth: 'More is not always better. Very high dose se pehle zyada gas aur bloating hoti hai. Immunocompromised patients mein serious side effects bhi possible hain. Clinical studies mein 1-20 Billion CFU range kaam karta hai — unnecessarily 100 Billion+ lena fayda nahi karta (NIH ODS 2025).',
    },
    {
      _key: 'm3',
      myth: 'Sirf antibiotic lene ke baad probiotics ki zaroorat hai',
      truth: 'Gut dysbiosis ke kaaran kaafi hain — stress, processed food, chlorinated water, aging. Regular dahi aur fermented foods khana preventive gut health ke liye har waqt faydamand hai.',
    },
    {
      _key: 'm4',
      myth: 'Probiotics lene ke baad ek hafte mein gut theek ho jaata hai',
      truth: 'Gut microbiome ko restore hone mein minimum 4-12 hafte lagte hain. Realistic expectation zaroori hai — ek hafte mein koi dramatic improvement expect nahi karni chahiye.',
    },
    {
      _key: 'm5',
      myth: 'Koi bhi probiotic supplement sab ke liye same kaam karta hai',
      truth: 'Alag alag strains alag conditions ke liye kaam karte hain. L. rhamnosus GG diarrhea ke liye best studied hai. B. infantis colic ke liye. S. boulardii antibiotic-associated diarrhea ke liye. Strain matter karta hai — generic "probiotic" lene se kaam ho bhi sakta hai, nahi bhi.',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Probiotics kya hota hai?',
      answer: 'Probiotics wo live bacteria aur yeasts hain jo aapki intestines mein rehte hain aur gut ko healthy rakhte hain. Ye "acche bacteria" hain — jo khana digest karne, immunity badhane aur harmful bacteria ko rokne mein help karte hain. Body mein naturally hote hain, lekin antibiotic ya poor diet se ye kam ho jaate hain. Supplement ya fermented foods se inhe replenish kiya ja sakta hai.',
    },
    {
      _key: 'faq2',
      question: 'Probiotics ki kami ke lakshan kya hain?',
      answer: 'Probiotics ki kami ke sabse common signs hain: baar baar loose motions ya constipation, pet mein bloating aur gas, baar baar bimaar padhna, skin pe acne ya rashes aur antibiotic lene ke baad diarrhea. Mahilaon mein vaginal infections baar baar hona bhi ek sign ho sakta hai. Agar ye symptoms baar baar aa rahe hain to doctor se milna chahiye.',
    },
    {
      _key: 'faq3',
      question: 'Probiotics kisme paya jata hai — Indian foods mein?',
      answer: 'India mein sabse best natural probiotic sources hain: ghar ka fresh dahi (1 Billion tak CFU), chaas/lassi (lactic acid bacteria), idli aur dosa (fermented rice-dal), dhokla (fermented besan), kanji (North Indian fermented drink) aur homemade oil-based pickles (achaar — vinegar-based mein nahi). Ghar ka banaya fresh dahi aaj bhi sabse accessible aur reliable Indian probiotic source hai.',
    },
    {
      _key: 'faq4',
      question: 'Probiotics kab lena chahiye — subah ya raat?',
      answer: 'Zyada research suggest karta hai ki khane se 30 minute pehle ya khane ke pehle bite ke saath lena best hai — stomach acid se bacteria ki protection milti hai. Subah empty stomach pe bhi le sakte hain. Garam chai, garam milk ya hot soup ke saath mat lo — bacteria mar jaate hain. Room temperature paani ke saath lo.',
    },
    {
      _key: 'faq5',
      question: 'Probiotics khana ke saath lena chahiye ya bina?',
      answer: 'Khane ke saath ya thoda pehle le sakte hain — dono acceptable hain. Khaali stomach pe bhi kaam karta hai agar room temperature paani ke saath lo. Bas ye dhyan rakho: koi garam liquid ke saath nahi lena — hot drinks live bacteria ko kill kar dete hain.',
    },
    {
      _key: 'faq6',
      question: 'Antibiotics ke saath probiotics le sakte hain?',
      answer: 'Haan le sakte hain — lekin ek hi time pe nahi. Bacteria-based probiotics (Lactobacillus, Bifidobacterium) ko antibiotic se 2 ghante ka gap do, warna antibiotics unhe maar denge. Saccharomyces boulardii (yeast-based) ek exception hai — ye antibiotic ke saath bhi le sakte hain kyunki antibiotic yeast ko affect nahi karta.',
    },
    {
      _key: 'faq7',
      question: 'Probiotics ke side effects kya hain?',
      answer: 'Shuru ke 1-2 hafte mein pehli baar lene pe thodi gas, bloating ya mild loose stools ho sakti hai — ye normal "adjustment phase" hai aur band ho jaata hai. Serious side effects healthy logo mein bahut rare hain. Lekin agar aap immunosuppressant medicines pe hain, cancer treatment chal raha hai ya organ transplant hua hai — tab bina doctor ke probiotics mat lo. Ye rare but serious infection risk create kar sakta hai.',
    },
    {
      _key: 'faq8',
      question: 'Pregnancy mein probiotics safe hai?',
      answer: 'Haan, Lactobacillus aur Bifidobacterium strains pregnancy mein generally safe considered hain — NIH ke clinical trial data mein koi serious adverse effects pregnant women mein report nahi hue. Pregnancy mein gut health extra important hai kyunki baby ka microbiome birth ke time set hota hai. Lekin pregnancy mein koi bhi supplement apne doctor se discuss karke lena chahiye — strain aur dose matter karta hai.',
    },
    {
      _key: 'faq9',
      question: 'Bacchon ko probiotics dena chahiye?',
      answer: 'Haan, bacchon ke liye probiotics safe hain — lekin age-specific products use karein. 6 months se chhoti age ke liye sirf doctor ke guidance mein. 2 saal ke baad ghar ka dahi, idli, dosa se natural probiotics milte hain. Antibiotic course ke baad ya baar baar bimaar rehne wale bacchon mein paediatrician se probiotic supplement discuss karein.',
    },
    {
      _key: 'faq10',
      question: 'Gut mein probiotics kaise badhayein naturally?',
      answer: 'Gut ke acche bacteria naturally badhane ke liye: subah ek katori ghar ka dahi khao, idli-dosa week mein 3-4 baar khao, prebiotic foods (kela, pyaz, lahsun, oats) khao jo good bacteria ko feed karte hain, processed food aur zyada sugar kam karo. Unnecessary antibiotics se bachein. Dahi aur fermented foods daily diet ka hissa banao — ye India ki traditional wisdom hai jo actually science-backed bhi hai.',
    },
    {
      _key: 'faq11',
      question: 'Probiotics aur prebiotics mein kya fark hai?',
      answer: 'Probiotics live bacteria hain (dahi mein hote hain) jo gut health ke liye direct kaam karte hain. Prebiotics wo fiber hain (kele, pyaz, lahsun, oats mein) jo in bacteria ko "khaana" dete hain. Dono ko saath lena sabse zyada effective hai — ise "synbiotic" combination kehte hain. Simple tarike se samjhein: probiotic bacteria hain, prebiotic unka khaana hai.',
    },
    {
      _key: 'faq12',
      question: 'Probiotics se weight loss hota hai kya?',
      answer: 'Kuch studies mein Lactobacillus aur Bifidobacterium strains weight management pe modest positive effect dikhate hain — lekin ye "weight loss pill" nahi hai. Gut health theek rehne se metabolism better hoti hai, cravings kam ho sakti hain aur inflammation reduce hoti hai — ye indirect se weight management mein help karta hai. Direct evidence abhi limited hai — research ongoing hai.',
    },
    {
      _key: 'faq13',
      question: 'Probiotics se pet saaf hota hai kya — constipation mein?',
      answer: 'Haan, kuch probiotic strains — khaaskar Bifidobacterium lactis aur L. casei — constipation mein bowel frequency improve karte hain. Clinical studies mein moderate improvement paya gaya hai. Regular dahi khana aur pani zyada peena is mein help karta hai. Agar constipation chronic hai to sirf probiotic se nahi chalega — doctor se milna zaroori hai.',
    },
    {
      _key: 'faq14',
      question: 'Probiotics se bloating aur gas band hoti hai?',
      answer: 'Initially (pehle 1-2 hafte) thodi zyada gas ho sakti hai — bacteria adjust ho rahe hote hain. Uske baad kaafi log better feel karte hain. IBS mein multi-strain probiotics bloating aur abdominal discomfort reduce karte hain — 10 Billion CFU per day wale products pe positive research results hain. Lekin sab strains sab pe same kaam nahi karte.',
    },
    {
      _key: 'faq15',
      question: 'Probiotics aur iron saath mein le sakte hain?',
      answer: 'Haan, generally saath mein le sakte hain — koi major direct interaction nahi hai. Iron supplement gut bacteria pe thoda asar karta hai (kuch harmful bacteria iron se benefit karte hain). Agar dono lena ho, doctor se timing discuss karein. Probiotic pehle, iron uske 1-2 ghante baad — generally safe approach hai.',
    },
    {
      _key: 'faq16',
      question: 'Probiotics ke baare mein common myths kya hain?',
      answer: 'Common galat fehmiyan: (1) "Zyada lo, better hai" — nahi, zaroori nahi; (2) "Market ka dahi = probiotic" — always nahi, ghar ka better hai; (3) "Sirf gut ke liye hai" — skin, immunity, mood pe bhi asar; (4) "Ek hafte mein results" — nahi, 4-8 hafte minimum. Realistic expectations zaroori hain.',
    },
    {
      _key: 'faq17',
      question: 'Probiotics immunity ke liye kaisi hain?',
      answer: 'Body ki 70% immunity gut mein hoti hai — isliye probiotics immunity ke liye bahut important hain. Lactobacillus aur Bifidobacterium strains gut lining strong karte hain, immune cells train karte hain aur inflammation regulate karte hain. Bacchon aur elderly mein baar baar infections rokne ke liye probiotics pe achhe studies available hain.',
    },
  ],

  sources: [
    'NIH Office of Dietary Supplements — Probiotics Fact Sheet for Health Professionals | 2025 | ods.od.nih.gov/factsheets/Probiotics-HealthProfessional/',
    'Cochrane Review — Homeopathy for treatment of IBS | 2019 | pubmed.ncbi.nlm.nih.gov/31483486/',
    'Medscape Clinical Reference — Probiotics Drug Interactions (Immunosuppressants, Antibiotics, Antifungals) | 2020 | medscape.com/viewarticle/719654_13',
    'Indian Traditional Fermented Foods — LAB & Probiotic Content | Intechopen (peer-reviewed) | 2023 | intechopen.com/chapters/86667',
    'Mayo Clinic — Acidophilus (Lactobacillus acidophilus) | December 2024 | mayoclinic.org/drugs-supplements-acidophilus/art-20361967',
  ],
}

async function seed() {
  try {
    console.log('Seeding Probiotics...')
    const result = await client.createOrReplace(probiotics)
    console.log('Done:', result._id)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seed()
