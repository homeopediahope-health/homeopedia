import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-vitiligo',
  _type: 'diet',
  title: 'Vitiligo (Safed Daag) Diet Chart',
  hindiName: 'Safed Daag / Leucoderma',
  slug: { _type: 'slug', current: 'vitiligo' },
  relatedDiseaseSlug: 'vitiligo',
  category: 'Skin',
  metaTitle: 'Vitiligo (Safed Daag) Diet Chart — Kya Khayein | Homeopedia',
  metaDescription: 'Vitiligo mein kaun se foods melanin badhate hain aur kaun se avoid karein? Complete Indian diet chart safed daag ke liye. Homeopedia pe padho.',
  intro: 'Vitiligo mein melanocytes (pigment banane wale cells) pe oxidative stress (free radicals ka attack) hota hai — aur kuch foods ye stress badhate hain, kuch kam karte hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah khaali pet 1 glass lukewarm paani piyo', reason: 'body ke free radicals flush hote hain jo melanocyte damage ka karan hain' },
    { _key: 'eh2', habit: 'Khana dhoop mein baithke khao (mild sunlight)', reason: 'Vitamin D activate hoti hai jo melanin synthesis mein directly kaam aati hai' },
    { _key: 'eh3', habit: 'Raat 8 baje ke baad kuch mat khao', reason: 'late digestion gut inflammation badhata hai jo autoimmune trigger karta hai vitiligo mein' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'gut inflammation kam karta hai jo vitiligo ke autoimmune cycle se connected hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'antioxidant-rich whole grain — free radical load reduce karta hai' },
        { _key: 'i3', food: 'Jowar / Bajra roti', reason: 'copper aur zinc ka natural source — melanin synthesis ke liye zaroori minerals' },
        { _key: 'i4', food: 'Besan chilla', reason: 'folic acid achha milta hai — B12 ke saath milke repigmentation support karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'folate (folic acid) se bharpoor — melanocyte regeneration mein help karta hai' },
        { _key: 'i6', food: 'Lauki', reason: 'gut ko cool aur anti-inflammatory rakhta hai — vitiligo ka gut connection strong hai' },
        { _key: 'i7', food: 'Gajar', reason: 'beta-carotene se bhari — skin cells ko oxidative damage se bachata hai' },
        { _key: 'i8', food: 'Karela (thoda sa)', reason: 'blood purifier — toxin load reduce karta hai jo skin pe dikhta hai' },
        { _key: 'i9', food: 'Shimla mirch (laal/peeli)', reason: 'Vitamin C highest in this veggie — antioxidant shield banata hai melanocytes ke liye' },
        { _key: 'i10', food: 'Methi (daane ya saag)', reason: 'zinc ka source — melanin synthesis pathway support karta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Amla (fresh ya plain dry)', reason: 'Vitamin C highest natural source — free radical damage rokta hai' },
        { _key: 'i12', food: 'Papaya', reason: 'beta-carotene + Vitamin C combination — skin cell repair karta hai' },
        { _key: 'i13', food: 'Seb (chhilke ke saath)', reason: 'quercetin hota hai — autoimmune response mild karta hai' },
        { _key: 'i14', food: 'Nar (anar)', reason: 'polyphenols jo melanocyte stress kam karte hain' },
        { _key: 'i15', food: 'Jamun (seasonal, summer mein)', reason: 'anthocyanins — skin oxidative stress reduce karta hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chhilke wali ya bina chhilke)', reason: 'easily digestible protein — gut pe load nahi — vitiligo mein gut health critical hai' },
        { _key: 'i17', food: 'Masoor dal', reason: 'iron + folic acid dono — repigmentation ke liye dual benefit' },
        { _key: 'i18', food: 'Chane (bhune hue ya boiled)', reason: 'zinc + copper dono minerals jo melanin banane mein seedha kaam aate hain' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i19', food: 'Haldi + kali mirch wala doodh (haldi doodh)', reason: 'curcumin ke saath piperine absorption badhata hai — anti-inflammatory for melanocytes' },
        { _key: 'i20', food: 'Tulsi chai (plain, no sugar)', reason: 'adaptogenic — oxidative stress reduce karta hai' },
        { _key: 'i21', food: 'Til ka tel ya sarson ka tel (cooking ke liye)', reason: 'polyunsaturated fatty acids (PUFAs) jo vitiligo mein beneficial study mein noted hain' },
        { _key: 'i22', food: 'Adrak', reason: 'gut inflammation reduce karta hai — vitiligo ka gut axis strong hai' },
        { _key: 'i23', food: 'Jeera paani (subah)', reason: 'digestive enzyme production badhata hai — nutrient absorption improve hoti hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Eggs (boiled only)', reason: 'Vitamin B12 ka strong source — B12 + folic acid combination vitiligo repigmentation mein studied hai' },
    { _key: 'nva2', food: 'Rohu / Katla fish (boiled ya grilled)', reason: 'omega-3 fatty acids jo melanocyte inflammation reduce karte hain' },
    { _key: 'nva3', food: 'Chicken (boiled/grilled, no fry, no masala)', reason: 'lean protein — tyrosine amino acid ka source jo melanin ka precursor hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / pakoda', reason: 'high trans fat oxidative stress dramatically badhata hai — direct melanocyte damage' },
    { _key: 'nvav2', food: 'Red meat (mutton, beef)', reason: 'arachidonic acid se inflammation cascade — vitiligo mein autoimmune response trigger' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami, packaged chicken)', reason: 'preservatives + additives gut microbiome disturb karte hain — vitiligo worsening link' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, biscuit, white pasta)', reason: 'gut mein leaky gut badhata hai — autoimmune response jo vitiligo ka trigger hai' },
        { _key: 'ri2', food: 'Packaged namkeen / chips', reason: 'refined oil + additives free radical load badhate hain' },
        { _key: 'ri3', food: 'Ready-to-eat meals', reason: 'MSG + preservatives melanocyte health pe harmful' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged / set dahi (market wala)', reason: 'fermented products mein high tyramine — vitiligo mein gut-skin axis disturb karta hai [Ghar ka fresh bana dahi (1 small katori) allowed hai]' },
        { _key: 'ri5', food: 'Full-fat packaged milk in excess', reason: 'casein protein kuch vitiligo patients mein gut inflammation trigger karta hai' },
        { _key: 'ri6', food: 'Paneer (market wala, packaged)', reason: 'heavy to digest — gut load badhata hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Mirchi / bahut teekha khaana', reason: 'gut lining ko irritate karta hai — autoimmune flare trigger karta hai' },
        { _key: 'ri8', food: 'Refined sugar (mithai, cold drinks, packaged juice)', reason: 'inflammation pathway activate karta hai — melanocyte destruction accelerate' },
        { _key: 'ri9', food: 'Bahut zyada tel mein fry kiya kuch bhi', reason: 'oxidative compounds produce hote hain jo directly skin cells damage karte hain' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Alcohol', reason: 'Vitamin B12 aur folic acid absorption block karta hai — dono vitiligo repigmentation ke liye critical hain' },
        { _key: 'ri11', food: 'Cold drinks / soda', reason: 'phosphoric acid gut microbiome destroy karta hai — autoimmune connection strong hai vitiligo mein' },
        { _key: 'ri12', food: 'Packaged fruit juices', reason: 'fruit ka fibre nahi, sirf sugar spike — gut inflammation' },
        { _key: 'ri13', food: 'Bahut zyada chai (3+ cups daily)', reason: 'tannins iron aur zinc absorption block karte hain — melanin synthesis pe direct impact' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + amla juice (1 chammach, fresh ya plain dry amla)', 'Jeera paani (raat bhar bheega hua 1 tsp jeera ka paani)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with palak aur gajar (1 katori) + 1 cup tulsi chai (no sugar)', 'Besan chilla (2 pieces) + green chutney (no tamarind)'], nonVegOption: '2 ande boiled + 1 roti (no butter) + 1 cup tulsi chai' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seasonal fruit (seb / papaya / nar — jo bhi available ho)', 'Bhuna chana (1 small mutthi) + 1 glass paani'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal chhilke wali + lauki sabzi + salad (gajar, kheera)', 'Brown rice (1 small katori) + masoor dal + palak sabzi'], nonVegOption: '2 roti + grilled rohu fish + salad' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Haldi doodh (plain cow milk, no sugar) + 4-5 akhrot ya bajra murmure', 'Bheegi moong sprouts (1 small katori) + nimbu nichor ke'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + chana dal + karela/methi sabzi (light masala)', 'Khichdi (moong dal + brown rice + ghee ek chammach) + salad'], nonVegOption: 'Chicken soup (no cream, no butter) + 1 roti + sabzi' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Haldi doodh (ghar ka fresh bana, no sugar) — curcumin raat mein oxidative stress reduce karta hai', 'Warm paani + dry amla powder (chutki bhar) — Vitamin C overnight'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Lukewarm paani + jeera paani',
      vegNashta: 'Daliya + palak (1 katori) + tulsi chai',
      vegDopahar: 'Jowar roti (2) + moong dal + lauki sabzi',
      vegShaam: 'Seb (1) + bhuna chana (handful)',
      vegRaat: '2 roti + masoor dal + gajar sabzi',
      nonVegNashta: '2 ande boiled + 1 roti',
      nonVegDopahar: 'Grilled rohu + jowar roti (2) + lauki',
      nonVegRaat: 'Chicken soup (plain) + roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Lukewarm paani + amla (1 piece fresh ya dry)',
      vegNashta: 'Besan chilla (2) + green chutney',
      vegDopahar: 'Brown rice (small katori) + arhar dal + palak',
      vegShaam: 'Papaya (1 slice) + moong sprouts',
      vegRaat: 'Khichdi (moong + rice) + ghee + cucumber salad',
      nonVegNashta: '2 ande boiled + green chutney',
      nonVegDopahar: 'Grilled katla fish + brown rice + palak',
      nonVegRaat: 'Boiled chicken (2 pieces) + khichdi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Lukewarm paani + tulsi leaves (4-5, chew karo)',
      vegNashta: 'Poha with gajar + methi (no peanuts) + nimbu',
      vegDopahar: 'Bajra roti (2) + chana dal + shimla mirch sabzi',
      vegShaam: 'Nar (anar) (half cup) + bhuna chana',
      vegRaat: '2 roti + moong dal + karela sabzi (thoda sa)',
      nonVegNashta: 'Besan chilla (veg same)',
      nonVegDopahar: 'Chicken (boiled/grilled) + bajra roti + shimla mirch',
      nonVegRaat: 'Chicken soup + 1 roti',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Lukewarm paani + jeera paani',
      vegNashta: 'Daliya khichdi (savory, vegetables ke saath)',
      vegDopahar: 'Brown rice + masoor dal + lauki-methi sabzi',
      vegShaam: 'Seb (1) + akhrot (4 pieces)',
      vegRaat: '2 jowar roti + chana dal + salad',
      nonVegNashta: '2 ande + daliya',
      nonVegDopahar: 'Grilled rohu + brown rice + methi sabzi',
      nonVegRaat: 'Moong dal khichdi (veg same)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Nayi Patches Aa Rahi Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf light khao — moong dal khichdi, daliya, boiled vegetables — gut ko rest do',
        'Avoid karo us din: dahi (packaged), mirchi, fried kuch bhi, packaged food — ye sab autoimmune fire mein petrol daalte hain',
        'Practical tip: Roz subah 10-15 minute mild sunlight mein baitho (flare-up mein bhi) — Vitamin D synthesis continue rehni chahiye — sirf affected patch pe direct harsh sunlight avoid karo',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Safe options: Sabudana (thoda) + sendha namak + lauki — gut gentle rahti hai',
        'Fruits safe hain vrat mein — kele se zyada papaya, seb, nar prefer karo vitiligo mein',
        'Avoid karo vrat mein: bahut zyada sendha namak, tamarind chutney, packaged vrat snacks — ye sab gut disturb karte hain',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: Dal tadka (no cream), plain roti, boiled rice, salad (no dressing) — most dhabas mein milta hai',
        'Avoid karo: Paneer butter masala, creamy curries, fried items (puri, bhatura, pakoda), cold drinks',
        '"Bina cream, bina butter" clearly bolein waiter ko — most places mein adjust kar dete hain',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: Bhuna chana (small dabba), dry amla (vitamin C source), dry dates (1-2), dry roasted makhana — train/bus mein easy',
        'Hotel/train mein order karo: Plain dal rice, sabzi roti (no gravy), boiled eggs (non-veg walo ke liye) — avoid packaged biscuits, chips',
      ],
    },
  ],

  proTip: 'Vitiligo patients mein maine notice kiya hai ki jo log subah nashte se 30 minute pehle 1 chammach amla powder ya fresh amla khate hain — unki skin antioxidant capacity din bhar better rahti hai. Timing matter karta hai — nashte ke saath ya baad mein lete hain toh utna absorb nahi hota.',
  importantNote: 'Ye chart ek general guide hai — vitiligo ki severity, location, aur aapki overall health ek-doosre se alag hoti hai. Apni condition ke hisaab se apne homoeopath se personalized diet plan zaroor banwayein.',
  homeopathyDiet: 'Vitiligo mein jab oxidative stress kam hota hai diet se, toh melanocytes ki environment better hoti hai — aur homeopathic medicines is better environment mein faster aur deeper kaam karti hain. Dono saath mein zyada effective hote hain akele se.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Vitiligo mein dahi khana chahiye ya nahi?',
      answer: 'Haan — lekin sirf ghar ka fresh bana dahi (1 small katori, subah ya dopahar mein).\nPackaged / market wala set dahi avoid karo — usme tyramine zyada hoti hai jo gut-skin axis disturb kar sakti hai.\nGhar ka fresh dahi mein probiotics hote hain jo gut microbiome support karte hain — vitiligo mein gut health aur autoimmune response seedha connected hai.\nRaat ko dahi avoid karo — digestion slow hoti hai.',
    },
    {
      _key: 'faq2',
      question: 'Vitiligo diet se kitne time mein fark dikhta hai?',
      answer: 'Diet ka direct asar patch size pe 3-6 mahine mein consistent follow karne pe dikh sakta hai — lekin ye treatment replace nahi karta.\nJo cheez diet se jaldi hoti hai: oxidative stress ka kam hona, naye patches aane ki speed kam hona.\nRepigmentation sirf diet se nahi hogi — treatment saath mein zaroori hai.\nDiet ko treatment ka support samjho — replacement nahi.',
    },
    {
      _key: 'faq3',
      question: 'Vitiligo mein chai aur coffee peena theek hai?',
      answer: 'Ek cup tulsi chai ya green tea — allowed hai, aur antioxidant benefit bhi deti hai.\nRegular milk tea — zyada nahi (1 cup max) — tannins zinc aur iron absorb hone nahi dete jo melanin synthesis ke liye zaroori hain.\nCoffee — 1 cup allowed hai, lekin khali pet mat lo — gut lining pe direct effect hota hai.\n3+ cups chai ya coffee avoid karo — mineral absorption block hota hai.',
    },
    {
      _key: 'faq4',
      question: 'Vitiligo mein vrat kar sakte hain?',
      answer: 'Haan — kar sakte hain, lekin dhyan rakhna.\nSafe option: Sabudana + lauki + sendha namak + fruits.\nAvoid: Zyada fried vrat snacks (sabudana vada, chips wale) — oil + refined ingredients gut disturb karte hain.\nLamba vrat (nirjala) frequently mat karo — vitamin deficiency already ek concern hai vitiligo mein.\nApne doctor se poochho agar medicines chal rahi hain.',
    },
    {
      _key: 'faq5',
      question: 'Vitiligo mein nimbu ya khatta khaana theek hai?',
      answer: 'Thoda nimbu — allowed hai, beneficial bhi hai (Vitamin C source).\nBahut zyada khatta (imli, raw mango zyada, packaged tamarind) — avoid karo.\nLogic: Moderate Vitamin C antioxidant ki tarah kaam karta hai. Zyada khatta gut pH disturb karta hai jo autoimmune response trigger kar sakta hai.\nNimbu paani (plain, no sugar) daily ok hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya vitiligo mein anda (egg) khana chahiye ya band karna padega?',
      answer: 'Non-veg khaane walo ke liye — boiled anda allowed hai aur beneficial hai vitiligo mein.\nReason: Vitamin B12 aur tyrosine dono ande mein hote hain — B12 repigmentation mein help karta hai, tyrosine melanin ka direct precursor hai.\nSirf boiled — fried anda avoid karo (cooking fat load problem hai).\nAgar vegetarian hain toh B12 ke liye doctor se supplement discuss karo.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific medicines ke saath strong smell wale foods avoid karna padta hai — jaise bahut zyada lahsun ya camphor.\nCoffee aur peppermint kuch homeopathic medicines ke antidote ho sakte hain — apne doctor se poochho.\nHar medicine ke rules alag hote hain — generalize mat karo.\n"Sab kuch band karna padega" — ye galat hai. Selective restrictions hoti hain, total food ban nahi.',
    },
    {
      _key: 'faq8',
      question: 'Vitiligo mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karne ki zaroorat nahi — lekin type aur cooking method matter karta hai.\nAllowed: Boiled/grilled rohu, katla fish, boiled chicken — protein + B12 + tyrosine milta hai.\nAvoid: Red meat (mutton zyada), fried non-veg (pakoda, fry), processed meat.\nFish — vitiligo mein especially beneficial hai (omega-3 melanocyte inflammation reduce karta hai).',
    },
    {
      _key: 'faq9',
      question: 'Vitiligo mein chawal (rice) khana theek hai?',
      answer: 'Haan — thoda khao, white rice rooz mat khao.\nBetter option: Brown rice prefer karo — fiber + minerals zyada hain, antioxidant capacity bhi.\nWhite rice rooj — blood sugar spike > gut inflammation > autoimmune trigger — isliye limit karo.\nEk din mein 1 small katori brown rice — bilkul theek hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya vitiligo mein kele (banana) khana chahiye?',
      answer: 'Fresh, slightly raw kela (poora pakka nahi) — allowed hai.\nOverripe / bahut pakka hua kela — avoid karo — tyramine zyada hota hai jab kela bahut pakka ho.\nKela rooj mat khao — week mein 2-3 baar kafi hai.\nFresh papaya ya seb better option hain vitiligo mein daily fruit ke liye.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Hadi Z, Kaur R, Parekh Z et al — Exploring the impact of diet and nutrition on vitiligo: A systematic review of dietary factors and nutritional interventions — Journal of Cosmetic Dermatology', year: '2024', url: 'https://pubmed.ncbi.nlm.nih.gov/38465786' },
    { _key: 's2', name: 'Dutta RR, Kumar T, Ingole N — Diet and Vitiligo: The Story So Far — Cureus', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/36185835' },
    { _key: 's3', name: 'Di Nardo V, Barygina V, França K et al — Functional nutrition as integrated approach in vitiligo management — Dermatologic Therapy', year: '2018', url: 'https://pubmed.ncbi.nlm.nih.gov/30156053' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: '"Khatte cheez bilkul band kar dena" — bahut log galti se sab khatta avoid karte hain. Moderate Vitamin C (amla, nimbu) actually melanocyte protection karta hai — sirf zyada khatta avoid karo',
    mustEat: 'Amla (Indian gooseberry) — Vitamin C ka highest natural source, easily available, gut + skin dono ke liye — vitiligo mein antioxidant shield banata hai',
    mustAvoid: 'Packaged / market ka set dahi — bahut log sochte hain dahi healthy hai toh koi bhi dahi theek hai — lekin packaged dahi mein tyramine gut-skin axis disturb karta hai. Sirf ghar ka fresh bana dahi',
  },

  doctorNote: 'Mere vitiligo patients mein maine notice kiya hai ki jo log amla + haldi dono regularly khate hain — aur saath mein gut pe dhyan dete hain (maida, packaged food avoid karte hain) — unka homeopathic treatment response clearly better hota hai sirf haldi ya sirf amla khane walo ke comparison mein. Combination matter karta hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Vitiligo (Safed Daag) mein kya khayein, kya nahi — complete green aur red list: homeopedia.in/diet/vitiligo',
  shareTextMealPlan: 'Vitiligo ke liye 4-din ka Indian diet plan: homeopedia.in/diet/vitiligo',
  shareTextPage: 'Vitiligo Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/vitiligo',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Vitiligo diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Vitiligo diet chart seeded — homeopedia.in/diet/vitiligo')
}

seed().catch(console.error)
