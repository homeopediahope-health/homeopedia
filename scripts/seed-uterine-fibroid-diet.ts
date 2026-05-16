import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-uterine-fibroid',
  _type: 'diet',
  title: 'Uterine Fibroid (Bacchedani Ki Rasoli) Diet Chart',
  hindiName: 'Bacchedani Ki Rasoli / Gathaan',
  slug: { _type: 'slug', current: 'uterine-fibroid' },
  relatedDiseaseSlug: 'uterine-fibroid',
  category: "Women's",
  metaTitle: 'Uterine Fibroid (Rasoli) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Uterine fibroid (bacchedani ki rasoli) diet chart — green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Uterine fibroid mein estrogen ka level body mein zyada hota hai — aur kuch foods is estrogen imbalance ko seedha badhaate hain jisse rasoli ka size aur symptoms dono affect hote hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah khaali pet 1-2 glass lukewarm paani piyo', reason: 'gut regular rahe toh purani estrogen body bahar nikalti hai' },
    { _key: 'eh2', habit: 'Raat ka khaana 7-7:30 baje tak khatam karo', reason: 'late digestion liver pe load dalta hai jo estrogen metabolism slow karta hai' },
    { _key: 'eh3', habit: 'Ek baar mein bada khaana nahi — 4-5 baar thoda thoda khao', reason: 'blood sugar spikes estrogen fluctuation badhate hain jo fibroid symptoms worsen karte hain' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Jowar roti', reason: 'high fiber, gut se excess estrogen bahar nikalne mein help karta hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'refined carbs se bachao — yeh slow digesting hai, blood sugar stable rakhta hai' },
        { _key: 'i3', food: 'Daliya (broken wheat)', reason: 'fiber rich, bowel movement regular rakhta hai joh estrogen clearance ke liye zaroori hai' },
        { _key: 'i4', food: 'Bajra roti (winter mein)', reason: 'iron aur magnesium dono — heavy periods mein blood loss compensate karne mein helpful' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'anti-inflammatory, light on gut, liver ko extra load nahi deta' },
        { _key: 'i6', food: 'Karela', reason: 'liver detox mein help karta hai — liver hi estrogen process karta hai body mein' },
        { _key: 'i7', food: 'Palak', reason: 'iron se bhari hai — fibroid mein heavy bleeding se anemia common hai, palak isko address karta hai' },
        { _key: 'i8', food: 'Broccoli / Phool gobi', reason: 'indole-3-carbinol hota hai jo bad estrogen (16-alpha-hydroxyestrone) ko body se bahar karne mein help karta hai' },
        { _key: 'i9', food: 'Methi (seeds ya saag)', reason: 'fiber + phytoestrogen ka weak form jo strong estrogen receptors ko block karta hai' },
        { _key: 'i10', food: 'Turai', reason: 'light, gut-friendly, anti-inflammatory properties' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Amla (fresh ya dry)', reason: 'Vitamin C + antioxidants jo oxidative stress kam karte hain — fibroid growth se linked inflammation reduce hoti hai' },
        { _key: 'i12', food: 'Papaya', reason: 'papain enzyme digestion improve karta hai aur estrogen metabolism mein liver ko support karta hai' },
        { _key: 'i13', food: 'Seb (apple)', reason: 'quercetin hota hai jo fibroid cells ki growth slow karta hai — research supported' },
        { _key: 'i14', food: 'Jamun (seasonal)', reason: 'blood sugar stable rakhta hai aur iron deficiency mein helpful' },
        { _key: 'i15', food: 'Nar (pomegranate)', reason: 'polyphenols jo uterine inflammation reduce karne mein help karte hain' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chilke wali)', reason: 'easily digest hoti hai — liver pe load nahi — estrogen processing better hoti hai' },
        { _key: 'i17', food: 'Masoor dal', reason: 'iron + folate dono — heavy period mein blood loss recover karne ke liye' },
        { _key: 'i18', food: 'Chana (bhuna ya boiled)', reason: 'plant protein, fiber, blood sugar stable rakhta hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i19', food: 'Haldi + kali mirch ka kadha ya doodh', reason: 'curcumin fibroid cells mein oxidative stress reduce karta hai — kali mirch ke bina absorb nahi hota' },
        { _key: 'i20', food: 'Adrak chai (kam doodh)', reason: 'anti-inflammatory, uterine cramping mein relief deta hai' },
        { _key: 'i21', food: 'Tulsi + mulethi herbal tea', reason: 'liver support karta hai jo estrogen regulate karne ke liye zaroori hai' },
        { _key: 'i22', food: 'Til ka tel (cooking mein)', reason: 'phytoestrogens jo strong synthetic estrogen ke receptors pe occupy karke unhe block karte hain' },
        { _key: 'i23', food: 'Jeera + dhania powder (khaane mein)', reason: 'digestive enzymes activate karte hain, liver detox mein indirect support' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Eggs (boiled)', reason: 'protein + Vitamin D dono — Vitamin D deficiency fibroid growth se directly linked hai studies mein' },
    { _key: 'nva2', food: 'Rohu / Katla / Surmai machli', reason: 'omega-3 fatty acids systemic inflammation reduce karte hain jo fibroid environment mein worsen karta hai' },
    { _key: 'nva3', food: 'Chicken (boiled ya grilled — no fry, no skin)', reason: 'lean protein, blood loss ke baad recovery mein helpful' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Red meat (mutton, beef)', reason: 'arachidonic acid hota hai jo prostaglandins badhata hai — uterine cramping aur fibroid-related pain seedha worse hoti hai' },
    { _key: 'nvav2', food: 'Fried chicken / pakoda style non-veg', reason: 'trans fat liver pe load dalta hai jo estrogen metabolism slow karta hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami, packaged chicken)', reason: 'preservatives + additives endocrine disruptors hain jo estrogen mimicry karte hain' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, naan, biscuits, namkeen)', reason: 'gut mein inflammation badhata hai aur fiber nahi hoti jisse estrogen body mein recirculate karta rehta hai' },
        { _key: 'ri2', food: 'Packaged snacks (chips, namkeen, ready meals)', reason: 'refined carbs + hidden sugar — insulin spikes estrogen imbalance ko worsen karte hain' },
        { _key: 'ri3', food: 'White bread / pav', reason: 'fiber zero, blood sugar spike, liver pe extra load — trifecta of bad for fibroid' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged / full-fat dairy (malai doodh, heavy cream, paneer zyada)', reason: 'saturated fat zyada hone se estrogen storage fat cells mein badhta hai [Ghar ka ek-do katori plain dahi okay hai — probiotic properties gut health support karti hain]' },
        { _key: 'ri5', food: 'Cheese (processed — packaged)', reason: 'high sodium + saturated fat, hormonal balance pe negative impact' },
        { _key: 'ri6', food: 'Butter zyada quantity', reason: 'desi ghee thoda okay, butter zyada nahi — saturated fat estrogen storage badhata hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Soya Products (Special Note)',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Soya milk, soya chunks, soya flour (zyada quantity)', reason: 'phytoestrogen concentration is disease mein high intake pe controversial hai — ek study (Shen et al, 2013) mein soybean milk ka high intake fibroid risk factor paya gaya — moderate rakhein, daily large quantity avoid karein' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri8', food: 'Refined sugar (mithai, cold drinks, packaged juice)', reason: 'insulin spike karta hai, body mein inflammation badhata hai, estrogen dominance worsen hoti hai' },
        { _key: 'ri9', food: 'Bahut zyada teekha khaana', reason: 'uterine irritation badhata hai, heavy bleeding worse ho sakti hai' },
        { _key: 'ri10', food: 'Deep fried foods (pakoda, puri, samosa daily)', reason: 'trans fat liver function affect karta hai' },
        { _key: 'ri11', food: 'Alcohol', reason: 'estrogen metabolism liver mein hoti hai — alcohol liver ko busy rakhta hai, estrogen clear nahi hoti, fibroid growth promote hoti hai' },
        { _key: 'ri12', food: 'Cold drinks / soda', reason: 'phosphoric acid, refined sugar, artificial sweeteners — hormonal disruption' },
        { _key: 'ri13', food: 'Packaged fruit juices', reason: 'fiber nahi, concentrated fructose — blood sugar spike + no fibroid benefit' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['1-2 glass lukewarm paani + nimbu ka ras (no sugar)', 'Bheegi methi seeds (1 tsp) raat se — subah chaba ke khao, paani ke saath'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Moong dal chilla (2) + pudina chutney — protein + fiber dono', 'Daliya with palak ya turai — savory version'], nonVegOption: '2 ande boiled + 1 jowar roti + tamatar' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seasonal fruit — seb ya amla preferred', 'Bhuna chana (mutthi bhar) — blood sugar stable'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + masoor dal + koi bhi green sabzi', 'Brown rice + moong dal + karela/lauki ki sabzi + salad'], nonVegOption: 'Grilled/boiled chicken (no skin) + 1-2 roti + lauki ki sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak tulsi herbal chai (no sugar / minimal) + akhrot 4', 'Haldi doodh (ghar ka, low fat) — winter mein'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + palak/methi sabzi + chana dal', 'Khichdi (moong dal + rice) + desi ghee thoda'], nonVegOption: 'Rohu machli steamed/boiled + 1-2 roti + sabzi' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (ghar ka, low fat, no sugar)', 'Warm paani + saunf — sleep better, overnight digestion smooth'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Lukewarm paani + nimbu',
      vegNashta: 'Daliya + turai sabzi',
      vegDopahar: '2 roti + masoor dal + palak',
      vegShaam: 'Seb + bhuna chana',
      vegRaat: 'Khichdi + desi ghee',
      nonVegNashta: '2 ande boiled + 1 jowar roti',
      nonVegDopahar: 'Boiled chicken + 2 roti + lauki sabzi',
      nonVegRaat: 'Khichdi + desi ghee (same)',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi seeds',
      vegNashta: 'Moong dal chilla + chutney',
      vegDopahar: 'Brown rice + chana dal + karela sabzi',
      vegShaam: 'Adrak herbal chai + akhrot',
      vegRaat: '2 bajra roti + methi sabzi + dahi (ghar ka)',
      nonVegNashta: 'Moong dal chilla + 1 anda',
      nonVegDopahar: 'Rohu machli steamed + brown rice + sabzi',
      nonVegRaat: '2 roti + sabzi (same)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Lukewarm paani',
      vegNashta: 'Poha + palak + moong dal tadka',
      vegDopahar: '2 jowar roti + arhar dal + lauki',
      vegShaam: 'Amla (fresh ya candy) + mutthi chana',
      vegRaat: 'Moong dal khichdi + sabzi',
      nonVegNashta: 'Poha + 2 ande boiled',
      nonVegDopahar: 'Grilled chicken (no skin) + 2 roti + palak',
      nonVegRaat: 'Moong dal khichdi (same)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Bheegi methi seeds + lukewarm paani',
      vegNashta: 'Besan chilla (without excess oil) + tamatar chutney',
      vegDopahar: 'Brown rice + masoor dal + broccoli/phool gobi sabzi',
      vegShaam: 'Tulsi chai + akhrot 3-4',
      vegRaat: '2 roti + palak chana sabzi',
      nonVegNashta: 'Besan chilla (same)',
      nonVegDopahar: 'Surmai machli + 1-2 roti + sabzi',
      nonVegRaat: '2 roti + sabzi (same)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Heavy Bleeding Ya Zyada Dard Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, daliya, ya moong dal soup — gut light rakhna zaroori hai jab body stress mein ho',
        'Fried, spicy, red meat — avoid karo — uterine cramping aur inflammation seedha badhta hai',
        'Iron-rich foods zyada focus karo — palak soup, masoor dal paani — bleeding mein hemoglobin support chahiye',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (oil kam) + singhada atta roti — safe options hain — fasting mein blood sugar crash avoid karo',
        'Kuttu ka atta chilla ya roti — fiber + protein, better than pure sabudana',
        'Vrat mein fried sabudana pakoda, aloo puri, zyada ghee — avoid karein — yeh inflammation badhate hain',
        'Fibroid mein prolonged fasting (waterfast ya extreme fasting) risky ho sakti hai heavy bleeding wali mahilaon ke liye — doctor se poochh ke karein',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal makhani avoid — butter + cream heavy hai — order plain dal tadka + roti ya steamed rice',
        'Tandoori roti + dal + salad — safest dhaba combination fibroid mein',
        '"No cream, no butter, light oil" — order karte waqt clearly bolein — restaurants mein adjust hoti hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karein: bhuna chana, akhrot, dry amla, jowar/bajra roti (plain, dry) — train/flight mein bhi safe',
        'Hotel mein: plain dal chawal ya khichdi order karein — yeh almost har jagah milta hai — sabse safe option',
      ],
    },
  ],

  proTip: 'Periods ke 5-7 din pehle se fried aur red meat band karo — sirf yeh chhota sa change uterine cramping aur blood flow intensity mein fark deta hai — yeh main apne clinic mein fibroid patients ko specifically bolte hain.',
  importantNote: 'Ye chart ek general guide hai — fibroid ka size, location aur symptoms har patient mein alag hote hain. Apni condition ke hisaab se apne homoeopath se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Jab aap estrogen badhane wale foods kam karte ho — homoeopathic medicines zyada effectively uterine environment pe kaam karti hain — healing faster hoti hai sirf medicine se zyada.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya fibroid mein dahi khana theek hai?',
      answer: 'Haan — ghar ka fresh bana dahi (1 small katori) fibroid mein allowed hai.\nGhar ke fresh dahi mein tyramine aur excess saturated fat nahi hoti — probiotic properties gut health support karti hain jo estrogen clearance ke liye zaroori hai.\nAvoid karein: packaged / set dahi (market wala), full fat cream dahi, ya dahi zyada quantity mein.\nApne doctor se confirm karein agar aapko personally dairy sensitivity ho.',
    },
    {
      _key: 'faq2',
      question: 'Fibroid mein chawal khana band karna padega?',
      answer: 'Nahi — chawal completely band karna zaroori nahi.\nWhite rice refined hai — blood sugar spike kar sakta hai jo estrogen fluctuation mein contribute karta hai — lekin reasonable quantity mein ek-do baar hafte mein theek hai.\nBrown rice ya jowar/bajra roti better option hai kyunki fiber zyada hoti hai jo gut se estrogen bahar nikalne mein help karta hai.\nSirf daily double portion chawal + maida combination avoid karein.',
    },
    {
      _key: 'faq3',
      question: 'Kya fibroid mein soya products khane chahiye?',
      answer: 'Soya ko moderate rakhein — completely band karna zaroori nahi, lekin daily large quantity avoid karein.\nEk Chinese case-control study (Shen et al, 2013) mein soybean milk ka high daily intake uterine fibroid ke risk se associated paya gaya.\nOccasional use — soya in dal mix — probably okay. Lekin daily large quantity soya milk, soya chunks, soya flour avoid karein.\nApne doctor se fibroid size ke hisaab se specifically poochhen.',
    },
    {
      _key: 'faq4',
      question: 'Diet se fibroid mein kitne din mein fark dikhta hai?',
      answer: 'Diet se fibroid seedha "chhota" nahi hota — yeh realistic baat hai.\nDiet ka kaam hai estrogen environment ko calm karna aur symptoms (dard, heavy bleeding, bloating) ko manage karna — yeh 4-6 hafte consistent diet mein noticeable ho sakta hai.\nFibroid ka size kam karna ya growth rokna medicine ka kaam hai — diet uske liye support provide karta hai.\nRegular diet follow karo + homoeopathic treatment saath mein — dono milke better result dete hain.',
    },
    {
      _key: 'faq5',
      question: 'Fibroid mein chai / coffee peena theek hai?',
      answer: 'Ek-do cup chai — theek hai, lekin daily 4-5 cup — avoid karein.\nCaffeine zyada hone se estrogen levels blood mein temporarily increase hote hain — fibroid wali mahilaon mein yeh symptom worsening se linked hai some studies mein.\nCoffee ki jagah adrak tulsi herbal chai zyada better option hai — anti-inflammatory benefit bhi milta hai.\nPackaged milk tea ya cream-based coffee — avoid karein.',
    },
    {
      _key: 'faq6',
      question: 'Fibroid mein vrat / fast kar sakte hain?',
      answer: 'Haan — kar sakte hain, lekin kuch dhyan rakhna zaroori hai.\nEk din ka ekadashi ya navratri vrat — safe hai agar fibroid mein heavy bleeding current mein nahi ho rahi.\nSabudana, kuttu, singhada — better vrat foods hain — plain fruits bhi theek hain.\nProlonged fasting (2+ din) ya waterfast — heavy bleeding wali patients ke liye risky — pehle doctor se poochhen.\nVrat mein zyada oily fried sabudana pakoda — avoid karein.',
    },
    {
      _key: 'faq7',
      question: 'Fibroid mein raat ko deri se khaana khane se kya problem hoti hai?',
      answer: 'Raat ko late khaana fibroid ke liye ek underrated problem hai.\nRaat 9-10 baje heavy khaana — liver pe extra load — liver busy rahta hai digestion mein — estrogen metabolism slow hoti hai — estrogen body mein accumulate hoti hai — fibroid environment worsen hota hai.\nRaat 7-7:30 baje tak khaana khatam karne ki aadat fibroid management mein genuinely helpful hai — sirf ek change.',
    },
    {
      _key: 'faq8',
      question: 'Homoeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific restrictions hoti hain — generalize karna sahi nahi.\nCoffee aur camphor-based items — kuch homoeopathic medicines ke saath avoid karne ki salah di jaati hai kyunki yeh antidote ka kaam kar sakte hain — lekin yeh doctor pe depend karta hai.\nStrong smell wali cheezein (agarbatti, perfume saath mein medicine lena) — kuch doctors recommend karte hain thoda gap rakhein.\nFibroid ke liye specifically — diet mein estrogen-badhane wale foods already avoid karna better practice hai — medicine ka effect enhance hoga.\nApne homoeopath se apni specific medicines ke saath kya avoid karein — yeh seedha poochhen.',
    },
    {
      _key: 'faq9',
      question: 'Fibroid mein non-veg khana chahiye ya band karna padega?',
      answer: 'Completely band karna zaroori nahi — lekin right choices zaroori hain.\nBoiled/grilled chicken, rohu/katla/surmai machli, boiled eggs — ye sab okay hain — protein + Vitamin D ke liye helpful bhi hain.\nRed meat (mutton, beef) — avoid karein — arachidonic acid hota hai jo uterine inflammation badhata hai.\nFried non-veg, processed meat (sausage) — avoid karein.\nCooking method sabse important hai — boil ya grill, no fry.',
    },
    {
      _key: 'faq10',
      question: 'Fibroid mein mithai aur meetha khana kitna allowed hai?',
      answer: 'Mithai aur refined sugar — minimize karna zaroori hai, completely band karna realistic nahi.\nRefined sugar insulin spike karta hai — body mein fat storage badhti hai — fat cells mein estrogen store hoti hai — fibroid environment worsen hota hai.\nOccasional (tyohaar mein ek-do piece gulab jamun) — okay.\nDaily mithai, cold drinks, packaged juice — avoid karein.\nNatural sweet substitute: khajoor 1-2, kela ek — better options hain craving ke liye.',
    },
    {
      _key: 'faq11',
      question: 'Fibroid mein anemia ho jaata hai kya? Diet se kuch kar sakte hain?',
      answer: 'Haan — heavy bleeding ki wajah se fibroid patients mein iron deficiency anemia common problem hai.\nDiet se help milti hai: palak, methi, masoor dal, chana, amla (Vitamin C iron absorb karane mein help karta hai).\nVitamin C ke saath iron foods khao — nimbu squeeze karo dal pe ya salad mein — absorption better hoti hai.\nIron supplements doctor se lein agar anemia severe ho — diet se moderate deficiency address ho sakti hai.\nCast iron tawa mein khaana banana bhi iron intake thoda badhata hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Afrin S, AlAshqar A et al — Diet and Nutrition in Gynecological Disorders: A Focus on Clinical Studies — Nutrients', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/34063835' },
    { _key: 's2', name: 'Vafaei S, Alkhrait S et al — Empowering Strategies for Lifestyle Interventions, Diet Modifications, and Environmental Practices for Uterine Fibroid Prevention — Nutrients', year: '2024', url: 'https://pubmed.ncbi.nlm.nih.gov/38542717' },
    { _key: 's3', name: 'Szydlowska I, Nawrocka-Rutkowska J et al — Dietary Natural Compounds and Vitamins as Potential Cofactors in Uterine Fibroids Growth and Development — Nutrients', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35215384' },
    { _key: 's4', name: 'He Y, Zeng Q et al — Associations between uterine fibroids and lifestyles including diet, physical activity and stress: a case-control study in China — Asia Pac J Clin Nutr', year: '2013', url: 'https://pubmed.ncbi.nlm.nih.gov/23353618' },
    { _key: 's5', name: 'Shen Y, Xu Q et al — Environmental exposure and risk of uterine leiomyoma: an epidemiologic survey — Eur Rev Med Pharmacol Sci', year: '2013', url: 'https://pubmed.ncbi.nlm.nih.gov/24338469' },
    { _key: 's6', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Daily red meat (mutton) + maida combination — yeh estrogen dominance aur uterine inflammation dono badhata hai — log notice nahi karte lekin symptom worsening issi se hoti hai',
    mustEat: 'Broccoli ya phool gobi — indole-3-carbinol hota hai jo bad estrogen body se nikalne mein directly help karta hai — hafte mein 3-4 baar khaao',
    mustAvoid: 'Alcohol — liver estrogen clear karta hai — alcohol liver ko block karta hai — fibroid wali mahilaon mein alcohol avoid karna non-negotiable hai',
  },

  doctorNote: 'Maine notice kiya hai ki jo fibroid patients raat 7 baje ke baad heavy khaana aur red meat dono ek saath chodh deti hain — unka period pain aur bloating clearly reduce hota hai treatment ke first 4-6 hafte mein hi — yeh sirf ek observation hai, lekin consistently dekha hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Uterine Fibroid (Rasoli) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/uterine-fibroid',
  shareTextMealPlan: 'Uterine Fibroid ke liye 4-din ka Indian diet plan: homeopedia.in/diet/uterine-fibroid',
  shareTextPage: 'Uterine Fibroid Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/uterine-fibroid',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Uterine Fibroid diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Uterine Fibroid diet chart seeded — homeopedia.in/diet/uterine-fibroid')
}

seed().catch(console.error)
