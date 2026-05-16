import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-adhd',
  _type: 'diet',
  title: 'ADHD (Dhyan Ki Kami) Diet Chart',
  hindiName: 'Dhyan ki Kami aur Atiriktata (ADHD)',
  slug: { _type: 'slug', current: 'adhd' },
  relatedDiseaseSlug: 'adhd',
  category: 'Mental',
  metaTitle: 'ADHD Diet Chart Hindi — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'ADHD diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'ADHD mein brain ke dopamine aur norepinephrine signals directly food se influence hote hain — jo khaate hain wo focus aur hyperactivity ko better ya worse karta hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel/flare-up jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah ka nashta kabhi skip mat karo', reason: 'ADHD brain khaali pet pe dopamine bhejta kam karta hai, focus aur bhi gir jaata hai' },
    { _key: 'eh2', habit: 'Har 3-4 ghante mein kuch khao', reason: 'blood sugar stable rakhna zaroori hai — ADHD mein blood sugar gire toh irritability aur hyperactivity zyada hoti hai' },
    { _key: 'eh3', habit: 'Raat 8 baje ke baad heavy khaana avoid karo', reason: 'neend seedha ADHD symptoms ko affect karti hai, aur heavy dinner neend quality kharab karta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Jowar / Bajra roti', reason: 'slow digestion karta hai, blood sugar spike nahi hoti — ADHD mein stable glucose zaroori hai' },
        { _key: 'i2', food: 'Daliya (oats)', reason: 'complex carb hai — brain ko steady energy milti hai, sudden crash nahi hota' },
        { _key: 'i3', food: 'Brown rice', reason: 'white rice se zyada fibre — glucose control better hota hai jo ADHD focus ke liye important hai' },
        { _key: 'i4', food: 'Besan chilla', reason: 'protein + complex carb combo — brain ke neurotransmitter production ke liye building blocks deta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'iron + magnesium ka source — ADHD mein dono ki kami symptoms worsen karti hai' },
        { _key: 'i6', food: 'Lauki', reason: 'gut ki sujan kam karta hai — ADHD mein gut-brain axis connection established hai' },
        { _key: 'i7', food: 'Gajar', reason: 'beta-carotene se antioxidant protection milti hai — ADHD brain mein oxidative stress high hota hai' },
        { _key: 'i8', food: 'Methi (seeds/patta)', reason: 'blood sugar regulate karta hai — ADHD symptoms sugar fluctuation se directly worsen hote hain' },
        { _key: 'i9', food: 'Kheera', reason: 'hydration + magnesium — brain nerve signaling ke liye magnesium zaroori hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Seb (apple)', reason: 'quercetin antioxidant ADHD brain ki oxidative damage se protection deta hai' },
        { _key: 'i11', food: 'Papaya', reason: 'digestive enzyme papain gut health improve karta hai — gut-brain axis ADHD mein key role khelti hai' },
        { _key: 'i12', food: 'Amla (fresh ya dry)', reason: 'Vitamin C se dopamine synthesis mein help milti hai — ADHD ka core issue low dopamine hai' },
        { _key: 'i13', food: 'Nar (pomegranate)', reason: 'polyphenols brain inflammation kam karte hain jo ADHD severity se linked hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal (chilke wali)', reason: 'easily digest hoti hai + protein deti hai — brain ke neurotransmitter ke liye amino acids zaroori' },
        { _key: 'i15', food: 'Chana (bhuna hua)', reason: 'slow-release protein + carb — dopamine precursor tyrosine provide karta hai' },
        { _key: 'i16', food: 'Rajma', reason: 'magnesium + B6 ka combination — dono milke serotonin aur dopamine production mein help karte hain' },
        { _key: 'i17', food: 'Curd / Dahi (ghar ka fresh bana)', reason: 'gut microbiome balance karta hai — ADHD aur gut health ka direct link research mein hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i18', food: 'Haldi + kali mirch wala doodh (warm)', reason: 'curcumin brain inflammation kam karta hai, kali mirch ka piperine curcumin absorption 20x badhata hai — akeli haldi nahi' },
        { _key: 'i19', food: 'Adrak ki chai (bina refined sugar)', reason: 'anti-inflammatory aur dopamine activity improve karne ke liye known hai' },
        { _key: 'i20', food: 'Sarson ka tel / Til ka tel', reason: 'omega-3 aur omega-6 ka balance — ADHD brain ke nerve membrane function ke liye' },
        { _key: 'i21', food: 'Jeera + dhania ka paani', reason: 'gut inflammation kam karta hai jo ADHD ke gut-brain axis ko support karta hai' },
        { _key: 'i22', food: 'Akhrot (4-5 roz)', reason: 'ALA omega-3 ka achha Indian source — brain ke DHA levels ke liye support karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Anda (boiled — 2 roz)', reason: 'choline ADHD brain mein acetylcholine signaling ke liye direct zaroori hai, yolk skip mat karo' },
    { _key: 'nva2', food: 'Rohu / Katla machli (grilled ya steam)', reason: 'omega-3 DHA ADHD mein brain ke myelin aur neurotransmission ke liye sabse important fatty acid hai' },
    { _key: 'nva3', food: 'Chicken (boiled ya grilled — skinless)', reason: 'tyrosine amino acid deta hai jo dopamine ka direct building block hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Processed meat (sausage, salami, packaged chicken nuggets)', reason: 'preservatives aur artificial colors ADHD symptoms directly worsen karte hain' },
    { _key: 'nvav2', food: 'Fried chicken / egg bhurji zyada tel mein', reason: 'trans fat brain dopamine signaling ko disrupt karta hai' },
    { _key: 'nvav3', food: 'Red meat (mutton / beef)', reason: 'arachidonic acid se inflammation badhti hai jo ADHD brain function pe negative impact karta hai' },
    { _key: 'nvav4', food: 'Canned / tinned fish', reason: 'sodium + preservatives — gut inflammation badhate hain, gut-brain axis disrupt hoti hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour roti, naan, bread)', reason: 'blood sugar rapidly spike karta hai phir crash — ADHD focus us crash mein aur zyada khatam ho jaata hai' },
        { _key: 'ri2', food: 'Packaged biscuits (Parle-G, Marie etc.)', reason: 'refined carb + artificial flavoring — dopamine regulation disrupt karta hai' },
        { _key: 'ri3', food: 'Instant noodles / Maggi', reason: 'MSG + artificial flavor — kuch children mein ADHD symptom flare documented hai' },
        { _key: 'ri4', food: 'Ready-to-eat packaged snacks', reason: 'trans fat + preservatives — ADHD brain ke oxidative stress ko badhate hain' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri5', food: 'Packaged / set dahi (market wala)', reason: 'additives + preservatives hai jo gut microbiome disturb karte hain — ADHD gut-brain link ke liye harmful hai' },
        { _key: 'ri6', food: 'Full fat cream / malai zyada', reason: 'heavy saturated fat brain ke dopamine transport function slow karta hai' },
        { _key: 'ri7', food: 'Processed cheese (Amul cheese slices etc.)', reason: 'sodium + artificial additives — gut inflammation se ADHD worsen hota hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri8', food: 'Refined sugar (meetha — mithai, candy, cold drink)', reason: 'blood sugar spike-crash cycle ADHD hyperactivity aur mood swings directly trigger karta hai' },
        { _key: 'ri9', food: 'Artificial sweeteners (sugar-free candy, diet drinks)', reason: 'aspartame ADHD symptoms worsen karne ke liye studied hai' },
        { _key: 'ri10', food: 'Bahut zyada mirch wala khaana', reason: 'gut irritation se gut-brain axis disturb hoti hai — ADHD mein already sensitive gut hoti hai' },
        { _key: 'ri11', food: 'Deep fried khaana (samosa, pakoda daily)', reason: 'trans fat brain ki anti-inflammatory capacity reduce karta hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri12', food: 'Cold drinks / soda (cola, Sprite, Limca)', reason: 'caffeine + refined sugar + artificial color — ADHD symptoms ka classic triple trigger hai' },
        { _key: 'ri13', food: 'Packaged fruit juice (even "real" ones)', reason: 'concentrated fructose bina fibre ke — blood sugar crash ADHD mein directly focus khatam karta hai' },
        { _key: 'ri14', food: 'Energy drinks', reason: 'high caffeine + sugar + taurine — ADHD children / adults ke liye especially harmful hai' },
        { _key: 'ri15', food: 'Excessive chai (3+ cups daily)', reason: 'caffeine zyada neend kharab karta hai jo ADHD ko aur worsen karta hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + nimbu (khaali pet — gut activate karta hai)', 'Bheega akhrot 4-5 + ek glass paani (omega-3 se din shuru)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with palak + jeera tadka', 'Besan chilla 2 + pudina chutney'], nonVegOption: '2 ande boiled + 1 roti jowar/bajra' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya 1 nar (pura fruit — juice nahi)', 'Bhuna chana ek mutthi'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar roti + moong dal + palak sabzi + ghar ka dahi (1 small katori)', 'Brown rice + rajma + kheera-gajar salad'], nonVegOption: 'Grilled rohu / katla + 2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak wali herbal chai (no refined sugar) + akhrot 4', 'Amla ka murabba (ghar ka, bina refined sugar) + roasted makhana'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + lauki ki sabzi + masoor dal', 'Khichdi (moong dal + brown rice) + ghee 1 tsp + salad'], nonVegOption: 'Chicken soup (boiled, no cream) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi + kali mirch doodh (non-sweetened ya jaggery thoda)', 'Warm paani + saunf (neend improve karta hai — ADHD mein neend critical hai)'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Akhrot 4 + paani',
      vegNashta: 'Besan chilla 2 + pudina chutney',
      vegDopahar: 'Jowar roti 2 + moong dal + palak sabzi + dahi',
      vegShaam: 'Herbal chai + bhuna chana',
      vegRaat: 'Khichdi + ghee + kheera salad',
      nonVegNashta: '2 ande boiled + bajra roti 1',
      nonVegDopahar: 'Grilled rohu + jowar roti 2 + palak sabzi',
      nonVegRaat: 'Chicken soup (boiled) + 1 jowar roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Nimbu paani (warm)',
      vegNashta: 'Daliya with gajar + jeera tadka',
      vegDopahar: 'Brown rice + rajma + methi sabzi + salad',
      vegShaam: 'Amla + roasted makhana',
      vegRaat: 'Jowar roti 2 + masoor dal + lauki sabzi',
      nonVegNashta: 'Daliya with gajar + jeera tadka (same)',
      nonVegDopahar: 'Brown rice + grilled katla + methi sabzi + salad',
      nonVegRaat: 'Jowar roti 2 + masoor dal + lauki sabzi (same)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Bheega akhrot 4 + paani',
      vegNashta: 'Moong dal chilla + ghar ka dahi',
      vegDopahar: 'Jowar roti 2 + chana dal + gajar-methi sabzi',
      vegShaam: 'Adrak chai + 4 akhrot',
      vegRaat: 'Khichdi (moong + brown rice) + ghee + nar',
      nonVegNashta: '2 ande boiled + besan chilla 1',
      nonVegDopahar: 'Grilled chicken (skinless) + jowar roti 2 + gajar sabzi',
      nonVegRaat: 'Khichdi (moong + brown rice) + ghee (same)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Jeera + dhania ka paani (warm)',
      vegNashta: 'Poha with palak + mungfali',
      vegDopahar: 'Brown rice + rajma + kheera salad + dahi',
      vegShaam: 'Herbal chai + bhuna chana',
      vegRaat: 'Bajra roti 2 + lauki ki sabzi + arhar dal',
      nonVegNashta: 'Poha with palak + mungfali (same)',
      nonVegDopahar: 'Rohu fish curry (light — no heavy masala) + brown rice',
      nonVegRaat: 'Bajra roti 2 + chicken soup (boiled, no cream)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Hyperactivity ya Focus Bahut Kharab Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf daliya / khichdi / moong dal soup — easy digestion aur stable blood sugar pe focus rakho',
        'Refined sugar, packaged snacks, cold drinks — even "thoda sa" bhi avoid — ADHD flare mein ye seedha trigger ban jaate hain',
        'Screen time ke saath kuch bhi nahi khaana — eating aur screen saath mein blood sugar monitoring aur gut signals dono disturb karta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (tel kam) ya kuttu ki roti — ADHD mein blood sugar crash dangerous hai — empty stomach avoid karo',
        'Akhrot, mungfali, doodh (plain) — protein rakhna zaroori hai vrat mein taaki brain ko steady fuel mile',
        'Upvaas mein fruits sirf fresh khaana — packaged fruit juices se blood sugar crash hoga — avoid karo',
        'Warning: ADHD mein bahut lamba nirjala vrat (water-less fast) avoid karo — brain dehydration aur glucose crash dono ADHD symptoms severely badha dete hain',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: Dal tadka + roti (maida naan nahi) + koi bhi sabzi dry ya semi-dry',
        'Avoid karo: Fried rice, maida-based bread, cold drinks, packaged desserts — ye sab blood sugar spike-crash dete hain',
        'Practical hack: Khaana khane se pehle ek glass plain paani peeyo — blood sugar spike slow hota hai aur overeating bhi avoid hoti hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: Bhuna chana, akhrot, dry amla — stable blood sugar ke liye — ADHD mein hunger = irritability + focus loss zyada quickly hota hai',
        'Train / hotel mein order karo: Dal chawal ya khichdi — masala nahi — sabse safe Indian travel option hai',
      ],
    },
  ],

  proTip: 'ADHD mein subah ka nashta sirf khaana nahi — timing bhi matter karta hai. Uthne ke 30 minute ke andar kuch khao — brain ke dopamine signals subah mein sabse zyada responsive hote hain — late nashta us window band kar deta hai.',
  importantNote: 'Ye chart ek general guide hai — ADHD ek complex neurodevelopmental condition hai jisme har bachche aur adult ka response alag hota hai. Apni ya apne bachche ki condition ke hisaab se apne homoeopath ya specialist se personalized plan banwayein.',
  homeopathyDiet: 'Jab ADHD mein diet se blood sugar stable hoti hai aur gut-brain inflammation kam hoti hai — homeopathic medicines ka brain pe response clearly better hota hai. Diet aur treatment ek doosre ke saath kaam karte hain — akele nahi.',

  faqs: [
    {
      _key: 'faq1',
      question: 'ADHD mein dahi khana chahiye ya nahi?',
      answer: 'Haan — lekin sirf ghar ka fresh bana dahi.\nGhar ka fresh dahi gut microbiome ke liye helpful hai — ADHD aur gut-brain axis ka direct link research mein established hai.\nPackaged / market ka set dahi avoid karo — usme additives hain jo gut disturb karte hain.\nRoz 1 small katori ghar ka dahi — lunch ke saath — safe hai.\nApne doctor se poochho agar dairy sensitivity hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya ADHD mein chawal khana band karna padega?',
      answer: 'Nahi — white rice bilkul band karne ki zaroorat nahi.\nWhite rice ka glycemic index high hai — blood sugar spike hoti hai phir crash — jo ADHD focus kharab karta hai.\nSolution simple hai: White rice ki jagah brown rice lo — ya white rice dal + sabzi ke saath khao taaki digestion slow ho aur spike na aaye.\nRoz plain white rice sirf akela khana avoid karo — saath mein dal ya protein rakhna zaroori hai.',
    },
    {
      _key: 'faq3',
      question: 'ADHD mein diet se kitne din mein fark dikhega?',
      answer: '2-4 hafte mein basic difference feel hona shuru hota hai.\nPehle week mein: Sleep thodi better hoti hai, gut issues (agar the) kam hote hain.\n2-3 hafte mein: Blood sugar stability se mood swings aur irritability mein noticeable improvement aata hai.\n4+ hafte mein: Focus aur hyperactivity pe subtle improvement — diet akele ADHD theek nahi karta, treatment support karta hai.\nAgar koi major improvement na ho 4 hafte mein — apne doctor se milein.',
    },
    {
      _key: 'faq4',
      question: 'ADHD mein chai / coffee peena theek hai?',
      answer: 'Limited mein — cautiously allowed.\n1 cup subah ki chai ya coffee — kuch adults mein ADHD symptoms mein thoda focus improvement hota hai kyunki caffeine dopamine ko mildly stimulate karta hai.\nLekin: 3+ cups daily bilkul nahi — neend kharab hoti hai aur ADHD mein neend already ek badi problem hai.\nChildren mein coffee/chai avoid karo — developing brain pe caffeine ka alag impact hota hai.\nHerbal chai (tulsi, adrak) better option hai — ADHD ke liye bina risk ke.',
    },
    {
      _key: 'faq5',
      question: 'ADHD mein vrat rakhna safe hai?',
      answer: 'Haan — lekin khaali pet bilkul nahi rehna chahiye.\nADHD brain ko continuous glucose chahiye — long fasting mein brain fuel nahi milta aur symptoms bahut worsen hote hain.\nVrat mein sabudana, akhrot, mungfali, fresh fruit, doodh — ye sab le sakte hain.\nNirajala vrat (water-less) ADHD mein specifically risky hai — brain dehydration symptoms aur bhi kharab kar deta hai.\nAgar vrat rakhna hi hai — har 2-3 ghante mein kuch khao.',
    },
    {
      _key: 'faq6',
      question: 'ADHD mein late raat khaana khana kaisa hai?',
      answer: 'Avoid karo — ADHD mein ye direct symptom trigger hai.\nHeavy dinner late raat (9-10 PM ke baad) se neend quality kharab hoti hai — aur ADHD mein neend ki quality directly agli subah ki focus aur hyperactivity determine karti hai.\nRaat 7-8 PM tak light dinner — yahi ADHD mein best hai.\nAgar bhookh lage raat mein — warm haldi doodh ya saunf paani okay hai, heavy khaana nahi.',
    },
    {
      _key: 'faq7',
      question: 'Kya ADHD mein aam aur kela khane chahiye?',
      answer: 'Haan — fresh aur moderate mein bilkul allowed hai.\nAam (seasonal) — fresh aam moderate mein okay hai — sirf packaged aam juice nahi — usme fructose concentrate hota hai jo blood sugar spike deta hai.\nKela — fresh kela ek din mein 1 — allowed hai, tyrosine aur B6 ka source hai jo dopamine ke liye zaroori hai.\nDono fruits sirf fresh khao — juice nahi, overripe nahi.',
    },
    {
      _key: 'faq8',
      question: 'Homeopathic medicine ke saath khaane ki koi restriction hai?',
      answer: 'Specific restrictions medicine pe depend karti hain — generalize karna sahi nahi.\nKuch homeopathic medicines ke saath strong smell wali cheezein (lahsun, pyaaz raw, strong coffee) avoid karne ki salah di jaati hai — kyunki smell absorption interfere kar sakti hai.\nCoffee restriction — sirf kuch specific medicines ke saath hoti hai, sabke saath nahi.\nApne homoeopath se specifically poochho — apni medicine ke baare mein — wo bata denge kya avoid karna hai.\nGenerally: ADHD ki diet mein jo avoid list hai — wo medicines ka bhi maximum support karti hai.',
    },
    {
      _key: 'faq9',
      question: 'ADHD mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karne ki zaroorat bilkul nahi — sahi non-veg actually helpful hai.\nRouhu / katla machli aur anda — ADHD brain ke liye omega-3 DHA aur choline ke best sources hain.\nOmega-3 (DHA) ADHD brain ke nerve membranes ke liye directly zaroori hai — research clearly support karta hai.\nLekin: Fried non-veg, processed meat, red meat — ye avoid karo — cooking method aur processing matter karta hai.\nBoiled / grilled non-veg — ADHD diet mein ek strong green option hai.',
    },
    {
      _key: 'faq10',
      question: 'ADHD mein mithai / sweet completely band karein?',
      answer: 'Complete ban nahi — lekin refined sugar seriously limit karo.\nRefined sugar (candy, mithai, cold drink) blood sugar spike-crash deta hai — ADHD mein hyperactivity aur mood swings is cycle se directly worsen hote hain.\nAlternative: Jaggery (thoda — 1 tsp chai mein), fresh fruit, ghar ka amla murabba — ye natural sweetness ke safer options hain.\nSpecial occasions pe thodi mithai — strict ban nahi — lekin roz ka habit dangerous hai ADHD mein.\nChildren ke liye especially: packaged candy aur chocolates strictly avoid — artificial color + sugar = classic ADHD trigger.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Visternicu M et al — Investigating the Impact of Nutrition and Oxidative Stress on Attention Deficit Hyperactivity Disorder — Nutrients', year: '2024', url: 'https://pubmed.ncbi.nlm.nih.gov/39339712' },
    { _key: 's2', name: 'Breda V et al — Is there a place for dietetic interventions in adult ADHD? — Progress in Neuro-Psychopharmacology & Biological Psychiatry', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35964708' },
    { _key: 's3', name: 'Banaschewski T et al — Supplementation with polyunsaturated fatty acids (PUFAs) in the management of attention deficit hyperactivity disorder (ADHD) — Nutrition and Health', year: '2018', url: 'https://pubmed.ncbi.nlm.nih.gov/29921155' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Packaged fruit juice ko "healthy" samajhna — bina fibre ke concentrated fructose ADHD ke liye refined sugar jaisa hi hai',
    mustEat: 'Akhrot (4-5 roz) — Indian mein milne wala sabse accha omega-3 source jo ADHD brain ke liye directly helpful hai',
    mustAvoid: 'Cold drinks / cola — caffeine + refined sugar + artificial color — ADHD symptoms ka classic triple trigger hai',
  },

  doctorNote: 'Maine notice kiya hai ki mere ADHD patients (khas taur pe bachche) jo ghar ka nashta subah 30 minute ke andar uthke lete hain — unka daytime hyperactivity aur school mein focus clearly better hota hai treatment ke saath — jo sirf raat mein ya late nashta karte hain unke mukable mein. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'ADHD mein kya khayein, kya nahi — complete list: homeopedia.in/diet/adhd',
  shareTextMealPlan: 'ADHD ke liye 4-din ka Indian diet plan: homeopedia.in/diet/adhd',
  shareTextPage: 'ADHD Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/adhd',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding ADHD diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ ADHD diet chart seeded — homeopedia.in/diet/adhd')
}

seed().catch(console.error)
