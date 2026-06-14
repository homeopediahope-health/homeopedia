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

const omega3 = {
  _id: 'vitamin-omega-3',
  _type: 'vitamin',
  name: 'Omega-3',
  hindiName: 'Dimag aur Dil Wala Fat',
  category: 'Supplement',
  slug: { _type: 'slug', current: 'omega-3' },
  metaTitle: 'Omega-3 Ki Kami: Lakshan, Veg Sources & Homeopathic Ilaj',
  metaDescription: 'Omega-3 ki kami ke lakshan, vegetarian food sources, normal range aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: 'Meri practice mein jo vegetarian patients baalo ke jhadne aur dry skin ke saath aate hain — unhe zyada tar Vitamin D aur Omega-3 dono low milte hain. Ground alsi aur akhrot daily suggest karne ke 2-3 mahine mein noticeable fark aata hai — koi fancy supplement zaroor nahi.',

  quickFacts: {
    indiaPrevalence: 'India mein vegetarian aabadi ka bada hissa EPA aur DHA ki kami se grast hai — plant ALA to EPA/DHA conversion sirf 5-10% hoti hai; omega-6:omega-3 ratio 20:1 tak pahunch jaata hai jab ideal 4:1 hai',
    commonDeficiencySign: 'Baalon ka jhadna aur dry, flaky skin jo moisturiser se theek nahi hoti — ye sabse pehle nazar aata hai omega-3 kami mein',
    mainFoodSource: 'Alsi ke beej (Flaxseed) — 1 chammach ground mein ~1.6g ALA. Akhrot (4-5 giri) mein ~2.6g ALA. Vegetarians ke liye algae oil direct EPA+DHA ka best source',
    normalRangeQuick: 'Omega-3 Index ≥8% = Optimal | 4–8% = Intermediate | <4% = Low/At Risk',
  },

  whatIsIt: 'Omega-3 ek essential fatty acid (zaroori fat) hai — matlab body khud nahi bana sakti, sirf khane se milti hai. Teen main types hote hain: ALA (plants mein milta hai), EPA aur DHA (fatty fish ya algae mein). Ye brain, heart, aankhon, aur jo inflammation control karta hai — uske liye sabse zaroori fats hain. India mein vegetarian log sirf ALA kha paate hain, lekin body mein EPA/DHA conversion bohot kam (sirf 5-10%) hoti hai — isliye deficiency ka risk zyada hai. Roz ground alsi + akhrot + algae oil se ye gap fill kiya ja sakta hai.',

  bodyFunctions: [
    'Dimag ka structure — DHA brain cells ka 40% se zyada banati hai; sochne, yaad rakhne aur mood ke liye seedha zaroori hai',
    'Dil ki hifazat — EPA aur DHA triglycerides kam karte hain aur blood pressure thoda kam karne mein madad karte hain; arterial inflammation reduce hoti hai',
    'Inflammation control — Body ke natural "anti-swelling" system ko activate karte hain; isliye joint pain aur arthritis mein kaam aata hai',
    'Aankhein — DHA retina ka major component hai; raat ko dekhne aur umar ke saath aankhon ki sehat ke liye zaroori',
    'Bacho ka brain development — Pregnancy aur breastfeeding mein DHA bacha ke dimag aur nervous system banane ke liye must hai; last trimester mein especially critical',
    'Skin barrier — Cell membrane ko flexible aur hydrated rakhta hai; dry skin aur eczema se bachata hai',
    'Mood aur mental health — Kuch studies mein EPA depression ke symptoms mein faydemand dikhi hai; research jari hai',
  ],

  causesOfDeficiency: [
    'Pure vegetarian ya vegan diet bina planning ke — Plant ALA to EPA/DHA conversion sirf 5-10% hoti hai; isliye EPA/DHA ki kami common hai vegetarians mein',
    'Processed aur packaged food pe depend rehna — Inn foods mein omega-6 bahut zyada hota hai; omega-6:omega-3 ratio bigad jaata hai (20:1 tak)',
    'Fish bilkul nahi khaana — Fatty fish seedha EPA aur DHA deti hai jo plant sources nahi kar sakte',
    'Sirf refined oils use karna (sarson, sunflower, soybean) — Inme omega-6 zyada, omega-3 kam; ghee ya mustard oil better hain',
    'Malabsorption ya gut issues (IBS, Crohn\'s) — Fat absorption kam hoti hai; omega-3 fat-soluble hai',
    'Diabetes ya insulin resistance — Body mein ALA se EPA/DHA conversion aur bhi kam ho jaati hai',
    'Seed/nut intake ki kami — Alsi, akhrot, chia daily nahi kha rahe; India mein ye gap bahut common hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Joints mein akdan ya dard — Omega-3 ki kami mein body zyada pro-inflammatory signals banati hai jo joints ko damage karti hain',
      'Muscles mein soreness jo jaldi theek na ho — Recovery slower ho jaati hai; omega-3 anti-inflammatory role nahi kar paata',
    ],
    energyMoodBrain: [
      'Yaadaasht ya concentration mein kami — DHA brain cell communication ke liye zaroori hai; kami mein cognitive function affected hoti hai',
      'Mood swings, chipchipapan ya mild depression — EPA ka level girane se brain chemistry affect hoti hai',
      'Thakan aur neend mein dikkat — Cell energy production affect hoti hai; brain ko healthy fat nahi milta',
      'Aankhon ka sukhna (Dry eyes) — Retina DHA ki kami ko jaldi feel karti hai; aankhon mein jalan ya blurriness',
    ],
    skinHairNails: [
      'Dry, flaky, khurduri skin — Cell membrane ka fat kam ho jaata hai toh skin moisture retain nahi kar paati; moisturiser bhi zyada kaam nahi karta',
      'Baalon ka jhadna aur patla hona — Hair follicle ke liye zaroori fat nahi milta; growth slow ho jaati hai',
      'Nails brittle ya peele — Yahi fat nails ke structure mein bhi kaam aata hai; weak nails omega-3 kami ka sign ho sakta hai',
    ],
    other: [
      'Baar baar bimaar padna — Immune cells ke function pe asar; omega-3 immune regulation mein role karta hai',
      'Bacchon mein: Slow development, hyperactivity ya concentration ki dikkat — DHA kami se linked ho sakta hai',
      'Pregnancy mein: Bacha ka brain development delayed ho sakta hai — DHA seedha fetal brain formation mein jaata hai',
    ],
  },

  normalRanges: [
    { _key: 'nr1', category: 'Optimal (Heart protection)', normal: '≥8% Omega-3 Index', deficient: '<4% = Low/At Risk', toxic: 'No formal UL set', unit: '% EPA+DHA in RBC' },
    { _key: 'nr2', category: 'Intermediate',               normal: '4–8% Omega-3 Index', deficient: 'Improve karo',      toxic: '—',              unit: '% EPA+DHA in RBC' },
    { _key: 'nr3', category: 'Low / At Risk',              normal: '—',                  deficient: '<4% — address karo', toxic: '—',             unit: '% EPA+DHA in RBC' },
    { _key: 'nr4', category: 'Adult Male (ALA intake)',    normal: '1.6 g/day',           deficient: '<1.6 g/day',         toxic: '3g/day EPA+DHA FDA GRAS limit', unit: 'g/day ALA' },
    { _key: 'nr5', category: 'Adult Female (ALA intake)',  normal: '1.1 g/day',           deficient: '<1.1 g/day',         toxic: '3g/day EPA+DHA FDA GRAS limit', unit: 'g/day ALA' },
    { _key: 'nr6', category: 'Pregnancy',                  normal: '1.4 g ALA + 200-300 mg DHA/day', deficient: 'DHA <200 mg/day', toxic: '—',    unit: 'g ALA + mg DHA' },
  ],

  vegSources: [
    { _key: 'v1', food: 'Alsi ke Beej (Flaxseed, ground)',  quantity: '1 chammach (~7g)',  amount: '~1.6g ALA' },
    { _key: 'v2', food: 'Akhrot (Walnuts)',                  quantity: '4–5 giri (~28g)',   amount: '~2.6g ALA' },
    { _key: 'v3', food: 'Chia Seeds',                        quantity: '1 chammach (~10g)', amount: '~1.8g ALA' },
    { _key: 'v4', food: 'Sarson ka Tel (Mustard Oil)',       quantity: '1 chammach (~5g)',  amount: '~0.4g ALA' },
    { _key: 'v5', food: 'Soybean Tel (Soyabean Oil)',        quantity: '1 chammach (~5g)',  amount: '~0.35g ALA' },
    { _key: 'v6', food: 'Algae Oil supplement (EPA+DHA)',    quantity: 'Doctor-advised dose', amount: 'Direct EPA+DHA — vegetarians ka best option' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Bangda / Mackerel',   quantity: '100g', amount: '~1.5–2.2g EPA+DHA' },
    { _key: 'nv2', food: 'Salmon',               quantity: '100g', amount: '~1.5–2.0g EPA+DHA' },
    { _key: 'nv3', food: 'Sardinein (Sardines)', quantity: '100g', amount: '~1.0–1.5g EPA+DHA' },
    { _key: 'nv4', food: 'Hilsa (Ilish)',        quantity: '100g', amount: '~0.9–1.3g EPA+DHA' },
    { _key: 'nv5', food: 'Rohu / Katla',         quantity: '100g', amount: '~0.3–0.6g EPA+DHA' },
  ],

  sunlightNote: 'Omega-3 ke liye koi sunlight source nahi hai. Vegetarians ke liye daily routine: Subah 1 chammach ground alsi (dahi ya smoothie mein mila lo) + 4-5 akhrot = din ki ALA zaroorat zyada tar poori ho jaati hai. EPA/DHA ke liye algae oil supplement lo — yahi source hai jahan se fish ko bhi omega-3 milta hai. Omega-6:Omega-3 ratio improve karne ke liye refined oils kam karo; sarson ka tel ya ghee use karo cooking mein.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–12 months',     male: '0.5',  female: '0.5',  pregnancy: null,  breastfeeding: null,  unit: 'g total omega-3/day' },
    { _key: 'd2', ageGroup: '1–3 saal',        male: '0.7',  female: '0.7',  pregnancy: null,  breastfeeding: null,  unit: 'g ALA/day' },
    { _key: 'd3', ageGroup: '4–8 saal',        male: '0.9',  female: '0.9',  pregnancy: null,  breastfeeding: null,  unit: 'g ALA/day' },
    { _key: 'd4', ageGroup: '9–13 saal',       male: '1.2',  female: '1.0',  pregnancy: null,  breastfeeding: null,  unit: 'g ALA/day' },
    { _key: 'd5', ageGroup: '14–18 saal',      male: '1.6',  female: '1.1',  pregnancy: '1.4', breastfeeding: '1.3', unit: 'g ALA/day' },
    { _key: 'd6', ageGroup: 'Adults (19–50)',   male: '1.6',  female: '1.1',  pregnancy: '1.4', breastfeeding: '1.3', unit: 'g ALA/day' },
    { _key: 'd7', ageGroup: '51+ saal',        male: '1.6',  female: '1.1',  pregnancy: null,  breastfeeding: null,  unit: 'g ALA/day' },
  ],

  pregnancyInfo: {
    applicable: true,
    note: 'DHA pregnancy mein SABSE zaroori omega-3 hai — bacha ke brain aur retina seedha DHA se bante hain, especially 3rd trimester mein. 200–300 mg DHA/day specifically recommended hai (WHO / obstetric guidelines). ALA: 1.4g/day. Vegetarian pregnant mahilaaon ke liye algae oil supplement sabse safe aur mercury-free option hai. Kami se: brain aur nervous system development slow, premature birth ka risk, baby ke visual acuity pe asar.',
    whenDoctor: 'Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein — dose aur source dono confirm karna zaroori hai.',
  },

  childrenInfo: 'Bacchon mein omega-3 kami ke signs: Concentration ki dikkat aur poor academic performance, hyperactivity ya ADHD-like behavior (research ongoing — overclaim nahi), baalon ka bahut patla hona, dry rough skin patches. Daily requirement (ALA): 1–3 saal: 0.7g | 4–8 saal: 0.9g | 9–13 saal: 1.0–1.2g/day. Ghar pe: Ground alsi rotis mein mila sakte, akhrot ke 2–3 tukde, fortified eggs. Mild kami mein diet se koshish pehle karni chahiye — doctor se test karo agar concern hai.',

  labTestInfo: {
    testName: 'Omega-3 Index Test (Fatty Acid Profile / RBC EPA+DHA %)',
    testSlug: 'omega-3-test',
    normalRange: 'Omega-3 Index ≥8% = Optimal | 4–8% = Intermediate | <4% = Low/At Risk',
    whenToTest: 'Dry skin + hair loss + mood issues sab ek saath hoon. Doctor ne heart disease ya depression ke liye kaha ho. Vegetarians/vegans jo fish bilkul nahi khaate — routine testing mein fayda.',
    repeatAfter: 'Supplement shuru karne ke 4 mahine baad repeat — RBC ka lifespan 3 mahine hota hai isliye index itne mein update hota hai',
    priceRange: 'MyDiagnostics India: ~₹2,900 (31-parameter fatty acid profile) | Metropolis: ₹2,500–₹5,000',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Fish Oil (Triglyceride form)',
      benefits: ['EPA+DHA dono direct — best bioavailability', 'Well-studied; widely available India mein', 'Affordable option'],
      drawbacks: ['Fish smell/burping — common complaint', 'Quality vary karta hai brands mein', 'Mercury concern cheap brands mein — quality check zaroori'],
      bestFor: 'Non-vegetarians jo basic EPA+DHA chahte hain; commonly recommended',
    },
    {
      _key: 'sf2',
      formName: 'Algae Oil (Algal DHA/EPA)',
      benefits: ['100% vegetarian/vegan — plant-based', 'DHA rich; ocean pollution ya mercury risk nahi', 'Yahi source hai jahan se fish ko bhi omega-3 milta hai'],
      drawbacks: ['Thoda expensive', 'EPA kam hota hai kuch brands mein — label check karo'],
      bestFor: 'Vegetarians, vegans, pregnancy (mercury-free), bacche',
    },
    {
      _key: 'sf3',
      formName: 'Flaxseed Oil / ALA-based supplement',
      benefits: ['Sasta aur easily available', 'Vegan — pure plant source', 'Daily ALA boost ke liye theek'],
      drawbacks: ['Sirf ALA deta hai — body mein EPA/DHA mein conversion sirf 5-10%', 'Serious EPA/DHA kami mein nahi chalega — algae oil ya fish oil chahiye'],
      bestFor: 'Daily ALA maintenance ke liye; algae oil ke saath combination mein',
    },
    {
      _key: 'sf4',
      formName: 'Krill Oil',
      benefits: ['Phospholipid form mein — kuch studies mein better absorption', 'Antioxidant astaxanthin bhi contain karta hai'],
      drawbacks: ['Expensive', 'Vegetarians ke liye nahi', 'India mein less available'],
      bestFor: 'Jo fish oil ka premium alternative dhundh rahe hain',
    },
  ],

  supplementTiming: {
    bestTime: 'Khane ke saath lo jisme thoda fat ho (ghee/oil wala khaana). Khali pet lene se absorption 40–50% kam ho sakti hai — ye sabse important rule hai omega-3 ke liye.',
    withFood: 'Khane ke saath ya turant baad — always with fat-containing meal. Breakfast ke saath agar ghee ya oil wali cheez ho toh best.',
    note: 'Ghee ya coconut oil wale khane ke saath lo — absorption badhti hai. Agar fishy burping ho toh raat ke khaane ke baad ya freeze karke lo — thanda hone pe yeh issue kam hota hai. Ground flaxseed daily smoothie ya dahi mein mila sakte ho.',
    avoid: 'Khali pet bilkul nahi — fat ke bina absorption significantly kam ho jaati hai. Blood thinners (Warfarin, Aspirin) ke saath pehle doctor se poochho. Surgery se 1–2 hafte pehle band kar do — bleeding risk.',
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Warfarin (Coumadin / Acenocoumarol)', reason: 'Omega-3 mein mild blood-thinning property hoti hai; INR badh sakta hai; doctor monitor kare — dose adjustment zaroori ho sakta hai' },
    { _key: 'di2', medicineName: 'Aspirin / Clopidogrel (blood thinners)', reason: 'Dono milake bleeding ka risk thoda badhta hai high doses mein; doctor se discuss karo pehle shuru karne se' },
    { _key: 'di3', medicineName: 'Blood Pressure medicines (Antihypertensives)', reason: 'Omega-3 khud thoda BP kam kar sakta hai; dono saath lene se BP bahut neeche ja sakta hai kuch logon mein — monitor karo' },
    { _key: 'di4', medicineName: 'Immunosuppressants (Cyclosporine)', reason: 'Omega-3 immune signalling affect karta hai; transplant patients pehle doctor se zaroor poochhen — self-medication nahi' },
  ],

  combinations: {
    beneficial: [
      'Vitamin D ke saath — Dono fat-soluble hain; ek saath fat-containing meal ke saath le sakte hain; dono heart aur brain ke liye helpful; India mein dono ki kami common hai',
      'Magnesium ke saath — Inflammation control mein dono milkar kaam karte hain; heart health ke liye combo useful',
      'Vitamin E ke saath — Vitamin E omega-3 ko oxidation se bachata hai; natural antioxidant pairing hai',
    ],
    avoid: [
      'High-dose iron ke saath same time pe — Iron oxidation promote karta hai; omega-3 ke oxidation ka risk badh sakta hai; 2–3 ghante ka gap rakho',
      'Blood thinners ke saath bina doctor ke — Warfarin, Aspirin ke saath pehle physician se confirm karo',
    ],
    timingGuide: 'Breakfast ke saath: Fish oil / Algae oil capsule lo (ghee/oil wala breakfast ho toh absorption best). Raat ko: Vitamin D + Magnesium combo le sakte ho. Iron: Omega-3 se 2–3 ghante gap rakho.',
  },

  toxicity: {
    upperLimit: 'National Academy of Medicine ne formal UL set nahi kiya hai omega-3 ke liye. FDA guidance: 3g/day EPA+DHA tak GRAS (Generally Recognized As Safe) hai. 5g/day se zyada — caution — bleeding time badh sakti hai.',
    sideEffects: [
      'Fishy burp aur bad breath — sabse common complaint; freeze karke lene se ya raat ke khane ke baad lene se kam hota hai',
      'Loose motions / diarrhea — especially high doses mein',
      'Nausea ya pet mein gas — khali pet lene se zyada hota hai',
      'Bleeding time badhna — cuts jaldi band nahi hote; surgery se pehle 1–2 hafte band karna zaroori',
      'Bahut zyada DHA-heavy dose pe: LDL cholesterol thoda badh sakta hai; EPA-dominant supplement choose karo agar cholesterol concern ho',
    ],
    whenSerious: 'Agar blood thinners pe ho aur bleeding nahi ruk rahi — turant doctor ke paas jao. 5g/day se zyada EPA+DHA bina doctor ke mat lo.',
  },

  timeline: {
    bloodLevelTime: 'Blood plasma levels 1–2 hafte mein reflect hone lagte hain; Omega-3 Index (RBC %) 3–4 mahine mein properly update hota hai',
    symptomsTime: 'Dry skin: 4–6 hafte. Joint dard mein relief: 6–12 hafte. Mood aur energy: 8–12 hafte. Hair quality: 3–4 mahine.',
    fullRecoveryTime: 'Mild kami: 3–4 mahine consistent intake se. Severe kami: 4–6 mahine doctor guidance mein.',
    repeatTestTime: '4 mahine baad Omega-3 Index ya Fatty Acid Profile repeat karein',
    patientNote: 'Ek hafte mein magic nahi hoga — patience zaroori hai. Consistent daily intake zyada important hai na ki kabhi zyada, kabhi nahi. Subah ground alsi + akhrot ki routine banana sabse sustainable tarika hai.',
  },

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Motaapa-prone, thaka hua, joints mein dard, poor nutrition absorption, bacchon mein slow development',
      howItHelps: 'Impaired nutrition aur slow metabolism ke patients mein body ki nutrient utilization capacity ko support karne ke liye homeopaths isko consider karte hain; joint complaints aur digestive absorption issues mein classical indication hai',
    },
    {
      _key: 'h2',
      medicineName: 'Natrum Muriaticum',
      patientType: 'Dry skin, hair loss, emotionally withdrawn, depression-like state ke patients',
      howItHelps: 'Dry skin aur hair texture problems wale constitutions mein, saath mein mood-related complaints ho toh ye constitutional choice ho sakti hai; cell fluid balance pe kaam karti hai',
    },
    {
      _key: 'h3',
      medicineName: 'Pulsatilla',
      patientType: 'Fat food se discomfort, hormonal imbalance, mood swings — especially mahilaaon mein',
      howItHelps: 'Jo patients fat-rich foods ko properly digest nahi kar paate aur mood fluctuations hain, unme fat absorption improve karne wali constitution pe kaam karna aim hai; omega-3 supplement absorption ke liye complementary ho sakti hai',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Sirf fish khaane walon ko hi omega-3 ki zaroorat hai',
      truth: 'Vegetarians ko omega-3 ki zaroorat bilkul utni hi hai. Fark ye hai ki unhe EPA aur DHA plant sources se nahi milta seedha — isliye unhe ground alsi, akhrot, chia beej DAILY khaane chahiye aur EPA/DHA ke liye algae oil supplement consider karna chahiye.',
    },
    {
      _key: 'm2',
      myth: 'Alsi ya akhrot khaane se omega-3 poora ho jaata hai',
      truth: 'Alsi aur akhrot mein ALA hota hai — lekin body mein ALA se EPA/DHA mein conversion sirf 5-10% hoti hai. Ye useless nahi hain — ALA bhi zaroori hai — lekin EPA/DHA ki direct zaroorat ke liye algae oil ya fish chahiye.',
    },
    {
      _key: 'm3',
      myth: 'Omega-3 supplement lene se motapa badh jaata hai',
      truth: 'Omega-3 fat hai — lekin ye body mein fat tissue ki tarah store nahi hota. Recommended dose (1–3g/day) mein calorie contribution bahut kam hoti hai. Studies mein omega-3 ne actually inflammation-related weight gain mein help ki hai.',
    },
    {
      _key: 'm4',
      myth: 'Fish oil se blood itna patla ho jaata hai ki dangerous hai',
      truth: 'Normal dietary doses mein omega-3 blood ko clinically dangerous level pe thin nahi karta — ye ek mild effect hai. Lekin agar aap already blood thinners (Warfarin, Aspirin) pe ho toh doctor se zaroor discuss karo — wo dose adjust kar sakte hain.',
    },
    {
      _key: 'm5',
      myth: 'Jo supplement mehenga ho, wo better absorption deta hai',
      truth: 'Price aur absorption ka seedha link nahi hai. Jo important hai wo hai: supplement fat ke saath liya jaaye, aur form TG (triglyceride) ya phospholipid mein ho. Ek reasonable quality brand jo mercury-tested ho — kaafi hai.',
    },
  ],

  faqs: [
    { _key: 'f1',  question: 'Omega-3 ki kami ke lakshan kya hain?', answer: 'Omega-3 ki kami ke sabse common lakshan hain — dry, flaky skin jo moisturiser se theek nahi hoti; baalon ka zyada jhadna aur patla hona; joints mein akdan ya dard; mood swings ya concentration mein dikkat; aur aankhon ka sukhna (dry eyes). Ye symptoms slowly develop hote hain isliye logon ko pata nahi chalta ki karan omega-3 ki kami hai. Agar ye sab ek saath ho raha hai toh test karwana samajhdari hai.' },
    { _key: 'f2',  question: 'Vegetarians ko omega-3 kahan se milega?', answer: 'Vegetarians ke liye sabse important sources hain: ground alsi (flaxseed) roz 1 chammach, 4–5 akhrot, chia seeds — ye sab ALA dete hain. Lekin EPA aur DHA — jo brain aur heart ke liye most active forms hain — vegetarians ko algae oil supplement se lena chahiye kyunki plant sources se conversion bohot kam hoti hai.' },
    { _key: 'f3',  question: 'Omega-3 aur Omega-6 mein kya fark hai?', answer: 'Dono essential fatty acids hain, lekin kaam ulta hai. Omega-6 (sunflower oil, refined oils mein zyada) inflammation promote karta hai. Omega-3 (alsi, akhrot, fish mein) inflammation ko control karta hai. India mein zyada tar log bahut zyada omega-6 aur bahut kam omega-3 khate hain — ratio 20:1 tak pahunch jaata hai jab ideal 4:1 ya 2:1 hai. Isliye omega-3 badhana zaroori hai.' },
    { _key: 'f4',  question: 'Omega-3 ka test kaise hota hai?', answer: 'Omega-3 Index test hota hai jisme red blood cells mein EPA+DHA ka percentage measure hota hai. India mein ye test MyDiagnostics, Metropolis aur kuch pathology centers pe milta hai — approx ₹2,500–₹5,000. Doctor refer kare toh pehle poochho ki kaunsa specific test chahiye — Omega-3 Index ya full Fatty Acid Profile.' },
    { _key: 'f5',  question: 'Omega-3 ki kami kitni common hai India mein?', answer: 'India mein omega-3 ki kami — especially EPA aur DHA ki — bahut common hai. Main karan: India ki badi aabadi pure vegetarian hai aur plant foods se milne wala ALA EPA/DHA mein poorly convert hota hai. Saath mein India ka typical diet omega-6 fat se bhara hua hai (refined oils) jo omega-3 ke effect ko aur kam karta hai.' },
    { _key: 'f6',  question: 'Omega-3 kab khaya jaaye — subah ya raat?', answer: 'Koi strict rule nahi hai — jab aap fat-containing meal khao tab lo. Breakfast ke saath agar ghee ya oil wali cheez ho toh subah le lo, ya lunch ke baad. Khali pet bilkul nahi — fat ke bina absorption significantly kam ho jaati hai. Agar fishy burping ho toh raat ke khaane ke baad ya freeze karke lo — thanda hone pe yeh issue kam hota hai.' },
    { _key: 'f7',  question: 'Omega-3 khane ke baad kitne din mein fark dikhega?', answer: 'Dry skin mein fark 4–6 hafte mein nazar aata hai. Joints mein relief 6–12 hafte mein. Blood test (Omega-3 Index) 4 mahine baad karo — RBC 3 mahine mein replace hoti hain. Ek hafte mein fark expect mat karo — patience zaroori hai.' },
    { _key: 'f8',  question: 'Kya omega-3 se baal tezi se badhte hain?', answer: 'Omega-3 baalon ki growth ko directly speed up nahi karta — lekin kami mein jo hair fall aur patlapan hota hai, wo supplement se theek hota hai. Hair follicles ke liye fatty acids zaroori hain. 4–5 mahine mein difference nazar aata hai — kyunki hair growth cycle itni lambi hoti hai. Diet + supplement dono saath zaroori hain.' },
    { _key: 'f9',  question: 'Pregnancy mein omega-3 lena chahiye?', answer: 'Haan — pregnancy mein DHA especially bahut important hai. Bacha ke brain aur retina seedha maa ke DHA se banate hain specially last trimester mein. 200–300 mg DHA/day recommended hai. Vegetarian pregnant mahilaaon ko algae oil supplement sabse safe option hai. Lekin koi bhi supplement lene se pehle apna doctor zaroor consult karein.' },
    { _key: 'f10', question: 'Omega-3 aur Vitamin D saath le sakte hain?', answer: 'Haan — dono fat-soluble hain aur ek saath fat-containing meal ke saath le sakte hain. In dono ka combination bahut logon ke liye faydemand hota hai kyunki India mein Vitamin D aur omega-3 dono ki kami common hai. Doctor ki guidance mein dono simultaneously shuru karna zyada efficient hai.' },
    { _key: 'f11', question: 'Omega-3 ke side effects kya hain?', answer: 'Zyada tar log omega-3 supplement achhe se tolerate karte hain. Sabse common side effect hai fishy burping ya bad breath — ye toh inconvenient hai par harmful nahi. High doses mein loose stool ya nausea ho sakta hai. Blood thinners pe hain toh bleeding time thoda badh sakta hai. Freeze karke ya khane ke baad lene se fishy burping kam hoti hai. Dose 3g/day se kam rakho bina doctor ke.' },
    { _key: 'f12', question: 'Omega-3 aur iron tablet saath le sakte hain?', answer: 'Alag time pe lo — at least 2–3 ghante ka gap rakho. Iron oxidation promote karta hai aur omega-3 ko oxidize kar sakta hai, jisse effectiveness kam ho sakti hai. Iron subah khali pet ya khane ke saath lo, omega-3 raat ke khane ke saath — ye practical scheduling hai.' },
    { _key: 'f13', question: 'Fish oil aur flaxseed oil mein se kaun better hai?', answer: 'Vegetarians ke liye flaxseed oil ALA ka achha source hai lekin direct EPA/DHA nahi milta. Fish oil mein seedha EPA aur DHA milta hai. Agar aap non-vegetarian hain — fish oil ya fatty fish better. Vegetarians ke liye algae oil EPA+DHA dono deta hai aur fish oil se equally effective hai most purposes ke liye.' },
    { _key: 'f14', question: 'Bacchon ko omega-3 supplement dena chahiye?', answer: 'Mild kami mein diet se koshish pehle karni chahiye — akhrot, ground alsi rotis mein, fortified eggs. Agar doctor ne test kiya aur level low aaya toh pediatric algae oil ya fish oil supplement recommend ki jaayegi. Khud se high dose mat do baache ko — children\'s dose adults se alag hoti hai.' },
    { _key: 'f15', question: 'Omega-3 se dil ka dora (heart attack) ruk sakta hai?', answer: 'Omega-3 se dil ki hifazat hoti hai — ye evidence se supported hai. EPA aur DHA triglycerides kam karte hain aur arterial inflammation reduce karte hain. Lekin ye akele heart attack prevent nahi karta — ye ek support hai overall healthy lifestyle mein. Jo already heart disease mein hain, unke liye doctor-prescribed omega-3 supplement beneficial ho sakta hai.' },
    { _key: 'f16', question: 'Omega-3 aur blood pressure ki dawai saath leni chahiye?', answer: 'Omega-3 ka BP thoda lower karne ka mild effect hota hai. Agar aap already antihypertensive medications pe hain toh supplement shuru karne se pehle doctor ko batao. Blood pressure monitor karo pehle kuch hafte. Zyada tar logon mein ye safe hai lekin physician ko informed rakhna zaroori hai.' },
    { _key: 'f17', question: 'Kya omega-3 mood aur depression mein help karta hai?', answer: 'Kuch studies mein EPA ka depression ke symptoms se positive connection dekha gaya hai — research ongoing hai. WHO aur psychiatric guidelines omega-3 ko ek adjunct (supporting) therapy mante hain, replacement nahi. Agar aap depression ke liye already treatment le rahe hain toh omega-3 supplement ke baare mein apne psychiatrist se poochho.' },
    { _key: 'f18', question: 'Omega-3 ki dose kitni honi chahiye?', answer: 'General adults ke liye diet se 250 mg+ EPA+DHA daily aim karo (fish se ya algae oil se). Agar supplement le rahe ho, 1–2g/day EPA+DHA reasonable starting point hai. 3g/day se zyada bina doctor ke mat lo. ALA ke liye: men 1.6g, women 1.1g daily (ground alsi ya akhrot se achieve ho sakta hai).' },
    { _key: 'f19', question: 'Omega-3 Index 4% se kam hai — kya karna chahiye?', answer: 'Pehle apne doctor ko batao — ye low risk zone hai heart ke liye. Doctor guidance mein fatty fish 2–3 bar hafta (ya vegetarians ke liye algae oil supplement 500–1000 mg EPA+DHA), ground alsi roz, aur 4–5 akhrot daily shuru karo. 4 mahine baad test repeat karo. Diet change + supplement dono saath zyada efficient hote hain.' },
    { _key: 'f20', question: 'Kya omega-3 se cholesterol badh sakta hai?', answer: 'EPA+DHA triglycerides kam karte hain. DHA-heavy supplements se LDL (bad cholesterol) thoda badh sakta hai kuch logon mein — ye documented asar hai. Agar cholesterol already high hai toh EPA-dominant ya balanced EPA/DHA supplement choose karo — aur apne doctor se discuss karo pehle. EPA alone aur EPA+DHA mein is regard mein fark hota hai.' },
  ],

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Heart Disease',  diseaseSlug: 'heart-disease', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Depression',      diseaseSlug: 'depression',    isAvailable: false },
    { _key: 'ld3', diseaseName: 'Joint Pain',      diseaseSlug: 'joint-pain',    isAvailable: false },
    { _key: 'ld4', diseaseName: 'Dry Skin/Eczema', diseaseSlug: 'dry-skin',      isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin D',  vitaminSlug: 'vitamin-d' },
    { _key: 'rv2', vitaminName: 'Zinc',       vitaminSlug: 'zinc' },
    { _key: 'rv3', vitaminName: 'Iron',       vitaminSlug: 'iron' },
    { _key: 'rv4', vitaminName: 'Magnesium',  vitaminSlug: 'magnesium' },
  ],
}

async function seed() {
  console.log('🌱 Seeding Omega-3...')
  try {
    const result = await client.createOrReplace(omega3)
    console.log('✅ Omega-3 seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
