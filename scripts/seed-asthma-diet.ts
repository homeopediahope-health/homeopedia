import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-asthma',
  _type: 'diet',
  title: 'Asthma (Dama) Diet Chart',
  hindiName: 'Dama / Shwas Rog',
  slug: { _type: 'slug', current: 'asthma' },
  relatedDiseaseSlug: 'asthma',
  category: 'Respiratory',
  metaTitle: 'Asthma (Dama) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Asthma (Dama) diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Asthma mein kuch foods airway inflammation (airways ki sujan) directly badhate hain aur mucus production trigger karte hain — jo attack ka risk badhata hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Raat ka khaana 7 baje tak kha lo', reason: 'late khaane se acid reflux hota hai jo asthma attacks raat ko trigger karta hai' },
    { _key: 'eh2', habit: 'Ek baar mein zyada mat khao', reason: 'full stomach diaphragm pe pressure dalta hai jo breathing difficult karta hai' },
    { _key: 'eh3', habit: 'Subah uthke 1 glass lukewarm paani piyo', reason: 'airways ki morning stiffness kam karne mein help karta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'easily digest hota hai, gut-lung axis ke through airway inflammation kam karta hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'maida ki jagah — refined carbs ki tarah airway mucus nahi badhata' },
        { _key: 'i3', food: 'Jowar / Bajra roti', reason: 'anti-inflammatory fiber rich — wheat sensitivity walo ke liye safer option' },
        { _key: 'i4', food: 'Poha', reason: 'light hai, jaldi digest hota hai — heavy nashta breathing pe pressure nahi dalta' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki (bottle gourd)', reason: 'alkaline nature airway acidity kam karta hai jo asthma worse karta hai' },
        { _key: 'i6', food: 'Gajar', reason: 'beta-carotene rich hai jo lung tissue ki lining protect karta hai' },
        { _key: 'i7', food: 'Palak', reason: 'magnesium hota hai jo bronchial muscles relax karne mein help karta hai' },
        { _key: 'i8', food: 'Karela', reason: 'anti-inflammatory compounds airways ki chronic sujan kam karte hain' },
        { _key: 'i9', food: 'Adrak (ginger)', reason: 'gingerol compound bronchodilator ki tarah kaam karta hai — airways kholta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Seb (apple)', reason: 'quercetin antioxidant hota hai jo airway inflammation directly reduce karta hai' },
        { _key: 'i11', food: 'Papaya', reason: 'vitamin C rich — lung oxidative stress kam karta hai jo asthma worsen karta hai' },
        { _key: 'i12', food: 'Amla', reason: 'vitamin C ka sabse concentrated Indian source — airway immunity strong karta hai' },
        { _key: 'i13', food: 'Anar (pomegranate)', reason: 'antioxidant polyphenols respiratory tract ki sujan kam karte hain' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal (split, bina chilka)', reason: 'sabse easily digestible dal — gas nahi banata jo breathing affect kare' },
        { _key: 'i15', food: 'Masoor dal', reason: 'iron + protein — anemia asthma symptoms worsen karta hai, ye prevent karta hai' },
        { _key: 'i16', food: 'Chana dal', reason: 'slowly digest hoti hai — blood sugar stable rakhti hai — unstable sugar airway reactivity badhata hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i17', food: 'Haldi + kali mirch wala doodh (raat ko)', reason: 'curcumin airway inflammation reduce karta hai, kali mirch uska absorption badhati hai' },
        { _key: 'i18', food: 'Tulsi chai', reason: 'tulsi ka eugenol compound airways ki spasm kam karta hai' },
        { _key: 'i19', food: 'Adrak + mulethi ka kadha', reason: 'dono bronchodilator properties rakhte hain' },
        { _key: 'i20', food: 'Til ka tel (cooking ke liye)', reason: 'omega fatty acids airway inflammation moderate karte hain' },
        { _key: 'i21', food: 'Jeera + ajwain (khaane mein)', reason: 'ajwain ka thymol compound airway secretion clear karne mein help karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla machhi (boiled/grilled)', reason: 'omega-3 fatty acids airway inflammation reduce karte hain — asthma mein directly helpful' },
    { _key: 'nva2', food: 'Anda (boiled, 1-2)', reason: 'complete protein — lung muscle strength maintain karta hai' },
    { _key: 'nva3', food: 'Chicken (boiled/grilled, bina skin)', reason: 'lean protein — asthma mein fatigue common hai — protein important hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried machhi / Fried chicken', reason: 'frying se trans fat banta hai jo airway inflammation badhata hai' },
    { _key: 'nvav2', food: 'Processed meat (sausage, salami)', reason: 'sulfites hote hain jo asthma ka strong trigger hain' },
    { _key: 'nvav3', food: 'Mutton / Red meat', reason: 'saturated fat + arachidonic acid — leukotriene production badhata hai jo airway constriction karta hai' },
    { _key: 'nvav4', food: 'Shellfish (jhinga etc.)', reason: 'sulfite naturally high hota hai — asthma trigger ban sakta hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour)', reason: 'gut inflammation badhata hai jo gut-lung axis ke through airway reactivity worsen karta hai' },
        { _key: 'ri2', food: 'Packaged biscuit / namkeen', reason: 'preservatives aur artificial flavors asthma triggers hain' },
        { _key: 'ri3', food: 'Instant noodles / pasta', reason: 'refined carbs + sodium — airway mucus production badhate hain' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full fat doodh aur cream', reason: 'mucus production badhata hai — already asthma mein excess mucus problem hai' },
        { _key: 'ri5', food: 'Packaged paneer', reason: 'preservatives + high fat — asthma mein avoid better hai' },
        { _key: 'ri6', food: 'Fried snacks (pakoda, samosa)', reason: 'trans fat airway lining irritate karta hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Bahut zyada mirch / spicy food', reason: 'airways irritate karta hai — cough aur spasm trigger ho sakta hai' },
        { _key: 'ri8', food: 'Refined sugar (mithaiyan, cold drinks)', reason: 'pro-inflammatory — airway hyperreactivity badhata hai' },
        { _key: 'ri9', food: 'Achaar (market wala)', reason: 'sulfites + vinegar — asthma ka documented trigger hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Cold drinks / Soda', reason: 'sulfur dioxide + cold temperature — bronchospasm trigger kar sakta hai' },
        { _key: 'ri11', food: 'Alcohol', reason: 'histamine hota hai jo airways ki sujan karta hai — asthma attacks badhata hai' },
        { _key: 'ri12', food: 'Bahut thanda paani ya ice drinks', reason: 'cold temperature bronchospasm trigger karta hai' },
        { _key: 'ri13', food: 'Energy drinks', reason: 'high caffeine + additives — heart rate aur airway reactivity dono affect karte hain' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + adrak ka ek chhota tukda', 'Lukewarm paani + amla powder half tsp'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with gajar aur lauki (thoda sa)', 'Moong dal ka chilla + pudina chutney'], nonVegOption: '2 boiled ande + 1 roti + adrak chai' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya papaya (room temperature)', 'Bhuna chana (mutthi bhar) — cold snacks avoid'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar roti + moong dal + lauki ki sabzi + salad', 'Brown rice + masoor dal + palak sabzi'], nonVegOption: 'Grilled rohu/katla + 2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Tulsi + adrak chai (warm) + 4-5 akhrot', 'Ajwain water (warm) + roasted makhana'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + chana dal + gajar ki sabzi (halki)', 'Khichdi (moong dal + brown rice) + ghee (1 tsp)'], nonVegOption: 'Chicken soup (no cream, no spices) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (kali mirch ke saath)', 'Mulethi + tulsi ka warm kadha'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Lukewarm paani + adrak',
      vegNashta: 'Daliya + gajar sabzi',
      vegDopahar: '2 jowar roti + moong dal + lauki sabzi',
      vegShaam: 'Tulsi chai + akhrot',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled ande + 1 roti',
      nonVegDopahar: 'Grilled rohu + 2 roti + lauki sabzi',
      nonVegRaat: 'Chicken soup + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Lukewarm paani + amla powder',
      vegNashta: 'Poha + pudina chutney',
      vegDopahar: 'Brown rice + masoor dal + palak sabzi',
      vegShaam: 'Ajwain water + makhana',
      vegRaat: '2 roti + chana dal + gajar sabzi',
      nonVegNashta: 'Poha (veg same)',
      nonVegDopahar: 'Katla machhi grilled + brown rice + palak',
      nonVegRaat: '2 roti + masoor dal + sabzi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Lukewarm paani + adrak',
      vegNashta: 'Moong dal chilla',
      vegDopahar: '2 bajra roti + arhar dal + karela sabzi',
      vegShaam: 'Adrak mulethi kadha + bhuna chana',
      vegRaat: 'Daliya khichdi + ghee',
      nonVegNashta: '2 boiled ande + daliya (thoda)',
      nonVegDopahar: '2 roti + arhar dal + karela sabzi',
      nonVegRaat: 'Khichdi + grilled chicken (thoda)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Lukewarm paani + amla powder',
      vegNashta: 'Daliya + lauki',
      vegDopahar: '2 jowar roti + masoor dal + palak sabzi',
      vegShaam: 'Tulsi chai + akhrot',
      vegRaat: '2 roti + moong dal + gajar sabzi',
      nonVegNashta: 'Daliya + lauki (veg same)',
      nonVegDopahar: 'Rohu machhi grilled + jowar roti + sabzi',
      nonVegRaat: '2 roti + moong dal + gajar',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Attack Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf warm daliya, khichdi, ya moong dal soup piyo — light foods digestion easy karte hain, energy breathing ke liye bachti hai',
        'Koi bhi dairy, fried, ya cold cheez avoid karo — normally allowed dahi bhi us din band karo',
        'Room temperature pe khaana khaao — na bahut garam na bilkul thanda — temperature extremes airways irritate karte hain',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi theek hai — lekin coconut chutney ke saath nahi, plain ya jeera tadke ke saath khao',
        'Singhare ka atta ya kuttu ka atta ka paratha (ghee mein, oil mein nahi) — safe options hain',
        'Vrat mein cold drinks, packaged fruit juices, aur dahi ka raita avoid karo — asthma mein ye sab trigger ban sakte hain',
        'Agar asthma severe hai — lambi fasting avoid karo, low blood sugar breathing difficulty worsen kar sakti hai — doctor se poochho',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti order karo — simple, least additives wala option hai',
        'Grilled / tandoori items prefer karo — fried completely avoid',
        '"Bina tej masale ke banana" specifically bolke order karo — mirch aur spice asthma trigger hain',
        'Practical hack: Ghar se bhuna chana ya akhrot carry karo — agar bahar ka khaana suitable na lage toh hunger manage kar sako',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, dry amla candy, roasted makhana, plain roti — ye sab days tak safe rehte hain',
        'Train / flight mein plain dal rice order karo — biryani, fried items, ya heavy curry avoid',
        'Cold AC environment mein warm scarf rakho muh ke paas — cold dry air direct asthma trigger hai travel mein',
      ],
    },
  ],

  proTip: 'Khaana khaane ke baad kam se kam 30 minute tak lait mat jao — acid reflux airway mein jaata hai aur raat ke asthma attacks badhata hai. Ye ek simple timing change hai jo bahut patients mein clearly fark dikhata hai.',
  importantNote: 'Ye chart ek general guide hai — har patient ki triggers alag hoti hain. Apni condition ke hisaab se apne homoeopath se personalized plan banwayein.',
  homeopathyDiet: 'Sahi diet airway inflammation low rakhti hai — jab inflammation baseline pe kam ho toh homeopathic medicines airway hyperreactivity pe zyada effectively kaam karti hain aur treatment response better hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Asthma mein dahi khana chahiye ya nahi?',
      answer: 'Ghar ka fresh bana dahi (1 small katori, room temperature pe) — allowed hai.\nDahi mein probiotics hote hain jo gut-lung axis ke through airway immunity support karte hain.\nLekin packaged / refrigerator se seedha thanda dahi avoid karo — cold temperature bronchospasm trigger karta hai.\nAgar dairy se sensitivity ho toh apne doctor se poochho.',
    },
    {
      _key: 'faq2',
      question: 'Asthma mein chai peena theek hai?',
      answer: 'Regular milk chai — limited karo (din mein 1 cup, zyada nahi).\nTulsi chai, adrak chai, mulethi chai — ye actively beneficial hain asthma mein.\nBlack coffee (1 cup, subah) — theophylline jaisi mild bronchodilator property hai, chhota help karta hai.\nLekin bahut zyada caffeine avoid karo — heart rate aur airway reactivity affect karta hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se asthma mein kitne din mein fark dikhta hai?',
      answer: 'Trigger foods band karne ka fark — 2-4 hafte mein typically dikhna shuru hota hai.\nInflammatory foods (maida, fried, packaged) completely avoid karne pe — 4-6 hafte mein breathing better feel hoti hai.\nDiet akela treatment nahi hai — medicine ke saath diet sahi ho toh response faster hota hai.\nHar patient alag hai — apna pattern observe karo.',
    },
    {
      _key: 'faq4',
      question: 'Asthma mein vrat / fast kar sakte hain?',
      answer: 'Short religious vrat (ek din) — generally okay hai.\nSabudana, singhare ka atta, kuttu — safe vrat foods hain asthma mein.\nLambi fasting avoid karo — low blood sugar airway hyperreactivity worsen kar sakta hai.\nVrat mein cold drinks aur packaged juices bilkul mat piyo — ye asthma triggers hain.\nSevere asthma hai toh pehle doctor se poochho.',
    },
    {
      _key: 'faq5',
      question: 'Asthma mein chawal (rice) khana band karna padega?',
      answer: 'Nahi — chawal completely band karne ki zaroorat nahi.\nBrown rice prefer karo — white rice se better hai kyunki glycemic index kam hai.\nWhite rice completely avoid nahi, lekin roz khaane ki jagah rotate karo — jowar, bajra, daliya ke saath.\nChawal mein koi direct asthma trigger nahi hai.',
    },
    {
      _key: 'faq6',
      question: 'Asthma mein kela khana chahiye?',
      answer: 'Haan — fresh kela allowed hai asthma mein.\nKele mein vitamin B6 hota hai jo bronchial function support karta hai.\nLekin overripe / bahut pakka kela — histamine zyada hota hai — agar histamine-sensitive ho toh avoid karo.\nRoom temperature pe khao — refrigerator se thanda kela nahi.',
    },
    {
      _key: 'faq7',
      question: 'Raat ko bahar ka khana asthma mein theek hai?',
      answer: 'Raat ko bahar khaana — double risky hai asthma mein.\nLate eating + oily/spicy restaurant food — acid reflux ka chance badhta hai jo raat ke attacks trigger karta hai.\nAgar bahar khaana ho — raat 7 baje tak kha lo, plain dal-roti order karo, spicy bilkul nahi.',
    },
    {
      _key: 'faq8',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Specific restrictions individual medicine pe depend karti hain — sabse nahi.\nGenerally strong smell — coffee, camphor, raw onion near medicine time — kuch doctors avoid karne ko kehte hain.\nMedicine lene ke 30 minute pehle aur baad kuch mat khao — ye standard instruction hai.\nApne homoeopath se specifically poochho — individual variation hoti hai.',
    },
    {
      _key: 'faq9',
      question: 'Asthma mein non-veg khana chahiye ya band karna padega?',
      answer: 'Completely band karne ki zaroorat nahi.\nRouhu, katla machhi (boiled/grilled) — omega-3 ke kaaran actually beneficial hai asthma mein.\nBoiled ande — allowed hain.\nRed meat (mutton), fried non-veg, processed meat — ye avoid karo.\nCooking method sabse important hai — grilled/boiled yes, fried no.',
    },
    {
      _key: 'faq10',
      question: 'Asthma mein doodh peena chahiye ya nahi?',
      answer: 'Full fat doodh — mucus production badhata hai — limit karo.\nAgar haldi wala warm doodh raat ko le rahe ho — thin karo (zyada paani, kam doodh).\nAgar doodh peene ke baad breathing tight lagti ho — ye dairy sensitivity ka sign ho sakta hai — apne doctor ko batao.\nPlant-based alternatives (coconut milk etc.) — asthma pe less mucus-producing hain.',
    },
    {
      _key: 'faq11',
      question: 'Asthma mein achaar, chutney khana safe hai?',
      answer: 'Ghar ka taaza chutney (pudina, dhania) — okay hai.\nMarket wala achaar — avoid karo — sulfites aur vinegar dono asthma ke documented triggers hain.\nNimbu ka taaza ras — theek hai — lekin tamarind (imli) heavy ho sakti hai kuch patients mein.\nPackaged sauces — bilkul nahi — preservatives bhare hote hain.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Guilleminault L et al — Diet and Asthma: Is It Time to Adapt Our Message? — Nutrients', year: '2017', url: 'https://pubmed.ncbi.nlm.nih.gov/29117118' },
    { _key: 's2', name: 'Brustad N et al — Dietary prevention strategies for childhood asthma — Pediatric Allergy and Immunology', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37492917' },
    { _key: 's3', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Raat ko heavy ya spicy khaana khaana — acid reflux se raat ke attacks ka sabse common hidden trigger hai',
    mustEat: 'Adrak — natural bronchodilator hai, easily available hai, aur cooking mein bhi dala ja sakta hai',
    mustAvoid: 'Market wala achaar — sulfites ka concentrated source hai jo asthma ka strong trigger hai',
  },

  doctorNote: 'Mere asthma patients mein maine notice kiya hai ki jo log raat ka khaana 7 baje tak kha lete hain aur dairy + fried khaana dono ek saath avoid karte hain — unka nocturnal (raat ka) attack frequency clearly kam hoti hai treatment ke saath. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Asthma (Dama) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/asthma',
  shareTextMealPlan: 'Asthma ke liye 4-din ka Indian diet plan: homeopedia.in/diet/asthma',
  shareTextPage: 'Asthma Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/asthma',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Asthma diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Asthma diet chart seeded — homeopedia.in/diet/asthma')
}

seed().catch(console.error)
