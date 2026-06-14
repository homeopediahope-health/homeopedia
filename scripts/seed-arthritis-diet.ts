import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-arthritis',
  _type: 'diet',
  title: 'Arthritis (Gathiya) Diet Chart',
  hindiName: 'Gathiya / Jod Dard',
  slug: { _type: 'slug', current: 'arthritis' },
  relatedDiseaseSlug: 'arthritis',
  category: 'Joints',
  metaTitle: 'Arthritis Diet Chart India — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Arthritis (gathiya) mein kaun se Indian foods joint dard badhaate hain aur kaun se kam karte hain? Complete diet chart with meal plan. Homeopedia pe padho.',
  intro: 'Arthritis mein body ke joints mein chronic inflammation (sujan) hoti hai – aur kuch foods ye sujan seedha badhate hain, kuch kam karte hain – isliye diet directly joint pain aur stiffness ko affect karti hai.\n\nNeeche complete guide hai – green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah 7 baje tak kuch zaroor khao', reason: 'khaali pet joints mein morning stiffness aur badh jaati hai' },
    { _key: 'eh2', habit: 'Raat 7 baje ke baad heavy ya fried khaana avoid karo', reason: 'raat mein digestion slow hoti hai jo joint inflammation ke liye worse hota hai' },
    { _key: 'eh3', habit: 'Din mein 8-10 glass paani piyo', reason: 'joints ka synovial fluid (lubricant) paani se hi banta hai – kam paani = zyada ghashat = zyada dard' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (gehun ka)', reason: 'Refined nahi, low glycemic index – blood sugar stable rakhe jo RA mein inflammation signal kam karta hai' },
        { _key: 'i2', food: 'Brown rice ya hand-pounded rice', reason: 'Maida ki jagah – refined carbs joint inflammation badhate hain, whole grain nahi' },
        { _key: 'i3', food: 'Jowar / bajra roti', reason: 'Gluten kam hota hai – wheat-sensitive arthritis patients mein ye better tolerate hoti hai' },
        { _key: 'i4', food: 'Oats (daliya)', reason: 'Beta-glucan hota hai jo CRP (inflammation marker) kam karne mein help karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'Vitamin K hota hai jo cartilage (joint ka cushion) protect karta hai – arthritis mein cartilage ghisna ek main problem hai' },
        { _key: 'i6', food: 'Lauki', reason: 'Alkaline nature ka hai – body ka pH balance karta hai jo joint inflammation reduce karne mein help karta hai' },
        { _key: 'i7', food: 'Karela', reason: 'Bitter compounds joint mein uric acid accumulation kam karte hain – gouty arthritis mein especially helpful' },
        { _key: 'i8', food: 'Gajar', reason: 'Beta-carotene hota hai jo free radicals se joint tissue ko protect karta hai' },
        { _key: 'i9', food: 'Methi (saag ya seeds)', reason: 'Saponins hote hain jo anti-inflammatory hain – joint swelling pe direct effect' },
        { _key: 'i10', food: 'Hara dhania', reason: 'Antioxidants joint ki oxidative damage slow karte hain' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Papaya', reason: 'Papain enzyme hota hai jo joint mein inflammation mediators (prostaglandins) ko break karta hai' },
        { _key: 'i12', food: 'Seb (with skin)', reason: 'Quercetin hota hai – ye flavonoid rheumatoid arthritis mein inflammatory cytokines block karta hai' },
        { _key: 'i13', food: 'Anar (pomegranate)', reason: 'Punicalagins hote hain jo joint cartilage-degrading enzymes inhibit karte hain – OA patients mein promising results' },
        { _key: 'i14', food: 'Amla (dry ya fresh)', reason: 'Vitamin C highest concentration mein – joint collagen repair ke liye zaroor chahiye' },
        { _key: 'i15', food: 'Nimbu', reason: 'Vitamin C + alkalizing effect – joint mein uric acid crystals dissolve karne mein help karta hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal', reason: 'Sabse easily digest hoti hai – joint mein inflammation ke dauran gut ko strain nahi deti' },
        { _key: 'i17', food: 'Masoor dal', reason: 'Zinc aur selenium hote hain jo joint tissue repair ke liye anti-inflammatory role mein kaam karte hain' },
        { _key: 'i18', food: 'Chana (soaked, boiled)', reason: 'Plant-based protein – joint muscle support ke liye zaroori – processed protein se better kyunki inflammatory load nahi' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i19', food: 'Haldi + kali mirch', reason: 'Curcumin arthritis mein proven anti-inflammatory compound hai – kali mirch ka piperine uska absorption 20x badhata hai' },
        { _key: 'i20', food: 'Adrak', reason: 'Gingerols hote hain jo COX-2 enzyme inhibit karte hain – wahi enzyme jo NSAIDs bhi target karti hain – joint pain mein direct effect' },
        { _key: 'i21', food: 'Ajwain ka paani (subah)', reason: 'Thymol hota hai jo joint inflammation mein mild analgesic effect deta hai' },
        { _key: 'i22', food: 'Sarson ka tel', reason: 'ALA (omega-3) hota hai jo joint mein inflammatory eicosanoids kam karta hai – refined oil se better' },
        { _key: 'i23', food: 'Green tea (1-2 cups)', reason: 'EGCG compound hai jo joint cartilage breakdown karne wale enzymes block karta hai' },
        { _key: 'i24', food: 'Jeera water', reason: 'Cumin mein anti-inflammatory compounds hain jo gut health improve karte hain – gut-joint axis arthritis mein important hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla machhli (boiled ya steamed)', reason: 'Omega-3 fatty acids hain jo joint mein prostaglandin E2 reduce karte hain – PUFAs arthritis mein clinically studied' },
    { _key: 'nva2', food: 'Ande ki safedi (egg white, boiled)', reason: 'High protein, joint muscle support – yolk zyada nahi lena – arachidonic acid inflammation badhata hai' },
    { _key: 'nva3', food: 'Chicken (boiled ya grilled, skinless)', reason: 'Lean protein joint tissue repair ke liye – fry nahi – cooking method directly inflammation affect karta hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Red meat (mutton, beef)', reason: 'Arachidonic acid zyada – body mein pro-inflammatory leukotrienes badhate hain jo joint swelling seedha trigger karte hain' },
    { _key: 'nvav2', food: 'Fried chicken / pakoda', reason: 'Trans fat + advanced glycation end products (AGEs) – joint cartilage degradation accelerate karte hain' },
    { _key: 'nvav3', food: 'Packaged / processed meat (sausage, salami)', reason: 'Sodium aur preservatives joint fluid retention badhate hain jo swelling worse karta hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour, bread, biscuit)', reason: 'Refined carbs body mein AGEs banate hain jo joint cartilage pe directly attach hote hain aur damage karte hain' },
        { _key: 'ri2', food: 'Instant noodles / pasta', reason: 'High sodium + refined carbs – joint mein fluid retention badhta hai jo stiffness increase karta hai' },
        { _key: 'ri3', food: 'Packaged namkeen / chips', reason: 'Trans fat + acrylamide – arthritis mein joint oxidative stress badhate hain' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full-fat packaged milk (commercial)', reason: 'Casein protein kuch logon mein joint inflammation trigger karta hai – especially RA patients mein commonly reported' },
        { _key: 'ri5', food: 'Paneer (zyada matra mein)', reason: 'Saturated fat high hota hai jo arachidonic acid pathway activate karta hai jisse inflammatory prostaglandins bante hain' },
        { _key: 'ri6', food: 'Cream / cheese / butter', reason: 'Saturated fats arthritis joint inflammation ko amplify karte hain' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Refined sugar (mithai, cold drinks, packaged juice)', reason: 'Sugar CRP aur cytokines badhata hai – ye wahi inflammation markers hain jo arthritis flare-up mein elevated hote hain' },
        { _key: 'ri8', food: 'Bahut zyada mirch wala khaana', reason: 'Capsaicin internally gut mein joint-related nerve sensitization badha sakti hai RA mein – avoid karo' },
        { _key: 'ri9', food: 'Vanaspati / dalda', reason: 'Trans fats joint mein omega-6 to omega-3 ratio bigadte hain – arthritis mein ye ratio bahut critical hota hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Chai (3+ cups daily)', reason: 'Tannins iron absorption block karte hain – arthritis mein iron deficiency anemia common complication hai' },
        { _key: 'ri11', food: 'Cold drinks / soda', reason: 'Phosphoric acid bone density reduce karta hai – arthritis mein already bone health compromised hoti hai' },
        { _key: 'ri12', food: 'Alcohol', reason: 'Purines badhata hai jo uric acid increase karta hai – gouty arthritis mein direct trigger – RA mein bhi disease activity worse karta hai' },
        { _key: 'ri13', food: 'Packaged fruit juice', reason: 'Sugar spike aur no fiber – joint inflammation index badhata hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Gunguna paani + 1/2 nimbu ka ras + chutki haldi', 'Ajwain ka paani (ajwain raat bhar bheego, subah piyo)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with palak + gajar (namkeen) + adrak chai (1 cup)', 'Moong dal chilla (2 pcs) + pudina chutney'], nonVegOption: '2 ande boiled (sirf safedi) + 1 multigrain roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb (with skin) ya papaya (1 katori)', 'Bhuna chana (1 mutthi) + 1 amla (dry ya fresh)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal + palak sabzi + salad', 'Brown rice (1 katori) + masoor dal + lauki ki sabzi'], nonVegOption: '1-2 roti + grilled rohu machhli (steamed) + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Haldi doodh (ghar ka, kali mirch ke saath)', 'Green tea (1 cup) + akhrot 4-5 pieces'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + arhar dal + turai/lauki ki sabzi', 'Moong dal khichdi (kam masala) + desi ghee 1 tsp'], nonVegOption: 'Clear chicken soup (no cream, no maida) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Gunguna haldi doodh (ghar ka doodh + kali mirch)', 'Methi seeds bhigo ke khana (1 tsp bheegi hui)'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Gunguna paani + nimbu + haldi',
      vegNashta: 'Daliya (namkeen) + palak + 1 adrak chai',
      vegDopahar: '2 bajra roti + moong dal + lauki sabzi + salad',
      vegShaam: 'Papaya (1 katori) + bhuna chana',
      vegRaat: 'Arhar dal + gajar-methi sabzi + 2 roti',
      nonVegNashta: '2 boiled ande (sirf safedi) + 1 multigrain roti',
      nonVegDopahar: 'Grilled rohu machhli (steamed) + 2 roti + palak sabzi',
      nonVegRaat: 'Clear chicken soup (no cream) + 2 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Ajwain paani (raat bhar bheega)',
      vegNashta: '2 moong dal chilla + pudina chutney',
      vegDopahar: 'Brown rice + masoor dal + karela sabzi',
      vegShaam: 'Green tea + 4-5 akhrot',
      vegRaat: 'Khichdi (moong + rice, kam masala) + 1 tsp ghee',
      nonVegNashta: '2 boiled ande (poached ya boiled) + daliya',
      nonVegDopahar: 'Grilled skinless chicken (boiled) + brown rice + sabzi',
      nonVegRaat: 'Chicken clear soup + 1 roti',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Methi seeds paani (raat bhar bheegi)',
      vegNashta: 'Oats daliya + gajar + adrak (namkeen style)',
      vegDopahar: '2 jowar roti + chana sabzi + palak + salad',
      vegShaam: '1 seb (with skin) + amla (1 piece)',
      vegRaat: 'Masoor dal + turai sabzi + 1-2 roti',
      nonVegNashta: '1 boiled anda (safedi) + moong dal chilla',
      nonVegDopahar: 'Steamed katla machhli + jowar roti + salad',
      nonVegRaat: 'Dal + sabzi + 1 roti',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Gunguna paani + 1/2 nimbu',
      vegNashta: 'Poha (kam tel, rai + haldi + gajar) + 1 cup herbal chai',
      vegDopahar: 'Brown rice + arhar dal + methi sabzi',
      vegShaam: 'Haldi doodh (kali mirch ke saath)',
      vegRaat: 'Moong dal + lauki sabzi + 2 roti',
      nonVegNashta: 'Poha + 1 boiled anda',
      nonVegDopahar: 'Grilled chicken (100g, boiled) + brown rice + sabzi',
      nonVegRaat: 'Moong dal + lauki + roti',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi (moong + rice), daliya ya lauki ka soup piyo – gut ko strain mat do – inflammation aur badh sakti hai',
        'Dairy, maida, fried khaana us din bilkul nahi – ye flare-up extend karte hain',
        'Haldi + adrak ka kadha (gungune paani mein piso + ubalo) – din mein 2 baar piyo – joint inflammation mein seedha help karta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi safe hai arthritis mein – energy milti hai aur joint pe stress nahi aata – lekin zyada ghee se nahi',
        'Fruits – seb, papaya, anar – arthritis-friendly hain aur vrat mein bhi allowed hain',
        'Vrat mein namkeen chips ya pakode bilkul nahi – fried + salt combination joint fluid retention worst trigger hai',
        'RA mein zyada lamba fast (12+ ghante) avoid karo – khaali pet inflammation markers badh sakte hain – doctor se poochho',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: Dal tadka (butter kam karo), plain roti (naan nahi – maida hai), sabzi (gravy-heavy nahi)',
        'Avoid karo: Paneer butter masala, biryani (maida + ghee), fried starters – inn mein hidden trans fat aur high sodium dono hote hain',
        'Practical hack: Pehle ek glass paani piyo, roti plain maango, gravy alag – restaurant gravy mein heavy cream aur oil control karna mushkil hota hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: Bhuna chana, dry amla, akhrot (4-5 pieces), roti (2-3 din chal jaati hai), dry methi seeds',
        'Train/hotel mein: Dal chawal order karo, plain roti + sabzi – biryani aur fried items avoid karo',
      ],
    },
  ],

  proTip: 'Haldi sirf khaane mein mat dalo – roz subah 1/4 tsp haldi + 1/4 tsp kali mirch ek glass gungune paani mein gholo aur piyo – khaali pet absorption sabse behtar hoti hai aur joint inflammation pe seedha effect deta hai.',
  importantNote: 'Ye chart ek general guide hai – arthritis ke alag alag types (RA, OA, Gouty) mein specific restrictions ho sakti hain. Apni condition ke hisab se apne homoeopath se personalized plan banwayein.',
  homeopathyDiet: 'Jab diet mein anti-inflammatory foods consistently shamil hote hain, homeopathic medicines arthritis mein zyada effectively kaam karti hain – gut aur immune system dono sahi rehte hain jo treatment response improve karta hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya arthritis mein dahi (curd) kha sakte hain?',
      answer: 'Haan – ghar ka fresh bana dahi (1 small katori) arthritis mein allowed hai – packaged ya bahut zyada matra mein nahi.\nFresh dahi mein tyramine aur casein zyada nahi hota – aur probiotics hote hain jo gut health improve karte hain.\nGut-joint axis arthritis mein important hai – healthy gut = kam inflammatory signals = joint pain thoda better.\nPackaged ya bahut sour dahi avoid karo – wo joint inflammation trigger kar sakta hai kuch patients mein.\nApne response dekho – agar dahi ke baad stiffness badhe toh kuch din band karo.',
    },
    {
      _key: 'faq2',
      question: 'Arthritis mein nimbu aur khatta khaana chahiye ya nahi?',
      answer: 'Nimbu arthritis mein allowed hai – seedha avoid karne ki zaroorat nahi.\nNimbu alkalizing effect deta hai body mein – aur vitamin C hota hai jo joint collagen repair ke liye zaroor chahiye.\nConfusion ye hai ki nimbu khatta lagta hai – lekin body mein alkaline ho jata hai metabolism ke baad.\nBahut zyada imli, raw aam, ya kairi (kaachi) khatai avoid karo – unka net effect alag ho sakta hai.\n1/2 nimbu paani mein – roz safe hai arthritis mein.',
    },
    {
      _key: 'faq3',
      question: 'Arthritis mein chawal khana theek hai ya nahi?',
      answer: 'Hand-pounded chawal ya brown rice arthritis mein allowed hai – white refined rice zyada nahi.\nRefined white rice high glycemic index ka hota hai – blood sugar spike – inflammation markers (CRP) badh jaate hain.\nBrown rice ya hand-pounded rice slow digestion karta hai – inflammation load kam rehta hai.\nAgar chawal bilkul band nahi kar sakte – to moong dal ke saath khao – glycemic load balance ho jaata hai.',
    },
    {
      _key: 'faq4',
      question: 'Diet se arthritis mein kitne waqt mein fark dikhta hai?',
      answer: 'Diet change se arthritis mein fark typically 4-8 hafte mein notice hona shuru hota hai – kuch patients pehle bhi.\nJoint inflammation diet se directly affect hoti hai – lekin cartilage damage reverse hone mein waqt lagta hai.\nSabse pehle jo improve hota hai: subah ki stiffness kam hoti hai, swelling thodi reduce hoti hai.\nLong-term – 3-6 mahine consistent diet se disease progression slow hota hai – immediate cure nahi.\nHomeopathic treatment ke saath diet agar consistent ho to response faster dekhne ko mila hai.',
    },
    {
      _key: 'faq5',
      question: 'Arthritis mein chai / coffee peena chahiye ya nahi?',
      answer: '1 cup adrak/tulsi chai (kam milk, kam sugar) – arthritis mein theek hai.\n3+ cups regular chai avoid karo – tannins iron absorption block karte hain – arthritis mein iron deficiency anemia common problem hai.\nGreen tea better option hai – EGCG compound joint cartilage breakdown karne wale enzymes block karta hai.\nCoffee – 1 cup okay hai – lekin zyada coffee bone density pe negative effect daal sakti hai.\nPackaged flavored tea ya cold coffee – avoid – sugar + additives joint inflammation badhate hain.',
    },
    {
      _key: 'faq6',
      question: 'Arthritis mein vrat rakh sakte hain ya nahi?',
      answer: 'Haan – arthritis mein vrat rakha ja sakta hai – lekin zyada lamba khaali pet avoid karo.\nRA mein especially – khaali pet zyada der rehne se inflammatory markers temporarily badh sakte hain.\nSafe vrat options: sabudana (ghee kam), fruits (seb, papaya, anar), singhara atta roti – ye arthritis-friendly hain.\nVrat mein pakode, chips, bahut namkeen cheezein avoid karo – joint fluid retention ka direct risk hai.\nAgar knees ya hands mein bahut zyada swelling hai us dauran – apne doctor se vrat ke baare mein poochh ke rakho.',
    },
    {
      _key: 'faq7',
      question: 'Arthritis mein raat ko late khaana theek hai kya?',
      answer: 'Nahi – arthritis mein raat 7-8 ke baad heavy khaana avoid karna chahiye.\nRaat ko digestion slow ho jaati hai – heavy khaana gut mein ferment karta hai – inflammatory byproducts bante hain jo joint pain aur stiffness morning mein worse karte hain.\nYe morning stiffness ka ek underrated reason hai – late dinner seedha next morning ki stiffness se connect hota hai.\nRaat ka khaana: Khichdi, light dal, sabzi – 2 roti max – aur 7-8 baje tak khatam karo.',
    },
    {
      _key: 'faq8',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Homeopathic medicine ke saath specific food restriction hoti hai – sabke liye ek rule nahi.\nCoffee aur strong smell wali cheezein (camphor, garlic zyada matra mein) – kuch homeopathic medicines ke saath doctors avoid karne ki recommend karte hain – lekin ye medicine-specific hai.\nGeneral rule: Medicine se 30 minute pehle aur baad kuch mat khao – especially strong taste wali cheez.\nApne specific medicine ke baare mein apne homoeopath se exactly poochho – generalize karna sahi nahi hoga.',
    },
    {
      _key: 'faq9',
      question: 'Arthritis mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karna zaroor nahi – lekin type matter karta hai.\nFish (rohu, katla) aur boiled egg white – arthritis mein allowed hain – omega-3 aur lean protein dono milte hain.\nRed meat (mutton, beef) aur fried chicken – avoid karo – arachidonic acid joint inflammation seedha badhata hai.\nAgar RA hai – kuch patients mein animal protein reduction se symptoms better hote hain – individual response dekho.\nVegetarian diet overall arthritis mein better outcomes dikhate hain – lekin non-veg completely band karna agar mushkil hai to sahi alternatives choose karo.',
    },
    {
      _key: 'faq10',
      question: 'Arthritis mein aloo (potato) kha sakte hain?',
      answer: 'Haan – aloo arthritis mein completely banned nahi hai – lekin zyada fried ya mashed (butter ke saath) nahi.\nAalu nightshade family ka hai – kuch log mante hain nightshades (aalu, tamatar, baingan) arthritis worsen karte hain – lekin research mein ye consistently prove nahi hua hai.\nBoiled aalu ya baked aalu (without cream/butter) – arthritis mein okay hai – energy milti hai.\nAgar aapko personally lagta hai ki aalu ke baad dard badha – 2 hafte avoid karo aur dekho – individual sensitivity possible hai.\nFried aalu (chips, french fries) – arthritis mein avoid karein – trans fat aur AGEs joint damage karte hain.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Schonenberger KA et al — Effect of Anti-Inflammatory Diets on Pain in Rheumatoid Arthritis: A Systematic Review and Meta-Analysis — Nutrients', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/34959772' },
    { _key: 's2', name: 'Philippou E et al — Rheumatoid arthritis and dietary interventions: systematic review of clinical trials — Nutrition Reviews', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/32585000' },
    { _key: 's3', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Dairy aur maida ek saath chodh nahi paate – ek chodh ke doosra jaari rakhte hain – dono pro-inflammatory hain aur saath mein zyada effect karte hain',
    mustEat: 'Haldi + kali mirch – gungune paani mein roz subah – curcumin aur piperine ka combination arthritis mein sabse studied Indian food pair hai',
    mustAvoid: 'Vanaspati / dalda – trans fat joint mein omega-6 to omega-3 ratio directly bigadhta hai – arthritis mein ye ratio sabse zyada matter karta hai',
  },

  doctorNote: 'Mere arthritis patients mein maine notice kiya hai ki jo log raat ka khaana early karte hain (7 baje tak) aur haldi-kali mirch ka paani subah lete hain – unka morning stiffness clearly less hota hai – treatment response bhi better dikhta hai akele medicines ke comparison mein. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Arthritis mein kya khayein, kya nahi – complete list: homeopedia.in/diet/arthritis',
  shareTextMealPlan: 'Arthritis ke liye 4-din ka Indian diet plan: homeopedia.in/diet/arthritis',
  shareTextPage: 'Arthritis Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/arthritis',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Arthritis diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Arthritis diet chart seeded — homeopedia.in/diet/arthritis')
}

seed().catch(console.error)
