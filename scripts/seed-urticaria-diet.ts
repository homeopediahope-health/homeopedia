import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-urticaria',
  _type: 'diet',
  title: 'Urticaria (Pittikaa) Diet Chart',
  hindiName: 'Pittikaa / Sheetal Pittikaa / Pitti',
  slug: { _type: 'slug', current: 'urticaria' },
  relatedDiseaseSlug: 'urticaria',
  category: 'Skin',
  metaTitle: 'Urticaria (Pittikaa) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Urticaria (Pittikaa) diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Urticaria mein skin ke andar histamine release hoti hai — aur kuch foods is histamine release ko directly trigger ya badha dete hain, jisse welts aur itching aur bhi tez hoti hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Stale ya leftover khaana avoid karo', reason: 'purana khaana mein histamine level rapidly badhta hai jo urticaria direct trigger karta hai' },
    { _key: 'eh2', habit: 'Har din ek hi time pe khaao', reason: 'irregular eating se gut dysbiosis hoti hai jo chronic urticaria mein immune overreaction badhata hai' },
    { _key: 'eh3', habit: 'Khaane ke turant baad cold water/drink mat lo', reason: 'temperature shock mast cells activate karta hai jo urticaria mein already hyperreactive hoti hain' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (dalia)', reason: 'easily digest hota hai, gut inflammation kam karta hai jo urticaria ki frequency reduce karta hai' },
        { _key: 'i2', food: 'Jowar roti', reason: 'gluten-free, low-histamine grain hai — urticaria mein safely kha sakte hain' },
        { _key: 'i3', food: 'Chawal (freshly cooked, thanda nahi)', reason: 'low histamine, gut pe mild hota hai — freshly bana hona zaroori hai' },
        { _key: 'i4', food: 'Bajra roti', reason: 'mast cell stabilizing minerals hain jaise magnesium — urticaria mein helpful hota hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki (ghiya)', reason: 'anti-inflammatory, gut soothing — urticaria mein sujan aur histamine release dono kam karta hai' },
        { _key: 'i6', food: 'Turai', reason: 'light, easily digestible — histamine load nahi badhata, flare-up ke din bhi safe rehta hai' },
        { _key: 'i7', food: 'Parwal', reason: 'urticaria mein traditionally safe sabzi mani jaati hai — body cooling effect bhi deta hai' },
        { _key: 'i8', food: 'Palak (freshly cooked, thandi nahi)', reason: 'iron + folate — lekin sirf fresh bana — stored palak mein histamine badh jaati hai' },
        { _key: 'i9', food: 'Karela', reason: 'blood purifying properties — urticaria mein skin ke andar toxin load reduce karta hai' },
        { _key: 'i10', food: 'Kaddu (pumpkin)', reason: 'low-histamine, anti-inflammatory — urticaria ke flare-up phase mein bhi safe hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Seb (apple, fresh)', reason: 'quercetin hota hai jo natural mast cell stabilizer hai — histamine release slow karta hai' },
        { _key: 'i12', food: 'Nashpati (pear)', reason: 'low-histamine fruit hai — urticaria mein safest fruits mein se ek' },
        { _key: 'i13', food: 'Papaya (pakka hua, fresh)', reason: 'digestive enzymes gut health improve karte hain jo histamine metabolism mein help karta hai' },
        { _key: 'i14', food: 'Amla (fresh ya sukha)', reason: 'Vitamin C mast cells ko stabilize karta hai — histamine release control hoti hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i15', food: 'Moong dal (dhuli hui)', reason: 'sabse low-histamine dal hai — urticaria mein best protein source' },
        { _key: 'i16', food: 'Masoor dal (freshly bani)', reason: 'iron + protein — lekin freshly bani honi chahiye — stored bani dal avoid karein' },
        { _key: 'i17', food: 'Chana dal', reason: 'fiber + protein — gut health support karta hai jo urticaria mein immune balance ke liye zaroori hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫚',
      items: [
        { _key: 'i18', food: 'Haldi + kali mirch warm paani', reason: 'curcumin histamine pathway ko modulate karta hai, kali mirch absorption badhata hai' },
        { _key: 'i19', food: 'Tulsi chai (no milk)', reason: 'tulsi anti-histaminic properties rakhta hai jo urticaria mein mast cell response calm karta hai' },
        { _key: 'i20', food: 'Jeera-dhania water', reason: 'digestive health support karta hai — gut-skin axis ke through urticaria pe positive effect' },
        { _key: 'i21', food: 'Til ka tel ya sarson ka tel (cooking mein)', reason: 'PUFA se inflammation less hoti hai vs refined oil' },
        { _key: 'i22', food: 'Desi ghee (thodi matra)', reason: 'gut lining repair karta hai jo urticaria mein leaky gut problem address karta hai' },
        { _key: 'i23', food: 'Adrak (fresh, thodi matra)', reason: 'anti-histaminic compound gingerol hota hai jo histamine release reduce karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Chicken (fresh, boiled ya grilled)', reason: 'lean protein source hai — freshly bana hona zaroori — stored/leftover nahi' },
    { _key: 'nva2', food: 'Eggs (freshly boiled, sirf white portion preferred)', reason: 'albumen low-histamine hota hai — yolk mein thoda zyada histamine hota hai — moderation mein' },
    { _key: 'nva3', food: 'Rohu ya Katla machhi (freshly bani, grilled/steamed)', reason: 'fresh water fish mein histamine kam hoti hai vs sea fish' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Koi bhi leftover ya stored non-veg', reason: 'protein foods mein histamine most rapidly badhta hai — urticaria ka direct trigger hai' },
    { _key: 'nvav2', food: 'Fried chicken, pakora, tikka', reason: 'cooking method se acrolein aur trans fat banta hai jo mast cells irritate karta hai' },
    { _key: 'nvav3', food: 'Mutton / Red meat', reason: 'histamine + biogenic amines zyada hoti hain — urticaria mein strong trigger' },
    { _key: 'nvav4', food: 'Prawns, crab, shellfish', reason: 'high histamine seafood — urticaria mein sabse problematic non-veg items hain' },
    { _key: 'nvav5', food: 'Sea fish (pomfret, sardine, tuna, bangda)', reason: 'freshwater fish se zyada histamine hoti hai — urticaria mein avoid' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Fermented',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Achaar (pickle)', reason: 'fermentation se histamine multiple times badhti hai — urticaria mein direct trigger' },
        { _key: 'ri2', food: 'Vinegar (sirka)', reason: 'strong histamine liberator — urticaria patients mein flare-up ka common cause hai' },
        { _key: 'ri3', food: 'Soya sauce, ketchup, sauces', reason: 'fermented + additives — dono milke urticaria mein strong reaction dete hain' },
        { _key: 'ri4', food: 'Packaged chips, namkeen', reason: 'additives jaise MSG aur artificial colors pseudoallergen hote hain — urticaria trigger karte hain' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🥛',
      items: [
        { _key: 'ri5', food: 'Paneer (stored / market wala)', reason: 'fermentation process mein histamine badhti hai — urticaria mein avoid karein [Ghar ka fresh bana paneer thodi matra mein theek hai]' },
        { _key: 'ri6', food: 'Dahi (packaged / bahut zyada fermented)', reason: 'histamine high hoti hai — urticaria mein avoid [Ghar ka fresh dahi, 1 katori, active flare mein nahi]' },
        { _key: 'ri7', food: 'Cheese (especially aged)', reason: 'tyramine + histamine dono zyada — urticaria mein clear avoid' },
        { _key: 'ri8', food: 'Maida products', reason: 'gut mein leaky gut badhata hai — urticaria mein immune overreaction ka base banata hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🍬',
      items: [
        { _key: 'ri9', food: 'Bahut teekha khaana (lal mirch zyada)', reason: 'capsaicin mast cells directly stimulate karta hai — urticaria trigger' },
        { _key: 'ri10', food: 'Refined sugar zyada', reason: 'pro-inflammatory — urticaria mein skin inflammation aur itching intensity badhata hai' },
        { _key: 'ri11', food: 'Deep fried khaana', reason: 'trans fat + acrolein — mast cell hyperreactivity aur badhti hai urticaria mein' },
        { _key: 'ri12', food: 'Tomato (kachha ya bahut zyada)', reason: 'histamine liberator hai — urticaria patients mein flare-up ka common cause' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🥤',
      items: [
        { _key: 'ri13', food: 'Alcohol (any type)', reason: 'histamine liberator + DAO enzyme inhibitor — urticaria mein double action se severe trigger' },
        { _key: 'ri14', food: 'Packaged fruit juices', reason: 'artificial colors + preservatives — pseudoallergen hote hain jo urticaria mein reaction dete hain' },
        { _key: 'ri15', food: 'Energy drinks / Cold drinks', reason: 'additives + caffeine zyada — urticaria mein immune response dysregulate karta hai' },
        { _key: 'ri16', food: 'Bahut thanda paani ya drinks', reason: 'temperature trigger — cold urticaria mein toh especially avoid karein' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm haldi-paani (thodi kali mirch ke saath) — khali pet mast cell calming effect', 'Bheegi hui methi seeds 1 tsp + lukewarm paani — gut ke liye helpful'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with lauki/turai — freshly bana, thanda nahi', 'Jowar ka chilla + dhania chutney (vinegar wali nahi) — low-histamine nashta'], nonVegOption: '2 boiled eggs (freshly bane) + 1 jowar roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb (apple) ya nashpati — fresh, whole fruit', 'Bhuna chana (without namkeen masala) — handful'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 roti + moong dal (freshly bani) + lauki sabzi + salad (bina kachhe tomato ke)', 'Freshly bana chawal + arhar dal + parwal sabzi'], nonVegOption: 'Boiled/grilled chicken (freshly bana) + 2 roti + lauki sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Tulsi chai (bina milk ke ya thoda doodh) + akhrot 3-4', 'Jeera-dhania paani + bhuna chana'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['Moong dal khichdi (freshly bani) + thoda desi ghee + kaddu ki sabzi', '2 roti + masoor dal (freshly bani) + turai sabzi'], nonVegOption: 'Fresh rohu/katla machhi steamed + 1 roti + palak sabzi (freshly bani)' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (mild — agar tolerate ho)', 'Warm paani + saunf — calming, gut soothing'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Haldi paani',
      vegNashta: 'Daliya + lauki',
      vegDopahar: 'Chawal + moong dal + parwal sabzi',
      vegShaam: 'Seb + bhuna chana',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled eggs (fresh) + jowar roti',
      nonVegDopahar: 'Grilled chicken (fresh) + 2 roti + lauki sabzi',
      nonVegRaat: 'Khichdi + ghee',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Methi seeds paani',
      vegNashta: 'Jowar chilla + dhania chutney',
      vegDopahar: '2 roti + chana dal + turai sabzi',
      vegShaam: 'Tulsi chai + akhrot',
      vegRaat: '2 roti + masoor dal + kaddu sabzi',
      nonVegNashta: 'Jowar chilla + dhania chutney',
      nonVegDopahar: 'Steamed rohu machhi + 2 roti + turai sabzi',
      nonVegRaat: '2 roti + masoor dal + kaddu',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Haldi paani',
      vegNashta: 'Bajra roti + ghee + gur (thoda)',
      vegDopahar: 'Freshly bana chawal + arhar dal + karela sabzi',
      vegShaam: 'Nashpati + bhuna chana',
      vegRaat: 'Moong dal khichdi + turai',
      nonVegNashta: '2 boiled eggs + bajra roti',
      nonVegDopahar: 'Boiled chicken + freshly bana chawal + karela sabzi',
      nonVegRaat: 'Moong dal khichdi + turai',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Adrak-tulsi paani',
      vegNashta: 'Daliya + seb (grated)',
      vegDopahar: '2 roti + moong dal + palak sabzi (freshly bani)',
      vegShaam: 'Jeera paani + akhrot',
      vegRaat: '2 roti + chana dal + lauki',
      nonVegNashta: 'Daliya + seb',
      nonVegDopahar: 'Grilled katla machhi (fresh) + 2 roti + palak',
      nonVegRaat: '2 roti + moong dal + lauki',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf moong dal khichdi ya daliya khao — simple, low-histamine, gut pe koi load nahi',
        'Tomato, dahi, achaar, leftover khaana — aaj ke din bilkul avoid karein — even normally allowed cheezein bhi',
        'Zyada paani piyo — warm ya room temperature — histamine flush out hone mein help karta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (freshly bani, basi nahi) — urticaria mein safe vrat option hai',
        'Singhare ka atta — low-histamine, gluten-free — vrat mein roti ya cheela bana sakte hain',
        'Vrat mein kadhi (dahi wali) ya bahut fermented cheez avoid karein — histamine load badhta hai vrat mein bhi',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karein: Dal tadka + plain roti + plain sabzi — freshly bana mango, packaged ya stored avoid karein',
        'Avoid karein: Anything fried, ketchup/sauce wala, stale buffet items — restaurant mein histamine ka pata nahi chalta — fresh order hi safe hai',
        'Practical hack: Ghee roti + dal — yahi sabse safe combo hai Indian dhaba mein urticaria patients ke liye',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karein: Bhuna chana, akhrot, fresh seb/nashpati, bajra roti (freshly bani, usi din) — low-histamine travel snacks',
        'Hotel mein order karein: Plain dal, plain sabzi, freshly bana rice/roti — cold storage se nikala koi bhi khaana avoid karein',
      ],
    },
  ],

  proTip: 'Khaana fresh bana aur 2 ghante ke andar kha lo — urticaria mein leftover ya thanda rakhke dubara garam kiya khaana histamine ka sabse bada hidden source hota hai jo patients ko pata hi nahi chalta.',
  importantNote: 'Ye chart ek general guide hai — urticaria ka trigger har patient mein alag hota hai. Apne homoeopath se apni specific trigger pattern ke hisaab se personalized plan banwayein.',
  homeopathyDiet: 'Jab aap high-histamine foods avoid karte ho — toh body ka histamine load kam hota hai — is state mein homeopathic medicines mast cell reactivity pe zyada effectively kaam karti hain. Diet sahi ho toh treatment ka response clearly better hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya urticaria mein dahi khana safe hai?',
      answer: 'Flare-up ke time nahi — active urticaria mein dahi avoid karna better hai.\nDahi fermented hota hai — fermentation se histamine level badhti hai jo mast cells trigger karta hai.\nAgar urticaria control mein hai toh ghar ka fresh bana dahi (1 small katori, subah) toh kuch patients tolerate kar lete hain.\nLekin packaged dahi, stored dahi ya bahut zyada matra — avoid karein.\nApne doctor se apne case ke hisaab se poochh lein.',
    },
    {
      _key: 'faq2',
      question: 'Kya urticaria mein tamatar (tomato) khana chahiye?',
      answer: 'Nahi — tomato urticaria mein avoid karna better hai.\nTomato ek strong histamine liberator hai — directly mast cells stimulate karta hai aur histamine release karata hai.\nKachha tamatar toh bilkul nahi — cooked mein bhi thoda kam hota hai, lekin active urticaria mein avoid hi karein.\nYe same reason hai ki tomato sauce, ketchup bhi nahi recommend karta — sauce mein concentration aur zyada hoti hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se urticaria mein kitne din mein fark dikhta hai?',
      answer: '2-4 hafte mein clearly fark dikhna chahiye agar sahi se follow karo.\nPehle 1 hafte mein frequency thodi kam hoti hai — lekin dramatic improvement usually 3-4 hafte mein aata hai.\nLow-histamine diet ko consistently follow karna zaroori hai — ek baar mein sab theek nahi hoga.\nDiet ke saath homeopathic treatment ho toh response aur better hota hai.',
    },
    {
      _key: 'faq4',
      question: 'Urticaria mein chai/coffee peena theek hai?',
      answer: 'Plain adrak-tulsi chai (bina milk ke) — okay hai, limited matra mein.\nRegular chai (milk ke saath) — moderate matra mein kuch patients tolerate kar lete hain — lekin milk histamine liberate kar sakta hai.\nCoffee — seedha histamine liberator nahi hai, lekin strong coffee mast cells stimulate kar sakti hai — 1 cup limit.\nPackaged fruit juices, energy drinks, cold drinks — bilkul avoid karein — additives + colors urticaria ke strong triggers hain.',
    },
    {
      _key: 'faq5',
      question: 'Urticaria mein vrat kar sakte hain?',
      answer: 'Haan — lekin carefully karna hoga.\nVrat mein sabudana (freshly bana), singhare ka atta, kuttu ka atta (freshly bana) — ye safe options hain.\nVrat mein dahi wali dishes zyada mat lo — fermentation issue rehta hai.\nBahut lamba fast — 12+ ghante bina khaane ke — avoid karein kyunki blood sugar drop se mast cell instability badh sakti hai.\nNutritious vrat karo — khali pet mat raho zyada der.',
    },
    {
      _key: 'faq6',
      question: 'Urticaria mein bahar ka khaana ya street food theek hai kya?',
      answer: 'Nahi — street food urticaria mein problematic hai.\nBahar ka khaana mostly stored, reheated, ya bahut processed hota hai — histamine level ka koi control nahi.\nKetchup, sauces, achaar — jo almost har dhabe ya restaurant mein aata hai — ye sab trigger hain.\nZaroorat ho toh dal + plain roti + plain sabzi order karo — fresh bana mango.\nEk baar bahar khao toh observe karo — 2-4 ghante mein reaction aata hai — apne triggers samjho.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai urticaria mein?',
      answer: 'Specific koi restriction nahi hoti — lekin kuch cheezein samajhni chahiye.\nStrong smell wala khaana (lahsun, pyaz raw, pudina) — kuch homoeopaths recommend karte hain dawa se 30 min pehle ya baad mein avoid karna — apne doctor se confirm karein.\nCoffee — kuch specific medicines ke saath avoid hoti hai — sabke saath nahi — apne doctor se poochho.\nDiet restrictions urticaria mein zyaatar treatment ke liye nahi, disease management ke liye hain — histamine kam karna zaroori hai healing ke liye.',
    },
    {
      _key: 'faq8',
      question: 'Urticaria mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band nahi — lekin carefully khaana hoga.\nFreshly bana boiled/grilled chicken ya fresh water fish (rohu, katla) — allowed hai.\nLeftover non-veg, fried non-veg, sea fish, prawns, shellfish — ye sab avoid karein.\nNon-veg mein histamine sabse fast badhti hai — isliye freshness critical hai — stored ya reheated non-veg urticaria patients ke liye risky hai.\nAgar frequent flare-up ho — kuch hafte ke liye non-veg pause karo aur dekho — kaafi patients mein clearly fark aata hai.',
    },
    {
      _key: 'faq9',
      question: 'Urticaria mein aam (mango) khana theek hai?',
      answer: 'Limited matra mein — careful rehna hoga.\nAam moderate histamine liberator hai — kuch patients tolerate kar lete hain, kuch mein trigger hota hai.\nAgar summer mein urticaria zyada hoti hai toh aam ko suspect karke 2-3 hafte band karo aur observe karo.\nKachcha aam ya aam ka achaar — ye bilkul avoid karein.\nPaka hua fresh aam — 1-2 slice — agar tolerate hota ho toh okay, lekin bahut zyada nahi.',
    },
    {
      _key: 'faq10',
      question: 'Kya cold drinks ya ice cream urticaria trigger kar sakti hain?',
      answer: 'Haan — especially cold urticaria mein.\nCold temperature directly mast cells activate karta hai — isliye bahut thanda kuch bhi urticaria mein problematic ho sakta hai.\nIce cream mein — cold + dairy + sugar + additives — teen triggers ek saath hain — strongly avoid karein.\nCold drinks mein — artificial colors, preservatives, cold temperature — ye sab milke strong reaction de sakte hain.\nRoom temperature ya slightly warm drinks hi better hain urticaria mein.',
    },
    {
      _key: 'faq11',
      question: 'Kya urticaria mein wheat (gehun) band karna chahiye?',
      answer: 'Nahi — unless aapko wheat allergy specifically hai.\nUrticaria mein wheat generally avoid nahi karna hota — unless allergy testing mein wheat aaya ho.\nMaida (refined wheat) avoid karo — gut inflammation ke liye — lekin gehun ki roti theek hai.\nAgar laga ki roti khane ke baad reaction hota hai toh doctor se wheat allergy test karwa lo — guess mat karo.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Wagner N et al — A Popular myth - low-histamine diet improves chronic spontaneous urticaria - fact or fiction? — Journal of the European Academy of Dermatology and Venereology — 2017', year: '2017', url: 'https://pubmed.ncbi.nlm.nih.gov/27624921' },
    { _key: 's2', name: 'Cornillier H et al — Effect of Diet in Chronic Spontaneous Urticaria: A Systematic Review — Acta Dermato-Venereologica — 2019', year: '2019', url: 'https://pubmed.ncbi.nlm.nih.gov/30085322' },
    { _key: 's3', name: 'Sardana K, Sachdeva S — Role of nutritional supplements in selected dermatological disorders: A review — Journal of Cosmetic Dermatology — 2021', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/34564936' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Leftover ya stored khaana khana — patients ko lagta hai "ghar ka khaana safe hai" — lekin 6-8 ghante baad wahi khaana histamine mine ban jata hai',
    mustEat: 'Seb (apple, fresh) — quercetin natural mast cell stabilizer hai — urticaria mein har din 1 fresh seb helpful hai',
    mustAvoid: 'Koi bhi stored ya leftover khaana — fresh banana + fresh khana — ye urticaria diet ka core rule hai',
  },

  doctorNote: 'Mere urticaria patients mein jo log sirf ek cheez follow kar lete hain — khaana fresh bana aur turant khao, koi leftover nahi — unka flare-up frequency clearly kam ho jaati hai treatment ke saath. Ye ek simple shift hai jo bahut patients miss karte hain. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Urticaria mein kya khayein, kya nahi — complete list: homeopedia.in/diet/urticaria',
  shareTextMealPlan: 'Urticaria ke liye 4-din ka Indian diet plan: homeopedia.in/diet/urticaria',
  shareTextPage: 'Urticaria Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/urticaria',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Urticaria diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Urticaria diet chart seeded — homeopedia.in/diet/urticaria')
}

seed().catch(console.error)
