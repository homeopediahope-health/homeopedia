import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-varicose-veins',
  _type: 'diet',
  title: 'Varicose Veins (Naso ki Sujan) Diet Chart',
  hindiName: 'Naso ki Sujan / Phuli hui Naseein',
  slug: { _type: 'slug', current: 'varicose-veins' },
  relatedDiseaseSlug: 'varicose-veins',
  category: 'Circulatory',
  metaTitle: 'Varicose Veins Diet – Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Varicose Veins (naso ki sujan) diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Varicose veins mein blood circulation slow hoti hai aur naso ki diwaaron pe pressure badhta hai – galat khaana is inflammation aur fluid retention ko aur badha deta hai.\n\nNeeche complete guide hai – green list, red list, daily meal plan, veg aur non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Paani khub piyo – din mein 8-10 glass', reason: 'blood thick hoti hai dehydration mein jo varicose veins mein pressure badhata hai' },
    { _key: 'eh2', habit: 'Namak kam karo', reason: 'sodium body mein paani rokta hai jo legs mein swelling directly badhati hai' },
    { _key: 'eh3', habit: 'Raat ka khaana 7 baje tak karo', reason: 'late dinner ke baad leti hui position mein blood venous pooling badhata hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (oats)', reason: 'high fibre – constipation rokta hai jo abdominal pressure se varicose veins worse hoti hain' },
        { _key: 'i2', food: 'Brown rice', reason: 'refined carbs se better – gut pressure reduce karta hai – vein wall pe load kam hota hai' },
        { _key: 'i3', food: 'Bajra roti', reason: 'magnesium rich – vein muscles relax hoti hain jo blood pooling reduce karta hai' },
        { _key: 'i4', food: 'Jowar roti', reason: 'low glycemic – weight control mein help – excess weight varicose veins ka bada risk factor hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'vitamin K aur bioflavonoids – vein wall strengthen karte hain aur blood clotting balance karte hain' },
        { _key: 'i6', food: 'Lauki', reason: 'high water content – body mein fluid retention reduce karta hai jo varicose veins ki swelling ghataata hai' },
        { _key: 'i7', food: 'Karela', reason: 'blood circulation improve karta hai – venous stasis (ruka hua blood) kam karne mein madad karta hai' },
        { _key: 'i8', food: 'Turai / Torai', reason: 'anti-inflammatory – vein wall ki sujan seedha kam karta hai' },
        { _key: 'i9', food: 'Gajar', reason: 'beta-carotene – antioxidant jo vein oxidative damage se bachata hai – chronic venous disease mein zaroori' },
        { _key: 'i10', food: 'Tamatar', reason: 'lycopene – venous endothelium (vein ki inner layer) ko protect karta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Amla', reason: 'vitamin C se bhari – collagen banata hai jo vein wall ko strong aur elastic rakhta hai' },
        { _key: 'i12', food: 'Papaya', reason: 'papain enzyme – blood thickening reduce karta hai aur circulation improve karta hai' },
        { _key: 'i13', food: 'Seb (Apple)', reason: 'quercetin flavonoid – vein inflammation direct kam karta hai – daily fruit CVD odds reduce karta hai' },
        { _key: 'i14', food: 'Jamun', reason: 'anthocyanins – vein ki capillary permeability control karta hai – fluid legs mein ikatha nahi hota' },
        { _key: 'i15', food: 'Anar (Pomegranate)', reason: 'punicalagins – vein wall elasticity badhata hai aur blood flow improve karta hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal', reason: 'easily digest – gut pe pressure nahi – fiber bhi hai jo constipation rokta hai' },
        { _key: 'i17', food: 'Masoor dal', reason: 'iron + bioflavonoids – blood quality better hoti hai jo veins pe pressure kam karta hai' },
        { _key: 'i18', food: 'Chana (kala/safed, boiled)', reason: 'resistant starch – weight management + gut health – varicose veins dono se linked hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i19', food: 'Haldi + kali mirch wala paani/chai', reason: 'curcumin vein inflammation reduce karta hai – kali mirch absorption badhati hai – combination zaroori hai akela nahi' },
        { _key: 'i20', food: 'Adrak chai (bina excess milk)', reason: 'gingerol – blood circulation improve karta hai – venous stagnation kam hota hai' },
        { _key: 'i21', food: 'Jeera paani', reason: 'anti-bloating – abdominal pressure release hota hai jo varicose veins pe extra load nahi deta' },
        { _key: 'i22', food: 'Sarson ka tel (cooking mein)', reason: 'omega-3 – vein wall inflammation directly reduce karta hai' },
        { _key: 'i23', food: 'Lahsun', reason: 'allicin – blood viscosity (gaadha pan) kam karta hai jo venous circulation better karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Machli (Rohu, Katla, Surmai – boiled ya grilled)', reason: 'omega-3 fatty acids – vein inflammation seedha reduce karte hain – circulation better hoti hai' },
    { _key: 'nva2', food: 'Anda (boiled – 1-2)', reason: 'protein + rutin (yolk mein) – vein wall repair mein help karta hai' },
    { _key: 'nva3', food: 'Chicken (boiled/grilled – no skin)', reason: 'lean protein – muscle pump function better hota hai jo venous return mein help karta hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / Tala hua kuch bhi', reason: 'trans fat – inflammation badhata hai aur blood viscosity worse karta hai' },
    { _key: 'nvav2', food: 'Red meat (mutton, beef)', reason: 'saturated fat – vein wall mein oxidative stress badhata hai – chronic venous disease worse' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami)', reason: 'high sodium + preservatives – sodium fluid retention badhata hai – swelling worse hoti hai' },
    { _key: 'nvav4', food: 'Shellfish (jheenga etc.)', reason: 'heavy to digest – gut pressure badhata hai – varicose veins pe indirect load' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white bread, naan, biscuit)', reason: 'refined carbs – rapid weight gain + gut pressure – varicose veins dono se directly worsen hoti hain' },
        { _key: 'ri2', food: 'Packaged namkeen / chips', reason: 'sodium itna zyada hota hai ki ek serving mein pure din ka sodium aa jaata hai – fluid retention massive badhta hai' },
        { _key: 'ri3', food: 'Instant noodles', reason: 'salt + maida + preservatives – teen varicose vein triggers ek saath' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full-fat paneer (zyada matra mein)', reason: 'saturated fat – blood viscosity badhata hai – varicose veins mein circulation further slow hoti hai' },
        { _key: 'ri5', food: 'Makkhan / Butter', reason: 'artery ke saath veins mein bhi fat deposit hota hai – chronic use se venous function worse' },
        { _key: 'ri6', food: 'Cream, malai wala doodh', reason: 'inflammatory fats – vein wall oxidative damage badhata hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Zyada mirchi wala khaana', reason: 'vein wall permeability badhata hai – fluid leakage aur swelling worse hoti hai' },
        { _key: 'ri8', food: 'Meetha (mithai, gulab jamun, jalebi)', reason: 'high sugar – obesity ka seedha route – extra weight varicose veins ka number one risk factor hai' },
        { _key: 'ri9', food: 'Deep fried kuch bhi (puri, pakoda, bhatura)', reason: 'inflammatory + calorie dense – weight badhata hai jo varicose veins worse karta hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Alcohol', reason: 'veins dilate karta hai permanently – blood pooling legs mein badhata hai – varicose veins fast worse hoti hai' },
        { _key: 'ri11', food: 'Chai zyada (3+ cups)', reason: 'tannins dehydrate karte hain – blood thicker hoti hai – venous circulation worse' },
        { _key: 'ri12', food: 'Packaged juice + cola', reason: 'high fructose corn syrup – inflammation + weight gain – varicose veins dono se worse' },
        { _key: 'ri13', food: 'Namkeen chaas (packaged)', reason: 'high sodium – fluid retention directly badhata hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['2 glass lukewarm paani + 1 tsp adrak juice', 'Jeera paani (raat bhar bhigo ke) – 1 glass'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with palak/gajar + 1 amla (raw ya juice)', 'Moong dal chilla (2) + pudina chutney'], nonVegOption: '2 boiled ande + 1 bajra roti + salad' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya papaya (seasonal)', 'Bhuna chana (1 mutthi) + 1 glass paani'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 bajra/jowar roti + moong dal + lauki sabzi + kachhi pyaaz + tomato salad', 'Brown rice + masoor dal + turai sabzi + salad'], nonVegOption: 'Grilled machli (1 piece) + 2 roti + sabzi + salad' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Haldi + adrak wali herbal chai (bina milk ya thodi si doodh) + akhrot 4-5', 'Roasted makhana (1 small bowl)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + karela/palak sabzi + dal + salad', 'Moong dal khichdi (thodi si ghee ke saath) + kachhi vegetables'], nonVegOption: 'Chicken soup (no cream, no butter) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (low fat doodh mein)', 'Warm paani + saunf – digestion settle karta hai aur gas nahi banta jo abdominal pressure reduce karta hai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Lukewarm paani + adrak',
      vegNashta: 'Daliya + palak + amla juice',
      vegDopahar: '2 bajra roti + moong dal + lauki sabzi + salad',
      vegShaam: 'Herbal chai + akhrot',
      vegRaat: 'Masoor dal khichdi + ghee + gajar sabzi',
      nonVegNashta: '2 boiled ande + 1 roti + salad',
      nonVegDopahar: 'Grilled rohu machli + 2 roti + sabzi + salad',
      nonVegRaat: 'Masoor dal khichdi + ghee + gajar sabzi',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Jeera paani',
      vegNashta: 'Moong dal chilla (2) + pudina chutney',
      vegDopahar: 'Brown rice + chana dal + turai sabzi + tomato salad',
      vegShaam: 'Roasted makhana + 1 seb',
      vegRaat: '2 jowar roti + palak sabzi + raita (ghar ka dahi, thoda)',
      nonVegNashta: 'Moong dal chilla (2) + pudina chutney',
      nonVegDopahar: 'Boiled chicken (100g) + brown rice + turai sabzi',
      nonVegRaat: 'Chicken soup (no cream) + 1 roti',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Lukewarm paani + nimbu (half) bina namak',
      vegNashta: 'Poha (sem/matar ke saath) + amla',
      vegDopahar: '2 roti + arhar dal + karela sabzi + kachhi pyaaz',
      vegShaam: 'Herbal chai + bhuna chana',
      vegRaat: 'Moong dal soup + 1 roti + gajar-khira salad',
      nonVegNashta: '2 boiled ande + poha (half serving) + amla',
      nonVegDopahar: 'Grilled surmai + 2 roti + karela sabzi + salad',
      nonVegRaat: 'Moong dal soup + 1 roti + gajar-khira salad',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Adrak + haldi paani',
      vegNashta: 'Daliya (oats savory) + gajar + jeera tadka',
      vegDopahar: 'Brown rice + masoor dal + turai + anar ke daane (salad mein)',
      vegShaam: '1 papaya + 4 akhrot',
      vegRaat: '2 bajra roti + lauki sabzi + moong dal',
      nonVegNashta: 'Daliya (oats savory) + gajar + jeera tadka',
      nonVegDopahar: 'Boiled chicken + brown rice + sabzi',
      nonVegRaat: '2 bajra roti + lauki sabzi + moong dal',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Legs Mein Zyada Sujan-Dard Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf liquid aur light khaao – moong dal soup, daliya, khichdi – gut pressure minimize karo',
        'Namak bilkul avoid us din – even ghar ka khaana thoda kam namak ke saath banao',
        'Paon ko uthao (elevate) khaane ke baad – 30 min – gravity venous return mein madad karti hai – diet ke saath ye combination fastest relief deta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi – low sodium banao – ghar mein namak bahut kam daalo – packaged sabudana ready mix nahi',
        'Singhare ka atta (water chestnut) ki roti – fiber + antioxidants – vein health support karta hai',
        'Namak wale vrat snacks – potato chips, fried sabudana pakode – ye varicose veins ke liye worst combination hai – avoid',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal + roti + sabzi order karo – simple, low sodium relatively',
        'Grilled ya tandoori items prefer karo – fry nahi – cooking method varicose veins mein direct matter karta hai',
        'Soup order karte waqt "namak kam" bolna – restaurant soup sodium bomb hota hai',
        'Paani ki bottle apni carry karo – hydration maintain karo – restaurant ka cold drink avoid',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, akhrot, seb, amla candy (low sugar) – yahi varicose vein friendly travel snacks hain',
        'Train/flight mein: legs stretch karte raho – diet ke saath ye movement venous return ke liye equally important hai',
        'Hotel mein: dal + roti + sabzi order karo – avoid buffet fry items – namak control nahi hota buffet mein',
      ],
    },
  ],

  proTip: 'Khaane ke baad 20-30 minute ke liye paon thodi si uunchi jagah pe rakhein – ek takiya bhi kaam karta hai. Ye simple habit gravity se venous return improve karti hai – koi supplement ya food itni jaldi kaam nahi karta.',
  importantNote: 'Ye chart ek general guide hai – varicose veins ki severity alag alag hoti hai. Apni condition, weight aur medical history ke hisaab se apne homoeopath se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Jab diet se inflammation aur blood viscosity control hoti hai, tab homeopathic medicines venous wall ko repair karne mein aur effectively kaam karti hain – dono milke healing faster hoti hai akele se zyada.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya varicose veins mein dahi khana sahi hai?',
      answer: 'Haan – ghar ka fresh bana hua dahi (1 small katori) allowed hai.\nFresh dahi mein probiotics hote hain jo gut health support karte hain – constipation rokta hai – aur constipation abdominal pressure se varicose veins seedha worse karta hai.\nLekin packaged / set dahi (market wala) avoid karein – isme sodium aur preservatives zyada hote hain jo fluid retention badhate hain.\nRaat ko avoid karein – subah ya dopahar best time hai.',
    },
    {
      _key: 'faq2',
      question: 'Varicose veins mein aloo khana band karna padega?',
      answer: 'Nahi – aloo completely band karna zarori nahi.\nBoiled ya bhuna hua aloo (bina namak, bina makhan) allowed hai – ye complex carb hai aur gut pressure nahi badhata.\nAvoid karein: fried aloo (chips, french fries) – ye salt + trans fat combination varicose veins ke liye worst hai.\nQuantity dhyan rakhein – zyada aloo = weight gain = varicose veins worse. Dono mein se ek hi side dish ho aloo ya roti.',
    },
    {
      _key: 'faq3',
      question: 'Diet se varicose veins mein kitne din mein fark dikhta hai?',
      answer: 'Swelling aur heaviness mein fark 2-3 hafte mein dekhne ko mil sakta hai – agar sodium aur fried food strictly avoid karein.\nVein ka structural damage jo already hua hai wo diet se reverse nahi hoga – lekin symptoms (dard, sujan, bhaari pan) diet se clearly better hote hain.\nHonest baat: diet symptoms manage karti hai – disease cure nahi.\nTreatment ke saath sahi diet ho toh healing faster hoti hai.',
    },
    {
      _key: 'faq4',
      question: 'Varicose veins mein chai peena theek hai?',
      answer: '1 cup subah herbal chai (adrak, tulsi, haldi based) – theek hai aur actually beneficial hai.\nRegular dudh wali chai – 1-2 cup tak theek hai – zyada nahi.\n3+ cups chai daily avoid karein – tannins dehydrate karte hain, blood thicker hoti hai, venous circulation worse hoti hai.\nCold drinks, packaged juices – completely avoid – high sugar + sodium – varicose veins ke liye double problem.',
    },
    {
      _key: 'faq5',
      question: 'Varicose veins mein vrat rakh sakte hain?',
      answer: 'Haan – rakh sakte hain, lekin thodi saawdhani se.\nSafe options: sabudana khichdi (kam namak), singhare ki roti, fresh fruits, paani khub piyo.\nAvoid karein vrat mein: namkeen fried sabudana vada, chips, packaged vrat snacks – ye high sodium hote hain aur varicose veins ki swelling us din aur badh sakti hai.\nAgar legs mein zyada sujan feel ho vrat ke din – turant kuch khao aur paon elevate karo.',
    },
    {
      _key: 'faq6',
      question: 'Varicose veins mein der raat khana ya late dinner karna theek hai?',
      answer: 'Nahi – late dinner varicose veins mein avoid karna chahiye.\nRaat ko leti hui position mein blood already less efficiently return hota hai – upar se heavy dinner aur gut pressure – dono milke venous pooling badhate hain.\n7-7:30 PM tak dinner – iske baad kuch heavy nahi.\nSone se pehle agar bhookh lage – warm paani + saunf ya haldi doodh – isse petrol ka kaam nahi hoga, aram milega.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath varicose veins mein koi specific khaana band karna padta hai?',
      answer: 'Kuch specific foods hain jo kuch medicines ke saath avoid karne ki salah di jaati hai – jaise coffee aur strong smells – lekin ye har medicine mein alag hota hai, sabke liye nahi.\nApne homoeopath se poochho – jo medicine aapko di gayi hai uske hisaab se specific guidance lein.\nDiet mein jo changes is page pe bataye gaye hain – wo homeopathic treatment ke saath complementary hain – inflammation aur fluid retention control karna dono ke liye helpful hai.',
    },
    {
      _key: 'faq8',
      question: 'Varicose veins mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karna zarori nahi – lekin choice matter karta hai.\nAllowed: machli (boiled/grilled) – omega-3 vein inflammation reduce karta hai. Boiled anda – protein + rutin. Boiled/grilled chicken (bina skin) – lean protein.\nAvoid: red meat (mutton), fried kuch bhi, processed meat – ye inflammatory hain aur varicose veins worse karte hain.\nCooking method sabse important hai – same chicken boiled aur fried mein bahut fark hai varicose veins ke liye.',
    },
    {
      _key: 'faq9',
      question: 'Kya varicose veins mein namak bilkul band karna padega?',
      answer: 'Bilkul band nahi – lekin kam karna zaroori hai.\nSodium body mein paani rokta hai – ye directly legs mein swelling badhata hai jo varicose veins symptom hai.\nSafe approach: ghar ka khaana – namak thoda kam daalo.\nCompletely avoid: packaged food, namkeen, chips, processed cheese – inme hidden sodium bahut zyada hoti hai.\nICMR recommend karta hai 5g/day se kam sodium – varicose veins mein 3-4g tak rakhna better hai.',
    },
    {
      _key: 'faq10',
      question: 'Varicose veins mein lambe time tak khade rehna – kya diet se fark padta hai?',
      answer: 'Occupation se varicose veins ka seedha link hai – ye research mein confirmed hai (housewives, factory workers highest risk).\nDiet akele occupation ka effect nahi hata sakti – lekin sahi diet se blood viscosity control hoti hai aur inflammation kamti hai jo symptoms ko manageable rakhta hai.\nPractical combination: har 1-1.5 ghante mein 5 minute walk karo + din mein kafi paani piyo + low sodium diet – teen milke cheez behtar hoti hai alag alag se.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Gwozdzinski L et al — Factors Influencing Venous Remodeling in the Development of Varicose Veins of the Lower Limbs — International Journal of Molecular Sciences', year: '2024', url: 'https://pubmed.ncbi.nlm.nih.gov/38338837' },
    { _key: 's2', name: 'Paul JS et al — Prevalence of chronic venous disorders and its risk factors among rural adults in Tamil Nadu, South India — Journal of Vascular Surgery: Venous and Lymphatic Disorders', year: '2026', url: 'https://pubmed.ncbi.nlm.nih.gov/41520833' },
    { _key: 's3', name: 'Barstow C, Kassop D — Cardiovascular Disease: Chronic Venous Insufficiency and Varicose Veins — FP Essentials', year: '2019', url: 'https://pubmed.ncbi.nlm.nih.gov/30995000' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Namak kam karein yeh sochke ki ghar ka khaana safe hai – packaged dahi, namkeen, biscuits mein hidden sodium bahut zyada hoti hai jo patients notice nahi karte',
    mustEat: 'Amla – vitamin C collagen synthesis ke liye – varicose veins mein vein wall jo weak hoti hai uski repair ke liye collagen sabse zaroori building block hai',
    mustAvoid: 'Alcohol – veins ko permanently dilate karta hai – varicose veins mein ek glass bhi us raat ki swelling clearly badhata hai – no quantity is safe here',
  },

  doctorNote: 'Maine notice kiya hai ki jo varicose veins patients namak aur alcohol dono ek saath chodh dete hain – unka leg swelling aur heaviness sirf 2-3 hafte mein clearly better hota hai treatment ke saath – jo sirf ek chodh ke nahi hota. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Varicose Veins mein kya khayein, kya nahi – complete list: homeopedia.in/diet/varicose-veins',
  shareTextMealPlan: 'Varicose Veins ke liye 4-din ka Indian diet plan: homeopedia.in/diet/varicose-veins',
  shareTextPage: 'Varicose Veins Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/varicose-veins',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Varicose Veins diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Varicose Veins diet chart seeded — homeopedia.in/diet/varicose-veins')
}

seed().catch(console.error)
