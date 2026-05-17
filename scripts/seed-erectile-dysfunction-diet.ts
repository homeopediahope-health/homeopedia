import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-erectile-dysfunction',
  _type: 'diet',
  title: 'Erectile Dysfunction Diet Chart',
  hindiName: 'Napunsakta / Stamna ki Kami / Mardana Kamzori',
  slug: { _type: 'slug', current: 'erectile-dysfunction' },
  relatedDiseaseSlug: 'erectile-dysfunction',
  category: "Men's Health",
  metaTitle: 'Erectile Dysfunction Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'ED (Mardana Kamzori) diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'ED mein blood flow aur nitric oxide (NO) production seedha affected hota hai — aur kuch foods is mechanism ko directly support ya damage karte hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Raat 7 baje ke baad heavy khaana avoid karo', reason: 'raat ka heavy meal testosterone production slow karta hai jo ED ka direct factor hai' },
    { _key: 'eh2', habit: 'Subah khaali pet 1 glass warm paani piyo', reason: 'blood viscosity (gadhaapan) kam hoti hai jo penile blood flow ke liye zaroori hai' },
    { _key: 'eh3', habit: 'Har 4 ghante mein kuch khao, khaana mat chhodo', reason: 'blood sugar spike-crash cycle endothelial (blood vessel lining) damage karta hai ED mein' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (oats)', reason: 'beta-glucan cholesterol kam karta hai jo penile arteries mein blood flow improve karta hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'slow-release carbs blood sugar stable rakhte hain jo endothelial health ke liye zaroori hai' },
        { _key: 'i3', food: 'Jowar / Bajra roti', reason: 'magnesium se bhari — nitric oxide synthesis mein directly kaam aata hai' },
        { _key: 'i4', food: 'Whole wheat roti (2)', reason: 'refined carbs se better — insulin spike nahi hota jo testosterone ko protect karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'L-arginine (amino acid) se bhari jo nitric oxide produce karta hai — direct ED mechanism' },
        { _key: 'i6', food: 'Pyaaz (raw)', reason: 'quercetin + sulphur compounds testosterone level naturally support karte hain' },
        { _key: 'i7', food: 'Lahsun (2-3 kachhi kaliyaan)', reason: 'allicin blood vessel relaxation badhata hai jo erection ke liye zaroori mechanism hai' },
        { _key: 'i8', food: 'Lauki', reason: 'gut aur liver detox support karta hai jo testosterone clearance ke liye zaroori hai' },
        { _key: 'i9', food: 'Karela (thoda)', reason: 'blood sugar control karta hai jo ED ke biggest dietary trigger ko manage karta hai' },
        { _key: 'i10', food: 'Tamatar', reason: 'lycopene se bhara jo oxidative stress kam karta hai — penile tissue health ke liye important' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Tarbuz (summer mein)', reason: 'citrulline hota hai jo body mein L-arginine mein convert hota hai — natural NO booster' },
        { _key: 'i12', food: 'Anar (pomegranate)', reason: 'polyphenols penile blood flow improve karte hain — directly ED mechanism pe kaam' },
        { _key: 'i13', food: 'Amla (dry ya fresh)', reason: 'Vitamin C endothelial function protect karta hai — blood vessel walls ko damage hone nahi deta' },
        { _key: 'i14', food: 'Papaya', reason: 'bromelain enzyme aur Vitamin C dono — testosterone synthesis ke liye supportive' },
        { _key: 'i15', food: 'Seb (apple)', reason: 'quercetin flavonoid — vascular inflammation kam karta hai jo ED ka root cause hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chhi hua)', reason: 'zinc se bhari — testosterone production ke liye zinc sabse zaroori mineral hai ED mein' },
        { _key: 'i17', food: 'Chana (bhuna ya boiled)', reason: 'L-arginine + zinc dono — double action on NO production aur testosterone' },
        { _key: 'i18', food: 'Rajma', reason: 'folate + iron — blood flow support karta hai' },
        { _key: 'i19', food: 'Dahi (ghar ka fresh, 1 small katori)', reason: 'gut health support karta hai — gut-testosterone axis real hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫚',
      items: [
        { _key: 'i20', food: 'Til (sesame)', reason: 'zinc ka Indian best source — roz thoda lena testosterone ke liye directly useful' },
        { _key: 'i21', food: 'Haldi + kali mirch', reason: 'curcumin inflammation kam karta hai aur kali mirch ka piperine absorption 20x badhata hai — dono saath lena zaroori hai' },
        { _key: 'i22', food: 'Adrak wali chai (1 cup, bina zyada chini)', reason: 'gingerol blood circulation improve karta hai ED mein' },
        { _key: 'i23', food: 'Desi ghee (thoda)', reason: 'healthy cholesterol provide karta hai jo testosterone synthesis ka raw material hai' },
        { _key: 'i24', food: 'Methi dana (bheega hua subah)', reason: 'furostanolic saponins testosterone level support karte hain — Indian kitchen mein easily available' },
        { _key: 'i25', food: 'Jeera + dhania paani', reason: 'liver detox support — testosterone metabolism liver se hota hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Anda (2 boiled)', reason: 'Vitamin D + cholesterol dono — testosterone biosynthesis ka raw material anda hai' },
    { _key: 'nva2', food: 'Surmai / Rohu / Katla fish (grilled ya steamed)', reason: 'omega-3 fatty acids endothelial function improve karte hain jo penile blood flow ka base hai' },
    { _key: 'nva3', food: 'Chicken (boiled ya grilled, no skin)', reason: 'lean protein + zinc — testosterone ke liye building block' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Mutton / Red meat (zyada)', reason: 'saturated fat testosterone-binding protein (SHBG) badhata hai jo free testosterone kam karta hai' },
    { _key: 'nvav2', food: 'Fried chicken / Pakoda', reason: 'trans fat + acrylamide both endothelial damage karte hain jo ED ka root hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami)', reason: 'preservatives aur sodium blood pressure badhate hain jo penile arteries ko damage karta hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white bread, naan, biscuit)', reason: 'gut mein rapid glucose spike banata hai jo insulin resistance se endothelial cells damage karta hai — ED ka direct trigger' },
        { _key: 'ri2', food: 'Instant noodles / Packaged food', reason: 'sodium + MSG blood pressure spike karte hain jo penile arteries ko tighten karta hai' },
        { _key: 'ri3', food: 'Namkeen / Chips', reason: 'refined oil + salt combination vascular inflammation seedha badhata hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🥛',
      items: [
        { _key: 'ri4', food: 'Packaged / market ka set dahi', reason: 'preservatives aur added stabilizers gut dysbiosis karte hain — gut-testosterone link strong hai' },
        { _key: 'ri5', food: 'Full-fat packaged milk (zyada)', reason: 'A1 casein vascular inflammation se joda gaya hai kuch men mein' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🍬',
      items: [
        { _key: 'ri6', food: 'Refined sugar (mithai, cold drink, packaged juice)', reason: 'insulin spike — SHBG badhata hai — free testosterone drop hota hai — seedha ED mechanism' },
        { _key: 'ri7', food: 'Soya products (zyada matra mein)', reason: 'phytoestrogen hote hain — excess mein testosterone-estrogen balance affect kar sakte hain men mein' },
        { _key: 'ri8', food: 'Deep fried khaana (poori, bhatura, pakoda daily)', reason: 'trans fat NO production seedha inhibit karta hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🥤',
      items: [
        { _key: 'ri9', food: 'Alcohol (regular heavy drinking)', reason: 'testosterone conversion block karta hai liver mein — ED ka strong independent risk factor hai' },
        { _key: 'ri10', food: 'Cold drinks / Soda', reason: 'fructose corn syrup testosterone level directly suppress karta hai' },
        { _key: 'ri11', food: 'Bottled fruit juice (packaged)', reason: 'added sugar + no fiber — blood sugar rapidly spike karta hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Warm paani + adrak ka tukda (khaali pet)', 'Bheegi methi dana 1 tsp + warm paani'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with palak + adrak aur thodi haldi', 'Moong dal chilla (2) + pudina chutney'], nonVegOption: '2 boiled ande + whole wheat roti (1)' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['Anar ke daane (1 small katori)', 'Bhuna chana (1 mutthi) + lahsun 2 kali'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🌱', vegOptions: ['2 jowar roti + moong dal + palak sabzi + salad', 'Brown rice + rajma + pyaaz-tamatar salad'], nonVegOption: 'Grilled surmai (1 piece) + 2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak wali herbal chai (bina zyada chini) + akhrot 3-4', 'Bhuna til + amla candy (1-2 piece)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + lauki sabzi + dal', 'Moong dal khichdi + desi ghee (thodi)'], nonVegOption: 'Chicken soup (no cream, no maida) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (low-fat doodh + pinch haldi + pinch kali mirch)', 'Warm saunf paani'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Warm paani + methi dana',
      vegNashta: 'Moong dal chilla + chutney',
      vegDopahar: 'Jowar roti + palak sabzi + moong dal',
      vegShaam: 'Anar (fresh)',
      vegRaat: 'Lauki khichdi + desi ghee',
      nonVegNashta: '2 boiled ande + whole wheat roti (1)',
      nonVegDopahar: 'Grilled surmai (1 piece) + 2 roti + palak sabzi',
      nonVegRaat: 'Chicken soup (no cream) + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Adrak warm paani',
      vegNashta: 'Daliya + sabzi',
      vegDopahar: 'Brown rice + rajma + kachha pyaaz salad',
      vegShaam: 'Bhuna chana + amla candy',
      vegRaat: '2 roti + arhar dal + tamatar sabzi',
      nonVegNashta: '2 boiled ande + daliya',
      nonVegDopahar: 'Grilled chicken (boiled) + brown rice + salad',
      nonVegRaat: 'Light fish curry + 1 roti',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Warm nimbu paani (thoda — bina chini)',
      vegNashta: 'Poha + lahsun tadka + pudina',
      vegDopahar: '2 bajra roti + karela thoda + masoor dal',
      vegShaam: 'Herbal chai + akhrot 3',
      vegRaat: 'Moong dal + roti + lauki raita (ghar ka dahi)',
      nonVegNashta: 'Egg bhurji (no butter, thoda tel) + 1 roti',
      nonVegDopahar: 'Katla fish (steamed) + 2 roti + sabzi',
      nonVegRaat: 'Chicken clear soup + 1 roti',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Bheegi methi + warm paani',
      vegNashta: 'Besan chilla (2) + tamatar chutney',
      vegDopahar: 'Brown rice + chana dal + palak sabzi',
      vegShaam: 'Tarbuz (summer mein) ya seb',
      vegRaat: '2 roti + pyaaz-tamatar sabzi + dahi (ghar ka)',
      nonVegNashta: '2 boiled ande + poha',
      nonVegDopahar: 'Grilled surmai + brown rice + pyaaz salad',
      nonVegRaat: 'Light dal + 1 roti + grilled chicken (1 piece)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Stress ya Anxiety Phase Mein',
      emoji: '🔴',
      tips: [
        'Us din sirf khichdi + dahi + salad — simple gut-friendly khaana lein — stress aur heavy food dono ED trigger karte hain',
        'Alcohol, coffee, aur packaged khaana us din bilkul nahi — ye cortisol badhate hain jo testosterone directly suppress karta hai',
        'Subah 10 min brisk walk karein agar possible ho — exercise NO production badhata hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Safe options: sabudana khichdi (thoda, bina zyada ghee), singhare ka aata ki roti, dry fruits (akhrot, badam)',
        'Vrat mein kuch ghante ke baad zaroor khayein — prolonged fasting cortisol spike karta hai jo testosterone drop karta hai',
        'Vrat mein chips, namkeen, fried pakwaan avoid — ye sugar aur trans fat se bhari hain jo vascular health damage karti hain',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti + salad order karein — sabse safe combination',
        'Paneer dishes avoid karein jab tak grilled ho — creamy paneer saturated fat se bhari hai',
        'Practical hack: bahar se khaane se pehle 1 glass paani piyo aur pehle salad khao — overeating nahi hogi',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karein: bhuna chana, akhrot (4-5), dry amla, whole wheat biscuit (plain) — ye sab easy to carry aur ED-friendly hain',
        'Train/hotel mein: dal chawal ya plain roti + sabzi order karein — refined aur fried items avoid karein',
      ],
    },
  ],

  proTip: 'Lahsun ki 2-3 kachhi kaliyaan subah khaali pet paani ke saath khana — clinic mein maine ye specifically suggest kiya hai kyunki allicin blood vessel relaxation mein sabse fast kaam karta hai khaali pet absorb hone pe.',
  importantNote: 'Ye chart ek general dietary guide hai — ED ke causes multiple hote hain (vascular, hormonal, psychological). Apni exact condition ke hisaab se apne homoeopath se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Jab diet se blood circulation aur testosterone support milta hai, homeopathic medicines ka response clearly better hota hai — dono saath kaam karte hain, ek doosre ko replace nahi karte.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya dahi ED mein allowed hai?',
      answer: 'Haan — ghar ka fresh bana dahi allowed hai, lekin packaged market wala dahi avoid karein.\nGhar ka dahi mein live cultures hote hain jo gut health improve karte hain — aur gut-testosterone axis real hai.\nPackaged dahi mein preservatives hote hain jo gut flora disturb karte hain.\nRoz 1 small katori ghar ka dahi — theek hai.\nPackaged ya bahut set (thick) dahi — avoid karein.',
    },
    {
      _key: 'faq2',
      question: 'Kya aloo aur chawal ED mein bilkul band karne padte hain?',
      answer: 'Nahi — bilkul band karna zaroori nahi, lekin quantity aur type matter karta hai.\nWhite rice aur aloo dono high glycemic hain — zyada khane pe blood sugar spike hota hai jo endothelial cells ko damage karta hai.\nBrown rice (controlled quantity mein) aur aloo boiled ya baked (fried nahi) — allowed hain.\nDaily 2 roti + thoda brown rice combination better hai sirf white rice se.',
    },
    {
      _key: 'faq3',
      question: 'Diet se ED mein kitne din mein fark dikhta hai?',
      answer: 'Blood circulation pe asar 3-4 hafte mein dikhna shuru hota hai consistent diet follow karne pe.\nTestosterone-supportive foods ka full effect 6-8 hafte mein aata hai — kyunki hormonal changes slow hote hain.\nShuruaat mein energy aur stamina better feel hota hai — ye sign hai ki diet kaam kar rahi hai.\nDiet akele complete treatment nahi hai — homoeopathic treatment ke saath combined results faster aate hain.\nApne doctor se regular follow-up rakhein.',
    },
    {
      _key: 'faq4',
      question: 'ED mein chai/coffee peena theek hai?',
      answer: '1 cup adrak wali herbal chai — okay hai aur actually beneficial bhi hai (gingerol circulation improve karta hai).\nRegular milk chai (2-3 cup daily) — avoid karein — zyada caffeine cortisol badhata hai jo testosterone ko suppress karta hai.\nCoffee — 1 cup subah allowed hai, lekin 3+ cups daily — endothelial function negatively affect karta hai.\nCold drinks, packaged juice — bilkul avoid karein ED mein.',
    },
    {
      _key: 'faq5',
      question: 'ED mein vrat / fast kar sakte hain?',
      answer: 'Haan — kar sakte hain, lekin kuch dhyan rakhein.\nProlonged fasting (6+ ghante bina kuch khaye) cortisol spike karta hai jo testosterone directly suppress karta hai.\nVrat mein akhrot, dry amla, sabudana (thoda), singhare aata ki roti — safe options hain.\nVrat mein fried namkeen, chips, packaged vrat khaana — avoid karein kyunki trans fat aur salt dono vascular health damage karte hain.\nAgar diabetes bhi hai saath mein — vrat se pehle doctor se poochh lein.',
    },
    {
      _key: 'faq6',
      question: 'Raat ko late dinner khaana ED mein koi problem hai?',
      answer: 'Haan — raat ka late aur heavy dinner ED mein directly problematic hai.\nLate night heavy meal testosterone production slow karta hai — kyunki liver raat mein testosterone metabolism karta hai aur heavy food processing mein busy ho jaata hai.\nRaat 7-8 baje ke baad heavy khaana avoid karein.\nAgar bahut bhook lage — warm dal ka paani ya herbal chai lein.\nYe ek practical change hai jo relatively fast asar karta hai.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific restrictions doctor-specific hain — sabke liye same rule nahi hai.\nGenerally kaha jaata hai ki strong smell wali cheezein (lahsun, pyaaz, camphor, strong coffee) kuch medicines ke saath avoid karein — but ye medicine-specific hai.\nApne homoeopath se specifically poochhen ki aapki medicine ke saath koi restriction hai ya nahi.\nDiet mein jo changes upar bataye hain — wo generally medicines ke saath compatible hain aur actually treatment response improve karte hain.',
    },
    {
      _key: 'faq8',
      question: 'ED mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karna zaroori nahi — lekin type aur cooking method matter karta hai.\nBoiled anda, grilled fish (surmai, rohu, katla), boiled/grilled chicken — allowed hain aur actually beneficial bhi hain (zinc + omega-3 dono ED mein helpful).\nRed meat (mutton, beef) aur fried non-veg — avoid karein.\nProcessed meat (sausage, salami) — bilkul avoid karein.\nNon-veg khane wale daily 1-2 boiled ande aur hafte mein 2-3 baar grilled fish include kar sakte hain.',
    },
    {
      _key: 'faq9',
      question: 'Kya soya milk / soya products ED mein safe hain?',
      answer: 'Kam matra mein — okay hai. Zyada matra mein — avoid karein.\nSoya mein phytoestrogens (plant-based estrogen-like compounds) hote hain — daily zyada matra mein lene pe testosterone-estrogen balance disturb ho sakta hai kuch men mein.\nOccasional soya products (tofu thoda, soya milk kabhi kabhi) — problem nahi.\nDaily soya milk, soya chunks, protein shakes with soy — ye ED mein avoid karna better hai.\nMoong dal, chana dal — better plant protein alternatives hain.',
    },
    {
      _key: 'faq10',
      question: 'Paan, gutka, ya tobacco khaana ED mein kya affect karta hai?',
      answer: 'Ye ED ka ek strong direct trigger hai — avoid karna zaroori hai.\nTobacco compounds nitric oxide synthesis directly block karte hain — NO hi erection ka core mechanism hai.\nPaan mein supari bhi blood vessel constriction badhata hai.\nDiet kitni bhi achi ho — tobacco use ke saath results limited rahenge kyunki mechanism level pe damage hota hai.\nAgar chhoodna mushkil ho — apne doctor se help lein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Esposito K et al — Dietary factors, Mediterranean diet and erectile dysfunction — Journal of Sexual Medicine — 2010', year: '2010', url: 'https://pubmed.ncbi.nlm.nih.gov/20487239' },
    { _key: 's2', name: 'Bauer SR et al — Association of Diet With Erectile Dysfunction Among Men in the Health Professionals Follow-up Study — JAMA Network Open — 2020', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/33185675' },
    { _key: 's3', name: 'Defeudis G et al — Effects of diet and antihyperglycemic drugs on erectile dysfunction: A systematic review — Andrology — 2022', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35485604' },
    { _key: 's4', name: 'Feiertag N et al — Should Men Eat More Plants? A Systematic Review of the Literature on the Effect of Plant-Forward Diets on Men\'s Health — Urology — 2023', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/36963667' },
    { _key: 's5', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Raat ko late aur heavy khaana khana — ye testosterone production directly slow karta hai overnight',
    mustEat: 'Anar (pomegranate) — polyphenols penile blood flow pe directly kaam karte hain aur easily available hai',
    mustAvoid: 'Daily alcohol — testosterone conversion liver mein directly block karta hai, regular heavy drinking strong independent ED risk factor hai',
  },

  doctorNote: 'Maine notice kiya hai ki jo ED patients late dinner aur daily alcohol dono chodh dete hain — unka homeopathic treatment response baaki patients se clearly better aur faster hota hai — akela ek chhoodna utna effective nahi hota, dono saath. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'ED (Mardana Kamzori) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/erectile-dysfunction',
  shareTextMealPlan: 'ED ke liye 4-din ka Indian diet plan: homeopedia.in/diet/erectile-dysfunction',
  shareTextPage: 'ED Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/erectile-dysfunction',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Erectile Dysfunction diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Erectile Dysfunction diet chart seeded — homeopedia.in/diet/erectile-dysfunction')
}

seed().catch(console.error)
