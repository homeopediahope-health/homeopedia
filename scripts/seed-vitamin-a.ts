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

const vitaminA = {
  _id: 'vitamin-vitamin-a',
  _type: 'vitamin',
  name: 'Vitamin A',
  hindiName: 'Roshni Ka Vitamin / Aankh Wala Vitamin',
  category: 'Vitamin',
  slug: { _type: 'slug', current: 'vitamin-a' },
  metaTitle: 'Vitamin A Ki Kami: Lakshan, Foods & Homeopathic Ilaj',
  metaDescription: 'Vitamin A ki kami ke lakshan, vegetarian food sources, normal range aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: '',

  quickFacts: {
    indiaPrevalence: 'India mein preschool bacchon mein Bitot\'s spots (Vitamin A deficiency ka sign) 0.3–0.7% mein paaya jaata hai — ICMR-NIN data ke mutabik. Globally deficiency 1/3 bacchon ko prabhavit karti hai.',
    commonDeficiencySign: 'Raat ko dikhai dena kam hona (Night Blindness / Rataundhi) — ye Vitamin A kami ka pehla aur sabse common sign hai',
    mainFoodSource: 'Gajar (Carrot) — 100g mein approx 835 mcg RAE beta-carotene — NIN IFCT 2017',
    normalRangeQuick: '20–60 mcg/dL (Serum Retinol)',
  },

  whatIsIt: 'Vitamin A ek fat-soluble vitamin hai — matlab ye fat ke saath absorb hota hai aur liver mein store hota hai. Ye aankh, skin, immunity aur badhte bacchon ke liye absolutely zaroori hai. Body mein ye do forms mein milta hai: retinol (animal sources se — preformed vitamin A) aur beta-carotene (plant sources se — provitamin A, jo body apni zaroorat ke hisab se vitamin A mein convert karta hai).',

  bodyFunctions: [
    'Aankhon ki roshni — Retinal (vitamin A ka active form) aankhon mein rhodopsin pigment banata hai; jo dim light mein dekhne ke liye zaroori hai; kami hoti hai to raat ka andhera zyada lagne lagta hai',
    'Skin aur mucous membranes — Skin cells ki normal growth aur repair ke liye zaroori hai; kami mein skin rough, dry aur flaky ho jaati hai',
    'Immunity boost — White blood cells ke production mein madad karta hai; respiratory aur gut infections se ladne ki taakat deta hai',
    'Badhna aur develop hona (bacchon mein) — Bones aur teeth ki normal growth ke liye essential hai; kami mein bacche ki height ruk sakti hai',
    'Gene expression — Retinoic acid (vitamin A ka form) thousands of genes ko regulate karta hai; cell differentiation aur organ development ke liye',
    'Reproductive health — Men mein sperm production aur women mein normal menstrual cycle ke liye zaroori hai',
    'Wound healing — New cells banane mein madad karta hai; isliye cuts aur ghav jaldi theek hote hain',
    'Antioxidant (beta-carotene form) — Free radical damage se cells ko protect karta hai',
  ],

  causesOfDeficiency: [
    'Vegetarian diet mein variety ki kami — Sirf roti-daal khana aur roz orange/yellow vegetables ya leafy greens na khana; India ke poor aur rural areas mein ye sabse bada reason hai',
    'Fat absorption ki problem — Vitamin A fat-soluble hai; agar body fat properly absorb nahi karti (Crohn\'s disease, celiac disease, liver disease, cystic fibrosis) to vitamin A bhi nahi absorb hoga',
    'Zinc ki kami — Zinc ke bina vitamin A liver se blood mein properly release nahi hota; zinc deficiency India mein common hai, aur ye dono saath saath hoti hain',
    'Diarrhea aur malnutrition — Baar baar dast hona nutrients ko body se nikaal deta hai; chhote bacchon mein ye major cause hai',
    'Alcoholism — Alcohol liver ko damage karta hai jahan vitamin A store hota hai, aur absorption bhi affect hoti hai',
    'Pregnancy aur breastfeeding mein zyada zaroorat — Is time need badh jaati hai; agar diet mein nahi hai to kami ho sakti hai',
    'Highly processed food heavy diet — Fast food aur packaged snacks mein vitamin A practically zero hota hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Bacchon mein growth ruk jaana — Severe deficiency mein height aur weight ka normal rate slow ho sakta hai',
    ],
    energyMoodBrain: [
      'Rataundhi (Night Blindness) — Andhere mein ya raat ko dikhai dena band ho jaana; aankhon ko dark mein adjust hone mein zyada time lagta hai — ye sabse specific sign hai',
      'Sukhi Aankhein (Dry Eyes / Xerophthalmia) — Aankhon mein aansoo na banana; aankhein sukhi aur reti jaisi feel hona; zyada kami mein Bitot\'s Spots (aankhon mein safed dhabbe) bante hain',
      'Roshni ke liye sensitivity — Tej roshni mein aankhein zyada jalne lagti hain ya discomfort hota hai',
    ],
    skinHairNails: [
      'Rough Skin (Follicular Hyperkeratosis) — Baahon ke peeche, jaanghon pe aur kamar pe choti choti bumps ya rough patches aana — ye bahut commonly searched symptom hai',
      'Sukhi Twacha (Dry, Flaky Skin) — Moisturizer lagane ke baad bhi skin rough aur flaky rehna — kami ki wajah se skin cells theek se nahi banti',
      'Baalon ka girna aur sukha hona — Hair follicles pe Vitamin A ka direct effect hota hai; kami mein baale zyada girte hain, dandruff aur dry scalp hoti hai',
      'Nails brittle ho jaate hain aur toot te hain',
    ],
    other: [
      'Baar baar zukam, khansi ya chest infection — Vitamin A respiratory tract ke mucous lining ko protect karta hai; kami mein infections frequently hoti hain',
      'Ghav ya chot jaldi theek nahi hona — Skin ki repair ke liye vitamin A zaroori hai; kami mein healing slow ho jaati hai',
      'Munh ya gale mein baar baar infection ya chhale — Mucous membranes weak hone ki wajah se',
      'Female-specific: Irregular periods — Reproductive system ke liye vitamin A zaroori hai; severe kami mein periods irregular ho sakte hain',
    ],
  },

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',        normal: '20–60 mcg/dL',  deficient: '< 20 mcg/dL', toxic: '> 60 mcg/dL', unit: 'mcg/dL' },
    { _key: 'nr2', category: 'Adult Female',       normal: '20–60 mcg/dL',  deficient: '< 20 mcg/dL', toxic: '> 60 mcg/dL', unit: 'mcg/dL' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)', normal: '20–50 mcg/dL',  deficient: '< 20 mcg/dL', toxic: '> 50 mcg/dL', unit: 'mcg/dL' },
    { _key: 'nr4', category: 'Pregnancy',          normal: '20–60 mcg/dL',  deficient: '< 20 mcg/dL', toxic: '> 60 mcg/dL (risk high)', unit: 'mcg/dL' },
    { _key: 'nr5', category: 'Elderly (60+)',       normal: '20–60 mcg/dL',  deficient: '< 20 mcg/dL', toxic: '> 60 mcg/dL', unit: 'mcg/dL' },
  ],

  vegSources: [
    { _key: 'v1', food: 'Shakarkand (Sweet Potato)',          quantity: '1 medium (130g)',     amount: '~960 mcg RAE' },
    { _key: 'v2', food: 'Gajar (Carrot)',                     quantity: '100g (kaccha)',        amount: '~835 mcg RAE' },
    { _key: 'v3', food: 'Saijan Patta (Drumstick/Moringa)',   quantity: '1 katori',             amount: '~742 mcg RAE' },
    { _key: 'v4', food: 'Sarson Ka Saag (Mustard Greens)',    quantity: '1 katori',             amount: '~600+ mcg RAE' },
    { _key: 'v5', food: 'Palak (Spinach)',                    quantity: '1 katori pakaya',      amount: '~472 mcg RAE' },
    { _key: 'v6', food: 'Methi Patta (Fenugreek Leaves)',     quantity: '1 katori pakaya',      amount: '~395 mcg RAE' },
    { _key: 'v7', food: 'Kaddu (Pumpkin)',                    quantity: '1 katori pakaya',      amount: '~369 mcg RAE' },
    { _key: 'v8', food: 'Papaya (Paka hua)',                  quantity: '1 katori (150g)',      amount: '~155 mcg RAE' },
    { _key: 'v9', food: 'Aam (Mango, paka hua)',              quantity: '1 medium aam',         amount: '~112 mcg RAE' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Bheda/Bakri ka Kaleji (Liver)',  quantity: '100g', amount: '~6500+ mcg RAE (BAHUT ZYADA — pregnancy mein avoid)' },
    { _key: 'nv2', food: 'Makhan (Butter)',                quantity: '1 tbsp', amount: '~97 mcg RAE' },
    { _key: 'nv3', food: 'Ande ki zameel (Egg Yolk)',      quantity: '2 ande', amount: '~145 mcg RAE' },
    { _key: 'nv4', food: 'Doodh (Full fat cow milk)',      quantity: '1 glass (250ml)', amount: '~56 mcg RAE' },
    { _key: 'nv5', food: 'Machli (Tuna/Rohu)',             quantity: '100g', amount: '~36–58 mcg RAE' },
  ],

  sunlightNote: 'Ek katori gajar aur palak ki sabzi mein ghee ya tel daalke pakaayen — din bhar ki zaroorat kaafi hoti hai. Vitamin A fat-soluble hai, isliye kuch fat ke saath khaana ZAROORI hai warna absorption kaafi kam ho jaati hai. Liver bahut high source hai — lekin PREGNANCY mein isko avoid karein kyunki preformed vitamin A ki zyada dose harmful ho sakti hai.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–12 months',    male: '400', female: '400', pregnancy: null,  breastfeeding: '500',  unit: 'mcg/day (AI)' },
    { _key: 'd2', ageGroup: '1–8 saal',       male: '500', female: '500', pregnancy: null,  breastfeeding: null,   unit: 'mcg/day' },
    { _key: 'd3', ageGroup: '9–18 saal',      male: '750', female: '650', pregnancy: null,  breastfeeding: null,   unit: 'mcg/day' },
    { _key: 'd4', ageGroup: 'Adults (19–50)', male: '900', female: '700', pregnancy: '770', breastfeeding: '1300', unit: 'mcg/day (NIH RDA)' },
    { _key: 'd5', ageGroup: '51–70 saal',     male: '900', female: '700', pregnancy: null,  breastfeeding: null,   unit: 'mcg/day' },
    { _key: 'd6', ageGroup: '70+ saal',       male: '1000',female: '840', pregnancy: null,  breastfeeding: null,   unit: 'mcg/day (ICMR-NIN)' },
  ],

  pregnancyInfo: {
    applicable: true,
    note: 'Pregnancy mein Vitamin A zaroori hai — fetal development, immunity aur mata ki khud ki sehat ke liye. Daily requirement: 770 mcg RAE/day (NIH) — normal diet se poori ki ja sakti hai. DANGER: Preformed vitamin A (retinol/retinyl palmitate) ki HIGH dose pregnancy mein TERATOGENIC (janm dosh kaarne wali) hai. Beta-carotene supplements generally safe hain — body utna hi convert karta hai jitna chahiye. Preformed vitamin A supplement: 770 mcg/day se zyada nahi leni chahiye. High-dose (5000 IU ya zyada) retinol supplement: STRICTLY avoid karein. Fetal aankhon ka theek se develop na hona, baby ka immune system kamzor rehna, aur night blindness in pregnant women India mein pregnancy complications se linked hai.',
    whenDoctor: 'Pregnancy mein koi bhi Vitamin A supplement ya high-dose multivitamin lene se pehle apne doctor ya gynaecologist se zaroor consult karein — especially preformed vitamin A wale supplements.',
  },

  childrenInfo: 'Bacchon mein Vitamin A kami ke specific signs: Aankhon mein Bitot\'s Spots (aankhon ki safedi par grey-white chalky dhabbe — children-specific clinical sign), raat ko rone ya dikhai na dena (small bacche bata nahi pate, behavior observe karein), baar baar diarrhea ya respiratory infections, growth theek se nahi hona. Daily requirement: 0–12 months: 400 mcg | 1–3 saal: 400 mcg | 4–8 saal: 450–500 mcg | 9–13 saal: 600 mcg. Ghar pe: Gajar ka halwa ghee se, ripe mango shake ya papaya, ande wali sabzi, doodh. Healthy bacchon ko supplement ki zaroorat generally nahi — agar doctor ne prescribed kiya ho (measles ya malnutrition case mein) tabhi dena. Mega-dose supplement DOCTORS KE BINA KABHI NAHI dena — bacchon mein toxicity jaldi ho jaati hai.',

  labTestInfo: {
    testName: 'Serum Vitamin A (Retinol) Test',
    testSlug: 'vitamin-a-test',
    normalRange: '20–60 mcg/dL (0.69–2.09 µmol/L). Deficient: < 20 mcg/dL. Toxic: > 60 mcg/dL. Source: Metropolis Healthcare India, Dr. Lal PathLabs.',
    whenToTest: 'Raat ko dikhai dena kam ho raha ho. Skin baar baar rough ya bumpy ho. Baar baar infections ho rahe ho. Bacche ki growth slow lag rahi ho. GI (digestive) disease ho — absorption issue ke liye check.',
    repeatAfter: 'Supplement shuru karne ke 3 mahine baad test repeat karein. Severe deficiency mein doctor ki guidance se 6 hafte mein bhi check kar sakte hain.',
    priceRange: '₹3,200–₹4,800 (city ke hisab se vary karta hai). Special instruction: Overnight fasting zaroori hai. Sample tube ko aluminium foil mein wrap karke lab ko dena padta hai — light se sample kharab ho jaata hai.',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Retinyl Palmitate (ya Retinyl Acetate) — Preformed Vitamin A',
      benefits: ['Seedha active form hai — body ko convert nahi karna padta', 'Severe deficiency mein fast action', 'Most capsules/multivitamins mein ye hi hota hai'],
      drawbacks: ['High dose mein toxic ho sakta hai — liver mein accumulate hota hai', 'Pregnancy mein 770 mcg se zyada nahi lena', 'Smokers ke liye high-dose avoid karein'],
      bestFor: 'Clinically diagnosed severe deficiency mein doctor ki prescription pe',
    },
    {
      _key: 'sf2',
      formName: 'Beta-Carotene Supplement (Plant-derived Provitamin A)',
      benefits: ['Safe alternative — body utna hi convert karta hai jitni zaroorat ho', 'Toxicity practically zero hai plant sources se', 'Vegetarian/vegan ke liye perfect'],
      drawbacks: ['Zyada khaane se skin aur hatheli orange-yellow ho sakti hai (carotenemia — harmless)', 'High-dose beta-carotene supplements smokers ke liye lung cancer risk badhaate hain — AVOID'],
      bestFor: 'Mild deficiency, prevention, pregnancy mein safe option, vegetarians',
    },
    {
      _key: 'sf3',
      formName: 'Mixed Carotenoids (Beta-carotene + Alpha-carotene + Lutein + Zeaxanthin)',
      benefits: ['Broad spectrum antioxidant protection', 'Aankhon ki health ke liye extra fayda (lutein/zeaxanthin)', 'Natural foods se closest form'],
      drawbacks: ['Bioavailability pure retinol se thodi kam', 'Severe deficiency treat karne ke liye slower', 'Price thodi zyada'],
      bestFor: 'Eye health, prevention, aging adults, mild deficiency',
    },
    {
      _key: 'sf4',
      formName: 'Multivitamin mein Vitamin A (combination)',
      benefits: ['Convenient — ek tablet mein multiple nutrients', 'Commonly prescribed by doctors'],
      drawbacks: ['Ek se zyada supplement lete ho to total Vitamin A intake calculate karna zaroori hai — toxicity avoid karne ke liye', 'Har multivitamin mein dose different hoti hai'],
      bestFor: 'General health maintenance, mild deficiency prevention',
    },
  ],

  supplementTiming: {
    bestTime: 'Khane ke saath — din ke kisi bhi meal ke saath le sakte hain, lekin jo meal mein thoda tel ya ghee ho usi ke saath lena best hai.',
    withFood: 'Hamesha khane ke saath ya khane ke turant baad. Khali pet lene se nausea ho sakta hai. Paani se le sakte hain, lekin ek ghoosp milk ya dahi ke saath lena fat absorption ke liye better hai.',
    note: 'Zinc ki kami door karo: Zinc ke bina vitamin A liver se blood mein theek se nahi aata — til, chana, sabut anaj khaaye. Zinc + Vitamin A ka combination double fayda deta hai.',
    avoid: 'High-dose iron supplements ke saath ek hi waqt mein nahi lena — 1-2 ghante ka gap rakhein. Zyada alcohol ke saath nahi — Vitamin A toxicity ka risk multiply ho jaata hai.',
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Isotretinoin (Accutane/Roaccutane — acne medicine)', reason: 'Ye khud retinoid hai; saath mein Vitamin A supplement lena DANGEROUS hai — severe toxicity aur liver damage ka risk. Agar ye medicine chal rahi hai to Vitamin A supplement BILKUL nahi lena' },
    { _key: 'di2', medicineName: 'Tretinoin (topical ya oral — acne/skin cream)', reason: 'Ye bhi retinoid hai; oral Vitamin A ke saath combined toxicity ka risk hai. Doctor ko batao agar dono use kar rahe ho' },
    { _key: 'di3', medicineName: 'Orlistat (weight loss medicine — Alli, Xenical)', reason: 'Fat absorption blocker hai; Vitamin A aur baaki fat-soluble vitamins (D, E, K) ki absorption significantly kam kar deta hai. Orlistat se 2+ ghante gap rakhke lena chahiye' },
    { _key: 'di4', medicineName: 'Cholestyramine ya Colestipol (cholesterol medicines)', reason: 'Intestinal mein fat-soluble vitamins ki absorption block karte hain — Vitamin A level gir sakta hai' },
  ],

  combinations: {
    beneficial: [
      { _key: 'b1', nutrient: 'Zinc', reason: 'Zinc, vitamin A ko liver se blood mein release karne mein madad karta hai. India mein dono ki combined deficiency common hai — zinc rich foods (til, chana, sabut anaj) ke saath vitamin A foods khaana double fayda deta hai' },
      { _key: 'b2', nutrient: 'Vitamin D', reason: 'Dono fat-soluble hain aur immunity ke liye synergistically kaam karte hain. Ek hi fat-containing meal ke saath dono absorb ho jaate hain' },
      { _key: 'b3', nutrient: 'Vitamin E', reason: 'Dono antioxidants hain; E, A ko oxidation se protect karta hai. Nuts aur seeds mein natural combination milta hai' },
    ],
    avoid: [
      { _key: 'a1', nutrient: 'High-dose Vitamin A supplement (double source)', reason: 'Ek se zyada Vitamin A sources saath lene pe toxicity — sirf ek form lo' },
      { _key: 'a2', nutrient: 'Isotretinoin/Tretinoin + Vitamin A supplement', reason: 'Combined retinoid toxicity bahut dangerous — liver damage aur severe side effects' },
    ],
    timingGuide: 'Subah lo: Vitamin D (breakfast ke saath ghee/makhan wale). Raat lo: Vitamin A supplement (dinner ke saath agar fat ho khane mein). Iron supplement aur Vitamin A ke beech mein 1-2 ghante ka gap rakho.',
  },

  toxicity: {
    upperLimit: 'Adults: 3000 mcg RAE/day (NIH) — SIRF preformed vitamin A (retinol/retinyl forms) ke liye. Beta-carotene ka koi UL nahi — plant-based sources se toxicity practically nahi hoti.',
    sideEffects: [
      'Sar dard — bahut common first sign, especially subah',
      'Nausea aur ulti',
      'Chakkar aur blurred vision',
      'Muscles aur joints mein dard',
      'Skin peeling — especially hothon aur taaluon pe',
      'Liver damage — chronic overdose mein liver enzymes badhte hain, jaundice ho sakta hai',
      'Bones kamzor ho sakti hain — paradoxically zyada vitamin A bone density kam karta hai',
      'Pregnancy mein birth defects — isliye preformed vitamin A ka high dose pregnancy mein strictly avoid',
    ],
    whenSerious: 'TURANT DOCTOR KE PAAS JAAO: Bahut tez sar dard jo nahi jaata. Aankhon ki roshni blurry ho gayi. Skin ka rang peela parna ya aankhein peeli hona (jaundice). Agar bacche ko high-dose diya ho aur wo behosh lag raha ho. Doctor ki salah ke bina high-dose Vitamin A supplement kabhi mat lo — ye fat-soluble hai aur body mein store hota hai — overdose ka risk real hai.',
  },

  timeline: {
    bloodLevelTime: 'Supplement shuru karne ke 2–4 hafte mein serum retinol level measurable improvement dikhata hai. Test mein fark 4–6 hafte mein clear hoga.',
    symptomsTime: 'Night blindness: Kuch logon mein 1–2 hafte mein improvement — ye vitamin A ka fastest responding symptom hai. Skin roughness/bumps: 6–8 hafte mein clearly smooth hoti hai. Hair: 2–3 mahine lagenge. Immunity: 2–3 mahine regular supplement se fark dikhta hai.',
    fullRecoveryTime: 'Mild deficiency: 2–3 mahine mein blood level normal. Moderate deficiency: 3–6 mahine. Severe (xerophthalmia stage): Clinical treatment lagegi, doctor supervised care zaroori.',
    repeatTestTime: 'Supplement shuru karne ke 3 mahine baad test repeat karein',
    patientNote: 'Ek hafte mein dramatic change expect mat karein — fat-soluble vitamins ko time lagta hai. Patience zaroori hai. Lekin agar 2 hafte mein night blindness mein koi fark nahi aaya to doctor se milein — severe cases mein professional treatment zaroori hai.',
  },

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Euphrasia Officinalis',
      patientType: 'Jin patients ki aankhein zyada sukhi rehti hain, aankhon se paani aata ho, roshni sensitive ho, aur aankhon mein burning ya irritation ho',
      howItHelps: 'Euphrasia aankhon ki mucous membrane pe kaam karta hai — Vitamin A deficiency se hone wale eye symptoms (dry eyes, irritation, redness) mein complementary support deta hai. CCRH ke literature mein eye-related conditions ke liye mention kiya gaya hai',
    },
    {
      _key: 'h2',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Motaape wale, thakaan mehsoos karne wale, baar baar zukam lagane wale, digestive weakness wale patients — jinhe food properly absorb nahi hota',
      howItHelps: 'Constitutional medicine hai jo body ki overall absorption aur assimilation capacity ko improve karne mein madadgar hai — Vitamin A jaise fat-soluble nutrients ki poor absorption ke cases mein',
    },
    {
      _key: 'h3',
      medicineName: 'Natrum Muriaticum',
      patientType: 'Skin dry aur rough rehti ho, hair bahut girate hon, weakness aur chronic fatigue ho, aur emotionally reserved patient ho',
      howItHelps: 'Skin aur hair se related Vitamin A deficiency ke symptoms — dryness, roughness — mein support deta hai',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Gajar khaane se aankhein perfect ho jaati hain',
      truth: 'Gajar mein beta-carotene hota hai jo Vitamin A deficiency door karta hai — lekin agar aankhein healthy hain to gajar "super vision" nahi deta. Ye myth World War II British propaganda se shuru hua tha. Kami theek hogi, normal se better nahi hogi.',
    },
    {
      _key: 'm2',
      myth: 'Sirf andheron mein dikhai nahi deta to Vitamin A ki kami nahi hai',
      truth: 'Night blindness Vitamin A deficiency ka advanced sign hai. Iske pahle hi skin bumps (follicular hyperkeratosis), dry skin, baar baar infections, aur dry eyes jaise signs aate hain. Sirf night blindness ke na hone se kami rule out nahi hoti.',
    },
    {
      _key: 'm3',
      myth: 'Beta-carotene supplement aur Vitamin A supplement same hain',
      truth: 'Bilkul nahi. Preformed Vitamin A (retinol) TOXIC ho sakta hai high dose mein. Beta-carotene (plant source) practical roop se non-toxic hai kyunki body utna hi convert karti hai jitna zaroorat ho. Dono ko interchangeable mat samjho — especially pregnancy mein ye farq bahut critical hai.',
    },
    {
      _key: 'm4',
      myth: 'Sabzi nahi khaata to Vitamin D lete rahte hain, Vitamin A theek rehta hai',
      truth: 'Vitamin D aur Vitamin A alag vitamins hain — dono ki alag sources hain. Sirf Vitamin D supplement lene se Vitamin A level theek nahi hota. Orange-yellow vegetables aur leafy greens se hi Vitamin A milta hai.',
    },
    {
      _key: 'm5',
      myth: 'Jyada Vitamin A lete rehne se koi fark nahi padta — natural cheez hai',
      truth: 'Vitamin A fat-soluble hai aur liver mein store hota hai — zyada lena liver damage, bone weakness, aur pregnancy mein birth defects ka karan ban sakta hai. NIH ne UL 3000 mcg/day set ki hai adults ke liye. Natural bhi zyada lene pe harmful hoti hai.',
    },
  ],

  faqs: [
    { _key: 'f1',  question: 'Vitamin A ki kami se kya hota hai?', answer: 'Vitamin A ki kami se aankhon ki roshni kamzor hoti hai — khaaskar raat ko (Night Blindness/Rataundhi). Iske saath dry aur rough skin, baahon pe bumps, baar baar infections, aur baalo ka zyada girna bhi hota hai. Severe kami mein aankhein permanently damage ho sakti hain (Xerophthalmia). India mein bacchon mein Bitot\'s Spots (aankhon mein safed dhabbe) aur adults mein frequent respiratory infections common signs hain.' },
    { _key: 'f2',  question: 'Vitamin A ki kami ke lakshan kya hote hain?', answer: 'Pehla aur sabse specific sign hai raat ko ya andheron mein dikhai dena kam hona. Iske alawa skin rough aur bumpy ho jaana (baahon ke peechhe), baale zyada girna, dry aankhein, baar baar zukam ya chest infections, aur ghav jaldi theek na hona — ye sab Vitamin A deficiency ke common lakshan hain. Bacchon mein growth rukna aur aankhon mein dhabbe (Bitot\'s Spots) additional signs hain jo seriously lene chahiye.' },
    { _key: 'f3',  question: 'Vitamin A kisme paya jata hai — vegetarian?', answer: 'Sabse achhe vegetarian sources hain: Gajar (Carrot), Shakarkand (Sweet Potato), Saijan Patta (Drumstick/Moringa), Palak (Spinach), Methi Patta, Sarson ka Saag, Kaddu (Pumpkin), paka hua Papaya, aur paka hua Aam (Mango). Thodi important baat — ye sab fat ke saath khaane se hi Vitamin A properly absorb hota hai — isliye ghee ya tel mein pakaayen.' },
    { _key: 'f4',  question: 'Vitamin A ka normal range kitna hona chahiye?', answer: 'Blood mein Serum Retinol ka normal range hai 20 se 60 mcg/dL (micrograms per deciliter). 20 se kam ho to deficiency maan sakte hain, 60 se zyada ho to toxicity ke signs aa sakte hain. Indian labs (Metropolis, Dr. Lal PathLabs) ye hi range use karte hain.' },
    { _key: 'f5',  question: 'Vitamin A ki kami ka test kaise karaye?', answer: 'Blood ka Serum Vitamin A (Retinol) test hota hai. Overnight fasting zaroori hai. Metropolis ya Dr. Lal PathLabs pe home collection se kara sakte hain. Price ₹3,200–₹4,800 ke beech hai (city ke hisab se vary karta hai). Ek important baat — sample tube ko aluminium foil mein wrap karna padta hai kyunki Vitamin A light sensitive hai.' },
    { _key: 'f6',  question: 'Vitamin A ke fayde kya hain?', answer: 'Vitamin A ke main fayde hain — 1) Aankhon ki roshni theek rakhna, especially raat ko, 2) Skin aur hair healthy rakhna, 3) Immunity strong karna — baar baar bimaar hone se bachana, 4) Bacchon ki normal growth aur development support karna, 5) Wound healing fast karna, 6) Reproductive health maintain karna. Ye sab functions isiliye hote hain kyunki Vitamin A body mein thousands of genes ko regulate karta hai.' },
    { _key: 'f7',  question: 'Vitamin A ki tablet kab khaye?', answer: 'Vitamin A fat-soluble vitamin hai — isliye hamesha khane ke saath lena chahiye, khali pet nahi. Jo meal mein thoda fat ho (ghee, tel, butter wala khana) us ke saath lene se absorption best hoti hai. Time of day zyada matter nahi karta — consistency matter karti hai. Raat ke khane ke saath lena common practice hai.' },
    { _key: 'f8',  question: 'Vitamin A jyada lene se kya hota hai?', answer: 'Preformed Vitamin A (retinol/capsule form) zyada lene se liver mein accumulate hota hai — sar dard, nausea, skin peeling, bone pain, aur liver damage ho sakti hai. NIH ki upper limit (UL) adults ke liye 3000 mcg RAE/day hai. Pregnancy mein zyada lena birth defects ka cause ban sakta hai. BETA-CAROTENE (sabziyon se) practically non-toxic hai. Doctor ki salah ke bina high dose kabhi nahi lena.' },
    { _key: 'f9',  question: 'Vitamin A ki kami kaise puri karein?', answer: 'Sab se pehle din mein ek baar orange-yellow vegetable zaroor khaayen — gajar, shakarkand, kaddu. Ghee ya tel ke saath pakaayen. Palak, methi jaise leafy greens regular diet mein shamil karein. Agar kami mild hai to diet se hi theek ho sakti hai. Agar severe hai ya test mein level bahut low aaya ho to doctor prescribed supplement zaroor lena chahiye — sirf diet se severe deficiency jaldi theek nahi hoti.' },
    { _key: 'f10', question: 'Vitamin A ki kami se kaunsi bimari hoti hai?', answer: 'Vitamin A ki kami se hone wali main bimariyan hain: Night Blindness (Rataundhi), Xerophthalmia (aankhon ka sukh jaana aur corneal damage), Hyperkeratosis (skin ki rough bumpy condition), aur immune weakness jo baar baar infections (respiratory, diarrhea) karti hai. Severe aur long-term kami mein permanent blindness bhi ho sakti hai — ye developing countries mein preventable childhood blindness ka pehla kaaran hai.' },
    { _key: 'f11', question: 'Pregnancy mein Vitamin A kitna lena chahiye?', answer: 'Pregnancy mein 770 mcg RAE/day ki zaroorat hoti hai — jo normal balanced diet se ho sakti hai. IMPORTANT: Preformed Vitamin A (retinol form) ki HIGH DOSE pregnancy mein BAHUT DANGEROUS hai — birth defects ho sakte hain. Beta-carotene (plant sources se) safe hai. Agar aap multivitamin le rahi hain to check karein usme Vitamin A kitna hai aur kaun se form mein. "Pregnancy mein koi bhi Vitamin A supplement lene se pehle apna doctor zaroor consult karein."' },
    { _key: 'f12', question: 'Vitamin A wale fruits vegetarian mein kaunse hain?', answer: 'Vegetarian fruits mein sabse zyada Vitamin A milta hai: Paka hua Aam (Mango), Papaya, Kharbuja (Cantaloupe), Khubaani (Apricot) — fresh aur dried dono mein. Fruits mein beta-carotene hota hai jo orange/yellow color deta hai — jitna zyada rang utna zyada vitamin A. Roz ek glass pake aam ka ya ek katori papaya khana din ki requirement ka achha portion cover kar leta hai.' },
    { _key: 'f13', question: 'Vitamin A bacchon ko dena chahiye?', answer: 'Healthy bacchon ko jo normal diet kha rahe hain, unhe alag se supplement ki zaroorat generally nahi hoti. Gajar, aam, papaya, ande, doodh — ye regular khaate rahein to kafi hai. Doctor kuch specific cases mein supplement dete hain — jaise measles illness ke baad, severe malnutrition mein, ya documented deficiency mein. Bacchon ko doctors ki prescription ke bina mega-dose KABHI NAHI dena — unka liver adult se chhota hota hai aur toxicity jaldi ho jaati hai.' },
    { _key: 'f14', question: 'Vitamin A drug interactions kya hain?', answer: 'Sabse important: Acne ke liye Isotretinoin (Accutane) ya Tretinoin chal rahi ho to Vitamin A supplement BILKUL nahi lena — combined toxicity bahut serious ho sakti hai. Orlistat (weight loss medicine) fat-soluble vitamins ki absorption block karti hai — 2+ ghante gap se lena chahiye. Cholesterol ki medicines (cholestyramine) bhi absorption affect karti hain. "Koi bhi regular medicine chal rahi ho to supplement shuru karne se pehle doctor se zaroor poochein."' },
    { _key: 'f15', question: 'Vitamin A ki kami ka homeopathic ilaj kya hai?', answer: 'Homeopathy Vitamin A ko directly replace nahi karti — ye body ki absorption capacity improve karne aur related symptoms mein complementary support dene ka kaam karti hai. Commonly used medicines Euphrasia (aankhon ke symptoms mein), Calcarea Carb (absorption weakness mein), aur Natrum Muriaticum (dry skin, hair fall mein) hain. Lekin potency aur dose doctor decide karta hai — khud mat lo. Severe deficiency mein pehle conventional supplement zaroori hai, homeopathy saath chal sakti hai.' },
    { _key: 'f16', question: 'Vitamin A ka test kitne din mein report aata hai?', answer: 'Vitamin A (Retinol) blood test ki report generally 1–2 business days mein aa jaati hai. Agar home collection se kiya to lab processing time add hota hai. Metropolis aur Dr. Lal PathLabs dono pe online report bhi mil jaati hai.' },
    { _key: 'f17', question: 'Vitamin A ki kami se baal kyu girate hain?', answer: 'Vitamin A hair follicles ki normal cell cycle aur sebum production ke liye zaroori hai. Kami mein follicles theek se work nahi karte — baale zyada girte hain aur scalp dry ho jaata hai. Lekin ek important note: ZYADA Vitamin A bhi hair loss cause kar sakta hai — isliye balance zaroori hai. Agar baal gir rahe hain to pehle test karake level check karein phir supplement lo.' },
    { _key: 'f18', question: 'Vitamin A tablet ke fayde aur nuksan kya hain?', answer: 'Fayde: Aankhon, skin, immunity ke liye effective support. Kami mein doctor-prescribed supplement fast improvement deta hai. Nuksan: High dose mein liver damage, bone weakness, nausea, sar dard. Pregnancy mein birth defects. Isliye sirf doctor ki prescription pe, sahi dose mein lena chahiye. Supplement mein beta-carotene form prefer karein agar OTC le rahe hain — zyada safe hota hai.' },
    { _key: 'f19', question: 'Vitamin A aur Vitamin D mein kya farq hai?', answer: 'Dono fat-soluble vitamins hain aur ek saath absorb hote hain, lekin kaam alag hain. Vitamin D mainly bones aur immunity ke liye hai (aur skin sunlight se banati hai). Vitamin A mainly aankhon, skin aur mucous membranes ke liye hai (diet se milta hai — sunlight se nahi). Dono ki kami alag-alag hoti hai — ek ki kami doosre se theek nahi hoti. India mein dono ki kami common hai — alag alag check karate rahein.' },
    { _key: 'f20', question: 'Vitamin A homeopathy medicine kaun si hai?', answer: 'Homeopathy mein Vitamin A deficiency ke related symptoms ke liye commonly Euphrasia (dry eyes, irritation), Calcarea Carbonica (poor absorption, weak immunity), aur Natrum Muriaticum (dry skin, hair issues) use hoti hain. Ye symptoms pe based hoti hain — sirf ek diagnosis se nahi. Qualified homoeopath se consult karein potency aur dose ke liye. Severe deficiency mein homeopathy ko akela treatment mat samjhein — complementary hai.' },
  ],

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Night Blindness / Rataundhi',         diseaseSlug: 'night-blindness',         isAvailable: false },
    { _key: 'ld2', diseaseName: 'Xerophthalmia / Dry Eyes',            diseaseSlug: 'xerophthalmia',           isAvailable: false },
    { _key: 'ld3', diseaseName: 'Skin Problems / Hyperkeratosis',       diseaseSlug: 'skin-problems',           isAvailable: false },
    { _key: 'ld4', diseaseName: 'Respiratory Infections',               diseaseSlug: 'respiratory-infections',  isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin D', vitaminSlug: 'vitamin-d',  isAvailable: true  },
    { _key: 'rv2', vitaminName: 'Zinc',      vitaminSlug: 'zinc',       isAvailable: true  },
    { _key: 'rv3', vitaminName: 'Vitamin E', vitaminSlug: 'vitamin-e',  isAvailable: true  },
  ],
}

async function seed() {
  console.log('🌱 Seeding Vitamin A...')
  const result = await client.createOrReplace(vitaminA)
  console.log('✅ Vitamin A seeded:', result._id)
}

seed().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})
