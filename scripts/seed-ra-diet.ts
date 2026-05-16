import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-rheumatoid-arthritis',
  _type: 'diet',
  title: 'Rheumatoid Arthritis Diet Chart',
  hindiName: 'Gathiya / Sandhivata',
  slug: { _type: 'slug', current: 'rheumatoid-arthritis' },
  relatedDiseaseSlug: 'rheumatoid-arthritis',
  category: 'Joints',
  metaTitle: 'Rheumatoid Arthritis (Gathiya) Diet — Kya Khayein | Homeopedia',
  metaDescription: 'Gathiya (RA) diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Rheumatoid Arthritis ek autoimmune condition hai jisme body khud apne joints pe attack karti hai — aur kuch foods is immune response aur joint inflammation (sujan) ko directly badhate ya ghatate hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah khaali pet garam paani piyo', reason: 'gut inflammation kam hoti hai jo RA ke immune flare-ups ka ek trigger hai' },
    { _key: 'eh2', habit: 'Raat 7:30 baje ke baad khaana avoid karo', reason: 'late eating gut microbiome disturb karta hai jo RA mein immune dysregulation badhata hai' },
    { _key: 'eh3', habit: 'Har 3-4 ghante mein kuch khao', reason: 'blood sugar stable raho — sugar spike RA mein TNF-alpha cytokines badhata hai jo joint damage accelerate karta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Brown rice', reason: 'refined chawal se kam glycemic index — sugar spike nahi hota jo RA inflammation trigger karta hai' },
        { _key: 'i2', food: 'Jowar / Bajra roti', reason: 'gluten-free grain — RA patients mein gut permeability improve karta hai' },
        { _key: 'i3', food: 'Daliya (broken wheat)', reason: 'fiber se bhara — gut bacteria ko feed karta hai jo RA mein immune regulation karta hai' },
        { _key: 'i4', food: 'Rajgira (amaranth) roti', reason: 'anti-inflammatory amino acids — RA mein joint cartilage ko support karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'folate aur iron — RA mein anemia common hai, palak dono address karta hai' },
        { _key: 'i6', food: 'Karela', reason: 'bitter compounds joint inflammation markers CRP ko reduce karte hain' },
        { _key: 'i7', food: 'Lauki', reason: 'gut ki sujan kam karta hai — RA ka immune trigger gut health se directly linked hai' },
        { _key: 'i8', food: 'Gajar (winter mein)', reason: 'beta-carotene — RA mein oxidative stress kam karta hai' },
        { _key: 'i9', food: 'Shimla mirch (capsicum)', reason: 'Vitamin C — joint collagen synthesis support karta hai jo RA mein damage hota hai' },
        { _key: 'i10', food: 'Adrak (ginger)', reason: 'gingerol compound — clinically proven anti-inflammatory — RA ke joint pain mein seedha asar karta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Amla', reason: 'Vitamin C sabse zyada — RA mein collagen breakdown rokta hai' },
        { _key: 'i12', food: 'Papaya', reason: 'papain enzyme — joint stiffness kam karne mein help karta hai' },
        { _key: 'i13', food: 'Seb (apple)', reason: 'quercetin flavonoid — RA mein inflammatory cytokines block karta hai' },
        { _key: 'i14', food: 'Jamun (seasonal)', reason: 'anthocyanins — joint oxidative damage se protect karta hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i15', food: 'Moong dal (chilke wali)', reason: 'easily digestible protein — RA mein gut inflammation badhaye bina protein milti hai' },
        { _key: 'i16', food: 'Masoor dal', reason: 'iron aur folate — RA-related anemia manage karta hai — methotrexate lene walon ke liye important' },
        { _key: 'i17', food: 'Chana dal', reason: 'plant protein + fiber — joint health ke liye muscle support karta hai' },
        { _key: 'i18', food: 'Rajma (kam quantity, achhi tarah pakaya)', reason: 'protein achha hai lekin soaking zaroori hai — zyada na khao' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i19', food: 'Haldi + kali mirch wala doodh (ya paani mein)', reason: 'curcumin RA mein NF-kB pathway block karta hai — kali mirch piperine absorption 20x badhata hai — dono saath zaroori' },
        { _key: 'i20', food: 'Adrak chai (plain)', reason: 'gingerol — COX-2 enzyme inhibit karta hai jaise ibuprofen — natural anti-inflammatory' },
        { _key: 'i21', food: 'Til ka tel (cooking ke liye)', reason: 'sesamin compound — RA joint inflammation markers reduce karta hai' },
        { _key: 'i22', food: 'Sarson ka tel', reason: 'ALA omega-3 — body mein anti-inflammatory EPA mein convert hota hai' },
        { _key: 'i23', food: 'Jeera + dhania ka paani', reason: 'gut microbiome balance karta hai jo RA immune response regulate karta hai' },
        { _key: 'i24', food: 'Methi dana (bheega hua)', reason: 'saponins — joint stiffness subah mein notably kam hoti hai RA patients mein' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla machli (boiled ya light cook)', reason: 'omega-3 EPA/DHA — RA mein joint inflammation directly reduce karta hai — week mein 2-3 baar' },
    { _key: 'nva2', food: 'Ande (2, boiled)', reason: 'Vitamin D aur protein — RA mein Vitamin D deficiency common hai — anda dono deta hai' },
    { _key: 'nva3', food: 'Chicken (boiled ya grilled, no fry)', reason: 'lean protein — RA mein muscle loss rokta hai jo joints pe extra load badhata hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Red meat (mutton, beef, lamb)', reason: 'arachidonic acid — body mein prostaglandins badhata hai jo RA joint inflammation accelerate karta hai' },
    { _key: 'nvav2', food: 'Processed meat (sausage, salami, packaged chicken)', reason: 'advanced glycation end products (AGEs) — RA mein joint tissue damage badhate hain' },
    { _key: 'nvav3', food: 'Fried machli / fried chicken', reason: 'trans fats — omega-3 ka anti-inflammatory asar cancel ho jaata hai cooking method se' },
    { _key: 'nvav4', food: 'Shellfish / jhinga', reason: 'high purine + heavy to digest — RA patients mein uric acid bhi zyada hota hai — double problem' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour) roti / bread', reason: 'gut mein leaky gut badhata hai — RA mein immune activation ka seedha trigger hai' },
        { _key: 'ri2', food: 'Packaged biscuits / namkeen', reason: 'refined carbs + trans fat — RA mein inflammatory marker CRP spike karta hai' },
        { _key: 'ri3', food: 'White pasta / instant noodles', reason: 'high glycemic — TNF-alpha cytokines badhata hai jo RA joint damage ka central driver hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full-fat packaged doodh (market wala)', reason: 'saturated fat aur casein protein — kuch RA patients mein immune response trigger karta hai' },
        { _key: 'ri5', food: 'Paneer (zyada matra mein)', reason: 'saturated fat zyada — RA inflammation badhata hai — 1 small piece occasionally okay' },
        { _key: 'ri6', food: 'Cream / butter', reason: 'arachidonic acid — prostaglandin pathway activate karta hai jo RA joint pain badhata hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Cheeni (zyada matra mein)', reason: 'TNF-alpha aur IL-6 cytokines badhata hai jo directly RA flare-ups trigger karte hain' },
        { _key: 'ri8', food: 'Deep fried khaana (puri, pakoda, samosa)', reason: 'trans fats — omega-3 ka anti-inflammatory asar block karta hai' },
        { _key: 'ri9', food: 'Bahut zyada mirch ka achar / pickle', reason: 'sodium zyada — joint mein water retention aur swelling badhata hai' },
        { _key: 'ri10', food: 'Bakery sweets (cake, pastry)', reason: 'refined sugar + maida + trans fat — RA mein teen triggers ek saath' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri11', food: 'Cold drinks / soda', reason: 'phosphoric acid + sugar — RA mein calcium absorption rokta hai jo joint health ke liye zaroori hai' },
        { _key: 'ri12', food: 'Alcohol', reason: 'RA medicines (methotrexate, leflunomide) ke saath dangerous combination — liver pe double load' },
        { _key: 'ri13', food: 'Packaged fruit juice', reason: 'fructose concentrate — inflammatory markers badhata hai — whole fruit better option hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['1 glass garam paani + adha nimbu + 1 pinch haldi', '1 tsp bheegi methi dana (raat bhar bheega hua) + garam paani'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya (vegetables ke saath) + 1 glass plain lassi (ghar ka dahi)', 'Moong dal chilla (2) + pudina chutney'], nonVegOption: '2 boiled ande + 1 jowar roti + 1 katori sabzi' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seasonal fruit (seb ya papaya)', 'Bhuna chana (1 handful) + adrak chai (1 cup, no milk)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal (chilke wali) + palak/lauki sabzi + kachha pyaz', 'Brown rice (1 katori) + masoor dal + karela sabzi + salad'], nonVegOption: 'Rohu machli (boiled/lightly cooked) + 1 roti + sabzi + salad' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak-haldi chai + 4-5 akhrot (walnut)', 'Roasted makhana (1 bowl)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + sabzi + dal + 1 katori ghar ka plain dahi', 'Khichdi (moong dal + brown rice + ghee) — RA flare mein ideal'], nonVegOption: 'Light chicken soup (no cream, no maida) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Garam haldi doodh (1 cup — low-fat — ghar ka)', 'Garam paani mein adha tsp haldi + pinch kali mirch'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Garam paani + nimbu + haldi',
      vegNashta: 'Daliya + sabzi',
      vegDopahar: 'Bajra roti + masoor dal + palak sabzi',
      vegShaam: 'Adrak chai + akhrot',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled ande + 1 roti',
      nonVegDopahar: 'Rohu machli (light cook) + roti + sabzi',
      nonVegRaat: 'Light chicken soup + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi + garam paani',
      vegNashta: 'Moong dal chilla + chutney',
      vegDopahar: 'Brown rice + chana dal + lauki sabzi + salad',
      vegShaam: 'Bhuna chana + seb',
      vegRaat: '2 roti + arhar dal + shimla mirch sabzi',
      nonVegNashta: 'Egg bhurji (no butter, 2 ande) + roti',
      nonVegDopahar: 'Brown rice + dal + grilled chicken + sabzi',
      nonVegRaat: 'Khichdi + ghar ka dahi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Garam paani + nimbu + haldi',
      vegNashta: 'Poha (vegetables ke saath)',
      vegDopahar: 'Jowar roti + rajma (achhi tarah pakaya) + gajar sabzi',
      vegShaam: 'Makhana + adrak chai',
      vegRaat: 'Khichdi + ghar ka dahi',
      nonVegNashta: '2 boiled ande + poha (thoda sa)',
      nonVegDopahar: 'Katla machli (boiled) + roti + lauki sabzi',
      nonVegRaat: 'Chicken soup (thin, no cream) + roti',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Bheegi methi + garam paani',
      vegNashta: 'Daliya + haldi doodh',
      vegDopahar: '2 roti + moong dal + karela sabzi + kachha pyaz',
      vegShaam: 'Papaya + 4 akhrot',
      vegRaat: 'Brown rice + masoor dal + palak sabzi',
      nonVegNashta: 'Egg vegetable chilla + chutney',
      nonVegDopahar: 'Brown rice + dal + rohu machli + salad',
      nonVegRaat: '2 roti + arhar dal + sabzi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Joints Mein Zyada Sujan-Dard Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi (moong dal + rice + ghee) aur garam soup khao — easy to digest, gut pe load nahi',
        'Rajma, chana, heavy dal — temporarily avoid karo us din — even if normally allowed hain',
        'Adrak + haldi ka kadha (no milk, sirf paani mein) din mein 2-3 baar piyo — RA flare mein joint inflammation kam karne mein fastest natural option',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Safe vrat options: sabudana khichdi (tel kam), fruits, kuttu ki roti, singhare ka atta',
        'Vrat mein bhi haldi + adrak ka garam paani peete raho — inflammation management rukni nahi chahiye',
        'Avoid karo: sabudana vada (deep fried) aur bahut zyada sendha namak — RA mein sodium retention joint swelling badhata hai',
        'Warning: agar aap methotrexate ya leflunomide pe hain — long fasting (nirjala vrat) se pehle doctor se zaroor poochho',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: dal tadka (maida nahi) + roti + plain raita + salad — safe combination',
        'Avoid karo: paneer butter masala, koi bhi creamy gravy, fried items, packaged drinks — RA ke sabse bade triggers bahar khaane mein yahi hain',
        'Practical hack: restaurant mein "less oil, no cream" request karo — zyada tar restaurants adjust karte hain',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, dry amla (plain), akhrot, methi dana (zip bag mein) — teeno RA ke liye specifically useful hain',
        'Train / hotel mein: dal chawal ya plain dal roti order karo — almost har jagah milti hai — "no butter, no ghee extra" bolna better hai',
      ],
    },
  ],

  proTip: 'Haldi doodh sirf raat ko mat piyo — subah khaali pet bhi adha glass garam paani mein adha tsp haldi + ek pinch kali mirch lo. Curcumin absorption subah khaali pet better hoti hai — aur joint stiffness jo RA mein subah sabse zyada hoti hai, uspe seedha asar hota hai.',
  importantNote: 'Ye chart ek general guide hai — har RA patient ki condition, disease activity, aur medicines alag hoti hain. Apni specific condition ke hisaab se apne homoeopath ya rheumatologist se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Jab aap anti-inflammatory diet follow karte hain — body ki overall inflammation load kam hoti hai — aur homeopathic medicines us reduced load pe behtar response deti hain. Diet sahi ho toh treatment ki speed aur depth dono improve hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya RA (Gathiya) mein dahi khana theek hai?',
      answer: 'Haan — ghar ka fresh bana plain dahi (1 small katori) allowed hai — lekin packaged / market wala set dahi avoid karein.\nFresh homemade dahi mein probiotics hote hain jo RA mein gut microbiome balance karte hain — gut health RA immune response ka ek central factor hai.\nPackaged dahi mein preservatives aur higher fat hoti hai jo RA mein inflammatory response trigger kar sakti hai.\nSimple rule: ghar ka plain dahi — theek. Packaged, flavored, ya bahar se raita — avoid.',
    },
    {
      _key: 'faq2',
      question: 'RA mein nimbu / khatta khana chahiye ya band karna padega?',
      answer: 'Nimbu band karne ki zaroorat nahi — limited matra mein okay hai.\nNimbu mein Vitamin C hota hai jo RA mein joint collagen synthesis support karta hai.\nLekin bahut zyada khatta — imli, zyada amchur, pickle — sodium aur acid load joint inflammation badhata hai.\nSimple rule: nimbu paani (subah garam paani mein) — theek. Zyada imli wala khana ya achar — avoid.',
    },
    {
      _key: 'faq3',
      question: 'RA mein chawal khaana bilkul band karna padega?',
      answer: 'Nahi — white rice completely band karne ki zaroorat nahi, lekin switch karna better hai.\nBrown rice ya jowar/bajra preferred hai — lower glycemic index — sugar spike nahi hota jo RA inflammation trigger karta hai.\nAgar sirf white rice available ho — raat ko avoid karo, dopahar mein thoda amount okay hai.\nCompletely ban karne se zyada important hai quantity aur timing manage karna.',
    },
    {
      _key: 'faq4',
      question: 'Diet change se RA mein kitne din mein fark dikhta hai?',
      answer: 'Honestly — 4 se 6 hafte consistent diet pe fark notice hona shuru hota hai.\nKuch patients mein joint morning stiffness pehle week mein thodi kam hoti hai — especially agar haldi + ginger daily ho.\nSignificant inflammation marker improvement (CRP, ESR) ke liye minimum 6-8 hafte chahiye.\nDiet ek supporting intervention hai — RA ki primary treatment medicines hain. Dono saath better kaam karte hain.',
    },
    {
      _key: 'faq5',
      question: 'RA mein chai aur coffee peena theek hai?',
      answer: 'Plain adrak chai (1-2 cups, no milk ya kam milk) — actually beneficial hai RA mein. Gingerol anti-inflammatory hai.\nRegular milk chai — 1-2 cups okay hai lekin zyada nahi — dairy zyada hone pe inflammation badhta hai.\nCoffee — 1 cup subah okay hai — antioxidants hote hain — lekin 3+ cups avoid karo.\nCold drinks, packaged tea/coffee — avoid. Sugar + caffeine combination RA mein worst trigger hai.',
    },
    {
      _key: 'faq6',
      question: 'RA mein vrat / fast kar sakte hain?',
      answer: 'Haan — short duration religious fasting generally okay hai RA mein.\nSabudana (light preparation), fruits, kuttu, singhare ka atta — safe vrat options hain.\nNirjala vrat (paani bhi nahi) — avoid karo especially agar RA medicines chal rahi hain — methotrexate aur leflunomide empty stomach + dehydration pe harmful ho sakti hain.\nDoctor se ek baar poochhna better hai — especially agar disease activity high ho.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic RA medicines ke saath koi khaana band karna padta hai?',
      answer: 'Generally homoeopathic medicines ke saath koi strict food restriction nahi hoti.\nKuch doctors strong smell (coffee, camphor, raw onion, garlic) medicine lene ke 30 minute pehle-baad avoid karne ko kehte hain — ye specific medicines ke liye hai, sabke liye nahi.\nHaldi, adrak, anti-inflammatory foods RA ke homoeopathic treatment mein interference nahi karte — balki complementary hain.\nApne specific doctor se poochho — har prescription ke saath instructions alag ho sakti hain.',
    },
    {
      _key: 'faq8',
      question: 'RA mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karne ki zaroorat nahi — lekin type matter karta hai.\nRouhu/katla machli aur eggs — actually beneficial hain RA mein (omega-3, Vitamin D).\nRed meat (mutton, lamb) aur processed meat — avoid karein — arachidonic acid joint inflammation badhata hai.\nFried non-veg (fry, pakoda) — avoid — cooking method anti-inflammatory benefits ko cancel karta hai.\nSimple rule: fish aur eggs — allowed. Red meat aur fried items — avoid.',
    },
    {
      _key: 'faq9',
      question: 'RA mein akhrot (walnut) aur badam khana theek hai?',
      answer: 'Haan — akhrot specifically RA mein beneficial hai.\nAkhrot mein ALA omega-3 hota hai jo body mein anti-inflammatory EPA mein convert hota hai — directly joint inflammation kam karta hai.\n4-5 akhrot daily — recommended amount.\nBadam (soaked, peeled) — Vitamin E hai jo RA mein oxidative joint damage se protect karta hai — 5-6 daily okay hai.\nKaju aur mungfali — in dono mein omega-6 zyada hai — limit karo — excessive omega-6 RA inflammation badhata hai.',
    },
    {
      _key: 'faq10',
      question: 'RA mein bahar ka khaana, fast food, street food theek hai kya?',
      answer: 'Occasional (mahine mein 1-2 baar) okay hai agar smart choices karo.\nSafest bahar ka option: dal tadka + roti + salad — almost har dhaba mein milta hai.\nAvoid karo: koi bhi deep fried item, creamy gravy, maida wala khaana, cold drinks — ye sab RA ke biggest external triggers hain.\nRegular street food / fast food — RA disease activity clearly affect karta hai — aap khud 2-3 hafte consistent rehke aur phir bahar khaake compare kar sakte hain.',
    },
    {
      _key: 'faq11',
      question: 'RA mein aloo (potato) allowed hai kya?',
      answer: 'Aloo nightshade family ka plant hai — kuch RA patients mein nightshades (aloo, tamatar, baingan) joint pain badhate hain — kuch mein nahi.\nAgar aapko aloo ke baad joints mein zyada stiffness ya pain notice hoti hai — reduce karo.\nAgar koi fark nahi dikhta — moderate matra mein (boiled/baked — fried nahi) okay hai.\nElimination approach better hai — 3 hafte band karo, phir wapas lo — apna response dekho.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Vadell AKE et al — Anti-inflammatory Diet In Rheumatoid Arthritis (ADIRA) — American Journal of Clinical Nutrition', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32055820' },
    { _key: 's2', name: 'Rondanelli M et al — Ideal food pyramid for patients with rheumatoid arthritis — Clinical Nutrition', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32928578' },
    { _key: 's3', name: 'Nelson J et al — Do Interventions with Diet or Dietary Supplements Reduce Disease Activity in RA? — Nutrients', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/33003645' },
    { _key: 's4', name: 'Nikiphorou E, Philippou E — Nutrition and its role in prevention and management of rheumatoid arthritis — Autoimmunity Reviews', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37182439' },
    { _key: 's5', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Sirf dahi aur nimbu band karte hain — jo actually zyada harmful nahi hain — lekin maida, sugar, aur fried food daily khaate rehte hain jo real triggers hain',
    mustEat: 'Adrak (fresh) — gingerol naturally COX-2 enzyme inhibit karta hai jaise anti-inflammatory medicines karte hain — RA mein cheapest aur sabse accessible anti-inflammatory food',
    mustAvoid: 'Red meat (mutton) — arachidonic acid prostaglandin pathway activate karta hai jo RA joint inflammation ka direct driver hai — other meats se zyada harmful specifically RA mein',
  },

  doctorNote: 'Mere RA patients mein maine notice kiya hai ki jo log maida aur red meat dono ek saath chodh dete hain — unka homeopathic treatment response clearly better hota hai — akele ek chodh ke nahi. Jo patients sirf dairy ya nimbu band karte hain aur baaki sab same rakhte hain — unme zyada fark nahi aata. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Gathiya (RA) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/rheumatoid-arthritis',
  shareTextMealPlan: 'Gathiya (RA) ke liye 4-din ka Indian diet plan: homeopedia.in/diet/rheumatoid-arthritis',
  shareTextPage: 'Gathiya (RA) Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/rheumatoid-arthritis',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding rheumatoid arthritis diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ RA diet chart seeded — homeopedia.in/diet/rheumatoid-arthritis')
}

seed().catch(console.error)
