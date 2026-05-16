import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-piles',
  _type: 'diet',
  title: 'Piles (Bawaseer) Diet Chart',
  hindiName: 'Bawaseer',
  slug: { _type: 'slug', current: 'piles' },
  relatedDiseaseSlug: 'piles',
  category: 'Digestive',
  metaTitle: 'Piles (Bawaseer) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Piles (Bawaseer) diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Piles mein hard stool aur straining rectal veins pe pressure badhata hai — aur bleeding, swelling, aur pain trigger hota hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Roz subah khaali pet 2-3 glass gunguna paani piyo', reason: 'stool soft rehta hai, straining nahi hoti' },
    { _key: 'eh2', habit: 'Har baar khaane ke saath salad ya sabzi zaroor lo', reason: 'fiber intake consistent rehti hai jo rectal pressure kam karta hai' },
    { _key: 'eh3', habit: 'Toilet pe zyada der mat baitho', reason: 'rectal veins pe unnecessary pressure badhta hai jo piles worsen karta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'soluble fiber stool ko soft karta hai, straining kam hoti hai' },
        { _key: 'i2', food: 'Brown rice / hand-pounded rice', reason: 'insoluble fiber bowel movement regular karta hai' },
        { _key: 'i3', food: 'Jowar / bajra roti', reason: 'high fiber, maida se behtar — rectal pressure nahi badhne deta' },
        { _key: 'i4', food: 'Oats (jaee)', reason: 'beta-glucan fiber — stool transit time improve karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'high water content, stool soft karta hai, digestion easy hoti hai' },
        { _key: 'i6', food: 'Turai / torai', reason: 'fiber + water — bowel movement smooth karta hai' },
        { _key: 'i7', food: 'Palak', reason: 'fiber + iron — anemia bhi prevent karta hai jo piles bleeding se ho sakti hai' },
        { _key: 'i8', food: 'Gajar', reason: 'pectin fiber — constipation directly address karta hai jo piles ka #1 trigger hai' },
        { _key: 'i9', food: 'Karela', reason: 'bitter compounds gut motility improve karte hain' },
        { _key: 'i10', food: 'Methi', reason: 'mucilage stool ko lubricate karta hai — straining reduce hoti hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Papaya (papita)', reason: 'papain enzyme constipation todta hai — piles mein sabse helpful fruit' },
        { _key: 'i12', food: 'Amrud (guava) — seeds samet khao', reason: 'fiber + pectin — hard stool prevent karta hai' },
        { _key: 'i13', food: 'Seb (apple) with skin', reason: 'pectin fiber — stool bulk badhata hai bina hard kiye' },
        { _key: 'i14', food: 'Pake aam (seasonal, summer)', reason: 'natural laxative effect — stool soft karta hai' },
        { _key: 'i15', food: 'Anjeer (fig, dry soaked)', reason: 'natural sorbitol — mild laxative, rectal irritation nahi karta' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chilke wali)', reason: 'easily digestible fiber — gas nahi banata, stool smooth karta hai' },
        { _key: 'i17', food: 'Masoor dal', reason: 'fiber + protein — constipation kam karta hai bina bloating ke' },
        { _key: 'i18', food: 'Lobia (black-eyed peas, boiled)', reason: 'high fiber legume — bowel regularity maintain karta hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i19', food: 'Gunguna paani (2-3 glass subah)', reason: 'stool softener — zero cost, sabse effective' },
        { _key: 'i20', food: 'Isabgol (psyllium husk) 1 tsp raat ko paani mein', reason: 'fiber supplement jo rectal bleeding reduce karta hai' },
        { _key: 'i21', food: 'Jeera-ajwain paani', reason: 'gas aur bloating kam karta hai jo rectal pressure badhata hai' },
        { _key: 'i22', food: 'Desi ghee (1 tsp)', reason: 'stool lubricate karta hai — straining kam hoti hai' },
        { _key: 'i23', food: 'Haldi', reason: 'rectal area ki sujan (inflammation) internally reduce karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Boiled/steamed fish (rohu, katla)', reason: 'lean protein, low fat — digestion easy, constipation nahi badhata' },
    { _key: 'nva2', food: 'Ande (boiled, 1-2)', reason: 'protein ke liye theek hai — fried nahi, sirf boiled' },
    { _key: 'nva3', food: 'Chicken (boiled ya stew)', reason: 'lean protein — grilled/fried avoid karein' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Red meat (mutton, beef)', reason: 'digestion slow karta hai — stool hard hota hai — piles trigger' },
    { _key: 'nvav2', food: 'Fried chicken / egg fry', reason: 'trans fat gut motility slow karta hai — constipation badhta hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami)', reason: 'preservatives gut microbiome disrupt karte hain' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida roti / pav / biscuit', reason: 'insoluble fiber zero — stool hard karta hai jo straining badhata hai' },
        { _key: 'ri2', food: 'White bread / naan', reason: 'refined carbs — gut transit slow — constipation direct cause' },
        { _key: 'ri3', food: 'Packaged namkeen / chips', reason: 'refined + salt — dehydration + constipation dono' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full-fat paneer (zyada matra)', reason: 'high fat, low fiber — bowel movement slow karta hai' },
        { _key: 'ri5', food: 'Ice cream', reason: 'sugar + fat combination — gut motility slow karta hai' },
        { _key: 'ri6', food: 'Packaged dahi / set dahi', reason: 'probiotic benefit nahi, zyada fat — ghar ka fresh dahi okay hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Mirchi / lal mirch zyada', reason: 'rectal area irritate karta hai directly — jalan aur bleeding badhti hai' },
        { _key: 'ri8', food: 'Fried foods (pakoda, puri, samosa)', reason: 'oil gut transit bahut slow karta hai' },
        { _key: 'ri9', food: 'White sugar / meetha zyada', reason: 'gut bacteria disrupt karta hai — constipation worsens' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Chai / coffee (3+ cups)', reason: 'caffeine dehydration karta hai — stool hard hota hai' },
        { _key: 'ri11', food: 'Alcohol', reason: 'rectal veins dilate karta hai aur dehydration — piles flare direct trigger' },
        { _key: 'ri12', food: 'Cold drinks / soda', reason: 'carbonation bloating badhata hai jo rectal pressure increase karta hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Gunguna paani 2-3 glass (room temp ya thoda warm)', 'Isabgol 1 tsp paani mein — raat ko bhigo ke subah pee sakte hain'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with lauki / gajar', 'Moong dal chilla + pudina chutney'], nonVegOption: '2 boiled ande + 1 jowar roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 papita (papaya) bowl', 'Amrud (guava) 1 — seeds samet'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + masoor dal + palak sabzi', 'Brown rice + moong dal + turai ki sabzi + salad'], nonVegOption: 'Boiled fish stew + 1 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Saunf + jeera paani (warm)', 'Bhuna chana handful (no masala)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + lobia / chana dal + sabzi', 'Khichdi (moong dal + rice) + 1 tsp ghee'], nonVegOption: 'Chicken soup (no cream) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Gunguna doodh + 1 tsp desi ghee (stool lubricant, mild)', 'Gunguna paani + 1 tsp isabgol (agar constipation zyada ho)'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Gunguna paani + isabgol',
      vegNashta: 'Daliya with gajar',
      vegDopahar: '2 jowar roti + masoor dal + palak sabzi',
      vegShaam: 'Papita bowl',
      vegRaat: 'Khichdi + 1 tsp ghee',
      nonVegNashta: '2 boiled ande + 1 jowar roti',
      nonVegDopahar: 'Boiled fish (rohu) stew + 2 roti + turai sabzi',
      nonVegRaat: 'Chicken soup (no cream) + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Gunguna paani 3 glass',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Brown rice + moong dal (chilke wali) + turai sabzi',
      vegShaam: 'Amrud 1 (seeds samet)',
      vegRaat: '2 bajra roti + lobia sabzi',
      nonVegNashta: 'Daliya + gajar sabzi + 1 boiled anda',
      nonVegDopahar: 'Chicken steamed + moong dal + 1 roti',
      nonVegRaat: 'Moong dal khichdi + ghee',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Jeera-ajwain paani warm',
      vegNashta: 'Oats with seb (apple) chopped',
      vegDopahar: '2 roti + arhar dal + gajar-methi sabzi',
      vegShaam: 'Bhuna chana + saunf',
      vegRaat: 'Moong dal khichdi + ghee',
      nonVegNashta: '2 boiled ande + poha',
      nonVegDopahar: 'Fish curry (light, no heavy masala) + 2 roti + salad',
      nonVegRaat: 'Moong dal khichdi (veg hi raat ko)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Gunguna paani + isabgol',
      vegNashta: 'Poha with gajar + moong sprouts',
      vegDopahar: 'Brown rice + masoor dal + lauki ki sabzi + salad',
      vegShaam: 'Anjeer 2 (soaked) + warm paani',
      vegRaat: '2 jowar roti + palak dal',
      nonVegNashta: 'Oats + 1 boiled anda',
      nonVegDopahar: 'Boiled chicken + brown rice + lauki sabzi',
      nonVegRaat: '2 bajra roti + masoor dal',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab (Bleeding / Swelling)',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, daliya, ya plain moong dal soup lo — easy digestion',
        'Mirchi, fried, aur raw salad us din avoid karo — irritation badhti hai',
        'Har ghante thoda paani piyo — stool soft rehna zaroori hai us din sabse zyada',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (light oil mein) + sendha namak — fiber nahi lekin easy to digest',
        'Kuttu ka atta cheela / roti — bajra/jowar se better option piles ke liye',
        'Vrat mein kela bahut zyada mat khao — ripe kela constipation de sakta hai kuch logon mein',
        'Agar vrat mein constipation barhti ho — ek glass warm paani mein 1 tsp isabgol zaroor lo',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka ya dal fry order karo — fiber source milta hai',
        'Tandoori roti (maida nahi) + sabzi — safest option at most dhabas',
        'Fried items, puri, paratha, white rice avoid karo — constipation directly badhta hai',
        'Practical hack: Pehle ek glass paani peo order karne se pehle — overeating nahi hoti',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: dry anjeer 4-5, bhuna chana, oats sachet — fiber ka backup',
        'Train/flight mein: plain dal-chawal order karo — fried items skip karo',
        'Isabgol ka packet saath rakhein — travel constipation piles ka common trigger hai',
      ],
    },
  ],

  proTip: 'Toilet mein jaane se 20 minute pehle ek glass gunguna paani piyo — ye ek simple habit stool passage significantly easier karti hai. Straining ka koi reason hi nahi rehta jab timing sahi ho.',
  importantNote: 'Ye chart ek general guide hai. Piles kai types ki hoti hain — bleeding, prolapsed, thrombosed — aur har case alag hoti hai. Apni condition ke hisaab se apne homoeopath se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Jab diet se stool soft aur regular rehta hai — homeopathic medicines rectal inflammation aur veins pe seedha kaam kar pati hain. Diet sahi rakho toh treatment ka response clearly better hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya piles mein dahi khana theek hai?',
      answer: 'Haan — ghar ka fresh bana dahi theek hai, lekin packaged / set dahi avoid karo.\nGhar ka fresh dahi probiotics deta hai jo gut bacteria balance karta hai — constipation less hoti hai.\nPackaged dahi mein tyramine aur preservatives hote hain jo gut ko irritate karte hain.\nEk small katori (approx) ghar ka dahi dopahar mein le sakte hain.\nRaat mein dahi avoid karo — piles mein raat ka dahi digestion slow karta hai.',
    },
    {
      _key: 'faq2',
      question: 'Piles mein kela khana chahiye ya nahi?',
      answer: 'Depends on ripeness — yahan clearly samjho:\nRaw ya slightly raw (hara-peela) kela — avoid — starch-heavy, constipation de sakta hai.\nFully ripe (peela, spotted) kela — okay in moderation — fiber + softness helpful hai.\nOverripe kela — avoid — tyramine badhta hai, bloating ho sakti hai.\nSafe option: 1 ripe kela subah ya mid-morning — raat mein nahi.',
    },
    {
      _key: 'faq3',
      question: 'Diet change karne se piles mein kitne din mein fark dikhta hai?',
      answer: 'High fiber diet se stool softness mein 3-5 din mein fark feel hota hai.\nBleeding aur swelling mein improvement 2-3 hafte mein dikhai deti hai consistent diet ke saath.\nPiles ka complete relief diet + treatment dono milke hota hai — akele diet se grade 3-4 piles theek nahi hoti.\nAgar 2 hafte mein koi fark nahi dikh raha — apne doctor se milein.',
    },
    {
      _key: 'faq4',
      question: 'Piles mein chai ya coffee pee sakte hain?',
      answer: '1 cup subah ki chai/coffee theek hai.\nProblem tab hoti hai jab 3+ cups daily lo — caffeine dehydration karta hai — stool hard hota hai.\nChai ke saath kuch khao — khaali pet chai piles mein gut irritation badhati hai.\nBetter substitute: Jeera-ajwain warm paani ya tulsi chai — gut soothe karta hai, dehydration nahi karta.',
    },
    {
      _key: 'faq5',
      question: 'Piles mein vrat karna safe hai?',
      answer: 'Vrat kar sakte ho — lekin planning chahiye.\nVrat mein sabse badi problem hoti hai — kam paani peena aur fiber zero — dono constipation badhate hain.\nSabudana khichdi + sendha namak + kuttu roti — safe vrat options hain.\nVrat ke din isabgol 1 tsp zaroor lo gungune paani mein.\nEk din vrat se zyada nahi karo agar piles active ho — prolonged fasting stool hard karta hai.',
    },
    {
      _key: 'faq6',
      question: 'Raat ko late khaana piles mein theek hai kya?',
      answer: 'Nahi — raat 9-10 ke baad heavy khaana piles mein seedha problem karta hai.\nLate meal ke baad digestion slow hoti hai — stool next morning hard hota hai — straining badhti hai.\nRaat ka khaana 7-8 PM tak lo — light rakho — khichdi, dal roti best hai.\nRaat mein fried, heavy, ya spicy bilkul avoid karo — rectal inflammation overnight badhti hai.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Specific food ban sirf kuch specific homeopathic medicines ke saath hoti hai — sabke saath nahi.\nGenerally: coffee, strong smell wali cheezein (camphor, garlic raw) — kuch doctors avoid recommend karte hain.\nYe individual medicine pe depend karta hai — apne homeopath se specifically poochho.\nPiles ki diet mein coffee waise bhi limit karna better hai — toh ye restriction automatically help karta hai.',
    },
    {
      _key: 'faq8',
      question: 'Piles mein non-veg band karna padega?',
      answer: 'Completely band nahi karna — lekin choices matter karti hain.\nBoiled fish, boiled eggs, boiled/stewed chicken — allowed hain, lean protein dete hain.\nRed meat (mutton, beef) aur fried non-veg — avoid karo — constipation badhate hain.\nNon-veg ke saath salad ya fiber sabzi zaroor lo — protein alone bowel slow karta hai.',
    },
    {
      _key: 'faq9',
      question: 'Chawal (rice) piles mein khana chahiye ya nahi?',
      answer: 'Plain white rice thoda kam karo — low fiber, stool hard kar sakta hai.\nBrown rice ya hand-pounded rice better option hai — fiber retain rehta hai.\nAgar sirf white rice available hai — toh dal + sabzi ke saath khao aur paani zyada piyo.\nRice completely band karne ki zaroorat nahi — bas fiber ke saath balance karo.',
    },
    {
      _key: 'faq10',
      question: 'Piles mein mirchi (spicy food) kitni nuksaandeh hai?',
      answer: 'Mirchi piles ka ek direct irritant hai — ye sirf achhe food ka bura form nahi hai.\nCapsaicin (mirch ka active compound) rectal mucosa ko irritate karta hai — jalan aur itching badhti hai.\nKhaasi mirchi wala khaana bleeding piles mein next day clearly worse karta hai.\nCompletely bland nahi khaana — thoda jeera, dhaniya, haldi okay hai — lal mirch aur green chilli minimize karo.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Alonso-Coello P et al — Fiber for the treatment of hemorrhoids complications: a systematic review and meta-analysis — The American Journal of Gastroenterology', year: '2006', url: 'https://pubmed.ncbi.nlm.nih.gov/16405552' },
    { _key: 's2', name: 'Mott T, Latimer K, Edwards C — Hemorrhoids: Diagnosis and Treatment Options — American Family Physician', year: '2018', url: 'https://pubmed.ncbi.nlm.nih.gov/29431977' },
    { _key: 's3', name: 'Cengiz TB, Gorgun E — Hemorrhoids: A range of treatments — Cleveland Clinic Journal of Medicine', year: '2019', url: 'https://pubmed.ncbi.nlm.nih.gov/31498764' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Fiber badhate waqt paani nahi badhana — fiber bina paani ke stool aur hard kar deta hai',
    mustEat: 'Papita (papaya) — subah khaali pet ya mid-morning — papain enzyme + fiber dono ek saath',
    mustAvoid: 'Lal mirch / green chilli zyada — rectal irritation ka direct aur fastest trigger',
  },

  doctorNote: 'Maine notice kiya hai ki jo piles patients subah gunguna paani + raat ko isabgol — ye dono sirf 2 habits consistently follow karte hain — unka treatment response baaki sab se clearly better hota hai. Diet ke baaki changes bhi zaroori hain, lekin ye do cheezein seed level pe kaam karti hain. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Piles (Bawaseer) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/piles',
  shareTextMealPlan: 'Piles (Bawaseer) ke liye 4-din ka Indian diet plan: homeopedia.in/diet/piles',
  shareTextPage: 'Piles (Bawaseer) Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/piles',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Piles (Bawaseer) diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Piles diet chart seeded — homeopedia.in/diet/piles')
}

seed().catch(console.error)
