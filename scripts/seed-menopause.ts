import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-menopause',
  _type: 'disease',
  title: 'Menopause',
  hindiName: 'Rajovritti / Mahavari Band Hona / Masik Dharm Ka Rokna',
  slug: { _type: 'slug', current: 'menopause' },
  category: "Women's",
  publishedAt: '2026-05-02T00:00:00.000Z',
  metaTitle: 'Menopause Treatment in Hindi | Homeopathy Se Control | Homeopedia',
  metaDescription: 'Menopause (rajovritti) ke hot flashes, mood swings, neend ki takleef ka homeopathic treatment — diet, care aur verified info. Doctor-reviewed.',
  heroText: 'Menopause ek natural biological process hai jo har mahila mein aata hai — yeh koi bimari nahi, balki ek life transition hai. Jab periods lagatar 12 mahine band reh jaate hain, tab medically menopause confirm hota hai. India mein yeh zyaadatar 45 se 52 saal ki umar mein hota hai. Is waqt body mein estrogen aur progesterone ka level dramatically girta hai — isi ki wajah se hot flashes, mood swings, neend na aana, weight gain aur hadd kamzori jaisi takleefein shuru hoti hain. Timely treatment aur sahi lifestyle se ye sab symptoms control mein aata hai aur life quality normal rehti hai.',

  quickFacts: {
    whatItIs: 'Natural hormonal transition — bimari nahi. 12 mahine periods band hone ke baad confirm hota hai',
    howCommon: 'India mein 40+ umar ki estimated 13 crore mahilayein menopause ya perimenopause mein hain',
    treatmentDuration: 'Symptom improvement: 3-6 mahine | Long-term lifestyle support life bhar chalta hai',
  },

  causes: [
    'Ovaries ka estrogen aur progesterone hormone production naturally khatam hona — umar ke saath reproductive cycle ka end',
    'Oophorectomy (dono ovaries ki surgery se removal) — sudden surgical menopause',
    'Chemotherapy ya pelvic radiation therapy — ovarian function ko temporarily ya permanently affect karta hai',
    'Primary ovarian insufficiency (POI) — immune system ya genetic reasons se ovaries waqt se pehle kaam band kar deti hain',
    'Thyroid disorders (hypothyroidism) — hormonal balance disrupt hota hai, early menopause trigger ho sakta hai',
    'Chronic stress aur extreme weight loss — hormonal axis ko affect karta hai, periods early band ho sakte hain',
  ],

  riskFactors: [
    'Family history: Agar maa ya behen ko early menopause hua ho to risk zyada',
    'Smokers: Research suggest karta hai ki smokers mein menopause 1-2 saal pehle aata hai',
    'Thin build / kam weight: Bahut patli mahilaon mein transition zyada abrupt hoti hai',
    'Autoimmune diseases (thyroid, lupus) waali mahilayein',
    'Cancer treatment (chemo/radiation) karana wali patients',
    'Nulliparous women — kuch studies mein early menopause link milta hai',
  ],

  complications: [
    'Osteoporosis (Hadd Kamzori): Estrogen haddion ki density protect karta tha — fracture risk significantly badh jaata hai',
    'Cardiovascular Risk: Post-menopause mein heart disease ka risk badh jaata hai — cholesterol aur blood pressure dono affect hote hain',
    'Urogenital Atrophy: Vaginal dryness, recurrent UTI — quality of life par serious impact',
    'Depression aur Anxiety: Hormonal changes brain chemistry affect karte hain — chronic mental health issues ban sakte hain',
    'Metabolic Syndrome: Weight gain abdominal area mein, insulin resistance, type 2 diabetes risk',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Natural Menopause (Kudrati Rajovritti)',
      description: 'Sabse common — umar ke saath gradually aata hai. 45-52 saal ke beech, 12 mahine periods na aane par confirm hota hai. Iske pehle ka phase "Perimenopause" kehlaata hai (2-10 saal tak).',
    },
    {
      _key: 'type2',
      name: 'Premature Menopause / Early Menopause',
      description: '40 saal se pehle hone wala menopause. Causes: Autoimmune conditions, genetic factors, thyroid problems. India mein lagbhag 1-2% mahilaon mein hota hai. Zyada attention chahiye — bone aur heart health risk jaldi shuru hoti hai.',
    },
    {
      _key: 'type3',
      name: 'Surgical Menopause (Chirurgical Rajovritti)',
      description: 'Jab surgery mein dono ovaries nikal diye jaate hain. Symptoms bahut achanak aur intense hote hain — body ko adjust karne ka waqt nahi milta. Homeopathy is case mein symptoms manage karne mein effective hai.',
    },
    {
      _key: 'type4',
      name: 'Induced Menopause',
      description: 'Chemotherapy ya radiation therapy ki wajah se. Cancer treatment ke side effect ke roop mein aata hai. Reversible bhi ho sakta hai kuch cases mein.',
    },
    {
      _key: 'type5',
      name: 'Perimenopause (Pre-Menopause Phase)',
      description: 'Technically menopause nahi, lekin symptoms shuru ho jaate hain. Periods irregular ho jaate hain, mood swings, hot flashes aane lagte hain. Ye phase kaafi lambi ho sakti hai — 2 se 10 saal tak.',
    },
  ],

  symptoms: [
    {
      _key: 'sg1',
      group: 'Vasomotor Symptoms (Garam-Thanda Cycle)',
      items: [
        'Hot flashes — achanak bahut tez garam lagna, paseena aana',
        'Night sweats — raat ko neend mein paseena aana',
        'Chilling — hot flash ke baad achanak thanda lagna',
        'Face aur neck ka red ho jaana (flushing)',
      ],
    },
    {
      _key: 'sg2',
      group: 'Psychological & Sleep Symptoms (Dimag aur Neend)',
      items: [
        'Mood swings — baat baat pe gussa ya rona',
        'Anxiety — binu kisi khaas wajah ke ghabrahat',
        'Depression ya udaasi ka feeling',
        'Brain fog — concentration nahi hoti, cheezein bhoolne lagna',
        'Insomnia — neend na aana ya baar baar tootna',
      ],
    },
    {
      _key: 'sg3',
      group: 'Physical Body Changes',
      items: [
        'Irregular periods (pehle perimenopause mein)',
        'Vaginal dryness aur sambhog mein takleef',
        'Joint pain aur muscle aches',
        'Weight gain — especially pet ke aas paas',
        'Hair thinning aur skin dry hona',
        'Libido (yaunik ichha) mein kami',
        'Urinary frequency ya leakage (stress incontinence)',
      ],
    },
  ],

  homeopathyExplainer: 'Homeopathy menopause ko ek disease nahi, ek transition samjhta hai — aur isi liye treatment ka focus symptoms band karna nahi balki body ko is transition mein smoothly adjust karna hota hai. Har mahila ka menopause alag hota hai — kisi ko zyada hot flashes, kisi ko mood swings, kisi ko neend ki takleef. Homeopathy mein aapki puri picture dekhi jaati hai aur usi ke hisaab se individualized medicines di jaati hain jo hormonal axis ko naturally support karte hain.',

  ccrhEvidence: {
    improvementRate: 'CCRH ke clinical studies mein menopause symptoms — khaaskar hot flashes, mood disturbances aur sleep issues — mein treatment group ke patients mein Greene Climacteric Scale par meaningful improvement dekha gaya, jo placebo group ke comparison mein significantly better tha.',
    avgTreatmentPeriod: '3 se 6 mahine (symptom severity ke hisaab se)',
    citation: 'Central Council for Research in Homoeopathy (CCRH), New Delhi. Clinical Research Studies on Menopausal Syndrome | 2018-2022. Journal of Research in Homoeopathy.',
    keyFindings: [
      'Hot flash frequency aur intensity dono mein treatment group mein placebo se better reduction dekha gaya',
      'Mood disturbances aur sleep quality mein 3 mahine ke treatment ke baad significant improvement',
      'Koi significant adverse effects report nahi hue — safety profile bahut favorable raha',
    ],
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Lachesis',
      bestFor: 'Bohot intense hot flashes jo subah uthne ke baad ya neend ke dauraan aate hain, left side zyada affected, baat karna nahi rokna chahti, jealousy ya suspicion tendency.',
      keyIndications: [

        'Lachesis venous congestion aur vascular sensitivity ke saath associate hai — menopause mein jo sudden blood rush aur heat ki waves aati hain, un par is medicine ka classical indication milta hai. Historically menopause ka "queen remedy" maana jaata hai.',

      ],
    },
    {
      _key: 'med2',
      name: 'Sepia',
      bestFor: 'Thaka hua, udaas, sab se door rehna chahti hai. Hot flashes ke saath paseena, beardown sensation (neeche ki taraf kheench ka feeling), libido bilkul khatam.',
      keyIndications: [

        'Sepia primarily hormonal aur uterine exhaustion ki state address karta hai. Jo mahila feel karti hai ki "sab kuch bahut zyada ho gaya" — emotionally aur physically — us type mein ye medicine bahut effective historical track record rakhti hai.',

      ],
    },
    {
      _key: 'med3',
      name: 'Sulphur',
      bestFor: 'Bahut tez burning hot flashes, raat ko paon garam lag rahe hain aur cover hataana chahti hain, skin problems saath mein, subah 11 baje bhook lagti hai.',
      keyIndications: [

        'Sulphur heat sensitivity aur vascular reactivity ka constitutional remedy hai. Menopause mein jab body ki thermostat completely disturbed ho, especially burning sensations ke saath — tab sulphur ka indication milta hai.',

      ],
    },
    {
      _key: 'med4',
      name: 'Sanguinaria Canadensis',
      bestFor: 'Hot flashes jo sar aur galon tak jaati hain, right-sided headaches, burning in stomach, flushing face.',
      keyIndications: [

        'Sanguinaria ka classic picture: periodic flushes, right-sided symptoms, intense burning. Menopause ke vasomotor symptoms — khaaskar cheeks ka lal hona aur sar mein garam waves — is medicine ke indication hain.',

      ],
    },
    {
      _key: 'med5',
      name: 'Cimicifuga (Actaea Racemosa)',
      bestFor: 'Joint aur muscle pain ke saath menopause, depression ka feeling jaise dark cloud chhaa gaya ho, irregular heartbeat, uterine cramping.',
      keyIndications: [

        'Cimicifuga ko "uterus aur ovary ki medicine" bhi kaha jaata hai. Perimenopausal women mein jo musculoskeletal pain, emotional darkness aur hormonal irregularity saath aati hai — iska classical picture yahi hai.',

      ],
    },
    {
      _key: 'med6',
      name: 'Calcarea Carbonica',
      bestFor: 'Motapa aur paseena zyada, khud ko physically aur mentally overwhelmed feel karti hai, anxiety especially raat ko, cold damp weather se takleef.',
      keyIndications: [

        'Calcarea Carb metabolic aur hormonal slowdown ki medicine hai — menopause mein jo weight gain, fatigue aur anxiety saath aate hain (especially in heavier build women) is mein ye effective hai.',

      ],
    },
  ],

  seasonalCare: {
    summer: 'Hot flashes is mausam mein worst hote hain. Room cool rakhein, cotton kapde pehnein. Naariyal paani aur kheera daily lein. Subah ya shaam bahar nikalna — dopahar mein hot flash trigger common hai.',
    monsoon: 'Joint pain aur muscle aches is mausam mein zyada hoti hain. Namak aur processed food extra avoid karein — bloating badhta hai. Fungal infections ka risk — cotton innerwear zaroor. Vitamin D sunlight se nahi milta — diet ya supplement pe dhyan dein.',
    winter: 'Raat ko neend achhi hoti hai lekin joint stiffness morning mein. Exercise indoor rakhein — yoga, light stretching. Skin aur vaginal dryness winter mein worse — hydration aur moisturizer zaroor.',
  },

  dietInclude: [
    {
      _key: 'inc1',
      category: 'Calcium & Bone Strength',
      emoji: '🦴',
      items: [
        'Til (sesame seeds) — calcium ka best Indian vegetarian source, roz ek chammach',
        'Ragi (nachni) — iron aur calcium dono ka powerhouse, bone density maintain karta hai',
        'Dahi (curd) — probiotic ke saath calcium, gut health aur bone health dono',
        'Palak, methi, sarson — calcium, magnesium, Vitamin K bone health ke liye',
        'Akhrot (walnut) — omega-3 fatty acids, brain fog aur mood swings dono mein helpful',
      ],
    },
    {
      _key: 'inc2',
      category: 'Phytoestrogen & Hormonal Support',
      emoji: '🌿',
      items: [
        'Flaxseeds (alsi) — lignans hormonal balance mein help karte hain, ek chammach roz',
        'Chana, rajma, moong — legumes mein phytoestrogens aur fiber dono',
        'Soya products (moderate) — mild estrogen-like effect, hot flashes mein helpful',
        'Naariyal paani — electrolyte balance, hot flashes mein body temperature control',
        'Haldi (turmeric) — anti-inflammatory, joint pain aur mood ke liye',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Hot Flash Triggers',
      emoji: '🚫',
      items: [
        'Tez masale excess mein — body temperature badha dete hain, hot flashes intense hoti hain',
        'Bahut garam chai/coffee (3+ cups) — caffeine hot flash frequency badha sakti hai',
        'Alcohol — blood vessels dilate karta hai, hot flashes aur night sweats intense ho jaate hain',
        'Refined sugar aur maida in excess — insulin resistance badhate hain',
      ],
    },
    {
      _key: 'avd2',
      category: 'Bone & Heart Enemies',
      emoji: '⚠️',
      items: [
        'Namak zyada (processed food, papad, achaar excess) — sodium calcium body se nikaal deta hai',
        'Cold drinks / soda — phosphoric acid bone density kam karti hai',
        'Trans fats (biscuits, namkeen, fried food) — LDL cholesterol badha dete hain',
        'Red meat in excess — saturated fat se inflammation badhti hai, joint pain worse',
      ],
    },
  ],

  dos: [
    'Roz 30 minute ki weight-bearing exercise karein (walking, yoga, dance) — haddion ki density maintain hoti hai aur mood bhi better rehta hai',
    'Calcium aur Vitamin D pe dhyan dein — roz til, ragi, dahi khaein aur doctor se Vitamin D level check karaayein',
    'Neend ki routine fix karein — same time sona aur uthna, room thanda aur dark rakhna',
    'Cotton aur loose kapde pehnein — synthetic fabric hot flashes ko trigger aur worsen karta hai',
    'Paani khub piyein — roz 8-10 glass — vaginal dryness aur skin dryness dono mein help karta hai',
    'Stress management ke liye pranayam ya meditation shuru karein — cortisol stress hormone already high hota hai',
    'Regular bone density test (DEXA scan) karaayein — doctor ki salaah se — osteoporosis silently shuru hoti hai',
    'Regular gynecologist checkup — PAP smear, mammogram, thyroid profile — post-menopausal health monitoring zaroori hai',
  ],

  donts: [
    'Smoking mat karein ya band karein — smoking menopause 1-2 saal pehle laati hai aur osteoporosis risk bhi badh jaata hai',
    'Garam paani se nahane mein zyada waqt mat bitaayein — body temperature badhne se hot flash trigger hoti hai',
    'Neend ki dawai akele mat lein bina doctor ke — dependency ka risk hota hai aur root cause address nahi hota',
    'Self-medicate se hormonal supplements mat lein — even "natural" phytoestrogen supplements ka dose doctor se confirm karaayein',
    'Heavy weight gain ignore mat karein — menopause mein abdominal fat metabolic syndrome aur heart risk dono badha deta hai',
    'Vaginal dryness aur discomfort ko "normal" samajh ke ignore mat karein — treatment available hai, doctor se baat karein',
    'Alcohol aur bahut zyada caffeine se bachein — dono hot flashes aur sleep quality ko worsen karte hain',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Menopause kya hota hai — simple bhasha mein samjhaiye?',
      answer: 'Menopause woh natural stage hai jab ek mahila ki mahavari (periods) permanently band ho jaati hai. Jab 12 mahine continuously periods nahi aate, tab doctor ise menopause confirm karte hain. Yeh koi bimari nahi hai — yeh ek natural hormonal transition hai jo har mahila mein aata hai, usually 45 se 52 saal ki umar mein. Is dauraan ovaries estrogen aur progesterone hormones banana band kar deti hain, jisse body mein kai changes aate hain. Sahi care se ye transition smoothly ho sakta hai.',
    },
    {
      _key: 'faq2',
      question: 'Menopause ki sahi umar kya hoti hai India mein?',
      answer: 'India mein menopause ki average age 46 se 49 saal ke beech hai — Western countries mein ye thoda aage (50-51) hoti hai. Lekin ye fix nahi hota — kuch mahilaon mein 40 se pehle (premature menopause) aur kuch mein 55 ke baad bhi hota hai. Agar 40 saal se pehle periods band ho jaayein to doctor se milna zaroori hai — ye premature menopause ho sakta hai jo alag attention maangta hai. Agar 45-52 ke beech hai to ye bilkul normal range hai.',
    },
    {
      _key: 'faq3',
      question: 'Perimenopause aur menopause mein kya fark hai?',
      answer: 'Perimenopause wo phase hai jo menopause se pehle aata hai — isme periods irregular ho jaate hain lekin completely band nahi hote. Ye phase 2 se 10 saal tak chal sakta hai. Is dauraan hot flashes, mood swings, neend ki takleef shuru ho sakti hai. Jab 12 mahine tak ek bhi period nahi aata, tab menopause confirm hota hai. Perimenopause mein bhi pregnancy possible hai, isliye contraception continue karna chahiye — doctor se clarify zaroor karein.',
    },
    {
      _key: 'faq4',
      question: 'Hot flashes kya hoti hain aur kab band hoti hain?',
      answer: 'Hot flash ek achanak garam lagne ka intense sensation hai — chehra, gaardhan aur seena zyada affect hota hai. Saath mein paseena, dhadkan tez hona aur phir achanak thanda lagna. Ye sirf 1-5 minute tak rehta hai lekin bahut uncomfortable hota hai. Kuch mahilaon mein raat ko bhi hota hai (night sweats). Average mahila mein hot flashes 7-10 saal tak chal sakti hain — lekin treatment aur lifestyle se inki frequency aur intensity significantly kam ki ja sakti hai. Homeopathy mein Lachesis, Sanguinaria jaisi medicines hot flashes mein specifically help karti hain.',
    },
    {
      _key: 'faq5',
      question: 'Menopause mein neend kyun nahi aati — kya karein?',
      answer: 'Neend na aana menopause ke sabse common aur distressing symptoms mein se ek hai. Iske do main reasons hain: ek, night sweats ki wajah se baar baar neend toot jaati hai; doosra, estrogen directly brain ke sleep center ko affect karta hai. Kuch helpful steps: room ka temperature thanda rakhein (21-22°C ideal), sone se 1 ghanta pehle screens band karein, garam paani se pehle pair dhoein. Homeopathy mein Coffea Cruda, Kali Phosphoricum jaisi medicines menopause-related insomnia mein help karti hain — bina dependency ke.',
    },
    {
      _key: 'faq6',
      question: 'Menopause mein mood swings aur depression normal hai kya?',
      answer: 'Haan — mood swings, anxiety, chipchipaahat aur sadness ye sab menopause mein bahut common hain. Estrogen brain mein serotonin (khushi ka hormone) ke level ko maintain karta hai — jab estrogen girta hai, serotonin bhi affect hota hai. Isliye baat baat pe rona, gussa aana, ya udaas rehna kisi kamzori ki nishani nahi — ye hormonal changes hain. Lekin agar depression zyada intense ho ya 2 hafte se zyada rahe to doctor se zaroor milein. Homeopathy mein Sepia, Ignatia jaisi medicines menopause-related emotional disturbance mein bahut achhe results deti hain.',
    },
    {
      _key: 'faq7',
      question: 'Kya menopause mein weight gain hona zaroori hai?',
      answer: 'Zaroori nahi — lekin common zaroor hai. Estrogen girne se body fat redistribution hoti hai — pehle jo fat hips-thighs mein hoti thi, ab abdominal area mein shift hoti hai. Metabolism bhi slow hota hai. Lekin weight gain inevitable nahi hai — jo mahilayein regular exercise (especially weight-bearing) aur diet ka dhyan rakhti hain, unka weight menopause mein bhi control rehta hai. Key: refined sugar, maida aur alcohol kam karein, protein aur fiber badhayein, aur roz kam se kam 30 minute walk zaroor karein.',
    },
    {
      _key: 'faq8',
      question: 'Menopause mein haddion ka kamzor hona — kaise bachein?',
      answer: 'Osteoporosis (haddi ka kamzor hona) menopause ka sabse serious long-term complication hai — estrogen haddion ki density protect karta tha, ab woh protection khatam hoti hai. Bachne ke liye: roz calcium-rich food (til, ragi, dahi, palak), Vitamin D ke liye subah ki dhoop, aur weight-bearing exercise zaroor. Doctor se DEXA scan karaayein jo bone density measure karta hai. Homeopathy mein Calcarea Carbonica, Symphytum jaisi medicines bone health support mein use hoti hain.',
    },
    {
      _key: 'faq9',
      question: 'Kya homeopathy menopause mein kaam karta hai?',
      answer: 'Haan — homeopathy menopause mein ek effective complementary approach hai, khaaskar hot flashes, mood swings, neend ki takleef aur joint pain ke liye. CCRH ke clinical studies mein treatment group ki mahilaon mein Greene Climacteric Scale par meaningful improvement dekha gaya — placebo group ke comparison mein significantly better. Homeopathy ka sabse bada advantage ye hai ki ye sirf ek symptom nahi — poori picture treat karta hai: physical, mental aur emotional saath mein. Jin mahilaon ko HRT (hormone therapy) nahi karni — breast cancer history, clotting disorders — unke liye homeopathy ek important option hai.',
    },
    {
      _key: 'faq10',
      question: 'Menopause mein periods irregular ho jaate hain — kab doctor ke paas jaana chahiye?',
      answer: 'Perimenopause mein periods irregular hona normal hai — kabhi jaldi aana, kabhi late, kabhi heavy, kabhi light. Lekin in situations mein turant doctor ke paas jaayein: 12 mahine band rehne ke baad koi bhi spotting ya bleeding; bahut heavy periods (ek ghante mein 1 se zyada pad change karna); periods ke beech bleeding (inter-menstrual bleeding); 40 saal se pehle periods band ho jayein. Postmenopausal bleeding kabhi bhi ignore nahi karni chahiye — ye uterine issues ka sign ho sakta hai.',
    },
    {
      _key: 'faq11',
      question: 'Menopause mein kaun se tests karaane chahiye?',
      answer: 'Menopause confirm karne aur complete health check ke liye ye tests helpful hain: FSH (Follicle Stimulating Hormone) — blood test, menopause confirm karta hai jab level high hota hai; Thyroid Profile (T3, T4, TSH) — thyroid problems menopause symptoms jaisi hi hoti hain; Vitamin D3 aur Calcium levels — bone health ke liye; Lipid Profile — cholesterol post-menopause concern hai; DEXA Scan — bone density assess karne ke liye; PAP Smear aur Mammogram — regular cancer screening. Ye sab doctor ki guidance mein karaayein.',
    },
    {
      _key: 'faq12',
      question: 'Menopause mein vaginal dryness ka kya karein?',
      answer: 'Vaginal dryness menopause mein bahut common hai lekin aksar discuss nahi ki jaati — ye estrogen ki kami se hoti hai. Isse sambhog mein takleef, burning, aur recurrent UTI ho sakti hai. Kuch helpful steps: khub paani piyein, alcohol avoid karein, fragranced products avoid karein intimate area mein. Doctor se milein — topical estrogen cream (local application) ka option available hai jo body-wide hormonal effects nahi karta. Homeopathy mein Natrum Muriaticum, Lycopodium jaisi medicines vaginal dryness ke saath overall menopausal picture address karte hain.',
    },
    {
      _key: 'faq13',
      question: 'Menopause ke baad sex life normal rehti hai kya?',
      answer: 'Haan — menopause ke baad bhi healthy sex life bilkul possible hai. Kuch challenges zaroor hote hain — vaginal dryness, libido mein kami, discomfort. Lekin ye sab addressable hain. Lubrication, communication with partner, stress management, aur agar zaroor ho to medical help — sab milake sexual health post-menopause mein maintain ki ja sakti hai. Agar discomfort zyada hai to gynecologist se milein — ye bilkul valid medical concern hai.',
    },
    {
      _key: 'faq14',
      question: 'Premature menopause kya hota hai — 40 se pehle periods band ho jaayein to kya karein?',
      answer: '40 saal se pehle menopause aana "premature ovarian insufficiency" ya "premature menopause" kehlaata hai. India mein lagbhag 1-2% mahilaon mein hota hai. Causes: genetic (family history), autoimmune diseases, thyroid problems, ya unknown. Ye zyada attention maangta hai kyunki osteoporosis aur heart disease ka risk umar se pehle badh jaata hai. Fertility bhi affect hoti hai. Aisi sthiti mein specialist se milna zaroor hai — options aur management discuss karein.',
    },
    {
      _key: 'faq15',
      question: 'Menopause mein dil ki dhadkan zyada hona — kya yeh dangerous hai?',
      answer: 'Heart palpitations (dil ka tez ya uneven dhadkana) menopause mein kafi common hai — estrogen dil ke electrical conduction ko affect karta hai. Aksar hot flash ke saath ya anxiety ke saath aata hai. Zyaadatar cases mein ye dangerous nahi hota — hormonal change ka effect hota hai. Lekin in situations mein kardiologist se zaroor milein: palpitations bahut frequent hain, chest pain ke saath hain, breathlessness ke saath hain, ya pehle se heart disease hai. ECG karaana helpful hota hai ek baar. Homeopathy mein Lachesis, Naja jaisi medicines menopause-related palpitations mein use hoti hain — lekin pehle cardiac causes rule out zaroor karein.',
    },
    {
      _key: 'faq16',
      question: 'Kya menopause mein yoga aur exercise safe hai?',
      answer: 'Sirf safe nahi — zaroor hai! Exercise menopause ka ek sabse effective "treatment" hai jo hot flashes ki frequency kam karta hai, mood better karta hai, weight control karta hai, aur haddion ko strong rakhta hai. Kya karna chahiye: Weight-bearing exercise (walking, jogging, dancing) hadd ke liye; Yoga aur pranayam stress aur mood ke liye; Strength training muscle mass maintain karne ke liye. Koi bhi naya exercise routine shuru karne se pehle ek baar doctor se baat karein, khaaskar agar joint pain ya osteoporosis hai.',
    },
    {
      _key: 'faq17',
      question: 'Menopause mein skin aur baal kyun kharab hote hain?',
      answer: 'Estrogen skin mein collagen production maintain karta hai — jab ye girta hai, skin thin, dry aur dull hone lagti hai. Baalo ki baat karein to estrogen hair follicles ko protect karta tha — iske khatam hote hi androgens ka relative effect badh jaata hai, hair thinning shuru hoti hai. Kya karna chahiye: Vitamin E aur C se bhari diet (amla, badam), natural oils (nariyal tel, almond oil) moisturization ke liye, sun protection cream. Collagen synthesis ke liye protein aur Vitamin C intake badhaayein. Homeopathy mein Thuja, Silicea, Natrum Mur constitutional treatment mein help karti hain.',
    },
    {
      _key: 'faq18',
      question: 'Menopause mein yaadaasht kamzor hona — brain fog — normal hai?',
      answer: 'Haan — "brain fog" menopause mein real aur common hai. Cheezein bhoolna, concentration na hona, words dhundne mein waqt lagna — ye sab estrogen ki kami se hota hai kyunki estrogen brain ke hippocampus (memory center) ko directly support karta hai. Ye permanent nahi hota — zyaadatar mahilaon mein 1-2 saal mein improve hota hai. Helpful steps: omega-3 foods (akhrot, flaxseeds) zyada lein, neend improve karein, mental exercises karein. Agar brain fog bahut severe ho to neurologist se milein — thyroid ya Vitamin B12 deficiency bhi similar symptoms deta hai.',
    },
    {
      _key: 'faq19',
      question: 'Menopause mein UTI (urine infection) baar baar kyun hoti hai?',
      answer: 'Post-menopause mein recurrent UTI bahut common complaint hai. Reason: Estrogen vaginal aur urethral tissue ko healthy aur thick rakhta hai — iske khatam hote hi ye tissue thin aur dry ho jaati hai, jis se bacteria easily entry kar paate hain. Kya karna chahiye: Khub paani piyein (roz 8-10 glass), bathroom use ke baad front to back wipe karein, synthetic underwear avoid karein, sex ke baad urine pass karein. Doctor se milein — topical vaginal estrogen cream UTI recurrence significantly kam karti hai. Homeopathy mein Staphysagria, Cantharis recurrent UTI mein help karti hain alongside conventional treatment.',
    },
    {
      _key: 'faq20',
      question: 'Kya menopause ke baad pregnancy possible hai?',
      answer: 'Menopause confirm hone ke baad (12 mahine koi period nahi) natural pregnancy possible nahi hai. Lekin perimenopause mein — jab periods irregular hain lekin completely band nahi hue — pregnancy possible hai. Isliye perimenopause mein contraception zaroor use karein jab tak doctor confirm na kar dein ki menopause complete ho gaya hai. Post-menopause mein kisi bhi bleeding ko doctor ko report zaroor karein.',
    },
    {
      _key: 'faq21',
      question: 'Menopause mein chai peena chahiye ya nahi?',
      answer: 'Chai completely band karne ki zaroorat nahi — lekin limit zaroor karein. Chai mein caffeine hota hai jo hot flash frequency badha sakta hai, neend disturb kar sakta hai, aur calcium absorption mein thoda interfere karta hai. Ideal approach: Din mein 1-2 cups tak limit karein; kadak chai ki jagah halki chai ya green tea prefer karein; sone se 4-6 ghante pehle chai mat piyein. Agar chai ke baad hot flash zyada ho raha hai to temporarily band karke test karein. Herbal teas (tulsi, ashwagandha, chamomile) menopause mein better alternatives hain.',
    },
    {
      _key: 'faq22',
      question: 'Menopause aur thyroid mein kya connection hai?',
      answer: 'Bahut important connection hai — aur ye often miss ho jaata hai. Hypothyroidism ke symptoms bahut milte-julte hain menopause se: thakan, weight gain, mood issues, periods irregular hona. Isliye menopause assume karne se pehle thyroid test zaroor karaayein. Iske alawa, menopause ke baad autoimmune thyroid disease (Hashimoto\'s) ka risk badhta hai. Agar dono saath hain to dono ka treatment zaroor hona chahiye. CCRH studies mein thyroid-related menopausal overlap cases mein homeopathy ne symptom management mein promising results dikhaye hain.',
    },
    {
      _key: 'faq23',
      question: 'Menopause mein kaun si exercise best hai?',
      answer: 'Menopause mein teen types ki exercise ideal combination banaate hain: (1) Weight-bearing cardio (walking, jogging, dancing, aerobics) — roz 30 minute — hot flashes kam, weight control, haddion ke liye; (2) Strength training (yoga, pilates, light weights) — hafte mein 2-3 baar — muscle mass maintain karta hai; (3) Flexibility aur balance (yoga, tai chi) — joint stiffness kam, fall risk reduce. Shuru karne waalon ke liye: Bas roz 30 minute brisk walking se shuru karein. Agar joint pain hai to pool walking ya swimming better option hai.',
    },
    {
      _key: 'faq24',
      question: 'HRT (Hormone Replacement Therapy) aur homeopathy mein kya fark hai menopause mein?',
      answer: 'HRT mein baahri hormones (estrogen/progesterone) body mein diye jaate hain — ye hot flashes aur bone loss mein fast relief deta hai. Lekin HRT ke risks hain: breast cancer ka slightly badha hua risk, blood clots, stroke — especially long-term use mein. Homeopathy hormones nahi deta — ye body ki apni regulatory mechanism ko stimulate karta hai. Slow but safer. Jo mahilayein HRT nahi kar saktin (breast cancer history, clotting disorders) unke liye homeopathy ek important alternative hai. Dono ek saath bhi chal sakti hain — qualified homoeopath se discuss karein.',
    },
    {
      _key: 'faq25',
      question: 'Menopause — kab turant doctor ke paas jaana zaroori hai?',
      answer: 'Ye emergency signs hain — inka matlab turant medical attention chahiye: Periods complete band hone ke baad koi bhi vaginal bleeding; Chest pain, breathlessness ya dil ki dhadkan bahut tez aur irregular hona; Severe depression ya suicidal thoughts; Sudden severe headache ya vision problems (stroke warning); UTI baar baar aana aur upar tak spread hona (bukhaar, kamar dard); Ek jagah achanak haddion mein fracture (osteoporosis sign). Routine care ke liye: saal mein ek baar gynecologist, Vitamin D aur thyroid check yearly, aur koi bhi naya worrying symptom ho to der mat karein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH — Clinical Studies on Menopausal Conditions', url: 'ccrhindia.nic.in', year: '2022' },
    { _key: 's2', name: "WHO — Women's Health Statistics 2019-2021", url: 'who.int', year: '2021' },
    { _key: 's3', name: 'PubMed — Phytoestrogens and Menopause Symptom Relief: A Systematic Review', url: 'pubmed.ncbi.nlm.nih.gov', year: '2020' },
    { _key: 's4', name: 'National Institute on Aging (NIA) USA — Menopause: Overview and Management Guide', url: 'nia.nih.gov', year: '2023' },
    { _key: 's5', name: 'Indian Journal of Research in Homoeopathy — Menopause Case Studies', url: 'ijrh.org', year: '2021' },
  ],

  doctorNote: 'Apni practice mein sabse zyada jo pattern dekhta hoon wo yeh hai ki mahilayein menopause ke symptoms ko "umar ka assar" samajhkar sahti rehti hain — isliiye 2-3 saal late aati hain. Sepia aur Lachesis mere sabse frequently indicated medicines hain — lekin menopause mein individualization sabse zaroori hai. Jo patient apni poori picture bataati hai — emotional, physical, sleep, all together — unhe best results milte hain.',

  reviewDate: 'April 2026',
}

async function seed() {
  console.log('Seeding Menopause...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-menopause seeded.')
}

seed().catch(console.error)
