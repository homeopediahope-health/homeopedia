import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-gerd',
  _type: 'diet',
  title: 'GERD (Seene Ki Jalan) Diet Chart',
  hindiName: 'Seene Ki Jalan / Acid Reflux / Khatta Dakar',
  slug: { _type: 'slug', current: 'gerd' },
  relatedDiseaseSlug: 'gerd',
  category: 'Digestive',
  metaTitle: 'GERD (Seene Ki Jalan) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'GERD acid reflux diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'GERD mein lower esophageal sphincter (LES) kamzor ho jaata hai — aur kuch foods isko aur relax kar dete hain, jisse acid upar aata hai aur seene mein jalan (heartburn) hoti hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Raat ka khaana sone se kam se kam 3 ghante pehle khao', reason: 'letne pe LES aur relax hota hai, acid reflux seedha esophagus mein jaata hai' },
    { _key: 'eh2', habit: 'Ek baar mein zyada mat khao', reason: 'bada meal stomach pressure badhata hai jo acid ko upar dhakelta hai' },
    { _key: 'eh3', habit: 'Khaane ke baad seedha mat leto', reason: 'gravity ki help se acid neeche rehta hai — 30 minute walk ya seedha baithna better hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (oats)', reason: 'low acid, high fiber — stomach ko jaldi empty karta hai jisse acid backup kam hota hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'complex carb jo stomach acid ko absorb karta hai — GERD mein neutral grain hai' },
        { _key: 'i3', food: 'Jowar / Bajra roti', reason: 'maida se alkali nature ki taraf — esophagus pe kamzor effect' },
        { _key: 'i4', food: 'Poha', reason: 'light, easy to digest — stomach pe minimum pressure' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'alkaline nature ki hai — stomach acid neutralize karne mein help karta hai' },
        { _key: 'i6', food: 'Turai', reason: 'water-rich, low-fat — stomach pe pressure nahi daalta' },
        { _key: 'i7', food: 'Palak (steamed)', reason: 'alkaline, low-acid — GERD mein safe green vegetable' },
        { _key: 'i8', food: 'Gajar', reason: 'non-acidic, fiber se bhari — gut motility improve karta hai' },
        { _key: 'i9', food: 'Kheera', reason: 'cooling effect — stomach ki lining soothe karta hai' },
        { _key: 'i10', food: 'Arbi (suran)', reason: 'low-acid root vegetable — GERD patients ke liye safe' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Kela (fresh, slightly raw)', reason: 'natural antacid properties — mucosal lining protect karta hai' },
        { _key: 'i12', food: 'Seb (chila hata ke)', reason: 'low acid, pectin fiber — gut healing mein help karta hai' },
        { _key: 'i13', food: 'Papaya', reason: 'papain enzyme hota hai — digestion improve karta hai aur acid production reduce karta hai' },
        { _key: 'i14', food: 'Naashpati', reason: 'low-acid fruit — GERD mein safe hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i15', food: 'Moong dal (chheelwali, boiled)', reason: 'easily digest, low fat — stomach pe zyada acid stimulate nahi karta' },
        { _key: 'i16', food: 'Masoor dal (patli, zyada masala nahi)', reason: 'plant protein — GERD-friendly cooking mein safe' },
        { _key: 'i17', food: 'Tofu (plain)', reason: 'soya ka low-fat form — GERD mein dairy ka safer alternative' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i18', food: 'Saunf ka paani', reason: 'saunf LES muscles ko soothe karta hai — after-meal best drink hai GERD mein' },
        { _key: 'i19', food: 'Adrak chai (ek choti cup)', reason: 'anti-inflammatory — stomach emptying improve karta hai' },
        { _key: 'i20', food: 'Nariyal paani', reason: 'alkaline nature — acid ko neutralize karta hai' },
        { _key: 'i21', food: 'Jeera', reason: 'digestive enzyme stimulate karta hai — acid production regulate hoti hai' },
        { _key: 'i22', food: 'Desi ghee (thoda, khaane mein)', reason: 'mucosal lining coat karta hai — plain butter se better hai GERD mein' },
        { _key: 'i23', food: 'Sarson ka tel ya til ka tel (kam matra mein)', reason: 'heavy fats se better hai GERD ke liye' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Chicken (boiled ya grilled, bina skin)', reason: 'lean protein hai — fat kam hone se LES pe pressure nahi' },
    { _key: 'nva2', food: 'Surmai / Rohu / Katla machhi (grilled ya steamed)', reason: 'omega-3 fats — inflammation kam karta hai, heavy fat nahi' },
    { _key: 'nva3', food: '2 ande (boiled ya scrambled bina butter ke)', reason: 'protein ke liye safe option GERD mein' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / chicken pakoda', reason: 'frying mein trans fat — LES ko directly relax karta hai, acid zyada' },
    { _key: 'nvav2', food: 'Red meat (mutton, beef)', reason: 'high saturated fat — stomach emptying slow karta hai, acid zyada banata hai' },
    { _key: 'nvav3', food: 'Seekh kabab / tandoori (masaledar)', reason: 'charred meat + heavy spices — esophagus irritation double hoti hai' },
    { _key: 'nvav4', food: 'Processed meat (sausage, packaged chicken salami)', reason: 'preservatives + high fat — GERD ka strong trigger' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida / white bread / pav', reason: 'slow digestion hoti hai — stomach zyada der full rehta hai — acid zyada banata hai' },
        { _key: 'ri2', food: 'Pizza / burger', reason: 'maida + cheese + tomato sauce — teen GERD triggers ek saath' },
        { _key: 'ri3', food: 'Biscuits (packaged)', reason: 'maida + refined oil — stomach mein acid secretion badhate hain' },
        { _key: 'ri4', food: 'Instant noodles', reason: 'maida + high sodium + preservatives — mucosal lining irritate karte hain' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri5', food: 'Full-fat doodh (garam ya thanda)', reason: 'initially soothing lagta hai lekin fat LES relax karta hai — acid bounce back hota hai' },
        { _key: 'ri6', food: 'Paneer (zyada matra mein)', reason: 'high fat dairy — gastric acid production badhata hai' },
        { _key: 'ri7', food: 'Ice cream', reason: 'high fat + cold + sugar — LES pe compound effect hota hai' },
        { _key: 'ri8', food: 'Cream / butter (zyada)', reason: 'high saturated fat — stomach emptying slow karta hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Khatta aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri9', food: 'Imli / aamchur / khatta', reason: 'pH directly acidic — esophagus mein already inflamed tissue ko aur irritate karta hai' },
        { _key: 'ri10', food: 'Tamatar (kaccha ya sauce)', reason: 'naturally high acid — reflux badhata hai' },
        { _key: 'ri11', food: 'Teekha (lal mirch zyada)', reason: 'capsaicin LES ko relax karta hai — direct trigger hai' },
        { _key: 'ri12', food: 'Fried samosa / pakoda', reason: 'deep frying fat — stomach pressure + slow digestion — double trigger' },
        { _key: 'ri13', food: 'Chocolate', reason: 'theobromine hota hai — ye LES muscles ko relax karta hai — known GERD trigger hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri14', food: 'Coffee (3+ cups ya khaali pet)', reason: 'caffeine + acid — LES relaxation + acid secretion dono badhata hai' },
        { _key: 'ri15', food: 'Chai (zyada baar, strong)', reason: 'tannins + caffeine — multiple cups GERD symptoms worsen karte hain' },
        { _key: 'ri16', food: 'Cold drinks / soda', reason: 'carbonation stomach mein pressure badhata hai — acid ko upar dhakelta hai' },
        { _key: 'ri17', food: 'Alcohol', reason: 'LES ko directly relax karta hai — saath mein acid secretion bhi badhata hai' },
        { _key: 'ri18', food: 'Orange juice / Nimbu paani', reason: 'citric acid — already irritated esophagus mein seedha jalte hain' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Ek glass normal temperature paani (thanda ya bahut garam nahi)', 'Saunf ka paani (raat bhar bheega hua) — sone ke baad reflux soothe karta hai'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya (vegetables ke saath, bina zyada masala) + ek kela', 'Poha (light, kam tel) + saunf chai'], nonVegOption: '2 boiled ande + 1 brown rice roti + saunf chai' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb (chila hata ke) ya papaya ke slice', 'Mutthi bhar bhuna chana (namak kam)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 roti (jowar ya gehun) + moong dal + lauki/turai sabzi + kheera salad', 'Brown rice + masoor dal (patli) + palak sabzi (steamed)'], nonVegOption: 'Grilled chicken ya steamed machhi + 2 roti + sabzi (bina tamatar)' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Saunf chai (ek choti cup) + 4-5 akhrot', 'Nariyal paani + makhana (roasted, bina zyada namak)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + gajar/arbi sabzi + moong dal', 'Khichdi (moong dal + chawal, halki) + thoda ghee'], nonVegOption: 'Boiled chicken soup (bina cream, bina tamatar) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Ek chammach saunf chaba lo — esophageal lining soothe karta hai', 'Thoda garam paani — abhi kuch khaana mat — pet se thoda khali rehna chahiye'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Saunf paani',
      vegNashta: 'Daliya + kela',
      vegDopahar: 'Jowar roti + moong dal + lauki sabzi + kheera',
      vegShaam: 'Seb + bhuna chana',
      vegRaat: 'Moong dal khichdi + ghee',
      nonVegNashta: '2 boiled ande + brown roti + saunf chai',
      nonVegDopahar: 'Grilled chicken + 2 roti + lauki sabzi',
      nonVegRaat: 'Chicken soup (bina cream, bina tamatar) + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Normal temperature paani',
      vegNashta: 'Poha (kam tel) + saunf chai',
      vegDopahar: 'Brown rice + masoor dal + palak sabzi (steamed)',
      vegShaam: 'Nariyal paani + makhana',
      vegRaat: '2 roti + gajar sabzi + moong dal',
      nonVegNashta: 'Poha (kam tel) + saunf chai',
      nonVegDopahar: 'Steamed rohu + brown rice + sabzi (bina tamatar)',
      nonVegRaat: '2 roti + gajar sabzi + dal',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Saunf paani',
      vegNashta: 'Moong dal chilla + pudina chutney (imli nahi)',
      vegDopahar: '2 roti + arbi sabzi + moong dal',
      vegShaam: 'Akhrot 4-5 + adrak chai (ek cup)',
      vegRaat: 'Masoor dal khichdi + lauki sabzi',
      nonVegNashta: '2 boiled ande + poha',
      nonVegDopahar: '2 roti + arbi sabzi + moong dal',
      nonVegRaat: 'Masoor dal khichdi + lauki sabzi',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Normal temperature paani',
      vegNashta: 'Daliya + papaya slice',
      vegDopahar: 'Jowar roti + turai sabzi + masoor dal',
      vegShaam: 'Kela + saunf paani',
      vegRaat: '2 roti + palak sabzi + moong dal',
      nonVegNashta: 'Daliya + papaya slice',
      nonVegDopahar: 'Grilled surmai + 2 roti + turai sabzi',
      nonVegRaat: '2 roti + palak sabzi + masoor dal',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Seene Mein Jalan Bahut Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, daliya ya sada brown rice khao — sab light rakho',
        'Tamatar, imli, chai, coffee, teekha — sab band — normally allowed items bhi avoid karo us din',
        'Chhote chhote meals — 4-5 baar thoda thoda — ek baar mein zyada pet mat bhar',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (bina imli, bina zyada til tel) — GERD mein safe vrat option hai',
        'Singhara atta ki roti + lauki ki sabzi — light, non-acidic vrat option',
        'Vrat mein khaali pet zyada der mat raho — GERD mein khaali pet acid zyada banta hai — har 3-4 ghante mein kuch khao',
        'Nimbu paani aur sharbat avoid karo vrat mein — citric acid reflux badhata hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal, roti, plain rice, steamed sabzi — ye order karo — gravies mein tomato/cream hoti hai avoid karo',
        '"Gravy alag de do" — dhabe pe ye keh sakte ho — dry sabzi safer hoti hai GERD mein',
        'Khana khaane ke baad chai mat lo immediately — 30-40 minute baad lo aur sirf ek cup',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, plain namak biscuit (maida nahi), kela, akhrot — ek dabba rakho bag mein',
        'Train/flight mein: plain rice ya dal available ho toh le lo — masaledar thali avoid karo',
      ],
    },
  ],

  proTip: 'Raat ko sone se pehle apne bed ka sir wala hissa 6-8 inch uthao — extra pillow se nahi, bed ke neeche kuch rakh do — gravity se acid neeche rehta hai aur neend mein reflux nahi hota. Ye ek simple change hai jo medicine se pehle try kar sakte hain.',
  importantNote: 'Ye chart ek general guide hai — GERD ke symptoms aur triggers har patient mein alag hote hain. Apni specific condition aur medicines ke hisaab se apne homoeopath ya doctor se personalized plan banwayein.',
  homeopathyDiet: 'Sahi diet se stomach ka acid environment stabilize hota hai — iske baad homoeopathic medicines LES ko strengthen karne mein aur behtar kaam karti hain. Diet aur treatment saath chalenge toh healing faster hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'GERD mein chai peena theek hai kya?',
      answer: 'Ek cup adrak chai subah — allowed hai, lekin zyada nahi.\nChai mein caffeine aur tannins hote hain jo LES ko relax karte hain aur acid secretion badhate hain.\n2-3 cup daily ya khaali pet chai — ye problem create karta hai.\nBest option: saunf chai ya plain garam paani — caffeine-free, gut-friendly.\nAgar chai chorh nahi sakte — sirf ek cup, khaane ke saath ya baad mein, khaali pet bilkul nahi.',
    },
    {
      _key: 'faq2',
      question: 'GERD mein kela khana chahiye ya nahi?',
      answer: 'Haan — fresh kela GERD mein allowed hai.\nKela alkaline nature ka hota hai — stomach acid neutralize karne mein help karta hai aur esophageal lining protect karta hai.\nLekin bahut pakka hua (overripe/kaala) kela mat khao — usme tyramine badhta hai aur kuch logo mein reflux worse hota hai.\nFresh, slightly raw kela — subah ke nashte mein ya mid-morning snack mein best hai.',
    },
    {
      _key: 'faq3',
      question: 'GERD mein chawal khana theek hai?',
      answer: 'Haan — brown rice ya plain white rice GERD mein safe hai.\nChawal low-fat, non-acidic grain hai — stomach pe extra pressure nahi dalta.\nAvoid karo: masaledar biryani, fried rice — rice nahi, cooking style trigger hai.\nPlain khichdi ya steamed rice with dal — GERD ke liye ek best meal option hai.',
    },
    {
      _key: 'faq4',
      question: 'Diet se GERD mein kitne din mein fark dikhta hai?',
      answer: 'Trigger foods completely avoid karne ke 2-3 hafte mein clearly fark dikhna shuru ho jaata hai.\nHeartburn ki frequency aur severity dono kam hoti hain jab trigger foods consistently avoid karo.\nEk-do din mein fully theek nahi hoga — esophagus ki healing time lagti hai.\nDiet ke saath treatment bhi chalti rahe toh 4-6 hafte mein substantial improvement hoti hai.\nApne doctor se regular checkup maintain karo.',
    },
    {
      _key: 'faq5',
      question: 'GERD mein vrat/fast kar sakte hain?',
      answer: 'Kar sakte hain, lekin khaali pet zyada der mat raho — ye GERD mein risky hai.\nKhaali pet mein acid ka koi buffer nahi hota — reflux worse ho jaata hai.\nVrat mein har 3-4 ghante mein kuch khao — sabudana, singhara roti, kela, makhana — safe options hain.\nNirjala (pani bhi nahi) vrat GERD mein strongly avoid karo — apne doctor se pehle baat karo.\nNimbu, imli wale vrat drinks avoid karo completely.',
    },
    {
      _key: 'faq6',
      question: 'GERD mein dahi khana chahiye ya nahi?',
      answer: 'Ghar ka fresh bana dahi (ek choti katori, room temperature) — allowed hai.\nFresh dahi mein probiotics hote hain jo gut bacteria balance karte hain — GERD mein helpful hai.\nLekin thanda dahi, packaged set dahi, ya raat ko dahi — avoid karo.\nCold dairy LES pe compound effect karta hai — raat mein dahi digestion slow hoti hai.\nRule: Ghar ka, fresh, room temperature, dopahar mein — sirf tab allowed hai.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific homoeopathic medicines ke saath strong smell — coffee, camphor, raw onion — avoid karne ki salah di jaati hai.\nYe restriction medicine-specific hoti hai — sabse nahi.\nApne doctor se seedha poochho ki aapki specific medicine ke saath kya avoid karna hai.\nGenerally GERD ke liye jo diet chart hai — wo hi follow karo — medicine restriction usse alag hogi.\nGeneralized restriction mat manao bina doctor se poochhe.',
    },
    {
      _key: 'faq8',
      question: 'GERD mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band nahi karna — lekin cooking method bahut matter karta hai.\nBoiled ya grilled chicken, steamed ya grilled machhi — allowed hain.\nFried, masaledar, red meat — avoid karo.\nNon-veg mein fat content directly LES ko relax karta hai — isliye lean protein choose karo.\nWeek mein 3-4 baar tak allowed — agar grilled/boiled ho aur bina heavy masale ke.',
    },
    {
      _key: 'faq9',
      question: 'GERD mein coffee bilkul band karni padegi?',
      answer: 'Bilkul band zaroor nahi — lekin quantity aur timing matter karta hai.\n1 cup subah khaane ke saath — bahut log tolerate kar lete hain.\nKhaali pet coffee, 3+ cups daily, ya raat ko coffee — ye GERD ka strong trigger hai.\nCaffeine LES ko relax karta hai aur acid secretion badhata hai — dono mein problem hai.\nAgar symptoms zyada hain — trial ke liye 2 hafte band karo aur dekho — fark clearly pata chalega.',
    },
    {
      _key: 'faq10',
      question: 'GERD mein aam, santara aur citrus fruits allowed hain?',
      answer: 'Nahi — citrus fruits GERD mein avoid karna chahiye.\nSantara, nimbu, aam (kacha), angoor — sabka pH low (acidic) hota hai.\nAlready inflamed esophagus pe ye directly aur jalte hain — symptoms worse hote hain.\nPaka hua meetha aam — chhoti matra mein kuch log tolerate karte hain, lekin trial carefully karo.\nSafe fruits: kela, papaya, seb, naashpati — inhe prefer karo.',
    },
    {
      _key: 'faq11',
      question: 'GERD mein pet bhar ke khaana theek hai kya?',
      answer: 'Nahi — ye GERD ka sabse bada dietary trigger hai.\nBada meal stomach pressure badhata hai — ye pressure LES ke upar aata hai aur acid upar dhakelta hai.\nBetter approach: 3 bade meals ki jagah 4-5 chhote meals khao.\nHar meal mein thoda jagah rakho — "90% pet bhara" feel aane pe rok lo.\nYe ek change hai jo medicines ke saath bahut effective hoti hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Taraszewska A — Risk factors for gastroesophageal reflux disease symptoms related to lifestyle and diet — Roczniki Panstwowego Zakladu Higieny', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/33882662' },
    { _key: 's2', name: 'Fox M, Gyawali CP — Dietary factors involved in GERD management — Best Practice & Research Clinical Gastroenterology', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37094911' },
    { _key: 's3', name: 'Tosetti C, Savarino E et al — Elimination of Dietary Triggers Is Successful in Treating Symptoms of Gastroesophageal Reflux Disease — Digestive Diseases and Sciences', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32578044' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Raat ko bhari thali khana aur fauran so jaana — acid reflux raat mein sabse zyada hota hai isliye',
    mustEat: 'Saunf — khaane ke baad saunf chaba lo ya saunf paani piyo — natural LES soother hai, zero side effect',
    mustAvoid: 'Tomato-based sauces / tamatar ki gravy — highly acidic hai aur GERD ka consistent trigger hai',
  },

  doctorNote: 'Maine notice kiya hai ki GERD patients mein jo log sirf raat ka khaana 3 ghante pehle kha lete hain aur bed ka sir thoda uthate hain — unka reflux episode dramatically kam hota hai homeopathic treatment ke saath — bina ye do changes ke medicines ka response bahut dheema hota hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'GERD mein kya khayein, kya nahi — complete list: homeopedia.in/diet/gerd',
  shareTextMealPlan: 'GERD ke liye 4-din ka Indian diet plan: homeopedia.in/diet/gerd',
  shareTextPage: 'GERD Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/gerd',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding GERD diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ GERD diet chart seeded — homeopedia.in/diet/gerd')
}

seed().catch(console.error)
