import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-insomnia',
  _type: 'diet',
  title: 'Insomnia (Neend Na Aana) Diet Chart',
  hindiName: 'Neend Na Aana / Anidra',
  slug: { _type: 'slug', current: 'insomnia' },
  relatedDiseaseSlug: 'insomnia',
  category: 'Mental',
  metaTitle: 'Insomnia (Anidra) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Insomnia (neend na aana) diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Insomnia mein kuch foods brain mein serotonin aur melatonin production directly affect karte hain — jo neend aane ki natural process ko disrupt karta hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Raat ka khaana 7-7:30 baje tak khatam karo', reason: 'late heavy meal cortisol badhata hai jo neend todta hai' },
    { _key: 'eh2', habit: 'Sone se 2 ghante pehle kuch light warm lena', reason: 'melatonin suppress hona rokta hai' },
    { _key: 'eh3', habit: 'Din mein ek fixed time pe khao', reason: 'irregular meal timing circadian rhythm bigadata hai jo insomnia ka core trigger hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (oats)', reason: 'complex carb jo tryptophan brain mein absorb hone mein help karta hai — neend ki building block' },
        { _key: 'i2', food: 'Brown rice', reason: 'moderate glycemic index — tryptophan ki brain entry ke liye zaruri insulin spike deta hai' },
        { _key: 'i3', food: 'Ragi (nachni)', reason: 'tryptophan aur magnesium dono hote hain — insomnia mein dono nutrients critical hain' },
        { _key: 'i4', food: 'Jowar roti', reason: 'blood sugar stable rakhti hai jo raat ke uthne ko kam karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'magnesium se bharpoor — brain ke GABA receptors activate karta hai jo relaxation ke liye zaroori hai' },
        { _key: 'i6', food: 'Lauki', reason: 'cooling vegetable — body heat kam karti hai jo raat neend mein disturb karta tha' },
        { _key: 'i7', food: 'Methi patta (fresh)', reason: 'adaptogenic — cortisol level normalize karta hai jo stress-induced insomnia mein' },
        { _key: 'i8', food: 'Gajar', reason: 'beta-carotene rich — melatonin production ke liye antioxidant support deta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i9', food: 'Kela (pakka, fresh)', reason: 'tryptophan aur magnesium dono — ek saath kaam karte hain serotonin banana ke liye' },
        { _key: 'i10', food: 'Seb (apple)', reason: 'quercetin hota hai jo brain inflammation kam karta hai — sleep quality improvement se linked' },
        { _key: 'i11', food: 'Papaya', reason: 'serotoninergic compounds hote hain — digestion bhi theek karta hai jo raat disturb na kare' },
        { _key: 'i12', food: 'Amla', reason: 'Vitamin C cortisol oxidative damage se bachata hai — stress-related insomnia mein helpful' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i13', food: 'Moong dal', reason: 'easily digest hoti hai — raat ko heavy digestion se uthna nahi padta — light but tryptophan rich' },
        { _key: 'i14', food: 'Masoor dal', reason: 'iron se bhari — iron deficiency insomnia ka underrated trigger hai especially women mein' },
        { _key: 'i15', food: 'Chane ka sattu', reason: 'slow-release protein hai — raat ko blood sugar stable rakhta hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i16', food: 'Ashwagandha wali warm doodh', reason: 'cortisol kam karta hai aur sleep onset time reduce karta hai — clinically supported' },
        { _key: 'i17', food: 'Tulsi chai (no caffeine)', reason: 'adaptogenic herb — stress response normalize karta hai jo neend mein rukawat banata hai' },
        { _key: 'i18', food: 'Haldi doodh + kali mirch', reason: 'curcumin brain inflammation reduce karta hai — kali mirch absorption ke liye zaroori hai' },
        { _key: 'i19', food: 'Jeera water (subah)', reason: 'gut-brain axis theek karta hai — gut health aur sleep quality directly connected hain' },
        { _key: 'i20', food: 'Desi ghee (thodi matra)', reason: 'healthy fat jo nervous system calm karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Anda (boiled, 1-2)', reason: 'tryptophan ka highest bioavailable source — serotonin production ke liye sabse efficient' },
    { _key: 'nva2', food: 'Chicken (boiled/grilled — sirf lunch mein)', reason: 'lean protein tryptophan ke saath — raat mein heavy digestion hoti hai isliye lunch mein recommended' },
    { _key: 'nva3', food: 'Rohu / Katla machli', reason: 'omega-3 fatty acids brain ke serotonin-melatonin pathway ko support karte hain' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / mutton', reason: 'trans fat badhta hai jo brain ki serotonin signaling disrupt karta hai' },
    { _key: 'nvav2', food: 'Processed meat (sausage, salami)', reason: 'tyramine high hoti hai — direct sleep disruptor hai' },
    { _key: 'nvav3', food: 'Raat ka heavy non-veg khaana', reason: 'digestion 3-4 ghante leti hai — sleep cycle seedha disturb hoti hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida products (bread, naan, biscuit)', reason: 'blood sugar fast spike karta hai phir crash — raat ko jagat rehna is cause se hota hai' },
        { _key: 'ri2', food: 'Packaged snacks', reason: 'refined carbs + preservatives cortisol ko raat mein bhi elevated rakhte hain' },
        { _key: 'ri3', food: 'Instant noodles', reason: 'MSG hota hai jo nerve stimulation badhata hai — sone nahi deta' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged dahi (market wala)', reason: 'tyramine level high hoti hai — brain mein norepinephrine release karta hai jo alertness badhata hai (ghar ka fresh dahi allowed hai)' },
        { _key: 'ri5', food: 'Paneer raat ko', reason: 'heavy protein + fat — 3-4 ghante digestion leti hai — sleep onset delay ho jaata hai' },
        { _key: 'ri6', food: 'Malai / cream', reason: 'heavy fat — vagus nerve stimulation badhata hai — raat mein uthna pad sakta hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Zyada mirch wala khaana (raat mein)', reason: 'body temperature badhata hai — thermoregulation insomnia ka direct trigger hai' },
        { _key: 'ri8', food: 'Mithai, gulab jamun (raat mein)', reason: 'blood sugar spike hota hai — 2-3 ghante baad crash se neend toot jaati hai' },
        { _key: 'ri9', food: 'Fried khaana (raat mein)', reason: 'bile acid production badhti hai — acid reflux se uthna — physical trigger hai insomnia ka' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Chai / coffee (dopahar 2 baje ke baad)', reason: 'caffeine half-life 5-6 ghante hoti hai — raat 10 baje bhi brain mein active rehti hai' },
        { _key: 'ri11', food: 'Cold drinks / soda', reason: 'caffeine + sugar dono — double sleep disruptor' },
        { _key: 'ri12', food: 'Alcohol', reason: 'pehle neend aati hai phir REM sleep disturb hoti hai — quality bilkul nahi hoti' },
        { _key: 'ri13', food: 'Energy drinks', reason: 'stimulant compounds hote hain jo nervous system 6-8 ghante active rakhte hain' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + adrak ka tukda — digestion start karo, cortisol spike absorb karo', 'Bheega badam 5-6 — magnesium + healthy fat nervous system ke liye subah ka base'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with palak/gajar + 1 kela', 'Moong dal chilla (2 pieces) + ghar ka dahi (1 small katori)'], nonVegOption: '2 boiled ande + 2 jowar roti + chutney' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya papaya (seasonal)', 'Bhuna chana handful — slow energy release'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 roti (jowar/bajra) + moong dal + palak sabzi + salad', 'Brown rice + masoor dal + lauki ki sabzi'], nonVegOption: 'Grilled rohu/katla + 2 roti + dal + salad' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Tulsi chai (no sugar/low sugar) + akhrot 3-4', 'Makhana roasted (1 handful) — magnesium snack'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-7:30 PM', slotEmoji: '🌙', vegOptions: ['2 roti + palak ya lauki sabzi + moong dal', 'Khichdi (moong dal + rice) + ghee 1 tsp'], nonVegOption: 'Non-veg raat mein avoid karein — chicken/fish sirf lunch mein' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9-9:30 PM', slotEmoji: '😴', vegOptions: ['Ashwagandha wali warm doodh (ghar ka doodh)', 'Haldi doodh + kali mirch 1 pinch (curcumin absorption ke liye)'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Lukewarm paani + bheega badam 5',
      vegNashta: 'Daliya + gajar + kela',
      vegDopahar: '2 jowar roti + masoor dal + palak sabzi',
      vegShaam: 'Tulsi chai + akhrot 3',
      vegRaat: 'Khichdi (moong) + ghee + lauki sabzi',
      nonVegNashta: '2 boiled ande + 1 roti + chutney',
      nonVegDopahar: 'Grilled rohu + 2 roti + dal + salad',
      nonVegRaat: 'Khichdi (moong) + ghee (veg hi raat ko)',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Adrak paani + amla (1 piece dry)',
      vegNashta: 'Moong dal chilla (2) + ghar ka dahi',
      vegDopahar: 'Brown rice + arhar dal + turai sabzi',
      vegShaam: 'Makhana roasted + seb 1',
      vegRaat: '2 roti + chana dal + methi sabzi',
      nonVegNashta: 'Egg bhurji (no extra oil) + 2 roti',
      nonVegDopahar: 'Boiled chicken grilled + jowar roti + sabzi',
      nonVegRaat: '2 roti + chana dal (veg hi raat ko)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Jeera water + bheega akhrot 2',
      vegNashta: 'Ragi daliya + kela + 1 tsp ghee',
      vegDopahar: '2 bajra roti + moong dal + gajar-matar sabzi',
      vegShaam: 'Tulsi chai + bhuna chana handful',
      vegRaat: 'Khichdi (masoor) + palak sabzi',
      nonVegNashta: '2 boiled ande + daliya (small portion)',
      nonVegDopahar: 'Rohu curry (light, no cream) + brown rice',
      nonVegRaat: 'Khichdi (masoor) + palak sabzi (veg hi)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Lukewarm nimbu paani (no sugar) + badam 5',
      vegNashta: 'Poha (palak + gajar wala, no zyada onion fry)',
      vegDopahar: '2 jowar roti + masoor dal + lauki sabzi + salad',
      vegShaam: 'Papaya 1 bowl',
      vegRaat: '2 roti + palak sabzi + moong dal',
      nonVegNashta: 'Anda chilla (1 egg + besan mix) + dahi',
      nonVegDopahar: 'Grilled katla + 2 roti + palak sabzi',
      nonVegRaat: '2 roti + moong dal (veg hi raat ko)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Neend Bilkul Na Aaye Us Din',
      emoji: '😣',
      tips: [
        'Sirf khichdi ya daliya khao us din — gut ko koi extra kaam na do — gut-brain axis disturb hua hai',
        'Chai, coffee, koi bhi stimulant bilkul band us din — normally ek cup allowed tha — aaj nahi',
        'Ashwagandha warm doodh teen ghante pehle piyo sone se — cortisol normalize hone mein time lagta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Singhare ka atta — tryptophan se bhara hai — vrat mein best sleep-supporting food hai',
        'Sabudana khichdi (light, kam tel) — safe option hai — blood sugar crash se bachata hai',
        'Vrat mein chai zyada mat piyo — khaana nahi hota toh caffeine effect aur zyada hoti hai — neend aur kharab hogi',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal fry + roti order karo — safe combination — processed ya maida items se bachna',
        '"No MSG, less spice" bol do — most dhabas accommodate karte hain — spice = body heat = neend kharab',
        'Cold drinks bilkul nahi — nimbu paani (bina soda) better option — dhabe pe milta hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, akhrot, ragi cookies (ghar ki), dry amla — ye sab travel-safe sleep-supporting foods hain',
        'Train/hotel mein: plain dal rice order karo — heavy curry ya fry items avoid karo',
      ],
    },
  ],

  proTip: 'Ashwagandha doodh sone se theek 90 minute pehle piyo — bahut pehle ya bahut baad mein lene se cortisol impact kam ho jaata hai. Timing matter karti hai, sirf lena nahi.',
  importantNote: 'Ye chart ek general guide hai — har insomnia patient ki wajah alag hoti hai. Apne homoeopath se personalized plan banwayein kyunki kuch cases mein anxiety, pain ya hormonal issue underlying cause hota hai.',
  homeopathyDiet: 'Jab aap cortisol-spiking foods avoid karte ho — homeopathic medicines nervous system pe zyada effectively kaam karti hain — neend ka quality aur quantity dono better hote hain.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Insomnia mein kela khana chahiye ya nahi?',
      answer: 'Haan — fresh, pakka kela insomnia mein allowed hai.\nKele mein tryptophan aur magnesium dono hote hain jo serotonin banana mein help karte hain.\nLekin overripe (bahut zyada pakka, dhabbe wala) kela avoid karein — tyramine level badh jaata hai jo brain ko alert karta hai.\nSone se 2 ghante pehle ek kela khana theek hai — sone se bilkul pehle nahi.',
    },
    {
      _key: 'faq2',
      question: 'Insomnia mein dahi khana theek hai kya?',
      answer: 'Depend karta hai — kaunsi dahi.\nGhar ka fresh bana dahi (1 small katori) — allowed hai — fresh mein tyramine level low hota hai.\nPackaged / market wala set dahi — avoid karein — tyramine high hoti hai jo brain mein norepinephrine release karta hai — neend nahi aati.\nIsliye same food hai lekin variety se fark padta hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se insomnia mein kitne din mein fark dikhta hai?',
      answer: 'Honest answer: 2-4 hafte consistent rehna padta hai.\nCortisol-spiking foods hata do aur tryptophan-rich foods add karo — pehle hafte hi neend ki quality thodi better hoti hai.\nLekin sleep onset time (kitni der mein neend aati hai) mein proper fark 3-4 hafte mein aata hai.\nAgar underlying anxiety ya hormonal issue hai — akele diet se complete fix nahi hoga — doctor ki zaroorat hai.',
    },
    {
      _key: 'faq4',
      question: 'Insomnia mein chai aur coffee bilkul band karni chahiye?',
      answer: 'Completely band karna zaruri nahi — timing matter karta hai.\n1 cup subah ya late morning (11 AM tak) — theek hai.\nDopahar 2 baje ke baad bilkul nahi — caffeine ka half-life 5-6 ghante hota hai — raat 10 baje bhi brain mein active rehti hai.\nGreen tea — black tea se better option hai insomnia mein — L-theanine hoti hai jo calming hoti hai.',
    },
    {
      _key: 'faq5',
      question: 'Insomnia mein vrat kar sakte hain?',
      answer: 'Kar sakte hain — lekin careful rahna.\nVrat mein singhare ka atta, sabudana, fruits — safe options.\nLamba fasting (16+ ghante) insomnia mein avoid karein — blood sugar crash cortisol badhata hai jo raat jagat rakhta hai.\nAgar vrat mein sirf chai pi rahe ho aur kuch nahi — neend aur kharab hogi — kuch na kuch light lena chahiye.',
    },
    {
      _key: 'faq6',
      question: 'Insomnia mein raat ko chawal khana sahi hai kya?',
      answer: 'Haan — lekin white rice nahi, brown rice ya khichdi better.\nWhite rice ka glycemic index high hai — blood sugar spike hota hai phir raat ko crash — ye neend todata hai.\nBrown rice ya moong dal khichdi — slow release hai — raat mein better choice hai.\nPortion bhi matter karta hai — 1 bowl se zyada raat ko nahi — heavy digestion sleep disrupt karta hai.',
    },
    {
      _key: 'faq7',
      question: 'Insomnia mein late night snack karna chahiye ya nahi?',
      answer: 'Generally avoid karo — lekin agar bhook se neend nahi aa rahi to sone se 90 min pehle sirf ye:\nEk kela ya 4-5 akhrot ya warm doodh — ye sab tryptophan/magnesium se bhari cheezein hain.\nChips, biscuit, mithai — bilkul nahi — ye blood sugar game shuru karte hain jo raat bhar jagata hai.',
    },
    {
      _key: 'faq8',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai kya?',
      answer: 'Ye individual medicine pe depend karta hai — blanket rule nahi.\nCoffee aur kuch strongly aromatic items — kuch specific homoeopathic medicines ke saath avoid karne ki salah di jaati hai — apne doctor se poochho which medicines.\nGenerally: khaane ke 30 minute pehle ya baad mein medicine lena — aur us waqt koi strong smell wali cheez nahi.\nIs diet page ki guidelines medicines ke saath conflict nahi karti — sab safe hain.',
    },
    {
      _key: 'faq9',
      question: 'Insomnia mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karna zaruri nahi — lekin kab aur kya — ye matter karta hai.\nBoiled anda, grilled fish (rohu, katla) — allowed hain — tryptophan ke best sources hain.\nRaat mein heavy non-veg (chicken curry, mutton) — avoid — 3-4 ghante digestion mein jaata hai — neend nahi aati.\nChicken/fish sirf lunch mein lena — raat ko veg options better hain insomnia mein.',
    },
    {
      _key: 'faq10',
      question: 'Alcohol se neend aati hai — toh kya thodi chal sakti hai?',
      answer: 'Ye sabse common galat dharna hai insomnia ke baare mein.\nAlcohol pehle neend laata hai — lekin REM sleep (deep quality sleep) bilkul disturb karti hai.\nNateeja: 3-4 ghante baad uthna, phir neend nahi — cycle aur kharab hoti hai.\nInsomnia mein alcohol seedha trigger hai — chahe thodi bhi ho — avoid karna chahiye.',
    },
    {
      _key: 'faq11',
      question: 'Insomnia mein akhrot khaana sahi hai?',
      answer: 'Haan — akhrot insomnia ke liye specifically helpful hai.\nAkhrot mein melatonin naturally hoti hai — ye ek rare food source hai melatonin ka.\nOmega-3 bhi hai jo brain inflammation kam karta hai.\n3-4 akhrot shaam ko ya sone se 2 ghante pehle — ideal timing hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Zhao M et al — The Effects of Dietary Nutrition on Sleep and Sleep Disorders — Mediators of Inflammation', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32684833' },
    { _key: 's2', name: 'Godos J et al — Mediterranean Diet and Sleep Features: A Systematic Review — Nutrients', year: '2024', url: 'https://pubmed.ncbi.nlm.nih.gov/38257175' },
    { _key: 's3', name: 'Vlahoyiannis A et al — Effects of Carbohydrates on Sleep: Systematic Review — Nutrients', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/33919698' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Raat ko chai ya coffee peena — "ek cup se kya hoga" — hota hai, kyunki caffeine 5-6 ghante tak active rehti hai',
    mustEat: 'Akhrot — melatonin ka natural food source hai — raat ko neend lane mein directly help karta hai',
    mustAvoid: 'Raat ko mithai ya meetha — blood sugar spike-crash cycle shuru ho jaata hai jo raat bhar jagata rehta hai',
  },

  doctorNote: 'Maine notice kiya hai ki jo insomnia patients raat ka khaana 7:30 baje tak khatam kar dete hain aur sone se pehle ek warm ashwagandha doodh lete hain — unka homeopathic treatment response significantly better hota hai un patients ke comparison mein jo 9-10 baje khate hain. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Insomnia mein kya khayein, kya nahi — complete list: homeopedia.in/diet/insomnia',
  shareTextMealPlan: 'Insomnia ke liye 4-din ka Indian diet plan: homeopedia.in/diet/insomnia',
  shareTextPage: 'Insomnia Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/insomnia',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Insomnia diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Insomnia diet chart seeded — homeopedia.in/diet/insomnia')
}

seed().catch(console.error)
