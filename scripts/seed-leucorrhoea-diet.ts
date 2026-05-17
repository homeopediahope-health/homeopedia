import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-leucorrhoea',
  _type: 'diet',
  title: 'Leucorrhoea (Shwet Pradar) Diet Chart',
  hindiName: 'Shwet Pradar / Safed Paani',
  slug: { _type: 'slug', current: 'leucorrhoea' },
  relatedDiseaseSlug: 'leucorrhoea',
  category: 'Women',
  metaTitle: 'Leucorrhoea Diet (Shwet Pradar) — Kya Khayein | Homeopedia',
  metaDescription: 'Leucorrhoea (Shwet Pradar) diet chart — green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Leucorrhoea mein vaginal flora ka balance bigadta hai — aur kuch foods is imbalance ko directly badhate hain ya vaginal pH ko distort karte hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Roz subah khali pet 1-2 glass gunguna paani piyo', reason: 'gut aur vaginal microbiome dono ko healthy rakhta hai' },
    { _key: 'eh2', habit: 'Cheeni aur maida wali cheezein ek saath band karo', reason: 'yeast (Candida) in dono pe paalta hai aur discharge badhata hai' },
    { _key: 'eh3', habit: 'Raat ka khaana 7:30 se pehle khaate raho', reason: 'heavy late dinner se gut fermentation hota hai jo vaginal pH affect karta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'blood sugar stable rakhta hai — yeast ka main food (glucose) control hota hai' },
        { _key: 'i2', food: 'Jowar roti', reason: 'low glycemic — gut mein fermentation nahi karta jo leucorrhoea trigger karta hai' },
        { _key: 'i3', food: 'Brown rice (kam matra mein)', reason: 'fiber high — gut bacteria balance karta hai' },
        { _key: 'i4', food: 'Ragi (nachni)', reason: 'iron aur calcium — anemia se connected leucorrhoea mein important hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki (bottle gourd)', reason: 'alkaline nature — vaginal pH ko distort hone se bachata hai' },
        { _key: 'i6', food: 'Karela', reason: 'blood sugar control karta hai — yeast overgrowth ki main condition (high glucose) khatam karta hai' },
        { _key: 'i7', food: 'Palak', reason: 'iron aur folate — leucorrhoea mein hone wali kamzori ko address karta hai' },
        { _key: 'i8', food: 'Turai', reason: 'easy digestion — gut load nahi padta jo indirect vaginal health support karta hai' },
        { _key: 'i9', food: 'Parwal', reason: 'light, anti-inflammatory — sujan wali discharge mein helpful hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Amla', reason: 'Vitamin C high — immune system strong karta hai jo infections se fight karta hai' },
        { _key: 'i11', food: 'Papaya (pakka)', reason: 'papain enzyme — gut clear karta hai aur toxins kam karta hai' },
        { _key: 'i12', food: 'Anar (pomegranate)', reason: 'antioxidant — uterine aur vaginal tissues ki health ke liye' },
        { _key: 'i13', food: 'Seb (apple, bina chhile)', reason: 'pectin fiber — gut bacteria balance support karta hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal (chilke wali)', reason: 'easily digest — gut pe load nahi, protein maintain karta hai' },
        { _key: 'i15', food: 'Masoor dal', reason: 'iron source — leucorrhoea se hone wali weakness ke liye important hai' },
        { _key: 'i16', food: 'Chana (bhuna, dry)', reason: 'fiber + protein — blood sugar spike nahi karta jo yeast grow nahi hone deta' },
        { _key: 'i17', food: 'Ghar ka fresh bana dahi (1 choti katori, subah)', reason: 'live Lactobacillus bacteria hote hain jo vaginal flora ko healthy rakhte hain — sirf ghar ka fresh, market wala nahi' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫚',
      items: [
        { _key: 'i18', food: 'Haldi + kali mirch wala doodh (raat mein)', reason: 'curcumin vaginal inflammation reduce karta hai, kali mirch absorption badhati hai' },
        { _key: 'i19', food: 'Methi dana (bheega hua)', reason: 'phytoestrogens balance karte hain — hormonal leucorrhoea mein helpful' },
        { _key: 'i20', food: 'Jeera ka paani (subah)', reason: 'digestive health aur gut flora balance karta hai' },
        { _key: 'i21', food: 'Adrak chai (without sugar)', reason: 'anti-inflammatory — infection-based discharge mein help karta hai' },
        { _key: 'i22', food: 'Til ka tel ya sarson ka tel (cooking ke liye)', reason: 'trans fat nahi — vaginal tissue health ke liye better' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Anda (boiled, 2)', reason: 'protein high — tissue repair karta hai, leucorrhoea mein hone wali weakness address karta hai' },
    { _key: 'nva2', food: 'Rohu ya Katla machli (grilled/steamed)', reason: 'omega-3 — vaginal inflammation reduce karta hai' },
    { _key: 'nva3', food: 'Chicken (boiled ya grilled, bina skin)', reason: 'lean protein — blood sugar stable rakhta hai jo yeast control karta hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / Talli machli', reason: 'cooking mein trans fat — vaginal inflammation badhata hai' },
    { _key: 'nvav2', food: 'Red meat (mutton, beef)', reason: 'heavy digest, gut mein fermentation — vaginal pH disturb karta hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami)', reason: 'preservatives aur sodium — gut microbiome damage karta hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour) products', reason: 'gut mein yeast ke liye simple carbs milte hain jo Candida overgrowth badhata hai' },
        { _key: 'ri2', food: 'Bread (packaged white)', reason: 'refined, high glycemic — blood sugar spike se yeast grow hoti hai' },
        { _key: 'ri3', food: 'Biscuit, namkeen, crackers', reason: 'maida + refined oil — gut flora disturb karta hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🥛',
      items: [
        { _key: 'ri4', food: 'Packaged / set dahi (market wala)', reason: 'preservatives hain — live cultures mostly khatam hote hain, fayda nahi lekin gut load hoti hai [Ghar ka fresh dahi allowed hai]' },
        { _key: 'ri5', food: 'Paneer (excess mein)', reason: 'heavy, high fat — digestion slow karta hai aur fermentation badhata hai' },
        { _key: 'ri6', food: 'Cream / malai wali cheezein', reason: 'saturated fat — vaginal inflammation se associated hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🍬',
      items: [
        { _key: 'ri7', food: 'Cheeni (refined sugar)', reason: 'yeast ka seedha food source — Candida-based leucorrhoea mein direct trigger' },
        { _key: 'ri8', food: 'Jaggery / Gud (zyada matra)', reason: 'leucorrhoea mein moderate raho — fructose bhi yeast feed karta hai jab zyada ho' },
        { _key: 'ri9', food: 'Bahut zyada teekha khaana', reason: 'pelvic area mein irritation aur inflammation badhata hai' },
        { _key: 'ri10', food: 'Fried snacks (pakode, samosa, chips)', reason: 'trans fat + refined carbs — double trigger' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🥤',
      items: [
        { _key: 'ri11', food: 'Cold drinks / Soda', reason: 'liquid sugar — yeast overgrowth seedha trigger karta hai' },
        { _key: 'ri12', food: 'Packaged juice (even "no sugar added")', reason: 'concentrated fruit sugar — same yeast-feeding effect' },
        { _key: 'ri13', food: 'Alcohol', reason: 'vaginal flora disturb karta hai aur immune response weak karta hai' },
        { _key: 'ri14', food: 'Bahut zyada chai (3+ cups)', reason: 'tannins excess mein iron absorption block karta hai — leucorrhoea mein iron important hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['1-2 glass gunguna paani + nimbu (bina cheeni)', '1 tsp bheegi methi dana + gunguna paani'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with lauki ya palak (no sugar, namak halka)', 'Moong dal ka chilla (2 piece) + pudina chutney'], nonVegOption: '2 ande (boiled) + 1 jowar roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seasonal fruit (seb ya anar)', 'Bhuna chana (1 mutthi)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal + lauki ki sabzi + salad', 'Brown rice (1 katori) + masoor dal + karela sabzi'], nonVegOption: 'Grilled rohu machli + 2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak wali tulsi chai (bina cheeni) + 4-5 akhrot', 'Roasted makhana (1 mutthi)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + turai/palak sabzi + 1 katori moong dal', 'Moong dal khichdi (light) + 1 tsp desi ghee'], nonVegOption: 'Chicken soup (no cream, no maida) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (haldi + kali mirch, bina cheeni)', 'Warm gunguna paani + 1 tsp saunf'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Gunguna paani + nimbu',
      vegNashta: 'Moong dal chilla + chutney',
      vegDopahar: 'Jowar roti + masoor dal + lauki sabzi',
      vegShaam: 'Bhuna chana',
      vegRaat: 'Daliya khichdi + ghee',
      nonVegNashta: '2 boiled ande + 1 jowar roti',
      nonVegDopahar: 'Grilled rohu + 2 roti + turai sabzi',
      nonVegRaat: 'Chicken soup (no cream) + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi dana + paani',
      vegNashta: 'Daliya + palak (no sugar)',
      vegDopahar: 'Brown rice + chana dal + turai sabzi',
      vegShaam: 'Seb ya anar',
      vegRaat: '2 roti + moong dal + karela sabzi',
      nonVegNashta: 'Moong dal chilla + chutney',
      nonVegDopahar: 'Grilled katla machli + brown rice + sabzi',
      nonVegRaat: '2 roti + moong dal + karela sabzi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Gunguna paani + saunf',
      vegNashta: 'Ragi chilla (2) + pudina chutney',
      vegDopahar: '2 bajra roti + arhar dal + parwal sabzi',
      vegShaam: 'Makhana roasted + tulsi chai',
      vegRaat: 'Moong dal khichdi + haldi',
      nonVegNashta: '2 boiled ande + ragi roti',
      nonVegDopahar: 'Boiled chicken (bina skin) + 2 jowar roti + palak sabzi',
      nonVegRaat: 'Moong dal khichdi + haldi',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Jeera paani (gunguna)',
      vegNashta: 'Poha (no onion, light) + amla chutney',
      vegDopahar: 'Jowar roti + masoor dal + palak sabzi + salad',
      vegShaam: 'Bhune akhrot (4-5)',
      vegRaat: '2 roti + lauki sabzi + moong dal',
      nonVegNashta: 'Poha (light) + amla chutney',
      nonVegDopahar: 'Steamed surmai (small piece) + 2 roti + sabzi',
      nonVegRaat: '2 roti + lauki sabzi + moong dal',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Discharge Zyada Ho / Flare-Up Aaye Tab',
      emoji: '🔴',
      tips: [
        'Us din sirf khichdi, daliya, ya moong dal soup khao — gut ka load bilkul kam rakho',
        'Cheeni, maida, dahi — normally allowed bhi ho toh us din avoid karo',
        'Ek kaam zaroor karo: 3-4 glass plain gunguna paani — body ko flush out karna zaroori hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Kuttu ka atta ya singhare ka atta (roti/puri) — low glycemic, safer than sabudana',
        'Sabudana khichdi — zyada mat khao — pure starch hai jo yeast feed karta hai, 1 katori kaafi hai',
        'Vrat mein shakarkandi (sweet potato) prefer karo aloo se — low glycemic, gut friendly',
        'Vrat mein fruit chaat bina cheeni ke — zyada meetha avoid karo',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: Dal tadka + roti + plain raita',
        'Avoid karo: Paneer butter masala, naan/kulcha, koi bhi fried item, meetha',
        'Practical hack: Pani poori, bhel puri, chaat — ye sab avoid karo — inka paani vaginal area pe seedha react karta hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: Bhuna chana, dry amla, plain akhrot, ragi biscuit (bina maida)',
        'Train/hotel mein order karo: Plain khichdi ya dal chawal — yahi safest hai',
      ],
    },
  ],

  proTip: 'Ghar ka fresh set dahi (bina packet wala) roz subah ek choti katori zaroor lo — lekin sirf subah, raat ko nahi. Raat mein dahi heavy hoti hai aur fermentation badhata hai.',
  importantNote: 'Ye chart ek general guide hai — leucorrhoea ke causes alag ho sakte hain (hormonal, fungal, bacterial, ya physiological). Apni condition ke hisaab se apne homoeopath se personalized plan banwayein.',
  homeopathyDiet: 'Jab aap cheeni aur maida band karte hain — yeast overgrowth ruk jaati hai — aur uss waqt homeopathic medicines vaginal flora restore karne mein far better kaam karti hain. Diet sahi = treatment faster.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya leucorrhoea mein dahi khana chahiye ya band karna chahiye?',
      answer: 'Ghar ka fresh bana dahi — haan, allowed hai. Packaged ya market ka dahi — avoid karein.\nGhar ke dahi mein live Lactobacillus bacteria hote hain jo vaginal flora ko healthy rakhte hain.\nMarket ke packaged dahi mein preservatives hoti hain — live cultures mostly khatam ho jaate hain.\nEk choti katori subah ko — raat ko dahi nahi, digestion slow hoti hai raat mein.\nApne doctor se poochhen agar discharge bahut zyada ho — tab dahi bhi temporarily band kar sakte hain.',
    },
    {
      _key: 'faq2',
      question: 'Kya leucorrhoea mein aloo aur chawal khaa sakte hain?',
      answer: 'Aloo — kam matra mein theek hai, lekin fried aloo bilkul nahi.\nChawal — brown rice better hai white rice se — fiber zyada, blood sugar spike kam.\nDono refined carbs hain — zyada khane pe blood sugar badhta hai jo yeast grow karta hai.\nDin mein ek baar, roti ke saath nahi — ya roti ya rice, dono ek time pe nahi.\nSabzi aur dal ke saath balanced rakhein toh okay hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se leucorrhoea mein kitne time mein fark dikhta hai?',
      answer: 'Cheeni aur maida band karne ke 2-3 hafte mein discharge mein fark dikhna shuru hota hai.\nYe time isliye lagta hai kyunki yeast overgrowth dhire dhire khatam hoti hai — ek din mein nahi hogi.\nAgar hormonal cause hai leucorrhoea ka — diet se alag, treatment bhi saath zaroor chalti rahni chahiye.\nDiet akele itna fast nahi kaam karti — homeopathic treatment ke saath diet = better aur faster result.\nApne doctor se 4 hafte baad follow up karein.',
    },
    {
      _key: 'faq4',
      question: 'Leucorrhoea mein chai aur coffee pee sakte hain?',
      answer: '1 cup chai (adrak wali, bina cheeni) — subah le sakte hain, theek hai.\nCoffee — 1 cup okay, lekin zyada nahi — iron absorption block karta hai jo leucorrhoea mein important hai.\nCold drinks, packaged juice, soda — bilkul nahi — yeast ke liye direct fuel hai.\nHerbal chai: tulsi, mulethi, adrak — ye actually helpful hain — anti-inflammatory hain.\nCheeni daalna band karo — sweetener wali bhi nahi.',
    },
    {
      _key: 'faq5',
      question: 'Leucorrhoea mein vrat kar sakte hain?',
      answer: 'Haan — vrat kar sakte hain, lekin sabudana aur zyada meetha avoid karein.\nSabudana khichdi mein pure starch hoti hai — yeast ka food hai.\nKuttu atta ya singhara atta wali roti — better choice hai vrat mein.\nAgar vrat mein fruits khao — cheeni mat milo — plain raho.\nZyada bhukha mat raho — leucorrhoea mein blood sugar swings harmful hain.',
    },
    {
      _key: 'faq6',
      question: 'Leucorrhoea mein zyada meetha khana — kheer, halwa, mithai — kya chalega?',
      answer: 'Nahi — meetha leucorrhoea mein sabse bada trigger hai.\nCheeni aur refined sweets seedha yeast (Candida) ka growth badhate hain.\nFestive season mein ek piece occasional theek hai — daily nahi.\nGur (jaggery) bhi zyada mat lo — natural hai lekin fructose hai — yeast isse bhi grow karta hai.\nAgar meetha bahut craving ho — ek piece fruit lo — chini nahi.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana avoid karna padta hai?',
      answer: 'Haan — kuch specific restrictions hoti hain jo aapke doctor batayenge based on aapki medicine.\nGenerally: coffee aur camphor-based products medicines ke saath avoid karo — ye antidote kar sakte hain.\nStrong smells — kuch doctors avoid karne kehte hain — apne doctor se confirm karo.\nLeuorrhoea ke liye specifically — cheeni aur maida to diet change ke hisaab se bhi band honi chahiye.\nHar patient ki medicine alag hoti hai — isliye blanket rules nahi bana sakte — apne homeopath se poochho.',
    },
    {
      _key: 'faq8',
      question: 'Leucorrhoea mein non-veg khana chahiye ya band karna chahiye?',
      answer: 'Completely band karne ki zaroorat nahi — lekin type aur cooking method matter karta hai.\nAllowed: Boiled/grilled chicken, steamed fish (rohu, katla) — protein ke liye good hai.\nAvoid: Fried non-veg, red meat (mutton), processed meat — ye inflammation badhate hain.\nFish (omega-3 wali) — actually helpful ho sakti hai vaginal inflammation kam karne mein.\nNon-veg toggle karke is page pe non-veg specific plan dekh sakte hain.',
    },
    {
      _key: 'faq9',
      question: 'Leucorrhoea mein nimbu aur khatta khana theek hai?',
      answer: 'Haan — nimbu paani (bina cheeni) theek hai, helpful bhi hai.\nNimbu mein Vitamin C hai jo immune system strong karta hai — infection se fight karta hai.\nImli, zyada khatta — avoid karo — pelvic area irritation ho sakti hai.\nAnar khatta lagta hai lekin allowed hai — Vitamin C + antioxidants dono hain.\nPlain nimbu paani subah — ye ek good habit hai is condition mein.',
    },
    {
      _key: 'faq10',
      question: 'Leucorrhoea mein bahar ka khaana — street food — theek hai kya?',
      answer: 'Street food mein control nahi hota — kya tel use hua, kya pani use hua — avoid karna better hai.\nPani poori, bhel puri, chaat — especially avoid karo — inka paani vaginal area pe directly react karta hai.\nBahar khana pad jaye toh: dal chawal, plain roti sabzi — safe options hain.\nHygiene concern toh hai hi — is condition mein gut infection bhi leucorrhoea trigger karta hai.\nTravel ya function mein ek din ka bahar khaana chalta hai — daily nahi.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Mizgier M et al — The role of diet and probiotics in prevention and treatment of bacterial vaginosis and vulvovaginal candidiasis in adolescent girls and non-pregnant women — Ginekologia Polska — 2020', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32779162' },
    { _key: 's2', name: 'Rosen EM et al — Is prenatal diet associated with the composition of the vaginal microbiome? — Paediatric and Perinatal Epidemiology — 2021', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/34841560' },
    { _key: 's3', name: 'Laue C et al — Effect of a yoghurt drink containing Lactobacillus strains on bacterial vaginosis in women — Beneficial Microbes — 2017', year: '2017', url: 'https://pubmed.ncbi.nlm.nih.gov/29065710' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Packaged dahi khana "probiotic ke liye" — lekin market ka dahi leucorrhoea mein help nahi karta, sirf ghar ka fresh dahi kaam aata hai',
    mustEat: 'Bheegi methi dana (subah khali pet) — phytoestrogens se hormonal leucorrhoea mein naturally balance hota hai',
    mustAvoid: 'Cheeni (refined sugar) — yeast ka seedha fuel — leucorrhoea mein number one trigger',
  },

  doctorNote: 'Maine notice kiya hai ki mere leucorrhoea patients mein jo log cheeni aur maida dono saath band karte hain — sirf ek nahi — unka treatment response clearly better hota hai. Akele ek band karne pe discharge itna kam nahi hota — dono ek saath khatam karne pe fark seedha dikhta hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Leucorrhoea mein kya khayein, kya nahi — complete list: homeopedia.in/diet/leucorrhoea',
  shareTextMealPlan: 'Leucorrhoea ke liye 4-din ka Indian diet plan: homeopedia.in/diet/leucorrhoea',
  shareTextPage: 'Leucorrhoea Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/leucorrhoea',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Leucorrhoea diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Leucorrhoea diet chart seeded — homeopedia.in/diet/leucorrhoea')
}

seed().catch(console.error)
