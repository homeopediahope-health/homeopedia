import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-hypertension',
  _type: 'diet',
  title: 'Hypertension (High BP) Diet Chart',
  hindiName: 'Uccha Raktachaap / High BP',
  slug: { _type: 'slug', current: 'hypertension' },
  relatedDiseaseSlug: 'hypertension',
  category: 'Circulatory',
  metaTitle: 'Hypertension (High BP) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'High BP diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Hypertension mein namak aur processed foods blood vessel walls pe directly pressure badhate hain — aur sahi khaana us pressure ko naturally manage karne mein help karta hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Namak roz 4 gram se kam rakho', reason: 'sodium directly blood vessel walls stretch karta hai, BP spike hoti hai' },
    { _key: 'eh2', habit: 'Raat 7 baje ke baad heavy khaana avoid karo', reason: 'late dinner se sodium retention badhti hai, raat ko BP high rehta hai' },
    { _key: 'eh3', habit: 'Har 3-4 ghante mein kuch halka khao', reason: 'blood sugar stable rakhne se stress hormones kam hote hain jo BP badhate hain' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Jowar roti', reason: 'potassium rich, sodium kam — BP ke liye ideal grain' },
        { _key: 'i2', food: 'Brown rice (moderate)', reason: 'magnesium content blood vessels relax karta hai' },
        { _key: 'i3', food: 'Daliya', reason: 'soluble fiber arterial stiffness kam karta hai' },
        { _key: 'i4', food: 'Bajra roti', reason: 'magnesium se vasodilation support karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'potassium + magnesium dono — BP ka natural balancer' },
        { _key: 'i6', food: 'Lauki', reason: 'high water content, sodium-flushing — kidney pe load kam' },
        { _key: 'i7', food: 'Turai', reason: 'diuretic effect, excess fluid nikalta hai — pressure kam hoti hai' },
        { _key: 'i8', food: 'Karela', reason: 'ACE-inhibitor-like compounds hote hain jo BP regulate karte hain' },
        { _key: 'i9', food: 'Gajar', reason: 'beta-carotene se arterial inflammation kam hoti hai' },
        { _key: 'i10', food: 'Methi leaves', reason: 'flavonoids BP-lowering action karte hain' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Seb (apple)', reason: 'quercetin arterial wall rigidity kam karta hai' },
        { _key: 'i12', food: 'Papaya', reason: 'papain enzyme + potassium — heart ko double support' },
        { _key: 'i13', food: 'Amla (fresh ya dry)', reason: 'Vitamin C se arterial elasticity improve hoti hai' },
        { _key: 'i14', food: 'Nar (pomegranate)', reason: 'punicalagins se systolic BP clearly kam hoti hai' },
        { _key: 'i15', food: 'Mosami / Santra', reason: 'Vitamin C + flavonoids — vessel health ke liye' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chhilka wali)', reason: 'potassium + low sodium — BP-friendly protein' },
        { _key: 'i17', food: 'Masoor dal', reason: 'folate se homocysteine control hota hai jo BP badhata hai' },
        { _key: 'i18', food: 'Chana dal', reason: 'magnesium aur fiber dono — arterial stiffness reduce karta hai' },
        { _key: 'i19', food: 'Soyabean (limited — ghar ka tofu ya bhuna)', reason: 'isoflavones BP support karte hain' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i20', food: 'Hibiscus chai (gudhal phool)', reason: 'natural ACE-inhibitor effect proven hai' },
        { _key: 'i21', food: 'Adrak chai (without sugar)', reason: 'gingerol blood vessel dilation support karta hai' },
        { _key: 'i22', food: 'Haldi + kali mirch', reason: 'curcumin vascular inflammation kam karta hai — kali mirch ka piperine absorption 20x badhata hai — dono saath zaroor' },
        { _key: 'i23', food: 'Lahsun (kaccha ya slightly roasted)', reason: 'allicin blood pressure directly lower karta hai — sabse effective form' },
        { _key: 'i24', food: 'Sarson ka tel ya til ka tel (moderate)', reason: 'MUFA heart-safe fat hai' },
        { _key: 'i25', food: 'Jeera + dhania', reason: 'vasodilatory effect, gut inflammation bhi kam hoti hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla machli (steamed ya grilled)', reason: 'omega-3 se arterial flexibility badhti hai — BP support' },
    { _key: 'nva2', food: '2 ande (boiled)', reason: 'potassium + protein — cooking method matter karta hai, sirf boiled' },
    { _key: 'nva3', food: 'Surmai machli (grilled)', reason: 'EPA/DHA se systolic BP reduce hoti hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Mutton / red meat', reason: 'saturated fat se arterial stiffness badhti hai — BP spike hoti hai' },
    { _key: 'nvav2', food: 'Fried chicken', reason: 'trans fat + extra salt — double BP trigger' },
    { _key: 'nvav3', food: 'Packaged salami / sausage', reason: 'sodium content extreme hota hai — ek slice mein daily limit ka adha sodium' },
    { _key: 'nvav4', food: 'Prawns / shellfish', reason: 'cholesterol + sodium combination BP pe negative effect dalta hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Namkeen / chips / bhujia', reason: 'sodium ka sabse bada hidden source — ek packet mein din ki puri sodium limit' },
        { _key: 'ri2', food: 'Maida roti ya bread', reason: 'refined carbs se insulin spike hoti hai jo sodium retention badhata hai — BP upar jati hai' },
        { _key: 'ri3', food: 'Packaged biscuits', reason: 'trans fat + sodium — arterial inflammation badhata hai' },
        { _key: 'ri4', food: 'Instant noodles', reason: 'sodium preservatives se blood vessel walls damage hoti hain' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri5', food: 'Full-fat paneer (zyada matra mein)', reason: 'saturated fat arterial rigidity badhata hai' },
        { _key: 'ri6', food: 'Packaged cheese / processed cheese', reason: 'sodium + saturated fat dono milke BP pe direct impact karte hain' },
        { _key: 'ri7', food: 'Malai / cream', reason: 'high saturated fat, arterial plaque risk badhta hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri8', food: 'Achar / pickle', reason: 'sodium content bahut high — ek spoon mein din ki 30-40% sodium limit' },
        { _key: 'ri9', food: 'Papad', reason: 'namak se bana — ek papad mein 300-400mg sodium' },
        { _key: 'ri10', food: 'Mithais (khoya wali)', reason: 'refined sugar + fat — weight badhata hai jo BP ko seedha affect karta hai' },
        { _key: 'ri11', food: 'Bahar ka fried khaana (samosa, pakoda)', reason: 'trans fat + namak — double BP trigger' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri12', food: 'Alcohol', reason: 'directly blood vessel walls pe pressure badhata hai' },
        { _key: 'ri13', food: 'Cold drinks / soda', reason: 'fructose se sodium retention hoti hai — BP badhti hai' },
        { _key: 'ri14', food: 'Packaged fruit juice', reason: 'hidden sugar + preservatives — natural fruit ka fayda nahi milta' },
        { _key: 'ri15', food: 'Zyada chai ya coffee (3+ cups daily)', reason: 'caffeine se short-term BP spike aur long-term BP elevated rehti hai' },
        { _key: 'ri16', food: 'Energy drinks', reason: 'caffeine + sugar — BP ka double trigger' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + 1 lahsun ka juda (kaccha)', 'Hibiscus chai (gudhal phool) bina sugar'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya vegetables ke saath (namak minimum)', 'Moong dal chilla + pudina chutney (namak kam)'], nonVegOption: '2 ande boiled + 1 roti (namak bilkul nahi andon mein)' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya santra', 'Bhuna chana (unsalted) — mutthi bhar'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal + palak sabzi', 'Brown rice (half katori) + masoor dal + lauki sabzi'], nonVegOption: 'Grilled rohu + 1 roti + turai sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak wali tulsi chai (without sugar) + akhrot 4-5', 'Roasted makhana (unsalted) — mutthi bhar'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + arhar dal + karela ya methi sabzi', 'Moong dal khichdi + 1 tsp desi ghee + salad'], nonVegOption: 'Grilled surmai machli + 1 roti + sabzi' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (low-fat, no sugar)', 'Warm paani + saunf + 1 tsp amla powder'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Lukewarm paani + kaccha lahsun',
      vegNashta: 'Daliya + sabzi (namak minimum)',
      vegDopahar: '2 jowar roti + moong dal + palak sabzi',
      vegShaam: 'Hibiscus chai + akhrot',
      vegRaat: 'Moong dal khichdi + ghee + salad',
      nonVegNashta: '2 boiled ande + 1 roti (namak nahi)',
      nonVegDopahar: 'Grilled rohu + 1 jowar roti + palak sabzi',
      nonVegRaat: 'Moong dal khichdi + salad',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Hibiscus chai bina sugar',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Brown rice (half katori) + masoor dal + lauki sabzi',
      vegShaam: 'Adrak tulsi chai + bhuna chana (unsalted)',
      vegRaat: '2 roti + arhar dal + methi sabzi',
      nonVegNashta: 'Moong dal chilla + pudina chutney',
      nonVegDopahar: 'Grilled surmai + 1 roti + lauki sabzi',
      nonVegRaat: '2 roti + arhar dal + methi sabzi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Lukewarm paani + amla juice',
      vegNashta: 'Poha (namak minimum) + nimbu',
      vegDopahar: '2 bajra roti + chana dal + turai sabzi',
      vegShaam: 'Seb ya nar ke daane',
      vegRaat: 'Moong dal soup + 1 roti + salad',
      nonVegNashta: '2 boiled ande + poha (half-half)',
      nonVegDopahar: 'Steamed katla + 1 bajra roti + turai sabzi',
      nonVegRaat: 'Moong dal soup + 1 roti + salad',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Saunf + warm paani',
      vegNashta: 'Daliya + dahi (low-fat, ghar ka)',
      vegDopahar: '2 jowar roti + masoor dal + gajar-methi sabzi',
      vegShaam: 'Roasted makhana (unsalted) + tulsi chai',
      vegRaat: '2 roti + moong dal + karela sabzi',
      nonVegNashta: 'Daliya + dahi (low-fat, ghar ka)',
      nonVegDopahar: 'Grilled rohu + 1 roti + gajar sabzi',
      nonVegRaat: '2 roti + moong dal + karela sabzi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'BP Suddenly Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, daliya, ya moong dal soup — light aur namak bilkul minimum',
        'Pickle, papad, namkeen, achar — bilkul nahi us din',
        'Ek glass nar (pomegranate) juice bina namak ya sugar — punicalagins BP temporarily lower karne mein help karte hain',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi bina namak ya sirf sendha namak (rock salt) — regular namak strictly avoid',
        'Singhare ka atta roti ya kuttu ka atta roti — low sodium vrat alternatives hain',
        'Sendha namak bhi zyada mat lo — vrat mein namak restriction aur strict karni chahiye — BP wale patients ke liye zaroori hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka ya dal fry order karo — extra namak avoid karo, explicitly bolna padega',
        'Roti maida wali nahi — "missi roti ya tandoori roti without butter" clearly bolna',
        'Pickle, papad, chutney — completely avoid — ye sab BP ke liye hidden sodium bombs hain',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana (unsalted), akhrot, amla candy (sugar-free), dry roasted makhana — sab low-sodium snacks',
        'Train ya hotel mein: plain dal chawal order karo — "namak kam please" clearly bolna — extra salt packets ignore karo',
      ],
    },
  ],

  proTip: 'Subah sone se uthke kaccha lahsun ka ek juda paani ke saath lena — allicin sabse zyada active hota hai empty stomach pe aur breakfast se pehle absorb bhi zyada hota hai.',
  importantNote: 'Ye chart ek general guide hai — har patient ki condition, medications aur kidney function alag hoti hai. Apni homoeopathic treatment ke saath personalized diet plan ke liye apne doctor se zaroor milein.',
  homeopathyDiet: 'Jab aap sodium kam karte ho aur potassium-rich foods khate ho — blood vessel walls relax hoti hain aur homeopathic remedies better respond karti hain — healing clearly faster hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya High BP mein chawal khana band karna padega?',
      answer: 'Nahi — chawal bilkul band karne ki zaroorat nahi.\nBrown rice ya half katori white rice allowed hai — roz ki roti ke saath balance karo.\nChawal ka problem ye nahi ki wo BP badhata hai — problem tab hai jab chawal ke saath achar, papad ya heavy dal tadka zyada namak ke saath khao.\nPlain dal chawal with minimum salt — bilkul theek hai.\nQuantity moderate rakho — dopahar mein theek hai, raat ko roti prefer karo.',
    },
    {
      _key: 'faq2',
      question: 'Kya High BP mein dahi khana safe hai?',
      answer: 'Haan — ghar ka fresh bana low-fat dahi allowed hai.\nDahi mein potassium hota hai jo sodium counter karta hai — BP ke liye helpful bhi hai.\nLekin packaged ya set dahi (market wala) avoid karo — preservatives aur sodium zyada hote hain.\nNamak dahi mein mat milao — ye bahut common galti hai — us se fayda nahi milta.\nRaat ko dahi avoid karo — din mein 1 small katori sahi hai.',
    },
    {
      _key: 'faq3',
      question: 'High BP mein diet change se kitne din mein fark dikhta hai?',
      answer: 'Sodium kam karne ka effect 1-2 hafte mein blood pressure readings mein dikhna shuru hota hai.\nPura diet change — potassium-rich foods add karo, processed band karo — 4-6 hafte mein clearly measurable fark aata hai.\nYe results tab hain jab aap consistent rahein — ek-do din mein nahi dikhega.\nHomeopathic treatment ke saath diet sahi ho toh response aur faster hoti hai.\nApna BP ghar pe regularly check karo — weekly reading likhte raho.',
    },
    {
      _key: 'faq4',
      question: 'High BP mein chai ya coffee peena theek hai?',
      answer: '1 cup subah ki adrak chai ya tulsi chai — allowed hai.\nRegular black chai bhi 1 cup theek hai — zyada nahi.\nCoffee — roz 1 cup se zyada nahi, aur agar BP medications pe ho toh doctor se poochho.\n3 ya zyada cups daily — caffeine se blood vessels temporarily constrict hoti hain — BP spike aati hai.\nHibiscus chai (gudhal phool) — sabse better option hai BP patients ke liye — natural BP-lowering effect hota hai.\nEnergy drinks aur cold drinks — strictly avoid.',
    },
    {
      _key: 'faq5',
      question: 'High BP mein vrat kar sakte hain?',
      answer: 'Haan — lekin dhyan se karna padega.\nVrat mein regular namak avoid karo — sirf sendha namak (rock salt) use karo — aur wo bhi kam matra mein.\nSabudana, singhare ka atta, kuttu — BP-safe vrat options hain.\nBP medications leni hain toh khali pet mat raho — kuch khake medicine lo — apne doctor se confirm karo.\nZyada lamba fasting ya nirjala vrat — BP patients ke liye risky ho sakta hai — doctor se pehle poochh lo.',
    },
    {
      _key: 'faq6',
      question: 'High BP mein achar ya pickle roz thoda khana theek hai kya?',
      answer: 'Nahi — High BP mein achar strictly avoid karna chahiye.\nEk chammach achar mein 200-400mg sodium hota hai — aur aapki daily limit sirf 1500-2000mg hoti hai.\n"Thoda hi khata hun" — ye BP mein nahi chalega — sodium accumulate hota hai, asar clearly dikhta hai.\nAchar ki jagah: fresh nimbu ka ras ya pudina chutney (bina namak) use kar sakte hain — taste milega, sodium nahi.\nPickle, papad, namkeen — teeno ek hi category mein hain BP ke liye — avoid karo.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific restrictions hote hain jo aapke prescribed remedy pe depend karte hain — apne doctor se exactly poochho.\nGenerally — strong smells (raw onion, garlic) ek ghante pehle kuch medicines mein avoid karte hain — doctor confirm karega.\nCoffee aur strong mint — kuch constitutional remedies ke saath avoid kiya jata hai — har case alag hota hai.\nIs diet chart ki restrictions — ye medicines ke liye nahi hain — ye BP manage karne ke liye hain — dono alag cheezein hain.\nApne homoeopath se personally poochho — generic rule nahi dena sahi hoga.',
    },
    {
      _key: 'faq8',
      question: 'High BP mein non-veg khana chahiye ya band karna padega?',
      answer: 'Poora band karne ki zaroorat nahi — lekin type aur cooking method bahut matter karta hai.\nAllowed: Grilled ya steamed machli (rohu, katla, surmai) — omega-3 BP ke liye helpful hai. Boiled ande — okay hain.\nAvoid: Mutton, red meat, fried chicken, processed meat (sausage, salami) — inn mein sodium + saturated fat dono milke BP badhate hain.\nCooking mein namak minimum — yahi sabse badi rule hai.\nNon-veg roz nahi — hafte mein 2-3 baar — aur sirf grilled ya steamed.',
    },
    {
      _key: 'faq9',
      question: 'Kya High BP mein nimbu pani peena sahi hai?',
      answer: 'Haan — nimbu pani bina namak ke — bilkul safe aur beneficial hai.\nNimbu mein Vitamin C hota hai jo arterial walls ko healthy rakhta hai — BP patients ke liye helpful.\nLekin common galti: nimbu pani mein namak milao — ye BP ke liye nahi chalega.\nBina namak ya sugar — sirf paani + nimbu — ya thodi kali mirch — theek hai.\nSeedha nimbu roz khaane se bhi fayda hota hai — salad pe daalo bina namak ke.',
    },
    {
      _key: 'faq10',
      question: 'Raat ko late khaana khane se BP pe koi asar hota hai?',
      answer: 'Haan — direct connection hai.\nRaat 9-10 baje heavy khaana khane se body ek resting state mein digest karti hai — sodium retention badhti hai aur raat ke BP readings elevated rehte hain.\nHigh BP patients mein raat ka BP specially important hota hai — "non-dipping hypertension" iska naam hai aur late dinner iska ek known trigger hai.\nRaat 7 baje tak halka khaana kha lo — yahi sabse practical tip hai.\n2 roti + dal + sabzi — theek hai. Rice + heavy gravy + dessert — avoid karo raat mein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Carey RM, Moran AE, Whelton PK — Treatment of Hypertension: A Review — JAMA', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/36346411' },
    { _key: 's2', name: 'Filippini T et al — Potassium Intake and Blood Pressure: A Dose-Response Meta-Analysis of Randomized Controlled Trials — Journal of the American Heart Association', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32500831' },
    { _key: 's3', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Achar, papad aur namkeen ko "thoda thoda" khate rehna — hidden sodium ka sabse bada source yahi hain',
    mustEat: 'Kaccha lahsun (1 juda subah khaali pet) — allicin ka BP-lowering effect direct aur proven hai',
    mustAvoid: 'Achar / pickle — ek chammach mein din ki 20-30% sodium limit — High BP mein strictly nahi',
  },

  doctorNote: 'Maine notice kiya hai ki jo High BP patients achar, papad aur namkeen teeno ek saath chodh dete hain — unka BP reading clearly aur consistently better hota hai sirf medicines se treatment karne wale patients ke comparison mein — akele ek chodh ke utna fark nahi dikhta. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'High BP mein kya khayein, kya nahi — complete list: homeopedia.in/diet/hypertension',
  shareTextMealPlan: 'High BP ke liye 4-din ka Indian diet plan: homeopedia.in/diet/hypertension',
  shareTextPage: 'High BP Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/hypertension',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Hypertension diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Hypertension diet chart seeded — homeopedia.in/diet/hypertension')
}

seed().catch(console.error)
