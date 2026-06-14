import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-nail-fungus',
  _type: 'disease',
  title: 'Nail Fungus (Onychomycosis)',
  hindiName: 'Nakhoon Ka Fungas / Nakhoon Ki Bimari',
  slug: { _type: 'slug', current: 'nail-fungus' },
  category: 'Skin',
  publishedAt: '2026-05-04T00:00:00.000Z',
  metaTitle: 'Nail Fungus Ka Homeopathic Ilaaj Hindi Mein | Homeopedia',
  metaDescription: 'Nakhoon mein fungus (onychomycosis) ka homeopathic treatment, karan, lakshan aur parhej — sab kuch Hindi mein. Dr. Shadab Khan dwara. Homeopedia pe padho.',

  heroText: 'Nail fungus – jise medically Onychomycosis kehte hain – ek aisi infection hai jisme nakhoon ke andar fungus ghus jaata hai aur wahan palata-barhta rehta hai. Shuru mein nakhoon thoda peela ya safed hone lagta hai, phir dheere-dheere mota, toota-phuta aur badsoorat ho jaata hai. Ye zyaatar paon ke nakhoonon mein hoti hai – isliye baar baar ho sakti hai agar theek se treat na karein. India jaise garmi aur nami wale desh mein ye infection bahot common hai – especially unhe jinhein zyada paseena aata hai ya jo public bathroom/pool use karte hain.',

  quickFacts: {
    whatItIs: 'Nakhoon ke andar fungal infection – paon ke nakhoon zyada affected; shuru mein discoloration, phir thickening, brittleness aur distortion; treatable hai lekin time lagta hai',
    howCommon: 'India mein roughly 2-10% adults affected; garmi aur nami ke maahol mein zyada common; global data – Mycoses Journal 2014',
    treatmentDuration: '3 mahine (haath ke nakhoon) se 6-12 mahine (paon ke nakhoon) – nail regrowth ke hisaab se; patience zaroori hai',
    successRate: 'CCRH case series mein fungal skin conditions mein meaningful symptomatic improvement noted; recurrence rate kam; Graphites, Thuja, Silicea se nail structural improvement documented',
  },

  causes: [
    'Dermatophyte fungi (Trichophyton rubrum) – ye sabse common cause hai, paon ke nakhoon ko zyada affect karta hai',
    'Yeast (Candida albicans) – haath ke nakhoon zyada affect karta hai; zyada der tak haath paani mein rakhne se',
    'Mold fungi – rare cases mein, soil ya dead material se contact hone par',
    'Public places pe nange paon chalna – swimming pool, gym, community bathroom – fungus direct contact se milta hai',
    'Damp, closed shoes mein zyada waqt bitana – fungus ko warm + wet environment chahiye; ye ideal breeding ground hai',
    'Pehle se koi skin fungal infection jaise athlete\'s foot jo nail tak pahunch jaaye – untreated skin fungus ka natural progression',
  ],

  riskFactors: [
    'Diabetes ke patients – immunity aur circulation dono affected hoti hai, infection tezi se failti hai',
    '60 saal se upar ke log – nakhoon dheere barhte hain, drier hote hain aur immune response weak hota hai',
    'Jo log din bhar closed shoes pehnte hain – leather shoes, sports shoes mein ventilation kam hoti hai',
    'Swimmers, athletes aur gym-goers – regular wet/damp environment exposure; high-risk group',
    'Jo log shared towel, clipper ya nail instruments use karte hain – direct transmission route',
    'Psoriasis ke patients – unke nakhoon pehle se weak hote hain, fungus asaani se ghusta hai',
  ],

  complications: [
    'Infection spread ho sakti hai – ek se doosre nakhoon tak, ya skin pe bhi (athlete\'s foot ka roop le sakti hai)',
    'Diabetic patients mein serious cellulitis (skin infection) ya ulcer tak pahunch sakta hai – ye serious hai, turant doctor zaroor',
    'Permanent nail damage – nakhoon hamesha ke liye kharab shape mein reh sakta hai agar infection nail matrix tak pahunche',
    'Aatm-vishwas aur social anxiety – kharab dikhe wale nakhoon, especially women mein jo nail appearance conscious hoti hain',
  ],

  types: [
    {
      _key: 'type-dso',
      name: 'Distal Subungual Onychomycosis (DSO) – Sabse Common',
      description: 'Sabse common type – 80% cases isi type ke hote hain. Nail ki tip (agla hissa) se shuru hota hai aur dhire-dhire andar aata hai. Nakhoon peela-bhoora, mota aur toot-phoot wala ho jaata hai. Paon ke nakhoon mein zyada hota hai. Early treatment mein best response milta hai.',
    },
    {
      _key: 'type-wso',
      name: 'White Superficial Onychomycosis (WSO)',
      description: 'Nakhoon ki upar wali layer pe chalak chalak safed dabbe pad jaate hain. Ye type thodi halki hoti hai aur surface tak seema rehti hai – treat karna aasaan hota hai. DSO se alag – ye sirf outer surface pe hoti hai, nail plate deep mein affected nahi hoti.',
    },
    {
      _key: 'type-pso',
      name: 'Proximal Subungual Onychomycosis (PSO)',
      description: 'Nail ke base (jad) se shuru hoti hai – ye type mostly unhe hoti hai jin ki immunity weak hoti hai, jaise HIV patients, long-term steroids pe ya uncontrolled diabetes wale. Ye serious indicator ho sakta hai – doctor se milna urgent hai is type mein.',
    },
    {
      _key: 'type-candidal',
      name: 'Candidal Onychomycosis (Yeast Infection)',
      description: 'Yeast (Candida) se hoti hai – zyaatar haath ke nakhoonon mein. Jo log zyada der tak haath paani mein rakhte hain – dishwasher, washerwoman – unhe zyada hoti hai. Antifungal creams ke saath homeopathic treatment combination approach mein best results.',
    },
    {
      _key: 'type-total',
      name: 'Total Dystrophic Onychomycosis (Advanced Stage)',
      description: 'Sabse advanced stage – poora nakhoon kharab ho jaata hai, mota, bura rangwala aur nail bed se alag hone lagta hai. Ye generally kisi ek type ka untreated result hota hai. Is stage mein treatment zyada time leti hai aur nail removal (surgery) ki zaroorat pad sakti hai kuch cases mein.',
    },
  ],

  symptoms: [
    {
      _key: 'sym-color',
      category: 'Rang Mein Badlaav – Sabse Pehle Dikhne Wale Signs',
      items: [
        'Nakhoon ka peela, bhoora, safed ya kaala hona – bina kisi injury ke; pehla aur sabse common sign',
        'Nakhoon pe white chalky dabbe ya streaks – surface-level infection ka sign',
        'Nail tip ka dull aur opaque dikhna – pehle wali chamak khatam hona; natural translucency kho jaati hai',
      ],
    },
    {
      _key: 'sym-texture',
      category: 'Texture aur Shape Mein Badlaav',
      items: [
        'Nakhoon ka mota hona – jo joota pehnne ya katne mein takleef de; thickness normal se 2-3 guna ho jaati hai',
        'Nakhoon ka brittle (toota-phuta/kharkhara) hona – edges se toot-toot ke girna',
        'Nakhoon ka nail bed se ukhad-sa lagana (onycholysis) – gap banana shuru kar deta hai',
        'Nakhoon ke neeche debris (safed-peela powdery maal) jamna – ye keratin debris hai jo fungus produce karta hai',
      ],
    },
    {
      _key: 'sym-advanced',
      category: 'Advanced Stages Ke Signs',
      items: [
        'Nakhoon se halki badboo aana – fungus aur bacteria ka combination; "stale/musty" type smell',
        'Surrounding skin pe redness ya itching – infection skin pe bhi failne lagi hai',
        'Dard – especially tight jooton mein ya walking ke waqt; mota nakhoon pressure create karta hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Meaningful symptomatic improvement in case series',
    avgTreatmentPeriod: '3 se 6 mahine (nail regrowth slow hoti hai – patience zaroori hai)',
    citation: 'CCRH Annual Report, Skin Diseases Section | 2019-2020 | ccrhindia.org | Manchanda RK et al., Indian Journal of Research in Homoeopathy, 2012',
    keyFindings: [
      'Fungal skin infections ke patients mein homeopathic treatment ke baad recurrence rate mein noticeable kami observed ki gayi',
      'Graphites aur Thuja jaise medicines ne nail dystrophy cases mein structural improvement dikhaya – nail plate quality better hui',
      'Quality of life scores (itching, discomfort, appearance) mein meaningful improvement noted vs. baseline assessment',
    ],
  },

  homeopathyBenefits: [
    'Homeopathy mein nail fungus ka treatment sirf upar se nahi, andar se hota hai. Fungal infections baar baar isliye aati hain kyunki shareer ki immunity aur vital force weak hoti hai – homeopathic medicines us root cause ko address karti hain. Saath hi, jo log baar baar anti-fungal cream use karte hain unhe resistance ho jaata hai – homeopathy mein ye problem nahi hoti kyunki approach hi alag hai. Ek experienced homoeopath aapki poori health history dekhke – skin type, sweating pattern, immunity, stress – sab consider karke personalized medicine deta hai jo sirf nail nahi, overall fungal tendency ko khatam karne mein madad karta hai.',
    'Recurrence rokne mein khaas kaam karta hai – sirf ek baar theek nahi, baar baar hone ki tendency todta hai',
    'Long-term anti-fungal use ke side effects (liver pe load) se bachata hai – safe long-term use',
    'Nail ka appearance dheere-dheere improve hota hai kyunki naye nakhoon healthy barhne lagte hain',
    'Diabetes ya immunity issues wale patients ke liye safe – koi drug interaction nahi; conventional treatment ke saath bhi chal sakta hai',
    'Saath aane wali problems – sweating, itching, skin sensitivity – bhi ek saath treat hoti hain',
  ],

  medicines: [
    {
      _key: 'med-graphites',
      name: 'Graphites',
      bestFor: 'Mota, rough, distorted nakhoon; skin cracks; nail deformity',
      keyIndications: [
        'Nakhoon mota, rough, aur distorted ho gaya ho – shape bilkul kharab',
        'Saath mein skin pe cracks ya honey-like discharge bhi ho',
        'Unhealthy tissue ki repair mein madadgar – nail deformity ke saath skin dryness bhi',
        'Graphites un patients mein kaafi effective jinhein nail problems ke saath skin ki dryness aur cracking bhi ho',
      ],
    },
    {
      _key: 'med-thuja',
      name: 'Thuja Occidentalis',
      bestFor: 'Brittle, discolored nakhoon; wart-prone skin; fungal tendency',
      keyIndications: [
        'Nakhoon brittle, discolored ho aur jo easily break ho jaaye',
        'Specially wart-prone skin wale log – Thuja ka khas indication',
        'Fungal aur parasitic tendencies ke liye homeopathy ki go-to medicine',
        '"Unhealthy growths" ko address karti hai constitution level pe – deep-acting',
      ],
    },
    {
      _key: 'med-antimonium-crud',
      name: 'Antimonium Crudum',
      bestFor: 'Thickened nakhoon, hard skin underneath, digestive weakness saath mein',
      keyIndications: [
        'Nakhoon ke neeche hard, thickened skin ho – nail rough aur horny dikhe',
        'Patient ki digestion bhi weak ho – combination of nail + digestive symptoms',
        'Nakhoon ke structural changes aur saath mein digestive weakness pe kaam karta hai',
        'Overall unhealthy tissue tendency address karta hai – constitutional approach',
      ],
    },
    {
      _key: 'med-silicea',
      name: 'Silicea (Silica)',
      bestFor: 'Toota-phuta, spotted, slow-growing nakhoon; physically weak patient',
      keyIndications: [
        'Nakhoon toota-phuta, spotted aur slow-growing ho',
        'Physically weak dikhne wale, asaani se thakne wale, sweaty feet wale patients',
        'Body ki eliminate karne ki shakti badhata hai aur connective tissue strengthen karta hai',
        'Healthy nail growth mein madadgar – nail matrix ko strengthen karta hai',
      ],
    },
    {
      _key: 'med-sulphur',
      name: 'Sulphur',
      bestFor: 'Baar baar fungal infection, itching + burning, athlete\'s foot saath mein',
      keyIndications: [
        'Skin pe bahot itching, burning ho – nail infection ke saath',
        'Baar baar athlete\'s foot (paon ki skin pe fungus) bhi aata ho',
        'Chronic skin aur fungal tendencies mein kaam karta hai',
        'Baar baar hone wali infections ki underlying sensitivity ko address karta hai',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di-immunity',
      category: 'Immunity Boosting Foods',
      emoji: '🛡️',
      items: [
        'Lahsun (Garlic) – natural antifungal properties hain, allicin fungal growth rokta hai; roz 2-3 kaali kachchi ya sabzi mein',
        'Haldi (Turmeric) – curcumin antifungal aur anti-inflammatory dono hai; kali mirch ke saath daily use',
        'Adrak (Ginger) – immune system strengthen karta hai aur anti-fungal bhi hai; chai ya kadhe mein',
      ],
    },
    {
      _key: 'di-probiotic',
      category: 'Probiotic & Gut-Health Foods',
      emoji: '🦠',
      items: [
        'Dahi (plain curd, unsweetened) – gut mein good bacteria badhata hai jo fungal overgrowth rokta hai; roz lein',
        'Chaach (Buttermilk) – probiotic-rich, digestion improve karta hai; garmi mein especially faydemand',
        'Fermented foods (idli, kanji) – beneficial bacteria se bharpoor; gut-immune connection ke liye',
      ],
    },
    {
      _key: 'di-zinc-biotin',
      category: 'Zinc & Biotin Rich Foods',
      emoji: '🥚',
      items: [
        'Pumpkin seeds (kaddu ke beej) – zinc se bharpoor, nail strength ke liye; mutthi bhar roz',
        'Eggs – biotin ka sabse achha source, healthy nail growth mein crucial; roz ek anda',
        'Palak aur methi – iron + zinc dono, nails ko andar se healthy rakhta hai; weekly 2-3 baar',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da-sugar',
      category: 'Sugar & Refined Carbs',
      emoji: '🍬',
      items: [
        'Chini, mithai, cold drinks – sugar fungus ka sabse bada fuel hai; zyada sugar = fungus tezi se barhta hai',
        'Maida (white flour) products – ye quickly sugar mein convert hota hai body mein; avoid karein',
        'Packaged biscuits, cakes – hidden sugar + refined carbs dono ki problem; completely cut karein',
      ],
    },
    {
      _key: 'da-alcohol',
      category: 'Alcohol & Fermented Drinks',
      emoji: '🍺',
      items: [
        'Beer, wine, desi daru – yeast-based hote hain jo body ke fungal load ko badhate hain; treatment ke dauran avoid',
        'Vinegar in excess – thoda theek hai, lekin zyada khatti cheezein yeast ko encourage karti hain',
      ],
    },
    {
      _key: 'da-junk',
      category: 'Processed & Junk Food',
      emoji: '🚫',
      items: [
        'Fast food, chips, processed snacks – preservatives aur hidden sugars immunity weaken karte hain',
        'Dairy in excess (specially full-fat cheese) – kuch log mein fungal tendency badhata hai',
        'Zyada meetha fruit juice – fructose bhi fungus ko feed karta hai; whole fruit prefer karein',
      ],
    },
  ],

  dos: [
    'Paon ko roz achhe se dhoyein aur sookhaayein – khaaskar nakhoonon ke beech ki jagah; nami hi fungus ki zindagi hai',
    'Cotton ya moisture-wicking socks pehno – synthetic material paseena rok leta hai; roz fresh socks zaroori',
    'Nakhoon chhote rakhein aur straight cut karein – bade nakhoon mein fungus ko zyada jagah milti hai',
    'Apni nail clipper, file kisi ko share mat karein – infection directly ek se doosre mein jaati hai; alag rakhein',
    'Public pool, gym, changing room mein flip-flops ya chappale zaroor pehno – bare feet = direct exposure',
    'Shoes ko andar se antifungal powder se treat karein weekly – specially closed shoes mein; rotation karo 2-3 pairs',
  ],

  donts: [
    'Ek hi pair shoes roz mat pehno – unhe dry hone ka time do; 2-3 pairs rotate karo taaki moisture na rahe',
    'Infected nakhoon ko chhupane ke liye nail polish mat lagao – polish ke neeche moisture trap hoti hai, fungus barhta hai',
    'Dono paon ka nail clipper mix mat karo – ek hi clipper se infection healthy nakhoon mein bhi ja sakti hai',
    'Treatment beech mein band mat karo – jab thoda behtar lage to seedha band karna sabse common aur costly mistake hai',
    'Tight, synthetic ya plastic shoes avoid karein – ye paon mein heat aur moisture dono badhate hain; fungus ka favorite environment',
  ],

  seasonalCare: {
    summer: 'Paon mein zyada paseena aata hai – fungus ka favorite environment. Baarish mein bheege paon – public places pe nange chalna avoid karein. Jooton ke andar moisture trap hoti hai – cotton socks use karein, synthetic avoid karein. Roz sone se pehle paon achhe se sookha lein – hair dryer low heat se bhi use kar sakte hain. Ye HIGH RISK season hai – extra hygiene maintain karein.',
    monsoon: 'Monsoon mein bhi paon bheegnee ki wajah se fungus zyada active hota hai. Rubber footwear use karein bahar ke liye. Ghar aate hi paon dhoyein aur sookha lein immediately. Wet footwear andar mat laayein. Ek extra pair jooton aur socks daftar mein rakho – change karne ke liye.',
    winter: 'Closed heavy shoes zyada pehnte hain – ventilation kam hoti hai; antifungal powder zaroor use karein. Nakhoon slow barhte hain sardi mein – treatment results dekhne mein zyada time lag sakta hai; patience rakhein. Indoor swimming pools – sardi mein zyada use hoti hain, ye high-risk jagah hai; flip-flops zaroor. Moisturizer use karte waqt nakhoon ke neeche mat jaane dein – wahan moisture trap hoti hai.',
  },

  faqs: [
    {
      _key: 'faq-1',
      question: 'Nakhoon ka rang peela ya kaala kyun ho jaata hai?',
      answer: 'Nakhoon ka peela, bhoora ya kaala hona fungal infection (onychomycosis) ki pehli aur sabse common nishani hai. Fungus nakhoon ke andar ghus jaata hai aur nail plate ko damage karta hai jisse uska natural color khatam ho jaata hai aur discoloration shuru hoti hai. Safed chalky patches usually surface-level infection hai – peela ya bhoora hona deeper infection indicate karta hai. Agar aapka nakhoon bina kisi injury ke rang badal raha hai, to ye fungal infection ki possibility hai – jitni jaldi dekha, utni jaldi theek hogi.',
    },
    {
      _key: 'faq-2',
      question: 'Nail fungus ka gharelu ilaaj kya hai jo sach mein kaam kare?',
      answer: 'Kuch gharelu upay fungal growth slow karne mein madadgar ho sakte hain – lekin ye akele complete cure nahi dete. Garm paani mein thoda apple cider vinegar milake roz 15-20 min paon bhigona, ya tea tree oil cotton se nakhoon pe lagana – in dono mein kuch evidence hai. Lahsun ka rasa bhi anti-fungal hai. Lekin ye sirf mild ya early-stage cases mein help kar sakte hain. Agar nakhoon mota ho gaya, rang badal gaya ya nail bed se ukhad raha ho – to proper homeopathic treatment zaroori hai.',
    },
    {
      _key: 'faq-3',
      question: 'Nail fungus kitne time mein theek hoti hai?',
      answer: 'Nail fungus jaldi theek nahi hoti kyunki nakhoon bahot dheere barhte hain (ek mahine mein sirf 1-3mm). Treatment se fungus toh rukti hai, lekin "healthy nail dikhe" tab hoga jab poora nakhoon naya ug aaye – paon ke nakhoon ke liye iska matlab 6 mahine se 1 saal tak hota hai. Haath ke nakhoon thodi tezi se barhte hain – unhe 4-6 mahine lagte hain. Beech mein treatment band karna sabse badi galati hai – symptoms khatam lagne ke baad bhi kuch hafte continue zaroor karein.',
    },
    {
      _key: 'faq-4',
      question: 'Kya nail fungus apne aap theek ho sakti hai bina treatment ke?',
      answer: 'Nahi – nail fungus apne aap theek nahi hoti. Ye ek living organism (fungus) hai jo nakhoon ke warm, dark, damp environment mein aaram se palti-barhti rehti hai. Bina treatment ke ye dheere-dheere aur nakhoonon mein failti hai, phir skin pe bhi aa sakti hai. Kuch logon ko saalon tak treatment ki zaroorat na lage – lekin andar se infection barhti rehti hai. Jitni jaldi treatment karein, utna nakhoon ka permanent damage bachta hai.',
    },
    {
      _key: 'faq-5',
      question: 'Kya nail fungus ek se doosre ko lag sakti hai – family members ya partner ko?',
      answer: 'Haan – nail fungus contagious hai, lekin itni asaani se nahi jitna logon ko lagta hai. Direct contact se – jaise shared nail clipper, towel, floor (especially bathroom) – infection spread ho sakti hai. Family mein common bathroom use hota hai isliye chances hain. Koi dar nahi – lekin apni nail accessories alag rakhein aur ghar mein slippers ka use karein. Agar ghar mein kisi ko hai to strict personal hygiene maintain karo.',
    },
    {
      _key: 'faq-6',
      question: 'Kya homeopathy se nail fungus permanently theek hoti hai?',
      answer: 'Homeopathy nail fungus mein effective hai – khaaskar baar baar hone wali infections mein. Sirf symptom dabana nahi, homeopathy shareer ki fungal infection se ladne ki immunity ko strengthen karti hai jisse recurrence kam hota hai. CCRH-affiliated studies mein fungal skin conditions ke patients mein homeopathic treatment se symptoms mein meaningful improvement dekha gaya. Nail ka appearance dheere-dheere improve hota hai kyunki naye healthy nakhoon aate hain. Severe ya advanced cases mein conventional oral anti-fungals ke saath homeopathy complementary role mein best results deta hai.',
    },
    {
      _key: 'faq-7',
      question: 'Kya nail fungus mein nail polish laga sakte hain?',
      answer: 'Nail polish lagana nail fungus mein problem aur barhata hai – isliye avoid karein. Polish ke neeche nakhoon ko oxygen nahi milta aur moisture trap hoti hai – jo fungus ke liye perfect environment hai. Kuch antifungal nail lacquers (jaise ciclopirox) available hain jo mild cases mein use hote hain – lekin regular cosmetic polish bilkul nahi. Agar cosmetically zaroorat lage to ek-aadh ghante ke liye thik hai – lekin roz raat ko polish zaroor hatayein aur nakhoon sookha rakhein.',
    },
    {
      _key: 'faq-8',
      question: 'Diabetic patient ke liye nail fungus kitni serious hoti hai?',
      answer: 'Diabetes ke patients ke liye nail fungus zyada seriously lena chahiye – ye sirf cosmetic problem nahi reh jaati. Unki immunity aur blood circulation dono affected hoti hai, isliye infection zyada tezi se failti hai. Nakhoon ka koi bhi wound ya crack bacterial infection ka rasta ban sakta hai – aur diabetic patients mein ye cellulitis ya foot ulcer tak pahunch sakta hai jo serious hai. Diabetic patients mein har chhoti si nail problem ko doctor ko dikhana chahiye – late karna risk nahi lena chahiye.',
    },
    {
      _key: 'faq-9',
      question: 'Paon mein nail fungus aur normal gandgi mein kya fark hai?',
      answer: 'Ye genuine confusion hai – dono mein nakhoon ke neeche ganda-sa material dikh sakta hai. Fark ye hain: Normal gandgi paani aur soap se saaf ho jaati hai, rang normal rehta hai. Fungal infection mein nail khud discolored ho jaati hai jo dhone se nahi jaati. Fungal infection mein nakhoon mota, brittle aur distorted hota hai – gandgi mein aisa nahi hota. Agar nakhoon ke neeche chalky ya powdery debris ho jo baar baar aaye – ye fungus hai. Confirmed test ke liye doctor se KOH test karwayein.',
    },
    {
      _key: 'faq-10',
      question: 'Kya nail fungus paon se haath ke nakhoon mein aa sakti hai?',
      answer: 'Haan, ye possible hai – lekin itna common nahi. Paon se haath mein infection tab aati hai jab aap infected paon ko haath se touch karein aur haath achhe se na dhoyein – ya infected nail clipper dono jagah use karein. Haath ke nakhoon mein zyaatar yeast (Candida) infection hoti hai jo alag cause se aati hai – zyada der haath paani mein rakhne se. Dono ko alag treat kiya jaata hai isliye sahi diagnosis important hai.',
    },
    {
      _key: 'faq-11',
      question: 'Nail fungus aur nail psoriasis mein kya fark hai?',
      answer: 'Ye dono bilkul alag hain lekin dikhat mein similar lag sakte hain – isliye KOH test zaroori hota hai. Nail psoriasis usually jo log pehle se psoriasis ke patient hain unhe hoti hai – unke nakhoon mein "oil drop" spots, pitting (tiny holes) aur nail bed separation hoti hai. Fungal infection mein nakhoon zyada mota, brittle hota hai aur debris zyada hota hai. Doctor test ke bagair distinguish karna mushkil hai – aur treatment bilkul alag hai.',
    },
    {
      _key: 'faq-12',
      question: 'Nail fungus ka test ghar pe kaise karein?',
      answer: 'Ghar pe 100% confirm nahi hota – lekin kuch signs clear hain: nakhoon ka permanent discoloration (peela/bhoora), thickness increase, brittleness, nail ke neeche white-yellow debris, aur badboo. Agar ye sab 2 hafte se zyada se hain – highly likely fungal infection hai. Doctor ke paas KOH (potassium hydroxide) test hota hai – nakhoon ka thoda sa material le ke microscope mein check karte hain, 15-20 min mein result. Ye cheapest aur fastest confirmed test hai.',
    },
    {
      _key: 'faq-13',
      question: 'Nail fungus ka treatment shuru karte hi nakhoon kharab kyun dikhta hai?',
      answer: 'Ye actually good sign ho sakta hai! Jab treatment shuru hoti hai, infected nakhoon dhire-dhire grow out hoti hai – matlab purana infected part bahar aata rehta hai aur naya healthy part andar se aata hai. Is process mein kuch waqt ke liye nakhoon "patchy" ya alag-alag dikhi sakti hai. Ek cheez zaroor note karein: Agar nakhoon ke aaspaas redness, swelling ya dard badh jaaye – to doctor ko dikhayein, kyunki secondary bacterial infection bhi ho sakti hai.',
    },
    {
      _key: 'faq-14',
      question: 'Kya baar baar nail fungus hone ka koi reason hota hai?',
      answer: 'Haan – baar baar hona (recurrence) bahot common problem hai aur iska reason sirf fungus nahi, aapka immune system aur lifestyle bhi hai. Common reasons: treatment beech mein chhodna, infected shoes ya socks continue use karna, public places pe bina protection ke chalna, high sugar diet (fungus ka fuel), ya koi underlying condition jaise diabetes ya thyroid. Homeopathy isi recurrence pattern ko todne mein specially effective hai – kyunki ye body ki overall fungal resistance badhata hai.',
    },
    {
      _key: 'faq-15',
      question: 'Kya bacchon mein nail fungus hoti hai? Kya ilaaj safe hai?',
      answer: 'Haan – bacchon mein bhi hoti hai, lekin adults ke comparison mein kam hoti hai kyunki bacchon ki nail growth faster hoti hai. Common sources: school sports, swimming, shared footwear. Bacchon ke liye oral anti-fungal medicines kuch caution ke saath di jaati hain (dose weight pe depend karta hai). Homeopathy bacchon ke liye ek gentle aur safe option hai – koi harsh side effects nahi, aur individualized treatment diya jaata hai. Agar 5 saal se chhota baccha ho – kisi bhi treatment se pehle doctor ki salaah zaroor lein.',
    },
    {
      _key: 'faq-16',
      question: 'Nail fungus mein paon mein badboo kyun aati hai?',
      answer: 'Nakhoon ke andar fungus jab badhta hai to tissue breakdown karta hai – is process mein volatile compounds release hote hain jo badboo ka source hain. Saath mein bacteria bhi infected nail ke paas aa jaate hain – aur bacteria + fungus ka combination zyada smell deta hai. Ye badboo normal paon ki smell se alag hoti hai – zyada tez aur "stale/musty" type ki hoti hai. Ye sign usually thodi advanced infection indicate karta hai – treatment mein der mat karein.',
    },
    {
      _key: 'faq-17',
      question: 'Kya nail fungus pregnancy mein safe hai treat karna?',
      answer: 'Pregnancy mein nail fungus treat karna thoda alag approach maangta hai. Conventional oral anti-fungal tablets (terbinafine, fluconazole) pregnancy mein generally avoid ki jaati hain – doctor se zaroor discuss karein. Topical (upar se lagane wali) treatments zyada safer hain. Homeopathy pregnancy mein ek relatively safer option hai kyunki highly diluted medicines hain – lekin fir bhi kisi bhi medicine se pehle apne ob-gyn aur homoeopath dono ko batana zaroori hai. Delivery ke baad treatment zyada effectively ho sakti hai.',
    },
    {
      _key: 'faq-18',
      question: 'Kya nail fungus operation se theek hoti hai?',
      answer: 'Operation (nail removal) ek option hai – lekin sirf last resort ke taur pe, jab infection bahut severe ho ya medicine se bilkul respond na ho rahi ho. Nail avulsion mein infected nakhoon ko hata dete hain taaki anti-fungal medicine directly nail bed tak pahunche. Ye generally outpatient procedure hai – bahut dard nahi hota. Naya nakhoon aane mein 6-12 mahine lagte hain. Routine mild ya moderate cases mein surgery ki zaroorat nahi hoti – proper treatment se zyatar cases theek ho jaate hain.',
    },
    {
      _key: 'faq-19',
      question: 'Kya jooton ko bhee treat karna padta hai nail fungus mein?',
      answer: 'Haan – aur ye step zyatar log miss kar dete hain jiske wajah se infection wapas aati hai! Fungus shoes ke andar saalon tak survive kar sakta hai. Kya karein: Apne jooton ke andar anti-fungal powder weekly daalein. UV shoe sanitizer bhi available hain jo fungus kill karte hain. Jo shoes bahut purani aur worn-out hain – consider replacing them agar infection severe rahi ho. Ek din mein ek hi shoes mat pehno – rotation karo.',
    },
    {
      _key: 'faq-20',
      question: 'Swimming ke baad nail fungus kaise bachein?',
      answer: 'Swimming pool ek high-risk jagah hai kyunki pool deck pe nange paon chalna, changing rooms, shared towels – ye sab fungus ka source ban sakte hain. Bachne ke liye: Pool mein jaate waqt rubber flip flops zaroor pehno – locker room mein bhi. Baad mein paon achhe se sookha lein – nakhoon ke beech ki jagah bhi. Cotton socks pehno pool ke baad – synthetic avoid. Wet swimwear mein zyada der mat raho. Weekly nail hygiene maintain karo.',
    },
    {
      _key: 'faq-21',
      question: 'Kya Epsom salt se nail fungus theek hoti hai?',
      answer: 'Epsom salt (magnesium sulphate) ko nail fungus ke liye common gharelu upay mana jaata hai – aur kuch logon ko isse aaram milta hai. Ye infection "theek" nahi karta lekin fungal environment ko kum comfortable banata hai – alkaline environment mein fungus ki growth slow hoti hai. Warm paani mein Epsom salt mila ke 15-20 min paon bhigona, phir achhe se sookhaana – ye complementary hack ki tarah use kar sakte ho. Lekin ye substitute nahi hai treatment ka – sirf supporting role hai.',
    },
    {
      _key: 'faq-22',
      question: 'Nail fungus aur athlete\'s foot (paon ki skin pe) ka kya connection hai?',
      answer: 'Dono aksar saath-saath hote hain – kyunki cause ek hi hai (usually Trichophyton rubrum fungus). Athlete\'s foot paon ki skin – khaaskar ungli ke beech – ko affect karta hai. Agar ye treat na ho to wahi fungus nakhoon ke andar ghus jaata hai. Isliye agar aapko nail fungus hai aur saath mein paon ki skin itching bhi hai to dono treat karna zaroori hai – sirf nail treat karne se infection wapas aa sakti hai. Homeopathy mein dono ek saath treat hote hain kyunki approach constitutional hoti hai.',
    },
    {
      _key: 'faq-23',
      question: 'Doctor ko kab milna chahiye – ghar pe treatment kab tak try karein?',
      answer: 'Turant doctor milein agar: Nakhoon ke aaspaas red, swollen ya bahut dard ho (possible bacterial infection). Diabetic hain ya immunity weak hai. Nakhoon nail bed se poori tarah ukhad rahi ho. Pehle treatment kar ke bhi improvement na ho rahi ho 3 mahine baad. Ghar pe try kar sakte hain agar: Early stage – sirf thoda discoloration, koi dard nahi; strict hygiene maintain kar rahe hain. 4-6 hafte baad koi improvement nahi – to please professional se milein, mat rokein.',
    },
  ],

  relatedDiseases: [
    { _type: 'reference', _ref: 'disease-ringworm' },
    { _type: 'reference', _ref: 'disease-eczema' },
    { _type: 'reference', _ref: 'disease-psoriasis' },
    { _type: 'reference', _ref: 'disease-acanthosis-nigricans' },
    { _type: 'reference', _ref: 'disease-vitiligo' },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Nail Fungus (Onychomycosis) created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/nail-fungus')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
