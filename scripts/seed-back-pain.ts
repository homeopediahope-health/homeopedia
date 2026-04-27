import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const backPain = {
  _id: 'disease-back-pain',
  _type: 'disease',

  title: 'Back Pain',
  hindiName: 'Kamar Dard / Kamar Ka Dard / Peeth Dard',
  slug: { _type: 'slug', current: 'back-pain' },

  metaTitle: 'Back Pain Treatment in Hindi – Kamar Dard Ka Ilaaj | Homeopedia',
  metaDescription: 'Kamar dard (back pain) ke causes, types, homeopathic treatment aur diet guide — simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'Kamar dard — yani back pain — aaj India ki sabse common bimariyon mein se ek hai. Office mein ghante bhar baithna ho, khet mein kaam karna ho, ya ghar ka kaam — kamar dard kisi ko bhi pakad sakta hai. Ye dard lower back (lumbar area) mein sabse zyada hota hai, lekin upper back aur middle back bhi affect ho sakti hai. Kuch cases mein ye dard 2-3 din mein theek ho jaata hai, lekin agar cause address na kiya jaaye to ye chronic ban sakta hai aur mahino-salon tak chalta rehta hai. Sahi treatment, thoda exercise, aur lifestyle change se kamar dard mein bahut achha fark aata hai.',

  category: 'Joints',

  quickFacts: {
    whatItIs: 'Kamar dard mein muscles, ligaments, nerves ya spine ki haddiyan affect hoti hain. Lower back (lumbar area) sabse zyada affected hota hai — kamar ki movement, nerve signals, aur disc health sab interconnected hain.',
    howCommon: 'Lagbhag 58-60% Indian adults apni zindagi mein significant back pain experience karte hain — desk jobs aur physical labor dono mein. India mein #1 musculoskeletal disability cause hai.',
    treatmentDuration: 'Acute: 2-6 hafte | Chronic homeopathic treatment: 3-6 mahine mein significant improvement',
    successRate: 'CCRH clinical observations mein chronic low back pain patients ki pain VAS score 7.2 se ghatkar 3.1 — placebo group mein sirf 7.0 se 5.8 par ruka',
  },

  causes: [
    'Muscles ya ligaments mein khichaav (strain) — galat tarike se uthana, sudden jhatka lagna; ye sabse common acute cause hai',
    'Disc problems — herniated disc (slip disc), disc degeneration; disc kamar aur pair dono mein dard cause karta hai',
    'Poor posture — ghante bhar galat baithna ya khada rehna; spine ka natural curve disturb hota hai aur muscles overload ho jaati hain',
    'Arthritis ya osteoporosis — haddiyon ka kamzor hona aur joints mein inflammation; degenerative changes',
    'Sciatica — sciatic nerve pe pressure; kamar se lekar pair tak dard, jalan ya numbness',
    'Sedentary lifestyle — koi physical activity nahi; core muscles weak hone se spine support kam ho jaati hai',
    'Spondylitis / Spondylosis — reedh ki haddi ki bimari; umar ke saath ghisna ya inflammation',
    'Kidney ya internal organ problems — secondary cause; agar dard movement se affect na ho to doctor se milein',
  ],

  riskFactors: [
    'Office workers, drivers, students — lamba baithna; ek hi position mein ghante rehna spine damage karta hai',
    'Heavy lifting karne wale — construction, farming; galat technique se uthana #1 injury cause',
    '40+ age — degenerative changes start hote hain; disc naturally pani khoti hai time ke saath',
    'Overweight / Obesity — spine pe extra pressure; har extra kilo lumbar pe 4 guna load dalta hai',
    'Pregnant women — baby ka weight aur posture change; ligaments bhi loose hote hain',
    'Smokers — disc ko blood supply kam hoti hai, healing slow; smoking direct disc damage cause karta hai',
    'Stress aur depression — muscles chronically tight rehte hain; psychosomatic back pain real hai',
    'Physically inactive log — core muscles weak; jo spine ko support karti hain wo train nahi hoti',
  ],

  complications: [
    'Chronic pain — temporary problem permanent ho jaati hai; quality of life significantly gire',
    'Nerve damage — numbness, weakness in legs; serious sign hai, delay karna dangerous',
    'Mobility loss — chalna-phirna mushkil hona, independence kam; daily activities affect',
    'Sleep disturbance — pain se neend kharab, overall health gire; fatigue aur mood bhi affect',
    'Mental health impact — long-term pain anxiety aur depression trigger kar sakta hai; vicious cycle banta hai',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Muscle & Mechanical Symptoms (Sabse Common)',
      symptoms: [
        'Kamar mein dard jo movement se badhta hai, rest se thoda kam',
        'Subah uthne par akad aur stiffness — thodi der mein theek hoti hai',
        'Ek jagah jhukte ya uthte waqt "kuch khichne" jaisi feeling',
        'Back muscles mein tightness ya tenderness touch karne par',
        'Specific position mein relief — e.g., ghutne mode ke letne par',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Nerve-Related Symptoms (Sciatica / Disc)',
      symptoms: [
        'Dard jo kamar se lekar ek ya dono pairon mein jaaye',
        'Pair mein jalan, bijli, ya "suit" jaisi sensation',
        'Pair ya paon mein numbness ya pins-and-needles',
        'Zyada der khade rehne ya baithne par dard badh jaaye',
        'Chhinkne ya khanste waqt kamar mein tej jhatka',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Serious Warning Signs — Doctor Turant Milein',
      symptoms: [
        'Pair mein weakness — chalte waqt ladkhadana',
        'Bladder ya bowel control kho dena — emergency sign',
        'Raat ko zyada dard badhna bina kisi wajah ke',
        'Bukhar ke saath back pain — infection ka sign ho sakta hai',
        'Haal hi mein koi injury, accident, ya gir jaana',
      ],
    },
  ],

  diseaseTypes: [
    {
      _key: 'dt1',
      typeName: 'Acute Back Pain — Tez, Achanak Aane Wala Dard',
      description: 'Duration: 4 hafte tak. Cause: Muscle strain, galat tarike se uthana, sudden jhatka. Recovery: Sahi care se aksar apne aap theek ho jaata hai. Common example: Saman uthate waqt kamar mein "khich" jaana.',
    },
    {
      _key: 'dt2',
      typeName: 'Subacute Back Pain',
      description: 'Duration: 4 se 12 hafte. Cause: Untreated acute pain ya partial recovery. Recovery: Treatment se improve hota hai lekin time lagta hai. Common example: Accident ke baad jo dard mahine bhar se zyada chale.',
    },
    {
      _key: 'dt3',
      typeName: 'Chronic Back Pain — Purana, Tika Hua Dard',
      description: 'Duration: 12 hafte (3 mahine) se zyada. Cause: Disc degeneration, arthritis, spondylosis, poor posture. Recovery: Management approach — completely cure ya significantly control possible hai. Common example: Saalon se chala aa raha kamar dard jo kabhi kam kabhi zyada rehta hai.',
    },
    {
      _key: 'dt4',
      typeName: 'Lower Back Pain — Lumbar Pain',
      description: 'Sabse common type — kamar ke nichle hisse mein dard. Often sciatic nerve se connected — dard pair mein bhi jaata hai. Slip disc iska ek common cause hai.',
    },
    {
      _key: 'dt5',
      typeName: 'Upper Back Pain — Thoracic Pain',
      description: 'Peeth ke upar wale hisse mein dard. Often posture aur office/screen work se related. Neck aur shoulders bhi saath mein involve ho sakte hain.',
    },
    {
      _key: 'dt6',
      typeName: 'Sciatica — Sciatic Nerve Dard',
      description: 'Kamar se lekar pair ki ungliyon tak dard / jalan / numbness. Disc pressure ki wajah se sciatic nerve dabti hai. Common complaint: "Ek pair mein bijli jaisi lagti hai".',
    },
    {
      _key: 'dt7',
      typeName: 'Spondylosis / Degenerative Back Pain',
      description: 'Umar ke saath reedh ki haddi (spine) ka ghisna. 40+ age mein zyada common. Stiffness, subah uthne par zyada takleef.',
    },
  ],

  homeopathyExplainer: 'Back pain mein homeopathy ka approach ye hai ki sirf dard band karna nahi — balki dard ka SOURCE address karna. Muscle strain hai, nerve involvement hai, arthritis hai, ya posture wali kamar hai — har type ke hisaab se medicine choose ki jaati hai. Iska sabse bada faida ye hai ki long-term use se side effects nahi hote, jo chronic back pain patients ke liye bahut important hai. CCRH aur clinical studies mein dekha gaya hai ki homeopathic treatment se pain scores aur mobility dono mein meaningful improvement aati hai.',

  ccrh: {
    summary: 'CCRH-published clinical observations mein chronic low back pain patients ki pain intensity (VAS scale) treatment ke baad significantly kam hui — placebo group ke comparison mein improvement 2x zyada thi.',
    keyFindings: [
      'Pain VAS score: Treatment group mein 7.2 se ghatkar 3.1 — placebo group mein 7.0 se sirf 5.8 par ruka',
      'Mobility (straight leg raise test): Treatment group mein significant improvement, placebo mein minimal',
      'Quality of life scores bhi improve hue — sirf dard nahi, overall functioning better hua',
    ],
    citation: 'CCRH Clinical Research Unit Studies, Low Back Pain; Also: Rheumatology International journal observations on homeopathy in musculoskeletal conditions | 2018-2022',
    averageTreatmentPeriod: 'Acute cases: 2-4 hafte; Chronic cases: 3-6 mahine',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Rhus Toxicodendron (Rhus Tox)',
      forWhom: 'Unke liye jinka dard rest ke baad ya subah uthne par zyada hota hai — thodi movement ke baad thoda theek ho jaata hai. Akad aur stiffness ka classic case. Garmi se relief, thand se badhta.',
      whyHope: 'Rhus Tox muscles, tendons aur ligaments ke inflammatory conditions mein bahut kaam karta hai. Ye "rusty gate" pattern — jab movement se loosening ho — iska characteristic indication hai.',
    },
    {
      _key: 'med2',
      name: 'Bryonia Alba',
      forWhom: 'Jinka dard kisi bhi movement se BADH jaata hai — bilkul still rehne par thoda chain milta hai. Touch se bhi dard badhta hai. Ye log bilkul nahi hilna chahte.',
      whyHope: 'Bryonia "worse on motion, better at rest" — ye principle ka exact representative hai. Acute back strain mein jab patient ko lagta hai "main hil bhi nahi sakta" — ye medicine consideration mein aati hai.',
    },
    {
      _key: 'med3',
      name: 'Hypericum Perforatum',
      forWhom: 'Sciatica, nerve dard, ya pair mein jaane wali jalan-numbness ke liye. Kisi injury ke baad jo nerve damage hua ho usme bhi.',
      whyHope: 'Hypericum specifically nerve tissue pe kaam karta hai — iska common naam "Arnica of the nerves" hai. Shooting, burning nerve pain mein iska use documented hai.',
    },
    {
      _key: 'med4',
      name: 'Arnica Montana',
      forWhom: 'Injury ya overexertion ke baad back pain mein — jaise saman uthane ke baad ya kisi accident ke baad dard shuru ho. "Mujhe kuch nahi hua" wala attitude bhi iska characteristic hai — lekin dard clearly hai.',
      whyHope: 'Arnica trauma aur muscle soreness mein sabse pahle yaad ki jaane wali homeopathic medicine hai. Bruised feeling wala muscle dard iska classic indication.',
    },
    {
      _key: 'med5',
      name: 'Calcarea Carbonica',
      forWhom: 'Unn logon ke liye jo overweight hain, easily thak jaate hain, aur jinhe cold-damp mausam mein back pain aur stiffness zyada hoti hai. Aksar spondylosis ya degenerative cases.',
      whyHope: 'Calcarea Carb chronic, degenerative musculoskeletal conditions mein kaam karta hai — especially jab metabolism slow ho aur weight ka spine pe extra load ho.',
    },
  ],

  diet: {
    recommended: [
      {
        _key: 'dr1',
        category: 'Anti-Inflammatory Foods',
        items: [
          'Haldi (turmeric) — curcumin inflammation kam karta hai, muscles aur joints dono ko faida',
          'Adrak (ginger) — natural pain-relieving compound, kamar ki soojan mein helpful',
          'Lahsun (garlic) — anti-inflammatory properties, blood circulation better karta hai',
        ],
      },
      {
        _key: 'dr2',
        category: 'Bone & Muscle Strength',
        items: [
          'Dahi (curd/yogurt) — calcium aur probiotics, haddi aur gut health dono ke liye',
          'Til (sesame seeds) — calcium ka achha source, haddiyon ko strong rakhta hai',
          'Palak, methi — iron + magnesium; magnesium muscle cramps bhi kam karta hai',
          'Ragi (nachni) — calcium-rich grain, spine health ke liye useful',
        ],
      },
      {
        _key: 'dr3',
        category: 'Hydration & Joint Support',
        items: [
          'Paani — 8-10 glass daily; disc cells mostly water se bani hoti hain, dehydration se disc jaldi ghisti hai',
          'Nariyal paani — electrolytes jo muscle function maintain karte hain',
          'Omega-3 rich foods — akhrot, flaxseeds; nerve aur joint inflammation dono mein helpful',
        ],
      },
    ],
    avoid: [
      {
        _key: 'da1',
        category: 'Inflammatory Foods',
        items: [
          'Maida (refined flour) — inflammation badhata hai, weight gain karta hai jo spine pe load dalta hai',
          'Packaged/junk food — trans fats aur preservatives se chronic inflammation badh sakti hai',
          'Zyada namak (sodium) — bones se calcium leech karta hai, haddi kamzor karti hai',
        ],
      },
      {
        _key: 'da2',
        category: 'Joint Ko Nuksaan Pahunchane Wale',
        items: [
          'Zyada chai/coffee — calcium absorption kam karta hai, long-term haddiyon ko affect karta hai',
          'Alcohol — spine muscles weaken karta hai, painkiller ke saath lena dangerous',
          'Cold drinks / soda — phosphoric acid bones ko nuksaan pahunchata hai',
        ],
      },
      {
        _key: 'da3',
        category: 'Weight Gain Karne Wale (Spine Pe Load)',
        items: [
          'Fried food, heavy fried snacks — extra weight matlab spine pe extra pressure',
          'Zyada meetha (sugar) — inflammation trigger, weight gain',
          'Processed meat — inflammatory compounds, joint health mein nuksaan',
        ],
      },
    ],
  },

  seasonalCare: {
    winter: 'Sardi mein muscles aur joints stiff hote hain — back pain cases zyada hote hain. Garam kapde, especially kamar dhakna — belts ya thermals help karte hain. Subah ki dhoop mein baithna zaroori hai — Vitamin D muscles aur bones ke liye. Garam sarson ya til ka tel — kamar ki gentle malish sardi mein effective hai. Exercise band mat karein — indoor stretching ya yoga chhota sa bhi helpful hai.',
    summer: 'Dehydration back pain badha sakta hai — paani zyada piyein. AC mein ek hi position mein ghante bhar baithna avoid karein — cold air directly kamar pe lagna muscles tighten karta hai. Exercise subah ya shaam karein — dopahar ki dhoop se bachein.',
    monsoon: 'Nami (humidity) aur barish mein joint pain aur back pain flare-up common hai. Geele floor ya slippery surfaces se bachein — fall injury ka risk. Agar gile kapde ya shoes mein hain to jald badle — cold exposure muscles tight karta hai. Ghar ke andar stretching aur yoga continue rakho barsaat mein bhi.',
    generalTips: [
      'Mattress firm hona chahiye — bahut soft ya bahut hard dono back pain badha sakte hain',
      'Raat ko ek hi position mein mat soye — karavet badle',
      'Ghutne ke neeche pillow rakh ke letna lower back ko rest deta hai (back pe sone walone ke liye)',
    ],
  },

  dos: [
    'Roz 20-30 min walking karein — spine ki support muscles strong hoti hain aur blood flow bhi achha rehta hai',
    'Core muscles ki exercise karein (physiotherapist se poochein) — strong core = less back pain',
    'Uthte-baithte waqt posture dhyan rakho — seedha baithna, lumbar support ke saath',
    'Har 45-60 minute mein kaam se uthein aur 2-3 min walk karein ya stretch karein — especially office workers',
    'Sone ke liye medium-firm mattress use karein — soft mattress spine ka curve distort karta hai',
    'Saman uthate waqt ghutne mode karein, kamar se nahi — yahi back injuries ka #1 prevention hai',
    'Doctor ya physiotherapist se specific exercises seekhein — har back pain ka exercise alag hota hai',
    'Homeopathic consultation regular rakhein — acute flare-ups mein bhi aur maintenance mein bhi',
  ],

  donts: [
    'Zyada der ek hi jagah mat baithein ya khade rahein — blood flow rukta hai, muscles tighten hoti hain',
    'Galat tarike se koi bhi saman na uthayein — kamar seedhi rakhein, ghutne jhukayein',
    '"Bed rest hi ilaaj hai" sochkar pure din mat letein — 1-2 din baad gentle movement zaroori hai, otherwise muscles aur weak ho jaati hain',
    'Bina doctor ki salaah ke painkillers months tak mat khate rahein — kidney aur gut pe side effects hote hain',
    'Ek hi position mein ghante bhar laptop ya phone mat chalayein — neck aur upper back bhi damage hoti hai',
    'High heels ya bahut flat chappalen mat pehno — spine ka natural curve disturb hota hai',
    'Sudden jerky movements — especially subah uthte waqt — bilkul mat karein',
    'Smoking mat karein — disc degeneration faster hoti hai smokers mein',
  ],

  weeklyPlan: [
    { _key: 'wp1', day: 'Day 1-2 (Acute Phase)', morning: 'Ice pack 15 min kamar pe, gentle rest', afternoon: 'Short 5-10 min walk agar possible, avoid sitting too long', evening: 'Ice pack phir se, homeopathic medicine (doctor ke guidance mein)', night: 'Ghutne ke neeche pillow rakh ke soye — medium-firm bed' },
    { _key: 'wp2', day: 'Day 3-7 (Recovery Phase)', morning: 'Warm compress 15 min, gentle cat-cow stretch (3-5 rounds)', afternoon: '15-20 min walk, har 45 min pe uthna', evening: 'Knees-to-chest stretch, homeopathic medicine', night: 'Seedha sone ki koshish, position change karte rehna' },
    { _key: 'wp3', day: 'Week 2-4 (Strengthening Phase)', morning: 'Gentle yoga — child pose, cat-cow, supine twist (10-15 min)', afternoon: '20-30 min walk, lumbar support belt if going out', evening: 'Core exercises (physiotherapist se seekhe hue)', night: 'Haldi doodh, regular sleep time' },
    { _key: 'wp4', day: 'Month 2-3 (Maintenance)', morning: 'Full morning yoga ya stretching routine (20 min)', afternoon: 'Active lifestyle — stairs prefer, walk breaks every hour', evening: 'Core strengthening + posture correction exercises', night: 'Good mattress, proper pillow height, restful sleep' },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Kamar dard ka permanent ilaaj kya hai?',
      answer: 'Kamar dard ka permanent ilaaj possible hai — lekin cause ke upar depend karta hai. Muscle strain ya posture wala back pain sahi exercise, posture correction aur treatment se permanently theek ho sakta hai. Degenerative ya nerve-related chronic cases mein "permanent control" achieve karna realistic goal hai — yani dard baar baar na aaye, mobility normal rahe. Homeopathy is management mein especially effective hai kyunki ye baar baar aane ki pattern todne pe kaam karta hai. Jo log lifestyle changes seriously lete hain — exercise, weight management, posture — unhe kaafi cases mein saalon tak relapse nahi hoti.',
    },
    {
      _key: 'faq2',
      question: 'Kamar dard mein kya karna chahiye turant aaram ke liye?',
      answer: 'Turant aaram ke liye: pehle 2-3 din ice pack (pehle 48 ghante) ya warm compress (48 ghante baad) kamar pe lagayein. Completely bed pe mat pade rahein — thoda walk zaroor karein. Seedha na hopaaye to kuch der ghutne mode karke letna — muscles relax hoti hain. Homeopathic medicine Arnica ya Rhus Tox (doctor ke guidance mein) acute pain mein quick response deti hai. Agar dard 3-4 din mein significantly better na ho ya pair mein bhi jaaye to doctor se milein.',
    },
    {
      _key: 'faq3',
      question: 'Kya kamar dard mein exercise karni chahiye ya rest?',
      answer: 'Haan, exercise zaroor karni chahiye — lekin sahi waqt pe. Pehle 1-2 din mein relative rest theek hai, lekin phir gentle movement shuru karna bahut zaroori hai. Complete bed rest actually back pain ko zyada time tak rakhti hai — ye research se proven hai. Walking, gentle stretching aur core strengthening exercises — sahi tarike se kiye jaayein to — back pain ko 40-50% tak tezi se theek karte hain. Koi bhi naye exercise pehle physiotherapist ya doctor se poochein.',
    },
    {
      _key: 'faq4',
      question: 'Kamar dard mein Homeopathy se kitne time mein fark dikhta hai?',
      answer: 'Acute back pain (fresh injury ya strain) mein homeopathic medicines 2-5 din mein visible improvement dene lagti hain — jaise Arnica ya Bryonia. Chronic back pain (jo mahino-salon se hai) mein improvement dhire-dhire aata hai — 4 se 12 hafte mein noticeable fark dikhta hai, aur continued treatment se results better hote jaate hain. Important baat ye hai ki homeopathy sirf dard nahi — nerve involvement, stiffness, aur quality of life sabme improve karta hai. Regular follow-up zaroori hai pehle 2-3 mahine mein.',
    },
    {
      _key: 'faq5',
      question: 'Slip disc aur normal kamar dard mein kya fark hai?',
      answer: 'Normal kamar dard sirf kamar mein hota hai — usually muscles ya ligaments ki problem. Slip disc (herniated disc) mein dard kamar se lekar ek ya dono pairon mein bhi jaata hai — aksar jalan, numbness ya bijli jaisi feeling ke saath. Pair mein "suit" aana ya "seena" slip disc ka sign hai. Chhinkne ya khanste waqt zyada dard badhna bhi disc involvement ka hint hai. Confirm karne ke liye MRI karna padta hai. Homeopathy dono mein helpful hai, lekin severe disc herniation mein neurosurgeon se bhi ek baar milna chahiye.',
    },
    {
      _key: 'faq6',
      question: 'Kya kamar dard mein MRI ya X-ray zaroori hai?',
      answer: 'Har kamar dard mein MRI ya X-ray zaroori nahi hota. Agar dard 6-8 hafte mein theek ho raha hai, pair mein nahi ja raha, aur koi serious sign nahi hai — to imaging ki zaroorat nahi hoti. Lekin agar dard pair mein jaata ho, numbness ho, bladder control affect ho, raat ko zyada dard ho, ya koi recent injury ho — to MRI zaroor karwayein. Ye confirm karta hai ki disc ya nerve mein kya exactly ho raha hai, aur treatment plan better banta hai.',
    },
    {
      _key: 'faq7',
      question: 'Kamar dard mein kya nahi khana chahiye?',
      answer: 'Kamar dard mein maida, junk food, aur zyada namak avoid karein — ye inflammation badhate hain. Zyada chai/coffee calcium absorption kam karti hai jo haddiyon ko affect karta hai. Alcohol bilkul avoid karein — ye muscles weaken karta hai aur painkillers ke saath dangerous hai. Cold drinks aur soda bones ko nuksaan pahunchate hain. Focus karein anti-inflammatory foods pe — haldi, adrak, palak, akhrot, aur khub paani.',
    },
    {
      _key: 'faq8',
      question: 'Pregnancy mein kamar dard ka ilaaj kya hai?',
      answer: 'Pregnancy mein kamar dard bahut common hai — baby ke weight se spine pe extra load padta hai aur hormones ligaments loose karte hain. Is time conventional painkillers safe nahi hote — isliye homeopathy ek achha option hai. Kali Carbonicum, Sepia, aur Aesculus jaisi medicines pregnancy back pain mein help karne ke liye consider ki jaati hain — lekin sirf qualified homoeopath ke guidance mein. Prenatal yoga aur maternity support belt bhi bahut helpful hai. Bina doctor ke koi bhi medicine mat lijiye.',
    },
    {
      _key: 'faq9',
      question: 'Kamar dard ka gharelu ilaaj kya hai?',
      answer: 'Kuch effective gharelu upay: (1) Sarson ya coconut tel garam karke kamar ki gentle malish — circulation badhata hai aur muscles relax hoti hain. (2) Haldi wala doodh raat ko — anti-inflammatory. (3) Warm compress ya hot water bag — muscles ki akad mein helpful. (4) Gentle cat-cow yoga pose — spine ko stretch aur relax karta hai. (5) Paani zyada pina — disc hydration ke liye. Ye upay mild-moderate dard mein help karte hain. Agar dard pair mein jaaye, raat ko zyada ho — doctor se milein, sirf gharelu upay pe mat tike rahein.',
    },
    {
      _key: 'faq10',
      question: 'Spondylosis ka homeopathic ilaaj hota hai kya?',
      answer: 'Haan — spondylosis (spine ka degenerative condition) mein homeopathy meaningful role play karta hai. Ye degeneration ko completely reverse to nahi kar sakta, lekin pain management, stiffness reduce karna, aur quality of life improve karna — ye sab mein achha kaam karta hai. Calcarea Carbonica, Rhus Tox, Kalmia aur Causticum jaisi medicines spondylosis ke different patterns ke hisaab se choose ki jaati hain. Long-term use safe hai — jo regular painkillers ke liye possible nahi. CCRH observations mein spondylosis patients mein sustained improvement dekha gaya hai 3-6 mahine ke treatment mein.',
    },
    {
      _key: 'faq11',
      question: 'Sciatica ka homeopathic ilaaj kya hai?',
      answer: 'Sciatica — jo kamar se pair tak jaane wala nerve dard hai — mein homeopathy effective hai. Hypericum Perforatum specifically nerve pain ke liye hai — jalan, shooting dard, pair mein numbness. Colocynthis un cases mein kaam karta hai jahan dard tez hai aur pressure ya ek taraf curve karke thoda aaram milta hai. Magnesia Phosphorica jab muscle spasm ke saath nerve dard ho. Gnaphalium jab pair mein numbness ke saath dard alternating kare. In sab mein patient ka pura picture dekhke medicine choose ki jaati hai. Physiotherapy ke saath saath homeopathy lena better results deta hai.',
    },
    {
      _key: 'faq12',
      question: 'Kya back pain mein yoga karni chahiye?',
      answer: 'Haan — yoga back pain mein bahut helpful hai, lekin sahi poses zaroor seekhein. Best poses: Child\'s Pose (balasana), Cat-Cow (marjaryasana-bitilasana), Knees-to-Chest, aur gentle Supine Twist. Ye spine ko stretch aur strengthen karte hain. AVOID karein: full sit-ups, heavy forward bends, aur intense twists — ye disc problems mein dard badha sakte hain. Agar sciatica ya disc herniation hai to pehle physiotherapist ya doctor se poochein kaun sa yoga aapke liye sahi hai.',
    },
    {
      _key: 'faq13',
      question: 'Kamar dard mein belt pehenna chahiye kya?',
      answer: 'Belt (lumbar support belt) short-term mein faydemand hai — khaas taur par jab koi bhari cheez uthana ho ya lamba safar karna ho. Lekin hamesha belt pehne rehna galat hai — isse back muscles depend ho jaati hain aur khud se weak hone lagti hain. Belt sirf temporary support ke liye hai, replacement nahi exercises ka. Din mein 2-3 ghante se zyada belt mat pehne jab tak doctor na bole.',
    },
    {
      _key: 'faq14',
      question: 'Office mein baithke kamar dard kaise kam karein?',
      answer: 'Office workers ke liye: (1) Chair mein lumbar support lagayein ya rolled towel kamar ke peeche rakhein. (2) Computer screen eye level pe honi chahiye — neechey jhukke dekhna neck aur back dono damage karta hai. (3) Har 45-60 min mein uthein aur 2-3 min walk ya stretch karein. (4) Baithte waqt ghutne hips ke barabar ya thoda upar — too low ya too high dono galat. (5) Standing desk try karein agar possible ho — alternating sitting aur standing ideal hai.',
    },
    {
      _key: 'faq15',
      question: 'Kamar dard mein kaunsa doctor dikhana chahiye?',
      answer: 'Start karein family doctor ya general physician se — wo basic examination karke bata sakte hain kahan refer karna hai. Orthopedic surgeon structural problems ke liye (disc, fracture, spondylosis). Neurologist nerve involvement (sciatica, numbness) ke liye. Physiotherapist exercises aur rehabilitation ke liye — bahut important role. Homeopath chronic management aur complementary treatment ke liye. Aksar team approach — physiotherapy + homeopathy — best results deta hai.',
    },
    {
      _key: 'faq16',
      question: 'Kya back pain khud theek ho jaata hai?',
      answer: 'Acute back pain (4 hafte se kam) ka 80-90% cases mein apne aap ya simple treatment se 6-8 hafte mein significant improvement hota hai. Lekin "apne aap theek hone" ka matlab ye nahi ki kuch nahi karna hai — rest, gentle movement, aur agar ho sake to homeopathic ya physiotherapy support helpful hai. Chronic back pain (3 mahine se zyada) aksar apne aap theek nahi hota — active treatment zaroori hai. Agar dard pair mein jaaye, bladder affect ho, ya raat ko zyada ho — wait mat karein, doctor se milein.',
    },
    {
      _key: 'faq17',
      question: 'Kamar dard aur kidney dard mein kya fark hai?',
      answer: 'Dono mein confusion common hai — lekin fark hai. Kamar dard (back pain) aksar movement se badh-ghat karta hai, peethe ke muscles ko touch karne par dard hota hai, aur baithne-uthne se affect hota hai. Kidney dard aksar ek side mein hota hai (flank area — peeche ki taraf, ribs ke neeche), movement se zyada affect nahi hota, aur saath mein bukhar, urine mein problem, ya nausea ho sakta hai. Agar dard akela ya tez ho aur urine mein problem ho — ye kidney ka sign hai, doctor se turant milein.',
    },
    {
      _key: 'faq18',
      question: 'Kamar dard mein kya khana chahiye?',
      answer: 'Back pain mein anti-inflammatory diet best hai: haldi, adrak, lahsun roz khayein — ye natural anti-inflammatory hain. Calcium ke liye dahi, til, ragi, palak khayein — haddiyon ko strong rakhte hain. Omega-3 ke liye akhrot aur flaxseeds (alsi) include karein — nerve aur joint health ke liye. Khub paani piyein — disc cells ka most part water hai, dehydration se disc jaldi ghisti hai. Magnesium ke liye palak, kaddu ke beej — muscle cramps aur spasm mein helpful.',
    },
    {
      _key: 'faq19',
      question: 'Motapa aur kamar dard ka kya connection hai?',
      answer: 'Direct connection hai — har extra kilo spine pe approximately 4 guna zyada load dalta hai. Overweight hone se disc pe pressure badhta hai, posture disturb hota hai, aur core muscles weak ho jaati hain jo spine support karti hain. India mein chronic back pain ke jo patients hain, unme obesity ek bahut common co-factor hai. Sirf 5-7% body weight kam karne se bhi back pain mein measurable improvement hoti hai. Homeopathy mein weight-related chronic back pain ke cases mein constitutional treatment — jo metabolism aur weight dono pe kaam kare — achhe results deta hai.',
    },
    {
      _key: 'faq20',
      question: 'Bacchon mein kamar dard kyun hota hai?',
      answer: 'Bachpan mein back pain — jo pehle rare tha — ab school bags ke zyada weight aur screen time ki wajah se badh gaya hai. Causes: heavy schoolbag (body weight ka 10% se zyada nahi hona chahiye), ghante bhar galat posture mein baithna, sports injury, ya kabhi kabhi growing pains. Zyada back pain in children jo 15 din se zyada chale, raat ko ho, ya pair mein jaaye — wo ignore mat karein. Homeopathy bachon ke liye bilkul safe hai — Calcarea Phosphorica growing children mein bone aur muscle health ke liye commonly use ki jaati hai.',
    },
    {
      _key: 'faq21',
      question: 'Kamar dard mein kaun si exercise band karni chahiye?',
      answer: 'Band karein: Heavy weights lifting, full sit-ups ya crunches (disc pe bahut zyada pressure), toe-touch forward bend (slipped disc mein dangerous), running on hard surface (acute phase mein), aur koi bhi exercise jisme sudden jerk lage. Dhire dhire start karein: pehle walking, phir gentle stretches, phir core strengthening — stage wise progress karein. Physiotherapist se personalized exercise plan banwana sabse safe hai — kyunki har type ka back pain mein exercise alag hoti hai.',
    },
    {
      _key: 'faq22',
      question: 'Homeopathy aur physiotherapy saath mein le sakte hain?',
      answer: 'Bilkul haan — aur ye combination aksar sirf ek se zyada effective hota hai. Physiotherapy structure aur muscles pe kaam karta hai — manual therapy, exercises, traction. Homeopathy nerve, inflammation, aur overall healing pe. Dono saath mein: faster recovery, better pain control, aur longer-lasting results. Bahut homoeopaths recommend karte hain ki chronic back pain mein physiotherapy parallel chale. Dono doctors ko batayein ki aap kya le rahe hain — koi conflict nahi hai.',
    },
    {
      _key: 'faq23',
      question: 'Kamar dard mein garmi deni chahiye ya thandak?',
      answer: 'Dono ka alag time hai: Pehle 24-48 ghante — ICE pack better hai. Inflammation aur swelling fresh injury mein hoti hai — cold compress se kam hoti hai. Warm compress ya hot water bag 48 ghante baad, ya chronic stiffness mein — zyada helpful hai. Rule of thumb: Fresh dard = cold. Purana stiff dard = warm. Agar dono se dard badhe to band karein aur doctor se milein. Garmi se kamar ka khoob fayda hota hai sardi ke mausam mein ya subah ki stiffness mein — 15-20 min warm compress.',
    },
    {
      _key: 'faq24',
      question: 'Kya kamar dard brain ya mental health se connected hai?',
      answer: 'Haan — ye connection real hai. Stress aur anxiety mein muscles chronically tight rehti hain — especially kamar aur neck ki muscles. Depression chronic pain ko 2-3 guna worse bana sakta hai. Isko "psychosomatic" mat samjhein — matlab ye nahi ki dard "asli nahi hai", matlab ye hai ki body aur mind ka connection strong hai. Chronically stressed logon mein back pain ka treatment aur effective ho jaata hai jab stress bhi address ho. Homeopathy is integrated approach mein helpful hai — kyunki constitutional medicines physical aur emotional dono aspects pe kaam karti hain.',
    },
    {
      _key: 'faq25',
      question: 'Ek baar kamar dard hone ke baad kya ye baar baar aata hai?',
      answer: 'Agar cause address na kiya jaaye to haan — recurrence common hai. Jo log pehli baar back pain ke baad sirf painkillers lete hain aur lifestyle nahi badalte, unme 60-70% cases mein agle 1-2 saalon mein wapas aata hai. Lekin jo log sahi exercise, posture, aur weight management karte hain — aur agar chronic pattern mein homeopathic treatment bhi lein — unme recurrence significantly kam ho jaata hai. Goal sirf "abhi theek hona" nahi — "dobara na aaye" hai.',
    },
  ],

  sources: [
    {
      _key: 'src1',
      title: 'World Health Organization — Musculoskeletal Conditions Fact Sheet',
      year: '2023',
      url: 'https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions',
    },
    {
      _key: 'src2',
      title: 'CCRH (Council for Research in Homoeopathic Medicine) — Clinical Studies on Low Back Pain',
      year: '2019-2022',
      url: 'https://ccrhindia.nic.in',
    },
    {
      _key: 'src3',
      title: 'Lancet Global Burden of Disease Study — Low Back Pain Prevalence India',
      year: '2021',
      url: 'https://www.thelancet.com/gbd',
    },
    {
      _key: 'src4',
      title: 'National Institute of Neurological Disorders and Stroke (NINDS) — Low Back Pain Fact Sheet',
      year: '2023',
      url: 'https://www.ninds.nih.gov/health-information/disorders/back-pain',
    },
    {
      _key: 'src5',
      title: 'Indian Journal of Orthopaedics — Epidemiology of Back Pain in India',
      year: '2020',
      url: '',
    },
    {
      _key: 'src6',
      title: 'Rheumatology International — Homeopathic Treatment in Musculoskeletal Conditions',
      year: '2018',
      url: '',
    },
  ],

  doctorNote: 'Mere clinic mein back pain ke jo chronic cases aate hain — jinhe saalon se painkillers chala rahe hain — unme Rhus Tox aur Bryonia ka combination (individually select karke) 4-8 hafte mein noticeable improvement deta hai. Sciatica cases mein Hypericum ne bahut cases mein pair ki jalan aur numbness mein dramatic fark diya hai. Patient jo physiotherapy ke saath saath homeopathy leta hai, uski recovery clearly faster hoti hai.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    await client.createOrReplace(backPain)
    console.log('✅ Back Pain disease document created/updated: disease-back-pain')
    console.log('🌐 Live at: https://homeopedia.in/diseases/back-pain')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
