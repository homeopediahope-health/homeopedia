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

const selenium = {
  _id: 'vitamin-selenium',
  _type: 'vitamin',
  name: 'Selenium',
  hindiName: 'Immunity Wala Khaas Mineral',
  category: 'Mineral',
  slug: { _type: 'slug', current: 'selenium' },
  metaTitle: 'Selenium Ki Kami: Lakshan, Foods & Homeopathic Ilaj 2026',
  metaDescription: 'Selenium ki kami ke lakshan, vegetarian food sources, normal range aur homeopathic ilaj — verified, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',
  doctorNote: '',

  quickFacts: {
    indiaPrevalence: 'India mein selenium deficiency relatively rare hai compared to Vitamin D ya Iron ki kami se — lekin thyroid patients, vegetarians jinka diet limited hai, aur Ganges belt ke low-selenium soil areas mein clinically relevant hai. (Source: NCBI/PubMed India data)',
    commonDeficiencySign: 'Bal jharna, nakhun kamzor hona, aur baar-baar bimaar padna — ye teeno sabse pehle dikhte hain',
    mainFoodSource: 'Brazil Nuts — sirf 1-2 dane roz ki zaroorat poori kar sakte hain. Indian sources mein sunflower seeds (surajmukhi ke beej) aur mushroom sabse acha option hain',
    normalRangeQuick: '70–150 mcg/L (Serum Selenium)',
  },

  whatIsIt: 'Selenium ek trace mineral hai — yani body ko iske bahut thodi matra chahiye, lekin ye matra nahi mile to body ke kai important kaam ruk jaate hain. Ye ek powerful antioxidant (cell damage rokne wala) ka kaam karta hai, thyroid hormone ko active rakhne mein madad karta hai, aur immunity (rog pratirodh kshamata) ke liye zaroori hai. Ye body mein khud nahi banta — khane aur supplements se hi milta hai. (Source: NIH Office of Dietary Supplements | NCBI StatPearls)',

  bodyFunctions: [
    'Antioxidant protection — Glutathione peroxidase (GP-x) naam ka powerful enzyme banata hai jo free radicals se cells ko bachata hai; cancer aur ageing ke against pehli defence line hai',
    'Thyroid function — T4 hormone ko T3 (active form) mein convert karne ke liye zaroori hai; isliye selenium ki kami seedha hypothyroidism ko worsen kar sakti hai',
    'Immunity boost — White blood cells ke function ko support karta hai; infections se ladne ki capacity badhata hai',
    'Male fertility — Sperm production aur sperm motility (chalane ki kshamata) ke liye zaroori hai; kami mein male infertility ka risk badh jaata hai',
    'DNA repair — DNA damage ko repair karne mein role hai; long-term deficiency mein genetic errors badh sakte hain',
    'Heart protection — Keshan disease (ek type ki cardiomyopathy) specifically selenium ki severe kami se hoti hai; ye China aur low-selenium areas mein documented hai',
    'Inflammation control — Inflammatory markers ko niyantrit karta hai; chronic inflammation wale patients mein important hai',
  ],

  causesOfDeficiency: [
    'Selenium-poor soil mein ugaye khane se kam intake — India ke kuch areas (Gangetic plains ke kuch hisse) mein mitti mein selenium kam hai; wahan ke crops mein bhi selenium kam milta hai',
    'Pure vegetarian ya vegan diet — Non-veg sources mein selenium zyada hota hai; purely plant-based diet pe rehne wale deficient ho sakte hain agar varied diet na ho',
    'Intestinal malabsorption — Crohn\'s disease, celiac disease, ya koi aur gut problem; selenium absorb nahi ho pata',
    'Dialysis patients — Kidney failure mein regular dialysis se selenium blood se nikal jaata hai',
    'HIV-positive patients — Malabsorption aur poor intake dono ki wajah se selenium low milta hai',
    'Gastrointestinal surgery ke baad — Specially jo patients parenteral nutrition (IV se khana) pe hain; unhe selenium supplementation ki zaroorat padti hai',
    'Alcohol ka zyada sevan — Liver damage se selenium metabolism disturb hota hai',
  ],

  deficiencySymptoms: {
    bonesMusclsJoints: [
      'Muscles mein dard ya weakness — selenium muscular dystrophy-type symptoms de sakta hai severe deficiency mein',
    ],
    energyMoodBrain: [
      'Bahut thakan (fatigue) — thyroid properly kaam nahi karta selenium ke bina, aur thyroid hi energy production control karta hai',
      'Baar-baar mood kharab hona ya depression jaisi feeling — kuch studies suggest karte hain selenium brain function support karta hai',
      'Memory aur focus mein problem — oxidative stress brain cells ko affect kar sakta hai',
    ],
    skinHairNails: [
      'Bal zyada jharna — selenium follicles ko oxidative damage se bachata hai; kami mein hair thinning aur patch baldness ho sakta hai',
      'Nakhun kamzor, brittle, ya white streaks ke saath — nail matrix ko selenium ki zaroorat hai; kami mein nails easily toot jaate hain',
      'Skin dull aur dry — antioxidant protection khatam hone se skin ageing fast hoti hai',
    ],
    other: [
      'Baar-baar sardi-zukham, infections — white blood cells ki effectiveness kam ho jaati hai; infection se theek hone mein zyada time lagta hai',
      'Autoimmune thyroid (Hashimoto\'s) ka risk badh jaata hai — selenium ki kami thyroid pe immune attack badhata hai',
      'Male patients mein libido kam hona ya fertility issues',
      'Thyroid test (TSH) abnormal aana bina kisi clear reason ke — selenium aur thyroid ka direct connection hai',
      'Pregnancy mein: preeclampsia (high BP during pregnancy) ka risk badh jaata hai',
    ],
  },

  normalRanges: [
    { _key: 'nr1', category: 'Adult Male',        normal: '70–150 mcg/L', deficient: '< 70 mcg/L', toxic: '> 400 mcg/L (UL)', unit: 'mcg/L' },
    { _key: 'nr2', category: 'Adult Female',       normal: '70–150 mcg/L', deficient: '< 70 mcg/L', toxic: '> 400 mcg/L (UL)', unit: 'mcg/L' },
    { _key: 'nr3', category: 'Bacche (1–18 saal)', normal: '60–120 mcg/L', deficient: '< 60 mcg/L', toxic: 'Age ke hisab se', unit: 'mcg/L' },
    { _key: 'nr4', category: 'Pregnancy',          normal: '75–150 mcg/L', deficient: '< 75 mcg/L (risk)', toxic: '> 400 mcg/L avoid', unit: 'mcg/L' },
    { _key: 'nr5', category: 'Elderly (60+)',       normal: '70–150 mcg/L', deficient: '< 70 mcg/L', toxic: '> 400 mcg/L (UL)', unit: 'mcg/L' },
  ],

  vegSources: [
    { _key: 'v1', food: 'Brazil Nuts (Brazil Mewa)',              quantity: '1-2 dane',          amount: '~70–95 mcg' },
    { _key: 'v2', food: 'Surajmukhi ke Beej (Sunflower Seeds)',   quantity: '100g (3-4 tbsp)',   amount: '~79 mcg' },
    { _key: 'v3', food: 'Chia Seeds',                            quantity: '100g',               amount: '~55 mcg' },
    { _key: 'v4', food: 'Whole Wheat Atta ki Roti',              quantity: '2 roti (100g atta)', amount: '~40 mcg' },
    { _key: 'v5', food: 'Mushroom (Button/Crimini)',             quantity: '100g (1 katori)',    amount: '~26 mcg' },
    { _key: 'v6', food: 'Lahsun (Garlic)',                       quantity: '10 kaliyaan',        amount: '~14 mcg' },
    { _key: 'v7', food: 'Masoor Dal / Moong Dal',                quantity: '1 katori cooked',    amount: '~5–7 mcg' },
    { _key: 'v8', food: 'Brown Rice (cooked)',                   quantity: '1 katori cooked',    amount: '~6 mcg' },
  ],

  nonVegSources: [
    { _key: 'nv1', food: 'Tuna (tinned/fresh)',   quantity: '100g', amount: '~85–92 mcg' },
    { _key: 'nv2', food: 'Rohu / Katla (fish)',   quantity: '100g', amount: '~40–50 mcg' },
    { _key: 'nv3', food: 'Egg (Anda)',            quantity: '2 ande', amount: '~30–40 mcg' },
    { _key: 'nv4', food: 'Chicken Breast',        quantity: '100g', amount: '~25–35 mcg' },
  ],

  sunlightNote: 'India mein Brazil Nuts easily available nahi hain — isliye roz 2-3 tbsp sunflower seeds (surajmukhi ke beej) khana ek realistic option hai. Whole wheat roti + mushroom curry ek meal mein enough selenium de sakta hai agar regular ho. Selenium content in plant foods depends on soil selenium — India ke different regions mein soil content alag hota hai, isliye pure vegetarians ko dietary variety banana important hai.',

  dailyRequirement: [
    { _key: 'd1', ageGroup: '0–6 months',      male: '15', female: '15', pregnancy: null, breastfeeding: null, unit: 'mcg/day (AI)' },
    { _key: 'd2', ageGroup: '7–12 months',     male: '20', female: '20', pregnancy: null, breastfeeding: null, unit: 'mcg/day (AI)' },
    { _key: 'd3', ageGroup: '1–3 saal',        male: '20', female: '20', pregnancy: null, breastfeeding: null, unit: 'mcg/day' },
    { _key: 'd4', ageGroup: '4–8 saal',        male: '30', female: '30', pregnancy: null, breastfeeding: null, unit: 'mcg/day' },
    { _key: 'd5', ageGroup: '9–13 saal',       male: '40', female: '40', pregnancy: null, breastfeeding: null, unit: 'mcg/day' },
    { _key: 'd6', ageGroup: '14–18 saal',      male: '55', female: '55', pregnancy: '60', breastfeeding: '70', unit: 'mcg/day' },
    { _key: 'd7', ageGroup: 'Adults (19–50)',  male: '55', female: '55', pregnancy: '60', breastfeeding: '70', unit: 'mcg/day (NIH RDA)' },
    { _key: 'd8', ageGroup: '51+ saal',        male: '55', female: '55', pregnancy: null, breastfeeding: null, unit: 'mcg/day' },
  ],

  pregnancyInfo: {
    applicable: true,
    note: 'Selenium pregnancy mein thyroid function, placental health, aur baby ke immune system ke development ke liye bahut zaroori hai. Daily requirement: 60 mcg/day (NIH). Breastfeeding mein: 70 mcg/day. Kami se: Baby ke thyroid development pe adverse effect (lifelong issues), preeclampsia (pregnancy mein high BP) ka risk, miscarriage ka risk increase (research ongoing). Doctor-prescribed dose mein safe hai — lekin self-prescribed high dose bilkul nahi. 400 mcg UL se zyada kabhi nahi.',
    whenDoctor: 'Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein — selenium ka dose carefully decided hona chahiye.',
  },

  childrenInfo: 'Bacchon mein selenium kami ke signs: Slow growth aur weight gain mein difficulty, recurrent respiratory infections (baar-baar saans ki takleef, cough), muscle weakness — Kashin-Beck disease mein joint stiffness early childhood mein shuru hoti hai. Daily requirement: 0–6 months: 15 mcg | 7–12 months: 20 mcg | 1–3 saal: 20 mcg | 4–8 saal: 30 mcg | 9–13 saal: 40 mcg | 14–18 saal: 55 mcg. Foods: Eggs, whole wheat bread/roti, mushroom, dal — easily India mein available. Aam taur pe supplement ki zaroorat nahi — balanced diet se kaafi ho jaata hai. Doctor ke bina supplement NAHI dena — bacchon ka UL bahut kam hota hai.',

  labTestInfo: {
    testName: 'Serum Selenium Test (blood test)',
    testSlug: 'selenium-test',
    normalRange: '70–150 mcg/L serum mein (adults). Source: Metropolis Labs India, Sprint Diagnostics.',
    whenToTest: 'Thyroid function normal ho lekin symptoms hain (fatigue, hair loss, immunity issues). Thyroid patients jo treatment ke bawajood theek nahi ho rahe. Crohn\'s/celiac disease ya other malabsorption conditions mein. Dialysis patients mein routine monitoring. Pregnancy mein agar thyroid ya immunity-related concerns hain.',
    repeatAfter: 'Supplement shuru karne ke 3 mahine baad test repeat karein.',
    priceRange: 'Metropolis Mumbai: ~₹2,915–₹3,450 | Dr. Lal PathLabs: ~₹3,100. Test result 3-5 din mein aata hai. (Source: Metropolis Healthcare India, Dr. Lal PathLabs)',
  },

  supplementForms: [
    {
      _key: 'sf1',
      formName: 'Selenomethionine (Organic Selenium)',
      benefits: ['Sabse zyada bioavailable form — body easily absorb karta hai', 'Natural food selenium se milta-julta hai', 'Long-term supplementation ke liye suitable'],
      drawbacks: ['Slightly expensive'],
      bestFor: 'General deficiency correction, thyroid support, long-term use',
    },
    {
      _key: 'sf2',
      formName: 'Sodium Selenite (Inorganic Selenium)',
      benefits: ['Cheap', 'Kuch antioxidant benefits ke liye effective', 'Doctor-prescribed IV form bhi available'],
      drawbacks: ['Lower absorption compared to selenomethionine', 'High dose mein GI irritation'],
      bestFor: 'Clinical settings, cost-sensitive cases, short-term correction',
    },
    {
      _key: 'sf3',
      formName: 'Selenium Glycinate (Chelated Selenium)',
      benefits: ['Gentle on stomach', 'Good absorption', 'Nausea kam'],
      drawbacks: ['Relatively less research', 'Premium price'],
      bestFor: 'Jo log sensitive stomach ke saath supplement lena chahte hain',
    },
    {
      _key: 'sf4',
      formName: 'Selenium-enriched Yeast (Selenium Yeast)',
      benefits: ['Natural-source selenium', 'Bioavailability high', 'Research mein promising'],
      drawbacks: ['Yeast allergy walon ke liye suitable nahi'],
      bestFor: 'Yeast-tolerant individuals jo natural form prefer karte hain',
    },
  ],

  supplementTiming: {
    bestTime: 'Subah ka time generally better hai — thyroid supplement ke saath coordination ke liye. Agar thyroid medicine (Levothyroxine/thyroxine) le rahe hain to PEHLE thyroid medicine lo, aur uske 2-4 ghante baad selenium lo.',
    withFood: 'Khane ke saath lo — isse absorption better hoti hai aur stomach irritation kam hota hai. Saada paani ke saath kaafi hai.',
    note: 'Vitamin E ke saath synergistically kaam karte hain — dono ek dusre ki antioxidant activity badhate hain. Vitamin C ke saath bhi combination theek hai. Zinc ke saath combination generally safe hai.',
    avoid: 'Thyroid medicine (Levothyroxine) ke saath EK SAATH nahi — 2-4 ghante ka gap zaroori hai. Warfarin (blood thinner) ke saath caution — blood clotting slightly slow kar sakta hai. Gold injections (arthritis ke liye) ke saath nahi — gold selenium ko body mein bind karta hai. Immunosuppressant medicines (transplant ke baad) ke saath doctor se poochein.',
  },

  drugInteractions: [
    { _key: 'di1', medicineName: 'Warfarin (blood thinner / khoon patla karne ki dawai)', reason: 'Selenium blood clotting slow kar sakta hai; warfarin ka effect badh sakta hai, bleeding risk increase. INR monitoring zaroori. (Source: WebMD Vitamins, Drugs.com)' },
    { _key: 'di2', medicineName: 'Immunosuppressant medicines (Cyclosporine, Tacrolimus — transplant patients)', reason: 'Selenium immunity-boosting mineral hai; immunosuppressants ke opposite direction mein kaam karta hai — dose adjustment ki zaroorat pad sakti hai' },
    { _key: 'di3', medicineName: 'Gold Salts (aurothioglucose, auranofin — rheumatoid arthritis treatment)', reason: 'Gold selenium ko body tissues mein bind karke usski availability kam karta hai — selenium deficiency symptoms trigger ho sakte hain' },
    { _key: 'di4', medicineName: 'Cisplatin (chemotherapy drug)', reason: 'Kuch studies mein interaction dekha gaya hai; oncologist se discuss karna zaroori hai' },
  ],

  combinations: {
    beneficial: [
      { _key: 'b1', nutrient: 'Vitamin E', reason: 'Dono antioxidants hain; Vitamin E lipid oxidation rokta hai, selenium cell interior mein oxidative damage rokta hai. Dono ek dusre ki activity support karte hain — particularly skin aur immunity ke liye' },
      { _key: 'b2', nutrient: 'Iodine', reason: 'Thyroid ke liye critical combination — Iodine thyroid hormone banata hai, Selenium ussse activate karta hai (T4→T3 conversion). Agar dono kam hain to double thyroid problem' },
      { _key: 'b3', nutrient: 'Zinc', reason: 'Immune function ke liye powerful combination; dono saath multivitamin mein commonly available hain — generally safe to combine' },
    ],
    avoid: [
      { _key: 'a1', nutrient: 'Warfarin (blood thinner)', reason: 'Bleeding risk badh sakta hai; doctor monitor kare agar dono le rahe hain' },
      { _key: 'a2', nutrient: 'Gold salts (arthritis treatment)', reason: 'Gold selenium ko block karta hai — selenium effectiveness drastically reduce ho jaati hai' },
    ],
    timingGuide: 'Subah lo: Selenium (khane ke saath), Zinc, Vitamin E — ye sab saath chal sakte hain. Gap rakhein: Thyroid medicine (Levothyroxine) se kam se kam 2-4 ghante ka gap — warna thyroid medicine ka absorption affect ho sakta hai.',
  },

  toxicity: {
    upperLimit: 'Adults: 400 mcg/day (NIH IOM 2000, confirmed 2024). Bacchon mein zyada low UL hai: 45 mcg (1–3 years) se 280 mcg (14–18 years) tak. Isse kabhi zyada nahi lena.',
    sideEffects: [
      'Bal bahut zyada jharna — paradoxically zyada selenium bhi hair loss karta hai, bilkul kami ki tarah',
      'Nakhun tootna ya nikal jaana',
      'Muh mein lehsun jaisi smell (garlic breath) — ye characteristic sign hai selenosis ka',
      'Muh mein metallic taste',
      'Nausea, diarrhea, pet dard',
      'Skin rash aur irritation',
      'Thakan aur irritability',
    ],
    whenSerious: 'EMERGENCY SIGNS — Ye dikhein to turant doctor ke paas jaao: Haath-paon mein jhunjhunahat (numbness/tingling), saans lene mein takleef, garlic smell breath ke saath severe GI distress, seizure ya unconsciousness. Zyada severe cases mein nervous system problems, tremors, kidney failure, ya heart problems tak ho sakte hain. (Source: NIH Consumer Fact Sheet, 2024)',
  },

  timeline: {
    bloodLevelTime: 'Selenium supplementation shuru karne ke 4–8 hafte mein blood levels normal range mein aana shuru ho jaate hain — agar dose sahi ho.',
    symptomsTime: 'Fatigue/energy: 4–6 hafte mein improvement. Hair loss (ruk jaana): 2–3 mahine — hair cycle slow hota hai, patience zaroori. Immunity (baar-baar bimaar padna kam hona): 2–3 mahine. Thyroid antibodies (anti-TPO) kam hona (Hashimoto\'s mein): 3–6 mahine ka continuous use.',
    fullRecoveryTime: 'Mild deficiency: 3 mahine. Severe deficiency ya malabsorption: 6+ mahine.',
    repeatTestTime: '3 mahine supplement use ke baad test repeat zaroor karaye',
    patientNote: 'Ek hafte ya ek mahine mein fark nahi dikhega — patience zaroori hai. 3 mahine baad test repeat zaroor karaye — numbers khud batayenge.',
  },

  homeopathicAlternatives: [
    {
      _key: 'h1',
      medicineName: 'Selenium Metallicum',
      patientType: 'Jo patient bahut thaka hua rehta hai, hair loss + low libido dono saath ho, aur memory/concentration bhi weak ho — especially middle-aged men mein',
      howItHelps: 'Selenium Metallicum usi element se banta hai jo body mein kaam karta hai — homeopathic potentization ke baad ye hair follicles aur reproductive system ki weakness ko address karta hai. Classical homoeopathy mein ye debility aur emaciation ke liye use hota hai (H.C. Allen Keynotes)',
    },
    {
      _key: 'h2',
      medicineName: 'Calcarea Carbonica',
      patientType: 'Jis patient ka metabolism slow ho, thoda mota ho, bahut pasina aaye, aur thyroid-related complaints ke saath deficiency ke symptoms hoon',
      howItHelps: 'Calcarea Carb body ki absorption capacity ko support karta hai — minerals jaise calcium aur trace elements ko better utilize karne mein body ki help karta hai. Thyroid patients mein Calcarea Carb constitutional remedy ke roop mein aata hai',
    },
    {
      _key: 'h3',
      medicineName: 'Silicea',
      patientType: 'Weak immune system, recurrent infections, brittle nails + hair falling, aur generally debilitated patient — especially thin, chilly, nervous type',
      howItHelps: 'Silicea immune system ko strengthen karne ka kaam karta hai aur skin, hair, nails ki weakness mein constitutional support deta hai. Deficiency ke long-term effects mein helpful considered hai',
    },
  ],

  myths: [
    {
      _key: 'm1',
      myth: 'Selenium sirf thyroid patients ko chahiye',
      truth: 'Selenium har kisi ko chahiye — antioxidant protection, immunity, hair, nails, fertility sab ke liye zaroori hai. Thyroid patients mein iska role zyada highlighted hota hai, lekin ye ek general essential mineral hai.',
    },
    {
      _key: 'm2',
      myth: 'Brazil nuts roz khane se koi problem nahi',
      truth: 'Ek Brazil nut mein hi ~70-95 mcg selenium hota hai — jo almost ek din ki zaroorat ke barabar hai. Roz 5-6 khane se toxicity (selenosis) ho sakti hai. 1-2 dane kafi hain.',
    },
    {
      _key: 'm3',
      myth: 'Selenium supplement lene se hair bahut jaldi wapas aayenge',
      truth: 'Selenium ki kami se hair loss RUK jaata hai supplement se — lekin naye baal aane mein 2-3 mahine lagte hain. Hair cycle slow hai. Aur zyada selenium bhi hair loss karta hai — so dose sahi rakho.',
    },
    {
      _key: 'm4',
      myth: 'India mein selenium ki kami bahut common hai',
      truth: 'India mein selenium deficiency relatively uncommon hai compared to Vitamin D ya Iron ki kami se. Kuch specific groups (thyroid patients, malabsorption cases, dialysis patients) mein clinically relevant hai — but generally Indian diet se kaafi selenium milti hai.',
    },
    {
      _key: 'm5',
      myth: 'Jitna zyada loge, utna zyada fayda',
      truth: 'Selenium ek NARROW WINDOW mineral hai — kami bhi buri, zyada bhi bura. 400 mcg se zyada lena toxic hai. Recommended dose se double lene se fayda nahi, toxicity (selenosis) hoti hai.',
    },
  ],

  faqs: [
    { _key: 'f1',  question: 'Selenium ki kami ke lakshan kya hote hain?', answer: 'Selenium ki kami mein sabse pehle bal zyada jhadte hain, nakhun kamzor aur brittle hote hain, aur baar-baar bimaar padna shuru hota hai kyunki immunity weak hoti hai. Thakan bhi bahut common hai. Thyroid se related complaints (jaise weight badh jaana, thanda lagta rehna) bhi ho sakti hain kyunki selenium thyroid hormone activate karta hai. Agar ye symptoms saath mein hain to Serum Selenium test karwana samajhdari hai.' },
    { _key: 'f2',  question: 'Selenium kisme paya jata hai vegetarian mein?', answer: 'Vegetarians ke liye sabse acha source hai Brazil Nuts (1-2 dane roz — almost ek din ki zaroorat). Uske baad: Surajmukhi ke beej (sunflower seeds, 3-4 tbsp), mushroom (1 katori), whole wheat roti, chia seeds. Lahsun (garlic) mein bhi thoda selenium hota hai. India mein mixed dal aur whole wheat roti ka daily use moderate selenium provide karta hai — but agar thyroid issues hain to doctor se level check karwao.' },
    { _key: 'f3',  question: 'Selenium ka normal range kitna hona chahiye?', answer: 'Blood mein Serum Selenium ka normal range 70–150 mcg/L (micrograms per litre) hota hai adults mein. Isse kam hona deficiency ki taraf point karta hai, aur isse zyada hona toxicity. Test result hamesha us lab ke reference range ke saath compare karo jahan test hua ho. (Source: Metropolis Labs India, Sprint Diagnostics)' },
    { _key: 'f4',  question: 'Selenium kab lena chahiye — subah ya raat?', answer: 'Subah ka time generally better hai — khane ke saath lo taaki absorption theek ho aur stomach upset na ho. Agar thyroid medicine (Levothyroxine) le rahe hain to thyroid medicine PEHLE lo, aur 2-4 ghante baad selenium lo. Raat ko lena bhi koi problem nahi — consistency important hai.' },
    { _key: 'f5',  question: 'Selenium ki kami se kaun si bimari hoti hai?', answer: 'Selenium ki kami directly linked hai: (1) Hypothyroidism aur Hashimoto\'s thyroiditis — thyroid antibodies badh jaate hain, (2) Keshan disease — heart muscle ki bimari, (3) Kashin-Beck disease — joints ki bimari (selenium + iodine dono ki kami mein), (4) Weakened immunity se recurrent infections. Severe aur prolonged deficiency mein cardiomyopathy tak risk hai.' },
    { _key: 'f6',  question: 'Selenium aur thyroid mein kya connection hai?', answer: 'Selenium-dependent enzyme (iodothyronine deiodinase) thyroid hormone T4 ko active form T3 mein convert karta hai. Selenium ke bina yeh conversion nahi hota — isliye T4 levels normal hone ke bawajood symptoms rehte hain. Hashimoto\'s mein research show karta hai ki selenium supplementation (200 mcg/day) se anti-TPO antibodies kam hote hain. Thyroid patients ke liye selenium level check karna important hai.' },
    { _key: 'f7',  question: 'Selenium ke side effects kya hain zyada lene se?', answer: 'Zyada selenium lene se Selenosis hoti hai. Symptoms: bal bahut jhhadna, nakhun tootna/nikal jaana, muh mein garlic jaisi smell, metallic taste, nausea, diarrhea. Severe cases mein nervous system problems, kidney failure tak. Upper limit 400 mcg/day hai adults ke liye — isse kabhi zyada nahi lena. (Source: NIH ODS 2024)' },
    { _key: 'f8',  question: 'Selenium supplement kaise lein — tablet form ya food se?', answer: 'Agar blood test mein deficiency confirm nahi hui to food sources se hi lena better hai — Brazil nuts, sunflower seeds, mushroom regular diet mein shamil karo. Agar blood level genuinely low hai (test-confirmed) tabhi doctor-prescribed supplement lena chahiye. Supplement form mein selenomethionine sabse zyada bioavailable form hai.' },
    { _key: 'f9',  question: 'Kya selenium pregnancy mein safe hai?', answer: 'Haan, appropriate dose mein safe hai — in fact zaruri hai. Pregnancy mein RDA 60 mcg/day hai. Selenium ki kami se preeclampsia aur thyroid issues ka risk bad sakta hai. Lekin high-dose supplements avoid karein — 400 mcg UL se neeche rehna zaroori hai. "Pregnancy mein koi bhi supplement lene se pehle apna doctor zaroor consult karein."' },
    { _key: 'f10', question: 'Selenium aur warfarin saath le sakte hain?', answer: 'Caution zaroori hai — Selenium blood clotting ko slow karta hai aur warfarin (blood thinner) ka effect potentially badh sakta hai, jisse bleeding risk increase ho sakta hai. Agar aap warfarin le rahe hain aur selenium supplement shuru karna chahte hain to pehle apne doctor se zaroor baat karein. INR monitoring recommend ki jaati hai. (Source: WebMD Vitamins, Drugs.com)' },
    { _key: 'f11', question: 'Selenium se hair loss ruk sakta hai?', answer: 'Haan, agar hair loss ki wajah selenium ki kami hai — to supplement se hair loss ruk jaata hai. Lekin 2-3 mahine patience chahiye kyunki hair growth cycle slow hoti hai. Ek important baat: zyada selenium bhi hair loss karta hai — isliye dose sahi rakho. Pehle blood test se confirm karo ki deficiency hai ya nahi — phir supplement lo.' },
    { _key: 'f12', question: 'Selenium ka test kitne mein hota hai India mein?', answer: 'India mein Serum Selenium test ka price approximately ₹2,700–₹5,000 ke beech hai depending on city aur lab. Metropolis Mumbai mein ~₹2,915–₹3,450, Dr. Lal PathLabs mein ~₹3,100. Home collection bhi available hai. Test result 3-5 din mein aata hai.' },
    { _key: 'f13', question: 'Selenium aur zinc saath le sakte hain?', answer: 'Haan, generally safe combination hai. Zinc aur selenium dono immunity ke liye important hain aur commonly combined supplements mein milte hain. Dono ek saath le sakte hain. Agar separate lete hain to alag-alag lo — zyada dose dono ka avoid karo.' },
    { _key: 'f14', question: 'Selenium ki kami kitne time mein theek hoti hai?', answer: 'Blood levels 4-8 hafte mein normal range mein aana shuru hote hain. Symptoms (fatigue, immunity) mein 6-8 hafte mein fark feel hoga. Hair aur nails mein improvement 2-3 mahine mein dikhegi. Hashimoto\'s mein antibodies kam hone mein 3-6 mahine lagte hain. Sahi diet + supplement se level normal ho sakta hai — regular test se monitor karo.' },
    { _key: 'f15', question: 'Kya sirf khane se selenium ki zaroorat puri ho jaati hai?', answer: 'Zyada tar healthy log diet se hi kaafi selenium le lete hain — especially jo mixed diet (eggs, fish, whole wheat, sunflower seeds) khate hain. Purely vegetarian ya strict vegan log agar diverse diet na lein to risk hai. Thyroid patients, malabsorption cases, dialysis patients mein diet se pura nahi milta — unhe supplement ki zaroorat pad sakti hai. Agar concerned hain to blood test se level check karo.' },
    { _key: 'f16', question: 'Selenium ke liye kaunse Indian brands available hain?', answer: 'India mein selenium supplements commonly available brands: Zincovit, Supradyn, ANC (multi-vitamin ke roop mein), Selenium-ACE (Wassen), SelenoPrecise (Pharma Nord), aur several generic tabs pharmacies pe. Best hai ki doctor ya pharmacist se leke lo — prescribed dose ke hisab se. Koi bhi ek brand "best" nahi — dose aur form important hain.' },
    { _key: 'f17', question: 'Selenium aur Vitamin D saath le sakte hain?', answer: 'Haan, koi known interaction nahi hai — dono saath lena safe hai. Vitamin D fat-soluble hai (khane ke saath), selenium khane ke saath — dono subah ek saath le sakte hain.' },
    { _key: 'f18', question: 'Selenium se immunity kaise badhti hai?', answer: 'Selenium glutathione peroxidase banata hai jo antioxidant defense ka main enzyme hai. Ye white blood cells (T-cells, NK cells) ki efficiency badhata hai. Studies suggest karte hain ki adequate selenium level se viral infections se faster recovery hoti hai aur inflammatory response balance mein rehta hai. (Source: NCBI, Frontiers in Endocrinology)' },
    { _key: 'f19', question: 'Selenium Metallicum homeopathic medicine kya hai?', answer: 'Selenium Metallicum usi selenium element se banta hai jo trace mineral hai — homeopathic potentization ke baad ye body ki natural healing support karta hai. Classical homoeopathy mein ye debility, hair loss, low libido aur thyroid-related symptoms ke patients mein indicate hota hai. Potency aur dose sirf qualified homoeopath decide kar sakta hai — khud mat lo.' },
    { _key: 'f20', question: 'Kya roz Brazil nuts khane se selenium deficiency nahi hogi?', answer: 'Ek ya do Brazil nuts roz ek din ki selenium zaroorat poori kar dete hain — ye sahi hai. Lekin roz 5-6 ya zyada khana NAHI CHAHIYE kyunki toxicity ho sakti hai. 1-2 dane — bas itna kaafi hai. Agar Brazil nuts available nahi hain to sunflower seeds, mushroom, whole wheat roti se bhi India mein regular intake maintain ho sakti hai.' },
  ],

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Hypothyroidism',                    diseaseSlug: 'hypothyroidism',        isAvailable: false },
    { _key: 'ld2', diseaseName: 'Hashimoto\'s Thyroiditis',          diseaseSlug: 'hashimotos-thyroiditis', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Cardiomyopathy / Keshan Disease',   diseaseSlug: 'cardiomyopathy',         isAvailable: false },
    { _key: 'ld4', diseaseName: 'Infertility (Male)',                 diseaseSlug: 'male-infertility',       isAvailable: false },
  ],

  relatedVitamins: [
    { _key: 'rv1', vitaminName: 'Vitamin E', vitaminSlug: 'vitamin-e', isAvailable: true  },
    { _key: 'rv2', vitaminName: 'Zinc',      vitaminSlug: 'zinc',      isAvailable: true  },
    { _key: 'rv3', vitaminName: 'Iodine',    vitaminSlug: 'iodine',    isAvailable: false },
  ],
}

async function seed() {
  console.log('🌱 Seeding Selenium...')
  const result = await client.createOrReplace(selenium)
  console.log('✅ Selenium seeded:', result._id)
}

seed().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})
