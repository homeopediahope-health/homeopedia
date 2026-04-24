import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const ra = {
  _id: 'disease-ra',
  _type: 'disease',

  title: 'Rheumatoid Arthritis',
  hindiName: 'Gathiya / Vaat Rog / Jodo Ka Dard',
  slug: { _type: 'slug', current: 'rheumatoid-arthritis' },

  metaTitle: 'Rheumatoid Arthritis — Jodo Ka Dard, Karan aur Homeopathy',
  metaDescription: 'Rheumatoid Arthritis (gathiya) ke karan, symptoms, diet aur homeopathic treatment — simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'Rheumatoid Arthritis (RA) ek autoimmune bimari hai jisme body ka immune system khud apne joints par attack karta hai. Isse joints mein sujan, akadpan (stiffness), aur dard hota hai — khaaskar haath, pair, aur ghutno mein. Ye bimari sirf bujurgon ko nahi — 30 se 50 saal ke logon mein bhi bahot hoti hai. Agar sahi waqt par ilaaj na ho to joints permanently damage ho sakte hain, isliye early treatment bahot zaroori hai.',

  category: 'Joints',

  quickFacts: {
    whatItIs: 'Rheumatoid Arthritis ek chronic autoimmune disease hai jisme immune system khud joint ki lining par attack karta hai — iska result hota hai dono taraf ek saath sujan, stiffness aur dard, jo subah sabse zyada hota hai.',
    howCommon: 'India mein lagbhag 0.5-1% adult population RA se prabhaavit hai — yaani approximately 50-80 lakh log. Women mein purushon se 2-3 guna zyada cases milte hain.',
    treatmentDuration: 'Minimum 6-18 mahine regular treatment — remission ke baad bhi maintenance zaroor. Early start karne walo mein results 6-9 mahine mein clearly dikhte hain.',
    successRate: 'IJRH 2017, 2020: DAS-28 score mein significant reduction; morning stiffness 45 min se ghata 12 min — placebo mein minimal change',
  },

  causes: [
    'Autoimmune reaction — immune system galti se joints ki lining (synovium) par attack karta hai, jisse chronic inflammation aur joint damage hota hai',
    'Genetic factors — family mein kisi ko RA ho to risk zyada rehta hai; kuch specific genes (HLA-DR4) risk badhate hain',
    'Hormonal imbalance — estrogen ka role hota hai, isliye women mein zyada common hai; pregnancy mein aksar better hota hai, delivery ke baad flare-up aa sakta hai',
    'Environmental triggers — smoking, pollution ya infections RA ko trigger kar sakte hain; smoking sabse proven environmental trigger hai',
    'Gut microbiome imbalance — intestinal bacteria ka disturb hona RA se juda paya gaya hai; leaky gut aur autoimmune connection pe research chal raha hai',
    'Chronic stress — long-term stress immune system ko dysregulate kar deta hai, jo RA flare-ups ka ek bada karan hai',
  ],

  riskFactors: [
    'Mahilaein — purushon se 2-3 guna zyada cases women mein milte hain; hormonal factors bade role mein hain',
    '30-60 saal ki umra ke log — peak onset is range mein hota hai, lekin kisi bhi umar mein ho sakta hai',
    'Smokers — cigarette RA ka ek bada proven trigger hai aur treatment ko bhi kam effective banata hai',
    'Family history — agar maa, baap ya bhai-behan ko RA hai to risk significantly zyada',
    'Obese logon mein — excess weight joints par pressure aur systemic inflammation dono badhata hai',
    'Jo log zyada processed food aur sugar khate hain — inflammatory diet RA ki progression accelerate kar sakti hai',
  ],

  complications: [
    'Joint deformity — haath aur pair ki ungliyan tedhi ho sakti hain permanently; "swan neck" aur "boutonniere" deformities RA ki pehchaan hain',
    'Cardiovascular risk — RA mein heart disease ka risk normal se 2x zyada hota hai; chronic systemic inflammation arteries ko affect karta hai',
    'Osteoporosis — bones kamzor ho jaati hain; RA ki inflammation aur steroids dono bone density khaate hain, fracture ka khatra badhta hai',
    'Lung problems — kuch cases mein lungs ki lining mein bhi sujan aa sakti hai (pleuritis, interstitial lung disease)',
  ],

  symptoms: [
    {
      _key: 'joint',
      category: 'Jodo Ka Dard aur Sujan — Joint Symptoms',
      items: [
        'Subah uthne par jodo mein akadpan — 1 ghante se zyada rehta hai (morning stiffness — RA ki classic pehchaan)',
        'Haath, kalai, ghutno aur pair ki ungliyon mein sujan aur dard',
        'Joints warm aur red dikhna — chhoone par dard hona',
        'Dono taraf ek saath hona — RA symmetric hota hai (dono haath ya dono ghutne ek saath)',
      ],
    },
    {
      _key: 'systemic',
      category: 'Poore Sharir Par Asar — Systemic Symptoms',
      items: [
        'Thakaan (fatigue) — bina kuch kiye hi bahot thaka-thaka feel karna — RA ka sabse underrated symptom',
        'Halka bukhaar — low-grade fever jo aata-jaata rehta hai, especially flare-up mein',
        'Bhook kam lagna aur wajan ghata',
        'Anemia — khoon mein kaami ki wajah se aur kamzori',
      ],
    },
    {
      _key: 'advanced',
      category: 'Advance Stage Symptoms',
      items: [
        'Haath-pair ki ungliyon ka tedha hona (joint deformity) — lambe waqt tak untreated rehne par',
        'Chalne-phirne mein takleef — seedha khadaa rehna mushkil hona',
        'Aankhon mein lali ya sukhapan — RA aankhon ko bhi affect kar sakta hai (scleritis, dry eyes)',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'DAS-28 disease activity score mein significant reduction; morning stiffness 45 min se ghata 12 min — placebo mein minimal change',
    avgTreatmentPeriod: '6 se 18 mahine (severity ke hisaab se)',
    citation: 'Indian Journal of Research in Homoeopathy (IJRH) | 2017, 2020 | Council for Scientific and Clinical Research in Homoeopathy (CCRH) | 2019',
    keyFindings: [
      'Treatment group mein DAS-28 score (disease activity score) mein significant reduction dekha gaya placebo group ke comparison mein',
      'Morning stiffness ki duration treatment group mein average 45 min se ghata 12 min tak — placebo mein minimal change rahi',
      'Quality of life scores (physical function, pain) mein homeopathy group ne meaningful improvement dikhaya',
    ],
  },

  homeopathyBenefits: [
    'Immune modulation — RA ek autoimmune disease hai; homeopathy immune system ko balance karne par kaam karta hai, sirf symptoms dabane ki jagah',
    'Individualized treatment — subah zyada dard ho ya raat mein, thand se badhta ho ya garmi se — ye sab patient-specific factors treated hote hain',
    'Side-effect free — long-term use safe hai, jo RA jaise chronic conditions mein bahot important hai',
    'Relapse frequency kam karta hai — regular homeopathic treatment se flare-ups ke beech ka gap badhta hai',
    'Conventional treatment ke saath saath chal sakta hai — doctor ki salaah se dono ek saath lena possible aur safer hai',
  ],

  homeopathyLimitations: [
    'Severe active RA mein (high DAS-28, erosive disease) conventional DMARDs (methotrexate) ke saath combination approach zyada effective hoti hai — homeopathy akele sufficient nahi ho sakti',
    'Joint deformity aa jaaye to homeopathy deformity reverse nahi kar sakti — physical therapy aur orthopedic evaluation bhi zaroori hai',
  ],

  medicines: [
    {
      _key: 'rhustox',
      name: 'Rhus Toxicodendron',
      potency: '',
      bestFor: 'Thand/rest mein dard — movement se better — morning stiffness — "rusted gate" pattern',
      keyIndications: [
        'Dard aur akadpan thand mein ya rest ke baad badh jaata hai lekin thodi movement se theek lagta hai',
        'Raat mein dard zyada — karawat lena mushkil',
        'Warm sek (hot water bag) se aaram milta hai',
        'Subah ki stiffness jo chalte-chalte loose hoti hai',
        'Restless joints — ek jagah nahi reh sakta, movement ki zaroorat rehti hai',
        'Classic "rusted gate" pattern — pehla qadam mushkil, phir aasan',
      ],
    },
    {
      _key: 'bryonia',
      name: 'Bryonia Alba',
      potency: '',
      bestFor: 'Movement se dard badhe — bilkul still rehne mein aaram — hot swollen joints',
      keyIndications: [
        'Thodi si bhi movement se joint dard zyada ho jaata hai — bilkul still rehne mein aaram',
        'Joints soojan se bhari, chhoone par bahot sensitive',
        'Patient kisi bhi halchal se bachta hai',
        'Hot, swollen joints ke liye effective',
        'Thanda lagane se thodi rahat mil sakti hai',
        'Dry, hot environment mein worse',
      ],
    },
    {
      _key: 'apis',
      name: 'Apis Mellifica',
      potency: '',
      bestFor: 'Burning-stinging dard — puffy swelling — thanda lagane se aaram — garmi se worse',
      keyIndications: [
        'Joints mein burning, stinging dard — jaise maakhi ne kaata ho',
        'Sujan zyada ho — puffy, pitting type swelling',
        'Thanda lagane se aaram mile — garmi se dard aur badhe',
        'Acute inflammatory stage mein use hoti hai',
        'Red, hot aur puffed up joints',
        'Immune response modulate karne ka kaam karta hai',
      ],
    },
    {
      _key: 'causticum',
      name: 'Causticum',
      potency: '',
      bestFor: 'Long-standing RA — joint deformity — tendons tight — weakness + burning pain',
      keyIndications: [
        'Long-standing RA jisme joint deformity aane lagi ho',
        'Tendons tight ho gaye hon, contractures develop ho rahe hon',
        'Patient weak aur exhausted feel kare — thakaan bahut zyada',
        'Chronic progressive cases mein diya jaata hai',
        'Muscles aur joints dono affect ho chuke hon',
        'Weakness, contractures aur burning pain — teeno mein helpful',
      ],
    },
    {
      _key: 'pulsatilla',
      name: 'Pulsatilla',
      potency: '',
      bestFor: 'Migratory pain — ek joint se doosre mein shift — thanda khula environment achha lage — women mein',
      keyIndications: [
        'Dard ek joint se doosre joint mein shift karta rehta hai (migratory/wandering pain)',
        'Thanda khula environment achha lage — garmi se worse',
        'Symptoms constantly change karte hon',
        'Khaaskar women mein — hormonal connections bhi role karte hain',
        'Emotional sensitivity aur mild/gentle nature',
        'Fixed nahi rehta dard — kabhi ghutna, kabhi kalai, kabhi ankle',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'antiinflammatory',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥦',
      items: [
        'Haldi (turmeric) — curcumin ek powerful natural anti-inflammatory hai jo joint swelling kam karta hai',
        'Adrak (ginger) — prostaglandins ko inhibit karta hai jo inflammation ke liye zimmedaar hain',
        'Lehsun (garlic) — sulfur compounds immune system ko modulate karte hain',
      ],
    },
    {
      _key: 'omega3',
      category: 'Omega-3 Rich Foods',
      emoji: '🐟',
      items: [
        'Flaxseeds (alsi) — omega-3 fatty acids inflammation markers ko kam karte hain',
        'Akhrot (walnuts) — anti-inflammatory fats aur antioxidants se bharpoor',
        'Mackerel / Sardines — jo log non-veg khate hain unke liye best omega-3 source',
      ],
    },
    {
      _key: 'bone',
      category: 'Bone aur Joint Friendly',
      emoji: '🥗',
      items: [
        'Palak, methi, sarson — calcium aur vitamin K joints ke liye zaroori',
        'Amla (Indian gooseberry) — vitamin C collagen banane mein madad karta hai jo joints ke liye important hai',
        'Moong dal, masoor dal — protein se joints ke aas paas ki muscles strong rehti hain',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'inflammatory',
      category: 'Inflammatory Foods',
      emoji: '🔥',
      items: [
        'Maida aur processed food — refined carbs inflammation badhate hain',
        'Fried foods, chips, namkeen — trans fats directly inflammatory markers badhate hain',
      ],
    },
    {
      _key: 'sugar',
      category: 'Sugar aur Mithai',
      emoji: '🍬',
      items: [
        'Cheeni, mithai, cold drinks — high sugar intake RA symptoms ko worsen karta hai',
        'Packaged fruit juices — fructose corn syrup inflammation trigger karta hai',
      ],
    },
    {
      _key: 'others',
      category: 'Avoid Karo Ye Bhi',
      emoji: '🚫',
      items: [
        'Alcohol — liver par load badhata hai aur RA medicines ke saath interact karta hai',
        'Red meat (zyada matra mein) — arachidonic acid inflammation pathway activate karta hai',
        'Nightshade vegetables (baingan, tamatar, shimla mirch) — kuch RA patients mein ye trigger bante hain — apne reaction khud note karein',
      ],
    },
  ],

  dietTip: 'RA mein "anti-inflammatory plate" ka simple formula: aadhi plate rang-birangi sabziyan (palak, gobhi, gajar), ek chauthai protein (dal/macchli/ande), ek chauthai complex carb (brown rice/jowar roti). Haldi aur adrak roz kisi na kisi roop mein khayein.',

  dietNote: 'Food trigger diary zaroor rakhen — agar koi specific food ke baad joints mein dard badhe, 2-3 baar confirm karein phir doctor ko batayein. Nightshade vegetables (baingan, tamatar) kuch patients mein trigger hain lekin har kisi mein nahi — blindly avoid karne ki zaroorat nahi.',

  weeklyPlan: [
    {
      _key: 'monday',
      day: 'Somwar / Monday',
      breakfast: 'Haldi-adrak wala warm doodh + besan cheela (2) with spinach',
      midMorning: '1 chammach alsi (flaxseed) powder dahi mein + 4-5 akhrot',
      lunch: 'Brown rice + moong dal + palak sabzi (haldi + lahsun tadka)',
      evening: 'Adrak-haldi chai + roasted chana (handful)',
      dinner: 'Jowar roti (2) + lauki-chane ki sabzi + warm soup',
    },
    {
      _key: 'tuesday',
      day: 'Mangalwar / Tuesday',
      breakfast: 'Oats porridge with adrak + 1 amla (fresh ya candy)',
      midMorning: 'Papaya (medium bowl) + warm nimbu paani',
      lunch: 'Multigrain roti (2) + arhar dal + methi sabzi',
      evening: 'Mulethi-adrak kadha + 5-6 badam',
      dinner: 'Khichdi (moong dal + rice, light) + dahi (room temp)',
    },
    {
      _key: 'wednesday',
      day: 'Budhwar / Wednesday',
      breakfast: 'Ragi dosa (2) + coconut-lahsun chutney + warm nimbu paani',
      midMorning: 'Amla juice (1 shot) ya fresh guava',
      lunch: 'Brown rice + masoor dal + gobhi-gajar sabzi (no deep fry)',
      evening: 'Haldi wala warm doodh (low fat) + 1 chammach alsi',
      dinner: 'Bajra roti (1-2) + palak-tofu curry ya palak-paneer (less oil)',
    },
    {
      _key: 'thursday',
      day: 'Guruwar / Thursday',
      breakfast: 'Dalia (broken wheat) upma with vegetables + warm adrak chai',
      midMorning: 'Nariyal paani ya seasonal fruit (room temp)',
      lunch: 'Multigrain roti + chana dal + tinda/lauki sabzi',
      evening: 'Green tea (bina cheeni) + roasted makhana',
      dinner: 'Moong dal soup + jowar roti (1) + stir-fried vegetables',
    },
    {
      _key: 'friday',
      day: 'Shukrawar / Friday',
      breakfast: 'Poha (vegetables ke saath, haldi) + 1 boiled egg (if non-veg)',
      midMorning: '4-5 akhrot + 1 chammach alsi seeds',
      lunch: 'Brown rice + rajma (homemade, less spice) + green salad',
      evening: 'Adrak-tulsi chai + roasted chana',
      dinner: 'Macchli curry (sardines/mackerel preferred) ya palak sabzi + roti',
    },
    {
      _key: 'saturday',
      day: 'Shanivaar / Saturday',
      breakfast: 'Idli (3) + sambar (thin, warm) + green chutney',
      midMorning: 'Amla-ginger juice ya warm lemon water',
      lunch: 'Vegetable pulao (brown rice) + raita (room temp) + dal',
      evening: 'Special anti-inflammatory kadha: haldi + adrak + mulethi + kali mirch in warm water',
      dinner: 'Light dal soup + 1-2 multigrain roti + steamed vegetables with ghee',
    },
    {
      _key: 'sunday',
      day: 'Raviwar / Sunday',
      breakfast: 'Uttapam (vegetables ke saath) + sambar + adrak chai',
      midMorning: 'Fresh seasonal fruit (orange, guava, papaya — room temp)',
      lunch: 'Dal-khichdi with ghee + dahi + kheera-gajar salad',
      evening: 'Haldi wala doodh ya herbal tea + light snack',
      dinner: 'Vegetable soup (thick) + jowar roti + palak sabzi',
    },
  ],

  lifestyle: [
    {
      _key: 'morning_warmup',
      title: 'Subah Ka Warm-Up — Pehle 20 Min Soft',
      description: 'Raat bhar joints mein fluid settle hota hai — seedha bhaari kaam mat shuru karein. Pehle 10-15 min warm water se haath-pair dhoyen, garam paani piyein, halki stretching karein. Is warm-up se morning stiffness 30-40% jaldi khatam hoti hai.',
    },
    {
      _key: 'exercise',
      title: 'Roz Halki Exercise — Rest Nahi Solution',
      description: 'Swimming sabse safe hai — joints par pressure nahi. Walking, gentle yoga (marjariasana, tadasana), aur stretching best hain. Flare-up mein rest theek hai, lekin jab better feel ho to movement zaroor rakho — complete rest se muscles aur kamzor hoti hain aur joints stiffen karte hain.',
    },
    {
      _key: 'hot_compress',
      title: 'Warm Sek Roz — Simple aur Effective',
      description: 'Hot water bag ya warm towel stiff joints par 15-20 min roz lagaen — especially subah. Warm sek blood circulation badhata hai, muscle spasm kam karta hai, aur synovial fluid movement better karta hai. Cold pack sirf acute swelling mein (pehle 24-48 ghante).',
    },
    {
      _key: 'stress',
      title: 'Stress = RA Flare Trigger',
      description: 'Anulom Vilom aur Bhramari pranayama roz 10 min — cortisol level kam karta hai jo inflammation reduce karta hai. Mental stress RA flare-ups ka ek documented trigger hai — ye sirf "mann ki baat" nahi, biology hai. Regular meditation ya koi bhi relaxing hobby RA management ka hissa hai.',
    },
  ],

  dos: [
    'Subah halki exercise zaroor karein (walking, swimming, yoga) — joints ko movement milti hai aur stiffness kam hoti hai',
    'Warm sek (hot water bag) stiff joints par lagayein — especially subah uthte waqt — akadpan jaldi theek hoti hai',
    'Regular homeopathic follow-up karein — RA ek chronic condition hai, consistent treatment se hi results milte hain',
    'Weight control mein rakhein — har extra kg joints par aur stress daalta hai khaaskar ghutno par',
    'Neend poori lein — 7-8 ghante ki quality sleep immune system ko reset karti hai jo RA mein bahot important hai',
  ],

  donts: [
    'Subah uthte hi bhaari kaam ya exercise mat karein — joints ko pehle warm up karne ka time do',
    'Doctor ki salaah ke bina koi bhi painkiller ya steroid band mat karein — suddenly band karna dangerous ho sakta hai',
    'Cigarette bilkul mat piyein — smoking RA ka sabse proven environmental trigger hai aur treatment ko bhi fail karta hai',
    'Cold, air-conditioned environment mein lambe waqt mat baithen — thand joints ki stiffness aur dard badhati hai',
    'Stress ko ignore mat karein — mental stress RA flare-ups ka ek bada reason hai — meditation ya pranayama daily karein',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Rheumatoid Arthritis aur normal gathiya (osteoarthritis) mein kya fark hai?',
      answer: 'Dono alag beemariyan hain. Rheumatoid Arthritis ek autoimmune disease hai jisme immune system khud joints par attack karta hai — isme dono taraf (symmetric) sujan hoti hai, subah zyada akadpan hota hai aur kisi bhi umar mein ho sakta hai. Normal gathiya (osteoarthritis) mein cartilage ghis jaata hai umar ke saath — ye mostly 50+ ke logon mein hota hai aur ek hi joint affect hota hai. RA mein blood test mein RF (Rheumatoid Factor) ya Anti-CCP positive aata hai — jo osteoarthritis mein nahi hota. Agar subah stiffness 1 ghante se zyada rahe aur dono haath ya ghutne ek saath soojen to RA ki jaanch zaroor karaayein.',
    },
    {
      _key: 'faq2',
      question: 'Kya Rheumatoid Arthritis permanently theek ho sakta hai?',
      answer: 'RA ka permanent control bilkul possible hai — sahi treatment aur lifestyle se mahino tak koi flare-up nahi aata aur life practically normal ho jaati hai. Jo log early stage mein treatment shuru karte hain, consistent rehte hain aur lifestyle manage karte hain, unme disease remission achieve hota hai. Homeopathy mein khaas baat ye hai ki ye sirf symptoms nahi — immune system ki underlying dysregulation address karta hai, jo long-term mein relapse frequency kam karta hai.',
    },
    {
      _key: 'faq3',
      question: 'Rheumatoid Arthritis mein subah itni stiffness kyun hoti hai?',
      answer: 'Raat bhar joints mein jo fluid hota hai wo rest ke dauran settle ho jaata hai aur inflammatory chemicals accumulate ho jaate hain — isliye subah uthne par joints stiff aur dardnaak feel hoti hain. Ye morning stiffness RA ki ek classic pehchaan hai jo 1 ghante se zyada rehti hai. Normal joint dard mein 10-15 minute mein theek ho jaata hai. Halki warm-up exercise, hot water bag aur garam paani se haath-pair dhoona subah ki stiffness jaldi theek karne mein madad karta hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy Rheumatoid Arthritis mein kaam karta hai?',
      answer: 'Haan — homeopathy RA mein ek effective complementary approach hai, especially jab treatment individualized ho. CCRH-affiliated studies mein RA patients ke pain aur morning stiffness dono mein placebo se better results mile hain. Homeopathy ka sabse bada fayda ye hai ki ye sirf joint dard nahi — immune system ko regulate karne par kaam karta hai jo RA ka asli cause hai. Saath hi thakaan, neend aur mood — jo RA mein buri tarah affect hote hain — woh bhi better hote hain.',
    },
    {
      _key: 'faq5',
      question: 'RA mein kaun se tests karaane chahiye?',
      answer: 'RA diagnose karne ke liye ye tests important hain: RF (Rheumatoid Factor) blood test, Anti-CCP antibody test (ye sabse specific test hai RA ke liye), ESR aur CRP (inflammation markers), CBC (complete blood count), X-ray ya MRI joints ka. Anti-CCP positive hona early RA detect karne mein sabse reliable hai — ye symptoms aane se pehle bhi positive aa sakta hai. Agar aapke haath-pair ke joints mein subah akadpan ho aur dono taraf sujan ho to in tests ke liye doctor se milein.',
    },
    {
      _key: 'faq6',
      question: 'Kya Rheumatoid Arthritis mein yoga aur exercise kar sakte hain?',
      answer: 'Haan, bilkul kar sakte hain — aur karna bhi chahiye. Light movement RA mein joints ki flexibility banaye rakhti hai aur stiffness kam karti hai. Best options hain: swimming (sabse safe — joints par pressure nahi), walking, gentle yoga (tadasana, marjariasana), aur stretching. Avoid karein: heavy weight lifting, running on hard surface, aur koi bhi exercise jo dard badhaaye. Flare-up ke dauran rest better hai — jab sujan zyada ho tab exercise mat karo, lekin jab better feel ho tab movement zaroor rakho.',
    },
    {
      _key: 'faq7',
      question: 'Rheumatoid Arthritis mein kya nahi khana chahiye?',
      answer: 'RA mein ye cheezein avoid ya kam karni chahiye: maida aur refined carbs (white bread, biscuits), fried aur processed food, cheeni aur meetha (cold drinks, packaged juice), alcohol, aur red meat ki zyada matra. Kuch patients mein baingan, tamatar aur shimla mirch (nightshade vegetables) bhi symptoms badhaate hain — agar aapko lage ki koi specific food ke baad dard badha hai to diary mein note karein. Anti-inflammatory diet — haldi, adrak, omega-3 rich foods — symptoms manage karne mein bohot help karti hai.',
    },
    {
      _key: 'faq8',
      question: 'Kya RA bacchon mein bhi hota hai?',
      answer: 'Haan — bacchon mein RA jaisi ek bimari hoti hai jise Juvenile Idiopathic Arthritis (JIA) kehte hain. Ye 16 saal se kam umar ke bacchon mein ho sakti hai. Isme bhi joints mein sujan, dard aur akadpan hota hai lekin kuch cases mein fever aur rash bhi aata hai jo adult RA mein nahi hota. Agar bacha subah uthne ke baad walk karne mein takleef bataye, ya ek ya zyada joints soojen lagte hon, to paediatrician se milna zaroori hai. Early diagnosis bacche ki normal growth ke liye bahot important hai.',
    },
    {
      _key: 'faq9',
      question: 'RA mein pregnant hone par kya karna chahiye?',
      answer: 'Pregnancy mein RA ka behavior interesting hai — kai women mein pregnancy ke dauran symptoms better hote hain, lekin delivery ke baad flare-up aa sakta hai. Agar aap pregnant hain ya pregnancy plan kar rahi hain to apne rheumatologist aur gynaecologist dono ko batayein — kuch RA medicines pregnancy mein safe nahi hoti. Homeopathy pregnancy mein generally safe mani jaati hai, lekin koi bhi medicine lene se pehle qualified doctor se consult karna zaroor karein.',
    },
    {
      _key: 'faq10',
      question: 'Kya RA mein steroid lena sahi hai — gharelu ilaaj se zyada asardaar hai kya?',
      answer: 'Steroid (jaise prednisolone) acute flare-ups mein fast relief deta hai — ye sach hai. Lekin long-term steroid use ke side effects serious hain: weight gain, diabetes ka risk, bones ka kamzor hona (osteoporosis), aur immunity ghatna. Isliye steroids sirf short-term aur doctor ki supervision mein lene chahiye — khud se shuru ya band mat karein. Gharelu ilaaj jaise haldi-doodh, adrak ki chai, warm sek — ye supporting role mein helpful hain lekin akele RA control nahi karte.',
    },
    {
      _key: 'faq11',
      question: 'Kya RA ek hi baar mein attack karta hai ya baar baar aata hai?',
      answer: 'RA ek chronic (long-term) bimari hai jo flares aur remission ke cycle mein chalta hai — kabhi symptoms zyada badh jaate hain (flare-up), kabhi kam ho jaate hain ya practically nahi rehte (remission). Sahi treatment ka goal hai flare-ups ki frequency aur intensity dono kam karna aur remission periods ko lambe banana. Jo patients consistent treatment par rehte hain, diet aur lifestyle maintain karte hain, unme remission lambe waqt tak rehta hai. Isliye RA mein treatment sirf dard ke waqt nahi — regularly lena hota hai.',
    },
    {
      _key: 'faq12',
      question: 'Rheumatoid Arthritis test mein RF negative aaya lekin doctor ne RA kaha — kaise?',
      answer: 'Ye possible hai. Lagbhag 20-30% RA patients mein RF (Rheumatoid Factor) negative aata hai — isse "Seronegative RA" kehte hain. Aisa cases mein diagnosis clinical symptoms, Anti-CCP test, imaging (X-ray/MRI), aur inflammation markers (ESR, CRP) ke combination se hoti hai. Anti-CCP test RF se zyada specific hai — wo bhi negative ho to bhi doctor symptoms aur imaging ke basis par diagnose kar sakta hai. Agar aapke symptoms strong hain to negative RF se confused mat honaa — specialist se poori jaanch karaayein.',
    },
  ],

  sources: [
    {
      _key: 'ijrh2020',
      name: 'Indian Journal of Research in Homoeopathy (IJRH) — Homoeopathic treatment in Rheumatoid Arthritis',
      url: 'https://www.ijrh.org',
      year: '2020',
    },
    {
      _key: 'ccrh2019',
      name: 'Council for Scientific and Clinical Research in Homoeopathy (CCRH) — Clinical Research in Arthritis',
      url: 'https://ccrhindia.nic.in',
      year: '2019',
    },
    {
      _key: 'acr2021',
      name: 'American College of Rheumatology — RA Treatment Guidelines',
      url: 'https://www.rheumatology.org',
      year: '2021',
    },
    {
      _key: 'who2022',
      name: 'WHO Musculoskeletal Conditions Report',
      url: 'https://www.who.int',
      year: '2022',
    },
    {
      _key: 'lancet2019',
      name: 'Lancet Global Burden of Disease Study — Rheumatoid Arthritis India Data',
      url: '',
      year: '2019',
    },
  ],

  youtubeUrl: 'https://youtu.be/irYAIVcKmF0',

  selfCheck: 'Subah uthne par haath ya ghutno mein 1 ghante se zyada akadpan ho, aur dono taraf ek saath sujan aaye — to RA ki jaanch zaroor karwayen. RF aur Anti-CCP blood test se pehle diagnosis ho sakti hai.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    const result = await client.createOrReplace(ra)
    console.log('✅ Rheumatoid Arthritis document created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/rheumatoid-arthritis')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
