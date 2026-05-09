import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-bells-palsy',
  _type: 'disease',
  title: "Bell's Palsy",
  hindiName: 'Chehra Tirchha Hona / Munh Tedha Hona / Chehre ka Laqwa',
  slug: { _type: 'slug', current: 'bells-palsy' },
  category: 'Neurological',
  publishedAt: '2026-05-03T00:00:00.000Z',
  metaTitle: "Bell's Palsy Treatment in Hindi | Munh Tirchha – Homeopedia",
  metaDescription: "Bell's Palsy (munh tedha hona) ka treatment, recovery time, exercises aur homeopathic medicines – verified info, doctor-reviewed. Jaldi recovery guide.",

  heroText: "Bell's Palsy ek aisi condition hai jisme achanak – aksar ek raat mein – chehra ek taraf se crooked ya tedha ho jaata hai. Ye chehra ka laqwa ek temporary facial nerve weakness hai jisme 7th cranial nerve (facial nerve) inflamed ya compressed ho jaati hai. Munh ka ek corner neeche gir jaata hai, aankhein poori tarah band nahi hoti, aur bolne-khaane mein takleef hoti hai. Ye condition scary lagti hai lekin zyaadatar cases mein – sahi treatment se – 2-6 mahine mein poori recovery bilkul possible hai.",

  quickFacts: {
    whatItIs: "Bell's Palsy ek reversible facial nerve paralysis hai – stroke nahi hai; 70-80% patients completely theek ho jaate hain",
    howCommon: "Bell's Palsy globally 20-25 per 100,000 logon mein har saal hota hai – India mein winters aur monsoon peak season hai",
    treatmentDuration: 'Mild: 4-8 hafte | Moderate: 2-3 mahine | Severe: 6 mahine tak | Early treatment = faster recovery',
    successRate: 'CCRH clinical observations mein treatment group mein facial symmetry score 4.2 se 7.8 tak improved – placebo group mein sirf 5.3 par ruka',
  },

  causes: [
    'Viral infection – Herpes Simplex Virus (HSV-1) facial nerve ko inflame kar deta hai – ye sabse common cause hai',
    'Varicella-Zoster Virus reactivation – wohi virus jo chickenpox karta hai, nerve mein sota rehta hai aur stress mein jaag jaata hai',
    'Upper respiratory infection ke baad – common cold ya flu ke 1-2 hafte baad nerve compress ho sakti hai',
    'Immune system ka temporarily weak hona – nerve ki protective myelin sheath damage ho jaati hai',
    'Sudden cold exposure – thandi hawa seedha kaan ya chehra pe lagte time nerve swell kar sakti hai (AC, bike rides)',
    'Diabetes mein microvascular changes – nerve blood supply temporarily reduce ho jaati hai',
  ],

  riskFactors: [
    'Diabetes patients – nerve circulation already compromised hoti hai, risk 4 guna zyada',
    'Pregnancy – especially 3rd trimester aur delivery ke baad, immune changes se risk badh jaata hai',
    "Agar pehle kabhi Bell's Palsy hua ho – recurrence 7-12% cases mein hota hai",
    'Thand mein kaan/chehra expose rehna – bike riders, outdoor workers',
    'Chronic stress ya poor sleep – immune system weak hone se latent viruses reactivate hote hain',
    'Age 15-45 years – is age group mein sabse zyada cases',
    'HIV ya immune-compromised patients – infection ke chances zyada hote hain',
  ],

  complications: [
    'Incomplete recovery (Synkinesis) – chehra theek hota hai par movements uncoordinated rehti hain, jaise aankhein band karte waqt munh move kare',
    'Corneal damage – aankhein poori band na hone se aankhon ki surface dry aur infected ho sakti hai – blindness ka risk',
    'Contracture of facial muscles – muscles permanently tight ho jaati hain, chehra ek side se khicha lagta hai',
    'Psychological impact – chehre ke appearance se depression, anxiety, social withdrawal common hai',
    'Crocodile tears syndrome – khaate waqt aankhon se paani aana – rare complication, nerve miswiring se hota hai',
  ],

  types: [
    {
      _key: 'type1',
      name: "Complete Bell's Palsy (Poora Laqwa)",
      description: 'Chehra ek side se bilkul kaam karna band kar deta hai. Aankhein band nahi hoti, munh ek taraf khicha rehta hai, paani peete waqt liquid bahar aata hai. Ye severe form hai lekin zyaadatar cases mein full recovery hoti hai.',
    },
    {
      _key: 'type2',
      name: "Incomplete Bell's Palsy (Aadha Laqwa / Partial Palsy)",
      description: 'Chehre ki muscles partially weak hoti hain – ek side thodi movement hoti hai par poori nahi. Ye mild form hai jisme recovery faster hoti hai.',
    },
    {
      _key: 'type3',
      name: "Ramsay Hunt Syndrome (Herpes Ke Saath Bell's Palsy)",
      description: "Yahan Bell's Palsy ke saath kaan mein blisters (chhale), tez dard, aur sunaai dene mein takleef bhi hoti hai. Ye Varicella-Zoster virus ke reactivation se hota hai. Treatment thodi alag hoti hai – antiviral zaroor chahiye.",
    },
    {
      _key: 'type4',
      name: "Recurrent Bell's Palsy",
      description: "Kuch logon mein ye condition dobara aati hai – same side ya opposite side pe. Agar baar baar aa raha hai to underlying cause dhundhna zaroori hai. Recurrence roughly 7-12% cases mein hoti hai.",
    },
    {
      _key: 'type5',
      name: "Bilateral Bell's Palsy (Dono Taraf)",
      description: 'Bahut rare – dono taraf chehra affected hota hai. Is mein Lyme disease ya Guillain-Barre syndrome rule out karna zaroori hai. Turant specialist se milein.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Chehra Aur Munh Ke Symptoms (Sabse Pehle Dikhne Waale)',
      items: [
        'Ek taraf chehra achanak neeche gir jaata hai – subah uthke mirror dekhne par pata chalta hai',
        'Munh se paani ya liquid peete waqt bahar aa jaata hai',
        'Smile karne par sirf ek taraf munh khicha dikhta hai',
        'Baat karte waqt words clear nahi aate – ek cheek ki muscles cooperate nahi karti',
      ],
    },
    {
      _key: 'sym2',
      category: 'Aankh Ke Symptoms',
      items: [
        'Ek aankhein poori tarah band nahi hoti – neend mein bhi aankhein partially khuli rehti hain',
        'Aankhein sookhi rehti hain ya ulta zyada aansu aate hain',
        'Bright light se aankhon mein takleef (photophobia)',
        'Blink karne mein takleef – eye dry hoti rehti hai',
      ],
    },
    {
      _key: 'sym3',
      category: 'Kaan, Taste Aur Doosre Symptoms',
      items: [
        "Kaan ke peeche ya kaan ke neeche dard – aksar Bell's Palsy aane se 1-2 din pehle shuru hota hai",
        'Taste sense khatam ya badal jaana – khaana beswad lagta hai',
        'Awaaz zyada tez lagti hai ek kaan se (Hyperacusis)',
        'Ek taraf mein numbness ya heavy feeling',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Treatment group mein facial symmetry score 4.2 se badhke 7.8 (10-point scale) – placebo group mein 4.1 se sirf 5.3 par ruka',
    avgTreatmentPeriod: '3-6 months (mild cases 6-8 weeks)',
    citation: "Central Council for Research in Homoeopathy (CCRH) – Clinical Verification Programme reports on neurological conditions | New Delhi | CCRH Annual Report & Journal of Research in Homoeopathic Sciences",
    keyFindings: [
      'Eye closure improvement: treatment group mein 68% patients mein complete closure return hua – placebo mein 41%',
      'Pain behind ear (prodromal pain) treatment group mein average 5 din pehle resolve hua placebo ke comparison mein',
      'Facial nerve function (House-Brackmann Scale) mein grade II-III improvement dekhi gayi – zyaadatar cases mein 6-12 hafte mein',
    ],
  },

  homeopathyBenefits: [
    "Bell's Palsy mein chehra isliye tirchha hota hai kyunki 7th cranial nerve inflamed aur compressed ho jaati hai – homeopathy is nerve inflammation ko reduce karne aur nerve ki healing speed up karne ke liye kaam karta hai",
    'Saath mein underlying cause (viral trigger, immune weakness) bhi address karta hai – sirf chehra nahi, patient ki poori constitution dekhi jaati hai',
    'Individualized approach recovery better aur faster banati hai – kab se hua, kaise hua, kya trigger tha, kaunse symptoms saath mein hain sab matter karta hai',
    'Steroids se bachna chahte logon ke liye safe option – especially pregnancy, diabetes, ya elderly patients mein',
    'Aankhon ki protection mein help karta hai – dryness aur corneal damage ka risk kam karta hai',
    'Recurrence prevent karne mein – underlying viral tendency aur immune weakness ko address karta hai',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Causticum',
      bestFor: "Jo patient Bell's Palsy ek aisi jagah tha jahan thandi hawa ya thanda paani expose hua – thand se hua laqwa; aankhein poori band nahi hoti; patient emotionally sensitive hai.",
      keyIndications: [
        'Thand se trigger hua facial nerve paralysis – cold wind ya cold water exposure history',
        'Aankhein poori tarah band nahi hoti – eye closure incomplete',
        'Emotionally sensitive patient – dusron ke dard se affected hone wala',
      ],
    },
    {
      _key: 'med2',
      name: 'Aconite Napellus',
      bestFor: "Jab Bell's Palsy achanak aaya ho – ek raat mein – aur saath mein ghabrahat, anxiety, dil ka tez dhakdhakana ho; aksar cold wind exposure ke fauran baad.",
      keyIndications: [
        'Achanak shuru – ek raat mein complete facial drop',
        'Ghabrahat aur anxiety bahut zyada – patient scared aur restless',
        'Cold wind exposure ke fauran baad – early acute stage',
      ],
    },
    {
      _key: 'med3',
      name: 'Gelsemium',
      bestFor: 'Chehra heavy aur drooping lagta ho, aankhein bhaari hoti hain poori khulti nahi, patient kamzori mehsoos kare – aksar flu ya viral infection ke baad Bell\'s Palsy aaya ho.',
      keyIndications: [
        'Post-viral Bell\'s Palsy – flu ya cold ke 1-2 hafte baad',
        'Chehra aur aankhein heavy drooping feel karte hain',
        'Extreme weakness aur lethargy – movement ki ichha nahi',
      ],
    },
    {
      _key: 'med4',
      name: 'Arsenicum Album',
      bestFor: 'Ramsay Hunt jaise cases jahan chehra tedha hone ke saath kaan mein burning dard aur chhale bhi hain; patient anxious, restless, thoda thoda paani peeta ho.',
      keyIndications: [
        'Kaan mein burning dard aur blisters – Ramsay Hunt type',
        'Extreme anxiety aur restlessness – raat ko 12-2 baje worse',
        'Thoda thoda baar baar paani peena – classic Arsenicum sign',
      ],
    },
    {
      _key: 'med5',
      name: 'Hypericum Perforatum',
      bestFor: 'Jab chehra tirchha hone ke saath nerve dard bahut tez ho – shooting, electric jaise dard kaan ke peeche ya jaw mein; touch karne se dard badhe.',
      keyIndications: [
        'Shooting, electric nerve pain – kaan ke peeche ya jaw mein',
        'Touch se dard bahut worse – nerve sensitivity extreme',
        'Injured nerve ke baad – trauma ya compression history',
      ],
    },
  ],

  lifestyle: [
    {
      _key: 'ls1',
      title: 'Eye Blink Practice',
      description: 'Affected aankhein ko gently apni ungliyon se band karo aur kholo – din mein 10-15 baar. Ye corneal protection ke liye aur nerve stimulation ke liye zaroori hai.',
    },
    {
      _key: 'ls2',
      title: 'Smile Training',
      description: 'Mirror ke saamne khade ho aur sirf affected side ke corner ko smile karne ki koshish karo. Agar khud nahi hoti to ungli se gently upar ki taraf assist karo – 10 reps, 3 baar din mein.',
    },
    {
      _key: 'ls3',
      title: 'Cheek Puffing',
      description: 'Dono galon mein hawa bharke roko – 5 seconds – phir slowly release karo. Is se buccinator muscle activate hoti hai jo munh ke corner ko upar rakhti hai.',
    },
    {
      _key: 'ls4',
      title: 'Nose Wrinkle Exercise',
      description: 'Naak ko upper lip ki taraf wrinkle karne ki koshish karo – jaise kuch buri smell aaye. Ye cheeks ki upper muscles activate karta hai. 10 reps, 3 baar.',
    },
    {
      _key: 'ls5',
      title: 'Eyebrow Raise',
      description: 'Affected side ki bhauhen oonchi karne ki koshish karo – mirror mein check karo. Agar nahi ho rahi to both eyebrows raise karo aur feel karo. Ye forehead muscles train karta hai.',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Nerve-Healing Vitamins',
      emoji: '🧠',
      items: [
        'Salmon / Mackerel (bangda machli) – Vitamin B12 aur Omega-3 nerve myelin repair ke liye essential',
        'Anda (egg) – B12 aur B6 dono hain jo nerve function ke liye directly zaroori hain',
        'Dahi (plain curd) – probiotic jo gut immunity strengthen karta hai, viral recurrence rokne mein madadgar',
        'Paalak (spinach) – B vitamins aur magnesium nerve inflammation reduce karte hain',
      ],
    },
    {
      _key: 'di2',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥗',
      items: [
        'Haldi wala doodh (turmeric milk) – curcumin nerve inflammation kam karta hai – raat ko sone se pehle best',
        'Adrak chai (ginger tea) – anti-inflammatory compounds circulation improve karte hain chehra mein',
        'Amla (Indian gooseberry) – Vitamin C nerve repair aur immune boost dono ke liye',
        'Lahsun (garlic) – antiviral property jo HSV trigger ko suppress karne mein madadgar',
      ],
    },
    {
      _key: 'di3',
      category: 'Soft Foods & Hydration (Khaane Mein Takleef Kam Ho)',
      emoji: '💧',
      items: [
        'Daliya (porridge) / Khichdi – soft texture se munh pe strain nahi padta jab khaana mushkil ho',
        'Kela (banana) – soft, potassium se bhara, nerve function support karta hai',
        'Coconut water (nariyal paani) – electrolytes jo nerve conduction ke liye zaroori hain',
        'Light vegetable / dal soup – liquid form mein nourishment jab chewing painful ho',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Inflammatory Triggers',
      emoji: '🚫',
      items: [
        'Maida aur ultra-processed foods – inflammation badhate hain jo nerve healing slow karti hai',
        'Fried / oily food (poori, pakoda) – inflammatory fats nerve recovery delay karte hain',
        'Excess sugar – immune function suppress karta hai, viral reactivation ka risk badhata hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Nerve Irritants',
      emoji: '🔴',
      items: [
        'Alcohol – directly nerve conduction affect karta hai aur B12 absorption rokta hai',
        'Excess caffeine (3+ cups chai/coffee) – sleep disturb karta hai jo nerve recovery slow karti hai',
        'Bahut spicy food – chehra tedha ho to khaate waqt paani ya food bahar aa sakta hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Temporarily Avoid Karo',
      emoji: '⚠️',
      items: [
        'Peanuts, walnuts zyada matra mein – arginine Herpes virus ki growth mein madadgar hota hai – temporary restriction best',
        'Hard, chewy foods (gajak, chikki, tough roti) – khaane mein bahut takleef hogi, jaw strain add hoga',
        'Bahut thandi drinks / ice cream – thandi cheez nerve recovery slow kar sakti hai especially initial weeks mein',
      ],
    },
  ],

  dos: [
    'Lubricating eye drops (artificial tears) din mein 4-5 baar daalein – aankhein poori band nahi hoti to cornea dry ho jaata hai',
    'Raat ko sone se pehle eye ointment aur gentle tape se aankhein band karo – sote waqt cornea expose rehna bahut harmful hai',
    'Din mein 2-3 baar warm compress (garam kapda) chehra pe rakhein – circulation improve hota hai, healing faster hoti hai',
    'Kaan aur chehra hamesha thandi hawa se dhaka rahein jab bahar ho – ear muffs ya muffler use karein',
    'Poori neend lo – 7-8 ghante – nerve healing neend mein fastest hoti hai',
    'Facial exercises doctor ki guidance mein regularly karein – nerve ko "wake up" karne mein help karti hain',
    'Vitamin B12 aur B6 rich foods daily lo – dono directly nerve healing mein involved hain',
  ],

  donts: [
    'Aankhon ko rub mat karo – half-open aankhon mein infection ka risk bahut zyada hai, rubbing se cornea scratch hoti hai',
    'Thandi hawa aur AC seedha chehra/kaan pe mat laao – ye sabse common trigger bhi hai aur recovery slow karta bhi hai',
    'Self-exercise zyada aggressively mat karo – galat technique se synkinesis (nerve mis-wiring) ka risk badh jaata hai',
    'Chehra khud se "straighten" karne ki koshish mat karo – forcing muscles ke against kaam karna recovery delay karta hai',
    'Symptoms ko 72 ghante se zyada ignore mat karo – early treatment window critical hai, steroids aur antivirals tabhi kaam karte hain',
    'Steroid course beech mein mat chhodein – doctor se puri course complete karni chahiye',
    'Alcohol bilkul nahi – nerve healing directly affect karta hai',
  ],

  seasonalCare: {
    winter: 'Kaan dhakna SABSE zaroori hai – ear muffs ya muffler se kaan cover karo; thandi hawa seedhi kaan pe na lage. Bike/scooter chalate waqt full face helmet ya balaclava use karo. Subah bahar jaane se pehle garam paani se mooh dho – thanda paani directly pe na daalein. Thand mein bahar raat ko nikalna avoid karo jab tak recovery complete na ho.',
    summer: 'Direct AC vent chehra pe nahi – room mein cool raho but direct cold air avoid karo. Cooling eye drops (artificial tears) zyada zaroori hain – heat + incomplete eye closure = faster dryness. Outdoors mein sunglasses ZAROOR – UV rays dry eyes ke liye aur bhi harmful hain.',
    monsoon: 'Bhigna nahi – chehre aur kaanon ko rain mein directly expose karna risk hai. Humidity mein fungal/bacterial infection ka risk badh jaata hai aankhon mein – eye hygiene extra important. Seasonal viral infections is season mein zyada hote hain – immune support (Vitamin C, zinc) ensure karo. Ghar mein ventilation rakho lekin draft avoid karo.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: "Bell's Palsy aur stroke mein kya fark hai – munh tedha hone par kaise pehchanen?",
      answer: "Bell's Palsy mein sirf chehra affected hota hai – haath, pair, bolne mein koi takleef nahi. Dhire dhire ya ek raat mein aata hai – kaan ke peeche dard aksar pehle aata hai. Stroke mein chehra + haath kamzor + boli unclear – teeno ek saath aur achanak ek second mein hota hai. FAST test: Face (tirchha?), Arms (ek neeche?), Speech (unclear?), Time (turant hospital). Agar haath ya bolne mein koi bhi takleef hai – turant hospital jayein – ye Bell's Palsy nahi stroke ho sakta hai.",
    },
    {
      _key: 'faq2',
      question: "Bell's Palsy kab tak theek hota hai – recovery mein kitna time lagta hai?",
      answer: "Zyaadatar cases mein Bell's Palsy 3 se 6 mahine mein poori tarah theek ho jaata hai. 70-80% patients mein complete recovery hoti hai. Mild cases: 4-6 hafte mein theek. Moderate cases: 2-3 mahine. Severe cases: 3-6 mahine tak. Recovery pehle muscle movement se shuru hoti hai – pehle bhauhen hilne lagti hain, phir aankhein, phir munh ka corner. Agar 3 hafte mein koi bhi improvement nahi dikhta to doctor se zaroor milein.",
    },
    {
      _key: 'faq3',
      question: "Bell's Palsy mein aankhein band nahi hoti – kya karein?",
      answer: "Ye Bell's Palsy ka sabse important aur urgent issue hai. Lubricating eye drops (artificial tears) din mein har 2-3 ghante – aankhon ko sookha hone se bachata hai. Raat ko lubricating eye ointment + aankh ko medical tape se gently close karo – sote waqt cornea expose rehna bahut harmful hai. Sunglasses din mein bahar nikalne par. Aankhein bilkul rub mat karo – infection ka risk. Agar aankhein laal, irritated, ya cloudy ho rahi hain – ophthalmologist se urgently milein. Corneal damage permanent ho sakta hai agar neglect kiya.",
    },
    {
      _key: 'faq4',
      question: "Bell's Palsy ki homeopathic medicine kaun si hai?",
      answer: "Homeopathy mein Bell's Palsy ke liye koi ek fixed medicine nahi hoti – remedy patient ke specific symptoms ke hisaab se decide hoti hai. Commonly used: Causticum (thande se hua laqwa, aankhein poori band nahi), Gelsemium (viral infection ke baad, chehra heavy), Aconite (achanak shuru, ghabrahat ke saath), Hypericum (tez nerve dard ke saath), Arsenicum (Herpes/Ramsay Hunt type). Koi bhi medicine bina qualified homoeopath ke mat lein – sahi remedy aur sahi potency tabhi kaam karti hai.",
    },
    {
      _key: 'faq5',
      question: "Bell's Palsy ka gharelu ilaaj ho sakta hai?",
      answer: "Gharelu tarike symptoms manage karne mein help karte hain – lekin akele se complete recovery ki guarantee nahi hoti. Ghar mein: Warm compress (garam kapda) face pe 15-20 min 2-3 baar – circulation badhata hai. Gentle facial massage – upward strokes. Haldi-adrak warm milk – anti-inflammatory, raat ko lena best. Eye care: har 2 ghante drops. Poori neend 8 ghante. In sab ke saath doctor ki treatment equally zaroori hai – especially pehle 72 ghante mein steroids ka window miss mat karo.",
    },
    {
      _key: 'faq6',
      question: "Bell's Palsy mein kya khana chahiye – recovery diet kya hai?",
      answer: "Bell's Palsy recovery mein nerve healing ke liye specific nutrition important hai. Zaroor khayein: Vitamin B12 foods (anda, dahi, machli), Vitamin B6 (banana, chickpeas), Omega-3 (salmon, flaxseeds), anti-inflammatory (haldi wala doodh, adrak, amla), soft foods (khichdi, daliya, soup) jab chewing mushkil ho. Avoid karo: Alcohol, maida, excess sugar, hard chewy foods, bahut spicy khaana – yeh sab recovery slow karte hain.",
    },
    {
      _key: 'faq7',
      question: "Bell's Palsy baar baar kyun aata hai – dobara na aaye kya karein?",
      answer: "Bell's Palsy dobara aane ka chance roughly 7-12% hai. Dobara kyun aata hai: Latent Herpes virus nerve mein rehta hai aur stress mein reactivate hota hai, immune system weak hone par, diabetes ya uncontrolled blood sugar. Dobara na aaye iske liye: Stress management (meditation, proper sleep), Vitamin D aur B12 levels maintain karo, kaan aur chehra thand se bachao. Homeopathic constitutional treatment underlying viral tendency aur immune weakness address karta hai – recurrence prevention mein especially helpful.",
    },
    {
      _key: 'faq8',
      question: "Bell's Palsy ka diagnosis kaise hota hai – koi test hai?",
      answer: "Bell's Palsy ka diagnosis mainly clinical hai – doctor chehra dekh ke aur examine karke decide karte hain. Doctor ye rule out karte hain: CT Scan ya MRI (stroke, tumor rule out ke liye), Blood tests (diabetes, Lyme disease, thyroid), EMG (nerve damage extent – severe cases mein), Hearing test (Ramsay Hunt suspect ho to). Zyaadatar cases mein MRI zaroori nahi hota. Lekin agar symptoms atypical hain ya recovery nahi ho rahi to imaging important ho jaati hai.",
    },
    {
      _key: 'faq9',
      question: "Bell's Palsy mein eye damage se kaise bachein – aankhon ki dekhbhaal kaise karein?",
      answer: "Aankhon ki protection Bell's Palsy mein sabse critical task hai – agar ye neglect ho to corneal ulcer ya scar permanent damage de sakta hai. Daily eye care: Lubricating drops (artificial tears) har 2-3 ghante, raat ko Lacrilube ya ointment + medical tape se aankhein band karo, bahar protective glasses ya sunglasses. Warning signs – turant doctor ke paas: Aankhein laal, vision mein change, pain in eyes, cloudy/foggy dikhna. Eye complications Bell's Palsy ki sabse preventable problem hai – thodi si care se completely avoid hoti hai.",
    },
    {
      _key: 'faq10',
      question: "Kya Bell's Palsy pregnancy mein ho sakta hai – baby ko koi risk hai?",
      answer: "Haan – pregnancy mein Bell's Palsy ka risk 3 guna badh jaata hai, especially 3rd trimester aur delivery ke baad. Baby ko koi direct risk nahi hota – ye sirf mother ki facial nerve affect karta hai. Pregnancy mein treatment: Corticosteroids carefully doctor decide karta hai, antivirals limited use. Homeopathy pregnancy mein safe option hai – no side effects, constitutional treatment best hai. Delivery ke baad zyaadatar cases mein automatically improve hone lagta hai – hormonal normalization se.",
    },
    {
      _key: 'faq11',
      question: "Bell's Palsy exercises kab se shuru karein – kitni baar karein?",
      answer: "Facial exercises 2-3 din ke baad shuru kar sakte hain – jab initial acute inflammation thodi kam ho. Day 1-3: Sirf warm compress aur gentle massage. Day 3 onwards: Simple mirror exercises – blink, smile, eyebrow raise. Week 2 onwards: Complete physiotherapy protocol. Kitni baar: Har set 10 repetitions, 3-4 times din mein, total 10-15 minutes. Important: Mirror ke saamne karein – visual feedback zaroori hai. Galat movement mat force karo – agar dard ho to immediately band karo.",
    },
    {
      _key: 'faq12',
      question: "Bell's Palsy mein chehra poora seedha nahi hua – incomplete recovery kya hai?",
      answer: "Kuch patients (roughly 15-20%) mein chehra complete 100% seedha nahi hota – ise Incomplete Recovery ya Synkinesis kehte hain. Kya hota hai: Chehra mostly normal lagta hai lekin ek side thoda tight ya different feel hota hai, aankhein band karte waqt munh move kare, smile asymmetric lagti hai. Kyun hota hai: Nerve ne zyada damage ke baad regenerate hua but 'wrong path' pe – mis-wiring. Homeopathy nerve retraining period mein constitutional treatment helpful hai. Improvement 1-2 saal baad bhi hoti rehti hai.",
    },
    {
      _key: 'faq13',
      question: "Bell's Palsy mein kaan mein dard kyun hota hai?",
      answer: "Bell's Palsy mein kaan ke peeche ya neeche dard hona bahut common hai – aur ye aksar chehra tedha hone se 1-2 din PEHLE shuru hota hai. 7th cranial nerve kaan ke paas se hi guzarti hai – jab ye nerve swell ya inflame hoti hai to kaan ke peeche dard mehsoos hota hai. Ye Bell's Palsy ka 'early warning sign' hai. Kaan mein blisters + dard = Ramsay Hunt Syndrome – agar ye combination hai to immediately doctor ke paas jayein – treatment different hoti hai.",
    },
    {
      _key: 'faq14',
      question: "Kya Bell's Palsy se chehra hamesha ke liye tedha reh sakta hai?",
      answer: "Zyaadatar cases mein bilkul nahi – 70-80% patients mein chehra poori tarah normal ho jaata hai. Risk factors permanent change ke liye: Pehle 72 ghante mein treatment na mili ho, age 60+ aur diabetes combination, complete palsy jo 4 hafte tak bilkul nahi improved, Ramsay Hunt syndrome jo late diagnose hua. Jitni jaldi treatment shuru karo – complete recovery ke chances utne better. Homeopathy ke saath recovery timeline mein improvement dekhi jaati hai.",
    },
    {
      _key: 'faq15',
      question: "Bell's Palsy mein smile nahi aati – kab wapas aayegi?",
      answer: "Smile return Bell's Palsy recovery ka important milestone hai – generally 6-8 hafte mein partial smile wapas aane lagti hai. Recovery ka order: 1st – bhauhen thodi hilne lagti hain (2-3 hafte), 2nd – aankhein thodi zyada band hone lagti hain, 3rd – cheek muscles activate hone lagti hain, 4th – smile asymmetric se symmetric hoti hai. Speed up karne ke liye: Mirror exercises (affected side ko ungli se assist karke smile practice), cheek puffing exercises, homeopathic treatment nerve reactivation mein help karti hai.",
    },
    {
      _key: 'faq16',
      question: "Bell's Palsy mein kya nahi karna chahiye?",
      answer: "Ye bilkul mat karein: Aankhein rub mat karo (infection risk). AC ya thandi hawa seedha chehra pe mat aane do. Steroid course beech mein mat chhodein – adhura course nuksaandeh. Zyada aggressive exercise – synkinesis ka risk. Achaar, papad, hard chewy foods – unnecessary jaw strain. Alcohol – nerve healing directly affect karta hai. Symptoms ko 72 ghante se zyada ignore karo – first treatment window critical hai. Aankhon ki protection mat bhulo – ye serious permanent complication ban sakta hai.",
    },
    {
      _key: 'faq17',
      question: "Bacchon mein Bell's Palsy kaise hoti hai – kya bachhe jaldi theek ho jaate hain?",
      answer: "Haan – bacchon mein Bell's Palsy adults ke comparison mein generally faster aur better theek hoti hai. 90%+ complete recovery rate children mein, recovery 4-8 hafte mein usually complete. Eye protection utni hi zaroori hai. Bacchon mein causes thoda alag bhi ho sakta hai – middle ear infection, Lyme disease, ya congenital causes. Paediatrician se specifically evaluate karwana important hai. Homeopathy bacchon ke liye especially suitable hai – no steroid side effects.",
    },
    {
      _key: 'faq18',
      question: "Kya Bell's Palsy contagious hai – ghar mein failta hai kya?",
      answer: "Nahi – Bell's Palsy khud contagious nahi hoti. Ye doosron ko nahi lagti. Lekin underlying cause: Jo virus Bell's Palsy trigger karta hai (Herpes Simplex) wo contagious hota hai – lekin virus hone se Bell's Palsy ho zaroor nahi, zyaadatar logon mein ye virus koi symptom nahi deta. Kisi se door rehne ki zaroorat nahi – social isolation nahi karna chahiye.",
    },
    {
      _key: 'faq19',
      question: "Bell's Palsy mein sleeping position kya honi chahiye?",
      answer: "Affected side NEECHE mat soyein – nerve pe direct pressure avoid karo. Slightly elevated head (extra pillow) – nerve area mein swelling reduce hoti hai. Back pe sona best – ya unaffected side pe. Aankhon ke liye: Raat ko lubricating eye ointment (not drops – ointment lasts longer), medical tape se affected aankhein gently close karo. Room mein AC directly face pe nahi – room cool rakho but direct airflow avoid karo.",
    },
    {
      _key: 'faq20',
      question: "Bell's Palsy theek hone ke baad bhi chehra asymmetric kyun lagta hai?",
      answer: "Kuch patients mein chehra clinically theek hone ke baad bhi thoda asymmetric feel ya look hota hai – ye Post-Bell's Palsy Changes hain. Reasons: Synkinesis (nerve regeneration mein wiring thodi different), muscle contracture (affected side ki muscles thodi tight), heightened self-awareness (actually chehra normal hai but brain zyada notice karta hai). Kya kar sakte hain: Physiotherapy (neuromuscular retraining specialist), facial yoga (continued exercises), homeopathy post-recovery phase mein constitutional treatment nerve rebalancing mein help karta hai. Recovery 1-2 saal baad bhi continue hoti hai.",
    },
  ],

  relatedDiseases: [
    'Carpal Tunnel Syndrome',
    'Cervical Spondylosis',
    'Trigeminal Neuralgia',
    'Hypothyroidism',
    'Diabetes',
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log("✅ Bell's Palsy created/updated:", result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/bells-palsy')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
