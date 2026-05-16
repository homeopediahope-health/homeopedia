import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-eczema',
  _type: 'diet',
  title: 'Eczema (Atopic Dermatitis) Diet Chart',
  hindiName: 'Kharish / Atopic Dermatitis',
  slug: { _type: 'slug', current: 'eczema' },
  relatedDiseaseSlug: 'eczema',
  category: 'Skin',
  metaTitle: 'Eczema Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Eczema diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Eczema mein kuch foods gut mein inflammation trigger karte hain jo skin ki barrier toot-ti hai aur flare-up hota hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah khaali pet 1 glass lukewarm paani piyo', reason: 'gut flush hota hai jo skin inflammation seedha affect karta hai' },
    { _key: 'eh2', habit: 'Raat ka khaana 7 baje tak khatam karo', reason: 'late khaane se gut bacteria imbalance hoti hai jo eczema flare-up badhata hai' },
    { _key: 'eh3', habit: 'Ek baar mein zyada mat khao', reason: 'gut overload hone se leaky gut ka risk badhta hai — eczema ka direct trigger' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'gut mein prebiotic fiber deta hai jo skin-gut axis ke through eczema mein help karta hai' },
        { _key: 'i2', food: 'Jowar / Bajra roti', reason: 'gluten-free grain — eczema patients jo gluten-sensitive hain unke liye safe' },
        { _key: 'i3', food: 'Brown rice', reason: 'slowly digest hota hai — blood sugar stable — eczema flare aur insulin spike mein direct link hota hai' },
        { _key: 'i4', food: 'Poha (flattened rice)', reason: 'light, easily digestible — gut inflammation nahi badhata' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'gut ki sujan kam karta hai — skin pe directly connected hai eczema mein' },
        { _key: 'i6', food: 'Turai', reason: 'anti-inflammatory compounds — skin barrier repair mein help karta hai' },
        { _key: 'i7', food: 'Palak', reason: 'Vitamin E aur iron — skin tissue repair ke liye zaroori nutrients hain eczema mein' },
        { _key: 'i8', food: 'Methi (fenugreek leaves)', reason: 'gut bacteria balance karta hai jo skin inflammation reduce karta hai' },
        { _key: 'i9', food: 'Karela', reason: 'blood purifier — skin ke through toxin elimination improve karta hai' },
        { _key: 'i10', food: 'Kakdi / Khira (summer mein)', reason: 'skin hydration andar se karta hai — eczema mein skin dryness kam hoti hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Seb (apple)', reason: 'quercetin hota hai — IgE-mediated skin response ko modulate karta hai eczema mein' },
        { _key: 'i12', food: 'Papaya', reason: 'papain enzyme — gut digestion improve karta hai — leaky gut risk kam hoti hai' },
        { _key: 'i13', food: 'Amla (gooseberry)', reason: 'Vitamin C — skin collagen repair karta hai aur inflammation reduce karta hai' },
        { _key: 'i14', food: 'Nashpati (pear)', reason: 'low histamine fruit — eczema mein histamine trigger avoid karne ke liye safe option hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i15', food: 'Moong dal (chhilke wali)', reason: 'sabse easily digestible dal — liver pe load nahi — eczema mein gut health important hai' },
        { _key: 'i16', food: 'Masoor dal', reason: 'iron aur zinc dono — zinc skin barrier repair karta hai eczema patients mein' },
        { _key: 'i17', food: 'Chana dal (thodi matra mein)', reason: 'slowly digests — blood sugar spike nahi — eczema ka indirect trigger avoid hota hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i18', food: 'Haldi + kali mirch (saath mein)', reason: 'haldi ka curcumin skin inflammation reduce karta hai — kali mirch ka piperine absorption significantly badhata hai' },
        { _key: 'i19', food: 'Adrak chai (without milk, without sugar)', reason: 'anti-inflammatory — gut motility improve karta hai' },
        { _key: 'i20', food: 'Tulsi ka paani / tulsi chai', reason: 'immunomodulatory effect — eczema mein overactive immune response ko modulate karta hai' },
        { _key: 'i21', food: 'Nariyal tel (bahari use — cooking mein nahi)', reason: 'applied on skin — lauric acid antimicrobial hai — eczema skin barrier repair karta hai' },
        { _key: 'i22', food: 'Til ka tel (cooking mein thoda)', reason: 'omega-6 linoleic acid — skin moisture barrier repair karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla machhi (boiled ya steamed)', reason: 'omega-3 fatty acids skin inflammation seedha reduce karti hain — eczema mein strongly helpful' },
    { _key: 'nva2', food: 'Anda (boiled, sirf safed bhag)', reason: 'lean protein jo skin repair karta hai — yolk histamine release karta hai isliye sirf white khao agar sensitive ho' },
    { _key: 'nva3', food: 'Surmai machhi (grilled, no fry)', reason: 'omega-3 aur Vitamin D dono — eczema patients mein Vitamin D deficiency common hoti hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Jhinga / Prawns', reason: 'shellfish histamine release karte hain — eczema ka confirmed trigger' },
    { _key: 'nvav2', food: 'Anda (yolk / pura anda agar sensitive ho)', reason: 'IgE-mediated response egg protein se hoti hai eczema mein — test karke decide karo' },
    { _key: 'nvav3', food: 'Fried chicken ya tali machhi', reason: 'trans fat gut microbiome disturb karta hai — eczema flare badhata hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour)', reason: 'gut mein leaky gut badhata hai — eczema ka seedha trigger mechanism hai' },
        { _key: 'ri2', food: 'Packaged biscuits / namkeen', reason: 'maida + refined oil + preservatives — teen triggers ek saath' },
        { _key: 'ri3', food: 'Instant noodles / Maggi', reason: 'MSG aur artificial color — skin inflammation directly badhate hain' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged / market ka dahi', reason: 'processing mein tyramine aur casein protein badhti hai — eczema flare trigger hota hai (ghar ka fresh dahi alag case hai — dono ko confuse mat karo)' },
        { _key: 'ri5', food: 'Paneer (regular, market wala)', reason: 'casein protein IgE response trigger kar sakti hai sensitive eczema patients mein' },
        { _key: 'ri6', food: 'Cream / malai / butter (zyada matra mein)', reason: 'saturated fat gut dysbiosis badhata hai jo skin inflammation se directly linked hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Refined sugar (cheeni)', reason: 'blood sugar spike — insulin surge — skin inflammation — eczema mein ye cycle directly trigger karta hai' },
        { _key: 'ri8', food: 'Bahut teekha khaana (red chilli zyada)', reason: 'gut lining irritate karta hai — skin flare-up next 24-48 hours mein hoti hai' },
        { _key: 'ri9', food: 'Deep-fried snacks (pakoda, chips)', reason: 'trans fat + acrylamide — skin oxidative stress badhata hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: "Cow's milk (full cream, market wala)", reason: 'casein aur whey protein — eczema mein most common food trigger hai especially adults mein (ghar mein 24+ ghante ferment kiya dahi — wo test karo)' },
        { _key: 'ri11', food: 'Packaged fruit juice', reason: 'fructose concentrate + preservatives — skin inflammation badhate hain' },
        { _key: 'ri12', food: 'Alcohol', reason: 'gut permeability (leaky gut) turant badhata hai — eczema ka immediate trigger' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['1 glass lukewarm paani + adha nimbu (nimbu histamine low hai — safe hai eczema mein)', 'Bheegi methi seeds 1 tsp + 1 glass paani'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with lauki ya turai — without milk, thoda ghee', 'Moong dal chilla (no maida) + chutney (pudina ya dhania)'], nonVegOption: '2 boiled ande ka safed bhag + 1 jowar roti + kakdi' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya 1 nashpati', 'Bhuna chana (handful) — no salt version'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal + lauki sabzi + kakdi salad', 'Brown rice + masoor dal + palak sabzi + salad'], nonVegOption: 'Steamed rohu machhi + 2 roti + turai sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Tulsi-adrak chai (no milk, no sugar) + 4-5 akhrot', 'Roasted makhana (no ghee, light namak)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti (jowar ya bajra) + sabzi + moong dal', 'Moong dal khichdi (rice thoda kam, dal zyada) + thoda ghee'], nonVegOption: 'Grilled surmai machhi + 1 roti + sabzi (no heavy masala)' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi paani (milk nahi — sirf paani + haldi + kali mirch)', 'Warm saunf paani'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Methi seeds paani',
      vegNashta: 'Daliya + lauki (no milk)',
      vegDopahar: '2 jowar roti + moong dal + turai sabzi',
      vegShaam: 'Tulsi chai + akhrot',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled anda white + roti',
      nonVegDopahar: 'Steamed rohu + 2 roti + sabzi',
      nonVegRaat: 'Khichdi (same)',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Lukewarm paani + nimbu',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Brown rice + masoor dal + palak sabzi + salad',
      vegShaam: 'Seb + bhuna chana',
      vegRaat: '2 bajra roti + karela sabzi + arhar dal',
      nonVegNashta: 'Chilla (same)',
      nonVegDopahar: 'Grilled surmai + rice + sabzi',
      nonVegRaat: '2 roti + sabzi + dal (same)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Methi seeds paani',
      vegNashta: 'Poha (no onion, light) + adrak chai bina milk',
      vegDopahar: '2 jowar roti + chana dal (thodi) + lauki sabzi',
      vegShaam: 'Nashpati + makhana (roasted)',
      vegRaat: 'Moong dal khichdi + turai sabzi',
      nonVegNashta: 'Poha (same)',
      nonVegDopahar: 'Steamed rohu + roti + sabzi',
      nonVegRaat: 'Khichdi (same)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Lukewarm paani + nimbu',
      vegNashta: 'Daliya + methi tadka (no milk)',
      vegDopahar: 'Brown rice + moong dal + palak sabzi + kakdi',
      vegShaam: 'Tulsi chai + akhrot',
      vegRaat: '2 bajra roti + masoor dal + lauki sabzi',
      nonVegNashta: '1 boiled anda white + daliya',
      nonVegDopahar: 'Grilled katla + rice + sabzi',
      nonVegRaat: 'Roti + dal (same)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi (moong dal + brown rice + ghee) khao — gut rest milti hai aur skin ko healing space milta hai',
        'Dairy, maida, aur teekha completely band karo us din — normally jo thoda allowed hota hai wo bhi nahi',
        'Lukewarm paani har 2 ghante pe — toxin flush karo — flare ke dauran gut permeability zyada hoti hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi safe hai — non-gluten, light — eczema mein gut stress nahi hota',
        'Singhara atta (water chestnut flour) ka chilla — anti-inflammatory, eczema mein safe vrat option',
        'Vrat mein fried sabudana vada ya peanut pakoda avoid karo — oil + fry = flare trigger vrat mein bhi kaam karta hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal fry + plain roti order karo — sabse safe dhaba option eczema mein — maida avoid hoga',
        'Creamy dishes (dal makhani, paneer butter masala, korma) avoid karo — cream + heavy dairy = trigger',
        'Practical hack: Paani peena pehle — bhook thodi kam hogi aur zyada fried items order nahi karoge',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Bhuna chana + akhrot + dry amla saath rakhho — teen-chaar ghante ka safe snack',
        'Train/hotel mein dal chawal ya khichdi order karo — har jagah milti hai aur eczema-safe hai',
      ],
    },
  ],

  proTip: 'Subah uthke jo pehla kaam karo — ghar ka fresh dahi khana ho toh raat ko banao aur subah khao — 8+ ghante ferment hone pe casein partially break hoti hai aur histamine level kam hoti hai. Packaged dahi ki jagah ye karo toh gut response clearly better hoga eczema mein.',
  importantNote: 'Ye chart ek general guide hai — har patient ka trigger alag ho sakta hai. Apni condition ke hisaab se apne homoeopath se personalized plan banwayein.',
  homeopathyDiet: 'Eczema mein jab gut inflammation kam hoti hai diet se — homeopathic medicines faster aur deeper kaam karti hain. Diet aur treatment saath chalein toh healing clearly better hoti hai sirf treatment se zyada.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya eczema mein dahi khana theek hai?',
      answer: 'Depends — ghar ka fresh bana dahi thodi matra mein allowed hai, packaged market wala dahi avoid karein.\nGhar ka dahi 8-12 ghante ferment hota hai — casein aur histamine level kam hoti hai.\nPackaged dahi mein processing mein casein aur tyramine badhti hai jo eczema flare trigger karte hain.\nPractical rule: Raat ko banao, subah 1 small katori khao. Agar us din skin reaction ho — band karo aur doctor se poochho.',
    },
    {
      _key: 'faq2',
      question: 'Kya eczema mein anda (egg) khaya ja sakta hai?',
      answer: 'Adult eczema mein anda seedha trigger nahi hota — children mein zyada common food allergy hai.\nAgar khana ho toh sirf boiled anda ka safed bhag (egg white) se shuru karo — yolk histamine release karta hai.\nEk hafte try karo — skin reaction observe karo.\nAgar reaction aaye — anda apka personal trigger hai — doctor se confirm karwao.',
    },
    {
      _key: 'faq3',
      question: 'Diet se eczema mein kitne din mein fark dikhta hai?',
      answer: '2-4 hafte consistent diet se gut inflammation kum hone lagti hai — skin pe visible fark aane mein 4-6 hafte lag sakte hain.\nYe timeline tab hai jab top triggers (maida, packaged dairy, refined sugar) completely band ho.\nSirf 1-2 items chhorna kaafi nahi — gut ko proper rest chahiye tabhi skin respond karti hai.\nHomeopathic treatment saath ho toh results faster aate hain.',
    },
    {
      _key: 'faq4',
      question: 'Eczema mein chai-coffee peena theek hai?',
      answer: 'Adrak wali chai — bina milk, bina sugar — allowed hai aur anti-inflammatory bhi hai eczema mein.\nRegular dairy milk wali chai — histamine response badhati hai — avoid karein.\nCoffee — thodi matra (1 cup) ok hai, zyada nahi.\nGreen tea ya tulsi chai best option hain eczema mein.',
    },
    {
      _key: 'faq5',
      question: 'Eczema mein vrat kar sakte hain?',
      answer: 'Haan — vrat eczema mein generally safe hai lekin sahi food choose karo.\nSabudana aur singhara atta — safe vrat options.\nFried vrat snacks (sabudana vada, aloo pakoda, farali chakli) avoid karein — oil + fry flare trigger hai.\nHafte mein 1 din light diet ya ekadashi type fasting — gut ko rest milti hai — kuch patients mein skin bhi better hoti hai.',
    },
    {
      _key: 'faq6',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Sabhi medicines ke saath ek jaisi restriction nahi hoti.\nCoffee aur strong smell (camphor, eucalyptus) — kuch specific medicines ke antidote hain — apne doctor se poochho kaun si medicine aap le rahe ho.\nStrong coffee, garlic ka direct intake — kuch cases mein avoid karne ke liye kaha jaata hai.\nGeneralized rule nahi bana sakte — individual medicine aur patient pe depend karta hai.',
    },
    {
      _key: 'faq7',
      question: 'Eczema mein non-veg band karna padega?',
      answer: 'Completely band karna zaroori nahi — lekin choice important hai.\nAllowed: Rohu/katla/surmai (steamed ya grilled) — omega-3 se skin inflammation seedha kam hoti hai.\nAvoid: Shellfish (jhinga), fried non-veg, red meat.\nChicken — boiled ya grilled ok hai, fried bilkul nahi.\nJo patients fish regularly khate hain — unka eczema response diet treatment mein better hota hai.',
    },
    {
      _key: 'faq8',
      question: 'Kya eczema mein chawal (rice) khaya ja sakta hai?',
      answer: 'Haan — brown rice allowed hai aur safe hai.\nWhite rice bhi thodi matra mein ok hai — lekin brown rice prefer karein kyunki fiber gut bacteria ko support karta hai jo skin inflammation mein role karta hai.\nRice hi problem nahi hoti — us ke saath jo khate ho (creamy dal, ghee zyada, pickle) wo trigger hota hai zyada.',
    },
    {
      _key: 'faq9',
      question: 'Eczema mein nimbu aur khatta theek hai ya nahi?',
      answer: 'Nimbu eczema mein generally allowed hai — Vitamin C skin healing support karta hai.\nOverripe ya bahut concentrated khatta — kuch patients mein histamine badhata hai — observe karo.\nImli, khatta achaar, khatta pickle — ye avoid karein — preservatives + high acid combination trigger karta hai.\nEk glass nimbu paani (lukewarm, subah) — safe aur helpful hai eczema patients mein.',
    },
    {
      _key: 'faq10',
      question: 'Eczema mein bahar ka khaana (dhaba, restaurant) bilkul band karein kya?',
      answer: 'Bilkul band karna realistic nahi hai — smart choice karo.\nSafe orders: Dal fry + plain roti, dal chawal, steamed sabzi, plain khichdi.\nAvoid: Creamy gravies, butter naan, fried snacks, packaged sauces.\nPractical hack: Pehle confirm karo ki refined oil use hota hai ya desi ghee — zyada refined seed oil skin ke liye worse hota hai eczema mein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Khan A et al — Atopic dermatitis and nutrition — Clinics in Dermatology', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/34876306' },
    { _key: 's2', name: 'Mahmud MR et al — Impact of gut microbiome on skin health — Gut Microbes', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35866234' },
    { _key: 's3', name: 'Domínguez O et al — Atopic Dermatitis and Food Allergy — Current Pediatric Reviews', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/31713486' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Packaged dahi aur ghar ka dahi ko same samajhna — packaged mein casein aur tyramine alag hoti hai',
    mustEat: 'Rohu / Katla machhi (steamed) — ya agar vegetarian ho toh til (sesame) — dono skin barrier repair karte hain',
    mustAvoid: 'Packaged biscuits aur namkeen — maida + refined oil + preservatives teen triggers ek saath',
  },

  doctorNote: 'Maine notice kiya hai ki jo eczema patients dairy aur maida dono ek saath chodh dete hain — sirf ek nahi, dono — unka homeopathic treatment response clearly aur faster aata hai akele ek trigger avoid karne wale patients ki tulna mein. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Eczema (Kharish) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/eczema',
  shareTextMealPlan: 'Eczema ke liye 4-din ka Indian diet plan: homeopedia.in/diet/eczema',
  shareTextPage: 'Eczema Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/eczema',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding eczema diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Eczema diet chart seeded — homeopedia.in/diet/eczema')
}

seed().catch(console.error)
