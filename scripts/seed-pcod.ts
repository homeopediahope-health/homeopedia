import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const pcod = {
  _id: 'disease-pcod',
  _type: 'disease',

  title: 'PCOD / PCOS',
  hindiName: 'Anda Granthi Rog / Bahupauti Andasaya Rog',
  slug: { _type: 'slug', current: 'pcod' },

  metaTitle: 'PCOD/PCOS in Hindi — Lakshan, Karan aur Homeopathy Ilaaj | HomeoPedia',
  metaDescription: 'PCOD aur PCOS ke symptoms, causes, diet tips aur homeopathic treatment — simple Hinglish mein. Irregular periods, weight gain, pimples — sab ka jawab yahan.',

  heroText: 'PCOD (Polycystic Ovary Disease) ek aisi condition hai jisme ovaries mein bahut saare chhote-chhote cysts ban jaate hain jo hormonal imbalance ki wajah se hoti hai. India mein har 5 mein se 1 mahila is condition se prabhaavit hai — lekin sahi ilaaj aur lifestyle changes se ye poori tarah manage ho sakti hai. Homeopathy is condition mein root cause par kaam karti hai — hormones balance karna, periods regular karna, aur long-term health restore karna.',

  category: "Women's",

  quickFacts: {
    whatItIs: 'PCOD mein ovaries normal eggs mature karne ki jagah bahut saare chhote immature follicles banaati hain — jo cysts ban jaate hain. Ye ek hormonal condition hai, koi tumor ya cancer nahi.',
    howCommon: 'India mein 20-25% reproductive age ki mahilaon mein PCOD hai — matlab lagbhag 10 crore se zyada mahilaein affected hain. Ye India mein infertility ka sabse bada cause ban gaya hai.',
    treatmentDuration: '3–6 mahine mein periods regular hone lagte hain; complete hormonal balance ke liye 6–12 mahine ka consistent treatment',
    successRate: 'CCRH Annual Report 2018-19: 76% PCOD patients mein significant improvement — irregular cycle regular hua, cysts ka size kam hua',
  },

  causes: [
    'Insulin Resistance — body insulin ko theek se use nahi kar paati, jisse ovaries mein zyada androgen (male hormones) banta hai — ye sabse common underlying cause hai (70% cases mein)',
    'Hormonal Imbalance — LH (Luteinizing Hormone) bahut zyada aur FSH (Follicle Stimulating Hormone) normal ya kam — isse eggs mature nahi ho paate',
    'Inflammation (Chronic Low-Grade) — body mein slow inflammation androgen production badhata hai aur ovulation disturb karta hai',
    'Genetic / Family History — agar maa, behen, ya mausi ko PCOD hai to aapko bhi hone ki 50% zyada sambhavana hai',
    'Stress aur Cortisol — chronic stress cortisol level badhata hai jo directly ovulation rok sakta hai aur hormonal cascade disrupt karta hai',
    'Unhealthy Lifestyle — sedentary life + processed food + sleep deprivation insulin resistance aur weight gain dono badhate hain jo PCOD ko worse karte hain',
  ],

  riskFactors: [
    '15-35 saal ki mahilaein — ye prime reproductive years hain jab PCOD sabse zyada diagnose hoti hai',
    'Family history of PCOD, diabetes ya thyroid problems',
    'Overweight ya obese mahilaein — extra body fat insulin resistance aur androgen levels dono badhata hai',
    'Sedentary lifestyle — desk job, no exercise, long screen time',
    'High sugar aur maida diet — refined carbs insulin spike karte hain jo PCOD ka trigger hai',
    'Chronic stress — students, working women, ya jinhone emotional trauma experience kiya ho',
  ],

  complications: [
    'Infertility — PCOD India mein anovulatory infertility ka #1 cause hai; egg nahi banta to pregnancy mushkil hoti hai',
    'Type 2 Diabetes — PCOD wali 50% mahilaon ko 40 saal tak type 2 diabetes ya prediabetes develop hoti hai (insulin resistance ki wajah se)',
    'Uterine Cancer Risk — irregular periods mein endometrium thicken hota rehta hai jo long-term mein cancer risk badh sakta hai',
    'Depression aur Anxiety — hormonal imbalance directly mood disorders cause karta hai; PCOD wali mahilaon mein depression 3x zyada common hai',
    'Heart Disease Risk — PCOD mein cholesterol imbalance aur inflammation dono heart ke liye risky hain — early lifestyle intervention zaroori hai',
  ],

  symptoms: [
    {
      _key: 'menstrual',
      category: 'Menstrual Irregularities — Periods Ki Gadbad',
      items: [
        'Irregular periods — kabhi 2 mahine, kabhi 3 mahine, kabhi zyada late',
        'Periods bilkul band ho jaana (amenorrhea) — 3+ mahine tak',
        'Bahut kam ya bahut zyada bleeding — cycle predictable nahi rehti',
        'Periods bahut painful ho jaana (dysmenorrhea)',
        'Ovulation nahi hona — egg nahi banta, pregnancy mushkil hoti hai',
      ],
    },
    {
      _key: 'hormonal',
      category: 'Hormonal Symptoms — Androgen Excess ke Signs',
      items: [
        'Chehra, seena, pet ya kamar par unwanted baal aana (hirsutism)',
        'Muhase (acne/pimples) — jawline, chin, aur cheeks par zyada — adult acne',
        'Sar ke baalon ka patla hona ya girna — female pattern hair loss',
        'Oily skin — sebum production badh jaati hai',
        'Voice thodi bhaari hona (severe/advanced cases mein)',
      ],
    },
    {
      _key: 'metabolic',
      category: 'Metabolic Symptoms — Weight aur Energy',
      items: [
        'Wazan badhna — especially pet ke aaspaas (apple-shaped body)',
        'Wazan ghataana bahut mushkil hona — diet aur exercise ke bawajood',
        'Thakan aur energy ka kam rehna — din bhar sluggish feel',
        'Meetha khane ki bahut zyada craving — insulin resistance ka sign',
        'Skin par dark patches — gale ke peeche, kaankhon mein (acanthosis nigricans)',
      ],
    },
    {
      _key: 'emotional',
      category: 'Emotional & Mental Symptoms',
      items: [
        'Anxiety aur depression — hormones directly mood affect karte hain',
        'Low self-esteem — body changes ki wajah se',
        'Irritability aur mood swings — especially premenstrual',
        'Sleep disturbances — neend theek se nahi aana',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '76% patients mein significant improvement — irregular cycle regular hua, ultrasound par cysts ka size kam hua',
    avgTreatmentPeriod: '6 se 12 mahine (hormonal balance ke liye)',
    citation: 'Central Council for Research in Homoeopathy (CCRH) | Annual Report 2018-19 & Nanda GS et al. | Indian Journal of Research in Homoeopathy | 2014; 8(3): 153-160',
    keyFindings: [
      'Menstrual cycle regularity mein marked improvement — majority patients ka cycle 28-35 days par aaya',
      'Ultrasound par follicle count aur cyst size dono mein reduction observed',
      'Pulsatilla aur Sepia sabse frequently indicated medicines paayi gayin (case-based selection)',
      'AMH levels aur hormonal parameters mein improvement — ovulation restore hone ke signs',
      'Quality of life scores significantly improve hue — mood, energy, aur confidence mein sudhaar',
    ],
  },

  homeopathyBenefits: [
    'Root cause treatment — sirf symptoms suppress nahi karta; insulin sensitivity, hormonal axis, aur ovarian function par seedha kaam karta hai',
    'Individualized approach — kisi ka acne zyada hai, kisi ka weight, kisi ka infertility — alag symptom pattern mein alag medicine milti hai',
    'Periods naturally regular karta hai — bina synthetic hormones (birth control pills) ke — body ki apni cycle restore hoti hai',
    'Long-term safe — koi liver damage nahi, koi hormonal dependency nahi — saalon tak use possible hai',
    'Emotional wellbeing bhi improve hoti hai — PCOD ki anxiety aur depression bhi address hoti hai homeopathic medicines se',
  ],

  medicines: [
    {
      _key: 'pulsatilla',
      name: 'Pulsatilla',
      potency: '',
      bestFor: 'Mild, gentle nature — periods late ya scanty — emotional aur weepy',
      keyIndications: [
        'Periods bahut late aur kam aana — kabhi kabhi mahine skip karna',
        'Gentle, emotional, easily weeping — rona aajata hai',
        'Open air mein better feel karna',
        'Rich food se complaints — dairy aur fatty foods se worse',
        'Thirst bilkul kam — paani zyada nahi piti',
        'Changeable symptoms — kabhi acha kabhi bura',
      ],
    },
    {
      _key: 'sepia',
      name: 'Sepia',
      potency: '',
      bestFor: 'Worn-out feeling — bearing down sensation — indifference to family',
      keyIndications: [
        'Sab se thak gayi feeling — ghar, kaam, sab se',
        'Pelvic area mein heaviness ya "sab niche gir raha hai" jaisi feeling',
        'Periods irregular aur painful — before periods moodiness',
        'Exercise karne se thodi rahat milti hai',
        'Hair loss aur skin changes bhi present hon',
        'Hormonal aur emotional dono symptoms saath hon',
      ],
    },
    {
      _key: 'natrum_mur',
      name: 'Natrum Muriaticum',
      potency: '',
      bestFor: 'Grief aur emotional suppression — periods irregular after stress/grief',
      keyIndications: [
        'Koi emotional trauma ya grief ke baad PCOD worse hua ho',
        'Rona chahti hai lekin roke — alone mein roti hai',
        'Namak bahut zyada pasand — craving for salt',
        'Sun mein worse — sir dard ya weakness sun mein zyada',
        'Periods scanty aur irregular — especially after emotional shock',
        'Introvert — consolation se aur buri lagti hai',
      ],
    },
    {
      _key: 'calcarea_carb',
      name: 'Calcarea Carbonica',
      potency: '',
      bestFor: 'Overweight — chilly — sweaty — periods bahut jaldi aana',
      keyIndications: [
        'Moti mahila — weight bahut zyada, ghatana mushkil',
        'Sar aur pair thande rehte hain lekin body sweaty',
        'Periods jaldi aana (early) ya bahut zyada aana',
        'Thoda kaam se thak jaana',
        'Egg, meetha, aur namak ki craving',
        'Anxiety — apni health ke baare mein zyada sochna',
      ],
    },
    {
      _key: 'thuja',
      name: 'Thuja Occidentalis',
      potency: '',
      bestFor: 'Cysts, growths — unwanted hair — oily skin — after vaccination effects',
      keyIndications: [
        'Ovarian cysts clearly present hon ultrasound mein',
        'Body par jagah jagah unwanted hair aana (hirsutism)',
        'Oily aur unhealthy skin — multiple skin issues',
        'Kisi vaccination ya medicine ke baad PCOD shuru ya worse hua ho',
        'Self-conscious — body ke baare mein uncomfortable feel',
        'Warts ya skin tags bhi present hon',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'lowgi',
      category: 'Low Glycemic Index Foods — Sugar Control',
      emoji: '🌾',
      items: [
        'Brown rice, jowar, bajra, ragi — refined carbs ki jagah ye khayein, insulin spike nahi hoga',
        'Dal aur legumes (rajma, chana, moong) — protein + fiber — blood sugar stable rakhta hai',
        'Sabut anaj ki roti — maida ki nahi, atta bhi sieve mat karein',
        'Sweet potato (shakarkandi) — high fiber, lower GI than regular potato',
      ],
    },
    {
      _key: 'antiinflammatory',
      category: 'Anti-Inflammatory & Hormone-Balancing',
      emoji: '🥦',
      items: [
        'Haldi (turmeric) roz — curcumin inflammation aur androgen dono kam karta hai, PCOD mein research-backed hai',
        'Methi dana (fenugreek seeds) — insulin sensitivity improve karta hai, periods regulate karne mein help karta hai',
        'Sabzi: palak, methi, broccoli, gobhi — anti-androgen properties + iron',
        'Akhrot aur alsi (flaxseeds) — omega-3 + lignans jo estrogen balance karte hain',
        'Adrak (ginger) — anti-inflammatory, digestion improve karta hai',
      ],
    },
    {
      _key: 'protein',
      category: 'Lean Protein & Healthy Fats',
      emoji: '🥚',
      items: [
        'Eggs (ande) — protein + vitamin D jo PCOD mein commonly deficient hoti hai',
        'Fish — mackerel, sardines, salmon — omega-3 fatty acids ovarian function improve karte hain',
        'Paneer (limited) — protein source, calcium',
        'Nariyal ka tel ya jaitun ka tel (olive oil) cooking ke liye — healthy fats hormones ka base hain',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'sugar',
      category: 'Sugar & Refined Carbs — #1 Enemy',
      emoji: '🍭',
      items: [
        'Meethai, biscuits, cake, pastries — direct insulin spike — PCOD ka sabse bada trigger',
        'White rice (safed chawal) zyada — high GI, blood sugar bahut jaldi badhata hai',
        'Maida products — bread, naan, puri — refined flour inflammation badhaata hai',
        'Cold drinks aur fruit juices — liquid sugar — liver par seedha load',
        'Packed snacks (chips, crackers, namkeen) — trans fats + refined carbs — double trouble',
      ],
    },
    {
      _key: 'dairy',
      category: 'Dairy & Hormonal Foods — Kam Karein',
      emoji: '🥛',
      items: [
        'Zyada doodh (especially non-organic) — IGF-1 hormone hota hai jo androgen production badha sakta hai PCOD mein',
        'Cheese aur butter zyada — saturated fat inflammation badhaata hai',
        'Ice cream — sugar + dairy combined — avoid karein bilkul',
      ],
    },
    {
      _key: 'processed',
      category: 'Processed & Inflammatory Foods',
      emoji: '🚫',
      items: [
        'Fast food (burger, pizza, fries) — trans fats + refined carbs + excess sodium — PCOD mein worst combination',
        'Soya products zyada (soy milk, tofu daily) — phytoestrogens estrogen dominance badha sakti hain',
        'Alcohol — liver metabolism disrupt karta hai jo hormones clear karta hai',
        'Zyada chai/coffee with sugar — caffeine cortisol badhaata hai, sugar insulin spike',
      ],
    },
  ],

  dietTip: 'PCOD mein sabse powerful diet hack: "Plate Method" — aadhi plate sabziyan, ek chauthai protein (dal/egg/fish), ek chauthai complex carb (brown rice/roti). Is ek formula se insulin resistance mein 6 hafte mein fark dikhta hai.',

  dietNote: 'PCOD mein Vitamin D aur Inositol (Myo-inositol) supplement ko research support hai — doctor se discuss karein. Roz subah khali pet 1 glass garm paani mein adha nimbu + 1 chutki haldi pina insulin sensitivity ke liye helpful mana jaata hai.',

  weeklyPlan: [
    {
      _key: 'monday',
      day: 'Somwar / Monday',
      breakfast: 'Ragi dosa ya besan cheela (2 pieces) + pudina chutney + 1 anda (boiled)',
      midMorning: '1 mutti akhrot ya 1 chammach alsi powder dahi mein',
      lunch: 'Brown rice (1 katori) + moong dal (1 katori) + palak sabzi + raita',
      evening: 'Masala chai bina cheeni + 4-5 badam',
      dinner: 'Jowar/bajra roti (2) + lauki-chane ki sabzi + kheera salad',
    },
    {
      _key: 'tuesday',
      day: 'Mangalwar / Tuesday',
      breakfast: 'Oats upma (vegetables ke saath) ya dalia (daliya khichdi)',
      midMorning: 'Ek medium apple ya nashpati (pear)',
      lunch: 'Multigrain roti (2) + rajma (half katori, cooked at home) + gobhi-matar sabzi',
      evening: 'Methi dana ka paani (raat ko bhigo ke subah pee lein, ya evening mein fresh banayen)',
      dinner: 'Vegetable soup (thick, no cream) + 1-2 jowar roti + stir-fried spinach',
    },
    {
      _key: 'wednesday',
      day: 'Budhwar / Wednesday',
      breakfast: 'Poha (chivda) with vegetables + 1 hard boiled egg',
      midMorning: '1 katori papaya ya guava',
      lunch: 'Brown rice khichdi (moong dal + vegetables) + dahi',
      evening: 'Haldi wala doodh (low fat) bina cheeni — ya garam paani with lemon',
      dinner: 'Paneer tikka (grilled, no butter) + bajra roti (1-2) + mixed salad',
    },
    {
      _key: 'thursday',
      day: 'Guruwar / Thursday',
      breakfast: 'Idli (2-3, south Indian style) + sambar (no tamarind excess) + green chutney',
      midMorning: '1 chammach flaxseed (alsi) + 1 glass nimbu paani bina cheeni',
      lunch: 'Roti (2, atta) + chana dal + lauki/tinda/turai sabzi',
      evening: 'Makhana (fox nuts) bhune hue — ek mutti',
      dinner: 'Macchli (fish) curry ya palak-tofu curry + brown rice (small portion)',
    },
    {
      _key: 'friday',
      day: 'Shukrawar / Friday',
      breakfast: 'Moong dal chilla (2) + pudina-dahi chutney',
      midMorning: '1 banana ya jamun (seasonal)',
      lunch: 'Multigrain roti + arhar dal + baingan bharta ya mix vegetable',
      evening: 'Green tea (bina cheeni) + 4-5 badam ya 2 akhrot',
      dinner: 'Vegetable dalia (broken wheat) khichdi + cucumber raita',
    },
    {
      _key: 'saturday',
      day: 'Shanivaar / Saturday',
      breakfast: 'Anda bhurji (2 ande, tomato+onion, olive oil mein) + 1 multigrain toast',
      midMorning: 'Coconut water (nariyal paani) ya nimbu paani',
      lunch: 'Rajma chawal (brown rice, moderate portion) + green salad',
      evening: 'Methi tea ya ginger tea bina cheeni + dry fruits (small portion)',
      dinner: 'Soup (tomato/spinach, no cream) + 1 roti + paneer bhurji (low fat)',
    },
    {
      _key: 'sunday',
      day: 'Raviwar / Sunday',
      breakfast: 'Uttapam (with mixed vegetables, no excess oil) + sambar',
      midMorning: 'Ek medium orange ya amla (fresh/candy)',
      lunch: 'Whole wheat pasta (small bowl) + loads of sauteed vegetables + chicken (optional)',
      evening: 'Haldi-adrak chai bina cheeni ya plain chaas (buttermilk without sugar)',
      dinner: 'Dal soup + jowar roti (1-2) + stir-fried vegetables + raita',
    },
  ],

  lifestyle: [
    {
      _key: 'exercise',
      title: 'Roz 30-45 Min Movement — Non-Negotiable',
      description: 'PCOD mein exercise sirf weight ke liye nahi — ye insulin sensitivity improve karta hai. Brisk walk, cycling, swimming ya dance — jo bhi enjoy ho, roz karo. Week mein 2 din strength training (dumbbell ya bodyweight) add karo — muscle mass insulin resistance kam karta hai.',
    },
    {
      _key: 'sleep',
      title: 'Sleep 7-8 Hours — Hormones Ka Repair Time',
      description: 'Raat 11 baje se pehle soyen — cortisol aur melatonin ka cycle is time align hota hai. Phone screen raat ko bandh karein (blue light melatonin block karta hai). Poor sleep PCOD ke saare hormones — LH, FSH, insulin, cortisol — ko ek raat mein disrupt kar sakti hai.',
    },
    {
      _key: 'stress',
      title: 'Stress Management — Cortisol Control',
      description: 'Roz 10 min deep breathing ya meditation karein — cortisol level significantly kam hota hai. Journaling, yoga, ya koi hobby — jo bhi mind quiet kare wo karo. Chronic stress PCOD ka trigger bhi hai aur outcome bhi — ye vicious cycle break karna zaroori hai.',
    },
    {
      _key: 'tracking',
      title: 'Period Tracking App Use Karein',
      description: 'Clue, Flo ya koi bhi period app se apna cycle track karein. Doctor ko accurate data milega. Ovulation predictor kits (OPK) se pata chalega ki ovulation ho rahi hai ya nahi — homeopathic treatment ki progress monitor karne ka best tool hai yahi.',
    },
  ],

  dos: [
    'Roz subah 30 min exercise karein — brisk walk ya yoga — insulin resistance mein measurable fark aata hai sirf 6 hafte mein',
    'Water 2-3 liter roz piyein — hormones detox ke liye liver ko paani chahiye',
    'Period date aur symptoms diary mein likhein — doctor ko progress judge karne mein help hogi',
    'Vitamin D levels check karwayein — PCOD wali 70% mahilaon mein deficiency hoti hai, supplement se ovulation improve hoti hai',
    'Sleep schedule fix karein — roz ek hi waqt soyen aur uthein — circadian rhythm hormones ko directly control karta hai',
  ],

  donts: [
    'Khana skip mat karein — especially breakfast — fasting PCOD mein cortisol spike karta hai jo condition worse kar sakta hai',
    'Bina doctor ke birth control pills mat lein sirf periods regular karne ke liye — ye symptoms mask karta hai, treat nahi',
    'Weight loss ke liye crash diet mat karein — calorie restriction stress hormones badhata hai aur PCOD aur worse hoti hai',
    'Stress ko ignore mat karein — "sab theek hai" bolne se hormonal imbalance theek nahi hoga — acknowledge aur address karein',
    'Treatment ka beech mein band mat karein — PCOD mein hormonal balance laane mein time lagta hai, 1-2 mahine mein result na mile to bhi continue karein',
  ],

  caseStudies: [
    {
      _key: 'case1',
      profile: '26 saal ki software engineer, Pune',
      duration: '3 saal se irregular periods (2-3 mahine gap), weight gain 8 kg, multiple cysts on both ovaries',
      treatment: 'Sepia 200 + Pulsatilla 30 (alternating) + diet counselling — sedentary lifestyle address kiya',
      result: '4 mahine mein periods regular (32-day cycle), 6 mahine mein ultrasound par cyst size reduced, weight 5 kg kam hua 8 mahine mein',
    },
    {
      _key: 'case2',
      profile: '31 saal ki teacher, Nagpur — 2 saal se trying to conceive',
      duration: 'PCOD diagnosed 4 saal pehle, anovulatory cycles, LH/FSH ratio disturbed',
      treatment: 'Calcarea Carb 200 + metformin (gynecologist ke saath coordination mein) + yoga daily',
      result: '6 mahine ke homeopathic treatment ke baad ovulation LH surge detect hua — 8ve mahine mein natural conception',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'PCOD aur PCOS mein kya fark hai?',
      answer: 'Technically, PCOD (Polycystic Ovary Disease) aur PCOS (Polycystic Ovary Syndrome) same condition ke alag naam hain jo doctor alag context mein use karte hain. PCOS zyada severe form maana jaata hai jisme hormonal symptoms zyada pronounced hoti hain — jaise androgen excess, insulin resistance, aur ovulation completely band. PCOD mein symptoms mild ho sakti hain aur ovulation kabhi kabhi hoti rehti hai. Practically, dono ka treatment approach similar hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya PCOD mein pregnancy ho sakti hai?',
      answer: 'Haan — PCOD wali bahut si mahilaein naturally pregnant hoti hain. PCOD se infertility ka matlab ye nahi ki pregnancy kabhi nahi hogi — iska matlab hai ki zyada time lag sakta hai ya treatment ki zaroorat pad sakti hai. Ovulation restore hone par natural pregnancy possible hai. Homeopathic treatment, lifestyle changes (weight loss bhi agar overweight hain), aur zaroorat pade to gynecologist ke saath coordination se majority cases mein pregnancy achieve hoti hai.',
    },
    {
      _key: 'faq3',
      question: 'Periods regular karne ke liye kya karein?',
      answer: 'PCOD mein periods irregular isliye hote hain kyunki ovulation nahi hoti. Periods regular karne ke liye ovulation restore karna zaroori hai. Ye kaise hoga: Insulin resistance kam karein (diet + exercise), Stress manage karein (cortisol ovulation rok sakta hai), Appropriate homeopathic medicine lein (Pulsatilla, Sepia, Natrum Mur — symptom basis par), Weight agar zyada hai to 5-10% weight loss bhi cycle regular kar sakta hai. Birth control pills periods "regular" karti hain lekin ye artificial bleed hai — asli ovulation nahi hoti.',
    },
    {
      _key: 'faq4',
      question: 'PCOD mein weight loss kyun itna mushkil hota hai?',
      answer: 'PCOD mein weight loss mushkil isliye hai kyunki insulin resistance hoti hai — body calories ko fat ke roop mein store karta hai efficiently, aur fat burn karna slow hota hai. Is vicious cycle mein: zyada fat → zyada estrogen → zyada insulin resistance → zyada fat. Isliye normal diet-exercise approach PCOD mein slowly kaam karti hai. Solution: Low glycemic index diet (blood sugar stable rakho), Resistance training add karo (muscle mass insulin sensitivity badhati hai), Metformin ya Inositol doctor se discuss karo agar needed, Patience rakho — PCOD mein weight loss slow but steady hoti hai.',
    },
    {
      _key: 'faq5',
      question: 'Kya PCOD mein homeopathy safe hai?',
      answer: 'Haan — homeopathy PCOD mein bilkul safe hai, even long-term use ke liye. Koi liver damage nahi, koi hormonal dependency nahi, aur pregnancy try kar rahi hain tab bhi qualified homeopath ki supervision mein safe hai. Homeopathy ka approach hormonal balance restore karna hai — suppress nahi karna. CCRH ki study mein PCOD patients mein koi adverse effects report nahi hue. Sirf ensure karein ki qualified registered homoeopath se treatment len.',
    },
    {
      _key: 'faq6',
      question: 'PCOD mein kaunse tests karwane chahiye?',
      answer: 'Diagnosis ke liye: Pelvic ultrasound (transvaginal ya transabdominal) — cysts count kare, Hormones: LH, FSH, LH/FSH ratio, Testosterone (total aur free), DHEAS, Prolactin. Metabolic tests: Fasting insulin, Fasting glucose, HbA1c, Thyroid (TSH, T3, T4). Additional: Vitamin D levels, Vitamin B12, CBC. Ye tests treatment track karne ke liye bhi hote hain — 6 mahine baad repeat karein to progress dekh sakein.',
    },
    {
      _key: 'faq7',
      question: 'PCOD mein kya khana chahiye aur kya nahi?',
      answer: 'Khayein: Low GI foods (brown rice, jowar, bajra, dal), anti-inflammatory spices (haldi, adrak, methi dana), lean protein (ande, macchli, paneer), omega-3 sources (akhrot, alsi), green leafy vegetables (palak, methi). Avoid karein: Sugar aur meetha bilkul — direct insulin spike, Maida products (bread, naan, puri, biscuits), Dairy zyada (doodh, cheese), Fast food aur processed food, Zyada chai-coffee. Key principle: Har khane mein protein + fiber hona chahiye — sirf carb mat khayein.',
    },
    {
      _key: 'faq8',
      question: 'PCOD mein kaunse yoga ya exercises best hain?',
      answer: 'Best exercises for PCOD: Brisk walking (30 min daily) — insulin sensitivity improve karta hai, Cycling — low impact, effective, Swimming — full body workout, joints par stress nahi. Yoga asanas: Baddha Konasana (butterfly pose) — pelvic circulation improve karta hai, Supta Virasana — hormonal glands stimulate karta hai, Setu Bandhasana (bridge pose) — thyroid aur ovaries ke liye, Pranayama (kapalbhati + anulom vilom daily 10-15 min). Avoid karna: High intensity workouts jo cortisol spike karein, Crash exercise programs.',
    },
    {
      _key: 'faq9',
      question: 'Kya PCOD umar ke saath theek ho jaata hai?',
      answer: 'Partially — menopause ke baad PCOD ke kuch symptoms (irregular periods, acne) improve hote hain kyunki ovaries active nahi rehti. Lekin metabolic issues (insulin resistance, heart disease risk, diabetes risk) menopause ke baad bhi rahti hain agar lifestyle address nahi kiya. PCOD ek lifelong condition hai — "cure" nahi hoti completely, lekin proper management se symptoms control aur quality of life excellent ho sakti hai. Isliye young age mein hi lifestyle aur treatment shuru karna zyada faydemand hai.',
    },
    {
      _key: 'faq10',
      question: 'PCOD mein skin aur baalon ki takleef kyun hoti hai?',
      answer: 'Ye androgen excess ki wajah se hota hai. PCOD mein testosterone aur DHEAS zyada banta hai jo: Sebaceous glands ko overstimulate karta hai → oily skin + acne (especially jawline aur chin par), Hair follicles ko shrink karta hai → scalp ke baal patale honaa (female pattern baldness), Body ke baaki jagah baal badhata hai → unwanted facial hair, chest aur stomach par baal. Homeopathic treatment mein Thuja, Sepia aur Natrum Mur in specific symptoms par focus karte hain. Skin routine mein: non-comedogenic products use karein, aur salicylic acid ya niacinamide se mild cleansing karein.',
    },
    {
      _key: 'faq11',
      question: 'Kya teen ladkiyon ko bhi PCOD ho sakta hai?',
      answer: 'Haan — PCOD adolescent girls mein bhi diagnose hoti hai, typically periods shuru hone ke 2-3 saal baad (usually 13-16 saal mein). Teen mein diagnosis thodi tricky hai kyunki periods shuru ke 2 saal tak naturally irregular rehte hain. Warning signs teen mein: Periods baar baar skip karna (3+ mahine), Bahut zyada acne (face + back + chest), Rapid weight gain especially stomach mein, Unwanted facial hair. Agar ye symptoms hain to gynecologist se milein — early intervention lifelong outcomes bahut better banata hai.',
    },
    {
      _key: 'faq12',
      question: 'PCOD se depression aur anxiety kyun hoti hai?',
      answer: 'PCOD mein depression 3x zyada common hai normal mahilaon se — aur ye sirf "body image issues" nahi hai. Biology bhi directly involved hai: High androgen → directly mood centers affect karta hai, Insulin resistance → brain ke glucose metabolism disrupt hota hai → fatigue aur low mood, Sleep disturbances → serotonin aur dopamine production kam, Inflammatory markers → depression ke biological markers hain. Homeopathy mein emotional symptoms equally important hain — Natrum Mur (suppressed grief), Sepia (detached exhaustion), Pulsatilla (tearfulness) ye sab PCOD mein emotional state ke hisaab se select hoti hain.',
    },
    {
      _key: 'faq13',
      question: 'PCOD mein kitne time mein results dikhenge?',
      answer: 'Realistic timeline: 4-6 hafte: Energy aur mood mein improvement, Skin slightly better, 2-3 mahine: Periods zyada regular hone lagte hain (ek period aa sakta hai), 4-6 mahine: Cycle consistently 28-40 days par, Ultrasound mein improvement, Acne aur weight mein noticeable change, 6-12 mahine: Hormonal tests mein improvement (LH/FSH ratio, testosterone), Ovulation restore hona. Yaad rakhein: PCOD mein results individual hain — jitni zyada lifestyle compliance, utna jaldi result. Treatment chhor dene se hormones wapas disturb ho jaate hain.',
    },
    {
      _key: 'faq14',
      question: 'Kya PCOD mein surgery ki zaroorat pad sakti hai?',
      answer: 'Zyaatar cases mein nahi — PCOD ek hormonal condition hai, surgical problem nahi. Ek procedure jis par kuch research hai wo hai "Ovarian Drilling" (laparoscopic) — jisme ovaries mein chhote holes banate hain jo androgen production temporarily kam karta hai. Ye tab consider kiya jaata hai jab medications fail ho jayein aur ovulation induce karna ho (fertility ke liye). Ye routine treatment nahi hai — sirf specialist ki advice par specific cases mein. Agar koi sirf diet plan ya irregular periods ke liye surgery recommend kare to second opinion zaroor lein.',
    },
  ],

  sources: [
    {
      _key: 'ccrh2019',
      name: 'Central Council for Research in Homoeopathy (CCRH) — Annual Report 2018-19: Clinical Studies in PCOD',
      url: 'https://ccrhindia.nic.in',
      year: '2019',
    },
    {
      _key: 'nanda2014',
      name: 'Nanda GS, Singh H, Sharma A — Homoeopathic Treatment of Polycystic Ovarian Disease | Indian Journal of Research in Homoeopathy',
      url: 'https://ijrh.org',
      year: '2014',
    },
    {
      _key: 'eshre2023',
      name: 'Teede HJ et al. — International Evidence-Based Guideline for the Assessment and Management of PCOS | ESHRE/ASRM',
      url: 'https://www.monash.edu/medicine/sphpm/mchri/pcos/guideline',
      year: '2023',
    },
    {
      _key: 'icmr2022',
      name: 'ICMR-NAMS Consensus Statement on PCOS in India — Indian Journal of Medical Research',
      url: 'https://ijmr.icmr.org.in',
      year: '2022',
    },
    {
      _key: 'boericke',
      name: "Boericke's Materia Medica — William Boericke, MD (9th Edition) | B. Jain Publishers",
      url: '',
      year: '',
    },
  ],

  youtubeVideos: [
    {
      _key: 'vid1',
      title: 'PCOD Easy Explained — Kya Hai, Kyun Hoti Hai',
      url: 'https://youtu.be/BmCwp30XXRU',
    },
    {
      _key: 'vid2',
      title: 'Insulin Resistance & Weight Gain Due to PCOD',
      url: 'https://youtu.be/DUGyLQhEsxw',
    },
    {
      _key: 'vid3',
      title: 'Pimples Due to PCOD — Skin Problems aur Homeopathy',
      url: 'https://youtu.be/sJ9rrU7Xuoc',
    },
  ],

  selfCheck: 'Agar aapke periods 35 din se zyada gap se aate hain, ya 3+ mahine skip hote hain — aur saath mein weight gain, acne ya unwanted baal bhi hain — to PCOD possible hai. Gynaecologist se ultrasound aur hormonal tests karwayein.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    const result = await client.createOrReplace(pcod)
    console.log('✅ PCOD disease document created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/pcod')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
