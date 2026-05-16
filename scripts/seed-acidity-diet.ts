import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-acidity',
  _type: 'diet',
  title: 'Acidity / GERD Diet Chart',
  hindiName: 'Acidity / Seene mein Jalan / Khatta Dakar',
  slug: { _type: 'slug', current: 'acidity' },
  relatedDiseaseSlug: 'acidity',
  category: 'Digestive',
  metaTitle: 'Acidity (Seene Ki Jalan) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Acidity aur GERD diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'GERD mein lower esophageal sphincter (LES) — food pipe aur pet ka darwaza — weak ho jaata hai, jisse stomach acid upar aata hai aur seene mein jalan hoti hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Khaana khake turant mat leto', reason: 'LES pe pressure padta hai jo acid ko upar dhakelta hai' },
    { _key: 'eh2', habit: 'Raat ka khaana sone se 2-3 ghante pehle khatam karo', reason: 'lying position mein acid esophagus mein aasani se aata hai' },
    { _key: 'eh3', habit: 'Ek baar mein bada khaana mat khao — chhote meals 2-3 ghante pe', reason: 'bada meal stomach pressure zyada badhata hai jo LES band rakhna mushkil kar deta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya', reason: 'complex carb, fiber se LES ke aas paas ki muscles strong hoti hain' },
        { _key: 'i2', food: 'Oats (daliya ya rolled oats)', reason: 'beta-glucan fiber stomach acid absorb karta hai, jalan kam hoti hai' },
        { _key: 'i3', food: 'Brown rice / sela chawal', reason: 'easily digest hota hai, stomach pe kam pressure' },
        { _key: 'i4', food: 'Roti (gehu, 2 roti)', reason: 'maida se kam acid production, stomach jaldi empty hota hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'alkaline nature, stomach ki lining ko soothe karta hai — GERD mein seedha fayda' },
        { _key: 'i6', food: 'Turai / gilki', reason: 'water content zyada, acid dilute karta hai stomach mein' },
        { _key: 'i7', food: 'Palak', reason: 'alkaline vegetable, esophageal lining ki inflammation kam karta hai' },
        { _key: 'i8', food: 'Karela', reason: 'bitter compounds LES tone improve karte hain aur acid secretion regulate karte hain' },
        { _key: 'i9', food: 'Gajar', reason: 'naturally alkaline, stomach ki mucosal lining ko protect karta hai' },
        { _key: 'i10', food: 'Kheera / cucumber', reason: 'high water + alkaline — acid neutralize karta hai stomach mein' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Kela (fresh, paaka lekin overripe nahi)', reason: 'pectin fiber stomach lining coat karta hai, acid absorption karta hai' },
        { _key: 'i12', food: 'Tarbuz (summer mein)', reason: '92% water — acid dilution ke liye best fruit in GERD' },
        { _key: 'i13', food: 'Seb (bina chilka)', reason: 'quercetin aur pectin esophageal inflammation kam karte hain' },
        { _key: 'i14', food: 'Nashpati / pear', reason: 'low acid fruit, esophagus ko irritate nahi karta' },
        { _key: 'i15', food: 'Papaya', reason: 'papain enzyme digestion improve karta hai, stomach pe kam pressure' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chilke wali ya dhuli)', reason: 'sabse light dal — stomach mein gas ya pressure nahi banata' },
        { _key: 'i17', food: 'Masoor dal', reason: 'medium fiber, acid secretion ko spike nahi karta unlike heavy proteins' },
        { _key: 'i18', food: 'Besan chilla (oil kam se bana)', reason: 'plant protein jo stomach mein slow acid produce karta hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i19', food: 'Saunf ka paani (fennel water)', reason: 'saunf LES muscle tone improve karta hai, gas aur bloating kam karta hai' },
        { _key: 'i20', food: 'Jeera water (subah)', reason: 'digestive secretions regulate karta hai, stomach emptying better hota hai' },
        { _key: 'i21', food: 'Nariyal paani', reason: 'naturally alkaline aur electrolytes se bhari — acid neutralize karta hai' },
        { _key: 'i22', food: 'Haldi (pinch, khane mein)', reason: 'curcumin esophageal mucosal healing karta hai — khane mein milao' },
        { _key: 'i23', food: 'Desi ghee (1 tsp, khane mein)', reason: 'mucosal lining ko coat karta hai — sirf thoda, zyada nahi' },
        { _key: 'i24', food: 'Adrak ki chai (thodi, bina doodh, 1 cup)', reason: 'gingerol LES ko soothe karta hai — 1 cup limit rakhein' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Chicken (boiled ya steamed, no fry, no masala)', reason: 'lean protein jo stomach mein slow acid produce karta hai, fat kam hone se LES pe pressure nahi' },
    { _key: 'nva2', food: 'Egg whites (boiled, yolk avoid)', reason: 'pure protein — yolk mein fat hoti hai jo LES relax karti hai — isliye sirf whites' },
    { _key: 'nva3', food: 'Rohu / Katla fish (steamed ya boiled)', reason: 'omega-3 esophageal inflammation kam karta hai, lean protein' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / tandoori (high char)', reason: 'trans fat + spice dono LES ko relax karte hain — double trigger' },
    { _key: 'nvav2', food: 'Egg yolk (zyada)', reason: 'fat content LES tone kam karta hai — GERD direct trigger' },
    { _key: 'nvav3', food: 'Mutton / red meat', reason: 'high fat content gastric acid secretion zyada karta hai, stomach emptying slow' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida', reason: 'gut mein slowly digest hota hai, stomach emptying late hoti hai jisse acid production zyada time tak hoti hai' },
        { _key: 'ri2', food: 'Biscuits / namkeen / chips', reason: 'maida + oil + salt combination stomach acid ko repeatedly spike karta hai' },
        { _key: 'ri3', food: 'Instant noodles / Maggi', reason: 'maida + high sodium — sodium stomach acid secretion badhata hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full fat doodh (raat ko)', reason: 'initially soothing lagta hai lekin fat content LES relax karta hai — GERD mein raat ko worst time' },
        { _key: 'ri5', food: 'Paneer (zyada)', reason: 'high fat variant jo gastric acid secretion prolonged karta hai' },
        { _key: 'ri6', food: 'Khoya / mawa / cream-based mithai', reason: 'concentrated fat LES band rakhna mushkil karta hai ghanton tak' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Khatta aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Mirchi (lal / green chilli)', reason: 'capsaicin directly esophageal lining ko irritate karta hai, acid sensation multiply karta hai' },
        { _key: 'ri8', food: 'Tamatar / tomato-based sabziyan', reason: 'citric aur malic acid stomach ki acidity directly badhate hain' },
        { _key: 'ri9', food: 'Imli / khatta (aamchur, imli)', reason: 'stomach acid production seedha trigger karta hai' },
        { _key: 'ri10', food: 'Fried snacks (pakode, samosa, puri)', reason: 'high fat stomach emptying slow karta hai — acid zyada time tak rehta hai stomach mein' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri11', food: 'Chai (3+ cups ya khaali pet)', reason: 'tannin + caffeine dono LES relaxation karte hain — 1 cup after breakfast theek hai' },
        { _key: 'ri12', food: 'Coffee (espresso / strong)', reason: 'caffeine directly LES ko relax karta hai — strongest trigger drinks mein' },
        { _key: 'ri13', food: 'Cold drinks / soda', reason: 'carbonation stomach mein gas banati hai jo LES pe pressure deta hai — fizz = acid up' },
        { _key: 'ri14', food: 'Alcohol', reason: 'esophageal mucosal lining damage karta hai aur LES tone permanently kam karta hai regular use se' },
        { _key: 'ri15', food: 'Juice (nimbu / orange / tomato)', reason: 'citric acid concentrated form mein direct esophageal irritant hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Jeera water (ek glass, room temp ya gunguna)', 'Saunf ka paani (bheegi hui saunf ka paani)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with lauki/turai (thoda ghee, salt kam)', 'Oats with kela aur seb (bina sugar)'], nonVegOption: '2 egg whites boiled + 1 brown rice roti + kheera' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seasonal fruit (kela / seb / nashpati)', 'Nariyal paani (ek glass)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 roti + moong dal + lauki/gajar ki sabzi', 'Brown rice + masoor dal + palak ki sabzi + kheera raita (ghar ka fresh dahi, thoda)'], nonVegOption: '1 roti + chicken steamed + moong dal + kheera' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Saunf + adrak ki chai (1 cup) + bhuna chana (handful)', 'Papaya (small bowl)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['Khichdi (moong dal + brown rice + thoda ghee) — GERD mein raat ka best meal', '2 roti + palak sabzi (oil kam) + dal'], nonVegOption: 'Rohu fish steamed + 1 roti + vegetable soup (no tomato)' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Thanda nariyal paani (room temp) — sirf agar jalan ho', 'Saunf chaba ke khao (handful) — natural antacid'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Jeera water',
      vegNashta: 'Oats + kela',
      vegDopahar: '2 roti + moong dal + lauki sabzi',
      vegShaam: 'Bhuna chana',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 egg whites boiled + 1 roti',
      nonVegDopahar: 'Rohu fish steamed + 1 roti + kheera',
      nonVegRaat: 'Chicken soup (no tomato) + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Saunf water',
      vegNashta: 'Daliya + gajar sabzi',
      vegDopahar: 'Brown rice + masoor dal + palak',
      vegShaam: 'Papaya',
      vegRaat: '2 roti + turai sabzi + dal',
      nonVegNashta: 'Daliya + gajar sabzi (veg same)',
      nonVegDopahar: 'Chicken steamed + moong dal + 1 roti',
      nonVegRaat: 'Moong dal khichdi + ghee',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Jeera water',
      vegNashta: 'Besan chilla (oil kam) + kheera',
      vegDopahar: '2 roti + arhar dal + kheera raita',
      vegShaam: 'Nariyal paani',
      vegRaat: 'Moong dal khichdi + ghee',
      nonVegNashta: '2 egg whites + poha (oil kam)',
      nonVegDopahar: 'Katla fish steamed + brown rice + lauki',
      nonVegRaat: '2 roti + turai sabzi + masoor dal',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Saunf water',
      vegNashta: 'Oats + nashpati + seb',
      vegDopahar: 'Sela chawal + chana dal + gajar sabzi',
      vegShaam: 'Bhuna chana + adrak chai 1 cup',
      vegRaat: '2 roti + palak moong dal + lauki',
      nonVegNashta: 'Oats + nashpati (veg same)',
      nonVegDopahar: 'Chicken steamed + sela chawal + gajar sabzi',
      nonVegRaat: '2 roti + palak sabzi + moong dal',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Takleef Zyada Ho Tab (Severe Jalan)',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, daliya ya oats — koi bhi fried, spicy, dairy heavy — bilkul avoid',
        'Partial fasting better hai bade meal se — 5-6 chhote snack size meals zyada safe hain flare mein',
        'Seedha mat leto — head ka side thoda upar rakho (pillow stack) — gravity acid ko neeche rokti hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana (boiled, fried nahi) — GERD mein safe, stomach pe light hota hai',
        'Sendha namak use karo — regular namak se kam sodium — kam acid secretion',
        'Vrat mein khaali pet zyada der nahi — sabudana khichdi ya makhana le lo — khaali stomach mein acid zyada banata hai — GERD mein risky ho sakta hai',
        'Nirjala vrat (paani bhi nahi) — GERD mein clearly avoid karo — doctor se pehle poochho',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: dal tadka (kam tel), plain roti, steamed sabzi — koi gravy nahi (cream/tomato base dono avoid)',
        'Avoid karo: paneer dishes, fried items, any tomato-based curry, cold drinks',
        'Hack: Pehle ek glass paani + kheera ya salad khao — stomach thoda filled hone se acid spike kam hoti hai bade meal pe',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, dry makhana, saunf — teen cheezein jo GERD mein safe snack hain har jagah',
        'Train / hotel mein: plain dal rice order karo — "tomato aur mirchi kam karo" bolein — dhaba waale generally adjust karte hain',
      ],
    },
  ],

  proTip: 'Raat ko sone se pehle left side karwat lekar so — studies mein dekha gaya hai ki left lateral position mein LES naturally tight rehta hai gravity ki wajah se — right side pe leta karwat acid esophagus mein aasani se aata hai.',
  importantNote: 'Ye chart ek general guide hai — GERD ke symptoms alag-alag patients mein alag triggers se hote hain. Apni condition ke hisaab se apne homoeopath se personalized plan banwayein.',
  homeopathyDiet: 'Sahi diet — LES pe kam pressure — homeopathic medicines esophageal lining aur LES tone pe better kaam karti hain — dono saath ho to healing faster hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya acidity mein dahi khana theek hai?',
      answer: 'Ghar ka fresh bana dahi (1 small katori, dopahar mein) allowed hai — raat ko avoid karo.\nFresh dahi mein live bacteria gut lining soothe karte hain aur digestion better hoti hai.\nLekin packaged / set dahi (market wala) — higher tyramine aur preservatives — acidity mein avoid karo.\nRaat ka dahi worst choice hai GERD mein — fat raat mein LES relax karta hai.\nApne doctor se poochho agar symptoms severe hain.',
    },
    {
      _key: 'faq2',
      question: 'Kya acidity mein chai peena bilkul band karna padega?',
      answer: 'Bilkul band karna zaroori nahi — lekin teen conditions hain.\nNashte ke baad 1 cup — khaali pet chai seedha esophageal lining ko irritate karti hai.\nGinger + tulsi chai better hai plain tea se — caffeine kam, soothing zyada.\nFull fat doodh wali strong chai GERD mein worst — thode doodh ke saath ya doodh ke bina better.\n3+ cups ya khaali pet — ye dono GERD mein direct trigger hain.',
    },
    {
      _key: 'faq3',
      question: 'Diet se acidity mein kitne din mein fark dikhta hai?',
      answer: 'Consistent diet follow karo to 2-4 hafte mein clearly fark dikhta hai.\nPehle hafte mein triggers hata do — chai khaali pet, fried food, raat ko khaana — ye akele kaafi change laate hain.\n2nd week mein green list ke items regularly add karo.\nSevere GERD (esophagitis) mein diet ke saath treatment bhi zaroori hai — sirf diet se complete resolution mushkil hota hai.\nApne doctor se regular follow-up zaroor karo.',
    },
    {
      _key: 'faq4',
      question: 'Acidity mein nariyal paani, nimbu paani — kya peeyein?',
      answer: 'Nariyal paani — haan, GERD mein best drink hai — naturally alkaline, acid neutralize karta hai.\nNimbu paani — avoid karo — citric acid concentrated form mein esophageal irritant hai GERD mein.\nSaunf ka paani — haan, LES soothe karta hai.\nCold drinks / soda — bilkul nahi — carbonation LES pe gas pressure banata hai.\nPaani khaane ke beech mein mat peeyo — khaane se pehle ya baad mein — zyada liquid stomach pressure badhata hai.',
    },
    {
      _key: 'faq5',
      question: 'Acidity mein vrat / fast karna safe hai kya?',
      answer: 'GERD mein zyada der khaali pet rehna risky hai — stomach empty hone pe acid production rukti nahi.\nAgar vrat karna zaroori ho — sabudana khichdi (boiled), makhana, saunf — ye safe options hain.\nHar 2-3 ghante mein kuch khao vrat mein — khaali pet se bachna zaroori hai.\nNirjala vrat (paani bhi nahi) — GERD mein clearly avoid karo — doctor se pehle poochho.\nVrat ke din raat ko khichdi ya daliya sone se 2-3 ghante pehle kha lo.',
    },
    {
      _key: 'faq6',
      question: 'Khaana khake seedha lait jaana acidity mein kitna bura hai?',
      answer: 'Ye GERD ka number one worst habit hai.\nKhaane ke baad laitne se gravity kaam karna band kar deti hai — LES se acid esophagus mein freely aata hai.\nKhaane ke baad kam se kam 2-3 ghante seedha baithna ya kuch halka walk karna zaroori hai.\nYe ek change akele raat ki jalan ko significantly kam kar sakta hai.\nRaat ka khaana sone se 3 ghante pehle khatam karo — ye sabse zaroori rule hai GERD mein.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Specific restrictions depend karti hain medicine pe — generalize nahi kar sakte.\nKuch homoeopaths strong smell wali cheezein avoid karne bolte hain — coffee, raw lahsun, camphor — ye kuch specific remedies ko antidote kar sakti hain.\nCoffee restriction sabse common recommendation hai — apne doctor se specifically poochho.\nIs diet mein jo GERD ke liye avoid kiya hai — wo treatment ke liye bhi helpful hai — dono ek direction mein kaam karte hain.',
    },
    {
      _key: 'faq8',
      question: 'Acidity mein non-veg khana chahiye ya band karna padega?',
      answer: 'Complete band karna zaroori nahi — lekin selection aur cooking method bahut matter karta hai.\nAllowed: boiled/steamed chicken, egg whites, rohu/katla fish (steamed).\nAvoid: fried non-veg, red meat/mutton, egg yolk zyada, processed meat (sausage, salami).\nCooking method decide karta hai — same chicken boiled = safe, fried = trigger.\nNon-veg raat mein avoid karo — dopahar mein better.',
    },
    {
      _key: 'faq9',
      question: 'Acidity mein chawal khana band karna chahiye?',
      answer: 'Nahi — plain chawal band karna zaroori nahi.\nSela chawal ya brown rice GERD mein better option hai — zyada fiber, slower digestion, acid spike nahi.\nWhite rice thoda fast digest hota hai — combine karo dal ke saath — protein + carb combination stomach emptying better karta hai.\nFried rice, masaledar biryani — avoid karo — oil + spice combination trigger hai.\nPlain khichdi (moong + rice) GERD patients ke liye raat ka best meal hai — light, easy to digest.',
    },
    {
      _key: 'faq10',
      question: 'Late night khaana acidity mein kyun itna bura hai?',
      answer: 'Raat ko khaane ke baad laitne ka combination worst trigger hai GERD mein.\nNeend mein saliva production kam hoti hai — saliva jo normally acid neutralize karta hai — wo nahi hota.\nRaat ka heavy meal stomach mein ghanton tak rehta hai aur acid production raat bhar hoti hai.\nSone se 3 ghante pehle khaana — aur left side karwat — ye dono milake raat ki jalan dramatically kam karte hain.\nAgar late khaana avoid nahi kar sakte — sirf khichdi ya daliya lo — heavy meal nahi.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Taraszewska A — Risk factors for gastroesophageal reflux disease symptoms related to lifestyle and diet — Roczniki Panstwowego Zakladu Higieny', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/33882662' },
    { _key: 's2', name: 'Herdiana Y — Functional Food in Relation to Gastroesophageal Reflux Disease (GERD) — Nutrients', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37630773' },
    { _key: 's3', name: 'Martin Z et al — Efficacy of dietary and nutraceutical interventions for GERD symptoms: systematic review — Clinical Nutrition ESPEN', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/36513474' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Raat ko garam doodh peena — initially soothing lagta hai lekin fat LES relax karta hai aur ghante baad acid aur zyada hota hai',
    mustEat: 'Saunf (fennel) — khaane ke baad ek teaspoon chaba ke khao — natural LES toner, gas releaser, Indian kitchen mein easily available',
    mustAvoid: 'Cold drinks / soda — carbonation stomach gas banata hai, gas LES pe pressure deta hai, acid upar aata hai — GERD ka most underrated trigger',
  },

  doctorNote: 'Maine notice kiya hai ki mere acidity/GERD patients mein jo log sirf teen kaam karte hain — raat ka khaana sone se 3 ghante pehle, khaane ke baad seedha nahi laite, aur chai khaali pet nahi lete — unka homeopathic treatment response baaki patients se clearly better hota hai — medicines bhi, healing bhi. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Acidity mein kya khayein, kya nahi — complete list: homeopedia.in/diet/acidity',
  shareTextMealPlan: 'Acidity ke liye 4-din ka Indian diet plan: homeopedia.in/diet/acidity',
  shareTextPage: 'Acidity Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/acidity',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Acidity / GERD diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Acidity diet chart seeded — homeopedia.in/diet/acidity')
}

seed().catch(console.error)
