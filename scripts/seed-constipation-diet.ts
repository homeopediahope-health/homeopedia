import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-constipation',
  _type: 'diet',
  title: 'Constipation (Kabz) Diet Chart',
  hindiName: 'Kabz',
  slug: { _type: 'slug', current: 'constipation' },
  relatedDiseaseSlug: 'constipation',
  category: 'Digestive',
  metaTitle: 'Constipation (Kabz) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Kabz mein kya khayein, kya nahi — green list, red list, daily meal plan Hindi mein. Veg + non-veg dono. Dr. Shadab Khan. Homeopedia.in',
  intro: 'Constipation mein gut ka peristalsis (aantaon ki halchal) slow ho jaata hai — aur kuch foods is movement ko aur slow kar dete hain jabki kuch use trigger karte hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah uthte hi 2 glass gunguna paani piyo', reason: 'gut ka peristalsis reflex subah sabse strong hota hai' },
    { _key: 'eh2', habit: 'Khaana khaate waqt paani mat piyo', reason: 'digestive juices dilute hote hain jo stool ko dry banata hai' },
    { _key: 'eh3', habit: 'Raat ka khaana 7:30 baje tak khatam karo', reason: 'raat mein gut motility naturally slow hoti hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'insoluble fiber hai jo stool bulk badhata hai aur aantaon ko push karta hai' },
        { _key: 'i2', food: 'Jowar / Bajra ki roti', reason: 'maida se zyada fiber — stool transit time kam karta hai' },
        { _key: 'i3', food: 'Brown rice', reason: 'white rice se zyada fiber — gut mein slow fermentation helpful hoti hai' },
        { _key: 'i4', food: 'Oats (daliya style)', reason: 'beta-glucan soluble fiber — stool mein paani rok ke soft karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'magnesium hota hai jo intestinal muscles ko relax karta hai — natural laxative effect' },
        { _key: 'i6', food: 'Lauki', reason: '96% water content — stool ko hydrated rakhti hai — dry kabz mein seedha help karta hai' },
        { _key: 'i7', food: 'Turai', reason: 'soluble fiber rich — gut bacteria ke liye prebiotic ka kaam karti hai' },
        { _key: 'i8', food: 'Bhindi', reason: 'mucilaginous fiber hoti hai jo aanton ki lining ko coat karti hai — easy passage' },
        { _key: 'i9', food: 'Karela', reason: 'bile secretion stimulate karta hai jo fat digestion aur bowel movement dono help karta hai' },
        { _key: 'i10', food: 'Gajar (kachi)', reason: 'insoluble fiber — chewing se gut ko mechanical signal milta hai movement ka' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Papita (pakka)', reason: 'papain enzyme hota hai jo protein digestion improve karta hai aur fiber bhi deta hai' },
        { _key: 'i12', food: 'Seb (chhal ke saath)', reason: 'pectin soluble fiber — stool soft karta hai aur gut bacteria feed karta hai' },
        { _key: 'i13', food: 'Amrud/Guava (beej ke saath)', reason: 'seeds mein insoluble fiber hoti hai jo stool push karta hai' },
        { _key: 'i14', food: 'Kela (pakka, peela)', reason: 'pectin + resistant starch — gut motility improve karta hai (kacha hara kela avoid karein)' },
        { _key: 'i15', food: 'Jamun', reason: 'polyphenols gut microbiome diversity badhate hain — chronic kabz mein helpful' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chhilka wali)', reason: 'insoluble fiber stool bulk badhata hai — arhar/toor se zyada safe kabz mein' },
        { _key: 'i17', food: 'Masoor dal', reason: 'prebiotic fiber hai jo beneficial gut bacteria feed karta hai' },
        { _key: 'i18', food: 'Chana (bhuna ya boiled)', reason: 'resistant starch large intestine mein ferment hokar movement trigger karta hai' },
        { _key: 'i19', food: 'Rajma (well cooked)', reason: 'high fiber + high water absorption — stool weight badhata hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i20', food: 'Gunguna paani (subah khaali pet)', reason: 'gastrocolic reflex ko activate karta hai seedha' },
        { _key: 'i21', food: 'Jeera + saunf ka paani', reason: 'intestinal spasm kam karta hai aur gut motility smooth karta hai' },
        { _key: 'i22', food: 'Isabgol (psyllium husk)', reason: 'soluble + insoluble dono fiber — stool mein paani add karta hai' },
        { _key: 'i23', food: 'Adrak ki chai (bina zyada doodh)', reason: 'gingerol gut motility stimulate karta hai' },
        { _key: 'i24', food: 'Desi ghee (1 tsp subah gungune paani mein)', reason: 'lubricates intestinal walls — dry kabz mein seedha help karta hai' },
        { _key: 'i25', food: 'Haldi', reason: 'gut inflammation reduce karti hai jo IBS-linked kabz mein trigger hoti hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Boiled chicken (skinless)', reason: 'lean protein — fat kam hai to digestion pe load nahi' },
    { _key: 'nva2', food: 'Eggs (boiled/poached)', reason: 'easily digestible — green vegetables ke saath khao toh fiber balance rehta hai' },
    { _key: 'nva3', food: 'Rohu/Katla fish (steamed/grilled)', reason: 'omega-3 gut inflammation reduce karta hai jo motility help karta hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / mutton fry', reason: 'saturated fat gut motility slow karta hai' },
    { _key: 'nvav2', food: 'Red meat (mutton, beef)', reason: 'high fat + low fiber — transit time badh jaata hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami)', reason: 'preservatives aur low fiber — kabz seedha badhate hain' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour)', reason: 'insoluble fiber bilkul nahi — gut mein stool "pack" ho jaata hai' },
        { _key: 'ri2', food: 'Bread/pav (white)', reason: 'maida based — kabz ka sabse common Indian dietary trigger' },
        { _key: 'ri3', food: 'Biscuits, namkeen, mathri', reason: 'refined carbs + low fiber + low water — stool hard karta hai' },
        { _key: 'ri4', food: 'Instant noodles/pasta', reason: 'maida + processed — gut motility pe double negative effect' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri5', food: 'Zyada doodh (2+ glass daily)', reason: 'calcium casein combination stool bind karta hai — known constipating effect' },
        { _key: 'ri6', food: 'Paneer (large quantity)', reason: 'high protein + high fat + zero fiber — gut transit slow karta hai' },
        { _key: 'ri7', food: 'Fried snacks (pakoda, samosa)', reason: 'saturated fat peristalsis speed directly kam karta hai' },
        { _key: 'ri8', food: 'Cheese', reason: 'almost zero fiber + fat heavy — gut movement slow ho jaata hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri9', food: 'Refined sugar (mithai, cold drinks)', reason: 'gut microbiome balance bigaadta hai jo motility affect karta hai' },
        { _key: 'ri10', food: 'Zyada teekha khaana', reason: 'intestinal lining irritate karta hai — IBS-C pattern worsen kar sakta hai' },
        { _key: 'ri11', food: 'Coconut oil / vanaspati ghee', reason: 'partially hydrogenated fats gut muscle function slow karte hain' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri12', food: 'Chai (3+ cups daily)', reason: 'tannins stool dry karte hain + caffeine dehydration badhaata hai — seedha kabz badh sakta hai' },
        { _key: 'ri13', food: 'Cold drinks / aerated beverages', reason: 'gas produce karte hain lekin gut movement pe koi benefit nahi' },
        { _key: 'ri14', food: 'Alcohol', reason: 'gut lining dehydrate karta hai + motility reduce karta hai' },
        { _key: 'ri15', food: 'Packaged fruit juice (bina fiber)', reason: 'fiber nikal gayi — sirf sugar bacha — gut ko koi help nahi' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['2 glass gunguna paani + 1 tsp desi ghee (empty stomach)', 'Gunguna jeera-saunf ka paani (raat bhar bhigaye)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with vegetables (lauki/gajar/palak)', 'Moong dal chilla + hari chutney (bina coconut)'], nonVegOption: '2 boiled eggs + 1 jowar roti + kachi gajar' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 pakka papita (medium piece)', 'Seb (chhal ke saath kha lo — juice nahi)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal (chhilka) + palak sabzi', 'Brown rice + masoor dal + bhindi sabzi + salad'], nonVegOption: '1 roti + masoor dal + grilled fish/boiled chicken + kheera salad' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Bhuna chana (handful) + adrak chai (1 cup, kam doodh)', 'Isabgol 1 tsp in warm water (sirf agar needed)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['Khichdi (moong dal + rice + ghee) + kachi lauki raita', '2 roti + arhar dal + turai/lauki sabzi (light)'], nonVegOption: '1 roti + dal + boiled chicken soup (cream nahi)' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9-9:30 PM', slotEmoji: '😴', vegOptions: ['Warm doodh mein 1 tsp desi ghee + pinch haldi (agar acidity nahi)', 'Warm paani + saunf (1 tsp) — gut relax karta hai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Gunguna paani + ghee',
      vegNashta: 'Daliya + gajar-palak',
      vegDopahar: 'Jowar roti + masoor dal + bhindi',
      vegShaam: 'Bhuna chana + adrak chai',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled eggs + jowar roti + gajar',
      nonVegDopahar: '1 roti + masoor dal + grilled fish + kheera',
      nonVegRaat: '1 roti + dal + boiled chicken soup',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Jeera-saunf paani',
      vegNashta: 'Moong dal chilla + hari chutney',
      vegDopahar: 'Brown rice + arhar dal + lauki sabzi',
      vegShaam: 'Papita',
      vegRaat: '2 bajra roti + moong chhilka dal + salad',
      nonVegNashta: 'Moong dal chilla + 1 boiled egg',
      nonVegDopahar: 'Brown rice + masoor dal + boiled chicken',
      nonVegRaat: '2 roti + dal + sabzi (same)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Gunguna paani + 1 tsp isabgol',
      vegNashta: 'Oats daliya + seb ke tukde',
      vegDopahar: '2 roti + chana dal + palak sabzi',
      vegShaam: 'Seb (chhal ke saath)',
      vegRaat: 'Khichdi (light) + turai sabzi',
      nonVegNashta: 'Oats daliya + 1 boiled egg',
      nonVegDopahar: '2 roti + chana dal + grilled fish',
      nonVegRaat: 'Khichdi + chicken soup (clear)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Gunguna paani + ghee',
      vegNashta: 'Poha (zyada oil nahi) + gajar',
      vegDopahar: 'Jowar roti + rajma (well cooked) + kheera salad',
      vegShaam: 'Bhuna chana + saunf chai',
      vegRaat: '2 roti + masoor dal + bhindi sabzi',
      nonVegNashta: 'Poha + 1 boiled egg',
      nonVegDopahar: 'Jowar roti + rajma + boiled chicken (small)',
      nonVegRaat: '2 roti + masoor dal + sabzi (same)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab (3-4 din se kabz)',
      emoji: '😣',
      tips: [
        'Us din sirf liquid aur semi-liquid khao — khichdi, dal ka paani, lauki soup',
        'Hard foods avoid karo — roti, rajma, chana us din temporary rok do',
        'Har ghante 1 glass gunguna paani piyo — dehydration kabz ka #1 accelerator hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana low fiber hai lekin theek hai agar paani zyada lo',
        'Singhara aata (water chestnut) — sabudana se better fiber profile — prefer karo',
        'Vrat mein milk tea 3-4 cups avoid karo — tannins stool aur dry kar dete hain',
        'Agar vrat mein kabz zyada ho — isabgol ek glass paani ke saath lena safe hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal fry + roti order karo — fried rice ya naan avoid karo',
        'Kheera/salad hamesha order karo alongside — free fiber source hai',
        'Cold drinks bilkul nahi — paani ya jeera paani maango specifically',
        'Practical hack: khaane se pehle ek glass paani — pet mein jagah kam regi, overeating kam hogi',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, akhrot 4-5 pieces, seb ya guava, isabgol sachets',
        'Train/flight mein: chai ki jagah plain paani maango bar-bar — dehydration travel kabz ka main cause hai',
      ],
    },
  ],

  proTip: 'Subah toilet pe jaane se pehle 2 glass gunguna paani piyo aur 5 minute walk karo — ye gastrocolic reflex ko trigger karta hai. Zyada baar kaam aata hai kisi bhi medicine se pehle.',
  importantNote: 'Ye chart ek general guide hai. Chronic kabz — jo 3 hafte se zyada ho ya blood aaye — ke liye apne homoeopath se personalized plan banwayein.',
  homeopathyDiet: 'Sahi fiber aur water intake se intestinal environment better hota hai — aur homeopathic medicines jo gut tone pe kaam karti hain unka response clearer aur faster hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya kabz mein dahi khana chahiye?',
      answer: 'Haan — ghar ka fresh bana dahi (1 small katori) kabz mein helpful hai.\nDahi mein live lactobacillus bacteria hote hain jo gut microbiome improve karte hain aur motility help karte hain.\nLekin packaged/set dahi (market wala) avoid karo — usmein live bacteria usually nahi hote aur preservatives gut balance bigaad sakte hain.\nRaat ko dahi avoid karo — subah ya dopahar se pehle lo.',
    },
    {
      _key: 'faq2',
      question: 'Kya kabz mein kela khana theek hai?',
      answer: 'Pakka peela kela — allowed hai, helpful bhi hai.\nPakke kele mein pectin hoti hai jo stool soft karta hai aur gut motility improve karta hai.\nOverripe ya bahut zyada pakka kela zyada na khao — zyada sugar, less resistant starch.\nCompletely kacha (hara) kela avoid karo — usme resistant starch kabz badha sakti hai.\nEk kela subah ya mid-morning mein theek hai — 3-4 din mein fark dikhega.',
    },
    {
      _key: 'faq3',
      question: 'Kabz diet se kitne din mein theek hota hai?',
      answer: 'Mild kabz mein — high fiber + paani + ghee — 3-5 din mein clearly fark aata hai.\nChronic kabz (months purana) mein — 2-3 hafte consistent diet se gut habit rebuild hoti hai.\nDiet ka asar tab zyada hota hai jab morning walk ya thoda exercise bhi saath ho.\nBina exercise ke sirf diet se improvement slow hoti hai — dono saath chahiye.',
    },
    {
      _key: 'faq4',
      question: 'Kabz mein chai/coffee peena theek hai?',
      answer: '1 cup subah chai allowed hai — kuch logon mein gastrocolic reflex trigger hoti hai.\nLekin 3+ cups daily — tannins stool dry karte hain aur dehydration badhate hain — seedha kabz badh sakta hai.\nCoffee better hai chai se kabz ke liye agar acidity nahi — caffeine motility stimulate karta hai.\nDono mein zyada doodh mat dalo — doodh stool bind karta hai.',
    },
    {
      _key: 'faq5',
      question: 'Kabz mein vrat/fast kar sakte hain?',
      answer: 'Kar sakte hain — lekin dhyan rakhna zaroori hai.\nSabudana + singhara aata prefer karo — low fiber hai but theek hai agar paani khoob lo.\nVrat mein doodh-chai zyada mat piyo — kabz seedha badh sakti hai.\nIsabgol ek glass paani ke saath lena vrat mein bhi safe hai.\nAgar kabz bahut zyada ho — us din normal light khaana behtar hai vrat se.',
    },
    {
      _key: 'faq6',
      question: 'Raat ko khana late khaane se kabz hoti hai?',
      answer: 'Haan — ye bahut common Indian habit hai jo kabz ka major cause hai.\nRaat 9-10 baje heavy khaana khaane se digestion slow hoti hai — gut ka night mode naturally slower hota hai.\nStool large intestine mein zyada time tak rukta hai — paani zyada absorb hota hai — stool hard hoti hai.\nRaat ka khaana 7:30 baje tak khatam karo — aur sone se pehle gunguna paani lo.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific medicines ke saath strong smell avoid karne ki salah di jaati hai — coffee, camphor, raw onion.\nLekin har medicine ke saath alag restriction hoti hai — generalize nahi karna chahiye.\nKabz ki homeopathic medicines ke saath specifically apne doctor se poochho.\nDiet ka seedha restriction kam hota hai — medication timing se zyada fark padta hai.',
    },
    {
      _key: 'faq8',
      question: 'Kabz mein non-veg khana chahiye ya band karna padega?',
      answer: 'Poora band karne ki zaroorat nahi — lekin type aur quantity matter karti hai.\nBoiled/grilled chicken, fish (rohu, katla) — allowed hain agar fiber-rich sabzi ke saath khao.\nRed meat (mutton, beef) aur fried non-veg — ye gut transit time badhate hain — avoid karo.\nNon-veg ke saath hamesha 1-2 vegetables ya salad lo — fiber balance ke liye zaroori hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya aam/mango kabz mein kha sakte hain?',
      answer: 'Haan — pakka aam summer mein allowed hai aur helpful bhi ho sakta hai.\nAam mein sorbitol hota hai jo natural mild laxative effect karta hai.\nLekin 1-2 pieces limit rakho — zyada aam sugar zyada + gut fermentation disbalance.\nAam ke saath paani piyo — sirf aam khaake paani band mat karo.',
    },
    {
      _key: 'faq10',
      question: 'Kabz mein paani kitna peena chahiye?',
      answer: 'Minimum 8-10 glass paani daily — lekin timing matter karta hai utna hi jitna quantity.\nSubah 2 glass gunguna — ek saath — sabse effective timing hai bowel movement ke liye.\nKhaane ke saath paani bilkul nahi ya bahut kam — digestive juices dilute hote hain.\nKhaane ke 1 ghante baad paani piyo — stool mein paani properly absorb hota hai.\nAgar paani theek se nahi pite — fiber bhi kaam nahi karta — dono saath zaroori hain.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Di Rosa C et al — Constipation-Predominant IBS: Effects of Nutritional Patterns — Nutrients', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37049488' },
    { _key: 's2', name: 'Katsirma Z et al — Fruits and their impact on gut microbiota and constipation — Food & Function', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/34505614' },
    { _key: 's3', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Maida-based nashta (bread, biscuit) roz khaana aur paani kam peena — ye combination gut ko "jam" kar deta hai',
    mustEat: 'Daliya (broken wheat) — fiber, paani absorption, aur gut motility — teeno ek saath',
    mustAvoid: 'White bread / pav — roz ka nashta jo kabz ka silent major reason hai urban India mein',
  },

  doctorNote: 'Maine notice kiya hai ki jo kabz patients subah uthte hi 2 glass gunguna paani aur sirf 1 tsp ghee lete hain — unka bowel movement kisi bhi supplement se pehle normalize hona shuru hota hai — aur homeopathic treatment ka response bhi clearer hota hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Constipation (Kabz) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/constipation',
  shareTextMealPlan: 'Constipation ke liye 4-din ka Indian diet plan: homeopedia.in/diet/constipation',
  shareTextPage: 'Constipation Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/constipation',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding constipation diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Constipation diet chart seeded — homeopedia.in/diet/constipation')
}

seed().catch(console.error)
