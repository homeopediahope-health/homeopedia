import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-recurrent-mouth-ulcer',
  _type: 'diet',
  title: 'Recurrent Mouth Ulcer (Muh ke Chhale) Diet Chart',
  hindiName: 'Barambar Muh ke Chhale / Munh ke Ghav',
  slug: { _type: 'slug', current: 'recurrent-mouth-ulcer' },
  relatedDiseaseSlug: 'recurrent-mouth-ulcer',
  category: 'Digestive',
  metaTitle: 'Mouth Ulcer (Muh ke Chhale) Diet – Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Muh ke chhale diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Muh ke chhale baar baar isliye aate hain kyunki body mein iron, Vitamin B12 ya folate ki kami hoti hai – aur kuch khaane oral mucosa ki lining directly irritate karte hain.\n\nNeeche complete guide hai – green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Khana dheere dheere chabao', reason: 'jaldi mein khaane se oral mucosa injury hoti hai jo ulcer trigger karta hai' },
    { _key: 'eh2', habit: 'Roz ek iron/B12-rich item zaroor khaao', reason: 'baar baar chhale ki sabse badi wajah ye deficiencies hain' },
    { _key: 'eh3', habit: 'Bahut thanda ya bahut garam khaana avoid karo', reason: 'extreme temperature ulcer ki healing slow karta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'Iron aur B vitamins dono milte hain – mucosa repair mein help karta hai' },
        { _key: 'i2', food: 'Oats (plain, unseasoned)', reason: 'Gut lining soothing hoti hai – mouth lining pe bhi yahi effect' },
        { _key: 'i3', food: 'Brown rice', reason: 'Easily chew hota hai ulcer mein – B vitamins ka acha source' },
        { _key: 'i4', food: 'Ragi (nachni)', reason: 'Calcium aur iron dono – oral tissue regeneration ke liye zaroori' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'Anti-inflammatory, easily digestible – oral sujan kam karta hai' },
        { _key: 'i6', food: 'Turai', reason: 'Kaafi soft pakti hai – chewing mein pain nahi hoga ulcer ke time' },
        { _key: 'i7', food: 'Palak', reason: 'Folate (vitamin B9) ka best Indian source – RAS mein folate deficiency common hai' },
        { _key: 'i8', food: 'Gajar (kacha ya halka pakka)', reason: 'Beta-carotene jo mucosa ki lining strengthen karta hai' },
        { _key: 'i9', food: 'Methi', reason: 'Iron se bhari – khoon ki kami door karta hai jo ulcers badhati hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Papaya', reason: 'Papain enzyme oral inflammation reduce karta hai – healing speed karta hai' },
        { _key: 'i11', food: 'Seb (Apple)', reason: 'Chilled nahi, room temperature pe – Vitamin C + quercetin anti-inflammatory' },
        { _key: 'i12', food: 'Kela (fresh, pakka lekin overripe nahi)', reason: 'Smooth texture – ulcer pe friction nahi – B6 milta hai' },
        { _key: 'i13', food: 'Amla (dry ya murabba – meetha nahi)', reason: 'Vitamin C ka concentrated source – mucosa repair karta hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal (pani wali, light)', reason: 'Sabse easily digestible dal – ulcer ke time gut aur oral stress dono kam' },
        { _key: 'i15', food: 'Masoor dal', reason: 'Folate aur iron dono – RAS ke do main deficiencies address karta hai' },
        { _key: 'i16', food: 'Chana dal (soft pakki hui)', reason: 'Plant protein + iron – mucosa cell renewal ke liye protein zaroori hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i17', food: 'Tulsi chai (bina kali mirch)', reason: 'Anti-bacterial – oral flora balance karta hai' },
        { _key: 'i18', food: 'Haldi (warm paani ya doodh mein)', reason: 'Curcumin oral inflammation seedha reduce karta hai' },
        { _key: 'i19', food: 'Nariyal paani', reason: 'Electrolytes deta hai – dehydration se ulcer aur bante hain' },
        { _key: 'i20', food: 'Desi ghee (thoda – khaane mein)', reason: 'Mucosal lining lubricates karta hai – healing mein help' },
        { _key: 'i21', food: 'Mulethi (liquorice) chai', reason: 'Anti-inflammatory – oral ulcer mein clinically helpful' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Anda boiled (2)', reason: 'Vitamin B12 ka best bioavailable source – RAS ki common deficiency seedha address karta hai' },
    { _key: 'nva2', food: 'Chicken soup (no spice, no cream)', reason: 'Soft protein – ulcer ke time chewing avoid hoti hai' },
    { _key: 'nva3', food: 'Rohu / Katla machhi (steamed ya halka pakki)', reason: 'Omega-3 + B12 – oral inflammation kam karta hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / pakoda', reason: 'Trans fat aur high heat oral mucosa irritation badhata hai' },
    { _key: 'nvav2', food: 'Red meat (mutton, beef)', reason: 'Chewy texture – ulcer pe friction – plus inflammatory hota hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami)', reason: 'Sodium nitrate + preservatives – oral ulcer trigger karte hain' },
    { _key: 'nvav4', food: 'Shellfish', reason: 'Hard to digest, high histamine – immune response trigger kar sakta hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, biscuit, naan)', reason: 'Gut mein inflammation badhata hai – oral mucosa pe indirect effect' },
        { _key: 'ri2', food: 'Namkeen, chips, crackers', reason: 'Sharp edges oral mucosa ke fresh ulcer ko damage karte hain' },
        { _key: 'ri3', food: 'Instant noodles / Maggi', reason: 'Sodium + preservatives + spice mix – trifecta trigger for mouth ulcers' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged full-fat cheese', reason: 'Histamine badhata hai – kuch RAS patients mein direct trigger' },
        { _key: 'ri5', food: 'Paneer (zyada matra mein)', reason: 'Generally theek hai, lekin agar dairy sensitivity ho toh ulcer badh sakta hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri6', food: 'Mirch', reason: 'Capsaicin oral mucosa ki already irritated lining seedha damage karta hai' },
        { _key: 'ri7', food: 'Imli / khatti chutney', reason: 'Citric acid ulcer ke wound mein direct sting – healing slow karta hai' },
        { _key: 'ri8', food: 'Nimbu / santara (direct)', reason: 'Citric acid contact pain aur irritation deta hai ulcer pe' },
        { _key: 'ri9', food: 'Badam / kaju (salted, roasted)', reason: 'Hard texture + salt – ulcer pe friction aur irritation' },
        { _key: 'ri10', food: 'Chocolates', reason: 'SLS (sodium lauryl sulfate) aur sugar – oral ulcer frequency badhate hain' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri11', food: 'Cold drinks / soda', reason: 'Carbonic acid + sugar – oral pH disturb karta hai – healing slow' },
        { _key: 'ri12', food: 'Chai zyada', reason: 'Strong tannins oral mucosa dry karte hain – recovery time badhta hai' },
        { _key: 'ri13', food: 'Alcohol', reason: 'Oral mucosal cells ko directly dehydrate karta hai' },
        { _key: 'ri14', food: 'Bahut thandi lassi / ice cream', reason: 'Extreme cold temperature ulcer site irritate karta hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + 1 tsp shehad (raw) – mucosal coating deta hai', 'Nariyal paani (room temperature) – electrolytes + oral soothing'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with soft boiled sabzi (lauki/palak)', 'Oats (plain, halka namak) + 1 soft fruit (papaya/kela)'], nonVegOption: '2 ande boiled + 1 roti (no spice)' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 katori papaya (room temperature)', 'Ek mutthi bheege chane (soft, no salt)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 roti + moong/masoor dal (pani wali) + lauki/turai sabzi', 'Brown rice + palak dal + kheera raita (ghar ka fresh dahi)'], nonVegOption: 'Steamed rohu machhi + 1 roti + dal' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Tulsi-mulethi chai (bina mirch) + bheega kaju (2-3, plain)', 'Nariyal paani'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['Khichdi (moong dal + rice, thodi ghee) + lauki sabzi', '2 roti + masoor dal + soft palak sabzi'], nonVegOption: 'Chicken soup (no cream, no spice) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (bina kali mirch)', 'Warm mulethi chai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Lukewarm paani + shehad',
      vegNashta: 'Daliya + soft palak',
      vegDopahar: '2 roti + moong dal + lauki sabzi',
      vegShaam: 'Papaya',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 ande boiled + 1 roti',
      nonVegDopahar: 'Moong dal + steamed machhi + roti',
      nonVegRaat: 'Khichdi + chicken soup',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Nariyal paani',
      vegNashta: 'Oats + papaya',
      vegDopahar: 'Brown rice + masoor dal + turai sabzi',
      vegShaam: 'Bheege chane',
      vegRaat: '2 roti + palak dal',
      nonVegNashta: 'Oats + 1 anda boiled',
      nonVegDopahar: 'Masoor dal + roti',
      nonVegRaat: 'Palak dal + roti',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Lukewarm paani + shehad',
      vegNashta: 'Moong dal chilla (no spice) + kela',
      vegDopahar: '2 roti + chana dal + gajar sabzi',
      vegShaam: 'Tulsi chai + 2-3 bheege kaju',
      vegRaat: 'Khichdi + lauki + ghee',
      nonVegNashta: 'Moong dal chilla',
      nonVegDopahar: 'Steamed rohu + roti + dal',
      nonVegRaat: 'Chicken soup + roti',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Nariyal paani',
      vegNashta: 'Daliya + papaya',
      vegDopahar: 'Ragi roti + masoor dal + palak sabzi',
      vegShaam: '1 seb (room temperature)',
      vegRaat: '2 roti + moong dal + turai',
      nonVegNashta: 'Daliya + 1 anda boiled',
      nonVegDopahar: 'Ragi roti + dal + sabzi',
      nonVegRaat: 'Moong dal khichdi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Chhale Bahut Bade Ya Zyada Hon Tab',
      emoji: '😣',
      tips: [
        'Us din sirf soft, lukewarm khaana – khichdi, daliya, soup – chewing minimum rakho',
        'Mirch, nimbu, imli, chips – sab band – normally allowed cheezein bhi agar munh mein lagein toh skip',
        'Haldi warm paani se kulli karo din mein 2-3 baar – oral inflammation seedha kam hoti hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (no mirch) – easily chew hoti hai – oral stress nahi',
        'Singhara aata ki roti – iron ka decent source – vrat mein B12 miss hogi, anda allowed ho toh lo',
        'Vrat mein nimbu sharbat aur imli – ye avoid karo – chhale pe citric acid seedha irritation karta hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dhaba mein – dal tadka (mirch kam karo bol ke) + plain roti + kheera salad order karo',
        'Avoid karo – chaat, pani puri, dahi bhalla – sab mein imli, mirch ya citric acids hote hain',
        'Waiter se specifically bolo "bilkul mirch nahi, imli nahi" – nahi toh standard masala aayega',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo – dry roasted chane (unsalted), kela, plain daliya sachets – in sab se kaam chalta hai',
        'Train/flight mein – plain roti + dal order karo, mirch alag rakhne bolo – ya carry ghar ka khana agar short trip',
      ],
    },
  ],

  proTip: 'Agar barambar chhale aate hain – sirf diet se control mushkil hoga. Ek baar iron, B12 aur folate levels blood test se check karwao – in teeno mein se koi ek deficient hai toh supplementation ke saath diet ka double effect hota hai.',
  importantNote: 'Ye chart ek general guide hai – har patient ki situation alag hoti hai. Baar baar ya bade chhale ho rahe hain toh apne homoeopath se personalized plan banwayein – kuch cases mein underlying cause alag hoti hai.',
  homeopathyDiet: 'Jab diet se iron, B12 aur folate sahi level pe aate hain – homoeopathic medicines body ke immune response ko better regulate kar paati hain – ulcer ki frequency aur intensity dono kam hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya muh ke chhale mein dahi khana theek hai?',
      answer: 'Haan – ghar ka fresh bana dahi ek katori chhale mein allowed hai.\nDahi mein probiotics hote hain jo gut aur oral flora balance karte hain.\nLekin packaged ya bahut set dahi avoid karo – unka histamine level zyada hota hai.\nBahut thanda dahi bhi avoid karo – temperature irritation badhata hai.\nGhar ka room-temperature dahi – safe aur helpful hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya muh ke chhale mein nimbu ya imli le sakte hain?',
      answer: 'Nahi – nimbu aur imli chhale hone pe directly avoid karo.\nCitric acid aur tartaric acid ulcer ke wound ke contact mein aane pe pain aur irritation badhate hain.\nHealing bhi slow hoti hai.\nJab chhale theek ho jayein – phir normal quantity mein le sakte ho.\nIss dauran Vitamin C ke liye amla (murabba) better option hai – acidity kam hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se muh ke chhale mein kitne din mein fark dikhta hai?',
      answer: 'Minor chhale (chote) usually 7-10 din mein apne aap theek hote hain diet ke saath.\nTrigger foods band karo – healing 2-3 din jaldi ho sakti hai.\nAgar iron ya B12 deficiency hai – 4-6 hafte lagenge deficiency correct hone mein – tab frequency kam hogi.\nDiet akele immediate relief nahi deta – triggers avoid karna + soothing foods = combination kaam karta hai.\nBaar baar aane wale chhale mein doctor se milo – sirf diet se nahi sambhalta.',
    },
    {
      _key: 'faq4',
      question: 'Muh ke chhale mein chai pi sakte hain?',
      answer: 'Ek cup subah light chai (bina bahut kali mirch) theek hai.\nStrong tannin-heavy chai muh ke inside tissue ko dry karta hai – healing slow hoti hai.\nTulsi ya mulethi chai – plain chai se behtar option hai chhale ke time.\nCold drinks, soda, alcohol – ye strictly avoid karo.\nNariyal paani ya warm paani sabse safe choice hai is time.',
    },
    {
      _key: 'faq5',
      question: 'Muh ke chhale mein vrat kar sakte hain?',
      answer: 'Haan – lekin thoda sochke.\nSabudana khichdi (no mirch) – safe option hai.\nVrat mein nimbu sharbat aur imli wali cheezein avoid karo – citric acid ulcer irritate karta hai.\nVrat mein B12 aur iron miss hoti hai – anda allowed ho toh roz 1-2 lo.\nAgar bahut zyada chhale hain ya pain hai – us din ka fast skip karna better hai.',
    },
    {
      _key: 'faq6',
      question: 'Raat ko deri se khaane se muh ke chhale aur bante hain?',
      answer: 'Directly link nahi hai – lekin indirect connection hai.\nRaat ko deri se khaane ke baad sone se acid reflux chance badhta hai – aur oral pH disturb hoti hai.\nDisturbed sleep immune function weak karta hai – jo RAS (recurrent aphthous stomatitis) ka ek trigger hai.\nRaat 8 baje ke baad kuch bhi heavy avoid karo – specifically ulcer active ho tab.\nEk simple habit – khaane ke baad plain paani se kulli karo – acidity neutralize hoti hai.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'General rule – coffee, camphor, raw onion, garlic ki bahut strong smell kuch medicines ke effect ko interfere karta hai.\nLekin ye har medicine ke saath nahi hota – apne doctor se poochho.\nDiet restriction mostly specific remedies ke saath hoti hai – blanket ban nahi.\nMirch, imli, nimbu – ye disease ke hisaab se avoid karo, medicine ke liye nahi.\nDoctor ne jo instruction di ho – wahi follow karo, generalize mat karo.',
    },
    {
      _key: 'faq8',
      question: 'Muh ke chhale mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karne ki zaroorat nahi – lekin sahi tarike se khaao.\nAnda (boiled) – best option hai – B12 directly milti hai jo RAS ki main deficiency hai.\nMachhi (steamed/boiled) – omega-3 + B12 – allowed aur helpful.\nFried chicken, red meat, processed meat – ye avoid karo – chewy texture + inflammation dono problem.\nCooking method matter karta hai – boiled ya steamed non-veg safe hai, fried nahi.',
    },
    {
      _key: 'faq9',
      question: 'Kya muh ke chhale mein aam, santara ya khatta fruit le sakte hain?',
      answer: 'Chhale active hon tab – citrus fruits (santara, mosambi, nimbu) avoid karo.\nAam agar bilkul pakka aur meetha ho – thoda le sakte ho, acidity kam hoti hai pakke aam mein.\nAmla direct nahi – amla murabba (meetha nahi, thoda) ya dry amla – Vitamin C ke liye safer option hai.\nKiwi, pineapple – ye bhi avoid karo jab chhale hon – citric acid zyada hota hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya chocolate ya meetha khaane se muh ke chhale badhte hain?',
      answer: 'Haan – chocolate ek known trigger hai muh ke chhale ke liye.\nChocolate mein sodium lauryl sulfate (SLS) type compounds aur sugar hoti hai – ye oral mucosa irritation badhate hain.\nBahut meetha – especially refined sugar – immune response disturb karta hai – ulcer frequency badh sakti hai.\nJalebi, gulab jamun, barfi – zyada sugar + ghee combination – flare-up ke time avoid karo.\nThodi meethas theek hai – lekin chocolate se distance rakho jab tak chhale theek na ho jayein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Sun A et al — Significant association of deficiencies of hemoglobin, iron, vitamin B12, and folic acid with recurrent aphthous stomatitis — Journal of Oral Pathology & Medicine', year: '2014', url: 'https://pubmed.ncbi.nlm.nih.gov/25048341' },
    { _key: 's2', name: 'Chiang CP et al — Recurrent aphthous stomatitis: Etiology, serum autoantibodies, hematinic deficiencies, and management — Journal of the Formosan Medical Association', year: '2018', url: 'https://pubmed.ncbi.nlm.nih.gov/30446298' },
    { _key: 's3', name: 'Koparal M et al — Evaluation of biochemical variables in patients with recurrent aphthous stomatitis — Journal of Stomatology, Oral and Maxillofacial Surgery', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/36162803' },
    { _key: 's4', name: 'Al-Amad SH et al — Vitamin D and hematinic deficiencies in patients with recurrent aphthous stomatitis — Clinical Oral Investigations', year: '2019', url: 'https://pubmed.ncbi.nlm.nih.gov/31680206' },
    { _key: 's5', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Nimbu ka paani ya vitamin C ke naam pe citrus fruits lena – direct citric acid contact healing slow karta hai, amla better option hai',
    mustEat: 'Palak – folate ka best Indian source – RAS mein folate deficiency direct factor hai',
    mustAvoid: 'Chips / namkeen crackers – sharp edges + salt – active ulcer pe worst combination',
  },

  doctorNote: 'Maine notice kiya hai ki mere recurrent mouth ulcer patients mein jo log mirch, nimbu aur packaged snacks ek saath chodh dete hain – unka homoeopathic treatment response baaki patients se clearly better hota hai – sirf ek item chodne se utna fark nahi aata. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Muh ke chhale mein kya khayein, kya nahi – complete list: homeopedia.in/diet/recurrent-mouth-ulcer',
  shareTextMealPlan: 'Muh ke chhale ke liye 4-din ka Indian diet plan: homeopedia.in/diet/recurrent-mouth-ulcer',
  shareTextPage: 'Muh ke Chhale Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/recurrent-mouth-ulcer',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Recurrent Mouth Ulcer diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Recurrent Mouth Ulcer diet chart seeded — homeopedia.in/diet/recurrent-mouth-ulcer')
}

seed().catch(console.error)
