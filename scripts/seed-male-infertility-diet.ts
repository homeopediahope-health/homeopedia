import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-male-infertility',
  _type: 'diet',
  title: 'Male Infertility (Shukranu Ki Kamzori) Diet Chart',
  hindiName: 'Purush Napunsakta / Shukranu Ki Kamzori',
  slug: { _type: 'slug', current: 'male-infertility' },
  relatedDiseaseSlug: 'male-infertility',
  category: "Men's Health",
  metaTitle: 'Male Infertility Diet — Shukranu Badhane Ka Khaana | Homeopedia',
  metaDescription: 'Male infertility diet chart — sperm count badhane ke liye green list, red list, meal plan, veg non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Male infertility mein sperm count, motility (chalne ki takat), aur morphology (shape) — teeno ko diet directly affect karti hai — sahi nutrients se sperm production behtar hoti hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Roz subah bheega hua mutthi bhar dry fruits khao', reason: 'zinc aur selenium sperm DNA damage se bachate hain' },
    { _key: 'eh2', habit: 'Raat ka khaana 8 baje ke pehle khatam karo', reason: 'late eating testosterone production cycle disturb karta hai' },
    { _key: 'eh3', habit: 'Din mein 2-3 litre paani zaroor piyo', reason: 'semen volume aur sperm motility dono hydration pe dependent hain' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Brown rice', reason: 'refined carbs se zyada fiber — testosterone levels stable rakhta hai' },
        { _key: 'i2', food: 'Jowar / bajra roti', reason: 'zinc ka achha source — sperm production mein seedha kaam aata hai' },
        { _key: 'i3', food: 'Daliya (oats)', reason: 'antioxidants hote hain — sperm DNA oxidative damage kam karta hai' },
        { _key: 'i4', food: 'Gehun ki roti (2 roti, ghar ki)', reason: 'complex carbs — energy slow release karta hai jo hormones stable rakhta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'folate se bhari — sperm DNA integrity ke liye folate essential hai' },
        { _key: 'i6', food: 'Lauki', reason: 'gut ka kaam theek rakhti hai — gut health testosterone metabolism se linked hai' },
        { _key: 'i7', food: 'Karela', reason: 'blood sugar control karta hai — high sugar sperm motility directly girata hai' },
        { _key: 'i8', food: 'Tamatar (pakke, sabzi mein)', reason: 'lycopene ka best source — lycopene sperm concentration badhata hai' },
        { _key: 'i9', food: 'Methi (seeds ya sabzi)', reason: 'testosterone boost karne wale saponins hote hain' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Amla (fresh ya dry)', reason: 'vitamin C ka richest Indian source — sperm clumping (agglutination) kam karta hai' },
        { _key: 'i11', food: 'Papaya (pakka)', reason: 'antioxidant rich — sperm motility improve karta hai' },
        { _key: 'i12', food: 'Nar (pomegranate)', reason: 'punicalagin antioxidant — sperm quality aur motility pe positive effect' },
        { _key: 'i13', food: 'Seb (apple)', reason: 'quercetin hota hai — sperm motility protect karta hai oxidative stress se' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal (chilke wali)', reason: 'easily digest — liver pe load nahi aur zinc provide karta hai' },
        { _key: 'i15', food: 'Chana (bhuna ya boiled)', reason: 'zinc + folate combination — dono sperm health ke liye critical hain' },
        { _key: 'i16', food: 'Rajma (limited — hafte mein 1-2 baar)', reason: 'plant protein + iron — sperm production support karta hai' },
        { _key: 'i17', food: 'Tofu (hafte mein 2-3 baar tak)', reason: 'phytoestrogen concern sirf excessive use mein — limited use mein safe hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i18', food: 'Haldi + kali mirch wali chai/doodh', reason: 'curcumin inflammation kam karta hai jo sperm quality girata hai — kali mirch ke bina absorb nahi hoti' },
        { _key: 'i19', food: 'Ashwagandha powder (warm paani mein)', reason: 'testosterone aur sperm count dono pe clinically studied effect' },
        { _key: 'i20', food: 'Til ka tel / sarson ka tel (cooking mein)', reason: 'PUFA rich — sperm membrane ke liye essential fatty acids provide karta hai' },
        { _key: 'i21', food: 'Adrak-tulsi chai (bina sugar)', reason: 'anti-inflammatory — scrotal oxidative stress kam karta hai' },
        { _key: 'i22', food: 'Jeera + dhania paani', reason: 'digestive toxin clearance — liver health sperm quality se linked hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Ande (2 boiled, roz)', reason: 'selenium + vitamin E + choline — sperm motility aur morphology dono improve karte hain' },
    { _key: 'nva2', food: 'Rohu / katla machhi (grilled/steamed)', reason: 'omega-3 fatty acids — sperm membrane fluidity ke liye critical' },
    { _key: 'nva3', food: 'Surmai (grilled)', reason: 'omega-3 + zinc combination — sperm count aur motility dono pe impact' },
    { _key: 'nva4', food: 'Chicken (boiled / grilled — no fry)', reason: 'lean protein + zinc — testosterone production support karta hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Processed meat (sausage, salami, packaged chicken nuggets)', reason: 'trans fat + preservatives — sperm DNA fragmentation badhate hain' },
    { _key: 'nvav2', food: 'Fried chicken / pakoda', reason: 'trans fat sperm motility directly girata hai' },
    { _key: 'nvav3', food: 'Red meat / mutton (daily)', reason: 'saturated fat zyada hoti hai — sperm concentration pe negative effect' },
    { _key: 'nvav4', food: 'Shellfish (prawns)', reason: 'heavy metals accumulate karte hain — sperm quality ke liye risky' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, noodles, pizza base)', reason: 'gut mein inflammation badhata hai — testosterone metabolism disturb hota hai' },
        { _key: 'ri2', food: 'Packaged namkeen / chips', reason: 'trans fat + excess salt — scrotal oxidative stress badhata hai' },
        { _key: 'ri3', food: 'Biscuits / cookies (packaged)', reason: 'refined sugar + hydrogenated fat — sperm motility pe directly negative' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full-fat packaged doodh (tetra pack, daily zyada)', reason: 'added hormones sperm count pe negative effect karte hain — ghar ka fresh doodh (1 glass) theek hai' },
        { _key: 'ri5', food: 'Full-fat paneer (daily zyada matra mein)', reason: 'saturated fat excess testosterone conversion block karta hai' },
        { _key: 'ri6', food: 'Cheese (processed — packaged slices)', reason: 'added preservatives + saturated fat — sperm morphology affect karte hain' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Refined sugar (chai mein zyada, cold drinks)', reason: 'insulin spike — testosterone-insulin axis disturb karta hai' },
        { _key: 'ri8', food: 'Deep fried khaana (daily)', reason: 'trans fat sperm membrane integrity damage karta hai' },
        { _key: 'ri9', food: 'Soya sauce / packaged soya products (excess)', reason: 'phytoestrogen excess — testosterone balance bigadta hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Alcohol (kisi bhi matra mein, regular)', reason: 'liver pe load — testosterone detox cycle directly affect karta hai' },
        { _key: 'ri11', food: 'Cold drinks / soda', reason: 'fructose corn syrup — sperm DNA damage se directly linked hai studies mein' },
        { _key: 'ri12', food: 'Excess chai / coffee (4+ cups daily)', reason: 'caffeine excess sperm motility ke liye negative — 1-2 cup okay' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['1 glass lukewarm paani + 1 tsp amla powder', 'Bheegi methi seeds (1 tsp, raat se bheegi hui) + paani'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Moong dal chilla (2) + pudina chutney', 'Daliya (vegetable daliya, namkeen)'], nonVegOption: '2 ande boiled + 1 roti + 1 katori sabzi' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seasonal fruit (nar / papaya / seb)', 'Bhuna chana (mutthi bhar) + 4-5 akhrot'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 roti + moong dal (chilke wali) + palak sabzi + salad', 'Brown rice + rajma (limited) + lauki sabzi + salad'], nonVegOption: 'Grilled machhi (rohu/surmai) + 2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Ashwagandha warm paani ya haldi doodh (bina sugar)', 'Roasted makhana (mutthi bhar) + adrak chai (1 cup)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 jowar/bajra roti + sabzi (methi ya turai) + dal', 'Moong dal khichdi + ghee (1 tsp) + kheera salad'], nonVegOption: 'Chicken soup (boiled, no cream) + 1 roti + sabzi' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm doodh (ghar ka, 1 glass) + haldi + kali mirch', 'Warm paani + saunf + mishri (ek chutki)'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Amla powder + lukewarm paani',
      vegNashta: 'Moong dal chilla (2) + chutney',
      vegDopahar: '2 roti + arhar dal + palak sabzi + salad',
      vegShaam: 'Papaya (1 slice) + adrak chai',
      vegRaat: 'Bajra roti (2) + lauki sabzi + moong dal',
      nonVegNashta: '2 ande boiled + 1 roti + kheera',
      nonVegDopahar: 'Grilled rohu machhi + 2 roti + palak sabzi',
      nonVegRaat: 'Chicken soup (boiled) + 1 roti + sabzi',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi seeds + paani',
      vegNashta: 'Daliya (vegetable, namkeen)',
      vegDopahar: 'Brown rice + masoor dal + turai sabzi + kheera',
      vegShaam: 'Bhuna chana + 4 akhrot',
      vegRaat: 'Khichdi (moong-rice) + ghee (1 tsp) + salad',
      nonVegNashta: 'Egg bhurji (1 anda, less oil) + 1 roti',
      nonVegDopahar: 'Grilled surmai + brown rice + salad',
      nonVegRaat: 'Boiled chicken (150g) + 2 roti + lauki sabzi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Lukewarm paani + saunf (raat bheegi)',
      vegNashta: 'Poha (plain, vegetables ke saath) + nimbu',
      vegDopahar: '2 roti + chana dal + methi sabzi + salad',
      vegShaam: 'Nar (pomegranate, 1 katori) + haldi doodh',
      vegRaat: 'Jowar roti (2) + tamatar-palak sabzi + dal',
      nonVegNashta: '2 ande boiled + daliya (ek bowl)',
      nonVegDopahar: 'Grilled rohu + 2 roti + turai sabzi',
      nonVegRaat: 'Chicken soup (clear broth) + 1 roti + sabzi',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Ashwagandha powder + warm paani',
      vegNashta: 'Vegetable daliya (different veggies se)',
      vegDopahar: '2 roti + rajma (limited) + karela sabzi + salad',
      vegShaam: 'Seb (1) + tulsi chai',
      vegRaat: '2 roti + arhar dal + lauki sabzi + ghee (1 tsp)',
      nonVegNashta: 'Egg chilla (1 anda) + 1 roti + chutney',
      nonVegDopahar: 'Steamed katla machhi + 2 roti + methi sabzi',
      nonVegRaat: 'Boiled chicken (100-150g) + khichdi + ghee',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Takleef Zyada Ho / Stress High Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf moong dal khichdi + ghee + salad — easy to digest, zinc provide karta hai',
        'Fried, maida, aur alcohol bilkul avoid — oxidative stress aur badhata hai stress mein',
        '20-30 min walk ya hafif exercise zaroor — cortisol kam hogi jo testosterone pe directly asar karta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Kuttu ki roti ya sabudana khichdi — zinc aur energy dono milenge vrat mein',
        'Akhrot, makhana, singhara — safe snacks jisme nutrients intact rehte hain',
        'Vrat mein alcohol ya cold drink bilkul nahi — ye vrat break karta hai aur sperm health ke liye dangerous hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti order karein — ghee wali — processed nahi hogi',
        'Fried khaana (pakoda, fried rice) bilkul avoid — trans fat kahin bhi problem karega',
        'Practical hack: Restaurant mein "tandoori roti + dal" combination sabse safe order hai — everywhere available',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karein: bhuna chana, akhrot, amla candy (natural), roti (ghar ki)',
        'Train/hotel mein: dal-chawal ya plain doodh order karein — safest option har jagah milega',
      ],
    },
  ],

  proTip: 'Raat 10 baje ke baad mobile/laptop screen band karein — neend mein testosterone ki highest production hoti hai, aur blue light us cycle ko directly interrupt karta hai. Diet ke saath sleep hygiene sabse important hai sperm health ke liye.',
  importantNote: 'Ye chart ek general guide hai — individual results alag ho sakte hain. Apni condition ke hisaab se apne homoeopath se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Sahi diet se body ka hormonal environment improve hota hai — jis wajah se homeopathic medicines sperm production aur quality improve karne mein zyada effectively kaam karti hain. Dono saath chalen toh healing tez hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya male infertility mein anda (egg) khana chahiye?',
      answer: 'Haan — anda male infertility mein clearly allowed hai aur beneficial hai.\nAnde mein selenium, vitamin E, aur choline hota hai — teeno directly sperm motility aur morphology improve karte hain.\nRoz 2 boiled ande subah le sakte hain.\nFried anda (omelette deep fry) avoid karein — boiled ya light bhurji best hai.\nApne doctor se confirm karein agar koi aur health condition bhi hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya male infertility mein dahi khana theek hai?',
      answer: 'Ghar ka fresh bana dahi (1 small katori, dopahar mein) — theek hai aur probiotics ke liye helpful bhi hai.\nPackaged / set dahi (market wala, tetra pack) — avoid karein — added preservatives aur hormones sperm health ko affect karte hain.\nRaat mein dahi — avoid karein — sperm quality ke liye nahi, balki digestion pe load aata hai jo indirectly matter karta hai.\nDono versions same nahi hain — fresh ghar ka dahi allowed, packaged avoid.',
    },
    {
      _key: 'faq3',
      question: 'Sperm count badhane mein diet se kitne din mein fark dikhta hai?',
      answer: 'Sperm ka ek cycle (spermatogenesis) approximately 74 din ka hota hai.\nIsliye diet se koi bhi real improvement dekhne ke liye minimum 3 mahine lag sakte hain.\nPehle 4-6 hafte mein energy aur overall health mein fark dikh sakta hai — sperm report mein nahi.\nDiet ke saath doctor ki treatment bhi jaari rakhein — dono saath chahiye.\nPatience zaroori hai — 1-2 hafte mein fark expect mat karein.',
    },
    {
      _key: 'faq4',
      question: 'Male infertility mein chai ya coffee peena theek hai?',
      answer: '1-2 cup chai ya coffee subah — theek hai, problem nahi.\n4+ cups daily — caffeine excess sperm motility ke liye negative ho jata hai.\nHerbal chai (tulsi, adrak, chamomile) — better option hai — anti-inflammatory bhi hai.\nCold drinks aur energy drinks — bilkul avoid karein — ye zyada harmful hain chai se.\nChai mein sugar kam rakhein — insulin spike testosterone axis ko disturb karta hai.',
    },
    {
      _key: 'faq5',
      question: 'Male infertility mein vrat/fast kar sakte hain?',
      answer: 'Haan — vrat kar sakte hain, lekin kuch dhyan rakhein.\nKuttu ki roti, makhana, akhrot, singhara — ye sab vrat mein safe hain aur nutrients bhi denge.\nVrat mein zyada samay bhookhe rehna avoid karein — prolonged fasting testosterone dip karta hai.\nVrat mein alcohol ya cold drink — bilkul nahi — ye vrat ka matlab hi khatam kar deta hai.\nApne doctor se pehle puchh lein agar treatment chal rahi hai.',
    },
    {
      _key: 'faq6',
      question: 'Male infertility mein kya roz soya/tofu khana chahiye?',
      answer: 'Nahi — roz nahi, aur zyada matra mein bilkul nahi.\nSoya mein phytoestrogen hota hai jo excess mein testosterone balance bigad sakta hai.\nHafte mein 2-3 baar limited matra mein tofu — generally safe hai.\nRoz soya milk ya soya chunks badi matra mein — ye avoid karein specifically male infertility mein.\nMoong dal, chana dal — better protein options hain soya se.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Koi specific food "band" nahi hota — lekin kuch practical rules hain.\nDawai lene ke 30 minute pehle aur baad mein tez smell wali cheezein avoid karein — strong coffee, paan, raw lahsun.\nAlcohol — medicine ke time pe aur generally bhi avoid karein — sperm health ke liye bhi aur dawai ke liye bhi.\nApne doctor se specifically puchh lein — individual medicines ka alag alag context hota hai.',
    },
    {
      _key: 'faq8',
      question: 'Male infertility mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band nahi karna — lekin sahi non-veg choose karna zaroori hai.\nMachhi (rohu, katla, surmai — grilled) aur ande — clearly beneficial hain sperm ke liye.\nBoiled/grilled chicken — protein ke liye okay hai.\nProcessed meat, fried chicken, red meat (daily) — ye avoid karein.\nNon-veg ko completely band karne ki zaroorat nahi — cooking method aur type matter karta hai.',
    },
    {
      _key: 'faq9',
      question: 'Male infertility mein akhrot khaane se sach mein fark padta hai?',
      answer: 'Haan — akhrot mein alpha-linolenic acid (ALA) hoti hai jo omega-3 ka plant source hai.\nSperm membrane ke liye omega-3 fatty acids essential hain — motility directly improve hoti hai.\n4-5 akhrot roz (bheege hue) — ye amount practical aur effective hai.\nAkhrot ke saath badam (5-6) bhi le sakte hain — vitamin E add hoga jo sperm DNA protection karta hai.\nYe ek real aur easily available Indian food hai — tier 2-3 cities mein bhi milta hai.',
    },
    {
      _key: 'faq10',
      question: 'Male infertility mein aloo ya chawal khana theek hai?',
      answer: 'Chawal — brown rice prefer karein, white rice roz daily zyada nahi.\nWhite rice glycemic index high hota hai — blood sugar spike se testosterone axis affected hota hai.\nBrown rice — safe hai, fiber zyada hoti hai — better option.\nAloo — roz deep fried (chips, fries) — avoid karein. Boiled / baked aloo limited mein theek hai.\nRoti (jowar, bajra, gehu) — chawal se better daily option hai male infertility mein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Ferramosca A, Zara V — Diet and Male Fertility: The Impact of Nutrients and Antioxidants on Sperm Energetic Metabolism — International Journal of Molecular Sciences', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35269682' },
    { _key: 's2', name: 'Salas-Huetos A et al — Dietary patterns, foods and nutrients in male fertility parameters and fecundability: a systematic review of observational studies — Human Reproduction Update', year: '2017', url: 'https://pubmed.ncbi.nlm.nih.gov/28333357' },
    { _key: 's3', name: 'Salas-Huetos A et al — The Effect of Nutrients and Dietary Supplements on Sperm Quality Parameters: A Systematic Review and Meta-Analysis of Randomized Clinical Trials — Advances in Nutrition', year: '2018', url: 'https://pubmed.ncbi.nlm.nih.gov/30462179' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Roz cold drinks / soda peena — fructose corn syrup sperm DNA damage se directly linked hai studies mein — log ise chhoti baat samajhte hain',
    mustEat: 'Akhrot (4-5 roz, bheege hue) — omega-3 + vitamin E — sperm membrane aur motility dono ke liye real Indian superfood',
    mustAvoid: 'Processed meat (sausage, packaged salami) — trans fat + preservatives — sperm DNA fragmentation badhata hai',
  },

  doctorNote: 'Mere male infertility patients mein maine observe kiya hai ki jo log alcohol aur cold drinks dono chodh dete hain — sirf yehi do cheezein — unka treatment response baaki sabse clearly alag hota hai. Akela ek chodh ke dusra jaari rakha toh improvement utni nahi dikhti. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Male Infertility mein kya khayein, kya nahi — complete list: homeopedia.in/diet/male-infertility',
  shareTextMealPlan: 'Male infertility ke liye 4-din ka Indian diet plan: homeopedia.in/diet/male-infertility',
  shareTextPage: 'Male Infertility Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/male-infertility',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Male Infertility diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Male Infertility diet chart seeded — homeopedia.in/diet/male-infertility')
}

seed().catch(console.error)
