import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-ankylosing-spondylitis',
  _type: 'diet',
  title: 'Ankylosing Spondylitis Diet Chart',
  hindiName: 'Kamar-Reehdh ki Sujan (Ankilozing Spondilaitis)',
  slug: { _type: 'slug', current: 'ankylosing-spondylitis' },
  relatedDiseaseSlug: 'ankylosing-spondylitis',
  category: 'Joints',
  metaTitle: 'Ankylosing Spondylitis Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Ankylosing Spondylitis (Kamar-Reehdh Sujan) diet chart — green list, red list, meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Ankylosing Spondylitis mein gut aur immune system ka directly connection hota hai — aur kuch foods gut inflammation badhaake spine aur joints ki sujan aur bhi tez kar dete hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur flare-up aur travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Raat ka khaana 7 baje tak khatam karo', reason: 'AS mein gut inflammation raat ko zyada active hoti hai jo spine stiffness subah badhata hai' },
    { _key: 'eh2', habit: 'Har khaane ke saath ek katori salad zaroor khao', reason: 'fiber gut microbiome balance karta hai jo AS ki HLA-B27 linked inflammation ko seedha affect karta hai' },
    { _key: 'eh3', habit: 'Paani 8-10 glass roz piyo', reason: 'joints ka synovial fluid maintain hota hai — AS mein dehydration stiffness badha deti hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'low-starch hai — AS mein starch gut mein Klebsiella bacteria ko feed karta hai jo HLA-B27 inflammation trigger karta hai — daliya safe option hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'refined starch se kam — gut dysbiosis itna nahi badhata jitna safed chawal' },
        { _key: 'i3', food: 'Jowar / Bajra roti', reason: 'low glycemic index — spine inflammation markers (CRP) control karne mein help karta hai' },
        { _key: 'i4', food: 'Ragi', reason: 'calcium aur magnesium dono — AS mein bone density maintain karna zaroori hota hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'gut ki sujan kam karta hai — AS mein gut aur spine ka directly linked inflammation cycle slow hota hai' },
        { _key: 'i6', food: 'Palak', reason: 'iron aur folate — AS mein anaemia common side effect hai — palak isko address karta hai' },
        { _key: 'i7', food: 'Karela', reason: 'bitter compounds gut inflammation markers reduce karte hain — AS activity score pe positive effect' },
        { _key: 'i8', food: 'Broccoli', reason: 'sulforaphane hota hai — NF-kB pathway (AS inflammation ka main route) ko block karta hai' },
        { _key: 'i9', food: 'Gajar', reason: 'beta-carotene antioxidant — AS patients mein oxidative stress high hota hai jo gajar kam karta hai' },
        { _key: 'i10', food: 'Shimla mirch (laal/peeli)', reason: 'vitamin C rich — collagen synthesis support karta hai jo joints ke liye zaroori hai' },
        { _key: 'i11', food: 'Methi (saag ya dana)', reason: 'fiber + phytoestrogen — gut microbiome balance karta hai — AS mein effective' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i12', food: 'Amla', reason: 'vitamin C ka sabse concentrated Indian source — collagen synthesis aur joint tissue repair ke liye' },
        { _key: 'i13', food: 'Papaya', reason: 'papain enzyme — gut inflammation khatam karta hai — AS ka gut connection seedha affect hota hai' },
        { _key: 'i14', food: 'Seb (apple)', reason: 'quercetin flavonoid — TNF-alpha ko block karta hai jo AS mein main inflammatory cytokine hai' },
        { _key: 'i15', food: 'Anar (pomegranate)', reason: 'punicalagin compounds — joint inflammation markers reduce karte hain clinical evidence se' },
        { _key: 'i16', food: 'Jamun (seasonal)', reason: 'anthocyanins — oxidative stress kam karta hai jo AS mein high hoti hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '\uD83FAB',
      items: [
        { _key: 'i17', food: 'Moong dal', reason: 'easily digest hoti hai — gut pe minimum load — AS mein leaky gut common hai — moong safe hai' },
        { _key: 'i18', food: 'Masoor dal', reason: 'iron rich — AS mein anaemia address karta hai — splitting nahi karta gut mein' },
        { _key: 'i19', food: 'Chane (bhune — whole)', reason: 'high fiber — gut bacteria ke liye prebiotic — HLA-B27 inflammation control' },
        { _key: 'i20', food: 'Tofu (soya — limited, 2-3 baar hafte mein)', reason: 'plant protein — zyada soya AS mein inflammation badhata hai isliye limited rakhein' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫚',
      items: [
        { _key: 'i21', food: 'Haldi + kali mirch (chai ya doodh mein)', reason: 'curcumin NF-kB pathway block karta hai — kali mirch ka piperine curcumin absorption 20x badhata hai — combination zaroori hai' },
        { _key: 'i22', food: 'Adrak chai (no milk, no sugar)', reason: 'gingerols COX-2 enzyme inhibit karte hain — wahi enzyme jo NSAID drugs target karte hain AS mein' },
        { _key: 'i23', food: 'Sarson ka tel (cooking)', reason: 'omega-3 fatty acids — SANUT study mein low omega-3 high AS disease activity se linked' },
        { _key: 'i24', food: 'Desi ghee (thodi matra)', reason: 'butyrate produce karta hai — gut lining strengthen hoti hai — leaky gut AS mein seedha inflammation badhata hai' },
        { _key: 'i25', food: 'Jeera paani (subah khaali pet)', reason: 'digestive enzymes activate karta hai — gut motility AS mein commonly slow hoti hai' },
        { _key: 'i26', food: 'Mulethi chai', reason: 'mild anti-inflammatory — gut mucosa heal karta hai — AS ka gut-spine axis support karta hai' },
        { _key: 'i27', food: 'Til (sesame)', reason: 'calcium aur omega-6 balance — bone density maintain — AS mein vertebral bone loss concern hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla / Surmai (grilled ya steamed)', reason: 'omega-3 PUFAs — SANUT study mein omega-3 directly AS disease activity score se inversely linked — sabse important food' },
    { _key: 'nva2', food: '2 ande (boiled)', reason: 'selenium aur vitamin D dono — AS mein vitamin D deficiency common hai aur inflammation badhati hai' },
    { _key: 'nva3', food: 'Chicken (boiled ya grilled, skin removed)', reason: 'lean protein — collagen synthesis ke liye zaroori — skin mein saturated fat hoti hai jo inflammation badhata hai isliye remove karo' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Mutton / Red meat', reason: 'arachidonic acid zyada — pro-inflammatory prostaglandins badhata hai — AS mein directly disease activity increase karta hai' },
    { _key: 'nvav2', food: 'Fried fish / Fried chicken', reason: 'cooking mein trans fat banta hai — omega-3 ka benefit khatam ho jata hai aur inflammation aur badh jati hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami, packaged chicken)', reason: 'preservatives aur sodium AS gut dysbiosis badha dete hain' },
    { _key: 'nvav4', food: 'Shellfish (jhinga, prawn)', reason: 'heavy protein — digestion slow karta hai — gut inflammation badha deta hai AS mein' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Starch aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, naan, biscuit, pasta)', reason: 'Klebsiella bacteria ka main food hai gut mein — AS mein HLA-B27 cross-reactivity se ye bacteria seedha spine inflammation trigger karta hai' },
        { _key: 'ri2', food: 'White rice (zyada)', reason: 'high starch load — roz plain white rice gut bacteria balance bigad deta hai — brown rice better' },
        { _key: 'ri3', food: 'Potato chips / Farsan', reason: 'maida + excess starch — gut dysbiosis aur bhi tez karta hai' },
        { _key: 'ri4', food: 'Processed breakfast cereals', reason: 'hidden sugar + refined starch — anti-inflammatory diet ke bilkul against hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🥛',
      items: [
        { _key: 'ri5', food: 'Full-fat packaged milk (market wala)', reason: 'casein protein AS patients mein gut inflammation trigger kar sakta hai kuch logon mein — observe karo apne reaction ko' },
        { _key: 'ri6', food: 'Packaged / set dahi (market wala)', reason: 'commercial dahi mein high tyramine aur preservatives — gut bacteria balance bigad deta hai [Ghar ka fresh dahi allowed hai]' },
        { _key: 'ri7', food: 'Paneer (tala hua)', reason: 'frying process saturated fat badhata hai — joint inflammation worse karta hai' },
        { _key: 'ri8', food: 'Cream, butter (zyada matra)', reason: 'saturated fat directly inflammatory cytokines badhata hai AS mein' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'High-Starch Sabziyan (Limited Karein)',
      emoji: '🥔',
      items: [
        { _key: 'ri9', food: 'Aloo', reason: 'AS mein starch restriction helpful hoti hai — gut mein Klebsiella bacteria starch pe hi paalta hai — daily aloo avoid karein' },
        { _key: 'ri10', food: 'Arvi / Yam / Suran', reason: 'high starch — same Klebsiella mechanism — hafte mein 1-2 baar se zyada nahi' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🥤',
      items: [
        { _key: 'ri11', food: 'Alcohol', reason: 'gut lining damage karta hai — leaky gut aur badh jata hai — AS mein gut-spine axis seedha affected hota hai' },
        { _key: 'ri12', food: 'Cold drinks / Soda', reason: 'phosphoric acid bone density kam karta hai — AS mein already vertebral health concern hoti hai' },
        { _key: 'ri13', food: 'Packaged fruit juice', reason: 'fiber remove hoti hai — pure sugar spike — inflammation badhata hai' },
        { _key: 'ri14', food: 'Excess chai (3+ cups)', reason: 'tannins iron absorption kam karte hain — AS mein anaemia already common hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + adrak ka tukda + haldi pinch', 'Jeera paani (raat ka bhiga hua jeera)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with palak aur gajar (toss karo)', 'Moong dal chilla + ghar ka fresh dahi (1 katori)'], nonVegOption: '2 boiled ande + 1 bajra roti + salad' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya anar ke daane (handful)', 'Bhuna chana (1 small mutthi)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🌱', vegOptions: ['2 bajra roti + moong dal + lauki sabzi + salad', 'Brown rice (1 katori) + masoor dal + shimla mirch sabzi + salad'], nonVegOption: 'Grilled rohu + 2 roti + salad' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak-haldi chai (no milk) + akhrot 4-5 daane', 'Roasted makhana + amla (1 fresh ya dry)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 jowar roti + sabzi + dal', 'Khichdi (moong + brown rice) + ghee (1 tsp)'], nonVegOption: 'Boiled chicken soup (no cream) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (low-fat milk + haldi + kali mirch)', 'Warm mulethi chai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Jeera paani',
      vegNashta: 'Daliya + palak aur gajar',
      vegDopahar: 'Bajra roti + moong dal + lauki sabzi',
      vegShaam: 'Bhuna chana + amla',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled ande + 1 bajra roti + salad',
      nonVegDopahar: 'Grilled rohu + 2 roti + salad',
      nonVegRaat: 'Khichdi + ghee',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Adrak haldi paani',
      vegNashta: 'Moong dal chilla + fresh dahi',
      vegDopahar: 'Brown rice + masoor dal + shimla mirch sabzi',
      vegShaam: 'Akhrot + seb',
      vegRaat: 'Jowar roti + arhar dal + methi sabzi',
      nonVegNashta: 'Moong dal chilla + fresh dahi',
      nonVegDopahar: 'Boiled chicken + brown rice + palak sabzi',
      nonVegRaat: 'Jowar roti + arhar dal + methi sabzi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Jeera paani',
      vegNashta: 'Ragi daliya + gajar',
      vegDopahar: 'Bajra roti + chana dal + turai sabzi',
      vegShaam: 'Makhana + anar ke daane',
      vegRaat: 'Moong dal khichdi + haldi doodh',
      nonVegNashta: 'Ragi daliya + gajar',
      nonVegDopahar: 'Grilled surmai + bajra roti + salad',
      nonVegRaat: 'Moong dal khichdi + haldi doodh',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Adrak paani',
      vegNashta: 'Poha (no aloo) + palak',
      vegDopahar: 'Brown rice + masoor dal + palak sabzi',
      vegShaam: 'Bhuna chana + papaya',
      vegRaat: 'Jowar roti + moong dal + lauki sabzi',
      nonVegNashta: '2 boiled ande + palak',
      nonVegDopahar: 'Boiled chicken soup + 2 roti + salad',
      nonVegRaat: 'Jowar roti + moong dal + lauki sabzi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '🔴',
      tips: [
        'Us din sirf daliya, khichdi, ya moong dal soup — gut pe minimum load rakho — inflammation aur na badhe',
        'Aloo, maida, packaged kuch bhi bilkul nahi — starch flare pe Klebsiella bacteria aur fast grow karta hai',
        'Warm compress ke saath warm haldi paani pite raho — dehydration AS flare ko aur worse bana deta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (thodi matra — sirf ek vrat mein) — starch zyada hai lekin ek din theek hai — roz nahi',
        'Kuttu ka atta (singhare wala) — low starch alternative — vrat mein better option hai sabudana se',
        'Vrat mein namkeen snacks (farali chips, fried) bilkul avoid — oil + starch dono milke flare trigger karte hain',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti order karo — maida naan, butter naan avoid — plain roti maange',
        'Salad zaroor lo — cucumber, tomato, raw onion free mein milti hai — gut fiber maintain hoti hai bahar bhi',
        'Hack: Khaane se pehle 1 glass paani aur akhrot 4-5 daane ghar se kha ke jao — bahar kam khaoge, gut better behave karta hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, akhrot, dry amla, ragi biscuit (ghar ka bana ya clean label wala) — train/flight dono',
        'Hotel mein: dal chawal ya plain khichdi mangao — room service mein available hota hai — maida wali cheez refuse karo',
      ],
    },
  ],

  proTip: 'Subah uthke 10 minute bhi spine stretching karo AUR tabhi kuch khao — AS mein subah ki stiffness diet + movement dono se khatam hoti hai — sirf ek se nahi. Raat ka khaana 7 baje tak khatam karna aur subah halka khaana spine stiffness clearly kam karta hai — maine patients mein ye pattern consistently dekha hai.',
  importantNote: 'Ye chart ek general guide hai — AS ek autoimmune condition hai aur har patient ka gut microbiome alag hota hai. Apni condition ke hisaab se apne homoeopath se personalized plan banwayein — Dr. Shadab Khan se consult karein.',
  homeopathyDiet: 'AS mein gut inflammation spine inflammation se seedha linked hai — anti-inflammatory diet gut ko heal karne mein help karta hai jiski wajah se homeopathic medicines better kaam karti hain aur treatment response faster aata hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya AS (Ankylosing Spondylitis) mein dahi khana theek hai?',
      answer: 'Ghar ka fresh bana dahi allowed hai — packaged / market wala dahi avoid karein.\nFresh dahi mein live probiotics hote hain jo gut microbiome balance karte hain — AS mein gut bacteria ka seedha role spine inflammation mein hota hai.\nPackaged dahi mein tyramine aur preservatives zyada hote hain jo gut bacteria balance bigad dete hain.\nSirf 1 small katori — subah ya dopahar ke saath — raat ko nahi.\nAgar khane ke baad stiffness badhe — to dahi bhi band karo aur apne doctor se batao.',
    },
    {
      _key: 'faq2',
      question: 'AS mein chawal (rice) khana chahiye ya bilkul band karna padega?',
      answer: 'Safed chawal bilkul band karna zaroori nahi — lekin kam karo aur brown rice pe shift karo.\nAS mein low-starch diet helpful hoti hai kyunki gut mein Klebsiella bacteria starch pe palta hai — aur ye bacteria HLA-B27 cross-reactivity se spine inflammation trigger karta hai.\nBrown rice ka starch slower digest hota hai — gut bacteria utna nahi badh pata jitna safed chawal mein.\nRoz 1 katori brown rice — dopahar mein — theek hai.\nRaat ko chawal avoid karo — raat ko starch digestion slow hoti hai aur gut fermentation badhta hai.',
    },
    {
      _key: 'faq3',
      question: 'AS mein diet se kitne hafte mein fark dikhta hai?',
      answer: 'Stiffness aur pain mein 4-6 hafte mein clearly fark dikhne lagta hai — agar diet consistent rahe.\nGut inflammation dietary changes ke 2-3 hafte mein hi reduce hone lagta hai — spine tak effect pahunchne mein thoda zyada time lagta hai.\nCRP (C-Reactive Protein) blood test mein improvement 6-8 hafte mein dikh sakta hai.\nYe diet treatment replace nahi karta — medicines ke saath diet ka role supporting hai.\nDoctor se regular follow-up karte raho — diet aur medicine dono saath kaam karte hain.',
    },
    {
      _key: 'faq4',
      question: 'AS mein chai peena theek hai?',
      answer: '1 cup subah adrak wali chai (no milk, light) — theek hai.\nAdrak mein gingerols hote hain jo COX-2 enzyme inhibit karte hain — same pathway jo AS ki anti-inflammatory medicines target karti hain.\nMilk wali chai 2-3 cup se zyada nahi — tannins iron absorption kam karte hain aur AS mein anaemia already concern hoti hai.\nCoffee 1 cup tak theek hai — zyada avoid karo.\nHerbal chai (adrak, haldi, mulethi, tulsi) — jitni chahein — AS mein ye clearly helpful hain.',
    },
    {
      _key: 'faq5',
      question: 'AS mein vrat / fast kar sakte hain?',
      answer: 'Chhota vrat (16-hour intermittent) — AS mein helpful bhi ho sakta hai — gut ko rest milta hai aur inflammation kam hoti hai temporarily.\nPoore din ka nirjala vrat — avoid karo — dehydration AS mein joint stiffness aur bada deta hai.\nVrat mein kuttu atta, sabudana (thoda), fresh fruits — theek.\nVrat mein fried farali snacks, sabudana vada, fried aloo — bilkul avoid — tel + starch combination flare ka risk.\nAgar vrat ke din flare feel ho — turant kuch light khao aur vrat toro — body ke saath compromise mat karo AS mein.',
    },
    {
      _key: 'faq6',
      question: 'Kya AS mein raat ko late khaana (9-10 baje) problem karta hai?',
      answer: 'Haan — AS mein raat ka late khaana clearly problem karta hai.\nGut inflammation raat ko zyada active hoti hai AS patients mein — late khaana gut ki activity aur badh deta hai.\nRaat ko late khaane se subah ki stiffness worse hoti hai — ye pattern maine patients mein consistently dekha hai.\n7 baje tak khaana khatam karo — ideal hai.\nAgar bhookh lage raat ko — warm haldi doodh ya mulethi chai — heavy khaana nahi.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'AS ke homeopathic treatment mein coffee aur strong smells kuch specific medicines ke saath avoid karne ki salah di jati hai — lekin ye sab medicines pe nahi lagta.\nApne doctor se specifically poochho — kaun si medicine chal rahi hai uske hisaab se restriction hogi.\nGenerally — maida, alcohol, aur processed food avoid karo — ye medicines ke absorption ko directly affect karte hain.\nKhaane aur medicine ke beech 30-40 minute ka gap rakho — ye almost sabke liye helpful hai.',
    },
    {
      _key: 'faq8',
      question: 'AS mein non-veg band karna padega ya chal sakta hai?',
      answer: 'Sabhi non-veg band karna zaroori nahi — lekin smart choices karni padti hain.\nAllowed: Rohu, katla, surmai (grilled ya steamed) — omega-3 PUFAs directly AS disease activity score kam karte hain.\nAllowed: 2 boiled ande — vitamin D ke liye.\nAllowed: Boiled/grilled chicken (skin remove karke).\nAvoid: Mutton, red meat — arachidonic acid badhata hai jo AS inflammation worse karta hai.\nAvoid: Fried non-veg koi bhi — cooking method matter karta hai.\nNon-veg hafte mein 3-4 baar tak — roz roz nahi.',
    },
    {
      _key: 'faq9',
      question: 'AS mein aloo khana theek hai?',
      answer: 'Daily aloo avoid karo — hafte mein 1-2 baar se zyada nahi.\nAS mein low-starch diet helpful hoti hai — aloo high starch food hai jo gut mein Klebsiella bacteria ko badhata hai.\nAgar khana ho — boiled aloo (small amount, dopahar mein) — fried aloo bilkul nahi.\nAloo chips, french fries — completely avoid — starch + trans fat dono milke AS mein worst combination hai.\nBetter option: lauki, gajar, shimla mirch — ye sab AS mein clearly safe aur helpful hain.',
    },
    {
      _key: 'faq10',
      question: 'Kya AS mein bahar ka khaana ya restaurant food problem karta hai?',
      answer: 'Bahar khana possible hai — lekin smart choices karni padti hain.\nAvoid: Naan, butter naan, paratha — maida aur butter dono AS mein directly inflammation badhate hain.\nOrder karo: Dal tadka, plain roti, sabzi (without extra butter).\nSalad zaroor lo — fiber gut bacteria balance rakhta hai.\nEk practical tip: Bahar jaane se pehle ghar mein kuch light khao — is tarah bahar kam khaoge aur gut better respond karta hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Vergne-Salle P et al — Diet and Disease Activity in Patients with Axial Spondyloarthritis: SpondyloArthritis and NUTrition Study (SANUT) — Nutrients — 2022', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/36432416' },
    { _key: 's2', name: 'Popa SL et al — Nutrition in Spondyloarthritis and Related Immune-Mediated Disorders — Nutrients — 2022', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35334935' },
    { _key: 's3', name: 'Tel Adigüzel K et al — Relationship between diet, oxidative stress, and inflammation in ankylosing spondylitis — Archives of Rheumatology — 2021', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/35949875' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Maida aur high-starch foods roz khaate rehna — Klebsiella bacteria gut mein badhta hai jo AS ki spine inflammation directly trigger karta hai',
    mustEat: 'Adrak (fresh) — gingerols COX-2 enzyme inhibit karte hain — wahi pathway jo AS ki anti-inflammatory medicines target karti hain — completely natural aur Indian kitchen mein hamesha',
    mustAvoid: 'Maida — AS mein gut-spine inflammation ka main dietary trigger — bread, naan, biscuit, pasta — sab forms mein avoid',
  },

  doctorNote: 'Maine notice kiya hai ki AS ke jo patients maida aur daily aloo dono chodh dete hain aur adrak-haldi ko roz include karte hain — unka homeopathic treatment response baaki patients se clearly better hota hai — akele ek change se itna fark nahi aata, dono cheezein saath karna zaroori hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Ankylosing Spondylitis mein kya khayein, kya nahi — complete list: homeopedia.in/diet/ankylosing-spondylitis',
  shareTextMealPlan: 'Ankylosing Spondylitis ke liye 4-din ka Indian diet plan: homeopedia.in/diet/ankylosing-spondylitis',
  shareTextPage: 'Ankylosing Spondylitis Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/ankylosing-spondylitis',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Ankylosing Spondylitis diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Ankylosing Spondylitis diet chart seeded — homeopedia.in/diet/ankylosing-spondylitis')
}

seed().catch(console.error)
