import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-hyperthyroidism',
  _type: 'diet',
  title: 'Hyperthyroidism (Badhta Thyroid) Diet Chart',
  hindiName: 'Badhta Thyroid / Thyroid Adhikta',
  slug: { _type: 'slug', current: 'hyperthyroidism' },
  relatedDiseaseSlug: 'hyperthyroidism',
  category: 'Endocrine',
  metaTitle: 'Hyperthyroidism Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Hyperthyroidism (badhta thyroid) diet chart — green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Hyperthyroidism mein thyroid gland zyada T3/T4 hormone banata hai — aur kuch foods is overproduction ko aur badha dete hain jabki kuch foods metabolism ko stabilize karne mein help karte hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Har 3-4 ghante mein kuch khao', reason: 'hyperthyroidism mein metabolism fast hoti hai jo blood sugar crash karta hai aur symptoms badh jaate hain' },
    { _key: 'eh2', habit: 'Raat ka khaana 7 baje tak khatam karo', reason: 'thyroid hormones raat mein bhi overactive rehte hain — heavy late dinner se neend aur heart rate dono affect hoti hai' },
    { _key: 'eh3', habit: 'Iodine-heavy foods ek saath mat khao', reason: 'ek meal mein zyada iodine thyroid stimulation aur badha deta hai — spread out karo ya avoid karo jab symptoms zyada hon' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'slowly digest hota hai — blood sugar stable rakhta hai jo hyperthyroid metabolism mein zaroori hai' },
        { _key: 'i2', food: 'Roti (gehu ki)', reason: 'complex carb — fast thyroid metabolism ke liye sustained energy deta hai bina iodine ke' },
        { _key: 'i3', food: 'Poha', reason: 'light, easily digestible — fast metabolic rate ke baad bhi gut pe load nahi dalta' },
        { _key: 'i4', food: 'Brown rice (limited)', reason: 'fiber-rich — thyroid-related gut motility fast hone pe bhi regulated digestion maintain karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'gut ki sujan kam karta hai — hyperthyroid patients mein frequent loose motions ko calm karta hai' },
        { _key: 'i6', food: 'Turai', reason: 'water content high — hyperthyroidism mein sweating se lost minerals replenish karta hai' },
        { _key: 'i7', food: 'Karela', reason: 'blood sugar regulate karta hai jo fast metabolism se dysregulate hoti hai hyperthyroidism mein' },
        { _key: 'i8', food: 'Palak (pakaya hua)', reason: 'calcium aur iron dono — hyperthyroid mein bones calcium fast lose karti hain — cooked form mein oxalate reduce hota hai — better absorption' },
        { _key: 'i9', food: 'Methi (cooked)', reason: 'thyroid pe direct excess iodine load nahi — blood sugar stabilize karta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Seb (apple)', reason: 'antioxidants thyroid gland ke oxidative stress se protect karte hain — iodine low hai' },
        { _key: 'i11', food: 'Nar (pomegranate)', reason: 'anti-inflammatory — hyperthyroid mein jo systemic inflammation hoti hai usse help karta hai' },
        { _key: 'i12', food: 'Papaya', reason: 'digestive enzymes — hyperthyroid mein fast gut motility ko regulate karne mein help karta hai' },
        { _key: 'i13', food: 'Naashpati (pear)', reason: 'low iodine fruit — safe energy source bina thyroid stimulation ke' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal (chilke wali)', reason: 'easily digestible protein — fast metabolism mein muscle breakdown rokne ke liye zaroori' },
        { _key: 'i15', food: 'Masoor dal', reason: 'iron-rich — hyperthyroidism mein anemia ka risk hota hai — ye combat karta hai' },
        { _key: 'i16', food: 'Chana (boiled / bhuna)', reason: 'plant protein + fiber — thyroid ke overactivity se accelerated protein catabolism ko counter karta hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i17', food: 'Tulsi chai (bina sugar)', reason: 'adaptogenic — cortisol aur thyroid overactivation dono pe calming effect' },
        { _key: 'i18', food: 'Haldi + kali mirch', reason: 'curcumin thyroid gland ke autoimmune inflammation (Graves\') ko reduce karta hai — kali mirch ke saath absorption zyada hoti hai' },
        { _key: 'i19', food: 'Desi ghee (chhoti matra mein)', reason: 'fat-soluble nutrients absorb karne mein help — hyperthyroid mein fat absorption compromised hoti hai' },
        { _key: 'i20', food: 'Jeera paani (subah)', reason: 'gut motility calm karta hai — hyperthyroid mein diarrhea ya loose stools frequent hote hain' },
        { _key: 'i21', food: 'Adrak', reason: 'anti-inflammatory — thyroid-related palpitations aur nausea mein soothing effect' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Ande (boiled — 1-2)', reason: 'complete protein — fast metabolism mein muscle mass maintain karne ke liye zaroori — iodine moderate hai sirf egg white mein avoid karo agar doctor ne kaha ho' },
    { _key: 'nva2', food: 'Rohu / Katla machli (fresh water — grilled ya boiled)', reason: 'omega-3 — thyroid-related inflammation kam karta hai — freshwater fish mein sea fish se iodine significantly kam hota hai' },
    { _key: 'nva3', food: 'Chicken (boiled ya grilled — no skin)', reason: 'lean protein — hyperthyroid mein jo protein breakdown hoti hai usse address karta hai bina iodine load ke' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Samudri machli (sea fish — surmai, pomfret, bangda)', reason: 'iodine content bahut high — thyroid stimulation aur badh jaati hai hyperthyroidism mein' },
    { _key: 'nvav2', food: 'Prawns / Jhinga', reason: 'shellfish mein iodine content sabse zyada hota hai — direct thyroid trigger' },
    { _key: 'nvav3', food: 'Red meat (mutton, lamb)', reason: 'arachidonic acid — thyroid se related systemic inflammation aur badh jaati hai' },
    { _key: 'nvav4', food: 'Fried chicken / egg bhurji with butter', reason: 'trans fat + heavy cooking oil — liver pe load — jo thyroid hormone metabolism mein already stressed hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Iodine-Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Iodized namak (zyada matra mein)', reason: 'seedha thyroid hormone synthesis trigger karta hai — hyperthyroidism mein iodine reduce karna important hai' },
        { _key: 'ri2', food: 'Samudri siwaar / seaweed', reason: 'iodine content extreme hota hai — market mein sushi ya supplements mein aata hai — avoid' },
        { _key: 'ri3', food: 'Packaged chips / namkeen with iodized salt', reason: 'hidden iodine source — frequent snacking pe overall iodine load badh jata hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Stimulants aur Processed',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Chai (3+ cups daily)', reason: 'caffeine heart rate aur anxiety dono badh jaati hai jo hyperthyroid symptoms already hain' },
        { _key: 'ri5', food: 'Coffee (3+ cups daily)', reason: 'thyroid gland ko stimulate karta hai — palpitations aur tremors worsen karta hai' },
        { _key: 'ri6', food: 'Maida (white flour products — bread, biscuits, paratha)', reason: 'gut mein inflammation — thyroid autoimmunity mein leaky gut ko trigger karta hai' },
        { _key: 'ri7', food: 'Cold drinks / soda', reason: 'phosphoric acid calcium absorption block karta hai jo hyperthyroid mein already bone se calcium nikalta rehta hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Dairy (Specific)',
      emoji: '🚫',
      items: [
        { _key: 'ri8', food: 'Packaged full-fat doodh (market wala, 1L+ daily)', reason: 'iodine content significant hota hai commercially raised cattle mein — zyada quantity avoid karein [Ghar ka fresh doodh limited quantity (1 glass) mein okay hai]' },
        { _key: 'ri9', food: 'Cheese / processed dairy', reason: 'high iodine + high sodium — dono thyroid aur blood pressure pe load' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Thyroid-Stimulating Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Soya (large quantity — soya milk, tofu, soya chunks)', reason: 'isoflavones thyroid medicine ka absorption block karte hain — medicine lene ke 4 ghante ke andar completely avoid karein' },
        { _key: 'ri11', food: 'Energy drinks', reason: 'artificial stimulants + caffeine + sugar — already fast heart rate aur metabolism ko aur badha dete hain' },
        { _key: 'ri12', food: 'Alcohol', reason: 'liver pe load — jahan thyroid hormone T4 se T3 mein convert hota hai — conversion further disturb hoti hai' },
        { _key: 'ri13', food: 'Packaged fruit juice (box/bottle wala)', reason: 'concentrated sugar — blood sugar spike — hyperthyroid mein blood sugar already unstable hoti hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + adrak ka tukda + 1/2 nimbu (bina namak)', 'Jeera paani (raat bhar bhigo ke rakha hua jeera — subah chhan ke piyo)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with lauki aur jeera tadka', 'Moong dal chilla (bina iodized namak — sendha namak use karo) + pudina chutney'], nonVegOption: '2 boiled ande + roti (sendha namak ke saath)' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya naashpati', 'Bhuna chana (unsalted ya sendha namak)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 roti + moong dal (without excess salt) + lauki sabzi', 'Brown rice (1 katori) + masoor dal + karela sabzi (light fry in ghee)'], nonVegOption: 'Grilled rohu machli + 1 roti + turai sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Tulsi chai (bina sugar) + akhrot 3-4', 'Nar ke daane (handful) + 1 glass paani'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + palak (cooked) + chana dal', 'Khichdi (moong dal + rice — sendha namak) + 1 tsp desi ghee'], nonVegOption: 'Boiled chicken (no skin) soup (sendha namak only) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm doodh (1 glass ghar ka, bina sugar) — calcium ke liye jo hyperthyroid mein bones se leach hota hai', 'Warm haldi paani (haldi + kali mirch + thoda desi ghee)'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Jeera paani',
      vegNashta: 'Daliya + lauki tadka',
      vegDopahar: '2 roti + moong dal + turai sabzi',
      vegShaam: 'Seb + akhrot',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled ande + roti',
      nonVegDopahar: 'Grilled rohu + 1 roti + turai',
      nonVegRaat: 'Chicken clear soup + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Adrak nimbu paani',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Brown rice + masoor dal + karela sabzi',
      vegShaam: 'Bhuna chana',
      vegRaat: '2 roti + palak (cooked) + dal',
      nonVegNashta: 'Egg chilla (1 anda + moong dal batter)',
      nonVegDopahar: 'Rohu + brown rice + karela',
      nonVegRaat: 'Boiled chicken + khichdi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Jeera paani',
      vegNashta: 'Poha (sendha namak) + adrak chai (1 cup)',
      vegDopahar: '2 roti + chana dal + methi sabzi',
      vegShaam: 'Naashpati + tulsi chai',
      vegRaat: 'Daliya khichdi + ghee + lauki',
      nonVegNashta: '2 boiled ande + poha',
      nonVegDopahar: 'Grilled katla + roti + methi sabzi',
      nonVegRaat: 'Chicken soup + 2 roti',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Adrak nimbu paani',
      vegNashta: 'Daliya with palak + jeera',
      vegDopahar: 'Brown rice + arhar dal + turai sabzi',
      vegShaam: 'Nar daane + akhrot',
      vegRaat: '2 roti + moong dal + karela sabzi',
      nonVegNashta: 'Egg + daliya mixed nashta',
      nonVegDopahar: 'Rohu + arhar dal + rice',
      nonVegRaat: 'Boiled chicken pieces + 2 roti + lauki',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, daliya ya moong dal soup khao — light raho — thyroid overactivity mein gut already stressed hoti hai',
        'Chai, coffee, processed kuch bhi completely band karo us din — yahan tak ki 1 cup bhi heart rate aur anxiety spike kar sakti hai jab symptoms zyada hon',
        'Sendha namak use karo normal namak ki jagah — flare up ke din iodine aur minimize karna zaroori hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (sendha namak ke saath) safe option hai — iodine low, easily digestible, instant energy',
        'Singhara atta ki roti — non-iodine grain — vrat mein safe choice for hyperthyroid patients',
        'Vrat mein farali chips, namkeen, packaged sabudana waffers avoid karein — iodized namak ya maida hoti hai inme — symptoms worsen kar sakte hain',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka ya dal fry order karo — sabse safe option — iodine low, protein decent',
        'Samudri fish dishes, prawn, shrimp completely avoid karo — restaurant mein sea food mein iodine highest hota hai',
        'Waiter se kehdo "namak kam" — restaurants mein iodized namak standard hai — less namak = less iodine load',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana (unsalted), seb, dry dates, ghar ki roti — stable snacks without iodine load',
        'Train/hotel mein: plain dal chawal order karo bina extra namak — idli sambhar bhi safe hai agar South Indian option mile (sambhar mein iodine low hota hai)',
      ],
    },
  ],

  proTip: 'Jab bhi hyperthyroid symptoms zyada hon — pehle paani piyo aur kuch khao ek ghante ke andar — khali pet se symptoms (tremors, anxiety, palpitations) tezi se worsen hote hain kyunki fast metabolism mein fuel jaldi khatam hota hai.',
  importantNote: 'Ye chart ek general guide hai — individual iodine tolerance aur medication (antithyroid drugs) ke hisaab se specific restrictions alag ho sakti hain. Apni condition ke hisaab se apne homoeopath se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Sahi diet — khaas kar iodine control aur anti-inflammatory foods — homeopathic treatment ko better respond karne mein help karti hai kyunki thyroid gland less stimulated hoti hai aur medicines apna kaam zyada effectively kar paati hain.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya hyperthyroidism mein dahi khana theek hai?',
      answer: 'Haan — ghar ka fresh bana dahi (1 small katori) allowed hai, lekin packaged / market wala set dahi avoid karna better hai.\nGhar ka fresh dahi mein iodine level natural aur low hota hai.\nPackaged dairy mein commercially raised cattle ke iodine-rich feed ki wajah se iodine zyada hoti hai.\nZyada quantity (2-3 katori daily) se iodine load badh sakta hai jo thyroid stimulation aur trigger karta hai.\nApne doctor se poochh lein agar antithyroid medication pe hain.',
    },
    {
      _key: 'faq2',
      question: 'Kya hyperthyroidism mein chawal khana band karna padega?',
      answer: 'Nahi — chawal band karne ki zaroorat nahi.\nWhite rice mein iodine negligible hota hai — ye hyperthyroid mein direct problem nahi hai.\nHaan, portion control zaroori hai — hyperthyroid mein blood sugar fast swing karti hai — zyada rice ek saath blood sugar spike karta hai.\nBrown rice better option hai kyunki fiber se blood sugar stable rehti hai.\nLimited quantity mein (1 katori dopahar mein) white rice bhi theek hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se hyperthyroidism mein kitne din mein fark dikhta hai?',
      answer: 'Diet akele hyperthyroidism theek nahi karta — ye medical treatment ka support hai.\nIodine control shuru karne ke 2-4 hafte mein kuch patients mein symptoms (palpitations, anxiety, sweating) slightly stable hone lagte hain.\nDiet ka sabse bada role hai ki medicine zyada effectively kaam kare — aur symptoms jaldi worsen na hon.\nExact timeline apni disease severity aur treatment pe depend karta hai — doctor se guidance lein.',
    },
    {
      _key: 'faq4',
      question: 'Hyperthyroidism mein chai peena theek hai?',
      answer: '1 cup subah — theek hai.\nLekin 3+ cups daily bilkul avoid karo.\nCaffeine heart rate badhata hai jo hyperthyroidism mein already elevated hoti hai — tachycardia ka risk aur bad ho sakta hai.\nAnxiety aur tremors bhi worsen hote hain zyada chai se.\nBetter substitute: Tulsi chai (caffeine-free), adrak paani, ya jeera paani — ye thyroid symptoms soothe karte hain caffeine ka burden add kiye bina.',
    },
    {
      _key: 'faq5',
      question: 'Hyperthyroidism mein vrat / fast karna safe hai?',
      answer: 'Short vrat (ek din) — careful approach se possible hai.\nLekin khali pet zyada der mat raho — hyperthyroid mein fast metabolism se blood sugar rapidly girta hai jo severe weakness, palpitations aur diziness la sakta hai.\nAgar vrat karo — sabudana, singhara atta, dry fruits, paani — regular intervals pe lete raho.\nNirjala vrat (water fast) hyperthyroidism mein risky hai — doctor se pehle poochh lein.\nLong fasting avoid karein jab symptoms active hon.',
    },
    {
      _key: 'faq6',
      question: 'Kya hyperthyroidism mein regular namak band karna padega?',
      answer: 'Regular iodized namak completely band karna zaroori nahi — lekin reduce karna beneficial hai.\nSendha namak (rock salt) ya non-iodized namak ek option hai agar doctor recommend kare — iodine load minimize hota hai.\nSabse zyada iodine problem namak se nahi — sea fish, packaged dairy, aur processed foods se aati hai.\nNamak ka focus karo — excess avoid karo — completely band karna zyada alag nahi karega jab tak baki high-iodine foods na chhodein.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch common restrictions hain jo Dr. Shadab Khan bhi recommend karte hain:\nCoffee aur strong smell wale foods (lahsun, piyaaz raw) — kuch homeopathic medicines ke saath 30-60 min ka gap rakhna better hai.\nYe restriction sabhi medicines pe apply nahi hoti — apni specific medicine ke baare mein apne doctor se poochhna zaroori hai.\nHyperthyroidism ke context mein iodine-rich foods ka avoidance already helpful hai treatment ke liye — ye medicine-specific nahi balki disease-specific hai.',
    },
    {
      _key: 'faq8',
      question: 'Hyperthyroidism mein non-veg khana chahiye ya band karna padega?',
      answer: 'Completely band karne ki zaroorat nahi — lekin selective hona zaroori hai.\nFreshwater fish (rohu, katla) — allowed — iodine low, omega-3 inflammation reduce karta hai.\nBoiled/grilled chicken — allowed — lean protein helpful hai.\nSea fish (surmai, pomfret), prawns, shellfish — avoid karein — iodine content bahut high hota hai.\nEgg (boiled) — limited quantity mein okay, agar doctor ne restrict nahi kiya.\nRed meat (mutton) — avoid karna better hai — inflammation badhata hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya hyperthyroidism mein soya ya tofu khana theek hai?',
      answer: 'Soya food form mein (soya chunks, tofu) limited quantity mein — theek hai.\nLekin ek zaroori rule hai: antithyroid medication aur soya ke beech minimum 4 ghante ka gap rakho.\nSoya mein isoflavones hote hain jo thyroid medicine ka gut mein absorption block kar sakte hain agar ek saath khao.\nSoya supplements ya soya protein powder — completely avoid karein — concentrated form mein effect zyada hota hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya hyperthyroidism mein kela khana allowed hai?',
      answer: 'Haan — kela allowed hai.\nKele mein iodine negligible hota hai — ye direct thyroid trigger nahi hai.\nPotassium aur quick energy ke liye helpful hai — jo hyperthyroid mein fast metabolism ki wajah se quickly consume hoti hai.\nOverripe / bahut pakka kela zyada sugar deta hai — blood sugar spike possible hai — fresh slightly raw kela prefer karo.\n1-2 kele daily — theek hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Guastamacchia E, Giagulli VA, Licchelli B, Triggiani V — Selenium and Iodine in Autoimmune Thyroiditis — Endocrine, Metabolic & Immune Disorders Drug Targets', year: '2015', url: 'https://pubmed.ncbi.nlm.nih.gov/26088475' },
    { _key: 's2', name: 'Le Moli R et al — Mediterranean diet, selenium and Graves\' ophthalmopathy: a prospective, randomized, single-center study — Endocrine', year: '2025', url: 'https://pubmed.ncbi.nlm.nih.gov/40707809' },
    { _key: 's3', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Sea fish (samudri machli) ya prawns regularly khaate rehna — patients ko pata nahi hota ki ye iodine ka sabse bada source hai jo thyroid ko directly stimulate karta hai',
    mustEat: 'Tulsi chai (caffeine-free herbal) — thyroid symptoms (palpitations, anxiety) ko calm karta hai bina stimulant load ke — aur adaptogenic properties hain',
    mustAvoid: 'Samudri machli (sea fish) aur seafood — iodine content hyperthyroidism mein thyroid stimulation ko directly badha deta hai — ye ek food avoid karne se significant difference hota hai',
  },

  doctorNote: 'Mere hyperthyroidism patients mein maine notice kiya hai ki jo log sea fish, packaged dairy aur coffee teeno ek saath chodh dete hain unka treatment response clearly faster hota hai compared to jo sirf ek ya do cheez chodh te hain — combination effect real hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Hyperthyroidism mein kya khayein, kya nahi — complete list: homeopedia.in/diet/hyperthyroidism',
  shareTextMealPlan: 'Hyperthyroidism ke liye 4-din ka Indian diet plan: homeopedia.in/diet/hyperthyroidism',
  shareTextPage: 'Hyperthyroidism Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/hyperthyroidism',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Hyperthyroidism diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Hyperthyroidism diet chart seeded — homeopedia.in/diet/hyperthyroidism')
}

seed().catch(console.error)
