import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-gout',
  _type: 'diet',
  title: 'Gout (Gathiya) Diet Chart',
  hindiName: 'Gathiya / Vaat Rog / Uric Acid ki Bimari',
  slug: { _type: 'slug', current: 'gout' },
  relatedDiseaseSlug: 'gout',
  category: 'Joints',
  metaTitle: 'Gout (Gathiya) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Gout (Gathiya) diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Gout mein body purine-rich foods ko break down karke uric acid banati hai — jo joints mein crystal ki tarah jam jaata hai aur tadapne wala dard deta hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Rozana 8-10 glass paani zaroor piyo', reason: 'uric acid urine se bahar nikalta hai — paani kam = crystal zyada jamega' },
    { _key: 'eh2', habit: 'Raat ka khaana 7 baje tak khatam karo', reason: 'raat mein purine metabolism slow hoti hai — late khaana uric acid level subah tak badha deta hai' },
    { _key: 'eh3', habit: 'Ek baar mein zyada mat khao', reason: 'bade meals ke baad uric acid spike hota hai — thoda thoda baar baar better hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'low purine hai — uric acid nahi badhata — fiber se gut cleansing bhi hoti hai' },
        { _key: 'i2', food: 'Jowar / Bajra roti', reason: 'refined wheat se better — low purine grain — joint inflammation less karta hai' },
        { _key: 'i3', food: 'Brown rice', reason: 'safe range mein purine — fiber se uric acid excretion better hoti hai' },
        { _key: 'i4', food: 'Sabudana', reason: 'almost zero purine — flare-up ke din safe option hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'high water content — kidney ko uric acid flush karne mein direct help karta hai' },
        { _key: 'i6', food: 'Turai', reason: 'alkaline vegetable — body ka pH balance karta hai jo uric acid crystal formation rokta hai' },
        { _key: 'i7', food: 'Gajar', reason: 'antioxidants se joint ki chronic inflammation kam hoti hai' },
        { _key: 'i8', food: 'Palak (flare-up ke din avoid)', reason: 'Vitamin C ke saath uric acid excretion improve hoti hai — vegetable purines gout utna trigger nahi karte jitna animal purines (flare-up pe avoid karein)' },
        { _key: 'i9', food: 'Lauki ka juice (subah khaali pet)', reason: 'kidneys ko alkaline environment deta hai — uric acid flush karne mein help' },
        { _key: 'i10', food: 'Methi saag (winter mein)', reason: 'anti-inflammatory compounds hain jo gout flare frequency kam karte hain' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Cherry / Jamun', reason: 'anthocyanins hote hain jo uric acid levels directly kam karte hain — gout ke liye specific fruit hai' },
        { _key: 'i12', food: 'Seb (Apple)', reason: 'malic acid hota hai jo uric acid neutralize karta hai — roz ek seb beneficial' },
        { _key: 'i13', food: 'Papaya', reason: 'Vitamin C aur bromelain — dono uric acid excretion improve karte hain' },
        { _key: 'i14', food: 'Nimbu paani (bina cheeni)', reason: 'citric acid body mein alkaline hota hai — uric acid crystal formation rokta hai' },
        { _key: 'i15', food: 'Nashpati', reason: 'low purine, high water content — kidney support karta hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chhilke wali)', reason: 'other dals ki tulna mein purine content lowest — safe daily protein source in gout' },
        { _key: 'i17', food: 'Masoor dal (week mein 3-4 baar)', reason: 'plant-based purine gout utna trigger nahi karta jitna meat — moderate quantity mein safe' },
        { _key: 'i18', food: 'Tofu (fresh, ghar ka)', reason: 'soy protein — uric acid pe neutral effect — animal protein se behtar choice in gout (packaged soy avoid karein)' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i19', food: 'Adrak chai (bina milk, kam cheeni)', reason: 'gingerols joint ki acute sujan kam karte hain — flare-up mein specially useful' },
        { _key: 'i20', food: 'Haldi + kali mirch (saath mein)', reason: 'curcumin ka anti-inflammatory effect gout mein kaam karta hai — kali mirch se absorption better hota hai' },
        { _key: 'i21', food: 'Jeera paani (subah)', reason: 'detox water — kidney function improve karta hai — uric acid excretion badhata hai' },
        { _key: 'i22', food: 'Dhania seeds ka paani', reason: 'diuretic effect — excess uric acid urine se bahar karta hai' },
        { _key: 'i23', food: 'Til ka tel (cooking ke liye)', reason: 'omega-6 balanced — joint lubrication mein help karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Anda (boiled, 1-2 per day)', reason: 'yolk mein purine negligible hota hai — gout patients ke liye safest non-veg protein' },
    { _key: 'nva2', food: 'Chicken breast (boiled/grilled, small portion)', reason: 'red meat se purine 30-40% kam — week mein 2 baar, small portion allowed' },
    { _key: 'nva3', food: 'Surmai ya Rohu machhi (small portion, grilled)', reason: 'omega-3 joint inflammation kam karta hai — badi quantity avoid karo kyunki fish mein purine hota hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Red meat (mutton, beef, pork)', reason: 'highest purine content — uric acid directly aur tezi se spike karta hai gout mein' },
    { _key: 'nvav2', food: 'Organ meats (liver, kidney, brain)', reason: 'extreme purine concentration — single serving mein uric acid bahut zyada badhta hai' },
    { _key: 'nvav3', food: 'Fried chicken / tali machhi', reason: 'trans fat + high purine combination — double trigger for gout flare' },
    { _key: 'nvav4', food: 'Prawns / shellfish', reason: 'seafood mein sabse zyada purine — strict avoid in gout' },
    { _key: 'nvav5', food: 'Packaged meat (sausage, salami, cold cuts)', reason: 'preservatives + high purine + sodium — triple hit for uric acid levels' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida products (bread, biscuit, namkeen)', reason: 'refined flour insulin spike karta hai jo uric acid retention badhata hai' },
        { _key: 'ri2', food: 'Packaged snacks (chips, khakhra)', reason: 'sodium + preservatives kidney function slow karte hain — uric acid kam flush hota hai' },
        { _key: 'ri3', food: 'Yeast-based products (bread, pizza base, idli mix)', reason: 'yeast mein extremely high purine hoti hai — gout ka direct trigger' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full-fat doodh aur malai', reason: 'saturated fat joint mein inflammation maintain karta hai — gout worse hoti hai (low-fat dahi alag hai — wo allowed hai)' },
        { _key: 'ri5', food: 'Paneer (badi quantity)', reason: 'high fat content — joint mein uric acid crystal deposition badhata hai' },
        { _key: 'ri6', food: 'Processed cheese', reason: 'sodium + saturated fat + preservatives — gout ke liye combination harmful hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Fructose wali cheezein (packaged juice, cola)', reason: 'fructose liver mein directly uric acid mein convert hoti hai — gout ka strongest dietary trigger hai research mein' },
        { _key: 'ri8', food: 'Aloo + tel combination (chips, fries)', reason: 'aloo alone ok hai lekin fried karne pe trans fat + starch = inflammation' },
        { _key: 'ri9', food: 'Achaar / papad', reason: 'sodium bahut zyada — uric acid retention badhata hai kidneys pe load deke' },
        { _key: 'ri10', food: 'Meethai / mithai', reason: 'refined sugar + ghee combination — uric acid excretion slow karta hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri11', food: 'Alcohol (beer especially)', reason: 'beer mein purine highest hai + alcohol uric acid excretion rok deti hai — double mechanism — strict avoid' },
        { _key: 'ri12', food: 'Packaged fruit juice (Frooti, Maaza)', reason: 'fructose concentrate — directly uric acid spike karta hai' },
        { _key: 'ri13', food: 'Cold drinks (Pepsi, Coke)', reason: 'high fructose corn syrup — gout ka #1 dietary trigger in multiple studies' },
        { _key: 'ri14', food: 'Coconut water (over-consumption)', reason: 'thoda ok hai lekin zyada peene pe potassium imbalance — kidney pe extra load' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Nimbu paani (garam, bina cheeni) — 1 glass', 'Jeera / dhania seeds ka paani (raat bhar bheega hua)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya + vegetables (lauki/gajar) — light aur low-purine filling breakfast', 'Moong dal chilla + adrak chutney'], nonVegOption: '2 boiled anda + 1 roti + salad' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['Seb ya papaya — 1 fruit', 'Bhuna chana — small handful'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal + lauki sabzi', 'Brown rice + masoor dal + turai sabzi + salad'], nonVegOption: 'Boiled chicken breast (small) + 2 roti + sabzi — no gravy' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak/tulsi chai (bina milk ya low-fat milk, kam cheeni)', 'Roasted makhana — uric acid pe neutral, satisfying snack'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['Khichdi (moong dal + rice) + ghee thoda — easy to digest, low purine, kidney-friendly', '2 roti + palak/methi sabzi + dahi (low-fat)'], nonVegOption: 'Clear chicken soup (no cream, no fat) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Haldi doodh (low-fat milk) — curcumin raat bhar joint inflammation pe kaam karta hai', 'Warm paani — hydration maintain karo'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Nimbu paani',
      vegNashta: 'Daliya + lauki sabzi',
      vegDopahar: 'Moong dal + jowar roti + gajar sabzi',
      vegShaam: 'Adrak chai + makhana',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled anda + 1 roti',
      nonVegDopahar: 'Grilled chicken (small) + jowar roti + gajar sabzi',
      nonVegRaat: 'Clear chicken soup + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Jeera paani',
      vegNashta: 'Moong dal chilla + adrak chutney',
      vegDopahar: 'Brown rice + masoor dal + turai sabzi',
      vegShaam: 'Seb + bhuna chana',
      vegRaat: '2 roti + methi sabzi + low-fat dahi',
      nonVegNashta: 'Moong dal chilla (same)',
      nonVegDopahar: 'Surmai grilled (small piece) + brown rice + dal',
      nonVegRaat: '2 roti + methi sabzi + dahi (same)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Nimbu paani',
      vegNashta: 'Poha (light, vegetables ke saath)',
      vegDopahar: 'Bajra roti + chana dal + palak sabzi',
      vegShaam: 'Tulsi chai + papaya',
      vegRaat: 'Sabudana khichdi ya moong dal soup + roti',
      nonVegNashta: '1 boiled anda + poha',
      nonVegDopahar: 'Boiled chicken + bajra roti + palak sabzi',
      nonVegRaat: 'Moong dal soup + roti (same)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Dhania paani',
      vegNashta: 'Daliya + gajar + adrak',
      vegDopahar: 'Brown rice + arhar dal + lauki sabzi + salad',
      vegShaam: 'Adrak chai + roasted chana',
      vegRaat: '2 bajra roti + turai sabzi',
      nonVegNashta: 'Daliya (same)',
      nonVegDopahar: 'Grilled surmai (small) + rice + lauki sabzi',
      nonVegRaat: '2 bajra roti + turai sabzi (same)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, sabudana, daliya — zero purine load raho — joint ko aur trigger mat do',
        'Dahi, palak, masoor dal — normally allowed hain lekin flare-up ke din ye bhi avoid karo temporarily',
        'Zyada se zyada paani aur nimbu paani — uric acid flush karna us din sabse zaroori hai — 12+ glass',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi — almost zero purine — safest vrat food for gout patients',
        'Fruits (seb, papaya, nashpati) — vrat mein safe aur uric acid pe beneficial',
        'Vrat mein peanuts zyada mat khao — moderate purine hota hai — thoda ok, badi quantity nahi',
        'Nirjala vrat (bina paani) — gout mein risky hai — uric acid concentrate hota hai — doctor se zaroor poochho pehle',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti order karo — safe choice, purine low',
        'Paneer dishes avoid karo — heavy fat',
        'Clearly bolo "bina maida" — dhaba mein roti maida ki bhi hoti hai — atta specify karo',
        'Practical hack: Pehle ek glass paani + nimbu piyo — overall meal ka impact thoda kam hota hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: roasted chana, dry fruits (badam, akhrot) — emergency snack, low purine',
        'Train mein: plain daliya ya poha order karo — idli bhi ok hai (rice-based, low purine) — packaged namkeen aur juice bilkul avoid',
      ],
    },
  ],

  proTip: 'Subah uthke 10 minute mein nimbu paani piyo — khaali pet. Is ek habit se zyada results milte hain diet change se pehle. Raat bhar body purine metabolize karti hai — subah flush karna most effective time hota hai.',
  importantNote: 'Ye chart ek general guide hai — gout ka har case alag hota hai. Kidney function, dusri conditions, current medicines sab matter karte hain. Apni condition ke hisaab se apne homoeopath se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Gout mein purine avoid karna medicines ka kaam aasaan karta hai — jab uric acid ka input kam ho toh homoeopathic remedies urate crystals dissolve karne mein better respond karti hain aur flare-ups ki frequency clearly kam hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya Gout mein dahi khana theek hai?',
      answer: 'Haan — low-fat dahi gout mein allowed hai, lekin full-fat dahi avoid karo.\nLow-fat dairy products actually uric acid excretion improve karti hain — ye research-backed hai.\nPackaged set dahi (full cream) mein saturated fat zyada hota hai — wo avoid karo.\nGhar ka fresh bana, low-fat dahi — 1 small katori — safe.\nFull-fat paneer aur malai wali cheezein alag category mein hain — wo avoid karo.',
    },
    {
      _key: 'faq2',
      question: 'Kya Gout mein aloo khana band karna padega?',
      answer: 'Nahi — aloo alone gout mein safe hai, lekin fried aloo avoid karo.\nAloo ka purine content bahut low hai — ye problem nahi hai.\nProblem hai cooking method — chips, fries mein trans fat inflammation badhata hai.\nBoiled/steamed aloo ya aloo sabzi (kam tel mein) — allowed.\nAloo + dal combination lunch mein — perfectly fine.',
    },
    {
      _key: 'faq3',
      question: 'Gout mein diet se kitne din mein fark dikhta hai?',
      answer: 'Kuch patients mein 2-3 hafte mein uric acid levels improve hone lagte hain.\nFlare-up ki frequency kam hone mein 4-6 hafte lag sakte hain — ye individual variation hai.\nDiet se uric acid kaam hota hai lekin crystals jo pehle se jam chuke hain — unhe medicines dissolve karti hain.\nDiet + homeopathic treatment saath chalein — sirf diet se puraane crystals nahi hatenge.\nApne doctor se regular monitoring karwate raho.',
    },
    {
      _key: 'faq4',
      question: 'Gout mein chai/coffee peena theek hai?',
      answer: 'Adrak wali herbal chai — gout mein actually helpful hai.\nRegular milk chai — din mein 1-2 cup ok hai, zyada nahi.\nCoffee — research mein coffee se uric acid thoda kam hoti hai — 1-2 cup safe consider ki jaati hai.\nBilkul avoid karo: packaged juice (Frooti, Maaza), cola, beer — ye gout ke sabse bade dietary triggers hain.\nBina cheeni nimbu paani — best drink for gout.',
    },
    {
      _key: 'faq5',
      question: 'Gout mein vrat rakh sakte hain?',
      answer: 'Haan — lekin kuch rules ke saath.\nVrat mein paani zyada peena bahut zaroori hai — kam paani se uric acid concentrate hota hai aur flare-up aa sakta hai.\nSabudana, fruits, low-fat dahi — safe vrat foods.\nNirjala vrat (bina paani) — gout mein risky hai — pehle doctor se poochho.\nAgar recent flare-up aaya ho — us hafte vrat nahi rakhna better hai.',
    },
    {
      _key: 'faq6',
      question: 'Gout mein raat ko late khaana khaana theek hai?',
      answer: 'Nahi — late night khaana gout mein zyada problem karta hai.\nRaat mein kidney function slow hoti hai — uric acid excretion kam hoti hai.\nLate khaane ke baad metabolism purine ko zyada uric acid mein convert karta hai.\n7-7:30 PM tak raat ka khaana khatam karo — gout mein ye ek practical aur effective change hai.\nAgar bhook lage toh warm paani ya haldi doodh lo.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Specific khaane ki restriction sirf specific medicines ke saath hoti hai — sabse nahi.\nStrong smell wali cheezein (raw onion, garlic, camphor, coffee) — kuch medicines ke saath avoid karne ko kaha jaata hai — apne doctor se poochho.\nGout mein specifically alcohol bilkul avoid karo — ye medicine effectiveness bhi kam karta hai.\nIndividual prescription ke hisaab se guidance alag hoti hai — generalize mat karo.',
    },
    {
      _key: 'faq8',
      question: 'Gout mein non-veg khana chahiye ya bilkul band karna padega?',
      answer: 'Bilkul band karna zaroori nahi — lekin selective rehna padega.\nStrict avoid: red meat, organ meats, prawns, beer.\nAllowed in small quantities: boiled eggs (safest), grilled chicken breast (week mein 2 baar, small portion).\nFish — surmai ya rohu — thoda ok hai lekin badi quantity nahi, aur grilled/boiled hi.\nVegetarian patients mein gout management generally easier hota hai — plant-based purines animal purines jitna uric acid nahi badhate.',
    },
    {
      _key: 'faq9',
      question: 'Gout mein chawal khana safe hai ya band karna padega?',
      answer: 'Haan — chawal gout mein safe hai.\nChawal ka purine content low hai — directly uric acid nahi badhata.\nBrown rice slightly better hai fiber ke liye — lekin white rice bhi allowed hai moderate quantity mein.\nProblem tab hoti hai jab chawal ke saath high-purine dal + meat saath mein khao — combination ka load matter karta hai.\nPlain khichdi (moong dal + rice) gout patients ke liye ek ideal meal hai.',
    },
    {
      _key: 'faq10',
      question: 'Gout mein tomato (tamatar) khana chahiye ya nahi?',
      answer: 'Thoda controversial hai — research mixed hai.\nKuch studies mein tomato gout flare se linked mila — lekin direct causal link strong nahi hai.\nAgar aapko personally lagta hai ki tomato khane ke baad joint mein zyada dard hota hai — avoid karo.\nAgar koi reaction nahi hota — cooked tamatar (sabzi mein) moderate amount mein generally ok hai.\nRaw tomato large quantity mein avoid karo flare-up ke din.\nSafe side ke liye: tamatar ki jagah nimbu use karo khane mein — better choice for gout.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Zhang Y et al — Gout and Diet: A Comprehensive Review — Nutrients', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/36079783' },
    { _key: 's2', name: 'Jakše B et al — Uric Acid and Plant-Based Nutrition — Nutrients', year: '2019', url: 'https://pubmed.ncbi.nlm.nih.gov/31357560' },
    { _key: 's3', name: 'Kaneko K et al — Total purine content of common foodstuffs for gout — Biol Pharm Bull', year: '2014', url: 'https://pubmed.ncbi.nlm.nih.gov/24553148' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Sirf meat band karna — lekin packaged juice, cold drinks, fructose-rich foods continue karna. Fructose ek bada trigger hai jo log ignore karte hain.',
    mustEat: 'Jamun ya cherry — anthocyanins uric acid levels directly kam karte hain — gout ke liye most specific fruit hai',
    mustAvoid: 'Beer — purine highest + uric acid excretion bhi rokti hai — double mechanism — gout ka #1 food trigger',
  },

  doctorNote: 'Mere gout patients mein jo log fructose-rich drinks (packaged juice, cold drinks) completely band kar dete hain — unka response treatment se pehle hi clearly better dikhta hai — akele meat kam karne se jo result nahi milta wo sirf drinks band karne se milta hai. Bahut log meat pe focus karte hain aur glass bhar ke Maaza peete rehte hain — ye sabse common aur costly mistake hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Gout (Gathiya) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/gout',
  shareTextMealPlan: 'Gout (Gathiya) ke liye 4-din ka Indian diet plan: homeopedia.in/diet/gout',
  shareTextPage: 'Gout (Gathiya) Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/gout',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding gout diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Gout diet chart seeded — homeopedia.in/diet/gout')
}

seed().catch(console.error)
