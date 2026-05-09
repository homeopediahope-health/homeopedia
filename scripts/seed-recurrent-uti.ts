import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-recurrent-uti',
  _type: 'disease',
  title: 'Recurrent UTI',
  hindiName: 'Baar Baar Peshab Ki Nali Ka Infection / Mutravahi Sankraman',
  slug: { _type: 'slug', current: 'recurrent-uti' },
  category: 'Urinary',
  publishedAt: '2026-05-03T00:00:00.000Z',
  metaTitle: 'Recurrent UTI Treatment in Hindi | Homeopathy | Homeopedia',
  metaDescription: 'Baar baar UTI kyu hota hai? Causes, permanent treatment, homeopathic medicines aur diet guide – doctor-reviewed, verified Hinglish mein.',

  heroText: 'Baar baar peshab ki nali ka infection – ye sirf ek infection nahi, ek pattern hai. Jab UTI ek saal mein 3 ya zyada baar aaye, ya 6 mahine mein 2 baar – tab ye recurrent UTI ban jaata hai. Antibiotic se theek hota hai, kuch hafton baad wapas aata hai – aur phir same cycle. India mein 5 mein se 1 mahila is cycle ko jhhelti hai. Homeopathy mein is cycle ko todna possible hai – sirf bacteria ko target karke nahi, balki body ki wo susceptibility address karke jo baar baar bacteria ko invite karti hai.',

  quickFacts: {
    whatItIs: 'UTI jo baar baar aaye – 3+ episodes per year ya 6 mahine mein 2+ baar – bacteria nahi, body ki susceptibility hai main problem jo address karni padti hai',
    howCommon: 'India mein lagbhag 40% women apni zindagi mein UTI experience karti hain; recurrent form mein 20-30% cases convert hote hain',
    treatmentDuration: 'Active episode: 5-7 din | Recurrence prevention: 3-6 mahine',
    successRate: 'CCRH-supported studies mein recurrent UTI patients mein symptom recurrence rate homeopathic group mein significantly lower rahi placebo group ke comparison mein',
  },

  causes: [
    'E. coli bacteria (80% cases mein) – gut se urinary tract tak travel karta hai',
    'Incomplete bladder emptying – bacteria bacha rehta hai andar, next infection ka seed ban jaata hai',
    'Urinary tract ki anatomical structure – women mein urethra chhota hona, bacteria ka aasaan entry',
    'Sexual activity – bacteria ka urinary tract mein push hona, khaaskar new partner ya frequent activity mein',
    'Menopause ke baad estrogen kum hona – protective urethral lining kamzor padna',
    'Immune system ki weakness – diabetes, chronic stress, ya koi bhi immunity-lowering condition',
    'Antibiotic overuse se gut flora disturb hona – body ki natural defence mechanism khatam hona',
    'Catheter ya urinary procedures ka history – mechanical trauma aur bacteria ka direct entry',
  ],

  riskFactors: [
    'Mahilayen – anatomy ki wajah se (urethra chhota aur anus ke paas), men se 8 guna zyada risk',
    'Post-menopausal women – estrogen deficiency se urethral lining thin aur kamzor',
    'Diabetes patients – high sugar bacteria ke liye breeding ground, weak immunity, nerve damage',
    'Sexually active women – especially naye partner ya frequent activity ke baad',
    'Pregnancy – uterus ka pressure bladder pe, hormonal changes, delayed emptying',
    'Low fluid intake waale log – concentrated urine bacteria ko encourage karta hai',
    'Kidney stones waale – bacteria ke liye chhupaane ki jagah banati hain stones',
    'Jo log regularly antibiotic lete hain bina soch ke – gut microbiome aur urinary flora disturb hota hai',
  ],

  complications: [
    'Kidney infection (pyelonephritis) – bahut serious, hospitalization lag sakta hai, IV antibiotics tak naubat',
    'Chronic kidney damage – baar baar upper tract infection se nephrons ko permanent scarring',
    'Antibiotic resistance – baar baar antibiotics se bacteria drug-resistant ban jaata hai, future treatment mushkil',
    'Sepsis (blood infection) – agar infection kidney se blood mein phail gaya – life-threatening emergency',
    'Pregnancy mein preterm labor ya low birth weight – untreated UTI ka serious fetal risk',
    'Bladder wall thickening – chronic inflammation se bladder ka normal function permanently affect hona',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Relapse – Wahi Bacteria Wapas Aaya',
      description: 'Pehle wale treatment ke kuch hafte baad same bacteria se infection dobara hota hai. Matlab treatment poori tarah kaam nahi ki – bacteria kabhi gaya hi nahi tha, bladder wall mein "hide" kar gaye the. Ye type zyada stubborn hoti hai aur conventional antibiotics sirf temporary kaam karte hain. Homeopathy mein bacteria ki "hideout" capacity address ki jaati hai – body ki defense layer strengthen karke.',
    },
    {
      _key: 'type2',
      name: 'Reinfection – Naye Bacteria Se',
      description: 'Ek infection sahi ho jaata hai, kuch waqt baad naya infection aata hai – naye bacteria se. Baar baar bahari bacteria andar aate hain. Anatomy, hygiene, lifestyle, ya immune system kuch allow kar raha hai. Ye type mein homeopathy ka role bahut strong hai – susceptibility kam karna, body ki UTI ko baar baar invite karne ki tendency todna yahi goal hai.',
    },
    {
      _key: 'type3',
      name: 'Post-Menopausal UTI',
      description: 'Menopause ke baad estrogen dramatically kam hone se urinary tract ka protective lining kamzor ho jaata hai. Dryness aur pH change bacteria ko easy entry deta hai. Ye type younger women se alag treatment approach maangti hai. Homeopathy mein hormonal transition ke liye specific remedies hain – Sepia aur Natrum Mur khaas taur pe is phase ke liye indicated hain.',
    },
    {
      _key: 'type4',
      name: 'Post-Intercourse UTI – Honeymoon Cystitis',
      description: 'Sexual activity ke baad UTI aana – ye ek specific pattern hai. Women mein urethra ki short length aur proximity se bacteria easily push ho jaate hain andar. Timing aur triggers specifically is pattern se match karte hain. Simple precaution – sex ke turant baad peshab karna – bahut help karta hai. Homeopathy mein Staphysagria is exact pattern ke liye specifically indicated hai.',
    },
    {
      _key: 'type5',
      name: 'Structural Issues Ke Saath UTI',
      description: 'Kidney stone, bladder prolapse, ya urinary tract abnormality ke saath recurrent UTI. Is type mein conventional diagnosis + treatment dono zaroori hain – structural problem pehle identify karna critical hai. Ultrasound zaroori hai. Homeopathy complementary role mein helpful hai – infection frequency aur severity kam karna aur overall urinary health support karna.',
    },
    {
      _key: 'type6',
      name: 'Diabetic-Associated Recurrent UTI',
      description: 'High blood sugar bacteria ke liye best breeding ground hai. Nerve damage (diabetic neuropathy) se bladder poori tarah empty nahi hoti – ruka hua urine bacteria ki safe haven. Immunity bhi weak hoti hai diabetics mein. Is type mein sugar control + UTI treatment dono simultaneously chahiye. Homeopathy especially relevant hai kyunki immunity aur metabolic balance dono address karna iska core strength hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Peshab Se Related (Most Common Signs)',
      items: [
        'Peshab karte waqt jalan ya dard (burning urination) – UTI ka sabse common aur distinct symptom',
        'Baar baar peshab jaane ki urgency – thodi der mein dobara jaana padna, control nahi rehta',
        'Thoda thoda peshab aana – feel karo bahut aayega, nikle kum – frustrating aur exhausting',
        'Peshab ka cloudy (dhuandha) ya smell wala hona – infection ka direct sign',
        'Peshab mein blood – pink ya red tint dikhna (hematuria) – doctor ko batana zaroori hai',
      ],
    },
    {
      _key: 'sym2',
      category: 'Lower Abdomen Aur Body Ke Signs',
      items: [
        'Pait ke niche (lower abdomen) mein dard ya pressure – bladder irritation ka sign',
        'Pelvic region mein heaviness ya discomfort – especially baithne par worse',
        'Kamar ke niche (lower back) ya side mein dard – kidney involve hone ka warning sign',
        'Bukhaar (fever) agar infection upper tract (kidney) tak pahuncha – serious sign',
        'Kaampna (chills) + nausea – serious systemic infection ka indicator, turant doctor ke paas jayein',
      ],
    },
    {
      _key: 'sym3',
      category: 'Recurrent Pattern Ki Pehchaan',
      items: [
        'Treatment ke baad 2-4 hafte mein dobara wahi symptoms aana – cycle ban gaya hai',
        'Ek saal mein 3 ya usse zyada baar ye cycle repeat hona – ye "recurrent UTI" ki definition hai',
        'Har baar antibiotic lene ke baad kuch waqt theek, phir wapas – short-lived relief pattern',
        'Antibiotics se pehle jaisi jaldi relief nahi milti – bacteria resist karne laga hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Recurrent UTI patients mein symptom recurrence rate homeopathic group mein significantly lower rahi placebo group ke comparison mein',
    avgTreatmentPeriod: '3 se 6 mahine (recurrent pattern todne ke liye)',
    citation: 'Central Council for Research in Homoeopathy (CCRH), Annual Report & Urinary Disorders Research Programme | 2018-2022 | ccrhindia.org',
    keyFindings: [
      'Homeopathic treatment group mein UTI recurrence episodes per year mein meaningful reduction dekhi gayi',
      'Burning urination aur urgency scores dono mein placebo se better improvement recorded ki gayi',
      'Antibiotic use frequency bhi homeopathic group mein kam hui over 6-month follow-up period',
      'Quality of life scores (sleep, daily activity, discomfort) mein significant improvement noted ki gayi',
    ],
  },

  homeopathyBenefits: [
    'Recurrent UTI mein sirf bacteria ko kill karna kaafi nahi – asli problem ye hai ki bacteria baar baar kyun aa raha hai. Kya immunity weak hai? Kya bladder ka natural flora disturb hai? Kya hormonal changes ho rahe hain? Homeopathy in underlying reasons ko address karta hai',
    'Wo body ki innate immunity ko strengthen karta hai taaki bacteria ko baar baar entry milna bandh ho – yahi superficial treatment se deep treatment ka farq hai',
    'Homeopathic treatment sirf symptom relief nahi – relapse frequency todna iska main goal hota hai. Ek qualified homoeopath aapka individual susceptibility pattern dekh ke treat karta hai',
    'Recurrence cycle todna – sirf symptoms nahi, poora pattern address karna – yahi is approach ki sabse badi khoobsoorti hai',
    'Antibiotic dependence kum karna – gut health protect karte hue, microbiome disturb kiye bina treat karna',
    'Hormonal changes (menopause, pregnancy) se related UTI mein safe aur effective approach – jab steroids aur antibiotics avoid karne hote hain',
    'Diabetes, immune issues waale patients mein safe – no drug interactions, liver ya kidney pe koi extra load nahi',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Cantharis',
      bestFor: 'Jinhein peshab mein tez jalan ho, drop by drop peshab aaye, aur har drop pass karte waqt cutting pain feel ho – jaise andar kuch jal raha ho. UTI ka sabse intense burning type.',
      keyIndications: [
        'Tez burning urination – cutting, scalding pain jo drop by drop worse hoti hai',
        'Constant urge lekin thoda thoda – bladder poora empty nahi ho pa raha',
        'Urinary tract ki intense mucous membrane inflammation – soothe karna priority',
      ],
    },
    {
      _key: 'med2',
      name: 'Apis Mellifica',
      bestFor: 'Jab peshab mein stinging (chubbhan jaisi) pain ho, thodi si bhi peshab ke aane pe extreme urgency ho, aur aakhri boond bahut dard de. Jo patients pehle kaafi antibiotics le chuke hain aur phir bhi symptoms baar baar aate hain.',
      keyIndications: [
        'Stinging, bee-sting jaisi urinary pain – burning se alag, chubbhan dominant',
        'Last drop pass karte waqt maximum pain – characteristic symptom',
        'Swelling aur fluid retention ke saath UTI – tissues puffy feel hoti hain',
      ],
    },
    {
      _key: 'med3',
      name: 'Staphysagria',
      bestFor: 'Post-intercourse UTI (honeymoon cystitis) – jab har sexual activity ke baad infection aata ho. Suppressed emotions ya izzat ko thes pahunche – ye emotional pattern bhi is medicine ka pointer hai. Recurrent UTI ka ek very specific aur well-known indicator.',
      keyIndications: [
        'Post-coital UTI – sex ke baad baar baar infection aana, specific pattern',
        'Constant urge even when bladder empty – feel karo jaana hai lekin kuch nahi aata',
        'Suppressed anger ya hurt feelings ke saath recurrent UTI – emotional pattern bhi match karna chahiye',
      ],
    },
    {
      _key: 'med4',
      name: 'Berberis Vulgaris',
      bestFor: 'Jab UTI ke saath kidney area mein (kamar ke dono taraf) dard ho, peshab ka color badla hua ho, aur kidney-bladder connection mein discomfort ho. Kidney stone tendency ke saath recurrent UTI – dono ek saath.',
      keyIndications: [
        'Radiating flank pain – kidney area se bladder tak pain travel karta hai',
        'Peshab ka color aur consistency changed – sediment ya cloudy urine prominent',
        'Kidney-bladder combined involvement – upper aur lower urinary tract dono',
      ],
    },
    {
      _key: 'med5',
      name: 'Sepia',
      bestFor: 'Post-menopausal ya hormonal changes se related recurrent UTI – jab pelvic heaviness, bearing down sensation, aur intimacy ke baad discomfort ho. Thaki hui, irritable, apne mein khoi si mahilayen jinhe laga tha UTI band ho gayi thi lekin menopause ke baad phir shuru ho gayi.',
      keyIndications: [
        'Post-menopausal recurrent UTI – estrogen decline ke background mein',
        'Pelvic bearing down sensation – jaise andar kuch neeche khich raha ho',
        'Hormonal shifts ke background mein UTI – cycles, menopause, postpartum – is transition mein indicated',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Fluids aur Hydration',
      emoji: '💧',
      items: [
        'Paani (2.5 se 3 litre roz) – bacteria ko flush out karta hai; sabse simple aur effective prevention step',
        'Coconut water (naariyal paani) – natural electrolytes ke saath mild alkaline – UTI mein soothing',
        'Barley water (jau ka paani) – traditional aur proven diuretic, bladder ko naturally clean karta hai',
        'Cucumber (kheera) juice – cooling effect, hydration badhata hai, bladder irritation kam karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Protective Foods',
      emoji: '🫐',
      items: [
        'Cranberry juice (unsweetened) – proanthocyanidins bacteria ko bladder wall se attach hone se rokta hai – prevention ke liye useful',
        'Amla (Indian gooseberry) – Vitamin C se bharpur, acidic urine banata hai jo bacteria ko survive nahi karne deta',
        'Lahsun (garlic) – allicin compound mein natural antimicrobial property hai',
        'Nimbu paani (bina zyada cheeni) – Vitamin C + hydration ek saath, bladder bacteria ko suppress karta hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Gut Health aur Immunity Ke Liye',
      emoji: '🥛',
      items: [
        'Dahi (plain probiotic yogurt) – gut flora restore karta hai jo antibiotic overuse se disturb hoti hai; good bacteria UTI prevention mein help karte hain',
        'Fermented foods (kanji, idli, dosa batter) – natural probiotics jo urinary flora bhi balance karte hain',
        'Haldi (turmeric) wala doodh – anti-inflammatory, immunity booster, daily routine mein shamil karein',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Bladder Irritants',
      emoji: '🚫',
      items: [
        'Chai, coffee, aur cold drinks – caffeine bladder ko irritate karta hai aur frequent urgency badhata hai',
        'Alcohol – urine concentrate karta hai aur bladder lining ko directly irritate karta hai',
        'Carbonated/fizzy drinks – carbonic acid bladder mein jalan aur discomfort badhata hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Sugar aur Refined Foods',
      emoji: '🍬',
      items: [
        'Refined sugar (mithai, biscuit, maida) – bacteria ke liye direct food source; UTI recurrence ka bada trigger',
        'Artificial sweeteners (aspartame) – bladder irritants hain, sweetness ka option nahi hain',
        'Packaged fruit juices (sweetened) – hidden sugar + artificial preservatives dono harmful for urinary health',
      ],
    },
    {
      _key: 'da3',
      category: 'Active UTI Mein Avoid Karein',
      emoji: '🌶️',
      items: [
        'Bahut zyada mirch – active infection mein bladder irritation aur jalan aur badh jaati hai',
        'Tomatoes aur tomato-based sauces – highly acidic, active UTI mein jalan trigger karte hain',
        'Vinegar-heavy foods (achaar, processed sauces) – acidity badhata hai, symptoms worse karta hai',
      ],
    },
  ],

  dos: [
    'Din mein 2.5 se 3 litre paani zaroor piyein – bacteria ko flush karna sabse basic aur effective prevention hai',
    'Peshab baar baar hold mat karein – jab feel ho turant jayein; roka hua peshab bacteria ka breeding ground banta hai',
    'Peshab karne ke baad sahi hygiene – front to back wipe karna bacterial transfer rokta hai',
    'Cotton undergarments pehnen – synthetic fabric moisture trap karta hai jo bacteria growth encourage karta hai',
    'Sexual activity ke turant baad peshab karein – bacteria ko flush out karta hai, entry point se door le jaata hai',
    'Doctor se prescribed antibiotic course POORA karein – aadha chhodne se resistance badhti hai',
    'Homeopathic treatment pe tike rahein – recurrent pattern todne mein 3-6 mahine lagte hain, beech mein chhodna benefit waste karta hai',
    'Dahi ya probiotic supplement regularly lein – antibiotics ke baad khaaskar zaroori, gut aur urinary flora rebuild hoti hai',
  ],

  donts: [
    'Symptoms band ho jaayein to antibiotic course beech mein mat chhodein – incomplete course resistant bacteria chodta hai jo next time aur mushkil se jaata hai',
    'Self-medicate mat karein – khud antibiotic mat lo chemist se bina culture test ke; galat antibiotic se resistance badh jaati hai',
    'UTI symptoms pe chai aur coffee mat piyein – jab bhi symptoms aayein, paani aur barley water pe shift ho jaayein',
    'Peshab baar baar hold mat karein – office, safar, ya kisi bhi wajah se; ye ek buri aadat hai jo directly recurrence badhati hai',
    'Scented soaps, vaginal washes, aur douches use mat karein – natural pH disturb karta hai jo protective flora ko khatam karta hai',
    'Tight synthetic jeans ya innerwear mat pehnen infection ke dauran – trapped moisture bacteria ko environment deta hai',
    'Symptoms aate hi ghabra kar khud se antibiotic change mat karein – pehle urine culture test karwayein taaki sahi bacteria identify ho',
    'UTI ko "normal" samajh kar ignore mat karein – baar baar aana body ka signal hai ki kuch systemic address karna hai',
  ],

  seasonalCare: {
    summer: 'Sabse high-risk season. Paseena zyada = dehydration fast – paani intake automatically badhaein. AC mein zyada rehna = thirst feel nahi hoti lekin dehydration ho rahi hai. Barley water + coconut water roz ka routine banayein. Synthetic undergarments garmi mein avoid karein – sweating + bacteria growth ka worst combination. Peshab hold karna is season mein aur bhi dangerous hai.',
    winter: 'Hidden risk season. Thandi mein paani pine ki ichha kam hoti hai – consciously pine padega. Warm herbal teas (tulsi, ginger) paani ki jagah count hoti hain – count karein. Woolen undergarments zyada moisture trap karte hain – cotton prefer karein. Cold se immunity naturally thodi kam hoti hai – ye season recurrence ka second-peak hai.',
    monsoon: 'Bacteria peak season. Humidity mein bacteria faster multiply karte hain. Wet clothes jaldi change karein – nami UTI ka direct trigger hai. Bahar ka paani avoid karein – filtered/boiled paani hi use karein. Is season mein probiotic intake specially important hai – dahi roz khaayein.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Baar baar UTI kyun hota hai – ek baar antibiotic se theek ho jaata hai to dobara kyun aata hai?',
      answer: 'Antibiotic sirf us waqt ke bacteria ko kill karta hai – lekin jo reason hai ki bacteria baar baar aa raha hai, wo nahi badhalta. Jaise agar immunity weak hai, bladder completely empty nahi hota, ya hormonal changes hain – to bacteria ko baar baar entry milti rehti hai. Is cycle ko todne ke liye sirf infection nahi, underlying susceptibility treat karni padti hai. Isliye recurrent UTI mein long-term approach – jisme homeopathy effective role nibhati hai – sirf antibiotic course se zyada kaam aati hai.',
    },
    {
      _key: 'faq2',
      question: 'UTI permanent theek ho sakta hai ya baar baar aata rehega?',
      answer: 'Permanent control bilkul possible hai – aur bahut log hain jinke attacks ek consistent treatment aur lifestyle approach se practically band ho jaate hain. "Permanent UTI" ek fixed destiny nahi hai – ye ek cycle hai jo toda ja sakta hai. Recurrence ki frequency aur severity dono mein significant improvement ho sakti hai. Jinke underlying causes address hote hain – immunity, hormonal balance, hydration, hygiene – unke liye saalon tak recurrence-free rehna realistic goal hai. Homeopathy mein khaas baat ye hai ki ye usi susceptibility pe kaam karta hai jo baar baar invite karta hai infection ko.',
    },
    {
      _key: 'faq3',
      question: 'UTI mein kaunsa test karana chahiye? Sirf symptoms se nahi pata lagta kya?',
      answer: 'Sirf symptoms se UTI diagnose ho sakta hai pehli baar – lekin recurrent UTI mein tests zaroori hain. Urine Culture and Sensitivity (C&S) sabse important test hai – ye batata hai exactly kaunsa bacteria hai aur kaun sa antibiotic uspe kaam karega. Urine Routine/Microscopy bhi helpful hai. Agar baar baar ho raha hai to ultrasound (kidney-bladder) karwana chahiye yeh dekhne ke liye ki koi structural issue (stone, incomplete emptying) to nahi hai. Sirf dipstick test ya symptoms se treatment karna – especially recurrent cases mein – antibiotic resistance ka risk badhata hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy UTI mein kaam karta hai – ya sirf antibiotic se hi theek hota hai?',
      answer: 'Haan – homeopathy recurrent UTI mein ek effective complementary approach hai, khaaskar jab antibiotic se baar baar theek hoke dobara aata ho. CCRH-supported research mein homeopathic treatment group mein recurrence frequency mein meaningful reduction dekhi gayi placebo group ke comparison mein. Homeopathy ka fayda ye hai ki ye sirf is infection ko target nahi karta – aapki body ki wo susceptibility address karta hai jo baar baar bacteria ko invite karti hai. Active severe infection (especially kidney involvement) mein antibiotic pehle lena zaroori hai – homeopathy alongside ya prevention ke liye use karo.',
    },
    {
      _key: 'faq5',
      question: 'UTI mein kya khana chahiye aur kya nahi? Kya diet se fark padta hai?',
      answer: 'Haan, diet bahut fark padti hai – especially recurrence rokne mein. Sabse important: paani khub piyein (2.5-3 litre roz), barley water aur coconut water excellent hai. Cranberry juice (unsweetened) bladder wall pe bacteria ki grip todta hai. Dahi (probiotic) gut bacteria restore karta hai. Avoid karein: chai, coffee, alcohol, carbonated drinks – ye bladder irritants hain. Refined sugar kam karein – bacteria ke liye ye khaana hai. Active UTI mein bahut mirchi aur tomato-heavy food bhi jalan badhata hai.',
    },
    {
      _key: 'faq6',
      question: 'Bacchon mein baar baar UTI kyu hoti hai? Girls aur boys dono mein?',
      answer: 'Bacchon mein recurrent UTI ka sabse common reason hai vesicoureteral reflux (VUR) – jab peshab wapas kidney ki taraf jaata hai. Girls mein zyada hoti hai anatomy ki wajah se, lekin uncircumcised boys mein bhi first year mein zyada risk hota hai. Signs hain: bukhaar bina kisi wajah ke, peshab mein smell, baar baar peshab aana, bed-wetting agar phir se shuru ho. Bacchon mein UTI kabhi bhi ignore mat karein – kidney damage fast hoti hai. Ultrasound aur specialist referral zaroor karwayein baar baar aane pe. Homeopathy bacchon mein safely use ho sakti hai alongside treatment.',
    },
    {
      _key: 'faq7',
      question: 'UTI aur diabetes ka kya rishta hai? Diabetic log kyun zyada affected hain?',
      answer: 'High blood sugar bacteria ke liye best breeding ground hai – jab urine mein sugar zyada hoti hai to bacteria bahut tezi se multiply karte hain. Diabetes mein nerve damage (neuropathy) se bladder poori tarah empty nahi hoti – ruka hua urine bacteria ki safe haven banta hai. Immunity bhi weak hoti hai diabetics mein. Isliye recurrent UTI aur diabetes ka combination common hai aur treatment mein sugar control equally important hai. Diabetic patients ke liye homeopathy especially relevant hai kyunki immunity aur metabolic balance pe kaam karna unka core goal hai.',
    },
    {
      _key: 'faq8',
      question: 'UTI ke symptoms hain lekin test negative hai – ye kya ho sakta hai?',
      answer: 'Iska naam hai "sterile cystitis" ya "interstitial cystitis" – bladder mein jalan ke symptoms hain lekin culture mein bacteria nahi milta. Kuch reasons: agar antibiotics pehle le li hain to bacteria temporarily suppress ho jaata hai, test timing alag tha, ya bacteria culture mein grow nahi kiya. Kabhi kabhi fungal infection (candida) bhi UTI jaisi symptoms deta hai jo standard test mein miss ho jaata hai. Interstitial cystitis ek alag condition hai jisme chronic bladder irritation hoti hai bina infection ke. Aise cases mein specialist consultation zaroori hai. Homeopathy in "negative test + real symptoms" cases mein commonly helpful hoti hai kyunki ye symptom picture pe treat karta hai.',
    },
    {
      _key: 'faq9',
      question: 'Honeymoon cystitis kya hota hai? Kya ye normal hai?',
      answer: 'Honeymoon cystitis ek informal naam hai post-coital UTI ka – jab sexual activity ke baad UTI aaye, baar baar. Ye normal nahi hai, lekin common hai – khaaskar nayi sexual relationships mein ya partner change ke baad. Women mein urethra ki short length aur proximity se bacteria easily push ho jaate hain andar. Simple precaution: sex ke turant baad peshab karein – bacteria flush ho jaata hai. Homeopathy mein Staphysagria is specific pattern ke liye khaas indicate hai aur regular sufferers ko is cycle se relief mil sakti hai.',
    },
    {
      _key: 'faq10',
      question: 'UTI mein kidney infected ho gayi hai kaise pata chalega?',
      answer: 'Lower UTI (bladder infection) aur kidney infection (pyelonephritis) ke alag signs hain. Kidney involve hone pe: kamar ke ek ya dono taraf mein dard (flank pain), bukhaar 101°F se zyada, kaampna (chills), nausea ya ulti. Agar sirf jalan + frequent urination hai to usually bladder infection hai. Lekin agar upar ke symptoms mein se koi bhi hai – doctor ke paas turant jayein. Kidney infection mein IV antibiotics bhi lag sakti hain. Ye serious condition hai jise ghar pe treat nahi karna chahiye.',
    },
    {
      _key: 'faq11',
      question: 'UTI ka ghar pe ilaaj (home remedies) kya hai? Kya ye kafi hai?',
      answer: 'Ghar pe kuch helpful steps hain – lekin ye antibiotics ka replacement nahi hain, support ke liye hain. Jo kaam karta hai: khub paani pina (flush out karta hai), barley water roz lena, cranberry juice (unsweetened), paani mein thoda baking soda (urine less acidic karta hai, jalan kam hoti hai – short term). Dahi khana aur warm water bottle lower abdomen pe comfort deta hai. Lekin agar symptoms 2 din se zyada hain, bukhaar hai, ya kamar mein dard hai – ghar pe mat ruko, doctor ke paas jaao. Baar baar wali UTI mein home remedies sirf supportive hain – treatment nahi.',
    },
    {
      _key: 'faq12',
      question: 'UTI sirf women ko hoti hai ya men ko bhi?',
      answer: 'Mostly women ko hoti hai – women mein urethra 4 cm hai jabki men mein 20 cm, isliye bacteria ka bladder tak pahunchna women mein bahut aasaan hai. Lekin men ko bhi UTI ho sakti hai, khaaskar 50 saal ke baad enlarged prostate ki wajah se (bladder poori tarah empty nahi hoti). Younger men mein UTI rare hai aur agar hai to structural abnormality ka sign ho sakta hai – investigation zaroor karo. Men mein UTI kabhi "simple" consider mat karo – always full workup karo.',
    },
    {
      _key: 'faq13',
      question: 'UTI aur yeast infection (fungal) mein kya fark hai? Symptoms same lagte hain?',
      answer: 'Dono mein jalan aur discomfort hoti hai, lekin kuch key differences hain: UTI mein mainly peshab karte waqt jalan, frequent urgency, aur kabhi kabhi blood in urine hota hai. Yeast infection mein thick white discharge, intense itching (outside), aur swelling hoti hai – peshab mein utni jalan nahi hoti. Dono ek saath bhi ho sakti hain – antibiotics ke baad yeast overgrowth common hai. Test karwao – treatment alag hai, dono ke liye alag medicines hain. Ek ka treatment dusre mein kaam nahi karta.',
    },
    {
      _key: 'faq14',
      question: 'Kya UTI se kidney stone banta hai? Ya stone se UTI?',
      answer: 'Connection dono taraf hai. Kidney stone peshab ke flow ko block karta hai aur bacteria ko chhupaane ki jagah deta hai – isliye stone wale patients mein UTI more common hai. Doosri taraf – kuch bacteria (Proteus mirabilis) urine ko alkaline banate hain jo struvite stones banata hai. Isliye recurrent UTI mein kabhi kabhi stone bhi milte hain – aur recurrent stone mein UTI bhi. Ultrasound ya CT scan karwana jab UTI baar baar aaye – stone rule out karna zaroori hai.',
    },
    {
      _key: 'faq15',
      question: 'Periods (menstruation) ke time UTI zyada kyun hoti hai?',
      answer: 'Periods ke time hormonal fluctuation hoti hai – estrogen peak aur fall dono bladder lining ko affect karte hain. Blood ka presence bacteria ke liye nutrition hai. Hygiene practices (sanitary pads ka frequent change, moisture) bhi UTI risk badha sakti hain is time. Pain killers jo periods mein lete hain (NSAIDs) kidney pe thoda load dalte hain. Agar aapka UTI har periods ke saath aata hai to ye ek specific pattern hai – doctor ko batayein, homeopathy mein is cyclic pattern ke liye specific approach hai.',
    },
    {
      _key: 'faq16',
      question: 'Menopause ke baad UTI itni baar kyun ho rahi hai? Pehle kabhi nahi hoti thi?',
      answer: 'Menopause ke baad estrogen dramatically kam ho jaati hai. Estrogen hi tha jo vaginal aur urethral lining ko healthy, moist, aur protective rakhta tha. Estrogen kum hone se: lining thin aur dry hoti hai, natural protective bacteria (lactobacilli) kam ho jaate hain, pH badal jaata hai aur bladder bacteria ke liye zyada accessible ho jaata hai. Ye "post-menopausal UTI" ek recognized medical condition hai. Homeopathy mein Sepia, Natrum Mur, aur kuch aur remedies is transition period ke liye specifically indicated hain.',
    },
    {
      _key: 'faq17',
      question: 'UTI ke saath sex karna theek hai? Partner ko bhi infection ho sakta hai?',
      answer: 'Active UTI ke time sex avoid karna best hai – kyunki mechanical pressure symptoms aur jalan badha deta hai, aur bacteria further push ho sakta hai. UTI bacterial infection hai jo sexually transmitted nahi hai – aapke partner ko UTI transfer nahi hogi us tarah se. Lekin partner se bacteria aana possible hai – especially agar partner ka hygiene proper nahi. Theek hone ke baad phir sex karein, aur uske turant baad peshab zaroor karein. Agar pattern hai ki sex ke baad har baar UTI aati hai to ye Staphysagria indication hai homeopathy mein.',
    },
    {
      _key: 'faq18',
      question: 'UTI prevention ke liye kaunsi daily habits banani chahiye?',
      answer: 'Ye 5 habits UTI recurrence mein most proven hain: (1) Roz 2.5-3 litre paani – baseline flush mechanism. (2) Peshab kabhi hold mat karein – 4-6 ghante max. (3) Cotton undergarments – synthetic fabric moisture trap karta hai. (4) Sex ke baad peshab – sabse important post-intercourse habit. (5) Roz dahi ya probiotic – gut aur urinary flora maintain karta hai. Bonus: Front to back wiping – bacteria transfer rokta hai. Ye simple habits consistently follow karne se bahut se patients mein recurrence significantly kam ho jaata hai bina kisi medicine ke.',
    },
    {
      _key: 'faq19',
      question: 'UTI mein peshab hold karna chahiye ya baar baar jaana chahiye?',
      answer: 'Baar baar jaana chahiye – peshab hold karna bilkul avoid karein. Ruka hua urine bladder mein bacteria ke multiply hone ka mauka deta hai. Jo log office, school, ya public toilet se bachne ke liye ghanton peshab hold karte hain – unhe recurrent UTI zyada hoti hai. Baarbaar jaane ki urge feel ho to jaayein – force yourself mat karein. Haan, agar har 30 minute mein thoda thoda feel ho (overactive bladder type) to doctor se discuss karein – ye alag issue hai. Lekin normal urge ko hold karna: koi benefit nahi, only risk.',
    },
    {
      _key: 'faq20',
      question: 'Kya cranberry supplements ya juice really kaam karta hai UTI mein?',
      answer: 'Cranberry juice aur supplements prevention mein helpful hain – active infection mein nahi. Cranberry mein proanthocyanidins hote hain jo E. coli bacteria ko bladder wall se stick nahi hone dete. Multiple studies dikhate hain ki jo log regularly cranberry consume karte hain unke UTI episodes kam hote hain. Lekin: unsweetened juice zyada effective hai sweetened se, concentrated supplements bhi helpful hain, aur ye antibiotic ka replacement nahi – prevention tool hai. Agar active infection hai to pehle antibiotic/treatment, cranberry uske saath ya prevention ke liye.',
    },
    {
      _key: 'faq21',
      question: 'UTI ke liye doctor ke paas kab jaana zaroori hai? Ghar pe kab tak wait kar sakte hain?',
      answer: 'Ye signs hain jab turant doctor ke paas jaana chahiye: bukhaar 100°F (38°C) se zyada – kidney tak pahuncha ho sakta hai. Kamar (flank) mein dard – kidney involvement sign. Nausea ya vomiting. Symptoms 2 din mein improve nahi ho rahe. Aap pregnant hain. Aapko diabetes hai ya immunity weak hai. Peshab mein blood dikh raha hai. Pehle jo antibiotic kaam karti thi wo ab nahi kar rahi. Agar pehla UTI hai, mild hai aur paani pi rahe ho – tab 24 ghante observe karna reasonable hai – lekin upar ke kisi bhi sign pe wait mat karein.',
    },
    {
      _key: 'faq22',
      question: 'Kya baar baar UTI se kidney kharab ho sakti hai? Long-term damage hoga?',
      answer: 'Lower UTI (bladder infection) se kidney damage usually nahi hota – bladder ki lining resistant hoti hai. Risk tab badh jaata hai jab infection upper tract tak phaile (pyelonephritis – kidney infection). Agar ye baar baar ho aur theek se treat na ho, to kidney scarring ho sakti hai. Bacchon mein VUR (vesicoureteral reflux) ki wajah se recurrent UTI zyada dangerous hai. Adults mein – agar timely treat karte rehein, complication unlikely hai. Lekin ignore karna ya incomplete treatment – yahi risk create karta hai. Isliye recurrent UTI ki proper investigation aur long-term management plan banana zaroori hai.',
    },
    {
      _key: 'faq23',
      question: 'Homeopathy mein UTI ke liye kitne time mein fark dikhta hai? Kitne mahine treatment karni padti hai?',
      answer: 'Ek active UTI episode mein homeopathy ka farak 24-72 ghante mein feel hone lagta hai – burning, urgency, aur frequency improve hone lagti hai. Lekin recurrent pattern todne ke liye – yahi asli kaam hai – 3 se 6 mahine ka consistent treatment chahiye. Is dauraan jo log triggers seriously lete hain, paani khub peete hain, diet follow karte hain, unke episodes ki frequency dramatically kam hoti hai. Jo log beech mein treatment chhodh dete hain wo pattern dobara shuru hone ka risk leta hai. Patience aur consistency – recurrent UTI mein homeopathy ka result yehi require karta hai.',
    },
    {
      _key: 'faq24',
      question: 'UTI ke konse symptoms mein turant doctor ke paas jaana chahiye – emergency kab hai?',
      answer: 'Ye emergency signs hain – in mein se koi bhi ho to turant doctor ke paas jayein, wait mat karein: bukhaar 100°F (38°C) se zyada – infection kidney tak pahuncha ho sakta hai. Kamar ya side mein tez dard (flank pain). Kaampna (chills) aur thithurna. Nausea ya ulti. Confusion ya extreme weakness – elderly mein UTI sepsis sign ho sakti hai. Pregnancy mein koi bhi UTI symptom. 2 din se zyada symptoms mein koi improvement nahi. In situations mein ghar pe paani pina ya home remedies enough nahi hain – medical attention zaroori hai.',
    },
    {
      _key: 'faq25',
      question: 'Pregnancy mein UTI hogi to kya karna chahiye? Kya ye baby ke liye dangerous hai?',
      answer: 'Pregnancy mein UTI ko kabhi bhi ignore mat karein – ye baby ke liye genuinely risky ho sakta hai. Untreated UTI pregnancy mein preterm labor aur low birth weight ka risk badhata hai. Obstetric doctor se turant milein – pregnancy-safe antibiotics available hain. Homeopathy bhi pregnancy mein safe complementary option hai, lekin doctor ki supervision zaroor rakhein. Prevention ke liye: khub paani piyein, peshab hold mat karein, cotton pehnen. Asymptomatic bacteriuria (bacteria hai lekin symptoms nahi) bhi pregnancy mein treat ki jaati hai – routine urine tests isliye important hain.',
    },
  ],

  relatedDiseases: [
    'Kidney Stone',
    'Ovarian Cyst',
    'PCOD',
    'Menopause',
    'Diabetes',
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Recurrent UTI created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/recurrent-uti')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
