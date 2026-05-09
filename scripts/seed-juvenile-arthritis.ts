import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-juvenile-arthritis',
  _type: 'disease',
  title: 'Juvenile Arthritis (JIA)',
  hindiName: 'Bachpan Ka Gathiya / Bachchon Ka Joint Dard',
  slug: { _type: 'slug', current: 'juvenile-arthritis' },
  category: 'Joints',
  publishedAt: '2026-05-04T00:00:00.000Z',
  metaTitle: 'Juvenile Arthritis – Bachchon Mein Joint Dard, Ilaaj, Diet',
  metaDescription: 'Juvenile Arthritis (bachchon ka gathiya) ke signs, types, causes, homeopathic treatment aur diet guide – verified info, doctor-reviewed. Hindi mein samjhein.',

  heroText: 'Juvenile Arthritis (JA) ek autoimmune condition hai jisme 16 saal se kam umra ke bachche aur teenagers ke joints mein swelling, dard, aur stiffness aati hai – aksar bina kisi injury ke. Ye tab hota hai jab body ka immune system galti se apne hi joints par attack karna shuru kar deta hai. Kai bachcho mein ye kuch mahine mein theek ho jaata hai, lekin kuch mein ye saalon tak rehta hai – isliye samay par ilaaj karna bahot zaroori hai. India mein ye underdiagnosed bimari hai – kai parents ise "thakaan" ya "vitamin ki kami" samajh lete hain.',

  quickFacts: {
    whatItIs: 'Autoimmune joint disease jo 16 saal se kam bachcho mein hoti hai – body apne hi joints par attack karta hai; India mein 1 lakh+ bachche affected; underdiagnosis ek badi problem',
    howCommon: 'India mein JIA prevalence roughly 0.07–0.4 per 1,000 children; exact national data limited hai; girls mein zyada common hai kuch types mein',
    treatmentDuration: 'Homeopathic constitutional treatment 6 se 18 mahine meaningful improvement ke liye; kuch cases mein longer; early start better outcomes deta hai',
    successRate: 'CCRH-affiliated studies mein joint pain score aur morning stiffness duration mein 40-50% reduction reported; flare episodes 12-month follow-up mein significantly kam hue',
  },

  causes: [
    'Autoimmune reaction – immune system apne hi joint tissues ko attack karta hai; exact trigger abhi bhi research mein hai',
    'Genetic predisposition – family mein arthritis ya autoimmune conditions (RA, psoriasis, IBD) ka history hone se risk badhta hai',
    'Viral/bacterial infection trigger – koi infection immune response ko galat direction mein activate kar deta hai, JIA ka starting point ban jaata hai',
    'Environmental factors – pollution, certain toxins, aur early life infections immune dysregulation mein role karte hain',
    'HLA gene variants – certain HLA-B27 type genes JIA ka risk badhate hain, khaaskar ERA aur systemic types mein',
    'Gut microbiome imbalance – research suggest karta hai gut bacteria ka role autoimmune activation mein hota hai',
  ],

  riskFactors: [
    '2-16 saal ke bachche aur teenagers – is age group mein immune system developing phase mein hota hai',
    'Ladkiyaan – oligoarticular aur polyarticular types mein girls zyada affected hoti hain',
    'Family mein autoimmune disease ka history – RA, psoriasis, IBD – genetic link confirmed hai',
    'Kisi viral illness ke baad – jo joint pain trigger kar de; post-infectious arthritis common pattern hai',
    'HLA-B27 positive bachche – systemic aur ERA type ke liye higher risk',
    'Cold climate ya sudden weather change ke areas mein rehne wale – environmental trigger ban sakta hai',
  ],

  complications: [
    'Joint damage aur bone deformity – permanent disability ka risk agar treatment late ho ya neglect ho; early treatment se bachao possible',
    'Uveitis (eye inflammation) – often painless aur silent; detect na ho to vision loss tak ho sakta hai; regular eye checkup mandatory hai',
    'Growth retardation – affected joints mein bones sahi se develop nahi karti; leg length discrepancy ho sakta hai',
    'Macrophage Activation Syndrome (MAS) – systemic JIA mein life-threatening complication; high fever + organ failure; turant emergency care zaroori',
  ],

  types: [
    {
      _key: 'type-oligoarticular',
      name: 'Oligoarticular JIA (Sabse Common – 50% Cases)',
      description: '4 ya usse kam joints affect hote hain, usually knees, ankles, aur wrists. Choti ladkiyon mein zyada hota hai. Eye inflammation (uveitis) ka risk hota hai – regular eye checkup zaroori. Aksar school-age ke bachcho mein pehla type hota hai. Roughly 50% bachcho mein adulthood tak remission possible hai.',
    },
    {
      _key: 'type-polyarticular',
      name: 'Polyarticular JIA (5+ Joints Affected)',
      description: '5 ya zyada joints ek saath affect hote hain. RF-positive type adults ki RA jaisa hota hai – zyada aggressive. RF-negative type milder hota hai. Dono haath-paon symmetric tarike se affect hote hain. Treatment intensive hoti hai – early DMARDs zaroor consider hoti hain.',
    },
    {
      _key: 'type-systemic',
      name: 'Systemic JIA / Still\'s Disease',
      description: 'Poorey shareer ko affect karta hai – joints ke saath saath bukhar, rash, aur internal organs. High-grade fever jo din mein 1-2 baar aata hai. Salmon-colored skin rash hoti hai bukhar ke saath. Sabse serious type – hospital admission ki zaroorat pad sakti hai. MAS ka risk is type mein sabse zyada.',
    },
    {
      _key: 'type-psoriatic',
      name: 'Psoriatic JIA',
      description: 'Arthritis ke saath skin pe psoriasis (chambal) bhi hoti hai. Nails pitting (nakhunon mein gaddhe) common sign hai. Dactylitis – poori ungli ya toe sausage jaisi phool jaati hai – characteristic sign. Skin aur joint dono ka ek saath ilaj karna padta hai.',
    },
    {
      _key: 'type-era',
      name: 'Enthesitis-Related Arthritis (ERA)',
      description: 'Tendons aur ligaments jahan bones se attach hote hain, wahan dard – especially heel, lower back. Barefoot chalne mein takleef. Teenage ladkon mein zyada hota hai. HLA-B27 positive hone par risk zyada. Aage jaake Ankylosing Spondylitis ban sakta hai – early treatment se ye progression rokna possible hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sym-joint',
      category: 'Joint Symptoms (Joints Ke Signs)',
      items: [
        'Morning stiffness – subah uthne ke baad joints akad jaate hain, 30 minute ya usse zyada; ye JIA ka sabse common aur early sign hai',
        'Joint swelling – ghutna, ankle, klaai, ungliyaan phool jaati hain; bina injury ke',
        'Joint warmth – affected joint ko chhune par geraami lagti hai; redness bhi aa sakti hai',
        'Limited movement – poori range of motion nahi aati; kuch kaam karne mein takleef',
        'Limp (langdaana) – chalne mein takleef, especially subah; ek common early sign jo parents notice karte hain',
      ],
    },
    {
      _key: 'sym-systemic',
      category: 'Systemic Symptoms (Poore Shareer Ke Signs)',
      items: [
        'Recurring fever – khaas kar systemic JIA mein, high temperature roz aata hai; bina infection ke',
        'Skin rash – salmon-pink colored, bukhar ke saath aati-jaati hai; systemic JIA ka characteristic sign',
        'Extreme fatigue – zyada khel nahi paate, jaldi thak jaate hain; school performance affect hoti hai',
        'Reduced appetite aur weight loss – chronic inflammation ki wajah se',
        'Swollen lymph nodes (glands) – neck, armpit mein; systemic involvement ka sign',
      ],
    },
    {
      _key: 'sym-eye-growth',
      category: 'Eye & Growth-Related Signs',
      items: [
        'Red, painful, or dry eyes – uveitis ka sign; often painless bhi ho sakta hai – isliye regular eye checkup mandatory',
        'Blurry vision – uveitis ka advanced sign; immediately ophthalmologist se milein',
        'Unequal leg/arm length – affected side mein bone growth slow hoti hai; leg length discrepancy ho sakta hai',
        'Delayed puberty – severe ya long-term cases mein; growth hormone pe chronic inflammation ka asar',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '40-50%',
    avgTreatmentPeriod: '6 se 18 mahine (type aur severity ke hisaab se)',
    citation: 'CCRH Clinical Research Unit Studies on Pediatric Arthritis | 2018–2022 | Indian Journal of Research in Homoeopathy | Vol. 14, 2020 | Complementary use of Homoeopathy in Autoimmune Pediatric Conditions | 2021',
    keyFindings: [
      'Individualized homeopathic treatment group mein ESR (Erythrocyte Sedimentation Rate) levels control group se zyada normalize hue',
      'Joint pain aur morning stiffness duration – treatment group mein 40-50% reduction reported over 12 months',
      'Recurrent flare episodes significantly kam hue 12-month follow-up mein – patients ki school attendance improve hui',
      'Quality of life scores (school attendance, activity level, emotional wellbeing) mein measurable improvement documented',
    ],
  },

  homeopathyBenefits: [
    'Juvenile Arthritis mein homeopathy ek individualized approach deta hai – sirf swollen joint nahi, balki us specific bachche ki constitution, immunity pattern, aur saath aane wale symptoms dekhkar medicine select ki jaati hai. Homeopathy autoimmune overreaction ko gradually modulate karne ki koshish karta hai, jisse bachche ka khud ka immune system balance mein aaye. Conventional DMARDs ke saath saath use karne par – doctor ki salaah se – better quality of life aur flare reduction dekhi gayi hai.',
    'Safe for children – highly diluted medicines, no liver/kidney burden unlike long-term NSAIDs ya steroids',
    'Constitutional treatment – sirf joints nahi, bachche ki overall immunity aur vitality address hoti hai; poori health improve hoti hai',
    'Flare frequency reduction – regular treatment se attack kam baar aate hain, school attendance aur daily life better hoti hai',
    'Conventional treatment ke saath compatible – allopathic medicines band karne ki zaroorat nahi; combination approach better outcomes deta hai',
    'Emotional + physical dono cover – bachche mein anxiety, school fear, irritability bhi address hoti hai jo chronic pain ke saath aati hai',
  ],

  medicines: [
    {
      _key: 'med-rhus-tox',
      name: 'Rhus Toxicodendron',
      bestFor: 'Morning stiffness, cold-damp mein worsening, movement se better',
      keyIndications: [
        'Subah uthne par extreme stiffness – thodi movement ke baad relief milti ho',
        'Cold-damp mausam mein dard badhta ho – barish ya sardi mein symptoms worse',
        '"Rusted hinge" jaisi stiffness jo halne se better ho – ye Rhus Tox ka classic picture',
        'JIA ke morning stiffness wale cases mein sabse commonly indicated medicine',
      ],
    },
    {
      _key: 'med-bryonia',
      name: 'Bryonia Alba',
      bestFor: 'Movement se dard badhna, stillness se relief, swollen hot joints',
      keyIndications: [
        'Joints mein itna dard ki hilna bilkul nahi chahte – koi bhi movement dard badha deti hai',
        'Pressure se thoda aaram aata ho – lie still karna chahte hain',
        'Swollen, hot, tense joints aur stillness se relief – ye typical Bryonia pattern',
        'Zyada pyaas hoti ho – Bryonia ka additional confirming symptom',
      ],
    },
    {
      _key: 'med-calcarea-carb',
      name: 'Calcarea Carbonica',
      bestFor: 'Weak immunity, slow growth, constitutional medicine for JIA',
      keyIndications: [
        'Mota, fair-skinned, thanda paani pasand karne wala bachcha – Calcarea Carb constitution',
        'Joints weak lagein, sweating zyada ho, growth slow ho',
        'Immune system ki underlying weakness address karta hai – deep-acting constitutional remedy',
        'JIA mein jahan bachche ki overall vitality aur bone development bhi affected ho',
      ],
    },
    {
      _key: 'med-pulsatilla',
      name: 'Pulsatilla',
      bestFor: 'Shifting joint pain, emotional bachcha, polyarticular JIA',
      keyIndications: [
        'Joints mein dard ek jagah se doosri jagah jaata ho – wandering/shifting pain',
        'Clingy, emotional bachcha – open air mein better feel karta ho',
        'Polyarticular JIA mein jahan multiple joints baar baar change karte hain',
        'Mild, yielding nature ke bachcho mein especially indicated',
      ],
    },
    {
      _key: 'med-sticta',
      name: 'Sticta Pulmonaria',
      bestFor: 'Joint swelling + nasal congestion saath, crackling sounds, extreme morning stiffness',
      keyIndications: [
        'Joint swelling ke saath nasal congestion bhi ho – respiratory aur joint symptoms saath',
        'Joints mein crackling sounds aayein – crepitus',
        'Subah extreme stiffness – Rhus Tox se differentiate karna padta hai',
        'JIA mein underused lekin effective medicine jab mucous membrane involvement saath ho',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di-omega3',
      category: 'Omega-3 aur Healthy Fats',
      emoji: '🐟',
      items: [
        'Flaxseeds (alsi) – strong anti-inflammatory omega-3, joint swelling kam karne mein madadgar; roz 1 chammach grind karke dein',
        'Walnuts (akhrot) – ALA omega-3 ka achha plant source, immune balance ke liye; 4-5 roz',
        'Fish (mackerel, sardines) – EPA/DHA directly joint inflammation reduce karta hai (non-veg ke liye)',
      ],
    },
    {
      _key: 'di-antiinflam',
      category: 'Anti-Inflammatory Vegetables & Fruits',
      emoji: '🥦',
      items: [
        'Haldi wali sabzi / turmeric milk – curcumin natural COX inhibitor hai, joints ke liye proven benefit; kali mirch ke saath dein',
        'Palak, methi, sarson ka saag – folate aur antioxidants, bone health ke liye; weekly zaroori',
        'Amla (Indian gooseberry) – Vitamin C se bharpoor, collagen synthesis ke liye zaroori; roz dein',
        'Cherries aur berries – anthocyanins joint inflammation markers reduce karte hain; seasonal fruits mein best choice',
      ],
    },
    {
      _key: 'di-gut',
      category: 'Gut Health Foods',
      emoji: '🥣',
      items: [
        'Homemade dahi (curd) – probiotics gut-immune axis balance karte hain; JIA mein gut microbiome ka role important hai',
        'Moong dal ka paani – light, easy to digest, protein ke liye; flare ke time bhi suit karta hai',
        'Sprouted grains – bioavailable nutrients, digestive health ke liye; inflammation reduce karne mein indirect help',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da-processed',
      category: 'Processed aur Fried Foods',
      emoji: '🚫',
      items: [
        'Packaged chips, namkeen, instant noodles – trans fats + excess sodium joint inflammation badhate hain',
        'Deep-fried snacks – arachidonic acid se pro-inflammatory prostaglandins bante hain',
        'Fast food / junk food – gut dysbiosis promote karta hai jo autoimmune flares se linked hai',
      ],
    },
    {
      _key: 'da-sugar',
      category: 'Sugar aur Refined Carbs',
      emoji: '🍬',
      items: [
        'Cold drinks / packaged juices – excess sugar inflammatory cytokines badhata hai; completely avoid karein',
        'White bread, maida roti, biscuits – refined carbs insulin spike karte hain, inflammation ka trigger',
        'Mithai / sweets excess mein – inflammatory cascade activate karta hai; occasional thik hai, daily nahi',
      ],
    },
    {
      _key: 'da-trigger',
      category: 'Nightshades aur Trigger Foods',
      emoji: '🍅',
      items: [
        'Tamatar, baingan, shimla mirch excess mein – solanine compound kuch arthritis patients mein flares trigger karta hai; individual basis pe observe karein',
        'Processed dairy (cheese, butter excess mein) – saturated fat joints mein inflammatory response badha sakta hai',
        'Caffeinated drinks – growing bachcho mein calcium absorption interfere karta hai; avoid karein',
      ],
    },
  ],

  dos: [
    'Regular eye checkups karwayein har 3-6 mahine – uveitis silently damage kar sakta hai, symptoms nahi hote initially; ophthalmologist se slit-lamp examination',
    'Physiotherapy aur occupational therapy le – joints ki range of motion maintain rehti hai; disease activity ke hisaab se customize exercise plan banwayein',
    'School se communicate karein – teacher ko batayein ki bachche ko floor pe nahi baithna chahiye, heavy bag nahi uthana, aur flare ke waqt extra time chahiye',
    'Swimming ya water therapy consider karein – JIA children ke liye sabse recommended exercise; water joint ko support karta hai, load nahi padta',
    'Emotional support dein – chronic bimari mein bachcho mein anxiety, depression common hai; school counselor ya child psychologist se help lein',
    'Homeopathic constitutional treatment early start karein – jitna jaldi utna better long-term outcome; consistent treatment sabse bada tool hai',
  ],

  donts: [
    'Exercise bilkul band mat karein – rest zyada hone se joints aur stiffen ho jaate hain; guided movement zaroori hai; active flare mein bhi gentle movement continue karein',
    'Pain ko ignore mat karein – "baccha zyada dramatic hai" ye soch dangerous hai; JIA mein dard real hai aur early attention zaroori hai',
    'Bina doctor ke steroids band mat karein – suddenly bandh karna dangerous ho sakta hai; doctor ki guidance mein taper karein',
    'Ek doctor se doosre ko bhagte mat raho bina proper treatment trial ke – consistency zaroori hai; JIA mein results time lete hain',
    'Sirf supplements pe rely mat karein – Vitamin D, omega-3 helpful hain but main treatment ka substitute nahi; conventional ya homeopathic treatment continue rakhein',
    'Social isolation mat hone do – bachche ko school, friends, activities mein participate karana psychological healing ke liye utna hi zaroori hai jitna medicines',
  ],

  seasonalCare: {
    summer: 'Hydration zaroori – bachche aksar paani kam peete hain; dehydration joint lubrication kam karta hai. Swimming – JIA ke liye best exercise; pool ka water joints ko support karta hai. Direct sun exposure limited karein – kuch JIA types mein photosensitivity hoti hai. AC se turant bahar nahi jaana – sudden temperature change stiffness trigger kar sakta hai.',
    monsoon: 'Damp weather mein symptoms typically worse hote hain – extra care is season mein. Wet feet se bachein – moisture joints ke aaspaas irritation badha sakti hai. Indoor exercises continue – yoga, stretching, gentle cycling. Diet mein garam soup, dal ka paani zyada lo – body warm rakhen. March-April aur Oct-Nov transition seasons mein JIA flares high-risk time hain – doctor se pehle consult karein.',
    winter: 'Joints ko warm rakhein – woolen knee caps, ankle support use karein. Subah dhoop mein baithein (Vitamin D ke liye) – JIA patients mein Vitamin D deficiency common hai. Hot water bag (warm compress) – stiff joints pe subah 10-15 min lagayein, relief milti hai. Indoor gentle exercise zaroor maintain karein – bilkul band mat karein sirf is liye ki thandi hai. Rhus Tox jaisi medicines cold-aggravated cases mein zyada kaam karti hain – homeopathic treatment winter mein aur important ho jaata hai.',
  },

  faqs: [
    {
      _key: 'faq-1',
      question: 'Juvenile Arthritis kya hota hai – simple language mein samjhayein?',
      answer: 'Juvenile Arthritis ek aisi bimari hai jisme 16 saal se kam umra ke bachche ke joints mein swelling, dard, aur akdhan aati hai – bina kisi chot ke. Ye ek autoimmune condition hai, matlab body ka defense system galti se apne hi joints par attack karta hai. "Juvenile" matlab bachpan mein hona, aur "Arthritis" matlab joint inflammation. Ye ek ya kai joints mein ho sakta hai aur kuch bachcho mein saalon tak rehta hai. Early treatment se iska asar bahot control mein rakhna possible hai.',
    },
    {
      _key: 'faq-2',
      question: 'Juvenile Arthritis aur normal joint pain mein kya fark hai?',
      answer: 'Normal joint pain aksar injury ke baad aata hai – girane se, sports mein, ya overuse se – aur 1-2 hafte mein theek ho jaata hai. Juvenile Arthritis mein dard 6 hafte se zyada rehta hai bina kisi injury ke, saath mein swelling, warmth, aur morning stiffness hoti hai (subah 30+ minutes akdhan). Agar aapka bachcha subah uthke theek se chalna nahi paa raha ya baar baar ek joint mein sujan aa rahi hai – ye normal nahi hai, turant doctor se milein.',
    },
    {
      _key: 'faq-3',
      question: 'Kya Juvenile Arthritis permanent hoti hai ya theek ho jaati hai?',
      answer: 'Kai bachcho mein Juvenile Arthritis age ke saath remission mein chali jaati hai – matlab symptoms practically khatam ho jaate hain. Oligoarticular type mein roughly 50% bachche adulthood tak symptom-free ho jaate hain. Polyarticular aur systemic types mein zyada time lagta hai. Lekin "permanent control" bilkul possible hai – sahi treatment, physiotherapy, aur supportive family ke saath. Key hai: early diagnosis aur consistent treatment.',
    },
    {
      _key: 'faq-4',
      question: 'Juvenile Arthritis ke pehle signs kya hote hain – jo parents notice karein?',
      answer: 'Sabse pehla sign often ye hota hai ki bachcha subah uthne ke baad akda hua hota hai, normal se zyada. Ya fir limp karta hai – limping without any fall. Knees, ankles, aur wrists aksar pehle affect hote hain – in mein swelling aur warmth notice hoti hai. Kuch bachche khud nahi bata paate dard – woh bas khel nahi paate, zyada irritable ho jaate hain, ya thoda walk karne ke baad baithna chahte hain. Recurrent fever bina infection ke – systemic JIA ka red flag hai.',
    },
    {
      _key: 'faq-5',
      question: 'Juvenile Arthritis ka diagnosis kaise hota hai – kaunse tests karwane chahiye?',
      answer: 'Juvenile Arthritis ka diagnosis clinical examination + kuch blood tests se hota hai. Tests mein ANA (Antinuclear Antibody), RF (Rheumatoid Factor), ESR, CRP, CBC shamil hain. Koi ek test 100% confirm nahi karta – doctor symptoms + test results milake diagnose karta hai. X-ray early stage mein normal bhi aa sakta hai. MRI zyada sensitive hai – early joint changes dikhata hai. Ek pediatric rheumatologist se consult karna ideal hai.',
    },
    {
      _key: 'faq-6',
      question: 'Juvenile Arthritis mein homeopathic treatment kaam karta hai kya?',
      answer: 'Haan – homeopathy JIA mein ek effective complementary approach hai. Homeopathy ka fayda ye hai ki ye sirf swollen joint nahi dekhti, balki us specific bachche ki constitution, immunity, emotional pattern – sab address karta hai. CCRH-affiliated studies mein JIA patients mein joint pain score aur morning stiffness duration dono mein meaningful reduction dekhi gayi hai. Conventional treatment ke saath saath use karne par – qualified homoeopath ki guidance mein – flare frequency aur quality of life dono mein improvement possible hai.',
    },
    {
      _key: 'faq-7',
      question: 'Juvenile Arthritis mein konsi homeopathic medicine di jaati hai?',
      answer: 'Juvenile Arthritis mein koi "ek medicine sabke liye" nahi hoti – ye homeopathy ki khaas baat hai. Rhus Toxicodendron un bachcho ke liye jahan subah stiffness zyada ho aur hilne se better ho. Bryonia tab jab koi movement dard badha de. Calcarea Carbonica constitution medicine hai khaas weak immunity wale bachcho ke liye. Pulsatilla shifting joint pain mein. Potency aur selection sirf ek qualified homoeopath karta hai – patient ki poori history dekhkar.',
    },
    {
      _key: 'faq-8',
      question: 'Juvenile Arthritis mein kya khaana chahiye – diet guide kya hai?',
      answer: 'Anti-inflammatory diet JIA mein bahot helpful hai. Haldi, flaxseeds, akhrot, palak, amla – ye sab khilaayein. Dahi (homemade) gut health ke liye dein. Omega-3 rich foods – fish ya flaxseeds – joint inflammation naturally kam karte hain. Avoid karo: cold drinks, packaged snacks, maida, zyada mithai, aur excess tamatar-baingan (nightshades). Warm, freshly cooked ghar ka khana – isko hi prefer karo processed cheez ke baad.',
    },
    {
      _key: 'faq-9',
      question: 'Juvenile Arthritis mein kaunsi exercise karni chahiye?',
      answer: 'JIA mein exercise ZAROOR karni chahiye – sirf theek se choose karni hai. Swimming aur water therapy best hai – water joint ko support karta hai, load nahi padta. Gentle yoga, cycling, stretching bhi helpful hain. High-impact exercises jaise running, jumping, contact sports – active flare ke waqt avoid karein. Physiotherapist se ek proper exercise plan banwayein – disease activity ke hisaab se customize karwana important hai.',
    },
    {
      _key: 'faq-10',
      question: 'Juvenile Arthritis mein school jaana possible hai kya?',
      answer: 'Bilkul possible hai – aur recommended bhi. School se achhe se communicate karein: teacher ko batayein ki bachche ko floor pe nahi baithna chahiye, heavy bag nahi uthana, aur flare ke waqt extra time chahiye. OT (Occupational Therapist) se "school plan" banwana bahot helpful hai. Zyada time ghar pe rehna isolation badhata hai – social interaction JIA bachcho ke mental health ke liye utna hi zaroori hai jitna physical treatment.',
    },
    {
      _key: 'faq-11',
      question: 'Juvenile Arthritis aur bade logon ki Rheumatoid Arthritis mein kya fark hai?',
      answer: 'Dono autoimmune joint conditions hain, lekin kuch important fark hain. JIA 16 saal se kam mein hoti hai; RA adults mein. JIA ke kai bachche adulthood mein remission mein chale jaate hain – RA lifelong zyada hoti hai. JIA mein aankhon ka involvement (uveitis) zyada common hai – RA mein kum. JIA mein growth aur bone development bhi affect ho sakta hai – RA mein ye concern nahi hota. Treatment approach similar hai lekin pediatric dosing aur monitoring alag hota hai.',
    },
    {
      _key: 'faq-12',
      question: 'Juvenile Arthritis ka flare kaise pehchanein – aur kya karein?',
      answer: 'Flare ke signs: joints mein achanak zyada swelling ya dard, morning stiffness ka wapas lautna ya badhna, fever (systemic JIA mein), bachche ka zyada thaka hua ya irritable lagna. Flare pe ghabrayein mat. Warm compress lagayein. Zyada rest dein. Jo medicines chal rahi hain woh continue rakhein – bich mein mat chhoro. Apne doctor ko inform karein. Agar joint bahot pyara red aur hot ho ya bacche ko chalna band ho jaaye – turant hospital jayein.',
    },
    {
      _key: 'faq-13',
      question: 'Juvenile Arthritis mein aankhein kyon checkup karwani chahiye?',
      answer: 'JIA ka ek silent complication hai Uveitis – aankhon ke andar ki inflammation. Ye dangerous isliye hai kyunki zyada cases mein aankhein red ya painful NAHI hoti – bilkul normal dikhti hain. Andar andar inflammation chal rahi hoti hai. Agar detect na ho to permanent vision damage ya blindness tak ho sakti hai. Isliye har JIA bachche ka regular eye checkup (har 3-6 mahine) mandatory hai – chahe aankhein theek lagein. Ophthalmologist se slit-lamp examination karwayein.',
    },
    {
      _key: 'faq-14',
      question: 'Juvenile Arthritis ka desi ilaaj ya gharelu nuskhe kya hain?',
      answer: 'Kuch science-backed gharelu approaches helpful hain JIA mein – lekin ye main treatment replace nahi karte, supporting role mein hain. Haldi wala doodh (1 chammach haldi + kali mirch + doodh) – curcumin ka anti-inflammatory effect proven hai. Warm ginger tea – adrak mein gingerol hoti hai jo joints ke liye helpful hai. Sarson ke tel se warm massage – circulation aur stiffness ke liye. Epsom salt wala warm water mein haath-paon dalna – relief ke liye. In sab ke saath proper medical/homeopathic treatment zaroor continue karein.',
    },
    {
      _key: 'faq-15',
      question: 'Juvenile Arthritis mein kya Vitamin D aur Calcium important hain?',
      answer: 'Haan – bahot important hain. JIA bachcho mein Vitamin D deficiency bahot common hai – inflammation khud Vitamin D metabolism affect karta hai, aur dard ki wajah se dhoop mein time bhi kam milta hai. Calcium aur Vitamin D dono bone health ke liye critical hain – khaaskar jab disease ya steroids bone density affect kar rahi ho. Doctor se blood test karwayein (25-OH Vitamin D level). Supplementation doctor ki guidance mein. Dhoop mein subah 20-30 minute baithna natural Vitamin D ka best source hai.',
    },
    {
      _key: 'faq-16',
      question: 'Juvenile Arthritis mein travel aur long trips kaise manage karein?',
      answer: 'Thodi planning se travel possible hai. Long sitting se joints stiff ho jaati hain – har 1-2 ghante par bachche ko chalwayein ya legs stretch karwayein. Medicines saath rakho – temperature controlled bag mein. Destination par weather check karein – extreme cold ya humidity flare trigger kar sakta hai. Emergency contacts aur medical history summary saath rakho. Homeopathic kit – Rhus Tox, Bryonia jaisi medicines travel mein flare management ke liye helpful hoti hain.',
    },
    {
      _key: 'faq-17',
      question: 'JIA mein surgery kab zaroori hoti hai?',
      answer: 'Majority JIA bachcho ko surgery ki zaroorat kabhi nahi padti – timely medical treatment se. Surgery tab consider hoti hai jab joint itna damage ho jaaye ki daily life affect ho rahi ho – usually neglected ya late-stage cases mein. Joint replacement (arthroplasty) severe cases mein ek option hai – lekin ye adult age tak generally wait kiya jaata hai. Kuch cases mein synovectomy (inflamed joint lining hatana) consider hoti hai. Early treatment se surgery ki naubi bahot kum aati hai.',
    },
    {
      _key: 'faq-18',
      question: 'Juvenile Arthritis aur mental health – kya connection hai?',
      answer: 'Ye connection bahot real aur important hai. Chronic dard mein rehna – especially school ke age mein – depression, anxiety, aur low self-esteem ka risk badhata hai. JIA bachche aksar khud ko alag feel karte hain – friends ke saath nahi khel paate, sports mein participate nahi kar paate. Studies mein JIA bachcho mein anxiety disorders ki rate general population se zyada payi gayi hai. Psychological support – school counselor, family therapy, ya child psychologist – treatment ka utna hi zaroori hissa hai jitna medicines.',
    },
    {
      _key: 'faq-19',
      question: 'Juvenile Arthritis mein kya ek bachcha normal adult life ji sakta hai?',
      answer: 'Bilkul – aur ye sach bhi hai. Sahi treatment, consistent physiotherapy, aur supportive family ke saath – bahot se JIA patients normal aur active adult life jite hain. Kuch athletes, doctors, aur professionals hain jo JIA se guzare hain. Remission mein jaane ke baad kaafi log practically symptom-free hote hain. Key hai: early diagnosis, consistent treatment, aur mental resilience. Bacche ko ye feel karwao ki bimari unke future ko define nahi karti.',
    },
    {
      _key: 'faq-20',
      question: 'Juvenile Arthritis mein kaunse tests regularly karwane chahiye?',
      answer: 'Ongoing monitoring zaroori hai. Blood tests – CBC, ESR, CRP (inflammation markers) – har 3-6 mahine. Liver function tests – kuch medicines (methotrexate) liver affect kar sakti hain. Eye checkup – har 3-6 mahine ophthalmologist se slit-lamp examination. Bone density scan (DEXA) – agar steroids chal rahe hain. X-ray ya MRI – disease progression track karne ke liye saal mein ya 2 saal mein ek baar. Ye sab routine hai – ghabrana nahi, ye monitoring treatment ko safe rakhti hai.',
    },
    {
      _key: 'faq-21',
      question: 'Badhte bachche mein Juvenile Arthritis – kya growth affect hoti hai?',
      answer: 'Haan, kuch cases mein growth affect ho sakti hai – khaas kar jo joints affected hain unke aaspaas ki bones. Ek taraf ka knee ya elbow zyada affect ho to us side ki limb thodi chhoti reh sakti hai – isko Leg Length Discrepancy kehte hain. Iske alawa, steroids bhi growth slow kar sakti hain. Isliye JIA treatment mein growth monitoring bhi zaroori hai – height, weight regular track karein. Growth hormone therapy ki zaroorat kabhi kabhi padti hai – pediatric endocrinologist se consult karo.',
    },
    {
      _key: 'faq-22',
      question: 'JIA mein ek din kaise lagta hai bacche ko – parents kaise support karein?',
      answer: 'Subah sabse mushkil hoti hai – joints akde hote hain, getting ready school ke liye tough lagta hai. Thoda extra time dein subah ko, warm shower se stiffness kam hoti hai, heavy school bag avoid karein. Evening mein thakaan zyada hoti hai – physically demanding activities avoid karein. Bacche ko "bimari hai toh kuch nahi kar sakte" wali mentality se bachayein – possible activities mein encourage karein. "I see how hard you\'re trying" kehna – validation bahot kaam karta hai.',
    },
  ],

  relatedDiseases: [
    { _type: 'reference', _ref: 'disease-arthritis' },
    { _type: 'reference', _ref: 'disease-ra' },
    { _type: 'reference', _ref: 'disease-ankylosing-spondylitis' },
    { _type: 'reference', _ref: 'disease-psoriatic-arthritis' },
    { _type: 'reference', _ref: 'disease-autism' },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Juvenile Arthritis created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/juvenile-arthritis')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
