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

const magnesium = {
  _id: 'vitamin-magnesium',
  _type: 'vitamin',
  name: 'Magnesium',
  hindiName: 'Maasp-peshiyon ka Khazana (Muscles & Nerves ka Mineral)',
  category: 'Mineral',
  slug: { _type: 'slug', current: 'magnesium' },
  metaTitle: 'Magnesium Ki Kami: Lakshan, Foods & Homeopathic Ilaj 2026',
  metaDescription: 'Magnesium ki kami ke lakshan, vegetarian food sources, normal range, supplement types aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: '',

  quickFacts: {
    indiaPrevalence: 'India mein magnesium deficiency widespread hai — ICMR-NIN data ke mutabik majority Indians ki diet mein magnesium intake RDA se kam hai, especially refined foods ki taraf shift ki wajah se. (Source: ICMR-NIN 2020)',
    commonDeficiencySign: 'Raat ko pair mein cramps aur akdi muscles — ye aksar magnesium kami ki pehli aur sabse common nishaani hoti hai',
    mainFoodSource: 'Kaddu ke Beej (Pumpkin Seeds) — sirf 30 gm mein approx. 150 mg magnesium milta hai, jo daily zaroorat ka kaafi hissa hai',
    normalRangeQuick: '1.7–2.2 mg/dL (Serum Magnesium)',
  },

  whatIsIt: 'Magnesium ek essential mineral hai jo body mein 300 se zyada enzymatic reactions (chemical processes) mein kaam aata hai. Ye muscles ke contract aur relax karne, nerves ke signals bhejne, aur energy banane ke liye bilkul zaroori hai. Seedhi baat karein to — agar body ek factory hai, to magnesium uski machinery ka engine oil hai.',

  bodyFunctions: [
    'Muscles contract aur relax karne mein madad karta hai — isliye kami mein cramps hoti hain',
    'Nerves signals sahi tarike se bhejna — brain se muscles tak connection maintain karta hai',
    'Energy production (ATP synthesis) — har cell mein energy banane ke liye magnesium zaroori hai',
    'Blood sugar regulate karta hai — insulin sensitivity improve karta hai',
    'Blood pressure control mein madadgar — blood vessels ko relax rakhta hai',
    'Bones banane mein calcium ka partner — bones mein calcium ko deposit hone mein help karta hai',
    'Protein synthesis — muscles aur tissues banane ke liye',
    'Sleep regulate karta hai — GABA (relaxing neurotransmitter) ko activate karta hai, jisse neend achhi aati hai',
  ],

  causesOfDeficiency: [
    'Refined aur processed foods zyada khana — maida, white rice, packaged food mein magnesium bahut kam hota hai',
    'Diabetes — kidneys zyada magnesium excrete karti hain high blood sugar mein',
    'Alcohol ka zyada sevan — magnesium loss urine se badhta hai',
    'Diuretics (water pills) ka long-term use — loop aur thiazide diuretics magnesium urine mein nikaalta hain',
    'Antacids / PPI medicines (acidity ki dawai) ka long-term use — ye absorption kam karti hain',
    'Stress — cortisol badhne se kidneys zyada magnesium excrete karti hain',
    'Digestive problems (IBS, Crohn\'s disease) — intestines sahi se absorb nahi kar paate',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Raat ko pair mein cramps — magnesium ki kami se muscles zyada contract hoti hain aur relax nahi kar paatein',
      'Muscles mein weakness ya thakan — energy production slow ho jaati hai',
      'Tremors (haath/pair ka kaampna) — muscles proper signal nahi receive kar paate',
    ],
    energyMoodBrain: [
      'Thakan aur kamzori (fatigue) — ATP (body ka fuel) sahi nahi banta kami mein',
      'Anxiety aur chipchidapan — magnesium nervous system ko calm karta hai; kami mein ye unbalanced ho jaata hai',
      'Neend na aana (insomnia) — GABA levels drop ho jaate hain jisse brain "off" nahi hota raat ko',
      'Siradard aur migraine — studies mein dikha hai ki migraine patients mein magnesium often low hota hai',
    ],
    skinHairNails: [
      'Numbness ya tingling sensations — nerve function affected hoti hai',
    ],
    other: [
      'Dil ki dhadkan irregular hona (palpitations) — magnesium heart ke electrical conduction mein kaam karta hai',
      'High blood pressure — blood vessels tense rehti hain kami mein',
      'Constipation — digestive muscles relax nahi kar paate',
      'Females mein: PMS symptoms zyada hona — hormonal regulation mein magnesium ka role hai',
    ],
  },

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',        normal: '1.7–2.2 mg/dL', deficient: '< 1.7 mg/dL', toxic: '> 2.5 mg/dL', unit: 'mg/dL' },
    { _key: 'nr2', category: 'Adult Female',       normal: '1.7–2.2 mg/dL', deficient: '< 1.7 mg/dL', toxic: '> 2.5 mg/dL', unit: 'mg/dL' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)', normal: '1.7–2.2 mg/dL', deficient: '< 1.7 mg/dL', toxic: '> 2.5 mg/dL', unit: 'mg/dL' },
    { _key: 'nr4', category: 'Pregnancy',          normal: '1.7–2.2 mg/dL', deficient: '< 1.7 mg/dL', toxic: '> 2.5 mg/dL', unit: 'mg/dL' },
    { _key: 'nr5', category: 'Elderly (60+)',       normal: '1.7–2.2 mg/dL', deficient: '< 1.7 mg/dL (risk zyada)', toxic: '> 2.5 mg/dL', unit: 'mg/dL' },
  ],

  vegSources: [
    { _key: 'v1',  food: 'Chaulai / Amaranth (Rajgira patta)', quantity: '100 gm',             amount: '~194 mg (NIN data)' },
    { _key: 'v2',  food: 'Rajma (Kidney Beans)',               quantity: '100 gm (boiled)',     amount: '~173 mg (NIN data)' },
    { _key: 'v3',  food: 'Kaddu ke Beej (Pumpkin Seeds)',      quantity: '30 gm (2 tbsp)',      amount: '~150 mg' },
    { _key: 'v4',  food: 'Ragi (Finger Millet)',               quantity: '100 gm',             amount: '~146 mg (NIN data)' },
    { _key: 'v5',  food: 'Bajra (Pearl Millet)',               quantity: '100 gm',             amount: '~137 mg (NIN data)' },
    { _key: 'v6',  food: 'Til (Sesame Seeds)',                 quantity: '2 tbsp (30 gm)',     amount: '~99 mg' },
    { _key: 'v7',  food: 'Badam (Almonds)',                    quantity: '30 gm (~20 piece)',  amount: '~80 mg' },
    { _key: 'v8',  food: 'Palak (Spinach)',                    quantity: '1 katori cooked',    amount: '~78 mg' },
    { _key: 'v9',  food: 'Kaju (Cashews)',                     quantity: '30 gm',              amount: '~72 mg' },
    { _key: 'v10', food: 'Dark Chocolate (70%+)',              quantity: '30 gm (1 small piece)', amount: '~50 mg' },
    { _key: 'v11', food: 'Kela (Banana)',                      quantity: '1 medium (120 gm)',  amount: '~32–37 mg' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Mackerel (Bangda fish)', quantity: '100 gm', amount: '~97 mg' },
    { _key: 'nv2', food: 'Salmon',                 quantity: '100 gm', amount: '~30 mg' },
    { _key: 'nv3', food: 'Chicken',                quantity: '100 gm', amount: '~25 mg' },
  ],

  sunlightNote: 'Roz 2 tbsp kaddu ke beej + 1 katori palak ki sabzi + 1 katori rajma dal — is combination se din bhar ki magnesium zaroorat kaafi had tak puri ho sakti hai. Refined atta ki jagah ragi ya bajra ki roti try karein. Soaked (bhige hue) badam ya seeds khao — phytic acid reduce hota hai jo absorption block karta hai.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–6 months',      male: '30',  female: '30',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day (AI)' },
    { _key: 'd2', ageGroup: '7–12 months',     male: '75',  female: '75',  pregnancy: null,  breastfeeding: null,  unit: 'mg/day (AI)' },
    { _key: 'd3', ageGroup: '1–8 saal',        male: '105', female: '105', pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd4', ageGroup: '9–18 saal',       male: '325', female: '300', pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd5', ageGroup: 'Adults (19–50)',  male: '440', female: '370', pregnancy: '440', breastfeeding: '400', unit: 'mg/day (ICMR-NIN 2020)' },
    { _key: 'd6', ageGroup: '51–70 saal',      male: '420', female: '320', pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
    { _key: 'd7', ageGroup: '70+ saal',        male: '420', female: '320', pregnancy: null,  breastfeeding: null,  unit: 'mg/day' },
  ],

  pregnancyInfo: {
    applicable: true,
    note: 'Pregnancy mein magnesium bahut important hai — uterus ke muscles ke sahi kaam ke liye, baby ke bones aur nerves develop karne ke liye. Daily requirement: 440 mg/day (ICMR-NIN 2020). Kami se: Baby ka growth slow ho sakta hai (intrauterine growth restriction ka risk), preterm labour (samay se pehle delivery) ka risk — uterine muscles spasm kar sakti hain, baby mein bone development affect ho sakta hai. Doctor-prescribed magnesium supplement pregnancy mein safe mana jaata hai — especially jab diet se zaroorat poori na ho.',
    whenDoctor: 'PREGNANCY MEIN KOI BHI SUPPLEMENT LENE SE PEHLE APNA DOCTOR ZAROOR CONSULT KAREIN — dose aur form doctor decide karein.',
  },

  childrenInfo: 'Bacchon mein magnesium kami ke specific signs: Hyperactivity ya bahut zyada restlessness, raat ko neend mein darna ya uthna, pair mein "growing pains" (jo aksar magnesium kami se hote hain), constipation. Daily requirement: 1–3 saal: 80 mg | 4–8 saal: 130 mg | 9–13 saal: 240 mg | 14–18 saal: 360–410 mg (gender ke hisab se). Foods: Ragi ki roti / ragi porridge, badam, kela, palak. Mild kami mein diet se theek ho sakta hai. Agar symptoms serious hain to pediatrician ki salah zaroori hai — bina doctor ke bacchon ko supplement mat dein.',

  labTestInfo: {
    testName: 'Serum Magnesium Test',
    testSlug: 'magnesium-test',
    normalRange: '1.7–2.2 mg/dL (ya 0.85–1.10 mmol/L). NOTE: Serum magnesium test sirf blood ka 1% magnesium detect karta hai — normal report ka matlab zaroor nahi ki body mein kami nahi. Symptoms hain to doctor se zaroor poochein. Source: Metropolis Healthcare India, Dr. Lal PathLabs.',
    whenToTest: 'Jab muscle cramps, fatigue, irregular heartbeat ya anxiety ke symptoms hon. Diabetes ya BP ke patients mein routine check recommended hai. PPI/diuretics ka long-term use ho.',
    repeatAfter: 'Supplement shuru karne ke 8–12 hafte baad test repeat karein.',
    priceRange: 'Metropolis: ~₹540–610 | Dr. Lal PathLabs: ~₹500. Approximately ₹300–₹650 (city ke hisab se).',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Magnesium Glycinate (ya Bisglycinate)',
      benefits: ['Sabse zyada absorb hone wali form', 'Stomach pe gentle', 'Neend aur anxiety ke liye specially useful', 'Glycine amino acid relaxation mein bhi help karta hai'],
      drawbacks: ['Thoda mehenga hai', 'Ek tablet mein elemental magnesium thoda kam hota hai'],
      bestFor: 'Neend ki problem, anxiety, muscle cramps, sensitive stomach wale log',
    },
    {
      _key: 'sf2',
      formName: 'Magnesium Citrate',
      benefits: ['Achha absorption', 'Relatively affordable', 'Energy aur digestion ke liye helpful'],
      drawbacks: ['Zyada dose mein loose motion / diarrhea ho sakta hai — mild laxative effect hai'],
      bestFor: 'Constipation bhi hai aur magnesium bhi chahiye; roz ki general kami',
    },
    {
      _key: 'sf3',
      formName: 'Magnesium Oxide',
      benefits: ['Sabse sasta', 'Ek tablet mein zyada elemental magnesium'],
      drawbacks: ['Absorption bahut kam (10% se bhi kam)', 'Stomach upset aur bloating common', 'Mostly constipation ke liye use hota hai'],
      bestFor: 'Sirf cost constraint ho aur acidity/constipation bhi treat karni ho — deficiency ke liye ideal nahi',
    },
    {
      _key: 'sf4',
      formName: 'Magnesium L-Threonate',
      benefits: ['Brain tak pahunch sakta hai (blood-brain barrier cross karta hai)', 'Memory aur cognitive function ke liye research mein promising'],
      drawbacks: ['Bahut mehenga', 'India mein easily available nahi'],
      bestFor: 'Memory issues, brain fog — agar specifically brain health ke liye chahiye',
    },
  ],

  supplementTiming: {
    bestTime: 'Raat ko sone se 1-2 ghante pehle — kyunki magnesium relaxing effect karta hai jo neend better banata hai.',
    withFood: 'Khane ke saath lo, khali pet nahi — empty stomach pe kuch logon mein nausea ho sakti hai.',
    note: 'Vitamin B6 ke saath lena absorption improve karta hai. Vitamin D ke saath lena beneficial hai — dono milkar bone health mein zyada kaam karte hain. Chai aur coffee se kuch ghante door rakhein — ye absorption slow karte hain.',
    avoid: 'Calcium ke saath ek time pe mat lo — dono compete karte hain absorption ke liye; 2 ghante ka gap rakhein. Iron ke saath ek hi time pe nahi — Iron absorption affect ho sakti hai. Thyroid medicine (Levothyroxine) ke saath bilkul nahi — minimum 4 ghante ka gap zaroori hai.',
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Levothyroxine (thyroid medicine — Thyrox / Eltroxin)', reason: 'Magnesium thyroid medicine ka absorption significantly kam kar deta hai jisse thyroid undertreat ho sakti hai. Thyroid medicine subah khali pet lo, magnesium se MINIMUM 4 ghante ka gap rakhein' },
    { _key: 'di2', medicineName: 'Tetracycline / Doxycycline (antibiotics)', reason: 'Magnesium ke saath bind ho jaate hain aur antibiotic absorb nahi hoti. Antibiotic 2 ghante pehle ya 4-6 ghante baad lo' },
    { _key: 'di3', medicineName: 'Ciprofloxacin / Levofloxacin (fluoroquinolone antibiotics)', reason: 'Magnesium antibiotic ko chelate kar leta hai — 2-4 ghante ka gap zaroori hai' },
    { _key: 'di4', medicineName: 'Diuretics / Water Pills (Furosemide/Lasix, Hydrochlorothiazide)', reason: 'Ye medicines magnesium body se nikaal deti hain — zyada loss hota hai. Doctor se monitoring zaroori' },
    { _key: 'di5', medicineName: 'Proton Pump Inhibitors / PPIs (Omeprazole, Pantoprazole)', reason: 'Long-term use se magnesium deficiency ho sakti hai — doctor se levels check karaate rehein' },
  ],

  combinations: {
    beneficial: [
      { _key: 'b1', nutrient: 'Vitamin D', reason: 'Dono milkar bones ko zyada effectively support karte hain; D ki wajah se magnesium absorption bhi improve hoti hai' },
      { _key: 'b2', nutrient: 'Vitamin B6', reason: 'B6 cells mein magnesium ko andar jaane mein help karta hai; combination better results deta hai' },
      { _key: 'b3', nutrient: 'Zinc (normal dose mein)', reason: 'Teeno minerals milkar immune function aur sleep support karte hain' },
    ],
    avoid: [
      { _key: 'a1', nutrient: 'Calcium (same time)', reason: 'Absorption ke liye compete karte hain — calcium subah lo, magnesium raat ko, 2-4 ghante ka gap' },
      { _key: 'a2', nutrient: 'Iron (same time)', reason: 'Iron absorption affect ho sakti hai — 2 ghante ka gap rakhein' },
    ],
    timingGuide: 'Raat ko lo: Magnesium Glycinate (neend se 1-2 ghante pehle). Subah lo: Vitamin D, Calcium, Iron (separate timings). Gap rakhein: Magnesium aur thyroid medicine ke beech minimum 4 ghante.',
  },

  toxicity: {
    upperLimit: 'Supplement se 350 mg/day (NIH) — food se zyada magnesium safe hai kyunki kidneys excrete kar deti hain. Supplement ki 350 mg se zyada dose bina doctor ke nahi leni chahiye.',
    sideEffects: [
      'Diarrhea / loose motion — sabse common side effect',
      'Nausea aur vomiting',
      'Stomach cramping',
      'Bahut zyada dose pe: Low blood pressure, slow heartbeat, drowsiness',
    ],
    whenSerious: 'Kidney ki problem wale logon mein — kidneys excrete nahi kar paatein to levels dangerous ho sakte hain. EMERGENCY SIGNS: Extreme drowsiness, muscle weakness, irregular heartbeat — YE EMERGENCY HAI, turant doctor ke paas jaana chahiye. "Doctor ki salah ke bina high dose supplement kabhi mat lo."',
  },

  timeline: {
    bloodLevelTime: '4–8 hafte regular supplementation ke baad blood test mein improvement dikha sakti hai.',
    symptomsTime: 'Muscle cramps aur neend mein 2–4 hafte mein kuch fark notice ho sakta hai — kyunki cells mein magnesium restore hone mein time lagta hai.',
    fullRecoveryTime: '3–6 mahine — regular supplement aur diet changes ke saath.',
    repeatTestTime: 'Supplement shuru karne ke 2–3 mahine baad fir test karaye',
    patientNote: 'Pehle hafte mein kamaal nahi hoga — patience rakhein. Body mein magnesium stores ko phir se bharna time maangta hai. Consistently lo, diet sahi rakhein.',
  },

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Magnesia Phosphorica (Mag Phos)',
      patientType: 'Jo patients muscle spasms, severe cramps (khaaskar right side), aur nerve pain se pareshaan hain — jo garmi se ya pressure (massage) se theek hota ho',
      howItHelps: 'Ye Schussler tissue salt hai — muscles aur nerves ki normal functioning ko support karta hai. Khaaskar spasmodic pain, period cramps, aur muscular weakness mein homoeopathic practice mein commonly indicated hai',
    },
    {
      _key: 'h2',
      medicineName: 'Magnesia Carbonica (Mag Carb)',
      patientType: 'Digestive complaints (acidity, sour stool), fatigue, aur emotional sensitivity wale patients — jo restless hain raat ko aur din mein thake hue hain',
      howItHelps: 'Digestive absorption ke issues ko address karta hai — agar magnesium kami ka karan poor gut function hai to is medicine ko constitutional prescribing mein consider kiya jaata hai',
    },
    {
      _key: 'h3',
      medicineName: 'Calcarea Carbonica (Calc Carb)',
      patientType: 'Chilly, thakan se pareshaan, bones/joints weak, sweating zyada karne wale patients — jo mineral assimilation mein weak hain',
      howItHelps: 'Mineral absorption aur metabolism ko improve karne mein madadgar mana jaata hai — magnesium aur calcium dono ki kami ke constitutional cases mein indicated. CCRH ke research mein mineral deficiency ke constitutional treatment mein iska reference milta hai',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Kele khao, magnesium poora ho jaayega',
      truth: 'Kela magnesium ka ek source zaroor hai — ek medium kele mein sirf ~32-37 mg hota hai, jabki daily zaroorat 370-440 mg hai. Sirf kele se kami poori nahi hogi. Kaddu ke beej, rajma, ragi — ye zyada concentrated sources hain.',
    },
    {
      _key: 'm2',
      myth: 'Magnesium supplement sab ko lena chahiye',
      truth: 'Agar aapki diet balanced hai aur varied hai (millets, legumes, nuts, greens), to diet se zaroorat poori ho sakti hai. Supplement tab zaruri hai jab test mein kami aaye, symptoms hon, ya specific medical condition ho. Har kisi ko supplement ki zaroorat nahi.',
    },
    {
      _key: 'm3',
      myth: 'Magnesium Oxide sabse acchi form hai kyunki zyada mg hoti hai',
      truth: 'Oxide mein elemental magnesium zyada hota hai lekin absorption rate 10% se bhi kam hai (NIH data). Matlab zyada tablet khao, fir bhi kuch khaas absorb nahi hoga. Glycinate ya Citrate form kaafi better absorb hoti hain.',
    },
    {
      _key: 'm4',
      myth: 'Magnesium supplement lene se neend zaroor achhi ho jaayegi',
      truth: 'Magnesium neend ke liye madadgar ho sakta hai — khaaskar agar kami hai to. Lekin insomnia ke kai aur kaaran bhi hote hain (stress, screen time, anxiety). Magnesium ek supporting factor hai, akela solution nahi.',
    },
    {
      _key: 'm5',
      myth: 'Serum test normal aaya — kami nahi hai',
      truth: 'Serum test sirf blood ka 1% magnesium check karta hai — body ka 99% magnesium bones aur cells mein stored hai. Normal serum test ka matlab nahi ki deficiency nahi. Symptoms aur clinical picture bhi dekha jaata hai.',
    },
  ],

  faqs: [
    { _key: 'f1',  question: 'Magnesium ki kami ke kya lakshan hote hain?', answer: 'Magnesium ki kami ke sabse common lakshan hain — raat ko pair mein cramps, muscles ki weakness, thakan, anxiety, neend na aana, aur siradard. In sabke saath dil ki dhadkan thodi irregular lagna bhi ho sakta hai. India mein ye symptoms bohot common hain kyunki hamare daily diet mein refined foods zyada ho gayi hain aur magnesium-rich whole grains aur legumes kam. Agar ye symptoms consistently hain to doctor se serum magnesium test karaana sahi rehega.' },
    { _key: 'f2',  question: 'Magnesium kisme sabse zyada paya jaata hai — vegetarian ke liye?', answer: 'Vegetarian ke liye sabse best sources hain: kaddu ke beej (pumpkin seeds) — 30 gm mein ~150 mg, chaulai/rajgira patta — 100 gm mein ~194 mg (NIN data), rajma — 100 gm mein ~173 mg (NIN), ragi — 100 gm mein ~146 mg (NIN). Til, badam, bajra, aur palak bhi bahut achhe sources hain. Practical tip: ragi ki roti banao ya rajma dal din mein ek baar — magnesium naturally cover ho sakta hai.' },
    { _key: 'f3',  question: 'Magnesium ki kami kaise poori karein?', answer: 'Mild kami mein diet se poori ho sakti hai — ragi, bajra, rajma, chaulai, kaddu ke beej, badam, palak daily diet mein shamil karo. Refined atta ki jagah millet flour use karo. Agar kami zyada hai ya symptoms strong hain to doctor-prescribed magnesium supplement — glycinate ya citrate form — commonly recommended hai. Sirf diet change karo, 4-6 hafte mein improvement notice ho sakta hai.' },
    { _key: 'f4',  question: 'Magnesium ki kami se kya hota hai shareer mein?', answer: 'Magnesium ki kami se muscles cramp karti hain, neend disturb hoti hai, anxiety badhti hai, energy low rehti hai aur blood pressure high ho sakta hai. Long-term kami se type 2 diabetes, heart problems, aur migraine ka risk badhta hai. Bones bhi kamzor ho sakti hain kyunki calcium absorption ke liye magnesium ki zaroorat hoti hai. Timely correction se ye sab complications avoid kiye ja sakte hain.' },
    { _key: 'f5',  question: 'Magnesium supplement kab khaye — subah ya raat?', answer: 'Raat ko sone se 1-2 ghante pehle lena better hai — kyunki magnesium relaxing effect deta hai jo neend improve karta hai. Khane ke saath lo, khali pet nahi — stomach upset avoid hoga. Agar glycinate form use kar rahe ho, raat wali timing specially effective hai.' },
    { _key: 'f6',  question: 'Magnesium aur calcium saath le sakte hain?', answer: 'Ek hi waqt pe nahi — dono absorption ke liye compete karte hain. Calcium subah lo, magnesium raat ko — 2-4 ghante ka gap rakhein. Is tarike se dono ka maximum fayda milega. Vitamin D teeno ke saath beneficial hai — bones ke liye ye trio bahut helpful hai.' },
    { _key: 'f7',  question: 'Magnesium ki kami se migraine hota hai kya?', answer: 'Haan, research suggests karta hai ki magnesium ki kami migraine triggers mein se ek ho sakti hai. Studies mein dekha gaya hai ki migraine patients mein often serum magnesium low hota hai. Magnesium blood vessels ki abnormal contraction rok sakta hai jo migraine mein hoti hai. Chronic migraine patients mein doctor se magnesium level zaroor check karayein.' },
    { _key: 'f8',  question: 'Magnesium ka normal range kitna hona chahiye?', answer: 'Serum magnesium ka normal range 1.7–2.2 mg/dL (ya 0.85–1.10 mmol/L) hai — ye Indian labs (Metropolis, Dr. Lal PathLabs) ki reference range hai. 1.7 se kam hona kami ka sign hai. Lekin yaad rakhein — serum test body ka sirf 1% magnesium check karta hai. Symptoms ke saath normal range ka bhi dhyan rakhna zaroori hai.' },
    { _key: 'f9',  question: 'Magnesium pregnancy mein le sakte hain?', answer: 'Haan, pregnancy mein magnesium zaruri hai — baby ke bone aur nerve development ke liye, aur uterine muscles ke sahi kaam ke liye. ICMR ke mutabik pregnancy mein 440 mg/day ki zaroorat hai. Lekin koi bhi supplement lene se pehle apna gynecologist zaroor consult karein — form, dose aur timing doctor decide karein.' },
    { _key: 'f10', question: 'Magnesium glycinate kya hota hai aur kab lein?', answer: 'Magnesium glycinate ek chelated form hai jisme magnesium glycine amino acid ke saath bound hota hai. Ye sabse zyada absorb hone wali aur stomach ke liye gentlest form hai. Neend ki problem, anxiety, aur muscle cramps ke liye specially useful hai. Raat ko sone se 1-2 ghante pehle khane ke baad lein. Ye India mein pharmacies aur online available hai.' },
    { _key: 'f11', question: 'Kya magnesium se high blood pressure theek hota hai?', answer: 'Research suggests karta hai ki adequate magnesium blood pressure ko moderate karne mein helpful ho sakta hai — blood vessels relax hoti hain. Lekin ye BP medicine ka replacement nahi hai. Agar aap BP ke liye medicine le rahe hain to supplement doctor ki salah se lein — kuch interactions ho sakte hain. Magnesium supporting role mein kaam karta hai, primary treatment nahi hai.' },
    { _key: 'f12', question: 'Magnesium se neend achhi hoti hai kya?', answer: 'Haan — agar kami ki wajah se neend disturbed hai to magnesium (khaaskar glycinate form) neend improve karne mein help kar sakta hai. Ye GABA neurotransmitter ko activate karta hai jo brain ko "off" karne mein help karta hai, aur cortisol (stress hormone) ko regulate karta hai. Lekin sirf magnesium se insomnia completely theek nahi hoga agar stress, screen time, ya other issues bhi hain.' },
    { _key: 'f13', question: 'Magnesium thyroid medicine ke saath le sakte hain?', answer: 'Nahi — ek saath nahi lena chahiye. Magnesium levothyroxine (Thyrox, Eltroxin) ka absorption significantly kam kar deta hai jisse thyroid undertreat ho sakti hai. Rule simple hai: thyroid medicine subah khali pet, magnesium raat ko ya minimum 4 ghante baad. Agar thyroid ki problem hai to doctor se zaroor confirm karein.' },
    { _key: 'f14', question: 'Bacchon ko magnesium supplement dena chahiye?', answer: 'Mild kami mein pehle diet try karo — ragi porridge, kela, soaked almonds, palak. Ye naturally enough ho sakta hai. Bina pediatrician ki salah ke bacchon ko supplement mat dein — dose age ke hisab se bilkul different hoti hai. Agar severe symptoms hain to doctor diagnose karein aur dose decide karein.' },
    { _key: 'f15', question: 'Magnesium ki kami se baal jhadte hain kya?', answer: 'Direct strong link nahi hai, lekin magnesium hair follicle ke metabolism mein role karta hai aur DHT (hair loss hormone) ko regulate karne mein possibly madadgar hai — kuch research suggests karta hai. Overall mineral imbalance (magnesium + zinc + iron deficiency) hair loss mein contribute kar sakta hai. Sirf magnesium se hair loss ka ilaaj nahi hoga — complete nutritional assessment better approach hai.' },
    { _key: 'f16', question: 'Magnesium overdose ke symptoms kya hain?', answer: 'Food se magnesium overdose practically impossible hai — kidneys excess excrete karti hain. Supplement se zyada lene pe — diarrhea, nausea, stomach cramps common symptoms hain. Bahut zyada dose pe (khaaskar kidney patients mein): extreme drowsiness, low blood pressure, weak muscles, irregular heartbeat. Ye emergency signs hain — turant doctor ke paas jaana chahiye. NIH ke mutabik supplement se 350 mg/day se zyada bina doctor ke nahi lena chahiye.' },
    { _key: 'f17', question: 'Magnesium kitne time mein kaam karta hai?', answer: 'Muscle cramps aur neend mein 2-4 hafte mein thoda fark notice hona shuru ho sakta hai. Blood test mein level 4-8 hafte mein improve hota hai. Full recovery — jahan body ke stores properly fill hon — 3-6 mahine regular supplement aur diet changes ke saath. "Ek hafte mein magical change nahi hoga — patience rakho."' },
    { _key: 'f18', question: 'Magnesium aur iron saath le sakte hain?', answer: 'Dono ko ek hi waqt pe nahi lena better hai — absorption compete ho sakti hai. Iron subah lo (Vitamin C ke saath best hai), magnesium raat ko. Is tarike se dono properly absorb hoge.' },
  ],

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Migraine',                    diseaseSlug: 'migraine',      isAvailable: false },
    { _key: 'ld2', diseaseName: 'Insomnia (Neend ki Kami)',    diseaseSlug: 'insomnia',      isAvailable: false },
    { _key: 'ld3', diseaseName: 'Hypertension (High BP)',      diseaseSlug: 'hypertension',  isAvailable: false },
    { _key: 'ld4', diseaseName: 'Anxiety',                     diseaseSlug: 'anxiety',       isAvailable: false },
    { _key: 'ld5', diseaseName: 'Muscle Cramps',               diseaseSlug: 'muscle-cramp',  isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin D',  vitaminSlug: 'vitamin-d',  isAvailable: true  },
    { _key: 'rv2', vitaminName: 'Calcium',    vitaminSlug: 'calcium',    isAvailable: true  },
    { _key: 'rv3', vitaminName: 'Vitamin B6', vitaminSlug: 'vitamin-b6', isAvailable: false },
  ],
}

async function seed() {
  console.log('🌱 Seeding Magnesium...')
  const result = await client.createOrReplace(magnesium)
  console.log('✅ Magnesium seeded:', result._id)
}

seed().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})
