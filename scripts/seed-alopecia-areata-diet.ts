import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-alopecia-areata',
  _type: 'diet',
  title: 'Alopecia Areata (Ganjapan) Diet Chart',
  hindiName: 'Ganjapan / Tole wali Guddi',
  slug: { _type: 'slug', current: 'alopecia-areata' },
  relatedDiseaseSlug: 'alopecia-areata',
  category: 'Skin',
  metaTitle: 'Alopecia Areata (Ganjapan) Diet – Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Alopecia Areata (Ganjapan) diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Alopecia Areata ek autoimmune condition hai jisme immune system khud baalon ki jadon (hair follicles) pe attack karta hai – aur kuch khaane iss immune overreaction ko directly trigger ya calm kar sakte hain.\n\nNeeche complete guide hai – green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah khaali pet 1 glass gunguna paani piyo', reason: 'gut lining theek rehti hai jo immune response ko regulate karti hai' },
    { _key: 'eh2', habit: 'Roz ek zinc-rich ya iron-rich food zaroor lo', reason: 'baal ke follicle ko yahi dono nutrients directly feed karte hain' },
    { _key: 'eh3', habit: 'Raat ka khaana 7:30 baje tak kha lo', reason: 'late khaana gut inflammation badhata hai jo autoimmune flare-up ko trigger karta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (oats/broken wheat)', reason: 'Selenium aur zinc dono milte hain – follicle health ke liye directly zaruri' },
        { _key: 'i2', food: 'Brown rice', reason: 'Gut-friendly complex carb – gut inflammation kam hoti hai jo AA mein trigger hai' },
        { _key: 'i3', food: 'Bajra roti', reason: 'Iron aur zinc rich – baal ke jadon ko nourish karta hai' },
        { _key: 'i4', food: 'Jowar roti', reason: 'Gluten-free option – AA mein kuch patients mein gluten sensitivity hoti hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'Iron aur folate dono – baal ke cells ke liye oxygen supply badhata hai' },
        { _key: 'i6', food: 'Methi (fenugreek leaves/seeds)', reason: 'Zinc aur protein dono – hair follicle repair mein kaam karta hai' },
        { _key: 'i7', food: 'Lauki', reason: 'Gut ki sujan kam karta hai jo immune overreaction ka ek source hoti hai' },
        { _key: 'i8', food: 'Gajar', reason: 'Beta-carotene – vitamin A – scalp ki sebum production sahi rakhta hai' },
        { _key: 'i9', food: 'Shimla mirch (lal)', reason: 'Vitamin C sabse zyada – iron absorption ke liye zaruri collagen production karta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Amla (fresh ya dry)', reason: 'Vitamin C mein sabse rich – collagen synthesis ke liye jo follicle ko structure deta hai' },
        { _key: 'i11', food: 'Seb (chila ke saath)', reason: 'Quercetin – scalp pe inflammatory cytokines kam karta hai' },
        { _key: 'i12', food: 'Papaya', reason: 'Vitamin A aur C dono – scalp ki dead skin hata ke follicle block nahi hone deta' },
        { _key: 'i13', food: 'Anaar', reason: 'Punicalagins – oxidative stress kam karta hai jo AA mein hair loss badhata hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal (chhilke wali)', reason: 'Plant protein + zinc – follicle cells ke liye building block' },
        { _key: 'i15', food: 'Masoor dal', reason: 'Iron ka achha vegetarian source – baalon mein oxygen reach karne deti hai' },
        { _key: 'i16', food: 'Kala chana (boiled)', reason: 'Biotin aur zinc dono – ye dono directly follicle ke liye essential nutrients hain' },
        { _key: 'i17', food: 'Kaddu ke beej (pumpkin seeds)', reason: 'Zinc se bharpoor – AA patients mein zinc deficiency common hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i18', food: 'Haldi + kali mirch wali chai (kadha)', reason: 'Curcumin immune overreaction dampen karta hai – kali mirch absorption 20x badhati hai' },
        { _key: 'i19', food: 'Adrak ka paani ya chai', reason: 'Gingerol scalp inflammation kam karta hai' },
        { _key: 'i20', food: 'Sarson ka tel', reason: 'Omega-3 – scalp pe immune calm karta hai (andar se bhi, bahar massage ke liye bhi)' },
        { _key: 'i21', food: 'Til (sesame seeds)', reason: 'Zinc + copper dono – baalon ke natural pigment (melanin) ke liye copper zaruri hai' },
        { _key: 'i22', food: 'Jeera + dhania ka paani (subah)', reason: 'Gut bacteria balance – gut-immune axis ke liye' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: '2 ande (boiled)', reason: 'Biotin aur protein dono – follicle cells ke liye sabse direct nutrition' },
    { _key: 'nva2', food: 'Surmai ya rohu fish (grilled/steamed)', reason: 'Omega-3 fatty acids – scalp pe immune inflammation kam karta hai' },
    { _key: 'nva3', food: 'Chicken (boiled/grilled, bina skin)', reason: 'Lean protein + zinc – follicle ke liye amino acids provide karta hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Mutton / red meat', reason: 'Arachidonic acid zyada – body mein inflammatory prostaglandins badhata hai jo AA ko trigger karta hai' },
    { _key: 'nvav2', food: 'Fried fish ya fried chicken', reason: 'Trans fat – scalp pe oxidative stress badhata hai aur immune dysfunction worsen karta hai' },
    { _key: 'nvav3', food: 'Processed chicken (sausage, salami, cold cuts)', reason: 'Preservatives + sodium – gut microbiome disturb karta hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, biscuit, noodles)', reason: 'Gut mein leaky gut badhata hai – AA mein ye ek main immune trigger hai' },
        { _key: 'ri2', food: 'Packaged namkeen / chips', reason: 'Refined oil + salt + additives – gut barrier damage karte hain' },
        { _key: 'ri3', food: 'White sugar-based sweets (mithai, cake)', reason: 'Blood sugar spike se immune dysregulation hota hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged / set dahi (market wala)', reason: 'A1 casein protein – kuch AA patients mein dairy antibody response trigger karta hai [Ghar ka fresh dahi 1 katori allowed hai]' },
        { _key: 'ri5', food: 'Full cream milk (zyada matra)', reason: 'IGF-1 level badhata hai jo immune inflammation worsen karta hai' },
        { _key: 'ri6', food: 'Paneer (excess)', reason: 'Heavy dairy – jab inflammation zyada ho tab avoid karo' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Bahut teekha khaana', reason: 'Gut lining irritate karta hai – intestinal permeability badhati hai jo immune trigger hai' },
        { _key: 'ri8', food: 'Refined vegetable oil (sunflower, soybean)', reason: 'Omega-6 ka imbalance – scalp pe chronic inflammation badhata hai' },
        { _key: 'ri9', food: 'Bahar ka fried khaana (pakoda, samosa, puri)', reason: 'Trans fat + maida combo – dono milke gut-immune axis bigadte hain' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Chai (3+ cups daily)', reason: 'Tannins iron absorption block karte hain – AA patients mein iron deficiency bahut common hai' },
        { _key: 'ri11', food: 'Cold drinks / soda', reason: 'Phosphoric acid – mineral absorption block karta hai aur gut microbiome damage karta hai' },
        { _key: 'ri12', food: 'Alcohol', reason: 'Liver pe load badhata hai – liver gut health maintain karta hai – dono connected hain AA mein' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Gunguna paani + 1 chutki haldi + nimbu – gut lining protect karta hai', 'Bheegi methi seeds (1 tsp raat ko bhigo ke) – zinc + gut probiotic effect'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Moong dal ka chilla (2 piece) + hari chutney – protein + zinc ek saath', 'Daliya vegetables ke saath – selenium + fiber dono – immune ke liye'], nonVegOption: '2 boiled ande + 1 roti + hari chutney – biotin + protein direct follicle nutrition' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seasonal fruit – amla/seb/papaya mein se koi ek', 'Bhuna kala chana (1 handful) – zinc ka convenient snack'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 bajra roti + masoor dal + salad (gajar, shimla mirch) – iron + zinc combo', 'Brown rice + moong chhilka dal + lauki ki sabzi – gut-friendly full meal'], nonVegOption: '2 jowar roti + grilled surmai fish + sabzi – omega-3 + protein' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Haldi-adrak wali kadha (1 cup) + kaddu ke beej (1 tsp)', 'Til laddoo (ghar ka, without refined sugar) – zinc + copper dono'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-7:30 PM', slotEmoji: '🌙', vegOptions: ['2 roti + palak ki sabzi + ghar ka dahi (1 small katori) – iron + probiotic', 'Khichdi (moong dal + brown rice + desi ghee) – light, gut-friendly'], nonVegOption: '1 roti + chicken soup (boiled, no cream) + sabzi – protein + zinc raat ko' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (ghar ka, full cream nahi) – curcumin raat ko immune modulate karta hai', 'Saunf ka warm paani – gut gas nahi hone deta jo raat mein inflammation trigger karta hai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Gunguna paani + nimbu',
      vegNashta: 'Moong dal chilla + hari chutney',
      vegDopahar: '2 bajra roti + masoor dal + gajar sabzi',
      vegShaam: 'Kadha + kala chana',
      vegRaat: 'Palak khichdi + ghar ka dahi',
      nonVegNashta: '2 boiled ande + 1 roti + hari chutney',
      nonVegDopahar: '2 bajra roti + grilled surmai + gajar sabzi',
      nonVegRaat: 'Chicken soup (boiled) + 1 roti + salad',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi seeds',
      vegNashta: 'Daliya with shimla mirch + tamatar',
      vegDopahar: 'Brown rice + moong chhilka dal + lauki',
      vegShaam: 'Seb + til seeds',
      vegRaat: '2 jowar roti + chana dal + salad',
      nonVegNashta: 'Daliya with vegetables',
      nonVegDopahar: 'Brown rice + grilled rohu fish + lauki',
      nonVegRaat: '2 jowar roti + chana dal + salad',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Haldi-nimbu gunguna paani',
      vegNashta: 'Poha (no peanut) + amla chutney',
      vegDopahar: '2 roti + arhar dal + methi ki sabzi',
      vegShaam: 'Kadha + kaddu ke beej',
      vegRaat: 'Khichdi (moong + rice) + desi ghee',
      nonVegNashta: '2 boiled ande + daliya (light)',
      nonVegDopahar: '2 roti + chicken (boiled) + methi ki sabzi',
      nonVegRaat: 'Khichdi (moong + rice) + desi ghee',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Jeera-dhania ka paani',
      vegNashta: 'Bajra cheela + pudina chutney',
      vegDopahar: 'Brown rice + masoor dal + palak sabzi',
      vegShaam: 'Papaya + bhuna chana',
      vegRaat: '2 roti + moong chhilka dal + ghar ka dahi',
      nonVegNashta: 'Bajra cheela + pudina chutney',
      nonVegDopahar: 'Brown rice + grilled surmai + palak sabzi',
      nonVegRaat: '2 roti + chicken soup (thin, no cream) + dahi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Zyada Baal Girne Ka Phase',
      emoji: '😣',
      tips: [
        'Us hafte sirf moong dal khichdi, daliya, steamed sabziyan khao – gut pe zero load rakho',
        'Dairy, maida, fried sab temporarily band karo – chahe normally allowed ho',
        'Roz subah 1 tsp amla powder + gunguna paani lo – vitamin C se collagen production support hoti hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (no fried) – zinc aur carb dono milte hain – AA mein theek hai',
        'Singhada (water chestnut) atta ka chilla ya roti – iron aur zinc ka vrat-friendly source',
        'Vrat mein aloo zyada mat khao – high glycemic – blood sugar spike immune dysregulation karta hai',
        'Agar AA ka flare chal raha ho – ekadashi vrat safe hai lekin nirjala fast avoid karo – dehydration se scalp inflammation badhti hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka (bina excess ghee) ya dal makhani (1 small bowl) order karo – protein + iron milti hai',
        'Roti (no butter, no maida naan) + sabzi – reliable option dhaba mein bhi',
        'Fried items – pakoda, puri, bhatura – poori tarah avoid karo – bahar ka tel trans fat wala hota hai',
        'Hack: Pehle 1 glass plain paani piyo – bahar khaane ke glycemic impact kam hoti hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana + til ke beej + dry amla – teen mein se koi bhi ek handful – portable zinc + vitamin C',
        'Train/bus mein: boiled ande (agar non-veg) ya dry roasted makhana – dono gut-friendly hain',
        'Hotel mein: plain dal + roti ya boiled rice + dahi order karo – simplest, safest option',
      ],
    },
  ],

  proTip: 'Khaana khane ke turant baad chai mat piyo – khaane ke 45-60 minute baad piyo. Chai ka tannin iron absorption block karta hai, aur AA patients mein iron deficiency baalon ke girne ka ek direct reason hai. Ye ek chhota sa change hai lekin iron status pe clearly fark padta hai.',
  importantNote: 'Ye chart ek general guide hai – Alopecia Areata ki severity, triggers, aur nutritional needs har patient mein alag hoti hain. Apni exact condition ke hisaab se apne homoeopath se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Jab diet sahi hoti hai – especially zinc, iron aur vitamin C intake regular ho – toh homeopathic medicines follicle-level inflammation pe faster aur deeper kaam karti hain. Dono ek saath chalao – ek doosre ko replace nahi karte.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Alopecia Areata mein dahi kha sakte hain?',
      answer: 'Haan – ghar ka fresh bana dahi (1 small katori) allowed hai.\nPackaged ya set dahi (market wala) avoid karo.\nFresh dahi mein A1 casein load kam hota hai – aur probiotic bacteria gut health ke liye helpful hai.\nGut health aur immune system directly linked hain AA mein.\nMarket wala dahi mein preservatives aur heavy casein hoti hai jo kuch patients mein immune trigger banta hai.',
    },
    {
      _key: 'faq2',
      question: 'Alopecia Areata mein anda (egg) kha sakte hain?',
      answer: 'Haan – boiled ande ek bahut acha option hain AA mein.\nAnde mein biotin, zinc aur complete protein – teeno follicle ke liye directly zaruri hain.\nFried anda (oil mein) avoid karo – cooking method matter karta hai.\nAgar koi allergy nahi hai toh roz 1-2 boiled ande lene se baalon ki health pe positive fark aata hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se Alopecia Areata mein kitne din mein fark dikhta hai?',
      answer: 'Realistic answer: 3-4 mahine continuous diet changes se clearly fark dikhna shuru hota hai.\nBaal ka ek growth cycle hi 2-3 mahine ka hota hai – isliye jaldi result expect mat karo.\nPehle mahine mein girna kam ho sakta hai – ye pehla positive sign hai.\nDiet akele complete treatment nahi hai – homeopathic medicines ke saath combo mein asar zyada hota hai.\nApne doctor se 3 mahine baad progress review karwao.',
    },
    {
      _key: 'faq4',
      question: 'Alopecia Areata mein chai aur coffee allowed hai?',
      answer: '1 cup subah wali adrak chai – allowed hai.\n3+ cups chai daily – avoid karo – tannin iron absorption 50-60% tak block kar deta hai.\nCoffee – 1 cup allowed hai – lekin khaali pet bilkul nahi.\nChai ya coffee khaane ke 45-60 minute baad piyo – kabhi bhi khaane ke saath nahi.\nAA patients mein iron deficiency bahut common hai – aur chai is deficiency ko aur badhati hai.',
    },
    {
      _key: 'faq5',
      question: 'Alopecia Areata mein vrat/fast kar sakte hain?',
      answer: 'Haan – weekly ek vrat karna generally theek hai AA mein.\nSabudana khichdi (boiled, no fry), singhade ka atta, makhana – safe vrat options hain.\nNirjala vrat (bina paani) – avoid karo agar AA active phase mein hai – dehydration scalp inflammation badhati hai.\nVrat ke din zyada aloo mat khao – high glycemic foods blood sugar spike karte hain jo immune dysregulation trigger karta hai.\nVrat ke turant baad heavy meal mat lo – gut pe sudden load se immune flare hota hai.',
    },
    {
      _key: 'faq6',
      question: 'Alopecia Areata mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karne ki zaroorat nahi – lekin sahi choice karni padegi.\nBoiled/grilled chicken, surmai ya rohu fish (grilled), aur boiled ande – ye sab allowed hain.\nYe protein aur zinc ka achha source hain – jo AA mein directly follicle ko feed karte hain.\nMutton/red meat, fried non-veg, processed meat (sausage, salami) – ye avoid karo.\nRed meat mein arachidonic acid zyada hota hai jo body mein inflammatory prostaglandins badhata hai – AA ka direct trigger hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya chawal (rice) Alopecia Areata mein allowed hai?',
      answer: 'Haan – brown rice roz allowed hai.\nWhite rice bhi allowed hai – lekin brown rice better hai kyunki glycemic index kam hota hai aur selenium milta hai.\nZyada plain white rice + refined dal ka combination roz mat khao – variety rakho.\nRice ke saath dal zaroor khao – protein + carb combo blood sugar stable rakhta hai jo immune ke liye zaroori hai.',
    },
    {
      _key: 'faq8',
      question: 'Alopecia Areata mein konsa tel use karein?',
      answer: 'Sarson ka tel ya til ka tel – dono best options hain khane ke liye.\nSarson ke tel mein omega-3 aur anti-inflammatory compounds hote hain – scalp ke liye andar se bhi bahar se bhi.\nRefined vegetable oil (sunflower, soybean) – avoid karo – omega-6 ka imbalance chronic inflammation badhata hai.\nDesi ghee – chhoti matra mein bilkul theek hai – gut lining ke liye beneficial hai.\nDalda / vanaspati – poori tarah avoid karo – trans fat AA ke liye worst option hai.',
    },
    {
      _key: 'faq9',
      question: 'Late raat khaana AA mein kitna matter karta hai?',
      answer: 'Bahut zyada matter karta hai – ye ek underrated trigger hai.\nRaat 9-10 baje heavy khaana – gut mein aadha raat tak digestion chalta hai – gut inflammation badhti hai.\nGut-immune axis directly connected hai AA mein – gut disturb = immune overreaction = follicle attack.\n7:30 baje tak dinner khatam karo – iska fark 4-6 hafte mein mahsoos hota hai.\nAgar bhookh lage toh warm haldi doodh ya saunf ka paani le sakte ho.',
    },
    {
      _key: 'faq10',
      question: 'Alopecia Areata mein amla kitna faydemand hai?',
      answer: 'Bahut faydemand – AA patients ke liye amla ek top food hai.\nAmla mein vitamin C sabse zyada hoti hai – collagen synthesis ke liye jo hair follicle ki structure banata hai.\nAmla antioxidant bhi hai – oxidative stress kam karta hai jo AA mein follicle damage ka ek reason hai.\nRoz 1 fresh amla ya 1 tsp dry amla powder + gunguna paani – subah khaali pet best time hai.\nPackaged amla candy ya achaar mein sugar aur salt zyada – wo form avoid karo.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Diotallevi F et al — The Role of Nutrition in Immune-Mediated, Inflammatory Skin Disease: A Narrative Review — Nutrients', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35276950' },
    { _key: 's2', name: 'Touil H et al — Differential impact of environmental factors on systemic and localized autoimmunity — Frontiers in Immunology', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37283765' },
    { _key: 's3', name: 'Sharma N et al — Dietary Influences on Skin Health in Common Dermatological Disorders — Cureus', year: '2024', url: 'https://pubmed.ncbi.nlm.nih.gov/38562266' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Khaane ke saath ya baad mein turant chai peena – tannin iron absorption block karta hai aur AA mein iron deficiency baalon ke girne ka direct trigger hai',
    mustEat: 'Amla (fresh ya dry) – vitamin C + antioxidant combo – follicle collagen aur oxidative stress dono address karta hai',
    mustAvoid: 'Maida (refined flour) – gut mein leaky gut badhata hai jo immune system ko overactive karta hai – aur AA ek immune-driven disease hai',
  },

  doctorNote: 'Mere Alopecia Areata patients mein maine notice kiya hai ki jo log maida aur packaged dairy dono ek saath chodh dete hain – unka baal girna clearly stabilize hota hai treatment ke saath, akele ek chodh ke nahi. Ek saath dono chodh na – ye sab milke gut-immune axis pe kaam karte hain. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Alopecia Areata (Ganjapan) mein kya khayein, kya nahi – complete list: homeopedia.in/diet/alopecia-areata',
  shareTextMealPlan: 'Alopecia Areata ke liye 4-din ka Indian diet plan: homeopedia.in/diet/alopecia-areata',
  shareTextPage: 'Alopecia Areata Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/alopecia-areata',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Alopecia Areata diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Alopecia Areata diet chart seeded — homeopedia.in/diet/alopecia-areata')
}

seed().catch(console.error)
