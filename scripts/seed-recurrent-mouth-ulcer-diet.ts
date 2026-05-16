import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

async function seed() {
  console.log('🌱 Seeding Recurrent Mouth Ulcer diet chart...')

  const doc = {
    _id: 'diet-recurrent-mouth-ulcer',
    _type: 'diet',
    title: 'Recurrent Mouth Ulcer Diet',
    slug: { _type: 'slug', current: 'recurrent-mouth-ulcer' },
    disease: 'Recurrent Mouth Ulcer (Recurrent Aphthous Stomatitis)',
    diseaseHindi: 'Barambar Muh ke Chhale / Munh ke Ghav',
    category: 'Digestive',
    lastReviewed: 'May 2026',
    doctorName: 'Dr. Shadab Khan, MD Homoeopath',

    seoTitle: 'Mouth Ulcer (Muh ke Chhale) Diet – Kya Khayein Kya Nahi | Homeopedia',
    seoDescription: 'Muh ke chhale diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',

    introLine1: 'Muh ke chhale baar baar isliye aate hain kyunki body mein iron, Vitamin B12 ya folate ki kami hoti hai – aur kuch khaane oral mucosa ki lining directly irritate karte hain.',
    introLine2: 'Neeche complete guide hai – green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

    habits: [
      { icon: '⏰', text: 'Khana dheere dheere chabao – jaldi mein khaane se oral mucosa injury hoti hai jo ulcer trigger karta hai.' },
      { icon: '⏰', text: 'Roz ek iron/B12-rich item zaroor khaao – baar baar chhale ki sabse badi wajah ye deficiencies hain.' },
      { icon: '⏰', text: 'Bahut thanda ya bahut garam khaana avoid karo – extreme temperature ulcer ki healing slow karta hai.' },
    ],

    vegGreenList: [
      {
        category: 'Anaj / Grains',
        items: [
          { name: 'Daliya (broken wheat)', reason: 'Iron aur B vitamins dono milte hain – mucosa repair mein help karta hai' },
          { name: 'Oats (plain, unseasoned)', reason: 'Gut lining soothing hoti hai – mouth lining pe bhi yahi effect' },
          { name: 'Brown rice', reason: 'Easily chew hota hai ulcer mein – B vitamins ka acha source' },
          { name: 'Ragi (nachni)', reason: 'Calcium aur iron dono – oral tissue regeneration ke liye zaroori' },
        ],
      },
      {
        category: 'Sabziyaan / Vegetables',
        items: [
          { name: 'Lauki', reason: 'Anti-inflammatory, easily digestible – oral sujan kam karta hai' },
          { name: 'Turai', reason: 'Kaafi soft pakti hai – chewing mein pain nahi hoga ulcer ke time' },
          { name: 'Palak', reason: 'Folate (vitamin B9) ka best Indian source – RAS mein folate deficiency common hai' },
          { name: 'Gajar (kacha ya halka pakka)', reason: 'Beta-carotene jo mucosa ki lining strengthen karta hai' },
          { name: 'Methi', reason: 'Iron se bhari – khoon ki kami door karta hai jo ulcers badhati hai' },
        ],
      },
      {
        category: 'Phal / Fruits',
        items: [
          { name: 'Papaya', reason: 'Papain enzyme oral inflammation reduce karta hai – healing speed karta hai' },
          { name: 'Seb (Apple)', reason: 'Chilled nahi, room temperature pe – Vitamin C + quercetin anti-inflammatory' },
          { name: 'Kela (fresh, pakka lekin overripe nahi)', reason: 'Smooth texture – ulcer pe friction nahi – B6 milta hai' },
          { name: 'Amla (dry ya murabba – meetha nahi)', reason: 'Vitamin C ka concentrated source – mucosa repair karta hai' },
        ],
      },
      {
        category: 'Dal aur Protein',
        items: [
          { name: 'Moong dal (pani wali, light)', reason: 'Sabse easily digestible dal – ulcer ke time gut aur oral stress dono kam' },
          { name: 'Masoor dal', reason: 'Folate aur iron dono – RAS ke do main deficiencies address karta hai' },
          { name: 'Chana dal (soft pakki hui)', reason: 'Plant protein + iron – mucosa cell renewal ke liye protein zaroori hai' },
        ],
      },
      {
        category: 'Drinks, Masale aur Tel',
        items: [
          { name: 'Tulsi chai (bina kali mirch)', reason: 'Anti-bacterial – oral flora balance karta hai' },
          { name: 'Haldi (warm paani ya doodh mein)', reason: 'Curcumin oral inflammation seedha reduce karta hai' },
          { name: 'Nariyal paani', reason: 'Electrolytes deta hai – dehydration se ulcer aur bante hain' },
          { name: 'Desi ghee (thoda – khaane mein)', reason: 'Mucosal lining lubricates karta hai – healing mein help' },
          { name: 'Mulethi (liquorice) chai', reason: 'Anti-inflammatory – oral ulcer mein clinically helpful' },
        ],
      },
    ],

    nonVegAllowed: [
      { name: 'Anda boiled (2)', reason: 'Vitamin B12 ka best bioavailable source – RAS ki common deficiency seedha address karta hai' },
      { name: 'Chicken soup (no spice, no cream)', reason: 'Soft protein – ulcer ke time chewing avoid hoti hai' },
      { name: 'Rohu / Katla machhi (steamed ya halka pakki)', reason: 'Omega-3 + B12 – oral inflammation kam karta hai' },
    ],

    nonVegAvoid: [
      { name: 'Fried chicken / pakoda', reason: 'Trans fat aur high heat oral mucosa irritation badhata hai' },
      { name: 'Red meat (mutton, beef)', reason: 'Chewy texture – ulcer pe friction – plus inflammatory hota hai' },
      { name: 'Processed meat (sausage, salami)', reason: 'Sodium nitrate + preservatives – oral ulcer trigger karte hain' },
      { name: 'Shellfish', reason: 'Hard to digest, high histamine – immune response trigger kar sakta hai' },
    ],

    redList: [
      {
        category: 'Processed aur Maida',
        items: [
          { name: 'Maida (bread, biscuit, naan)', reason: 'Gut mein inflammation badhata hai – oral mucosa pe indirect effect' },
          { name: 'Namkeen, chips, crackers', reason: 'Sharp edges oral mucosa ke fresh ulcer ko damage karte hain' },
          { name: 'Instant noodles / Maggi', reason: 'Sodium + preservatives + spice mix – trifecta trigger for mouth ulcers' },
        ],
      },
      {
        category: 'Dairy aur Heavy Foods',
        items: [
          { name: 'Packaged full-fat cheese', reason: 'Histamine badhata hai – kuch RAS patients mein direct trigger' },
          { name: 'Paneer (zyada matra mein)', reason: 'Generally theek hai, lekin agar dairy sensitivity ho toh ulcer badh sakta hai' },
        ],
      },
      {
        category: 'Teekha, Meetha aur Oily',
        items: [
          { name: 'Mirch', reason: 'Capsaicin oral mucosa ki already irritated lining seedha damage karta hai' },
          { name: 'Imli / khatti chutney', reason: 'Citric acid ulcer ke wound mein direct sting – healing slow karta hai' },
          { name: 'Nimbu / santara (direct – juice nahi)', reason: 'Citric acid contact pain aur irritation deta hai ulcer pe' },
          { name: 'Badam / kaju (salted, roasted)', reason: 'Hard texture + salt – ulcer pe friction aur irritation' },
          { name: 'Chocolates', reason: 'SLS (sodium lauryl sulfate) aur sugar – oral ulcer frequency badhate hain' },
          { name: 'Overripe / bahut pakka kela', reason: 'Tyramine badhti hai overripe mein – kuch logon mein trigger' },
        ],
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Cold drinks / soda', reason: 'Carbonic acid + sugar – oral pH disturb karta hai – healing slow' },
          { name: 'Chai zyada', reason: 'Strong tannins oral mucosa dry karte hain – recovery time badhta hai' },
          { name: 'Alcohol', reason: 'Oral mucosal cells ko directly dehydrate karta hai' },
          { name: 'Bahut thandi lassi / ice cream', reason: 'Extreme cold temperature ulcer site irritate karta hai' },
        ],
      },
    ],

    dailyMealPlan: [
      {
        slot: 'Subah Uthke (6–7 AM)',
        icon: '🌅',
        items: [
          'Lukewarm paani + 1 tsp shehad (raw) – mucosal coating deta hai',
          'Nariyal paani (room temperature) – electrolytes + oral soothing',
        ],
      },
      {
        slot: 'Nashta (8–9 AM)',
        icon: '🍽️',
        items: [
          'Daliya with soft boiled sabzi (lauki/palak)',
          'Oats (plain, halka namak) + 1 soft fruit (papaya/kela)',
          '[Non-veg: 2 ande boiled + 1 roti (no spice)]',
        ],
      },
      {
        slot: 'Mid-Morning (11 AM)',
        icon: '☕',
        items: [
          '1 katori papaya (room temperature)',
          'Ek mutthi bheege chane (soft, no salt)',
        ],
      },
      {
        slot: 'Dopahar (1–2 PM)',
        icon: '🌱',
        items: [
          '2 roti + moong/masoor dal (pani wali) + lauki/turai sabzi',
          'Brown rice + palak dal + kheera raita (ghar ka fresh dahi)',
          '[Non-veg: Steamed rohu machhi + 1 roti + dal]',
        ],
      },
      {
        slot: 'Shaam (4–5 PM)',
        icon: '🌿',
        items: [
          'Tulsi-mulethi chai (bina mirch) + bheega kaju (2–3, plain)',
          'Nariyal paani',
        ],
      },
      {
        slot: 'Raat (7–8 PM)',
        icon: '🌙',
        items: [
          'Khichdi (moong dal + rice, thodi ghee) + lauki sabzi',
          '2 roti + masoor dal + soft palak sabzi',
          '[Non-veg: Chicken soup (no cream, no spice) + 1 roti]',
        ],
      },
      {
        slot: 'Sone Se Pehle (9 PM)',
        icon: '😴',
        items: [
          'Warm haldi doodh (bina kali mirch)',
          'Warm mulethi chai',
        ],
      },
    ],

    samplePlan4Day: [
      {
        day: 'Din 1 (Veg)',
        morning: 'Lukewarm paani + shehad',
        breakfast: 'Daliya + soft palak',
        lunch: '2 roti + moong dal + lauki sabzi',
        evening: 'Papaya',
        dinner: 'Khichdi + ghee',
      },
      {
        day: 'Din 2 (Veg)',
        morning: 'Nariyal paani',
        breakfast: 'Oats + papaya',
        lunch: 'Brown rice + masoor dal + turai sabzi',
        evening: 'Bheege chane',
        dinner: '2 roti + palak dal',
      },
      {
        day: 'Din 3 (Veg)',
        morning: 'Lukewarm paani + shehad',
        breakfast: 'Moong dal chilla (no spice) + kela',
        lunch: '2 roti + chana dal + gajar sabzi',
        evening: 'Tulsi chai + 2–3 bheege kaju',
        dinner: 'Khichdi + lauki + ghee',
      },
      {
        day: 'Din 4 (Veg)',
        morning: 'Nariyal paani',
        breakfast: 'Daliya + papaya',
        lunch: 'Ragi roti + masoor dal + palak sabzi',
        evening: '1 seb (room temperature)',
        dinner: '2 roti + moong dal + turai',
      },
      {
        day: 'Din 1 (Non-Veg)',
        morning: 'Lukewarm paani + shehad',
        breakfast: '2 ande boiled + 1 roti',
        lunch: 'Moong dal + steamed machhi + roti',
        evening: 'Papaya',
        dinner: 'Khichdi + chicken soup',
      },
      {
        day: 'Din 2 (Non-Veg)',
        morning: 'Nariyal paani',
        breakfast: 'Oats + 1 anda boiled',
        lunch: 'Masoor dal + roti',
        evening: 'Bheege chane',
        dinner: 'Palak dal + roti',
      },
      {
        day: 'Din 3 (Non-Veg)',
        morning: 'Lukewarm paani + shehad',
        breakfast: 'Moong dal chilla',
        lunch: 'Steamed rohu + roti + dal',
        evening: 'Tulsi chai + bheege kaju',
        dinner: 'Chicken soup + roti',
      },
      {
        day: 'Din 4 (Non-Veg)',
        morning: 'Nariyal paani',
        breakfast: 'Daliya + 1 anda boiled',
        lunch: 'Ragi roti + dal + sabzi',
        evening: '1 seb (room temperature)',
        dinner: 'Moong dal khichdi',
      },
    ],

    specialSituations: [
      {
        type: 'Flare-Up / Chhale Bahut Bade Ya Zyada Hon Tab',
        icon: '🔴',
        tips: [
          'Us din sirf soft, lukewarm khaana – khichdi, daliya, soup – chewing minimum rakho',
          'Mirch, nimbu, imli, chips – sab band – normally allowed cheezein bhi agar munh mein lagein toh skip',
          'Haldi warm paani se kulli karo din mein 2–3 baar – oral inflammation seedha kam hoti hai',
        ],
      },
      {
        type: 'Vrat / Fasting',
        icon: '🙏',
        tips: [
          'Sabudana khichdi (no mirch) – easily chew hoti hai – oral stress nahi',
          'Singhara aata ki roti – iron ka decent source – vrat mein B12 miss hogi, anda allowed ho toh lo',
          'Vrat mein nimbu sharbat aur imli – ye avoid karo – chhale pe citric acid seedha irritation karta hai',
        ],
      },
      {
        type: 'Bahar Khana Ho (Restaurant / Dhaba)',
        icon: '🍽️',
        tips: [
          'Dhaba mein – dal tadka (mirch kam karo bol ke) + plain roti + kheera salad order karo',
          'Avoid karo – chaat, pani puri, dahi bhalla – sab mein imli, mirch ya citric acids hote hain',
          'Practical hack – waiter se specifically bolo "bilkul mirch nahi, imli nahi" – nahi toh standard masala aayega',
        ],
      },
      {
        type: 'Travel Mein',
        icon: '✈️',
        tips: [
          'Carry karo – dry roasted chane (unsalted), kela, plain daliya sachets – in sab se kaam chalta hai',
          'Train/flight mein – plain roti + dal order karo, mirch alag rakhne bolo – ya carry ghar ka khana agar short trip',
        ],
      },
    ],

    proTip: 'Agar barambar chhale aate hain – sirf diet se control mushkil hoga. Ek baar iron, B12 aur folate levels blood test se check karwao – in teeno mein se koi ek deficient hai toh supplementation ke saath diet ka double effect hota hai.',

    importantNote: 'Ye chart ek general guide hai – har patient ki situation alag hoti hai. Baar baar ya bade chhale ho rahe hain toh apne homoeopath se personalized plan banwayein – kuch cases mein underlying cause alag hoti hai.',

    homeopathyNote: 'Jab diet se iron, B12 aur folate sahi level pe aate hain – homoeopathic medicines body ke immune response ko better regulate kar paati hain – ulcer ki frequency aur intensity dono kam hoti hai.',

    faqs: [
      {
        question: 'Kya muh ke chhale mein dahi khana theek hai?',
        answer: 'Haan – ghar ka fresh bana dahi ek katori chhale mein allowed hai.\nDahi mein probiotics hote hain jo gut aur oral flora balance karte hain.\nLekin packaged ya bahut set dahi avoid karo – unka histamine level zyada hota hai.\nBahut thanda dahi bhi avoid karo – temperature irritation badhata hai.\nGhar ka room-temperature dahi – safe aur helpful hai.',
      },
      {
        question: 'Kya muh ke chhale mein nimbu ya imli le sakte hain?',
        answer: 'Nahi – nimbu aur imli chhale hone pe directly avoid karo.\nCitric acid aur tartaric acid ulcer ke wound ke contact mein aane pe pain aur irritation badhate hain.\nHealing bhi slow hoti hai.\nJab chhale theek ho jayein – phir normal quantity mein le sakte ho.\nIss dauran Vitamin C ke liye amla (murabba) better option hai – acidity kam hai.',
      },
      {
        question: 'Diet se muh ke chhale mein kitne din mein fark dikhta hai?',
        answer: 'Minor chhale (chote) usually 7–10 din mein apne aap theek hote hain diet ke saath.\nTrigger foods band karo – healing 2–3 din jaldi ho sakti hai.\nAgar iron ya B12 deficiency hai – 4–6 hafte lagenge deficiency correct hone mein – tab frequency kam hogi.\nDiet akele immediate relief nahi deta – triggers avoid karna + soothing foods = combination kaam karta hai.\nBaar baar aane wale chhale mein doctor se milo – sirf diet se nahi sambhalta.',
      },
      {
        question: 'Muh ke chhale mein chai pi sakte hain?',
        answer: 'Ek cup subah light chai (bina bahut kali mirch) theek hai.\nStrong tannin-heavy chai muh ke inside tissue ko dry karta hai – healing slow hoti hai.\nTulsi ya mulethi chai – plain chai se behtar option hai chhale ke time.\nCold drinks, soda, alcohol – ye strictly avoid karo.\nNariyal paani ya warm paani sabse safe choice hai is time.',
      },
      {
        question: 'Muh ke chhale mein vrat kar sakte hain?',
        answer: 'Haan – lekin thoda sochke.\nSabudana khichdi (no mirch) – safe option hai.\nVrat mein nimbu sharbat aur imli wali cheezein avoid karo – citric acid ulcer irritate karta hai.\nVrat mein B12 aur iron miss hoti hai – anda allowed ho toh roz 1–2 lo.\nAgar bahut zyada chhale hain ya pain hai – us din ka fast skip karna better hai.',
      },
      {
        question: 'Raat ko deri se khaane se muh ke chhale aur bante hain?',
        answer: 'Directly link nahi hai – lekin indirect connection hai.\nRaat ko deri se khaane ke baad sone se acid reflux chance badhta hai – aur oral pH disturb hoti hai.\nDisturbed sleep immune function weak karta hai – jo RAS (recurrent aphthous stomatitis) ka ek trigger hai.\nRaat 8 baje ke baad kuch bhi heavy avoid karo – specifically ulcer active ho tab.\nEk simple habit – khaane ke baad plain paani se kulli karo – acidity neutralize hoti hai.',
      },
      {
        question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
        answer: 'General rule – coffee, camphor, raw onion, garlic ki bahut strong smell kuch medicines ke effect ko interfere karta hai.\nLekin ye har medicine ke saath nahi hota – apne doctor se poochho.\nDiet restriction mostly specific remedies ke saath hoti hai – blanket ban nahi.\nMirch, imli, nimbu – ye disease ke hisaab se avoid karo, medicine ke liye nahi.\nDoctor ne jo instruction di ho – wahi follow karo, generalize mat karo.',
      },
      {
        question: 'Muh ke chhale mein non-veg khana chahiye ya band karna padega?',
        answer: 'Band karne ki zaroorat nahi – lekin sahi tarike se khaao.\nAnda (boiled) – best option hai – B12 directly milti hai jo RAS ki main deficiency hai.\nMachhi (steamed/boiled) – omega-3 + B12 – allowed aur helpful.\nFried chicken, red meat, processed meat – ye avoid karo – chewy texture + inflammation dono problem.\nCooking method matter karta hai – boiled ya steamed non-veg safe hai, fried nahi.',
      },
      {
        question: 'Kya muh ke chhale mein aam, santara ya khatta fruit le sakte hain?',
        answer: 'Chhale active hon tab – citrus fruits (santara, mosambi, nimbu) avoid karo.\nAam agar bilkul pakka aur meetha ho – thoda le sakte ho, acidity kam hoti hai pakke aam mein.\nAmla direct nahi – amla murabba (meetha nahi, thoda) ya dry amla – Vitamin C ke liye safer option hai.\nKiwi, pineapple – ye bhi avoid karo jab chhale hon – citric acid zyada hota hai.',
      },
      {
        question: 'Kya chocolate ya meetha khaane se muh ke chhale badhte hain?',
        answer: 'Haan – chocolate ek known trigger hai muh ke chhale ke liye.\nChocolate mein sodium lauryl sulfate (SLS) type compounds aur sugar hoti hai – ye oral mucosa irritation badhate hain.\nBahut meetha – especially refined sugar – immune response disturb karta hai – ulcer frequency badh sakti hai.\nJalebi, gulab jamun, barfi – zyada sugar + ghee combination – flare-up ke time avoid karo.\nThodi meethas theek hai – lekin chocolate se distance rakho jab tak chhale theek na ho jayein.',
      },
    ],

    sources: [
      {
        author: 'Sun A et al.',
        title: 'Significant association of deficiencies of hemoglobin, iron, vitamin B12, and folic acid and high homocysteine level with recurrent aphthous stomatitis',
        journal: 'Journal of Oral Pathology & Medicine',
        year: '2014',
        pmid: '25048341',
        doi: '10.1111/jop.12241',
      },
      {
        author: 'Chiang CP et al.',
        title: 'Recurrent aphthous stomatitis - Etiology, serum autoantibodies, anemia, hematinic deficiencies, and management',
        journal: 'Journal of the Formosan Medical Association',
        year: '2018',
        pmid: '30446298',
        doi: '10.1016/j.jfma.2018.10.023',
      },
      {
        author: 'Koparal M et al.',
        title: 'Evaluation of biochemical variables in patients with recurrent aphthous stomatitis',
        journal: 'Journal of Stomatology, Oral and Maxillofacial Surgery',
        year: '2022',
        pmid: '36162803',
        doi: '10.1016/j.jormas.2022.09.015',
      },
      {
        author: 'Al-Amad SH, Hasan H',
        title: 'Vitamin D and hematinic deficiencies in patients with recurrent aphthous stomatitis',
        journal: 'Clinical Oral Investigations',
        year: '2019',
        pmid: '31680206',
        doi: '10.1007/s00784-019-03102-9',
      },
      {
        author: 'ICMR-NIN',
        title: 'Dietary Guidelines for Indians',
        journal: 'National Institute of Nutrition',
        year: '2024',
        url: 'https://www.nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf',
      },
    ],

    quickFacts: [
      {
        label: 'Sabse common diet mistake muh ke chhale mein',
        value: 'Nimbu ka paani ya vitamin C ke naam pe citrus fruits lena – direct citric acid contact healing slow karta hai, amla better option hai.',
      },
      {
        label: 'Ek food jo zaroor khaana chahiye',
        value: 'Palak – folate ka best Indian source – RAS mein folate deficiency direct factor hai.',
      },
      {
        label: 'Ek food jo bilkul avoid karein',
        value: 'Chips / namkeen crackers – sharp edges + salt – active ulcer pe worst combination.',
      },
    ],

    doctorNote: 'Maine notice kiya hai ki mere recurrent mouth ulcer patients mein jo log mirch, nimbu aur packaged snacks ek saath chodh dete hain – unka homoeopathic treatment response baaki patients se clearly better hota hai – sirf ek item chodne se utna fark nahi aata.',

    shareTexts: [
      'Muh ke chhale mein kya khayein, kya nahi – complete list: homeopedia.in/recurrent-mouth-ulcer-diet-chart',
      'Muh ke chhale ke liye 4-din ka Indian diet plan: homeopedia.in/recurrent-mouth-ulcer-diet-chart',
      'Muh ke Chhale Diet Guide – green list, meal plan, special situations sab: homeopedia.in/recurrent-mouth-ulcer-diet-chart',
    ],
  }

  await client.createOrReplace(doc)
  console.log('✅ Recurrent Mouth Ulcer diet chart seeded — homeopedia.in/diet/recurrent-mouth-ulcer')
}

seed().catch(console.error)
