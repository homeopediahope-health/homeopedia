import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-hairfall',
  _type: 'diet',
  title: 'Hair Fall (Baal Jhadna) Diet Chart',
  hindiName: 'Baal Jhadna / Baal Girna',
  slug: { _type: 'slug', current: 'hairfall' },
  relatedDiseaseSlug: 'hairfall',
  category: 'Hair',
  metaTitle: 'Hair Fall (Baal Jhadna) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Hair fall diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Hair follicles ko grow karne ke liye iron, protein, aur zinc chahiye — inki kami seedha baal girne ka karan banti hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah khaali pet 1 glass gunguna paani piyo', reason: 'gut absorption better hoti hai jo iron aur zinc baalon tak pahunchata hai' },
    { _key: 'eh2', habit: 'Har roz protein zaroor khao', reason: 'baal keratin se bante hain jo sirf protein se milta hai' },
    { _key: 'eh3', habit: 'Raat ka khaana 7-8 baje tak khatam karo', reason: 'late khaane se cortisol (stress hormone) badhta hai jo hair fall trigger karta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'complex carb jo blood sugar stable rakhta hai, insulin spike se hair follicle damage rokta hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'selenium aur B vitamins deta hai jo scalp circulation ke liye zaroori hain' },
        { _key: 'i3', food: 'Jowar / Bajra roti', reason: 'zinc rich hai jo hair follicle repair ke liye direct kaam karta hai' },
        { _key: 'i4', food: 'Oats', reason: 'biotin aur silica hota hai jo baal ki shaft strong karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'iron + folate deta hai jo red blood cells banata hai jo follicle tak oxygen le jaati hain' },
        { _key: 'i6', food: 'Methi (saag ya seeds)', reason: 'nicotinic acid hai jo scalp mein blood flow improve karta hai' },
        { _key: 'i7', food: 'Karela', reason: 'bitter compounds oxidative stress kam karte hain jo premature hair fall rok sakte hain' },
        { _key: 'i8', food: 'Gajar', reason: 'beta-carotene hota hai jo Vitamin A mein convert hota hai, scalp sebum production regulate karta hai' },
        { _key: 'i9', food: 'Shimla mirch (green)', reason: 'Vitamin C ka best Indian source — iron absorption 3-4x badh jaati hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Amla (Indian gooseberry)', reason: 'Vitamin C aur antioxidants se bhaara — hair follicle collagen protect karta hai' },
        { _key: 'i11', food: 'Seb (apple)', reason: 'quercetin hota hai jo DHT (hair loss hormone) ko kuch had tak block karta hai' },
        { _key: 'i12', food: 'Papaya', reason: 'papain enzyme gut health improve karta hai jisse nutrients absorb hote hain baalon tak' },
        { _key: 'i13', food: 'Kela (fresh, slightly unripe)', reason: 'biotin aur potassium deta hai jo keratin structure maintain karta hai — sirf fresh, overripe nahi' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal (chilka/whole)', reason: 'easily digest hoti hai, zinc aur protein deta hai bina gut pe load dale' },
        { _key: 'i15', food: 'Rajma', reason: 'iron aur amino acids deta hai jo keratin synthesis ke liye zaroori hain' },
        { _key: 'i16', food: 'Chana (kala / safed, boiled)', reason: 'biotin ka acha source — biotin deficiency directly baal girata hai' },
        { _key: 'i17', food: 'Tofu / Soya (kam maatra)', reason: 'phytoestrogens hair cycle regulate karne mein help kar sakti hain' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i18', food: 'Adrak chai (halki, 1-2 cup)', reason: 'scalp blood circulation badhata hai, follicles tak nutrients pahunchata hai' },
        { _key: 'i19', food: 'Til (sesame)', reason: 'zinc aur copper deta hai — dono hair pigmentation aur growth ke liye' },
        { _key: 'i20', food: 'Sarson ka tel (thoda, cooking mein)', reason: 'omega fatty acids scalp dryness rok sakte hain' },
        { _key: 'i21', food: 'Haldi + kali mirch', reason: 'curcumin inflammation reduce karta hai jo alopecia areata mein trigger ban sakti hai — kali mirch absorption badhata hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Ande (2, boiled)', reason: 'complete protein + biotin dono — baal ka raw material deta hai' },
    { _key: 'nva2', food: 'Machli (rohu, katla, surmai)', reason: 'omega-3 fatty acids scalp mein inflammation kam karte hain, follicle environment healthy rakhta hai' },
    { _key: 'nva3', food: 'Chicken (boiled / grilled)', reason: 'lean protein + niacin + B6 — keratin synthesis ke liye best combination' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / pakoda', reason: 'trans fat cortisol badhata hai jo telogen effluvium (stress hair loss) trigger karta hai' },
    { _key: 'nvav2', food: 'Sausage / salami / processed meat', reason: 'sodium aur preservatives scalp blood flow restrict karte hain' },
    { _key: 'nvav3', food: 'Mutton / red meat', reason: 'arachidonic acid inflammation badhata hai jo hair cycle disturb karta hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour)', reason: 'rapid blood sugar spike insulin raise karta hai jo androgenic hair loss trigger karta hai' },
        { _key: 'ri2', food: 'Biscuits / namkeen / chips', reason: 'maida + trans fat ka combination scalp ka blood circulation slow karta hai' },
        { _key: 'ri3', food: 'Instant noodles / Maggi', reason: 'sodium + maida + preservatives — micronutrient absorption block karta hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full-fat packaged paneer (market wala)', reason: 'saturated fat hormonal imbalance badha sakta hai jo hair loss se linked hai' },
        { _key: 'ri5', food: 'Cream / makkhan (zyada maatra)', reason: 'hormone-disrupting fats follicle miniaturization mein contribute kar sakte hain' },
        { _key: 'ri6', food: 'Ice cream', reason: 'sugar + saturated fat combination oxidative stress badhata hai jo scalp ko affect karta hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Overripe kela', reason: 'tyramine jaisi compounds form hoti hain jo scalp circulation pe negative effect dal sakti hain — fresh kela allowed hai' },
        { _key: 'ri8', food: 'Refined sugar (meethaiyaan, cold drinks)', reason: 'glycation process se scalp cells ki functioning slow hoti hai' },
        { _key: 'ri9', food: 'Bahut zyada teekha khaana', reason: 'excess capsaicin gut irritation karta hai jisse iron absorption kam ho jaati hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Chai (3+ cups daily, kadak)', reason: 'excess tannin iron absorption block karta hai jo hair loss ka common karan hai India mein' },
        { _key: 'ri11', food: 'Coffee (4+ cups daily)', reason: 'DHT levels badh sakte hain — moderate amount theek hai' },
        { _key: 'ri12', food: 'Cold drinks / packaged juice', reason: 'phosphoric acid iron absorption reduce karta hai' },
        { _key: 'ri13', food: 'Alcohol', reason: 'zinc aur biotin dono ko body se nikalta hai — dono direct hair nutrients hain' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['1 glass gunguna paani + 1 chammach amla powder', 'Bheegi methi seeds (1 tsp) raat bheego, subah khaali pet khao'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Moong dal chilla (2 pieces) + pudina chutney', 'Daliya with palak + 1 chammach til'], nonVegOption: '2 boiled ande + 1 brown bread slice + 1 seasonal fruit' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 amla (fresh ya murabba bina zyada cheeni ke)', 'Bhuna chana mutthi bhar'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar / bajra roti + moong dal + palak sabzi + kaccha pyaaz', 'Brown rice + rajma + salad (shimla mirch, gajar, khira)'], nonVegOption: 'Boiled chicken (1 piece) + 2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak-tulsi chai (halki) + akhrot 4-5', 'Roasted makhana + 1 small katori papaya'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + lauki sabzi + masoor dal', 'Khichdi (moong dal + chawal) + 1 chammach desi ghee + salad'], nonVegOption: 'Machhi curry (rohu / katla, light) + 1 roti + sabzi' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (ghar ka fresh bana, toned milk)', 'Warm paani + saunf — cortisol raat ka kam karta hai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Amla powder + paani',
      vegNashta: 'Moong dal chilla + chutney',
      vegDopahar: '2 roti + rajma + salad',
      vegShaam: 'Bhuna chana + 1 seb',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled ande + 1 brown bread',
      nonVegDopahar: 'Grilled chicken + 2 roti + salad',
      nonVegRaat: 'Khichdi + ghee',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi seeds',
      vegNashta: 'Oats daliya + gajar',
      vegDopahar: 'Brown rice + palak + masoor dal',
      vegShaam: 'Adrak chai + akhrot',
      vegRaat: '2 jowar roti + lauki + chana dal',
      nonVegNashta: 'Oats daliya + gajar (veg same)',
      nonVegDopahar: 'Rohu fish (boiled curry) + brown rice + palak',
      nonVegRaat: '2 jowar roti + lauki + masoor dal',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Amla + gunguna paani',
      vegNashta: 'Poha (palak ke saath) + 1 kela (fresh)',
      vegDopahar: '2 roti + moong dal + shimla mirch sabzi',
      vegShaam: 'Papaya 1 katori + makhana',
      vegRaat: 'Khichdi + haldi doodh',
      nonVegNashta: '2 boiled ande + poha',
      nonVegDopahar: '2 roti + moong dal + shimla mirch sabzi',
      nonVegRaat: 'Surmai / katla light curry + 1 roti + sabzi',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Methi paani',
      vegNashta: 'Daliya + til + seb',
      vegDopahar: '2 bajra roti + karela + rajma',
      vegShaam: 'Bhuna chana + amla murabba',
      vegRaat: '2 roti + palak dal + salad',
      nonVegNashta: 'Daliya + til (veg same)',
      nonVegDopahar: '2 bajra roti + karela + chicken (boiled)',
      nonVegRaat: '2 roti + palak dal + salad',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Baal Zyada Girne Lage Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, moong dal, amla — simple protein-rich khaana jo easily absorb ho',
        'Fried, maida, aur packaged khaana bilkul avoid — inflammation spike aur zyada baal gira sakta hai',
        'Raat ko ek chammach amla powder + gungune paani mein — Vitamin C acute oxidative stress kam karta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Safe options: sabudana khichdi (bilkul thoda ghee), kuttu roti, fruits, dahi (ghar ka fresh)',
        'Amla ya akhrot saath mein rakho — vrat mein protein aur micronutrient gap hoti hai jo baal gira sakti hai',
        'Sirf nimbu paani ya nariyal paani pe zyada time tak rehna avoid karein — protein zero se hair loss bad ho sakta hai',
        'Zyada lambe fasts (24+ hours) hair fall chal raha ho to avoid karo ya doctor se pehle poochho',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karein: dal makhani (zyada butter nahi), tandoori roti, plain raita, mixed dal',
        'Avoid karein: white bread, maida paratha, cream-based gravies, fried snacks',
        'Hack: Khana khaane se 15 min pehle 1 glass paani piyo — gut absorption better hogi aur overeating se insulin spike nahi hogi',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, akhrot, dry amla candy (bina sugar wali), sprouted moong (dry)',
        'Train / hotel mein: plain dal-chawal ya dal-roti order karo — khichdi milti hai to best hai',
        'Packaged snacks se bachein — preservatives zinc absorption rok dete hain jo travel mein waise bhi kam hota hai',
      ],
    },
  ],

  proTip: 'Amla khate waqt ya khane ke 30 minute baad paani mein nimbu ka ras milao — dono Vitamin C se bhaare hain lekin combination iron absorption dramatically better karta hai, especially agar aap vegetarian hain.',
  importantNote: 'Ye chart ek general guide hai — individual cases mein hair fall ke karan alag hote hain, jaise thyroid, PCOD, ya iron deficiency anemia. Apni condition ke hisaab se apne homoeopath ya doctor se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Sahi diet baalon tak nutrients pahunchati hai jahan homeopathic medicines kaam karti hain — jab follicles ko nutrition milta hai tab treatment ka response clearly better hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya hair fall mein dahi khana theek hai?',
      answer: 'Haan — ghar ka fresh bana dahi allowed hai, lekin packaged ya bahut purana dahi nahi.\nDahi mein protein aur probiotics hain jo gut health improve karte hain — isse nutrients better absorb hoti hain.\nGut absorption direct hair fall se connected hai — jo micronutrient absorb nahi hua wo follicle tak nahi pahuncha.\nRaat ko zyada dahi nahi — especially agar scalp oily ho.\nGhar ka ek small katori fresh dahi dopahar ke khaane ke saath — sahi hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya hair fall mein anday (eggs) khaane chahiye?',
      answer: 'Haan — anday hair fall ke liye ek best food hain.\nAnde mein biotin, protein, aur zinc teeno hain jo keratin banane ke liye direct kaam aate hain.\nBoiled ya poached anday sabse better hain — fried nahi.\nVegetarians ke liye chana, rajma, aur moong dal se similar nutrients mile sakte hain.',
    },
    {
      _key: 'faq3',
      question: 'Diet se hair fall mein kitne hafte mein fark dikhta hai?',
      answer: 'Hair growth cycle slow hota hai — minimum 8-12 hafte lagti hain diet changes ka effect dikhne mein.\nPehle 4-6 hafte mein naye baal girne ki speed kam hone lagti hai — ye pehla sign hota hai ki diet kaam kar rahi hai.\nNayi growth typically 3 mahine ke baad dikh sakti hai.\nAgar 3 mahine ke baad bhi koi fark nahi dikh raha — underlying cause check karo (iron, thyroid, PCOD).\nDiet ek supporting tool hai — root cause treatment ke saath.',
    },
    {
      _key: 'faq4',
      question: 'Hair fall mein chai peena theek hai?',
      answer: '1-2 cup halki chai theek hai — zyada kadak chai ya 3+ cups daily problem hai.\nChai mein tannin hota hai jo iron absorption block karta hai — iron ki kami hair fall ka top reason hai India mein.\nRule: Khaane ke turant baad chai mat pao — 45-60 minute ka gap do.\nAgar iron deficiency hai toh chai bilkul meal time ke paas mat lo.\nTulsi ya adrak wali herbal chai better option hai — iron absorb hone deti hai.',
    },
    {
      _key: 'faq5',
      question: 'Hair fall mein vrat kar sakte hain?',
      answer: 'Haan — vrat kar sakte hain, lekin sahi foods ke saath.\nVrat mein sabudana, kuttu, fruits, aur ghar ka dahi safe hain.\nProblem tab hoti hai jab poore vrat sirf paani ya juice pe raho — protein zero hone se baal girna bad ho sakta hai.\nAkhrot aur amla apne paas rakhein vrat mein — protein aur Vitamin C dono milenge.\nZyada lambe fasts (24+ hours) agar hair fall chal raha ho to avoid karo ya doctor se pehle poochho.',
    },
    {
      _key: 'faq6',
      question: 'Hair fall mein late raat khaana khaane se kya hota hai?',
      answer: 'Raat 9-10 baje ke baad heavy khaana cortisol (stress hormone) badha sakta hai.\nCortisol directly telogen effluvium (stress-related hair loss) trigger karta hai.\nLate khaane se insulin bhi raat ko spike hoti hai jo androgenic hair fall mein contribute kar sakti hai.\nSimple rule: Raat ka khaana 7-8 baje tak — light, protein-rich, easy to digest.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific restrictions doctor ke hisaab se hoti hain — blanket rule nahi hai.\nCommon suggestion: strong smell wale foods (kacchi lahsun, pyaaz) medicine se 30 min pehle ya baad mein nahi.\nCoffee ya camphor kuch homeopathic remedies ko antidote kar sakti hai — apne specific medicine ke baare mein doctor se poochho.\nAlcohol avoid karna better hai — wo treatment response ko slow karta hai.',
    },
    {
      _key: 'faq8',
      question: 'Hair fall mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karne ki zaroorat nahi — sahi non-veg hair fall mein actually help karta hai.\nBoiled ande, grilled chicken, aur rohu/katla machhi — teeno protein aur micronutrients dete hain.\nFried non-veg, red meat, aur processed meats avoid karo — ye inflammation badhate hain.\nVegetarians ke liye substitute: moong dal + rajma + chana + til — combination se similar nutrients milte hain.',
    },
    {
      _key: 'faq9',
      question: 'Kya hair fall mein aloo khana allowed hai?',
      answer: 'Haan — aloo moderate maatra mein allowed hai.\nAloo mein Vitamin B6 hota hai jo protein metabolism mein kaam aata hai — keratin ke liye indirect zaroori hai.\nProblem tab hai jab aloo fried ho (chips, fries) — tab trans fat aur excess salt saath aata hai.\nBoiled, baked, ya sabzi mein thoda aloo — theek hai.\nRoz hi aloo khaane se glycemic index high ho sakta hai — variety rakhein.',
    },
    {
      _key: 'faq10',
      question: 'Kya baal girne mein protein powder lena chahiye?',
      answer: 'Zaroori nahi — aur generally recommend nahi kiya jaata bina doctor advice ke.\nDal, rajma, chana, anday, chicken — ye natural sources hain jo body better absorb karti hai.\nProtein powders mein artificial sweeteners aur additives hote hain jo gut health affect kar sakte hain.\nAgar khaane se protein nahi ho pa rahi (genuine deficiency) — tabhi doctor ya nutritionist se poochh kar lena.\nPehle natural sources try karo — supplement shortcut nahi hai.',
    },
    {
      _key: 'faq11',
      question: 'Kya baal girne mein doodh peena theek hai?',
      answer: 'Haan — ghar ka fresh doodh (toned theek hai) moderate maatra mein allowed hai.\nDoodh mein calcium aur protein hai jo hair shaft strength ke liye kaam aata hai.\nAvoid karo: packaged flavored milk, cream, aur zyada maatra mein full cream milk.\nHaldi doodh — especially raat ko — scalp inflammation bhi kam karta hai.\nLactose intolerance hai toh dahi better option hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Gasmi A et al — Natural Compounds Used for Treating Hair Loss — Current Pharmaceutical Design', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37151166' },
    { _key: 's2', name: 'Drake L et al — Evaluation of the Safety and Effectiveness of Nutritional Supplements for Treating Hair Loss — JAMA Dermatology', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/36449274' },
    { _key: 's3', name: 'Sardana K, Sachdeva S — Role of nutritional supplements in selected dermatological disorders — Journal of Cosmetic Dermatology', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/34564936' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Chai ya coffee khaane ke turant baad peena — tannin iron absorb nahi hone deta, aur iron deficiency India mein hair fall ka #1 reason hai',
    mustEat: 'Amla — Vitamin C ka sabse concentrated Indian source jo iron absorption badhata hai aur hair follicle collagen protect karta hai',
    mustAvoid: 'Kadak chai 3+ cups daily — especially khaane ke saath ya baad mein — iron ka worst enemy hai',
  },

  doctorNote: 'Maine notice kiya hai ki jo hair fall patients iron-rich foods (palak, rajma, chana) ko Vitamin C source (amla, nimbu, shimla mirch) ke saath regularly khaate hain — unka homeopathic treatment response clearly better aur faster hota hai un patients se jo sirf medicine lete hain lekin diet mein dhyan nahi dete. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Hair Fall mein kya khayein, kya nahi — complete list: homeopedia.in/diet/hairfall',
  shareTextMealPlan: 'Hair Fall ke liye 4-din ka Indian diet plan: homeopedia.in/diet/hairfall',
  shareTextPage: 'Hair Fall Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/hairfall',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Hair Fall diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Hair Fall diet chart seeded — homeopedia.in/diet/hairfall')
}

seed().catch(console.error)
