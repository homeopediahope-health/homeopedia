import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-ulcerative-colitis',
  _type: 'diet',
  title: 'Ulcerative Colitis Diet Chart',
  hindiName: 'Aanton ki Sujan / Badi Aant ka Ghav',
  slug: { _type: 'slug', current: 'ulcerative-colitis' },
  relatedDiseaseSlug: 'ulcerative-colitis',
  category: 'Digestive',
  metaTitle: 'Ulcerative Colitis Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Ulcerative Colitis (aanton ki sujan) diet chart — green list, red list, meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Ulcerative Colitis mein colon ki inner lining inflamed hoti hai — kuch foods is inflammation (sujan) ko directly trigger karte hain aur flare-up badhate hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur flare-up/vrat jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Roz ek hi waqt pe khaana khao', reason: 'UC mein irregular timing colon muscle spasm trigger karta hai' },
    { _key: 'eh2', habit: 'Ek baar mein zyada mat khao — chhote meals zyada baar khao', reason: 'badi aant pe ek saath kam pressure padta hai' },
    { _key: 'eh3', habit: 'Khaana achhe se chabao', reason: 'UC mein undigested food colon tak pahunchta hai aur sujan badhata hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (white/plain)', reason: 'easily digest hota hai, colon pe minimal load — UC mein best grain option' },
        { _key: 'i2', food: 'Chawal (plain boiled)', reason: 'low-fiber, colon ko rest deta hai — especially flare-up mein' },
        { _key: 'i3', food: 'Sabudana', reason: 'colon irritation nahi karta, bland aur soothing' },
        { _key: 'i4', food: 'Suji (plain)', reason: 'refined, colon ko irritate nahi karta' },
        { _key: 'i5', food: 'Roti (1-2, soft — remission mein)', reason: 'remission mein theek hai — bran wali nahi, plain atta' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i6', food: 'Lauki', reason: 'paani bhari, anti-inflammatory, colon pe zero strain' },
        { _key: 'i7', food: 'Turai', reason: 'soft fiber, gut lining ko soothe karta hai' },
        { _key: 'i8', food: 'Kaddu (peeled, boiled)', reason: 'beta-carotene gut healing mein help karta hai' },
        { _key: 'i9', food: 'Gajar (achi tarah paki)', reason: 'soft pectins hain jo colon ki lining repair mein help karte hain' },
        { _key: 'i10', food: 'Palak (achi tarah paki/puree)', reason: 'iron deta hai jo UC mein blood loss se kam hota hai — raw nahi, sirf paka hua' },
        { _key: 'i11', food: 'Aloo (boiled, bina chilka)', reason: 'energy deta hai, bland hai — flare-up mein safe' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i12', food: 'Kela (ripe, not overripe)', reason: 'pectin colon lining coat karta hai — potassium replace karta hai jo diarrhea mein jaata hai' },
        { _key: 'i13', food: 'Papaya', reason: 'papain enzyme gut inflammation reduce karta hai' },
        { _key: 'i14', food: 'Seb (bina chilka, peeled)', reason: 'soluble fiber colon ko soothe karta hai' },
        { _key: 'i15', food: 'Anar / Pomegranate juice (seeds avoid)', reason: 'punicalagins colon inflammation kam karte hain' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (paani wali, chhilka utari)', reason: 'sabse easily digestible dal — colon pe least load' },
        { _key: 'i17', food: 'Masoor dal (achi tarah gali)', reason: 'iron aur protein — UC mein anemia mein zaroori' },
        { _key: 'i18', food: 'Dahi (ghar ka, taaza — 1 small katori)', reason: 'live cultures colon ka gut flora balance karte hain — packaged dahi nahi' },
        { _key: 'i19', food: 'Paneer (soft, ghar ka — thodi matra, remission mein)', reason: 'remission mein protein source — heavy nahi' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i20', food: 'Naariyal paani', reason: 'electrolytes replace karta hai jo diarrhea mein jaate hain — colon ko hydrate karta hai' },
        { _key: 'i21', food: 'Adrak chai (kam doodh, zyada paani)', reason: 'gingerol colon spasm reduce karta hai' },
        { _key: 'i22', food: 'Haldi (thodi matra, dal/sabzi mein)', reason: 'curcumin colon inflammation seedha reduce karta hai' },
        { _key: 'i23', food: 'Jeera paani', reason: 'gut motility regulate karta hai — UC mein uneven motility ek problem hai' },
        { _key: 'i24', food: 'Desi ghee (thodi matra)', reason: 'butyrate provide karta hai jo colon cells ka main fuel hai — healing mein help karta hai' },
        { _key: 'i25', food: 'Sarson ka tel / Til ka tel (kam)', reason: 'anti-inflammatory fatty acids hain' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Chicken (boiled/grilled, no skin)', reason: 'lean protein jo colon lining repair ke liye zaroori hai — fry bilkul nahi' },
    { _key: 'nva2', food: 'Eggs (boiled/scrambled without butter)', reason: 'easy to digest protein — UC mein muscle wasting rokta hai' },
    { _key: 'nva3', food: 'Rohu / Katla fish (steamed ya boiled)', reason: 'omega-3 fatty acids colon ki inflammation directly reduce karte hain' },
    { _key: 'nva4', food: 'Chicken broth / soup (clear, no cream)', reason: 'electrolytes + collagen — colon healing mein help karta hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Red meat (mutton, beef)', reason: 'heme iron aur saturated fat colon inflammation dramatically badhate hain — UC mein strong trigger' },
    { _key: 'nvav2', food: 'Fried chicken / fish fry', reason: 'trans fat gut lining damage karta hai — cooking method matter karta hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami, packaged keema)', reason: 'nitrates colon mucosa ko irritate karte hain' },
    { _key: 'nvav4', food: 'Shellfish / prawns / crab', reason: 'heavy, hard to digest — UC flare ka common trigger' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur High-Fiber',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, biscuit, naan, fried snacks)', reason: 'gut dysbiosis badhata hai jo UC ka root trigger hai' },
        { _key: 'ri2', food: 'Whole wheat atta (flare-up mein)', reason: 'insoluble fiber inflamed colon ko physically irritate karta hai' },
        { _key: 'ri3', food: 'Choker / bran', reason: 'rough fiber jo inflamed colon lining pe scratch karta hai — mechanical irritant' },
        { _key: 'ri4', food: 'Packaged biscuits / namkeen', reason: 'refined oils + maida + salt — colon inflammation badhate hain' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri5', food: 'Packaged / market dahi', reason: 'live cultures nahi hote, tyrosine aur preservatives hote hain — UC mein avoid' },
        { _key: 'ri6', food: 'Cream / full fat cheese / butter zyada', reason: 'saturated fat colon ke pro-inflammatory pathway activate karta hai' },
        { _key: 'ri7', food: 'Doodh zyada matra mein', reason: 'lactose UC mein gas aur cramps badhata hai' },
        { _key: 'ri8', food: 'Fried paneer / heavy paneer sabzi', reason: 'fat load colon pe zyada hota hai — cramps trigger' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri9', food: 'Mirchi zyada (lal mirchi powder)', reason: 'capsaicin inflamed colon mucosa ko directly irritate karta hai' },
        { _key: 'ri10', food: 'Kachchi pyaz / lahsun (raw form)', reason: 'fructans gas aur bloating cause karte hain — colon mein ferment hote hain' },
        { _key: 'ri11', food: 'Refined sugar zyada', reason: 'gut dysbiosis feed karta hai jo UC ka trigger factor hai' },
        { _key: 'ri12', food: 'Market mithai / halwa zyada ghee', reason: 'fat + sugar combination colon motility disturb karta hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri13', food: 'Chai (strong, zyada — 3+ cups)', reason: 'tannins gut lining irritate karte hain aur motility disturb karte hain' },
        { _key: 'ri14', food: 'Coffee (zyada — 2+ cups daily)', reason: 'colon motility accelerate karta hai — UC mein urgency aur frequency badh sakti hai' },
        { _key: 'ri15', food: 'Cold drinks / soda', reason: 'carbonation + sugar colon mein gas aur spasm cause karte hain' },
        { _key: 'ri16', food: 'Alcohol', reason: "colon ki protective mucus layer damage karta hai — UC mein strong flare trigger" },
        { _key: 'ri17', food: 'Packaged fruit juices', reason: 'concentrated fructose colon inflammation badhata hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani (1 glass) + 1 tsp desi ghee (khali pet butyrate colon ko heal karta hai)', 'Jeera paani (ek glass, garam) — colon motility subah se regulate hoti hai'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya (plain, thoda ghee) + 1 kela', 'Moong dal cheela (without onion) + ghar ka dahi'], nonVegOption: '2 boiled anda + 1-2 soft roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['Papaya (1 cup, fresh)', 'Naariyal paani (1 glass)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['1-2 roti (soft) + moong dal (paani wali) + lauki ki sabzi (soft cooked)', 'Plain boiled chawal + masoor dal + kaddu sabzi'], nonVegOption: 'Steamed fish (rohu/katla) + plain chawal + turai sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak wali herbal chai (kam doodh) + 4-5 akhrot', 'Sabudana khichdi (light, bina teekha)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['Khichdi (moong dal + chawal + ghee — light)', '1-2 roti + lauki/turai sabzi + ghar ka dahi'], nonVegOption: 'Chicken clear soup + 1-2 soft roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (1/2 cup, low fat) — curcumin raat bhar colon repair mein help karta hai', 'Plain warm paani + 1 tsp desi ghee — butyrate overnight healing ke liye'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Jeera paani',
      vegNashta: 'Daliya + kela',
      vegDopahar: 'Roti + moong dal + lauki',
      vegShaam: 'Papaya',
      vegRaat: 'Khichdi (moong + chawal)',
      nonVegNashta: '2 boiled anda + daliya',
      nonVegDopahar: 'Steamed rohu + chawal + lauki',
      nonVegRaat: 'Chicken soup + roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Ghee paani',
      vegNashta: 'Sabudana khichdi',
      vegDopahar: 'Chawal + masoor dal + kaddu',
      vegShaam: 'Adrak chai + akhrot',
      vegRaat: 'Roti + turai + dahi',
      nonVegNashta: '2 boiled anda + 1 roti',
      nonVegDopahar: 'Grilled chicken (no skin) + chawal + turai',
      nonVegRaat: 'Roti + fish (steamed) + dahi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Jeera paani',
      vegNashta: 'Moong dal chilla + dahi',
      vegDopahar: 'Roti + chana dal (soft gali) + gajar sabzi',
      vegShaam: 'Naariyal paani',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: 'Scrambled anda (no butter) + 1 roti',
      nonVegDopahar: 'Chawal + chana dal + steamed fish',
      nonVegRaat: 'Khichdi + chicken clear soup',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Ghee paani',
      vegNashta: 'Suji upma (plain, bina teekha)',
      vegDopahar: 'Chawal + moong dal + palak (cooked)',
      vegShaam: 'Kela',
      vegRaat: 'Roti + aloo sabzi (boiled) + dahi',
      nonVegNashta: '2 boiled anda + suji',
      nonVegDopahar: 'Boiled chicken + chawal + palak',
      nonVegRaat: 'Roti + aloo sabzi + dahi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf plain chawal, daliya, ya sabudana khao — colon ko maximum rest chahiye flare mein',
        'Raw vegetables, salad, whole fruit, dal sab avoid karo — even normally allowed cheezein bhi flare mein irritate karti hain',
        'Har 2 ghante mein thoda thoda khao — ek baar mein zyada bilkul nahi — bowel pe pressure avoid karo',
        'Naariyal paani aur ORS pite raho — diarrhea mein electrolyte loss bahut tez hoti hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi aur kheer safe hain — easily digestible aur colon friendly',
        'Kuttu atta UC mein risky ho sakta hai — avoid karo',
        'Singhara atta — thodi matra mein theek hai',
        'Vrat mein bhooke mat raho — UC mein fasting se acidity aur cramping badh sakti hai — har 2-3 ghante mein kuch khao',
        'Nirjala vrat (paani bhi nahi) UC mein risky hai — dehydration aur electrolyte loss flare trigger kar sakti hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: plain dal tadka (kam tel) + plain chawal — ye sabse safe option hai dhabe pe',
        'Avoid karo: rajma, chole, any fried item, curry with heavy cream, chaat, golgappe',
        'Hack: Waiter se specifically bolein — "koi teekha nahi, masala kam, oil kam" — staff samajhte hain',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana (plain), kela, seb (peeled), plain biscuits (glucose type) — ye sab 6-8 ghante safe hain',
        'Train/hotel mein order karo: plain dal chawal, plain idli (no chutney), plain poha — ye easily available hain',
        'Paani hamesha bottled peeye travel mein — tap water UC mein microbe trigger ban sakta hai',
      ],
    },
  ],

  proTip: 'Ghar mein ek "UC diary" banao — 3 din ke log ke saath dekho kaunsa food kitne ghante mein symptom de raha hai. Har UC patient ke personal triggers alag hote hain — list universal nahi hoti. Ye diary aapke doctor ko bhi clearly guide karegi treatment mein.',
  importantNote: 'Ye chart ek general guide hai. Ulcerative Colitis ek serious condition hai jisme diet disease stage ke hisab se change hoti hai — remission mein alag, flare mein alag. Apni condition ke hisab se apne homoeopath ya gastroenterologist se personalized plan banwayein.',
  homeopathyDiet: 'Ulcerative Colitis mein sahi diet colon ki sujan ko control mein rakhti hai — jab colon shant hota hai toh homeopathic medicines gut lining ko repair karne mein zyada effectively kaam karti hain. Dono saath chalein — sirf ek se kam kaam hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya Ulcerative Colitis mein dahi khana chahiye?',
      answer: 'Haan — ghar ka taaza bana dahi (1 small katori) allowed hai, lekin packaged market wala dahi avoid karein.\nGhar ke fresh dahi mein live cultures hote hain jo colon ka gut flora balance karte hain — UC mein gut flora disturbed hoti hai jo inflammation badhata hai.\nPackaged dahi mein live cultures nahi hote — aur preservatives hote hain jo trigger ban sakte hain.\nFlare-up ke waqt dahi bhi band karo — remission mein hi lena.\nApne doctor se poochho — kuch severe cases mein dahi bhi restrict hota hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya Ulcerative Colitis mein chawal khana theek hai?',
      answer: 'Haan — plain boiled chawal UC mein ek safest food hai.\nLow-fiber hone ki wajah se inflamed colon ko rest deta hai — colon ko physically less work karna padta hai.\nFlare-up mein bhi plain chawal allowed hai — isi wajah se doctors IBD mein rice-based diet recommend karte hain.\nBrown rice avoid karo — uska rough fiber inflamed lining scratch karta hai.\nChawal + moong dal + ghee ki khichdi UC mein ideal meal hai.',
    },
    {
      _key: 'faq3',
      question: 'Ulcerative Colitis mein diet change se kitne din mein fark dikhta hai?',
      answer: 'Remission phase mein 2-3 hafte consistent diet se gut mein clearly improvement notice hoti hai.\nFlare-up ke waqt agar trigger foods band kar do toh 3-5 din mein cramping aur frequency mein thoda relief milta hai.\nDiet koi instant medicine nahi — ye gut environment change karti hai jo slow process hai.\nLong-term (3-6 mahine consistent) diet se flare-up frequency clearly kam hoti hai.\nApne doctor ke treatment ke saath diet ek supporting role mein kaam karta hai — akele diet se disease control nahi hogi.',
    },
    {
      _key: 'faq4',
      question: 'Ulcerative Colitis mein chai ya coffee pi sakte hain?',
      answer: 'Kam matra mein — haan, lekin carefully.\nAdrak wali herbal chai (kam doodh, zyada paani) UC mein better option hai — gingerol colon spasm reduce karta hai.\nStrong black chai — 3+ cups daily mein tannins colon lining irritate karte hain — avoid karo.\nCoffee — 1 cup subah theek hai, lekin 2+ cups se colon motility accelerate hoti hai — urgency aur frequency badh sakti hai UC mein.\nCold coffee, iced tea, energy drinks — sab avoid karo.',
    },
    {
      _key: 'faq5',
      question: 'Ulcerative Colitis mein vrat/fast kar sakte hain?',
      answer: 'Kar sakte hain — lekin bhooke nahi rehna chahiye.\nSabudana khichdi, sabudana kheer, singhara atta ka halwa — ye UC-safe vrat options hain.\nKuttu atta avoid karo — heavy hota hai aur kuch UC patients mein trigger karta hai.\nNirjala vrat (paani bhi nahi) UC mein risky hai — dehydration aur electrolyte loss flare trigger kar sakti hai.\nVrat mein har 2-3 ghante mein kuch khao — khali pet colon mein acidity aur spasm badhta hai.\nDoctor se pehle poochho agar disease active phase mein hai.',
    },
    {
      _key: 'faq6',
      question: 'Ulcerative Colitis mein mirch masala bilkul band karna padega?',
      answer: 'Poora band nahi — drastically kam karna padega.\nLal mirchi powder aur zyada teekha khana — capsaicin inflamed colon mucosa ko directly irritate karta hai — ye UC mein major trigger hai.\nHaldi, jeera, dhania, adrak — ye allowed hain, ye anti-inflammatory hain.\nGaram masala thodi matra mein remission mein theek hai.\nFlare-up mein toh sab masale minimise karo — bland khaana hi safe.\nDheere dheere adjust karo — ek din mein sab band mat karo.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath UC mein koi khaana band karna padta hai?',
      answer: 'General homeopathic medicines ke saath koi strict food restriction nahi hoti.\nKuch specific medicines ke saath strong smell wali cheezein (camphor, raw onion, strong coffee) avoid karne ki advice di jaati hai — apne doctor se poochho exactly konsi medicine hai.\nDiet restriction disease ke liye hai — medicine ke liye nahi.\nCoffee ek cup theek hai lekin zyada mat lo — iska reason disease ka trigger hai, medicine ka restriction nahi.\nIndividual variation hoti hai — generalize mat karo.',
    },
    {
      _key: 'faq8',
      question: 'Ulcerative Colitis mein non-veg khana chahiye ya band karna padega?',
      answer: 'Completely band karne ki zaroorat nahi — smart choices karni padegi.\nBoiled/steamed chicken, boiled eggs, steamed fish (rohu, katla) — ye allowed hain. Omega-3 aur lean protein dono UC mein helpful hain.\nRed meat (mutton, beef) — strictly avoid karo. Heme iron aur saturated fat dono colon inflammation badhate hain — ye strong trigger hai.\nFried non-veg, processed meat, shellfish — avoid.\nFlare-up ke waqt non-veg bhi band karo — us waqt plain vegetarian bland diet hi safest hai.',
    },
    {
      _key: 'faq9',
      question: 'Ulcerative Colitis mein kela khana chahiye?',
      answer: 'Haan — ripe (pakka) kela UC mein ek acha food hai.\nPectin colon lining ko coat karta hai — protective layer banata hai jo inflamed mucosa ke liye helpful hai.\nPotassium replace karta hai — diarrhea mein potassium bahut jaata hai, kela uski bharpai karta hai.\nOverripe (kala hone wala) kela avoid karo — fermentation badhta hai jo gas aur bloating cause karta hai UC mein.\n1 medium ripe kela subah ya mid-morning mein — safe hai.',
    },
    {
      _key: 'faq10',
      question: 'Raat ko late khaana UC mein koi problem karti hai?',
      answer: 'Haan — raat ko late aur heavy khaana UC mein clearly problematic hai.\nColon ki motility raat mein naturally slow hoti hai — late heavy meal colon pe unnecessary pressure dalta hai.\nRaat 8 baje ke baad heavy khaana avoid karo — 7-7:30 PM tak dinner ho jaana ideal hai.\nAgar bhookh lage toh 1 glass warm paani ya haldi doodh (1/2 cup) le sakte ho — khaana nahi.\nLate night mein cramping aur urgency is pattern se directly linked hoti hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Marion-Letellier R et al — IBD: In Food We Trust — Journal of Crohn\'s & Colitis', year: '2016', url: 'https://pubmed.ncbi.nlm.nih.gov/27194533' },
    { _key: 's2', name: 'Reddavide R et al — Role of diet in prevention and treatment of IBD — Acta Biomedica', year: '2018', url: 'https://pubmed.ncbi.nlm.nih.gov/30561397' },
    { _key: 's3', name: 'Minhas HJ et al — Common supplements and dietary measures in IBD — Therapeutic Advances in Chronic Disease', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37426698' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Flare-up mein bhi "healthy" raw salad aur fruits khaate rehna — ye colon ke liye aur bhi harmful hota hai us waqt',
    mustEat: 'Desi ghee (thodi matra) — butyrate provide karta hai jo colon cells ka primary fuel hai aur healing ke liye zaroori hai',
    mustAvoid: 'Red meat (mutton/beef) — colon inflammation ka strongest dietary trigger hai UC mein',
  },

  doctorNote: 'Mere UC patients mein maine notice kiya hai ki jo log flare-up ke pehle signs pe 2-3 din ke liye khud bland diet pe switch kar lete hain — chawal, khichdi, daliya — unka full flare avoid ho jaata hai aur treatment response dramatically better hota hai us period mein. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Ulcerative Colitis mein kya khayein, kya nahi — complete list: homeopedia.in/diet/ulcerative-colitis',
  shareTextMealPlan: 'Ulcerative Colitis ke liye 4-din ka Indian diet plan: homeopedia.in/diet/ulcerative-colitis',
  shareTextPage: 'Ulcerative Colitis Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/ulcerative-colitis',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding ulcerative colitis diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ UC diet chart seeded — homeopedia.in/diet/ulcerative-colitis')
}

seed().catch(console.error)
