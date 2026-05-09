import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-gallstones',
  _type: 'disease',
  title: 'Gallstones',
  hindiName: 'Pittashay Ki Pathri / Pitt Ki Pathri',
  slug: { _type: 'slug', current: 'gallstones' },
  category: 'Digestive',
  publishedAt: '2026-05-04T00:00:00.000Z',
  metaTitle: 'Gallstones Treatment in Hindi | Pitt Ki Pathri | Homeopedia',
  metaDescription: 'Gallstones (pitt ki pathri) ke causes, signs, surgery alternatives aur homeopathic treatment – simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'Gallstones yaani pittashay ki pathri – ye tab banti hain jab aapke gallbladder (pitt ki theli) ke andar cholesterol, bile salts ya calcium ke crystals jamne lagte hain aur dheere dheere stone ka roop le lete hain. Ye stone chane ke daane jaisi chhoti bhi ho sakti hai aur nimbu jaisi badi bhi. Bahut se logo ko pata hi nahi chalta ki unhe stones hain – lekin jab ye bile duct (pitt nali) mein phas jaati hai, tab pet mein aisa dard hota hai jise log "gall attack" kehte hain. India mein ye bimari bahut common hai, khaaskar mahilaon aur 40+ umar ke logo mein.',

  quickFacts: {
    whatItIs: 'Gallbladder mein cholesterol, bile salts ya calcium ke crystals ka jama hona – chhoti se badi tak size hoti hain; silent bhi ho sakti hain ya severe gall attack de sakti hain',
    howCommon: 'India mein roughly 3-5 crore log affected; general population mein 4-7% adults; mahilaon mein purushon se 2-3 guna zyada rate',
    treatmentDuration: 'Chhoti stones ke liye homeopathic treatment 6-18 mahine; symptom relief aksar 4-8 weeks mein shuru hoti hai',
    successRate: 'Individualized homeopathic treatment se 60-70% patients mein pehle 3 mahine mein meaningful symptom relief – diet compliance ke saath results consistently better',
  },

  causes: [
    'Bile mein cholesterol ka level zyada hona – liver zyada cholesterol banaye aur bile usse properly dissolve na kar sake to crystals jamne lagte hain',
    'Bile mein bilirubin ka excess – liver disease, blood disorders ya infection ki wajah se bilirubin badhta hai aur pigment stones banti hain',
    'Gallbladder ka sahi se khali na hona – agar gallbladder poori tarah empty nahi hota to bile concentrated ho jaata hai aur stone forming chances badhte hain',
    'Long gaps between meals ya crash dieting – bhookha rehne se gallbladder ko squeeze karne ka mauka nahi milta, bile jama hoti rehti hai',
    'High fat + low fiber diet – desi ghee, maida, fried food ka regular use bile composition bigaadta hai',
    'Hormonal changes – pregnancy ya birth control pills bile mein cholesterol increase karti hain, mahilaon mein risk zyada hone ka ye bada reason hai',
  ],

  riskFactors: [
    'Mahilayein – especially 40+ umar ke baad ya jinhe multiple pregnancies hui hain; estrogen bile cholesterol badhata hai',
    'Motapaa (Obesity) – body mein extra cholesterol liver se bile mein jaata hai, gallstone risk significantly badhta hai',
    'Rapid weight loss ya crash diet karne wale – thodi si time mein zyada weight ghatane se gallbladder properly contract nahi karta',
    'Diabetes ke patients – high triglycerides gallstone risk badhate hain, insulin resistance bhi bile composition affect karta hai',
    'Family history – agar maa-baap ya bhai-behan ko pathri hui ho to risk 2x ho jaata hai, genetic predisposition hai',
    'Sedentary lifestyle – zyada baithna, exercise na karna; gallbladder sluggish ho jaata hai aur bile jama hoti hai',
  ],

  complications: [
    'Cholecystitis – gallbladder mein infection aur sujan, jisme immediate hospitalization ki zaroorat hoti hai; bukhar aur severe pain ke saath aata hai',
    'Choledocholithiasis – stone bile duct mein phas jaaye to jaundice (peeliya) ho sakta hai – ye serious sign hai, turant doctor ke paas jaayein',
    'Pancreatitis – pathri pancreatic duct block kare to pancreas mein severe inflammation, jo bahut serious condition hai aur ICU care lag sakti hai',
    'Gallbladder cancer – bahut rare, lekin long-term untreated stones mein risk slightly badhta hai; regular monitoring isliye zaroori hai',
  ],

  types: [
    {
      _key: 'type-cholesterol',
      name: 'Cholesterol Stones (Sabse Common – 80% Cases)',
      description: 'Jab liver zyada cholesterol banata hai aur bile use dissolve nahi kar paata, to wo jama ho jaata hai. Yellow-green color ki hoti hain. Unhealthy diet aur fast weight loss inka main reason hai. Homeopathic treatment mein in stones mein dissolution ya shrinkage sabse zyada possible hai.',
    },
    {
      _key: 'type-pigment',
      name: 'Pigment Stones (Black aur Brown)',
      description: 'Ye tab banti hain jab bile mein bilirubin (ek waste product) ki matra bahut zyada ho jaati hai. Liver disease, anemia (khoon ki kami) ya infection ki wajah se banti hain. Chhoti aur kaafi hard hoti hain. Black pigment stones liver disease mein, brown stones bile duct infection mein zyada hoti hain.',
    },
    {
      _key: 'type-mixed',
      name: 'Mixed Stones (Milaajula)',
      description: 'Cholesterol aur pigment dono ka combination. India mein ye type bhi common hai – especially jin logo ko recurrent infections hote hain. Inhe manage karna thoda complex hota hai kyunki dono components ko address karna padta hai.',
    },
    {
      _key: 'type-silent',
      name: 'Silent Stones (Asymptomatic)',
      description: 'Koi dard nahi, koi sign nahi – lekin pathri exist karti hai. Aksar ultrasound check-up mein achanak pata chalta hai. Treatment tabhi zaroori hoti hai jab symptoms shuru hoon ya complications ka risk ho. "Watchful waiting" doctor ki guidance mein perfectly safe hai in patients ke liye.',
    },
  ],

  symptoms: [
    {
      _key: 'sym-attack',
      category: 'Gall Attack (Biliary Colic) – Sabse Common Signs',
      items: [
        'Sudden, severe dard upper right abdomen ya chest ke beech mein – khaana khaane ke 1-2 ghante baad aata hai, khaaskar oily food ke baad',
        'Dard back tak ya right shoulder tak jaata hai – ise "referred pain" kehte hain, gallstone ka classic sign hai',
        'Attack 15 min se lekar 4-5 ghante tak chal sakta hai, aur suddenly waise hi band ho jaata hai jaise shuru hua tha',
        'Nausea (ji machlana) aur vomiting saath mein hoti hai – antacid se koi relief nahi milta',
      ],
    },
    {
      _key: 'sym-digestive',
      category: 'Digestive Symptoms – Roz Ka Discomfort',
      items: [
        'Fatty ya fried food khaane ke baad bloating aur heaviness – khana hazam nahi hota feeling',
        'Acidity, gas aur belching jo regular medicine se bhi theek nahi hoti – ye gallstone ka early sign ho sakta hai',
        'Upper abdomen mein dull ache – khaas kar raat ko ya khali pet par',
        'Kabhi kabhi loose motions ya pale-colored stool – bile flow disturb hone ki wajah se',
      ],
    },
    {
      _key: 'sym-chronic',
      category: 'Silent / Chronic Signs',
      items: [
        'Koi dard nahi, sirf ultrasound mein pathri milti hai – asymptomatic ya silent stones',
        'Halki-halki weakness aur bhookh kam lagna – chronic bile flow disturbance ki wajah se',
        'Skin ya aankhon ka thoda yellowish dikhna (mild jaundice) – ye serious sign hai, turant doctor ke paas jaayein, delay mat karein',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '60-70%',
    avgTreatmentPeriod: '6 se 18 mahine (size aur type pe depend)',
    citation: 'Journal of Research in Homoeopathy (CCRH) | Digestive Disorder Studies | 2014–2019 | www.ccrhindia.nic.in',
    keyFindings: [
      'Cholesterol stones mein symptomatic relief aur bile flow improvement homeopathic treatment group mein placebo se better raha',
      'Recurrent gall attacks ki frequency treatment ke 6 mahine baad kaafi kam hui – patients ke daily life quality mein significant improvement',
      'Quality of life scores (pain, digestion, energy) mein improvement documented ki gayi hai; diet compliance ke saath results consistently better',
    ],
  },

  homeopathyBenefits: [
    'Homeopathy gallbladder aur liver ki functioning ko regulate karne ki koshish karta hai – bile production, gallbladder motility aur cholesterol metabolism teeno ko address karke. Small to medium sized stones mein, specially jab surgery avoid karni ho ya symptoms manage karni ho, homeopathic treatment meaningful improvement de sakta hai. Ye approach aapki overall constitution – aapka digestion, stress level, eating pattern – sab ko ek saath dekh ke individualized treatment deta hai, sirf pathri ko nahi.',
    'Surgery ka ek alternative option – especially chhoti stones mein jab patient operation se bachna chahta ho ya anaesthesia risk ho',
    'Gall attack ki frequency aur intensity dono kam hoti hain – recurrent attacks se relief',
    'Digestive symptoms – bloating, acidity, heaviness – mein fast relief; pehle 4-8 weeks mein improvement notice hoti hai',
    'Liver ki bile-producing capacity ko regulate karta hai – overall liver health bhi improve hoti hai saath mein',
    'Long-term recurrence (dobara pathri banana) ki tendency kam hoti hai – root cause pe kaam karta hai',
  ],

  medicines: [
    {
      _key: 'med-chelidonium',
      name: 'Chelidonium Majus',
      bestFor: 'Liver-related gallstone symptoms, right side dard, jaundice',
      keyIndications: [
        'Right side ke neeche ya right shoulder mein dard – classic gallstone referred pain',
        'Skin ya aankhein yellowish ho rahi ho – jaundice ke signs',
        'Liver aur bile duct pe directly act karta hai – bile flow improve karta hai',
        'Gallstone patients ki liver-related symptoms ke liye homeopathy mein sabse zyada use hone wali medicine',
      ],
    },
    {
      _key: 'med-calcarea-carb',
      name: 'Calcarea Carbonica',
      bestFor: 'Obese, anxious patients; fatty food intolerance; calcium deposits',
      keyIndications: [
        'Motape se grast, asaani se thakne wale, zyada paseena aane wale patients',
        'Fatty food digest nahi hoti aur jo easily anxious ho jaate hain',
        'Gallbladder mein calcium deposits aur cholesterol imbalance dono address karne ki tendency',
        'Constitution-based medicine – poori picture dekhke choose ki jaati hai',
      ],
    },
    {
      _key: 'med-lycopodium',
      name: 'Lycopodium Clavatum',
      bestFor: 'Bloating, gas, right side dard, evening worsening',
      keyIndications: [
        'Khaane ke baad pet mein bahut bloating, gas, aur right side dard',
        'Shaam 4-8 baje symptoms ka worsening – ye Lycopodium ka khas indication hai',
        'Liver aur digestive system dono ka tonic – bile secretion regulate karta hai',
        'Flatulence se turant relief deta hai',
      ],
    },
    {
      _key: 'med-berberis',
      name: 'Berberis Vulgaris',
      bestFor: 'Radiating dard, dark urine, gallbladder + kidney dono affected',
      keyIndications: [
        'Dard radiating hota hai – pet se back tak ya thighs tak',
        'Saath mein urine dark ya thick hoti hai',
        'Gallbladder aur kidney dono pe act karta hai – dual action',
        'Bile movement improve karta hai aur stone se related spasmodic pain mein relief',
      ],
    },
    {
      _key: 'med-nux-vomica',
      name: 'Nux Vomica',
      bestFor: 'Stress, spicy/oily diet, liver detox; modern lifestyle',
      keyIndications: [
        'Office-going, stress mein rehne wale, zyada spicy/oily khaana khaane wale',
        'Raat ko pet dard aur subah constipation bhi rehti hai',
        'Liver detox aur digestive spasm dono address karta hai',
        'Is type ke patients mein gallbladder ka tanaav kam karne mein maddagar',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di-fiber',
      category: 'High-Fiber Foods',
      emoji: '🌾',
      items: [
        'Oats aur daliya – bile mein cholesterol absorb karta hai, stone forming chances kam karta hai',
        'Brown rice – fiber-rich, digestive system pe load nahi padta, gallbladder-friendly',
        'Sabut moong dal – protein + fiber dono – gallbladder ke liye best dal',
      ],
    },
    {
      _key: 'di-fruits-veg',
      category: 'Fresh Fruits & Vegetables',
      emoji: '🥦',
      items: [
        'Lauki (bottle gourd) – alkaline, liver ko cool rakhti hai, gallbladder pe bilkul pressure nahi',
        'Beet/chukander – liver detox ke liye best, bile production naturally improve karta hai',
        'Nimbu pani – bile ko thin rakhne mein help karta hai, ek glass subah khali pet faydemand',
        'Seb (apple) – pectin fiber bile mein cholesterol bind karta hai, daily khaayein',
      ],
    },
    {
      _key: 'di-protein',
      category: 'Healthy Fats & Proteins',
      emoji: '🐟',
      items: [
        'Olive oil – small amount mein – gallbladder ko regularly squeeze karne ke liye stimulate karta hai',
        'Fish (macchli) – omega-3 fatty acids gallstone risk genuinely kam karte hain',
        'Tofu / paneer (kam fat wala) – protein ka achha source jo gallbladder pe stress nahi dalta',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da-fried',
      category: 'Fried & Fatty Foods',
      emoji: '🚫',
      items: [
        'Samosa, pakode, puri – high saturated fat bile composition bigaadta hai aur attack trigger karta hai',
        'Fast food / junk food – hidden trans fats gallbladder contraction bigaadti hain',
        'Full-fat dairy (malai, makhan, paneer daily) – cholesterol spike; low-fat alternatives choose karein',
      ],
    },
    {
      _key: 'da-sugar',
      category: 'Refined Carbs & Sugar',
      emoji: '🍬',
      items: [
        'Maida se bani cheezein (bread, biscuit, naan) – blood sugar spike karta hai, bile mein cholesterol badh jaata hai',
        'Mithai aur sweets daily – excess sugar liver mein fat bana deti hai jo gallstone risk badhata hai',
        'Cold drinks aur packaged juices – fructose aur preservatives liver pe load daalte hain',
      ],
    },
    {
      _key: 'da-gas',
      category: 'Gas-Forming Foods',
      emoji: '💨',
      items: [
        'Rajma, chole, lobiya – gas banate hain aur gallbladder mein pressure feel hota hai',
        'Cauliflower (gobhi) aur cabbage – in patients mein bloating aur pain trigger kar sakte hain',
        'Alcohol – bile flow disturb karta hai aur liver ko directly nuksaan karta hai',
      ],
    },
  ],

  dos: [
    'Roz 8-10 glass paani peeyein – bile thin rehti hai aur crystal formation kam hoti hai; coconut water bhi bahut faydemand',
    'Chhote-chhote meals lein – ek baar mein zyada khaane ke bajaye din mein 4-5 baar thoda khaayein taaki gallbladder regularly contract kare',
    'Roz 30 min moderate exercise karein – brisk walk, yoga – weight control ke saath bile flow bhi better hota hai',
    'Homeopathic treatment consistently lein – gallstones mein results time lete hain, 3-6 mahine tak regular treatment zaroori hai, beech mein band mat karein',
    'Yearly ultrasound karwaate rehein – stone size track karna important hai especially jab surgery avoid karni ho',
  ],

  donts: [
    'Crash diet ya long fasting bilkul mat karein – bhookhe rehne se gallbladder empty nahi hota aur bile concentrate ho jaati hai, attack ka risk badhta hai',
    'Fried, oily, fatty food ka daily use – ye sabse bada trigger hai gall attack ka; ek badi oily meal bhi attack start kar sakti hai',
    'Self-medication mat karein – koi bhi painkiller ya bile salts bina doctor advice ke mat lein; self-treatment se bile duct stimulate ho sakti hai',
    'Symptoms ignore mat karein – agar dard baar baar aa raha hai to ultrasound zaroori hai taaki stone size monitor ho sake; jaundice emergency hai',
    'Sudden rapid weight loss mat karein – agar weight lose karna hai to dhire dhire karein (max 500g per week safe hai); crash dieting gallstone ka bada risk factor hai',
  ],

  seasonalCare: {
    summer: 'Body dehydrated ho jaati hai – bile thick ho jaati hai aur stone forming chances badh jaate hain. Roz 10-12 glass paani peeyein – coconut water bhi bahut faydemand hai. Heavy oily lunch avoid karein – halka tiffin lo aur shaam ko main meal rakhein. Anaar, khira, nimbu paani – in fruits se hydration aur bile thinning dono hoti hai.',
    monsoon: 'Fried food (bhutta, pakode) ki craving zyada hoti hai – is season mein gall attacks zyada report hote hain. Street food bilkul avoid karein – infection ka risk bhi hai jo gallbladder symptoms worsen karta hai. Haldi wala doodh ya haldi-adrak chai le sakte hain – anti-inflammatory properties hain.',
    winter: 'Log physically less active ho jaate hain – gallbladder sluggish ho jaata hai. Roz subah 20-30 min walk zaroori – gallbladder ko regularly contract karna zaroori hai. Rich festive food (mithaaiyaan, ghee wale pakwaan) – portions control karein – ek din ki heavy eating bhi gall attack trigger kar sakti hai. Warm soups aur daliya prefer karein.',
  },

  faqs: [
    {
      _key: 'faq-1',
      question: 'Gallstones ka dard exactly kahan hota hai aur kaise pehchanein?',
      answer: 'Gallbladder ka dard usually upper right abdomen mein hota hai – bilkul ribs ke neeche. Ye dard aksar khaana khaane ke 1-2 ghante baad shuru hota hai, khaaskar agar fatty ya fried food khaaya ho. Kuch patients ko ye dard right shoulder ya back tak jaata hua feel hota hai – ise "referred pain" kehte hain. Ye attack 15 minute se lekar 4-5 ghante tak reh sakta hai aur achanak khatam bhi ho jaata hai. Normal acidity ka dard alag feel hota hai – wo burning type ka hota hai aur antacid se theek ho jaata hai. Gallstone dard mein antacid kaam nahi karta.',
    },
    {
      _key: 'faq-2',
      question: 'Gallstones surgery ke bina theek ho sakti hai – kya ye sach hai?',
      answer: 'Haan – chhoti size ki cholesterol stones mein surgery ke bina improvement possible hai. Homeopathic treatment stones ko dissolve ya shrink karne mein maddagar ho sakte hain. Ye process slow hai – 6 se 18 mahine lag sakte hain – lekin jo patients surgery nahi karna chahte ya jinhe anaesthesia risk hai, unke liye ye ek genuine option hai. Badi stones (15mm se zyada) ya blocked bile duct mein surgical intervention zaroori hai – us situation mein delay karna theek nahi.',
    },
    {
      _key: 'faq-3',
      question: 'Kya gallstones hone ka matlab hai ki surgery zaroori hi hai?',
      answer: 'Bilkul zaroori nahi. Jo patients "silent stones" hain – yaani koi symptom nahi – unhe aksar surgery ki zaroorat hi nahi hoti. Doctor "watchful waiting" recommend karta hai. Jo patients symptoms feel karte hain unke liye bhi pahle non-surgical options try ki jaati hain. Surgery tab recommend hoti hai jab: stones baar baar attack de rahi ho, stone bile duct mein phas gayi ho, ya infection ho gaya ho.',
    },
    {
      _key: 'faq-4',
      question: 'Gallstones mein kaun sa dard hota hai – gas ka ya stone ka, kaise samjhein?',
      answer: 'Gas ka dard: poore pet mein hota hai, gas nikal jaane ke baad better ho jaata hai, antacid se relief milta hai. Stone ka dard (biliary colic): right side upper abdomen mein concentrate rehta hai, khaane ke baad badhta hai, khaas kar oily food se, antacid se kuch nahi hota, aur back ya shoulder mein bhi jaata hai. Agar dard ke saath nausea/vomiting bhi ho aur 30 min se zyada rahe – to ye stone attack ki possibility zyada hai, doctor se milein.',
    },
    {
      _key: 'faq-5',
      question: 'Gallstone attack ke time ghar pe kya karein – kya koi immediate relief possible hai?',
      answer: 'Gall attack mein ghar pe: kuch mat khaayein – khali pet rehna best hai jab tak dard hai. Hot water bag (warm compress) right side pe rakhne se muscle spasm thodi kam hoti hai. Nimbu paani ya plain warm water peeyein. Agar dard 30 min se zyada rahe, bukhar ho, ya urine dark yellow/orange ho – turant hospital jaayein, ghar pe manage karne ki koshish mat karein. Doctor se prescribed antispasmodic medication already ghar mein rakhein agar aapko recurrent attacks aate hain.',
    },
    {
      _key: 'faq-6',
      question: 'Kya gallstones mein operation ke baad dobara pathri ban sakti hai?',
      answer: 'Agar gallbladder hi nikaal diya gaya hai (cholecystectomy) to gallstones dobara nahi ban sakti. Lekin bile duct mein stones phir se form ho sakti hain – isko "recurrent choledocholithiasis" kehte hain aur ye relatively rare hai. Agar homeopathic ya conservative treatment se gallbladder bacha liya aur pathri manage ki, to lifestyle changes nahi ki to stones dobara ban sakti hain – isliye treatment ke baad bhi diet aur lifestyle change permanent karna chahiye.',
    },
    {
      _key: 'faq-7',
      question: 'Kya gallstones pregnancy mein zyada hoti hain aur kya homeopathy safe hai?',
      answer: 'Haan – pregnancy mein gallstone risk genuine tarike se badhta hai. Estrogen hormone bile mein cholesterol badhata hai, aur progesterone gallbladder ki movement slow kar deta hai – dono milake stone-friendly environment bana dete hain. Homeopathic medicines pregnancy mein generally safe consider ki jaati hain kyunki dilutions bahut high hoti hain – lekin koi bhi medicine bina qualified homoeopath ke prescription ke lena galat hai. Conservative management se zyatar pregnant patients ko surgery avoid karni padti hai.',
    },
    {
      _key: 'faq-8',
      question: 'Gallstones mein kya khana chahiye aur kya nahi – ek complete guide?',
      answer: 'KHAAYEIN: High-fiber foods – oats, brown rice, sabut daalein; fresh vegetables – lauki, tori, palak; fruits – seb, nashpati, nimbu; low-fat protein – fish, tofu, boiled egg white; olive oil thodi quantity mein. AVOID KAREIN: Fried food – samosa, puri, pakode; full-fat dairy – malai, ghee daily; maida products; alcohol; cold drinks; bakery items. Golden rule: ek baar mein zyada mat khaayein – small frequent meals best hain. Khali pet rehna aur crash diet dono equally harmful hain.',
    },
    {
      _key: 'faq-9',
      question: 'Gallstone aur fatty liver mein kya connection hai?',
      answer: 'Bahut strong connection hai. Fatty liver aur gallstones dono often ek saath hote hain – common underlying reason hai: poor diet, obesity, insulin resistance. Fatty liver mein cholesterol metabolism disturbed ho jaata hai, jisse bile composition bigadti hai aur stone forming chances badhte hain. Jo log fatty liver ka treatment karwa rahe hain, unhe gallstone screening bhi karwana chahiye. Homeopathic treatment dono conditions ko saath mein address kar sakta hai – liver function improve karke bile ko normal karne ki koshish karta hai.',
    },
    {
      _key: 'faq-10',
      question: 'Gallbladder nikaalne ke baad zindagi normal hoti hai kya?',
      answer: 'Zyatar logon ke liye – haan. Gallbladder nikaalne ke baad liver seedha bile banata rahta hai aur wo continuously intestine mein jaati rehti hai. Kuch log pehle kuch mahine loose motions ya diarrhea report karte hain fatty food khaane ke baad – ye temporary hota hai. Ek subset of patients (~10-15%) "post-cholecystectomy syndrome" feel karte hain – matlab pet mein discomfort surgery ke baad bhi rehta hai. Iske liye homeopathic treatment bahut effective hai. Overall, long-term quality of life surgery ke baad achhi rehti hai.',
    },
    {
      _key: 'faq-11',
      question: 'Gallstone aur acidity mein kya fark hai – kaise jaanein ki mujhe kis cheez ki problem hai?',
      answer: 'Acidity ka dard: chest ya upper-middle stomach mein burning, khatta aana, antacid se better. Gallstone ka dard: right upper stomach, khaane ke baad badhna, khaas kar oily food se, antacid se koi fark nahi, back tak jaata hai. Best way – ultrasound. Ye affordable test hai aur clearly bata deta hai ki pathri hai ya nahi. Bahut se log saalon tak acidity ki medicine lete rehte hain jab actually unhe gallstone hota hai – agar treatment se koi fark nahi pad raha to ultrasound zaroor karwayein.',
    },
    {
      _key: 'faq-12',
      question: 'Bacchon mein gallstones hoti hain kya?',
      answer: 'Haan, hoti hain – though adults se kam. Bacchon mein gallstones ke main reasons hain: hemolytic anemia (blood disorder jisme RBC jaldi toot jaate hain), obesity in children, aur kuch genetic conditions. Pigment stones bacchon mein zyada common hain. Agar bacha pet dard complain karta rahe khaane ke baad – especially right side – to paediatrician se milein aur ultrasound karwayein. Bacchon mein homeopathic treatment particularly helpful hai kyunki invasive procedures se bachna chahte hain.',
    },
    {
      _key: 'faq-13',
      question: 'Kya yoga aur exercise gallstones mein help karte hain?',
      answer: 'Haan – regular moderate exercise gallstone risk genuinely kam karta hai aur existing symptoms manage karne mein help karta hai. Studies suggest karte hain ki sedentary lifestyle ek major risk factor hai. Roz 30 min brisk walk ya cycling se bile flow better hoti hai aur gallbladder regularly contract karta hai. Yoga mein – Pawanmuktasana, Ardha Matsyendrasana, aur Bhujangasana liver aur gallbladder ke liye beneficial maane gaye hain. Intense exercise ki bajay moderate activity better hai, especially jab pain ho. Dard ke time rest karein.',
    },
    {
      _key: 'faq-14',
      question: 'Gallstones mein homeopathic treatment kitne time mein kaam karta hai?',
      answer: 'Pehle 4-8 weeks mein symptoms relief – pain frequency, bloating, heaviness – mein improvement notice hoti hai. Stone size mein change dekhne ke liye 3-6 mahine lagte hain – aur ye bhi sirf chhoti cholesterol stones mein zyada possible hai. Treatment ke beech regular ultrasound se progress track hoti hai. Jo log consistently treatment lete hain aur diet bhi control karte hain, unme results bahut better hote hain. Ek important baat – agar kisi bhi point pe severe pain, jaundice ya fever aaye to turant conventional doctor ke paas jaayein.',
    },
    {
      _key: 'faq-15',
      question: 'Gallstone mein jaundice kyon hota hai?',
      answer: 'Jab gallstone bile duct mein phas jaati hai, to bile ka flow rok jaata hai. Is blocked bile se bilirubin khoon mein mix ho jaata hai – jisse skin aur aankhein yellow ho jaati hain. Ise "obstructive jaundice" kehte hain aur ye ek serious sign hai – turant doctor ke paas jaayein. Is situation mein sirf homeopathy sufficient nahi hai – medical/surgical intervention zaroori hoti hai. Ye type ka jaundice hepatitis se alag hota hai – cause alag hai, treatment bhi alag.',
    },
    {
      _key: 'faq-16',
      question: 'Gallstones mein konsa test zaroori hai – MRI chahiye ya ultrasound kaafi hai?',
      answer: 'Zyatar cases mein abdominal ultrasound hi kaafi hota hai. Ye affordable, radiation-free, aur accurate test hai – 95% se zyada accuracy ke saath gallstones detect karta hai. MRCP (Magnetic Resonance Cholangiopancreatography) tab zaroorat padti hai jab: doctor ko lagta hai stone bile duct mein hai, ya diagnosis confirm nahi ho rahi sirf ultrasound se. Blood tests mein LFT (Liver Function Test) aur CBC bhi karte hain complications check karne ke liye. Bina symptoms ke sirf MRI karwana zaroorat nahi – doctor ki advice se tests karwayein.',
    },
    {
      _key: 'faq-17',
      question: 'Kya oil pulling ya gharelu nuskhe gallstones nikaalne mein kaam karte hain?',
      answer: '"Olive oil + nimbu juice flush" – ye internet pe bahut popular hai, lekin scientific evidence iske support mein nahi hai. Jo cheez stool mein nikalta hai wo stones nahi hota – research mein paya gaya hai ki wo soap-like compounds hote hain jo olive oil se bante hain. Isse kabhi kabhi ulta side effect ho sakta hai – blocked duct stimulate hone ka risk. Home remedies mein jo actually helpful hain: adequate hydration, fiber-rich diet, small meals, regular exercise. Kisi bhi "flush" ya "detox" se pehle apne doctor se baat karein.',
    },
    {
      _key: 'faq-18',
      question: 'Gallstones mein weight loss kaise karein safely?',
      answer: 'Gallstone patients ke liye weight loss zaroorat bhi hai aur risk bhi. Safe rate: 0.5 kg se max 1 kg per week – isse zyada fast weight loss gallstone risk badhata hai. Kya karein: chhoti meals, high fiber, low saturated fat diet; roz 30-45 min moderate exercise; khali pet rehne se bachein. Kya na karein: liquid diets, crash diets, meal skipping – ye sab bile concentrate kar dete hain. Agar weight loss program shuru karna hai to doctor ya dietitian se milke plan banwayein – especially agar already stones hain to monitoring zaroori hai.',
    },
    {
      _key: 'faq-19',
      question: 'Gallstones detect hone ke baad kitne time tak wait karna safe hai surgery se pehle?',
      answer: 'Silent stones (koi symptom nahi): "watchful waiting" perfectly safe hai – doctor yearly ultrasound se monitor karta rehta hai. Mild occasional attacks: non-surgical options try karne ka time hai – homeopathic treatment, diet changes – 6-12 months tak. Frequent attacks (mahine mein ek se zyada): surgeon se milein – conservative treatment se aage jaane ka time aagaya. Jaundice, fever, ya severe uncontrolled pain: ye emergency hai – delay nahi karna chahiye bilkul. Apne doctor ki guidance sabse important hai yahan.',
    },
    {
      _key: 'faq-20',
      question: 'Khana khaane ke baad hamesha pet mein dard aur gas hoti hai – kya ye gallstones ki wajah se ho sakta hai?',
      answer: 'Ho sakta hai – ye ek common early sign hai. Gallstones hone par especially fatty ya fried food ke baad discomfort zyada hoti hai kyunki gallbladder ko hard contract karna padta hai bile release karne ke liye – aur stone se ye process irritating ho jaati hai. Lekin sirf ye symptom se confirm nahi hota – IBS, fatty liver, acid reflux, aur food intolerance mein bhi aisa hota hai. Ek simple ultrasound se clarity aa jaati hai. Agar 3-4 weeks se symptoms hain aur gas ki medicines kaam nahi kar rahi – ultrasound zaroor karwayein.',
    },
    {
      _key: 'faq-21',
      question: 'Gallstones mein doodh, dahi, paneer le sakte hain kya?',
      answer: 'Low-fat dairy le sakte hain – full fat nahi. Skimmed milk – chalega. Low-fat dahi (curd) – actually probiotic hone ki wajah se digestive health ke liye helpful hai. Paneer – thodi quantity mein, full fat nahi. Cow ghee daily use – avoid karein. Malai, butter, cream – avoid. Rule simple hai: fat content jitna kam utna better gallbladder ke liye.',
    },
    {
      _key: 'faq-22',
      question: 'Gallstones wale patients Navratri/Ramzan fasting mein diet kaise manage karein?',
      answer: 'Long fasting gallstone patients ke liye risky hai kyunki bile gallbladder mein concentrate hoti rehti hai without regular meals. Fasting mein bhi regular intervals pe kuch khayein – fruits, nuts, chhoti quantity mein. Zyada se zyada paani piyen. Ek hi baar mein bada heavy meal bilkul avoid karein. Agar roza/vrat ke baad kabhi gall attack aaya hai pehle – apne homoeopath/doctor se pehle milein aur modified fasting plan banwayein. Religious practice chhodni zaroori nahi – bas thoda adjust karna padega.',
    },
    {
      _key: 'faq-23',
      question: 'Kya stress se gallstones ka dard badhta hai?',
      answer: 'Haan – stress digestive system pe seedha impact dalta hai. Stress hormones (cortisol) bile duct ki muscles ko affect karte hain aur gallbladder motility disturb hoti hai. Kai patients notice karte hain ki exams, kaam ka pressure, ya family tension ke time mein gall attacks zyada hote hain. Stress management isliye gallstone treatment ka ek important part hai. Roz 15-20 min deep breathing, meditation, ya yoga – ye sirf mental health ke liye nahi, directly gallbladder function ke liye bhi beneficial hai. Homeopathic treatment mein bhi patient ki mental state aur stress response consider kiya jaata hai.',
    },
  ],

  relatedDiseases: [
    { _type: 'reference', _ref: 'disease-fatty-liver' },
    { _type: 'reference', _ref: 'disease-acidity' },
    { _type: 'reference', _ref: 'disease-ibs' },
    { _type: 'reference', _ref: 'disease-gastritis' },
    { _type: 'reference', _ref: 'disease-kidney-stone' },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Gallstones created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/gallstones')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
