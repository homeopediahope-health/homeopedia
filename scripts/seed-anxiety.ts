import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const anxiety = {
  _id: 'disease-anxiety',
  _type: 'disease',

  title: 'Anxiety Disorder',
  hindiName: 'Chinta Rog / Ghabrahat / Bechaini',
  slug: { _type: 'slug', current: 'anxiety' },

  metaTitle: 'Anxiety Treatment in Hindi — Homeopathy Se Rahat | Homeopedia',
  metaDescription: 'Anxiety (ghabrahat) ka homeopathic treatment, types, causes, diet aur FAQs — doctor-reviewed, verified info. Simple Hinglish mein samjhein.',

  heroText: 'Anxiety ek aisi mental condition hai jisme aapka mann bina kisi badi wajah ke darr, tension, aur bechaini se bhar jaata hai. Normal zindagi mein thodi ghabrahat hona theek hai — jaise exam se pehle ya interview mein — lekin jab ye feeling roz ki life mein interfere karne lage, tab use Anxiety Disorder kaha jaata hai. India mein lagbhag 19 crore log kisi na kisi form of anxiety se affected hain. Ye bimari real hai — sirf "dimagi weakness" nahi — aur iska effective homeopathic treatment possible hai.',

  category: 'Mental',

  quickFacts: {
    whatItIs: 'Anxiety disorder mein brain bina clear khatre ke bhi "danger mode" mein rehta hai — adrenaline aur cortisol continuously release hote hain jo dil dhadakna, haath kaanpna, aur neend na aana cause karte hain.',
    howCommon: 'India mein anxiety disorder sabse common mental health condition hai — 19 crore+ affected (WHO, 2022). Har 7 mein se 1 Indian apni life mein kisi na kisi anxiety disorder se affected hota hai.',
    treatmentDuration: '3-6 mahine mein meaningful improvement — neend, palpitations, aur daily function dono mein; complete recovery individual pe depend karti hai',
    successRate: 'CCRH study mein Hamilton Anxiety Score treatment group mein 14.2 se 7.8 aaya — placebo group mein sirf 13.9 se 11.4 par ruka',
  },

  causes: [
    'Brain chemistry imbalance — serotonin aur GABA neurotransmitters ka level disturb hone se anxiety triggers hoti hai; ye chemical imbalance homeopathy address karta hai',
    'Chronic stress — kaam ka pressure, financial tension, family problems jo months-years tak chale; cortisol chronically elevated rehta hai',
    'Traumatic events — accident, loss of loved one, abuse ya koi bada emotional shock jo nervous system ko sensitize kar deta hai',
    'Genetic factor — agar family mein kisi ko anxiety/depression hai to risk 30-40% zyada hota hai; inherited nervous system sensitivity',
    'Hormonal changes — thyroid disorders, PCOD, pregnancy, menopause — ye sab anxiety trigger kar sakte hain hormonal pathway se',
    'Caffeine excess, alcohol withdrawal, steroids ka long-term use — directly nervous system ko overstimulate karte hain',
  ],

  riskFactors: [
    'Chronic stress mein rehne wale log — job, financial pressure, family tension jo months tak chale',
    'Women — men ke mukable 2 guna zyada anxiety cases; hormonal fluctuations ka direct role',
    'Teenagers aur young adults (15-35 age group) — peak vulnerability time; academic aur career pressure',
    'Jinhe pehle depression ya koi aur mental health issue raha ho — comorbidity common hai',
    'Jo log alcohol ya caffeine zyada lete hain — nervous system sensitization hoti hai',
    'Jinki neend regularly poori nahi hoti — sleep deprivation anxiety ka trigger bhi hai aur symptom bhi',
    'Chronic physical illness wale — diabetes, thyroid, BP — physical aur mental health bidirectionally connected hain',
  ],

  complications: [
    'Depression ke saath combination — untreated anxiety 50%+ cases mein depression mein convert ho jaati hai; comorbid treatment harder hota hai',
    'Physical health damage — BP badhna, immunity weak hona, IBS, migraines — sab anxiety ke long-term physical effects hain',
    'Social isolation — log ghar se nahi nikalte, jobs chhod dete hain, relationships tootte hain — quality of life severely affected',
    'Substance dependency — khud ko theek karne ke liye alcohol ya sleeping pills ki aadat pad jaati hai jo problem aur bada kar deti hai',
  ],

  symptoms: [
    {
      _key: 'mental',
      category: 'Mansik (Mental) Signs',
      items: [
        'Baar baar darr ya tension feel karna bina clear wajah ke — weeks ya mahino tak',
        'Concentration nahi hoti — ek kaam pe dhyan nahi tikta; decisions lena mushkil hota hai',
        '"Kuch bura hone waala hai" jaisi feeling — irrational anticipatory fear',
        'Irritability — chhoti si baat pe gussa ya rone ka mann; mood unstable rehta hai',
      ],
    },
    {
      _key: 'physical',
      category: 'Shareerik (Physical) Signs',
      items: [
        'Dil tez dhadakna (palpitations) — especially raat ko ya stress mein',
        'Haath-paon kaanpna ya sunn padna — adrenaline surge ka result',
        'Saas lena thoda mushkil lagta hai — chest tight feel hoti hai',
        'Bahut zyada pasina — without physical exertion; pet mein ghabrahat, ulti jaisi feeling',
      ],
    },
    {
      _key: 'sleep_daily',
      category: 'Neend aur Daily Life Signs',
      items: [
        'Raat ko neend nahi aati — ya baar baar neend toot ti hai; brain "off" nahi hota',
        'Bahut thaka hua mehsoos karna — kuch physically nahi kiya phir bhi exhausted',
        'Muscles mein tightness — specially shoulders, neck, jaw mein chronic tension',
        'Normal kaam bhi overwhelming lagta hai — daily tasks daunting feel hoti hain',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Hamilton Anxiety Rating Scale (HAM-A) score: treatment group mein 14.2 se 7.8 — placebo group mein sirf 13.9 se 11.4 par ruka; meaningful clinical difference',
    avgTreatmentPeriod: '3-6 mahine individualized treatment',
    citation: 'Indian Journal of Research in Homoeopathy, Vol 12, 2018 | CCRH Multi-centric Study on Anxiety Disorders',
    keyFindings: [
      'Homeopathic treatment group mein sleep quality significantly improve hui compared to placebo',
      'Palpitations aur physical anxiety symptoms mein meaningful reduction dekhi gayi',
      'Patients mein side effects practically zero — jo allopathic anxiolytics mein common problem hai',
      'Panic attack frequency aur intensity dono mein reduction — 3 mahine ke baad measurable improvement',
    ],
  },

  homeopathyBenefits: [
    'Neend naturally better hoti hai — bina sedative dependency ke; allopathic sleeping pills ki zaroorat kam hoti hai',
    'Panic attacks ki frequency aur intensity dono kam hoti hain — underlying nervous system sensitivity address hoti hai',
    'Individualized treatment — aapki anxiety ka specific pattern dekh ke medicine choose ki jaati hai',
    'Safe for long-term use — koi addiction risk nahi; jo anxiolytics aur sleeping pills ka bada problem hai',
    'Children aur pregnant women mein bhi doctor ki guidance se use possible',
    'Stress-triggered physical symptoms (IBS, palpitations, BP) bhi saath mein address hote hain',
  ],

  homeopathyLimitations: [
    'Severe anxiety disorder ya active suicidal ideation mein psychiatrist ke saath immediate consultation zaroori hai — homeopathy supplementary hai, emergency replacement nahi',
    'OCD aur PTSD mein CBT therapy ke saath combination approach best results deta hai — homeopathy alone sufficient nahi ho sakti severe cases mein',
  ],

  medicines: [
    {
      _key: 'aconite',
      name: 'Aconitum Napellus',
      potency: '',
      bestFor: 'Sudden panic attacks — achanak dil ka tez dhadakna, "ab main mar jaunga" jaisi feeling, bahut intense fear jo aati hai aur jaldi jaati hai',
      keyIndications: [
        'Achanak intense panic — peak mein aata hai aur 20-30 min mein kam hota hai',
        '"Main abhi mar jaunga" jaisi strong conviction — death fear prominent',
        'Tez heartbeat, shortness of breath, haath sunn padna',
        'Raat mein zyada worse — especially midnight ke baad',
        'Kisi traumatic event ya shock ke baad shuru hona',
        'Restlessness — ek jagah nahi baith sakta panic mein',
      ],
    },
    {
      _key: 'argentum_nit',
      name: 'Argentum Nitricum',
      potency: '',
      bestFor: 'Anticipation anxiety — exam, interview, stage se pehle extreme ghabrahat; pet kharab, diarrhea, hurry-hurry feel',
      keyIndications: [
        'Anticipatory anxiety — event se pehle extreme nervousness aur diarrhea',
        'Hurried feeling — sab kuch jaldi karna chahte; impulsive nature',
        'Social anxiety — public mein bolne ka darr, performance anxiety',
        'Sweet foods ki craving — jo anxiety worse karti hai',
        'Warm rooms mein worse; open air mein thoda better',
        'Irrational fears — heights, enclosed spaces, crowd',
      ],
    },
    {
      _key: 'gelsemium',
      name: 'Gelsemium',
      potency: '',
      bestFor: 'Exam ya performance ke darr se puri body kamzor pad jaaye — haath kaanpe, legs shaky, dull aur heavy feeling, akele rehne ka darr',
      keyIndications: [
        'Anticipatory weakness — exam ya event se pehle legs shake karti hain',
        'Dull, heavy, drowsy feeling — sab kuch slow aur lethargic',
        'Stage fright — voice kaanpna, haath shaky, mind blank ho jaana',
        'Akele rehne ka darr — reassurance chahiye continuously',
        'Good news se symptoms better ho jaana — reassurance kaam karti hai',
        'Thirst practically nil hona',
      ],
    },
    {
      _key: 'ignatia',
      name: 'Ignatia Amara',
      potency: '',
      bestFor: 'Grief, heartbreak, ya emotional shock ke baad aane wali anxiety — baar baar sighs aana, mood swings, "andar se rone ka mann par rona nahi aata"',
      keyIndications: [
        'Clear emotional trigger — bereavement, heartbreak, humiliation ke baad',
        'Baar baar deep sighing — involuntary sighs throughout the day',
        'Contradictory symptoms — rona chahte hain par nahi aata',
        'Mood swings — ek minute haste hain ek minute rote hain',
        'Lump in throat feeling — globus sensation',
        'Console karne se worse — sympathy se gussa aata hai',
      ],
    },
    {
      _key: 'natrum_mur',
      name: 'Natrum Muriaticum',
      potency: '',
      bestFor: 'Jo log apni feelings andar rakhte hain — dard express nahi karte, akele rehna prefer karte hain; long-standing suppressed grief wali anxiety',
      keyIndications: [
        'Suppressed emotions — controlled bahar se, andar chaotic',
        'Akele rehna prefer karna — consolation se worse hona',
        'Past grief jo release nahi hoi — long-standing emotional pain',
        'Salt craving — achanak namak zyada chahiye',
        'Seashore pe worse; sun pe worse hona',
        'Chronic anxiety jo years se chal rahi ho bina expression ke',
      ],
    },
  ],

  seasonalCare: {
    summer: 'Garmi anxiety symptoms badha sakti hai — especially panic attacks ki frequency. Khub paani piyo — dehydration anxiety trigger karta hai. Early morning ya evening mein bahar niklo. Nimbu paani, coconut water cooling aur hydrating hain. AC mein zyada der rehna bhi body stress badhata hai — balance rakhein. Thande environment se achanak garmi mein mat jaao — temperature shock nervous system ko startle karta hai.',
    monsoon: 'Cloudy, grey mausam serotonin naturally kam karta hai — mood low rehta hai. Ghar mein roshni rakhein — natural light anxiety mein bahut help karta hai. Exercise band mat karo barish ki wajah se — indoor yoga, stretching karo. Mould allergy wale patients mein anxiety barish mein worse hoti hai. Isolation avoid karo — barish mein ghar band rehne ki tendency anxiety spiral karti hai.',
    winter: 'Seasonal Affective pattern — thandi mein anxiety + depression combination zyada dikhti hai. Subah dhoop mein 15-20 min zaroor baitho — Vitamin D anxiety ke liye direct helpful hai. Social gatherings mein participation barhao — isolation thandi mein natural hai par harmful hai. Warm foods — soups, khichdi — grounding aur soothing hain. Exercise especially important hai sardi mein — endorphin release.',
  },

  dietInclude: [
    {
      _key: 'di1',
      category: 'Magnesium-Rich Foods',
      emoji: '🥬',
      items: [
        'Palak (spinach) — brain mein GABA activity support karta hai; anxiety naturally kam karta hai',
        'Kela — magnesium + B6 dono hain; mood stabilize karta hai; roz ek kela helpful',
        'Kaaju, badam — healthy fats + magnesium combination; raat ko ek mutthi bahut helpful',
        'Kadu ke beej (pumpkin seeds) — highest magnesium sources mein; ek chamach roz kaafi',
      ],
    },
    {
      _key: 'di2',
      category: 'Gut-Friendly Foods',
      emoji: '🥣',
      items: [
        'Dahi (probiotic) — serotonin ka 90% gut mein banta hai; dahi gut health improve karta hai',
        'Chaas — light, digestible; gut ko settle karta hai; anxiety mein pet ki takleef bhi address hoti hai',
        'Fermented foods (idli, dosa) — good bacteria badhate hain jo anxiety reduce karte hain',
      ],
    },
    {
      _key: 'di3',
      category: 'Complex Carbs & Stabilizers',
      emoji: '🌾',
      items: [
        'Oats — serotonin production ke liye complex carb; slow release energy; mood stable rehta hai',
        'Brown rice ya daliya — blood sugar stable rakhna anxiety ke liye critical hai',
        'Moong dal — light protein, easily digestible; nervous system ko strain nahi deta',
        'Banana + almond combination — magnesium + healthy fat; anxiety snack as best option',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Stimulants',
      emoji: '☕',
      items: [
        'Chai/coffee 3+ cups — caffeine nervous system ko over-stimulate karta hai; palpitations aur anxiety directly badhate hain',
        'Energy drinks — caffeine + sugar combination; anxiety ke liye worst combination',
        'Cola drinks — hidden caffeine + sugar both problematic; avoid karo completely',
      ],
    },
    {
      _key: 'da2',
      category: 'Processed & Sugar Foods',
      emoji: '🍬',
      items: [
        'Maida-based foods (white bread, biscuits) — blood sugar spike karte hain jo anxiety worsen karta hai',
        'Meetha zyada — initial "comfort" deta hai phir blood sugar crash — mood swing aur anxiety badhti hai',
        'Packaged snacks, chips — sodium + preservatives; body mein inflammation badhate hain',
      ],
    },
    {
      _key: 'da3',
      category: 'Alcohol & Suppressants',
      emoji: '🚫',
      items: [
        'Alcohol — pehle relax lagta hai, phir next day anxiety aur bhi badh jaati hai; dependency ka risk serious hai',
        'Smoking — nicotine temporarily calms karta hai but long-term nervous system irritation badhata hai',
        'Bahut zyada chai raat ko — sleep disruption se anxiety next day worse hoti hai',
      ],
    },
  ],

  dietTip: 'Simple rule: jo cheez body ko stable rakhe woh khaao, jo excite kare woh kam karo. Subah ka breakfast skip mat karo — fasting blood sugar anxiety ka direct trigger hai. Chai 1-2 cups tak limit karo aur dekho 2 hafte mein kitna fark padta hai.',

  dietNote: 'Gut-brain axis real hai — agar anxiety ke saath pet ki takleef bhi hai (IBS, acidity, loose motions) to diet changes se dono improve hote hain. Magnesium deficiency aur anxiety ka connection strong hai — agar bahut zyada anxiety hai, doctor se Magnesium levels check karwao.',

  weeklyPlan: [
    {
      _key: 'wp1',
      day: 'Somwar / Monday',
      breakfast: 'Oats porridge + kela + soaked badam (5) + 1 cup chai (not more)',
      midMorning: 'Kadu ke beej (pumpkin seeds, 1 tbsp) + coconut water',
      lunch: 'Brown rice + moong dal + palak sabzi + dahi (1 katori)',
      evening: 'Green tea (no coffee) + roasted makhana',
      dinner: 'Khichdi (moong + rice) + ghee + boiled lauki + chaas',
    },
    {
      _key: 'wp2',
      day: 'Mangalwar / Tuesday',
      breakfast: 'Besan chilla (2) + dahi + 1 kela',
      midMorning: 'Badam (soaked, 5-6) + akhrot (2)',
      lunch: 'Roti (2) + palak paneer (light) + dal + salad',
      evening: 'Chamomile tea ya saunf water + roasted chana',
      dinner: 'Dalia porridge (savory) + sabzi + dahi',
    },
    {
      _key: 'wp3',
      day: 'Budhwar / Wednesday',
      breakfast: 'Idli (3) + sambar + coconut chutney + 1 kela',
      midMorning: 'Pumpkin seeds + coconut water',
      lunch: 'Roti (2) + moong dal + methi sabzi + dahi',
      evening: 'Green tea + badam (5)',
      dinner: 'Brown rice + rajma (small portion) + palak sabzi',
    },
    {
      _key: 'wp4',
      day: 'Guruwar / Thursday',
      breakfast: 'Dalia (sweet, with banana + badam) + warm milk (low sugar)',
      midMorning: 'Kaju (4-5) + akhrot (2)',
      lunch: 'Roti (2) + chana dal + lauki sabzi + raita',
      evening: 'Warm haldi doodh (low sugar) + makhana',
      dinner: 'Khichdi + ghee + dahi + boiled vegetables',
    },
    {
      _key: 'wp5',
      day: 'Shukrawar / Friday',
      breakfast: 'Poha (vegetables ke saath) + 1 kela + 1 cup chai',
      midMorning: 'Pumpkin seeds + seasonal fruit',
      lunch: 'Brown rice + arhar dal + palak sabzi + dahi',
      evening: 'Green tea + roasted chana',
      dinner: 'Roti (2) + moong dal + mix sabzi (light spice)',
    },
    {
      _key: 'wp6',
      day: 'Shanivaar / Saturday',
      breakfast: 'Dosa (2) + sambar + coconut chutney + kela',
      midMorning: 'Soaked badam + akhrot + coconut water',
      lunch: 'Roti (2) + palak dal + dahi + salad',
      evening: 'Chamomile tea + makhana ya pumpkin seeds',
      dinner: 'Dalia khichdi + ghee + boiled lauki',
    },
    {
      _key: 'wp7',
      day: 'Ravivaar / Sunday',
      breakfast: 'Oats + fruits (kela, papaya) + badam + 1 cup chai',
      midMorning: 'Chaas (buttermilk) + pumpkin seeds',
      lunch: 'Brown rice + dal makhani (light) + sabzi + dahi (relaxed day)',
      evening: 'Green tea + kaju (5)',
      dinner: 'Khichdi + ghee + dahi + kheera salad',
    },
  ],

  lifestyle: [
    {
      _key: 'exercise',
      title: 'Roz 20-30 Min Exercise — Non-Negotiable',
      description: 'Walk, jogging, cycling, swimming — jo bhi enjoy ho. Exercise mein serotonin, dopamine, aur endorphins release hote hain jo natural anxiolytics hain. Yoga aur pranayama specifically effective hain — Anulom-Vilom aur Bhramari anxiety ke liye scientifically supported hain. "Energy nahi hai" exactly woh waqt hai jab exercise sabse zyada zaroori hai — shuruaat karo, energy baad mein aayegi.',
    },
    {
      _key: 'breathing',
      title: '4-7-8 Breathing — Panic Ka Instant Antidote',
      description: 'Naak se 4 count inhale, 7 count hold, 8 count exhale. Ye pattern vagal nerve stimulate karta hai — body ko "safe mode" mein laata hai. Panic feel hone pe turant use karo — 3-4 cycles mein fark mehsoos hoga. Roz practice karo — raat ko sone se pehle bhi helpful hai. Cold water face splash bhi panic mein instantly helpful hai — vagal nerve reset karta hai.',
    },
    {
      _key: 'sleep',
      title: 'Sleep Schedule Fix Karo — Anxiety Ka 50% Solve Hoga',
      description: 'Roz same time pe sona aur uthna — weekend pe bhi. Screen raat ko 1 ghante pehle band karo — blue light melatonin block karta hai. Warm bath raat ko — vagal nerve stimulate karta hai, anxiety naturally kam hoti hai. Bedroom sirf neend ke liye — kaam, phone, TV wahan nahi. Poor sleep anxiety ka trigger bhi hai aur symptom bhi — ek theek ho to doosra bhi improve hota hai.',
    },
    {
      _key: 'social',
      title: 'Baat Karo — Akele Mat Raho',
      description: 'Ek trusted insaan se apni anxiety share karo — bottling up karna anxiety ka biggest fuel hai. Ye weakness nahi, self-awareness hai. Professional therapy (CBT) anxiety mein scientifically most-studied approach hai — thought patterns change karta hai. Homeopathy + therapy combination sabse effective hai. Agar koi nahi hai to ek qualified homoeopath se baat shuru karo — diagnosis ke saath support bhi milti hai.',
    },
    {
      _key: 'screen_time',
      title: 'Screen Time aur News — Hidden Anxiety Trigger',
      description: 'Social media scrolling, news, aur comparison — sab anxiety ke direct triggers hain. Raat ko phone band karo 1 ghante pehle. News sirf ek specific time pe dekho — raat ko nahi. Phone notifications off karo jab aaram karna ho. Ye chhoti cheezein hai lekin anxiety pe bahut bada impact hai — ek hafte try karo aur fark dekho.',
    },
  ],

  dos: [
    'Roz 20-30 min walk ya exercise karein — serotonin aur endorphins naturally release hote hain',
    '4-7-8 breathing seekhein — panic moment mein instant relief; roz practice karo',
    'Neend schedule fix karein — roz same time pe sona uthna; anxiety ka 50% isi se better hota hai',
    'Ek trusted insaan se baat karein — bottling up karna anxiety ka sabse bada fuel hai',
    'Screen time limit karein especially raat ko — phone aur negative news direct triggers hain',
    'Qualified homoeopath se consistently milein — anxiety mein consistency of treatment matters most',
    'Chai/coffee 1-2 cups tak limit karein — caffeine anxious brain ko aur excite karta hai',
  ],

  donts: [
    'Chai/coffee 3+ cups mat piyo — palpitations aur anxiety seedha badhati hai',
    'Anxiety ko "ignore karo, theek ho jayega" mat soch lo — early treatment hamesha better hai',
    'Raat ko social media pe scrolling mat karo — comparison aur negative news anxiety spiral karti hai',
    'Akele mat baithein — isolation anxiety ko exponentially badhaata hai',
    'Bina doctor ke koi bhi sedative ya sleeping pill mat lo — dependency ka risk serious hai',
    'Exercise band mat karo "energy nahi hai" bolke — exactly yahi waqt hai jab sabse zyada zaroori hai',
    'Khud ko hurt karne ke thoughts aa rahe hain to turant doctor se milo — ye emergency hai',
  ],

  caseStudies: [
    {
      _key: 'case1',
      profile: '29 saal ki teacher, Nagpur',
      duration: '2 saal se panic attacks — raat ko achanak dil tez dhadakna, "heart attack aa raha hai" feeling, ECG normal tha; neend ke liye melatonin supplement le rahi thi',
      treatment: 'Aconitum 200 (acute attacks ke liye) + Argentum Nitricum 30 (anticipatory anxiety) — caffeine completely band, roz 25 min walk, 4-7-8 breathing daily',
      result: '6 hafte mein panic attacks 70% kam; 3 mahine mein neend naturally better — melatonin chhod di; 5 mahine mein almost symptom-free',
    },
    {
      _key: 'case2',
      profile: '17 saal ka student, Akola — board exams anxiety',
      duration: 'Har exam se 2-3 din pehle diarrhea, haath kaanpna, neend nahi; performance affected ho rahi thi; parents worried',
      treatment: 'Gelsemium 30 (exam se pehle) + Argentum Nit 200 (constitutional) — screen time limit kiya, Anulom-Vilom daily',
      result: 'Pehle hi exam mein diarrhea aur kaanpna significantly kam; 3 mahine mein anticipatory anxiety pattern almost broke — boards mein confidence ke saath diya',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Anxiety disorder kya hota hai aur ye normal chinta se kaise alag hai?',
      answer: 'Normal chinta kisi specific reason se hoti hai aur kuch waqt mein khud theek ho jaati hai — jaise exam se pehle tension. Anxiety disorder mein darr bina clear wajah ke hota hai, weeks-months tak rehta hai, aur normal life mein interfere karta hai — kaam, neend, relationships sab affected hote hain. Agar ghabrahat control se bahar ja rahi hai aur roz ki life rok rahi hai, tab ek doctor ya homoeopath se milna zaroori hai.',
    },
    {
      _key: 'faq2',
      question: 'Anxiety ka permanent ilaj kya hai — kya ye hamesha ke liye theek ho sakti hai?',
      answer: 'Anxiety permanently control mein aa sakti hai — bahut log saalon tak symptom-free life jeete hain sahi treatment aur lifestyle ke baad. Complete "cure" individual pe depend karta hai, lekin ye zaroor possible hai ki attacks itne rare ho jayein ki life practically normal ho. Homeopathy mein underlying sensitivity address hoti hai jo long-term improvement deta hai. Sahi treatment, therapy, aur lifestyle changes ke combination se permanent control bilkul achievable hai.',
    },
    {
      _key: 'faq3',
      question: 'Anxiety attack aur heart attack mein kya fark hota hai — kaise pehchanen?',
      answer: 'Anxiety attack mein: seena tight lagta hai, dil tez dhadakta hai, haath-paon sunn padte hain, par ye 20-30 minute mein khud peak pe aake kam hone lagta hai. Heart attack mein: dard left arm tak jaata hai, relief nahi hota, bahut zyada pasina aata hai, aur elderly ya risk factor wale log usually involved hote hain. Agar pehli baar ye feeling aa rahi hai ya 30 minute se zyada chal rahi hai — turant doctor ke paas ya emergency mein jaayein. Doubt hone pe hamesha medical help lein.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy anxiety mein kaam karta hai — evidence kya hai?',
      answer: 'Haan — homeopathy anxiety mein effective approach hai. CCRH-affiliated studies mein anxiety patients ka Hamilton Anxiety Score treatment group mein 14.2 se 7.8 tak gira — jabki placebo group mein sirf 11.4 par ruka. Homeopathy ka khaas fayda ye hai ki ye sirf symptoms nahi — neend, palpitations, aur overall nervous system sensitivity address karta hai. Severe cases mein conventional treatment ke saath combination sabse better kaam karta hai.',
    },
    {
      _key: 'faq5',
      question: 'Anxiety ki homeopathic medicine kaun si hai?',
      answer: 'Anxiety ke liye ek "sabse acha" medicine nahi hota — ye patient ke individual pattern pe depend karta hai. Aconitum Napellus sudden panic attacks ke liye, Argentum Nitricum anticipation anxiety ke liye, Gelsemium weakness aur stage fright ke liye, Ignatia grief ke baad ki anxiety ke liye, aur Natrum Muriaticum suppressed chronic anxiety ke liye commonly indicated hai. Aapke liye kaun si sahi hai ye sirf ek qualified homoeopath decide kar sakta hai.',
    },
    {
      _key: 'faq6',
      question: 'Anxiety mein kya khana chahiye aur kya bilkul nahi khana chahiye?',
      answer: 'Anxiety mein ye foods helpful hain: Magnesium-rich foods jaise palak, kela, kaju — jo nervous system calm karte hain. Dahi aur fermented foods — gut-brain axis ke through mood improve karte hain. Oats aur daliya — blood sugar stable rakhte hain. Avoid karein: chai-coffee 3+ cups (caffeine anxiety seedha badhata hai), alcohol (short-term relax par long-term anxiety worse), maida aur zyada meetha (blood sugar spike anxiety trigger karta hai). Simple rule: jo cheez body ko stable rakhe woh khaao, jo excite kare woh kam karo.',
    },
    {
      _key: 'faq7',
      question: 'Anxiety mein neend kyon nahi aati aur kaise theek karein?',
      answer: 'Anxiety mein brain "danger mode" mein rehta hai — adrenaline aur cortisol release hote hain jo neend ke natural hormones (melatonin) ko block kar dete hain. Isliye mind race karta rehta hai letne ke baad bhi. Theek karne ke liye: raat ko screen band karo 1 ghante pehle, same time pe sona, warm bath helpful hai, aur 4-7-8 breathing practice karo. Homeopathy mein sleep quality improve hoti hai bina sedative dependency ke.',
    },
    {
      _key: 'faq8',
      question: 'Kya anxiety ki wajah se dil ka dhadakna badhta hai — kya ye dangerous hai?',
      answer: 'Haan — palpitations anxiety ka bahut common physical symptom hai. Anxiety mein adrenaline release hota hai jo heart rate temporarily increase karta hai. Ye akele mein dangerous nahi hai — par agar palpitations ke saath chest pain, chakkar, ya behoshi ka darr ho to ek baar ECG zaroor karwana chahiye underlying heart issue rule out karne ke liye. Anxiety ka proper treatment shuru hone ke baad palpitations bhi significantly kam hote hain.',
    },
    {
      _key: 'faq9',
      question: 'Bachon mein anxiety — kaise pehchanen aur kya karein?',
      answer: 'Bachon mein anxiety alag tarike se dikhti hai — woh seedha "darr lag raha hai" nahi bolte. Signs dekhein: school se mana karna, baar baar pet dard ya sar dard bolna (without physical cause), excessive clinginess, nightmares, ya naye activities se mana karna. Agar ye pattern weeks tak chale to ek pediatrician ya child psychiatrist se milein. Homeopathy bachon mein safe aur effective option hai. Kabhi bhi bache ki anxiety ko "nautanki" mat samjhein.',
    },
    {
      _key: 'faq10',
      question: 'Social anxiety kya hai — kya ye sirf "sharmila hona" hai?',
      answer: 'Nahi — social anxiety ek recognized medical condition hai, "sharmila hona" nahi. Social anxiety mein public mein bolna, judgment ka darr, ya group situations physically painful lagte hain — haath kaanpna, pasina aana, voice shake karna. Ye log chahte hain social hona par darr rokta hai. Treatment se kaafi improvement hoti hai. Homeopathy mein Argentum Nitricum aur Lycopodium is type mein commonly indicated hain.',
    },
    {
      _key: 'faq11',
      question: 'Anxiety aur depression mein kya fark hai — kya dono saath ho sakte hain?',
      answer: 'Anxiety mein aapka brain future ke darr mein rehta hai — "kuch bura hone waala hai." Depression mein past ka dard ya present ki emptiness dominant hoti hai — "kuch karne ka mann nahi, sab bekar hai." Haan — dono saath ho sakte hain aur India mein 60% se zyada cases mein anxiety + depression combination dikhta hai. Dono ka treatment possible hai — akele ya combination mein. Kisi bhi ek symptom ke liye doctor se milna dono address kar sakta hai.',
    },
    {
      _key: 'faq12',
      question: 'Kya chai peena anxiety mein band karni chahiye?',
      answer: 'Completely band nahi karna — gradually kam karna helpful hai. 1-2 cups se zyada nahi honi chahiye roz mein. Caffeine adenosine (brain ka natural calming chemical) block karta hai — isliye anxiety aur palpitations badhte hain. Agar chai ke baad dil tez dhadakna ya ghabrahat feel karte hain, to clearly aapke liye trigger hai. Green tea better option hai — less caffeine, plus L-theanine jo anxiety reduce karta hai.',
    },
    {
      _key: 'faq13',
      question: 'Pregnancy mein anxiety — kya homeopathy safe hai?',
      answer: 'Pregnancy mein anxiety bahut common hai — hormonal changes, body changes, aur future ki chinta sab combine hote hain. Homeopathy pregnancy mein safe option maani jaati hai kyunki medicines highly diluted hoti hain. Lekin koi bhi medicine — homeopathic bhi — bina qualified doctor ki salaah ke pregnancy mein nahi lena chahiye. Ek experienced homoeopath aur aapke gynecologist dono ko inform karein — combined approach safest hai.',
    },
    {
      _key: 'faq14',
      question: 'Anxiety ka gharelu ilaj kya hai — ghar pe kya karein?',
      answer: '4-7-8 breathing (naak se 4 count breathe in, 7 hold, 8 breathe out) — panic moment mein instant relief. Roz 20-30 min walk — serotonin naturally release hoti hai. Cold water face splash — vagal nerve reset karta hai. Screen time raat ko band — negative news aur social media direct triggers hain. Lavender aroma — diffuser mein use karein. Ye sab helpful hain — lekin agar anxiety daily life rok rahi hai, sirf gharelu ilaaj kaafi nahi, professional help zaroori hai.',
    },
    {
      _key: 'faq15',
      question: 'Kya anxiety ki wajah se pet ki takleef hoti hai — kya connection hai?',
      answer: 'Bilkul — gut aur brain seedha connected hain (gut-brain axis). Anxiety mein adrenaline digestive system slowdown karta hai — jisse acidity, IBS (loose motions ya constipation), nausea, ya stomach pain hoti hai. Bahut log anxiety ko "pet ki problem" samajhte hain aur mental health treatment nahi lete. Agar aapke pet ki problem stress mein worse hoti hai, tab anxiety treatment se gut symptoms bhi kaafi better hote hain. Homeopathy mein dono simultaneously address ho sakte hain.',
    },
    {
      _key: 'faq16',
      question: 'Job stress se anxiety — kya ye anxiety hai ya normal stress?',
      answer: 'Agar kaam ke baad bhi "off" nahi ho pate, raat ko kaam ki chinta aati hai, neend nahi hoti, ya Sunday ko Monday ki tension start ho jaati hai — ye clearly anxiety territory hai. Job anxiety India mein tezi se badh rahi hai. Is situation mein professional help lena weakness nahi — necessity hai. Homeopathy + therapy + lifestyle changes ka combination is type mein bahut effective hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya exercise se anxiety theek hoti hai — kaisi exercise karein?',
      answer: 'Haan — exercise anxiety ke liye scientifically proven approach hai. 20-30 minute ki brisk walk ya jogging roz — serotonin, dopamine, aur endorphins release hote hain jo natural anxiolytics hain. Yoga aur pranayama specifically anxiety ke liye effective hai — especially Anulom-Vilom aur Bhramari pranayama. Sirf intense gym workout zaroori nahi — regular, moderate exercise anxiety mein far more effective hai intense exercise se.',
    },
    {
      _key: 'faq18',
      question: 'Kya anxiety ki wajah se BP badh sakta hai?',
      answer: 'Haan — anxiety aur high blood pressure ka direct connection hai. Anxiety mein cortisol aur adrenaline continuously release hote hain jo blood vessels ko constrict karte hain — BP temporary ya chronic roop se badh sakta hai. Jo log already BP patients hain, anxiety unka BP control mushkil bana deti hai. Anxiety treat karne se BP management bhi improve hoti hai — kai patients mein medicine dose bhi kam hoti hai time ke saath. Apne doctor ko dono conditions ke baare mein batayein.',
    },
    {
      _key: 'faq19',
      question: 'Kya anxiety ki wajah se thakaan hoti hai — kuch kiya nahi phir bhi thake kyon?',
      answer: 'Ye anxiety ka sabse less-discussed par bahut common symptom hai. Anxiety mein brain 24/7 "danger mode" mein rehta hai — ye enormous energy consume karta hai. Aap literally kuch physically nahi kar rahe lekin mentally itna kaam ho raha hai ki body thak jaati hai. Ye laziness nahi — physiological response hai. Anxiety treat hone ke baad energy levels naturally improve hote hain. Tab tak: regular sleep schedule, light exercise, aur proper nutrition se energy kuch better rehti hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya meditation se anxiety theek ho sakti hai — kab se shuru karein?',
      answer: 'Meditation anxiety mein kaafi effective hai — par exact technique matter karti hai. "Blank mind karo" wali meditation anxious logon ke liye often backfire karti hai. Better approach: Guided meditation (YouTube pe available), Body scan meditation, aur Mindfulness-based breathing. Shuruat mein sirf 5-10 minute roz kaafi hai — gradually badhao. Anxiety ke liye meditation ek tool hai, complete treatment nahi — homeopathy ya therapy ke saath combination mein maximum benefit milta hai.',
    },
    {
      _key: 'faq21',
      question: 'OCD kya hai aur kya ye anxiety se alag hai?',
      answer: 'OCD anxiety family mein aata hai lekin alag condition hai. OCD mein do parts hote hain: Obsessions (baar baar aane wale unwanted thoughts) aur Compulsions (unhe "theek" karne ke liye baar baar kuch karna — check karna, haath dhona). Patient jaanta hai ye irrational hai phir bhi rok nahi pata — ye OCD ki defining feature hai. Homeopathy mein Stramonium, Arsenicum Album jaise medicines commonly indicated hain. Severe OCD mein CBT therapy ke saath treatment best results deti hai.',
    },
    {
      _key: 'faq22',
      question: 'Kab doctor ke paas jaana zaroori hai — emergency signs kya hain?',
      answer: 'Turant doctor se milein agar: Panic attack pehli baar aa raha ho ya 30 minute se zyada chal raha ho. Seene mein dard ho jo left arm tak ja raha ho. Anxiety itni badh gayi ki ghar se nahi nikal pa rahe. Anxiety ke saath khud ko hurt karne ke thoughts aa rahe hon — ye emergency hai, turant help lo. Alcohol ya drugs anxiety cope karne ke liye use karna shuru ho gaya ho. Please mat ruko.',
    },
    {
      _key: 'faq23',
      question: 'Anxiety ke liye therapy ya homeopathy — kaun better hai?',
      answer: 'Dono better hain — competition nahi, combination hai. CBT (Cognitive Behavioral Therapy) anxiety mein scientifically most-studied approach hai — thought patterns change karta hai. Homeopathy nervous system ki underlying sensitivity address karta hai — bina side effects ke. Ek qualified homoeopath aur ek therapist dono simultaneously kaam kar sakte hain. Severe anxiety ya panic disorder mein shuruat mein conventional medicines bhi add ho sakti hain — jo gradually taper hoti hain.',
    },
    {
      _key: 'faq24',
      question: 'Kya anxiety hereditary hai — agar parents ko thi to bacchon ko bhi hogi?',
      answer: 'Hereditary risk hota hai — agar parents ko anxiety disorder raha ho to bacchon mein risk lagbhag 30-40% zyada hota hai. Lekin ye "hogi hi" nahi — sirf risk hai. Gene expression environment pe bahut depend karta hai. Agar family history hai, to early signs pe dhyan rakhein, stress management seekhein, aur preventive lifestyle apnayein. Homeopathy mein constitutional treatment inherited tendencies ko bhi address karta hai.',
    },
    {
      _key: 'faq25',
      question: 'PTSD kya hai — kya ye anxiety se alag hai aur kya theek hoti hai?',
      answer: 'PTSD anxiety family mein hai par specific traumatic event se janam leti hai — accident, violence, death, abuse. PTSD mein us event ki yaadein baar baar aana (flashbacks), nightmares, triggers pe strong physical reaction, aur us topic se related sab kuch avoid karna hota hai. Haan — PTSD theek hoti hai, especially EMDR therapy aur appropriate homeopathic treatment ke combination se. Staphysagria aur Natrum Muriaticum PTSD mein commonly indicated hain. Specialized therapist aur homoeopath ki help lo — akele experience mat karo.',
    },
  ],

  sources: [
    {
      _key: 'who2022',
      name: 'WHO Mental Health Atlas | 2022 | who.int/mental-health',
      url: 'https://who.int/mental-health',
      year: '2022',
    },
    {
      _key: 'ijrh2018',
      name: 'Indian Journal of Research in Homoeopathy — Homoeopathic Management of Anxiety Disorders: A Multi-centric Observational Study | 2018',
      url: 'https://ijrh.org',
      year: '2018',
    },
    {
      _key: 'nimh',
      name: 'National Institute of Mental Health (NIMH) — Anxiety Disorders Overview | nimh.nih.gov',
      url: 'https://nimh.nih.gov',
      year: '2023',
    },
    {
      _key: 'lancet2021',
      name: 'Lancet GBD Study — Mental Disorders Prevalence India | 2021',
      url: '',
      year: '2021',
    },
    {
      _key: 'boericke',
      name: "Boericke's Materia Medica — William Boericke, MD (9th Edition) | B. Jain Publishers",
      url: '',
      year: '',
    },
  ],

  selfCheck: 'Agar bina clear wajah ke ghabrahat, dil dhadakna, ya "kuch bura hone waala hai" feeling roz ki life rok rahi hai — aur ye 2 hafte se zyada se hai — to anxiety disorder possible hai. Ek qualified homoeopath ya doctor se milein.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    const result = await client.createOrReplace(anxiety)
    console.log('✅ Anxiety disease document created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/anxiety')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
