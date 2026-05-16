import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-ibs',
  _type: 'diet',
  title: 'IBS (Sangrahani) Diet Chart',
  hindiName: 'Sangrahani / Aant ki Takleef',
  slug: { _type: 'slug', current: 'ibs' },
  relatedDiseaseSlug: 'ibs',
  category: 'Digestive',
  metaTitle: 'IBS (Sangrahani) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'IBS diet chart — green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'IBS mein kuch foods aant mein gas aur fermentation badhate hain — jisse cramping, bloating aur loose motion ya constipation ka cycle shuru hota hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Ek saath zyada mat khao', reason: 'IBS mein bada meal aant ki muscle spasm trigger karta hai' },
    { _key: 'eh2', habit: 'Khaana achhe se chabao', reason: 'jaldi khaane se air andar jaati hai jo bloating badhata hai IBS mein' },
    { _key: 'eh3', habit: 'Raat 7 baje ke baad heavy khaana avoid karo', reason: 'raat mein gut motility slow hoti hai, gas aur discomfort zyada hota hai IBS patients mein' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Chawal (plain boiled)', reason: 'IBS mein easily digest hota hai, aant pe minimal fermentation' },
        { _key: 'i2', food: 'Poha', reason: 'light hai, gut pe stress nahi deta, IBS-D (diarrhea type) mein safe' },
        { _key: 'i3', food: 'Daliya (thoda)', reason: 'soluble fiber jo IBS-C (constipation type) mein stool soft karta hai' },
        { _key: 'i4', food: 'Rice roti (chawal ki)', reason: 'maida aur gehu se behtar jab IBS flare-up mein wheat sensitivity ho' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'IBS mein gut soothing hai, water content zyada, aant ko irritate nahi karta' },
        { _key: 'i6', food: 'Turai', reason: 'easily digestible, low FODMAP sabzi, IBS mein bloating trigger nahi karta' },
        { _key: 'i7', food: 'Gajar (paki hui)', reason: 'pectin fiber IBS-D mein stool bind karta hai aur gut lining support karta hai' },
        { _key: 'i8', food: 'Palak (kam quantity, steam ki hui)', reason: 'micronutrients ke liye, zyada nahi — raw palak gas badhata hai' },
        { _key: 'i9', food: 'Kaddu / Lal kaddu', reason: 'gut motility normalize karta hai, IBS dono types mein safe' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Kela (pakka, overripe nahi)', reason: 'pectin fiber IBS-D mein stool bind karta hai, potassium restore karta hai' },
        { _key: 'i11', food: 'Papaya', reason: 'papain enzyme IBS mein digestion improve karta hai, aant ki inflammation kam karta hai' },
        { _key: 'i12', food: 'Seb (chhilka hatakar)', reason: 'soluble fiber IBS-C mein help karta hai, fructose load chhilke ke bina kam hota hai' },
        { _key: 'i13', food: 'Kharbuja (thoda)', reason: 'water content zyada, gut ko hydrated rakhta hai, low FODMAP fruit hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal (chilka hatakar, paaniya)', reason: 'IBS ki sabse safe dal — easily digestible, kam gas' },
        { _key: 'i15', food: 'Masoor dal (thin, well-cooked)', reason: 'protein ke liye, achhe se pakane pe gas kam hoti hai' },
        { _key: 'i16', food: 'Paneer (ghar ka, fresh, thoda)', reason: 'IBS mein protein source, lekin packaged market wala nahi' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i17', food: 'Saunf ka paani (subah khaali pet)', reason: 'IBS mein gut spasm aur cramps directly relax karta hai' },
        { _key: 'i18', food: 'Adrak chai (no milk ya thoda, no sugar)', reason: 'ginger IBS mein gut motility normalize karta hai' },
        { _key: 'i19', food: 'Jeera paani', reason: 'cumin IBS ki gas aur bloating pe seedha kaam karta hai' },
        { _key: 'i20', food: 'Ajwain (khaane mein thoda)', reason: 'IBS mein antispasmodic — gut ki cramping kam karta hai' },
        { _key: 'i21', food: 'Desi ghee (minimal)', reason: 'IBS mein gut lining support karta hai, moderate use mein safe' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Egg (boiled/poached, fried nahi)', reason: 'low FODMAP, IBS mein safe protein source, gut pe load nahi' },
    { _key: 'nva2', food: 'Chicken (boiled ya steamed, no heavy spices)', reason: 'lean protein, IBS mein easily digestible jab plain pakao' },
    { _key: 'nva3', food: 'Rohu / Katla machli (grilled ya steamed)', reason: 'omega-3 se IBS mein gut inflammation kuch kam hoti hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Mutton / red meat', reason: 'high fat content IBS mein gut motility speed up karta hai — diarrhea worse hoti hai' },
    { _key: 'nvav2', food: 'Fried chicken / pakoda', reason: 'trans fat IBS mein directly cramping aur loose motion trigger karta hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami)', reason: 'additives aur preservatives IBS gut lining irritate karte hain' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, naan, samosa)', reason: 'IBS mein gut mein fermentation badhata hai, constipation ya diarrhea cycle worsen karta hai' },
        { _key: 'ri2', food: 'Packaged biscuits', reason: 'maida + sugar + trans fat tino IBS triggers ek saath' },
        { _key: 'ri3', food: 'Instant noodles / Maggi', reason: 'maida + additives ka combination IBS gut lining ko directly irritate karta hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Plain doodh (glass bhar)', reason: 'lactose IBS patients mein gut mein ferment hota hai — bloating aur cramping trigger' },
        { _key: 'ri5', food: 'Packaged / market wala set dahi', reason: 'additives aur extra lactose ke wajah se IBS mein trigger kar sakta hai (ghar ka chhachh paaniya better tolerated hota hai)' },
        { _key: 'ri6', food: 'Cheese (zyada)', reason: 'high fat + lactose — IBS mein dono triggers hain' },
        { _key: 'ri7', food: 'Rajma / Chhole (zyada quantity)', reason: 'galacto-oligosaccharides high hote hain — IBS mein significant gas aur bloating' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri8', food: 'Zyada mirch wala khaana', reason: 'capsaicin IBS mein gut nerve endings directly stimulate karta hai — cramping aur diarrhea badhti hai' },
        { _key: 'ri9', food: 'Kacchi pyaaz', reason: 'fructans high hote hain jo IBS mein aant mein ferment hokar gas aur pain dete hain' },
        { _key: 'ri10', food: 'Lahsun (zyada matra)', reason: 'fructans — same mechanism, IBS ka well-known trigger hai' },
        { _key: 'ri11', food: 'Mithai / Gulab jamun / Jalebi', reason: 'refined sugar + maida IBS mein gut bacteria balance bigadte hain' },
        { _key: 'ri12', food: 'Fried snacks (samosa, puri, pakoda)', reason: 'fat-heavy, IBS mein gut transit accelerate karta hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri13', food: 'Chai (zyada doodh, 3+ cups)', reason: 'lactose + caffeine dono IBS mein gut stimulate karte hain' },
        { _key: 'ri14', food: 'Coffee (2+ cups daily)', reason: 'caffeine IBS mein gut motility zyada fast karta hai — loose motion badhti hai' },
        { _key: 'ri15', food: 'Cold drinks / Soda', reason: 'carbonation + fructose syrup IBS mein gas aur bloating directly badhata hai' },
        { _key: 'ri16', food: 'Packaged fruit juice', reason: 'fructose concentrate IBS mein osmotic effect se diarrhea trigger karta hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Saunf ka paani (1 glass, room temperature)', 'Jeera paani (1 glass — jeera raat bhar bhigo ke)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Poha (vegetables ke saath, pyaaz nahi ya bahut kam)', 'Moong dal chilla (no onion) + pudina chutney'], nonVegOption: '2 boiled ande + chawal ki roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 kela (pakka, overripe nahi)', 'Ghar ka chhachh thoda (paaniya, thanda nahi)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 roti + moong dal (paaniya) + lauki sabzi', 'Plain chawal + arhar dal (thin) + gajar sabzi'], nonVegOption: 'Steamed chicken + plain chawal + lauki' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak wali chai (no milk ya sirf thoda) + 4-5 akhrot', 'Roasted makhana (plain, namak nahi)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['Khichdi (moong dal + chawal + ghee thoda)', '2 roti + turai sabzi + masoor dal (thin)'], nonVegOption: 'Grilled fish + 1 roti + lauki sabzi' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Saunf + mishri warm paani mein — gut cramping raat mein relax karta hai', 'Plain warm paani (agar cramping ho)'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Saunf paani',
      vegNashta: 'Poha (no pyaaz)',
      vegDopahar: 'Chawal + moong dal + lauki',
      vegShaam: 'Chhachh + makhana',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled ande + roti',
      nonVegDopahar: 'Steamed chicken + chawal + lauki',
      nonVegRaat: 'Khichdi + ghee',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Jeera paani',
      vegNashta: 'Moong dal chilla',
      vegDopahar: '2 roti + arhar dal + gajar sabzi',
      vegShaam: 'Adrak chai + akhrot',
      vegRaat: 'Roti + turai + masoor dal',
      nonVegNashta: 'Moong dal chilla',
      nonVegDopahar: 'Grilled rohu + chawal + gajar',
      nonVegRaat: 'Roti + turai + masoor dal',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Saunf paani',
      vegNashta: 'Daliya (savory, no onion)',
      vegDopahar: 'Plain chawal + lauki sabzi + paneer thoda',
      vegShaam: 'Kela + chhachh',
      vegRaat: 'Khichdi + kaddu',
      nonVegNashta: '2 boiled ande + poha',
      nonVegDopahar: 'Plain chawal + lauki + steamed chicken thoda',
      nonVegRaat: 'Khichdi + kaddu',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Jeera paani',
      vegNashta: 'Poha (vegetables)',
      vegDopahar: '2 roti + moong dal + palak (steam)',
      vegShaam: 'Papaya 1 bowl',
      vegRaat: 'Roti + gajar-turai mix sabzi',
      nonVegNashta: 'Poha',
      nonVegDopahar: 'Grilled katla + roti + palak sabzi',
      nonVegRaat: 'Roti + gajar sabzi + moong dal',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi (moong dal + chawal + ghee) ya plain chawal — aant ko maximum rest do',
        'Sabziyan, dal, doodh sab band us din — sirf 2-3 safe foods rakh lo',
        'Saunf ka warm paani baar baar — cramping mein direct relief milta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (no potato, no fry) — IBS mein generally safe, easily digestible',
        'Singhare ki roti — low FODMAP, IBS vrat mein achha option hai',
        'Vrat mein zyada ghanta bhukha mat raho — IBS mein long gap cramping aur acidity badhata hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka (no onion-garlic) + plain chawal — dhabe mein bhi milta hai — IBS ka safest outside option',
        'Avoid karo: koi bhi gravy (pyaaz-lahsun base), fried items, raita',
        'Hack: waiter se "pyaaz-lahsun nahi" bolein — IBS patients ke liye ye common request hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: roasted makhana, bhuna chana, dry poha (sada), kela — travel mein safe options',
        'Train/hotel mein: plain dal chawal ya khichdi order karo — no gravy, no fried',
      ],
    },
  ],

  proTip: 'Subah khaali pet 1 glass saunf paani — IBS patients ke liye ye ek habit sabse pehle banana chahiye. Raat bhar jo gut spasm gather hoti hai, saunf usse subah release karta hai. Khaane ke saath nahi — khaali pet, pehle.',
  importantNote: 'Ye chart ek general guide hai — IBS ka type (IBS-D, IBS-C ya IBS-M) alag hota hai aur trigger foods bhi alag ho sakte hain. Apne homoeopath se apni condition ke hisaab se personalized plan zaroor banwayein.',
  homeopathyDiet: 'IBS mein sahi diet gut ko calm rakhti hai jisse homeopathic medicines aant ki nerve sensitivity pe behtar kaam karti hain — jab gut inflamed ho toh treatment response slow hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'IBS mein dahi kha sakte hain?',
      answer: 'Ghar ka fresh bana chhachh (paaniya dahi) thodi matra mein allowed hai — lekin plain thick dahi ya market ka packaged dahi avoid karein.\nThick dahi mein lactose zyada hota hai jo IBS mein gut mein ferment hokar bloating aur cramping karta hai.\nChhachh mein lactose concentration kam hoti hai — isliye better tolerated hota hai.\nIBS-D (diarrhea type) mein dono se kuch din break lo aur apna response dekho.',
    },
    {
      _key: 'faq2',
      question: 'IBS mein chawal allowed hai ya nahi?',
      answer: 'Haan — plain boiled chawal IBS ki sabse safe grain hai.\nChawal low FODMAP hai — aant mein minimal fermentation hota hai.\nGehu (roti) se kuch patients mein sensitivity hoti hai — agar roti ke baad gas zyada aaye toh kuch din sirf chawal try karo.\nWhite rice IBS-D mein, brown rice IBS-C mein better tolerated hota hai.',
    },
    {
      _key: 'faq3',
      question: 'IBS mein chai/coffee peena theek hai?',
      answer: 'Doodh wali chai zyada aur 2+ cups coffee — IBS mein problem create kar sakte hain.\nCaffeine aant ki motility tezi karta hai — loose motion worse hoti hai.\nAdrak wali chai (no milk ya thoda) — 1 cup subah allowed hai.\nCoffee bilkul band karna zaroori nahi — sirf 1 cup, doodh kam, roz.',
    },
    {
      _key: 'faq4',
      question: 'IBS mein diet se fark dikhne mein kitne din lagte hain?',
      answer: 'Diet change ke 7-10 din mein bloating aur gas mein clearly fark dikh sakta hai.\nCramping aur irregular bowel pattern theek hone mein 3-4 hafte lag sakte hain.\nSpeed depend karta hai ki trigger foods — especially pyaaz, lahsun, doodh aur fried — kitne strictly avoid karte ho.\nDoctor se regular check-in rakhein.',
    },
    {
      _key: 'faq5',
      question: 'IBS mein pyaaz aur lahsun band karna padega?',
      answer: 'Haan — ye IBS ka sabse important dietary change hai.\nPyaaz aur lahsun mein fructans hote hain jo aant mein ferment hokar significant gas, cramping aur bloating dete hain — IBS patients mein especially.\nKhaane mein inka tadka bhi trigger kar sakta hai.\nHingh (asafoetida) thodi matra — cooking mein substitute use kar sakte ho.',
    },
    {
      _key: 'faq6',
      question: 'IBS mein vrat/fast kar sakte hain?',
      answer: 'Kar sakte hain — lekin IBS mein long fasting avoid karo.\nBhukha rehna IBS mein gut cramping aur acidity badhata hai.\nVrat mein safe: sabudana khichdi (no fry), singhare ki roti, phalahari options.\nVrat mein zyada fried cheezein (pakoda, chips) avoid karo — IBS flare ho sakta hai.\nThoda thoda khaate raho — ekdum khaali pet mat raho.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'IBS ki specific medicine ke saath koi restriction ho toh doctor personally batayenge.\nKuch doctors coffee aur strong smells certain medicines ke saath avoid karne kehte hain.\nIBS diet mein jo cheezein avoid hain (pyaaz, lahsun, fried, doodh zyada) — wo treatment se alag, disease ke liye avoid karna hai.\nApne doctor se poochho aapki specific prescription ke baare mein.',
    },
    {
      _key: 'faq8',
      question: 'IBS mein non-veg khaana chahiye ya band karna padega?',
      answer: 'Completely band karne ki zaroorat nahi — lekin carefully choose karna padega.\nBoiled/steamed egg, plain chicken, grilled fish — allowed hain.\nMutton, red meat, fried non-veg, processed meat — IBS mein trigger hain, avoid karein.\nCooking method bahut important hai — plain pakao, heavy gravy nahi.',
    },
    {
      _key: 'faq9',
      question: 'IBS mein rajma aur chhole kha sakte hain?',
      answer: 'IBS active phase mein avoid karna better hai.\nRajma aur chhole mein galacto-oligosaccharides hote hain jo aant mein significant gas aur bloating dete hain.\nAgar bahut mann ho — bahut thodi quantity, achhe se pakao, aur body ka response check karo.\nMoong dal aur masoor dal safer alternatives hain — same protein, kam gas.',
    },
    {
      _key: 'faq10',
      question: 'IBS mein bahar ka khaana bilkul nahi kha sakte?',
      answer: 'Bilkul band karna realistic nahi — lekin smart choices karni padegi.\nDal tadka + plain chawal — dhabe mein bhi milta hai — yahi safest IBS-friendly outside option hai.\nKoi bhi gravy avoid karo — pyaaz-lahsun base hoti hai.\nFried items, raita, street food — flare-up risk hai.\n"Pyaaz-lahsun nahi" clearly bolein — request accept hoti hai most places pe.',
    },
    {
      _key: 'faq11',
      question: 'IBS mein nimbu paani pi sakte hain?',
      answer: 'Haan — plain nimbu paani (no sugar, no soda) IBS mein generally allowed hai.\nNimbu low FODMAP hai — direct trigger nahi hai.\nKhaana khane ke turant baad nahi — pehle ya 30 min baad peeo.\nAgar saath mein acidity bhi ho — doctor se poochho pehle.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Altobelli E et al — Low-FODMAP Diet Improves IBS Symptoms: A Meta-Analysis — Nutrients', year: '2017', url: 'https://pubmed.ncbi.nlm.nih.gov/28846594' },
    { _key: 's2', name: 'Whelan K et al — The low FODMAP diet in the management of IBS — Journal of Human Nutrition and Dietetics', year: '2018', url: 'https://pubmed.ncbi.nlm.nih.gov/29336079' },
    { _key: 's3', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Pyaaz aur lahsun band kiye bina "healthy" khana — ye dono akele IBS ke biggest food triggers hain Indian diet mein',
    mustEat: 'Saunf ka paani (subah khaali pet) — IBS mein gut spasm seedha relax karta hai, side effects nahi',
    mustAvoid: 'Cold drinks / soda — carbonation + fructose syrup IBS mein sabse fast-acting bloating trigger hai',
  },

  doctorNote: 'Maine notice kiya hai ki IBS patients mein jo log pyaaz aur lahsun dono ek saath band kar dete hain — sirf ek nahi, dono — unka homeopathic treatment response clearly faster hota hai unke comparison mein jo sirf ek chodh ke dono nahi chodhhte. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'IBS (Sangrahani) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/ibs',
  shareTextMealPlan: 'IBS ke liye 4-din ka Indian diet plan: homeopedia.in/diet/ibs',
  shareTextPage: 'IBS Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/ibs',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding IBS diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ IBS diet chart seeded — homeopedia.in/diet/ibs')
}

seed().catch(console.error)
