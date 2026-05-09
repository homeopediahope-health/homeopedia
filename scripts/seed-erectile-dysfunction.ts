import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-erectile-dysfunction',
  _type: 'disease',
  title: 'Erectile Dysfunction',
  hindiName: 'Napunsakta / Mardon Ki Kamzori / Ling Mein Tanav Ki Kami',
  slug: { _type: 'slug', current: 'erectile-dysfunction' },
  category: "Men's",
  publishedAt: '2026-05-04T00:00:00.000Z',
  metaTitle: 'Erectile Dysfunction – Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'ED (mardon ki kamzori) ke causes, types, homeopathic treatment aur diet guide – verified, doctor-reviewed. Homeopedia.in',

  heroText: 'Erectile Dysfunction (ED) ek aisi condition hai jisme mard ko sex ke dauran ling mein poora ya satisfactory tanav (erection) nahi aata – ya aata hai to tika nahi rehta. Ye sirf "weakness" nahi hai – ye ek medical condition hai jo physical aur psychological dono reasons se hoti hai. India mein lagbhag 40-50% mardo ko kabhi na kabhi ED ka experience hota hai, especially 40 saal ke baad. Sahi treatment se ye condition control mein aati hai aur sexual aur emotional life normal ho sakti hai.',

  quickFacts: {
    whatItIs: 'ED – ling mein poori ya satisfactory erection na aana ya maintain na kar paana; physical, psychological ya dono causes se hoti hai; treatable medical condition hai',
    howCommon: 'Estimated 10-20 crore Indian men affected (WHO aur Lancet GBD data ke basis pe); 40+ age mein 40-50% men kabhi na kabhi experience karte hain',
    treatmentDuration: 'Psychogenic ED mein 6-12 hafta; physical cause mein 3-6 mahine consistent treatment',
    successRate: 'CCRH se judi studies mein psychogenic ED patients ke IIEF scores homeopathy group mein placebo se significantly better – 60-65% patients mein meaningful improvement',
  },

  causes: [
    'Diabetes (Type 2) – blood vessels aur nerves dono ko damage karta hai, India mein ED ka sabse bada physical cause',
    'High blood pressure aur heart disease – blood circulation reduce karta hai, penile arteries damage hoti hain',
    'Chronic stress, anxiety, aur depression – brain-body connection ko block karta hai, young men mein sabse common cause',
    'Testosterone deficiency (hypogonadism) – hormonal imbalance se libido aur erection dono prabhavit hote hain',
    'Smoking aur excessive alcohol – penile blood vessels ko seedha nuksaan pahunchata hai, erection quality kharab hoti hai',
    'Obesity aur sedentary lifestyle – hormones aur blood flow dono affect hote hain, insulin resistance badhti hai',
  ],

  riskFactors: [
    '40 saal se upar ke mard – age ke saath testosterone naturally ghatta hai aur artery health kamzor hoti hai',
    'Diabetic patients – India mein ED aur diabetes ka combination bahut common, non-diabetics se 2-3 guna zyada risk',
    'High BP ya heart disease ke patients – same artery damage dono mein hoti hai',
    'Jo log zyada cigarette peete hain ya roz alcohol lete hain – penile circulation directly affect hoti hai',
    'Overweight ya motaape wale mard – testosterone-estrogen balance bigad jaata hai',
    'Jo log bahut zyada mental stress mein rehte hain ya neend poori nahi lete – cortisol testosterone suppress karta hai',
  ],

  complications: [
    'Relationship mein tension aur separation tak ki naaubat – partner ke saath communication aur intimacy dono suffer karti hai',
    'Self-confidence aur self-esteem badly damage hoti hai – depression ka risk significantly badh jaata hai',
    'Infertility ya conception mein mushkil agar penetrative sex possible na ho ya testosterone deficiency ho',
    'Underlying heart disease ya diabetes ka late diagnosis – ED aksar in serious conditions ka pehla warning sign hota hai',
  ],

  types: [
    {
      _key: 'type-psychogenic',
      name: 'Psychogenic ED (Mansik Karan Se)',
      description: 'Sabse zyada common type, especially young men mein. Anxiety, depression, relationship stress, performance pressure, ya past trauma ki wajah se hota hai. Physical health bilkul theek hoti hai lekin mind body ko signal nahi de pata. Raat ko ya subah erection aana (morning wood) is type ki pehchaan hai.',
    },
    {
      _key: 'type-vasculogenic',
      name: 'Vasculogenic ED (Blood Flow Ki Kami)',
      description: 'Ling mein blood flow ki kami se hota hai. Diabetes, high BP, cholesterol – ye sab blood vessels ko damage karte hain. 50+ age group mein zyada common. Morning erection bhi nahi hoti is type mein – physical blockage ki nishani.',
    },
    {
      _key: 'type-neurogenic',
      name: 'Neurogenic ED (Nerve Damage Se)',
      description: 'Diabetes ya spinal injury ki wajah se nerves damage ho jaati hain jo erection ko control karti hain. Diabetic patients mein ye type commonly dekha jaata hai. Sensation bhi affected ho sakti hai saath mein.',
    },
    {
      _key: 'type-hormonal',
      name: 'Hormonal ED (Testosterone Ki Kami)',
      description: 'Testosterone level low hone se libido aur erection dono affect hote hain. Ye type 45+ mein zyada hota hai. Saath mein thakaan, mood swing, muscle loss, aur weight gain bhi aate hain – low T ke full picture ke roop mein.',
    },
    {
      _key: 'type-drug-induced',
      name: 'Drug-Induced ED (Dawaiyon Ka Side Effect)',
      description: 'Kuch BP medicines (beta-blockers, diuretics), antidepressants (SSRIs), aur steroids ED ka kaaran ban sakti hain. Isme dawai badalne ya adjust karne se improvement aati hai – doctor se discuss zaroor karein pehle band mat karo.',
    },
    {
      _key: 'type-mixed',
      name: 'Mixed ED (Milaajula Karan)',
      description: 'Jab ek se zyada causes milkar kaam karein – jaise diabetes + anxiety – to isko mixed ED kehte hain. India mein ye type increasingly common hai. Manage karne mein thoda zyada time lagta hai kyunki dono causes ko address karna padta hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sym-erection',
      category: 'Erection Se Related Lakshan',
      items: [
        'Ling mein bilkul tanav na aana',
        'Tanav aana lekin sex ke liye poora na hona',
        'Erection bich mein chali jaana – maintain na kar paana',
        'Morning erection (morning wood) bilkul band ho jaana',
      ],
    },
    {
      _key: 'sym-desire',
      category: 'Sexual Desire Se Related',
      items: [
        'Sex mein bilkul mann na karna – low libido',
        'Ejaculation jaldi ho jaana (premature ejaculation) – ED ke saath ho sakta hai',
        'Orgasm feel na hona ya kam feel hona',
      ],
    },
    {
      _key: 'sym-psychological',
      category: 'Psychological Symptoms',
      items: [
        'Sex se pehle hi anxiety aur darr ka aana – performance anxiety',
        'Partner ko avoid karna ya bahane banana',
        'Mood off rehna, irritability, depression ke signs',
        'Neend theek na aana – subah utthke bhi thakaan mehsoos hona',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '60-65%',
    avgTreatmentPeriod: '3 se 6 mahine (type aur severity ke hisaab se)',
    citation: 'Journal of Complementary and Integrative Medicine | CCRH Clinical Trials Registry | 2018-2022',
    keyFindings: [
      'Psychogenic ED mein homeopathy group ne placebo se significantly better IIEF (International Index of Erectile Function) scores dikhaye',
      'Anxiety aur depression scores (PHQ-9, GAD-7) mein bhi saath mein improvement dekhi gayi – overall wellbeing better hua',
      'Vasculogenic ED mein improvement slower raha – conventional treatment ke saath combination zyada effective paya gaya',
    ],
  },

  homeopathyBenefits: [
    'Homeopathy ED mein isliye helpful hai kyunki ye sirf symptom nahi, us insaan ki poori picture dekhta hai – uska stress level, uski diabetes control, uska past experience, uski neend – sab matter karta hai. Jab kisi ki ED primarily anxiety-driven hai, to ek medicine kaam karegi; jab diabetes se hai, to alag approach hogi. Yahi individualization homeopathy ka sabse bada strength hai. Over time treatment se erection quality mein sudhar, confidence wapas aana, aur underlying causes pe kaam – ye sab saath mein hota hai.',
    'Psychogenic aur anxiety-driven ED mein khas tor pe effective – jo India mein sabse zyada cases hain young men mein',
    'Koi hormonal side effects nahi – PDE5 inhibitors (Viagra type) ke side effects (headache, flushing, vision changes) se poora bachav',
    'Diabetes aur BP ke saath chal rahi conventional medicines ke saath safely combine hoti hai – koi interaction nahi',
    'Sleep quality, mood, aur energy level bhi improve hote hain saath mein – sirf sexual health nahi, overall quality of life better hoti hai',
    'Long-term recurrence kam karta hai – root cause pe kaam karta hai, sirf symptom suppress nahi karta',
  ],

  medicines: [
    {
      _key: 'med-agnus-castus',
      name: 'Agnus Castus',
      bestFor: 'Sexual exhaustion, zero libido, long-standing ED',
      keyIndications: [
        'Ling mein bilkul tanav nahi aata, libido almost zero hai',
        'Kaafi time se problem chal rahi ho – chronic condition',
        'Past mein excessive sexual activity ka history ho',
        'Body zyada drain ho gayi ho aur naturally recharge nahi ho pa rahi',
      ],
    },
    {
      _key: 'med-caladium',
      name: 'Caladium Seguinum',
      bestFor: 'Smoking-related ED, weak erection with mental desire',
      keyIndications: [
        'Erection hi nahi aati ya bahut weak aati hai lekin mental desire hai',
        'Smoking ka history ho – ye is medicine ka khas indication hai',
        'Genital area mein relaxation jaisi feeling ho',
        'Genital nerve sensitivity restore karne mein helpful',
      ],
    },
    {
      _key: 'med-lycopodium',
      name: 'Lycopodium Clavatum',
      bestFor: 'Performance anxiety, anticipatory anxiety se ED',
      keyIndications: [
        'Partner ke saame confident nahi rehte – anticipatory anxiety bahut zyada',
        'Akele ya new partner ke saath erection fail hoti ho',
        'Liver ya digestive issues bhi saath mein hon',
        '"Kya hoga" ki chinta bahut rehti hai – anticipatory anxiety classic indication',
      ],
    },
    {
      _key: 'med-selenium',
      name: 'Selenium Metallicum',
      bestFor: 'Aging-related ED, erection maintain na kar paana, stamina loss',
      keyIndications: [
        'Erection aati hai lekin maintain nahi hoti – slips away',
        'Bahut jaldi thak jaate hain, memory weak ho gayi ho',
        '45+ age group – aging-related sexual weakness',
        'Sexual stamina aur nerve strength ke liye classical use',
      ],
    },
    {
      _key: 'med-nux-vomica',
      name: 'Nux Vomica',
      bestFor: 'Stress, alcohol, overwork se ED – modern lifestyle',
      keyIndications: [
        'ED stress, alcohol, late night working, aur over-indulgence ki wajah se ho',
        'Easily irritable hon, neend kharaab ho, digestive issues bhi hon',
        'Modern lifestyle se exhausted nervous system – coffee, alcohol, late nights',
        'Nervous system ko reset karne mein helpful – stress-driven ED mein commonly indicated',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di-bloodflow',
      category: 'Blood Flow Badhane Wale Foods',
      emoji: '🫀',
      items: [
        'Lahsun (Garlic) – blood vessels relax karta hai, nitric oxide production badhata hai jo erection ke liye zaroori hai',
        'Palak / Patta gobi – folate aur magnesium se blood circulation improve hota hai',
        'Chukander (Beetroot) juice – natural nitrates se blood flow significantly improve hota hai, evidence-backed',
      ],
    },
    {
      _key: 'di-testosterone',
      category: 'Testosterone Support Karne Wale Foods',
      emoji: '💪',
      items: [
        'Anda (Egg) yolk – zinc aur Vitamin D se testosterone production support hoti hai',
        'Kele (Banana) – potassium aur bromelain enzyme jo testosterone maintain karne mein helpful',
        'Badaam, Akhrot, Kaju (Nuts) – healthy fats aur zinc – hormonal health ke liye best',
      ],
    },
    {
      _key: 'di-nerve',
      category: 'Nerve aur Energy Support',
      emoji: '🌿',
      items: [
        'Ashwagandha (herbal supplement ke roop mein) – cortisol ghata ke testosterone support karta hai, evidence hai',
        'Dark chocolate (70%+) – flavonoids blood vessel function improve karte hain',
        'Pomegranate (Anaar) juice – antioxidants se erectile function improve hone ke clinical evidence hain',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da-bloodflow',
      category: 'Blood Flow Rokne Wale Foods',
      emoji: '🚫',
      items: [
        'Fried food, vanaspati ghee – arteries block karta hai, penile blood flow reduce karta hai',
        'Processed meats (sausage, salami) – high sodium se BP badhta hai – directly ED worsen karta hai',
      ],
    },
    {
      _key: 'da-hormones',
      category: 'Hormones Disrupt Karne Wale',
      emoji: '🧪',
      items: [
        'Soy products excess mein – phytoestrogens testosterone balance bigaad sakte hain zyada quantity mein',
        'Canned / packaged food – BPA (plastic chemical) testosterone levels negatively affect karta hai',
        'Sugar aur maida (refined carbs) – insulin resistance badhata hai – diabetes-related ED ka major driver',
      ],
    },
    {
      _key: 'da-sexual',
      category: 'Direct Sexual Health Ko Nuksaan Pahunchane Wale',
      emoji: '🍺',
      items: [
        'Alcohol (daily ya heavy use) – testosterone suppress karta hai aur nerve response slow karta hai',
        'Smoking / tobacco – penile blood vessels ko directly damage karta hai – ED ka #1 lifestyle cause',
        'Energy drinks aur excessive caffeine – short-term stimulant, long-term adrenal exhaustion karta hai',
      ],
    },
  ],

  dos: [
    'Rozana 30-40 minute walk ya cardio karein – heart health = sexual health, dono ek saath improve hote hain',
    'Neend 7-8 ghante poori karein – testosterone mostly raat ko sote waqt banta hai, sleep deprivation directly ED worsen karta hai',
    'Partner ke saath openly baat karein – communication se performance anxiety kaafi reduce hoti hai',
    'Blood sugar, BP, aur cholesterol check karaate rahein – ye teen India mein ED ke top causes hain',
    'Kegel exercises seekhein – pelvic floor muscles strong karne se erection quality aur duration dono better hote hain',
  ],

  donts: [
    'Bina doctor ke Viagra type medicines (PDE5 inhibitors) mat lein – heart pe serious side effects kar sakti hain, especially BP medicines ke saath',
    'Pornography ka excessive use mat karein – brain ki natural arousal response blunt ho jaati hai (PIED – Porn-Induced ED)',
    'Cigarette ya tobacco bilkul band karein – ye single biggest reversible cause of ED hai, band karne ke 2-3 mahine baad improvement milti hai',
    'ED ko "mardangi ka sawaal" mat banao – medical condition hai, doctor se milna weakness nahi balki samajhdari hai',
    'Stress aur anxiety ko ignore mat karein – untreated anxiety ED ko aur severe banati hai waqt ke saath',
  ],

  seasonalCare: {
    summer: 'Hydration bahut important – dehydration blood flow reduce karti hai jo ED worsen kar sakta hai. Anaar, tarbooz, khira – natural blood flow boosters garmi mein easily available. Zyada heat se testosterone temporarily drop ho sakta hai – body temperature cool rakhein, tight clothing avoid karein.',
    monsoon: 'Fungal infections aur humidity se general weakness aati hai – immunity maintain karein. Bahari khana (street food) avoid karein – gut health directly sexual health se connected hai. Exercise mat band karein – monsoon mein indoors workout continue karein.',
    winter: 'Testosterone naturally thoda better hota hai sardi mein – ye season treatment ke liye particularly good hai. Vitamin D deficiency sardi mein aam hai – dhoop zaroor lein – testosterone ke liye essential. Dry fruits ka intake badhaayein – zinc aur healthy fats ke liye. Neend poori karein – sardi mein late nights badh jaati hain jo cortisol badhaata hai.',
  },

  faqs: [
    {
      _key: 'faq-1',
      question: 'Erectile dysfunction kya hota hai aur ye kaise hoti hai?',
      answer: 'Erectile dysfunction (ED) ek aisi condition hai jisme male ko sex ke liye poori ya satisfactory erection nahi milti. Ye tab hoti hai jab ling mein blood flow theek se nahi hota, nerves signal nahi bhejti, ya psychological stress erection ko block karta hai. Kabhi kabhi hona normal hai – lekin agar 3 mahine se zyada regular ho to ye medical condition manai jaati hai aur treatment se theek hoti hai.',
    },
    {
      _key: 'faq-2',
      question: 'ED ke main karan kya hain?',
      answer: 'ED ke most common causes India mein hain – diabetes (Type 2), high blood pressure, stress aur anxiety, smoking, aur testosterone ki kami. Lagbhag 50-60% ED cases mein koi na koi physical cause hota hai – baaki mein psychological ya mixed. Isiliye doctor se milke proper diagnosis zaroori hai – sirf "kamzori ki dawai" lene se kuch nahi hoga agar cause address nahi kiya.',
    },
    {
      _key: 'faq-3',
      question: 'Kya young males ko bhi ED ho sakti hai?',
      answer: 'Haan – aajkal 20-35 saal ke young men mein bhi ED bahut common ho rahi hai. Iski main wajah hain: excessive pornography use (PIED), performance anxiety, sedentary lifestyle, smoking, aur chronic stress. Good news ye hai ki young men mein ED mostly psychogenic hoti hai – jo treatment se fastest respond karti hai.',
    },
    {
      _key: 'faq-4',
      question: 'ED aur low libido mein kya fark hai?',
      answer: 'Low libido matlab sex karne ki ichcha kam hona – aur ED matlab sex ki ichcha hai lekin erection nahi aati. Dono alag conditions hain. Low libido aksar testosterone ki kami se hota hai; ED ke causes zyada alag-alag hote hain. Dono ek saath bhi ho sakti hain – especially 45+ age mein hormonal changes ke saath.',
    },
    {
      _key: 'faq-5',
      question: 'Kya diabetes se ED hoti hai?',
      answer: 'Haan – diabetes ED ka sabse bada physical cause hai India mein. Diabetes blood vessels aur nerves dono ko damage karta hai jo erection ke liye zaroori hain. Diabetic men mein non-diabetic men ke mukable 2-3 guna zyada ED ka risk hota hai. Blood sugar control karna ED management ka pehla aur sabse important step hai diabetic patients ke liye.',
    },
    {
      _key: 'faq-6',
      question: 'Kya homeopathy erectile dysfunction mein kaam karta hai?',
      answer: 'Haan – homeopathy ED mein effective complementary treatment hai, khaskar jab ED psychogenic ho (anxiety, stress-related) ya diabetes/lifestyle se related ho. Homeopathy ka fayda ye hai ki ye sirf erection nahi – poori sexual health, confidence, stamina, aur anxiety address karta hai. CCRH se judi studies mein psychogenic ED patients ke IIEF scores homeopathy group mein placebo se significantly better rahe. Severe arterial blockage wale cases mein conventional treatment ke saath saath use karna zyada effective hota hai.',
    },
    {
      _key: 'faq-7',
      question: 'ED ki homeopathic medicine kaun si hai?',
      answer: 'ED mein commonly indicated medicines hain – Agnus Castus (sexual exhaustion ke liye), Lycopodium (performance anxiety ke liye), Caladium (smoking-related ED mein), Selenium (aging-related stamina loss mein), aur Nux Vomica (stress aur overwork se ED mein). Lekin kaun si aapke liye sahi hai – ye sirf qualified homoeopath decide kar sakta hai. Ek hi medicine sabke liye nahi hoti – homeopathy mein individualization sab kuch hai.',
    },
    {
      _key: 'faq-8',
      question: 'ED permanently theek ho sakti hai?',
      answer: 'Psychogenic aur lifestyle-related ED mein permanent improvement bilkul possible hai – jo log triggers seriously lete hain, treatment pe tike rehte hain, aur lifestyle theek karte hain, unhe months tak problem wapas nahi aati. Diabetes ya artery blockage wali ED mein "permanent" nahi – lekin "well-controlled" zaroor hoti hai. Sahi treatment se sexual life practically normal ho sakti hai.',
    },
    {
      _key: 'faq-9',
      question: 'Kya ED sirf ek sex problem hai ya koi aur bimari ka sign bhi ho sakti hai?',
      answer: 'ED aksar heart disease, diabetes, ya high BP ka pehla warning sign hoti hai. Studies suggest karte hain ki ED aur heart attack ka risk closely linked hai – same reason se hote hain (artery damage). Isiliye agar naye ED ke symptoms hain to doctor se milna double zaroori hai – dono ka ek saath diagnosis aur treatment karo.',
    },
    {
      _key: 'faq-10',
      question: 'Kya stress aur tension se ED hoti hai?',
      answer: 'Haan – ye sabse common aur underdiagnosed cause hai, especially young men mein. Chronic stress cortisol badhata hai jo testosterone ko directly suppress karta hai. Anxiety erection ke liye zaroori blood flow ko sympathetic nervous system ke through block kar deti hai. Isiliye bahut se men notice karte hain ki chutti mein ya relaxed state mein ED naturally improve ho jaati hai.',
    },
    {
      _key: 'faq-11',
      question: 'Kya cigarette ya smoking se ED hoti hai?',
      answer: 'Haan – smoking ED ka sabse bada aur sabse preventable cause hai. Nicotine penile arteries (cavernous arteries) ko directly damage karta hai – blood flow reduce hota hai aur eventually erection quality baar baar poor hoti hai. Good news: smoking band karne ke 2-3 mahine baad many men naturally improvement notice karte hain bina kisi aur treatment ke.',
    },
    {
      _key: 'faq-12',
      question: 'Kya ED mein alcohol peena theek hai?',
      answer: 'Occasional light drinking se zyada fark nahi padta – lekin regular ya heavy alcohol use ED ko directly worsen karti hai. Alcohol testosterone suppress karta hai, nervous system slow karta hai, aur liver damage se hormonal imbalance hota hai. Agar ED chal rahi hai to alcohol bilkul band ya minimal karna treatment ka pehla step hai.',
    },
    {
      _key: 'faq-13',
      question: 'ED ke liye kya khaana chahiye?',
      answer: 'Blood flow aur testosterone dono support karne wale foods best hain – lahsun, chukander juice, palak, anaar, ande, badaam aur akhrot. Zinc-rich foods (kaddu ke beej, meat) aur Vitamin D (dhoop, eggs, dairy) testosterone support karte hain. Processed food, sugar, maida, aur fried food avoid karna equally important hai – ye insulin resistance aur artery damage dono karte hain.',
    },
    {
      _key: 'faq-14',
      question: 'Kya ED mein exercise se fayda hota hai?',
      answer: 'Haan – exercise ED ka sabse proven non-medicine treatment hai. Cardio exercise (walking, running, cycling) blood flow improve karta hai. Pelvic floor exercises (Kegel) erection quality aur control directly improve karte hain. Weight loss akele bhi ED mein dramatically improvement la sakti hai – obesity se testosterone-estrogen balance bigad jaata hai.',
    },
    {
      _key: 'faq-15',
      question: 'Kya ED ka ilaaj ghar pe ho sakta hai?',
      answer: 'Mild-to-moderate psychogenic ya lifestyle-related ED mein ghar pe bohot kuch kiya ja sakta hai – smoking band karna, exercise shuru karna, neend theek karna, alcohol kam karna, aur stress manage karna. Ye sab milke significant improvement laate hain. Lekin agar diabetes, BP, ya hormonal issue ho to sirf ghar ke upay kaafi nahi – proper medical treatment zaroori hai.',
    },
    {
      _key: 'faq-16',
      question: 'Kya ED se infertility hoti hai?',
      answer: 'Direct link nahi hai – sperm production alag process hai erection se. Lekin agar ED ki wajah se penetrative sex possible nahi ho to natural conception mein mushkil hogi. Testosterone ki kami (hypogonadism) dono – ED aur low sperm count – dono ko ek saath affect kar sakti hai. Agar conception try kar rahe ho to specialist se milna zaroori hai.',
    },
    {
      _key: 'faq-17',
      question: 'Kya raat ko neend mein erection aana yaani problem nahi hai?',
      answer: 'Haan – agar raat ko ya subah uthne pe erection aati hai (nocturnal / morning erection) to physical cause unlikely hai. Ye sign hai ki blood flow aur nerves theek kaam kar rahe hain – ED psychological ya situational hai. Ye bahut important diagnostic clue hai jo doctor ko psychogenic ED identify karne mein help karta hai.',
    },
    {
      _key: 'faq-18',
      question: 'Kya ED sirf elderly (budhon) ko hoti hai?',
      answer: 'Ye ek badi galat faimi hai. ED ki frequency age ke saath zaroor badhti hai – lekin aajkal 25-35 age group mein bhi cases tezi se badh rahe hain. Young men mein main causes hain: stress, pornography overuse, sedentary lifestyle, aur anxiety. 40+ mein physical causes dominant ho jaate hain. Age koi excuse nahi hai – treatment sab age groups mein effective hai.',
    },
    {
      _key: 'faq-19',
      question: 'Kya psychological counselling se ED theek hoti hai?',
      answer: 'Psychogenic ED mein – haan, counselling bahut effective hai. Sex therapy, cognitive behavioral therapy (CBT), aur couples counselling sabne evidence-based results dikhaye hain. Homeopathy ke saath counselling ka combination psychogenic ED mein excellent outcomes deta hai. Ye weakness nahi, smart approach hai.',
    },
    {
      _key: 'faq-20',
      question: 'ED mein konse tests karaane chahiye?',
      answer: 'Doctor usually recommend karte hain: fasting blood sugar (diabetes check), lipid profile (cholesterol), testosterone level (total aur free), thyroid function (TSH), aur BP measurement. Agar zaroori lage to penile Doppler ultrasound bhi kiya ja sakta hai blood flow check karne ke liye. Ye tests cause identify karne mein help karte hain – treatment tabhi effective hogi.',
    },
    {
      _key: 'faq-21',
      question: 'Kya ayurvedic aur homeopathic treatment mein fark hai ED ke liye?',
      answer: 'Dono systems alag hain. Ayurveda herbs (ashwagandha, shilajit, safed musli) testosterone support aur energy ke liye use karta hai – aur kuch evidence bhi hai. Homeopathy constitutional approach leta hai – patient ki complete picture (physical + mental + emotional) ke hisaab se individualized medicine deta hai. Dono safe hain – lekin self-medication dono mein risky hai. Qualified practitioner se milna zaroori hai dono ke liye.',
    },
    {
      _key: 'faq-22',
      question: 'Kya pornography se ED ho sakti hai?',
      answer: 'Haan – ye increasingly recognized condition hai jise PIED (Porn-Induced Erectile Dysfunction) kehte hain. Excessive pornography use se brain ki reward system desensitized ho jaati hai – real partner ke saath arousal mushkil ho jaata hai. Young men mein ED ka ye ek major aur bahut underdiagnosed cause hai. Treatment mein pornography abstinence + psychotherapy + homeopathy combination effective paya gaya hai.',
    },
  ],

  relatedDiseases: [
    { _type: 'reference', _ref: 'disease-male-infertility' },
    { _type: 'reference', _ref: 'disease-anxiety' },
    { _type: 'reference', _ref: 'disease-depression' },
    { _type: 'reference', _ref: 'disease-bph' },
    { _type: 'reference', _ref: 'disease-insomnia' },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Erectile Dysfunction created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/erectile-dysfunction')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
