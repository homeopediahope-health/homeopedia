import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-kidney-stone',
  _type: 'diet',
  title: 'Kidney Stone (Pathri) Diet Chart',
  hindiName: 'Pathri / Gurde Ki Pathri',
  slug: { _type: 'slug', current: 'kidney-stone' },
  relatedDiseaseSlug: 'kidney-stone',
  category: 'Urinary',
  metaTitle: 'Kidney Stone (Pathri) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Kidney stone (pathri) diet chart — green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Kidney stone mein calcium, oxalate ya uric acid urine mein concentrate hoke crystal banata hai — aur khaane peene se ye concentration directly control hoti hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Din mein kam se kam 8-10 glass paani piyo', reason: 'urine dilute rahega toh crystals form nahi honge' },
    { _key: 'eh2', habit: 'Namak (salt) har cheez mein kam karo', reason: 'zyada sodium kidney mein calcium retention badhata hai jo stone banata hai' },
    { _key: 'eh3', habit: 'Animal protein ek baar se zyada mat lo', reason: 'meat uric acid aur oxalate dono badhata hai — stone recurrence ka risk' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (gehun)', reason: 'low oxalate, high fibre — gut se calcium absorption regulate karta hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'oxalate level moderate, urine pH neutral rakhta hai' },
        { _key: 'i3', food: 'Jowar / bajra roti', reason: 'low purine, kidney pe load nahi' },
        { _key: 'i4', food: 'Poha', reason: 'light, easily digestible — stone episode ke baad bhi safe' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'high water content — urine output naturally badhata hai' },
        { _key: 'i6', food: 'Turai', reason: 'alkaline nature — urine pH theek rakhti hai' },
        { _key: 'i7', food: 'Karela', reason: 'uric acid metabolism mein help karta hai' },
        { _key: 'i8', food: 'Gobhi / Cauliflower (moderate)', reason: 'low oxalate variety — safe hai, bahut zyada avoid karein' },
        { _key: 'i9', food: 'Gajar', reason: 'beta-carotene + low oxalate — kidney-friendly' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Nimbu paani (fresh, no salt)', reason: 'citrate badhata hai jo calcium oxalate crystal formation rokta hai' },
        { _key: 'i11', food: 'Seb (apple)', reason: 'malic acid mild alkalizer, stone risk kam karta hai' },
        { _key: 'i12', food: 'Tarbuz (summer mein)', reason: '92% water — natural diuretic effect' },
        { _key: 'i13', food: 'Amla (fresh ya dry)', reason: 'Vitamin C natural form — uric acid control karta hai moderate quantity mein' },
        { _key: 'i14', food: 'Nashpati (pear)', reason: 'low oxalate, high water content' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i15', food: 'Moong dal (split, chilka)', reason: 'low purine, low oxalate — sabse safe plant protein kidney stone mein' },
        { _key: 'i16', food: 'Masoor dal', reason: 'moderate, arhar se better — uric acid kam badhata hai' },
        { _key: 'i17', food: 'Tofu (ghar ka bana, kam namak)', reason: 'calcium source jo urine oxalate absorption actually kam karta hai (packaged tofu zyada sodium — ghar ka prefer)' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i18', food: 'Nimbu paani (bina namak)', reason: 'citric acid crystal inhibitor hai — stone patients ke liye best drink' },
        { _key: 'i19', food: 'Dhania seeds ka paani', reason: 'traditional diuretic, urinary pH alkaline karta hai' },
        { _key: 'i20', food: 'Adrak chai (kum chai patti)', reason: 'anti-inflammatory, kidney mein uric acid crystal formation slow karta hai' },
        { _key: 'i21', food: 'Til ka tel', reason: 'low oxalate cooking oil — kidney stone pe neutral' },
        { _key: 'i22', food: 'Desi ghee (thoda sa)', reason: 'vitamin K2 calcium ko bones mein rakhta hai, kidneys se door' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Egg white (boiled, 2 din mein 1 baar)', reason: 'low purine protein source — yolk se kam oxalate load' },
    { _key: 'nva2', food: 'Rohu / Katla machli (boiled/grilled)', reason: 'freshwater fish — low purine, omega-3 — kidney inflammation kam karta hai' },
    { _key: 'nva3', food: 'Chicken breast (boiled, small portion, week mein 2-3 baar)', reason: 'lean protein — mutton se kam uric acid badhata hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Mutton / red meat', reason: 'purine bahut zyada — uric acid stone ka direct trigger hai' },
    { _key: 'nvav2', food: 'Fried chicken / pakoda', reason: 'trans fat + phosphate — kidney load badhata hai' },
    { _key: 'nvav3', food: 'Prawn / jhinga', reason: 'shellfish high purine — uric acid spike karta hai' },
    { _key: 'nvav4', food: 'Processed meat (sausage, salami)', reason: 'sodium + preservatives — dono stone formation badhate hain' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Namkeen',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Papad / pickle / achaar', reason: 'sodium itna zyada ki urine mein calcium excretion direct badhti hai' },
        { _key: 'ri2', food: 'Namkeen / chips / packet snacks', reason: 'hidden sodium — daily intake limit toot jaati hai' },
        { _key: 'ri3', food: 'Instant noodles / Maggi', reason: 'sodium + phosphate — kidney pe double load' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'High Oxalate Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Palak (paka hua, roz zyada matra mein)', reason: 'oxalate bahut zyada — calcium oxalate stone ka major trigger hai (occasional thodi si raw palak ok)' },
        { _key: 'ri5', food: 'Kaju', reason: 'seeds mein se sabse zyada oxalate — stone history mein avoid karein' },
        { _key: 'ri6', food: 'Chocolate / cocoa', reason: 'oxalate rich — stone recurrence badhata hai' },
        { _key: 'ri7', food: 'Chaulai (amaranth) saag', reason: 'high oxalate — stone history mein avoid karo' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'High Protein / High Purine',
      emoji: '🚫',
      items: [
        { _key: 'ri8', food: 'Mutton / red meat', reason: 'uric acid production seedha badhata hai' },
        { _key: 'ri9', food: 'Rajma (bahut zyada, daily)', reason: 'moderate oxalate — limit karo (week mein ek baar thoda theek)' },
        { _key: 'ri10', food: 'Soya milk / soya chunks (bahut zyada)', reason: 'phytate + oxalate combination — stone patients mein limit karo' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri11', food: 'Cold drinks / soda', reason: 'phosphoric acid — kidney mein phosphate stone risk badhata hai aur calcium absorption interfere karta hai' },
        { _key: 'ri12', food: 'Packaged juice', reason: 'added sugar + oxalate — real fruit se alag' },
        { _key: 'ri13', food: 'Beer / alcohol', reason: 'dehydration + uric acid dono badhata hai — double trigger' },
        { _key: 'ri14', food: 'Bahut zyada chai (3+ cups)', reason: 'oxalate zyada — 1 cup theek hai lekin 3+ cups = stone risk' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['2 glass gunguna paani + aadha nimbu nichu', 'Dhania seeds raat bhar bheege, subah chhan ke piyo'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Moong dal chilla (bina namak, lehsun chutney)', 'Daliya + ghar ka dahi (thoda)'], nonVegOption: '2 boiled egg white + 1 roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya nashpati (bina salt)', 'Tarbuz ka 1 bowl (summer mein)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + lauki ki sabzi + moong dal', 'Brown rice + masoor dal + gajar sabzi'], nonVegOption: 'Grilled rohu/katla + 2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Nimbu paani (bina namak, thoda shehad) + bhuna chana', 'Adrak wali chai (1 cup, kum patti) + akhrot 3-4'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + turai/lauki ki sabzi + dal', 'Khichdi (moong + chawal, thoda ghee) + raita'], nonVegOption: 'Boiled chicken soup (no cream, no extra salt) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['1 glass gunguna paani — stone patients ke liye raat ko bhi hydrated rehna zaroori', 'Saunf + jeera ka paani (thanda) — diuretic effect'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Nimbu paani',
      vegNashta: 'Moong dal chilla + chutney',
      vegDopahar: 'Jowar roti + lauki + moong dal',
      vegShaam: 'Seb + bhuna chana',
      vegRaat: 'Khichdi + dahi',
      nonVegNashta: '2 boiled egg white + roti',
      nonVegDopahar: 'Grilled rohu + roti + sabzi',
      nonVegRaat: 'Khichdi + dahi',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Dhania seeds paani',
      vegNashta: 'Daliya + gajar',
      vegDopahar: 'Brown rice + masoor dal + turai sabzi',
      vegShaam: 'Nimbu paani + akhrot',
      vegRaat: '2 roti + karela sabzi + dal',
      nonVegNashta: 'Daliya + gajar',
      nonVegDopahar: 'Chicken breast (boiled) + roti + sabzi',
      nonVegRaat: '2 roti + karela sabzi + dal',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Gunguna paani + nimbu',
      vegNashta: 'Poha (kum namak) + pudina chutney',
      vegDopahar: 'Bajra roti + gobhi sabzi + arhar dal',
      vegShaam: 'Tarbuz bowl (summer)',
      vegRaat: 'Moong dal khichdi + ghee',
      nonVegNashta: 'Poha (kum namak)',
      nonVegDopahar: 'Bajra roti + gobhi sabzi + arhar dal',
      nonVegRaat: 'Chicken soup (no cream, no extra salt) + roti',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Saunf paani',
      vegNashta: 'Besan chilla (kum namak) + dahi',
      vegDopahar: 'Brown rice + lauki dal + salad',
      vegShaam: 'Adrak chai + bhuna chana',
      vegRaat: '2 roti + turai sabzi + masoor dal',
      nonVegNashta: '2 egg white + daliya',
      nonVegDopahar: 'Rohu grilled + brown rice + sabzi',
      nonVegRaat: '2 roti + turai sabzi + masoor dal',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Dard Zyada Ho Tab (Stone Movement / Renal Colic)',
      emoji: '😣',
      tips: [
        'Us din sirf paani, nimbu paani, nariyal paani — solid food minimum rakhein',
        'Palak, rajma, kaju — jo normally kabhi kabhi ok hain — us din bilkul nahi',
        'Har ghante 1 glass paani — stone naturally pass hone ki chance badhti hai hydration se',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Kuttu ki roti / singhare ka atta — low oxalate — stone patients ke liye safe vrat option',
        'Nariyal paani + sabudana khichdi (kum namak) — safe hai',
        'Vrat mein sendha namak bahut zyada mat use karo — stone patients ke liye sodium source hai',
        'Agar stone bada hai (5mm+) ya recent episode aaya — vrat se pehle doctor se poochhein',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal makhani ki jagah plain dal tadka order karo — cream aur butter avoid karein',
        'Roti plain mangao — butter naan/garlic bread mein sodium zyada',
        'Avoid karo: papad, achaar, raita (restaurant ka — salt zyada hota hai), fried snacks',
        'Practical hack: ghar se nimbu pack karo — khane mein squeeze karo — extra salt ki jagah citrate milega',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, akhrot, dry amla, plain roti — sodium-free snacks',
        'Train/flight mein: plain paani sabse zaroori — cold drink, soda bilkul nahi',
        'Hotel mein: plain dal + roti order karo — sabzi steamed mangao — extra salt avoid',
      ],
    },
  ],

  proTip: 'Subah uthke aur raat sone se pehle — dono waqt ek glass paani zaroor piyo. Raat ke 8-10 ghante kidney mein urine concentrate hoti hai — yahi waqt crystals banate hain — hydration se ye rok sakte hain.',
  importantNote: 'Ye chart ek general guide hai. Kidney stone ka type (calcium oxalate, uric acid, calcium phosphate) alag hota hai — aur diet har type ke liye slightly alag hoti hai. Apni condition ke hisaab se apne homoeopath ya urologist se personalized plan banwayein.',
  homeopathyDiet: 'Sahi diet se urine mein stone-forming minerals ka concentration kam hota hai — aur isi environment mein homeopathic medicines stone dissolve karne aur recurrence rokne mein better kaam karti hain.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya kidney stone mein doodh aur dairy band karni chahiye?',
      answer: 'Nahi — moderate dairy actually stone se protect karti hai.\nDoodh mein calcium intestine mein oxalate se bind hota hai — aur ye calcium-oxalate stool mein nikalta hai, urine mein nahi.\nLow calcium diet ulta oxalate absorption badhati hai — stone risk badhta hai.\nGhar ka dahi 1 small katori ya 1 glass doodh din mein — theek hai. Packaged flavoured milk, cheese, cream — ye avoid karein.\nDoctor se stone ka type confirm karein — calcium phosphate stone mein dairy differently handle hoti hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya palak (spinach) kidney stone mein bilkul band karni chahiye?',
      answer: 'Agar stone history hai — toh paka hua palak ka saag roz khana avoid karein.\nPalak mein oxalate bahut zyada hota hai — aur calcium oxalate kidney stone ka sabse common type hai India mein.\nThodi si raw palak salad mein ya occasional palak dal — ek baar week mein — generally issue nahi karta.\nLekin jo log roz palak saag khate hain — unka oxalate load consistently high rehta hai — recurrence risk badh jaata hai.\nSimple rule: stone history hai — palak daily nahi, occasional ok.',
    },
    {
      _key: 'faq3',
      question: 'Diet se kidney stone mein kitne din mein fark dikhta hai?',
      answer: 'New stone formation rokne mein diet 2-4 hafte mein effect dikhana shuru kar deti hai — urine oxalate aur uric acid levels change hona shuru hote hain.\nAlready bani hui stone dissolve hone mein time lagta hai — stone ke type par depend karta hai.\nUric acid stone — diet + medicine se faster respond karta hai — weeks to months.\nCalcium oxalate stone — diet se growth rok sakte hain aur recurrence kam kar sakte hain — but existing stone ke liye treatment zaroori hai.\nRecurrence prevention ke liye diet lifelong habit banni chahiye — sirf 1-2 hafte ki nahi.',
    },
    {
      _key: 'faq4',
      question: 'Kidney stone mein chai peena theek hai kya?',
      answer: '1 cup chai din mein — theek hai.\nChai mein oxalate hota hai lekin moderate amount mein — aur chai ke saath enough paani peene se dilution ho jaata hai.\n3+ cups chai daily — ye avoid karein — oxalate accumulate hota hai.\nCold drinks/soda — ye chai se zyada dangerous hai stone mein — phosphoric acid directly stone risk badhata hai.\nNimbu paani (bina namak) — chai se better option hai stone patients ke liye — citrate badhata hai jo crystal formation rokta hai.',
    },
    {
      _key: 'faq5',
      question: 'Kidney stone mein vrat rakh sakte hain?',
      answer: 'Rakh sakte hain — lekin hydration maintain karna zaroori hai.\nVrat mein paani, nariyal paani, nimbu paani continue karte rehein — dehydration stone ka sabse bada trigger hai.\nKuttu ki roti, singhare ka atta, sabudana — ye vrat mein safe options hain stone patients ke liye.\nSendha namak vrat mein bhi zyada mat use karein.\nAgar large stone hai ya recent episode aaya — vrat se pehle doctor se poochhein.',
    },
    {
      _key: 'faq6',
      question: 'Kidney stone mein nimbu aur khatte cheezein avoid karni chahiye?',
      answer: 'Nahi — ye ek bahut common galat belief hai.\nNimbu aur khatti cheezein (naturally) kidney stone mein actually helpful hain — inme citric acid hota hai jo urine mein citrate badhata hai.\nCitrate calcium se bind karta hai — aur crystal formation rokta hai — ye ek natural stone inhibitor hai.\nNimbu paani (bina namak, din mein 2-3 glass) — stone patients ke liye actively recommend kiya jaata hai.\nJo avoid karna hai wo hai: packaged khatti candy, tamarind chutney mein namak + sugar — raw nimbu nahi.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Homeopathic treatment ke dauraan kuch doctors strong smell wali cheezein temporarily limit karne ko kehte hain — jaise hing, strong coffee, camphor — lekin ye har medicine ke saath nahi hota.\nKidney stone ke liye specifically — diet restrictions medicine ke liye nahi, disease ke liye hain — oxalate, sodium, purine — ye toh limit karne hi hain.\nApne doctor se specifically poochhein kaunsi medicines chal rahi hain — individual recommendation lein.\nGeneric restriction har homeopathic medicine pe apply nahi hoti.',
    },
    {
      _key: 'faq8',
      question: 'Kidney stone mein non-veg khana chahiye ya band karna padega?',
      answer: 'Completely band karna zaroorat nahi — lekin type aur quantity matter karti hai.\nFreshwater fish (rohu, katla) — week mein 2-3 baar — theek hai.\nEgg white — boiled — safe protein source hai.\nMutton, red meat, processed meat — ye avoid karein — purine zyada hota hai jo uric acid stone ka direct trigger hai.\nChicken (boiled, small portion) — occasional theek hai.\nRule: animal protein din mein ek baar se zyada nahi — quantity moderate rakhein.',
    },
    {
      _key: 'faq9',
      question: 'Kya chawal (rice) kidney stone mein allowed hai?',
      answer: 'Haan — plain chawal stone mein safe hai.\nChawal ka oxalate level low hai — aur uric acid bhi nahi badhata.\nBrown rice ya parboiled rice — white rice se slightly better hai fibre ke liye.\nChawal ke saath jo khate ho wo matter karta hai — dal + ghee + sabzi ke saath theek hai — dal makhani + butter ke saath sodium zyada ho jaata hai.\nLimit sirf quantity ka — 2 medium katori — zyada nahi.',
    },
    {
      _key: 'faq10',
      question: 'Kya kidney stone mein tomato (tamatar) khana chahiye ya nahi?',
      answer: 'Moderate quantity mein — theek hai.\nTamatar mein oxalate hota hai lekin level itna nahi ki ek aadh tamatar se problem ho.\nJo log roz palak + tamatar + kaju + chocolate sab kha rahe hain unka cumulative oxalate load problem create karta hai — akele tamatar nahi.\nRaw tamatar salad mein thoda — ok. Tamatar ki gravy roz bana ke khana (concentrated form) — avoid karein.\nStone history hai — cumulative high oxalate foods ke saath mat combine karein tamatar.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Siener R — Nutrition and Kidney Stone Disease — Nutrients', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/34204863' },
    { _key: 's2', name: 'Ferraro PM, Bargagli M — Dietetic and lifestyle recommendations for stone formers — Archivos Espanoles de Urologia', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/33459627' },
    { _key: 's3', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Dairy band kar dena — actually ulta stone risk badh jaata hai kyunki oxalate absorb hone lagti hai gut se',
    mustEat: 'Nimbu paani (bina namak) — citrate natural stone inhibitor hai',
    mustAvoid: 'Palak ka saag roz — high oxalate ka sabse common hidden source',
  },

  doctorNote: 'Maine notice kiya hai ki kidney stone ke jo patients dairy completely band kar dete hain — unka treatment response actually slower hota hai aur recurrence bhi zyada aata hai — kyunki calcium ki kami se gut mein oxalate freely absorb hoti hai. Moderate dairy + zyada paani — ye combination pathri ke patients mein sabse better outcomes deta hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Kidney stone (pathri) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/kidney-stone',
  shareTextMealPlan: 'Kidney stone ke liye 4-din ka Indian diet plan: homeopedia.in/diet/kidney-stone',
  shareTextPage: 'Kidney Stone Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/kidney-stone',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding kidney stone diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Kidney stone diet chart seeded — homeopedia.in/diet/kidney-stone')
}

seed().catch(console.error)
