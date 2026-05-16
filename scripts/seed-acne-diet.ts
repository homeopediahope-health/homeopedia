import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-acne',
  _type: 'diet',
  title: 'Acne (Muhase) Diet Chart',
  hindiName: 'Muhase / Pimples / Daane',
  slug: { _type: 'slug', current: 'acne' },
  relatedDiseaseSlug: 'acne',
  category: 'Skin',
  metaTitle: 'Acne (Muhase) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Acne (muhase) diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Acne mein high glycemic index foods body mein insulin spike karte hain — jo sebum overproduction aur skin inflammation directly trigger karta hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah khaali pet 2 glass paani piyo', reason: 'gut toxins flush hote hain jo acne ka ek hidden root cause hai' },
    { _key: 'eh2', habit: 'Har 3-4 ghante mein kuch khao', reason: 'blood sugar stable rakho kyunki spike = insulin surge = sebum zyada' },
    { _key: 'eh3', habit: 'Raat 8 baje ke baad heavy ya meetha khaana avoid karo', reason: 'raat mein insulin response slow hoti hai, acne trigger badhta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'low glycemic index, insulin spike nahi karta — acne ka sabse bada dietary trigger control hota hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'white rice se lower GI, sebum production kam control karta hai' },
        { _key: 'i3', food: 'Jowar / bajra roti', reason: 'maida ki jagah — gut health better hoti hai, skin clear hone mein help karta hai' },
        { _key: 'i4', food: 'Oats (regular, packaged nahi)', reason: 'zinc aur fiber dono hain — acne-causing bacteria se gut defend karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Karela', reason: 'blood sugar regulate karta hai jo directly sebum overproduction rokta hai' },
        { _key: 'i6', food: 'Palak', reason: 'Vitamin A hota hai — skin cell turnover better hota hai, pores clog nahi hote' },
        { _key: 'i7', food: 'Lauki', reason: 'gut cooling karta hai — inflammation kam hoti hai jo acne ko internally feed karti hai' },
        { _key: 'i8', food: 'Turai / ghia', reason: 'low carb, gut detox mein help — acne prone skin ke liye safe sabzi' },
        { _key: 'i9', food: 'Gajar', reason: 'beta-carotene se Vitamin A milta hai — skin repair ke liye acne mein specifically important hai' },
        { _key: 'i10', food: 'Methi (leaves / seeds dono)', reason: 'blood sugar control + antibacterial properties — acne ka dual benefit' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Papaya', reason: 'papain enzyme hota hai jo dead skin cells digest karta hai — pores se andar wali sujan kam hoti hai' },
        { _key: 'i12', food: 'Seb (apple)', reason: 'quercetin aur fiber dono — gut microbiome balance karta hai jo skin pe reflect hota hai' },
        { _key: 'i13', food: 'Amla', reason: 'Vitamin C concentrated form mein — collagen production aur skin healing acne mein fast hoti hai' },
        { _key: 'i14', food: 'Anar (pomegranate)', reason: 'antioxidants acne ki post-inflammatory redness aur hyperpigmentation dono pe kaam karte hain' },
        { _key: 'i15', food: 'Naashpati (pear)', reason: 'low GI fruit — acne-safe, gut friendly — safe snack option hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chilka wali)', reason: 'low GI, easily digestible — gut pe stress nahi — liver clear = skin clear' },
        { _key: 'i17', food: 'Masoor dal', reason: 'zinc naturally hota hai — zinc deficiency acne severity se directly linked hai' },
        { _key: 'i18', food: 'Chana (bhuna hua)', reason: 'high fiber + low GI — insulin spike nahi, acne trigger avoid hota hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i19', food: 'Spearmint chai', reason: 'androgen levels kam karta hai — hormonal acne (especially females mein) pe directly kaam karta hai — subah ek cup regular le sakte hain' },
        { _key: 'i20', food: 'Haldi + kali mirch', reason: 'curcumin skin inflammation reduce karta hai, piperine absorption 20x badhata hai — dono saath lena zaroori' },
        { _key: 'i21', food: 'Jeera paani', reason: 'gut detox aur digestion better hoti hai — jo acne ka indirect trigger clear karta hai' },
        { _key: 'i22', food: 'Adrak (fresh)', reason: 'anti-inflammatory, insulin sensitizing — acne-prone gut ke liye safe + beneficial' },
        { _key: 'i23', food: 'Til ka tel (cooking mein)', reason: 'omega-6 balanced form mein — skin barrier support karta hai' },
        { _key: 'i24', food: 'Sarson ka tel (cooking mein limited)', reason: 'Vitamin E hota hai — skin healing support, deep frying mein use mat karo' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Eggs (boiled, 1-2 per day)', reason: 'Vitamin A aur zinc dono hain — acne healing ke liye specifically important nutrients' },
    { _key: 'nva2', food: 'Rohu / Katla (grilled ya steam)', reason: 'omega-3 fatty acids skin inflammation suppress karte hain — acne mein evidence-based benefit hai' },
    { _key: 'nva3', food: 'Chicken (boiled ya grilled only)', reason: 'lean protein, no sebum-triggering saturated fat — acne safe option' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Packaged / full fat cow milk', reason: 'whey protein IGF-1 (insulin-like growth factor) badhata hai — directly acne sebum trigger karta hai' },
    { _key: 'nvav2', food: 'Fried egg / bhurji with oil', reason: 'cooking method se inflammatory load badhta hai — acne flare ho sakta hai' },
    { _key: 'nvav3', food: 'Fried chicken / pakoda', reason: 'trans fat + high heat oil prostaglandin production badhata hai — skin inflammation' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour) — bread, bun, pav, noodles', reason: 'high GI food — insulin spike karta hai jo sebum production directly trigger karta hai — acne ka #1 dietary enemy' },
        { _key: 'ri2', food: 'Packaged biscuits / namkeen', reason: 'maida + trans fat combo — double hit — inflammation aur sebum dono badhte hain' },
        { _key: 'ri3', food: 'Instant noodles / Maggi', reason: 'maida + sodium overload — gut dysbiosis badhata hai jo acne se connected hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged / full fat doodh', reason: 'whey protein IGF-1 raise karta hai — multiple studies mein acne worsening confirm hua hai (ghar ka fresh dahi alag hai — woh allowed hai)' },
        { _key: 'ri5', food: 'Packaged / market set dahi', reason: 'preservatives + added culture — tyramine aur inflammatory compounds zyada — ghar ka fresh dahi green list mein allowed hai' },
        { _key: 'ri6', food: 'Paneer (market wala)', reason: 'full fat dairy, IGF-1 pathway trigger — regular use acne prone skin mein avoid better' },
        { _key: 'ri7', food: 'Cheese / processed dairy', reason: 'sodium + saturated fat + dairy triple trigger — acne mein clearly avoid karein' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri8', food: 'Refined sugar (mithai, cold drinks, juice packets)', reason: 'high GI — insulin surge = sebaceous gland hyperactivity' },
        { _key: 'ri9', food: 'Fried foods (samosa, pakoda, poori)', reason: 'trans fat skin inflammation badhata hai, gut microbiome disrupt karta hai' },
        { _key: 'ri10', food: 'Dark chocolate (packaged / sweetened)', reason: 'cocoa + milk + sugar combination — acne association studies mein confirmed — 80%+ dark chocolate small quantity mein less evidence of harm lekin safer hai avoid karna' },
        { _key: 'ri11', food: 'Jaggery / gud', reason: 'natural hai lekin high GI — insulin spike white sugar jitna hi karta hai — acne mein avoid' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri12', food: 'Cold drinks / soda', reason: 'refined sugar + carbonic acid — gut microbiome disrupt karta hai — acne trigger badhata hai' },
        { _key: 'ri13', food: 'Packaged fruit juice', reason: 'fiber nikla hua, sugar concentrated — high GI effect same as refined sugar — avoid karein' },
        { _key: 'ri14', food: 'Chai (3+ cups daily)', reason: '1 cup theek hai — zyada caffeine cortisol raise karta hai — cortisol = hormonal acne trigger' },
        { _key: 'ri15', food: 'Energy drinks', reason: 'caffeine + sugar combo — cortisol aur insulin dono badhate hain — acne prone skin ke liye worst' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['2 glass lukewarm paani + nimbu (no sugar)', 'Jeera paani (raat bhar bhigo ke subah piye)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with vegetables (lauki / palak)', 'Moong dal chilla (2 pcs) + hari chutney'], nonVegOption: '2 boiled eggs + 1 jowar roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seasonal fruit (seb / anar / naashpati)', 'Bhuna chana (handful, packaged chips nahi)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal + gajar-palak sabzi', 'Brown rice + masoor dal + lauki sabzi + kheera salad'], nonVegOption: '1 roti + grilled fish (rohu/katla) + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Spearmint chai (1 cup, no sugar) + 4-5 akhrot', 'Haldi + kali mirch wala garam paani'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + arhar dal + palak sabzi', 'Moong dal khichdi (light) + ghee 1 tsp'], nonVegOption: 'Chicken soup (no cream, no butter) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Haldi doodh (plant milk — almond / oat — ghar ka banaya)', 'Warm jeera paani (gut settle hota hai)'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Nimbu paani (no sugar)',
      vegNashta: 'Daliya + lauki sabzi',
      vegDopahar: 'Jowar roti + moong dal + gajar sabzi',
      vegShaam: 'Seb + bhuna chana',
      vegRaat: 'Brown rice + masoor dal + palak',
      nonVegNashta: '2 boiled eggs + 1 jowar roti',
      nonVegDopahar: 'Grilled rohu + 1 roti + gajar sabzi',
      nonVegRaat: 'Chicken soup (no cream) + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Jeera paani',
      vegNashta: 'Moong dal chilla (2) + hari chutney',
      vegDopahar: '2 bajra roti + arhar dal + turai sabzi',
      vegShaam: 'Spearmint chai + akhrot (4)',
      vegRaat: 'Khichdi (moong dal) + 1 tsp ghee',
      nonVegNashta: '2 boiled eggs + moong dal chilla (1)',
      nonVegDopahar: '2 bajra roti + grilled katla + turai sabzi',
      nonVegRaat: 'Khichdi + boiled egg (1)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Lukewarm paani + adrak slice',
      vegNashta: 'Oats (plain, no sugar) + amla 1',
      vegDopahar: '2 roti + chana dal + methi sabzi',
      vegShaam: 'Anar (pomegranate) 1 small',
      vegRaat: 'Jowar roti + palak dal + kheera salad',
      nonVegNashta: 'Oats (plain) + 1 boiled egg',
      nonVegDopahar: 'Grilled chicken (boiled) + 2 roti + methi sabzi',
      nonVegRaat: 'Jowar roti + chicken soup (thin, no cream)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Nimbu paani (no sugar)',
      vegNashta: 'Poha (no potato, add palak / gajar)',
      vegDopahar: 'Brown rice + masoor dal + lauki sabzi',
      vegShaam: 'Bhuna chana + spearmint chai',
      vegRaat: '2 roti + moong dal + turai-gajar sabzi',
      nonVegNashta: 'Poha (no potato) + 1 boiled egg',
      nonVegDopahar: 'Brown rice + grilled rohu + lauki sabzi',
      nonVegRaat: '2 roti + moong dal + boiled egg (1)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Daane Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf moong dal khichdi + lauki sabzi — gut reset karo, heavy khaana avoid',
        'Dairy, maida, fried — teeno strictly band us din',
        'Khaali pet spearmint chai subah lena — hormonal trigger directly address karta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi avoid karein — high GI, acne trigger',
        'Safe vrat options: kuttu ki roti, singhare ka atta, bhuna makhana, fresh fruits (seb, anar, naashpati)',
        'Sendha namak use karein — regular processed namak mein additives hote hain jo sensitive skin react kar sakti hai',
        'Vrat mein zyada meetha (makhane ki kheer, sago kheer, sabudana kheer) avoid — sugar = insulin spike = acne',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka (no extra butter) + roti (maida naan nahi) order karein — safest option acne mein',
        'Salad zaroor order karein — kheera, tomato, pyaz — gut fiber milti hai',
        'Paneer, fried items, cold drink — teeno avoid karein',
        'Hack: order karte waqt bolein "butter/cream kum karo" — most dhabas mein ho jaata hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karein: bhuna chana, dry akhrot (4-5), seb, amla candy (no sugar added) — in-flight snacks mostly maida hote hain',
        'Hotel mein: plain dal + roti / boiled veggies + rice order karein — room service mein easily milta hai',
        'Train mein packaged chips / biscuits strictly avoid karein — maida + trans fat double acne trigger',
      ],
    },
  ],

  proTip: 'Subah spearmint ki chai peene ka time fix karo — 7-8 AM ke beech — khaali pet ya nashte ke saath. Hormonal acne (especially PCOD linked ya teenage acne) mein maine patients ko iske results clearly dikh rahe hote hain treatment ke saath.',
  importantNote: 'Ye chart ek general guide hai — har patient ki skin alag hoti hai aur triggers bhi alag ho sakte hain. Apni condition ke hisaab se apne homoeopath se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Acne mein jab sahi diet se body ka internal inflammatory load kam hota hai — homeopathic medicines sebaceous gland level pe zyada effectively kaam karti hain aur healing faster hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya acne mein doodh peena safe hai?',
      answer: 'Ghar ka fresh dahi (1 small katori) allowed hai — packaged doodh aur full fat milk avoid karein acne mein.\nPackaged doodh mein whey protein hota hai jo IGF-1 (insulin-like growth factor) raise karta hai — ye sebaceous glands ko sebum zyada produce karne ka signal deta hai.\nMultiple peer-reviewed studies mein dairy aur acne ka direct connection confirm hua hai.\nGhar ka fresh dahi probiotics deta hai — gut microbiome balance hoti hai — jo skin pe positively reflect hota hai.\nApne doctor se apni specific dairy sensitivity ke baare mein poochh sakte hain.',
    },
    {
      _key: 'faq2',
      question: 'Acne mein chawal (rice) khana chahiye ya band karna chahiye?',
      answer: 'White rice regular quantity mein avoid karna better hai — brown rice switch karein.\nWhite rice ka glycemic index high hota hai — insulin spike hoti hai — jo acne ka main dietary trigger hai.\nBrown rice mein fiber zyada hota hai — GI low hota hai — insulin response controlled rehti hai.\nAgar white rice band karna mushkil ho — toh quantity kam karo aur saath mein dal + sabzi zaroor lena — fiber insulin spike slow karta hai.\nCompletely band karna zaroori nahi — quantity aur type dono matter karte hain.',
    },
    {
      _key: 'faq3',
      question: 'Diet change se acne mein kitne din mein fark dikhta hai?',
      answer: 'Generally 4-6 hafte lagte hain diet se visible fark aane mein — shortcut nahi hai.\nSkin ka cell turnover cycle approximately 28 din ka hota hai — isliye ek mahine se pehle judge mat karein.\nPehle 2 hafton mein nayi pimples aana kam hoti hain — existing acne fade hona uske baad shuru hota hai.\nDiet ek pillar hai — homeopathic treatment ke saath jab combine hota hai toh results faster aur lasting hote hain.\nPatience aur consistency dono zaroori hain.',
    },
    {
      _key: 'faq4',
      question: 'Acne mein chai / coffee peena theek hai?',
      answer: '1 cup subah theek hai — 3+ cups daily avoid karein acne mein.\nZyada caffeine cortisol (stress hormone) raise karta hai — cortisol sebum production aur hormonal acne dono trigger karta hai.\nChai mein sugar kam karo — ya band karo — kyunki chai + sugar combo = caffeine + insulin spike = double trigger.\nBest replacement: spearmint chai — caffeine free, androgen lowering — acne mein specifically beneficial.\nCoffee mein doodh add karna avoid karein — dairy + caffeine combo acne pe worse effect dalta hai.',
    },
    {
      _key: 'faq5',
      question: 'Acne mein vrat karna safe hai?',
      answer: 'Vrat safe hai — lekin vrat mein kya khate hain ye zyada matter karta hai acne mein.\nSabudana, sago ki kheer, zyada meetha — ye high GI foods hain — vrat mein bhi acne trigger ho sakta hai inse.\nSafe options: kuttu ki roti, singhare ka atta, bhuna makhana, fresh fruits (seb, anar, naashpati) — inse acne stable rehti hai vrat mein bhi.\nVrat ke baad achanak bahut zyada fried ya meetha khaana — ye skin pe acne spike de sakta hai — vrat todne pe bhi sambhal ke khayen.',
    },
    {
      _key: 'faq6',
      question: 'Raat ko late khaana — kya acne se connected hai?',
      answer: 'Haan — raat 8-9 baje ke baad heavy ya meetha khaana acne mein problematic hai.\nRaat mein insulin sensitivity kam hoti hai — same food raat mein khao toh insulin spike dayi zyada hogi.\nLate meal = digestion slow = gut mein toxin buildup = skin pe acne next morning.\nSimple habit: raat ka khaana 7-7:30 baje tak fix karo — isme koi supplement nahi lagta, sirf timing.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Acne treatment mein koi specific food ban nahi hoti medicines ki wajah se — diet restrictions disease ke liye hain, medicine ke liye nahi.\nHaan — kuch medicines ke saath strong smell wali cheezein (camphor, eucalyptus) avoid karne ki recommendation hoti hai — ye alag hai.\nCoffee ke baare mein — kuch homeopathic doctors coffee avoid karne kehte hain specific medicines ke saath — apne doctor se poochhen, generalize mat karein.\nDiet changes is page mein — ye acne ke triggers kam karne ke liye hain — treatment better respond karta hai jab internally inflammatory load kam ho.',
    },
    {
      _key: 'faq8',
      question: 'Acne mein non-veg khana chahiye ya band karna padega?',
      answer: 'Completely band karna zaroori nahi — lekin type aur cooking method dono matter karte hain.\nAllowed: grilled / boiled fish (rohu, katla), boiled eggs (1-2 daily), boiled ya grilled chicken — omega-3 aur zinc dono milte hain jo acne mein actually helpful hain.\nAvoid: fried chicken, red meat, packaged / processed meat — saturated fat + trans fat skin inflammation badhate hain.\nDoodh aur dairy — ye non-veg mein sabse problematic hai acne ke liye — whey protein IGF-1 raise karta hai.\nSwitch simple hai: boil / grill karo, fry mat karo.',
    },
    {
      _key: 'faq9',
      question: 'Acne mein anda (egg) khana safe hai?',
      answer: 'Boiled eggs (1-2 daily) safe hain acne mein — fried egg avoid karein.\nEgg mein Vitamin A aur zinc dono hote hain — dono nutrients acne healing mein evidence-based role hai.\nCooking method matter karta hai: boil karo — fried bhurji mein oil + heat se inflammatory compounds bante hain.\nKuch logo ko egg white se sensitivity hoti hai — agar khaane ke baad acne worse ho toh band karein aur doctor se mention karein.',
    },
    {
      _key: 'faq10',
      question: 'Acne mein aam aur kela khana safe hai?',
      answer: 'Aam — acne season mein (summer) limited rakhein — moderate GI, zyada khane se insulin spike ho sakti hai.\nKela — regular quantity (1 daily) theek hai — actually high GI nahi hai, lekin overripe kela avoid karein.\nOverripe kela mein sugar content zyada hota hai — GI badhta hai — acne prone skin ke liye worse hota hai.\nFresh / slightly raw kela — safe snack option hai acne mein.\nAam aur kela dono band karne ki zaroorat nahi — quantity aur ripeness dono sambhalein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Conforti C et al — Acne and diet: a review — International Journal of Dermatology', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/34423427' },
    { _key: 's2', name: 'Baldwin H, Tan J — Effects of Diet on Acne and Its Response to Treatment — American Journal of Clinical Dermatology', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/32748305' },
    { _key: 's3', name: 'Gurtler A, Schmitt L — The impact of clinical nutrition on inflammatory skin diseases — JDDG', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35088524' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Doodh band karna lekin maida aur refined sugar bilkul continue karna — maida acne ka #1 dietary trigger hai, dairy se bhi zyada harmful ho sakta hai kuch patients mein',
    mustEat: 'Spearmint chai (1 cup daily) — hormonal acne mein androgen lowering effect peer-reviewed evidence mein hai — ek free, easily available solution',
    mustAvoid: 'Packaged fruit juice — "healthy" lagta hai, lekin fiber nahi hota, sugar concentrated hota hai — high GI effect refined sugar jitna hi hota hai — acne ke liye worst drink',
  },

  doctorNote: 'Maine notice kiya hai ki acne patients mein jo log maida aur packaged dairy — dono ek saath chodh dete hain — unka homeopathic treatment response clearly faster hota hai — sirf ek chodh ke dono mein se better nahi hota. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Acne (muhase) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/acne',
  shareTextMealPlan: 'Acne ke liye 4-din ka Indian diet plan: homeopedia.in/diet/acne',
  shareTextPage: 'Acne (muhase) Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/acne',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Acne (Muhase) diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Acne diet chart seeded — homeopedia.in/diet/acne')
}

seed().catch(console.error)
