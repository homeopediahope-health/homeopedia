import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-migraine',
  _type: 'diet',
  title: 'Migraine Diet Chart',
  hindiName: 'Aadha Sheesh, Adhkopari',
  slug: { _type: 'slug', current: 'migraine' },
  relatedDiseaseSlug: 'migraine',
  category: 'Mental',
  metaTitle: 'Migraine (Aadha Sheesh) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Migraine diet chart — trigger foods ki red list, green list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Migraine mein kuch specific foods brain mein serotonin level aur blood vessel dilation directly trigger karte hain — isi wajah se ek galat khaana poora attack la sakta hai.\n\nNeeche complete guide hai — trigger foods ki red list, safe green list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Khaana kabhi skip mat karo', reason: 'khaali pet migraine ka sabse bada trigger hai — blood sugar drop se attack shuru hota hai' },
    { _key: 'eh2', habit: 'Har din same time pe khaao', reason: 'irregular meal timing se circadian rhythm disturb hoti hai jo migraine frequency badhata hai' },
    { _key: 'eh3', habit: 'Subah uthke 30 min ke andar kuch khao', reason: 'raat bhar ka fasting gap migraine attack ke liye peak time hota hai — break karo jaldi' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (oats)', reason: 'blood sugar stable rakhta hai — migraine ka ek primary trigger avoid hota hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'easily digest hota hai — gut-brain axis pe stress nahi dalata' },
        { _key: 'i3', food: 'Jowar roti', reason: 'maida se better — refined carbs migraine mein spike-crash banate hain' },
        { _key: 'i4', food: 'Poha', reason: 'light aur jaldi banta hai — subah ka safe option' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'magnesium ka achha source — migraine patients mein magnesium deficiency common hoti hai' },
        { _key: 'i6', food: 'Lauki', reason: 'hydrating aur light — dehydration migraine trigger karta hai' },
        { _key: 'i7', food: 'Gajar', reason: 'Vitamin B6 hota hai — serotonin production mein help karta hai jo migraine regulate karta hai' },
        { _key: 'i8', food: 'Methi', reason: 'anti-inflammatory — neurological sujan kam karta hai' },
        { _key: 'i9', food: 'Turai', reason: 'gut pe light — gut inflammation ka seedha connection hai migraine se' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Seb (apple)', reason: 'quercetin hota hai — brain inflammation reduce karta hai' },
        { _key: 'i11', food: 'Papaya', reason: 'digestive enzymes — gut health support karta hai jo migraine frequency se linked hai' },
        { _key: 'i12', food: 'Naashpati (pear)', reason: 'low-histamine fruit — histamine migraine ka known trigger hai' },
        { _key: 'i13', food: 'Amla', reason: 'Vitamin C + antioxidants — nerve health ke liye zaroori' },
        { _key: 'i14', food: 'Tarbuz (summer mein)', reason: '92% water — hydration migraine prevention mein sabse important factor hai' },
        { _key: 'i15', food: 'Kela (fresh, slightly raw)', reason: 'slow-release energy — blood sugar stable rakhta hai — sirf overripe avoid karein' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chhilka wali)', reason: 'magnesium + B vitamins — migraine ke liye dono zaroori hain' },
        { _key: 'i17', food: 'Masoor dal', reason: 'easily digest hoti hai — heavy digestion se blood diverts — migraine badh sakta hai' },
        { _key: 'i18', food: 'Chane (bhune hue)', reason: 'slow-release energy — blood sugar crash nahi hota' },
        { _key: 'i19', food: 'Ghar ka fresh bana dahi (1 small katori)', reason: 'gut health support karta hai — tyramine level fresh mein bahut kam hota hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i20', food: 'Adrak chai (no milk, no sugar)', reason: 'gingerol migraine ki severity aur nausea dono kam karta hai' },
        { _key: 'i21', food: 'Haldi + warm paani', reason: 'curcumin brain inflammation seedha target karta hai' },
        { _key: 'i22', food: 'Sarson ka tel (khaane mein)', reason: 'omega-3 — neurological inflammation reduce karta hai' },
        { _key: 'i23', food: 'Jeera', reason: 'digestive + anti-spasmodic — migraine ke saath aane wali nausea mein help karta hai' },
        { _key: 'i24', food: 'Laung', reason: 'eugenol hota hai — natural pain modulator — migraine pain mein kuch relief milti hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Anda (boiled, 1-2)', reason: 'Vitamin B2 (riboflavin) ka achha source — riboflavin migraine frequency reduce karta hai' },
    { _key: 'nva2', food: 'Rohu / Katla machli (grilled/steam)', reason: 'omega-3 fatty acids — brain inflammation direct kam karte hain' },
    { _key: 'nva3', food: 'Chicken (boiled/grilled, no skin)', reason: 'lean protein — blood sugar stable rakhta hai — migraine trigger avoid' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Processed meat (sausage, salami, packaged chicken)', reason: 'tyramine + nitrates dono hote hain — migraine ke powerful triggers hain' },
    { _key: 'nvav2', food: 'Fried chicken / pakode', reason: 'trans fat + MSG — dono brain vasodilation trigger karte hain' },
    { _key: 'nvav3', food: 'Prawns / shellfish', reason: 'high histamine — histamine-induced migraine ka direct risk' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida ki roti / bread', reason: 'rapid blood sugar spike phir crash — ye cycle migraine attack shuru karta hai' },
        { _key: 'ri2', food: 'Instant noodles / Maggi', reason: 'MSG (monosodium glutamate) hota hai — sabse common dietary migraine trigger hai' },
        { _key: 'ri3', food: 'Packaged biscuits / namkeen', reason: 'hidden MSG + preservatives — migraine ke liye double risk' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Aged paneer / cheese', reason: 'tyramine ki high concentration — brain blood vessels ko dilate karta hai — attack trigger' },
        { _key: 'ri5', food: 'Packaged / set dahi (market wala)', reason: 'fermentation mein tyramine zyada banta hai — migraine trigger karta hai' },
        { _key: 'ri6', food: 'Full fat doodh', reason: 'heavy digestion — gut se blood diverts — migraine worse ho sakta hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Zyada mirch', reason: 'capsaicin blood vessel response trigger karta hai — migraine sensitive vessels pe effect' },
        { _key: 'ri8', food: 'Chocolate', reason: 'phenylethylamine + caffeine combination — migraine mein well-known trigger hai' },
        { _key: 'ri9', food: 'Overripe / bahut pakka kela', reason: 'tyramine zyada hota hai jab kela bahut pakk jaata hai — fresh/slightly raw allowed hai' },
        { _key: 'ri10', food: 'Mithai / sweets', reason: 'sugar spike immediately phir crash — ye pattern migraine ke liye risky hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri11', food: 'Alcohol (especially red wine, beer)', reason: 'histamine + tyramine dono — migraine ka number one drink trigger' },
        { _key: 'ri12', food: 'Coffee (zyada) ya achanak band karna', reason: 'zyada caffeine ya withdrawal — dono migraine trigger karte hain' },
        { _key: 'ri13', food: 'Cold drinks / soda', reason: 'artificial sweeteners (aspartame) + caffeine + gas — teen triggers ek saath' },
        { _key: 'ri14', food: 'Packed fruit juices', reason: 'concentrated sugar — rapid blood sugar spike — migraine trigger' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + adrak ka ek chhota tukda', 'Bheegi kishmish 8-10 + ek anjeer'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with gajar + methi', 'Moong dal chilla + dhania chutney'], nonVegOption: '2 boiled ande + 1 jowar roti — riboflavin se bhara' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya naashpati — low-histamine snack', 'Bhuna chana (mutthi bhar) — slow-release energy'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar roti + moong dal + palak sabzi + salad', 'Brown rice + masoor dal + lauki sabzi + raita (ghar ka fresh dahi)'], nonVegOption: 'Grilled rohu + brown rice + sabzi — omega-3 peak intake dopahar mein' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak tulsi chai (no milk) + akhrot 4-5', 'Roasted makhana + warm paani'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + turai ya lauki sabzi + dal', 'Moong dal khichdi + desi ghee (thoda)'], nonVegOption: 'Boiled chicken soup (no cream, no spice) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (gai ka, thoda) — curcumin sleep aur nerve inflammation dono help karta hai', 'Warm paani + saunf — raat ko gut settled rakhta hai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Adrak paani + kishmish',
      vegNashta: 'Moong dal chilla + chutney',
      vegDopahar: 'Jowar roti + palak dal + lauki sabzi',
      vegShaam: 'Adrak chai + bhuna chana',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled ande + jowar roti',
      nonVegDopahar: 'Brown rice + masoor dal + steamed rohu',
      nonVegRaat: 'Chicken soup + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Warm paani + anjeer 1',
      vegNashta: 'Daliya with gajar + methi',
      vegDopahar: 'Brown rice + arhar dal + turai sabzi',
      vegShaam: 'Tulsi chai + akhrot',
      vegRaat: '2 roti + moong dal + palak sabzi',
      nonVegNashta: 'Daliya + 1 boiled anda',
      nonVegDopahar: 'Grilled katla + jowar roti + sabzi',
      nonVegRaat: '2 roti + sabzi (chicken broth side mein)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Adrak paani + 8 kishmish',
      vegNashta: 'Poha with gajar + matar + dhania',
      vegDopahar: '2 jowar roti + chana dal + methi sabzi',
      vegShaam: 'Warm paani + roasted makhana',
      vegRaat: 'Khichdi + lauki sabzi',
      nonVegNashta: 'Poha + 1 boiled anda',
      nonVegDopahar: 'Brown rice + masoor dal + grilled chicken piece',
      nonVegRaat: 'Khichdi + chicken broth (clear, no cream)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Warm haldi paani',
      vegNashta: 'Upma with vegetables + coconut chutney',
      vegDopahar: 'Brown rice + moong dal + palak + salad',
      vegShaam: 'Adrak chai + seb 1',
      vegRaat: '2 roti + arhar dal + turai sabzi',
      nonVegNashta: 'Upma + 2 boiled ande',
      nonVegDopahar: 'Jowar roti + masoor dal + steamed rohu',
      nonVegRaat: '2 roti + dal + chicken (boiled, no masala)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Attack Aa Raha Ho Tab',
      emoji: '😣',
      tips: [
        'Sirf khichdi ya daliya — plain — koi masala nahi — light digestion brain pe extra load nahi dalata',
        'Strong smell wala khaana avoid — adrak bhi is waqt skip karo — smell bhi migraine worse karta hai',
        'Thanda paani mat piyo — room temperature ya warm paani — cold water head pain badha sakta hai attack mein',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi — migraine-safe vrat food — simple carbs se blood sugar sudden drop nahi hota',
        'Singhare ka atta roti — better option than kuttu atta (kuttu kuch patients mein trigger banta hai)',
        'Lambe nirjala (waterless) vrat avoid karo — dehydration migraine patients ke liye serious risk hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho',
      emoji: '🍽️',
      tips: [
        'Dal roti ya dal chawal order karo — sada — sauces aur gravies mein MSG hone ki sambhavana hoti hai',
        'Fried snacks, Chinese food, aur processed items bilkul avoid karo — restaurant mein MSG control nahi hota',
        'Paani ki bottle saath rakho — outdoor mein dehydration ka risk sabse zyada hota hai migraine ke liye',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, anjeer, dry amla, jowar crackers — slow energy release, migraine-safe snacks',
        'Train/hotel mein: dal chawal ya roti sabzi order karo — sada — sauce wali dish avoid karo',
      ],
    },
  ],

  proTip: 'Migraine patients ke liye ek kaam jo sabse pehle karo — ek "migraine food diary" rakhna shuru karo. Jab bhi attack aaye — 24 ghante pehle kya khaya likho. 2-3 hafte mein aapka personal trigger food clearly pattern mein aayega — jo is generic list se zyada helpful hoga.',
  importantNote: 'Ye chart ek general guide hai — migraine triggers person to person bahut alag hote hain. Apni condition aur attack pattern ke hisaab se apne homoeopath se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Migraine mein sahi diet triggers ko remove karti hai aur brain ko stable environment deti hai — jisme homeopathic medicines nerve sensitivity ko address karti hain — dono saath kaam karein to treatment response kaafi better hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Migraine mein chai peena chahiye ya nahi?',
      answer: 'Thodi chai theek hai — lekin condition ke saath.\nEk cup plain adrak chai ya tulsi chai migraine mein actually help kar sakti hai — vasodilation kam karne mein.\nLekin milk + sugar wali regular chai migraine ko aur bad kar sakti hai — dairy aur refined sugar dono triggers hain.\nCoffee: ek cup se acute attack mein thodi relief hoti hai — lekin daily 2+ cup, ya achanak band karna — dono trigger hain. Apne homoeopath se confirm karein.',
    },
    {
      _key: 'faq2',
      question: 'Kya chawal (rice) migraine mein allowed hai?',
      answer: 'Haan — brown rice migraine mein safe hai.\nSlowly digest hota hai — blood sugar spike nahi karta — aur migraine ka ek primary trigger blood sugar drop hai.\nWhite rice bhi allowed hai — sirf zyada fried ya spicy ke saath nahi.\nMaida aur instant foods — nahi — ye rapid spike-crash karte hain jo trigger hai.',
    },
    {
      _key: 'faq3',
      question: 'Migraine mein dahi khana chahiye ya nahi?',
      answer: 'Thoda fresh dahi allowed hai — lekin aged ya fermented dairy avoid karein.\nDahi mein tyramine hoti hai — migraine patients mein tyramine blood vessels dilate karta hai — attack trigger hota hai.\nFresh homemade dahi, thodi matra — kuch patients tolerate karte hain. Packaged set dahi ya cheese — avoid.\nApni tolerance dekho — food diary mein note karo.',
    },
    {
      _key: 'faq4',
      question: 'Kela khana chahiye migraine mein?',
      answer: 'Fresh, slightly raw kela — theek hai.\nOverripe ya pakka hua kela — avoid karein.\nJab kela bahut pakk jaata hai, uska tyramine level badh jaata hai — jo migraine trigger hota hai.\nFresh kela slow-release energy deta hai — fasting gap fill karne ke liye useful hai.',
    },
    {
      _key: 'faq5',
      question: 'Diet se migraine mein kitne din mein fark dikhta hai?',
      answer: 'Triggers completely hatane ke baad 3-4 hafte mein fark dikhna shuru hota hai.\nMigraine ek chronic condition hai — ek din mein nahi badlega.\nJo patients triggers identify karke consistently avoid karte hain unki attack frequency 4-6 hafte mein clearly reduce hoti hai.\nDiet + homeopathic treatment saath ho to response faster hota hai — akele diet se results slow hote hain.',
    },
    {
      _key: 'faq6',
      question: 'Migraine mein vrat / fast kar sakte hain?',
      answer: 'Nirjala (waterless) vrat migraine patients ke liye risky hai — dehydration sabse common trigger hai.\nPhal-phool wala vrat — better option — sabudana, singhare ka atta, paani regular rakhna.\nAgar migraine frequent aata hai — lambe vrat avoid karo.\nApne doctor se ek baar confirm zaroor karein — especially agar medications chal rahi hain.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Sabhi medicines ke saath ek jaisa restriction nahi hota.\nKuch doctors strong smell wali cheezein avoid karne kehte hain — camphor, kachcha lahsun — khas taur pe medicine lene se 30 min pehle aur baad.\nCoffee restriction specific medicines (jaise Nux Vomica) ke saath hoti hai — sabse nahi.\nApni specific medicines ke baare mein apne homoeopath se ek baar zaroor poochho.',
    },
    {
      _key: 'faq8',
      question: 'Migraine mein non-veg khana chahiye ya band karna padega?',
      answer: 'Completely band karne ki zaroorat nahi — lekin sahi non-veg choose karna padega.\nAllowed: boiled eggs, grilled fish (rohu, katla), boiled chicken — riboflavin aur omega-3 migraine ke liye helpful hain.\nAvoid: processed meat, fried non-veg, red meat, alcohol — ye sab strong triggers hain.\nCooking method matter karta hai — fried nahi, grilled ya boiled.',
    },
    {
      _key: 'faq9',
      question: 'Raat ko late khaana khaane se migraine badh sakta hai?',
      answer: 'Haan — ye ek bahut common trigger hai lekin log notice nahi karte.\nRaat 9-10 baje heavy khaana — gut ko raat bhar kaam karna padta hai — neend disrupt hoti hai — aur neend disruption migraine ka independent trigger hai.\nRaat 7-8 baje tak khana khaao — halka — aur sone se pehle gut rest karne do.',
    },
    {
      _key: 'faq10',
      question: 'Migraine mein paani kitna peena chahiye?',
      answer: 'Minimum 8-10 glass — aur isse zyada agar garmi ho ya travel ho.\nDehydration migraine ka ek leading trigger hai — aur log isko seriously nahi lete.\nSirf paani nahi — coconut water, diluted nimbu paani bhi good options hain — packaged drinks nahi.\nEk practical tip: agar aapko pyaas ka ehsaas ho — aap already mildly dehydrated hain. Us point pe migraine ka risk badh chuka hota hai. Regular peete raho.',
    },
  ],

  sources: [
    { _key: 's1', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
    { _key: 's2', name: 'Gazerani P — Migraine and Diet, Nutrients journal', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32503158' },
    { _key: 's3', name: 'Hindiyeh NA et al — Role of Diet and Nutrition in Migraine — Headache journal', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32449944' },
    { _key: 's4', name: 'Namazi N et al — Riboflavin for Migraine Prophylaxis — Int J Vitam Nutr Res', year: '2015', url: 'https://pubmed.ncbi.nlm.nih.gov/26780280' },
    { _key: 's5', name: 'Dolati S et al — Magnesium in Pathophysiology and Migraine Treatment — Biol Trace Elem Res', year: '2019', url: 'https://pubmed.ncbi.nlm.nih.gov/31691193' },
  ],

  quickFacts: {
    mistake: 'Khaana skip karna — especially nashta — aur sochna ki "aaj kuch nahi khaya, dard nahi hua" — yahi pattern agla attack set karta hai',
    mustEat: 'Adrak — fresh ya chai mein — gingerol migraine ki severity aur nausea dono pe kaam karta hai — natural aur safe hai',
    mustAvoid: 'MSG wala koi bhi khaana — instant noodles, Chinese food, packaged snacks — ye single ingredient sabse zyada migraine attacks explain karta hai jinki wajah patients samajh nahi pate',
  },

  doctorNote: 'Mere migraine patients mein ek pattern consistently dikha hai — jo log MSG aur tyramine-rich foods dono ek saath remove karte hain, unka treatment response akele ek chodne wale patients se clearly better hota hai. Aur jinhe subah khaali pet rehne ki aadat thi aur unhone wo band ki — unke attacks ki frequency mein noticeable fark aaya. In dono cheezein ek saath target karein. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Migraine mein kya khayein, kya nahi — complete list: homeopedia.in/diet/migraine',
  shareTextMealPlan: 'Migraine ke liye 4-din ka Indian diet plan: homeopedia.in/diet/migraine',
  shareTextPage: 'Migraine Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/migraine',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding migraine diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Migraine diet chart seeded — homeopedia.in/diet/migraine')
}

seed().catch(console.error)
