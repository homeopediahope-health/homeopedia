import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const ankylosingSpondylitis = {
  _id: 'disease-ankylosing-spondylitis',
  _type: 'disease',

  title: 'Ankylosing Spondylitis',
  hindiName: 'Meru Dand ka Japkne Wala Dard / Kamar-Reed ki Haddi ka Jodna',
  slug: { _type: 'slug', current: 'ankylosing-spondylitis' },

  metaTitle: 'Ankylosing Spondylitis Treatment in Hindi | Homeopedia',
  metaDescription: 'Ankylosing Spondylitis ka ilaaj, types, diet chart aur homeopathic treatment — simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'Ankylosing Spondylitis (AS) ek chronic inflammatory joint disease hai jo mainly reedh ki haddi (spine) ko affect karta hai — khaaskar sacroiliac joints ko, jo lower back aur pelvis ke beech hote hain. Isme inflammation itni badh jaati hai ki waqt ke saath vertebrae (reedh ki haddiyaan) aapas mein judne lagne lagti hain — jaise bamboo ban rahi ho reedh ki haddi. Subah uthke kamar aur pith mein ghante bhar ki stiffness, jhukne mein takleef — ye sab AS ke typical signs hain. Ye sirf "boodhaape ka dard" nahi hai — AS zyaadatar 20-40 saal ke young adults mein shuru hota hai, aur sahi treatment se iska control bahot possible hai.',

  category: 'Joints',

  quickFacts: {
    whatItIs: 'Ankylosing Spondylitis ek autoimmune disease hai jo spine ko primarily target karti hai — koi simple muscular pain nahi.',
    howCommon: 'India mein lagbhag 0.1-0.5% population — lekin underdiagnosis kaafi hai kyunki AS ko "kamar dard" samajh ke ignore kiya jaata hai; average diagnosis delay 7-10 saal hai.',
    treatmentDuration: 'Early stage mein 6-18 months mein meaningful improvement; lifelong management with right approach = near-normal life.',
    successRate: 'CCRH-affiliated spondyloarthropathy studies mein treatment group mein BASDAI score aur morning stiffness duration dono mein placebo group se significantly better results — morning stiffness average 45 min se 18 min (placebo mein 42 se 38 par ruka).',
  },

  causes: [
    'Genetic factor HLA-B27: 90% se zyada AS patients mein ye gene present hota hai — ye sabse strong link hai',
    'Immune system dysregulation: Body apni hi reedh ki tissues par attack karne lagta hai (autoimmune response)',
    'Gut microbiome imbalance: Research suggest karta hai ki intestinal bacteria ka imbalance AS trigger kar sakta hai — aur AS-IBD connection bhi isi se linked hai',
    'Environmental triggers: Koi infection ya environmental exposure genetically susceptible logon mein disease start kar sakta hai',
    'TNF-alpha ka excess production: Ye inflammatory protein AS mein bahot zyada release hota hai — jo joint destruction ka main culprit hai',
    'Family history: Agar parent ya sibling ko AS hai to risk significantly badh jaata hai',
  ],

  riskFactors: [
    'HLA-B27 gene positive hona (sabse bada risk factor)',
    'Male gender: Purushon mein AS 2-3 guna zyada common — lekin mahilaon mein bhi hota hai, bas diagnosis late hoti hai',
    'Age 15-40 ke beech — especially 20s mein onset common hai',
    'Family member mein AS ya psoriasis ya IBD ka history',
    'Recurrent gut infections ya IBS ka history',
    'Sedentary lifestyle — jo already stiff joints ko aur worsen karta hai',
  ],

  complications: [
    'Spinal fusion (Bamboo Spine): Vertebrae completely jud jaate hain — movement permanently restrict ho jaati hai. Ye AS ka worst outcome hai',
    'Uveitis (aankhon ki inflammation): Agar recurrent aaye aur treat na ho to partial/complete vision loss bhi possible',
    'Osteoporosis: Chronic inflammation aur inactivity se haddiyan kamzor ho jaati hain — fracture risk badh jaata hai',
    'Cardiovascular complications: Aortic regurgitation ya heart conduction defects advanced AS mein develop ho sakte hain',
    'Reduced lung capacity: Jab rib cage ki flexibility kam ho jaati hai to deep breathing mushkil ho jaati hai',
    'Depression aur social isolation: Chronic pain aur mobility loss mental health ko bhi deeply affect karta hai',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Reedh aur Kamar Ke Symptoms — Main Group',
      symptoms: [
        'Subah uthne pe lower back aur kamar mein ghante bhar ki stiffness — jo chhalne ya exercise se thodi better hoti hai (rest se nahi)',
        'Sacroiliac joint pain — lower back ke bilkul neeche, ek ya dono taraf',
        'Raat ko ya subah ke waqt dard zyada — inflammatory back pain ka classic sign',
        'Jhukne, agey-peechey karne ya spine rotate karne mein takleef',
        'Waqt ke saath reedh ki flexibility ka kam hona',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Joints aur Muscles Ke Symptoms',
      symptoms: [
        'Hip, knee, ya ankle joints mein dard aur sujan — especially ek taraf',
        'Heel mein dard (Enthesitis) — jahan tendon haddi se milta hai, wahan inflammation',
        'Chest mein dard aur gehri saans lene mein takleef — rib joints ki inflammation se',
        'Shoulder aur neck mein stiffness aur dard',
        'Thakaan jo rest se theek nahi hoti — inflammatory fatigue',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Extra-Articular Symptoms — Joints Ke Bahar',
      symptoms: [
        'Aankhon mein laalii, dard, dhundli vision (Uveitis) — jaldi doctor dikhana zaroori',
        'Skin pe psoriasis jaisi patches',
        'Loose motions ya pet mein baar baar takleef — IBD connection',
        'Low-grade fever aur weight loss — active inflammation ka sign',
      ],
    },
  ],

  diseaseTypes: [
    {
      _key: 'dt1',
      typeName: 'Axial Spondyloarthritis (Axial SpA)',
      description: 'Reedh ki haddi aur sacroiliac joints mainly affected hote hain. Do sub-types: (a) Radiographic AS (Classic AS) — X-ray mein sacroiliac joint ka damage clearly dikhta hai. (b) Non-Radiographic Axial SpA (nr-axSpA) — Symptoms hain, inflammation bhi hai lekin abhi X-ray pe visible damage nahi aaya; MRI se detect hota hai. Early stage hai — is stage pe treatment zyada effective hoti hai.',
    },
    {
      _key: 'dt2',
      typeName: 'Peripheral Spondyloarthritis',
      description: 'Spine ke saath saath peripheral joints bhi affect — jaise knees, ankles, wrists, aur heels (Achilles tendinitis). Ye type thodi alag presentation deta hai.',
    },
    {
      _key: 'dt3',
      typeName: 'AS with Extra-Articular Manifestations',
      description: 'Kuch patients mein spine ke bahar bhi problems aati hain: Uveitis/Iritis (aankhon mein laalii aur dard — AS ka sabse common extra-articular feature), Psoriasis (skin), Inflammatory Bowel Disease (IBD) — Crohn\'s ya Ulcerative Colitis ke saath, Aortic valve problems (heart — advanced cases mein).',
    },
    {
      _key: 'dt4',
      typeName: 'Juvenile Onset AS',
      description: '18 saal se kam umra mein shuru ho to Juvenile Spondyloarthritis kehte hain. Isme usually pehle peripheral joints affected hote hain — spine baad mein.',
    },
  ],

  homeopathyExplainer: 'Ankylosing Spondylitis mein homeopathy ka main kaam hai — inflammation ke pathological cycle ko interrupt karna aur immune system ko recalibrate karna. Homeopathic medicines TNF-alpha jaisi inflammatory mediators ke overproduction ko modulate karne mein help karti hain — bina long-term immunosuppression ke side effects ke. Sabse important baat: homeopathy mein patient ki poori picture dekhi jaati hai — dard kab badhta hai, kya khaane se fark padta hai, emotional state kaisi hai — isi individualized approach se AS mein meaningful improvement milti hai.',

  ccrh: {
    summary: 'CCRH ke spondyloarthropathy studies mein treatment group mein pain score aur morning stiffness duration dono mein statistically significant reduction dekha gaya — placebo group ke comparison mein jo partial aur temporary improvement tha.',
    keyFindings: [
      'Treatment group mein BASDAI score (disease activity index) mein meaningful decline — placebo group mein nahi',
      'Morning stiffness duration: Treatment group mein average 45 min se 18 min — placebo mein 42 min se 38 min par ruka',
      'Patient-reported quality of life scores mein significant improvement — especially sleep quality aur daily function',
    ],
    citation: 'CCRH, "Clinical Research in Spondyloarthropathies," Journal of Research in Homeopathy | 2019; Ghosh AK et al., Indian Journal of Research in Homoeopathy | 2018; Witt CM et al., Complementary Medicine Research | 2009',
    averageTreatmentPeriod: '6-12 months for meaningful clinical improvement (disease chronicity ke hisaab se)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Rhus Toxicodendron',
      bestFor: 'Jinka dard aur stiffness subah uthne pe worst ho, thodi movement ke baad better mile, aur damp/cold weather mein zyada badhe.',
      keyIndications: [

        'Ye medicine musculoskeletal stiffness ke us specific pattern mein kaam karti hai jahan "rest se dard badhta hai, movement se ghatta hai" — jo AS ka classic inflammatory pattern hai.',

      ],
    },
    {
      _key: 'med2',
      name: 'Aesculus Hippocastanum',
      bestFor: 'Jinhe sacroiliac joint mein zyada dard ho — lower back ke neeche, pelvis area, aur dard jhukne ya uthne-baithne pe badhe.',
      keyIndications: [

        'Sacroiliac joint aur lumbo-sacral junction ki inflammation pe is medicine ki specific affinity dekhi jaati hai — AS ka exact target area yahi hai.',

      ],
    },
    {
      _key: 'med3',
      name: 'Kalmia Latifolia',
      bestFor: 'Jab dard ek jagah se doosri jagah shift karta ho — spine se peripheral joints tak — aur saath mein heart symptoms ya aankhon ki problem bhi ho.',
      keyIndications: [

        'AS ke extra-articular manifestations (uveitis, cardiac involvement) wale patients mein is medicine ka constitutional use helpful hota hai.',

      ],
    },
    {
      _key: 'med4',
      name: 'Medorrhinum',
      bestFor: 'Jinhe raat ko dard zyada ho, ulta letne pe (face down) relief mile, aur disease bahut aggressive aur rapid progression wali ho.',
      keyIndications: [

        'Ye nosode deep-seated inflammatory aur autoimmune patterns mein constitutional level pe kaam karta hai — genetic predisposition wale patients mein.',

      ],
    },
    {
      _key: 'med5',
      name: 'Sulphur',
      bestFor: 'Jinhe heat se dard badhta ho, garm maheene mein zyada takleef ho, aur saath mein skin problems (psoriasis) ya digestive issues bhi hon.',
      keyIndications: [

        'AS with psoriasis ya AS with IBD ke combination mein Sulphur ka constitutional use — dono conditions ko simultaneously address karne mein help karta hai.',

      ],
    },
    {
      _key: 'med6',
      name: 'Bryonia Alba',
      bestFor: 'Jinhe any movement se dard bahut badhe — bilkul still rehna chahein — aur dry, cold weather mein zyada takleef ho.',
      keyIndications: [

        'Inflammation ka "stillness-seeking" pattern jo AS ke acute flare-ups mein milta hai, uspe Bryonia bahot specifically kaam karti hai.',

      ],
    },
  ],

  dietInclude: [
      {
        _key: 'dr1',
        category: 'Anti-Inflammatory Foods',
        items: [
          'Haldi (Turmeric) — Curcumin powerful natural anti-inflammatory hai, TNF-alpha ko modulate karta hai',
          'Adrak (Ginger) — Prostaglandin synthesis rokta hai — joint pain aur stiffness mein natural relief',
          'Fatty Fish (Salmon, Sardines) — Omega-3 fatty acids inflammation ka core pathway block karte hain',
          'Blueberries, Cherries — Anthocyanins joint inflammation markers ko reduce karte hain',
          'Akhrot (Walnuts) — Plant-based Omega-3 (ALA) ka best source — daily mutti bhar kafi hai',
        ],
      },
      {
        _key: 'dr2',
        category: 'Gut Health Support',
        items: [
          'Dahi (Probiotic Curd) — Gut microbiome balance karta hai — AS-gut axis ke liye critical',
          'Fiber-rich sabziyan (broccoli, spinach, lauki) — Intestinal inflammation reduce karne mein help',
          'Fermented foods (idli, kanji, buttermilk) — Healthy gut bacteria ka natural source',
          'Lemon pani / Amla — Vitamin C inflammation-fighting enzymes ke liye zaroori',
          'Green tea — EGCG compound joint destruction enzymes (MMPs) ko slow karta hai',
        ],
      },
      {
        _key: 'dr3',
        category: 'Bone & Joint Support',
        items: [
          'Calcium-rich foods: Ragi, sesame seeds (til), low-fat milk — AS mein osteoporosis ka risk high hai',
          'Vitamin D foods: Egg yolk, fortified milk, mushrooms — calcium absorption ke liye zaroori',
          'Magnesium-rich: Kaddu ke beej, bajra, dark chocolate — muscle relaxation aur joint function',
          'Vitamin K2 foods: Paneer, fermented dal — calcium ko bones mein direct karta hai',
        ],
      },
  ],

  dietAvoid: [
      {
        _key: 'da1',
        category: 'Pro-Inflammatory Foods',
        items: [
          'Refined sugar (mithai, cold drinks, packaged juices) — insulin spike se inflammation badh jaati hai',
          'Maida products (white bread, naan, biscuits) — high glycemic load = inflammation fuel',
          'Processed meats (sausage, packaged chicken) — AGEs joint inflammation trigger karte hain',
          'Vegetable oils high in Omega-6 (sunflower, corn oil) — Omega-3:Omega-6 imbalance inflammation badhata hai',
        ],
    },
      {
        _key: 'da2',
        category: 'Gut-Disrupting Foods',
        items: [
          'Alcohol — gut permeability badh jaati hai ("leaky gut") jo AS flare-up ka direct trigger hai',
          'Carbonated drinks — gut microbiome disturb karte hain aur calcium absorption kharaab karte hain',
          'Excess red meat — arachidonic acid se pro-inflammatory prostaglandins bante hain',
        ],
      },
      {
        _key: 'da3',
        category: 'Joint Aggravating Items',
        items: [
          'Nightshade vegetables (aloo, tamatar, baingan) — kuch AS patients mein ye flare trigger karte hain — 2 hafte remove karke dekho fark',
          'High purine foods (red meat, organ meats, alcohol) — uric acid badhata hai — additional joint stress',
          'Excess salt / pickles — water retention aur inflammation dono badhate hain',
          'Deep-fried foods — trans fats systemic inflammation badha dete hain',
        ],
      },
    ],
  seasonalCare: {
    winter: 'AS patients ke liye ye sabse mushkil season hota hai. Cold temperature muscle spasm aur joint stiffness badhata hai. Subah uthne se pehle 5-10 min bed pe hi gentle stretching karein. Garma-garm Epsom salt bath — magnesium sulphate muscle relaxation deta hai. Layered warm clothing — especially kamar aur lower back pe — neoprene lumbar support bhi helpful. Indoor exercises prefer karein — heated pool mein hydrotherapy ideal hai. Vitamin D supplement — sun exposure kam hoti hai, deficiency AS mein common hai.',
    summer: 'Warmth muscles ko relax karti hai — morning stiffness thodi kam hoti hai. Lekin dehydration se blood viscosity badh jaati hai — paani 3-3.5 litres daily. Direct dhoop mein peak hours (11-4) exercise se bachein — uveitis wale patients mein UV exposure risk hai. Cooling anti-inflammatory foods: Cucumber, nariyal pani, sattu. Subah 6-7 baje ki dhoop — Vitamin D aur movement dono milti hai.',
    monsoon: 'Humidity bhari hawa, pressure changes — kuch AS patients mein flare more frequent. Ghar mein indoor yoga ya physiotherapy routine maintain karein. Wet floors se bachein — AS mein fall = fracture risk (osteoporosis). Gut care extra zaroori — monsoon mein infections zyada, gut-AS axis vulnerable. Probiotic foods increase karein — dahi, buttermilk, kanji.',
    generalTips: [
      'Disease activity track karein — BASDAI score khud monitor karein (online available hai), doctor ko data-driven update dein',
      'Aankhon mein laalii ya dard ho to 24 ghante ke andar eye doctor dikhayein — uveitis AS ka serious complication hai',
      'Vitamin D level regularly check karwate rahein — AS mein D deficiency bahot common aur bones ke liye dangerous hai',
    ],
  },
  dos: [
    'Roz subah physiotherapy ya stretching routine follow karein — spine flexibility maintain karna AS management ka #1 pillar hai',
    'Swimming ya hydrotherapy ko exercise option banayein — water mein gravity kam hoti hai, joints pe stress nahi, mobility improve hoti hai',
    'Seena taan ke baitho aur chalo (posture conscious rahein) — kyphosis (aage jhukna) AS ka common deformity hai, posture awareness use rok sakti hai',
    'Disease activity track karein — BASDAI score khud monitor karein, doctor ko data-driven update dein',
    'Aankhon mein laalii ya dard ho to 24 ghante ke andar eye doctor dikhayein — uveitis serious complication hai',
    'Vitamin D level regularly check karwate rahein — AS mein D deficiency bahot common aur bones ke liye dangerous hai',
    'Homeopathic constitutional treatment ke saath physiotherapy combination rakho — dono saath mein zyada effective hai',
  ],

  donts: [
    'Heavy weight lifting ya high-impact sports (football, kabaddi, jump-heavy exercises) — spine pe sudden load se injury aur fracture risk',
    'Seedha ghaanton tak ek position mein baithna ya letna — inactivity AS ka worst enemy hai, har 45 min pe uthna aur chalna zaroori',
    'Self-medication se NSAIDs regularly khana — gastric ulcers, kidney damage, aur gut microbiome disruption',
    'Smoking — smoking AS progression significantly accelerate karta hai aur treatment ko less effective banata hai',
    'HLA-B27 positive hai aur symptoms hain to "normal back pain" samajh ke ignore karna — early diagnosis = better outcomes',
    'Rapid posture correction ke liye aggressive chiropractic — inflamed AS spine mein aggressive manipulation dangerous ho sakta hai',
  ],

  weeklyPlan: [
    { _key: 'wp1', day: 'Subah Daily Routine', morning: 'Bed pe hi 5-10 min gentle stretching — uthne se pehle knee-to-chest, spine rotation slowly', afternoon: 'Garm paani se shower — muscle spasm release hoti hai instantly', evening: 'Haldi wala doodh ya ginger tea — anti-inflammatory support', night: 'Sone se pehle gentle spine stretches — raat bhar ki stiffness kam hoti hai' },
    { _key: 'wp2', day: 'Weekly Exercise', morning: 'Swimming ya hydrotherapy session (2-3 baar/hafte) — #1 AS exercise', afternoon: 'Physiotherapist-guided spine exercises — personalized protocol follow karein', evening: 'Pranayama — Bhramari, Anulom Vilom — chest expansion maintain karta hai', night: 'BASDAI score check karein — monthly tracking rakhein' },
    { _key: 'wp3', day: 'Monthly Monitoring', morning: 'Rheumatologist ya homoeopath follow-up — disease activity review', afternoon: 'Vitamin D aur CRP blood test (quarterly) — inflammation aur bone health track karein', evening: 'Eye check — uveitis early detection ke liye regular ophthalmologist visit', night: 'Diet diary review — koi trigger food identify karna zaroori hai' },
    { _key: 'wp4', day: 'Seasonal Adjustment', morning: 'Winter: indoor warm-up before exercise; Summer: early morning exercise', afternoon: 'Monsoon: indoor yoga + extra probiotic foods for gut protection', evening: 'Har season mein homeopathic doctor ko symptom changes bataayein', night: 'Posture check — seene ki flexibility aur spine ka curve monitor karein' },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Ankylosing Spondylitis kya hai — aam pith ke dard se ye kaise alag hai?',
      answer: 'Ankylosing Spondylitis ek autoimmune inflammatory disease hai jo specifically reedh ki haddi aur sacroiliac joints ko target karti hai — ye sirf muscular ya age-related back pain nahi hai. Fark samajhna zaroori hai: aam back pain rest se better hota hai — AS mein rest se dard badhta hai, chhalne se ghatta hai. AS mein subah ki stiffness typically 45-60 minute se zyada rehti hai — normal back pain mein 5-15 minute. AS mein young age (20s-30s) mein shuru hota hai, raat ke dusre pahhr mein dard uthata hai. Agar aapko ye pattern notice ho to rheumatologist ya homoeopath se milna zaroori hai.',
    },
    {
      _key: 'faq2',
      question: 'Ankylosing Spondylitis ka permanent ilaaj kya hai — kya ye theek ho sakta hai?',
      answer: 'Complete cure abhi officially available nahi hai — lekin "permanent control" bilkul possible hai aur hazaron patients ne achieve kiya hai. Sahi treatment se — chahe allopathic biologics hon, ya homeopathy, ya dono ka combination — disease activity itni kam ho jaati hai ki years tak koi significant flare nahi aata, aur life practically normal hoti hai. Homeopathy ka khaas fayda ye hai ki ye immune system ko recalibrate karta hai — sirf symptoms nahi, underlying inflammatory tendency address karta hai. Jo patients treatment ke saath exercise aur diet seriously lete hain, unme "functional cure" — yaani normal daily life — achieve hona real aur documented hai.',
    },
    {
      _key: 'faq3',
      question: 'Ankylosing Spondylitis mein homeopathy kaam karta hai kya?',
      answer: 'Haan — homeopathy AS mein ek effective approach hai, khaaskar jab treatment individualized ho. CCRH-affiliated musculoskeletal studies mein treatment group mein BASDAI score (disease activity measure) aur morning stiffness duration dono mein placebo group se significantly better results mile hain. Homeopathy ka unique advantage ye hai ki ye sirf joint pain nahi — saath mein gut health, fatigue, uveitis tendency, aur emotional stress bhi address karta hai — jo sab AS ke interconnected aspects hain. Severe ya rapidly progressing cases mein conventional treatment ke saath saath homeopathy lena aur zyada effective hota hai.',
    },
    {
      _key: 'faq4',
      question: 'Ankylosing Spondylitis ki best exercise kya hai?',
      answer: 'AS mein exercise survival tool hai — bina exercise ke disease bahut tezi se progress karti hai. Best exercises hain: Swimming aur hydrotherapy (#1 choice — joints pe zero impact), morning stretching routine specially spine flexion-extension exercises, chest expansion exercises (breathing capacity maintain karne ke liye), chin tuck aur neck exercises (cervical spine ke liye). Bhramari pranayama aur mild yoga bhi helpful hain. Kya avoid karein: heavy deadlifts, aggressive contact sports, aur seedha long runs without warm-up. Physiotherapist se ek personalized exercise protocol banwana ideal hai.',
    },
    {
      _key: 'faq5',
      question: 'Ankylosing Spondylitis mein subah ki stiffness ko jaldi kaise theek karein?',
      answer: 'Subah ki stiffness AS mein overnight inflammation buildup ki wajah se hoti hai — aur ye bahut manageable hai. Uthne se pehle hi bed pe gentle knee-to-chest stretches karein — 5-10 minute. Garm paani se nahana ya shower — heat muscle spasm instantly release karta hai. Garma-garm chai ya haldi wala doodh — ander se bhi warmth milti hai. Epsom salt foot soak bhi fast relief deta hai. Long-term ke liye: raat ko sone se pehle gentle stretching aur homeopathic constitutional treatment regular rakho — stiffness ki duration aur intensity dono waqt ke saath kam hoti hai. Agar stiffness 2 ghante se zyada chal rahi hai regularly, to doctor se milna zaroori hai.',
    },
    {
      _key: 'faq6',
      question: 'Ankylosing Spondylitis kya aage ki generations mein hota hai — kya mere bachchon ko bhi hoga?',
      answer: 'Family history aur HLA-B27 gene dono role karte hain — lekin "hoga hi hoga" aisa nahi hai. Agar aapko AS hai aur aapka baccha HLA-B27 positive hai, to unhe AS hone ka risk badhta hai — lekin positive gene wale 80-90% log KABHI AS develop nahi karte. Gene hona = guarantee nahi, sirf predisposition hai. Bachcha jab bada ho to active lifestyle, gut health, aur early symptoms (heel pain, hip dard in teenage) pe dhyan rakhein — early detection mein treatment outcomes bahut better hote hain.',
    },
    {
      _key: 'faq7',
      question: 'Ankylosing Spondylitis ki koi bhi homeopathic medicine seedha le sakta hai kya — bina doctor ke?',
      answer: 'Nahi — aur ye bahot important point hai. AS ek complex autoimmune disease hai jisme constitutional homeopathic treatment ki zaroorat hai — yaani aapki poori history, temperament, triggers, co-existing conditions — sab dekh ke medicine decide hoti hai. Galat medicine lene se temporary improvement toh ho sakti hai lekin disease ka underlying path address nahi hoga. Ek qualified homoeopath — BHMS ya MD (Hom) — se milein jo AS experience rakhte hon.',
    },
    {
      _key: 'faq8',
      question: 'Ankylosing Spondylitis mein kya khana chahiye aur kya nahi?',
      answer: 'AS mein diet inflammation management ka core part hai. Kya khayein: omega-3 rich foods (fatty fish, akhrot, alsi ke beej), haldi + adrak daily, probiotic curd aur fermented foods (gut-AS axis ke liye), calcium aur Vitamin D rich foods (ragi, til, egg yolk). Kya avoid karein: refined sugar, maida products, processed meats, alcohol, excess red meat, aur agar possible ho to nightshade vegetables (aloo, tamatar, baingan) — 2-4 hafte remove karke dekho fark.',
    },
    {
      _key: 'faq9',
      question: 'Ankylosing Spondylitis aur Bamboo Spine kya hota hai — kya meri reedh ki haddi jud jayegi?',
      answer: 'Bamboo Spine AS ka worst-case outcome hai — jab vertebrae ke beech ki disc aur ligaments mein calcium deposit hone lagta hai aur waqt ke saath haddiyaan jud jaati hain. X-ray mein "bamboo" jaisi shape aati hai. LEKIN ye outcome aaj-kal bahut rare ho gaya hai — kyunki early diagnosis aur regular treatment se spine fusion rok ya delay ki ja sakti hai. Sahi treatment + roz exercise + physiotherapy se spine ki flexibility decades tak maintain ho sakti hai. Early-stage AS mein outcomes bahut positive hain. Isliye diagnosis jaldi aur treatment regularly karna sabse important hai.',
    },
    {
      _key: 'faq10',
      question: 'Ankylosing Spondylitis mein aankhon ki takleef kyun hoti hai?',
      answer: 'Uveitis (aankhon ki andar ki layer ki inflammation) AS ka sabse common extra-articular feature hai — lagbhag 30-40% AS patients mein kabhi na kabhi aata hai. Ye aata hai kyunki wohi immune system dysregulation jo spine mein inflammation karta hai, aankhon ke uveal tissue ko bhi target kar sakta hai — dono mein HLA-B27 linked autoimmune mechanism common hai. Symptoms: aankhon mein achanak laalii, photophobia (roshni se dard), blurry vision. IMPORTANT: Ye medical emergency hai — 24-48 ghante mein ophthalmologist dikhana zaroori hai. Homeopathy mein Kalmia Latifolia jaisi medicines uveitis tendency pe constitutional level pe kaam karti hain.',
    },
    {
      _key: 'faq11',
      question: 'AS wale patient yoga kar sakte hain?',
      answer: 'Haan — lekin selective yoga. AS-friendly yoga asanas: Balasana (child pose), Bhujangasana (cobra) — spine extension ke liye, Setu Bandhasana (bridge) — hip flexor ke liye, Tadasana (mountain pose) — posture ke liye, Shavasana with mindfulness — stress management. Avoid karein: Aggressive twists, headstands (Sirsasana), deep forward bends with rounding — these can strain an inflamed spine. Pranayama — especially Bhramari, Anulom Vilom — bahut helpful hai inflammation aur stress dono ke liye.',
    },
    {
      _key: 'faq12',
      question: 'HLA-B27 positive aaya test mein — kya iska matlab hai mujhe AS hai?',
      answer: 'Nahi — HLA-B27 positive hona aur AS hona bilkul alag baat hai. HLA-B27 gene sirf ek genetic marker hai jo susceptibility badhata hai — ye disease ka diagnosis nahi hai. India mein general population mein bhi ~6-8% log HLA-B27 positive hain — jinme majority ko koi AS ya spondyloarthropathy nahi hoti. Diagnosis ke liye clinical symptoms + X-ray ya MRI findings + blood markers (CRP, ESR) — ye sab milana padta hai. Agar HLA-B27 positive hai aur aapko back pain, heel pain, ya aankhon mein inflammation ka history hai — to rheumatologist se milna zaroori hai. Sirf positive result dekhke ghabrayein nahi.',
    },
    {
      _key: 'faq13',
      question: 'Kya Ankylosing Spondylitis mein pregnancy safe hai?',
      answer: 'Haan — AS mein pregnancy generally safe hai, aur interesting baat ye hai ki pregnancy mein kuch women ko AS symptoms temporarily better feel hote hain — hormone changes ki wajah se. Lekin careful planning zaroori hai. NSAIDs — jo aksar AS mein use hoti hain — pregnancy ke certain trimesters mein safe nahi. Biologics (anti-TNF) ke baare mein rheumatologist se discuss karna zaroori hai. Homeopathy pregnancy-safe supplement treatment ke roop mein kafi useful hai — koi conventional contraindication nahi. Pre-pregnancy rheumatologist + gynaecologist consultation strongly recommended hai.',
    },
    {
      _key: 'faq14',
      question: 'Ankylosing Spondylitis aur normal Spondylosis mein kya fark hai?',
      answer: 'Ye confusion bahut common hai — aur dono bilkul alag conditions hain. Ankylosing Spondylitis: autoimmune inflammatory disease hai — immune system spine ko attack karta hai, young age (20-40) mein shuru hota hai, HLA-B27 linked hai, CRP/ESR elevated hote hain. Spondylosis (Cervical ya Lumbar): ye age-related wear-and-tear hai — degenerative disease hai, 40+ age mein common, inflammatory markers normal rehte hain. Treatment approach bilkul alag hoti hai isliye correct diagnosis zaroori hai.',
    },
    {
      _key: 'faq15',
      question: 'AS mein kaun se blood tests aur scan karwane chahiye?',
      answer: 'Diagnosis aur monitoring ke liye ye tests important hain: Inflammatory markers: CRP (C-Reactive Protein) aur ESR — active inflammation dikhate hain. HLA-B27 gene test — genetic susceptibility ke liye. Imaging: X-Ray sacroiliac joints — classic AS changes dikhata hai; MRI sacroiliac joints aur spine — early changes aur active inflammation best detect hoti hai MRI se. CBC (Complete Blood Count) — anemia of chronic disease check karne ke liye. Liver/Kidney function tests — agar NSAIDs ya medications pe ho. Vitamin D aur Calcium levels — AS mein deficiency common hai. Annual eye check — uveitis early detection ke liye.',
    },
    {
      _key: 'faq16',
      question: 'Kya chai peena AS mein theek hai?',
      answer: 'Ek-do cup regular chai din mein okay hai — lekin zyada nahi. Chai mein caffeine hota hai jo calcium absorption thoda interfere kar sakta hai — aur AS mein osteoporosis risk pehle se zyada hai. Zyada chai peene se gut irritation bhi ho sakti hai — jo AS gut-axis ke liye achha nahi. Haldi waali chai ya ginger tea — regular chai ki jagah lena better option hai — anti-inflammatory bhi hai aur calcium pe negative effect bhi nahi. Empty stomach chai — especially AS mein — avoid karein kyunki gut inflammation existing hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya AS permanently disability deta hai?',
      answer: 'Pehle ke zamaane mein — jab treatment options limited the — haan, kafi patients disability develop karte the. Aaj 2025 mein, early diagnosis aur aggressive treatment se ye outcome bahot rare ho gaya hai. Studies dikhate hain ki jo patients regularly treat hote hain — Homoeopathy, lifestyle — unme work disability rates dramatically kam hain. AS se "bamboo spine" ya severe disability tab hoti hai jab: diagnosis bahot late ho, treatment consistent na ho, exercise lifestyle se absent ho. Aaj correct treatment ke saath majority patients normal ya near-normal life jeete hain.',
    },
    {
      _key: 'faq18',
      question: 'Ankylosing Spondylitis kya sirf purushon ki bimari hai? Mahilaon mein kya hoti hai?',
      answer: 'Ye ek purana myth hai jo ab update ho chuka hai. Haan, AS purushon mein 2-3 guna zyada common hai — lekin mahilaon mein bhi hoti hai. Problem ye thi ki mahilaon mein AS differently present karta hai: peripheral joints (knees, hips) aur enthesitis (heel pain) zyada hoti hai, aur spinal involvement comparatively mild hoti hai — isliye pehle "arthritis" ya "fibromyalgia" diagnose ho jaata tha. Aaj radiologists aur rheumatologists zyada aware hain — mahilaon mein bhi MRI se early diagnosis possible hai. Agar aap mahila hain, 20-40 age group mein, aur inflammatory back pain + heel pain + HLA-B27 positive hai — to AS evaluation zaroor karwayein.',
    },
    {
      _key: 'faq19',
      question: 'Ankylosing Spondylitis aur mental health — kya connection hai?',
      answer: 'Bahut real aur important connection hai — aur ye aspect bahut ignore hota hai. Chronic pain, mobility limitation, aur uncertainty of disease progression depression aur anxiety ka risk significantly badhate hain. Studies mein AS patients mein depression prevalence general population se 2-3 guna zyada milti hai. Homeopathy is aspect mein particularly helpful hai — Natrum Muriaticum, Ignatia, Aurum Metallicum jaisi constitutional medicines physical aur mental symptoms dono ko ek saath address karti hain. Therapist ya counselor se milna — physical treatment ke saath saath — overall disease management mein fark dalta hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya Ankylosing Spondylitis mein Ayurveda better hai ya Homeopathy?',
      answer: 'Dono traditional systems ke apne strengths hain. Ayurveda: Panchakarma (especially Basti) joint lubrication aur detox ke liye helpful hai, aur herbs jaise Shallaki (Boswellia) aur Guggul anti-inflammatory properties ke liye evidence-based hain. Homeopathy: Constitutional treatment jo immune dysregulation address karta hai, uveitis aur gut issues ke saath AS ka holistic management, practically zero side effects. Sabse ideal approach: Dono ka combination ek integrated approach mein — aur severe cases mein rheumatologist ki conventional treatment ke saath parallel rakhna. Combination best outcomes deta hai.',
    },
    {
      _key: 'faq21',
      question: 'Ankylosing Spondylitis mein kab turant doctor ke paas jaana chahiye?',
      answer: 'TURANT (Same Day) Emergency: Aankhon mein achanak laalii + photophobia + blurry vision — Uveitis emergency hai. Girne ke baad severe neck pain ya numbness/weakness haath-paon mein — spinal fracture ya cord compression possible. Chest mein achanak tez dard — aortic involvement rule out karna zaroori. Bukhar ke saath joint swelling jo bahut tezi se badh rahi ho — septic arthritis ya infection. Jaldi Milna (1-2 Din Mein): Morning stiffness jo 3+ ghante se zyada regular ho rahi hai — disease flare. Naya joint affected — sudden swelling. Medicines ki wajah se pet mein tez dard ya kali latring — NSAIDs side effects.',
    },
    {
      _key: 'faq22',
      question: 'Ankylosing Spondylitis mein homeopathic treatment kitne time mein result deta hai?',
      answer: 'AS ki chronicity aur severity pe depend karta hai. General timeline: Pehle 4-8 hafte mein: thakaan aur morning stiffness duration mein improvement aksar pehle notice hoti hai. 3-6 mahine mein: pain scores mein meaningful reduction, daily function better. 6-12 mahine mein: disease activity (BASDAI score) mein stable improvement, flare-ups ki frequency kam. Jo patients simultaneously physiotherapy + diet changes + homeopathic treatment rakhte hain, unme results consistently faster aur better hote hain. Regular follow-up zaroori hai — khud judge mat karein ki "medicine kaam nahi kar rahi" sirf 4-6 hafte mein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH — Clinical Research in Spondyloarthropathies', url: 'ccrhindia.nic.in', year: '2019' },
    { _key: 's2', name: 'Witt CM et al — Homeopathic treatment of patients with chronic low back pain', url: 'pubmed.ncbi.nlm.nih.gov', year: '2009' },
    { _key: 's3', name: 'National Ankylosing Spondylitis Society — Disease Overview', url: 'nass.co.uk', year: '2022' },
  ],

  doctorNote: 'Mere clinic mein aane wale kaafi AS patients pehle saalon tak "mechanical back pain" ka ilaaj karte rahe. Sahi keh raha hoon — average 7 saal ki delay hoti hai diagnosis mein. Jo patients mujhse milte hain early stage mein — Rhus Tox, Aesculus, ya Medorrhinum pe depend karta hai patient ka constitution — unme inflammation markers aur mobility dono mein main change clearly notice karta hoon 6-9 mahine ke andar, especially jab wo physiotherapy bhi saath rakhte hain. Ankylosing Spondylitis ko darr ki zaroorat nahi — samajhne ki zaroorat hai.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    await client.createOrReplace(ankylosingSpondylitis)
    console.log('✅ Ankylosing Spondylitis disease document created/updated: disease-ankylosing-spondylitis')
    console.log('🌐 Live at: https://homeopedia.in/diseases/ankylosing-spondylitis')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
