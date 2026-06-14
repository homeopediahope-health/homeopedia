import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-pcod',
  _type: 'diet',
  title: 'PCOD / PCOS Diet Chart',
  hindiName: 'PCOD / PCOS',
  slug: { _type: 'slug', current: 'pcod' },
  relatedDiseaseSlug: 'pcod',
  category: "Women's",
  metaTitle: 'PCOD Diet Chart Hindi Mein — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'PCOD/PCOS mein kaunsa khana hormones balance karta hai aur kya avoid karein? Complete Indian diet chart Hindi mein with meal plan. Homeopedia pe padho.',
  intro: 'PCOD mein insulin resistance aur androgen imbalance hota hai — galat khaana in dono ko aur bada deta hai aur symptoms worse karta hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah 8 baje tak nashta zaroor karo', reason: 'khaali pet rehne se insulin spike hoti hai jo PCOD hormones aur bigaad deta hai' },
    { _key: 'eh2', habit: 'Raat 7 baje ke baad heavy khaana avoid karo', reason: 'late eating se insulin resistance badhti hai — PCOD ka core problem' },
    { _key: 'eh3', habit: 'Har 3-4 ghante mein thoda thoda khao', reason: 'blood sugar stable rahega — androgen level automatically control mein aata hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'low glycemic index — blood sugar spike nahi karta — PCOD mein insulin response better rahta hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'white rice se kam GI — slow energy release karta hai — insulin resistant PCOD patients ke liye better choice' },
        { _key: 'i3', food: 'Jowar / Bajra roti', reason: 'fiber rich — gut mein slow digest hota hai — testosterone spike rokta hai' },
        { _key: 'i4', food: 'Oats (plain, no flavour)', reason: 'beta-glucan fiber hota hai — PCOD mein cholesterol aur blood sugar dono manage karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'iron aur magnesium dono hain — PCOD mein dono ki deficiency common hai — cycle regulate karne mein help karta hai' },
        { _key: 'i6', food: 'Karela', reason: 'blood sugar control karta hai — insulin sensitivity improve karta hai — PCOD ka core mechanism address karta hai' },
        { _key: 'i7', food: 'Lauki', reason: 'light on gut — liver pe koi load nahi — PCOD mein liver function important hai hormone metabolism ke liye' },
        { _key: 'i8', food: 'Methi (patta aur daana)', reason: 'phytoestrogen hota hai — naturally androgen excess ko balance karta hai' },
        { _key: 'i9', food: 'Broccoli', reason: 'indole-3-carbinol hota hai — excess estrogen liver se clear karne mein help karta hai — PCOD mein helpful' },
        { _key: 'i10', food: 'Patta gobi / Bandh gobi', reason: 'liver detox path support karta hai — androgen metabolism ke liye' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Seb (apple)', reason: 'quercetin hota hai — PCOD mein ovarian inflammation reduce karta hai' },
        { _key: 'i12', food: 'Papaya', reason: 'papain enzyme hota hai — PCOD mein irregular periods mein natural uterine tone improve karta hai' },
        { _key: 'i13', food: 'Amla', reason: 'Vitamin C high — cortisol manage karta hai — PCOD mein stress hormones seedha androgen badhate hain' },
        { _key: 'i14', food: 'Nashpati (pear)', reason: 'low GI fruit — fiber high — insulin spike nahi karta — PCOD ke liye safe sweet option' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i15', food: 'Moong dal (chhilke wali)', reason: 'protein + fiber combination — blood sugar stable rakhti hai — insulin resistance kam hoti hai' },
        { _key: 'i16', food: 'Masoor dal', reason: 'plant protein + folate — PCOD mein hormonal balance ke liye folate zaroori hota hai' },
        { _key: 'i17', food: 'Kala chana (boiled)', reason: 'resistant starch hota hai — insulin response improve karta hai — PCOD management mein proven helpful' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i18', food: 'Spearmint chai (pudina)', reason: 'anti-androgen properties hain — research mein PCOD mein testosterone level kam karta hai' },
        { _key: 'i19', food: 'Haldi + kali mirch (saath mein)', reason: 'curcumin inflammation kam karta hai — kali mirch ke bina haldi absorb nahi hoti — dono saath jaruri hain' },
        { _key: 'i20', food: 'Dalchini (cinnamon)', reason: 'insulin sensitivity improve karta hai — PCOD mein blood sugar regulation ke liye direct benefit' },
        { _key: 'i21', food: 'Jeera paani (subah)', reason: 'liver stimulate karta hai — hormone metabolism fast hota hai — PCOD mein helpful' },
        { _key: 'i22', food: 'Sarson ka tel / Til ka tel', reason: 'balanced omega fatty acids — PCOD mein inflammatory load kam karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Anda (boiled, 2)', reason: 'protein high — insulin response better hota hai — PCOD mein lean protein zaroori hai' },
    { _key: 'nva2', food: 'Surmai / Rohu machli (grilled ya steamed)', reason: 'omega-3 fatty acids — PCOD mein ovarian inflammation directly kam karta hai' },
    { _key: 'nva3', food: 'Chicken breast (boiled ya grilled only)', reason: 'lean protein — blood sugar stable rakhta hai — androgen levels par neutral effect' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / egg pakoda', reason: 'trans fat insulin resistance badhata hai — PCOD worse hoti hai' },
    { _key: 'nvav2', food: 'Mutton / Red meat', reason: 'saturated fat zyada — PCOD mein inflammation badhti hai — androgen production stimulate karta hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami)', reason: 'preservatives aur nitrates — estrogen mimicking chemicals hote hain — PCOD disrupt karta hai' },
    { _key: 'nvav4', food: 'Prawns / shellfish', reason: 'heavy to digest — PCOD mein gut health already compromised hoti hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, naan, pizza)', reason: 'high GI — blood sugar spike karta hai — direct insulin resistance badhata hai — PCOD ka core trigger' },
        { _key: 'ri2', food: 'Biscuits / Namkeen / Crackers', reason: 'refined carbs + hidden sugar — ek baar mein insulin zyada release hoti hai — PCOD worsens' },
        { _key: 'ri3', food: 'White bread / Pav', reason: 'maida hi hai — GI 70+ — insulin response immediately high karta hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full-fat packaged doodh (market wala)', reason: 'IGF-1 hormone hota hai packaged dairy mein — PCOD mein androgen aur badhata hai' },
        { _key: 'ri5', food: 'Packaged paneer / processed cheese', reason: 'same IGF-1 concern — ghar ka taaza paneer (limited) allowed hai — packaged nahi' },
        { _key: 'ri6', food: 'Ice cream', reason: 'sugar + dairy + fat — PCOD mein teen triggers ek saath — avoid karo' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Refined sugar (meethai, mithai, gulab jamun)', reason: 'direct insulin spike — PCOD mein sabse bada dietary trigger hai' },
        { _key: 'ri8', food: 'Deep fried foods (samosa, pakoda, poori)', reason: 'trans fat + maida combination — insulin resistance worst case banata hai' },
        { _key: 'ri9', food: 'Achaar zyada', reason: 'sodium high — PCOD mein bloating aur water retention badhta hai jo already ek symptom hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Packaged fruit juice (tetra pack)', reason: 'sugar concentrated — fiber nahi — direct fructose liver mein insulin resistance badhata hai' },
        { _key: 'ri11', food: 'Cold drinks / Soda', reason: 'empty sugar + phosphoric acid — PCOD mein calcium absorption bhi kam karta hai' },
        { _key: 'ri12', food: 'Excess chai (3+ cups)', reason: 'tannins iron absorption block karte hain — PCOD mein iron already low hoti hai' },
        { _key: 'ri13', food: 'Alcohol', reason: 'liver pe direct load — sex hormone binding globulin (SHBG) kam karta hai — androgen aur zyada free hota hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Jeera paani (1 glass, room temperature) — liver stimulate', 'Methi seeds bheegi hui (1 tsp, raat bhar bheegi) — androgen balance'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Oats (plain, cooked) + 1 seb — fiber + low GI nashta', 'Moong dal chilla (2) + pudina chutney — protein-rich'], nonVegOption: '2 boiled ande + 1 multigrain roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seasonal fruit (seb ya nashpati) — no juice', 'Bhuna chana (mutthi bhar) — low GI snack'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal + lauki sabzi + salad', 'Brown rice (1 katori) + masoor dal + karela sabzi'], nonVegOption: 'Grilled surmai/rohu + 2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Pudina (spearmint) chai + akhrot 4-5', 'Kala chana (boiled, thoda namak nimbu) — filling'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + palak sabzi + ghar ka dahi (1 small katori)', 'Khichdi (moong dal + brown rice) + ghee 1 tsp'], nonVegOption: 'Chicken soup (no cream, no maida) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (low-fat ghar ka doodh, no sugar)', 'Warm jeera/saunf paani — bloating kam karta hai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Jeera paani + methi seeds',
      vegNashta: 'Oats + seb',
      vegDopahar: 'Jowar roti + moong dal + lauki sabzi',
      vegShaam: 'Spearmint chai + akhrot',
      vegRaat: '2 roti + palak sabzi + ghar ka dahi',
      nonVegNashta: '2 boiled ande + roti',
      nonVegDopahar: 'Grilled surmai + 2 roti + sabzi',
      nonVegRaat: 'Chicken soup + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Jeera paani + bheegi amla',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Brown rice + masoor dal + broccoli sabzi',
      vegShaam: 'Bhuna chana + 1 nashpati',
      vegRaat: 'Khichdi (moong + bajra) + ghee',
      nonVegNashta: 'Egg chilla (2)',
      nonVegDopahar: 'Rohu machli grilled + brown rice + dal',
      nonVegRaat: 'Khichdi (same)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Dalchini paani (1 inch dalchini raat bhar bheegi)',
      vegNashta: 'Poha (brown rice poha) + vegetables',
      vegDopahar: '2 bajra roti + kala chana + methi sabzi',
      vegShaam: 'Spearmint chai + 4 badam (bheege)',
      vegRaat: '2 roti + karela sabzi + ghar ka dahi',
      nonVegNashta: 'Oats (veg same)',
      nonVegDopahar: 'Chicken breast grilled + bajra roti + sabzi',
      nonVegRaat: '2 roti + sabzi + dahi (same)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Jeera paani + pudina patta 4-5 chaba lo',
      vegNashta: 'Daliya (namkeen) + vegetables',
      vegDopahar: 'Jowar roti + arhar dal + patta gobi sabzi',
      vegShaam: '1 seb + bhuna chana',
      vegRaat: 'Moong dal khichdi + ghee + salad',
      nonVegNashta: '2 ande boiled + daliya',
      nonVegDopahar: 'Grilled fish + jowar roti',
      nonVegRaat: 'Khichdi (same)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Sirf khichdi, daliya ya moong dal soup us din — gut load zero',
        'Dairy, maida, aur sugar us din completely band — even ghar ka dahi bhi — agar acne flare-up hai specifically',
        'Warm jeera + saunf paani din mein 3 baar — bloating fast kam karta hai PCOD mein',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Kuttu ki roti + sendha namak allowed — low GI, PCOD-safe',
        'Sabudana — ek baar mein thoda hi khao — high GI hai — zyada khane se blood sugar spike hoga — saath mein peanuts lo',
        'Vrat mein full din bhookha rehna PCOD mein avoid karo — blood sugar crash hoga — androgen spike ka risk hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: dal tadka/dal fry (maida nahi hoti) + roti (tandoori roti, naan nahi) + raita instead of curry',
        'Avoid karo: naan, butter chicken (cream + maida), koi bhi fried item, packaged raita (sugar ho sakta hai)',
        'Practical hack: khane se pehle ek glass paani pee lo — appetite control hogi — insulin response better hogi PCOD mein',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, badam (bheege, dry), plain oats sachet, amla candy (no sugar wali) — ye PCOD-safe snacks hain',
        'Train/hotel mein: plain dal chawal order karo ya idli (South mein) — fried snacks, biscuits, white bread avoid karo',
      ],
    },
  ],

  proTip: 'PCOD patients mein maine notice kiya hai ki jo log khaane ke saath pehle salad khate hain — chahe 2-3 min pehle — unka blood sugar spike meal ke baad clearly kam hota hai. Fiber pehle aata hai toh glucose absorption slow hoti hai.',
  importantNote: 'Ye chart ek general guide hai — PCOD ka type aur severity har patient mein alag hota hai. Apni condition ke hisaab se apne homoeopath ya gynaecologist se personalized plan zaroor banwayein.',
  homeopathyDiet: 'PCOD mein diet sahi ho toh homeopathic medicines body mein insulin sensitivity aur hormonal balance pe faster kaam karti hain — akele sirf medicine ya sirf diet se slower results hote hain — dono saath best response dete hain.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya PCOD mein dahi (curd) khana chahiye ya band karna chahiye?',
      answer: 'Ghar ka taaza bana dahi (1 small katori) allowed hai — band karne ki zaroorat nahi.\nGhar ke dahi mein probiotics hote hain jo gut-hormone axis improve karte hain — PCOD mein gut health important hoti hai.\nLekin packaged/market wala set dahi avoid karo — usme IGF-1 hormone ho sakta hai jo androgen production badhata hai.\nRaat ko dahi nahi — sirf dopahar ya shaam ko.\nApne doctor se confirm karo agar acne bahut severe ho — kuch cases mein dairy temporarily band karne se fark aata hai.',
    },
    {
      _key: 'faq2',
      question: 'PCOD mein chawal khana chahiye ya bilkul band karna chahiye?',
      answer: 'Bilkul band karna zaroori nahi — switching zaroori hai.\nWhite rice ki jagah brown rice lo — GI (glycemic index) kam hota hai — insulin spike nahi karta.\nBrown rice bhi 1 katori limit mein raho dopahar ke khaane mein.\nRaat ko chawal avoid karo — din mein allowed hai.\nJowar/bajra roti agar possible ho toh aur bhi better option hai.',
    },
    {
      _key: 'faq3',
      question: 'PCOD diet se kitne din ya mahine mein fark dikhta hai?',
      answer: 'Diet change ka asar 4-8 hafte mein dekhna shuru hota hai.\nPehle changes — bloating kam hona, skin thoda saaf hona, energy better hona — ye usually 3-4 hafte mein dikhte hain.\nCycle regulate hona — yeh 2-3 months ka consistent diet chahiye — akele diet se nahi — homeopathic treatment ke saath milake better result hota hai.\nHar patient alag hai — apne doctor se regular follow-up rakho.',
    },
    {
      _key: 'faq4',
      question: 'PCOD mein chai aur coffee peena theek hai?',
      answer: 'Plain chai (no sugar, ghar ka doodh) — 1-2 cups okay hai.\nSpearmint chai (pudina chai) PCOD mein specifically recommended hai — testosterone level naturally kam karne mein help karta hai.\nCoffee — 1 cup (no sugar, no cream) allowed hai.\n3+ cups chai/coffee avoid karo — tannins iron absorb nahi hone deta — PCOD mein iron deficiency common problem hai.\nPackaged chai premix — sugar + artificial flavours — avoid karo.',
    },
    {
      _key: 'faq5',
      question: 'PCOD mein vrat ya fast kar sakte hain?',
      answer: 'Vrat kar sakte hain — lekin poora din bhookha rehna avoid karo.\nPCOD mein blood sugar crash bahut quickly hota hai — cortisol spike hota hai — androgen aur bhadhta hai.\nSafe vrat options: kuttu roti, sabudana (thoda, peanuts ke saath), sweet potato (shakarkand), fruits.\nVrat mein paani ya jeera paani regular peete raho.\nAgar chakkar aaye, weakness ho — turant kuch kha lo — PCOD mein strict fasting recommended nahi hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya PCOD mein raat ko late khaana bahut bura hai?',
      answer: 'Haan — PCOD mein raat ka late khaana specially harmful hai.\nRaat 7-8 baje ke baad heavy meal se insulin resistance badhti hai — jo PCOD ka core metabolic problem hai.\nLate night khaane se cortisol level bhi disturb hota hai — cortisol PCOD mein androgen production aur bhadhata hai.\nAgar bhookh lage — warm haldi doodh ya jeera paani le lo.\nYe ek adat hai jo patients bahut underestimate karte hain — doctor se bhi ye point cover karwao.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicines ke saath koi khaana band karna padta hai PCOD mein?',
      answer: 'PCOD ki homeopathic medicines ke saath koi strict food restriction usually nahi hoti.\nKuch medicines ke saath strong smell (camphor, raw onion, raw garlic) avoid karne ki advice di jaati hai — apne doctor se confirm karo — ye individual medicine pe depend karta hai.\nCoffee — kuch doctors avoid karne ko kehte hain specific medicines ke saath — generalize nahi karna.\nJo PCOD ki wajah se khaana chhod rahe ho (sugar, maida) — wo diet ke liye hai, medicine restriction nahi — fark samjho.',
    },
    {
      _key: 'faq8',
      question: 'PCOD mein non-veg bilkul band karna padega?',
      answer: 'Nahi — non-veg completely band karne ki zaroorat nahi.\nFish (rohu, surmai, katla) — PCOD mein actually recommended hai omega-3 ke liye — ovarian inflammation kam karta hai.\nEggs (boiled) — lean protein — PCOD management mein helpful.\nChicken (boiled/grilled) — allowed hai.\nJo avoid karna hai: red meat (mutton, beef), fried non-veg, processed meat (sausage, salami) — ye PCOD worse karte hain.\nCooking method sabse matter karta hai — boil ya grill karo, fry nahi.',
    },
    {
      _key: 'faq9',
      question: 'PCOD mein kela (banana) khana chahiye ya nahi?',
      answer: 'Kela allowed hai — lekin limited aur timing se.\nRipe kele ka GI medium-high hota hai — ek din mein 1 kela subah nashte ke waqt theek hai.\nOverripe/bahut pakka kela avoid karo — sugar content bahut zyada hota hai — insulin spike hoga.\nGreen/slightly raw kela better option hai PCOD mein — resistant starch hota hai jo insulin response slow karta hai.\nKele ki jagah seb ya nashpati kaafi better fruit choice hai.',
    },
    {
      _key: 'faq10',
      question: 'PCOD mein aloo (potato) khana theek hai kya?',
      answer: 'Completely band karne ki zaroorat nahi — lekin limit karo.\nBoiled/baked aloo — roti ke saath (small portion) — allowed.\nFried aloo (chips, french fries, samosa) — avoid — trans fat + high GI combination PCOD worst case banata hai.\nAloo ka GI high hai — isliye jowar roti ya bajra roti ke saath khao — overall meal ka GI balance hota hai.\nHar roz nahi — week mein 2-3 baar limit karo.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Stanczak NA et al — Latest reports and treatment methods on polycystic ovary syndrome — Annals of Medicine', year: '2024', url: 'https://pubmed.ncbi.nlm.nih.gov/38965663' },
    { _key: 's2', name: 'Alesi S et al — Nutritional Supplements and Complementary Therapies in PCOS — Advances in Nutrition', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/34970669' },
    { _key: 's3', name: 'Shahid R et al — Diet and lifestyle modifications for effective management of PCOS — Journal of Food Biochemistry', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35199348' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Fruit juice peena (healthy lagta hai) — lekin fiber nahi, sirf concentrated sugar — direct insulin spike karta hai',
    mustEat: 'Spearmint chai (pudina) — PCOD mein anti-androgen evidence hai — research-backed',
    mustAvoid: 'Packaged fruit juice aur cold drinks — PCOD mein worst drink choice, chahe label pe "natural" likha ho',
  },

  doctorNote: 'Mere PCOD patients mein jo log sirf ek cheez consistently karte hain — raat 7 baje ke baad khaana band — unka treatment response baaki sab se clearly better hota hai, even jab baaki diet perfect nahi hoti. Ye ek habit zyada fark karti hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'PCOD mein kya khayein, kya nahi — complete list: homeopedia.in/diet/pcod',
  shareTextMealPlan: 'PCOD ke liye 4-din ka Indian diet plan: homeopedia.in/diet/pcod',
  shareTextPage: 'PCOD Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/pcod',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding PCOD diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ PCOD diet chart seeded — homeopedia.in/diet/pcod')
}

seed().catch(console.error)
