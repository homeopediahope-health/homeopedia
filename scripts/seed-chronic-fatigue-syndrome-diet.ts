import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-chronic-fatigue-syndrome',
  _type: 'diet',
  title: 'Chronic Fatigue Syndrome (ME/CFS) Diet Chart',
  hindiName: 'Chronic Thakan Rog / Lagaataar Thakan',
  slug: { _type: 'slug', current: 'chronic-fatigue-syndrome' },
  relatedDiseaseSlug: 'chronic-fatigue-syndrome',
  category: 'Mental',
  metaTitle: 'Chronic Fatigue Syndrome Diet – Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'ME/CFS (chronic thakan rog) diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'CFS mein body ki cells energy (ATP) sahi se produce nahi kar paati – isliye kuch foods thakan aur brain fog directly badhaate hain aur kuch cellular energy support karte hain.\n\nNeeche complete guide hai – green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel/flare-up jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Har 3 ghante mein kuch zaroor khao', reason: 'blood sugar crash hone se CFS fatigue instantly worse ho jaati hai' },
    { _key: 'eh2', habit: 'Subah uthke 30 minute ke andar kuch khao', reason: 'overnight fast ke baad body ka energy reserve critically low hota hai CFS mein' },
    { _key: 'eh3', habit: 'Raat ka khaana 7:30 baje tak complete karo', reason: 'late eating se gut motility slow hoti hai jo CFS ke common symptom IBS aur bloating ko badhaata hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'complex carb hai, slow energy release karta hai – blood sugar stable rakho jo CFS fatigue management ke liye seedha zaroori hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'B vitamins se bhara – jo mitochondrial energy production ke liye essential hain, CFS mein ye deficient hote hain' },
        { _key: 'i3', food: 'Sabudana (small quantity)', reason: 'quickly digestible energy – flare-up ke din useful hai jab kuch heavy nahi khaa sakte' },
        { _key: 'i4', food: 'Jowar / bajra roti', reason: 'gluten-free grain – CFS patients mein gut sensitivity common hai – ye gut pe gentle hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'gut inflammation kam karta hai – CFS mein gut-brain axis dysregulation hoti hai, lauki us chain ko calm karta hai' },
        { _key: 'i6', food: 'Palak', reason: 'iron + folate – CFS mein mitochondrial dysfunction se anaemia jaisi thakan hoti hai, palak usme help karta hai' },
        { _key: 'i7', food: 'Karela', reason: 'blood sugar spikes kaam karta hai – energy crash avoid karne ke liye CFS mein zaroori hai' },
        { _key: 'i8', food: 'Beetroot (chukandar)', reason: 'nitrates hote hain jo cellular oxygen efficiency improve karte hain – CFS mein cell-level thakan kam hoti hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i9', food: 'Papaya', reason: 'digestive enzymes (papain) contain karta hai – CFS mein gut motility slow hoti hai, papaya usse support karta hai' },
        { _key: 'i10', food: 'Amla', reason: 'vitamin C sabse concentrated source – CFS mein oxidative stress zyada hoti hai, amla uska direct counter hai' },
        { _key: 'i11', food: 'Seb (apple)', reason: 'quercetin hota hai jo neuro-inflammation kam karta hai – CFS ke brain fog ka ek cause neuro-inflammation hai' },
        { _key: 'i12', food: 'Naashpati (pear)', reason: 'fructose + glucose balanced – quick energy bina spike ke – low energy days ke liye best fruit' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i13', food: 'Moong dal (chhilke wali)', reason: 'sabse easily digestible dal – CFS mein digestion pe energy waste nahi hoti' },
        { _key: 'i14', food: 'Masoor dal', reason: 'iron aur B6 dono – jo nerve signal transmission ke liye zaroori hain – CFS ke numbness/tingling mein useful' },
        { _key: 'i15', food: 'Chana (bhuna hua)', reason: 'slow-digesting protein + complex carb – energy 2-3 ghante tak stable rakhta hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i16', food: 'Haldi + kali mirch wala doodh (haldi doodh)', reason: 'curcumin CFS mein systemic inflammation reduce karta hai – kali mirch bina piperine ke curcumin absorb nahi hota – dono saath zaroori' },
        { _key: 'i17', food: 'Adrak ki chai (bina sugar)', reason: 'gingerol gut motility improve karta hai aur CFS ki nausea kam karta hai' },
        { _key: 'i18', food: 'Jeera paani (cumin water)', reason: 'digestive enzyme production trigger karta hai – gut fermentation aur bloating khatam karta hai jo CFS patients mein common hai' },
        { _key: 'i19', food: 'Desi ghee (1 tsp)', reason: 'butyrate provide karta hai jo gut lining repair karta hai – CFS-gut axis ke liye important' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Chicken (boiled ya grilled)', reason: 'complete protein + B12 – CFS mein mitochondrial repair ke liye amino acids zaroori hain' },
    { _key: 'nva2', food: 'Anda (boiled)', reason: 'choline + B12 + protein – brain fog improve hoti hai kyunki choline neurotransmitter synthesis support karta hai' },
    { _key: 'nva3', food: 'Rohu / Katla machhli', reason: 'omega-3 + Vitamin D – CFS mein neuro-inflammation kam karne ke liye omega-3 evidence-backed hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / chicken pakoda', reason: 'trans fat mitochondrial membrane damage karta hai – CFS mein energy production aur worse ho jaati hai' },
    { _key: 'nvav2', food: 'Red meat (mutton, beef)', reason: 'heavy protein hai jo digestion mein bahut energy lagti hai – CFS mein ye energy afford nahi ho paati' },
    { _key: 'nvav3', food: 'Sausage / packaged cold cuts', reason: 'preservatives (nitrites) gut dysbiosis badhate hain – CFS mein already gut bacteria disturbed hota hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour)', reason: 'gut mein leaky gut badhata hai – CFS mein already gut permeability high hoti hai jisse inflammation signals brain tak jaate hain' },
        { _key: 'ri2', food: 'Packaged biscuits / namkeen', reason: 'refined carb + trans fat dono – energy spike ke baad hard crash hota hai jo CFS fatigue cycle ko worsen karta hai' },
        { _key: 'ri3', food: 'Instant noodles / Maggi', reason: 'MSG + high sodium – CFS mein hypersensitivity reactions aur neurological symptoms trigger karta hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged / market ka set dahi', reason: 'casein + lactose dono – CFS patients mein gut inflammation aur immune overactivation trigger kar sakta hai [Ghar ka fresh dahi 1 katori allowed hai]' },
        { _key: 'ri5', food: 'Paneer (zyada quantity)', reason: 'heavy to digest – CFS mein digestion pe extra energy lagti hai jo fatigue badhaata hai' },
        { _key: 'ri6', food: 'Full cream doodh', reason: 'saturated fat zyada – gut motility slow karta hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Cheeni / refined sugar', reason: 'quick glucose spike fir crash – CFS mein ye energy crash episodes trigger karta hai (hypoglycemia-like symptoms)' },
        { _key: 'ri8', food: 'Zyada mirch wala khaana', reason: 'capsaicin sensitive gut mein motility problems aur IBS trigger karta hai – CFS-IBS overlap bahut common hai' },
        { _key: 'ri9', food: 'Deep fried khaana', reason: 'trans fat + oxidative compounds – mitochondrial function aur damage karta hai jo CFS ka core problem hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Energy drinks (Red Bull type)', reason: 'artificial stimulants adrenal system pe load daalte hain – CFS mein adrenal dysfunction already hoti hai – ye worsen karta hai' },
        { _key: 'ri11', food: 'Alcohol (beer, wine, sharab)', reason: 'CFS mein acetaldehyde metabolism impaired hoti hai – alcohol bahut zyada thakan aur brain fog cause karta hai' },
        { _key: 'ri12', food: 'Packaged fruit juice', reason: 'fructose without fibre – rapid blood sugar spike hota hai jiske baad CFS ki characteristic energy crash aati hai' },
        { _key: 'ri13', food: 'Chai / coffee (3+ cups daily)', reason: 'cortisol spike karta hai jo already dysregulated adrenal function ko aur worse karta hai – 1 cup subah allowed hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6:30-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + 1 tsp amla powder', 'Bheegi methi seeds (1 tsp, raat ko bhigo ke rakho)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with lauki ya palak + 1 tsp desi ghee', 'Moong dal chilla (2 piece) + green chutney'], nonVegOption: '2 ande boiled + 1 multigrain roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya 1 naashpati', 'Bhuna chana (small handful)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar / bajra roti + moong dal + lauki sabzi', 'Brown rice + masoor dal + salad (kheera, gajar)'], nonVegOption: 'Boiled chicken (50-75g) + 1 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak-tulsi chai (1 cup, bina sugar) + 4-5 akhrot', 'Roasted makhana (light snack)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-7:30 PM', slotEmoji: '🌙', vegOptions: ['Moong dal khichdi + 1 tsp ghee (light, easily digestible)', '1-2 roti + sabzi (lauki / turai) + chhachh'], nonVegOption: 'Clear chicken soup (no cream) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (ghar ka doodh + 1/4 tsp haldi + 1 pinch kali mirch)', 'Warm saunf paani (fennel water)'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Lukewarm paani + amla powder',
      vegNashta: 'Daliya + palak + ghee',
      vegDopahar: 'Bajra roti + moong dal + lauki sabzi + salad',
      vegShaam: 'Tulsi adrak chai + bhuna chana',
      vegRaat: 'Moong dal khichdi + ghee',
      nonVegNashta: '2 ande boiled + 1 multigrain roti',
      nonVegDopahar: 'Boiled chicken + bajra roti + sabzi',
      nonVegRaat: 'Clear chicken soup + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi seeds',
      vegNashta: 'Moong dal chilla (2) + green chutney',
      vegDopahar: 'Brown rice + masoor dal + beetroot sabzi + kheera',
      vegShaam: '1 seb + 4 akhrot',
      vegRaat: '2 jowar roti + turai sabzi + chhachh',
      nonVegNashta: '2 ande (scrambled, no butter) + 1 roti',
      nonVegDopahar: 'Rohu fish (steamed) + brown rice + salad',
      nonVegRaat: 'Chicken khichdi (moong + chawal + chicken)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Lukewarm paani + 1/2 nimbu (agar acidity nahi hai)',
      vegNashta: 'Poha (light, bina zyada tel ke) + 1 cup adrak chai',
      vegDopahar: '2 bajra roti + chana dal + palak sabzi',
      vegShaam: 'Roasted makhana + herbal chai',
      vegRaat: 'Khichdi (moong + chawal) + 1 tsp ghee',
      nonVegNashta: '1 anda boiled + poha',
      nonVegDopahar: 'Grilled chicken (50g) + chana dal + roti',
      nonVegRaat: 'Clear vegetable + chicken soup + 1 roti',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Bheegi methi seeds',
      vegNashta: 'Daliya + papaya (cut karke upar)',
      vegDopahar: 'Brown rice + arhar dal + karela sabzi + salad',
      vegShaam: '1 naashpati + bhuna chana',
      vegRaat: '2 jowar roti + lauki sabzi + chhachh',
      nonVegNashta: '2 ande boiled + 1 multigrain roti',
      nonVegDopahar: 'Katla / Rohu fish curry (light) + brown rice',
      nonVegRaat: 'Khichdi + 50g boiled chicken',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Thakan Bahut Zyada Ho Tab (Bad Days)',
      emoji: '😣',
      tips: [
        'Sirf khichdi ya daliya khao – body ki saari energy digestion pe nahi, healing pe lagni chahiye',
        'Bahut mirch wala, fried, dairy – sab band us din – normally allowed cheezein bhi avoid karo flare mein',
        'Ek practical tip: Raat pehle hi sabudana bhigo ke rakh lo – flare pe jaldi bann jaata hai, digestion easy hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (bina fried mungfali ke) – safe hai CFS mein – energy aur gut pe gentle dono',
        'Singhara atta ki roti ya aloo boiled – CFS mein vrat pe blood sugar crash ka risk hai – ye stable rakhenge',
        'Avoid karo: Nirjala (waterless) fast – CFS mein dehydration fatigue instantly worsen karta hai – fruit + paani allowed variants choose karo',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: Dal tadka + plain roti (tawa pe) + salad – sabse safe CFS-friendly combination',
        'Avoid karo: Paneer butter masala / cream-based gravies – heavy fat + dairy CFS gut reaction trigger karta hai',
        'Hack: Pehle khana khake gharse – bahar sirf dal + roti order karo – overeating se energy crash hota hai CFS mein',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: Bhuna chana + dry amla + makhana – ye teen cheezein train/flight pe bhi kaam aati hain',
        'Hotel mein order karo: Plain dal + roti / boiled anda + roti – complicated dishes avoid karo – unknown ingredients gut react kar sakte hain',
      ],
    },
  ],

  proTip: 'CFS mein energy management ke liye khaane ka time clock pe set karo – reminder lagao – bhukh lagne ka wait mat karo. Bhukh lag gayi matlab energy already gir gayi – tab khaana fatigue reverse nahi kar paata.',
  importantNote: 'Ye chart ek general guide hai – CFS ek complex neuroimmunological condition hai jisme har patient ki triggers alag hoti hain. Apni condition aur symptoms ke hisaab se apne homoeopath se personalized diet plan zaroor banwayein.',
  homeopathyDiet: 'CFS mein diet sahi ho toh homeopathic medicines body ko zyada effectively respond karti hain – jab gut inflammation aur blood sugar stable ho toh treatment ka response clearly better hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya CFS mein chawal (rice) khana theek hai?',
      answer: 'Haan – brown rice allowed hai. White rice avoid karna better hai daily basis pe.\nWhite rice ka glycemic index high hai – blood sugar spike hota hai fir crash – ye CFS ki energy crash cycles ko badhaata hai.\nBrown rice mein B vitamins aur fibre dono hain jo mitochondrial energy support karte hain.\nAgar white rice hi available ho – toh ek din mein 1 small katori, dopahar mein – dinner mein avoid.\nApne doctor se poochho agar gut sensitivity bhi hai.',
    },
    {
      _key: 'faq2',
      question: 'CFS mein dahi khana chahiye ya nahi?',
      answer: 'Ghar ka fresh bana dahi (1 small katori) – allowed hai.\nPackaged / market ka set dahi – avoid karo.\nFresh dahi mein probiotic bacteria hote hain jo CFS mein disturbed gut microbiome ko support karte hain.\nPackaged dahi mein preservatives + high casein load – CFS patients mein immune overactivation ho sakti hai.\nAgar dahi se bloating ya gas feel ho toh bhi avoid karo – individual reaction dekho.',
    },
    {
      _key: 'faq3',
      question: 'Diet se CFS mein kitne din mein fark dikhta hai?',
      answer: 'Gut-related symptoms (bloating, IBS) – 2-3 hafte mein better feel ho sakta hai agar triggers avoid karo.\nOverall energy level mein improvement – 4-8 hafte lagte hain – kyunki mitochondrial function improve hone mein time lagta hai.\nBrain fog – gut inflammation kam hone ke baad improve hoti hai – 4-6 hafte ka realistic timeframe hai.\nDiet sirf support karta hai – CFS ki core treatment ke saath – akele diet se recovery expect mat karo.\nDoctor se milein aur regular review karo.',
    },
    {
      _key: 'faq4',
      question: 'CFS mein chai ya coffee peeni chahiye ya band karein?',
      answer: '1 cup subah ki chai ya coffee – allowed hai.\n3+ cups daily ya achanak band karna – dono avoid karo.\nCaffeine CFS mein cortisol spike karta hai – jo already dysregulated adrenal function ko aur worse karta hai.\nLekin achanak band karna bhi withdrawal fatigue cause karta hai – CFS mein ye bahut problematic hota hai.\nAgar band karna ho – dheere dheere reduce karo – 1-2 hafte mein gradually.\nHerbal alternatives: Tulsi-adrak chai, mulethi chai – ye stimulant free hain aur gut bhi support karte hain.',
    },
    {
      _key: 'faq5',
      question: 'CFS mein vrat / fast karna safe hai?',
      answer: 'Lambe nirjala vrat – CFS mein avoid karo.\nCFS mein blood sugar management core issue hai – fasting se glucose crash hona = fatigue instantly worse.\nAgar religious tradition hai: fruit + paani wale vrat safe hain – sabudana khichdi, singhara atta, aloo boiled – ye sab CFS-friendly vrat options hain.\nIntermittent fasting – doctor ki salah ke bina mat shuru karo CFS mein – postexertional malaise badh sakta hai.',
    },
    {
      _key: 'faq6',
      question: 'CFS mein late raat ka khaana kya problem karta hai?',
      answer: 'Haan – CFS mein raat 8 ke baad khaana kaafi problematic hai.\nCFS mein gut motility already slow hoti hai – late eating se overnight digestion aur slow hoti hai.\nIska directly CFS ka ek common symptom worsen hota hai – subah uthke aur thaka hua feel karna (unrefreshing sleep).\nLate meal se gut fermentation badhta hai – gas, bloating – jo neend aur further disrupt karta hai.\n7-7:30 baje tak dinner complete karna CFS symptom management ka important hissa hai.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana avoid karna padta hai?',
      answer: 'Kuch specific restrictions hain – general nahi.\nCoffee aur strong smells – kuch homeopathic doctors specific medicines ke saath avoid karne ko kehte hain – apne treating doctor se exactly poochho – generalize mat karo.\nKhane ke saath ya bilkul pehle-baad mein medicine lena avoid karo – 15-30 minute ka gap rakho.\nRaw onion / garlic – kuch doctors zyada matra mein avoid karne ko kehte hain – lekin ye medicine-specific hai.\nCFS mein ek important point: caffeine aur alcohol medicine ke effect ko dampen kar sakte hain – sab avoid karna better hai treatment period mein.',
    },
    {
      _key: 'faq8',
      question: 'CFS mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karne ki zaroorat nahi – lekin sahi choice karo.\nBoiled/grilled chicken, anda, aur rohu/katla machhli – ye sab CFS mein allowed aur beneficial hain.\nProtein aur B12 CFS mein mitochondrial function ke liye zaroori hain – non-veg inhe easily provide karta hai.\nRed meat (mutton) aur fried non-veg – avoid karo – digestion mein bahut energy lagti hai jo CFS afford nahi kar paata.\nVegetarian patients ke liye moong dal + amla + bhuna chana – adequate B vitamins aur protein deta hai.',
    },
    {
      _key: 'faq9',
      question: 'CFS mein kela (banana) khana safe hai?',
      answer: 'Fresh / slightly raw kela – allowed hai.\nOverripe / bahut pakka kela – avoid karo.\nFresh kela slow energy release karta hai – potassium bhi deta hai jo muscle weakness (CFS symptom) mein help karta hai.\nOverripe kela mein natural sugars bahut concentrate ho jaate hain – rapid blood sugar spike aur fir crash hota hai – jo CFS energy management ke liye problematic hai.\n1 medium size kela per day – nashte mein ya mid-morning – timing matters.',
    },
    {
      _key: 'faq10',
      question: 'CFS mein zyada paani peena chahiye – kitna sahi hai?',
      answer: 'Haan – hydration CFS mein especially important hai.\nCFS mein orthostatic intolerance common hai – uthne pe chakkar aana – ye partially dehydration se worse hota hai.\n6-8 glass paani daily – plain lukewarm paani best hai.\nCold water avoid karo CFS mein – gut motility aur slow karta hai.\nPaani ke saath jeera / saunf mila sakte ho – digestive support ke liye.\nEnergy drinks ya packaged juice se hydration mat count karo – ye blood sugar aur adrenal function affect karte hain.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Dorczok MC et al — Dietary Supplementation for Fatigue Symptoms in Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME/CFS): A Systematic Review — Nutrients', year: '2025', url: 'https://pubmed.ncbi.nlm.nih.gov/39940333' },
    { _key: 's2', name: 'Latimer KM, Gunther A, Kopec M — Fatigue in Adults: Evaluation and Management — American Family Physician', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37440739' },
    { _key: 's3', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Subah nashta skip karna ya bahut late karna – CFS patients iska sabse zyada nuksan uthate hain kyunki unka energy reserve already minimum hota hai overnight ke baad',
    mustEat: 'Amla – vitamin C ka concentrated source – CFS mein oxidative stress bahut high hoti hai, amla uska direct daily counter hai aur easily available bhi',
    mustAvoid: 'Energy drinks (Red Bull, Monster type) – CFS patients mein ye temporary relief dete hain lekin adrenal system pe bahut zyada load daalte hain – baad mein crash aur zyada bura hota hai',
  },

  doctorNote: 'Mere CFS patients mein maine notice kiya hai ki jo log refined sugar aur maida dono ek saath chodh dete hain – unka homeopathic treatment response clearly aur faster hota hai – sirf ek chodh ke nahi. Ye combination gut aur blood sugar dono pe ek saath kaam karta hai – CFS mein dono simultaneously addressed karne se hi fark aata hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'CFS (chronic thakan rog) mein kya khayein, kya nahi – complete list: homeopedia.in/diet/chronic-fatigue-syndrome',
  shareTextMealPlan: 'CFS ke liye 4-din ka Indian diet plan: homeopedia.in/diet/chronic-fatigue-syndrome',
  shareTextPage: 'CFS Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/chronic-fatigue-syndrome',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Chronic Fatigue Syndrome diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ CFS diet chart seeded — homeopedia.in/diet/chronic-fatigue-syndrome')
}

seed().catch(console.error)
