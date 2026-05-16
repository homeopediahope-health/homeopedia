import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-gallstones',
  _type: 'diet',
  title: 'Gallstones (Patthari) Diet Chart',
  hindiName: 'Patthari (Pitashay ki Patthari)',
  slug: { _type: 'slug', current: 'gallstones' },
  relatedDiseaseSlug: 'gallstones',
  category: 'Digestive',
  metaTitle: 'Gallstones (Patthari) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Gallstones (Patthari) diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Gallstones tab bante hain jab bile mein cholesterol ya bilirubin ka balance bigad jaata hai — kuch foods seedha is imbalance ko trigger karte hain aur kuch bile flow ko sahi rakhte hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah khaali pet 1-2 glass gunguna paani piyo', reason: 'bile duct flush hota hai, stones banne ki process slow hoti hai' },
    { _key: 'eh2', habit: 'Ek dum se fat-free diet mat karo', reason: 'bile tab move karta hai jab thoda healthy fat mile — bilkul zero fat = bile stasis = stone risk' },
    { _key: 'eh3', habit: 'Raat ka khaana 7 baje se pehle khatam karo', reason: 'raat mein gallbladder bhi rest mein hota hai aur bile concentrate hota hai — late eating se stone growth badh sakti hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (oats bhi)', reason: 'high soluble fiber bile cholesterol ko absorb karke stone banne se rokta hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'maida ki jagah — low glycemic index bile cholesterol spike nahi hone deta' },
        { _key: 'i3', food: 'Jowar / Bajra roti', reason: 'fiber se bharpoor — bile flow smooth rakhte hain' },
        { _key: 'i4', food: 'Poha (light)', reason: 'easily digestible — gallbladder pe stress nahi dalta' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'almost zero fat + high water content — bile dilute rakhti hai' },
        { _key: 'i6', food: 'Palak', reason: 'magnesium hota hai jo bile salt balance maintain karta hai' },
        { _key: 'i7', food: 'Karela', reason: 'bile production stimulate karta hai jisse flow blockage kam hota hai' },
        { _key: 'i8', food: 'Gajar', reason: 'beta-carotene + fiber dono — cholesterol bile mein dissolve hone mein help karta hai' },
        { _key: 'i9', food: 'Beetroot', reason: 'bile thinning properties hain — stones ko grow hone se rokne mein help karta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Seb (apple)', reason: 'malic acid gallstones ko soften karta hai — daily 1 seb beneficial hai' },
        { _key: 'i11', food: 'Nashpati (pear)', reason: 'pectin fiber bile cholesterol ko bind karke flush karta hai' },
        { _key: 'i12', food: 'Amla', reason: 'vitamin C bile acid synthesis improve karta hai — cholesterol stones ki formation slow hoti hai' },
        { _key: 'i13', food: 'Papaya', reason: 'digestive enzymes fat digestion easy karte hain — gallbladder pe load kam' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal (chhilka wali)', reason: 'low fat, high fiber — bile cholesterol absorb karta hai aur gut se flush karta hai' },
        { _key: 'i15', food: 'Masoor dal', reason: 'plant protein + fiber combo — animal fat ka healthy alternative jo stone risk nahi badhata' },
        { _key: 'i16', food: 'Chana dal (thodi matra)', reason: 'slowly digestible carbs — insulin spike nahi hone deta jo gallstone risk factor hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i17', food: 'Haldi + kaali mirch chai', reason: 'curcumin bile secretion badhata hai aur gallbladder motility improve karta hai' },
        { _key: 'i18', food: 'Adrak chai (bina doodh)', reason: 'anti-inflammatory — bile duct inflammation kam karta hai' },
        { _key: 'i19', food: 'Jeera paani', reason: 'bile production stimulate karta hai aur fat digestion smooth karta hai' },
        { _key: 'i20', food: 'Sarson ka tel (thoda — 1-2 tsp cooking mein)', reason: 'MUFA se bharpur — olive oil jaisa effect — cholesterol stones ka risk kam karta hai' },
        { _key: 'i21', food: 'Dhaniya seeds kadha', reason: 'traditional remedy — bile flow improve karta hai' },
        { _key: 'i22', food: 'Ghar ka fresh chhachh (low-fat buttermilk)', reason: 'probiotics + low fat dono benefits — gut health ke liye' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Machli (rohu, katla, surmai — boiled/steamed)', reason: 'omega-3 fatty acids bile cholesterol crystallization slow karte hain' },
    { _key: 'nva2', food: 'Anda safed (2 boiled — sirf white)', reason: 'low fat pure protein — yolk avoid karein (high cholesterol)' },
    { _key: 'nva3', food: 'Chicken (boiled/grilled, bina skin)', reason: 'lean protein, fat kam — gallbladder pe stress nahi' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Anda puri (yolk ke saath)', reason: 'yolk mein cholesterol high hota hai jo directly bile supersaturation badhata hai' },
    { _key: 'nvav2', food: 'Fried fish / fish fry', reason: 'cooking fat cholesterol bile mein spike karta hai' },
    { _key: 'nvav3', food: 'Mutton / red meat', reason: 'saturated fat high — bile cholesterol concentrate karta hai — stone growth risk' },
    { _key: 'nvav4', food: 'Chicken curry (heavy gravy)', reason: 'cream/coconut base fat overload — gallbladder spasm trigger kar sakta hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (roti, paratha, naan)', reason: 'refined carbs insulin spike karte hain jo liver se zyada cholesterol bile mein push karta hai' },
        { _key: 'ri2', food: 'Biscuits / packaged namkeen', reason: 'trans fat + maida combination — bile cholesterol supersaturation directly badhata hai' },
        { _key: 'ri3', food: 'White bread / pav', reason: 'low fiber — bile gut recycling slow karta hai — stones ka risk badh jaata hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full fat doodh', reason: 'saturated fat bile cholesterol level badhata hai — bilkul avoid karein' },
        { _key: 'ri5', food: 'Paneer (zyada matra)', reason: 'high fat dairy — stone-prone patients mein bile overload ka direct trigger' },
        { _key: 'ri6', food: 'Malai / cream / makkhan', reason: 'concentrated saturated fat — gallbladder contraction strong trigger karta hai jisme dard hota hai' },
        { _key: 'ri7', food: 'Packaged dahi (market wala)', reason: 'preservatives + high fat variant — fresh ghar ka chhachh better hai is disease mein' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri8', food: 'Fried khaana (puri, bhatura, pakoda, samosa)', reason: 'high fat gallbladder strong contraction trigger karta hai — stone mein dard ka sabse bada reason' },
        { _key: 'ri9', food: 'Meetha zyada (mithai, gulab jamun, rasgulla)', reason: 'fructose liver mein cholesterol production badhata hai jo bile mein aata hai' },
        { _key: 'ri10', food: 'Coconut (nariyal)', reason: 'saturated fat high — bile cholesterol badhata hai' },
        { _key: 'ri11', food: 'Mawa / khoya', reason: 'concentrated dairy fat — direct stone trigger' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri12', food: 'Cold drinks / soda', reason: 'fructose corn syrup bile cholesterol synthesis badhata hai — seedha stone risk' },
        { _key: 'ri13', food: 'Packaged fruit juice', reason: 'concentrated sugar + zero fiber — same effect jaise soda' },
        { _key: 'ri14', food: 'Zyada chai (3+ cups)', reason: 'tannins bile flow temporarily inhibit karte hain — 1-2 cups adrak chai without milk okay hai' },
        { _key: 'ri15', food: 'Alcohol', reason: 'liver pe extra load — bile composition disturb hoti hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['2 glass gunguna paani + 1 tsp jeera soaked overnight', '1 glass gunguna paani + half nimbu + 1 pinch haldi'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya (vegetables ke saath) + 1 small katori chhachh', 'Moong dal chilla (2) + adrak pudina chutney'], nonVegOption: '2 ande white (boiled) + brown rice roti + salad (yolk bilkul nahi)' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya nashpati (whole fruit — juice nahi)', 'Bhuna jeera chana (1 mutthi)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 roti (jowar/bajra) + moong dal + lauki sabzi + salad', 'Brown rice (1 katori) + masoor dal + palak sabzi'], nonVegOption: 'Steamed machli (rohu/surmai) + 1 roti + gajar-khira salad' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak tulsi chai (bina doodh) + 4-5 akhrot', 'Haldi paani (gunguna) + poha (light, thoda tel)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + chana dal + turai/palak sabzi', 'Khichdi (moong + rice, light ghee) + chhachh'], nonVegOption: 'Boiled chicken soup (no cream, no butter) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi paani (doodh nahi — paani mein haldi)', 'Saunf + mishri kadha — bile soothing effect'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Jeera soaked paani',
      vegNashta: 'Daliya + chhachh',
      vegDopahar: 'Bajra roti + moong dal + lauki',
      vegShaam: 'Seb + akhrot',
      vegRaat: 'Khichdi + haldi paani',
      nonVegNashta: '2 boiled egg white + poha',
      nonVegDopahar: 'Steamed surmai machli + brown rice + gajar sabzi',
      nonVegRaat: 'Khichdi (same)',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Nimbu gunguna paani',
      vegNashta: 'Moong dal chilla + chutney',
      vegDopahar: 'Brown rice + masoor dal + palak',
      vegShaam: 'Adrak chai + bhuna chana',
      vegRaat: 'Jowar roti + chana dal + gajar sabzi',
      nonVegNashta: 'Moong dal chilla + salad',
      nonVegDopahar: 'Boiled chicken + jowar roti + lauki',
      nonVegRaat: 'Arhar dal + roti (same)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Jeera soaked paani',
      vegNashta: 'Poha (light) + amla juice (1 small)',
      vegDopahar: '2 roti + arhar dal + turai',
      vegShaam: 'Nashpati + 4 akhrot',
      vegRaat: 'Moong dal khichdi + chhachh',
      nonVegNashta: '2 boiled egg white + brown toast',
      nonVegDopahar: 'Steamed rohu + roti + palak',
      nonVegRaat: 'Moong dal + roti (same)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Haldi gunguna paani',
      vegNashta: 'Daliya (oats) + chhachh',
      vegDopahar: 'Brown rice + masoor dal + beetroot sabzi',
      vegShaam: 'Tulsi adrak chai + chana',
      vegRaat: 'Bajra roti + palak dal + salad',
      nonVegNashta: 'Daliya + chhachh (same)',
      nonVegDopahar: 'Chicken soup (no cream) + brown rice + salad',
      nonVegRaat: 'Masoor dal + bajra roti (same)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Dard Zyada Ho Tab (Biliary Colic)',
      emoji: '😣',
      tips: [
        'Us din sirf liquid ya semi-liquid lo — daliya, moong dal paani, chhachh, sabzi soup — solid heavy khaana bilkul nahi',
        'Fat completely avoid karo us din — ghee, tel, dairy — zero — gallbladder contraction dard trigger karta hai',
        'Warm jeera-adrak paani dono ghante mein — bile flow slow-smooth rakhta hai — cold drinks bilkul nahi',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi theek hai — lekin ghee kam — galti se zyada ghee daldiya toh gallbladder irritate ho sakta hai',
        'Fruits — seb, nashpati — safe hain vrat mein — cholesterol stones mein beneficial bhi hain',
        'Vrat mein zyada der tak khaali pet mat raho — 4-5 ghante se zyada gap karne pe bile concentrate hota hai — stone risk badhta hai — kuch na kuch light lete raho',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka (less oil) + plain roti order karein — safe hai aur easily available hai',
        'Avoid karein: puri bhaji, paratha, paneer dishes, cream-based curry, fried kuch bhi — ye sab gallbladder attack trigger kar sakte hain',
        'Practical hack: pehle se 1 seb kha ke jao ghar se — bhookh kam rahegi aur zyada fat order karne ki possibility kam hogi',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karein: bhuna chana, akhrot (4-5), seb ya nashpati — easily available, no cooking needed, gallbladder-safe',
        'Train/hotel mein: plain khichdi ya dal rice order karein — almost har jagah milti hai — "kam tel mein banana" bol dein specifically',
      ],
    },
  ],

  proTip: 'Gallstone patients ko maine suggest kiya hai ki subah uthte hi pehla kaam — 1-2 glass gunguna paani peena karo — khaali pet. Ye ek simple habit bile duct flush karne ka kaam karti hai aur din ki shuruaat gallbladder ke liye best possible state mein hoti hai.',
  importantNote: 'Ye chart ek general guide hai — is disease ki severity aur stone ka size/type alag alag hota hai. Apni condition ke hisaab se apne homoeopath se personalized plan banwayein.',
  homeopathyDiet: 'Jab diet se bile ka environment sahi hota hai — cholesterol supersaturation kam hoti hai — tab homeopathic medicines gallbladder ki motility aur bile composition pe better kaam kar paati hain. Sahi diet treatment ko zyada effective banati hai — akela nahi.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya gallstones mein dahi khana sahi hai?',
      answer: 'Ghar ka fresh bana chhachh (mattha) — haan, allowed hai.\nChhachh low-fat hota hai aur probiotics gut health ke liye better hote hain.\nLekin full-fat dahi ya market ka packaged dahi avoid karein — unka fat content bile cholesterol badhata hai jo stone formation ka direct factor hai.\nRule simple hai: chhachh haan, full-fat dahi nahi.',
    },
    {
      _key: 'faq2',
      question: 'Kya gallstones mein ghee khana bilkul band karna padega?',
      answer: 'Bilkul band karna zaruri nahi — lekin matra matter karti hai.\n1 tsp ghee daily cooking mein acceptable hai — completely fat-free diet ulta nuksaan karti hai kyunki bile tab move hi nahi karta aur bile stasis badhta hai.\nJo avoid karna hai: ghee ki zyada matra (2+ tsp), makkhan, cream.\nThoda healthy fat zaruri hai — zero fat nahi.',
    },
    {
      _key: 'faq3',
      question: 'Kya gallstones mein chawal khana theek hai?',
      answer: 'Brown rice — haan, allowed hai.\nWhite rice — kha sakte hain, lekin maida se better brown rice hai kyunki iska glycemic index kam hota hai — insulin spike nahi hota jo liver mein cholesterol production nahi badhata.\nKhichdi (moong + rice) gallstones mein actually ek safe, easy meal hai.',
    },
    {
      _key: 'faq4',
      question: 'Diet se gallstones mein kitne time mein fark dikhega?',
      answer: 'Diet se pain episodes aur flare-ups mein fark 2-4 hafte mein dikh sakta hai.\nNew stone formation slow karna — ye months ka kaam hai, continuous diet se.\nJo already stones hain woh diet se dissolve nahi hote — treatment ke saath diet ka role hai stone growth rokna aur symptoms manage karna.\nApne doctor se regular ultrasound follow-up rakhein.',
    },
    {
      _key: 'faq5',
      question: 'Kya gallstones mein chai coffee pi sakte hain?',
      answer: '1-2 cup adrak chai bina doodh ke — allowed hai aur bile flow ke liye helpful bhi hai.\nCoffee (filter ya plain, bina cream) — moderate amount mein okay hai — kuch studies mein coffee cholesterol gallstone risk kam karta dikha hai.\nAvoid karein: 3+ cups wali strong chai with full fat milk, packaged 3-in-1 coffee, cold coffee cream ke saath.',
    },
    {
      _key: 'faq6',
      question: 'Gallstones mein vrat kar sakte hain?',
      answer: 'Kar sakte hain — lekin ek zaroori shart: 4-5 ghante se zyada gap mat karo bina kuch khaye.\nLamba fasting gallbladder mein bile concentrate karta hai — cholesterol supersaturation badhti hai — stone risk badhta hai.\nSafe vrat: seb, nashpati, sabudana (kam ghee), fruits — in sab se intermittent eating chalti rahe toh vrat safe hai is disease mein.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'General restrictions — medicine ke immediately pehle ya baad mein coffee, strong smell, raw onion, garlic — avoid karna suggested hota hai.\nYe restriction specific medicines pe depend karta hai — sabke liye same nahi hota.\nDiet restrictions jo gallstones ke liye hain woh alag hain — treatment restrictions doctor se confirm karein jo aapki medicine prescribe kar rahe hain.',
    },
    {
      _key: 'faq8',
      question: 'Gallstones mein non-veg khana chahiye ya band karna padega?',
      answer: 'Bilkul band karne ki zarurat nahi — lekin type aur cooking method matter karta hai.\nAllowed: steamed/boiled machli (rohu, katla), boiled chicken bina skin, egg whites (yolk nahi).\nAvoid: fried non-veg kuch bhi, mutton, red meat, heavy gravy chicken curry.\nOmega-3 se bharpoor machli toh actually gallstone patients ke liye beneficial hoti hai — bile cholesterol crystallization slow hoti hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya gallstones mein nimbu faydemand hai?',
      answer: 'Haan — gungune paani mein half nimbu subah — beneficial hai.\nVitamin C bile acid synthesis improve karta hai — research mein low vitamin C aur cholesterol stones ka link mila hai.\nLekin sirf nimbu koi magical cure nahi hai — overall diet ka hissa hai.\nAchaar mein nimbu — woh avoid karein — namak + oil combination alag hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya achaar, chatni, mirchi gallstones mein nuksaan karti hai?',
      answer: 'Zyada teekha aur oily khaana — haan, avoid karna chahiye.\nStrong spices gallbladder contraction trigger kar sakte hain — jo already stone hai usmein dard ka episode start ho sakta hai.\nHaldi, jeera, adrak, dhaniya — ye mild masale okay hain — anti-inflammatory bhi hain.\nPackaged achaar — tel + namak zyada — avoid karein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Di Ciaula A, Garruti G, Frühbeck G et al — The Role of Diet in the Pathogenesis of Cholesterol Gallstones — Current Medicinal Chemistry', year: '2019', url: 'https://pubmed.ncbi.nlm.nih.gov/28554328' },
    { _key: 's2', name: 'Pak M, Lindseth G — Risk Factors for Cholelithiasis — Gastroenterology Nursing', year: '2016', url: 'https://pubmed.ncbi.nlm.nih.gov/27467059' },
    { _key: 's3', name: 'Stokes CS, Krawczyk M, Lammert F — Gallstones: environment, lifestyle and genes — Digestive Diseases', year: '2011', url: 'https://pubmed.ncbi.nlm.nih.gov/21734384' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Fat bilkul band kar dena — zero fat diet bile stasis badhata hai aur stone risk ulta increase ho sakta hai',
    mustEat: 'Seb (apple) — daily 1 — malic acid gallstones ke environment ko change karta hai aur bile flow regular rakhta hai',
    mustAvoid: 'Puri / bhatura / fried khaana — high fat gallbladder contraction trigger karta hai — jo stone mein sharp dard ka sabse common reason hai',
  },

  doctorNote: 'Maine notice kiya hai ki jo gallstone patients fried khaana aur full-fat dairy dono ek saath chodh dete hain — unke pain episodes ki frequency aur intensity treatment ke saath dramatically better hoti hai compared to jo sirf ek chodh ke doosra jaari rakhte hain. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Gallstones mein kya khayein, kya nahi — complete list: homeopedia.in/diet/gallstones',
  shareTextMealPlan: 'Gallstones ke liye 4-din ka Indian diet plan: homeopedia.in/diet/gallstones',
  shareTextPage: 'Gallstones Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/gallstones',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Gallstones diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Gallstones diet chart seeded — homeopedia.in/diet/gallstones')
}

seed().catch(console.error)
