import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const gout = {
  _id: 'disease-gout',
  _type: 'disease',

  title: 'Gout (Uric Acid)',
  hindiName: 'Vaat Rakta / Gathiya (Uric Acid wala)',
  slug: { _type: 'slug', current: 'gout' },

  metaTitle: 'Gout Treatment in Hindi — Uric Acid, Diet aur Homeopathy',
  metaDescription: 'Gout (Vaat Rakta) ka treatment, uric acid control, diet chart aur homeopathic medicines — verified info, doctor-reviewed. Hinglish mein samjho.',

  heroText: 'Gout ek type ki joint problem hai jo tab hoti hai jab khoon mein uric acid ki matra badh jaati hai. Ye extra uric acid joints ke andar crystal ki tarah jam jaata hai — jisse achanak tez dard, sujan, aur laalipan hota hai. Aksar raat ko bina kisi warning ke attack aata hai — usually pair ke anguthe (big toe) mein, lekin ghutne, takle, aur kuhni mein bhi ho sakta hai. Ye ek treatable condition hai — sahi diet, lifestyle aur treatment se uric acid control mein rakhna bilkul possible hai.',

  category: 'Joints',

  quickFacts: {
    whatItIs: 'Gout ek crystal arthropathy hai — joint mein uric acid crystals jam jaate hain aur achanak bahut tez dard, sujan hoti hai',
    howCommon: 'India mein 0.12% to 6.1% adults affected (urban population mein zyada); sharply rising trend',
    treatmentDuration: 'Acute attack 3-10 din; long-term control 3-6 mahine consistent treatment se',
    successRate: 'CCRH-affiliated studies mein homeopathy treatment group mein serum uric acid levels aur acute attack frequency dono mein meaningful reduction',
  },

  causes: [
    'Purine-rich foods zyada khaana (red meat, organ meat, seafood) — body mein uric acid zyada banta hai',
    'Kidneys uric acid theek se filter nahi kar paatein — blood mein level badh jaata hai',
    'Dehydration — paani kam peena uric acid ko concentrated karta hai',
    'Alcohol, especially beer — uric acid production badhata hai aur kidneys ka filter bhi slow karta hai',
    'Fructose (sweet drinks, packaged juice) — liver mein uric acid production trigger karta hai',
    'Kuch dawaaein — aspirin, diuretics, kuch BP ki medicines — uric acid rokti hain kidneys mein',
  ],

  riskFactors: [
    'Mard (purush) — estrogen hormone mahilaon mein uric acid level control karta hai, isliye unhe menopause se pehle kam hoti hai',
    'Family history — genetics ka role 60% tak hota hai',
    'Motapa (obesity) — body zyada uric acid banati hai',
    'High BP, diabetes, kidney disease, thyroid — ye sab conditions uric acid badhate hain',
    'Purine-heavy non-vegetarian diet wale log',
    'Sharaab peene wale, especially beer',
    '40 saal ke upar ke mard aur menopausal mahilayein',
  ],

  complications: [
    'Kidney stones — uric acid crystals kidneys mein jam jaate hain',
    'Joint damage — chronic gout mein joints permanent roop se kharab ho sakti hain',
    'Tophi — skin ke neeche hard lumps, joints ke aas paas',
    'Kidney function mein gradual giraawat — chronic high uric acid nephropathy le jaata hai',
    'Cardiovascular risk — studies mein high uric acid ko heart disease se link kiya gaya hai',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Acute Attack Ke Dard Ke Signs',
      symptoms: [
        'Achanak raat ko ya subah uthte waqt joint mein bahut tez dard',
        'Pair ka angutha (big toe) sabse common — chalte bhi nahi banta',
        'Joint garam, laal, aur sparsh se bhi dard kare',
        'Sujan itni tez ki joota ya chappal nahi pehni jaaye',
        'Halki bukhaar (fever) bhi aa sakti hai kuch logon ko',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Uric Acid Barhne Ke Signals',
      symptoms: [
        'Blood test mein uric acid 7 mg/dL se upar (men) / 6 mg/dL se upar (women)',
        'Frequent joint pain, especially raat ko',
        'Ankles, ghutne, kuhni mein bhi dard — sirf anguthe mein nahi',
        'Kidney area (peethe ke neeche dono taraf) mein discomfort',
        'Baar baar urine infection ya dark-colored peshab',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Chronic / Advanced Stage Signs',
      symptoms: [
        'Joints ke aas paas hard, chalky lumps (tophi)',
        'Ek baar theek hone ke baad dobara dobara attack — har baar jaldi',
        'Joint stiffness jo subah kaafi der tak rehti hai',
        'Chalte ya seerhiyan chadhte waqt joint mein khatakne ki awaaz',
      ],
    },
  ],

  diseaseTypes: [
    {
      _key: 'dt1',
      typeName: 'Acute Gouty Arthritis (Sudden Attack)',
      description: 'Ye sabse common type hai. Achanak raat ko tez dard uthta hai — aksar pair ke anguthe mein. Joint laal, garam, aur itni suji hoti hai ki chadar ka sparsh bhi bardaasht nahi hota. Attack 3-10 din mein thik hota hai, lekin bina treatment ke baar baar aata rehta hai.',
    },
    {
      _key: 'dt2',
      typeName: 'Intercritical Gout (Attacks Ke Beech Ka Period)',
      description: 'Do attacks ke beech ki period — jab koi dard nahi hota. Lekin is waqt bhi joints mein uric acid crystals banate rehte hain. Isko "silent gout" bhi kaha jaata hai — treatment na karein to agli baar attack aur zyada bada aata hai.',
    },
    {
      _key: 'dt3',
      typeName: 'Chronic Tophaceous Gout (Purana, Advanced Stage)',
      description: 'Saalon tak treat na kiya jaaye to uric acid crystals skin ke neeche "tophi" ke roop mein hard lumps bana lete hain — kuhni, kaan ke peeche, pair ke upar. Joints permanently damage ho sakti hain. Ye India mein unme zyada dikhta hai jo treatment late start karte hain.',
    },
    {
      _key: 'dt4',
      typeName: 'Gout + Kidney Stones (Uric Acid Nephrolithiasis)',
      description: 'Kuch patients mein high uric acid kidneys mein bhi crystals banata hai — jo kidney stones ban jaate hain. Is type mein joint dard ke saath peeche dard ya peshab mein problem bhi ho sakti hai.',
    },
    {
      _key: 'dt5',
      typeName: 'Pseudogout (Calcium Pyrophosphate Crystal Disease)',
      description: 'Ye technically gout nahi hai, lekin dikhta gout jaisa hai — fark ye hai ki crystals calcium ke hote hain uric acid ke nahi. Ghutne mein zyada hota hai. Blood test se fark pata chalta hai.',
    },
  ],

  homeopathyExplainer: 'Gout mein homeopathy do levels pe kaam karta hai — ek toh acute attack ke dard aur sujan mein relief deta hai, aur doosra, body ka uric acid metabolism is tarah regulate karta hai ki attacks ki frequency dheere dheere kam hoti jaaye. Sirf pain killer nahi hai ye — body ko andar se theek karne ki koshish hoti hai. Jo patient baar baar attacks jhelte hain unhe homeopathy mein ek "constitutional treatment" milta hai jo unki overall uric acid sensitivity address karta hai.',

  ccrh: {
    summary: 'CCRH-affiliated clinical work mein gout aur hyperuricemia ke cases mein, treatment group mein serum uric acid levels meaningful roop se gire — control group ke comparison mein acute attack frequency bhi kam hui.',
    keyFindings: [
      'Homeopathic treatment group mein serum uric acid levels control group se zyada gire (statistically significant)',
      'Acute attack frequency 3 mahine mein reduce hui treatment group mein',
      'Patient-reported pain score (VAS) homeopathy group mein placebo se better improvement dikha',
      'Joint swelling recurrence rate kam hui individualized treatment mein',
    ],
    citation: 'CCRH Clinical Research Unit Studies on Arthritis & Metabolic Disorders | Journal of Research in Homoeopathy | 2018-2022 | ccrhindia.nic.in',
    averageTreatmentPeriod: '3-6 mahine (acute se chronic tak alag)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Colchicum Autumnale',
      bestFor: 'Pair ke anguthe ya joints mein intense burning + tearing dard, jo touch se aur badh jaaye; sujan aur movement se intolerance.',
      keyIndications: [

        'Colchicum plant se bani ye medicine classically gout attacks ke acute dard mein use hoti hai — joint inflammation aur uric acid sensitivity dono pe kaam karti hai.',

      ],
    },
    {
      _key: 'med2',
      name: 'Benzoic Acid',
      bestFor: 'Gout ke saath strong-smelling, dark urine; joints mein cracking sound; baar baar attack aane wale patients.',
      keyIndications: [

        'Uric acid aur urea ke metabolism se directly related medicine — kidneys ke through elimination improve karne mein helpful mani jaati hai.',

      ],
    },
    {
      _key: 'med3',
      name: 'Ledum Palustre',
      bestFor: 'Choti joints mein dard jo upar ki taraf (upward) travel kare — pahle anguthe phir ghutne; thande paani se aaram mile.',
      keyIndications: [

        'Gout ka classic "ascending" pattern — pain jo neeche se upar jaaye — is medicine ka key indication hai; joint crystal deposits pe kaam karta hai.',

      ],
    },
    {
      _key: 'med4',
      name: 'Urtica Urens',
      bestFor: 'High uric acid blood mein; saath mein skin mein itching ya burning; kidney-gout combination.',
      keyIndications: [

        'Uric acid excretion promote karne ke liye widely used — kidneys ke filtering function ko support karta hai.',

      ],
    },
    {
      _key: 'med5',
      name: 'Lycopodium Clavatum',
      bestFor: 'Right side ki joints zyada affected; digestive problems ke saath gout; gas, bloating, khana pachne ki takleef bhi ho.',
      keyIndications: [

        'Liver aur kidney dono pe constitutional action karta hai — jo uric acid metabolism ke liye zaroori organs hain.',

      ],
    },
    {
      _key: 'med6',
      name: 'Sabina',
      bestFor: 'Joints mein pricking, shooting dard; motion se dard aur badhe; chalti bimari mein use hoti hai.',
      keyIndications: [

        'Joint inflammation ke saath metabolic disturbance mein helpful — especially jab dard constant aur severe ho.',

      ],
    },
  ],

  dietInclude: [
      {
        _key: 'dr1',
        category: 'Paani aur Liquids (Sabse Important)',
        items: [
          'Paani (3-4 liter daily) — uric acid dilute karke kidneys se flush karta hai; ye sabse zaroori step hai',
          'Nimbu paani (bina sugar) — vitamin C uric acid level naturally ghataata hai; alkaline bhi karta hai urine ko',
          'Naariyal paani (coconut water) — electrolytes + hydration, kidney friendly',
        ],
      },
      {
        _key: 'dr2',
        category: 'Low-Purine Vegetables',
        items: [
          'Lauki (bottle gourd) — diuretic effect; uric acid nikalne mein madad karta hai',
          'Karela (bitter gourd) — blood purifier; uric acid metabolism pe positive effect',
          'Kakdi / kheera (cucumber) — hydrating; uric acid dilution mein helpful',
          'Gobhi, beans (French beans) — low purine, safe vegetables',
        ],
      },
      {
        _key: 'dr3',
        category: 'Fruits Jo Uric Acid Ghataate Hain',
        items: [
          'Cherries (fresh ya frozen) — anthocyanins naam ka compound uric acid crystals dissolve karne mein help karta hai; studies mein proven',
          'Strawberry, blueberry — antioxidants + uric acid lowering effect',
          'Kela (banana) — vitamin B6 uric acid metabolism mein role nibhata hai; safe fruit',
          'Apple (sebu) — malic acid uric acid ko neutralize karta hai; roz khao',
        ],
      },
      {
        _key: 'dr4',
        category: 'Dairy & Protein Sources',
        items: [
          'Low-fat doodh, dahi — dairy proteins uric acid excretion badhate hain; studies mein confirmed',
          'Eggs — low purine protein source; safely khaa sakte ho',
          'Tofu (soy-based) — good protein with low purine content',
        ],
      },
  ],

  dietAvoid: [
      {
        _key: 'da1',
        category: 'High Purine Meats',
        items: [
          'Mutton, lamb, beef (red meat) — bahut zyada purine; direct uric acid spike karta hai',
          'Organ meats — liver (kaleji), kidney (gurda), brain — extremely high purine',
          'Processed meats — sausage, salami, packed chicken nuggets',
        ],
    },
      {
        _key: 'da2',
        category: 'Seafood',
        items: [
          'Prawns (jheenga), crab, lobster — high purine seafood; strict avoid',
          'Sardines, anchovies, mackerel — oily fish mein purine concentration high hoti hai',
          'Shellfish sabhi — gout ka major trigger',
        ],
      },
      {
        _key: 'da3',
        category: 'Alcohol aur Sugary Drinks',
        items: [
          'Beer — sabse bura drink for gout; purine bhi deta hai, uric acid elimination bhi roka karta hai',
          'Sharaab (koi bhi) — kidney ka uric acid filter slow karta hai',
          'Cold drinks, packaged juice, energy drinks — high fructose corn syrup uric acid production badhata hai',
        ],
      },
    ],
  seasonalCare: {
    winter: 'Gout attacks winter mein zyada frequent hote hain — cold mein blood vessels shrink karte hain, uric acid crystals aur asaani se deposit hote hain. Garam paani ya herbal tea peeyein — paani peene ki aadat winter mein kam hoti hai. Heavy non-veg sabse zyada winter mein khaya jaata hai India mein — controlled rakhein. Exercise band mat karein — movement crystals ko break down karne mein help karta hai. Wool ya garm kapde joints pe zaroor rakhen — thandi joint mein crystal deposit fast hota hai.',
    summer: 'Paseena zyada aata hai = dehydration ka risk barhta hai = uric acid concentrate hota hai = attack chance badhta hai. Roz 4-5 liter paani ZAROOR peeyein. Aam, litchi (high fructose fruits) — limit karein; attack trigger kar sakte hain. AC mein roz rehna + kam paani peena = classic summer gout trigger. Nimbu sharbat (bina sugar), naariyal paani — best drinks. Attack hone pe ice pack mat lagayein joint pe — room temperature compress better hai.',
    monsoon: 'Humidity + irregular eating = uric acid spikes. Street food, fried snacks, heavy non-veg — ye season mein especially avoid karo. Paani kam peena habit ho jaata hai baarish mein — dhyaan rakhein. Infection aur gout dono saath ho sakte hain — doctor se milein agar fever bhi ho.',
    generalTips: [
      'Blood uric acid 3-6 mahine mein check karaate rahein — trend dekhna zaroori hai',
      'Cherries roz khayein (fresh, frozen, ya juice bhi) — clinical studies mein gout attack frequency reduce karne mein effective',
      'Regular walking karein (30 min daily) — joint ke aas paas circulation improve karta hai; crystals deposit nahi hote',
    ],
  },
  dos: [
    'Roz 3-4 liter paani peeyein — uric acid kidney se flush karne ka sabse sasta aur effective tarika',
    'Cherries roz khayein (fresh, frozen, ya juice bhi) — clinical studies mein gout attack frequency reduce karne mein effective prove hua hai',
    'Regular walking karein (30 min daily) — joint ke aas paas circulation improve karta hai; crystals deposit nahi hote',
    'Blood uric acid 3-6 mahine mein check karaate rahein — trend dekhna zaroori hai',
    'Low-fat dairy roz lein (doodh, dahi) — dairy protein uric acid excretion genuinely badhata hai',
    'Body weight control mein rakhein — har 1 kg weight loss se uric acid meaningfully girti hai',
    'Attack ke time joint ko rest karein aur elevate rakhein — swelling kam hoti hai',
  ],

  donts: [
    'Beer aur alcohol bilkul band karein (especially gout mein) — ye sirf trigger nahi, uric acid elimination bhi rok deta hai',
    'Red meat, organ meat daily mat khayein — purine load direct uric acid spike karta hai',
    'Cold drinks, packaged juice, energy drinks avoid karein — fructose liver mein uric acid banata hai',
    'Ek saath bahut zyada khaana mat khayein (binge eating) — uric acid suddenly spike hoti hai after heavy meal',
    'Aspirin self-medicate mat karein gout mein — aspirin uric acid retention karti hai, ulta kaam karta hai',
    'Attack ke time exercise force mat karein — joint pe load se crystal fragments spread ho sakte hain',
    'Vitamin supplements "by guess" mat lo — niacin aur Vitamin B3 high dose gout worsen karte hain',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Gout kya hota hai — simple mein samjhao?',
      answer: 'Gout ek joint disease hai jo blood mein uric acid badhne se hoti hai. Ye extra uric acid joints ke andar needle jaisi crystals bana leta hai — jisse achanak bahut tez dard, sujan aur laalipan hota hai. Sabse zyada pair ke anguthe mein hota hai, lekin ghutne, takla, aur kuhni mein bhi aa sakta hai. Ye serious lagti hai lekin sahi treatment aur diet se control bilkul possible hai.',
    },
    {
      _key: 'faq2',
      question: 'Uric acid kitna hona chahiye — normal range kya hai?',
      answer: 'Normal range hai: Purush (men): 3.5 se 7.0 mg/dL; Mahila (women): 2.6 se 6.0 mg/dL. Agar level 7 mg/dL se upar (men) ya 6 mg/dL se upar (women) hai to ise hyperuricemia kehte hain — iska matlab attack aaega hi ye nahi, but risk badh jaata hai. Jo log 9-10+ level pe bhi hain unhe treatment zaroori hai, chahe attack aa raha ho ya nahi.',
    },
    {
      _key: 'faq3',
      question: 'Gout attack kitna time rehta hai — aur apne aap theek hota hai?',
      answer: 'Ek acute gout attack 3 se 10 din tak reh sakta hai. Bina treatment ke bhi attack dheere dheere thik ho jaata hai — lekin iska matlab ye nahi ki bimari gayi. Bina treatment ke agli baar attack aur jaldi aata hai, aur aur zyada joints affect hoti hain. Proper treatment se attack frequency dhire dhire kam hoti jaati hai — kaafi log mahino tak attack-free rehte hain.',
    },
    {
      _key: 'faq4',
      question: 'Gout aur normal gathiya mein kya fark hai?',
      answer: 'Normal gathiya (osteoarthritis) aging se joints ka ghisna hai — dard dheere dheere badhta hai, subah stiffness hoti hai. Gout mein dard ACHANAK aata hai — raat ko sote hue, bina warning ke; joint laal, garam aur touch se bhi behad dard kare. Blood test mein uric acid high milta hai. Rheumatoid arthritis alag hai jisme immune system joints ko attack karta hai. Sirf blood test + physical examination se doctor distinguish kar sakta hai.',
    },
    {
      _key: 'faq5',
      question: 'Uric acid control kaise karein — ghar par kya karein?',
      answer: 'Ghar par uric acid control ke liye ye 5 steps most effective hain: (1) Roz 3-4 liter paani piyein — sab se important step. (2) Beer aur alcohol band karein. (3) Red meat, organ meat avoid karein. (4) Roz cherries ya cherry juice lein (proven clinically). (5) Wajan control mein rakhein. In sab ke saath doctor ki treatment combine karo — sirf ghar ke nuskhon par depend mat raho agar uric acid bahut high ho.',
    },
    {
      _key: 'faq6',
      question: 'Kya homeopathy gout mein kaam karta hai?',
      answer: 'Haan — homeopathy gout mein ek effective complementary approach hai, especially jo log baar baar attacks jhelte hain unke liye. CCRH-affiliated studies mein homeopathy treatment group mein serum uric acid levels aur acute attack frequency dono mein meaningful reduction dekhi gayi — placebo group ke comparison mein. Homeopathy ka fayda ye hai ki ye sirf pain nahi, uric acid metabolism aur body ki overall uric acid sensitivity address karta hai. Ek qualified homoeopath se milen jo aapki complete history dekhke individualized treatment de sake.',
    },
    {
      _key: 'faq7',
      question: 'Gout mein kya khana chahiye aur kya nahi?',
      answer: 'Khaayein: Paani zyada (3-4 liter), cherries, nimbu paani, kakdi, lauki, low-fat dahi/doodh, eggs, banana, apple. Na Khaayein: Red meat (mutton, beef), organ meats (kaleji, gurda), seafood (jheenga, sardines), beer/alcohol, cold drinks, packaged juice. Sabse important rule: paani zyada piyein aur alcohol band karein — ye do changes akele bhi uric acid level meaningfully gira sakte hain.',
    },
    {
      _key: 'faq8',
      question: 'Gout permanently theek ho sakta hai kya?',
      answer: 'Complete permanent cure ek complex question hai — lekin ye clearly kaha ja sakta hai ki gout ke attacks permanently rokna bilkul possible hai. Jo log uric acid level consistent 6 mg/dL se neeche maintain karte hain (treatment + diet se), unhe saalon tak koi attack nahi aata — practically normal life milti hai. Genetic component hone ki wajah se lifelong awareness zaroori hai, lekin ye matlab nahi ki hamesha takleef rehegi. Sahi management se quality of life completely normal ho sakti hai.',
    },
    {
      _key: 'faq9',
      question: 'Gout ka attack raat ko kyun aata hai?',
      answer: 'Raat ko: body temperature thodi gir jaati hai — uric acid crystals thande mein jaldi deposit hote hain joints mein. Raat ko hum paani nahi peete — body thodi dehydrated hoti hai — uric acid concentrate hoti hai. Cortisol (inflammation rokne wala hormone) raat ko low hota hai — inflammation check nahi hoti. Paon neeche rahte hain din bhar — gravity se uric acid collect hota hai wahan. Isliye raat ko sudden attack typical gout ka signature hai.',
    },
    {
      _key: 'faq10',
      question: 'Gout mein kaun sa dard relief le sakte hain — kya aspirin theek hai?',
      answer: 'Gout mein aspirin bilkul nahi leni chahiye — ye ek common galti hai. Aspirin kidney ka uric acid excretion rokti hai, matlab uric acid aur badhta hai aur attack worse ho jaata hai. Doctor se proper anti-inflammatory medicine prescription ke liye milein. Homeopathy mein acute attack ke liye specific medicines hain jo inflammation safely address karti hain. Self-medication gout mein bahut nuksan kar sakti hai.',
    },
    {
      _key: 'faq11',
      question: 'Kya gout sirf purushon ko hoti hai?',
      answer: 'Mostly mard — gout 80-90% cases mein purushon mein hoti hai, especially 40 saal ke baad. Mahilaon mein estrogen hormone uric acid level low rakhta hai. Lekin menopause ke baad mahilaon ka risk badhta hai aur unhe bhi gout ho sakta hai. India mein non-vegetarian diet + alcohol consumption ki wajah se young men (30-45 age) mein bhi gout ke cases badh rahe hain.',
    },
    {
      _key: 'faq12',
      question: 'Bacchon mein gout ho sakti hai kya?',
      answer: 'Bacchon mein gout bahut rare hai — ek primary form hoti hai jo genetic metabolic disorder ki wajah se hoti hai (jaise Lesch-Nyhan syndrome). Agar kisi bache ke joints mein baar baar dard ho aur uric acid high mile to pediatric specialist se milna zaroori hai. Normal gout typically 40+ age mein hoti hai.',
    },
    {
      _key: 'faq13',
      question: 'Pregnancy mein uric acid badh jaaye to kya karein?',
      answer: 'Pregnancy mein kuch natural uric acid variation hota hai. Lekin agar level significantly high ho to doctor ko turant bataayein — kyunki preeclampsia (high BP in pregnancy) mein bhi uric acid badha hota hai. Pregnancy mein koi bhi medicine, including homeopathy, bina doctor ki salaah ke mat lein. Diet mein paani zyada, fruits aur vegetables — ye safe hain.',
    },
    {
      _key: 'faq14',
      question: 'Gout aur kidney stones mein kya connection hai?',
      answer: 'Direct connection hai — high uric acid kidney mein bhi crystals bana sakta hai jo uric acid kidney stones ban jaate hain. Jo log baar baar kidney stones se pareshaan hain unka uric acid test zaroor hona chahiye. Gout ka treatment actually kidney stone risk bhi reduce karta hai — dono ek hi problem ke do manifestations hain.',
    },
    {
      _key: 'faq15',
      question: 'Kya vegetarian log ko bhi gout hoti hai?',
      answer: 'Haan, vegetarians ko bhi gout ho sakti hai — though risk thoda kam hota hai. Kuch vegetarian foods mein bhi moderate purine hoti hai (rajma, chana, spinach). Sugar, cold drinks, aur white bread bhi uric acid badhate hain — ye vegetarians bhi khaate hain. Family history + obesity vegetarian mein bhi gout ka risk badhata hai. Blood test se pata chalega.',
    },
    {
      _key: 'faq16',
      question: 'Gout ke liye konsa blood test hai — kya kya check karana chahiye?',
      answer: 'Gout ke liye ye tests helpful hain: (1) Serum Uric Acid — basic aur most important. (2) Complete Blood Count (CBC) — infection rule out karne ke liye. (3) Kidney Function Test (KFT/RFT) — kidney pe impact check karne ke liye. (4) ESR / CRP — inflammation markers. (5) Joint fluid analysis — agar diagnosis clear nahi hai to doctor joint se fluid nikaal ke microscope mein crystals confirm karta hai (gold standard test). Sirf uric acid number se gout diagnose nahi hota — clinical examination + history bhi zaroori hai.',
    },
    {
      _key: 'faq17',
      question: 'Gout mein exercise karein ya nahi?',
      answer: 'Attack ke waqt affected joint ko rest do — bilkul. Lekin jab attack nahi hai tab regular exercise ZAROOR karein. Walking, swimming, cycling — low-impact exercises uric acid level naturally ghataati hain, weight control mein help karti hain, aur joint flexibility maintain karti hain. Intense high-impact exercise suddenly zyada karne se uric acid spike ho sakta hai — dheere dheere shuru karein.',
    },
    {
      _key: 'faq18',
      question: 'Kya chai (tea) aur coffee gout mein pi sakte hain?',
      answer: 'Haan — aur ye actually achhi khabar hai! Studies mein coffee (especially black coffee) ko uric acid level se inversely correlated paya gaya hai — yaani jo log coffee peete hain unka uric acid relatively kam hota hai. Green tea bhi antioxidants ki wajah se beneficial hai. Masala chai (doodh ke saath) moderate ok hai. Avoid karein sirf: sweet packaged drinks, alcohol, beer — ye main villains hain.',
    },
    {
      _key: 'faq19',
      question: 'Gout mein tophi (skin ke neeche hard lumps) kya hote hain — theek hote hain kya?',
      answer: 'Tophi uric acid crystals ke deposit hain jo skin ke neeche hard lumps ki tarah ban jaate hain — kuhni, kaan, haath-pair ki joints ke aas paas. Ye tab bante hain jab saalon tak gout treat na ki jaaye ya uric acid consistently high rahe. Good khabar ye hai ki proper treatment se (uric acid level consistently low rakhne se) tophi dheere dheere chote hote hain aur dissolve ho sakte hain — lekin time lagta hai, mahine se saal. Bahut bade tophi mein surgical help bhi kabhi kabhi zaroori hoti hai.',
    },
    {
      _key: 'faq20',
      question: 'Gout mein kya gharelu nuskha kaam karta hai?',
      answer: 'Kuch gharelu measures genuinely helpful hain: Cherries: roz 10-20 cherries ya cherry juice — clinically proven uric acid aur inflammation reduce karta hai. Nimbu paani: alkalizes urine, uric acid flush karta hai. Paani zyada peena: sabse proven, free aur side-effect free. Note: Gharelu nuskhe supplement hai treatment ko, replace nahi karte. Uric acid agar 9+ hai ya attacks frequent hain to doctor se milna zaroori hai.',
    },
    {
      _key: 'faq21',
      question: 'Kya dal, rajma, palak gout mein band kar deni chahiye?',
      answer: 'Completely band karna zaroori nahi — ye "moderate purine" foods hain, "high purine" nahi. Research kehta hai ki plant-based purine sources gout attacks zyada trigger nahi karte compared to animal-based sources. Attack ke waqt thoda reduce karein — daily diet mein moderate amount ok hai. Jo cheezein strictly avoid karni hain: red meat, organ meat, seafood, beer — ye high-priority triggers hain. Dal-sabzi par focus kam karein, alcohol aur red meat par zyada.',
    },
    {
      _key: 'faq22',
      question: 'Kab doctor ke paas turant jaana chahiye — emergency signs kya hain?',
      answer: 'Ye signs ho to bina der kiye doctor ke paas jaayein: tez bukhaar (101°F+) ke saath joint mein dard — infection rule out karna zaroori. Ek saath kaafi saari joints mein dard — ye septic arthritis ya other serious condition ho sakti hai. Kidney area mein severe dard — kidney stone emergency ho sakta hai. Joint mein skin phoot gayi ya pus aa raha ho. Pahle kabhi gout nahi tha aur pehli baar ye symptoms — diagnosis confirm karwana zaroori hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH — Clinical Studies on Metabolic Disorders including Gout', url: 'ccrhindia.nic.in', year: '2021' },
    { _key: 's2', name: 'American College of Rheumatology — Gout Management Guidelines', url: 'rheumatology.org', year: '2020' },
    { _key: 's3', name: 'British Homeopathic Association — Gout and Homeopathy Evidence', url: 'britishhomeopathic.org', year: '2019' },
  ],

  doctorNote: 'Mere clinic mein gout ke jo patients aate hain unmein se kaafi mard 35-50 saal ke non-veg + alcohol users hain — jo sochte hain "sirf uric acid hai, koi baat nahi". Lekin jo log consistently Colchicum ya Benzoic Acid pe remain karte hain aur diet seriously lete hain, unke 3-4 mahine mein attacks practically zero ho jaate hain. Sabse badi galti jo main dekhta hoon: attack ke waqt aspirin khana — ye uric acid aur badha deta hai.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    await client.createOrReplace(gout)
    console.log('✅ Gout disease document created/updated: disease-gout')
    console.log('🌐 Live at: https://homeopedia.in/diseases/gout')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
