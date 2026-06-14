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

const vitaminK = {
  _id: 'vitamin-vitamin-k',
  _type: 'vitamin',
  name: 'Vitamin K',
  hindiName: 'Khoon Rokne Wala Vitamin / Haddi Majboot Karne Wala Vitamin',
  category: 'Vitamin',
  slug: { _type: 'slug', current: 'vitamin-k' },
  metaTitle: 'Vitamin K Ki Kami: Lakshan, Foods aur Homeopathic Ilaj',
  metaDescription: 'Vitamin K ki kami ke lakshan, vegetarian food sources, normal range, supplement forms aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: '',

  quickFacts: {
    indiaPrevalence: 'Indian population mein Vitamin K2 (MK-7) ke levels low milte hain — ek Indian pilot study (PubMed PMC8855304, 2022) mein healthy Indian individuals aur Type 2 diabetes patients dono mein serum MK-7 insufficient range mein paye gaye. India ke staple foods mein K2 practically undetectable tha.',
    commonDeficiencySign: 'Baar baar bruising (nilam padna) aur choti chot pe zyada bleeding — ye Vitamin K ki kami ka sabse pehla sign hai',
    mainFoodSource: 'Palak (Spinach) — pakne ke baad 1 katori mein approx. 445 mcg Vitamin K1 milta hai, jo ek din ki zaroorat se kaafi zyada hai',
    normalRangeQuick: '0.2–3.2 ng/mL (Serum K1) | PT: 11–13 sec (INR 0.8–1.2)',
  },

  whatIsIt: 'Vitamin K ek fat-soluble vitamin hai — yaani ye body mein fat ke saath absorb hota hai. Iska naam German word "Koagulation" se aaya hai — matlab khoon ka jamna (blood clotting). Body mein 2 main forms hain: Vitamin K1 (Phylloquinone) jo hare patte wali sabziyon mein milta hai, aur Vitamin K2 (Menaquinone) jo fermented foods aur kuch animal products mein hota hai. India ke vegetarian diet mein K1 toh mil jaata hai leafy greens se, lekin K2 ki kami zyada common hai — kyunki hamari diet mein fermented foods (jaise natto) nahi hote.',

  bodyFunctions: [
    'Blood Clotting (Khoon Rokna) — Vitamin K liver mein clotting factors (II, VII, IX, X) banane ke liye zaroori hai; bina iske choti chot bhi band nahi hoti',
    'Haddi Majboot Karna — Osteocalcin protein ko activate karta hai jo calcium ko bones mein deposit karta hai; bones strong rehti hain',
    'Arteries ko Safe Rakhna — Matrix Gla Protein (MGP) activate karta hai jo arteries mein calcium deposit hone se rokta hai; heart ke liye important',
    'Calcium Steering — K2 khaas taur pe calcium ko sahi jagah (bones) bhejta hai aur galat jagah (arteries, kidneys) se rokta hai',
    'Wound Healing — Skin injury ke baad natural healing process mein role hota hai',
    'Heart Health — Arterial calcification (arteries ka sakhna) rokne mein help karta hai; research ongoing hai',
    'Kidney Health — Kidney mein calcium deposits (stones) rokne mein role ho sakta hai; kuch studies mein dekha gaya hai',
  ],

  causesOfDeficiency: [
    'Hare patte wali sabziyon ka kam khana — palak, methi, sarson, broccoli India mein easily available hain lekin daily diet mein adequate nahi hoti',
    'Fat absorption ki problem — Vitamin K fat-soluble hai; Crohn\'s disease, celiac disease, chronic diarrhea ya gallbladder surgery ke baad absorption kam ho jaati hai',
    'Long-term antibiotics — gut bacteria destroy ho jaate hain jo Vitamin K2 produce karte hain',
    'Liver disease (fatty liver, cirrhosis) — liver clotting factors ke liye K ko process karta hai; bimaar liver mein ye kaam prabhavit hota hai',
    'Blood thinners (Warfarin/Acitrom) lena — ye medicines Vitamin K ko deliberately block karti hain',
    'Naye paida bacche — unka gut flora develop nahi hota; isliye har newborn ko janm ke waqt Vitamin K ka injection diya jaata hai',
    'Exclusively breastfed babies — breast milk mein Vitamin K relatively kam hoti hai',
    'Zyada processed food khana aur green vegetables avoid karna — urban India mein ye common reason hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Haddiyon ka kamzor hona ya fracture risk badhna — osteocalcin ki kami se bones weak hoti hain',
      'Joint dard — Vitamin K2 calcium metabolism mein help karta hai; kami mein joints affect ho sakti hain',
      'Bachpan mein haddi ka vikas slow hona — bacchon ke liye khaas concern',
    ],
    energyMoodBrain: [
      'Long-term K2 kami se silent symptoms — bone loss aur arterial calcification bina obvious signs ke progress karte hain',
    ],
    skinHairNails: [
      'Baar baar nilam padna (bruising) — thodi si chot pe bhi bada neel pad jaata hai; clotting factors kam ho jaate hain',
      'Skin pe purple/dark spots (Purpura) — small blood vessels se leakage ke kaaran',
      'Mootr (urine) ya pakhana (stool) mein khoon — serious sign hai; turant doctor se milein',
    ],
    other: [
      'Chhoti chot ya injection site pe zyada bleeding — blood band hone mein zyada waqt lagta hai',
      'Masi mein zyada bleeding (heavy periods) — mahilaon mein ye common sign hai; aksar ignore ho jaata hai',
      'Naak se khoon (nosebleed) bina kisi wajah ke — mucosal bleeding ka sign',
      'Newborn mein VKDB (Vitamin K Deficiency Bleeding) — nayi paida bacchon mein khatra zyada hota hai',
      'Long-term antibiotic lene ke baad bleeding tendency — antibiotics gut bacteria khatam kar deti hain jo K2 banate hain',
    ],
  },

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',        normal: '0.2–3.2 ng/mL', deficient: '< 0.2 ng/mL', toxic: 'No UL established (food)', unit: 'ng/mL (K1)' },
    { _key: 'nr2', category: 'Adult Female',       normal: '0.2–3.2 ng/mL', deficient: '< 0.2 ng/mL', toxic: 'No UL established (food)', unit: 'ng/mL (K1)' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)', normal: '0.2–3.2 ng/mL', deficient: '< 0.2 ng/mL', toxic: 'Doctor se confirm karein', unit: 'ng/mL (K1)' },
    { _key: 'nr4', category: 'Pregnancy',          normal: '0.2–3.2 ng/mL', deficient: '< 0.2 ng/mL', toxic: 'K3 avoid karein', unit: 'ng/mL (K1)' },
    { _key: 'nr5', category: 'Elderly (60+)',       normal: '0.2–3.2 ng/mL', deficient: '< 0.2 ng/mL', toxic: 'Fracture risk zyada', unit: 'ng/mL (K1)' },
  ],

  vegSources: [
    { _key: 'v1', food: 'Chaulai (Amaranth Leaves)',        quantity: '100g raw',          amount: '~1140 mcg K1 (950% DV)' },
    { _key: 'v2', food: 'Palak (Spinach) — pakki',          quantity: '1 katori (90g)',    amount: '~445 mcg K1 (370% DV)' },
    { _key: 'v3', food: 'Methi (Fenugreek Leaves)',         quantity: '100g',              amount: '~400 mcg K1 (333% DV)' },
    { _key: 'v4', food: 'Sarson ka Saag (Mustard Greens)',  quantity: '1 katori (80g)',    amount: '~400+ mcg K1' },
    { _key: 'v5', food: 'Broccoli — pakki',                quantity: '1 katori (156g)',   amount: '~220 mcg K1 (183% DV)' },
    { _key: 'v6', food: 'Patta Gobhi (Cabbage)',            quantity: '1 katori (150g)',   amount: '~164 mcg K1 (137% DV)' },
    { _key: 'v7', food: 'Dhania (Coriander Leaves)',        quantity: '2 tbsp',            amount: '~50 mcg K1' },
    { _key: 'v8', food: 'Pudina (Mint Leaves) fresh',      quantity: '2 tbsp',            amount: '~40 mcg K1' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Murgi ka Liver',  quantity: '100g',  amount: '~13 mcg K2 (MK-4)' },
    { _key: 'nv2', food: 'Anda (Egg Yolk)', quantity: '2 ande', amount: '~5 mcg K2 (MK-4)' },
    { _key: 'nv3', food: 'Paneer/Cheese',   quantity: '100g',  amount: '~2–10 mcg K2 (varies)' },
  ],

  sunlightNote: 'Roz 1 katori palak ki sabzi ya methi saag ghee ke saath khaaye — din bhar ki Vitamin K1 ki zaroorat aaram se puri ho jaati hai. Vitamin K fat-soluble hai — isliye ghee ya oil ke saath pakna absorption badhata hai. K2 ke liye Indian diet mein sources practically nahi hain (natto available nahi) — isliye K2 ke liye MK-7 supplement doctor ki salaah se consider kar sakte hain. Desi ghee mein thodi matra mein K2 hoti hai.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–6 months',      male: '2',   female: '2',   pregnancy: null, breastfeeding: null, unit: 'mcg/day (AI)' },
    { _key: 'd2', ageGroup: '7–12 months',     male: '2.5', female: '2.5', pregnancy: null, breastfeeding: null, unit: 'mcg/day (AI)' },
    { _key: 'd3', ageGroup: '1–3 saal',        male: '30',  female: '30',  pregnancy: null, breastfeeding: null, unit: 'mcg/day' },
    { _key: 'd4', ageGroup: '4–8 saal',        male: '55',  female: '55',  pregnancy: null, breastfeeding: null, unit: 'mcg/day' },
    { _key: 'd5', ageGroup: '9–13 saal',       male: '60',  female: '60',  pregnancy: null, breastfeeding: null, unit: 'mcg/day' },
    { _key: 'd6', ageGroup: '14–18 saal',      male: '75',  female: '75',  pregnancy: '75', breastfeeding: '75', unit: 'mcg/day' },
    { _key: 'd7', ageGroup: 'Adults (19+)',    male: '120', female: '90',  pregnancy: '90', breastfeeding: '90', unit: 'mcg/day (NIH AI)' },
  ],

  pregnancyInfo: {
    applicable: true,
    note: 'Pregnancy mein Vitamin K1 (natural form) generally safe maana jaata hai. Daily requirement: 90 mcg/day (AI). Newborn ke liye critical — VKDB (Vitamin K Deficiency Bleeding) ka serious risk hota hai nayi janma bacchon mein, brain mein bhi bleeding ho sakti hai. India mein protocol: har nawajanmit bacche ko Vitamin K ka injection (0.5–1 mg IM) birth ke waqt diya jaata hai. Vitamin K3 (Menadione — synthetic) pregnancy mein AVOID karo — newborn mein jaundice ka risk. High-dose supplementation sirf doctor ki salaah se.',
    whenDoctor: 'Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein — aur apne gynecologist ko zaroor batayein agar aap blood thinners pe hain.',
  },

  childrenInfo: 'Bacchon mein Vitamin K kami ke specific signs: Naye paida bacche mein bina obvious wajah ke khoon aana — naak se, naaf se, ya skin pe (VKDB sign), haddi ka slow development, exclusively breastfed babies mein risk zyada. Daily requirement: 0–6 months: 2 mcg | 7–12 months: 2.5 mcg | 1–3 saal: 30 mcg | 4–8 saal: 55 mcg. Foods: Bacchon ko daily diet mein palak, methi, gobhi, broccoli ghee ke saath pakaayen. Palak dal, methi paratha, palak paneer simple dishes hain. Naye paida bacche ko hospital mein Vitamin K injection mandatory hai — agar nahi diya gaya to apne pediatrician se poochhe.',

  labTestInfo: {
    testName: 'Prothrombin Time (PT) / INR Test (preferred) | Serum Vitamin K1 (direct, rare)',
    testSlug: 'vitamin-k-test',
    normalRange: 'PT: 11–13 seconds (INR: 0.8–1.2). Serum K1: 0.2–3.2 ng/mL. Clinically PT/INR test zyada use hota hai — affordable aur common. Direct serum K test rarely done hai India mein.',
    whenToTest: 'Baar baar neel padna ya unusual bleeding. Blood thinner (warfarin) monitor karne ke liye — regular PT/INR zaroori. Liver disease ke patients mein. Long-term antibiotic course ke baad.',
    repeatAfter: 'Deficiency mein supplement shuru karne ke 4–6 hafte baad PT/INR repeat karein. Warfarin pe ho to doctor ke schedule ke hisab se regular monitoring.',
    priceRange: 'PT/INR test: ₹150–₹400 (har bade lab mein available). Direct Serum Vitamin K1 test: ~₹10,000–₹31,600 (Dr. Lal PathLabs) — rarely needed clinically. PT test se zyada kaam chalega.',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Vitamin K1 (Phylloquinone)',
      benefits: ['Blood clotting ke liye sabse effective', 'Widely studied', 'Most affordable form'],
      drawbacks: ['Bones aur arteries tak zyada nahi pahunchta', 'Extra-hepatic tissues pe limited action'],
      bestFor: 'Bleeding tendency correct karne ke liye, surgery se pehle deficiency treat karne ke liye',
    },
    {
      _key: 'sf2',
      formName: 'Vitamin K2 — MK-4 (Menaquinone-4)',
      benefits: ['Bones aur blood vessels dono ke liye', 'Animal sources se milta hai (eggs, dairy)', 'Fast absorption'],
      drawbacks: ['Body mein sirf 6-8 ghante rehta hai — short half-life', 'Din mein 2-3 baar lena pad sakta hai high dose ke liye'],
      bestFor: 'Short-term clinical use; osteoporosis treatment protocols mein (high dose)',
    },
    {
      _key: 'sf3',
      formName: 'Vitamin K2 — MK-7 (Menaquinone-7)',
      benefits: ['Sabse zyada bioavailable form for bones aur arteries', '72 ghante tak blood mein rehta hai', 'Once daily sufficient', 'Natural source (fermented soy)'],
      drawbacks: ['Warfarin pe ho to MK-7 bhi interact kar sakta hai', 'Kuch logon mein blood thinning pe sensitivity'],
      bestFor: 'Bone health (osteoporosis prevention), arterial health, long-term daily supplementation — Indian population ke liye MK-7 specially recommended (Indian pilot study PMC8855304)',
    },
    {
      _key: 'sf4',
      formName: 'Vitamin D3 + K2 Combination (Most Popular in India)',
      benefits: ['D3 calcium absorb karta hai, K2 us calcium ko bones mein direct karta hai', 'Dono saath lene se zyada fayda', 'India mein yahi combination zyada recommend hota hai'],
      drawbacks: ['Blood thinners pe ho — doctor se poochhe bina mat lo'],
      bestFor: 'Bone health ke liye most practical option; India mein commonly prescribed combination',
    },
  ],

  supplementTiming: {
    bestTime: 'Khane ke saath — Vitamin K fat-soluble hai, isliye fat wala khana (ghee, oil, nuts) saath hona absorption ke liye zaroori hai. Subah nashta ya lunch ke saath best hai.',
    withFood: 'HAMESHA khane ke saath — khali pet bilkul nahi, absorption bahut kam hogi. Jab bhi Vitamin K supplement lo — thoda ghee ya olive oil wala khana saath rakho.',
    note: 'Sabzi mein ghee ka tadka lagaao — ye natural way hai K1 absorption badhane ka. Cooking mein Vitamin K stable rehta hai — high heat se nahi toota, isliye pakki sabzi bhi kaam karti hai.',
    avoid: 'Warfarin (Acitrom) ke saath — Vitamin K warfarin ka kaam block karta hai; doctor se pooche bina supplement mat shuru karo. Blood thinners (Eliquis/Apixaban, Xarelto/Rivaroxaban, Clopidogrel/Plavix) — interaction ho sakta hai, caution zaroori. High-dose Vitamin E ke saath — Vitamin E high dose mein K absorption aur clotting ko affect kar sakta hai.',
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Warfarin (Coumadin / Acitrom)', reason: 'Vitamin K warfarin ka directly antagonist hai; supplement ya sudden diet change se INR badal jaata hai — serious risk. Regular PT/INR monitoring zaroori. Consistent diet maintain karo — sudden change mat karo. (Source: NIH ODS, Mayo Clinic)' },
    { _key: 'di2', medicineName: 'Antibiotics (long-term use)', reason: 'Antibiotics gut bacteria khatam karti hain jo K2 produce karte hain — indirect deficiency ho sakti hai. Antibiotics course khatam hone ke baad probiotics aur green vegetables zyada khana faydemand' },
    { _key: 'di3', medicineName: 'Orlistat (Weight loss drug)', reason: 'Fat absorption reduce karta hai — fat-soluble vitamins (including K) ki absorption kam ho jaati hai' },
    { _key: 'di4', medicineName: 'Cholestyramine / Colestipol (Cholesterol ki dawaiyan)', reason: 'Bile acid ko bind karte hain jisse fat-soluble vitamins ka absorption significantly reduce ho jaata hai' },
    { _key: 'di5', medicineName: 'Aspirin (high dose)', reason: 'Bleeding risk already badhata hai; Vitamin K supplements unexpectedly INR change kar sakte hain — doctor se discuss karein' },
  ],

  combinations: {
    beneficial: [
      { _key: 'b1', nutrient: 'Vitamin D3', reason: 'D3 calcium intestine se absorb karta hai, K2 us calcium ko bones mein properly direct karta hai — dono mil ke bones ko double benefit dete hain. India mein D3 ki kami aur K2 ki kami dono common hain — ye combination sabse commonly recommended hai' },
      { _key: 'b2', nutrient: 'Calcium', reason: 'K2 calcium ko bones mein deposit karne mein help karta hai — calcium supplement tabhi poora fayda karta hai jab K2 saath ho' },
      { _key: 'b3', nutrient: 'Magnesium', reason: 'Magnesium Vitamin D activate karta hai jo phir K ke saath mil ke bone metabolism improve karta hai' },
    ],
    avoid: [
      { _key: 'a1', nutrient: 'Warfarin / Blood Thinners', reason: 'Vitamin K warfarin ko directly oppose karta hai — combination sirf doctor ki supervision mein' },
      { _key: 'a2', nutrient: 'High-dose Vitamin E', reason: 'Vitamin E high dose mein Vitamin K absorption aur clotting ko affect kar sakta hai' },
    ],
    timingGuide: 'Subah khane ke saath lo: Vitamin K2 (MK-7) + Vitamin D3 + Calcium — fat wale naste ke saath (ghee toast, anda, nuts). Raat lo: Magnesium (raat ko better absorb hota hai). Gap rakhein: Warfarin se minimum consultation zaroor — khud adjust mat karo.',
  },

  toxicity: {
    upperLimit: 'NIH ne Vitamin K ke liye officially UL (Tolerable Upper Intake Level) establish NAHI kiya hai — kyunki food form se toxicity practically nahi hoti. Synthetic form (Vitamin K3 — Menadione) toxic ho sakta hai — ye avoid karo.',
    sideEffects: [
      'Warfarin pe ho to zyada K lene se blood abnormally thick ho sakta hai — clots ka risk',
      'Pregnant mahilaon mein K3 (Menadione) se newborn mein jaundice ka risk — K3 avoid karo',
      'Kuch logon mein nausea ya loose stools zyada dose pe',
    ],
    whenSerious: 'EMERGENCY SIGNS — TURANT DOCTOR KE PAAS JAAO: Newborn ya young child mein severe headache + vomiting (VKDB ho sakta hai). Skin pe sudden dark purple patches bade area mein. Internal bleeding ke signs (tar jaisi black stool, blood in urine) agar blood thinner pe ho. Newborn mein naaf (umbilicus) se ya naak se zyada bleeding. Agar blood thinner pe ho aur bina doctor ke K supplement shuru karo — INR seriously disturb ho sakta hai.',
  },

  timeline: {
    bloodLevelTime: 'Oral supplement ya diet improvement ke 24–48 ghante ke andar PT/INR mein fark dikhne lagta hai. Serum levels 1–2 hafte mein normalize ho sakte hain.',
    symptomsTime: 'Bleeding tendency mein fark: 1–2 hafte mein. Bone health pe fark: Months se saalon tak — bone metabolism slow process hai. Arterial health: Long-term (3–6 months) supplementation ke baad gradual improvement.',
    fullRecoveryTime: 'Bleeding disorders: 2–4 hafte (oral supplement se; injection se tezi se). Osteoporosis risk reduction: 6–12 months regular K2 supplementation ke baad studies mein improvement dekha gaya.',
    repeatTestTime: 'PT/INR: 4–6 hafte baad. Warfarin pe ho to doctor ke schedule ke hisab se (usually monthly).',
    patientNote: 'Ek hafte mein dramatic fark nahi dikhega — patience zaroori hai. Bones ke liye toh mahine lagte hain. Regular diet improvement + supplement (doctor ki salaah se) dono saath rakhein.',
  },

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Phosphorus',
      patientType: 'Jinhe baar baar choti chot pe unusual bleeding ho, easily bruise ho jaaye, aur weakness-thakan zyada ho',
      howItHelps: 'Phosphorus ka mukhya upayog un cases mein hota hai jahan blood vessels fragile hoon aur coagulation ki tendency kam ho — bleeding disorders ke liye commonly indicated medicine hai homeopathic literature mein',
    },
    {
      _key: 'h2',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Jinhe bones weak hoon, slow healing ho, aur motape ke saath fatigue ho — khaas kar bacchon mein slow bone development',
      howItHelps: 'Calcium metabolism aur bone strength support mein role karta hai — Vitamin K2 deficiency mein bone-related symptoms ke liye useful; mineral absorption improve karne mein constitutional remedy ke roop mein indicated',
    },
    {
      _key: 'h3',
      medicineName: 'Crotalus Horridus',
      patientType: 'Jin cases mein dark blood, oozing bleeding tendency ho aur skin pe dark spots ho',
      howItHelps: 'Severe bleeding tendency aur blood disorders ke cases mein homeopathic literature mein indicated hai — especially skin haemorrhages aur dark oozing blood ke symptoms mein',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Vitamin K sirf blood clotting ke liye hai — bones se koi connection nahi',
      truth: 'Vitamin K — khaas kar K2 — haddi ke liye utna hi zaroori hai jitna Calcium aur D3. Osteocalcin protein K2 ke bina activate nahi hota, isliye bones mein calcium nahi jata. Research mein K2 supplementation se fracture risk kam hone ke evidence hain.',
    },
    {
      _key: 'm2',
      myth: 'India mein Vitamin K ki kami hoti hi nahi — yahan toh sabzi bahut khaate hain',
      truth: 'Hare patte wali sabziyon se Vitamin K1 zaroor milta hai — lekin Vitamin K2 (MK-7) ki kami Indian population mein real concern hai. 2022 ki ek Indian pilot study (PubMed PMC8855304) mein healthy Indians aur diabetic Indians dono mein K2 levels insufficient milaye. India ke staple foods mein K2 practically undetectable tha.',
    },
    {
      _key: 'm3',
      myth: 'Vitamin K toxic hota hai — zyada mat khaao',
      truth: 'Vitamin K food sources se practically non-toxic hai — NIH ne upper limit (UL) establish hi nahi kiya kyunki natural food se overdose nahi hota. Sirf synthetic K3 (Menadione) khaas groups mein concern hai. Green sabziyon se aap safely bharpur kha sakte hain.',
    },
    {
      _key: 'm4',
      myth: 'Warfarin pe ho toh Vitamin K rich foods bilkul band kar do',
      truth: 'Warfarin pe hain toh Vitamin K rich foods COMPLETELY band karna galat hai — sahi advice hai consistent intake maintain karo. Sudden zyada ya achanak bahut kam karna INR unstable karta hai. Mayo Clinic ke mutabiq: "steady amount of vitamin K in diet zaroori hai, sudden change nahi." Apne doctor se diet ka hisab poochhe.',
    },
    {
      _key: 'm5',
      myth: 'Vitamin K supplement sirf old age mein chahiye',
      truth: 'Young adults — khaas kar jo green vegetables kam khaate hain, jo long-term antibiotics le rahe hain, ya jinka absorption issue hai — unhe bhi K2 ki zaroorat ho sakti hai. Bones 30 saal ki age ke baad decay shuru hoti hain — isliye young age se K2 ka dhyan rakhna samajhdari hai.',
    },
  ],

  faqs: [
    { _key: 'f1',  question: 'Vitamin K ki kami ke lakshan kya hain?', answer: 'Vitamin K ki kami ka sabse common sign hai baar baar neel padna (bruising) aur choti chot pe bhi zyada bleeding aana. Naak se khoon aana, mahilaon mein periods mein zyada bleeding, skin pe purple/dark spots — ye sab signs hain. Andar ki bleeding ke signs serious hain: black tarry stool ya urine mein khoon. Bones pe bhi asar hota hai — haddi kamzor hoti hai kyunki osteocalcin activate nahi hota. Agar ye symptoms dikhe — doctor se milna zaroori hai.' },
    { _key: 'f2',  question: 'Vitamin K ki kami se kaunsi bimari hoti hai?', answer: 'Vitamin K ki kami se mukhyatah 3 problems hoti hain: (1) Bleeding disorders — khoon band nahi hota thik se, (2) Osteoporosis — haddiyan kamzor ho jaati hain aur fracture risk badh jaata hai, aur (3) Arterial calcification — K2 ki kami mein arteries mein calcium deposits ho sakte hain jo heart disease ka risk badhate hain. Naye paida bacchon mein VKDB (Vitamin K Deficiency Bleeding) ek dangerous condition hai jisme brain mein bhi bleeding ho sakti hai.' },
    { _key: 'f3',  question: 'Vitamin K kisme paya jata hai — vegetarian foods?', answer: 'Vegetarians ke liye sabse acha source hai Palak (Spinach) — 1 katori pakke palak mein din bhar ki zaroorat se kaafi zyada Vitamin K1 milta hai (~445 mcg). Uske baad Methi ke patte (~400 mcg/100g), Chaulai/Amaranth (~1140 mcg/100g raw), Sarson ka Saag, Broccoli, aur Patta Gobhi. Ek tip: in sabziyon ko ghee ya oil ke saath pakaye — Vitamin K fat-soluble hai, fat ke saath absorption zyada hoti hai.' },
    { _key: 'f4',  question: 'Vitamin K ki kami ko kaise pura karein?', answer: 'Pehla step hai diet mein daily green leafy vegetables shuru karna — palak, methi, sarson, chaulai ghee ke tadke ke saath. Agar kami severe ho ya absorption issue ho, to doctor-prescribed supplement zaroori hai — usually K2 (MK-7) ya D3+K2 combination India mein suggest hota hai. Antibiotic course ke baad gut health ke liye probiotics bhi helpful hain. Diagnose pehle karein — PT test ya doctor ki advice se — phir supplement shuru karein.' },
    { _key: 'f5',  question: 'Vitamin K ka test kaise hota hai aur price kya hai?', answer: 'India mein Vitamin K status check karne ka practical aur affordable test hai Prothrombin Time (PT) / INR test — price: ₹150–₹400, har bade lab mein available. Direct Serum Vitamin K1 test bhi hota hai lekin bahut expensive hai (Dr. Lal PathLabs mein ~₹31,600) aur routinely nahi kiya jaata. PT test se hi clinical picture milti hai — prolonged PT aur K supplement se correction deficiency confirm karta hai.' },
    { _key: 'f6',  question: 'Vitamin K2 kya hota hai, K1 se kya fark hai?', answer: 'Vitamin K1 (Phylloquinone) green leafy vegetables mein milta hai aur mainly liver mein blood clotting factors banata hai. Vitamin K2 (Menaquinone) fermented foods aur animal products mein hota hai — iska kaam zyada broad hai: calcium ko bones mein direct karna aur arteries se door rakhna. India mein K1 diet se usually milti hai, lekin K2 ki kami zyada concern hai kyunki Indian diet mein fermented foods (natto jaisi) practically nahi hote. K2 mein bhi MK-7 form sabse better hai — zyada absorption aur body mein 72 ghante rehta hai.' },
    { _key: 'f7',  question: 'Vitamin K aur Warfarin saath mein le sakte hain?', answer: 'Nahi — Vitamin K aur Warfarin (Acitrom) direct opposite kaam karte hain. Warfarin blood ko patlaa karta hai — Vitamin K use block karta hai. Agar aap warfarin pe hain aur suddenly zyada Vitamin K khaana shuru karo ya supplement lo — aapka INR unstable ho jaayega. Lekin green sabziyan completely band karna bhi galat hai — consistent intake maintain karni chahiye. Jo bhi badalav karo — pehle apne doctor ko batao aur PT/INR regularly check karwaate raho.' },
    { _key: 'f8',  question: 'Vitamin K2 kab aur kaise khaye — best time kya hai?', answer: 'Vitamin K2 (MK-7) supplement khane ke saath lo — khaas kar us khane ke saath jisme thoda fat ho (ghee wali roti, anda, nuts). Subah ka nashta ya lunch ke saath best hai. Khali pet bilkul mat lo — absorption practically nil hogi. Agar D3+K2 combination supplement le rahe ho — same rule: fat wale khane ke saath subah lo.' },
    { _key: 'f9',  question: 'Pregnancy mein Vitamin K safe hai kya?', answer: 'Vitamin K1 (natural form) pregnancy mein safe hai — aur zaroori bhi hai taaki nayi janma bachche mein VKDB ka risk na ho. Diet se (palak, methi) sufficient matra milti hai zyaatar mahilaon ko. Vitamin K3 (Menadione — synthetic form) pregnancy mein AVOID karo. Koi bhi supplement pregnancy mein lene se pehle apna doctor zaroor consult karein — aur hospital mein delivery par newborn ko Vitamin K injection dene ka protocol follow zaroor ho.' },
    { _key: 'f10', question: 'Vitamin K ki kami naye paida bacche mein kyun hoti hai?', answer: 'Naye paida bacche (newborns) mein Vitamin K ki kami 3 reasons se hoti hai: (1) Unka gut flora develop nahi hota jo K2 produce karta hai, (2) Breast milk mein Vitamin K relatively kam hoti hai, (3) Liver mein stores kam hote hain. Isliye VKDB (Vitamin K Deficiency Bleeding) neonatal period mein serious risk hai — India aur globally har nawajanmit bacche ko Vitamin K ka injection birth ke waqt diya jaata hai. Agar aapke hospital ne nahi diya — apne pediatrician se poochhe.' },
    { _key: 'f11', question: 'Vitamin K2 se bone density improve hoti hai kya?', answer: 'Kuch clinical studies mein Vitamin K2 supplementation se osteocalcin activation aur bone density improvement ka connection dekha gaya hai — khaas kar postmenopausal mahilaon mein. K2 (MK-7) ka use Calcium aur D3 ke saath combined bone health protocols mein hota hai. Lekin ye ek long-term process hai — mahine nahi, saal lage sakte hain improvement mein. Abhi research ongoing hai — kyunki alone K2 bone density treatment nahi, ek supporting factor hai.' },
    { _key: 'f12', question: 'Vitamin K se hair growth hota hai kya?', answer: 'Directly nahi. Vitamin K ke hair growth pe koi direct proven clinical evidence nahi hai filhaal. Kuch resources claim karte hain ki scalp blood circulation pe K ka role ho sakta hai — lekin ye well-established nahi hai. Hair loss ke liye Iron, Biotin, Zinc, aur Vitamin D ke deficiency zyada studied aur proven factors hain. Agar hair fall hai — in deficiencies pehle check karwayein.' },
    { _key: 'f13', question: 'Vitamin K skin ke liye kaise faydemand hai?', answer: 'Vitamin K skin healing mein role karta hai — khaas kar bruising, dark circles (aankhon ke neeche kaale dhabbe), aur post-procedure skin recovery mein topical Vitamin K use hota hai. Internally bhi K1 wound healing mein help karta hai — kyunki blood clotting proper hogi toh skin injuries fast heal hongi. Rosacea aur skin redness mein bhi kuch studies mein K ka role dekha gaya hai.' },
    { _key: 'f14', question: 'Vitamin K ki kami mein kya khana chahiye?', answer: 'Roz ka khana: Palak ki sabzi ya dal (ghee ka tadka), methi paratha, sarson ka saag, patte wali coriander-mint garnish. Hare patte wali sabziyan fat ke saath khaana zaroori hai — K fat-soluble hai. Broccoli, patta gobhi bhi add karein. Non-veg ho toh liver kabhi kabhi faydemand. K2 ke liye MK-7 supplement doctor ki salaah se sahi option ban sakta hai — Indian diet mein K2 sources practically nahi hain.' },
    { _key: 'f15', question: 'Vitamin K overdose ke side effects kya hain?', answer: 'Food se Vitamin K overdose practically hota hi nahi — NIH ne koi upper limit (UL) establish nahi kiya kyunki natural toxicity nahi dekhi gayi. Supplement form se bhi K1 aur K2-MK7 generally safe hain. Risk sirf tab hota hai jab: (1) Aap warfarin pe ho aur achanak zyada K lo — INR disturb ho sakta hai, (2) Synthetic K3 (Menadione) form use karo — ye toxic ho sakta hai kuch groups mein. Doctor ki salah ke bina high dose supplement kabhi mat lo.' },
    { _key: 'f16', question: 'Vitamin K aur Vitamin D3 saath mein le sakte hain?', answer: 'Haan — aur ye actually recommended hai! D3+K2 combination bone health ke liye ek ideal pairing hai. Vitamin D3 calcium intestine se absorb karta hai, Vitamin K2 us calcium ko bones mein properly bhejta hai aur arteries mein calcium deposit hone se rokta hai. India mein D3 ki kami aur K2 ki kami dono common hain — isliye D3+K2 combination supplement doctor-reviewed formula hai jo commonly prescribe hota hai.' },
    { _key: 'f17', question: 'Vitamin K test normal range kya hota hai?', answer: 'Serum Phylloquinone (K1): Normal range approximately 0.2–3.2 ng/mL. Lekin India mein direct K test rare hai. Zyada practically: Prothrombin Time (PT): Normal 11–13 seconds, INR: 0.8–1.2. Agar PT prolonged ho aur Vitamin K injection se correct ho — ye deficiency confirm karta hai. Indian labs mein PT/INR test ₹150–₹400 mein available hai.' },
    { _key: 'f18', question: 'Vitamin K ki kami se anemia hota hai kya?', answer: 'Direct anemia nahi hota — lekin bleeding ki wajah se indirect anemia zaroor ho sakta hai. Agar Vitamin K ki kami se internal bleeding hoti rahe (heavy periods, gut bleeding) — toh blood loss se Iron Deficiency Anemia develop ho sakti hai. Isliye baar baar heavy periods ya unexplained anemia mein Vitamin K status bhi check karwana samjhadari hai — sirf iron check karna kaafi nahi hota.' },
    { _key: 'f19', question: 'Kya sirf diet se Vitamin K ki zaroorat puri ho sakti hai?', answer: 'K1 ke liye — haan, bilkul. Roz 1 katori pakli palak ya methi khao — din bhar ki zaroorat puri ho jaati hai. K2 ke liye — thoda mushkil hai Indian diet mein, kyunki K2 ke main sources (natto, fermented cheese) India mein commonly khaye nahi jaate. Agar K2 chahiye bone/artery health ke liye — to doctor ki salaah se MK-7 supplement consider karna practical option hai.' },
    { _key: 'f20', question: 'Vitamin K ki kami kitne time mein theek hoti hai?', answer: 'Bleeding tendency mein fark sirf 24-48 ghante mein dikhna shuru ho sakta hai supplement ya injection se — PT/INR improve hota hai. Symptoms (bruising, bleeding) mein fark 1-2 hafte mein. Bones ke liye K2 ka fark months se saalon mein hota hai — ye slow process hai, patience rakhna zaroori hai. Diagnosis ke 4-6 hafte baad PT test repeat karwayein status check karne ke liye.' },
  ],

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Hemorrhagic Disease of Newborn (VKDB)', diseaseSlug: 'hemorrhagic-disease-newborn', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Osteoporosis',                           diseaseSlug: 'osteoporosis',             isAvailable: false },
    { _key: 'ld3', diseaseName: 'Arterial Calcification / Heart Disease', diseaseSlug: 'cardiovascular-disease',   isAvailable: false },
    { _key: 'ld4', diseaseName: 'Bleeding Disorders / Coagulopathy',      diseaseSlug: 'bleeding-disorders',       isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin D', vitaminSlug: 'vitamin-d',  isAvailable: true  },
    { _key: 'rv2', vitaminName: 'Calcium',   vitaminSlug: 'calcium',    isAvailable: true  },
    { _key: 'rv3', vitaminName: 'Vitamin C', vitaminSlug: 'vitamin-c',  isAvailable: false },
  ],
}

async function seed() {
  console.log('🌱 Seeding Vitamin K...')
  const result = await client.createOrReplace(vitaminK)
  console.log('✅ Vitamin K seeded:', result._id)
}

seed().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})
