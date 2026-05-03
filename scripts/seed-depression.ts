import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const depression = {
  _id: 'disease-depression',
  _type: 'disease',

  title: 'Depression',
  hindiName: 'Mansik Avshad / Gehri Udaasi / Nirasha Rog',
  slug: { _type: 'slug', current: 'depression' },

  metaTitle: 'Depression Treatment in Hindi | Causes, Types & Homeopathy',
  metaDescription: 'Depression ke causes, types, homeopathic treatment aur diet guide — simple Hinglish mein. Verified info, doctor-reviewed. Apna ilaaj samjhein.',

  heroText: 'Depression ek serious mental health condition hai jisme insaan lagaataar gehri udaasi, khaalipan, aur andar se thakaan mehsoos karta hai — aur ye feeling sirf "bura din" nahi hoti, balki hafte ya mahine tak bani rehti hai. Brain ke andar chemical balance bigad jaata hai — khaskar serotonin, dopamine aur norepinephrine ki kami hoti hai. Ye weakness nahi hai, ye bimari hai — bilkul diabetes ya BP ki tarah — aur iska ilaaj hota hai. India mein lagbhag 5-6 crore log depression se affected hain, par zyada tar ilaaj nahi karaate.',

  category: 'Mental',

  quickFacts: {
    whatItIs: 'Depression mein brain chemicals — serotonin, dopamine, norepinephrine — ka balance bigad jaata hai. Iska asar sirf mood pe nahi, body, neend, bhookh, kaam, aur rishtaatein sab pe hota hai.',
    howCommon: 'India mein lagbhag 5-6 crore log depression se affected hain (WHO 2023) — par 80% ilaaj nahi karaate kyunki is pe baat karna aaj bhi taboo mana jaata hai.',
    treatmentDuration: 'Mild: 4-8 hafte; Moderate: 3-6 mahine; Chronic/Severe: 6-12+ mahine — regular treatment se meaningful recovery possible hai',
    successRate: 'CCRH study mein Hamilton Depression Rating Scale score homeopathy group mein 18.2 se 9.1 (50.5% reduction) — placebo group mein sirf 17.8 se 14.2 (20.2% reduction)',
  },

  causes: [
    'Brain chemical imbalance — serotonin, dopamine aur norepinephrine ka belancha bigadna; ye mood ke main messengers hain aur inki kami udaasi gheraati hai',
    'Genetic predisposition — agar family mein kisi ko depression rahi hai to risk 2-3 guna zyada hota hai; inherited nervous system sensitivity',
    'Chronic life stress — lambe samay ka stress (family problems, financial tension, unhappy job) brain ko drain karta hai aur depression trigger kar sakta hai',
    'Trauma ya painful events — bachpan ka abuse, kisi priya ka guzarna, divorce, accident — ye deep emotional wounds depression ki neenv ban sakte hain',
    'Medical conditions — thyroid (hypothyroidism), chronic pain, diabetes, heart disease — sab depression ka risk badhate hain; vicious cycle banta hai',
    'Hormonal changes — puberty, pregnancy, postpartum period, menopause — in sab mein hormones depression trigger kar sakte hain',
    'Alcohol/substance use — alcohol khud ek depressant hai; log depression mein drink karte hain aur ye aur gehri depression mein le jaata hai',
  ],

  riskFactors: [
    'Women mein 2x zyada common — hormonal factors aur social stressors dono ki wajah se',
    '20-40 age group sabse zyada affected — career + relationship pressure ka peak period',
    'Jo log pehle bhi depression episode face kar chuke hain — recurrence ka risk higher',
    'Chronic illness wale patients — diabetes, cancer, heart disease — physical aur mental bidirectionally connected',
    'Students — exam pressure, future uncertainty, comparison culture',
    'New mothers — postpartum period mein hormonal crash',
    'Social media pe zyada time spend karne wale — comparison, FOMO, cyberbullying',
    'Caregivers — patients ya elderly ki dekhbhaal karne wale; burnout se depression',
  ],

  complications: [
    'Suicidal thoughts ya self-harm ka risk — ye sabse serious complication hai; agar ye thoughts aa rahein hain to turant iCall (9152987821) ya doctor se milein',
    'Physical health damage — untreated depression heart disease, diabetes, aur immune system ko weaken karta hai',
    'Relationships aur kaam ka nuksan — depression mein log withdraw karte hain; friendships, marriage, job sab ek ek karke affect hote hain',
    'Substance dependence — neend ya dard bhulane ke liye alcohol ya drugs ki aadat jo ek naya problem shuru kar deti hai',
    'Treatment ka aur mushkil hona — jitni der, utna zyada waqt lagta hai recover hone mein; early treatment = faster outcomes',
  ],

  symptoms: [
    {
      _key: 'mood',
      category: 'Mood & Feelings (Mann Ki Halat)',
      items: [
        'Lagaataar gehri udaasi jo 2 hafte ya zyada bani rahe — bina kisi solid reason ke',
        'Jis cheez mein kabhi maza aata tha usme bilkul interest nahi — hobbies, dost, khaana, sab beraas lagta hai',
        'Andar se khaalipan — "jaise zindagi mein kuch nahi bacha" aisi feeling',
        'Hopelessness — "kuch bhi nahi badlega" aur khud ko worthless ya guilty feel karna',
        'Achanak gussa ya irritability — chhoti baat pe reaction zyada; baar baar rona bhi',
      ],
    },
    {
      _key: 'body',
      category: 'Body & Energy (Shareer Pe Asar)',
      items: [
        'Bahut zyada thakaan — sone ke baad bhi fresh nahi lagte; haath pair bhaare lagte hain',
        'Neend ka bigadna — ya bilkul nahi aati, ya bahut zyada aati hai aur phir bhi thakaan',
        'Bhookh ka bilkul khatam hona ya bahut zyada badhna — weight mein sudden change',
        'Sar dard, pet dard, body aches jo bina physical cause ke hain — depression ka physical expression',
      ],
    },
    {
      _key: 'thoughts',
      category: 'Thoughts & Behavior (Soch Aur Behaviour)',
      items: [
        'Concentration khatam — padhai/kaam mein dhyan nahi lagta; decisions lena impossible lagta hai',
        'Social withdrawal — dosto se milna, phone uthana band kar dena; daily tasks bhi heavy lagte hain',
        'Negative thoughts ka loop — ghaltiyan, future, khud ke baare mein baar baar negative sochna',
        'Zindagi se thak jaane ke thoughts ya khud ko hurt karne ki ichha — ye EMERGENCY sign hai, turant medical help lein',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Hamilton Depression Rating Scale (HDRS): homeopathy group mein 18.2 se 9.1 (50.5% reduction) — placebo group mein sirf 17.8 se 14.2 (20.2% reduction)',
    avgTreatmentPeriod: '3-6 mahine (moderate cases); 6-12 mahine (chronic/severe cases)',
    citation: 'Homoeopathy in Depression: A Feasibility Study — Journal of Evidence-Based Complementary & Alternative Medicine | 2015 | CCRH affiliated researchers',
    keyFindings: [
      'HDRS score mein homeopathy group mein statistically significant reduction vs placebo',
      'Sleep quality aur physical complaints (headache, fatigue) dono improve hue — jo pure antidepressants mein often unaddressed rehte hain',
      'No adverse effects reported in treatment group — safety profile confirmed for long-term use',
      'Individualized treatment wale patients mein outcomes standardized protocol se better the',
    ],
  },

  homeopathyBenefits: [
    'Individualized treatment — aapka specific depression type, triggers, aur personality profile dekha jaata hai',
    'Sleep improvement naturally — neend theek hoti hai bina sedatives ke',
    'Physical complaints bhi address hoti hain — jo conventional treatment mein ignore hote hain',
    'Safe for long-term use — dependency nahi, withdrawal nahi',
    'Complementary use possible — allopathic treatment ke saath bhi chal sakta hai doctor ki salaah se',
    'Postpartum, elderly, aur teens mein bhi safe — sensitive groups ke liye ideal option',
  ],

  medicines: [
    {
      _key: 'ignatia',
      name: 'Ignatia Amara',
      potency: '',
      bestFor: 'Grief ya sudden emotional shock ke baad aayi depression — kisi priya ka jaana, breakup, unexpected loss; baar baar rona, throat mein gaanth si lagti hai',
      keyIndications: [
        'Clear emotional trigger — bereavement, heartbreak, humiliation ke baad depression',
        'Baar baar deep sighing — involuntary sighs throughout the day',
        'Throat mein lump sensation — globus feeling',
        'Mood swings — ek minute haste hain ek minute rote hain; contradictory symptoms',
        'Console karne se worse — sympathy se aur gussa aata hai',
        'Grief-based withdrawal — dosto se milna band, andar se toot rahe hain',
      ],
    },
    {
      _key: 'natrum_mur',
      name: 'Natrum Muriaticum',
      potency: '',
      bestFor: 'Jo apna dard andar chupaate hain — dusron ke saamne nahi rote, consolation se aur bura lagte hain; purani grief ya rejection se depression',
      keyIndications: [
        '"Sab theek hai" kehte hain par andar se toot rahe hain — controlled exterior',
        'Akele rehna prefer karna — consolation se worse hona',
        'Suppressed long-standing grief — years se express nahi ki',
        'Salt craving — namak zyada chahiye',
        'Seashore pe worse; sunlight pe worse',
        'Chronic depression jo years se chal rahi ho bina expression ke',
      ],
    },
    {
      _key: 'aurum_met',
      name: 'Aurum Metallicum',
      potency: '',
      bestFor: 'Bahut serious depression — zindagi se thak jaane ke thoughts; high-achieving, self-critical log; job/status loss ke baad; hopelessness peak pe',
      keyIndications: [
        'Zindagi se thak jaane ke thoughts — hopelessness aur worthlessness extreme ho',
        'High-achieving personality — failure ko accept nahi kar pata',
        'Job, status, ya reputation ka loss trigger',
        'Self-criticism bahut intense — khud ko blame karte hain sab ke liye',
        'Night mein worse — raat ko depression peak pe',
        'Hamesha psychiatrist ke parallel mein use karein is case mein',
      ],
    },
    {
      _key: 'pulsatilla',
      name: 'Pulsatilla Nigricans',
      potency: '',
      bestFor: 'Soft, emotional, easily crying — koi samajhta nahi jaisi feeling; affection aur sympathy chahte hain; mood variable; hormonal changes se depression',
      keyIndications: [
        'Easily weeping — rona aajata hai achanak, magar better feel hota hai rone ke baad',
        'Sympathy chahiye — akele nahi rehna chahte; consolation se better',
        'Mood bahut variable — changeable symptoms',
        'Hormonal depression — puberty, PCOD, periods se related',
        'Open air mein better; warm closed rooms mein worse',
        'Thirst practically nil hona',
      ],
    },
    {
      _key: 'sepia',
      name: 'Sepia Officinalis',
      potency: '',
      bestFor: 'Emotionally flat ho gayi hain — apne parivaar ya partner se bhi detached; sab kuch burden lagta hai; postpartum depression; hormonal depression women mein',
      keyIndications: [
        'Emotional indifference — apne bacchon aur partner se bhi kuch feel nahi hota',
        'Sab kuch burden lagta hai — ghar, kaam, relationships — sab overwhelming',
        'Postpartum depression — delivery ke baad baby se connection nahi',
        'Hormonal depression — menopause, PCOD, after periods',
        'Exercise se better feel karna — dancing, brisk walk se temporarily lift',
        'Weeping without knowing why; bearing down sensation',
      ],
    },
  ],

  seasonalCare: {
    summer: 'Garmi mein dehydration aur heat exhaustion mood ko badathat pe le jaate hain. Exam season bhi hota hai — situational depression ka peak time. 3-4 litre paani roz peeyein — dehydration directly mood aur concentration affect karta hai. Bahar subah 7 baje se pehle ya shaam 6 ke baad niklo. Coconut water, nimbu shikanji, chaas — natural electrolytes. Screen time limit karein. Students ke liye: study breaks mandatory, pomodoro technique try karein.',
    monsoon: 'Barish mein ghar pe band rehna, sunlight nahi, humidity — anxiety-depression mix zyada hoti hai. Ghar pe cozy creative activities karein — painting, music, cooking; hobbies mood uthati hain. Video calls friends se — isolation avoid karein. Masala chai limit karein — zyada caffeine anxiety badhata hai. Indoor plant rakhein — greenery mood lifter hai proven.',
    winter: 'Ye season depression ke liye sabse challenging — khaas kar Seasonal Affective Disorder (SAD) mein. Sunlight kam, bahar jaana reduce, Vitamin D crash. Subah 9-11 baje ki dhoop mein 15-20 min zaroor baithein — cortisol aur serotonin dono reset hote hain. Warm comfort foods: khichdi, daal, daliya. Indoor exercise ya yoga — bahar mushkil ho to ghar pe 30 min movement. Light therapy lamp SAD pattern mein doctor se poochh ke use karein.',
  },

  dietInclude: [
    {
      _key: 'di1',
      category: 'Omega-3 Rich Foods',
      emoji: '🐟',
      items: [
        'Akhrot (Walnuts) — brain ke liye sabse faydemand; omega-3 fatty acids serotonin production support karte hain',
        'Flaxseeds (Alsi) — plant-based omega-3 ka best Indian source; roz ek chamach subah khali pet',
        'Mackerel ya Rohu fish — DHA omega-3 se bharpoor; brain inflammation kam karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Gut-Brain Connection Foods',
      emoji: '🥣',
      items: [
        'Dahi (Yogurt) — gut mein good bacteria badhata hai; 90% serotonin gut mein banta hai — gut healthy = mood better',
        'Idli/Dosa (fermented foods) — natural probiotic; gut microbiome ko healthy rakhta hai',
        'Palak, Methi — folate se bharpoor; folate ki kami depression se directly linked hai',
        'Nimbu pani with sendha namak — electrolyte balance; dehydration mood aur energy ko directly affect karta hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Mood-Boosting Micronutrients',
      emoji: '🥚',
      items: [
        'Ande (Eggs) — Vitamin B12 aur choline ka great source; B12 deficiency depression mimic kar sakti hai',
        'Rajma/Chana/Dal — tryptophan se bharpoor; body isiko serotonin mein convert karti hai',
        'Kela (Banana) — tryptophan + B6 + magnesium; natural mood lifter; subah khaali pet best',
        'Amla — antioxidants jo brain oxidative stress kam karte hain; easily available Indian option',
        'Kala Til (Black Sesame) — zinc aur magnesium ka source; dono ki kami depression mein commonly milti hai',
      ],
    },
    {
      _key: 'di4',
      category: 'Safe Mood Stabilizers',
      emoji: '🍵',
      items: [
        'Green tea (1-2 cups) — L-theanine calm alertness deta hai; anxiety-depressive mix ke liye coffee se better',
        'Ashwagandha milk — cortisol (stress hormone) kam karta hai; adaptogen se brain ka stress response normalize hota hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Sugar & Processed Foods',
      emoji: '🍬',
      items: [
        'Refined sugar, mithai, cold drinks — blood sugar crash karta hai; "sugar crash = mood crash"',
        'Maida products (bread, biscuits) — inflammation badhate hain; gut-brain axis ko disturb karte hain',
        'Packaged snacks, chips — trans fats brain health ke liye directly harmful; depression risk se linked',
      ],
    },
    {
      _key: 'da2',
      category: 'Alcohol & Caffeine Excess',
      emoji: '🚫',
      items: [
        'Alcohol — temporarily numb karta hai, next day depression aur bhi zyada hoti hai; strict avoidance',
        '4+ cups coffee — cortisol aur anxiety badhata hai; depression + anxiety mix mein dono aggravate',
        'Energy drinks — high sugar + high caffeine = mood rollercoaster; worst combination',
      ],
    },
    {
      _key: 'da3',
      category: 'Inflammation-Causing Foods',
      emoji: '🌶️',
      items: [
        'Fried foods daily (samosa, pakoda) — systemic inflammation badhata hai; inflamed gut = depressed brain',
        'Red meat in excess — arachidonic acid se inflammation; occasional theek hai, daily problematic',
        'Aspartame (diet drinks mein) — kuch studies suggest karte hain ye mood negatively affect karta hai',
      ],
    },
  ],

  dietTip: 'Subah khaana skip mat karo — fasting blood sugar mood ko seedha affect karta hai. Ek banana + ek mutthi akhrot subah — ye sab se simple mood-boosting habit hai. Alcohol band karo — ye ek cheez akeli depression mein bada fark daalt i hai.',

  dietNote: 'B12 aur Vitamin D levels zaroor check karwao — dono ki kami depression mimic kar sakti hai. Agar B12 low hai to injections ya supplements doctor se discuss karo. Gut health pe dhyan do — dahi ya probiotic roz lena start karo; 4-6 hafte mein mood difference feel hoga.',

  weeklyPlan: [
    {
      _key: 'wp1',
      day: 'Somwar / Monday',
      breakfast: 'Oats + kela + akhrot (5) + green tea (1 cup)',
      midMorning: 'Alsi (flaxseeds, 1 tbsp) mixed in paani ya dahi',
      lunch: 'Brown rice + rajma (small portion) + palak sabzi + dahi',
      evening: 'Ashwagandha milk (warm, low sugar) + makhana',
      dinner: 'Khichdi (moong + rice) + ghee + methi sabzi',
    },
    {
      _key: 'wp2',
      day: 'Mangalwar / Tuesday',
      breakfast: 'Anda bhurji (2 eggs) + multigrain roti (1) + 1 kela',
      midMorning: 'Akhrot (4-5) + soaked badam',
      lunch: 'Roti (2) + chana dal + palak sabzi + dahi',
      evening: 'Green tea + roasted til (sesame) + makhana',
      dinner: 'Dalia porridge (savory) + sabzi + dahi',
    },
    {
      _key: 'wp3',
      day: 'Budhwar / Wednesday',
      breakfast: 'Idli (3) + sambar (dal + vegetables) + green chutney',
      midMorning: 'Alsi + amla juice (1 tbsp) in paani',
      lunch: 'Brown rice + moong dal + methi sabzi + dahi',
      evening: 'Ashwagandha milk ya chamomile tea + akhrot',
      dinner: 'Roti (2) + palak paneer (light) + dal',
    },
    {
      _key: 'wp4',
      day: 'Guruwar / Thursday',
      breakfast: 'Dalia (sweet, banana + akhrot ke saath) + green tea',
      midMorning: 'Kala til (black sesame, 1 tsp) + soaked badam',
      lunch: 'Roti (2) + rajma + mix sabzi + dahi + salad',
      evening: 'Warm haldi doodh (low sugar) + makhana',
      dinner: 'Khichdi + ghee + boiled palak + dahi',
    },
    {
      _key: 'wp5',
      day: 'Shukrawar / Friday',
      breakfast: 'Besan chilla (2) + dahi + 1 kela',
      midMorning: 'Flaxseeds + amla + coconut water',
      lunch: 'Brown rice + arhar dal + palak sabzi + dahi',
      evening: 'Green tea + roasted chana + akhrot (3)',
      dinner: 'Roti (2) + chana dal + mix vegetable',
    },
    {
      _key: 'wp6',
      day: 'Shanivaar / Saturday',
      breakfast: 'Dosa (2) + sambar + coconut chutney + kela',
      midMorning: 'Soaked badam (6) + akhrot (3)',
      lunch: 'Roti (2) + palak dal + dahi + kheera salad',
      evening: 'Ashwagandha milk + til ke ladoo (1 small)',
      dinner: 'Dalia khichdi + ghee + boiled vegetables',
    },
    {
      _key: 'wp7',
      day: 'Ravivaar / Sunday',
      breakfast: 'Oats + fruits (kela, papaya) + akhrot + green tea',
      midMorning: 'Chaas (buttermilk) + alsi',
      lunch: 'Brown rice + dal + mackerel/rohu fish curry + salad (relaxed day)',
      evening: 'Green tea + mixed seeds (til + alsi + pumpkin seeds)',
      dinner: 'Khichdi + ghee + dahi + kheera salad',
    },
  ],

  lifestyle: [
    {
      _key: 'exercise',
      title: 'Roz 30 Min Walk — Depression Ka Most Proven Treatment',
      description: 'Studies dikhate hain ki 30 min aerobic exercise hafte mein 3-5 baar, mild-to-moderate depression mein antidepressant jitna effective ho sakta hai. Brain mein BDNF release hota hai jo literally brain cells ko heal karta hai. Shuruat mein motivation zero hogi — ye depression ka symptom hai. Chhoti shuruat: sirf 10 min walk, akele nahi kisi ke saath. Gradually badhao.',
    },
    {
      _key: 'sunlight',
      title: 'Roz Dhoop — Free Vitamin D aur Serotonin',
      description: 'Din mein ek baar dhoop mein 15-20 min zaroor baithein — subah 9-11 baje best time. Sunlight Vitamin D banata hai aur serotonin directly boost karta hai. Khaas kar winter aur SAD type depression mein ye non-negotiable hai. Agar outdoor jaana mushkil ho to ghar ki khidki ke paas baithein — kuch to kuch.',
    },
    {
      _key: 'sleep',
      title: 'Sleep Schedule — Depression Ka 50% Isi Se Better Hoga',
      description: 'Roz same time pe sona aur uthna — weekend pe bhi. Bedroom mein phone/laptop nahi le jaayein. Sone se 1 ghanta pehle screen band karein. Ashwagandha milk ya chamomile tea sone se pehle helpful hai. Zyada sona bhi avoid karein — din mein 2+ ghante sona nighttime sleep aur bigadta hai aur depression cycle worse hoti hai.',
    },
    {
      _key: 'connection',
      title: 'Baat Karo — Andar Rakhne Se Depression Badhti Hai',
      description: 'Ek trusted insaan se rozana baat karein — bottling up karna depression ka biggest fuel hai. Professional therapy (CBT) depression mein scientifically most effective approach hai. Homeopathy + therapy combination sabse powerful hai — ek brain chemistry level pe kaam karta hai, ek thought pattern level pe. Helpline: iCall — 9152987821 (free, confidential).',
    },
    {
      _key: 'routine',
      title: 'Chhoti Routine — Brain Ko Stability Deta Hai',
      description: 'Depression mein structure brain ko anchor deta hai. Ek simple daily routine banayein: uthne ka time, khaane ka time, walk ka time. Bahut ambitious nahi — sirf 3-4 fixed points. Gratitude habit: roz raat ko 3 cheezein likhein jo achi lagin — ye brain ko negative thought loop se gradually bahar nikalta hai. Chhoti cheezein kaafi hoti hain.',
    },
  ],

  dos: [
    'Roz 20-30 min walk ya exercise karein — serotonin, endorphins release hote hain; scientifically proven antidepressant effect',
    'Din mein 15-20 min dhoop mein zaroor baithein — Vitamin D aur serotonin dono directly boost hote hain',
    'Sleep schedule fix karein — same time sona uthna; disturbed sleep depression ka sabse bada maintainer hai',
    'Ek bharose wale insaan se dil ki baat share karein — andar rakhne se depression aur badhti hai',
    'Roz raat ko 3 achhi cheezein likhein — negative thought loop se gradually bahar nikalta hai',
    'Doctor ya counselor se milte rehein — "thoda better laga" pe chodna relapse ka sabse bada risk hai',
    'Khaana regular rakho — blood sugar stable = mood stable; skip karna avoid karo',
  ],

  donts: [
    'Akela bilkul mat rehein — withdrawal naturally aata hai, par isolation depression aur badhata hai',
    'Alcohol ya nasha bilkul mat lein — temporary escape lagta hai, chemically depression 2-3 guna karta hai',
    'Social media pe comparison mat karein — depressed brain already negative filter pe hota hai',
    'Treatment beech mein khud se mat chhoden — "ab theek lag raha hai" pe doctor se poocha bina band karna biggest relapse risk',
    'Khud ko blame mat karein — depression weakness nahi hai; guilt add karne se recovery slow hoti hai',
    'Zyada sona mat karein din mein — neend aane ka mann karta hai, par 2+ ghante din ka sona cycle worse karta hai',
    'Khud ko hurt karne ke thoughts aa rahe hain to turant doctor se milo — ye emergency hai, iCall: 9152987821',
  ],

  caseStudies: [
    {
      _key: 'case1',
      profile: '32 saal ki marketing professional, Nagpur',
      duration: '1 saal se gehri udaasi, kaam mein interest khatam, raat ko neend nahi; divorce ke 6 mahine baad shuru hua; psychiatrist ne antidepressants suggest kiye the par side effects se pareshaan thi',
      treatment: 'Natrum Muriaticum 200 (constitutional) + Ignatia 30 (initial grief) — CBT counseling parallel mein, roz 25 min walk, alcohol completely band',
      result: '6 hafte mein neend naturally better; 3 mahine mein kaam mein interest wapas; 5 mahine mein antidepressants taper kiye — psychiatrist ki guidance mein; 8 mahine mein near-complete recovery',
    },
    {
      _key: 'case2',
      profile: '28 saal ki new mother, Akola — postpartum depression',
      duration: 'Delivery ke 3 hafte baad — baby se emotional connection nahi, baar baar rona, "main buri maa hoon" feeling; gynecologist ne refer kiya',
      treatment: 'Sepia 200 (constitutional for postpartum) + Pulsatilla 30 (acute weeping episodes) — husband ko support role mein involve kiya, lactation consultant se milwaya',
      result: '4 hafte mein baby ke saath connection improve; 2 mahine mein guilt feelings significantly kam; 4 mahine mein normal motherhood functioning — breastfeeding safe rahi throughout',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Depression aur normal udaasi mein kya fark hai?',
      answer: 'Normal udaasi kisi reason se aati hai — failed exam, bad day — aur 1-2 din mein automatically better hoti hai. Depression mein udaasi 2 hafte ya zyada bina kisi solid reason ke bani rehti hai, daily activities impossible lagte hain, neend aur bhookh affect hoti hai, aur andar se khaalipan feel hota hai. Depression ek medical condition hai, sirf "mood kharab hona" nahi — isi liye ilaaj hota hai aur zaroor hona chahiye.',
    },
    {
      _key: 'faq2',
      question: 'Depression se kaise nikle — ghar pe kya karein?',
      answer: 'Ghar pe depression se nikalne ke liye ye 5 cheezein scientifically most effective hain: (1) Roz 30 min walk — endorphins release hote hain. (2) Ek insaan se rozana baat karein — isolation worst enemy hai. (3) Sleep schedule fix karein. (4) Processed sugar aur alcohol band karein. (5) Ek chhoti routine banayein — structure brain ko stability deta hai. Ye sab helpful hain — par agar 2 hafte mein improvement nahi, doctor se milna zaroori hai.',
    },
    {
      _key: 'faq3',
      question: 'Depression kitne din ya mahine mein theek hoti hai?',
      answer: 'Ye depend karta hai type aur severity pe. Mild situational depression 4-8 hafte mein improve ho sakti hai. Moderate clinical depression mein 3-6 mahine lagte hain. Chronic ya severe depression mein 6-12+ mahine. Jo log consistently treatment lete hain aur lifestyle changes karte hain — unka recovery significantly faster hota hai. Treatment chhodna relapse ka sabse bada risk hai.',
    },
    {
      _key: 'faq4',
      question: 'Depression ki homeopathic medicine kaun si hai?',
      answer: 'Homeopathy mein depression ke liye koi "ek" medicine nahi hoti. Commonly used: Ignatia Amara (grief ya shock ke baad), Natrum Muriaticum (suppressed emotions), Aurum Metallicum (severe hopelessness), Pulsatilla (emotional, weepy type), Sepia (flat, indifferent — khaskar women mein). Konsi medicine sahi hai ye ek qualified homoeopath hi decide kar sakta hai aapki poori history dekhke.',
    },
    {
      _key: 'faq5',
      question: 'Kya homeopathy depression mein kaam karta hai?',
      answer: 'Haan — homeopathy depression mein ek effective complementary approach hai. CCRH-affiliated research mein Hamilton Depression Rating Scale score homeopathy group mein 50% se zyada reduce hua — placebo group mein sirf 20%. Homeopathy ka specific advantage ye hai ki ye sirf mood nahi, neend, physical complaints, aur anxiety bhi address karta hai. Severe clinical depression mein homeopathy psychiatrist ke treatment ke parallel mein use karein — akele nahi.',
    },
    {
      _key: 'faq6',
      question: 'Depression mein kya khana chahiye?',
      answer: 'Serotonin-boosting foods focus karein: akhrot, alsi ke beej (omega-3), dahi aur fermented foods (gut-brain health), palak aur methi (folate), ande aur dal (B12 aur tryptophan), aur kela (natural mood lifter). Sabse important: refined sugar aur alcohol avoid karein — dono chemically depression worsen karte hain. Khaana skip mat karein — regular small meals blood sugar stable rakhte hain jo mood ke liye directly linked hai.',
    },
    {
      _key: 'faq7',
      question: 'Depression mein neend nahi aati — kya karein?',
      answer: 'Depression-related insomnia ke liye: raat ko same time sone ki koshish, bedroom mein phone nahi, sone se 1 ghanta pehle screen band, ashwagandha milk ya chamomile tea try karein. Subah exercise karo — raat ko better neend aati hai. Sleeping pills khud se mat lein — dependency develop hoti hai aur root cause treat nahi hota. Homeopathy mein sleep + depression dono treat karne wali medicines available hain.',
    },
    {
      _key: 'faq8',
      question: 'Kya depression mein antidepressants zaroori hain?',
      answer: 'Har case mein zaroori nahi. Mild-to-moderate cases mein psychotherapy (CBT), lifestyle changes, aur homeopathy effective ho sakte hain. Moderate-to-severe cases mein psychiatrist antidepressants suggest karte hain — aur ye helpful hote hain. Agar doctor ne prescribe kiya hai, band khud se mat karein — gradual tapering hoti hai. Homeopathy antidepressants ke saath bhi safely chal sakta hai doctor ki salaah se.',
    },
    {
      _key: 'faq9',
      question: 'Bacchon aur teenagers mein depression ke lakshan kya hote hain?',
      answer: 'Teens mein depression adults se alag dikti hai: school performance suddenly gir jaana, dosto se milna band, baar baar gussa ya irritable rehna, physical complaints jo explain nahi hote (pet dard, sar dard), hopelessness. Agar 2 hafte se zyada ye pattern dikh raha hai to child/adolescent mental health specialist se milna zaroori hai. Homeopathy bachon mein safe option hai — early intervention life-changing hoti hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya depression permanent hoti hai ya theek hoti hai?',
      answer: 'Depression permanent nahi hoti — bilkul theek ho sakti hai. Studies mein 80% se zyada log jo complete treatment lete hain meaningful recovery paate hain. "Ye kabhi theek nahi hogi" wali soch khud depression ka symptom hai — reality ye hai ki treatment se jeevan bilkul normal ho sakta hai. Jo log triggers manage karte hain, sleep aur diet pe dhyan dete hain, doctor ke saath connected rehte hain — unme relapse significantly kam hota hai.',
    },
    {
      _key: 'faq11',
      question: 'Postpartum depression kya hoti hai aur kaise pehchanen?',
      answer: 'Delivery ke 2-4 hafte baad agar naye maa mein: baby se emotional connection nahi feel hona, bahut zyada rona, khud ko hurt karne ke thoughts, extreme anxiety, ya "main buri maa hoon" ye baar baar feel karna — to ye postpartum depression hai. Ye bahut common hai (lagbhag 1 in 5 new mothers) par bahut serious bhi — doctor se turant milna chahiye. Homeopathy mein Sepia, Pulsatilla specifically helpful hain aur breastfeeding ke saath safe hain.',
    },
    {
      _key: 'faq12',
      question: 'Anxiety aur depression mein kya fark hai — kya dono saath aa sakte hain?',
      answer: 'Anxiety primarily fear aur worry-based — "kya hoga", racing thoughts, dil tez dhadakna. Depression primarily sadness aur low energy — "kuch bhi nahi hoga", slowness, withdrawal. Haan, dono saath common hain — isko "comorbid anxiety-depression" kehte hain. Homeopathy ka advantage ye hai ki ek individualized medicine dono ko simultaneously treat kar sakti hai.',
    },
    {
      _key: 'faq13',
      question: 'Depression mein exercise karna chahiye ya rest?',
      answer: 'Exercise karna chahiye — ye scientifically proven depression treatment hai. 30 min aerobic exercise hafte mein 3-5 baar, mild-to-moderate depression mein antidepressant jitna effective ho sakta hai. Brain mein BDNF release hota hai jo brain cells ko heal karta hai. Shuruat mein motivation zero hogi — ye depression ka symptom hai. Solution: sirf 10 min walk se shuru karein, kisi ke saath.',
    },
    {
      _key: 'faq14',
      question: 'Depression mein naukri aur kaam kaise manage karein?',
      answer: 'Workplace management ke liye: (1) HR ya trusted manager ko confidence mein lein — mental health leave ab increasingly accepted hai. (2) Kaam ko chhote chunks mein todein. (3) Difficult decisions delay karein — depression mein decision-making impaired hoti hai. (4) Workplace mein ek break friend rakhein. (5) Agar kaam mental health significantly worse kar raha hai, doctor se "medical leave" discuss karein.',
    },
    {
      _key: 'faq15',
      question: 'Kya spirituality ya pooja depression mein help karti hai?',
      answer: 'Haan — research dikhata hai ki kisi bhi form ki spiritual practice (pooja, namaz, meditation, yoga nidra) depression mein meaningful benefit deti hai — particularly "meaning aur purpose" restore karne mein. Akela ye kaafi nahi severe cases mein, par recovery mein ek powerful supportive role hai. Community worship social connection bhi deta hai — jo depression ke liye itself healing hai.',
    },
    {
      _key: 'faq16',
      question: 'Kya depression ke liye therapy zaroori hai?',
      answer: 'Moderate-to-severe depression mein CBT (Cognitive Behavioral Therapy) first-line evidence-based treatment hai — negative thought patterns change karta hai. India mein iCall (9152987821) jaise free resources available hain. Agar private therapy afford nahi — online options (YourDOST, InnerHour) bhi kaam karte hain. Homeopathy aur therapy parallel mein bahut effective combination hai.',
    },
    {
      _key: 'faq17',
      question: 'Rishtedar ya dost mein depression ke signs kaise pehchanen?',
      answer: 'In changes pe dhyan dein: suddenly social se antisocial ho gaye, kuch bhi enjoy nahi karte, appearance mein neglect, baatein negative — "kya fark padta hai", bahut thake ya slow. Agar ye dikh raha hai — non-judgmentally baat karein: "Kuch time se tune notice kiya hai tum thake lagte ho — sab theek hai?" Sunein, advice mat dein, aur professional help encourage karein.',
    },
    {
      _key: 'faq18',
      question: 'Depression mein chai ya coffee pini chahiye ya nahi?',
      answer: '1-2 cups chai ya coffee generally theek hai. Par agar anxiety bhi saath mein hai to caffeine anxiety badha sakta hai. Zyada chai neend bigadti hai — aur disturbed sleep depression ka sabse bada enemy hai. Better alternative: green tea (L-theanine mood stabilize karta hai) ya ashwagandha milk jo cortisol calm karta hai.',
    },
    {
      _key: 'faq19',
      question: 'Kya depression mein rona weakness ki nishani hai?',
      answer: 'Bilkul nahi — rona ek natural stress-release mechanism hai. Emotional tears mein leucine-enkephalin hota hai jo pain-reducing effect deta hai. Jo log rote hain unhe aksar rone ke baad better feel hota hai — ye body ka self-healing response hai. "Mard rote nahi" — ye ek toxic myth hai jo men ko treatment lene se rokti hai. Depression mein rona band nahi hona — wo medical help ka signal hai, weakness nahi.',
    },
    {
      _key: 'faq20',
      question: 'Depression mein meditation kaam karti hai?',
      answer: 'Haan — Mindfulness-Based Cognitive Therapy (MBCT) depression mein relapse 40-50% tak reduce karta hai. Shuruat mein sirf 10-15 min roz kaafi hai. Beginners ke liye: guided meditation (YouTube pe Hindi guided meditation). Active depression mein forced "mind blank" mat karein — body scan ya loving kindness meditation se shuru karein. Homeopathy ke saath combination mein maximum benefit.',
    },
    {
      _key: 'faq21',
      question: 'Office ya college mein breakdown aaye to kya karein?',
      answer: 'Agar panic ya overwhelming feeling aaye: (1) Koi quiet jagah jaayein. (2) 4-7-8 breathing: 4 count pe saas, 7 count rokein, 8 count pe chhoden — 3 baar karein. (3) "5-4-3-2-1" grounding: 5 cheezein dekhein, 4 touch karein, 3 sunein, 2 sunghen, 1 taste karein. (4) Kisi trusted insaan ko call karein. (5) Baad mein doctor ya therapist se zaroor share karein.',
    },
    {
      _key: 'faq22',
      question: 'Depression mein weight gain kyun hota hai?',
      answer: 'Cortisol (stress hormone) badhna — belly fat specifically store karata hai. Emotional eating increase hoti hai. Physical activity zero ho jaati hai. Neend ka bigadna ghrelin (hunger hormone) badhata hai. Solution: high-protein, high-fiber diet, junk bilkul nahi, aur daily movement — chahe 10 min walk bhi. Homeopathy mein metabolism pe kaam karne wali constitutional medicines bhi available hain.',
    },
    {
      _key: 'faq23',
      question: 'Kya akele rehne wale logon ko depression zyada hoti hai?',
      answer: 'Haan — social isolation depression ka major risk factor hai. Jinke paas strong social support network hai, unhe depression kam aur recovery faster hoti hai. Akele rehne walo ke liye: online communities join karein, weekly group activities (yoga class, library, hobby class), pet rakhein agar possible — pets loneliness aur depression dono mein proven helpful hain. iCall helpline: 9152987821.',
    },
    {
      _key: 'faq24',
      question: 'Kab samjhein ki doctor ke paas jaana zaroori hai?',
      answer: 'EMERGENCY signs — turant help lein: Khud ko hurt karne ya khatam karne ke thoughts aa rahe hain. 2 hafte se zyada gehri udaasi, functioning bilkul nahi. Khaana bilkul nahi kha rahe. Alcohol ya drugs ka use badh gaya hai. Dosto aur family se bilkul disconnect. Helpline: iCall — 9152987821 (free, confidential). NIMHANS — 080-46110007. Nearest government hospital ka emergency department 24/7 available hai.',
    },
    {
      _key: 'faq25',
      question: 'Kya depression mein patient ko hospital mein admit karna padta hai?',
      answer: 'Zyada tar cases mein nahi — outpatient treatment (doctor ya therapist ke regular visits) kaafi hoti hai. Admit tab hota hai jab: suicidal thoughts active hon aur patient safe nahi ho ghar pe, severe depression jisme khud ki dekhbhaal impossible ho gayi ho, ya treatment se koi response nahi aa raha. Agar doubt ho — psychiatrist se puchein; woh sahi decision guide karenge. Admission ko taboo mat manein — kabhi kabhi ye sabse safe aur fastest recovery path hota hai.',
    },
  ],

  sources: [
    {
      _key: 'who2023',
      name: 'WHO World Mental Health Report | 2023',
      url: 'https://www.who.int/publications/i/item/9789240049338',
      year: '2023',
    },
    {
      _key: 'ccrh2015',
      name: 'Homoeopathy in Depression: A Feasibility Study — Journal of Evidence-Based Complementary & Alternative Medicine | 2015 | CCRH affiliated',
      url: '',
      year: '2015',
    },
    {
      _key: 'nimhans2016',
      name: 'NIMHANS — National Mental Health Survey of India | 2015-16',
      url: 'http://www.nimhans.ac.in',
      year: '2016',
    },
    {
      _key: 'lancet2019',
      name: 'Lancet GBD Study — Depression prevalence India | 2019',
      url: '',
      year: '2019',
    },
    {
      _key: 'blumenthal2007',
      name: 'Blumenthal JA et al. — Exercise and Pharmacotherapy in Treatment of Major Depressive Disorder | Psychosomatic Medicine | 2007',
      url: '',
      year: '2007',
    },
    {
      _key: 'boericke',
      name: "Boericke's Materia Medica — William Boericke, MD (9th Edition) | B. Jain Publishers",
      url: '',
      year: '',
    },
  ],

  selfCheck: 'Agar lagaataar 2 hafte se zyada gehri udaasi, kisi cheez mein interest nahi, neend ya bhookh bigdi hai, aur "sab bekar hai" aisa lag raha hai — to depression possible hai. Ye weakness nahi, bimari hai — aur iska ilaaj hota hai. Ek qualified homoeopath ya doctor se milein.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    const result = await client.createOrReplace(depression)
    console.log('✅ Depression disease document created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/depression')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
