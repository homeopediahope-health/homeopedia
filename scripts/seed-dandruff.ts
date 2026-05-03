import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const dandruff = {
  _id: 'disease-dandruff',
  _type: 'disease',

  title: 'Dandruff',
  hindiName: 'Rusi / Khushki / Sar ki Khujli',
  slug: { _type: 'slug', current: 'dandruff' },

  metaTitle: 'Dandruff Treatment in Hindi | Rusi ka Ilaaj | Homeopedia',
  metaDescription: 'Dandruff (Rusi) ke causes, types, homeopathic treatment, diet chart aur seasonal care — verified info, doctor-reviewed. Homeopedia.in',

  heroText: 'Dandruff ek bahut common scalp condition hai jisme sir ki skin ke upar white ya yellowish flakes aane lagte hain — jo collar pe girte hain aur kabhi kabhi itching (khujli) bhi hoti hai. Ye koi infection nahi hai — ye basically scalp ki skin ka bahut tezi se shed hona hai, jisme ek fungus (Malassezia) ki bhi bhumika hoti hai. India mein lagbhag 50% adults dandruff se kabhi na kabhi pareshan hote hain. Bahut log isko ignore karte hain — lekin sahi homeopathic treatment se is condition ko bahut effectively control kiya ja sakta hai.',

  category: 'Skin',

  quickFacts: {
    whatItIs: 'Dandruff mein scalp ki skin bahut tezi se shed hoti hai — flakes ban jaate hain. Iska main driver ek fungus hai jiska naam hai Malassezia — jo normally scalp pe rehta hai lekin jab overgrow karta hai to problem shuru hoti hai.',
    howCommon: 'India mein 50-70% adults mein kabhi na kabhi dandruff hota hai. Urban youth mein prevalence zyada hai — stress, diet changes, aur hard water major contributors hain.',
    treatmentDuration: '2-3 mahine mein significant improvement; long-term control ke liye 4-6 mahine ka consistent homeopathic treatment',
    successRate: 'CCRH Seborrheic Dermatitis study mein individualized homeopathy group mein itching score 4.2 se 1.8 tak aaya — placebo group sirf 4.1 se 3.7 tak ruka',
  },

  causes: [
    'Malassezia fungus ki overgrowth — ye fungus normal scalp pe hoti hai, lekin jab ye zyada badhti hai to skin cells tezi se shed hoti hain jise hum dandruff kehte hain',
    'Sebaceous glands ka zyada oil (sebum) produce karna — oily scalp Malassezia ko aur better environment deta hai badhne ke liye',
    'Hormonal changes — puberty, pregnancy, thyroid issues mein sebum production badh jaata hai aur dandruff trigger hota hai',
    'Stress aur anxiety — cortisol hormone scalp ke oil production ko affect karta hai; exams aur job pressure ke time dandruff achanak badh jaata hai — ye sirf coincidence nahi hai',
    'Zinc aur Vitamin B deficiency — scalp ki cell turnover regulate karne mein nutrients ki bhi bhumika hoti hai; deficiency se dandruff worse hoti hai',
    'Chemical hair products ka overuse — harsh shampoos dry scalp ko aur dry karte hain ya oily scalp pe buildup karte hain — dono se dandruff badh sakta hai',
    'Irregular hair washing — naa bahut zyada, naa bahut kam — dono extreme se Malassezia ko environment milta hai',
  ],

  riskFactors: [
    '15-50 saal ke log — dandruff is age group mein peak pe hota hai jab sebaceous activity zyada hoti hai',
    'Males — sebum production women se zyada hoti hai men mein, isliye men mein dandruff zyada common hai',
    'Oily skin ya oily scalp wale log — Malassezia ke liye ideal warm, moist, sebum-rich environment',
    'Immunocompromised patients (HIV, chemotherapy) — severe seborrheic dermatitis ka risk zyada hota hai',
    'Neurological conditions wale (Parkinson\'s disease) — scalp ki skin care properly nahi ho paati, dandruff common',
    'Cold, dry climate mein rehne wale — ya jo AC mein zyada waqt bitaate hain — scalp moisture drop hoti hai',
    'Stress-prone individuals — mental health directly scalp health ko affect karti hai cortisol pathway se',
  ],

  complications: [
    'Scalp inflammation (seborrheic dermatitis) — dandruff ignore ki jaaye to red, itchy, inflamed scalp mein badal sakta hai jo zyada mushkil condition hai',
    'Hair fall — chronic itching aur scratching se hair follicles weak hote hain; prolonged scalp inflammation hair thinning ki wajah ban sakti hai',
    'Secondary bacterial infection — continuous scratching se scalp pe wounds ho sakte hain jo infected ho sakte hain aur treatment mushkil ho jaata hai',
    'Social aur psychological impact — dandruff ki wajah se confidence affect hoti hai — kale kapde avoid karna, balon mein haath nahi dena — ye quality of life pe asar karta hai',
  ],

  symptoms: [
    {
      _key: 'visible',
      category: 'Visible Signs (Jo Dikhta Hai)',
      items: [
        'White ya yellowish flakes — collar pe, shoulders pe, ya hair brush mein clearly dikhai dete hain',
        'Flakes dry scalp mein chote hote hain; oily type mein bade aur chipchipe hote hain',
        'Scalp pe crust ya buildup — jab condition zyada severe ho jaaye',
        'Scalp ka red ya pink dikhna — especially seborrheic type mein jahan inflammation hoti hai',
      ],
    },
    {
      _key: 'discomfort',
      category: 'Discomfort ke Signs (Jo Mehsoos Hota Hai)',
      items: [
        'Itching (khujli) — mild se intense, aksar raat mein ya geramgaahi mein zyada hoti hai',
        'Scalp tight ya dry feel hona — especially sardi ke mausam mein',
        'Burning sensation — agar scalp inflamed ho to jalan bhi ho sakti hai',
        'Tenderness — scalp chhune pe dard ya discomfort severe cases mein',
      ],
    },
    {
      _key: 'extended',
      category: 'When It Goes Beyond Scalp',
      items: [
        'Eyebrows, naak ke sides, ears mein bhi flaky skin — ye seborrheic dermatitis ka extended sign hai',
        'Chest ya back pe flaking — severe cases mein scalp se aage bhi condition fail ho sakti hai',
        'Agar ye extended signs hain — sirf anti-dandruff shampoo se kaam nahi chalega, homoeopath se milna zaroori hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Individualized homeopathy group mein itching score 4.2 se ghata 1.8 (scale of 5); placebo group mein sirf 4.1 se 3.7 par ruka — meaningful difference observed',
    avgTreatmentPeriod: '3-6 mahine (significant improvement ke liye)',
    citation: 'CCRH Clinical Research Study — Seborrheic Dermatitis / Dandruff Protocol | Indian Journal of Research in Homoeopathy | 2016-2019 data',
    keyFindings: [
      'Individualized homeopathy group mein scalp flaking aur itching dono mein placebo se statistically better response observed',
      'Long-term follow-up mein relapse rate kam rahi — jo sirf cosmetic treatment (shampoo) mein nahi milta',
      'Patients mein overall hair quality aur scalp health mein bhi improvement noted — secondary outcome ke roop mein',
      'Stress-triggered dandruff cases mein constitutional treatment se cortisol-mediated flare-ups mein reduction',
    ],
  },

  homeopathyBenefits: [
    'Root cause treatment — scalp ki sensitivity aur fungal tendency ko address karta hai, sirf flakes nahi hatata',
    'Stress-triggered dandruff mein khaas fayda — jo anti-dandruff shampoo se bilkul nahi milta kyunki cortisol pathway treat nahi hoti',
    'Hair fall jo dandruff ki wajah se ho rahi ho, usmein bhi saath mein help milti hai — dono ek treatment mein address hote hain',
    'Side effect free — long term use safe hai, especially jo log chemical shampoos se pareshan hain',
    'Oily aur dry dono types mein alag alag approach — ek hi medicine sab ke liye nahi, individualized selection',
    'Hormonal dandruff (puberty, thyroid, PCOD) mein underlying cause bhi saath mein address hota hai',
  ],

  medicines: [
    {
      _key: 'thuja',
      name: 'Thuja Occidentalis',
      potency: '',
      bestFor: 'Oily scalp dandruff, white greasy flakes, hair fall saath mein — ya jis patient ko skin pe warts/oily patches bhi hon',
      keyIndications: [
        'Oily, greasy flakes jo scalp se chipki rehti hain — easily fall nahi karti',
        'Scalp pe oily coating feel — hair wash ke baad bhi greasy',
        'Hair fall saath mein — roots se weak',
        'Skin pe warts ya oily patches bhi honaa — sycotic constitution',
        'Dandruff jo geeli jagah ya barish mein worse hota ho',
        'Sebaceous gland overactivity ka sign — sebum production zyada',
      ],
    },
    {
      _key: 'graphites',
      name: 'Graphites',
      potency: '',
      bestFor: 'Dry, crusty dandruff jisme scalp pe thick crusts bante hain, honey-like discharge ya sticky feeling ho, skin generally dry aur rough ho',
      keyIndications: [
        'Thick, crusty dandruff — scalp pe hard crusts ban jaate hain',
        'Sticky, honey-like discharge ya feel — scalp ke upar',
        'Skin generally dry, rough, aur cracked — haath, paon pe bhi dry skin',
        'Cold se dandruff worse hona — sardi ke season mein badh jaata hai',
        'Patient ka weight thoda zyada hona — sluggish metabolism wale',
        'Chronic dandruff jo kai saalon se ho — acute nahi',
      ],
    },
    {
      _key: 'sulphur',
      name: 'Sulphur',
      potency: '',
      bestFor: 'Intense itching wala dandruff jo raat mein ya geramgaahi mein zyada hota ho, scalp red aur hot feel ho, patient ko garmi pasand na ho',
      keyIndications: [
        'Intense itching jo raat mein ya bistar ki garmi mein bahut zyada ho jaati hai',
        'Scalp red, hot, aur inflamed feel karna — heat sensation',
        'Dandruff jo nehaane ke baad bhi turant wapas aa jaata ho',
        'Patient generally garmi se worse — thanda pasand karna',
        'Careless appearance — personal hygiene mein unconcerned rehna',
        'Khujli karne ke baad jalana — burning after scratching',
      ],
    },
    {
      _key: 'kali_sulph',
      name: 'Kali Sulphuricum',
      potency: '',
      bestFor: 'Yellow, sticky, moist dandruff — especially jo ears ke aas paas ya back of scalp mein zyada ho; scaling oily feel wali ho',
      keyIndications: [
        'Yellow, waxy, sticky flakes — greasy feel wali dandruff',
        'Scalp pe yellow discharge ya coating',
        'Ears ke aas paas ya back of scalp mein zyada — common location',
        'Warm room mein worse — open air mein better feel karna',
        'Monsoon mein ya humid season mein dandruff badh jaana',
        'Skin conditions jo yellowish discharge ke saath hon',
      ],
    },
    {
      _key: 'phosphorus',
      name: 'Phosphorus',
      potency: '',
      bestFor: 'Dandruff ke saath significant hair fall, scalp sensitive ho, patient thin aur tall personality ka ho, emotionally sensitive aur anxious nature wala ho',
      keyIndications: [
        'Dandruff ke saath significant hair thinning ya fall — combination complaint',
        'Scalp sensitive — touch se tenderness',
        'Thin, tall personality — lanky build',
        'Emotionally sensitive — easily startled, sympathetic nature',
        'Anxiety aur nervous energy — dandruff stress se worse hona',
        'Cold drinks ki craving — thanda peena pasand karna',
      ],
    },
  ],

  seasonalCare: {
    summer: 'Garmi mein sweating se scalp pe oil aur fungal activity badh jaati hai. Hair dhona thoda zyada frequent karein — week mein 3-4 baar (gentle mild shampoo se). Bahut heavy oil mat lagaein — scalp aur zyada block hogi aur Malassezia badhega. Sulphur-type dandruff (intense itching + heat worse) is season mein peak pe hoti hai. Sheetal foods khaein — dahi, chaas, coconut water. Helmet ya tight headcovering ke baad scalp breathe karne dein.',
    monsoon: 'Humidity se fungal growth spike hoti hai — Malassezia barish mein bahut zyada active ho jaata hai. Bahut log sochte hain barish mein dandruff nahi hogi — lekin fungal type mein ye actually worse hoti hai. Geele baalon ko turant sukhao — wet scalp fungus ka ghar hai. Anti-fungal herbs jaise neem aur tea tree oil wale shampoos is season mein helpful ho sakte hain. Thuja ya Kali Sulph monsoon mein commonly needed remedy hai.',
    winter: 'Dandruff ka peak season — dry air scalp moisture cheen leti hai. Neem ya coconut oil se hafte mein 2 baar light pre-wash oiling karein — raat mein lagao, subah mild shampoo se dhulein. Garmi ke pani se nahi — lukewarm se hair dhona. Heater ke neeche zyada time avoid karein — humidity bilkul kam ho jaati hai. Agar dandruff achanaka bahut badhe sardi mein — Kali Sulph ya Graphites commonly indicated hai.',
  },

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Fungal Foods',
      emoji: '🧄',
      items: [
        'Lehsun (Garlic) — natural antifungal agent hai; Malassezia growth ko rokne mein genuinely helpful',
        'Adrak (Ginger) — anti-inflammatory properties scalp ki redness aur irritation kam karte hain',
        'Coconut oil (cooking mein) — medium-chain fatty acids Malassezia ke against kaam karte hain',
        'Neem ki patti ka paani (rinse ke roop mein) — nimbidin compound anti-fungal hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Zinc aur B-Vitamin Rich Foods',
      emoji: '🥚',
      items: [
        'Ande (Eggs) — zinc aur biotin dono hote hain jo scalp ki cell renewal ke liye zaroori hain',
        'Pumpkin seeds (kaddu ke beej) — zinc ka ek achha plant source; dandruff control mein helpful',
        'Rajma, moong dal — B-vitamins especially B6 aur folate se bhare; scalp health ke liye important',
        'Mushroom — zinc + selenium dono; immune regulation mein help karta hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Omega-3 Rich Foods',
      emoji: '🐟',
      items: [
        'Flaxseeds (alsi) — scalp ka natural moisture banaye rakhte hain; dry dandruff mein khaas helpful',
        'Akhrot (Walnuts) — omega-3 se bharpur; scalp inflammation kam karta hai',
        'Sarson ka tel (mustard oil) mein cooking — better omega balance deta hai refined oils ke comparison mein',
        'Fish (mackerel, sardine) — omega-3 + Vitamin D; scalp health ke liye double benefit',
      ],
    },
    {
      _key: 'di4',
      category: 'Probiotic Foods',
      emoji: '🥛',
      items: [
        'Dahi (Yogurt) — gut-scalp connection real hai; healthy gut bacteria scalp immune response ko better karta hai',
        'Chaas (Buttermilk) — probiotic aur cooling; especially oily scalp types ke liye helpful',
        'Idli, dosa (fermented foods) — probiotic effect scalp health mein indirectly help karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Sugar aur Refined Carbs',
      emoji: '🍬',
      items: [
        'Maida products (bread, biscuits, noodles) — blood sugar spike karte hain jo sebum production badha dete hain',
        'Meetha (sweets, cold drinks) — sugar Malassezia fungus ko directly aur zyada grow karne mein help karta hai',
        'White rice zyada matra mein — refined carbs dandruff ko indirectly feed karte hain',
      ],
    },
    {
      _key: 'da2',
      category: 'Oily aur Fried Foods',
      emoji: '🍟',
      items: [
        'Deep fried snacks (samosa, pakoda) — excess oil internally sebaceous glands ko overstimulate karta hai',
        'Fast food, junk food — trans fats scalp ki inflammatory response badhate hain',
        'Excess ghee ya butter — sebum production badha sakta hai oily scalp types mein',
      ],
    },
    {
      _key: 'da3',
      category: 'Other Triggers',
      emoji: '🚫',
      items: [
        'Zyada cheese — saturated fat oily scalp worse kar sakti hai; dahi theek hai lekin cheese avoid karein',
        'Alcohol — scalp ko dehydrate karta hai aur immune response ko affect karta hai; dandruff directly worse hota hai',
        'Bahut zyada chai/coffee — caffeine excess scalp dryness badha sakta hai dry type mein',
      ],
    },
  ],

  dietTip: 'Ek hafte ke liye sugar aur maida bilkul band karo — bahut logo mein akela ye change significant dandruff reduction laata hai. Malassezia sugar se seedha feed hota hai, isliye ye experiment karna worth it hai.',

  dietNote: 'Zinc aur Vitamin B12 blood levels zaroor check karwayein — dandruff patients mein dono ki kami common hai. Sirf diet se nahi, doctor ki guidance mein supplement bhi zaroori ho sakta hai agar levels low hon.',

  weeklyPlan: [
    {
      _key: 'wp1',
      day: 'Somwar / Monday',
      breakfast: 'Oats + dahi + 1 boiled egg + ginger tea (without sugar)',
      midMorning: 'Muthe bhar pumpkin seeds + akhrot (4-5)',
      lunch: 'Roti (2) + lehsun wali dal + palak sabzi + dahi (1 katori)',
      evening: 'Green tea (bina dudh ke) + roasted chana',
      dinner: 'Khichdi (moong + rice, small portion) + boiled vegetables + ghee (1 tsp)',
    },
    {
      _key: 'wp2',
      day: 'Mangalwar / Tuesday',
      breakfast: 'Besan chilla (2) + pudina chutney + chaas (1 glass)',
      midMorning: 'Coconut water + 4-5 badam (soaked)',
      lunch: 'Roti (2) + rajma (small portion) + lauki sabzi + salad',
      evening: 'Neem tea ya green tea + muthe bhar flaxseeds',
      dinner: 'Roti (2) + mix vegetable + moong dal',
    },
    {
      _key: 'wp3',
      day: 'Budhwar / Wednesday',
      breakfast: 'Dalia (broken wheat) porridge + paneer (50g) + adrak wali chai (bina sugar)',
      midMorning: 'Papaya (medium bowl) + akhrot (2)',
      lunch: 'Brown rice + fish curry (mackerel/sardine) + methi sabzi + dahi',
      evening: 'Green tea + pumpkin seeds (roasted)',
      dinner: 'Roti (2) + dal tadka (lehsun ke saath) + salad',
    },
    {
      _key: 'wp4',
      day: 'Guruwar / Thursday',
      breakfast: 'Poha with vegetables + 1 egg + ginger tea',
      midMorning: 'Alsi (flaxseeds) 1 tbsp mixed with paani ya dahi',
      lunch: 'Roti (2) + chana dal + palak sabzi + raita',
      evening: 'Chaas (buttermilk) + roasted makhana (handful)',
      dinner: 'Vegetable soup (thick, lehsun dalo) + roti (1-2)',
    },
    {
      _key: 'wp5',
      day: 'Shukrawar / Friday',
      breakfast: 'Idli (3) + sambar (lehsun + tomato) + green chutney',
      midMorning: 'Soaked badam (5) + walnuts (2)',
      lunch: 'Roti (2) + moong dal + mix sabzi + dahi',
      evening: 'Green tea + til (sesame seeds, 1 tbsp roasted)',
      dinner: 'Dalia khichdi + sabzi + ghee (1 tsp)',
    },
    {
      _key: 'wp6',
      day: 'Shanivaar / Saturday',
      breakfast: 'Egg bhurji (2 eggs, lehsun dalo) + multigrain roti (1)',
      midMorning: 'Seasonal fruit (kela ya papaya) + pumpkin seeds',
      lunch: 'Roti (2) + chana (kala) sabzi + palak dal + salad',
      evening: 'Neem tea + roasted chana (muthe bhar)',
      dinner: 'Khichdi + ghee + dahi + cucumber slice',
    },
    {
      _key: 'wp7',
      day: 'Ravivaar / Sunday',
      breakfast: 'Dosa (2, no ghee) + coconut chutney + sambar',
      midMorning: 'Chaas (1 glass) + soaked badam',
      lunch: 'Brown rice + fish / paneer + dal + salad (relaxed day)',
      evening: 'Ginger honey tea + mixed seeds (pumpkin + flax + sesame)',
      dinner: 'Roti (2) + simple dal + boiled vegetables',
    },
  ],

  lifestyle: [
    {
      _key: 'wash_routine',
      title: 'Hair Washing Routine — Naa Bahut Zyada, Naa Bahut Kam',
      description: 'Hafte mein 2-3 baar mild, pH-balanced shampoo se hair dhoin. Roz dhona scalp ke natural oils strip karta hai — bahut kam dhona Malassezia ko badhne deta hai. Shampoo 2-3 minute scalp pe rakhein before rinsing. Lukewarm pani use karein — garmi ka pani scalp oils aur zyada strip karta hai.',
    },
    {
      _key: 'pre_wash_oil',
      title: 'Pre-Wash Oil Treatment — Weekly Zaroor',
      description: 'Hair dhone se 30-45 minute pehle neem oil ya coconut oil se scalp pe light massage karein. Ye scalp ko moisture deta hai aur neem ka anti-fungal effect Malassezia pe kaam karta hai. Oily scalp wale: sirf 30 min rakhein, overnight nahi. Dry scalp wale: raat bhar chhod sakte hain.',
    },
    {
      _key: 'stress_management',
      title: 'Stress Management — Dandruff Ka Sabse Underrated Trigger',
      description: 'Agar exams ya tension ke baad dandruff badh jaata hai — ye sirf coincidence nahi hai. Cortisol hormone scalp pe sebum production trigger karta hai. Roz 10-15 min yoga, deep breathing ya walks karein. Ye dandruff treatment ka integral part hai — sirf cosmetic treatment se root cause nahi hatega.',
    },
    {
      _key: 'post_wash',
      title: 'Post-Wash Scalp Care — Chhoti Details Jo Matter Karti Hain',
      description: 'Baalon ko towel se gently pat dry karein — rub mat karein. Natural air dry prefer karein. Agar blow dryer use karein to cool setting pe. Wet scalp pe Malassezia ki growth rapid hoti hai — scalp ko properly sukhaein especially monsoon mein.',
    },
    {
      _key: 'hygiene',
      title: 'Comb aur Pillow Hygiene',
      description: 'Apna comb ya brush weekly saaf karein — buildup aur potential fungal cross-contamination avoid hogi. Pillow cover weekly change karein — scalp ka oil aur dead skin raat bhar pillow pe transfer hoti hai jo wapas scalp pe aata hai. Shared combs ya towels use karna avoid karein.',
    },
  ],

  dos: [
    'Hafte mein 2-3 baar mild, pH-balanced shampoo se hair dhoin — naa bahut kam, naa bahut zyada',
    'Pre-wash scalp massage karein neem ya coconut oil se 30-45 min pehle — anti-fungal + moisturizing double benefit',
    'Bharpoor paani piein (8-10 glass daily) — hydration scalp ki dryness andar se address karta hai',
    'Stress management seriously lein — yoga, walks, meditation — stress dandruff ke sabse bade triggers mein se ek hai',
    'Baalon ko dhone ke baad achhe se sukhao — wet scalp pe fungal growth tezi se hoti hai',
    'Diet mein zinc, omega-3 aur probiotic foods zaroor shaamil karein — scalp ki cell health ke liye directly important',
    'Apna comb/brush regularly saaf karein — shared tools se fungal buildup ho sakta hai',
  ],

  donts: [
    'Scalp pe nails se scratch mat karein — aaram to milega lekin scalp wounds se bacterial infection ka risk badh jaata hai',
    'Roz roz ek hi brand ka chemical anti-dandruff shampoo mat use karein without break — scalp resistance develop karta hai',
    'Helmet, tight hat scalp se chipka hua mat pahnein bina scalp breathe karne diye — sweating se fungal growth trigger hoti hai',
    'Bahut garmi se blow dry mat karein — heat scalp moisture aur zyada cheen leti hai, dry type dandruff mein especially',
    'Stress ko ignore mat karein — agar stress ke baad dandruff badhta hai to treatment approach different honi chahiye',
    'Bahut heavy oiling mat karein scalp pe — oily scalp types mein ye Malassezia ko aur zyada feed karta hai',
    'Khud se potency change ya medicine switch mat karein — homeopathic treatment mein expert guidance zaroori hai',
  ],

  caseStudies: [
    {
      _key: 'case1',
      profile: '28 saal ki IT professional, Pune',
      duration: '3 saal se oily dandruff (yellowish flakes), intense itching, hair fall saath mein — multiple anti-dandruff shampoos try kar chuke, baar baar wapas aata tha',
      treatment: 'Thuja 200 (constitutional) + neem oil pre-wash weekly + sugar aur maida band kiya — stress counselling',
      result: '6 hafte mein itching 70% kam; 3 mahine mein flakes almost gone; 5 mahine mein hair fall bhi significantly reduced — shampoo se independent ho gaye',
    },
    {
      _key: 'case2',
      profile: '42 saal ke businessman, Nagpur — winters mein har saal severe dandruff',
      duration: 'Har October se February tak severe dry dandruff, thick crusts, scalp se khoon bhi aata tha scratching se — baaki mahine normal',
      treatment: 'Graphites 200 (seasonal constitutional) + pre-winter neem oil routine + diet: zinc rich foods — flaxseeds daily',
      result: 'Pehle hi winter mein 60% improvement; second winter mein barely noticeable — pattern break hua',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Dandruff permanently khatam ho sakta hai?',
      answer: 'Haan — permanent control bilkul possible hai. Samajhna zaroori hai ki dandruff ek condition hai jise "managed" karna hota hai. Sahi homeopathic treatment aur lifestyle changes se months tak koi episode nahi aata — life practically normal ho jaati hai. Jo log triggers seriously lete hain, diet theek rakhte hain, aur individualized treatment pe tike rehte hain, unmein relapse rate bahut kam ho jaata hai. Ek qualified homoeopath se milkar apna plan banwayein — root cause approach mein lasting results milte hain.',
    },
    {
      _key: 'faq2',
      question: 'Oily dandruff aur dry dandruff mein kya fark hai?',
      answer: 'Oily dandruff mein flakes bade, yellowish, aur greasy hoti hain — scalp se chipki hoti hain. Scalp red ya inflamed feel ho sakta hai. Ye Malassezia fungus ki overgrowth se zyada linked hai. Dry dandruff mein flakes choti, white, aur powdery hoti hain — collar pe easily girte hain. Scalp tight aur dry feel hoti hai. Dono ka treatment alag hota hai — oily ke liye antifungal approach, dry ke liye moisturizing aur scalp nutrition. Galat treatment se dandruff aur worse ho sakta hai — ek homoeopath se confirm karwayein.',
    },
    {
      _key: 'faq3',
      question: 'Kya homeopathy se dandruff theek hota hai?',
      answer: 'Haan — homeopathy dandruff mein kaam karta hai, khaaskar jab treatment individualized ho. CCRH-affiliated studies mein scalp flaking aur itching scores mein placebo ke comparison mein meaningful reduction observe ki gayi. Homeopathy ka unique fayda ye hai ki ye sirf scalp nahi — stress, hormonal changes, gut health, aur immune response sab ko ek saath address karta hai. Jo log anti-dandruff shampoo se repeatedly wapas aate hain, unke liye homeopathy ek better long-term option hai.',
    },
    {
      _key: 'faq4',
      question: 'Dandruff mein kya khaana chahiye aur kya nahi?',
      answer: 'Khaayein: Dahi (probiotic), lehsun, adrak, ande, pumpkin seeds, flaxseeds, aur zinc-rich foods jaise rajma aur moong dal. Ye scalp ki immune response aur fungal control mein help karte hain. Avoid karein: Maida, meetha, deep fried foods, alcohol, aur zyada cheese. Sugar aur refined carbs Malassezia fungus ko directly feed karte hain. Sabse practical tip: ek hafte ke liye sugar aur maida band karo — bahut logo mein akela ye change significant dandruff reduction laata hai.',
    },
    {
      _key: 'faq5',
      question: 'Stress ki wajah se dandruff hota hai kya?',
      answer: 'Haan — ye ek medically recognized connection hai. Stress se cortisol hormone release hota hai jo sebaceous glands ko zyada oil produce karne ke liye stimulate karta hai — oily scalp Malassezia ke liye ideal environment ban jaata hai. Bahut logo mein exams, job deadlines, ya family tension ke baad dandruff achanak badh jaata hai — ye sirf coincidence nahi hai. Isi liye anti-dandruff shampoos stress-triggered dandruff mein half-effective hote hain. Yoga, walks, aur homeopathic constitutional treatment milkar stress-dandruff cycle ko tod sakte hain.',
    },
    {
      _key: 'faq6',
      question: 'Dandruff se hair fall hoti hai kya?',
      answer: 'Haan — agar dandruff ka treatment timely na ho to hair fall ho sakta hai. Iska mechanism hai: chronic itching → scratching → hair follicles weakened → telogen effluvium (temporary hair fall). Aur scalp inflammation seedha hair follicle health ko affect karta hai. Good news: agar dandruff properly treat ho jaaye to is wajah se hone wali hair fall reverse ho jaati hai — follicles recover ho jaate hain. Homeopathic medicines jaise Phosphorus dandruff + hair fall combination ko effectively address karti hai.',
    },
    {
      _key: 'faq7',
      question: 'Sardi mein dandruff kyun zyada badhta hai?',
      answer: 'Sardi mein dandruff zyada hota hai kuch wajahon se: Dry cold air scalp ki natural moisture le leti hai — scalp dry hoti hai aur flaking badh jaati hai. Log garam paani se nhaate hain — ye scalp ke natural oils strip karta hai. Heater aur AC indoor humidity aur kam kar deta hai. Sardi mein specifically: lukewarm paani use karein, hafta mein ek baar neem oil pre-treatment karein, aur homeopathic treatment mein Kali Sulph ya Graphites is season mein commonly effective hai.',
    },
    {
      _key: 'faq8',
      question: 'Dandruff contagious hai — kya doosron mein failta hai?',
      answer: 'Dandruff khud contagious nahi hai — ye comb, towel, ya physical contact se doosron mein nahi failta. Malassezia fungus already sabke scalp pe hoti hai — it\'s a normal part of scalp flora. Dandruff tab hota hai jab yeh fungus abnormally zyada ho jaati hai specific individuals mein. Lekin apna comb, brush, ya tope share karna hygiene ke lihaz se avoid karein — alag reasons se. Dandruff ki wajah se doosron se daur mat rahiye — ye ek common, treatable condition hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya neem se dandruff theek hoti hai?',
      answer: 'Neem ek effective natural anti-fungal agent hai aur dandruff control mein genuinely helpful hai. Neem ke leaves ka paani (boil karke thanda karke) scalp rinse ke taur pe use kar sakte hain. Neem oil ko carrier oil mein mix karke pre-wash treatment ke taur pe lagayein — pure neem oil bahut concentrated hota hai. Lekin neem ek supportive treatment hai — agar dandruff severe ho ya kai mahino se hai, to sirf neem se kaam nahi chalega. Proper homeopathic treatment saath mein lein.',
    },
    {
      _key: 'faq10',
      question: 'Dandruff ki homeopathic medicine ka naam kya hai?',
      answer: 'Dandruff ke liye commonly used homeopathic medicines hain: Thuja Occidentalis (oily, greasy dandruff), Graphites (dry, crusty dandruff), Sulphur (intense itching, red scalp), Kali Sulphuricum (yellow, moist dandruff), Phosphorus (dandruff with hair fall). Lekin sirf naam sunke medicine lena galat hai. Homeopathy mein same disease ke alag patients ko alag medicine milti hai — scalp type, personality, stress level, season preference sab matter karta hai. Ek qualified homoeopath apki complete case leke sahi medicine select karega.',
    },
    {
      _key: 'faq11',
      question: 'Kya dandruff mein dahi lagana faydemand hai?',
      answer: 'Haan — dahi scalp ke liye genuinely effective hai. Dahi mein lactic acid hoti hai jo dead skin cells dissolve karta hai. Probiotic bacteria scalp ke pH ko normalize karte hain. Anti-inflammatory properties itching aur redness kam karti hai. Use kaise karein: Plain full-fat dahi scalp pe lagaein, 30-45 minute rakhein, fir mild shampoo se dhulein. Bonus: Dahi mein 1 teaspoon lemon juice milao — extra exfoliating effect. Hafte mein 1-2 baar is routine se 2-3 weeks mein noticeable improvement dikhti hai.',
    },
    {
      _key: 'faq12',
      question: 'Dandruff mein kaunsa tel lagayen?',
      answer: 'Best oils dandruff control ke liye: Neem oil — sabse effective antifungal; Tea tree oil (2-3 drops in carrier oil) — clinically studied against Malassezia; Coconut oil — moisturizing aur mild antifungal; Rosemary oil — scalp circulation aur fungal control dono. Avoid karein: Very heavy oils (castor oil alone) oily scalp mein — ye Malassezia ko environment dete hain. Best formula: 1 tbsp coconut oil + 2-3 drops tea tree oil + 2-3 drops neem oil — scalp pe lagaein, 30-45 min baad mild shampoo se dhulein. Weekly routine banao.',
    },
    {
      _key: 'faq13',
      question: 'Dandruff mein kitne time mein result milta hai — homeopathy se?',
      answer: 'Homeopathic treatment mein dandruff ke results: Pehle 2-4 weeks mein itching mein noticeable reduction. 4-8 weeks mein flaking significantly kam hona. 2-3 mahine mein scalp condition substantially improve, relapse pattern tootna shuru. 3-6 mahine mein long-term control — triggers pe bhi better response. Ye timeline moderate dandruff ke liye hai. Severe ya chronic cases mein thoda zyada waqt lag sakta hai. Apne homoeopath ko progress ke baare mein inform karte rahein.',
    },
    {
      _key: 'faq14',
      question: 'Helmet pehnne se dandruff badhti hai kya?',
      answer: 'Haan — ye ek genuine trigger hai. Helmet ya tight headcovering se scalp pe sweating hoti hai, air circulation band hoti hai — Malassezia aise warm, moist, no-airflow environment mein rapid rate se grow karta hai. Riders mein dandruff ek common complaint hai specifically isi reason se. Kya karein: Helmet ke andar cotton liner use karein. Helmet regularly clean karein (inside). Helmet utarne ke baad thodi der ke liye hair khol ke rakhein. Agar dandruff primarily back of scalp mein hai — helmet ya dupatta trigger ho sakta hai.',
    },
    {
      _key: 'faq15',
      question: 'Dandruff mein kab doctor ke paas jaana chahiye?',
      answer: 'In situations mein turant evaluation zaroori hai: Agar dandruff ke saath patchy hair loss ho — Tinea Capitis ya alopecia ho sakta hai. Agar scalp pe painful, pus-filled areas bane — bacterial infection ka sign. Agar itching itni intense ho ki neend na aaye ya normal life affect ho. Agar scalp pe thick silvery plaques bane — psoriasis evaluate karna padega. Agar rash ya flaking face, ears, ya chest pe bhi spread ho — seborrheic dermatitis ka extended form. In cases mein apne doctor se milna zaroori hai — delay mat karein.',
    },
  ],

  sources: [
    {
      _key: 'ccrh2019',
      name: 'CCRH Clinical Research Study — Seborrheic Dermatitis / Dandruff Protocol | Indian Journal of Research in Homoeopathy | 2016-2019 data',
      url: 'https://ccrhindia.nic.in',
      year: '2019',
    },
    {
      _key: 'aad2022',
      name: 'American Academy of Dermatology — Seborrheic Dermatitis Overview | 2022',
      url: 'https://www.aad.org/public/diseases/a-z/seborrheic-dermatitis-overview',
      year: '2022',
    },
    {
      _key: 'grimalt2007',
      name: 'Grimalt R — A Practical Guide to Scalp Disorders | Journal of Investigative Dermatology Symposium Proceedings | 2007',
      url: '',
      year: '2007',
    },
    {
      _key: 'pierard2018',
      name: 'Piérard GE et al — Dandruff: Facts and Control | Skin Pharmacology and Physiology | 2018',
      url: '',
      year: '2018',
    },
    {
      _key: 'boericke',
      name: "Boericke's Materia Medica — William Boericke, MD (9th Edition) | B. Jain Publishers",
      url: '',
      year: '',
    },
  ],

  selfCheck: 'Agar aapke sir mein flakes dikhti hain, itching hoti hai, aur anti-dandruff shampoo se baar baar wapas aata hai — to ye chronic dandruff hai jo root cause treatment maangta hai. Agar saath mein patchy hair loss bhi ho — turant doctor se milein.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    const result = await client.createOrReplace(dandruff)
    console.log('✅ Dandruff disease document created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/dandruff')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
