import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-ringworm',
  _type: 'disease',
  title: 'Ringworm (Daad)',
  hindiName: 'दाद / दाद-खाज / Tinea',
  slug: { _type: 'slug', current: 'ringworm' },
  category: 'Skin',
  publishedAt: '2026-05-02T00:00:00.000Z',
  metaTitle: 'Ringworm (Daad) — Treatment, Types aur Homeopathic Cure Guide',
  metaDescription: 'Ringworm (Daad) ka permanent treatment, types, homeopathic medicines, diet chart aur skin care — verified info, doctor-reviewed. Hinglish mein.',
  heroText: 'Ringworm ek fungal infection hai — iska keedon se koi lena dena nahi, naam misleading hai. Skin pe ring jaisi gol, red, itchy patch banti hai jo dhire dhire baahri taraf barhti hai. Ye bahut contagious hai — ek insaan se doosre ko, ya infected jaanwar se bhi ho sakti hai. India mein garam aur humid mausam ki wajah se ye bahut common hai. Timely treatment se ye bilkul theek ho sakti hai — aur homeopathy se baar baar aane ki tendency bhi khatam ho sakti hai.',

  quickFacts: {
    whatItIs: 'Fungal skin infection — koi keeda nahi hota, naam misleading hai',
    howCommon: 'India mein skin clinic visits ka 30-40% fungal infections hain — Tinea group sabse common',
    treatmentDuration: 'Mild cases: 2-4 hafte | Homeopathic constitutional: 4-12 hafte | Nail/Scalp: 3-6 mahine',
  },

  causes: [
    'Dermatophyte fungi (Trichophyton, Microsporum, Epidermophyton) ka skin pe attack',
    'Infected insaan se seedha skin contact',
    'Infected jaanwar (kutta, billi, gaay) ko chhuna',
    'Shared items — towel, kapde, kangha, sports equipment',
    'Public jagah (swimming pool, gym floor) par nange pair chalna',
    'Kaafi garmi aur nami (humidity) — fungus ke palne ke liye ideal conditions',
  ],

  riskFactors: [
    'Bacche (school-age) — zyada close contact ki wajah se',
    'Athletes aur gym jaane waale — sweat + shared equipment',
    'Pet owners — infected animals se direct contact',
    'Zyada pasina aane wale, tight synthetic kapde pehenne wale',
    'Diabetes ya kamzor immunity waale',
    'Garm aur humid jagahon mein rehne waale',
    'Public shower, swimming pool, locker room use karne waale',
    'Iron deficiency ya nutritional weakness wale log',
  ],

  complications: [
    'Secondary bacterial infection — scratching se wound ban sakta hai',
    'Tinea Incognito — galat steroid cream lagaane se fungus aur andar chali jaati hai',
    'Permanent hair loss — agar scalp infection theek na ho',
    'Nail deformity — naakhun permanently kharab ho sakta hai',
    'Spread to family members — ghar mein baaki logo ko ho sakti hai',
    'Kerion (abscess) — scalp pe pus-filled, painful swelling',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Tinea Corporis (Body Ringworm)',
      description: 'Sharir ke kisi bhi hisse pe ring-shaped red patch. Sabse common type — haath, pair, peeth, pet pe hoti hai. Seedha contact ya infected kapdon se failti hai.',
      percentage: 'Sabse Common',
    },
    {
      _key: 'type2',
      name: 'Tinea Cruris (Jock Itch)',
      description: 'Groin area (jaangh ke beech) mein hoti hai. Zyada pasina aane wale purushon mein common. Geela aur tight underwear major reason hai.',
    },
    {
      _key: 'type3',
      name: 'Tinea Pedis (Athlete\'s Foot)',
      description: 'Pair ke angoothe ke beech aur taalon mein. Public pool, gym locker room se failti hai. Chhalke, dard, aur khujli hoti hai.',
    },
    {
      _key: 'type4',
      name: 'Tinea Capitis (Scalp Ringworm)',
      description: 'Sar ki khal pe ring-shaped bald patches. Zyada tar bacchon mein hoti hai. School mein ek bacche se doosre bacche mein jaldi failti hai.',
    },
    {
      _key: 'type5',
      name: 'Tinea Unguium (Nail Ringworm)',
      description: 'Naakhun mota, peela, aur toota-sa ho jaata hai. Pair ke naakhun zyada affected hote hain. Sabse zyada time lagta hai theek hone mein.',
    },
    {
      _key: 'type6',
      name: 'Tinea Barbae (Daadhi-Moonch ka Daad)',
      description: 'Daadhi aur moonch wale area mein. Shaving razor share karne se ya barber shop se. Adults men mein hota hai.',
    },
    {
      _key: 'type7',
      name: 'Tinea Versicolor (Rang Badalne Wala Daad)',
      description: 'Skin pe white, pink ya brown patches — sun mein dono rang contrast karte hain. Malassezia fungus se hota hai. Garm aur humid climate mein baar baar aata hai.',
    },
  ],

  symptoms: [
    {
      _key: 'grp1',
      category: 'Skin Ke Signs (Sab Types Mein Common)',
      items: [
        'Gol ya ring-shaped red patch — beech saaf, border raised',
        'Border pe chhalke (scaling) ya chhote daane',
        'Teez khujli — khaas kar raat mein',
        'Patch baahri taraf badh raha ho (growing ring pattern)',
      ],
    },
    {
      _key: 'grp2',
      category: 'Infection Ki Location Se Alag Signs',
      items: [
        'Scalp pe: Baal jhadna, bald patch, sar pe crust jaisi layer',
        'Naakhun mein: Motaapan, peela-bhura rang, tootna',
        'Pair mein: Angoothe ke beech chhalke, dard se chalna, blisters',
        'Groin mein: Inner thigh pe red rash, chalne par irritation',
      ],
    },
    {
      _key: 'grp3',
      category: 'Infection Badhne Par',
      items: [
        'Zyada se zyada patches — ek se kai hona (spreading ringworm)',
        'Discharge ya pus (secondary bacterial infection ho to)',
        'Skin mein dard — sirf khujli nahi, burning sensation',
        'Lymph nodes mein sujan (severe cases mein)',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Meaningful improvement',
    avgTreatmentPeriod: '4-12 hafte',
    citation: 'CCRH Clinical Research Studies on Dermatological Conditions | CCRH Annual Reports (2015-2022) | Journal of Evidence-Based Complementary & Alternative Medicine',
    keyFindings: [
      'Recurrent fungal skin infections mein homeopathic treatment group ne significantly kam relapse dikhaya',
      'Itching aur scaling scores treatment group mein placebo se behtar result aaye',
      'Constitutional medicines ne immunity strengthen karke reinfection rate kam ki',
    ],
  },

  homeopathyBenefits: [
    'Baar baar aane wali daad (recurrent ringworm) ki tendency khatam karna',
    'Side-effect-free treatment — bacchon, pregnant women, elderly ke liye safe',
    'Sirf skin nahi — immunity bhi treat hoti hai',
    'Antifungal creams se relief nahi mila to constitutional treatment effective ho sakta hai',
    'Skin ke saath digestive ya stress issues bhi address hote hain jo recurrence badhate hain',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Sepia',
      bestFor: 'Hormonal context mein baar baar aane wali daad, garmi se badhne wale patches, thakaan ke saath khujli',
      keyIndications: ['Hormonal ringworm', 'Garmi se badhe', 'Recurrent in women', 'Thakaan ke saath', 'Ring patches'],
    },
    {
      _key: 'med2',
      name: 'Tellurium',
      bestFor: 'Multiple ring patches — ek dusre se connected ya overlapping, body ke kai hisson pe simultaneously',
      keyIndications: ['Multiple overlapping rings', 'Tezi se spreading', 'Tinea corporis', 'Body ke kai hisse', 'Classic ring pattern'],
    },
    {
      _key: 'med3',
      name: 'Sulphur',
      bestFor: 'Teez khujli raat mein aur nahane ke baad, skin rough aur dry, chronic recurrent infections',
      keyIndications: ['Raat mein khujli', 'Nahane ke baad badhe', 'Chronic stubborn daad', 'Rough dry skin', 'Anti-relapse'],
    },
    {
      _key: 'med4',
      name: 'Graphites',
      bestFor: 'Moti sticky honey-like discharge wali daad, skin folds mein, nails bhi affected, overweight patients',
      keyIndications: ['Moist weeping daad', 'Skin folds mein', 'Nail affected', 'Sticky discharge', 'Overweight constitution'],
    },
    {
      _key: 'med5',
      name: 'Chrysarobinum',
      bestFor: 'Violent itching wale ring patches, khaas kar face, ears aur scalp pe, crust aur scaling zyada',
      keyIndications: ['Violent itching', 'Face aur scalp daad', 'Tinea capitis', 'Crust aur scaling', 'Ear ringworm'],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Fungal Foods',
      emoji: '🧄',
      items: [
        'Lehsun (Garlic) — natural antifungal allicin, infection se ladhne mein help',
        'Adrak (Ginger) — anti-inflammatory aur antifungal properties',
        'Haldi (Turmeric) — curcumin fungal growth rokne mein madadgar',
        'Neem ke patte — blood purifier, skin infections mein traditional aur evidence-backed',
      ],
    },
    {
      _key: 'di2',
      category: 'Immunity Boosters',
      emoji: '🥦',
      items: [
        'Vitamin C waale foods (nimbu, amla, santara) — immunity strong, skin repair',
        'Palak, methi, saag — iron aur zinc, skin healing ke liye zaroori',
        'Moong dal, masoor dal — protein se wound healing aur skin regeneration',
        'Pumpkin seeds (kaddu ke beej) — zinc se bharpoor, antifungal aur immunity booster',
      ],
    },
    {
      _key: 'di3',
      category: 'Probiotic Foods',
      emoji: '🥛',
      items: [
        'Dahi (plain, bina sugar) — gut bacteria balance, fungal overgrowth control',
        'Chaach (buttermilk) — cooling effect ke saath probiotic benefits',
        'Homemade fermented pickles — limited quantity mein, gut health ke liye',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Sugar aur Refined Carbs',
      emoji: '🍬',
      items: [
        'Cheeni, mithai, chocolates, cold drinks — sugar fungal growth ka sabse bada fuel hai',
        'Maida products — bread, biscuits, noodles — rapid sugar conversion',
        'Fruit juices (packaged) — concentrated sugar jaldi blood mein jaata hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Fungus-Rich / Fermented Foods',
      emoji: '🍄',
      items: [
        'Mushrooms — khud ek fungus hai, sensitive patients mein ringworm badha sakta hai',
        'Alcohol (beer, wine) — yeast se bana hai, body mein fungal load badh sakta hai',
        'Yeast wali cheezein — bakery bread, packaged snacks with yeast',
      ],
    },
    {
      _key: 'da3',
      category: 'Inflammatory Triggers',
      emoji: '🌶️',
      items: [
        'Processed dairy in excess — kuch logon mein skin inflammation badhata hai',
        'Tala hua khaana (deep fried) — skin repair slow hoti hai',
        'Bahut teekha khaana (excessive spice) — body heat badhti hai, itching intense hoti hai',
      ],
    },
  ],

  dietTip: 'Cheeni bilkul kam karo — sugar fungus ka direct fuel hai. Sirf ye ek change aapke treatment results mein fark laata hai. Dahi (bina sugar, plain) roz khao — gut flora balance fungal infections se ladhne mein help karta hai.',

  dietNote: 'Seasonal tip: Garmi aur barish ke mausam mein extra caution zaroor rakhein. Din mein 2 baar nahana, loose cotton kapde, aur public jagahon pe footwear — in teen cheezon se infection 70% tak roka ja sakta hai.',

  dos: [
    'Infected area ko daily mild soap se dhoyein aur completely dry karo — fungus nami mein palta hai',
    'Loose, breathable cotton kapde pehno — synthetic materials pasina rokti hain aur infection badhati hain',
    'Apna towel, kapde, kangha alag rakho — ghar mein spread rokne ke liye',
    'Naakhun chote rakho — scratching se secondary infection ka risk hota hai',
    'Pets ka regular vet checkup karwao — animals ringworm ka silent source ho sakte hain',
    'Gym ya public place mein hamesha footwear pehno — bare feet se fungus pakadti hai',
    'Bedsheets aur pillow covers weekly hot water mein dhoyein — fungal spores kill hote hain',
    'Homeopathic treatment ke saath saath proper hygiene maintain karo',
  ],

  donts: [
    'Infected jagah mat khujao — nails se skin mein cracks bante hain aur bacterial infection andar ghus sakta hai',
    'Kisi aur ka towel, napkin, undergarment mat use karo — direct spread hoti hai',
    'Bina doctor advice ke steroid cream mat lagao — Tinea Incognito hota hai, ring chhupta hai andar phalti hai',
    'Infected area hamesha dhaka mat rakho airtight bandage se — skin ko breathe karne do',
    'Ilaaj adhoora mat chhodna — 2-3 din mein theek lage to bhi treatment poori karo warna relapse pakka hai',
    'Pet ko bed share mat karo jab tak unka checkup na ho',
    'Antifungal cream apply karke turant tight clothes mat pehno — cream absorb hone do',
  ],

  faqs: [
    { _key: 'faq1', question: 'Ringworm (Daad) kya hoti hai aur ye kaise dikhti hai?', answer: 'Ringworm ek fungal skin infection hai jisme skin pe gol, ring-shaped red patch banti hai — beech ka hissa saaf dikhta hai aur border raised ya scaly hoti hai. Iska naam misleading hai — koi keeda (worm) nahi hota. Ye Dermatophyte fungi ki wajah se hoti hai jo skin, baalon aur nakhunon ko affect karti hai. Patch dhire dhire baahri taraf badh rahi hoti hai aur teez khujli hoti hai — khaas kar raat mein ya nahane ke baad. Agar aise koi bhi gol patch dikhe jo badh rahi ho, to doctor ya homeopath se milein.' },
    { _key: 'faq2', question: 'Daad kitne din mein theek hoti hai?', answer: 'Mild ringworm conventional antifungal treatment se 2-4 hafte mein theek ho jaati hai. Lekin agar daad baar baar aati ho, ya naakhun aur scalp mein ho, to 3-6 mahine bhi lag sakte hain. Homeopathic treatment mein typically 4-12 hafte lagte hain — lekin iska fayda ye hai ki recurrence bahut kam hoti hai. Treatment adhoori chhodne se daad wapas aati hai — ye sabse common reason hai "daad theek nahi hoti" complaints ka.' },
    { _key: 'faq3', question: 'Daad baar baar kyun aati hai?', answer: 'Ringworm baar baar aane ke main reasons: (1) Treatment poori na karna — symptoms gaye, medicine band — fungi wapas aate hain. (2) Infected person ya animal se dobara contact. (3) Kamzor immunity. (4) Nami wala environment — pasina, tight kapde, geele pair. (5) Ghar mein kisi ko infection hona aur share karna. Homeopathy mein constitutional treatment se immunity strengthen hoti hai — isliye recurrence rate homeopathic patients mein kam hoti hai.' },
    { _key: 'faq4', question: 'Kya ringworm ek insaan se doosre ko ho sakti hai?', answer: 'Haan — ringworm highly contagious hai. Ye in tareekon se failti hai: infected insaan ki skin se seedha contact, unke used towel/kapde/kangha share karna, infected janwar (khaas kar billi aur kutta) ko chhona, aur public jagah — gym, swimming pool, changing rooms mein nange pair chalna. Ghar mein agar ek ko ho to baaki ko bhi ho sakti hai — isliye infected person ka saman alag rakhna zaroori hai.' },
    { _key: 'faq5', question: 'Daad aur normal kharish ya rash mein kya fark hai? Kaise pehchanen?', answer: 'Daad ki pehchaan: gol ya ring-shaped patch jiske beech ka hissa thoda saaf ho aur border raised/scaly ho, aur patch baahri taraf barhti rahe. Normal rash aise nahi hota. Eczema mein rash irregular shape ka hota hai aur dono taraf symmetric. Psoriasis mein silver scale hoti hai. Agar ring jaisi shape ho, badh rahi ho, aur khujli ho — to doctor se fungal test (KOH test) karwayein.' },
    { _key: 'faq6', question: 'Kya homeopathy se daad permanently theek ho sakti hai?', answer: 'Haan — homeopathy se ringworm permanently control hona bilkul possible hai, khaas kar baar baar aane wali daad mein. CCRH-affiliated studies mein chronic tinea cases mein homeopathic treatment group ne less relapse dikhaya. Homeopathy sirf infection nahi — body ki fungal infection se ladhne ki resistance bhi badhata hai. Jo log kehte hain "daad treat karo — cream lagao — wapas aati hai" — unke liye constitutional homeopathic treatment ek real option hai.' },
    { _key: 'faq7', question: 'Ringworm ke liye kaun si homeopathic medicine sabse acchi hai?', answer: 'Homeopathy mein ek hi "best medicine" nahi hoti — ye aapke lakshano aur nature pe depend karta hai. Tellurium multiple ring patches ke liye, Sepia hormonal context mein baar baar aane wali daad ke liye, Sulphur chronic itching aur recurrent cases ke liye, Graphites moist weeping daad ke liye, Chrysarobinum scalp aur face daad ke liye. Ek qualified homoeopath aapki poori history lekar sahi medicine decide karta hai.' },
    { _key: 'faq8', question: 'Bacchon mein ringworm ho jaaye to kya karein?', answer: 'Bacchon mein ringworm common hai — khaas kar scalp pe (Tinea Capitis) jo school se aati hai. Agar bacche ke sar pe bald patch aaye ya gol ring dikhe to doctor/homoeopath se milein. Bacche ko infected dosto ke close contact se temporarily rokein. Unka towel, comb alag rakhein. Homeopathy bacchon ke liye safe hai — side effects practically nil. Scalp ringworm mein treatment time lagta hai — patience zaroori hai.' },
    { _key: 'faq9', question: 'Daad mein kaunse test se pata chalta hai?', answer: 'Doctor KOH test (potassium hydroxide test) se ya fungal culture se confirm karte hain. Doctor se milna zaroori hai khaas kar agar: patch 2 hafte mein theek nahi hui, sar pe hai, bahut si jagahon pe hai, ya naakhun mein hai. Iska importance ye hai ki kuch rashes eczema ya psoriasis bhi ho sakti hain — galat cream lagaane se Tinea Incognito ho sakta hai.' },
    { _key: 'faq10', question: 'Daad mein konsi cream lagayein? Kya antifungal cream safe hai?', answer: 'Clotrimazole, Miconazole jaise antifungal creams mild ringworm ke liye effective hain — lekin sirf doctor advice pe use karein. Steroid cream (betamethasone wali) daad mein BILKUL MAT lagayein — ye ring pattern chhupta hai lekin andar fungus zyada phalti hai (Tinea Incognito). Combination creams jo market mein hain unme aksar steroid bhi hota hai — label zaroor check karein. Homeopathic treatment ke saath external application bhi chal sakti hai.' },
    { _key: 'faq11', question: 'Daad mein kya khana chahiye aur kya nahi?', answer: 'Kya khayein: Lehsun, haldi, adrak — natural antifungal hain. Dahi — probiotic se gut flora balance karta hai. Vitamin C ke foods — amla, nimbu, santara — immunity ke liye. Zinc wale foods — kaddu ke beej, dal. Kya na khayein: Cheeni aur meethi cheezein — sugar fungus ka food hai. Maida products. Alcohol. Packaged yeast wali cheezein. Mushrooms (fungus hai). Diet se infection ki speed slow ho sakti hai — treatment ke saath.' },
    { _key: 'faq12', question: 'Pair ki daad (Athlete\'s Foot) kaise theek hogi?', answer: 'Pair ki daad theek karne ke liye: Pair ko bilkul dry rakho — bath ke baad angoothe ke beech towel se dry karo. Cotton moje pehno. Antifungal cream angoothe ke beech lagao (doctor ki advice pe). Public jagah nange pair mat jao. Homeopathy mein Sulphur ya Silicea aise cases mein kaam karte hain — ek homoeopath se milein agar baar baar aata ho.' },
    { _key: 'faq13', question: 'Naakhun mein daad (Onychomycosis) theek hogi kya?', answer: 'Haan, theek hoti hai — lekin sabse zyada waqt lagta hai is type mein. Naakhun slowly grow karte hain isliye medicine ka time bhi zyada hota hai — 3 se 12 mahine tak. Homeopathy mein Graphites aur Antimonium Crudum nail cases mein helpful hain — lekin ek homoeopath se milein aur conventional opinion bhi lein. Naakhun kaat ke clean rakhein. Geele pair avoid karein.' },
    { _key: 'faq14', question: 'Sar ki daad (Tinea Capitis) se baal wapas aayenge kya?', answer: 'Zyada tar cases mein haan — agar timely treatment ho to baal wapas aate hain. Scalp ringworm mein baal isliye girte hain kyunki fungi hair follicle ko attack karti hai — lekin follicle permanently damage nahi hota mostly. Agar Kerion (pus wali swelling) ban jaaye aur late treat ho to permanent hair loss ka risk hai. Bacchon mein scalp patch dikhne pe turant doctor se milein.' },
    { _key: 'faq15', question: 'Groin mein daad (Jock Itch) se kaise bachein?', answer: 'Jock Itch se bachne ke liye: Zyada pasina aane ke baad immediately bathe ya area dry karo. Loose cotton undergarments pehno — tight ya synthetic avoid karo. Gym ke baad naha ke fresh kapde pehno. Antifungal powder use kar sakte hain (doctor advice pe). Homeopathy mein Graphites aur Sepia groin ringworm mein effective hain — baar baar aata ho to constitutional treatment lein.' },
    { _key: 'faq16', question: 'Kya daad ke liye neem ka tail ya gharelu nuskha kaam karta hai?', answer: 'Kuch gharelu cheezein supportive hain: Neem oil — antifungal properties, mild cases mein helpful. Haldi paste — anti-inflammatory aur antifungal. Tea tree oil (diluted) — studies mein antifungal activity confirm. Lehsun ka ras — direct antifungal. Lekin ye sirf mild, early cases mein supportive hain. Agar 1 hafte mein improvement nahi to doctor zaroor dikhayein. Homeopathic treatment aur ye nuskhe saath chal sakte hain.' },
    { _key: 'faq17', question: 'Pregnancy mein daad ho jaaye to kya karein?', answer: 'Pregnancy mein antifungal medications carefully use karni padti hain — kuch safe hain, kuch avoid karte hain. Isliye koi bhi cream ya medicine bina OB/Gynec ya doctor ke advice ke mat lein. Homeopathy pregnancy mein generally safe mani jaati hai — lekin qualified homoeopath ko batayein ki aap pregnant hain. Hygiene extra important hai is waqt — area dry rakhein, cotton kapde pehno.' },
    { _key: 'faq18', question: 'Daad aur eczema mein kya fark hai?', answer: 'Daad: Gol ring shape, border raised/scaly, beech saaf, ek jagah se baahri badhta hai. Eczema: Irregular shape, dono body sides pe aata hai (symmetric), weeping ya dry patches, family history aksar hoti hai, allergens se trigger hota hai. Eczema mein antifungal cream kaam nahi karegi — aur daad mein steroid cream laga to Tinea Incognito ho jaata hai. Isliye correct diagnosis bahut zaroori hai — KOH test se confirm ho jaata hai.' },
    { _key: 'faq19', question: 'Kya daad chhone se failti hai ya hawa se bhi?', answer: 'Ringworm primarily direct skin-to-skin contact se ya infected surfaces se failti hai — hawa se nahi. Infected insaan ko chhone se, unka towel ya kapda use karne se, infected janwar ko touch karne se, aur contaminated floors pe nange pair chalne se failti hai. Fungal spores surfaces pe kuch ghante se din tak survive kar sakte hain. Isliye sharing avoid karna aur surfaces clean rakhna — sabse aasaan prevention hai.' },
    { _key: 'faq20', question: 'Kya daad wale ko school ya office jaana band karna chahiye?', answer: 'Zaroorat nahi hai poori tarah band karna — lekin kuch precautions: Infected area covered rakhein taaki seedha contact na ho. Gym ya contact sports temporarily avoid karein jab tak infection active ho. Children with scalp ringworm — school mein treatment shuru kar dein, poori tarah covered rakhein, dosto ke saath towel/comb share bilkul na karein. Most workplaces mein normal covered clothing se jaana theek hai.' },
    { _key: 'faq21', question: 'Daad mein nahana chahiye ya nahi?', answer: 'Nahana zaroori hai — roz nahana daad mein actually helpful hai kyunki dead skin cells aur fungal spores remove hote hain. Tips: Gunguna paani use karein — bahut garam paani skin irritate karta hai. Infected area ko mild soap se gently dhoyein. Naha ke turant acchi tarah dry karein — khaas kar folds mein. Infected area ko scrub mat karein. Apna towel bilkul alag rakho.' },
    { _key: 'faq22', question: 'Kya pet (dog, cat) se daad ho sakti hai?', answer: 'Haan — pets se ringworm hona bahut common hai, khaas kar bacchon mein. Janwar mein signs: Tukde tukde baal — bald patches, skin pe round scaly area (khaas kar face, ears, paws pe), scratching zyada karna. Agar ghar ke pet mein ye signs hain aur bacche ko bhi round itchy patch aa rahi hai — veterinarian se immediately milein aur apne doctor ko bhi batayein. Pet ke treatment ke saath hi ghar mein spread ruk sakta hai.' },
    { _key: 'faq23', question: 'Daad ke liye konsa sabun accha hai?', answer: 'Medicated antifungal soaps (nizoral ya neem-based) mild cases mein supportive hote hain — lekin main treatment nahi hain. Ye soap akele daad theek nahi karte. Neem soap ya tea tree oil based soap naturally antifungal hain aur daily use mein safe hain. Sulfur-based medicated soap bhi use hota hai. Koi bhi strong chemical soap avoid karein — skin dry aur cracked ho jaati hai. Plain mild soap bhi theek hai agar aap prescription treatment le rahe hain.' },
    { _key: 'faq24', question: 'Daad mein kab doctor ke paas jaana zaroori hai?', answer: 'Turant doctor se milein agar: Patch mein pus ya discharge aa raha ho, scalp pe painful swollen area ban raha ho (Kerion), bahut tezi se body pe failte patch ho rahe hain, fever aa raha ho saath mein, diabetic ho ya immunity-compromising condition ho, 2 hafte treatment ke baad bhi improvement nahi, naakhun affect ho gaye hon. Ye simple fungal infection se serious condition ki taraf badh sakta hai — delay mat karein.' },
    { _key: 'faq25', question: 'Kya daad kaala daag chhod jaati hai? Ye marks kaise hatenge?', answer: 'Haan — daad theek hone ke baad skin pe kaala ya brown daag reh jaata hai, especially dark skin tone waale logon mein. Ye post-inflammatory hyperpigmentation hai — infection se nahi, inflammation se hota hai. Ye marks dheere dheere fade hote hain — usually 1-3 mahine mein. Tez dhoop se ye marks zyada dark ho sakte hain — sunscreen zaroor lagayein. Homeopathic treatment mein skin recovery bhi address hoti hai — Sulphur aur Sepia jaise medicines pigmentation normalize karne mein help karti hain.' },
  ],

  sources: [
    { _key: 'src1', title: 'CCRH — Annual Research Reports, Clinical Studies on Dermatological Conditions', year: '2015-2022' },
    { _key: 'src2', title: 'WHO Global Burden of Fungal Infections Report', year: '2022' },
    { _key: 'src3', title: 'Indian Journal of Dermatology — Tinea Infections Epidemiology in India', year: '2019' },
    { _key: 'src4', title: 'DermNet NZ — Tinea (Ringworm) Clinical Guide', year: '2023' },
    { _key: 'src5', title: 'Mayo Clinic — Ringworm Overview', year: '2024' },
  ],
}

async function seed() {
  console.log('🌱 Seeding Ringworm...')
  const result = await client.createOrReplace(doc)
  console.log('✅ Ringworm created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/ringworm')
}

seed().catch(console.error)
