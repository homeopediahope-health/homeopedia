import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-diabetes',
  _type: 'diet',
  title: 'Diabetes (Madhumeh) Diet Chart',
  hindiName: 'Madhumeh / Sugar ki Bimari',
  slug: { _type: 'slug', current: 'diabetes' },
  relatedDiseaseSlug: 'prediabetes',
  category: 'Endocrine',
  metaTitle: 'Diabetes (Madhumeh) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Diabetes aur prediabetes diet chart — green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Diabetes mein jo khaana aap khaate hain wo directly blood sugar (glucose) spike karta hai ya stable rakhta hai — aur insulin resistance ko badhata ya ghatata hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Khaana 3-4 ghante ke andar khaate raho — small frequent meals', reason: 'blood sugar ek hi baar mein zyada spike na ho — insulin pe load kam karte hain' },
    { _key: 'eh2', habit: 'Raat 7-7:30 baje ke baad heavy khaana bilkul band karo', reason: 'raat ko glucose clear karne ki body ki capacity significantly drop ho jaati hai' },
    { _key: 'eh3', habit: 'Subah pehle kuch khao PHIR chai piyo', reason: 'khaali pet chai se cortisol badhta hai jo blood sugar directly spike karta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'low glycemic index, slow glucose release — blood sugar spikes nahi hote' },
        { _key: 'i2', food: 'Jowar / Bajra roti', reason: 'complex carb — maida ya white rice se zyada slow digestion, sugar control better' },
        { _key: 'i3', food: 'Brown rice (thodi si matra)', reason: 'white rice se lower GI — agar rice zyada chahiye toh half brown + half normal mix karo' },
        { _key: 'i4', food: 'Oats (Indian style — namkeen, sabzi ke saath)', reason: 'beta-glucan fiber insulin sensitivity improve karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Karela (bitter gourd)', reason: 'charantin compound blood glucose directly kam karta hai — is disease ka sabse specific food' },
        { _key: 'i6', food: 'Methi ke patte / methi dana', reason: 'soluble fiber glucose absorption gut mein slow karta hai — diabetes ka classical Ayurvedic + research-backed food' },
        { _key: 'i7', food: 'Palak', reason: 'low carb, magnesium se bhari — magnesium insulin secretion mein direct role karta hai' },
        { _key: 'i8', food: 'Lauki', reason: 'low GI, gut ke liye light — blood sugar pe bilkul load nahi daalti' },
        { _key: 'i9', food: 'Turai / Torai', reason: 'low carb, paani zyada — gut slow rakhti hai jo glucose spike prevent karta hai' },
        { _key: 'i10', food: 'Bhindi (okra)', reason: 'mucilaginous fiber glucose absorption band karta hai — blood sugar stabilize karta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Jamun', reason: 'jamboline compound insulin-like effect dikhata hai — diabetes patients ke liye India-specific best fruit' },
        { _key: 'i12', food: 'Amla (awla)', reason: 'chromium content insulin sensitivity badhata hai — blood sugar regulation mein direct role' },
        { _key: 'i13', food: 'Papaya (theek se paka hua, kam matra)', reason: 'low GI, fiber zyada — moderate matra mein allowed' },
        { _key: 'i14', food: 'Nashpati (pear)', reason: 'slow sugar release, fiber — kela ya aam se clearly better option' },
        { _key: 'i15', food: 'Seb (apple, chhilke ke saath)', reason: 'chhilka pectin fiber glucose absorption slow karta hai — bina chhilke nahi' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chhilke wali)', reason: 'low GI, easily digest, protein blood sugar ke spike ke bina satiety deta hai' },
        { _key: 'i17', food: 'Chana (kala chana, boiled)', reason: 'resistant starch blood sugar control karta hai — best diabetic protein source India mein' },
        { _key: 'i18', food: 'Masoor dal', reason: 'fiber + protein combination glycemic response improve karta hai' },
        { _key: 'i19', food: 'Rajma (kam matra)', reason: 'low GI beans — blood sugar spike nahi karte agar roti ke saath sahi portion mein khayo' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i20', food: 'Methi dana paani (raat bheega, subah khaali pet)', reason: 'gallic acid + fiber glucose absorption pehle ghante mein slow karta hai' },
        { _key: 'i21', food: 'Haldi + kali mirch (saath mein)', reason: 'curcumin insulin resistance reduce karta hai — kali mirch ke piperine ke bina absorb nahi hota — dono saath zaroor' },
        { _key: 'i22', food: 'Jeera paani / jeera ka tadka', reason: 'thymoquinone insulin secretion stimulate karta hai' },
        { _key: 'i23', food: 'Sarson ka tel ya til ka tel (thoda sa)', reason: 'healthy fat — bad fats se clearly better insulin sensitivity ke liye' },
        { _key: 'i24', food: 'Dalchini (cinnamon)', reason: 'cinnamon extract insulin receptor sensitivity badhata hai — roz thodi si chai mein ya khane mein dalo' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: '2 ande (boiled / poached)', reason: 'protein glucose pe spike nahi deta — blood sugar stable karta hai, insulin demand nahi badhti' },
    { _key: 'nva2', food: 'Grilled / boiled chicken (skinless)', reason: 'lean protein — fat ya carb nahi — blood sugar pe neutral effect' },
    { _key: 'nva3', food: 'Fish — rohu, katla, surmai', reason: 'omega-3 insulin resistance reduce karta hai — diabetes ke liye fish best non-veg choice' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / pakoda / non-veg fry', reason: 'trans fat insulin receptor block karta hai — blood sugar control bigad jaata hai' },
    { _key: 'nvav2', food: 'Mutton / red meat zyada', reason: 'saturated fat insulin resistance seedha badhata hai — occasional bhi risky hai diabetes mein' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami)', reason: 'high sodium + preservatives — inflammation badhti hai jo insulin resistance ka main driver hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour) — roti, bread, paratha', reason: 'directly refined glucose mein convert hota hai — worst food diabetes mein' },
        { _key: 'ri2', food: 'White bread / bakery items', reason: 'ultra-fast glucose spike — blood sugar ek baar mein bahut upar jaata hai' },
        { _key: 'ri3', food: 'Biscuits, namkeen, chips', reason: 'refined starch + hidden sugar — blood sugar silently badhte rehte hain' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full fat packaged doodh (zyada matra)', reason: 'saturated fat insulin sensitivity ghatata hai — low fat ya thin doodh behtar' },
        { _key: 'ri5', food: 'Packaged dahi (sweet / flavored)', reason: 'added sugar hota hai jo glucose spike karta hai — sirf plain ghar ka dahi allowed hai' },
        { _key: 'ri6', food: 'Paneer (zyada matra mein)', reason: 'fat zyada — blood sugar pe indirect effect — small portion theek hai, full sabzi nahi' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Cheeni (white sugar)', reason: 'directly blood glucose spike — avoid completely' },
        { _key: 'ri8', food: 'Gur / honey (zyada matra)', reason: 'natural hai lekin fructose + glucose — blood sugar utna hi badhate hain jitna cheeni — bahut thoda aur rarely' },
        { _key: 'ri9', food: 'Mithai, halwa, kheer', reason: 'cheeni + maida + ghee combination — worst possible combination diabetes mein' },
        { _key: 'ri10', food: 'Fried food — puri, bhatura, samosa', reason: 'fat + refined carb ek saath — post-meal sugar spike bahut zyada hoti hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri11', food: 'Cold drinks / soda', reason: '8-10 tsp cheeni ek glass mein — blood glucose seedha ek dum upar jaati hai' },
        { _key: 'ri12', food: 'Packaged fruit juice', reason: 'fiber remove ho jaata hai — sirf sugar bachta hai — solid fruit khao, juice nahi' },
        { _key: 'ri13', food: 'Zyada chai / coffee (3+ cups)', reason: 'caffeine + cheeni cortisol spike karta hai jo blood glucose badhata hai — 1 cup allowed, zyada nahi' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Raat bheegi methi dana ek glass paani ke saath', 'Lukewarm paani + adha nimbu (khaali pet)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with sabziyan (palak / lauki) — no cheeni', 'Moong dal chilla (2 pcs) + pudina chutney'], nonVegOption: '2 boiled ande + 1 bajra roti + khira slice' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 chhota seb (chhilke ke saath)', 'Bhuna chana (1 mutthi) — no salt added'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal + karela/bhindi sabzi + kaccha pyaz salad', 'Brown rice (thoda) + chana dal + palak sabzi + salad'], nonVegOption: '1 grilled chicken piece + 2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak-tulsi chai (bina cheeni) + 4-5 badam (bhigoye hue)', 'Roasted makhana (1 mutthi) — no butter'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-7:30 PM', slotEmoji: '🌙', vegOptions: ['1-2 roti (jowar ya bajra) + lauki/turai sabzi + masoor dal', 'Moong dal khichdi (patli, bina ghee ke zyada) + kaccha salad'], nonVegOption: 'Light rohu/surmai curry (no cream, no maida) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Haldi + dalchini wala garm doodh (bina cheeni, thoda sa doodh)', 'Warm paani — bas — dinner kaafi hona chahiye'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Methi paani',
      vegNashta: 'Daliya + palak sabzi',
      vegDopahar: 'Bajra roti + moong dal + karela sabzi',
      vegShaam: 'Bhuna chana',
      vegRaat: 'Khichdi + turai sabzi',
      nonVegNashta: '2 boiled ande + 1 bajra roti + khira',
      nonVegDopahar: 'Grilled chicken + jowar roti + bhindi sabzi',
      nonVegRaat: 'Rohu fish curry (light) + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Lukewarm nimbu paani',
      vegNashta: 'Moong dal chilla + chutney',
      vegDopahar: 'Jowar roti + chana dal + bhindi sabzi',
      vegShaam: 'Seb + 4 bhigoye badam',
      vegRaat: 'Masoor dal + lauki sabzi + 1 roti',
      nonVegNashta: 'Daliya + sabzi',
      nonVegDopahar: 'Surmai fish (grilled) + brown rice (thoda) + palak',
      nonVegRaat: 'Chicken soup (no cream, no maida) + 1 roti',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Methi paani',
      vegNashta: 'Oats namkeen (sabzi ke saath)',
      vegDopahar: 'Brown rice (thoda) + arhar dal + palak sabzi',
      vegShaam: 'Makhana roasted',
      vegRaat: '2 bajra roti + moong dal + karela sabzi',
      nonVegNashta: '2 ande (poached) + 1 roti + pyaz',
      nonVegDopahar: 'Grilled chicken + chana dal + turai sabzi',
      nonVegRaat: 'Rohu curry (light) + bajra roti + salad',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Adrak paani',
      vegNashta: 'Besan chilla + pudina chutney',
      vegDopahar: 'Jowar roti + masoor dal + turai sabzi',
      vegShaam: 'Jamun (agar season ho) ya bhuna chana',
      vegRaat: 'Khichdi (moong) + lauki sabzi',
      nonVegNashta: 'Besan chilla + pudina chutney',
      nonVegDopahar: 'Chicken stew (no cream) + jowar roti + sabzi',
      nonVegRaat: 'Masoor dal + lauki sabzi + 1 roti',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Blood Sugar Zyada Ho Gaya Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf light khao — daliya, moong dal soup, sabzi — koi bhi refined carb bilkul nahi',
        'Fruits bhi us din skip karo — fructose bhi load badhata hai',
        'Khaane ke baad 10-15 minute walk karo — blood sugar naturally use hota hai muscles mein — medicine se alag mechanism hai ye',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (bina zyada aloo) — thodi matra mein allowed — zyada sabudana ek baar mein mat khao, glucose spike badhta hai',
        'Kuttu ki roti ya singhare ka atta — white rice ya sabudana se clearly better GI hai vrat mein',
        'Vrat mein avoid karein: Fried aloo, sabudana vada, cheeni wala doodh — ye sab blood sugar zyada badhate hain',
        'Prolonged fasting diabetes patients mein hypoglycemia ka risk hota hai — pehle apne doctor se discuss karein',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: Dal + roti (ask for less oil) + dry sabzi — gravy mein usually maida ya cornflour hoti hai',
        'Avoid karo: Naan, kulcha, puri, white rice, koi bhi meetha — aur "diet" label wale juices bhi — sugar hoti hai unme',
        'Practical hack: Pehle salad ya soup kha lo — phir main course — isse portion automatically kam ho jaata hai aur glucose spike dheere hoti hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: Bhuna chana, whole almonds, dry amla candy (no sugar added), jowar roti (dry bana ke) — ye sab 24 ghante safe rehte hain',
        'Hotel/train mein: Dal + chawal (half portion) ya plain idli + sambar — koi bhi fried option skip karo',
      ],
    },
  ],

  proTip: 'Khaana khaane ka order matter karta hai — pehle sabzi/salad khao, phir dal, last mein roti ya rice. Same khaana isi sequence mein khane se blood sugar ka peak significantly kam hota hai — ye clinic mein sabse pehle batata hoon patients ko.',
  importantNote: 'Ye chart ek general guide hai — har diabetes patient ki condition, HbA1c level aur medication alag hoti hai. Apni specific situation ke hisaab se apne homoeopath ya doctor se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Jab aap sahi khaate hain — insulin resistance reduce hoti hai aur body medicine ko better absorb kar paati hai — jo homeopathic treatment ka response clearly improve karta hai. Diet aur treatment ek saath chalne se healing faster hoti hai — akele koi ek nahi.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya diabetes mein chawal (rice) bilkul band karna padega?',
      answer: 'Nahi — chawal completely band karna zaroori nahi, lekin portion aur type zaroor change karna padega.\nWhite rice ka GI bahut high hota hai — isliye large portion ek baar mein blood sugar spike karta hai. Brown rice ya half portion white rice allowed hai — sabzi aur dal ke saath.\nRule ye hai: chawal akela mat khao — saath mein dal aur sabzi jaroor rakho jo glucose absorption slow karti hai.\nApne doctor se apne HbA1c ke hisaab se quantity decide karein.',
    },
    {
      _key: 'faq2',
      question: 'Kya diabetes mein aloo khana band karna chahiye?',
      answer: 'Aloo avoid karna better hai — especially boiled ya mashed form mein.\nAloo ka starch bahut quickly glucose mein convert hota hai — GI 70+ hota hai. Agar bahut mann kare toh cold/chilled aloo better hai kyunki cooling se resistant starch badhta hai jo gut mein slow digest hota hai.\nLekin regular basis pe aloo ki sabzi avoid hi karo — lauki/turai se replace karo jo blood sugar pe safe hain.',
    },
    {
      _key: 'faq3',
      question: 'Diet change se diabetes mein kitne din mein fark dikhega?',
      answer: 'Fasting blood sugar mein fark usually 2-3 hafte mein dikh sakta hai — agar diet consistent ho.\nHbA1c jo 3 mahine ka average hota hai — wo 2-3 mahine mein improve dikhega.\nPrediabetes mein diet change ka response faster hota hai — diabetes mein time aur consistency dono chahiye.\nDiet akeli medicine replace nahi karti — dono saath chalne chahiye.',
    },
    {
      _key: 'faq4',
      question: 'Diabetes mein chai peena theek hai kya?',
      answer: 'Haan — 1-2 cup plain chai (bina cheeni ya minimum cheeni ke saath) allowed hai.\nProblem tab hoti hai jab: zyada cheeni (2-3 tsp per cup), 3+ cups daily, ya khaali pet chai peena — ye teeno blood sugar badhate hain.\nAgar chai mein cheeni bilkul band nahi hoti — stevia use karo ya thoda gur (sirf half tsp, zyada nahi).\nAdrak + dalchini wali chai diabetes ke liye extra beneficial hai.',
    },
    {
      _key: 'faq5',
      question: 'Diabetes mein vrat (fast) kar sakte hain?',
      answer: 'Kar sakte hain — lekin precaution ke saath aur doctor ki salah leke.\nProlonged fasting (nirjala vrat) diabetes patients mein hypoglycemia (blood sugar bahut gir jaana) ka risk hota hai — especially jo insulin ya certain oral medicines le rahe hain.\nSafe options: Kuttu ki roti, sabudana (thodi matra), makhana, fruit (kam sweet).\nVrat se pehle doctor se discuss karo — medicine timing adjust karni pad sakti hai.',
    },
    {
      _key: 'faq6',
      question: 'Raat ko late khaana diabetes mein kitna nuksan karta hai?',
      answer: 'Raat ko late khaana diabetes mein specifically harmful hai — sirf "unhealthy habit" se alag.\nRaat 8-9 baje ke baad body ka circadian rhythm shift hota hai — insulin sensitivity dramatically drop ho jaati hai.\nMatalab wahi khaana jo din mein normal blood sugar response deta hai — raat ko zyada spike deta hai.\nRaat 7-7:30 baje tak dinner finish karo — ye ek change akele HbA1c improve kar sakta hai consistent rahne pe.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath khaane ki koi restriction hai?',
      answer: 'Homoeopathic medicines ke saath koi strict food restriction nahi hoti — diabetes diet ki restrictions blood sugar control ke liye hain, medicine ke liye nahi.\nKuch homoeopaths strong smell wali cheezein (camphor, raw garlic, raw onion) medicines se 30 minute pehle/baad avoid karne ko kehte hain — lekin ye individual medicines pe depend karta hai.\nApne specific doctor se poochhein — generalize nahi kar sakte.',
    },
    {
      _key: 'faq8',
      question: 'Diabetes mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karna zaroori nahi — type aur cooking method matter karta hai.\nBoiled/grilled chicken, fish (rohu, surmai) — allowed hain kyunki ye pure protein hain aur blood sugar pe spike nahi dete.\nEggs (boiled) — diabetes ke liye good option hain.\nKya avoid karein: fried non-veg, processed meat, red meat (mutton, beef) — ye insulin resistance badhate hain.\nVegetarian diet generally diabetes control ke liye better considered hai — lekin selective non-veg bhi okay hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya diabetes mein dahi khana allowed hai?',
      answer: 'Haan — ghar ka plain dahi (bina cheeni, unsweetened) allowed hai aur beneficial bhi hai.\nDahi ka probiotic blood sugar control mein help karta hai aur protein se satiety milti hai bina glucose spike ke.\nAvoid karo: Packaged flavored dahi (mango, strawberry) — inme added sugar hoti hai jo blood sugar spike karta hai.\n1 small katori plain ghar ka dahi lunch mein — theek hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya diabetes mein aam (mango) ya kela khana chahiye?',
      answer: 'Avoid karna better hai — dono ka glycemic index high hota hai diabetes patients mein.\nAam mein high natural sugar (fructose + glucose) — blood sugar spike clearly hoti hai.\nKela — especially pakka hua — rapidly absorbing sugar se bhari hoti hai.\nAgar bahut mann kare — green (kacha) kela occasional mein allowed hai resistant starch ke liye — aur aam sirf ek chhota slice occasionally.\nBetter alternatives: jamun, papaya (thoda), seb, nashpati.',
    },
    {
      _key: 'faq11',
      question: 'Kya gur ya honey diabetes mein safe hai cheeni ki jagah?',
      answer: 'Nahi — gur aur honey "natural" hain lekin blood sugar utna hi badhate hain jitna white sugar — nearly same glycemic response.\nCommon misconception hai ki gur safe hai diabetes mein — ye sahi nahi hai.\nAgar sweetener chahiye — stevia (plant-based) ya small amounts of gur (half tsp max) — lekin regular use nahi.\nMithai, halwa, kheer — gur se bana ho ya cheeni se — dono diabetes mein avoid karo.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Mohan V, Misra A et al — Role of Dietary Protein in Management of Type 2 Diabetes in India — JAPI', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/38736053' },
    { _key: 's2', name: 'Gulati S, Misra A et al — Beneficial effects of premeal almond load on glucose profile in Asian Indians with prediabetes — Eur J Clin Nutr', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/36732571' },
    { _key: 's3', name: 'Kim J, Noh W et al — Effect of Fenugreek in Type 2 Diabetes and Prediabetes: Systematic Review and Meta-Analysis — Int J Mol Sci', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37762302' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Juice peena — "healthy" samajh ke — aam/orange/mosambi ka packaged juice. Fiber remove, sirf sugar bachi — blood sugar ek dum spike hoti hai.',
    mustEat: 'Methi dana bheega paani subah khaali pet — research-backed, har Indian kitchen mein available, blood sugar pe clear effect.',
    mustAvoid: 'White bread / bakery bread — maida + yeast combination — worst possible fast glucose spike — roti se bhi zyada harmful hai.',
  },

  doctorNote: 'Mere diabetes patients mein jo log din ka pehla kaam ye karte hain — pehle kuch khao, PHIR chai piyo (khaali pet chai band) — unka fasting blood sugar clearly better aata hai follow-up mein — sirf ye ek change bina medicine change ke. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Diabetes mein kya khayein, kya nahi — complete list: homeopedia.in/diet/diabetes',
  shareTextMealPlan: 'Diabetes ke liye 4-din ka Indian diet plan: homeopedia.in/diet/diabetes',
  shareTextPage: 'Diabetes Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/diabetes',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding diabetes diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Diabetes diet chart seeded — homeopedia.in/diet/diabetes')
}

seed().catch(console.error)
